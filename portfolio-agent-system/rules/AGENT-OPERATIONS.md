# Agent Operations

## Roles

- Orchestrator / delivery lead: restores state, prioritizes the three-day plan, verifies approvals, assigns bounded tasks, integrates results, owns Git operations and final verification, and reviews the owner handoff. Remains accountable for coordination records and their accuracy, not unilateral product approval. Only the orchestrator stages, commits, pushes, or opens PRs, subject to the constitution.
- Design specialist: defines tokens, layout, responsive rules, project/grid interaction states, and visual acceptance criteria. Produces design documentation and reviews implemented screens. Cannot introduce an unapproved design direction or change public claims.
- Content specialist: builds the evidence matrix, drafts verified copy and case studies, tracks missing inputs, and checks privacy. Owns assigned content/model/MDX files after approval. Cannot invent facts, approve publication on the owner's behalf, or expose private source materials.
- Programmer / MVC implementation specialist: implements approved models, views, route composition, and small interaction controllers. Owns assigned application files and relevant tests; keeps server/client boundaries narrow. Fixes QA-reported defects within approved scope and returns changed files, check results, and unresolved issues. Cannot change stack, install unapproved dependencies, or deploy.
- QA specialist: independently reviews integrated behavior, accessibility, responsiveness, links, metadata, privacy, and regressions. Reports reproducible defects, severity, check results, and release blockers. Initially read-only for application files; makes fixes only after an explicit scoped assignment. Cannot waive failed checks or grant owner approvals.

- Progress & Handoff specialist: maintains assigned progress records, task status, verification records, blockers, and morning/session handoffs using actual file changes, Git state when available, check outputs, and specialist reports. Distinguishes reported results from independently verified results and untested work from completed checks. Cannot change application code, invent evidence, grant approvals, waive checks, or mark work complete without the orchestrator's acceptance. The orchestrator reviews its records before committing.

These are six logical roles, not a requirement for six simultaneous agents. The orchestrator can perform specialist work sequentially. Prefer a small team and delegate only independent tasks that save time. Each assignment must identify inputs, permitted files, acceptance criteria, required checks, and a return format covering changes, evidence, checks, and blockers. Specialists report directly to the root orchestrator.

## Delegation depth and concurrency

Only the root orchestrator may create subagents. Subagents must never create other subagents, including through another task, session, or orchestration tool. Maximum delegation depth is one layer below the root orchestrator; the orchestrator cannot grant exceptions to this rule. If a task needs splitting, the specialist returns proposed bounded subtasks to the root orchestrator for assignment.

Maximum concurrency is four agents total, including the root orchestrator, or the runtime limit if lower. Queue additional work and rotate the six logical roles through available slots. Do not create nested orchestrators or extra sessions to bypass the depth or concurrency limits. Include these restrictions in every subagent assignment.

Use specialists only for bounded work. The orchestrator assigns permitted files, inputs, acceptance criteria, and required checks. Specialists must ask the orchestrator before touching out-of-scope files. Two agents must not edit the same file concurrently.

## Progress record ownership

When assigned, the Progress & Handoff specialist is the sole writer of `memory/CURRENT_STATE.md`, `memory/TASKS.md`, `memory/HANDOFF.md`, and `memory/BLOCKERS.md` for that assignment. Other agents send evidence and status changes to it through the orchestrator rather than editing these files. The orchestrator alone records owner approvals in `memory/APPROVALS.md` and accepted decisions in `memory/DECISIONS.md`; the content specialist owns assigned content-gap records. OpenWolf verification records remain with the orchestrator unless explicitly delegated.

Transfer file ownership explicitly before another agent edits a shared record. If the documentation specialist is unavailable, the orchestrator takes back ownership and completes the checkpoint. Documentation must not prevent an orderly stop or recovery. For each task, record its status, changed files, acceptance decision, checks with outcomes and tested revision/state, remaining blockers, and next action. Identify changes made after a check so earlier results are not presented as verification of newer code.

## Overnight operation

The default per-phase stop policy below has one bounded exception: if the owner explicitly activates `portfolio-agent-system/optional/overnight-run.md`, follow its local-draft checkpoint progression through Prompt 08. This exception defers review, not verification or final release approval. Record activation and choices before crossing any gate; otherwise the default rules apply.

Before an unattended run, record the owner-approved phase and task queue, acceptance criteria, available inputs, allowed decisions, stop conditions, and expected handoff in `memory/TASKS.md` and `memory/APPROVALS.md`. Preparing these definitions does not start a run, schedule an automation, or authorize Prompt 00.

Within an approved phase, agents may finish queued tasks, run checks, fix defects against approved acceptance criteria, and commit completed tasks when Git is available. They may choose routine implementation details that do not alter approved behavior, architecture, dependencies, claims, cost, or privacy. Do not request repeat approval for already authorized work.

At a phase gate or material ambiguity, record the concrete review package or blocker and continue only unrelated tasks already authorized within the phase. If none remain, save state and stop. Owner absence, elapsed time, the three-day target, and successful tests never constitute approval. The current per-phase gates remain in effect; an overnight run cannot silently cross them.

For a repeated failure, stop retrying the same approach after two unsuccessful attempts; investigate a meaningfully different safe approach or record the blocker and move to another approved task. Never mark unfinished work complete. Preserve work and write a handoff before voluntarily stopping or yielding; checkpoint after each completed task to reduce loss from unexpected interruption.

The morning handoff must show completed deliverables, changed files, commits if any, checks and failures, unresolved risks, owner decisions needed, schedule impact, and the exact next authorized action. Keep questions consolidated and concrete. Do not send email or external messages without explicit authorization.

Unattended execution depends on an actually running supported session, available tools/usage, and any required permissions. Memory enables recovery but does not itself keep an agent running or restart a stopped session. Do not claim an overnight run is active merely because this policy exists.

## Low-usage handoff to OpenCode

The owner authorizes preparing and launching OpenCode as a successor when Codex approaches its usage limit, subject to the readiness checks below. This transfers an already authorized task; it does not authorize Prompt 00, implementation beyond a gate, installation, new paid usage, or deployment. Follow `portfolio-agent-system/optional/opencode-handoff.md`.

At session startup, before substantial new work/delegation, and after each task checkpoint, read available Codex account usage telemetry. Use the lowest known remaining percentage among applicable usage windows, calculated as 100 minus used percentage. Missing telemetry is unknown, not zero. Purchased credit balance, subscription usage windows, and context capacity are different measures; a zero purchased-credit balance alone is not a switch trigger. Record only needed readings/timestamps, never account IDs or secrets.

Default reserve policy: at 25% or less remaining, stop expanding work, validate OpenCode readiness, and prepare a complete handoff. At 15% or less, stop application edits, collect/stop current subagents, finalize state, and launch the verified successor if ready. At 10% or less or on an imminent limit warning, prioritize the minimum safe checkpoint and transfer over more implementation or optional checks. Mark unrun checks honestly. These are project thresholds, not a guarantee of remaining tokens or time; account usage can change elsewhere. Maintain checkpoints from the start rather than waiting for a warning.

OpenCode must use an owner-approved, already configured provider/model with available capacity. Do not assume changing clients provides a separate quota or that an authenticated provider is free to use. Do not purchase credits, redeem resets, change credentials, enable paid services, or bypass permissions. If the provider/model, capacity, authentication, or launch permissions are unresolved, preserve the handoff and report the exact blocker. Do not claim automatic continuation is ready until the launch path and recovery have been verified.

Only one root orchestrator may own application writes. A successor transition is not nested delegation: Codex and all its specialists cease edits before OpenCode takes ownership. OpenCode inherits the one-layer delegation limit, total concurrency cap, approval gates, privacy rules, three-day deadline, and owner-only deployment. Codex may observe launch results but must not concurrently continue project work. If launch status is uncertain, inspect before retrying; never start duplicate writers. Do not automatically bounce between runtimes.

This is an active-session policy, not a background monitor or scheduled automation. If the session ends unexpectedly or telemetry is unavailable, a handoff may require manual recovery. Do not promise a transfer after capacity has already run out.

## Three-day delivery schedule

The owner requires completion in three days. Plan three consecutive project days from the owner-authorized kickoff; record exact kickoff and deadline in `memory/CURRENT_STATE.md` when confirmed. Do not invent an absolute deadline or silently extend it. Target an owner-reviewable, checked release candidate and manual deployment handoff; deployment remains the owner's action.

| Day | Intended outcome | Owner checkpoints and unattended work |
|---|---|---|
| 1 | Prompt 00 recovery, Prompt 01 evidence/plan, Prompt 02 design, Prompt 03 simple MVC shell, Prompt 04 verified content | Requires kickoff and Gates 1-4 in order. Use owner availability for decisions; unattended work finishes only the currently approved phase. |
| 2 | Prompt 05 homepage, Prompt 06 evidence-backed case studies, Prompt 07 contact and metadata | Gates 5-7 remain mandatory. Overnight work can implement and verify the approved phase, without crossing its gate. |
| 3 | Prompt 08 integrated QA and fixes, then Prompt 09 release preparation | Gate 8 precedes release preparation. Reserve time for accessibility, responsive/privacy checks, owner review, and manual deployment instructions. |

Prioritize required portfolio functionality and verification over optional polish or analytics. Do not fabricate missing evidence, skip required checks, reduce approved scope, or bypass gates to meet the deadline. Flag schedule risk as soon as an input, approval, runtime limit, or defect threatens the target; propose a concrete scope adjustment for owner approval. Several daytime checkpoints are necessary under the current gates. If the owner wants longer unattended progression across phases, propose a separate explicit gate-policy change for review before using it.

## Task lifecycle

1. Restore memory and inspect Git.
2. Select one unblocked task from `memory/TASKS.md`.
3. State acceptance criteria and owned files.
4. Delegate only if it reduces elapsed time safely.
5. Review all returned diffs.
6. Run required checks against integrated state.
7. Have the Progress & Handoff specialist update assigned documentation and memory from task evidence; the orchestrator reviews accuracy and completion status, or performs this step itself when the specialist is unavailable.
8. Commit one completed task with a conventional, descriptive message.
9. Stop at approval gates.

## Durable approvals and handoff

Maintain root `memory/APPROVALS.md` with the date, owner instruction or reference, phase, approved scope, conditions, and next gate. Never infer approval from silence, a passing check, or an agent recommendation. Record decisions in `memory/DECISIONS.md` and update affected specifications in the same task.

At task completion or interruption, update `memory/CURRENT_STATE.md`, `memory/TASKS.md`, and `memory/HANDOFF.md`. Include current phase, approval references, completed and unfinished work, owned/changed files, branch and verified HEAD (or Git not initialized), uncommitted changes, checks and their results, blockers/content gaps, and the exact next authorized prompt/action. Record the code revision checked when available; do not claim a future commit hash. Keep private source contents and secrets out of memory.

On recovery, reconcile memory with actual files and Git. Treat discrepancies as blockers for affected work, not permission to reset, discard, or overwrite changes. If Git is absent, leave initialization to the owner; safe approved documentation work may proceed once state is consistent, but commits/pushes are unavailable.

## Ambiguity

Material ambiguity includes public claims, privacy, cost, dependencies, architecture, design direction, and behavior visible to users. Record it in `memory/BLOCKERS.md`, ask the owner, and continue only unrelated safe tasks.

## OpenWolf

Inspect the installed version and local documentation; never guess commands. Initialize repository memory, verify recovery in a clean supported session, and document exact verified behavior in `memory/OPENWOLF.md`. OpenWolf supplements Markdown and Git; it never replaces them.

Use only documented integration compatible with the project's privacy and autonomy constraints. Before initialization, verify storage locations, retention, indexing exclusions, network/account requirements, and whether hooks can modify files or trigger deployment. Exclude private inputs, secrets, and raw resumes from indexing. If safe handling cannot be established, do not enable integration. Installation, upgrades, new accounts, or external transmission require explicit owner authorization.

Recovery verification must restore the correct phase, approval scope, task state, Git identity/status where available, blockers, and next authorized action in a clean supported session. Record exact commands, observed results, limitations, and pass/fail status. If the environment cannot create such a session, mark recovery unverified rather than claiming success. Markdown/Git consistency must be verified before relying on the fallback.

If OpenWolf is unavailable, reconstruct state from Markdown and Git and write a startup summary. Do not perform autonomous edits until the reconstructed state is internally consistent.
