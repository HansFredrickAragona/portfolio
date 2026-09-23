# Architecture (implementation record)

Updated from `portfolio-agent-system/specs/ARCHITECTURE.md` for the overnight local draft. Status: draft awaiting morning review.

## Stack (pinned after scaffold)

Resolved 2026-09-23 via create-next-app + npm:

| Package | Version |
|---|---|
| next | 16.3.5 |
| react / react-dom | 19.2.8 |
| typescript | ^5 (scaffold) |
| tailwindcss + @tailwindcss/postcss | ^4 |
| eslint + eslint-config-next | ^9 / 16.3.5 |
| prettier + prettier-plugin-tailwindcss | 3.9.8 + latest compatible |
| @next/mdx + @mdx-js/loader | 16.3.5 + latest |
| vitest + @testing-library/* + jsdom | 5.0.1 + latest + latest |
| @types/node | ^22 (vitest peer) |
| next/font | Geist + Geist Mono (local Google font download at build) |

Compatibility evidence: create-next-app 16.2.10 generated a working Next 16.3.5 App Router + Tailwind v4 + TS strict tree; `npm ls` peer resolution clean after `@types/node@^22`; production build and unit tests run in Prompt 03 checks. No other runtime dependencies.

## Rendering

- Static-first App Router pages (`export const dynamic = 'force-static'` not required if default static).
- Server Components default; Client Components only: theme toggle, mobile nav, project index/disclosure, contact composer, **HeroTechSymbols**, **AboutTechSymbols** (GSAP islands).
- No API routes. No iframes. Images local under `public/images/`.
- Icons: path strings in `src/components/icons/techIconPaths.ts` (extracted from simple-icons CC0); no icon CDN; no full icon package import at runtime.
- GSAP (`gsap` dependency) used only inside the two symbol client components; cleanup on unmount; see `docs/MOTION_SYSTEM.md`.

## MVC split

- Models: `src/models/*.ts` + `src/models/case-studies/*.mdx`
- Views: `src/components/{layout,sections,projects,ui}`
- Route composition: `src/app/**/page.tsx`
- Controllers: `src/controllers/*` client hooks only when behavior exists
- Lib: `src/lib/` utils (mailto builder, contrast-free helpers)

## Content flow

Typed models imported by server pages → passed as props to presentational views. MDX compiled via official Next MDX pipeline into `/work/[slug]`.

## Theme

CSS variables + `data-theme` on `<html>`; tiny inline script in root layout to avoid FOUC (reads localStorage); toggle is client component. Tokens from `docs/DESIGN_SYSTEM.md`.

## Asset policy

Portrait copied from `project-input/image.jpg` → optimized `public/images/portrait.*` with metadata stripped; raw source never tracked. Illustrative SVG artwork for projects without verified screenshots.

## Error behavior

`not-found.tsx` for unknown work slugs; no global error secrets; contact failures are client-side validation only.

## Testing strategy

- Unit: mailto encoder, content model guards (statuses, required fields)
- Component: project disclosure keyboard behavior, contact form validation
- E2E/manual: Prompt 08 responsive + a11y checklist (Playwright if available)

## Environment variables

None required for draft. No secrets. Production URL config deferred to release (omit canonical/sitemap until known).

## File tree (target)

```text
src/app/layout.tsx
src/app/page.tsx
src/app/work/[slug]/page.tsx
src/app/not-found.tsx
src/components/layout/{Header,Footer,ThemeToggle,MobileNav}.tsx
src/components/sections/{HeroProfile,HeroTechSymbols,AboutSection,AboutTechSymbols,CareerGrowthSection,ContentSections,ContactComposer}.tsx
src/components/icons/{TechIcon,techIconPaths}.tsx|ts
src/models/{profile,navigation,experience,projects,skills,technologies,tech-symbols,about-photos,leadership,recognition,milestones,links,metadata}.ts
src/models/case-studies/{soil-scan,baguioreadygis}.mdx
src/lib/mailto.ts
docs/ARCHITECTURE.md (this file)
```

## Scripts (package.json)

`format`, `format:check`, `lint`, `typecheck` (`tsc --noEmit`), `test`, `build`, `dev`, `start`.
