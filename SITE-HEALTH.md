# SITE-HEALTH

Automatisch gegenereerd door `scripts/site-health.mjs` (`node scripts/site-health.mjs`).
Laatste run: 2026-05-29.

| Metriek | Waarde | Status |
|---|---|---|
| Route-bestanden (app/**/page) | 573 | - |
| Statische routes | 949 | - |
| Dynamische route-patronen | 11 | - |
| Kennisbank-artikelen (MDX) | 387 | - |
| Dode interne links | 0 | OK |
| Sitemap-gaten | 0 | OK |
| Banned typografie | 18026 | OK (<= baseline 18026) |

Gates: `npm test`, `npm run verify` (check-content + typografie + links + sitemap),
`npm run build && npm run audit-html` (post-build canonical/title/h1/description/JSON-LD).
