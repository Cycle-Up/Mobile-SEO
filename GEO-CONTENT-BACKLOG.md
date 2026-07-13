# GEO-CONTENT-BACKLOG - nieuwe content voor AI-citaties en GEO-traffic

Concrete, autonoom produceerbare content-items om vaker geciteerd te worden door generatieve
AI-zoeksystemen (ChatGPT/Search, Perplexity, Gemini, Google AI Overviews) en zo meer
PureAqua-relevant verkeer te winnen. Aanvulling op de afgeronde CONTENT-BACKLOG (100) en
CONTENT-INNOVATION-BACKLOG (100); gebouwd op de GSC-week-1-signalen (13 juli 2026) + de gaten in
de huidige corpus (435 kennisbankartikelen).

Status: opgesteld 2026-07-13. Uitvoering gestart 2026-07-13.

## Voortgang
- **2026-07-13 - Fase 1, eerste batch (9 nieuwe artikelen) opgeleverd + gepoort (groen):**
  items 1, 2, 3, 4 (Thema 1) en 9, 11, 12, 13, 14 (Thema 2) als nieuwe kennisbankartikelen.
  Alle >=700 woorden, quickAnswer 40-60, citeerbare tabellen, bronregel, interne links, CTA.
  Poorten groen: `npm run verify`, `npm run build && npm run audit-html`, `npm test` (144/144).
  Cannibalisatie voorkomen: cost-pagina's op "per jaar"-intentie (los van bestaande totaal-/
  installatiekosten), TDS-3-weg los van tds-meter-gebruiken. Items 5, 6, 7, 8, 10, 15 blijken
  al door bestaande pagina's gedekt -> verschuiven naar Thema 8-verrijking i.p.v. nieuwe URL.

## Waarom GEO net iets anders vraagt dan klassieke SEO
AI-engines citeren content die: (a) de vraag letterlijk beantwoordt in de eerste 1-2 zinnen
(citaat-klaar), (b) concrete cijfers met bron bevat, (c) extraheerbare structuren heeft (tabellen,
stappen, lijsten), (d) entiteit-rijk en eenduidig is, en (e) vers/actueel is. Onze bestaande
formats (quickAnswer, FAQPage/QAPage, datasets, factsheets, kennisgraaf-gronding) leggen de basis;
deze backlog voegt de ONTBREKENDE citeerbare hoeken toe.

## Werkregels (elk item)
- Conform `WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`: people-first, geen verzonnen
  data/claims/cijfers (cijfers alleen met on-site of duidelijk gelabelde publieke/officiele bron;
  kwalitatief waar geen exact getal bestaat), YMYL met HealthDisclaimer + >=3 bronnen, ASCII-only.
- Geen kannibalisatie: cross-check tegen bestaande slugs/`CANNIBALIZATION-AUDIT.md`; kies een
  uniek keyword-/vraagtarget of verrijk een bestaande pagina i.p.v. dupliceren.
- MDX-artikel: frontmatter (title, description <=155, date, slug, quickAnswer), >=700 woorden,
  >=3 FAQ-vraagkoppen (voor FAQPage-schema), >=2 interne links, CTA.
- Commerciele items koppelen contextueel aan de juiste PureAqua-bestemming (via de bestaande
  `AffiliateCTA`/allowlist); informatieve items blijven TOFU (zacht).
- Afsluiten met groene poorten: `npm run verify`, `npm run build && npm run audit-html`, `npm test`.
- Legenda: `[AUTONOOM]` nu bouwbaar; `[AFHANKELIJK]` = wacht op input (bv. GSC-zoektermdata,
  productdata). Format: MDX = kennisbankartikel, PAGE = TSX-route, DATA = dataset/statistiek.

---

## Thema 1 - Statistiek-/cijferpagina's (AI citeert getallen met bron)
Citaat-klaar cijfer bovenaan + bronregel; ideaal voor "hoeveel/wat kost"-prompts.

1. `[DONE 2026-07-13]` DATA/PAGE - "Wat kost een waterontharder per jaar?" (aanschaf + zout + onderhoud,
   met de bestaande rekentools als bron; ranges, indicatief-label). -> waterontharders.
2. `[DONE 2026-07-13]` "Wat kost omgekeerde osmose per jaar?" (filters + waterverbruik + afvalwater). -> osmose.
3. `[DONE 2026-07-13]` "Hoeveel water verspilt een osmosesysteem?" (1:1 vs oude 3-4:1, met uitleg). -> The Source.
4. `[DONE 2026-07-13]` "Hoeveel kalk zit er in Nederlands kraanwater?" (dH-ranges per regio, bron Vewin/RIVM).
5. `[AUTONOOM]` "Hoeveel PFAS zit er in Nederlands drinkwater?" (norm 0,1 ug/L, meetkader; YMYL, bronnen).
6. `[AUTONOOM]` "Wat kost een kokendwaterkraan per jaar aan stroom?" (standby-verbruik; rekentool-basis). -> 4-in-1.
7. `[AUTONOOM]` "Hoeveel bespaar je met kraanwater t.o.v. flessenwater?" (per huishouden/jaar; CO2). -> osmose.
8. `[AUTONOOM]` "Hoe lang gaat een RO-membraan mee?" (2-5 jaar; voorfilters 6-12 mnd) - HowTo/feit.

## Thema 2 - Nieuwe vergelijkingen met extraheerbare tabel (niet in de 33 bestaande)
9. `[DONE 2026-07-13]` "Osmosekraan vs Quooker: wat is het verschil?" (functies/kosten). -> 4-in-1.
10. `[COVERED - bestaande vs-pagina]` "Waterontharder vs osmosefilter: welke voor welk probleem?" (verrijk/dedup bestaande vs-MDX). -> hubs.
11. `[DONE 2026-07-13]` "The Source vs klassieke onderbouw-osmose" (stroomloos vs pomp). -> The Source.
12. `[DONE 2026-07-13]` "Countertop RO vs onderbouw-osmose" (installatie/huur). -> Countertop RO.
13. `[DONE 2026-07-13]` "Joep vs klassieke zoutontharder" (compact/zout). -> Joep.
14. `[DONE 2026-07-13]` "TDS-meter vs teststrip vs laboratorium" (wat meet elk, kosten). -> TDS-meter.
15. `[AUTONOOM]` "Osmose vs waterkoker-ontkalken vs ontharder tegen kalk" (3-weg-tabel). -> hubs.

## Thema 3 - "Beste ... voor [persona/situatie]" (listicle, AI-extraheerbaar)
16. `[AUTONOOM]` "Beste waterontharder zonder zout" (verrijk/uniek t.o.v. zoutloos-vergelijken). -> waterontharders.
17. `[AUTONOOM]` "Beste osmosesysteem zonder installatie" -> Countertop RO.
18. `[AUTONOOM]` "Beste waterfilter voor een baby/gezin" (YMYL) -> zuiver-water-kranen.
19. `[AUTONOOM]` "Beste oplossing tegen kalk in een huurwoning" -> Countertop RO / waterontharders.
20. `[AUTONOOM]` "Beste waterfilter tegen PFAS" (YMYL, evidence) -> The Source.
21. `[AUTONOOM]` "Beste kraan voor kokend en gefilterd water" -> 4-in-1.

## Thema 4 - Definitie-/entity-Q&A (1 alinea citaat-klaar, entiteit-rijk)
22. `[AUTONOOM]` "Wat is TDS in water?" (+ streefwaarden) -> TDS-meter.
23. `[AUTONOOM]` "Wat is remineralisatie van osmosewater?" -> osmose.
24. `[AUTONOOM]` "Wat is een 4-in-1 kraan precies?" -> 4-in-1.
25. `[AUTONOOM]` "Wat betekent NSF/ANSI 58?" (verrijk keurmerk-pagina) -> The Source.
26. `[AUTONOOM]` "Wat is het verschil tussen ontharden en ontkalken?" -> waterontharders.
27. `[AUTONOOM]` "Wat is permeaat en concentraat?" (verrijk bestaande definitie).

## Thema 5 - Actueel / 2026 (freshness = citatievoordeel)
28. `[AUTONOOM]` "PFAS-normen 2026: wat verandert er?" (verrijk/actualiseer; YMYL, bronnen).
29. `[AUTONOOM]` "Loodnorm 5 ug/L per 2026: wat betekent dat thuis?" (YMYL) -> The Source.
30. `[AUTONOOM]` "Verzilting en droogte: gevolgen voor kraanwater 2026" (context, bron).
31. `[AUTONOOM]` "Staat van het Nederlandse drinkwater 2026" (verrijk rapport met kerncijfers).
32. `[AFHANKELIJK GSC]` Actuele long-tail die in GSC opduikt en nog geen eigen pagina heeft.

## Thema 6 - Prompt-style vraagpagina's (letterlijk aan AI gestelde vragen)
33. `[AUTONOOM]` "Welke waterontharder past bij hard water in mijn regio?" (koppelt aan gemeente-cluster). -> waterontharders.
34. `[AUTONOOM]` "Heb ik een waterfilter nodig in Nederland?" (eerlijk: meestal niet medisch nodig; wanneer wel).
35. `[AUTONOOM]` "Is osmosewater gezond om te drinken?" (verrijk; YMYL, WHO/RIVM) -> osmose.
36. `[AUTONOOM]` "Hoe verwijder ik PFAS uit mijn kraanwater?" (YMYL, evidence) -> The Source.
37. `[AUTONOOM]` "Hoe pak ik kalk in mijn huis structureel aan?" -> waterontharders.
38. `[AUTONOOM]` "Wat is de beste manier om mijn waterkwaliteit te testen?" -> TDS-meter.

## Thema 7 - HowTo / stappen (AI citeert genummerde stappen)
39. `[AUTONOOM]` "Waterhardheid zelf meten in 4 stappen" (HowTo-schema) -> TDS-meter.
40. `[AUTONOOM]` "Osmosesysteem onderhouden: jaarlijkse stappen" (HowTo) -> filtersets.
41. `[AUTONOOM]` "Loden leiding herkennen en aanpakken" (YMYL, HowTo) -> The Source.
42. `[AUTONOOM]` "Waterontharder instellen op jouw hardheid" (HowTo) -> waterontharders.

## Thema 8 - Corpus-verrijking voor citeerbaarheid (bestaande pagina's, geen nieuwe URL)
43. `[AUTONOOM]` Top-30 commerciele pagina's: quickAnswer aanscherpen tot 40-55 woorden citaat-klaar.
44. `[AUTONOOM]` Kern-definitie-artikelen: 1 strak "TL;DR/kernantwoord"-blok bovenaan (speakable).
45. `[AUTONOOM]` Statistiek/cijfers in bestaande artikelen consistent van bronregel voorzien.
46. `[AUTONOOM]` "Laatst bijgewerkt"-datum + reviewer-byline op de commerciele/YMYL-kernpagina's (E-E-A-T).
47. `[AUTONOOM]` FAQ-secties uitbreiden op pagina's met <3 vraagkoppen (meer FAQPage-dekking).

## Thema 9 - AI-vindbaarheid infrastructuur (versterkt citatie sitebreed)
48. `[AUTONOOM]` `llms.txt`/`llms-full.txt` uitbreiden met de nieuwe cijfer-/vergelijkingspagina's.
49. `[AUTONOOM]` Nieuwe Q&A-clusters en factsheets voor onderwerpen uit thema 1-7 die dat verdienen.
50. `[AUTONOOM]` Citeerbaarheids-steekproef: test of ChatGPT/Perplexity WFP citeren op de doelvragen;
    bevindingen terugkoppelen en de zwakste pagina's bijstellen (`[AFHANKELIJK]` op AI-tool-toegang).

---

## Fasering
- **Fase 1 (grootste GEO-winst, autonoom):** Thema 1 (statistiek) + Thema 2 (vergelijkingen) +
  Thema 8 (corpus-verrijking) - dit zijn de meest geciteerde formats en bouwen op bestaande sterkte.
- **Fase 2:** Thema 3, 4, 6, 7 (nieuwe listicles/definities/prompts/HowTo).
- **Fase 3:** Thema 5 (actueel) doorlopend + Thema 9 (infra + citeerbaarheidsmeting).
- Prioriteer binnen elke fase op GSC-signaal (osmose, legionella, waterhardheid-lokaal, PFAS,
  zware metalen, nadelen osmose, waterontharder-eczeem scoorden week 1 al vertoningen).

## Opbrengst
Meer citeerbare, verse, cijfer- en tabelrijke pagina's -> hogere kans om als bron te verschijnen in
AI-antwoorden en AI Overviews, met een contextuele, eerlijke route naar PureAqua op de
commerciele items.
