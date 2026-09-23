"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Progressive enhancement: the server-rendered page is always readable. */
export function ScrollMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-portfolio-home]");
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const groups = new Map<HTMLElement, gsap.core.Tween>();
      const triggers: ScrollTrigger[] = [];
      const originals = new Map<HTMLElement, string | null>();
      const context = gsap.context(() => {}, root);
      let frame = 0;
      let failed = false;
      const recover = () => {
        failed = true;
        triggers.forEach((trigger) => trigger.kill());
        context.revert();
        originals.forEach((style, node) => {
          if (style === null) node.removeAttribute("style");
          else node.setAttribute("style", style);
        });
      };
      try {
        context.add(() => {
          root
            .querySelectorAll<HTMLElement>("[data-motion-section]")
            .forEach((section) => {
              // Restored scroll positions and anchor navigation must stay readable.
              if (section.getBoundingClientRect().top < 0) return;
              const targets = Array.from(
                section.querySelectorAll<HTMLElement>("[data-reveal]"),
              ).filter((node) => node.closest("[data-motion-section]") === section);
              if (!targets.length || section.contains(document.activeElement)) return;
              targets.forEach((node) => originals.set(node, node.getAttribute("style")));
              const reveal = gsap.from(targets, {
                opacity: 0,
                y: 24,
                duration: 0.65,
                stagger: {
                  each: 0.085,
                  amount: Math.min((targets.length - 1) * 0.085, 0.4),
                },
                ease: "power2.out",
                paused: true,
                onComplete: () => {
                  gsap.set(targets, { clearProps: "opacity,transform" });
                },
              });
              groups.set(section, reveal);
              triggers.push(
                ScrollTrigger.create({
                  trigger: section,
                  start: "top 88%",
                  once: true,
                  onEnter: () => {
                    try {
                      reveal.play();
                    } catch {
                      recover();
                    }
                  },
                }),
              );
            });
        });
      } catch {
        recover();
      }

      const scheduleRefresh = () => {
        if (frame || failed) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          try {
            ScrollTrigger.refresh();
          } catch {
            recover();
          }
        });
      };
      const onLoad = (event: Event) => {
        if (event.target instanceof HTMLImageElement) scheduleRefresh();
      };
      const onTransitionEnd = (event: TransitionEvent) => {
        if (event.propertyName === "block-size") scheduleRefresh();
      };

      const onFocus = (event: FocusEvent) => {
        if (failed || !(event.target instanceof Element)) return;
        // A focused nested group must also reveal any animated ancestor group.
        groups.forEach((tween, section) => {
          if (section.contains(event.target as Node)) tween.progress(1);
        });
      };
      root.addEventListener("focusin", onFocus);
      root.addEventListener("toggle", scheduleRefresh, true);
      root.addEventListener("load", onLoad, true);
      root.addEventListener("transitionend", onTransitionEnd);
      return () => {
        root.removeEventListener("focusin", onFocus);
        root.removeEventListener("toggle", scheduleRefresh, true);
        root.removeEventListener("load", onLoad, true);
        root.removeEventListener("transitionend", onTransitionEnd);
        cancelAnimationFrame(frame);
        triggers.forEach((trigger) => trigger.kill());
        context.revert();
      };
    });
    return () => media.revert();
  }, []);

  return null;
}
