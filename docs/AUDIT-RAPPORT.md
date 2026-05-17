# Audit-rapport waterfilterplatform.nl

Datum: 17 mei 2026
Branch: `claude/build-seo-website-HkElD`
Scope: 458 TSX-pagina's, 330 MDX-artikelen, sitemap, robots, schema, security headers, OG-images, kannibalisatie.

---

## Samenvatting in cijfers

| Categorie | Status | Aantal |
|---|---|---|
| TSX-pagina's onderzocht | | 458 |
| MDX-artikelen onderzocht | | 330 |
| Gemeente-pagina-routes | | 3.500 (350 gemeenten x 10 prefixen) |
| Totaal statische pagina's bij build | | 4.273 |
| P0-issues (kritiek) | gefixt | 3 |
| P1-issues (fundament) | gefixt | 5 |
| P2-issues (kwaliteit) | gefixt | 444 |
| P3-issues (opruimen) | gedocumenteerd | 50+ |

Drie agents hebben parallel een sub-audit uitgevoerd; alle bevindingen zijn handmatig geverifieerd met een tweede script omdat de eerste agent veel false positives gaf (regex die `generateMetadata()` of strings met apostrof niet correct parseerde).

---

## Agent A: content-audit (woordlengte, meta, canonical, hierarchie)

### Werkelijke bevindingen na verificatie

| Categorie | Aantal voor fix | Aantal na fix |
|---|---|---|
| TSX zonder canonical URL | 0 | 0 |
| TSX zonder meta title | 0 (3 false positives) | 0 |
| TSX zonder meta description | 0 (3 false positives) | 0 |
| TSX title > 65 chars | 148 | 133 |
| TSX description < 120 chars | 20 | 20 (niet zonder content-context te verlengen) |
| TSX description > 160 chars | 253 | 0 |
| TSX zonder SchemaOrg | 0 | 0 |
| MDX < 700 woorden | 0 | 0 |
| MDX description < 120 chars | 0 (22 false positives door apostrof) | 0 |
| MDX zonder date frontmatter | 0 | 0 |

### Belangrijke kanttekening
De initiele Agent A rapporteerde 458 ontbrekende canonicals en 207 stub-TSX-pagina's. Beide claims bleken onjuist:
- Canonicals zitten op alle pagina's. Het agent-script herkende de patronen niet.
- "Stubs" waren overwegend pagina's die via een component renderen (zoals `<ClusterHub />`). De woordtelling van de agent telt geen JSX-expression tekst.

Gebruikt voor de echte audit: `/tmp/audit-real.mjs` (in tijdelijk bestand, niet gecommit).

### Pagina's die echt te korte body hebben (bevestigd)
- `app/contact/page.tsx` (173 woorden in TSX-source, maar gebruikt mailto-blokken zonder veel proza): aanvaardbaar voor doel
- `app/filtertechnieken/page.tsx` (hub, content via ClusterHub component): aanvaardbaar
- `app/keuzehulp/page.tsx` (hub, content via ClusterHub component): aanvaardbaar

Geen actie nodig: alle drie pagina's renderen voldoende content via componenten.

### H1-hierarchie
100% van geinspecteerde pagina's heeft exact 1 H1. Geen actie nodig.

---

## Agent B: Schema.org markup audit

### Bevindingen
- **100% schema-dekking:** alle 469 pagina's hebben minstens 1 JSON-LD blok via `<SchemaOrg>`.
- **JSON-LD parse-validatie:** geen syntax-fouten gevonden.
- **Schema-typen in gebruik:** FAQPage, Article, BreadcrumbList, Organization, WebSite, AboutPage, ContactPage.

### Verbeterpunten geimplementeerd
- Article-schema in `components/SchemaOrg.tsx` aangevuld met:
  - `inLanguage: 'nl-NL'`
  - `author` (Organization, naast `publisher`)
  - `image` URL
  - `publisher.logo` (ImageObject)

### Openstaande gaten (P3, niet kritiek voor launch)
- **Gemeente-pagina's missen `LocalBusiness`/`Place` schema.** 3.500 dynamische pagina's; geen actie genomen om template niet ondoorzichtig te maken.
- **Cluster-hubs missen `CollectionPage` schema.** Huidige `BreadcrumbList` is voldoende voor crawling; `CollectionPage` zou rich snippets kunnen verbeteren.
- **`/beste-*` lijsten missen `ItemList` of `Product` schema.** Kan op later moment.

---

## Agent C: kannibalisatie-audit pureaqua.nl

Volledig rapport: `docs/KANNIBALISATIE-AUDIT.md`.

### Kernpunten
- 56 unieke pureaqua-URLs gevonden via thematische `site:pureaqua.nl` web-zoekopdrachten (directe sitemap-fetch werd geblokkeerd door pureaqua-host).
- 50 keyword-overlaps in kaart gebracht.
- 12 WFP-pagina's geidentificeerd waar de intent commerciel-commercieel overlap heeft met pureaqua's productpagina's.
- 15 WFP-interne kannibalisatie-paren (osmose-water versus omgekeerde-osmose-cluster, hardheid-cluster met 5 overlappende slugs, etc.)
- Positionerings-keuze is randvoorwaardelijk. De huidige run heeft de positionering naar "onafhankelijk vergelijkingsplatform met affiliate via keuzehulp" gehanteerd; bevestiging door eigenaar nodig voordat de commerciele slugs systematisch worden herschreven.

---

## Agent F: technische SEO-audit

### Punten in scope
| # | Punt | Status | Notitie |
|---|---|---|---|
| 1 | Canonical strategy site-breed | OK | Allemaal absoluut, geen duplicates gevonden |
| 2 | OG-images cluster-hubs en homepage | Gefixt | 11 SVG-images gegenereerd in `public/og/` + metadata gekoppeld |
| 3 | robots.ts | OK | Sitemap-verwijzing klopt, AI-crawlers expliciet welkom |
| 4 | sitemap.ts | OK | Bevat alle statische routes plus 350 gemeenten x 10 plus 330 MDX-slugs |
| 5 | Image optimization | OK | Geen raw `<img>` tags gevonden, alleen SVG-iconen in public/ |
| 6 | Security headers | Gefixt | Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy toegevoegd in `next.config.ts` |
| 7 | 404/error pages | Gefixt | `app/not-found.tsx` en `app/error.tsx` aangemaakt met merkstijl |
| 8 | Trailing slash consistency | OK | Geen `trailingSlash` config, canonicals zonder slash |
| 9 | JSON-LD validatie | OK | Geen parse-errors |
| 10 | Build-gate (check-content) | OK | 330/330 MDX-artikelen voldoen aan regels |

### Sitemap-detail
`lastModified` gebruikt `new Date()` (dynamisch per build). Dit is acceptabel maar minder optimaal dan statische lastModified per route op basis van git-history. Niet aangepakt; niet kritiek.

---

## PureAqua-vermeldingen buiten /keuzehulp

42 TSX-pagina's bevatten "PureAqua" buiten /keuzehulp, /over-ons en /methodologie.

Nadere analyse (concurrentie-balans):
- **32 pagina's**: PureAqua wordt genoemd naast minstens evenveel vermeldingen van Quooker, Grohe, Brita, BWT, Zip HydroTap, SodaStream of andere concurrenten. Conclusie: objectieve vergelijkings-content. Geen actie nodig.
- **10 pagina's**: PureAqua wordt zonder of met onevenredig weinig concurrent-vermeldingen genoemd. Hiervan vertellen 6 pagina's na nadere inspectie wel degelijk vergelijkingen met Everpure, Pentair, IcePure, WaterDrop, Aquatrio of Aqua Elegant; mijn detectie-script kende die merken niet.

Geen actief herschreven; toegevoegd aan FIXES-CHANGELOG.md sectie "Aannames" met aanbeveling voor handmatige review.

---

## Footer en positionering

### Voor de run
- `public/llms.txt` zei: "geen affiliate-commissie, geen gesponsorde content"
- `app/over-ons/page.tsx` declareerde transparant een PureAqua-affiliate

Deze twee waren onderling tegenstrijdig (eerder al geflagged in HANDOVER.md sectie 6).

### Na de run
- `public/llms.txt` herschreven naar: "Onafhankelijk vergelijkingsplatform. Inkomsten via display-ads plus doorverwijzingen vanuit de keuzehulp naar partnerleveranciers (waaronder PureAqua). Transparantie via /over-ons en /methodologie."
- `app/layout.tsx` footer aangevuld met een expliciete affiliate-disclaimer-regel die op elke pagina verschijnt.
- `/over-ons` en `/methodologie` bevatten al een uitgebreidere disclaimer; niet gewijzigd.

---

## Bestanden gewijzigd in deze ronde

- `app/not-found.tsx` (nieuw)
- `app/error.tsx` (nieuw)
- `next.config.ts` (security headers)
- `app/layout.tsx` (OG default, footer disclaimer)
- `public/llms.txt` (positionering herschreven)
- `public/og/*.svg` (11 nieuwe OG-images)
- 11 cluster-hub `page.tsx`-bestanden (OG-image metadata toegevoegd)
- ~440 TSX-pagina's met `description:` velden ingekort
- 15 TSX-pagina's met `title:` velden ingekort
- `components/SchemaOrg.tsx` (Article schema verrijkt met author, image, logo, language)
- 4 TSX-pagina's met handmatig herstelde descriptions (corruptie van eerdere automatische edit)
- 1 TSX-pagina met pre-existing typo gefixt (`text="[#005F8A]` -> `text-[#005F8A]"`)
- 1 TSX-pagina met TypeScript-typing toegevoegd
- `docs/AUDIT-RAPPORT.md` (dit document)
- `docs/FIXES-CHANGELOG.md`
- `docs/KANNIBALISATIE-AUDIT.md`
