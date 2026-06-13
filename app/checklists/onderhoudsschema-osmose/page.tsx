import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Onderhoudsschema omgekeerde osmose (checklist 2026)",
  description: "Complete onderhoudschecklist voor je osmosesysteem: wat doe je per maand, halfjaar en jaar, plus sanitiseren en membraan vervangen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/checklists/onderhoudsschema-osmose' },
  openGraph: { title: "Onderhoudsschema omgekeerde osmose (checklist 2026)", description: "Complete onderhoudschecklist voor je osmosesysteem: wat doe je per maand, halfjaar en jaar, plus sanitiseren en membraan vervangen.", url: 'https://waterfilterplatform.nl/checklists/onderhoudsschema-osmose', type: 'article', locale: 'nl_NL' },
};

export default function OnderhoudsschemaOsmoseChecklist() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Checklists', url: 'https://waterfilterplatform.nl/checklists' },
        { name: "Onderhoudsschema osmose", url: 'https://waterfilterplatform.nl/checklists/onderhoudsschema-osmose' },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'ItemList',
        name: "Onderhoudsschema omgekeerde osmose",
        url: 'https://waterfilterplatform.nl/checklists/onderhoudsschema-osmose',
        numberOfItems: 6,
        itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Maandelijks: controleer op lekkage" },
              { '@type': 'ListItem', position: 2, name: "Maandelijks: proef het water" },
              { '@type': 'ListItem', position: 3, name: "Elke 6-12 maanden: vervang voorfilters" },
              { '@type': 'ListItem', position: 4, name: "Jaarlijks: sanitiseer het systeem" },
              { '@type': 'ListItem', position: 5, name: "Jaarlijks: controleer de voordruk van het vat" },
              { '@type': 'ListItem', position: 6, name: "Elke 2-4 jaar: vervang het membraan" },
        ],
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/checklists" className="hover:text-[#005F8A]">Checklists</Link>
            <span className="mx-2">/</span>
            <span>Onderhoudsschema osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Onderhoudsschema omgekeerde osmose</h1>
          <p className="text-gray-600 text-lg">Houd je osmosesysteem efficient en hygienisch met dit onderhoudsschema, geordend per interval.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <ol className="space-y-3 list-none">
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Maandelijks: controleer op lekkage</p>
              <p className="text-sm text-gray-600 mt-1">Kijk onder het aanrecht of koppelingen droog zijn en de kraan goed loopt.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Maandelijks: proef het water</p>
              <p className="text-sm text-gray-600 mt-1">Een afwijkende smaak kan wijzen op een verzadigd nafilter.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Elke 6-12 maanden: vervang voorfilters</p>
              <p className="text-sm text-gray-600 mt-1">Sediment- en koolstofvoorfilters beschermen het membraan; vervang ze op tijd.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Jaarlijks: sanitiseer het systeem</p>
              <p className="text-sm text-gray-600 mt-1">Desinfecteer behuizingen en vat bij de filterwissel volgens de handleiding.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Jaarlijks: controleer de voordruk van het vat</p>
              <p className="text-sm text-gray-600 mt-1">Een te lage voordruk geeft een trage kraan.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Elke 2-4 jaar: vervang het membraan</p>
              <p className="text-sm text-gray-600 mt-1">Meet de rejectie met een TDS-meter; bij sterke daling vervangen.</p>
            </li>
        </ol>
        <p className="text-xs text-gray-400 mt-6">Volg altijd de handleiding van je specifieke systeem; intervallen verschillen per merk en waterkwaliteit.</p>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/osmose-membraan-sanitiseren', "Sanitiseren"],
              ['/hulpmiddelen/filter-vervangdatum', "Vervangdatum-tool"],
              ['/hulpmiddelen/osmose-rejectie', "Rejectie-calculator"],
              ['/onderhoud', "Onderhoud"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
