const grid = document.querySelector("#skill-grid");
const template = document.querySelector("#skill-card-template");
const input = document.querySelector("#search-input");
const empty = document.querySelector("#empty-state");
const toast = document.querySelector("#toast");
let skills = [];
let config = {};
let categories = [];
let activeCategory = "all";

function configuredRepository() {
  return config.repository && !config.repository.includes("your-name");
}

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(notify.timer);
  notify.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copy(value, message) {
  try {
    await navigator.clipboard.writeText(value);
    notify(message);
  } catch {
    notify("复制失败，请手动复制");
  }
}

function installPrompt(skill) {
  const source = configuredRepository() ? `${config.repository}/tree/main/${skill.path}` : skill.path;
  return `请从 ${source} 安装 Skill：${skill.name}`;
}

function render(query = "") {
  const normalized = query.trim().toLocaleLowerCase();
  const visible = skills.filter((skill) => {
    const matchesQuery = [
      skill.name,
      skill.displayName,
      skill.description,
      skill.category?.label,
      ...(skill.relatedCategories ?? []).map((category) => category.label),
    ]
      .join(" ")
      .toLocaleLowerCase()
      .includes(normalized);
    const matchesCategory =
      activeCategory === "all" ||
      skill.category?.id === activeCategory ||
      (skill.relatedCategories ?? []).some((category) => category.id === activeCategory);
    return matchesQuery && matchesCategory;
  });

  grid.replaceChildren();
  for (const skill of visible) {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".skill-card");
    const cardLink = fragment.querySelector(".skill-card-link");
    fragment.querySelector("h3").textContent = skill.displayName;
    fragment.querySelector(".description").textContent = skill.description;
    fragment.querySelector(".skill-name").textContent = `$${skill.name}`;
    fragment.querySelector(".category-badge").textContent = skill.category?.label ?? "通用工具";
    fragment.querySelector(".file-count").textContent = `${skill.files.length} FILE${skill.files.length === 1 ? "" : "S"}`;
    if (configuredRepository()) {
      card.classList.add("is-linked");
      cardLink.href = `${config.repository}/tree/main/${skill.path}`;
      cardLink.setAttribute("aria-label", `在 GitHub 查看 ${skill.displayName}`);
    } else {
      cardLink.hidden = true;
    }
    fragment.querySelector(".copy-prompt").addEventListener("click", () =>
      copy(installPrompt(skill), `已复制 ${skill.name} 的安装提示`),
    );
    grid.append(fragment);
  }
  empty.hidden = visible.length !== 0;
}

function renderCategoryFilters() {
  const container = document.querySelector("#category-filters");
  const usedIds = new Set(
    skills.flatMap((skill) => [skill.category?.id, ...(skill.relatedCategories ?? []).map((item) => item.id)]),
  );
  const visibleCategories = categories.filter((category) => usedIds.has(category.id));
  const items = [{ id: "all", label: "全部" }, ...visibleCategories];
  container.replaceChildren();
  for (const category of items) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-filter";
    button.textContent = category.label;
    button.dataset.category = category.id;
    button.setAttribute("aria-pressed", String(category.id === activeCategory));
    button.addEventListener("click", () => {
      activeCategory = category.id;
      for (const item of container.querySelectorAll("button")) {
        item.setAttribute("aria-pressed", String(item.dataset.category === activeCategory));
      }
      render(input.value);
    });
    container.append(button);
  }
}

async function init() {
  try {
    const [catalogResponse, configResponse] = await Promise.all([
      fetch("./catalog/skills.json"),
      fetch("./site.config.json"),
    ]);
    if (!catalogResponse.ok || !configResponse.ok) throw new Error("Unable to load catalog");
    const catalog = await catalogResponse.json();
    config = await configResponse.json();
    skills = catalog.skills ?? [];
    categories = catalog.categories ?? [];

    document.querySelector("#skill-count").textContent = skills.length;
    document.querySelector("#site-description").textContent = config.description;
    document.querySelector("#owner-name").textContent = config.owner;
    const repoLink = document.querySelector("#repo-link");
    const contributeRepo = document.querySelector("#contribute-repo");
    const contributeGuide = document.querySelector("#contribute-guide");
    if (configuredRepository()) {
      repoLink.href = config.repository;
      contributeRepo.href = config.repository;
      contributeGuide.href = `${config.repository}#将生成好的-skill-加入网站`;
    } else {
      repoLink.hidden = true;
      contributeRepo.hidden = true;
      contributeGuide.hidden = true;
    }
    renderCategoryFilters();
    render();
  } catch (error) {
    console.error(error);
    empty.hidden = false;
    empty.querySelector("h3").textContent = "目录暂时无法读取";
    empty.querySelector("p").textContent = "请稍后刷新页面。";
  }
}

input.addEventListener("input", (event) => render(event.target.value));
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== input) {
    event.preventDefault();
    input.focus();
  }
});
document.querySelector("#copy-clone").addEventListener("click", () => {
  const value = configuredRepository() ? `git clone ${config.repository}.git` : "请先在 site/site.config.json 中填写 repository";
  copy(value, configuredRepository() ? "已复制克隆命令" : "请先配置 GitHub 仓库地址");
});

init();
