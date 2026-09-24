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
- DONE: owner authorized commit+push of all local feat/v2 before further UI work.
- NEXT: push feat/v2, then verify Services browser layout per memory/OPENCODE_HANDOFF.md; await owner UI feedback. No new redesign scope.
