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
    tagline: "Think it Do it All in one place",
    download: "Try Demo",
    trialNote: "100% open source & free to use.",
    watchVideo: "Watch the video",
  },
  useCases: {
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
  features: {
    title: "Built for how you actually work",
    items: [
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
        label: "Models",
        title:
          "Choose the best model for each task, and Clouisle manages models, parameters, and permissions in one place — no need to rebuild your whole setup just to switch a model.",
      },
      {
        label: "Tool connections",
        title:
          "Connect the systems you already use, and Clouisle goes from knowing what to do to actually doing it — pulling data, handling files, and calling APIs within the same piece of work.",
      },
      {
        label: "Workflows",
        title:
          "Sketch a process you've gotten right once, and Clouisle runs it automatically when needed — on a schedule, the moment a request arrives, or step by step after each key milestone.",
      },
      {
        label: "Team collaboration",
        title:
          "Share agents, knowledge, and workflows with the whole team while keeping everyone's boundaries — who can use what, who can change what, and what happened, all clearly traceable.",
      },
    ],
    inClouisle: "in Clouisle",
  },
  privacy: {
    title: "Data stays in your domain. Decisions stay with you.",
    description1:
      "Deploy Clouisle on your own servers, private cloud, or Kubernetes cluster, and decide where data is stored, which models are used, which tools are connected, and who can access them. Agents, knowledge bases, and workflows run inside infrastructure you control; whether to connect external models or services is entirely your call.",
    description2:
      "Clouisle gives teams the guardrails they need, like SSO, RBAC, API key management, and audit logs, so AI runs within your organization's permissions, network boundaries, and compliance requirements.",
    learnMore: "Learn how Clouisle protects your data",
    toggles: ["Private deployment", "Network isolation", "Single sign-on", "Role-based access", "Audit logs"],
    on: "On",
    off: "Off",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Everything you need to know about Clouisle",
    description:
      "From product scope and deployment architecture to models, knowledge, collaboration, and commercial support, see how Clouisle fits different teams.",
    items: [
      {
        question: "What is Clouisle, and what problems does it solve?",
        answer:
          "Clouisle is an open-source AI platform for teams that brings agents, knowledge bases, models, tool connections, and workflows together. It is for individual developers, growing teams, and enterprises that want to put AI into real business work, reduce repetitive operations, and keep control of their data and deployment boundaries.",
      },
      {
        question: "How can Clouisle be deployed, and does it scale natively across nodes?",
        answer:
          "Clouisle can run on your own servers, in a local data center, private cloud, or Kubernetes cluster, and can expand compute and execution capacity across multi-node environments as traffic, task volume, and model-service load grow. High availability, node count, storage, and GPU planning should be evaluated against your existing infrastructure and business scale.",
      },
      {
        question: "Can sensitive data stay entirely inside a private or air-gapped network?",
        answer:
          "Yes. With local models, embedding models, and a local vector database, Clouisle can run without a public internet connection in private or air-gapped environments. Requests leave your network boundary only when you explicitly configure an external model or API.",
      },
      {
        question: "Which models, gateways, and runtimes are supported?",
        answer:
          "Clouisle supports local open-source models and services that expose standard interfaces, including DeepSeek, Qwen, Llama, and Mistral through Ollama, vLLM, or other OpenAI-compatible gateways. It can also connect to commercial APIs such as OpenAI, Anthropic, Gemini, and Azure OpenAI. Models and token quotas can be assigned by team, agent, and workflow.",
      },
      {
        question: "What can the knowledge base handle, and are answers traceable?",
        answer:
          "Bring documents, spreadsheets, manuals, meeting records, and internal system material into the knowledge base. Vector and full-text search provide citable, traceable context for answers. Supported formats and synchronization methods can be configured around your existing sources and deployment plan.",
      },
      {
        question: "How do agents, workflows, and existing business systems work together?",
        answer:
          "Agents understand goals, plan steps, retrieve knowledge, and call tools; workflows turn defined processes into repeatable steps. Clouisle can also connect to internal REST APIs, databases, code repositories, files, and business systems, and join existing automation through Webhooks.",
      },
      {
        question: "How are team permissions managed, and can individual work coexist with collaboration?",
        answer:
          "Yes. Clouisle uses the team as the single resource boundary, with member roles, RBAC, SSO, API keys, secret management, and audit logs. Personal conversations, knowledge, and drafts stay in an individual scope by default and can be shared with a team when ready; agents and workflows can use dedicated automation identities.",
      },
      {
        question: "Can the open-source edition be used commercially, and what support is available without a dedicated AI or DevOps team?",
        answer:
          "The Clouisle core platform is released under GPL-3.0. Teams may download, deploy, customize, and use it internally in commercial environments while complying with the license. You can start with the Community edition, choose Support for deployment and onboarding guidance plus troubleshooting, or contact Clouisle to evaluate an Enterprise plan for higher security, compliance, scale, or SLA requirements.",
      },
    ],
  },
  plans: {
    title: "Ready to go from idea to outcome?",
    featuresTitle: "Core capabilities",
    items: [
      {
        name: "Community",
        description: "For open-source enthusiasts, independent developers, and non-commercial projects.",
        action: "Get started",
        href: "https://docs.clouisle.asia/self-host",
        secondaryAction: "Like Clouisle? Star us on GitHub",
        secondaryHref: "https://github.com/clouisle/Clouisle",
        features: [
          "All core features released in the public repository",
          "A single team",
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
          "Multiple teams and administration",
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
  productVideo: {
    close: "Close video",
    label: "Watch the video",
    videoLabel: "Clouisle product video",
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
    clouisleInterface: "Clouisle interface",
  },
};