import type { HomeTranslations } from "../types";

export const en: HomeTranslations = {
  nav: {
    features: "What's New",
    security: "Security",
    docs: "Docs",
  },
  mobile: {
    download: "Contact us",
  },
  hero: {
    tagline: "Think it. Do it. All in one place.",
    download: "Try Demo",
    trialNote: "100% open source & free to use.",
    watchScream: "Watch the scream",
  },
  reads: {
    title: "Know what you know\nknow how to do it.",
    cases: [
      {
        title: "Start with a sentence. Give the work a next step.",
        description:
          "Hand your goal to an agent. It understands your context, works out what really needs to happen, and calls on the right tools to keep the work moving.",
      },
      {
        title: "Repetitive work, without the repeated handoffs.",
        description:
          "Thread agents, tools, and approval steps into one clear flow, so tasks move automatically from trigger to completion, traceable at every step.",
      },
      {
        title: "Find the answer without digging through everything.",
        description:
          "Ask your documents, systems, and business knowledge directly, and surface the right context when you need it — so every answer is built on the right context.",
      },
    ],
  },
  work: {
    title: "Built for how you actually work",
    features: [
      {
        label: "Agents",
        title:
          "Tell Clouisle what you need. It reads your question, finds the relevant knowledge, calls the tools it needs, and brings back the result — not just an answer, but the work moved forward.",
      },
      {
        label: "Knowledge base",
        title:
          "Hand Clouisle the content scattered across documents, spreadsheets, and manuals, and it becomes answers you can ask for and cite anytime — no more remembering which folder the material lives in.",
      },
      {
        label: "Workflows",
        title:
          "Sketch a process you've gotten right once, and Clouisle runs it automatically when needed — on a schedule, the moment a request arrives, or step by step after each key milestone.",
      },
      {
        label: "Tool connections",
        title:
          "Connect the systems you already use, and Clouisle goes from knowing what to do to actually doing it — pulling data, handling files, and calling APIs within the same piece of work.",
      },
      {
        label: "Models",
        title:
          "Choose the best model for each task, and Clouisle manages models, parameters, and permissions in one place — no need to rebuild your whole setup just to switch a model.",
      },
      {
        label: "Team collaboration",
        title:
          "Share agents, knowledge, and workflows with the whole team while keeping everyone's boundaries — who can use what, who can change what, and what happened, all clearly traceable.",
      },
    ],
    inDia: "in Clouisle",
  },
  privacy: {
    title: "Data stays in your domain. Decisions stay with you.",
    description1:
      "Deploy Clouisle on your own servers, private cloud, or Kubernetes cluster, and decide where data is stored, which models are used, which tools are connected, and who can access them. Agents, knowledge bases, and workflows run inside infrastructure you control; whether to connect external models or services is entirely your call.",
    description2:
      "Clouisle gives teams the guardrails they need, like SSO, RBAC, API key management, and audit logs, so AI runs within your organization's permissions, network boundaries, and compliance requirements.",
    learnMore: "Learn how Clouisle protects your data",
    toggles: ["Block trackers", "Personalize new chats", "Memory", "Block ads", "Share content data"],
    on: "On",
    off: "Off",
  },
  finalCta: {
    title: "Ready to go from idea to outcome?",
    featuresTitle: "Core capabilities",
    plans: [
      {
        name: "Community",
        description: "For open-source enthusiasts, independent developers, and non-commercial projects.",
        action: "Get started",
        href: "https://docs.clouisle.asia/self-host",
        features: [
          "All core features released in the public repository",
          "A single workspace",
          "Under the Clouisle open-source license",
        ],
      },
      {
        name: "Support",
        description: "For teams that need professional support without the full Enterprise feature set.",
        action: "Contact us",
        href: "https://kcn74mk3dg4m.feishu.cn/share/base/form/shrcnJTjTbFSYWXmokJjGA3dLUf",
        features: [
          "Deployment and onboarding guidance",
          "Usage consultation and troubleshooting",
          "Professional support for your current capabilities",
        ],
      },
      {
        name: "Enterprise",
        description: "For enterprises that need advanced security, compliance, governance, and dedicated support.",
        action: "Contact us",
        href: "https://kcn74mk3dg4m.feishu.cn/share/base/form/shrcnJTjTbFSYWXmokJjGA3dLUf",
        features: [
          "Enterprise-grade scalable deployment",
          "Commercial license",
          "Dedicated enterprise features",
          "Multiple workspaces and administration",
          "SSO",
          "SLA negotiated to your needs",
          "Advanced security and controls",
          "Updates and maintenance provided by Clouisle",
          "Dedicated technical support",
        ],
      },
    ],
  },
  footer: {
    groups: [
      { title: "PRODUCT", links: ["RELEASE NOTES", "CLOUISLE", "CUE", "CLOUISLE SANDBOX"] },
      { title: "RESOURCES", links: ["HELP", "STATUS", "PRIVACY", "TERMS OF USE", "SECURITY"] },
      { title: "COMPANY", links: ["ABOUT US", "EARLY BIRDS PROGRAM"] },
      { title: "CONNECT", links: ["MAIL", "GITHUB"] },
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
};