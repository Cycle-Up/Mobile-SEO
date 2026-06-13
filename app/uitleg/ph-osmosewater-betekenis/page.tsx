import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Wat betekent de pH van osmosewater? (2026)",
  description: "Begrijp de pH van osmosewater: waarom het licht zuur kan zijn en wat remineralisatie doet.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/ph-osmosewater-betekenis' },
  openGraph: { title: "Wat betekent de pH van osmosewater? (2026)", description: "Begrijp de pH van osmosewater: waarom het licht zuur kan zijn en wat remineralisatie doet.", url: 'https://waterfilterplatform.nl/uitleg/ph-osmosewater-betekenis', type: 'article', locale: 'nl_NL' },
};

export default function UitlegPhOsmosewaterBetekenisPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Wat betekent de pH van je (osmose)water?", description: "Begrijp de pH van osmosewater: waarom het licht zuur kan zijn en wat remineralisatie doet.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/ph-osmosewater-betekenis' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "pH van osmosewater", url: 'https://waterfilterplatform.nl/uitleg/ph-osmosewater-betekenis' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>pH van osmosewater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Wat betekent de pH van je (osmose)water?</h1>
          <p className="text-gray-600 text-lg">Osmosewater heeft vaak een licht zure pH. Deze uitleg legt uit wat dat betekent en of het erg is.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Waarom osmosewater licht zuur kan zijn</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Door het ontbreken van mineralen neemt osmosewater makkelijk CO2 uit de lucht op, wat de pH iets verlaagt (richting licht zuur).</p>
          <p className="text-gray-700 leading-relaxed mb-3">Dit is normaal en zegt weinig over de veiligheid; het lichaam reguleert de eigen zuurgraad zelf.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Remineralisatie</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Een remineralisatiestap voegt calcium en magnesium toe, wat de smaak verbetert en de pH richting neutraal brengt.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor gezondheidsvragen is een arts of dietist leidend; dit is algemene informatie.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/osmose-water/remineralisatie', "Remineralisatie"],
              ['/kennisbank/mineraalarm-water-langdurig', "Mineraalarm water"],
              ['/omgekeerde-osmose', "Omgekeerde osmose"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
