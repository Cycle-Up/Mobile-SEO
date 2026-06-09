import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { SearchClient } from '@/components/SearchClient';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Zoeken op WaterfilterPlatform',
  description:
    'Doorzoek alle artikelen, vergelijkingen, rekentools, datasets en gidsen over waterfilters, omgekeerde osmose, waterhardheid en kokendwaterkranen.',
  alternates: { canonical: `${BASE}/zoeken` },
  openGraph: {
    title: 'Zoeken op WaterfilterPlatform',
    description: 'Doorzoek alles over waterfilters, omgekeerde osmose en waterhardheid.',
    url: `${BASE}/zoeken`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const popular: [string, string][] = [
  ['/omgekeerde-osmose', 'Omgekeerde osmose'],
  ['/waterhardheid', 'Waterhardheid per gemeente'],
  ['/beste-osmosefilter-2026', 'Beste osmosefilter 2026'],
  ['/kokend-water-kraan', 'Kokendwaterkraan'],
  ['/factsheets/pfas', 'PFAS-factsheet'],
  ['/hulpmiddelen', 'Rekentools'],
  ['/vragen', 'Vraag-clusters'],
  ['/data', 'Open datasets'],
];

export default function ZoekenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Zoeken', url: `${BASE}/zoeken` },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Zoeken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Zoeken</h1>
          <p className="text-gray-600 text-lg mb-6">
            Doorzoek alle artikelen, vergelijkingen, rekentools, datasets, factsheets en gidsen op
            het platform. Typ een onderwerp, merk of vraag.
          </p>
          <Suspense fallback={<div className="h-16 rounded-2xl border-2 border-[#BAE6FD]" />}>
            <SearchClient />
          </Suspense>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Populaire onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {popular.map(([href, t]) => (
            <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mt-8">
          Liever bladeren? Bekijk de <Link href="/onderwerpen" className="text-[#005F8A] underline">onderwerpen</Link>,
          de <Link href="/kennisbank" className="text-[#005F8A] underline">kennisbank</Link> of de
          {' '}<Link href="/begrippenlijst" className="text-[#005F8A] underline">begrippenlijst</Link>.
        </p>
      </div>
    </>
  );
}
