import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Moet ik mijn kraanwater filteren in Nederland? (2026)",
  description: "Kort antwoord: voor veiligheid meestal niet; wel voor smaak, kalk of specifieke stoffen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/antwoorden/moet-ik-kraanwater-filteren' },
  openGraph: { title: "Moet ik mijn kraanwater filteren in Nederland? (2026)", description: "Kort antwoord: voor veiligheid meestal niet; wel voor smaak, kalk of specifieke stoffen.", url: 'https://waterfilterplatform.nl/antwoorden/moet-ik-kraanwater-filteren', type: 'article', locale: 'nl_NL' },
};

export default function MoetIkKraanwaterFilterenCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: "Filteren nodig?", url: 'https://waterfilterplatform.nl/antwoorden/moet-ik-kraanwater-filteren' },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: "Moet ik mijn kraanwater filteren in Nederland?", answer: "Voor de veiligheid is filteren in Nederland meestal niet nodig: kraanwater voldoet aan strenge normen. Filteren loont vooral voor smaak (chloor), tegen kalk, of bij specifieke wensen zoals lood in oude leidingen of zeer zuiver water. De keuze hangt dus af van je doel, niet van onveiligheid.", url: 'https://waterfilterplatform.nl/antwoorden/moet-ik-kraanwater-filteren' }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Filteren nodig?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Moet ik mijn kraanwater filteren in Nederland?</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Voor de veiligheid is filteren in Nederland meestal niet nodig: kraanwater voldoet aan strenge normen. Filteren loont vooral voor smaak (chloor), tegen kalk, of bij specifieke wensen zoals lood in oude leidingen of zeer zuiver water. De keuze hangt dus af van je doel, niet van onveiligheid.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Wil je een chloorsmaak wegnemen, dan helpt een koolstoffilter of filterkan. Wil je kalk aanpakken, dan kijk je naar een waterontharder of omgekeerde osmose aan het tappunt.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Voor het verwijderen van lood, nitraat of PFAS is omgekeerde osmose de grondigste keuze.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Gebruik de keuzehulp om te bepalen wat bij jouw situatie past.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/keuzehulp', "Keuzehulp"],
              ['/filtertechnieken', "Filtertechnieken"],
              ['/vergelijken/osmose-vs-filterkan', "Osmose vs filterkan"],
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
