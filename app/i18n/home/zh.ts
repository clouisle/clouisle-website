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
  faq: {
    eyebrow: "常见问题解答",
    title: "关于 Clouisle，你想了解的都在这里",
    description:
      "从产品定位、部署架构到模型、知识库、协作与商业支持，了解 Clouisle 如何适配不同团队的实际需求。",
    items: [
      {
        question: "Clouisle 是什么，适合解决哪些问题？",
        answer:
          "Clouisle 是一个面向团队的开源 AI 平台，把智能体、知识库、模型、工具连接和工作流放在同一处。它适合希望把 AI 接入真实业务、减少重复操作，并同时掌握数据与部署边界的个人开发者、创业团队和企业组织。",
      },

      {
        question: "Clouisle 支持哪些部署方式，能否原生分布式扩展？",
        answer:
          "Clouisle 支持部署在自有服务器、本地数据中心、私有云和 Kubernetes 集群中，可在多节点环境中根据访问量、任务量和模型服务负载扩展计算与执行能力。高可用、节点数量、存储和 GPU 规划需要结合你的现有基础设施与业务规模评估。",
      },
      {
        question: "敏感数据能否完全留在内网或物理隔离环境？",
        answer:
          "可以。配合本地模型、嵌入模型和向量数据库，Clouisle 可在无公网连接的内网或 Air-gapped 环境运行。只有你主动配置外部模型或 API 时，相关请求才会离开网络边界。",
      },
      {
        question: "支持哪些模型、模型网关和框架？",
        answer:
          "支持本地开源模型和兼容标准接口的模型服务，包括通过 Ollama、vLLM 或其他 OpenAI-compatible 网关接入 DeepSeek、Qwen、Llama、Mistral 等，也可连接 OpenAI、Anthropic、Gemini、Azure OpenAI 等商业 API。你可以按团队、智能体和工作流分配模型与 Token 配额。",
      },
      {
        question: "知识库能处理哪些资料，回答是否可追溯？",
        answer:
          "你可以将文档、表格、手册、会议记录和内部系统资料集中到知识库，通过向量检索与全文检索提供可引用、可追溯的上下文。实际支持的格式与同步方式可以按照现有数据源和部署方案配置。",
      },
      {
        question: "智能体、工作流和现有业务系统如何协同？",
        answer:
          "智能体负责理解目标、规划步骤、检索知识和调用工具；工作流负责把明确流程编排为可重复执行的步骤。Clouisle 还可以连接内部 REST API、数据库、代码仓、文件与业务系统，并通过 Webhook 接入现有自动化链路。",
      },
      {
        question: "如何管理团队权限，个人工作能和团队协作共存吗？",
        answer:
          "可以。Clouisle 以团队作为唯一的资源边界，支持成员角色、RBAC、SSO、API Key、密钥管理和审计日志。个人会话、知识和草稿默认保持在个人范围内，准备好后再按权限共享到团队；智能体与工作流也可以使用独立的自动化身份。",
      },

      {
        question: "开源版本能否商用，没有 AI 或 DevOps 团队能获得哪些支持？",
        answer:
          "Clouisle 核心平台基于 GPL-3.0 开源，团队可以在遵守许可证的前提下下载、部署、定制并在内部商业环境中使用。可以从 Community 版本开始自助部署，也可以选择 Support 获得部署接入指导、使用咨询和问题排查；有更高级安全、合规、扩展和 SLA 要求的组织可以联系 Clouisle 评估 Enterprise 方案。",
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
          "一个团队",
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
          "多团队与企业管理",
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
