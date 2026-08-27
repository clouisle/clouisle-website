export type Locale = "en" | "zh";
export const locales = ["en", "zh"] as const;

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}


export type Translations = {
  nav: {
    features: string;
    security: string;
    reports: string;
  };
  mobile: {
    download: string;
    watchTrailer: string;
  };
  hero: {
    tagline: string;
    download: string;
    trialNote: string;
    watchScream: string;
  };
  reads: {
    title: string;
    cases: {
      title: string;
      description: string;
    }[];
  };
  work: {
    title: string;
    features: {
      label: string;
      title: string;
    }[];
    inDia: string;
  };
  privacy: {
    title: string;
    description1: string;
    description2: string;
    learnMore: string;
    toggles: string[];
    on: string;
    off: string;
  };
  finalCta: {
    title: string;
    featuresTitle: string;
    plans: {
      name: string;
      price: string;
      period: string;
      description: string;
      action: string;
      features: string[];
    }[];
    availability: string;
  };
  footer: {
    copyright: string;
    groups: {
      title: string;
      links: string[];
    }[];
  };
  film: {
    close: string;
    label: string;
    screamLabel: string;
  };
  downloadNotice: {
    text: string;
    dismiss: string;
  };
  notice: {
    message: string;
    action: string;
    close: string;
  };
  alt: {
    diaInterface: string;
    featureInDia: string;
  };
  language: {
    switchTo: string;
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      features: "What's New",
      security: "Security",
      reports: "Introducing Reports",
    },
    mobile: {
      download: "Download Dia",
      watchTrailer: "Watch the trailer video",
    },
    hero: {
      tagline: "Your company's brain and hands, finally in one place.",
      download: "Try Demo",
      trialNote: "100% open source & free to use.",
      watchScream: "Watch the scream",
    },
    reads: {
      title: "Know you. Know how.",
      cases: [
        {
          title: "Start with a sentence. Get to the next step.",
          description:
            "Give an agent your goal. It understands the context, figures out what needs to happen, and uses the right tools to move the work forward.",
        },
        {
          title: "Stop handing off the work that repeats.",
          description:
            "Connect agents, tools, and approvals into one clear flow, so work moves from trigger to completion with every step traceable.",
        },
        {
          title: "Find the answer without digging through everything.",
          description:
            "Ask across your documents, systems, and business knowledge to find the right context when you need it.",
        },
      ],
    },
    work: {
      title: "Built for how you actually work",
      features: [
        {
          label: "Decks",
          title:
            "Ask Dia for a deck and your scattered context becomes real slides -- headers, layout, and flow you can present without a redesign.",
        },
        {
          label: "Live Work",
          title:
            "Dia pulls together the places where work is actually happening (like GitHub and Notion) in your tab bar. Click once and land directly in the right PR, spec, or draft.",
        },
        {
          label: "Better Meetings",
          title:
            "Every call starts with the right meeting page, agenda, notes, and related docs open, with a gentle countdown so you're on time. All you have to do is show up.",
        },
        {
          label: "Profiles",
          title:
            "Create clean lines between work, freelance, and personal life, with separate tabs, logins, and AI. Context switch between them in just a swipe.",
        },
        {
          label: "Splits",
          title:
            "See a meeting on one side and a doc on the other without juggling windows. Dia remembers your layout, so your favorite setup for recurring 1:1s or focus time is one click away.",
        },
        {
          label: "Organized Tabs",
          title:
            "Keep your workspace tidy by grouping related tabs with appropriate naming, so you see Design Review or Q2 Planning instead of a long strip of unnamed pages.",
        },
      ],
      inDia: "in Dia",
    },
    privacy: {
      title: "Privacy first with you in control",
      description1:
        "You control whether Dia remembers your preferences and which tools connect to your workflow. Your data is never sold or used to build ad profiles -- and with Sync, it's end-to-end encrypted.",
      description2:
        "Dia for Work adds the guardrails that your team needs, like SSO and admin tools, so your team can stay secure.",
      learnMore: "Learn more about privacy in Dia",
      toggles: ["Block trackers", "Personalize new chats", "Memory", "Block ads", "Share content data"],
      on: "On",
      off: "Off",
    },
    finalCta: {
      title: "Ready for a better day?",
      featuresTitle: "Core capabilities",
      plans: [
        {
          name: "Free",
          price: "Free",
          period: "to use",
          description: "Start with the core Clouisle experience and move from idea to outcome.",
          action: "Start for free",
          features: [
            "Agents, knowledge bases, and workflows",
            "Connect the tools you already use",
            "Build your first AI workflow",
          ],
        },
        {
          name: "Plus",
          price: "Monthly",
          period: "subscription",
          description: "More room for deeper, everyday work with Clouisle.",
          action: "Choose Plus",
          features: [
            "Agents, knowledge, and workflows in one place",
            "Model and parameter management",
            "Built for frequent, focused work",
          ],
        },
        {
          name: "Custom",
          price: "On demand",
          period: "pricing",
          description: "A Clouisle setup shaped around your team, permissions, and infrastructure.",
          action: "Talk to us",
          features: [
            "Self-hosted deployment",
            "SSO, RBAC, API keys, and audit logs",
            "Configured around your team workflows",
          ],
        },
      ],
      availability: "Self-host on your own server, private cloud, or Kubernetes cluster.",
    },
    footer: {
      copyright: "Copyright 2026 The Browser Company of New York.",
      groups: [
        { title: "PRODUCT", links: ["FOR WORK", "RELEASE NOTES", "WINDOWS", "STUDENTS", "REPORTS"] },
        { title: "RESOURCES", links: ["HELP", "STATUS", "PRIVACY", "TERMS OF USE", "SECURITY", "TRUST CENTER"] },
        { title: "COMPANY", links: ["ABOUT US", "CAREERS", "NEWSLETTER", "EARLY BIRDS PROGRAM"] },
        { title: "CONNECT", links: ["X", "LINKEDIN", "INSTAGRAM"] },
      ],
    },
    film: {
      close: "Close video",
      label: "Watch the film",
      screamLabel: "Watch the scream video",
    },
    downloadNotice: {
      text: "Dia downloads will be available soon.",
      dismiss: "Dismiss",
    },
    notice: {
      message: "Your browser appears to use Chinese. View this page in Chinese?",
      action: "Switch to Chinese",
      close: "Dismiss",
    },
    language: {
      switchTo: "中文",
    },
    alt: {
      diaInterface: "Dia Browser interface",
      featureInDia: "in Dia",
    },
  },
  zh: {
    nav: {
      features: "新功能",
      security: "安全性",
      reports: "报告功能",
    },
    mobile: {
      download: "下载 Dia",
      watchTrailer: "观看预告片",
    },
    hero: {
      tagline: "想得到的，做得到的，都在这里。",
      download: "体验演示",
      trialNote: "100% 开源，免费使用。",
      watchScream: "观看尖叫视频",
    },
    reads: {
      title: "懂你所知，更懂如何做到。",
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
            "直接向文档、系统和业务知识提问，在需要的时候找到相关信息，让每个答案都建立在正确的上下文之上。"
        },
      ],
    },
    work: {
      title: "为你实际的工作方式而建",
      features: [
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
          label: "工作流",
          title:
            "把一套做对过的流程画下来，Clouisle 就能在需要时自动跑起来——定时执行、收到请求就开始，或在每个关键步骤后继续往下走。",
        },
        {
          label: "工具连接",
          title:
            "接入你已经在使用的系统，Clouisle 就能从“知道该做什么”变成“真的去做”——查数据、处理文件、调用接口，都在同一件工作里完成。",
        },
        {
          label: "模型",
          title:
            "为不同任务选最合适的模型，Clouisle 会把模型、参数和权限统一管好——不用为了换一个模型，把整个工作重新搭一遍。",
        },
        {
          label: "团队协作",
          title:
            "把智能体、知识和流程交给整个团队，同时保留每个人该有的边界——谁能使用、谁能修改、发生过什么，都清楚可查。",
        },
      ],
      inDia: "在 Clouisle 中",
    },
    privacy: {
      title: "数据不出域，决策不离心",
      description1:
        "你可以将 Clouisle 部署在自己的服务器、私有云或 Kubernetes 集群中，决定数据存储在哪里、使用哪些模型、连接哪些工具，以及谁可以访问。智能体、知识库和工作流都运行在你掌控的基础设施内；是否连接外部模型或服务，也完全由你配置。",
      description2:
        "Clouisle 为团队提供 SSO、RBAC、API 密钥管理和审计日志等安全护栏，让 AI 在符合组织权限、网络边界和合规要求的环境中运行。",
      learnMore: "了解 Clouisle 如何保护你的数据",
      toggles: ["阻止追踪器", "个性化新对话", "记忆", "阻止广告", "分享内容数据"],
      on: "开",
      off: "关",
    },
    finalCta: {
      title: "准备好从想法走到结果了吗？",
      featuresTitle: "核心能力",
      plans: [
        {
          name: "Community",
          price: "免费",
          period: "",
          description: "适合开源爱好者、独立开发者及非商业项目。",
          action: "立即开始",
          features: [
            "公开仓库下发布的所有核心功能",
            "单个工作空间",
            "遵循 Clouisle 开源许可协议",
          ],
        },
        {
          name: "服务支持",
          price: "服务支持",
          period: "",
          description: "适合需要专业服务支持，但不需要完整企业版功能的团队。",
          action: "联系团队",
          features: [
            "部署与接入指导",
            "使用咨询与问题排查",
            "面向现有能力的专业支持",
          ],
        },
        {
          name: "企业版",
          price: "定制",
          period: "",
          description: "适合需要高级安全、合规、治理与专属支持的企业。",
          action: "联系销售",
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
      availability: "支持部署在你的服务器、私有云或 Kubernetes 集群中。",
    },
    footer: {
      copyright: "Copyright 2026 The Browser Company of New York.",
      groups: [
        { title: "产品", links: ["工作版", "发布说明", "Windows", "学生", "报告"] },
        { title: "资源", links: ["帮助", "状态", "隐私", "使用条款", "安全", "信任中心"] },
        { title: "公司", links: ["关于我们", "招聘", "通讯", "早期用户计划"] },
        { title: "联系", links: ["X", "LinkedIn", "Instagram"] },
      ],
    },
    film: {
      close: "关闭视频",
      label: "观看影片",
      screamLabel: "观看尖叫视频",
    },
    downloadNotice: {
      text: "Dia 下载即将推出。",
      dismiss: "关闭",
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
      diaInterface: "Dia 浏览器界面",
      featureInDia: "在 Dia 中",
    },
  },
};
