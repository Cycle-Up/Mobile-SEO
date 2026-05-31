import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Grohe Red filter: wanneer vervangen, kosten en instellen (2026)',
    description:
      'Alles over het Grohe Red filter: wat het doet voor de boiler, wanneer je het vervangt, hoe je het op je waterhardheid instelt en wat het kost.',
    alternates: { canonical: 'https://waterfilterplatform.nl/grohe-red-filter' },
    openGraph: {
      title: 'Grohe Red filter: wanneer vervangen, kosten en instellen (2026)',
      description:
        'Praktische gids voor het Grohe Red filterpatroon: boilerbescherming, levensduur, vervangen en instellen op waterhardheid.',
      url: 'https://waterfilterplatform.nl/grohe-red-filter',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat doet het Grohe Red filter?',
    answer:
      'Het Grohe Red filterpatroon beschermt vooral de boiler en het systeem tegen kalk. Door kalk uit het toevoerwater te verminderen, blijft de boiler langer in goede staat en verminder je kalkgerelateerde storingen. Het is geen omgekeerde-osmosefilter en is dus niet bedoeld voor brede contaminantverwijdering zoals lood of PFAS.',
  },
  {
    question: 'Wanneer moet ik het Grohe Red filter vervangen?',
    answer:
      'Dat hangt af van de filtercapaciteit, je waterhardheid en je verbruik. In een hard-watergebied raakt het filter sneller uitgeput. Veel systemen geven via een indicatie aan wanneer vervanging nodig is. Volg de instructies van de fabrikant en houd de aangegeven capaciteit aan.',
  },
  {
    question: 'Hoe stel ik het Grohe Red filter in op mijn waterhardheid?',
    answer:
      'Bij installatie stel je het systeem in op de lokale waterhardheid, zodat de filterindicatie klopt en het filter optimaal werkt. Controleer eerst je waterhardheid per gemeente. Een juiste instelling voorkomt dat je het filter te vroeg vervangt (verspilling) of te laat (mindere bescherming).',
  },
  {
    question: 'Wat kost een Grohe Red filter?',
    answer:
      'Filterpatronen zijn een terugkerende kostenpost; de prijs per patroon en hoe lang het meegaat verschillen per type en per waterhardheid. Reken dit mee in de totale gebruikskosten van de Grohe Red. De volledige kostenopbouw staat op onze pagina over de Grohe Red prijs.',
  },
  {
    question: 'Filtert de Grohe Red het drinkwater net zo breed als osmose?',
    answer:
      'Nee. Het Grohe Red filter richt zich op kalkbescherming van de boiler, niet op brede zuivering. Omgekeerde osmose houdt een groot deel van opgeloste stoffen en verontreinigingen tegen. Wil je die bredere filtering, dan is een osmosesysteem of een 4-in-1 osmosekraan geschikter.',
  },
];

export default function GroheRedFilterPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Grohe Red filter: wanneer vervangen, kosten en instellen',
          description:
            'Praktische gids voor het Grohe Red filterpatroon: boilerbescherming, levensduur, vervangen en instellen op waterhardheid.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/grohe-red-filter',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Grohe Red', url: 'https://waterfilterplatform.nl/grohe-red' },
          { name: 'Filter', url: 'https://waterfilterplatform.nl/grohe-red-filter' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/grohe-red" className="hover:text-[#005F8A]">Grohe Red</Link>
            <span className="mx-2">/</span>
            <span>Filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Red filter: vervangen, kosten en instellen
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Het <strong>Grohe Red filter</strong> beschermt de boiler tegen kalk en is meteen een
            terugkerende kostenpost. Hieronder lees je wat het filter doet, wanneer je het vervangt, hoe je
            het op je waterhardheid instelt en wat het wel en niet aanpakt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterhardheid"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Check je waterhardheid
            </Link>
            <Link
              href="/grohe-red-prijs"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Grohe Red prijs
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Wanneer vervang je het Grohe Red filter?"
          answer="Je vervangt het Grohe Red filter wanneer de capaciteit op is - dat hangt af van de filtercapaciteit, je waterhardheid en je verbruik. In een hard-watergebied raakt het sneller uitgeput. Stel het systeem bij installatie in op je lokale waterhardheid zodat de indicatie klopt. Het filter beschermt vooral de boiler tegen kalk; het is geen osmosefilter en pakt verontreinigingen niet breed aan."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat het filter doet (en niet doet)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het filterpatroon van de Grohe Red is gericht op kalkbescherming van de boiler en het systeem,
            niet op brede zuivering van je drinkwater. Het is dus iets anders dan een osmosefilter.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Boiler tegen kalk', 'Vermindert kalk in het toevoerwater, wat de boiler beschermt en storingen voorkomt.'],
              ['Capaciteit hangt af van hardheid', 'Hoe harder het water, hoe sneller het patroon op is.'],
              ['Geen brede filtering', 'Voor lood, nitraat of PFAS is osmose de juiste keuze.'],
              ['Instellen bij installatie', 'Stel de hardheid in zodat de vervangindicatie klopt.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je een bredere zuivering? Lees over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
            en bekijk de{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline">alternatieven voor Grohe Red</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vervangen en instellen op hardheid</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De vervangindicatie klopt alleen als het systeem bij installatie goed is ingesteld op je lokale
            waterhardheid. Stel die waarde dus correct in en controleer je hardheid via onze database. Zo
            vervang je het filter op het juiste moment en beschermt het de boiler optimaal.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Check je lokale water in de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid-database</Link>{' '}
            en bekijk de terugkerende kosten op{' '}
            <Link href="/grohe-red-prijs" className="text-[#005F8A] underline">Grohe Red prijs</Link>.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over het Grohe Red filter</h2>
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
              ['/grohe-red', 'Over Grohe Red', 'Werking, modellen en prijs'],
              ['/grohe-red-prijs', 'Grohe Red prijs', 'Aanschaf, installatie, filter en stroom'],
              ['/waterhardheid', 'Waterhardheid per gemeente', 'Zoek de hardheid op voor jouw woonplaats'],
              ['/grohe-red-alternatief', 'Grohe Red alternatief', 'Bredere filtering of meer functies'],
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
