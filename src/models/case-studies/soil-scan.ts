export const soilScanCaseStudy = {
  slug: "soil-scan",
  title: "Soil Scan",
  subtitle: "AI-powered soil analysis and fertilizer recommendation",
  status: "completed" as const,
  sections: {
    problem:
      "Soil health decisions need clearer guidance from image and nutrient signals than manual interpretation alone.",
    role: "Project Lead on a DOST-funded thesis project. I managed development, budget alignment, dataset preparation, and cross-functional delivery; the work was completed with an eight-member team.",
    process:
      "We prepared 1,000+ labeled soil samples, integrated soil image input and ML-based NPK prediction, and connected model output to a JSON/Python rule-based recommendation pipeline with a Python/Streamlit interface.",
    solution:
      "Soil Scan converts soil signals into fertilizer recommendations through an integrated analysis and recommendation flow built for further study under DOST funding.",
    results:
      "Delivered an integrated pipeline for the DOST-funded project: soil image input, NPK prediction, and rule-based fertilizer recommendations in one system. A fertilizer recommendation component demo is available as a separate public preview.",
  },
  stack: [
    "Python",
    "Streamlit",
    "Machine learning",
    "NPK prediction",
    "Rule-based recommendations",
  ],
  actions: [
    {
      kind: "live" as const,
      href: "https://frontend-delta-rust-70.vercel.app/",
      label: "View fertilizer recommendation demo",
      note: "Component demo only; not the entire Soil Scan deployment.",
    },
  ],
  illustration: {
    src: "/images/artwork-soil-scan.svg",
    alt: "Illustrative artwork for Soil Scan: abstract soil layers and nutrient marks",
    illustrative: true,
  },
  claims: [
    "DOST-funded thesis project",
    "Project Lead",
    "Eight-member team (led)",
    "1,000+ labeled soil samples",
    "Python/Streamlit fertilizer engine",
    "Fertilizer component demo live at frontend-delta-rust-70.vercel.app (verified 2026-09-23)",
  ],
} as const;
