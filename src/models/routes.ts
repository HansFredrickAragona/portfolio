export const implementedCaseStudySlugs = [] as const;

export function hasCaseStudyRoute(slug: string): boolean {
  return (implementedCaseStudySlugs as readonly string[]).includes(slug);
}
