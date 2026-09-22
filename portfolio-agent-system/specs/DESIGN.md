# Design Specification

Status: direction approved; exact tokens require implementation validation.

Direction approval does not authorize implementation. Exact tokens, grid semantics, project interaction states, and responsive behavior must be documented and approved at Gate 2.

## Impression

Warm, human, professional, calm, and modern. The site should resemble a polished company application with editorial emphasis and minimal-resume clarity. It must not resemble a dashboard, generic developer template, or agency sales funnel.

## Hero

Use an asymmetric editorial portrait composition. Do not use eyebrow text. Include only a strong headline, brief supporting introduction, primary project action, and secondary contact action. The portrait is prominent and responsive, never distorted. Mobile may stack portrait and copy while preserving editorial tension.

## Typography

Use a clean modern sans-serif for interface and body text, with an optional professional serif accent for selected display text. Avoid novelty fonts. Typography and whitespace carry hierarchy; do not put every section in a card.

## Color

Foundation: deep green, warm beige/cream, muted blue, and legible neutrals. Support intentional light and dark themes. Choose exact tokens only after WCAG AA contrast testing. Do not simply invert colors for dark mode.

## Surfaces

Use subtle glassmorphism only where layering is useful, such as navigation or one overlay. No nested glass, glowing borders, giant blurred blobs, or glass on every section. Prefer transparent editorial sections, dividers, and spacing.

## Motion

Use short CSS opacity, color, underline, and small transform transitions. Project details fade over the active image after explicit interaction. Respect `prefers-reduced-motion`. No parallax, scroll hijacking, cursor follower, looping animation, or animation library unless later justified and approved.

## Responsive rules

- Fully usable at 320px.
- Touch targets approximately 44px where practical.
- Essential actions never require hover.
- Active project preview becomes a tap-controlled disclosure on mobile.
- Heavy live embeds are not used. Approved screenshots are the initial preview.
- Desktop expands composition intentionally with readable line lengths.

## Prohibited patterns

Badge clouds, excessive pills, repeated cards, gratuitous gradients, fake terminals, skill percentage bars, auto-playing previews, decorative metrics, invented contribution counts, and dense icon walls.
