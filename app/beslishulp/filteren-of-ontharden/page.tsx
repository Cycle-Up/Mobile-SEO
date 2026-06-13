import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { DecisionTreeClient } from '@/components/DecisionTreeClient';

export const metadata: Metadata = {
  title: "Filteren, ontharden of allebei? Beslishulp",
  description: "Beslishulp die uitlegt of je moet filteren, ontharden of allebei op basis van je doel.",
  alternates: { canonical: 'https://waterfilterplatform.nl/beslishulp/filteren-of-ontharden' },
  openGraph: { title: "Filteren, ontharden of allebei? Beslishulp", description: "Beslishulp die uitlegt of je moet filteren, ontharden of allebei op basis van je doel.", url: 'https://waterfilterplatform.nl/beslishulp/filteren-of-ontharden', type: 'website', locale: 'nl_NL' },
};

export default function FilterenOfOnthardenTree() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Beslishulp', url: 'https://waterfilterplatform.nl/beslishulp' },
        { name: "Filteren, ontharden of allebei?", url: 'https://waterfilterplatform.nl/beslishulp/filteren-of-ontharden' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/beslishulp" className="hover:text-[#005F8A]">Beslishulp</Link>
            <span className="mx-2">/</span>
            <span>Filteren, ontharden of allebei?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Filteren, ontharden of allebei?</h1>
          <p className="text-gray-600 text-lg">Filteren, ontharden of allebei? Bepaal wat bij jouw doel past.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <DecisionTreeClient kind="filteren-of-ontharden" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is je hoofddoel?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Kalk in huis tegengaan</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Ontharden.</strong> Een waterontharder beschermt leidingen en apparaten tegen kalk.</p>
              <Link href="/waterontharder" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Zuiver drinkwater</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Filteren (osmose).</strong> Voor zuiver drinkwater aan een tappunt is osmose de grondigste keuze.</p>
              <Link href="/omgekeerde-osmose" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Allebei</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Combineren.</strong> Een ontharder voor het huis plus osmose aan de keukenkraan.</p>
              <Link href="/vergelijken/ionenwisselaar-vs-osmose" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Dit is een hulpmiddel; controleer altijd de specificaties en je eigen situatie.</p>
        </section>
      </div>
    </>
  );
}
