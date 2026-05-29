# Content-gap analyse - WaterfilterPlatform.nl

Datum: 2026-05-29. Branch: `claude/project-understanding-next-steps-0V102`.

Doel: ontbrekende contentclusters en keyword-gaps vinden bovenop de ~4.366 bestaande
pagina's, met focus op (a) commerciele/transactionele intentie die naar PureAqua kan
funnelen, (b) "vs"/vergelijkings- en "beste X 2026"-intentie, (c) vraag-long-tail die
antwoord-machines oppakken, (d) entiteit-/definitiepagina's voor topical authority (E-E-A-T).

## 1. Verzadiging per cluster (data/clusters.ts + app/-tree)

| Cluster | Hub | Status | Opmerking |
|---|---|---|---|
| Drinkwaternormen | `/drinkwaternormen` | **Verzadigd** | 13 sub-pagina's, normen 2026 gedekt |
| Stoffen in drinkwater | `/stoffen-in-drinkwater` | **Verzadigd** | 10 stofgroepen + losse stof-MDX in overvloed |
| Filtertechnieken | `/filtertechnieken` | **Verzadigd** | 10 technieken incl. CDI, nanofiltratie |
| Keuzehulp | `/keuzehulp` | Goed gevuld | 9 situaties; mist enkele life-events (zie 2c) |
| Beste waterfilter | `/beste-waterfilter` | Goed gevuld | 12 situaties |
| Waterhardheid | `/waterhardheid` | **Verzadigd** | 8 sub + 350 gemeente-pagina's |
| Keurmerken | `/keurmerken` | **Verzadigd** | 8 keurmerken |
| Vergelijken | `/vergelijken` | Goed gevuld | 8 vergelijkingen; mist merk-vs-merk (zie 2b) |
| Onderhoud | `/onderhoud` | Goed gevuld | 9 onderwerpen |
| Zakelijk | `/zakelijk` | **Verzadigd** | 10 sectoren |
| Kennisbank | `/kennisbank` | **Verzadigd** | 363 MDX, 100% AI-citeerbaar |

**Conclusie:** de informationele clusters zijn vrijwel verzadigd. De echte gaps zitten in de
**commerciele merk-laag** (brand- en brand-vs-pagina's) en in een ontbrekende
**entiteit/woordenlijst-laag** - precies de twee lagen die het dichtst bij conversie en bij
AI-citatie liggen.

## 2. Gevonden gaps (geprioriteerd)

Legenda type: `page` = TSX-pagina | `article` = MDX-kennisbankartikel.
Alle gaps zijn geverifieerd: de slug/route bestaat nog niet en er is geen kannibalisatie met
bestaande primaire pagina's (zie CANNIBALIZATION-AUDIT.md).

### Prio 1 - Commerciele merk-gaps (hoogste conversiewaarde, funnel naar PureAqua 4-in-1)

De site heeft het bewezen `/[merk]-alternatief`-patroon (quooker, grohe-red, sodastream,
insinkerator) dat naar de 4-in-1 osmosekraan funnelt. Drie grote NL/EU-merken ontbreken nog,
terwijl ze in zoekvolume en interne vermeldingen aantoonbaar relevant zijn:

| Slug | Intentie | Type | Waarom gap | Interne parents |
|---|---|---|---|---|
| `/selsiuz-alternatief` | "selsiuz alternatief", "selsiuz vs quooker" | page | Selsiuz is top-3 NL kokend-water-kraanmerk; **0 paginas/0 vermeldingen** | `/kokend-water-kraan`, `/vergelijken/kokend-water-kraan-merken` |
| `/grohe-blue-alternatief` | "grohe blue alternatief", "grohe blue vs" | page | Grohe Blue (gekoeld/bruisend/gefilterd) **17x intern vermeld, geen eigen pagina**; los van Grohe Red (kokend) | `/kokend-water-kraan`, `/bruisend-water`, `/4-in-1-kraan` |
| `/boretti-alternatief` | "boretti kokend water kraan alternatief" | page | Boretti kokend-water-kraan; **0 coverage** | `/kokend-water-kraan` |
| `/fonteq-alternatief` | "fonteq alternatief" | page | Budget NL-merk, 0 coverage | `/kokend-water-kraan` |
| `/waterdrop-alternatief` of `/waterdrop-review` | "waterdrop osmose review/alternatief" | page | Waterdrop **10x intern vermeld**, geen eigen pagina; populair RO-merk | `/omgekeerde-osmose`, `/beste-osmosefilter-2026` |

> Strategische noot: zodra de affiliate-bestemming bekend is, zijn dit de pagina's waar een
> directe PureAqua-CTA het meeste oplevert (hoge koopintentie, merkvergelijkend).

### Prio 1 - Entiteit/authority-gap (hoogste AI-citatiewaarde)

| Slug | Intentie | Type | Waarom gap | Interne parents |
|---|---|---|---|---|
| `/begrippenlijst` | "waterfilter begrippen", "TDS / osmose / dH betekenis" | page | **Geen woordenlijst/glossary** terwijl `DefinedTermSet`-schema al bestaat in SchemaOrg.tsx; ideaal entiteit-anker voor AI-engines en interne links | alle 10 hubs |

### Prio 2 - "Beste X 2026" en merk-vs-merk vergelijkingen

| Slug | Intentie | Type | Waarom gap | Interne parents |
|---|---|---|---|---|
| `/beste-waterontharder-2026` | "beste waterontharder 2026" | page | "beste X 2026"-set mist de grote waterontharder-categorie (osmosefilter/kokend-water/waterfilter bestaan al) | `/waterontharder`, `/vergelijken/waterontharder-vergelijken` |
| `/beste-filterkan-2026` | "beste filterkan/waterfilterkan 2026" | page | Brita/BWT-filterkan koopintentie ongedekt op pagina-niveau | `/filterkan`, `/beste-waterfilter/budget-onder-100` |
| `/vergelijken/quooker-vs-selsiuz` | "quooker vs selsiuz" | page | Twee grootste NL-merken, directe vergelijking ontbreekt | `/vergelijken`, `/kokend-water-kraan/vergelijken` |
| `/vergelijken/grohe-blue-vs-grohe-red` | "grohe blue vs red" | page | Verwarrend merkduo, hoog informatief + commercieel | `/vergelijken` |
| `/vergelijken/brita-vs-bwt` | "brita vs bwt" | article | Twee grootste filterkanmerken; alleen brita-vs-osmose bestaat | `/vergelijken`, `/filterkan` |

### Prio 3 - Vraag-long-tail die antwoord-machines oppakken (kennisbank-artikelen)

Onderwerpen met aantoonbare zoekvraag en geen bestaande pagina:

| Slug | Intentie | Type |
|---|---|---|
| `osmose-water-honden-katten-veilig` | "is osmosewater veilig voor huisdieren" | article (let op: `waterfilter-hond-kat` bestaat al -> differentieer naar osmosewater specifiek of skip) |
| `waterfilter-vorst-bevriezen` | "waterfilter bevriezing voorkomen winter" | article |
| `osmose-water-medicijnen-innemen` | "osmosewater met medicijnen innemen" | article |
| `waterontharder-stroomverbruik-kosten-2026` | overlap met bestaande `waterontharder-stroom-verbruik` -> **skip (kannibalisatie)** | - |
| `kokend-water-kraan-stroomstoring` | "kokend water kraan bij stroomuitval" | article |
| `drinkwater-hitte-zomer-kwaliteit` | "kraanwater kwaliteit bij hitte/droogte" | article (raakt klimaat-MDX; differentieer) |

> De kennisbank is dermate dik (363 artikelen) dat nieuwe long-tail eerst tegen bestaande
> slugs gecheckt moet worden op kannibalisatie. Bovenstaande zijn de overgebleven witte vlekken.

## 3. Cross-check kannibalisatie

- Merk-`/[x]-alternatief`-pagina's targeten elk een uniek merk-keyword -> geen onderlinge
  overlap, consistent met bestaand patroon.
- `/grohe-blue-alternatief` is bewust gescheiden van `/grohe-red-alternatief`: Blue = gekoeld/
  bruisend/gefilterd, Red = kokend. Verschillende intentie, geen kannibalisatie.
- `/beste-waterontharder-2026` mag NIET de hub `/waterontharder` of `/vergelijken/
  waterontharder-vergelijken` dupliceren -> framing als jaarlijkse koopgids (shortlist +
  TCO), canonical zelfstandig, linkt naar de hub als parent.
- Glossary `/begrippenlijst` definieert termen en linkt door; het rankt niet op de
  diepte-keywords van de bestaande pagina's -> geen overlap.

## 4. Deze ronde gescaffold (top 5)

Gebouwd volgens bestaande template/schema-conventies (FAQPage + BreadcrumbList schema,
QuickAnswer/speakable, CTABanner, interne links, TCO-tabellen):

1. `/selsiuz-alternatief` (page) - merkvergelijking -> 4-in-1 osmosekraan
2. `/grohe-blue-alternatief` (page) - merkvergelijking -> 4-in-1 osmosekraan
3. `/boretti-alternatief` (page) - merkvergelijking -> 4-in-1 osmosekraan
4. `/begrippenlijst` (page) - entiteit/woordenlijst met DefinedTermSet-schema (AI-authority)
5. `/beste-waterontharder-2026` (page) - jaarlijkse koopgids, sluit "beste X 2026"-set

Alle vijf toegevoegd aan `app/sitemap.ts`. `npm run check-content` 363/363; `npm run build`
groen.

## 5. Vervolg (volgende ronde)

- Prio 2/3 hierboven afbouwen (beste-filterkan-2026, merk-vs-merk, resterende long-tail).
- Zodra GSC-export beschikbaar is: gaps valideren op werkelijk zoekvolume i.p.v. inferentie.
- Verse keyword-export trekken; `CONTENT_BACKLOG.md` is mei 2026 en ~12 maanden oud.
