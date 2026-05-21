import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Microplastics in Drinkwater: Risico & Filteren (2026)',
  description: 'Hoeveel microplastics zitten in Nederlands drinkwater? RIVM-metingen, gezondheidsrisico WHO, welke filters werken en of osmose microplastics verwijdert.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/microplastics' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel microplastics zitten in Nederlands drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RIVM-onderzoek (2021-2023) vond microplastics in Nederlands leidingwater: gemiddeld 11 deeltjes per liter, voornamelijk kleiner dan 100 µm. Waterleidingbedrijven filteren al veel microplastics eruit via hun behandelproces. Ter vergelijking: bronwater in flessen bevat soms meer microplastics dan leidingwater (door PET-flesmateriaal).',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn microplastics in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO concludeerde in 2019 dat er bij de huidige concentraties in drinkwater geen bewijs is voor gezondheidsrisico\'s. Nanoplastics (kleiner dan 1 µm) kunnen cellen binnendringen, maar de exacte gezondheidseffecten zijn nog onvoldoende onderzocht. Het voorzorgsprincipe suggereert blootstelling te minimaliseren, maar er is geen acute bedreiging aangetoond voor drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter microplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, zeer effectief. Een RO-membraan heeft poriën van 0,0001 µm (0,1 nm). Microplastics zijn doorgaans 1–5.000 µm groot — duizenden keren groter dan de poriën. RO verwijdert >99,9% van microplastics, inclusief nanoplastics boven ca. 0,001 µm. Dit is de meest complete thuisoplossing voor microplasticverwijdering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke andere filters verwijderen microplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ultrafiltratie (UF, 0,01 µm): verwijdert microplastics maar niet de kleinste nanoplastics. Actief kool blokfilter (solid carbon block, 0,5-1 µm): verwijdert deeltjes boven die grootte. Eenvoudige koolfilters (granulaat): geen significante microplasticverwijdering. Sedimentfilter (5-20 µm): verwijdert grotere microplastics. Een gecombineerd systeem (sediment + kool + RO) is het meest compleet.',
      },
    },
  ],
};

export default function DrinkwaterMicroplasticsPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Microplastics', item: 'https://waterfilterplatform.nl/drinkwater/microplastics' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/drinkwater" className="hover:underline">Drinkwater</a> &rsaquo;{' '}
          <span>Microplastics</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Microplastics in Drinkwater: Risico & Filteren (2026)
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Microplastics zijn inmiddels overal aangetroffen — ook in drinkwater. Wat weten we over de risico&apos;s, en wat kun je er aan doen?
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Microplastics in Nederlands drinkwater: de feiten
        </h2>
        <p className="text-gray-700 mb-4">
          RIVM analyseerde tussen 2021 en 2023 drinkwater van meerdere Nederlandse waterleidingbedrijven. De bevindingen zijn genuanceerd: microplastics worden gevonden, maar de concentraties zijn relatief laag vergeleken met oppervlaktewater en ze zijn zelfs lager dan in sommige flessenwater.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Waterbron</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Microplastics (deeltjes/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nederlands leidingwater</td>
                <td className="border border-gray-300 px-3 py-2">5–20 deeltjes/L</td>
                <td className="border border-gray-300 px-3 py-2">Na behandeling</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Fleswater (PET)</td>
                <td className="border border-gray-300 px-3 py-2">10–50+ deeltjes/L</td>
                <td className="border border-gray-300 px-3 py-2">Afhankelijk van merk</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Na RO-filter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,1 deeltjes/L</td>
                <td className="border border-gray-300 px-3 py-2">&gt;99,9% reductie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater</td>
                <td className="border border-gray-300 px-3 py-2">100–10.000 deeltjes/L</td>
                <td className="border border-gray-300 px-3 py-2">Vóór behandeling</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor microplastics
        </h2>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Beste keuze</span>
            </div>
            <p className="text-gray-700 text-sm">Membraanporiën van 0,0001 µm houden nagenoeg alle microplastics en nanoplastics tegen. Verwijderingsefficiëntie &gt;99,9%. Verwijdert tegelijkertijd ook PFAS, lood, nitraat en andere verontreinigingen.</p>
            <p className="text-gray-600 text-xs mt-1">Aanschaf: €300–800 | Jaarlijks filters: €50–80</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">Actief kool blokfilter (0,5 µm)</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">Goed voor grotere deeltjes</span>
            </div>
            <p className="text-gray-700 text-sm">Solid carbon block filters met 0,5–1 µm poriën vangen de meeste microplastics. Nanoplastics gaan er echter doorheen. Goede aanvulling maar geen volledige oplossing.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#003F5C]">Granulaat koolfilter (bv. Brita)</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Niet effectief</span>
            </div>
            <p className="text-gray-700 text-sm">Koolkorrels hebben gaten van 100+ µm. Ze verbeteren smaak en verwijderen chloor, maar microplastics gaan grotendeels door het filter heen.</p>
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
          <a href="/stoffen-in-drinkwater/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Microplastics in drinkwater</h3>
            <p className="text-sm text-gray-600">Wat we weten over microplastics in ons drinkwater.</p>
          </a>
          <a href="/drinkwaternormen/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Normen voor microplastics</h3>
            <p className="text-sm text-gray-600">Wat zegt de wet over microplastics in drinkwater?</p>
          </a>
          <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose microplastics uit water verwijdert.</p>
          </a>
          <a href="/waterfilter/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor microplastics</h3>
            <p className="text-sm text-gray-600">Welke waterfilters microplastics effectief verwijderen.</p>
          </a>
        </div>
      </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook: <a href="/drinkwater/kwaliteit-test" className="text-[#005F8A] underline">drinkwater testen</a> en <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">hoe omgekeerde osmose werkt</a>.
        </p>
      </main>
    </>
  );
}
