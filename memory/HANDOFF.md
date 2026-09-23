# Handoff

Active overnight scope: Prompts 00-08 complete as local draft (Gates 1-7 were internal checks, not owner approvals). Owner morning review still required. No push, PR, deploy, or Prompt 09.

Branch `feat/overnight-portfolio`. Writer: OpenCode root (`opencode/mimo-v2.6-flash-free`). Keep `project-input/` untracked.

## Commits

| Prompt | Commit |
|---|---|
| 00 Bootstrap | `2b2dfbd` |
| 01 Evidence/plan | `c0614a2` |
| 02 Design system | `081c8d5` |
| 03 Scaffold | `0e6f734` |
| 04 Content/assets | `a412d6f` |
| 05 Homepage | `f93398e` |
| 06 Case studies | `2018748` |
| 07 Metadata/analytics | `e7ab949` |
| 08 QA (pending at time of this line — see TASKS) | see `git log` |

## How to run

```bash
npm ci
npm run build
npm start          # production local
# or
npm run dev
```

QA preview used: `http://127.0.0.1:3111` (was responding 200 during Prompt 08).

## Checks (Prompt 08 fresh)

- format:check, lint, typecheck, test (25), build — all pass
- Playwright Chromium: 320/375/768/1280 home + both case studies; no horizontal overflow; theme toggle; expand details; Tab order; reduced-motion scroll auto
- Privacy grep clean; no private files tracked
- Live project URLs HTTP 200; GitHub 200; LinkedIn automated fetch 999 (manual browser check recommended)

## Deliverables

- Working local draft: home sections, project disclosure, two case-study routes, contact mailto composer, light/dark themes
- `docs/QA_REPORT.md`, `docs/VISUAL_QA.md`, `docs/RELEASE_PREREQUISITES.md`, design/evidence/content docs
- Analytics disabled; no canonical/sitemap until production origin

## Pending owner decisions (not blockers for reviewing the draft)

1. Morning review of copy, design tokens, artwork, case-study tone
2. Production origin for absolute metadata/sitemap
3. Redacted resume download (currently omitted)
4. Facebook link or confirm omit
5. LinkedIn profile open-check in a normal browser
6. Exact final deadline time interpretation (date Sep 25 EOD Manila confirmed)

## Next action after owner review

Owner decides edits vs approve for release prep. Prompt 09 / push / deploy remain out of scope until explicitly authorized.

Inputs: ignored resume (phone/location never public); portrait optimized EXIF-free; live links verified 2026-09-23; milestones D04 year-level only; fertilizer demo is Soil Scan component only; unfinished projects preview-only.

Deadline: overnight window was 2026-09-23 07:45 Asia/Manila; delivery target 2026-09-25 23:59 Asia/Manila.
