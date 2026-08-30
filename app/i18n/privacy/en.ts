import type { PrivacyPageTranslations } from "../types";

export const en: PrivacyPageTranslations = {
  title: "Privacy",
  overviewTitle: "Your privacy at a glance",
  summary:
    "Clouisle is designed to keep your workspace understandable and under your control. This overview explains what information may be handled, why it is used, and which choices belong to you or your administrator.",
  sections: [
    {
      id: "privacy-control",
      title: "Privacy starts with control",
      content: `Clouisle is built around a simple idea: the people and organizations doing the work should decide how their information is handled.
Depending on how Clouisle is deployed, that control can include the server where information is stored, the models that process it, the services it can connect to, and the people who can access it. Privacy is part of the workspace boundary, not a setting hidden after the work is done.
Your organization's configuration and agreements may add more specific rules.
Your information should stay in a context you understand. Clear ownership and clear configuration make privacy a practical part of everyday work.`,
    },
    {
      id: "information-we-handle",
      title: "Information you put into Clouisle",
      content: `Clouisle handles the information needed to provide the workspace and the AI capabilities you choose to use.
Account and profile details, such as your name, email address, and team membership. Prompts, conversations, files, knowledge bases, and other content you or your team add. Configuration for agents, workflows, models, tools, and connected services. Technical information such as sign-in events, usage records, and error reports needed to operate and protect the service.
**For a self-hosted installation, your administrator determines the infrastructure and storage used for this information.** For a hosted service, Clouisle processes it to provide the service under the applicable agreement.`,
    },
    {
      id: "use-of-information",
      title: "How information is used",
      content: `Information is used to make Clouisle work for you, keep it reliable, and help the people responsible for a workspace govern it.
Authenticate members and apply team permissions. Run agents, workflows, searches, and other features you request. Connect to the models, tools, and services selected by you or your administrator. Monitor reliability, investigate errors, and protect the workspace from misuse. Communicate about service changes, support requests, and important account events.
We do not need your work to build an advertising profile. Clouisle is for helping your team work, not for selling attention around the work you do.`,
    },
    {
      id: "models-and-integrations",
      title: "Models and connected services",
      content: `AI work can involve a model provider or an external tool. Which services receive information is determined by the connections configured for your workspace.
Before enabling a connection, administrators can consider what information it needs, where that service operates, and which team members may use it. A workflow should only send the context required for its purpose.
If your organization uses a third-party model or integration, that provider may process information under its own terms. Review the provider's documentation and your organization's configuration when deciding what to connect.
A connection is a choice, not a default audience. Keep the destination, purpose, and scope of each integration visible to the people who manage it.`,
    },
    {
      id: "sharing-and-disclosure",
      title: "When information is shared",
      content: `Information is available to the people and systems that need it for the workspace to operate, within the boundaries set by the team.
Your teammates and workspace administrators, according to the permissions and sharing choices in effect. Model providers and connected tools when a person or workflow sends them the relevant context. Service providers that help operate, secure, or support a hosted Clouisle service. Authorities or other parties when disclosure is required by applicable law or needed to protect people and the service.
**Clouisle does not sell workspace content or personal information.** A private conversation does not become visible to a team just because it exists in the same workspace.`,
    },
    {
      id: "retention-and-security",
      title: "Retention and security",
      content: `Keeping information private also means keeping it only as long as it has a clear purpose and protecting it while it is in use.
Retention depends on the type of information, the workspace configuration, and the legal or operational requirements that apply. Workspace administrators can set local retention rules where the deployment supports them, and can remove content when it is no longer needed.
Clouisle uses access controls, authenticated sessions, audit records, and appropriate technical safeguards to protect information. Self-hosted customers are responsible for the security of the infrastructure they operate; hosted services are protected according to their service configuration and agreement.
Security and privacy reinforce each other. The right people should have the right access, for the right amount of time, with changes that can be understood later.`,
    },
    {
      id: "your-choices",
      title: "Your choices",
      content: `You should be able to understand and influence what happens to your information.
Review and update the account information associated with you. Choose what to share with a team, agent, workflow, model, or connected service. Ask a workspace administrator about access, retention, export, or deletion options. Disconnect integrations and stop using features that are not needed for your work. Contact the organization that operates your Clouisle workspace when you need to exercise a privacy right.
**If you use Clouisle through an organization, that organization may be the data controller for workspace information.** They can provide the most direct answer about local privacy practices.`,
    },
    {
      id: "changes-and-questions",
      title: "Changes and questions",
      content: `Privacy practices can change as Clouisle and its services develop. We will update this page when the way information is handled changes in a material way, and the version presented with your workspace is the one to rely on for that deployment.
For questions about a hosted Clouisle service, contact the Clouisle team through your support channel. For a self-hosted workspace, start with the administrator who manages that installation.
Privacy works best when it is part of the conversation. Ask what is connected, who can see it, and how long it needs to stay before the work begins.`,
    },
  ],
};