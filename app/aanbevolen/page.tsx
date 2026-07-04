import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { ProductCard } from '@/components/ProductCard';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';
import { PRODUCTS, buildProductSchema } from '@/lib/pureaqua-products.mjs';
import { ENTITIES } from '@/lib/entities.mjs';

const BASE = 'https://waterfilterplatform.nl';

// Kennisgraaf-koppeling: de concept-entiteiten waar deze producten over gaan,
// incl. hun geverifieerde sameAs-gronding (lib/entities.mjs).
const relatedEntities = [...new Set(PRODUCTS.map(p => p.relatedEntity))]
  .map(key => (ENTITIES as Record<string, { name: string; url: string; sameAs?: string[] }>)[key])
  .filter(Boolean)
  .map(e => ({ '@type': 'Thing', name: e.name, url: e.url, ...(e.sameAs ? { sameAs: e.sameAs } : {}) }));

export const metadata: Metadata = {
  title: 'Aanbevolen waterfilters en waterontharders (via PureAqua)',
  description:
    'De producten die wij aanraden via partner PureAqua: 4-in-1 kraan, The Source osmosesysteem, Countertop RO, Joep en AquaCell waterontharders en de TDS-meter.',
  alternates: { canonical: `${BASE}/aanbevolen` },
  openGraph: {
    title: 'Aanbevolen waterfilters en waterontharders',
    description: 'Onze aanbevelingen per situatie, verkrijgbaar via partner PureAqua.',
    url: `${BASE}/aanbevolen`,
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function AanbevolenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Aanbevolen', url: `${BASE}/aanbevolen` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Aanbevolen waterfilters en waterontharders',
        url: `${BASE}/aanbevolen`,
        inLanguage: 'nl-NL',
        isPartOf: { '@id': `${BASE}/#website` },
        mentions: relatedEntities,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: PRODUCTS.length,
          itemListElement: PRODUCTS.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: buildProductSchema(p),
          })),
        },
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Aanbevolen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Aanbevolen producten
          </h1>
          <p className="text-gray-600 text-lg mb-3">
            De snelste route van vraag naar oplossing: per situatie het product dat wij via onze
            partner PureAqua aanraden. Kokend en gefilterd water, osmose met of zonder installatie,
            hard water aanpakken of eerst je eigen water testen.
          </p>
          <AffiliateDisclosure />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map(p => (
            <ProductCard key={p.key} product={p} content={`aanbevolen-${p.key.toLowerCase()}`} />
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe wij aanbevelen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            WaterfilterPlatform is een onafhankelijk informatieplatform. Onze uitleg, vergelijkingen
            en reviews schrijven we op basis van openbare bronnen en specificaties, los van
            commerciele afspraken. Voor wie na het lezen wil kopen, verwijzen we naar onze partner
            PureAqua; daarvoor kunnen wij een vergoeding ontvangen. Twijfel je nog welk type bij je
            past? Begin dan bij de <Link href="/keuzehulp" className="text-[#005F8A] underline">keuzehulp</Link>,
            de <Link href="/beslishulp" className="text-[#005F8A] underline">beslishulp</Link> of
            de <Link href="/hulpmiddelen" className="text-[#005F8A] underline">rekentools</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Prijzen tonen we alleen als ze bij publicatie geverifieerd zijn; de actuele prijs en
            voorraad zie je altijd bij PureAqua zelf. Lees ook onze{' '}
            <Link href="/methodologie" className="text-[#005F8A] underline">methodologie</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Eerst verder verdiepen?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/beste-osmosefilter-2026', 'Beste osmosefilter 2026'],
              ['/beste-waterontharder-2026', 'Beste waterontharder 2026'],
              ['/beste-kokend-water-kraan-2026', 'Beste kokendwaterkraan 2026'],
              ['/vergelijken', 'Alle vergelijkingen'],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
