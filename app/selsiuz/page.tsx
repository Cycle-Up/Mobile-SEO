import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Selsiuz kokend water kraan: modellen, prijs en onderhoud (2026)',
    description:
      'Alles over de Selsiuz kokend water kraan: werking, modellen, afwerkingen, prijs en onderhoud - en hoe het zich verhoudt tot alternatieven.',
    alternates: { canonical: 'https://waterfilterplatform.nl/selsiuz' },
    openGraph: {
      title: 'Selsiuz kokend water kraan: modellen, prijs en onderhoud (2026)',
      description:
        'Een neutraal overzicht van de Selsiuz kokend water kraan: werking, modellen, prijs, onderhoud en alternatieven.',
      url: 'https://waterfilterplatform.nl/selsiuz',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een Selsiuz kokend water kraan?',
    answer:
      'Selsiuz is een Nederlands merk van kokend water kranen. Een Selsiuz levert direct kokend water (circa 100 graden) via een geisoleerde combi-boiler onder het aanrecht, naast gewoon koud en warm water. Het merk staat bekend om een strak design en meerdere afwerkingen. Een volledig osmosefilter zit er niet standaard in; de focus ligt op temperatuur en design.',
  },
  {
    question: 'Welke modellen en afwerkingen heeft Selsiuz?',
    answer:
      'Selsiuz biedt verschillende kraanontwerpen en afwerkingen (zoals RVS-, zwart-, koper- en goudtinten) en combi-boilers in meerdere capaciteiten. De exacte line-up wisselt per jaar; controleer de actuele modellen en specificaties bij de officiele verkoper. Welk model past, hangt af van je waterverbruik, waterdruk en gewenste uitstraling.',
  },
  {
    question: 'Wat kost een Selsiuz?',
    answer:
      'Een Selsiuz set met combi-boiler kost indicatief tussen de 1.000 en 1.700 euro, afhankelijk van model en afwerking, exclusief installatie. Reken daarnaast op lopende kosten voor elektriciteit en periodiek onderhoud. De volledige opbouw staat op onze pagina over de Selsiuz prijs.',
  },
  {
    question: 'Heeft een Selsiuz een waterfilter ingebouwd?',
    answer:
      'Nee, niet standaard een volledig osmosefilter. Selsiuz richt zich op kokend, koud en warm water. Wil je water dat ook kalk, chloor, lood, nitraat en microplastics aanpakt, dan biedt een 4-in-1 kraan met ingebouwde omgekeerde osmose een completere oplossing zonder los filtersysteem.',
  },
  {
    question: 'Is Selsiuz een goede keuze?',
    answer:
      'Selsiuz is een gevestigd Nederlands merk met degelijke kokendwaterkranen en strak design. Of het de beste keuze is, hangt af van je wensen: zoek je alleen kokend water met een premium uitstraling, dan is Selsiuz sterk. Wil je ook gefilterd of bruisend water of een lagere totaalprijs, vergelijk dan met alternatieven zoals een 4-in-1 osmosekraan.',
  },
];

const subpaginas = [
  ['/selsiuz-prijs', 'Selsiuz prijs', 'Wat kost een Selsiuz inclusief onderhoud en installatie?'],
  ['/selsiuz-onderhoud', 'Selsiuz onderhoud', 'Ontkalken, filter en levensduur van de combi-boiler.'],
  ['/selsiuz-alternatief', 'Selsiuz alternatief', 'Meer functies of een lagere prijs? De opties vergeleken.'],
];

export default function SelsiuzPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Selsiuz kokend water kraan: modellen, prijs en onderhoud',
          description:
            'Een neutraal overzicht van de Selsiuz kokend water kraan: werking, modellen, prijs, onderhoud en alternatieven.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/selsiuz',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Selsiuz', url: 'https://waterfilterplatform.nl/selsiuz' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'Selsiuz', description: 'Nederlands merk van kokend water kranen met combi-boiler en strak design.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Selsiuz</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Selsiuz kokend water kraan: modellen, prijs en onderhoud
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Selsiuz</strong> is een Nederlands merk van kokend water kranen met een strak design en
            een combi-boiler onder het aanrecht. Op deze pagina vind je een neutraal overzicht: hoe een
            Selsiuz werkt, welke modellen en afwerkingen er zijn, wat het kost, het onderhoud en hoe het
            zich verhoudt tot alternatieven.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/selsiuz-prijs"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Selsiuz prijs
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
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant / verkoper', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat moet je weten over de Selsiuz kokend water kraan?"
          answer="Selsiuz is een Nederlands merk van kokend water kranen met een combi-boiler en strak design. Een Selsiuz levert kokend, koud en warm water, maar heeft geen standaard osmosefilter. De aanschaf ligt indicatief tussen 1.000 en 1.700 euro exclusief installatie, plus lopende kosten voor stroom en onderhoud. Sterk voor wie kokend water en design zoekt; wil je ook gefilterd of bruisend water of een lagere prijs, vergelijk dan met een 4-in-1 osmosekraan."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een Selsiuz?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een Selsiuz combineert een kraan met een combi-boiler onder het aanrecht. De boiler houdt water
            op temperatuur, zodat je direct kokend water hebt voor thee, koffie of koken. Daarnaast levert
            de kraan gewoon koud en warm water, waardoor hij de bestaande mengkraan kan vervangen. Een
            beveiliging (zoals een dubbele bediening) voorkomt dat er per ongeluk kokend water loopt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Instant kokend water', 'Circa 100 graden uit de kraan via een geisoleerde combi-boiler.'],
              ['Koud en warm water', 'De meeste sets vervangen de mengkraan en leveren ook gewoon koud en warm water.'],
              ['Geen standaard osmosefilter', 'De focus ligt op temperatuur en design, niet op brede filtratie.'],
              ['Meerdere afwerkingen', 'Beschikbaar in verschillende tinten en kraanontwerpen voor een strakke uitstraling.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je eerst de categorie begrijpen? Lees onze gids over{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kranen</Link>{' '}
            en{' '}
            <Link href="/heet-water-kraan" className="text-[#005F8A] underline">heet water kranen</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Modellen, prijs en onderhoud</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Selsiuz biedt meerdere kraanontwerpen, afwerkingen en boilercapaciteiten. Omdat de line-up en
            prijzen per jaar wisselen, houden we specifieke cijfers indicatief en verwijzen we voor details
            naar de verdiepende pagina's. Op hoofdlijnen: de aanschaf van een set ligt indicatief tussen de
            1.000 en 1.700 euro exclusief installatie, met lopende kosten voor elektriciteit en periodiek
            onderhoud zoals ontkalken.
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Selsiuz versus een 4-in-1 osmosekraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Selsiuz is sterk voor wie primair kokend water en design zoekt. Wie ook puur gefilterd of
            bruisend water wil, of een lagere totaalprijs, vindt een 4-in-1 kraan met ingebouwd
            osmosefilter vaak een completer pakket: kokend, koud gefilterd, warm en bruisend water uit een
            kraan, inclusief een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose installatie</Link>.
            De volledige afweging lees je op{' '}
            <Link href="/selsiuz-alternatief" className="text-[#005F8A] underline">Selsiuz alternatief</Link>.
          </p>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Selsiuz</h2>
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
              ['/kokend-water-kraan', 'Kokend water kraan', 'Complete gids over kokend water kranen'],
              ['/vergelijken/quooker-vs-selsiuz', 'Quooker vs Selsiuz', 'Twee grootste NL-merken vergeleken'],
              ['/selsiuz-alternatief', 'Selsiuz alternatief', 'Meer functies voor minder geld?'],
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
