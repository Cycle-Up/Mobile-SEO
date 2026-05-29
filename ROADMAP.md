# ROADMAP - Waterfilterplatform.nl (autonome werkstroom)

Grotere brokken in logische volgorde. Live wachtrij: `BACKLOG.md`, logboek: `WORKLOG.md`.
Focus: **content** eerst (merk-/vergelijkings-/kennisbanklaag), techniek daarna.

Onderbouwing (inventarisatie 2026-05-29): de informationele clusters zijn vrijwel verzadigd en
de gedocumenteerde CONTENT_GAPS-items zijn gebouwd. De echte witte vlek is de **commerciele
merklaag**: Quooker heeft een diep cluster (11 pagina's) terwijl even vaak intern genoemde
merken geen hub/sub-pagina's hebben - Brita (801 interne vermeldingen), SodaStream (243),
Grohe Blue (110), Selsiuz (73), Waterdrop (55). Ook ontbreken vrijwel alle logische
merk-vs-merk-vergelijkingen. Elke nieuwe pagina wordt vooraf tegen bestaande slugs en
`CANNIBALIZATION-AUDIT.md` gecheckt.

## CONTENT (eerst)

### C1. Merk-alternatief-pagina's afmaken — DONE (brita/zerowater/aquatru-alternatief)
Het bewezen `/[merk]-alternatief`-patroon uitbreiden naar hoog-vermelde merken zonder eigen
pagina (Brita, ZeroWater, AquaTru). Funnel naar /filterkan + /omgekeerde-osmose.

### C2. Merk-diepteclusters (Quooker-model uitrollen) — DONE (Selsiuz- + Grohe Blue-cluster)
Voor hoogst-vermelde merken zonder diepte (Selsiuz, Grohe Blue): een neutrale merk-hub +
2-3 sub-intent pagina's (prijs/kosten, onderhoud/filter, modellen). Distinct van de
alternatief-pagina (die "waarom overstappen" framet); de hub is neutrale merkinfo.

### C3. Ontbrekende merk-vs-merk vergelijkingen — DONE (quooker-vs-grohe-red, selsiuz-vs-grohe-blue)
De `/vergelijken/`-matrix aanvullen met logische duo's die nog ontbreken
(quooker-vs-grohe-red, selsiuz-vs-grohe-blue, en osmose-merk-duo's).

### C4. Long-tail kennisbank-uitbreiding — DONE (ronde: strijkijzer-stoom, ijsblokjes-helder-maken, vaatwasserzout-vs-waterontharderzout)
Nieuwe MDX in onderbenutte sub-thema's, elk vooraf kannibalisatie-gecheckt tegen de 384
bestaande slugs. Per artikel: >=700 woorden, quickAnswer, >=2 interne links, registratie in
`app/kennisbank/page.tsx`.

### C5. "Beste X 2026" + seizoenscontent — DONE voor het autonome deel (jaar-koopgidsset compleet incl. /beste-filterkan-2026; verdere seizoens-updates vergen redactionele/actualiteitskeuzes)
Categorieen die de jaar-koopgids-set nog mist; seizoens-/normen-updates met information gain.

## TECHNIEK (later - verplaatst naar onderen)

### T1. Verificatie-fundament — DONE (node --test, npm test, npm run verify)
Testlaag met Node's ingebouwde runner (`node --test`), `npm test` + `npm run verify`. Geen
nieuwe dependency.

### T2. SEO-invarianten als automatische checks — DONE (check-links, check-sitemap, audit-html)
Interne-link-resolver, sitemap-volledigheid, post-build HTML-audit (canonical / title /
1x h1 / meta-description / valide JSON-LD).

### T3. Bevindingen repareren — DONE (24 dode links, 4 sitemap-gaten, 1644 HTML-violations, Article-schema op 35 pagina's)
Dode interne links, sitemap-gaten, ontbrekend Article-schema (SEO-AUDIT P2), JSON-LD-fouten.

### T4. Hygiene-ratchet — DONE (check-typography baseline-ratchet); content-gate uitbreiden = optioneel vervolg
Typografie-baseline die niet mag stijgen; check-content aanvullen met DoD-regels.

### T5. OG-image pipeline (P3) — DONE (opengraph-image + twitter-image PNG via next/og)
1200x630 PNG's voor hub-pagina's via next/og (geen extra dependency).

### T6. Site-health observability — DONE (scripts/site-health.mjs -> SITE-HEALTH.md)
Afgeleide SITE-HEALTH.md uit scriptoutput; tracking-docs bundelen.

## Voor mij: beslissingen nodig (NIET autonoom)
- PR #3 mergen / naar productie publiceren.
- Affiliate-CTA-bestemmingen voor merkpagina's (nu interne CTABanner; echte bestemming = jouw input).
- GSC + Bing Webmaster Tools koppelen + IndexNow draaien na deploy.
- Gemeente-programmatische laag (~3.500 pagina's): wel/niet noindexen/consolideren (vereist GSC-data).
- PureFilter-claims naar "bevestigd" (vereist bewijsdossier van fabrikant).
- Strategische merkkeuzes: welke merken wel/niet een dieptecluster verdienen.
