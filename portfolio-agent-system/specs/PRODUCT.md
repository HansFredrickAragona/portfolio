# Product Specification

## Information architecture

- `/`: single-page portfolio with anchored sections.
- `/work/soil-scan`: completed concise case study.
- `/work/baguioreadygis`: completed concise case study.
- Future case-study routes only after owner approval.

The two named case-study routes are planned, not unconditional publication requirements. Generate each route and its navigation/metadata only after sufficient evidence and owner-approved copy exist. Otherwise omit the route and action and record the content gap; never publish an empty or unsupported case study.

Navigation links scroll to relevant home sections. It includes a resume download and one main CTA: **Let's talk**.

Activated overnight draft exception: resume download is omitted until a redacted copy is approved. Public email is `hansfredrick2600@gmail.com`, public GitHub profile `https://github.com/HansFredrickAragona`, and LinkedIn `https://www.linkedin.com/in/hans-aragona`; phone/address remain excluded. This local draft is not publication approval.

## Home sequence

1. Editorial hero
2. Concise professional profile
3. Career Growth Grid inside the profile
4. Selected project index with one active preview
5. Experience
6. Technical capabilities and verified technology list
7. Leadership
8. Recognition beside relevant work rather than a large award wall
9. Contact composer
10. Footer

## Career Growth Grid

Use a GitHub-inspired grid as a four-year college career narrative, not a coding-frequency chart. Cells follow a fixed semester timeline and represent verified milestones across major software/AI projects, competitions, awards, leadership, internship/professional work, presentations, and thesis milestones. Color intensity communicates documented activity or responsibility. Provide a clear legend and accessible text equivalent. Never imply commit counts or invent numeric productivity.

Before implementation, document and obtain design-gate approval for cell granularity, verified semester dates, and a qualitative intensity rubric tied to evidence. Unknown periods must be labeled as undocumented, not represented as inactivity or zero achievement.

Owner update at overnight activation: year-level narrative is verified: Year 1 learning programming; Year 2 varsity membership, organization participation, simple GUI development; Year 3 team captain, pitching event participation, founding AWS Learning Club; Year 4 DOST-funded thesis, club events, thesis presentations. Use an accessible four-year narrative/list or grid with year labels for the draft. Do not infer semester/calendar dates or numerical intensity. The activated batch defers design review until morning.

## Projects

- Soil Scan: completed; full case study when evidence is available.
- BaguioReadyGIS: completed; full case study when evidence is available.
- Grammar Checker: in development; preview only, no live/case-study action unless later verified.
- Resume Job Tracker: in development; preview only, no live/case-study action unless later verified.

Owner clarification (2026-09-22): the fertilizer recommendation system listed in `project-input/live_links.md` is a component of Soil Scan, not a separate project or necessarily a deployment of the entire Soil Scan system. If the supplied URL passes live verification, label its action specifically, such as **View fertilizer recommendation demo**. Grammar Checker and Resume Job Tracker are both confirmed in development; retain preview-only treatment and omit unverified actions.

Home presentation uses a compact text index controlling one shared visual preview. The closed state is minimal. An explicit **Expand details** control fades in an overlay on the same image with problem, role, verified outcome, summary, stack, and actions. Do not rely on hover. Completed projects may show **Read case study**; verified deployments may show **View live** in a new tab. No repository buttons.

At the design gate, specify initial project selection, selection versus expansion behavior, keyboard/focus behavior, collapse/reset behavior, and mobile states. Keep screenshot links and disclosure controls separate without nested interactive elements. These choices require approval before implementation.

## Skills and services

Show technologies beside projects where used, plus a separate clean technology section. Balance verified strengths across Python/AI/ML, Next.js/React/TypeScript, APIs, databases, and backend systems.

Do not create a redundant freelance sales section. Integrate capabilities as Build, Intelligence, Insights, and Improve. Use one neutral CTA for opportunities or projects.

## Contact

Provide a small client-side email composer with name, email, and message. One general-message template creates a `mailto:` URL. Include copy-message, copy-email, LinkedIn, and Facebook fallbacks. Do not store or send form data through the application. Clearly explain that Continue to email opens the visitor's mail application.
