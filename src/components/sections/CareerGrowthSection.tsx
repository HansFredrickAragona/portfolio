import { careerMilestones, milestoneLegend } from "@/models/milestones";

const categorySwatch: Record<string, string> = {
  learning: "bg-[#14532D]",
  sports: "bg-[#1E3A5F]",
  leadership: "bg-[#B45309]",
  build: "bg-[#15803D]",
  research: "bg-[#7C3AED]",
};

export function CareerGrowthSection() {
  return (
    <section id="career" aria-labelledby="career-title" className="section-shell">
      <div className="container-shell">
        <h2
          id="career-title"
          className="text-primary mb-6 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Career growth
        </h2>
        <p className="text-text-subtle mb-4 max-w-[60ch] text-sm">
          Four-year college narrative from owner-verified milestones. Equal visual weight
          — not an activity heatmap or commit graph.
        </p>
        <ul
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label="Career milestones by college year"
        >
          {careerMilestones.map((block) => (
            <li key={block.year} className="border-border bg-surface rounded border p-3">
              <p className="text-primary text-sm font-semibold">{block.label}</p>
              <ul className="mt-2 space-y-2" role="list">
                {block.items.map((item) => (
                  <li key={item.id} className="flex items-start gap-2 text-sm">
                    <span
                      aria-hidden="true"
                      className={`mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-sm ${categorySwatch[item.category]}`}
                    />
                    <span className="text-text-muted">{item.text}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-3 text-xs" role="list">
          {milestoneLegend.map((entry) => (
            <li
              key={entry.category}
              className="text-text-subtle flex items-center gap-1.5"
            >
              <span
                aria-hidden="true"
                className={`inline-block h-2.5 w-2.5 rounded-sm ${categorySwatch[entry.category]}`}
              />
              {entry.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
