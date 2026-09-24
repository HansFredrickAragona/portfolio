# Decisions

- D01: Simple MVC inside Next.js App Router; no separate backend or persistence.
- D02: Active overnight batch 00-08; local draft only; numeric phase progression with internal checks, final morning review.
- D03: Public name Hans Fredrick; full source name Hans Fredrick Ong Aragona. Public email and repo-local Git email `hansfredrick2600@gmail.com`. GitHub profile `https://github.com/HansFredrickAragona`; LinkedIn `https://www.linkedin.com/in/hans-aragona`.
- D04: Owner milestone narrative by college year (not guessed semester dates).
- D05: Fertilizer recommendation deployment is a Soil Scan component demo. Grammar Checker and Resume Job Tracker remain in development.
- D06: September 25, 2026 deadline; 23:59 Asia/Manila.
- D07: No resume download without approved redaction; no analytics, no Facebook without verified link, no invented canonical URL.
- D08: OpenWolf no verified Codex/OpenCode integration; Markdown/Git fallback.
- D09: Tech-symbol extension: Hero decorative symbols from verified résumé stack; About full categorized skills; local simple-icons CC0 paths; GSAP only for symbol motion.
- D10: **Branch strategy** — `feat/v1` = full prior Next.js app snapshot (`bfcefef`, pushed/renamed). `feat/v2` = docs + Figma UI. Owner unzipped Figma Make export (actually **Next.js 15 App Router**, not Vite). Port requirements applied: complete skills data, About photos+info, Hero GitHub+Email separate + LinkedIn/GitHub/Email buttons, approved links only. See `docs/DECISIONS.md` DX11+.
- D11: Figma drop-in wrong contact data corrected from export (wrong email/LinkedIn). Centralized in `src/data/links.ts`. Experience wrong university entry replaced with v1 DOST/Gift of Grace/Bell-Kenz. oxfmt type-member breakage noted; verify tsc after format.
