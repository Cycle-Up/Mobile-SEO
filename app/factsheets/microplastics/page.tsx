import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Microplastics factsheet: stand van zaken en filtering (2026)",
  description: "Factsheet microplastics: wat het is, wat het onderzoek zegt en welke filters ze tegenhouden.",
  alternates: { canonical: 'https://waterfilterplatform.nl/factsheets/microplastics' },
  openGraph: { title: "Microplastics factsheet: stand van zaken en filtering (2026)", description: "Factsheet microplastics: wat het is, wat het onderzoek zegt en welke filters ze tegenhouden.", url: 'https://waterfilterplatform.nl/factsheets/microplastics', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Zitten er microplastics in kraanwater?", answer: "Microplastics zijn wereldwijd aangetoond; de gezondheidseffecten zijn nog in onderzoek." },
  { question: "Welke filter helpt?", answer: "Ultrafiltratie en omgekeerde osmose houden microplastics vrijwel volledig tegen." },
  { question: "Is er een norm?", answer: "Nog geen harde drinkwaternorm; WHO en RIVM volgen het onderwerp." },
];

export default function MicroplasticsFactsheet() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="DefinedTermSet" definedTerms={{
        name: "Microplastics - factsheet",
        url: 'https://waterfilterplatform.nl/factsheets/microplastics',
        terms: [{ name: "Microplastics", description: "Microplastics zijn kunststofdeeltjes kleiner dan 5 millimeter die in het milieu en soms in water voorkomen.", url: "https://waterfilterplatform.nl/drinkwaternormen/microplastics" }],
      }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Factsheets', url: 'https://waterfilterplatform.nl/factsheets' },
        { name: "Microplastics", url: 'https://waterfilterplatform.nl/factsheets/microplastics' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/factsheets" className="hover:text-[#005F8A]">Factsheets</Link>
            <span className="mx-2">/</span>
            <span>Microplastics</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Microplastics: factsheet</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Microplastics zijn kunststofdeeltjes kleiner dan 5 millimeter die in het milieu en soms in water voorkomen.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kerncijfers</h2>
          <div className="bg-white border border-gray-100 rounded-xl">
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Definitie</span><span className="font-semibold text-[#003F5C]">kunststof kleiner dan 5 mm</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Norm</span><span className="font-semibold text-[#003F5C]">nog geen harde drinkwaternorm</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Onderzoek</span><span className="font-semibold text-[#003F5C]">lopend (WHO/RIVM)</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Verwijdering</span><span className="font-semibold text-[#003F5C]">ultrafiltratie, osmose</span></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Bron: WHO, RIVM. Cijfers indicatief/officieel; raadpleeg de bron voor exacte waarden.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Kernvragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{item.question}<span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span></summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/drinkwaternormen/microplastics', "Microplastics-norm"],
              ['/kennisbank/microplastics-drinkwater', "Microplastics in drinkwater"],
              ['/data/verwijdering-matrix', "Verwijdering-matrix"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
