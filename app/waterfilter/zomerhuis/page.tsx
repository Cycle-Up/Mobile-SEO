import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor vakantiehuis en zomerhuis: schoon water bij seizoensgebruik',
  description: 'Een vakantiehuis of zomerhuis heeft wekenlang stilstaand water in leidingen. Ontdek hoe u veilig drinkwater krijgt bij seizoensgebruik en welk waterfilter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/zomerhuis' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is het water in een vakantiehuis dat lang leegstond veilig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet zonder voorzorgsmaatregelen. Water dat weken of maanden stilstaat in leidingen verliest zijn chloorbescherming en kan bacteriegroei (waaronder legionella) bevatten. Laat bij aankomst het water minimaal 5 minuten doorlopen uit elk tappunt voordat u het gebruikt. Bij een eigen bron of twijfel over de leiding kunt u ook een kookadvies opvolgen (1 minuut koken) of een UV-purifier gebruiken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang moet ik water laten doorlopen na maanden leegstand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laat elk tappunt (kraan, douche, toilet) minimaal 3-5 minuten doorlopen bij aankomst na een lange leegstand. Begin met de kraan die het verst van de inlaat zit. Spoel daarna ook de boiler door: zet hem op de hoogste stand en laat heet water volledig doorstromen. Het gehele systeem doorspoelen na een winter kost circa 30 minuten maar is essentieel voor de veiligheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter kies ik voor een zomerhuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij gemeentelijk leidingwater en smaakverbetering volstaat een filterkraan of Brita-kan. Bij bacteriologisch risico (stilstaand water, eigen bron) voegt u een UV-purifier toe. Voor een eigen bron in een buitengebied combineert u sedimentfilter, koolstoffilter en UV. Voor maximaal comfort en veiligheid kiest u een compact osmosesysteem dat alle risicos in een afdekt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe voorkom ik legionella in een vakantiehuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legionella groeit optimaal bij 25-45 graden Celsius in stilstaand water. Voorkomen: (1) Stel de boiler in op minimaal 60 graden Celsius. (2) Spoel bij aankomst alle tappunten grondig door, inclusief de douchekop. (3) Laat de boiler na het instellen minimaal 10 minuten op 60 graden circuleren. (4) Verwijder eventuele dode leidingdelen (blind ends) in het leidingwerk. Een UV-purifier doodt legionella in doorstromend water maar beschermt niet als water stilstaat in de leidingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik het waterfilter in mijn zomerhuis laten zitten tijdens de winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, dat is risicovol. Water in een filter dat bevriest, beschadigt het membraan en filtermateriaal. Tap het filter volledig leeg bij winterafsluiting: sluit de watertoevoer, open de filterkraan en laat het systeem leegstromen. Osmosemembranen kunnen na bevriezen zodanig beschadigd zijn dat ze chemische stoffen niet meer voldoende tegenhouden. Bewaar membraanfilters vorstvrij of vervang ze voor het nieuwe seizoen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bronwater bij een vakantiehuisje veilig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bronwater van een eigen bron is niet automatisch veilig en wordt niet gemonitord door een drinkwaterbedrijf. Bacteriologische risicos (E. coli, enterococcen) zijn reeel, net als nitraat (bij agrarisch gebruik in de omgeving), ijzer en mangaan. Laat bronwater minimaal jaarlijks testen via een gecertificeerd laboratorium (Kiwa, SGS) en gebruik altijd een combinatie van sedimentfilter, koolstoffilter en UV-lamp als minimum. Een osmosesysteem geeft de meest brede bescherming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een goede portable waterfilter voor een vakantiehuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een vakantiehuis in het buitenland of zonder vast filter zijn er goede portable opties: Lifestraw Peak Series filtert bacterien en protozoa (niet virussen, niet chemisch), Sawyer Squeeze is vergelijkbaar. De Grayl Geopress filtert ook virussen en verbetert de smaak. Voor chemische verontreinigingen zijn deze filters minder effectief; dan is een portable osmose unit of koken de beste optie. Portable filters zijn bedoeld als aanvulling, niet als vervanging voor een installatie.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor vakantiehuis en zomerhuis: schoon water bij seizoensgebruik',
  description: 'Een vakantiehuis of zomerhuis heeft wekenlang stilstaand water in leidingen. Ontdek hoe u veilig drinkwater krijgt bij seizoensgebruik en welk waterfilter.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/zomerhuis',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterZomerhuisPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter vakantiehuis en zomerhuis', item: 'https://waterfilterplatform.nl/waterfilter/zomerhuis' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Waterfilter vakantiehuis en zomerhuis</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor vakantiehuis en zomerhuis: schoon water bij seizoensgebruik
          </h1>
          <p className="text-gray-600 text-lg">
            Een vakantiehuis of zomerhuis staat maandenlang leeg. In die periode staat het water roerloos in de leidingen, wat bacteriegroei bevordert en risico geeft op legionella. Bij heropening van het seizoen vraagt de waterkwaliteit extra aandacht, en een waterfilter helpt daarbij.
          </p>
        </div>

        <QuickAnswer answer="Bij seizoensgebruik staat water maanden stil in leidingen, wat bacteriegroei en legionella-risico oplevert. Spoel bij aankomst alle kranen 5 minuten door en stel de boiler in op minimaal 60 graden Celsius. Een UV-purifier geeft extra microbiologische bescherming. Tap filters leeg voor de winter om bevriezing te voorkomen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het risico van stilstaand water in seizoensgebouwen
        </h2>
        <p className="text-gray-700 mb-4">
          Het grootste waterveiligheidsrisico in een vakantiehuis is niet de waterbron zelf, maar het stilstaan van het water in de leidingen gedurende lange periodes. Bij temperaturen van 25-45 graden Celsius, zoals die in niet-geventileerde leidingen in de zomer kunnen optreden, groeit legionellabacterien optimaal.
        </p>
        <p className="text-gray-700 mb-4">
          Legionella veroorzaakt de veteranenziekte (legionellose), een ernstige longontsteking. Besmetting vindt plaats via inademing van besmet waternevel, met name bij douchen. Goede voorzorgsmaatregelen bij heropening zijn essentieel.
        </p>
        <p className="text-gray-700 mb-6">
          Naast bacteriegroei verliest water zijn chloorbescherming bij stilstand. Het chloor dat drinkwaterbedrijven toevoegen om bacteriegroei in het net te remmen, verdampt uit stilstaand water in de leiding. Dit laat de leidingen kwetsbaar voor hergroei van micro-organismen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Checklist bij openen seizoen: veilig starten
        </h2>
        <p className="text-gray-700 mb-4">
          Volg deze stappen bij het openen van uw vakantiehuis of zomerhuis na een lange leegstand:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Spoelen:</strong> Laat water minimaal 5 minuten doorlopen uit elk tappunt in het huis: keuken, badkamer, toilet, douche en eventuele buitenkranen. Begin met het tappunt dat het verst van de hoofdafsluiter ligt.
          </li>
          <li>
            <strong>Warm water en boiler:</strong> Stel de boiler in op minimaal 60 graden Celsius. Laat het hele warmwatervolume eenmaal doorstromen (douchewater op maximaal warm, circa 10 minuten). Bij 60 graden wordt legionella effectief gedood.
          </li>
          <li>
            <strong>Visuele en zintuiglijke controle:</strong> Controleer het water op kleur (troebel, geel of bruin water wijst op roest of sediment), geur (rotte-eieren-geur wijst op zwavel of bacterieactiviteit) en eventuele biofilm (slijm aan de binnenkant van de douche of kraan).
          </li>
          <li>
            <strong>Bij twijfel: kookadvies:</strong> Als u twijfelt aan de waterkwaliteit, kook dan drinkwater gedurende 1 minuut. Dit doodt alle pathogene bacterien en virussen effectief.
          </li>
          <li>
            <strong>Optioneel: watertest:</strong> Laat het water testen via een gecertificeerd laboratorium als u een eigen bron heeft of als u structureel twijfelt. Bacteriologische tests (E. coli, enterococcen) kosten circa €40-80 bij laboratoria als Kiwa of SGS.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronwater en regenwater bij buitengelegen vakantiehuizen
        </h2>
        <p className="text-gray-700 mb-4">
          Vakantiehuizen in afgelegen gebieden, zowel in Nederland als in het buitenland, zijn soms aangesloten op een eigen bron, een regenwaterput of een kleine gemeenschap zonder formeel drinkwaternet. Dit brengt aanzienlijk hogere risicos met zich mee dan gemeentelijk water:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Bacteriologisch risico:</strong> E. coli en enterococcen zijn veelvoorkomende problemen bij ondiepe bronnen, zeker na regenval.</li>
          <li><strong>Nitraat:</strong> In agrarische gebieden perkoleren nitraten uit mest de grond in en verontreinigen het grondwater. Nitraat wordt niet weggekookt en vereist osmosefiltratie of nitraatspecifiek ionenwisselaar.</li>
          <li><strong>IJzer en mangaan:</strong> Bruin of rood water uit een bron wijst op opgelost ijzer. Smaakafwijkingen en vlekken op sanitair zijn typische gevolgen.</li>
          <li><strong>Chemische verontreinigingen:</strong> Pesticiden, herbiciden en industriele stoffen kunnen via grondwater in een private bron terechtkomen.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bij een eigen bron is een jaarlijkse watertest dringend aanbevolen. Zonder test weet u niet wat er in uw water zit.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterfilter voor zomerhuis: welke optie past bij welke situatie?
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Situatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanbevolen filter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Gemeentelijk water (smaak en comfort)</td>
                <td className="border border-gray-300 px-3 py-2">Filterkraan of filterkan</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30-200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Stilstaand water (bacterierisico)</td>
                <td className="border border-gray-300 px-3 py-2">UV-purifier</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200-400</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Eigen bron of bronwater</td>
                <td className="border border-gray-300 px-3 py-2">UV + sediment + koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Alle verontreinigingen + maximaal comfort</td>
                <td className="border border-gray-300 px-3 py-2">Compact osmosesysteem</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-600</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Seizoensafsluiting: tap uw filter leeg voor de winter
        </h2>
        <p className="text-gray-700 mb-4">
          Waterfilters en osmosemembranen zijn kwetsbaar voor bevriezing. Als het water in een filter bevriest, kan het membraanmateriaal scheuren of het filterbehuizing beschadigen. Na het doorschieten van het membraan filtert het systeem niet meer betrouwbaar.
        </p>
        <p className="text-gray-700 mb-4">
          Volg deze stappen bij winterafsluiting van uw zomerhuis:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Sluit de hoofdwatertoevoer af en open daarna alle kranen om de druk weg te laten.</li>
          <li>Open de filterafsluiter en tap het filterbehuizing leeg via de drankraan of via het afvoerventiel.</li>
          <li>Verwijder bij langdurige opslag het filtermedium en bewaar dit vorstvrij, het liefst in een kleine hoeveelheid gedemineraliseerd water met een conserveringsmiddel.</li>
          <li>Laat osmosemembranen nooit uitdrogen: bewaar ze vochtig maar vorstvrij.</li>
          <li>Noteer de vervaldatum van het filtermedium: als het na de winter voorbij datum is, vervang het dan voor het nieuwe seizoen.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Portable waterfilters voor vakantiehuizen in het buitenland
        </h2>
        <p className="text-gray-700 mb-4">
          Als u een vakantiehuis in het buitenland heeft waar u geen vaste installatie wilt plaatsen, zijn portable reiswaterfilters een praktische oplossing. De bekendste merken:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Lifestraw Peak Series:</strong> Filtert bacterien (99,999%) en protozoa via holle vezelmembraanfiltratie. Niet effectief tegen virussen of chemische stoffen. Geschikt voor helder oppervlaktewater en gemeentelijk water.</li>
          <li><strong>Sawyer Squeeze:</strong> Vergelijkbare specificaties als Lifestraw, watersamenstelling goed reinigbaar door terugspoelen. Zeer licht (85 gram).</li>
          <li><strong>Grayl Geopress:</strong> Filtert ook virussen (99,999%) en verbetert smaak via actieve kool. Werkt als drukfles. Geschikter voor gebruik in landen waar virusrisico reeel is.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor chemische verontreinigingen zoals nitraat, pesticiden of zware metalen zijn portable filters onvoldoende. In dat geval is koken of een portable osmose-unit de enige betrouwbare oplossing.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterfilters in een vakantiehuis</h2>
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
          <Link href="/leidingwater/bacterien" className="text-[#005F8A] underline">bacterien in leidingwater</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfiltertypen</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
