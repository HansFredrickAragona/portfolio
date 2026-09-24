export type ExperienceItem = {
  id: string
  org: string
  role: string
  start: string
  end: string
  contribution: string
  tags: readonly string[]
}

export const experience = [
  {
    id: "dost-ml-researcher",
    org: "Department of Science and Technology",
    role: "Machine Learning Researcher",
    start: "Aug 2025",
    end: "Jun 2026",
    contribution:
      "Led an eight-member team developing Soil Scan, an AI-powered soil analysis and fertilizer recommendation system funded by DOST.",
    tags: ["Python", "Machine learning", "Streamlit", "Team leadership"],
  },
  {
    id: "gift-of-grace-pm",
    org: "Gift of Grace Food Manufacturing Corp.",
    role: "Project Manager",
    start: "Oct 2025",
    end: "Dec 2025",
    contribution:
      "Led a six-member team delivering a redesigned corporate website with a retrieval-augmented generation chatbot.",
    tags: ["RAG", "Python", "Team leadership", "Requirements"],
  },
  {
    id: "bell-kenz-mobile",
    org: "Bell-Kenz Pharma Inc.",
    role: "Mobile Developer Intern",
    start: "Jan 2025",
    end: "Dec 2025",
    contribution:
      "Developed dashboard components for a native Android app using Kotlin and MVVM; integrated APIs and Room/SQLite storage.",
    tags: ["Kotlin", "Android", "Retrofit", "Git", "Jira"],
  },
] as const satisfies readonly ExperienceItem[]
