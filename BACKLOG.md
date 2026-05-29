# BACKLOG - live wachtrij (van boven naar beneden afwerken)

Alleen volledig autonome, verifieerbare taken. Beslissingen/accounts/productie staan in
ROADMAP.md onder "Voor mij: beslissingen nodig".

Standaard "klaar wanneer" voor een **merk-/vergelijkings-pagina (TSX)**: pagina bestaat volgens
het bestaande template (FAQPage + BreadcrumbList schema, QuickAnswer/speakable, AuthorBox +
MethodologyBadge, CTABanner, vergelijkings-/TCO-tabel waar passend, FAQ-`<details>`,
"Gerelateerde onderwerpen"); uniek self-referential canonical; opgenomen in `app/sitemap.ts`;
interne links naar parent-hub + cross-links; vooraf kannibalisatie-gecheckt tegen bestaande
slugs; alleen rechte ASCII-aanhalingstekens; `npm run build` groen en route static gegenereerd.
Voor **MDX**: frontmatter compleet, >=700 woorden, quickAnswer, >=2 interne links, geregistreerd
in `app/kennisbank/page.tsx`, `npm run check-content` 100%.

## CONTENT (nu)

- [x] 1. `/brita-alternatief` (page) - "brita alternatief"; Brita = 801 interne vermeldingen, geen eigen merkpagina. Funnel naar /filterkan + /omgekeerde-osmose. Kannibalisatie-check vs bestaande `brita-vs-osmose`/`brita-vs-bwt` (andere intentie: alternatief != vergelijking). Klaar wanneer: zie TSX-standaard hierboven. (af: build groen, static prerendered, in sitemap)
- [x] 2. `/zerowater-alternatief` (page) - "zerowater alternatief" (29 vermeldingen, RO/filter-intentie). Funnel naar /omgekeerde-osmose + /filterkan. Klaar wanneer: TSX-standaard. (af: build groen, static prerendered, in sitemap)
- [x] 3. `/aquatru-alternatief` (page) - "aquatru alternatief" (RO-merk). Funnel naar /omgekeerde-osmose + /beste-osmosefilter-2026. Klaar wanneer: TSX-standaard. (af: build groen, static prerendered, in sitemap)
- [x] 4. `/selsiuz` (page) - neutrale merk-hub (73 vermeldingen) analoog aan /quooker; overzicht + links naar sub-intents en /selsiuz-alternatief. Distinct van de alternatief-pagina. Klaar wanneer: TSX-standaard + linkt naar >=2 eigen sub-pagina's.
- [x] 5. `/selsiuz-prijs` (page) - "selsiuz prijs/kosten" met indicatieve TCO-tabel (+ datum, geen prijs-als-feit). Klaar wanneer: TSX-standaard, parent /selsiuz.
- [x] 6. `/selsiuz-onderhoud` (page) - "selsiuz onderhoud/filter vervangen". Klaar wanneer: TSX-standaard, parent /selsiuz.
- [x] 7. `/grohe-blue` (page) - neutrale merk-hub (110 vermeldingen) analoog aan /quooker. Klaar wanneer: TSX-standaard + linkt naar >=2 eigen sub-pagina's.
- [x] 8. `/grohe-blue-prijs` (page) - "grohe blue prijs/kosten" indicatieve TCO. Klaar wanneer: TSX-standaard, parent /grohe-blue.
- [x] 9. `/grohe-blue-filter` (page) - "grohe blue filter vervangen/kosten". Klaar wanneer: TSX-standaard, parent /grohe-blue.
- [x] 10. `/vergelijken/quooker-vs-grohe-red` (page) - kokend-water merk-duo. Klaar wanneer: TSX-standaard, parent /vergelijken.
- [x] 11. `/vergelijken/selsiuz-vs-grohe-blue` (page) - merk-duo. Klaar wanneer: TSX-standaard, parent /vergelijken.
- [x] 12. Long-tail kennisbank-ronde: 3 nieuwe MDX-artikelen in onderbenutte sub-thema's (elk eerst kannibalisatie-gecheckt tegen bestaande slugs). Klaar wanneer: 3 artikelen voldoen aan MDX-standaard; check-content 100%; build groen.

## TECHNIEK (later - verplaatst naar onderen)

- [x] T1. Test-harness opzetten (Node built-in runner, `test/` map, `npm test` + `npm run verify`-skelet) - klaar wanneer: `npm test` draait, >=1 test slaagt, exit 0; build blijft groen.
- [x] T2. Unit-tests voor `scripts/check-content.mjs`-kernregels - klaar wanneer: fout-fixture faalt, goede fixture slaagt; `npm test` groen.
- [x] T3. `scripts/check-links.mjs` (interne-link-resolver) - klaar wanneer: exit-code + test dekt bekende-goede/foute link.
- [x] T4. Dode interne links repareren - klaar wanneer: `node scripts/check-links.mjs` 0 dode links; build groen.
- [x] T5. `scripts/check-sitemap.mjs` (volledigheid) - klaar wanneer: rapporteert ontbrekende routes; test groen.
- [x] T6. Sitemap-gaten dichten - klaar wanneer: 0 onverklaarde ontbrekende routes; build groen.
- [ ] T7. `scripts/audit-html.mjs` (post-build canonical/title/h1/description/JSON-LD) - klaar wanneer: rapporteert violations met exit-code over de hele build.
- [ ] T8. Violations uit T7 oplossen - klaar wanneer: 0 fouten (of gedocumenteerde uitzonderingen); build groen.
- [ ] T9. Article-schema toevoegen aan commerciele merk-/vergelijkingspagina's (SEO-AUDIT P2) - klaar wanneer: audit-html ziet Article-JSON-LD; build groen.
- [ ] T10. `scripts/check-typography.mjs` met baseline-ratchet - klaar wanneer: baseline vast, exit!=0 alleen bij stijging; test bevestigt falen bij nieuwe overtreding.
- [ ] T11. `npm run verify` bundelen - klaar wanneer: draait alle gates met een exit-code.
- [ ] T12. `scripts/site-health.mjs` -> `SITE-HEALTH.md` - klaar wanneer: genereert het bestand; `npm test` bevestigt foutloze run.
