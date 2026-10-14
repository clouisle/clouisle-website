"use client";

import { useEffect } from "react";
import Link from "next/link";

function preferredLocale() {
  const cookieLocale = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("NEXT_LOCALE="))
    ?.split("=")[1];

  if (cookieLocale === "zh" || cookieLocale === "en") return cookieLocale;
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export default function RootPage() {
  useEffect(() => {
    window.location.replace(`/${preferredLocale()}/`);
  }, []);

  return (
    <main>
      <p>Redirecting to Clouisle…</p>
      <Link href="/en/">Continue in English</Link> · <Link href="/zh/">切换到中文</Link>
    </main>
  );
}
