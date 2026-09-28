import {
  createHmac,
  randomBytes,
  randomInt,
  timingSafeEqual,
} from "node:crypto"
import { resolve4, resolve6, resolveMx } from "node:dns/promises"

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hansfredrick2600@gmail.com"
const DEFAULT_FROM_EMAIL = "Portfolio <onboarding@resend.dev>"
const CHALLENGE_COOKIE = "portfolio-email-challenge"
const CHALLENGE_TTL_MS = 10 * 60 * 1000
const CODE_RESEND_DELAY_MS = 60 * 1000
const MAX_CODE_ATTEMPTS = 5

interface ContactFormData {
  action?: unknown
  name?: unknown
  email?: unknown
  message?: unknown
  code?: unknown
}

interface VerificationChallenge {
  email: string
  nonce: string
  codeDigest: string
  expiresAt: number
  attemptsRemaining: number
  sentAt: number
}

interface ValidContactMessage {
  name: string
  email: string
  message: string
}

function validateEmail(email: string): boolean {
  const emailRegex =
    /^(?=.{1,254}$)(?=.{1,64}@)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/
  return emailRegex.test(email)
}

function isMissingDnsRecord(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error.code === "ENODATA" || error.code === "ENOTFOUND")
  )
}

async function domainAcceptsEmail(domain: string): Promise<boolean> {
  try {
    if ((await resolveMx(domain)).length > 0) return true
  } catch (error) {
    if (!isMissingDnsRecord(error)) throw error
  }

  try {
    if ((await resolve4(domain)).length > 0) return true
  } catch (error) {
    if (!isMissingDnsRecord(error)) throw error
  }

  try {
    if ((await resolve6(domain)).length > 0) return true
  } catch (error) {
    if (!isMissingDnsRecord(error)) throw error
  }

  return false
}

function getResendApiKey(): string {
  const apiKey = process.env.RESEND_API || process.env.RESEND_API_KEY
  if (!apiKey) throw new Error("Resend API key is not configured")
  return apiKey
}

function getResendClient() {
  return new Resend(getResendApiKey())
}

function getFromEmail(): string {
  return process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL
}

function hasVerifiedSenderConfigured(): boolean {
  const configuredFrom = process.env.CONTACT_FROM_EMAIL?.trim()
  if (!configuredFrom) return false

  const senderAddress = configuredFrom.match(/<([^>]+)>/)?.[1] ?? configuredFrom
  return !senderAddress.toLowerCase().endsWith("@resend.dev")
}

function getSigningSecret(): string {
  return process.env.EMAIL_VERIFICATION_SECRET || getResendApiKey()
}

function digestCode(nonce: string, code: string): string {
  return createHmac("sha256", getSigningSecret())
    .update(`${nonce}:${code}`)
    .digest("hex")
}

function signChallenge(challenge: VerificationChallenge): string {
  const payload = Buffer.from(JSON.stringify(challenge)).toString("base64url")
  const signature = createHmac("sha256", getSigningSecret())
    .update(payload)
    .digest("base64url")
  return `${payload}.${signature}`
}

function readChallenge(token: string): VerificationChallenge | null {
  try {
    const [payload, signature, extra] = token.split(".")
    if (!payload || !signature || extra) return null

    const expectedSignature = createHmac("sha256", getSigningSecret())
      .update(payload)
      .digest()
    const actualSignature = Buffer.from(signature, "base64url")
    if (
      actualSignature.length !== expectedSignature.length ||
      !timingSafeEqual(actualSignature, expectedSignature)
    ) {
      return null
    }

    const value = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    ) as Partial<VerificationChallenge>

    if (
      typeof value.email !== "string" ||
      typeof value.nonce !== "string" ||
      typeof value.codeDigest !== "string" ||
      !/^[a-f0-9]{64}$/.test(value.codeDigest) ||
      typeof value.expiresAt !== "number" ||
      typeof value.attemptsRemaining !== "number" ||
      typeof value.sentAt !== "number"
    ) {
      return null
    }

    return value as VerificationChallenge
  } catch {
    return null
  }
}

function setChallengeCookie(
  response: NextResponse,
  challenge: VerificationChallenge,
) {
  const maxAge = Math.max(
    0,
    Math.ceil((challenge.expiresAt - Date.now()) / 1000),
  )
  response.cookies.set(CHALLENGE_COOKIE, signChallenge(challenge), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/api/contact",
    maxAge,
  })
}

function clearChallengeCookie(response: NextResponse) {
  response.cookies.set(CHALLENGE_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/api/contact",
    maxAge: 0,
  })
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 5000)
}

function validateContactMessage(
  body: ContactFormData,
): { value: ValidContactMessage } | { error: string } {
  if (
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return { error: "Name, email, and message are required." }
  }

  const name = body.name.trim()
  const email = body.email.trim().toLowerCase()
  const message = body.message.trim()

  if (!validateEmail(email)) return { error: "Enter a valid email address." }
  if (name.length > 100) return { error: "Name is too long." }
  if (message.length > 5000) return { error: "Message is too long." }

  return {
    value: {
      name: sanitizeInput(name),
      email,
      message: sanitizeInput(message),
    },
  }
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return errorResponse("Invalid contact request.", 400)
    }

    const validated = validateContactMessage(body)
    if ("error" in validated) return errorResponse(validated.error, 400)

    const { name, email, message } = validated.value
    const action = body.action ?? "request-verification"
    if (action !== "request-verification" && action !== "verify") {
      return errorResponse("Invalid contact request.", 400)
    }

    const from = getFromEmail()

    if (action === "request-verification") {
      if (!hasVerifiedSenderConfigured()) {
        return errorResponse(
          "Email verification is temporarily unavailable. Please use the direct email link instead.",
          503,
        )
      }

      let domainIsReachable: boolean
      try {
        const emailDomain = email.slice(email.lastIndexOf("@") + 1)
        domainIsReachable = await domainAcceptsEmail(emailDomain)
      } catch {
        return errorResponse(
          "Could not verify that email domain. Please try again.",
          503,
        )
      }
      if (!domainIsReachable) {
        return errorResponse(
          "That email domain does not appear to accept email.",
          400,
        )
      }

      const existingToken = request.cookies.get(CHALLENGE_COOKIE)?.value
      const existingChallenge = existingToken
        ? readChallenge(existingToken)
        : null
      if (
        existingChallenge?.email === email &&
        Date.now() - existingChallenge.sentAt < CODE_RESEND_DELAY_MS
      ) {
        return errorResponse(
          "Please wait a minute before requesting another code.",
          429,
        )
      }

      const code = randomInt(0, 1_000_000).toString().padStart(6, "0")
      const nonce = randomBytes(16).toString("hex")
      const sentAt = Date.now()
      const challenge: VerificationChallenge = {
        email,
        nonce,
        codeDigest: digestCode(nonce, code),
        expiresAt: sentAt + CHALLENGE_TTL_MS,
        attemptsRemaining: MAX_CODE_ATTEMPTS,
        sentAt,
      }

      let resend: ReturnType<typeof getResendClient>
      try {
        resend = getResendClient()
      } catch {
        return errorResponse(
          "Email verification is temporarily unavailable. Please use the direct email link instead.",
          503,
        )
      }

      const { error } = await resend.emails.send({
        from,
        to: email,
        subject: "Verify your email for Hans's portfolio",
        text: `Your email verification code is ${code}. It expires in 10 minutes. If you did not request this code, you can ignore this email.`,
      })

      if (error) {
        console.error("Resend verification error:", error)
        return errorResponse(
          "We could not send a verification code to that address. Check the address and try again.",
          502,
        )
      }

      const response = NextResponse.json({ verificationRequired: true })
      setChallengeCookie(response, challenge)
      return response
    }

    const token = request.cookies.get(CHALLENGE_COOKIE)?.value
    const challenge = token ? readChallenge(token) : null
    if (!challenge) {
      return errorResponse(
        "Request a new verification code before sending your message.",
        400,
      )
    }
    if (challenge.expiresAt <= Date.now()) {
      const response = errorResponse(
        "That code has expired. Request a new verification code.",
        400,
      )
      clearChallengeCookie(response)
      return response
    }
    if (challenge.email !== email) {
      return errorResponse(
        "The verification code was sent to a different email address.",
        400,
      )
    }
    if (typeof body.code !== "string" || !/^\d{6}$/.test(body.code)) {
      return errorResponse("Enter the 6-digit verification code.", 400)
    }
    if (challenge.attemptsRemaining <= 0) {
      const response = errorResponse(
        "Too many incorrect codes. Request a new verification code.",
        429,
      )
      clearChallengeCookie(response)
      return response
    }

    const expectedDigest = Buffer.from(challenge.codeDigest, "hex")
    const submittedDigest = Buffer.from(
      digestCode(challenge.nonce, body.code),
      "hex",
    )
    if (!timingSafeEqual(expectedDigest, submittedDigest)) {
      challenge.attemptsRemaining -= 1
      const response = errorResponse(
        challenge.attemptsRemaining > 0
          ? `That code is incorrect. ${challenge.attemptsRemaining} attempts left.`
          : "Too many incorrect codes. Request a new verification code.",
        challenge.attemptsRemaining > 0 ? 400 : 429,
      )
      if (challenge.attemptsRemaining > 0) {
        setChallengeCookie(response, challenge)
      } else {
        clearChallengeCookie(response)
      }
      return response
    }

    let resend: ReturnType<typeof getResendClient>
    try {
      resend = getResendClient()
    } catch {
      return errorResponse("Email service is temporarily unavailable.", 503)
    }

    const { data, error } = await resend.emails.send({
      from,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Portfolio Contact — ${name}`,
      text: `New Portfolio Contact\n\nName:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      console.error("Resend contact error:", error)
      return errorResponse("Failed to send the message. Please try again.", 500)
    }

    const response = NextResponse.json({ success: true, id: data?.id })
    clearChallengeCookie(response)
    return response
  } catch (error) {
    console.error("Contact API error:", error)
    return errorResponse("Internal server error.", 500)
  }
}
