export type RecognitionItem = {
  id: string;
  text: string;
  relatedProjectId?: string;
};

export const recognition = [
  {
    id: "university-leadership-gawad",
    text: "University Leadership Gawad Awardee",
  },
  {
    id: "best-presenter-icreate-2026",
    text: "Best Presenter at iCREaTe 2026",
  },
  {
    id: "cloud-horizons-2026-speaker",
    text: "Invited Cloud Horizons 2026 speaker",
  },
  {
    id: "smart-city-challenge-2nd",
    text: "2nd Place Overall, Baguio City Smart City Challenge",
  },
  {
    id: "dost-msme-awards",
    text: "Multiple DOST MSME competition awards",
  },
  {
    id: "bbeal-swimming-medals",
    text: "17 BBEAL swimming medals",
    relatedProjectId: undefined,
  },
] as const satisfies readonly RecognitionItem[];
