import type { Translations } from "../../i18n/translations";

export default function SiteFooter({ t }: { t: Translations }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <a className="wordmark" href="#top" aria-label="Clouisle">
          <img className="clouisle-mark" src="/clouisle-assets/clouisle-mark.svg" alt="" />
          <span className="footer-wordmark-name">Clouisle</span>
        </a>
      </div>
      <div className="footer-groups">
        {t.footer.groups.map((group) => (
          <section key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => <a href="#top" key={link}>{link}</a>)}
          </section>
        ))}
      </div>
    </footer>
  );
}