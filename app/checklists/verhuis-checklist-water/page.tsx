import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Verhuis-checklist water: nieuwe woning (2026)",
  description: "Checklist voor water bij een verhuizing: hardheid opzoeken, leidingen doorspoelen, loodrisico checken en filters afstemmen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/checklists/verhuis-checklist-water' },
  openGraph: { title: "Verhuis-checklist water: nieuwe woning (2026)", description: "Checklist voor water bij een verhuizing: hardheid opzoeken, leidingen doorspoelen, loodrisico checken en filters afstemmen.", url: 'https://waterfilterplatform.nl/checklists/verhuis-checklist-water', type: 'article', locale: 'nl_NL' },
};

export default function VerhuisChecklistWaterChecklist() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Checklists', url: 'https://waterfilterplatform.nl/checklists' },
        { name: "Verhuischecklist", url: 'https://waterfilterplatform.nl/checklists/verhuis-checklist-water' },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'ItemList',
        name: "Verhuis-checklist water",
        url: 'https://waterfilterplatform.nl/checklists/verhuis-checklist-water',
        numberOfItems: 6,
        itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Spoel de leidingen door" },
              { '@type': 'ListItem', position: 2, name: "Zoek de waterhardheid op" },
              { '@type': 'ListItem', position: 3, name: "Check op loden leidingen" },
              { '@type': 'ListItem', position: 4, name: "Stem je filter af" },
              { '@type': 'ListItem', position: 5, name: "Controleer apparaten op kalk" },
              { '@type': 'ListItem', position: 6, name: "Noteer onderhoudsdata" },
        ],
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/checklists" className="hover:text-[#005F8A]">Checklists</Link>
            <span className="mx-2">/</span>
            <span>Verhuischecklist</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Verhuis-checklist water</h1>
          <p className="text-gray-600 text-lg">Net verhuisd? Loop deze waterpunten langs om goed te starten in je nieuwe woning.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <ol className="space-y-3 list-none">
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Spoel de leidingen door</p>
              <p className="text-sm text-gray-600 mt-1">Laat na leegstand elke kraan goed doorstromen voor je het water gebruikt.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Zoek de waterhardheid op</p>
              <p className="text-sm text-gray-600 mt-1">Bepaal de dH voor je nieuwe gemeente; stem ontkalken of een ontharder daarop af.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Check op loden leidingen</p>
              <p className="text-sm text-gray-600 mt-1">In woningen van voor 1960 kan lood voorkomen; laat dan eerst doorstromen of filteren.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Stem je filter af</p>
              <p className="text-sm text-gray-600 mt-1">Werkt je bestaande filter nog voor deze waterkwaliteit?</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Controleer apparaten op kalk</p>
              <p className="text-sm text-gray-600 mt-1">Stel de vaatwasser-waterhardheid in op de nieuwe waarde.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Noteer onderhoudsdata</p>
              <p className="text-sm text-gray-600 mt-1">Begin een schema voor filtervervanging in de nieuwe woning.</p>
            </li>
        </ol>
        <p className="text-xs text-gray-400 mt-6">De exacte hardheid en kwaliteit vraag je op bij je drinkwaterbedrijf.</p>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/waterhardheid', "Waterhardheid per gemeente"],
              ['/kennisbank/loodvrij-leidingwater', "Lood in leidingen"],
              ['/kennisbank/waterhardheid-per-provincie', "Hardheid per provincie"],
              ['/hulpmiddelen/kalkrisico', "Kalkrisico-indicator"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
