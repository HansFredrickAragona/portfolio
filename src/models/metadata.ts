export const siteMetadata = {
  title: "Hans Fredrick — Software & AI",
  description:
    "Portfolio of Hans Fredrick: practical software and AI solutions, full-stack products, and technical leadership.",
  name: "Hans Fredrick",
  email: "hansfredrick2600@gmail.com",
  github: "https://github.com/HansFredrickAragona",
  linkedin: "https://www.linkedin.com/in/hans-aragona",
  /**
   * Production origin is unknown (D07). Omit absolute canonical, Open Graph URLs,
   * sitemap, and robots sitemap references until the owner supplies a verified domain.
   */
  productionOrigin: null,
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteMetadata.name,
  alternateName: "Hans Fredrick Ong Aragona",
  jobTitle: "Software and AI developer",
  email: `mailto:${siteMetadata.email}`,
  sameAs: [siteMetadata.github, siteMetadata.linkedin],
} as const;

export const analyticsDecision = {
  enabled: false,
  provider: null as null,
  reason:
    "Analytics remain disabled for this local draft: no production URL, privacy-first overnight contract, and no owner-approved analytics plan. Vercel Analytics was not installed.",
} as const;
