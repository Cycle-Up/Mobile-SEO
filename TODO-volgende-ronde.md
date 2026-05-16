# SEO Content TODO — Volgende ronde

Bijgehouden per 2026-05-16. Aanvullen na elke build-sessie.

---

## Hoge prioriteit (direct zoekvolume)

### Nieuwe clusters ronde 5
- [ ] `/alkalisch-water/` hub — alkalisch water/ionisator trend (groeiend)
  - `/alkalisch-water/gezondheid` — claims vs wetenschap
  - `/alkalisch-water/ionisator` — waterionisator vergelijking
  - `/alkalisch-water/vs-osmose` — wanneer alkalisch vs osmose
- [ ] `/bruisend-water/` hub — bruisend water thuis
  - `/bruisend-water/kraan` — bruisend water kraan kopen
  - `/bruisend-water/sodastream` — SodaStream vs bruisend waterkraan
  - `/bruisend-water/co2` — CO2-systeem voor bruisend water
- [ ] `/babywater/` — water voor babyvoeding, flesvoeding (hoge urgentie: gezondheidszoekintentie)
  - `/babywater/welk-water` — welk water gebruiken voor flesvoeding
  - `/babywater/osmose` — is osmosewater veilig voor baby's
- [ ] `/osmose-water/vs-mineraalwater` — verschil osmose vs mineraalwater
- [ ] `/osmose-water/vs-bronwater` — verschil osmose vs bronwater
- [ ] `/waterfilter/caravan` — waterfilter voor caravan/camper

### Ontbrekende sub-pages bestaande clusters
- [ ] `/omgekeerde-osmose/vs-ultrafiltratie` ✅ (gedaan ronde 4)
- [ ] `/waterfilter/kan-vs-kraan` — uitgebreidere vergelijking (nu enkel /filterkan/vs-waterkraan-filter)
- [ ] `/kokend-water-kraan/installeren` — installatiegids kokend waterkraan

---

## Middelhoge prioriteit

### Waterzuivering cluster
- [ ] `/waterzuivering/` hub — hoe werkt drinkwaterzuivering in NL
- [ ] `/waterzuivering/grondwater` — grondwater zuiveren uitgelegd
- [ ] `/waterzuivering/oppervlaktewater` — oppervlaktewater zuiveren (Maas, Rijn)
- [ ] `/waterzuivering/thuis` — thuiszuivering vs professioneel

### Aquarium & dier cluster
- [ ] `/waterfilter/aquarium` — waterfilter voor aquarium (zoet/zout)
- [ ] `/waterfilter/vijver` — vijverfilter vergelijking

### Zakelijk cluster
- [ ] `/waterfilter/horeca` — waterfilter voor restaurant/café
- [ ] `/waterfilter/bedrijf` — zakelijk waterfilter grootverbruik

### pH & mineralen verdieping
- [ ] `/kraanwater/ph` — pH van kraanwater, wanneer te laag/hoog
- [ ] `/osmose-water/remineraliseren` — remineralisatie methoden uitgebreid
- [ ] `/leidingwater/ijzer` — ijzer in kraanwater: bruine vlekken, smaak

---

## Lage prioriteit / technisch

### Kennisbank kwaliteitsaudit
- [ ] Controleer alle 307 MDX-artikelen op woordaantal (min 700 woorden via check-content.mjs)
- [ ] Controleer of alle MDX-artikelen in sitemap zitten (via getKennisbankSlugs())
- [ ] Voeg ontbrekende kennisbank-routes toe aan sitemap indien nodig
- [ ] Verwijder duplicate kennisbank MDX bestanden (bijv. `drinkwater-norm-nederland.mdx` en `drinkwater-normen-nederland.mdx`)

### Technische SEO
- [ ] Audit canonical URLs — zijn alle pagina's correct geconfigureerd?
- [ ] Open Graph afbeeldingen toevoegen per cluster-hub
- [ ] Lighthouse audit uitvoeren (target: >90 performance, >95 SEO)
- [ ] Core Web Vitals check na Vercel-deploy
- [ ] Structured data validatie via Google Rich Results Test

### Gemeente-varianten uitbreiding
- [ ] Overweeg `/pfas-waterfilter/[gemeente]` voor 30-40 hotspot-gemeenten
- [ ] Overweeg `/heet-water-kraan/[gemeente]` als volume het rechtvaardigt
- [ ] Overweeg `/drinkwaterfontein/[gemeente]` voor zakelijke lokale SEO

---

## Ideen voor ronde 6+

- Interactief waterhardheids-zoekwidget (client component, apart bundle)
- Kennisbank uitbreiding: seizoensgebonden artikelen (zomer kraanwater kwaliteit, winter bevriezing)
- Video-schema markup toevoegen als YouTube-content beschikbaar
- Pricing-schema markup op vergelijkingspagina's
- FAQ-schema cross-check met Google Search Console vertoningen
- `/brouwwater/recepten` — waterprofielen per bierstijl als interactieve tool
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

---

*Bijgewerkt: 2026-05-16 — 4046 statische pagina's na ronde 4*
