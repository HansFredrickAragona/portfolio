export type ProjectStatus = "completed" | "in-development";

export type ProjectAction =
  | { kind: "case-study"; href: string; label: string }
  | { kind: "live"; href: string; label: string };

export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  role: string;
  stack: readonly string[];
  outcome: string;
  illustration: {
    src: string;
    alt: string;
    illustrative: boolean;
  };
  actions: readonly ProjectAction[];
  caseStudySlug?: string;
};

export const projects = [
  {
    id: "soil-scan",
    title: "Soil Scan",
    status: "completed",
    summary:
      "AI-powered soil analysis and fertilizer recommendation system developed as a DOST-funded thesis project.",
    problem:
      "Soil health decisions need clearer guidance from image and nutrient signals than manual interpretation alone.",
    role: "Project Lead — managed development, budget alignment, dataset preparation, and cross-functional delivery.",
    stack: [
      "Python",
      "Streamlit",
      "Machine learning",
      "NPK prediction",
      "Rule-based recommendations",
    ],
    outcome:
      "Integrated soil image input, ML-based NPK prediction, and a JSON/Python rule-based fertilizer recommendation pipeline for the DOST-funded project.",
    illustration: {
      src: "/images/artwork-soil-scan.svg",
      alt: "Illustrative artwork for Soil Scan: abstract soil layers and nutrient marks",
      illustrative: true,
    },
    actions: [
      {
        kind: "case-study",
        href: "/work/soil-scan",
        label: "Read case study",
      },
      {
        kind: "live",
        href: "https://frontend-delta-rust-70.vercel.app/",
        label: "View fertilizer recommendation demo",
      },
    ],
    caseStudySlug: "soil-scan",
  },
  {
    id: "baguioreadygis",
    title: "BaguioReadyGIS",
    status: "completed",
    summary:
      "Full-stack GIS and disaster-preparedness web application for interactive hazard maps and facility lookup in Baguio City.",
    problem:
      "Residents and responders need a single view of hazard layers, emergency facilities, and nearest-facility routes.",
    role: "Full-stack developer — architected the monorepo and integrated map, routing, and hazard data services.",
    stack: [
      "React",
      "TypeScript",
      "Express",
      "Leaflet",
      "Overpass API",
      "OSRM",
      "Vercel",
      "Render",
    ],
    outcome:
      "Served interactive hazard maps, emergency facility data, and nearest-facility lookup with point-in-polygon hazard detection.",
    illustration: {
      src: "/images/artwork-baguioreadygis.svg",
      alt: "Illustrative artwork for BaguioReadyGIS: abstract map grid and route lines",
      illustrative: true,
    },
    actions: [
      {
        kind: "case-study",
        href: "/work/baguioreadygis",
        label: "Read case study",
      },
      {
        kind: "live",
        href: "https://baguio-ready-gis-web.vercel.app/",
        label: "View live",
      },
    ],
    caseStudySlug: "baguioreadygis",
  },
  {
    id: "grammar-checker",
    title: "Hiligaynon Grammar Checker",
    status: "in-development",
    summary:
      "Python NLP solution for rule-based Hiligaynon grammar checking, still in development.",
    problem: "Hiligaynon writers need automated feedback on common grammar patterns.",
    role: "NLP developer",
    stack: ["Python", "NLP", "Tokenization", "POS tagging", "Finite-state acceptance"],
    outcome:
      "Components include tokenization, part-of-speech tagging, syntax analysis, and a finite-state acceptance model. The project remains in development.",
    illustration: {
      src: "/images/artwork-grammar-checker.svg",
      alt: "Illustrative artwork for Hiligaynon Grammar Checker: abstract text marks and rules",
      illustrative: true,
    },
    actions: [],
  },
  {
    id: "resume-job-tracker",
    title: "Resume Job Tracker",
    status: "in-development",
    summary: "Job-application tracking tool currently in development.",
    problem: "Job seekers need a simple way to track applications and next steps.",
    role: "Builder (in development)",
    stack: [],
    outcome:
      "In development; capabilities and outcomes are not yet verified for public detail.",
    illustration: {
      src: "/images/artwork-resume-tracker.svg",
      alt: "Illustrative artwork for Resume Job Tracker: abstract checklist cards",
      illustrative: true,
    },
    actions: [],
  },
] as const satisfies readonly Project[];
