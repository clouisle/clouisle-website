import type { Translations } from "../../i18n/translations";
import { DiaMark } from "./icons";

export default function SiteFooter({ t }: { t: Translations }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <a className="wordmark" href="#top" aria-label="Dia"><DiaMark /></a>
        <p>{t.footer.copyright}</p>
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
