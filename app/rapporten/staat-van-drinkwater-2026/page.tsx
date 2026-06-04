import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Staat van Nederlands drinkwater 2026 (datarapport)",
  description: "Datarapport over Nederlands drinkwater in 2026: kwaliteit, normen, hardheid en actuele aandachtspunten zoals PFAS, met bronnen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/rapporten/staat-van-drinkwater-2026' },
  openGraph: { title: "Staat van Nederlands drinkwater 2026 (datarapport)", description: "Datarapport over Nederlands drinkwater in 2026: kwaliteit, normen, hardheid en actuele aandachtspunten zoals PFAS, met bronnen.", url: 'https://waterfilterplatform.nl/rapporten/staat-van-drinkwater-2026', type: 'article', locale: 'nl_NL' },
};

export default function RapportenStaatVanDrinkwater2026Page() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "De staat van Nederlands drinkwater in 2026", description: "Datarapport over Nederlands drinkwater in 2026: kwaliteit, normen, hardheid en actuele aandachtspunten zoals PFAS, met bronnen.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/rapporten/staat-van-drinkwater-2026' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Rapporten', url: 'https://waterfilterplatform.nl/rapporten' },
        { name: "Staat van drinkwater 2026", url: 'https://waterfilterplatform.nl/rapporten/staat-van-drinkwater-2026' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/rapporten" className="hover:text-[#005F8A]">Rapporten</Link>
            <span className="mx-2">/</span>
            <span>Staat van drinkwater 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">De staat van Nederlands drinkwater in 2026</h1>
          <p className="text-gray-600 text-lg">Hoe staat het Nederlandse drinkwater er in 2026 voor? Dit rapport bundelt de kerncijfers en aandachtspunten, met officiele bronnen.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Kwaliteit en toezicht</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Nederlands drinkwater behoort tot de best gecontroleerde ter wereld. Drinkwaterbedrijven winnen, zuiveren en controleren continu; de ILT houdt toezicht en het RIVM doet onderzoek.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Het water voldoet aan het Drinkwaterbesluit en de EU-richtlijn 2020/2184.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Normen en aanscherpingen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Belangrijke kaderwaarden: de PFAS-somnorm van 0,1 microgram per liter (volledig van kracht in 2026), de loodnorm aangescherpt naar 5 microgram per liter, en de nitraatnorm van 50 mg/L.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Deze waarden vind je gebundeld in de normen-dataset.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Actuele aandachtspunten</h2>
          <p className="text-gray-700 leading-relaxed mb-3">PFAS, medicijnresten en microplastics blijven onderwerp van onderzoek en beleid. Verzilting en droogte zetten de zoetwatervoorziening op de lange termijn onder druk.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor de consument blijft het water aan de kraan veilig; aandachtspunten liggen vaak na de watermeter (oude leidingen, stilstand).</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/data/drinkwaternormen', "Normen-dataset"],
              ['/drinkwaternormen', "Drinkwaternormen"],
              ['/rapporten/pfas-trendoverzicht-2026', "PFAS-trendoverzicht"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
