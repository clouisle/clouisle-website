import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dia | A browser you won't dread opening",
  description:
    "A local learning recreation of the Dia Browser marketing experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
