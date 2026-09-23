# Temporary image provenance

Owner explicitly requested AI versions of himself as temporary photos. Built-in image_gen was used; no CLI or paid API fallback. Both generated results were visually inspected. Original reference: approved local public/images/portrait.jpg. Originals remain in the generator output directory; site copies are optimized with the existing sharp package (900px wide, WebP quality 82, metadata stripped).

## Workspace portrait

Asset: `public/images/about-hans-ai-temp.webp` (63,384 bytes).

Final prompt:

> Use case: identity-preserve. Reference image is Hans, the user who requests AI versions of himself as temporary portfolio photos. Generate one photorealistic editorial lifestyle photograph of the same person, preserving recognizable face, haircut, skin tone and age. Waist-up seated at a minimal desk with an open unbranded laptop, wearing a simple deep green casual shirt, relaxed natural expression toward camera. Warm cream studio/workspace, soft natural window light, restrained composition, portrait 4:5 suitable for an About Me column. This is a temporary illustrative portrait, not evidence of a workplace or accomplishment. No other people, no logos, no text, no watermarks, no fabricated awards.

## Outdoor portrait

Asset: `public/images/about-hans-outdoors-ai-temp.webp` (64,414 bytes).

Final prompt:

> Use case identity-preserve. User requests temporary AI versions of himself for personal portfolio. Keep the reference man's exact recognizable facial features, haircut, age and skin tone. Create a natural editorial photograph of him in a simple cream linen overshirt over white t-shirt, waist up, standing outside among softly blurred green foliage, looking slightly to the side with a relaxed smile. Soft overcast light, quiet candid atmosphere, subtle film texture, portrait 4:5. No text, logos, other people, awards, watermarks or implied professional accomplishments. This is an illustrative placeholder photo.

## Usage and replacement

Both are visibly labeled Temporary AI portrait and their alt text states generated/temporary. They depict hypothetical lifestyle scenes, not documented employment/events. Replace through `src/models/about-photos.ts` when the owner supplies real photos. Hero and third About photo use the unchanged original portrait.webp.

Two background-extraction attempts produced opaque checkerboard images (hasAlpha=false); they are excluded from the project and never used. The Hero uses an arched CSS crop of the real photograph instead.
