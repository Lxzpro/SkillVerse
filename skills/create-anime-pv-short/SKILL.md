---
name: create-anime-pv-short
description: Expand a rough story, mood, character idea, reference image, or visual concept into a production-ready Japanese anime PV image or 5–15 second short, including image prompts, compact scripts, timed shot lists, transition and sound design, complete text-to-video prompts, and negative constraints. Use when the user asks for 动漫PV、日系动画短片、AE感转场、赛璐璐动态视觉、AI图片提示词、5秒/10秒/15秒AI视频、短剧本、分镜或视频提示词 in this established graphic motion style.
---

# Create Anime PV Short

Turn a loose idea into a concise, generatable anime PV image or video. Preserve the user's story while expressing it through the house style in [style-bible.md](references/style-bible.md). Read that reference and [prompt-framework.md](references/prompt-framework.md) completely before drafting.

## Workflow

1. Identify whether the user needs an image, a video, or both. When ambiguous but the user supplies a duration or asks for a storyboard, use video mode; otherwise offer image mode first.
2. Extract the protagonist or primary object, central action, time, location, emotion, visual motif, and desired ending from the user's idea.
3. Infer missing details conservatively. Ask only when a missing choice would materially change the result; otherwise state brief assumptions.
4. For an image, choose only the prompt dimensions that materially control the frame. Lock subject, scene, visual style, composition, light, and camera before adding decorative detail.
5. For a video, use the requested duration. Default to 10 seconds when none is given and keep the result within 5–15 seconds. Reduce the story to one readable emotional turn.
6. Write the compact script first, then the timed storyboard, then the generation prompt. Keep character, costume, palette, setting, props, lighting logic, and screen direction consistent.
7. Design motivated transitions: connect shots through a repeated shape, color, silhouette, gaze, action, or camera direction. Avoid decorative random cuts.
8. Include music and sound cues that land on visual beats for video; omit sound language for still images.
9. If a generation model is named, adapt syntax and density to it. Otherwise produce a model-neutral Chinese prompt plus negative constraints.

## Duration Rules

- **5 seconds:** 2–3 shots, one action, one transition, one final image.
- **6–10 seconds:** 3–5 shots, one setup, one emotional turn, one visual payoff.
- **11–15 seconds:** 5–7 shots, a compact cause-and-effect beat, one restrained climax, one closing image.

Prefer readable images over excessive shot count. Let important frames breathe for at least 0.8–1.5 seconds.

## Output Contract

Respond in Chinese unless the user requests another language. Use this order:

### Image Mode

Use this order when the requested deliverable is a still image or keyframe:

1. **画面定位:** one-sentence concept, aspect ratio, emotional tone, palette, and recurring motif.
2. **画面设计:** concise description of subject, action or pose, setting, foreground/midground/background relationship, and focal hierarchy.
3. **完整图片提示词:** one paste-ready prompt assembled with the image framework. Include only relevant branches; never dump the whole checklist.
4. **负面提示词:** identity, anatomy, composition, lighting, text, and style failures relevant to the frame.
5. **视频延展建议:** only when helpful, state which element could become motion or a match-cut motif.

### Video Mode

Use the following sections for a 5–15 second video:

#### 创意定位

Give a one-sentence logline, duration, aspect ratio, emotional arc, palette, and recurring visual motif.

#### 短剧本

Write a compact visual script. Include only actions and emotions that can appear on screen. Keep dialogue absent or extremely short unless requested.

#### 时间轴分镜

Use a table with:

| 时间 | 景别/构图 | 画面与动作 | 镜头运动 | 转场逻辑 | 声音/节拍 |

Make every time range add up to the exact requested duration.

#### 完整生成提示词

Write one coherent, paste-ready prompt containing:

- duration and aspect ratio;
- character and costume anchors;
- setting and central action;
- chronological shot progression;
- house style, palette, texture, lighting, composition, and animation treatment;
- camera, motivated transitions, timing, music, and sound effects;
- consistency and quality requirements.

Ensure each shot resolves the video framework: **subject + action + camera + environment + lighting + speed + sound**. Do not repeat unchanged global attributes in every shot.

Do not merely concatenate keywords. Use directorial prose and explicit temporal order.

#### 负面提示词

Include failures relevant to the concept plus the standard consistency and style exclusions from the reference.

#### 可选变体

Only when useful, add up to two concise variants that change emotion or pacing without changing the core story.

## Guardrails

- Treat the house style as a visual grammar, not a fixed story.
- Add enough plot to create a clear emotional beat, but do not bury the concept under lore.
- Avoid unreadable generated typography. Use abstract typographic blocks or add text in post unless the user supplies exact text and the model handles it reliably.
- Avoid naming living artists or copying a protected character. Describe visual traits instead.
- Never promise exact model reproduction. Present prompts as production-ready starting points that may require generation iterations.
