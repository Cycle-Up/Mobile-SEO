# ROADMAP - Waterfilterplatform.nl (autonome werkstroom)

Grotere brokken in logische volgorde. Live wachtrij: `BACKLOG.md`, logboek: `WORKLOG.md`.
Werkwijze: backlog van boven naar beneden afwerken; bij lege backlog de volgende roadmap-brok
opbreken in concrete taken. Elke pagina vooraf kannibalisatie-gecheckt tegen bestaande slugs en
`CANNIBALIZATION-AUDIT.md`.

---

## RONDE 1-2 - AFGEROND

Commerciele merklaag uitgebreid (brita/zerowater/aquatru-alternatief, Selsiuz- en Grohe
Blue-clusters, 2 merkvergelijkingen, 3 long-tail MDX) en een volledige verificatie-/gate-laag
gebouwd (node --test test-harness, check-content/typography/links/sitemap, audit-html,
site-health, OG-image PNG-pipeline). Eindstatus: npm test groen, npm run verify exit 0,
audit-html 0 violations, 0 dode links, 0 sitemap-gaten. Detail: zie WORKLOG.md + git-historie.

---

## RONDE 3 - HUIDIG PLAN

Onderbouwing (inventarisatie 2026-05-30): basis is sterk en geautomatiseerd. Concrete witte
vlekken: (a) `llms.txt` mist de 11 nieuwe merk-/vergelijkingspagina's uit ronde 2; (b) er is geen
orphan-detectie over 573 routes; (c) 13 hub-overzichtspagina's missen `ItemList`-schema;
(d) hoog-vermelde merken zonder neutrale hub: SodaStream (246 vermeldingen), InsinkErator (123),
Waterdrop (59). a11y-basis is al gezond (html lang, geen rauwe img, geen generieke linktekst) en
BreadcrumbList staat al op alle 573 routes - die krijgen dus geen aparte brok.

### Fase A - AI-discovery & interne-linkgezondheid - DONE (check-llms + 30 routes, check-orphans + 101 orphans weggewerkt)
Een sync-check + fix voor `llms.txt`, en een orphan-detector die pagina's zonder inkomende
interne links vindt en wegwerkt. Hoogste SEO/crawl-waarde, volledig autonoom.

### Fase B - Structured-data & AEO-diepte - DONE (ItemList op 13 hubs + hub-ItemList-gate)
`ItemList`-schema op de 13 hub-overzichtspagina's die het missen, plus een gate in `audit-html`
zodat hubs het behouden. (BreadcrumbList is al 573/573; geen werk.)

### Fase C - Contentuitbreiding merklaag (vervolg) - DONE (SodaStream-cluster, InsinkErator, Waterdrop, 2 vergelijkingen, 3 long-tail MDX)
Neutrale merk-hubs voor SodaStream (+ CO2/prijs sub), InsinkErator en Waterdrop; nieuwe
merk-vs-merk vergelijkingen; een nieuwe long-tail kennisbank-ronde. Distinct van de bestaande
`-alternatief`-pagina's; interne `CTABanner` blijft tot affiliate-bestemming bekend is.

### Fase D - Observability & gates uitbreiden - DONE (verify incl. orphans+llms; SITE-HEALTH uitgebreid)
`npm run verify` en `SITE-HEALTH.md` uitbreiden met de nieuwe orphan- en llms-sync-checks zodat
de nieuwe invarianten bewaakt blijven.

---

## RONDE 4 - HUIDIG PLAN

Onderbouwing (2026-05-30): content/SEO is volwassen en alle gates groen (0 dode links/orphans/
sitemap-gaten, 0 dubbele titles+descriptions over 4440 pagina's). Focus deze ronde (keuze
gebruiker): vooral meer content, plus de goedgekeurde codekwaliteit-fixes. `npm run lint` is nu
rood: 302x no-unescaped-entities (regel versoepelen), 283x no-html-link-for-pages in ~70
bestanden (interne <a> -> <Link>), 11x unused-vars. Geen component-tests; sitemap lastmod = nu
uniform buildtijd.

### Fase K - Codekwaliteit & lint-gate - DONE
eslint-apostrofregel versoepeld (K1), ongebruikte vars opgeruimd (K2), alle interne
<a href="/..."> in 70 bestanden omgebouwd naar next/link (K3+K4, repo-breed 0
no-html-link-for-pages) en eslint (--max-warnings=0) als gate aan npm run verify toegevoegd (K5).

### Fase C4 - Contentuitbreiding (focus) - DONE
Grohe Red dieptecluster (hub + prijs + filter, C1-C3) + 4 merk-vs-merk vergelijkingen
(grohe-red-vs-grohe-blue, bwt-vs-brita, brita-vs-zerowater, boretti-vs-quooker, C4-C7) en
8 long-tail kennisbank-MDX in twee rondes (C8: ijsthee, stoomoven, limonade, broodbakmachine;
C9: waterijs, stoomreiniger, kombucha, zuurdesem-starter), elk kannibalisatie-gecheckt.

### Fase T - SEO-techniek (secundair) - DONE
sitemap reele lastModified (kennisbank uit frontmatter-date, overige routes uit git-commitdatum
met build-datum fallback) via lib/sitemap-dates.mjs (T1), en een unit-test voor SchemaOrg via
de pure lib/schema-org.mjs (K6). Beide met eigen testdekking.

RONDE 4 autonome scope volledig afgerond; BACKLOG.md leeg. Resterend werk staat enkel hieronder
onder "Voor mij: beslissingen nodig" (vereist jouw input/accounts/productie).

## RONDE 5 - HUIDIG PLAN

Onderbouwing (2026-05-31): ronde 4 afgerond, alle gates groen. Content is breed (398 MDX +
~70 clusters). Hoogste hefboom nu = kwaliteit/compliance/integriteit i.p.v. nog meer breedte
(keuze gebruiker: alle workstreams + wat content). Gevonden gaten: geen herbruikbare YMYL-
gezondheidsdisclaimer (handover-eis), 0/398 MDX met eigen bronnen (Article-citation altijd leeg),
verouderde handmatige llms-full.txt zonder gate, geen PWA-manifest/viewport/skip-link/RSS,
clampDescription + CTABanner ongetest.

### Fase A - Trust & YMYL-compliance
HealthDisclaimer-component, automatische YMYL-detectie (heuristiek + frontmatter-override),
topic->autoriteit-bronnen per onderwerp (RIVM/WHO/Drinkwaterbesluit/EU 2020-2184/KWR/ILT/Vewin;
geen verzonnen claims), gekoppeld aan SourcesSection + Article-citation, en een check-ymyl-gate.

### Fase B - AI-Search / AEO-integriteit
llms-full.txt automatisch genereren uit content (curated preamble + autogen index) en een
check-llms-full-gate die drift afvangt.

### Fase C - Techniek, UX & tests
PWA-manifest + icon, viewport/theme-color, skip-link (a11y), RSS-feed voor de kennisbank,
unit-tests voor clampDescription + CTABanner-logica, en (laag) sitemap-index via generateSitemaps.

### Fase D - Nieuwe content
Twee long-tail kennisbank-rondes (8 MDX) + 2 vergelijkingen, elk kannibalisatie-gecheckt.

## Voor mij: beslissingen nodig (NIET autonoom)
- PR #3 mergen / naar productie publiceren.
- Affiliate-CTA-bestemmingen voor merkpagina's (nu interne CTABanner; echte bestemming = jouw input).
- GSC + Bing Webmaster Tools koppelen + IndexNow draaien na deploy.
- Gemeente-programmatische laag (~3.500 pagina's): wel/niet noindexen/consolideren (vereist GSC-data).
- PureFilter-claims naar "bevestigd" (vereist bewijsdossier van fabrikant).
- Strategische merkkeuzes: welke merken wel/niet een dieptecluster verdienen.
- Sitemap-index via `generateSitemaps` (ronde 5 C7): uitgesteld. Vereist uitzoeken waarom Next `id` tijdens prerender niet als verwachte waarde doorgeeft; marginale winst bij <5k URL's. De huidige enkele sitemap werkt correct (4.514 URL's).
