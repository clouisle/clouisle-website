import type { HelpPageTranslations } from "../types";
import { CONTACT_URL } from "../../seo";

const DOCS = "https://docs.clouisle.asia/en";

export const en: HelpPageTranslations = {
  title: "Help",
  description:
    "Most questions are answered below. For everything else, tell us what's going on and a real person will take it from there.",
  jump: {
    label: "On this page",
    start: "Start here",
    faq: "Common questions",
    support: "Contact support",
  },
  start: {
    eyebrow: "START HERE",
    title: "Find your way in.",
    linkLabel: "Read the docs",
    items: [
      {
        title: "Quick start",
        description: "Sign in, pick a team, confirm a model, and run your first agent conversation.",
        href: `${DOCS}/usage/quick-start`,
      },
      {
        title: "Deploy it yourself",
        description: "Docker Compose, Kubernetes, Sealos, or from source, plus configuration, upgrades, and backups.",
        href: `${DOCS}/self-host/deploy`,
      },
      {
        title: "Build agents and workflows",
        description: "Create agents, connect knowledge and tools, and orchestrate workflows you can publish.",
        href: `${DOCS}/usage/guides`,
      },
      {
        title: "Call the API",
        description: "Create an API key, send a chat request, and handle streaming responses and errors.",
        href: `${DOCS}/api/get-started`,
      },
    ],
  },
  faq: {
    eyebrow: "COMMON QUESTIONS",
    title: "Quick answers.",
    description:
      "The questions we hear most, with a link to the full guide whenever there's more to read.",
    groups: [
      {
        id: "getting-started",
        title: "Getting started",
        items: [
          {
            question: "Where should I begin?",
            answer:
              "Follow the quick start: sign in, choose a team, confirm a model is available, then run your first agent conversation. Once that works, the concept pages on agents, knowledge bases, and workflows explain how the pieces fit together.",
            links: [
              { label: "Quick start", href: `${DOCS}/usage/quick-start` },
              { label: "Core concepts", href: `${DOCS}/usage/concepts` },
            ],
          },
          {
            question: "What's the difference between an agent and a workflow?",
            answer:
              "An agent understands a goal, plans its steps, retrieves knowledge, and calls tools. A workflow turns a process you have already defined into repeatable steps. Many teams use agents for open-ended work and workflows for the parts that should run the same way every time.",
            links: [
              { label: "Agents", href: `${DOCS}/usage/concepts/agent` },
              { label: "Workflows", href: `${DOCS}/usage/concepts/workflow` },
            ],
          },
          {
            question: "Is Clouisle free to use?",
            answer:
              "The core platform is open source under GPL-3.0. You can download, deploy, and customize it, and use it internally in commercial environments while complying with the license. Support and Enterprise plans add professional help and advanced capabilities.",
            links: [
              { label: "GitHub repository", href: "https://github.com/clouisle/Clouisle" },
              { label: "Ask about plans", href: CONTACT_URL },
            ],
          },
        ],
      },
      {
        id: "deployment",
        title: "Deployment and operations",
        items: [
          {
            question: "How can I deploy Clouisle?",
            answer:
              "On your own servers, in a private cloud, or on Kubernetes. The docs walk through Docker Compose, Kubernetes, Sealos, and running from source.",
            links: [{ label: "Deployment guides", href: `${DOCS}/self-host/deploy` }],
          },
          {
            question: "Can it run in an offline or air-gapped network?",
            answer:
              "Yes. With local models, embedding models, and a local vector database, nothing needs a public connection. Requests only leave your network if you configure an external model or API.",
            links: [{ label: "Architecture", href: `${DOCS}/self-host/architecture` }],
          },
          {
            question: "Where do I find configuration options and environment variables?",
            answer:
              "The self-hosting docs list every environment variable, and the reference section covers site settings, rate limits, and permissions.",
            links: [
              { label: "Environment variables", href: `${DOCS}/self-host/configuration/environment-variables` },
              { label: "Reference", href: `${DOCS}/reference` },
            ],
          },
          {
            question: "How do I upgrade or back up my deployment?",
            answer:
              "Read the upgrade and backup guides before changing versions, and check the release notes for anything that affects your setup.",
            links: [
              { label: "Upgrade", href: `${DOCS}/self-host/operations/upgrade` },
              { label: "Backup and recovery", href: `${DOCS}/self-host/operations/backup-recovery` },
              { label: "Release notes", href: "/en/release-notes" },
            ],
          },
          {
            question: "Something isn't working after deployment. What should I check?",
            answer:
              "Start with the troubleshooting guide and the self-hosting FAQ; they cover the most common setup problems. If you're still stuck, send us the details through the support form (your version, how you deployed, and any logs) and we'll take a look.",
            links: [
              { label: "Troubleshooting", href: `${DOCS}/self-host/operations/troubleshooting` },
              { label: "Self-hosting FAQ", href: `${DOCS}/self-host/faq` },
              { label: "Contact support", href: CONTACT_URL },
            ],
          },
        ],
      },
      {
        id: "models-knowledge",
        title: "Models, knowledge, and tools",
        items: [
          {
            question: "Which models can I connect?",
            answer:
              "Local open-source models through Ollama, vLLM, or any OpenAI-compatible gateway, and commercial APIs such as OpenAI, Anthropic, Gemini, and Azure OpenAI. Models and token quotas can be assigned by team, agent, and workflow.",
            links: [{ label: "Model providers", href: `${DOCS}/usage/guides/models/providers` }],
          },
          {
            question: "My agent can't find, or misquotes, information from my documents.",
            answer:
              "Retrieval quality depends on how documents are chunked and how retrieval is configured. Review both, follow the knowledge base optimization guide, and test with a few representative questions.",
            links: [
              { label: "Chunking", href: `${DOCS}/usage/guides/knowledge/chunking` },
              { label: "Retrieval", href: `${DOCS}/usage/guides/knowledge/retrieval` },
              { label: "Optimization tips", href: `${DOCS}/usage/best-practices/kb-optimization` },
            ],
          },
          {
            question: "Can agents work with our internal systems?",
            answer:
              "Yes. Agents can use built-in tools, custom tools, MCP servers, and Skills, and workflows can join existing automation through Webhooks.",
            links: [
              { label: "Tools", href: `${DOCS}/usage/guides/tools` },
              { label: "MCP", href: `${DOCS}/usage/guides/tools/mcp` },
            ],
          },
        ],
      },
      {
        id: "access-security",
        title: "Teams, access, and security",
        items: [
          {
            question: "How do I control who can see and change what?",
            answer:
              "Clouisle uses the team as the resource boundary, with roles, RBAC, SSO, API keys, and audit logs. Personal conversations and drafts stay private until you choose to share them.",
            links: [
              { label: "Roles and permissions", href: `${DOCS}/usage/guides/administration/roles-permissions` },
              { label: "How security works", href: "/en/security" },
            ],
          },
          {
            question: "How do I set up SSO or API keys?",
            answer:
              "Both are managed from the admin area. API keys can be limited to specific agents or workflows, an expiry time, and a request rate.",
            links: [
              { label: "SSO", href: `${DOCS}/usage/guides/administration/sso` },
              { label: "API keys", href: `${DOCS}/usage/guides/administration/api-keys` },
            ],
          },
          {
            question: "I'm locked out, or nobody has admin access anymore.",
            answer:
              "An administrator in your organization can manage members from user management. If no administrator can sign in, send us a request through the support form with your deployment details and we'll help you work out the safest way back in.",
            links: [
              { label: "User management", href: `${DOCS}/usage/guides/administration/user-management` },
              { label: "Contact support", href: CONTACT_URL },
            ],
          },
          {
            question: "How do I report a security issue?",
            answer:
              "Please don't open a public issue. Email us directly with the details so we can respond privately.",
            links: [{ label: "yunhai@yhnotes.com", href: "mailto:yunhai@yhnotes.com" }],
          },
        ],
      },
    ],
  },
  support: {
    eyebrow: "STILL STUCK?",
    title: "Talk to a person.",
    description:
      "Not everything fits in an FAQ. Pick the route that matches your situation and we'll get it to the right place.",
    routes: [
      {
        tag: "SUPPORT FORM",
        title: "Deployment and usage help",
        description:
          "Stuck on setup, configuration, or a workflow that won't behave? Tell us what you tried and we'll help you move forward.",
        action: "Open the support form",
        href: CONTACT_URL,
        primary: true,
      },
      {
        tag: "SUPPORT FORM",
        title: "Plans, licensing, and Enterprise",
        description:
          "Questions about commercial use, Support or Enterprise plans, SSO, compliance, or SLAs? Leave your details and we'll be in touch.",
        action: "Talk to us",
        href: CONTACT_URL,
        primary: true,
      },
      {
        tag: "GITHUB",
        title: "Bugs and feature requests",
        description:
          "Found a defect or have an idea? Public issues help everyone and keep the discussion in the open.",
        action: "Open a GitHub issue",
        href: "https://github.com/clouisle/Clouisle/issues",
      },
      {
        tag: "EMAIL",
        title: "Security and privacy",
        description:
          "Report a vulnerability or a privacy concern privately. Please avoid public issues for these.",
        action: "Email us",
        href: "mailto:yunhai@yhnotes.com",
      },
    ],
    checklistTitle: "Include these and we can help faster.",
    checklist: [
      "Your Clouisle version and how you deployed it (Docker Compose, Kubernetes, and so on)",
      "What you expected, and what happened instead",
      "The steps to reproduce it, or the page and feature involved",
      "Relevant logs or error messages",
      "How you'd like us to reach you",
    ],
    checklistNote: "Never share passwords, API keys, or tokens. Remove them from logs first.",
  },
};
