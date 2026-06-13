import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "PFAS in Nederland: trendoverzicht 2026",
  description: "Trendoverzicht van PFAS in Nederlands drinkwater in 2026: de norm, de aanpak en wat filters doen, met bronnen en nuance.",
  alternates: { canonical: 'https://waterfilterplatform.nl/rapporten/pfas-trendoverzicht-2026' },
  openGraph: { title: "PFAS in Nederland: trendoverzicht 2026", description: "Trendoverzicht van PFAS in Nederlands drinkwater in 2026: de norm, de aanpak en wat filters doen, met bronnen en nuance.", url: 'https://waterfilterplatform.nl/rapporten/pfas-trendoverzicht-2026', type: 'article', locale: 'nl_NL' },
};

export default function RapportenPfasTrendoverzicht2026Page() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "PFAS in Nederland: trendoverzicht en stand van zaken 2026", description: "Trendoverzicht van PFAS in Nederlands drinkwater in 2026: de norm, de aanpak en wat filters doen, met bronnen en nuance.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/rapporten/pfas-trendoverzicht-2026' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Rapporten', url: 'https://waterfilterplatform.nl/rapporten' },
        { name: "PFAS-trendoverzicht", url: 'https://waterfilterplatform.nl/rapporten/pfas-trendoverzicht-2026' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/rapporten" className="hover:text-[#005F8A]">Rapporten</Link>
            <span className="mx-2">/</span>
            <span>PFAS-trendoverzicht</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">PFAS in Nederland: trendoverzicht en stand van zaken 2026</h1>
          <p className="text-gray-600 text-lg">PFAS blijft een actueel thema. Dit overzicht bundelt de stand van zaken in 2026, met de norm en de aanpak. Dit is algemene informatie, geen medisch advies.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">De norm</h2>
          <p className="text-gray-700 leading-relaxed mb-3">De EU-richtlijn 2020/2184 hanteert een somnorm van 0,1 microgram per liter voor PFAS in drinkwater, volledig van kracht in 2026.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Er is geen algemeen erkende veilige drempel voor PFAS, daarom is de norm streng.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Aanpak en monitoring</h2>
          <p className="text-gray-700 leading-relaxed mb-3">RIVM en drinkwaterbedrijven monitoren PFAS; bronaanpak (minder lozingen) is leidend, naast zuivering waar nodig.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Lokale waarden kunnen verschillen; de actuele situatie staat bij het RIVM en je drinkwaterbedrijf.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat filters doen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Omgekeerde osmose verwijdert doorgaans 90 tot 99 procent van PFAS; een geschikt actief-koolfilter een deel, afhankelijk van type en verzadiging.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor gezondheidsvragen is je huisarts leidend.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/drinkwaternormen/pfas', "PFAS-norm"],
              ['/kennisbank/pfas-in-nederland-2026', "PFAS in Nederland 2026"],
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
