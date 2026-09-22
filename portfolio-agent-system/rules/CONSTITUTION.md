# Project Constitution

## Purpose

Build a fast, mobile-first portfolio that convinces visitors within 30 seconds that Hans can build complete products, combines full-stack and AI skills, and communicates and leads effectively.

Primary positioning: **I build practical software and AI solutions.**

Audience priority: recruiters and hiring managers; technical peers; potential clients; collaborators.

## Product principles

1. Evidence before claims.
2. Scan-friendly before exhaustive.
3. Warm and human, professional and restrained.
4. Mobile-first without making desktop look like an enlarged phone.
5. Minimal JavaScript and instant-feeling loading.
6. Creative composition, not visual noise.
7. KISS and YAGNI; no speculative infrastructure.
8. Never fabricate facts, metrics, outcomes, screenshots, links, roles, dates, or skill usage.

## Truth and privacy

- Resume and owner-provided files are authoritative. Chat-confirmed facts may supplement them.
- If sources conflict, stop and ask the owner.
- Private repositories are never linked, exposed, or named beyond owner-approved public descriptions.
- Only an explicitly redacted resume may enter `public/`.
- Missing visuals may use clearly labeled branded abstract artwork, never fake product screenshots.
- Unfinished projects must be labeled and receive no live or case-study action unless verified.

## Scope exclusions

No authentication, database, CMS, admin dashboard, chatbot, blog, paid service, heavy animation framework, or custom contact backend in version one.

## Autonomy

Agents may inspect, plan, edit, test, commit completed tasks, push feature branches, and open PRs. They may not deploy, merge, push to a protected production branch, change visibility, buy or enable paid services, or resolve material ambiguity by assumption.

The owner initializes Git in the portfolio project itself. Agents must not initialize Git or create/configure a remote without explicit authorization. Verify existing repository and remote boundaries before Git mutations.

No agent action may trigger an automatic production or preview deployment. Before pushing branches or opening PRs, verify that the action cannot trigger deployment; if this cannot be established, keep work local and record the blocker. Never connect hosting, enable deployment hooks, or invoke deployment commands.

Phase approval authorizes work only within the recorded scope. Stop at each phase gate and obtain explicit approval before entering the next phase. Approval of these documents does not itself authorize running Prompt 00.

An explicitly owner-authorized `portfolio-agent-system/optional/overnight-run.md` batch may defer the Prompt 00 stop and Gates 1-7 to morning review for local draft work only. This exception is inactive until the owner approves that execution contract. Preserve all phase outputs and checks and mark them awaiting owner review; do not fabricate gate approvals. It never authorizes Prompt 09, publication, deployment, privacy exceptions, or work outside the contract. Without activation, the normal gates apply.

Before staging or committing, verify ignore rules and inspect the staged diff and paths for private inputs, secrets, and unredacted resumes. Do not stage the entire repository indiscriminately.

Every task commit requires formatting, lint, strict TypeScript, relevant tests, production build, responsive inspection, and accessibility review. If a check is irrelevant, document why.

For documentation-only work before an application exists, check paths/references, internal consistency, approval boundaries, privacy, and the complete diff. Record application checks as not applicable with reasons; do not scaffold solely to run them.
