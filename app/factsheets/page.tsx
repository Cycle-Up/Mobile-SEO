import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Factsheets: kernbegrippen over water in een oogopslag',
  description:
    'Compacte factsheets over kernbegrippen: PFAS, omgekeerde osmose, waterhardheid, lood, nitraat, microplastics en actief kool, met definitie en kerncijfers.',
  alternates: { canonical: `${BASE}/factsheets` },
  openGraph: {
    title: 'Factsheets over water',
    description: 'Definitie, kerncijfers en kernvragen per kernbegrip.',
    url: `${BASE}/factsheets`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const items: [string, string, string][] = [
  ['/factsheets/pfas', 'PFAS', 'Norm, bron en filtering'],
  ['/factsheets/omgekeerde-osmose', 'Omgekeerde osmose', 'Werking en prestaties'],
  ['/factsheets/waterhardheid', 'Waterhardheid', 'dH, klassen en gevolgen'],
  ['/factsheets/lood', 'Lood in drinkwater', 'Norm en aanpak'],
  ['/factsheets/nitraat', 'Nitraat', 'Norm, bron en filtering'],
  ['/factsheets/microplastics', 'Microplastics', 'Stand van zaken'],
  ['/factsheets/actief-kool', 'Actief kool', 'Werking en grenzen'],
];

export default function FactsheetsHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Factsheets', url: `${BASE}/factsheets` },
      ]} />
      <SchemaOrg type="DefinedTermSet" definedTerms={{
        name: 'Water-factsheets (kernbegrippen)',
        url: `${BASE}/factsheets`,
        terms: [
          { name: 'PFAS', description: 'Groep zeer persistente fluorverbindingen.', url: `${BASE}/factsheets/pfas` },
          { name: 'Omgekeerde osmose', description: 'Zuivering via een semi-permeabel membraan onder druk.', url: `${BASE}/factsheets/omgekeerde-osmose` },
          { name: 'Waterhardheid', description: 'Gehalte aan calcium en magnesium, in dH.', url: `${BASE}/factsheets/waterhardheid` },
        ],
      }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Factsheets</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Factsheets</h1>
          <p className="text-gray-600 text-lg">
            Compacte factsheets per kernbegrip: een directe definitie, de kerncijfers en de
            belangrijkste vragen, citatie-klaar met bronnen.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(([href, t, d]) => (
            <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
              <p className="text-sm text-gray-500">{d}</p>
            </Link>
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mt-8">
          Meer begrippen vind je in de <Link href="/begrippenlijst" className="text-[#005F8A] underline">begrippenlijst</Link>.
        </p>
      </div>
    </>
  );
}
