# BACKLOG - live wachtrij (van boven naar beneden afwerken)

Alleen volledig autonome, verifieerbare taken. Beslissingen/accounts/productie staan in
ROADMAP.md onder "Voor mij: beslissingen nodig". Ronde 1-4 is afgerond (zie WORKLOG.md +
git-historie); hieronder staat de RONDE 5-backlog (kwaliteitsronde + wat content).

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

## Fase A - Trust & YMYL-compliance (fundament)

- [x] A1. `HealthDisclaimer`-component met handover-conforme tekst (people-first, "geen medisch advies", raadpleeg huisarts/arts) - klaar wanneer: component bestaat, ASCII-clean, exporteert de disclaimer-tekst als pure constante; build groen.
- [x] A2. Pure helper `isYmyl(slug, frontmatter)` (keyword/slug-lijst + `ymyl`-override) in `lib/ymyl.mjs` - klaar wanneer: unit-test slaagt voor bekende gezondheids- vs niet-gezondheidsslugs; `npm test` groen.
- [x] A3. `HealthDisclaimer` renderen in de kennisbank-`[slug]`-renderer voor YMYL-artikelen - klaar wanneer: build groen; disclaimer staat in de HTML van bv. `osmose-water-gezond` en ontbreekt bij bv. `kalk-koffiemachine`; `audit-html` 0 violations.
- [x] A4. Disclaimer toepassen op YMYL-TSX-pagina's zonder disclaimer (71 routes via script: vlak voor de eerste CTABanner + import) - klaar wanneer: die routes bevatten de disclaimer in HTML; build groen; `audit-html` 0.
- [x] A5. Topic->bronnen-mapping `lib/article-sources.mjs` (`sourcesForSlug(slug)` -> autoriteiten per onderwerp, fallback `DEFAULT_SOURCES`) - klaar wanneer: unit-test slaagt; gezondheidsonderwerpen geven >=3 onderwerp-specifieke bronnen; `npm test` groen.
- [x] A6. `sourcesForSlug` koppelen aan de kennisbank-renderer (SourcesSection + Article-`citation`) wanneer frontmatter geen `sources` heeft - klaar wanneer: build groen; een gezondheidsartikel toont onderwerp-bronnen in HTML en `citation` in de Article-JSON-LD; `audit-html` 0.
- [x] A7. Gate `scripts/check-ymyl.mjs` + test: elk YMYL-artikel resolvet naar >=3 bronnen (disclaimer+citaties zullen renderen); aan `npm run verify` toevoegen - klaar wanneer: gate exit 0 in schone staat, exit 1 op een fixture zonder bronnen; `npm test` groen.

## Fase B - AI-Search / AEO-integriteit

- [x] B1. `scripts/generate-llms-full.mjs` bouwt `llms-full.txt` uit cluster-routes + kennisbank-frontmatter (titel/description/url/datum) onder een vaste curated preamble - klaar wanneer: script draait deterministisch en produceert een bestand met alle clusterroutes + alle kennisbankslugs.
- [x] B2. `llms-full.txt` (her)genereren met B1 - klaar wanneer: bestand bevat ronde-4 + ronde-5 pagina's (grep op `bwt-vs-brita`, `kraanwater-ijsthee` raak); typografie-ratchet groen.
- [x] B3. Gate `scripts/check-llms-full.mjs` + test: faalt als `llms-full.txt` niet in sync is met content (ontbrekende kennisbankslug of kernroute); aan `npm run verify` toevoegen - klaar wanneer: gate exit 0 na B2, exit 1 bij een bewust ontbrekende entry (fixture); `npm test` groen.

## Fase C - Techniek, UX & tests

- [x] C1. `app/manifest.ts` (web app manifest: naam, short_name, lang, theme_color, icons) + `app/icon.tsx` via next/og - klaar wanneer: build emitteert `/manifest.webmanifest` (valide JSON) + een icon-route; build groen.
- [x] C2. `export const viewport` (width/initial-scale + `themeColor`) in `app/layout.tsx` - klaar wanneer: build groen zonder viewport-waarschuwing; `theme-color`-meta in de HTML.
- [x] C3. Skip-link ("Direct naar inhoud", focusbare sr-only link naar `#main`) in de layout - klaar wanneer: layout bevat de skip-link en `<main id="main">`; build groen; `audit-html` 0.
- [x] C4. RSS/Atom-feed voor de kennisbank (`app/kennisbank/feed.xml` route handler, nieuwste N artikelen, gesorteerd op datum) + `<link rel="alternate">` in de head en een verwijzing op de kennisbankpagina - klaar wanneer: route bouwt valide XML met recente slugs; build groen; check-links groen.
- [x] C5. `clampDescription` naar pure `lib/text.mjs` verplaatsen en herexporteren uit `lib/seo.ts` + unit-test (knipt op woordgrens, respecteert max) - klaar wanneer: test slaagt; bestaande imports ongewijzigd; build groen.
- [x] C6. CTABanner-contextlogica naar pure `lib/cta.mjs` (context->copy/href) + unit-test per context (osmose/kokend/waterhardheid/algemeen/zakelijk); component refactoren - klaar wanneer: test slaagt; gerenderde banners ongewijzigd (`audit-html` 0); build groen.
- [x] C7. (laag) Sitemap-index via `generateSitemaps` - UITGESTELD/GESKIPT (gemotiveerd): poging deed alle 3 chunks identiek renderen (Next gaf `id` niet als verwachte numerieke waarde tijdens prerender), waardoor 3.900 gemeente-/kennisbank-URL's uit de sitemap vielen. Direct teruggedraaid naar de werkende enkele sitemap (4.514 URL's, alle aanwezig). Marginale SEO-winst bij <5k URL's (ruim onder de 50k-limiet) weegt niet op tegen het risico; verplaatst naar "voor mij". `sitemap.ts` ongewijzigd t.o.v. C6, build + check-sitemap groen.

## Fase D - Nieuwe content (kannibalisatie-gecheckt, modest)

- [x] D1. Long-tail kennisbank ronde C: 4 nieuwe MDX in geverifieerde witruimte (definitief + kannibalisatie-check bij uitvoering) - klaar wanneer: MDX-standaard, `check-content` 100%, build groen.
- [x] D2. Long-tail kennisbank ronde D: 4 nieuwe MDX - klaar wanneer: idem.
- [x] D3. 2 nieuwe merk-vs-merk of type-vs-type vergelijkingen in echte witruimte - klaar wanneer: TSX-standaard, in sitemap + llms.txt, 0 orphans, `audit-html` 0, build groen.

## Afsluiting

- [x] Z1. `SITE-HEALTH.md` hergenereren + WORKLOG bijwerken - klaar wanneer: `site-health.mjs` draait, metrics actueel, alles gecommit en gepusht.

## Definition of Done (ronde 5)
Backlog leeg, `npm test` groen, `npm run verify` exit 0 (incl. lint + check-ymyl + check-llms-full),
`npm run build` groen, `npm run audit-html` 0 violations, 0 orphans / 0 llms-gaten,
`SITE-HEALTH.md` actueel, en alle wijzigingen gepusht.
