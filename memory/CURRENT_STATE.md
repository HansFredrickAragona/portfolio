# Current state

- Phase: Prompts 00–07 committed (`2b2dfbd`, `c0614a2`, `081c8d5`, `0e6f734`, `a412d6f`, `f93398e`, `2018748`, `e7ab949`). Prompt 08 complete in working tree: `docs/QA_REPORT.md`, updated `docs/VISUAL_QA.md`, Playwright multi-viewport inspection, privacy/metadata test hardening, playwright devDependency. All automated checks green (format/lint/typecheck/25 tests/build). Local preview `http://127.0.0.1:3111` was 200 during QA. Next: commit 08, final morning handoff. Do not push or run Prompt 09.
- Kickoff: 2026-09-22 23:45 Asia/Manila; stop/checkpoint window 2026-09-23 07:45; final handoff target 07:15.
- Delivery deadline: 2026-09-25 23:59 Asia/Manila, interpreted end-of-day.
- Active writer: OpenCode root (`opencode/mimo-v2.6-flash-free`) after Codex emergency checkpoint; no specialists running unless spawned by root.
- Git: branch `feat/overnight-portfolio`, origin `https://github.com/HansFredrickAragona/portfolio.git`. Local commits only; no push. Commit email `hansfredrick2600@gmail.com`.
- Existing inputs: ignored PDF resume, portrait JPG (1349×2023), live_links.md (fertilizer demo + BaguioReadyGIS URLs).
- OpenWolf: Claude-only documented hooks; Markdown/Git fallback in use.
- Application scaffolded at repo root (create-next-app merged from tmp/scaffold; default SVGs removed; public/images/ ready). @vitejs/plugin-react, sharp, and pdf-parse added as local devDependencies.
- Checks: Prompts 00–02 doc reviews done. Prompt 03 and Prompt 04 format:check, lint, typecheck, test, build all pass 2026-09-23. Browser/a11y checks still N/A until Prompt 05/08.
- Privacy: evidence matrix city-location string redacted to generic wording; pre-commit grep for phone/city patterns must stay clean on tracked content files. Resume phone/location never written to models.
- Gate 4 draft package (not owner-approved): public copy from evidence matrix; portrait `public/images/portrait.{jpg,webp}`; assets `public/images/artwork-*.svg`; redaction = phone/address omitted; claims needing owner confirmation = morning review of all draft copy, case-study routes still unimplemented, semester heatmap deferred.
