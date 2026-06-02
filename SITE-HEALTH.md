# SITE-HEALTH

Automatisch gegenereerd door `scripts/site-health.mjs` (`node scripts/site-health.mjs`).
Laatste run: 2026-06-02.

| Metriek | Waarde | Status |
|---|---|---|
| Route-bestanden (app/**/page) | 592 | - |
| Statische routes | 990 | - |
| Dynamische route-patronen | 11 | - |
| Kennisbank-artikelen (MDX) | 409 | - |
| quickAnswer-dekking (AEO) | 409/409 | OK |
| Dode interne links | 0 | OK |
| Orphan-pagina's | 0 | OK |
| Sitemap-gaten | 0 | OK |
| llms.txt ontbrekend | 0 | OK |
| Hubs met ItemList | 13/13 | OK |
| Banned typografie | 18013 | OK (<= baseline 18013) |

Gates: `npm test`, `npm run verify` (eslint + check-content + typografie + links + sitemap + orphans + llms + ymyl + llms-full),
`npm run build && npm run audit-html` (post-build canonical/title/h1/description/JSON-LD/ItemList).
