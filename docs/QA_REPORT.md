# QA Report — overnight local draft

Date: 2026-09-23 Asia/Manila  
Branch: `feat/overnight-portfolio`  
Scope: Prompts 00–08 local draft only. Not publication approval. No push/PR/deploy.

## Automated checks (fresh run)

| Check | Command | Result |
|---|---|---|
| Format | `npm run format:check` | Pass |
| Lint | `npm run lint` | Pass |
| Strict TypeScript | `npm run typecheck` | Pass |
| Unit/component tests | `npm test` | Pass — 25 tests / 6 files |
| Production build | `npm run build` | Pass — routes: `/`, `/_not-found`, `/robots.txt`, `/work/soil-scan`, `/work/baguioreadygis` |
| Privacy grep (tracked) | `git grep` for phone/city patterns | Clean outside `project-input/` and `tmp/` |
| Private files tracked | `git ls-files` vs `project-input` | None tracked |

## Browser inspection (Playwright Chromium headless)

Server: `next start` on `http://127.0.0.1:3111` (status 200 during QA).  
Screenshots: ignored `tmp/qa/*.png` (not committed).

| Viewport | Path | Status | Horizontal overflow | Console errors | Observed |
|---|---|---|---|---|---|
| 320×800 | `/` | 200 | No | None | Single-column hero; portrait stacks under CTAs; nav shows Menu + Dark |
| 320×800 | `/work/soil-scan` | 200 | No | None | Case study readable; artwork caption present |
| 320×800 | `/work/baguioreadygis` | 200 | No | None | Same structure |
| 320×800 | `/work/missing` | 404 | No | Expected 404 resource only | “Page not found” |
| 375×812 | `/` and both case studies | 200 | No | None | Common phone width OK |
| 768×1024 | `/` and both case studies | 200 | No | None | Desktop nav row visible; hero still stacks at this width (lg breakpoint is 1024) |
| 1280×800 | `/` and both case studies | 200 | No | None | Asymmetric hero 7/5; portrait right |
| 1280 dark | `/` | — | No | None | Dark tokens applied (`data-theme=dark`); toggle label “Light” |

### Interactions observed

| Interaction | Expected | Observed | Severity | Status |
|---|---|---|---|---|
| Theme toggle | Switch light/dark | `data-theme` becomes `dark`; button label updates | — | Pass |
| Expand details | Explicit button, `aria-expanded` | Becomes `true`; Read case study link present for Soil Scan | — | Pass |
| Keyboard Tab (desktop) | Skip link → brand → nav → CTA → theme → hero | Order: Skip to content, Hans Fredrick, Work…Contact, Let’s talk, theme, View projects | — | Pass |
| Reduced motion | `scroll-behavior: auto` under reduce | `auto` measured | — | Pass |
| Resume download | Omitted until redacted PDF | No download control | Info | Expected gap |
| Facebook | Omitted | Contact notes gap | Info | Expected gap |

## External links (HTTP 2026-09-23)

| URL | Result | Notes |
|---|---|---|
| https://frontend-delta-rust-70.vercel.app/ | 200 | Fertilizer component demo (Soil Scan label) |
| https://baguio-ready-gis-web.vercel.app/ | 200 | BaguioReadyGIS live |
| https://github.com/HansFredrickAragona | 200 | Public profile |
| https://www.linkedin.com/in/hans-aragona | 999 from datacenter fetch | LinkedIn bot challenge; not treated as broken—manual browser check still recommended |
| mailto composer | Unit-tested encoding | Opens visitor mail client on submit; no backend |

## Metadata / robots / analytics

- Site title/description present; Person JSON-LD with verified name/links only.
- **No** canonical/`metadataBase`/absolute OG URLs/sitemap (production origin unknown — `docs/RELEASE_PREREQUISITES.md`).
- `robots.txt`: `User-Agent: *` / `Allow: /` only (no guessed sitemap URL).
- Analytics: **disabled**; no package installed; reason recorded in `src/models/metadata.ts`.

## Content / privacy / claims

- No phone, home address, raw resume PDF, or secrets in tracked files.
- Portrait optimized to `public/images/portrait.{jpg,webp}` (metadata stripped); raw stays ignored.
- Project images labeled illustrative artwork (not screenshots).
- Unfinished projects: preview-only, zero actions (enforced by tests).
- Fertilizer action labeled component demo only (D05).
- Career milestones year-level only (D04); no semester heatmap.
- Resume download omitted (D07).

## Known issues / residual risks

| ID | Severity | Issue | Impact | Resolution / owner action |
|---|---|---|---|---|
| QA-1 | Medium | LinkedIn automated fetch returns 999 | Unclear if profile is restricted for some visitors | Owner open profile in a normal browser |
| QA-2 | Medium | Production origin unknown | No canonical/sitemap/absolute OG | Supply domain; see RELEASE_PREREQUISITES |
| QA-3 | Low | Hero uses desktop 7/5 only from `lg` (1024); 768 stacks copy then portrait | Acceptable editorial stack; confirm design preference | Owner morning design review |
| QA-4 | Low | MDX case-study files exist as drafts; routes render from typed modules | Content dual-source risk if edited separately | Keep typed modules as source of truth until owner prefers MDX-only |
| QA-5 | Info | Screenshots live only under ignored `tmp/qa/` | Not part of deliverable tree | Copy manually if needed for review |
| QA-6 | Info | Resume download + Facebook still gaps | Required before final release, not for local draft approval | Owner: redacted PDF + verified FB or confirm omit |
| QA-7 | Low | `package-lock` Next warning about parent path outside git repo | Build still succeeds | Optional: set `turbopack.root` later |

## Gate 8 status

| Item | Status |
|---|---|
| Automated checks | **Pass** |
| Browser multi-viewport | **Pass** (320/375/768/1280; light+dark; no overflow) |
| Project disclosure | **Pass** |
| Case-study routing | **Pass** (SSG both slugs; 404 for unknown) |
| Contact composer | **Pass** (unit tests + markup) |
| Secrets/private content | **Pass** |
| Resume download | **N/A — intentional omit** |
| Sitemap absolute URLs | **Blocked on production URL** |
| LinkedIn link | **Residual risk — manual check** |
| Owner final approval | **Pending morning review** |
| Deploy | **Not performed (forbidden)** |

## Launch commands

```bash
npm ci
npm run build
npm start
# development
npm run dev
```

Local preview during QA: `http://127.0.0.1:3111` responding 200.

## Manual owner checks (morning)

1. Open both live project URLs and LinkedIn in a personal browser.
2. Walk 320px phone + desktop light/dark; confirm hero stack and career legend wording.
3. Send a test message via Continue to email; confirm mail app opens.
4. Approve or edit draft copy, artwork, and case-study tone.
5. Provide production origin + redacted resume decision before any release (Prompt 09 out of scope).
