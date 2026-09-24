import { useState, type CSSProperties } from "react"

import { FloatingIcons } from "./FloatingIcons"

import { links } from "@/data/links"

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const [copied, setCopied] = useState(false)

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleEmail = () => {
    const s = encodeURIComponent(`Portfolio inquiry from ${form.name}`)

    const b = encodeURIComponent(form.message)

    window.location.href = `mailto:${links.email}?subject=${s}&body=${b}`
  }

  const copyMessage = () => {
    navigator.clipboard.writeText(form.message)

    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }

  const inputBase: CSSProperties = {
    width: "100%",

    padding: "12px 16px",

    borderRadius: "10px",

    border: "1px solid var(--border)",

    backgroundColor: "var(--background)",

    color: "var(--foreground)",

    fontSize: "14px",

    fontFamily: "Outfit, sans-serif",

    outline: "none",

    transition: "border-color 0.2s",
  }

  return (
    <section
      id="contact"
      className="relative py-[10px] md:py-[74px] px-6 overflow-hidden"
      style={{ backgroundColor: "var(--card)" }}
    >
      <FloatingIcons seed={3} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-9">
          <div
            className="w-1 h-8 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <h2
            className="font-serif text-[2rem] md:text-[2.65rem] font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Let's talk
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <p
            className="text-[1.15rem] leading-relaxed self-center"
            style={{ color: "var(--muted-foreground)" }}
          >
            Fill out the form and hit "Continue to email": it opens your email
            client with the message ready to send.
          </p>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                style={inputBase}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              <input
                style={inputBase}
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
            <textarea
              style={{ ...inputBase, resize: "none", height: "100px" }}
              placeholder="Your message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
            <div className="flex gap-3 pt-1">
              <button
                onClick={handleEmail}
                disabled={!form.name || !form.email || !form.message}
                className="flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--primary)",

                  color: "var(--primary-foreground)",
                }}
              >
                Continue to email ↗
              </button>
              <button
                onClick={copyMessage}
                disabled={!form.message}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  borderColor: "var(--primary)",

                  color: "var(--primary)",
                }}
              >
                {copied ? "Copied ✓" : "Copy message"}
              </button>
            </div>
            <div
              className="flex items-center gap-4 pt-3 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <button
                onClick={() => navigator.clipboard.writeText(links.email)}
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted-foreground)")
                }
              >
                Copy email
              </button>
              <span style={{ color: "var(--border)" }}>·</span>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted-foreground)")
                }
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
