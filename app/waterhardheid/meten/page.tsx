import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterhardheid Meten: Teststrips, TDS-meter & Lab',
  description: 'Waterhardheid meten thuis: teststrips (°dH), TDS-meter, druppeltest of laboratoriumanalyse. Wat is een betrouwbare meting en wat zeggen de resultaten?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterhardheid/meten' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe meet ik de waterhardheid thuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest toegankelijke methoden: (1) Hardheid-teststrips: dip in water, vergelijk kleur met schaal — geeft °dH in 5 seconden voor €10–20 per 50 strips. (2) Druppeltest kit: nauwkeuriger, geeft exacte °dH of mg/L CaCO3. (3) TDS-meter: meet totaal opgeloste stoffen (mg/L), niet exact waterhardheid maar geeft een indicatie. (4) Laboratoriumanalyse: meest nauwkeurig, onderscheidt calcium en magnesium apart.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat betekent een TDS-waarde voor waterhardheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDS (Total Dissolved Solids) meet alle opgeloste stoffen samen — niet alleen kalk. In Nederlands leidingwater bestaat TDS voor 60–80% uit calcium en magnesium (hardheid). Een TDS van 300 mg/L correspondeert ruwweg met een hardheid van 15–20 °dH. Voor een exacte hardheidswaarde gebruik je een specifieke hardheid-teststrip of druppeltest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de hardheidszones in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zacht water (0–7 °dH): Groningen, Drenthe, Friesland, Noord-Holland kust. Matig hard (7–14 °dH): Utrecht, Gelderland, Zeeland. Hard water (14–21 °dH): Noord-Brabant, Limburg, Overijssel. Zeer hard (boven 21 °dH): sommige delen van Limburg en Brabant. Controleer je lokale waterbedrijf voor exacte waarden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is een laboratoriumanalyse nodig voor waterhardheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een laboratoriumanalyse is zinvol als je een privéput gebruikt (onduidelijke hardheid), bij selectie van een waterontharder (exacte calcium/magnesium verhouding nodig), of bij twijfel over andere parameters (nitraat, lood, bacteriën). Een volledige analyse kost €80–150 en geeft een volledig overzicht van je waterkwaliteit.',
      },
    },
  ],
};

export default function WaterhardheidMetenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterhardheid', item: 'https://waterfilterplatform.nl/waterhardheid' },
              { '@type': 'ListItem', position: 3, name: 'Meten', item: 'https://waterfilterplatform.nl/waterhardheid/meten' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterhardheid" className="hover:underline">Waterhardheid</a> &rsaquo;{' '}
          <span>Meten</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterhardheid Meten: Methoden Vergeleken
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Weten hoe hard jouw water is, is de eerste stap naar de juiste waterbehandelingsoplossing. Van goedkope teststrips tot uitgebreide laboratoriumanalyse — hier lees je welke methode het meest nauwkeurig en geschikt is voor jouw situatie.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid eenheden uitgelegd
        </h2>
        <p className="text-gray-700 mb-4">
          Waterhardheid wordt uitgedrukt in meerdere eenheden, afhankelijk van het land en de toepassing:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eenheid</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Symbool</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Omrekening</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Gebruikt in</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Duitse graden</td>
                <td className="border border-gray-300 px-3 py-2">°dH</td>
                <td className="border border-gray-300 px-3 py-2">1 °dH = 10 mg/L CaO</td>
                <td className="border border-gray-300 px-3 py-2">NL, DE, AT</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">mg/L CaCO₃</td>
                <td className="border border-gray-300 px-3 py-2">ppm</td>
                <td className="border border-gray-300 px-3 py-2">17,85 ppm = 1 °dH</td>
                <td className="border border-gray-300 px-3 py-2">International, VS</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">mmol/L</td>
                <td className="border border-gray-300 px-3 py-2">—</td>
                <td className="border border-gray-300 px-3 py-2">0,179 mmol/L = 1 °dH</td>
                <td className="border border-gray-300 px-3 py-2">Lab, EU-richtlijnen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Franse graden</td>
                <td className="border border-gray-300 px-3 py-2">°f</td>
                <td className="border border-gray-300 px-3 py-2">1,786 °f = 1 °dH</td>
                <td className="border border-gray-300 px-3 py-2">FR, BE</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Meetmethoden vergelijking
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">1. Teststrips (€0,10–0,40 per strip)</h3>
        <p className="text-gray-700 mb-4">
          Hardheid-teststrips zijn de snelste methode. Dip de strip 1 seconde in leidingwater, schud droog en vergelijk de kleur na 60 seconden met de meegeleverde kleurschaal. Nauwkeurigheid: ±2–3 °dH. Prima als oriëntatie — niet geschikt voor exacte instellingen van een waterontharder.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">2. Druppeltest kit (€15–30)</h3>
        <p className="text-gray-700 mb-4">
          Een druppeltest geeft nauwkeurigere resultaten (±0,5–1 °dH). Je vult een monsterpotje met kraanwater en voegt druppelsgewijs een reagentia toe. Het aantal druppels bij kleurverandering × een factor = de hardheid. Geschikt voor het instellen van een waterontharder.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">3. TDS-meter (€10–30)</h3>
        <p className="text-gray-700 mb-4">
          Een TDS-meter meet de elektrische geleidbaarheid van water en berekent het totaal opgeloste stoffen. In leidingwater correspondeert TDS ruwweg met hardheid, maar de relatie is niet nauwkeurig: een hoog natriumgehalte verhoogt TDS zonder de hardheid te beïnvloeden.
        </p>
        <p className="text-gray-700 mb-4">
          TDS-meters zijn erg nuttig voor het monitoren van een osmosefilter (TDS-reductie controleren) maar zijn geen vervanging voor een echte hardheidsmeting.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">4. Laboratoriumanalyse (€80–150)</h3>
        <p className="text-gray-700 mb-4">
          Voor de meest nauwkeurige en complete meting. Een gecertificeerd wateranalyse-laboratorium meet calcium en magnesium apart (totale hardheid, maar ook calcium-hardheid vs. magnesium-hardheid), plus alle andere relevante parameters.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Interpretatie: wat betekent jouw hardheidsmeting?
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Hardheid</th>
                <th className="border border-gray-300 px-3 py-2 text-left">°dH</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kalkschaal</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Advies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Zacht</td>
                <td className="border border-gray-300 px-3 py-2">0–7</td>
                <td className="border border-gray-300 px-3 py-2">Minimaal</td>
                <td className="border border-gray-300 px-3 py-2">Geen behandeling nodig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Matig hard</td>
                <td className="border border-gray-300 px-3 py-2">7–14</td>
                <td className="border border-gray-300 px-3 py-2">Zichtbaar bij koker</td>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter voor drinkwater</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Hard</td>
                <td className="border border-gray-300 px-3 py-2">14–21</td>
                <td className="border border-gray-300 px-3 py-2">Duidelijk</td>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter + waterontharder</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Zeer hard</td>
                <td className="border border-gray-300 px-3 py-2">&gt;21</td>
                <td className="border border-gray-300 px-3 py-2">Ernstig</td>
                <td className="border border-gray-300 px-3 py-2">Dringend waterontharder + RO</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Bekijk ook <a href="/waterhardheid/kaart" className="text-[#005F8A] underline">waterhardheid per gemeente</a> of <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilters voor hard water</a>.
        </p>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Calcium, magnesium en carbonaathardheid: effecten op gezondheid en apparatuur.</p>
            </Link>
          </div>
        </section>

        <CTABanner />
      </main>
    </>
  );
}
