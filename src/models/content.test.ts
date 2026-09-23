import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";

const publicRoot = path.resolve(__dirname, "../../public");
import { experience } from "@/models/experience";
import { projects } from "@/models/projects";
import { aboutSkillCategories, aboutContentGroups, skillGroups } from "@/models/skills";
import { aboutPhotos } from "@/models/about-photos";
import { heroTechSymbols, aboutFloatSymbols } from "@/models/tech-symbols";
import { technologies } from "@/models/technologies";
import { leadership } from "@/models/leadership";
import { recognition } from "@/models/recognition";
import { careerMilestones } from "@/models/milestones";
import { links } from "@/models/links";
import { education } from "@/models/education";
import { profile } from "@/models/profile";
import { soilScanCaseStudy } from "@/models/case-studies/soil-scan";
import { baguioReadyGisCaseStudy } from "@/models/case-studies/baguioreadygis";
import { techIconPaths } from "@/components/icons/techIconPaths";

const blockedPatterns = [
  new RegExp(`0${"9"}2${"9"}`),
  new RegExp(`Que${"z"}on`),
  new RegExp(`4${"0"}3 0${"5"}31`),
];

function assertNoPrivateContent(value: unknown, path = "root"): void {
  if (typeof value === "string") {
    for (const pattern of blockedPatterns) {
      expect(pattern.test(value), `private pattern in ${path}`).toBe(false);
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertNoPrivateContent(item, `${path}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      assertNoPrivateContent(child, `${path}.${key}`);
    }
  }
}

describe("content models", () => {
  it("keeps private phone and city out of all public models", () => {
    assertNoPrivateContent({
      experience,
      projects,
      skillGroups,
      aboutSkillCategories,
      aboutContentGroups,
      aboutPhotos,
      heroTechSymbols,
      aboutFloatSymbols,
      technologies,
      leadership,
      recognition,
      careerMilestones,
      links,
      education,
      profile,
      soilScanCaseStudy,
      baguioReadyGisCaseStudy,
    });
  });

  it("keeps hero tech symbols limited and decorative with local icon paths", () => {
    expect(heroTechSymbols.length).toBeGreaterThanOrEqual(5);
    expect(heroTechSymbols.length).toBeLessThanOrEqual(8);
    for (const symbol of heroTechSymbols) {
      expect(symbol.decorative).toBe(true);
      expect(symbol.name.length).toBeGreaterThan(0);
      expect(techIconPaths).toHaveProperty(symbol.icon);
      expect(symbol.desktop.opacity).toMatch(/opacity-/);
    }
    expect(aboutFloatSymbols.length).toBeLessThanOrEqual(5);
    for (const symbol of aboutFloatSymbols) {
      expect(techIconPaths).toHaveProperty(symbol.icon);
    }
  });

  it("groups About skills into verified categories with evidence lines", () => {
    expect(aboutContentGroups.map((g) => g.id)).toEqual([
      "who",
      "achievements",
      "beyond",
      "skills",
    ]);
    const labels = aboutSkillCategories.map((c) => c.label);
    expect(labels).toContain("Languages");
    expect(labels).toContain("AI and machine learning");
    expect(labels).toContain("Collaboration and professional");
    for (const category of aboutSkillCategories) {
      expect(category.entries.length).toBeGreaterThan(0);
      for (const entry of category.entries) {
        expect(entry.evidence.length).toBeGreaterThan(10);
        expect(entry.name.length).toBeGreaterThan(0);
        if ("icon" in entry && entry.icon) {
          expect(techIconPaths).toHaveProperty(entry.icon);
        }
      }
    }
    const professional = aboutSkillCategories.find((c) => c.id === "professional");
    expect(professional?.entries.map((e) => e.id)).toEqual(
      expect.arrayContaining([
        "fullstack",
        "leadership",
        "public-speaking",
        "project-coord",
      ]),
    );
    const allNames = aboutSkillCategories.flatMap((c) =>
      c.entries.map((e) => e.name.toLowerCase()),
    );
    expect(allNames.some((n) => n.includes("expert"))).toBe(false);
    expect(allNames.some((n) => n.includes("%"))).toBe(false);
  });

  it("uses temporary About photo placeholders until owner assets arrive", () => {
    expect(aboutPhotos).toHaveLength(3);
    for (const photo of aboutPhotos) {
      expect(photo.temporary).toBe(true);
      expect(photo.src.startsWith("/images/")).toBe(true);
      const filePath = path.join(publicRoot, photo.src.replace(/^\//, ""));
      expect(existsSync(filePath), photo.src).toBe(true);
    }
  });

  it("keeps every referenced local illustration on disk", () => {
    for (const project of projects) {
      const filePath = path.join(publicRoot, project.illustration.src.replace(/^\//, ""));
      expect(existsSync(filePath), project.illustration.src).toBe(true);
    }
    for (const study of [soilScanCaseStudy, baguioReadyGisCaseStudy]) {
      const filePath = path.join(publicRoot, study.illustration.src.replace(/^\//, ""));
      expect(existsSync(filePath), study.illustration.src).toBe(true);
    }
    expect(existsSync(path.join(publicRoot, "images/portrait.jpg"))).toBe(true);
    expect(existsSync(path.join(publicRoot, "images/portrait.webp"))).toBe(true);
  });

  it("keeps case-study routes limited to the two completed projects", () => {
    expect(soilScanCaseStudy.slug).toBe("soil-scan");
    expect(baguioReadyGisCaseStudy.slug).toBe("baguioreadygis");
    expect(soilScanCaseStudy.status).toBe("completed");
    expect(baguioReadyGisCaseStudy.status).toBe("completed");
    for (const study of [soilScanCaseStudy, baguioReadyGisCaseStudy]) {
      expect(Object.keys(study.sections)).toEqual([
        "problem",
        "role",
        "process",
        "solution",
        "results",
      ]);
      expect(study.illustration.illustrative).toBe(true);
    }
    const fertilizer = soilScanCaseStudy.actions[0];
    expect(fertilizer.kind).toBe("live");
    if (fertilizer.kind === "live") {
      expect(fertilizer.label).toBe("View fertilizer recommendation demo");
    }
  });

  it("uses only approved contact links", () => {
    expect(profile.email).toBe("hansfredrick2600@gmail.com");
    expect(links.email).toBe(profile.email);
    expect(links.facebook).toBeNull();
    expect(links.linkedin).toBe("https://www.linkedin.com/in/hans-aragona");
    expect(links.github).toBe("https://github.com/HansFredrickAragona");
  });

  it("keeps unfinished projects preview-only with no actions", () => {
    const unfinished = projects.filter((project) => project.status === "in-development");
    expect(unfinished.length).toBeGreaterThan(0);
    for (const project of unfinished) {
      expect(project.actions).toHaveLength(0);
      expect(project.illustration.illustrative).toBe(true);
    }
  });

  it("labels completed project artwork as illustrative and enables only verified actions", () => {
    const completed = projects.filter((project) => project.status === "completed");
    expect(completed.map((p) => p.id).sort()).toEqual(["baguioreadygis", "soil-scan"]);
    for (const project of completed) {
      expect(project.illustration.illustrative).toBe(true);
      const live = project.actions.filter((action) => action.kind === "live");
      for (const action of live) {
        expect(action.href.startsWith("https://")).toBe(true);
      }
      const soilLive = project.actions.find((action) => action.kind === "live");
      if (project.id === "soil-scan" && soilLive && soilLive.kind === "live") {
        expect(soilLive.label).toBe("View fertilizer recommendation demo");
      }
    }
  });

  it("keeps career milestones year-level with owner source and no intensity", () => {
    expect(careerMilestones).toHaveLength(4);
    for (const block of careerMilestones) {
      expect(block.source).toBe("owner-D04");
      expect(block.intensity).toBe("none");
      expect(block.items.length).toBeGreaterThan(0);
      for (const item of block.items) {
        expect(item.text).not.toMatch(/semester/i);
        expect(item.text).not.toMatch(/\d{4}/);
      }
    }
  });

  it("requires experience and leadership entries to have non-empty bullets", () => {
    for (const item of experience) {
      expect(item.bullets.length).toBeGreaterThan(0);
      expect(item.org.length).toBeGreaterThan(0);
    }
    for (const item of leadership) {
      expect(item.bullets.length).toBeGreaterThan(0);
    }
    expect(education[0].honors.length).toBeGreaterThan(0);
    expect(skillGroups.length).toBeGreaterThanOrEqual(4);
    expect(technologies.length).toBeGreaterThan(20);
    expect(recognition.length).toBeGreaterThan(0);
  });
});
