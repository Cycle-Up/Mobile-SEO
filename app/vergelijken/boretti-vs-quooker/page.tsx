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
    title: 'Boretti vs Quooker: welke kokend water kraan kiezen? (2026)',
    description:
      'Boretti of Quooker kokend water kraan? Vergelijk prijs, dealernetwerk, functies en onderhoud - en wanneer een 4-in-1 osmosekraan logischer is.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/boretti-vs-quooker' },
    openGraph: {
      title: 'Boretti vs Quooker - kokend water kranen vergeleken (2026)',
      description:
        'Een eerlijke vergelijking van Boretti en Quooker op prijs, functies, dealernetwerk en onderhoud, met een 4-in-1 osmosekraan als alternatief.',
      url: 'https://waterfilterplatform.nl/vergelijken/boretti-vs-quooker',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Boretti of Quooker - wat is beter?',
    answer:
      'Beide leveren direct kokend water uit een geisoleerde boiler. Quooker is de bekendste speler in Nederland met het grootste dealer- en servicenetwerk en de meeste accessoires (zoals de CUBE voor gekoeld/bruisend water). Boretti positioneert zich vaak scherper geprijsd binnen het keukenmerkenlandschap. Welke beter is, hangt af van je voorkeur voor merk, prijs en service. Geen van beide heeft standaard een volledig osmosefilter.',
  },
  {
    question: 'Is Boretti goedkoper dan Quooker?',
    answer:
      'Boretti mikt doorgaans op een iets scherpere prijs dan Quooker, maar beide zitten in het hogere segment. De totale prijs hangt af van model, boiler en accessoires, plus installatie. Vergelijk altijd de complete opstelling inclusief installatie en lopende kosten in plaats van alleen de kale kraanprijs.',
  },
  {
    question: 'Hebben Boretti en Quooker een waterfilter?',
    answer:
      'Beide richten zich op kokend water, niet op brede filtratie. Quooker biedt optioneel een scale control / filter en met de CUBE ook gefilterd, gekoeld en bruisend water; Boretti levert kokendwaterkranen zonder standaard osmose. Voor het verwijderen van lood, nitraat of PFAS is een omgekeerde-osmosesysteem nodig.',
  },
  {
    question: 'Wat kost het onderhoud van een Boretti of Quooker?',
    answer:
      'De lopende kosten bestaan vooral uit elektriciteit om de boiler op temperatuur te houden en periodiek ontkalken of een filterpatroon. In een hard-watergebied is ontkalken belangrijker. Reken bij beide op enkele tientallen euro per jaar aan stroom plus eventuele filter- of servicekosten.',
  },
  {
    question: 'Is er een goedkoper alternatief voor Boretti en Quooker?',
    answer:
      'Ja. Een 4-in-1 kraan met ingebouwd osmosefilter levert kokend, koud gefilterd, warm en bruisend water indicatief voor 699 tot 899 euro plus installatie - meestal onder een vergelijkbare Boretti- of Quooker-opstelling, en met een volwaardig osmosefilter erbij.',
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
    naam: 'Boretti',
    prijs: 'EUR 900-1.700',
    kokend: 'Ja (100 graden)',
    extra: 'Geen standaard bruisend',
    filter: 'Niet standaard',
    highlight: false,
    notitie: 'Vaak scherper geprijsd; keukenmerk met kokendwaterkranen.',
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
];

export default function BorettiVsQuookerPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Boretti vs Quooker: welke kokend water kraan kiezen?',
          description:
            'Een eerlijke vergelijking van Boretti en Quooker op prijs, functies, dealernetwerk en onderhoud, met een 4-in-1 osmosekraan als alternatief.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/vergelijken/boretti-vs-quooker',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Boretti vs Quooker', url: 'https://waterfilterplatform.nl/vergelijken/boretti-vs-quooker' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Boretti vs Quooker</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Boretti vs Quooker: welke kokend water kraan kiezen?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Boretti</strong> en <strong>Quooker</strong> leveren beide direct kokend water. We
            vergelijken ze eerlijk op prijs, functies, dealernetwerk en onderhoud - en laten zien wanneer
            een 4-in-1 osmosekraan een logischer keuze is.
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
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper (richtprijzen)', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Boretti of Quooker?"
          answer="Beide leveren direct kokend water uit een premium kraan. Quooker heeft het grootste dealer- en servicenetwerk in Nederland en met de CUBE ook gekoeld en bruisend water; Boretti is vaak scherper geprijsd. Geen van beide heeft standaard een volledig osmosefilter. Wil je naast kokend water ook puur gefilterd en bruisend water, vaak voor een lagere totaalprijs, dan is een 4-in-1 osmosekraan het overwegen waard. Prijzen indicatief; controleer bij de verkoper."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Boretti en Quooker naast elkaar</h2>
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je Boretti, wanneer Quooker?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies Boretti als...', 'Je een scherpere prijs zoekt binnen een keukenmerk en kokend water je hoofddoel is.'],
              ['Kies Quooker als...', 'Je waarde hecht aan het grootste dealer-/servicenetwerk en de optie van gekoeld/bruisend via de CUBE.'],
              ['Kies geen van beide als...', 'Je een volwaardig osmosefilter wilt - dat zit bij beide niet standaard.'],
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
            <Link href="/boretti-alternatief" className="text-[#005F8A] underline">Boretti alternatief</Link>,{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">Quooker alternatief</Link>{' '}
            of het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmosesysteem</Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="vierInEen"
          campaign="kokend-water"
          content="vergelijken-boretti-vs-quooker-cta"
          label="Bekijk de PureAqua 4-in-1 kraan"
          title="Liever kokend en gefilterd water uit een kraan?"
          sub="De PureAqua 4-in-1 kraan combineert kokend en gefilterd water uit een kraan. Bekijken kan bij onze partner PureAqua."
        />

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Boretti vs Quooker</h2>
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
              ['/vergelijken/quooker-vs-selsiuz', 'Quooker vs Selsiuz', 'Twee grootste NL-merken'],
              ['/boretti-alternatief', 'Boretti alternatief', 'Vergelijk de opties naast Boretti'],
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
