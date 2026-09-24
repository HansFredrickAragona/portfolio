# Current state

- Branch: **feat/v2**. Application tip `40fb3d8` for UI; docs tip includes handoff commit `297ec24` (pushed, origin in sync). Owner authorized commit+push of all local work before further UI changes (2026-09-24). Successor ownership accepted: `memory/OPENCODE_HANDOFF.md`.
- Figma integration `ff89b2a` + checkpoints pushed 2026-09-24 (owner: "push now").
- 2026-09-24 Services browser verification: desktop 1440 full-width rows + typography confirmed via headless Edge screenshot and DOM/CSS inspection; temporary public/*qa*.html wrappers deleted after use. tsc + production build PASS; privacy grep clean. Preview last run on port 3115.
- Created from `feat/v1` @ `bfcefef`; docs-only strip at `ccf4140`.
- Stack: **Next.js 15.5 App Router** (not Vite), React 19, Tailwind 4, oxfmt.
- Full prior app remains on `feat/v1` @ `bfcefef`.
- Checks (this drop-in): `npx tsc --noEmit` PASS, `npm run build` PASS (static `/` 13.8 kB), privacy grep clean, LFS tracks both portraits.
- `npm run format` (oxfmt) broke TS type-member semicolons once; fixed in `techIcons.tsx` and `data/skills.ts`. Do not re-run format blindly — verify tsc after.

## Figma drop-in fixes applied

- Wrong email `hansfredrickarago@email.com` → `hansfredrick2600@gmail.com` via `src/data/links.ts`.
- Wrong LinkedIn → `https://www.linkedin.com/in/hans-aragona`.
- GitHub added: `https://github.com/HansFredrickAragona`.
- Hero: separate GitHub + Email text entries + LinkedIn/GitHub/Email buttons (`HeroSocial.tsx`).
- Footer: LinkedIn/GitHub/Email only; Facebook and dead Résumé links removed; © 2026.
- Nav: Résumé item replaced with Contact.
- Skills: full `aboutSkillCategories` (9 categories, evidence lines) from v1.
- About: v1 profile detail, education (SLU), leadership, interests + Figma portraits.
- Experience: v1 DOST / Gift of Grace / Bell-Kenz (removed wrong University of Baguio entry).
- Junk removed: `.gitignore copy`, `next-env.d copy.ts`, `tsconfig.tsbuildinfo`.

## Port-from-v1 requirements status

1. Skills data — DONE (`src/data/skills.ts`).
2. About photos + information — DONE (portraits + profile/education/leadership/interests).
3. Hero GitHub/Email separate + three buttons — DONE (`HeroSocial.tsx`).
4. Approved links — DONE (`src/data/links.ts`).

## Kept on this branch

- `AGENTS.md`, `opencode.json`, `.gitignore`, `.gitattributes`
- `docs/**`, `memory/**`, `portfolio-agent-system/**`
- Figma app: `src/**`, `public/**`, configs, `package.json`

## Next

- Await owner UI feedback; no unsolicited redesign.
- Optional: mobile 375 + expanded Services screenshot recheck; downscale ~24MB portraits later (LFS already tracks them).
- No deploy/PR/merge to main without owner auth.

## Privacy

- No phone number or city address in tracked files (privacy grep clean).
- `project-input/` and `tmp/` gitignored.

## 2026-09-24 owner-approved combined design
Implemented combined V1 hero/layout and V2 content, laptop About panel, full skills with icons and two-column accordions, glass surfaces and GSAP section reveals. Preserved V2 carousel and decorative GitHub squares. Desktop closed sections fit 1280x720; mobile overflow and native accordion keyboard behavior checked. Final build verification recorded in HANDOFF. No push/deployment.

## 2026-09-24 late UI (feat/v2)
Tip `40fb3d8` after style batch: skills-style section titles, in-dev concept badges, nav glow, hero hover-card, About −10% text, mobile section padding 10px + heading 2.53rem, simplified browser mockup (removed loading overlay/emoji). Prior commit `a829bb1`. Checks: tsc + production build + privacy grep PASS. techIcons/skills CRLF noise unstaged. All local commits pushed to origin/feat/v2.

