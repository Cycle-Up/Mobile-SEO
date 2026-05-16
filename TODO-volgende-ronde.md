# SEO Content TODO — Volgende ronde

Bijgehouden per 2026-05-16. Aanvullen na elke build-sessie.

---

## Hoge prioriteit (direct zoekvolume)

### Nieuwe clusters
- [ ] `/brouwwater/` hub — bier brouwen met osmosewater, homebrew community (groeiend)
  - `/brouwwater/osmose`
  - `/brouwwater/remineraliseren`
  - `/brouwwater/tds-profiel`
- [ ] `/waterfilter/hond-kat` — huisdier drinkwater filter (600+ imp/mnd)
- [ ] `/waterfilter/hormonen-medicijnen` → uitbreiden (pil-in-water is mediageniek)
- [ ] `/osmose-water/espresso` — barista/espresso apart van koffie (andere zoekintentie)
- [ ] `/waterontharder/hoe-lang` — levensduur waterontharder (populaire vraag)

### Ontbrekende sub-pages bestaande clusters
- [ ] `/kraanwater/bacterien` — kraanwater bacteriën: wanneer gevaarlijk?
- [ ] `/kraanwater/hardheid` — hardheid kraanwater per regio
- [ ] `/leidingwater/chloor` — chloor in leidingwater smaken/ruiken
- [ ] `/leidingwater/verontreinigingen` — wat zit er in leidingwater
- [ ] `/leidingwater/bacterien` — legionella + andere bacteriën in leidingwater
- [ ] `/omgekeerde-osmose/installatietijd` — hoe lang duurt installatie osmosefilter
- [ ] `/osmose-filter/vervangen` — wanneer osmosefilter vervangen
- [ ] `/kokend-water-kraan/huurwoning` — mag ik een kokend-waterkraan in huurwoning?
- [ ] `/waterontharder/regeneratie` — regeneratiecyclus uitgelegd

---

## Middelhoge prioriteit

### Vergelijkingspaginas
- [ ] `/waterfilter/vs-waterkoker` — waterfilter vs waterkoker voor koken
- [ ] `/osmose-water/vs-gedistilleerd` — verschil osmose en gedistilleerd water
- [ ] `/waterontharder/vs-osmose` — wanneer ontharder, wanneer osmose
- [ ] `/filterkan/vs-waterkraan-filter` — filterkraan vs filterkanne

### Lokale/situationele paginas
- [ ] `/waterfilter/tiny-house` — waterfilter voor tiny house
- [ ] `/waterfilter/boot-jacht` — boot/jacht waterfilter
- [ ] `/waterfilter/woonboot` — woonboot waterfilter specifiek
- [ ] `/waterfilter/zomerhuis` — zomerhuis/vakantiehuis waterfilter
- [ ] `/waterfilter/oudere-woning` — lood/koperrisico bij oude leidingen

### Kwaliteits-clusters (nog niet gebouwd)
- [ ] `/waterkwaliteit/` hub — hub voor waterkwaliteit NL
- [ ] `/waterkwaliteit/nederland` — overzicht drinkwaterkwaliteit NL
- [ ] `/waterkwaliteit/europa` — vergelijking drinkwater EU-landen
- [ ] `/waterkwaliteit/test` — hoe test je waterkwaliteit zelf

---

## Lage prioriteit / technisch

### Kennisbank kwaliteitsaudit
- [ ] Controleer alle 260+ MDX-artikelen op woordaantal (min 700 woorden via check-content.mjs)
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
- [ ] Gemeente-paginas voor `/kalk-in/[gemeente]` uitbreiden (al aanwezig)
- [ ] Overweeg `/pfas-waterfilter/[gemeente]` voor hotspot-gemeenten (30-40 gemeenten)
- [ ] Overweeg `/heet-water-kraan/[gemeente]` als volume het rechtvaardigt

---

## Ideen voor ronde 3+

- Interactief waterhardheids-zoekwidget (client component, apart bundle)
- Kennisbank uitbreiding: seizoensgebonden artikelen (zomer kraanwater kwaliteit, winter bevriezing)
- Video-schema markup toevoegen als YouTube-content beschikbaar
- Pricing-schema markup op vergelijkingspaginas
- FAQ-schema cross-check met Google Search Console vertoningen

---

*Bijgewerkt: 2026-05-16*
