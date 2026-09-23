"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TechIcon } from "@/components/icons/TechIcon";
import { heroTechSymbols } from "@/models/tech-symbols";

const sizeClass = {
  sm: "h-7 w-7 sm:h-8 sm:w-8",
  md: "h-9 w-9 sm:h-10 sm:w-10",
  lg: "h-11 w-11 sm:h-12 sm:w-12",
} as const;

function useSymbolMotion(
  rootRef: React.RefObject<HTMLDivElement | null>,
  selector: string,
) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(selector);
      if (nodes.length === 0) return;

      const enter = gsap.from(nodes, {
        opacity: 0,
        y: 14,
        scale: 0.92,
        duration: 0.7,
        stagger: 0.09,
        ease: "power2.out",
        delay: 0.12,
        clearProps: "transform",
      });
      cleanups.push(() => enter.kill());

      const floats = nodes.map((node, index) => {
        const y = Number(node.dataset.floatY || 5);
        const duration = Number(node.dataset.floatDuration || 5);
        return gsap.to(node, {
          y,
          duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.35 + index * 0.12,
        });
      });
      cleanups.push(() => floats.forEach((t) => t.kill()));

      const onVisibility = () => {
        for (const tween of floats) {
          if (document.hidden) tween.pause();
          else tween.resume();
        }
      };
      document.addEventListener("visibilitychange", onVisibility);
      cleanups.push(() => document.removeEventListener("visibilitychange", onVisibility));
    }, root);

    return () => {
      for (const fn of cleanups) fn();
      ctx.revert();
    };
  }, [rootRef, selector]);
}

/** Desktop decorative symbols around the portrait. Duplicates live in About. */
export function HeroTechSymbols() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSymbolMotion(rootRef, "[data-hero-symbol-desktop]");

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
    >
      {heroTechSymbols.map((symbol) => (
        <span
          key={symbol.id}
          data-hero-symbol-desktop
          data-float-y={symbol.motion.floatY}
          data-float-duration={symbol.motion.floatDuration}
          className={`absolute flex items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] text-[color-mix(in_srgb,var(--text)_78%,transparent)] shadow-sm backdrop-blur-[2px] ${sizeClass[symbol.desktop.size]} ${symbol.desktop.position} ${symbol.desktop.opacity}`}
          title={symbol.name}
        >
          <TechIcon id={symbol.icon} className="h-1/2 w-1/2" />
        </span>
      ))}
    </div>
  );
}

/** Static row under CTAs for mobile/tablet — primary symbols only; restrained float. */
export function HeroTechSymbolsRow() {
  const rootRef = useRef<HTMLDivElement>(null);
  const rowSymbols = heroTechSymbols.filter((symbol) => {
    const tablet: string = symbol.tablet;
    const mobile: string = symbol.mobile;
    return tablet === "show" || mobile === "show";
  });
  useSymbolMotion(rootRef, "[data-hero-symbol-row]");

  return (
    <div ref={rootRef} aria-hidden="true" className="mt-6 lg:hidden">
      <ul className="flex flex-wrap items-center gap-3" role="list">
        {rowSymbols.map((symbol) => {
          const mobile: string = symbol.mobile;
          const hideOnPhone = mobile === "hide";
          return (
            <li
              key={symbol.id}
              data-hero-symbol-row
              data-float-y={symbol.motion.floatY}
              data-float-duration={symbol.motion.floatDuration}
              className={`border-border bg-surface text-text-muted flex h-9 w-9 items-center justify-center rounded-full border opacity-75 md:h-10 md:w-10 ${
                hideOnPhone ? "hidden md:flex" : ""
              }`}
              title={symbol.name}
            >
              <TechIcon id={symbol.icon} className="h-4 w-4 md:h-5 md:w-5" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
