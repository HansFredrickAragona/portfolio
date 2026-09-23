# Handoff — current portfolio redesign

Owner selected “Continue the current portfolio”; do not switch to the unavailable Figma v2 branch/export. Codex took root ownership after the previous OpenCode turn ended. No second root or running specialist remains.

Base branch/HEAD: feat/overnight-portfolio / 2ba2f4e. Current layout/motion/assets/doc changes are verified and ready for local commit. No push, PR or deployment in this revision.

Read docs/DESIGN.md, MOTION_SYSTEM.md, ASSET_PROVENANCE.md and QA_REDESIGN.md for implementation and checks. Central image swap location: src/models/about-photos.ts. Two temporary AI lifestyle photos are labeled; original Hero portrait is retained. ScrollMotion stays a narrow client controller with server-rendered content and native scrolling.

Next action: commit verified named paths only, then owner design review. Real About images remain pending. Runtime preview: http://localhost:3000. Do not present port 3111's older production build as the current version.

Final checks PASS: format, lint, typecheck, 31 tests, production build, responsive interaction inspection and privacy ignore/diff check. Updated production preview http://127.0.0.1:3112; source preview http://localhost:3000. Next action after local commit: owner reviews current design and supplies real photos when ready. No code work blocked on photos; replacement contract documented.

Spacing/content follow-up complete: wider layout, larger text, eyebrows and Career Growth removed; skills use nine category rows without descriptions. Redundant How I work omitted. Lint clean; typecheck, 31 tests, production build and format passed (post-build cleanup removed only one unused import). Browser verified desktop skill rows and 375px no horizontal overflow. Production preview restarted at http://127.0.0.1:3112. Local checkpoint follows; no push/deploy.
