import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Nitraat in Drinkwater: Normen, Risico & Privéputten',
  description: 'Nitraat in drinkwater: EU-norm 50 mg/L, risico voor baby\'s en privéput-gebruikers in Brabant/Achterhoek, welke filters nitraat verwijderen en hoe te testen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/nitraat' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bevat Nederlands leidingwater te veel nitraat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, in vrijwel alle gevallen niet. Drinkwaterbedrijven zijn wettelijk verplicht nitraat onder de EU-norm van 50 mg/L te houden. De meeste waterleidingbedrijven leveren water met 5–25 mg/L nitraat. Het risico is wel aanwezig bij privéputten (boorputten) in landbouwgebieden waar grondwater tot 100–200 mg/L nitraat kan bevatten door meststoffenuitspoeling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert koken nitraat uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, koken maakt nitraat erger. Water verdampt bij koken maar nitraat blijft achter, waardoor de concentratie stijgt. Een pan water die 30 minuten kookt en deels verdampt heeft daarna een hogere nitraatconcentratie dan ervoor. Koken is nooit een oplossing voor nitraat — alleen filtratie (osmose, ionenwisseling) of destillatie helpt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke Nederlandse regio\'s hebben hoog nitraat in grondwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Risicogebieden voor hoog nitraat in grondwater: Noord-Brabant (intensieve veehouderij), Achterhoek (Gelderland), Limburg en de Gelderse Vallei. Het RIVM monitort nitraatconcentraties in grondwater en publiceert kaarten. Mensen met een privéput in deze gebieden worden sterk aangeraden jaarlijks te testen en bij overschrijding te filteren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is veilig nitraatgehalte voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO adviseert voor babyvoeding bij voorkeur water met nitraat onder 10 mg/L. De EU-norm voor drinkwater is 50 mg/L (voor volwassenen acceptabel). Baby\'s onder 6 maanden kunnen hoge nitraatwaarden niet afbreken omdat hun darmbacteriën nitraat omzetten naar nitriet, wat methemoglobinemie (blauwzucht) kan veroorzaken. Osmosewater met remineralisatie (nitraat praktisch 0 mg/L) is de veiligste keuze voor babyvoeding.',
      },
    },
  ],
};

export default function DrinkwaterNitraatPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwater', item: 'https://waterfilterplatform.nl/drinkwater' },
              { '@type': 'ListItem', position: 3, name: 'Nitraat', item: 'https://waterfilterplatform.nl/drinkwater/nitraat' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/drinkwater" className="hover:underline">Drinkwater</a> &rsaquo;{' '}
          <span>Nitraat</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Nitraat in Drinkwater: Normen, Risico & Privéputten
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Leidingwater is veilig voor nitraat, maar privéputten in landbouwgebieden zijn een ander verhaal. Alles over nitraat, risico&apos;s en oplossingen.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nitraatgehaltes vergeleken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Waterbron</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Nitraat (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Beoordeling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nederlands leidingwater</td>
                <td className="border border-gray-300 px-3 py-2">5–25</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Veilig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Privéput (niet-landbouw)</td>
                <td className="border border-gray-300 px-3 py-2">10–40</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Testen aanbevolen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Privéput (Brabant/Achterhoek)</td>
                <td className="border border-gray-300 px-3 py-2">50–200+</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Actie vereist</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">EU-norm (max)</td>
                <td className="border border-gray-300 px-3 py-2">50</td>
                <td className="border border-gray-300 px-3 py-2">Wettelijk maximum</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">WHO-richtlijn babywater</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10</td>
                <td className="border border-gray-300 px-3 py-2">Aanbevolen voor babies</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Na osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2–5</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–95% verwijderd</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Oplossingen voor hoog nitraat
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Osmosefilter (aanbevolen voor particulieren)</h3>
            <p className="text-gray-700 text-sm">Verwijdert 85–95% van nitraat. De meest complete oplossing: pakt tegelijkertijd ook bacteriën (via UV), lood, PFAS en chloor aan. Aanschaf €300–800, jaarlijkse kosten €50–80.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Ionenwisseling (nitraatspecifiek)</h3>
            <p className="text-gray-700 text-sm">Verwijdert 95–99% van nitraat. Meer effectief dan osmose maar verwijdert geen andere verontreinigingen. Vereist periodieke regeneratie. Professionele installatie aanbevolen.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Flessenwater (tijdelijke oplossing)</h3>
            <p className="text-gray-700 text-sm">Voor babyvoeding bij hoog nitraat: gebruik tijdelijk bronwater met nitraat &lt;10 mg/L. Niet duurzaam als permanente oplossing. Zie ook onze vergelijking <a href="/kennisbank/kraanwater-versus-flessenwater" className="text-[#005F8A] underline">kraanwater vs. flessenwater</a>.</p>
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
          <a href="/stoffen-in-drinkwater/nitraat-nitriet" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat en nitriet in drinkwater</h3>
            <p className="text-sm text-gray-600">Achtergronden van nitraat en nitriet als verontreiniging in water.</p>
          </a>
          <a href="/leidingwater/nitraat" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat in leidingwater</h3>
            <p className="text-sm text-gray-600">Nitraat in Nederlands leidingwater: normen en bronnen.</p>
          </a>
          <a href="/putwater/nitraat" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat in putwater</h3>
            <p className="text-sm text-gray-600">Hoe nitraat in putwater terechtkomt en wat u kunt doen.</p>
          </a>
          <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose nitraat effectief uit water verwijdert.</p>
          </a>
        </div>
      </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook: <a href="/drinkwater/kwaliteit-test" className="text-[#005F8A] underline">drinkwater testen</a> en <a href="/drinkwater/baby" className="text-[#005F8A] underline">drinkwater voor baby</a>.
        </p>
      </main>
    </>
  );
}
