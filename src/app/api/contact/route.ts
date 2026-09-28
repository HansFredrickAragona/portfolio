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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
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

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name is too long" },
        { status: 400 }
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long" },
        { status: 500 }
      )
    }

    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedMessage = sanitizeInput(message)

    let resend: ReturnType<typeof getResendClient>
    try {
      resend = getResendClient()
    } catch {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
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
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}