import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Grohe Blue: gefilterd, gekoeld en bruisend water (2026)',
    description:
      'Alles over de Grohe Blue: hoe de gefilterde, gekoelde en bruisende waterkraan werkt, welke modellen er zijn, wat het kost, de filters en de alternatieven.',
    alternates: { canonical: 'https://waterfilterplatform.nl/grohe-blue' },
    openGraph: {
      title: 'Grohe Blue: gefilterd, gekoeld en bruisend water (2026)',
      description:
        'Een neutraal overzicht van de Grohe Blue: werking, modellen, prijs, filters en alternatieven.',
      url: 'https://waterfilterplatform.nl/grohe-blue',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is de Grohe Blue?',
    answer:
      'De Grohe Blue is een keukenkraan die gefilterd water levert, en in de Home-uitvoering ook gekoeld en bruisend water. Onder het aanrecht zitten een koeler, een filter en (voor bruisend water) een CO2-cilinder. Anders dan de Grohe Red, die kokend water levert, richt de Grohe Blue zich op koud, gefilterd en bruisend drinkwater.',
  },
  {
    question: 'Wat is het verschil tussen Grohe Blue Pure en Grohe Blue Home?',
    answer:
      'Grohe Blue Pure levert gefilterd water op kraantemperatuur. Grohe Blue Home voegt daar koeling en bruisend water (plat, medium, bruisend) aan toe via een koeler en CO2-cilinder onder het aanrecht. Home is dus completer maar duurder en vraagt meer onderhoud (CO2 en filter). De exacte line-up wisselt; controleer de actuele modellen bij de verkoper.',
  },
  {
    question: 'Heeft de Grohe Blue een osmosefilter?',
    answer:
      'Nee. De Grohe Blue gebruikt een filterpatroon (doorgaans actieve kool, soms met magnesium voor de smaak), geen volledig omgekeerde-osmosesysteem. Het verbetert vooral smaak en vermindert kalk en chloor. Wil je een bredere verwijdering van bijvoorbeeld lood, nitraat of PFAS, dan filtert een osmosesysteem grondiger.',
  },
  {
    question: 'Wat kost een Grohe Blue?',
    answer:
      'De aanschaf ligt indicatief tussen de 800 en 1.800 euro, afhankelijk van Pure of Home en de afwerking, exclusief installatie. Daar komen lopende kosten bij voor filterpatronen en, bij Home, CO2-cilinders. De volledige opbouw staat op onze pagina over de Grohe Blue prijs.',
  },
  {
    question: 'Is de Grohe Blue een goede keuze?',
    answer:
      'Voor wie gekoeld en bruisend gefilterd water uit de kraan wil met een premium uitstraling, is de Grohe Blue sterk. Houd rekening met de lopende kosten van filters en CO2. Wil je ook kokend water of een bredere filtering, of een lagere totaalprijs, vergelijk dan met een 4-in-1 osmosekraan.',
  },
];

const subpaginas = [
  ['/grohe-blue-prijs', 'Grohe Blue prijs', 'Aanschaf, filters, CO2 en jaarlijkse kosten.'],
  ['/grohe-blue-filter', 'Grohe Blue filter', 'Wanneer vervangen, kosten en instellen op hardheid.'],
  ['/grohe-blue-alternatief', 'Grohe Blue alternatief', 'Meer functies of een lagere prijs? De opties vergeleken.'],
];

export default function GroheBluePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Grohe Blue: gefilterd, gekoeld en bruisend water',
          description:
            'Een neutraal overzicht van de Grohe Blue: werking, modellen, prijs, filters en alternatieven.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/grohe-blue',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Bruisend water', url: 'https://waterfilterplatform.nl/bruisend-water' },
          { name: 'Grohe Blue', url: 'https://waterfilterplatform.nl/grohe-blue' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'Grohe Blue', description: 'Keukenkraan voor gefilterd, gekoeld en bruisend water van Grohe.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/bruisend-water" className="hover:text-[#005F8A]">Bruisend water</Link>
            <span className="mx-2">/</span>
            <span>Grohe Blue</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Blue: gefilterd, gekoeld en bruisend water
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>Grohe Blue</strong> levert gefilterd water uit de keukenkraan, en in de
            Home-uitvoering ook gekoeld en bruisend water. Op deze pagina vind je een neutraal overzicht:
            hoe de Grohe Blue werkt, het verschil tussen Pure en Home, wat het kost, de filters en hoe het
            zich verhoudt tot alternatieven.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/grohe-blue-prijs"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Grohe Blue prijs
            </Link>
            <Link
              href="/bruisend-water"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Bruisend water thuis
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant / verkoper', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat moet je weten over de Grohe Blue?"
          answer="De Grohe Blue is een keukenkraan voor gefilterd water; de Home-uitvoering levert ook gekoeld en bruisend water via een koeler en CO2-cilinder onder het aanrecht. Hij gebruikt een filterpatroon (actieve kool, soms met magnesium), geen osmosefilter. De aanschaf ligt indicatief tussen 800 en 1.800 euro exclusief installatie, met lopende kosten voor filters en CO2. Sterk voor wie gekoeld bruisend gefilterd water wil; voor kokend water, bredere filtering of een lagere prijs is een 4-in-1 osmosekraan het overwegen waard."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt de Grohe Blue?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Grohe Blue combineert een keukenkraan met een unit onder het aanrecht. Een filterpatroon
            verbetert de smaak en vermindert kalk en chloor; bij de Home-uitvoering koelt een koeler het
            water en voegt een CO2-cilinder koolzuur toe voor bruisend water. Vaak loopt het gefilterde
            water via een aparte hendel of knop, los van het gewone kraanwater.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Gefilterd water', 'Een filterpatroon vermindert kalk, chloor en verbetert de smaak.'],
              ['Gekoeld water (Home)', 'Een koeler onder het aanrecht levert koud water op de gewenste temperatuur.'],
              ['Bruisend water (Home)', 'Een CO2-cilinder voegt koolzuur toe; instelbaar van plat tot bruisend.'],
              ['Geen osmosefilter', 'De filtering is op koolstofbasis, niet zo breed als omgekeerde osmose.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je de categorie eerst begrijpen? Lees over{' '}
            <Link href="/bruisend-water" className="text-[#005F8A] underline">bruisend water thuis</Link>{' '}
            en het verschil met de kokendwater-variant op{' '}
            <Link href="/vergelijken/grohe-blue-vs-grohe-red" className="text-[#005F8A] underline">Grohe Blue vs Grohe Red</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Modellen, prijs en filters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Grohe Blue is er als Pure (gefilterd) en Home (gefilterd, gekoeld en bruisend), in
            verschillende afwerkingen. Omdat de line-up en prijzen per jaar wisselen, houden we cijfers
            indicatief en verwijzen we voor details naar de verdiepende pagina's. Op hoofdlijnen: de
            aanschaf ligt indicatief tussen 800 en 1.800 euro exclusief installatie, met lopende kosten
            voor filterpatronen en, bij Home, CO2-cilinders.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subpaginas.map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Grohe Blue versus een 4-in-1 osmosekraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Grohe Blue is sterk in gekoeld en bruisend gefilterd water. Wil je daarnaast kokend water of
            een bredere filtering, dan biedt een 4-in-1 kraan met ingebouwd osmosefilter vaak een completer
            pakket: kokend, koud gefilterd, warm en bruisend water uit een kraan, inclusief een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose installatie</Link>.
            De volledige afweging lees je op{' '}
            <Link href="/grohe-blue-alternatief" className="text-[#005F8A] underline">Grohe Blue alternatief</Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de Grohe Blue</h2>
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
              ['/bruisend-water', 'Bruisend water', 'Opties voor bruisend water thuis'],
              ['/vergelijken/grohe-blue-vs-grohe-red', 'Grohe Blue vs Grohe Red', 'Gefilterd/bruisend versus kokend'],
              ['/grohe-blue-alternatief', 'Grohe Blue alternatief', 'Meer functies voor minder geld?'],
              ['/omgekeerde-osmose/kopen', 'Osmosesysteem kopen', 'Wat moet je weten voor aanschaf'],
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
