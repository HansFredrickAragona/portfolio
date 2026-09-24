# Decisions (docs mirror)

Full decisions: `memory/DECISIONS.md`.

## DX11 — Branch split for Figma UI v2

- `feat/v1` (commit `bfcefef`): prior full Next.js app + Codex editorial redesign. Owner renamed from `v1`.
- `feat/v2` (from feat/v1, strip `ccf4140`): agent docs + Figma Make website drop-in.
- Figma export is **Next.js 15 App Router** (not Vite).
- Port-from-v1 requirements applied this session:
  1. Skills data (`aboutSkillCategories`, 9 categories, evidence) → `src/data/skills.ts`
  2. About information (profile, education, leadership, interests) + Figma portraits
  3. Hero: GitHub and Email as separate visible entries; LinkedIn, GitHub, Email as buttons (`HeroSocial.tsx`)
  4. Approved links centralized in `src/data/links.ts`; wrong Figma email/LinkedIn corrected
- Push completed 2026-09-24 (owner: "push now") — origin/feat/v2 = `a2d6e13`.
