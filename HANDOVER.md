# HANDOVER waterfilterplatform.nl

Overdrachtsdocument voor een AI-assistent die het project verder helpt onderhouden en verbeteren op SEO-vlak. Geschreven op 17 mei 2026.

---

## 1. Project status

### Stack
- **Framework:** Next.js 16.2.6 (App Router, statische generatie)
- **Runtime:** React 19.2.4
- **Styling:** Tailwind CSS v4 (via @tailwindcss/postcss)
- **TypeScript:** 5.x
- **MDX:** next-mdx-remote 6.0 voor kennisbank-artikelen
- **Node scripts:** check-content.mjs (build-gate voor MDX-kwaliteit), ping-indexnow.mjs

> Let op: Next.js 16 wijkt sterk af van eerdere versies. AGENTS.md verwijst expliciet naar `node_modules/next/dist/docs/` voor de juiste API-conventies. Niet vertrouwen op trainingsdata van eerdere Next-versies.

### CMS
Er is geen CMS. Alle content staat in:
- `app/**/page.tsx` voor TSX-pagina's
- `content/kennisbank/*.mdx` voor de kennisbank-artikelen
- `data/clusters.ts` voor de cluster-architectuur metadata
- `data/gemeenten.ts` voor de 350 Nederlandse gemeenten met waterhardheid

Wijzigingen gaan via git-commits op de branch.

### Hosting en deployment
- **Hosting:** Vercel
- **Vercel team:** `team_Z2inrWorqov4eWuoRk4A5dEI`
- **Vercel project:** `prj_tZA1qNknPmD1KsFfFWGLSoWZ3akG`
- **Project config:** `.vercel/project.json` (gecommit)
- **Auto-deploy:** Git-integratie. Elke push naar een branch triggert een preview-deployment, push naar `main` deployt productie.
- **Branch preview URL (huidig):** `https://waterfilterplatform-git-claude-bui-5ca60c-jeroen-9450s-projects.vercel.app`

### Live vs staging
- **Productie:** waterfilterplatform.nl (gekoppeld aan branch `main`)
- **Staging / huidige werkbranch:** `claude/build-seo-website-HkElD` (push: `origin`)
- **Niet bevestigd:** of het productiedomein op dit moment de laatste main-deploy serveert. Ik heb DNS/SSL niet kunnen valideren vanuit deze omgeving.

### Domein
- **Primair:** waterfilterplatform.nl
- **metadataBase:** `https://waterfilterplatform.nl` (in `app/layout.tsx` regel 9)
- Geen alternate domains aangetroffen.

### Branches en repository
- **Repository:** `cycle-up/mobile-seo` op GitHub
- **Hoofdbranch:** `main`
- **Werkbranch:** `claude/build-seo-website-HkElD`
- **Aantal commits totaal:** 256
- **Restanten:** 13 lokale `worktree-agent-*` branches (residu van parallelle agent-runs). Veilig op te ruimen mits er geen actieve agents lopen.

---

## 2. Site architectuur

### URL-structuur
De site is opgebouwd rond 10 contenthubs (clusters) plus programmatische gemeente-pagina's. Definitie van clusters: `data/clusters.ts`.

#### De 10 clusters
| ID | Hub-URL | Doel |
|---|---|---|
| 1 | `/drinkwaternormen` | Wettelijke normen, EU-richtlijn 2020/2184, RIVM, ILT |
| 2 | `/stoffen-in-drinkwater` | Per stof (PFAS, lood, nitraat, kalk, hormonen, etc.) |
| 3 | `/filtertechnieken` | Per techniek (RO, actief kool, UF, NF, ionenwisseling) |
| 4 | `/keuzehulp` | Per situatie (hard water, baby, huurwoning, budget) |
| 5 | `/beste-waterfilter` | Per use-case (appartement, gezin, koffie, ecologisch) |
| 6 | `/waterhardheid` | Per gemeente en hardheidsklasse |
| 7 | `/keurmerken` | Per certificering (NSF, Kiwa, ACS, CE, WRAS) |
| 8 | `/vergelijken` | Filter vs filter vergelijkingen |
| 9 | `/onderhoud` | Per filtertype onderhoud en storingen |
| 10 | `/zakelijk` | B2B per sector (horeca, kantoor, scholen) |

#### Programmatische gemeente-routes
350 gemeenten uit `data/gemeenten.ts`, elk geserveerd op 10 routes:
- `/waterhardheid/[gemeente]`
- `/drinkwater/[gemeente]`
- `/kalk-in/[gemeente]`
- `/waterontharder/[gemeente]`
- `/waterfilter/[gemeente]`
- `/osmose-filter/[gemeente]`
- `/kraanwater/[gemeente]`
- `/leidingwater/[gemeente]`
- `/kokend-water-kraan/[gemeente]`
- `/waterontkalker/[gemeente]`

Dat zijn 3.500 gemeente-pagina's.

#### Kennisbank
- `/kennisbank` (overzicht)
- `/kennisbank/[slug]` voor 330 MDX-artikelen

### Pagina-types
1. **Cluster hub** (10x): renders via `components/ClusterHub.tsx`, voedt zich uit `data/clusters.ts`
2. **Cluster sub-pagina** (commerciele intent): handgeschreven TSX in `app/<cluster>/<slug>/page.tsx`
3. **Programmatische gemeente-pagina** (3.500x): SSG via `generateStaticParams()`
4. **Kennisbank-artikel** (330x): MDX via `next-mdx-remote`, validatie via `scripts/check-content.mjs`
5. **Autoriteits-pagina** (3x): `/over-ons`, `/methodologie`, `/contact`
6. **Vergelijkings- en landing-pagina** (overig): Quooker-alternatieven, alkalisch-water, brouwwater, etc.

### Totaal aantal pagina's
- 448 `page.tsx` bestanden in `app/`
- 330 MDX-artikelen in `content/kennisbank/`
- 3.500 gemeente-pagina's via SSG (10 routes x 350 gemeenten)
- **Laatste gerapporteerde build:** ~4.189 statische pagina's (uit TODO-volgende-ronde.md na ronde 21)

Ik heb geen verse `npm run build` gedraaid in deze sessie, dus de exacte huidige paginatelling staat niet vast.

### Sitemap
- **Generator:** `app/sitemap.ts` (Next.js built-in)
- **URL:** `https://waterfilterplatform.nl/sitemap.xml`
- **Inhoud:**
  - 478 `url:` entries voor statische routes (handmatig gepind in array)
  - Alle 350 gemeenten x 10 prefixen via map
  - Alle MDX-slugs gelezen vanuit `content/kennisbank/`
- **lastModified:** `new Date()` bij elke build (dynamisch)
- **changeFrequency en priority:** ingesteld per route

### Navigatie
- **Desktop:** 4 dropdown-menu's (Keuzehulp, Filtertechnieken, Vergelijken, Drinkwaterkwaliteit) plus Kennisbank-link. CSS-only via Tailwind named group variants, geen client-state.
- **Mobile:** 6 chips horizontaal scrollbaar.
- **Footer:** 4 kolommen met thematische deeplinks.
- **Definitie:** `app/layout.tsx`.

---

## 3. Content status

### Tellingen
- **TSX-pagina's:** 448
- **MDX-artikelen:** 330
- **Gemeenten in dataset:** 350
- **Clusters:** 10 (allemaal voorzien van hub)

### Status per cluster
Onderstaande telling gemaakt door `ls app/<cluster>/` op 17 mei 2026.

| Cluster | Hub | Sub-pagina-directories |
|---|---|---|
| `/drinkwaternormen` | ja | 13 |
| `/stoffen-in-drinkwater` | ja | 1 (zware-metalen), 3 in uitvoering, 5 nog niet |
| `/filtertechnieken` | ja | 3 (actief-kool, ionenwisseling, ultrafiltratie), 4 ontbreken |
| `/keuzehulp` | ja | 4 (baby-gezin, hard-water, huurwoning, pfas-lood), 4 ontbreken |
| `/beste-waterfilter` | ja | 4 (appartement, huurwoning, koffie-thee, ouder-huis), 4 ontbreken |
| `/waterhardheid` | ja | 9 (incl. per-provincie, kaart, meten, verlagen, etc.) |
| `/keurmerken` | ja | 1 gecommit, 2 in uitvoering, 5 ontbreken |
| `/vergelijken` | ja | aanwezig (osmose-vs-filterkan, waterfilter-vs-waterontharder gecommit) |
| `/onderhoud` | ja | aanwezig (osmose-filter-vervangen, filterkan-filter, storingen-oplossen) |
| `/zakelijk` | ja | aanwezig (kantoor, horeca) |

> Op het moment van schrijven lopen drie achtergrond-agents die 29 sub-pagina's bouwen. De eerste batch (2 stuks) is al gecommit (`3f34ea6`); de overige verschijnen automatisch in `git status` zodra een agent klaar is.

### Kwaliteitsregels MDX-artikelen
Afgedwongen door `scripts/check-content.mjs` (draait in `npm run build`):
- Minimaal 700 woorden body
- Description max 155 tekens
- Title max 70 tekens (warning, geen fout)
- Minimaal 2 interne links
- Verplichte frontmatter: `title`, `description`, `date`, `slug`

### Wat ik niet kan zien
- **Werkelijke contentkwaliteit per pagina** (lengte in woorden per TSX-pagina is niet uitgelezen)
- **Of artikelen feitelijk correct zijn** (geen fact-check uitgevoerd)
- **Welke pagina's nog stub-content bevatten** versus volwaardig
- **Welke pagina's dubbel keyword-targeten** (kannibalisatie-audit nooit gedaan)

---

## 4. SEO setup

### Keyword-research
- **Bron:** Google Search Console export van pureaqua.nl (12 maanden, 667.047 vertoningen, gerapporteerd in `docs/plan.md` en oorspronkelijke plan)
- **Strategie:** alleen keywords waar pureaqua.nl op positie 11 of lager staat aanpakken
- **Bestand:** `CONTENT_BACKLOG.md` met geprioriteerde lijst (Prio 1/2/3)
- **Status:** Prio 1 hoofdkeywords (osmose-cluster, kokend-water-cluster) zijn gedekt met pagina's

Er is geen actuele GSC-data of Ahrefs/SEMrush-export aanwezig in het project. De originele keyword-prioritering dateert van mei 2026 en is sindsdien niet ververst.

### Tools
**In de codebase aanwezig:**
- `scripts/check-content.mjs`: MDX-kwaliteitsgate
- `scripts/ping-indexnow.mjs`: pingt IndexNow API met alle sitemap-URLs (manuele run na deploy)
- IndexNow-key: `647df179ed2746cfad25559632287896` (publiek beschikbaar op `/647df179ed2746cfad25559632287896.txt`)

**Niet geinstalleerd of niet zichtbaar:**
- Geen Google Analytics
- Geen Vercel Analytics
- Geen Plausible / Fathom / Umami
- Geen GSC API-integratie
- Geen Ahrefs / SEMrush-koppeling
- Geen automated rank tracking

### Schema.org
- **Component:** `components/SchemaOrg.tsx`
- **Ondersteunde types:** `FAQPage`, `Article`, `BreadcrumbList`, `Organization`, `WebSite`, plus generieke `schema` prop voor custom schemas (gebruikt op `/over-ons`, `/methodologie`, `/contact`)
- **Coverage:** niet systematisch geaudit. Niet alle pagina's hebben breadcrumbs of FAQPage-schema.

### Interne links
- **Cluster hubs**: linken naar hun sub-pagina's via `ClusterHub.tsx` (kaart-grid) en naar gerelateerde clusters.
- **Sub-pagina's**: breadcrumbs in hero, CTA-banner, vaak inline links naar verwante hubs.
- **MDX-artikelen**: minimum 2 interne links (gegarandeerd door check-content).
- **Audit-status:** niet uitgevoerd. Geen crawl-rapport, geen orphaned-pages check, geen anchor-text analyse.

### CTA-banners
- **Component:** `components/CTABanner.tsx`
- **Contexts:** `osmose` / `kokend` / `waterhardheid` / `algemeen`
- **Doelen:** intern (`/waterfilter/vergelijken`, `/kokend-water-kraan/vergelijken`, `/waterhardheid`, `/waterfilter/soorten`)
- Er linkt geen enkele CTA op dit moment direct naar pureaqua.nl. Positionering hierover is inconsistent (zie sectie 6).

### llms.txt
Bestand bestaat op `public/llms.txt`. Bevat overzicht van hoofdthema's en gemeente-routes voor AI-crawlers. Inhoud overlapt deels met de sitemap.

### Robots.txt
- **Bestand:** `app/robots.ts` (gegenereerd door Next.js)
- **Beleid:** alles toegestaan, expliciete welkom-regels voor GPTBot, ClaudeBot, Claude-Web, PerplexityBot, Googlebot-Extended, YouBot, Amazonbot, Applebot, DuckAssistBot, Meta-ExternalAgent, Bytespider.

---

## 5. Technische SEO

### Indexatie
- Static generation per pagina via App Router
- Sitemap.xml automatisch gegenereerd
- IndexNow-ping script aanwezig (maar handmatig te draaien na deploy)
- Geen verificatie of alle 4.000+ pagina's daadwerkelijk in Google's index zitten. GSC-toegang ontbreekt in deze omgeving.

### Core Web Vitals
- Geen Lighthouse-rapport in de codebase aangetroffen
- `next/font` met Geist wordt gebruikt (geoptimaliseerde font-loading)
- Geen image-componenten gevonden (geen `next/image` usage), wat logisch is want er staan geen content-images in `public/` behalve SVG-iconen
- Geen formele audit uitgevoerd op LCP/CLS/INP scores

### Bekende technische zaken
- **Smart quotes bug:** Turbopack crasht op smart quotes (U+2018/2019/201C/201D). Alle bestanden moeten rechte aanhalingstekens gebruiken. Validatiecommando staat in CLAUDE.md/AGENTS.md.
- **MDX angle brackets:** Raw `<N` in MDX body breekt de build. Altijd `&lt;N` gebruiken.
- **Geen OG-images:** metadata.openGraph is geconfigureerd zonder image-assets. Social sharing levert tekst-only previews.
- **Canonical URLs:** worden per pagina handmatig gezet via `alternates: { canonical: ... }`. Geen automatische generator. Niet alle pagina's zijn nagecontroleerd.
- **Inconsistente metadataBase:** layout zet `metadataBase` op productiedomein, individuele pagina's gebruiken volledige absolute URL in canonical. Werkt, maar niet DRY.

### Issues om te valideren
1. Worden alle gemeente-pagina's daadwerkelijk geindexeerd? (3.500 pagina's met laag-volume keywords, mogelijk crawl-budget probleem)
2. Is er content-cannibalization tussen `/omgekeerde-osmose`, `/osmose-filter`, `/osmose-water` en verwante slugs?
3. Sitemap.xml validiteit niet getest in deze sessie
4. Geen 404-monitoring of broken-link check actief

---

## 6. Positionering en verdienmodel

### Tegenstrijdige signalen
Dit is een belangrijk punt om recht te zetten. De positionering is op twee plekken inconsistent:

**`public/llms.txt` (regel 3):**
> "Onderdeel van een netwerk van 40+ informatieplatforms. Inkomsten via display advertising, geen affiliate-commissie, geen gesponsorde content."

**`app/over-ons/page.tsx` (E-E-A-T pagina, mei 2026):**
> Transparante vermelding van een affiliate-relatie met PureAqua.nl.

Beide kunnen niet tegelijk waar zijn. Dit moet uitgeklaard worden voordat het hard naar buiten gaat, want het raakt direct aan E-E-A-T-trust signalen.

### Oorspronkelijk plan
Het oorspronkelijke plan (`docs/plan.md` en het hoofdplan in CLAUDE-context) beschrijft de site als **SEO-satelliet voor PureAqua.nl**, met als doel keyword-rankings op te bouwen waar PureAqua zelf laag scoort en bezoekers door te sluizen naar PureAqua's 4-in-1 kokend-water-kraan met osmose.

### Huidige praktijk
- Geen enkele CTABanner of pagina linkt op dit moment naar pureaqua.nl
- Alle CTA's leiden naar interne vergelijkings- en keuzehulp-pagina's
- Het PureAqua-merk wordt op meerdere plekken neutraal genoemd zonder commerciele koppeling
- Quooker-alternatieven pagina's zijn aanwezig (Quooker-cluster), maar verwijzen niet expliciet door naar koop-paginas op PureAqua

### Wat onduidelijk is
- Of er reeds display-advertising live staat (geen ad-tags in de code)
- Of er een affiliate-tracking ID is afgesproken met PureAqua
- Welk verdienmodel daadwerkelijk gewenst is op lange termijn

### Aanbeveling
Voor de overdracht naar nieuwe AI-assistent: vraag bij de eigenaar expliciet welk model leidend is, en pas dan `/over-ons`, `llms.txt`, CTABanners en de homepage-microcopy in een keer aan zodat alles overeenstemt.

---

## 7. Wat gedaan is, wat open staat, blockers

### Recent voltooid (laatste 2 weken)
- Rondes 1 tot en met 23 van contentbouw (zie commit-historie en TODO-bestand)
- Fase 1: cluster-architectuur (data/clusters.ts, ClusterHub-component)
- Fase 2: 4 cluster-hubs en 7 sub-pagina's
- Fase 3: 5 extra cluster-hubs (vergelijken, beste-waterfilter, onderhoud, zakelijk) en 12+ sub-pagina's
- Fase 4: nieuwe navigatiestructuur met dropdown-menu's, 30 nieuwe sitemap-routes
- E-E-A-T pakket: `/over-ons`, `/methodologie`, `/contact` (commits `37ce4b4`, `862c266`)
- 330 MDX-kennisbank-artikelen geslaagd door check-content.mjs

### Actueel in uitvoering
Op het moment van schrijven lopen drie achtergrond-agents:
- **Agent A:** `/keurmerken` 8 sub-pagina's (NSF 58, NSF 42/53, NSF 401, Kiwa 113, ACS, CE, WRAS, verificatie)
- **Agent B:** `/stoffen-in-drinkwater` 9 sub-pagina's (zware metalen, pesticiden, PFAS, microbiologisch, kalk, nitraat, chloor-bijproducten, hormonen, radioactief)
- **Agent C:** 12 sub-pagina's verspreid over `/keuzehulp` (4), `/filtertechnieken` (4), `/beste-waterfilter` (4)

Eerste batch is al gecommit (`3f34ea6`). Resterende pagina's worden gecommit zodra elke agent zijn werk afmaakt.

### Open uit `TODO-volgende-ronde.md` (Ronde 22)
**Drinkwaternormen contenthub uitbreiding:**
- `/drinkwaternormen` pillar page (status onduidelijk: bestaat als hub, mogelijk al ingevuld)
- 12 sub-pagina's: wie-controleert-drinkwater, drinkwaterbesluit, eu-drinkwaterrichtlijn, drinkwaterbedrijven, waterfilter-certificering, kiwa-nsf-ansi, pfas, lood, kalk-hard-water, medicijnresten, microplastics, reverse-osmosis

> Let op: in `data/clusters.ts` staan deze 12 pagina's al als cluster-entries, en `app/drinkwaternormen/` bevat al 13 subdirectories. Status moet geverifieerd worden: bestaat de pagina, of alleen het pad?

### Open technisch
- [ ] Audit canonical URLs op alle pagina's
- [ ] OG-images toevoegen per cluster-hub
- [ ] Lighthouse-audit uitvoeren (target: >90 performance, >95 SEO)
- [ ] Core Web Vitals check na deploy
- [ ] Structured data valideren via Google Rich Results Test
- [ ] GSC submitten van sitemap (status onbekend)
- [ ] IndexNow-ping draaien na elke grote deploy

### Open strategisch
- Positionering uitklaren (zie sectie 6)
- Eerste data-driven SEO-iteratie: GSC-export inlezen, top-impressie-pagina's met lage CTR optimaliseren
- Cannibalization-audit: er zijn meerdere overlappende slugs rond osmose/filter
- Tweede ronde keyword-research: huidige backlog is 12 maanden oud, opnieuw exporteren uit GSC
- E-E-A-T verder versterken: author-bylines (Schema.org Person), datumstempels op cluster-hubs

### Blockers
1. **Inconsistente positionering:** llms.txt en /over-ons zijn tegenstrijdig. Klant moet hier kiezen.
2. **13 worktree-branches lokaal:** geen blokker, wel rommelig. Op te ruimen met `git branch -D worktree-agent-*` als alle agents klaar zijn.
3. **Geen analytics actief:** zonder GA/Plausible/Vercel-analytics is data-driven optimalisatie niet mogelijk. Eerst meten installeren.
4. **GSC-toegang ontbreekt in workflow:** AI-assistent kan niet zelf rank-data zien. Klant moet GSC-exports plakken of een API-koppeling regelen.
5. **Productiedomein-status onduidelijk:** ik kan vanuit deze omgeving niet bevestigen dat waterfilterplatform.nl resolved naar de Vercel-deploy.

---

## 8. Bestanden en mappen overzicht

### Root
```
/
  AGENTS.md             Next.js 16-waarschuwing
  CLAUDE.md             Verwijst naar AGENTS.md
  CONTENT_BACKLOG.md    Keyword-prioritering uit GSC-export
  TODO-volgende-ronde.md Werk-tracker per ronde
  HANDOVER.md           Dit document
  README.md             Boilerplate Next.js (niet bijgewerkt)
  package.json          deps en scripts
  next.config.ts        leeg, geen custom config
  tsconfig.json         standaard
  eslint.config.mjs     standaard next-config
  postcss.config.mjs    Tailwind v4 plugin
```

### `app/` (Next.js App Router)
**Top-level routes:** 66 directories plus `layout.tsx`, `page.tsx`, `sitemap.ts`, `robots.ts`, `globals.css`, `favicon.ico`.

**Cluster-hubs (10):**
- `app/drinkwaternormen/`
- `app/stoffen-in-drinkwater/`
- `app/filtertechnieken/`
- `app/keuzehulp/`
- `app/beste-waterfilter/`
- `app/waterhardheid/`
- `app/keurmerken/`
- `app/vergelijken/`
- `app/onderhoud/`
- `app/zakelijk/`

**Grote pagina-clusters per onderwerp:**
- `app/waterfilter/` (94 subroutes incl. [gemeente])
- `app/leidingwater/` (31)
- `app/waterontharder/` (31)
- `app/omgekeerde-osmose/` (30)
- `app/osmose-water/` (28)
- `app/kokend-water-kraan/` (27)
- `app/drinkwaternormen/` (14)

**Programmatische routes (350 gemeenten):**
- `app/waterhardheid/[gemeente]/`
- `app/drinkwater/[gemeente]/`
- `app/kalk-in/[gemeente]/`
- `app/waterontharder/[gemeente]/`
- `app/waterfilter/[gemeente]/`
- `app/osmose-filter/[gemeente]/`
- `app/kraanwater/[gemeente]/`
- `app/leidingwater/[gemeente]/`
- `app/kokend-water-kraan/[gemeente]/`
- `app/waterontkalker/[gemeente]/`

**Autoriteits- en functionele pagina's:**
- `app/over-ons/`
- `app/methodologie/`
- `app/contact/`
- `app/kennisbank/` (overzicht + [slug])

**Vergelijkings- en alternatieven-pagina's:**
- `app/quooker-*` (quooker, quooker-alternatief, quooker-cube, quooker-modellen, etc.)
- `app/sodastream-alternatief/`, `app/insinkerator-alternatief/`, `app/grohe-red-alternatief/`
- `app/beste-osmosefilter-2026/`, `app/beste-kokend-water-kraan-2026/`, `app/beste-waterfilter-2026/`

### `components/`
| Bestand | Doel |
|---|---|
| `ClusterHub.tsx` | Renderer voor alle 10 cluster-hub pagina's, voedt uit data/clusters.ts |
| `SchemaOrg.tsx` | JSON-LD generator (FAQPage, Article, BreadcrumbList, Organization, WebSite, custom) |
| `CTABanner.tsx` | Conversie-banner met 4 contexts (osmose/kokend/waterhardheid/algemeen) |
| `QuickAnswer.tsx` | Featured-snippet-blok bovenaan artikelen |
| `ComparisonTable.tsx` | Vergelijkingstabel (gebruik niet centraal geaudit) |
| `WaterhardheidCard.tsx` | Kaart per gemeente met dH-waarde |
| `GemeenteLinks.tsx` | Linkblok naar gerelateerde gemeente-pagina's |
| `TrustBar.tsx` | Trust-signalen-strip (kennelijk decoratief; gebruik niet centraal geaudit) |

### `data/`
- `clusters.ts` (~16 KB): 10 cluster-objecten met titel, hub-URL, beschrijving, intro, pages-array, ctaContext, commercialLinks, relatedClusters
- `gemeenten.ts` (~12 KB): 350 gemeenten met naam, slug, provincie, hardheid in dH, categorie en waterbedrijf

### `content/kennisbank/`
- 330 MDX-bestanden
- Frontmatter-conventies: title, description, date, lastModified, slug
- Body wordt gevalideerd door check-content.mjs (>=700 woorden, >=2 interne links)

### `scripts/`
- `check-content.mjs`: build-gate die MDX-frontmatter en content-lengte valideert. Faalt build als regels overtreden zijn.
- `ping-indexnow.mjs`: handmatige post-deploy script om alle sitemap-URLs naar IndexNow te sturen.

### `docs/`
- `artikel-template.mdx`: template voor nieuwe kennisbank-artikelen.

### `public/`
- `647df179ed2746cfad25559632287896.txt`: IndexNow-verificatiebestand
- `llms.txt`: AI-crawler overzicht van site-content (overlapt deels met sitemap)
- `*.svg`: Geist-iconen (niet content-images, geen waterfilter-foto's)
- Geen OG-images, geen favicon-set (alleen `app/favicon.ico`)

### Niet aangetroffen
- Geen `.env` of `.env.example`
- Geen analytics-config
- Geen e2e-tests, geen unit-tests
- Geen CI-config voor GitHub Actions (Vercel doet de build via Git-integratie)
- Geen Storybook of design-system documentatie
- Geen content-style-guide (alleen wat in plan-bestanden staat)

---

## Bijlage: snelle commando's voor de volgende assistent

```bash
# Lokaal draaien
npm run dev

# Build met content-check
npm run build

# Alleen content-check
npm run check-content

# IndexNow ping na deploy
node scripts/ping-indexnow.mjs

# Smart-quote validatie van een bestand
python3 -c "p='PAD'; content=open(p).read(); bad=[c for c in content if ord(c) in [0x2018,0x2019,0x201C,0x201D]]; print('OK' if not bad else f'FAIL {len(bad)} smart quotes', p)"

# Branch-overzicht opruimen (na bevestigen dat agents stoppen)
git branch | grep worktree-agent | xargs git branch -D

# Aantal pagina's tellen
find app -name "page.tsx" | wc -l
ls content/kennisbank | wc -l
```

### Eerste 5 dingen die de nieuwe assistent zou moeten doen
1. Vraag eigenaar om GSC-toegang of een verse keyword-export
2. Vraag positionerings-keuze: display-ads OF PureAqua-affiliate, geen mix
3. Run `npm run build` en noteer het werkelijke aantal statische pagina's en eventuele build-warnings
4. Run `npm run check-content` en los eventuele MDX-fouten op
5. Voer een handmatige Lighthouse-audit uit op de cluster-hub-pagina's en homepage

---

*Document gegenereerd op 17 mei 2026. Bijwerken na elke grote SEO-iteratie. Bij twijfel over feiten: ga niet uit van aannames maar controleer in de codebase.*
