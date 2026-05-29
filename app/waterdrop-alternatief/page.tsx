import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Waterdrop alternatief en review: beste osmosefilters 2026',
    description:
      'Waterdrop osmosefilter review en alternatieven: vergelijk tankless RO-systemen op prijs, capaciteit, certificering en filterkosten in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/waterdrop-alternatief' },
    openGraph: {
      title: 'Waterdrop alternatief en review - osmosefilters 2026',
      description:
        'Waterdrop maakt populaire tankless osmosefilters. Vergelijk de modellen met alternatieven op prijs, capaciteit en certificering.',
      url: 'https://waterfilterplatform.nl/waterdrop-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Is Waterdrop een goed osmosefilter?',
    answer:
      'Waterdrop maakt populaire tankless omgekeerde-osmosesystemen die compact zijn en een goede TDS-reductie halen. De bekendste modellen (zoals de G-serie) hebben een lage afvalwaterratio en snelle doorstroming. Let bij aankoop op onafhankelijke certificering (NSF/ANSI 58) en de jaarlijkse filterkosten, want die bepalen samen met de aanschafprijs de totale kosten.',
  },
  {
    question: 'Wat is een goed alternatief voor Waterdrop?',
    answer:
      'Goede alternatieven voor een Waterdrop osmosefilter zijn andere tankless RO-systemen en een 4-in-1 kraan met ingebouwde osmose. Een 4-in-1 kraan combineert kokend, koud gefilterd en bruisend water met osmose in een kraan, terwijl een los Waterdrop-systeem alleen gefilterd drinkwater levert. Welke beter past hangt af van of je ook kokend of bruisend water wilt.',
  },
  {
    question: 'Wat kost een Waterdrop osmosefilter per jaar?',
    answer:
      'Naast de aanschaf (doorgaans 250-600 euro) betaal je jaarlijks voor vervangfilters. Reken op 60-150 euro per jaar afhankelijk van model en waterverbruik. Tankless systemen hebben vaak gecombineerde filterpatronen die makkelijk te wisselen zijn. Vergelijk de filterkosten over vijf jaar voordat je kiest.',
  },
  {
    question: 'Waterdrop of een 4-in-1 osmosekraan: wat is beter?',
    answer:
      'Een Waterdrop systeem is gericht op puur drinkwater via een aparte kraan of bestaande kraan. Een 4-in-1 osmosekraan levert daarnaast kokend en bruisend water uit dezelfde kraan. Wil je alleen schoon drinkwater, dan is een tankless RO-systeem prima; wil je een complete keukenoplossing, dan biedt een 4-in-1 kraan met osmose meer.',
  },
];

const topAlternatieven = [
  {
    naam: '4-in-1 kraan met osmose',
    prijs: 'EUR 699-899',
    type: 'Kraan + osmose',
    extra: 'Kokend + bruisend',
    highlight: true,
    notitie: 'Osmose plus kokend, koud gefilterd en bruisend water uit een kraan.',
  },
  {
    naam: 'Waterdrop tankless RO (referentie)',
    prijs: 'EUR 250-600',
    type: 'Tankless RO',
    extra: 'Alleen drinkwater',
    highlight: false,
    notitie: 'Compact, lage afvalwaterratio, snelle doorstroming; alleen gefilterd water.',
  },
  {
    naam: 'Onderbouw osmose met tank',
    prijs: 'EUR 150-400',
    type: 'RO met drukvat',
    extra: 'Alleen drinkwater',
    highlight: false,
    notitie: 'Klassiek 4-5 traps systeem met opslagtank; goedkoper, meer ruimte nodig.',
  },
];

export default function WaterdropAlternatiefPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterdrop alternatief', url: 'https://waterfilterplatform.nl/waterdrop-alternatief' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Waterdrop alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterdrop alternatief en review: welke osmosefilter kies je?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Waterdrop</strong> maakt populaire tankless osmosefilters. Maar is het de beste
            keuze, of past een <strong>Waterdrop alternatief</strong> beter bij jou? We bespreken wat
            Waterdrop biedt en vergelijken het met andere osmosesystemen en de 4-in-1 osmosekraan.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmosefilter kopen
            </Link>
            <Link
              href="/beste-osmosefilter-2026"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Beste osmosefilters 2026
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat is het beste Waterdrop alternatief?"
          answer="Waterdrop maakt compacte tankless osmosefilters met goede TDS-reductie. Een sterk alternatief is een 4-in-1 kraan met ingebouwde osmose: die levert naast puur drinkwater ook kokend en bruisend water uit een kraan. Let bij elke osmose-aankoop op NSF/ANSI 58-certificering en de jaarlijkse filterkosten; die bepalen samen met de aanschaf de echte prijs."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt Waterdrop?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waterdrop is bekend van tankless omgekeerde-osmosesystemen: compacte units zonder groot
            drukvat, met een snelle doorstroming en een relatief lage afvalwaterratio. Ze filteren op
            membraanniveau en verwijderen daarmee kalk, lood, nitraat, PFAS en microplastics.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Tankless ontwerp', 'Compact, geen drukvat; bespaart ruimte onder het aanrecht.'],
              ['Goede TDS-reductie', 'Osmosemembraan verwijdert het grootste deel van de opgeloste stoffen.'],
              ['Lage afvalwaterratio', 'Moderne modellen halen gunstige verhoudingen, vaak rond 1:1.'],
              ['Alleen drinkwater', 'Levert puur water via een aparte of bestaande kraan, geen kokend of bruisend water.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Lees hoe osmose precies werkt op onze pagina over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>,
            en vergelijk modellen in onze gids{' '}
            <Link href="/beste-osmosefilter-2026" className="text-[#005F8A] underline">beste osmosefilters 2026</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterdrop vs alternatieven</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Type</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Extra functies</th>
                </tr>
              </thead>
              <tbody>
                {topAlternatieven.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.type}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar let je op bij de keuze?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Certificering', 'Kies een systeem met NSF/ANSI 58 voor geverifieerde TDS-, lood- en arseenreductie.'],
              ['Filterkosten per jaar', 'De jaarlijkse vervangfilters bepalen mede de totale kosten; reken over 5 jaar.'],
              ['Ruimte en tank', 'Tankless bespaart ruimte; een systeem met drukvat is goedkoper maar groter.'],
              ['Extra functies', 'Wil je ook kokend of bruisend water, dan is een 4-in-1 osmosekraan completer.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Meer weten over certificering? Lees over{' '}
            <Link href="/keurmerken/nsf-ansi-58" className="text-[#005F8A] underline">NSF/ANSI 58</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie</h2>
          <p className="text-gray-700 leading-relaxed">
            Waterdrop is een solide keuze voor wie een compact, los osmosesysteem zoekt. Wil je naast
            puur drinkwater ook kokend en bruisend water, dan biedt een{' '}
            <strong>4-in-1 kraan met osmosefilter</strong> een completere keukenoplossing. Bekijk de
            opties in onze{' '}
            <Link href="/beste-osmosefilter-2026" className="text-[#005F8A] underline">osmosefilter-koopgids</Link>{' '}
            of lees verder over{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">een osmosesysteem kopen</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Waterdrop</h2>
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
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Hoe werkt osmosefiltratie?'],
              ['/beste-osmosefilter-2026', 'Beste osmosefilters 2026', 'Koopgids met shortlist'],
              ['/omgekeerde-osmose/kopen', 'Osmosefilter kopen', 'Waar let je op bij aanschaf'],
              ['/keurmerken/nsf-ansi-58', 'NSF/ANSI 58', 'De norm voor osmoseprestaties'],
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
