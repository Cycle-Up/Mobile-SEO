import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Nitraat in Drinkwater Filteren: Baby\'s & Privéputten',
  description: 'Nitraat in drinkwater: EU-norm 50 mg/L, risico voor baby\'s (methemoglobinemie), risicogebieden Nederland en welke filters nitraat verwijderen (osmose, ionenwisseling).',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/nitraat' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom is nitraat gevaarlijk in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nitraat zelf is relatief onschadelijk. Het gevaar zit in de omzetting naar nitriet in het lichaam, dat het bloed van zuigelingen minder zuurstof kan laten vervoeren (methemoglobinemie of "blue baby syndrome"). Baby\'s onder 6 maanden zijn het meest kwetsbaar. Voor volwassenen met een normaal dieet is nitraat bij concentraties onder de EU-norm (50 mg/L) niet direct gevaarlijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterfilters verwijderen nitraat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Effectieve methoden: (1) Omgekeerde osmose (RO): verwijdert 85–95% van nitraat. Meest complete thuisoplossing. (2) Ionenwisseling (speciaal nitraatfilter): verwijdert 95–99%, zeer effectief maar vereist regeneratie met zout. (3) Destillatie: verwijdert nitraat volledig. Niet effectief: actief kool, UV-lamp, sedimentfilters. Kochen verhoogt nitraatconcentratie door verdamping van water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke gebieden in Nederland hebben hoog nitraat in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leidingwater in Nederland voldoet vrijwel altijd aan de EU-norm van 50 mg/L. Het risico zit bij particuliere putten (boorputten) in landbouwgebieden: Achterhoek, Noord-Brabant, Limburg, Gelderland. In deze gebieden kan grondwater nitraatgehaltes van 50–150 mg/L bevatten door uitspoeling van landbouwmeststoffen. Bij gebruik van een privéput is testen sterk aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kookt nitraat weg als je water verhit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, integendeel. Koken verdampt water maar NIET nitraat. Hierdoor stijgt de nitraatconcentratie naarmate meer water verdampt. Koken is dus geen oplossing voor nitraat. Alleen filtratie (RO, ionenwisseling) of destillatie verwijdert nitraat effectief.',
      },
    },
  ],
};

export default function WaterfilterNitraatPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Nitraat', item: 'https://waterfilterplatform.nl/waterfilter/nitraat' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Nitraat</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Nitraat in Drinkwater Filteren: Baby&apos;s & Privéputten
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Nitraat in drinkwater is vooral risicovol voor baby&apos;s en mensen met een privéput in landbouwgebieden. Zo test en filter je het.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nitraatwaarden en normen
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Bron</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Typisch nitraat (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nederlands leidingwater</td>
                <td className="border border-gray-300 px-3 py-2">5–25</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Veilig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">EU-norm (max)</td>
                <td className="border border-gray-300 px-3 py-2">50</td>
                <td className="border border-gray-300 px-3 py-2">Wettelijk maximum</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Privéput landbouwgebied</td>
                <td className="border border-gray-300 px-3 py-2">50–150+</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Test nodig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">WHO-richtlijn babywater</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10</td>
                <td className="border border-gray-300 px-3 py-2">Aanbevolen voor babyvoeding</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor nitraat
        </h2>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">85–95%</span>
            </div>
            <p className="text-gray-700 text-sm">Beste all-round oplossing voor particulieren. Verwijdert naast nitraat ook lood, PFAS, chloor en andere verontreinigingen. Aanschaf €300–800, jaarlijkse filters €50–80.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">Ionenwisseling (nitraatspecifiek)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">95–99%</span>
            </div>
            <p className="text-gray-700 text-sm">Hars bindt nitraationen en laat andere mineralen door. Zeer effectief maar vereist periodieke regeneratie met zout. Professionele installatie aanbevolen.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">Actief kool / UV-lamp</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">0%</span>
            </div>
            <p className="text-gray-700 text-sm">Niet effectief voor nitraat. Actief kool adsorbeert organische stoffen maar geen nitraationen. UV-lamp doodt bacteriën maar laat nitraat ongemoeid.</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
          <p className="text-amber-800 text-sm font-medium">
            <strong>Advies voor privéput gebruikers:</strong> Test je water jaarlijks op nitraat, bacteriën en andere parameters. Bij nitraat boven 50 mg/L: direct actie via osmosefilter of ionenwisseling — en gebruik gefilterd water voor babyvoeding.
          </p>
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
          <a href="/stoffen-in-drinkwater/nitraat-nitriet" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat en nitriet in drinkwater</h3>
            <p className="text-sm text-gray-600">Bronnen, normen en gezondheidsrisico's van stikstofverbindingen.</p>
          </a>
          <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtratie</h3>
            <p className="text-sm text-gray-600">RO verwijdert 85-95% van nitraat uit drinkwater.</p>
          </a>
          <a href="/waterfilter/nitriet" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitriet in drinkwater</h3>
            <p className="text-sm text-gray-600">Vergelijkbare stof met hogere toxiciteit en strengere normen.</p>
          </a>
          <a href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nederlandse drinkwaternormen</h3>
            <p className="text-sm text-gray-600">EU-norm voor nitraat en andere stoffen in drinkwater.</p>
          </a>
        </div>
      </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook: <a href="/drinkwater/baby" className="text-[#005F8A] underline">drinkwater voor baby</a> en <a href="/drinkwater/kwaliteit-test" className="text-[#005F8A] underline">drinkwater testen</a>.
        </p>
      </main>
    </>
  );
}
