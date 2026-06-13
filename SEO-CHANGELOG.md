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

## 2026-05-29 — PureFilter Mineral+ review geplaatst (evidence-first, guideline-conform)

- Nieuwe reviewpagina `/purefilter-review` in het transparante merkpagina-patroon (JOEP/The Source):
  Article + FAQPage + BreadcrumbList + Brand-schema, QuickAnswer (speakable), AuthorBox +
  MethodologyBadge (bronnen: EPA, WHO, NSF/ANSI-standaarden, RIVM).
- **Evidence-first, want het PureFilter-onderzoekspakket kon GEEN claim primair verifieren** (geen
  certificaatnummers, listings of labrapporten). Daarom:
  - Claim-bewijs-tabel die elke claim (PFAS, microplastics, zware metalen, fluoride, chloor,
    medicijnresten, NSF/ANSI 42/53/61/372, Swedish Mineral Rock) markeert als "geclaimd /
    niet onafhankelijk bevestigd" met "wat nog nodig is".
  - **Geen** verzonnen certificaatnummers, removal-percentages, sterren of cijferoordeel.
  - YMYL-nuance: microplastics-kennislacunes (WHO), PFAS-techniek (EPA), remineralisatie als
    smaak- niet gezondheidsclaim, "geen medisch advies".
  - Beoordelingsmethode-blok (bronnen, certificaten/labrapporten gevonden? nee, controledatum,
    commerciele disclosure).
- **Scope-keuze (door gebruiker bevestigd): alleen de reviewpagina, geen near-duplicates.** De
  non-branded gidsen uit het pakket (PFAS, microplastics, onder-aanrecht, beste-waterfilter,
  fluoride, zware metalen, medicijnresten, mineralisatie, NSF-uitleg) bestaan al op de site
  (`/pfas-waterfilter`, `/waterfilter/microplastics`, `/waterfilter/onder-aanrecht`,
  `/beste-waterfilter(-2026)`, `/waterfilter/fluoride`, `/omgekeerde-osmose/remineralisatie`,
  `/keurmerken/nsf-ansi-42-53`, e.a.) -> overslaan i.v.m. kannibalisatie/scaled content.
  Vergelijkingspagina's (PureFilter vs Brita/ZeroWater/AquaTru) overgeslagen: met 0 geverifieerde
  PureFilter-data zou een vergelijking dun zijn en het pakket verbiedt een winnaar bij
  asymmetrisch bewijs. Details in `PUREFILTER-IMPLEMENTATIE.md`.
- Integratie: opgenomen in `app/sitemap.ts`, doorgelinkt vanuit de `/waterfilter`-hub en
  `/waterfilter/onder-aanrecht`, en toegevoegd aan `public/llms.txt`.
- build groen; `/purefilter-review` als static gegenereerd.

## 2026-05-29 — The Source 50 geplaatst (osmose-merkpagina, guideline-conform)

- Nieuwe merk-/productpagina `/the-source` (PureAqua) in het transparante merkpagina-patroon van
  JOEP: Article + FAQPage + BreadcrumbList + Brand + Product/Offer-schema, QuickAnswer (speakable),
  AuthorBox + MethodologyBadge (bronnen: fabrikant/PureAqua, NSF/ANSI 58, RIVM, Vewin), spectabel.
- **5 aangeleverde artikelen geconsolideerd tot 1 pagina** (anti-kannibalisatie): de bronartikelen
  over koopwijzer, waterverspilling en kosten overlappen met de bestaande osmose-cluster
  (`/omgekeerde-osmose`, `/beste-osmosefilter-2026`). In plaats van 5 bijna-duplicaten die met de
  eigen cluster zouden concurreren, is alle feitelijke inhoud (stroomloos, circa 1:1 verhouding,
  NSF/ANSI 58, circa 99%, vanaf 395 euro, filterset ca. 89 euro/jaar, 100 dagen proef, 2 jaar
  garantie, remineralisatie) samengebracht op een productpagina die naar de cluster doorlinkt.
- **Guideline-conform**:
  - Geen verzonnen test/sterren-rating; specs/prijzen gebronde aan de aanbieder, met "controleer
    actuele prijzen".
  - YMYL-nuance: RO verwijdert ook mineralen + "geen medisch advies"; afvalwaterverhouding "laag
    maar niet nul"; kraanwater is op zichzelf al veilig, RO is keuze geen noodzaak.
  - **Commerciele transparantie**: disclosure-blok dat WaterfilterPlatform aan PureAqua gelieerd is;
    enige externe CTA met rel="sponsored nofollow" naar pureaqua.nl; verder rustige interne CTAs.
- Integratie: opgenomen in `app/sitemap.ts`, doorgelinkt vanuit de `/omgekeerde-osmose`-hub en de
  koopgids `/beste-osmosefilter-2026`, en toegevoegd aan `public/llms.txt`.
- check-content 100%; build groen; `/the-source` als static gegenereerd.

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

## 2026-05-29 — Waterontharder SEO-strategie: clusterarchitectuur gecompleteerd

### Belangrijke noot (transparantie, conform handover "geen content verzinnen")
- Van de 4 in de opdracht genoemde documenten waren alleen WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md
  en het JOEP-stuk aanwezig. WATERONTHARDERS_KEYWORD_RESEARCH.md, WATERONTHARDERS_CONTENT_CLUSTERS.md
  en WATERONTHARDERS_QUICK_WIN_PAGES.md ONTBREKEN in de repo/uploads. Hun inhoud is NIET verzonnen.
- De waterontharder-cluster was bovendien in eerdere rondes al grotendeels gebouwd: pillar
  /waterontharder + ~30 sub-pagina's (werking, kosten, prijs, onderhoud, zout x4, regeneratie,
  installeren, capaciteit, storingen, twin-tank, harsbed, bypass, elektrisch, zoutloos,
  vs-osmose, appartement, verhuurder, aquarium, zakelijk, huren), 11 long-tail MDX,
  10 merkpagina's + JOEP, /beste-waterontharder-2026 en de /vergelijken-pagina's.

### Toegevoegd (de twee echte, niet-duplicerende gaps in de gevraagde architectuur)
- `/waterontharder/nadelen` - eigen zoekintentie "waterontharder nadelen" (distinct van
  zacht-water-nadelen.mdx). Eerlijk/balanced, YMYL-nuance op natrium, "wanneer niet zinvol".
- `/waterontharder/gezondheid` - "is onthard water gezond" (breder dan de natrium-MDX);
  zware YMYL-nuance, disclaimer (geen medisch advies), bronnen (RIVM/Vewin/Gezondheidsraad).
- Beide: Article + BreadcrumbList + FAQPage schema, speakable QuickAnswer, AuthorBox +
  MethodologyBadge, rustige CTA (keuzehulp/vergelijken, geen agressieve sales).
- Interne links: gelinkt vanuit de pillar /waterontharder (Gerelateerde onderwerpen) en
  onderling + naar kosten/prijs/vs-osmose/zoutloos/natrium-MDX/keuzehulp; in sitemap opgenomen.

### Bewust NIET gedaan
- Geen extra near-duplicate waterontharder-pagina's (cluster is verzadigd; zou doorway/duplicate
  MUST-regels schenden). Quick-win/keyword/cluster-docs kunnen alsnog verwerkt worden zodra ze
  worden aangeleverd.
- check-content 100%; build groen (4.418 paginas).
