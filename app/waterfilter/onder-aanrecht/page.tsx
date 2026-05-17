import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter onder aanrecht: types, installatie en prijzen | 2026',
  description:
    'Alles over waterfilters onder aanrecht: carbon block, RO, UV-combinaties, benodigde ruimte, dedicated tap vs omleidingsventiel en prijzen €150–1500.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/onder-aanrecht' },
  openGraph: {
    title: 'Waterfilter onder aanrecht: types, installatie en prijzen',
    description:
      'Welk under-sink waterfilter past bij jou? Van carbon block tot RO+UV combinaties, installatietips en prijsvergelijking €150–1500.',
    url: 'https://waterfilterplatform.nl/waterfilter/onder-aanrecht',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is een waterfilter onder aanrecht precies?',
    answer:
      'Een under-sink waterfilter is een filtersysteem dat in de kast onder het aanrecht wordt gemonteerd, op de koudwaterleiding. Het gefilterde water komt via een aparte kraan op het aanrecht of via de bestaande mengkraan (omleidingsventiel). Omdat het systeem verborgen zit, is er geen visuele overlast op het werkblad.',
  },
  {
    question: 'Wat is het verschil tussen een carbon block filter en omgekeerde osmose?',
    answer:
      'Een carbon block filter (actieve koolstof) verwijdert chloor, geurstoffen en een deel van de organische verbindingen, maar laat opgeloste zouten, nitraten, pesticiden en zware metalen grotendeels door. Omgekeerde osmose gaat veel verder en verwijdert 95–99% van vrijwel alle opgeloste stoffen op moleculair niveau. RO-systemen zijn duurder en hebben een lagere doorstroom.',
  },
  {
    question: 'Hoe veel ruimte heb ik nodig onder het aanrecht?',
    answer:
      'Een eenvoudig carbon block filter neemt nauwelijks ruimte in: een cilindervormig patroon van circa 10–15 cm diameter en 25 cm hoogte. Een volledig 4-staps RO-systeem met drukvat heeft meer ruimte nodig: reken op een kast van minimaal 40 cm diep, 30 cm breed en 50 cm hoog. Een compacter systeem zonder drukvat (met pompdruk) past in een smallere kast.',
  },
  {
    question: 'Heb ik een extra kraan nodig voor een under-sink filter?',
    answer:
      'Dat hangt af van het type systeem. Een RO-systeem levert langzaam water en vereist altijd een aparte kraan of een geïntegreerde kraan met eigen aftappunt. Bij een carbon block inline-filter kun je kiezen: een apart aftapkraantje boren of een omleidingsventiel op de bestaande mengkraan. Dat laatste is de makkelijkste installatie maar vergt een kompatibele kraan.',
  },
  {
    question: 'Kan ik een under-sink filter zelf installeren?',
    answer:
      'Een eenvoudig inline carbon block filter is een typisch doe-het-zelf klusje (15–30 minuten). Een volledig RO-systeem vergt wat meer: aanboorkraan monteren, gat in het aanrecht boren voor de extra kraan en afvoer aansluiten. De meeste huishoudens lukt dit in 60–90 minuten. Bij een kokendwaterkraan met RO is vanwege de elektrische aansluiting een installateur aan te raden.',
  },
  {
    question: 'Hoe lang gaan under-sink filters mee?',
    answer:
      'Carbon block patronen gaan 6–12 maanden. Een RO-membraan gaat 2–3 jaar. UV-lampen hebben gemiddeld een levensduur van 8.000–12.000 branduren (circa 1 jaar bij normaal gebruik). De behuizingen en leidingen gaan decennialang mee — alleen de verbruikspatronen worden periodiek vervangen.',
  },
  {
    question: 'Wat kost een waterfilter onder aanrecht per jaar aan onderhoud?',
    answer:
      'Een eenvoudig koolstoffilter kost €20–60 per jaar aan filterpatronen. Een volledig RO-systeem inclusief alle filters kost €60–150 per jaar. Een UV-lamp als aanvulling voegt €30–60 per jaar toe aan lamp vervanging. De totale jaarkosten voor een goed RO-systeem liggen dus op €60–150, afhankelijk van waterverbruik en waterkwaliteit.',
  },
  {
    question: 'Werkt een under-sink filter ook voor warm water?',
    answer:
      'Nee, de meeste under-sink filters zijn uitsluitend bedoeld voor koud water. RO-membranen en koolstoffilters hebben een maximale watertemperatuur van 30–40 °C. UV-ontsmetting werkt het beste bij koud, helder water. Voor warm gefilterd water heb je een speciaal systeem nodig, zoals een geïntegreerde kokendwaterkraan met warmwatertank.',
  },
];

const filtertypes = [
  {
    type: 'Carbon block (enkel)',
    prijs: '€ 30–150',
    verwijdering: 'Chloor, geur, smaak',
    onderhoud: '6–12 maanden',
    ruimte: 'Klein',
    highlight: false,
  },
  {
    type: 'Meerfasig koolstof',
    prijs: '€ 100–300',
    verwijdering: '+ organische verbindingen',
    onderhoud: '6–12 maanden',
    ruimte: 'Gemiddeld',
    highlight: false,
  },
  {
    type: 'Omgekeerde osmose (RO)',
    prijs: '€ 150–500',
    verwijdering: '95–99% van alle stoffen',
    onderhoud: 'Jaarlijks',
    ruimte: 'Gemiddeld–groot',
    highlight: true,
  },
  {
    type: 'RO + UV-desinfectie',
    prijs: '€ 300–700',
    verwijdering: 'RO + bacteriën/virussen',
    onderhoud: 'Jaarlijks + UV-lamp',
    ruimte: 'Groot',
    highlight: false,
  },
  {
    type: 'RO + kokend water (4-in-1)',
    prijs: '€ 700–1.500',
    verwijdering: 'RO + kokend/warm water',
    onderhoud: 'Jaarlijks (alles-in-1)',
    ruimte: 'Gemiddeld',
    highlight: false,
  },
];

export default function WaterfilterOnderAanrechtPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter onder aanrecht: types, installatie en prijzen',
          description:
            'Overzicht van alle under-sink filtertypes van carbon block tot RO en UV, installatietips en prijsvergelijking €150–1500.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterfilter/onder-aanrecht',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Onder aanrecht', url: 'https://waterfilterplatform.nl/waterfilter/onder-aanrecht' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Onder aanrecht</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter onder aanrecht: types en installatie
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een under-sink waterfilter filtert onzichtbaar en stilletjes onder het aanrecht.
            Van een eenvoudig carbon block filter tot een volledig RO-systeem met UV-bestraling
            of geïntegreerde kokendwaterkraan — in dit overzicht leggen we alle types uit,
            vergelijken we prijzen (€150–€1.500) en geven we praktische installatietips.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk de beste systemen →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Wat is omgekeerde osmose?
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#types" className="hover:underline">Typen under-sink filters</a></li>
            <li><a href="#ruimte" className="hover:underline">Benodigde ruimte</a></li>
            <li><a href="#kraan" className="hover:underline">Dedicated tap vs omleidingsventiel</a></li>
            <li><a href="#installatie" className="hover:underline">Installatie stap voor stap</a></li>
            <li><a href="#prijs" className="hover:underline">Prijsoverzicht €150–€1.500</a></li>
            <li><a href="#top-picks" className="hover:underline">Top picks</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Types */}
        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Typen under-sink waterfilters</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De term &ldquo;waterfilter onder aanrecht&rdquo; dekt een breed spectrum van systemen.
            Hieronder een overzicht van de vijf meest voorkomende types, van eenvoudig naar uitgebreid.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Verwijdert</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Onderhoud</th>
                </tr>
              </thead>
              <tbody>
                {filtertypes.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{r.verwijdering}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{r.onderhoud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Gemarkeerde rij = beste prijs-kwaliteitverhouding voor de meeste huishoudens.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                titel: 'Carbon block filter',
                tekst: 'De meest basale optie: een patroon met gecomprimeerde actieve koolstof verwijdert chloor, chloramine, geurstoffen en een deel van sediment. Eenvoudig te installeren inline op de koudwaterleiding. Ideaal als je primair de chloorsmaak wilt verwijderen zonder grote investering.',
              },
              {
                titel: 'Meerfasig koolstoffilter',
                tekst: 'Combineert sediment- en koolstoffiltratie in meerdere stappen. Verbeterd contact met het actieve koolstof via langere verblijftijd. Verwijdert ook een deel van de organische micropollutanten. Goed voor mensen die de smaak willen verbeteren zonder RO.',
              },
              {
                titel: 'Omgekeerde osmose (RO)',
                tekst: 'Het meest complete systeem voor huishoudelijk gebruik. Vier of vijf filterstappen verwijderen 95–99% van alle opgeloste stoffen inclusief nitraten, pesticiden, PFAS, zware metalen en microplastics. Vereist een apart kraaantje of drukvat. De gouden standaard voor drinkwaterkwaliteit.',
              },
              {
                titel: 'RO + UV-desinfectie',
                tekst: 'Combineert de chemische filtratie van RO met ultraviolet licht dat bacteriën en virussen inactiveert. Nuttig in gebieden met incidentele microbiologische verontreinigingen of na lange stilstand van de waterleiding. UV-lamp jaarlijks vervangen.',
              },
              {
                titel: 'RO + kokend water (4-in-1)',
                tekst: 'De meest complete oplossing: een geïntegreerd systeem dat osmose filtratie combineert met een kokend-, warm- en koudwatertank. Één kraan op het aanrecht vervangt de reguliere mengkraan en levert altijd gefilterd water op de gewenste temperatuur. Meer info op de 4-in-1 kraan pagina.',
              },
            ].map(v => (
              <div key={v.titel} className="border-l-4 border-[#005F8A] pl-4">
                <p className="font-semibold text-gray-900 mb-1">{v.titel}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{v.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ruimte */}
        <section id="ruimte">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Benodigde ruimte onder het aanrecht</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ruimtegebrek is de meest gehoorde reden om af te zien van een under-sink filter.
            In de praktijk valt het mee — de meeste systemen zijn compacter dan gedacht.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                naam: 'Inline carbon filter',
                afmeting: '∅ 12 cm × 25 cm',
                opmerking: 'Past in elke keukenkast',
              },
              {
                naam: 'RO systeem (4-staps)',
                afmeting: '∅ 30 cm × 50 cm',
                opmerking: 'Standaard onderkast geschikt',
              },
              {
                naam: 'RO + drukvat',
                afmeting: '+ ∅ 25 cm drukvat',
                opmerking: 'Let op vrije hoogte (≥ 45 cm)',
              },
            ].map(r => (
              <div key={r.naam} className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="font-semibold text-[#003F5C] text-sm">{r.naam}</p>
                <p className="text-lg font-bold text-[#005F8A] mt-1">{r.afmeting}</p>
                <p className="text-xs text-gray-500 mt-1">{r.opmerking}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Moderne compacte RO-systemen zonder drukvat (met ingebouwde pompdruk) passen in een
            kast van 30 × 30 × 40 cm. Als drukvatvervanger zorgt een kleine boosterspomp voor
            directe levering zonder wachten. Handig als de kast erg smal is.
          </p>
        </section>

        {/* Kraan */}
        <section id="kraan">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Dedicated tap vs omleidingsventiel</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er zijn twee manieren om gefilterd water aan de keuken af te tappen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#E0F2FE] rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Dedicated tap (aparte kraan)</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Aparte kraan naast de bestaande mengkraan</li>
                <li>Vereist het boren van een gat in het aanrecht (∅ 35–38 mm)</li>
                <li>Werkt altijd samen met RO-systemen</li>
                <li>Geeft duidelijk onderscheid: gefilterd vs normaal water</li>
                <li>Meest professionele uitstraling</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-2">Omleidingsventiel (diverter)</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Splitter op de bestaande mengkraan</li>
                <li>Geen gat boren nodig</li>
                <li>Geschikt voor eenvoudige koolstoffilters</li>
                <li>Minder geschikt voor RO (lage druk na splitter)</li>
                <li>Zichtbaar op het aanrecht</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor een RO-systeem is een dedicated tap altijd de voorkeur. Omleidingsventielen
            werken prima voor inline koolstoffilters maar kunnen bij RO-systemen voor
            drukproblemen zorgen doordat het aanwezige filter extra weerstand geeft.
          </p>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie: stap voor stap</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een RO-systeem onder het aanrecht installeren is een haalbare klus voor de gemiddelde
            doe-het-zelver. Reken op 60–90 minuten.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Water afsluiten',
                desc: 'Sluit de koudwaterafsluiter onder het aanrecht of de hoofdafsluiter. Open de bestaande kraan om restdruk af te voeren.',
              },
              {
                nr: '2',
                titel: 'Aanboorkraan monteren',
                desc: 'Monteer een saddle valve (aanboorkraan) op de koude toevoerleiding. Deze maakt een kleine boring en geeft de watertoevoer naar het filter. Controleer op lekkage na het aandraaien.',
              },
              {
                nr: '3',
                titel: 'Gat boren voor de extra kraan',
                desc: 'Boor een gat van 35–38 mm in het aanrecht of in de wastafelrand. Gebruik een gatzaag met koolstofpunt voor graniet of keramiek en werk langzaam met koelwater.',
              },
              {
                nr: '4',
                titel: 'Systeem aansluiten',
                desc: 'Verbind de toevoer vanuit de aanboorkraan, de afvoer naar het sifon en het drukvat (indien aanwezig) via de bijgeleverde snelkoppelingen. Kleurcodes: blauw = toevoer, rood = afvoer, geel = gefilterd water naar kraan.',
              },
              {
                nr: '5',
                titel: 'Eerste spoeling',
                desc: 'Zet het water aan en laat 5–10 liter doorlopen om het membraan te activeren en eventuele fabrieksresten te verwijderen. Gooi dit water weg.',
              },
              {
                nr: '6',
                titel: 'TDS meten en controleren',
                desc: 'Meet het TDS van het ingaande leidingwater en het gefilterde water. Een goed werkend RO-systeem reduceert TDS met 90–95%. Controleer alle aansluitingen op lekkage.',
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
        </section>

        {/* Prijs */}
        <section id="prijs">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Prijsoverzicht: €150–€1.500</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het budget bepaalt grotendeels welk type systeem haalbaar is. Hieronder een realistische
            prijsverdeling per categorie, inclusief installatiekosten.
          </p>
          <div className="space-y-3">
            {[
              { range: '€ 30–150', type: 'Eenvoudig carbon block filter', toelichting: 'Verwijdert chloor en smaak. Eenvoudige doe-het-zelf installatie. Geen extra kraan nodig bij diverter.' },
              { range: '€ 150–300', type: 'Basisniveau RO-systeem', toelichting: 'Volledig 4-staps RO, simpele dedicated tap, drukvat. Goede keuze voor de budgetbewuste koper.' },
              { range: '€ 300–500', type: 'Mid-range RO met boosterpomp', toelichting: 'Hogere productiecapaciteit, efficiëntere membranen, minder spoelwater. Ideaal voor gezinnen.' },
              { range: '€ 500–800', type: 'RO + UV of premium merk', toelichting: 'UV-lamp voor extra microbiologische zekerheid, betere behuizing, langere garantie.' },
              { range: '€ 800–1.500', type: 'Geïntegreerde 4-in-1 kraan + RO', toelichting: 'Kokend, warm, koud en gefilterd uit één kraan. Inclusief boiler, RO-systeem en designkraan.' },
            ].map(r => (
              <div key={r.range} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <div className="bg-[#E0F2FE] rounded-lg px-3 py-1.5 text-[#003F5C] font-bold text-sm shrink-0 min-w-[90px] text-center">
                  {r.range}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.type}</p>
                  <p className="text-sm text-gray-500">{r.toelichting}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top picks */}
        <section id="top-picks">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Top picks voor 2026</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Op basis van onafhankelijke gebruikerservaringen, membraankwaliteit en serviceniveau
            zijn dit de meest aanbevolen systemen in Nederland.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                naam: '4-in-1 kraan met osmose',
                prijsklasse: '€ 799–1.299',
                voor: 'Gezinnen die alles-in-één willen',
                pros: 'Kokend + RO + warm + koud, één jaarlijkse filterwissel, strak design',
                href: '/kokend-water-kraan/4-in-1',
              },
              {
                naam: 'Budget 4-staps RO under-sink',
                prijsklasse: '€ 150–250',
                voor: 'Kostenbewuste kopers',
                pros: 'Betaalbaar, eenvoudig te installeren, goed membraan, TDS-meter inbegrepen',
                href: '/omgekeerde-osmose/kopen',
              },
            ].map(p => (
              <div key={p.naam} className="border border-[#005F8A] rounded-2xl p-5">
                <p className="font-bold text-[#003F5C] mb-1">{p.naam}</p>
                <p className="text-[#005F8A] font-semibold text-sm mb-2">{p.prijsklasse}</p>
                <p className="text-xs text-gray-500 mb-1"><strong>Beste voor:</strong> {p.voor}</p>
                <p className="text-xs text-gray-600 mb-3">{p.pros}</p>
                <Link
                  href={p.href}
                  className="inline-block bg-[#005F8A] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#003F5C] transition-colors"
                >
                  Meer info →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'Onafhankelijke vergelijking van de beste RO-systemen voor under-sink installatie.',
              },
              {
                href: '/kokend-water-kraan/4-in-1',
                title: '4-in-1 kokend water kraan',
                desc: 'Koud, warm, heet en kokend water gecombineerd met RO-filtratie.',
              },
              {
                href: '/omgekeerde-osmose/membraan',
                title: 'RO membraan levensduur',
                desc: 'Wanneer vervang je het membraan? Kosten en merkvergelijking.',
              },
              {
                href: '/waterfilter',
                title: 'Alle waterfilter types',
                desc: 'Van filterkan tot under-sink RO: alle opties vergeleken.',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterfilter onder aanrecht</h2>
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
