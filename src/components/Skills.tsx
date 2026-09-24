import { FloatingIcons } from "./FloatingIcons"
import { aboutSkillCategories } from "@/data/skills"

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-12 md:py-16 px-6 overflow-hidden"
    >
      <FloatingIcons seed={1} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-1 h-7 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <h2
            className="font-serif text-3xl md:text-4xl font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {aboutSkillCategories.map((group, i) => (
            <div
              key={group.id}
              className="py-5 px-2"
              style={{
                borderBottom: "1px solid var(--border)",
                borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
              }}
            >
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--accent)" }}
              >
                {group.label}
              </h3>
              <ul className="space-y-1.5">
                {group.entries.map((entry) => (
                  <li
                    key={entry.id}
                    className="text-sm leading-snug"
                    style={{ color: "var(--foreground)" }}
                  >
                    <span className="font-medium">{entry.name}</span>
                    <span
                      className="block text-xs"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {entry.evidence}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
