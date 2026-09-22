# Optional — Low-Usage OpenCode Handoff

Use only for continuation of already owner-authorized work. Do not execute Prompt 00 or cross a pending approval gate merely because a runtime changes.

## Readiness and local verification

Verify early in an authorized session, while there is ample remaining capacity:

- Installed executable, version, and local command help; never invent flags.
- Owner-approved configured provider/model, authentication readiness, available quota, and cost constraints. Never print credentials or full configuration containing secrets.
- Repository directory, supported instruction loading, effective permissions, and applicable privacy exclusions. Do not use permissive auto-approval flags or expose a server/share link.
- A supported recovery check showing that the successor reads the project rules and handoff correctly. Clearly distinguish help-command verification, launch verification, and successful recovery.

Observed on 2026-09-22: `C:\Users\Hans\AppData\Roaming\npm\opencode.cmd` exists; version `1.18.31`. It was absent from this session's PATH. The sandbox denied executing its launcher; version/help inspection succeeded with explicit escalation. This does not establish permission to launch future model runs unattended.

Local `--help` and `run --help` verified `run`, `--dir`, `--model`, `--file`, `--format json`, `--pure`, and `--title`.

Owner selected OpenCode's free Nemotron and MiMo V2 families on 2026-09-22. Resolved against the installed catalog:

- Primary: `opencode/nemotron-3-ultra-free` (Nemotron 3 Ultra Free).
- Fallback: `opencode/mimo-v2.6-flash-free` (MiMo-V2.6-Flash Free).

`models opencode --verbose` listed both active with zero input/output/cache cost. Both completed a `run --pure --dir .../tmp/opencode-preflight --model <ID> --format json` connection check, returned `READY`, exited successfully, and reported cost 0. The prompt prohibited tool use and file inspection/modification; no project files were attached and no portfolio work was requested. These checks verify current basic model access only, not sustained free capacity, project recovery, write permissions, background-process survival, or unattended launch authorization. Recheck availability and zero-cost status before transfer; never silently select a paid variant.

Try the primary first. If it is unavailable or rate-limited, stop/confirm termination of that session before trying the named free fallback once. If both fail, preserve the handoff and stop. Never overlap writers or endlessly alternate models. Nemotron's catalog entry is text-only, so provide text evidence and existing QA results; it must not claim to have visually inspected images or PDFs. MiMo lists image/PDF support, but a visual inspection still requires an actual supported tool result.

## Prepare the handoff

The Progress & Handoff specialist prepares records and the root orchestrator verifies them. If capacity is already low, the root writes the checkpoint directly rather than spawning more agents. Save at root `memory/OPENCODE_HANDOFF.md` during the authorized run, with:

1. Timestamp, handoff ID, source runtime, status (prepared/launching/accepted/blocked), and current writer owner.
2. Absolute project directory, current phase, owner-approved scope and approval references, three-day kickoff/deadline, and next gate.
3. Git initialization status, branch/HEAD when available, dirty/staged/untracked paths, and unfinished changes. Preserve incomplete work without claiming it is a completed task commit.
4. Completed tasks, current task, next bounded action, owned files, acceptance criteria, and dependencies.
5. Check commands/results and the revision or working state they cover, unrun checks, failures, and reproducible blockers.
6. Content evidence references and gaps, without embedding raw private materials or secrets.
7. Agent stop status, background processes relevant to the task, and confirmation that no prior agent will continue writing.
8. Executable/version, selected provider/model, verified launch method, and readiness or permission blockers.
9. Mandatory startup order, one-layer/four-total delegation limit, approval gates, and no-deployment/no-paid-service restrictions.

Also reconcile `CURRENT_STATE.md`, `TASKS.md`, `HANDOFF.md`, `BLOCKERS.md`, and approval/decision records under their assigned ownership. Store launch/acknowledgment details in `OPENCODE_HANDOFF.md`; never copy account IDs, credentials, or raw private inputs.

## Transfer ownership and launch

Stop assigning new work and collect or interrupt all current specialists. Wait for writes to cease. Reconcile the actual workspace. Only commit completed tasks that meet checks; preserve other changes with an accurate handoff. Check for an existing successor session before launching once.

Use a command built from the verified local help. This PowerShell example uses the selected primary model; it remains a transfer template until a real authorized handoff and the required permissions are ready:

```powershell
$handoffModel = 'opencode/nemotron-3-ultra-free'
& 'C:\Users\Hans\AppData\Roaming\npm\opencode.cmd' run --pure --dir 'C:\Users\Hans\Downloads\Personal\CODE\portfolio' --model $handoffModel --format json --title 'Portfolio continuation' 'Read portfolio-agent-system/optional/opencode-handoff.md and memory/OPENCODE_HANDOFF.md. Restore state using the README startup order. Confirm the recorded writer transfer, approval scope, Git state, and next authorized task. Record acceptance of the handoff, then continue only that approved scope. Follow the active approval policy, including an explicitly activated overnight batch if recorded. Never deploy, enable paid services, or create nested subagents.'
```

Obtain any required execution permission through the host's normal approval mechanism; do not route around a denied launch. For a background launch, use the supported host process mechanism, hidden on Windows, with local logs and a recorded process/session identifier. Do not assume the process survives the source session without verification.

The new root must reconcile instructions and files before accepting ownership and editing. Verify acknowledgment and process/session state; spawning a process alone is not proof of continuation. If startup fails, record the failure and preserve the checkpoint. If ownership is uncertain, neither runtime resumes edits until reconciled. Codex stops project work after a successful transfer.
