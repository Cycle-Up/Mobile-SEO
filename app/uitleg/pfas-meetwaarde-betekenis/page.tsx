import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Wat betekent een PFAS-meetwaarde? (2026)",
  description: "Begrijp PFAS-meetwaarden: de eenheid microgram per liter en de context van de EU-norm.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/pfas-meetwaarde-betekenis' },
  openGraph: { title: "Wat betekent een PFAS-meetwaarde? (2026)", description: "Begrijp PFAS-meetwaarden: de eenheid microgram per liter en de context van de EU-norm.", url: 'https://waterfilterplatform.nl/uitleg/pfas-meetwaarde-betekenis', type: 'article', locale: 'nl_NL' },
};

export default function UitlegPfasMeetwaardeBetekenisPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Wat betekent een PFAS-meetwaarde in microgram per liter?", description: "Begrijp PFAS-meetwaarden: de eenheid microgram per liter en de context van de EU-norm.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/pfas-meetwaarde-betekenis' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "PFAS-meetwaarde", url: 'https://waterfilterplatform.nl/uitleg/pfas-meetwaarde-betekenis' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>PFAS-meetwaarde</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Wat betekent een PFAS-meetwaarde in microgram per liter?</h1>
          <p className="text-gray-600 text-lg">PFAS-waarden worden uitgedrukt in microgram per liter. Deze uitleg helpt je het getal in context te plaatsen.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">De eenheid en de norm</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Een microgram per liter is een miljoenste gram per liter water, een zeer kleine concentratie. De EU-somnorm voor PFAS is 0,1 microgram per liter.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Deze somnorm telt een groep PFAS-stoffen bij elkaar op.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">In context</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Een meetwaarde onder de norm betekent dat het water aan de wettelijke eis voldoet. Voor PFAS geldt dat er geen algemeen erkende veilige drempel is, daarom wordt de norm streng gehouden.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor gezondheidsvragen zijn het RIVM en je huisarts leidend; dit is algemene informatie.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
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
