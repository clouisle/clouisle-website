import content from "../../../content/release-notes/zh.json";
import type { ReleaseNotesTranslations } from "../types";
import { archiveIssues } from "./archive";

export const zh: ReleaseNotesTranslations = { ...content, archiveIssueCount: archiveIssues.length };
