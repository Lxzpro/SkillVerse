import test from "node:test";
import assert from "node:assert/strict";
import { isValidSkillName, parseSkillMarkdown } from "../scripts/lib/skills.mjs";
import { writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

test("validates canonical skill names", () => {
  assert.equal(isValidSkillName("my-skill-2"), true);
  assert.equal(isValidSkillName("MySkill"), false);
  assert.equal(isValidSkillName("my_skill"), false);
});

test("parses required SKILL.md frontmatter", () => {
  const directory = mkdtempSync(join(tmpdir(), "skillverse-"));
  const file = join(directory, "SKILL.md");
  writeFileSync(file, "---\nname: demo\ndescription: A useful demo skill for tests.\n---\n\n# Demo\n");
  const parsed = parseSkillMarkdown(file);
  assert.equal(parsed.frontmatter.name, "demo");
  assert.equal(parsed.frontmatter.description, "A useful demo skill for tests.");
  assert.equal(parsed.body, "# Demo");
  rmSync(directory, { recursive: true, force: true });
});
