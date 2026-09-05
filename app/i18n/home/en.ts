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
  workflowLoop: {
    eyebrow: "The Complete Closed Loop",
    title: "From information to action, entirely within your boundaries.",
    description:
      "Once data is protected within your perimeter, Clouisle connects perception, decision-making, and execution into an unbroken, auditable working loop.",
    steps: [
      {
        step: "01",
        title: "Ingest",
        subtitle: "Unify fragmented knowledge",
        description:
          "Bring documents, spreadsheets, manuals, and internal system data into a secure workspace without leaking context to third parties.",
        tag: "Knowledge Base",
      },
      {
        step: "02",
        title: "Understand",
        subtitle: "Index with semantic precision",
        description:
          "Embed and index information in your local vector database so agents can retrieve verbatim citations and verifiable source grounding.",
        tag: "Hybrid Search",
      },
      {
        step: "03",
        title: "Reason",
        subtitle: "Choose the right models",
        description:
          "Route tasks dynamically across self-hosted open-source weights or authorized external endpoints, keeping model permissions unified.",
        tag: "Model Governance",
      },
      {
        step: "04",
        title: "Execute",
        subtitle: "Autonomous agent execution",
        description:
          "Autonomous agents break goals into actionable steps, invoke authorized tools, and drive progress forward rather than stopping at conversational advice.",
        tag: "AI Agents",
      },
      {
        step: "05",
        title: "Connect",
        subtitle: "Bridge live enterprise systems",
        description:
          "Integrate internal REST APIs, databases, Slack, Git, and custom webhooks so AI interactions turn directly into production business actions.",
        tag: "Tool Connections",
      },
      {
        step: "06",
        title: "Collaborate",
        subtitle: "Keep human judgment in the loop",
        description:
          "Enforce granular approval checkpoints and role-based permissions (RBAC) before high-impact changes are applied to production systems.",
        tag: "Human-in-the-Loop",
      },
      {
        step: "07",
        title: "Audit",
        subtitle: "End-to-end traceability",
        description:
          "Every prompt, retrieved chunk, model inference, tool execution, and approval decision is immutably logged for governance and auditability.",
        tag: "Audit Logs",
      },
    ],
    closing: "Clouisle keeps the full operational loop visible, controllable, and completely yours.",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Everything you need to know about Clouisle",
    description:
      "Clear answers regarding deployment models, data privacy, architecture, and team governance.",
    items: [
      {
        question: "How does Clouisle ensure that data never leaves our domain?",
        answer:
          "Clouisle is fully self-hosted. You deploy it directly on your own hardware, virtual machines, or Kubernetes clusters. Vector databases, file storage, metadata, and task execution run inside your network perimeter. No telemetry or query data is sent to external servers unless you explicitly configure an external model endpoint.",
      },
      {
        question: "Can Clouisle run completely air-gapped without internet access?",
        answer:
          "Yes. When paired with self-hosted LLMs (via Ollama, vLLM, or local OpenAI-compatible runtimes) and local embedding models, Clouisle runs entirely offline in air-gapped or private cloud environments with zero external network dependencies.",
      },
      {
        question: "Which model providers and architectures are supported?",
        answer:
          "Clouisle supports all standard model interfaces: local open-source models (Llama 3, DeepSeek, Qwen, Mistral) via Ollama/vLLM, private cloud endpoints, and commercial APIs (OpenAI, Anthropic, Gemini, Azure OpenAI). You can assign different models and token quotas to specific teams and workflows.",
      },
      {
        question: "What enterprise security and access controls are included?",
        answer:
          "Clouisle provides enterprise-grade Single Sign-On (OIDC/SAML/OAuth2), Role-Based Access Control (RBAC) with granular workspace permissions, API key rotation, encrypted secret storage, and complete audit logging for every agent action and database query.",
      },
      {
        question: "Is Clouisle really 100% open source and free for commercial use?",
        answer:
          "Yes. The core platform is released under the GNU General Public License v3.0 (GPL-3.0). You can deploy, customize, and operate Clouisle internally within your company without licensing fees.",
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