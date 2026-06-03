import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: "Onderbouw- vs opzet-osmose: welke kies je? (2026)",
    description: "Onder-aanrecht of een losse opzet-osmose? Vergelijk installatie, ruimte, capaciteit en prijs, en wanneer welke past.",
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/onderbouw-vs-opzet-osmose' },
    openGraph: {
      title: "Onderbouw- vs opzet-osmose: welke kies je? (2026)",
      description: "Onder-aanrecht of een losse opzet-osmose? Vergelijk installatie, ruimte, capaciteit en prijs, en wanneer welke past.",
      url: 'https://waterfilterplatform.nl/vergelijken/onderbouw-vs-opzet-osmose',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: "Kan ik een opzet-osmose zonder installatie gebruiken?",
    answer: "Ja, opzetsystemen (countertop) sluit je vaak aan op de bestaande kraan zonder boren, ideaal voor huurders. Onderbouwsystemen vragen wel installatie onder het aanrecht.",
  },
  {
    question: "Zuiveren beide even goed?",
    answer: "De zuivering hangt af van het membraan, niet van de plaatsing. Onderbouw- en opzetsystemen met een vergelijkbaar membraan leveren vergelijkbaar zuiver water; controleer de specificaties.",
  },
];

const vergelijking = [
  { naam: "Onderbouw-osmose", c1: "Vast, onder aanrecht", c2: "Kastruimte", c3: "Koopwoning, vaste plek", highlight: true },
  { naam: "Opzet-osmose", c1: "Geen installatie", c2: "Op het werkblad", c3: "Huurders, tijdelijk" },
];

export default function OnderbouwVsOpzetOsmosePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: "Onderbouw- vs opzet-osmose: welke kies je?",
          description: "Onder-aanrecht of een losse opzet-osmose? Vergelijk installatie, ruimte, capaciteit en prijs, en wanneer welke past.",
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          url: 'https://waterfilterplatform.nl/vergelijken/onderbouw-vs-opzet-osmose',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: "Onderbouw vs opzet-osmose", url: 'https://waterfilterplatform.nl/vergelijken/onderbouw-vs-opzet-osmose' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Onderbouw vs opzet-osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Onderbouw- vs opzet-osmose: welke kies je?</h1>
          <p className="text-gray-600 text-lg mb-6">Een <strong>onderbouw-osmose</strong> installeer je vast onder het aanrecht; een <strong>opzet-osmose</strong> (countertop) zet je los op het werkblad. We vergelijken installatie, ruimte, capaciteit en prijs.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/omgekeerde-osmose" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">Over omgekeerde osmose</Link>
            <Link href="/omgekeerde-osmose/kopen" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">Osmosesysteem kopen</Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-06-02" sources={['RIVM', 'KWR Water Research Institute', 'NSF/ANSI normen']} />
        <AuthorBox datePublished="2026-06-02" />

        <QuickAnswer question="Onderbouw of opzet-osmose?" answer="Een onderbouwsysteem zit vast onder het aanrecht met een eigen kraan en is uit het zicht, maar vraagt installatie en kastruimte. Een opzetsysteem zet je los op het aanrecht zonder installatie, ideaal voor huurders of tijdelijke situaties, maar het neemt werkbladruimte in. De zuivering is bij beide vergelijkbaar; de keuze gaat vooral over installatie en ruimte." />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Ruimte</th>
                  <th scope="col" className="py-3 px-3 font-semibold text-[#003F5C] text-left">Voor wie</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">{a.naam}</th>
                    <td className="py-2.5 px-3 text-gray-700">{a.c1}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.c2}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.c3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">Indicatief overzicht; prestaties verschillen per product en situatie. Bijgewerkt juni 2026.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je wat?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ["Kies onderbouw als...", "Je een vaste plek hebt, installatie geen probleem is en je het systeem uit het zicht wilt."],
              ["Kies opzet als...", "Je huurt, niet wilt boren, of het systeem wilt kunnen meenemen of verplaatsen."],
              ["Let op de capaciteit...", "Controleer de dagopbrengst en het afvalwater bij beide varianten."],
              ["Let op de aansluiting...", "Opzetsystemen sluiten vaak aan op de kraan; onderbouw op de koudwatertoevoer."],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">Meer lezen? Bekijk <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>, het <Link href="/kennisbank/osmose-installeren-stappen" className="text-[#005F8A] underline">installatie-stappenplan</Link> of <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">een osmosesysteem kopen</Link>.</p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["/omgekeerde-osmose", "Omgekeerde osmose", "Werking en wanneer zinvol"],
              ["/kennisbank/osmose-installeren-stappen", "Osmose installeren", "Stap voor stap"],
              ["/kennisbank/tankless-vs-tank-osmose", "Tankless vs tank", "Met of zonder vat"],
              ["/omgekeerde-osmose/kopen", "Osmose kopen", "Wat moet je weten"],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
