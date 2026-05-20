import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Koolstoffilter prijs: aanschaf, maandkosten en TCO (2026)',
  description:
    'Koolstoffilter kosten per type: pitcher EUR 1-3/mnd, onderbouw EUR 5-15/mnd, whole-house EUR 10-25/mnd. Aanschaf vs verbruikskosten, merken en TCO-berekening.',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter/prijs' },
};

const faqItems = [
  {
    q: 'Wat kost een koolstoffilter per maand?',
    a: 'De maandkosten van een koolstoffilter hangen af van het type: een GAC filterkan (Brita, PearlCo) kost EUR 1-3 per maand aan filterpatronen. Een onderbouw koolstofblokfilter kost EUR 5-15 per maand (aanschaf verdeeld over levensduur plus patronen). Een whole-house GAC-filter kost EUR 10-25 per maand. Een inline koelkastfilter kost EUR 3-8 per maand. Dit zijn verbruikskosten; de aanschafkosten van het systeem zelf worden hier bovenop berekend.',
  },
  {
    q: 'Wat kost een koolstoffilter in aanschaf?',
    a: 'Aanschafkosten per type: GAC filterkan (Brita, PearlCo) EUR 25-60. Kraanfilter met koolstofblok EUR 40-120. Onderbouw koolstofbloksysteem (enkelvoudig) EUR 80-200. Onderbouw dubbel- of drievoudig systeem EUR 150-350. Whole-house GAC-filter EUR 300-800 inclusief installatie. Inline koelkastfilter EUR 20-60. De aanschafprijs dient te worden afgewogen tegen de looptijd en de verbruikskosten per jaar.',
  },
  {
    q: 'Wat is het verschil in prijs tussen Brita, BWT en Doulton?',
    a: 'Brita (GAC filterkan) positioneert zich in het instapsegment: filterkan EUR 30-50, patronen EUR 4-6 per stuk, levensduur 150 liter (circa 4-6 weken). BWT levert vergelijkbare producten met magnesiuminjectie, iets hogere patronprijs EUR 6-9. Doulton (keramisch+koolstof) zit in het premium segment: filters EUR 40-80 per stuk, maar levensduur 6-12 maanden (1000-6000 liter). Op TCO-basis is Doulton bij hoog waterverbruik goedkoper dan Brita of BWT.',
  },
  {
    q: 'Hoe bereken ik de totale eigendomskosten (TCO) van een koolstoffilter?',
    a: 'TCO = aanschafkosten + (patronkostenperjaar x aantal jaren) + installatie + eventueel onderhoud. Voorbeeld voor een onderbouw blokfilter: aanschaf EUR 150, patronen EUR 60 per jaar, levensduur 5 jaar = TCO EUR 450. Ter vergelijking: een Brita filterkan aanschaf EUR 35, patronen EUR 48 per jaar, levensduur 5 jaar = TCO EUR 275. Het onderbouwsysteem is duurder maar geeft betere filtratie, hogere capaciteit en minder plastiek afval.',
  },
  {
    q: 'Is een goedkoop koolstoffilter even goed als een duur filter?',
    a: 'Niet altijd. Een goedkoop filterpatroon zonder NSF-certificering heeft mogelijk een kortere werkelijke levensduur of een lager verwijderingspercentage dan opgegeven. Goedkope ongecertificeerde patronen kunnen ook uitlooggedrag vertonen (materialen die in het water terechtkomen). Kies bij voorkeur voor filters met NSF/ANSI 42 of NSF/ANSI 53 certificering. Een duurder gecertificeerd patroon met langere levensduur is op TCO-basis vaak goedkoper dan een goedkoper, frequenter te vervangen patroon.',
  },
  {
    q: 'Hoeveel kost een whole-house koolstoffilter per jaar?',
    a: 'Een whole-house GAC-filter (voor het hele huis, op de hoofdwaterleiding) heeft aanschafkosten van EUR 300-800 inclusief installatie door een erkend installateur. Jaarlijkse onderhoudskosten: filtermedia-vervanging EUR 80-200 per jaar afhankelijk van waterverbruik (gemiddeld gezin: EUR 100-150). Totale jaarkosten inclusief afschrijving aanschaf over 10 jaar: EUR 130-230 per jaar. Voordeel: alle kranen in huis leveren gefilterd water.',
  },
  {
    q: 'Zijn merkpatronen (Brita, BWT) verplicht of kan ik ook universele patronen gebruiken?',
    a: 'Technisch gezien kunnen universele filterpatronen (goedkopere huismerkpatronen) compatibel zijn met veel filtersystemen. Het risico: universele patronen hebben zelden NSF-certificering, en de fitnauwkeurigheid kan variëren waardoor bypassvorming optreedt (water stroomt langs het filtermedium). Bovendien vervalt de fabrieksgarantie op het systeem bij gebruik van niet-goedgekeurde patronen. Voor kostenbesparingen zonder concessies op kwaliteit: kies NSF-gecertificeerde merkpatronen en bestel in bulk.',
  },
  {
    q: 'Hoe hoog zijn de kosten van een inline koelkastfilter?',
    a: 'Een inline koelkastfilter (ingebouwd in een American-stijl koelkast of ijsblokjesmachine) kost EUR 20-60 per vervanging en moet elke 6 maanden of 200-300 liter worden vervangen. Jaarkosten: EUR 40-120 per jaar. Merkfilters (Samsung, LG, Bosch) zijn duurder (EUR 30-60 per stuk) maar altijd NSF-gecertificeerd. Compatibele merkloze alternatieven zijn beschikbaar vanaf EUR 10-20 maar variëren sterk in kwaliteit.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Koolstoffilter prijs: aanschaf, maandkosten en TCO (2026)',
  description:
    'Koolstoffilter kosten per type, merkvergelijking en TCO-berekening. Pitcher EUR 1-3/mnd, onderbouw EUR 5-15/mnd, whole-house EUR 10-25/mnd.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-20',
  url: 'https://waterfilterplatform.nl/koolstoffilter/prijs',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KoolstoffilterPrijsPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Koolstoffilter', item: 'https://waterfilterplatform.nl/koolstoffilter' },
              { '@type': 'ListItem', position: 3, name: 'Prijs', item: 'https://waterfilterplatform.nl/koolstoffilter/prijs' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/koolstoffilter" className="hover:text-[#005F8A]">Koolstoffilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Koolstoffilter prijs: aanschafkosten, maandkosten en TCO per filtertype
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Wat kost een koolstoffilter werkelijk? Van een EUR 1&ndash;3 per maand kosteloze filterkan
            tot een whole-house systeem van EUR 10&ndash;25 per maand: de prijsrange is groot. Op deze
            pagina vindt u een volledig overzicht van aanschafkosten, verbruikskosten, merkvergelijking
            (BWT, Brita, Doulton, Pentek) en een TCO-berekening zodat u een weloverwogen keuze kunt
            maken.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        <QuickAnswer answer="Koolstoffilter maandkosten per type: filterkan (GAC) EUR 1-3, onderbouw blokfilter EUR 5-15, whole-house GAC EUR 10-25, inline koelkastfilter EUR 3-8. Aanschafkosten: filterkan EUR 25-60, onderbouwsysteem EUR 80-350, whole-house EUR 300-800. Op TCO-basis is een Doulton onderbouwfilter bij hoog verbruik goedkoper dan een Brita filterkan." />

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Prijsoverzicht per filtertype (2026)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De kosten van een koolstoffilter bestaan uit twee componenten: de eenmalige aanschafprijs
            van het filtersysteem en de terugkerende verbruikskosten voor filterpatronen. Het overzicht
            hieronder geeft actuele prijzen voor de meest gebruikte types.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Filtertype</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Maandkosten</th>
                  <th className="py-2.5 px-3 font-semibold text-right hidden sm:table-cell">TCO 3 jaar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'GAC filterkan (Brita, BWT, PearlCo)', aanschaf: 'EUR 25-60', maand: 'EUR 1-3', tco: 'EUR 61-168' },
                  { type: 'Kraanfilter (koolstofblok)', aanschaf: 'EUR 40-120', maand: 'EUR 3-6', tco: 'EUR 148-336' },
                  { type: 'Onderbouw blokfilter (enkelvoudig)', aanschaf: 'EUR 80-200', maand: 'EUR 5-12', tco: 'EUR 260-632' },
                  { type: 'Onderbouw drievoudig systeem', aanschaf: 'EUR 150-350', maand: 'EUR 8-18', tco: 'EUR 438-998' },
                  { type: 'Inline koelkastfilter', aanschaf: 'EUR 20-60', maand: 'EUR 3-8', tco: 'EUR 128-348' },
                  { type: 'Whole-house GAC-filter', aanschaf: 'EUR 300-800', maand: 'EUR 8-20', tco: 'EUR 588-1520' },
                ].map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-[#005F8A] font-semibold">{r.maand}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600 hidden sm:table-cell">{r.tco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Prijzen zijn richtprijzen voor de Nederlandse markt, mei 2026. TCO 3 jaar = aanschaf + maandkosten x 36 (midpoint).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Voor een uitgebreid koopadvies bekijkt u de pagina{' '}
            <Link href="/koolstoffilter/kopen" className="text-[#005F8A] underline hover:no-underline">
              koolstoffilter kopen
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Merkvergelijking: BWT, Brita, Doulton en Pentek</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Nederlandse markt wordt gedomineerd door een handvol merken met elk een eigen
            prijsstrategie en technologisch profiel.
          </p>
          <div className="space-y-4 mb-6">
            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Brita</h3>
                <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full shrink-0 ml-2">Instap</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Marktleider in filterkannen. Patronen EUR 4&ndash;6 per stuk, levensduur 150 liter (circa 4 weken
                bij gemiddeld gebruik). GAC-technologie met ion-exchanger voor kalkvermindering. NSF/ANSI 42
                gecertificeerd. Brita On Tap (kraanfilter) EUR 40&ndash;60 aanschaf, patronen EUR 15&ndash;20/3
                maanden.
              </p>
              <p className="text-sm text-gray-500">Beste keuze voor: budgetgevoelige gebruikers, incidenteel gebruik</p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">BWT (Best Water Technology)</h3>
                <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full shrink-0 ml-2">Middensegment</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Oostenrijks merk met premium GAC-patronen inclusief magnesiuminjectie (voegt magnesium toe
                voor betere smaak). Patronen EUR 6&ndash;9 per stuk, levensduur 120&ndash;150 liter. BWT
                Penguin karaf EUR 40&ndash;60 aanschaf. Bredere productlijn met onderbouwsystemen en
                kantoorfilters.
              </p>
              <p className="text-sm text-gray-500">Beste keuze voor: wie waarde hecht aan mineraalbalans, koffiefanaten</p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[#003F5C]">Doulton</h3>
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full shrink-0 ml-2">Premium</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Brits merk (opgericht 1826) met keramische koolstofblokfilters voor onderbouw en tafelblad.
                Filterpatronen EUR 40&ndash;80 per stuk, maar levensduur 6&ndash;12 maanden (1000&ndash;6000
                liter). NSF/ANSI 42 en 53 gecertificeerd. Op TCO-basis bij hoog waterverbruik (2+ liter/dag)
                goedkoper dan Brita. Verwijdert ook bacterien via keramische buitenlaag.
              </p>
              <p className="text-sm text-[#005F8A] font-medium">Beste keuze voor: hoog dagelijks verbruik, gezinnen, beste TCO bij 2+ L/dag</p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Pentek / Pentair</h3>
                <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full shrink-0 ml-2">Professioneel</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Amerikaans merk dat veel wordt gebruikt in professionele onderbouwsystemen en als
                voorfilter voor RO-systemen. Carbon Block CB-series: EUR 15&ndash;30 per patroon,
                levensduur 2000&ndash;10.000 liter. Hoog gecertificeerd (NSF/ANSI 42, 53, 401).
                Beschikbaar in standaard 10-inch en 20-inch formaten.
              </p>
              <p className="text-sm text-gray-500">Beste keuze voor: hoog verbruik, combinatie met RO, professionele toepassingen</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">TCO-berekening: welk filter is voordeliger?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De totale eigendomskosten over 3 jaar verschillen sterk per combinatie van verbruik en
            filtertype. Onderstaand voorbeeld vergelijkt drie populaire opties bij een gezin van
            4 personen dat 3 liter gefilterd water per dag gebruikt (circa 1095 liter per jaar).
          </p>
          <div className="space-y-3 mb-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900">Brita Marella filterkan</h3>
                <span className="text-lg font-bold text-gray-800">EUR 264 / 3 jaar</span>
              </div>
              <p className="text-sm text-gray-600">Aanschaf EUR 35 + patronen (7 per jaar x EUR 5 x 3 jaar) = EUR 35 + EUR 105 = EUR 140 + koelkast 2e kan EUR 35 = circa EUR 264. Bij 1095 L/jaar: ~7 patronen a 150L = EUR 35/jaar aan patronen.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900">Doulton Ultracarb onderbouw</h3>
                <span className="text-lg font-bold text-[#005F8A]">EUR 330 / 3 jaar</span>
              </div>
              <p className="text-sm text-gray-600">Aanschaf systeem EUR 150 + patroon EUR 60/jaar (1 patroon per jaar a 6000L) x 3 = EUR 150 + EUR 180 = EUR 330. Hogere aanschaf maar lagere verbruikskosten en betere filtratie.</p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-4 bg-[#E0F2FE]/20">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-[#003F5C]">Pentek onderbouw blokfilter</h3>
                <span className="text-lg font-bold text-green-700">EUR 270 / 3 jaar</span>
              </div>
              <p className="text-sm text-gray-600">Aanschaf systeem EUR 120 + patronen EUR 25 per 2000L (2 patronen/jaar) x 3 jaar = EUR 120 + EUR 150 = EUR 270. Beste TCO bij dit verbruik. NSF/ANSI 42 en 53 gecertificeerd.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            De TCO-berekening toont dat een onderbouwsysteem bij gezinsverbruik (3+ L/dag) goedkoper
            uitkomt dan een filterkan. Lees ook de overkoepelende pagina over{' '}
            <Link href="/koolstoffilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              soorten koolstoffilters
            </Link>{' '}
            voor een compleet overzicht van de filtermogelijkheden.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Heeft u een beperkt budget? Dan helpt onze{' '}
            <Link href="/keuzehulp/budget" className="text-[#005F8A] underline hover:no-underline">
              keuzehulp op basis van budget
            </Link>{' '}
            u de beste optie te vinden. Bekijk ook de prijzen van filterkannen specifiek op de pagina{' '}
            <Link href="/filterkan/kopen" className="text-[#005F8A] underline hover:no-underline">
              filterkan kopen
            </Link>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/koolstoffilter/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Koolstoffilter kopen</h3>
              <p className="text-sm text-gray-600">Complete koopgids met aanbevolen modellen per budget en gebruikssituatie.</p>
            </Link>
            <Link href="/koolstoffilter/soorten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Soorten koolstoffilters</h3>
              <p className="text-sm text-gray-600">GAC, blokfilter, inline, whole-house: vergelijkingstabel met prestaties en kosten.</p>
            </Link>
            <Link href="/filterkan/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Filterkan kopen</h3>
              <p className="text-sm text-gray-600">Beste filterkannen van 2026: Brita, BWT, PearlCo vergeleken op prijs en prestaties.</p>
            </Link>
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter op budget</h3>
              <p className="text-sm text-gray-600">Keuzehulp: welk waterfilter past bij uw budget van EUR 30, EUR 100 of EUR 300+?</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de prijs van koolstoffilters
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
