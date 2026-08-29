import content from "../../../content/release-notes/en.json";
import type { ReleaseNotesTranslations } from "../types";
import { archiveIssues } from "./archive";

export const en: ReleaseNotesTranslations = { ...content, archiveIssueCount: archiveIssues.length };
