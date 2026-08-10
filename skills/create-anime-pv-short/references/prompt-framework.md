# Image and Video Prompt Framework

Use this framework as a selection checklist. Do not mechanically include every branch. Prioritize attributes that change composition, identity, continuity, motion, or mood.

## Image mode: subject + scene + style + camera

### 1. Subject

Choose the relevant subject type and lock its identity.

- **Time context:** era, season, and time of day.
- **Person:** gender presentation, apparent age, role or occupation, face shape, skin tone and texture, hair style and color, eyes, distinctive facial features, body build, clothing style/color/material/pattern, accessories, expression, atmosphere, pose, and action.
- **Creature:** species, approximate size and age, body type, distinctive anatomy, surface or fur color and texture, pose, and action.
- **Object:** type, shape, scale, color, material, surface details, condition, and design language.

Use 3–6 high-value identity anchors for a person. Avoid exhaustive facial inventories unless the task is a character sheet or close portrait.

### 2. Scene

- **Natural setting:** landform, terrain, water, sky, vegetation, and depth layers.
- **Architecture:** era and culture, building type, structural materials, exterior or interior, furniture, and arrangement.
- **Weather and atmosphere:** clear, overcast, rain, snow, fog, dust, wind, humidity, particles, and visibility.
- **Spatial design:** foreground occlusion, midground action, background silhouette, scale cue, and negative space.

Make subject and scene interact: wet clothing in rain, colored window light on skin, wind affecting hair, reflections responding to architecture.

### 3. Style

- **Visual medium:** illustration, cel animation, editorial graphic design, printmaking, film still, or another relevant medium.
- **Mood and tone:** lyrical, tense, lonely, triumphant, restrained, dreamy, ominous, or warm.
- **Color:** warm/cool balance, limited palette, dominant color, accent color, saturation, and contrast.
- **Light source:** natural or artificial; key, fill, rim, practical, reflected, volumetric, or silhouette light.
- **Light behavior:** direction, hardness, falloff, haze response, shadow density, and bloom.

Use the house style from `style-bible.md` as the default medium and motion-graphic language, then adapt palette and mood to the story.

### 4. Camera and composition

- **Shot scale:** extreme close-up, close-up, medium, full, wide, or extreme wide.
- **Angle:** eye level, high angle, low angle, top-down, Dutch angle, profile, over-shoulder, or rear view.
- **Composition:** centered, thirds, asymmetric, frame-within-frame, leading lines, dominant negative space, subject left/right/back, layered depth.
- **Lens and optics:** wide/normal/telephoto feel; 14/24/35/50/85/135/200mm only when useful; aperture or depth of field; focal plane; optical distortion; perspective compression.
- **Capture texture:** clean animation camera by default; name a real camera or lens only when the requested output benefits from photographic simulation.

Do not combine incompatible choices such as extreme wide and tight portrait compression without a clear visual reason.

## Video mode: subject + action + effect

Start by locking the same subject and scene fields used in image mode. Then resolve every shot through these branches:

### 1. Subject

State who or what remains visually stable across the shot: identity anchors, clothing, prop, recurring motif, location family, and screen direction.

### 2. Action

Use one primary action and, at most, one secondary follow-through per short shot. Describe physical causality:

`character action → environmental reaction → emotional or visual result`

Prefer economical anime motion: glance, turn, reach, step, grip, release, hair follow-through, cloth movement, reflection change, or one decisive impact.

### 3. Effect controls

- **Camera:** static hold, push in, pull out, pan, tilt, lateral track, orbit, crane, handheld drift, whip, rack focus, parallax, or motivated zoom.
- **Environment:** weather, particles, reflections, foreground occlusion, moving architecture, crowd density, and depth behavior.
- **Lighting:** source, direction, intensity change, flicker, passing light, rim light, silhouette, shadow motion, or color shift.
- **Speed:** real time, restrained slow motion, time ramp, acceleration, freeze beat, hold frame, or rhythmic cut density.
- **Sound:** music genre and beat, ambience, object sound, cloth or footstep detail, whoosh, impact, silence, and final audio release.

Tie the effect to the action. Example: a train begins moving, so platform lights sweep across the face, the background slides opposite screen direction, reflections fragment, rail sound rises, and the camera holds steady to preserve emotion.

## Prompt assembly order

### Still image

1. Output format and aspect ratio.
2. Main subject and identity anchors.
3. Pose or decisive frozen action.
4. Time, setting, weather, and depth layers.
5. Style, palette, texture, and atmosphere.
6. Shot scale, angle, composition, lens feel, focus, and lighting.
7. Consistency and quality requirements.

### Video

1. Duration, aspect ratio, frame rate if relevant, and story beat.
2. Character/object continuity anchors and recurring motif.
3. Exact chronological shot ranges.
4. In each range: subject, action, camera, environment response, lighting change, speed, transition, and sound.
5. Global style, palette, texture, and animation quality.
6. Continuity and negative constraints.

## Priority test

Before keeping an attribute, ask:

1. Does it change what the viewer sees?
2. Does it protect identity or continuity?
3. Does it motivate movement or transition?
4. Does it reinforce the intended emotion?

Remove attributes that answer “no” to all four questions.
