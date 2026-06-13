import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { DecisionTreeClient } from '@/components/DecisionTreeClient';
import { AffiliateCTA } from '@/components/AffiliateCTA';

export const metadata: Metadata = {
  title: "Welke waterontharder past bij mij? Beslishulp",
  description: "Beslishulp die het juiste type waterontharder voor jouw situatie aanwijst.",
  alternates: { canonical: 'https://waterfilterplatform.nl/beslishulp/welke-waterontharder' },
  openGraph: { title: "Welke waterontharder past bij mij? Beslishulp", description: "Beslishulp die het juiste type waterontharder voor jouw situatie aanwijst.", url: 'https://waterfilterplatform.nl/beslishulp/welke-waterontharder', type: 'website', locale: 'nl_NL' },
};

export default function WelkeWaterontharderTree() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Beslishulp', url: 'https://waterfilterplatform.nl/beslishulp' },
        { name: "Welke waterontharder past bij mij?", url: 'https://waterfilterplatform.nl/beslishulp/welke-waterontharder' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/beslishulp" className="hover:text-[#005F8A]">Beslishulp</Link>
            <span className="mx-2">/</span>
            <span>Welke waterontharder past bij mij?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Welke waterontharder past bij mij?</h1>
          <p className="text-gray-600 text-lg">Vind het type waterontharder dat bij jouw situatie past.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <DecisionTreeClient kind="welke-waterontharder" />

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="beslishulp-welke-waterontharder-cta"
          label="Bekijk de waterontharders bij PureAqua"
          title="Weet je welke kant je op wilt?"
          sub="Bekijk het aanbod waterontharders bij onze partner PureAqua en vergelijk de opties."
        />

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Heb je bezwaar tegen zout en onderhoud?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Nee, geen bezwaar</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Ionenwisselaar (met zout).</strong> De bewezen keuze die de hardheid meetbaar verlaagt.</p>
              <Link href="/waterontharder" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Ja, liefst zoutvrij</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Zoutloze opties (kritisch bekijken).</strong> Zoutloze systemen verlagen de hardheid niet; het bewijs is wisselend.</p>
              <Link href="/vergelijken/zoutloze-waterontharder-vergelijken" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Alleen kalkvrij drinkwater</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Omgekeerde osmose.</strong> Voor kalkvrij drinkwater aan een tappunt is osmose geschikter.</p>
              <Link href="/omgekeerde-osmose" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Dit is een hulpmiddel; controleer altijd de specificaties en je eigen situatie.</p>
        </section>
      </div>
    </>
  );
}
