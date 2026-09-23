# Visual QA checklist — Prompt 05

Status: written checklist for morning review. Automated browser screenshots are pending Playwright install/browser download in Prompt 08; rows below mark what can be verified from markup/tests versus what still needs a human viewport pass. Do not treat build success as visual pass.

Legend: **Pass (code/test)** = verified by unit test, static analysis, or build. **Pending browser** = requires real viewport inspection.

## Viewports

| Width | Focus | Expected | Status |
|---|---|---|---|
| 320px | Full page | Single column; no horizontal overflow; CTAs full-width comfortable; nav menu works | Pending browser |
| 375–430px (common phone) | Full page | Same stack; type comfortable; project index above preview | Pending browser |
| 768px (tablet) | Project section | Two-column index/preview begins; nav may still collapse | Pending browser |
| 1024px+ (desktop) | Hero + sections | Asymmetric hero 7/5; desktop nav row; career grid 4 columns | Pending browser |

## Sections (order matches PRODUCT.md)

| Section | Expected | Observed / evidence | Status |
|---|---|---|---|
| Hero | No eyebrow; headline, intro ≤~40ch, View projects + Let's talk, portrait 4:5 with alt | Markup in `HeroProfile.tsx`; portrait uses next/image priority | Pass (code) / Pending browser |
| Profile + Career Growth | Prose + education honors; Year 1–4 blocks; legend; no heatmap intensity | Models + unit privacy tests; equal-weight swatches | Pass (code/test) / Pending browser |
| Selected work | Index controls one preview; Expand details toggle; overlay fields; actions filtered | `ProjectShowcase.test.tsx` 4 tests | Pass (test) / Pending browser |
| Experience | Timeline list with dates and bullets from resume | Content model tests | Pass (code/test) / Pending browser |
| Capabilities | Skill groups + technology chips; no percentage bars | Content model tests | Pass (code/test) / Pending browser |
| Leadership + Recognition | Separate leadership; recognition beside it | Content model tests | Pass (code/test) / Pending browser |
| Contact | Labeled fields, Continue to email, copy fallbacks, live region, no storage | `ContactComposer.test.tsx` | Pass (test) / Pending browser |
| Footer | Year, email, LinkedIn, GitHub | Existing Footer component | Pass (code) / Pending browser |

## Interactions

| Interaction | Expected | Status |
|---|---|---|
| Theme toggle | Switches light/dark tokens; no FOUC script issues | Pass (code) / Pending browser |
| Expand details | aria-expanded, focus moves to details heading, Close restores | Pass (test) / Pending browser |
| Project switch | Collapses open details; aria-current updates | Pass (test) / Pending browser |
| Keyboard | All controls reachable; focus ring visible; no hover-only essential UI | Pass (code) / Pending browser |
| Reduced motion | CSS durations collapsed under prefers-reduced-motion | Pass (code) / Pending browser |
| Mobile menu | Esc closes; anchors work | Pass (code) / Pending browser |

## Known issues / deferred

- Case-study links hidden until Prompt 06 routes exist (`implementedCaseStudySlugs` empty).
- Playwright visual screenshots not yet captured — install browsers in Prompt 08 and fill Observed columns with real results.
- No resume download (by design).
- Facebook omitted (gap).
