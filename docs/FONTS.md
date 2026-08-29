# Web font licenses

The site self-hosts open fonts through Fontsource packages. The selected
families are distributed under the SIL Open Font License 1.1 (OFL-1.1), which
permits commercial use, modification, and redistribution subject to the OFL.

| Role | Latin face | Chinese face | Package license |
| --- | --- | --- | --- |
| Display headings | Fraunces Variable | Noto Serif SC Variable | OFL-1.1 |
| UI and body text | Instrument Sans Variable | Noto Sans SC Variable | OFL-1.1 |
| Metadata and navigation | IBM Plex Mono | Noto Sans SC Variable fallback | OFL-1.1 |

Fraunces is the closest open display substitute for Dia's high-contrast Exposure face
in the title specimens: display headings use its 500-700 weight range, while the
animated hero also uses its optical-size, softness, and wonk axes. Instrument Sans
was selected against ABC Oracle's neutral proportions for the shared UI and body
copy. The original Dia font files are proprietary and are not shipped here.

The font packages retain their license files under `node_modules` and are
declared in `package.json`. No proprietary font binary is shipped from
`public/` or loaded from a third-party font server.
