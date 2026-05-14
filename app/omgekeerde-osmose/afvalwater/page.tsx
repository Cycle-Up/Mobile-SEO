import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import SchemaOrg from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosefilter Afvalwater: Hoeveel & Hergebruiken',
  description: 'Een osmosefilter produceert afvalwater: hoeveel is normaal (3-4L per liter drinkwater), hoe moderne systemen dit halveren en hoe je afvalwater hergebruikt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/afvalwater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel afvalwater produceert een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard osmosefilter produceert 3–4 liter concentraat (afvalwater) per 1 liter drinkwater. Dit geeft een efficiëntie van 20–25%. Moderne systemen met waterbesparende technologie (permeaat-pompen, recirculatiesystemen) halen 33–50% efficiëntie: 1–2 liter afvalwater per 1 liter drinkwater. Tankloze high-flow systemen (400+ GPD) kunnen tot 1:1 ratio bereiken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom produceert een osmosefilter afvalwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het RO-membraan scheidt water in twee stromen: permeaat (gezuiverd water) en concentraat (verontreinigd afvalwater). Het concentraat is nodig om het membraan te spoelen en verzameling van mineralen en verontreinigingen te voorkomen — zonder doorstroming zou het membraan snel beschadigen of verstopt raken. Dit is een inherent gevolg van het membraanfiltratieprocès.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe kan ik het afvalwater van mijn osmosefilter hergebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het afvalwater heeft een hogere TDS dan kraanwater maar is niet gevaarlijk. Hergebruikmogelijkheden: (1) Planten water geven (geschikt voor de meeste tuinplanten). (2) Toiletspoeling (via tank). (3) Schoonmaken vloeren en buitenruimtes. (4) Auto wassen. Niet geschikt voor: gevoelige kamerplanten (orchideeën, varens), babyvoeding of drinken. TDS afvalwater: typisch 400–1.200 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosefilter afvalwater slecht voor het milieu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het afvalwater gaat rechtstreeks naar het riool — het is gewoon geconcentreerd kraanwater, geen chemisch afval. De Nederlandse watercyclus verwerkt dit probleemloos. Het waterverspilling-argument is reëel: een gezin dat 10 liter osmosewater per dag gebruikt, loost 30–40 liter extra. Maar ter vergelijking: een normale douche verbruikt 60–80 liter. Met een waterbesparend systeem (50% efficiëntie) is het extra verbruik 10 liter/dag.',
      },
    },
  ],
};

export default function OsmosefilterAfvalwaterPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Afvalwater', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/afvalwater' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</a> &rsaquo;{' '}
          <span>Afvalwater</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmosefilter Afvalwater: Hoeveel & Hergebruiken
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Een osmosefilter gebruikt meer water dan het produceert. Hoeveel afvalwater is normaal, hoe beperk je het en wat doe je ermee?
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Afvalwater per systeem: vergelijking
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Systeemtype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Efficiëntie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Afvalwater ratio</th>
                <th className="border border-gray-300 px-3 py-2 text-left">10L drinkwater → afval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Standaard (zonder pomp)</td>
                <td className="border border-gray-300 px-3 py-2">20–25%</td>
                <td className="border border-gray-300 px-3 py-2">1:3–4</td>
                <td className="border border-gray-300 px-3 py-2">30–40 liter afval</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Met permeaatpomp</td>
                <td className="border border-gray-300 px-3 py-2">35–45%</td>
                <td className="border border-gray-300 px-3 py-2">1:1,5–2</td>
                <td className="border border-gray-300 px-3 py-2">15–20 liter afval</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Waterbesparend systeem</td>
                <td className="border border-gray-300 px-3 py-2">50%</td>
                <td className="border border-gray-300 px-3 py-2">1:1</td>
                <td className="border border-gray-300 px-3 py-2">10 liter afval</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Tankloos (400 GPD+)</td>
                <td className="border border-gray-300 px-3 py-2">50–75%</td>
                <td className="border border-gray-300 px-3 py-2">1:0,5–1</td>
                <td className="border border-gray-300 px-3 py-2">5–10 liter afval</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Afvalwater hergebruiken
        </h2>
        <p className="text-gray-700 mb-4">
          Afvalwater heeft hogere TDS (typisch 400–1.200 mg/L) maar is niet gevaarlijk of toxisch — het is gewoon geconcentreerd leidingwater. Hergebruiksmogelijkheden:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="font-medium text-green-800 text-sm">✓ Tuinplanten</p>
            <p className="text-green-700 text-xs mt-1">Geschikt voor de meeste buitenplanten</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="font-medium text-green-800 text-sm">✓ Toiletspoeling</p>
            <p className="text-green-700 text-xs mt-1">Via opvangvat aansluiten op stortbak</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="font-medium text-green-800 text-sm">✓ Vloer reinigen</p>
            <p className="text-green-700 text-xs mt-1">Schoonmaken niet-gevoelige oppervlakken</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="font-medium text-green-800 text-sm">✓ Auto wassen</p>
            <p className="text-green-700 text-xs mt-1">Niet als spoelwater (kalkvlekken mogelijk)</p>
          </div>
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="font-medium text-red-800 text-sm">✗ Gevoelige planten</p>
            <p className="text-red-700 text-xs mt-1">Orchideeën, varens: te hoge TDS</p>
          </div>
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="font-medium text-red-800 text-sm">✗ Drinken/koken</p>
            <p className="text-red-700 text-xs mt-1">Hogere mineralenconcentratie</p>
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

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Meer: <a href="/osmose-filter/capaciteit" className="text-[#005F8A] underline">osmosefilter capaciteit</a> en <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</a>.
        </p>
      </main>
    </>
  );
}
