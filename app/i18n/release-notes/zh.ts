import type { ReleaseNotesTranslations } from "../types";

// 示例骨架数据——替换为真实发布内容
export const zh: ReleaseNotesTranslations = {
  title: "发布记录",
  backLabel: "返回发布记录",
  newFeaturesLabel: "新功能",
  releases: [
    {
      slug: "clouisle-launch",
      issue: "第 01 期",
      version: "v0.1.0",
      date: "2026 年 8 月 27 日",
      cardTitle: "Clouisle 来了",
      greeting: "从想法到结果，现在可以交给一个平台。",
      message: [
        "Clouisle 的第一个可体验版本正式发布。Agent、知识库与工作流首次在同一个平台上协同工作，让团队不必在多个工具之间来回搬运上下文。",
        "我们把安全放在第一位：团队边界、角色权限、会话隔离、认证策略与审计记录，在第一天就作为产品的一部分交付，而不是事后补丁。",
      ],
      features: [
        "Agent 对话与工具调用",
        "可视化工作流编排",
        "知识库导入与检索",
        "团队、角色与权限",
        "开放 API 与 API Key 管理",
      ],
      signOff: "— Clouisle 团队",
      cover: "/clouisle-assets/reads-1.png",
    },
    {
      slug: "workflow-refinements",
      issue: "第 02 期",
      version: "v0.1.1",
      date: "2026 年 8 月 20 日",
      cardTitle: "工作流更顺手",
      greeting: "一次聚焦体验的更新。",
      message: [
        "这一版没有引入新的模块，而是把日常使用中最常接触的部分打磨得更顺：工作流的每一次运行都能看到清晰状态，模型接入的配置不再需要反复试错。",
        "管理后台的审计日志也更完整，团队可以做更细致的回溯。",
      ],
      features: [
        "工作流运行状态跟踪",
        "模型接入配置优化",
        "管理后台审计日志增强",
      ],
      signOff: "— Clouisle 团队",
      cover: "/clouisle-assets/reads-2.png",
    },
  ],
};