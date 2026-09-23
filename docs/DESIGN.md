# Design — active layout record

Updated 2026-09-23 under explicit current-portfolio continuation. Supersedes earlier asymmetric Hero and symbols-only motion restrictions for this approved iteration. Palette and verified content are retained.

## Hero

Large full-name heading with solid first names and outlined surname. Centered real portrait with an arched crop, careers left and social links right on desktop. Summary and actions beneath. Existing local technology symbols surround the portrait without covering the face. On mobile the heading, portrait, static social links, careers and actions form a single column. Full accessible name is provided on the h1. The original photographic background is retained; failed AI cutouts were not used.

## About

Three desktop columns: story/education, temporary workspace portrait, achievements/leadership. Second composition: temporary outdoor portrait, Beyond work, original real portrait. Tablet uses two columns and hides the redundant third photo; mobile becomes a single narrative. AI photos are visibly labeled and have accurate alt text. No invented workplace, event or achievement is implied.

Skills remain in their nine verified categories with text names and evidence. Native details disclosures allow keyboard/touch expansion without JavaScript; first two categories initially open. Technology logo paths and skill claims are unchanged.

## Shared language

Large faint background section words, crisp foreground headings, generous whitespace, fine dividers. Project index retains explicit selection and expansion; arrows and image scale provide hover feedback. Experience rows gain restrained background emphasis. Project button aria-controls points to its actual disclosure panel.

## Motion

GSAP ScrollTrigger reveals section groups when entering the viewport. About subgroups reveal independently. Natural native scrolling, no pinning or hijacking. See MOTION_SYSTEM.md for ownership, failure recovery, reduced-motion and cleanup.

## Owner spacing and content refinement

Widen shared content to a 90rem cap with 16–24px side gutters, reduce section padding to 48–56px, remove staggered vertical offsets in About, and increase body/secondary type. Remove eyebrow labels and duplicate About summaries. Skills now render as always-visible category rows of icon/name pairs: no descriptions, numbering, disclosure or introductory copy. Evidence remains in models. Skills navigation targets these rows; redundant How I work presentation is removed. Career Growth is removed from the home route at the owner's request; historical milestone data remains in source.

## Minimal skills accordion

Latest owner direction supersedes the always-visible rows: each category is a native clickable summary, initially collapsed, with a plus/close indicator. Items show names/icons only. Labels shortened (AI & ML, GIS, Tools & deployment, Professional skills). Native details works with keyboard, touch and no JavaScript. In supporting browsers, ::details-content interpolates block-size and opacity over 300ms; older browsers use functional instant disclosure. Reduced motion disables transitions. ScrollTrigger refreshes when the size transition finishes. Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::details-content.
