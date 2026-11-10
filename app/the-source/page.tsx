import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { FactCard } from '@/components/FactCard';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { buildShopUrl } from '@/lib/pureaqua.mjs';
import { THREE_WAY, KRAAN_MARKET } from '@/lib/kranen.mjs';
import { ThreeWayRecommendation } from '@/components/ThreeWayRecommendation';

// Alle productfeiten komen uit THREE_WAY (lib/kranen.mjs); bedragen worden daaruit afgeleid.
const euros = (s: string) => (s.match(/\d[\d.]*/g) ?? []).map(n => Number(n.replace(/\./g, '')));
const fmt = (n: number) => n.toLocaleString('nl-NL');
const [sourceEur] = euros(THREE_WAY.sourcePrice);
const [tapMinEur, tapMaxEur] = euros(THREE_WAY.tapPrice);
const [installEur] = euros(THREE_WAY.installation);
const [filterEur] = euros(THREE_WAY.filters);
const totalMin = fmt(sourceEur + tapMinEur);
const totalMax = fmt(sourceEur + tapMaxEur);
const totalMinInstalled = fmt(sourceEur + tapMinEur + installEur);
const totalMaxInstalled = fmt(sourceEur + tapMaxEur + installEur);
const filterPerMonth = Math.floor(filterEur / 12);
const checkedAt = new Date(THREE_WAY.checkedAt).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

const PAGE_TITLE = 'The Source van PureAqua: osmose met 3-weg-kraan en kosten';

export function generateMetadata(): Metadata {
  return {
    title: PAGE_TITLE,
    description: `The Source van PureAqua: omgekeerde osmose onder het aanrecht met een 3-weg-kraan. Systeem ${THREE_WAY.sourcePrice}, kraan ${THREE_WAY.tapPrice}, filters ${filterEur} euro per jaar.`,
    alternates: { canonical: 'https://waterfilterplatform.nl/the-source' },
    openGraph: {
      title: PAGE_TITLE,
      description:
        'Wat biedt The Source, wat kost het en voor wie is het geschikt? Osmose met een 3-weg-kraan, totale kosten, filterkosten en een eerlijke mineralen-nuance.',
      url: 'https://waterfilterplatform.nl/the-source',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems: { question: string; answer: string; link?: { href: string; label: string } }[] = [
  {
    question: 'Wat is The Source?',
    answer: `The Source is het omgekeerde-osmosesysteem (RO) van PureAqua voor onder het aanrecht; het gezuiverde water komt uit een 3-weg-kraan (warm, koud en gezuiverd water uit één kraan). Een osmosemembraan houdt het grootste deel van de opgeloste stoffen tegen. The Source kost ${THREE_WAY.sourcePrice}, de kraan ${THREE_WAY.tapPrice} (${THREE_WAY.tapModels}).`,
  },
  {
    question: 'Hoeveel water verspilt The Source?',
    answer:
      'Elk omgekeerde-osmosesysteem voert een deel van het water af als spoelwater; dat hoort onlosmakelijk bij de techniek. Oudere RO-systemen spoelen vaak 3 tot 4 liter weg per liter zuiver water (zie ons kennisbankartikel over waterverspilling bij osmose). Een afvalwaterverhouding voor The Source staat niet in de productgegevens die wij hebben gecontroleerd; vraag die na bij PureAqua als dit voor jou zwaar weegt.',
    link: { href: '/kennisbank/hoeveel-water-verspilt-osmose', label: 'Hoeveel water verspilt een osmosesysteem?' },
  },
  {
    question: 'Verwijdert omgekeerde osmose ook mineralen?',
    answer:
      'Ja. Omdat RO zo fijn filtert, haalt het naast verontreinigingen ook een deel van de van nature aanwezige mineralen weg, zoals calcium en magnesium. Voor de meeste mensen maakt dat in de praktijk weinig uit, omdat je het grootste deel van je mineralen uit voeding haalt en niet uit water. Wil je toch mineralen in je drinkwater houden, vraag dan bij PureAqua na of er voor The Source een remineralisatiestap is; die staat niet in de productgegevens die wij hebben gecontroleerd.',
  },
  {
    question: 'Wat kost The Source en wat zijn de jaarlijkse kosten?',
    answer: `The Source kost ${THREE_WAY.sourcePrice} en de bijbehorende 3-weg-kraan ${THREE_WAY.tapPrice}, samen ${totalMin} tot ${totalMax} euro. Installatie is optioneel voor ${installEur} euro. Daarna kost de jaarlijkse set van drie filters ${filterEur} euro, omgerekend ruim ${filterPerMonth} euro per maand. Of dat voordeliger uitpakt dan flessenwater, hangt af van je eigen verbruik.`,
  },
  {
    question: 'Hoe vaak moet ik de filters wisselen?',
    answer: `Je vervangt één set van drie filters per jaar; die set kost ${filterEur} euro. Wil je de filters zelf wisselen, vraag dan bij PureAqua na hoe dat gaat.`,
  },
  {
    question: 'Voor wie is The Source geschikt en voor wie minder?',
    answer:
      'The Source is volgens ons geschikt voor wie osmosewater direct uit de eigen keukenkraan wil, zonder extra tapkraan, bijvoorbeeld om zeker te zijn van het drinkwater, voor een neutralere smaak of om te stoppen met flessenwater. Minder noodzakelijk is het als je geen behoefte hebt aan extra zuivering: Nederlands kraanwater is van hoge kwaliteit en veilig om te drinken.',
  },
];

const specs = [
  ['Type', 'Omgekeerde osmose (RO), onder het aanrecht'],
  ['Opbouw', `Een ${THREE_WAY.what.replace(/^een /, '')}`],
  ['Prijs The Source', THREE_WAY.sourcePrice],
  ['Kraan', `${THREE_WAY.tapPrice}, keuze uit ${THREE_WAY.tapModels}`],
  ['The Source plus kraan', `${totalMin} tot ${totalMax} euro`],
  ['Installatie', `Optioneel voor ${installEur} euro`],
  ['Onderhoud', `Set van drie filters per jaar, ${filterEur} euro`],
  ['Aanbieder', 'PureAqua'],
];

const strengths = [
  ['Osmosewater uit je eigen kraan', 'Warm, koud en gezuiverd water uit één 3-weg-kraan, zonder aparte tapkraan ernaast.'],
  ['Keuze in kranen', `Keuze uit ${THREE_WAY.tapModels} en kleuren, van ${THREE_WAY.tapPrice}.`],
  ['Overzichtelijk onderhoud', `Eén set van drie filters per jaar voor ${filterEur} euro.`],
  ['Installatie naar keuze', `Laat het systeem installeren voor ${installEur} euro of schakel je eigen installateur in.`],
];

export default function TheSourcePage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description:
            'Een eerlijke uitleg over The Source van PureAqua: omgekeerde osmose onder het aanrecht met een 3-weg-kraan, kosten en de mineralen-nuance.',
          datePublished: '2026-05-29',
          dateModified: '2026-11-03',
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
          { '@type': 'Brand', name: 'The Source', description: 'Omgekeerde-osmosesysteem van PureAqua voor onder het aanrecht.' },
          {
            '@type': 'Product',
            name: 'The Source',
            description:
              'Omgekeerde-osmosesysteem van PureAqua voor onder het aanrecht, voor een 3-weg-kraan met warm, koud en gezuiverd water uit één kraan.',
            brand: { '@type': 'Brand', name: 'PureAqua' },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: `${sourceEur}.00`,
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
            The Source: omgekeerde osmose van PureAqua met 3-weg-kraan
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>The Source</strong> is een omgekeerde-osmosesysteem van PureAqua dat onder je
            aanrecht zuiver drinkwater levert. Het gezuiverde water komt uit een 3-weg-kraan: warm, koud
            en gezuiverd water uit één kraan. Hieronder de specificaties, sterke punten, kosten en een eerlijke
            afweging, met bronvermelding en zonder verzonnen testoordelen.
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
        <MethodologyBadge lastReviewed={THREE_WAY.checkedAt} sources={['Fabrikant / PureAqua', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" dateModified="2026-11-03" />

        <QuickAnswer
          question="Wat is The Source en is het een goede keuze?"
          answer={`The Source is het omgekeerde-osmosesysteem van PureAqua voor onder het aanrecht; het gezuiverde water komt uit een 3-weg-kraan (warm, koud en gezuiverd water uit één kraan). The Source kost ${THREE_WAY.sourcePrice} en de kraan ${THREE_WAY.tapPrice}, samen ${totalMin} tot ${totalMax} euro; filters kosten ${filterEur} euro per jaar. Of het bij je past, hangt af van je behoefte en budget. Nederlands kraanwater is al veilig, dus RO is een keuze voor extra zuiverheid en smaak, geen noodzaak.`}
        />

        <FactCard id="theSource" />

        <ThreeWayRecommendation content="the-source-3weg-aanbeveling" />

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
            Specificaties en prijzen uit de productgegevens van PureAqua; prijzen gecontroleerd op {checkedAt}.
            Controleer actuele prijzen bij de verkoper.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Sterke punten van The Source</h2>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {strengths.map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong>: {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Niet in de productgegevens die wij hebben gecontroleerd: de garantietermijn, de
            afvalwaterverhouding, of er stroom of een pomp nodig is en of er een remineralisatiestap bij kan.
            Vraag die punten na bij PureAqua als ze voor jou meewegen.
          </p>
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
            Het water legt onder je aanrecht een korte route af. The Source werkt met omgekeerde osmose en
            een set van drie filters die je eens per jaar vervangt. Bij omgekeerde osmose gaat het water in
            het algemeen eerst door een voorfilter, die grovere deeltjes tegenhoudt en het gevoelige membraan
            beschermt. Daarna gaat het water door het RO-membraan: een opgerold vel met porien zo
            klein dat vrijwel alleen watermoleculen erdoorheen passen. De tegengehouden stoffen
            spoelen weg als afvalwater. Op je aanrecht zie je alleen de 3-weg-kraan: die geeft gewoon warm
            en koud water voor afwassen en schoonmaken, en daarnaast het gezuiverde water, zonder aparte
            tapkraan ernaast.
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
            Reken voor de aanschaf met The Source ({THREE_WAY.sourcePrice}) plus een 3-weg-kraan naar keuze
            ({THREE_WAY.tapPrice}, {THREE_WAY.tapModels}). Samen is dat {totalMin} tot {totalMax} euro.
            Installatie is optioneel voor {installEur} euro; met installatie kom je op {totalMinInstalled} tot{' '}
            {totalMaxInstalled} euro. Daarna betaal je {filterEur} euro per jaar voor een set van drie filters,
            omgerekend ruim {filterPerMonth} euro per maand.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ter vergelijking: onderbouw-osmosesystemen kosten doorgaans {KRAAN_MARKET.underSinkRange}. The
            Source zelf valt binnen die bandbreedte; de 3-weg-kraan komt erbij, maar die levert ook je gewone
            warme en koude water. Of osmose voordeliger uitpakt dan flessenwater, hangt af van je eigen
            verbruik. Meer over de kosten van osmose lees je op onze pagina over{' '}
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
            drinkwater houden, vraag dan bij PureAqua na of er voor The Source een remineralisatiestap
            beschikbaar is. Dit is algemene informatie en geen medisch advies; raadpleeg bij twijfel een arts
            of dietist.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Daarnaast gebruikt omgekeerde osmose altijd spoelwater: een deel van het water voert de
            tegengehouden stoffen af. Dat hoort onlosmakelijk bij de techniek. Oudere systemen spoelen vaak
            3 tot 4 liter weg per liter zuiver water, zie ons artikel over{' '}
            <Link href="/kennisbank/hoeveel-water-verspilt-osmose" className="text-[#005F8A] underline">hoeveel water een osmosesysteem verspilt</Link>;
            de verhouding voor The Source staat niet in de productgegevens die wij hebben gecontroleerd. We
            lichten de bekendste bezwaren genuanceerd toe in ons artikel over de{' '}
            <Link href="/kennisbank/reverse-osmosis-nadelen" className="text-[#005F8A] underline">nadelen van reverse osmosis</Link>{' '}
            en of{' '}
            <Link href="/kennisbank/osmose-water-drinken" className="text-[#005F8A] underline">osmose water gezond is om te drinken</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe kies je een RO-systeem?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een RO-systeem is een flinke aankoop. Let bij het vergelijken op zeven punten: de
            afvalwaterverhouding, of het op stroom of waterdruk werkt, onafhankelijke certificering
            en testrapporten, hoe het omgaat met mineralen, het gemak en de kosten van het onderhoud, voor
            welk huishouden het geschikt is, en de garantie en proefperiode. Leg The Source en andere merken
            langs dezelfde checklist en vraag gegevens die ontbreken na bij de verkoper.
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
            The Source wordt geleverd via onze partner PureAqua. Het systeem komt onder het aanrecht, dus je
            hebt daar ruimte en een afvoeraansluiting nodig. Installatie is optioneel voor {installEur} euro;
            je kunt ook zelf een installateur inschakelen.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={buildShopUrl('theSource', { campaign: 'omgekeerde-osmose', content: 'the-source-productcta' })}
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over The Source</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                {item.link && (
                  <p className="mt-2 text-sm">
                    <Link href={item.link.href} className="text-[#005F8A] underline">{item.link.label}</Link>
                  </p>
                )}
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
