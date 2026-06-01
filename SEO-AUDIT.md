# SEO + AI Search audit — Waterfilterplatform.nl

Datum: 2026-05-29. Standaard: `WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`.
Methode: `AUDIT_SEQUENCE` + `CODEBASE_SEO_CHECKS` uit het handover-document.

## 1. Inventaris

- **Routes:** 557 `app/**/page.tsx` (waarvan ~4.415 statische pagina's na `generateStaticParams`,
  incl. ~3.500 programmatische gemeente-pagina's over 10 routetypes x ~350 gemeenten).
- **Kennisbank:** 384 MDX-artikelen (`content/kennisbank`), gerenderd via `app/kennisbank/[slug]`.
- **SEO-componenten:** `SchemaOrg` (Article, FAQPage, BreadcrumbList, Organization, WebSite,
  HowTo, DefinedTermSet, QAPage, ItemList, generieke `schema`), `QuickAnswer` (speakable),
  `AuthorBox`, `MethodologyBadge`, `SourcesSection`, `CTABanner`, `ClusterHub`.
- **Infra:** `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx` (metadataBase + robots index),
  `app/not-found.tsx`, `app/error.tsx`, `public/llms.txt`, `public/llms-full.txt`, `public/ai.txt`,
  IndexNow-script (`scripts/ping-indexnow.mjs`), contentgate (`scripts/check-content.mjs`).

## 2. Technische SEO-basis (CODEBASE_SEO_CHECKS) — resultaat

| Check | Resultaat |
|---|---|
| Indexeerbaarheid (geen onbedoelde noindex) | PASS - 0 `noindex/nofollow/noarchive` in code; `layout` zet `robots: index,follow` |
| robots.txt | PASS - `/robots.txt` aanwezig, `allow: '/'`, sitemap-regel; verbeterd (zie changelog) |
| sitemap.xml | PASS - dynamisch via `app/sitemap.ts`, canonieke URLs, vermeld in robots |
| Canonicals | PASS - 557/557 pagina's hebben een canonical in `<head>` |
| Unieke `<title>` | PASS - ~100% (alle gecontroleerde routes; gemeente-templates bouwen unieke titels) |
| Meta description | PASS - ~100% |
| 1 H1 per pagina | PASS - geen enkele pagina met >1 `<h1>` |
| Crawlbare links | PASS - Next `<Link>` -> echte `<a href>`; geen fragment-routing |
| 404/soft-404 | PASS - `not-found.tsx` aanwezig |
| Mobile parity | PASS - server-rendered, responsive Tailwind, gelijke content mobiel/desktop |
| Structured data | PASS - JSON-LD breed aanwezig; representeert zichtbare content |
| Verborgen content / cloaking | PASS - geen bot-only content |

**P0 (blokkades): geen.** De technische basis voldoet aan de MUST-eisen van het document.

## 3. Bevindingen per prioriteit

| URL/scope | Pagtype | Bevinding | Prioriteit | Status |
|---|---|---|---|---|
| `app/*-waterontharder`, `app/*-alternatief`, `app/vergelijken/*` (nieuw), `app/drinkwaterfontein/*` (nieuw), `app/beste-*`, `app/begrippenlijst` (28 pagina's) | merk/vergelijking/koopgids | Misten zichtbare E-E-A-T trustblokken (auteur/reviewer + laatst-bijgewerkt). MUST voor koopadvies/vergelijking. | P1 | **OPGELOST** - `AuthorBox` + `MethodologyBadge` toegevoegd |
| `app/robots.ts` | infra | `OAI-SearchBot` (ChatGPT Search) en `Perplexity-User` niet expliciet vermeld | P2 | **OPGELOST** - expliciet toegevoegd (waren al toegestaan via `*`) |
| `/{waterontharder,waterontkalker,waterhardheid,kalk-in,drinkwater,...}/[gemeente]` (~3.500) | lokaal/programmatisch | Schaalrisico: veel near-template pagina's. Document noemt doorway/scaled content een MUST-risico, alleen publiceren met aantoonbaar unieke lokale waarde. Elke pagina heeft wel unieke data (dH, waterbedrijf, provincie). | P1 | **OPEN - vereist GSC** (niet blind noindexen) |
| Commerciele/vergelijkingspagina's | merk/vergelijking | `Article`-schema ontbreekt (alleen FAQPage+BreadcrumbList). Nu `AuthorBox` zichtbaar is, kan `Article` (author/datePublished) wel een ware representatie zijn. | P2 | OPEN - vervolgronde |
| Sitewide | infra | OG-images zijn SVG; sommige social/AI-previews verkiezen PNG/JPG (1200x630). | P3 | OPEN |
| Extern | infra | Google Search Console + Bing Webmaster Tools koppelen; IndexNow draaien na deploy. | P2 | OPEN - eigenaar/extern |

## 4. Definition of Done — beoordeling

De site voldoet aan de **technische** Definition of Done uit het document: indexeerbaar,
self-referential canonicals, unieke title/description, 1 H1, correcte robots + sitemap,
structured data die zichtbare content representeert, interne hub/cluster-linking, en (na deze
ronde) zichtbare trust/E-E-A-T op de commerciele pagina's. AI Search-readiness is sterk
(QuickAnswer/speakable, FAQ, heldere koppen, citatie-klare antwoorden, AI-bots toegelaten).

**Nog niet volledig DoD-conform (open punten):**
1. Gemeente-programmatische laag op schaalrisico beoordelen met GSC-data (P1).
2. `Article`-schema op commerciele/vergelijkingspagina's (P2).
3. GSC/Bing Webmaster Tools koppelen + IndexNow-run (P2, extern).
4. OG-images naar PNG (P3).

## 5. Werkregels gehanteerd
Geen functionaliteit gebroken, geen content verwijderd, geen visuele koerswijziging buiten de
doc-gedreven trustblokken, geen SEO-hacks. Alle wijzigingen build-geverifieerd (4.415 pagina's,
`check-content` 100%).
