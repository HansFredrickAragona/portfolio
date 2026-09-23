"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function readTheme(): Theme {
  const stored = window.localStorage.getItem("theme");
  if (isTheme(stored)) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getSnapshot(): Theme {
  return readTheme();
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
    window.dispatchEvent(new StorageEvent("storage", { key: "theme", newValue: next }));
  }

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="border-border bg-surface text-text hover:border-primary hover:text-primary inline-flex min-h-11 min-w-11 items-center justify-center rounded border px-3 text-sm transition-colors"
    >
      <span aria-hidden="true">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
