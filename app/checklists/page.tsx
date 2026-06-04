import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Checklists: onderhoud, aankoop en water thuis',
  description:
    'Praktische checklists voor water: onderhoudsschema osmose, jaarchecklist waterontharder, aankoopchecklist, waterkwaliteit beoordelen en meer.',
  alternates: { canonical: `${BASE}/checklists` },
  openGraph: {
    title: 'Water-checklists',
    description: 'Onderhoud, aankoop en waterkwaliteit in praktische checklists.',
    url: `${BASE}/checklists`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const items: [string, string, string][] = [
  ['/checklists/onderhoudsschema-osmose', 'Onderhoudsschema osmose', 'Per maand, halfjaar en jaar'],
  ['/checklists/jaarchecklist-waterontharder', 'Jaarchecklist waterontharder', 'Zout, hars, instellingen'],
  ['/checklists/aankoopchecklist-waterfilter', 'Aankoopchecklist waterfilter', 'Waar op letten'],
  ['/checklists/waterkwaliteit-beoordelen', 'Waterkwaliteit beoordelen', 'Zelf een indruk krijgen'],
  ['/checklists/verhuis-checklist-water', 'Verhuis-checklist water', 'Nieuwe woning'],
  ['/checklists/filter-na-vakantie', 'Filter na vakantie', 'Hygiene na stilstand'],
  ['/checklists/kokend-kraan-kinderveiligheid', 'Kokend kraan: kinderveiligheid', 'Veilig met kinderen'],
];

export default function ChecklistsHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Checklists', url: `${BASE}/checklists` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Water-checklists',
        url: `${BASE}/checklists`,
        inLanguage: 'nl-NL',
        isPartOf: { '@id': `${BASE}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: items.length,
          itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c[1], url: `${BASE}${c[0]}` })),
        },
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Checklists</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Water-checklists</h1>
          <p className="text-gray-600 text-lg">
            Praktische, gestructureerde checklists voor onderhoud, aankoop en het beoordelen van je
            water. Handig om af te vinken en te bewaren.
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
      </div>
    </>
  );
}
