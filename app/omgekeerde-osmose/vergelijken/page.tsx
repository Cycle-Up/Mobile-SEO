import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { TrustBar } from '@/components/TrustBar';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Omgekeerde Osmose Vergelijken 2026: Welk Systeem?',
  description:
    'Omgekeerde osmose systemen vergelijken? Ontdek de verschillen tussen onderbouw, aanrecht en geïntegreerde 4-in-1 systemen op doorstroomsnelheid, afvalwaterratio, filterkosten en geschiktheid.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/vergelijken' },
  openGraph: {
    title: 'Omgekeerde Osmose Vergelijken 2026: Welk Systeem Past Bij Jou?',
    description:
      'Vergelijk onderbouw RO, aanrechtmodel en geïntegreerde 4-in-1 kokend water kraan op specs: doorstroom (L/u), afvalwaterratio, tankvolume, filterkosten en prijs.',
    url: 'https://waterfilterplatform.nl/omgekeerde-osmose/vergelijken',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen een onderbouw osmose filter en een aanrechtmodel?',
    answer:
      'Een onderbouw (under-sink) osmose systeem wordt onder het aanrecht gemonteerd op de koudwatertoevoer. Het gefilterde water gaat naar een aparte kraantje of naar een geïntegreerde keukenkraan. Een aanrechtmodel staat zichtbaar op het aanrecht, is eenvoudiger te installeren (geen slangaansluiting nodig), maar neemt meer aanrechtruimte in. Onderbouwsystemen zijn krachtiger, hebben grotere tanks en hogere doorstroomsnelheden, maar vereisen meer installatiewerk.',
  },
  {
    question: 'Hoeveel afvalwater produceert een omgekeerde osmose systeem?',
    answer:
      'Conventionele osmose systemen zonder boostpomp produceren 2–5 liter afvalwater per liter schoon water (ratio 1:2 tot 1:5). Modernere systemen met boostpomp of permeaatpomp halen een verhouding van 1:1 of zelfs 2:1 (meer schoon dan afval). Premium systemen zoals geïntegreerde 4-in-1 kokend water kranen zijn ontworpen met een gunstige afvalwaterratio. Vraag altijd naar de exacte ratio bij aanschaf.',
  },
  {
    question: 'Hoeveel filterstappen heeft een goed osmose systeem?',
    answer:
      'Een degelijk osmose systeem heeft minimaal 4 filterstappen: (1) sedimentfilter voor grove deeltjes, (2) actief koolstof voorfilter voor chloor en organische stoffen, (3) RO-membraan voor 95–99% verwijdering van opgeloste stoffen, (4) actief koolstof nafilter voor smaak- en geurverbetering. Premium systemen voegen een (5) remineralisatiefilter toe om gezonde mineralen terug te brengen. Systemen met 5+ stappen zijn aanbevolen voor dagelijks drinkwater.',
  },
  {
    question: 'Welk osmose systeem is het beste voor hard water?',
    answer:
      'In harde watergebieden (>15 °dH) is een geïntegreerd onderbouwsysteem of 4-in-1 kokend water kraan met osmose filtratie de beste keuze. Het RO-membraan verwijdert effectief de calcium- en magnesiumionen die verantwoordelijk zijn voor kalkafzetting. Een boostpomp verbetert de prestaties bij lage waterdruk. Vergeet niet dat kalk ook het RO-membraan kan aantasten — kies een systeem met een goede sediment- en kalkfilter als voorfilter.',
  },
  {
    question: 'Kan ik een osmose filter installeren in een huurwoning?',
    answer:
      'Ja, de meeste onderbouw osmose systemen kunnen zonder toestemming van de verhuurder worden geïnstalleerd. Ze worden aangesloten op de bestaande koudwaterkraan onder het aanrecht via een T-stuk aansluiting — geen permanente aanpassing aan de waterleiding. De installatie is volledig omkeerbaar. Aanrechtmodellen zijn nog eenvoudiger: zij vereisen slechts een aansluiting op de keukenkraan via een adapter. Neem bij twijfel contact op met je verhuurder.',
  },
];

const itemListSchema = {
  '@type': 'ItemList',
  name: 'Omgekeerde Osmose Systemen Vergelijken 2026',
  description: 'Vergelijking van onderbouw RO, aanrechtmodel en geïntegreerde 4-in-1 kokend water kraan met osmosefilter op prijs, doorstroom en filterkosten.',
  numberOfItems: 3,
  itemListElement: [
    {
      '@type': 'ListItem', position: 1,
      item: { '@type': 'Product', name: 'Onderbouw RO (Under-Sink)', description: 'Klassiek onderbouwsysteem voor puur drinkwater', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '150', highPrice: '500', offerCount: '1' } },
    },
    {
      '@type': 'ListItem', position: 2,
      item: { '@type': 'Product', name: 'Aanrechtmodel Osmosefilter (Countertop RO)', description: 'Vrijstaand aanrechtmodel, eenvoudig te installeren zonder boren', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '100', highPrice: '350', offerCount: '1' } },
    },
    {
      '@type': 'ListItem', position: 3,
      item: { '@type': 'Product', name: 'Geïntegreerde 4-in-1 Kokend Water Kraan met Osmose', description: 'Premium alles-in-één systeem: kokend, koud, warm en bruisend water met ingebouwde omgekeerde osmose', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '699', highPrice: '899', offerCount: '1' } },
    },
  ],
};

const systemen = [
  {
    naam: 'Onderbouw RO (Under-Sink)',
    subtitel: 'Klassiek onderbouwsysteem',
    prijs: '€ 150 – 500',
    doorstroom: '100–200 L/uur (met pomp)',
    afvalratio: '1:2 tot 1:5 (of 1:1 met pomp)',
    tankinhoud: '3–12 liter druktank',
    filterstappen: '4–7 stappen',
    filterkosten: '€ 50 – 120 / jaar',
    installatie: 'Onder aanrecht; T-stuk op koud water; afvoer op sifon',
    highlight: false,
    badge: '',
  },
  {
    naam: 'Aanrechtmodel (Countertop RO)',
    subtitel: 'Vrijstaand, zichtbaar op aanrecht',
    prijs: '€ 100 – 350',
    doorstroom: '50–100 L/uur',
    afvalratio: '1:2 tot 1:4',
    tankinhoud: '1–3 liter intern reservoir',
    filterstappen: '3–5 stappen',
    filterkosten: '€ 40 – 100 / jaar',
    installatie: 'Aansluiting via adapter op keukenkraan; geen boringen',
    highlight: false,
    badge: 'Makkelijkst te installeren',
  },
  {
    naam: 'Geïntegreerde 4-in-1 Kokend Water Kraan',
    subtitel: 'Premium alles-in-één systeem',
    prijs: '€ 699 – 899',
    doorstroom: '150–250 L/uur',
    afvalratio: 'Geoptimaliseerd 1:1 of beter',
    tankinhoud: '3–8 liter gefilterd + heet waterreservoir',
    filterstappen: '5–7 stappen (incl. remineralisatie)',
    filterkosten: '€ 80 – 150 / jaar (1 jaarlijkse wissel)',
    installatie: 'Onder aanrecht + boortje in aanrechtblad; ± 1–2 uur',
    highlight: true,
    badge: 'Premium & Aanbevolen',
  },
];

const vergelijkingSpec = [
  { spec: 'Doorstroomsnelheid', onderbouw: '100–200 L/u (m. pomp)', aanrecht: '50–100 L/u', geintegreerd: '150–250 L/u' },
  { spec: 'Afvalwaterratio', onderbouw: '1:2 tot 1:5', aanrecht: '1:2 tot 1:4', geintegreerd: '1:1 of beter' },
  { spec: 'Tankvolume', onderbouw: '3–12 L', aanrecht: '1–3 L', geintegreerd: '3–8 L' },
  { spec: 'Aantal filterstappen', onderbouw: '4–7', aanrecht: '3–5', geintegreerd: '5–7' },
  { spec: 'Aanschafprijs', onderbouw: '€ 150 – 500', aanrecht: '€ 100 – 350', geintegreerd: '€ 699 – 899' },
  { spec: 'Filterkosten / jaar', onderbouw: '€ 50 – 120', aanrecht: '€ 40 – 100', geintegreerd: '€ 80 – 150' },
  { spec: 'Kokend water', onderbouw: 'Nee', aanrecht: 'Nee', geintegreerd: 'Ja' },
  { spec: 'Bruisend water', onderbouw: 'Nee', aanrecht: 'Nee', geintegreerd: 'Ja (bij sommige modellen)' },
  { spec: 'Installatiegemak', onderbouw: 'Matig (loodgieter handig)', aanrecht: 'Eenvoudig', geintegreerd: 'Matig (boortje nodig)' },
  { spec: 'Geschikt voor huurwoning', onderbouw: 'Ja', aanrecht: 'Ja', geintegreerd: 'Ja (met toestemming)' },
];

const gebruikerssituaties = [
  {
    situatie: 'Huurder / appartement',
    beste: 'Aanrechtmodel of onderbouw RO',
    reden:
      'Geen permanente aanpassingen aan leidingwerk. Onderbouwsysteem via T-stuk op koudwaterkraan is volledig omkeerbaar. Aanrechtmodel is nog eenvoudiger: alleen een adapteraansluiting op de kraan.',
    link: null,
  },
  {
    situatie: 'Kleine keuken, weinig aanrechtruimte',
    beste: 'Onderbouw RO',
    reden:
      'Alle componenten onder het aanrecht — vrijstaand aanrechtmodel neemt kostbare werkruimte in beslag. Een onderbouwsysteem met apart kraantje houdt het aanrecht vrij. Een 4-in-1 kraan is ook compact zichtbaar maar vereist één boortje in het aanrechtblad.',
    link: null,
  },
  {
    situatie: 'Gezin met meerdere kinderen (hoog verbruik)',
    beste: 'Onderbouw RO of 4-in-1 kokend water kraan',
    reden:
      'Gezinnen met hoog waterverbruik (150+ liter gefilterd water per dag) hebben een systeem nodig met grote tank en hoge doorstroomsnelheid. Een onderbouwsysteem met 8–12 liter tank en boostpomp — of een 4-in-1 systeem — voldoet aan dit profiel.',
    link: null,
  },
  {
    situatie: 'Hard water gebied (>15 °dH)',
    beste: 'Geïntegreerde 4-in-1 kokend water kraan',
    reden:
      'In hard-watergebieden verwijdert het RO-membraan van een 4-in-1 systeem effectief kalk, terwijl de geïntegreerde remineralisatiefilter gezonde mineralen terugplaatst. Het geoptimaliseerde afvalwaterratio is in harde watergebieden een extra voordeel.',
    link: '/waterhardheid',
  },
  {
    situatie: 'Gezin dat kookwater wil besparen',
    beste: 'Geïntegreerde 4-in-1 kokend water kraan',
    reden:
      'Een 4-in-1 kraan levert direct 100°C kokend water — geen waterkoker meer nodig, geen wachttijd. In combinatie met osmose gefilterd water krijgt je het beste van beide werelden: kalkvrij én meteen heet.',
    link: '/4-in-1-kraan',
  },
];

export default function OsmoseVergelijkenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/vergelijken' },
        ]}
      />
      <SchemaOrg schema={[itemListSchema]} />

      <TrustBar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde Osmose Vergelijken 2026: Welk Systeem Past Bij Jou?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Wil je een <strong>omgekeerde osmose systeem vergelijken</strong>? Er zijn drie hoofdtypen:
            een klassiek onderbouw (under-sink) systeem, een vrijstaand aanrechtmodel en een geïntegreerde
            4-in-1 kokend water kraan met ingebouwde osmose filter. In deze gids vergelijken we ze op
            doorstroomsnelheid, afvalwaterratio, tankvolume, filterstappen, prijs en jaarlijkse filterkosten.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#vergelijkingstabel"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar vergelijkingstabel →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmose systeem kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Er zijn drie typen osmosesystemen: onderbouw RO (€150–500, meest complete), aanrechtmodel (€100–350, makkelijkst te installeren) en geïntegreerde 4-in-1 kokend water kraan (€699–899, alles-in-één). Voor een gezin van 4 in een hard-watergebied is een onderbouw RO of 4-in-1 systeem de beste keuze." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#drie-typen" className="hover:underline">Drie typen systemen</a></li>
            <li><a href="#vergelijkingstabel" className="hover:underline">Vergelijkingstabel specs</a></li>
            <li><a href="#voor-wie" className="hover:underline">Welk systeem voor wie?</a></li>
            <li><a href="#specs-uitleg" className="hover:underline">Specs uitgelegd</a></li>
            <li><a href="#vier-in-een" className="hover:underline">4-in-1 systeem: premium all-in-one</a></li>
            <li><a href="#filterkosten" className="hover:underline">Filterkosten vergelijken</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Drie typen */}
        <section id="drie-typen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat zijn de drie typen omgekeerde osmose systemen?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Omgekeerde osmose (reverse osmosis) werkt altijd op hetzelfde principe: water wordt onder
            druk door een semi-permeabel membraan geperst, waarbij 95–99% van alle opgeloste stoffen
            achterblijft. Wat verschilt tussen systemen is de opzet, het comfort en de extra functies.
          </p>
          <div className="space-y-5">
            {systemen.map(s => (
              <div
                key={s.naam}
                className={`rounded-2xl border p-5 ${s.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{s.naam}</h3>
                    <p className="text-sm text-gray-500">{s.subtitel}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A]">{s.prijs}</p>
                    {s.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${s.highlight ? 'bg-[#005F8A] text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-3">
                  {[
                    { label: 'Doorstroom', value: s.doorstroom },
                    { label: 'Afvalratio', value: s.afvalratio },
                    { label: 'Tank', value: s.tankinhoud },
                    { label: 'Filterstappen', value: s.filterstappen },
                    { label: 'Filterkosten/jr', value: s.filterkosten },
                  ].map(spec => (
                    <div key={spec.label} className="bg-white/70 rounded-lg p-2">
                      <p className="text-gray-400 text-xs mb-0.5">{spec.label}</p>
                      <p className="font-medium text-gray-800 text-xs">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 border-t border-gray-200 pt-2">
                  <span className="font-semibold text-gray-700">Installatie: </span>{s.installatie}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijkingstabel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijkingstabel: welke specs zijn het belangrijkst?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De onderstaande tabel zet alle drie systemen naast elkaar op de meest relevante
            specificaties voor de dagelijkse gebruiker.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Specificatie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Onderbouw RO</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Aanrechtmodel</th>
                  <th className="py-2.5 px-3 font-semibold text-center bg-[#005F8A]">4-in-1 Geïntegreerd</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingSpec.map((r, i) => (
                  <tr key={r.spec} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-700">{r.spec}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-600">{r.onderbouw}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-600">{r.aanrecht}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-medium text-[#003F5C] bg-[#E0F2FE]">
                      {r.geintegreerd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Specificaties zijn indicatief en variëren per model en fabrikant. Controleer altijd het technisch datasheet.
          </p>
        </section>

        {/* Voor wie */}
        <section id="voor-wie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welk systeem is het beste voor jouw situatie?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De beste keuze hangt af van je woonsituatie, gezinsgrootte, keukenruimte en budget. Hieronder
            een praktische leidraad voor de meest voorkomende situaties.
          </p>
          <div className="space-y-4">
            {gebruikerssituaties.map(g => (
              <div key={g.situatie} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{g.situatie}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full shrink-0">
                    {g.beste}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{g.reden}</p>
                {g.link && (
                  <Link href={g.link} className="text-xs text-[#005F8A] underline hover:no-underline mt-1 inline-block">
                    Meer informatie →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Specs uitgelegd */}
        <section id="specs-uitleg">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Specificaties uitgelegd: wat betekenen ze?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Niet iedereen weet wat de technische specificaties van een osmose systeem precies betekenen.
            Hieronder leggen we de vijf meest bepalende specs uit in begrijpelijke taal.
          </p>
          <div className="space-y-4">
            {[
              {
                titel: 'Doorstroomsnelheid (L/uur)',
                uitleg: `De doorstroomsnelheid geeft aan hoeveel liter gefilterd water het systeem per uur
                  kan produceren. Een systeem zonder boostpomp haalt typisch 50–100 L/uur. Een systeem
                  mét boostpomp bereikt 100–250 L/uur. Voor dagelijks gebruik (drinken, koken) van een
                  gezin van 4 is 100 L/uur ruim voldoende. Let op: de doorstroom wordt bepaald door
                  waterdruk, watertemperatuur en de conditie van het membraan. Bij lage waterdruk
                  (< 3 bar) is een boostpomp aan te raden.`,
              },
              {
                titel: 'Afvalwaterratio',
                uitleg: `Voor elke liter schoon osmosewater produceert het systeem een hoeveelheid
                  afvalwater (ook wel concentraat of reject water) dat naar het riool gaat. Een ratio
                  van 1:3 betekent: per liter schoon water gaat 3 liter naar de afvoer. Modernere
                  systemen met permeaatpomp of boostpomp halen 1:1 of zelfs 2:1. Een lage ratio is
                  milieuvriendelijker en verlaagt de waterrekening bij hoog verbruik. Dit is een
                  belangrijk vergelijkingspunt bij het osmose vergelijken.`,
              },
              {
                titel: 'Tankvolume (L)',
                uitleg: `De meeste onderbouwsystemen leveren gefilterd water via een druktank. Deze
                  tank slaat vooraf gefilterd water op zodat je direct water hebt zonder wachttijd.
                  Een grotere tank (8–12 L) is prettig voor gezinnen met hoog verbruik. Een tank
                  van 3–5 L is voldoende voor 1–2 personen. Systemen zonder tank (tankloze systemen)
                  produceren water op verzoek — direct, maar met een iets lagere stroomsnelheid.`,
              },
              {
                titel: 'Aantal filterstappen',
                uitleg: `Een osmose systeem bestaat uit meerdere filtertrappen die elk een specifieke
                  categorie verontreinigingen aanpakken: (1) sedimentfilter, (2) koolstof voorfilter,
                  (3) RO-membraan, (4) koolstof nafilter. Systemen met 5+ stappen voegen een
                  remineralisatiefilter toe die gezonde mineralen (calcium, magnesium) terugbrengt
                  in het gefilterde water. Dit verbetert de smaak en het mineraalgehalte. Kies voor
                  minimaal 4 stappen voor dagelijks drinkwater.`,
              },
              {
                titel: 'Filtervervanging kosten per jaar',
                uitleg: `De jaarlijkse filterkosten worden vaak vergeten bij de vergelijking, maar zijn
                  cruciaal voor de total cost of ownership. Goedkope systemen met dure of veel filters
                  kunnen duurder uitvallen dan kwalitatieve systemen met één jaarlijkse wissel. De
                  geïntegreerde 4-in-1 kraan met osmose is ontworpen voor één jaarlijkse filtervervanging — eenvoudig
                  en voorspelbaar in kosten. Vraag bij aanschaf altijd naar de specifieke
                  filterreplacement kosten en hoe frequent de filters vervangen moeten worden.`,
              },
            ].map((s, i) => (
              <div key={s.titel} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-in-1 uitgelicht */}
        <section id="vier-in-een">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Is de geïntegreerde 4-in-1 kokend water kraan de premium all-in-one keuze?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De <strong>geïntegreerde 4-in-1 kokend water kraan met osmose filtratie</strong> is de
            meest complete wateroplossing voor de keuken. Het systeem combineert vier functies in één
            elegante kraan: kokend water (100°C), gefilterd koud water via omgekeerde osmose,
            warm water en bij sommige modellen ook bruisend water. Alles gefilterd. Alles uit één kraan.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-5">
            <p className="font-semibold text-[#003F5C] mb-3">Waarom een 4-in-1 systeem?</p>
            <div className="space-y-2">
              {[
                'Geen aparte waterkoker meer nodig — direct 100°C kokend water',
                'Omgekeerde osmose filtratie voor alle drinkwater en kookwater',
                'Één jaarlijkse filtervervanging in plaats van meerdere losse filters',
                'Geoptimaliseerde afvalwaterratio — milieuvriendelijker dan basismodellen',
                'Eén installatie vervangt waterkoker, Brita-kan en aparte osmosekraan',
                'Strak design — één kraan in plaats van meerdere apparaten op het aanrecht',
              ].map(v => (
                <div key={v} className="flex gap-2 items-start text-sm text-gray-700">
                  <span className="text-green-600 font-bold shrink-0">✓</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">Voordelen ten opzichte van losse systemen</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex gap-2"><span className="text-green-600">✓</span>Minder rommel onder het aanrecht</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>Lagere totale filterkosten (één systeem)</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>Hogere doorstroomsnelheid door geïntegreerde pomp</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>Kokend water bespaart energie (geen stand-by waterkoker)</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">Aandachtspunten</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex gap-2"><span className="text-amber-500">!</span>Hogere aanschafprijs (€699–899)</li>
                <li className="flex gap-2"><span className="text-amber-500">!</span>Boortje nodig in aanrechtblad voor de kraan</li>
                <li className="flex gap-2"><span className="text-amber-500">!</span>Reservoirtank en filters onder aanrecht</li>
                <li className="flex gap-2"><span className="text-amber-500">!</span>Optioneel: huurder vraagt toestemming voor boortje</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor uitgebreide informatie over de 4-in-1 kokend water kraan met ingebouwde osmose filter,
            lees onze dedicated pagina{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">
              4-in-1 kraan
            </Link>{' '}
            of bekijk de mogelijkheden op onze{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              osmose filter kopen pagina
            </Link>
            .
          </p>
        </section>

        {/* Filterkosten vergelijken */}
        <section id="filterkosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filterkosten vergelijken: wat kost een osmose systeem per jaar?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Filterkosten zijn een terugkerende post die sterk verschilt per systeem. Hieronder een
            gedetailleerd overzicht van de te verwachten jaarlijkse kosten per systeemtype, inclusief
            welke filters vervangen moeten worden en hoe vaak.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Filtertype</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Vervanging</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Onderbouw RO</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Aanrecht</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">4-in-1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { filter: 'Sedimentfilter', freq: 'Elk jaar', onderbouw: '€ 10–20', aanrecht: '€ 10–15', vierin1: 'Inbegrepen' },
                  { filter: 'Koolstof voorfilter', freq: 'Elk jaar', onderbouw: '€ 15–30', aanrecht: '€ 10–20', vierin1: 'Inbegrepen' },
                  { filter: 'RO-membraan', freq: 'Elke 2–3 jaar', onderbouw: '€ 40–80', aanrecht: '€ 30–60', vierin1: 'Inbegrepen' },
                  { filter: 'Nafilter / remineralisatie', freq: 'Elk jaar', onderbouw: '€ 15–25', aanrecht: '€ 10–20', vierin1: 'Inbegrepen' },
                  { filter: 'Complete jaarset (alle filters)', freq: 'Jaarlijks totaal', onderbouw: '€ 50–120', aanrecht: '€ 40–100', vierin1: '€ 80–150' },
                ].map((r, i) => (
                  <tr key={r.filter} className={r.filter === 'Complete jaarset (alle filters)' ? 'bg-[#E0F2FE] font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3">{r.filter}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-500">{r.freq}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.onderbouw}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.aanrecht}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.vierin1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op:</strong> Het RO-membraan is de duurste
            filtercomponent maar gaat 2–3 jaar mee bij goed gebruik. Vervang het membraan op tijd:
            een verouderd membraan laat meer verontreinigingen door en kan het systeem schaden.
            Meet periodiek de TDS-waarde van het gefilterde water met een TDS-meter (€5–15) om de
            membraankwaliteit te monitoren.
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Voor meer achtergrondinformatie over osmose waterfilters vergelijken, lees ons artikel op{' '}
            <Link href="/kennisbank/waterfilter-vergelijken" className="text-[#005F8A] underline hover:no-underline">
              waterfilter vergelijken in de kennisbank
            </Link>
            .
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* CTA naar kopen */}
        <section className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8 text-center">
          <p className="text-blue-200 text-sm mb-1">Klaar met vergelijken?</p>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Bekijk de 4-in-1 kraan met osmose — gefilterd, kokend én koud
          </h2>
          <p className="text-blue-100 mb-5 max-w-lg mx-auto text-sm leading-relaxed">
            Een 4-in-1 kraan met osmose combineert alles wat je nodig hebt: omgekeerde osmose filtratie,
            kokend water, koud gefilterd water en warm water — uit één elegante kraan. Één jaarlijkse
            filterwissel.
          </p>
          <Link
            href="/omgekeerde-osmose/kopen"
            className="inline-block bg-white text-[#005F8A] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm md:text-base"
          >
            Bekijk osmose systemen →
          </Link>
          <p className="text-xs text-blue-200 mt-3">Direct leverbaar · 2 jaar garantie</p>
        </section>

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen — welk systeem?' },
              { href: '/4-in-1-kraan', label: '4-in-1 kokend water kraan met osmose filter' },
              { href: '/kennisbank/waterfilter-vergelijken', label: 'Kennisbank: waterfilter vergelijken' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over omgekeerde osmose vergelijken
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
