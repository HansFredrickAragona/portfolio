# Hans Fredrick O. Aragona — Portfolio

Personal portfolio website showcasing full-stack and AI/ML engineering work, professional experience, skills, and services. Single-page editorial layout with dark/light themes, GSAP scroll animations, and a mailto-based contact form (no backend).

## Project overview

- **Goal:** present projects, services, experience, skills, and contact info in a polished, responsive single-page site.
- **Audience:** recruiters, collaborators, potential clients.
- **Content:** real projects (Soil Scan, BaguioReady GIS, Grammar Checker, etc.), verified experience (DOST, Gift of Grace, Bell-Kenz), education (Saint Louis University), and evidence-backed skills.
- **Constraints:** no database, no backend service, no auth/CMS/chatbot, no paid services. Static export–friendly; privacy-conscious (no phone/address/secrets in tracked files).

## Page sections

| Section | Description |
|---|---|
| **Hero** | Name, roles, portrait, decorative GitHub contribution pattern, CTAs, social buttons (LinkedIn / GitHub / Email). |
| **Projects** | Carousel + expandable cards with problem/role/outcome, tech tags, browser-mockup live previews, "In development" badges. |
| **Services** | Four service rows (web apps, AI solutions, data analytics, automation) with inline SVG icons. |
| **Experience** | Timeline-style cards for DOST, Gift of Grace, Bell-Kenz with date chips and skill tags. |
| **About** | Portrait, profile detail, education, leadership, and interests from `src/data/profile.ts`. |
| **Skills** | Nine category accordions (languages, frontend, backend, AI/ML, data, databases, GIS, tools, professional) with tech icons and evidence lines. |
| **Contact** | Form that composes a `mailto:` link; copy-message and copy-email helpers. No server submission. |
| **Footer** | Name, LinkedIn / GitHub / Email links, copyright. |

## Components

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, font imports
│   ├── page.tsx            # Single-page composition of all sections
│   └── globals.css         # Theme tokens, Tailwind, section styles, animations
├── components/
│   ├── Nav.tsx             # Fixed nav, scroll blur, dark-mode toggle, mobile menu
│   ├── Hero.tsx            # Hero stage (GitHub panel, photo, intro, CTAs)
│   ├── HeroSocial.tsx      # Social buttons + contact lines
│   ├── Projects.tsx        # Project carousel, cards, BrowserMockup iframe
│   ├── Services.tsx        # Expandable service rows with SVG icons
│   ├── Experience.tsx      # Experience cards from data
│   ├── About.tsx           # About layout (photo + copy)
│   ├── Skills.tsx          # Two-column skill accordions with TechIcon
│   ├── Contact.tsx         # Contact form → mailto; copy helpers
│   ├── Footer.tsx          # Footer links
│   ├── FloatingIcons.tsx   # Decorative tech-icon rails (aria-hidden)
│   ├── RandomPattern.tsx   # Decorative GitHub contribution-square pattern
│   ├── CardGlow.tsx        # Pointer-following radial glow on .hover-card elements
│   ├── ScrollMotion.tsx    # GSAP ScrollTrigger section reveals
│   ├── techIcons.tsx       # Icon registry for floating rails
│   └── icons/
│       ├── TechIcon.tsx    # SVG icon renderer
│       └── techIconPaths.ts # Path data + typed icon IDs
├── data/
│   ├── skills.ts           # Skill categories with evidence strings
│   ├── experience.ts       # Experience items
│   ├── profile.ts          # Profile, education, leadership, interests
│   └── links.ts            # Email, GitHub, LinkedIn
└── hooks/
    └── useDarkMode.ts      # localStorage-persisted theme toggle
```

### Notable patterns

- **`hover-card` glow:** `CardGlow.tsx` sets `--glow-x` / `--glow-y` / `--glow-opacity` CSS variables on pointer move; CSS paints a radial gradient. Guarded by `prefers-reduced-motion` and fine-pointer media queries.
- **`ScrollMotion`:** GSAP `ScrollTrigger` fades sections in on scroll, once. Respects reduced motion and completes immediately on keyboard focus.
- **`FloatingIcons`:** deterministic decorative icon set per section via a `seed` prop; hidden on small screens, `aria-hidden`.
- **Browser mockup:** project cards render `project.liveUrl` in a scaled iframe inside a macOS-style frame; projects without a live URL show a concept-art placeholder.

## Technical overview

- **Architecture:** Next.js 15 App Router, single client-rendered page (`"use client"` on root page). Static content composition — all copy lives in typed `src/data/*.ts` modules.
- **Styling:** Tailwind CSS 4 via `@tailwindcss/postcss`, plus a hand-authored `globals.css` with CSS custom-property themes (light/dark), Fraunces (serif) + Outfit (sans) fonts, and responsive breakpoints (900px mobile/desktop, 450px small, 1024–1439px icon gutters).
- **Animation:** GSAP 3 + ScrollTrigger for section reveals; CSS keyframes for floating/fade effects; pointer-driven glow via CSS variables. All animations disabled under `prefers-reduced-motion`.
- **Theming:** `useDarkMode` hook toggles `.dark` on `<html>` and persists to `localStorage`; Nav consumes the boolean for background/blur.
- **Accessibility:** semantic sections with `id` anchors, `aria-hidden` decoration, focus-visible outlines, keyboard-completable scroll reveals, native `<details>` accordions for skills/services.
- **Contact:** client-side only — builds a `mailto:` URL; no network calls, no form backend.
- **Path alias:** `@/*` → `./src/*` (TypeScript `paths`).

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19, TypeScript 5.7 (strict) |
| Styling | Tailwind CSS 4, CSS custom properties |
| Animation | GSAP 3 + ScrollTrigger |
| Fonts | Fraunces, Outfit (Google Fonts) |
| Formatter | oxfmt |
| Package manager | npm |

No database, ORM, auth provider, CMS, or paid service.

## Getting started

```bash
# install
npm install

# dev server
npm run dev

# production build
npm run build
npm run start

# format (verify tsc afterward)
npm run format

# typecheck
npx tsc --noEmit
```

Requires Node.js 18+ and npm.

## Project structure (repo root)

```
├── src/                 # Application source (components, data, hooks, app)
├── public/assets/       # Portraits and about image (LFS-tracked)
├── docs/                # Design, architecture, content, QA docs
├── memory/              # Agent state: handoff, tasks, decisions, blockers
├── portfolio-agent-system/ # Agent rules, specs, optional workflows
├── project-input/       # Ignored raw inputs (never committed)
├── tmp/                 # Ignored scratch/QA artifacts
├── AGENTS.md            # Agent operating contract
└── opencode.json        # OpenCode configuration
```

## Verification

Before committing UI changes:

```bash
npx tsc --noEmit     # strict typecheck
npm run build        # production build (static / ~75 kB)
```

- Privacy grep: no phone/address patterns in tracked files.
- Lint/tests: not configured in this project (oxfmt only).
- Visual checks: browser at 1440 / 1280 / 375 widths; reduced-motion emulation.

## Deployment

Static-friendly. Deployable to Vercel or any Next.js host. No environment variables or secrets required.

## License

Private personal project. All rights reserved.
