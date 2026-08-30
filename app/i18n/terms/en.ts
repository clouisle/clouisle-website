import type { TermsPageTranslations } from "../types";

export const en: TermsPageTranslations = {
  title: "Terms of Use",
  overviewTitle: "Open-source license and usage boundaries",
  summary:
    "We built Clouisle as an open-source AI Agent platform for knowledge retrieval, workflow automation, and enterprise operations. We release the Clouisle repository under the GNU General Public License version 3.0 (GPL-3.0). Here we explain, in our own words, what you can do with the code and what we ask you to keep in place; the LICENSE file remains the complete legal text.",
  sections: [
    {
      id: "project-scope",
      title: "Why we built Clouisle",
      content: `We built Clouisle to bring AI agents, RAG-powered knowledge bases, visual workflow automation, model integrations, and enterprise access controls into one platform.
We ship a Python and FastAPI backend, a Next.js frontend, background workers, storage and vector-search services, and deployment paths for Docker Compose or Kubernetes. In the repository documentation, we explain how to configure and operate these pieces.
**Our repository LICENSE is the source of your code rights.** This page is our plain-language guide to GPLv3; it does not replace the license text, our project documentation, or the separate terms of a connected service.`,
    },
    {
      id: "gpl-license",
      title: "How we license the code",
      content: `We release the Clouisle source repository under the GNU General Public License version 3.0, identified by SPDX as GPL-3.0.
GPLv3 lets you run, study, modify, and share the code we cover with that license. You can use it for personal, internal, research, or commercial work, and you can charge for copies or support. You also have the freedom to inspect and improve the source code you receive.
Those permissions come with clear conditions. When you pass along a covered copy or modified version, you must keep the required notices, include the GPLv3 text, provide the corresponding source, and clearly mark your changes. Please read our LICENSE file before you distribute a build.`,
    },
    {
      id: "permitted-use",
      title: "What you can do",
      content: `You can adapt Clouisle to the systems and workflows you are authorized to operate, as long as you follow GPLv3.
Run Clouisle for personal, team, research, or business work. Modify our source and build integrations for your own deployment environment. Share original or modified copies, including for a fee, when you meet GPLv3 conditions. Run a self-hosted installation with the models, tools, storage, and access policies you choose.
**You are responsible for the data, credentials, extensions, infrastructure, and external services connected to your deployment.** Make sure you have permission to use each part the way you intend.`,
    },
    {
      id: "distribution-obligations",
      title: "When you distribute our code",
      content: `When you give someone else a copy of Clouisle or a work based on it, GPLv3 sets the responsibilities you need to follow.
Keep our copyright and license notices intact, provide a copy of GPLv3, and provide or offer the corresponding source in the way the license requires. Mark material changes so people receiving your version can distinguish it from ours, and preserve their ability to exercise the same GPL rights.
**A modified version you hand to someone else must remain under GPLv3.** Separate and independent works keep their own licenses, and components included in Clouisle carry their own notices where their licenses require them.
Running Clouisle as a network service is not the same as handing someone a copy of the code. GPLv3 treats those situations differently. The service, provider, and data involved are governed by their own terms.`,
    },
    {
      id: "brand-and-dependencies",
      title: "Names, dependencies, and data",
      content: `We license the Clouisle source code under GPLv3. That license does not grant trademark rights in the Clouisle name or logo, or permission to reuse non-code artwork, screenshots, fonts, or documents.
You can use the name Clouisle to accurately identify our project, and you must retain the copyright and license notices required by GPLv3. **Do not imply that your build, fork, or hosted service is official, endorsed, or maintained by us.**
Each dependency, font, infrastructure component, model provider, and connected tool has its own license or contract. You must follow those terms separately.
You are responsible for the rights needed for prompts, files, knowledge bases, credentials, and other data processed by your deployment. Before enabling an integration, check where information goes and how that provider stores or uses it.`,
    },
    {
      id: "self-hosting-and-responsible-use",
      title: "Self-hosting and responsible use",
      content: `We support self-hosting, and the person or organization running it is responsible for keeping that deployment safe and lawful.
If you run Clouisle, secure your secrets and infrastructure, configure authentication and role-based access, protect databases and uploads, and monitor the services that keep the platform running. Choose trustworthy model and tool providers, and explain workspace rules to your users.
**Do not use Clouisle to break the law, access systems without permission, infringe another person's rights, or put people and their information at avoidable risk.** Review model and tool output before relying on it for consequential decisions.`,
    },
    {
      id: "warranty-and-changes",
      title: "What we promise, and what we do not",
      content: `GPLv3 provides the covered software without warranty to the extent permitted by law. We do not promise that every installation will be uninterrupted, error-free, secure against every threat, or suitable for a particular purpose. Keep backups and an alternative operating path for important work.
The license attached to the version you receive governs that version. Read the files shipped with the version you deploy; they define its code, notices, dependencies, documentation, and any additional applicable terms.
For questions about our source or a self-hosted deployment, start with the Clouisle repository documentation and open an issue or discussion for the maintainers. For an external model, tool, or hosted service, follow that provider's agreement and support channel.`,
    },
  ],
};