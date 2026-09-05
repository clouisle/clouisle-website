import type { HomeTranslations } from "../types";

export const zh: HomeTranslations = {
  nav: {
    features: "新功能",
    security: "安全性",
    docs: "文档",
  },
  mobile: {
    download: "联系我们",
  },
  hero: {
    tagline: "想得到的 做得到的 都在这里",
    download: "体验演示",
    trialNote: "100% 开源，免费使用。",
    watchVideo: "观看视频",
  },
  useCases: {
    title: "懂你所知\n更懂如何做到",
    cases: [
      {
        title: "从一句话开始，让事情有下一步。",
        description:
          "把目标交给智能体。它理解你的上下文，判断真正要做什么，调用合适的工具，让工作继续向前。",
      },
      {
        title: "重复的工作，不必再重复交接。",
        description:
          "把智能体、工具和审批节点串成一条清晰的流程，让任务从触发到完成自动推进，过程始终可追踪。",
      },
      {
        title: "不用翻遍资料，也能找到答案。",
        description:
          "直接向文档、系统和业务知识提问，在需要的时候找到相关信息，让每个答案都建立在正确的上下文之上。",
      },
    ],
  },
  features: {
    title: "为你实际的工作方式而建",
    items: [
      {
        label: "智能体",
        title:
          "向 Clouisle 交代一件事，它会读懂你的问题、查找相关知识、调用所需工具，再把结果带回来——不只是回答，而是把工作往前推进。",
      },
      {
        label: "知识库",
        title:
          "把散落在文档、表格和手册里的内容交给 Clouisle，它们会变成随时可问、可引用的答案——不用再记得资料到底藏在哪个文件夹。",
      },
      {
        label: "模型",
        title:
          "为不同任务选最合适的模型，Clouisle 会把模型、参数和权限统一管好——不用为了换一个模型，把整个工作重新搭一遍。",
      },
      {
        label: "工具连接",
        title:
          "接入你已经在使用的系统，Clouisle 就能从“知道该做什么”变成“真的去做”——查数据、处理文件、调用接口，都在同一件工作里完成。",
      },
      {
        label: "工作流",
        title:
          "把一套做对过的流程画下来，Clouisle 就能在需要时自动跑起来——定时执行、收到请求就开始，或在每个关键步骤后继续往下走。",
      },
      {
        label: "团队协作",
        title:
          "把智能体、知识和流程交给整个团队，同时保留每个人该有的边界——谁能使用、谁能修改、发生过什么，都清楚可查。",
      },
    ],
    inClouisle: "在 Clouisle 中",
  },
  privacy: {
    title: "数据不出域　决策不离心",
    description1:
      "你可以将 Clouisle 部署在自己的服务器、私有云或 Kubernetes 集群中，决定数据存储在哪里、使用哪些模型、连接哪些工具，以及谁可以访问。智能体、知识库和工作流都运行在你掌控的基础设施内；是否连接外部模型或服务，也完全由你配置。",
    description2:
      "Clouisle 为团队提供 SSO、RBAC、API 密钥管理和审计日志等安全护栏，让 AI 在符合组织权限、网络边界和合规要求的环境中运行。",
    learnMore: "了解 Clouisle 如何保护你的数据",
    toggles: ["私有化部署", "网络隔离", "单点登录", "角色权限", "审计日志"],
    on: "开",
    off: "关",
  },
  workflowLoop: {
    eyebrow: "完整闭环",
    title: "从信息到行动，每一步都在你的边界内发生",
    description:
      "数据留在自控的基础设施内之后，Clouisle 将感知、理解、决策与执行串联为连续、可控且随时可追溯的工作闭环。",
    steps: [
      {
        step: "01",
        title: "汇入",
        subtitle: "把散落的信息集中起来",
        description:
          "文档、经验、表格、内部系统数据与会议记录统一进入安全工作空间，无需将敏感上下文外泄给外部平台。",
        tag: "统一知识库",
      },
      {
        step: "02",
        title: "理解",
        subtitle: "让知识可检索、可引用",
        description:
          "通过本地向量检索与全文检索，智能体能快速定位精准上下文，回答不仅有理有据，还保留可溯源的依据标注。",
        tag: "混合检索",
      },
      {
        step: "03",
        title: "判断",
        subtitle: "按任务选择最合适模型",
        description:
          "模型、参数、提示词和权限由团队自主决策。灵活调度私有化开源大模型或外部授权接口，摆脱单一平台绑定。",
        tag: "多模型治理",
      },
      {
        step: "04",
        title: "执行",
        subtitle: "把想法转化为可复用流程",
        description:
          "智能体主动拆解复杂目标、规划行动步骤并调用系统工具，不再停留在聊天建议，而是真正驱动事情向前推进。",
        tag: "AI 智能体",
      },
      {
        step: "05",
        title: "连接",
        subtitle: "打通真实生产业务系统",
        description:
          "直接连接内部 REST API、数据库、代码仓、飞书与工单系统，减少繁琐的跨系统复制粘贴，让指令直接落地。",
        tag: "工具连接",
      },
      {
        step: "06",
        title: "协作",
        subtitle: "在关键节点保留人类决策权",
        description:
          "通过权限分级与审批护栏，确保 AI 在组织规则内协作推进；涉及关键数据或线上操作时，决策权始终由人把控。",
        tag: "人机协同",
      },
      {
        step: "07",
        title: "追溯",
        subtitle: "完整留痕，清晰可审计",
        description:
          "每次模型推理、检索片段、工具执行与审批操作均被不可篡改地记录，满足企业级安全合规、复盘与持续调优需求。",
        tag: "审计日志",
      },
    ],
    closing: "Clouisle 让完整的工作闭环始终可见、可控，并且真正属于你的团队。",
  },
  faq: {
    eyebrow: "常见问题解答",
    title: "关于 Clouisle，你想了解的都在这里",
    description:
      "关于私有化部署模式、数据隐私保护、模型兼容性与企业安全权限的详细解答。",
    items: [
      {
        question: "Clouisle 如何真正做到“数据不出域”？",
        answer:
          "Clouisle 完全支持私有化部署。你可以将它直接部署在自有服务器、本地数据中心或私有 Kubernetes 集群中。向量数据库、文件存储、元数据与工作流执行都在你的网络边界内运行。除非你显式配置外部模型 API，否则没有任何数据会上传至外部服务器。",
      },
      {
        question: "是否支持在完全离线 / 物理隔离（Air-gapped）环境运行？",
        answer:
          "支持。当配合本地运行的开源大模型（如通过 Ollama、vLLM 接入 DeepSeek、Qwen、Llama 等）和本地向量嵌入模型时，Clouisle 可以在完全不连接公网的纯内网隔离环境中稳定运行。",
      },
      {
        question: "支持接入哪些大语言模型和底层框架？",
        answer:
          "Clouisle 支持所有主流模型接入方式：本地开源模型（DeepSeek、Qwen、Llama 3、Mistral 等）、私有云模型网关，以及公有云商业接口（OpenAI、Azure OpenAI、Anthropic 等）。你可以为不同部门、智能体或工作流分配专属模型与 Token 配额。",
      },
      {
        question: "包含哪些企业级安全与权限合规功能？",
        answer:
          "Clouisle 原生提供企业级单点登录（支持 OIDC、SAML、OAuth2 等）、基于角色的细粒度访问控制（RBAC）、工作空间网络隔离、密钥加密托管，以及所有操作和交互的全链路安全审计日志。",
      },
      {
        question: "Clouisle 开源版本支持商用吗？是否有隐藏限制？",
        answer:
          "Clouisle 核心平台基于 GNU General Public License v3.0 (GPL-3.0) 协议开源，完全透明。团队与企业可以在遵守开源协议的前提下自由下载、部署、定制并在内部商业环境中免费使用。",
      },
    ],
  },
  plans: {
    title: "准备好把想法变成结果了吗？",
    featuresTitle: "核心能力",
    items: [
      {
        name: "Community",
        description: "适合开源爱好者、独立开发者及非商业项目。",
        action: "立即开始",
        href: "https://docs.clouisle.asia/self-host",
        secondaryAction: "喜欢 Clouisle？去 GitHub 点个 Star",
        secondaryHref: "https://github.com/clouisle/Clouisle",
        features: [
          "公开仓库下发布的所有核心功能",
          "单个工作空间",
          "遵循 Clouisle 开源许可协议",
        ],
      },
      {
        name: "服务支持",
        description: "适合需要专业服务支持，但不需要完整企业版功能的团队。",
        action: "联系我们",
        href: "https://kcn74mk3dg4m.feishu.cn/share/base/form/shrcnJTjTbFSYWXmokJjGA3dLUf",
        features: [
          "部署与接入指导",
          "使用咨询与问题排查",
          "面向现有能力的专业支持",
        ],
      },
      {
        name: "企业版",
        description: "适合需要高级安全、合规、治理与专属支持的企业。",
        action: "联系我们",
        href: "https://kcn74mk3dg4m.feishu.cn/share/base/form/shrcnJTjTbFSYWXmokJjGA3dLUf",
        features: [
          "企业级可扩展部署解决方案",
          "商业许可授权",
          "专属企业功能",
          "多工作空间与企业管理",
          "SSO",
          "按企业需求协商 SLA",
          "高级安全与控制",
          "Clouisle 官方提供的更新与维护",
          "专业技术支持",
        ],
      },
    ],
  },
  footer: {
    groups: [
      { title: "产品", links: ["发布说明", "Clouisle", "Cue", "Clouisle Sandbox"] },
      { title: "资源", links: ["帮助", "状态", "隐私", "使用条款", "安全"] },
      { title: "组织", links: ["关于我们", "早期用户计划"] },
      { title: "联系", links: ["邮箱", "GitHub"] },
    ],
  },
  productVideo: {
    close: "关闭视频",
    label: "观看视频",
    videoLabel: "Clouisle 产品视频",
  },
  notice: {
    message: "检测到您的浏览器语言是英文，要切换到英文版吗？",
    action: "切换到 English",
    close: "关闭",
  },
  language: {
    switchTo: "English",
  },
  alt: {
    clouisleInterface: "Clouisle 产品界面",
  },
};
