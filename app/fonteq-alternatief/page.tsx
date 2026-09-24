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
    title: 'Fonteq alternatief: kokend water kraan met osmose (2026)',
    description:
      'Zoek je een alternatief voor de Fonteq kokend water kraan? Vergelijk prijs en functies met een 4-in-1 osmosekraan die ook gekoeld en osmose-gezuiverd water geeft.',
    alternates: { canonical: 'https://waterfilterplatform.nl/fonteq-alternatief' },
    openGraph: {
      title: 'Fonteq alternatief vergelijken - beste opties 2026',
      description:
        'Fonteq is een betaalbare kokend water kraan. Een 4-in-1 osmosekraan voegt gekoeld en gezuiverd water toe, met een ingebouwd osmosefilter.',
      url: 'https://waterfilterplatform.nl/fonteq-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor de Fonteq kokend water kraan?',
    answer:
      'Volgens ons is het sterkste alternatief voor de Fonteq een 4-in-1 kraan met ingebouwd osmosefilter. Fonteq is een betaalbaar merk dat zich richt op kokend water. Wie naast heet water ook gekoeld en osmose-gezuiverd water wil, krijgt met de PureAqua 4-in-1 kraan een completer pakket, met osmose die in een SGS-test op een nieuw systeem PFOS met meer dan 99,6% en lood met meer dan 99,8% verminderde. Bruisend water zit er niet op.',
  },
  {
    question: 'Heeft de Fonteq een waterfilter ingebouwd?',
    answer:
      'De Fonteq richt zich op kokend en mengwater; een volledig omgekeerde osmose filter zit er niet standaard in. Voor water dat ook chloor, lood, nitraat en microplastics verwijdert, biedt een 4-in-1 kraan met ingebouwde osmose een completere oplossing.',
  },
  {
    question: 'Is een 4-in-1 osmosekraan duurder dan een Fonteq?',
    answer:
      'Ja. Fonteq is een van de goedkopere kokendwaterkranen (vaak rond 400-800 euro). De PureAqua 4-in-1 kraan kost 1.948 euro, maar daarbij zit een volwaardig osmosesysteem inbegrepen plus gekoeld en zeer heet (circa 96 graden) gezuiverd water. Bruisend water zit er niet op. Reken filter- en installatiekosten over meerdere jaren mee om de echte kosten te vergelijken.',
  },
  {
    question: 'Kun je een Fonteq alternatief zelf installeren?',
    answer:
      'Voor een 4-in-1 kraan met osmosefilter is installatie door een installateur aanbevolen: onder de spoelbak komen twee apparaten (heet-/koelunit en osmose-unit) en twee stopcontacten. PureAqua biedt installatie aan voor 299 euro.',
  },
];

const topAlternatieven = [
  {
    naam: '4-in-1 kraan met osmose',
    prijs: 'EUR 1.948',
    kokend: 'Zeer heet (circa 96 graden)',
    gefilterd: 'Ja (osmose ingebouwd)',
    bruisend: 'Nee',
    highlight: true,
    notitie: 'PureAqua 4-in-1: ingebouwd osmosefilter, gekoeld en zeer heet gezuiverd water; installatie optioneel EUR 299.',
  },
  {
    naam: 'Fonteq (referentie)',
    prijs: 'EUR 400-800',
    kokend: 'Ja (100 graden)',
    gefilterd: 'Niet standaard',
    bruisend: 'Niet standaard',
    highlight: false,
    notitie: 'Betaalbaar merk, gericht op kokend water zonder ingebouwd filter.',
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

export default function FonteqAlternatiefPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Fonteq alternatief: kokend water kraan met osmose (2026)',
          description: 'Zoek je een alternatief voor de Fonteq kokend water kraan? Vergelijk prijs en functies met een 4-in-1 osmosekraan die ook gekoeld en osmose-gezuiverd water geeft.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/fonteq-alternatief',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Fonteq alternatief', url: 'https://waterfilterplatform.nl/fonteq-alternatief' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Fonteq alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Fonteq alternatief: meer functies uit één kraan?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>Fonteq</strong> is een betaalbare kokend water kraan. Toch zoeken veel mensen een{' '}
            <strong>alternatief voor Fonteq</strong> dat naast kokend water ook gefilterd, gekoeld of bruisend
            water levert. We zetten de serieuze opties naast elkaar, inclusief de 4-in-1 osmosekraan.
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
          question="Wat is het beste Fonteq alternatief?"
          answer="Een Fonteq alternatief levert dezelfde heetwaterfunctie, vaak met meer mogelijkheden. Onze keuze is de PureAqua 4-in-1 kraan met ingebouwd osmosefilter (1.948 euro): die geeft ook gekoeld en osmose-gezuiverd water, maar geen bruisend water. De Fonteq bevat geen volwaardig osmosefilter; een osmosesysteem beschermt de kraan bij hard water en verbetert de smaak."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt de Fonteq?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fonteq is een betaalbaar merk dat instant kokend water levert naast koud en warm water. Het
            is een prima keuze als je vooral kokend water zoekt zonder de premie van de bekendste merken.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Instant kokend water (100 graden)', 'Via een boiler onder het aanrecht voor direct gebruik.'],
              ['Scherpe prijs', 'Een van de goedkopere kokendwaterkranen op de markt.'],
              ['Geen standaard osmosefilter', 'Fonteq richt zich op temperatuur, niet op diepe filtratie.'],
              ['Geen standaard bruisend water', 'Bruisend water is geen standaardfunctie.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor wie ook puur gefilterd, gekoeld of bruisend water wil, zijn er alternatieven die meer bieden. Voor bruisend water kijk je naar een Quooker met CUBE; de 4-in-1 kraan geeft gekoeld en gezuiverd water.
            Begrijp eerst de categorie via onze gids over{' '}
            <Link href="/heet-water-kraan" className="text-[#005F8A] underline">heet water kranen</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De beste alternatieven voor Fonteq vergeleken</h2>
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

        <AffiliateCTA
          destination="vierInEen"
          campaign="kokend-water"
          content="fonteq-alternatief-cta"
          label="Een 4-in-1 kraan met kokend en gefilterd water"
          title="Liever kokend en gefilterd water uit een kraan?"
          sub="De PureAqua 4-in-1 kraan is een alternatief met zeer heet (circa 96 graden), gekoeld en osmose-gezuiverd water. Bekijken kan bij onze partner PureAqua."
        />

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie</h2>
          <p className="text-gray-700 leading-relaxed">
            Fonteq is een scherp geprijsde keuze voor wie alleen kokend water zoekt. Maar voor wie ook
            gekoeld en osmose-gezuiverd water wil, biedt een <strong>4-in-1 kraan met osmosefilter</strong> volgens ons een
            completer pakket, tegen een duidelijk hogere prijs (1.948 euro). Wil je bruisend water, kijk dan naar een Quooker met CUBE. Vergelijk verder met{' '}
            <Link href="/selsiuz-alternatief" className="text-[#005F8A] underline">het Selsiuz alternatief</Link>{' '}
            of de{' '}
            <Link href="/vergelijken/kokend-water-kraan-merken" className="text-[#005F8A] underline">merkvergelijking</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Fonteq alternatieven</h2>
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
