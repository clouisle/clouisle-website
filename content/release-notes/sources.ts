/**
 * Every release Markdown file, bundled as a string.
 *
 * The site runs on Cloudflare Workers, whose runtime has no `content/` directory, so the
 * Markdown has to be part of the bundle: a request-time render (cold start, cache miss,
 * revalidation) must find the article in the module graph, not on a filesystem.
 *
 * Files are matched by glob, so publishing a release needs nothing but the two `.md` files.
 */
const RAW_FILES = import.meta.glob(["./en/*.md", "./zh/*.md"], {
  import: "default",
  eager: true,
}) as Record<string, string>;

const ARTICLE_PATH = /^\.\/(en|zh)\/([^/]+)\.md$/;

/** Raw Markdown per locale, keyed by URL slug. */
export const RELEASE_SOURCES: Record<string, Record<string, string>> = { en: {}, zh: {} };

for (const [file, markdown] of Object.entries(RAW_FILES)) {
  const article = ARTICLE_PATH.exec(file);
  if (article) RELEASE_SOURCES[article[1]][article[2]] = markdown;
}