# Content Model

Typed TypeScript modules under `src/models/` (Prompt 03/04). MDX only for completed case studies. No database.

## Modules

| Module | Fields (summary) |
|---|---|
| `profile.ts` | publicName, fullName?, headline, summary, email, github, linkedin, cta labels |
| `navigation.ts` | section anchors, work links, primary CTA |
| `experience.ts` | id, org, role, start, end, bullets[] |
| `projects.ts` | id, title, status: completed \| in-development, summary, problem?, role?, stack[], outcome?, liveUrl?, liveActionLabel?, caseStudySlug?, illustration |
| `skills.ts` | `skillGroups[]` (Build/Intelligence/Insights/Improve); `aboutSkillCategories[]` with `SkillEntry { name, evidence, icon? }`; `aboutContentGroups` |
| `technologies.ts` | flat verified tech list from resume (legacy list; About uses categorized entries) |
| `tech-symbols.ts` | `heroTechSymbols[]` (desktop placement, tablet/mobile visibility, motion timing); `aboutFloatSymbols[]` |
| `about-photos.ts` | temporary About photo metadata (`temporary: true` until owner assets) |
| `leadership.ts` | id, org, role, period, bullets[] |
| `recognition.ts` | id, text, relatedProjectId? |
| `milestones.ts` | year: 1–4, label, items[]; source: owner-D04; intensity: none |
| `links.ts` | email, github, linkedin, facebook: null |
| `metadata.ts` | title, description; canonical/sitemap omitted until production URL |

## Case studies (MDX)

- `src/models/case-studies/soil-scan.mdx` — only if evidence sufficient
- `src/models/case-studies/baguioreadygis.mdx` — only if evidence sufficient
- Sequence: Problem, Role, Process, Solution, Results
- Ownership vs team explicit; no private repos; no invented metrics

## Project presentation rules

- Soil Scan: completed; View live only for verified fertilizer-component demo with specific label; Read case study if route exists
- BaguioReadyGIS: completed; View live only after URL verification; Read case study if route exists
- Grammar Checker: in-development; preview only; no actions
- Resume Job Tracker: in-development; preview only; no actions
- Missing images: labeled CSS/SVG illustrative artwork, never fake screenshots

## Career growth presentation

Four-year narrative/list/grid with year labels (D04). Accessible text equivalent. Not a commit graph; no inferred semesters or numeric productivity.

## About skills showcase

Categories only when verified content exists: Languages; Frontend; Backend and APIs; AI and machine learning; Data and visualization; Databases; GIS and geospatial; Development tools and deployment; Collaboration and professional.

Each entry: recognizable local symbol (optional) + technology name + short evidence line from résumé/projects. Professional strengths use typography, not logos. No progress bars, star ratings, circular percentages, or unsupported “expert” labels.

Verified technology inventory source: résumé TECHNICAL SKILLS + experience/projects modules. Conflicts stop for owner (none open for skills; Grammar Checker remains in-development per owner).

## Hero technology symbols

Decorative only; `aria-hidden`; strongest technologies only; local Simple Icons paths; GSAP entrance/float; reduced-motion static; mobile reduced set.

## Contact model

Fields: name, email, message → encoded `mailto:` subject/body. Fallbacks: copy message, copy email, LinkedIn. No storage/send backend.

## Privacy invariants

No phone, address, raw resume, secrets, private repo names, signatures, or IDs in any model or public file.

## Photo replacement contract

`src/models/about-photos.ts` is the central source for three About image slots. Two entries are generated lifestyle placeholders (`temporary: true`); the third is the original portrait (`temporary: false`). Replace src and alt and set temporary=false only after real owner assets arrive. Preserve the current résumé-backed skills inventory; this redesign changes presentation only. Icon source remains local Simple Icons CC0 paths with no runtime CDN.
