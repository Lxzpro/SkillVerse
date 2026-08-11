# Lived-In Portrait Authenticity

## Core rule

Realism comes from causal coherence. Every irregularity should have a reason: wind moves hair, walking creates motion softness, a close phone camera introduces perspective, smiling changes eyelids, and mixed indoor light changes skin color locally.

Preserve attractiveness through coherent anatomy, expression, styling, and light—not through pore removal, face slimming, enlarged eyes, identical features, or loss of local skin color.

## Realism budget

Choose 4–6 cues across different categories. Do not spend the whole budget on the face.

- face: slight expression or eyelid asymmetry, local color, restrained skin texture;
- hair: grouped strands, displaced fringe, mild crown disorder, a few flyaways;
- pose: incomplete gesture, shifted shoulders, off-axis gaze, believable balance;
- contact: cheek compressed by a hand or pillow, fingers resting on an object, straps or fabric under pressure, seated weight;
- environment: one mundane object and a little non-designed background entropy;
- camera: off-center crop, limited focus, mild motion softness, local clipping, compression, or mixed white balance.

Physical contact and body mechanics usually add more realism than adding freckles, acne, scars, or under-eye darkness.

## High-value cues

### Face and skin

- Preserve low-amplitude asymmetry: one eyelid a little more closed, one mouth corner leading, unequal cheek compression during a smile.
- Keep pores and fine skin texture visible but not uniformly emphasized.
- Allow slight tonal variation around the nose, cheeks, chin, and under-eyes.
- Use restrained specular highlights; real skin is neither matte plastic nor uniformly glossy.
- Keep makeup integrated with skin. Avoid perfectly crisp, airbrushed edges unless the scene calls for formal styling.

### Extreme close-up skin and eyes

- Scale detail to the crop. A half-face or single-eye portrait can carry more facial microdetail than a lifestyle portrait, but the detail must vary across the surface instead of appearing as a uniform pore overlay.
- Make one eye the critical focus plane. Keep iris fibers, limbal transitions, tear meniscus, eyelash roots, and corneal reflections legible without enlarging the iris or turning the sclera pure white.
- Couple catchlights to lighting. Soft side light should create a compatible soft reflection and gradual facial falloff; add rim light only as subtle edge separation.
- Preserve optical hierarchy: the focus eye is extremely sharp, nearby skin has fine microcontrast, and the far cheek, nose edge, ear, hair, and background fall away naturally.
- Use faint freckles, peach fuzz, tiny creases, occasional blocked pores, or minor blemishes selectively. Do not amplify every imperfection or confuse realism with dermatological harshness.
- Preserve grouped brow hairs, irregular lash spacing, lip lines, and plausible beard or stubble growth where visible. Avoid identical isolated hairs or uniformly carved strands.
- Describe RAW-like latitude, restrained color science, fine film grain, and editorial finish as visual qualities. Do not imply that a generated image is literally a camera RAW file.

### Hair and clothing

- Describe hair in clumps and layers, not as thousands of equally separated strands.
- Add a few flyaways, loose fringe, or strands crossing the face when supported by movement or weather.
- Allow minor collar displacement, fabric folds, strap pressure, or non-mirrored garment drape.

### Expression and pose

- Prefer mid-expression, an uneven smile, a brief squint, gaze slightly off-axis, or a posture that is not perfectly centered.
- Let shoulders, head angle, and hands respond to the action.
- Avoid showroom poses unless explicitly requested.
- Use partial occlusion when natural: hair across a cheek, a hand near the mouth, a sleeve near the face, bedding around the shoulders, or an object briefly crossing the lower face.
- Preserve believable support and weight: a leaning torso needs an arm, cushion, chair, wall, railing, or floor relationship that can carry it.

### Camera and scene

- Let the camera occupy a plausible position with imperfect but intentional cropping.
- Use moderate dynamic range, small exposure differences, natural falloff, and believable background depth.
- Consider mild motion softness, slight sensor noise, mixed white balance, or ordinary phone processing. Do not stack all of them.
- Keep background people and objects mundane and spatially coherent instead of perfectly arranged.
- Allow a slightly clipped highlight, dim shadow, compression softness, or uneven white balance when justified; do not reduce the whole image to low quality.

## Source calibration

Borrow different information from different source types:

| Source type | Borrow | Reject or down-weight |
| --- | --- | --- |
| Candid/documentary | action, contact, environmental response, camera limitations | accidental distortion that harms anatomy |
| Curated lifestyle | wardrobe, setting, pose concept, palette | excessive set perfection and fully resolved posing |
| Beauty-filtered selfie | hairstyle, makeup family, crop, gaze direction | face slimming, poreless skin, enlarged eyes/irises, synthetic catchlights, uniform blush |
| Editorial/studio | lighting concept, graphic silhouette, styling | casual-life claims unsupported by the staged scene |
| Screenshot/collage/repost | underlying framing if useful | UI, captions, borders, logos, watermarks, duplicated panels |

## Common AI tells and repairs

| AI tell | Repair |
| --- | --- |
| Waxy, poreless skin | Ask for varied microtexture, soft peach fuzz, restrained highlights, no beauty retouching |
| Perfectly mirrored face | Add subtle eyelid, smile, cheek, hair, or posture asymmetry |
| Frozen catalog smile | Specify a smile forming, fading, or interrupted by movement |
| Helmet-like hair | Describe grouped strands, uneven flyaways, and motion caused by wind or walking |
| Every plane equally sharp | Define one focus plane and natural focus falloff |
| Eye-centered crop looks synthetic | Keep one anatomically sized focus eye, physically consistent catchlights, moist tear line, varied surrounding skin texture, and optical falloff |
| Pores look stamped or gritty | Vary pore visibility by facial zone and light angle; reduce global clarity and oversharpening |
| Studio-perfect casual photo | Add a plausible phone position, off-center crop, ordinary ambient light, and one capture artifact |
| Too many artificial defects | Remove the defect list; retain only 3–6 scene-caused irregularities |
| Filtered influencer face | Restore plausible eye size, cheek and jaw volume, local skin color, and lens-consistent proportions |
| Floating or mannequin pose | Add support, joint loading, fabric compression, contact shadows, and a reason for the gesture |
| Empty decorative setting | Add one mundane anchor object that participates in the moment |

## Prompt skeleton

`A photorealistic [portrait type] of [visible subject description] [specific action] in [ordinary setting]. [Expression and gaze], caught mid-moment rather than posed. [Lighting]. [Camera position, framing, lens/focus behavior]. Preserve natural skin microtexture, slight tonal variation, subtle facial asymmetry, grouped hair with a few scene-caused flyaways, and believable fabric folds. [One or two capture artifacts]. Documentary realism, understated color, no beauty retouching, no waxy skin, no doll-like symmetry, no over-sharpened facial texture.`

## Iteration order

Fix only the largest mismatch per pass:

1. identity or subject description;
2. anatomy and expression;
3. skin and hair material;
4. lighting and camera;
5. background and styling.
