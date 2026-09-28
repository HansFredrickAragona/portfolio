import { links } from "@/data/links"

export function Footer() {
  return (
    <footer
      id="contact-footer"
      className="py-8 px-6"
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--primary-foreground)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="font-serif text-xl font-semibold opacity-90">
          Hans Fredrick O. Aragona
        </p>
        <div className="flex items-center gap-6">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            GitHub
          </a>
          <a
            href={`mailto:${links.email}`}
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            Email
          </a>
        </div>
        <p className="text-xs opacity-40">© 2026 Hans Fredrick O. Aragona</p>
      </div>
    </footer>
  )
}
