"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TechIcon } from "@/components/icons/TechIcon";
import { aboutFloatSymbols } from "@/models/tech-symbols";

/**
 * Few decorative symbols in About negative space.
 * One scoped IntersectionObserver + group timeline (no per-icon ScrollTrigger).
 * Hidden on mobile; static and visible under reduced motion (GSAP skipped).
 */
export function AboutTechSymbols() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>("[data-about-symbol]");
      if (nodes.length === 0) return;

      gsap.set(nodes, { opacity: 0, y: 12 });

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            gsap.to(nodes, {
              opacity: 0.7,
              y: 0,
              duration: 0.75,
              stagger: 0.12,
              ease: "power1.out",
              overwrite: true,
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(root);
      cleanups.push(() => observer.disconnect());

      const floats = nodes.map((node, index) => {
        const symbol = aboutFloatSymbols[index];
        const motion = symbol?.motion ?? {
          enterDelay: 0.2,
          floatDuration: 5.5,
          floatY: 4,
        };
        return gsap.to(node, {
          y: motion.floatY,
          duration: motion.floatDuration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1 + motion.enterDelay,
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
  }, []);

  return (
    <div
      ref={rootRef}
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
