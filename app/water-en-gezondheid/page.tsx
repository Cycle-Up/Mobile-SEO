import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Water en gezondheid: feiten en nuance",
  description: "Feitelijke, genuanceerde informatie over water en gezondheid: hydratatie, kwetsbare groepen en wat de wetenschap zegt. Geen medisch advies.",
  alternates: { canonical: 'https://waterfilterplatform.nl/water-en-gezondheid' },
  openGraph: {
    title: "Water en gezondheid: feiten en nuance",
    description: "Feitelijke, genuanceerde informatie over water en gezondheid: hydratatie, kwetsbare groepen en wat de wetenschap zegt. Geen medisch advies.",
    url: 'https://waterfilterplatform.nl/water-en-gezondheid',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function WaterEnGezondheidPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: "Water en gezondheid", url: 'https://waterfilterplatform.nl/water-en-gezondheid' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'CollectionPage',
            name: "Water en gezondheid: feiten en nuance",
            url: 'https://waterfilterplatform.nl/water-en-gezondheid',
            inLanguage: 'nl-NL',
            isPartOf: { '@id': 'https://waterfilterplatform.nl/#website' },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: 8,
              itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Hoeveel water per dag", url: 'https://waterfilterplatform.nl/kennisbank/hoeveel-water-per-dag' },
              { '@type': 'ListItem', position: 2, name: "Verzwakt immuunsysteem", url: 'https://waterfilterplatform.nl/kennisbank/drinkwater-immuunsysteem' },
              { '@type': 'ListItem', position: 3, name: "Water en huid", url: 'https://waterfilterplatform.nl/kennisbank/drinkwater-huid-eczeem' },
              { '@type': 'ListItem', position: 4, name: "Water en medicijnen", url: 'https://waterfilterplatform.nl/kennisbank/drinkwater-medicijngebruik' },
              { '@type': 'ListItem', position: 5, name: "Mineraalarm water", url: 'https://waterfilterplatform.nl/kennisbank/mineraalarm-water-langdurig' },
              { '@type': 'ListItem', position: 6, name: "Sporters en hydratatie", url: 'https://waterfilterplatform.nl/kennisbank/drinkwater-sporters-atleten' },
              { '@type': 'ListItem', position: 7, name: "Water en nierstenen", url: 'https://waterfilterplatform.nl/kennisbank/nierstenen-water-hardheid' },
              { '@type': 'ListItem', position: 8, name: "Waterfilter en gezondheid", url: 'https://waterfilterplatform.nl/waterfilter/gezondheid' },
              ],
            },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Water en gezondheid</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Water en gezondheid</h1>
          <p className="text-gray-600 text-lg">Water raakt aan gezondheid, en daarmee aan YMYL-onderwerpen waar zorgvuldigheid telt. Hieronder vind je feitelijke, genuanceerde artikelen met bronnen. Dit overzicht is algemene informatie en geen medisch advies; bij klachten is een arts leidend.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <HealthDisclaimer />
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Gezondheidsonderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/kennisbank/hoeveel-water-per-dag', "Hoeveel water per dag", "Feiten vs mythes"],
              ['/kennisbank/drinkwater-immuunsysteem', "Verzwakt immuunsysteem", "Voorzorg en filteren"],
              ['/kennisbank/drinkwater-huid-eczeem', "Water en huid", "Hard water en eczeem"],
              ['/kennisbank/drinkwater-medicijngebruik', "Water en medicijnen", "Waar let je op"],
              ['/kennisbank/mineraalarm-water-langdurig', "Mineraalarm water", "Langdurig drinken"],
              ['/kennisbank/drinkwater-sporters-atleten', "Sporters en hydratatie", "Vocht en mineralen"],
              ['/kennisbank/nierstenen-water-hardheid', "Water en nierstenen", "Hardheid en nuance"],
              ['/waterfilter/gezondheid', "Waterfilter en gezondheid", "Stoffen en kwetsbare groepen"],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="text-gray-700 text-sm leading-relaxed">Deze informatie is algemeen en feitelijk bedoeld. Lees onze <Link href="/methodologie" className="text-[#005F8A] underline">methodologie en bronnen</Link>; voor persoonlijke gezondheidsvragen is je huisarts leidend.</p>
        </section>
      </div>
    </>
  );
}
