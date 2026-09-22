# Architecture Specification

Status: constraints approved; implementation agent must record exact compatible versions.

Approval covers architectural constraints, not permission to scaffold. Exact implementation decisions remain subject to the phase gates.

## Simple MVC

Use a simple Model-View-Controller separation within Next.js App Router. Do not add a separate server framework, database, repository layer, dependency-injection container, or generic service layer.

- Models: typed, verified content and MDX case studies in `src/models/`; no database or persistence.
- Views: presentational React components in `src/components/`, receiving typed data and callbacks.
- Controllers: route composition in `src/app/**/page.tsx` loads models and supplies views. Small client controllers/hooks in `src/controllers/` manage project selection/disclosure, theme, milestone selection when needed, and contact composition. Add them only when behavior exists; keep trivial state local rather than adding pass-through layers.

Server route controllers remain Server Components by default. Interactive controllers run only inside the necessary client boundaries; do not turn entire pages into Client Components. MVC is a responsibility split, not a requirement for classes or additional HTTP endpoints.

## Stack

Next.js App Router, strict TypeScript, Tailwind CSS, npm, ESLint, Prettier, and current stable mutually compatible packages. Use React Server Components by default. Client Components are limited to theme control, project disclosure/index behavior, Career Growth Grid selection if needed, and contact composition/copy behavior.

Selecting and pinning compatible stable versions within this approved stack is routine implementation work. Record versions and compatibility evidence. Adding or replacing dependencies outside the approved stack requires a documented rationale and owner approval before installation.

## Content

- Typed TypeScript modules for profile, navigation, experience, leadership, skills, technologies, milestones, links, projects, and metadata.
- MDX for completed case studies.
- Typed previews for unfinished projects.
- Runtime validation only if it materially prevents content mistakes without adding excessive complexity.

## Performance

Prefer static generation, local optimized images, `next/font`, CSS motion, and zero client JavaScript for static sections. Do not load iframes. Project screenshots link to verified live applications in a new tab. Avoid packages that duplicate platform or browser capabilities.

## Suggested structure

```text
src/app/page.tsx
src/app/work/[slug]/page.tsx
src/components/{layout,sections,projects,ui}
src/models/{profile,experience,leadership,skills,milestones,projects}.ts
src/models/case-studies/{soil-scan,baguioreadygis}.mdx
src/controllers/
src/lib/
public/{images,resume}
```

## Contact flow

Validate the three local fields, build a safely encoded `mailto:` subject/body, then open the mail application after explicit action. Provide clipboard fallbacks and plain links. No API route, database, email provider, or secret is required.

## Analytics

Add Vercel Analytics only if official current documentation confirms it is available on the free plan and fits the privacy requirements without unnecessary consent complexity. Otherwise leave it disabled and record the decision.

## SEO and accessibility

Provide verified metadata, canonical URL configuration, Open Graph data, sitemap, robots, Person structured data only for verified facts, semantic headings, keyboard interaction, focus visibility, accessible disclosure state, reduced motion, and text alternatives.

Until the owner supplies the production URL, omit URL-dependent canonical, sitemap, and absolute metadata values rather than inventing a domain. Record production URL configuration and verification as a release prerequisite in the manual deployment checklist. Include only approved, implemented routes in metadata and navigation.

## Repository and deployment

Start private. Agents prepare a release-ready branch and documentation. The owner manually deploys to a free `vercel.app` domain and controls any later visibility change.
