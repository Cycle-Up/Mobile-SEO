import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { AuthorBox } from '@/components/AuthorBox';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE, THREE_WAY, KRAAN_MARKET } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';
import { SourcesSection } from '@/components/SourcesSection';

// Woningtype-invalshoek: "pfas filter huurwoning / appartement / koopwoning". Of je een filter
// nodig hebt per regio staat op /pfas-waterfilter/gebieden-nederland; de hub is /pfas-waterfilter.
const PAGE_URL = 'https://waterfilterplatform.nl/pfas-waterfilter/huis';
const PAGE_TITLE = 'PFAS-filter per woningtype: huur, koop of appartement';
const PAGE_DESCRIPTION =
  'Welk PFAS-filter kun je installeren in een huurwoning, koopwoning of appartement? Osmose op het aanrecht, onder het aanrecht of een leidingfilter naast elkaar.';
const DATE_PUBLISHED = '2026-05-01';
const DATE_MODIFIED = '2026-11-10';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'article',
    url: PAGE_URL,
  },
};

const QUICK_ANSWER = `Welk PFAS-filter je kunt gebruiken, hangt vooral af van je woning. In een huurwoning is osmose op het aanrecht het eenvoudigst: geen boren, geen leidingwerk en je neemt het mee bij een verhuizing. In een koopwoning kun je kiezen voor osmose onder het aanrecht met een eigen kraan, wat volgens de beschikbare metingen PFAS het sterkst vermindert. In een appartement met weinig kastruimte past een leidingfilter zonder tank, stroom of afvalwater, of osmose op het aanrecht als je daar plek hebt. Of je een PFAS-filter nodig hebt, hangt af van hoeveel PFAS er in jouw kraanwater zit.`;

const faqItems = [
  {
    question: 'Welk PFAS-filter past in een huurwoning?',
    answer:
      'Osmose op het aanrecht werkt zonder vaste installatie: stekker erin en tank vullen. Je hoeft niet te boren en neemt het apparaat mee als je verhuist. Voor een filter onder het aanrecht of op de leiding vraag je eerst schriftelijk toestemming aan je verhuurder.',
  },
  {
    question: 'Mag ik als huurder een osmosefilter onder het aanrecht plaatsen?',
    answer:
      'Een osmosesysteem onder het aanrecht vraagt meestal een kraangat en een aansluiting op de afvoer. Dat is een aanpassing aan de woning, dus vraag altijd eerst schriftelijk toestemming aan je verhuurder. Wil je dat gedoe niet, kies dan voor osmose op het aanrecht.',
  },
  {
    question: 'Welk PFAS-filter past in een appartement met weinig ruimte?',
    answer:
      'Een leidingfilter op de koude leiding onder het aanrecht heeft geen tank, stroom of afvalwater nodig en neemt weinig ruimte in. Heb je plek op het aanrecht, dan is osmose op het aanrecht een optie. Een osmosekraan met heet en gekoeld water vraagt twee apparaten onder de spoelbak en twee stopcontacten.',
  },
  {
    question: 'Welk PFAS-filter kies je in een koopwoning?',
    answer:
      'In een koopwoning kun je zelf beslissen over een kraangat en een afvoeraansluiting. Dan kun je kiezen voor osmose onder het aanrecht met een eigen kraan, eventueel met heet en gekoeld water. Wil je geen osmose, dan is een leidingfilter een eenvoudiger alternatief met minder PFAS-reductie.',
  },
  {
    question: 'Heb ik wel een PFAS-filter nodig?',
    answer:
      'Drinkwaterbedrijven moeten voldoen aan de wettelijke EU-norm van 100 nanogram per liter voor de som van 20 PFAS. Een filter is dus een persoonlijke keuze. Sommige mensen kiezen er toch voor omdat hun water boven de RIVM-advieswaarde van 4,4 nanogram per liter in PFOA-equivalenten ligt. Hoeveel PFAS er in jouw water zit, verschilt per regio.',
  },
  {
    question: 'Werkt een filterkan tegen PFAS?',
    answer:
      'Dat verschilt per filterkan en hangt af van wat er gemeten is. Claimt een fabrikant PFAS-reductie, kijk dan in het labrapport welke stoffen er gemeten zijn en of het rapport openbaar is. Wij noemen op deze pagina geen filterkan als keuze voor PFAS. Wil je PFAS gericht verminderen, kies dan voor omgekeerde osmose of een filter met een openbaar labrapport waarin PFAS zijn gemeten.',
  },
];

const opties = [
  {
    oplossing: 'Osmose op het aanrecht',
    voorbeeld: `${COUNTERTOP.shortName} (${COUNTERTOP.price})`,
    installatie: 'Geen, stekker en tank',
    pfas: 'Osmosetechniek; geen eigen PFAS-meting',
    past: 'Huurwoning, appartement met aanrechtruimte',
  },
  {
    oplossing: 'Leidingfilter zonder osmose',
    voorbeeld: `${PUREFILTER.name} (${PUREFILTER.price})`,
    installatie: 'Op de koude leiding onder het aanrecht',
    pfas: `Equinox Labs: ${PUREFILTER.pfasReduction} minder van vijf PFAS, nieuw filter`,
    past: 'Appartement met weinig ruimte, koopwoning',
  },
  {
    oplossing: 'Osmose onder het aanrecht met eigen kraan',
    voorbeeld: `The Source (${THREE_WAY.sourcePrice}) plus kraan (${THREE_WAY.tapPrice})`,
    installatie: 'Kraan en afvoeraansluiting',
    pfas: 'Osmosetechniek; geen eigen PFAS-meting',
    past: 'Koopwoning, huur met toestemming',
  },
  {
    oplossing: 'Osmosekraan met heet en gekoeld water',
    voorbeeld: `${FOUR_IN_ONE.name} (${FOUR_IN_ONE.price})`,
    installatie: 'Twee apparaten onder de spoelbak, twee stopcontacten',
    pfas: `SGS: ${FOUR_IN_ONE.lab.PFOS} minder PFOS, ${FOUR_IN_ONE.lab.PFOA} minder PFOA, nieuw systeem`,
    past: 'Koopwoning met ruime keukenkast',
  },
];

export default function PfasWaterfilterHuisPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
        { name: 'Filter per woningtype', url: PAGE_URL },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          url: PAGE_URL,
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Filter per woningtype</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            {PAGE_TITLE}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Mag je boren, heb je ruimte onder het aanrecht en wil je het filter meenemen als je verhuist? Die vragen
            bepalen welk PFAS-filter je kunt gebruiken. Hieronder zetten we de opties per woningtype naast elkaar.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <QuickAnswer answer={QUICK_ANSWER} />
        <AuthorBox datePublished={DATE_PUBLISHED} dateModified={DATE_MODIFIED} />
        <HealthDisclaimer />

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Eerst: heb je een PFAS-filter nodig?
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Drinkwaterbedrijven moeten voldoen aan de wettelijke EU-norm van 100 nanogram per liter voor de som van 20
          PFAS. Het RIVM adviseert daarnaast een waarde van 4,4 nanogram per liter in PFOA-equivalenten. Of jouw
          water daaronder blijft, verschilt per regio. Hoe je dat uitzoekt en welk filter dan past, lees je op{' '}
          <Link href="/pfas-waterfilter/gebieden-nederland" className="text-[#005F8A] underline">welk PFAS-filter past bij jouw regio</Link>.
          De hotspots zelf staan op{' '}
          <Link href="/leidingwater/pfas" className="text-[#005F8A] underline">PFAS in leidingwater per regio</Link>.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          De opties naast elkaar
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Oplossing</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Voorbeeld</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Installatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">PFAS-bewijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Past bij</th>
              </tr>
            </thead>
            <tbody>
              {opties.map((o, i) => (
                <tr key={o.oplossing} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-medium">{o.oplossing}</td>
                  <td className="border border-gray-300 px-3 py-2">{o.voorbeeld}</td>
                  <td className="border border-gray-300 px-3 py-2">{o.installatie}</td>
                  <td className="border border-gray-300 px-3 py-2">{o.pfas}</td>
                  <td className="border border-gray-300 px-3 py-2">{o.past}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-2 leading-relaxed text-sm">
          De voorbeelden zijn de filters die wij in onze{' '}
          <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">gids over PFAS-waterfilters</Link>{' '}
          als onze keuze per situatie noemen. Een filterkan staat er niet bij. Claimt een fabrikant van een filterkan
          PFAS-reductie, kijk dan in het labrapport welke stoffen er gemeten zijn. Geen enkel filter haalt
          aantoonbaar elke PFAS-stof weg.
        </p>
        <AffiliateDisclosure className="mb-6" />

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Huurwoning: osmose op het aanrecht
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Als huurder wil je meestal niets aan het leidingwerk veranderen. Osmose op het aanrecht werkt zonder vaste
          installatie: stekker erin, tank vullen, klaar. Het{' '}
          <Link href={COUNTERTOP.reviewPath} className="text-[#005F8A] underline">{COUNTERTOP.shortName}</Link>{' '}
          kost {COUNTERTOP.price}, is {COUNTERTOP.dimensions} en maakt {COUNTERTOP.capacity}. Filterduur:{' '}
          {COUNTERTOP.filterLife}. Voor dit apparaat bestaat geen eigen PFAS-meting; onze keuze rust op de
          osmosetechniek.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Wil je toch een filter onder het aanrecht of op de leiding, vraag dan eerst schriftelijk toestemming aan je
          verhuurder. Meer over je mogelijkheden als huurder lees je op{' '}
          <Link href="/waterfilter/huurwoning" className="text-[#005F8A] underline">waterfilter in een huurwoning</Link>{' '}
          en in de{' '}
          <Link href="/keuzehulp/huurwoning" className="text-[#005F8A] underline">keuzehulp voor huurders</Link>.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Koopwoning: osmose onder het aanrecht
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In een koopwoning beslis je zelf over een kraangat en een aansluiting op de afvoer. Dan kun je osmose onder
          het aanrecht plaatsen, met gezuiverd water uit een eigen kraan. Onderbouw-osmosesystemen kosten doorgaans{' '}
          {KRAAN_MARKET.underSinkRange}. Twee voorbeelden die wij noemen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-3 leading-relaxed">
          <li>
            <Link href={THREE_WAY.reviewPath} className="text-[#005F8A] underline">The Source</Link> ({THREE_WAY.sourcePrice})
            met een 3-weg-kraan ({THREE_WAY.tapPrice}): warm, koud en gezuiverd water uit een kraan. Onderhoud:{' '}
            {THREE_WAY.filters}; {THREE_WAY.installation}.
          </li>
          <li>
            De <Link href={FOUR_IN_ONE.reviewPath} className="text-[#005F8A] underline">{FOUR_IN_ONE.name}</Link>{' '}
            ({FOUR_IN_ONE.price}) geeft daarnaast gekoeld en zeer heet gezuiverd water. SGS mat bij een nieuw systeem{' '}
            {FOUR_IN_ONE.lab.PFOS} minder PFOS en {FOUR_IN_ONE.lab.PFOA} minder PFOA. Onder de spoelbak heb je ruimte
            nodig voor twee apparaten en twee stopcontacten.
          </li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Wil je geen osmose, tank of afvalwater, dan is een leidingfilter ook in een koopwoning een optie. Hoe de
          filters zich verhouden, zie je bij{' '}
          <Link href="/pfas-waterfilter/vergelijken" className="text-[#005F8A] underline">PFAS-waterfilters vergelijken</Link>.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Appartement: weinig ruimte, compacte keuze
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In een appartement is de keukenkast vaak klein. De{' '}
          <Link href={PUREFILTER.reviewPath} className="text-[#005F8A] underline">{PUREFILTER.name}</Link>{' '}
          ({PUREFILTER.price}) is een inline filter op de koude leiding onder het aanrecht, zonder tank, stroom of
          afvalwater. Bij Equinox Labs verminderde een nieuw filter vijf PFAS ({PUREFILTER.pfasTested.join(', ')}) met{' '}
          {PUREFILTER.pfasReduction}. Dat is minder dan bij osmose, maar het neemt weinig ruimte in. De capaciteit is{' '}
          {PUREFILTER.capacity}; een navulfilter kost {PUREFILTER.cartridgePrice}.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Heb je plek op het aanrecht, dan is osmose op het aanrecht ook in een appartement een optie. Huur je het
          appartement, dan gelden dezelfde afspraken met je verhuurder als bij een huurwoning. Meer keuzes voor kleine
          keukens staan op{' '}
          <Link href="/beste-waterfilter/appartement" className="text-[#005F8A] underline">waterfilter voor een appartement</Link>.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Eigen put? Eerst testen
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Gebruik je water uit een eigen put, dan wordt dat niet door een drinkwaterbedrijf gecontroleerd. Laat het
          water dan eerst testen en volg het advies van je gemeente of GGD. Hoe dat werkt, lees je op{' '}
          <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] underline">water testen op PFAS</Link>.
        </p>

        <CTABanner context="osmose" />

        <section id="faq" className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over een PFAS-filter per woningtype
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded-xl p-4 group">
                <summary className="font-semibold text-[#003F5C] cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Gerelateerde onderwerpen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS-waterfilter gids</h3>
              <p className="text-sm text-gray-600">Welke filters PFAS verminderen en wat er gemeten is.</p>
            </Link>
            <Link href="/pfas-waterfilter/gebieden-nederland" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS-filter per regio</h3>
              <p className="text-sm text-gray-600">Van kraanwater boven de advieswaarde tot een eigen put.</p>
            </Link>
            <Link href="/pfas-waterfilter/osmose" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">Osmose voor PFAS</h3>
              <p className="text-sm text-gray-600">Hoe omgekeerde osmose PFAS vermindert.</p>
            </Link>
            <Link href="/keuzehulp/huurwoning" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">Keuzehulp huurwoning</h3>
              <p className="text-sm text-gray-600">Welke filters je als huurder kunt gebruiken.</p>
            </Link>
          </div>
        </section>

        <SourcesSection
          sources={[
            'Europese Drinkwaterrichtlijn 2020/2184/EU, PFAS-parameters van kracht per 12 januari 2026',
            'RIVM, PFAS in drinkwater en de advieswaarde van 4,4 ng/L PFOA-equivalenten',
            `Equinox Labs, labrapport ${PUREFILTER.name} (2026): ${PUREFILTER.labReportUrl}`,
            `${FOUR_IN_ONE.labReport.lab}, rapport ${FOUR_IN_ONE.labReport.number} (${FOUR_IN_ONE.labReport.date}): ${FOUR_IN_ONE.labReport.url}`,
          ]}
        />
      </main>
    </>
  );
}
