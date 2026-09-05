import type { Metadata } from "next";
import type { Locale } from "./i18n/translations";

export const SITE_URL = "https://clouisle.asia";
export const metadataBase = new URL(SITE_URL);
export const ASSET_BASE_URL = "https://rustfs-endpoint.yhnotes.com/clouisle/clouisle-assets";

export function assetUrl(path: string) {
  return `${ASSET_BASE_URL}/${path}`;
}

export const siteMetadata: Record<
  Locale,
  {
    title: string;
    description: string;
    ogLocale: string;
    imageAlt: string;
    ogImage: string;
    keywords: string[];
    featureList: string[];
  }
> = {
  en: {
    title: "Open-Source AI Workspace for Private Deployment",
    description:
      "Clouisle is an open-source, self-hosted AI workspace for agents, knowledge bases, models, tools, and workflows—keeping data in infrastructure you control.",
    ogLocale: "en_US",
    imageAlt: "Clouisle open-source AI workspace",
    ogImage: assetUrl("og-en.svg"),
    keywords: [
      "open-source AI workspace",
      "self-hosted AI platform",
      "private AI deployment",
      "AI agents",
      "enterprise AI knowledge base",
      "AI workflow automation",
      "Kubernetes AI platform",
      "enterprise AI security",
      "data sovereignty AI",
    ],
    featureList: [
      "AI Agents",
      "Enterprise Knowledge Base",
      "Model Management & Permissions",
      "Tool & System Connections",
      "Automated Workflows",
      "Private Cloud & Kubernetes Deployment",
      "SSO, RBAC & Audit Logs",
    ],
  },
  zh: {
    title: "开源 AI 工作空间｜私有化部署智能体与工作流",
    description:
      "Clouisle 是一个可私有化部署的开源 AI 工作空间，整合智能体、企业知识库、模型、工具连接与工作流，让数据始终留在您掌控的基础设施内。",
    ogLocale: "zh_CN",
    imageAlt: "Clouisle 开源 AI 工作空间",
    ogImage: assetUrl("og-zh.svg"),
    keywords: [
      "开源AI工作空间",
      "私有化部署AI平台",
      "企业AI智能体",
      "企业知识库",
      "AI工作流自动化",
      "私有化AI",
      "数据不出域",
      "Kubernetes部署AI",
      "企业AI安全与合规",
    ],
    featureList: [
      "AI 智能体",
      "企业知识库",
      "多模型管理与权限",
      "工具与系统连接",
      "工作流自动化",
      "私有云与 Kubernetes 部署",
      "单点登录、角色权限与审计日志",
    ],
  },
};

export const pageSeoMetadata: Record<
  Locale,
  Record<string, { title: string; description: string; keywords: string[] }>
> = {
  en: {
    security: {
      title: "Security & Enterprise Guardrails",
      description:
        "Learn how Clouisle protects enterprise data with private deployment, network isolation, SSO, role-based access control (RBAC), and verifiable audit logs.",
      keywords: [
        "enterprise AI security",
        "self-hosted AI guardrails",
        "AI SSO",
        "AI RBAC",
        "AI audit logs",
        "Kubernetes AI security",
      ],
    },
    privacy: {
      title: "Privacy & Data Sovereignty",
      description:
        "Clouisle privacy policy: your data stays in your domain, your infrastructure, and under your control. Zero mandatory third-party data forwarding.",
      keywords: [
        "data sovereignty AI",
        "private AI privacy policy",
        "self-hosted AI compliance",
        "data stays in domain",
      ],
    },
    terms: {
      title: "Terms of Use",
      description:
        "Terms of use and open-source licensing guidelines for Clouisle, the self-hosted AI workspace for teams.",
      keywords: ["Clouisle terms of use", "open source license", "GPL-3.0 AI platform"],
    },
    help: {
      title: "Help & Documentation",
      description:
        "Clouisle help center: deployment guides, agent configuration, knowledge base setup, and answers to common questions about your self-hosted AI workspace.",
      keywords: [
        "Clouisle help",
        "Clouisle documentation",
        "self-hosted AI setup",
        "AI agent configuration",
      ],
    },
    about: {
      title: "About Clouisle",
      description:
        "Learn about Clouisle's mission: building an open-source, private AI workspace where teams and autonomous agents work together securely.",
      keywords: [
        "about Clouisle",
        "open source AI mission",
        "human AI collaboration",
        "private AI workspace",
      ],
    },
  },
  zh: {
    security: {
      title: "安全与企业合规护栏",
      description:
        "了解 Clouisle 如何通过私有化部署、网络隔离、单点登录（SSO）、角色权限控制（RBAC）和审计日志保障企业 AI 数据安全与合规。",
      keywords: [
        "企业AI安全",
        "私有化AI安全护栏",
        "AI单点登录SSO",
        "AI角色权限RBAC",
        "AI审计日志",
        "Kubernetes安全",
      ],
    },
    privacy: {
      title: "隐私政策与数据不出域",
      description:
        "Clouisle 隐私政策：数据不出域、决策不离心。工作空间完全运行在您自控的基础设施中，绝不强制向外部第三方转发数据。",
      keywords: [
        "数据不出域",
        "私有化AI隐私政策",
        "企业AI数据主权",
        "本地化AI安全合规",
      ],
    },
    terms: {
      title: "使用条款",
      description:
        "Clouisle 开源 AI 工作空间的使用条款与开源许可证说明，明确个人使用、团队协作及企业部署规范。",
      keywords: ["Clouisle使用条款", "开源许可证", "GPL-3.0开源协议"],
    },
    help: {
      title: "帮助与文档",
      description:
        "Clouisle 帮助中心：快速上手指引、私有化部署教程、智能体配置与企业知识库接入常见问题解答。",
      keywords: [
        "Clouisle使用帮助",
        "Clouisle文档",
        "私有化AI部署教程",
        "企业知识库配置",
      ],
    },
    about: {
      title: "关于 Clouisle",
      description:
        "了解 Clouisle：致力于探索人与 AI 协作的新方式，打造安全、可控、属于团队自己的开源 AI 工作空间。",
      keywords: [
        "关于Clouisle",
        "开源AI愿景",
        "人与AI协作",
        "私有化AI工作空间",
      ],
    },
  },
};

export function localizedPath(lang: Locale, path: string) {
  return `/${lang}${path === "/" ? "" : path}`;
}

export function localizedAlternates(lang: Locale, path: string) {
  return {
    canonical: localizedPath(lang, path),
    languages: {
      en: localizedPath("en", path),
      "zh-CN": localizedPath("zh", path),
      "x-default": localizedPath("en", path),
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function compactDescription(value: string, maxLength = 160) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}
export function localizedPageMetadata(
  lang: Locale,
  title: string,
  description: string,
  path: string,
  keywords?: string[],
): Metadata {
  const absoluteTitle = `${title} | Clouisle`;
  return {
    title: { absolute: absoluteTitle },
    description,
    keywords,
    alternates: localizedAlternates(lang, path),
    openGraph: {
      title: absoluteTitle,
      description,
    },
    twitter: {
      title: absoluteTitle,
      description,
    },
  };
}

export const CONTACT_URL =
  "https://kcn74mk3dg4m.feishu.cn/share/base/form/shrcnJTjTbFSYWXmokJjGA3dLUf";
