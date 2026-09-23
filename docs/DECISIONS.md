# Decisions (implementation)

Feature decisions for the technology-symbol + About skills extension. Product-level decisions remain in `memory/DECISIONS.md`.

| ID | Decision |
|---|---|
| DX01 | Skill inventory is résumé technical skills + verified project/experience evidence only. No popularity-only techs. |
| DX02 | Hero shows strongest set only: Python, TypeScript, JavaScript, React, Next.js, Node.js, Google Colab (max 7; mobile shows primary subset). |
| DX03 | Next.js included as verified via this portfolio codebase (App Router), not claimed as résumé bullet. |
| DX04 | Icon source: path data extracted from **simple-icons v16.32.0 (CC0-1.0)** into `src/components/icons/techIconPaths.ts`. No CDN, no full package import at runtime. |
| DX05 | Brand icons monochrome via `currentColor`; soft glass tile; brand hex kept in metadata for future restrained hover color if approved. |
| DX06 | No proficiency percentages, star ratings, or “expert” labels anywhere. |
| DX07 | About photos are temporary SVG placeholders until owner sends real photos; Hero keeps the verified real portrait. |
| DX08 | GSAP allowed only for symbol motion per owner requirement; documented in `docs/MOTION_SYSTEM.md`; content readable without JS. |
| DX09 | Duplicate Hero icons are decorative (`aria-hidden`); skill names appear once as text in About. |
| DX10 | Capability narrative (Build/Intelligence/Insights/Improve) stays under Skills; full categorized list lives in About to avoid a second badge wall. |
