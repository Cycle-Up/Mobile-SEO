# WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md

## Doel en context

### Doel van dit document

Dit document is de **permanente SEO + AI Search kwaliteitsstandaard** voor Waterfilterplatform.nl. Claude Code moet dit document gebruiken als vaste bron voor:

- het auditen van de huidige website;
- het prioriteren en uitvoeren van verbeteringen;
- het bouwen van nieuwe pagina’s;
- het beoordelen van bestaande content op SEO, AI Search, betrouwbaarheid en conversievoorbereiding;
- het herkennen en oplossen van technische SEO-issues in de codebase.

**Werkprincipe:** optimaliseren voor Google Search blijft de basis. Google zegt expliciet dat dezelfde fundamentele SEO best practices gelden voor AI Overviews en AI Mode, dat er geen extra technische eisen zijn voor opname in die AI-features, en dat pagina’s geïndexeerd en snippet-eligible moeten zijn om in aanmerking te komen. citeturn22view1turn22view0turn24view0

### Context van Waterfilterplatform.nl

Waterfilterplatform.nl is een **Nederlandstalige informatieve nichewebsite** over waterfilters, waterontharders, omgekeerde osmose, drinkwaterkwaliteit, kalk, PFAS, microplastics, kraanwater, filtersystemen en verwante oplossingen. De primaire doelgroep is de Nederlandse consument die zoekt naar betrouwbare uitleg, vergelijkingen en kooporiëntatie. Het commerciële einddoel is later bezoekers richting passende producten of leads te begeleiden, maar in de huidige fase ligt de focus op **SEO, contentkwaliteit, technische basis en AI Search visibility**. Omdat het thema raakt aan gezondheid, veiligheid en drinkwaterkwaliteit, valt een deel van de content in of nabij **YMYL**-gebied; Google geeft aan dat voor zulke onderwerpen hogere standaarden rond E-E-A-T en trust gelden. citeturn20view0turn38view0

### Statusnotitie voor actuele interpretatie

De **May 2026 core update** begon op **21 mei 2026** en Google gaf aan dat de uitrol **tot twee weken** kan duren. Dit document gebruikt daarom de meest stabiele, officiële richtlijnen als basis; tijdelijke rank-fluctuaties tijdens of vlak na deze uitrol mogen niet automatisch als bewijs worden gezien dat de checklists onjuist zijn. citeturn37view0turn24view2

### Legenda voor Claude Code

| Label | Betekenis |
|---|---|
| `MUST` | Niet onderhandelbaar; blokkade of harde eis |
| `SHOULD` | Sterke aanbeveling; in principe uitvoeren tenzij goede reden |
| `NICE` | Lage prioriteit; optimalisatie of polish |
| `P0` | Kritieke indexatie-, render-, security- of spamblokkade |
| `P1` | Grote impact op rankings, citeerbaarheid of vertrouwen |
| `P2` | Middelgrote impact; structurering, verrijking, schaalbaarheid |
| `P3` | Lage impact; verfijning of cosmetische verbetering |
| `OFFICIEEL` | Direct gebaseerd op zoekmachine- of platformdocumentatie |
| `BEST_PRACTICE` | Breed gedragen SEO-praktijk, meestal afgeleid uit officiële bronnen + vakbronnen |
| `EXPERIMENTEEL` | Onzeker, wijzigbaar of niet officieel ondersteund |

### Niet-onderhandelbare principes

| Regel | Prioriteit | Evidentie | Handhaving |
|---|---|---|---|
| Elke pagina moet **people-first** zijn en een echte vraag of taak van de gebruiker oplossen. | MUST | OFFICIEEL. Google’s helpful content guidance zegt dat systemen zijn ontworpen om behulpzame, betrouwbare, people-first content te belonen. citeturn18search8turn38view1 | Publiceer niet als dit niet aantoonbaar zo is. |
| Geen dunne AI-content, geen samenvattingen zonder eigen waarde, geen “commodity content”. | MUST | OFFICIEEL. Google raadt unieke, non-commodity content aan en verbiedt opgeschaalde content zonder gebruikerswaarde. citeturn22view0turn25view0turn38view2 | Herschrijven of verwijderen. |
| Geen keyword stuffing, geen doorway-achtige pagina’s, geen massaproductie puur voor query-varianten. | MUST | OFFICIEEL. Google noemt keyword stuffing spam en waarschuwt tegen grote hoeveelheden vergelijkbare pagina’s die rankings of AI-responses proberen te manipuleren. citeturn25view3turn22view0turn24view1 | Consolideren, canonicaliseren, verwijderen of noindexen. |
| Geen misleidende gezondheidsclaims of ongefundeerde beweringen over waterkwaliteit, veiligheid of gezondheid. | MUST | OFFICIEEL. Waterkwaliteit en gezondheid zitten in of nabij YMYL; op zulke onderwerpen weegt trust zwaarder. citeturn20view0turn21view0turn38view0 | Claims onderbouwen, nuanceren of verwijderen. |
| Geen nep-expertise, geen verzonnen tests, geen fictieve reviews, geen verborgen commerciële agenda. | MUST | OFFICIEEL. Google vraagt om duidelijkheid over wie content maakt, hoe die is gemaakt en waarom; trust is het belangrijkst. citeturn38view0turn38view4turn29view9 | Transparantieblokken toevoegen en claims verifiëren. |
| Elke belangrijke claim moet controleerbaar, genuanceerd of bronbaar zijn. | MUST | OFFICIEEL + BEST_PRACTICE. Google en Bing benadrukken bewijs, bronnen en duidelijkheid voor AI-antwoorden. citeturn22view0turn34view1 | Bron of bewijs toevoegen; anders claim downgraden. |
| Elke pagina moet duidelijk maken waarom Waterfilterplatform.nl betrouwbaar is. | MUST | OFFICIEEL. Rater guidelines en Google’s E-E-A-T-uitleg benadrukken verantwoordelijke partij, auteur, About/Contact en trust. citeturn20view2turn20view3turn38view0 | Trust-elementen verplicht opnemen. |
| Geen overmatig gemaakte lokale/situationele pagina’s zonder unieke lokale waarde. | MUST | OFFICIEEL. Google beschrijft doorway-achtige varianten per stad/regio als spammy patroon. citeturn25view1turn24view1 | Alleen lokale pagina’s publiceren met aantoonbaar unieke data/waarde. |

## Kwaliteitsstandaard voor content en betrouwbaarheid

### Google SEO criteria na recente core updates

Gebruik onderstaande tabel als **primaire pagina-auditchecklist**.

| Criterium | Wat controleren | Waarom dit belangrijk is | Hoe Claude Code dit controleert | Hoe Claude Code dit verbetert |
|---|---|---|---|---|
| Zoekintentie | Is de query-intentie duidelijk: informatief, vergelijkend, probleemoplossend, kooporiëntatie of lokaal? | Core updates belonen content die daadwerkelijk helpt; mis-match tussen query en pagina levert zwakke tevredenheid op. citeturn24view2turn38view1 | Lees H1, intro, SERP-doel, FAQ, CTA; bepaal één primaire intentie. | Herschrijf intro, tussenkoppen en CTA zodat ze één primaire intentie bedienen. |
| Duidelijk paginadoel | Heeft de pagina één expliciet doel en vervult ze dat volledig? | Google’s Page Quality-benadering start bij het doel van de pagina en hoe goed dat doel wordt bereikt. citeturn19view0turn20view3 | Check of titel, H1, intro en content dezelfde taak bedienen. | Verwijder zijpaden; maak ondersteunende pagina’s voor nevenintenties. |
| Helpful content | Heeft een lezer na het lezen genoeg geleerd om zijn doel te bereiken? | Google’s helpful content guidance draait om satisfactie. citeturn18search8turn38view1 | Zoek naar concrete antwoorden, voorbeelden, besliskaders, FAQ en vervolgstappen. | Voeg ontbrekende kernantwoorden, vergelijkingstabellen en samenvatting toe. |
| Unieke invalshoek | Is er eigen ervaring, eigen selectie-logica, eigen visual, eigen testmethode of eigen analyse? | Google adviseert unieke, non-commodity content en first-hand value. citeturn22view0turn23view0 | Detecteer generieke definities zonder originele inzichten of eigen redenering. | Voeg unieke invalshoek toe: eigen besliscriteria, testopzet, lokale context, nuance. |
| E-E-A-T | Is zichtbaar wie het schreef/reviewde, waarom die persoon of redactie geloofwaardig is en hoe de content tot stand kwam? | Google zegt dat trust het belangrijkst is; “Who / How / Why” helpt lezers en systemen. citeturn38view0turn20view2turn20view3 | Check byline, auteurspagina, redactioneel beleid, methodologie, datum. | Voeg byline, reviewer, methode, bronbeleid en updatebeleid toe. |
| YMYL-risico | Raakt de pagina gezondheid, veiligheid of welzijn? | Voor YMYL-onderwerpen geldt zwaardere scrutiny. citeturn21view0turn38view0 | Markeer pagina’s over PFAS, lood, drinkwaterveiligheid, gezondheidseffecten, bacteriologie, filterclaims als `YMYL_HIGH` of `YMYL_MEDIUM`. | Voeg nuance, disclaimer, bronnen van autoriteiten en zorgvuldige taal toe. |
| Bronbetrouwbaarheid | Zijn bronnen betrouwbaar, actueel en passend bij de ernst van de claim? | AI-responses en Search vertrouwen op betrouwbare onderbouwing; Bing noemt expliciet evidence en cited sources. citeturn34view1turn22view0 | Tel claims zonder bron; label bronkwaliteit: overheid, wetenschappelijke instelling, fabrikant, eigen ervaring, redactioneel. | Vervang zwakke bronnen; voeg bronsectie of in-line onderbouwing toe. |
| Thin content | Is de pagina vooral definities, herhaling of algemene tekst zonder besliswaarde? | Reviews system en helpful content systems belonen depth, niet samenvattingen zonder waarde. citeturn38view3turn38view1 | Detecteer lage informatiedichtheid, veel generieke frasen, weinig concrete subkoppen. | Consolideer met andere pagina of verdiep inhoud substantieel. |
| Duplicate/near-duplicate | Lijken meerdere pagina’s te veel op elkaar qua titel, H1, secties en intentie? | Google canonicaliseert duplicaten; veel vergelijkbare pagina’s verspillen crawlbudget en kunnen op doorway/scaled content lijken. citeturn26view0turn26view1turn22view0 | Cluster URLs op semantische overlap; vergelijk title/H1/intro/FAQ. | Merge, canonical, redirect of noindex duplicaten. |
| Programmatic SEO-risico | Is een template losgeslagen in honderden varianten met minimale eigen waarde? | Google noemt massaschaling zonder value scaled content abuse. citeturn25view0turn38view2 | Zoek patronen in slugs, frontmatter en identieke blokken. | Stop nieuwe varianten; consolideer; voeg echte unieke data/waarde toe. |
| Productreviews / vergelijkingen | Bevat de review eigen analyse, first-hand criteria, waarom iets “beste” is en genoeg inhoud om zelfstandig te staan? | Google reviews system wil insight, original research en bewijs. citeturn38view3turn38view4 | Controleer op testaanpak, vergelijkingstabellen, nadelen, alternatieven, meerdere verkopers. | Voeg bewijs, criteria, voor-wie/niet-voor-wie, alternatieven en methodologie toe. |
| Commerciële transparantie | Zijn affiliate-, lead- of commerciële belangen duidelijk? | Trust en gebruikersverwachting; reviews met affiliate links mogen, maar moeten waardevol en transparant zijn. citeturn38view4turn20view3 | Zoek commerciële links, leadformulieren, partnerverwijzingen. | Voeg transparantieblok en vergelijkingsmethode toe. |
| Informatiearchitectuur | Past de pagina logisch in een hub/clusterstructuur? | Google ontdekt URL’s via interne links; AI-systemen profiteren van heldere entiteiten en clusters. citeturn7search16turn22view0 | Check breadcrumbs, parent/child-relaties, orphan-risico. | Voeg hublinks, breadcrumbs en contextuele links toe. |
| Interne linkstructuur | Linkt de pagina naar relevante vervolgstappen en terug naar pillar/hub? | Interne links helpen discovery en betekenis; inconsistentie naar niet-canonicals verzwakt signalen. citeturn7search16turn26view1turn27view2 | Tel interne links naar parent, sibling, related problem, related solution. | Voeg 3–8 contextuele links toe met natuurlijke anchor text. |

### E-E-A-T en vertrouwen voor Waterfilterplatform.nl

**MUST trust-elementen op siteniveau**

| Element | Waarom | Implementatie-eis |
|---|---|---|
| Over ons-pagina | Verantwoordelijke partij en identiteit moeten vindbaar zijn. citeturn20view2turn20view3 | `/over-ons` met missie, redactie, expertise, bedrijfsgegevens of verantwoordelijke entiteit. |
| Redactioneel beleid | “Who / How / Why” helpt trust en kwaliteitsinschatting. citeturn38view0 | Leg uit hoe artikelen tot stand komen, hoe feiten worden gecontroleerd, hoe updates plaatsvinden. |
| Bronbeleid | Belangrijk in YMYL-achtige materie. citeturn38view0turn21view0 | Definieer bronhiërarchie: overheid/wetenschap > nutsbedrijf > fabrikant > redactionele uitleg > eigen ervaring. |
| Updatebeleid | AI- en zoeksystemen waarderen actualiteit waar relevant. Bing noemt freshness expliciet voor AI-citaties. citeturn34view1turn34view3 | Toon “laatst bijgewerkt”-datum op gevoelige informatiepagina’s. |
| Auteur/reviewer-informatie | Google adviseert duidelijke authorship waar lezers dat verwachten. citeturn38view0 | Byline + auteurspagina + reviewer bij YMYL/koopadvies/comparisons. |
| Contactgegevens | Belangrijk voor vertrouwen; zwaarder bij commerciële en gevoelige pagina’s. citeturn20view3turn21view1 | Minimaal contactformulier + e-mail; liever ook bedrijfsnaam en vestigingsplaats. |
| Transparantie over commerciële relaties | Nodig voor geloofwaardigheid bij vergelijkingen en affiliates. citeturn38view4turn20view3 | Disclosure boven of nabij vergelijking/CTA. |
| Fouten melden | Versterkt betrouwbaarheid en actualisatie. | Link “Fout gezien? Meld het ons” in footer of article-end. |
| Disclaimer waterkwaliteit/gezondheid | Nodig omdat veel claims context- en locatieafhankelijk zijn. citeturn21view0turn21view2 | Benoem dat informatie geen medisch of juridisch advies is; lokale metingen en officiële instanties kunnen leidend zijn. |
| Uitleg vergelijkingsmethode | Reviews system wil inzicht in hoe beoordeling of aanbeveling tot stand komt. citeturn38view0turn38view4 | Apart blok “Hoe wij vergelijken”. |

### Contentkwaliteit en redactionele checklist

Gebruik deze checklist bij **elke** contentwijziging:

```md
CONTENT_REVIEW_CHECKLIST
- [ ] Primaire zoekintentie is expliciet vastgesteld.
- [ ] H1, title, intro en hoofdstructuur bedienen dezelfde intentie.
- [ ] Intro beantwoordt de kernvraag direct.
- [ ] Bovenaan staat een korte samenvatting of key takeaways.
- [ ] De pagina bevat originele toegevoegde waarde.
- [ ] Er is geen fluff, herhaling of generieke opvultekst.
- [ ] Claims zijn genuanceerd en waar nodig bronbaar.
- [ ] YMYL-risico is beoordeeld.
- [ ] Auteurschap/reviewer/methode is zichtbaar waar passend.
- [ ] Tussenkoppen zijn concreet en beschrijvend.
- [ ] FAQ bevat echte gebruikersvragen, geen keyword-dump.
- [ ] Interne links sturen door naar logische vervolgstappen.
- [ ] Commerciële intentie is transparant en niet agressief.
- [ ] Pagina voelt geschreven voor mensen, niet voor rankings.
```

### Beslisregels voor gevoelige waterkwaliteit-content

```md
YMYL_DECISION_RULES
IF pagina claimt of impliceert dat een filter/ontharder gezondheidsproblemen voorkomt, behandelt of oplost
THEN label = YMYL_HIGH

IF pagina spreekt over PFAS, lood, bacteriën, microplastics, waterveiligheid of medische effecten
THEN:
  - [ ] voeg nuance toe
  - [ ] vermijd absolute claims
  - [ ] voeg disclaimer toe
  - [ ] verwijs naar betrouwbare instanties of meetcontext
  - [ ] laat reviewer/trustblok zien

IF pagina alleen gaat over comfort, smaak, kalk, onderhoud of keuzehulp
THEN label = YMYL_MEDIUM of YMYL_LOW afhankelijk van claimniveau
```

## AI Search en answer engine richtlijn

### Nuchtere hoofdregel

**AI Search visibility is grotendeels een gevolg van goede SEO, crawlbaarheid, duidelijke structuur, bronbaarheid en vertrouwen — niet van aparte “hack”-lagen.** Google zegt expliciet dat normale SEO relevant blijft voor AI Overviews en AI Mode, en Bing positioneert AI-citatie eveneens rond helderheid, bewijs, structuur en actualiteit. citeturn22view1turn22view0turn34view1

### Platformbeeld voor Claude Code

| Platform | Officiële hoofdregel | Praktische consequentie voor Waterfilterplatform.nl |
|---|---|---|
| Google AI Overviews / AI Mode | Geen aparte technische eisen; pagina moet geïndexeerd en snippet-eligible zijn; SEO best practices blijven leidend. Google noemt RAG/grounding en query fan-out als onderliggende mechanismen. citeturn22view1turn22view0 | Bouw pagina’s die **subvragen** goed afdekken, duidelijke antwoorden bevatten en betrouwbare bewijsblokken hebben. |
| ChatGPT Search | OpenAI adviseert: blokkeer `OAI-SearchBot` niet als je in ChatGPT Search wilt verschijnen; gebruik `noindex` als je een pagina echt niet wilt laten verschijnen. `GPTBot` is apart voor training. citeturn35view0turn35view1 | Zorg dat publieke content crawlbaar is voor `OAI-SearchBot`; houd robots-instellingen bewust gescheiden van trainingsopt-outs. |
| Perplexity | Perplexity adviseert `PerplexityBot` toe te laten in robots.txt; `Perplexity-User` is user-initiated en negeert doorgaans robots.txt. citeturn36view0 | Laat `PerplexityBot` toe; houd belangrijke content openbaar en niet afhankelijk van interacties of logins. |
| Bing Copilot / Bing AI | Bing Webmaster Guidelines gelden voor Bing Search, Copilot en grounding; Bing AI Performance laat AI-citaties en grounding queries zien. Bing noemt heldere headings, tabellen, FAQ, evidence en freshness als verbeterpunten. citeturn10search0turn34view1 | Zet Bing Webmaster Tools op; gebruik sitemaps + IndexNow voor snellere actualisatie. |

### Wat Claude Code per pagina moet optimaliseren voor AI Search

| Vraag | Regels |
|---|---|
| Is de pagina citeerbaar? | Bied 1–3 direct citeerbare definities of conclusies per hoofdsectie. Maak claims kort, expliciet en toetsbaar. Onderbouw gevoelige claims. Google en Bing benadrukken grounded responses en evidence-backed content. citeturn22view0turn34view1 |
| Heeft de pagina duidelijke definities? | Begin met een korte, directe definitie of antwoordparagraaf. AI-systemen zoeken vaak naar compacte antwoordblokken. Google noemt query fan-out rond subvraagstructuren. citeturn22view0turn22view1 |
| Beantwoordt de pagina concrete deelvragen? | Gebruik H2/H3-secties die echte subvraagclusteringen afdekken: wat is het, wanneer nuttig, nadelen, kosten, alternatieven, onderhoud, voor wie wel/niet. Google zegt dat AI-features meerdere gerelateerde zoekopdrachten gebruiken. citeturn22view0turn22view1 |
| Is de inhoud feitelijk en genuanceerd? | Vermijd absolute claims als “verwijdert altijd”, “gezond”, “beste” zonder context. Voeg drempels, uitzonderingen en meetcontext toe. YMYL vraagt extra trust. citeturn21view0turn38view0 |
| Zijn claims makkelijk te extraheren? | Gebruik korte alinea’s, duidelijke tussenkoppen, tabellen, lijstjes en definities. Bing noemt headings, tables en FAQ expliciet als hulp voor AI-citatie. citeturn34view1 |
| Is de pagina logisch opgebouwd? | Houd vaste volgorde aan: H1 → direct antwoord → samenvatting → verdieping → vergelijking/keuzekader → FAQ → bronnen → vervolgstap. Dit is BEST_PRACTICE, afgeleid uit Google/Bing-richtlijnen rond duidelijkheid en structuur. citeturn22view0turn23view0turn34view1 |
| Zijn entiteiten helder? | Benoem consequent termen als waterontharder, omgekeerde osmose, PFAS, actieve kool, keramisch filter, UV-filter, hardheid, leidingwater. Maak geen synoniemenbrij. Bing adviseert ambiguïteit tussen tekst, beeld en video te reduceren. citeturn34view1 |
| Is de pagina voorbereid op multimodale AI? | Voeg relevante, hoogwaardige afbeeldingen toe met zinvolle alt-tekst en captions. Google noemt multimodale zoekkansen expliciet. citeturn23view0turn27view2 |

### llms.txt, AI-only markup en andere “GEO hacks”

```md
AI_HACKS_POLICY
- Google:
  - LLMS.txt en “special AI markup” zijn NIET nodig.
  - Structured data is NIET verplicht voor generative AI appearance.
  - "Chunking" puur voor AI is NIET nodig.
  - Herschrijven puur voor AI-systemen is NIET nodig.
- OpenAI:
  - Officiële discoverability draait om OAI-SearchBot, robots.txt en noindex.
- Perplexity:
  - Officiële discoverability draait om PerplexityBot en robots.txt.
  - llms.txt komt in Perplexity-documentatie voor, maar niet als officiële rankingvoorwaarde voor search inclusion.
- Conclusie:
  - behandelen als EXPERIMENTEEL / optioneel
  - nooit prioriteit boven crawlbaarheid, indexeerbaarheid, unique value en trust
```

Google zegt officieel dat je nieuwe machine-readable AI-bestanden zoals `llms.txt` niet nodig hebt voor generative AI search, dat “chunking” geen vereiste is, en dat structured data niet verplicht is voor generative AI visibility. OpenAI en Perplexity leggen hun officiële discoverability-documentatie primair vast rond hun zoekbots en robots.txt, niet rond `llms.txt`. Daarom geldt voor Waterfilterplatform.nl: **niet leidend maken**. Alleen overwegen als extra experimentele laag, nooit als kernstrategie. citeturn22view0turn35view0turn35view1turn36view0turn39view1

### AI Search checklist per pagina

```md
AI_SEARCH_PAGE_CHECK
- [ ] Pagina is indexeerbaar en snippet-eligible.
- [ ] Eerste 120 woorden geven een direct, bruikbaar antwoord.
- [ ] Er staat een compacte samenvatting bovenaan.
- [ ] Elke H2 beantwoordt een concrete subvraag.
- [ ] Gevoelige claims zijn genuanceerd en onderbouwd.
- [ ] Belangrijkste conclusies zijn expliciet en citeerbaar geformuleerd.
- [ ] Er is minimaal één vergelijking, beslisregel of tabel indien relevant.
- [ ] Er is een FAQ met echte vervolgvraag-intentie.
- [ ] Er zijn interne links naar verdieping en alternatieven.
- [ ] Auteurschap, update-context en trust-signalen zijn zichtbaar.
- [ ] Geen AI-hackvormen zonder duidelijke toegevoegde waarde.
```

## Pagina-opbouw en topical authority

### Contenttemplate voor nieuwe pagina’s

Gebruik dit als **standaard skeleton** voor SEO-pagina’s:

```md
PAGE_TEMPLATE
type:
url_slug:
primary_topic:
primary_intent:
secondary_intents:
target_entity_set:
yMYL_level: LOW | MEDIUM | HIGH

meta_title:
meta_description:
h1:

intro_direct_answer:
top_summary:
  - punt_1
  - punt_2
  - punt_3

main_sections:
  - definitie_of_kernantwoord
  - hoe_het_werkt
  - voor_wie_wel_niet
  - voordelen_nadelen
  - vergelijking_of_keuzekader
  - praktische_aanbeveling
  - kosten_onderhoud_installatie_indien_relevant
  - faq

trust_blocks:
  - auteur_of_reviewer
  - methode_of_redactioneel_beleid
  - disclaimer_indien_nodig
  - bronnen_of_onderbouwing
  - laatst_bijgewerkt

internal_links:
  parent_hub:
  sibling_pages:
  deeper_guides:
  commercial_next_step:

schema_recommendation:
final_next_step:
```

### Template-eisen per paginatype

| Paginatype | Verplichte elementen | Extra regels |
|---|---|---|
| Informatieve gids | direct antwoord, samenvatting, definities, werking, voor/nadelen, FAQ, bronnen | Schrijf neutraal; focus op uitleg en besluitvorming. |
| Vergelijkingspagina | vergelijkingstabel, criteria, methode, winnaar per use case, alternatieven | Niet “beste” zeggen zonder context en onderbouwing. citeturn38view4turn38view3 |
| Productcategorie-pagina | categorie-uitleg, use cases, filterlogica, typen, koopcriteria, onderlinge links | Geen dunne category copy; echte oriëntatiewaarde toevoegen. |
| Probleempagina | probleemdefinitie, oorzaken, impact, meetcontext, oplossingen, wanneer expert nodig | YMYL-check bij gezondheids- of veiligheidsclaims. |
| Koopadviespagina | besliscriteria, voor-wie, budgetranges, foutkeuzes, shortlist, FAQ | Geen sales-first toon. |
| Begrippenpagina | één heldere definitie, context, waarom relevant, verwante begrippen | Kort maar niet dun; link naar verdiepende gidsen. |
| Lokale/situationele pagina | unieke lokale data, lokale context, lokale regelgeving of waterhardheid | Geen template-city pages zonder unieke waarde. citeturn25view1turn24view1 |
| Pillar page | brede overview, navigatie naar clusters, korte samenvattingen van subtopics | Niet alles op één hoop; doel is routing én overzicht. |
| Supporting article | smalle subvraag diep beantwoorden | Moet teruglinken naar pillar en ten minste twee sibling-artikelen. |

### Definition of Done voor nieuwe pagina’s

```md
DEFINITION_OF_DONE
- [ ] Paginadoel en zoekintentie zijn vastgelegd.
- [ ] Juiste paginatype-template is gebruikt.
- [ ] URL, title, meta description en H1 zijn uniek en intentiegericht.
- [ ] Direct antwoord + samenvatting staan bovenaan.
- [ ] Content bevat unieke waarde en geen commodity copy.
- [ ] YMYL-risico is beoordeeld en afgevangen.
- [ ] Auteur/reviewer/trust-informatie is toegevoegd indien relevant.
- [ ] Minimaal 3 logische interne links zijn geplaatst.
- [ ] Canonical, indexability en heading-structuur zijn correct.
- [ ] Structured data is beoordeeld en correct geïmplementeerd of bewust weggelaten.
- [ ] Mobiele weergave en performance-impact zijn gecontroleerd.
- [ ] Claude Code geeft een korte compliance-samenvatting met resterende risico’s.
```

### Interne linking en topical authority

#### Kernhubs

```md
CORE_HUBS
- /waterfilters/
- /waterontharders/
- /drinkwaterkwaliteit/
- /omgekeerde-osmose/
- /pfas-in-drinkwater/
- /kalk-in-water/
- /microplastics-in-kraanwater/
```

#### Aanbevolen clusterstructuur

| Hub | Clusterpagina’s |
|---|---|
| Waterfilters | soorten waterfilters, actieve kool, keramisch filter, UV-filter, sedimentfilter, onderbouw filter, countertop filter, onderhoud, filter vervangen, wat filtert wel/niet |
| Waterontharders | hoe werkt een waterontharder, ionenwisseling, zoutverbruik, onderhoud, kosten, voor- en nadelen, alternatief zonder zout, verschil met waterfilter |
| Drinkwaterkwaliteit | hoe schoon is Nederlands kraanwater, waterhardheid, regionale verschillen, smaak/geur, testen van kraanwater, wanneer is meten zinvol |
| Stoffen en risico’s | kalk, PFAS, lood, chloor, microplastics, nitraat, bacteriën, medicijnresten |
| Oplossingen | omgekeerde osmose, actieve kool, UV, keramiek, ontharding, voorfilters, combinatiesystemen |
| Kooporiëntatie | beste oplossing per probleem, per huishouden, per budget, per installatiebehoefte |

#### Linkregels

```md
INTERNAL_LINK_RULES
- Elke supporting page linkt naar:
  - [ ] de hoofd-hub
  - [ ] minimaal 2 relevante sibling pages
  - [ ] 1 oplossing- of probleempagina
- Elke pillar page linkt naar alle kernclusters.
- Gebruik natuurlijke ankerteksten; vermijd herhaalde exact-match spam.
- Link naar de canonieke URL.
- Geen orphan pages.
- Voeg breadcrumbs toe in UI en indien passend in schema.
```

### Ankertekstregels

| Goed | Vermijden |
|---|---|
| “verschil tussen waterfilter en waterontharder” | 8 keer exact dezelfde money-anchor in één cluster |
| “lees ook hoe omgekeerde osmose werkt” | generieke “klik hier” |
| “wanneer PFAS-filtering zinvol kan zijn” | onnatuurlijke keyword-stapeling |

## Technische SEO en structured data

### Technische SEO checklist voor statische/custom websites

| Onderdeel | Prioriteit | Controle | Bestands-/codecheck |
|---|---|---|---|
| Indexeerbaarheid | MUST | Belangrijke pagina’s moeten `200 OK` geven, niet geblokkeerd zijn en indexeerbare hoofdcontent bevatten. Google zet `200`-pagina’s in renderingqueue; niet-200 kan rendering overslaan. citeturn32view0turn24view0 | Controleer HTTP-status, `<meta name="robots">`, `X-Robots-Tag`, render output. |
| robots.txt | MUST | Gebruik robots.txt voor crawlcontrole, **niet** als noindex-mechanisme. citeturn26view2turn26view4 | Bestand `/robots.txt`; bevat sitemap-regel; blokkeer geen essentiële CSS/JS/images. |
| noindex | MUST | Als een pagina niet in Search mag, gebruik `noindex` in head of header en laat crawler de pagina wel kunnen zien. citeturn26view4 | Check `<head>` of response headers; nooit `noindex` in robots.txt. |
| sitemap.xml | MUST | Genereer volledige XML-sitemap met canonieke URLs; submit naar Search Console en Bing; verwijs ernaar in robots.txt. citeturn26view3turn34view3 | `/sitemap.xml` of sitemap-index automatisch updaten bij build/deploy. |
| Canonicals | MUST | Elke indexeerbare pagina heeft een self-referential canonical of bewuste canonical naar voorkeurs-URL. Google accepteert canonicals het liefst duidelijk in HTML-head. citeturn26view1turn26view0 | `<link rel="canonical" href="...">` in `<head>`. |
| Duplicate URLs | MUST | Vermijd http/https, www/non-www, slash/no-slash, query-duplicates zonder canonicalstrategie. citeturn26view1turn29view7 | Check routing, redirects en canonicals. |
| Meta titles | MUST | Elke pagina unieke, beschrijvende `<title>`. Google gebruikt title links als primaire klikprikkel. citeturn27view0 | `<title>` per route/build entry. |
| Meta descriptions | SHOULD | Uniek, relevant, pitch-achtig; Google kan ze gebruiken voor snippets. citeturn27view1 | `<meta name="description">`. |
| Open Graph | SHOULD | Uniforme previews voor delen en merkconsistentie; ook nuttig voor image selection-context. Google gebruikt bij preferred images mede `og:image` als bron. citeturn31view1 | `og:title`, `og:description`, `og:image`, `og:url`, `og:type`. |
| X/Twitter cards | NICE | Alleen voor social preview-consistentie. | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. |
| Heading-structuur | MUST | Eén H1; H2/H3 logisch, beschrijvend en vraaggedreven. Google raadt heldere structuur met headings aan. citeturn22view0turn27view3 | Semantische heading tree in componenten. |
| Semantische HTML | SHOULD | Niet voor “perfecte validatie”, wel voor leesbaarheid, accessibility en agent-interpretatie. Google noemt semantic HTML nuttig; OpenAI benadrukt ARIA voor agent-interpretatie. citeturn22view0turn35view1 | Gebruik `main`, `article`, `nav`, `section`, `footer`, `button`, `details` etc. |
| Crawlbare links | MUST | Gebruik echte `<a href="">` links; geen fragment-routing voor indexeerbare inhoud. citeturn32view2turn32view7turn27view2 | SPA-routing via History API; geen `#/route` voor indexeerbare pagina’s. |
| JavaScript rendering | MUST | SSR, static rendering of hydration heeft voorkeur; dynamic rendering is workaround, geen voorkeursoptie. citeturn33view0turn32view0 | Hoofdcontent in server/static HTML waar mogelijk. |
| Soft 404’s | MUST | Errorstatus en ontbrekende content moeten echte 404/410 of noindex krijgen. citeturn32view1 | Controleer dynamische routes op ontbrekende resources. |
| Lazy loading | SHOULD | Goed voor performance, maar mag hoofdcontent niet verbergen voor bots. citeturn26view6turn27view3 | Geen lazy load achter klik/swipe/typing voor primaire content. |
| Mobiele consistentie | MUST | Mobile-first indexering vereist gelijkwaardige hoofdcontent, headings, structured data en metadata op mobiel en desktop. citeturn27view3 | Compare mobile render vs desktop render. |
| Alt-teksten | SHOULD | Beschrijvende alt-tekst voor relevante afbeeldingen; ook belangrijk als image links anchor text dragen. citeturn27view2turn27view3turn38view2 | `alt` verplicht op belangrijke contentbeelden. |
| Core Web Vitals | SHOULD | Richt op LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 op p75 mobile en desktop. Google gebruikt CWV in ranking, maar niet als enige page-experience signaal. citeturn28view0turn26view7 | Meet met PSI/CrUX/Search Console; optimaliseer images, JS, fonts, layout shifts. |
| Caching/fingerprinting | SHOULD | Googlebot/WRS cachet agressief; content fingerprinting voorkomt oude JS/CSS. citeturn32view5 | Hash filenames voor static assets. |
| 404’s en redirects | MUST | Broken links herstellen; redirects alleen functioneel en niet sneaky. citeturn24view1turn32view1 | 301 voor verplaatste content; geen chains waar mogelijk. |
| Breadcrumbs | SHOULD | Goed voor hiërarchie en UX; breadcrumb rich result verschijnt op desktop, niet mobiel. citeturn29view1turn31view1 | UI-breadcrumbs + schema waar passend. |
| Toegankelijkheid | SHOULD | Goed voor gebruikers én agentische interpretatie. OpenAI noemt ARIA expliciet nuttig voor agent interactie. citeturn35view1 | Labels, roles, focus states, contrast, keyboard nav. |
| Verborgen content | MUST | Geen content die alleen voor zoekmachines zichtbaar is; dat kan richting spam/cloaking gaan. citeturn24view1 | Inspect rendered HTML en CSS. |
| keywords meta tag | NICE | Niet gebruiken als SEO-mechanisme; Google gebruikt hem niet voor ranking. citeturn17search14 | Weglaten. |

### Extra must-haves voor AI Search discovery

```md
AI_DISCOVERY_INFRA
- [ ] Google Search Console ingesteld
- [ ] Bing Webmaster Tools ingesteld
- [ ] XML sitemap automatisch gegenereerd en vermeld in robots.txt
- [ ] IndexNow geïmplementeerd voor nieuwe/gewijzigde/verwijderde URLs
- [ ] OAI-SearchBot niet onbedoeld geblokkeerd
- [ ] PerplexityBot niet onbedoeld geblokkeerd
- [ ] WAF/CDN blokkeert AI-search bots niet per ongeluk
```

Bing adviseert expliciet de combinatie van **sitemap + IndexNow** voor snelle discovery in AI-powered search, en OpenAI en Perplexity adviseren hun zoekbots toe te laten voor search-inclusion. citeturn34view3turn34view5turn35view0turn35view1turn36view0

### Structured data en schema markup

#### Hoofdregels

- Gebruik **JSON-LD** als standaard. Google raadt JSON-LD aan voor rich results. citeturn29view9
- Structured data moet een **ware representatie van zichtbare content** zijn; misleidende of verborgen markup kan rich-result eligibility verliezen en kan leiden tot structured-data manual actions. citeturn29view9
- Structured data is **niet genoeg** en **niet gegarandeerd**; correcte markup geeft alleen geschiktheid, geen vertoningsgarantie. citeturn29view9

#### Schema-keuzetabel

| Schema | Wanneer wel gebruiken | Wanneer niet gebruiken | Minimale velden / focus | Veelgemaakte fout | Validatie |
|---|---|---|---|---|---|
| `Article` | Voor informatieve gidsen, blogposts, nieuwsachtige content | Niet op kale category pages zonder artikelkarakter | headline, image, author, datePublished/dateModified, mainEntityOfPage waar passend. Google noemt vooral recommended properties; er zijn geen required properties voor Article-rich-result context. citeturn29view0turn7search12 | Auteur/datum niet zichtbaar op pagina; irrelevante image | Rich Results Test + URL Inspection |
| `BreadcrumbList` | Voor hiërarchische contentpagina’s | Niet op one-level/flat pages zonder echte breadcrumb-UI | position, name, item | Breadcrumb schema zonder zichtbare breadcrumb-logica | Rich Results Test |
| `FAQPage` | Alleen als FAQ echt zichtbaar en nuttig is op de pagina | Niet voor ranking/rich-result hoop; FAQ rich results verschijnen niet meer in Google Search sinds 7 mei 2026 | Semantisch optioneel; alleen als zichtbaar | Onzichtbare FAQ-markup, keyword-FAQ’s | Alleen toepassen als site/andere consumers er waarde uit halen; niet prioriteren voor Google-rich-result. citeturn29view2turn31view1 |
| `Product` | Alleen op echte productpagina’s of echte productreviewpagina’s | Niet op algemene koopgidsen zonder concreet productobject | name, image, description, offers of review-context afhankelijk van paginatype | Product markup op niet-productpagina’s | Rich Results Test |
| `Review` / `AggregateRating` | Alleen met echte reviews/ratings die zichtbaar en compliant zijn | Niet met verzonnen scores of self-serving misbruik | author, reviewRating, reviewBody of aggregateRating waar legitiem | Nepsterren; rating niet zichtbaar | Rich Results Test + handmatige check |
| `Organization` | Op de homepage van de site | Niet op elke pagina nodig | name, url, logo, contact/identifiers waar beschikbaar | Verschillende identity-signalen op site | Rich Results Test |
| `WebSite` / site name-data | Op de homepage voor sitename-understanding | Niet per subdirectory of op interne contentpagina’s | name, url, optional alternateName | Op niet-homepage plaatsen | Rich Results Test |
| `LocalBusiness` | Alleen als er echt lokale bedrijfsinfo, openingstijden of vestigingsdata is | Niet voor puur informatieve niche-site zonder fysieke business presence | naam, adres/contact/openingstijden waar relevant | LocalBusiness gebruiken zonder echte lokale entiteit | Rich Results Test |
| `HowTo` | Alleen als er een andere consument/parser expliciet baat bij heeft en de instructie zichtbaar is | Niet inzetten voor Google rich results; Google verwijderde HowTo rich result support en docs | Semantisch alleen bij echte stappen | Gebruik puur voor SEO-hoop | Lage prioriteit; geen Google-rich-resultverwachting. citeturn31view0turn16search0 |
| `ItemList` | Alleen als semantische hulp op echte vergelijkingsoverzichten; niet als hoofd-SEO-feature | Niet verwachten voor algemene comparison rich results in Google; Google ondersteunt ItemList-rich-results slechts in beperkte carousel-contexten | itemListElement + positions | Verwarren met algemene vergelijking-rich-result | Optioneel; niet prioriteren boven Product/Article/Breadcrumb. citeturn30search5turn30search13turn29view9 |

#### Schema-beleid voor Waterfilterplatform.nl

```md
SCHEMA_POLICY
homepage:
  - WebSite / site name data
  - Organization
content_article_pages:
  - Article
  - BreadcrumbList indien hiërarchie aanwezig
comparison_pages:
  - Article
  - BreadcrumbList
  - Product alleen als er echte productentiteiten per pagina aanwezig zijn
product_review_pages:
  - Product
  - Review alleen indien review echt en zichtbaar
faq:
  - FAQPage alleen als zichtbaar en functioneel; niet voor Google-rich-result-targeting
local:
  - LocalBusiness alleen bij echte lokale entiteit
howto:
  - lage prioriteit; niet op inzetten voor Google
```

### Codechecks die Claude Code direct moet uitvoeren

```md
CODEBASE_SEO_CHECKS
- [ ] Zoek alle routes / statische pagina’s / dynamic route templates op.
- [ ] Verifieer dat elke indexeerbare route een unieke <title> heeft.
- [ ] Verifieer dat elke indexeerbare route een meta description heeft.
- [ ] Verifieer 1 H1 per pagina.
- [ ] Verifieer canonical in <head>.
- [ ] Verifieer dat robots meta tags niet per ongeluk noindex/noarchive/nofollow zetten.
- [ ] Verifieer aanwezigheid en correctheid van robots.txt.
- [ ] Verifieer aanwezigheid en actualiteit van sitemap.xml of sitemap-index.
- [ ] Verifieer 404- en redirectgedrag.
- [ ] Verifieer dat JS-routes geen fragment URLs gebruiken.
- [ ] Verifieer dat primaire content zichtbaar is zonder interactie.
- [ ] Verifieer structured data tegen zichtbare content.
- [ ] Verifieer mobile render parity.
- [ ] Verifieer asset fingerprinting/caching voor builds.
```

## Auditworkflow en Claude Code operatie

### Auditopdracht voor de huidige website

Claude Code moet de huidige codebase en alle bestaande pagina’s in deze volgorde controleren:

```md
AUDIT_SEQUENCE
1. Inventariseer alle pagina’s, templates, routes en belangrijke componenten.
2. Controleer robots.txt, sitemap.xml, canonicals, redirects, 404 handling en indexeerbaarheid.
3. Bepaal per URL:
   - paginatype
   - zoekintentie
   - primaire topic
   - YMYL-niveau
4. Controleer per pagina:
   - SEO-basics
   - AI Search readiness
   - contentkwaliteit
   - trust/E-E-A-T
   - technische SEO
   - interne linking
   - structured data
5. Noteer verbeterpunten met prioriteit P0/P1/P2/P3.
6. Los eerst technische blokkades op.
7. Verbeter daarna informatiearchitectuur en interne linking.
8. Versterk daarna inhoud en trust-elementen.
9. Voeg daarna structured data toe of verbeter die.
10. Houd changelog bij.
```

### Prioriteringsmodel

| Prioriteit | Definitie | Voorbeelden |
|---|---|---|
| `P0` | Blokkeert crawling, indexing, rendering, veiligheid of schendt policies | per ongeluk `noindex`, kapotte canonicals, robots-blokkade op hoofdcontent, soft 404-routes, cloaking-achtig verschil, duplicate siteversies |
| `P1` | Grote impact op rankings, citaties, vertrouwen of core-updatebestendigheid | thin pages, ernstige intent-mismatch, ontbrekende trustblokken op YMYL-content, brakke interne linkstructuur, generieke commodity content |
| `P2` | Middelgrote impact | ontbrekende article schema, onvoldoende FAQ, beperkte vergelijkingstabellen, gemiste Bing/OpenAI crawltoegang |
| `P3` | Verbetering/polish | betere OG-tags, extra visuals, kleine copy- of UX-verbeteringen |

### Audittemplate in Markdown-tabelvorm

```md
| URL | Pagtype | Zoekintentie | Primaire keyword/topic | Status | Belangrijkste probleem | SEO-score | AI Search-score | Trust-score | Technische score | Prioriteit | Actie | Bestand/component | Klaar ja/nee |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---|---|---|
| /voorbeeld/ | gids | informatief | wat is omgekeerde osmose | te verbeteren | intro beantwoordt vraag niet direct; geen trustblok | 62 | 55 | 40 | 78 | P1 | intro herschrijven, samenvatting toevoegen, auteur/reviewer toevoegen, interne links uitbreiden | src/routes/voorbeeld.tsx | nee |
```

### Permanente workflow voor Claude Code

```md
DEFAULT_WORKFLOW
Bij elke nieuwe pagina, component of contentwijziging:
1. Raadpleeg dit document.
2. Stel paginadoel vast.
3. Bepaal primaire zoekintentie.
4. Kies paginatype-template.
5. Voer SEO-check uit.
6. Voer AI Search-check uit.
7. Voer trust/E-E-A-T-check uit.
8. Voer technische SEO-check uit.
9. Beoordeel structured data.
10. Voeg interne links toe.
11. Controleer mobiele weergave en performance-impact.
12. Geef korte compliance-samenvatting:
   - wat voldoet
   - wat niet voldoet
   - restrisico’s
   - aanbevolen vervolgstappen
```

### Korte Claude Code prompts

#### Volledige website-audit

```text
Gebruik WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md als vaste kwaliteitsstandaard. Audit de volledige huidige codebase en alle bestaande pagina’s op SEO, AI Search, trust/E-E-A-T, interne linking, structured data en technische SEO. Inventariseer alle URLs, vul het audittemplate in, prioriteer issues in P0/P1/P2/P3, los eerst technische blokkades op en houd een changelog bij. Werk veilig en breek geen bestaande functionaliteit.
```

#### Nieuwe pagina maken

```text
Maak een nieuwe pagina volgens WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md. Bepaal eerst zoekintentie, paginatype, URL, metadata, H1, samenvatting, contentstructuur, interne links, trustblokken en schema-advies. Lever de pagina pas op als de Definition of Done is gehaald.
```

#### Bestaande pagina verbeteren

```text
Verbeter deze bestaande pagina volgens WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md. Analyseer eerst intentie, thin content, duplicatie, trust-signalen, AI-citeerbaarheid, metadata, headings, interne links en technische issues. Herschrijf waar nodig compact maar inhoudelijk sterker. Geef daarna een korte compliance-samenvatting.
```

#### Contentcluster bouwen

```text
Ontwerp een volledig topiccluster volgens WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md rond [TOPIC]. Maak een pillar page, supporting articles, probleem- en oplossingspagina’s, definieer zoekintenties, URL-structuur, interne linkplan, prioriteiten en contentgaps. Voorkom overlap en orphan pages.
```

#### Pre-publish check

```text
Voer een pre-publish check uit volgens WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md. Controleer intentie, metadata, H1-H3-structuur, samenvatting, trust/E-E-A-T, AI Search readiness, canonicals, robots, indexeerbaarheid, interne links, schema, mobile/performance-impact en geef een go/no-go met resterende risico’s.
```

### Open vragen en beperkingen

- De **May 2026 core update** zat op 29 mei 2026 nog binnen de door Google genoemde uitrolperiode van maximaal twee weken. Gebruik daarom vooral de **officiële, stabiele richtlijnen** als leidraad en interpreteer kortetermijnschommelingen voorzichtig. citeturn37view0
- `llms.txt` is een bewegend onderwerp. Voor Google is het officieel niet nodig; bij OpenAI en Perplexity is het geen centrale discoverability-eis. Behandel dit voorlopig als **optioneel experiment**, niet als must-have. citeturn22view0turn35view0turn36view0turn39view1
- Voor Bing/Copilot en andere answer engines veranderen metriek- en inzichtlagen snel; Bing AI Performance is waardevol maar nog relatief nieuw. citeturn34view1

### Bronnenlijst

**Officiële Google-bronnen, geraadpleegd 2026-05-29**

- Google Search Essentials. citeturn24view0
- Google Search spam policies. citeturn24view1turn25view0turn25view1turn25view2turn25view3
- Google Search core updates en Search Status Dashboard voor de May 2026 core update. citeturn24view2turn37view0
- AI features and your website. citeturn22view1
- Optimizing your website for generative AI features on Google Search. citeturn22view0
- Top ways to ensure your content performs well in Google’s AI experiences on Search. citeturn23view0
- Creating helpful, reliable, people-first content. citeturn38view0
- Guidance on using generative AI content on your website. citeturn38view2
- Reviews system + write high quality reviews. citeturn38view3turn38view4
- Canonicalization, robots.txt, sitemap, noindex, JavaScript SEO basics, lazy loading, dynamic rendering, page experience, title links, snippets, mobile-first indexing, structured data docs. citeturn26view0turn26view1turn26view2turn26view3turn26view4turn26view5turn26view6turn26view7turn27view0turn27view1turn27view2turn27view3turn29view0turn29view1turn29view2turn29view3turn29view4turn29view5turn29view6turn29view7turn29view8turn29view9turn31view0turn31view1turn33view0
- Search Quality Evaluator Guidelines, september 2025. citeturn19view0turn20view0turn20view2turn20view3turn21view0turn21view1turn21view2

**Officiële andere platformbronnen, geraadpleegd 2026-05-29**

- OpenAI crawler docs + publishers/developers FAQ. citeturn35view0turn35view1
- Perplexity crawler docs. citeturn36view0
- Bing Webmaster Guidelines, Bing AI Performance en AI-powered search discovery guidance + IndexNow. citeturn10search0turn34view1turn34view3turn34view4turn34view5

**Externe interpretatiebronnen, alleen gebruiken als aanvullende best-practice context**

- Ahrefs over LLM visibility als meetconcept. citeturn39view0
- Search Engine Land over Google-eventuitspraak dat normale SEO leidend blijft en `llms.txt` niet door Google wordt gebruikt. citeturn39view1

## Slash goal command

```text
/goal Gebruik WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md als permanente kwaliteitsstandaard voor deze codebase. Audit nu de volledige huidige website op SEO, AI Search readiness, trust/E-E-A-T, interne linking, structured data en technische SEO. Inventariseer alle pagina’s en templates, bepaal per URL het paginatype, de zoekintentie en het primaire topic, vul het audittemplate in en prioriteer alle issues als P0/P1/P2/P3. Los eerst veilige technische blokkades op die crawling, indexering, rendering of canonicals beïnvloeden. Verbeter daarna informatiearchitectuur en interne linking. Versterk daarna contentkwaliteit, trust-signalen en AI-citeerbaarheid. Voeg daarna alleen relevante structured data toe of verbeter die. Houd een changelog bij van alle wijzigingen. Gebruik deze standaard voortaan automatisch bij elke nieuwe pagina, component of contentwijziging. Maak geen grote visuele of inhoudelijke koerswijzigingen tenzij die logisch uit deze checklist volgen. Werk veilig, breek geen bestaande functionaliteit, en stel waar nodig kleine, duidelijke commits of wijzigingsblokken voor.
```