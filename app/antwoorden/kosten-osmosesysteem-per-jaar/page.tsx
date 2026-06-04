import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Hoeveel kost een osmosesysteem per jaar? (2026)",
  description: "Kort antwoord: vooral de jaarlijkse filters plus wat extra water; gebruik de calculator voor jouw situatie.",
  alternates: { canonical: 'https://waterfilterplatform.nl/antwoorden/kosten-osmosesysteem-per-jaar' },
  openGraph: { title: "Hoeveel kost een osmosesysteem per jaar? (2026)", description: "Kort antwoord: vooral de jaarlijkse filters plus wat extra water; gebruik de calculator voor jouw situatie.", url: 'https://waterfilterplatform.nl/antwoorden/kosten-osmosesysteem-per-jaar', type: 'article', locale: 'nl_NL' },
};

export default function KostenOsmosesysteemPerJaarCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: "Osmose kosten/jaar?", url: 'https://waterfilterplatform.nl/antwoorden/kosten-osmosesysteem-per-jaar' },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: "Hoeveel kost een osmosesysteem per jaar?", answer: "De jaarlijkse kosten bestaan vooral uit vervangfilters (indicatief enkele tientallen euro per jaar) plus het extra water dat als concentraat wordt afgevoerd. De aanschaf is eenmalig. Gebruik de afvalwater- en kostencalculators voor een schatting op basis van jouw verbruik en systeem.", url: 'https://waterfilterplatform.nl/antwoorden/kosten-osmosesysteem-per-jaar' }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Osmose kosten/jaar?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Hoeveel kost een osmosesysteem per jaar?</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            De jaarlijkse kosten bestaan vooral uit vervangfilters (indicatief enkele tientallen euro per jaar) plus het extra water dat als concentraat wordt afgevoerd. De aanschaf is eenmalig. Gebruik de afvalwater- en kostencalculators voor een schatting op basis van jouw verbruik en systeem.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Voorfilters vervang je doorgaans jaarlijks, het membraan na enkele jaren; reken de afvalwaterverhouding mee voor het waterverbruik.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Een efficient systeem (lage afvalwaterverhouding) drukt de jaarlijkse kosten.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Vergelijk met de kosten van flessenwater om de besparing te zien.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/hulpmiddelen/osmose-afvalwater', "Afvalwater-calculator"],
              ['/omgekeerde-osmose/kopen', "Osmose kopen"],
              ['/hulpmiddelen/flessenwater-besparing', "Flessenwater-besparing"],
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
