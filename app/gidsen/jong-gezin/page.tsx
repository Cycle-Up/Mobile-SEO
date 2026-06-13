import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Watergids voor een jong gezin (2026)",
  description: "Watergids voor gezinnen met jonge kinderen: veiligheid, flesvoeding, kalk en betaalbare keuzes, met disclaimer en bronnen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/gidsen/jong-gezin' },
  openGraph: { title: "Watergids voor een jong gezin (2026)", description: "Watergids voor gezinnen met jonge kinderen: veiligheid, flesvoeding, kalk en betaalbare keuzes, met disclaimer en bronnen.", url: 'https://waterfilterplatform.nl/gidsen/jong-gezin', type: 'article', locale: 'nl_NL' },
};

export default function GidsenJongGezinPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Watergids voor een jong gezin", description: "Watergids voor gezinnen met jonge kinderen: veiligheid, flesvoeding, kalk en betaalbare keuzes, met disclaimer en bronnen.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/gidsen/jong-gezin' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Gidsen', url: 'https://waterfilterplatform.nl/gidsen' },
        { name: "Jong gezin", url: 'https://waterfilterplatform.nl/gidsen/jong-gezin' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gidsen" className="hover:text-[#005F8A]">Gidsen</Link>
            <span className="mx-2">/</span>
            <span>Jong gezin</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergids voor een jong gezin</h1>
          <p className="text-gray-600 text-lg">Met jonge kinderen wil je veilig en praktisch water. Deze gids zet de aandachtspunten op een rij. Dit is algemene informatie, geen medisch advies.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Kraanwater en flesvoeding</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Nederlands kraanwater is veilig. Voor flesvoeding adviseren instanties vaak vers, koud kraanwater dat je opwarmt; volg het advies van het consultatiebureau of de fabrikant.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Laat bij oude leidingen of na stilstand de kraan eerst even doorstromen.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Veiligheid in de keuken</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Heb je een kokend water kraan, gebruik dan altijd het kinderslot en houd toezicht. Lees de veiligheidschecklist.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Berg schoonmaak- en ontkalkmiddelen buiten bereik van kinderen op.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Kalk en kosten</h2>
          <p className="text-gray-700 leading-relaxed mb-3">In een hard-watergebied verkalken apparaten sneller; regelmatig ontkalken helpt. Een ontharder is een grotere investering.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor vragen over gezondheid en kinderen is de huisarts of het consultatiebureau leidend.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/checklists/kokend-kraan-kinderveiligheid', "Kinderveiligheid kraan"],
              ['/kennisbank/waterhardheid-baby-fles', "Water en flesvoeding"],
              ['/keuzehulp/baby-gezin', "Keuzehulp baby/gezin"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
