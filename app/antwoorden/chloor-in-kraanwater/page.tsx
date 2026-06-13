import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Zit er chloor in Nederlands kraanwater? (2026)",
  description: "Kort antwoord: doorgaans weinig tot geen, anders dan in veel andere landen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/antwoorden/chloor-in-kraanwater' },
  openGraph: { title: "Zit er chloor in Nederlands kraanwater? (2026)", description: "Kort antwoord: doorgaans weinig tot geen, anders dan in veel andere landen.", url: 'https://waterfilterplatform.nl/antwoorden/chloor-in-kraanwater', type: 'article', locale: 'nl_NL' },
};

export default function ChloorInKraanwaterCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: "Chloor in kraanwater?", url: 'https://waterfilterplatform.nl/antwoorden/chloor-in-kraanwater' },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: "Zit er chloor in Nederlands kraanwater?", answer: "Nederlands kraanwater bevat doorgaans weinig tot geen chloor; de drinkwaterbedrijven werken grotendeels zonder permanente chlorering, anders dan in veel andere landen. Proef je toch een lichte chloortoon, dan verdwijnt die door het water even te laten staan of met een koolstoffilter.", url: 'https://waterfilterplatform.nl/antwoorden/chloor-in-kraanwater' }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Chloor in kraanwater?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Zit er chloor in Nederlands kraanwater?</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Nederlands kraanwater bevat doorgaans weinig tot geen chloor; de drinkwaterbedrijven werken grotendeels zonder permanente chlorering, anders dan in veel andere landen. Proef je toch een lichte chloortoon, dan verdwijnt die door het water even te laten staan of met een koolstoffilter.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Chloor wordt soms tijdelijk gebruikt, bijvoorbeeld na werkzaamheden aan het leidingnet, maar is geen vast bestanddeel.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Een chloorsmaak is vooral een smaakkwestie, geen veiligheidsprobleem in de lage concentraties die kunnen voorkomen.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Een filterkan of koolstoffilter neemt de smaak weg.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/chloor-in-drinkwater', "Chloor in drinkwater"],
              ['/filtertechnieken/actief-kool', "Actief kool"],
              ['/kennisbank/waterfilter-smaak-chloor', "Chloorsmaak"],
              ['/antwoorden', "Alle antwoorden"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
