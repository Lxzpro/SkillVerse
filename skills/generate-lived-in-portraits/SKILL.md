---
name: generate-lived-in-portraits
description: Analyze and calibrate portrait references, including beauty-filtered and editorial sources, then create or refine prompts for photorealistic people with natural asymmetry, physical interaction, candid expression, believable skin and hair, and everyday camera character. Use for text-to-image or image-to-image requests that ask for a real-person look, lifestyle snapshot, candid selfie, documentary portrait, reduced AI/plastic/over-retouched appearance, faithful extraction of visible non-sensitive features, or separation of useful styling cues from filters, face reshaping, screenshots, and watermarks.
---

# Generate Lived-In Portraits

Create believable people by describing a specific human moment, then adding a few context-driven irregularities. Do not make the subject ugly or pile on defects.

## Workflow

1. Inspect every available reference image before writing the prompt. If a referenced file is missing, state which image was unavailable and use only the images actually visible.
2. Separate observations into:
   - subject: visible face shape, hair, expression, clothing, posture;
   - moment: action, attention, emotion, environment;
   - capture: framing, lens feel, focus, exposure, motion, color;
   - authenticity: a small selection of plausible irregularities.
3. Classify each source before borrowing from it:
   - documentary or candid: use action, environment, camera, and material behavior;
   - curated lifestyle: use staging while restoring small physical irregularities;
   - beauty-filtered or editorial: use styling and composition selectively; reject digital face reshaping and plastic texture;
   - screenshot, collage, or repost: ignore UI, captions, borders, logos, and watermarks.
4. Avoid guessing identity, ethnicity, health, personality, or other sensitive traits. Use apparent age only when the user supplies it or it is clearly necessary and safe.
5. Read [authenticity-guidelines.md](references/authenticity-guidelines.md) when composing or critiquing a prompt. Read [reference-profile.md](references/reference-profile.md) when matching the accumulated visual samples or explaining their lifestyle quality.
6. Read [atmosphere-framework.md](references/atmosphere-framework.md) whenever atmosphere, cinematic mood, time, weather, color, lighting, material, motion, or composition matters.
7. Build one coherent production prompt in this order: subject and action; physical contact and weight; expression and gaze; setting and narrative evidence; light and color; space and weather; camera and composition; material and motion; chosen irregularities; exclusions.
8. Spend a realism budget across 4–6 categories: face, hair, pose, clothing, environment, and camera. Usually choose one subtle cue per category instead of stacking many facial defects.
9. Run a reality-alignment pass: make light, weather, time, color, material, movement, camera, body mechanics, and subject response describe the same physical instant at comparable detail.
10. When generating, use the available image-generation tool. Include reference images through local paths when available; otherwise use the smallest number of recent conversation images that includes all targets.
11. Inspect the result. Revise the dominant failure only: face geometry, skin, expression, hair, body mechanics, contact, lighting, framing, atmosphere coherence, or excessive polish. Preserve what already works.

## Prompt Requirements

Make positive direction more prominent than negative prompting. Include:

- a concrete lived moment rather than a generic beauty portrait;
- visible evidence of weight, pressure, balance, touch, or contact with the environment;
- a non-performative expression, or a slightly incomplete expression caught mid-change;
- skin with varied microtexture and restrained highlights;
- a small asymmetry in expression, eyelids, hair, posture, or framing;
- believable hair grouping plus a few flyaways or displaced strands;
- ordinary fabric behavior such as folds, compression, or a slightly shifted collar;
- one mundane anchor such as a cup, pillow, book, bag, railing, chair, table setting, or camera when it belongs to the action;
- a plausible camera signature such as handheld framing, mild motion softness, limited depth of field, mixed ambient light, or modest phone-camera processing.

Use this compact atmosphere equation when the user needs explicit art direction:

`atmosphere = light × color × space × emotional tension × time/weather × material × motion × reality level`

Choose only the dimensions that materially affect the image. Keep their specificity balanced and physically coupled. For example, do not pair `deep-night rain` with unexplained bright noon fill, dry hair and clothes, crystal-clear air, and zero reflective surfaces.

Use exclusions such as: `no beauty retouching, no waxy skin, no porcelain-smooth face, no digital face slimming, no enlarged irises, no perfect bilateral symmetry, no doll-like eyes, no individually sculpted hair strands, no uniformly sharp skin, no unexplained glamour key light, no captions, no watermark, no phone UI`.

Do not request every imperfection at once. Avoid heavy acne, scars, eye distortion, warped anatomy, dirty skin, or exaggerated under-eye darkness unless the user explicitly asks for them.

## Output Format

For a prompt-only request, return:

1. `观察摘要` — only visible or user-provided facts;
2. `样本取舍` — note which source qualities to borrow and which filter, UI, or retouching artifacts to reject when references are mixed;
3. `生成提示词` — a ready-to-use natural-language prompt;
4. `避免项` — a short comma-separated list;
5. `氛围公式` — the selected dimensions as one compact, reality-aligned line when atmosphere is important;
6. `可调旋钮` — 2–4 optional adjustments such as more candid, cleaner commercial, stronger phone-camera feel, or closer identity preservation.

For a generation request, generate first, then briefly describe the authenticity choices used.
