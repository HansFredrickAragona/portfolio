# Current state

- Phase: Prompts 00–02 committed (`2b2dfbd`, `c0614a2`, `081c8d5`). Prompt 03 scaffold complete in working tree: Next 16.3.5 / React 19.2.8 / Tailwind 4 / strict TS; shell layout, header/footer/theme toggle, models, mailto helper + test. Checks all green (format, lint, typecheck, 2 tests, build with static `/` and `/_not-found`). Commit pending; next Prompt 04 content/assets.
- Kickoff: 2026-09-22 23:45 Asia/Manila; stop/checkpoint window 2026-09-23 07:45; final handoff target 07:15.
- Delivery deadline: 2026-09-25 23:59 Asia/Manila, interpreted end-of-day.
- Active writer: OpenCode root (`opencode/mimo-v2.6-flash-free`) after Codex emergency checkpoint; no specialists running unless spawned by root.
- Git: branch `feat/overnight-portfolio`, origin `https://github.com/HansFredrickAragona/portfolio.git`. Local commits only; no push. Commit email `hansfredrick2600@gmail.com`.
- Existing inputs: ignored PDF resume, portrait JPG (1349×2023), live_links.md (fertilizer demo + BaguioReadyGIS URLs).
- OpenWolf: Claude-only documented hooks; Markdown/Git fallback in use.
- Application scaffolded at repo root (create-next-app merged from tmp/scaffold; default SVGs removed; public/images/ ready). @vitejs/plugin-react added for vitest.
- Checks: Prompt 00/01/02 doc path/consistency/privacy review done. Prompt 03 format:check, lint, typecheck, test (2/2), build all pass 2026-09-23. Browser/a11y checks still N/A until Prompt 05/08.
- Privacy: evidence matrix city-location string redacted to generic wording; pre-commit grep for phone/city patterns must stay clean on tracked content files.
