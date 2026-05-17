import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterdruk voor osmosefilter: minimale en maximale druk uitgelegd',
  description: 'Een osmosefilter heeft minimaal 2,8 bar waterdruk nodig. Te lage druk = trage productie. Ontdek hoe u de waterdruk meet, verhoogt en wat de optimale druk is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/waterdruk' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel waterdruk heb ik nodig voor een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter vereist minimaal 2,8 bar (40 psi) invoerdruk om te functioneren. De optimale druk ligt tussen 4 en 6 bar (60-85 psi). Bij de minimumdruk is de productie traag en de afvalwaterverhouding ongunstig. De meeste Nederlandse woningen hebben een leidingdruk van 3,5-6 bar, wat voor de meeste systemen voldoende is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe meet ik de waterdruk in mijn huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koop een waterdrukmanometer met 3/4 inch schroefdraad (€10-20 bij een bouwmarkt). Sluit deze aan op een buitenkraan of op de afsluiter onder de gootsteen. Open de kraan volledig en lees de druk af. Meet bij voorkeur op het moment dat er ook elders in huis water gebruikt wordt (douche, toilet) om de werkdruk onder belasting te kennen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn osmosefilter produceert te langzaam -- ligt dat aan de waterdruk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, lage waterdruk is een veelvoorkomende oorzaak van trage productie. Bij 3 bar produceert een 50 GPD membraan slechts 100-120 liter per dag in plaats van de nominale 190 liter. Controleer ook: is de opslagtank vol (dan stopt de productie), zijn de prefilters verstopt, of is het membraan versleten? Meet de TDS om de membraanstaat te beoordelen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik als mijn waterdruk te laag is voor een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U heeft twee opties: (1) installeer een drukverhogingspomp (€80-200) tussen de watertoevoer en de osmose-unit, of (2) kies een osmosesysteem met ingebouwde boosterpomp. Een drukverhogingspomp verhoogt de druk naar 4-5 bar en lost het productieprobleem volledig op. Dit is de standaardoplossing voor woningen op hoge etages of met verouderd leidingwerk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een drukverhogingspomp voor een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een drukverhogingspomp (ook boosterpomp of permeaatpomp genoemd) vergroot de waterdruk voor het RO-membraan. Dit verhoogt de productie, verbetert de rejection rate en verlaagt de afvalwaterverhouding. Kosten: €80-200 voor een externe pomp. Veel moderne osmosesystemen hebben een ingebouwde boosterpomp. Installatie is eenvoudig: de pomp wordt in de aanvoerleiding geplaatst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een osmosefilter gebruiken op een hoge etage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar waterdruk daalt met circa 0,1 bar per meter hoogteverschil. Op de vierde verdieping (circa 12 meter) is de druk al 1,2 bar lager dan op de begane grond. Als de druk op uw verdieping minder dan 3 bar is, heeft u een drukverhogingspomp nodig. Meet de druk eerst voordat u investeert in een osmosesysteem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de optimale druk voor mijn RO-membraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De optimale invoerdruk voor een huishoudelijk RO-membraan is 4-6 bar (60-85 psi). Bij deze druk haalt het membraan de nominale productiecapaciteit en een rejection rate van 95-99%. Hogere druk (tot 8 bar) verhoogt de productie licht maar vergroot ook de slijtage. Boven 8 bar: drukreducer verplicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een permeaatpomp en heb ik die nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een permeaatpomp (niet te verwarren met een boosterpomp) gebruikt de energie van het afvalwater om de druk in het systeem te verbeteren. Het voordeel is dat de afvalwaterverhouding drastisch verbetert: van 4 liter afval per liter productwater naar circa 1:1. Een permeaatpomp verbruikt geen stroom (hydraulisch principe). Aanbevolen bij systemen met voldoende ingangsdruk maar hoog afvalwatergebruik.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterdruk voor osmosefilter: minimale en maximale druk uitgelegd',
  description: 'Een osmosefilter heeft minimaal 2,8 bar waterdruk nodig. Te lage druk = trage productie. Ontdek hoe u de waterdruk meet, verhoogt en wat de optimale druk is.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/waterdruk',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterdrukPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Waterdruk osmosefilter', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/waterdruk' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link> &rsaquo;{' '}
          <span>Waterdruk osmosefilter</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterdruk voor osmosefilter: minimale en maximale druk uitgelegd
        </h1>

        <QuickAnswer answer="Een osmosefilter vereist minimaal 2,8 bar waterdruk. Optimaal is 4-6 bar. Te lage druk geeft trage productie en slechte filtratie. Nederlandse leidingdruk is gemiddeld 3,5-6 bar. Op hoge etages of in oude woningen kunt u een drukverhogingspomp (€80-200) nodig hebben. Maximale druk: 8 bar, anders membraanschade." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Drukspecificaties voor een osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          Het RO-membraan werkt op basis van druk: water wordt onder druk door het semi-permeabele membraan gedwongen, terwijl verontreinigingen worden tegengehouden. Zonder voldoende druk functioneert het systeem niet goed. De belangrijkste drukwaarden:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Waarde (bar)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Waarde (psi)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Minimale invoerdruk</td>
                <td className="border border-gray-300 px-3 py-2">2,8 bar</td>
                <td className="border border-gray-300 px-3 py-2">40 psi</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Optimale invoerdruk</td>
                <td className="border border-gray-300 px-3 py-2">4-6 bar</td>
                <td className="border border-gray-300 px-3 py-2">60-85 psi</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Maximale invoerdruk</td>
                <td className="border border-gray-300 px-3 py-2">8 bar</td>
                <td className="border border-gray-300 px-3 py-2">120 psi</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nederlandse leidingdruk (gemiddeld)</td>
                <td className="border border-gray-300 px-3 py-2">3,5-6 bar</td>
                <td className="border border-gray-300 px-3 py-2">50-85 psi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          De meeste Nederlandse woningen hebben een leidingdruk die ruimschoots boven de minimumdruk ligt. Uitzondering: woningen op hoge etages, oude woningen met verouderd leidingwerk en woningen aan het einde van een lange leidingtak in de buurt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Effect van waterdruk op de productie
        </h2>
        <p className="text-gray-700 mb-4">
          Waterdruk heeft een direct effect op hoeveel water het osmosesysteem per dag produceert. Dit effect is aanzienlijk:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Invoerdruk</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Productie 50 GPD membraan</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4 bar (optimaal)</td>
                <td className="border border-gray-300 px-3 py-2">~180 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">Nominale capaciteit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">3 bar</td>
                <td className="border border-gray-300 px-3 py-2">100-120 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">60% van nominaal</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2,5 bar</td>
                <td className="border border-gray-300 px-3 py-2">60-80 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">Praktisch onvoldoende</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">6 bar</td>
                <td className="border border-gray-300 px-3 py-2">~220 L/dag</td>
                <td className="border border-gray-300 px-3 py-2">Hogere productie</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Een halvering van de druk leidt dus tot een productiedaling van maar liefst 60%. Dit verklaart waarom bewoners op hoge etages of in woningen met verouderd leidingwerk klagen over een langzaam producerende osmosefilter.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe waterdruk meten?
        </h2>
        <p className="text-gray-700 mb-4">
          Het meten van uw huisdruk is eenvoudig en kosteneffectief:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Koop een waterdrukmanometer met 3/4 inch schroefdraad (bij de bouwmarkt voor €10-20)</li>
          <li>Sluit hem aan op een buitenkraan of de afsluiter onder de keukengootsteen</li>
          <li>Open de kraan volledig en lees de druk af</li>
          <li>Meet ook terwijl elders in huis water wordt gebruikt (douche, toilet spoelen) om de werkdruk onder belasting te kennen</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Sommige hoogwaardige osmosesystemen hebben een ingebouwde manometer. Dit maakt monitoring eenvoudig en geeft u direct zicht op drukschommelingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Lage waterdruk oplossen
        </h2>
        <p className="text-gray-700 mb-4">
          Als uw waterdruk onder de 3 bar ligt, zijn er vier oorzaken en bijbehorende oplossingen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Hoge etage:</strong> waterdruk daalt circa 0,1 bar per meter hoogteverschil. Op de vierde verdieping (12 meter) verliest u 1,2 bar. Oplossing: drukverhogingspomp installeren.
          </li>
          <li>
            <strong>Verouderd leidingwerk:</strong> kalkafzetting in oude koperen of stalen leidingen vermindert de doorstroomdiameter en daarmee de druk. Oplossing: leidingen laten reinigen of vervangen, of een boosterpomp plaatsen.
          </li>
          <li>
            <strong>Gelijktijdig watergebruik:</strong> als bad, douche en keuken tegelijk water gebruiken, daalt de druk tijdelijk. De osmosefilter vult zijn tank op rustige momenten bij. Geen directe actie nodig tenzij de druk ook zonder gelijktijdig gebruik te laag is.
          </li>
          <li>
            <strong>Drukverhogingspomp (boosterpomp):</strong> een externe pomp (€80-200) installeert u tussen de watertoevoer en de osmose-unit. De pomp verhoogt de druk naar 4-5 bar, ongeacht de huisdruk. Dit is de standaardoplossing bij structureel lage druk.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Permeaatpomp: minder afvalwater, meer efficiency
        </h2>
        <p className="text-gray-700 mb-4">
          Een permeaatpomp is een hydraulisch apparaat dat geen stroom verbruikt maar de energie van het afvalwater gebruikt om de tegendruk van de opslagtank te compenseren. De voordelen zijn aanzienlijk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Afvalwaterverhouding verbetert van 4:1 (4 liter afval per 1 liter product) naar circa 1:1</li>
          <li>Productie verbetert, ook bij voldoende invoerdruk</li>
          <li>Geen stroomverbruik (hydraulisch principe)</li>
          <li>Stille werking</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een permeaatpomp is aan te raden bij alle systemen die meer dan 5 liter drinkwater per dag produceren. De installatie is eenvoudig en de terugverdientijd is kort door het lagere waterverbruik.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Te hoge waterdruk: risico op membraanschade
        </h2>
        <p className="text-gray-700 mb-4">
          Net als te lage druk is te hoge druk een probleem. Bij een invoerdruk van meer dan 8 bar is het risico op de volgende schade aanwezig:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Membraanschade door overdruk (de dunne filmlaag van het membraan kan scheuren)</li>
          <li>Lekkage bij fittingen en verbindingen</li>
          <li>Beschadiging van de opslagtank</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bij een leidingdruk boven de 8 bar installeert u een <strong>drukreducer</strong> in de aanvoerlijn. Drukreducers zijn goedkoop (€30-70) en worden ingesteld op de gewenste druk.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tankdruk: vergeten maar belangrijk
        </h2>
        <p className="text-gray-700 mb-4">
          De opslagtank van een osmosesysteem bevat een lucht- of stikstofblaas met een voordruk van 0,3-0,5 bar. Deze voordruk bepaalt hoe effectief het water uit de tank wordt geleverd aan de kraan. Controleer de tankdruk bij:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Installatie van een nieuw systeem</li>
          <li>Klachten over lage waterstroom bij de kraan</li>
          <li>Na een lange periode zonder gebruik</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meet de tankdruk met een gewone fietspompmanometer via het ventiel op de onderzijde van de tank (water eerst aftappen). Is de druk hoger dan 0,5 bar, dan remt dit de productie omdat het membraan harder moet werken om de tank te vullen. Breng de druk terug naar 0,3-0,4 bar.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterdruk en osmosefilter</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose/membraan-vervangen" className="text-[#005F8A] underline">RO-membraan vervangen</Link> en{' '}
          <Link href="/osmose-filter/vervangen" className="text-[#005F8A] underline">osmosefilter filters vervangen</Link>.
        </p>
      </main>
    </>
  );
}
