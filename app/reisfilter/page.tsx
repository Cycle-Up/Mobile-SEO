import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Reisfilter: beste draagbare waterfilters voor op reis in 2026',
  description: 'Een reisfilter maakt verontreinigd water drinkbaar op reis. Vergelijking van Lifestraw, Sawyer Squeeze, Grayl Geopress en andere draagbare waterfilters voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/reisfilter' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke reisfilter is het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De beste reisfilter hangt af van uw bestemming en reiswijze. Voor stedentrips naar gebieden met virusrisico (Azië, Afrika, Latijns-Amerika) is de Grayl Geopress de beste keuze: snel, filtert ook virussen en is eenvoudig in gebruik. Voor backpacken en wandelen in gebieden zonder virusrisico (bergen, nationale parken) is de Sawyer Squeeze de beste keuze: licht, onbeperkte capaciteit en levenslange garantie. Voor ultralight backpacken is de Lifestraw Personal het goedkoopste en lichtste instapmodel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een Lifestraw ook virussen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. De Lifestraw gebruikt een holle vezelfilter met een poriemaat van 0,2 micrometer. Dit is groot genoeg om bacterien (min. 0,2-5 micrometer) en protozoa (Giardia, Cryptosporidium, min. 1 micrometer) te blokkeren, maar te groot voor virussen (20-300 nanometer). In gebieden met virusrisico (hepatitis A, norovirus, rotavirus) is een Lifestraw niet voldoende. Gebruik dan de Grayl Geopress of een UV-pen (SteriPen) als aanvulling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe gebruik ik een reisfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gebruik varieert per type. Lifestraw Personal: doop het rietje in het water en zuig rechtstreeks. Sawyer Squeeze: vul de bijgeleverde fles of pouch met water en knijp het door het filter in een schone fles. Grayl Geopress: vul de buitenste cilinder met water, druk de binnenste cilinder er dan doorheen (zoals een cafetiere). SteriPen: vul een fles met water, steek de pen erin en activeer hem gedurende 60-90 seconden tot het lampje stopt. Schud de fles daarbij lichtjes. Drink na de behandeltijd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een reisfilter mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Levensduur varieert per type: Lifestraw Personal filtert 4.000 liter voor de holle vezels zijn uitgeput. Sawyer Squeeze heeft een onbeperkte filterlevensduur mits goed onderhouden (terugblazen). Grayl Geopress: het filterpatroon gaat 150 liter mee, daarna vervangen (kosten €25-35). MSR Guardian: holle vezels gaan 10.000 liter mee. SteriPen Ultra: UV-lamp voor 8.000 behandelingen. Het is belangrijk filters nooit te laten bevriezen (scheurt holle vezels) en altijd droog op te bergen na gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk reisfilter is het beste voor backpacken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor backpacken is de Sawyer Squeeze de populairste keuze onder ervaren wandelaars (PCT, Appalachian Trail). Redenen: 85 gram gewicht, onbeperkte filterlevensduur, past op standaard waterflessen, en kan als inline filter worden gebruikt in een hydration bladder. De Sawyer Mini is nog lichter (50 gram) maar heeft een lagere doorstroomsnelheid. Als gewicht absoluut prioriteit heeft, is de Lifestraw Personal met 29 gram het lichtste alternatief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een UV-pen beter dan een holle vezelfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ze vullen elkaar aan. Een UV-pen (SteriPen) doodt bacterien, virussen en protozoa maar verwijdert geen fysische verontreinigingen zoals vuil, sediment of chemische stoffen. Het water moet helder zijn voor de UV-pen goed werkt (troebel water absorbeert UV-licht). Een holle vezelfilter (Lifestraw, Sawyer) verwijdert fysische deeltjes inclusief bacterien en protozoa, maar geen virussen. Voor maximale veiligheid combineert u beide: eerst filteren (holle vezel), dan desinfecteren (UV). Of kies de Grayl Geopress die alle drie aanpakt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een reisfilter gebruiken voor rivierwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, reisfilters zijn ontworpen voor gebruik in rivieren, meren en beekjes. Wees bewust van de beperkingen: holle vezelfilters (Lifestraw, Sawyer) verwijderen bacterien en protozoa maar geen virussen of chemische vervuiling. Bij sterk troebel water (modderig rivierwater) loopt het filter snel dicht; laat het water eerst bezinken of gebruik een bandana als voorfilter. In gebieden met industriele vervuiling of agrarische chemicalien is geen enkele reisfilter volledig veilig; gebruik dan gekookt of gebotteld water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk reisfilter is het lichtste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Lifestraw Personal is het lichtste draagbare reisfilter met slechts 29 gram. De Sawyer Mini weegt 50 gram en de Sawyer Micro 52 gram. De SteriPen Ultra weegt 65 gram maar heeft een oplaadbare batterij nodig. De Grayl Geopress is het zwaarste geteste model met 350 gram maar filtert ook virussen. Voor ultralight-backpackers is de Lifestraw Personal of Sawyer Mini de beste keuze als gewicht de hoogste prioriteit heeft.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Reisfilter: beste draagbare waterfilters voor op reis in 2026',
  description: 'Een reisfilter maakt verontreinigd water drinkbaar op reis. Vergelijking van Lifestraw, Sawyer Squeeze, Grayl Geopress en andere draagbare waterfilters.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/reisfilter',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ReisfilterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Reisfilter', item: 'https://waterfilterplatform.nl/reisfilter' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>Reisfilter</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Reisfilter: beste draagbare waterfilters voor op reis in 2026
        </h1>

        <QuickAnswer answer="Een reisfilter maakt rivierwater, kraanwater en putwater drinkbaar op reis. Holle vezelfilters (Lifestraw, Sawyer) verwijderen bacterien en protozoa maar geen virussen. De Grayl Geopress en MSR Guardian filteren ook virussen. Voor backpacken is Sawyer Squeeze het beste allround keuze; voor stedentrips met virusrisico is Grayl Geopress aan te raden." />

        <CTABanner context="osmose" />

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Wanneer heeft u een reisfilter nodig?
          </h2>
          <p className="text-gray-700 mb-4">
            In veel landen buiten West-Europa, Noord-Amerika en Australie is kraanwater niet veilig om te drinken zonder behandeling. Besmetting met bacterien (E. coli, Salmonella, Vibrio cholerae), protozoa (Giardia, Cryptosporidium) en virussen (hepatitis A, norovirus, rotavirus) zorgt jaarlijks voor miljoenen gevallen van reizigersdiarree en ernstigere ziektes.
          </p>
          <p className="text-gray-700 mb-4">
            Een reisfilter is essentieel in: grote delen van Azie (India, Zuidoost-Azie, China), Afrika (sub-Sahara, Noord-Afrika), Latijns-Amerika (Midden-Amerika, delen van Zuid-Amerika), het Midden-Oosten en afgelegen gebieden zonder drinkwaterinfrastructuur. Ook voor camping, hiking en expedities in westerse landen is een reisfilter nuttig voor water uit onbekende bronnen.
          </p>
          <p className="text-gray-700">
            Zelfs als u geen verre reis maakt, is een reisfilter waardevol als calamiteitenvoorraadje thuis. Bij waterverontreiniging, buisleidingproblemen of natuurrampen kunt u met een reisfilter water uit kraan, emmer of tuinslang drinkbaar maken.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vijf filtermethoden vergeleken
        </h2>

        <div className="space-y-5 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Holle vezelmembraan (hollow fiber)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Poriemaat 0,1-0,2 micrometer. Verwijdert bacterien (&gt;99,9999%) en protozoa (&gt;99,999%) maar geen virussen. Voorbeelden: Lifestraw, Sawyer Squeeze, Sawyer Mini. Lichtst en goedkoopst voor gebruik in gebieden zonder virusrisico (bergwandelen, wilde kampeerplaatsen in West-Europa en Noord-Amerika).
            </p>
            <div className="flex flex-wrap gap-3 text-xs mt-2">
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Bacterien: ja</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Protozoa: ja</span>
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Virussen: nee</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Keramisch filter</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Poriemaat 0,2 micrometer, vergelijkbare prestaties als holle vezel maar duurzamer bij correct gebruik. Zwaarder en kwetsbaarder (valt kapot). Populair in stationaire thuisfilters en kampeermolens. Minder geschikt voor ultralight backpacken.
            </p>
            <div className="flex flex-wrap gap-3 text-xs mt-2">
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Bacterien: ja</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Protozoa: ja</span>
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Virussen: nee</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Actief kool</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Verbetert smaak en geur, verwijdert chloor en sommige chemische stoffen. Verwijdert geen bacterien, protozoa of virussen. Brita reisfilterflessen gebruiken actief kool. Nuttig als aanvulling op een desinfectiemethode, maar onvoldoende als enige bescherming tegen microbiologische risicos.
            </p>
            <div className="flex flex-wrap gap-3 text-xs mt-2">
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Bacterien: nee</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Smaak/geur: ja</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">UV-pen (SteriPen)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              UV-C licht doodt bacterien, virussen en protozoa door hun DNA te beschadigen. Geen fysische filtratie: vuil, sediment en chemicalien blijven in het water. Het water moet helder zijn voor effectieve werking. Snel (60-90 seconden per 1 liter), compact en licht. Vereist lading (batterijen of USB).
            </p>
            <div className="flex flex-wrap gap-3 text-xs mt-2">
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Bacterien: ja</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Virussen: ja</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Protozoa: ja</span>
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Sediment: nee</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">5</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Combinatie RO + UV (MSR Guardian)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest compleet</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              De MSR Guardian combineert holle vezelmembraan met UV-desinfectie in een compacte pompfilter. Verwijdert bacterien, protozoa en virussen in een stap. Duurste optie (&euro;300-380) en zwaarst (490g). Aanbevolen voor expedities in hoog-risicogebieden of voor professionele gebruik.
            </p>
            <div className="flex flex-wrap gap-3 text-xs mt-2">
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Bacterien: ja</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Virussen: ja</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Protozoa: ja</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Productvergelijkingstabel
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Product</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Gewicht</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Capaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Virussen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Lifestraw Personal</td>
                <td className="border border-gray-300 px-3 py-2">Hollow fiber</td>
                <td className="border border-gray-300 px-3 py-2">29g</td>
                <td className="border border-gray-300 px-3 py-2">4.000L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25-35</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sawyer Squeeze</td>
                <td className="border border-gray-300 px-3 py-2">Hollow fiber</td>
                <td className="border border-gray-300 px-3 py-2">85g</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
                <td className="border border-gray-300 px-3 py-2">&euro;35-50</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Grayl Geopress</td>
                <td className="border border-gray-300 px-3 py-2">Pressfilter + kool</td>
                <td className="border border-gray-300 px-3 py-2">350g</td>
                <td className="border border-gray-300 px-3 py-2">150L (kool)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80-100</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">MSR Guardian</td>
                <td className="border border-gray-300 px-3 py-2">Hollow fiber + UV</td>
                <td className="border border-gray-300 px-3 py-2">490g</td>
                <td className="border border-gray-300 px-3 py-2">10.000L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-380</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">SteriPen Ultra</td>
                <td className="border border-gray-300 px-3 py-2">UV</td>
                <td className="border border-gray-300 px-3 py-2">65g</td>
                <td className="border border-gray-300 px-3 py-2">8.000 behandelingen</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80-100</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voor welke reiziger is welk filter het beste?
        </h2>
        <div className="grid gap-4 mb-8">
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Ultralight backpacker</h3>
            <p className="text-gray-700 text-sm">Lifestraw Personal (29g) of Sawyer Mini (50g). Geen virusrisico in West-Europa of Noord-Amerika berggebieden. Prijsvriendelijk en simpel.</p>
          </div>
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Stedentripper naar risicoland</h3>
            <p className="text-gray-700 text-sm">Grayl Geopress (350g). Filtert ook virussen, geen wachttijd of extra stap. Vul bij kraanwater van hotel of restaurant en drink direct. Inclusief koolstoffilter voor smaak.</p>
          </div>
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Expeditie en wild</h3>
            <p className="text-gray-700 text-sm">MSR Guardian (490g). Meest complete bescherming, hoge capaciteit (10.000L), geschikt voor groepsgebruik en ruw gebruik in extreme omstandigheden.</p>
          </div>
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Budgetreiziger</h3>
            <p className="text-gray-700 text-sm">Lifestraw Personal (€25-35). Goedkoopste entry-level filter, filtert bacterien en protozoa, ultralicht. Ideaal als eerste reisfilter of voor gebieden zonder virusrisico.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud van uw reisfilter
        </h2>
        <p className="text-gray-700 mb-4">
          Goed onderhoud verlengt de levensduur van uw reisfilter aanzienlijk. De belangrijkste maatregel voor holle vezelfilters (Lifestraw, Sawyer) is backflushing: na gebruik schoon water terugblazen door het filter om verzamelend vuil en bacterien te spoelen. Hiervoor wordt bij de Sawyer een kleine injectiespuit meegeleverd; bij de Lifestraw blaast u lucht terug via het zuiguiteinde.
        </p>
        <p className="text-gray-700 mb-6">
          Cruciaal: laat een holle vezelfilter nooit bevriezen. Bij temperaturen onder 0&deg;C scheuren de vezels en is het filter onherstelbaar beschadigd. Bewaar uw reisfilter altijd droog en buiten bereik van vriestemperaturen. Controleer bij elke reis of het filter nog intact is door er doorheen te blazen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Meer lezen over reisfilters
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><Link href="/reisfilter/lifestraw" className="text-[#005F8A] underline">Lifestraw review</Link>: modellen, filterprestaties en wanneer Lifestraw de juiste keuze is</li>
          <li><Link href="/reisfilter/sawyer" className="text-[#005F8A] underline">Sawyer Squeeze review</Link>: onbeperkte capaciteit, backflushing en vergelijking met Lifestraw</li>
          <li><Link href="/waterfilter" className="text-[#005F8A] underline">Alle waterfilters</Link>: overzicht van filters voor thuis, kantoor en op reis</li>
        </ul>

        <CTABanner context="osmose" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/ultrafiltratie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Ultrafiltratie uitgelegd</p>
              <p className="text-sm text-gray-600">Hoe holle vezelmembranen bacterien en protozoa uit water filteren op reis.</p>
            </Link>
            <Link href="/waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter vergelijken</p>
              <p className="text-sm text-gray-600">Overzicht van alle filtertypen: van reisfilter tot osmosefilter voor thuis.</p>
            </Link>
            <Link href="/putwater/bacterien-testen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Bacterien testen in water</p>
              <p className="text-sm text-gray-600">Hoe u water op bacteriologische veiligheid test voor en na filtratie.</p>
            </Link>
            <Link href="/keuzehulp" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Keuzehulp waterfilter</p>
              <p className="text-sm text-gray-600">Vind het juiste filter voor uw bestemming en reissituatie.</p>
            </Link>
          </div>
        </section>

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over reisfilters</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters overzicht</Link>,{' '}
          <Link href="/reisfilter/lifestraw" className="text-[#005F8A] underline">Lifestraw review</Link> en{' '}
          <Link href="/reisfilter/sawyer" className="text-[#005F8A] underline">Sawyer Squeeze review</Link>.
        </p>
      </main>
    </>
  );
}
