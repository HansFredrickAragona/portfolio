import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { baguioReadyGisCaseStudy } from "@/models/case-studies/baguioreadygis";
import { soilScanCaseStudy } from "@/models/case-studies/soil-scan";
import { adjacentCaseStudies, hasCaseStudyRoute } from "@/models/routes";
import { siteMetadata } from "@/models/metadata";

const studies = {
  "soil-scan": soilScanCaseStudy,
  baguioreadygis: baguioReadyGisCaseStudy,
} as const;

type CaseStudy = (typeof studies)[keyof typeof studies];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = studies[slug as keyof typeof studies];
  if (!study || !hasCaseStudyRoute(slug)) {
    return { title: "Case study not found" };
  }
  return {
    title: `${study.title} — Case study | ${siteMetadata.title}`,
    description: study.subtitle,
  };
}

const sectionLabels = [
  { key: "problem", label: "Problem" },
  { key: "role", label: "Role" },
  { key: "process", label: "Process" },
  { key: "solution", label: "Solution" },
  { key: "results", label: "Results" },
] as const;

function CaseStudyNav({ slug }: { slug: string }) {
  const { previous, next } = adjacentCaseStudies(slug);
  return (
    <nav
      aria-label="Case study navigation"
      className="border-border mt-10 flex flex-wrap gap-3 border-t pt-6"
    >
      <Link
        href="/#work"
        className="border-border text-text hover:border-primary hover:text-primary inline-flex min-h-11 items-center rounded border px-4 text-sm"
      >
        Back to work
      </Link>
      {previous ? (
        <Link
          href={`/work/${previous.slug}`}
          className="text-accent hover:text-primary inline-flex min-h-11 items-center px-2 text-sm underline-offset-4 hover:underline"
        >
          ← {previous.title}
        </Link>
      ) : null}
      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="text-accent hover:text-primary inline-flex min-h-11 items-center px-2 text-sm underline-offset-4 hover:underline"
        >
          {next.title} →
        </Link>
      ) : null}
    </nav>
  );
}

function CaseStudyView({ study, slug }: { study: CaseStudy; slug: string }) {
  return (
    <article className="container-shell py-12 lg:py-16">
      <p className="text-text-subtle mb-2 text-sm">
        Case study · {study.status === "completed" ? "Completed" : "In development"}
      </p>
      <h1 className="text-text font-serif text-3xl font-bold tracking-tight sm:text-4xl">
        {study.title}
      </h1>
      <p className="text-text-muted mt-2 text-lg">{study.subtitle}</p>

      <figure className="border-border bg-bg-subtle mt-8 overflow-hidden rounded border">
        <Image
          src={study.illustration.src}
          alt={study.illustration.alt}
          width={800}
          height={500}
          className="aspect-[16/10] w-full object-cover"
          priority
        />
        <figcaption className="text-text-subtle border-border border-t px-4 py-3 text-sm">
          {study.illustration.illustrative
            ? "Illustrative artwork (not a product screenshot)."
            : study.illustration.alt}
        </figcaption>
      </figure>

      <div className="mt-10 max-w-[70ch] space-y-8">
        {sectionLabels.map(({ key, label }) => (
          <section key={key} aria-labelledby={`cs-${key}`}>
            <h2 id={`cs-${key}`} className="text-primary mb-2 text-xl font-semibold">
              {label}
            </h2>
            <p className="text-text-muted">{study.sections[key]}</p>
          </section>
        ))}

        <section aria-labelledby="cs-stack">
          <h2 id="cs-stack" className="text-primary mb-2 text-xl font-semibold">
            Stack
          </h2>
          <ul className="flex flex-wrap gap-2" role="list">
            {study.stack.map((tech) => (
              <li
                key={tech}
                className="border-border bg-surface text-text-muted rounded border px-2.5 py-1.5 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {study.actions.length > 0 ? (
          <section aria-labelledby="cs-actions">
            <h2 id="cs-actions" className="text-primary mb-2 text-xl font-semibold">
              Links
            </h2>
            <ul className="space-y-2" role="list">
              {study.actions.map((action) => (
                <li key={action.href}>
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-fg inline-flex min-h-11 items-center rounded px-4 text-sm font-medium"
                  >
                    {action.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  {"note" in action && action.note ? (
                    <p className="text-text-subtle mt-1 text-sm">{action.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <CaseStudyNav slug={slug} />
    </article>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  if (!hasCaseStudyRoute(slug) || !(slug in studies)) {
    notFound();
  }
  const study = studies[slug as keyof typeof studies];
  return <CaseStudyView study={study} slug={slug} />;
}
