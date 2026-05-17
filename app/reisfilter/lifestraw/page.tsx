import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Lifestraw review: de bekendste reisfilter getest en vergeleken',
  description: 'Lifestraw is de meest bekende reisfilter ter wereld. Review van Lifestraw Personal, Go en Peak Series: filterprestaties, gebruiksgemak en wanneer Lifestraw.',
  alternates: { canonical: 'https://waterfilterplatform.nl/reisfilter/lifestraw' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Filtert Lifestraw ook virussen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Lifestraw gebruikt een holle vezelfilter met een poriemaat van 0,2 micrometer. Bacterien zijn minimaal 0,2 micrometer groot en worden tegengehouden. Virussen zijn echter 20-300 nanometer groot en passen door de porieen. Virussen als hepatitis A, norovirus en rotavirus worden dus NIET gefilterd door Lifestraw. In regio\'s met virusrisico (Azie, Afrika, Latijns-Amerika) is Lifestraw alleen niet voldoende. Combineer dan met een UV-pen (SteriPen) of kies de Grayl Geopress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een Lifestraw mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De holle vezels van de Lifestraw Personal zijn goed voor 4.000 liter water. Bij dagelijks gebruik van 2 liter gaat het filter meer dan 5 jaar mee. Na 4.000 liter is de filtercapaciteit uitgeput en moet u een nieuw exemplaar kopen. De Lifestraw Go-fles heeft dezelfde filtercapaciteit. Het extra koolstoffilter in de Lifestraw Flex en Peak Series gaat 100 liter mee en moet dan apart worden vervangen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen Lifestraw Personal en Lifestraw Go?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Lifestraw Personal is een los rietje waarmee u rechtstreeks uit een waterbron kunt drinken of water kunt opzuigen vanuit een fles. De Lifestraw Go is een complete waterfles (650ml) met de Lifestraw-filter al ingebouwd. U vult de fles, draait hem om en drinkt via het filter. De Go is handiger voor dagelijks gebruik; de Personal is lichter en goedkoper voor extreme backpackers. Filtercapaciteit is bij beide 4.000 liter voor de holle vezels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een Lifestraw gebruiken in rivieren en meren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Lifestraw is ontworpen voor gebruik in rivieren, meren en beekjes. De 0,2 micrometer holle vezels filteren bacterien en protozoa effectief uit oppervlaktewater. Let op: bij sterk troebel water (modderige rivier) loopt het filter snel dicht. Laat het water eerst bezinken of gebruik een bandana als grof voorfilter. In gebieden met virusrisico of chemische vervuiling (industriegebieden, agrarische regio\'s) is Lifestraw alleen niet voldoende.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe onderhoud ik een Lifestraw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na elk gebruik: blaas voorzichtig terug door het filter (van het drinkeinde) om vuil en water terug te duwen. Dit is de Lifestraw backflush. Sla het filter op met de dopjes op beide uiteinden om verontreiniging te voorkomen. Bewaar hem droog; een vochtig filter kan schimmel vormen. KRITIEK: laat nooit bevriezen. De holle vezels breken bij vriestemperaturen en het filter is dan onherstelbaar beschadigd en onveilig in gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Lifestraw veilig voor gebruik in Azie of Afrika?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gedeeltelijk. Lifestraw filtert bacterien en protozoa effectief, waarmee het beschermt tegen de meest voorkomende oorzaken van reizigersdiarree. Maar in Azie (India, Zuidoost-Azie) en Afrika zijn ook virussen (hepatitis A, norovirus, polio) een risico in verontreinigd water. Lifestraw filtert die virussen niet. Voor stedelijke reizen naar deze regio\'s is de Grayl Geopress of een combinatie van Lifestraw en SteriPen UV-pen veiliger. In afgelegen berggebieden in Azie (Nepal Himalaya, Tibet) is het virusrisico in stroomopwaarts water lager.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen Lifestraw en Sawyer Squeeze?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lifestraw Personal is lichter (29g vs 85g) en goedkoper (€25-35 vs €35-50), maar heeft een beperkte filtercapaciteit van 4.000 liter waarna het wordt weggegooid. Sawyer Squeeze heeft een onbeperkte filtercapaciteit dankzij de bijgeleverde backflush-spuit en kan worden gebruikt als inline filter in een hydration bladder. Voor een enkele reis of af en toe kamperen is Lifestraw voldoende. Voor veelvuldige reizigers of thru-hikers is Sawyer duurzamer en goedkoper op de lange termijn.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Lifestraw review: de bekendste reisfilter getest en vergeleken',
  description: 'Review van Lifestraw Personal, Go en Peak Series: filterprestaties, gebruiksgemak en wanneer Lifestraw de juiste keuze is voor uw reis.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/reisfilter/lifestraw',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LifestrawPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Reisfilter', item: 'https://waterfilterplatform.nl/reisfilter' },
              { '@type': 'ListItem', position: 3, name: 'Lifestraw reisfilter', item: 'https://waterfilterplatform.nl/reisfilter/lifestraw' },
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
          <span>Lifestraw reisfilter</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Lifestraw review: de bekendste reisfilter getest en vergeleken
        </h1>

        <QuickAnswer answer="Lifestraw is de meest bekende reisfilter ter wereld: ultralicht (29g), goedkoop (€25-35), en filtert bacterien en protozoa voor 99,9999% effectief. Belangrijk voorbehoud: Lifestraw filtert geen virussen. Voor reizen naar Azie, Afrika of Latijns-Amerika is aanvulling met een UV-pen nodig. Capaciteit: 4.000 liter per filter." />

        <CTABanner context="osmose" />

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Lifestraw: het merk en de technologie
          </h2>
          <p className="text-gray-700 mb-4">
            Lifestraw is een product van het Zwitserse bedrijf Vestergaard, opgericht in 1957. De Lifestraw-filter werd in 2005 geintroduceerd als een goedkoop noodhulpmiddel voor gebieden zonder schoon drinkwater. Het concept was revolutionair: een simpel rietje waarmee je rechtstreeks uit een vervuilde waterbron kon drinken en het water werd tijdens het zuigen gefilterd.
          </p>
          <p className="text-gray-700 mb-4">
            De technologie achter Lifestraw is de holle vezelmembraan (hollow fiber membrane). Duizenden microscopisch kleine buisjes van 0,2 micrometer poriemaat vormen de filterkern. Water wordt door druk (zuigkracht) door de porieen gedwongen; deeltjes groter dan 0,2 micrometer worden buiten gehouden. Bacterien (minimaal 0,2 micrometer groot) worden tegengehouden met een verwijderingspercentage van meer dan 99,9999% (log 6).
          </p>
          <p className="text-gray-700">
            De Lifestraw is WHO-goedgekeurd voor noodhulprespons en gecertificeerd volgens NSF/ANSI 42 en 53. Het is het meest gebruikte waterfilterproduct in humanitaire crises wereldwijd.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Lifestraw modellen vergelijking
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Model</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Gewicht</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Inhoud</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Filtercapaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bijzonder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Personal (rietje)</td>
                <td className="border border-gray-300 px-3 py-2">29g</td>
                <td className="border border-gray-300 px-3 py-2">Rechtstreeks drinken</td>
                <td className="border border-gray-300 px-3 py-2">4.000L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25-35</td>
                <td className="border border-gray-300 px-3 py-2">Instapmodel, ultralicht</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Go Bottle</td>
                <td className="border border-gray-300 px-3 py-2">Incl. fles</td>
                <td className="border border-gray-300 px-3 py-2">650ml</td>
                <td className="border border-gray-300 px-3 py-2">4.000L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40-55</td>
                <td className="border border-gray-300 px-3 py-2">Alles-in-1 fles + filter</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Flex</td>
                <td className="border border-gray-300 px-3 py-2">64g</td>
                <td className="border border-gray-300 px-3 py-2">Fles of rechtstreeks</td>
                <td className="border border-gray-300 px-3 py-2">4.000L + koolstof 100L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;45-60</td>
                <td className="border border-gray-300 px-3 py-2">Koolstof toevoeging</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Peak Series Squeeze</td>
                <td className="border border-gray-300 px-3 py-2">79g</td>
                <td className="border border-gray-300 px-3 py-2">Fles of pouch</td>
                <td className="border border-gray-300 px-3 py-2">4.000L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50-65</td>
                <td className="border border-gray-300 px-3 py-2">Professioneel gebruik</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Home (tafelfilter)</td>
                <td className="border border-gray-300 px-3 py-2">1,5kg</td>
                <td className="border border-gray-300 px-3 py-2">11L reservoir</td>
                <td className="border border-gray-300 px-3 py-2">26.000L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;60-80</td>
                <td className="border border-gray-300 px-3 py-2">Voor thuis of noodhulp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat filtert Lifestraw wel en niet?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Wat Lifestraw WEL filtert</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>Bacterien &gt;99,9999% (log 6) &mdash; E. coli, Salmonella, Cholera</li>
              <li>Protozoa &gt;99,999% &mdash; Giardia, Cryptosporidium</li>
              <li>Microplastics (&gt;1 micrometer)</li>
              <li>Troebeling en sediment</li>
              <li>Koolstofversie ook: chloor, geur, smaakverbetering</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">Wat Lifestraw NIET filtert</h3>
            <ul className="text-sm text-red-700 space-y-1">
              <li>Virussen (hepatitis A, norovirus, rotavirus, polio)</li>
              <li>Chemische verontreinigingen (pesticiden, zware metalen)</li>
              <li>Opgeloste zouten en mineralen</li>
              <li>PFAS en medicijnresten</li>
              <li>Zout water (geen ontzilting)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is Lifestraw NIET voldoende?
        </h2>
        <p className="text-gray-700 mb-4">
          Lifestraw beschermt u goed in gebieden zonder virusrisico in oppervlaktewater: bergen in West-Europa (Alpen, Scandinavie), Noord-Amerika (Rockies, Appalachian Trail), Nieuw-Zeeland en Antarctica. In deze gebieden zijn virussen in bronwater zeldzaam en zijn bacterien en protozoa de hoofdrisicos.
        </p>
        <p className="text-gray-700 mb-4">
          In stedelijke of agrarische gebieden in Azie (India, Zuidoost-Azie), Afrika (sub-Sahara, Egypte), Latijns-Amerika (Midden-Amerika, Peru, Bolivia) en het Midden-Oosten is de kans op virale besmetting in oppervlaktewater en kraanwater significant. In deze regio\'s is een Lifestraw alleen niet voldoende.
        </p>
        <p className="text-gray-700 mb-6">
          Oplossingen voor gebieden met virusrisico: (1) combineer Lifestraw met een SteriPen UV-pen, (2) kies de Grayl Geopress die ook virussen filtert, of (3) gebruik alleen gebotteld water of gekookt water.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Lifestraw versus Sawyer Squeeze
        </h2>
        <p className="text-gray-700 mb-4">
          De twee meest populaire budget-reisfilters zijn de Lifestraw Personal en de <Link href="/reisfilter/sawyer" className="text-[#005F8A] underline">Sawyer Squeeze</Link>. Lifestraw wint op gewicht (29g vs 85g) en prijs (€25 vs €35). Sawyer wint op duurzaamheid: de Sawyer heeft een onbeperkte filterlevensduur dankzij backflushing met een bijgeleverde spuit. De Lifestraw kan worden teruggeblazen maar heeft een maximale capaciteit van 4.000 liter, waarna het weg moet.
        </p>
        <p className="text-gray-700 mb-6">
          Voor een enkele reis of kortdurend kamperen is Lifestraw een uitstekende keuze. Voor regelmatige reizigers, thru-hikers of langdurig gebruik is de Sawyer Squeeze duurzamer en op de lange termijn goedkoper. Beide filteren geen virussen. Lees de uitgebreide vergelijking op onze <Link href="/reisfilter/sawyer" className="text-[#005F8A] underline">Sawyer Squeeze review pagina</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud en bewaring
        </h2>
        <p className="text-gray-700 mb-4">
          Na elk gebruik: blaas lucht terug door het filter (van het mondstuk af) om water en vuil terug te duwen. Dit heet backflushing bij Lifestraw, al is het minder effectief dan de Sawyer backflush met een spuit. Sluit beide dopjes na gebruik om het filter te beschermen.
        </p>
        <p className="text-gray-700 mb-6">
          Bewaar de Lifestraw droog maar niet uitgedroogd (laat bij langdurige opslag een klein beetje vochtigheid in de vezels). Het allerbelangrijkste: nooit laten bevriezen. Vriezen zorgt voor micro-scheurtjes in de holle vezels waardoor het filter ineffectief en gevaarlijk wordt. Een ingevroren Lifestraw ziet er intact uit maar filtert niet meer correct &mdash; er is geen visuele indicatie van de schade.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over Lifestraw</h2>
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
          <Link href="/reisfilter/sawyer" className="text-[#005F8A] underline">Sawyer Squeeze review</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
