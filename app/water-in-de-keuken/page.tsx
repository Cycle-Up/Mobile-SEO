import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Water in de keuken: koken, koffie, thee en meer",
  description: "Alles over water in de keuken: koken, koffie, thee, bakken en hoe waterkwaliteit smaak en kalk beinvloedt.",
  alternates: { canonical: 'https://waterfilterplatform.nl/water-in-de-keuken' },
  openGraph: {
    title: "Water in de keuken: koken, koffie, thee en meer",
    description: "Alles over water in de keuken: koken, koffie, thee, bakken en hoe waterkwaliteit smaak en kalk beinvloedt.",
    url: 'https://waterfilterplatform.nl/water-in-de-keuken',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function WaterInDeKeukenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: "Water in de keuken", url: 'https://waterfilterplatform.nl/water-in-de-keuken' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'CollectionPage',
            name: "Water in de keuken: koken, koffie, thee en meer",
            url: 'https://waterfilterplatform.nl/water-in-de-keuken',
            inLanguage: 'nl-NL',
            isPartOf: { '@id': 'https://waterfilterplatform.nl/#website' },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: 10,
              itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Pasta koken", url: 'https://waterfilterplatform.nl/kennisbank/water-pasta-koken' },
              { '@type': 'ListItem', position: 2, name: "Rijst en risotto", url: 'https://waterfilterplatform.nl/kennisbank/water-rijst-risotto' },
              { '@type': 'ListItem', position: 3, name: "Bouillon trekken", url: 'https://waterfilterplatform.nl/kennisbank/kraanwater-bouillon-trekken' },
              { '@type': 'ListItem', position: 4, name: "Sauzen en jus", url: 'https://waterfilterplatform.nl/kennisbank/water-saus-jus' },
              { '@type': 'ListItem', position: 5, name: "Groente koken", url: 'https://waterfilterplatform.nl/kennisbank/groente-koken-water' },
              { '@type': 'ListItem', position: 6, name: "Eieren koken", url: 'https://waterfilterplatform.nl/kennisbank/eieren-koken-kalk' },
              { '@type': 'ListItem', position: 7, name: "Pizzadeeg en gist", url: 'https://waterfilterplatform.nl/kennisbank/pizzadeeg-water-gist' },
              { '@type': 'ListItem', position: 8, name: "Water voor koffie", url: 'https://waterfilterplatform.nl/kennisbank/koffie-water-tds-recept' },
              { '@type': 'ListItem', position: 9, name: "Water per theesoort", url: 'https://waterfilterplatform.nl/kennisbank/thee-soort-water' },
              { '@type': 'ListItem', position: 10, name: "Kalkvrij koken", url: 'https://waterfilterplatform.nl/kennisbank/kalkvrij-koken' },
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
            <span>Water in de keuken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Water in de keuken</h1>
          <p className="text-gray-600 text-lg">Water is in de keuken een onderschat ingredient. Van pasta tot koffie en thee: de hardheid en zuiverheid van je water beinvloeden smaak, textuur en kalkaanslag. Hieronder vind je alle onderwerpen op een rij.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Alle keuken-onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/kennisbank/water-pasta-koken', "Pasta koken", "Zout, hardheid en smaak"],
              ['/kennisbank/water-rijst-risotto', "Rijst en risotto", "Romigheid en kleefgedrag"],
              ['/kennisbank/kraanwater-bouillon-trekken', "Bouillon trekken", "Een zuivere fond"],
              ['/kennisbank/water-saus-jus', "Sauzen en jus", "Inkoken concentreert water"],
              ['/kennisbank/groente-koken-water', "Groente koken", "Kleur en textuur"],
              ['/kennisbank/eieren-koken-kalk', "Eieren koken", "Kalk op pan en schaal"],
              ['/kennisbank/pizzadeeg-water-gist', "Pizzadeeg en gist", "Gisting en glutenstructuur"],
              ['/kennisbank/koffie-water-tds-recept', "Water voor koffie", "Streef-TDS en mengen"],
              ['/kennisbank/thee-soort-water', "Water per theesoort", "Temperatuur en hardheid"],
              ['/kennisbank/kalkvrij-koken', "Kalkvrij koken", "Kalk in de keuken voorkomen"],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="text-gray-700 text-sm leading-relaxed">Zoek je een specifiek onderwerp? Bekijk de volledige <Link href="/kennisbank" className="text-[#005F8A] underline">kennisbank</Link> of overweeg <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">een osmosesysteem</Link> voor zuiver kook- en drinkwater.</p>
        </section>
      </div>
    </>
  );
}
