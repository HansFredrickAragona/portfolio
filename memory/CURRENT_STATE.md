# Current state

- Branch: **v2** — docs/agents only, no website code.
- Created from `feat/v1` (commit `bfcefef`, 2026-09-23).
- UI source will be **Figma Make → React + Vite** (owner will unzip website files into this branch).
- Full Next.js app remains on `feat/v1` at `bfcefef` (pushed as `origin/v1` pending rename to `origin/feat/v1`).
- Checks: N/A on this branch (no package.json / build tooling). Format/lint N/A for markdown-only.

## Port-from-v1 requirements (owner-specified)

When integrating Figma Make React+Vite code into v2, port content from `feat/v1`:

1. **Skills data** — `src/models/skills.ts` (`aboutSkillCategories`, 9 categories, complete with names + evidence lines) + `TechIcon`/`techIconPaths`.
2. **About me** — photos + information: `about-photos.ts`, `profile.ts`, `education.ts`, `leadership.ts`; images `about-hans-ai-temp.webp`, `about-hans-outdoors-ai-temp.webp`, `portrait.webp`; About copy (intro, education, leadership, beyond-work interests).
3. **Hero section** — GitHub and Email listed **separately** (visible distinct entries); LinkedIn, GitHub, and Email as **buttons** (button-style CTAs, not icon-only pills).
4. **Approved links** (`links.ts`): email `hansfredrick2600@gmail.com`, GitHub `https://github.com/HansFredrickAragona`, LinkedIn `https://www.linkedin.com/in/hans-aragona`. No Facebook.

## Kept on this branch

- `AGENTS.md`, `opencode.json`, `.gitignore`
- `docs/**` (all design/architecture/QA docs)
- `memory/**` (approvals, decisions, handoff, blockers, content gaps)
- `portfolio-agent-system/**` (rules, specs, prompts, optional workflows)

## Removed on this branch

- `src/**`, `public/**` (all website code and assets)
- `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `vitest.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, prettier configs

## Next

- Owner unzips Figma Make React+Vite website files into this branch.
- Agent reads/inspects drop-in (stack, structure, privacy: no phone/address/secrets).
- Port skills, About, Hero button requirements from `feat/v1`.
- Push only with explicit owner permission.

## Privacy

- No phone number or city address in tracked files (privacy grep clean).
- `project-input/` and `tmp/` gitignored.
- Deadline: September 25, 2026 EOD Asia/Manila.
