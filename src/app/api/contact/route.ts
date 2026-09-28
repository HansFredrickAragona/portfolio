import { resolve4, resolve6, resolveMx } from "node:dns/promises"

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hansfredrick2600@gmail.com"
const FROM_EMAIL = "Portfolio <onboarding@resend.dev>"

interface ContactFormData {
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

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 5000)
}

function getResendClient() {
  const apiKey = process.env.RESEND_API || process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("RESEND_API_KEY not configured")
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    const { name, email, message } = body

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      )
    }

    const normalizedEmail = email.trim()
    if (!validateEmail(normalizedEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, {
        status: 400,
      })
    }

    const emailDomain = normalizedEmail.slice(
      normalizedEmail.lastIndexOf("@") + 1,
    )
    let domainIsReachable: boolean
    try {
      domainIsReachable = await domainAcceptsEmail(emailDomain)
    } catch {
      return NextResponse.json(
        { error: "Could not verify that email domain. Please try again." },
        { status: 503 },
      )
    }

    if (!domainIsReachable) {
      return NextResponse.json(
        { error: "That email domain does not appear to accept email." },
        { status: 400 },
      )
    }

    if (name.length > 100) {
      return NextResponse.json({ error: "Name is too long" }, { status: 400 })
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: "Message is too long" }, {
        status: 400,
      })
    }

    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(normalizedEmail)
    const sanitizedMessage = sanitizeInput(message)

    let resend: ReturnType<typeof getResendClient>
    try {
      resend = getResendClient()
    } catch {
      return NextResponse.json({ error: "Email service not configured" }, {
        status: 500,
      })
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: sanitizedEmail,
      subject: `New Portfolio Contact — ${sanitizedName}`,
      text: `New Portfolio Contact

Name:
${sanitizedName}

Email:
${sanitizedEmail}

Message:
${sanitizedMessage}`,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, {
        status: 500,
      })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json({ error: "Internal server error" }, {
      status: 500,
    })
  }
}
