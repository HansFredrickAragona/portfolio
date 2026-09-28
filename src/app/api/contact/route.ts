import { resolve4, resolve6, resolveMx } from "node:dns/promises"

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hansfredrick2600@gmail.com"

interface ContactFormData {
  name?: unknown
  email?: unknown
  message?: unknown
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
  for (const resolve of [resolveMx, resolve4, resolve6]) {
    try {
      if ((await resolve(domain)).length > 0) return true
    } catch (error) {
      if (!isMissingDnsRecord(error)) throw error
    }
  }

  return false
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

  const name = body.name.trim().replace(/[\r\n]+/g, " ")
  const email = body.email.trim().toLowerCase()
  const message = body.message.trim()

  if (!validateEmail(email)) {
    return { error: "Enter a valid email address." }
  }
  if (name.length > 100) return { error: "Name is too long." }
  if (message.length > 5000) return { error: "Message is too long." }

  return { value: { name, email, message } }
}

function getResendClient() {
  const apiKey = process.env.RESEND_API || process.env.RESEND_API_KEY
  if (!apiKey) throw new Error("Email service is not configured")
  return new Resend(apiKey)
}

function getFromEmail(): string | null {
  const from = process.env.CONTACT_FROM_EMAIL?.trim()
  if (!from) return null

  const senderAddress = from.match(/<([^>]+)>/)?.[1] ?? from
  if (senderAddress.toLowerCase().endsWith("@resend.dev")) return null

  return from
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(request: NextRequest) {
  let body: ContactFormData

  try {
    const value: unknown = await request.json()
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return errorResponse("Invalid contact request.", 400)
    }
    body = (value as ContactFormData)
  } catch {
    return errorResponse("Invalid contact request.", 400)
  }

  const validated = validateContactMessage(body)
  if ("error" in validated) return errorResponse(validated.error, 400)

  const { name, email, message } = validated.value
  const domain = email.slice(email.lastIndexOf("@") + 1)

  try {
    if (!(await domainAcceptsEmail(domain))) {
      return errorResponse("That email domain does not accept email.", 400)
    }
  } catch {
    return errorResponse(
      "Could not check that email domain. Please try again.",
      503,
    )
  }

  const from = getFromEmail()
  if (!from) {
    return errorResponse("Email sending is temporarily unavailable.", 503)
  }

  let resend: ReturnType<typeof getResendClient>
  try {
    resend = getResendClient()
  } catch {
    return errorResponse("Email sending is temporarily unavailable.", 503)
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Portfolio Contact — ${name}`,
      text: `New Portfolio Contact\n\nName:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      return errorResponse("Failed to send the message. Please try again.", 502)
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch {
    return errorResponse("Failed to send the message. Please try again.", 502)
  }
}
