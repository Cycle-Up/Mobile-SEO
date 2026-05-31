# BACKLOG - live wachtrij (van boven naar beneden afwerken)

Alleen volledig autonome, verifieerbare taken. Beslissingen/accounts/productie staan in
ROADMAP.md onder "Voor mij: beslissingen nodig". Ronde 1-3 is afgerond (zie WORKLOG.md +
git-historie); hieronder staat de RONDE 4-backlog.

**Standaard "klaar wanneer" voor een merk-/vergelijkings-pagina (TSX):** pagina volgt het
bestaande template (Article + FAQPage + BreadcrumbList schema, QuickAnswer/speakable,
AuthorBox + MethodologyBadge, CTABanner, vergelijkings-/TCO-tabel waar passend, FAQ-`<details>`,
"Gerelateerde onderwerpen"); uniek self-referential canonical (en og:description) <=160 tekens;
in `app/sitemap.ts`; interne links via `<Link>` naar parent-hub + cross-links; merk-/vergelijkings-
routes in `public/llms.txt` (check-llms 0); 0 orphans; alleen rechte ASCII-aanhalingstekens;
`npm run build` groen + route static; `npm run audit-html` 0 violations.

**Standaard voor MDX:** frontmatter compleet (title, description <=155, date, slug, quickAnswer),
>=700 woorden, >=2 interne links, CTA, geregistreerd in `app/kennisbank/page.tsx`;
`npm run check-content` 100%; vooraf kannibalisatie-gecheckt tegen bestaande slugs.

Per afgeronde taak: vink af + 1 regel in WORKLOG.md + commit per logische groep.

## Fase K - Codekwaliteit (snelle fundament-fixes eerst)

- [x] K1. `react/no-unescaped-entities` versoepelen in `eslint.config.mjs` (off of warn) - klaar wanneer: `npx eslint .` geeft 0 errors van die regel; `npm run build` groen.
- [x] K2. 11 ongebruikte vars opruimen (incl. `hasPage` in scripts/check-llms.mjs) - klaar wanneer: `npx eslint .` 0 `no-unused-vars`-errors; `npm test` groen.

## Fase C4 - Content: Grohe Red dieptecluster (focus)

- [x] C1. `/grohe-red` neutrale merk-hub (kokend water; distinct van /grohe-red-alternatief) - klaar wanneer: TSX-standaard, linkt naar >=2 eigen sub-pagina's.
- [x] C2. `/grohe-red-prijs` (toestel, filter, installatie; indicatieve TCO) - klaar wanneer: TSX-standaard, parent /grohe-red.
- [x] C3. `/grohe-red-filter` (filterpatroon: wanneer vervangen, kosten) - klaar wanneer: TSX-standaard, parent /grohe-red.

## Fase C4 - Content: merk-vs-merk vergelijkingen

- [x] C4. `/vergelijken/grohe-red-vs-grohe-blue` (kokend vs gefilterd/bruisend, zelfde merkfamilie) - klaar wanneer: TSX-standaard, parent /vergelijken.
- [x] C5. `/vergelijken/bwt-vs-brita` (twee filterkanmerken) - klaar wanneer: TSX-standaard, kannibalisatie-gecheckt vs bestaande filterkan-content.
- [x] C6. `/vergelijken/brita-vs-zerowater` (twee filterkannen, TDS-angle) - klaar wanneer: TSX-standaard, kannibalisatie-gecheckt.
- [x] C7. `/vergelijken/boretti-vs-quooker` (budget vs premium kokend) - klaar wanneer: TSX-standaard.

## Fase C4 - Content: long-tail kennisbank (2 rondes)

- [x] C8. Long-tail ronde A: 4 nieuwe MDX in geverifieerde witruimte (kraanwater-ijsthee, waterfilter-stoomoven, kraanwater-limonade-zelf-maken, waterfilter-broodbakmachine; kandidaten waterfilter-vaatwasser/-koffiebar-horeca/waterontharder-vloerverwarming geskipt wegens kannibalisatie) - klaar wanneer: 4 artikelen voldoen aan MDX-standaard; check-content 100%; build groen.
- [ ] C9. Long-tail ronde B: 4 nieuwe MDX (kandidaten: waterfilter-tandenpoetsen, drinkwater-hardloop-marathon, waterfilter-wasdroger + 1 te bepalen; kannibalisatie-gecheckt) - klaar wanneer: idem.

## Fase K - Codekwaliteit: <a> -> <Link> + lint-gate

- [ ] K3. Interne `<a href="/...">` -> `<Link>` ombouwen, batch 1 (~helft van de ~70 bestanden; import toevoegen waar nodig, className/attrs behouden, externe rel="sponsored/nofollow"-links ongemoeid) - klaar wanneer: build groen, audit-html 0 violations, 0 orphans, geen `no-html-link-for-pages` in die bestanden.
- [ ] K4. `<a>` -> `<Link>` batch 2 (rest) - klaar wanneer: `npx eslint .` repo-breed 0x `no-html-link-for-pages`; build groen, 0 orphans.
- [ ] K5. `lint` als gate aan `npm run verify` toevoegen - klaar wanneer: `npm run verify` draait eslint en is exit 0 in de schone staat; `npm test` groen.

## Fase T - SEO-techniek (secundair)

- [ ] T1. `app/sitemap.ts` reele `lastModified` (kennisbank uit frontmatter-`date`; overige routes via git-commitdatum met fallback naar build-datum) + kleine test voor de datum-helper - klaar wanneer: sitemap toont per-route reele datums; `scripts/check-sitemap.mjs` 0 gaten; `npm test` groen; build groen.
- [ ] K6. Unit-test voor `SchemaOrg` (server-render -> valide JSON-LD per type: Article/FAQPage/BreadcrumbList/ItemList) - klaar wanneer: test slaagt; `npm test` groen.

## Definition of Done (ronde 4)
Backlog leeg, `npm test` groen, `npm run verify` exit 0 (incl. lint), `npm run build` groen,
`npm run audit-html` 0 violations, 0 orphans / 0 llms-gaten, `SITE-HEALTH.md` actueel, en alle
wijzigingen gepusht.
