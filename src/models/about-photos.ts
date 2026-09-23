export type AboutPhoto = {
  id: string;
  src: string;
  alt: string;
  temporary: boolean;
  span: "wide" | "tall" | "square";
};

/** Keep generated lifestyle images explicitly temporary; replace src/alt when real photos arrive. */
export const aboutPhotos = [
  {
    id: "about-workspace",
    src: "/images/about-hans-ai-temp.webp",
    alt: "AI-generated temporary portrait of Hans seated at a laptop",
    temporary: true,
    span: "tall",
  },
  {
    id: "about-outdoors",
    src: "/images/about-hans-outdoors-ai-temp.webp",
    alt: "AI-generated temporary portrait of Hans outdoors",
    temporary: true,
    span: "square",
  },
  {
    id: "about-portrait",
    src: "/images/portrait.webp",
    alt: "Portrait of Hans Fredrick Ong Aragona",
    temporary: false,
    span: "tall",
  },
] as const satisfies readonly AboutPhoto[];
