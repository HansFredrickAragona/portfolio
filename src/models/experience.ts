export type ExperienceItem = {
  id: string;
  org: string;
  role: string;
  start: string;
  end: string;
  bullets: readonly string[];
};

export const experience = [
  {
    id: "dost-ml-researcher",
    org: "Department of Science and Technology",
    role: "Machine Learning Researcher",
    start: "Aug 2025",
    end: "Jun 2026",
    bullets: [
      "Led an eight-member team developing Soil Scan, an AI-powered soil analysis and fertilizer recommendation system funded by DOST for further study.",
      "Prepared 1,000+ labeled soil samples and built a Python/Streamlit engine that converted model predictions into fertilizer recommendations.",
    ],
  },
  {
    id: "gift-of-grace-pm",
    org: "Gift of Grace Food Manufacturing Corp.",
    role: "Project Manager",
    start: "Oct 2025",
    end: "Dec 2025",
    bullets: [
      "Led a six-member team delivering a redesigned corporate website with a retrieval-augmented generation chatbot.",
      "Managed requirements and timelines while supporting Python document processing and vector database preparation for the RAG pipeline.",
    ],
  },
  {
    id: "bell-kenz-mobile",
    org: "Bell-Kenz Pharma Inc.",
    role: "Mobile Developer Intern",
    start: "Jan 2025",
    end: "Dec 2025",
    bullets: [
      "Developed dashboard components and card-based user interfaces for a native Android application using Kotlin and MVVM.",
      "Integrated APIs with Retrofit, implemented Room/SQLite storage, and resolved defects through Git and Jira.",
    ],
  },
] as const satisfies readonly ExperienceItem[];
