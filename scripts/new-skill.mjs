import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { isValidSkillName, skillsDir } from "./lib/skills.mjs";

const [, , name, ...descriptionParts] = process.argv;
const description = descriptionParts.join(" ").trim();

if (!name || !description) {
  console.error('用法：npm run skill:new -- <skill-name> "能力说明和触发场景"');
  process.exit(1);
}
if (!isValidSkillName(name)) {
  console.error("Skill 名称只能使用小写字母、数字和连字符，且不超过 64 个字符。");
  process.exit(1);
}
if (description.length < 20) {
  console.error("description 至少需要 20 个字符，并同时说明能力和使用场景。");
  process.exit(1);
}

const target = join(skillsDir, name);
if (existsSync(target)) {
  console.error(`Skill 已存在：skills/${name}`);
  process.exit(1);
}

const displayName = name
  .split("-")
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(" ");
const shortDescription = description.length > 64 ? `${description.slice(0, 61)}...` : description;

mkdirSync(join(target, "agents"), { recursive: true });
writeFileSync(
  join(target, "SKILL.md"),
  `---\nname: ${name}\ndescription: ${JSON.stringify(description)}\n---\n\n# ${displayName}\n\n## Workflow\n\n1. Inspect the task context and required inputs.\n2. Apply the skill-specific procedure.\n3. Verify the result before reporting completion.\n\n## Guidance\n\nReplace this section with concise, imperative instructions that Codex would not already know.\n`,
  "utf8",
);
writeFileSync(
  join(target, "agents", "openai.yaml"),
  `interface:\n  display_name: "${displayName.replaceAll('"', '\\"')}"\n  short_description: "${shortDescription.replaceAll('"', '\\"')}"\n  default_prompt: "Use $${name} to complete this task with its documented workflow."\n`,
  "utf8",
);

console.log(`已创建 skills/${name}`);
console.log("下一步：编辑 SKILL.md，删除模板提示并加入真正的工作流。");
