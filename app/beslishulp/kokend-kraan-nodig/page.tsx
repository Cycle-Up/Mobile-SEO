import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { DecisionTreeClient } from '@/components/DecisionTreeClient';
import { AffiliateCTA } from '@/components/AffiliateCTA';

export const metadata: Metadata = {
  title: "Heb ik een kokend water kraan nodig? Beslishulp",
  description: "Beslishulp die bepaalt of een kokend water kraan bij jouw gebruik past.",
  alternates: { canonical: 'https://waterfilterplatform.nl/beslishulp/kokend-kraan-nodig' },
  openGraph: { title: "Heb ik een kokend water kraan nodig? Beslishulp", description: "Beslishulp die bepaalt of een kokend water kraan bij jouw gebruik past.", url: 'https://waterfilterplatform.nl/beslishulp/kokend-kraan-nodig', type: 'website', locale: 'nl_NL' },
};

export default function KokendKraanNodigTree() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Beslishulp', url: 'https://waterfilterplatform.nl/beslishulp' },
        { name: "Heb ik een kokend water kraan nodig?", url: 'https://waterfilterplatform.nl/beslishulp/kokend-kraan-nodig' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/beslishulp" className="hover:text-[#005F8A]">Beslishulp</Link>
            <span className="mx-2">/</span>
            <span>Heb ik een kokend water kraan nodig?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Heb ik een kokend water kraan nodig?</h1>
          <p className="text-gray-600 text-lg">Bepaal of een kokend water kraan iets voor jou is.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <DecisionTreeClient kind="kokend-kraan-nodig" />

        <AffiliateCTA
          destination="vierInEen"
          campaign="kokend-water"
          content="beslishulp-kokend-kraan-nodig-cta"
          label="Bekijk de PureAqua 4-in-1 kraan"
          title="Uitkomst: een kokendwaterkraan?"
          sub="De PureAqua 4-in-1 kraan levert kokend en gefilterd water. Bekijken bij onze partner PureAqua."
        />


        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe vaak gebruik je kokend water?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Heel vaak, meerdere keren per dag</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Kokend water kraan overwegen.</strong> Bij intensief gebruik wegen gemak en ruimtebesparing op.</p>
              <Link href="/kokend-water-kraan" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Af en toe</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Een waterkoker volstaat.</strong> Bij incidenteel gebruik is een waterkoker goedkoper.</p>
              <Link href="/vergelijken/kokend-kraan-vs-waterkoker" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Ik wil ook gefilterd/bruisend</p>
              <p className="text-sm text-gray-600 mt-1"><strong>4-in-1 kraan.</strong> Combineert kokend, gefilterd en bruisend water.</p>
              <Link href="/4-in-1-kraan" className="text-sm text-[#005F8A] underline mt-1 inline-block">Lees meer</Link>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Dit is een hulpmiddel; controleer altijd de specificaties en je eigen situatie.</p>
        </section>
      </div>
    </>
  );
}
