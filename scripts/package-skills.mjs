import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { listSkillDirectories, rootDir } from "./lib/skills.mjs";

execFileSync(process.execPath, [join(rootDir, "scripts", "validate-skills.mjs")], {
  cwd: rootDir,
  stdio: "inherit",
});

const output = join(rootDir, "release");
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

const manifest = [];
for (const directory of listSkillDirectories()) {
  const name = basename(directory);
  const archiveName = `${name}.tar.gz`;
  const archivePath = join(output, archiveName);
  execFileSync("tar", ["-czf", archivePath, "-C", join(rootDir, "skills"), name], {
    cwd: rootDir,
    stdio: "inherit",
  });
  const checksum = createHash("sha256").update(readFileSync(archivePath)).digest("hex");
  writeFileSync(`${archivePath}.sha256`, `${checksum}  ${archiveName}\n`, "utf8");
  manifest.push({ name, file: archiveName, sha256: checksum });
}

writeFileSync(join(output, "manifest.json"), `${JSON.stringify({ skills: manifest }, null, 2)}\n`);
console.log(`已在 release/ 打包 ${manifest.length} 个 Skill。`);
