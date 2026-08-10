import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { rootDir } from "./lib/skills.mjs";

execFileSync(process.execPath, [join(rootDir, "scripts", "validate-skills.mjs")], {
  cwd: rootDir,
  stdio: "inherit",
});
execFileSync(process.execPath, [join(rootDir, "scripts", "generate-catalog.mjs")], {
  cwd: rootDir,
  stdio: "inherit",
});

const output = join(rootDir, "dist");
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync(join(rootDir, "site"), output, { recursive: true });
mkdirSync(join(output, "catalog"), { recursive: true });
cpSync(join(rootDir, "catalog", "skills.json"), join(output, "catalog", "skills.json"));

const config = JSON.parse(readFileSync(join(rootDir, "site", "site.config.json"), "utf8"));
const htmlPath = join(output, "index.html");
const html = readFileSync(htmlPath, "utf8")
  .replaceAll("{{SITE_TITLE}}", config.title)
  .replaceAll("{{SITE_DESCRIPTION}}", config.description);
writeFileSync(htmlPath, html, "utf8");

console.log("站点已构建到 dist/。");
