# AI-search optimalisatie (AEO / GEO)

Datum: 2026-05-29. Branch: `claude/project-understanding-next-steps-0V102`.

Hoe is WaterfilterPlatform geoptimaliseerd voor antwoord-machines (ChatGPT, Perplexity,
Google AI Overviews, Claude) en wat is deze ronde verbeterd.

## Hoe AI-search optimalisatie hier werkt

AI-zoekmachines citeren bronnen die (a) crawlbaar zijn, (b) een kort, zelfstandig leesbaar
antwoord bevatten, (c) gestructureerde data (schema.org) leveren en (d) duidelijke
E-E-A-T-signalen (auteur, datum, bronnen) tonen. De site doet dit als volgt:

### Crawlbaarheid voor AI-bots
- `app/robots.ts` verwelkomt expliciet GPTBot, ClaudeBot, PerplexityBot, Google-Extended,
  Applebot, Amazonbot, Bytespider e.a. — geen enkele AI-crawler wordt geblokkeerd.
- `public/llms.txt` — beknopte, citatie-klare index van alle contenthubs en gemeente-routes.
- `public/llms-full.txt` — uitgebreide index voor diepere ingestie.
- `public/ai.txt` — AI content-licentiebeleid.
- `app/sitemap.ts` — volledige sitemap (4.366 URL's).

### Structured data (`components/SchemaOrg.tsx`)
Ondersteunt `Article`, `FAQPage`, `BreadcrumbList`, `Organization`, `WebSite`, `HowTo`,
`DefinedTermSet` en `QAPage`. Belangrijke AEO-eigenschappen:
- **`speakable`** op Article/FAQPage/QAPage, met cssSelector `.quick-answer`, `h1` en
  `[data-speakable="true"]` — markeert de kort-antwoord-zin als voorlees-/extractiewaardig.
- **`author` + `reviewedBy`** = `EDITORIAL_TEAM` (Organization met `knowsAbout`) — E-E-A-T.
- **`citation`** uit het `sources`-frontmatterveld — verifieerbaarheid voor AI.
- **`datePublished` / `dateModified` / `dateLastReviewed`** — versheidssignaal.

### On-page extractie-elementen (`app/kennisbank/[slug]/page.tsx`)
- **`QuickAnswer`-component** (`.quick-answer`, `data-speakable`, microdata
  Question/Answer) bovenaan elk artikel — dit is het meest geciteerde element door LLM's.
- **FAQ-schema** wordt automatisch geextraheerd uit kopteksten die op `?` eindigen
  (`extractFaqItems`), mits >= 2 — levert direct citeerbare vraag/antwoord-paren.
- **AuthorBox**, **SourcesSection**, zichtbare publicatie-/bijwerkdatum.

## Wat deze ronde is geimplementeerd

**100% QuickAnswer-dekking in de kennisbank.** 21 van de 363 MDX-artikelen misten het
`quickAnswer`-frontmatterveld en renderden daardoor geen `QuickAnswer`/`speakable`-blok —
precies het element dat antwoord-machines het vaakst overnemen. Voor deze 21 artikelen is
een feitelijk, zelfstandig leesbaar kort antwoord (1-3 zinnen) toegevoegd, afgestemd op de
zoekintentie van de titel. Resultaat: **363/363 artikelen** hebben nu een AI-citeerbare
samenvatting met speakable-markup.

Bewerkte artikelen: berkey-waterfilter, chroom-6-nederland-drinkwater, drinkwater-bewaren,
gedestilleerd-water, glyfosaat-leidingwater-nederland, hoeveel-water-per-dag,
koolzuurwater-kraan, kraanwater-stinkt, microplastics-menselijk-lichaam-onderzoek,
nierstenen-water-hardheid, regenwater-filtreren, spa-jacuzzi-waterbehandeling,
voordelen-gefilterd-water, water-bloeddruk-hart, waterfilter-abonnement, warm-water-drinken,
waterfilter-hele-woning, waterfilter-outdoor-wandelen, waterkoeler-kantoor,
waterkwaliteit-testen-thuis, zeoliet-waterfilter.

Verificatie: `npm run check-content` 363/363; `npm run build` exit 0, 4.366 pagina's.

## Aanbevolen vervolg-optimalisaties (niet in deze ronde)

1. **Speakable kort-antwoord op de programmatische gemeente-pagina's.** De 10 gemeente-
   templates (3.500 pagina's) hebben een sterke hero-intro maar geen `data-speakable`-markup
   of expliciet QuickAnswer-blok. Een `data-speakable="true"` op de intro-zin (die al een
   concreet antwoord bevat: "Waterhardheid in X is Y dH...") maakt deze massale paginaset in
   een keer AI-citeerbaar.
2. **QuickAnswer/TL;DR op cluster-hubs en commerciele TSX-pagina's** waar die nog ontbreekt.
3. **`llms-full.txt` periodiek synchroniseren** met nieuwe clusters/artikelen.
4. **FAQ-dekking borgen:** artikelen zonder >= 2 vraag-kopteksten emitteren geen FAQPage; een
   gate-warning hierop in `check-content.mjs` zou dit zichtbaar maken.
5. **Head-discovery van llms.txt** is bewust overgeslagen: `<link rel="alternate">` via
   root-metadata wordt door per-pagina `alternates.canonical` overschreven (shallow merge),
   en er is geen gevestigde crawler-standaard die deze hint gebruikt. Lage waarde, overslaan.
