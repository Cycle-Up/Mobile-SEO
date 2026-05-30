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

## Voor mij: beslissingen nodig (NIET autonoom)
- PR #3 mergen / naar productie publiceren.
- Affiliate-CTA-bestemmingen voor merkpagina's (nu interne CTABanner; echte bestemming = jouw input).
- GSC + Bing Webmaster Tools koppelen + IndexNow draaien na deploy.
- Gemeente-programmatische laag (~3.500 pagina's): wel/niet noindexen/consolideren (vereist GSC-data).
- PureFilter-claims naar "bevestigd" (vereist bewijsdossier van fabrikant).
- Strategische merkkeuzes: welke merken wel/niet een dieptecluster verdienen.
