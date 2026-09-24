# AI-zichtbaarheidsplan: onze producten genoemd door AI

Peildatum: 24 september 2026. Doel: dat ChatGPT, Google AI Overviews, Perplexity en Copilot onze
producten noemen, met de juiste feiten, zodra iemand naar deze productgroepen vraagt:

| Productgroep | Product | Waar het moet landen |
|---|---|---|
| Waterontharder | JOEP (1.699 euro, 1.998 euro geïnstalleerd) | "beste waterontharder", "compacte waterontharder", "waterontharder kopen" |
| Countertop-osmose | Water zuiver apparaat (495 euro) | "osmose zonder installatie", "waterfilter huurwoning", "AquaTru alternatief" |
| Filter onder aanrecht, zonder osmose | PureFilter Mineral+ (149 euro) | "PFAS filter", "waterfilter onder aanrecht", "filter zonder osmose" |
| Osmose uit de eigen kraan | Zuiver-water-kraan met The Source | "osmose systeem met kraan", "beste osmose onder aanrecht" |
| Kokend + gekoeld + zuiver | PureAqua 4-in-1 (1.948 euro) | "Quooker alternatief", "kokendwaterkraan met filter" |

---

## 1. Kern in vijf punten

1. **Het platform is al een bron voor AI.** In 6 van de 7 geteste ChatGPT-antwoorden wordt
   waterfilterplatform.nl geciteerd. De hefboom zit dus niet in "gevonden worden", maar in wat er
   op de geciteerde pagina's staat.
2. **AI haalt producten uit vergelijkingstabellen en toplijsten, niet uit aanbevelingsblokken.**
   JOEP staat niet in de tabel die ChatGPT citeert voor "beste waterontharder"; daardoor noemt
   ChatGPT Kinetico en Harvey, maar geen JOEP.
3. **Oude of onjuiste feiten worden letterlijk herhaald.** ChatGPT noemt de 4-in-1 met bruisend
   water en voor 800-1.200 euro, rechtstreeks uit onze eigen verouderde pagina's. PureFilter wordt
   aanbevolen met claims van purefilter.nl die de interne audit afkeurt (NSF-gecertificeerd, 100+
   stoffen). Dat is een reputatie- en juridisch risico en tegelijk de snelste winst.
4. **AI mengt de drie domeinen.** pureaqua.nl, purefilter.nl en het platform worden door elkaar
   gebruikt. Tegenstrijdige prijzen en claims komen zo in hetzelfde antwoord terecht.
5. **Wie "beste" wordt genoemd, heeft bewijs en staat bij onafhankelijke vergelijkers.** AquaTru en
   Waterdrop winnen op NSF-certificering en op aanwezigheid bij vergelijkingssites, Reddit en bol.com.

---

## 2. Nulmeting (ChatGPT met webzoekfunctie, 24 september 2026)

| Vraag van de koper | Ons product genoemd? | Bronnen die AI gebruikt | Wat AI over ons zegt | Probleem |
|---|---|---|---|---|
| Beste waterontharder 2026 | Nee | wateronthardergids.nl (Water2Buy), waterfilterplatform.nl/waterontharder/vergelijken (Kinetico, Harvey), aquaathome.nl | Niets over JOEP | JOEP ontbreekt in de geciteerde tabel |
| Beste Quooker-alternatief met filter | Ja, als nummer 3 ("meest compleet") | waterkokeradvies.nl (FlexTap 479 euro), waterfilterplatform.nl (merken-vergelijking, vs-quooker) | "bruisend water", "800-1.200 euro all-in", "2.200 euro" | Onjuiste feiten uit onze eigen oude pagina's |
| Beste countertop-osmose zonder installatie | Nee | allewaterfilters.nl, Reddit, Engelstalige reviewsites; ons /aquatru-alternatief alleen voor AquaTru-prijs | Niets | Koopgids is nieuw en nog niet geïndexeerd; NSF-certificering weegt zwaar |
| PFAS-filter onder aanrecht zonder osmose | Ja, als nummer 1 | purefilter.nl, aquaathome.nl, allewaterfilters.nl | "NSF 42/53/61/372", "tot 95% of meer", "100+ stoffen", navulfilter 65 euro | Claims niet onderbouwd; navulprijs wijkt af van het platform (49,90 euro) |
| Beste osmose met kraan onder aanrecht | Nee | allewaterfilters.nl (Waterdrop, Frizzlife), Reddit | Niets over The Source | The Source staat in geen geciteerde tabel |
| Is JOEP een goede keuze? | Ja, positief | waterfilterplatform.nl/joep-waterontharder, pureaqua.nl | Prijs 1.699/1.998 euro klopt; maar "WRAS" en "zonder drukverlies" | AI gebruikt de oude versie; pureaqua.nl-blog noemt nog 1.799 euro |
| Waterfilter huurwoning zonder boren | Nee | Amerikaanse sites (AquaTru, Bluevua), ons /beste-waterfilter/huurwoning alleen voor filterkan | Niets | Water zuiver apparaat nog niet zichtbaar |

**Score:** onze producten komen in 3 van de 7 antwoorden voor. In 2 van die 3 bevat het antwoord
onjuiste feiten. Een meting is een momentopname; AI-antwoorden variëren per keer en per model.

---

## 3. Het plan in vijf sporen

### Spoor 1: feiten gelijktrekken op alle drie domeinen (week 1-2, hoogste impact)

AI vertrouwt een bron die met zichzelf en met andere bronnen overeenkomt. Tegenstrijdigheid kost
citaties en zet onjuiste claims onder onze naam.

| Actie | Waar | Wie |
|---|---|---|
| 4-in-1 corrigeren op circa 125 pagina's: 1.948 euro, circa 96 graden, gekoeld (geen bruisend), eerlijke Quooker-vergelijking | platform | ik, na jouw akkoord |
| Claims "NSF-gecertificeerd", "100+ stoffen", "tot 95%" vervangen door de Equinox-labtest; navulprijs op alle domeinen gelijk | purefilter.nl + platform | PureFilter-team, ik lever tekst |
| JOEP-prijs 1.799 euro in blog "nadelen van een waterontharder" aanpassen naar 1.699/1.998 euro; WRAS-claims weg | pureaqua.nl | PureAqua-team, ik lever tekst |
| Countertop-productpagina: "kokend water", NSF/APMC-logo's en de Shopify-categorie "Warmhoudlampen" corrigeren | pureaqua.nl | PureAqua-team |
| Eén feitenbron per product (prijs, specificaties, bewijs) die alle domeinen volgen; op het platform bestaat die al in `lib/joep.mjs`, `lib/purefilter.mjs`, `lib/countertop.mjs` en `lib/kranen.mjs` | alle | ik + team |

### Spoor 2: onze producten in de tabellen en lijsten die AI citeert (week 1-2, autonoom)

AI neemt rijen uit vergelijkingstabellen, toplijsten en prijsoverzichten over. Daar moeten onze
producten staan, met correcte gegevens en eerlijke nadelen.

| Pagina (wordt aantoonbaar geciteerd) | Toevoegen |
|---|---|
| /waterontharder/vergelijken | JOEP als rij in de modeltabel en de kostentabel |
| /beste-waterontharder-2026 | JOEP als concreet model in de shortlist-tabel (niet alleen in het blok) |
| /kokend-water-kraan/merken-vergelijking en /kokend-water-kraan/vs-quooker | 4-in-1 met juiste feiten, eerlijke vergelijking met Quooker Flex PRO3 + CUBE |
| /aquatru-alternatief en /beste-waterfilter/huurwoning | Water zuiver apparaat als rij in de tabel |
| /waterfilter/onder-aanrecht en osmose-vergelijkingen | The Source + zuiver-water-kraan als rij |
| PFAS-filterpagina's | PureFilter met de labtest in de tabel |

Daarnaast per product een korte, citeerbare **feitenkaart** bovenaan de productpagina (naam,
prijs, kernspecificatie, bewijs, voor wie) en dezelfde tekst in `llms.txt`. Dat is het blok dat AI
het makkelijkst letterlijk overneemt.

### Spoor 3: snel laten herindexeren en structureel meten (week 1)

| Actie | Waarom | Wie |
|---|---|---|
| IndexNow automatisch aanroepen na elke productiedeploy (het script bestaat, maar draait niet) | ChatGPT en Copilot werken met de Bing-index; die ziet nu nog oude versies | ik |
| Bing Webmaster Tools koppelen en de sitemap indienen, voor platform en pureaqua.nl | idem | jij (toegang), ik (stappen) |
| Maandelijkse AI-meting: vaste set van 20 koopvragen in ChatGPT, Perplexity, Gemini en Google AI Overviews, met scorecard: genoemd, positie, juiste feiten, geciteerde bron | voortgang zichtbaar maken en bijsturen | ik (kost circa 2 euro per ronde) |
| Google Search Console: AI-vertoningen per productpagina volgen (Countertop had er 14 in vier maanden) | tweede meetlijn | jij (toegang) |

### Spoor 4: bewijs dat AI vertrouwt (maand 1-2, input nodig)

AI noemt als "beste" vooral producten met aantoonbare certificering of testrapporten.

| Product | Sterkste bewijs nu | Nodig |
|---|---|---|
| 4-in-1 | SGS-labtest: PFOS meer dan 99,6%, PFOA 99,5%, lood meer dan 99,8% | Schriftelijke toestemming om het rapport te citeren |
| PureFilter | Equinox Labs: circa 83-85% minder van vijf PFAS | Toestemming citeren; eventuele NSF-listing |
| The Source | IAPMO-listing op een fabrikantmodel | Koppeling fabrikantmodel aan jullie SKU, zodat de certificering weer genoemd mag worden |
| Water zuiver apparaat | Fabrikantsamenvatting labtests | Volledig testrapport, modelkoppeling |
| JOEP | Fabrieksgarantie 20 jaar hars | WRAS-koppeling via typeplaatje en secondary approval |

Daarnaast **echte reviews**: per product een reviewbron op de shop (niet op het gelieerde platform),
met structured data. Aantal en recentheid tellen voor AI mee.

### Spoor 5: aanwezig zijn waar AI zijn antwoorden haalt (maand 1-3)

| Kanaal | Waarom | Actie |
|---|---|---|
| Onafhankelijke vergelijkers: wateronthardergids.nl, allewaterfilters.nl, waterkokeradvies.nl, bestereviews.nl | Worden in bijna elk antwoord geciteerd | Productinformatie, testexemplaar of affiliate-samenwerking aanbieden |
| bol.com | AquaTru wordt via bol geciteerd | Countertop en PureFilter als bol-listing met dezelfde feiten |
| Reddit, Tweakers-forum, Kieskeurig | AI gebruikt forumervaringen als bewijs | Eerlijke deelname met openlijke vermelding van de relatie; geen nepaccounts |
| Media en data-PR | Vermeldingen buiten eigen domein | Waterhardheid-rapport en PFAS-duiding aanbieden aan regionale media en woonsites |
| Entiteit PureAqua | AI koppelt merken aan organisaties | Consistente bedrijfsgegevens (KvK, adres, merken) op site, Google Bedrijfsprofiel, Wikidata |

---

## 4. Prioriteit en planning

| Periode | Wat | Eigenaar |
|---|---|---|
| Week 1 | IndexNow na deploy; producten in geciteerde tabellen (spoor 2); feitenkaarten | ik |
| Week 1-2 | 4-in-1-opschoning platform (na akkoord); correctieteksten voor purefilter.nl en pureaqua.nl | ik, team voert shop-wijzigingen door |
| Week 2 | Bing Webmaster Tools + Search Console; eerste maandmeting | jij + ik |
| Maand 1-2 | Publicatierechten testrapporten; reviewbron per product | jij |
| Maand 1-3 | Vergelijkers, bol.com, forums, data-PR | team, ik lever materiaal |
| Maandelijks | AI-meting en bijsturen | ik |

## 5. Doelen (90 dagen)

| KPI | Nu | Doel |
|---|---|---|
| Koopvragen waarin ons product wordt genoemd (vaste set) | 3 van 7 | 5 van 7 |
| Antwoorden waarin onze feiten kloppen | 1 van 3 | alle |
| Onze product- of platformpagina als bron geciteerd | 6 van 7 | 7 van 7, met productpagina's |
| AI-vertoningen in Search Console (Countertop-URL) | 14 in 4 maanden | stijgend per maand |

## 6. Grenzen

- Geen verborgen reclame: het platform blijft zijn relatie met PureAqua noemen; oordelen zijn
  altijd toegeschreven ("onze keuze").
- Geen nepreviews, nepaccounts of gekochte forumposts. Dat werkt tegen ons zodra AI of de ACM het
  ziet.
- Geen claims zonder bewijs. AI herhaalt fouten letterlijk, onder onze naam.

## 7. Wat ik van jou nodig heb

1. Akkoord op de 4-in-1-opschoning (spoor 1) en een besluit over de pagina's over bruisend water.
2. Toegang of iemand voor Bing Webmaster Tools en Search Console.
3. Wie de correcties op pureaqua.nl en purefilter.nl doorvoert.
4. Toestemming om de SGS- en Equinox-resultaten te citeren.
5. De actuele navulprijs van PureFilter (purefilter.nl noemt 65 euro, oudere copy 49,90 euro).

## 8. Voortgang (bijgewerkt 24 september 2026, avond)

| Actie | Status |
|---|---|
| 4-in-1-feiten op het platform gelijktrekken (circa 140 pagina's) | Klaar, live sinds 24-09 (PR #12) |
| Producten in geciteerde tabellen (JOEP, Water zuiver apparaat, The Source, PureFilter, 4-in-1) | Klaar, live |
| Feitenkaarten op productpagina's en in `llms.txt` | Klaar, live; nu met links naar de testrapporten |
| Onafhankelijkheidsclaims vervangen door eerlijke vermelding band met PureAqua | Klaar, live |
| IndexNow na productiedeploy | Klaar; eerste run geslaagd na de deploy van PR #12 |
| Nulmeting met 20 vragen | Klaar: `docs/ai-meting/resultaten/2026-09.md` |
| Maandelijkse AI-meting | Routine ingepland (1e van de maand); connector koppelen in claude.ai door Jeroen |
| Navulprijs PureFilter | Opgelost: 65 euro (duo 115 euro), platform gelijkgetrokken |
| SGS- en Equinox-rapport citeren | Toestemming 24-09; SGS-resultatenblok met rapportlink op 4-in-1-pagina's, bronlinks in feitenkaarten en `llms.txt` |
| Filterkosten 4-in-1 | Fabrikantprijzen (Tapure) als indicatie: gemiddeld circa 150 euro per jaar; PureAqua-verkoopprijzen voor filters nog op de shop zetten |
| Shopcorrecties purefilter.nl en pureaqua.nl | Teksten klaar in Drive (twee documenten); uitvoering door het team |
| Bing Webmaster Tools | Stappen in Drive; vraagt Jeroens inlog (import vanuit Search Console) |
| Spoor 5 (vergelijkers, bol.com, data-PR) | Materiaal klaar in Drive; uitvoering door het team |
