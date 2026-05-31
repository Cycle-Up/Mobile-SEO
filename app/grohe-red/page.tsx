import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Grohe Red: kokend water kraan, modellen en kosten (2026)',
    description:
      'Alles over de Grohe Red kokend water kraan: hoe het werkt, Mono vs Duo, de boiler en het filter, wat het kost en hoe het zich verhoudt tot alternatieven.',
    alternates: { canonical: 'https://waterfilterplatform.nl/grohe-red' },
    openGraph: {
      title: 'Grohe Red: kokend water kraan, modellen en kosten (2026)',
      description:
        'Een neutraal overzicht van de Grohe Red: werking, Mono vs Duo, boiler en filter, prijs en alternatieven.',
      url: 'https://waterfilterplatform.nl/grohe-red',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is de Grohe Red?',
    answer:
      'De Grohe Red is een keukenkraan van Grohe die direct kokend water (circa 100 graden) levert uit een geisoleerde boiler onder het aanrecht, naast gewoon koud en warm water. Het is de kokendwater-tegenhanger van de Grohe Blue (die gefilterd, gekoeld en bruisend water levert). Een volledig osmosefilter zit er niet standaard in; de focus ligt op kokend water en design.',
  },
  {
    question: 'Wat is het verschil tussen Grohe Red Mono en Duo?',
    answer:
      'Het verschil zit vooral in de boiler en de kraanfunctie. De Mono-uitvoering levert kokend en koud water, terwijl de Duo-variant ook de reguliere warm/koud-mengkraanfunctie volledig integreert. Daarnaast zijn er boilermaten (M en L) voor verschillende capaciteiten. Welke past, hangt af van je verbruik en of je de bestaande mengkraan wilt vervangen. Controleer de actuele modellen bij de verkoper.',
  },
  {
    question: 'Heeft de Grohe Red een waterfilter?',
    answer:
      'De Grohe Red werkt met een filterpatroon dat vooral de boiler tegen kalk beschermt; het is geen omgekeerde-osmosefilter voor brede contaminantverwijdering. Wil je naast kokend water ook puur gefilterd water (kalk, chloor, lood, nitraat), dan biedt een 4-in-1 kraan met ingebouwde osmose een completere oplossing.',
  },
  {
    question: 'Wat kost een Grohe Red?',
    answer:
      'De aanschaf ligt indicatief tussen de 1.200 en 2.000 euro, afhankelijk van Mono of Duo, de boilermaat en de afwerking, exclusief installatie. Daar komen lopende kosten bij voor elektriciteit (de boiler houdt water op temperatuur) en periodiek een filter of ontkalken. De volledige opbouw staat op onze pagina over de Grohe Red prijs.',
  },
  {
    question: 'Is de Grohe Red een goede keuze?',
    answer:
      'Voor wie kokend water uit een premium kraan met strak Duits design wil, is de Grohe Red sterk. Of het de beste keuze is, hangt af van je wensen en budget. Wil je ook gefilterd of bruisend water of een lagere totaalprijs, vergelijk dan met een 4-in-1 osmosekraan; dat lees je op Grohe Red alternatief.',
  },
];

const subpaginas = [
  ['/grohe-red-prijs', 'Grohe Red prijs', 'Aanschaf (Mono/Duo), installatie, filter en jaarlijkse kosten.'],
  ['/grohe-red-filter', 'Grohe Red filter', 'Wanneer vervangen, kosten en instellen op waterhardheid.'],
  ['/grohe-red-alternatief', 'Grohe Red alternatief', 'Meer functies of een lagere prijs? De opties vergeleken.'],
];

export default function GroheRedPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Grohe Red: kokend water kraan, modellen en kosten',
          description:
            'Een neutraal overzicht van de Grohe Red kokend water kraan: werking, Mono vs Duo, boiler en filter, prijs en alternatieven.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/grohe-red',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Grohe Red', url: 'https://waterfilterplatform.nl/grohe-red' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'Grohe Red', description: 'Kokend water kraan van Grohe met geisoleerde boiler onder het aanrecht.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Grohe Red</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Red: kokend water kraan, modellen en kosten
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>Grohe Red</strong> levert direct kokend water uit een geisoleerde boiler onder je
            aanrecht. Op deze pagina vind je een neutraal overzicht: hoe de Grohe Red werkt, het verschil
            tussen Mono en Duo, de boiler en het filter, wat het kost en hoe het zich verhoudt tot
            alternatieven.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/grohe-red-prijs"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Grohe Red prijs
            </Link>
            <Link
              href="/kokend-water-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kokend water kranen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Wat moet je weten over de Grohe Red?"
          answer="De Grohe Red is een kokend water kraan van Grohe met een geisoleerde boiler onder het aanrecht; de kokendwater-tegenhanger van de Grohe Blue. Er zijn Mono- en Duo-uitvoeringen en boilermaten (M/L). Een filterpatroon beschermt vooral de boiler tegen kalk; het is geen osmosefilter. De aanschaf ligt indicatief tussen 1.200 en 2.000 euro exclusief installatie, plus stroom en filter/ontkalken. Sterk voor wie kokend water en premium design wil; voor gefilterd of bruisend water of een lagere prijs is een 4-in-1 osmosekraan het overwegen waard."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt de Grohe Red?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Grohe Red combineert een keukenkraan met een geisoleerde boiler onder het aanrecht die water
            op temperatuur houdt, zodat je direct kokend water hebt voor thee, koffie of koken. Een
            kinderslot of dubbele bediening voorkomt dat er per ongeluk kokend water loopt. Afhankelijk van
            de uitvoering vervangt de kraan ook je reguliere mengkraan.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Instant kokend water', 'Circa 100 graden uit de kraan via een geisoleerde boiler (maat M of L).'],
              ['Mono of Duo', 'Mono levert kokend + koud; Duo integreert ook de volledige warm/koud-mengkraan.'],
              ['Filter voor de boiler', 'Een filterpatroon beschermt de boiler tegen kalk; geen osmosefilter.'],
              ['Premium design', 'Strak Duits sanitairdesign in meerdere afwerkingen.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je de categorie eerst begrijpen? Lees onze gids over{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kranen</Link>{' '}
            en het verschil met de gefilterd/bruisend-variant op{' '}
            <Link href="/vergelijken/grohe-red-vs-grohe-blue" className="text-[#005F8A] underline">Grohe Red vs Grohe Blue</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Modellen, prijs en filter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Grohe Red is er als Mono en Duo, met boilermaten M en L en verschillende afwerkingen. Omdat
            de line-up en prijzen per jaar wisselen, houden we cijfers indicatief en verwijzen we voor
            details naar de verdiepende pagina's. Op hoofdlijnen: de aanschaf ligt indicatief tussen 1.200
            en 2.000 euro exclusief installatie, met lopende kosten voor elektriciteit en een filter.
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Grohe Red versus een 4-in-1 osmosekraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Grohe Red is sterk in kokend water met premium design. Wil je daarnaast puur gefilterd of
            bruisend water, dan biedt een 4-in-1 kraan met ingebouwd osmosefilter vaak een completer pakket:
            kokend, koud gefilterd, warm en bruisend water uit een kraan, inclusief een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose installatie</Link>.
            De volledige afweging lees je op{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline">Grohe Red alternatief</Link>.
          </p>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de Grohe Red</h2>
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
              ['/kokend-water-kraan', 'Kokend water kraan', 'Complete gids over de categorie'],
              ['/vergelijken/grohe-red-vs-grohe-blue', 'Grohe Red vs Grohe Blue', 'Kokend versus gefilterd/bruisend'],
              ['/grohe-red-alternatief', 'Grohe Red alternatief', 'Meer functies voor minder geld?'],
              ['/4-in-1-kraan', '4-in-1 kraan', 'Kokend, gefilterd en bruisend uit een kraan'],
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
