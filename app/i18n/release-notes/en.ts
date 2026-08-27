import type { ReleaseNotesTranslations } from "../types";

// Example skeleton data — replace with real releases.
export const en: ReleaseNotesTranslations = {
  title: "Release Notes",
  backLabel: "Back to release notes",
  newFeaturesLabel: "New features",
  releases: [
    {
      slug: "clouisle-launch",
      issue: "Issue 01",
      version: "v0.1.0",
      date: "August 27, 2026",
      cardTitle: "Clouisle is here",
      greeting: "From idea to outcome, now in one place.",
      message: [
        "The first usable release of Clouisle is out. Agents, knowledge bases, and workflows work together on one platform for the first time, so teams stop carrying context between tools.",
        "Security comes first: team boundaries, roles and permissions, session isolation, authentication policy, and audit records ship as part of the product from day one, not as an afterthought.",
      ],
      features: [
        "Agent conversations with tool calling",
        "Visual workflow orchestration",
        "Knowledge base import and retrieval",
        "Teams, roles, and permissions",
        "Open API with API key management",
      ],
      signOff: "— The Clouisle team",
      cover: "/clouisle-assets/reads-1.png",
    },
    {
      slug: "workflow-refinements",
      issue: "Issue 02",
      version: "v0.1.1",
      date: "August 20, 2026",
      cardTitle: "Workflow refinements",
      greeting: "An update focused on day-to-day feel.",
      message: [
        "This release adds no new modules. Instead, it polishes the parts people touch most: every workflow run now shows a clear status, and model connection configuration no longer requires trial and error.",
        "The admin console audit log is more complete, giving teams finer-grained history when they need to look back.",
      ],
      features: [
        "Workflow run status tracking",
        "Model connection configuration improvements",
        "Enhanced audit log in the admin console",
      ],
      signOff: "— The Clouisle team",
      cover: "/clouisle-assets/reads-2.png",
    },
  ],
};