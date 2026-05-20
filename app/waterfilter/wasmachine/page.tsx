import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor wasmachine: minder kalk, betere was (2026)',
  description:
    'Welk antikalkfilter past bij jouw wasmachine? Vergelijk polyfosfoaat doseerunit, magnetisch antikalk, sedimentfilter en waterontharder.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/wasmachine' },
  openGraph: {
    title: 'Waterfilter voor wasmachine: minder kalk, betere was (2026)',
    description:
      'Welk antikalkfilter past bij jouw wasmachine? Vergelijk polyfosfoaat doseerunit, magnetisch antikalk, sedimentfilter en waterontharder.',
    url: 'https://waterfilterplatform.nl/waterfilter/wasmachine',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Heeft mijn wasmachine een waterfilter nodig?',
    answer:
      'Of een waterfilter zinvol is, hangt sterk af van de waterhardheid in jouw gemeente. Bij zacht water (<8°dH) is een waterfilter niet noodzakelijk. Bij matig hard water (8–15°dH) is een polyfosfoaat doseerunit een goedkope bescherming. Bij hard water (>15°dH) is actieve antikalkbehandeling sterk aan te bevelen om schade aan het verwarmingselement en de trommel te voorkomen. Controleer de waterhardheid via onze gemeentepagina\'s.',
  },
  {
    question: 'Wat doet hard water met een wasmachine?',
    answer:
      'Hard water bevat hoge concentraties calcium en magnesium. Bij verhitting (40°C en hoger) slaan deze mineralen neer als kalk op het verwarmingselement, in de trommel, op de deur en sluitmechanismen. Kalk is een thermische isolator: elke 1 mm kalk verhoogt het energieverbruik met 7–10% en verkort de levensduur van het verwarmingselement. Na 3–5 jaar hard watergebruik zonder bescherming kunnen verwarmingselementen doorbranden.',
  },
  {
    question: 'Wat is een polyfosfoaat doseerunit en hoe werkt het?',
    answer:
      'Een polyfosfoaat doseerunit is een inline-filter die kleine hoeveelheden calciumfosfoaat of natriumtripolyfosfoaat aan het water toevoegt. Deze stof bindt zich aan calcium en magnesiumionen en voorkomt dat ze als harde kalk neerslaan op verwarmingselementen. Het maakt water niet zacht maar voorkomt kalkafzetting. Kosten: €15–40 aanschaf, vervangingspatroon elk jaar. NSF-gecertificeerde varianten zijn beschikbaar.',
  },
  {
    question: 'Werkt een magnetisch antikalk-apparaat echt?',
    answer:
      'Magnetische antikalk-apparaten claimen dat een magnetisch veld de kristalstructuur van kalk verandert, zodat het niet meer hecht aan oppervlakken. Wetenschappelijk bewijs hiervoor is beperkt en wisselend. Onafhankelijke tests tonen weinig tot geen effect op schaalvorming. Ze zijn wel volledig onderhoudsloos en betaalbaar (€20–60 aanschaf, nul verbruikskosten). Ze worden niet aanbevolen als primaire antikalkoplossing bij hard water boven 15°dH.',
  },
  {
    question: 'Kan ik een waterontharder aansluiten op mijn wasmachine?',
    answer:
      'Ja, een waterontharder op de watertoevoer van de wasmachine verwijdert 95–99% van calcium en magnesium via ionenwisseling. Dit is de meest effectieve antikalkoplossing. Nadeel: waterontharders voegen natrium toe aan het water (ca. 12 mg Na+ per °dH verwijderd). Dit is bij lage concentraties geen probleem voor de was. Kosten: €400–1.500 voor een centrale ontharder voor het hele huis. Compacte onder-aanrecht ontharders zijn goedkoper.',
  },
  {
    question: 'Hoeveel detergent kan ik besparen bij zacht of gefilterd water?',
    answer:
      'Bij zacht water (tot 8°dH) heeft wasmiddel geen kalkbindende functie nodig en kun je 30–40% minder wasmiddel gebruiken dan de verpakking aangeeft (die is gebaseerd op gemiddeld hard water). Bij hard water (>15°dH) bindт een groot deel van het wasmiddel zich aan kalkmineralen in plaats van vuil te verwijderen. Zacht water bespaart naast detergent ook spoelmiddel en verlengt de levensduur van rubber seals en pompen.',
  },
  {
    question: 'Welk filter kies ik bij waterhardheid boven 20°dH?',
    answer:
      'Bij extreem hard water (>20°dH) is een actieve ionenwisseling-waterontharder of een combinatie van ontharder en sedimentfilter de enige effectieve oplossing. Polyfosfoaat doseerunit kan als aanvulling dienen maar is onvoldoende als stand-alone. Controleer de waterhardheid in jouw regio — sommige gebieden in Limburg en de Randstad hebben waterhardheid tot 22°dH. Zie onze waterhardheid per gemeente-pagina.',
  },
  {
    question: 'Hoe lang gaat mijn wasmachine langer mee door een waterfilter?',
    answer:
      'Een wasmachine bij hard water zonder bescherming gaat gemiddeld 8–12 jaar mee; met actieve antikalkbehandeling kan dit 13–18 jaar worden. Het verwarmingselement is het meest kwetsbare onderdeel: bij hard water slijt het 3–4x sneller. Vervanging van een verwarmingselement kost €150–300 inclusief arbeid. Een polyfosfoaat filter van €25 per jaar verdient zichzelf terug in vermeden reparatiekosten binnen 1–3 jaar.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
  { name: 'Wasmachine', url: 'https://waterfilterplatform.nl/waterfilter/wasmachine' },
];

const filterOpties = [
  {
    type: 'Polyfosfoaat doseerunit',
    kosten: '€15–40 aanschaf, €10–20/jaar patroon',
    effectiviteit: 'Goed (kalkafzetting voorkomt)',
    onderhoud: 'Jaarlijks patroon vervangen',
    installatie: 'Eenvoudig (inline op watertoevoer)',
    voorWie: 'Matig hard water (8–18°dH)',
  },
  {
    type: 'Magnetisch antikalk',
    kosten: '€20–60 aanschaf, geen verbruikskosten',
    effectiviteit: 'Beperkt (wetenschappelijk omstreden)',
    onderhoud: 'Geen',
    installatie: 'Eenvoudig (klemmen op waterleiding)',
    voorWie: 'Licht hard water, budget oplossing',
  },
  {
    type: 'Inline sediment + koolfilter',
    kosten: '€30–60 aanschaf, €20–30/jaar',
    effectiviteit: 'Beperkt (sediment, geen kalk)',
    onderhoud: '6-maandelijks filter vervangen',
    installatie: 'Eenvoudig',
    voorWie: 'Zacht water, vuil sediment in leidingen',
  },
  {
    type: 'Compacte waterontharder',
    kosten: '€200–600 aanschaf, zout bijvullen',
    effectiviteit: 'Uitstekend (95–99% kalkverwijdering)',
    onderhoud: 'Maandelijks zout bijvullen',
    installatie: 'Professioneel (waterleiding aanpassen)',
    voorWie: 'Hard water (>15°dH)',
  },
  {
    type: 'Centrale waterontharder (heel huis)',
    kosten: '€800–2.000 aanschaf, zout bijvullen',
    effectiviteit: 'Uitstekend (99% kalkverwijdering)',
    onderhoud: 'Maandelijks zout bijvullen',
    installatie: 'Professioneel (installateur nodig)',
    voorWie: 'Heel huis, hard water >15°dH',
  },
];

export default function WaterfilterWasmacinePage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter voor wasmachine: minder kalk, betere was (2026)',
          description:
            'Welk antikalkfilter past bij jouw wasmachine? Vergelijk filteropties, leer over waterhardheid-drempels en bereken de ROI.',
          datePublished: '2026-03-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterfilter/wasmachine',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Wasmachine</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Waterfilter voor wasmachine: minder kalk, betere was (2026)
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            Hard water is de stille sloopkogel van de wasmachine. Kalk tast het verwarmingselement
            aan, verstopt de trommel en verslechtert het wasresultaat. Een eenvoudig antikalkfilter
            kan je wasmachine jarenlang langer laten meegaan.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">
              Bijgewerkt mei 2026
            </span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">
              ~8 min leestijd
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        <QuickAnswer answer="Bij waterhardheid boven 12°dH is een antikalkfilter voor de wasmachine aan te bevelen. Een polyfosfoaat doseerunit (€20–40) is de meest kosteneffectieve optie voor matig hard water. Bij hard water boven 18°dH is een compacte waterontharder effectiever. Controleer eerst de waterhardheid in jouw gemeente." />

        {/* Hoe hard water schade veroorzaakt */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe hard water schade veroorzaakt aan de wasmachine
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Leidingwater bevat altijd calcium (Ca²⁺) en magnesium (Mg²⁺) — in meer of mindere mate
            afhankelijk van de regio. Bij verhitting van het water — wat bij iedere wasbeurt boven
            30°C plaatsvindt — precipiteren deze ionen als harde kalkneerslag (calciumcarbonaat, CaCO₃).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De gevolgen voor de wasmachine zijn verstrekkend:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-5 space-y-2">
            <li>
              <strong>Verwarmingselement:</strong> Kalk is een thermische isolator. Elke 1 mm
              kalklaag op het verwarmingselement verlaagt de thermische geleiding met 7–10% en
              verhoogt het energieverbruik. Na 2–3 mm kalk is de kans op doorbranden van het element
              sterk verhoogd.
            </li>
            <li>
              <strong>Trommel en binnenbehuizing:</strong> Kalkafzetting in de trommel veroorzaakt
              een ruw oppervlak dat kleding beschadigt bij hoge centrifugesnelheden. Zichtbaar als
              witte aanslag en een ruwe trommelwand.
            </li>
            <li>
              <strong>Rubberen afdichtingen (sealings):</strong> Kalk kristalliseert in de seals
              van de trommel en de deur. Dit veroorzaakt op termijn lekkages en veroudering van het
              rubber — een dure reparatie.
            </li>
            <li>
              <strong>Pomp en filters:</strong> Kalkdeeltjes die losschieten kunnen de
              afvoerpomp beschadigen en kleine filterscheertjes verstoppen.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            De ernst van kalkschade hangt direct samen met de waterhardheid. Controleer{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              de waterhardheid in jouw gemeente
            </Link>{' '}
            om te beoordelen welk beschermingsniveau jij nodig hebt.
          </p>
        </section>

        {/* Waterhardheid drempels */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Bij welke waterhardheid is een filter noodzakelijk?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Hardheid</th>
                  <th className="text-center px-4 py-3 font-semibold">°dH</th>
                  <th className="text-left px-4 py-3 font-semibold">Risico</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Aanbeveling</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { hard: 'Zacht', dh: '<8°dH', risico: 'Geen kalkschade', advies: 'Geen filter nodig' },
                  { hard: 'Matig zacht', dh: '8–12°dH', risico: 'Minimaal, langzame opbouw', advies: 'Optioneel polyfosfoaat' },
                  { hard: 'Matig hard', dh: '12–18°dH', risico: 'Merkbare kalkvorming na 2–3 jaar', advies: 'Polyfosfoaat doseerunit aanbevolen' },
                  { hard: 'Hard', dh: '18–22°dH', risico: 'Snelle kalkschade, verhoogd risico', advies: 'Polyfosfoaat + compacte ontharder' },
                  { hard: 'Zeer hard', dh: '>22°dH', risico: 'Ernstige schade binnen 1–2 jaar', advies: 'Centrale waterontharder noodzakelijk' },
                ].map((row, i) => (
                  <tr key={row.hard} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.hard}</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#005F8A]">{row.dh}</td>
                    <td className="px-4 py-3 text-gray-700">{row.risico}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.advies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Filteropties */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filteropties voor wasmachinebescherming
          </h2>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            1. Polyfosfoaat doseerunit
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            De meest populaire antikalkoplossing voor wasmachines. De doseerunit wordt inline op de
            koude watertoevoer van de wasmachine gemonteerd. Het filtermedium — natriumtripolyfosfoaat
            of calciumfosfoaat — lost langzaam op in het water en vormt een beschermende coating op
            metalen oppervlakken. Kalk kan hierdoor niet meer hechten.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Aanschafprijs: €15–40</li>
            <li>Vervangingspatroon: €8–15 per jaar</li>
            <li>Installatie: aansluiting op 3/4&quot; waterslang (5–10 minuten)</li>
            <li>Geen elektriciteit, geen waterafval, geen zout</li>
            <li>Geschikt tot ca. 18°dH; daarboven aanvulling nodig</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            2. Magnetisch antikalk
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Magnetische antikalk-apparaten worden om de waterleiding geklemd zonder extra installatie.
            Ze claimen de kristalstructuur van kalk te wijzigen zodat het minder hecht. Het
            wetenschappelijke bewijs is beperkt. Geschikt als goedkope aanvulling of bij lichte
            waterhardheid, maar niet als primaire oplossing bij hard water (&gt;15°dH).
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            3. Inline sediment + koolstoffilter
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een inline filter met sediment- en koollaag beschermt de wasmachine tegen roestdeeltjes,
            zand en sediment uit de waterleiding, maar verwijdert geen kalk. Zinvol in oudere
            woningen met roestige leidingen of als aanvulling op een antikalkbehandeling.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            4. Compacte waterontharder of hele-huis waterontharder
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een ionenwisseling-waterontharder is de meest effectieve kalkbehandeling (95–99%
            verwijdering). Hetzelfde zachte water beschermt ook alle andere apparaten: vaatwasser,
            boiler, douche en kranen. Centrale ontharders vereisen een professionele installateur en
            periodiek zout bijvullen. Leer meer over{' '}
            <Link href="/waterfilter/voor-hard-water" className="text-[#005F8A] underline hover:no-underline">
              waterfilters voor hard water
            </Link>
            .
          </p>
        </section>

        {/* Vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijking: 5 antikalkopties voor de wasmachine
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Filtertype</th>
                  <th className="text-left px-4 py-3 font-semibold">Kosten</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Effectiviteit</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Installatie</th>
                  <th className="text-left px-4 py-3 font-semibold">Voor wie</th>
                </tr>
              </thead>
              <tbody>
                {filterOpties.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                    <td className="px-4 py-3 text-gray-700 text-xs">{row.kosten}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs hidden sm:table-cell">{row.effectiviteit}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs hidden md:table-cell">{row.installatie}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.voorWie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ROI berekening */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            ROI-berekening: wat levert een waterfilter op?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De financiële voordelen van antikalkbehandeling zijn concreet:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            <div className="bg-[#E0F2FE] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#003F5C]">3–5 jaar</p>
              <p className="text-sm text-gray-600 mt-1">Langere machinelevensduur</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#003F5C]">€150–300</p>
              <p className="text-sm text-gray-600 mt-1">Vermeden reparatiekosten (verwarmingselement)</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#003F5C]">30–40%</p>
              <p className="text-sm text-gray-600 mt-1">Minder wasmiddel nodig bij zacht water</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Rekenvoorbeeld:</strong> Een polyfosfoaat doseerunit kost €25 aanschaf plus €15
            per jaar voor het vervangingspatroon. Over 5 jaar: €100 totale kosten. In diezelfde periode
            verlengt het de machinelevensduur met gemiddeld 3–5 jaar, vermijdt 1–2 verwarmingselement
            vervangingen (€300–600 bespaard) en bespaart 30% op wasmiddel (€30–50 per jaar). De
            terugverdientijd van een polyfosfoaat filter is doorgaans minder dan 1 jaar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wasmiddelbesparingen zijn ook relevant: bij zacht of verzacht water hoef je 30–40% minder
            wasmiddel te gebruiken dan de verpakking aangeeft. Dit geldt ook voor vaatwastabletten.
          </p>
        </section>

        {/* Link waterhardheid gemeentes */}
        <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-5">
          <p className="font-semibold text-[#003F5C] mb-2">
            Weet jij hoe hard het water is in jouw gemeente?
          </p>
          <p className="text-sm text-gray-700 mb-3">
            De waterhardheid varieert sterk per regio in Nederland — van 3°dH in sommige delen van
            Friesland tot 22°dH in delen van Limburg en de Gelderse Vallei. Bekijk onze
            gemeentepagina&apos;s voor exacte waarden.
          </p>
          <Link
            href="/waterhardheid"
            className="inline-block bg-[#005F8A] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#003F5C] transition-colors"
          >
            Controleer waterhardheid jouw gemeente →
          </Link>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
              <p className="text-sm text-gray-600">Uitleg over ionenwisseling en hoe een waterontharder calcium en magnesium verwijdert.</p>
            </Link>
            <Link href="/waterhardheid/behandelingsadvies" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Behandelingsadvies waterhardheid</h3>
              <p className="text-sm text-gray-600">Persoonlijk advies over de beste behandeling op basis van jouw waterhardheid in graden dH.</p>
            </Link>
            <Link href="/waterfilter/voor-hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor hard water</h3>
              <p className="text-sm text-gray-600">Vergelijking van alle onthardingsopties voor hard water: magneten, ionenwisselaars en osmose.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
              <p className="text-sm text-gray-600">Vind de juiste aanpak voor jouw hardwaterprobleem met onze stap-voor-stap keuzehulp.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilters voor de wasmachine
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

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/waterhardheid', title: 'Waterhardheid per gemeente', desc: 'Controleer of je hard of zacht leidingwater hebt.' },
              { href: '/waterfilter/voor-hard-water', title: 'Waterfilter voor hard water', desc: 'Vergelijking van alle onthardingsopties voor hard water.' },
              { href: '/waterfilter/soorten', title: 'Alle waterfiltersoorten', desc: 'Van filterkan tot osmose — overzicht en vergelijking.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose uitleg', desc: 'Hoe RO-filters werken en wat ze verwijderen.' },
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

      </div>
    </>
  );
}
