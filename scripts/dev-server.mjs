import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { execFileSync } from "node:child_process";
import { rootDir } from "./lib/skills.mjs";

execFileSync(process.execPath, [join(rootDir, "scripts", "build-site.mjs")], {
  cwd: rootDir,
  stdio: "inherit",
});

const output = join(rootDir, "dist");
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

const server = createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(output, safePath === "/" ? "index.html" : safePath);
  if (!filePath.startsWith(output) || !existsSync(filePath)) filePath = join(output, "index.html");
  if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = join(filePath, "index.html");
  response.setHeader("Content-Type", types[extname(filePath)] ?? "application/octet-stream");
  createReadStream(filePath).pipe(response);
});

server.listen(4173, "127.0.0.1", () => {
  console.log("SkillVerse: http://127.0.0.1:4173");
});
