import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Wat betekent jouw dH-waarde? (2026)",
  description: "Interpreteer je waterhardheid: wat betekenen de dH-waarden en welke hardheidsklasse hoort erbij?",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/wat-betekent-dh-waarde' },
  openGraph: { title: "Wat betekent jouw dH-waarde? (2026)", description: "Interpreteer je waterhardheid: wat betekenen de dH-waarden en welke hardheidsklasse hoort erbij?", url: 'https://waterfilterplatform.nl/uitleg/wat-betekent-dh-waarde', type: 'article', locale: 'nl_NL' },
};

export default function UitlegWatBetekentDhWaardePage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Wat betekent jouw dH-waarde?", description: "Interpreteer je waterhardheid: wat betekenen de dH-waarden en welke hardheidsklasse hoort erbij?", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/wat-betekent-dh-waarde' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Wat betekent dH", url: 'https://waterfilterplatform.nl/uitleg/wat-betekent-dh-waarde' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Wat betekent dH</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Wat betekent jouw dH-waarde?</h1>
          <p className="text-gray-600 text-lg">De dH-waarde geeft de waterhardheid aan. Maar wat betekent jouw getal concreet voor kalk en advies?</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">De klassen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Tot ongeveer 8 dH is water zacht, 8 tot 14 dH gemiddeld en boven 14 dH hard. Hoe hoger, hoe sneller kalkaanslag ontstaat.</p>
          <p className="text-gray-700 leading-relaxed mb-3">In een hard-watergebied verkalken waterkoker, koffiemachine en kranen sneller.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat doe je ermee?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Bij een hoge dH loont regelmatig ontkalken of een waterontharder. Stel ook de vaatwasser-waterhardheid correct in.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Reken je waarde eenvoudig om naar andere eenheden met de hardheid-omrekener.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/hulpmiddelen/waterhardheid-omrekenen', "Hardheid omrekenen"],
              ['/uitleg/hardheidsklassen', "Hardheidsklassen"],
              ['/hulpmiddelen/kalkrisico', "Kalkrisico-indicator"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
