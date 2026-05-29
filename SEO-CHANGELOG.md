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

## 2026-05-29 — Audit-ronde 2: E-E-A-T site-breed afgemaakt

### Opgelost (P1 E-E-A-T, vervolg op ronde 1)
- `AuthorBox` + `MethodologyBadge` (RIVM/Vewin/EU-richtlijn 2020/2184, lastReviewed 2026-05-29)
  toegevoegd aan **54 extra commerciele/vergelijkings-/koopgidspagina's** die ze nog misten:
  - Oudere merk-/alternatief-pagina's: quooker-alternatief, grohe-red-alternatief,
    sodastream-alternatief, insinkerator-alternatief, quooker-versus-osmose, 4-in-1-kraan.
  - Oudere "beste X 2026": beste-osmosefilter-2026, beste-kokend-water-kraan-2026,
    beste-waterfilter-2026.
  - Alle `/vergelijken/*` (osmose-vs-filterkan, waterfilter-vs-waterontharder,
    kokend-water-kraan-merken, kraanwater-vs-flessenwater, osmose-vs-bronwater,
    omgekeerde-osmose-vergelijken, waterontharder-vergelijken).
  - Koop-/prijspagina's: omgekeerde-osmose/{kopen,prijs}, waterontharder/{kopen,prijs},
    kokend-water-kraan/{kopen,prijs}, waterfilter/kopen, osmose-filter/{kopen,prijs},
    heet-water-kraan/{kopen,vergelijken,prijs}, pfas-waterfilter/{kopen,vergelijken},
    koolstoffilter/{kopen,prijs}, waterontkalker/{kopen,vergelijken}, filterkan/kopen,
    keramisch-filter/kopen, uv-filter/kopen, sedimentfilter/kopen, drinkwaterfontein/kopen,
    kokend-water-kraan/4-in-1/vergelijken, alle `/beste-waterfilter/*` situatiepagina's.
- Trustblok geplaatst als eerste element van de contentcontainer (voor QuickAnswer/CTABanner),
  consistent met de kennisbank-volgorde. Patches met veiligheids-guard (geen plaatsing in hero).

### Resultaat
- **82 commerciele pagina's** hebben nu zichtbare E-E-A-T trust (auteur/redactie + bronnen + datum).
- Resteren: 2 pillar/overzichtspagina's (`/vergelijken`, `/beste-waterfilter`) die via de
  `ClusterHub`-component renderen; bewust niet geforceerd (pillar-type, routing/overzicht).

### Verificatie
- `npm run check-content`: 100%. `npm run build`: exit 0, 4.415 pagina's, geen errors.

## 2026-05-29 — JOEP waterontharder geplaatst (merkpagina, guideline-conform)

- Nieuwe merkpagina `/joep-waterontharder` (AquaSens) in het bestaande `/[merk]-waterontharder`
  patroon: FAQPage + BreadcrumbList + Brand-schema, QuickAnswer (speakable), AuthorBox +
  MethodologyBadge (bronnen: fabrikant/brochure, WRAS, Battelle Institute, RIVM), spectabel.
- **Guideline-conform** (afwijkend van het promotionele bronstuk):
  - Geen verzonnen "6-maanden-test" of sterren-rating; claims gebronde aan fabrikant/WRAS.
  - Energie-claim (Battelle) genuanceerd als indicatie, geen garantie; YMYL-nuance.
  - Geen absolute "beste"; eerlijke "voor wie minder geschikt" + "niet zinvol onder ~8 dH".
  - **Commerciele transparantie**: JOEP loopt via partner PureAqua + watervanjoep.nl;
    disclosure-blok + rel="sponsored"/"nofollow" op externe links.
- Integratie: toegevoegd aan koopgids-merkenlijst (`/beste-waterontharder-2026`),
  Merken-sectie op `/waterontharder` hub, `app/sitemap.ts` en `public/llms.txt`.
- Niet gedaan: de 40+ promotionele artikelen / "JOEP wint"-vergelijking / lokale JOEP-pagina's
  uit het bronstuk - die botsen met onafhankelijkheid, scaled-content en YMYL-regels.
- check-content 100%; build groen (4.416 paginas).
