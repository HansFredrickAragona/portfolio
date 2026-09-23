import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { experience } from "@/models/experience";
import { projects } from "@/models/projects";
import { skillGroups } from "@/models/skills";
import { technologies } from "@/models/technologies";
import { leadership } from "@/models/leadership";
import { recognition } from "@/models/recognition";
import { careerMilestones } from "@/models/milestones";
import { links } from "@/models/links";
import { education } from "@/models/education";
import { profile } from "@/models/profile";
import { soilScanCaseStudy } from "@/models/case-studies/soil-scan";
import { baguioReadyGisCaseStudy } from "@/models/case-studies/baguioreadygis";

const blockedPatterns = [/0929/i, /Quezon/i, /403 0531/];

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

  it("keeps every referenced local illustration on disk", () => {
    const publicRoot = path.resolve(__dirname, "../../public");
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
