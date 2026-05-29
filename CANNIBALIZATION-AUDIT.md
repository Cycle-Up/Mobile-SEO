# Keyword-cannibalisatie audit — osmose-cluster

Datum: 2026-05-29. Uitgevoerd op branch `claude/project-understanding-next-steps-0V102`.

## Aanleiding

`HANDOVER.md` (sectie 5, "Issues om te valideren", punt 2) markeerde een nooit uitgevoerde
cannibalisatie-audit: *"Is er content-cannibalization tussen `/omgekeerde-osmose`,
`/osmose-filter`, `/osmose-water` en verwante slugs?"*. Met inmiddels 529 `page.tsx`-bestanden
is dit een reeel en groeiend risico: meerdere URL's targeten hetzelfde zoekintentie, waardoor
Google de ranking-signalen verdeelt en geen van de pagina's optimaal scoort.

## Methode

Alle 84 osmose-gerelateerde `page.tsx`-bestanden zijn geinventariseerd op `title`, `canonical`
en content-diepte (regelaantal als proxy). Pagina's met overlappende zoekintentie zijn
geclusterd. Per cluster is een **primaire pagina** gekozen op basis van (a) content-diepte en
(b) strategische plaatsing volgens `CONTENT_BACKLOG.md` (de `/omgekeerde-osmose/*`-subtree is
de aangewezen commerciele cluster; `/osmose-water/*` is de water-eigenschappen-cluster;
`/vergelijken/*` is de vergelijkings-cluster).

De **programmatische** `/osmose-filter/[gemeente]`-pagina's (350 stuks) zijn uniek
(gemeente-targeting) en vallen buiten deze audit.

## Toegepaste fixes (hoog vertrouwen)

14 secundaire pagina's wijzen hun `canonical` nu naar de primaire pagina. Dit consolideert
ranking-signalen zonder content te verwijderen of links te breken. Reversibel.

| Secundaire pagina (canonical aangepast) | regels | → Primaire pagina | regels |
|---|--:|---|--:|
| `/osmose-water/gezond` | 227 | `/osmose-water/gezondheid` | 419 |
| `/osmose-water/gezondheidsvoordelen` | 365 | `/osmose-water/gezondheid` | 419 |
| `/osmose-water/remineraliseren` | 339 | `/osmose-water/remineralisatie` | 360 |
| `/omgekeerde-osmose/remineralisatie` | 197 | `/osmose-water/remineralisatie` | 360 |
| `/osmose-water/smaak-verbetering` | 213 | `/osmose-water/smaak` | 424 |
| `/omgekeerde-osmose/smaak` | 288 | `/osmose-water/smaak` | 424 |
| `/omgekeerde-osmose/waterdruk` | 344 | `/omgekeerde-osmose/druk` | 366 |
| `/osmose-water/espresso` | 385 | `/osmose-water/koffie-espresso` | 436 |
| `/osmose-water/baby-flesvoeding` | 389 | `/osmose-water/baby` | 438 |
| `/osmose-water/vs-bronwater` | 299 | `/vergelijken/osmose-vs-bronwater` | 314 |
| `/osmose-filter/kopen` | 507 | `/omgekeerde-osmose/kopen` | 526 |
| `/osmose-filter/capaciteit` | 230 | `/omgekeerde-osmose/capaciteit` | 391 |
| `/osmose-filter/installatie` | 235 | `/omgekeerde-osmose/installatie` | 428 |
| `/osmose-filter/prijs` | 436 | `/omgekeerde-osmose/prijs` | 649 |

Toelichting keuzes:
- **`gezond`/`gezondheid`/`gezondheidsvoordelen`** — drie pagina's voor de zoekintentie
  "is osmosewater gezond". `/gezondheid` is het diepst en wint.
- **`remineralisatie`/`remineraliseren`/`smaak`** — synoniem-duplicaten binnen en tussen
  subtrees. Geconsolideerd in de `/osmose-water/*`-eigenschappencluster (diepste pagina's).
- **`/osmose-filter/kopen` → `/omgekeerde-osmose/kopen`** — `CONTENT_BACKLOG.md` wijst
  `/omgekeerde-osmose/kopen` expliciet aan als money-page voor "osmose filter kopen" (2.847 vol.)
  en "reverse osmosis water filter kopen" (8.470 vol.). De `/osmose-filter/*`-variant
  kannibaliseerde dit.

## Aanbevolen, NIET toegepast (vereist GSC-validatie)

Deze gevallen zijn echte overlap, maar de primaire-keuze raakt pagina's die mogelijk al
eigen long-tail rankings hebben. Zonder Google Search Console-data is consolidatie hier
riskant (je kunt een pagina deindexeren die wel verkeer trekt). Eerst GSC-impressies per
URL bekijken, dan beslissen.

1. **Hub-niveau:** `/osmose-filter` (827r) vs `/omgekeerde-osmose` (855r) vs
   `/omgekeerde-osmose/filter` (558r). Drie hubs voor "osmose filter" / "omgekeerde osmose".
   Hoog-stakes: `/osmose-filter` is bovendien de parent van 350 gemeente-pagina's.
   Aanbeveling: hou `/omgekeerde-osmose` als hoofdhub, herpositioneer `/osmose-filter` naar
   een duidelijk eigen intentie of canonicaliseer na GSC-check.
2. **`werking`:** `/osmose-filter/werking` (747r, sterk) vs `/filtertechnieken/omgekeerde-osmose`
   (290r) vs de hubs. De `/osmose-filter/werking`-pagina is juist erg compleet — niet zomaar
   wegcanonicaliseren.
3. **`onderhoud`:** `/osmose-filter/onderhoud` (579r) vs `/omgekeerde-osmose/onderhoud` (445r).
   Hier is de `osmose-filter`-versie dieper dan de strategische primaire — keuze afwegen.
4. **`vervangen`:** `/osmose-filter/vervangen` (387r) vs `/onderhoud/osmose-filter-vervangen`
   (361r) vs `/omgekeerde-osmose/membraan-vervangen` (348r). Drie pagina's, grotendeels
   dezelfde intentie.
5. **`capaciteit` binnen subtree:** `/omgekeerde-osmose/capaciteit` (391r) vs
   `/omgekeerde-osmose/capaciteit-liter` (349r) — synoniem-duplicaat.
6. **`installatie` binnen subtree:** `/omgekeerde-osmose/installatie` (428r) vs
   `/omgekeerde-osmose/installatietijd` (387r) vs `/omgekeerde-osmose/diy` (324r).
7. **`prijs`/`kosten`:** `/omgekeerde-osmose/prijs` (649r) vs `/omgekeerde-osmose/kosten` (498r).
8. **`afvalwater`:** `/omgekeerde-osmose/afvalwater` (verhouding/besparing) vs
   `/omgekeerde-osmose/rendement` (afvalwater verhouding/efficientie) — overlap op
   "afvalwater verhouding". `/afvalwater-hergebruik` en `/zonder-afvalwater` zijn wel distinct.
9. **`membraan`:** `/omgekeerde-osmose/membraan` (types/levensduur/vervanging) vs
   `/omgekeerde-osmose/levensduur` (RO-membraan levensduur) — overlap.
10. **`koffie`:** `/osmose-water/koffie` (469r, breed) vs `/osmose-water/koffie-espresso` (436r,
    espresso-specifiek). Te overwegen: differentieer scherp of consolideer.
11. **`baby` cross-subtree:** `/babywater/osmose` (266r) overlapt met `/osmose-water/baby`.

## Vervolgstappen (los van deze audit)

- **Interne links bijwerken:** verwijs interne links/navigatie naar de gekozen primaire URL's
  i.p.v. de gecanonicaliseerde varianten, zodat link-equity ook intern stroomt.
- **Sitemap:** overweeg gecanonicaliseerde secundaire URL's uit `app/sitemap.ts` te halen
  (Google negeert ze toch via canonical, maar het is netter).
- **GSC koppelen:** zodra Search Console-toegang er is, de "aanbevolen niet-toegepaste"
  gevallen valideren op werkelijke impressies/posities voordat verder geconsolideerd wordt.
- **Zelfde audit voor andere clusters:** `/waterontharder` vs `/waterontkalker`,
  `/leidingwater` vs `/kraanwater` vertonen vergelijkbare synoniem-overlap.

---

## Waterontharder-cluster consolidatie (2026-05-29)

Structuur-gebaseerd (geen GSC). De commerciele TSX-cluster (`/waterontharder/*`, in nav en
sitemap) is gekozen als primair; duplicaat kennisbank-MDX en duplicaat-TSX wijzen via
`canonical` naar de primaire pagina. Niets verwijderd; alle pagina's blijven leesbaar.
De kennisbank-template (`app/kennisbank/[slug]/page.tsx`) leest nu een optioneel
`canonical`-frontmatterveld zodat MDX naar een TSX-pagina kan canonicaliseren.

### TSX -> TSX (zelfde commerciele cluster)
| Zwakker (canonical aangepast) | -> Primair | Reden |
|---|---|---|
| `/waterontharder/zout-gebruik` | `/waterontharder/zout-verbruik` | beide "zoutverbruik" |
| `/waterontharder/storingen-checklist` | `/waterontharder/storingen` | beide diagnose/oplossingen |
| `/waterontharder/kosten` | `/waterontharder/prijs` | beide kosten/prijs; prijs is dieper |

### Kennisbank-MDX -> TSX (zelfde zoekintentie)
| MDX (canonical -> TSX) | Primair |
|---|---|
| waterontharder-hoe-lang | /waterontharder/hoe-lang |
| waterontharder-onderhoud | /waterontharder/onderhoud |
| waterontharder-installatie | /waterontharder/installeren |
| waterontharder-regeneratie | /waterontharder/regeneratie |
| waterontharder-regeneratie-tijden | /waterontharder/regeneratie-tijd |
| waterontharder-hoe-werkt-regeneratie | /waterontharder/regeneratie |
| waterontharder-zout | /waterontharder/zout |
| waterontharder-zout-kopen | /waterontharder/zout |
| waterontharder-zout-verbruik | /waterontharder/zout-verbruik |
| waterontharder-zout-soorten | /waterontharder/zout-types |
| waterontharder-huren | /waterontharder/huren |
| waterontharder-huren-vs-kopen | /waterontharder/huren |
| waterontharder-vs-osmose | /waterontharder/vs-osmose |
| waterontharder-appartement | /waterontharder/appartement |
| waterontharder-appartement-huren | /waterontharder/verhuurder |
| waterontharder-appartement-huurwoning | /waterontharder/verhuurder |
| waterontharder-kiezen | /waterontharder/kopen |

### Bewust NIET geconsolideerd (distinct intent of te hoog-stakes zonder GSC)
- `/waterontharder/kopen` vs `/waterontharder/vergelijken` vs `/beste-waterontharder-2026`:
  drie money-pagina's met net andere intentie (koopgids vs modellen vergelijken vs jaarlijkse
  shortlist) -> GSC-validatie vereist voor verdere consolidatie.
- `/waterontharder/zout` vs `/waterontharder/zout-types` vs `/waterontharder/zout-verbruik`:
  bewust 3 distinct sub-intenties (kopen, types, verbruik) gehouden.
- `/waterontharder/regeneratie` vs `/regeneratie-tijd`: algemeen vs duur - distinct gehouden.
- Distinct MDX behouden: voordelen, milieu-impact, stroom-verbruik, zout-tekort, kinderen-gezin,
  douche-huid-haar, weg-op-vakantie, merken (overzicht), en de 11 nieuwe long-tail artikelen.
