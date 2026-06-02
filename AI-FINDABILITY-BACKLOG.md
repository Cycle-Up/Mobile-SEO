# AI-FINDABILITY BACKLOG (AEO / GEO) - 50 items

Doel: de vindbaarheid en citeerbaarheid van Waterfilterplatform.nl door AI-zoeksystemen
(ChatGPT/Search, Claude, Perplexity, Gemini, Google AI Overviews) structureel verhogen.

**Werkregels (gelden voor elk item):** volledig autonoom uitvoerbaar (geen accounts, geen
externe diensten, geen betaalde tools); conform `WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`
(JSON-LD = ware representatie van zichtbare content, geen verzonnen data/reviews/claims, geen
schema puur voor Google-rich-results, people-first, YMYL-zorgvuldigheid); alleen ASCII; en per
afgeronde (sub)taak moeten `npm test`, `npm run verify` en `npm run build && npm run audit-html`
groen blijven. Per item een test/gate waar zinvol. Volgorde = grofweg hoogste hefboom eerst.

Legenda: elk item heeft autonome sub-items (`- [ ]`) en een meetbaar **Klaar wanneer**.

---

## Thema A - Entiteit- en kennisgraaf-helderheid (laat AI het platform begrijpen)

### 1. [DONE] Organization-entiteit compleet maken (sameAs, logo, contactPoint, areaServed)
- [ ] `sameAs` toevoegen aan de Organization-JSON-LD (alleen echte, bestaande profielen/URL's; geen verzonnen accounts).
- [ ] `logo` als ImageObject, `areaServed` = NL, `knowsAbout` met kernonderwerpen (waterfiltratie, drinkwaterkwaliteit, omgekeerde osmose).
- [ ] `publisher`/`founder` consistent met /over-ons; `contactPoint` naar /contact.
Klaar wanneer: Organization-JSON-LD bevat sameAs/areaServed/knowsAbout, valideert (audit-html 0), build groen.

### 2. [DONE] Entiteit-koppeling per kennisbankartikel (about/mentions)
- [ ] In de kennisbank-renderer `about` (hoofdentiteit) en `mentions` afleiden uit slug/onderwerp via een pure helper `entitiesForSlug` (lib).
- [ ] Koppelen aan de canonieke begrip-URL's (/begrippenlijst#term of entiteit-pagina).
- [ ] Unit-test voor `entitiesForSlug` (gezondheid/pfas/osmose -> juiste entiteiten).
Klaar wanneer: een artikel toont `about`/`mentions` in de Article-JSON-LD; test groen; audit 0.

### 3. [DONE] Entiteit-pagina's voor topbegrippen met sameAs naar gezaghebbende bronnen
- [ ] Voor 8-10 kernbegrippen (PFAS, omgekeerde osmose, waterhardheid, ionenwisseling, actief kool, nitraat, lood, microplastics) DefinedTerm-secties met `sameAs` naar RIVM/EU/Wikipedia-Wikidata (alleen bestaande, juiste URL's).
- [ ] Elk begrip 1 definitie-zin + canonieke interne link naar het diepteartikel.
Klaar wanneer: begrippen hebben DefinedTerm met sameAs; check-links 0; audit 0.

### 4. [DONE] WebSite SearchAction (potentialAction) toevoegen
- [ ] Zoek-endpoint/route vaststellen of een eenvoudige client-side zoekroute (`/zoeken?q=`) toevoegen.
- [ ] `potentialAction` SearchAction in de WebSite-JSON-LD met de query-template.
Klaar wanneer: WebSite-JSON-LD bevat SearchAction die naar een bestaande route wijst; audit 0; build groen.

### 5. [DONE] Consistente entiteit-naamgeving (NAP/brand) over de hele site
- [ ] Gate `check-entity.mjs`: controleert dat naam/beschrijving/URL van de Organization overal identiek zijn (layout, schema, llms.txt, footer).
- [ ] Afwijkingen normaliseren naar 1 canonieke vorm.
Klaar wanneer: gate exit 0; toegevoegd aan `npm run verify`; test groen.

---

## Thema B - Answer-ready content (directe, citeerbare antwoorden)

### 6. [DONE] Zichtbaar "Kort antwoord"-blok bovenaan elk kennisbankartikel
- [ ] QuickAnswer-component zo renderen dat het altijd direct onder de H1 staat (al deels) en als eerste tekstblok crawlbaar is.
- [ ] Borgen dat elk artikel een `quickAnswer` van 40-60 woorden heeft (gate uitbreiden in check-content).
Klaar wanneer: 100% van de artikelen heeft een quickAnswer binnen lengtegrens; check-content groen.

### 7. [DONE] "Belangrijkste punten" (key takeaways) bullets per artikel
- [ ] Frontmatter-veld `takeaways: string[]` ondersteunen + renderen als bullet-lijst direct na het kort antwoord.
- [ ] Backfill-script dat ontbrekende takeaways markeert (niet verzint) voor redactionele aanvulling; minimaal toevoegen waar feitelijk afleidbaar uit de eigen tekst.
Klaar wanneer: renderer toont takeaways wanneer aanwezig; gate telt dekking; build groen.

### 8. [DONE] Definition-first openingszin per definitie-artikel
- [ ] Heuristiek/gate die controleert dat "wat is"-artikelen in de eerste 1-2 zinnen een directe definitie geven.
- [ ] Lijst van artikelen die niet voldoen, en herschrijven van de opening (eigen content, geen nieuwe claims).
Klaar wanneer: definitie-artikelen openen met een directe definitie; gate rapporteert 0 afwijkingen.

### 9. [DONE] Vraag-geformuleerde koppen waar de intent een vraag is
- [ ] Analyse-script dat H2/H3 detecteert die als vraag herschreven kunnen worden (bv. "Kosten" -> "Wat kost ...?").
- [ ] Herschrijven waar het de leesbaarheid niet schaadt (people-first, niet geforceerd).
Klaar wanneer: rapport toont verbeterde vraag-dekking; build + typografie groen.

### 10. [DONE] Gestandaardiseerd antwoordformat voor extractie (40-60 woorden)
- [ ] Stijlrichtlijn vastleggen in het handover/redactiedoc en als check toevoegen op quickAnswer-lengte + 1 kernzin.
- [ ] Bestaande quickAnswers buiten de bandbreedte normaliseren.
Klaar wanneer: alle quickAnswers binnen 40-60 woorden; check-content groen.

---

## Thema C - Structured data verbreden (ware representatie voor AI)

### 11. [DONE] HowTo-schema op onderhoud-/stappenartikelen
- [ ] Renderer/optie om HowTo-JSON-LD te genereren uit genummerde stappen die al zichtbaar zijn (ware representatie, niet voor Google-rich-results geforceerd).
- [ ] Toepassen op onderhoud-cluster (filter vervangen, ontkalken, zout bijvullen).
- [ ] Test dat stappen in HowTo overeenkomen met zichtbare stappen.
Klaar wanneer: onderhoudspagina's tonen kloppende HowTo-JSON-LD; audit 0; test groen.

### 12. [DEFER] QAPage-schema waar content feitelijk Q&A is
- [ ] Identificeer pagina's met een dominante enkele vraag (keuzehulp-stappen, "is X veilig?").
- [ ] QAPage-JSON-LD genereren uit de zichtbare vraag + geaccepteerd antwoord.
Klaar wanneer: geselecteerde pagina's hebben valide QAPage; audit 0.

### 13. [DONE] DefinedTermSet uitbreiden (centrale glossary + per-cluster mini-glossary)
- [ ] Begrippenlijst uitbreiden naar alle kernbegrippen met stabiele anchors (#term).
- [ ] Per cluster-hub een mini-DefinedTermSet met 3-5 termen die naar de glossary linken.
Klaar wanneer: glossary dekt kernbegrippen; cluster-hubs tonen DefinedTermSet; check-links 0.

### 14. [DONE] Article author/reviewedBy/citation consequent over alle artikeltypes
- [ ] `reviewedBy` (reviewer-entiteit) toevoegen aan YMYL-artikelen naast bestaande `citation` (sourcesForSlug).
- [ ] TSX-cluster Article-schema dezelfde author/citation-structuur geven als MDX.
Klaar wanneer: YMYL-artikelen tonen author+reviewedBy+citation; audit 0; check-ymyl groen.

### 15. [DONE] Speakable-schema verbreden naar kennisbank quick answers
- [ ] Speakable-CSS-selector toevoegen voor het quickAnswer-blok in de kennisbank-renderer.
- [ ] Borgen dat speakable alleen verwijst naar daadwerkelijk aanwezige, voorleesbare tekst.
Klaar wanneer: kennisbankartikelen bevatten speakable die naar de quick answer wijst; audit 0.

### 16. [DONE] ImageObject + betekenisvolle alt-teksten en figure-captions
- [ ] Audit-script dat afbeeldingen zonder zinvolle alt opspoort.
- [ ] Alt-teksten en (waar passend) `<figure><figcaption>` toevoegen; ImageObject-schema bij hero-afbeeldingen.
Klaar wanneer: 0 lege/triviale alts in rapport; audit 0; build groen.

### 17. [DONE] Dataset/Table-schema voor waterhardheid-per-gemeente
- [ ] De gemeente-hardheidsdata als Dataset-JSON-LD beschrijven (bron, eenheid dH, dekking NL).
- [ ] Zichtbare datatabel met semantische `<table>` + scope-headers (machine-leesbaar).
Klaar wanneer: waterhardheid-overzicht heeft Dataset-schema + semantische tabel; audit 0.

### 18. [DONE] BreadcrumbList op alle resterende pagina's zonder
- [ ] Audit-script dat pagina's zonder BreadcrumbList-JSON-LD opspoort.
- [ ] Breadcrumbs toevoegen aan de ontbrekende routes.
Klaar wanneer: rapport toont 0 pagina's zonder breadcrumbs (m.u.v. home); audit 0.

### 19. [DONE] Consequente datum-/taal-/isPartOf-velden in alle Article-schema
- [ ] Borgen dat elk Article `inLanguage: nl-NL`, `isPartOf` (WebSite), `datePublished` en `dateModified` heeft.
- [ ] dateModified uit git-historie afleiden (bestaande sitemap-dates-helper hergebruiken).
Klaar wanneer: gate bevestigt volledige veldsdekking; audit 0.

### 20. [DONE] Schema-validatie-gate (`check-schema.mjs`)
- [ ] Post-build alle JSON-LD parsen en per @type minimale verplichte velden valideren.
- [ ] Aan `npm run verify`/audit toevoegen; unit-test met goede/foute fixtures.
Klaar wanneer: gate exit 0 in schone staat, exit 1 bij ontbrekend veld; test groen.

---

## Thema D - llms.txt / AI-bestanden en markdown-mirrors

### 21. [DONE] llms.txt verrijken met kennisbank-categorie-index
- [ ] Per categorie (Drinkwater/Waterfilter/Osmose/...) een beknopte lijst met canonieke URL's toevoegen, gegenereerd uit de kennisbank.
- [ ] Generator + sync-gate uitbreiden zodat llms.txt niet veroudert.
Klaar wanneer: llms.txt bevat categorie-index; check-llms groen; deterministisch herproduceerbaar.

### 22. [DONE] Sectie-anchors + per-cluster snippets in llms-full.txt
- [ ] Per cluster een korte kernfeit-sectie met canonieke URL en 1-2 citeerbare feiten (uit eigen content).
- [ ] In de generator opnemen onder de bestaande autogen-index.
Klaar wanneer: llms-full bevat per-cluster snippets; check-llms-full groen.

### 23. [DONE] ai.txt uitbreiden met expliciet gebruik/citatiebeleid
- [ ] Toestemming per bot, voorkeurs-canonical, en citatie-aanwijzingen (naam + clickable canonical) verduidelijken.
- [ ] Verwijzing naar llms.txt/llms-full.txt/sitemap consistent maken.
Klaar wanneer: ai.txt is consistent met robots.ts en llms-bestanden; typografie groen.

### 24. [DONE] quickAnswer per artikel opnemen in llms-full.txt
- [ ] Generator uitbreiden zodat elk kennisbank-item zijn quickAnswer als citatie-klare regel meekrijgt.
- [ ] Sync-gate uitbreiden om de quickAnswer-aanwezigheid te borgen.
Klaar wanneer: llms-full toont per artikel een quickAnswer; check-llms-full groen.

### 25. [DONE] Markdown-mirror / schone tekst-export van kennisbankartikelen
- [ ] Route of build-artefact `/kennisbank/[slug].md` (of een gebundelde `.md`/JSON) met titel, quickAnswer, body zonder JSX.
- [ ] Linken vanuit llms.txt zodat AI-crawlers schone tekst kunnen ophalen.
Klaar wanneer: markdown-mirror bouwt voor alle artikelen; steekproef klopt; build groen.

---

## Thema E - Topical authority en interne linkstructuur

### 26. [DONE] Hub-spoke dekkingsanalyse + ontbrekende links dichten
- [ ] Script dat per cluster-hub controleert of alle spokes terug- en heen gelinkt zijn.
- [ ] Ontbrekende hub->spoke en spoke->hub links toevoegen.
Klaar wanneer: rapport toont 0 ontbrekende hub-spoke-links; check-orphans 0.

### 27. [DONE] "Gerelateerde vragen" (PAA-stijl) blok per artikel
- [ ] Pure helper die 3-4 gerelateerde artikel-vragen kiest op basis van cluster/onderwerp.
- [ ] Renderen als interne-link-lijst onderaan; geen dode links.
Klaar wanneer: artikelen tonen gerelateerde vragen; check-links 0; build groen.

### 28. [DONE] Cross-cluster semantische links verdichten (osmose <-> pfas <-> gezondheid)
- [ ] Linkkansen-analyse tussen verwante clusters; relevante contextuele links toevoegen.
- [ ] Borgen dat links naar canonieke URL's wijzen.
Klaar wanneer: meetbaar meer cross-cluster links; check-links 0; geen kannibalisatie.

### 29. [DONE] "Vorige/volgende in cluster"-navigatie
- [ ] Cluster-volgorde afleiden en prev/next-links renderen op artikel- en clusterpagina's.
- [ ] Pure helper voor de prev/next-berekening + unit-test (eerste/laatste/midden).
Klaar wanneer: prev/next aanwezig binnen clusters; check-links 0; audit 0; test groen.

### 30. [DONE] Klikdiepte- en orphan-audit (alles <=3 kliks van home)
- [ ] Script dat kortste klikafstand vanaf home berekent per route.
- [ ] Routes > 3 kliks dichterbij linken; aan verify toevoegen.
Klaar wanneer: 0 routes > 3 kliks (programmatische laag uitgezonderd/gedocumenteerd); gate groen.

---

## Thema F - Versheid en E-E-A-T (vertrouwenssignalen voor AI)

### 31. [DONE] Zichtbare "Laatst bijgewerkt" + dateModified uit git overal
- [ ] Bestaande git-date-helper toepassen op alle kennisbank- en clusterpagina's, zichtbaar + in schema.
- [ ] Gate die ontbrekende/verouderde dateModified opspoort en aan `npm run verify` toevoegt.
Klaar wanneer: elke artikel/cluster toont een echte laatst-bijgewerkt-datum; audit 0; gate groen.

### 32. [DEFER] Auteur-/reviewer-entiteitspagina's met credentials
- [ ] /over-ons uitbreiden met reviewer-profielen (Person-entiteit, sameAs alleen indien echt).
- [ ] AuthorBox koppelen aan die profielpagina's.
Klaar wanneer: author/reviewer linken naar een Person-pagina met schema; check-links 0.

### 33. [DONE] SourcesSection verbreden naar TSX-clusterpagina's
- [ ] sourcesForSlug-mapping toepassen op cluster-/merkpagina's die nu geen zichtbare bronnen tonen.
- [ ] Script dat clusterpagina's zonder zichtbare bronnen opspoort en de lijst afwerken.
Klaar wanneer: relevante clusterpagina's tonen bronnen + citation; audit 0; check-ymyl groen.

### 34. [DONE] Methodologie/transparantie cross-link vanaf elk YMYL-artikel
- [ ] Vaste link naar /methodologie + disclaimer-context op YMYL-artikelen borgen.
- [ ] check-ymyl uitbreiden zodat het de methodologie-link per YMYL-pagina afdwingt.
Klaar wanneer: 100% YMYL-artikelen linken naar methodologie; gate bevestigt; build groen.

### 35. [DONE] "Citeer deze pagina"-blok met kant-en-klare citatie
- [ ] Component dat bron + canonical + datum toont in een copy-pasteklaar citatieformat.
- [ ] Toevoegen aan kennisbankartikelen (verlaagt drempel voor AI/redacteuren om correct te citeren).
Klaar wanneer: artikelen tonen een correct citatieblok met canonical; audit 0.

---

## Thema G - Machine-leesbaarheid en feeds

### 36. [DONE] JSON-feed van alle artikelen (`/kennisbank/index.json`)
- [ ] Route die title/description/url/date/quickAnswer/categorie als JSON levert (force-static).
- [ ] Linken vanuit llms.txt en kennisbank-head.
Klaar wanneer: index.json bouwt en bevat alle artikelen; valide JSON; build groen.

### 37. [DONE] Sitemap-lastmod uit git voor alle routetypes
- [ ] Bestaande gemeente/kennisbank-datumlogica uitbreiden naar statische routes waar zinvol.
- [ ] check-sitemap uitbreiden met een lastmod-aanwezigheidscontrole.
Klaar wanneer: sitemap toont realistische lastmod; check-sitemap 0; build groen.

### 38. [DONE] RSS uitbreiden (samenvatting + per-cluster feeds)
- [ ] quickAnswer als `<description>` in de bestaande feed.
- [ ] Per-cluster feed-routes genereren uit de clusterlijst en valideren als XML.
Klaar wanneer: feed bevat samenvattingen; valide XML; check-links 0.

### 39. [DONE] Per-artikel dynamische OpenGraph/Twitter-metadata
- [ ] generateMetadata in de kennisbank-renderer per artikel (titel/desc) i.p.v. uitsluitend site-breed.
- [ ] og/twitter-description binnen lengtegrens borgen (clampDescription hergebruiken).
Klaar wanneer: og:title/description per artikel uniek; audit 0.

### 40. [DONE] Doorzoekbare FAQ-export (alle FAQs als 1 JSON)
- [ ] Alle FAQItems verzamelen in een statische `/faq.json` met vraag/antwoord/bron-URL.
- [ ] Generator + sync-gate zodat faq.json niet veroudert; unit-test op de structuur.
Klaar wanneer: faq.json bouwt en dekt de FAQ's; valide JSON; build groen; gate groen.

---

## Thema H - Content-gaps gericht op AI-queries (geen thin content)

### 41. [DONE] Ontbrekende "Wat is X" definitie-artikelen
- [ ] Gap-analyse tegen begrippenlijst; 5-8 ontbrekende kernbegrippen als volwaardige artikelen (MDX-standaard, kannibalisatie-gecheckt).
- [ ] Per nieuw begrip interne links naar het dieptecluster + opname in begrippenlijst en llms.
Klaar wanneer: nieuwe definitie-artikelen check-content 100%; check-links 0; build groen.

### 42. [DONE] "X vs Y"-dekking uitbreiden met machine-leesbare tabellen
- [ ] Witruimte-analyse voor vergelijkingen; 3-5 nieuwe vergelijkingen (kannibalisatie-gecheckt).
- [ ] Elke vergelijking met semantische `<table>` + scope-headers, QuickAnswer en Article-schema.
Klaar wanneer: nieuwe vergelijkingen in sitemap+llms; 0 orphans; audit 0.

### 43. [DONE] Feitelijke/numerieke FAQ's consistent met bron
- [ ] Normen/waarden (PFAS 0,1 ug/L, loodnorm, dH-ranges) in FAQ's controleren op consistentie met eigen bronpagina's.
- [ ] Gate die kerncijfers in FAQ vergelijkt met een centrale feiten-bron (lib/facts).
Klaar wanneer: gate vindt 0 tegenstrijdige cijfers tussen FAQ en bronpagina; build groen.

### 44. [DEFER] Lokale intent zonder thin content
- [ ] Voor de grootste gemeenten een onderscheidende FAQ-sectie met echte lokale dH-waarde (geen duplicaten).
- [ ] Duplicate-content-check zodat de gemeente-FAQ's onderling voldoende verschillen.
Klaar wanneer: geselecteerde gemeente-pagina's hebben unieke FAQ; audit 0; geen duplicate-content-stijging.

### 45. [DONE] Actuele onderwerpen up-to-date houden (PFAS-norm 2026)
- [ ] Script dat verwijzingen naar normen/jaartallen detecteert en markeert voor review bij wijziging.
- [ ] Centrale feiten-constanten (lib/facts) zodat een normwijziging op 1 plek doorwerkt.
Klaar wanneer: rapport van te reviewen plekken; kerncijfers actueel; typografie groen.

---

## Thema I - Techniek voor AI-crawlers

### 46. [DONE] robots/AI-bot-toegang verifieren en borgen
- [ ] Gate die bevestigt dat relevante AI-bots (OAI-SearchBot, PerplexityBot/Perplexity-User, GPTBot indien gewenst, Google-Extended-beleid expliciet) correct geregeld zijn en sitemap/llms vermeld staan.
- [ ] ai.txt en robots.ts kruislings valideren op consistentie; aan verify toevoegen.
Klaar wanneer: gate exit 0; robots.ts consistent met ai.txt; test groen.

### 47. [DONE] Schone, JS-onafhankelijke HTML borgen (content zonder JS zichtbaar)
- [ ] Audit dat kerncontent (antwoord, body) in de statische HTML staat, niet client-only.
- [ ] Steekproefscript over .next/server/app dat antwoord- en body-aanwezigheid telt.
Klaar wanneer: steekproef bevestigt content in SSG-HTML; audit 0.

### 48. [DONE] Canonical-consistentie-audit
- [ ] Gate die controleert dat elke pagina precies 1 self-referential canonical heeft en er geen parameter-/dubbele varianten ontstaan.
- [ ] Unit-test met goede/foute fixtures; aan `npm run verify` toevoegen.
Klaar wanneer: gate exit 0; aan verify toegevoegd; test groen.

### 49. [DONE] 404-/linkhygiene (intern en uitgaand)
- [ ] check-links uitbreiden met optionele controle op uitgaande bron-links (formaat/awareness, geen netwerkcall in CI).
- [ ] Dode interne links blijven 0.
Klaar wanneer: check-links 0; uitgaande-link-rapport zonder duidelijke fouten.

### 50. [DONE] AEO-health monitoringgate (`check-aeo.mjs`) + SITE-HEALTH-uitbreiding
- [ ] Script dat AEO-dekking meet: % artikelen met quickAnswer, takeaways, Article+citation, breadcrumbs, speakable; Organization sameAs aanwezig; llms/llms-full in sync.
- [ ] Metrics opnemen in SITE-HEALTH.md; aan verify toevoegen.
Klaar wanneer: check-aeo draait, rapporteert dekking, exit 1 bij regressie onder baseline; test groen.

---

## Definition of Done (per item)
(Sub-items afgevinkt) AND `npm test` groen AND `npm run verify` exit 0 AND
`npm run build && npm run audit-html` 0 violations AND (waar van toepassing) een nieuwe/bestaande
gate borgt het resultaat tegen regressie. Per afgerond item: 1 regel in WORKLOG.md + commit + push.
