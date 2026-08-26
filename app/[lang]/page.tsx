import { notFound } from "next/navigation";
import { hasLocale } from "../i18n/translations";
import Home from "./Home";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return <Home lang={lang} />;
}
