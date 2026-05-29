# Waterontharder-cluster uitbreiding - werkdocument

Datum: 2026-05-29. Branch: `claude/project-understanding-next-steps-0V102`.
Doel: uitsluitend ADDITIEVE uitbreiding (merk-laag, merk-vergelijkingen, long-tail),
kannibalisatie-vrij. Elke nieuwe pagina heeft een uniek keyword-target.

## Slug-conventie (FASE 0 besluit)
- **Per merk:** top-level `/[merk]-waterontharder` (exact-match voor "[merk] waterontharder").
- **Merk-overzicht/hub:** het bestaande `content/kennisbank/waterontharder-merken.mdx` blijft de
  overzichtspagina; wordt verrijkt met links naar de nieuwe merkpagina's. Geen aparte TSX-hub
  (voorkomt kannibalisatie op "waterontharder merken" en een template-wijziging).
- **Vergelijkingen:** `/vergelijken/[a]-vs-[b]` (bestaand patroon).
- **Long-tail:** `content/kennisbank/[slug].mdx`, geregistreerd in `app/kennisbank/page.tsx`.

## FASE 1 - Merkpagina's (TSX) - status
Alle merken: 0 bestaande pagina's -> bouwen. Echte NL/BE-markt merken, neutraal, geen verzonnen specs.

| Slug | Merk | Keyword-target | Status |
|---|---|---|---|
| /bwt-waterontharder | BWT (AQA Perla) | "bwt waterontharder" | gebouwd |
| /grunbeck-waterontharder | Grunbeck (softliQ) | "grunbeck waterontharder" | gebouwd |
| /ecowater-waterontharder | EcoWater | "ecowater waterontharder" | gebouwd |
| /harvey-waterontharder | Harvey (blokzout twin-tank) | "harvey waterontharder" | gebouwd |
| /viteau-waterontharder | Viteau | "viteau waterontharder" | gebouwd |
| /aquacell-waterontharder | Aquacell | "aquacell waterontharder" | gebouwd |
| /maxima-waterontharder | Maxima | "maxima waterontharder" | gebouwd |
| /culligan-waterontharder | Culligan | "culligan waterontharder" | gebouwd |
| /kinetico-waterontharder | Kinetico (non-electric) | "kinetico waterontharder" | gebouwd |
| /erie-waterontharder | Erie (Pentair) | "erie waterontharder" | gebouwd |

## FASE 2 - Vergelijkingen (TSX) - status
| Slug | Keyword-target | Status |
|---|---|---|
| /vergelijken/bwt-vs-grunbeck | "bwt vs grunbeck" | gebouwd |
| /vergelijken/harvey-vs-bwt | "harvey vs bwt" | gebouwd |
| /vergelijken/zoutloze-waterontharder-vergelijken | "zoutloze waterontharder vergelijken" (TAC vs magneet vs elektronisch) | gebouwd |
| waterontharder-vs-antikalk-magneet | SKIP | overlap met /waterontharder/elektromagnetisch + magnetisch-waterontharder.mdx |

## FASE 3 - Long-tail artikelen (MDX) - status
| Slug | Keyword-target | Status |
|---|---|---|
| waterontharder-instellen | "waterontharder instellen / resthardheid / op welke stand" | gebouwd |
| waterontharder-lekkage | "waterontharder lekt / lekkage verhelpen" | gebouwd |
| waterontharder-lawaai | "waterontharder maakt lawaai / geluid" | gebouwd |
| waterontharder-blijft-regenereren | "waterontharder blijft regenereren / spoelt continu" | gebouwd |
| waterontharder-hygiene | "waterontharder bacteriegroei / desinfecteren / hygiene" | gebouwd |
| waterontharder-cv-ketel | "waterontharder en cv-ketel / combiketel" | gebouwd |
| waterontharder-natrium-zoutarm | "waterontharder natrium / zoutarm dieet" | gebouwd |
| waterontharder-zeep-besparing | "waterontharder zeep- en wasmiddelbesparing" | gebouwd |
| waterontharder-subsidie | "waterontharder subsidie / fiscaal" | gebouwd |
| waterontharder-verhuizen | "waterontharder verhuizen / meenemen" | gebouwd |
| waterontharder-hele-huis | "waterontharder hele huis vs point-of-use" | gebouwd |

### Geskipt (kannibalisatie, gemotiveerd)
- waterontharder-winterklaar / vorst -> overlap met nieuwe `waterfilter-vorst-bevriezen`.
- resthardheid voor planten/aquarium -> overlap met `waterhardheid-planten` + `waterontharder-aquarium`.
- waterverbruik bij regeneratie -> overlap met `waterontharder-zout-verbruik` + `waterontharder-regeneratie`.

## Ranking-optimalisatie ronde (2026-05-29) - geen nieuwe pagina's

- **FASE 1 - Consolidatie:** 3 TSX->TSX + 17 MDX->TSX canonicals naar de commerciele
  `/waterontharder/*` cluster. Volledige map + bewuste niet-consolidaties in
  CANNIBALIZATION-AUDIT.md. Kennisbank-template ondersteunt nu een `canonical`-frontmatterveld.
- **FASE 2 - Link-sculpting:** `/beste-waterontharder-2026` linkt nu alle 10 merkpagina's;
  `/waterontharder` hub heeft een Merken-sectie; merk-laag in llms.txt.
- **FASE 3 - Structured data:** HowTo-schema (8 stappen) op `/waterontharder/installeren`;
  ItemList op `/beste-waterontharder-2026`; FAQPage+BreadcrumbList+speakable QuickAnswer breed aanwezig.
- **FASE 4 - Versheid/E-E-A-T:** hub lastReviewed 2026-05-29 + Vewin als bron.
- **FASE 5 - Titels/canonicals:** geen dubbele titels gecreeerd; canonical dedupliceert.
  CTR-tuning van titels/descriptions is GSC-afhankelijk -> volgende stap.
- **GSC = volgende stap:** zonder Search Console is FASE 1 structuur-gebaseerd. Met GSC:
  valideren welke URL per query wint, en hoog-impressie/lage-CTR pagina's herschrijven.
