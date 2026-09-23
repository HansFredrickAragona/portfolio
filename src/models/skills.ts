import type { TechIconId } from "@/components/icons/techIconPaths";

export type SkillGroup = {
  id: string;
  label: string;
  items: readonly string[];
};

export const skillGroups = [
  {
    id: "build",
    label: "Build",
    items: [
      "Full-stack web applications",
      "RESTful APIs and API integration",
      "SPA development",
      "Deployment and troubleshooting",
      "Mobile dashboards and card UIs",
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence",
    items: [
      "Supervised and unsupervised learning",
      "Random Forest, XGBoost, SVM",
      "NLP and rule-based checking",
      "RAG pipelines and vector databases",
      "Model evaluation (MSE, RMSE, MAE)",
    ],
  },
  {
    id: "insights",
    label: "Insights",
    items: [
      "GIS hazard mapping",
      "Leaflet, GeoJSON, OpenStreetMap",
      "Overpass API and OSRM routing",
      "Power BI and Excel reporting",
      "Soil sample labeling and analysis",
    ],
  },
  {
    id: "improve",
    label: "Improve",
    items: [
      "Prompt and context engineering",
      "Multi-agent workflows",
      "Debugging, testing, refactoring",
      "Git, Jira, Postman workflows",
      "Docker and CI-ready tooling habits",
    ],
  },
] as const satisfies readonly SkillGroup[];

export type SkillEntry = {
  id: string;
  name: string;
  /** Short evidence line from resume/projects — not a proficiency claim. */
  evidence: string;
  icon?: TechIconId;
};

export type SkillCategory = {
  id: string;
  label: string;
  entries: readonly SkillEntry[];
};

/** Resume technical skills + project evidence. No popularity-only additions. */
export const aboutSkillCategories: readonly SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    entries: [
      {
        id: "python",
        name: "Python",
        evidence: "Machine learning, data processing, APIs, Soil Scan, and NLP projects.",
        icon: "python",
      },
      {
        id: "typescript",
        name: "TypeScript",
        evidence: "BaguioReadyGIS full-stack interfaces and typed web apps.",
        icon: "typescript",
      },
      {
        id: "javascript",
        name: "JavaScript",
        evidence: "Full-stack web applications and SPA development.",
        icon: "javascript",
      },
      {
        id: "sql",
        name: "SQL",
        evidence: "Relational data work alongside MySQL and PostgreSQL.",
      },
      {
        id: "kotlin",
        name: "Kotlin",
        evidence: "Bell-Kenz native Android dashboard components.",
        icon: "kotlin",
      },
      {
        id: "java",
        name: "Java",
        evidence: "Listed under languages & data on the résumé.",
      },
      {
        id: "csharp",
        name: "C#",
        evidence: "Listed under languages & data on the résumé.",
      },
      {
        id: "php",
        name: "PHP",
        evidence: "Listed under languages & data on the résumé.",
        icon: "php",
      },
      {
        id: "r",
        name: "R",
        evidence: "Listed under languages & data on the résumé.",
        icon: "r",
      },
      {
        id: "html",
        name: "HTML",
        evidence: "Semantic markup for responsive web interfaces.",
        icon: "html5",
      },
      {
        id: "css",
        name: "CSS",
        evidence: "Layout and styling for web and dashboard UIs.",
      },
      {
        id: "json",
        name: "JSON",
        evidence: "API payloads and Soil Scan recommendation rules.",
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    entries: [
      {
        id: "react",
        name: "React",
        evidence: "BaguioReadyGIS maps UI and full-stack web applications.",
        icon: "react",
      },
      {
        id: "nextjs",
        name: "Next.js",
        evidence: "App Router portfolio and modern React production apps.",
        icon: "nextdotjs",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        evidence: "Utility-first styling for editorial interfaces.",
        icon: "tailwindcss",
      },
      {
        id: "vite",
        name: "Vite",
        evidence: "Fast SPA tooling listed on the résumé.",
        icon: "vite",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        evidence: "Component UI listed under frameworks on the résumé.",
        icon: "bootstrap",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    entries: [
      {
        id: "nodejs",
        name: "Node.js",
        evidence: "Full-stack JavaScript services and tooling.",
        icon: "nodedotjs",
      },
      {
        id: "express",
        name: "Express.js",
        evidence: "BaguioReadyGIS API layer and REST services.",
        icon: "express",
      },
      {
        id: "rest",
        name: "RESTful APIs",
        evidence: "API design and integration across web and mobile work.",
      },
      {
        id: "rasa",
        name: "Rasa",
        evidence: "Conversational AI listed under AI/ML on the résumé.",
        icon: "rasa",
      },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    entries: [
      {
        id: "ml-models",
        name: "Machine learning",
        evidence: "Random Forest, XGBoost, and SVM for Soil Scan NPK prediction.",
      },
      {
        id: "nlp",
        name: "NLP",
        evidence: "Hiligaynon Grammar Checker tokenization and POS tagging.",
      },
      {
        id: "rag",
        name: "RAG & vector databases",
        evidence: "Gift of Grace corporate site RAG chatbot pipeline.",
      },
      {
        id: "streamlit",
        name: "Streamlit",
        evidence: "Soil Scan fertilizer recommendation interface.",
        icon: "streamlit",
      },
      {
        id: "colab",
        name: "Google Colab",
        evidence: "Notebook workflow listed under data/GIS tools.",
        icon: "googlecolab",
      },
      {
        id: "model-eval",
        name: "Model evaluation",
        evidence: "MSE, RMSE, and MAE reported for ML experiments.",
      },
    ],
  },
  {
    id: "data-viz",
    label: "Data & visualization",
    entries: [
      {
        id: "power-bi",
        name: "Power BI",
        evidence: "Reporting and dashboard tooling on the résumé.",
      },
      {
        id: "excel",
        name: "Microsoft Excel",
        evidence: "Data preparation and reporting workflows.",
      },
      {
        id: "leaflet",
        name: "Leaflet",
        evidence: "Interactive hazard maps in BaguioReadyGIS.",
        icon: "leaflet",
      },
      {
        id: "geojson",
        name: "GeoJSON",
        evidence: "Map feature data for BaguioReadyGIS layers.",
      },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    entries: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        evidence: "Relational storage listed on the résumé.",
        icon: "postgresql",
      },
      {
        id: "mysql",
        name: "MySQL",
        evidence: "Relational storage listed on the résumé.",
        icon: "mysql",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        evidence: "Document store listed on the résumé.",
        icon: "mongodb",
      },
      {
        id: "sqlite",
        name: "SQLite",
        evidence: "Room/SQLite local storage at Bell-Kenz.",
        icon: "sqlite",
      },
    ],
  },
  {
    id: "gis",
    label: "GIS",
    entries: [
      {
        id: "leaflet-gis",
        name: "Leaflet maps",
        evidence: "Hazard and facility visualization in BaguioReadyGIS.",
        icon: "leaflet",
      },
      {
        id: "osm",
        name: "OpenStreetMap",
        evidence: "Base map data for BaguioReadyGIS.",
      },
      {
        id: "overpass",
        name: "Overpass API",
        evidence: "Facility and POI queries for nearest-facility lookup.",
      },
      {
        id: "osrm",
        name: "OSRM",
        evidence: "Routing with Haversine fallback in BaguioReadyGIS.",
      },
    ],
  },
  {
    id: "tools",
    label: "Tools & deployment",
    entries: [
      {
        id: "git",
        name: "Git",
        evidence: "Version control across internship and project work.",
        icon: "git",
      },
      {
        id: "docker",
        name: "Docker",
        evidence: "Container tooling habits listed on the résumé.",
        icon: "docker",
      },
      {
        id: "jira",
        name: "Jira",
        evidence: "Defect tracking at Bell-Kenz.",
        icon: "jira",
      },
      {
        id: "postman",
        name: "Postman",
        evidence: "API testing workflow on the résumé.",
        icon: "postman",
      },
      {
        id: "vercel",
        name: "Vercel",
        evidence: "BaguioReadyGIS and fertilizer demo deployments.",
        icon: "vercel",
      },
      {
        id: "render",
        name: "Render",
        evidence: "BaguioReadyGIS backend deployment.",
        icon: "render",
      },
      {
        id: "android-studio",
        name: "Android Studio",
        evidence: "Native Android development environment.",
        icon: "androidstudio",
      },
      {
        id: "ai-dev-tools",
        name: "Claude Code, Codex, OpenCode",
        evidence: "AI development tools and multi-agent workflows on the résumé.",
      },
    ],
  },
  {
    id: "professional",
    label: "Professional skills",
    entries: [
      {
        id: "fullstack",
        name: "Full-stack development",
        evidence: "End-to-end web delivery from interface to API and deploy.",
      },
      {
        id: "ai-impl",
        name: "AI implementation",
        evidence: "Soil Scan NPK models and rule-based recommendations.",
      },
      {
        id: "api-design",
        name: "API integration",
        evidence: "REST integrations for GIS, mobile, and chatbot work.",
      },
      {
        id: "data-analysis",
        name: "Data analysis",
        evidence: "ML evaluation, Excel/Power BI reporting, GIS layers.",
      },
      {
        id: "tech-comms",
        name: "Technical communication",
        evidence: "Best Presenter iCREaTe 2026; thesis presentations.",
      },
      {
        id: "collab",
        name: "Collaboration",
        evidence: "Cross-functional delivery with eight- and six-member teams.",
      },
      {
        id: "leadership",
        name: "Leadership",
        evidence: "Project Lead, club Chairman & Founder, varsity captain.",
      },
      {
        id: "public-speaking",
        name: "Public speaking",
        evidence: "Cloud Horizons speaker; pitching and thesis events.",
      },
      {
        id: "problem-analysis",
        name: "Problem analysis",
        evidence: "Scoped Soil Scan and BaguioReadyGIS problems from evidence.",
      },
      {
        id: "project-coord",
        name: "Project planning",
        evidence: "Requirements, timelines, and budget alignment as PM/lead.",
      },
    ],
  },
] as const;

export const aboutContentGroups = [
  {
    id: "who",
    label: "Who I am",
  },
  {
    id: "achievements",
    label: "Achievements and leadership",
  },
  {
    id: "beyond",
    label: "Beyond work",
  },
  {
    id: "skills",
    label: "Skills and technical capabilities",
  },
] as const;
