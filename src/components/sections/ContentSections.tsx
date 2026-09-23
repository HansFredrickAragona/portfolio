import { experience } from "@/models/experience";
import { skillGroups } from "@/models/skills";
import { leadership } from "@/models/leadership";
import { recognition } from "@/models/recognition";
import { Section } from "@/components/ui/Section";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8">
        {experience.map((item) => (
          <li key={item.id} className="border-border border-l-2 pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-text text-lg font-semibold">{item.role}</h3>
              <p className="text-text-subtle text-sm">
                {item.start} – {item.end}
              </p>
            </div>
            <p className="text-primary text-sm font-medium">{item.org}</p>
            <ul
              className="text-text-muted mt-2 list-disc space-y-1 pl-5 text-sm"
              role="list"
            >
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function CapabilitiesSection() {
  return (
    <Section id="skills" title="How I work">
      <p className="text-text-subtle measure mb-6 max-w-[60ch] text-sm">
        Capability themes from verified work. Full categorized skills live in About.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.id} className="border-border border-t pt-4">
            <h3 className="text-text mb-2 text-base font-semibold">{group.label}</h3>
            <ul className="space-y-2" role="list">
              {group.items.map((item) => (
                <li key={item} className="text-text-muted text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function LeadershipSection() {
  return (
    <Section id="leadership" title="Leadership">
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="space-y-6" role="list">
          {leadership.map((item) => (
            <li key={item.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-text text-base font-semibold">{item.role}</h3>
                <p className="text-text-subtle text-sm">{item.period}</p>
              </div>
              <p className="text-primary text-sm font-medium">{item.org}</p>
              <ul className="text-text-muted mt-1 list-disc pl-5 text-sm" role="list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div>
          <h3 className="text-text mb-3 text-base font-semibold">Recognition</h3>
          <ul className="space-y-2" role="list">
            {recognition.map((item) => (
              <li
                key={item.id}
                className="border-border text-text-muted flex items-start gap-2 rounded border px-3 py-2 text-sm"
              >
                <span aria-hidden="true" className="text-highlight mt-0.5">
                  ★
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
