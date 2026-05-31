import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Osmosewater Remineralisatie: Filter, Druppels & Methoden',
  description: 'Osmosewater remineraliseren: calcietpatroon toevoegen, mineraaldruppels, mengen met leidingwater. TDS verhogen naar 50-80 mg/L voor optimale smaak en pH.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/remineralisatie' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom moet osmosewater geremineraliseerd worden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft TDS 5–20 mg/L en pH 5,5–6,5. Dit is volkomen veilig maar smaakt "vlak" omdat smaakpapillen gewend zijn aan mineralen (calcium, magnesium) in leidingwater. Bovendien absorbeert osmosewater CO2 waardoor de pH daalt. Remineralisatie voegt calcium en magnesium toe, verhoogt TDS naar 50–80 mg/L en pH naar 7,0–7,5 — vergelijkbaar met fijn bronwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk remineralisatiefilter is het beste voor osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een calciet- of dolomietpatroon is de standaardoplossing. Calciet (calciumcarbonaat) lost langzaam op en verhoogt pH en calcium. Dolomiet voegt ook magnesium toe. Dit patroon wordt als extra filterfase na het RO-membraan geplaatst. Merken als Aquatabs, BWT en Aquatech bieden geschikte patronen aan voor €20–40, met een levensduur van 6–12 maanden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de beste mineraaldruppels voor osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mineraaldruppels zijn geconcentreerde oplossingen van magnesium, calcium en sporenelementen. Bekende merken: Concentrace (ionenbalans), ConcenTrace (magnesiumchloride-basis), Elete (magnesium+natrium+kalium). Dosering: 20–40 druppels per liter. Voordeel: flexibele dosering. Nadeel: extra stap bij elke kan/glas. Kosten ca. €15–30 per flesje (400 liter).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is geremineraliseerd osmosewater gezonder dan puur osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marginaal. Remineralisatie voegt calcium en magnesium toe maar de bijdrage aan de dagelijkse behoefte is beperkt (5–10%). Het primaire voordeel is smaakverbering, niet gezondheid. Mensen drinken meer als water lekkerder smaakt — dat is indirect een gezondheidsvoordeel. Puur osmosewater bij een normaal gevarieerd dieet is niet ongezond.',
      },
    },
  ],
};

export default function OsmoseRemineralisatiePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Remineralisatie', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/remineralisatie' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link> &rsaquo;{' '}
          <span>Remineralisatie</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmosewater Remineralisatie: Filter, Druppels & Methoden
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Osmosewater is puur maar smaakt vlak. Remineralisatie geeft het water terug zijn karakter — voor betere smaak, pH en een vleugje mineralen.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Effect van remineralisatie op waterparameters
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Puur osmose</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Na calcietpatroon</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Doel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">TDS (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">5–20</td>
                <td className="border border-gray-300 px-3 py-2">50–80</td>
                <td className="border border-gray-300 px-3 py-2">50–150</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">pH</td>
                <td className="border border-gray-300 px-3 py-2">5,5–6,5</td>
                <td className="border border-gray-300 px-3 py-2">7,0–7,5</td>
                <td className="border border-gray-300 px-3 py-2">7,0–8,0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Calcium (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1</td>
                <td className="border border-gray-300 px-3 py-2">15–30</td>
                <td className="border border-gray-300 px-3 py-2">20–80</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Magnesium (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1</td>
                <td className="border border-gray-300 px-3 py-2">5–15</td>
                <td className="border border-gray-300 px-3 py-2">5–30</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vier remineralisatiemethoden vergeleken
        </h2>

        <div className="space-y-3 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">1. Calciet/dolomiet remineralisatiepatroon</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Aanbevolen</span>
            </div>
            <p className="text-gray-700 text-sm mb-1">Extra filterfase na RO-membraan. Automatische, consistente mineralisatie. Kosten €20–40/patroon (6–12 maanden).</p>
            <p className="text-gray-600 text-xs">TDS resultaat: 50–80 mg/L | pH resultaat: 7,0–7,5</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">2. Mineraaldruppels</h3>
            <p className="text-gray-700 text-sm mb-1">20–40 druppels per liter. Flexibele dosering. Kosten €15–30 per flesje (400 liter). Handig als aanvulling of bij twijfel over calcietpatroon.</p>
            <p className="text-gray-600 text-xs">TDS resultaat: instelbaar 30–120 mg/L</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">3. Mengen met leidingwater</h3>
            <p className="text-gray-700 text-sm mb-1">20–30% leidingwater mengen met osmosewater. Gratis, direct. TDS stijgt naar 50–130 mg/L afhankelijk van jouw water. Behoudt 70–80% van de osmosezuivering.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">4. Mineraalzout (puntje Himalayazout)</h3>
            <p className="text-gray-700 text-sm mb-1">Kleine hoeveelheid grof mineraalzout per liter. Goedkoopste optie, voegt sporenelementen toe. Minder nauwkeurig; niet aanbevolen bij natriumbeperkt dieet.</p>
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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/osmose-water/mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in osmosewater</h3>
            <p className="text-sm text-gray-600">Welke mineralen ontbreken in osmosewater en hoe voegt u ze terug toe?</p>
          </Link>
          <Link href="/osmose-water/gezondheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Gezondheid osmosewater</h3>
            <p className="text-sm text-gray-600">Is geremineraliseerd osmosewater gezond om te drinken?</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechniek: omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe werkt de omgekeerde osmose filtertechniek precies?</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Terug naar het hoofdoverzicht van omgekeerde osmose.</p>
          </Link>
        </div>
      </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Meer: <Link href="/osmose-water/smaak-verbetering" className="text-[#005F8A] underline">smaak verbetering osmosewater</Link> en <Link href="/osmose-water/ph" className="text-[#005F8A] underline">pH van osmosewater</Link>.
        </p>
      </main>
    </>
  );
}
