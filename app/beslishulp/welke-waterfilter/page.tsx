import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { DecisionTreeClient } from '@/components/DecisionTreeClient';

export const metadata: Metadata = {
  title: "Welke waterfilter past bij mij? Beslishulp",
  description: "Beslishulp die je in een paar vragen naar het juiste type waterfilter leidt op basis van je doel.",
  alternates: { canonical: 'https://waterfilterplatform.nl/beslishulp/welke-waterfilter' },
  openGraph: { title: "Welke waterfilter past bij mij? Beslishulp", description: "Beslishulp die je in een paar vragen naar het juiste type waterfilter leidt op basis van je doel.", url: 'https://waterfilterplatform.nl/beslishulp/welke-waterfilter', type: 'website', locale: 'nl_NL' },
};

export default function WelkeWaterfilterTree() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Beslishulp', url: 'https://waterfilterplatform.nl/beslishulp' },
        { name: "Welke waterfilter past bij mij?", url: 'https://waterfilterplatform.nl/beslishulp/welke-waterfilter' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/beslishulp" className="hover:text-[#005F8A]">Beslishulp</Link>
            <span className="mx-2">/</span>
            <span>Welke waterfilter past bij mij?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Welke waterfilter past bij mij?</h1>
          <p className="text-gray-600 text-lg">Beantwoord de vragen om te zien welk type waterfilter bij jouw doel past.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <DecisionTreeClient kind="welke-waterfilter" />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat wil je vooral aanpakken?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Alleen smaak en chloor</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Filterkan of koolstoffilter.</strong> Voor smaak en chloor volstaat actief kool. Goedkoop en simpel.</p>
              <Link href="/filterkan" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Lood, nitraat of PFAS</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Omgekeerde osmose.</strong> Voor gezondheidsrelevante opgeloste stoffen is osmose de grondigste keuze.</p>
              <Link href="/omgekeerde-osmose" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Kalk in huis</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Waterontharder.</strong> Voor kalk door het hele huis is een ionenwisselaar de bewezen keuze.</p>
              <Link href="/waterontharder" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Ik weet het niet zeker</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Keuzehulp.</strong> Doorloop de uitgebreide keuzehulp voor een advies op maat.</p>
              <Link href="/keuzehulp" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Dit is een hulpmiddel; controleer altijd de specificaties en je eigen situatie.</p>
        </section>
      </div>
    </>
  );
}
