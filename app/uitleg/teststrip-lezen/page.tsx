import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Hoe lees je een water-teststrip? (2026)",
  description: "Leer een teststrip voor water aflezen en interpreteren, plus de beperkingen ervan.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/teststrip-lezen' },
  openGraph: { title: "Hoe lees je een water-teststrip? (2026)", description: "Leer een teststrip voor water aflezen en interpreteren, plus de beperkingen ervan.", url: 'https://waterfilterplatform.nl/uitleg/teststrip-lezen', type: 'article', locale: 'nl_NL' },
};

export default function UitlegTeststripLezenPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Hoe lees je een waterfilter-teststrip?", description: "Leer een teststrip voor water aflezen en interpreteren, plus de beperkingen ervan.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/teststrip-lezen' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Teststrip lezen", url: 'https://waterfilterplatform.nl/uitleg/teststrip-lezen' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Teststrip lezen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Hoe lees je een waterfilter-teststrip?</h1>
          <p className="text-gray-600 text-lg">Teststrips geven snel een indicatie van bijvoorbeeld hardheid of pH. Deze uitleg helpt je ze correct te lezen.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Hoe gebruik je een teststrip</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Dompel de strip kort in vers water, schud overtollig water af en vergelijk de kleur na de aangegeven tijd met de schaal op de verpakking.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Lees af in goed licht en houd je aan de wachttijd; te vroeg of te laat aflezen geeft een verkeerde uitkomst.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Beperkingen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Teststrips geven een grove indicatie, geen laboratoriumprecisie. Voor een betrouwbaar oordeel zijn je drinkwaterbedrijf of een labanalyse leidend.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Ze meten een beperkt aantal parameters; veiligheid beoordeel je er niet mee.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/waterhardheid-meten', "Hardheid meten"],
              ['/checklists/waterkwaliteit-beoordelen', "Waterkwaliteit beoordelen"],
              ['/kennisbank/tds-water', "TDS uitgelegd"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
