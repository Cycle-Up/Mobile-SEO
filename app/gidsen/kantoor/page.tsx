import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Watergids voor een kantoor (2026)",
  description: "Watergids voor kantoren: tappunten, legionella-zorg, kosten versus flessenwater en hygiene.",
  alternates: { canonical: 'https://waterfilterplatform.nl/gidsen/kantoor' },
  openGraph: { title: "Watergids voor een kantoor (2026)", description: "Watergids voor kantoren: tappunten, legionella-zorg, kosten versus flessenwater en hygiene.", url: 'https://waterfilterplatform.nl/gidsen/kantoor', type: 'article', locale: 'nl_NL' },
};

export default function GidsenKantoorPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Watergids voor een kantoor", description: "Watergids voor kantoren: tappunten, legionella-zorg, kosten versus flessenwater en hygiene.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/gidsen/kantoor' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Gidsen', url: 'https://waterfilterplatform.nl/gidsen' },
        { name: "Kantoor", url: 'https://waterfilterplatform.nl/gidsen/kantoor' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gidsen" className="hover:text-[#005F8A]">Gidsen</Link>
            <span className="mx-2">/</span>
            <span>Kantoor</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergids voor een kantoor</h1>
          <p className="text-gray-600 text-lg">Een goed watertappunt op kantoor is gezond, duurzaam en kostenbesparend. Deze gids zet de keuzes op een rij.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Tappunt versus flessen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Een leidinggebonden tappunt of waterkoeler is per liter veel goedkoper en duurzamer dan flessen of bidons.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Bereken de besparing ten opzichte van flessenwater voor je situatie.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Hygiene en legionella</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Bij tappunten en koelers telt hygiene: regelmatig onderhoud, filters tijdig vervangen en doorstromen na weekenden of vakanties.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Volg de richtlijnen voor legionellapreventie bij stilstaand of opgewarmd water.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Smaak en draagvlak</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Gefilterd of gekoeld water verhoogt het gebruik en de tevredenheid.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Een bruiswateroptie maakt het tappunt aantrekkelijker dan flessen.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/zakelijk', "Zakelijke waterfilters"],
              ['/kennisbank/waterkoeler-kantoor', "Waterkoeler kantoor"],
              ['/hulpmiddelen/flessenwater-besparing', "Besparing vs flessen"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
