# SkillVerse

一个以 GitHub 为唯一数据源的个人 Codex Skill 仓库。Skill 源码、历史和发布都保存在 Git 中；静态目录站点可以部署到 Vercel、Cloudflare Pages 或 GitHub Pages。

## 开始使用

需要 Node.js 20 或更高版本，无第三方运行时依赖。

```bash
npm run skill:new -- my-skill "这个 Skill 做什么，以及什么情况下应当使用它"
npm run skill:check
npm run catalog
npm run dev
```

打开 `http://localhost:4173` 查看目录站点。

## 日常工作流

```bash
# 1. 创建并编辑 Skill
npm run skill:new -- my-skill "Use when Codex needs to ..."

# 2. 校验全部 Skill，并生成站点索引
npm run skill:check
npm run catalog

# 3. 提交到 GitHub
git add .
git commit -m "feat(skill): add my-skill"
git push
```

推送和 Pull Request 会触发 GitHub Actions 校验及站点构建。连接 Vercel 或 Cloudflare Pages 后，`main` 分支的推送会自动上线。

## 目录

```text
skills/<skill-name>/       Skill 源码；每个目录必须包含 SKILL.md
catalog/skills.json        从 Skill 自动生成的公开索引
site/                      静态目录站点源码
scripts/                   创建、校验、构建与打包工具
.github/workflows/         CI 与 GitHub Release 自动化
```

不要在单个 Skill 中增加 README、安装指南或变更日志；把给 Codex 使用的必要内容放在 `SKILL.md`、`references/`、`scripts/` 和 `assets/` 中。仓库级说明保留在本文件。

## 站点配置

编辑 `site/site.config.json`：

```json
{
  "title": "SkillVerse",
  "owner": "Your Name",
  "repository": "https://github.com/your-name/skillverse"
}
```

然后运行 `npm run build`，生成物位于 `dist/`。

### Vercel

- Build Command：`npm run build`
- Output Directory：`dist`
- 或直接导入仓库；根目录的 `vercel.json` 已包含配置。

### Cloudflare Pages

- Framework preset：None
- Build command：`npm run build`
- Build output directory：`dist`
- Node.js version：20 或更高

## 发布下载包

```bash
npm run package:skills
```

该命令在 `release/` 下为每个 Skill 创建 `.tar.gz` 及 SHA-256 校验文件。推送形如 `v1.0.0` 的 Git 标签后，Release 工作流会自动生成并上传这些文件。
