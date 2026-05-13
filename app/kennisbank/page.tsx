import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kennisbank — waterfilters, osmose en waterkwaliteit',
  description:
    'Diepgaande artikelen over omgekeerde osmose, waterhardheid, kokend water kranen en waterkwaliteit in Nederland.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kennisbank' },
};

const artikelen = [
  {
    slug: 'osmose-water-drinken',
    titel: 'Osmose water drinken — is het gezond?',
    samenvatting: 'Is osmose water drinken gezond? We bespreken de effecten, de mineralen die ontbreken, en wanneer een remineralisatiefilter zinvol is.',
    categorie: 'Osmose',
    datum: '15 januari 2026',
  },
];

export default function KennisbankPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kennisbank', url: 'https://waterfilterplatform.nl/kennisbank' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Kennisbank</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Kennisbank</h1>
          <p className="text-gray-600 text-lg">
            Diepgaande artikelen over waterfilters, waterkwaliteit en alles wat je wilt weten over osmose water en kokend water kranen.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-4">
          {artikelen.map(a => (
            <Link
              key={a.slug}
              href={`/kennisbank/${a.slug}`}
              className="group block border border-gray-100 rounded-2xl p-5 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-[#E0F2FE] text-[#005F8A] px-2 py-0.5 rounded-full font-medium">{a.categorie}</span>
                <span className="text-xs text-gray-400">{a.datum}</span>
              </div>
              <h2 className="font-bold text-gray-900 group-hover:text-[#005F8A] transition-colors mb-1">{a.titel}</h2>
              <p className="text-sm text-gray-500">{a.samenvatting}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
