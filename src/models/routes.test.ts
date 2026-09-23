import { describe, expect, it } from "vitest";
import { adjacentCaseStudies, hasCaseStudyRoute } from "@/models/routes";
import { soilScanCaseStudy } from "@/models/case-studies/soil-scan";
import { baguioReadyGisCaseStudy } from "@/models/case-studies/baguioreadygis";

describe("case study routes", () => {
  it("implements only the two completed slugs", () => {
    expect(hasCaseStudyRoute("soil-scan")).toBe(true);
    expect(hasCaseStudyRoute("baguioreadygis")).toBe(true);
    expect(hasCaseStudyRoute("grammar-checker")).toBe(false);
    expect(hasCaseStudyRoute("resume-job-tracker")).toBe(false);
  });

  it("provides return and adjacent navigation", () => {
    const fromSoil = adjacentCaseStudies("soil-scan");
    expect(fromSoil.previous).toBeUndefined();
    expect(fromSoil.next?.slug).toBe("baguioreadygis");

    const fromGis = adjacentCaseStudies("baguioreadygis");
    expect(fromGis.previous?.slug).toBe("soil-scan");
    expect(fromGis.next).toBeUndefined();
  });

  it("keeps case study structure and ownership explicit", () => {
    for (const study of [soilScanCaseStudy, baguioReadyGisCaseStudy]) {
      expect(study.sections.problem.length).toBeGreaterThan(20);
      expect(study.sections.role).toMatch(/I |Project Lead|Full-stack/);
      expect(study.sections.results.length).toBeGreaterThan(20);
      expect(study.illustration.illustrative).toBe(true);
      expect(study.claims.length).toBeGreaterThan(0);
    }
    expect(soilScanCaseStudy.actions[0].label).toBe(
      "View fertilizer recommendation demo",
    );
  });
});
