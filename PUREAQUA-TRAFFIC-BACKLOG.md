# PUREAQUA-TRAFFIC-BACKLOG

Plan + backlog om alles wat we voor WaterfilterPlatform.nl (WFP) hebben gebouwd te laten
renderen in meer relevant verkeer en conversies voor PureAqua.nl.

Status: plan + backlog (concept), opgesteld 2026-06-13. Aanvulling op `PUREAQUA-CONVERSIE-PLAN.md`
(tactische funnel) en `PUREFILTER-IMPLEMENTATIE.md` (bewijsbeleid).

---

## DEEL A - Strategie en route-keuze

### A.1 Het bezit en het doel

- **Het bezit:** WFP is een onafhankelijke, hyper-autoritaire, AI-citeerbare content-engine
  (circa 4.600 routes, 435 kennisbankartikelen, rekentools, datasets, factsheets, vraag-clusters,
  kennisgraaf-gronding, vrijwel perfecte technische SEO/AEO). Het dekt vrijwel de hele
  Nederlandse zoekruimte rond waterfilters, omgekeerde osmose, waterontharders en kokend water.
- **Het doel (KPI):** meer voor PureAqua.nl relevant verkeer en conversies. PureAqua.nl verkoopt
  4-in-1 osmosekranen, waterontharders, The Source (stroomloze RO) en PureFilter. WFP is
  affiliate/partner (zie `/over-ons`); `shop.pureaqua.nl` is de Shopify-store.
- **De spanning:** WFP's waarde voor AI-zoeksystemen en Google komt juist uit onafhankelijkheid,
  people-first en eerlijkheid. Als we WFP verbouwen tot een dunne verkooptrechter of alles naar
  een transactioneel shop-domein verhuizen, riskeren we de autoriteit die het waardevol maakt.

### A.2 Drie routes

**Route A - Onafhankelijke autoriteit + referral-funnel (huidige koers, versterken).**
WFP blijft onafhankelijk; we maximaliseren gekwalificeerd referral-verkeer en conversies naar
PureAqua via complete funnel-bedrading, merk-/koopgidsen, rekentool-aanbevelingen, lead capture
en retargeting.
- Voor: behoudt AI-citatie-autoriteit, laag risico, snel.
- Tegen: het eigen domein van PureAqua.nl groeit niet direct in organische/AI-autoriteit; waarde
  blijft referral-afhankelijk.

**Route B - Consolideren/migreren van WFP naar PureAqua.nl (domein-consolidatie).**
WFP-content verhuizen of 301-redirecten naar PureAqua.nl, zodat PureAqua's eigen domein de
rankings, AI-citaties en autoriteit absorbeert.
- Voor: PureAqua.nl wordt autoriteit en commerce in een; alle linkwaarde en verkeer accumuleert op
  het verkoopdomein.
- Tegen: grote, risicovolle SEO-migratie (4.600 URL's, 301-maps, herbouw op PureAqua's platform);
  onafhankelijke reviews/vergelijkingen op een verkoopdomein verliezen vertrouwens-/E-E-A-T-signalen
  (reviews van concurrenten op je eigen shop zijn minder citeerbaar; YMYL-gezondheidscontent op een
  shop is risicovoller); Shopify is een zwakke host voor 4.600 contentpagina's met custom schema en
  rekentools; je verliest het "onafhankelijk platform"-citatievoordeel bij AI-engines.

**Route C - Hybride (AANBEVOLEN): WFP als onafhankelijke autoriteits-/media-arm + harde,
meetbare brug naar PureAqua.nl, met selectieve migratie van puur-transactionele pagina's.**
- WFP blijft onafhankelijk (autoriteit, AI-citaties, organisch verkeer).
- De commerciele laag van WFP (merk-alternatief, beste-X-2026, koopgidsen, rekentool-uitkomsten,
  reviews, vergelijkingen) funnelt hard en meetbaar naar PureAqua.nl/shop.
- Puur-transactionele pagina's (productreviews, "kopen"-pagina's) kunnen we naar PureAqua.nl
  verhuizen of dupliceren met correcte canonicals, zodat PureAqua's domein de transactionele
  rankings pakt - terwijl de informatieve corpus op WFP blijft.
- Cross-domein entiteitsstrategie: WFP en PureAqua.nl expliciet als gerelateerde entiteiten
  koppelen (Organization sameAs, publisher/partner), met PureAqua.nl als canonieke commerciele
  bestemming.

### A.3 Aanbeveling

**Route C (hybride).** Reden: dit maximaliseert juist het *PureAqua-relevante verkeer* omdat we de
citeerbare autoriteit van WFP behouden EN de koopintentie eruit oogsten. Een volledige Route B is
mogelijk waardevernietigend (je verliest vaak meer citatie-/vertrouwensautoriteit dan je wint).
De backlog hieronder is zo opgezet dat de vroege fasen waardevol zijn ONGEACHT de uiteindelijke
route, en houdt een schone Route-B-migratie open als je daar later toch voor kiest (Thema 7).

### A.4 Eind-staat (definition of done voor de hele backlog)

1. Elke WFP-pagina met koopintentie heeft een herkenbare, eerlijke, getagde CTA naar de juiste
   PureAqua-bestemming (dekking 100%, afgedwongen door een gate).
2. Elke conversie is end-to-end meetbaar (UTM + cross-domein analytics): we weten per pagina/cluster
   hoeveel verkeer en omzet naar PureAqua gaat.
3. AI-zoeksystemen en Google associeren de WFP-autoriteit met het merk PureAqua (entiteits-/
   brandkoppeling), zonder de onafhankelijkheid te schenden.
4. Er draait minstens een audience-/retargeting- en lead-kanaal dat WFP-bezoekers terugbrengt naar
   PureAqua.
5. Alles voldoet aan de kwaliteitsstandaard (`WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`):
   people-first, geen verzonnen claims/cijfers, YMYL met disclaimer, transparante disclosure.

### A.5 Beslissingen/inputs die ik van jou nodig heb (blokkeren niet de autonome items)

1. **Route-bevestiging** (C aanbevolen) en go/no-go op selectieve migratie (Thema 7).
2. **PureAqua.nl: platform + toegang** (Shopify? WordPress? repo/CMS-toegang?) - bepaalt of ik
   ook PureAqua-kant kan bouwen of alleen kan aanleveren.
3. **Canonieke Shopify-bestemmingen** (collectie-/product-URL's voor osmosekraan/4-in-1,
   kokend-water, osmose-systemen, filterkannen, The Source, PureFilter) - dan bedraad ik osmose-
   en productspecifieke CTA's (nu alleen `store` + `/collections/waterontharders` geverifieerd).
4. **Meting:** GA4-property/toegang, Shopify product-feed-URL, Meta-pixel/adaccount, e-mailtool.
5. **Bewijsdossier** voor PureFilter/The Source-claims (zie `PUREFILTER-IMPLEMENTATIE.md`).
6. **Goedgekeurde disclosure-tekst** (juridisch/ACM).

### A.6 Legenda

- `[AUTONOOM]` - kan ik nu in deze repo bouwen, testen (gates groen) en pushen.
- `[AFHANKELIJK]` - heeft input/toegang/besluit van jou nodig (zie A.5).
- Funnel: TOFU (informatie) / MOFU (overweging) / BOFU (koop).

---

## DEEL B - Backlog

### Thema 1 - Funnel-dekking compleet maken (grootste autonome winst)

**1. Allowlist uitbreiden met geverifieerde PureAqua-bestemmingen.** `[AFHANKELIJK]` (URLs)
   - [ ] Per categorie een `DESTINATIONS`-key in `lib/pureaqua.mjs`: osmosekraan/4-in-1,
         kokend-water, osmose-systeem, filterkan, The Source (product), PureFilter (product).
   - [ ] Bijbehorende UTM-campagnes; tests in `test/pureaqua.test.mjs`.
   - [ ] Gate `check-affiliate` blijft fabricage tegenhouden (allowlist-only).

**2. Alle waterontharder-koopintentiepagina's bedraden -> `/collections/waterontharders`.**
   `[AUTONOOM]` - MOFU/BOFU
   - [ ] Merk-waterontharderpagina's (alternatief-framing): aquacell, bwt, culligan, ecowater,
         erie, grunbeck, harvey, kinetico, maxima, viteau (joep al gedaan).
   - [ ] `/waterontharder/*` commercieel: huren, kosten, zakelijk, vergelijken (kopen/prijs/hub
         al gedaan).
   - [ ] Vergelijkingen: `waterontharder-vergelijken`, `zoutloze-waterontharder-vergelijken`,
         `waterontharder-vs-magneet`, `waterfilter-vs-waterontharder`.

**3. Alle osmose/4-in-1/kokend-water koopintentiepagina's bedraden -> PureAqua-bestemming.**
   `[AFHANKELIJK]` op item 1 voor de juiste collectie (interim: `store`) - MOFU/BOFU
   - [ ] Merk-alternatief: quooker, selsiuz, grohe-blue, grohe-red, boretti, fonteq, insinkerator,
         sodastream, aquatru, brita, waterdrop, zerowater.
   - [ ] Beste-X-2026: osmosefilter, kokend-water-kraan, waterfilter(-2026), filterkan.
   - [ ] Koopgidsen: osmose-filter, kokend-water-kraan, heet-water-kraan, koolstoffilter, filterkan,
         uv-filter, pfas-waterfilter, waterfilter, drinkwaterfontein, sedimentfilter,
         keramisch-filter, waterontkalker (osmose/waterontharder al gedaan).
   - [ ] Merk-vs-merk vergelijkingen (33 stuks) met een CTA naar het passende PureAqua-product.
   - [ ] Reviews: `the-source` (gedaan, UTM), `purefilter-review` (na bewijsdossier).

**4. CTABanner upgraden zodat contexten optioneel naar PureAqua routeren.** `[AUTONOOM]`
   - [ ] `lib/cta.mjs` per context een optionele PureAqua-bestemming; component rendert dan een
         affiliate-CTA i.p.v. enkel interne link, met disclosure + rel=sponsored.

**5. Rekentool -> product-aanbeveling bridge.** `[AUTONOOM]` - MOFU/BOFU
   - [ ] Elke `/hulpmiddelen`-uitkomst koppelt contextueel: kalkrisico/zout-kosten/zout-bijvul/
         waterhardheid -> waterontharders; osmose-afvalwater/osmose-rejectie -> osmose;
         flessenwater-besparing/waterverbruik -> osmose/filter; filter-vervangdatum -> filters.
   - [ ] CTA verschijnt na de berekening, met "indicatief"-kader behouden (geen verzonnen cijfers).

### Thema 2 - Conversie-UX en herbruikbare componenten

**6. ProductRecommendation-component.** `[AUTONOOM]` (schema-Offer alleen bij geverifieerde prijs)
   - [ ] Op basis van `lib/pureaqua.mjs`; varianten: kaart, inline, vergelijkingsrij.
   - [ ] Eerlijke framing (geen superlatieven zonder bewijs), disclosure verplicht.

**7. PureAqua-conversiehub (`/aanbevolen` of `/partner/pureaqua`).** `[AUTONOOM]`
   - [ ] Een sterke, gecrawlde, transparant gelabelde hub die per behoefte naar de juiste
         PureAqua-categorie routeert; opgenomen in footer, sitemap, llms.txt.

**8. Meetbare CTA-placements.** `[AUTONOOM]`
   - [ ] `data-placement`/`data-affiliate-cta` attributen voor per-blok-attributie en latere A/B-test.

**9. Vergelijkingstabellen met PureAqua-product als optie.** `[AFHANKELIJK]` (productdata)
   - [ ] Eerlijk, evidence-gated; PureAqua-product naast generieke opties, geen nep-AggregateRating.

### Thema 3 - Meting en attributie

**10. dataLayer click-event op elke AffiliateCTA.** `[AUTONOOM]`
   - [ ] Push `affiliate_click` met destination/campaign/content naar dataLayer (GTM/GA4-ready).

**11. Cross-domein GA4 + linker.** `[AFHANKELIJK]` (GA4-ID)
   - [ ] GA4 cross-domain meting WFP <-> pureaqua.nl/shop; UTM-pass-through.

**12. `check-affiliate` uitbreiden met dekkings-rapport.** `[AUTONOOM]`
   - [ ] Lijst commerciele pagina's; meet % met werkende PureAqua-CTA; doel 100%; faalt onder drempel.

**13. UTM-conventie + dashboard-spec.** `[AUTONOOM]`
   - [ ] Documenteer schema (source/medium/campaign/content) + welke rapporten in GA4/Shopify.

**14. Shopify-conversiedoelen + server-side events (CAPI).** `[AFHANKELIJK]`

### Thema 4 - Merk/entiteit-koppeling (AI + Google: WFP-autoriteit -> PureAqua)

**15. PureAqua als Brand + Product in structured data.** `[AFHANKELIJK]` (productdata)
   - [ ] Product-schema voor The Source/PureFilter met geverifieerde Offer (prijs/voorraad);
         Brand-entity consistent.

**16. Organization sameAs / partnerrelatie in structured data.** `[AFHANKELIJK]` (relatie bevestigen)
   - [ ] WFP Organization verwijst naar PureAqua.nl als partner/uitgever waar gepast.

**17. Bewijsdossier PureFilter/The Source -> claims verifieren -> reviews upgraden.** `[AFHANKELIJK]`
   - [ ] Verzamel testrapporten/certificaatnummers; zet `evidence_status=verified`; werk de
         claim-tabellen bij (zie `PUREFILTER-IMPLEMENTATIE.md`).

**18. Producten koppelen aan reeds-gegronde concept-entiteiten.** `[AUTONOOM]`
   - [ ] Link PureAqua-osmose/waterontharder aan de WFP-entiteiten (osmose, waterhardheid) die al
         via sameAs in de kennisgraaf staan.

### Thema 5 - Nieuwe conversiegerichte content (MOFU/BOFU)

**19. Gap-analyse tegen PureAqua's echte assortiment -> ontbrekende funnelpagina's.** `[AFHANKELIJK]`
   (assortiment) + `[AUTONOOM]` (bouw)
   - [ ] Per PureAqua-categorie checken of er een sterke MOFU/BOFU-WFP-pagina naartoe linkt; gaten
         vullen (conform kannibalisatie-audit).

**20. Category roundups met PureAqua eerlijk gefeatured.** `[AFHANKELIJK]` (productdata)
   - [ ] Bijv. "Beste 4-in-1 osmosekraan 2026" met PureAqua-product naast alternatieven.

**21. Koopgids per PureAqua-categorie.** `[AUTONOOM]` (skeleton) + `[AFHANKELIJK]` (prijzen)
   - [ ] Osmosekraan, waterontharder, kokend-water, filterkan; elk MOFU->BOFU funnel.

**22. Lokale koopintentie benutten (350 gemeente-pagina's).** `[AUTONOOM]`
   - [ ] Op `/waterhardheid/[gemeente]` een waterontharder-CTA bij harde-water-gemeenten (hoge
         lokale koopintentie), met de gemeente-hardheid als eerlijke trigger.

### Thema 6 - Lead capture en audience

**23. Lead magnets.** front-end `[AUTONOOM]`, backend `[AFHANKELIJK]` (e-mailtool)
   - [ ] Waterhardheid-/kalkrapport per gemeente, filtervervang-herinnering, koopgids-PDF;
         AVG-conforme dubbele opt-in.

**24. Meta-pixel + Shopify-catalogfeed -> dynamische retargeting.** `[AFHANKELIJK]`
   - [ ] Pixel op WFP; feed in Meta-catalog; prospecting + retargeting van MOFU/BOFU-bezoekers.

**25. E-mail nurture-flow richting PureAqua-aanbod.** `[AFHANKELIJK]`

### Thema 7 - Cross-domein / migratie-optie (alleen bij Route B)

**26. Migratie-playbook + 301-redirectmap-generator.** tooling `[AUTONOOM]`, uitvoering `[AFHANKELIJK]`
   - [ ] Script dat voor geselecteerde WFP-pagina's een redirectmap + content-export genereert.

**27. Canonical-eigenaarschap per paginatype bij gedeelde/gemigreerde content.** `[AFHANKELIJK]`
   - [ ] Voorkom duplicate content: per type beslissen welk domein canoniek is.

**28. Content-export (MDX/TSX -> portable).** `[AUTONOOM]` (tooling)
   - [ ] Exporteerbaar maken van pagina's die naar PureAqua.nl verhuizen.

**29. Beslis-matrix: blijven (autoriteit) vs. verhuizen (transactioneel).** `[AUTONOOM]` (voorstel)
   - [ ] Per paginatype een aanbeveling; jij beslist.

### Thema 8 - Governance en compliance (de waarde borgen)

**30. Affiliate/partner-disclosure consistent + ACM/Reclamecode-proof.** `[AUTONOOM]`
   - [ ] `AffiliateDisclosure` overal waar een PureAqua-link staat; `check-affiliate`-gate (gedaan)
         dekt rel=sponsored + UTM + allowlist + disclosure.

**31. YMYL-borging boven commercie.** `[AUTONOOM]`
   - [ ] Op gezondheidsgevoelige pagina's blijft de disclaimer boven de CTA; geen misleidende claims.

**32. Onafhankelijkheidsbeleid expliciet maken.** `[AUTONOOM]`
   - [ ] Korte beleidsnotitie + zichtbaar op `/methodologie`/`/over-ons`: commissie stuurt geen
         beoordeling; behoudt E-E-A-T/AI-citatie.

**33. Kwaliteitspoorten uitbreiden tegen funnel-regressies.** `[AUTONOOM]`
   - [ ] Dekkings-gate (item 12) + bestaande gates in `verify`/`audit-html`.

---

## DEEL C - Volgorde / fasering

- **Fase 1 (nu, autonoom):** Thema 1 (items 2 + 5), Thema 2 (6, 7, 8), Thema 3 (10, 12, 13),
  Thema 8 (30-33). Dit brengt de dekking naar ~100% met de geverifieerde bestemmingen en maakt
  klikken meetbaar - zonder input van jou.
- **Fase 2 (na jouw input A.5):** Thema 1 (1 + 3 volledig), Thema 4, Thema 5, Thema 3 (11, 14).
- **Fase 3 (kanalen):** Thema 6.
- **Optioneel (Route B):** Thema 7.

Elke fase sluit af met de poorten groen: `npm run verify`, `npm run build && npm run audit-html`
(incl. `check-affiliate`), `npm test`.

## DEEL D - Wat dit oplevert voor PureAqua.nl

- Van een autoriteitssite die nauwelijks doorlinkte naar een meetbare, eerlijke conversiemachine:
  elke koopintentie-bezoeker krijgt een duidelijke route naar PureAqua, met behoud van de
  AI-citatie-autoriteit die juist verkeer aantrekt.
- Per pagina/cluster meetbaar welk WFP-verkeer omzet bij PureAqua oplevert -> gericht optimaliseren.
- Een audience- en retargeting-laag die WFP-bezoekers terugbrengt naar PureAqua.
- Een schone optie om, indien gewenst, geselecteerde transactionele pagina's naar PureAqua.nl te
  verhuizen zonder de informatieve autoriteit te verliezen.
