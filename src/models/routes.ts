export const implementedCaseStudySlugs = ["soil-scan", "baguioreadygis"] as const;

export function hasCaseStudyRoute(slug: string): boolean {
  return (implementedCaseStudySlugs as readonly string[]).includes(slug);
}

export const caseStudyOrder = [...implementedCaseStudySlugs] as const;

export function adjacentCaseStudies(slug: string): {
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string };
} {
  const index = caseStudyOrder.indexOf(slug as (typeof caseStudyOrder)[number]);
  if (index < 0) return {};
  const titles: Record<string, string> = {
    "soil-scan": "Soil Scan",
    baguioreadygis: "BaguioReadyGIS",
  };
  const previousSlug = index > 0 ? caseStudyOrder[index - 1] : undefined;
  const nextSlug =
    index < caseStudyOrder.length - 1 ? caseStudyOrder[index + 1] : undefined;
  return {
    previous: previousSlug
      ? { slug: previousSlug, title: titles[previousSlug] }
      : undefined,
    next: nextSlug ? { slug: nextSlug, title: titles[nextSlug] } : undefined,
  };
}
