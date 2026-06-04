import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Normwijzigingen drinkwater: overzicht (2026)",
  description: "Overzicht van recente wijzigingen in de drinkwaternormen, met de bron per aanpassing.",
  alternates: { canonical: 'https://waterfilterplatform.nl/rapporten/normwijzigingen-overzicht' },
  openGraph: { title: "Normwijzigingen drinkwater: overzicht (2026)", description: "Overzicht van recente wijzigingen in de drinkwaternormen, met de bron per aanpassing.", url: 'https://waterfilterplatform.nl/rapporten/normwijzigingen-overzicht', type: 'article', locale: 'nl_NL' },
};

export default function RapportenNormwijzigingenOverzichtPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Normwijzigingen drinkwater: wat veranderde er?", description: "Overzicht van recente wijzigingen in de drinkwaternormen, met de bron per aanpassing.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/rapporten/normwijzigingen-overzicht' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Rapporten', url: 'https://waterfilterplatform.nl/rapporten' },
        { name: "Normwijzigingen", url: 'https://waterfilterplatform.nl/rapporten/normwijzigingen-overzicht' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/rapporten" className="hover:text-[#005F8A]">Rapporten</Link>
            <span className="mx-2">/</span>
            <span>Normwijzigingen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Normwijzigingen drinkwater: wat veranderde er?</h1>
          <p className="text-gray-600 text-lg">De drinkwaternormen worden periodiek aangescherpt. Dit overzicht zet de belangrijkste recente wijzigingen op een rij.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Het kader: EU 2020/2184</h2>
          <p className="text-gray-700 leading-relaxed mb-3">De Europese Drinkwaterrichtlijn 2020/2184 is het kader achter de recente aanscherpingen, in Nederland geimplementeerd via het Drinkwaterbesluit.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Het doel is een hoger beschermingsniveau, onder meer voor PFAS en lood.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">De kernwijzigingen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">PFAS: een somnorm van 0,1 microgram per liter, volledig van kracht in 2026. Lood: aangescherpt naar 5 microgram per liter per 2026.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Nitraat blijft op 50 mg/L als kaderwaarde. Zie de normen-dataset en -tijdlijn voor het overzicht.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/uitleg/drinkwaternormen-tijdlijn', "Normen-tijdlijn"],
              ['/data/drinkwaternormen', "Normen-dataset"],
              ['/drinkwaternormen', "Drinkwaternormen"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
