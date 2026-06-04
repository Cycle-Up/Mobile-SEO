# CONTENT-INNOVATION-BACKLOG (AI-vindbaarheid) - 100 items

Doel: nieuwe, INNOVATIEVE contentformats die Waterfilterplatform.nl vaker laten citeren door
AI-zoeksystemen (ChatGPT/Search, Claude, Perplexity, Gemini, Google AI Overviews). Anders dan de
vorige twee backlogs (gewone artikelen/vergelijkingen) draait dit om nieuwe FORMATS: interactieve
rekentools, machine-leesbare datasets, AEO-antwoordkaarten, feit-vs-fabel, beslisbomen, checklists,
data-matrices, "lees je eigen getal"-explainers, persona-gidsen, trendrapporten, entity-factsheets
en vraag-clusters.

**Werkregels (elk item):** volledig autonoom; conform `WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`
(people-first, geen dunne/commodity content, geen verzonnen data/claims/cijfers - rekentools tonen
TRANSPARANTE formules met "indicatief"-label en inputs van de gebruiker; datasets gebruiken
on-site of duidelijk gelabelde publieke bron-cijfers; JSON-LD = ware representatie; YMYL met
disclaimer + bronnen); alleen ASCII. Na elke groep: `npm run check-content` (waar MDX), `npm test`,
`npm run verify` en `npm run build && npm run audit-html` (incl. check-schema/a11y/aeo) groen, in
sitemap + llms, 0 orphans. Interactieve tools zijn client-componenten met server-gerenderde uitleg
+ schema, zodat de inhoud ook zonder JS leesbaar/indexeerbaar blijft.

---

## Thema A - Interactieve rekentools (calculators)

### 1. [DONE] Waterontharder zout-kosten calculator
- [ ] Client-tool: input hardheid (dH) + huishoudgrootte -> indicatief jaarlijks zoutverbruik en -kosten (transparante formule).
- [ ] Server-gerenderde uitleg van de formule + aannames + bronverwijzing; HowTo/FAQ-schema.
Klaar wanneer: route bouwt static, tool werkt, uitleg zonder JS leesbaar, in sitemap+llms, audit 0.

### 2. [DONE] Osmose afvalwater- en opbrengstcalculator
- [ ] Input: afvalwaterverhouding + dagelijks verbruik -> liters permeaat en concentraat per jaar.
- [ ] Uitleg verhouding (1:1 vs 1:3) + besparingstip; schema + interne links.
Klaar wanneer: tool + uitleg + schema; build groen; audit 0.

### 3. [DONE] Kokend water kraan energie- en TCO-calculator
- [ ] Input: standby-vermogen + stroomprijs + aanschaf -> kosten per jaar en over 5/10 jaar.
- [ ] Vergelijk met waterkoker-scenario; transparante aannames.
Klaar wanneer: tool + uitleg; build groen.

### 4. [DONE] Flessenwater-vs-kraanwater besparing + CO2-indicator
- [ ] Input: flessen per week -> jaarlijkse euro- en (indicatieve) CO2/plastic-besparing met kraanwater.
- [ ] Bronnen voor de aannames; geen overdreven claims.
Klaar wanneer: tool + gelabelde aannames + bronnen; build groen.

### 5. [DONE] Waterhardheid eenheden-omrekener (dH / mmol/L / ppm / fH)
- [ ] Tool die tussen hardheidseenheden omrekent met de standaard omrekenfactoren.
- [ ] Uitleg van elke eenheid + tabel; DefinedTerm-koppeling.
Klaar wanneer: omrekening klopt (unit-test op de pure conversie-helper), build groen.

### 6. [DONE] Filterpatroon levensduur- en vervangdatum-tool
- [ ] Input: installatiedatum + interval -> volgende vervangdatum + herinneringstekst.
- [ ] Uitleg intervallen per filtertype; geen opslag (privacyvriendelijk).
Klaar wanneer: tool + uitleg; build groen.

### 7. [DONE] Kalkaanslag-risico-indicator op basis van dH
- [ ] Input dH -> hardheidsklasse + indicatief kalkrisico voor apparaten + advies.
- [ ] Gebruikt dezelfde klassegrenzen als de site (lib); link naar ontharder/osmose.
Klaar wanneer: klasse-logica getest (pure helper), build groen.

### 8. [DONE] Osmose membraan-rejectie calculator (TDS in/uit)
- [ ] Input: TDS toevoer + TDS permeaat -> rejectiepercentage + duiding (membraan ok/versleten).
- [ ] Uitleg drempel (>50% permeaat-TDS = vervangen); link naar membraan-levensduur.
Klaar wanneer: rejectie-berekening getest, build groen.

### 9. [DONE] Waterverbruik-per-huishouden schatter
- [ ] Input: aantal personen + gewoonten -> indicatief dagelijks/jaarlijks verbruik.
- [ ] Gelabelde aannames + besparingstips; link naar waterbesparing.
Klaar wanneer: tool + uitleg; build groen.

### 10. [DONE] Zout-bijvul-interval calculator
- [ ] Input: zoutreservoir-capaciteit + verbruik -> hoe vaak bijvullen.
- [ ] Uitleg + link naar zout-soorten; transparante formule.
Klaar wanneer: tool + uitleg; build groen.

## Thema B - Machine-leesbare datasets (Dataset JSON-LD + downloadbare JSON)

### 11. [DONE] Drinkwaternormen-dataset (/data/normen.json + Dataset-pagina)
- [ ] Route levert JSON: stof, norm, eenheid, bron (uit lib/facts + bestaande normpagina's).
- [ ] Dataset-pagina met Dataset-JSON-LD + zichtbare semantische tabel.
Klaar wanneer: JSON valide, Dataset-schema valideert (check-schema), in llms/ai.txt.

### 12. [DONE] Waterhardheid-per-gemeente dataset-download
- [ ] Route levert de gemeente-dH-data als JSON (en eventueel CSV) met bronvermelding.
- [ ] Dataset-pagina met Dataset-JSON-LD; link vanuit /waterhardheid.
Klaar wanneer: JSON valide + Dataset-schema; audit 0.

### 13. [DONE] Filtertechniek-capaciteitenmatrix dataset
- [ ] JSON + pagina: per techniek (RO/UF/NF/MF/kool/ionenwissel/UV) de poriegrootte en wat het aanpakt.
- [ ] Semantische matrixtabel + Dataset-schema.
Klaar wanneer: JSON valide + tabel + schema; build groen.

### 14. [DONE] Keurmerken-register dataset
- [ ] JSON + pagina: NSF/ANSI 42/53/58, Kiwa, WRAS, ACS, CE met betekenis en scope.
- [ ] Dataset/DefinedTermSet-schema; link vanuit /keurmerken.
Klaar wanneer: JSON valide + schema; audit 0.

### 15. [DONE] Verwijdering-matrix dataset (filter x contaminant)
- [ ] JSON + matrixpagina: per filtertype indicatieve verwijdering van lood/nitraat/PFAS/kalk/microplastics (gelabeld indicatief, met bron).
- [ ] Semantische tabel met scope-headers + Dataset-schema.
Klaar wanneer: JSON valide + tabel; geen verzonnen exacte percentages zonder bron.

### 16. [DONE] Waterbedrijven-dataset
- [ ] JSON + pagina: de 10 NL-drinkwaterbedrijven met verzorgingsgebied (publieke info).
- [ ] Dataset-schema; link vanuit /waterbedrijven.
Klaar wanneer: JSON valide + schema; check-links 0.

### 17. [DONE] Poriegrootte-schaal dataset
- [ ] JSON + pagina: techniek -> poriegrootte in micrometer, oplopend gesorteerd.
- [ ] Visuele/semantische schaal + Dataset-schema.
Klaar wanneer: JSON valide + pagina; build groen.

### 18. [DONE] TDS/EC-referentiewaarden dataset
- [ ] JSON + pagina: watertype (osmose/kraan/hard/zeewater) -> indicatief TDS/EC-bereik.
- [ ] Dataset-schema + link naar TDS/EC-artikelen.
Klaar wanneer: JSON valide + schema; audit 0.

## Thema C - AEO-antwoordkaarten (canonieke fact-sheets, QAPage)

### 19. Antwoordkaart: "Is Nederlands kraanwater veilig om te drinken?"
- [ ] Pagina met 1 dominante vraag + direct 40-60w antwoord + bron; QAPage-schema.
- [ ] Korte onderbouwing + interne links naar diepte.
Klaar wanneer: QAPage valideert (check-schema), audit 0, in llms.

### 20. Antwoordkaart: "Verwijdert omgekeerde osmose PFAS?"
- [ ] Dominante vraag + direct antwoord + bron; QAPage-schema.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: QAPage valide; build groen.

### 21. Antwoordkaart: "Moet ik mijn kraanwater filteren in Nederland?"
- [ ] Vraag + genuanceerd antwoord + verwijzing; QAPage-schema.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: QAPage valide.

### 22. Antwoordkaart: "Is osmosewater ongezond?"
- [ ] Vraag + genuanceerd YMYL-antwoord + disclaimer + bron; QAPage-schema.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: QAPage valide, YMYL-zorgvuldig.

### 23. Antwoordkaart: "Hoe vaak moet ik mijn waterfilter vervangen?"
- [ ] Vraag + beknopt antwoord met intervallen; QAPage-schema.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: QAPage valide.

### 24. Antwoordkaart: "Wat is de beste manier om kalk tegen te gaan?"
- [ ] Vraag + antwoord (ontharder vs osmose) + links; QAPage-schema.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: QAPage valide.

### 25. Antwoordkaart: "Zit er chloor in Nederlands kraanwater?"
- [ ] Vraag + feitelijk antwoord + bron; QAPage-schema.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: QAPage valide.

### 26. Antwoordkaart: "Is gefilterd water beter dan kraanwater?"
- [ ] Vraag + genuanceerd antwoord; QAPage-schema.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: QAPage valide.

### 27. Antwoordkaart: "Hoeveel kost een osmosesysteem per jaar?"
- [ ] Vraag + indicatief kostenantwoord + link naar TCO-calculator (item 2/3).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: QAPage valide; interne link naar tool.

### 28. Antwoordkaart-hub (/antwoorden): index van alle antwoordkaarten
- [ ] Hubpagina met ItemList naar alle kaarten; in footer/onderwerpen voor 0 orphans.
- [ ] Linkt elke antwoordkaart (inbound link) zodat geen orphan ontstaat.
Klaar wanneer: hub in sitemap+llms, ItemList valide, 0 orphans.

## Thema D - Feit of fabel (myth-busting, gestructureerd)

### 29. Feit of fabel: "Kraanwater is minder gezond dan flessenwater"
- [ ] Gestructureerd: claim -> verdict (fabel) -> uitleg + bron; FAQ/structured.
- [ ] Interne links naar onderbouwende artikelen.
Klaar wanneer: MDX/TSX-standaard, audit 0.

### 30. Feit of fabel: "Osmosewater ontneemt je lichaam mineralen"
- [ ] Claim -> genuanceerd verdict + WHO-nuance + disclaimer.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: YMYL-zorgvuldig, bronnen.

### 31. Feit of fabel: "Hard water is slecht voor je gezondheid"
- [ ] Claim -> verdict + bron + nuance.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: YMYL-zorgvuldig.

### 32. Feit of fabel: "Magnetische ontkalkers werken net zo goed als een ontharder"
- [ ] Claim -> verdict (omstreden) + uitleg; link naar vergelijking.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: audit 0.

### 33. Feit of fabel: "Koken haalt alle verontreinigingen uit water"
- [ ] Claim -> verdict (fabel) + wat koken wel/niet doet.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: audit 0.

### 34. Feit of fabel: "Een TDS-meter meet hoe veilig je water is"
- [ ] Claim -> verdict (fabel) + wat TDS wel zegt.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: audit 0.

### 35. Feit of fabel: "Alkalisch/gestructureerd water is gezonder"
- [ ] Claim -> nuance/verdict + bron; voorzichtig (YMYL/pseudowetenschap), geen claims overnemen.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: YMYL-zorgvuldig, geen misleidende claims.

### 36. Feit of fabel-hub (/feit-of-fabel): index
- [ ] Hub met ItemList naar alle feit-of-fabel-pagina's; inbound links (0 orphans).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: hub in sitemap+llms, 0 orphans.

## Thema E - Interactieve beslisbomen / keuzehulp-uitbreiding

### 37. Beslisboom: "Welke waterfilter past bij mij?"
- [ ] Client-stappenflow (doel -> situatie -> advies) met server-gerenderde fallback-tekst.
- [ ] JSON-LD + links naar eindbestemmingen; geen dataverzameling.
Klaar wanneer: flow werkt, fallback leesbaar zonder JS, audit 0.

### 38. Beslisboom: "Heb ik omgekeerde osmose nodig?"
- [ ] Vragen (PFAS/lood/nitraat/smaak) -> ja/nee-advies + uitleg.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: flow + fallback; build groen.

### 39. Beslisboom: "Welke waterontharder past bij mij?"
- [ ] Vragen (hardheid/gezin/zout-bezwaar) -> advies.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: flow + fallback.

### 40. Beslisboom: "Heb ik een kokend water kraan nodig?"
- [ ] Vragen (gebruik/budget/ruimte) -> advies + link.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: flow + fallback.

### 41. Beslisboom: "Filteren, ontharden of allebei?"
- [ ] Onderscheidt doelen (drinkwater vs kalk) -> advies.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: flow + fallback.

### 42. Beslisboom: "Welk filter voor mijn put-/bronwater?"
- [ ] Vragen (bacterien/nitraat/ijzer) -> UV/osmose/ontijzering-advies.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: flow + fallback, YMYL-zorgvuldig.

### 43. Beslisboom: "Welke filter voor onderweg/op reis?"
- [ ] Vragen (bestemming/duur) -> reisfilter-advies.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: flow + fallback.

### 44. Beslisbomen-hub (/beslishulp): index + uitleg methodologie
- [ ] Hub met ItemList; methodologie-link; inbound links (0 orphans).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: hub in sitemap+llms, 0 orphans.

## Thema F - Checklists & onderhoudsschema's (gestructureerd, downloadbaar)

### 45. Onderhoudsschema omgekeerde osmose (per maand/jaar)
- [ ] Gestructureerde checklist (taak + interval) als semantische lijst + HowTo/ItemList.
- [ ] Print-/kopieer-vriendelijk; link naar onderhoud-cluster.
Klaar wanneer: pagina + schema; audit 0.

### 46. Jaarchecklist waterontharder
- [ ] Checklist (zout, hars, instellingen, lekcontrole) gestructureerd.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: pagina + schema.

### 47. Aankoopchecklist waterfilter (waar op letten)
- [ ] Checklist (certificering, capaciteit, kosten, ruimte) gestructureerd.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: pagina + schema.

### 48. Checklist: zelf je waterkwaliteit thuis beoordelen
- [ ] Stappen (teststrip/TDS/zintuiglijk/drinkwaterbedrijf) gestructureerd; YMYL-nuance.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: pagina + schema.

### 49. Verhuis-/intrekchecklist water (kraan doorspoelen, hardheid opzoeken)
- [ ] Checklist voor nieuwe woning; link naar gemeente-hardheid.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: pagina + schema.

### 50. Checklist: filter klaarmaken na vakantie/stilstand
- [ ] Hygiene-stappen (doorspoelen, sanitiseren); YMYL-nuance.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: pagina + schema.

### 51. Checklist: kokend water kraan veilig gebruiken met kinderen
- [ ] Veiligheidschecklist; disclaimer.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: pagina + schema.

### 52. Checklists-hub (/checklists): index
- [ ] Hub met ItemList; inbound links (0 orphans).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: hub in sitemap+llms, 0 orphans.

## Thema G - Data-/visuele explainers & matrices

### 53. Grote filtertechniek-vergelijkingsmatrix (1 pagina, alle technieken)
- [ ] Semantische matrix (techniek x eigenschap) + uitleg; ItemList/Dataset-schema.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: tabel + schema; audit 0.

### 54. Poriegrootte-schaal explainer (van zand tot ion)
- [ ] Geschaalde, semantische weergave techniek -> micrometer; link naar dataset (item 17).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: pagina + schema.

### 55. Tijdlijn: aanscherping drinkwaternormen (PFAS 2026, lood)
- [ ] Chronologische, gestructureerde tijdlijn met bronnen; lib/facts als bron.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: pagina; cijfers consistent (check-facts).

### 56. Verontreinigingen-overzicht: bron, risico, oplossing (1 matrix)
- [ ] Semantische tabel stof -> herkomst -> filteroplossing; YMYL-nuance + bronnen.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: tabel + schema.

### 57. Hardheidsklasse-legenda en kaartuitleg
- [ ] Uitleg klassegrenzen + hoe de gemeentekaart te lezen; link naar /waterhardheid.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: pagina; check-links 0.

### 58. Kostenoverzicht-matrix: aanschaf + jaarlijks per oplossing
- [ ] Indicatieve TCO-matrix (filterkan/osmose/ontharder/kokend kraan) met aannames + bron.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: tabel; geen verzonnen prijzen zonder "indicatief".

### 59. Energie-/waterverbruik-matrix per oplossing
- [ ] Indicatief verbruik per oplossing (standby, afvalwater, spoelen).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: tabel + aannames.

### 60. Explainers-hub (/uitleg): index van matrices/explainers
- [ ] Hub met ItemList; inbound links (0 orphans).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: hub in sitemap+llms, 0 orphans.

## Thema H - "Wat betekent jouw getal" explainers

### 61. Lees je waterkwaliteitsrapport van het drinkwaterbedrijf
- [ ] Uitleg van de typische parameters/getallen; YMYL-nuance + bron.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX-standaard.

### 62. Wat betekent jouw dH-waarde?
- [ ] Interpretatie per dH-bereik + advies; link naar omrekener (item 5).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX-standaard.

### 63. Wat betekent jouw TDS-meting?
- [ ] Interpretatie per TDS-bereik + nuance (geen veiligheidsoordeel).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX-standaard.

### 64. Hoe lees je een waterfilter-teststrip?
- [ ] Stapuitleg + interpretatie + beperkingen; YMYL-nuance.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX-standaard.

### 65. Wat betekent een PFAS-meetwaarde in microgram/L?
- [ ] Uitleg eenheid + norm-context (lib/facts) + bron; YMYL.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: cijfers consistent (check-facts).

### 66. Wat betekent de afvalwaterverhouding (1:1, 1:3)?
- [ ] Uitleg + impact op verbruik; link naar calculator (item 2).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX-standaard.

### 67. Wat betekent NSF/ANSI op de verpakking?
- [ ] Uitleg per nummer; link naar keurmerken-register (item 14).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX-standaard.

### 68. Wat betekent de pH van je (osmose)water?
- [ ] Uitleg pH-bereik + remineralisatie; YMYL-nuance.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX-standaard.

## Thema I - Persona-/scenario-gidsen (complete, gestructureerde gidsen)

### 69. Complete watergids voor studenten/kamerbewoners
- [ ] Scenario-gids (huur, budget, geen installatie) met advies + interne links.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX/TSX-standaard, kannibalisatie-gecheckt.

### 70. Complete watergids voor een jong gezin
- [ ] Scenario-gids (baby, veiligheid, kosten) + YMYL-nuance.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: standaard.

### 71. Complete watergids voor een horecazaak
- [ ] Scenario-gids (capaciteit, kalk, smaak, regels gratis kraanwater).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: standaard.

### 72. Complete watergids voor camper/boot
- [ ] Scenario-gids (tank, hygiene, reisfilter).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: standaard.

### 73. Complete watergids voor B&B/vakantiehuis
- [ ] Scenario-gids (gasten, hardheid, onderhoud).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: standaard.

### 74. Complete watergids voor een kantoor
- [ ] Scenario-gids (waterpunt, legionella-zorg, kosten).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: standaard.

### 75. Complete watergids voor een sportschool/sportclub
- [ ] Scenario-gids (tappunten, hydratatie, hygiene).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: standaard.

### 76. Complete watergids voor een kapsalon
- [ ] Scenario-gids (hard water, apparatuur, kalk).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: standaard.

### 77. Complete watergids voor de moestuin/kas
- [ ] Scenario-gids (hardheid, regenwater, PFAS-nuance).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: standaard.

### 78. Persona-gidsen-hub (/gidsen): index
- [ ] Hub met ItemList; inbound links (0 orphans).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: hub in sitemap+llms, 0 orphans.

## Thema J - Jaaroverzicht / trend-reports (data-driven, citeerbaar)

### 79. "Staat van Nederlands drinkwater 2026" (datarapport)
- [ ] Gestructureerd rapport met kerncijfers (lib/facts/normen) + bronnen; Article/Dataset-schema.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: cijfers consistent (check-facts), bronnen, audit 0.

### 80. PFAS in Nederland: trendoverzicht en stand van zaken 2026
- [ ] Gestructureerd overzicht + tijdlijn + bronnen; YMYL.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: cijfers consistent, bronnen.

### 81. Normwijzigingen-overzicht (wat veranderde er recent?)
- [ ] Chronologisch overzicht van norm-updates met bron.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: check-facts consistent.

### 82. Trends in waterfilters: wat is er nieuw (tankless, lage afvalwaterverhouding)
- [ ] Feitelijk trendoverzicht zonder productclaims.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX-standaard.

### 83. Verzilting en droogte: jaarlijkse context voor drinkwater
- [ ] Feitelijk overzicht + bronnen.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: MDX-standaard.

### 84. Trend-reports-hub (/rapporten): index
- [ ] Hub met ItemList; inbound links (0 orphans).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: hub in sitemap+llms, 0 orphans.

## Thema K - Entity-factsheets / glossary-as-data

### 85. Entity-factsheet PFAS (definitie + kerncijfers + QAPage + DefinedTerm)
- [ ] Compacte factsheet met canonieke definitie, norm (lib/facts), 3 kernvragen (QAPage), bron.
- [ ] sameAs naar interne canonieke pagina; link vanuit begrippenlijst-anchor.
Klaar wanneer: schema valide; cijfers consistent; audit 0.

### 86. Entity-factsheet Omgekeerde osmose
- [ ] Factsheet + kernvragen + DefinedTerm.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: schema valide.

### 87. Entity-factsheet Waterhardheid (dH)
- [ ] Factsheet + klassegrenzen + kernvragen.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: schema valide.

### 88. Entity-factsheet Lood in drinkwater
- [ ] Factsheet + norm + YMYL-nuance + bron.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: schema valide, YMYL.

### 89. Entity-factsheet Nitraat
- [ ] Factsheet + norm + bron.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: schema valide.

### 90. Entity-factsheet Microplastics
- [ ] Factsheet + stand wetenschap + bron.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: schema valide.

### 91. Entity-factsheet Actief kool
- [ ] Factsheet + wat het wel/niet doet.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: schema valide.

### 92. Entity-factsheets-hub (/factsheets): index + DefinedTermSet
- [ ] Hub met ItemList + DefinedTermSet; inbound links (0 orphans).
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: hub in sitemap+llms, schema valide, 0 orphans.

## Thema L - Conversational/voice Q&A-clusters (PAA-hubs)

### 93. "Alles over PFAS in 10 vragen" (vraag-clusterhub)
- [ ] Hub met 10 korte Q&A's (FAQPage) + links naar diepteartikelen; voice-vriendelijk.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: FAQPage valide, audit 0, in llms.

### 94. "Alles over omgekeerde osmose in 10 vragen"
- [ ] Vraag-cluster FAQPage + links.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: FAQPage valide.

### 95. "Alles over waterontharders in 10 vragen"
- [ ] Vraag-cluster FAQPage + links.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: FAQPage valide.

### 96. "Alles over kalk in 10 vragen"
- [ ] Vraag-cluster FAQPage + links.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: FAQPage valide.

### 97. "Alles over kokend water kranen in 10 vragen"
- [ ] Vraag-cluster FAQPage + links.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: FAQPage valide.

### 98. "Alles over lood in drinkwater in 10 vragen"
- [ ] Vraag-cluster FAQPage + links; YMYL-nuance.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: FAQPage valide.

### 99. "Alles over kraanwater drinken in 10 vragen"
- [ ] Vraag-cluster FAQPage + links.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: FAQPage valide.

### 100. Vraag-clusters-hub (/vragen): index van alle Q&A-clusters
- [ ] Hub met ItemList; inbound links (0 orphans); link vanuit /onderwerpen + footer.
- [ ] Registreer de route in `app/sitemap.ts` + `public/llms.txt`, zorg voor een inkomende interne link (0 orphans) en valideer (build + audit-html/check-schema/check-a11y).
Klaar wanneer: hub in sitemap+llms, 0 orphans.

---

## Definition of Done (per item)
(Sub-items af) AND (waar MDX) `npm run check-content` 100% AND `npm test` groen AND
`npm run verify` exit 0 AND `npm run build && npm run audit-html` 0 violations (incl.
check-schema/check-a11y/check-aeo) AND nieuwe routes in sitemap + llms + 0 orphans AND
(bij datasets/tools) valide JSON + geteste pure reken-/conversie-helper. Interactieve tools
blijven zonder JS leesbaar (server-gerenderde uitleg + schema). Per afgerond item: 1 regel in
WORKLOG.md + commit + push; `llms-full.txt` geregenereerd bij nieuwe routes.

## Niet-onderhandelbaar
Geen verzonnen meetwaarden, prijzen of percentages: rekentools tonen transparante formules met
gebruikersinput en "indicatief"-labels; datasets en matrices gebruiken on-site data of duidelijk
gelabelde publieke bron-cijfers (RIVM/Drinkwaterbesluit/EU 2020-2184/WHO/NSF). YMYL-items krijgen
disclaimer + bronnen. Geen schema dat niet de zichtbare inhoud representeert.
