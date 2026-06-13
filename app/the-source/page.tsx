import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { buildShopUrl } from '@/lib/pureaqua.mjs';

export function generateMetadata(): Metadata {
  return {
    title: 'The Source 50 (PureAqua): stroomloze osmose, kosten en review',
    description:
      'The Source 50 van PureAqua: stroomloos omgekeerde-osmosesysteem, NSF/ANSI 58, circa 1:1 verhouding, vanaf 395 euro. Specificaties, kosten en eerlijke afweging.',
    alternates: { canonical: 'https://waterfilterplatform.nl/the-source' },
    openGraph: {
      title: 'The Source 50 (PureAqua): stroomloze osmose, kosten en review',
      description:
        'Wat biedt The Source 50, wat kost het en voor wie is het geschikt? Stroomloze RO, NSF/ANSI 58, circa 1:1 verhouding en een eerlijke mineralen-nuance.',
      url: 'https://waterfilterplatform.nl/the-source',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is The Source 50?',
    answer:
      'The Source 50 is een omgekeerde-osmosesysteem (RO) van PureAqua dat onder het aanrecht wordt geplaatst en via een aparte kraan gezuiverd drinkwater levert. Het verwijdert tot circa 99 procent van verontreinigingen zoals PFAS, microplastics, medicijnresten en zware metalen, werkt zonder stroom op de waterleidingdruk en is gecertificeerd volgens NSF/ANSI 58. Het is geschikt voor huishoudens tot ongeveer vier personen en kost vanaf 395 euro.',
  },
  {
    question: 'Heeft The Source stroom nodig?',
    answer:
      'Nee. The Source werkt volledig op de druk die al in je waterleiding zit, die in de meeste Nederlandse huizen ruim voldoende is. Er is geen stopcontact of pomp nodig, er is geen energieverbruik, en het systeem levert zelfs zuiver water tijdens een stroomstoring.',
  },
  {
    question: 'Hoeveel water verspilt The Source?',
    answer:
      'The Source werkt met een verhouding van ongeveer 1 op 1: voor elke liter zuiver water gaat er ruwweg een liter afvalwater doorheen. Oudere RO-systemen spoelen vaak 3 tot 4 liter weg per liter zuiver water. Een beetje afvalwater hoort onlosmakelijk bij omgekeerde osmose; de verhouding is dus laag maar niet nul.',
  },
  {
    question: 'Verwijdert omgekeerde osmose ook mineralen?',
    answer:
      'Ja. Omdat RO zo fijn filtert, haalt het naast verontreinigingen ook een deel van de van nature aanwezige mineralen weg, zoals calcium en magnesium. Voor de meeste mensen maakt dat in de praktijk weinig uit, omdat je het grootste deel van je mineralen uit voeding haalt en niet uit water. Wil je toch mineralen in je drinkwater houden, dan is The Source uit te breiden met een remineralisatiestap die na de zuivering mineralen weer toevoegt.',
  },
  {
    question: 'Wat kost The Source 50 en wat zijn de jaarlijkse kosten?',
    answer:
      'The Source 50 kost vanaf 395 euro als eenmalige aanschaf. De jaarlijkse filterset kost ongeveer 89 euro, omgerekend nog geen 7,50 euro per maand. Er is ook een gespreide optie via een abonnement (volgens de aanbieder circa 299 euro startkosten en 29 euro per maand, minimaal twaalf maanden). Voor veel huishoudens liggen de jaarlijkse kosten lager dan wat aan flessenwater wordt uitgegeven; de exacte terugverdientijd hangt af van je verbruik.',
  },
  {
    question: 'Hoe vaak moet ik de filters wisselen?',
    answer:
      'Ongeveer eens per jaar. Dankzij het click-on systeem doe je dat zelf in een paar minuten, zonder gereedschap en zonder loodgieter. De jaarlijkse filterset kost ongeveer 89 euro. Dat is meteen het enige onderhoud waar je aan moet denken.',
  },
  {
    question: 'Voor wie is The Source geschikt en voor wie minder?',
    answer:
      'The Source 50 is geschikt voor huishoudens tot ongeveer vier personen die zeker willen zijn van hun drinkwater, een neutralere smaak willen of willen stoppen met flessenwater. Minder noodzakelijk is het als je geen behoefte hebt aan extra zuivering: Nederlands kraanwater is van hoge kwaliteit en veilig om te drinken. Heb je een groter huishouden, kijk dan of er een ruimer model in dezelfde lijn is.',
  },
];

const specs = [
  ['Type', 'Omgekeerde osmose (RO), onder het aanrecht'],
  ['Verwijdering', 'Tot circa 99% van verontreinigingen (o.a. PFAS, microplastics, medicijnresten, zware metalen)'],
  ['Energie', 'Stroomloos; werkt op waterleidingdruk'],
  ['Afvalwaterverhouding', 'Circa 1:1 (oudere systemen vaak 3:1 tot 4:1)'],
  ['Geschikt voor', 'Huishoudens tot circa 4 personen'],
  ['Onderhoud', 'Filterset circa 1x per jaar, click-on, circa 5 minuten zonder gereedschap'],
  ['Filterkosten', 'Circa 89 euro per jaar'],
  ['Aanschafprijs', 'Vanaf 395 euro (eenmalig)'],
  ['Proefperiode', '100 dagen thuis uitproberen'],
  ['Garantie', '2 jaar all-in'],
  ['Optie', 'Uit te breiden met remineralisatiestap'],
  ['Certificering', 'NSF/ANSI 58 (internationale RO-standaard)'],
  ['Herkomst', 'Oorspronkelijk in de VS ontwikkeld, beproefd RO-ontwerp'],
  ['Aanbieder', 'PureAqua'],
];

export default function TheSourcePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'The Source 50 (PureAqua): stroomloze osmose, kosten en review',
          description:
            'Een eerlijke uitleg over The Source 50 van PureAqua: stroomloze omgekeerde osmose, NSF/ANSI 58, circa 1:1 verhouding, kosten en de mineralen-nuance.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/the-source',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'The Source', url: 'https://waterfilterplatform.nl/the-source' },
        ]}
      />
      <SchemaOrg
        schema={[
          { '@type': 'Brand', name: 'The Source', description: 'Stroomloos omgekeerde-osmosesysteem van PureAqua, NSF/ANSI 58-gecertificeerd.' },
          {
            '@type': 'Product',
            name: 'The Source 50',
            description:
              'Stroomloos omgekeerde-osmosesysteem dat tot circa 99% van verontreinigingen verwijdert, werkt op waterleidingdruk met een verhouding van circa 1:1 en geschikt is voor huishoudens tot 4 personen.',
            brand: { '@type': 'Brand', name: 'PureAqua' },
            countryOfOrigin: 'US',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: '395.00',
              availability: 'https://schema.org/InStock',
              url: 'https://pureaqua.nl',
            },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>The Source</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            The Source 50: stroomloze omgekeerde osmose van PureAqua
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>The Source 50</strong> is een omgekeerde-osmosesysteem van PureAqua dat onder je
            aanrecht zuiver drinkwater levert. Het werkt zonder stroom, verspilt nauwelijks water en is
            NSF/ANSI 58-gecertificeerd. Hieronder de specificaties, sterke punten, kosten en een eerlijke
            afweging - met bronvermelding en zonder verzonnen testoordelen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Wat is omgekeerde osmose?
            </Link>
            <Link
              href="/beste-osmosefilter-2026"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Beste osmosefilter 2026
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant / PureAqua', 'NSF/ANSI 58', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat is The Source 50 en is het een goede keuze?"
          answer="The Source 50 is een omgekeerde-osmosesysteem van PureAqua dat tot circa 99 procent van verontreinigingen verwijdert. Het werkt stroomloos op de waterleidingdruk, gebruikt een afvalwaterverhouding van ongeveer 1 op 1, is NSF/ANSI 58-gecertificeerd en geschikt voor huishoudens tot vier personen. Het kost vanaf 395 euro met circa 89 euro per jaar aan filters. Of het de beste keuze is hangt af van je behoefte, huishoudgrootte en budget - Nederlands kraanwater is op zichzelf al veilig, dus RO is een keuze voor extra zuiverheid en smaak, geen noodzaak."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Specificaties</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <tbody>
                {specs.map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800 w-1/2">{k}</td>
                    <td className="py-2.5 px-3 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Specificaties en prijzen afkomstig van de aanbieder (PureAqua). Controleer actuele waarden en
            prijzen bij de verkoper. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Sterke punten van The Source</h2>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Werkt zonder stroom', 'Draait op de druk in je waterleiding: geen stopcontact, geen pomp die kan stukgaan, geen energieverbruik en zelfs zuiver water tijdens een stroomstoring.'],
              ['Zuinig met water (circa 1:1)', 'Voor elke liter zuiver water gaat er ruwweg een liter afvalwater doorheen, waar oudere systemen vaak 3 tot 4 liter wegspoelen.'],
              ['Onafhankelijk gecertificeerd', 'NSF/ANSI 58 is de internationale standaard specifiek voor omgekeerde-osmosesystemen, getoetst door een onafhankelijke partij.'],
              ['Eenvoudig onderhoud', 'Filterset circa eens per jaar wisselen via een click-on systeem, in een paar minuten en zonder gereedschap.'],
              ['Uit te breiden met mineralen', 'Een optionele remineralisatiestap voegt na de zuivering gecontroleerd mineralen weer toe.'],
              ['Zonder risico proberen', '100 dagen proefperiode thuis en een all-in garantie van 2 jaar.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je eerst begrijpen hoe de techniek werkt? Lees onze uitleg over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
            en wat{' '}
            <Link href="/osmose-water" className="text-[#005F8A] underline">osmose water</Link> precies is.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt The Source?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het water legt onder je aanrecht een korte route af. Eerst gaan de grovere zaken eruit via
            voorfilters (sediment, roest en chloor), die meteen het gevoelige membraan beschermen.
            Daarna duwt de waterleidingdruk het water door het RO-membraan: een opgerold vel met porien zo
            klein dat vrijwel alleen watermoleculen erdoorheen passen. De achtergebleven verontreinigingen
            spoelen weg als afvalwater. Op je aanrecht zie je alleen een aparte, strakke kraan voor het
            gezuiverde water; je gewone kraan blijft gewoon werken voor afwassen en schoonmaken.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer technische achtergrond vind je in onze stap-voor-stap uitleg op de pagina over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">hoe omgekeerde osmose werkt</Link>{' '}
            en bij de{' '}
            <Link href="/keurmerken" className="text-[#005F8A] underline">betekenis van het NSF/ANSI 58-keurmerk</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat kost zuiver water met The Source?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanschaf begint bij 395 euro voor een systeem dat jarenlang meegaat. Daarna betaal je nog
            geen 90 euro per jaar aan filters (ongeveer 89 euro), omgerekend nog geen 7,50 euro per maand voor
            onbeperkt zuiver water uit je kraan. Wie de kosten liever spreidt, kan volgens de aanbieder
            kiezen voor een abonnement (circa 299 euro startkosten en 29 euro per maand, minimaal twaalf
            maanden).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vergelijk dat met flessenwater: een gezin dat dagelijks flessen koopt, is al snel tientallen
            euro per maand kwijt, jaar in jaar uit. Voor veel huishoudens liggen de jaarlijkse RO-kosten
            daardoor lager, en verdien je de aanschaf over een aantal jaren terug. De exacte uitkomst hangt
            af van je eigen verbruik. Een volledige kostenopbouw per jaar vind je op onze pagina over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">kosten en onderhoud van omgekeerde osmose</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De eerlijke nuance: mineralen en afvalwater</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij zulke grondige filtering hoort een eerlijk verhaal. Omdat het membraan zo fijn is, houdt het
            naast verontreinigingen ook een deel van de van nature aanwezige mineralen tegen, zoals calcium
            en magnesium. Voor de meeste mensen maakt dat in de praktijk weinig uit, omdat je het grootste
            deel van je mineralen uit voeding haalt en niet uit water. Wil je toch mineralen in je
            drinkwater houden, dan kun je The Source uitbreiden met een remineralisatiestap. Dit is algemene
            informatie en geen medisch advies; raadpleeg bij twijfel een arts of dietist.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En hoewel de afvalwaterverhouding van circa 1 op 1 zuinig is, is die niet nul: een beetje
            afvalwater hoort onlosmakelijk bij de techniek van omgekeerde osmose. We lichten de bekendste
            bezwaren genuanceerd toe in ons artikel over de{' '}
            <Link href="/kennisbank/reverse-osmosis-nadelen" className="text-[#005F8A] underline">nadelen van reverse osmosis</Link>{' '}
            en of{' '}
            <Link href="/kennisbank/osmose-water-drinken" className="text-[#005F8A] underline">osmose water gezond is om te drinken</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe kies je een RO-systeem?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een RO-systeem koop je voor jaren. Let bij het vergelijken op zeven punten: de
            afvalwaterverhouding, of het op stroom of waterdruk werkt, onafhankelijke certificering
            (NSF/ANSI 58), hoe het omgaat met mineralen, het gemak en de kosten van het onderhoud, voor
            welk huishouden het geschikt is, en de garantie en proefperiode. The Source vinkt deze punten
            af, maar dezelfde checklist helpt je elk merk objectief te beoordelen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Zet The Source naast andere systemen in onze{' '}
            <Link href="/beste-osmosefilter-2026" className="text-[#005F8A] underline">koopgids beste osmosefilter 2026</Link>{' '}
            en bekijk de losse{' '}
            <Link href="/osmose-filter" className="text-[#005F8A] underline">osmosefilters</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Waar koop je The Source?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The Source wordt geleverd via onze partner PureAqua. Het systeem komt onder het aanrecht en is
            in veel gevallen zelf te installeren met de meegeleverde handleiding; voor de aansluiting kun je
            ook een installateur inschakelen.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={buildShopUrl('store', { campaign: 'omgekeerde-osmose', content: 'the-source-productcta' })}
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              rel="sponsored nofollow"
            >
              Bekijk The Source bij PureAqua
            </a>
          </div>
          <p data-affiliate-disclosure className="text-xs text-gray-400 mt-4">
            Transparantie: WaterfilterPlatform is gelieerd aan PureAqua en kan een vergoeding ontvangen
            wanneer je via onze links iets aanschaft. Dit beinvloedt onze redactionele beoordeling niet; de
            specificaties komen van de aanbieder. Lees onze{' '}
            <Link href="/methodologie" className="underline">methodologie</Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over The Source 50</h2>
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
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Werking, kosten, voordelen en nadelen'],
              ['/beste-osmosefilter-2026', 'Beste osmosefilter 2026', 'Koopgids met shortlist en criteria'],
              ['/osmose-water', 'Osmose water', 'Eigenschappen, smaak en veelgestelde vragen'],
              ['/keurmerken', 'NSF/ANSI 58-keurmerk', 'Wat het keurmerk voor osmose betekent'],
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
