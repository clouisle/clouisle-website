import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { Locale, ReleaseArticle, ReleaseHeading } from "../types";

const CONTENT_DIR = path.join(process.cwd(), "content", "release-notes");

/** Stable, CJK-friendly anchor id for a heading. Shared by the outline and the renderer. */
export function headingId(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

/** Extracts `##` headings, ignoring fenced code blocks. Inline markup is stripped. */
export function extractHeadings(markdown: string): ReleaseHeading[] {
  const headings: ReleaseHeading[] = [];
  let inFence = false;
  for (const line of markdown.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    const match = !inFence && /^##\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;
    const title = match[1].replace(/[*_`]|\[([^\]]*)\]\([^)]*\)/g, "$1").trim();
    headings.push({ id: headingId(title), title });
  }
  return headings;
}

function parseFrontmatter(raw: string, file: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) throw new Error(`Release note ${file} is missing frontmatter`);
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const entry = /^([A-Za-z]\w*):\s*(.*)$/.exec(line);
    if (!entry) continue;
    let value = entry[2].trim();
    if (value.startsWith('"')) value = JSON.parse(value);
    data[entry[1]] = value;
  }
  return { data, body: match[2].trim() };
}

function parseArticle(lang: Locale, file: string): ReleaseArticle {
  const { data, body } = parseFrontmatter(fs.readFileSync(path.join(CONTENT_DIR, lang, file), "utf8"), `${lang}/${file}`);
  for (const key of ["title", "summary", "date", "issue", "version", "tag", "cover"]) {
    if (!data[key]) throw new Error(`Release note ${lang}/${file} is missing "${key}"`);
  }
  return {
    slug: file.replace(/\.md$/, ""),
    isoDate: data.date,
    issueNumber: String(data.issue).padStart(3, "0"),
    version: data.version,
    tag: data.tag,
    title: data.title,
    summary: data.summary,
    cover: data.cover,
    gradient: Number(data.gradient) || 1,
    body,
    headings: extractHeadings(body),
  };
}

/** All releases for a locale, newest first. Reads Markdown from disk, so call it only at build time. */
export function getReleaseArticles(lang: Locale): ReleaseArticle[] {
  return fs
    .readdirSync(path.join(CONTENT_DIR, lang))
    .filter((file) => file.endsWith(".md"))
    .map((file) => parseArticle(lang, file))
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate) || Number(b.issueNumber) - Number(a.issueNumber));
}
