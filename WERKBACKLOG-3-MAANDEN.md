# WERKBACKLOG 3 MAANDEN - WaterfilterPlatform x PureAqua

Eigen werkbacklog (zelf-opgesteld) met genoeg concreet werk voor circa drie maanden.
Aanvulling op `PUREAQUA-TRAFFIC-BACKLOG.md`, `PUREAQUA-CONVERSIE-PLAN.md` en de
SEO/AI-standaard `WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`.

Status: opgesteld 2026-06-17. Doel: meer PureAqua-relevant verkeer EN bewijsbare conversie,
met behoud van de onafhankelijke autoriteit/citeerbaarheid van WFP (Route C - hybride).

## Werkwijze (elk item)
- Conform de kwaliteitsstandaard: people-first, geen verzonnen data/claims, YMYL met disclaimer,
  transparante affiliate-disclosure, ASCII-only.
- Afsluiten met groene poorten: `npm run verify`, `npm run build && npm run audit-html`
  (incl. `check-affiliate`), `npm test`. Commit + push per logische groep.
- Legenda: `[AUTONOOM]` = nu uitvoerbaar in de repo; `[AFHANKELIJK]` = wacht op input/toegang/besluit.
- Prioriteit: P1 (hoogste impact op conversie/ranking) -> P3.

---

## MAAND 1 - Meetbaar maken + merk-/entiteitkoppeling

### A. Meting en attributie (zonder meten geen optimalisatie) - P1
1. `[AFHANKELIJK GA4-ID]` GA4 + GTM koppelen in `app/layout.tsx` (Measurement-ID via env var),
   cross-domein linker WFP <-> pureaqua.nl, consent-mode v2 (AVG).
2. `[AUTONOOM]` `affiliate_click` dataLayer-event verrijken: per-pagina `page_cluster` en
   `funnel_stage` meesturen; documenteren in `PUREAQUA-CONVERSIE-PLAN.md`.
3. `[AUTONOOM]` `scripts/check-affiliate.mjs` uitbreiden met een dekkings-rapport: percentage
   commerciele pagina's met werkende CTA per cluster; faalt onder ingestelde drempel.
4. `[AFHANKELIJK Shopify]` Conversie-/aankoopmeting in Shopify koppelen aan utm_source/medium;
   server-side events (CAPI) voorbereiden. (Shopify-MCP beschikbaar.)
5. `[AUTONOOM]` UTM-dashboardspec opleveren (welke GA4-/Shopify-rapporten per pagina/cluster/CTA).

### B. Merk- en entiteit-referenties (veilige ranking-bijdrage) - P1
6. `[AFHANKELIJK prijs/voorraad]` Product-schema met geverifieerde `Offer` voor 4-in-1 kraan,
   Joep, AquaCell, Countertop RO (The Source heeft al een Offer). Via Shopify-MCP de actuele
   prijs/voorraad ophalen i.p.v. handmatig.
7. `[AFHANKELIJK bevestiging]` Organization `sameAs`/partner-relatie WFP <-> PureAqua.nl in
   `lib/schema-org.mjs` (Organization), met disclosure-consistente framing.
8. `[AUTONOOM]` PureAqua-producten koppelen aan de reeds-gegronde concept-entiteiten (osmose,
   waterhardheid) in de kennisgraaf (`lib/entities.mjs` / factsheets).
9. `[AFHANKELIJK bewijs]` Bewijsdossier The Source/PureFilter verzamelen (NSF-listingnummers,
   testrapporten) en claims op `/the-source` + `/purefilter-review` upgraden naar
   `evidence_status=verified` (zie `PUREFILTER-IMPLEMENTATIE.md`).

### C. Funnel afronden (resterende kansen) - P2
10. `[AUTONOOM, jouw go]` 3 info-gemeente-families (`drinkwater`, `kraanwater`, `leidingwater`)
    met zachte, neutrale CTA -> dekking richting ~3.600 pagina's.
11. `[AUTONOOM]` Lichte CTA's op beslis-/AEO-hubs: `/keuzehulp`, `/antwoorden`, `/feit-of-fabel`
    waar de intentie commercieel genoeg is.
12. `[AUTONOOM]` Per-gemeente gepersonaliseerde CTA-tekst (gemeente-naam + lokale hardheid in de
    CTA) voor hogere relevantie/CTR op de lokale pagina's.

---

## MAAND 2 - Kanalen (verkeer aanjagen) + conversie-optimalisatie

### D. Meta dynamische advertenties (Meta-MCP beschikbaar) - P1
13. `[AFHANKELIJK Meta-toegang]` Meta-pixel op WFP + standaard events (ViewContent, Lead).
14. `[AFHANKELIJK Shopify-feed]` Shopify product-feed als Meta-catalog koppelen; product-sets
    per categorie (osmose/ontharder/kokend).
15. `[AFHANKELIJK]` Retargeting-campagne: bezoekers van MOFU/BOFU-clusters + winkelwagenverlaters.
16. `[AFHANKELIJK]` Prospecting-campagne rond hard-water/kalk/PFAS-interesse; A/B op creative.
17. `[AUTONOOM]` Custom-audience-definities en campagnestructuur documenteren (geen budget zonder
    jouw akkoord).

### E. E-mail / lead capture (audience opbouwen) - P2
18. `[AUTONOOM front-end]` Lead-magnet componenten: "Persoonlijk waterhardheid- & kalkrapport"
    (per gemeente), "Filtervervang-herinnering", "Koopgids-PDF".
19. `[AFHANKELIJK e-mailtool]` AVG-conforme dubbele-opt-in koppeling + nurture-flow die eindigt
    met een PureAqua-aanbod.
20. `[AUTONOOM]` Exit-intent / inline opt-in op hoog-verkeer TOFU-pagina's (zacht, niet opdringerig).

### F. Conversie-optimalisatie (CRO) - P2
21. `[AUTONOOM]` `ProductRecommendation`-component (kaart/inline/vergelijkingsrij) o.b.v.
    `lib/pureaqua.mjs`, met eerlijke framing + Offer alleen bij geverifieerde prijs.
22. `[AUTONOOM]` Sticky/inline CTA-varianten + `data-placement` voor A/B-meetbaarheid.
23. `[AFHANKELIJK GA4]` A/B-tests op CTA-copy en -plaatsing (hero vs inline vs na-resultaat);
    winnaars uitrollen.
24. `[AUTONOOM]` Eerlijke vergelijkingstabellen met PureAqua-product naast generieke opties
    (evidence-gated, geen nep-AggregateRating).
25. `[AUTONOOM]` Microcopy/vertrouwens-elementen rond CTA's (levertijd, garantie, proefperiode)
    - alleen geverifieerde, bestaande claims.

---

## MAAND 3 - Content-/ranking-groei + technische diepte

### G. Content-uitbreiding voor ranking (Route C: WFP blijft autoriteit) - P2
26. `[AUTONOOM]` GSC-gap-ronde: nieuwe kennisbankartikelen op vraag-long-tail die nog niet
    gedekt is (na export van zoektermen; tot die tijd op interne signalen).
27. `[AUTONOOM]` Freshness-ronde: top-30 commerciele pagina's herzien (cijfers/jaartal/bronnen
    bijwerken, `lastModified`), zodat ranking-signalen vers blijven.
28. `[AUTONOOM]` Interne-link-diepte vergroten: meer hub<->spoke en cross-cluster links naar de
    commerciele pagina's (geen orphans, `check-orphans` groen).
29. `[AUTONOOM]` Nieuwe AEO-formats: meer vraag-clusters en factsheets rond PureAqua-categorieen.
30. `[AUTONOOM]` Koopgids per PureAqua-categorie (osmosekraan, waterontharder, kokend, filterkan)
    als sterke MOFU->BOFU-pagina's.

### H. Technische SEO en performance - P2
31. `[AUTONOOM]` Core Web Vitals-audit + fixes (afbeeldingen, font-display, JS-splitsing op de
    zwaarste routes).
32. `[AUTONOOM]` Sitemap-index/`generateSitemaps` opnieuw onderzoeken voor schaal (>50k URL's
    veilig); eerder gedefereerd, nu met testdekking.
33. `[AUTONOOM]` OG-image-pipeline uitbreiden naar de nieuwe commerciele templates.
34. `[AUTONOOM]` Structured-data-uitbreiding: `BreadcrumbList`/`ItemList` consistent op alle
    nieuwe hubs; schema-validatie blijft 0 fouten.
35. `[AUTONOOM]` IndexNow/Bing + sitemap-ping automatiseren bij nieuwe/gewijzigde routes.

### I. Lokale SEO (350 gemeenten benutten) - P2
36. `[AUTONOOM]` Lokale relevantie versterken: hardheid + waterbedrijf per gemeente prominenter,
    met de waterontharder-CTA als logische lokale vervolgstap.
37. `[AUTONOOM]` Interne links tussen gemeente-pagina's en de juiste categorie-hub/koopgids.

---

## DOORLOPEND (hele periode)

### J. Governance, kwaliteit en monitoring - P1
38. `[AUTONOOM]` Wekelijkse poort-run + SITE-HEALTH actualiseren; regressies direct fixen.
39. `[AUTONOOM]` Affiliate-gate hard in `verify` houden (rel=sponsored + UTM + allowlist +
    disclosure); allowlist alleen uitbreiden met geverifieerde URL's.
40. `[AUTONOOM]` Dode-link-/redirect-monitoring richting pureaqua.nl (detecteer 404 op
    bestemmingen voordat bezoekers dat doen).
41. `[AUTONOOM]` Onafhankelijkheidsbeleid expliciet op `/methodologie` + `/over-ons` (behoud
    E-E-A-T/AI-citatie).
42. `[AUTONOOM]` PR-hygiene: per ronde een draft-PR, gates groen, daarna merge naar productie.

### K. AI Search / GEO-onderhoud - P2
43. `[AUTONOOM]` `sameAs`-gronding uitbreiden naar meer entiteiten zodra eenduidige bronnen
    bestaan (Wikipedia/Wikidata), met verificatie.
44. `[AUTONOOM]` `llms.txt`/`llms-full.txt` actueel houden bij elke nieuwe cluster.
45. `[AUTONOOM]` Citeerbaarheid steekproeven: controleren of AI-engines WFP-content citeren en
    naar PureAqua leiden; bevindingen terugkoppelen.

### L. Cross-domein / migratie-optie (alleen als jij Route B-deel kiest) - P3
46. `[AUTONOOM tooling]` 301-redirectmap-generator + content-export voor geselecteerde
    transactionele pagina's.
47. `[AFHANKELIJK besluit + PureAqua-toegang]` Pilot: 1-2 puur-transactionele pagina's naar
    PureAqua.nl verhuizen met correcte canonicals; effect meten voor we opschalen.

---

## Eerstvolgende 3 acties zodra ik groen licht/input heb
1. PR #6 mergen naar productie (2.547 lokale CTA's live).
2. GA4/GTM koppelen (item 1) - de enige echte blocker voor "bewijsbare conversie".
3. Product-schema met geverifieerde Offers + Organization sameAs (items 6-7).

## Belangrijkste afhankelijkheden van jou (eenmalig)
- GA4 Measurement-ID / GTM-container.
- Shopify-toegang/feed (deels al via Shopify-MCP), prijs/voorraad voor Offers.
- Meta-pixel/adaccount + advertentiebudget-akkoord.
- E-mailtool.
- Bewijsdossier PureFilter/The Source.
- Go/no-go op de info-gemeente-families en op de Route-B-migratiepilot.
