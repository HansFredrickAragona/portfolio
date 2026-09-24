import { FloatingIcons } from "./FloatingIcons"
import { experience } from "@/data/experience"

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-12 md:py-16 px-6 overflow-hidden"
    >
      <FloatingIcons seed={4} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-1 h-7 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <h2
            className="font-serif text-3xl md:text-4xl font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {experience.map((e) => (
            <div
              key={e.id}
              className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3
                    className="font-serif text-base md:text-lg font-semibold leading-snug"
                    style={{ color: "var(--primary)" }}
                  >
                    {e.role}
                  </h3>
                  <p
                    className="text-xs font-medium mt-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    {e.org}
                  </p>
                </div>
                <span
                  className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--secondary)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {e.start} – {e.end}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                {e.contribution}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "var(--secondary)",
                      color: "var(--secondary-foreground)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
