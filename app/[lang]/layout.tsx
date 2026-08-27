import type { Metadata } from "next";

/**
 * Per-locale layout under the [lang] root-parameter segment. The root layout
 * (app/layout.tsx) renders the document shell; locale-specific metadata is
 * declared here. Next does not support overriding <html lang> from a nested
 * layout, so the root keeps lang="en" and the zh pages declare their locale
 * through hreflang alternates instead.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: {
      languages: {
        "en": "/en",
        "zh-CN": "/zh",
      },
    },
  };
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return children;
}
