# SEO-changelog

Wijzigingen volgens `WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`.

## 2026-05-29 — Verankering standaard + eerste audit-ronde

### Standaard verankerd
- `WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md` in project-root geplaatst.
- `CLAUDE.md` bijgewerkt: handover-document is de verplichte, automatisch te raadplegen
  SEO + AI Search-standaard bij elke pagina-, content- en technische wijziging.
- `SEO-AUDIT.md` toegevoegd (volledige audit, P0/P1/P2/P3).

### Opgeloste issues (veilig, P1/P2)
- **P1 E-E-A-T:** `AuthorBox` + `MethodologyBadge` (bronnen: RIVM, Vewin, EU-richtlijn 2020/2184;
  lastReviewed 2026-05-29) toegevoegd aan 28 commerciele/vergelijkingspagina's die ze misten:
  - 10x `/[merk]-waterontharder` (bwt, grunbeck, ecowater, harvey, viteau, aquacell, maxima,
    culligan, kinetico, erie)
  - 5x `/[merk]-alternatief` (selsiuz, grohe-blue, boretti, fonteq, waterdrop)
  - 5x `/vergelijken/*` (quooker-vs-selsiuz, grohe-blue-vs-grohe-red, bwt-vs-grunbeck,
    harvey-vs-bwt, zoutloze-waterontharder-vergelijken)
  - `/beste-filterkan-2026`, `/beste-waterontharder-2026`, `/begrippenlijst`
  - 5x `/drinkwaterfontein/*` (soorten, leidinggebonden-vs-fles, met-bruiswater, koeling, contactloos)
  Trustblok geplaatst voor de QuickAnswer, consistent met de kennisbank-template-volgorde.
- **P2 AI-discovery:** `app/robots.ts` uitgebreid met expliciete `OAI-SearchBot` (ChatGPT Search)
  en `Perplexity-User`, naast de bestaande AI-crawlers. (Waren al toegestaan via `*`.)

### Verificatie
- `npm run check-content`: 100% geslaagd.
- `npm run build`: exit 0, 4.415 statische pagina's, geen errors.

### Bewust NIET gedaan (gemotiveerd)
- Gemeente-programmatische laag (~3.500 pagina's) niet ge-noindexed/geconsolideerd: vereist
  GSC-data; blind verwijderen zou waarde en functionaliteit kunnen breken (zie SEO-AUDIT.md P1).
- Geen `Article`-schema toegevoegd aan commerciele pagina's in deze ronde (P2, vervolgronde),
  nu trustblokken zichtbaar zijn kan dat in een volgende stap correct.
