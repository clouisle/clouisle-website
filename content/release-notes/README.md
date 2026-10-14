# Release Notes Content

Each release is one Markdown file per language. Add a release by adding two files with the same name:

```
content/release-notes/
  en/v0-3-0.md
  zh/v0-3-0.md
  sources.ts        # bundles the Markdown; picks up new files automatically
  en.json, zh.json   # UI labels for the pages (not articles)
```

The file name is the URL slug (`/release-notes/v0-3-0`). Files are bundled into the server build by
`sources.ts` (`import.meta.glob` with `raw-loader`, configured in `next.config.ts`) and parsed by
`app/i18n/release/articles.ts`; nothing from the Markdown ships to the client. They are bundled rather
than read from disk because the site is deployed to Cloudflare Workers, whose runtime has no `content/`
directory — a request-time render has to find the article in the bundle.

## Frontmatter

```md
---
title: "Multimodal Knowledge & Admin Observability"
summary: "One or two sentences shown on the timeline card and as the article lede."
date: 2026-06-11
issue: 10
version: 0.2.9
tag: "New"
cover: https://example.com/cover.png
gradient: 3
---
```

| Field | Notes |
| --- | --- |
| `title`, `summary` | Required. Quote values that contain `:` or `"` (JSON-style double quotes). |
| `date` | Required, `YYYY-MM-DD`. Sorts the timeline and groups it by month. |
| `issue`, `version` | Required. `version` has no leading `v`. |
| `tag` | Required. Short category chip (New / Fix / Improved / ...). |
| `cover` | Required. Shown on the card and at the top of the article (cropped to a fixed ratio). |
| `gradient` | Optional, 1–4. Bottom-of-page gradient for the article. |

## Body

Write normal Markdown. Conventions:

- The first paragraph is rendered larger, as the article's opening.
- Every `##` heading becomes an entry in the sidebar outline ("In this release"), with scroll highlighting. Keep them
  unique within a file and use `##` for top-level sections; `###` stays out of the outline.
- An image on its own line (`![Caption](url)`) becomes a figure, and the alt text is shown as its caption.
- Lists, `code`, fenced code blocks, quotes, links and `**bold**` are styled.

Keep the `en` and `zh` files in sync (same slugs).
