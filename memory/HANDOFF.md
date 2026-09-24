# Handoff

Branch **feat/v2** — Figma Make Next.js 15 app integrated with ported v1 content.

## What this branch is

- Agent docs/memory + Figma Make website drop-in (Next.js 15 App Router).
- Prior docs-only strip at `ccf4140`; source files added in the Figma integration commit this session.
- All port-from-v1 requirements applied (skills evidence, About info/photos, Hero buttons, approved links).

## What stays on `feat/v1`

- Full prior Next.js app with Codex editorial redesign @ `bfcefef`.
- Content models used as port source: skills, About, links, profile, education, leadership, experience.

## Checks (Figma drop-in)

- Typecheck: PASS (`npx tsc --noEmit`).
- Production build: PASS (`npm run build`).
- Privacy grep: clean (no phone/city patterns in tracked/staged files).
- LFS: both `public/assets/hans-portrait*.jpg` tracked as LFS.
- Lint/tests: N/A (Figma package.json has no eslint/vitest; oxfmt only).
- Visual responsive/a11y browser QA: NOT yet run this session.

## Pending

- Push complete: `origin/feat/v2` = `a2d6e13` (owner: "push now").
- Visual responsive/a11y browser QA not yet run this session.
- Optional portrait downscale (~24MB each).
- Deploy/PR/merge: forbidden without owner auth.
- Deadline remains 2026-09-25 EOD Asia/Manila.
