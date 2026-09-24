# Current state

- Branch: **v1** — full snapshot of the origin portfolio content as of 2026-09-23 at commit `d1ad623`.
- Source: `feat/overnight-portfolio` including all Codex editorial redesign work (full-name Hero, arched portrait, editorial About with AI temp photos, native skills accordions, GSAP ScrollTrigger reveals, project carousel).
- Application: Next.js 16.3.5 / React 19.2.8 / Tailwind 4 / strict TS / gsap ^3.15.0.
- Checks: format, lint, typecheck, 33 tests, production build — all PASS.
- Privacy: grep clean for phone/city patterns; project-input/ and tmp/ ignored.
- This branch contains the complete website codebase. The prior full development history remains on `feat/overnight-portfolio` and `main`.
- Next: v2 branch will be created from v1 as docs/agents only; Figma Make React+Vite website files will be dropped in separately.
- Deadline: September 25, 2026 EOD Asia/Manila. Real About photos, redacted résumé, production origin remain owner inputs.

## v1 contents

- Full Next.js app: src/**, public/**, configs, tests
- All docs/** and memory/**
- portfolio-agent-system/** (rules, specs, prompts)
- AGENTS.md, opencode.json, .gitignore