# Motion system

Owner-approved exception: GSAP is used only for technology-symbol entrance and subtle float in Hero/About. General UI motion stays CSS (see `docs/DESIGN_SYSTEM.md`).

## Library

| Item | Value |
|---|---|
| Package | `gsap` ^3.15.0 (npm, local) |
| License | Standard GSAP license (free standard use; no Club plugins required) |
| Ownership | Isolated client components only |
| Cleanup | `gsap.context` / tween `kill` on unmount; no global timeline leaks |

## Hero social rail

| Behavior | Detail |
|---|---|
| Entrance | opacity 0→1, x 16→0, stagger 0.1s, desktop only (`lg+`) |
| Float | y ~5px, durations 5.2–6.1s per item, desynced, `sine.inOut` |
| Reduced motion / mobile | No GSAP; static links |
| Accessibility | Real focusable links with visible text labels |

## Hero symbols

| Behavior | Detail |
|---|---|
| Entrance | opacity 0→1, y 14→0, scale 0.92→1, stagger ~0.09s, ~0.7s, `power2.out` |
| Float | y ±4–7px, durations 4.6–6.4s per icon (desynchronized), `sine.inOut`, yoyo infinite |
| Tab inactive | `visibilitychange` pauses float tweens; resumes when visible |
| Reduced motion | No GSAP; symbols render at final opacity/position |
| Mobile | Static row; float disabled under `lg` for row items when reduced-motion; desktop absolute set only `lg+` |
| GSAP failure | Symbols remain visible (server HTML default opacity classes) |

## About symbols

| Behavior | Detail |
|---|---|
| Trigger | Single IntersectionObserver on the group (not per-icon ScrollTrigger) |
| Reveal | Group opacity/y once when ~15% visible |
| Float | Same restrained pattern as Hero, delayed until after reveal |
| Mobile | Hidden (`hidden md:block`) |
| Reduced motion | Static at final opacity |

## Performance limits

- Animate **transform** and **opacity** only (no blur/width/height/top/left loops).
- Hero max 7 symbols; About max 3 float symbols.
- Two small client islands: `HeroTechSymbols`, `AboutTechSymbols` (+ static row component).
- One scoped timeline per group; no page-wide client conversion.
- Test on throttled mobile profile before release.

## Accessibility

- Decorative symbols: `aria-hidden="true"` on containers; `title` for sighted hover only.
- Meaningful skill names always present as text in About.
- Categories are headings, not color-only.
- `prefers-reduced-motion: reduce` removes continuous motion.
