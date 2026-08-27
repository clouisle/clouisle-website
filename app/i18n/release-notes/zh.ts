import type { ReleaseNotesTranslations } from "../types";

// 示例骨架数据——替换为真实发布内容
export const zh: ReleaseNotesTranslations = {
  title: "发布记录",
  releases: [
    {
      version: "v0.1.0",
      date: "2026-08-27",
      summary: "首个可体验的 Clouisle 版本。",
      features: [
        "Agent 对话与工具调用",
        "可视化工作流编排",
        "知识库导入与检索",
        "团队、角色与权限",
        "开放 API 与 API Key 管理",
      ],
    },
    {
      version: "v0.1.1",
      date: "2026-08-20",
      summary: "体验与稳定性改进。",
      features: [
        "工作流运行状态跟踪",
        "模型接入配置优化",
        "管理后台审计日志增强",
      ],
    },
  ],
};