import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, translations } from "../../i18n/translations";

type SecurityPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function SecurityPage({ params }: SecurityPageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = translations[lang].securityPage;

  return (
    <main className="security-page">
      <section className="security-hero">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
      </section>

      <section className="security-pillars">
        <h2>{t.pillarsTitle}</h2>
        <div className="security-pillar-grid">
          {t.pillars.map((pillar) => (
            <article className="security-pillar" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="security-practices">
        <h2>{t.practicesTitle}</h2>
        <dl className="security-practice-list">
          {t.practices.map((practice) => (
            <div className="security-practice" key={practice.label}>
              <dt>{practice.label}</dt>
              <dd>{practice.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="security-cta">
        <Link className="security-cta-link" href={`/${lang}#privacy`}>{t.cta}</Link>
      </section>
    </main>
  );
}
