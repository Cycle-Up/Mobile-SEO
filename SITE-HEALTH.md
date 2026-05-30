# SITE-HEALTH

Automatisch gegenereerd door `scripts/site-health.mjs` (`node scripts/site-health.mjs`).
Laatste run: 2026-05-30.

| Metriek | Waarde | Status |
|---|---|---|
| Route-bestanden (app/**/page) | 580 | - |
| Statische routes | 959 | - |
| Dynamische route-patronen | 11 | - |
| Kennisbank-artikelen (MDX) | 390 | - |
| Dode interne links | 0 | OK |
| Orphan-pagina's | 0 | OK |
| Sitemap-gaten | 0 | OK |
| llms.txt ontbrekend | 0 | OK |
| Hubs met ItemList | 13/13 | OK |
| Banned typografie | 18026 | OK (<= baseline 18026) |

Gates: `npm test`, `npm run verify` (check-content + typografie + links + sitemap + orphans + llms),
`npm run build && npm run audit-html` (post-build canonical/title/h1/description/JSON-LD/ItemList).
