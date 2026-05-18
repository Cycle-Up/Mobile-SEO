import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter per budget — wat kunt u verwachten voor EUR 50, EUR 200 en EUR 500+? | WaterfilterPlatform',
  description: 'Vergelijk waterfilters op budget: filterkan onder EUR 100, onderkastfilter EUR 100-500 en osmosefilter EUR 500+. Inclusief jaarlijkse kosten en kosten per.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keuzehulp/budget' },
  openGraph: {
    title: 'Waterfilter per budget — wat kunt u verwachten voor EUR 50, EUR 200 en EUR 500+?',
    description: 'Vergelijk waterfilters op budget: filterkan, onderkastfilter en osmosefilter. Inclusief jaarlijkse kosten en kosten per liter.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het goedkoopste waterfilter dat echt werkt?',
    answer: 'Een filterkan van Brita of ZeroWater (EUR 20-45) is de goedkoopste effectieve optie voor het verbeteren van chloor, smaak en sommige zware metalen. ZeroWater filtert bovendien TDS naar 000 ppm. De jaarlijkse filterkosten bedragen EUR 40-80. Nadelen zijn de beperkte capaciteit (1-3 liter) en het frequent verwisselen van filters.',
  },
  {
    question: 'Is een duurder waterfilter altijd beter?',
    answer: 'Niet per se. Een filterkan filtert chloor en smaak even goed als een osmosefilter van EUR 500. Het verschil zit in het filterspectrum: een osmosefilter verwijdert ook PFAS (95-99%), nitraat (85-95%), lood (95%+) en medicijnresten. Als uw leidingwater schoon is en u alleen smaakverbetering wenst, is een filterkan voldoende. Bij specifieke verontreinigingen of breed filterbehoefte is investeren zinvol.',
  },
  {
    question: 'Wat kost een osmosefilter per jaar inclusief alle kosten?',
    answer: 'Een osmosefilter kost EUR 300-900 bij aanschaf. De jaarlijkse kosten bestaan uit: sedimentfilter (EUR 10-20), pre-koolfilter (EUR 10-20), RO-membraan (EUR 20-60, elke 2-4 jaar), post-koolfilter (EUR 10-20). Totaal jaarlijks circa EUR 60-100. Bij 1500 liter drinkwater per jaar (gezin van 4) bedragen de kosten per liter circa 4-7 eurocent, inclusief afschrijving van het systeem.',
  },
  {
    question: 'Wat is de goedkoopste manier om PFAS uit water te verwijderen?',
    answer: 'De goedkoopste effectieve PFAS-filtering is een onderkastfilter met een geactiveerd koolblok (CTO) van hoge kwaliteit: EUR 80-150. Dit verwijdert PFAS voor 60-90%. Voor 95%+ PFAS-verwijdering is een osmosefilter de enige betrouwbare optie (EUR 300+). Een filterkan biedt geen significante PFAS-verwijdering.',
  },
  {
    question: 'Wanneer is een kokendwaterkraan de moeite waard qua kosten?',
    answer: 'Een kokendwaterkraan (EUR 500-2000) vervangt de waterkoker en levert direct 100 graden Celsius water. De break-even met een waterkoker ligt op 5-10 jaar, afhankelijk van het gebruik. Bij combinatiesystemen (osmose + kokend water in 1 apparaat, EUR 800-2500) zijn de totale kosten op 10 jaar vergelijkbaar met losse componenten, maar met slechts 1 installatie en 1 kraantje.',
  },
];

export default function BudgetPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Keuzehulp', item: 'https://waterfilterplatform.nl/keuzehulp' },
              { '@type': 'ListItem', position: 3, name: 'Budget', item: 'https://waterfilterplatform.nl/keuzehulp/budget' },
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
            headline: 'Waterfilter per budget — wat kunt u verwachten voor EUR 50, EUR 200 en EUR 500+?',
            description: 'Vergelijk waterfilters op budget: filterkan, onderkastfilter en osmosefilter. Inclusief jaarlijkse kosten en kosten per liter.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/keuzehulp/budget',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keuzehulp">Keuzehulp</Link> &rsaquo; Budget
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Waterfilter per budget — wat kunt u verwachten voor EUR 50, EUR 200 en EUR 500+?
          </h1>
          <QuickAnswer answer="Onder EUR 100 krijgt u een filterkan of eenvoudig aanrechtmodel dat chloor en smaak filtert. Tussen EUR 100-500 een onderkastfilter met betere capaciteit en kwaliteit. Boven EUR 500 een osmosefilter of kokendwaterkraan met de laagste kosten per liter op de lange termijn en breed filterspectrum inclusief PFAS." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Niveau 1: onder EUR 100 — filterkan en aanrechtmodel</h2>
          <p className="text-gray-700 mb-4">
            Het instapniveau voor waterfiltering biedt al een merkbare verbetering van smaak en geur, zonder installatie of verbouwing.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Filterkan (EUR 20-50)</h3>
          <p className="text-gray-700 mb-4">
            Filterkannen zoals de Brita Marella (EUR 25-35) en ZeroWater 10-Cup (EUR 40-50) zijn de meest verkochte waterfilters in Nederland. Ze werken met actief kool en/of ionenwisselingshars en verbeteren smaak, geur en verminderen chloor. ZeroWater filtert bovendien TDS naar 000 ppm door een vijflaags filtercartridge.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Voordelen:</strong> geen installatie, portable, lage aanschafprijs, direct beschikbaar</li>
            <li><strong>Nadelen:</strong> beperkte capaciteit (1-3 liter), filtervervanging elke 4-8 weken (EUR 5-15 per filter), filtert geen PFAS of nitraat volledig, risico op bacteriegroei bij te lang bewaren</li>
            <li><strong>Jaarlijkse filterkosten:</strong> EUR 40-80 (Brita) tot EUR 80-150 (ZeroWater bij hard water)</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2 mt-4">Aanrechtmodel zonder boring (EUR 50-90)</h3>
          <p className="text-gray-700 mb-4">
            Een aanrechtfilter wordt via een adapter op de bestaande kraan geschroefd. Geen installateur nodig, geen gaten boren. Geschikt voor huurders. De capaciteit is hoger dan een filterkan (3-10 liter per uur) en de filterlevensduur langer (3-6 maanden). Beperking: vermindert waterdruk en werkt niet op alle krantypen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Niveau 2: EUR 100-500 — onderkastfilter</h2>
          <p className="text-gray-700 mb-4">
            In dit prijssegment vindt u de beste prijs-kwaliteitverhouding voor de meeste huishoudens. Een professioneel geinstalleerd onderkastfilter biedt hogere capaciteit, betere filtratie en langere filterintervallen.
          </p>
          <p className="text-gray-700 mb-4">
            Onderkastfilters worden onder het aanrecht geplaatst met een eigen kleine kraan of via het bestaande kraanmengsel. Een installateur plaatst het systeem in 1-2 uur. Er zijn twee hoofdvarianten:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Actief kool onderkastfilter (EUR 80-200):</strong> verwijdert chloor, chloramine, organische stoffen, sommige zware metalen. Jaarlijkse filterkosten EUR 30-60. Geen PFAS of nitraat.</li>
            <li><strong>Ultrafiltratie onderkastfilter (EUR 150-350):</strong> verwijdert daarnaast bacterien, protozoa en grote virussen via een 0,01 micron membraan. Jaarlijkse kosten EUR 40-80. Geen opgeloste stoffen (PFAS, nitraat).</li>
          </ul>
          <p className="text-gray-700 mb-4">
            De totale kosten op 5 jaar (aanschaf + filters): EUR 300-600. Dit is voor de meeste huishoudens de verstandigste investering als er geen specifieke verontreinigingen zoals PFAS of hoog nitraat in het leidingwater zitten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Niveau 3: EUR 500+ — osmosefilter, kokendwaterkraan en 4-in-1</h2>
          <p className="text-gray-700 mb-4">
            Boven EUR 500 begint het segment van systemen met de laagste kosten per liter op de lange termijn en het breedste filterspectrum.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Osmosefilter (EUR 300-900)</h3>
          <p className="text-gray-700 mb-4">
            Een osmosefilter (RO) verwijdert 95-99% van alle opgeloste stoffen: PFAS, nitraat, lood, arseen, medicijnresten, kalk en bacterien. Het systeem bestaat uit een sedimentfilter, pre-koolfilter, RO-membraan en post-koolfilter. Jaarlijkse kosten: EUR 60-100. Op een 10-jarig gebruik bedraagt de totale kostprijs EUR 900-2000, wat neerkomt op 4-8 eurocent per liter.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2 mt-4">Kokendwaterkraan (EUR 500-2000)</h3>
          <p className="text-gray-700 mb-4">
            Een kokendwaterkraan levert direct kokend water (100 graden Celsius) via een apart kraantje. Merken als Quooker, GROHE Red en Franke. De boiler houdt water permanent op temperatuur, wat standby-energie kost (3-10 Wh per uur). Jaarlijkse elektriciteitskosten: EUR 30-90. Filters: EUR 30-60 per jaar.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2 mt-4">4-in-1 systeem: osmose + kokend (EUR 800-2500)</h3>
          <p className="text-gray-700 mb-4">
            Een 4-in-1 systeem combineert osmosefiltering met een kokendwaterboiler in één installatie. U heeft koud gefilterd water, koud kraanwater, warm water en kokend water via 1 kraantje. Goedkoper dan losse componenten en slechts 1 installatie nodig.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Kostenvergelijking: investering, onderhoud en kosten per liter</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Systeem</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Aanschaf</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Jaarlijks onderhoud</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Kosten/liter (10 jr)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Filtert PFAS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Filterkan</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 25-50</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 40-80</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 0,03-0,06</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Aanrechtmodel</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 50-90</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 30-60</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 0,02-0,05</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Onderkastfilter kool</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 100-250</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 30-60</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 0,02-0,04</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Gedeeltelijk</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 300-900</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 60-100</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 0,04-0,08</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (95-99%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">4-in-1 (osmose + kokend)</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 800-2500</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 80-150</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 0,06-0,12</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (95-99%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">Kosten per liter berekend op 1500 liter drinkwater per jaar voor een gezin van 4 personen.</p>
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
            <li><Link href="/filterkan" className="text-[#005F8A] hover:underline">Filterkan vergelijking — Brita, ZeroWater en meer</Link></li>
            <li><Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose: complete gids</Link></li>
            <li><Link href="/keuzehulp/installatie-type" className="text-[#005F8A] hover:underline">Welk installatietype past bij uw keuken?</Link></li>
            <li><Link href="/keuzehulp" className="text-[#005F8A] hover:underline">Terug naar keuzehulp overzicht</Link></li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief koolfilter: goedkoop en effectief</h3>
              <p className="text-sm text-gray-600">Hoe actief kool chloor en geur verwijdert en waarom het het meest betaalbare filtertype is.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/chloor-bijproducten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Wat zit er in kraanwater?</h3>
              <p className="text-sm text-gray-600">Overzicht van chloor en bijproducten in drinkwater: wat zijn de normen en risicos?</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
