import type { MetadataRoute } from "next";

/**
 * Production origin unknown (D07). Emit a robots file with no absolute sitemap
 * URL so local draft does not guess a domain. Owner must set a verified
 * production origin and add sitemap.xml before release.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}
