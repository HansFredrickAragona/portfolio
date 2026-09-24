# Decisions (docs mirror)

Full decisions: `memory/DECISIONS.md`.

## DX11 — Branch split for Figma UI v2

- `feat/v1` (commit `bfcefef`): full Next.js app + Codex editorial redesign. Owner renamed from `v1`. Contains all content models, assets, and agent docs.
- `v2` (created from feat/v1): agent docs/memory only — website code stripped. UI source will be Figma Make React+Vite.
- Owner will unzip Figma website files into v2.
- Port-from-v1 requirements for v2 integration:
  1. Skills data (`aboutSkillCategories`, 9 categories, complete evidence) + icon paths
  2. About me photos (AI temp webp ×2, portrait.webp) + information (intro, education, leadership, interests)
  3. Hero: GitHub and Email as separate visible entries; LinkedIn, GitHub, Email as button-style CTAs
- Push of v2 requires explicit owner permission (config initially denied push; updated to allow).
