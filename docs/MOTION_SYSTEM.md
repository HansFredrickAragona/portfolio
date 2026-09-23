# Motion system

Owner requested GSAP scrolling explicitly; latest implementation is a progressive enhancement of server-rendered content.

- `src/components/motion/ScrollMotion.tsx` mounts as a null client controller inside the server home route. Selectors are scoped to `data-portfolio-home`; `data-motion-section` groups own their `data-reveal` descendants.
- ScrollTrigger starts at top 88%, once. Reveal: opacity + 24px vertical transform, 0.65s power2.out, total stagger capped at 0.4s. About story/personal/skills groups are independent. No pin, scrub, scroll hijacking, custom scroller, or cursor following.
- GSAP matchMedia enables reveals only for no-preference; changing reduced-motion restores original styles and kills this controller's triggers. No CSS hides content by default; SSR remains readable if JS/GSAP fails.
- Keyboard focus completes affected ancestor groups immediately. Restored/passed sections are not hidden on initialization.
- Native details toggles and image load events coalesce ScrollTrigger refresh into one animation frame. Cleanup removes listeners, cancels pending frames, and reverts scoped animations. Failures during setup/play/refresh restore captured styles.
- Hero symbol and social floats run only on desktop (1024px+) without reduced motion, 4–7px offsets. They pause when hidden; social link motion also pauses during keyboard focus. Mobile symbol row is static. Entrance comes from the enclosing section, avoiding competing tweens.
- About decorative float component is static and is not mounted in the revised photo/text composition to keep reading areas clear.
- Only transforms/opacity animate. No continuous blur, layout-property animation or per-icon ScrollTrigger. Imported GSAP stays within isolated client components; meaningful content stays HTML.

References: [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/).

Validation: see docs/QA_REDESIGN.md. Real browser reduced-motion emulation and CPU throttling are not exposed by the current browser tool; distinguish unit/source checks from browser checks.

Skills now use native details/summary, initially collapsed. Progressive block-size/opacity transition is 300ms; reduced-motion disables it. Native control stays functional without JavaScript and in browsers without size interpolation (instant fallback). ScrollMotion refreshes on block-size transitionend as well as toggle, avoiding stale section positions after the animation.
