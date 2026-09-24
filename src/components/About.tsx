import { FloatingIcons } from "./FloatingIcons"
import { profile, education, leadership, interests } from "@/data/profile"

const leadershipBullets = [
  `Education: ${education.institution} — ${education.degree} (${education.end}); ${education.honors.join(", ")}.`,
  ...leadership.map((l) => `${l.role}, ${l.org} (${l.period}) — ${l.detail}`),
]

export function About() {
  return (
    <section
      id="about"
      className="relative py-12 md:py-16 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--card)" }}
    >
      <style>{`
        @media (max-width: 1023px) {
          .about-img1 { float: left; width: 42%; aspect-ratio: 2/3; margin-right: 16px; margin-bottom: 8px; }
          .about-img2 { float: right; width: 42%; aspect-ratio: 2/3; margin-left: 16px; margin-bottom: 8px; }
          .about-clearfix { clear: both; }
        }
        @media (min-width: 1024px) {
          .about-img1 { height: 100%; aspect-ratio: unset; }
          .about-img2 { aspect-ratio: 1/1; max-height: 200px; }
          .about-clearfix { display: none; }
        }
      `}</style>
      <FloatingIcons seed={6} />
      <div className="relative z-10 max-w-7xl mx-auto px-0 md:px-4">
        {/* Mobile layout: float images beside text */}
        <div className="lg:hidden space-y-6">
          <div>
            <div
              className="about-img1 rounded-2xl overflow-hidden shrink-0"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <img
                src="/assets/hans-portrait.jpg"
                alt="Hans Fredrick portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3
              className="font-serif text-xl font-semibold mb-2"
              style={{ color: "var(--primary)" }}
            >
              Who I am
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              {profile.detail}
            </p>
            <div className="about-clearfix" />
          </div>
          <div>
            <div
              className="about-img2 rounded-2xl overflow-hidden shrink-0"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <img
                src="/assets/hans-portrait2.jpg"
                alt="Hans Fredrick"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3
              className="font-serif text-xl font-semibold mb-2"
              style={{ color: "var(--primary)" }}
            >
              Beyond work
            </h3>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "var(--muted-foreground)" }}
            >
              Outside the codebase I stay active and build with people who care
              about their craft.
            </p>
            <ul
              className="space-y-1.5 text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              {interests.map((interest) => (
                <li key={interest} className="flex gap-2 items-start">
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  {interest}
                </li>
              ))}
            </ul>
            <div className="about-clearfix" />
          </div>
          <div className="pt-2">
            <h3
              className="font-serif text-xl font-semibold mb-3"
              style={{ color: "var(--primary)" }}
            >
              Achievements & Leadership
            </h3>
            <ul className="space-y-2.5">
              {leadershipBullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 items-start text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop layout: 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4">
          <div
            className="rounded-2xl overflow-hidden row-span-2"
            style={{
              backgroundColor: "var(--muted)",
              height: "100%",
              minHeight: "280px",
            }}
          >
            <img
              src="/assets/hans-portrait.jpg"
              alt="Hans Fredrick portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center py-2 px-2">
            <h3
              className="font-serif text-xl font-semibold mb-3"
              style={{ color: "var(--primary)" }}
            >
              Who I am
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              {profile.detail}
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--muted)",
              aspectRatio: "1/1",
              maxHeight: "200px",
            }}
          >
            <img
              src="/assets/hans-portrait2.jpg"
              alt="Hans Fredrick"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center py-2 px-2">
            <h3
              className="font-serif text-xl font-semibold mb-3"
              style={{ color: "var(--primary)" }}
            >
              Beyond work
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--muted-foreground)" }}
            >
              Outside the codebase I stay active and build with people who care
              about their craft.
            </p>
            <ul
              className="space-y-1.5 text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              {interests.map((interest) => (
                <li key={interest} className="flex gap-2 items-start">
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 flex flex-col justify-center py-2 px-2">
            <h3
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: "var(--primary)" }}
            >
              Achievements & Leadership
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {leadershipBullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 items-start text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
