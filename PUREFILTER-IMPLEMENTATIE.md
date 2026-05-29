# PureFilter Mineral+ - implementatiebesluit en bewijsdossier

Status: eerste ronde uitgevoerd op 2026-05-29. Bron: `deepresearchreport_PureFilter.md`
(onderzoeks- en contentpakket). Dit document legt vast wat is gebouwd, wat bewust is
overgeslagen, en welk bewijs nodig is voordat er meer PureFilter-content live mag.

## Besluit (door gebruiker bevestigd)

Eerlijke, evidence-first **reviewpagina** publiceren, geen volledige branded cluster en geen
near-duplicates van bestaande content. Reden: het onderzoekspakket kon GEEN enkele
PureFilter-claim primair verifieren (geen certificaatnummers, listings of labrapporten), en de
non-branded onderwerpen bestaan al op de site.

## Gebouwd

- `/purefilter-review` - product-/reviewpagina volgens het patroon van `/joep-waterontharder` en
  `/the-source`. Article + FAQPage + BreadcrumbList + Brand-schema, QuickAnswer, AuthorBox +
  MethodologyBadge, claim-bewijs-tabel, beoordelingsmethode-blok, commerciele disclosure.
  Geintegreerd in sitemap, `/waterfilter`-hub, `/waterfilter/onder-aanrecht` en `llms.txt`.

## Bewust overgeslagen (met reden)

| Pakket-voorstel | Reden voor skip | Bestaand equivalent |
|---|---|---|
| /waterfilter-pfas | kannibalisatie | /pfas-waterfilter, /waterfilter/pfas, /keuzehulp/pfas-lood + MDX |
| /waterfilter-microplastics | kannibalisatie | /waterfilter/microplastics + 3 MDX |
| /onder-aanrecht-waterfilter | kannibalisatie | /waterfilter/onder-aanrecht |
| /beste-waterfilter-onder-aanrecht | kannibalisatie | /beste-waterfilter, /beste-waterfilter-2026 |
| /fluoride-uit-water-filteren | kannibalisatie | /waterfilter/fluoride, /drinkwater/fluoride |
| /zware-metalen-uit-kraanwater-filteren | kannibalisatie | /stoffen-in-drinkwater/zware-metalen |
| /medicijnresten-uit-drinkwater-filteren | kannibalisatie | /waterfilter/medicijnresten + MDX |
| /mineralisatie-waterfilter, /reverse-osmosis-mineralen | kannibalisatie | /omgekeerde-osmose/remineralisatie, /osmose-water/remineralisatie |
| /nsf-42-53-uitleg, /waterfilter-certificeringen-uitgelegd | kannibalisatie | /keurmerken/nsf-ansi-42-53, /keurmerken |
| /purefilter-vs-brita, -vs-zerowater, -vs-aquatru, -vs-aqualine | dun + verboden bij asymmetrisch bewijs | 0 geverifieerde PureFilter-data; pakket: "geen winnaar bij asymmetrisch bewijs" |
| /brita-alternatief, /zerowater-alternatief, /aquatru-alternatief | geen geverifieerde productbasis | n.v.t. |
| /swedish-mineral-rock | merkclaim zonder kwantitatief bewijs | behandeld als onderdeel van de review |

## Bewijsdossier - nodig vóór verdere PureFilter-publicatie

Het pakket noemt als eerste praktische actie: niet meer copy schrijven, maar een bewijsdossier
aanleggen. Verzamel het volgende bij de fabrikant/verkoper en update daarna de claim-tabel op
`/purefilter-review` (en pas dan eventueel vergelijkingspagina's overwegen):

- [ ] Live product-URL en officiele specsheet/PDF
- [ ] Producttype, filtertechnologie en installatiemethode (bevestigd)
- [ ] Per contaminant (PFAS, microplastics, zware metalen, fluoride, medicijnresten): testrapport
      met methode, deeltjesgrootte/parameter en resultaat
- [ ] NSF/ANSI 42/53/61/372: verifieerbare listingnummers + certifier (niet alleen logo/standaard)
- [ ] Onderhoud: filtervervangingsinterval en -kosten
- [ ] Post-filter wateranalyse voor de remineralisatie-claim (mg/L Mg/Ca/K)
- [ ] Prijs en garantie

Publicatieregel (uit het pakket): geen harde product- of certificeringsclaim live zonder
`evidence_status=verified`. Tot die tijd blijft elke claim gemarkeerd als geclaimd-niet-bevestigd.
