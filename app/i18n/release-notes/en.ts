import type { ReleaseNotesTranslations } from "../types";

// Example skeleton data — replace with real releases.
export const en: ReleaseNotesTranslations = {
  title: "Release Notes",
  releases: [
    {
      version: "v0.1.0",
      date: "2026-08-27",
      summary: "The first usable Clouisle release.",
      features: [
        "Agent conversations with tool calling",
        "Visual workflow orchestration",
        "Knowledge base import and retrieval",
        "Teams, roles, and permissions",
        "Open API with API key management",
      ],
    },
    {
      version: "v0.1.1",
      date: "2026-08-20",
      summary: "Experience and stability improvements.",
      features: [
        "Workflow run status tracking",
        "Model connection configuration improvements",
        "Enhanced audit log in the admin console",
      ],
    },
  ],
};