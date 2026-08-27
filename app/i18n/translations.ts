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
  securityPage: {
    title: string;
    sections: {
      id: string;
      title: string;
      blocks: (
        | { type: "p"; text: string }
        | { type: "lead"; text: string }
        | { type: "strong"; text: string; body?: string }
        | { type: "list"; items: string[] }
      )[];
    }[];
    faqTitle: string;
    faqs: {
      question: string;
      answer: string[];
    }[];
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
    securityPage: {
      title: "Security",
      sections: [
        {
          id: "keeping-clouisle-secure",
          title: "Keeping Clouisle Secure",
          blocks: [
            { type: "lead", text: "Your browser is your doorway to the internet—work, personal life, and everything in between. Keeping that doorway secure is core to how we design, build, and ship Clouisle." },
            { type: "p", text: "We're a focused team that treats security as a product feature, not an afterthought. Our goal is simple: you shouldn't have to worry that your data is being misused, mishandled, or sold." },
            { type: "strong", text: "Outside security assessments", body: "We work with independent security firms to run regular audits of our products. Each year, we conduct full-scope assessments and schedule point-in-time reviews for new or high-risk features. These engagements include code reviews, architecture analysis, and exploit testing. When appropriate, we publish notable findings and fixes in our Security Bulletins." },
            { type: "strong", text: "Browser engine", body: "Clouisle is built on Chromium—the same open-source engine behind Chrome and Edge—so we inherit a battle-tested foundation and the latest upstream security patches. We prioritize upgrades and keep Clouisle aligned with the newest Chromium releases and hotfixes on an aggressive cadence." },
            { type: "strong", text: "Infrastructure", body: "We restrict production access by role, log and review access regularly, and encrypt data at rest and in transit. We store as little personal data as possible, and we routinely audit what we collect to ensure it stays minimal and appropriate for the service." },
            { type: "strong", text: "How to reach us", body: "If you have questions or see something we should look at, email help@clouisle.com. If you're a security researcher, our bug bounty program welcomes your reports." },
          ],
        },
        {
          id: "bounty-program",
          title: "The Clouisle Bounty Program",
          blocks: [
            { type: "p", text: "We care deeply about safeguarding the security and privacy of everyone who uses our products. We also recognize the security research community's invaluable role in this mission. If you spot a vulnerability, we want to hear about it so we can make things right as soon as possible. Your work helps us build a safer, more secure browsing experience for all." },
            { type: "p", text: "Our Bug Bounty Program runs through HackerOne. Please visit our HackerOne program page to review our program policy, scope, and to submit your findings." },
          ],
        },
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Where does my data live?",
          answer: [
            "By default, your conversations, history, bookmarks, and files are encrypted and stored locally on your device. When you use Clouisle, the data needed to fulfill your request (such as your question and relevant context) is sent through our servers to trusted AI partners, who are contractually restricted from retaining or using your data to train their own models.",
            "When you enable Sync, your data is sent off your device and passes through our servers so that we can sync the data to another device of your choosing. This data is end-to-end encrypted, and our servers cannot read the data.",
          ],
        },
        {
          question: "Do you sell my data?",
          answer: ["Your data is not for sale. We will never sell your personal data. Period. Unlike many of our competitors, we don't collect your browsing data to build ad profiles."],
        },
        {
          question: "Is my data used for training?",
          answer: [
            "The partners we rely on for AI are contractually restricted from retaining and using your data to train their own models. By default, we use some content data to improve Clouisle. This content data isn't tied to your account, is retained for 30 days, and then deleted. You can turn this off at any time in Settings.",
          ],
        },
        {
          question: "What if I want to delete my chats, files, or history?",
          answer: ["When you clear your local chats, files, or history, they are removed from your device. If you choose to share content data with Clouisle, it is not associated with your account and deleted from our servers after 30 days."],
        },
        {
          question: "Is Clouisle safe to use on sensitive sites like banking or healthcare portals?",
          answer: [
            "For your own data and accounts, it's your call. You decide your tolerance for using AI on your bank or personal health portal.",
            "We make a best-effort attempt to keep sensitive sites out of passive features like memory and out of the content data we use to improve Clouisle. That's not a guarantee, and it doesn't apply when you deliberately include a site in a request.",
          ],
        },
        {
          question: "Is Clouisle vulnerable to prompt injections?",
          answer: [
            "Prompt injections happen when a webpage or third party slips instructions into an assistant's context, and the assistant follows those instructions instead of the user's instructions. All AI chat systems face this risk. Our stance is to assume prompt injections may occur and keep you safe through layered controls.",
          ],
        },
      ],
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
      availability: "对比所有服务",
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
    securityPage: {
      title: "安全",
      sections: [
        {
          id: "keeping-clouisle-secure",
          title: "守护 Clouisle 安全",
          blocks: [
            { type: "lead", text: "浏览器是你通往互联网的大门——工作、个人生活，以及其间的一切。守住这扇门的安全，是 Clouisle 设计、构建与发布的核心原则。" },
            { type: "p", text: "我们是一个把安全当作产品特性而非事后补丁的团队。目标很简单：你不必担心自己的数据被滥用、误处理或出售。" },
            { type: "strong", text: "外部安全评估", body: "我们与独立安全公司合作，定期对产品进行审计。每年进行全范围评估，并为新功能或高风险功能安排专项审查。这些工作包括代码评审、架构分析与漏洞利用测试。适当时，我们会在安全公告中公布重要发现与修复。" },
            { type: "strong", text: "浏览器内核", body: "Clouisle 基于 Chromium 构建——与 Chrome 和 Edge 同源的开源内核——因此我们继承了久经验证的基础和最新的上游安全补丁。我们以激进的节奏跟进升级，保持与最新 Chromium 版本和安全热修同步。" },
            { type: "strong", text: "基础设施", body: "我们按角色限制生产环境访问，定期记录并审查访问情况，静态与传输数据全程加密。我们尽可能少地存储个人数据，并例行审计所收集的内容，确保始终最少且恰当。" },
            { type: "strong", text: "联系我们", body: "如有疑问或发现问题，请发送邮件至 help@clouisle.com。如果你是安全研究者，我们的漏洞赏金计划欢迎你的报告。" },
          ],
        },
        {
          id: "bounty-program",
          title: "Clouisle 漏洞赏金计划",
          blocks: [
            { type: "p", text: "我们高度重视每一位用户产品的安全与隐私。我们也深知安全研究社区在这一使命中不可替代的价值。如果你发现漏洞，我们希望第一时间知晓，尽快修正。你的工作帮助我们为所有人构建更安全的浏览体验。" },
            { type: "p", text: "我们的漏洞赏金计划通过 HackerOne 运行。请访问我们的 HackerOne 计划页面了解政策、范围并提交发现。" },
          ],
        },
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "我的数据存在哪里？",
          answer: [
            "默认情况下，你的对话、历史记录、书签和文件都加密存储在你自己的设备上。当你使用 Clouisle 时，完成请求所需的数据（如问题和相关上下文）会经由我们的服务器发送给受信任的 AI 合作方，合同约束他们不得保留你的数据或将其用于训练自己的模型。",
            "开启同步后，你的数据将离开设备并经过我们的服务器，以便同步到你选择的另一台设备。该数据采用端到端加密，我们的服务器无法读取。",
          ],
        },
        {
          question: "你们会出售我的数据吗？",
          answer: ["你的数据不被出售。我们绝不会出售你的个人数据。与其他许多竞争对手不同，我们不会收集你的浏览数据来构建广告画像。"],
        },
        {
          question: "我的数据会被用于训练吗？",
          answer: ["我们依赖的 AI 合作方受合同约束，不得保留你的数据或将其用于训练自己的模型。默认情况下，我们会使用部分内容数据来改进 Clouisle。这些内容数据不与你的账户关联，保留 30 天后删除。你可以随时在设置中关闭。"],
        },
        {
          question: "我想删除聊天、文件或历史记录怎么办？",
          answer: ["清除本地聊天、文件或历史记录时，它们将从你的设备上移除。如果你选择与 Clouisle 分享内容数据，这些数据不与你的账户关联，并会在 30 天后从我们的服务器删除。"],
        },
        {
          question: "在银行或医疗等敏感网站上使用 Clouisle 安全吗？",
          answer: [
            "对于你自己的数据和账户，由你自己决定。你可以自行权衡在银行或个人健康门户网站上使用 AI 的接受度。",
            "我们会尽力让敏感网站远离记忆等被动功能，也不将其纳入用于改进 Clouisle 的内容数据。但这并非保证，且当你主动将某个网站包含进请求时不适用。",
          ],
        },
        {
          question: "Clouisle 会受到提示注入攻击吗？",
          answer: [
            "提示注入是指网页或第三方在助手的上下文中夹带指令，使助手遵循这些指令而非用户的指令。所有 AI 聊天系统都面临这一风险。我们的立场是：假设提示注入可能发生，通过分层防护保持你的安全。",
          ],
        },
      ],
    },
    alt: {
      diaInterface: "Dia 浏览器界面",
      featureInDia: "在 Dia 中",
    },
  },
};
