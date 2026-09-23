export type AboutPhoto = {
  id: string;
  src: string;
  alt: string;
  /** Marked temporary until owner-supplied photos arrive. */
  temporary: boolean;
  span: "wide" | "tall" | "square";
};

/**
 * Temporary stand-in portraits (owner will replace with real photos).
 * Hero keeps the verified real portrait; About uses these labeled placeholders.
 */
export const aboutPhotos = [
  {
    id: "about-portrait-temp-1",
    src: "/images/about-portrait-temp-1.svg",
    alt: "Temporary abstract portrait placeholder for About — replace with owner photo",
    temporary: true,
    span: "tall",
  },
  {
    id: "about-portrait-temp-2",
    src: "/images/about-portrait-temp-2.svg",
    alt: "Temporary abstract portrait placeholder for About — replace with owner photo",
    temporary: true,
    span: "square",
  },
  {
    id: "about-portrait-temp-3",
    src: "/images/about-portrait-temp-3.svg",
    alt: "Temporary abstract portrait placeholder for About — replace with owner photo",
    temporary: true,
    span: "wide",
  },
] as const satisfies readonly AboutPhoto[];
