import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosefilter Capaciteit: GPD, Liters & Juiste Keuze',
  description: 'Wat betekent 50 GPD of 100 GPD bij een osmosefilter? Werkelijke capaciteit in liters, temperatuureffect, tankloze systemen en berekening voor jouw huishouden.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-filter/capaciteit' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat betekent 50 GPD of 100 GPD bij een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GPD staat voor Gallons Per Day (gallons per dag). 1 US gallon = 3,785 liter. Een 50 GPD filter produceert theoretisch 50 × 3,785 = 189 liter per dag. Een 100 GPD filter produceert 378 liter per dag. Dit zijn maximale testwaarden bij 25°C en 4,1 bar waterdruk. Werkelijke productie bij Nederlandse omstandigheden (15°C, 3 bar) is 40–60% lager.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel liter osmosewater heb ik per dag nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drinkwater behoefte: rekent 2-3 liter per persoon per dag. Een gezin van 4 drinkt ca. 8-12 liter/dag. Voeg koffie en thee toe: +2-4 liter. Koken: +2-3 liter. Totaal voor een gezin van 4: 12-19 liter/dag. Een 50 GPD systeem met opvangvat van 8-12 liter is ruim voldoende voor de meeste gezinnen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is de werkelijke capaciteit lager dan de specificatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drie factoren verlagen de werkelijke productie: (1) Temperatuur: bij 15°C (winters kraanwater) daalt productie met ca. 35% versus 25°C testtemperatuur. (2) Waterdruk: bij 2,5 bar versus de test-4,1 bar verlies je 25-40% productie. (3) TDS: bij hoger TDS (harder water) werkt het membraan harder. Een 75 GPD filter produceert in de praktijk eerder 45-55 GPD in Nederland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen tankloze en systemen met opvangvat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Systemen met opvangvat (standaard): slaat 8-12 liter gefilterd water op zodat het direct beschikbaar is. Nadeel: het water staat soms uren/dagen in de tank. Tankloze (on-demand) systemen: produceren water direct bij gebruik, hogere GPD-waarden (150-800 GPD), geen stilstaand water. Tankloze systemen vereisen hogere waterdruk (4+ bar) en kosten meer.',
      },
    },
  ],
};

export default function OsmoseFilterCapaciteitPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Capaciteit', item: 'https://waterfilterplatform.nl/osmose-filter/capaciteit' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</a> &rsaquo;{' '}
          <span>Capaciteit</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmosefilter Capaciteit: GPD, Liters & Juiste Keuze
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          &ldquo;50 GPD&rdquo; of &ldquo;400 GPD&rdquo; — wat betekent dit in de praktijk? We vertalen filtercapaciteit naar liters per dag en helpen je de juiste maat kiezen voor jouw huishouden.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitgelegd</h3>
            <p className="text-sm text-gray-600">Hoe het RO-membraan werkt en waarom capaciteit zo'n belangrijke specificatie is.</p>
          </a>
          <a href="/omgekeerde-osmose/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter kopen</h3>
            <p className="text-sm text-gray-600">Welke capaciteit heeft u nodig? Vergelijk de beste osmosefilters van 2026.</p>
          </a>
          <a href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58 keurmerk</h3>
            <p className="text-sm text-gray-600">Wat betekent het NSF-keurmerk voor de filterprestaties van osmosefilters?</p>
          </a>
          <a href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter gids</h3>
            <p className="text-sm text-gray-600">Alles over omgekeerde osmose: werking, capaciteit, kosten en onderhoud.</p>
          </a>
        </div>
      </section>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          GPD naar liters: omrekeningstabel
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Specificatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Theoretisch (L/dag)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Praktisch NL (L/dag)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschikt voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">50 GPD</td>
                <td className="border border-gray-300 px-3 py-2">189 L</td>
                <td className="border border-gray-300 px-3 py-2">80–110 L</td>
                <td className="border border-gray-300 px-3 py-2">1–2 personen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">75 GPD</td>
                <td className="border border-gray-300 px-3 py-2">284 L</td>
                <td className="border border-gray-300 px-3 py-2">120–170 L</td>
                <td className="border border-gray-300 px-3 py-2">2–4 personen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">100 GPD</td>
                <td className="border border-gray-300 px-3 py-2">378 L</td>
                <td className="border border-gray-300 px-3 py-2">160–220 L</td>
                <td className="border border-gray-300 px-3 py-2">3–5 personen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">200 GPD</td>
                <td className="border border-gray-300 px-3 py-2">757 L</td>
                <td className="border border-gray-300 px-3 py-2">320–450 L</td>
                <td className="border border-gray-300 px-3 py-2">Groot gezin / kantoor</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">400 GPD+</td>
                <td className="border border-gray-300 px-3 py-2">1514+ L</td>
                <td className="border border-gray-300 px-3 py-2">650+ L</td>
                <td className="border border-gray-300 px-3 py-2">Commercieel gebruik</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-xs mb-6">
          Praktische waarden berekend op 15°C watertemperatuur en 3 bar waterdruk (typisch Nederland).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Factoren die de werkelijke productie bepalen
        </h2>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Watertemperatuur (-35% bij 15°C)</h3>
            <p className="text-gray-700 text-sm">Fabrikanten testen bij 25°C. Nederlands kraanwater is in de winter 10–13°C. Elke 1°C minder geeft ca. 3% productieverlies. Bij 15°C produceert een 50 GPD filter effectief slechts 30–35 GPD.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Waterdruk (-25% bij 2,5 bar)</h3>
            <p className="text-gray-700 text-sm">Testdruk is 60 PSI (4,1 bar). Nederlands leidingwater heeft doorgaans 2,5–4,5 bar. Bij lage druk (appartementen, einde leiding) kan een drukpomp nodig zijn voor optimale prestaties.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Membraanleeftijd (vervanging na 2–3 jaar)</h3>
            <p className="text-gray-700 text-sm">Een ouder membraan produceert minder en laat meer TDS door. Vervang het RO-membraan tijdig. Gebruik een TDS-meter om de filterprestaties te monitoren.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tankloos vs. systeem met opvangvat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Met opvangvat (klassiek)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Werkt bij normale waterdruk</li>
              <li>✓ Direct water beschikbaar</li>
              <li>✓ Lagere aanschafprijs</li>
              <li>✗ Stilstaand water in tank</li>
              <li>✗ Tank bezet ruimte onder aanrecht</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Tankloos (on-demand)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Altijd vers water, geen opslag</li>
              <li>✓ Compacter, minder ruimte</li>
              <li>✓ Hoge capaciteit (150–400+ GPD)</li>
              <li>✗ Vereist 4+ bar waterdruk</li>
              <li>✗ Hogere aanschafprijs</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Juiste capaciteit kiezen</h3>
          <p className="text-gray-700 mb-4">
            Voor de meeste Nederlandse gezinnen (2–4 personen) volstaat een 75–100 GPD systeem ruimschoots. Bekijk onze selectie met alle specificaties op een rij.
          </p>
          <a href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          Meer: <a href="/osmose-filter/installatie" className="text-[#005F8A] underline">installatie osmosefilter</a> of <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</a>.
        </p>
      </main>
    </>
  );
}
