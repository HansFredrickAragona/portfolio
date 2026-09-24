import { useState } from "react"
import { FloatingIcons } from "./FloatingIcons"

const SERVICES = [
  {
    title: "Website & web application development",
    desc: "From concept to deployed product — responsive, performant web apps built with modern full-stack tooling including React, Next.js, Node.js, and cloud infrastructure.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <circle cx="7" cy="6" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="10" cy="6" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="13" cy="6" r="0.8" fill="currentColor" stroke="none" />
        <polyline points="8,14 11,17 16,12" />
      </svg>
    ),
  },
  {
    title: "AI-powered solutions",
    desc: "Machine learning models, NLP pipelines, and intelligent recommendation systems integrated directly into usable products.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" />
        <line x1="9" y1="10" x2="9" y2="14" />
        <line x1="12" y1="9" x2="12" y2="15" />
        <line x1="15" y1="10" x2="15" y2="14" />
      </svg>
    ),
  },
  {
    title: "Data analytics & visualization",
    desc: "Turning raw datasets into clear, actionable insight through statistical analysis, Power BI dashboards, and custom data visualization layers.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    title: "Business process automation",
    desc: "Replacing manual workflows with efficient, maintainable automated systems — from data pipelines to notification workflows.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Technical consulting",
    desc: "Architecture review, technology selection, and strategic technical guidance for teams building software or adopting new platforms.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export function Services() {
  const [open, setOpen] = useState<number | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <section
      id="services"
      className="relative py-14 md:py-[74px] px-6 overflow-hidden"
      style={{ backgroundColor: "var(--card)" }}
    >
      <FloatingIcons seed={2} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="section-title">Services</h2>
        <div className="w-full">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="hover-card border-b py-[18px] cursor-pointer transition-all duration-200 rounded-lg px-3 -mx-3"
              style={{
                borderColor: "var(--border)",
                backgroundColor:
                  hovered === i ? "rgba(29,58,47,0.04)" : "transparent",
              }}
              onClick={() => setOpen(open === i ? null : i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                    style={{
                      backgroundColor:
                        hovered === i ? "var(--primary)" : "var(--muted)",
                      color:
                        hovered === i
                          ? "var(--primary-foreground)"
                          : "var(--muted-foreground)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    className="font-serif text-[1.4rem] md:text-[1.85rem] font-medium transition-colors duration-200"
                    style={{
                      color:
                        hovered === i ? "var(--primary)" : "var(--foreground)",
                    }}
                  >
                    {s.title}
                  </h3>
                </div>
                <span
                  className="shrink-0 text-lg font-light transition-all duration-300"
                  style={{
                    color: "var(--accent)",
                    transform: open === i ? "rotate(45deg)" : "none",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className="text-[1.15rem] leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
