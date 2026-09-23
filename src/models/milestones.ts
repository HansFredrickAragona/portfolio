export type MilestoneCategory =
  "learning" | "sports" | "leadership" | "build" | "research";

export type Milestone = {
  id: string;
  text: string;
  category: MilestoneCategory;
};

export type YearBlock = {
  year: 1 | 2 | 3 | 4;
  label: string;
  items: readonly Milestone[];
  source: "owner-D04";
  intensity: "none";
};

export const careerMilestones = [
  {
    year: 1,
    label: "Year 1",
    items: [{ id: "y1-programming", text: "Learned programming", category: "learning" }],
    source: "owner-D04",
    intensity: "none",
  },
  {
    year: 2,
    label: "Year 2",
    items: [
      { id: "y2-varsity", text: "Became a varsity member", category: "sports" },
      {
        id: "y2-organization",
        text: "Participated in an organization",
        category: "leadership",
      },
      { id: "y2-gui", text: "Developed a simple GUI", category: "build" },
    ],
    source: "owner-D04",
    intensity: "none",
  },
  {
    year: 3,
    label: "Year 3",
    items: [
      { id: "y3-captain", text: "Became team captain", category: "sports" },
      {
        id: "y3-pitching",
        text: "Participated in a pitching event",
        category: "leadership",
      },
      {
        id: "y3-aws-club",
        text: "Founded the AWS Learning Club at school",
        category: "leadership",
      },
    ],
    source: "owner-D04",
    intensity: "none",
  },
  {
    year: 4,
    label: "Year 4",
    items: [
      {
        id: "y4-dost-thesis",
        text: "Worked on a DOST-funded thesis",
        category: "research",
      },
      { id: "y4-club-events", text: "Supported club events", category: "leadership" },
      {
        id: "y4-presentations",
        text: "Presented the thesis at events",
        category: "research",
      },
    ],
    source: "owner-D04",
    intensity: "none",
  },
] as const satisfies readonly YearBlock[];

export const milestoneLegend = [
  { category: "learning", label: "Learning" },
  { category: "sports", label: "Sports" },
  { category: "leadership", label: "Leadership" },
  { category: "build", label: "Build" },
  { category: "research", label: "Research" },
] as const;
