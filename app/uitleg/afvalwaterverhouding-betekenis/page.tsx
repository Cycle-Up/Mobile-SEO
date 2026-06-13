import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Wat betekent de afvalwaterverhouding van osmose? (2026)",
  description: "Begrijp de afvalwaterverhouding van een osmosesysteem en wat 1:1 of 1:3 betekent voor je waterverbruik.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/afvalwaterverhouding-betekenis' },
  openGraph: { title: "Wat betekent de afvalwaterverhouding van osmose? (2026)", description: "Begrijp de afvalwaterverhouding van een osmosesysteem en wat 1:1 of 1:3 betekent voor je waterverbruik.", url: 'https://waterfilterplatform.nl/uitleg/afvalwaterverhouding-betekenis', type: 'article', locale: 'nl_NL' },
};

export default function UitlegAfvalwaterverhoudingBetekenisPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Wat betekent de afvalwaterverhouding (1:1, 1:3)?", description: "Begrijp de afvalwaterverhouding van een osmosesysteem en wat 1:1 of 1:3 betekent voor je waterverbruik.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/afvalwaterverhouding-betekenis' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Afvalwaterverhouding", url: 'https://waterfilterplatform.nl/uitleg/afvalwaterverhouding-betekenis' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Afvalwaterverhouding</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Wat betekent de afvalwaterverhouding (1:1, 1:3)?</h1>
          <p className="text-gray-600 text-lg">Bij omgekeerde osmose hoor je over de afvalwaterverhouding. Wat betekent 1:1 of 1:3 voor jou?</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat de verhouding zegt</h2>
          <p className="text-gray-700 leading-relaxed mb-3">De verhouding geeft aan hoeveel liter concentraat (afvalwater) wordt afgevoerd per liter gefilterd water. Bij 1:1 evenveel, bij 1:3 driemaal zoveel.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Moderne systemen halen vaak 1:1 of beter; oudere systemen waren minder efficient.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Impact op je verbruik</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Hoe ongunstiger de verhouding, hoe meer water er als concentraat wegloopt. Een boosterpomp kan de opbrengst verbeteren.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Bereken je verbruik met de afvalwater-calculator.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/hulpmiddelen/osmose-afvalwater', "Afvalwater-calculator"],
              ['/kennisbank/permeaat-concentraat', "Permeaat en concentraat"],
              ['/kennisbank/osmose-filter-afvalwater', "Osmose afvalwater"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
