import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'All-in-one waterfilter — osmose + kokend water + koolstoffilter in 1 systeem | WaterfilterPlatform',
  description: 'Een 4-in-1 systeem combineert RO-membraan, pre/post-koolfilter en kokendwaterboiler. 1 installatie, 1 kraantje. Prijsklasse EUR 800-2500.',
  alternates: { canonical: 'https://waterfilterplatform.nl/beste-waterfilter/all-in-one' },
  openGraph: {
    title: 'All-in-one waterfilter — osmose + kokend water + koolstoffilter in 1 systeem',
    description: 'Een 4-in-1 systeem combineert RO-membraan, pre/post-koolfilter en kokendwaterboiler. 1 installatie, 1 kraantje.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat doet een 4-in-1 watersysteem precies?',
    answer: 'Een 4-in-1 systeem levert via een enkel kraantje vier watertemperaturen: (1) gefilterd koud drinkwater via het osmosemembaan, (2) koud kraanwater zonder filtering, (3) warm water, en (4) kokend water direct op 100 graden Celsius. De filterketen bestaat uit een sedimentfilter, pre-koolstoffilter, RO-membraan en post-koolstoffilter. De geintegreerde boiler houdt een reservoir (1-3 liter) permanent op kooktemperatuur. Dit vervangt zowel de waterkoker als alle losse waterfilters.',
  },
  {
    question: 'Is een 4-in-1 systeem goedkoper dan losse componenten?',
    answer: 'Een osmosefilter kost EUR 300-800 en een separate kokendwaterkraan EUR 500-1200. Samen EUR 800-2000, plus twee installatiedagen en twee onderhoudssystemen. Een 4-in-1 systeem kost EUR 800-2500 maar heeft slechts 1 installatie (halve dag), 1 kraantje, 1 onderhoudscyclus en 1 leverancier. Op 5-10 jaar is de total cost of ownership vergelijkbaar, maar het gebruiksgemak is significant beter bij een gecombineerd systeem.',
  },
  {
    question: 'Hoeveel energie verbruikt een all-in-one systeem?',
    answer: 'Het energieverbruik zit voornamelijk in de kokendwaterboiler die water permanent op temperatuur houdt. Een typische boiler van 2,5 liter verbruikt 3-8 Wh per uur standby (73-192 Wh per dag, EUR 10-28 per jaar bij EUR 0,40/kWh). Energiezuinige modellen met betere isolatie of nachtmodus verbruiken 50-60% minder. Sommige systemen hebben een eco-stand die het water op 98 graden houdt in plaats van 100 om opwarmtijd te minimaliseren. De RO-pomp verbruikt 35-80 W maar draait slechts 20-40 minuten per dag.',
  },
  {
    question: 'Hoe lang gaat een 4-in-1 systeem mee?',
    answer: 'Het RO-membraan gaat 2-4 jaar mee (afhankelijk van waterkwaliteit en gebruik). Pre- en post-koolfilters worden jaarlijks vervangen (EUR 20-40 elk). De sedimentfilter wordt elke 6-12 maanden vervangen (EUR 5-15). De boiler en het mechanische systeem gaan bij goed onderhoud 10-15 jaar mee. Totale jaarlijkse filterkosten: EUR 80-150. Vergelijk dit met een Quooker (EUR 50-100/jaar service) plus een los osmosesysteem (EUR 60-100/jaar): gecombineerd EUR 110-200/jaar.',
  },
  {
    question: 'Kan ik een all-in-one systeem in een huurwoning installeren?',
    answer: 'Een 4-in-1 systeem vereist aansluiting op de koudwaterleiding, afvoer van concentraat naar de sifon, en een extra kraantje in het aanrecht (boorgat 35 mm). Dit is een permanente ingreep die toestemming van de verhuurder vereist. Bij vertrek kunt u het systeem meenemen en het boorgat afdichten. Voor huurwoningen zijn losse filterkannen of aanrechtmodellen eenvoudiger; een 4-in-1 is het meest geschikt voor koopwoningen.',
  },
];

export default function AllInOnePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Beste waterfilter', item: 'https://waterfilterplatform.nl/beste-waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'All-in-one', item: 'https://waterfilterplatform.nl/beste-waterfilter/all-in-one' },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
          {
            '@type': 'Article',
            headline: 'All-in-one waterfilter — osmose + kokend water + koolstoffilter in 1 systeem',
            description: 'Een 4-in-1 systeem combineert RO-membraan, pre/post-koolfilter en kokendwaterboiler. 1 installatie, 1 kraantje.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/beste-waterfilter/all-in-one',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/beste-waterfilter">Beste waterfilter</Link> &rsaquo; All-in-one
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            All-in-one waterfilter — osmose + kokend water + koolstoffilter in 1 systeem
          </h1>
          <QuickAnswer answer="Een 4-in-1 watersysteem combineert een volledig osmosefilter (PFAS, nitraat, bacterien) met een kokendwaterboiler in een compacte installatie onder het aanrecht. Via 1 kraantje heeft u gefilterd koud water, warm water en direct kokend water. Kostprijs EUR 800-2500, goedkoper en eenvoudiger dan een los osmosefilter (EUR 400-800) plus een aparte kokendwaterkraan (EUR 500-1200)." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat doet een 4-in-1 watersysteem?</h2>
          <p className="text-gray-700 mb-4">
            Een 4-in-1 systeem (ook wel all-in-one waterfilter of combinatiesysteem genoemd) is een geintegreerde installatie die alle functies van een osmosefilter en een kokendwaterkraan samenbrengt in een enkel apparaat onder het aanrecht met een enkel elegant kraantje.
          </p>
          <p className="text-gray-700 mb-4">
            De filterketen bestaat standaard uit:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 text-sm mb-4">
            <li><strong>Sedimentfilter (5 micron):</strong> verwijdert zand, slib en zwevende deeltjes</li>
            <li><strong>Pre-koolstoffilter (CTO):</strong> verwijdert chloor, chloramine en organische stoffen die het RO-membraan beschadigen</li>
            <li><strong>RO-membraan (0,0001 micron):</strong> verwijdert PFAS (95-99%), nitraat (85-95%), lood, bacterien, virussen, medicijnen en kalk</li>
            <li><strong>Post-koolstoffilter:</strong> verfijnt smaak en geur van het gefiltreerde water</li>
            <li><strong>Kokendwaterboiler:</strong> houdt 1,5-3 liter water permanent op 100 graden Celsius</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Via de combi-kraan heeft u: gefilterd koud drinkwater (via osmose), koud niet-gefilterd water (voor spoelen), warm water, en direct kokend water (via de boiler). U hoeft nooit meer te wachten op een waterkoker.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Voordelen ten opzichte van losse componenten</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 mb-2">Voordelen 4-in-1</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Slechts 1 installatie (halve dag)</li>
                <li>1 kraantje op het aanrecht</li>
                <li>1 onderhoudscyclus, 1 leverancier</li>
                <li>Minder leidingwerk, compacter</li>
                <li>Lagere totale installatiekosten</li>
                <li>Eenvoudiger filtervervanging</li>
              </ul>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 mb-2">Losse componenten</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Twee aparte installatiedagen</li>
                <li>Twee kraantjes (of meer) vereist</li>
                <li>Twee onderhoudssystemen</li>
                <li>Meer leidingwerk, meer ruimte</li>
                <li>Hogere totale installatiekosten</li>
                <li>Twee filterleveranciers</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Kostenvergelijking: 4-in-1 vs losse systemen</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Kostenpost</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">4-in-1 systeem</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Los osmose + kokend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Aanschaf apparatuur</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 800-2500</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 900-2000 (osmose + kraan)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Installatie</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 150-300 (halve dag)</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 300-600 (twee installaties)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Jaarlijks onderhoud</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 80-150</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 110-200 (twee systemen)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Totaal 10 jaar</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">EUR 1800-4300</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 2300-5600</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">Inclusief installatiekosten en jaarlijks onderhoud over 10 jaar.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Prijsklasse en aanbevelingen</h2>
          <p className="text-gray-700 mb-4">
            De markt voor 4-in-1 watersystemen is in Nederland groeiend. De prijsklasse loopt van EUR 800 voor instapmodellen tot EUR 2500 voor premium systemen met grotere boiler, stiller pompgeluid en uitgebreidere filtersets.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
            <li><strong>EUR 800-1200:</strong> Basismodellen met compacte boiler (1-1,5 liter), standaard RO-membraan, adequate filterketen voor gezin van 2-4 personen</li>
            <li><strong>EUR 1200-1800:</strong> Middenklasse met grotere boiler (2-3 liter), hogere RO-productiecapaciteit, betere pompstilheid, remineralisatiefilter inbegrepen</li>
            <li><strong>EUR 1800-2500:</strong> Premium systemen (PureAqua, Quooker Cube + osmose) met geintegreerd filtersysteem, app-bediening, uitgebreidere garantie</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003F5C] cursor-pointer">{item.question}</summary>
                <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose: complete gids</Link></li>
            <li><Link href="/kokend-water-kraan" className="text-[#005F8A] hover:underline">Kokend water kraan: vergelijking en advies</Link></li>
            <li><Link href="/4-in-1-kraan" className="text-[#005F8A] hover:underline">4-in-1 kraan: alles over combinatiesystemen</Link></li>
            <li><Link href="/beste-waterfilter" className="text-[#005F8A] hover:underline">Terug naar beste waterfilter overzicht</Link></li>
          </ul>
        </div>

        <CTABanner context="kokend" />
      </div>
    </>
  );
}
