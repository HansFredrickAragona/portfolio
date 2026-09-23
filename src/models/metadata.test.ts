import { describe, expect, it } from "vitest";
import { analyticsDecision, personJsonLd, siteMetadata } from "@/models/metadata";
import { links } from "@/models/links";
import { implementedCaseStudySlugs } from "@/models/routes";
import { buildMailto } from "@/lib/mailto";

describe("metadata and privacy", () => {
  it("omits production origin and absolute URL-dependent fields", () => {
    expect(siteMetadata.productionOrigin).toBeNull();
    expect(siteMetadata.title).toBeTruthy();
    expect(siteMetadata.description.length).toBeGreaterThan(40);
  });

  it("keeps Person structured data to verified public facts only", () => {
    expect(personJsonLd["@type"]).toBe("Person");
    expect(personJsonLd.name).toBe("Hans Fredrick");
    expect(personJsonLd.sameAs).toEqual([links.github, links.linkedin]);
    const serialized = JSON.stringify(personJsonLd);
    expect(serialized).not.toMatch(/0929/i);
    expect(serialized).not.toMatch(/Quezon/i);
    expect(serialized).not.toMatch(/address/i);
    expect(serialized).not.toMatch(/phone/i);
  });

  it("keeps analytics disabled with an honest reason", () => {
    expect(analyticsDecision.enabled).toBe(false);
    expect(analyticsDecision.provider).toBeNull();
    expect(analyticsDecision.reason.length).toBeGreaterThan(20);
  });

  it("lists only implemented case-study slugs for future sitemap", () => {
    expect([...implementedCaseStudySlugs].sort()).toEqual([
      "baguioreadygis",
      "soil-scan",
    ]);
  });

  it("encodes mailto subject and body without raw spaces", () => {
    const url = buildMailto({
      name: "A & B",
      email: "ab@example.com",
      message: "Line one\nLine two <ok>",
    });
    expect(url.startsWith("mailto:hansfredrick2600@gmail.com?")).toBe(true);
    expect(url).not.toMatch(/ /);
    expect(url).toContain(encodeURIComponent("Line one\nLine two <ok>"));
    expect(url).toContain("subject=");
  });
});
