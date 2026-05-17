import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter voor Baby: Veilig Water voor Zuigelingen',
  description: 'Welk waterfilter is geschikt voor babyvoeding? Osmosefilter verwijdert nitraat, lood en PFAS. Veiligheidsadvies voor zuigelingen onder 6 maanden, met.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/baby' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter is het veiligst voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een omgekeerde-osmosefilter (RO) biedt de meest complete bescherming: het verwijdert nitraat (85–95%), lood (95–99%), bacteriën (>99%) en PFAS (90%+). Voeg een remineralisatiepatroon toe voor een evenwichtige mineraalbalans. Koolstoffilters zijn onvoldoende — ze verwijderen geen nitraat of lood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een Brita-filter gebruiken voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, een Brita-filterkruik (actief kool) is niet geschikt als primair filter voor babyvoeding. Brita verwijdert chloor en verbetert de smaak, maar verwijdert geen nitraat, lood of bacteriën. Voor veilig babywater is een osmosefilter of koken van leidingwater de aanbevolen methode.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang is gefilterd osmosewater houdbaar voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater uit een goed onderhouden systeem is bij bewaring in een schone, gesloten container 24–48 uur houdbaar in de koelkast. Maak babyvoeding altijd vers aan en gebruik het binnen 2 uur na bereiding bij kamertemperatuur. Bewaar bereide voeding maximaal 24 uur in de koelkast.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik osmosewater koken voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goed werkend osmosesysteem met een regelmatig vervangen membraan verwijdert >99% van bacteriën en virussen. Officieel advies van de NVWA is om water voor zuigelingen jonger dan 6 maanden te koken — dit geldt ook voor osmosewater, puur als voorzorgsmaatregel. Breng aan de kook, laat afkoelen tot 37–40°C.',
      },
    },
  ],
};

export default function WaterfilterBabyPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Baby', item: 'https://waterfilterplatform.nl/waterfilter/baby' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Baby</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor Baby: Veilig Water voor Zuigelingen
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Baby&rsquo;s zijn kwetsbaarder dan volwassenen voor verontreinigingen in drinkwater. Een goed waterfilter geeft ouders de zekerheid dat het water voor flesvoeding en bijvoeding vrij is van nitraat, lood en bacteriën.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom standaard leidingwater niet volstaat bij baby&rsquo;s
        </h2>
        <p className="text-gray-700 mb-4">
          Nederlands leidingwater is over het algemeen veilig voor volwassenen, maar baby&rsquo;s stellen andere eisen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Lood:</strong> In woningen gebouwd voor 1970 kunnen loden leidingen aanwezig zijn. Lood lost op in stilstaand water en heeft geen veilige ondergrens voor kinderlijke hersenontwikkeling.</li>
          <li><strong>Nitraat:</strong> Hogere concentraties (boven 10 mg/L WHO-advies voor babyvoeding) kunnen methemoglobinemie veroorzaken bij jonge zuigelingen.</li>
          <li><strong>PFAS:</strong> Hormoonverstorende &ldquo;forever chemicals&rdquo; zijn gelinkt aan immuun- en schildklierontwikkeling bij het kind.</li>
          <li><strong>Bacteriën:</strong> Zuigelingen hebben een kwetsbaarder immuunsysteem. Zelfs lage bacteriebesmetting kan ernstige diarree veroorzaken.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welk filter is geschikt?
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Nitraat</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Lood</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bacteriën</th>
                <th className="border border-gray-300 px-3 py-2 text-left">PFAS</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Advies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter (Brita)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Niet geschikt</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">UF-filter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Deels</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–95%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Aanbevolen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatie bij osmosewater voor baby
        </h2>
        <p className="text-gray-700 mb-4">
          Puur osmosewater heeft vrijwel geen mineralen (TDS &lt; 20 mg/L). Voor zuigelingen die enkel kunstvoeding op osmosewater krijgen, is een remineralisatiepatroon aanbevolen. Dit herstelt essentiële mineralen (calcium, magnesium, kalium) en stabiliseert de pH.
        </p>
        <p className="text-gray-700 mb-6">
          Voor kinderen die bijvoeding en gevarieerde voeding krijgen (vanaf 6 maanden) is remineralisatie minder kritisch — de voeding levert voldoende mineralen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud van het filter is essentieel
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterfilter dat niet op tijd vervangen wordt kan een broedplaats worden voor bacteriën. Zeker bij gebruik voor babywater:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Vervang filters strikt op schema (of eerder bij hoog gebruik)</li>
          <li>Spoel het systeem dagelijks door als het lang niet gebruikt is</li>
          <li>Vervang het RO-membraan elke 2–3 jaar</li>
          <li>Gebruik een TDS-meter om de filterkwaliteit te controleren (TDS boven 50 = membraan controleren)</li>
        </ul>

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

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Maximale bescherming voor jouw baby</h3>
          <p className="text-gray-700 mb-4">
            Onze osmosefilters met optioneel remineralisatiepatroon zijn de veiligste keuze voor babyvoeding. Eenvoudig te installeren onder het aanrecht.
          </p>
          <a href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          Lees ook: <a href="/drinkwater/baby" className="text-[#005F8A] underline">Drinkwater voor baby: welk water is veilig?</a> en <a href="/kennisbank/waterfilter-baby" className="text-[#005F8A] underline">waterfilter voor babyvoeding: complete gids</a>.
        </p>
      </main>
    </>
  );
}
