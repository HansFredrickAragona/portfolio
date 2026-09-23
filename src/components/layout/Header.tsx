"use client";

import { useEffect, useId, useState } from "react";
import { navigation } from "@/models/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="border-border sticky top-0 z-40 border-b bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur">
      <div className="container-shell flex min-h-14 items-center justify-between gap-4 py-2">
        <a href="#main" className="text-primary text-sm font-semibold">
          Hans Fredrick
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-primary rounded px-3 py-2 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={navigation.primaryCta.href}
            className="bg-primary text-primary-fg ml-2 inline-flex min-h-11 items-center rounded px-4 text-sm font-medium transition-opacity hover:opacity-90"
          >
            {navigation.primaryCta.label}
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="border-border bg-surface inline-flex min-h-11 min-w-11 items-center justify-center rounded border px-3 text-sm"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <nav
        id={menuId}
        aria-label="Mobile"
        className={`border-border bg-bg border-t lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="container-shell flex flex-col gap-1 py-3">
          {navigation.sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-primary rounded px-3 py-3 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={navigation.primaryCta.href}
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-fg mt-1 inline-flex min-h-11 items-center justify-center rounded px-4 text-sm font-medium"
          >
            {navigation.primaryCta.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
