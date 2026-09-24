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
- Visual QA: Services desktop 1440 verified 2026-09-24 (full-width rows, 20/24px titles, 16px desc in CSS); broader responsive/a11y pass not fully run this session.

## Pending

- Push complete: `origin/feat/v2` in sync with local `feat/v2` (owner: "push now"); source integration at `ff89b2a`.
- Services browser verification DONE (desktop); optional mobile/expanded recheck only.
- Optional portrait downscale (~24MB each).
- Deploy/PR/merge: forbidden without owner auth.
- Deadline remains 2026-09-25 EOD Asia/Manila.

## 2026-09-24 combined V1/V2 refinement

Owner approved implementation on feat/v2: V1 hero composition with V2 content/floating icons, preserve GitHub contribution-square reference, laptop About image without About heading, complete icon skills with concise two-column accordions, retain V2 project carousel, translucent surfaces, GSAP reveals, viewport-sized desktop sections and shared contact/footer screen.

Implemented in Hero, About, Skills, ScrollMotion, globals.css and page composition. Restored the labeled temporary AI laptop portrait and local icon paths from feat/v1. GitHub squares remain decorative, not actual contribution telemetry. No modifications to feat/v1 or main; no push/deploy.

Browser checks: 1280x720 hero 720px; projects/services/experience/about/collapsed skills 656px (64px navigation allowance). Skills expands with content; native click opens and Enter closes. Carousel next selects BaguioReady GIS. At 375px skills uses a single column and document has no horizontal overflow. Reduced-motion CSS disables animation; GSAP only runs under no-preference. Full mobile swipe/reduced-motion emulation not performed. Existing V2 project facts need a separate evidence audit. No lint/test scripts are configured in this V2 package.

Initial production build compiled and typechecked but failed during page-data JSON parsing while development preview was being started. Preview stopped for isolated rerun; see final check output before committing. Working changes belong to Codex for this owner-approved task; historical OpenCode handoffs are not active transfer instructions.

Final verification: production build PASS after fresh cache and excluding ignored tmp from TypeScript; formatting and strict typecheck PASS. No standalone lint/test scripts exist in V2. Preview on 127.0.0.1:3113. Base commit 9f397d2; completed local refinement commit follows.

Hero follow-up: removed experience rail; moved GitHub square graphic into its place with roles above; removed plain GitHub/email address lines; enlarged name. Social buttons retained. TypeScript and production build pass, Hero formatted. Browser returned stale prior content and blocked fresh navigation, so final visual verification remains pending.

2026-09-24 hero/card refinement: full name is one desktop line, portrait enlarged to show upper body, CTAs overlay photo. Removed section-wide glass cards. Added individual skills/project-info/experience hover lift and pointer-following radial glow with fine-pointer and reduced-motion guards. Format, strict typecheck, production build and diff check PASS. Fresh production preview on port 3114: actual 1440x900 hero 900px, no horizontal overflow, heading nowrap; skills click expands, glow opacity activates, parent background transparent. Browser viewport override reset. No standalone lint/test scripts configured.

Services width refinement: removed max-w-4xl inner cap; rows now fill the section content width. Titles 20px mobile/24px desktop; descriptions 16px. Increased disclosure height allowance for larger text. Format, typecheck and production build PASS.

2026-09-24 successor verification: Services desktop browser check completed (headless Edge + DOM/CSS); earlier ERR_BLOCKED_BY_CLIENT blocker cleared. Handoff commit 297ec24 pushed; writer ownership accepted in memory/OPENCODE_HANDOFF.md. Temporary QA HTML removed from public/. Awaiting further owner design feedback.

## 2026-09-24 late UI batch (OpenCode)

Owner-driven rapid UI refinements on feat/v2:

- Unified section headings to Skills `.section-title` (Experience, Services, Projects). Concept previews for in-dev projects only; badge text now "In development".
- Nav: circular HF badge, larger labels, single `nav-glow` hover rule.
- Hero + social CTAs: cursor-follow `hover-card` glow (reduced-motion/touch guarded).
- Mobile: section padding 10px; `.section-title` 2.53rem (~25% down from desktop 3.33rem); about/skills/contact inner padding tightened; About body/intro/h2 text −10%.
- Removed "Temporary AI portrait" figcaption; About alt cleaned to "Hans working at a laptop".

Checks at a829bb1: oxfmt PASS, `npx tsc --noEmit` PASS, `npm run build` PASS (static `/` 75.8 kB), privacy grep clean. techIcons.tsx / skills.ts left unstaged (oxfmt CRLF-only noise). Two UI commits pending push: `1cad7a8`, `a829bb1`.

Owner resumed Codex after OpenCode finished: About heading added; inner headings use h3. AI-temp image caption was already absent and project badge already In development, retained. Long em/en dashes removed from src copy/metadata; dates now use to. Format, typecheck, production build, diff check pass; no browser recheck this text-only refinement. Existing techIcons.tsx and skills.ts line-ending changes untouched. Base 1a1cbd3.

Desktop spacing request: sections use 20px outer and 10px inner padding above 900px. Hero top includes 64px fixed-nav clearance plus 20px. Footer and mobile spacing unchanged; existing viewport minimum heights retained. Production build/typecheck and diff check PASS; no new browser inspection.

Owner reports section gaps still too large. Removed full-screen minimum height and vertical centering from main content sections except hero; 20px outer/10px inner desktop padding retained. Contact/footer sizing unchanged. Build/typecheck and diff check PASS. This supersedes earlier one-screen-per-content-section requirement in response to latest owner feedback.
