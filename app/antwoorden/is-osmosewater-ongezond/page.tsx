import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Is osmosewater ongezond? (2026)",
  description: "Kort antwoord: voor de meeste mensen niet; mineralen komen vooral uit voeding. Remineralisatie kan smaak en mineraalinhoud herstellen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/antwoorden/is-osmosewater-ongezond' },
  openGraph: { title: "Is osmosewater ongezond? (2026)", description: "Kort antwoord: voor de meeste mensen niet; mineralen komen vooral uit voeding. Remineralisatie kan smaak en mineraalinhoud herstellen.", url: 'https://waterfilterplatform.nl/antwoorden/is-osmosewater-ongezond', type: 'article', locale: 'nl_NL' },
};

export default function IsOsmosewaterOngezondCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: "Osmosewater ongezond?", url: 'https://waterfilterplatform.nl/antwoorden/is-osmosewater-ongezond' },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: "Is osmosewater ongezond?", answer: "Voor de meeste mensen met een gevarieerd voedingspatroon is osmosewater drinken geen probleem, omdat mineralen vooral uit voeding komen. De WHO vraagt wel aandacht voor langdurig drinken van gedemineraliseerd water als enige bron. Remineralisatie herstelt smaak en mineraalinhoud. Dit is algemene informatie, geen medisch advies.", url: 'https://waterfilterplatform.nl/antwoorden/is-osmosewater-ongezond' }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Osmosewater ongezond?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Is osmosewater ongezond?</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Voor de meeste mensen met een gevarieerd voedingspatroon is osmosewater drinken geen probleem, omdat mineralen vooral uit voeding komen. De WHO vraagt wel aandacht voor langdurig drinken van gedemineraliseerd water als enige bron. Remineralisatie herstelt smaak en mineraalinhoud. Dit is algemene informatie, geen medisch advies.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Osmosewater is mineraalarm. Calcium en magnesium haal je in een normaal dieet vooral uit zuivel, groenten, noten en volkoren producten.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Wie osmosewater als hoofdbron gebruikt, kan kiezen voor remineralisatie of een scheut kraanwater bijmengen.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Bij gezondheidsvragen of een bijzonder dieet is een arts of dietist leidend.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/mineraalarm-water-langdurig', "Mineraalarm water langdurig"],
              ['/osmose-water/remineralisatie', "Remineralisatie"],
              ['/omgekeerde-osmose', "Omgekeerde osmose"],
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
