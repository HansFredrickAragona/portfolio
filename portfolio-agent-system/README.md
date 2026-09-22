# Portfolio Agent System

This package is the execution system for Hans Fredrick's portfolio. It is designed for Codex and OpenCode, including sessions where the owner is away.

Delivery target: three consecutive project days from the owner-authorized kickoff, ending with a verified release candidate and manual deployment handoff. The owner initializes Git and performs deployment. Agent definitions, the day-by-day plan, unattended execution limits, and morning handoff requirements are in `portfolio-agent-system/rules/AGENT-OPERATIONS.md`. Overnight work remains within approved phase boundaries; these documents do not start an unattended session.

The six logical roles are Orchestrator, Design, Content, Programmer, QA, and Progress & Handoff. The Programmer builds and fixes the approved application; Progress & Handoff maintains evidence-backed progress records for orchestrator review. Roles share available execution slots and have explicit file ownership.

Delegation is limited to one layer: only the root orchestrator creates subagents; subagents never create further subagents. At most four agents run concurrently including the root, or fewer if required by the runtime. Additional tasks are queued, not recursively delegated.

Low-usage continuation: prepare an OpenCode handoff at 25% remaining Codex allowance and transfer at 15% when a configured owner-approved model and launch permissions are verified. OpenCode replaces the active root; it does not run as a nested orchestrator. See `portfolio-agent-system/optional/opencode-handoff.md`. This policy is not a running background monitor and does not bypass approval gates.

## Start here

For a local overnight draft spanning Prompts 00-08, review `portfolio-agent-system/optional/overnight-run.md` and obtain explicit owner execution authorization. Merely preparing that contract does not activate it. Once activated, its bounded gate-deferral rule applies instead of stopping after each phase; all other restrictions and checks remain.

1. Place this folder in the portfolio project root. The owner initializes Git in that project directory and controls remote setup and repository visibility. Agents must not run `git init`.
2. Add private source materials to `project-input/`; never commit that directory.
3. Run `portfolio-agent-system/prompts/00-bootstrap-orchestrator.md` only after explicit owner approval to execute it.
4. Run major prompts in numeric order. Stop at every approval gate.
5. Use prompts under `optional/` only for the named situation.

## Sources of truth

All paths are relative to the portfolio repository root. Package documents live under `portfolio-agent-system/`; generated `AGENTS.md`, `memory/`, `docs/`, and private `project-input/` live at the root. References to `rules/`, `specs/`, `prompts/`, and `optional/` are shorthand for their directories inside `portfolio-agent-system/`.

Read in this order at the start of every session:

1. `AGENTS.md` in the repository root, once generated
2. `portfolio-agent-system/rules/CONSTITUTION.md`
3. `portfolio-agent-system/rules/AGENT-OPERATIONS.md`
4. All files under `portfolio-agent-system/specs/`
5. `memory/APPROVALS.md` and `memory/DECISIONS.md`
6. `memory/CURRENT_STATE.md`, `memory/HANDOFF.md`, and `memory/TASKS.md`
7. `memory/BLOCKERS.md` and `memory/CONTENT_GAPS.md`
8. `memory/OPENWOLF.md`, then actual Git status, branch, HEAD, and recent history

If `memory/OPENCODE_HANDOFF.md` exists, read it before edits and reconcile current writer ownership. A pending or uncertain transfer blocks concurrent writes until resolved.

Missing records are missing information, not implicit approval. If Git is not initialized, record that fact and leave initialization to the owner.

If documents conflict, the constitution wins. A newer owner-approved decision record may supersede a specification only when the affected specification is updated in the same task.

## Major phases

| Prompt | Output | Approval required |
|---|---|---|
| 00 | Agent contract and memory recovery | No code |
| 01 | Evidence inventory, content gaps, project plan | Gate 1 |
| 02 | Approved design system and responsive behavior | Gate 2 |
| 03 | Architecture and clean scaffold | Gate 3 |
| 04 | Content model and verified copy | Gate 4 |
| 05 | Home page and interactions | Gate 5 |
| 06 | Case studies and project routes | Gate 6 |
| 07 | Contact, metadata, analytics decision | Gate 7 |
| 08 | Full QA and release candidate | Gate 8 |
| 09 | Private release preparation; never deploy | Owner deploys |

## Hard boundary

Agents may plan, implement, test, commit one completed task at a time, push feature branches, and open review pull requests. Agents may not deploy, merge, change repository visibility, enable paid services, or publish private information.
