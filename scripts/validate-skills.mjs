import { existsSync } from "node:fs";
import { basename, join } from "node:path";
import {
  isValidSkillName,
  listSkillDirectories,
  parseOpenAiYaml,
  parseSkillMarkdown,
} from "./lib/skills.mjs";

const failures = [];
const warnings = [];
const skillDirectories = listSkillDirectories();

for (const directory of skillDirectories) {
  const folderName = basename(directory);
  const skillFile = join(directory, "SKILL.md");

  if (!isValidSkillName(folderName)) {
    failures.push(`${folderName}: 目录名只能包含小写字母、数字和连字符，且不超过 64 个字符`);
  }
  if (!existsSync(skillFile)) {
    failures.push(`${folderName}: 缺少 SKILL.md`);
    continue;
  }

  const parsed = parseSkillMarkdown(skillFile);
  if (!parsed.frontmatter) {
    failures.push(`${folderName}: SKILL.md 缺少 YAML frontmatter`);
    continue;
  }

  const extraKeys = parsed.frontmatterKeys.filter((key) => !["name", "description"].includes(key));
  if (extraKeys.length) {
    failures.push(`${folderName}: frontmatter 只允许 name 和 description；发现 ${extraKeys.join(", ")}`);
  }
  if (parsed.frontmatter.name !== folderName) {
    failures.push(`${folderName}: name 必须与目录名一致`);
  }
  if (!parsed.frontmatter.description || parsed.frontmatter.description.length < 20) {
    failures.push(`${folderName}: description 至少 20 个字符，并说明能力和触发场景`);
  }
  if (!parsed.body) failures.push(`${folderName}: SKILL.md 正文不能为空`);
  if (parsed.source.split(/\r?\n/).length > 500) {
    warnings.push(`${folderName}: SKILL.md 超过 500 行，建议拆分到 references/`);
  }

  for (const unwanted of ["README.md", "INSTALLATION_GUIDE.md", "CHANGELOG.md"]) {
    if (existsSync(join(directory, unwanted))) {
      failures.push(`${folderName}: Skill 内不应包含 ${unwanted}`);
    }
  }

  const agentFile = join(directory, "agents", "openai.yaml");
  if (!existsSync(agentFile)) {
    warnings.push(`${folderName}: 建议添加 agents/openai.yaml`);
  } else {
    const agent = parseOpenAiYaml(agentFile);
    if (!agent.display_name || !agent.short_description || !agent.default_prompt) {
      failures.push(`${folderName}: agents/openai.yaml 缺少必要的 interface 文案`);
    } else if (!agent.default_prompt.includes(`$${folderName}`)) {
      failures.push(`${folderName}: default_prompt 必须明确包含 $${folderName}`);
    }
  }
}

for (const warning of warnings) console.warn(`WARN  ${warning}`);
for (const failure of failures) console.error(`ERROR ${failure}`);

if (failures.length) {
  console.error(`\n校验失败：${failures.length} 个错误，${warnings.length} 个提醒。`);
  process.exit(1);
}

console.log(`校验通过：${skillDirectories.length} 个 Skill，${warnings.length} 个提醒。`);
