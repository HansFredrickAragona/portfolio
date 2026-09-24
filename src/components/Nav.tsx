import { useState, useEffect } from "react"

export function Nav({
  dark,
  setDark,
}: {
  dark: boolean
  setDark: (v: boolean) => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    "Projects",
    "Services",
    "Experience",
    "About",
    "Skills",
    "Contact",
  ]

  const navBg = scrolled
    ? dark
      ? "rgba(14,20,16,0.88)"
      : "rgba(245,240,232,0.88)"
    : dark
      ? "rgba(14,20,16,0.45)"
      : "rgba(245,240,232,0.4)"

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backdropFilter: "blur(18px) saturate(1.4)",
        backgroundColor: navBg,
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-serif text-xl font-semibold tracking-tight"
          style={{ color: "var(--primary)" }}
        >
          HF
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace("é", "e")}`}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted-foreground)")
                }
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: "var(--secondary)",
              color: "var(--muted-foreground)",
            }}
            aria-label="Toggle dark mode"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted-foreground)")
            }
          >
            {dark ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.88"
              e.currentTarget.style.transform = "translateY(-1px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1"
              e.currentTarget.style.transform = ""
            }}
          >
            Let's get in touch
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ backgroundColor: "var(--primary)" }}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
              style={{ backgroundColor: "var(--primary)" }}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ backgroundColor: "var(--primary)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          borderTop: menuOpen ? "1px solid var(--border)" : "none",
          backgroundColor: dark
            ? "rgba(14,20,16,0.97)"
            : "rgba(245,240,232,0.97)",
        }}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace("é", "e")}`}
                className="text-base font-medium block py-1"
                style={{ color: "var(--primary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-full inline-block mt-1"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              Let's get in touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
