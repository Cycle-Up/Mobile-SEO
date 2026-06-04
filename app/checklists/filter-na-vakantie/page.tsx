import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Checklist: waterfilter na vakantie of stilstand (2026)",
  description: "Hygiene-stappen om je waterfilter en kranen veilig in gebruik te nemen na een periode van stilstand.",
  alternates: { canonical: 'https://waterfilterplatform.nl/checklists/filter-na-vakantie' },
  openGraph: { title: "Checklist: waterfilter na vakantie of stilstand (2026)", description: "Hygiene-stappen om je waterfilter en kranen veilig in gebruik te nemen na een periode van stilstand.", url: 'https://waterfilterplatform.nl/checklists/filter-na-vakantie', type: 'article', locale: 'nl_NL' },
};

export default function FilterNaVakantieChecklist() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Checklists', url: 'https://waterfilterplatform.nl/checklists' },
        { name: "Filter na vakantie", url: 'https://waterfilterplatform.nl/checklists/filter-na-vakantie' },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'ItemList',
        name: "Checklist: filter klaarmaken na vakantie of stilstand",
        url: 'https://waterfilterplatform.nl/checklists/filter-na-vakantie',
        numberOfItems: 6,
        itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Laat alle kranen doorstromen" },
              { '@type': 'ListItem', position: 2, name: "Tap het osmose-voorraadvat een paar keer leeg" },
              { '@type': 'ListItem', position: 3, name: "Controleer de filterdatum" },
              { '@type': 'ListItem', position: 4, name: "Overweeg sanitiseren" },
              { '@type': 'ListItem', position: 5, name: "Beoordeel smaak en geur" },
              { '@type': 'ListItem', position: 6, name: "Bij twijfel: vervang het filter" },
        ],
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/checklists" className="hover:text-[#005F8A]">Checklists</Link>
            <span className="mx-2">/</span>
            <span>Filter na vakantie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Checklist: filter klaarmaken na vakantie of stilstand</h1>
          <p className="text-gray-600 text-lg">Na een vakantie of langere stilstand staat er water stil in leidingen en filter. Met deze stappen neem je alles weer hygienisch in gebruik.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <ol className="space-y-3 list-none">
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Laat alle kranen doorstromen</p>
              <p className="text-sm text-gray-600 mt-1">Spoel stilstaand water uit de leidingen voor je het gebruikt.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Tap het osmose-voorraadvat een paar keer leeg</p>
              <p className="text-sm text-gray-600 mt-1">Ververs het opgeslagen water voor je het drinkt.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Controleer de filterdatum</p>
              <p className="text-sm text-gray-600 mt-1">Was het filter tijdens je afwezigheid aan vervanging toe?</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Overweeg sanitiseren</p>
              <p className="text-sm text-gray-600 mt-1">Bij langere stilstand is desinfecteren van het systeem verstandig.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Beoordeel smaak en geur</p>
              <p className="text-sm text-gray-600 mt-1">Een afwijkende smaak kan wijzen op stilstand of een verzadigd filter.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Bij twijfel: vervang het filter</p>
              <p className="text-sm text-gray-600 mt-1">Bij lange stilstand of twijfel is vervangen de veilige keuze.</p>
            </li>
        </ol>
        <p className="text-xs text-gray-400 mt-6">Dit is algemene informatie; bij een kwetsbare gezondheid is extra voorzorg en overleg met een arts verstandig.</p>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/osmose-membraan-sanitiseren', "Sanitiseren"],
              ['/kennisbank/drinkwater-immuunsysteem', "Verzwakt immuunsysteem"],
              ['/onderhoud', "Onderhoud"],
              ['/hulpmiddelen/filter-vervangdatum', "Vervangdatum-tool"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
