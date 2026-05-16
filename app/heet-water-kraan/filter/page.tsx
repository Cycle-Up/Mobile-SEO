import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Heet water kraan met filter: gefilterd heet water uit de kraan',
  description:
    'Een heet water kraan met geintegreerd waterfilter geeft instant heet en gefilterd water. Welke filteropties bestaan er en wat filtert het precies?',
  alternates: { canonical: 'https://waterfilterplatform.nl/heet-water-kraan/filter' },
  openGraph: {
    title: 'Heet water kraan met filter: gefilterd heet water uit de kraan',
    description:
      'Een heet water kraan met geintegreerd waterfilter geeft instant heet en gefilterd water. Welke filteropties bestaan er en wat filtert het precies?',
    url: 'https://waterfilterplatform.nl/heet-water-kraan/filter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Waarom heeft een heet water kraan een waterfilter nodig?',
    answer:
      'Zonder filter verwarmt een heet water kraan ongefilterd leidingwater. Bij verhitting slaat kalk neer op het verwarmingselement, wat de levensduur verkort en het energieverbruik verhoogt. Daarnaast concentreren stoffen als chloor, nitraten en PFAS bij verhitting. Een kalkfilter beschermt het apparaat; een osmosefilter verwijdert bovendien schadelijke stoffen voor een betere smaak en waterkwaliteit.',
  },
  {
    question: 'Welke stoffen verwijdert een kalkfilter bij een heet water kraan?',
    answer:
      'Een kalkfilter (ionenwisselaar) verwijdert calcium en magnesium, de oorzaken van kalkaanslag. Het beschermt het verwarmingselement maar verwijdert geen PFAS, nitraten, pesticiden, medicijnresten of bacterieen. Voor puur kalkaanslag-preventie is een kalkfilter voldoende; voor schoon drinkwater is een koolstof- of osmosefilter nodig.',
  },
  {
    question: 'Wat filtert omgekeerde osmose uit heet water?',
    answer:
      'Omgekeerde osmose (RO) verwijdert 95-99% van vrijwel alle opgeloste stoffen: kalk, nitraten, PFAS (per- en polyfluoralkylstoffen), zware metalen (lood, arseen), pesticiden, medicijnresten, bacterieen, virussen en microplastics. Het osmosemembraan heeft porieen van 0,0001 micrometer. Dit is veruit de meest complete filtermethode die beschikbaar is voor huishoudelijk gebruik.',
  },
  {
    question: 'Is gefilterd heet water beter dan ongefilterd?',
    answer:
      'Ja, op meerdere vlakken. Ten eerste: smaak. Chloor verdampt gedeeltelijk bij verhitting maar PFAS en nitraten blijven aanwezig. Gefilterd heet water smaakt zuiverder. Ten tweede: veiligheid. Ongefilterd water boven 60 graden concentreert sommige stoffen door verdamping. Ten derde: apparaatlevensduur. Kalkvrij water voorkomt aanslag op het verwarmingselement.',
  },
  {
    question: 'Welke heet water kraan heeft een ingebouwd osmosefilter?',
    answer:
      'De PureAqua 4-in-1 is het enige systeem dat een volledig omgekeerde osmose filter combineert met zowel heet (60-98 graden) als kokend (100 graden) water in e&eacute;n kraan. Andere merken zoals Quooker en Grohe Red bieden koolstoffilters als optie maar geen RO-membraan. Een losse RO-unit kan wel achter de meeste heet water boilers worden geschakeld.',
  },
  {
    question: 'Hoe vaak moet het filter van een heet water kraan worden vervangen?',
    answer:
      'Een kalkfilter (ionenwisselhars) gaat 3-6 maanden mee afhankelijk van waterharheid en gebruik. Een koolstofblokfilter gaat 6-12 maanden mee. Bij een osmosesysteem vervangt u het RO-membraan elke 12-24 maanden en de pre- en postfilters jaarlijks. Kosten per jaar: 20-50 euro (kalk/koolstof) tot 60-100 euro (osmose compleet filterset).',
  },
  {
    question: 'Verwijdert een heet water kraan met filter ook PFAS?',
    answer:
      'Een kalkfilter of eenvoudige koolstoffilter verwijdert geen of nauwelijks PFAS. Een actief koolstofblok (NSF/ANSI 53 gecertificeerd) verwijdert 70-90% van bepaalde PFAS-verbindingen. Alleen een omgekeerde osmose membraan verwijdert 95-99% van alle bekende PFAS-verbindingen betrouwbaar. Voor gebieden met PFAS-besmetting is een osmosefilter de enige betrouwbare oplossing.',
  },
  {
    question: 'Kan ik een los osmosefilter koppelen aan mijn bestaande heet water kraan?',
    answer:
      'Ja, een losse omgekeerde osmose-unit (150-400 euro) kan worden aangesloten voor de heet water boiler. U sluit de permeaatuitgang van het RO-systeem aan op de koudwaterinlaat van de boiler via een 1/4 inch Quick Connect aansluiting. Zo verwarmt u altijd gefilterd water. Nadeel: meer onderdelen, meer ruimte onder aanrecht en twee aparte kranen. De PureAqua 4-in-1 integreert dit in e&eacute;n systeem.',
  },
];

const filterOpties = [
  {
    naam: 'Kalkfilter (ionenwisselaar)',
    verwijdert: 'Calcium, magnesium (kalk)',
    verwijdertNiet: 'PFAS, nitraten, chloor, medicijnresten, bacterieen',
    prijs: '20 - 50 euro/jaar',
    levensduur: '3-6 maanden',
    doel: 'Apparaatbescherming',
    kleur: 'border-gray-200',
    highlight: false,
  },
  {
    naam: 'Koolstofblokfilter (carbon block)',
    verwijdert: 'Chloor, geur, smaak, sommige pesticiden, gedeeltelijk PFAS',
    verwijdertNiet: 'Nitraten, zware metalen, bacterieen, PFAS volledig',
    prijs: '30 - 60 euro/jaar',
    levensduur: '6-12 maanden',
    doel: 'Smaakverbetering + basiskwaliteit',
    kleur: 'border-gray-200',
    highlight: false,
  },
  {
    naam: 'Omgekeerde osmose (RO-membraan)',
    verwijdert: 'Kalk, nitraten, PFAS, zware metalen, pesticiden, medicijnresten, bacterieen, virussen, microplastics (95-99%)',
    verwijdertNiet: 'Kleine hoeveelheden gassen (CO2) - maar die zijn niet schadelijk',
    prijs: '60 - 100 euro/jaar',
    levensduur: '12-24 maanden membraan, 12 maanden pre/postfilters',
    doel: 'Maximale waterkwaliteit, volksgezondheid',
    kleur: 'border-[#005F8A]',
    highlight: true,
  },
];

const onderhoudSchema = [
  { actie: 'Koolstoffilter vervangen', frequentie: 'Elk jaar', kosten: '30 - 60 euro', diyMogelijk: true },
  { actie: 'Kalkfilter (hars) vervangen', frequentie: 'Elke 6 maanden', kosten: '20 - 40 euro', diyMogelijk: true },
  { actie: 'Osmose pre-filter vervangen', frequentie: 'Elk jaar', kosten: '15 - 25 euro', diyMogelijk: true },
  { actie: 'Osmose RO-membraan vervangen', frequentie: 'Elke 12-24 maanden', kosten: '30 - 60 euro', diyMogelijk: true },
  { actie: 'Osmose post-filter vervangen', frequentie: 'Elk jaar', kosten: '15 - 25 euro', diyMogelijk: true },
  { actie: 'Boiler ontkalken', frequentie: 'Jaarlijks bij hard water', kosten: '0 - 50 euro (DIY)', diyMogelijk: true },
  { actie: 'Boiler reinigen / inspectie', frequentie: 'Elke 2-3 jaar', kosten: '50 - 100 euro', diyMogelijk: false },
];

export default function HeetWaterKraanFilterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Heet water kraan', url: 'https://waterfilterplatform.nl/heet-water-kraan' },
          { name: 'Filter', url: 'https://waterfilterplatform.nl/heet-water-kraan/filter' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Heet water kraan met filter: gefilterd heet water uit de kraan',
          description:
            'Een heet water kraan met geintegreerd waterfilter geeft instant heet en gefilterd water. Welke filteropties bestaan er en wat filtert het precies?',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/heet-water-kraan/filter',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/heet-water-kraan" className="hover:text-[#005F8A]">Heet water kraan</Link>
            <span className="mx-2">/</span>
            <span>Filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Heet water kraan met filter: gefilterd heet water uit de kraan
          </h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Een <strong>heet water kraan met filter</strong> levert niet alleen instant warm water
            van 60-98&deg;C, maar ook gefilterd water vrij van kalk, chloor, PFAS en andere
            verontreinigingen. Maar welke filteropties bestaan er, wat filteren ze precies en welk
            systeem biedt de meest complete bescherming?
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Op deze pagina vergelijken we drie filteropties (kalkfilter, koolstoffilter, osmose),
            leggen we uit waarom een filter ook het apparaat beschermt en bespreken we de PureAqua
            4-in-1 als enige kraan die echt osmosefiltratie combineert met 100&deg;C kokend water.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/heet-water-kraan/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Koopgids heet water kraan &rarr;
            </Link>
            <Link
              href="/heet-water-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Terug naar overzicht
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#waarom-filter" className="hover:underline">Waarom filter bij heet water?</a></li>
            <li><a href="#filteropties" className="hover:underline">Drie filteropties vergeleken</a></li>
            <li><a href="#osmose-voordelen" className="hover:underline">Wat osmose extra biedt</a></li>
            <li><a href="#pureaqua" className="hover:underline">PureAqua 4-in-1: osmose + 100&deg;C</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoudschema filter + boiler</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Quick Answer */}
        <section>
          <QuickAnswer answer="Een kalkfilter beschermt het verwarmingselement maar filtert geen PFAS of nitraten. Een koolstoffilter verbetert de smaak. Alleen omgekeerde osmose verwijdert 95-99% van alle verontreinigingen inclusief PFAS, nitraten en medicijnresten. De PureAqua 4-in-1 is het enige systeem dat osmosefiltratie combineert met 100 graden Celsius en heet water in e&eacute;n kraan." />
        </section>

        {/* Waarom filter */}
        <section id="waarom-filter">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom heeft een heet water kraan een filter nodig?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste heet water kranen en instant water heaters verwarmen ongefilterd leidingwater.
            Dat lijkt prima, maar er zijn drie concrete redenen waarom een filter sterk aanbevolen is:
          </p>
          <div className="space-y-3 mb-5">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="font-semibold text-amber-900 mb-2">Reden 1: Kalk beschadigt het verwarmingselement</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bij verhitting boven 60&deg;C slaat calcium (kalk) neer op het verwarmingselement.
                Een laagje van 1 mm kalk verhoogt het energieverbruik met 10-15% en verkort de
                levensduur van het element met 30-50%. In gebieden met hard water (boven 15
                dH graden) is dit een serieus probleem. Een kalkfilter of osmosefilter voor het
                apparaat elimineert dit volledig.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="font-semibold text-blue-900 mb-2">Reden 2: Betere smaak van thee en soep</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Chloor, dat in Nederlands leidingwater aanwezig is als desinfectiemiddel (0,1-0,3
                mg/l), geeft een karakteristieke smaak en geur die bij verhitting gedeeltelijk
                verdampt maar niet volledig verdwijnt. Nitraten en PFAS blijven onveranderd aanwezig
                bij verhitting. Gefilterd water geeft thee, soep en koffie een aanzienlijk zuiverere
                en vollere smaak.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="font-semibold text-red-900 mb-2">Reden 3: PFAS en nitraten blijven bij verhitting</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                PFAS (per- en polyfluoralkylstoffen) en nitraten verdwijnen niet bij verhitting &mdash;
                ze concentreren juist als het water gedeeltelijk verdampt. In gebieden met PFAS in
                het drinkwater (diverse locaties in Nederland nabij industriegebieden of vliegvelden)
                is gefilterd heet water geen luxe maar een gezondheidsmaatregel.
              </p>
            </div>
          </div>
        </section>

        {/* Filteropties */}
        <section id="filteropties">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Drie filteropties voor heet water kranen vergeleken
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Er zijn drie hoofdtypen filters die worden gebruikt bij heet water systemen. Ze
            verschillen sterk in wat ze wel en niet verwijderen:
          </p>
          <div className="space-y-4">
            {filterOpties.map(f => (
              <div
                key={f.naam}
                className={`rounded-2xl border p-5 ${f.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div>
                    <p className="font-bold text-gray-900">{f.naam}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{f.doel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#005F8A]">{f.prijs}</p>
                    <p className="text-xs text-gray-400">{f.levensduur}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="font-semibold text-green-700 mb-1">Verwijdert wel</p>
                    <p className="text-gray-700 leading-relaxed">{f.verwijdert}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="font-semibold text-red-600 mb-1">Verwijdert niet</p>
                    <p className="text-gray-700 leading-relaxed">{f.verwijdertNiet}</p>
                  </div>
                </div>
                {f.highlight && (
                  <p className="text-xs text-[#005F8A] font-semibold mt-3">
                    Meest complete filtratie &mdash; aanbevolen voor schoon drinkwater en lange apparaatlevensduur
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Osmose voordelen */}
        <section id="osmose-voordelen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat osmose extra biedt ten opzichte van een kalkfilter
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een kalkfilter beschermt het apparaat maar het water zelf is nog steeds ongezuiverd
            leidingwater minus de kalk. Omgekeerde osmose gaat veel verder:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Stof in water</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Kalkfilter</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Koolstoffilter</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Osmose (RO)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stof: 'Kalk (calcium, magnesium)', kalk: '95%+', koolstof: '0%', osmose: '95-99%' },
                  { stof: 'Chloor en chloorderivatem', kalk: '0%', koolstof: '95%+', osmose: '99%+' },
                  { stof: 'PFAS (teflon-stoffen)', kalk: '0%', koolstof: '70-90%*', osmose: '95-99%' },
                  { stof: 'Nitraten', kalk: '0%', koolstof: '0-10%', osmose: '85-95%' },
                  { stof: 'Zware metalen (lood, arseen)', kalk: '0%', koolstof: '30-70%*', osmose: '95-99%' },
                  { stof: 'Pesticiden', kalk: '0%', koolstof: '50-90%', osmose: '95-99%' },
                  { stof: 'Medicijnresten', kalk: '0%', koolstof: '30-60%', osmose: '90-99%' },
                  { stof: 'Bacterieen en virussen', kalk: '0%', koolstof: '0-30%', osmose: '99,9%+' },
                  { stof: 'Microplastics', kalk: '0%', koolstof: '60-80%', osmose: '99%+' },
                ].map(r => (
                  <tr key={r.stof} className="border-b border-gray-100">
                    <td className="py-2 px-3 text-gray-800 text-xs font-medium">{r.stof}</td>
                    <td className={`py-2 px-3 text-center text-xs font-medium ${
                      r.kalk === '0%' || r.kalk === '0-10%' ? 'text-red-500' :
                      r.kalk.startsWith('95') ? 'text-green-700' : 'text-amber-600'
                    }`}>{r.kalk}</td>
                    <td className={`py-2 px-3 text-center text-xs font-medium ${
                      r.koolstof === '0%' || r.koolstof === '0-10%' ? 'text-red-500' :
                      r.koolstof.startsWith('95') ? 'text-green-700' : 'text-amber-600'
                    }`}>{r.koolstof}</td>
                    <td className="py-2 px-3 text-center text-xs font-bold text-green-700">{r.osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Percentages zijn indicatief en afhankelijk van filtertype, certificering en vloeistofstroom.
            NSF/ANSI 53 gecertificeerde koolstoffilters presteren aanzienlijk beter dan ongecertificeerde.
          </p>
        </section>

        {/* CTA 1 */}
        <CTABanner context="osmose" />

        {/* PureAqua */}
        <section id="pureaqua">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            PureAqua 4-in-1: de enige kraan met osmose en 100&deg;C
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De PureAqua 4-in-1 combineert als enige systeem op de markt een volledig omgekeerde
            osmose filter met zowel heet water (60-98&deg;C) als kokend water (100&deg;C) in
            e&eacute;n kraan. Alle andere merken bieden osmosefiltratie alleen als losse unit of
            helemaal niet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                titel: 'Osmosefiltratie geintegreerd',
                tekst:
                  'Het osmosemembraan en de pre- en postfilters zijn intern gemonteerd in het onderkastsysteem. Geen losse unit, geen extra aansluiting, e&eacute;n compacte installatie.',
              },
              {
                titel: 'Vier waterfuncties uit e&eacute;n kraan',
                tekst:
                  'Kokend (100&deg;C), heet (60-98&deg;C), koud gefilterd en bruisend gefilterd water, allemaal via osmose voorgefilterd. Alle functies gebruiken osmosewater.',
              },
              {
                titel: 'Vervangt vier losse apparaten',
                tekst:
                  'Waterkoker (50-80 euro), filterkan (30-150 euro), mengkraan (100-300 euro) en sodastream-apparaat (80-120 euro) zijn alle vier niet meer nodig.',
              },
              {
                titel: 'Jaarlijkse filterwissel eenvoudig',
                tekst:
                  'Het volledige filterset (pre-filter, membraan, post-filter) is in minder dan 10 minuten zelf te vervangen zonder gereedschap. Kosten: 60-100 euro per jaar.',
              },
            ].map(v => (
              <div key={v.titel} className="bg-[#E0F2FE] rounded-xl p-4">
                <p
                  className="font-semibold text-[#003F5C] mb-1 text-sm"
                  dangerouslySetInnerHTML={{ __html: v.titel }}
                />
                <p
                  className="text-xs text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: v.tekst }}
                />
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wilt u een heet water kraan met filter kopen? Lees dan de complete koopgids op de{' '}
            <Link href="/heet-water-kraan/kopen" className="text-[#005F8A] underline hover:no-underline">
              heet water kraan kopen pagina
            </Link>{' '}
            of vergelijk de PureAqua met andere merken op de{' '}
            <Link href="/heet-water-kraan/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              vergelijkingspagina
            </Link>.
          </p>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Onderhoudschema filter en boiler
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Regelmatig onderhoud houdt uw heet water systeem in optimale conditie en voorkomt
            smaakafwijkingen, bacteriegroei en apparaatschade. Hieronder het aanbevolen schema:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Actie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Frequentie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">DIY?</th>
                </tr>
              </thead>
              <tbody>
                {onderhoudSchema.map(o => (
                  <tr key={o.actie} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800 text-xs">{o.actie}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-600">{o.frequentie}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-[#005F8A] font-medium">{o.kosten}</td>
                    <td className="py-2.5 px-3 text-center text-sm">
                      {o.diyMogelijk ? (
                        <span className="text-green-700 font-bold">&#10003;</span>
                      ) : (
                        <span className="text-amber-600 text-xs">Technicus</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4 mt-4">
            <p className="font-semibold text-[#003F5C] mb-2 text-sm">Tip: osmosefilter verlengt levensduur boiler</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Bij gebruik van een osmosefilter voor de boiler is ontkalkingsbeurt nagenoeg niet meer
              nodig &mdash; het RO-membraan verwijdert 95-99% van calcium voor het water de boiler
              bereikt. Hierdoor gaat het verwarmingselement aanzienlijk langer mee (8-12 jaar in
              plaats van 5-7 jaar).
            </p>
          </div>
        </section>

        {/* CTA 2 */}
        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/heet-water-kraan',
                title: 'Heet water kraan: complete gids',
                desc: 'Alles over heet water kranen: types, installatie en gebruik.',
              },
              {
                href: '/heet-water-kraan/kopen',
                title: 'Heet water kraan kopen',
                desc: 'Criteria, prijsklassen en wanneer u voor een 4-in-1 kiest.',
              },
              {
                href: '/heet-water-kraan/vergelijken',
                title: 'Merken vergelijken',
                desc: 'Grohe Red, Quooker, InSinkErator en PureAqua naast elkaar.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Omgekeerde osmose kopen',
                desc: 'Losse osmose-unit als aanvulling op een bestaand heet water systeem.',
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
            Veelgestelde vragen over heet water kraan met filter
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    &#9662;
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
