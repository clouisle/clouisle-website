import Link from "next/link";
import Image from "next/image";
import type { Locale, Translations } from "../../i18n/translations";
import { assetUrl } from "../../seo";

type SiteFooterProps = {
  t: Translations;
  lang: Locale;
};

function FooterLink({ lang, label }: { lang: Locale; label: string }) {
  const normalized = label.toLowerCase();
  const isReleaseNotes = normalized.includes("release") || label.includes("发布");
  const isPrivacy = normalized === "privacy" || label === "隐私";
  const isTerms = normalized === "terms of use" || label === "使用条款";
  const isAbout = normalized === "about us" || label === "关于我们";

  if (isReleaseNotes) return <Link href={`/${lang}/release-notes/latest`}>{label}</Link>;
  if (isPrivacy) return <Link href={`/${lang}/privacy`}>{label}</Link>;
  if (isTerms) return <Link href={`/${lang}/terms`}>{label}</Link>;
  if (isAbout) return <Link href={`/${lang}/about`}>{label}</Link>;
  if (normalized === "help" || label === "帮助") return <Link href={`/${lang}/help`}>{label}</Link>;
  if (normalized === "mail" || label === "邮箱") return <a href="mailto:yunhai@yhnotes.com">{label}</a>;
  if (normalized === "github") return <a href="https://github.com/clouisle" target="_blank" rel="noopener noreferrer">{label}</a>;
  if (normalized === "status" || label === "状态") return <a href="https://status.yhnotes.com" target="_blank" rel="noopener noreferrer">{label}</a>;
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
        <Image className="clouisle-mark" src={assetUrl("clouisle-mark.svg")} alt="" width={30} height={30} unoptimized />
        </a>
      </div>
      <FooterGroups t={t} lang={lang} className="footer-groups" />
    </footer>
  );
}
