import test from "node:test";
import assert from "node:assert/strict";
import { classifySkill } from "../scripts/lib/classify-skill.mjs";

const taxonomy = {
  categories: [
    { id: "development", label: "开发与编程", keywords: ["api", "code", "python"] },
    { id: "media", label: "图像与媒体", keywords: ["image", "video"] },
    { id: "general", label: "通用工具", keywords: [] },
  ],
};

function makeSkill(description, body = "", files = ["SKILL.md"]) {
  return {
    folderName: "example-skill",
    parsed: { frontmatter: { name: "example-skill", description }, body },
    agent: {},
    files,
  };
}

test("classifies from required skill description", () => {
  const result = classifySkill(makeSkill("Build and debug Python API code."), taxonomy);
  assert.equal(result.primary.id, "development");
  assert.ok(result.classification.matchedKeywords.includes("python"));
});

test("uses body and resource filenames as supporting evidence", () => {
  const result = classifySkill(
    makeSkill("Create polished assets for campaigns.", "Generate an image for each scene.", ["SKILL.md", "scripts/video-render.js"]),
    taxonomy,
  );
  assert.equal(result.primary.id, "media");
});

test("falls back to general without a keyword match", () => {
  const result = classifySkill(makeSkill("Handle a specialized personal procedure."), taxonomy);
  assert.equal(result.primary.id, "general");
  assert.equal(result.classification.confidence, 0);
});
