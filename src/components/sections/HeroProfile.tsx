import Image from "next/image";
import { careerMilestones, milestoneLegend } from "@/models/milestones";
import { education } from "@/models/education";
import { profile } from "@/models/profile";

const categorySwatch: Record<string, string> = {
  learning: "bg-[#14532D]",
  sports: "bg-[#1E3A5F]",
  leadership: "bg-[#B45309]",
  build: "bg-[#15803D]",
  research: "bg-[#7C3AED]",
};

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-t-0">
      <div className="container-shell grid gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-7">
          <h1
            id="hero-title"
            className="text-text font-serif text-4xl leading-tight font-bold tracking-tight sm:text-5xl"
          >
            {profile.headline}
          </h1>
          <p className="text-text-muted measure mt-5 max-w-[40ch] text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.cta.primary.href}
              className="bg-primary text-primary-fg inline-flex min-h-11 items-center rounded px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
            >
              {profile.cta.primary.label}
            </a>
            <a
              href={profile.cta.secondary.href}
              className="border-accent text-accent hover:bg-accent hover:text-accent-fg inline-flex min-h-11 items-center rounded border px-5 py-3 text-sm font-medium transition-colors"
            >
              {profile.cta.secondary.label}
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="border-border bg-bg-subtle aspect-[4/5] w-full overflow-hidden rounded border">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Hans Fredrick"
              width={1200}
              height={1800}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProfileSection() {
  const edu = education[0];

  return (
    <section id="profile" aria-labelledby="profile-title" className="section-shell">
      <div className="container-shell">
        <h2
          id="profile-title"
          className="text-primary mb-6 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Profile
        </h2>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="measure text-text-muted">{profile.detail}</p>
            {edu ? (
              <div className="border-border border-t pt-4">
                <p className="text-text text-sm font-semibold">{edu.institution}</p>
                <p className="text-text-muted text-sm">{edu.degree}</p>
                <p className="text-text-subtle text-sm">{edu.end}</p>
                <ul
                  className="text-text-subtle mt-2 flex flex-wrap gap-2 text-xs"
                  role="list"
                >
                  {edu.honors.map((honor) => (
                    <li key={honor} className="border-border rounded border px-2 py-1">
                      {honor}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="text-text mb-3 text-lg font-semibold">Career growth</h3>
            <p className="text-text-subtle mb-4 text-sm">
              Four-year college narrative from owner-verified milestones. Equal visual
              weight — not a activity heatmap or commit graph.
            </p>
            <ul
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
              role="list"
              aria-label="Career milestones by college year"
            >
              {careerMilestones.map((block) => (
                <li
                  key={block.year}
                  className="border-border bg-surface rounded border p-3"
                >
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
        </div>
      </div>
    </section>
  );
}
