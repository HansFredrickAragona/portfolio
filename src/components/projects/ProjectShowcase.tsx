"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Project } from "@/models/projects";
import { hasCaseStudyRoute } from "@/models/routes";

type ProjectShowcaseProps = {
  projects: readonly Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeId, setActiveId] = useState(projects[0]?.id ?? "");
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();
  const headingRef = useRef<HTMLParagraphElement>(null);

  const active = projects.find((project) => project.id === activeId) ?? projects[0];

  useEffect(() => {
    if (expanded) {
      headingRef.current?.focus();
    }
  }, [expanded, activeId]);

  if (!active) {
    return null;
  }

  function selectProject(id: string) {
    setActiveId(id);
    setExpanded(false);
  }

  function toggleExpanded() {
    setExpanded((value) => !value);
  }

  const activeIndex = projects.findIndex((project) => project.id === active.id);
  function moveProject(direction: number) {
    const next = projects[(activeIndex + direction + projects.length) % projects.length];
    if (next) selectProject(next.id);
  }

  const allowedActions = active.actions.filter((action) => {
    if (action.kind === "case-study") {
      return hasCaseStudyRoute(active.caseStudySlug ?? "");
    }
    return action.kind === "live";
  });

  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-10">
      <div data-reveal>
        <ul className="flex flex-col gap-1" role="list">
          {projects.map((project) => {
            const selected = project.id === active.id;
            return (
              <li key={project.id}>
                <button
                  type="button"
                  aria-current={selected ? "true" : undefined}
                  onClick={() => selectProject(project.id)}
                  className={`project-index-button border-border flex min-h-11 w-full items-center justify-between gap-3 border text-left text-sm ${
                    selected
                      ? "bg-primary text-primary-fg border-primary"
                      : "text-text hover:border-primary hover:text-primary"
                  }`}
                >
                  <span className="project-index-title font-medium">{project.title}</span>
                  <span
                    className={`text-xs ${
                      selected ? "text-primary-fg opacity-90" : "text-text-subtle"
                    }`}
                  >
                    {project.status === "completed" ? "Completed" : "In development"}
                  </span>
                  <span aria-hidden="true" className="project-index-arrow">
                    ↗
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        data-reveal
        className="project-preview border-border bg-bg-subtle relative overflow-hidden border"
      >
        <div
          className="project-carousel"
          role="region"
          aria-label="Project previews"
          aria-roledescription="carousel"
        >
          {/*
          eslint-disable-next-line @next/next/no-img-element --
          SVG artwork uses plain img for exact aspect control and jsdom tests
        */}
          <img
            key={active.id}
            src={active.illustration.src}
            alt={active.illustration.alt}
            width={800}
            height={500}
            className="project-slide aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
          {active.illustration.illustrative ? (
            <p className="text-text-subtle absolute top-3 left-3 bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] px-2 py-1 text-xs">
              Illustrative artwork
            </p>
          ) : null}
          {projects.length > 1 && (
            <>
              <button
                type="button"
                className="project-carousel-arrow project-carousel-prev"
                aria-label="Previous project"
                onClick={() => moveProject(-1)}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="project-carousel-arrow project-carousel-next"
                aria-label="Next project"
                onClick={() => moveProject(1)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </>
          )}
          <p className="project-slide-count" aria-live="polite" aria-atomic="true">
            <span className="sr-only">{active.title}, project </span>
            {activeIndex + 1} / {projects.length}
          </p>
        </div>
        <div className="bg-bg border-border border-t p-5">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p
                ref={headingRef}
                id={detailsId}
                tabIndex={-1}
                className="text-text text-lg font-semibold focus-visible:outline-none"
              >
                {active.title}
              </p>
              <p className="text-text-muted mt-1 text-sm">{active.summary}</p>
            </div>
            <button
              type="button"
              onClick={toggleExpanded}
              aria-expanded={expanded}
              aria-controls={`${detailsId}-panel`}
              className="border-border bg-surface text-text hover:border-primary hover:text-primary inline-flex min-h-11 shrink-0 items-center rounded border px-4 text-sm font-medium transition-colors"
            >
              {expanded ? "Close details" : "Expand details"}
            </button>
          </div>

          <div
            id={`${detailsId}-panel`}
            hidden={!expanded}
            className="text-text-muted space-y-3 text-sm"
          >
            <div>
              <p className="text-text text-xs font-semibold tracking-wide uppercase">
                Problem
              </p>
              <p>{active.problem}</p>
            </div>
            <div>
              <p className="text-text text-xs font-semibold tracking-wide uppercase">
                Role
              </p>
              <p>{active.role}</p>
            </div>
            <div>
              <p className="text-text text-xs font-semibold tracking-wide uppercase">
                Outcome
              </p>
              <p>{active.outcome}</p>
            </div>
            {active.stack.length > 0 ? (
              <div>
                <p className="text-text text-xs font-semibold tracking-wide uppercase">
                  Stack
                </p>
                <ul className="mt-1 flex flex-wrap gap-2" role="list">
                  {active.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border-border bg-bg-subtle text-text-muted rounded border px-2 py-1 text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {allowedActions.length > 0 ? (
              <div className="flex flex-wrap gap-3 pt-1">
                {allowedActions.map((action) =>
                  action.kind === "live" ? (
                    <a
                      key={action.href}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-fg inline-flex min-h-11 items-center rounded px-4 text-sm font-medium"
                    >
                      {action.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <a
                      key={action.href}
                      href={action.href}
                      className="border-accent text-accent hover:bg-accent hover:text-accent-fg inline-flex min-h-11 items-center rounded border px-4 text-sm font-medium transition-colors"
                    >
                      {action.label}
                    </a>
                  ),
                )}
              </div>
            ) : (
              <p className="text-text-subtle text-xs">
                {active.status === "in-development"
                  ? "In development — preview only."
                  : "No public actions available yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
