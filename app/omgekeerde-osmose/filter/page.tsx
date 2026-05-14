import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Omgekeerde Osmose Filter: Uitleg & Keuze 2026',
  description:
    'Hoe werkt een omgekeerde osmose filter? Uitleg over sedimentfilter, koolstoffilter, RO-membraan, nafilter, TFC vs CTA en NSF/ANSI-certificeringen. Keuze 4-, 5- of 6-traps.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/filter' },
  openGraph: {
    title: 'Omgekeerde Osmose Filter: Uitleg & Keuze 2026',
    description:
      'Van sedimentprefilter tot remineralisatie: lees hoe elke filterstap werkt, wat TFC vs CTA membranen zijn en hoe u de juiste trappenset kiest.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose/filter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe vaak moet ik de filters van mijn omgekeerde osmose systeem vervangen?',
    answer:
      'De sediment- en koolstofprefilters vervangt u doorgaans elke 6 tot 12 maanden, afhankelijk van de waterkwaliteit. Het RO-membraan zelf gaat 2 tot 3 jaar mee. Een nacarbon- of remineralisatiefilter vervangt u jaarlijks. Sommige systemen geven een digitale filterstatus via een app of LED-indicator. Raadpleeg altijd de handleiding van uw specifieke systeem voor de aanbevolen intervallen.',
  },
  {
    question: 'Wat is het verschil tussen een TFC- en een CTA-membraan?',
    answer:
      'TFC (Thin-Film Composite) membranen bestaan uit meerdere lagen: een polyamide toplaag voor hoge retentie (95-99%), een polysulfon tussenlaag en een polyester drager. Ze zijn chloorintolerant maar halen het beste filterbereik. CTA (Cellulose Tri-Acetate) membranen zijn gemaakt van acetaatcellulose, tolereren kleine hoeveelheden chloor en zijn daarmee geschikter voor gechlooreerd leidingwater zonder actief koolstofprefilter. Het nadeel van CTA is een lagere retentie (88-95%) en hogere gevoeligheid voor bacteriën. Voor thuisgebruik op Nederlands leidingwater is TFC met koolstofprefilter de aanbevolen keuze.',
  },
  {
    question: 'Wat betekent NSF/ANSI 58 certificering voor een osmosefilter?',
    answer:
      'NSF/ANSI 58 is de Amerikaanse norm voor systemen voor omgekeerde osmose in de residentiële sector. Certificering vereist dat een onafhankelijk laboratorium verifieert dat het systeem daadwerkelijk de retentiepercentages haalt die de fabrikant claimt, en dat de materialen geen schadelijke stoffen afstaan aan het drinkwater. NSF/ANSI 42 dekt de reductie van chloor en smaakbepalende stoffen; NSF/ANSI 61 certificeert dat componenten drinkwaterveilig zijn. Let op: niet elke fabrikant vraagt certificering aan, maar een gecertificeerd systeem biedt aanzienlijk meer zekerheid over de filterprestaties.',
  },
  {
    question: 'Hoe kies ik tussen een 4-traps, 5-traps of 6-traps osmosesysteem?',
    answer:
      'Een 4-traps systeem (sediment + koolstof + membraan + nacarbon) is voor de meeste Nederlandse huishoudens met normaal leidingwater voldoende. Een 5-traps systeem voegt een extra prefilter of remineralisatiefilter toe — zinvol bij verhoogde nitraat- of metaalconcentraties. Een 6-traps systeem biedt bovendien UV-sterilisatie of een extra koolstofstap, nuttig bij eigen bronwater of na waterinfrastructuurproblemen. Voor standaard leidingwater biedt 4 of 5 trappen de beste prijs-kwaliteitverhouding.',
  },
  {
    question: 'Hoeveel afvalwater produceert een omgekeerde osmose filter?',
    answer:
      'Traditionele osmosesystemen hebben een concentraatverhouding van 1:3 tot 1:4 — voor elke liter puur water gaat 3 tot 4 liter als concentraat naar het riool. Moderne systemen met permeaatpomp of hoge-efficiëntie membranen halen verhoudingen van 1:1 of zelfs beter. Het afvalwater is niet gevaarlijk — het is gewoon geconcentreerder leidingwater — maar houd hier rekening mee bij uw water- en afvoerkosten. Een systeem met permeaatpomp is ook merkbaar sneller in het aanvullen van de opslagtank.',
  },
];

const filterStages = [
  {
    stap: 1,
    naam: 'Sedimentprefilter',
    media: 'Polypropyleen spunbond (5-20 µm)',
    verwijdert: 'Zand, roest, slib, fijn vuil, chloramine-deeltjes',
    doel: 'Beschermt het RO-membraan tegen fysieke verstopping en verlengt de levensduur',
    interval: '6-12 maanden',
  },
  {
    stap: 2,
    naam: 'Actief koolstofprefilter',
    media: 'Geactiveerde koolstof (kokos of steenkool)',
    verwijdert: 'Chloor, chloorkoolwaterstoffen (THM), pesticiden, organische verbindingen, geur, smaak',
    doel: 'Beschermt het TFC-membraan dat chloor niet verdraagt; verbetert smaak',
    interval: '6-12 maanden',
  },
  {
    stap: 3,
    naam: 'RO-membraan',
    media: 'Thin-Film Composite (TFC) polyamide spiraalgewikkeld',
    verwijdert: 'Nitraten, zware metalen (lood, arseen, koper), bacteriën, virussen, medicijnresten, PFAS, kalk (Ca²⁺/Mg²⁺)',
    doel: 'Kern van het systeem — haalt 95-99% van alle opgeloste stoffen weg',
    interval: '2-3 jaar',
  },
  {
    stap: 4,
    naam: 'Nacarbon (post-carbon)',
    media: 'Geactiveerde koolstof',
    verwijdert: 'Resterende organische verbindingen, plasticgeuren uit de opslagtank',
    doel: 'Polijst het water voor optimale smaak vlak voor consumptie',
    interval: '12 maanden',
  },
  {
    stap: 5,
    naam: 'Remineralisatiefilter (5e trap, optioneel)',
    media: 'Calciet of dolomiet mineraalkorrels',
    verwijdert: 'Nvt — voegt calcium en magnesium toe',
    doel: 'Brengt de pH van osmosewater terug naar 7-8 en voegt gezonde mineralen toe; verbetert smaak',
    interval: '12 maanden',
  },
  {
    stap: 6,
    naam: 'UV-sterilisatie (6e trap, optioneel)',
    media: 'UV-lamp (254 nm)',
    verwijdert: 'Bacteriën, virussen, cysten (extra zekerheid)',
    doel: 'Extra bescherming bij eigen bronwater of bij twijfel over leidingwaterkwaliteit',
    interval: 'Lamp vervangen elke 12 maanden',
  },
];

const systemen = [
  {
    trappen: '4-traps',
    stappen: ['Sediment', 'Koolstof', 'RO-membraan', 'Nacarbon'],
    geschiktVoor: 'Normaal Nederlands leidingwater',
    retentie: '95-98%',
    kostenPerJaar: '€ 40-60',
    highlight: true,
  },
  {
    trappen: '5-traps',
    stappen: ['Sediment', 'Koolstof', 'RO-membraan', 'Nacarbon', 'Remineralisatie'],
    geschiktVoor: 'Hard water, nitraat of als u mineralen wenst',
    retentie: '95-99%',
    kostenPerJaar: '€ 60-90',
    highlight: false,
  },
  {
    trappen: '6-traps',
    stappen: ['Sediment', 'Koolstof', 'RO-membraan', 'Nacarbon', 'Remineralisatie', 'UV'],
    geschiktVoor: 'Bronwater of extra zekerheid over microbiologie',
    retentie: '99%+',
    kostenPerJaar: '€ 80-120',
    highlight: false,
  },
];

const nsfNormen = [
  {
    norm: 'NSF/ANSI 42',
    dekt: 'Reductie van chloor, smaak, geur en deeltjes',
    relevant: 'Koolstofprefilters en nacarbon',
  },
  {
    norm: 'NSF/ANSI 58',
    dekt: 'Prestaties van complete RO-systemen inclusief membraan (retentie van nitraat, TDS, specifieke verontreinigingen)',
    relevant: 'Complete osmosesystemen',
  },
  {
    norm: 'NSF/ANSI 61',
    dekt: 'Materiaalveiligheid: componenten staan geen schadelijke stoffen af aan het drinkwater',
    relevant: 'Alle drinkwatercomponenten',
  },
  {
    norm: 'NSF/ANSI 372',
    dekt: 'Loodvrij — materialen bevatten < 0,25% lood gewogen gemiddeld',
    relevant: 'Fittingen, kranen en behuizingen',
  },
];

export default function OsmoseFilterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Filter', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/filter' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Omgekeerde Osmose Filter: Uitleg & Keuze 2026',
          description:
            'Hoe werkt een omgekeerde osmose filter? Uitleg over alle filterstappen, membraantypes, NSF-certificering en hoe u de juiste trappenset kiest.',
          datePublished: '2026-01-20',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/omgekeerde-osmose/filter',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose filter: uitleg &amp; keuze 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een omgekeerde osmose systeem bestaat niet uit één filter maar uit meerdere filterstappen die elk een specifieke taak hebben. In dit artikel leggen we stap voor stap uit wat elk filtermedium doet, hoe het RO-membraan werkt, welk verschil er is tussen TFC- en CTA-membranen, wat NSF/ANSI-certificering betekent en hoe u kiest tussen een 4-, 5- of 6-traps systeem.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmosefilter kopen →
            </Link>
            <Link
              href="/omgekeerde-osmose/onderhoud"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Onderhoudsschema
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Wat is een osmosefilter */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een omgekeerde osmose filter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een omgekeerde osmose (RO) filter is een meertraps watersysteem dat gebruikmaakt van waterdruk om water door een halfpermeabel membraan te persen. Het membraan laat watermoleculen door, maar houdt opgeloste ionen, zware metalen, nitraten, bacteriën, virussen en andere verontreinigingen tegen. Het resultaat is ultrazuiver water met een totale opgeloste-stofconcentratie (TDS) van doorgaans minder dan 20 mg/L — vergeleken met 100-400 mg/L voor normaal Nederlands leidingwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het &ldquo;omgekeerde&rdquo; in de naam verwijst naar het omdraaien van het natuurlijke osmoseproces. Bij osmose beweegt water spontaan van een lage naar een hoge zoutconcentratie door een membraan. Bij omgekeerde osmose wordt waterdruk (typisch 4-8 bar) gebruikt om dit proces om te keren: water wordt van de geconcentreerde zijde door het membraan gedwongen naar de verdunde, zuivere zijde.
          </p>
          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4 my-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">RO-systeem vs eenvoudig koolstoffilter:</strong> een gewoon <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">waterfilter met koolstof</Link> verbetert smaak en verwijdert chloor, maar laat nitraten, kalk, zware metalen en microplastics grotendeels ongemoeid. Een RO-membraan verwijdert 95-99% van vrijwel alle opgeloste verontreinigingen. Dat is het fundamentele verschil.
            </p>
          </div>
        </section>

        {/* Filterstappen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat doet elke filterstap?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een volledig omgekeerde osmose systeem bestaat doorgaans uit drie tot zes filterstappen. Elke stap heeft een specifiek doel en beschermt of aanvult de stappen die erop volgen. Hieronder een gedetailleerde uitleg per fase.
          </p>
          <div className="space-y-4">
            {filterStages.map(stage => (
              <div key={stage.stap} className="border border-gray-100 rounded-2xl p-5 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {stage.stap}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{stage.naam}</p>
                    <p className="text-xs text-gray-400">{stage.media}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">Verwijdert / retentie</p>
                    <p className="text-gray-700 leading-relaxed">{stage.verwijdert}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">Functie</p>
                    <p className="text-gray-700 leading-relaxed">{stage.doel}</p>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-400">
                  Vervangingsinterval: <span className="font-medium text-gray-600">{stage.interval}</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-2">Waarom de volgorde van de stappen ertoe doet</h3>
          <p className="text-gray-700 leading-relaxed">
            De filterstappen zijn niet willekeurig gerangschikt. De sedimentfilter staat altijd vooraan om grove deeltjes te verwijderen die de koolstoffilter en het membraan kunnen blokkeren. De koolstoffilter staat vóór het membraan om chloor te verwijderen — want chloor beschadigt het TFC-polyamide membraanoppervlak op moleculair niveau. Het RO-membraan staat centraal als kern van het systeem. De nacarbon en eventuele remineralisatie staan achteraan omdat ze de waterchemie na het membraan optimaliseren, niet vóór.
          </p>
        </section>

        {/* RO membraantechnologie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">RO-membraantechnologie: TFC vs CTA</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het membraan is het hart van elk omgekeerde osmose systeem. Twee membraantypes domineren de markt voor woningbouw: TFC (Thin-Film Composite) en CTA (Cellulose Tri-Acetate). Ze verschillen wezenlijk in materiaalsamenstelling, retentie, chlorooltolerantie en bacteriologische bestendigheid.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-[#005F8A] bg-[#E0F2FE] rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] text-lg mb-1">TFC-membraan</p>
              <p className="text-xs text-gray-500 mb-3">Thin-Film Composite · polyamide</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Retentie 95-99% van TDS</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Hoge doorstroomsnelheid</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Bestand tegen breed pH-bereik (2-11)</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Marktstandaard voor thuisgebruik</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">!</span>Niet chloorbestendig — vereist koolstofprefilter</li>
              </ul>
            </div>
            <div className="border border-gray-200 bg-white rounded-2xl p-5">
              <p className="font-bold text-gray-800 text-lg mb-1">CTA-membraan</p>
              <p className="text-xs text-gray-500 mb-3">Cellulose Tri-Acetate · acetaatcellulose</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Tolereert lage chloorconcentraties</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Bacteriologisch stabieler in gechlooreerd water</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">!</span>Lagere retentie: 88-95% van TDS</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">!</span>Gevoelig voor hoge temperaturen (&gt; 35 °C)</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">!</span>Biologische afbraak mogelijk bij stagnant water</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Membraanconstructie: spiraalgewikkeld</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vrijwel alle woningbouw-RO-membranen zijn spiraalgewikkeld (spiral-wound). Het membraan, een drainagemat en een permeaatdrager worden als een spiraal om een centrale permeaatbuis gewikkeld en in een cilindrische behuizing geplaatst. Deze constructie maximaliseert het membraanoppervlak per volume — een standaard 1:8-behuizing (2,5 inch diameter, 12 inch lang) bevat zo&apos;n 0,75 m² membraanoppervlak.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Water stroomt axiaal (langs de cilinder), terwijl het permeaat (gezuiverd water) radiaal door het membraan diffundeert naar de centrale buis. Het concentraat verlaat de module aan het andere uiteinde. De waterdruk zorgt voor de drijvende kracht; hoe hoger de druk boven de osmotische druk van het water, hoe groter de doorstroomsnelheid en hoe hoger de retentie.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Retentiemeting en TDS</h3>
          <p className="text-gray-700 leading-relaxed">
            De prestatie van een RO-membraan wordt doorgaans uitgedrukt als de <em>retentie</em> van TDS (Total Dissolved Solids), gemeten in mg/L met een geleidbaarheidsmeter. Een nieuw TFC-membraan haalt 95-99% TDS-reductie. Na twee jaar gebruik daalt de retentie geleidelijk naarmate de polyamide toplaag kleine scheurtjes of fouling vertoont. U meet dit eenvoudig met een TDS-pen: tik de inkomende en uitgaande TDS in, deel ze en u weet direct of het membraan nog op specificatie zit. Is de retentie gedaald tot onder 90%, dan is membraanvervanging aan te bevelen. Meer over membraanlevensduur leest u in de kennisbank: <Link href="/kennisbank/osmose-membraan-levensduur" className="text-[#005F8A] underline hover:no-underline">levensduur van het osmosemembraan</Link>.
          </p>
        </section>

        {/* NSF/ANSI certificeringen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">NSF/ANSI-certificeringen: wat betekenen ze?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF International (voorheen National Sanitation Foundation) is een onafhankelijke organisatie die normen opstelt en producten certificeert op het gebied van drinkwaterveiligheid. ANSI (American National Standards Institute) keurt deze normen goed als officiële Amerikaanse standaard. Hoewel de normen Amerikaans zijn, worden ze wereldwijd erkend en zijn ze in de drinkwatersector de facto de internationale benchmark voor filterprestaties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor omgekeerde osmose systemen zijn vier NSF/ANSI-normen bijzonder relevant. Let op dat certificering vrijwillig is: een product zonder NSF-sticker kan prima presteren, maar een gecertificeerd product biedt de zekerheid dat een onafhankelijk laboratorium de claims heeft geverifieerd.
          </p>
          <div className="space-y-3 mb-4">
            {nsfNormen.map(n => (
              <div key={n.norm} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex items-start gap-3">
                  <span className="bg-[#005F8A] text-white text-xs font-bold px-2 py-1 rounded shrink-0">{n.norm}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">{n.dekt}</p>
                    <p className="text-xs text-gray-500">Relevant voor: {n.relevant}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            In de Europese context bestaat ook de DIN EN 14652 norm voor compacte huishoudwaterbehandeling, en gebruiken sommige fabrikanten waterkeuring.nl (keurmerk NL) of de <Link href="/kennisbank/osmose-membraan-types" className="text-[#005F8A] underline hover:no-underline">KIWA drinkwatercertificering</Link> voor de Nederlandse markt. Controleer voor aankoop of uw systeem tenminste NSF/ANSI 58 draagt of een equivalent Europees keurmerk heeft.
          </p>
        </section>

        {/* Filtervervanging en kosten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filtervervanging: schema en kosten</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een van de meest praktische vragen over osmosesystemen is: hoe vaak moet ik welk filter vervangen en wat kost dat per jaar? Hieronder een realistisch schema voor een standaard 4-traps huishoudelijk systeem op Nederlands leidingwater van gemiddelde hardheid.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-4 font-semibold text-[#003F5C]">Filter</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Interval</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Kosten</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { filter: 'Sedimentprefilter (5 µm)', interval: '6-12 maanden', kosten: '€ 5-10' },
                  { filter: 'Koolstofprefilter (GAC of CTO)', interval: '6-12 maanden', kosten: '€ 8-15' },
                  { filter: 'RO-membraan (TFC)', interval: '2-3 jaar', kosten: '€ 25-50' },
                  { filter: 'Nacarbon postfilter', interval: '12 maanden', kosten: '€ 10-20' },
                  { filter: 'Remineralisatiefilter (optioneel, 5e trap)', interval: '12 maanden', kosten: '€ 15-25' },
                ].map(r => (
                  <tr key={r.filter} className="border-b border-gray-100">
                    <td className="py-2.5 px-4 text-gray-700">{r.filter}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.interval}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Op jaarbasis betaalt een 4-traps systeem u doorgaans € 40 tot € 60 aan verbruiksmateriaal. Met een 5-traps systeem inclusief remineralisatie loopt dit op naar € 60-80 per jaar. Dit is aanzienlijk lager dan het kopen van gebotteld water voor een gezin van vier personen (gemiddeld € 600-1.200 per jaar bij 2 liter/persoon/dag).
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Wanneer is vervanging urgent?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Houd naast de tijdsintervallen ook de volgende signalen in de gaten die duiden op versnelde slijtage of verstopping:
          </p>
          <ul className="space-y-2 text-gray-700">
            {[
              'TDS-waarde van het permeaat stijgt merkbaar (meet met TDS-pen)',
              'Doorstroomsnelheid van de opslagtank daalt sterk (membraanvervuiling)',
              'Smaak of geur van het water verandert (koolstoffilter uitgeput)',
              'Drukschommelingen of piepende geluiden vanuit de behuizing',
              'Meer afvalwater dan normaal zonder hogere tapvolumes',
            ].map(t => (
              <li key={t} className="flex gap-2 items-start">
                <span className="text-amber-500 font-bold mt-0.5 shrink-0">!</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Uitgebreid onderhoudsinformatie, inclusief hoe u filters zelf vervangt, vindt u op de pagina <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline hover:no-underline">omgekeerde osmose onderhoud</Link>.
          </p>
        </section>

        {/* 4, 5, 6 traps */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kiezen tussen 4-, 5- en 6-traps systemen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het aantal filterstappen bepaalt de uitgebreidheid van de behandeling. Voor de meeste Nederlandse huishoudens is een 4-traps systeem meer dan voldoende — het Nederlands leidingwater behoort tot de schoonste van Europa. Extra trappen zijn zinvol bij specifieke waterkwaliteitsproblemen of persoonlijke wensen.
          </p>
          <div className="space-y-3 mb-6">
            {systemen.map(s => (
              <div
                key={s.trappen}
                className={`rounded-2xl border p-5 ${s.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="font-bold text-gray-900 text-lg">{s.trappen}</span>
                    {s.highlight && (
                      <span className="ml-2 text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Meest gekozen</span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-[#005F8A] shrink-0">{s.kostenPerJaar}/jr</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {s.stappen.map((stap, i) => (
                    <span key={stap} className={`text-xs px-2 py-0.5 rounded-full border ${i === 2 ? 'bg-[#005F8A] text-white border-[#005F8A]' : 'bg-white border-gray-200 text-gray-600'}`}>
                      {stap}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600"><span className="text-gray-400">Geschikt voor:</span> {s.geschiktVoor}</p>
                <p className="text-xs text-gray-400 mt-1">Retentie: {s.retentie}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Wanneer heeft u een 5-traps systeem nodig?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De vijfde trap is bijna altijd een remineralisatiefilter of een extra koolstoffilter. Een remineralisatiefilter is zinvol als u osmosewater wilt drinken dat een licht minerale smaak heeft (vergelijkbaar met licht bronwater), of als u een verhoogde pH wilt voor wie bewust voor alkalisch water kiest. Sommige gebruikers vinden puur osmosewater te &ldquo;vlak&rdquo; in smaak — dat is subjectief maar reëel. Een tweede koolstofstap (vóór of na het membraan) is nuttig bij verhoogde concentraties van VOC&apos;s (vluchtige organische verbindingen) in het leidingwater.
          </p>

          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Wanneer heeft u een 6-traps systeem nodig?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De zesde trap is vrijwel altijd UV-sterilisatie. UV is zinvol als u water betrekt uit een eigen put of bron, bij recent vastgestelde bacteriologische besmetting van het leidingnet in uw gemeente, of als uw osmosesysteem lange stilstandperiodes kent (vakantiewoning). Op standaard gechlooreerd leidingwater biedt UV weinig meerwaarde — het RO-membraan reteneert al 99,99% van bacteriën en virussen.
          </p>

          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Advies voor de meeste Nederlanders:</strong> een 4-traps TFC-systeem met NSF/ANSI 58-certificering en een permeaatpomp voor snellere tankvulling is voor standaard leidingwater de beste keuze qua prijs, onderhoud en filterprestaties. Woont u in een gebied met hard water of merkbaar slechte leidingwaterkwaliteit, overweeg dan een 5-traps variant met remineralisatie.
            </p>
          </div>
        </section>

        {/* Geïntegreerd in kokend-water kraan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Osmosefilter geïntegreerd in een 4-in-1 kraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Traditioneel bestaan osmosesystemen uit losse filterkolommen en een aparte opslagtank. De nieuwste generatie keukenkranen integreert het osmosefilter direct in het kraansysteem: het gefilterde water gaat rechtstreeks naar de kokend-water-boiler en de koude tapleiding, zonder separate opslagtank.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit compacte ontwerp biedt meerdere voordelen:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            {[
              'Minder ruimte onder het aanrecht: geen aparte opslagtank van 5-10 liter',
              'Altijd vers gefilterd water — geen stagnant water in een opslagtank',
              'De boiler ontvangt kalkvrij water waardoor ontkalken overbodig wordt',
              'Eén systeem voor kokend, koud gefilterd en (optioneel) bruisend water',
              'Filtervervanging op één locatie in plaats van verdeeld over meerdere behuizingen',
            ].map(t => (
              <li key={t} className="flex gap-2 items-start">
                <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed">
            De PureAqua 4-in-1 kraan is een voorbeeld van dit geïntegreerde concept op de Nederlandse markt. Wie naast gefilterd water ook kokend en bruisend water wil, vindt in een dergelijke gecombineerde oplossing de meest compacte en kostenefficiënte aanpak. Meer informatie over dit type systeem leest u op de <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">kooppagina voor osmosefilters</Link>.
          </p>
        </section>

        {/* Osmosewater kwaliteit */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De kwaliteit van osmosewater: wat blijft er over?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een veelgestelde vraag is: is osmosewater te mineraalarm om te drinken? Het antwoord is genuanceerd. Een RO-membraan reteneert inderdaad calcium, magnesium en andere ionen, waardoor de TDS daalt tot 5-30 mg/L. Ter vergelijking: de WHO schrijft geen minimale TDS voor drinkwater voor, maar adviseert een TDS van minimaal 100 mg/L voor langdurig gebruik. Dit advies is echter gebaseerd op gevallen waarbij alle voeding via water zou worden binnengekregen, wat niet realistisch is bij een evenwichtig dieet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In de praktijk halen de meeste mensen hun mineralen uit voeding, niet uit drinkwater. Osmooswater is veilig voor dagelijks drinken, inclusief voor kinderen, zwangere vrouwen en ouderen. Wie zekerheid wil over een licht minerale samenstelling, plaatst een remineralisatiefilter als vijfde trap — dat brengt calcium en magnesium gecontroleerd terug en verhoogt de pH naar circa 7,5-8.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer over de specifieke membraantypen en retentiepercentages leest u in onze kennisbank: <Link href="/kennisbank/osmose-membraan-types" className="text-[#005F8A] underline hover:no-underline">welk osmosemembraan is geschikt voor mij?</Link>
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose — complete uitleg' },
              { href: '/omgekeerde-osmose/onderhoud', label: 'Onderhoud en filtervervanging' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen — aanbevelingen 2026' },
              { href: '/kennisbank/osmose-membraan-types', label: 'Kennisbank: membraantypen vergeleken' },
              { href: '/kennisbank/osmose-membraan-levensduur', label: 'Kennisbank: levensduur osmosemembraan' },
              { href: '/kokend-water-kraan', label: 'Kokend water kraan — complete gids' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over het osmosefilter</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
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
