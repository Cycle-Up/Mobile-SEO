import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "PFAS factsheet: norm, bron en filtering (2026)",
  description: "Factsheet PFAS: wat het is, de EU-norm van 0,1 microgram per liter, herkomst en welke filters het verwijderen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/factsheets/pfas' },
  openGraph: { title: "PFAS factsheet: norm, bron en filtering (2026)", description: "Factsheet PFAS: wat het is, de EU-norm van 0,1 microgram per liter, herkomst en welke filters het verwijderen.", url: 'https://waterfilterplatform.nl/factsheets/pfas', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat is de PFAS-norm?", answer: "De EU-somnorm is 0,1 microgram per liter, volledig van kracht in 2026." },
  { question: "Verwijdert osmose PFAS?", answer: "Ja, doorgaans 90 tot 99 procent. Een geschikt actief-koolfilter een deel." },
  { question: "Is PFAS gevaarlijk?", answer: "Er is geen algemeen erkende veilige drempel; daarom is de norm streng. Voor gezondheidsvragen is je huisarts leidend." },
];

export default function PfasFactsheet() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="DefinedTermSet" definedTerms={{
        name: "PFAS - factsheet",
        url: 'https://waterfilterplatform.nl/factsheets/pfas',
        terms: [{ name: "PFAS", description: "PFAS is een groep zeer persistente fluorverbindingen (forever chemicals) die in het milieu en soms in water voorkomen.", url: "https://waterfilterplatform.nl/drinkwaternormen/pfas" }],
      }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Factsheets', url: 'https://waterfilterplatform.nl/factsheets' },
        { name: "PFAS", url: 'https://waterfilterplatform.nl/factsheets/pfas' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/factsheets" className="hover:text-[#005F8A]">Factsheets</Link>
            <span className="mx-2">/</span>
            <span>PFAS</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">PFAS: factsheet</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            PFAS is een groep zeer persistente fluorverbindingen (forever chemicals) die in het milieu en soms in water voorkomen.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kerncijfers</h2>
          <div className="bg-white border border-gray-100 rounded-xl">
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">EU-somnorm</span><span className="font-semibold text-[#003F5C]">0,1 microgram/L</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Volledig van kracht</span><span className="font-semibold text-[#003F5C]">2026</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Herkomst</span><span className="font-semibold text-[#003F5C]">industrie en milieu</span></div>
              <div className="flex justify-between px-4 py-2.5 text-sm border-b border-gray-100"><span className="text-gray-600">Beste verwijdering</span><span className="font-semibold text-[#003F5C]">omgekeerde osmose (90-99%)</span></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Bron: EU 2020/2184, RIVM. Cijfers indicatief/officieel; raadpleeg de bron voor exacte waarden.</p>
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
              ['/drinkwaternormen/pfas', "PFAS-norm"],
              ['/kennisbank/pfas-drinkwater', "PFAS in drinkwater"],
              ['/antwoorden/verwijdert-osmose-pfas', "Verwijdert osmose PFAS?"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
