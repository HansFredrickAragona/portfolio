# Design (active source of truth for layout directions)

Status: owner-directed technology-symbol + About skills extension implemented as draft (2026-09-23). Tokens remain in `docs/DESIGN_SYSTEM.md`.

Direction source: `portfolio-agent-system/specs/DESIGN.md` plus owner requirements for Hero/About technology symbols.

## Hero

- Asymmetric editorial composition: headline + intro + CTAs left; portrait 4:5 right (lg 7/5).
- No eyebrow text. Real portrait only in Hero.
- Technology symbols: restrained set of strongest verified tools around the portrait on desktop; static primary row under CTAs on mobile/tablet.
- Symbols are decorative (`aria-hidden`), never cover the face or headline, never form a badge cloud.
- Mobile: fewer symbols; composition remains single-column; no horizontal overflow.

## About

- Multi-column editorial layout with content groups: Who I am · Achievements and leadership · Beyond work · Skills and technical capabilities.
- Multiple photos: temporary SVG placeholders until owner supplies real images (labeled “Temporary photo”).
- Skills integrated as categorized columns with name + short evidence line (no bars, stars, percentages, “expert”).
- Few decorative tech symbols in negative space only (md+); never behind body text or over photos/controls on mobile (hidden).

## Motion

See `docs/MOTION_SYSTEM.md`. GSAP only for Hero/About symbol entrance + subtle float. Reduced motion: static final positions. Page content never depends on GSAP.

## Prohibited

Badge clouds, skill percentages, icon-only skill meaning, CDN icon fetches, cursor-follow icons, orbit/spin/bounce loops, whole-page client conversion for icons.
