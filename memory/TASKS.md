# Task queue

| Task | Owner | Status | Acceptance |
|---|---|---|---|
| 00–08 Overnight batch | root | done | see feat/v1 history |
| Tech symbols + About skills | root | done | see feat/v1 history |
| Codex editorial redesign + carousel | codex | done (`d1ad623`) | all checks pass |
| Create v1 snapshot branch | root | done (`bfcefef`, renamed `feat/v1`) | full app + memory marking |
| Push v1 to origin | root done (renamed `feat/v1` on remote) | owner authorized |
| Create v2 docs-only branch | root | done (`ccf4140`) | strip app code, keep agent docs/memory |
| Memory update for v2 | root | done | port-from-v1 requirements recorded |
| Commit + push v2 docs | root | done (`ccf4140` pushed) | owner authorized rename |
| Remote cleanup | root | done | feat/v1 + feat/v2 on origin; old branches deleted |
| Figma Make drop-in | owner | done | Next.js 15 files unzipped into feat/v2 |
| Port skills/About/Hero from v1 | root | done this session | links fixed, skills/about/experience ported, Hero buttons |
| Checks + Figma source commit | root | done (`ff89b2a`) | tsc/build pass; privacy clean; memory synced |
| Push Figma commit | root | done (`ff89b2a`+`a2d6e13` → origin/feat/v2) | owner: "push now" |

No task permits deploy or PR.

## Urgent successor checkpoint 2026-09-24
- DONE: requested Services width and font update, commit 8cebd47; typecheck/build pass.
- DONE: owner authorized commit+push of all local feat/v2 before further UI work; pushed through 297ec24.
- DONE: successor accepted writer ownership in memory/OPENCODE_HANDOFF.md.
- DONE: Services browser verification — desktop 1440x900 screenshot shows 5 full-width rows, section title, icons, + toggles; DOM/CSS checks confirm titles text-xl/md:text-2xl (20/24px), desc text-base (16px), container max-w-7xl, no max-w-4xl. QA wrapper HTML in public/ deleted after use.
- NEXT: await owner UI feedback. No new redesign scope. Optional later: mobile 375 and expanded-row screenshot recheck (headless scroll quirks only; markup already verified).

## 2026-09-24 late UI batch (OpenCode)
- DONE: section titles unified; concept previews → "In development"; nav glow; hero hover-card; mobile 10px section padding + 2.53rem titles; About text −10%; caption removed. Commits `1cad7a8`, `a829bb1`. tsc/build/privacy PASS.
- DONE: push both commits; write/refresh handoff; await owner.

## 2026-09-24 browser mockup simplification (Codex)
- DONE: removed iframe loading overlay and emoji placeholder from BrowserMockup. iframe loads eagerly with scale transform. Commit `40fb3d8` pushed to origin/feat/v2. tsc/build/privacy PASS.

## 2026-09-24 README (OpenCode)
- DONE: created root `README.md` with overview, components, technical overview, stack, getting started, verification. Commit `5b3516e` pushed to origin/feat/v2. Docs-only (tsc/build N/A).
