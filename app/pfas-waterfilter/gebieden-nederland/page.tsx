import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { AuthorBox } from '@/components/AuthorBox';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';
import { SourcesSection } from '@/components/SourcesSection';

// Filterkeuze-invalshoek: "welk pfas filter regio". Regionale hotspots en meetwaarden per
// waterbedrijf staan op /leidingwater/pfas; deze pagina vertaalt je situatie naar een filter.
const PAGE_URL = 'https://waterfilterplatform.nl/pfas-waterfilter/gebieden-nederland';
const PAGE_TITLE = 'Welk PFAS-filter past bij jouw regio en waterbron?';
const PAGE_DESCRIPTION =
  'Welk PFAS-filter past bij jouw regio? Van kraanwater boven de RIVM-advieswaarde tot een eigen put: zo kies je tussen osmose, een leidingfilter of eerst testen.';
const DATE_PUBLISHED = '2026-04-25';
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

const QUICK_ANSWER = `Welk PFAS-filter bij je past, hangt minder af van je provincie dan van drie vragen: hoeveel PFAS zit er in jouw kraanwater, gebruik je kraanwater of een eigen put, en mag je in je woning boren. Drinkwaterbedrijven moeten voldoen aan de wettelijke EU-norm van 100 nanogram per liter voor de som van 20 PFAS. Ligt jouw water boven de RIVM-advieswaarde van 4,4 nanogram per liter in PFOA-equivalenten en wil je zo veel mogelijk verminderen, dan past omgekeerde osmose. Wil je geen osmose, dan is een leidingfilter een tussenstap. Heb je een eigen put bij een bekende PFAS-bron, laat het water dan eerst testen.`;

const faqItems = [
  {
    question: 'Welk PFAS-filter past bij mijn regio?',
    answer:
      'Kijk eerst hoeveel PFAS er in jouw kraanwater zit; dat verschilt per waterbedrijf. Ligt het boven de RIVM-advieswaarde van 4,4 nanogram per liter in PFOA-equivalenten en wil je zo veel mogelijk verminderen, dan past omgekeerde osmose. Wil je verminderen zonder osmose of afvalwater, dan is een leidingfilter met een openbaar labrapport een tussenstap. Woon je in een huurwoning en mag je niet boren, dan kun je osmose op het aanrecht gebruiken.',
  },
  {
    question: 'Heb ik een PFAS-filter nodig als mijn kraanwater aan de norm voldoet?',
    answer:
      'Drinkwaterbedrijven moeten voldoen aan de wettelijke EU-norm van 100 nanogram per liter voor de som van 20 PFAS. Voldoet jouw kraanwater daaraan, dan is een filter geen verplichting maar een persoonlijke keuze. Sommige mensen kiezen er toch voor omdat hun water boven de RIVM-advieswaarde van 4,4 nanogram per liter in PFOA-equivalenten ligt.',
  },
  {
    question: 'Waar zie ik hoeveel PFAS er in mijn kraanwater zit?',
    answer:
      'Je drinkwaterbedrijf publiceert jaarlijks de gemeten waarden. Op onze pagina over PFAS in leidingwater per regio zetten we de bekende hotspots en waterbedrijven op een rij en leggen we uit hoe je jouw adres opzoekt.',
  },
  {
    question: 'Wat als ik een eigen put gebruik?',
    answer:
      'Particuliere putten worden niet door drinkwaterbedrijven gecontroleerd. Woon je in de buurt van een bekende PFAS-bron, zoals een vliegveld waar blusschuim is gebruikt of een chemische fabriek, laat het water dan eerst testen en volg het advies van je gemeente of GGD. Een filter is daarna een aanvulling, geen vervanging van dat advies.',
  },
  {
    question: 'Werkt een filterkan tegen PFAS?',
    answer:
      'Dat verschilt per filterkan en hangt af van wat er gemeten is. Claimt een fabrikant PFAS-reductie, kijk dan in het labrapport welke stoffen er gemeten zijn en of het rapport openbaar is. Wij noemen op deze pagina geen filterkan als keuze voor PFAS. Wil je PFAS gericht verminderen, kies dan voor omgekeerde osmose of een filter met een openbaar labrapport waarin PFAS zijn gemeten.',
  },
];

const keuzes = [
  {
    situatie: 'Kraanwater onder de RIVM-advieswaarde',
    advies: 'Voor PFAS is een filter niet nodig. Wil je er toch een, bijvoorbeeld voor de smaak, kies dan op basis van je andere wensen.',
  },
  {
    situatie: 'Kraanwater boven de RIVM-advieswaarde, zo veel mogelijk verminderen',
    advies: 'Omgekeerde osmose onder het aanrecht of in een kraan. Dit vermindert PFAS volgens de beschikbare metingen het sterkst.',
  },
  {
    situatie: 'Verminderen zonder osmose, tank of afvalwater',
    advies: 'Een leidingfilter met een openbaar labrapport. Minder reductie dan osmose, wel eenvoudiger en goedkoper.',
  },
  {
    situatie: 'Huurwoning of je mag niet boren',
    advies: 'Osmose op het aanrecht, zonder vaste installatie. Kijk ook bij PFAS-filter per woningtype.',
  },
  {
    situatie: 'Eigen put bij een bekende PFAS-bron',
    advies: 'Eerst het water laten testen en het advies van gemeente of GGD volgen. Daarna eventueel osmose als aanvulling.',
  },
];

export default function PfasGebiedenNederlandPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
        { name: 'Filter per regio', url: PAGE_URL },
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
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Filter per regio</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Welk PFAS-filter past bij jouw regio en waterbron?
          </h1>
          <QuickAnswer answer={QUICK_ANSWER} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <AuthorBox datePublished={DATE_PUBLISHED} dateModified={DATE_MODIFIED} />
        <HealthDisclaimer />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap 1: zoek uit hoeveel PFAS er in jouw water zit
          </h2>
          <p className="text-gray-700 mb-4">
            Hoeveel PFAS er in je kraanwater zit, hangt vooral af van de bron van je drinkwaterbedrijf. Daarom
            verschilt het per regio. Welke gebieden en waterbedrijven de hoogste waarden hebben, lees je op onze pagina{' '}
            <Link href="/leidingwater/pfas" className="text-[#005F8A] underline">PFAS in leidingwater per regio</Link>.
            Daar leggen we ook uit hoe je de meetwaarden voor jouw adres vindt.
          </p>
          <p className="text-gray-700 mb-4">
            Leg die waarden naast twee getallen. De wettelijke EU-norm is 100 nanogram per liter voor de som van 20
            PFAS; daar moeten drinkwaterbedrijven aan voldoen. Het RIVM adviseert daarnaast 4,4 nanogram per liter
            in PFOA-equivalenten. Hoe die twee zich verhouden, staat op{' '}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] underline">PFAS-normen voor drinkwater</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap 2: kies een filter dat bij je situatie past
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Jouw situatie</th>
                  <th className="p-3 text-left">Wat past</th>
                </tr>
              </thead>
              <tbody>
                {keuzes.map((k, i) => (
                  <tr key={k.situatie} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{k.situatie}</td>
                    <td className="p-3 text-gray-700">{k.advies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat er gemeten is bij de filters die wij noemen
          </h2>
          <p className="text-gray-700 mb-4">
            Een filter kies je het best op basis van een openbaar labrapport waarin PFAS zijn gemeten. Dit zijn de
            opties die wij in onze{' '}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">gids over PFAS-waterfilters</Link>{' '}
            als onze keuze per situatie noemen:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-3">
            <li>
              <strong>Osmose in de kraan:</strong> SGS mat bij een nieuw osmosesysteem van de{' '}
              <Link href={FOUR_IN_ONE.reviewPath} className="text-[#005F8A] underline">{FOUR_IN_ONE.name}</Link>{' '}
              {FOUR_IN_ONE.lab.PFOS} minder PFOS en {FOUR_IN_ONE.lab.PFOA} minder PFOA ({FOUR_IN_ONE.price}).
            </li>
            <li>
              <strong>Leidingfilter zonder osmose:</strong> bij Equinox Labs verminderde een nieuwe{' '}
              <Link href={PUREFILTER.reviewPath} className="text-[#005F8A] underline">{PUREFILTER.name}</Link>{' '}
              ({PUREFILTER.price}) vijf PFAS ({PUREFILTER.pfasTested.join(', ')}) met {PUREFILTER.pfasReduction}.
            </li>
            <li>
              <strong>Osmose op het aanrecht:</strong> het{' '}
              <Link href={COUNTERTOP.reviewPath} className="text-[#005F8A] underline">{COUNTERTOP.shortName}</Link>{' '}
              ({COUNTERTOP.price}) werkt zonder vaste installatie. Voor dit apparaat bestaat geen eigen PFAS-meting;
              onze keuze rust op de osmosetechniek.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Geen enkel filter haalt aantoonbaar elke PFAS-stof weg. Wil je na installatie weten wat je filter doet,
            lees dan hoe je{' '}
            <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] underline">water laat testen op PFAS</Link>.
          </p>
          <AffiliateDisclosure className="mt-2" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Woon je bij een bekende PFAS-bron?
          </h2>
          <p className="text-gray-700 mb-4">
            Rond de Chemours-fabriek in Dordrecht en rond vliegvelden waar jarenlang PFAS-houdend blusschuim is
            gebruikt, is PFAS in bodem en grondwater gevonden. Voor kraanwater verandert dat weinig aan je keuze: het
            drinkwaterbedrijf zuivert en meet, en de stappen hierboven gelden ook daar. Het verschil zit bij een eigen
            put. Die wordt niet gecontroleerd, dus laat het water testen en volg het advies van je gemeente of GGD
            voordat je een filter kiest.
          </p>
          <p className="text-gray-700 mb-4">
            Woon je in een huurwoning of appartement, dan bepaalt je woningtype mee wat je kunt installeren. Dat werken
            we uit op{' '}
            <Link href="/pfas-waterfilter/huis" className="text-[#005F8A] underline">PFAS-filter per woningtype</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over een PFAS-filter per regio
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg">
                <summary className="p-4 font-semibold text-[#005F8A] cursor-pointer hover:bg-gray-50">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 mb-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">PFAS-waterfilter gids</p>
              <p className="text-sm text-gray-500">Welke filters PFAS verminderen en wat er gemeten is</p>
            </Link>
            <Link href="/leidingwater/pfas" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">PFAS in leidingwater per regio</p>
              <p className="text-sm text-gray-500">Hotspots in Nederland en hoe je jouw adres opzoekt</p>
            </Link>
            <Link href="/pfas-waterfilter/huis" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">PFAS-filter per woningtype</p>
              <p className="text-sm text-gray-500">Huur, koop of appartement: wat je kunt installeren</p>
            </Link>
            <Link href="/pfas-waterfilter/testen" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">Water testen op PFAS</p>
              <p className="text-sm text-gray-500">Laboratoriumanalyse stap voor stap</p>
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

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
