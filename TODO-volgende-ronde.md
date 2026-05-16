# SEO Content TODO — Volgende ronde

Bijgehouden per 2026-05-16. Aanvullen na elke build-sessie.

---

## Hoge prioriteit (direct zoekvolume) — Ronde 9

### Nieuwe clusters
- [ ] `/waterfilter/waterverzachter` — verschil waterfilter vs waterverzachter (SEO-synoniemen)
- [ ] `/osmose-water/ph` — pH van osmosewater: zuur, neutraal of basisch?
- [ ] `/omgekeerde-osmose/onderhoud` — onderhoudsschema osmosefilter, filtervervanging, reiniging
- [ ] `/waterontharder/kosten` — aanschaf, jaarlijks zout, TCO vergelijking huren vs kopen
- [ ] `/leidingwater/sulfaat` — sulfaat in leidingwater: smaak, normen, filter
- [ ] `/kraanwater/tds` — TDS meten in kraanwater, wat betekenen de waarden
- [ ] `/waterfilter/koper` — koper in leidingwater via koperen leidingen, EU-norm 2 mg/L

### Kennisbank diepte-artikelen (MDX)
- [ ] `pfas-in-nederland-2026.mdx` — actuele PFAS-hotspots, watermaatschappij maatregelen
- [ ] `osmose-water-voor-planten.mdx` — is osmosewater goed of slecht voor kamerplanten?
- [ ] `drinkwater-statistieken-nederland.mdx` — CBS/RIVM data visualisatie

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
- [ ] Audit canonical URLs zijn alle paginas correct geconfigureerd?
- [ ] Open Graph afbeeldingen toevoegen per cluster-hub
- [ ] Lighthouse audit uitvoeren (target: >90 performance, >95 SEO)
- [ ] Core Web Vitals check na Vercel-deploy
- [ ] Structured data validatie via Google Rich Results Test

### Ideen voor ronde 10+
- Interactief waterhardheids-zoekwidget (client component, apart bundle)
- Video-schema markup toevoegen als YouTube-content beschikbaar
- Pricing-schema markup op vergelijkingspaginas
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
- [x] Waterhardheid: hub + 400 gemeente-paginas
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
- [x] Aquarium & niche: waterfilter/aquarium
- [x] Gezondheid: osmose-water/gezondheid
- [x] Huren vs kopen: waterontharder/huren
- [x] Vergelijkingen: waterfilter/kan-vs-kraan, omgekeerde-osmose/kosten
- [x] Gevaarlijke stoffen: waterfilter/lood, leidingwater/medicijnresten, waterfilter/microplastics
- [x] Seizoen & veiligheid: kraanwater/zomer, kraanwater/legionella-thuis
- [x] Technisch & gebruik: leidingwater/chlooramine, osmose-water/koken

### Ronde 8 — Installatie, mineralen, energie, zout (7 paginas)
- [x] Gevaarlijke stoffen: waterfilter/pesticiden (0,1 ug/L EU-norm, RIVM 15% overschreding)
- [x] Mineralen: osmose-water/mineralen (Ca/Mg vergelijkingstabel, remineralisatieopties)
- [x] Zout: waterontharder/zout-gebruik (tablet vs granulaat vs blok, KCl alternatief)
- [x] Installatie: omgekeerde-osmose/installatie (8-stappen gids, waterdruk, druktank)
- [x] Hard water: waterfilter/hardheid (ontharder vs osmose vs magneet, keuzewijzer)
- [x] Energie: kokend-water-kraan/energie (standby 15W, per-kopje vergelijking, eco-stand)
- [x] Mineralen: leidingwater/kalium (KCl vs NaCl, hyperkaliemie-waarschuwing nierinsufficiëntie)

---

*Bijgewerkt: 2026-05-16 — 4092 statische paginas na ronde 8*
