import type { HelpPageTranslations } from "../types";
import { CONTACT_URL } from "../../seo";

const DOCS = "https://docs.clouisle.asia";

export const zh: HelpPageTranslations = {
  title: "帮助",
  description:
    "大多数问题，下面都有答案。如果没有，告诉我们发生了什么，会有真人接手跟进。",
  jump: {
    label: "本页内容",
    start: "快速入口",
    faq: "常见问题",
    support: "联系支持",
  },
  start: {
    eyebrow: "从这里开始",
    title: "找到你的入口。",
    linkLabel: "查看文档",
    items: [
      {
        title: "快速开始",
        description: "登录、选择团队、确认模型，完成第一次智能体对话。",
        href: `${DOCS}/usage/quick-start`,
      },
      {
        title: "自行部署",
        description: "使用 Docker Compose、Kubernetes、Sealos 或源码部署，并了解配置、升级与备份。",
        href: `${DOCS}/self-host/deploy`,
      },
      {
        title: "构建智能体与工作流",
        description: "创建智能体，连接知识库与工具，编排并发布工作流。",
        href: `${DOCS}/usage/guides`,
      },
      {
        title: "调用 API",
        description: "创建 API Key，发送聊天请求，处理流式响应与错误。",
        href: `${DOCS}/api/get-started`,
      },
    ],
  },
  faq: {
    eyebrow: "常见问题",
    title: "快速解答。",
    description: "最常被问到的问题，需要更多细节时，附上了完整指南的链接。",
    groups: [
      {
        id: "getting-started",
        title: "快速上手",
        items: [
          {
            question: "应该从哪里开始？",
            answer:
              "跟着「快速开始」走一遍：登录、选择团队、确认模型可用，然后完成第一次智能体对话。跑通之后，再阅读智能体、知识库和工作流的概念页，了解各部分如何协同。",
            links: [
              { label: "快速开始", href: `${DOCS}/usage/quick-start` },
              { label: "核心概念", href: `${DOCS}/usage/concepts` },
            ],
          },
          {
            question: "智能体和工作流有什么区别？",
            answer:
              "智能体负责理解目标、规划步骤、检索知识并调用工具；工作流则把已经明确的流程固化为可重复执行的步骤。很多团队用智能体处理开放性的任务，用工作流承载每次都应保持一致的环节。",
            links: [
              { label: "智能体", href: `${DOCS}/usage/concepts/agent` },
              { label: "工作流", href: `${DOCS}/usage/concepts/workflow` },
            ],
          },
          {
            question: "Clouisle 可以免费使用吗？",
            answer:
              "核心平台基于 GPL-3.0 开源。在遵守许可证的前提下，你可以下载、部署、定制，并在内部商业环境中使用。服务支持与企业版则提供专业协助与更高级的能力。",
            links: [
              { label: "GitHub 仓库", href: "https://github.com/clouisle/Clouisle" },
              { label: "咨询方案", href: CONTACT_URL },
            ],
          },
        ],
      },
      {
        id: "deployment",
        title: "部署与运维",
        items: [
          {
            question: "Clouisle 可以怎样部署？",
            answer:
              "可以部署在自有服务器、私有云或 Kubernetes 集群中。文档涵盖 Docker Compose、Kubernetes、Sealos 以及源码运行。",
            links: [{ label: "部署指南", href: `${DOCS}/self-host/deploy` }],
          },
          {
            question: "能在离线或物理隔离的网络中运行吗？",
            answer:
              "可以。配合本地模型、嵌入模型和本地向量数据库，无需公网连接即可运行。只有当你主动配置外部模型或 API 时，请求才会离开你的网络。",
            links: [{ label: "架构说明", href: `${DOCS}/self-host/architecture` }],
          },
          {
            question: "配置项和环境变量在哪里查？",
            answer:
              "自托管文档列出了全部环境变量，参考章节则涵盖站点设置、速率限制与权限说明。",
            links: [
              { label: "环境变量", href: `${DOCS}/self-host/configuration/environment-variables` },
              { label: "配置参考", href: `${DOCS}/reference` },
            ],
          },
          {
            question: "如何升级或备份我的部署？",
            answer:
              "切换版本之前，请先阅读升级与备份指南，并查看更新日志中是否有影响你部署的变更。",
            links: [
              { label: "升级", href: `${DOCS}/self-host/operations/upgrade` },
              { label: "备份与恢复", href: `${DOCS}/self-host/operations/backup-recovery` },
              { label: "更新日志", href: "/zh/release-notes" },
            ],
          },
          {
            question: "部署后出现异常，应该先检查什么？",
            answer:
              "先看「故障排查」和自托管常见问题，它们覆盖了最常见的部署问题。如果仍未解决，请通过支持表单把详细信息发给我们（版本、部署方式和相关日志），我们会协助排查。",
            links: [
              { label: "故障排查", href: `${DOCS}/self-host/operations/troubleshooting` },
              { label: "自托管常见问题", href: `${DOCS}/self-host/faq` },
              { label: "联系支持", href: CONTACT_URL },
            ],
          },
        ],
      },
      {
        id: "models-knowledge",
        title: "模型、知识库与工具",
        items: [
          {
            question: "可以接入哪些模型？",
            answer:
              "可通过 Ollama、vLLM 或任意兼容 OpenAI 接口的网关接入本地开源模型，也可连接 OpenAI、Anthropic、Gemini、Azure OpenAI 等商业 API。模型与 Token 配额可按团队、智能体和工作流分配。",
            links: [{ label: "模型供应商", href: `${DOCS}/usage/guides/models/providers` }],
          },
          {
            question: "智能体找不到、或引用错了文档里的内容。",
            answer:
              "检索效果取决于文档如何分块，以及检索如何配置。请检查这两项，参考知识库优化指南，并用几个有代表性的问题反复测试。",
            links: [
              { label: "文档分块", href: `${DOCS}/usage/guides/knowledge/chunking` },
              { label: "检索", href: `${DOCS}/usage/guides/knowledge/retrieval` },
              { label: "优化建议", href: `${DOCS}/usage/best-practices/kb-optimization` },
            ],
          },
          {
            question: "智能体能和内部系统协同吗？",
            answer:
              "可以。智能体可以使用内置工具、自定义工具、MCP 服务和 Skills，工作流也可以通过 Webhook 接入现有的自动化链路。",
            links: [
              { label: "工具", href: `${DOCS}/usage/guides/tools` },
              { label: "MCP", href: `${DOCS}/usage/guides/tools/mcp` },
            ],
          },
        ],
      },
      {
        id: "access-security",
        title: "团队、权限与安全",
        items: [
          {
            question: "如何控制谁能查看、修改什么？",
            answer:
              "Clouisle 以团队作为资源边界，支持角色、RBAC、SSO、API Key 与审计日志。个人会话和草稿默认保持私有，直到你主动共享。",
            links: [
              { label: "角色与权限", href: `${DOCS}/usage/guides/administration/roles-permissions` },
              { label: "安全机制", href: "/zh/security" },
            ],
          },
          {
            question: "如何配置 SSO 或 API Key？",
            answer:
              "二者都在管理后台中配置。API Key 可以限定到特定的智能体或工作流，并设置有效期和请求频率上限。",
            links: [
              { label: "SSO", href: `${DOCS}/usage/guides/administration/sso` },
              { label: "API Key", href: `${DOCS}/usage/guides/administration/api-keys` },
            ],
          },
          {
            question: "我被锁在账号外了，或者已经没有人拥有管理员权限。",
            answer:
              "你所在组织的管理员可以在用户管理中处理成员账号。如果已经没有管理员能够登录，请通过支持表单把部署信息发给我们，我们会协助你找到最稳妥的恢复方式。",
            links: [
              { label: "用户管理", href: `${DOCS}/usage/guides/administration/user-management` },
              { label: "联系支持", href: CONTACT_URL },
            ],
          },
          {
            question: "如何报告安全问题？",
            answer: "请不要公开提交 Issue。请直接发邮件给我们并附上详细信息，我们会私下回复。",
            links: [{ label: "yunhai@yhnotes.com", href: "mailto:yunhai@yhnotes.com" }],
          },
        ],
      },
    ],
  },
  support: {
    eyebrow: "仍然没解决？",
    title: "和真人聊聊。",
    description: "不是所有问题都适合写进 FAQ。选择最符合你情况的入口，我们会把它转给合适的人。",
    routes: [
      {
        tag: "支持表单",
        title: "部署与使用协助",
        description: "卡在部署、配置，或某个工作流怎么都不对？告诉我们你试过什么，我们会帮你继续往前走。",
        action: "填写支持表单",
        href: CONTACT_URL,
        primary: true,
      },
      {
        tag: "支持表单",
        title: "方案、授权与企业版",
        description: "关于商业使用、服务支持或企业版、SSO、合规与 SLA 的问题？留下你的信息，我们会与你联系。",
        action: "联系我们",
        href: CONTACT_URL,
        primary: true,
      },
      {
        tag: "GITHUB",
        title: "缺陷与功能建议",
        description: "发现了缺陷，或有新的想法？公开的 Issue 对所有人都有帮助，讨论也更透明。",
        action: "提交 GitHub Issue",
        href: "https://github.com/clouisle/Clouisle/issues",
      },
      {
        tag: "邮件",
        title: "安全与隐私",
        description: "请私下报告安全漏洞或隐私问题，这类问题请避免使用公开 Issue。",
        action: "发送邮件",
        href: "mailto:yunhai@yhnotes.com",
      },
    ],
    checklistTitle: "附上这些信息，我们能更快帮到你。",
    checklist: [
      "Clouisle 版本，以及部署方式（Docker Compose、Kubernetes 等）",
      "你期望的结果，以及实际发生了什么",
      "复现步骤，或涉及的页面与功能",
      "相关日志或错误信息",
      "你希望我们如何联系你",
    ],
    checklistNote: "请勿提交密码、API Key 或令牌，日志中如有请先删除。",
  },
};
