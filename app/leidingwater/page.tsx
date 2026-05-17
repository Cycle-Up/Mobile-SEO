import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Leidingwater: Kwaliteit, Prijs & Samenstelling',
  description:
    'Alles over leidingwater in Nederland: hoe het geproduceerd wordt, wat erin zit, regionale kwaliteitsverschillen, prijs en wanneer extra filtratie zinvol is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater' },
  openGraph: {
    title: 'Leidingwater: Kwaliteit, Prijs & Samenstelling',
    description:
      'Hoe werkt het Nederlandse leidingwaterstelsel? Lees over de 10 waterbedrijven, zuiveringsproces, samenstelling, Drinkwaterbesluit en wanneer filteren.',
    url: 'https://waterfilterplatform.nl/leidingwater',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is leidingwater precies?',
    answer:
      'Leidingwater is drinkwater dat via een buizenstelsel (leidingen) wordt gedistribueerd naar woningen, bedrijven en instellingen. In Nederland wordt het geproduceerd door tien regionale drinkwaterbedrijven uit grondwater (~60%) en oppervlaktewater (~40%). Het water wordt gezuiverd tot het voldoet aan het Drinkwaterbesluit en kan direct gedronken worden.',
  },
  {
    question: 'Hoeveel kost leidingwater in Nederland?',
    answer:
      'Leidingwater kost gemiddeld ongeveer €1,50 per kubieke meter (m³), wat neerkomt op €0,0015 per liter. Een gemiddeld huishouden verbruikt circa 115 liter per persoon per dag. De totale jaarrekening voor drinkwater inclusief vastrecht bedraagt voor een vierpersoonshuishouden gemiddeld €200–350 per jaar. Dit maakt leidingwater 500–1000 maal goedkoper dan flessenwater.',
  },
  {
    question: 'Wat zit er in leidingwater?',
    answer:
      'Leidingwater bevat van nature opgeloste mineralen zoals calcium, magnesium, natrium en kalium. Na zuivering zijn er ook behandelingsstoffen aanwezig, met name chloor of chlooramine voor desinfectie. Afhankelijk van de bron en regio kunnen sporen van nitraten, PFAS, medicijnresten en pesticiden aanwezig zijn — altijd binnen de wettelijke normen van het Drinkwaterbesluit.',
  },
  {
    question: 'Welke wet reguleert de kwaliteit van leidingwater?',
    answer:
      'De kwaliteit van leidingwater wordt geregeld door het Drinkwaterbesluit (2011, geactualiseerd 2023), dat de Europese Drinkwaterrichtlijn (2020/2184) implementeert in Nederlandse wetgeving. Het besluit stelt maximumwaarden voor meer dan 50 parameters, van bacteriën en zware metalen tot pesticiden en PFAS. De Inspectie Leefomgeving en Transport (ILT) houdt toezicht op de naleving. RIVM monitort landelijke trends onafhankelijk.',
  },
  {
    question: 'Wanneer is een extra waterfilter zinvol voor leidingwater?',
    answer:
      'Leidingwater is veilig te drinken, maar een filter voegt waarde toe bij: (1) een merkbare chloor- of kalksmaak, (2) een waterhardheid boven 15 °dH waarbij kalkvorming in apparaten optreedt, (3) bezorgdheid over PFAS in gebieden nabij industrie of vliegvelden, (4) verhoogde nitraatconcentraties in landbouwgebieden, of (5) extra zekerheid bij baby\'s, zwangere vrouwen of immuungecompromitteerden. Omgekeerde osmose is de meest complete filteroplossing.',
  },
];

const waterBedrijven = [
  {
    naam: 'Vitens',
    regio: 'Gelderland, Overijssel, Friesland, Utrecht (deels), Flevoland',
    bron: 'Grondwater',
    klanten: '~5,7 miljoen',
  },
  {
    naam: 'Evides',
    regio: 'Zeeland, Zuid-Holland (eilanden en Rijnmond)',
    bron: 'Oppervlakte- en duinwater',
    klanten: '~2,5 miljoen',
  },
  {
    naam: 'Dunea',
    regio: 'Den Haag, Westland, regio Midden-Holland',
    bron: 'Duinwater (geïnfiltreerd Rijnwater)',
    klanten: '~1,3 miljoen',
  },
  {
    naam: 'PWN',
    regio: 'Noord-Holland (excl. Amsterdam)',
    bron: 'Duinwater, IJsselmeerwater',
    klanten: '~1,1 miljoen',
  },
  {
    naam: 'Waternet',
    regio: 'Amsterdam en omgeving',
    bron: 'Oppervlaktewater (Bethunepolder)',
    klanten: '~1,0 miljoen',
  },
  {
    naam: 'Brabant Water',
    regio: 'Noord-Brabant',
    bron: 'Grondwater',
    klanten: '~2,5 miljoen',
  },
  {
    naam: 'WML',
    regio: 'Limburg',
    bron: 'Grondwater (Maas-infiltratie)',
    klanten: '~0,6 miljoen',
  },
  {
    naam: 'Oasen',
    regio: 'Midden-Holland, Goeree-Overflakkee',
    bron: 'Grondwater, oppervlaktewater',
    klanten: '~0,4 miljoen',
  },
  {
    naam: 'Delfland / Dunea (Kennemerland)',
    regio: 'Kennemerland, Delfland',
    bron: 'Duinwater',
    klanten: '~0,5 miljoen',
  },
  {
    naam: 'Groningen / WMD',
    regio: 'Groningen, Drenthe',
    bron: 'Grondwater',
    klanten: '~0,7 miljoen',
  },
];

const zuiveringsStappen = [
  {
    stap: '1',
    naam: 'Onttrekking',
    beschrijving:
      'Grondwater wordt opgepompt via waterwinputten; oppervlaktewater wordt ingenomen uit rivieren of meren. Bij duinwaterproductie wordt vooraf gezuiverd Rijnwater in de duinen geïnfiltreerd en na een verblijftijd van maanden tot jaren teruggewonnen.',
    kleur: 'bg-blue-50 border-blue-200',
  },
  {
    stap: '2',
    naam: 'Coagulatie en sedimentatie',
    beschrijving:
      'Bij oppervlaktewater worden coagulatiemiddelen (aluminiumsulfaat of ijzerchloride) toegevoegd om fijne zweefdeeltjes, bacteriën en organisch materiaal samen te klonteren. De gevormde vlokken bezinken in bezinkingstanks.',
    kleur: 'bg-sky-50 border-sky-200',
  },
  {
    stap: '3',
    naam: 'Snelzandfiltratie',
    beschrijving:
      'Het water wordt gefilterd over lagen zand en grind om overgebleven zwevende stoffen, ijzer en mangaan te verwijderen. Dit is een mechanisch én biologisch zuiveringsproces.',
    kleur: 'bg-teal-50 border-teal-200',
  },
  {
    stap: '4',
    naam: 'Actieve koolstoffiltratie',
    beschrijving:
      'Actieve koolstof (granulaat of poeder) adsorbeert organische microverontreinigingen: pesticiden, medicijnresten, PFAS (gedeeltelijk), geur- en smaakstoffen. Dit is een kritische stap bij oppervlaktewaterbehandeling.',
    kleur: 'bg-emerald-50 border-emerald-200',
  },
  {
    stap: '5',
    naam: 'UV-bestraling of desinfectie',
    beschrijving:
      'UV-bestraling inactiveert pathogenen (bacteriën, virussen, Cryptosporidium) zonder chemische toevoeging. Aanvullend wordt een lage concentratie chloor of chlooramine toegevoegd als residueel desinfectiemiddel om bacteriegroei in het distributienet te voorkomen.',
    kleur: 'bg-cyan-50 border-cyan-200',
  },
  {
    stap: '6',
    naam: 'pH-correctie en remineralisatie',
    beschrijving:
      'Na intensieve zuivering kan water te zuur en agressief worden. Kalkzandbedden of dosering van koolzuurgas en natriumhydroxide corrigeren de pH en stellen het calciumgehalte in op een corrosiewerend niveau.',
    kleur: 'bg-indigo-50 border-indigo-200',
  },
  {
    stap: '7',
    naam: 'Distributie via leidingnet',
    beschrijving:
      'Gezuiverd drinkwater wordt via een netwerk van reservoirs, pompen en leidingen (totale lengte in Nederland: ~130.000 km) gedistribueerd naar de eindgebruiker. De drinkwaterbedrijven zijn verantwoordelijk voor de kwaliteit tot aan de watermeter.',
    kleur: 'bg-violet-50 border-violet-200',
  },
];

const mineralenTabel = [
  {
    mineraal: 'Calcium (Ca²⁺)',
    typischeWaarde: '20–180 mg/L',
    rol: 'Bepaalt hoofdzakelijk de waterhardheid; essentieel mineraal',
    noot: 'Hoog bij grondwater in kalkhoudende gebieden (Limburg, Brabant)',
  },
  {
    mineraal: 'Magnesium (Mg²⁺)',
    typischeWaarde: '2–25 mg/L',
    rol: 'Bijdraagt aan hardheid; essentieel voor spieren en hart',
    noot: 'Verhouding Ca:Mg varieert sterk per regio',
  },
  {
    mineraal: 'Natrium (Na⁺)',
    typischeWaarde: '10–60 mg/L',
    rol: 'Geen gezondheidsrisico bij normale waarden; smaakinvloed bij hoog gehalte',
    noot: 'Kan hoger zijn na waterontharderbehandeling',
  },
  {
    mineraal: 'Bicarbonaat (HCO₃⁻)',
    typischeWaarde: '50–350 mg/L',
    rol: 'Buffert de pH; correleert met hardheid',
    noot: 'Hoog bicarbonaatgehalte = hoge tijdelijke hardheid',
  },
  {
    mineraal: 'Chloor (residueel)',
    typischeWaarde: '0,05–0,3 mg/L',
    rol: 'Desinfectiemiddel; voorkomt bacteriegroei in net',
    noot: 'Merkbaar als smaak/geur boven ~0,1 mg/L',
  },
  {
    mineraal: 'Nitraat (NO₃⁻)',
    typischeWaarde: '2–45 mg/L',
    rol: 'Norm: max. 50 mg/L; risico bij baby\'s en hoge concentraties',
    noot: 'Verhoogd in landbouwintensieve grondwaterzones',
  },
];

const regioKwaliteit = [
  {
    regio: 'Zeeland & kustgebieden',
    hardheid: '4–8 °dH (zacht)',
    bron: 'Rijnwater / duinwater',
    kenmerk: 'Laag calciumgehalte, weinig kalk',
    chloor: 'Soms hoger door lange distributie',
    kleur: 'bg-green-50 border-green-200',
    badge: 'Zacht',
    badgeKleur: 'bg-green-100 text-green-800',
  },
  {
    regio: 'Randstad (Amsterdam, Den Haag, Rotterdam)',
    hardheid: '8–12 °dH (matig)',
    bron: 'Duinwater, oppervlaktewater',
    kenmerk: 'Goede smaak dankzij duinpassage',
    chloor: 'Laag tot matig',
    kleur: 'bg-lime-50 border-lime-200',
    badge: 'Matig',
    badgeKleur: 'bg-lime-100 text-lime-800',
  },
  {
    regio: 'Oost-Nederland (Overijssel, Gelderland)',
    hardheid: '12–18 °dH (hard)',
    bron: 'Grondwater',
    kenmerk: 'Mineralenrijk, soms verhoogd nitraat in agrarische zones',
    chloor: 'Laag (grondwater)',
    kleur: 'bg-orange-50 border-orange-200',
    badge: 'Hard',
    badgeKleur: 'bg-orange-100 text-orange-800',
  },
  {
    regio: 'Limburg & Noord-Brabant',
    hardheid: '15–22 °dH (zeer hard)',
    bron: 'Grondwater (kalkrijke bodem)',
    kenmerk: 'Hoog calciumgehalte, zware kalkvorming in apparaten',
    chloor: 'Laag tot matig',
    kleur: 'bg-red-50 border-red-200',
    badge: 'Zeer hard',
    badgeKleur: 'bg-red-100 text-red-800',
  },
];

export default function LeidingwaterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Leidingwater: Kwaliteit, Prijs & Samenstelling',
          description:
            'Uitgebreide gids over leidingwater in Nederland: het waterstelsel, zuiveringsproces, samenstelling, prijs en wanneer extra filtratie zinvol is.',
          datePublished: '2025-10-01',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/leidingwater',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Leidingwater', url: 'https://waterfilterplatform.nl/leidingwater' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Leidingwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Leidingwater in Nederland: kwaliteit, prijs en samenstelling
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Elke dag stroomt er miljoenen liters leidingwater door de Nederlandse huishoudens.
            Maar hoe wordt dat water geproduceerd? Wat zit er precies in? Waarom verschilt de
            kwaliteit per regio? En wanneer voegt een waterfilter echte waarde toe aan ons
            al uitstekende leidingwater? Op deze pagina vind je een volledig overzicht.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#zuivering"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Hoe werkt zuivering? →
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Hardheid in mijn regio
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#stelsel" className="hover:underline">Het Nederlandse leidingwaterstelsel</a></li>
            <li><a href="#zuivering" className="hover:underline">Het zuiveringsproces stap voor stap</a></li>
            <li><a href="#samenstelling" className="hover:underline">Samenstelling van leidingwater</a></li>
            <li><a href="#regio" className="hover:underline">Regionale kwaliteitsverschillen</a></li>
            <li><a href="#prijs" className="hover:underline">Prijs van leidingwater</a></li>
            <li><a href="#regelgeving" className="hover:underline">Regelgeving en toezicht</a></li>
            <li><a href="#filter" className="hover:underline">Wanneer extra filtratie zinvol?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Het Nederlandse leidingwaterstelsel */}
        <section id="stelsel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Het Nederlandse leidingwaterstelsel</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Leidingwater in Nederland wordt geproduceerd en gedistribueerd door tien regionale
            drinkwaterbedrijven. Samen bedienen zij alle ruim 17 miljoen Nederlanders en leveren
            zij jaarlijks circa 1,5 miljard kubieke meter drinkwater. Nederland scoort internationaal
            in de top drie voor drinkwaterkwaliteit — mede dankzij strenge regelgeving, geavanceerde
            zuiveringstechnologie en een goed onderhouden infrastructuur.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De grondstoffen voor leidingwater zijn voor circa <strong>60% grondwater</strong> en
            circa <strong>40% oppervlaktewater</strong> (Rijn, Maas en IJsselmeer). Grondwater
            uit diepe lagen is van nature microbiologisch schoon en bevat relatief weinig organische
            verontreinigingen, maar kan in landbouwgebieden verhoogde nitraat- en pesticideconcentraties
            bevatten. Oppervlaktewater vereist een intensievere behandeling maar biedt een grotere
            en stabieler beschikbare bron.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Het distributienetwerk is circa <strong>130.000 kilometer</strong> aan leidingen lang —
            voldoende om de aarde drie keer te omcirkelen. De drinkwaterbedrijven zijn verantwoordelijk
            voor de waterkwaliteit tot aan de watermeter bij de consument. Daarna is de gebouweigenaar
            verantwoordelijk voor het interne leidingwerk. In woningen gebouwd vóór 1960 kunnen
            nog loden leidingen aanwezig zijn, die bij stilstand lood kunnen afgeven aan het water.
          </p>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Bedrijf</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Regio</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Bron</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Klanten</th>
                </tr>
              </thead>
              <tbody>
                {waterBedrijven.map((b, i) => (
                  <tr
                    key={b.naam}
                    className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-[#E0F2FE]/30 border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium">{b.naam}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{b.regio}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{b.bron}</td>
                    <td className="py-2.5 px-3 text-right text-xs font-mono">{b.klanten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Klantengetallen zijn bij benadering. Grenzen van verzorgingsgebieden overlappen soms.
          </p>
        </section>

        {/* Zuiveringsproces */}
        <section id="zuivering">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Het zuiveringsproces: van bron tot kraan</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Voordat leidingwater uw kraan bereikt, doorloopt het een reeks van zorgvuldig ontworpen
            zuiveringsstappen. Het exacte proces verschilt per bron — grondwater vereist minder
            intensieve behandeling dan oppervlaktewater — maar de kern is steeds dezelfde:
            microbiologische veiligheid garanderen en chemische verontreinigingen verwijderen.
          </p>
          <div className="space-y-3">
            {zuiveringsStappen.map(s => (
              <div key={s.stap} className={`border rounded-2xl p-4 ${s.kleur}`}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {s.stap}
                  </div>
                  <div>
                    <p className="font-semibold text-[#003F5C] mb-1">{s.naam}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{s.beschrijving}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#E0F2FE]/60 rounded-2xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1 text-sm">Grondwater: minder stappen nodig</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Diep grondwater uit beschermde waterwingebieden vereist vaak alleen ontijzering,
              ontharding (soms), UV-desinfectie en een lichte chloorbehandeling. De bodem fungeert
              als een natuurlijk langzaam filter dat pathogenen inactiveert over tientallen jaren
              verblijftijd.
            </p>
          </div>
        </section>

        {/* Samenstelling */}
        <section id="samenstelling">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Samenstelling van leidingwater: mineralen en behandelingsstoffen</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Leidingwater is geen puur H₂O. Het bevat van nature opgeloste mineralen die bijdragen
            aan de smaak en die deels gezondheidsvoordelen bieden, maar ook behandelingsstoffen
            die noodzakelijk zijn voor een veilig distributienet. De exacte samenstelling varieert
            aanzienlijk per waterwingebied en seizoen.
          </p>
          <div className="space-y-2 mb-6">
            {mineralenTabel.map(m => (
              <div key={m.mineraal} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                  <p className="font-semibold text-gray-900">{m.mineraal}</p>
                  <span className="text-xs font-mono bg-gray-100 text-gray-700 px-2 py-0.5 rounded shrink-0">
                    {m.typischeWaarde}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-1 leading-relaxed">{m.rol}</p>
                <p className="text-xs text-[#005F8A]">{m.noot}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
            <p className="font-semibold text-amber-800 mb-2">Behandelingsstoffen: noodzakelijk maar niet zonder gevolgen</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              Chloor is het meest gebruikte desinfectiemiddel in het Nederlandse leidingnet.
              Hoewel het in de toegepaste concentraties veilig is, kan het bij sommige mensen
              een merkbare geur of smaak geven, met name direct na het tapkraan of bij warm
              water. Een actieve koolstoffilter verwijdert chloor volledig en verbetert de
              smaak aanzienlijk.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            De exacte samenstelling van het leidingwater in uw regio is openbaar beschikbaar via
            de jaarverslagen van uw drinkwaterbedrijf en via{' '}
            <span className="font-medium">drinkwaterinfo.nl</span>. Wil je een uitgebreide analyse
            van de waterkwaliteit per regio? Lees dan de{' '}
            <Link href="/kennisbank/waterkwaliteit-nederland" className="text-[#005F8A] underline hover:no-underline">
              kennisbank: waterkwaliteit Nederland
            </Link>
            .
          </p>
        </section>

        {/* Regionale kwaliteitsverschillen */}
        <section id="regio">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Regionale kwaliteitsverschillen: wat drijft ze?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Ondanks dat alle leidingwater in Nederland voldoet aan dezelfde wettelijke normen,
            zijn er merkbare kwaliteits- en smaaksverschillen tussen regio&apos;s. Deze worden
            bepaald door drie hoofdfactoren:
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex gap-3 items-start bg-[#E0F2FE]/40 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">A</div>
              <div>
                <p className="font-semibold text-[#003F5C] mb-1">Geologie van de ondergrond</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  In kalkrijke gebieden (Limburg, Brabant, delen van Gelderland) lost grondwater
                  meer calcium op uit de bodem, wat leidt tot harder water. In de Zeeuwse delta
                  en langs de kust is de grond zanderig en arm aan kalk, waardoor het water
                  zachter is.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-[#E0F2FE]/40 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">B</div>
              <div>
                <p className="font-semibold text-[#003F5C] mb-1">Landgebruik in de omgeving</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Intensieve landbouw in Oost- en Zuid-Nederland belast grondwater met nitraten,
                  pesticiden en in toenemende mate PFAS uit meststoffen en bestrijdingsmiddelen.
                  Waterwingebieden nabij industrie of vliegvelden kunnen verhoogde PFAS-concentraties
                  hebben in de bron.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-[#E0F2FE]/40 rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">C</div>
              <div>
                <p className="font-semibold text-[#003F5C] mb-1">Bronkeuze en zuiveringstechniek</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Water gewonnen via duinpassage (Dunea, PWN) heeft een langere verblijftijd in
                  de ondergrond en profiteert van extra biologische zuivering. Dit resulteert
                  doorgaans in een neutraal, prettig smaakprofiel. Oppervlaktewater vereist
                  intensievere chemische behandeling, wat de kans op een lichte nasmaken vergroot.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {regioKwaliteit.map(r => (
              <div key={r.regio} className={`border rounded-2xl p-4 ${r.kleur}`}>
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <p className="font-semibold text-gray-800">{r.regio}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${r.badgeKleur}`}>
                    {r.badge}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600 mb-2">
                  <div><span className="text-gray-400">Hardheid:</span> {r.hardheid}</div>
                  <div><span className="text-gray-400">Bron:</span> {r.bron}</div>
                  <div><span className="text-gray-400">Chloor:</span> {r.chloor}</div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{r.kenmerk}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-5 leading-relaxed">
            Wil je precies weten hoe hard het leidingwater in jouw gemeente is? Bekijk het{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheidsoverzicht per gemeente
            </Link>
            {' '}met filteradvies per hardheidsklasse.
          </p>
        </section>

        {/* Prijs */}
        <section id="prijs">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Prijs van leidingwater in Nederland</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Leidingwater behoort tot de goedkoopste nutsbedrijfsdiensten die Nederlanders afnemen.
            Toch begrijpen veel huishoudens niet precies hoe de rekening is opgebouwd.
            Hier is een helder overzicht:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-[#005F8A]">€ 1,50</p>
              <p className="text-sm text-gray-600 mt-1">per m³ (1.000 liter)</p>
              <p className="text-xs text-gray-400 mt-1">variabel tarief 2025</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-[#005F8A]">€ 0,0015</p>
              <p className="text-sm text-gray-600 mt-1">per liter</p>
              <p className="text-xs text-gray-400 mt-1">goedkoopst denkbaar</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-[#005F8A]">~ €280</p>
              <p className="text-sm text-gray-600 mt-1">per jaar (4-persoons)</p>
              <p className="text-xs text-gray-400 mt-1">incl. vastrecht</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            De waterfactuur bestaat uit twee onderdelen: een <strong>variabel verbruikstarief</strong>
            (per m³) en een <strong>vast recht</strong> dat de kosten dekt voor aansluiting en
            metering. Het variabele tarief verschilt per drinkwaterbedrijf — van circa €1,20/m³
            (Vitens) tot circa €1,80/m³ (sommige Randstad-bedrijven) — afhankelijk van de
            productiekosten en infrastructuurinvesteringen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ter vergelijking: een liter mineraalwater uit de supermarkt kost gemiddeld <strong>€ 0,50–1,50</strong>.
            Dit betekent dat leidingwater bij een gelijkwaardige kwaliteit <strong>500 tot 1.000 keer
            goedkoper</strong> is dan flessenwater. Een gezin dat overstapt van flessenwater naar
            leidingwater (of gefilterd leidingwater) bespaart gemiddeld <strong>€ 400–800 per jaar</strong>.
          </p>
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="font-semibold text-[#003F5C] mb-2 text-sm">Kosten waterfilter in perspectief</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Een omgekeerde osmose systeem kost inclusief filtervervanging circa €80–150 per jaar
              bij normaal gezinsverbruik. Dat is alsnog 3–10 keer goedkoper dan flessenwater, terwijl
              de filterkwaliteit voor drinkwater vergelijkbaar of hoger is dan het beste bronwater.
              Lees meer over{' '}
              <Link href="/waterfilter" className="text-[#005F8A] underline hover:no-underline">
                waterfilter opties en kosten
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Regelgeving */}
        <section id="regelgeving">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Regelgeving en toezicht: Drinkwaterbesluit en RIVM</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De kwaliteit van leidingwater is onderhevig aan een van de strengste regelgevingskaders
            ter wereld. Het systeem bestaat uit drie lagen:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#005F8A]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#005F8A] font-bold text-sm">EU</span>
                </div>
                <div>
                  <p className="font-semibold text-[#003F5C] mb-2">Europese Drinkwaterrichtlijn (2020/2184)</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    De herziene EU-richtlijn uit 2020 (in werking getreden in 2023) heeft significante
                    wijzigingen ingevoerd: strengere normen voor PFAS (totaalgehalte en individuele
                    stoffen), nieuwe normen voor hormoonverstorende stoffen, uitgebreidere monitoring
                    van microplastics en verplichte risico-gebaseerde benadering per waterwingebied.
                    Nederland was koploper in de implementatie.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#005F8A]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#005F8A] font-bold text-xs">NL</span>
                </div>
                <div>
                  <p className="font-semibold text-[#003F5C] mb-2">Drinkwaterbesluit (nationale implementatie)</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Het Nederlandse Drinkwaterbesluit vertaalt de EU-richtlijn naar nationaal recht
                    en stelt maximumwaarden vast voor meer dan 50 parameters. Drinkwaterbedrijven
                    zijn verplicht jaarlijks te meten op al deze parameters en de resultaten publiek
                    te rapporteren. Het besluit bevat ook eisen aan het distributieleidingwerk,
                    noodvoorzieningen en consumenteninformatie.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#005F8A]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#005F8A] font-bold text-xs">RIVM</span>
                </div>
                <div>
                  <p className="font-semibold text-[#003F5C] mb-2">RIVM — onafhankelijke monitoring</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Het Rijksinstituut voor Volksgezondheid en Milieu publiceert jaarlijks de{' '}
                    <em>Staat van de Drinkwaterkwaliteit</em>, een onafhankelijke analyse van alle
                    meetresultaten van de drinkwaterbedrijven. RIVM signaleert trends — zoals
                    toenemende PFAS-concentraties of nitraatuitspoeling — en adviseert de overheid
                    over normaanpassing en preventief beleid.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#005F8A]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#005F8A] font-bold text-xs">ILT</span>
                </div>
                <div>
                  <p className="font-semibold text-[#003F5C] mb-2">ILT — Inspectie Leefomgeving en Transport</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    De ILT is de handhavingsinstantie die toezicht houdt op naleving van het
                    Drinkwaterbesluit door de drinkwaterbedrijven. Bij normoverschrijdingen worden
                    bedrijven verplicht onmiddellijk maatregelen te nemen en consumenten actief
                    te informeren. Overschrijdingen zijn in de praktijk zeldzaam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#E0F2FE]/60 rounded-2xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1 text-sm">PFAS in leidingwater: stand van zaken 2025–2026</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              RIVM-metingen bevestigen dat PFAS in lage concentraties aanwezig is in Nederlands
              leidingwater. Gemiddeld liggen de waarden onder de nieuwe EU-norm van 0,1 μg/L
              voor de som van 20 PFAS. Lokale uitzonderingen bestaan nabij vliegvelden (Schiphol,
              Eindhoven) en industrieterreinen (Chemours in Dordrecht). De drinkwaterbedrijven
              in deze gebieden investeren in extra zuiveringscapaciteit (geavanceerde actieve
              koolstofffiltratie, nanofiltration). Consumenten die extra zekerheid wensen kunnen
              kiezen voor een omgekeerde osmose systeem, dat bewezen 90–99% PFAS verwijdert.
            </p>
          </div>
        </section>

        {/* Wanneer extra filtratie zinvol */}
        <section id="filter">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer voegt extra filtratie waarde toe aan leidingwater?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Leidingwater is veilig en kwalitatief hoogwaardig. Maar er zijn specifieke situaties
            waarbij een huishoudelijk waterfilter zinvolle toegevoegde waarde biedt — voor smaak,
            comfort of als extra beschermlaag:
          </p>

          <div className="space-y-3 mb-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">1. Smaak en geur verbeteren</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                De meest voorkomende reden voor het aanschaffen van een waterfilter is
                smaakverbetering. Chloor, mineralen (kalk) en organische microcomponenten
                kunnen een merkbare smaak of geur geven. Een actieve koolstoffilter haalt
                chloor en geurstoffen effectief weg. Voor de puurste smaak — vergelijkbaar
                met hoogwaardig bronwater — is omgekeerde osmose de beste keuze.
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Advies: koolstoffilter (€30–80/jr) of omgekeerde osmose (€80–150/jr)
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">2. Kalkvorming tegengaan (hard water)</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                Bij een waterhardheid boven 15 °dH (Limburg, Noord-Brabant, delen van
                Gelderland en Overijssel) vormt kalk een praktisch probleem voor waterkokers,
                koffiemachines, cv-ketels, wasmachines en vaatwassers. Een omgekeerde osmose
                systeem op de keukentap levert zacht, puur drinkwater. Een waterontharder
                behandelt het totale huishoudwaterverbruik.
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Advies: omgekeerde osmose of gecombineerde aanpak met waterontharder
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">3. PFAS en microverontreinigingen verwijderen</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                Woon je in een risicogebied voor verhoogde PFAS-concentraties? Controleer
                eerst de kwaliteitsrapporten van jouw drinkwaterbedrijf (beschikbaar via
                drinkwaterinfo.nl). Als de concentraties dichtbij de norm liggen of als
                je extra zekerheid wenst, is omgekeerde osmose de enige bewezen technologie
                die PFAS betrouwbaar verwijdert (90–99%).
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Advies: omgekeerde osmose (de gouden standaard voor PFAS-verwijdering)
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">4. Nitraten in landbouwgebieden</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                In intensief agrarisch gebruikte gebieden (Brabant, Gelderland, Overijssel)
                kan het grondwater hogere nitraatconcentraties bevatten. Drinkwaterbedrijven
                mengelen om onder de norm van 50 mg/L te blijven, maar voor huishoudens met
                zuigelingen of zwangere vrouwen kan extra zekerheid gewenst zijn. Omgekeerde
                osmose verwijdert 90–95% van nitraten.
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Advies: omgekeerde osmose, evt. met remineralisatiefilter
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">5. Loden leidingen in oudere woningen</p>
              <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                Woningen gebouwd vóór 1960 kunnen nog loden binnenleidingen hebben. Lood
                kan oplossen in stilstaand water en bij kinderen neurotoxische effecten hebben.
                De meeste loden leidingen zijn gesaneerd, maar laat het bij twijfel controleren.
                Een osmosefilter op de keukenkraan verwijdert lood effectief. Sanering van
                de leidingen is de structurele oplossing.
              </p>
              <p className="text-xs text-[#005F8A] font-medium">
                Advies: loodmeting aanvragen + osmosefilter als tijdelijke maatregel
              </p>
            </div>
          </div>

          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">De meest complete oplossing</p>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              Een omgekeerde osmose systeem verwijdert in één stap kalk, nitraten, PFAS,
              microplastics, lood, chloor en vrijwel alle andere opgeloste stoffen. Het geeft
              je leidingwater de kwaliteit van gedestilleerd water, aangevuld met de mineralen
              die je wil behouden via een remineralisatiefilter. Wil je bovendien kokend
              en bruisend water? Dan is een 4-in-1 kraan met ingebouwde osmose de meest
              complete huishoudoplossing.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="bg-[#005F8A] text-white font-semibold px-4 py-2 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Osmosefilter kopen →
              </Link>
              <Link
                href="/waterfilter"
                className="border border-[#005F8A] text-[#005F8A] font-semibold px-4 py-2 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
              >
                Alle filtertypen vergelijken
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over leidingwater en waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/drinkwater',
                title: 'Drinkwater in Nederland',
                desc: 'Uitgebreide gids over het drinkwaterstelsel, bronnen, RIVM-toezicht en kwaliteitsmonitoring.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Hoe hard is het leidingwater bij jou thuis? 349 gemeenten met filteradvies.',
              },
              {
                href: '/kennisbank/waterkwaliteit-nederland',
                title: 'Kennisbank: waterkwaliteit Nederland',
                desc: 'Wetenschappelijk onderbouwde analyse van PFAS, nitraten, medicijnresten en meer.',
              },
              {
                href: '/waterfilter',
                title: 'Waterfilters vergelijken',
                desc: 'Alle filtertypes naast elkaar: filterkan, koolstof, osmose en waterontharder.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmosefilter kopen',
                desc: 'Vergelijk de beste osmose-systemen voor jouw situatie en budget.',
              },
              {
                href: '/kraanwater',
                title: 'Kraanwater drinken',
                desc: 'Is kraanwater direct drinkbaar? Smaak, veiligheid en vergelijking met flessenwater.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">
                  {l.title}
                </p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over leidingwater</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
