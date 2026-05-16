import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterdruk voor omgekeerde osmose: minimum, meten en drukverhoger',
  description:
    'Een omgekeerde osmose filter heeft minimaal 2,8 bar waterdruk nodig voor goede werking. Bij lagere druk is de capaciteit te laag en het afvalwaterpercentage te hoog. Lees hoe u uw waterdruk meet en wanneer een drukverhoger nodig is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/druk' },
};

const faqItems = [
  {
    question: 'Wat is de minimale waterdruk voor een osmosefilter?',
    answer:
      'De minimale aanbevolen voedingsdruk voor de meeste omgekeerde osmose systemen is 2,8 bar (40 psi). Onder deze drempel produceert het membraan te weinig gefilterd water en is de verhouding afvalwater ten opzichte van schoon water onacceptabel hoog. De optimale werkdruk ligt tussen 4 en 6 bar. Bij sommige tankloze systemen met ingebouwde boosterpomp is de minimale inlaatdruk lager, maar ook deze hebben minimaal 1,5 bar nodig om de pomp correct te laten starten.',
  },
  {
    question: 'Hoe meet ik de waterdruk thuis?',
    answer:
      'Sluit een manometer (te koop bij bouwmarkten voor circa 10 tot 20 euro) aan op een kraan of aansluiting onder de gootsteen. Meet de druk bij gesloten kraan (statische druk) en bij open kraan (dynamische druk). De dynamische druk is de relevante meting voor uw osmosefilter. In de meeste Nederlandse woningen op de begane grond of eerste verdieping bedraagt de dynamische druk tussen 3 en 5 bar. Op hogere verdiepingen kan dit zakken naar 2 tot 3 bar.',
  },
  {
    question: 'Heb ik een drukverhoger nodig voor mijn osmosefilter?',
    answer:
      'Een drukverhoger (boosterpump) is aanbevolen wanneer uw statische waterdruk lager is dan 3,5 bar, of wanneer de dynamische druk tijdens gebruik onder 2,8 bar zakt. Dit is vaak het geval op hoge verdiepingen in flats, bij eigen bronnen of bij woningen aan het einde van een lange leidingstreng. Kwalitatieve osmosesystemen worden geleverd met een ingebouwde 12V DC boosterpomp die de druk verhoogt tot 6 tot 8 bar.',
  },
  {
    question: 'Wat gebeurt er als de waterdruk te laag is voor osmose?',
    answer:
      'Bij te lage druk daalt de watercapaciteit (uitgedrukt in gallons per dag, GPD) kwadratisch. Concreet: bij halvering van de werkdruk van 4 naar 2 bar zakt de productie tot minder dan een kwart. Tegelijkertijd stijgt de afvalwaterverhouding van de typische 2:1 naar 4:1 of hoger, wat betekent dat het systeem voor elke liter schoon water vier liter afvoert. Ook veroudert het membraan sneller door ongelijkmatige belasting.',
  },
  {
    question: 'Werkt osmose op een hoge verdieping in een flat?',
    answer:
      'Dat hangt af van de waterdruk op uw verdieping. Hoe hoger u woont, hoe lager de druk: voor elke 10 meter hoogte neemt de druk af met circa 1 bar. Op de vierde verdieping (circa 12 meter) kan de druk al 1,2 bar lager zijn dan op straatniveau. Met een boosterpomp werkt osmose op vrijwel elke verdieping. Kies bij twijfel een osmosesysteem dat standaard een boosterpomp heeft.',
  },
  {
    question: 'Werkt osmose met een eigen bron of waterput?',
    answer:
      'Eigen bronnen en putten hebben vaak een variabele druk afhankelijk van de pomp en de hoogte van het waterreservoir. Bronwaterpompen leveren typisch 2 tot 5 bar, maar de druk kan fluctueren. Meet de druk op het aansluitpunt voor het osmosesysteem. Bij druk onder 3 bar is een drukverhoger sterk aanbevolen. Let ook op het suspended-solids-gehalte van bronwater: een sedimentprefilter is essentieel om het RO-membraan te beschermen.',
  },
  {
    question: 'Wat is de voorgeladen druk van de druktank?',
    answer:
      'De opslagtank van een osmosesysteem is een drukvat met een luchtblaas. De voorgeladen luchtdruk (pre-charge) dient ingesteld te zijn op circa 0,7 maal de systeemwerkdruk, doorgaans 0,5 tot 0,7 bar. Te hoge voorlading verhindert dat de tank voldoende water opslaat; te lage voorlading leidt tot vroegtijdige afsluiting van de aanmaakklep. Controleer en stel de pre-charge in wanneer het systeem leeg is, via een Schrader-ventiel op de tank.',
  },
  {
    question: 'Gebruiken tankloze osmosesystemen ook waterdruk?',
    answer:
      'Tankloze (direct flow) osmosesystemen hebben een ingebouwde boosterpomp en zijn minder afhankelijk van de inlaatdruk, maar ze hebben nog steeds minimaal 1,5 tot 2 bar inlaatdruk nodig om de pomp correct te starten. Ze produceren water direct op aanvraag zonder opslagtank, wat de responstijd iets vertraagt bij hoge afname. Hun vermogen varieert van 50 tot 600 GPD afhankelijk van het model en de druk.',
  },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
    { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
    { '@type': 'ListItem', position: 3, name: 'Waterdruk voor osmosefilter', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/druk' },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterdruk voor omgekeerde osmose: minimum, meten en drukverhoger',
  description:
    'Een omgekeerde osmose filter heeft minimaal 2,8 bar waterdruk nodig. Bij lagere druk daalt de capaciteit en stijgt het afvalwaterpercentage. Compleet overzicht van druk meten, drukverhoger en tankdruk.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/druk',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterdrukPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link> &rsaquo;{' '}
          <span>Waterdruk voor osmosefilter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterdruk voor omgekeerde osmose: minimum, meten en drukverhoger
          </h1>
          <p className="text-[#005F8A] text-lg">
            Waterdruk is de drijvende kracht achter elk omgekeerde osmose systeem. Te lage druk
            betekent minder schoon water, hogere afvalwaterverhouding en vroegtijdige slijtage
            van het membraan. In dit artikel leest u hoeveel druk u nodig heeft, hoe u dit thuis
            meet en wanneer een drukverhoger de oplossing is.
          </p>
        </section>

        <QuickAnswer answer="Omgekeerde osmose heeft minimaal 2,8 bar dynamische waterdruk nodig, optimaal 4 tot 6 bar. Nederlands leidingwater levert 2,5 tot 6 bar afhankelijk van locatie en verdieping. Bij druk onder 3,5 bar is een drukverhoger (boosterpomp, 10-20W) aanbevolen. Eigen bronnen en hoge verdiepingen hebben vrijwel altijd een drukverhoger nodig." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werken omgekeerde osmose en waterdruk samen?
        </h2>
        <p className="text-gray-700 mb-4">
          Bij omgekeerde osmose wordt water onder druk door een semi-permeabel membraan geperst.
          Water passeert het membraan; opgeloste stoffen (zouten, zware metalen, nitraten) worden
          tegengehouden en afgevoerd via het concentraat. Dit proces verloopt tegen de osmotische
          druk in, vandaar de naam "omgekeerde osmose".
        </p>
        <p className="text-gray-700 mb-4">
          De osmotische druk van Nederlands leidingwater bedraagt circa <strong>0,5 tot 0,8 bar</strong>,
          afhankelijk van de totaal opgeloste stoffen (TDS). Om het membraan effectief te laten
          werken, moet de voedingsdruk de osmotische druk overstijgen plus een werkoverdruk voor
          voldoende doorstroom. Dit leidt tot de praktische minimumdruk van <strong>2,8 bar</strong>.
        </p>
        <p className="text-gray-700 mb-6">
          De optimale werkdruk voor de meeste thuissystemen ligt tussen <strong>4 en 6 bar</strong>.
          Boven 6 bar neemt de verwijderingsefficiency nauwelijks verder toe maar stijgt de
          belasting op het membraan en de aansluitingen. De meeste systemen zijn voorzien van
          een drukbegrenzingsventiel dat de maximale druk beperkt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterdruk in Nederlandse woningen: wat kunt u verwachten?
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland is de leveringsdruk van drinkwaterbedrijven wettelijk vastgelegd. Aan de
          perceelsgrens bedraagt de minimale leveringsdruk doorgaans 1,5 tot 2 bar, maar in de
          praktijk is de druk op het aansluitpunt in de woning aanzienlijk hoger:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Begane grond, stedelijk gebied:</strong> typisch 3,5 tot 5,5 bar statisch.
            In de meeste gevallen voldoende voor osmose zonder drukverhoger
          </li>
          <li>
            <strong>Eerste en tweede verdieping:</strong> circa 3 tot 4,5 bar. Meestal voldoende,
            maar dynamische druk tijdens gebruik kan afnemen tot 2,5 tot 3 bar
          </li>
          <li>
            <strong>Hogere verdiepingen (derde en hoger):</strong> druk neemt af met circa
            0,1 bar per meter hoogte boven het meetpunt. Op de vierde verdieping (circa 12 meter)
            kan de druk al 1,2 bar lager zijn dan op de begane grond
          </li>
          <li>
            <strong>Landelijk gebied of einde leidingstreng:</strong> druk kan lager zijn vanwege
            langere leidinglengtes en hoogteverschillen; meting is hier extra belangrijk
          </li>
          <li>
            <strong>Eigen bron of put:</strong> sterk variabel, afhankelijk van pomptype en
            hoogtereservoir; kan varieren van 1,5 tot 5 bar
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterdruk thuis meten: stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          Het meten van de waterdruk is eenvoudig en kost weinig tijd. U heeft een manometer
          nodig met een aansluiting die past op de flexibele toevoerslang onder uw gootsteen.
          Manometers zijn beschikbaar bij bouwmarkten voor circa 10 tot 25 euro.
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Sluit alle kranen</strong> in de woning. Schakel de wasmachine en vaatwasser
            uit zodat er geen waterverbruik is
          </li>
          <li>
            <strong>Sluit de manometer aan</strong> op de koudwateraansluiting onder de gootsteen,
            of op een lege slangaansluiting op de kraan
          </li>
          <li>
            <strong>Lees de statische druk af</strong> met alle kranen gesloten. Dit is de
            maximale beschikbare druk; typisch 0,5 tot 1 bar hoger dan de dynamische druk
          </li>
          <li>
            <strong>Open een kraan op de bovenste verdieping</strong> of op een ver punt van de
            woning. Lees nu de dynamische druk af op de manometer. Dit is de relevante druk
            voor uw osmosefilter tijdens normaal gebruik
          </li>
          <li>
            <strong>Interpreteer het resultaat:</strong> dynamische druk boven 3,5 bar is
            voldoende voor de meeste osmosesystemen; tussen 2,8 en 3,5 bar is werkbaar maar
            een drukverhoger verbetert de prestaties significant; onder 2,8 bar is een
            drukverhoger noodzakelijk
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Drukverhoger (boosterpomp) voor osmose: wanneer en welke?
        </h2>
        <p className="text-gray-700 mb-4">
          Een drukverhoger of boosterpomp compenseert te lage inlaatdruk door het water actief
          op te pompen voor het membraan. De meeste osmose boosterpompen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Spanning:</strong> 12V DC, aangedreven via de meegeleverde adapter</li>
          <li><strong>Vermogen:</strong> 10 tot 20 watt; zeer zuinig in gebruik</li>
          <li><strong>Pompbereik:</strong> verhoogt druk van typisch 2 naar 5 tot 8 bar</li>
          <li><strong>Regeling:</strong> automatische start bij opening van de osmosekraan;
          sommige modellen hebben een verstelbaar drukbereik</li>
          <li><strong>Levensduur:</strong> gemiddeld 5 tot 10 jaar bij normaal gebruik</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Een drukverhoger is aanbevolen in de volgende situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Statische waterdruk lager dan 3,5 bar</li>
          <li>Woonsituatie op de derde verdieping of hoger in een flatgebouw</li>
          <li>Gebruik van een eigen waterput of bron</li>
          <li>Locatie aan het einde van een lang leidingnetwerk in landelijk gebied</li>
          <li>Osmosesysteem met hoge productiecapaciteit (boven 200 GPD) waarbij debiet prioriteit heeft</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterprestaties versus waterdruk: de relatie in cijfers
        </h2>
        <p className="text-gray-700 mb-4">
          De relatie tussen druk en filterprestatie is niet lineair maar kwadratisch voor de
          volumestroom. De onderstaande tabel illustreert de typische prestaties van een
          standaard 75 GPD thuissysteem bij verschillende voedingsdrukken:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Voedingsdruk (bar)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Productie (liter/dag)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Afvalwaterverhouding</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Beoordeling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">6,0 bar</td>
                <td className="border border-gray-300 px-3 py-2">~280 liter</td>
                <td className="border border-gray-300 px-3 py-2">1,5:1</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Optimaal</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">4,0 bar</td>
                <td className="border border-gray-300 px-3 py-2">~190 liter</td>
                <td className="border border-gray-300 px-3 py-2">2:1</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Goed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2,8 bar</td>
                <td className="border border-gray-300 px-3 py-2">~130 liter</td>
                <td className="border border-gray-300 px-3 py-2">3:1</td>
                <td className="border border-gray-300 px-3 py-2 text-amber-600 font-medium">Acceptabel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">2,0 bar</td>
                <td className="border border-gray-300 px-3 py-2">~65 liter</td>
                <td className="border border-gray-300 px-3 py-2">5:1</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Onvoldoende</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">&lt;1,5 bar</td>
                <td className="border border-gray-300 px-3 py-2">Minimaal</td>
                <td className="border border-gray-300 px-3 py-2">&gt;8:1</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Niet functioneel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Druktank en voorlading: hoe stelt u dit in?
        </h2>
        <p className="text-gray-700 mb-4">
          De opslagtank van een osmosesysteem is een drukvat met een rubberen membraan dat de
          lucht scheidt van het water. De voorgeladen luchtdruk (pre-charge pressure) bepaalt
          hoeveel water de tank effectief kan opslaan. Een verkeerde pre-charge-instelling
          leidt tot slechte tankprestaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Te hoge pre-charge:</strong> de tank slaat te weinig water op; de kraan
            levert na een paar glazen al onvoldoende debiet totdat de tank bijgevuld is
          </li>
          <li>
            <strong>Te lage pre-charge:</strong> het membraan wordt samengedrukt voordat de
            aanmaakklep sluit; de effectieve tankinhoud is kleiner dan de nominale waarde
          </li>
          <li>
            <strong>Aanbevolen instelling:</strong> 0,7 maal de systeemwerkdruk; bij een
            osmosesysteem op 4 bar is dat 2,8 bar pre-charge; bij een systeem met boosterpump
            op 5,5 bar is dat circa 3,8 bar
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Controleer en stel de pre-charge in met de tank volledig leeg (osmosekraan open,
          alle water laten afvloeien). Gebruik een fietspomp of compressor op het Schrader-ventiel
          aan de onderzijde van de tank. Lees meer over{' '}
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">osmosefilter onderhoud</Link>{' '}
          voor een compleet onderhoudsschema inclusief tankcontrole.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterdruk en osmosefilter
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">osmosefilter onderhoud</Link>,{' '}
          <Link href="/omgekeerde-osmose/installatie" className="text-[#005F8A] underline">osmosefilter installeren</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
