import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosewater Smaak Verbeteren: Remineralisatie & Tips',
  description: 'Osmosewater smaakt "leeg"? Zo verbeter je de smaak: remineralisatiefilter, calcietpatroon, mineraaldruppels of mengen met leidingwater. Kosten en resultaat.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/smaak-verbetering' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom smaakt osmosewater zo vlak of leeg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een TDS van 5–20 mg/L — nauwelijks opgeloste stoffen. De smaakpapillen zijn gewend aan de mineralen in leidingwater (calcium, magnesium, bicarbonaat). Die buffercapaciteit en mineralen ontbreken in osmosewater. Bovendien kan osmosewater CO2 uit de lucht opnemen, waardoor de pH licht zuur wordt (6,0–6,5), wat als "scherp" of "vlak" ervaren kan worden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe remineraliseer ik osmosewater voor betere smaak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vier methoden: (1) Remineralisatiepatroon (calciet/dolomiet): past je bestaande osmosesysteem uit met een extra filterfase die calcium en magnesium toevoegt — TDS stijgt naar 50–80 mg/L, pH naar 7,0–7,5. (2) Mineraaldruppels: druppel magnesium/calcium-concentraat in je glas. (3) Mengen: 20–30% leidingwater mengen met osmosewater. (4) Himalaya-zout: kleine puntje zout per liter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het optimale TDS voor drinkwater smaak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smaakstudies (WHO, diverse universiteiten) tonen dat mensen drinkwater met TDS 50–150 mg/L als het meest smakelijk beoordelen. Hieronder is het "vlak", daarboven soms "mineraalachtig" of "hard". Osmosewater met remineralisatie (TDS 60–80 mg/L) scoort in blind taste tests vergelijkbaar met bekende flessenwateren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is remineralisatiewater gezonder dan puur osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marginaal. Remineralisatie voegt calcium en magnesium toe, maar de bijdrage aan de dagelijkse behoefte is klein (5–10%). Het gezondheidsvoordeel zit niet in de mineralen maar in de verbeterde smaak die zorgt dat mensen meer drinken. Puur osmosewater is niet ongezond bij een normaal dieet.',
      },
    },
  ],
};

export default function OsmoseWaterSmaakVerbeteringPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Smaak verbeteren', item: 'https://waterfilterplatform.nl/osmose-water/smaak-verbetering' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</a> &rsaquo;{' '}
          <span>Smaak verbeteren</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmosewater Smaak Verbeteren: Remineralisatie & Tips
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Puur osmosewater is schoon maar smaakt voor velen "leeg" of "vlak". Met remineralisatie geef je het water terug zijn karakter — en smaakt het beter dan de meeste flessenwateren.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom osmosewater anders smaakt
        </h2>
        <p className="text-gray-700 mb-4">
          We zijn gewend aan leidingwater met 150–450 mg/L opgeloste stoffen. Calcium, magnesium en bicarbonaat geven water zijn "body" — de mineralige, soms licht zoete smaak die we als "normaal" ervaren. Osmosewater mist dit volledig.
        </p>
        <p className="text-gray-700 mb-6">
          Bovendien heeft osmosewater vrijwel geen buffercapaciteit: het lost CO2 uit de lucht op en wordt daardoor licht zuur (pH 6,0–6,5). Dit geeft een tintelend of "scherp" gevoel dat door sommige mensen als minder aangenaam wordt ervaren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          4 manieren om de smaak te verbeteren
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">1. Remineralisatiefilter (aanbevolen)</h3>
            <p className="text-gray-700 text-sm mb-2">Voeg een extra filterfase toe aan je osmosesysteem. Een calciet- of dolomietpatroon lost langzaam op in het water en voegt calcium en magnesium toe. TDS stijgt naar 50–80 mg/L, pH naar 7,0–7,5.</p>
            <p className="text-gray-600 text-xs">Kosten: €20–40 per patroon, vervangen elke 6–12 maanden.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">2. Mineraaldruppels of mineraalconcentraat</h3>
            <p className="text-gray-700 text-sm mb-2">Druppel een geconcentreerde mineraaloplossing in het water. Merken als Concentrace, ConcenTrace of Elete bieden geteste formules. Meer controle dan een filter — je kunt de dosering aanpassen.</p>
            <p className="text-gray-600 text-xs">Kosten: €15–30 per flesje (ca. 400 liter).</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">3. Mengen met leidingwater</h3>
            <p className="text-gray-700 text-sm mb-2">Meng 20–30% gewoon leidingwater met osmosewater. Je behoudt 70–80% van de zuivering maar krijgt een meer vertrouwde smaak. Eenvoudig, gratis, direct toepasbaar.</p>
            <p className="text-gray-600 text-xs">Gevolg: TDS stijgt naar 50–120 mg/L afhankelijk van lokaal leidingwater.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">4. Kleine hoeveelheid mineraalzout</h3>
            <p className="text-gray-700 text-sm mb-2">Een klein puntje Himalayazout of celtisch zeezout per liter voegt mineralen toe en geeft subtiele smaak. Pas op: bij hoge bloeddruk of natriumbeperkt dieet niet aanbevolen.</p>
            <p className="text-gray-600 text-xs">Goedkoopste optie, maar minst nauwkeurig doseerbaar.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Optimale waterparameters voor smaak
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Puur osmose</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Na remineralisatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ideaal drinkwater</th>
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
                <td className="border border-gray-300 px-3 py-2">6,0–6,5</td>
                <td className="border border-gray-300 px-3 py-2">7,0–7,5</td>
                <td className="border border-gray-300 px-3 py-2">7,0–8,0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Calcium (mg/L)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1</td>
                <td className="border border-gray-300 px-3 py-2">10–30</td>
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
        <p className="text-gray-700 mb-6">
          Meer over de smaak van osmosewater: <a href="/osmose-water/smaak" className="text-[#005F8A] underline">osmosewater smaak en pH</a> of <a href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">remineralisatie van osmosewater</a>.
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

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Osmosewater met perfecte smaak</h3>
          <p className="text-gray-700 mb-4">
            Onze osmosefilters zijn beschikbaar met optioneel remineralisatiepatroon voor de perfecte waterkwaliteit en smaak.
          </p>
          <a href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </a>
        </div>
      </main>
    </>
  );
}
