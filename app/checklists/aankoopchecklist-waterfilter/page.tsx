import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Aankoopchecklist waterfilter: waar op letten (2026)",
  description: "Checklist met aandachtspunten voor de aankoop van een waterfilter: doel, certificering, capaciteit, kosten en ruimte.",
  alternates: { canonical: 'https://waterfilterplatform.nl/checklists/aankoopchecklist-waterfilter' },
  openGraph: { title: "Aankoopchecklist waterfilter: waar op letten (2026)", description: "Checklist met aandachtspunten voor de aankoop van een waterfilter: doel, certificering, capaciteit, kosten en ruimte.", url: 'https://waterfilterplatform.nl/checklists/aankoopchecklist-waterfilter', type: 'article', locale: 'nl_NL' },
};

export default function AankoopchecklistWaterfilterChecklist() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Checklists', url: 'https://waterfilterplatform.nl/checklists' },
        { name: "Aankoopchecklist", url: 'https://waterfilterplatform.nl/checklists/aankoopchecklist-waterfilter' },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'ItemList',
        name: "Aankoopchecklist waterfilter",
        url: 'https://waterfilterplatform.nl/checklists/aankoopchecklist-waterfilter',
        numberOfItems: 6,
        itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Bepaal je doel" },
              { '@type': 'ListItem', position: 2, name: "Check de certificering" },
              { '@type': 'ListItem', position: 3, name: "Controleer de capaciteit" },
              { '@type': 'ListItem', position: 4, name: "Reken de jaarlijkse kosten" },
              { '@type': 'ListItem', position: 5, name: "Meet de ruimte en aansluiting" },
              { '@type': 'ListItem', position: 6, name: "Vergelijk onderhoud" },
        ],
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/checklists" className="hover:text-[#005F8A]">Checklists</Link>
            <span className="mx-2">/</span>
            <span>Aankoopchecklist</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Aankoopchecklist waterfilter</h1>
          <p className="text-gray-600 text-lg">Loop deze punten langs voordat je een waterfilter koopt, zodat je de juiste keuze maakt.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <ol className="space-y-3 list-none">
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Bepaal je doel</p>
              <p className="text-sm text-gray-600 mt-1">Smaak/chloor, kalk, of gezondheidsrelevante stoffen zoals lood, nitraat, PFAS?</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Check de certificering</p>
              <p className="text-sm text-gray-600 mt-1">Let op NSF/ANSI (42/53/58) en Kiwa voor de specifieke stof die je wilt aanpakken.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Controleer de capaciteit</p>
              <p className="text-sm text-gray-600 mt-1">Past de dagopbrengst en filterlevensduur bij je verbruik?</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Reken de jaarlijkse kosten</p>
              <p className="text-sm text-gray-600 mt-1">Tel filters, eventueel zout en (bij osmose) afvalwater mee.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Meet de ruimte en aansluiting</p>
              <p className="text-sm text-gray-600 mt-1">Past het onder het aanrecht? Is er een stopcontact nodig?</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Vergelijk onderhoud</p>
              <p className="text-sm text-gray-600 mt-1">Hoe vaak en hoe makkelijk vervang je filters?</p>
            </li>
        </ol>
        <p className="text-xs text-gray-400 mt-6">Vergelijk altijd de gecertificeerde productspecificatie; een keurmerk zonder nummer en stof zegt weinig.</p>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/keuzehulp', "Keuzehulp"],
              ['/data/keurmerken', "Keurmerken-register"],
              ['/kennisbank/nsf-ansi-keurmerken', "NSF/ANSI uitgelegd"],
              ['/omgekeerde-osmose/kopen', "Osmose kopen"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
