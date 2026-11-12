import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { PureFilterCTA } from '@/components/PureFilterCTA';
import { FourInOneRecommendation } from '@/components/FourInOneRecommendation';
import { ThreeWayRecommendation } from '@/components/ThreeWayRecommendation';
import { CountertopCTA } from '@/components/CountertopCTA';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE, THREE_WAY, KRAAN_MARKET } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

const PAGE_TITLE = 'PFAS filter kopen: welk filter past bij jou (2026)';
const PAGE_URL = 'https://waterfilterplatform.nl/pfas-waterfilter/kopen';
// Max 160 tekens.
const PAGE_DESCRIPTION =
  'PFAS filter kopen? Vergelijk osmose, koolstoffilter en filterkan op bewijs, prijs en onderhoud, met onze keuze per situatie (PureAqua, aan ons gelieerd).';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    locale: 'nl_NL',
  },
};

// Zichtbare FAQ en FAQPage-JSON-LD gebruiken exact dezelfde (platte) tekst.
const faqItems = [
  {
    question: 'Welk PFAS-filter moet ik kopen?',
    answer:
      `Dat hangt af van je situatie. Onze keuze: wil je geen osmose, tank of afvalwater, dan de ${PUREFILTER.name} op de koude leiding (${PUREFILTER.price}; een nieuw filter verminderde vijf PFAS met ${PUREFILTER.pfasReduction} bij Equinox Labs). Wil je maximaal zuiveren plus zeer heet en gekoeld water, dan de ${FOUR_IN_ONE.name} (${FOUR_IN_ONE.price}; SGS mat PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder bij een nieuw systeem). Wil je osmosewater uit je eigen kraan, dan een zuiver-water-kraan met The Source. Mag je niet boren, dan het ${COUNTERTOP.shortName} op het aanrecht. Voor die laatste twee is geen eigen PFAS-meting gepubliceerd; daar rust onze keuze op de osmosetechniek. Alle vier verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.`,
  },
  {
    question: 'Welk bewijs moet een PFAS-filter hebben?',
    answer:
      `Wil je weten hoeveel PFAS een concreet filter haalt, dan heb je openbaar bewijs nodig: een NSF/ANSI 53- of 58-certificaat met een PFOA- en PFOS-claim, of een onafhankelijk labrapport dat je zelf kunt inzien. Kijk welke stoffen getest zijn, of het om een nieuw of gebruikt filter ging en of kortketenige PFAS zijn meegenomen. NSF/ANSI 42 gaat over geur en smaak en zegt niets over PFAS. Algemene teksten als "verwijdert verontreinigingen" zijn geen bewijs. Bij een koolstoffilter is zo'n test volgens ons onmisbaar, omdat de prestaties per filter sterk verschillen. Bij osmose is de techniek zelf een sterke aanwijzing, maar ook dan zegt alleen een meting wat een bepaald systeem haalt. Van onze keuzes hebben de ${PUREFILTER.name} en de ${FOUR_IN_ONE.name} een eigen PFAS-labtest; voor The Source en het ${COUNTERTOP.shortName} is die er niet.`,
  },
  {
    question: 'Wat kost een PFAS-filter?',
    answer:
      `Van ${PUREFILTER.price} voor een koolstoffilter op de leiding (navulfilter ${PUREFILTER.cartridgePrice}) tot ${FOUR_IN_ONE.price} voor een 4-in-1 kraan met osmose. Losse osmosesystemen onder het aanrecht kosten doorgaans ${KRAAN_MARKET.underSinkRange}. Een osmose-apparaat op het aanrecht, zoals het ${COUNTERTOP.shortName}, kost ${COUNTERTOP.price}. Reken daarnaast op filterwissels; bij The Source is dat ${THREE_WAY.filters}. Filterkannen kosten minder, maar voor PFAS is er weinig bewijs dat ze werken.`,
  },
  {
    question: 'Verwijdert omgekeerde osmose alle PFAS?',
    answer:
      `Niet allemaal, maar wel de meeste. Osmose houdt langketenige PFAS zoals PFOS en PFOA sterk tegen; kortketenige PFAS zijn kleiner en worden iets minder goed tegengehouden. Hoeveel een concreet systeem haalt, lees je alleen af aan een labrapport van dat systeem. Een voorbeeld: SGS mat bij een nieuw osmosesysteem van de ${FOUR_IN_ONE.name} ${FOUR_IN_ONE.lab.PFOS} minder PFOS en ${FOUR_IN_ONE.lab.PFOA} minder PFOA.`,
  },
  {
    question: 'Kan ik een PFAS-filter zelf installeren?',
    answer:
      `Een filter op de koude leiding zoals de ${PUREFILTER.name} zet je met wat handigheid zelf onder het aanrecht. Een osmosesysteem onder het aanrecht vraagt een afvoeraansluiting en meer werk; bij de 4-in-1 kraan en de zuiver-water-kranen is ${FOUR_IN_ONE.installation}. Een osmose-apparaat op het aanrecht hoeft niet geïnstalleerd te worden.`,
  },
  {
    question: 'Hoe vaak moet ik het filter vervangen?',
    answer:
      `Volg het schema van de fabrikant, want labresultaten gelden voor een nieuw filter. De ${PUREFILTER.name} gaat ${PUREFILTER.capacity} mee. Bij de 4-in-1 kraan is het schema: ${FOUR_IN_ONE.filters}. Bij The Source is het ${THREE_WAY.filters}. Een verzadigd filter zie of proef je niet.`,
  },
  {
    question: 'Is een osmose-apparaat op het aanrecht even goed als een systeem onder het aanrecht?',
    answer:
      `Het werkt met dezelfde techniek: een osmosemembraan. Voor het ${COUNTERTOP.shortName} is geen eigen PFAS-meting gepubliceerd, dus percentages noemen we daar niet. Het verschil zit vooral in gemak: je vult de tank met de hand, de capaciteit is ${COUNTERTOP.capacity} en het filter gaat ${COUNTERTOP.filterLife} mee. Voordeel: geen boren of leidingwerk, handig in een huurwoning.`,
  },
  {
    question: 'Hoe weet ik of mijn drinkwater veel PFAS bevat?',
    answer:
      'Je drinkwaterbedrijf publiceert de meetwaarden; vaak kun je ze op postcode opzoeken. Vergelijk ze met de wettelijke norm van 100 nanogram per liter voor de som van 20 PFAS en met de strengere RIVM-advieswaarde van 4,4 nanogram PFOA-equivalenten per liter. Nederlands kraanwater voldoet aan de wettelijke norm; volgens een analyse van Greenpeace (september 2026) ligt ongeveer een derde van het drinkwater wel boven de RIVM-advieswaarde.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Kopen', url: PAGE_URL },
];

// Koopinformatie per product (de keuze per situatie zelf staat op /pfas-waterfilter). Alle feiten uit lib/.
const buyRows = [
  {
    keuze: PUREFILTER.name,
    href: PUREFILTER.reviewPath,
    voor: 'Geen osmose, tank of afvalwater',
    aanschaf: PUREFILTER.price,
    onderhoud: `navulfilter ${PUREFILTER.cartridgePrice} per ${PUREFILTER.capacity}`,
    installatie: 'zelf te plaatsen op de koude leiding onder het aanrecht',
    meting: `Equinox Labs: ${PUREFILTER.pfasReduction} minder van vijf PFAS (nieuw filter)`,
    winkel: 'PureFilter.nl',
  },
  {
    keuze: FOUR_IN_ONE.name,
    href: FOUR_IN_ONE.reviewPath,
    voor: `Maximaal zuiveren, plus zeer heet (${FOUR_IN_ONE.hot.split(';')[0]}) en gekoeld water`,
    aanschaf: FOUR_IN_ONE.price,
    onderhoud: `circa ${FOUR_IN_ONE.filterCostYearEur} euro per jaar (indicatie op basis van fabrikantprijzen)`,
    installatie: FOUR_IN_ONE.installation,
    meting: `${FOUR_IN_ONE.labReport.lab}: PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder (nieuw systeem)`,
    winkel: 'PureAqua.nl',
  },
  {
    keuze: 'Zuiver-water-kraan met The Source',
    href: THREE_WAY.reviewPath,
    voor: 'Osmosewater uit je eigen keukenkraan',
    aanschaf: `${THREE_WAY.sourcePrice} plus kraan (${THREE_WAY.tapPrice})`,
    onderhoud: THREE_WAY.filters,
    installatie: THREE_WAY.installation,
    meting: 'Geen eigen PFAS-meting; onze keuze rust op de osmosetechniek',
    winkel: 'PureAqua.nl',
  },
  {
    keuze: COUNTERTOP.name,
    href: COUNTERTOP.reviewPath,
    voor: 'Huurwoning of niet boren',
    aanschaf: COUNTERTOP.price,
    onderhoud: `filter ${COUNTERTOP.filterLife}`,
    installatie: COUNTERTOP.installation,
    meting: 'Geen eigen PFAS-meting; onze keuze rust op de osmosetechniek',
    winkel: 'PureAqua.nl',
  },
];

// Kwalitatieve indeling per filtertype (zelfde oordeel als /pfas-waterfilter). Prijzen zijn indicatieve marktprijzen.
const filterTypes = [
  { type: 'Omgekeerde osmose (RO)', pfasVerwijdering: 'Sterk; ook het grootste deel van de kortketenige PFAS', bewijs: 'NSF/ANSI 58 met PFAS-claim of labrapport', kosten: KRAAN_MARKET.underSinkRange, aanbevolen: true },
  { type: 'Nanofiltratie (NF)', pfasVerwijdering: 'Sterk; kortketenig gedeeltelijk', bewijs: 'Labrapport van het systeem', kosten: '300 tot 800 euro', aanbevolen: true },
  { type: 'Koolstofblok of koolstofvezel op de leiding, met PFAS-labtest', pfasVerwijdering: 'Goed voor langketenig; kortketenig wisselend', bewijs: 'NSF/ANSI 53 met PFAS-claim of labrapport', kosten: '100 tot 300 euro', aanbevolen: true },
  { type: 'Actief kool zonder PFAS-labtest', pfasVerwijdering: 'Onbekend', bewijs: 'NSF/ANSI 42 zegt niets over PFAS', kosten: '50 tot 200 euro', aanbevolen: false },
  { type: 'Filterkan of opzetfilter', pfasVerwijdering: 'Weinig bewijs', bewijs: 'Zelden een PFAS-claim', kosten: '20 tot 80 euro', aanbevolen: false },
];

export default function PfasWaterfilterKopenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: '2026-04-25',
          dateModified: '2026-11-10',
          url: PAGE_URL,
          sources: ['RIVM', 'EU-drinkwaterrichtlijn 2020/2184', 'Equinox Labs', 'SGS', 'NOS'],
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS filter kopen: kosten, bewijs en waar je het haalt
          </h1>
          <p className="text-xs text-gray-500 mb-2">
            Bijgewerkt: <time dateTime="2026-11-10">10 november 2026</time>
          </p>
          <QuickAnswer
            question="Welk PFAS-filter kun je het best kopen?"
            answer={`Reken naast de aanschaf ook de filterwissels en de installatie mee. Onze keuze: de ${PUREFILTER.name} (${PUREFILTER.price}, zelf te plaatsen, navulfilter ${PUREFILTER.cartridgePrice}) als je geen osmose wilt; de ${FOUR_IN_ONE.name} (${FOUR_IN_ONE.price}, ${FOUR_IN_ONE.installation}) als je ook zeer heet en gekoeld water wilt; een zuiver-water-kraan met The Source (${THREE_WAY.sourcePrice} plus kraan, filters ${THREE_WAY.filters}) voor osmosewater uit je eigen kraan; het ${COUNTERTOP.shortName} (${COUNTERTOP.price}, geen installatie) als je niet mag boren. Een eigen PFAS-labtest is er voor de eerste twee; bij The Source en het Water zuiver apparaat rust onze keuze op de osmosetechniek, niet op een productmeting. Alle vier verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.`}
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-11-10" sources={['RIVM', 'EU-richtlijn 2020/2184', 'Equinox Labs', 'SGS']} />
        <AuthorBox datePublished="2026-04-25" dateModified="2026-11-10" />

        <p className="text-gray-700 mb-8 leading-relaxed">
          Eerst weten welke filtertypes PFAS echt verminderen en wat de normen zijn? Lees dan onze{' '}
          <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS waterfilter-gids</Link>. Op deze pagina
          gaat het om kopen: welk filter, welk bewijs, wat het kost en waar je het haalt.
        </p>

        <section className="mb-10" id="keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat kost onze keuze en waar koop je het?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welk filter volgens ons bij welke situatie past, lees je in de{' '}
            <Link href="/pfas-waterfilter#keuze" className="text-[#005F8A] underline">keuzetabel van onze PFAS-gids</Link>.
            Hier staat wat je per product betaalt, wat het onderhoud kost, hoe het geplaatst wordt en waar je het koopt.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[720px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left text-xs">Onze keuze</th>
                  <th className="p-3 text-left text-xs">Aanschaf</th>
                  <th className="p-3 text-left text-xs">Onderhoud</th>
                  <th className="p-3 text-left text-xs">Installatie</th>
                  <th className="p-3 text-left text-xs">Eigen PFAS-meting</th>
                  <th className="p-3 text-left text-xs">Te koop bij</th>
                </tr>
              </thead>
              <tbody>
                {buyRows.map((row, i) => (
                  <tr key={row.keuze} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 text-xs">
                      <Link href={row.href} className="font-medium text-[#005F8A] underline">{row.keuze}</Link>
                      <span className="block text-gray-500 mt-1">{row.voor}</span>
                    </td>
                    <td className="p-3 text-xs text-gray-700">{row.aanschaf}</td>
                    <td className="p-3 text-xs text-gray-700">{row.onderhoud}</td>
                    <td className="p-3 text-xs text-gray-700">{row.installatie}</td>
                    <td className="p-3 text-xs text-gray-700">{row.meting}</td>
                    <td className="p-3 text-xs text-gray-600">{row.winkel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Alle vier producten verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is. Labcijfers gelden voor de
            geteste stoffen en een nieuw filter of systeem, niet voor alle PFAS. De onderhoudskosten van de 4-in-1 zijn een
            indicatie op basis van de vervangfilterprijzen van de fabrikant, niet de PureAqua-prijs.
          </p>
          <PureFilterCTA context="pfas" content="pfas-waterfilter-kopen-purefilter" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welk type PFAS-filter koop je?
          </h2>
          <p className="text-gray-700 mb-4">
            Het filtertype bepaalt grofweg hoeveel PFAS eruit gaat, maar alleen bewijs per product laat zien wat een
            concreet filter haalt. Ons oordeel per type:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Filtertype</th>
                  <th className="p-3 text-left">PFAS-reductie</th>
                  <th className="p-3 text-left">Bewijs om naar te vragen</th>
                  <th className="p-3 text-left">Prijs</th>
                  <th className="p-3 text-center">Geschikt</th>
                </tr>
              </thead>
              <tbody>
                {filterTypes.map((f, i) => (
                  <tr key={f.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{f.type}</td>
                    <td className="p-3">{f.pfasVerwijdering}</td>
                    <td className="p-3 text-sm">{f.bewijs}</td>
                    <td className="p-3">{f.kosten}</td>
                    <td className="p-3 text-center">
                      {f.aanbevolen ? (
                        <span className="text-green-600 font-bold">Ja</span>
                      ) : (
                        <span className="text-red-500">Nee</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Kwalitatief oordeel van de redactie per filtertype, geen meting. De prijs voor osmose onder het aanrecht komt
            uit onze marktvergelijking; de overige prijzen zijn indicatieve marktprijzen. Bijgewerkt november 2026.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waar let je op bij het kopen van een PFAS-filter?
          </h2>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Openbaar bewijs voor PFAS',
                tekst:
                  'Wil je weten hoeveel PFAS een filter haalt, vraag dan naar een certificaat met PFAS-claim (NSF/ANSI 53 of 58 voor PFOA en PFOS) of een onafhankelijk labrapport dat je zelf kunt lezen. Kijk welke stoffen getest zijn en of het een nieuw filter was. Bij een koolstoffilter is dat volgens ons onmisbaar; bij osmose is de techniek al een sterke aanwijzing, maar zegt ook alleen een meting wat een bepaald systeem haalt. Teksten als "verwijdert verontreinigingen" zijn geen bewijs.',
              },
              {
                nr: '2',
                titel: 'Korte en lange PFAS-ketens',
                tekst:
                  'Osmose houdt zowel langketenige (PFOS, PFOA) als het grootste deel van de kortketenige PFAS tegen. Koolstoffilters werken vooral op langketenige PFAS en wisselend op kortketenige. Zeer kortketenige stoffen zoals TFA houdt actief kool slecht vast.',
              },
              {
                nr: '3',
                titel: 'Ruimte en installatie',
                tekst:
                  'Een filter op de koude leiding past in vrijwel elk keukenkastje. Een osmosesysteem onder het aanrecht vraagt ruimte, een afvoeraansluiting en vaak een stopcontact. In een huurwoning is een osmose-apparaat op het aanrecht vaak de makkelijkste route.',
              },
              {
                nr: '4',
                titel: 'Filterwissels en onderhoudskosten',
                tekst:
                  `Reken de jaarlijkse filterkosten mee. Bij de ${PUREFILTER.name} kost een navulfilter ${PUREFILTER.cartridgePrice} per ${PUREFILTER.capacity}; bij de zuiver-water-kranen is het ${THREE_WAY.filters}. Kies een merk met reservefilters die in Nederland leverbaar zijn.`,
              },
              {
                nr: '5',
                titel: 'Combineer met heet en gekoeld water',
                tekst:
                  `Wil je ook een kokendwaterkraan, dan kan dat in één keer. De ${FOUR_IN_ONE.name} geeft ${FOUR_IN_ONE.functions}. In een SGS-labtest op een nieuw systeem daalde PFOS met ${FOUR_IN_ONE.lab.PFOS} en PFOA met ${FOUR_IN_ONE.lab.PFOA}.`,
              },
            ].map(item => (
              <div key={item.nr} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  {item.nr}
                </div>
                <div>
                  <h3 className="font-semibold text-[#005F8A] mb-1">{item.titel}</h3>
                  <p className="text-gray-700 text-sm">{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-10">
          <FourInOneRecommendation content="pfas-waterfilter-kopen-aanbeveling" />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Osmose of koolstoffilter: welke kies je voor PFAS?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-green-500 rounded-xl p-5">
              <h3 className="font-bold text-green-700 mb-3">Omgekeerde osmose: sterkste reductie</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-500">+</span>Houdt langketenige PFAS sterk tegen</li>
                <li className="flex gap-2"><span className="text-green-500">+</span>Werkt ook op het grootste deel van de kortketenige PFAS</li>
                <li className="flex gap-2"><span className="text-green-500">+</span>Vermindert ook lood, nitraat, kalk en microplastics</li>
                <li className="flex gap-2"><span className="text-red-400">-</span>Hogere aanschafprijs en meer installatie</li>
                <li className="flex gap-2"><span className="text-red-400">-</span>Gebruikt spoelwater</li>
              </ul>
            </div>
            <div className="border-2 border-yellow-400 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-3">Koolstoffilter op de leiding: eenvoudiger</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-500">+</span>Goedkoper en zelf te plaatsen</li>
                <li className="flex gap-2"><span className="text-green-500">+</span>Geen afvalwater, tank of stroom</li>
                <li className="flex gap-2"><span className="text-green-500">+</span>Behoudt mineralen in het water</li>
                <li className="flex gap-2"><span className="text-red-400">-</span>Wisselend voor kortketenige PFAS; kijk welke stoffen getest zijn</li>
                <li className="flex gap-2"><span className="text-red-400">-</span>Op tijd vervangen is belangrijk; een verzadigd filter werkt slechter</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mb-10">
          <ThreeWayRecommendation content="pfas-waterfilter-kopen-aanbeveling" />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Heb je echt een PFAS-filter nodig?
          </h2>
          <p className="text-gray-700 mb-4">
            Nederlands kraanwater voldoet aan de wettelijke PFAS-norm van 100 nanogram per liter voor de som van 20 PFAS.
            Een filter is dus geen noodzaak, maar kan zinvol zijn in deze situaties:
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                titel: 'Je water zit boven de RIVM-advieswaarde',
                tekst:
                  'Het RIVM hanteert een strengere advieswaarde van 4,4 nanogram PFOA-equivalenten per liter. Volgens een analyse van Greenpeace (september 2026) ligt ongeveer een derde van het Nederlandse drinkwater daarboven, met hoge waarden onder meer in IJmuiden en Zaandam.',
              },
              {
                titel: 'Je gebruikt putwater of bronwater',
                tekst:
                  'Een eigen put valt niet onder de controle van een drinkwaterbedrijf. Laat het water testen voordat je het drinkt.',
              },
              {
                titel: 'Je wilt extra marge',
                tekst:
                  'Ook buiten bekende hotspots kiezen mensen voor een filter om hun inname via drinkwater te verlagen. Bedenk dat het RIVM voedsel en drinkwater allebei als belangrijke bron van PFAS noemt.',
              },
            ].map(item => (
              <div key={item.titel} className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-[#005F8A] mb-1">{item.titel}</h3>
                <p className="text-gray-700 text-sm">{item.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700">
            Bekijk de waarden in jouw regio op de{' '}
            <Link href="/kennisbank/pfas-nederland-kaart" className="text-[#005F8A] underline">PFAS-kaart van Nederland</Link>{' '}
            of laat je water <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] underline">testen op PFAS</Link>.
          </p>
        </section>

        <HealthDisclaimer />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over een PFAS-filter kopen
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-200 rounded-lg">
                <summary className="p-4 font-semibold text-[#005F8A] cursor-pointer hover:bg-gray-50">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mb-10">
          <CountertopCTA context="pfas" content="pfas-waterfilter-kopen-countertop" />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer over PFAS en waterfilters</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/pfas-waterfilter" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS waterfilter-gids</h3>
              <p className="text-sm text-gray-600">Welke filters werken echt, en welke niet</p>
            </Link>
            <Link href="/pfas-waterfilter/vergelijken" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS-filters vergelijken</h3>
              <p className="text-sm text-gray-600">Osmose, koolstof en nanofiltratie naast elkaar</p>
            </Link>
            <Link href="/pfas-waterfilter/kosten" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">Kosten van een PFAS-filter</h3>
              <p className="text-sm text-gray-600">Aanschaf en onderhoud over vijf jaar</p>
            </Link>
            <Link href="/pfas-waterfilter/normen-2026" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS-normen 2026</h3>
              <p className="text-sm text-gray-600">Wettelijke norm en RIVM-advies uitgelegd</p>
            </Link>
            <Link href="/pfas-waterfilter/gebieden-nederland" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS risicogebieden</h3>
              <p className="text-sm text-gray-600">PFAS hotspots per regio in Nederland</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">Omgekeerde osmose gids</h3>
              <p className="text-sm text-gray-600">Alles over osmosefilters in Nederland</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
