import type { Locale, ReleaseArticle } from "../../i18n/translations";

const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function parts(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month, day };
}

/** "June 11, 2026" / "2026 年 6 月 11 日" */
export function formatFullDate(iso: string, lang: Locale) {
  const { year, month, day } = parts(iso);
  return lang === "zh" ? `${year} 年 ${month} 月 ${day} 日` : `${EN_MONTHS[month - 1]} ${day}, ${year}`;
}

/** "Jun 11" / "6 月 11 日" */
export function formatShortDate(iso: string, lang: Locale) {
  const { month, day } = parts(iso);
  return lang === "zh" ? `${month} 月 ${day} 日` : `${EN_MONTHS[month - 1].slice(0, 3)} ${day}`;
}

export function formatIssue(template: string, issueNumber: string) {
  return template.replace("{n}", issueNumber);
}

export type MonthGroup = { key: string; year: number; label: string; items: ReleaseArticle[] };

/** Groups newest-first articles into consecutive month buckets. */
export function groupByMonth(articles: ReleaseArticle[], lang: Locale): MonthGroup[] {
  const groups: MonthGroup[] = [];
  for (const article of articles) {
    const { year, month } = parts(article.isoDate);
    const key = `${year}-${month}`;
    let group = groups[groups.length - 1];
    if (!group || group.key !== key) {
      group = { key, year, label: lang === "zh" ? `${month} 月` : EN_MONTHS[month - 1], items: [] };
      groups.push(group);
    }
    group.items.push(article);
  }
  return groups;
}
