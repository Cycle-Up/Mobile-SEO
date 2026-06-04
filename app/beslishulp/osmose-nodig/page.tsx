import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { DecisionTreeClient } from '@/components/DecisionTreeClient';

export const metadata: Metadata = {
  title: "Heb ik omgekeerde osmose nodig? Beslishulp",
  description: "Beslishulp die bepaalt of omgekeerde osmose voor jouw situatie zinvol is.",
  alternates: { canonical: 'https://waterfilterplatform.nl/beslishulp/osmose-nodig' },
  openGraph: { title: "Heb ik omgekeerde osmose nodig? Beslishulp", description: "Beslishulp die bepaalt of omgekeerde osmose voor jouw situatie zinvol is.", url: 'https://waterfilterplatform.nl/beslishulp/osmose-nodig', type: 'website', locale: 'nl_NL' },
};

export default function OsmoseNodigTree() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Beslishulp', url: 'https://waterfilterplatform.nl/beslishulp' },
        { name: "Heb ik omgekeerde osmose nodig?", url: 'https://waterfilterplatform.nl/beslishulp/osmose-nodig' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/beslishulp" className="hover:text-[#005F8A]">Beslishulp</Link>
            <span className="mx-2">/</span>
            <span>Heb ik omgekeerde osmose nodig?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Heb ik omgekeerde osmose nodig?</h1>
          <p className="text-gray-600 text-lg">Bepaal of omgekeerde osmose voor jou zinvol is.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <DecisionTreeClient kind="osmose-nodig" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wil je lood, nitraat, PFAS of zeer zuiver water?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Ja, een of meer daarvan</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Osmose is zinvol.</strong> Omgekeerde osmose verwijdert deze opgeloste stoffen grondig.</p>
              <Link href="/omgekeerde-osmose" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Nee, alleen smaak/chloor</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Osmose is overkill.</strong> Een koolstoffilter of filterkan volstaat voor smaak en chloor.</p>
              <Link href="/filtertechnieken/actief-kool" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Alleen kalk</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Kies een ontharder.</strong> Voor kalk in huis is een waterontharder logischer dan osmose.</p>
              <Link href="/waterontharder" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Dit is een hulpmiddel; controleer altijd de specificaties en je eigen situatie.</p>
        </section>
      </div>
    </>
  );
}
