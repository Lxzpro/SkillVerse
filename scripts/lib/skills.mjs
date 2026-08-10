import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

export const rootDir = resolve(fileURLToPath(new URL("../../", import.meta.url)));
export const skillsDir = join(rootDir, "skills");

export function normalizePath(value) {
  return value.split(sep).join("/");
}

export function isValidSkillName(name) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) && name.length <= 64;
}

export function listSkillDirectories() {
  if (!existsSync(skillsDir)) return [];
  return readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => join(skillsDir, entry.name))
    .sort((a, b) => a.localeCompare(b));
}

function unquote(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed.slice(1, -1);
    }
  }
  if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function parseSkillMarkdown(filePath) {
  const source = readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    return { source, body: source, frontmatter: null, frontmatterKeys: [] };
  }

  const frontmatter = {};
  const frontmatterKeys = [];
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) continue;
    frontmatterKeys.push(pair[1]);
    frontmatter[pair[1]] = unquote(pair[2]);
  }

  return {
    source,
    body: source.slice(match[0].length).trim(),
    frontmatter,
    frontmatterKeys,
  };
}

export function parseOpenAiYaml(filePath) {
  if (!existsSync(filePath)) return {};
  const source = readFileSync(filePath, "utf8");
  const result = {};
  for (const key of ["display_name", "short_description", "default_prompt"]) {
    const match = source.match(new RegExp(`^\\s*${key}:\\s*["'](.*)["']\\s*$`, "m"));
    if (match) result[key] = match[1];
  }
  return result;
}

export function readSkill(skillPath) {
  const folderName = basename(skillPath);
  const skillFile = join(skillPath, "SKILL.md");
  const parsed = existsSync(skillFile)
    ? parseSkillMarkdown(skillFile)
    : { source: "", body: "", frontmatter: null, frontmatterKeys: [] };
  const agent = parseOpenAiYaml(join(skillPath, "agents", "openai.yaml"));
  const files = [];

  function walk(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const absolute = join(directory, entry.name);
      if (entry.isDirectory()) walk(absolute);
      else files.push(normalizePath(relative(skillPath, absolute)));
    }
  }

  if (existsSync(skillPath)) walk(skillPath);

  return {
    folderName,
    path: normalizePath(relative(rootDir, skillPath)),
    skillFile,
    parsed,
    agent,
    files: files.sort(),
    updatedAt: null,
  };
}
