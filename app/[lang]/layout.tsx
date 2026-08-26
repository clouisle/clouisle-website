import type { Metadata } from "next";
import "../globals.css";
import type { Locale } from "../i18n/translations";

export const metadata: Metadata = {
  title: "Dia | A browser you won't dread opening",
  description:
    "A local learning recreation of the Dia Browser marketing experience.",
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const lang: Locale = (await params).lang === "zh" ? "zh" : "en";
  return (
    <html lang={lang} data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
