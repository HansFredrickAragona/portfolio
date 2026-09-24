# Handoff

Branch **v2** — docs/agents only (no website code). Created from `feat/v1` @ `bfcefef`.

## What this branch is

- Contains all agent documentation, memory, design docs, and agent-system rules.
- Stripped of Next.js app source (`src/`, `public/`, configs).
- Will receive Figma Make React+Vite website files (owner unzips).

## What stays on `feat/v1`

- Full Next.js app with Codex editorial redesign (Hero, About, skills accordion, GSAP motion, project carousel).
- All content models: skills, About photos/info, links, profile, education, leadership.

## Port requirements for Figma integration

1. Skills data (complete, 9 categories with evidence) from `feat/v1`.
2. About me photos + information from `feat/v1`.
3. Hero: GitHub and Email as separate visible entries; LinkedIn/GitHub/Email as buttons.

## Checks

- v2: N/A (no app tooling — documentation-only branch).
- feat/v1 @ `d1ad623`: format, lint, typecheck, 33 tests, production build — all PASS.

## Pending

- Owner unzips Figma Make React+Vite code.
- Push v2 only after explicit owner permission.
- Remote cleanup: rename `origin/v1` → `origin/feat/v1`; delete `origin/feat/overnight-portfolio`.
