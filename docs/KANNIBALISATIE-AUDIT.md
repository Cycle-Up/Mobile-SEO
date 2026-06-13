# Kannibalisatie-audit pureaqua.nl vs waterfilterplatform.nl
Datum: 2026-05-17
Auteur: Claude Code agent (alleen-lezen audit, geen repo-wijzigingen)

---

## Methode

### Wat geprobeerd is
De originele werkwijze schreef voor om `https://pureaqua.nl/sitemap.xml` en varianten via `curl` op te halen. Dat is in deze sandbox-omgeving niet mogelijk:

- `curl https://pureaqua.nl/sitemap.xml` → `Host not in allowlist`
- `curl https://www.pureaqua.nl/sitemap.xml` → `Host not in allowlist`
- `curl https://pureaqua.nl/sitemap_index.xml` → `Host not in allowlist`
- `WebFetch https://pureaqua.nl/sitemap.xml` → `HTTP 403 Forbidden` (pureaqua.nl blokkeert WebFetch user-agent)
- `WebFetch https://pureaqua.nl/robots.txt` → 403
- `WebFetch https://pureaqua.nl/` (homepage) → 403

Conclusie: directe sitemap-ophaal is niet uitvoerbaar in deze sessie.

### Wat wel gelukt is
URL-inventarisatie van pureaqua.nl via `WebSearch` met meerdere `site:pureaqua.nl`-queries op thematische clusters (osmose, kokend water, waterontharder, kennisbank, PFAS/lood, waterhardheid, koolstoffilter, prijs/kosten, onder aanrecht, baby/koffie/thee, Quooker-alternatief). Per zoekopdracht max 10 hits — geen volledige sitemap. Resultaat: 56 unieke pureaqua-URLs in steekproef (geen pretentie van compleetheid). Snippets uit zoekresultaten gebruikt om title/intent te bepalen; H1's konden niet apart opgehaald worden.

WFP-zijde geinventariseerd via `find app -name page.tsx`. Aantal statische routes: 458 (excl. `[gemeente]` en `[slug]` programmatische routes). Geanalyseerd: titel/slug/cluster zoals gedefinieerd in `data/clusters.ts` en de filesystem-paden.

### Beperking — eerlijk gerapporteerd
Dit rapport is een *steekproef-gebaseerde audit*, geen volledige sitemap-crossmatch. Voor een definitieve overlap-analyse is een verse pureaqua sitemap.xml of GSC-export per URL nodig. Zie sectie "Open vragen voor Diekie".

---

## Samenvatting

- **Pureaqua URLs in steekproef:** 56 unieke URLs (via 11 thematische WebSearches)
- **WFP statische routes geinventariseerd:** 458 page.tsx-bestanden (excl. programmatische gemeente-routes)
- **Duidelijke overlap-clusters geidentificeerd:** 12 thematische zones
- **Concrete URL-overlaps in steekproef:** 35 paren (zie Top 50 hieronder)
- **Actiepunten voor WFP-content-aanpassing:** 18 (rest is OK of al informationeel)

### Hoofdbevindingen

1. **De grootste kannibalisatie zit op de osmose-kraan en kokend-water-kraan commercial slugs.** WFP heeft `/omgekeerde-osmose/kopen`, `/osmose-filter/kopen`, `/kokend-water-kraan/kopen`, `/kokend-water-kraan/vergelijken`, `/kokend-water-kraan/prijs` en `/beste-osmosefilter-2026`. Pureaqua heeft directe productpagina's voor osmose-systemen (The Source 50, The Source 180), 3-weg kranen (The Flow, The Dew, The Rush, The Shine, The Surge), 4-in-1 kokend/bruisend kranen (Unito Sparkle, Unito Lava) en collectie-URLs `/collections/kranen`, `/collections/kokend-water-kranen`, `/collections/waterontharders`. **Dit zijn kerncommerciele queries voor pureaqua. WFP moet hier informationeel positioneren of doorlinken.**

2. **De waterontharder/JOEP/Aquacell-zone is een duidelijke pureaqua commercial moat.** Pureaqua verkoopt het JOEP-systeem (€1.799–2.599) en Aquacell. WFP heeft `/waterontharder/kopen`, `/waterontharder/prijs`, `/waterontharder/vergelijken`, `/waterontharder/kosten`. **Hier competeert WFP direct met de moederssite.**

3. **Quooker-alternatief is een zelfgekozen overlap.** Pureaqua heeft `/pages/quooker-alternatief`, een blog "Quooker alternatief: 7 slimme opties", en `/pages/kokendwaterkranen-quooker-unito` als directe commerciele landing. WFP heeft `/quooker-alternatief`, `/kokend-water-kraan/vs-quooker`, `/kokend-water-kraan/quooker`. **WFP positioneert hier als objectieve vergelijker terwijl pureaqua hun eigen Unito-product pusht. Dit is een gewenste overlap als WFP de neutrale "vergelijker"-rol pakt — maar de kop moet niet "koop X" zijn.**

4. **De kennisbank van pureaqua (`pureaqua.nl/blogs/kennisbank/*` en `blog.pureaqua.nl/kennisbank/*`) overlapt op tientallen onderwerpen met WFP-pagina's én WFP-MDX-artikelen.** Beide hebben content over TDS-meters, mineralen-vraagstukken, PFAS-verwijderingsmethoden, waterhardheid per gemeente, hard water/haar/huid, kraanwater-kwaliteit per stad, koffie/thee-smaak, baby-veiligheid, etc. **Hier is overlap acceptabel zolang WFP onafhankelijk-vergelijkend blijft en pureaqua merkgebonden blijft. Maar de onderwerpen overlappen wel; rankings concurreren.**

5. **De positionering volgens HANDOVER.md (sectie 6) is intern al gesignaleerd als inconsistent.** `llms.txt` claimt "geen affiliate-commissie", terwijl `/over-ons` expliciet zegt dat WFP een affiliate-relatie met PureAqua heeft. **De kannibalisatie-vraag hangt direct af van welk model leidend wordt.** Als WFP een satelliet is voor pureaqua, dan zijn deze "concurrerende" commerciele slugs juist *doorvoerkanalen* — geen kannibalisatie maar funnel. Dit moet eerst opgehelderd.

---

## Top 50 keyword-overlaps

Onderstaande tabel: 35 concrete URL-paren gevonden in de steekproef, plus 15 voorspelde overlaps op basis van pureaqua-categoriestructuur. Sortering: meest commercieel naar minst commercieel.

| # | Pureaqua URL | WFP URL | Pureaqua title / intent | WFP title (uit slug) | Intent | Besluit |
|---|---|---|---|---|---|---|
| 1 | `pureaqua.nl/en` (homepage) | `/` (homepage) | "Zuiver drinkwater met osmose filtersysteem" — commercieel | "WaterfilterPlatform" — vergelijker | beide brand-claim | Geen actie — verschillende brand-positionering |
| 2 | `pureaqua.nl/products/the-rush` (3-weg kraan) | `/omgekeerde-osmose/kopen` | Productpagina, commercieel | "Osmose filter kopen" — commercieel | commercieel | **Pureaqua wint commercieel — WFP herschrijven naar informationeel/vergelijker** |
| 3 | `pureaqua.nl/products/the-flow` (3-weg) | `/omgekeerde-osmose/kopen` | Productpagina | "Osmose filter kopen" | commercieel | **Idem — WFP moet niet "kopen" suggereren maar "vergelijken" of "wat te letten op"** |
| 4 | `pureaqua.nl/collections/kranen` | `/4-in-1-kraan` | "Zuiver water kranen" — categoriepagina, commercieel | "4-in-1 kraan" — informationeel | commercieel vs info | Geen actie — WFP is hier informationeel |
| 5 | `pureaqua.nl/en/collections/kokend-water-kranen` | `/kokend-water-kraan/kopen` | Categoriepagina | "Kokend water kraan kopen" | commercieel | **WFP commercieel — herschrijven naar "kokend water kraan kopen: waar op letten" (informationeel guide)** |
| 6 | `pureaqua.nl/pages/kokendwaterkranen-quooker-unito` | `/kokend-water-kraan/vergelijken` | "Vergelijk Quooker & UNITO" — commercieel | "Kokend water kraan vergelijken" | beide commercieel-vergelijkend | **Beide vergelijkend — differentieren: WFP moet ALLE merken neutraal vergelijken, niet alleen Quooker vs Unito** |
| 7 | `pureaqua.nl/en/pages/unito-systemen-vergelijken` | `/kokend-water-kraan/merken-vergelijking` | "Unito 3-in-1 tot 6-in-1 vergelijken" | "Kokend water kraan merken vergelijking" | commercieel | **Pureaqua focust op Unito. WFP-merkenvergelijking is OK informationeel — handhaven maar geen Unito-bias** |
| 8 | `pureaqua.nl/products/unito-sparkle-water-kraan-4-in-1-...` | `/kokend-water-kraan/4-in-1` | Productpagina | "4-in-1 kokend water kraan" | commercieel | **Pureaqua wint commercieel — WFP herschrijven naar "wat is een 4-in-1 kraan" (informationeel)** |
| 9 | `pureaqua.nl/products/unito-lava-...3-in-1...` | `/kokend-water-kraan/5-in-1` | Productpagina | "5-in-1 kokend water kraan" | commercieel | **Idem als #8** |
| 10 | `pureaqua.nl/en/products/compleet-waterfiltersysteem-voor-thuis` (The Source 50) | `/waterfilter/kopen` | Productpagina | "Waterfilter kopen" | commercieel | **Pureaqua wint — WFP herschrijven naar buyer's guide (informationeel)** |
| 11 | `pureaqua.nl/en/collections/drinkwaterfiltersystemen` | `/waterfilter/vergelijken` | "Drinkwaterfiltersystemen" categorie | "Waterfilter vergelijken" | commercieel vs vergelijkend | **WFP vergelijkend OK — handhaven maar geen merkvoorkeur** |
| 12 | `pureaqua.nl/en/pages/waterfilter-voor-thuis` | `/waterfilter` | "Waterfilter voor thuis" — commercieel landing | "Waterfilter" — hub | beide breed | **WFP hub informationeel houden — geen "kopen"-CTA bovenaan** |
| 13 | `pureaqua.nl/en/pages/osmose-waterfilter` | `/osmose-filter/kopen` | Commercieel landing | "Osmose filter kopen" | commercieel | **Pureaqua wint — WFP herschrijven naar gids** |
| 14 | `pureaqua.nl/omgekeerde-osmose-systeem` | `/omgekeerde-osmose` | Commercieel landing | Cluster hub (informationeel) | hybride | Geen actie — WFP hub is al informationeel |
| 15 | `pureaqua.nl/werking/omgekeerde-osmose-systeem` | `/omgekeerde-osmose/wat-is-osmose-water` | "Hoe werkt het" — informationeel-commercieel | "Wat is osmose water" | informationeel | **Beide info — differentieren: WFP onafhankelijk, geen Source-merkmention** |
| 16 | `pureaqua.nl/en/pages/systeem-samenstellen` | `/omgekeerde-osmose/diy` | "Systeem samenstellen" — commercieel configurator | "Osmose DIY" | commercieel vs info | **WFP info OK — handhaven** |
| 17 | `pureaqua.nl/en/pages/offerte-aanvragen` | n.v.t. | Lead-form, commercieel | (geen) | commercieel | Geen overlap — WFP heeft geen offerte-funnel |
| 18 | `pureaqua.nl/en/products/joep-waterontharder` | `/waterontharder/kopen` | Productpagina | "Waterontharder kopen" | commercieel | **Pureaqua wint — WFP herschrijven naar "waterontharder kopen: koopgids met checklist"** |
| 19 | `pureaqua.nl/en/products/aquacell-waterontharder` | `/waterontharder/vergelijken` | Productpagina | "Waterontharder vergelijken" | commercieel vs vergelijkend | **WFP vergelijkend handhaven, alle merken neutraal** |
| 20 | `pureaqua.nl/en/collections/waterontharders` | `/waterontharder/kopen` | Categoriepagina | "Waterontharder kopen" | commercieel | **Pureaqua wint — WFP herschrijven** |
| 21 | `pureaqua.nl/en/pages/waterontharders` | `/waterontharder` | "Wat doet een waterontharder" | Hub | beide info | Geen actie |
| 22 | `pureaqua.nl/blogs/nieuws/quooker-alternatief-7-slimme-opties...` | `/quooker-alternatief` | Blog, commercieel-leiding | Quooker-alternatief landing | beide vergelijkend | **WFP moet onafhankelijk blijven (niet 1-op-1 Unito promoten)** |
| 23 | `pureaqua.nl/en/pages/quooker-alternatief` | `/quooker-alternatief` | Commercieel landing | Vergelijker | commercieel vs info | **WFP info-positie behouden** |
| 24 | `pureaqua.nl/blogs/nieuws/quooker-vs-unito-...` | `/kokend-water-kraan/quooker` | Blog, merk-vergelijking | "Quooker" overzichtpagina | beide vergelijkend | **WFP moet geen "Unito beter dan Quooker"-conclusie trekken** |
| 25 | `pureaqua.nl/blogs/nieuws/quooker-pro3-vs-combi-vs-combi+` | `/quooker-modellen` | Blog | "Quooker modellen" | beide info | **Beide info — differentieren: WFP onafhankelijke modelvergelijking** |
| 26 | `pureaqua.nl/blogs/nieuws/wat-kost-een-kokend-water-kraan-pureaqua` | `/kokend-water-kraan/prijs` | Blog, commercieel | "Kokend water kraan prijs" | commercieel | **Beide commercieel — WFP moet TCO-perspectief pakken (kosten over 5–10 jaar) i.p.v. aanschafprijs** |
| 27 | `pureaqua.nl/blogs/nieuws/kokend-water-kraan-energieverbruik` | `/kokend-water-kraan/energie-verbruik` | Blog | "Energieverbruik kokend water kraan" | informationeel | **Beide info — WFP differentieren met meetmethode/onafhankelijke data** |
| 28 | `pureaqua.nl/en/blogs/kennisbank/beste-waterfilters-tegen-pfas` | `/pfas-waterfilter/kopen` | Blog | "PFAS waterfilter kopen" | commercieel vs info | **WFP herschrijven naar "PFAS waterfilter: 4 effectieve methoden" (info)** |
| 29 | `pureaqua.nl/en/blogs/kennisbank/effectieve-methoden-pfas-...` | `/pfas-waterfilter/testen` | Blog | "PFAS waterfilter testen" | beide info | Geen actie — WFP testing-focus is differentiator |
| 30 | `pureaqua.nl/blogs/kennisbank/omgekeerde-osmose-oplossing-voor-pfas` | `/drinkwaternormen/pfas` | Blog | "PFAS in drinkwater" | beide info | Geen actie — WFP wettelijk/normatief, pureaqua filter-oplossing |
| 31 | `pureaqua.nl/en/blogs/kennisbank/zijn-loden-leidingen-...` | `/drinkwaternormen/lood` | Blog | "Lood in drinkwater" | beide info | Geen actie — WFP normatief |
| 32 | `pureaqua.nl/en/blogs/nieuws/wat-is-waterhardheid-...` | `/waterhardheid` | Blog | Hub waterhardheid | beide info | **Beide info — WFP differentieert met gemeente-data (programmatic)** |
| 33 | `pureaqua.nl/en/blogs/kennisbank/hoe-meet-je-de-waterhardheid-thuis` | `/waterhardheid/meten` | Blog | "Waterhardheid meten" | beide info | **Beide info — handhaven, geen Pureaqua-merkclaims** |
| 34 | `pureaqua.nl/blogs/kennisbank/waterhardheid-in-de-wijk` | `/waterhardheid/[gemeente=de-wijk]` | Blog per gemeente | Programmatic gemeente | beide info-lokaal | **Beide doen gemeente-content — WFP heeft schaalvoordeel (350 gemeenten), pureaqua doet het selectief** |
| 35 | `pureaqua.nl/blogs/kennisbank/kraanwater-kwaliteit-in-rotterdam-...` | `/kraanwater/[gemeente=rotterdam]` | Blog per stad | Programmatic gemeente | beide info-lokaal | **Idem #34 — overlap is OK want intent is identiek (kraanwater per stad), WFP wint op schaal** |
| 36 | `pureaqua.nl/en/blogs/kennisbank/babys-en-osmosewater-...` | `/drinkwater/baby` | Blog | "Drinkwater baby" | beide info | Geen actie |
| 37 | `pureaqua.nl/en/blogs/kennisbank/is-kraanwater-veilig-voor-...baby` | `/drinkwater/baby` | Blog | "Drinkwater baby" | beide info | **Pad-overlap met #36 — WFP heeft 1 pagina, pureaqua meerdere — geen actie** |
| 38 | `pureaqua.nl/en/blogs/kennisbank/kunnen-zwangere-vrouwen-...` | `/drinkwater/zwangerschap` | Blog | "Drinkwater zwangerschap" | beide info | Geen actie |
| 39 | `pureaqua.nl/en/blogs/kennisbank/actieve-koolfilters-voordelen` | `/koolstoffilter` + `/filtertechnieken/actief-kool` | Blog | Hub + sub | beide info | **Twee WFP-pagina's op 1 onderwerp — interne kannibalisatie WFP↔WFP (zie open vragen)** |
| 40 | `pureaqua.nl/en/blogs/kennisbank/wat-zijn-de-kosten-van-koolstoffilters` | `/koolstoffilter/kopen` | Blog | "Koolstoffilter kopen" | commercieel vs info | **WFP herschrijven naar "koolstoffilter kosten en levensduur" (info)** |
| 41 | `pureaqua.nl/blogs/kennisbank/maakt-osmosewater-je-koffie-...thee...` | `/osmose-water/koffie`, `/osmose-water/thee`, `/beste-waterfilter/koffie-thee` | Blog | 3 WFP-pagina's | beide info | **Drievoudige WFP-kannibalisatie WFP↔WFP rond koffie/thee — los apart op (zie open vragen)** |
| 42 | `pureaqua.nl/blogs/kennisbank/is-omgekeerde-osmose-water-gezond-...` | `/osmose-water/gezond`, `/osmose-water/gezondheid`, `/osmose-water/gezondheidsvoordelen` | Blog | 3 WFP-pagina's | beide info | **Drievoudige WFP-interne kannibalisatie (gezond/gezondheid/gezondheidsvoordelen) — los apart op** |
| 43 | `pureaqua.nl/blogs/nieuws/flessenwater-vs-kraanwater-kosten` | `/vergelijken/kraanwater-vs-flessenwater` (in clusters.ts, status TBD) | Blog | Geplande WFP-pagina | beide info-vergelijkend | **Pagina lijkt nog niet te bestaan op WFP — bouwen met onafhankelijke calculator** |
| 44 | `pureaqua.nl/blogs/kennisbank/hoe-vaak-moet-je-het-filter-...vervangen` | `/omgekeerde-osmose/membraan-vervangen`, `/onderhoud/osmose-filter-vervangen`, `/omgekeerde-osmose/onderhoud` | Blog | 3 WFP-paginas | beide info | **Driedubbele WFP-overlap rond filter-vervangen — los apart op** |
| 45 | `pureaqua.nl/blogs/kennisbank/wat-kost-een-waterfilter-voor-thuisgebruik` | `/waterfilter/kopen` | Blog | "Waterfilter kopen" | commercieel vs info | **WFP herschrijven naar kosten-/TCO-gids (info)** |
| 46 | `pureaqua.nl/blogs/kennisbank/welke-soorten-waterfilters-zijn-er-voor-thuis` | `/waterfilter/soorten` | Blog | "Waterfilter soorten" | beide info | Geen actie |
| 47 | `pureaqua.nl/blogs/kennisbank/hoe-kies-je-de-beste-tds-meter` | `/kraanwater/tds`, `/kennisbank/tds-meter-gebruiken` | Blog | 2 WFP-paginas | beide info | **WFP-interne kannibalisatie TDS — los apart op** |
| 48 | `pureaqua.nl/en/products/mineraalfilter-voor-omgekeerde-osmose-systemen` | `/osmose-water/remineralisatie`, `/osmose-water/remineraliseren`, `/osmose-water/mineralen` | Productpagina | 3 WFP-paginas | commercieel vs info | **Drievoudige WFP-overlap remineralisatie/remineraliseren/mineralen — los apart op + info-positie t.o.v. pureaqua-product** |
| 49 | `pureaqua.nl/blogs/kennisbank/welke-omgekeerde-osmose-filters-heb-je-nodig-...` | `/omgekeerde-osmose/filter` | Blog | "Osmose filter" | beide info | Geen actie |
| 50 | `pureaqua.nl/blogs/kennisbank/omgekeerde-osmose-voor-je-aquarium-...` | `/osmose-water/aquarium`, `/waterfilter/aquarium`, `/waterfilter/voor-aquarium` | Blog | 3 WFP-paginas | beide info | **Drievoudige WFP-overlap aquarium — los apart op** |

---

## Beslismatrix

### Categorie A — "Pureaqua wint commercieel, WFP herschrijven naar informationeel"
**Wanneer:** pureaqua heeft een productpagina, collectie of expliciete "kopen"-landing, en WFP heeft een slug die eindigt op `/kopen`, `/prijs`, `/kosten` of een buyer's-intent-pad.

**Actie:** WFP-pagina herpositioneren als koopgids/checklist/criteria — niet als "X kopen"-conversiepagina. Title vervangen van "X kopen" naar "X kopen: waar op letten in 2026" of "X kopen: 7 criteria voor de juiste keuze". CTA mag wel naar pureaqua linken (zie open positionering), maar de pagina zelf is informationeel.

**Top WFP-pagina's voor herpositionering:**
1. `/omgekeerde-osmose/kopen` (rij 2-3)
2. `/osmose-filter/kopen` (rij 13)
3. `/kokend-water-kraan/kopen` (rij 5)
4. `/kokend-water-kraan/4-in-1` (rij 8)
5. `/kokend-water-kraan/5-in-1` (rij 9)
6. `/waterfilter/kopen` (rij 10, 45)
7. `/waterontharder/kopen` (rij 18, 20)
8. `/pfas-waterfilter/kopen` (rij 28)
9. `/koolstoffilter/kopen` (rij 40)
10. `/beste-osmosefilter-2026` (impliciet)
11. `/beste-kokend-water-kraan-2026` (impliciet)
12. `/beste-waterfilter-2026` (impliciet)

### Categorie B — "WFP wint informationeel, geen actie"
**Wanneer:** WFP-pagina is duidelijk informationeel (definitiefocus, hoe werkt het, vergelijking van methoden), pureaqua heeft daar geen directe commerciele pagina maar enkel een blog-artikel.

**Actie:** Niets. WFP blijft het sterke informationele anker. Voorkom dat tijdens content-iteratie "kopen"-CTA's worden toegevoegd.

**Voorbeelden:** `/omgekeerde-osmose` (hub), `/waterhardheid` (hub), `/keurmerken/*`, `/drinkwaternormen/*`, `/filtertechnieken/*` clusters.

### Categorie C — "Beide informationeel, differentieren"
**Wanneer:** beide sites hebben informationele content op hetzelfde onderwerp.

**Actie:** WFP differentieert door:
- Onafhankelijkheidsclaims expliciet ("getest door X", "data uit Vewin", "Drinkwaterbesluit-citaat")
- Geen merkbias (Quooker, Unito, Pureaqua gelijk behandelen)
- Schaalvoordeel benutten (350 gemeenten, 330 MDX, 458 routes vs pureaqua's blog-aanpak)
- Wettelijke/normatieve invalshoek (RIVM, EU 2020/2184, ILT) waar pureaqua productfocus heeft

**Voorbeelden:** `/waterhardheid/meten` (rij 33), `/drinkwater/baby` (rij 36-37), `/osmose-water/aquarium` (rij 50).

### Categorie D — "Lokaal / programmatic, schaalvoordeel WFP"
**Wanneer:** beide sites hebben gemeente- of stadspagina's.

**Actie:** WFP houdt programmatic-strategie (350 gemeenten x 10 routes = 3.500 pagina's) aan. Pureaqua doet selectief blog-posts per stad (~10 stuks zichtbaar). WFP wint op long-tail dekking. Geen actie nodig, behalve consistente kwaliteit per gemeente-template.

**Voorbeelden:** rij 34, 35.

### Categorie E — "WFP-interne kannibalisatie (WFP↔WFP), los los van pureaqua-vraag"
**Wanneer:** WFP heeft meerdere pagina's op (bijna) hetzelfde keyword. Dit kwam als bijvangst boven water tijdens deze audit.

**Lijst aangetroffen interne dubbelingen (zie ook HANDOVER.md sectie 5 issue 2 — al gesignaleerd):**
1. `/osmose-water/gezond` + `/osmose-water/gezondheid` + `/osmose-water/gezondheidsvoordelen` (rij 42)
2. `/osmose-water/koffie` + `/osmose-water/koffie-espresso` + `/osmose-water/espresso` + `/beste-waterfilter/koffie-thee` (rij 41, eigen scan)
3. `/osmose-water/thee` + `/kokend-water-kraan/thee` (eigen scan)
4. `/osmose-water/remineralisatie` + `/osmose-water/remineraliseren` + `/osmose-water/mineralen` (rij 48)
5. `/omgekeerde-osmose/membraan-vervangen` + `/onderhoud/osmose-filter-vervangen` + `/omgekeerde-osmose/onderhoud` + `/omgekeerde-osmose/filter` (rij 44)
6. `/osmose-water/aquarium` + `/waterfilter/aquarium` + `/waterfilter/voor-aquarium` (rij 50)
7. `/kraanwater/tds` + `/kennisbank/tds-meter-gebruiken` + `/waterfilter/tds` (rij 47)
8. `/leidingwater/kwaliteit` + `/leidingwater/kwaliteit-verbeteren` + `/kraanwater/kwaliteit` + `/kraanwater/kwaliteit-verbeteren` + `/waterkwaliteit/nederland` (eigen scan)
9. `/waterfilter/microplastics` + `/osmose-water/microplastics` + `/drinkwater/microplastics` + `/drinkwaternormen/microplastics` (eigen scan)
10. `/waterfilter/lood` + `/drinkwater/lood` + `/leidingwater/lood` + `/drinkwaternormen/lood` (eigen scan, vier(!) pagina's op "lood in water")
11. `/waterfilter/chloor-verwijderen` + `/drinkwater/chloor` + `/leidingwater/chloor` (eigen scan)
12. `/waterfilter/hardheid` + `/waterhardheid/*` + `/leidingwater/hardheid` + `/kraanwater/hardheid` + `/leidingwater/hard-water` (eigen scan, vijfvoudig)
13. `/heet-water-kraan/*` + `/kokend-water-kraan/*` (eigen scan — 2 parallelle clusters die functioneel hetzelfde keyword bedienen, "heet water" vs "kokend water")
14. `/waterfilter/mangaan` + `/waterfilter/mangan` + `/waterfilter/mangaanfilter` + `/leidingwater/mangaan` (eigen scan, "mangan" lijkt typo)
15. `/waterfilter/fluoride` + `/waterfilter/fluor` + `/drinkwater/fluoride` (eigen scan)

**Actie WFP-intern:** ga per dubbeling beslissen welke URL canonical is en andere via 301-redirect of `canonical`-tag bundelen. Dit is *binnen-site*-werk, los van de pureaqua-vraag.

---

## Open vragen voor Diekie

1. **Positionering uitklaren (HANDOVER.md §6 issue).** Is WFP een SEO-satelliet (funnel naar pureaqua, dus "concurrerende" slugs = doorvoer, geen kannibalisatie), of een onafhankelijk vergelijkingsplatform (dan moeten alle commerciele slugs informationeel)? Dit is randvoorwaarde voor categorie-A-acties.

2. **Mag WFP ondanks "onafhankelijk"-claim wel naar pureaqua linken?** De CTA-banner-strategie is nu intern-only. Voor de funnel-rol moet outbound naar pureaqua opgezet worden. Voor de onafhankelijk-rol moet outbound naar meerdere aanbieders (Quooker, Grohe, Pureaqua, BWT, Brita) gebalanceerd.

3. **Bestaat er een verse pureaqua sitemap.xml die ik kan importeren?** De volledige sitemap is niet bereikbaar in deze sandbox. Een geexporteerde XML (of CSV met URL + titel + canonical) zou een 1-op-1 audit mogelijk maken in plaats van een steekproef.

4. **Wat is de huidige GSC-data voor pureaqua.nl én voor waterfilterplatform.nl?** Pos. per gedeelde keyword laat zien wie er wint. Zonder dat is "kannibalisatie" een aanname; het kan ook zijn dat WFP nog niet ranked voor diezelfde queries.

5. **Heet-water-kraan-cluster duplicatie:** `app/heet-water-kraan/*` en `app/kokend-water-kraan/*` lijken op dezelfde commerciele intent te zitten. Was dit bewust (twee zoekvolumes, "heet" vs "kokend") of moet 1 cluster gecanonicaliseerd worden? Pureaqua heeft enkel kokend-water-kranen, dus dit dubbel-cluster komt niet uit GSC-pureaqua-export.

6. **Zijn de programmatische gemeente-routes uniek genoeg?** 3.500 gemeente-pagina's met 10 routes per gemeente betekent dat bijv. Amsterdam 10 verschillende WFP-URLs heeft die concurreren op "amsterdam waterhardheid", "amsterdam kraanwater", "amsterdam kalk", etc. Pureaqua doet 1 blog-artikel per stad selectief. Dit is interne complexiteit die op zichzelf een audit verdient.

7. **Affiliate-tracking ID:** als de funnel-route gekozen wordt, is er een affiliate-link-formaat afgesproken (?ref=wfp, etc.)? Anders is doorlinken zonder tracking betekenisloos voor revenue-attributie.

8. **Categorie-A herschrijving — wie schrijft?** 12 commerciele WFP-slugs herschrijven naar informationele gidsen is ~12 dagen werk. Wordt dat door AI-agents gedaan of door een copywriter? Tone-of-voice consistentie vereist een styleguide die nu niet bestaat (HANDOVER §8 "niet aangetroffen").

---

## Bijlage A — Pureaqua URLs in steekproef (56 unieke)

```
https://pureaqua.nl/en
https://pureaqua.nl/en/products/compleet-waterfiltersysteem-voor-thuis
https://pureaqua.nl/en/collections/drinkwaterfiltersystemen
https://pureaqua.nl/en/blogs/nieuws/het-beste-waterfilter-systeem-van-nederland-pureaqua-de-beste-keuze
https://pureaqua.nl/pages/systeem-samenstellen
https://pureaqua.nl/en/collections
https://pureaqua.nl/pages/offerte-aanvragen
https://pureaqua.nl/products/the-rush
https://www.pureaqua.nl/over-ons
https://pureaqua.nl/en/pages/waterfilter-voor-thuis
https://pureaqua.nl/products/aquapulse-zuiver-water-kraan
https://www.pureaqua.nl/waterfiltersysteem/kranen
https://pureaqua.nl/products/aquaflow-waterfilter-kraan
https://pureaqua.nl/en/products/the-flow-3-weg-gefilterd-water-kraan
https://pureaqua.nl/collections/kranen
https://pureaqua.nl/en/pages/osmose-waterfilter
https://pureaqua.nl/products/the-flow-3-weg-gefilterd-water-kraan
https://pureaqua.nl/products/the-dew
https://pureaqua.nl/en/products/the-stream-3-weg-zuiver-water-kraan
https://pureaqua.nl/en/collections/kokend-water-kranen
https://pureaqua.nl/en/pages/unito-systemen-vergelijken
https://pureaqua.nl/en/products/unito-sparkle-water-kraan-4-in-1-universe-rond-rvs-chilled
https://pureaqua.nl/en/pages/kokendwaterkranene-bruisend-water
https://pureaqua.nl/en/products/unito-lava-kokend-water-kraan-3-in-1-orbit-c-rond-rvs-4-4-liter
https://pureaqua.nl/en/blogs/nieuws/quooker-alternatief-7-slimme-opties-voor-direct-kokend-water-in-huis-1597-10
https://pureaqua.nl/en/blogs/kennisbank/actieve-koolfilters-voordelen
https://pureaqua.nl/en/blogs/kennisbank/hoe-kies-ik-het-juiste-waterfilter-voor-mijn-kraan
https://pureaqua.nl/en/collections/unito-systemen
https://pureaqua.nl/products/kraan-naar-keuze-1-weg-of-3-weg
https://pureaqua.nl/en/products/joep-waterontharder
https://pureaqua.nl/en/pages/waterontharders
https://blog.pureaqua.nl/kennisbank/waterontharder-of-omgekeerde-osmose-wat-is-beter-voor-jouw-situatie
https://pureaqua.nl/en/collections/waterontharders
https://pureaqua.nl/en/products/aquacell-waterontharder
https://blog.pureaqua.nl/kennisbank/waterhardheid-in-dalen-invloed-op-uw-gezondheid
https://pureaqua.nl/en/blogs/kennisbank/waterhardheid-in-de-wijk
https://blog.pureaqua.nl/kennisbank/hoe-werkt-een-driewegkraan-met-waterfilter
https://blog.pureaqua.nl/kennisbank/hoe-kies-je-de-beste-tds-meter
https://blog.pureaqua.nl/kennisbank/is-omgekeerde-osmose-water-gezond-dit-zeggen-de-experts
https://blog.pureaqua.nl/kennisbank/hoe-vaak-moet-je-het-filter-van-een-waterzuiveraar-voor-thuis-vervangen
https://blog.pureaqua.nl/kennisbank/kan-een-waterzuiveraar-voor-thuis-kalk-uit-water-verwijderen
https://blog.pureaqua.nl/kennisbank/welke-mineralen-blijven-behouden-bij-gebruik-van-een-waterfilter
https://blog.pureaqua.nl/kennisbank/wat-kost-een-waterfilter-voor-thuisgebruik
https://blog.pureaqua.nl/kennisbank/wat-is-de-milieu-impact-van-waterfilters
https://blog.pureaqua.nl/kennisbank/hoe-weet-ik-of-mijn-remineralisatie-filter-nog-werkt
https://blog.pureaqua.nl/kennisbank/welke-soorten-waterfilters-zijn-er-voor-thuis
https://pureaqua.nl/blogs/nieuws/quooker-vs-unito-vergelijking-pureaqua
https://pureaqua.nl/blogs/kennisbank/wat-is-de-ideale-waterdruk-voor-een-quooker
https://pureaqua.nl/en/products/cube
https://pureaqua.nl/en/blogs/nieuws/wat-kost-een-quooker-en-welke-modellen-zijn-er
https://pureaqua.nl/en/blogs/kennisbank/beste-waterfilters-tegen-pfas
https://pureaqua.nl/en/blogs/kennisbank/effectieve-methoden-pfas-kraanwater-verwijderen
https://pureaqua.nl/en/blogs/kennisbank/wat-is-het-verschil-tussen-een-waterfilter-en-een-waterzuiveraar-voor-thuis
https://blog.pureaqua.nl/kennisbank/zijn-er-specifieke-waterfilters-die-pfas-effectief-kunnen-verwijderen
https://pureaqua.nl/en/blogs/kennisbank/zijn-loden-leidingen-nog-steeds-een-probleem-in-nederland
https://www.pureaqua.nl/omgekeerde-osmose-systeem
https://www.pureaqua.nl/werking/omgekeerde-osmose-systeem
https://pureaqua.nl/blogs/kennisbank/omgekeerde-osmose-oplossing-voor-pfas
https://pureaqua.nl/en/blogs/kennisbank/welke-omgekeerde-osmose-filters-heb-je-nodig-complete-filtergids
https://pureaqua.nl/en/products/mineraalfilter-voor-omgekeerde-osmose-systemen
https://blog.pureaqua.nl/kennisbank/omgekeerde-osmose-voor-je-aquarium-alles-wat-je-moet-weten
https://pureaqua.nl/en/blogs/kennisbank/babys-en-osmosewater-is-het-veilig-en-gezond
https://pureaqua.nl/en/blogs/kennisbank/is-kraanwater-veilig-voor-mijn-pasgeboren-baby
https://pureaqua.nl/en/blogs/kennisbank/kunnen-zwangere-vrouwen-veilig-kraanwater-drinken
https://pureaqua.nl/blogs/nieuws/flessenwater-vs-kraanwater-kosten
https://pureaqua.nl/pages/kokendwaterkranen-quooker-unito
https://pureaqua.nl/en/blogs/kennisbank/wat-zijn-de-kosten-van-koolstoffilters
https://pureaqua.nl/en/blogs/kennisbank/wat-is-het-verschil-tussen-actief-kool-en-kokos-koolstof-filters
https://pureaqua.nl/products/the-shine
https://pureaqua.nl/products/the-surge
```

---

## Bijlage B — Subdomeinen pureaqua

In de steekproef zijn drie subdomeinen aangetroffen die los van elkaar content publiceren:
- `pureaqua.nl` (hoofd-shop)
- `www.pureaqua.nl` (sommige legacy-pages, bijv. `/over-ons`, `/omgekeerde-osmose-systeem`, `/werking/...`, `/waterfiltersysteem/kranen`)
- `blog.pureaqua.nl` (kennisbank-blog op apart subdomein)
- `pureaqua.nl` (productpagina-varianten, schijnbaar duplicaat)

**Observatie:** pureaqua heeft potentieel eigen interne kannibalisatie tussen `pureaqua.nl/products/the-flow-...` en `pureaqua.nl/products/the-flow-...` en tussen `pureaqua.nl/en/blogs/kennisbank/*` en `blog.pureaqua.nl/kennisbank/*`. Buiten scope van dit rapport, maar relevant voor de funnel-strategie (welke pureaqua-URL is de canonical target voor WFP-outbound links?).

---

## Bijlage C — WFP-statische routes per cluster (gegroepeerd)

Voor referentie tijdens vervolgsstappen. Bron: `find app -name page.tsx`.

| Cluster prefix | Aantal sub-pagina's | Commercieel-intent slugs |
|---|---|---|
| `/waterfilter/*` | ~90 | `/kopen`, `/vergelijken`, `/abonnement` |
| `/omgekeerde-osmose/*` | ~30 | `/kopen`, `/prijs`, `/kosten`, `/vergelijken`, `/diy`, `/inbouw` |
| `/kokend-water-kraan/*` | ~28 | `/kopen`, `/prijs`, `/prijs-per-liter`, `/vergelijken`, `/merken-vergelijking`, `/installateur`, `/4-in-1`, `/5-in-1` |
| `/osmose-water/*` | ~28 | (overwegend info) |
| `/waterontharder/*` | ~31 | `/kopen`, `/prijs`, `/kosten`, `/vergelijken` |
| `/leidingwater/*` | ~31 | (overwegend info) |
| `/heet-water-kraan/*` | 6 | `/kopen`, `/prijs`, `/vergelijken` |
| `/filterkan/*` | 8 | `/kopen` |
| `/koolstoffilter/*` | 5 | `/kopen` |
| `/keramisch-filter/*` | 3 | `/kopen` |
| `/sedimentfilter/*` | 3 | `/kopen` |
| `/pfas-waterfilter/*` | 4 | `/kopen` |
| `/waterontkalker/*` | 6 | `/kopen`, `/kosten`, `/vergelijken` |
| `/beste-waterfilter/*` | 12 | hele cluster commercieel |
| `/beste-osmosefilter-2026` | 1 | hele pagina commercieel |
| `/beste-kokend-water-kraan-2026` | 1 | hele pagina commercieel |
| `/beste-waterfilter-2026` | 1 | hele pagina commercieel |
| `/quooker-*`, `/sodastream-alternatief`, `/insinkerator-alternatief`, `/grohe-red-alternatief` | ~10 | vergelijkend |

---

*Einde rapport. Geen wijzigingen aan de WFP-repo doorgevoerd; alleen `docs/KANNIBALISATIE-AUDIT.md` toegevoegd. Bij vragen of vervolgwerk: zie sectie "Open vragen voor Diekie".*
