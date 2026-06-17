import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Welk waterfilter past bij u? Types & vergelijking 2026',
  description:
    'Welk waterfilter past bij jou? Vergelijk filterkan, koolstoffilter, omgekeerde osmose, waterontharder en 4-in-1 kraan op prijs, zuiverheid en onderhoud.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter' },
  openGraph: {
    title: 'Welk waterfilter past bij u? Types & vergelijking 2026',
    description:
      'Complete gids voor het vergelijken van waterfilters: filterkan, koolstoffilter, osmose, waterontharder en 4-in-1 kraan. Met vergelijkingstabel en koopadvies.',
    url: 'https://waterfilterplatform.nl/waterfilter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter is het beste voor thuis?',
    answer:
      'Het beste waterfilter hangt af van je doel. Wil je alleen chloor en smaak verbeteren? Dan volstaat een activekoolfilter of filterkan. Wil je ook nitraten, pesticiden, PFAS, zware metalen en microplastics verwijderen? Dan is omgekeerde osmose de beste keuze — het verwijdert 95–99% van alle opgeloste stoffen. Voor wie bovendien kalk, warm en bruisend water wil combineren, is een 4-in-1 kraan met ingebouwde osmose de meest complete oplossing.',
  },
  {
    question: 'Wat filtert een waterfilter precies?',
    answer:
      'Dat verschilt sterk per type. Een filterkan (zoals Brita) verwijdert chloor en vermindert kalk deels. Een actieve koolstoffilter op de kraan pakt chloor, geurstoffen en organische verbindingen aan. Een osmose-systeem verwijdert 95–99% van kalk, chloor, nitraten, pesticiden, zware metalen, PFAS en zelfs microplastics en bacteriën. Een waterontharder verwijdert uitsluitend kalk (calcium/magnesium), maar laat alle andere verontreinigingen door.',
  },
  {
    question: 'Is een waterfilter kopen de moeite waard in Nederland?',
    answer:
      'Nederlands leidingwater is van goede kwaliteit, maar bevat chloor (toegevoegd als desinfectiemiddel), is in grote delen van het land hard (kalk), en kan sporen bevatten van nitraten, PFAS en medicijnresten. Voor wie kalk wil aanpakken, beter smakend water wil, of meer zekerheid wil over de zuiverheid van het drinkwater, is een waterfilter kopen de moeite waard. Op de lange termijn is het ook goedkoper dan flessenwater kopen.',
  },
  {
    question: 'Hoe werkt een Brita filterkan?',
    answer:
      'Een Brita filterkan gebruikt een combinatie van actieve kool en een ionenwisselaarhars. De actieve kool absorbeert chloor, geurstoffen en sommige organische verbindingen. De ionenwisselaarhars verlaagt de waterhardheid gedeeltelijk. Een Brita filtert echter geen nitraten, pesticiden, zware metalen, PFAS of microplastics. Het filterpatroon moet elke 4–8 weken worden vervangen.',
  },
  {
    question: 'Wat is het verschil tussen een waterfilter kopen en een waterontharder?',
    answer:
      'Een waterontharder onthardt het volledige huishoudwater — douche, wasmachine, cv-ketel en keuken — door kalk (calcium en magnesium) te verwijderen via ionenwisseling. Een waterfilter (koolstof of osmose) filtert het drinkwater op de keuken en verwijdert een veel breder spectrum aan verontreinigingen. Ze vullen elkaar aan: een waterontharder beschermt je apparaten, een osmose-filter zorgt voor puur drinkwater.',
  },
  {
    question: 'Wat kost een waterfilter per jaar?',
    answer:
      'Een filterkan kost €40–90 per jaar aan filterpatronen. Een koolstoffilter op de kraan kost €30–80 per jaar. Een osmose-systeem kost €60–150 per jaar aan filters en membraanvervanging. Een 4-in-1 kraan met osmose heeft vergelijkbare kosten van €50–150 per jaar. Alle opties zijn aanzienlijk goedkoper dan flessenwater kopen: een gezin van 4 personen geeft daar snel €400–600 per jaar aan uit.',
  },
  {
    question: 'Hoe installeer ik een waterfilter in de keuken?',
    answer:
      'Een filterkan is direct te gebruiken. Een koolstoffilter op de kraan schroef je eenvoudig op de bestaande kraan. Een under-sink osmose-systeem koppel je aan de koudwaterleiding, afvoer en een extra kraantje op het aanrecht — dat duurt 30–60 minuten. Een 4-in-1 kraan met osmose vervangt de bestaande keukenkraan en vereist aansluiting op water en stroom; zelfs dit is door een handig persoon zelf te installeren in 1–2 uur.',
  },
  {
    question: 'Welk waterfilter vergelijken is het meest zinvol?',
    answer:
      'Vergelijk altijd op vier criteria: (1) wat verwijdert het filter — alleen chloor of ook nitraten, PFAS, microplastics? (2) wat zijn de jaarlijkse kosten inclusief filtervervanging? (3) hoeveel ruimte en installatiemoeite vraagt het? (4) past het bij je levensstijl (filterkan is laagdrempelig, osmose is set-and-forget). Voor een uitgebreide vergelijking met meetdata lees ons artikel op de kennisbank.',
  },
];

const filtertypes = [
  {
    nr: '1',
    naam: 'Filterkan (Brita, PearlCo, etc.)',
    prijs: '€ 20–50 aanschaf + €40–90/jr',
    zuiverheid: 'Laag (20–50%)',
    onderhoud: 'Elke 4–8 weken patroon wisselen',
    ruimte: 'Op werkblad',
    installatiegemak: 'Direct te gebruiken',
    highlight: false,
    beschrijving:
      'Een filterkan is de laagdrempeligste optie: geen installatie, geen gereedschap. Je giet leidingwater in de bovenste bak en het filtert door actieve kool en een ionenwisselaarhars. Resultaat: minder chloor en iets minder kalk. Nadelen: verwijdert geen nitraten, pesticiden, PFAS of zware metalen; filtert langzaam; patronen moeten frequent worden gewisseld.',
  },
  {
    nr: '2',
    naam: 'Koolstoffilter (op kraan of onder aanrecht)',
    prijs: '€ 30–100 aanschaf + €30–80/jr',
    zuiverheid: 'Matig (40–70%)',
    onderhoud: 'Elke 3–6 maanden',
    ruimte: 'Op kraan of klein kastje',
    installatiegemak: 'Eenvoudig zelf te monteren',
    highlight: false,
    beschrijving:
      'Actieve koolstoffilters absorberen effectief chloor, chlooramines, geurstoffen en een deel van de organische verbindingen. Ze zijn compact en goedkoop. Ze verwijderen echter geen opgeloste mineralen, nitraten of PFAS. Geschikt als basisverbetering voor smaak en geur. Een koolstoffilter is ook onderdeel van elk osmose-systeem als eerste en laatste filterstap.',
  },
  {
    nr: '3',
    naam: 'Omgekeerde osmose (under-sink)',
    prijs: '€ 150–500 aanschaf + €60–150/jr',
    zuiverheid: 'Zeer hoog (95–99%)',
    onderhoud: 'Jaarlijks filters + membraan 2–3jr',
    ruimte: 'Onder aanrecht',
    installatiegemak: 'Zelf te installeren (30–60 min)',
    highlight: true,
    beschrijving:
      'Omgekeerde osmose is de gouden standaard voor huishoudelijke drinkwaterfiltratie. Het RO-membraan heeft poriën van 0,0001 micron en houdt praktisch alles tegen: kalk, chloor, nitraten, pesticiden, PFAS, zware metalen, medicijnresten en zelfs bacteriën en virussen. Het systeem werkt in vier stappen: sediment-, pre-koolstof-, membraan- en post-koolstoffilter. Een klein drukvat slaat gefilterd water op zodat de kraan normaal snel loopt.',
  },
  {
    nr: '4',
    naam: 'Waterontharder (ionenwisselaar)',
    prijs: '€ 500–1.500 aanschaf + €85–240/jr',
    zuiverheid: 'Alleen kalk (95–99%)',
    onderhoud: 'Maandelijks zout + jaarlijkse service',
    ruimte: 'Meterkast of garage',
    installatiegemak: 'Installateur vereist',
    highlight: false,
    beschrijving:
      'Een waterontharder onthardt het volledige huishoudwater via ionenwisseling: calcium en magnesium worden uitgewisseld tegen natrium. Ideaal voor bescherming van cv-ketel, wasmachine en leidingen. Verwijdert echter geen chloor, nitraten of andere verontreinigingen — en verhoogt het natriumgehalte. Duurste en meest onderhoudintensieve optie.',
  },
  {
    nr: '5',
    naam: '4-in-1 kraan (kokend + koud + warm + osmose)',
    prijs: '€ 699–900 aanschaf + €50–150/jr',
    zuiverheid: 'Zeer hoog (95–99% via RO)',
    onderhoud: 'Jaarlijks filterpatroon',
    ruimte: 'Onder aanrecht + 1 kraangat',
    installatiegemak: 'Zelf te installeren (1–2 uur)',
    highlight: true,
    beschrijving:
      'De 4-in-1 kraan combineert een geïntegreerd osmose-systeem met kokend (100°C), koud gefilterd, warm en bruisend water — allemaal uit één kraan. Dit is de meest complete en ruimtebesparende oplossing. Eén jaarlijkse filterwissel vervangt alle losse patronen.',
  },
];

const vergelijkingstabel = [
  {
    type: 'Filterkan',
    prijs: '€ 20–50',
    zuiverheid: '20–50%',
    onderhoud: '4–8 weken',
    ruimte: 'Werkblad',
    installatie: 'Geen',
    highlight: false,
  },
  {
    type: 'Koolstoffilter op kraan',
    prijs: '€ 30–100',
    zuiverheid: '40–70%',
    onderhoud: '3–6 maanden',
    ruimte: 'Op kraan',
    installatie: 'Zelf, eenvoudig',
    highlight: false,
  },
  {
    type: 'Omgekeerde osmose',
    prijs: '€ 150–500',
    zuiverheid: '95–99%',
    onderhoud: 'Jaarlijks',
    ruimte: 'Onder aanrecht',
    installatie: 'Zelf, 30–60 min',
    highlight: true,
  },
  {
    type: 'Waterontharder',
    prijs: '€ 500–1.500',
    zuiverheid: 'Alleen kalk',
    onderhoud: 'Maandelijks + jaarlijks',
    ruimte: 'Meterkast',
    installatie: 'Installateur',
    highlight: false,
  },
  {
    type: '4-in-1 kraan + osmose',
    prijs: '€ 699–900',
    zuiverheid: '95–99%',
    onderhoud: 'Jaarlijks',
    ruimte: 'Onder aanrecht',
    installatie: 'Zelf, 1–2 uur',
    highlight: true,
  },
];

const situatieTabel = [
  {
    doel: 'Alleen smaak en chloor verbeteren',
    advies: 'Koolstoffilter op kraan',
    link: '/kennisbank/waterfilter-keuken',
  },
  {
    doel: 'Goedkoop en direct beginnen',
    advies: 'Filterkan (Brita o.i.d.)',
    link: '/kennisbank/filterkan-vs-osmose',
  },
  {
    doel: 'Breed spectrum: kalk, chloor, nitraten, PFAS',
    advies: 'Omgekeerde osmose under-sink',
    link: '/omgekeerde-osmose',
  },
  {
    doel: 'Kalk in hele huis aanpakken (apparaten, douche)',
    advies: 'Waterontharder (ionenwisselaar)',
    link: '/waterontharder',
  },
  {
    doel: 'Alles in één: filter + kokend + bruisend',
    advies: '4-in-1 kraan met osmose',
    link: '/kokend-water-kraan/met-filter',
  },
  {
    doel: 'Brita versus osmose: wat is het verschil?',
    advies: 'Lees de vergelijking',
    link: '/kennisbank/brita-vs-osmose',
  },
];

const kostentabel3jaar = [
  { type: 'Filterkan', aanschaf: '€ 30', jr1: '€ 90', jr2: '€ 90', jr3: '€ 90', totaal: '€ 300' },
  { type: 'Koolstoffilter kraan', aanschaf: '€ 60', jr1: '€ 60', jr2: '€ 60', jr3: '€ 60', totaal: '€ 240' },
  { type: 'Osmose (under-sink)', aanschaf: '€ 250', jr1: '€ 100', jr2: '€ 100', jr3: '€ 150', totaal: '€ 600' },
  { type: '4-in-1 kraan + osmose', aanschaf: '€ 799', jr1: '€ 80', jr2: '€ 80', jr3: '€ 80', totaal: '€ 1.039' },
  { type: 'Flessenwater (gezin)', aanschaf: '€ 0', jr1: '€ 500', jr2: '€ 500', jr3: '€ 500', totaal: '€ 1.500' },
];

export default function WaterfilterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Welk waterfilter past bij u? Types & vergelijking 2026',
          description:
            'Complete gids over waterfilters: filterkan, koolstof, omgekeerde osmose, waterontharder en 4-in-1 kraan vergeleken op prijs, zuiverheid en onderhoud.',
          datePublished: '2025-10-01',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/waterfilter',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Waterfilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter kopen: types, vergelijking en koopadvies
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Wil je een <strong>waterfilter kopen</strong> maar weet je niet welk type het beste past?
            Op deze pagina vergelijken we de vijf populairste filtertypes — van de eenvoudige filterkan tot
            een geavanceerde 4-in-1 kraan met omgekeerde osmose — op prijs, zuiverheid, onderhoud en
            installatiegemak. Met een heldere <strong>waterfilter vergelijking</strong> en praktisch
            koopadvies per situatie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kennisbank/waterfilter-vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waterfilters vergelijken →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Over omgekeerde osmose
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <QuickAnswer answer="Een waterfilter verwijdert verontreinigingen uit leidingwater. Het beste type hangt af van je doel: een osmosefilter verwijdert 99% van alles inclusief kalk; een koolstoffilter verbetert smaak en verwijdert chloor; een waterontharder pakt kalk in het hele huis aan. Nederlands kraanwater is veilig — een filter is een kwaliteitsverbetering, geen noodzaak." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#waarom" className="hover:underline">Waarom een waterfilter?</a></li>
            <li><a href="#types" className="hover:underline">Overzicht 5 filtertypes</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijkingstabel</a></li>
            <li><a href="#uitleg" className="hover:underline">Per type uitgebreid</a></li>
            <li><a href="#situatie" className="hover:underline">Welk filter voor welke situatie?</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten over 3 jaar</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud overzicht</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Waarom een waterfilter */}
        <section id="waarom">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom een waterfilter voor je leidingwater?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nederlands leidingwater voldoet aan de wettelijke drinkwaternormen en is veilig om te
            drinken. Toch kiezen steeds meer Nederlanders voor een waterfilter in de keuken. De drie
            meestgenoemde redenen:
          </p>
          <div className="space-y-3 mb-5">
            <div className="bg-[#E0F2FE]/60 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">1. Chloor en smaak</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Drinkwaterbedrijven voegen chloor toe als desinfectiemiddel. Dit is noodzakelijk voor de
                veiligheid van het distributienet, maar geeft leidingwater in sommige regio&apos;s een
                merkbare chloorsmaak of -geur. Een actieve koolstoffilter verwijdert chloor effectief.
              </p>
            </div>
            <div className="bg-[#E0F2FE]/60 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">2. Kalk en waterhardheid</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                In grote delen van Nederland is het leidingwater hard tot zeer hard (15–25 °dH). Kalk veroorzaakt
                witte aanslag op kranen, tegels en in apparaten. Kalk versnelt ook de slijtage van
                cv-ketels, wasmachines en koffieapparaten. Bekijk de{' '}
                <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
                  waterhardheid per gemeente
                </Link>{' '}
                voor jouw regio.
              </p>
            </div>
            <div className="bg-[#E0F2FE]/60 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">3. Microverontreinigingen: PFAS, nitraten en microplastics</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                RIVM-metingen tonen aan dat leidingwater in Nederland in beperkte mate PFAS, nitraten en sporen
                van medicijnresten en pesticiden bevat. Deze stoffen vallen binnen de wettelijke normen, maar
                steeds meer consumenten willen een extra zekerheid. Omgekeerde osmose is op dit moment de enige
                consumentenoplossing die al deze stoffen effectief verwijdert.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Naast gezondheidsoverwegingen spelen ook economische redenen mee. Een gezin van 4 personen dat
            dagelijks flessenwater koopt, geeft al snel €400–600 per jaar uit. Een waterfilter vergelijken met
            flessenwater leert al snel dat elk type filter op de lange termijn goedkoper is. Lees meer in ons
            artikel{' '}
            <Link href="/kennisbank/waterfilter-keuken" className="text-[#005F8A] underline hover:no-underline">
              waterfilter in de keuken
            </Link>
            .
          </p>
        </section>

        {/* Overzicht 5 filtertypes */}
        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke 5 filtertypes zijn er voor thuisgebruik?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Er zijn vijf hoofdtypes waterfilters voor thuisgebruik, elk met een ander werkingsprincipe,
            prijsklasse en toepassingsgebied. Hieronder een kort overzicht; verderop op deze pagina
            bespreken we elk type uitgebreid.
          </p>
          <div className="space-y-3">
            {filtertypes.map(f => (
              <div
                key={f.nr}
                className={`rounded-2xl border p-4 ${f.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {f.nr}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-bold text-gray-900">{f.naam}</p>
                      {f.highlight && (
                        <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">
                          Aanbevolen
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-0.5 text-xs text-gray-600 mb-2">
                      <div><span className="text-gray-400">Prijs:</span> {f.prijs}</div>
                      <div><span className="text-gray-400">Zuiverheid:</span> {f.zuiverheid}</div>
                      <div><span className="text-gray-400">Onderhoud:</span> {f.onderhoud}</div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed hidden sm:block">{f.beschrijving}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe vergelijken de verschillende waterfilters?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel geeft een snelle{' '}
            <strong>waterfilter vergelijking</strong> op de vijf meest relevante criteria. Uitgebreide uitleg
            per type staat in de volgende sectie. Een nog diepgaandere analyse vind je in ons artikel{' '}
            <Link href="/kennisbank/waterfilter-vergelijken" className="text-[#005F8A] underline hover:no-underline">
              waterfilter vergelijken
            </Link>
            .
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Zuiverheid</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Onderhoud</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Installatie</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingstabel.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.zuiverheid}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.onderhoud}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.installatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Per type uitgebreide uitleg */}
        <section id="uitleg">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-5">Hoe werkt elk filtertype in detail?</h2>

          {/* Filterkan */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#003F5C] mb-3">1. Filterkan</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              De filterkan is de meest toegankelijke manier om leidingwater te filteren. Je giet water in de
              bovenste bak; het filtert door een patroon van actieve kool (die chloor en geurstoffen absorbeert)
              en een ionenwisselaarhars (die waterhardheid gedeeltelijk verlaagt). Na het filteren zit het schone
              water in de onderste bak.
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Sterk punt: geen installatie, goedkoop in aanschaf, overal te gebruiken. Zwak punt: filtert langzaam
              (3–7 minuten per liter), verwijdert geen nitraten, PFAS, pesticides of zware metalen, en het
              filterpatroon moet elke 4–8 weken worden vervangen. Op jaarbasis zijn de filterkosten (€40–90)
              vergelijkbaar met of hoger dan een eenvoudig koolstoffilter. Benieuwd naar het verschil in
              prestaties? Lees onze vergelijking{' '}
              <Link href="/kennisbank/filterkan-vs-osmose" className="text-[#005F8A] underline hover:no-underline">
                filterkan vs osmose
              </Link>
              .
            </p>
          </div>

          {/* Koolstoffilter */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#003F5C] mb-3">2. Koolstoffilter op de kraan of onder aanrecht</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Actieve koolstoffilters werken door adsorptie: verontreinigingen hechten aan het immense
              oppervlak van de poreuze koolstofkorrels. Een gram geactiveerde kool heeft een intern oppervlak van
              500 tot 1.500 m² — genoeg om chloor, chlooramines, geurstoffen en een breed spectrum aan organische
              verbindingen effectief te binden.
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Een model op de kraan schroef je eenvoudig op de bestaande mengkraan. Een model onder het aanrecht
              wordt ingebouwd in de waterleiding en vereist een kleine aanpassing, maar levert direct schoner water
              uit de gewone kraan. Koolstoffilters verwijderen echter geen opgeloste mineralen zoals nitraten of
              zware metalen en ook geen microplastics. Lees meer over opties in ons artikel{' '}
              <Link href="/kennisbank/waterfilter-keuken" className="text-[#005F8A] underline hover:no-underline">
                waterfilter keuken
              </Link>
              .
            </p>
          </div>

          {/* Osmose */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#003F5C] mb-3">3. Omgekeerde osmose (under-sink)</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                Omgekeerde osmose
              </Link>{' '}
              is de meest grondige waterfiltratietechniek voor thuisgebruik. Het systeem drijft water onder druk
              (3–6 bar) door een polyamide membraan met poriën van 0,0001 micron. Alles groter dan een
              watermolecuul wordt tegengehouden: kalk, chloor, nitraten, pesticiden, PFAS, zware metalen,
              medicijnresten, microplastics en zelfs bacteriën en virussen.
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Een standaard osmose-systeem werkt in vier stappen: sedimentfilter, pre-koolstof, RO-membraan en
              post-koolstof. Een klein drukvat slaat het gefilterde water op zodat de extra kraan met normale
              snelheid loopt. Het systeem produceert ook &ldquo;spoelwater&rdquo; (geconcentreerd leidingwater dat
              naar de afvoer gaat); moderne systemen met permeaatpomp halen een verhouding van 1:1 of beter.
            </p>
            <p className="text-gray-700 leading-relaxed">
              De jaarlijkse kosten (€60–150) zijn lager dan flessenwater kopen. Installatie is zelf te doen in
              30–60 minuten. Wil je zowel osmose als kokend en bruisend water? Dan is een 4-in-1 kraan de
              meest complete oplossing — zie hieronder.
            </p>
          </div>

          {/* Waterontharder */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#003F5C] mb-3">4. Waterontharder</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Een{' '}
              <Link href="/waterontharder" className="text-[#005F8A] underline hover:no-underline">
                waterontharder
              </Link>{' '}
              werkt via ionenwisseling en onthardt het volledige huishoudwater: van de douche tot de
              wasmachine en de cv-ketel. Dat is een wezenlijk verschil met de andere filtertypen die alleen
              de drinkwatertap aanpakken. De ionenwisselaar verwijdert calcium en magnesium (de
              kalk-veroorzakers) en vervangt ze door natriumionen. Zacht water in de hele woning voorkomt
              kalkaanslag in leidingen, op tegels en in apparaten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nadelen: hoge aanschafprijs (€500–1.500 + installateur), maandelijks zout bijvullen,
              natriumtoevoeging aan het drinkwater. Een waterontharder lost chloor, nitraten, PFAS of zware
              metalen niet op. Veel huizenbezitters met hard water combineren een waterontharder voor de
              hele woning met een osmose-systeem op de keukenkraan voor puur drinkwater.
            </p>
          </div>

          {/* 4-in-1 kraan */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-[#003F5C] mb-3">5. 4-in-1 kraan met osmose</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              De 4-in-1 kraan combineert een geïntegreerd omgekeerde osmose systeem met vier
              waterfuncties: kokend (100°C), koud gefilterd, warm en bruisend water. Dit is de meest
              complete waterfilter-oplossing voor in de keuken, en combineert alle functies in één elegant kraanontwerp.
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Voordelen: één jaarlijkse filterwissel voor alles, geen aparte waterkoker meer, geen losse
              osmose-tap, geen bruisend water in plastic flessen. De aanschafprijs (€699–900) is hoger dan
              een losse osmose-installatie, maar de totale kosten over 3–5 jaar zijn concurrerend doordat
              je ook de waterkoker (€20–100/jr aan energie) en bruisend water-abonnement (€100–200/jr)
              vervangt. Lees meer op de pagina{' '}
              <Link href="/kokend-water-kraan/met-filter" className="text-[#005F8A] underline hover:no-underline">
                kokend water kraan met filter
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Welk filter voor welke situatie */}
        <section id="situatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welk waterfilter past bij welke situatie?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er is niet één &ldquo;beste waterfilter&rdquo; — de beste keuze hangt af van jouw specifieke
            situatie, budget en prioriteiten. De tabel hieronder koppelt veelvoorkomende doelen aan het meest
            geschikte filtertype.
          </p>
          <div className="space-y-2">
            {situatieTabel.map(s => (
              <div key={s.doel} className="flex items-start gap-3 border border-gray-100 rounded-xl p-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{s.doel}</p>
                </div>
                <Link
                  href={s.link}
                  className="shrink-0 text-xs bg-[#005F8A] text-white px-3 py-1.5 rounded-lg hover:bg-[#003F5C] transition-colors font-medium"
                >
                  {s.advies} →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Combinatie advies</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Woon je in een hard-watergebied (15+ °dH) en wil je de volledige woning beschermen én puur
              drinkwater? Overweeg dan een combinatie: een waterontharder op de hoofdleiding voor douche,
              wasmachine en leidingen, plus een osmose-systeem of 4-in-1 kraan op de keukentap voor puur
              drinkwater. Zo haal je het beste uit beide werelden zonder de nadelen van alleen een
              waterontharder (natriumrijke drank) of alleen osmose (leidingen verkalken nog steeds).
            </p>
          </div>
        </section>

        {/* Kosten over 3 jaar */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten over 3 jaar vergeleken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De aanschafprijs zegt weinig over de daadwerkelijke kosten. Hieronder een realistisch overzicht van
            de totale kosten over 3 jaar inclusief aanschaf, filtervervanging en eventueel zout — voor een gezin
            van 2–4 personen. Ter referentie ook de kosten van flessenwater.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaar 1</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaar 2</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaar 3</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Totaal</th>
                </tr>
              </thead>
              <tbody>
                {kostentabel3jaar.map(r => (
                  <tr key={r.type} className="border-b border-gray-100">
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right">{r.jr1}</td>
                    <td className="py-2.5 px-3 text-right">{r.jr2}</td>
                    <td className="py-2.5 px-3 text-right">{r.jr3}</td>
                    <td className="py-2.5 px-3 text-right font-semibold">{r.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Bedragen zijn indicatieve gemiddelden. Jaar 3 osmose is hoger vanwege membraanvervanging (€80–100).
            Flessenwater: €500/jr voor een gezin van 4 personen (0,5L per persoon per dag à €0,70).
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De filterkan is het goedkoopst in aanschaf, maar na 3 jaar zijn de totale kosten (€300) hoger dan
            een koolstoffilter (€240). Een osmose-systeem kost over 3 jaar €600 — aanzienlijk minder dan
            flessenwater (€1.500). De 4-in-1 kraan heeft de hoogste aanschaf, maar biedt ook de meeste functies
            en vervangt de waterkoker en het bruisend water-abonnement. Zie ook{' '}
            <Link href="/beste-waterfilter-2026" className="text-[#005F8A] underline hover:no-underline">
              beste waterfilter 2026
            </Link>{' '}
            voor ons actuele koopadvies.
          </p>
        </section>

        {/* Onderhoud overzicht */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud: wat vraagt elk filtertype?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderhoud verschilt sterk per filtertype. Hieronder een overzicht van de benodigde acties en
            frequentie.
          </p>
          <div className="space-y-3">
            {[
              {
                type: 'Filterkan',
                acties: [
                  'Filterpatroon wisselen elke 4–8 weken (ca. €5–8 per patroon)',
                  'Kan en bak wekelijks omspuelen met koud water',
                  'Patroonvervaldatum bijhouden — verzadigde patronen kunnen bacteriën loslaten',
                ],
              },
              {
                type: 'Koolstoffilter op/onder kraan',
                acties: [
                  'Filterpatroon of cartridge wisselen elke 3–6 maanden',
                  'Kraanadapter afspoelen bij filterwissel',
                  'Bij under-sink: jaarlijks fittingen controleren op lekkage',
                ],
              },
              {
                type: 'Omgekeerde osmose (under-sink)',
                acties: [
                  'Sediment- en pre-koolstoffilter wisselen elke 6–12 maanden',
                  'Post-koolstoffilter wisselen elke 12 maanden',
                  'RO-membraan vervangen elke 2–3 jaar',
                  'Drukvat jaarlijks druk controleren en indien nodig bijpompen (6–8 psi)',
                ],
              },
              {
                type: 'Waterontharder',
                acties: [
                  'Zout bijvullen maandelijks of tweemaandelijks (50–150 kg/jr)',
                  'Brinereservoir jaarlijks reinigen',
                  'Harsbed elke 2–3 jaar laten controleren',
                  'Jaarlijkse servicebeurt aanbevolen',
                ],
              },
              {
                type: '4-in-1 kraan + osmose',
                acties: [
                  'Jaarlijks filterpatroon wisselen (één patroon, alles-in-één)',
                  'RO-membraan elke 2–3 jaar vervangen',
                  'CO₂-cilinder bijvullen of verwisselen elke 2–4 maanden (voor bruisend water)',
                ],
              },
            ].map(m => (
              <div key={m.type} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-2">{m.type}</p>
                <ul className="space-y-1">
                  {m.acties.map(a => (
                    <li key={a} className="flex gap-2 items-start text-sm text-gray-600">
                      <span className="text-[#005F8A] shrink-0 mt-0.5">•</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="waterfilter-cta"
          label="Bekijk de zuiver-water-kranen bij PureAqua"
          title="Klaar voor zuiver water uit de kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/kennisbank/waterfilter-vergelijken',
                title: 'Waterfilter vergelijken',
                desc: 'Uitgebreide technische vergelijking van alle filtertypes met meetdata.',
              },
              {
                href: '/kennisbank/waterfilter-keuken',
                title: 'Waterfilter in de keuken',
                desc: 'Welke opties passen in een moderne keuken? Installatie en kosten.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Complete gids over RO: werking, kosten, onderhoud en de beste systemen.',
              },
              {
                href: '/waterontharder',
                title: 'Waterontharder',
                desc: 'Ionenwisselaar, soorten, kosten en vergelijking met osmose.',
              },
              {
                href: '/kokend-water-kraan/met-filter',
                title: 'Kokend water kraan met filter',
                desc: 'Kokend, gefilterd en bruisend water uit één kraan.',
              },
              {
                href: '/kennisbank/brita-vs-osmose',
                title: 'Brita vs osmose',
                desc: 'Wat verwijdert welk filter écht? Feitelijke vergelijking met meetcijfers.',
              },
              {
                href: '/kennisbank/filterkan-vs-osmose',
                title: 'Filterkan vs omgekeerde osmose',
                desc: 'Wanneer is een filterkan voldoende en wanneer heb je meer nodig?',
              },
              {
                href: '/beste-waterfilter-2026',
                title: 'Beste waterfilter 2026',
                desc: 'Ons actuele koopadvies voor elk budget en elke situatie.',
              },
              {
                href: '/purefilter-review',
                title: 'PureFilter Mineral+ review',
                desc: 'Claims naast de bewijsstatus: wat is geclaimd en wat nog niet bevestigd.',
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Alle filtertechnieken vergeleken</p>
              <p className="text-sm text-gray-500">Een overzicht van actieve kool, ionenwisseling, osmose en UV-filtratie naast elkaar.</p>
            </Link>
            <Link href="/keuzehulp" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Welk filter past bij u?</p>
              <p className="text-sm text-gray-500">Beantwoord een paar vragen en ontdek welk waterfilter het beste bij uw situatie past.</p>
            </Link>
            <Link href="/keurmerken" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Waterfilter keurmerken uitgelegd</p>
              <p className="text-sm text-gray-500">NSF, KIWA en andere keurmerken: wat zeggen ze over de kwaliteit van een waterfilter?</p>
            </Link>
            <Link href="/vergelijken" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">Waterfilters vergelijken</p>
              <p className="text-sm text-gray-500">Vergelijk populaire waterfiltermerken en -modellen op prijs, prestaties en onderhoud.</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterfilters</h2>
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
      {/* orphan-fix: meer in dit cluster */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Meer in dit cluster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link key="/waterfilter/aluminium" href="/waterfilter/aluminium" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Aluminium in drinkwater</p>
              </Link>
              <Link key="/waterfilter/ammonium" href="/waterfilter/ammonium" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Ammonium in leidingwater</p>
              </Link>
              <Link key="/waterfilter/bromaat" href="/waterfilter/bromaat" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Bromaat in water</p>
              </Link>
              <Link key="/waterfilter/caravan" href="/waterfilter/caravan" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter voor caravan en camper</p>
              </Link>
              <Link key="/waterfilter/chloride" href="/waterfilter/chloride" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Chloride in drinkwater</p>
              </Link>
              <Link key="/waterfilter/cryptosporidium" href="/waterfilter/cryptosporidium" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Cryptosporidium in water</p>
              </Link>
              <Link key="/waterfilter/douche" href="/waterfilter/douche" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Douchefilter</p>
              </Link>
              <Link key="/waterfilter/hond-kat" href="/waterfilter/hond-kat" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter voor hond en kat</p>
              </Link>
              <Link key="/waterfilter/kantoor" href="/waterfilter/kantoor" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter voor kantoor</p>
              </Link>
              <Link key="/waterfilter/natriumhypochloriet" href="/waterfilter/natriumhypochloriet" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Natriumhypochloriet in leidingwater</p>
              </Link>
              <Link key="/waterfilter/nikkel" href="/waterfilter/nikkel" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Nikkel in leidingwater</p>
              </Link>
              <Link key="/waterfilter/oudere-woning" href="/waterfilter/oudere-woning" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter voor oudere woning</p>
              </Link>
              <Link key="/waterfilter/sport" href="/waterfilter/sport" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter voor Sport</p>
              </Link>
              <Link key="/waterfilter/studentenkamer" href="/waterfilter/studentenkamer" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter voor studentenkamer</p>
              </Link>
              <Link key="/waterfilter/totaaloplossing" href="/waterfilter/totaaloplossing" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter totaaloplossing</p>
              </Link>
              <Link key="/waterfilter/vs-waterkoker" href="/waterfilter/vs-waterkoker" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter of waterkoker</p>
              </Link>
              <Link key="/waterfilter/zeoliet" href="/waterfilter/zeoliet" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Zeoliet als waterfiltermedium</p>
              </Link>
              <Link key="/waterfilter/zink" href="/waterfilter/zink" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter voor zink</p>
              </Link>
              <Link key="/waterfilter/zomerhuis" href="/waterfilter/zomerhuis" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterfilter voor vakantiehuis en zomerhuis</p>
              </Link>
              <Link key="/begrippenlijst" href="/begrippenlijst" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Begrippenlijst waterfilters en drinkwater</p>
              </Link>
          </div>
        </section>
      </div>
    </>
  );
}
