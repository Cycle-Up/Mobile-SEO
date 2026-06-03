# CONTENT-BACKLOG (AI-vindbaarheid) - 100 items

Doel: de inhoud van Waterfilterplatform.nl uitbreiden en verrijken zodat AI-zoeksystemen
(ChatGPT/Search, Claude, Perplexity, Gemini, Google AI Overviews) het platform vaker en
nauwkeuriger citeren. Puur content-gericht (nieuwe artikelen, verrijking, clusters).

**Werkregels (elk item):** volledig autonoom; conform `WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`
(people-first, geen dunne/commodity content, geen verzonnen tests/claims/cijfers, YMYL-zorgvuldigheid
met disclaimer + bronnen, JSON-LD = ware representatie); alleen ASCII; en `npm run check-content` 100%,
`npm test` + `npm run verify` + `npm run build && npm run audit-html` groen na elke afgeronde groep.

**Standaard sub-stappen voor een NIEUW kennisbankartikel (MDX):**
(1) definitieve slug + kannibalisatie-check tegen bestaande 409 slugs + `CANNIBALIZATION-AUDIT.md`;
(2) schrijf >=700 woorden, definition-first waar passend, `quickAnswer` (20-75 w), `takeaways`,
    >=2 interne links naar canonieke URL's, CTA, FAQ-`?`-koppen; (3) registreer in
    `app/kennisbank/page.tsx`, regenereer `llms-full.txt`, `check-content` 100%, build groen.
Elke nieuwe vergelijking/hub volgt de TSX-standaard (Article+FAQPage+BreadcrumbList, QuickAnswer,
AuthorBox+MethodologyBadge, semantische tabel, in sitemap+llms, 0 orphans, audit 0).

---

## Thema 1 - Water in de keuken: koken & recepten (long-tail use-cases)

### 1. [DONE] Water voor pasta koken: zout, hardheid en smaak
- [ ] Slug + kannibalisatie-check (bestaat geen pasta-artikel).
- [ ] Artikel: rol van hardheid/zout, wanneer gefilterd loont, kooktips.
Klaar wanneer: MDX-standaard, check-content 100%, build groen.

### 2. [DONE] Water voor rijst en risotto: helderheid en kleefgedrag
- [ ] Slug + gap-check (rijstkoker bestaat; dit is kooktechniek, distinct).
- [ ] Artikel: spoelen, hardheid, smaakverschil.
Klaar wanneer: MDX-standaard, 100% check-content.

### 3. [DONE] Bouillon en fond trekken met gefilterd water
- [ ] Slug + gap-check (slowcooker bestaat; dit is bouillon-specifiek).
- [ ] Artikel: pure smaak, indikken, zout/chloor-effect.
Klaar wanneer: MDX-standaard, build groen.

### 4. [DONE] Water voor sauzen en jus: smaakbasis
- [ ] Slug + gap-check.
- [ ] Artikel: reductie concentreert mineralen/chloor, advies.
Klaar wanneer: MDX-standaard.

### 5. [DONE] Groente koken en blancheren: kleur en mineralen
- [ ] Slug + gap-check.
- [ ] Artikel: hardheid en kleurbehoud, zout, kooktijd.
Klaar wanneer: MDX-standaard.

### 6. [DONE] Eieren koken in hard water: kalk op schaal en pan
- [ ] Slug + gap-check.
- [ ] Artikel: kalkaanslag, schil pellen, pan beschermen.
Klaar wanneer: MDX-standaard.

### 7. [DONE] Pizzadeeg en gistdeeg: waterkwaliteit en gisting
- [ ] Slug + gap-check (zuurdesem-starter bestaat; gistdeeg distinct).
- [ ] Artikel: chloor en gist, hardheid en glutenstructuur.
Klaar wanneer: MDX-standaard.

### 8. [DONE] Water voor sportdrank/elektrolyten zelf maken
- [ ] Slug + gap-check.
- [ ] Artikel: basiswaterkeuze, smaak, mineralenbalans (geen gezondheidsclaims).
Klaar wanneer: MDX-standaard, YMYL-zorgvuldig.

### 9. [DONE] Water voor koffiezetapparaat-recepten (espresso vs filter TDS)
- [ ] Slug + gap-check (osmose-water-koffie* bestaat; dit is TDS-recept-angle).
- [ ] Artikel: streef-TDS per methode, mengverhouding osmose+kraan.
Klaar wanneer: MDX-standaard.

### 10. [DONE] Water voor thee per soort (groen/zwart/kruiden) en temperatuur
- [ ] Slug + gap-check (matcha + osmose-water-thee bestaan; per-soort distinct).
- [ ] Artikel: hardheid per theesoort, temperatuur, smaak.
Klaar wanneer: MDX-standaard.

## Thema 2 - Gezondheid & doelgroepen (YMYL, met disclaimer + bronnen)

### 11. [DONE-covered] Drinkwater voor sporters en hydratatie
- [ ] Slug + gap-check.
- [ ] Artikel: feitelijk, disclaimer, RIVM/WHO-bronnen, geen claims.
Klaar wanneer: MDX-standaard, isYmyl detecteert -> disclaimer + >=3 bronnen.

### 12. [DONE-covered] Drinkwater voor ouderen/senioren
- [ ] Slug + gap-check.
- [ ] Artikel: aandachtspunten, kwetsbare groepen, disclaimer.
Klaar wanneer: MDX-standaard, YMYL-compliant.

### 13. [DONE-covered] Water en nierstenen: wat zegt de wetenschap (genuanceerd)
- [ ] Slug + gap-check (nierstenen-water-hardheid bestaat -> mogelijk enhancement i.p.v. nieuw).
- [ ] Bij echte gap: artikel met nuance + bronnen; anders verrijk bestaand.
Klaar wanneer: MDX-standaard of verrijking; YMYL-compliant.

### 14. [DONE] Drinkwater bij een verzwakt immuunsysteem
- [ ] Slug + gap-check.
- [ ] Artikel: voorzorg, koken/filteren, disclaimer + bronnen.
Klaar wanneer: MDX-standaard, YMYL-compliant.

### 15. [DONE] Water en huidklachten/eczeem (hard water nuance)
- [ ] Slug + gap-check (douche-huid-haar bestaat; drinkwater-angle distinct).
- [ ] Artikel: feitelijk, geen medische claims, disclaimer.
Klaar wanneer: MDX-standaard, YMYL-compliant.

### 16. [DONE-covered] Drinkwater en zwangerschap: praktische gids (genuanceerd)
- [ ] Slug + gap-check (drinkwater/zwangerschap TSX bestaat -> kennisbank-verdieping distinct of enhancement).
- [ ] Artikel/verrijking met bronnen + disclaimer.
Klaar wanneer: MDX-standaard of verrijking, YMYL-compliant.

### 17. [DONE-covered] Water voor zuigelingen/flesvoeding: koken vs filteren
- [ ] Slug + gap-check (babywater cluster bestaat -> enhancement waarschijnlijk).
- [ ] Verrijk of nieuw artikel met duidelijke afweging + disclaimer.
Klaar wanneer: MDX-standaard of verrijking.

### 18. [DONE] Drinkwater en medicijngebruik (algemeen, genuanceerd)
- [ ] Slug + gap-check.
- [ ] Artikel: feitelijk, verwijs naar arts/apotheker, disclaimer.
Klaar wanneer: MDX-standaard, YMYL-compliant.

### 19. [DONE-covered] Hoeveel water per dag: feiten vs mythes
- [ ] Slug + gap-check.
- [ ] Artikel: nuance, bronnen, geen absolute claims.
Klaar wanneer: MDX-standaard, YMYL-compliant.

### 20. [DONE] Mineraalarm water langdurig drinken: wat weten we
- [ ] Slug + gap-check.
- [ ] Artikel: WHO-nuance over demineralisatie, remineralisatie-advies, disclaimer.
Klaar wanneer: MDX-standaard, YMYL-compliant.

## Thema 3 - Huishoudelijke apparaten & kalk

### 21. [DONE-covered] Kalk in de vaatwasser: oorzaken en oplossingen
- [ ] Slug + gap-check.
- [ ] Artikel: regenereerzout, glansspoelmiddel, hardheid instellen.
Klaar wanneer: MDX-standaard.

### 22. [DONE-covered] Kalk in de wasmachine: gevolgen en preventie
- [ ] Slug + gap-check.
- [ ] Artikel: verwarmingselement, wasmiddeldosering, ontharder.
Klaar wanneer: MDX-standaard.

### 23. [DONE] Kalk op kranen en douchekop verwijderen
- [ ] Slug + gap-check.
- [ ] Artikel: methodes, preventie met zacht water.
Klaar wanneer: MDX-standaard.

### 24. [DONE-covered] Kalk in de cv-ketel en warmtewisselaar
- [ ] Slug + gap-check.
- [ ] Artikel: rendementsverlies, vulwater, onderhoud.
Klaar wanneer: MDX-standaard.

### 25. [DONE-covered] Waterkoker ontkalken: hoe vaak en waarmee
- [ ] Slug + gap-check.
- [ ] Artikel: frequentie per hardheid, azijn/citroenzuur, preventie.
Klaar wanneer: MDX-standaard.

### 26. [DONE-covered] Strijkijzer en stoomstation: kalk en welk water
- [ ] Slug + gap-check (waterfilter-strijkijzer-stoom bestaat -> enhancement of distinct hoek).
- [ ] Verrijk of nieuw met onderhoudshoek.
Klaar wanneer: MDX-standaard of verrijking.

### 27. [DONE-covered] Luchtbevochtiger: welk water en witte stofneerslag
- [ ] Slug + gap-check.
- [ ] Artikel: mineralen en witte stof, gedemineraliseerd water.
Klaar wanneer: MDX-standaard.

### 28. [DONE-covered] Aquarium en osmosewater: zoetwater bijvullen (verdieping)
- [ ] Slug + gap-check (osmose-water-aquarium* bestaat -> distinct bijvul-hoek of enhancement).
- [ ] Verrijk of nieuw.
Klaar wanneer: MDX-standaard of verrijking.

### 29. [DONE-covered] Koffiemachine met bonen: ontkalken en filterpatroon
- [ ] Slug + gap-check (kalk-koffiemachine bestaat -> onderhoud/patroon-hoek distinct).
- [ ] Artikel/verrijking onderhoud + waterfilterpatroon.
Klaar wanneer: MDX-standaard of verrijking.

### 30. [DONE-covered] Stoomoven en combisteamer: ontkalken + welk water (verdieping)
- [ ] Slug + gap-check (waterfilter-stoomoven bestaat -> ontkalkings-hoek).
- [ ] Verrijk bestaand met onderhoudssectie.
Klaar wanneer: verrijking; check-content 100%.

## Thema 4 - Omgekeerde osmose verdieping

### 31. [DONE-covered] Osmose afvalwater hergebruiken in huis en tuin
- [ ] Slug + gap-check (afvalwater TSX bestaat -> hergebruik-hoek distinct).
- [ ] Artikel: waar wel/niet voor gebruiken, zoutgehalte.
Klaar wanneer: MDX-standaard.

### 32. [DONE-covered] Osmose waterverbruik en -besparing (afvalwaterverhouding)
- [ ] Slug + gap-check.
- [ ] Artikel: 1:1 vs 1:3, boosterpomp, kostenplaatje.
Klaar wanneer: MDX-standaard.

### 33. [DONE-covered] Osmose en waterdruk: minimale druk en oplossingen
- [ ] Slug + gap-check (boosterpomp TSX bestaat -> druk-uitleg distinct).
- [ ] Artikel: drukbereik, symptomen lage druk, oplossingen.
Klaar wanneer: MDX-standaard.

### 34. [DONE-covered] Osmosewater pH en zuurgraad uitgelegd
- [ ] Slug + gap-check (osmose-water/ph TSX bestaat -> kennisbank-verdieping of enhancement).
- [ ] Verrijk of nieuw met meetuitleg.
Klaar wanneer: MDX-standaard of verrijking.

### 35. [DONE] Osmose installeren: onder aanrecht stap-voor-stap (HowTo)
- [ ] Slug + gap-check.
- [ ] Artikel met genummerde stappen -> HowTo-schema (ware representatie).
Klaar wanneer: MDX-standaard, HowTo valideert (check-schema 0).

### 36. [DONE] Osmose voorraadvat: werking, druk en hygiene
- [ ] Slug + gap-check.
- [ ] Artikel: tankdruk, doorstroming, reinigen.
Klaar wanneer: MDX-standaard.

### 37. [DONE] Osmosemembraan levensduur en sanitiseren
- [ ] Slug + gap-check (osmose-filter-vervangen onderhoud bestaat -> sanitiseren distinct).
- [ ] Artikel: levensduur, spoelen, desinfecteren.
Klaar wanneer: MDX-standaard.

### 38. [DONE] Tankless vs tank-osmose: verschil en keuze
- [ ] Slug + gap-check.
- [ ] Artikel: doorstroomsysteem vs voorraadvat, voor/nadelen.
Klaar wanneer: MDX-standaard.

### 39. [DONE-covered] Osmose op kantoor/horeca: capaciteit en hygiene
- [ ] Slug + gap-check (zakelijk cluster bestaat -> osmose-specifiek distinct).
- [ ] Artikel: capaciteit, legionella-zorg, onderhoud.
Klaar wanneer: MDX-standaard.

### 40. [DONE-covered] Stroomloze osmose (The Source-type) uitgelegd
- [ ] Slug + gap-check (the-source TSX bestaat -> techniek-uitleg distinct of enhancement).
- [ ] Artikel/verrijking over werking zonder stroom.
Klaar wanneer: MDX-standaard of verrijking.

## Thema 5 - Waterontharder & hardheid

### 41. [DONE-covered] Waterontharder zoutverbruik berekenen
- [ ] Slug + gap-check (waterontharder-zout onderhoud bestaat -> berekening distinct).
- [ ] Artikel: verbruik per hardheid/gezinsgrootte, kosten.
Klaar wanneer: MDX-standaard.

### 42. [DONE-covered] Waterontharder instellen op jouw hardheid
- [ ] Slug + gap-check.
- [ ] Artikel: dH meten, instellen, controleren.
Klaar wanneer: MDX-standaard.

### 43. [DONE-covered] Natrium in onthard water: smaak en aandachtspunten
- [ ] Slug + gap-check.
- [ ] Artikel: natriumtoename, wie moet opletten, disclaimer.
Klaar wanneer: MDX-standaard, YMYL-zorgvuldig.

### 44. [DONE-covered] Waterontharder huren vs kopen
- [ ] Slug + gap-check.
- [ ] Artikel: TCO, abonnement vs aankoop, afweging.
Klaar wanneer: MDX-standaard.

### 45. [DONE-covered] Waterontharder en cv/warmtepomp: vulwaterkwaliteit
- [ ] Slug + gap-check.
- [ ] Artikel: gedemineraliseerd vs onthard vulwater.
Klaar wanneer: MDX-standaard.

### 46. [DONE-covered] Hardheid meten thuis: teststrips en TDS-meter
- [ ] Slug + gap-check.
- [ ] Artikel: methodes, interpretatie, betrouwbaarheid.
Klaar wanneer: MDX-standaard.

### 47. [DONE] Tijdelijke vs blijvende hardheid uitgelegd
- [ ] Slug + gap-check.
- [ ] Artikel: carbonaat- vs niet-carbonaathardheid, gevolgen.
Klaar wanneer: MDX-standaard.

### 48. [DONE-covered] Waterontharder en planten/tuin: gevolgen van natrium
- [ ] Slug + gap-check.
- [ ] Artikel: waarom onthard water minder geschikt is voor planten.
Klaar wanneer: MDX-standaard.

## Thema 6 - Kokend & bruisend water kranen

### 49. [DONE-covered] Kokend water kraan energieverbruik berekenen
- [ ] Slug + gap-check (quooker-energieverbruik TSX bestaat -> algemeen/merk-neutraal distinct).
- [ ] Artikel: standby-verbruik, kosten per jaar, besparing.
Klaar wanneer: MDX-standaard.

### 50. [DONE-covered] Kokend water kraan veiligheid met kinderen
- [ ] Slug + gap-check (kokend-water-kraan/kinderveiligheid TSX bestaat -> kennisbank distinct of enhancement).
- [ ] Artikel/verrijking met veiligheidstips + disclaimer.
Klaar wanneer: MDX-standaard of verrijking.

### 51. [DONE-covered] Bruisend water kraan vs SodaStream: kosten en gemak
- [ ] Slug + gap-check (bruisend-water cluster + sodastream bestaan -> vergelijk-hoek; mogelijk TSX-vergelijking).
- [ ] Vergelijking of artikel.
Klaar wanneer: standaard, 0 orphans.

### 52. [DONE-covered] CO2-cilinder bruiswater: verbruik en navullen
- [ ] Slug + gap-check (sodastream-co2 bestaat -> algemeen distinct).
- [ ] Artikel: verbruik, ruilen vs navullen, kosten.
Klaar wanneer: MDX-standaard.

### 53. [DONE-covered] Kokend water kraan installeren: aansluiting en eisen
- [ ] Slug + gap-check.
- [ ] Artikel: stroom/water-eisen, onder-aanrecht, stappen.
Klaar wanneer: MDX-standaard (eventueel HowTo).

### 54. [DONE-covered] Kokend water kraan ontkalken en filter wisselen
- [ ] Slug + gap-check (quooker-onderhoud/kalk TSX bestaan -> merk-neutraal distinct).
- [ ] Artikel: onderhoudsroutine, filterpatroon.
Klaar wanneer: MDX-standaard.

## Thema 7 - Stoffen & contaminanten (verdieping, YMYL)

### 55. PFAS in regenwater en moestuin (verdieping)
- [ ] Slug + gap-check (regenwater/pfas TSX bestaat -> moestuin-hoek distinct).
- [ ] Artikel met bronnen + disclaimer.
Klaar wanneer: MDX-standaard, YMYL-compliant.

### 56. Lood in oude leidingen herkennen en aanpakken
- [ ] Slug + gap-check (lood TSX bestaat -> herken/aanpak-hoek distinct).
- [ ] Artikel: huurwoning, meten, filteren, disclaimer.
Klaar wanneer: MDX-standaard, YMYL-compliant.

### 57. Microplastics in drinkwater: stand van zaken
- [ ] Slug + gap-check (microplastics bestaat veel -> alleen bij echte gap; anders verrijk).
- [ ] Verrijk bestaand met actuele WHO/RIVM-nuance.
Klaar wanneer: verrijking, bronnen actueel.

### 58. Medicijnresten in drinkwater: feiten en filtering
- [ ] Slug + gap-check.
- [ ] Artikel: bronnen, wat osmose doet, disclaimer.
Klaar wanneer: MDX-standaard, YMYL-compliant.

### 59. Chloor en chlooramine in kraanwater: smaak en verwijderen
- [ ] Slug + gap-check.
- [ ] Artikel: waarom/of NL chloreert, koolstof, laten staan.
Klaar wanneer: MDX-standaard.

### 60. Hormoonverstoorders in water: nuance en filtering
- [ ] Slug + gap-check (hormonen TSX bestaat -> kennisbank-verdieping distinct).
- [ ] Artikel met bronnen + disclaimer.
Klaar wanneer: MDX-standaard, YMYL-compliant.

### 61. Nitraat verlagen voor particuliere putten
- [ ] Slug + gap-check (nitraat-verlagen TSX bestaat -> put-specifiek distinct).
- [ ] Artikel: meten, ionenwisseling/osmose, disclaimer.
Klaar wanneer: MDX-standaard.

### 62. Mangaan en ijzer in putwater: bruine aanslag
- [ ] Slug + gap-check (putwater/mangaan bestaat -> ijzer+mangaan-combinatie distinct).
- [ ] Artikel: oorzaken, ontijzering, filtering.
Klaar wanneer: MDX-standaard.

## Thema 8 - Vergelijkingen (machine-leesbare tabellen)

### 63. Vergelijking: filterkan vs kraanfilter
- [ ] Slug + gap-check.
- [ ] TSX-vergelijking met semantische tabel.
Klaar wanneer: standaard, in sitemap+llms, 0 orphans.

### 64. Vergelijking: onder-aanrecht osmose vs aanrecht-osmose
- [ ] Slug + gap-check.
- [ ] TSX-vergelijking.
Klaar wanneer: standaard.

### 65. Vergelijking: UV-filter vs osmose
- [ ] Slug + gap-check.
- [ ] TSX-vergelijking.
Klaar wanneer: standaard.

### 66. Vergelijking: nanofiltratie vs osmose
- [ ] Slug + gap-check.
- [ ] TSX-vergelijking.
Klaar wanneer: standaard.

### 67. Vergelijking: ionenwisselaar vs osmose voor kalk
- [ ] Slug + gap-check.
- [ ] TSX-vergelijking.
Klaar wanneer: standaard.

### 68. Vergelijking: bronwater vs mineraalwater (fles)
- [ ] Slug + gap-check (osmose-vs-bronwater + leidingwater-vs-bronwater bestaan; fles-fles distinct).
- [ ] TSX-vergelijking.
Klaar wanneer: standaard.

### 69. Vergelijking: kokend water kraan vs waterkoker (TCO)
- [ ] Slug + gap-check.
- [ ] TSX-vergelijking met kostentabel.
Klaar wanneer: standaard.

### 70. Vergelijking: zoutloze ontharder vs ionenwisselaar
- [ ] Slug + gap-check (zoutloze-vergelijken bestaat -> directe duel distinct).
- [ ] TSX-vergelijking.
Klaar wanneer: standaard.

### 71. Vergelijking: 4-in-1 kraan vs aparte osmose + kokend
- [ ] Slug + gap-check (4-in-1-kraan hub bestaat).
- [ ] TSX-vergelijking.
Klaar wanneer: standaard.

### 72. Vergelijking: keramisch filter vs koolstoffilter
- [ ] Slug + gap-check (keramisch-filter + koolstoffilter hubs bestaan).
- [ ] TSX-vergelijking.
Klaar wanneer: standaard.

## Thema 9 - Definitie- & begripsartikelen (entity-dekking)

### 73. Wat is TDS en hoe meet je het (verdieping)
- [ ] Slug + gap-check (tds-water bestaat -> meet-how-to distinct of enhancement).
- [ ] Verrijk of nieuw met meetuitleg + tabel.
Klaar wanneer: MDX-standaard of verrijking.

### 74. Wat is permeaat en concentraat
- [ ] Slug + gap-check.
- [ ] Definitie-artikel, definition-first.
Klaar wanneer: MDX-standaard.

### 75. Wat is remineralisatie en waarom
- [ ] Slug + gap-check (osmose-water/remineralisatie TSX bestaat -> kennisbank distinct).
- [ ] Definitie-artikel.
Klaar wanneer: MDX-standaard.

### 76. Wat is nanofiltratie (definitie)
- [ ] Slug + gap-check (nanofiltration hub bestaat -> kennisbank-definitie distinct).
- [ ] Definitie-artikel.
Klaar wanneer: MDX-standaard.

### 77. Wat is een sedimentfilter
- [ ] Slug + gap-check (sedimentfilter hub bestaat -> kennisbank-definitie distinct).
- [ ] Definitie-artikel.
Klaar wanneer: MDX-standaard.

### 78. Wat is geleidbaarheid (EC) van water
- [ ] Slug + gap-check.
- [ ] Definitie-artikel, relatie met TDS.
Klaar wanneer: MDX-standaard.

### 79. Wat is osmotische druk (eenvoudig)
- [ ] Slug + gap-check.
- [ ] Definitie-artikel.
Klaar wanneer: MDX-standaard.

### 80. Wat betekenen NSF/ANSI 42, 53 en 58
- [ ] Slug + gap-check (keurmerken/nsf-ansi-58 bestaat -> 42/53 distinct).
- [ ] Definitie-artikel met verschillen.
Klaar wanneer: MDX-standaard.

## Thema 10 - Lokaal, seizoen & actueel

### 81. Waterhardheid per provincie: overzicht
- [ ] Slug + gap-check (waterhardheid gemeente-laag bestaat -> provincie-aggregatie distinct).
- [ ] Artikel met semantische tabel per provincie.
Klaar wanneer: MDX-standaard.

### 82. Drinkwater op vakantie/camping in NL
- [ ] Slug + gap-check (reisfilter hub bestaat -> NL-camping distinct).
- [ ] Artikel: tappunten, veiligheid, filteren.
Klaar wanneer: MDX-standaard.

### 83. Water besparen in huis: praktische tips
- [ ] Slug + gap-check.
- [ ] Artikel: verbruik, osmose-afvalwater, gedrag.
Klaar wanneer: MDX-standaard.

### 84. Drinkwater bij hitte/droogte: kwaliteit en tips
- [ ] Slug + gap-check.
- [ ] Artikel: seizoenseffecten, bewaren, koelen.
Klaar wanneer: MDX-standaard.

### 85. Regenwater opvangen en gebruiken (niet drinken)
- [ ] Slug + gap-check (regenwater cluster bestaat -> opvang/gebruik distinct).
- [ ] Artikel: tuin/toilet, waarom niet drinken, PFAS-nuance.
Klaar wanneer: MDX-standaard.

### 86. PFAS-norm 2026: wat verandert er (actueel)
- [ ] Slug + gap-check.
- [ ] Artikel: actuele normwijziging, lib/facts als bron, bronnen.
Klaar wanneer: MDX-standaard, cijfers consistent (check-facts).

## Thema 11 - Content-verrijkingsprogramma's (bestaande artikelen)

### 87. takeaways-backfill ronde 1 (50 artikelen)
- [ ] Selecteer 50 sterkste artikelen zonder takeaways.
- [ ] Voeg inhoud-getrouwe takeaways toe (geen nieuwe claims).
Klaar wanneer: check-aeo takeaways-metric stijgt met >=50; build groen.

### 88. takeaways-backfill ronde 2 (50 artikelen)
- [ ] Volgende 50 artikelen.
- [ ] Inhoud-getrouwe takeaways.
Klaar wanneer: takeaways-metric stijgt; build groen.

### 89. FAQ-secties toevoegen aan artikelen zonder FAQ
- [ ] Detecteer MDX zonder `?`-FAQ-koppen.
- [ ] Voeg 3-4 echte vraag-antwoord-koppen toe per artikel (batch).
Klaar wanneer: rapport toont stijging FAQ-dekking; check-content 100%.

### 90. Definition-first openingen verbeteren (niet-definitie-artikelen)
- [ ] Detecteer artikelen met zwakke opening.
- [ ] Herschrijf opening naar direct antwoord (eigen content).
Klaar wanneer: check-answer-ready-rapport verbetert; typografie groen.

### 91. Interne-link-verrijking: +2 contextuele links per dunne-link-artikel
- [ ] Detecteer artikelen met precies 2 interne links.
- [ ] Voeg relevante contextuele links toe naar canonieke URL's.
Klaar wanneer: check-links 0; gemiddeld aantal interne links stijgt.

### 92. quickAnswer naar 40-60 woorden sweet-spot (outliers)
- [ ] Lijst quickAnswers buiten 40-60 (uit check-content-warnings).
- [ ] Herschrijf de kortste/langste zonder padding.
Klaar wanneer: sweet-spot-% stijgt; check-content 100%.

### 93. Bron-/datumactualisatie van de 30 oudste YMYL-artikelen
- [ ] Selecteer oudste YMYL-artikelen.
- [ ] Actualiseer lastModified + controleer cijfers tegen lib/facts.
Klaar wanneer: check-facts review 0 echte fouten; build groen.

### 94. Voorbeelden/case-uitleg toevoegen aan abstracte artikelen
- [ ] Detecteer artikelen zonder concreet voorbeeld.
- [ ] Voeg een uitgewerkt praktijkvoorbeeld toe (geen verzonnen data).
Klaar wanneer: check-content 100%; build groen.

### 95. Semantische datatabellen toevoegen waar cijfers in proza staan
- [ ] Detecteer artikelen met opsommingen van waarden in tekst.
- [ ] Zet om naar `<table>` met scope-headers (machine-leesbaar).
Klaar wanneer: audit-html 0; tabellen valide.

### 96. "Bijgewerkt 2026"-titels consistent maken
- [ ] Detecteer titels met verouderd jaartal.
- [ ] Normaliseer jaartal/format consistent met datum.
Klaar wanneer: check-content 100%; geen titel-length-overschrijding.

## Thema 12 - Nieuwe mini-clusters / hubs

### 97. Hub: "Water in de keuken" (overzicht + spokes uit thema 1)
- [ ] Hub-pagina met ItemList die de keuken-artikelen bundelt.
- [ ] Spokes terug-linken naar de hub.
Klaar wanneer: hub in sitemap+llms, ItemList valide, 0 orphans.

### 98. Hub: "Water en gezondheid" (YMYL-overzicht + disclaimer)
- [ ] Hub-pagina met disclaimer + ItemList naar gezondheidsartikelen.
- [ ] Methodologie/bronnen-link prominent.
Klaar wanneer: hub in sitemap+llms, YMYL-compliant, 0 orphans.

### 99. Hub: "Kalk en apparaten" (overzicht uit thema 3)
- [ ] Hub-pagina met ItemList naar apparaat/kalk-artikelen.
- [ ] Cross-links naar waterontharder/waterhardheid.
Klaar wanneer: hub in sitemap+llms, ItemList valide, 0 orphans.

### 100. Hub: "Begrippen & technieken" (glossary + definitie-artikelen)
- [ ] Hub die begrippenlijst + definitie-artikelen (thema 9) bundelt.
- [ ] DefinedTermSet + ItemList, deeplinks naar #anchors.
Klaar wanneer: hub in sitemap+llms, schema valide, 0 orphans.

---

## Definition of Done (per item)
(Sub-items af) AND `npm run check-content` 100% AND `npm test` groen AND `npm run verify` exit 0 AND
`npm run build && npm run audit-html` 0 violations AND (bij YMYL) disclaimer + >=3 bronnen via check-ymyl.
Per afgerond item: 1 regel in WORKLOG.md + commit + push; `llms-full.txt` geregenereerd bij nieuwe routes.
