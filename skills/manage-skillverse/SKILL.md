---
name: manage-skillverse
description: Create, update, validate, catalog, package, and publish personal Codex skills in a SkillVerse Git repository. Use when adding a new skill under skills/, revising an existing SKILL.md or agents/openai.yaml, rebuilding the public skill catalog, preparing release archives, or publishing SkillVerse changes to GitHub.
---

# Manage SkillVerse

Maintain the repository as the source of truth for personal Codex skills. Keep generated indexes and the deployable site synchronized with skill source files.

## Workflow

1. Locate the repository root containing `package.json`, `skills/`, `scripts/`, and `site/`.
2. Inspect `git status` before editing. Preserve unrelated and user-owned changes.
3. For a new skill, run:

   ```bash
   npm run skill:new -- <skill-name> "Describe the capability and when Codex should use it"
   ```

4. Replace all generated guidance in `SKILL.md` with concise, imperative instructions.
5. Add only reusable resources the workflow needs:
   - `scripts/` for deterministic repeated operations.
   - `references/` for detailed material loaded on demand.
   - `assets/` for files copied into outputs.
6. Keep `agents/openai.yaml` aligned with `SKILL.md`.
7. Run the full local verification:

   ```bash
   npm test
   npm run skill:check
   npm run catalog
   npm run build
   ```

8. Review `catalog/skills.json`, the generated `dist/` site, and the final Git diff.
9. Commit, tag, or push only when the user explicitly requests publication.

## Skill Rules

- Name the folder and frontmatter `name` identically with lowercase letters, digits, and hyphens.
- Keep the name under 64 characters.
- Put only `name` and `description` in `SKILL.md` frontmatter.
- State both capability and triggering context in `description`.
- Keep `SKILL.md` under 500 lines; move detailed content into directly linked references.
- Do not add README, installation guide, changelog, or process notes inside an individual skill.
- Quote all strings in `agents/openai.yaml`.
- Include `$<skill-name>` in `interface.default_prompt`.

## Repository Operations

Use `npm run package:skills` to create release archives and checksums under `release/`. Use `npm run dev` to inspect the catalog locally at `http://127.0.0.1:4173`.

When changing site identity or repository links, edit `site/site.config.json`; never duplicate those values in generated catalog data.
