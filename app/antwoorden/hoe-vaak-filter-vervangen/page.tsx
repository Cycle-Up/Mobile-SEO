import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Hoe vaak moet ik mijn waterfilter vervangen? (2026)",
  description: "Kort antwoord: voorfilters elke 6 tot 12 maanden, een osmosemembraan vaak na enkele jaren.",
  alternates: { canonical: 'https://waterfilterplatform.nl/antwoorden/hoe-vaak-filter-vervangen' },
  openGraph: { title: "Hoe vaak moet ik mijn waterfilter vervangen? (2026)", description: "Kort antwoord: voorfilters elke 6 tot 12 maanden, een osmosemembraan vaak na enkele jaren.", url: 'https://waterfilterplatform.nl/antwoorden/hoe-vaak-filter-vervangen', type: 'article', locale: 'nl_NL' },
};

export default function HoeVaakFilterVervangenCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: "Filter vervangen?", url: 'https://waterfilterplatform.nl/antwoorden/hoe-vaak-filter-vervangen' },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: "Hoe vaak moet ik mijn waterfilter vervangen?", answer: "Dat hangt af van het type. Voorfilters (sediment en koolstof) vervang je doorgaans elke 6 tot 12 maanden, een osmosemembraan vaak pas na enkele jaren. Filterkannen vragen vaak maandelijkse patroonwissel. Volg altijd het advies van de fabrikant en je waterkwaliteit.", url: 'https://waterfilterplatform.nl/antwoorden/hoe-vaak-filter-vervangen' }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Filter vervangen?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Hoe vaak moet ik mijn waterfilter vervangen?</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Dat hangt af van het type. Voorfilters (sediment en koolstof) vervang je doorgaans elke 6 tot 12 maanden, een osmosemembraan vaak pas na enkele jaren. Filterkannen vragen vaak maandelijkse patroonwissel. Volg altijd het advies van de fabrikant en je waterkwaliteit.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Een stijgende TDS-waarde van het gefilterde water kan erop wijzen dat een osmosemembraan aan vervanging toe is.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Bij hard water verzadigen filters sneller. Noteer de installatiedatum of gebruik de vervangdatum-tool.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Tijdige vervanging houdt de prestaties en de hygiene op peil.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/onderhoud', "Onderhoud"],
              ['/hulpmiddelen/filter-vervangdatum', "Vervangdatum-tool"],
              ['/kennisbank/osmose-membraan-levensduur', "Membraan levensduur"],
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
