# PUREAQUA-CONVERSIE-PLAN

Hoe we de AI-vindbaarheidsmachine van Waterfilterplatform.nl koppelen aan de PureAqua
Shopify-store (`shop.pureaqua.nl`) en omzetten in verkeer en conversies.

Status: plan (concept), opgesteld 2026-06-12. Nog niet uitgevoerd.

## Gekozen uitgangspunten (door gebruiker bevestigd)

- **Integratiediepte:** slimme deep-links + UTM. Geen Shopify Storefront API; we bedraden
  pagina's met getagde links naar de juiste collectie/product op `shop.pureaqua.nl`.
- **Relatie:** affiliate/partner. Dus `rel="sponsored"`, een zichtbare affiliate-disclosure
  conform ACM/Reclamecode, en linkkeuze die commissie-relevant is.
- **Kanalen:** on-site funnel + Meta dynamische productadvertenties + e-mail/lead capture.

## 1. Kernprobleem: het funnel-lek

We hebben een enorme top-of-funnel gebouwd (700+ routes, 435 artikelen, datasets, factsheets,
rekentools, vraag-clusters) die uitstekend vindbaar is voor mensen en AI-zoeksystemen. Maar van
al die pagina's linken er op dit moment maar ~3 daadwerkelijk door naar `shop.pureaqua.nl`. De
funnel eindigt op interne info-pagina's (`/omgekeerde-osmose/kopen`, `/waterfilter/vergelijken`,
de CTABanner) die NIET doorverwijzen naar de winkel. Gevolg: aandacht en koopintentie lekken weg
voordat ze de kassa bereiken.

Het bestaande `/the-source`-patroon laat al zien hoe het hoort: een echte `Offer` (prijs +
beschikbaarheid) en een `rel="sponsored nofollow"`-knop "Bekijk The Source bij PureAqua". Dat
patroon moeten we systematisch, gecontroleerd en meetbaar uitrollen over de hele site.

## 2. Strategie in een zin

Verbind elke pagina met koopintentie via een herkenbaar, eerlijk en getagd PureAqua-CTA-blok
met de meest passende shop-bestemming, meet alles end-to-end met UTM, en versterk dat met
retargeting (Meta) en e-mail-nurturing - zonder ooit de kwaliteits- en eerlijkheidsstandaard
(`WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`) te schenden.

Funnel-model:

```
AI/zoek-verkeer  ->  informatieve content (TOFU)         ->  geen directe push, wel interne links
                     keuze/vergelijk/koopgids (MOFU)      ->  PureAqua-CTA naar collectie + lead magnet
                     review/product/rekentool-uitkomst    ->  PureAqua-CTA naar specifiek product (BOFU)
                                                          ->  Shopify checkout (shop.pureaqua.nl)
            (verlaten verkeer)                            ->  Meta dynamic ads + e-mail nurturing
```

## 3. Architectuur (deep-links + UTM, centraal beheerd)

Alles loopt via een centrale, geteste configuratie zodat er nooit een verzonnen of dode shop-URL
in de site belandt en alle links consistent getagd en gelabeld zijn.

### 3.1 `lib/pureaqua.mjs` (single source of truth)
- `STORE = 'https://shop.pureaqua.nl'`.
- `DESTINATIONS`: een allowlist van **geverifieerde** bestemmingen (collectie- en product-handles),
  elk met `{ key, label, url, type: 'collection'|'product', evidenceStatus }`. We starten met de
  reeds bekende, geverifieerde URL's (`/`, `/collections/waterontharders`, The Source) en breiden
  alleen uit met handles die jij aanlevert/bevestigt.
- `buildShopUrl(key, { content, placement })`: voegt UTM-parameters toe (zie 3.4) en retourneert
  de volledige link. Gooit een fout bij een onbekende key -> voorkomt fabricage.
- Pure functie + data, getest in `test/pureaqua.test.mjs`.

### 3.2 `components/AffiliateCTA.tsx` (herbruikbaar conversieblok)
- Props: `destination` (key uit DESTINATIONS), `context`, `variant` (banner | inline | productcard),
  optioneel `price`/`availability` voor een correcte `Offer` in JSON-LD (alleen bij geverifieerde
  prijs).
- Rendert een opvallende knop met `rel="sponsored"` (geen `nofollow` weglaten: bij affiliate is
  `sponsored` de juiste, voldoende annotatie) + de affiliate-disclosure (3.3).
- Vervangt/begeleidt de bestaande `CTABanner` op koopintentie-pagina's; de informatieve CTABanner
  blijft op TOFU-content.

### 3.3 `components/AffiliateDisclosure.tsx`
- Korte, zichtbare mededeling boven/bij de eerste commerciele link: "Dit is een
  partner/affiliate-link; we kunnen een commissie ontvangen. Dit beinvloedt onze onafhankelijke
  beoordeling niet." Conform ACM-leidraad en Nederlandse Reclamecode (SRC).
- Wordt verplicht meegerenderd door `AffiliateCTA`, plus eenmalig op review-/koopgids-pagina's.

### 3.4 UTM- en meetschema
Vast, machinaal afgedwongen schema op elke uitgaande link:
- `utm_source=waterfilterplatform`
- `utm_medium=affiliate`
- `utm_campaign=<contentcluster>` (bijv. `omgekeerde-osmose`, `waterontharder`, `kokend-water`)
- `utm_content=<paginaslug>-<placement>` (bijv. `beste-osmosefilter-2026-herobanner`)
Zo zie je in GA4/Shopify-analytics exact welke pagina en welk CTA-blok verkeer en omzet leveren.

### 3.5 Guardrail-gate: `scripts/check-affiliate.mjs`
Nieuw verify-onderdeel dat de standaard bewaakt:
- elke link naar `shop.pureaqua.nl` in de gebouwde HTML heeft `rel="sponsored"`;
- elke shop-link draagt de verplichte UTM-parameters;
- elke shop-URL staat in de `DESTINATIONS`-allowlist (geen verzonnen/dode handles);
- op elke pagina met een shop-link staat minstens een affiliate-disclosure.
Toevoegen aan `npm run verify` (of `audit-html`) zodat regressies de build breken.

## 4. Intent-mapping: welke content -> welke bestemming

We koppelen bestaande pagina-typen aan de juiste shop-bestemming en CTA-intensiteit:

| Contenttype (voorbeelden) | Funnel | Bestemming | CTA-intensiteit |
|---|---|---|---|
| Kennisbankartikel "wat is..." (PFAS, kalk uitleg) | TOFU | interne hub + zachte lead magnet | laag (geen harde push) |
| Koopgidsen (`/beste-osmosefilter-2026`, `/beste-waterontharder-2026`, `/beste-filterkan-2026`) | MOFU | relevante shop-collectie | hoog (hero + inline) |
| Vergelijkingen (`/omgekeerde-osmose/vergelijken`, merk-vs-merk) | MOFU | shop-collectie + best passend product | hoog |
| Merk-/alternatief-pagina's (`/grohe-blue-alternatief`, etc.) | BOFU | specifiek PureAqua-product als alternatief | hoog |
| Review/product (`/the-source`, `/purefilter-review`) | BOFU | specifiek product (met Offer) | maximaal |
| Rekentool-uitkomst (`/hulpmiddelen/*`) | MOFU/BOFU | bestemming passend bij uitkomst (bv. hoge kalk -> waterontharders) | contextueel, na resultaat |
| `/omgekeerde-osmose/kopen` (koopgids) | BOFU | shop-collectie osmose | hoog (nu nog 0 outbound) |

CTA-intensiteit respecteert YMYL: op gezondheidsgevoelige pagina's blijft de toon informatief en
staat de disclaimer boven de commercie.

## 5. Kanaal-uitbreiding

### 5.1 Meta dynamische productadvertenties
- Shopify levert standaard een product-feed; die koppelen we als databron aan een Meta-catalog
  (de Meta Ads-catalog-integratie is in deze omgeving beschikbaar).
- Twee campagnetypes: prospecting (interesse-targeting rond waterkwaliteit/kalk) en retargeting
  (bezoekers van MOFU/BOFU-pagina's en winkelwagenverlaters via de Meta-pixel).
- Vereist: Meta-pixel + (server-side) conversie-events op zowel platform als shop, en een
  product-feed-URL vanuit Shopify.

### 5.2 E-mail / lead capture
- **Lead magnets** die logisch uit onze content vallen:
  - "Persoonlijk waterhardheid- & kalkrapport" (op basis van gemeente) -> e-mail.
  - "Filtervervang-herinnering" (sluit aan op `/hulpmiddelen/filter-vervangdatum`).
  - "Koopgids-PDF" bij de beste-van-2026-pagina's.
- Lichte, AVG-conforme opt-in (dubbele opt-in), gekoppeld aan de e-mailtool die jij gebruikt;
  nurture-flow die eindigt met een PureAqua-aanbod. Geen verkoop van data, duidelijke toestemming.

## 6. Uitvoerings-backlog (gefaseerd, met gates)

**Fase 0 - Fundament (geen content-risico)**
1. `lib/pureaqua.mjs` + `test/pureaqua.test.mjs` (allowlist met alleen geverifieerde URL's).
2. `components/AffiliateCTA.tsx` + `components/AffiliateDisclosure.tsx`.
3. `scripts/check-affiliate.mjs` + opnemen in `verify`/`audit-html`.

**Fase 1 - On-site funnel bedraden (grootste, snelste winst)**
4. BOFU-pagina's eerst: `/the-source` (bestaand patroon herbruiken), `/purefilter-review`,
   merk-alternatief-pagina's -> specifiek product.
5. `/omgekeerde-osmose/kopen` en alle `/beste-*-2026`-koopgidsen + `/omgekeerde-osmose/vergelijken`
   -> shop-collectie met hero + inline CTA.
6. Rekentools: na de uitkomst een contextuele CTA (bv. kalkrisico hoog -> waterontharders).
7. UTM overal via `buildShopUrl`; gate groen.

**Fase 2 - Meting**
8. GA4 cross-domain + UTM-dashboard; Shopify-analytics koppelen; events op CTA-klik.

**Fase 3 - Kanalen**
9. Meta-catalog uit Shopify-feed + pixel/CAPI + dynamische campagnes.
10. Lead magnets + e-mail nurture-flow.

Elke fase sluit af met de bestaande poorten groen: `npm run verify`, `npm run build &&
npm run audit-html`, `npm test`, plus de nieuwe `check-affiliate`.

## 7. Compliance (niet-onderhandelbaar)

- **Affiliate-transparantie:** zichtbare disclosure + `rel="sponsored"` op elke commerciele link
  (ACM-leidraad afspraken/Reclamecode).
- **Geen verzonnen data:** alleen geverifieerde shop-URL's (allowlist + gate); productprijzen/
  -claims alleen met `evidence_status=verified` (zie `PUREFILTER-IMPLEMENTATIE.md`). Geen
  nep-Offers, geen verzonnen AggregateRating/reviews.
- **YMYL:** op gezondheidsgevoelige pagina's blijft de inhoud people-first; disclaimer boven
  commercie; geen misleidende gezondheidsclaims om te verkopen.
- **Onafhankelijkheid:** redactionele beoordeling blijft leidend; commissie stuurt niet de uitkomst
  van vergelijkingen of reviews.

## 8. KPI's en meetplan

- Verkeer: sessies platform -> uitgaande klikken naar shop (klik-doorklikratio per pagina/cluster).
- Conversie: shop-sessies vanuit `utm_source=waterfilterplatform` -> orders + omzet (Shopify).
- Per-pagina-attributie via `utm_content`; identificeer top- en achterblijvende pagina's.
- Kanaal: ROAS Meta-campagnes; e-mail opt-in-rate en nurture-naar-aankoop.
- Leading indicator: aandeel koopintentie-pagina's met een werkende, getagde CTA (doel 100%).

## 9. Wat ik van jou nodig heb om te starten

1. **Geverifieerde Shopify-bestemmingen:** de canonieke collectie- en product-URL's/handles die we
   mogen linken (osmose/kranen/waterontharders/filterkannen + de kernproducten zoals The Source).
2. **Affiliate-details:** affiliate-/partner-linkformat of -subID indien van toepassing, en de
   exacte disclosure-tekst die juridisch akkoord is.
3. **Productdata voor Offers:** prijs, beschikbaarheid en (indien geclaimd) certificeringen met
   verifieerbare listingnummers - anders blijft het bij een link zonder harde claim.
4. **Meting:** GA4-property + toegang, Shopify-analytics, en de Shopify product-feed-URL.
5. **Meta + e-mail:** Meta-adaccount/pixel-toegang en welke e-mailtool we gebruiken.

## 10. Risico's en mitigaties

- *Te commercieel -> schaadt vertrouwen/AI-citaties.* Mitigatie: TOFU blijft informatief; harde
  CTA's alleen op koopintentie; disclosure transparant.
- *Verzonnen/dode shop-URL's.* Mitigatie: allowlist + `check-affiliate`-gate breekt de build.
- *Onbewezen productclaims.* Mitigatie: evidence-gating; link zonder claim tot bewijs binnen is.
- *Cross-domain meetverlies.* Mitigatie: consistente UTM via een enkele helper + cross-domain GA4.

---
Volgende stap: na akkoord bouw ik Fase 0 + Fase 1 (fundament + on-site funnel) met alle poorten
groen. Voor de specifieke product/collectie-links heb ik de geverifieerde Shopify-URL's uit punt 9
nodig; de rest (componenten, UTM-helper, gate, bedrading van koopgidsen naar de reeds bekende
collecties) kan ik direct uitvoeren.
