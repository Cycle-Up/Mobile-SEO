import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { DecisionTreeClient } from '@/components/DecisionTreeClient';

export const metadata: Metadata = {
  title: "Welke reisfilter past bij mij? Beslishulp",
  description: "Beslishulp die de juiste reisfilter aanwijst op basis van je bestemming.",
  alternates: { canonical: 'https://waterfilterplatform.nl/beslishulp/reisfilter' },
  openGraph: { title: "Welke reisfilter past bij mij? Beslishulp", description: "Beslishulp die de juiste reisfilter aanwijst op basis van je bestemming.", url: 'https://waterfilterplatform.nl/beslishulp/reisfilter', type: 'website', locale: 'nl_NL' },
};

export default function ReisfilterTree() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Beslishulp', url: 'https://waterfilterplatform.nl/beslishulp' },
        { name: "Welke reisfilter?", url: 'https://waterfilterplatform.nl/beslishulp/reisfilter' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/beslishulp" className="hover:text-[#005F8A]">Beslishulp</Link>
            <span className="mx-2">/</span>
            <span>Welke reisfilter?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Welke reisfilter?</h1>
          <p className="text-gray-600 text-lg">Welke reisfilter past bij jouw bestemming?</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <DecisionTreeClient kind="reisfilter" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar ga je naartoe?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Binnen de EU (veilig kraanwater)</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Meestal geen filter nodig.</strong> In veel EU-landen is kraanwater veilig; check lokaal.</p>
              <Link href="/kennisbank/waterfilter-reizen-buitenland" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Buiten de EU / onzeker water</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Reisfilter of UV-pen.</strong> Een draagbaar filter of UV-behandeling tegen micro-organismen.</p>
              <Link href="/reisfilter" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Camper of boot</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Tank- en reisfilter.</strong> Let op tankhygiene en een geschikt draagbaar filter.</p>
              <Link href="/kennisbank/waterontharder-weg-op-vakantie" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Dit is een hulpmiddel; controleer altijd de specificaties en je eigen situatie.</p>
        </section>
      </div>
    </>
  );
}
