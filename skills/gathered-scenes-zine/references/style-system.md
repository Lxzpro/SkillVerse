# Gathered Scenes visual system

## Contents

- Core proposition
- Shared visual grammar
- Path A: anchored collage
- Path B: scene distillation
- Typography and format
- Prompt recipe
- Quality checklist
- Calibrated examples

## Core proposition

Treat the photograph as evidence, not a template. First extract its subject, relationship, direction, weight, quiet areas, and emotional residue. Then bind only the necessary evidence into a new editorial paper page.

The result should feel authored, flat, tactile, quiet, and specific to the source. It should not look like a filter preset or a generic scrapbook.

## Shared visual grammar

### Material

- Start with warm ivory, oatmeal, or lightly aged uncoated paper.
- Show subtle fibers, tooth, ink absorption, and restrained grain.
- Use irregular hand-torn edges where image fields meet paper.
- Add dry-brush loss, coarse halftone, stencil gaps, or slight print misregistration selectively.
- Keep material cues physically plausible; avoid evenly distributed digital noise.

### Composition

- Establish one dominant subject or relationship and one secondary echo.
- Use large negative-space fields as compositional weight.
- Let a source-derived line cross boundaries: a roofline, branch, bridge, hand gesture, reflection, shoreline, or path.
- Favor asymmetric editorial balance over centered decoration.
- Allow one photographic or illustrated cluster to occupy roughly one-third to two-thirds of the page; do not fill every corner.

### Color

- Use a restrained palette of three or four functional colors.
- Keep warm paper as the base.
- Derive one dominant hue from the source, often muted indigo, cyan-blue, blue-gray, charcoal, or stone gray.
- Use dark ink for hierarchy.
- Reserve one high-chroma accent such as cobalt, vermilion, or mustard for a directional mark or distant reply; keep it small.
- Avoid rainbow palettes, cinematic teal-orange grading, and smooth digital gradients.

### Image language

- Combine only a few of: truthful photo fragment, contour drawing, monochrome screen print, blocky cut paper, dry ink silhouette, translucent wash, or coarse halftone.
- Change rendering mode at meaningful boundaries instead of decorating randomly.
- Simplify repeated detail into rhythm. Dense buildings may become blue linework; a forest may become sparse ink silhouettes; snow may become untouched paper.
- Prefer flat printed depth over convincing spatial realism.

## Path A: anchored collage

Use this path when the source's place, identity, material, or spatial relationship is irreplaceable.

### Preserve

- Keep one truthful photographic anchor at recognizable fidelity.
- Keep the key geometry or relationship: tower against city, people crossing a bridge, figure against shoreline, window against incoming light.
- Preserve enough source color or texture to make the retained fragment feel evidentiary.

### Translate

- Convert surrounding density into a monochrome printed field, contour mesh, halftone, or sparse drawn extension.
- Let torn-paper boundaries cut through nonessential areas, never through the key relationship without purpose.
- Extend selected contours beyond the photographic fragment into the paper field.
- Use the dominant source hue as a structural printing color.

### Failure modes

- A rectangular photo simply pasted on textured paper.
- The entire source kept intact with a vintage filter.
- Decorative torn edges that do not reorganize the scene.
- Too many collage fragments competing for attention.

## Path B: scene distillation

Use this path when gesture, emotion, tension, or metaphor matters more than literal identity. No source pixels remain in the final artwork.

### Extract

- State the semantic nucleus in one sentence.
- Name the tension as a pair: near/far, warmth/cold, response/silence, weight/lightness, arrival/departure.
- Find one visual metaphor derived from the actual scene: a hand becoming a yellow path, snow becoming open paper, a gaze becoming a directional strip.

### Rebuild

- Reduce people and objects into torn-paper blocks, dry-ink silhouettes, or minimal printed marks.
- Keep posture, gesture, spacing, and direction more faithfully than facial detail.
- Use empty paper to carry atmosphere.
- Add a single remote echo or accent when it strengthens the relationship.

### Failure modes

- Tracing the whole photo as an illustration.
- Removing so much that the core proposition disappears.
- Replacing source-specific meaning with generic surreal symbolism.
- Making the metaphor louder than the human moment.

## Typography and format

- Preserve the source aspect ratio unless the user requests a poster format.
- For a new poster, favor portrait 4:5 or 2:3 for intimate scenes and landscape 16:10 or 3:2 for wide spatial relationships.
- Use one short title only: ideally 2–6 Chinese characters or 2–5 English words.
- Set type small with generous tracking. Favor restrained serif, typewriter, or Song-style editorial lettering.
- Place type in a quiet field, aligned to an existing edge or directional line.
- Treat exact spelling as a QA item. If text renders incorrectly, retry with less copy or omit optional type.

## Prompt recipe

Build the edit prompt in this order:

1. **Task and path**: say this is a transformation of the supplied photo and name anchored collage or scene distillation.
2. **Scene reading**: identify the factual anchor, key relationship, direction, and emotional residue.
3. **Preserve/remove**: list what must remain recognizable and what can disappear. For distillation, explicitly say that no original photo pixels remain.
4. **Composition**: describe dominant cluster, negative-space field, eye path, boundary behavior, and output aspect ratio.
5. **Material**: specify warm fibrous paper plus two or three relevant print or collage techniques.
6. **Palette**: specify paper neutral, dominant hue, ink color, and optional small accent.
7. **Typography**: provide exact short copy and placement, or request no text.
8. **Exclusions**: state the most relevant failure modes from this guide.

Example skeleton:

```text
Transform the supplied photograph using the Gathered Scenes system, anchored-collage path. Preserve [anchor] and the relationship between [A] and [B]. Remove or compress [nonessential detail]. Build an asymmetric editorial page with [cluster placement], [active negative space], and [source-derived line] crossing a hand-torn boundary. Use warm ivory fibrous paper, [dry ink / coarse blue halftone / sparse contour], and slight analog misregistration. Limit the palette to [paper], [dominant hue], [dark ink], plus a very small [accent]. Add only the exact title “[title]” at [placement], or no text. Keep it flat, restrained, tactile, and source-specific. Avoid a pasted rectangular photo, uniform vintage filtering, scrapbook clutter, glossy gradients, photorealistic additions, and dense typography. Preserve the requested aspect ratio.
```

## Quality checklist

Accept the result only when most answers are yes and all starred items are yes:

- **Source-specificity***: Could this page only have come from this source photograph?
- **Core relationship***: Is the selected relationship immediately legible?
- **Path integrity***: Does anchored collage retain a truthful fragment, or does distillation remove all source pixels?
- **Hierarchy***: Is there one dominant read and a quieter secondary echo?
- **Negative space**: Does empty paper actively shape the page?
- **Material**: Do torn fibers and print textures feel localized and plausible?
- **Palette**: Is color restrained and structurally useful?
- **Boundary**: Do transitions between photo, print, drawing, and paper carry meaning?
- **Typography**: Is copy exact, short, and subordinate?
- **Restraint**: Are generic decorative effects absent?

## Calibrated examples

### Where Stone Meets Sky — anchored collage

- Preserve the stone church tower as a full-color factual anchor.
- Compress the dense city into a single blue contour and halftone field.
- Let the sky become pale printed blue and open paper.
- Use a torn diagonal band to separate and reconnect foreground roof, city, and sky.
- Keep the title small in the upper-right quiet field.

### Winter Crossing — anchored collage

- Preserve the bridge, horizontal rhythm of people, and reflection.
- Tear the photographic scene into an irregular central island.
- Translate the winter forest and water outward as pale blue-gray ink drawing and wash.
- Use the paper field to quiet the original photographic density.
- Place a small italic title near the lower-right edge of the illustrated wash.

### Time Waves Back — scene distillation

- Remove the photograph entirely.
- Preserve the seated person's raised-arm gesture and the distant figure.
- Render the person as a charcoal dry-ink silhouette and the distant form as a small gray stamp.
- Turn the hand and unfinished exchange into a mustard-yellow path across broad empty paper.
- Retain only a sparse branch arc and a small typewriter-style title.

### Snow Falls Lightly — scene distillation

- Remove the photograph entirely.
- Preserve the seated posture and winter-clothing color relationships.
- Rebuild the figure from loose navy, pale blue, and lilac torn-paper blocks.
- Use untouched ivory paper as snow and a pale blue strip as environmental direction.
- Add one tiny vermilion paper mark as a distant visual reply.
