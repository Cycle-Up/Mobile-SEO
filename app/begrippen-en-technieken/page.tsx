import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Begrippen en technieken: waterfilter-termen uitgelegd",
  description: "Heldere uitleg van de belangrijkste begrippen en technieken rond waterfiltratie: TDS, EC, osmotische druk, membranen, keurmerken en meer.",
  alternates: { canonical: 'https://waterfilterplatform.nl/begrippen-en-technieken' },
  openGraph: {
    title: "Begrippen en technieken: waterfilter-termen uitgelegd",
    description: "Heldere uitleg van de belangrijkste begrippen en technieken rond waterfiltratie: TDS, EC, osmotische druk, membranen, keurmerken en meer.",
    url: 'https://waterfilterplatform.nl/begrippen-en-technieken',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function BegrippenEnTechniekenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: "Begrippen en technieken", url: 'https://waterfilterplatform.nl/begrippen-en-technieken' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'CollectionPage',
            name: "Begrippen en technieken: waterfilter-termen uitgelegd",
            url: 'https://waterfilterplatform.nl/begrippen-en-technieken',
            inLanguage: 'nl-NL',
            isPartOf: { '@id': 'https://waterfilterplatform.nl/#website' },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: 10,
              itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Begrippenlijst", url: 'https://waterfilterplatform.nl/begrippenlijst' },
              { '@type': 'ListItem', position: 2, name: "TDS van water", url: 'https://waterfilterplatform.nl/kennisbank/tds-water' },
              { '@type': 'ListItem', position: 3, name: "Geleidbaarheid (EC)", url: 'https://waterfilterplatform.nl/kennisbank/geleidbaarheid-ec-water' },
              { '@type': 'ListItem', position: 4, name: "Permeaat en concentraat", url: 'https://waterfilterplatform.nl/kennisbank/permeaat-concentraat' },
              { '@type': 'ListItem', position: 5, name: "Osmotische druk", url: 'https://waterfilterplatform.nl/kennisbank/osmotische-druk-uitleg' },
              { '@type': 'ListItem', position: 6, name: "Microfiltratie", url: 'https://waterfilterplatform.nl/kennisbank/microfiltratie' },
              { '@type': 'ListItem', position: 7, name: "Gedeioniseerd water", url: 'https://waterfilterplatform.nl/kennisbank/gedeioniseerd-water' },
              { '@type': 'ListItem', position: 8, name: "Soorten hardheid", url: 'https://waterfilterplatform.nl/kennisbank/tijdelijke-blijvende-hardheid' },
              { '@type': 'ListItem', position: 9, name: "NSF/ANSI keurmerken", url: 'https://waterfilterplatform.nl/kennisbank/nsf-ansi-keurmerken' },
              { '@type': 'ListItem', position: 10, name: "Filtertechnieken", url: 'https://waterfilterplatform.nl/filtertechnieken' },
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
            <span>Begrippen en technieken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Begrippen en technieken</h1>
          <p className="text-gray-600 text-lg">Wat betekenen termen als TDS, permeaat, osmotische druk of NSF/ANSI? Hieronder vind je heldere, citatie-klare definities en de begrippenlijst, zodat je waterfilter-informatie makkelijker begrijpt.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Begrippen en definities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/begrippenlijst', "Begrippenlijst", "Alle termen van A tot Z"],
              ['/kennisbank/tds-water', "TDS van water", "Opgeloste stoffen in mg/L"],
              ['/kennisbank/geleidbaarheid-ec-water', "Geleidbaarheid (EC)", "Meten van ionen"],
              ['/kennisbank/permeaat-concentraat', "Permeaat en concentraat", "Osmose-termen"],
              ['/kennisbank/osmotische-druk-uitleg', "Osmotische druk", "Waarom omgekeerde osmose"],
              ['/kennisbank/microfiltratie', "Microfiltratie", "De grofste membraanstap"],
              ['/kennisbank/gedeioniseerd-water', "Gedeioniseerd water", "Demiwater uitgelegd"],
              ['/kennisbank/tijdelijke-blijvende-hardheid', "Soorten hardheid", "Tijdelijk vs blijvend"],
              ['/kennisbank/nsf-ansi-keurmerken', "NSF/ANSI keurmerken", "42, 53 en 58"],
              ['/filtertechnieken', "Filtertechnieken", "Alle technieken vergeleken"],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="text-gray-700 text-sm leading-relaxed">Meer weten? Bekijk de volledige <Link href="/begrippenlijst" className="text-[#005F8A] underline">begrippenlijst</Link> of de <Link href="/kennisbank" className="text-[#005F8A] underline">kennisbank</Link>.</p>
        </section>
      </div>
    </>
  );
}
