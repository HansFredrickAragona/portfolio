"use client";

import { TechIcon } from "@/components/icons/TechIcon";
import { aboutFloatSymbols } from "@/models/tech-symbols";

/** Static decorative symbols; section motion is handled by ScrollMotion. */
export function AboutTechSymbols() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden md:block"
    >
      {aboutFloatSymbols.map((symbol) => (
        <span
          key={symbol.id}
          data-about-symbol
          className={`border-border bg-surface/70 text-text-muted absolute flex h-10 w-10 items-center justify-center rounded-full border opacity-70 backdrop-blur-[2px] ${symbol.desktop} ${symbol.tablet === "hide" ? "max-lg:hidden" : ""}`}
          title={symbol.name}
        >
          <TechIcon id={symbol.icon} className="h-5 w-5" />
        </span>
      ))}
    </div>
  );
}
