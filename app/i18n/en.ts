import type { Translations } from "./types";

export const en: Translations = {
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
    title: "Teams and Security",
    sections: [
      {
        id: "team-boundaries",
        title: "It starts with a team",
        blocks: [
          { type: "lead", text: "A team is the context in which people, knowledge, and AI work together. Clouisle gives that context a clear boundary, so collaboration starts with a shared understanding of what belongs together and who is working within it." },
          { type: "p", text: "Boundaries are rarely discussed directly, yet they decide a great deal: where a document can be found, who an agent can act for, and who is affected by a change. Clouisle turns team boundaries into the default rules of the workspace, so these judgements do not have to be renegotiated every time." },
          { type: "p", text: "A boundary is not there to limit collaboration; it exists to make collaboration safe. When the scope of resources and responsibility is clear, a team can focus on the work itself instead of repeatedly asking whether something is ours." },
          { type: "strong", text: "Security begins with a clear sense of belonging.", body: "When resources have an understood home, teams can move quickly without losing sight of what they are responsible for." },
        ],
      },
      {
        id: "roles-permissions",
        title: "Everyone has a place",
        blocks: [
          { type: "lead", text: "Good collaboration does not mean everyone has the same access. Clouisle gives teams a way to express responsibility in the way they already work, keeping ownership, administration, and everyday participation distinct." },
          { type: "p", text: "Within a team, some people create and organize resources, some use them day to day, and some need a view of the whole without operating everything directly. Clouisle follows that natural difference instead of lining everyone up in the same row." },
          { type: "p", text: "Once responsibility is expressed clearly, many things become simpler: who can start, who can change, who can confirm — without relying on spoken agreements. Every action is tied to a clear identity, and teammates can cover for each other more easily." },
          { type: "strong", text: "Clarity makes trust practical.", body: "People should know what they are responsible for, and teams should be able to make those decisions without turning every collaboration into a manual review." },
        ],
      },
      {
        id: "session-isolation",
        title: "From individual to team",
        blocks: [
          { type: "lead", text: "Work is personal before it becomes shared. Conversations, knowledge, and outcomes carry context; Clouisle keeps that context intact so individual work and team collaboration can coexist without making everything visible to everyone." },
          { type: "p", text: "In Clouisle, everyone has their own working space: thoughts in progress, plans not yet settled, and records that concern only the individual. These stay personal by default, instead of being spread across the team or lost in a shared stream." },
          { type: "p", text: "When work is ready to be shared, it moves into the team scope; when someone else needs to take it over, the full context travels with it. Between individual and team, there is a choice rather than a gray zone." },
          { type: "strong", text: "Start with the smallest necessary view.", body: "A wider perspective should be intentional and accountable, not an accidental result of how the workspace is arranged." },
        ],
      },
      {
        id: "authentication",
        title: "A familiar way in",
        blocks: [
          { type: "lead", text: "Every organization has its own way of recognizing people and managing access. Clouisle is designed to fit into that reality, allowing identity and session policies to become part of the team’s existing operating model rather than a separate workflow." },
          { type: "p", text: "Some organizations rely on an existing corporate identity system, some prefer passwords combined with verification, and some have firm requirements about session length. Clouisle does not force a single template; administrators can combine options to match the way their organization already works." },
          { type: "p", text: "Sign-in is only the beginning. How a session continues, how often identity is re-confirmed, and how access is withdrawn when someone leaves — together these details make up the security experience an organization actually feels." },
          { type: "strong", text: "The secure path should feel like part of the work.", body: "Clear identity at the beginning makes collaboration more dependable all the way through." },
        ],
      },
      {
        id: "api-keys",
        title: "An identity for automation",
        blocks: [
          { type: "lead", text: "AI becomes more useful when it can work with the systems around it. That connection also needs an identity of its own. Clouisle treats automation as a participant with a defined purpose, rather than quietly extending a person’s account." },
          { type: "p", text: "When an agent calls a tool, runs a workflow, or reads a knowledge base, the system knows whose identity and what purpose are behind the action. Even when a task needs no human involvement, responsibility still has a clear place to land." },
          { type: "p", text: "Keeping automation separate from personal accounts means nothing breaks when a person’s account changes, and a personal scope is not quietly enlarged by automation. Every connection knows what it serves." },
          { type: "strong", text: "Capability should follow intent.", body: "Every connection should be understandable, limited to its role, and possible to take responsibility for when work moves from people to systems." },
        ],
      },
      {
        id: "audit-notifications",
        title: "Make change traceable",
        blocks: [
          { type: "lead", text: "Responsible teams need more than a record of the final result. They need to understand how work changed over time, especially when resources are shared and decisions are revisited. Clouisle makes that history part of everyday governance." },
          { type: "p", text: "Who adjusted a model connection and when, which agent received a new tool, what part of the knowledge base changed — these details are recorded quietly. They do not interrupt anyone during normal work, and they can be revisited whenever needed." },
          { type: "p", text: "When a change needs to be known, Clouisle reaches out on its own: important updates can appear in the workspace or travel into the channels a team already uses, so everyone learns what happened at the right time." },
          { type: "strong", text: "Visibility turns security into a shared practice.", body: "When change can be understood, teams can learn from it, explain it, and keep improving the way they work." },
        ],
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "How does Clouisle separate resources between teams?",
        answer: ["Clouisle uses the team as the resource boundary. Agents, Workflows, Knowledge Bases, model authorizations, tools, and Skills are created in a team context, and the active team determines which resources the workspace can query or create."],
      },
      {
        question: "Who can see conversations and team data?",
        answer: ["Regular users can see only their own conversations and data. A team-wide view requires admin:dashboard:access or Super Admin; team-scoped conversation queries also require the team owner or administrator role."],
      },
      {
        question: "Can Clouisle fit an existing sign-in policy?",
        answer: ["Yes. Password sign-in, email verification, administrator approval, click CAPTCHA, password policies, password expiration, single-session rules, TOTP, and SSO can be combined. Multiple SSO connections are supported, and administrators can disable password sign-in."],
      },
      {
        question: "How much access does an API key receive?",
        answer: ["An API key can be restricted to specific Agents or Workflows, an expiration time, and a requests-per-minute limit. Users manage their own keys; only Super Admin can view keys across teams. An unrestricted key can access all matching resources."],
      },
      {
        question: "How can administrators investigate a change?",
        answer: ["The admin console records resource operations, actors, and change snapshots, and supports filtering by event, user, team, and time. Notifications can be delivered in-product or through email, DingTalk, WeCom, Feishu, Slack, or Webhook."],
      },
    ],
    docs: {
      label: "Open the complete security documentation",
      href: "https://docs.clouisle.asia",
    },
  },
  alt: {
    diaInterface: "Dia Browser interface",
    featureInDia: "in Dia",
  },
};