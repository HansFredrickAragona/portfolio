# Visual QA checklist — Prompt 05 / Prompt 08

Status: browser-inspected with Playwright Chromium against `next start` on `http://127.0.0.1:3111` (2026-09-23). Screenshots in ignored `tmp/qa/`. Details in `docs/QA_REPORT.md`.

## Viewports

| Width | Focus | Expected | Status |
|---|---|---|---|
| 320px | Full page | Single column; no horizontal overflow; CTAs comfortable; nav Menu works | Pass — overflow false; hero stacks; Menu + Dark present |
| 375–430px (common phone) | Full page | Same stack; type comfortable | Pass — overflow false |
| 768px (tablet) | Project section | Two-column project layout from md; nav may still be compact | Pass — desktop nav row visible; hero stacks until lg 1024 (known, QA-3) |
| 1024px+ / 1280 desktop | Hero + sections | Asymmetric hero; career grid columns | Pass at 1280 — 7/5 hero, portrait right |

## Sections

| Section | Expected | Observed / evidence | Status |
|---|---|---|---|
| Hero | No eyebrow; headline; CTAs; portrait 4:5 alt | Screenshot 320/1280/light+dark | Pass |
| Profile + Career Growth | Year 1–4 blocks + legend; no heatmap | Markup + content tests + browser | Pass |
| Selected work | Index + Expand details; actions | Playwright: aria-expanded true; case-study link present | Pass |
| Experience | Timeline from resume | Code/tests + page load | Pass |
| Capabilities | Groups + tech chips | Code/tests | Pass |
| Leadership + Recognition | Separate sections | Code/tests | Pass |
| Contact | Labels, mailto, copy fallbacks, live region | Unit tests | Pass (manual send needs owner mail client) |
| Footer | Email / LinkedIn / GitHub | Code + keyboard focus reaches footer links | Pass |
| Case studies | Problem→Results, back/next, caption | Browser 200 + screenshots | Pass |
| 404 | Friendly not-found | `/work/missing` → Page not found | Pass |

## Interactions

| Interaction | Expected | Status |
|---|---|---|
| Theme toggle | light/dark tokens | Pass — `data-theme=dark`, label Light |
| Expand details | aria-expanded + focus target | Pass (component tests + browser) |
| Project switch | Collapse on change | Pass (component tests) |
| Keyboard | Skip link first; nav reachable | Pass — Tab order recorded in QA_REPORT |
| Reduced motion | scroll-behavior auto | Pass — measured `auto` |
| Mobile menu | Esc closes | Pass (unit/code; Esc handler present) |

## Known issues / deferred

- Case-study deep links: both implemented and browser-checked.
- LinkedIn automated fetch 999 — residual manual check.
- Resume download and Facebook still intentional gaps.
- Production canonical/sitemap blocked on unknown origin (`docs/RELEASE_PREREQUISITES.md`).
