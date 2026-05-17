import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Kokend water kraan merken vergelijking: Quooker vs Grohe vs Franke vs PureAqua',
  description:
    'Kokend water kraan merken vergelijking 2026: Quooker, Grohe Blue Pure, Franke Vital, PureAqua 4-in-1. Prijs, capaciteit, osmosefilter ingebouwd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/merken-vergelijking' },
  openGraph: {
    title: 'Kokend water kraan merken vergelijking: Quooker vs Grohe vs Franke vs PureAqua',
    description:
      'Kokend water kraan merken vergelijking 2026: Quooker, Grohe Blue Pure, Franke Vital, PureAqua 4-in-1. Prijs, capaciteit, osmosefilter ingebouwd.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Welk kokend water kraan merk is het beste voor dagelijks gebruik?',
    answer:
      'Voor dagelijks gebruik in een gemiddeld gezin is een 4-in-1 systeem zoals PureAqua de meest complete keuze: het combineert kokend, koud gefilterd, warm en bruisend water in een kraan met ingebouwd osmosefilter. Quooker scoort het hoogst op merkreputatie en premium afwerking, maar mist de osmosefiltering tenzij je een dure extra aanschaft.',
  },
  {
    question: 'Is Quooker beter dan Grohe Blue Pure?',
    answer:
      'Quooker levert echt 100 graden Celsius en heeft een grotere tankvariant beschikbaar. Grohe Blue Pure Instant is goedkoper en eenvoudiger zelf te installeren, maar levert maximaal 98 graden en filtert alleen via een koolstoffilter, geen osmose. Voor puur smaakneutraal water is Quooker zonder osmose ook geen echte winnaar.',
  },
  {
    question: 'Wat is het verschil tussen Franke Vital en Grohe Blue Pure?',
    answer:
      'Beide zijn in een vergelijkbare prijsklasse (rond 1.100-1.200 euro) en beide missen een omgekeerde-osmosefilter. Franke Vital is een Zwitsers merk met solide bouwkwaliteit en heeft ook een koolstoffilteroptie. Grohe Blue Pure is iets eenvoudiger te installeren. Geen van beide verwijdert PFAS, nitraat of zware metalen.',
  },
  {
    question: 'Welk merk heeft een ingebouwd osmosefilter in de kraan?',
    answer:
      'Van de vier grote merken is PureAqua de enige die standaard een omgekeerde-osmosefilter integreert in de kraan. Dit systeem filtert 95-99% van alle opgeloste stoffen, inclusief PFAS, lood, nitraat, kalk en chloor. Quooker, Grohe en Franke bieden geen RO-filter als onderdeel van hun standaard kokend water kraan.',
  },
  {
    question: 'Wat zijn de totale kosten van een Quooker over 5 jaar?',
    answer:
      'Een Quooker Fusion kost circa 1.800 euro inclusief installatie door een loodgieter. Tel daar jaarlijkse energiekosten (ongeveer 50 euro), eventuele CUBE-aanschaf voor bruisend water (250-400 euro extra) en CO2-cilinders bij. Over 5 jaar zit je al snel op 2.300 tot 2.600 euro totaal. Een PureAqua 4-in-1 systeem is inclusief alle filterkosten over 5 jaar ruwweg 900 euro goedkoper.',
  },
  {
    question: 'Waarom is een osmosefilter in de kraan belangrijk?',
    answer:
      'Zonder osmosefilter verwijdert een kokend water kraan geen chemische verontreinigingen zoals PFAS, nitraat, hormonen, zware metalen of pesticides. Koolstoffilters verbeteren de smaak maar bieden geen volledige bescherming. Een RO-membraan filtert 95-99% van alle opgeloste deeltjes. Bovendien voorkomt osmosewater kalkaanslag in de boilertank, wat de levensduur van de kraan verlengt.',
  },
  {
    question: 'Kan ik een Quooker zelf installeren?',
    answer:
      'Quooker adviseert installatie door een erkend loodgieter. De aansluitingen zijn technisch niet overdreven complex, maar de garantie vervalt bij zelf-installatie. Reken op 150 tot 300 euro installatiekosten bovenop de aanschafprijs. PureAqua en in beperkte mate Grohe Blue Pure zijn ontworpen voor doe-het-zelf installatie met push-fit aansluitingen.',
  },
  {
    question: 'Hoe lang gaan de filters van een kokend water kraan mee?',
    answer:
      'Bij een PureAqua 4-in-1 met osmose vervang je het pre-filter en postfilter eenmaal per jaar (circa 50-70 euro per set). Het RO-membraan gaat 2-3 jaar mee. Bij Grohe Blue Pure wissel je het koolstoffilterpatroon elke 6-12 maanden. Quooker zonder filter heeft geen filterwissel nodig, maar ontkalking is bij hard water wel regelmatig vereist.',
  },
];

const merkenData = [
  {
    merk: 'Quooker',
    model: 'Fusion',
    prijs: '~1.800',
    kokend: 'Ja (100°C)',
    osmose: 'Nee',
    koudGefilterd: 'Nee',
    installatie: 'Loodgieter',
    highlight: false,
  },
  {
    merk: 'Grohe',
    model: 'Blue Pure Instant',
    prijs: '~1.200',
    kokend: 'Ja (tot 98°C)',
    osmose: 'Nee',
    koudGefilterd: 'Koolfilter',
    installatie: 'Zelf',
    highlight: false,
  },
  {
    merk: 'Franke',
    model: 'Vital',
    prijs: '~1.100',
    kokend: 'Ja',
    osmose: 'Nee',
    koudGefilterd: 'Koolfilter',
    installatie: 'Loodgieter',
    highlight: false,
  },
  {
    merk: 'PureAqua',
    model: '4-in-1',
    prijs: '~2.200',
    kokend: 'Ja (100°C)',
    osmose: 'Ja (RO)',
    koudGefilterd: 'Ja (gefilterd koud)',
    installatie: 'Loodgieter',
    highlight: true,
  },
];

const tcoData = [
  { post: 'Aanschaf + installatie', pureaqua: '~2.200', quooker: '~1.800', grohe: '~1.200', franke: '~1.100' },
  { post: 'Energie 5 jaar (EUR 50/jr)', pureaqua: '250', quooker: '250', grohe: '200', franke: '200' },
  { post: 'Filterkosten 5 jaar', pureaqua: '~300', quooker: '0', grohe: '~200', franke: '~150' },
  { post: 'Onderhoud / ontkalking', pureaqua: 'Minimaal', quooker: 'Jaarlijks', grohe: 'Jaarlijks', franke: 'Jaarlijks' },
  { post: 'Totaal 5 jaar (indicatief)', pureaqua: '~2.750', quooker: '~2.300', grohe: '~1.600', franke: '~1.450' },
];

export default function MerkenVergelijkingPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Merken vergelijking', url: 'https://waterfilterplatform.nl/kokend-water-kraan/merken-vergelijking' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kokend water kraan merken vergelijking: Quooker vs Grohe vs Franke vs PureAqua',
          description:
            'Kokend water kraan merken vergelijking 2026: Quooker, Grohe Blue Pure, Franke Vital, PureAqua 4-in-1. Prijs, capaciteit, osmosefilter ingebouwd.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/kokend-water-kraan/merken-vergelijking',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Merken vergelijking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan merken vergelijking: Quooker, Grohe, Franke, PureAqua
          </h1>
          <QuickAnswer answer="De vier grote merken kokend water kranen zijn Quooker, Grohe Blue Pure, Franke Vital en PureAqua. Quooker is marktleider maar heeft geen ingebouwd osmosefilter. PureAqua combineert als enige kokend water met omgekeerde osmosefiltratie in een 4-in-1 systeem, wat het uniek maakt." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="kokend" />

        {/* Inleiding */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom merken vergelijken?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De markt voor kokend water kranen is de afgelopen jaren flink gegroeid. Naast de bekende pionier Quooker zijn er nu meerdere serieuze alternatieven beschikbaar, elk met eigen sterktes en zwaktes. De keuze gaat niet alleen over prijs: het gaat ook over filterkwaliteit, gebruiksgemak, installatiegemak en de totale eigendomskosten over 5 jaar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In deze vergelijking leggen we de vier grootste merken op de Nederlandse markt naast elkaar: <strong>Quooker</strong> (marktleider), <strong>Grohe Blue Pure Instant</strong>, <strong>Franke Vital</strong> en <strong>PureAqua 4-in-1</strong>. We kijken naar prijs, kokend water capaciteit, aanwezigheid van een osmosefilter, koud gefilterd water en installatiegemak.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer achtergrond over hoe kokend water kranen werken, vind je op de{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline hover:no-underline">
              hoofdpagina kokend water kraan
            </Link>
            . Wil je direct een osmosefilter kopen of vergelijken, ga dan naar{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose kopen
            </Link>
            .
          </p>
        </section>

        {/* Vergelijkingstabel */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijkingstabel: de 4 grote merken</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-3 px-4 font-semibold">Merk</th>
                  <th className="py-3 px-3 font-semibold text-center">Model</th>
                  <th className="py-3 px-3 font-semibold text-center">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-center">Kokend water</th>
                  <th className="py-3 px-3 font-semibold text-center">Osmosefilter</th>
                  <th className="py-3 px-3 font-semibold text-center">Koud gefilterd</th>
                  <th className="py-3 px-3 font-semibold text-center">Installatie</th>
                </tr>
              </thead>
              <tbody>
                {merkenData.map((rij, i) => (
                  <tr
                    key={rij.merk}
                    className={`border-b border-gray-100 ${rij.highlight ? 'bg-[#E0F2FE]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-3 px-4 font-semibold text-[#003F5C]">
                      {rij.merk}
                      {rij.highlight && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full">
                          Aanbevolen
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-center text-gray-700">{rij.model}</td>
                    <td className="py-3 px-3 text-center text-gray-700">EUR {rij.prijs}</td>
                    <td className="py-3 px-3 text-center text-gray-700">{rij.kokend}</td>
                    <td className={`py-3 px-3 text-center font-semibold ${rij.osmose.startsWith('Ja') ? 'text-green-700' : 'text-red-500'}`}>
                      {rij.osmose}
                    </td>
                    <td className="py-3 px-3 text-center text-gray-700">{rij.koudGefilterd}</td>
                    <td className="py-3 px-3 text-center text-gray-700">{rij.installatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Prijzen zijn richtprijzen inclusief installatie (loodgieter), peildatum mei 2026.
          </p>
        </section>

        {/* Quooker */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Quooker Fusion: marktleider met premium prijskaartje</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Quooker is in Nederland het bekendste merk voor kokend water kranen. Het bedrijf is Nederlands en domineert de markt al decennialang. De Quooker Fusion is het meest verkochte model: een 3-in-1 of 4-in-1 kraan (met CUBE voor bruisend water) die kokend, koud en warm water levert via een elegant ontworpen kraanpunt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De sterke punten van Quooker zijn de merkreputatie, de stille gepatenteerde tank, de uitstekende afwerking en het uitgebreide servicenetwerk in Nederland. De boiler is vacuumgesoleerd en houdt water op 108 graden Celsius onder lichte overdruk, zodat er bij het aftappen exact 100 graden uitkomt. Er is een dubbele veiligheidsvergrendeling (push-and-twist) en een kindslot.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het cruciale nadeel van Quooker: er zit <strong>geen osmosefilter</strong> in. De CUBE-eenheid die bruisend water levert, gebruikt alleen een koolstoffilter en CO2. Wie puur, PFAS-vrij of kalkarm drinkwater wil, moet een separate osmose-installatie aanschaffen bovenop de Quooker. Dat maakt het systeem duurder en complexer dan het op het eerste gezicht lijkt.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 my-4">
            <p className="text-sm text-gray-700">
              <strong>Let op:</strong> Quooker biedt de mogelijkheid om een apart osmosefilter toe te voegen, maar dit is een losstaand systeem dat extra ruimte en kosten vraagt. Het is geen geintegreeerd onderdeel van de standaard Quooker-kraan.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Prijs Quooker Fusion (inclusief loodgieter): circa 1.800 euro. Met CUBE voor bruisend water kom je uit op 2.200 tot 2.800 euro. Garantie: 2 jaar standaard, uitbreidbaar tegen betaling.
          </p>
        </section>

        {/* Grohe */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Grohe Blue Pure Instant: betaalbaar en zelf te installeren</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Grohe is een Duits sanitairmerk met een sterke reputatie in de keuken- en badkamermarkt. De Blue Pure Instant is hun antwoord op de kokend water kraan: een systeem dat direct heet water levert (tot 98 graden Celsius) gecombineerd met een geintegreerd koolstoffilter voor beter smakend kraanwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het grote voordeel van Grohe Blue Pure is de prijs (circa 1.200 euro inclusief installatie) en het feit dat de installatie relatief eenvoudig is. Grohe levert 5 jaar garantie, wat meer is dan Quooker standaard biedt. De koolstoffilter verbetert de smaak van het water en verwijdert chloor en geur, maar filtert geen zware metalen, PFAS of nitraat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Het nadeel: Grohe Blue Pure levert maximaal 98 graden, niet de echte 100 graden. Voor de meeste toepassingen maakt dat nauwelijks uit, maar voor specialty koffie of blancheren kan het een rol spelen. Er is geen osmosefilter beschikbaar als standaardoptie. Wie zuiver water wil, is met Grohe Blue Pure dus niet volledig geholpen.
          </p>
        </section>

        {/* Franke */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Franke Vital: Zwitserse kwaliteit, vergelijkbare beperkingen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Franke is een Zwitsers merk dat bekend staat om hoogwaardige keukenproducten, spoelbakken en keukenkranen. De Franke Vital is hun kokend water kraan: een elegant systeem dat beschikbaar is in meerdere afwerkingen en goed integreert met Franke-spoelbakken.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Qua filterfunctionaliteit zit Franke Vital op hetzelfde niveau als Grohe Blue Pure: er is een koolstoffilteroptie beschikbaar, maar geen omgekeerde osmose. De prijs ligt rond de 1.100 euro inclusief installatie door een loodgieter. De bouwkwaliteit wordt door gebruikers als solide en duurzaam ervaren, en Franke heeft een uitgebreid servicenetwerk in Europa.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Franke Vital is een goede keuze voor wie al een Franke keuken heeft en een stijlvolle integratie zoekt. Voor mensen die filterkwaliteit prioriteit geven of PFAS-vrij water willen, biedt Franke Vital dezelfde beperkingen als Quooker en Grohe: geen osmosefiltratie in het systeem.
          </p>
        </section>

        {/* PureAqua */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PureAqua 4-in-1: de enige met omgekeerde osmose ingebouwd</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PureAqua onderscheidt zich fundamenteel van de drie andere merken: het is de enige kokend water kraan op de Nederlandse markt die standaard een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">omgekeerde osmosefilter</Link> integreert. Het systeem levert kokend water (100 graden), koud gefilterd water via RO, warm water en bruisend water, allemaal vanuit een enkel kraanpunt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het RO-membraan filtert 95-99% van alle opgeloste stoffen: kalk, chloor, PFAS, lood, nitraat, hormonen, microplastics en pesticides worden vrijwel volledig verwijderd. Dit betekent dat het water uit de PureAqua smaakneutraal, zacht en chemisch zo puur mogelijk is. Bovendien beschermt het osmosewater de boilertank tegen kalkaanslag, wat de levensduur van de installatie aanzienlijk verlengt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanschafprijs van circa 2.200 euro (inclusief installatie) is hoger dan Quooker Fusion, maar de totale eigendomskosten over 5 jaar zijn vergelijkbaar of lager zodra je de filterkosten en de bruisend-water-opties van Quooker meerekent. Zie de TCO-tabel hieronder voor een concreet overzicht.
          </p>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/30 rounded-2xl p-5 my-4">
            <p className="font-bold text-[#003F5C] mb-2">Waarom PureAqua uniek is:</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              {[
                'Enige merk met RO-osmosefilter standaard ingebouwd in de kraan',
                'Verwijdert PFAS, lood, nitraat, hormonen en microplastics',
                'Kokend water levert echte 100 graden Celsius',
                'Beschermt de boilertank tegen kalkaanslag',
                'Bruisend water inbegrepen zonder aparte CUBE of CO2-unit',
                'Totale 5-jaars kosten vergelijkbaar met Quooker ondanks hogere aanschaf',
              ].map((punt) => (
                <li key={punt} className="flex items-start gap-2">
                  <span className="text-[#005F8A] font-bold mt-0.5">+</span>
                  <span>{punt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Waarom osmose belangrijk */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom is een osmosefilter in de kraan belangrijk?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederlandse drinkwaterbedrijven leveren veilig leidingwater, maar dat betekent niet dat het water perfect is. PFAS (eeuwigdurende chemicalien) worden steeds vaker aangetroffen in oppervlaktewater en grondwater. Nitraat uit de landbouw, hormoonresten uit medicijngebruik en microplastics vanuit plastic leidingen zijn stuk voor stuk aantoonbaar in leidingwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een koolstoffilter (zoals in Grohe en Franke) verbetert de smaak en verwijdert chloor. Dat is nuttig, maar het verwijdert geen opgeloste zouten, geen nitraat, geen PFAS en geen zware metalen. Een <strong>omgekeerde osmosefilter</strong> werkt op cellulair niveau: het membraan heeft porieen van 0,0001 micrometer, zo klein dat zelfs individuele ionen het niet passeren. Dit is de enige consumentenmethode die aantoonbaar PFAS en lood voor 95-99% verwijdert.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de boilertank van een kokend water kraan geldt nog een praktisch voordeel: osmosewater bevat nauwelijks kalk (TDS minder dan 30 mg/L). Kalk is de grootste vijand van kokend water kranen: het vormt aanslag in de tank, verlaagt het rendement en verkort de levensduur. In gebieden met hard water (zoals Noord-Holland, Limburg en Brabant) kan kalkaanslag in een onbeschermde tank een serieus probleem worden al na een paar jaar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer weten over omgekeerde osmose?{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              Lees de complete uitleg over omgekeerde osmose
            </Link>
            {' '}of bekijk direct onze{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              koopgids voor een osmosefilter
            </Link>
            .
          </p>
        </section>

        {/* TCO */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Total cost of ownership over 5 jaar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanschafprijs is slechts een deel van het verhaal. Hieronder een overzicht van de totale eigendomskosten over 5 jaar voor alle vier de merken. We nemen een gemiddeld gezinshuishouden als uitgangspunt.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-4 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">PureAqua</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Quooker</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Grohe</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Franke</th>
                </tr>
              </thead>
              <tbody>
                {tcoData.map((rij, i) => (
                  <tr
                    key={rij.post}
                    className={`border-b border-gray-100 ${i === tcoData.length - 1 ? 'font-semibold bg-gray-50' : ''}`}
                  >
                    <td className="py-2.5 px-4 text-gray-700">{rij.post}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.pureaqua}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.quooker}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.grohe}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.franke}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Indicatieve bedragen, gebaseerd op gemiddeld gebruik (2-4 personen) en prijzen mei 2026. PureAqua inclusief osmosefiltervervanging; Quooker exclusief CUBE (bruisend) die 250-400 euro extra kost.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Grohe en Franke scoren het laagst op totale kosten door de lagere aanschafprijs, maar leveren ook de minste filterfunctionaliteit. PureAqua heeft de hoogste aanschafprijs maar voegt de meeste waarde toe qua waterkwaliteit. Quooker zit qua totaalkosten hoger dan zijn aanschafprijs doet vermoeden door de hogere onderhoudskosten en optionele bruisend-water-unit.
          </p>
        </section>

        {/* Wanneer welk merk */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je welk merk?</h2>
          <div className="space-y-4">
            {[
              {
                merk: 'Kies Quooker als...',
                kleur: 'border-gray-300 bg-gray-50',
                punten: [
                  'Merknaam en premium uitstraling voor jou zwaar wegen',
                  'Je een ruim budget hebt en waterkwaliteit minder prioriteit heeft',
                  'Je al een loodgieter inhuurt voor de keukenrenovatie',
                  'Je uitsluitend cocend water nodig hebt zonder filtereis',
                ],
              },
              {
                merk: 'Kies Grohe Blue Pure als...',
                kleur: 'border-gray-300 bg-gray-50',
                punten: [
                  'Budget de belangrijkste factor is (circa 1.200 euro all-in)',
                  'Je zelf wilt installeren zonder loodgieter',
                  'Je tevreden bent met een koolstoffilter voor basisfiltering',
                  'Je 98 graden accepteert als voldoende temperatuur',
                ],
              },
              {
                merk: 'Kies Franke Vital als...',
                kleur: 'border-gray-300 bg-gray-50',
                punten: [
                  'Je al een Franke keuken of spoelbak hebt en stijleenheid zoekt',
                  'Zwitserse kwaliteit en duurzaamheid voor jou doorslaggevend zijn',
                  'Je een koolstoffilter als voldoende waterzuivering beschouwt',
                ],
              },
              {
                merk: 'Kies PureAqua 4-in-1 als...',
                kleur: 'border-[#005F8A] bg-[#E0F2FE]',
                punten: [
                  'Waterkwaliteit je hoogste prioriteit is (PFAS, lood, nitraat)',
                  'Je een compleet systeem wilt: kokend + RO + koud gefilterd + bruisend',
                  'Je in een gebied met hard water woont en kalkaanslag wilt voorkomen',
                  'Je de totale 5-jaars kosten wilt vergelijken in plaats van alleen aanschafprijs',
                  'Je een gecombineerde oplossing zoekt zonder losse osmose-installatie',
                ],
              },
            ].map((blok) => (
              <div key={blok.merk} className={`border-2 rounded-xl p-5 ${blok.kleur}`}>
                <p className="font-bold text-[#003F5C] mb-2">{blok.merk}</p>
                <ul className="space-y-1.5">
                  {blok.punten.map((punt) => (
                    <li key={punt} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#005F8A] font-bold mt-0.5">-</span>
                      <span>{punt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: kokend water kraan merken
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        {/* Interne links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen: koopgids 2026' },
              { href: '/waterfilter', label: 'Waterfilter vergelijken' },
              { href: '/kokend-water-kraan/kopen', label: 'Kokend water kraan kopen' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kokend water kraan met filter' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>-&gt;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
