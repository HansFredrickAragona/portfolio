# Design (active source of truth for layout directions)

Status: owner-directed technology-symbol + About skills extension implemented as draft (2026-09-23). Tokens remain in `docs/DESIGN_SYSTEM.md`.

Direction source: `portfolio-agent-system/specs/DESIGN.md` plus owner requirements for Hero/About technology symbols.

## Hero (owner revision 2026-09-23)

- **Top:** full legal name as the only `h1` (Hans Fredrick Ong Aragona); short headline under it.
- **Center:** portrait only — **no card/background/border** behind the photo; floats on the page ground.
- **Left rail:** Careers (compact experience: role, org, dates).
- **Right rail:** Social links floating (LinkedIn, GitHub, Email) — real anchors, subtle GSAP float on desktop only.
- **Below:** summary + primary/secondary CTAs centered; restrained tech-symbol row on small screens.
- Tech symbols: decorative only around the center portrait on desktop (`lg`); never cover face; never form a badge cloud.
- No eyebrow text. Real portrait only in Hero.
- Mobile: single column — name → portrait → careers → socials → CTAs; no horizontal overflow.

### Desktop wireframe

```text
[              Hans Fredrick Ong Aragona              ]
[         I build practical software and AI…         ]
[ Careers          | Portrait (no bg)      | Social   ]
[ · ML Researcher  |                        | LinkedIn]
[ · Project Manager|     [tech floats]      | GitHub  ]
[ · Mobile Dev     |                        | Email   ]
[            summary + CTAs + tech row               ]
```

## About

- Multi-column editorial layout with content groups: Who I am · Achievements and leadership · Beyond work · Skills and technical capabilities.
- Multiple photos: temporary SVG placeholders until owner supplies real images (labeled “Temporary photo”).
- Skills integrated as categorized columns with name + short evidence line (no bars, stars, percentages, “expert”).
- Few decorative tech symbols in negative space only (md+); never behind body text or over photos/controls on mobile (hidden).

## Motion

See `docs/MOTION_SYSTEM.md`. GSAP only for Hero/About symbol entrance + subtle float. Reduced motion: static final positions. Page content never depends on GSAP.

## Prohibited

Badge clouds, skill percentages, icon-only skill meaning, CDN icon fetches, cursor-follow icons, orbit/spin/bounce loops, whole-page client conversion for icons.
