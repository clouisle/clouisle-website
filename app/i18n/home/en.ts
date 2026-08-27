import type { HomeTranslations } from "../types";

export const en: HomeTranslations = {
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
  },
  footer: {
    copyright: "Copyright 2026 Clouisle.",
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
};