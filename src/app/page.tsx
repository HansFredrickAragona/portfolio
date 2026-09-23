import { Section } from "@/components/ui/Section";
import { profile } from "@/models/profile";

const placeholders = [
  { id: "profile", title: "Profile" },
  { id: "work", title: "Selected work" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Capabilities" },
  { id: "leadership", title: "Leadership" },
  { id: "contact", title: "Contact" },
] as const;

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-title" className="border-t-0">
        <div className="container-shell grid gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-7">
            <h1
              id="hero-title"
              className="text-text font-serif text-4xl leading-tight font-bold tracking-tight sm:text-5xl"
            >
              {profile.headline}
            </h1>
            <p className="measure text-text-muted mt-5 text-lg">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="bg-primary text-primary-fg inline-flex min-h-11 items-center rounded px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="border-accent text-accent hover:bg-accent hover:text-accent-fg inline-flex min-h-11 items-center rounded border px-5 py-3 text-sm font-medium transition-colors"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div
              className="border-border bg-bg-subtle aspect-[4/5] w-full overflow-hidden rounded border"
              role="img"
              aria-label="Portrait placeholder pending optimized asset"
            />
          </div>
        </div>
      </section>

      {placeholders.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          <p className="text-text-subtle text-sm">
            Section boundary ready for verified content.
          </p>
        </Section>
      ))}
    </>
  );
}
