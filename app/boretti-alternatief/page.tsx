import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Boretti alternatief: kokend water kraan met osmose (2026)',
    description:
      'Zoek je een alternatief voor de Boretti kokend water kraan? Vergelijk prijs en functies met een 4-in-1 osmosekraan die ook gefilterd en bruisend water geeft.',
    alternates: { canonical: 'https://waterfilterplatform.nl/boretti-alternatief' },
    openGraph: {
      title: 'Boretti alternatief vergelijken - beste opties 2026',
      description:
        'Boretti levert kokend water met een designkraan. Een 4-in-1 osmosekraan voegt gefilterd en bruisend water toe, vaak voor minder geld.',
      url: 'https://waterfilterplatform.nl/boretti-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor de Boretti kokend water kraan?',
    answer:
      'Het sterkste alternatief voor de Boretti kokend water kraan is een 4-in-1 kraan met ingebouwd osmosefilter. Boretti staat bekend om design-keukenapparatuur en levert een betrouwbare kokendwaterkraan. Wie naast kokend water ook puur gefilterd en bruisend water wil, vindt een 4-in-1 osmosekraan een completer pakket, doorgaans voor een lagere prijs.',
  },
  {
    question: 'Heeft de Boretti kraan een osmosefilter?',
    answer:
      'De Boretti kokend water kraan richt zich op kokend en mengwater; een volledig omgekeerde osmose filter zit er niet standaard in. Voor water dat ook lood, nitraat, PFAS en microplastics verwijdert, biedt een 4-in-1 kraan met ingebouwde osmose een completere oplossing.',
  },
  {
    question: 'Is er een goedkoper alternatief dan Boretti?',
    answer:
      'Ja. Een Boretti kokend water kraan met boiler kost al snel meer dan 1.000 euro. Een 4-in-1 kraan met osmosefilter levert kokend, koud gefilterd, warm en bruisend water vanaf 699 tot 899 euro, met osmosesysteem inbegrepen. Reken installatie- en filterkosten over meerdere jaren altijd mee.',
  },
  {
    question: 'Kun je een Boretti alternatief zelf installeren?',
    answer:
      'Een 4-in-1 kraan met osmosefilter is in de meeste gevallen zelf te installeren met standaard aansluitingen onder het aanrecht en een Nederlandstalige handleiding. Daarmee bespaar je op installatiekosten die bij designmerken vaak via een dealer lopen.',
  },
];

const topAlternatieven = [
  {
    naam: '4-in-1 kraan met osmose',
    prijs: 'EUR 699-899',
    kokend: 'Ja (100 graden)',
    gefilterd: 'Ja (osmose ingebouwd)',
    bruisend: 'Ja, standaard',
    highlight: true,
    notitie: 'Meest complete pakket met ingebouwd osmosefilter, voor de laagste prijs.',
  },
  {
    naam: 'Boretti (referentie)',
    prijs: 'EUR 1.000-1.800',
    kokend: 'Ja (100 graden)',
    gefilterd: 'Niet standaard',
    bruisend: 'Niet standaard',
    highlight: false,
    notitie: 'Design-keukenmerk, premium uitstraling, betrouwbaar kokend water.',
  },
  {
    naam: 'Quooker Combi+',
    prijs: 'EUR 1.500-2.800',
    kokend: 'Ja (100 graden)',
    gefilterd: 'Optioneel scale control',
    bruisend: 'Met CUBE module',
    highlight: false,
    notitie: 'Bekendste merk in Nederland met groot dealernetwerk.',
  },
];

export default function BorettiAlternatiefPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Boretti alternatief: kokend water kraan met osmose (2026)',
          description: 'Zoek je een alternatief voor de Boretti kokend water kraan? Vergelijk prijs en functies met een 4-in-1 osmosekraan die ook gefilterd en bruisend water geeft.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/boretti-alternatief',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Boretti alternatief', url: 'https://waterfilterplatform.nl/boretti-alternatief' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Boretti alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Boretti alternatief: meer functies voor minder geld?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>Boretti</strong> kokend water kraan past bij design-keukens. Toch zoeken veel
            mensen een <strong>alternatief voor Boretti</strong> dat naast kokend water ook gefilterd
            of bruisend water levert - of simpelweg een{' '}
            <strong>goedkoper alternatief voor Boretti</strong>. We zetten de opties naast elkaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Merken vergelijken
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
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat is het beste Boretti alternatief?"
          answer="Een Boretti alternatief levert dezelfde kokendwaterfunctie, vaak goedkoper en met meer mogelijkheden. De beste keuze is een 4-in-1 kraan met ingebouwd osmosefilter: die biedt ook gefilterd koud en bruisend water dat de Boretti niet standaard heeft. De Boretti bevat geen volwaardig osmosefilter; een osmosesysteem beschermt de kraan bij hard water en verbetert de smaak."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt de Boretti kraan?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Boretti is een Nederlands merk dat bekendstaat om design-keukenapparatuur. De kokend
            water kraan levert instant kokend water naast koud en warm water, met een premium
            uitstraling.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Instant kokend water (100 graden)', 'Via een boiler onder het aanrecht voor direct gebruik.'],
              ['Koud en warm water', 'De kraan vervangt de mengkraan en levert ook gewoon koud en warm water.'],
              ['Geen standaard osmosefilter', 'Boretti richt zich op temperatuur en design, niet op diepe filtratie.'],
              ['Geen standaard bruisend water', 'Bruisend water is geen standaardfunctie.'],
              ['Premium design', 'Past bij design-keukens, in meerdere afwerkingen.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor wie ook puur gefilterd of bruisend water wil, of een lagere totaalprijs, zijn er
            alternatieven die meer bieden. Begrijp eerst de categorie via onze gids over{' '}
            <Link href="/heet-water-kraan" className="text-[#005F8A] underline">heet water kranen</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De beste alternatieven voor Boretti vergeleken</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Merk</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kokend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gefilterd</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bruisend</th>
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
                    <td className="py-2.5 px-3 text-gray-700">{a.kokend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.gefilterd}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.bruisend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie</h2>
          <p className="text-gray-700 leading-relaxed">
            Boretti is een sterke keuze voor wie design en kokend water vooropstelt. Maar voor de
            meeste huishoudens die ook gefilterd of bruisend water willen, of slimmer met hun budget
            omgaan, biedt een <strong>4-in-1 kraan met osmosefilter</strong> een completer pakket voor
            minder geld. Vergelijk verder met{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">het Quooker alternatief</Link>{' '}
            of de{' '}
            <Link href="/vergelijken/kokend-water-kraan-merken" className="text-[#005F8A] underline">merkvergelijking</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Boretti alternatieven</h2>
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
              ['/selsiuz-alternatief', 'Selsiuz alternatief', 'Vergelijk de opties naast Selsiuz'],
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
