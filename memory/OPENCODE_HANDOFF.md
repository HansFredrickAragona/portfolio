# URGENT OpenCode handoff — 2026-09-24

Status: PREPARED. Owner reports 3% Codex remaining and explicitly requests handoff immediately. Codex stops application writes after this checkpoint. OpenCode must explicitly accept ownership before edits. No launch or recovery acceptance is claimed. This record supersedes historical overnight handoffs.

## Repository and state
- Directory: C:/Users/Hans/Downloads/Personal/CODE/portfolio
- Branch: feat/v2
- Application HEAD: 8cebd478886b8520f98df3cc4423c304cb8005f1
- Owner authorized commit+push of all local feat/v2 work before further UI changes (“do all commit pushed before we continue the changes in ui”). Memory handoff checkpoint is being committed with this push.
- feat/v1 is the preserved old design. Do not change feat/v1 or main. No push, merge, PR, deployment authorized for these refinements.
- Stack Next.js 15.5.26, React 19, Tailwind 4, TypeScript, GSAP, oxfmt. Current code is NOT Vite.
- Deadline September 25, 2026 EOD Asia/Manila.

## Completed local commits
- f765f6c: combined V1 editorial layout with V2 glass design.
- ab61bc1: larger hero name, GitHub squares replacing experience rail, removed written GitHub/email addresses.
- d245e15: one-line full name on desktop, upper-body portrait with overlaid CTAs, removed parent section cards, hover lift and cursor glow on individual skills/project-info/experience cards.
- 8cebd47: latest request complete: Services rows fill full content width (removed max-w-4xl), title 20px mobile/24px desktop, description 16px; disclosure allowance increased.

## Owner design requirements
Preserve GitHub-inspired square graphic (decorative, not actual activity telemetry), V2 floating icons and project carousel. Hero full name exactly Hans Fredrick O. Aragona on one desktop line; show upper body and overlay CTAs on image. Roles above GitHub blocks. Keep social buttons but not written GitHub URL/email address. About uses V1 laptop AI placeholder photo, labeled honestly, V1 information without About me heading. Complete skill names + icons, no descriptions, wide two-column smooth accordions, single column mobile. Main desktop sections target one viewport, contact/footer share ~3/4 and 1/4; allow small-screen/expanded content growth. Remove large parent section cards. Individual skills/project-info/experience cards lift and have faded pointer-following glow; reduced-motion and touch guards.

## Verification
Latest application at 8cebd47: strict TypeScript and production build PASS; Services formatting PASS. V2 has no standalone lint/test scripts; do not claim tests passed. Earlier browser: actual 1440x900 hero was 900px, heading nowrap, no horizontal overflow; upper-body portrait/overlaid CTAs visible. Skills click opened; pointer glow CSS opacity activated; parent background transparent. Latest Services visual check blocked by browser ERR_BLOCKED_BY_CLIENT; NOT visually verified yet.

Production preview currently http://127.0.0.1:3114/#services, started after latest build. Codex exec session 48131 is server only, not an agent writer. Older server port3113/session68105 may still exist and should be considered stale. Browser tooling sometimes returns stale pages; fresh port previously resolved it. Viewport tool showed 1.6 scaling: requested2304x1440 gave actual1440x900; inspect actual innerWidth/innerHeight rather than assume. Never run dev and build concurrently in same .next. Old generated cache moved to ignored tmp/build-cache-before-refinement; tsconfig excludes tmp. No deletion needed.

## Next bounded action
1. Read AGENTS.md, constitution/operations, specs, memory approvals/decisions/current/handoff/tasks/blockers/content gaps/OpenWolf, then this handoff; reconcile branch/status. Do not restart overnight prompts.
2. Accept writer ownership in this file. Verify Services row width, typography, responsive fit and expansion in actual browser if tools available. Changes already implemented; fix only demonstrated defects within owner request.
3. Record exact checks; wait for further owner design feedback after verification. Do not invent new redesign tasks.
4. Existing V2 project facts/technology lists still need evidence audit against feat/v1; flag this separately, do not silently fabricate. Private project-input remains ignored. No public phone/address/raw resume.

## Runtime restrictions
Only one root writer. Codex will not continue editing after this checkpoint. No active delegated task writes known; historical scroll_motion task completed. Max four agents total; only root can create direct subagents; no nested delegation. No paid models/services or global installs. Approved successors only opencode/nemotron-3-ultra-free then opencode/mimo-v2.6-flash-free. Existing executable C:/Users/Hans/AppData/Roaming/npm/opencode.cmd; run --pure --dir <repo> --model <approved> --format json supported historically. Current model availability, free cost and existing sessions must be checked before launching; do not claim historical readiness as fresh validation. Owner may open this in their existing OpenCode session. Preserve unknown edits.
