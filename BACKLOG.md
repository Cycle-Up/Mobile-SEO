# BACKLOG - live wachtrij (van boven naar beneden afwerken)

Alleen volledig autonome, verifieerbare taken. Beslissingen/accounts/productie staan in
ROADMAP.md onder "Voor mij: beslissingen nodig". Ronde 1-2 is afgerond (zie WORKLOG.md +
git-historie); hieronder staat de RONDE 3-backlog.

**Standaard "klaar wanneer" voor een merk-/vergelijkings-pagina (TSX):** pagina volgt het
bestaande template (Article + FAQPage + BreadcrumbList schema, QuickAnswer/speakable,
AuthorBox + MethodologyBadge, CTABanner, vergelijkings-/TCO-tabel waar passend, FAQ-`<details>`,
"Gerelateerde onderwerpen"); uniek self-referential canonical (en og:description) <=160 tekens;
opgenomen in `app/sitemap.ts`; interne links naar parent-hub + cross-links; vooraf
kannibalisatie-gecheckt; alleen rechte ASCII-aanhalingstekens; `npm run build` groen + route
static gegenereerd; `npm run audit-html` 0 violations.

**Standaard voor MDX:** frontmatter compleet (title, description <=155, date, slug, quickAnswer),
>=700 woorden, >=2 interne links, CTA, geregistreerd in `app/kennisbank/page.tsx`;
`npm run check-content` 100%.

Per afgeronde taak: vink af + 1 regel in WORKLOG.md + commit per logische groep.

## Fase A - AI-discovery & interne-linkgezondheid

- [x] A1. `scripts/check-llms.mjs` + `test/check-llms.test.mjs` - detecteert "belangrijke" routes (commerciele/merk-/hub-TSX-pagina's volgens een patroonlijst) die niet in `public/llms.txt` staan; exporteert pure helper voor de test. Klaar wanneer: script geeft exit-code en lijst, test dekt een aanwezige en een ontbrekende route, `npm test` groen.
- [x] A2. `public/llms.txt` + `public/llms-full.txt` bijwerken met de 11 nieuwe pagina's (brita/zerowater/aquatru-alternatief, /selsiuz + /selsiuz-prijs + /selsiuz-onderhoud, /grohe-blue + /grohe-blue-prijs + /grohe-blue-filter, /vergelijken/quooker-vs-grohe-red, /vergelijken/selsiuz-vs-grohe-blue). Klaar wanneer: `node scripts/check-llms.mjs` rapporteert 0 ontbrekend; ASCII-clean; `npm run verify` groen.
- [ ] A3. `scripts/check-orphans.mjs` + `test/check-orphans.test.mjs` - bouwt de route-index (hergebruik check-links), verzamelt alle interne link-targets, en rapporteert statische content-routes met 0 inkomende interne links. Whitelist: `/` (home), de hoofd-hubs (genav-items) en utility-pagina's (/over-ons, /contact, /methodologie). Klaar wanneer: script geeft orphan-telling + exit-code; test dekt een orphan en een niet-orphan; `npm test` groen.
- [ ] A4. Orphans wegwerken - voeg per wees-pagina >=1 contextuele interne link toe vanuit een relevante hub of "Gerelateerde onderwerpen"-sectie (geen linkdumps; thematisch passend). Klaar wanneer: `node scripts/check-orphans.mjs` rapporteert 0 orphans (of een gemotiveerde whitelist in het script); `npm run build` groen.

## Fase B - Structured-data & AEO-diepte

- [ ] B1. `ItemList`-schema toevoegen aan de 13 hub-overzichtspagina's zonder ItemList (filtertechnieken, keurmerken, drinkwaternormen, stoffen-in-drinkwater, keuzehulp, onderhoud, zakelijk, vergelijken, beste-waterfilter, waterontharder, omgekeerde-osmose, kokend-water-kraan, drinkwaterfontein) - ItemList = ware representatie van de zichtbare lijst sub-pagina's/links op die hub. Klaar wanneer: alle 13 hubs bevatten valide ItemList-JSON-LD; `npm run build` groen; `npm run audit-html` 0 violations.
- [ ] B2. `scripts/audit-html.mjs` uitbreiden met een hub-ItemList-check (een vaste lijst hub-routes moet ItemList-JSON-LD bevatten) + test in `test/audit-html.test.mjs`. Klaar wanneer: audit-html faalt als een hub ItemList mist en slaagt nu (na B1); `npm test` groen.

## Fase C - Contentuitbreiding merklaag (vervolg)

- [ ] C1. `/sodastream` neutrale merk-hub (bruisend-watermerk, 246 vermeldingen) - overzicht + links naar sub-intents en /sodastream-alternatief; funnel naar /bruisend-water + 4-in-1. Klaar wanneer: TSX-standaard, in sitemap, linkt naar >=2 eigen sub-pagina's.
- [ ] C2. `/sodastream-co2` (CO2-cilinders: ruilen, kosten, compatibiliteit) - sub van /sodastream. Klaar wanneer: TSX-standaard, parent /sodastream.
- [ ] C3. `/sodastream-prijs` (toestellen, cilinders, kosten per liter bruiswater) - sub van /sodastream. Klaar wanneer: TSX-standaard, parent /sodastream.
- [ ] C4. `/insinkerator` neutrale merk-hub (instant-hot-water + afvalvermaler, 123 vermeldingen) - distinct van /insinkerator-alternatief. Klaar wanneer: TSX-standaard, in sitemap.
- [ ] C5. `/waterdrop` neutrale merk-hub/review (RO-/filtermerk, 59 vermeldingen) - distinct van /waterdrop-alternatief; funnel naar /omgekeerde-osmose + /beste-osmosefilter-2026. Klaar wanneer: TSX-standaard, in sitemap.
- [ ] C6. `/vergelijken/sodastream-vs-grohe-blue` (bruiswatertoestel vs bruisend-waterkraan) - kannibalisatie-gecheckt. Klaar wanneer: TSX-standaard, parent /vergelijken.
- [ ] C7. `/vergelijken/waterdrop-vs-aquatru` (twee RO-merken) - kannibalisatie-gecheckt. Klaar wanneer: TSX-standaard, parent /vergelijken.
- [ ] C8. Long-tail kennisbank-ronde: 3 nieuwe MDX in witte vlekken (vooraf kannibalisatie-gecheckt tegen de 387 bestaande slugs; kandidaten o.a. waterfilter-koffiezetapparaat-ontkalken, osmose-water-aquarium-opstarten, kraanwater-laten-doorlopen-loodleiding - definitief bepalen bij uitvoering). Klaar wanneer: 3 artikelen voldoen aan de MDX-standaard; `npm run check-content` 100%; build groen.

## Fase D - Observability & gates uitbreiden

- [ ] D1. `npm run verify` uitbreiden met `check-orphans` en `check-llms` (na de andere gates, gezamenlijke exit-code). Klaar wanneer: `npm run verify` draait beide nieuwe checks en faalt als een ervan faalt; exit 0 in de schone staat.
- [ ] D2. `scripts/site-health.mjs` + `SITE-HEALTH.md` uitbreiden met orphan-aantal, llms-sync-status en hub-ItemList-dekking; `test/site-health.test.mjs` dekt de nieuwe metrics. Klaar wanneer: `node scripts/site-health.mjs` toont de nieuwe regels; `npm test` groen.

## Definition of Done (ronde 3)
Backlog leeg, `npm test` groen, `npm run verify` exit 0 (incl. orphans + llms), `npm run build`
groen, `npm run audit-html` 0 violations, `SITE-HEALTH.md` actueel met 0 orphans / 0 llms-gaten,
en alle wijzigingen gepusht.
