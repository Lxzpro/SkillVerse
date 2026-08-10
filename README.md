# SkillVerse

SkillVerse 是一个以 GitHub 为唯一数据源的个人 Codex Skill 仓库。Skill 源码、版本历史和发布记录保存在 Git 中，目录网站可以部署到 Vercel、Cloudflare Pages 或 GitHub Pages。

## 功能

- 使用统一模板创建 Codex Skill。
- 校验 `SKILL.md` 和 `agents/openai.yaml`。
- 自动生成公开的 Skill JSON 索引。
- 提供支持搜索和复制安装提示的响应式网站。
- 通过 GitHub Actions 自动检查、构建和发布。
- 为每个 Skill 生成压缩包和 SHA-256 校验文件。

## 快速开始

需要 Node.js 20 或更高版本。项目没有第三方运行时依赖。

```bash
npm run skill:new -- my-skill "描述这个 Skill 的能力，以及应当在什么情况下使用它"
npm run skill:check
npm run catalog
npm run dev
```

访问 `http://127.0.0.1:4173` 查看本地目录网站。

## 日常工作流

### 1. 创建 Skill

```bash
npm run skill:new -- my-skill "Use when Codex needs to ..."
```

生成的主要文件：

```text
skills/my-skill/
├── SKILL.md
└── agents/
    └── openai.yaml
```

### 2. 编辑并校验

```bash
npm test
npm run skill:check
npm run catalog
npm run build
```

### 3. 推送到 GitHub

```bash
git add .
git commit -m "feat(skill): add my-skill"
git push
```

如果 Vercel 或 Cloudflare Pages 已连接本仓库，推送到 `main` 后会自动构建并更新网站。

## 文件目录结构

```text
SkillVerse/
├── .github/
│   └── workflows/
│       ├── ci.yml                  # 测试、Skill 校验和网站构建
│       └── release.yml             # 根据 v* 标签创建 GitHub Release
├── catalog/
│   └── skills.json                 # 自动生成的公开 Skill 索引
├── scripts/
│   ├── lib/
│   │   └── skills.mjs              # Skill 扫描、解析和公共工具
│   ├── build-site.mjs              # 构建静态目录网站
│   ├── dev-server.mjs              # 本地预览服务器
│   ├── generate-catalog.mjs        # 生成 catalog/skills.json
│   ├── new-skill.mjs               # 创建新 Skill
│   ├── package-skills.mjs          # 生成发布压缩包和校验文件
│   └── validate-skills.mjs         # 校验全部 Skill
├── site/
│   ├── app.js                      # 搜索、渲染和复制交互
│   ├── index.html                  # 网站页面结构
│   ├── mark.svg                    # 网站图标
│   ├── site.config.json            # 网站名称、作者和仓库地址
│   └── styles.css                  # 响应式网站样式
├── skills/
│   └── manage-skillverse/
│       ├── agents/
│       │   └── openai.yaml         # Skill 的界面元数据
│       └── SKILL.md                 # Skill 的触发描述和工作流
├── test/
│   └── skills.test.mjs             # 解析和命名规则测试
├── .gitattributes                  # Git 文本与二进制文件规则
├── .gitignore                      # 忽略构建和本地产物
├── LICENSE                         # MIT 开源许可证
├── package-lock.json               # npm 锁定文件
├── package.json                    # 项目命令和 Node.js 版本要求
├── README.md                       # 项目说明
└── vercel.json                     # Vercel 构建配置
```

以下目录由命令生成，不提交到 Git：

```text
dist/                               # npm run build 的网站产物
release/                            # npm run package:skills 的发布包
```

## Skill 目录规范

每个 Skill 必须放在 `skills/<skill-name>/` 下，并包含 `SKILL.md`：

```text
skills/<skill-name>/
├── SKILL.md                        # 必需
├── agents/
│   └── openai.yaml                 # 推荐
├── scripts/                        # 可选：确定性执行脚本
├── references/                     # 可选：按需读取的参考资料
└── assets/                         # 可选：输出中使用的资源
```

规则：

- Skill 名称只能包含小写字母、数字和连字符。
- 目录名必须与 `SKILL.md` 中的 `name` 一致。
- `SKILL.md` frontmatter 只包含 `name` 和 `description`。
- `description` 同时说明能力和触发场景。
- 不要在单个 Skill 中添加 README、安装指南或变更日志。
- 详细内容放入 `references/`，避免 `SKILL.md` 过长。
- 不要提交 API Key、Token、Cookie、密码或其他敏感信息。

## 将生成好的 Skill 加入网站

网站不直接接收上传文件。Skill 需要先放进本仓库的 `skills/` 目录，再提交到 GitHub；Vercel 检测到 GitHub 更新后会自动重新部署网站。

完整流程：

```text
生成好的 Skill 文件夹
        ↓
复制到 skills/<skill-name>/
        ↓
校验 Skill 结构
        ↓
生成 catalog/skills.json
        ↓
本地构建并预览网站
        ↓
提交并推送到 GitHub
        ↓
Vercel 自动部署
```

### 1. 检查生成好的 Skill

假设已经生成：

```text
C:\path\to\my-skill\
├── SKILL.md
├── agents\
│   └── openai.yaml
├── scripts\
├── references\
└── assets\
```

其中只有 `SKILL.md` 是必需文件，其他目录按实际需要保留。

### 2. 复制到 SkillVerse

在 PowerShell 中进入仓库：

```powershell
cd E:\AiProject\SkillVerse
```

复制完整 Skill 文件夹：

```powershell
Copy-Item -Recurse `
  -LiteralPath "C:\path\to\my-skill" `
  -Destination ".\skills\my-skill"
```

复制后必须保证 `SKILL.md` 只嵌套一层：

```text
# 正确
skills/my-skill/SKILL.md

# 错误
skills/my-skill/my-skill/SKILL.md
```

如果 `skills/my-skill` 已经存在，不要直接覆盖。先比较现有内容，确认需要更新的文件后再合并。

### 3. 校验 Skill

```powershell
npm run skill:check
```

该命令检查：

- Skill 目录名称是否合法。
- `SKILL.md` 是否存在。
- frontmatter 是否只包含 `name` 和 `description`。
- `name` 是否与目录名一致。
- `description` 是否说明能力和触发场景。
- `agents/openai.yaml` 是否包含正确的界面元数据。

出现错误时先修复对应 Skill，不要继续发布。

### 4. 生成网站目录并构建

推荐直接运行：

```powershell
npm run build
```

`npm run build` 会依次完成：

```text
校验全部 Skill
→ 重新生成 catalog/skills.json
→ 构建 dist/ 静态网站
```

如果只想单独更新网站索引，也可以运行：

```powershell
npm run catalog
```

### 5. 本地预览

```powershell
npm run dev
```

访问 `http://127.0.0.1:4173`，检查：

- 新 Skill 是否出现在目录中。
- 名称和描述是否正确。
- 搜索能否找到新 Skill。
- “复制安装提示”是否对应正确的 Skill。

检查完成后按 `Ctrl+C` 停止本地服务器。

### 6. 提交到 GitHub

先检查变更：

```powershell
git status
git diff
```

提交新 Skill 和自动生成的目录文件：

```powershell
git add skills/my-skill catalog/skills.json
git commit -m "feat(skill): add my-skill"
git push
```

`dist/` 和 `release/` 是本地生成目录，已被 `.gitignore` 忽略，不需要提交。

### 7. 等待网站自动更新

GitHub 收到推送后：

1. GitHub Actions 自动运行测试、Skill 校验和网站构建。
2. Vercel 检测到生产分支更新。
3. Vercel 执行 `npm run build`。
4. 新 Skill 随 `dist/` 网站发布上线。

如果 Vercel 部署失败，先查看 Vercel Build Logs，再在本地重新运行 `npm run build` 定位错误。

以后每增加一个 Skill，都重复以上流程。无需在 Vercel 控制台中手动上传文件。

## 网站配置

编辑 `site/site.config.json`：

```json
{
  "title": "SkillVerse",
  "description": "我反复使用、持续维护的 Codex Skills。",
  "owner": "Your Name",
  "repository": "https://github.com/your-name/skillverse"
}
```

### Vercel

- Build Command：`npm run build`
- Output Directory：`dist`
- Node.js：20 或更高

根目录的 `vercel.json` 已包含构建配置。将 GitHub 仓库导入 Vercel 后，推送到生产分支即可自动部署。

### Cloudflare Pages

- Framework preset：None
- Build command：`npm run build`
- Build output directory：`dist`
- Node.js：20 或更高

## 发布下载包

```bash
npm run package:skills
```

该命令会在 `release/` 中为每个 Skill 创建 `.tar.gz` 文件、SHA-256 校验文件及 `manifest.json`。推送形如 `v1.0.0` 的 Git 标签后，Release 工作流会自动创建 GitHub Release 并上传这些文件。

## 开源公告

SkillVerse 以 [MIT License](./LICENSE) 开源。你可以在许可证允许的范围内使用、复制、修改、合并、发布和分发本项目。

请同时注意：

1. 本项目按“原样”提供，不承诺适用于特定用途。使用者应自行检查 Skill 的指令、脚本、外部调用和输出结果。
2. Skill 可能调用本地命令、浏览器、第三方 API 或外部平台。执行前应确认权限范围，并避免在不受信任的环境中运行未知脚本。
3. 仓库不得包含密码、访问令牌、API Key、Cookie、私钥或个人敏感数据。敏感配置应放在本地环境变量、GitHub Secrets 或部署平台的加密环境变量中。
4. 仓库中引用的第三方产品名称、商标、文档和服务归其各自权利人所有；除非特别声明，本项目不代表与这些第三方存在官方从属或背书关系。
5. 如果某个 Skill 或资源目录包含独立许可证或版权说明，应优先遵守该目录中的附加要求。
6. 欢迎通过 Issue 或 Pull Request 报告问题、改进工作流和贡献新的 Skill。提交贡献即表示你有权提供相关内容，并同意其按本仓库许可证分发。

## License

[MIT](./LICENSE) © 2026 SkillVerse contributors
