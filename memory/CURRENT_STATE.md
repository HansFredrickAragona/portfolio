# Current state

- Branch: **feat/v2** — Figma Make drop-in integrated with v1 content ports.
- Created from `feat/v1` @ `bfcefef`; docs-only strip at `ccf4140`; Figma app drop-in pending first source commit this session.
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

- Stage memory updates + Figma source; commit; push only with owner permission.
- Optional: downscale ~24MB portraits later (LFS already tracks them).
- No deploy/PR/merge to main without owner auth.

## Privacy

- No phone number or city address in tracked files (privacy grep clean).
- `project-input/` and `tmp/` gitignored.
