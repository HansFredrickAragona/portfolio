export const profile = {
  publicName: "Hans Fredrick",
  fullName: "Hans Fredrick O. Aragona",
  headline: "I build practical software and AI solutions.",
  detail:
    "Hands-on experience developing full-stack web applications with JavaScript, TypeScript, React, Node.js, and Express.js, plus additional experience in AI/ML and NLP.",
  summary:
    "Building complete software products from database to interface, combining full-stack engineering with machine learning, clear communication, and collaborative leadership.",
} as const

export const education = {
  institution: "Saint Louis University",
  degree: "Bachelor of Science in Computer Science",
  end: "May 2026",
  honors: [
    "Cum Laude",
    "Consistent Dean's Lister",
    "University Leadership Awardee",
  ],
} as const

export const leadership = [
  {
    id: "aws-lc-slu",
    org: "AWS LC SLU",
    role: "Chairman & Founder",
    period: "2025–2026",
    detail:
      "Founded an AWS Community-connected university organization and led events and stakeholder coordination.",
  },
  {
    id: "slu-swimming-captain",
    org: "SLU Swimming Team (Class A Varsity)",
    role: "Team Captain",
    period: "2025–2026",
    detail: "Led regional and national meet preparation.",
  },
  {
    id: "pine-aquatics-instructor",
    org: "Baguio City Pine Aquatics",
    role: "Swimming Instructor",
    period: "2022–Present",
    detail: "Instructed swimmers at the club level.",
  },
] as const

export const interests = [
  "Varsity swimming (Class A) and club instruction.",
  "Founded and chaired an AWS Community-connected campus club.",
  "Presentations, pitching events, and community tech talks.",
] as const
