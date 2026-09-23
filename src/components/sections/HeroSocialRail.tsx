"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { links } from "@/models/links";

type SocialItem = {
  id: string;
  label: string;
  href: string;
  external: boolean;
  icon: "github" | "linkedin" | "email";
  floatDuration: number;
  enterDelay: number;
};

const socials: readonly SocialItem[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: links.linkedin,
    external: true,
    icon: "linkedin",
    floatDuration: 5.2,
    enterDelay: 0.15,
  },
  {
    id: "github",
    label: "GitHub",
    href: links.github,
    external: true,
    icon: "github",
    floatDuration: 5.8,
    enterDelay: 0.28,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${links.email}`,
    external: false,
    icon: "email",
    floatDuration: 6.1,
    enterDelay: 0.4,
  },
];

function SocialGlyph({ icon }: { icon: SocialItem["icon"] }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

/**
 * Right-rail social links. Real links (not decorative).
 * Subtle GSAP float on desktop; static on reduced motion / mobile stack.
 */
export function HeroSocialRail() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const nodes = Array.from(
          root.querySelectorAll<HTMLElement>("[data-social-float]"),
        );
        const floats = nodes.map((node, index) =>
          gsap.to(node, {
            y: 5 + (index % 2),
            duration: socials[index]?.floatDuration ?? 5.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.14,
            paused: document.hidden,
          }),
        );
        const onVisibility = () => {
          floats.forEach((tween) => {
            tween.paused(document.hidden || root.contains(document.activeElement));
          });
        };
        const onFocus = () => floats.forEach((tween) => tween.pause());
        const onBlur = (event: FocusEvent) => {
          if (
            !(event.relatedTarget instanceof Node) ||
            !root.contains(event.relatedTarget)
          ) {
            floats.forEach((tween) => {
              tween.paused(document.hidden);
            });
          }
        };
        document.addEventListener("visibilitychange", onVisibility);
        root.addEventListener("focusin", onFocus);
        root.addEventListener("focusout", onBlur);
        return () => {
          document.removeEventListener("visibilitychange", onVisibility);
          root.removeEventListener("focusin", onFocus);
          root.removeEventListener("focusout", onBlur);
        };
      },
      root,
    );
    return () => media.revert();
  }, []);

  return (
    <div ref={rootRef}>
      <p className="text-text-subtle mb-3 text-xs tracking-[0.14em] uppercase">Social</p>
      <ul className="flex flex-wrap gap-3 lg:flex-col lg:items-end" role="list">
        {socials.map((item) => (
          <li key={item.id} data-social-float>
            <a
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="border-border bg-surface/80 text-text-muted hover:border-accent hover:text-accent inline-flex min-h-11 items-center gap-2 rounded-full border px-3.5 py-2 text-sm shadow-sm backdrop-blur-sm transition-colors"
            >
              <SocialGlyph icon={item.icon} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
