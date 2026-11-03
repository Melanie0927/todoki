# Todoki（届き）· 中日一站式服务平台

> 「届き」意为"传递、通达"——把中日两国的语言、知识与制度信息准确送达你面前，**赴日不必一人求索**。

Todoki 是一个面向赴日/在日华人及中日涉外法律从业者的 **Web 单页应用**，将四大高频需求整合到一个工具中：

| 模块 | 能力 |
|---|---|
| 🌐 **中日互译** | 双向翻译 · 润色优化（6 维度）· 假名标注 · 术语词典，流式输出 |
| 🎓 **留学建议** | 116 所学校详情库 · 多条件检索/排序 · 申请时间线 · 费用计算器 · 时间轴规划器 · 知识库 |
| ⚖️ **法条对比** | 239 条中日法条双语检索 · 条对条映射对比 · 官方溯源 |
| 💬 **智能问答** | AI 自由问答，流式回答，可中断 |
| 📖 **术语库** | 130 条垂直术语 · 15 组"假朋友"同形异义词告警 · 术语高亮 |

其他能力：命令面板（Ctrl/⌘+K）· 暗色主题 · 全局收藏 · 术语高亮 · 翻译历史 · 模型切换。

---

## ✨ 特性

- **纯前端静态应用**：单文件 `index.html` + `data/*.js` 数据文件，无需构建，开箱即用
- **真实 AI 能力**：通过 [WorkBuddy 云服务](https://www.workbuddy.cn/) 免密钥调用大模型，实现翻译、润色、词典、问答
- **垂直语境**：留学/法律/商务领域系统提示词 + 专业术语库，翻译更准确
- **响应式**：适配桌面 / 平板 / 手机
- **零依赖后端**：数据本地化，AI 走免密钥云服务

---

## 🚀 快速开始

### 方式一：直接用 WorkBuddy 打开（推荐，含 AI 功能）

1. 用 [WorkBuddy](https://www.workbuddy.cn/) 打开本项目文件夹
2. 在 WorkBuddy 中为项目**开通云服务**（Cloud Service）——这是使用 AI 翻译/问答的前提
3. 开通后你会获得属于你自己的 `endpoint` 和 `publishableKey`
4. 复制 `config.example.js` 为 `config.js`，填入你的两个值：

```bash
cp config.example.js config.js
```

5. 打开 `index.html` 即可完整使用（含 AI 功能）

> 每个使用者需要**自己的云服务环境**，因为 WorkBuddy 云服务按应用隔离、密钥按 Origin 校验，无法共享一个 key 给所有人。

### 方式二：仅体验界面与数据（无 AI）

直接双击打开 `index.html`，或部署为任意静态站点。术语库、法条、学校、留学等**所有数据功能**均可正常使用，仅 AI 翻译/润色/词典/问答会提示"未配置云服务"。

---

## ⚙️ 配置说明

AI 能力通过 `config.js` 注入配置，该文件**已被 `.gitignore` 忽略**，不会提交到仓库：

```js
window.APP_CONFIG = {
  endpoint: '你的 endpoint（形如 https://xxx.app.workbuddy.host）',
  publishableKey: '你的 publishableKey（形如 wbpk_xxx）',
};
```

- `config.example.js`：配置模板（可提交）
- `config.js`：你的真实配置（**不要提交**）

---

## 📁 目录结构

```
.
├── index.html          # 应用主文件（单页）
├── config.example.js   # 云服务配置模板
├── config.js           # 你的真实配置（已 gitignore）
├── data/
│   ├── laws.js         # 中日法条库（239 条）
│   ├── schools.js      # 学校库（116 所）
│   ├── glossary.js     # 术语库（130 条）
│   ├── lawmappings.js  # 条对条法条映射
│   └── study.js        # 留学知识库
├── DESIGN.md           # 设计说明
└── PRD.md              # 产品需求文档
```

---

## 🛠️ 技术栈

- 原生 HTML/CSS/JS + [Tailwind CSS](https://tailwindcss.com/)（CDN）
- [WorkBuddy 云服务 SDK](https://cdn.jsdelivr.net/npm/@tencent-ai/workbuddy-cloud-sdk)（免密钥 LLM 调用）
- 无构建步骤、无后端依赖、无 npm 依赖

---

## ⚠️ 免责声明

- 翻译结果仅供参考，正式法律文书请以专业翻译为准
- 法条与学校信息可能存在时效性，请以官方渠道为准
- 本工具不提供法律意见，不替代律师/中介专业服务

---

## 📄 许可证

[待定] 你可以在此选择开源许可证（如 MIT / Apache-2.0）。
