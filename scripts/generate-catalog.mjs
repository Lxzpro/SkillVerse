import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { listSkillDirectories, readSkill, rootDir } from "./lib/skills.mjs";

const skills = listSkillDirectories().map((directory) => {
  const skill = readSkill(directory);
  const metadata = skill.parsed.frontmatter ?? {};
  return {
    name: metadata.name ?? skill.folderName,
    displayName: skill.agent.display_name ?? metadata.name ?? skill.folderName,
    description: metadata.description ?? "",
    shortDescription: skill.agent.short_description ?? metadata.description ?? "",
    path: skill.path,
    files: skill.files,
    updatedAt: skill.updatedAt,
  };
});

const catalog = {
  schemaVersion: 1,
  generatedAt: null,
  skills,
};

const outputDirectory = join(rootDir, "catalog");
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "skills.json"), `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
console.log(`已生成 catalog/skills.json：${skills.length} 个 Skill。`);
