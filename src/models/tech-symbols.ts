import type { TechIconId } from "@/components/icons/techIconPaths";

export type HeroTechSymbol = {
  id: string;
  name: string;
  icon: TechIconId;
  /** Decorative only in Hero — duplicated labels live in About skills. */
  decorative: true;
  /** Desktop placement relative to the center portrait (intentional, not random). */
  desktop: {
    position: string;
    size: "sm" | "md" | "lg";
    opacity: string;
  };
  tablet: "show" | "hide";
  mobile: "show" | "hide";
  motion: { enterDelay: number; floatDuration: number; floatY: number };
};

/** Kept clear of left careers rail and right socials rail on lg+. */
export const heroTechSymbols = [
  {
    id: "python",
    name: "Python",
    icon: "python",
    decorative: true,
    desktop: {
      position: "top-[6%] left-[2%]",
      size: "md",
      opacity: "opacity-65",
    },
    tablet: "show",
    mobile: "show",
    motion: { enterDelay: 0.15, floatDuration: 4.6, floatY: 6 },
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    decorative: true,
    desktop: {
      position: "top-[4%] right-[4%]",
      size: "sm",
      opacity: "opacity-60",
    },
    tablet: "show",
    mobile: "show",
    motion: { enterDelay: 0.28, floatDuration: 5.2, floatY: 5 },
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript",
    decorative: true,
    desktop: {
      position: "bottom-[30%] left-[-4%]",
      size: "sm",
      opacity: "opacity-50",
    },
    tablet: "hide",
    mobile: "hide",
    motion: { enterDelay: 0.4, floatDuration: 5.8, floatY: 7 },
  },
  {
    id: "react",
    name: "React",
    icon: "react",
    decorative: true,
    desktop: {
      position: "bottom-[24%] right-[-4%]",
      size: "lg",
      opacity: "opacity-70",
    },
    tablet: "show",
    mobile: "show",
    motion: { enterDelay: 0.22, floatDuration: 4.9, floatY: 6 },
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "nextdotjs",
    decorative: true,
    desktop: {
      position: "bottom-[8%] left-[6%]",
      size: "sm",
      opacity: "opacity-55",
    },
    tablet: "hide",
    mobile: "hide",
    motion: { enterDelay: 0.5, floatDuration: 6.1, floatY: 5 },
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "nodedotjs",
    decorative: true,
    desktop: {
      position: "top-[48%] right-[0%]",
      size: "md",
      opacity: "opacity-60",
    },
    tablet: "show",
    mobile: "hide",
    motion: { enterDelay: 0.35, floatDuration: 5.4, floatY: 6 },
  },
  {
    id: "colab",
    name: "Google Colab",
    icon: "googlecolab",
    decorative: true,
    desktop: {
      position: "bottom-[4%] right-[14%]",
      size: "sm",
      opacity: "opacity-50",
    },
    tablet: "hide",
    mobile: "hide",
    motion: { enterDelay: 0.55, floatDuration: 6.4, floatY: 4 },
  },
] as const satisfies readonly HeroTechSymbol[];

export const aboutFloatSymbols = [
  {
    id: "about-python",
    name: "Python",
    icon: "python",
    desktop: "top-[18%] right-[6%]",
    tablet: "show",
    mobile: "hide",
    motion: { enterDelay: 0.1, floatDuration: 5.5, floatY: 5 },
  },
  {
    id: "about-react",
    name: "React",
    icon: "react",
    desktop: "bottom-[22%] left-[8%]",
    tablet: "hide",
    mobile: "hide",
    motion: { enterDelay: 0.25, floatDuration: 6, floatY: 4 },
  },
  {
    id: "about-postgres",
    name: "PostgreSQL",
    icon: "postgresql",
    desktop: "top-[55%] right-[14%]",
    tablet: "show",
    mobile: "hide",
    motion: { enterDelay: 0.35, floatDuration: 5.8, floatY: 5 },
  },
] as const;
