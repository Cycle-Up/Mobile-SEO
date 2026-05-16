# SEO Content TODO — Volgende ronde

Bijgehouden per 2026-05-16. Aanvullen na elke build-sessie.

---

## Hoge prioriteit (direct zoekvolume)

### Ontbrekende sub-pages bestaande clusters
- [ ] `/waterfilter/hormonen-medicijnen` → uitbreiden (pil-in-water is mediageniek)
- [ ] `/omgekeerde-osmose/installatietijd` — hoe lang duurt installatie osmosefilter
- [ ] `/osmose-filter/vervangen` — wanneer osmosefilter vervangen
- [ ] `/kokend-water-kraan/huurwoning` — mag ik een kokend-waterkraan in huurwoning?

---

## Middelhoge prioriteit

### Nieuwe clusters
- [ ] `/filterkan/` hub — filterkraan hub met sub-pagina's (kopen, brita, bwt, filter-vervangen)
- [ ] `/drinkwaterfontein/` — kantoor/thuis drinkwaterfontein vergelijking
- [ ] `/reisfilter/` — draagbare waterfilters voor reizen (Lifestraw, Sawyer, Grayl)

### Vergelijkingspagina's
- [ ] `/waterfilter/kan-vs-kraan` — uitgebreidere vergelijking filterkraan vs filterkan (nu enkel `/filterkan/vs-waterkraan-filter`)
- [ ] `/omgekeerde-osmose/vs-ultrafiltratie` — RO vs UF verschil

### Technische verdieping
- [ ] `/waterontharder/installeren` — stap-voor-stap installatiegids
- [ ] `/waterontharder/storingen` — veelvoorkomende storingen en oplossingen
- [ ] `/omgekeerde-osmose/membraan-vervangen` — wanneer en hoe membraan vervangen
- [ ] `/omgekeerde-osmose/waterdruk` — minimale waterdruk voor osmosefilter
- [ ] `/kokend-water-kraan/onderhoud` — onderhoudsplan kokend water kraan

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

### Nieuwe gemeente-varianten
- [ ] Overweeg `/pfas-waterfilter/[gemeente]` voor hotspot-gemeenten (30-40 gemeenten)
- [ ] Overweeg `/heet-water-kraan/[gemeente]` als volume het rechtvaardigt

---

## Ideen voor ronde 4+

- Interactief waterhardheids-zoekwidget (client component, apart bundle)
- Kennisbank uitbreiding: seizoensgebonden artikelen (zomer kraanwater kwaliteit, winter bevriezing)
- Video-schema markup toevoegen als YouTube-content beschikbaar
- Pricing-schema markup op vergelijkingspagina's
- FAQ-schema cross-check met Google Search Console vertoningen
- `/brouwwater/recepten` — waterprofielen per bierstijl als interactieve tool

---

## Afgerond (ronde 1-3)

### Ronde 1 — Basis clusters
- [x] Omgekeerde osmose: hub, kopen, wat-is, voor-thuis, vergelijken
- [x] Kokend water kraan: hub, vergelijken, met-filter
- [x] Heet water kraan: hub, kopen, vergelijken, installeren, prijs, filter
- [x] Osmose filter: hub, kopen, werking
- [x] Waterhardheid: hub + 400 gemeente-pagina's
- [x] Waterontharder: hub, kopen, vergelijken, zout, werking, zoutloos
- [x] Osmosewater: hub, kopen, koffie

### Ronde 2 — Uitbreiding
- [x] PFAS cluster: hub, kopen, testen, normen-2026, gebieden-nederland
- [x] Waterontkalker: hub, werking, vergelijken, kopen, kosten, soorten, vs-waterontharder
- [x] Kalk-in: hub, filter, cv-ketel, douche, wasmachine
- [x] Waterfilter stoffen: fluoride, hormonen, koper, legionella, zink, nitriet, milieu, subsidie
- [x] Leidingwater: hard-water (+ bestaande gemeente-pagina's)

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

---

*Bijgewerkt: 2026-05-16 — 4031 statische pagina's na ronde 3*
