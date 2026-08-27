import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dia | A browser you won't dread opening",
  description:
    "A local learning recreation of the Dia Browser marketing experience.",
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
