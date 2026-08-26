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
    download: string;
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
      title: "Dia reads between the tabs",
      cases: [
        {
          title: "Start your day two steps ahead",
          description:
            "Before the day kicks in, Dia's Morning Brief lays it all out (calendar, inbox, key links) so you know exactly what you're walking into.",
        },
        {
          title: "Synthesis you'll actually use",
          description:
            "Instead of bouncing between tools, just ask Dia. It gathers what's scattered across your tools (Slack, Notion, Calendar, and many more!) and turns it into a report worth sharing.",
        },
        {
          title: "Find the answer without hunting it down",
          description:
            "Ask once. Dia digs into your full context, across GSuite, Slack, tabs, and more, and answers like someone who's seen every thread.",
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
      download: "Download Dia",
      availability: "Currently available on Apple macOS 14+ with M1 chips or later.",
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
      trialNote: "100% open source & free to use.",
      watchScream: "观看尖叫视频",
    },
    reads: {
      title: "Dia 在标签页之间阅读",
      cases: [
        {
          title: "让每一天领先两步",
          description:
            "在一天开始之前，Dia 的晨间简报为你梳理好一切（日历、收件箱、关键链接），让你清楚知道接下来要面对什么。",
        },
        {
          title: "真正实用的综合分析",
          description:
            "不用再在各个工具之间来回切换，直接问 Dia。它能收集散落在你工具中的信息（Slack、Notion、Calendar 等），整理成一份值得分享的报告。",
        },
        {
          title: "无需翻找就能找到答案",
          description:
            "问一次就够了。Dia 深入你的全部上下文，跨越 GSuite、Slack、标签页等，像一个看过所有对话的人一样回答你。",
        },
      ],
    },
    work: {
      title: "为你实际的工作方式而建",
      features: [
        {
          label: "演示文稿",
          title:
            "向 Dia 要一份演示文稿，你散乱的上下文就会变成真正的幻灯片——标题、布局和流程，无需重新设计即可展示。",
        },
        {
          label: "实时工作",
          title:
            "Dia 将工作真正发生的地方（如 GitHub 和 Notion）整合到你的标签栏中。点击一下就能直接进入正确的 PR、规格说明或草稿。",
        },
        {
          label: "更好的会议",
          title:
            "每次通话开始时，正确的会议页面、议程、笔记和相关文档都已打开，还有温和的倒计时让你准时参加。你只需要出现即可。",
        },
        {
          label: "多配置文件",
          title:
            "在工作、自由职业和个人生活之间划清界限，拥有独立的标签页、登录和 AI。只需轻扫即可在它们之间切换上下文。",
        },
        {
          label: "分屏",
          title:
            "一边看会议，一边看文档，无需在窗口之间来回切换。Dia 记住你的布局，所以你可以一键回到定期 1:1 或专注时间的最爱设置。",
        },
        {
          label: "有序标签页",
          title:
            "通过适当命名对相关标签页进行分组，保持工作区整洁，这样你看到的是设计评审或 Q2 规划，而不是长长一串未命名的页面。",
        },
      ],
      inDia: "在 Dia 中",
    },
    privacy: {
      title: "隐私优先，由你掌控",
      description1:
        "你可以控制 Dia 是否记住你的偏好，以及哪些工具连接到你的工作流。你的数据绝不会被出售或用于构建广告档案——而且通过 Sync，它是端到端加密的。",
      description2:
        "Dia for Work 为你的团队提供了所需的护栏，如 SSO 和管理工具，让你的团队保持安全。",
      learnMore: "了解更多关于 Dia 隐私的信息",
      toggles: ["阻止追踪器", "个性化新对话", "记忆", "阻止广告", "分享内容数据"],
      on: "开",
      off: "关",
    },
    finalCta: {
      title: "准备好迎接更美好的一天了吗？",
      download: "下载 Dia",
      availability: "目前支持 Apple macOS 14+ 及 M1 芯片或更高版本。",
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
