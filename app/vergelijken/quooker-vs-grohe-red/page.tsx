import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Quooker vs Grohe Red: welke kokend water kraan kiezen? (2026)',
    description:
      'Quooker of Grohe Red? Vergelijk de twee kokend water kranen op functies, prijs, onderhoud en filtering - plus het 4-in-1 osmose-alternatief.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/quooker-vs-grohe-red' },
    openGraph: {
      title: 'Quooker vs Grohe Red - kokend water kranen vergeleken (2026)',
      description:
        'Een eerlijke vergelijking van Quooker en Grohe Red: functies, prijs, onderhoud en filtering, met een 4-in-1 osmosekraan als alternatief.',
      url: 'https://waterfilterplatform.nl/vergelijken/quooker-vs-grohe-red',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Quooker of Grohe Red - wat is beter?',
    answer:
      'Beide leveren direct kokend water uit een geisoleerde boiler en zijn kwaliteitsmerken. Quooker heeft in Nederland het grootste dealernetwerk en de meeste naamsbekendheid, plus de CUBE-module voor gekoeld en bruisend water. Grohe Red komt uit het premium sanitairsegment met strak Duits design. Welke beter is, hangt af van je voorkeur voor merk, design en extra functies. Geen van beide bevat standaard een volledig osmosefilter.',
  },
  {
    question: 'Wat is het prijsverschil tussen Quooker en Grohe Red?',
    answer:
      'Beide zitten in het premium segment. Een Quooker ligt indicatief tussen circa 850 en 2.800 euro afhankelijk van model en accessoires; een Grohe Red indicatief tussen 1.200 en 2.000 euro. Bij beide komen installatie en lopende kosten (elektriciteit, filter) erbij. Controleer actuele prijzen bij de verkoper.',
  },
  {
    question: 'Hebben Quooker en Grohe Red een waterfilter?',
    answer:
      'Beide richten zich op kokend water, niet op brede filtratie. Quooker biedt optioneel een scale control / filter en met de CUBE ook gefilterd, gekoeld en bruisend water; Grohe Red werkt met een optioneel filterpatroon. Voor het verwijderen van bijvoorbeeld lood, nitraat of PFAS is een omgekeerde-osmosesysteem grondiger.',
  },
  {
    question: 'Wat kost het onderhoud van een Quooker of Grohe Red?',
    answer:
      'De lopende kosten bestaan vooral uit elektriciteit om de boiler op temperatuur te houden en periodiek ontkalken of een filterpatroon. In een hard-watergebied is ontkalken belangrijker. Reken bij beide op enkele tientallen euro per jaar aan stroom plus eventuele filter- of servicekosten.',
  },
  {
    question: 'Is er een goedkoper alternatief voor Quooker en Grohe Red?',
    answer:
      'Ja. Een 4-in-1 kraan met ingebouwd osmosefilter levert kokend, koud gefilterd, warm en bruisend water indicatief voor 699 tot 899 euro plus installatie - meestal onder een vergelijkbare Quooker- of Grohe Red-opstelling, en met een volwaardig osmosefilter erbij.',
  },
];

const vergelijking = [
  {
    naam: '4-in-1 osmosekraan',
    prijs: 'EUR 699-899',
    kokend: 'Ja (100 graden)',
    extra: 'Koud gefilterd + bruisend',
    filter: 'Osmose ingebouwd',
    highlight: true,
    notitie: 'Meest complete pakket met osmose, vaak de laagste totaalprijs.',
  },
  {
    naam: 'Quooker',
    prijs: 'EUR 850-2.800',
    kokend: 'Ja (100 graden)',
    extra: 'Gekoeld/bruisend met CUBE',
    filter: 'Optioneel scale/filter',
    highlight: false,
    notitie: 'Grootste dealernetwerk en naamsbekendheid in Nederland.',
  },
  {
    naam: 'Grohe Red',
    prijs: 'EUR 1.200-2.000',
    kokend: 'Ja (100 graden)',
    extra: 'Geen standaard bruisend',
    filter: 'Optioneel filterpatroon',
    highlight: false,
    notitie: 'Strak Duits design uit het premium sanitairsegment.',
  },
];

export default function QuookerVsGroheRedPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Quooker vs Grohe Red: welke kokend water kraan kiezen?',
          description:
            'Een eerlijke vergelijking van Quooker en Grohe Red op functies, prijs, onderhoud en filtering, met een 4-in-1 osmosekraan als alternatief.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/vergelijken/quooker-vs-grohe-red',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Quooker vs Grohe Red', url: 'https://waterfilterplatform.nl/vergelijken/quooker-vs-grohe-red' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Quooker vs Grohe Red</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker vs Grohe Red: welke kokend water kraan kiezen?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Quooker</strong> en <strong>Grohe Red</strong> zijn twee bekende kokend water kranen in
            het premium segment. We vergelijken ze eerlijk op functies, prijs, onderhoud en filtering - en
            laten zien wanneer een 4-in-1 osmosekraan een logischer keuze is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Kokend water kranen
            </Link>
            <Link
              href="/vergelijken/kokend-water-kraan-merken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle merken vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant / verkoper (richtprijzen)', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Quooker of Grohe Red?"
          answer="Beide leveren direct kokend water en zijn kwaliteitsmerken in het premium segment. Quooker heeft het grootste dealernetwerk in Nederland en met de CUBE ook gekoeld en bruisend water; Grohe Red biedt strak Duits design. Geen van beide heeft standaard een volledig osmosefilter. Wil je naast kokend water ook puur gefilterd en bruisend water, vaak voor een lagere totaalprijs, dan is een 4-in-1 osmosekraan het overwegen waard. Prijzen indicatief; controleer bij de verkoper."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Quooker en Grohe Red naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kokend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Extra</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filter</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.kokend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.extra}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.filter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je Quooker, wanneer Grohe Red?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies Quooker als...', 'Je waarde hecht aan het grootste dealernetwerk, naamsbekendheid en de optie van gekoeld/bruisend water via de CUBE.'],
              ['Kies Grohe Red als...', 'Je een strak Duits design uit het premium sanitairsegment wilt en kokend water je hoofddoel is.'],
              ['Kies geen van beide als...', 'Je ook een volwaardig osmosefilter wilt voor breder gefilterd water - dat zit bij geen van beide standaard.'],
              ['Kies een 4-in-1 osmose als...', 'Je kokend, gefilterd en bruisend water wilt combineren, vaak voor een lagere totaalprijs.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">Quooker alternatief</Link>,{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline">Grohe Red alternatief</Link>{' '}
            of het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmosesysteem</Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="vierInEen"
          campaign="kokend-water"
          content="vergelijken-quooker-vs-grohe-red-cta"
          label="Bekijk de PureAqua 4-in-1 kraan"
          title="Liever kokend en gefilterd water uit een kraan?"
          sub="De PureAqua 4-in-1 kraan combineert kokend en gefilterd water uit een kraan. Bekijken kan bij onze partner PureAqua."
        />

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Quooker vs Grohe Red</h2>
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
              ['/vergelijken/kokend-water-kraan-merken', 'Kokend water kraan merken', 'Alle merken in een overzicht'],
              ['/vergelijken/quooker-vs-selsiuz', 'Quooker vs Selsiuz', 'Twee grootste NL-merken vergeleken'],
              ['/quooker-alternatief', 'Quooker alternatief', 'Vergelijk de opties naast Quooker'],
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
