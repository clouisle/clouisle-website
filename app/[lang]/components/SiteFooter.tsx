import Link from "next/link";
import type { Locale, Translations } from "../../i18n/translations";

type SiteFooterProps = {
  t: Translations;
  lang: Locale;
};

function FooterLink({ lang, label }: { lang: Locale; label: string }) {
  const normalized = label.toLowerCase();
  const isReleaseNotes = normalized.includes("release") || label.includes("发布");
  const isSecurity = normalized === "security" || label === "安全性" || label === "安全";

  if (isReleaseNotes) return <Link href={`/${lang}/release-notes/latest`}>{label}</Link>;
  if (isSecurity) return <Link href={`/${lang}/security`}>{label}</Link>;
  if (normalized === "help" || label === "帮助") return <Link href={`/${lang}/help`}>{label}</Link>;
  if (normalized === "status" || label === "状态") return <a href="https://status.clouisle.asia" target="_blank" rel="noopener noreferrer">{label}</a>;
  if (normalized === "clouisle") return <a href="https://github.com/clouisle/Clouisle" target="_blank" rel="noopener noreferrer">{label}</a>;
  if (normalized === "cue") return <a href="https://github.com/clouisle/Cue" target="_blank" rel="noopener noreferrer">{label}</a>;
  if (normalized === "clouisle sandbox") return <a href="https://github.com/clouisle/clouisle-sandbox" target="_blank" rel="noopener noreferrer">{label}</a>;
  return <a href="#top">{label}</a>;
}

function FooterGroups({
  t,
  lang,
  className,
}: {
  t: Translations;
  lang: Locale;
  className?: string;
}) {
  return (
    <div className={className}>
      {t.footer.groups.map((group) => (
        <section key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.links.map((label) => (
              <li key={label}>
                <FooterLink lang={lang} label={label} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default function SiteFooter({ t, lang }: SiteFooterProps) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <a className="wordmark" href="#top" aria-label="Clouisle">
          <img className="clouisle-mark" src="/clouisle-assets/clouisle-mark.svg" alt="" />
        </a>
      </div>
      <FooterGroups t={t} lang={lang} className="footer-groups" />
    </footer>
  );
}
