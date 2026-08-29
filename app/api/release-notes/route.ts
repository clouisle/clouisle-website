import { archiveIssues } from "../../i18n/release/archive";

export const dynamic = "force-static";

export async function GET() {
  return Response.json({ releaseNotes: archiveIssues });
}
