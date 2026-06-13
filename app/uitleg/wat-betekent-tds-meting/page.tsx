import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Wat betekent jouw TDS-meting? (2026)",
  description: "Interpreteer je TDS-waarde: wat zegt het getal wel en niet over je water?",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/wat-betekent-tds-meting' },
  openGraph: { title: "Wat betekent jouw TDS-meting? (2026)", description: "Interpreteer je TDS-waarde: wat zegt het getal wel en niet over je water?", url: 'https://waterfilterplatform.nl/uitleg/wat-betekent-tds-meting', type: 'article', locale: 'nl_NL' },
};

export default function UitlegWatBetekentTdsMetingPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Wat betekent jouw TDS-meting?", description: "Interpreteer je TDS-waarde: wat zegt het getal wel en niet over je water?", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/wat-betekent-tds-meting' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Wat betekent TDS", url: 'https://waterfilterplatform.nl/uitleg/wat-betekent-tds-meting' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Wat betekent TDS</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Wat betekent jouw TDS-meting?</h1>
          <p className="text-gray-600 text-lg">Een TDS-meter geeft een getal in mg/L. Deze uitleg helpt je het te interpreteren, en de valkuilen te vermijden.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat TDS meet</h2>
          <p className="text-gray-700 leading-relaxed mb-3">TDS staat voor het totaal aan opgeloste stoffen. Nederlands kraanwater zit vaak rond 150-500 mg/L, osmosewater rond 0-25.</p>
          <p className="text-gray-700 leading-relaxed mb-3">De meter meet eigenlijk de geleidbaarheid en rekent die om naar een geschatte TDS.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat TDS niet zegt</h2>
          <p className="text-gray-700 leading-relaxed mb-3">TDS zegt niets over welke stoffen het zijn of of ze schadelijk zijn. Een hoge TDS is meestal gewoon mineraalrijk water, geen gevaar.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Gebruik TDS om de werking van een osmosesysteem te volgen, niet als veiligheidsoordeel.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/tds-water', "TDS uitgelegd"],
              ['/kennisbank/geleidbaarheid-ec-water', "Geleidbaarheid (EC)"],
              ['/hulpmiddelen/osmose-rejectie', "Rejectie-calculator"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
