# SEO Content TODO — Volgende ronde

Bijgehouden per 2026-05-16. Aanvullen na elke build-sessie.

---

## Hoge prioriteit (direct zoekvolume) — Ronde 8

### Nieuwe clusters
- [ ] `/waterfilter/pesticiden` — pesticiden in drinkwater, landbouwgebieden, osmose
- [ ] `/osmose-water/mineralen` — welke mineralen mist osmosewater, dagelijkse behoefte
- [ ] `/waterontharder/zout-gebruik` — zoutverbruik optimaliseren, soorten zout vergelijken
- [ ] `/omgekeerde-osmose/installatie` — stap-voor-stap installatiegids, benodigde gereedschappen
- [ ] `/waterfilter/hardheid` — waterfilter voor hard water: ontharder vs osmose vs magneet
- [ ] `/kokend-water-kraan/energie` — energieverbruik vergelijking: boiler vs waterkoker vs pan
- [ ] `/leidingwater/kalium` — kalium in leidingwater: normen, gezondheid

### Kennisbank uitbreiding
- [ ] Seizoensartikel: `zomer-kraanwater-kwaliteit.mdx`
- [ ] Diepte-artikel: `osmose-vs-bronwater-vs-mineraalwater.mdx`
- [ ] Diepte-artikel: `pfas-in-nederland-2026.mdx`

---

## Middelhoge prioriteit

### Gemeenten uitbreiding (programmatisch)
- [ ] Overweeg `/pfas-waterfilter/[gemeente]` voor 30-40 hotspot-gemeenten
- [ ] Overweeg `/heet-water-kraan/[gemeente]` als volume het rechtvaardigt
- [ ] Overweeg `/drinkwaterfontein/[gemeente]` voor zakelijke lokale SEO

---

## Lage prioriteit / technisch

### Kennisbank kwaliteitsaudit
- [ ] Controleer alle MDX-artikelen op woordaantal (min 700 woorden via check-content.mjs)
- [ ] Controleer of alle MDX-artikelen in sitemap zitten (via getKennisbankSlugs())
- [ ] Verwijder duplicate kennisbank MDX bestanden (bijv. `drinkwater-norm-nederland.mdx` en `drinkwater-normen-nederland.mdx`)

### Technische SEO
- [ ] Audit canonical URLs zijn alle pagina's correct geconfigureerd?
- [ ] Open Graph afbeeldingen toevoegen per cluster-hub
- [ ] Lighthouse audit uitvoeren (target: >90 performance, >95 SEO)
- [ ] Core Web Vitals check na Vercel-deploy
- [ ] Structured data validatie via Google Rich Results Test

### Ideen voor ronde 9+
- Interactief waterhardheids-zoekwidget (client component, apart bundle)
- Kennisbank uitbreiding: seizoensgebonden artikelen
- Video-schema markup toevoegen als YouTube-content beschikbaar
- Pricing-schema markup op vergelijkingspagina's
- FAQ-schema cross-check met Google Search Console vertoningen
- `/brouwwater/recepten` waterprofielen per bierstijl als interactieve tool
- Interactief filter-vergelijkingstool (client component)

---

## Afgerond

### Ronde 1 — Basis clusters
- [x] Omgekeerde osmose: hub, kopen, wat-is, voor-thuis, vergelijken
- [x] Kokend water kraan: hub, vergelijken, met-filter
- [x] Heet water kraan: hub, kopen, vergelijken, installeren, prijs, filter
- [x] Osmose filter: hub, kopen, werking
- [x] Waterhardheid: hub + 400 gemeente-pagina's
- [x] Waterontharder: hub, kopen, vergelijken, zout, werking, zoutloos

### Ronde 2 — Uitbreiding
- [x] PFAS cluster: hub, kopen, testen, normen-2026, gebieden-nederland
- [x] Waterontkalker: hub, werking, vergelijken, kopen, kosten, soorten, vs-waterontharder
- [x] Kalk-in: hub, filter, cv-ketel, douche, wasmachine
- [x] Waterfilter stoffen: fluoride, hormonen, koper, legionella, zink, nitriet, milieu, subsidie
- [x] Leidingwater: hard-water

### Ronde 3 — High-priority gaps
- [x] Leidingwater: chloor, verontreinigingen, bacterien
- [x] Kraanwater: bacterien, hardheid
- [x] Waterontharder: regeneratie, hoe-lang
- [x] Waterfilter: hond-kat
- [x] Osmosewater: espresso
- [x] Brouwwater: hub, osmose, remineraliseren, tds-profiel
- [x] Vergelijkingen: vs-waterkoker, vs-gedistilleerd, vs-osmose, filterkan/vs-waterkraan-filter
- [x] Situationeel: tiny-house, boot-jacht, woonboot, zomerhuis, oudere-woning
- [x] Waterkwaliteit: hub, nederland, europa, test

### Ronde 4 — Technische verdieping + nieuwe clusters
- [x] Hoge prioriteit: hormonen-medicijnen, osmose/installatietijd, osmose-filter/vervangen, kokend-water-kraan/huurwoning
- [x] Filterkan: hub, werking, brita, bwt, brita-vs-bwt, filter-vervangen
- [x] Drinkwaterfontein: hub, kantoor, thuis, kopen
- [x] Reisfilter: hub, lifestraw, sawyer
- [x] Technische verdieping: waterontharder/installeren+storingen, osmose/membraan-vervangen+waterdruk+vs-ultrafiltratie, kokend-water-kraan/onderhoud

### Ronde 5 — Nieuwe clusters uitbreiding
- [x] Alkalisch water: hub, gezondheid, ionisator, vs-osmose
- [x] Bruisend water: hub, kraan, sodastream, co2
- [x] Babywater: hub, welk-water, osmose
- [x] Osmose water uitbreidingen: vs-mineraalwater, vs-bronwater, gezondheid
- [x] Waterzuivering: hub, grondwater, oppervlaktewater, thuis
- [x] Situationeel: waterfilter/caravan
- [x] pH & mineralen: kraanwater/ph, leidingwater/ijzer
- [x] Ontbrekende sub-pages: omgekeerde-osmose/vs-ultrafiltratie (al ronde 4), kokend-water-kraan/installeren

### Ronde 6 — Zakelijk cluster + osmose verdieping + niche (15 paginas)
- [x] Zakelijk: waterfilter/horeca, waterfilter/bedrijf, drinkwaterfontein/horeca, waterontharder/zakelijk
- [x] Osmose verdieping: osmose-water/remineraliseren, osmose-filter/zonder-tank, omgekeerde-osmose/rendement, osmose-water/smaak
- [x] Niche & vergelijking: waterfilter/vijver, waterfilter/studentenkamer, kokend-water-kraan/quooker
- [x] Drinkwater verdieping: waterfilter/arseen, leidingwater/nitraat, leidingwater/mangaan, kraanwater/kwaliteit-verbeteren

### Ronde 7 — Gezondheid, kosten, gevaarlijke stoffen, seizoen (12 paginas)
- [x] Aquarium & niche: waterfilter/aquarium (stikstofcyclus, 5 filtertypen, osmose voor zoet/zout)
- [x] Gezondheid: osmose-water/gezondheid (WHO-advies, EFSA 2022, risicogroepen)
- [x] Huren vs kopen: waterontharder/huren (TCO 5/10 jaar, 4 aanbieders)
- [x] Vergelijkingen: waterfilter/kan-vs-kraan (filterprestaties, kosten, gebruiksgemak)
- [x] Kosten: omgekeerde-osmose/kosten (TCO vergelijking, terugverdientijd vs flessenwater)
- [x] Gevaarlijke stoffen: waterfilter/lood (loden leidingen, EU-norm 5 ug/L 2036)
- [x] Gevaarlijke stoffen: leidingwater/medicijnresten (51 stoffen RIVM 2023, osmose 80-95%)
- [x] Gevaarlijke stoffen: waterfilter/microplastics (WHO 2022, RO 99%+, nanoplastics)
- [x] Seizoen: kraanwater/zomer (blauwalgen, THMs, Legionella-risico)
- [x] Veiligheid: kraanwater/legionella-thuis (doorspoelen, boiler 60C, verhuurder)
- [x] Technisch: leidingwater/chlooramine (chloor vs chlooramine, catalytisch kool, dialyse)
- [x] Gebruik: osmose-water/koken (babyvoeding WHO-advies, koffie/thee SCA-normen)

---

*Bijgewerkt: 2026-05-16 — 4088 statische pagina's na ronde 7*
