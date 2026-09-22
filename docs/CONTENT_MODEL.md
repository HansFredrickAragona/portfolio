# Content Model

Typed TypeScript modules under `src/models/` (Prompt 03/04). MDX only for completed case studies. No database.

## Modules

| Module | Fields (summary) |
|---|---|
| `profile.ts` | publicName, fullName?, headline, summary, email, github, linkedin, cta labels |
| `navigation.ts` | section anchors, work links, primary CTA |
| `experience.ts` | id, org, role, start, end, bullets[] |
| `projects.ts` | id, title, status: completed \| in-development, summary, problem?, role?, stack[], outcome?, liveUrl?, liveActionLabel?, caseStudySlug?, illustration |
| `skills.ts` | groups[]: label, items[] |
| `technologies.ts` | flat verified tech list from resume |
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

## Contact model

Fields: name, email, message → encoded `mailto:` subject/body. Fallbacks: copy message, copy email, LinkedIn. No storage/send backend.

## Privacy invariants

No phone, address, raw resume, secrets, private repo names, signatures, or IDs in any model or public file.
