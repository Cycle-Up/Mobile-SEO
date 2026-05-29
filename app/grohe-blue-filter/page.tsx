import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Grohe Blue filter: wanneer vervangen, kosten en instellen (2026)',
    description:
      'Alles over het Grohe Blue filter: wat het doet, wanneer je het vervangt, hoe je het op je waterhardheid instelt, de kosten en wat het wel en niet verwijdert.',
    alternates: { canonical: 'https://waterfilterplatform.nl/grohe-blue-filter' },
    openGraph: {
      title: 'Grohe Blue filter: wanneer vervangen, kosten en instellen (2026)',
      description:
        'Praktische gids voor het Grohe Blue filterpatroon: levensduur, vervangen, instellen op hardheid en wat het filtert.',
      url: 'https://waterfilterplatform.nl/grohe-blue-filter',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat doet het Grohe Blue filter?',
    answer:
      'Het Grohe Blue filterpatroon werkt doorgaans op basis van actieve kool, in sommige varianten met magnesium voor de smaak. Het vermindert chloor, verbetert smaak en geur en vermindert kalk. Het is geen omgekeerde-osmosefilter; voor een bredere verwijdering van bijvoorbeeld lood, nitraat of PFAS is osmose grondiger.',
  },
  {
    question: 'Wanneer moet ik het Grohe Blue filter vervangen?',
    answer:
      'Dat hangt af van de filtercapaciteit, je waterhardheid en je verbruik. Het systeem houdt doorgaans bij hoeveel water je hebt getapt en geeft een signaal wanneer het filter aan vervanging toe is. In een hard-watergebied raakt een filter sneller uitgeput dan in een zacht-watergebied. Volg de indicatie en instructies van de fabrikant.',
  },
  {
    question: 'Hoe stel ik het Grohe Blue filter in op mijn waterhardheid?',
    answer:
      'Bij de installatie stel je het systeem in op de lokale waterhardheid, zodat de filterindicatie klopt. Controleer eerst je waterhardheid per gemeente. Een juiste instelling zorgt dat je het filter op het juiste moment vervangt: niet te vroeg (verspilling) en niet te laat (mindere werking).',
  },
  {
    question: 'Wat kost een Grohe Blue filter?',
    answer:
      'Filterpatronen zijn een terugkerende kostenpost; de prijs per patroon en hoe lang het meegaat verschillen per type en per waterhardheid. Reken dit mee in de totale gebruikskosten van de Grohe Blue. Bekijk de volledige kostenopbouw op onze pagina over de Grohe Blue prijs.',
  },
  {
    question: 'Filtert de Grohe Blue net zo goed als osmose?',
    answer:
      'Nee. De Grohe Blue gebruikt een koolstoffilter dat vooral smaak, chloor en kalk aanpakt. Omgekeerde osmose filtert breder en houdt ook een groot deel van opgeloste stoffen en verontreinigingen tegen. Wil je die bredere zuivering, dan is een osmosesysteem of een 4-in-1 osmosekraan geschikter.',
  },
];

export default function GroheBlueFilterPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Grohe Blue filter: wanneer vervangen, kosten en instellen',
          description:
            'Praktische gids voor het Grohe Blue filterpatroon: levensduur, vervangen, instellen op hardheid en wat het filtert.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/grohe-blue-filter',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Grohe Blue', url: 'https://waterfilterplatform.nl/grohe-blue' },
          { name: 'Filter', url: 'https://waterfilterplatform.nl/grohe-blue-filter' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/grohe-blue" className="hover:text-[#005F8A]">Grohe Blue</Link>
            <span className="mx-2">/</span>
            <span>Filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Blue filter: vervangen, kosten en instellen
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Het <strong>Grohe Blue filter</strong> bepaalt de smaak van je water en is meteen de
            belangrijkste terugkerende kostenpost. Hieronder lees je wat het filter doet, wanneer je het
            vervangt, hoe je het op je waterhardheid instelt en wat het wel en niet verwijdert.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterhardheid"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Check je waterhardheid
            </Link>
            <Link
              href="/grohe-blue-prijs"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Grohe Blue prijs
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant / verkoper', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wanneer vervang je het Grohe Blue filter?"
          answer="Je vervangt het Grohe Blue filter wanneer het systeem aangeeft dat de capaciteit op is - dat hangt af van de filtercapaciteit, je waterhardheid en je verbruik. In een hard-watergebied raakt een filter sneller uitgeput. Stel het systeem bij installatie in op je lokale waterhardheid zodat de indicatie klopt. Het filter werkt op koolstofbasis en verbetert vooral smaak, chloor en kalk; het is geen osmosefilter en pakt verontreinigingen minder breed aan."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat het filter doet (en niet doet)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het filterpatroon van de Grohe Blue is op koolstofbasis, in sommige varianten met magnesium
            voor een vollere smaak. Het is sterk in smaak, chloor en kalk, maar het is geen omgekeerde
            osmose en filtert daarmee minder breed.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Smaak en geur', 'Actieve kool vermindert chloor en verbetert de smaak merkbaar.'],
              ['Kalk', 'Vermindert kalk, wat ook de koeler en de kraan ten goede komt.'],
              ['Geen brede contaminantverwijdering', 'Voor lood, nitraat of PFAS is osmose de juiste keuze.'],
              ['Capaciteit hangt af van hardheid', 'Hoe harder het water, hoe sneller het patroon op is.'],
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
            <Link href="/grohe-blue-alternatief" className="text-[#005F8A] underline">alternatieven voor Grohe Blue</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vervangen en instellen op hardheid</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Grohe Blue houdt doorgaans bij hoeveel water je hebt getapt en geeft een signaal wanneer het
            filter vervangen moet worden. Die indicatie klopt alleen als het systeem bij installatie goed is
            ingesteld op je lokale waterhardheid. Stel die waarde dus correct in en controleer je hardheid
            via onze database.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Check je lokale water in de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid-database</Link>{' '}
            en bekijk de terugkerende kosten op{' '}
            <Link href="/grohe-blue-prijs" className="text-[#005F8A] underline">Grohe Blue prijs</Link>.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over het Grohe Blue filter</h2>
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
              ['/grohe-blue', 'Over Grohe Blue', 'Werking, modellen en prijs'],
              ['/grohe-blue-prijs', 'Grohe Blue prijs', 'Aanschaf, filters en CO2'],
              ['/waterhardheid', 'Waterhardheid per gemeente', 'Zoek de hardheid op voor jouw woonplaats'],
              ['/grohe-blue-alternatief', 'Grohe Blue alternatief', 'Bredere filtering of meer functies'],
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
