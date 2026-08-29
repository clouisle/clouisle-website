# Release Notes Content

Release note content is stored as JSON so editors do not need to change page code.

- `en.json`: English latest issue and the three initially visible past issues.
- `zh.json`: Chinese latest issue and the three initially visible past issues.
- `archive.json`: the remaining 35 historical cards loaded by `View All Release Notes +`.

Each issue supports `slug`, `date`, `issueNumber`, `version`, `title`, `description`, and `image`.
The latest three issues also include postcard fields: `greeting`, `message`, `signature`, `heroImage`, and `polaroidImage`.

The archive endpoint at `/api/release-notes` reads `archive.json`. Historical issue routes use the same postcard template as the latest issue.
