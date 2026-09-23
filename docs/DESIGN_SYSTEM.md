# Design System

Status: internally reviewed draft for morning owner review (overnight batch Gate 2 deferred, not owner-approved).

Direction source: `portfolio-agent-system/specs/DESIGN.md`. All text/background pairs below measured with WCAG 2.x relative luminance; AA normal text requires ≥ 4.5:1, large text and UI components ≥ 3:1.

## Impression

Warm, human, professional, calm, modern. Editorial company-application feel with minimal-resume clarity. Not a dashboard, template, or sales funnel.

## Color tokens

### Light theme

| Token | Hex | Role | Contrast notes |
|---|---|---|---|
| `--bg` | `#FAF7F0` | Page background (warm cream) | — |
| `--bg-subtle` | `#F0EBE1` | Alternate section wash | — |
| `--surface` | `#FFFFFF` | Raised surface / nav glass base | — |
| `--text` | `#1C1917` | Body text | 16.35:1 on `--bg` |
| `--text-muted` | `#44403C` | Secondary text | 9.60:1 on `--bg` |
| `--text-subtle` | `#706B63` | Captions, meta | 4.94:1 on `--bg` |
| `--primary` | `#14532D` | Deep green headings/accents/buttons | 8.52:1 on `--bg` |
| `--primary-fg` | `#FAF7F0` | Text on primary buttons | 8.52:1 on `--primary` |
| `--accent` | `#1E3A5F` | Muted blue links/secondary CTA | 10.75:1 on `--bg` |
| `--accent-fg` | `#FAF7F0` | Text on accent buttons | 10.75:1 on `--accent` |
| `--highlight` | `#B45309` | Amber emphasis (sparingly) | 4.69:1 on `--bg` |
| `--success` | `#15803D` | Positive feedback | 4.69:1 on `--bg` |
| `--danger` | `#B91C1C` | Validation errors | 6.05:1 on `--bg` |
| `--border` | `#D6D3D1` | Dividers, input borders | Non-text; pair with visible labels |
| `--focus` | `#14532D` | Focus ring | 8.52:1 on `--bg` |

### Dark theme (not a simple invert)

| Token | Hex | Role | Contrast notes |
|---|---|---|---|
| `--bg` | `#0C1A12` | Page background (deep green-black) | — |
| `--bg-subtle` | `#12241A` | Alternate section wash | — |
| `--surface` | `#163024` | Raised surface | — |
| `--text` | `#E7E5E4` | Body text | 14.27:1 on `--bg` |
| `--text-muted` | `#D6D3D1` | Secondary text | 12.03:1 on `--bg` |
| `--text-subtle` | `#A8A29E` | Captions, meta | 7.10:1 on `--bg` |
| `--primary` | `#A7F3D0` | Mint green headings/accents | 13.97:1 on `--bg` |
| `--primary-fg` | `#0C1A12` | Text on primary buttons | 13.97:1 on `--primary` |
| `--accent` | `#93C5FD` | Soft blue links/secondary CTA | 9.94:1 on `--bg` |
| `--accent-fg` | `#0C1A12` | Text on accent buttons | 9.94:1 on `--accent` |
| `--highlight` | `#FCD34D` | Amber emphasis (sparingly) | 12.43:1 on `--bg` |
| `--success` | `#86EFAC` | Positive feedback | 12.76:1 on `--bg` |
| `--danger` | `#FCA5A5` | Validation errors | 9.44:1 on `--bg` |
| `--border` | `#44403C` | Dividers, input borders | Non-text |
| `--focus` | `#A7F3D0` | Focus ring | 13.97:1 on `--bg` |

Shared CTA green (both themes when on cream/green fill): `#14532D` / `#FAF7F0` = 8.52:1.

Theme implementation: CSS variables on `:root` and `[data-theme="dark"]` (or class), toggled by a small client control; `prefers-reduced-motion` respected; no flash of wrong theme via inline script or cookie-free localStorage read in layout as appropriate.

## Typography

- Interface/body: clean modern system stack first for zero-latency draft — `ui-sans-serif, system-ui, "Segoe UI", Helvetica, Arial, sans-serif`; upgrade to `next/font` Inter (or similar neutral) in Prompt 03 if install is free and local.
- Optional display accent: `ui-serif, Georgia, "Times New Roman", serif` for one hero headline line or section pull-quotes only — not novelty fonts.
- Scale (rem, mobile-first):

| Role | Size | Weight | Line height |
|---|---|---|---|
| display | clamp(2.25rem, 5vw, 3.5rem) | 650–700 | 1.1 |
| h1 | clamp(1.75rem, 3vw, 2.25rem) | 650 | 1.2 |
| h2 | clamp(1.35rem, 2vw, 1.75rem) | 600 | 1.25 |
| h3 | 1.125rem | 600 | 1.35 |
| body | 1rem | 400 | 1.65 |
| small | 0.875rem | 400 | 1.5 |
| label | 0.75rem | 600 | 1.4 | letter-spacing 0.04em; uppercase only for short meta labels |

## Spacing and layout

- Space scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px (`0.25rem` steps).
- Section vertical padding: `4rem` mobile → `6rem` desktop.
- Content max width: `72rem` page shell; prose measure `65ch`; project detail text `70ch`.
- Grid: single column mobile; hero asymmetric 12-col from `lg` (copy ~7, portrait ~5); project index + preview two-column from `md`.
- Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`.
- Fully usable at 320px; no horizontal overflow.

## Surfaces and glass

- Nav: subtle glass — `backdrop-filter: blur(8px)`; background `color-mix(in srgb, var(--bg) 85%, transparent)`; 1px bottom border `--border`.
- One optional project overlay uses translucent scrim `rgba(12,26,18,0.72)` in dark / `rgba(28,25,23,0.66)` in light for text legibility over artwork.
- No nested glass, glow borders, or blobs. Sections are transparent with dividers and whitespace — not every section in a card.

## Motion

| Interaction | Motion | Duration | Easing |
|---|---|---|---|
| Link/button hover | color, underline offset | 120ms | ease |
| Focus | outline/box-shadow ring | 0ms (immediate) | — |
| Project details open | opacity 0→1 on overlay | 180ms | ease-out |
| Project switch | crossfade preview image | 160ms | ease |
| Theme toggle | color tokens only (no page fade required) | — | — |
| Hero/About tech symbols | GSAP entrance + subtle y-float only | see `docs/MOTION_SYSTEM.md` | power2 / sine |

`@media (prefers-reduced-motion: reduce)`: all durations `0.01ms`; no transforms; disclosures appear instantly; GSAP symbol motion skipped (static final positions).

Prohibited: parallax, scroll hijack, cursor follower, orbit/spin/bounce loops. GSAP exception limited to tech symbols (owner-approved; `docs/MOTION_SYSTEM.md`).

## Hero

- Full legal name as the single `h1` (owner layout): centered top; value headline beneath (not eyebrow).
- Center portrait with **no background frame/border/card** — photo sits on page ground (`object-cover`, aspect 4:5).
- Left: Careers rail (experience role/org/dates). Right: floating Social rail (LinkedIn, GitHub, Email).
- Summary + **View projects** / **Let's talk** centered below the three-column composition.
- Technology symbols: decorative glass tiles around center portrait on `lg+` only; monochrome; max 7; `aria-hidden`. Mobile/tablet: static primary row under CTAs.
- Mobile: stacks name → portrait → careers → socials → CTAs; no horizontal overflow.
- Real portrait only (`alt` includes full name).

## About (owner extension)

- Multi-column editorial: Who I am · Achievements and leadership · Beyond work · Skills and technical capabilities.
- Temporary photo placeholders until owner assets; captioned “Temporary photo”.
- Skills: category heading + name + evidence line; optional local brand icon as support only — never icon-only meaning.
- Floating decorative symbols md+ in gutters only; hidden on mobile; no motion behind reading text.
- No skill percentages, stars, or “expert”.

## Navigation

- Sticky top; logo/name left; anchor links (About, Work, Experience, Skills, Leadership, Contact); theme toggle; optional resume link omitted until redacted PDF.
- Mobile: compact menu button (44×44 min) revealing same anchors; focus trapped while open; Esc closes.
- One primary CTA style for **Let's talk**.

## Project index and preview

- Closed: compact text index (title + status chip: Completed / In development). First evidenced project selected by default (Soil Scan).
- Selection: button/listbox pattern; `aria-current` or `aria-selected`; selecting another project collapses open details.
- **Expand details**: explicit button toggles overlay on the same preview image (fade 180ms) with problem, role, verified outcome, summary, stack, actions.
- Actions: **Read case study** only if route exists; **View live** only if URL verified (fertilizer demo uses specific label); never repository buttons; never hover-only; never nested interactive controls inside the disclosure button.
- Mobile: tap controls only; preview is disclosure, not hover.
- Focus: visible ring on index items and Expand/Close; focus moves to details heading on open if needed; returns to trigger on collapse.
- Reset: changing project or Close returns to closed preview state.

## Career growth presentation (draft)

- Four year blocks (Year 1–4) with labels and bullet milestones from D04.
- Optional visual: static CSS grid of year columns (4 columns desktop, 1–2 mobile) with categorical color swatches by type (learning, sports, leadership, build, research) — equal intensity, **not** a heatmap scale.
- Legend + screen-reader list equivalent. Unknown periods: not rendered as empty “zero” cells; omit or label “undocumented”.
- No commit-count implication; no numeric productivity.

## Contact composer

- Fields: Name, Email, Message — labels always visible; inputs `min-height: 44px`; border `--border`; focus ring `--focus`.
- Primary: **Continue to email** (builds mailto, opens client after click).
- Secondary: Copy message, Copy email, LinkedIn (Facebook omitted).
- Helper text: explains mail app opens; nothing is stored or sent by the site.
- Inline validation uses `--danger` + text (not color alone).

## Imagery

- Portrait: optimized WebP/AVIF + JPEG fallback in `public/images/`; metadata stripped; integrity preserved; credit preserved if visible in source.
- Project previews: authentic screenshots only if captured from verified public pages without private data; else labeled abstract artwork (SVG/CSS gradients + project initials/pattern) marked `illustrative: true` in model metadata.
- All images: width/height set, `loading="lazy"` except hero portrait (`priority`), descriptive alt or empty alt if purely decorative.

## Focus, hover, tap

- Focus: `outline: 2px solid var(--focus); outline-offset: 2px` on all interactive elements.
- Hover: enhance only; never required for essential actions.
- Tap targets: ≥44×44px practical; nav links padded accordingly.

## Breakpoint behavior

| Width | Layout |
|---|---|
| 320 | Single column; stacked hero; project index above preview; full-width CTAs comfortable |
| 375–430 | Same; comfortable type; no overflow |
| 768 | Two-column project index/preview begins; nav may still collapse |
| 1024+ | Asymmetric hero; expanded gutters; readable measure; desktop nav row |
| 1280+ | Max shell width; extra whitespace only |

## Prohibited patterns

Badge clouds, excessive pills, repeated cards, gratuitous gradients, fake terminals, skill percentage bars, auto-playing previews, decorative metrics, invented contribution counts, dense icon walls, eyebrow hero text, hover-dependent essential UI.

## Wireframes (text)

### 320px home

```text
[ Nav: Hans F.          [theme] [menu] ]
[ Headline display            ]
[ Supporting intro            ]
[ View projects ] [ Let's talk]
[ Primary tech symbols row    ]
[ Portrait 4:5 full width     ]
[ About: who | photos | beyond]
[ About skills categories     ]
[ Career years 1–4 stacked    ]
[ Project index (list)        ]
[ Preview + Expand details    ]
[ Experience entries          ]
[ How I work groups           ]
[ Leadership                  ]
[ Recognition (compact)       ]
[ Contact form                ]
[ Footer links                ]
```

### Desktop home

```text
[ Nav anchors .................. theme ]
[ Headline          | Portrait 4:5     ]
[ Intro             | (offset) + icons ]
[ CTAs + icon row   |                  ]
[ About: who | photos | achievements    ]
[ About skills (3-col categories)      ]
[ Career years 1–4 (4-col)             ]
[ Project index | Active preview+overlay]
[ Experience              | How I work  ]
[ Leadership + recognition             ]
[ Contact composer                     ]
[ Footer                               ]
```

### Project details open (overlay on same image)

```text
[ Preview image                    ]
[ ┌ overlay ─────────────────┐    ]
[ │ Title          [Close]   │    ]
[ │ Problem / Role / Outcome │    ]
[ │ Stack chips              │    ]
[ │ [Read case study] [Live] │    ]
[ └──────────────────────────┘    ]
```

## Acceptance criteria (Gate 2 package)

- [x] Exact tokens for both themes with measured AA contrast for primary text pairs
- [x] Typography roles, spacing, widths, breakpoints
- [x] Hero without eyebrow; navigation; project states; career narrative states; contact; imagery rules
- [x] Focus/hover/tap; motion timings; reduced motion; prohibited patterns
- [x] Text wireframes 320 and desktop
- [ ] Owner morning review of direction tokens (batch defers approval)
