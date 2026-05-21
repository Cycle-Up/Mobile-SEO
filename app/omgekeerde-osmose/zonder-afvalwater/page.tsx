import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosefilter zonder afvalwater: permeate pump systemen | 2026',
  description:
    'Hoe werken osmose systemen zonder afvalwater? Uitleg over permeaatpomp en gesloten-kring systemen, efficiëntievergelijking met traditioneel RO (50% afval).',
  alternates: {
    canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/zonder-afvalwater',
  },
  openGraph: {
    title: 'Osmosefilter zonder afvalwater: permeate pump systemen uitgelegd',
    description:
      'Alles over zero-waste RO-systemen: permeaatpomp, gesloten kring, efficiëntie en kosten vergeleken met klassieke osmosefilters.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose/zonder-afvalwater',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoeveel water verspilt een klassiek osmosefilter?',
    answer:
      'Een klassiek RO-systeem zonder pomp produceert 3 tot 5 liter afvalwater (concentraat) per liter gefilterd water — een verhouding van 3:1 tot 5:1. Dat betekent dat circa 75–83% van het ingenomen leidingwater als concentraat naar de afvoer gaat. Met een permeaatpomp zakt dit naar 1:1 of beter.',
  },
  {
    question: 'Wat is een permeaatpomp precies?',
    answer:
      'Een permeaatpomp is een hydraulisch aangedreven pomp die de druk op de afvalwaterzijde van het RO-membraan verhoogt. Door het drukverval te compenseren, werkt het membraan efficiënter en wordt meer water als productwater gewonnen en minder weggespoeld. De pomp heeft geen stroom nodig — hij wordt aangedreven door de waterdruk zelf.',
  },
  {
    question: 'Is een zero-waste osmosefilter echt 100% efficiënt?',
    answer:
      'De term "zero-waste" is een marketingterm. Echte gesloten-kring systemen kunnen tot 95%+ recovery halen, maar de meeste consumentensystemen met permeaatpomp halen 50–75% recovery. Puur 100% zonder enig concentraat is technisch niet haalbaar bij polyamide membranen, omdat een minimale spoelstroom nodig is om het membraan schoon te houden.',
  },
  {
    question: 'Wat kost een permeaatpomp systeem extra ten opzichte van gewoon RO?',
    answer:
      'Een permeaatpomp kost als accessoire €40–€80. Systemen die al een permeaatpomp inbouwen kosten doorgaans €50–€150 meer dan de basisversie. De terugverdientijd via waterbesparingen hangt af van je verbruik en waterprijzen, maar ligt typisch op 3–6 jaar.',
  },
  {
    question: 'Zijn er nadelen aan een permeaatpomp systeem?',
    answer:
      'De voornaamste nadelen zijn: (1) hogere aanschafprijs, (2) de pomp voegt een extra component toe dat onderhoud of vervanging kan vragen, (3) bij lage waterdruk (onder 2,5 bar) werkt de permeaatpomp minder effectief. Systemen met een elektrische boosterpomp zijn dan een beter alternatief.',
  },
  {
    question: 'Wanneer is een zero-waste RO-systeem de moeite waard?',
    answer:
      'Een zero-waste systeem is extra zinvol als je veel drinkwater filtert (4+ personen), in een regio woont met droogteproblemen, bewust omgaat met waterverbruik of hoge waterrekeningen wil vermijden. Voor een alleenstaande of klein huishouden dat minder dan 3 liter per dag filtert, is de meerwaarde kleiner.',
  },
  {
    question: 'Kan ik een permeaatpomp toevoegen aan mijn bestaande osmosefilter?',
    answer:
      'In de meeste gevallen ja — zolang het systeem een aparte afvoerleiding heeft. De pomp wordt ingelast op de afvoerleiding na het RO-membraan. Let op compatibiliteit met het merk en model van je systeem. Sommige fabrikanten bieden een upgrade-kit aan.',
  },
];

const vergelijkingData = [
  {
    eigenschap: 'Afvalwater per liter product',
    klassiek: '3–5 liter (75–83%)',
    permeaatpomp: '0,5–1 liter (33–50%)',
    zeroClosed: '< 0,1 liter (< 10%)',
  },
  {
    eigenschap: 'Recovery rate',
    klassiek: '17–25%',
    permeaatpomp: '50–75%',
    zeroClosed: '90–95%+',
  },
  {
    eigenschap: 'Stroomverbruik',
    klassiek: '0 W (zwaartekracht)',
    permeaatpomp: '0 W (hydraulisch)',
    zeroClosed: '20–50 W (elektrisch)',
  },
  {
    eigenschap: 'Extra aanschafkosten',
    klassiek: '€ 0',
    permeaatpomp: '€ 40–150',
    zeroClosed: '€ 100–300',
  },
  {
    eigenschap: 'Waterdruk nodig',
    klassiek: '2–6 bar',
    permeaatpomp: '2,5–6 bar',
    zeroClosed: '1–4 bar (pomp compenseert)',
  },
  {
    eigenschap: 'Onderhoudscomplexiteit',
    klassiek: 'Laag',
    permeaatpomp: 'Laag-matig',
    zeroClosed: 'Matig',
  },
  {
    eigenschap: 'Waterbesparende claim',
    klassiek: 'Nee',
    permeaatpomp: '50–67% minder afval',
    zeroClosed: 'Tot 95% minder afval',
  },
];

export default function ZonderAfvalwaterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmosefilter zonder afvalwater: permeate pump systemen uitgelegd',
          description:
            'Uitleg over zero-waste RO-systemen met permeaatpomp of gesloten kring: hoe werken ze, hoeveel water besparen ze, wat kosten ze en wanneer is een zero-waste.',
          datePublished: '2025-10-15',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/omgekeerde-osmose/zonder-afvalwater',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          {
            name: 'Omgekeerde osmose',
            url: 'https://waterfilterplatform.nl/omgekeerde-osmose',
          },
          {
            name: 'Zonder afvalwater',
            url: 'https://waterfilterplatform.nl/omgekeerde-osmose/zonder-afvalwater',
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">
              Omgekeerde osmose
            </Link>
            <span className="mx-2">/</span>
            <span>Zonder afvalwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosefilter zonder afvalwater: permeate pump systemen
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Het grootste bezwaar tegen omgekeerde osmose is afvalwater: klassieke systemen verspillen
            drie tot vijf liter per liter gefilterd water. Moderne permeaatpomp- en
            gesloten-kringsystemen lossen dit grotendeels op. In deze gids leggen we uit hoe ze
            werken, hoeveel ze besparen en wat ze kosten.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Efficiënt osmosefilter kopen →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Terug naar omgekeerde osmose
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li>
              <a href="#probleem" className="hover:underline">
                Het afvalwaterprobleem
              </a>
            </li>
            <li>
              <a href="#permeaatpomp" className="hover:underline">
                Hoe werkt een permeaatpomp?
              </a>
            </li>
            <li>
              <a href="#gesloten-kring" className="hover:underline">
                Gesloten-kring systemen
              </a>
            </li>
            <li>
              <a href="#vergelijking" className="hover:underline">
                Efficiëntievergelijking
              </a>
            </li>
            <li>
              <a href="#kosten" className="hover:underline">
                Kosten en terugverdientijd
              </a>
            </li>
            <li>
              <a href="#wanneer-zinvol" className="hover:underline">
                Wanneer zero-waste zinvol is
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                Veelgestelde vragen
              </a>
            </li>
          </ol>
        </section>

        {/* Het afvalwaterprobleem */}
        <section id="probleem">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Het afvalwaterprobleem bij klassieke RO
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Omgekeerde osmose werkt door water onder druk door een semipermeabel membraan te persen.
            Alleen zuiver water passeert het membraan; de afgevangen stoffen blijven achter in een
            geconcentreerde stroom die naar de afvoer gaat. Dit <strong>concentraat</strong> — ook
            wel spoelwater of afvalwater genoemd — is het meest gehoorde bezwaar.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-4">
            <p className="font-semibold text-amber-900 mb-2">De getallen bij klassieke RO</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <strong>Recovery rate:</strong> 17–25% (van elke 4 liter in, komt 1 liter
                drinkwater uit)
              </li>
              <li>
                <strong>Afvalverhouding:</strong> 3:1 tot 5:1 (3–5 liter afval per liter product)
              </li>
              <li>
                <strong>Jaarlijks afval:</strong> bij 5 liter/dag verbruik circa 5.500–9.125 liter
                extra spoelwater
              </li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Het &ldquo;afvalwater&rdquo; is overigens niet vies — het is gewoon geconcentreerd
            leidingwater. Je kunt het gebruiken voor planten, schoonmaken of doorspoelen van het
            toilet. Maar wie het echt wil minimaliseren, kiest voor een efficiënter systeem.
          </p>
        </section>

        {/* Permeaatpomp */}
        <section id="permeaatpomp">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe werkt een permeaatpomp?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een permeaatpomp is een <strong>hydraulisch aangedreven</strong> apparaatje dat zonder
            stroom de efficiëntie van het RO-membraan drastisch verbetert. Het werkt op basis van
            het drukverschil in het systeem zelf.
          </p>
          <div className="space-y-4 mb-4">
            {[
              {
                stap: '1',
                titel: 'Concentraatdruk benutten',
                tekst:
                  'Bij klassieke RO verlaat het concentraat het membraan nog onder hoge druk — die energie gaat verloren. De permeaatpomp benut deze restdruk om de productiezijde te ondersteunen.',
              },
              {
                stap: '2',
                titel: 'Tegendruk in drukvat verlagen',
                tekst:
                  'In een klassiek systeem bouwt het drukvat tegendruk op naarmate het volloopt, waardoor het membraan minder efficiënt filtert. De permeaatpomp neutraliseert deze tegendruk.',
              },
              {
                stap: '3',
                titel: 'Hogere recovery rate',
                tekst:
                  'Door beide effecten samen stijgt de recovery rate van 17–25% naar 50–75%. Per liter productwater gaat nog maar 0,5–1 liter naar de afvoer.',
              },
            ].map(s => (
              <div key={s.stap} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.stap}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Geen stroom nodig:</strong> een permeaatpomp heeft
            geen elektrische aansluiting nodig. De waterdruk van het leidingnet drijft hem aan. Dit
            maakt hem eenvoudig te installeren en betrouwbaar.
          </div>
        </section>

        {/* Gesloten-kring systemen */}
        <section id="gesloten-kring">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Gesloten-kring systemen: echte zero-waste RO
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor wie écht bijna geen water wil verliezen, zijn er <strong>gesloten-kring systemen</strong>{' '}
            (Engels: <em>closed-loop</em> of <em>zero liquid discharge</em>). Deze systemen voeren
            het concentraat terug door het systeem in plaats van direct af te voeren.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ze werken als volgt: concentraat wordt opgeslagen in een kleine buffer en in kleine
            porties terug gemengd met het inkomende leidingwater. Zo wordt elke molecule water
            meerdere keren aangeboden aan het membraan totdat het gefilterd is of de
            zoutconcentratie te hoog wordt. Recovery rates van 90–95% zijn haalbaar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-sm mb-2">Voordelen</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Recovery rate 90–95%+</li>
                <li>✓ Nauwelijks afvalwater</li>
                <li>✓ Ideaal bij waterbesparingsdoelen</li>
                <li>✓ Geschikt voor lage ingangsdruk (elektrische pomp)</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="font-semibold text-amber-800 text-sm mb-2">Nadelen</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✗ Elektrische boosterpomp nodig (20–50 W)</li>
                <li>✗ Complexer systeem, meer onderhoud</li>
                <li>✗ Hogere aanschafprijs (€100–300 meer)</li>
                <li>✗ Risico op mineralenophoping bij hard water</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Bij zeer hard water (boven 20 °dH) moet het systeem vaker flushen om scaling van het
            membraan te voorkomen. In zachte watergebieden presteren gesloten-kring systemen het best.
          </p>
        </section>

        {/* Efficiëntievergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Efficiëntievergelijking: klassiek vs permeaatpomp vs gesloten kring
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel vergelijkt de drie systeemtypen op de meest relevante parameters.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Eigenschap</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Klassiek RO</th>
                  <th className="py-2.5 px-3 font-semibold text-center bg-[#005F8A]">
                    Permeaatpomp
                  </th>
                  <th className="py-2.5 px-3 font-semibold text-center">Gesloten kring</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingData.map((r, i) => (
                  <tr key={r.eigenschap} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.eigenschap}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.klassiek}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] bg-[#E0F2FE]">
                      {r.permeaatpomp}
                    </td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.zeroClosed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Waarden zijn typische consumentenspecificaties. Werkelijke prestaties hangen af van
            waterdruk, temperatuur, membraankwaliteit en onderhoudsconditie.
          </p>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Kosten en terugverdientijd
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Is de meerprijs voor een efficiënter systeem de investering waard? Dat hangt af van je
            drinkwaterverbruik en de waterprijs in jouw regio.
          </p>
          <div className="bg-gray-50 rounded-2xl p-5 mb-4">
            <p className="font-semibold text-[#003F5C] mb-3">Rekenvoorbeeld voor een gezin van 4</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <strong>Drinkwater via RO:</strong> 5 liter/dag × 365 = 1.825 liter/jaar
              </li>
              <li>
                <strong>Klassiek RO (4:1 verhouding):</strong> 1.825 × 4 = 7.300 liter afval/jaar
              </li>
              <li>
                <strong>Permeaatpomp (1:1 verhouding):</strong> 1.825 × 1 = 1.825 liter afval/jaar
              </li>
              <li>
                <strong>Besparing in water:</strong> 5.475 liter/jaar
              </li>
              <li>
                <strong>Besparing in geld</strong> (€1,40/m³): circa <strong>€7,67/jaar</strong>
              </li>
              <li>
                <strong>Terugverdientijd permeaatpomp (€70):</strong> circa 9 jaar
              </li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Puur financieel is de terugverdientijd relatief lang. De echte waarde van een
            permeaatpomp zit eerder in bewust duurzaam watergebruik dan in directe kostenbesparing.
            Grotere gezinnen of kantoorgebruikers met hoog verbruik (10+ liter/dag) verdienen de
            investering sneller terug.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Systeem</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">
                    Meerprijs
                  </th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">
                    Waterbesparing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Permeaatpomp (accessoire)</td>
                  <td className="py-2.5 px-3 text-right">€ 40–80</td>
                  <td className="py-2.5 px-3 text-right">50–67%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Systeem met geïntegreerde permeaatpomp</td>
                  <td className="py-2.5 px-3 text-right">€ 50–150</td>
                  <td className="py-2.5 px-3 text-right">50–75%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Gesloten-kring systeem</td>
                  <td className="py-2.5 px-3 text-right">€ 100–300</td>
                  <td className="py-2.5 px-3 text-right">90–95%+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Wanneer zero-waste zinvol is */}
        <section id="wanneer-zinvol">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een zero-waste systeem zinvol?
          </h2>
          <div className="space-y-3">
            {[
              {
                titel: 'Groot huishouden met hoog verbruik',
                tekst:
                  'Bij 4+ personen die allemaal osmose water drinken, koken en koffie zetten, kan het verbruik oplopen tot 10–15 liter/dag. De waterbesparing wordt dan substantieel.',
                zinvol: true,
              },
              {
                titel: 'Duurzame leefstijl / waterbesparingsdoelen',
                tekst:
                  'Als bewust watergebruik een prioriteit is — los van financiën — is een permeaatpomp of gesloten-kring systeem een logische keuze.',
                zinvol: true,
              },
              {
                titel: 'Zachte waterregio (< 10 °dH)',
                tekst:
                  'In zachte watergebieden werkt een gesloten-kring systeem het best: minder scaling-risico op het membraan door gerecirculeerd water.',
                zinvol: true,
              },
              {
                titel: 'Alleenstaande of klein huishouden',
                tekst:
                  'Bij minder dan 3 liter/dag verbruik is de absolute waterbesparing en financiële meerwaarde beperkt. Een basismodel volstaat.',
                zinvol: false,
              },
              {
                titel: 'Zeer hard water (> 20 °dH)',
                tekst:
                  'Gesloten-kring systemen houden meer mineralen in circulatie, wat scaling versnelt. Hier presteren permeaatpomp-systemen beter dan gesloten-kring.',
                zinvol: false,
              },
            ].map(s => (
              <div
                key={s.titel}
                className={`border rounded-xl p-4 ${s.zinvol ? 'border-green-100 bg-green-50' : 'border-amber-100 bg-amber-50'}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-bold ${s.zinvol ? 'text-green-600' : 'text-amber-600'}`}>
                    {s.zinvol ? '✓' : '△'}
                  </span>
                  <p className="font-semibold text-gray-900 text-sm">{s.titel}</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-6">{s.tekst}</p>
              </div>
            ))}
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/omgekeerde-osmose/afvalwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Afvalwater bij omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoeveel afvalwater produceert een osmosesysteem en hoe kunt u dit hergebruiken?</p>
          </Link>
          <Link href="/omgekeerde-osmose/rendement" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Rendement van osmosefilters</h3>
            <p className="text-sm text-gray-600">Hoe efficient is uw osmosesysteem en hoe kunt u het rendement verbeteren?</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechniek omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">De techniek achter RO-filtratie uitgelegd voor consumenten.</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose overzicht</h3>
            <p className="text-sm text-gray-600">Alles over omgekeerde osmose: werking, kosten, installatie en onderhoud.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Verdere links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'Vergelijk de beste RO-systemen inclusief modellen met permeaatpomp.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose gids',
                desc: 'Alles over hoe RO werkt, wat het verwijdert en wat het kost.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Is je water zacht of hard? Zoek het op voor betere systeemkeuze.',
              },
              {
                href: '/waterfilter/keuken-installatie',
                title: 'Keuken installatie gids',
                desc: 'Stap-voor-stap gids voor het installeren van een osmose systeem.',
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
            Veelgestelde vragen over osmosefilter zonder afvalwater
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
