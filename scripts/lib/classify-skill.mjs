function normalize(value) {
  return String(value ?? "").toLocaleLowerCase();
}

function matchedKeywords(text, keywords) {
  return keywords.filter((keyword) => text.includes(normalize(keyword)));
}

export function classifySkill(skill, taxonomy) {
  const metadataText = normalize(
    [
      skill.folderName,
      skill.parsed.frontmatter?.name,
      skill.parsed.frontmatter?.description,
      skill.agent.display_name,
      skill.agent.short_description,
    ].join(" "),
  );
  const bodyText = normalize(skill.parsed.body);
  const filesText = normalize(skill.files.join(" "));

  const scored = taxonomy.categories
    .filter((category) => category.id !== "general")
    .map((category) => {
      const metadataMatches = matchedKeywords(metadataText, category.keywords);
      const bodyMatches = matchedKeywords(bodyText, category.keywords);
      const fileMatches = matchedKeywords(filesText, category.keywords);
      const score = metadataMatches.length * 4 + bodyMatches.length + fileMatches.length * 2;
      return {
        id: category.id,
        label: category.label,
        score,
        matchedKeywords: [...new Set([...metadataMatches, ...bodyMatches, ...fileMatches])],
      };
    })
    .filter((category) => category.score > 0)
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));

  if (!scored.length) {
    const fallback = taxonomy.categories.find((category) => category.id === "general") ?? {
      id: "general",
      label: "通用工具",
    };
    return {
      primary: { id: fallback.id, label: fallback.label },
      related: [],
      classification: {
        method: "keyword-rules-v1",
        confidence: 0,
        matchedKeywords: [],
      },
    };
  }

  const top = scored[0];
  const selected = scored.filter((category) => category.score >= top.score * 0.45).slice(0, 3);
  const selectedTotal = selected.reduce((sum, category) => sum + category.score, 0);
  return {
    primary: { id: top.id, label: top.label },
    related: selected.slice(1).map(({ id, label }) => ({ id, label })),
    classification: {
      method: "keyword-rules-v1",
      confidence: Number((top.score / selectedTotal).toFixed(2)),
      matchedKeywords: top.matchedKeywords,
    },
  };
}
