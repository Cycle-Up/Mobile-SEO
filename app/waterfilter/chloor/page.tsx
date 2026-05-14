import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import SchemaOrg from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Chloor uit Drinkwater Filteren: Smaak & Methoden',
  description: 'Chloor in kraanwater verwijderen: waarom waterleidingbedrijven chloor toevoegen, concentraties, welke filters werken en het verschil chloor vs. chloramine.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/chloor' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom bevat drinkwater chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waterleidingbedrijven voegen chloor toe om bacteriën en virussen te doden tijdens transport. Chloor zorgt voor een desinfecterende restwerking in het leidingnet — ook in het leidingwerk in jouw huis. Zonder desinfectiemiddel kunnen bacteriën groeien, zeker in stilstaande leidingen. De concentraties zijn wettelijk beperkt: max. 0,3 mg/L vrij chloor in Nederlands leidingwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert chloor het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actief kool (geactiveerde kool) adsorbeert chloor zeer effectief: 95–99% verwijdering. Zowel granulaire (GAC) als blokfilters (CTO) werken goed. Granulaire kool heeft hogere doorstroomsnelheid; blokfilters betere verwijdering. Osmosefilters (RO) verwijderen ook chloor, maar het koolprefilter beschermt dan het gevoelige RO-membraan. Kook water of UV-lamp verwijdert geen chloor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen chloor en chloramine in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chloramine (combinatie chloor + ammoniak) wordt gebruikt als stabielere alternatieve desinfectant, met minder bijproducten. Het is moeilijker te verwijderen dan gewoon chloor: gewone GAC-koolfilters zijn minder effectief. Catalytische geactiveerde kool (catalytic carbon) werkt beter voor chloramine. In Nederland wordt chloorgas of natriumhypochloriet het meest gebruikt; chloramine is zeldzamer maar komt voor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Smaakt water beter zonder chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Chloor heeft een karakteristieke geur en smaak (vergelijkbaar met zwembadwater) die veel mensen onaangenaam vinden. Na chloorverwijdering met een actief koolfilter ervaren de meeste mensen kraanwater als aanmerkelijk beter smakend. Blinde smaaktests tonen consistent dat gefilterd kraanwater beter scoort dan ongefilterd water in regio\'s met hogere chloorconcentraties.',
      },
    },
  ],
};

export default function WaterfilterChloorPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Chloor', item: 'https://waterfilterplatform.nl/waterfilter/chloor' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Chloor</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Chloor uit Drinkwater Filteren: Smaak & Methoden
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          De geur van zwembadwater uit je kraan — dat is chloor. Volkomen veilig, maar voor velen onaangenaam van smaak. Zo filter je het eruit.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloor in Nederlands drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elk waterleidingbedrijf gebruikt evenveel chloor. De concentraties variëren per regio:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Waterbedrijf/regio</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Vrij chloor (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Vitens (centrum/oost)</td>
                <td className="border border-gray-300 px-3 py-2">0,05–0,15</td>
                <td className="border border-gray-300 px-3 py-2">Laag, nauwelijks smakelijk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">PWN (Noord-Holland)</td>
                <td className="border border-gray-300 px-3 py-2">0,10–0,25</td>
                <td className="border border-gray-300 px-3 py-2">Merkbaar bij gevoelige personen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Dunea (Den Haag)</td>
                <td className="border border-gray-300 px-3 py-2">0,10–0,20</td>
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater bron</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Evides (Zeeland/ZH)</td>
                <td className="border border-gray-300 px-3 py-2">0,15–0,30</td>
                <td className="border border-gray-300 px-3 py-2">Merkbaar, hogere behandeling</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Wettelijke max.</td>
                <td className="border border-gray-300 px-3 py-2">0,30</td>
                <td className="border border-gray-300 px-3 py-2">EU Drinkwaterbesluit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor chloorverwijdering
        </h2>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">Actief kool (GAC granulaat)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">95–99%</span>
            </div>
            <p className="text-gray-700 text-sm">Standaard kraan- of kannenfilters met granulaire actief kool. Snelle doorstroom, goede chloorverwijdering. Vervangen elke 3–6 maanden. Meest betaalbare oplossing.</p>
            <p className="text-gray-600 text-xs mt-1">Kosten: €15–50 (filter) + €10–20/jaar vervanging</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">Actief kool blokfilter (CTO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">97–99%+</span>
            </div>
            <p className="text-gray-700 text-sm">Gecomprimeerde koolblok met langere contacttijd. Verwijdert ook sediment, geur en smaakstoffen. Basis van de meeste onderbouwnfilters. Vervangen elke 6–12 maanden.</p>
            <p className="text-gray-600 text-xs mt-1">Kosten: €20–50 per filter</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">99%+</span>
            </div>
            <p className="text-gray-700 text-sm">RO verwijdert chloor volledig (koolprefilter beschermt membraan). Meest complete oplossing: verwijdert ook lood, PFAS, nitraat. Aanschaf hoger maar langere levensduur.</p>
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
          Meer: <a href="/waterfilter/gezondheid" className="text-[#005F8A] underline">waterfilter en gezondheid</a> en <a href="/drinkwater/kwaliteit-test" className="text-[#005F8A] underline">drinkwaterkwaliteit testen</a>.
        </p>
      </main>
    </>
  );
}
