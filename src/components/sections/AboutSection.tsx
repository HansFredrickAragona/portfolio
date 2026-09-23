import Image from "next/image";
import { aboutPhotos } from "@/models/about-photos";
import { aboutSkillCategories, skillGroups } from "@/models/skills";
import { recognition } from "@/models/recognition";
import { leadership } from "@/models/leadership";
import { profile } from "@/models/profile";
import { education } from "@/models/education";
import { TechIcon } from "@/components/icons/TechIcon";
import { AboutTechSymbols } from "@/components/sections/AboutTechSymbols";
import { Section } from "@/components/ui/Section";

function Photo({ photo }: { photo: (typeof aboutPhotos)[number] }) {
  const isTall = photo.span === "tall";
  const isWide = photo.span === "wide";

  return (
    <figure
      className={`border-border bg-bg-subtle relative overflow-hidden rounded border ${
        isTall
          ? "aspect-[3/4] md:aspect-[3/4]"
          : isWide
            ? "aspect-[16/10]"
            : "aspect-square"
      }`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={
          isWide ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 50vw, 25vw"
        }
        className="object-cover"
      />
      {photo.temporary ? (
        <figcaption className="text-text-subtle absolute right-2 bottom-2 rounded bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] px-2 py-1 text-[10px] tracking-wide uppercase">
          Temporary photo
        </figcaption>
      ) : null}
    </figure>
  );
}

export function AboutSection() {
  const edu = education[0];

  return (
    <Section id="about" title="About" className="relative overflow-hidden">
      <AboutTechSymbols />

      <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Who I am */}
        <div className="lg:col-span-5">
          <h3 className="text-text mb-3 text-lg font-semibold">Who I am</h3>
          <p className="measure text-text-muted">{profile.detail}</p>
          <p className="text-text-muted measure mt-4">{profile.summary}</p>
          {edu ? (
            <div className="border-border mt-5 border-t pt-4">
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

        {/* Photos + achievements cluster */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-4">
          <div className="col-span-2 sm:col-span-1">
            <Photo photo={aboutPhotos[0]} />
          </div>
          <div className="col-span-2 sm:col-span-1 sm:mt-8">
            <Photo photo={aboutPhotos[1]} />
          </div>
          <div className="col-span-2">
            <Photo photo={aboutPhotos[2]} />
          </div>
        </div>

        {/* Achievements + Beyond work */}
        <div className="space-y-8 lg:col-span-3">
          <div>
            <h3 className="text-text mb-3 text-lg font-semibold">
              Achievements and leadership
            </h3>
            <ul className="space-y-3" role="list">
              {leadership.map((item) => (
                <li key={item.id} className="text-sm">
                  <p className="text-text font-medium">{item.role}</p>
                  <p className="text-primary text-xs">
                    {item.org} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
            <ul className="text-text-muted mt-4 space-y-2 text-sm" role="list">
              {recognition.map((item) => (
                <li key={item.id} className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-highlight mt-0.5">
                    ★
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text mb-3 text-lg font-semibold">Beyond work</h3>
            <ul className="text-text-muted space-y-2 text-sm" role="list">
              <li>Varsity swimming (Class A) and club instruction.</li>
              <li>Founded and chaired an AWS Community-connected campus club.</li>
              <li>Presentations, pitching events, and community tech talks.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills — integrated editorial columns */}
      <div className="border-border relative z-10 mt-12 border-t pt-10">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-text text-lg font-semibold">
            Skills and technical capabilities
          </h3>
          <p className="text-text-subtle text-sm">
            Verified from résumé and project evidence — no proficiency scores.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {aboutSkillCategories.map((category) => (
            <div key={category.id}>
              <h4 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
                {category.label}
              </h4>
              <ul className="space-y-3" role="list">
                {category.entries.map((entry) => (
                  <li key={entry.id} className="flex items-start gap-2.5">
                    {"icon" in entry && entry.icon ? (
                      <span
                        aria-hidden="true"
                        className="border-border bg-surface text-text-muted mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded border"
                      >
                        <TechIcon id={entry.icon} className="h-3.5 w-3.5" />
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="bg-primary/40 mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      />
                    )}
                    <span className="min-w-0">
                      <span className="text-text block text-sm font-medium">
                        {entry.name}
                      </span>
                      <span className="text-text-subtle block text-xs leading-relaxed">
                        {entry.evidence}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compact capability narrative groups */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h4 className="text-text mb-2 text-sm font-semibold">{group.label}</h4>
              <ul className="flex flex-wrap gap-1.5" role="list">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-border bg-surface text-text-muted rounded border px-2 py-1 text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
