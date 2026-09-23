export type LeadershipItem = {
  id: string;
  org: string;
  role: string;
  period: string;
  bullets: readonly string[];
};

export const leadership = [
  {
    id: "aws-lc-slu",
    org: "AWS LC SLU",
    role: "Chairman & Founder",
    period: "2025–2026",
    bullets: [
      "Founded an AWS Community-connected university organization and led events and stakeholder coordination.",
    ],
  },
  {
    id: "slu-swimming-captain",
    org: "SLU Swimming Team (Class A Varsity)",
    role: "Team Captain",
    period: "2025–2026",
    bullets: ["Led regional and national meet preparation."],
  },
  {
    id: "pine-aquatics-instructor",
    org: "Baguio City Pine Aquatics",
    role: "Swimming Instructor",
    period: "2022–Present",
    bullets: ["Instructed swimmers at the club level."],
  },
] as const satisfies readonly LeadershipItem[];
