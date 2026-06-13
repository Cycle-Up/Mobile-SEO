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
    title: 'Selsiuz alternatief: goedkoper met osmosefilter? (2026)',
    description:
      'Zoek je een alternatief voor de Selsiuz kokend water kraan? Vergelijk prijs, functies en kosten met een 4-in-1 osmosekraan, Quooker en meer in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/selsiuz-alternatief' },
    openGraph: {
      title: 'Selsiuz alternatief vergelijken - beste opties 2026',
      description:
        'Selsiuz levert kokend water in strak design. Maar een 4-in-1 kraan met osmose biedt ook gefilterd en bruisend water, vaak voor minder geld.',
      url: 'https://waterfilterplatform.nl/selsiuz-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor de Selsiuz kokend water kraan?',
    answer:
      'De sterkste alternatieven voor de Selsiuz zijn een 4-in-1 kraan met ingebouwd osmosefilter, de Quooker en de Grohe Red. Selsiuz is een Nederlands merk met strak design en een betrouwbare kokendwaterfunctie. Wie naast kokend water ook puur gefilterd en bruisend water wil, vindt een 4-in-1 osmosekraan een completer pakket - meestal voor een lagere prijs.',
  },
  {
    question: 'Is er een goedkoper alternatief dan Selsiuz?',
    answer:
      'Ja. Een Selsiuz set met combi-boiler kost doorgaans tussen de 1.000 en 1.700 euro. Een 4-in-1 kraan met osmosefilter levert kokend, koud gefilterd, warm en bruisend water voor 699 tot 899 euro. De aanschafprijs ligt daarmee lager terwijl er een volwaardig osmosesysteem bij zit.',
  },
  {
    question: 'Heeft de Selsiuz een waterfilter ingebouwd?',
    answer:
      'De Selsiuz richt zich primair op kokend en koud water; een volledig omgekeerde osmose filter zit er niet standaard in. Wil je water dat ook chloor, lood, nitraat en microplastics verwijdert, dan biedt een 4-in-1 kraan met ingebouwde osmose een completere oplossing zonder los filtersysteem.',
  },
  {
    question: 'Selsiuz of Quooker - wat is beter?',
    answer:
      'Beide zijn kwaliteitsmerken voor kokend water. Quooker heeft het grootste dealernetwerk en naamsbekendheid in Nederland; Selsiuz biedt vergelijkbare functies vaak tegen een iets lagere prijs. Geen van beide bevat standaard een osmosefilter. Zoek je gefilterd plus bruisend water in een kraan, dan is een 4-in-1 osmosekraan een logischer keuze dan beide.',
  },
  {
    question: 'Kun je een Selsiuz alternatief zelf installeren?',
    answer:
      'Een 4-in-1 kraan met osmosefilter is in de meeste gevallen zelf te installeren met standaard aansluitingen onder het aanrecht, inclusief Nederlandstalige handleiding. Daarmee bespaar je op installatiekosten die bij merken als Selsiuz en Quooker vaak via een dealer lopen.',
  },
  {
    question: 'Is Selsiuz een betrouwbaar merk?',
    answer:
      'Ja. Selsiuz is een gevestigd Nederlands merk dat bekend staat om strak design en degelijke kokendwaterkranen met combi-boilers. Als design en merkvertrouwen voor jou zwaarder wegen dan een ingebouwd filter of de laagste prijs, is Selsiuz een serieuze keuze.',
  },
];

const topAlternatieven = [
  {
    naam: '4-in-1 kraan met osmose',
    prijs: 'EUR 699-899',
    kokend: 'Ja (100 graden)',
    gefilterd: 'Ja (osmose ingebouwd)',
    bruisend: 'Ja, standaard',
    installatie: 'Zelf installeerbaar',
    highlight: true,
    notitie: 'Meest complete pakket voor de laagste prijs, met ingebouwd osmosefilter.',
  },
  {
    naam: 'Selsiuz (referentie)',
    prijs: 'EUR 1.000-1.700',
    kokend: 'Ja (100 graden)',
    gefilterd: 'Niet standaard',
    bruisend: 'Niet standaard',
    installatie: 'Vaak via dealer',
    highlight: false,
    notitie: 'Nederlands merk, strak design, betrouwbare kokendwaterfunctie.',
  },
  {
    naam: 'Quooker Combi+',
    prijs: 'EUR 1.500-2.800',
    kokend: 'Ja (100 graden)',
    gefilterd: 'Optioneel scale control',
    bruisend: 'Met CUBE module',
    installatie: 'Via installateur',
    highlight: false,
    notitie: 'Bekendste merk in Nederland, uitgebreid dealernetwerk.',
  },
  {
    naam: 'Grohe Red',
    prijs: 'EUR 1.200-2.000',
    kokend: 'Ja (100 graden)',
    gefilterd: 'Optioneel filterpatroon',
    bruisend: 'Niet standaard',
    installatie: 'Aanbevolen via dealer',
    highlight: false,
    notitie: 'Strak Duits design, premium sanitairsegment.',
  },
];

export default function SelsiuzAlternatiefPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Selsiuz alternatief: goedkoper met osmosefilter? (2026)',
          description: 'Zoek je een alternatief voor de Selsiuz kokend water kraan? Vergelijk prijs, functies en kosten met een 4-in-1 osmosekraan, Quooker en meer in 2026.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/selsiuz-alternatief',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Selsiuz alternatief', url: 'https://waterfilterplatform.nl/selsiuz-alternatief' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Selsiuz alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Selsiuz alternatief: meer functies voor minder geld?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>Selsiuz</strong> is een populaire Nederlandse kokend water kraan met een strak
            design. Toch zoeken veel mensen een <strong>alternatief voor Selsiuz</strong> - omdat ze
            naast kokend water ook gefilterd of bruisend water willen, of een{' '}
            <strong>goedkoper alternatief voor Selsiuz</strong> met een vergelijkbaar functiepakket. We
            zetten de serieuze opties naast elkaar.
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
          question="Wat is het beste Selsiuz alternatief?"
          answer="Een Selsiuz alternatief levert dezelfde kokendwaterfunctie, vaak goedkoper. De beste alternatieven zijn 4-in-1 kranen met ingebouwd osmosefilter: die bieden ook gefilterd koud en bruisend water dat de Selsiuz niet standaard heeft. Selsiuz en Quooker hebben geen volwaardig osmosefilter; bij hard water beschermt een osmosesysteem de kraan en verbetert het de smaak."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt de Selsiuz precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Selsiuz is een Nederlands merk dat zich richt op kokend water kranen met een
            combi-boiler onder het aanrecht. Voordat je alternatieven beoordeelt, is het handig te
            weten wat je bij Selsiuz krijgt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Instant kokend water (100 graden)', 'Via een geisoleerde combi-boiler die water op temperatuur houdt voor direct gebruik.'],
              ['Koud en warm water', 'De meeste sets vervangen de mengkraan en leveren ook gewoon koud en warm water.'],
              ['Geen standaard osmosefilter', 'Selsiuz richt zich op temperatuur, niet op filtratie. Een volledig osmosesysteem zit er niet standaard bij.'],
              ['Geen standaard bruisend water', 'Bruisend water is geen standaardfunctie van de Selsiuz lijn.'],
              ['Strak design', 'Beschikbaar in meerdere afwerkingen, met een minimalistische uitstraling.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De Selsiuz is sterk voor wie primair kokend water zoekt. Maar voor wie ook puur
            gefilterd of bruisend water wil, of een lagere totaalprijs, zijn er alternatieven die
            meer bieden. Lees meer over{' '}
            <Link href="/heet-water-kraan" className="text-[#005F8A] underline">heet water kranen</Link> om
            de categorie beter te begrijpen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De beste alternatieven voor Selsiuz vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vergelijken we de serieuze alternatieven, met Selsiuz als referentie. Let op de
            verhouding tussen prijs, functies en filteropties.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Merk</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kokend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gefilterd</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bruisend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
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
                    <td className="py-2.5 px-3 text-gray-700">{a.installatie}</td>
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom een 4-in-1 osmosekraan het meest complete alternatief is</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Van alle alternatieven is de 4-in-1 kraan met osmosefilter het enige systeem dat kokend
            water, koud gefilterd water, warm water en bruisend water combineert in een kraan -
            inclusief een ingebouwde{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose installatie</Link>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['4-in-1 functies standaard', 'Kokend, koud gefilterd, warm en bruisend water uit een kraan. Geen losse carbonator nodig.'],
              ['Osmosefilter ingebouwd', 'Verwijdert kalk, chloor, nitraat en microplastics. Standaard in het pakket, niet als dure optie.'],
              ['Lagere prijs', 'Een complete set kost 699-899 euro, ruim onder een vergelijkbare Selsiuz- of Quooker-opstelling.'],
              ['Zelf te installeren', 'Met standaard aansluitingen plaats je de kraan zelf, zonder verplichte dealer.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer weten? Lees onze gids over het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmosesysteem</Link>{' '}
            of vergelijk met{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">alternatieven voor Quooker</Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="vierInEen"
          campaign="kokend-water"
          content="selsiuz-alternatief-cta"
          label="Bekijk de PureAqua 4-in-1 kraan (Selsiuz-alternatief)"
          title="Liever direct kokend en gefilterd water uit een kraan?"
          sub="De PureAqua 4-in-1 kraan levert kokend en gefilterd water en is een alternatief voor de Selsiuz. Bekijken kan bij onze partner PureAqua."
        />

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer blijf je bij Selsiuz?</h2>
          <div className="space-y-3">
            {[
              ['Design en merk zijn prioriteit', 'Selsiuz heeft een premium uitstraling en een gevestigde Nederlandse naam. Weegt dat zwaarder dan een ingebouwd filter, dan past Selsiuz.'],
              ['Je wilt alleen kokend water', 'Heb je geen behoefte aan gefilterd of bruisend water, dan is een toegewijde kokendwaterkraan een prima keuze.'],
              ['Installatie via dealer is prettig', 'Wil je professionele installatie zonder zelf te sleutelen, dan is de dealerroute van Selsiuz comfortabel.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">-</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{t}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie: welk alternatief past bij jou?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Selsiuz is een kwalitatief sterk product voor wie design en kokend water vooropstelt.
            Maar voor de meeste huishoudens die ook puur gefilterd of bruisend water willen, of die
            slimmer met hun budget omgaan, biedt een <strong>4-in-1 kraan met osmosefilter</strong> een
            completer pakket voor minder geld.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Verder vergelijken? Lees over{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kranen</Link>,
            de{' '}
            <Link href="/vergelijken/kokend-water-kraan-merken" className="text-[#005F8A] underline">merkvergelijking</Link>{' '}
            of het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmosesysteem</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Selsiuz alternatieven</h2>
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
              ['/quooker-alternatief', 'Quooker alternatief', 'Vergelijk de opties naast Quooker'],
              ['/grohe-red-alternatief', 'Grohe Red alternatief', 'Goedkoper met meer functies'],
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
