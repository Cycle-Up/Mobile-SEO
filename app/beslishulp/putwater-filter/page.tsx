import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { DecisionTreeClient } from '@/components/DecisionTreeClient';

export const metadata: Metadata = {
  title: "Welke filter voor mijn putwater? Beslishulp",
  description: "Beslishulp voor put- en bronwater op basis van het belangrijkste probleem.",
  alternates: { canonical: 'https://waterfilterplatform.nl/beslishulp/putwater-filter' },
  openGraph: { title: "Welke filter voor mijn putwater? Beslishulp", description: "Beslishulp voor put- en bronwater op basis van het belangrijkste probleem.", url: 'https://waterfilterplatform.nl/beslishulp/putwater-filter', type: 'website', locale: 'nl_NL' },
};

export default function PutwaterFilterTree() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Beslishulp', url: 'https://waterfilterplatform.nl/beslishulp' },
        { name: "Welke filter voor putwater?", url: 'https://waterfilterplatform.nl/beslishulp/putwater-filter' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/beslishulp" className="hover:text-[#005F8A]">Beslishulp</Link>
            <span className="mx-2">/</span>
            <span>Welke filter voor putwater?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Welke filter voor putwater?</h1>
          <p className="text-gray-600 text-lg">Welke behandeling past bij jouw put- of bronwater?</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <DecisionTreeClient kind="putwater-filter" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is het belangrijkste probleem?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Bacterien / microbiologisch</p>
              <p className="text-sm text-gray-600 mt-1"><strong>UV-sterilisatie.</strong> UV doodt micro-organismen; eerst troebelheid wegfilteren.</p>
              <Link href="/vergelijken/uv-vs-osmose" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Nitraat / opgeloste stoffen</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Omgekeerde osmose.</strong> Osmose verwijdert nitraat en andere opgeloste stoffen.</p>
              <Link href="/omgekeerde-osmose" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">IJzer / mangaan (bruine aanslag)</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Ontijzering.</strong> Een ontijzeringsfilter pakt ijzer en mangaan aan.</p>
              <Link href="/kennisbank/water-ijzer-ontijzering" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Dit is een hulpmiddel; controleer altijd de specificaties en je eigen situatie.</p>
        </section>
      </div>
    </>
  );
}
