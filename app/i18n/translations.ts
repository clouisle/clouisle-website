export type Locale = "en" | "zh";

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
  };
  work: {
    title: string;
  };
  privacy: {
    title: string;
    description1: string;
    description2: string;
    learnMore: string;
  };
  finalCta: {
    title: string;
    download: string;
    availability: string;
  };
  footer: {
    copyright: string;
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
      tagline: "A browser you won't dread opening.",
      download: "Download",
      trialNote: "Includes 14 day free trial of Better Days",
      watchScream: "Watch the scream",
    },
    reads: {
      title: "Dia reads between the tabs",
    },
    work: {
      title: "Built for how you actually work",
    },
    privacy: {
      title: "Privacy first with you in control",
      description1:
        "You control whether Dia remembers your preferences and which tools connect to your workflow. Your data is never sold or used to build ad profiles -- and with Sync, it's end-to-end encrypted.",
      description2:
        "Dia for Work adds the guardrails that your team needs, like SSO and admin tools, so your team can stay secure.",
      learnMore: "Learn more about privacy in Dia",
    },
    finalCta: {
      title: "Ready for a better day?",
      download: "Download Dia",
      availability: "Currently available on Apple macOS 14+ with M1 chips or later.",
    },
    footer: {
      copyright: "Copyright 2026 The Browser Company of New York.",
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
    language: {
      switchTo: "中文",
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
      tagline: "一款你不会害怕打开的浏览器。",
      download: "下载",
      trialNote: "包含 Better Days 14 天免费试用",
      watchScream: "观看尖叫视频",
    },
    reads: {
      title: "Dia 在标签页之间阅读",
    },
    work: {
      title: "为你实际的工作方式而建",
    },
    privacy: {
      title: "隐私优先，由你掌控",
      description1:
        "你可以控制 Dia 是否记住你的偏好，以及哪些工具连接到你的工作流。你的数据绝不会被出售或用于构建广告档案——而且通过 Sync，它是端到端加密的。",
      description2:
        "Dia for Work 为你的团队提供了所需的护栏，如 SSO 和管理工具，让你的团队保持安全。",
      learnMore: "了解更多关于 Dia 隐私的信息",
    },
    finalCta: {
      title: "准备好迎接更美好的一天了吗？",
      download: "下载 Dia",
      availability: "目前支持 Apple macOS 14+ 及 M1 芯片或更高版本。",
    },
    footer: {
      copyright: "Copyright 2026 The Browser Company of New York.",
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
    language: {
      switchTo: "English",
    },
  },
};
