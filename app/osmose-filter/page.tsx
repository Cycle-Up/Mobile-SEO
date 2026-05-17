import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmose Filter: Hoe Werkt Het & Wat Kost Het?',
  description:
    'Alles over het osmose filter: semi-permeabel membraan, afwijzingspercentage, 4-traps vs 5-traps, wat het verwijdert (PFAS, nitraat, zware metalen), onderhoud.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-filter' },
  openGraph: {
    title: 'Osmose Filter: Hoe Werkt Het & Wat Kost Het?',
    description:
      'Complete gids over het osmose filter: werking, vergelijking met koolstof- en UV-filter, 4-traps vs 5-traps vs geïntegreerd in kokend water kraan, prijzen en.',
    url: 'https://waterfilterplatform.nl/osmose-filter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is een osmose filter en hoe werkt het?',
    answer:
      'Een osmose filter — ook wel omgekeerde osmose (RO) filter genoemd — gebruikt een semi-permeabel membraan om verontreinigingen uit leidingwater te verwijderen. Water wordt onder druk (3–6 bar) door het membraan geperst. Poriën van slechts 0,0001 micron laten vrijwel alleen zuivere watermoleculen door. De afwijzingspercentages liggen doorgaans op 95–99% voor opgeloste stoffen zoals kalk, chloor, nitraten, PFAS, zware metalen en microplastics.',
  },
  {
    question: 'Wat is het verschil tussen een osmose filter en een koolstoffilter?',
    answer:
      'Een actieve koolstoffilter werkt door adsorptie: chloor, geurstoffen en een deel van de organische verbindingen hechten aan de poreuze koolstofkorrels. Een koolstoffilter verwijdert echter geen opgeloste mineralen, nitraten, PFAS of zware metalen. Een osmose filter werkt via membraanfiltratie en verwijdert 95–99% van vrijwel alle opgeloste stoffen — een veel grondiger filtratie. In de meeste osmose systemen is een koolstoffilter als voor- en nafilter ingebouwd.',
  },
  {
    question: 'Wat verwijdert een osmose filter precies?',
    answer:
      'Een osmose filter verwijdert effectief: kalk (calcium, magnesium), chloor en chlooraminen, nitraten en nitriet, PFAS (perfluoralkylstoffen), zware metalen (lood, arseen, cadmium), pesticiden en herbiciden, medicijnresten, microplastics en in veel gevallen ook bacteriën en virussen. De TDS-waarde (Total Dissolved Solids) daalt doorgaans van 300–500 ppm in hard Nederlands leidingwater naar 5–30 ppm na osmose.',
  },
  {
    question: 'Hoe vaak moet het osmose membraan worden vervangen?',
    answer:
      'Het RO-membraan heeft een levensduur van 2–3 jaar bij normaal huishoudelijk gebruik (2–4 personen). Pre-filters (sediment en koolstof) moeten elke 6–12 maanden worden vervangen om het membraan te beschermen. De post-koolstoffilter (polishing filter) wordt jaarlijks vervangen. Bij een 4-in-1 geïntegreerde kraan vervangt één jaarpatroon doorgaans de pre- en post-filters in één handeling.',
  },
  {
    question: 'Wat kost een osmose filter?',
    answer:
      'Een standalone omgekeerde osmose systeem onder het aanrecht kost €150–400 in aanschaf, plus €60–150 per jaar aan filters en membraanvervanging. Een 4-in-1 geïntegreerde kraan met ingebouwd osmose systeem kost €800–1.500 aanschaf, maar vervangt ook de waterkoker en bruisend water-abonnement. Over 5 jaar zijn de totale kosten van een 4-in-1 kraan vaak lager dan de combinatie van aparte waterkoker, los osmose systeem en bruisend water.',
  },
  {
    question: 'Wat is het verschil tussen 4-traps en 5-traps osmose?',
    answer:
      'Een 4-traps osmose systeem bestaat uit: sedimentfilter (1), pre-koolstoffilter (2), RO-membraan (3) en post-koolstoffilter (4). Een 5-traps systeem voegt een extra stap toe — vaak een mineraalfilter of second koolstofstap — om minerals terug toe te voegen of de smaak verder te verbeteren. In de praktijk verwijdert een goed 4-traps systeem al 95–99% van alle verontreinigingen; de vijfde stap is voornamelijk een kwaliteits- of smaakverbetering.',
  },
];

const filterComparisons = [
  {
    type: 'Osmose filter (RO)',
    principe: 'Semi-permeabel membraan, 0,0001 micron',
    verwijdert: 'TDS, kalk, chloor, nitraat, PFAS, zware metalen, microplastics, bacteriën',
    zuiverheid: '95–99%',
    kosten: '€ 60–150/jr',
    installatie: 'Onder aanrecht, 30–60 min',
    highlight: true,
  },
  {
    type: 'Actieve koolstoffilter',
    principe: 'Adsorptie aan geactiveerde kool',
    verwijdert: 'Chloor, geurstoffen, deel organische stoffen',
    zuiverheid: '40–70% (beperkt spectrum)',
    kosten: '€ 30–80/jr',
    installatie: 'Op kraan of klein kastje',
    highlight: false,
  },
  {
    type: 'UV-filter',
    principe: 'Ultraviolet licht doodt micro-organismen',
    verwijdert: 'Bacteriën en virussen (niet chemisch)',
    zuiverheid: '99,99% bacteriën; geen chemische stoffen',
    kosten: '€ 40–100/jr (lamp)',
    installatie: 'Op leiding, 15–30 min',
    highlight: false,
  },
  {
    type: 'Sedimentfilter',
    principe: 'Mechanische filtratie, 1–50 micron',
    verwijdert: 'Zand, roest, slib, deeltjes',
    zuiverheid: 'Deeltjes > 1 micron',
    kosten: '€ 20–50/jr',
    installatie: 'Op leiding, 15 min',
    highlight: false,
  },
];

const stageBreakdown = [
  {
    nr: '1',
    naam: 'Sedimentfilter (PP-vezels, 5 micron)',
    functie:
      'Vangt macroDeeltjes op: zand, roest, slib en andere zwevende deeltjes. Beschermt het membraan tegen mechanische beschadiging.',
    levensduur: '6–12 maanden',
  },
  {
    nr: '2',
    naam: 'Pre-koolstoffilter (GAC of CTO)',
    functie:
      'Verwijdert chloor en chlooraminen die het polyamide RO-membraan kunnen degraderen. Absorbeert ook geurstoffen en een deel van de organische verbindingen.',
    levensduur: '6–12 maanden',
  },
  {
    nr: '3',
    naam: 'RO-membraan (TFC polyamide)',
    functie:
      'Het hart van het systeem: 0,0001 micron poriën houden 95–99% van alle opgeloste stoffen tegen. TDS daalt van 300–500 ppm naar 5–30 ppm. Spoelwater (geconcentreerd retentaat) gaat naar de afvoer.',
    levensduur: '2–3 jaar',
  },
  {
    nr: '4',
    naam: 'Post-koolstoffilter (polishing)',
    functie:
      'Verwijdert resterende geurstoffen en verfijnt de smaak van het permeaat (gefilterd water). Soms aangeduid als T33 of inline koolstoffilter.',
    levensduur: '12 maanden',
  },
  {
    nr: '5',
    naam: 'Mineraalfilter of 2e koolstofstap (optioneel, 5-traps)',
    functie:
      'Voegt calcium en magnesium in mineraalvorm terug toe (voor smaak en gezondheid) of geeft een extra koolstofpolish. Niet altijd aanwezig in 4-traps systemen.',
    levensduur: '12 maanden',
  },
];

const verwijderingsTabel = [
  { stof: 'Kalk (calcium / magnesium)', verwijdering: '95–99%', methode: 'Membraanfiltratie' },
  { stof: 'Chloor en chlooraminen', verwijdering: '> 95%', methode: 'Koolstofpre-filter + membraan' },
  { stof: 'Nitraat en nitriet', verwijdering: '85–95%', methode: 'Membraanfiltratie' },
  { stof: 'PFAS (PFOA, PFOS)', verwijdering: '> 95%', methode: 'Membraanfiltratie' },
  { stof: 'Lood en zware metalen', verwijdering: '95–99%', methode: 'Membraanfiltratie' },
  { stof: 'Arseen', verwijdering: '93–97%', methode: 'Membraanfiltratie' },
  { stof: 'Pesticiden / herbiciden', verwijdering: '93–99%', methode: 'Membraanfiltratie' },
  { stof: 'Microplastics', verwijdering: '> 99%', methode: 'Membraanfiltratie (grootte)' },
  { stof: 'Bacteriën', verwijdering: '> 99%', methode: 'Membraanfiltratie (grootte)' },
  { stof: 'Virussen', verwijdering: '95–99%', methode: 'Membraanfiltratie (charge)' },
  { stof: 'Medicijnresten', verwijdering: '90–98%', methode: 'Membraanfiltratie' },
  { stof: 'Fluoride', verwijdering: '85–92%', methode: 'Membraanfiltratie' },
];

const prijsOverzicht = [
  {
    type: 'Standalone osmose (under-sink)',
    aanschaf: '€ 150 – 400',
    perjaar: '€ 60 – 150',
    kenmerken: '4-traps, extra kraan, drukvat, zelf installeren',
    highlight: false,
  },
  {
    type: '4-in-1 kraan met geïntegreerd osmose',
    aanschaf: '€ 800 – 1.500',
    perjaar: '€ 50 – 150',
    kenmerken: 'Kokend + koud + warm + bruisend, osmose ingebouwd, 1 kraangat',
    highlight: true,
  },
];

const onderhoudsSchema = [
  {
    onderdeel: 'Sedimentfilter (stap 1)',
    interval: 'Elke 6–12 maanden',
    kosten: '€ 8 – 15',
    actie: 'Vervangen zodra water langzamer stroomt of filter zichtbaar verkleurd is.',
  },
  {
    onderdeel: 'Pre-koolstoffilter (stap 2)',
    interval: 'Elke 6–12 maanden',
    kosten: '€ 10 – 20',
    actie: 'Kritisch voor membraanbescherming: vervangen op tijd voorkomt dure membraanschade door chloor.',
  },
  {
    onderdeel: 'RO-membraan (stap 3)',
    interval: 'Elke 2–3 jaar',
    kosten: '€ 40 – 80',
    actie: 'Meet TDS van uitvoerwater jaarlijks. Als TDS stijgt boven 30–50 ppm of afwijzing daalt onder 90%, is vervanging nodig.',
  },
  {
    onderdeel: 'Post-koolstoffilter (stap 4)',
    interval: 'Jaarlijks',
    kosten: '€ 8 – 15',
    actie: 'Vervangt de smaakverbetering. Combineer de wissel met pre-filters voor efficiëntie.',
  },
  {
    onderdeel: 'Drukvat (standalone systeem)',
    interval: 'Jaarlijks controleren',
    kosten: '€ 0 – 5 (lucht bijpompen)',
    actie: 'Controleer de luchtdruk (6–8 psi). Een ondergespannen drukvat geeft langzame doorstroom. Gebruik een fietspomp.',
  },
];

export default function OsmoseFilterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmose Filter: Hoe Werkt Het & Wat Kost Het?',
          description:
            'Complete gids over het osmose filter: semi-permeabel membraan, vergelijking met koolstof- en UV-filter, 4-traps vs 5-traps, wat het verwijdert en prijzen.',
          datePublished: '2025-11-01',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/osmose-filter',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmose filter', url: 'https://waterfilterplatform.nl/osmose-filter' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Osmose filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmose Filter: Hoe Werkt Het &amp; Wat Kost Het?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>osmose filter</strong> — ook wel omgekeerde osmose of reverse osmosis filter
            genoemd — verwijdert 95–99% van alle opgeloste stoffen uit leidingwater via een
            semi-permeabel membraan. Op deze pagina leggen we uit hoe de technologie werkt, hoe een
            osmose filter zich verhoudt tot koolstof-, UV- en sedimentfilters, welke uitvoering voor
            jou het best past en wat je mag verwachten aan kosten en onderhoud.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk osmose systemen →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Omgekeerde osmose uitleg
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <QuickAnswer answer="Een osmosefilter (RO-filter) gebruikt een membraan met microscopisch kleine poriën om 95–99% van alle opgeloste stoffen te verwijderen, waaronder kalk, nitraten, PFAS en zware metalen. Het systeem wordt onder het aanrecht gemonteerd en levert puur drinkwater via een apart kraantje. Filtervervanging is jaarlijks nodig." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-is" className="hover:underline">Wat is een osmose filter?</a></li>
            <li><a href="#hoe-werkt" className="hover:underline">Hoe werkt het semi-permeabele membraan?</a></li>
            <li><a href="#vergelijking" className="hover:underline">Osmose vs koolstof / UV / sediment</a></li>
            <li><a href="#trappen" className="hover:underline">4-traps vs 5-traps vs 4-in-1 kraan</a></li>
            <li><a href="#wat-verwijdert" className="hover:underline">Wat verwijdert een osmose filter?</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud en filtervervanging</a></li>
            <li><a href="#prijs" className="hover:underline">Prijsoverzicht</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat is een osmose filter */}
        <section id="wat-is">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een osmose filter?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De term <strong>osmose filter</strong> verwijst naar een filter op basis van{' '}
            <em>omgekeerde osmose</em> (Engels: reverse osmosis, afgekort RO). Bij gewone osmose
            beweegt water spontaan van een minder geconcentreerde naar een meer geconcentreerde
            oplossing door een semi-permeabel membraan. Bij <em>omgekeerde</em> osmose wordt dit
            proces omgekeerd: door externe waterdruk (3–6 bar) wordt water van de geconcentreerde
            zijde (het leidingwater met alle opgeloste stoffen) door het membraan heen gedwongen
            naar de schone zijde.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het membraan heeft poriën van slechts <strong>0,0001 micron</strong> — duizend keer
            kleiner dan een bacterie en honderdduizend keer kleiner dan een mensenhaar. Alleen
            watermoleculen (H₂O) en een kleine hoeveelheid vluchtige gassen passen er door. Alles
            wat groter is — opgeloste ionen, mineralen, organische moleculen, microplastics en
            micro-organismen — wordt tegengehouden en via een spoelstroom (het retentaat) afgevoerd
            naar de afvoer.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het resultaat is water met een{' '}
            <strong>TDS-waarde (Total Dissolved Solids)</strong> van slechts 5–30 ppm, terwijl
            gewoon Nederlands leidingwater een TDS van 200–500 ppm heeft. Voor PFAS, nitraten,
            zware metalen en microplastics — stoffen die de afgelopen jaren in het nieuws zijn
            geweest — is het osmose filter op dit moment de meest betrouwbare consumentenoplossing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Een osmose filter wordt vrijwel altijd onder het aanrecht geïnstalleerd{' '}
            (<em>under-sink</em>) met een apart kraantje op het aanrecht, of ingebouwd in een{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">
              4-in-1 kokend water kraan
            </Link>
            . Meer over de achtergronden en werking lees je op de pagina{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>
            .
          </p>
        </section>

        {/* Hoe werkt het membraan */}
        <section id="hoe-werkt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe werkt het semi-permeabele membraan?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het kernonderdeel van elk osmose filter is het{' '}
            <strong>TFC-membraan</strong> (Thin Film Composite), doorgaans gemaakt van polyamide.
            Dit dunne kunststofmembraan is gewikkeld in een spiraalvormige configuratie (spiral
            wound) om een maximale membraanoppervlakte te bereiken in een compact filterhuisje.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Het membraan werkt via twee mechanismen:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                nr: '1',
                titel: 'Grootte-exclusie (size exclusion)',
                desc: 'Moleculen en deeltjes die groter zijn dan de poriën (0,0001 micron) worden fysiek tegengehouden. Dit is de dominante mechanisme voor microplastics, bacteriën, virussen, kalk en andere mineraalionen.',
              },
              {
                nr: '2',
                titel: 'Ladingrejectie (charge rejection)',
                desc: 'Opgeloste ionen — Ca²⁺, Mg²⁺, NO₃⁻, Pb²⁺, e.a. — worden deels ook tegengehouden via elektrostatische repulsie: het negatief geladen membraan stoot negatieve ionen (anionen) af. Dit verhoogt de afwijzingspercentages voor geladen moleculen zoals PFAS, nitraat en fosfaat boven de geometrische verwachting.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700 mb-5">
            <strong className="text-[#003F5C]">Afwijzingspercentage (rejection rate):</strong>{' '}
            Dit getal geeft aan welk percentage van een specifieke stof door het membraan wordt
            tegengehouden. Een membraan met 99% NaCl-afwijzing laat slechts 1% van het zout door.
            Fabrikanten meten dit onder standaardomstandigheden (25°C, 50 psi, 2.000 ppm NaCl). In
            de praktijk liggen de afwijzingspercentages voor kalk, lood en PFAS tussen 95 en 99%;
            voor kleine moleculen zoals CO₂ en kleine organische verbindingen lager.
          </div>
          <p className="text-gray-700 leading-relaxed">
            Naast het membraan produceert een osmose systeem ook <strong>spoelwater</strong> (het
            retentaat of concentrate): het geconcentreerde leidingwater dat de verwijderde stoffen
            afvoert via de rioleringsaansluiting. Oudere systemen hebben een water-tot-permeaat
            verhouding van 3:1 tot 4:1 (drie liter spoelwater per liter drinkwater). Moderne
            systemen met een{' '}
            <em>permeaatpomp</em> of{' '}
            <em>boosterpomp</em> halen 1:1 of zelfs beter — een belangrijke verbetering voor het
            milieu. Meer details vind je in het kennisbankartikel over{' '}
            <Link href="/kennisbank/osmose-membraan-types" className="text-[#005F8A] underline hover:no-underline">
              osmose membraan types
            </Link>
            .
          </p>
        </section>

        {/* Vergelijking met andere filtertypes */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe verhoudt een osmose filter zich tot koolstof-, UV- en sedimentfilter?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Op de markt zijn vier veelgebruikte filtertechnieken voor huishoudelijk water. Hieronder
            vergelijken we ze op werkingsprincipe, wat ze verwijderen, zuiverheidsgraad en kosten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Verwijdert</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Zuiverheid</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten/jr</th>
                </tr>
              </thead>
              <tbody>
                {filterComparisons.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-sm font-medium">{r.type}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-700">{r.verwijdert}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.zuiverheid}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Osmose vs koolstoffilter</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een koolstoffilter is uitstekend voor smaak- en geurverbetering (chloor, THM&apos;s)
                en goedkoop in gebruik. Het verwijdert echter geen nitraten, PFAS, zware metalen of
                opgeloste mineralen. Elk goed osmose systeem bevat een koolstoffilter als onderdeel
                van zijn filterstappen — osmose is het bredere systeem met het koolstoffilter als
                extra stap.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Osmose vs UV-filter</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een UV-filter doodt bacteriën en virussen effectief, maar verwijdert geen chemische
                verontreinigingen of opgeloste stoffen. UV is zinvol als aanvulling bij putten of
                bronwater. Voor stedelijk leidingwater — waar PFAS, nitraten en kalk de voornaamste
                zorgen zijn — biedt een osmose filter bredere bescherming. Sommige geavanceerde
                systemen combineren osmose met UV als eindstap.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Osmose vs sedimentfilter</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een sedimentfilter (1–50 micron) vangt zand, roest en slib op, maar laat alle
                opgeloste stoffen door. Het is een onmisbare <em>voorfilter</em> in elk osmose
                systeem — niet een vervanging. Zonder sedimentfilter raakt het fijne RO-membraan
                snel beschadigd door macroDeeltjes.
              </p>
            </div>
          </div>
        </section>

        {/* 4-traps vs 5-traps vs geïntegreerd */}
        <section id="trappen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat is het verschil tussen 4-traps, 5-traps en een geïntegreerde kokend water kraan?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Osmose filters zijn verkrijgbaar in twee basisuitvoeringen (standalone 4-traps en
            5-traps) en als ingebouwd systeem in een{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">
              4-in-1 kokend water kraan
            </Link>
            . Hieronder de stappen en hun functies:
          </p>
          <div className="space-y-4 mb-6">
            {stageBreakdown.map(s => (
              <div key={s.nr} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.nr}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-gray-900 text-sm">{s.naam}</p>
                    <p className="text-xs text-[#005F8A] font-medium shrink-0">{s.levensduur}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.functie}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-5">
            <p className="font-semibold text-[#003F5C] mb-2">
              Geïntegreerd in een 4-in-1 kokend water kraan
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Steeds populairder is de variant waarbij het osmose systeem is ingebouwd in een{' '}
              <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">
                4-in-1 kokend water kraan
              </Link>
              . De kraan levert dan vier soorten water uit één uitloop: kokend (100°C), koud
              gefilterd, warm gefilterd en bruisend gefilterd water. Dit type 4-in-1 kraan met osmose is de meest complete optie voor thuis.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Voordelen ten opzichte van een standalone systeem: geen aparte kleine kraan op het
              aanrecht, geen losse waterkoker, geen aparte bruisend water-installatie, en slechts
              één jaarlijkse filterwissel voor alle stappen. Nadeel: hogere aanschafprijs (€800–1.500
              vs €150–400 voor standalone).
            </p>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Uitvoering</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Per jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-left">Kenmerken</th>
                </tr>
              </thead>
              <tbody>
                {prijsOverzicht.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE]/50 font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-sm">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.perjaar}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{r.kenmerken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wat verwijdert een osmose filter */}
        <section id="wat-verwijdert">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat verwijdert een osmose filter?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hieronder een overzicht van de stoffen die een kwalitatief osmose filter verwijdert uit
            leidingwater, met indicatieve afwijzingspercentages. Deze percentages zijn gebaseerd op
            laboratoriummetingen onder standaardomstandigheden; de werkelijke prestaties in uw
            specifieke situatie kunnen licht afwijken afhankelijk van watertemperatuur, waterdruk en
            conditie van het membraan.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[460px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Stof</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Verwijdering</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Mechanisme</th>
                </tr>
              </thead>
              <tbody>
                {verwijderingsTabel.map((r, i) => (
                  <tr key={r.stof} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-3 font-medium text-gray-800">{r.stof}</td>
                    <td className="py-2 px-3 text-right text-[#005F8A] font-semibold">{r.verwijdering}</td>
                    <td className="py-2 px-3 text-xs text-gray-600">{r.methode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">PFAS en leidingwater in Nederland</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                RIVM-onderzoek toont aan dat PFAS-verbindingen zoals PFOA en PFOS worden aangetroffen
                in leidingwater in Nederland, met name in gebieden nabij industrieterreinen en
                vliegvelden. Hoewel de concentraties veelal onder de norm van 100 ng/L liggen, kiezen
                veel consumenten voor extra zekerheid. Een osmose filter verwijdert PFAS voor meer
                dan 95%, waardoor het gehalte in het drinkwater daalt tot vrijwel nul. Meer over het
                topic in ons kennisbankartikel over{' '}
                <Link href="/kennisbank/osmose-water" className="text-[#005F8A] underline hover:no-underline">
                  osmose water
                </Link>
                .
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Nitraten en agrarische gebieden</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                In agrarische gebieden in Gelderland, Overijssel en Noord-Brabant overschrijdt het
                grondwater in sommige gevallen de nitraatnorm van 50 mg/L. Hoewel het drinkwaterbedrijf
                dit bij levering corrigeert, kan een osmose filter een extra veiligheidsmarge bieden.
                Met een afwijzingspercentage van 85–95% voor nitraat is de concentratie in het
                gefilterde water doorgaans verwaarloosbaar klein.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Kalk en TDS: minder kalkafzetting</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Osmose water heeft een lage TDS en is daarmee ook vrij van calcium en magnesium.
                Het bevat dus geen kalk, laat geen witte aanslag achter op de kraan en is prettig
                om thee en koffie mee te zetten. Wie bovendien kalk in de hele woning wil aanpakken
                (douche, wasmachine, cv-ketel), overweegt soms een combinatie met een{' '}
                <Link href="/waterontharder" className="text-[#005F8A] underline hover:no-underline">
                  waterontharder
                </Link>
                . Het osmose filter is dan de drinkwateroplossing op de keukentap.
              </p>
            </div>
          </div>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Onderhoud: membraan, pre-filter en post-filter
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De levensduur en prestaties van een osmose filter hangen direct af van het onderhoud.
            Het RO-membraan is het duurste en meest kritische onderdeel; regelmatige vervanging van
            de goedkopere pre-filters verlengt de levensduur van het membraan aanzienlijk. Hieronder
            een volledig onderhoudsschema:
          </p>
          <div className="space-y-3 mb-5">
            {onderhoudsSchema.map(r => (
              <div key={r.onderdeel} className="flex gap-3 items-start border border-gray-100 rounded-xl p-4">
                <div className="text-[#005F8A] text-lg shrink-0 mt-0.5">⚙</div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-gray-900 text-sm">{r.onderdeel}</p>
                    <p className="text-xs text-[#005F8A] font-medium shrink-0">{r.interval}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">Kosten: {r.kosten}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.actie}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="font-semibold text-amber-900 mb-2">
              Membraanvervanging: hoe herken je een slijtend membraan?
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Meet de TDS van het uitvoerwater regelmatig met een goedkope TDS-meter (€8–15). Een
              goed werkend membraan produceert water met 5–25 ppm TDS uit Nederlands leidingwater.
              Als de TDS stijgt boven 40–50 ppm, of als het afwijzingspercentage daalt onder 90%,
              is membraanvervanging aan de orde. Let ook op een sterk verminderde doorstroomsnelheid
              — dit kan duiden op vervuiling van het membraan (fouling) of een ondergespannen drukvat.
              Meer technische achtergrond in ons artikel over{' '}
              <Link href="/kennisbank/osmose-membraan-types" className="text-[#005F8A] underline hover:no-underline">
                osmose membraan types en kwaliteitsverschillen
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Prijs overzicht */}
        <section id="prijs">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Prijsoverzicht: standalone €150–400 vs 4-in-1 geïntegreerd €800–1.500
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De aanschafprijs varieert sterk afhankelijk van de uitvoering. Hieronder een eerlijk
            overzicht van de totale kosten, inclusief terugkerende uitgaven.
          </p>
          <div className="space-y-4 mb-5">
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <p className="font-bold text-gray-900 mb-3">Standalone osmose systeem (under-sink)</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-3">
                <div><span className="text-gray-400">Aanschaf:</span> <span className="text-gray-800 font-medium">€ 150 – 400</span></div>
                <div><span className="text-gray-400">Jaarlijkse filters:</span> <span className="text-gray-800 font-medium">€ 30 – 60</span></div>
                <div><span className="text-gray-400">Membraan (2-3jr):</span> <span className="text-gray-800 font-medium">€ 40 – 80</span></div>
                <div><span className="text-gray-400">Totaal per jaar:</span> <span className="text-gray-800 font-medium">€ 60 – 150</span></div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                De meest betaalbare instap. Installatie is zelf te doen in 30–60 minuten. Je hebt
                een extra kraangat nodig op het aanrecht voor het filterkraantje. Een drukvat slaat
                het gefilterde water op voor directe doorstroom.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-[#005F8A] bg-[#E0F2FE] p-5">
              <div className="flex items-center gap-2 mb-3">
                <p className="font-bold text-gray-900">4-in-1 geïntegreerd met kokend water kraan</p>
                <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">
                  Meest compleet
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-3">
                <div><span className="text-gray-500">Aanschaf:</span> <span className="text-gray-800 font-medium">€ 800 – 1.500</span></div>
                <div><span className="text-gray-500">Jaarlijks filterpatroon:</span> <span className="text-gray-800 font-medium">€ 50 – 150</span></div>
                <div><span className="text-gray-500">Membraan (2-3jr):</span> <span className="text-gray-800 font-medium">€ 40 – 80</span></div>
                <div><span className="text-gray-500">Totaal per jaar:</span> <span className="text-gray-800 font-medium">€ 50 – 150</span></div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Vervangt tegelijk de waterkoker (€20–80/jr aan energie + slijtage), losse
                bruisend water-abonnement (€100–200/jr) en het losse osmose kraantje. Over 5 jaar
                zijn de totale kosten van een 4-in-1 kraan daardoor concurrerend met de combinatie
                van losse apparaten. Bekijk de{' '}
                <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
                  4-in-1 kraan met osmose
                </Link>
                {' '}voor de meest volledige optie.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2 text-sm">Kosten over 5 jaar — indicatief</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[440px] text-sm border-collapse">
                <thead>
                  <tr className="bg-[#E0F2FE]">
                    <th className="text-left py-2 px-3 font-semibold text-[#003F5C]">Scenario</th>
                    <th className="py-2 px-3 font-semibold text-[#003F5C] text-right">Aanschaf</th>
                    <th className="py-2 px-3 font-semibold text-[#003F5C] text-right">5-jr verbruik</th>
                    <th className="py-2 px-3 font-semibold text-[#003F5C] text-right">Totaal 5 jr</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: 'Standalone osmose', aanschaf: '€ 250', verbruik: '€ 450', totaal: '€ 700' },
                    { scenario: '4-in-1 kraan + osmose', aanschaf: '€ 999', verbruik: '€ 500', totaal: '€ 1.499' },
                    { scenario: '4-in-1 + besparing waterkoker/bruisend', aanschaf: '€ 999', verbruik: '€ 200', totaal: '€ 1.199' },
                    { scenario: 'Flessenwater (gezin van 4)', aanschaf: '€ 0', verbruik: '€ 2.500', totaal: '€ 2.500' },
                  ].map(r => (
                    <tr key={r.scenario} className="border-b border-gray-100">
                      <td className="py-2 px-3">{r.scenario}</td>
                      <td className="py-2 px-3 text-right">{r.aanschaf}</td>
                      <td className="py-2 px-3 text-right">{r.verbruik}</td>
                      <td className="py-2 px-3 text-right font-semibold">{r.totaal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Indicatief voor een gezin van 2–4 personen. De besparing op waterkoker en bruisend
              water bij de 4-in-1 kraan is geschat op €150/jr.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose — complete gids',
                desc: 'Alles over de technologie, installatie, onderhoud en de beste systemen.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose systeem kopen',
                desc: 'Vergelijk 4-in-1 kranen met osmose en andere osmose systemen op prijs en prestaties.',
              },
              {
                href: '/4-in-1-kraan',
                title: '4-in-1 kokend water kraan',
                desc: 'Kokend, koud, warm en bruisend water — allemaal via osmose gefilterd uit één kraan.',
              },
              {
                href: '/kennisbank/osmose-water',
                title: 'Kennisbank: osmose water',
                desc: 'Is osmose water gezond? TDS, mineralen en de wetenschappelijke stand van zaken.',
              },
              {
                href: '/kennisbank/osmose-membraan-types',
                title: 'Osmose membraan types',
                desc: 'TFC vs CTA membranen, afwijzingspercentages en kwaliteitsverschillen uitgelegd.',
              },
              {
                href: '/waterontharder',
                title: 'Waterontharder',
                desc: 'Ionenwisselaar vs osmose: wanneer kies je voor een waterontharder?',
              },
              {
                href: '/waterfilter',
                title: 'Waterfilter vergelijken',
                desc: 'Alle filtertypes naast elkaar: osmose, koolstof, filterkan en waterontharder.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Hoe hard is het leidingwater bij u in de buurt? Check de lokale waarden.',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over het osmose filter
          </h2>
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
