import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Waterrapport lezen: wat betekenen de waarden? (2026)",
  description: "Leer het waterkwaliteitsrapport van je drinkwaterbedrijf lezen: hardheid, belangrijke parameters en wat de waarden betekenen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/waterrapport-lezen' },
  openGraph: { title: "Waterrapport lezen: wat betekenen de waarden? (2026)", description: "Leer het waterkwaliteitsrapport van je drinkwaterbedrijf lezen: hardheid, belangrijke parameters en wat de waarden betekenen.", url: 'https://waterfilterplatform.nl/uitleg/waterrapport-lezen', type: 'article', locale: 'nl_NL' },
};

export default function UitlegWaterrapportLezenPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Hoe lees je het waterkwaliteitsrapport van je drinkwaterbedrijf?", description: "Leer het waterkwaliteitsrapport van je drinkwaterbedrijf lezen: hardheid, belangrijke parameters en wat de waarden betekenen.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/waterrapport-lezen' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Waterrapport lezen", url: 'https://waterfilterplatform.nl/uitleg/waterrapport-lezen' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Waterrapport lezen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Hoe lees je het waterkwaliteitsrapport van je drinkwaterbedrijf?</h1>
          <p className="text-gray-600 text-lg">Je drinkwaterbedrijf publiceert een waterkwaliteitsrapport met veel waarden. Deze uitleg helpt je de belangrijkste parameters te begrijpen.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Waar vind je het rapport?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Drinkwaterbedrijven publiceren de waterkwaliteit per leveringsgebied op hun website, vaak op postcode- of gemeenteniveau. Dit is de gezaghebbende bron voor jouw adres.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Het rapport bevat doorgaans de hardheid plus tientallen tot honderden gemeten parameters.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">De belangrijkste waarden</h2>
          <p className="text-gray-700 leading-relaxed mb-3">De hardheid (in dH of mmol/L) bepaalt kalkaanslag. Parameters als nitraat, chloride en metalen worden getoetst aan de wettelijke normen uit het Drinkwaterbesluit.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Vrijwel altijd liggen de gemeten waarden ruim onder de norm; een overschrijding wordt actief gecommuniceerd.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat doe je met de informatie?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Gebruik de hardheid om te bepalen of ontkalken of een ontharder zinvol is. De rest van het rapport bevestigt vooral dat het water aan de normen voldoet.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor gezondheidsvragen is je huisarts leidend; dit is algemene informatie.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/drinkwaternormen', "Drinkwaternormen"],
              ['/uitleg/wat-betekent-dh-waarde', "Wat betekent jouw dH"],
              ['/waterhardheid', "Waterhardheid per gemeente"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
