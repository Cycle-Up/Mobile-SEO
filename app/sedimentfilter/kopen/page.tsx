import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Sedimentfilter kopen: micronwaardes, types en koopgids 2026',
  description:
    'Koopgids voor sedimentfilters: welke micronwaarde voor put/leidingwater/irrigatie, 10-inch vs big blue, 5-model vergelijking, jaarkosten en combinaties met.',
  alternates: { canonical: 'https://waterfilterplatform.nl/sedimentfilter/kopen' },
  openGraph: {
    title: 'Sedimentfilter kopen — koopgids en modellenvergelijking 2026',
    description:
      'Welk sedimentfilter kiest u? Micronwaarde per waterbron, 5-model vergelijking, standaard vs big blue, installatie en pre-filtercombinaties.',
    url: 'https://waterfilterplatform.nl/sedimentfilter/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welke micronwaarde kies ik voor putwater?',
    answer:
      'Voor putwater of boringwater, dat doorgaans meer sediment en fijn slib bevat dan leidingwater, kiest u een micronwaarde van 1–5 µm. Een 5 µm filter vangt fijn sediment, algen en grote bacteriën op. Als het water sterk troebel is, gebruikt u een 20–50 µm pre-filter als eerste stap en een 5 µm filter als tweede stap. Een cascade van twee sedimentfilters beschermt een koolstoffilter of UV-lamp effectief bij sterk verontreinigd bronwater.',
  },
  {
    question: 'Wat is het verschil tussen een 10-inch standaard en een 20-inch big blue behuizing?',
    answer:
      'Een 10-inch standaard behuizing is de meest voorkomende maat voor huishoudelijke systemen. Cartridges zijn goedkoop en breed verkrijgbaar (€2–15 per stuk). Doorstroom: tot circa 8 liter per minuut. Een 20-inch big blue behuizing is groter en geschikt voor hogere debieten (10–40 liter per minuut) en gebruikt cartridges die meer filtercapaciteit bieden voor langer gebruik. Big blue wordt gebruikt voor heel-huissystemen en toepassingen met hoger verbruik. De cartridges zijn duurder (€8–25) maar gaan langer mee.',
  },
  {
    question: 'Wat zijn de beste merken voor sedimentfilters?',
    answer:
      'Pentek (onderdeel van Pentair) is de meest gebruikte merknaam in professionele installaties en staat bekend om betrouwbare melt-blown en geplooide cartridges. Aquafilter is een betaalbaar Europees merk met een breed assortiment van 1–50 µm. Watts Water Technologies levert kwalitatieve behuizingen en cartridges voor residentieel gebruik. Ecosoft is een Oekraïens merk dat populair is in Oost-Europa met goede prijs/kwaliteitverhouding. Alle vier leveren NSF-gecertificeerde producten.',
  },
  {
    question: 'Kan ik een sedimentfilter zelf installeren?',
    answer:
      'Het vervangen van een filterpatroon (cartridge) in een bestaande behuizing is eenvoudig en vereist geen gereedschap: behuizing losdraaien, oude cartridge eruit, nieuwe erin, behuizing terugdraaien. De eerste installatie van een nieuwe filterbehuizing vereist een plumber als het aansluitingen op het waterleidingnet betreft — dit is een kleine klus die doorgaans een half uur duurt. Point-of-use systemen (onder het aanrecht) kunnen door een handige doe-het-zelver worden geplaatst.',
  },
  {
    question: 'Hoe bereken ik de jaarlijkse kosten van een sedimentfilter?',
    answer:
      'Jaarkosten = aanschaf cartridges per jaar. Voorbeeld voor leidingwater: één 10-inch melt-blown 5 µm cartridge vervanging per 6 maanden = 2 cartridges per jaar à €4 = €8/jaar. Voor putwater bij maandelijkse vervanging: 12 × €4 = €48/jaar. De behuizing is een eenmalige investering van €15–80 die 10–20 jaar meegaat. Totale jaarkosten voor de meeste huishoudens: €8–60 per jaar, afhankelijk van waterkwaliteit en vervangingsfrequentie.',
  },
  {
    question: 'Wat is een quick-change sedimentfilter en wanneer is dat handig?',
    answer:
      'Quick-change (twist-lock) systemen gebruiken filterpatronen die met een kwartdraai gewisseld kunnen worden zonder gereedschap en zonder contact met het filtermedium. Dit maakt vervanging hygiënischer en sneller. De cartridges zijn doorgaans iets duurder dan standaard cartridges, maar voor drukke huishoudens of systemen op moeilijk bereikbare plaatsen is het gemak de meerprijs waard. Merken als Pentek iSpring en Watts bieden quick-change systemen aan.',
  },
  {
    question: 'Wat is het verschil tussen een heel-huissysteem en point-of-use sedimentfilter?',
    answer:
      'Een heel-huissysteem (whole-house) wordt geplaatst op de hoofdwaterleiding die het gehele huis van water voorziet. Alle tappunten — douche, toilet, wasmachine, keuken — krijgen gefilterd water. Groot voordeel: bescherming van alle apparaten en leidingwerk. Nadeel: hogere doorstroom vereist, grotere behuizing (big blue). Een point-of-use systeem filtert alleen het water op één specifiek tappunt, doorgaans onder het aanrecht voor de keukenkraan. Goedkoper en eenvoudiger te installeren, maar beschermt niet de rest van het huis.',
  },
  {
    question: 'Welke combinaties met een sedimentfilter zijn het meest effectief?',
    answer:
      'De meest effectieve combinaties zijn: (1) Sediment + koolstof: mechanische deeltjesverwijdering gecombineerd met chemische adsorptie voor smaak- en geurverbetering. (2) Sediment + UV: sedimentfilter zorgt voor helder water zodat UV-licht maximaal penetreert voor effectieve desinfectie. (3) Sediment + RO: de meest complete combinatie — sedimentfilter als pre-filter beschermt het dure RO-membraan tegen fouling. In een compleet RO-systeem zijn sedimentfilter, koolstoffilter en RO-membraan altijd gecombineerd.',
  },
];

const modellenTabel = [
  {
    model: 'Pentek P5 (10")',
    type: 'Melt-blown PP',
    micron: '5 µm nominaal',
    prijs: '€4–7 / cartridge',
    behuizing: 'Standard 10"',
    doorstroom: '8 L/min',
    highlight: false,
  },
  {
    model: 'Aquafilter FCPS5 (10")',
    type: 'Melt-blown PP',
    micron: '5 µm nominaal',
    prijs: '€3–5 / cartridge',
    behuizing: 'Standard 10"',
    doorstroom: '8 L/min',
    highlight: false,
  },
  {
    model: 'Pentek R50-BB (20")',
    type: 'Geplooide polyester',
    micron: '50 µm nominaal',
    prijs: '€12–18 / cartridge',
    behuizing: 'Big Blue 20"',
    doorstroom: '40 L/min',
    highlight: false,
  },
  {
    model: 'Watts WPC5 (10")',
    type: 'Melt-blown PP',
    micron: '5 µm nominaal',
    prijs: '€4–8 / cartridge',
    behuizing: 'Standard 10"',
    doorstroom: '8 L/min',
    highlight: true,
  },
  {
    model: 'Ecosoft CPV4510ECO (20")',
    type: 'Geplooide PP',
    micron: '10 µm nominaal',
    prijs: '€8–15 / cartridge',
    behuizing: 'Big Blue 20"',
    doorstroom: '25 L/min',
    highlight: false,
  },
];

const combinatieTabel = [
  {
    combinatie: 'Sediment + koolstof',
    werking: 'Deeltjes + chloor/smaak',
    geschikt: 'Leidingwater met smaak/geurproblemen',
    jaarkosten: '€20–80',
  },
  {
    combinatie: 'Sediment + UV',
    werking: 'Deeltjes + microbiologische desinfectie',
    geschikt: 'Putwater, bronwater, oppervlaktewater',
    jaarkosten: '€30–100',
  },
  {
    combinatie: 'Sediment + RO',
    werking: 'Deeltjes + volledige waterzuivering',
    geschikt: 'Maximale drinkwaterkwaliteit, nitraten, PFAS',
    jaarkosten: '€50–150',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Sedimentfilter', url: 'https://waterfilterplatform.nl/sedimentfilter' },
  { name: 'Kopen', url: 'https://waterfilterplatform.nl/sedimentfilter/kopen' },
];

export default function SedimentfilterKopenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Sedimentfilter kopen: micronwaardes, types en koopgids 2026',
          description:
            'Koopgids voor sedimentfilters: micronwaarde per waterbron, 5-model vergelijking, installatie en pre-filtercombinaties.',
          datePublished: '2026-03-20',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/sedimentfilter/kopen',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/sedimentfilter" className="hover:text-[#005F8A]">Sedimentfilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Sedimentfilter kopen: micronwaardes, types en koopgids 2026
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            U wilt een sedimentfilter kopen, maar welke micronwaarde heeft u nodig voor uw
            waterbron? Welk formaat behuizing past bij uw situatie? Op deze pagina vindt u een
            complete koopgids met een 5-model vergelijking, advies per waterbron, installatietips
            en een overzicht van de meest effectieve filtercombinaties.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sedimentfilter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              ← Terug naar sedimentfilter uitleg
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose filter kopen →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Sedimentfilter kopen: voor putwater kiest u 1–5 µm, voor leidingwater 10–20 µm, voor irrigatie 20–50 µm. Standaard 10-inch behuizing (€15–40) voor thuisgebruik; big blue 20-inch voor hoger debiet. Merken: Pentek, Watts, Aquafilter, Ecosoft. Jaarkosten: €8–60. Cartridges vervangen in 3–12 maanden afhankelijk van waterkwaliteit. Sedimentfilter altijd als pre-filter voor koolstof, UV of RO." />

        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#micron-advies', 'Welke micronwaarde per waterbron?'],
              ['#behuizing', 'Behuizingformaten: 10-inch vs big blue'],
              ['#modellen', 'Modellenvergelijking (5 modellen)'],
              ['#merken', 'Beste merken'],
              ['#quickchange', 'Quick-change vs standaard'],
              ['#heel-huis', 'Heel-huis vs point-of-use'],
              ['#installatie', 'Installatie'],
              ['#jaarkosten', 'Jaarkosten berekenen'],
              ['#combinaties', 'Pre-filtercombinaties'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Micron advies */}
        <section id="micron-advies">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke micronwaarde kiest u per waterbron?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            De juiste micronwaarde hangt volledig af van uw waterbron en het doel van het filter.
            Onderstaand schema helpt u de juiste keuze te maken op basis van uw situatie.
          </p>
          <div className="space-y-4">
            {[
              {
                bron: 'Put- of boringwater',
                micron: '1–5 µm',
                kleur: 'green',
                uitleg: 'Putwater bevat doorgaans meer fijn slib, sediment en biologische deeltjes dan leidingwater. Een 5 µm filter is standaard; bij sterk verontreinigd putwater combineert u een 20–50 µm coarsefilter als eerste stap met een 5 µm als tweede stap. Voeg een UV-filter toe voor microbiologische bescherming.',
              },
              {
                bron: 'Gemeentelijk leidingwater',
                micron: '10–20 µm',
                kleur: 'amber',
                uitleg: 'Nederlands leidingwater is reeds behandeld en heeft een lage turbiditeit (<1 NTU). Een 10 µm sedimentfilter is voldoende als pre-filter voor een koolstof- of osmosefilter. Bij oudere leidingen met roestdeeltjes kiest u 5 µm.',
              },
              {
                bron: 'Irrigatiewater / regenwater',
                micron: '20–50 µm',
                kleur: 'gray',
                uitleg: 'Voor irrigatietoepassingen zijn grovere partikels het voornaamste probleem. Een 20–50 µm filter beschermt druppelaaropeningen en sproeierkoppen. Voor menselijke consumptie is aanvullende behandeling altijd nodig.',
              },
              {
                bron: 'Oppervlaktewater (rivier, vijver)',
                micron: '1 µm (na 20 µm voorfase)',
                kleur: 'red',
                uitleg: 'Oppervlaktewater heeft de hoogste sedimentlast (10–500 NTU). Gebruik een cascade: 50 µm → 20 µm → 5 µm → 1 µm. Combineer altijd met UV-desinfectie of RO. Oppervlaktewater is geen geschikte drinkwaterbron zonder uitgebreide behandeling.',
              },
            ].map(r => (
              <div key={r.bron} className={`border rounded-2xl p-5 ${
                r.kleur === 'green' ? 'bg-green-50 border-green-100' :
                r.kleur === 'amber' ? 'bg-amber-50 border-amber-100' :
                r.kleur === 'red' ? 'bg-red-50 border-red-100' :
                'bg-gray-50 border-gray-100'
              }`}>
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-gray-900">{r.bron}</p>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    r.kleur === 'green' ? 'bg-green-100 text-green-800' :
                    r.kleur === 'amber' ? 'bg-amber-100 text-amber-800' :
                    r.kleur === 'red' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>{r.micron}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{r.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Behuizing */}
        <section id="behuizing">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Behuizingformaten: 10-inch standaard vs 20-inch big blue</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sedimentfilterbehuizingen zijn in twee standaardmaten beschikbaar voor huishoudelijk
            gebruik. De behuizingmaat bepaalt de cartridgemaat en daarmee de doorstromingscapaciteit
            en de filterlevensduur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-3">10-inch standaard</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Afmetingen cartridge: 10" × 2,5"',
                  'Doorstroom: tot 8 L/min',
                  'Behuizing: €15–40',
                  'Cartridge: €2–15 per stuk',
                  'Meest gangbare huishoudelijke maat',
                  'Groot aanbod van alle merken',
                  'Geschikt voor 1–4 personen',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#005F8A] font-bold shrink-0 text-xs mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#005F8A]/20 rounded-2xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-bold text-[#003F5C] mb-3">20-inch big blue</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Afmetingen cartridge: 20" × 4,5"',
                  'Doorstroom: 10–40 L/min',
                  'Behuizing: €40–120',
                  'Cartridge: €8–25 per stuk',
                  'Voor heel-huissystemen',
                  'Langere levensduur per cartridge',
                  'Geschikt voor 4+ personen of hoog verbruik',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#005F8A] font-bold shrink-0 text-xs mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Voor de meeste Nederlandse huishoudens met leidingwater is een 10-inch standaard
            behuizing met een 5 µm cartridge voldoende. Voor een volledig huis met putwater of
            bij een hoger verbruik is een big blue de betere keuze. Meer over de technische
            werking leest u op de pagina{' '}
            <Link href="/sedimentfilter/werking" className="text-[#005F8A] underline hover:no-underline">
              sedimentfilter werking
            </Link>.
          </p>
        </section>

        {/* Modellen */}
        <section id="modellen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Modellenvergelijking: 5 sedimentfilters 2026</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Model</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Micron</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Cartridge</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Behuizing</th>
                  <th className="py-2.5 px-3 font-semibold text-right hidden md:table-cell">Doorstroom</th>
                </tr>
              </thead>
              <tbody>
                {modellenTabel.map((r) => (
                  <tr
                    key={r.model}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium border-b border-[#005F8A]/10' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">
                      {r.model}
                      {r.highlight && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.type}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-[#005F8A] font-medium">{r.micron}</td>
                    <td className="py-2.5 px-3 text-right font-semibold">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-center text-xs hidden sm:table-cell">{r.behuizing}</td>
                    <td className="py-2.5 px-3 text-right text-xs text-gray-500 hidden md:table-cell">{r.doorstroom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prijzen zijn richtprijzen voor de Nederlandse markt in 2026. Cartridgeprijzen voor
            losse aanschaf; bij verpakking van 5–10 stuks is de prijs lager.
          </p>
        </section>

        {/* Merken */}
        <section id="merken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Beste merken voor sedimentfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                merk: 'Pentek (Pentair)',
                omschrijving: 'Marktleider in professionele filtratie. Brede productlijn van 0,5–50 µm in alle standaardmaten. NSF-gecertificeerd, uitstekende kwaliteitsconsistentie. Licht duurder maar erg betrouwbaar.',
              },
              {
                merk: 'Aquafilter',
                omschrijving: 'Betaalbaar Europees merk met een breed assortiment. Goed prestatie/prijs-verhouding voor huishoudelijk gebruik. Leverbaar bij de meeste Nederlandse waterfilterwebshops.',
              },
              {
                merk: 'Watts Water Technologies',
                omschrijving: 'Kwalitatieve behuizingen en cartridges voor residentieel en licht commercieel gebruik. Sterke reputatie in de installatiemarkt. Behuizingen zijn langdurig en lekvrij.',
              },
              {
                merk: 'Ecosoft',
                omschrijving: 'Populair Europees merk met een goede prijs/kwaliteitverhouding. Breed leverbaar in Nederland en België via gespecialiseerde webshops. Zowel standaard als big blue formaten beschikbaar.',
              },
            ].map(item => (
              <div key={item.merk} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-1">{item.merk}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.omschrijving}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick-change */}
        <section id="quickchange">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Quick-change vs standaard: wanneer de meerprijs waard?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Standaard systeem</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Behuizing met handsluitring of met speciale sleutel openen. Cartridge handmatig
                wisselen. Meer contact met het filteredmedium bij vervanging. Goedkopere cartridges.
                Geschikt voor locaties met gemakkelijke toegang.
              </p>
              <p className="text-xs text-gray-500">Cartridges: €2–15 | Behuizing: €15–80</p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-2xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-bold text-[#003F5C] mb-2">Quick-change systeem</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Cartridge met kwartdraai wisselen zonder gereedschap en zonder de binnenkant
                van de behuizing aan te raken. Hygiënischer en sneller. Iets duurdere cartridges.
                Aanbevolen bij frequent wisselen of moeilijk bereikbare installaties.
              </p>
              <p className="text-xs text-[#005F8A]">Cartridges: +20–40% duurder | Behuizing: €40–120</p>
            </div>
          </div>
        </section>

        {/* Heel-huis */}
        <section id="heel-huis">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Heel-huis vs point-of-use installatie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waar in het huis installeert u uw sedimentfilter? De keuze hangt af van uw doel:
            alle apparaten beschermen of alleen uw drinkwaterpunt verbeteren.
          </p>
          <div className="space-y-3">
            {[
              {
                type: 'Point-of-use (POU) — onder aanrecht',
                wanneer: 'U wilt alleen uw drinkwater verbeteren. Eenvoudig te installeren. Beschermt koolstof- en RO-filter.',
                kosten: 'Behuizing €15–40, cartridges €8–60/jaar',
              },
              {
                type: 'Heel-huis (POE) — op hoofdleiding',
                wanneer: 'U wilt uw hele leidingnet beschermen: wasmachine, boiler, douche en keuken. Vereist een grotere big blue behuizing en een plumber voor installatie.',
                kosten: 'Behuizing €40–120, installatie €50–150, cartridges €20–100/jaar',
              },
            ].map(r => (
              <div key={r.type} className="border border-gray-100 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-1">{r.type}</p>
                <p className="text-sm text-gray-600 mb-2">{r.wanneer}</p>
                <p className="text-xs text-[#005F8A] font-medium">{r.kosten}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie: zelf doen of een loodgieter bellen?</h2>
          <div className="space-y-3">
            {[
              {
                stap: 'Cartridge vervangen (bestaand systeem)',
                moeilijkheid: 'Eenvoudig — zelf te doen',
                desc: 'Watertoevoer afsluiten, behuizing losdraaien (met sleutel of handkracht), oude cartridge verwijderen, nieuwe plaatsen, behuizing sluiten, watertoevoer openen. Geen gereedschap nodig. Duurt 5–10 minuten.',
              },
              {
                stap: 'Nieuwe POU behuizing installeren',
                moeilijkheid: 'Gemiddeld — doe-het-zelver mogelijk',
                desc: 'Behuizing met aansluitingen verbinden aan de koudwaterleiding onder het aanrecht. Vereist snelkoppelingen of compressiefittingen en een boring in de toevoerleiding. Handige doe-het-zelver kan dit zelfstandig. Lekkagetest altijd nodig na installatie.',
              },
              {
                stap: 'Heel-huis behuizing op hoofdleiding',
                moeilijkheid: 'Vereist een loodgieter',
                desc: 'Installatie op de hoofdwaterleiding vereist afsluiters, bypass-mogelijkheden en geschikte leidingaansluitingen. Een loodgieter plaatst dit in 1–2 uur. Investering: €50–150 arbeidskosten.',
              },
            ].map((s, i) => (
              <div key={s.stap} className="flex gap-4 border border-gray-100 rounded-xl p-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <p className="font-bold text-[#003F5C] text-sm">{s.stap}</p>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">{s.moeilijkheid}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jaarkosten */}
        <section id="jaarkosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Jaarkosten berekenen: hoeveel kost een sedimentfilter per jaar?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De jaarlijkse kosten van een sedimentfilter bestaan uit de behuizing (eenmalig, 10–20
            jaar levensduur) en de filterpatronen. Bereken uw jaarkosten met de formule:
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700 mb-5">
            <strong className="text-[#003F5C]">Jaarkosten = (aantal vervangingen per jaar) × (prijs per cartridge)</strong>
            <p className="mt-2">Voorbeeld: leidingwater, 10-inch, 5 µm cartridge à €4, eens per 6 maanden = 2 × €4 = <strong>€8/jaar</strong></p>
            <p className="mt-1">Voorbeeld: putwater, 10-inch, 5 µm cartridge à €4, eens per maand = 12 × €4 = <strong>€48/jaar</strong></p>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[420px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Situatie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Interval</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { situatie: 'Helder leidingwater (10-inch, 5 µm)', interval: '12 maanden', kosten: '~€4–8' },
                  { situatie: 'Normaal leidingwater (10-inch, 5 µm)', interval: '6 maanden', kosten: '~€8–16' },
                  { situatie: 'Putwater, matig troebel (10-inch, 5 µm)', interval: '2–3 maanden', kosten: '~€20–48' },
                  { situatie: 'Sterk troebel putwater (10-inch, 5 µm)', interval: '4–6 weken', kosten: '~€40–100' },
                  { situatie: 'Heel-huis big blue (20-inch)', interval: '6–12 maanden', kosten: '~€16–50' },
                ].map((r, i) => (
                  <tr key={r.situatie} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 text-gray-800">{r.situatie}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.interval}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Combinaties */}
        <section id="combinaties">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Pre-filtercombinaties: sediment + koolstof, UV of RO</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een sedimentfilter is zelden een alleenstaand systeem — het is altijd een onderdeel van
            een bredere waterbehandelingsoplossing. De drie meest effectieve combinaties zijn:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Combinatie</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Wat het verwijdert</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden sm:table-cell">Geschikt voor</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {combinatieTabel.map((r, i) => (
                  <tr key={r.combinatie} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.combinatie}</td>
                    <td className="py-2.5 px-3 text-gray-700 text-xs">{r.werking}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs hidden sm:table-cell">{r.geschikt}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.jaarkosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Voor de meest complete drinkwaterzuivering — inclusief bacteriën, virussen, nitraten,
            PFAS, kalk en chemicaliën — combineert u een sedimentfilter met een koolstoffilter en
            een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose membraan
            </Link>.
            Dit systeem met nafilter biedt waterkwaliteit die beter is dan de meeste flessenwater.
          </p>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/sedimentfilter',
                title: 'Sedimentfilter overzicht',
                desc: 'Complete gids over sedimentfilters: werking, typen en wanneer kiezen.',
              },
              {
                href: '/sedimentfilter/werking',
                title: 'Werking sedimentfilter',
                desc: 'Mechanische filtratie, micronwaardes en drukval technisch uitgelegd.',
              },
              {
                href: '/keramisch-filter/kopen',
                title: 'Keramisch waterfilter kopen',
                desc: 'Gebruik een sedimentfilter als pre-filter voor uw keramisch filter.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Sedimentfilter is altijd de eerste stap in een RO-systeem.',
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

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over een sedimentfilter kopen
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
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
