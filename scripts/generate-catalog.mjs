import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { listSkillDirectories, readSkill, rootDir } from "./lib/skills.mjs";
import { classifySkill } from "./lib/classify-skill.mjs";

const taxonomy = JSON.parse(readFileSync(join(rootDir, "config", "categories.json"), "utf8"));

const skills = listSkillDirectories().map((directory) => {
  const skill = readSkill(directory);
  const metadata = skill.parsed.frontmatter ?? {};
  const categories = classifySkill(skill, taxonomy);
  return {
    name: metadata.name ?? skill.folderName,
    displayName: skill.agent.display_name ?? metadata.name ?? skill.folderName,
    description: metadata.description ?? "",
    shortDescription: skill.agent.short_description ?? metadata.description ?? "",
    path: skill.path,
    files: skill.files,
    updatedAt: skill.updatedAt,
    category: categories.primary,
    relatedCategories: categories.related,
    classification: categories.classification,
  };
});

const catalog = {
  schemaVersion: 1,
  generatedAt: null,
  categories: taxonomy.categories.map(({ id, label }) => ({ id, label })),
  skills,
};

const outputDirectory = join(rootDir, "catalog");
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "skills.json"), `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
console.log(`已生成 catalog/skills.json：${skills.length} 个 Skill。`);
