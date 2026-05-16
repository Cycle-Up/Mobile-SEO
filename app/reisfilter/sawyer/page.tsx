import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Sawyer Squeeze review: de duurzaamste reisfilter met onbeperkte capaciteit',
  description: 'Sawyer Squeeze is de duurzaamste reisfilter: onbeperkte filtercapaciteit, 0,1 µm holle vezel, levenslange garantie. Review en vergelijking met Lifestraw en Grayl.',
  alternates: { canonical: 'https://waterfilterplatform.nl/reisfilter/sawyer' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Gaat een Sawyer Squeeze echt onbeperkt mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In theorie ja, bij correct onderhoud. Sawyer geeft een levenslange garantie op de Squeeze en Mini. De holle vezels raken niet uitgeput zoals bij de Lifestraw (4.000L maximum). Zolang u het filter regelmatig terugblaast (backflushen) na gebruik, blijft de doorstroomcapaciteit op peil. Beschadiging treedt op bij bevriezen, vallen of overmatige druk. Bij normaal gebruik en correct onderhoud gaat de Sawyer Squeeze vele jaren mee zonder kwaliteitsverlies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Filtert Sawyer ook virussen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. De Sawyer Squeeze heeft een poriemaat van 0,1 micrometer, fijner dan de Lifestraw (0,2 micrometer). Dit is nog steeds te groot voor virussen (20-300 nanometer). Sawyer verwijdert bacterien (&gt;99,9999%) en protozoa (&gt;99,9999%) maar geen virussen. In gebieden met virusrisico (Azie, Afrika, Latijns-Amerika) is Sawyer alleen niet voldoende. Combineer dan met een SteriPen UV-pen voor volledige bescherming, of kies de Grayl Geopress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe maak ik een Sawyer Squeeze schoon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na elk gebruik backflushen: vul de bijgeleverde spuit met schoon water en druk dit terug door het filter in de richting tegengesteld aan normale doorstroom. U ziet vuil en discolored water uit het filter komen. Herhaal totdat het water helder terugkomt. Laat het filter daarna drogen voor opslag. Bij langdurige opslag: controleer of het filter nog goed doorstroomt bij hergebruik. Nooit laten bevriezen. Niet reinigen met chloor of andere chemicalien zonder raadpleging van de handleiding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is backflushing bij een Sawyer filter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Backflushing is het terugspuiten van schoon water door het filter in de richting tegenovergesteld aan de normale filterrichting. Dit verwijdert gecumuleerde bacterien, sediment en algen die de doorstroomopeningen hebben verstopt. Bij de Sawyer Squeeze wordt een kleine injectiespuit meegeleverd waarmee u water met druk terugpompt. Backflushen na elk gebruik of als de doorstroom merkbaar verminderd is. Correct backflushen is cruciaal voor de levenslange garantie van Sawyer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen Sawyer Squeeze en Sawyer Mini?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Sawyer Squeeze weegt 85 gram en heeft een doorstroomsnelheid van circa 1 liter per minuut. De Sawyer Mini weegt 50 gram maar heeft een lagere doorstroomsnelheid van circa 0,5 liter per minuut. Beide hebben een poriemaat van 0,1 micrometer, onbeperkte filtercapaciteit en levenslange garantie. De Mini past ook op standaard PET-flessen (22mm schroefdraad). Voor solo-wandelaars is de Mini licht genoeg; voor grotere groepen of bij behoefte aan snellere doorstroom is de Squeeze comfortabeler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik Sawyer als inline filter gebruiken in een hydration bladder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dit is een van de grootste voordelen van de Sawyer Squeeze. De filter past direct in de drinkslangen van Osprey, Camelbak en andere hydration systems met standaard schroefdraadverbindingen. U plaatst de Sawyer in de slang tussen de bladder en het mondstuk; al het water dat u drinkt wordt automatisch gefilterd. Dit is ideaal voor wandelen: u hoeft de waterzak niet te stoppen om te filteren. De Sawyer Micro en Mini zijn hier ook voor geschikt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Sawyer of Lifestraw beter voor een lange wandelreis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een lange wandelreis (meerdere weken tot maanden, zoals de PCT of Appalachian Trail) is de Sawyer Squeeze de betere keuze. Redenen: onbeperkte filtercapaciteit (geen vervanging nodig), inline gebruik in hydration bladder, en lagere totale kosten bij frequent gebruik. De Lifestraw heeft een capaciteitslimiet van 4.000 liter en is minder veelzijdig in gebruik. Voor een korte vakantiereis (1-2 weken) is de Lifestraw Personal lichter, goedkoper en voldoende.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Sawyer Squeeze review: de duurzaamste reisfilter met onbeperkte capaciteit',
  description: 'Review van de Sawyer Squeeze: onbeperkte filtercapaciteit, 0,1 micrometer holle vezel, levenslange garantie en vergelijking met Lifestraw en Grayl Geopress.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/reisfilter/sawyer',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function SawyerPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Reisfilter', item: 'https://waterfilterplatform.nl/reisfilter' },
              { '@type': 'ListItem', position: 3, name: 'Sawyer reisfilter', item: 'https://waterfilterplatform.nl/reisfilter/sawyer' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/reisfilter" className="hover:underline">Reisfilter</Link> &rsaquo;{' '}
          <span>Sawyer reisfilter</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Sawyer Squeeze review: de duurzaamste reisfilter met onbeperkte capaciteit
        </h1>

        <QuickAnswer answer="De Sawyer Squeeze is de meest duurzame reisfilter voor backpackers: 0,1 micrometer holle vezel, onbeperkte filtercapaciteit dankzij backflushing, levenslange garantie en geschikt als inline filter in een hydration bladder. Weegt 85 gram, prijs €35-50. Filtert geen virussen. Populairste filter op PCT en Appalachian Trail." />

        <CTABanner context="osmose" />

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Sawyer Products: van onderwaterapparatuur tot reisfilter
          </h2>
          <p className="text-gray-700 mb-4">
            Sawyer Products is een Amerikaans bedrijf met oorsprong in de onderwaterapparatuur en outdoor-industrie. Het bedrijf staat bekend om zijn hoogwaardige sportieve buitenproducten en won aan bekendheid onder backpackers met de introductie van de Sawyer Squeeze en Sawyer Mini reisfilters. De filters worden standaarduitrusting geacht voor thru-hikers op lange afstandspaden zoals de Appalachian Trail (3.500 km) en de Pacific Crest Trail (4.300 km).
          </p>
          <p className="text-gray-700">
            De Sawyer-filters maken gebruik van holle vezeltechnologie met een poriemaat van 0,1 micrometer &mdash; twee keer fijner dan de Lifestraw (0,2 micrometer). Dit resulteert in hogere verwijderingspercentages voor protozoa (log 6 vs. log 5 bij Lifestraw). Het cruciale onderscheid ten opzichte van concurrenten: de onbeperkte filtercapaciteit door de mogelijkheid tot backflushing met de bijgeleverde spuit.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sawyer modellen vergelijking
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Model</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Gewicht</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Poriemaat</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Capaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bijzonder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Squeeze</td>
                <td className="border border-gray-300 px-3 py-2">85g</td>
                <td className="border border-gray-300 px-3 py-2">0,1 &micro;m</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
                <td className="border border-gray-300 px-3 py-2">&euro;35-50</td>
                <td className="border border-gray-300 px-3 py-2">Populairste model</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Mini</td>
                <td className="border border-gray-300 px-3 py-2">50g</td>
                <td className="border border-gray-300 px-3 py-2">0,1 &micro;m</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25-35</td>
                <td className="border border-gray-300 px-3 py-2">Ultralicht, trager</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Micro</td>
                <td className="border border-gray-300 px-3 py-2">52g</td>
                <td className="border border-gray-300 px-3 py-2">0,1 &micro;m</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
                <td className="border border-gray-300 px-3 py-2">&euro;35-45</td>
                <td className="border border-gray-300 px-3 py-2">Compact doorstroomfilter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">MINI Dual</td>
                <td className="border border-gray-300 px-3 py-2">64g</td>
                <td className="border border-gray-300 px-3 py-2">0,1 &micro;m</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40-55</td>
                <td className="border border-gray-300 px-3 py-2">Twee aansluitingen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterprestaties: wat verwijdert Sawyer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Sawyer filtert WEL</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>Bacterien &gt;99,9999% (log 6) &mdash; E. coli, Salmonella, Cholera</li>
              <li>Protozoa &gt;99,9999% (log 6) &mdash; Giardia, Cryptosporidium</li>
              <li>Microplastics</li>
              <li>Sediment en troebeling</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">Sawyer filtert NIET</h3>
            <ul className="text-sm text-red-700 space-y-1">
              <li>Virussen (hepatitis A, norovirus, rotavirus)</li>
              <li>Chemische stoffen (pesticiden, PFAS)</li>
              <li>Opgeloste zouten en mineralen</li>
              <li>Zout water (geen ontzilting)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Backflushing: het geheim van onbeperkte levensduur
        </h2>
        <p className="text-gray-700 mb-4">
          Het grootste onderscheid van de Sawyer Squeeze ten opzichte van concurrenten is de mogelijkheid tot effectief backflushen. Na gebruik worden de porieen van het filter geleidelijk verstopt door gecumuleerde bacterien, algen en fijn sediment. Dit vermindert de doorstroomsnelheid en filterprestaties.
        </p>
        <p className="text-gray-700 mb-4">
          Met de bijgeleverde injectiespuit vult u schoon water op en spuit dit met druk terug door het filter in tegengestelde richting. Dit spoelt de verstoppingen los en herstelt de doorstroom volledig. Na backflushen is het filter als nieuw. Herhaal dit na elk gebruik en de Sawyer gaat inderdaad onbeperkt mee.
        </p>
        <p className="text-gray-700 mb-6">
          Lifestraw heeft ook een backflush-functie, maar minder effectief: u blaast alleen lucht terug zonder de mechanische druk van de spuit. Dit maakt de Sawyer geschikter voor langdurig gebruik waarbij consistent onderhoud mogelijk is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Inline gebruik in hydration bladder
        </h2>
        <p className="text-gray-700 mb-4">
          Een van de meest gewaardeerde eigenschappen van de Sawyer Squeeze is de mogelijkheid als inline filter te werken in een hydration-systeem. De filter past direct op de drinkslang van een Osprey, Camelbak of andere hydration bladder met standaard schroefdraadverbindingen. U plaatst de Sawyer in de slang; al het water dat u drinkt passeert automatisch het filter.
        </p>
        <p className="text-gray-700 mb-6">
          Dit is ideaal voor wandelen en hardlopen: u hoeft niet te stoppen om water te filteren, geen aparte container nodig, en u drinkt rechtstreeks gefilterd water tijdens de beweging. De Sawyer Mini en Micro zijn hier ook voor geschikt vanwege hun compacte afmetingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sawyer versus Lifestraw
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Sawyer Squeeze</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Lifestraw Personal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Gewicht</td>
                <td className="border border-gray-300 px-3 py-2">85g</td>
                <td className="border border-gray-300 px-3 py-2">29g</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Prijs</td>
                <td className="border border-gray-300 px-3 py-2">&euro;35-50</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25-35</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Poriemaat</td>
                <td className="border border-gray-300 px-3 py-2">0,1 &micro;m</td>
                <td className="border border-gray-300 px-3 py-2">0,2 &micro;m</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Filtercapaciteit</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
                <td className="border border-gray-300 px-3 py-2">4.000L maximum</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Backflushing</td>
                <td className="border border-gray-300 px-3 py-2">Met spuit (effectief)</td>
                <td className="border border-gray-300 px-3 py-2">Lucht terugblazen (beperkt)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Inline gebruik</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Virussen gefilterd</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Garantie</td>
                <td className="border border-gray-300 px-3 py-2">Levenslang</td>
                <td className="border border-gray-300 px-3 py-2">Geen garantie na 4.000L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sawyer versus Grayl Geopress
        </h2>
        <p className="text-gray-700 mb-4">
          De Grayl Geopress (350g, €80-100) filtert ook virussen en is daardoor geschikter voor stedentrips naar risicogebieden. De Sawyer Squeeze (85g) is aanzienlijk lichter en goedkoper, maar biedt geen virusbescherming. Voor backpacken in afgelegen gebieden zonder virusrisico (bergwandelen, wilde camping) wint de Sawyer op gewicht en kosten. Voor stedelijke gebieden in Azie of Afrika wint de Grayl op volledigheid van bescherming.
        </p>
        <p className="text-gray-700 mb-6">
          Een combinatiestrategie is ook mogelijk: neem een Sawyer Squeeze mee voor dagelijks gebruik in de natuur en een UV-pen voor momenten waarop virusrisico hoger is (stedelijk water, twijfelachtige bronnen). Lees meer op onze <Link href="/reisfilter" className="text-[#005F8A] underline">reisfilter vergelijkingspagina</Link> en de <Link href="/reisfilter/lifestraw" className="text-[#005F8A] underline">Lifestraw review</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over Sawyer Squeeze</h2>
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
          <Link href="/reisfilter" className="text-[#005F8A] underline">reisfilter overzicht</Link>,{' '}
          <Link href="/reisfilter/lifestraw" className="text-[#005F8A] underline">Lifestraw review</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
