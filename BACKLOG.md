# BACKLOG - live wachtrij (van boven naar beneden afwerken)

Ronde 1-6 afgerond (zie WORKLOG.md + git-historie). De volledige 50-item AEO/GEO-backlog
(`AI-FINDABILITY-BACKLOG.md`) is af: 47 DONE, 3 principieel uitgesteld (ROADMAP "voor mij").

Hieronder de **RONDE 7-backlog**: performance, diepere a11y, klikdiepte echt naar <=3,
en gerichte content. Alleen volledig autonome, verifieerbare taken. Per taak: criterium +
`npm test`/`npm run verify`/`npm run build && npm run audit-html` groen + commit + WORKLOG-regel.

## Fase P - Performance & Core Web Vitals (autonoom meetbaar)

- [ ] P1. Build-budget-gate (`check-bundle.mjs`): faalt als de grootste route-bundel boven een baseline groeit. Klaar wanneer: gate leest `.next` build-output, baseline vastgelegd, test + exit 0.
- [ ] P2. `next/font` lokaal borgen + `font-display: swap` (al via Geist?) verifieren; gate dat geen render-blocking externe font geladen wordt. Klaar wanneer: audit bevestigt 0 externe font-requests in HTML; build groen.
- [ ] P3. Expliciete `width`/`height` of `aspect-ratio` op alle hero/SVG-illustraties (CLS-preventie). Klaar wanneer: audit toont 0 layout-shift-risico-elementen; audit-html 0.
- [ ] P4. Preconnect/dns-prefetch alleen waar nodig; verwijder ongebruikte. Klaar wanneer: head-audit toont alleen noodzakelijke resource-hints; build groen.

## Fase L - Klikdiepte echt naar <=3

- [ ] L1. `/onderwerpen` uitbreiden met tweede niveau (sub-hubs) zodat de 109 diepe routes <=3 kliks worden. Klaar wanneer: `npm run linkdepth` rapporteert 0 routes > 3 (programmatische gemeente-laag gedocumenteerd uitgezonderd).
- [ ] L2. `check-linkdepth` aan `npm run verify` toevoegen zodra L1 0 oplevert. Klaar wanneer: gate exit 0 in verify; test groen.
- [ ] L3. Footer-/hub-links aanvullen waar een cluster-root nog niet shallow bereikbaar is. Klaar wanneer: 0 onbereikbare statische routes in linkdepth-rapport.

## Fase A2 - Diepere toegankelijkheid (AI + mens)

- [ ] A2-1. Heading-hierarchie-gate (geen overgeslagen niveaus, 1 h1) over gebouwde HTML. Klaar wanneer: gate 0 overtredingen; aan audit-chain; test.
- [ ] A2-2. Landmark-/aria-audit (main/nav/footer aanwezig, knoppen met labels). Klaar wanneer: gate 0 overtredingen op steekproef; build groen.
- [ ] A2-3. Kleurcontrast-controle van de merkkleuren (tekst op achtergrond >= WCAG AA). Klaar wanneer: rapport bevestigt AA voor body/links; documenteer uitzonderingen.

## Fase C7 - Gerichte content (kannibalisatie-gecheckt)

- [ ] C7-1. 4 long-tail kennisbank-MDX in geverifieerde witruimte. Klaar wanneer: check-content 100%, takeaways + quickAnswer aanwezig, build groen.
- [ ] C7-2. 2 nieuwe vergelijkingen of een klein nieuw cluster in echte witruimte. Klaar wanneer: TSX-standaard, in sitemap+llms, 0 orphans, audit 0.
- [ ] C7-3. takeaways aanvullen op de 30 meest bekeken/citatie-waardige artikelen (inhoud-getrouw). Klaar wanneer: check-aeo takeaways-metric stijgt; build groen.

## Fase S - Schema & AEO-verfijning

- [ ] S1. `Question`-FAQ's uit MDX-koppen aggregeren naar `/faq.json` (naast de quickAnswer-Q&A's). Klaar wanneer: faq.json bevat ook in-artikel-FAQ's; valide JSON; test.
- [ ] S2. `BreadcrumbList` self-check uitbreiden: positie/volgorde valide per pagina. Klaar wanneer: check-schema valideert itemListElement-volgorde; test.
- [ ] S3. quickAnswer-sweet-spot (40-60 woorden) van warning naar zachte ratchet (mag niet verslechteren). Klaar wanneer: check-aeo rapporteert sweet-spot-% met baseline; test.

## Afsluiting

- [ ] Z. `SITE-HEALTH.md` hergenereren + WORKLOG bijwerken + publiceren.

## Definition of Done (ronde 7)
Backlog leeg, `npm test` groen, `npm run verify` exit 0, `npm run build` groen,
post-build chain (audit-html + check-schema + check-a11y + check-aeo) 0 violations,
0 orphans / 0 llms-gaten, `npm run linkdepth` 0 te-diepe routes, SITE-HEALTH actueel, alles gepusht.

## Voor mij: beslissingen nodig (NIET autonoom) - zie ROADMAP.md
PR mergen/productie, affiliate-CTA-bestemmingen, GSC/Bing/IndexNow, gemeente-laag-besluit (incl. lokale FAQ),
PureFilter-bewijsdossier, merkstrategie, echte auteur-/reviewer-persoon (item 32), QAPage bij echte Q&A-pagina's (item 12).
