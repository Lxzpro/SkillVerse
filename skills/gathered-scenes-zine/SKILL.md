---
name: gathered-scenes-zine
description: Read a user-provided photograph and transform it into a restrained, tactile editorial paper artwork using the Gathered Scenes visual system. Use for photo-to-zine posters, torn-paper collage, risograph or halftone reinterpretation, documentary scene preservation, poetic image distillation, sparse editorial typography, and requests to turn an ordinary scene into a paper-based illustration while either retaining or removing the original photo.
---

# Gathered Scenes Zine

Turn a photograph into an authored paper page. Preserve the scene's essential relationship, not all of its detail. Use the image-generation/editing tool for the final transformation.

Read [references/style-system.md](references/style-system.md) before writing the generation prompt. It defines both creative paths, shared visual grammar, prompt construction, and QA criteria.

## Workflow

1. Inspect the source image itself. If it has a local path, view it before editing.
2. Record a compact scene reading:
   - factual anchor: the irreplaceable subject or place;
   - relational line: who or what connects to what;
   - direction and rhythm: gaze, gesture, path, horizon, repetition, or reflection;
   - quiet field: space that can become active negative space;
   - source palette and one possible structural accent;
   - emotional residue in a short phrase.
3. Choose one path:
   - **Anchored collage**: retain selected source pixels when identity, place, material truth, or documentary relationships matter.
   - **Scene distillation**: retain no source pixels when gesture, emotion, tension, or metaphor matters more than literal identity.
4. Write one self-contained edit prompt using the recipe in the style reference. State the path explicitly and describe what to preserve, remove, translate, and avoid.
5. Edit with the image-generation tool. Include every target image through its local path when available; otherwise include the smallest sufficient number of recent conversation images.
6. Inspect the result. Check scene fidelity, hierarchy, paper material, palette restraint, negative space, boundary quality, typography, and absence of generic filter effects. Revise if a core invariant fails.
7. Return the image and a concise creative note naming the chosen path, the retained relationship, and the main transformation.

## Path selection

Honor an explicit user choice. Otherwise:

- Prefer anchored collage for architecture, landscapes, groups, travel scenes, or photographs whose recognizable place and spatial structure are central.
- Prefer scene distillation for portraits, gestures, intimate moments, or images whose emotional proposition is stronger than their documentary detail.
- When both are plausible, choose the path that preserves the user's stated priority. If none is stated, make the more conservative anchored collage.

## Non-negotiable constraints

- Do not apply a uniform vintage, watercolor, or collage filter.
- Do not reproduce every object. Reduce the scene to the minimum information that keeps its identity or proposition intact.
- Use warm off-white fibrous paper as an active field, not a decorative border.
- Keep a limited palette: paper neutral, one dominant source-derived hue, dark ink, and at most one small accent.
- Use visible paper-native boundaries: hand-torn fibers, dry ink, halftone, misregistration, stencil, or sparse line work.
- Preserve substantial breathing room. Avoid filling the canvas with equally detailed texture.
- Keep typography optional, sparse, and subordinate. Use only exact user-provided copy or a short title; never invent dense editorial text.
- Avoid glossy gradients, polished 3D depth, sticker-like clip art, scrapbook clutter, photorealistic additions, ornate frames, and fake interface chrome.
- Preserve people respectfully. Do not change identity, age, body, expression, or cultural markers unless the user asks and the selected path requires abstraction.
- Treat the source photograph only as task input. Do not upload, publish, or retain it elsewhere unless the user explicitly asks.

## Output note

Keep the handoff short. Example:

> 采用“实景锚定”路径：保留桥上人群与水面倒影的横向关系，将冬林压缩为蓝灰套印和大面积纸白，让行进节奏成为整页结构。
