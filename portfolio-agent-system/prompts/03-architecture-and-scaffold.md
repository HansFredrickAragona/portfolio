# Prompt 03 — Architecture and Scaffold

First update `docs/ARCHITECTURE.md` from the approved specification. Record exact package versions, rendering strategy, server/client boundaries, content flow, MDX integration, asset policy, theme implementation, error behavior, testing strategy, and environment variables. Justify every non-core dependency.

Follow simple MVC from `portfolio-agent-system/specs/ARCHITECTURE.md`: content models in `src/models/`, presentational views in `src/components/`, route composition in `src/app/`, and small client controllers only as needed. Do not add a custom backend or speculative abstraction layers. Version selection within the approved stack is permitted; obtain approval before installing dependencies outside it. Confirm approval to enter this phase before scaffolding. The owner initializes Git; never initialize it as part of scaffolding.

After architecture is internally consistent, scaffold the private-repository project with Next.js App Router, strict TypeScript, Tailwind, npm, ESLint, and Prettier. Add scripts for format check, lint, typecheck, tests, and production build. Configure `.gitignore` to exclude `project-input/`, secrets, and generated reports not intended for source control.

Implement only the application shell, tokens, fonts, theme behavior, navigation skeleton, footer skeleton, and empty semantic section boundaries. No final copy or project content.

Run all required checks and inspect 320px mobile and desktop behavior using a descriptive checklist.

## Approval gate 3

Report dependencies, architecture decisions, file tree, checks, and shell behavior. Stop.
