import type { Metadata } from "next";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/instrument-sans/wdth.css";
import "@fontsource-variable/noto-sans-sc/wght.css";
import "@fontsource-variable/noto-serif-sc/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clouisle",
  description:
    "Clouisle is an open-source AI workspace for turning knowledge, decisions, and repeatable work into progress.",
};

// Root layout: shared chrome for every route. The dynamic `[lang]` segment is
// a *root parameter*, so the per-locale <html lang> is applied by the nested
// layout in app/[lang]/layout.tsx (root layouts render before segment params
// resolve; next/root-params is generated per-build and didn't expose `lang`
// because this root layout sits above it).
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
