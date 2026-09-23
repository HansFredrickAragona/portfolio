# Redesign QA — 2026-09-23

Base commit: 2ba2f4e on feat/overnight-portfolio. Checks apply to the current uncommitted redesign, not the stale overnight build.

- Desktop browser inspected at 1280px: Hero, About, loaded portraits, preserved light/dark palette, section reveal visibility, no horizontal overflow.
- 320px browser: readable stacked Hero/About, static mobile icons, no horizontal overflow, mobile menu and anchor navigation, project details expands and aria-controls resolves to the panel.
- 768px browser: no horizontal overflow; identified cramped desktop navigation and moved navigation breakpoint to 1024px.
- Existing live preview is http://localhost:3000. Port 3111 was the prior production server and is not the reviewed development preview.
- Unit checks cover reduced-motion path, animation failure restoration, focus reveal, batched refresh and cleanup. Mobile computed transforms are none. Full browser reduced-motion preference switching and CPU/network throttling were not available through the current browser interface and are not claimed.
- Real portrait retained. Both About AI images loaded and their temporary labels are visible. No generated cutout is used because alpha verification failed.
- Relevant suite: 31 tests passed on the integrated motion/layout state. Final rerun results recorded in memory/CURRENT_STATE.md.
- Lint and production build passed; final format/typecheck/build confirmation recorded in memory/CURRENT_STATE.md.
- No deploy or push in this revision. Owner-provided real About photos remain pending.

Final production build verified at http://127.0.0.1:3112 with no browser console errors. Final format/lint/typecheck/build and 31 tests pass. Keyboard Enter expanded native skills disclosure. Development server remains port 3000. Local-only checkpoint; no push/deploy.

## Spacing/content follow-up

Owner requested removal of eyebrows, skill descriptions and Career Growth, plus wider layout and larger type. These are implemented. Skills display nine always-visible category rows, and Skills navigation now targets that list. Duplicate How I work and repeated About prose removed. Desktop and 375px checks show no horizontal overflow; skill text computes to 16px. Format/typecheck/31 tests/build passed; lint clean after unused-import cleanup. Production preview restarted on 3112. No deployment.
