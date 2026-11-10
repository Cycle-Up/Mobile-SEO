import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { PureFilterCTA } from '@/components/PureFilterCTA';
import { FourInOneRecommendation } from '@/components/FourInOneRecommendation';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE, THREE_WAY, KRAAN_MARKET } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

const PAGE_TITLE = 'PFAS waterfilters vergelijken: osmose, koolstof, filterkan';
const PAGE_URL = 'https://waterfilterplatform.nl/pfas-waterfilter/vergelijken';
// Max 160 tekens.
const PAGE_DESCRIPTION =
  'PFAS-filters vergeleken: osmose, actief kool, filter op de leiding en filterkan (Brita). Met gemeten labcijfers per product en eerlijke kanttekeningen.';

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

// Zichtbare FAQ en FAQPage-JSON-LD gebruiken exact dezelfde tekst.
const faqItems = [
  {
    question: 'Welk waterfilter verwijdert PFAS het beste?',
    answer: `Omgekeerde osmose vermindert PFAS het sterkst en verwijdert in onderzoek het grootste deel van de PFAS, ook veel kortketenige soorten. Nanofiltratie komt in de buurt. Een goed koolstofblokfilter helpt vooral tegen langketenige PFAS. Over filterkannen is weinig onafhankelijk bewijs, en UV doet niets tegen PFAS. Gemeten bij producten die wij aanraden: ${FOUR_IN_ONE.labReport.lab} mat bij een nieuw osmosesysteem van de ${FOUR_IN_ONE.name} PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder; Equinox Labs mat bij een nieuwe ${PUREFILTER.name} ${PUREFILTER.pfasReduction} minder van vijf PFAS. Beide verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.`,
  },
  {
    question: 'Filtert een Brita-filterkan PFAS?',
    answer:
      'Daar is weinig over bekend. Voor de filterkannen die in Nederland verkocht worden, vonden wij weinig onafhankelijk gepubliceerd bewijs over PFAS. Het actieve kool in een filterkan kan een deel van de langketenige PFAS afvangen, maar de contacttijd is kort, het filter raakt snel verzadigd en kortketenige PFAS zoals PFBS en TFA houdt actief kool slecht vast. Filterkannen zijn vooral gemaakt voor chloor, kalk en smaak. Noemt een fabrikant PFAS-reductie, kijk dan welke stoffen getest zijn, of dat met een nieuw of gebruikt filter was en of een onafhankelijk lab de test deed.',
  },
  {
    question: 'Wat betekenen NSF/ANSI 58, NSF/ANSI 53 en P473 voor PFAS?',
    answer:
      'NSF/ANSI 58 is de Amerikaanse norm voor osmosesystemen, NSF/ANSI 53 die voor filters die gezondheidsrelevante stoffen verminderen, zoals koolstofblokfilters. Het oudere NSF-protocol P473 voor PFOA en PFOS is in die twee normen opgegaan. Een certificaat geldt alleen voor de stoffen die erop staan; voor PFAS zijn dat vaak alleen PFOA en PFOS. Kijk dus altijd naar de lijst met stoffen op het certificaat. NSF/ANSI 42 gaat alleen over smaak en geur en zegt niets over PFAS.',
  },
  {
    question: 'Waarom is actief kool minder goed voor kortketenige PFAS?',
    answer:
      'Kortketenige PFAS, zoals PFBS, PFBA, GenX en het zeer kortketenige TFA, zijn beter oplosbaar in water en binden minder sterk aan het koolstofoppervlak. Langketenige PFAS zoals PFOS en PFOA binden beter. Een osmosemembraan werkt niet met binding maar houdt opgeloste stoffen tegen; daardoor vermindert osmose ook kortketenige PFAS beter, al is TFA ook voor osmose lastiger dan PFOS en PFOA.',
  },
  {
    question: 'Is nanofiltratie een goed alternatief voor omgekeerde osmose bij PFAS?',
    answer:
      'Nanofiltratie vermindert langketenige PFAS bijna net zo goed als osmose, maar kortketenige PFAS doorgaans iets minder. Het laat meer mineralen door, wat sommige mensen prettig vinden. Voor thuisgebruik is het aanbod in Nederland klein. Wil je de grootste zekerheid bij PFAS, dan is osmose volgens ons de logischere keuze.',
  },
  {
    question: 'Hoe verhoudt de PureFilter Mineral+ zich tot osmose bij PFAS?',
    answer: `Osmose vermindert PFAS sterker. De ${PUREFILTER.name} is een koolstofvezelfilter op de koude leiding, zonder tank, stroom of afvalwater; Equinox Labs mat bij een nieuw filter ${PUREFILTER.pfasReduction} minder van vijf PFAS (${PUREFILTER.pfasTested.join(', ')}). Bij het osmosesysteem van de ${FOUR_IN_ONE.name} mat ${FOUR_IN_ONE.labReport.lab} PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder. De twee tests zijn door verschillende labs met verschillende methoden gedaan, dus vergelijk ze als richting, niet tot op de procent. Beide producten verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.`,
  },
  {
    question: 'Wat kost een PFAS-waterfilter per type?',
    answer: `Een filterkan kost circa 20 tot 80 euro, een koolstofblokfilter circa 50 tot 200 euro en een osmosesysteem onder het aanrecht doorgaans ${KRAAN_MARKET.underSinkRange}. Bij de producten die wij aanraden: de ${PUREFILTER.name} kost ${PUREFILTER.price}, een navulfilter ${PUREFILTER.cartridgePrice}. Het ${COUNTERTOP.name} kost ${COUNTERTOP.price}. The Source kost ${THREE_WAY.sourcePrice}, een zuiver-water-kraan ${THREE_WAY.tapPrice}; onderhoud: ${THREE_WAY.filters}. De ${FOUR_IN_ONE.name} kost ${FOUR_IN_ONE.price}, met filterkosten van omgerekend circa ${FOUR_IN_ONE.filterCostYearEur} euro per jaar. Vergelijk altijd de kosten over meerdere jaren, niet alleen de aanschafprijs.`,
  },
  {
    question: 'Wat betekent de "rejection rate" van een osmosemembraan?',
    answer:
      'De rejection rate is het percentage van een stof dat het membraan tegenhoudt. Bij een rejection rate van 98 procent en 100 nanogram per liter in het kraanwater blijft er circa 2 nanogram per liter over. Fabrikanten geven dit vaak op voor zouten in het algemeen, niet per PFAS. Kijk daarom naar een labrapport of certificaat waarin PFAS apart gemeten zijn.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Vergelijken', url: PAGE_URL },
];

// Kwalitatieve inschatting per filtertype, zonder percentages: lib/ bevat geen algemene bandbreedtes.
// Gemeten cijfers staan alleen in productData hieronder (uit lib/).
const filterData = [
  { type: 'Omgekeerde osmose (RO)', langketens: 'Sterk verminderd', kortketens: 'Grotendeels verminderd, TFA lastiger', kosten: `${KRAAN_MARKET.underSinkRange} (los systeem)`, aanbevolen: true },
  { type: 'Nanofiltratie (NF)', langketens: 'Bijna als osmose', kortketens: 'Iets minder dan osmose', kosten: 'EUR 300-800', aanbevolen: true },
  { type: 'Actief kool (blokfilter)', langketens: 'Vaak goed verminderd', kortketens: 'Duidelijk minder', kosten: 'EUR 50-200', aanbevolen: false },
  { type: 'Actief kool (granulaat)', langketens: 'Deels, korte contacttijd', kortketens: 'Slecht', kosten: 'EUR 30-100', aanbevolen: false },
  { type: 'Filterkan (Brita-type)', langketens: 'Onbekend', kortketens: 'Onbekend', kosten: 'EUR 20-80', aanbevolen: false },
  { type: 'UV-lamp', langketens: 'Geen effect', kortketens: 'Geen effect', kosten: 'EUR 30-150', aanbevolen: false },
];

// Producten die wij aanraden, met wat er per product gemeten is (lib/purefilter.mjs, lib/kranen.mjs, lib/countertop.mjs).
const productData = [
  {
    product: PUREFILTER.name,
    href: PUREFILTER.reviewPath,
    techniek: 'Koolstofvezel op de koude leiding, met remineralisatie',
    gemeten: `${PUREFILTER.pfasReduction} minder ${PUREFILTER.pfasTested.join(', ')}`,
    bron: 'Equinox Labs, nieuw filter',
    prijs: PUREFILTER.price,
  },
  {
    product: FOUR_IN_ONE.name,
    href: FOUR_IN_ONE.reviewPath,
    techniek: 'Omgekeerde osmose, plus zeer heet en gekoeld water',
    gemeten: `PFOS ${FOUR_IN_ONE.lab.PFOS}, PFOA ${FOUR_IN_ONE.lab.PFOA} minder`,
    bron: `${FOUR_IN_ONE.labReport.lab}, nieuw systeem`,
    prijs: FOUR_IN_ONE.price,
  },
  {
    product: 'Zuiver-water-kraan met The Source',
    href: THREE_WAY.reviewPath,
    techniek: 'Omgekeerde osmose onder het aanrecht, uit je eigen kraan',
    gemeten: 'Geen eigen PFAS-meting gepubliceerd',
    bron: 'Niet van toepassing',
    prijs: `${THREE_WAY.sourcePrice} plus kraan (${THREE_WAY.tapPrice})`,
  },
  {
    product: COUNTERTOP.name,
    href: COUNTERTOP.reviewPath,
    techniek: 'Omgekeerde osmose op het aanrecht, zonder installatie',
    gemeten: 'Geen eigen PFAS-meting gepubliceerd',
    bron: 'Niet van toepassing',
    prijs: COUNTERTOP.price,
  },
];

const situaties = [
  {
    situatie: 'Maximaal zuiveren, plus zeer heet en gekoeld water',
    advies: `Onze keuze: de ${FOUR_IN_ONE.name}. Omgekeerde osmose met een openbaar SGS-rapport: PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder bij een nieuw systeem.`,
    href: FOUR_IN_ONE.reviewPath,
    kleur: 'border-green-500',
  },
  {
    situatie: 'Osmosewater uit je eigen keukenkraan',
    advies: 'Onze keuze: een zuiver-water-kraan met The Source onder het aanrecht. Omgekeerde osmose; een eigen PFAS-meting is niet gepubliceerd.',
    href: THREE_WAY.reviewPath,
    kleur: 'border-green-500',
  },
  {
    situatie: 'Minder PFAS zonder osmose, tank of afvalwater',
    advies: `Onze keuze: de ${PUREFILTER.name} op de koude leiding. Equinox Labs: ${PUREFILTER.pfasReduction} minder van vijf PFAS bij een nieuw filter. Osmose blijft sterker.`,
    href: PUREFILTER.reviewPath,
    kleur: 'border-yellow-400',
  },
  {
    situatie: 'Huurwoning of niet boren',
    advies: `Onze keuze: het ${COUNTERTOP.name} op het aanrecht. Omgekeerde osmose zonder vaste installatie; een eigen PFAS-meting is niet gepubliceerd.`,
    href: COUNTERTOP.reviewPath,
    kleur: 'border-blue-400',
  },
  {
    situatie: 'Water uit een eigen put',
    advies: 'Laat eerst een labtest doen. Putwater kan ook andere stoffen bevatten waar je filterkeuze rekening mee moet houden.',
    href: '/pfas-waterfilter/testen',
    kleur: 'border-gray-400',
  },
];

export default function PfasVergelijkenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: '2026-05-01',
          dateModified: '2026-11-10',
          url: PAGE_URL,
          sources: ['RIVM', 'EU-drinkwaterrichtlijn 2020/2184', 'Equinox Labs', 'SGS', 'NSF International'],
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS waterfilters vergelijken: welk type vermindert het meest?
          </h1>
          <p className="text-xs text-gray-500 mb-2">
            Laatst bijgewerkt: <time dateTime="2026-11-10">10 november 2026</time>
          </p>
          <QuickAnswer
            question="Welk type waterfilter vermindert PFAS het meest?"
            answer={`Omgekeerde osmose vermindert PFAS het sterkst, ook een groot deel van de kortketenige stoffen. Een koolstofblokfilter helpt vooral tegen langketenige PFAS; over filterkannen zoals Brita is weinig onafhankelijk bewijs, en UV doet niets. Gemeten: ${FOUR_IN_ONE.labReport.lab} mat bij een nieuw osmosesysteem van de ${FOUR_IN_ONE.name} PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder. Zonder osmose mat Equinox Labs bij een nieuwe ${PUREFILTER.name} ${PUREFILTER.pfasReduction} minder van vijf PFAS. Beide verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.`}
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-11-10" sources={['RIVM', 'EU-richtlijn 2020/2184', 'Equinox Labs', 'SGS']} />
        <AuthorBox datePublished="2026-05-01" dateModified="2026-11-10" />
        <HealthDisclaimer />

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed">
            Nederlands kraanwater voldoet aan de wettelijke PFAS-norm van 100 nanogram per liter voor de som van 20
            PFAS. Het RIVM hanteert een strengere advieswaarde van 4,4 nanogram PFOA-equivalenten per liter, die geen
            wettelijke norm is. Een filter is dus een keuze voor extra marge. Op deze pagina zetten we de filtertypes en
            de producten die wij aanraden naast elkaar. Wil je meteen weten welk filter bij jouw situatie past, lees dan
            onze gids over het{' '}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] underline font-medium">PFAS waterfilter</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijkingstabel: PFAS-reductie per filtertype
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet elk waterfilter is even effectief tegen PFAS. De tabel geeft per filtertype een algemene inschatting voor
            langketenige PFAS (zoals PFOS en PFOA) en kortketenige PFAS (zoals PFBS, GenX en TFA). Kortketenige PFAS
            zijn het lastigst te filteren.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Filtertype</th>
                  <th className="p-3 text-left">Langketenige PFAS</th>
                  <th className="p-3 text-left">Kortketenige PFAS</th>
                  <th className="p-3 text-left">Aanschaf</th>
                  <th className="p-3 text-center">Aanbevolen</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((f, i) => (
                  <tr key={f.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{f.type}</td>
                    <td className={`p-3 font-semibold ${f.aanbevolen ? 'text-green-700' : 'text-gray-700'}`}>{f.langketens}</td>
                    <td className={`p-3 font-semibold ${f.aanbevolen ? 'text-green-700' : 'text-red-600'}`}>{f.kortketens}</td>
                    <td className="p-3">{f.kosten}</td>
                    <td className="p-3 text-center">
                      {f.aanbevolen
                        ? <span className="text-green-700 font-semibold">Ja</span>
                        : <span className="text-red-600">Nee</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Algemene inschatting per techniek, bij een nieuw filter en correct onderhoud; geen gemeten percentages.
            Hoeveel een concreet product vermindert, verschilt per stof en per systeem. Gemeten cijfers per product
            staan in de producttabel hieronder. De aanschafprijs is een indicatie voor een los
            systeem; een kraan met osmose en extra functies kost meer, zie de producttabel hieronder. Bijgewerkt november
            2026.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Gemeten: de PFAS-filters die wij aanraden naast elkaar
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Percentages noemen we alleen waar een onafhankelijk labrapport bestaat. The Source en het{' '}
            {COUNTERTOP.name} werken ook met omgekeerde osmose, maar voor die twee is geen eigen PFAS-meting
            gepubliceerd. Daarom noemen we daar geen percentage.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-left">Techniek</th>
                  <th className="p-3 text-left">Gemeten PFAS-reductie</th>
                  <th className="p-3 text-left">Bron</th>
                  <th className="p-3 text-left">Prijs</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((p, i) => (
                  <tr key={p.product} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium">
                      <Link href={p.href} className="text-[#005F8A] underline">{p.product}</Link>
                    </td>
                    <td className="p-3 text-gray-700">{p.techniek}</td>
                    <td className="p-3 text-gray-700">{p.gemeten}</td>
                    <td className="p-3 text-gray-600">{p.bron}</td>
                    <td className="p-3 text-gray-600">{p.prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Alle vier producten verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is. Labcijfers gelden voor de
            geteste stoffen en een nieuw filter of systeem, en zijn door verschillende labs met verschillende methoden
            gemeten. Lees het{' '}
            <a href={FOUR_IN_ONE.labReport.url} rel="noopener" className="underline">SGS-testrapport (pdf)</a> en het{' '}
            <a href={PUREFILTER.labReportUrl} rel="noopener" className="underline">Equinox-testrapport (pdf)</a>.
          </p>
          <div className="space-y-6">
            <FourInOneRecommendation content="pfas-waterfilter-vergelijken-aanbeveling" />
            <PureFilterCTA context="pfas" content="pfas-waterfilter-vergelijken" />
          </div>
        </section>

        <section className="mb-10" id="filterkan-brita">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filterkan (Brita) en PFAS: wat weten we?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Veel mensen hebben al een filterkan en vragen zich af of die ook PFAS tegenhoudt. Het eerlijke antwoord: daar
            is weinig over bekend. Voor de filterkannen die in Nederland verkocht worden, vonden wij weinig onafhankelijk
            gepubliceerd bewijs over PFAS-reductie. Dat betekent niet dat een kan niets doet, maar wel dat je er niet op
            kunt rekenen.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 leading-relaxed">
            <li>
              <strong>Korte contacttijd.</strong> Het water loopt in seconden door een klein patroon. Actief kool heeft
              tijd nodig om PFAS te binden.
            </li>
            <li>
              <strong>Snelle verzadiging.</strong> Een patroon gaat een paar weken mee. Hoe voller het raakt, hoe minder
              het bindt, en dat zie of proef je niet.
            </li>
            <li>
              <strong>Kortketenige PFAS.</strong> Stoffen als PFBS en TFA houdt actief kool slecht vast. De ILT
              waarschuwde in september 2026 dat TFA uit bestrijdingsmiddelen een groeiend risico vormt voor drinkwater
              (<a href="https://nos.nl/artikel/2630617" rel="noopener" className="text-[#005F8A] underline">NOS</a>).
            </li>
            <li>
              <strong>Gemaakt voor iets anders.</strong> Filterkannen zijn vooral bedoeld voor chloor, kalk en smaak.
              Daar doen ze het goed in.
            </li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Noemt een fabrikant toch PFAS-reductie, kijk dan welke stoffen getest zijn, of dat met een nieuw of gebruikt
            filter was en of een onafhankelijk lab de test deed. Wil je geen kan meer bijvullen en wel een gemeten
            resultaat, dan is een filter op de leiding zoals de{' '}
            <Link href={PUREFILTER.reviewPath} className="text-[#005F8A] underline">{PUREFILTER.name}</Link> volgens ons
            een betere stap; wil je de grootste reductie, kies dan osmose.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer over filterkannen lees je bij{' '}
            <Link href="/filterkan/brita" className="text-[#005F8A] underline">Brita filterkannen</Link> en in onze
            vergelijking{' '}
            <Link href="/kennisbank/brita-vs-osmose" className="text-[#005F8A] underline">Brita of osmose</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom kortketenige PFAS het verschil maken
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Langketenige PFAS zoals PFOS en PFOA hebben acht koolstofatomen en zijn het best onderzocht. Kortketenige
            PFAS zoals PFBS, PFBA en GenX zijn vaak vervangers die de industrie ging gebruiken na de beperkingen op PFOS
            en PFOA. TFA is nog kleiner en ontstaat onder meer als afbraakproduct van bestrijdingsmiddelen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kortketenige PFAS binden minder goed aan actief kool. Waar een koolstofblokfilter langketenige PFAS sterk kan
            verminderen, haalt hetzelfde filter kortketenige PFAS duidelijk minder weg. Een osmosemembraan houdt
            opgeloste stoffen tegen en vermindert daardoor ook kortketenige PFAS beter.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer over de techniek lees je bij{' '}
            <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">actief-kool waterfilters</Link>,{' '}
            <Link href="/filtertechnieken/nanofiltration" className="text-[#005F8A] underline">nanofiltratie</Link> en{' '}
            <Link href="/pfas-waterfilter/osmose" className="text-[#005F8A] underline">omgekeerde osmose tegen PFAS</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Certificaten en labrapporten: waar let je op?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een certificaat of labrapport zegt alleen iets over de stoffen en omstandigheden die getest zijn. Lees het dus
            altijd met drie vragen in je achterhoofd: welke PFAS zijn gemeten, met een nieuw of een gebruikt filter, en
            door wie?
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58: osmosesystemen</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                De Amerikaanse norm voor osmosesystemen. Een certificaat geldt voor de stoffen die erop staan; voor PFAS
                zijn dat vaak PFOA en PFOS.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 53: koolstoffilters en andere filters</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Norm voor filters die gezondheidsrelevante stoffen verminderen. Niet elk NSF/ANSI 53-filter is op PFAS
                getest: controleer de lijst met stoffen bij het certificaat. Het oudere protocol P473 voor PFOA en PFOS is
                in NSF/ANSI 53 en 58 opgegaan.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 42: alleen smaak en geur</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Zegt alleen iets over smaak en geur, zoals chloor. Geen aanwijzing voor PFAS-reductie.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">Openbaar labrapport</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Zonder certificaat is een openbaar rapport van een onafhankelijk lab het beste bewijs. De producten met
                percentages op deze pagina hebben zo&apos;n rapport (SGS en Equinox Labs); een NSF-certificaat claimen
                wij voor die producten niet.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Per situatie: welk PFAS-filter kies je?
          </h2>
          <div className="space-y-4 mb-6">
            {situaties.map(item => (
              <div key={item.situatie} className={`border-l-4 ${item.kleur} pl-4 bg-gray-50 rounded-r-lg p-3`}>
                <h3 className="font-semibold text-[#005F8A] mb-1">{item.situatie}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.advies}{' '}
                  <Link href={item.href} className="text-[#005F8A] underline">Meer lezen</Link>
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mb-4">
            De vier productkeuzes zijn van PureAqua, waaraan WaterfilterPlatform gelieerd is.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Alle keuzes met uitleg en kosten staan in ons overzicht{' '}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS waterfilter: welke filters werken echt</Link>.
            Wil je eerst weten wat er in je water zit, lees dan hoe je{' '}
            <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] underline">je water op PFAS laat testen</Link>.
          </p>
        </section>

        <section className="mb-10 mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over PFAS-filters vergelijken
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-200 rounded-lg">
                <summary className="p-4 font-semibold text-[#005F8A] cursor-pointer hover:bg-gray-50">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 mb-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter overzicht</h3>
              <p className="text-sm text-gray-600">Onze keuze per situatie, met labcijfers en kosten</p>
            </Link>
            <Link href="/pfas-waterfilter/osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose tegen PFAS</h3>
              <p className="text-sm text-gray-600">Hoe osmose werkt, wat het kost en wat gemeten is</p>
            </Link>
            <Link href="/filterkan/brita" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Brita filterkannen</h3>
              <p className="text-sm text-gray-600">Wat een filterkan wel en niet doet</p>
            </Link>
            <Link href="/pfas-waterfilter/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS-filter kopen</h3>
              <p className="text-sm text-gray-600">Opties en kosten naast elkaar</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
