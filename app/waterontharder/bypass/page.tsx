import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder bypass: instelling, mengklep en wanneer hard water gewenst',
  description:
    'Een waterontharder bypass laat ongezacht water door voor situaties waar zacht water ongewenst is: tuin, buiten kraan, en menging voor drinkwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/bypass' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een waterontharder bypass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder bypass is een aansluiting die water om de waterontharder heen leidt, zodat ongezacht (hard) water direct naar een of meerdere aftappunten gaat. Dit kan een volledige bypass zijn (100% hard water) of een gedeeltelijke bypass via een mengklep, waarbij een instelbaar percentage hard en zacht water wordt gemengd tot de gewenste hardheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom moet de buitenkraan op bypass worden aangesloten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De buitenkraan moet op bypass worden aangesloten omdat zacht water slecht is voor de bodem bij langdurig gebruik. De waterontharder vervangt calcium en magnesium door natrium. Natrium is schadelijk voor de bodemstructuur: het verstoort de kleideeltjes en vermindert de doorlatendheid. Hard water bevat juist calcium en magnesium die de bodem en planten voeden. Bovendien bespaar je regeneratiezout als tuinwater niet door de ontharder hoeft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe stel ik de mengklep van mijn waterontharder in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Om de mengklep in te stellen, bepaal je eerst de gewenste eindwater hardheid (aanbevolen: 7 tot 12 dH). Meet vervolgens de hardheid van het inkomende leidingwater en stel de mengklep procentueel in. Als leidingwater 20 dH is en volledig onthard water 0 dH is, geeft een mengklep op 40% bypass een resultaat van circa 8 dH. Controleer het resultaat met een TDS-meter of hardheidsstrip en pas indien nodig aan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is zacht water slecht om te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Volledig onthard water bevat minder dan 5 mg/L calcium en hoge natriumgehaltes (afhankelijk van de oorspronkelijke hardheid). De EU-drinkwaterrichtlijn adviseert een minimum calciumgehalte van 60 mg/L voor drinkwater. Zacht water is ook corrosiever voor koperen leidingen. Voor drinkwater is een mengklep aanbevolen om de calciumconcentratie te handhaven op 60 tot 200 mg/L. Mensen met natriumbeperkt dieet moeten extra voorzichtig zijn met volledig onthard drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke types mengkleppen zijn er voor waterontharders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn drie hoofdtypen: (1) Simpele bypass-aftakking voor 100% bypass zonder menging, geschikt voor buitenkranen. (2) Procentuele mengklep (blending valve) die een instelbaar percentage hard en zacht water mengt, handmatig instelbaar. (3) Volumetrische mengklep met elektronische controller, zoals de BWT AQA life, die de mengverhouding automatisch regelt op basis van de gewenste eindwaterhardheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik energie besparen met een bypass in de zomer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in de zomer wanneer de CV-ketel weinig of niet wordt gebruikt, is er minder risico op kalkafzetting in verwarmingselementen. U kunt de bypass dan gedeeltelijk openen om minder water door de ontharder te sturen, wat zoutverbruik en regeneratiefrequentie vermindert. In de winter, wanneer de CV-ketel intensief wordt gebruikt, is volledige ontharding voor het verwarmingscircuit weer aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de optimale hardheid van drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO adviseert een calciumgehalte van 30 tot 200 mg/L in drinkwater, wat overeenkomt met circa 4 tot 28 dH. Voor de praktijk is een eindwater hardheid van 7 tot 12 dH (50 tot 85 mg/L calcium) een goed compromis: zacht genoeg om kalkproblemen te minimaliseren, maar met voldoende mineralen voor gezondheid en corrosiebescherming van leidingen. De exacte instelling hangt af van uw lokale leidingwaterhardheid.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder bypass: instelling, mengklep en wanneer hard water gewenst',
  description:
    'Een waterontharder bypass leidt water om de ontharder heen. Mengklep geeft instelbaarheid voor optimale drinkwatermineralen en tuinwater.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/bypass',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderBypassPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Bypass instelling', item: 'https://waterfilterplatform.nl/waterontharder/bypass' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Bypass instelling</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder bypass: instelling, mengklep en wanneer hard water gewenst
          </h1>
          <p className="text-[#005F8A] text-lg">
            Volledig zacht water is niet altijd de beste keuze. Een bypassaansluiting of mengklep
            laat u het beste van twee werelden combineren: zacht water voor douche en huishoudelijke
            apparaten, en hard of gemengd water voor tuin, drinkwater en corrosiebescherming.
          </p>
        </section>

        <QuickAnswer answer="Een waterontharder bypass leidt ongezacht water om de ontharder heen. Dit is nodig voor tuinwater (natrium is slecht voor bodem), drinkwater (EU-advies minimum 60 mg/L calcium) en energiebesparing. Een mengklep stelt u in op 7-12 dH eindwaterhardheid voor optimaal drinkwater." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is een waterontharder bypass?
        </h2>
        <p className="text-gray-700 mb-4">
          Een bypassaansluiting is een leiding die water om de waterontharder heen leidt naar
          een of meerdere aftappunten. Bij een <strong>volledige bypass</strong> gaat 100% van
          het water naar dat aftappunt zonder door de ontharder te gaan: het water blijft
          onbehandeld en behoudt zijn oorspronkelijke hardheid.
        </p>
        <p className="text-gray-700 mb-4">
          Een <strong>gedeeltelijke bypass</strong> via een mengklep mengt een instelbaar
          percentage hard en zacht water. Dit biedt veel meer flexibiliteit dan een volledige
          bypass: u kunt de eindwaterhardheid nauwkeurig instellen op de gewenste waarde voor
          drinkwater, terwijl de woning voor het overige nog profiteert van zacht water.
        </p>
        <p className="text-gray-700 mb-6">
          De bypass is een standaardonderdeel van de meeste waterontharderinstallaties. Bij
          de installatie wordt bepaald welke leidingen door de ontharder gaan (warm en koud
          water voor binnengebruik) en welke op bypass worden gezet (buitenkraan,
          drinkwaterpunt).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een bypass gewenst?
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          1. Tuin en buitenkranen
        </h3>
        <p className="text-gray-700 mb-4">
          Tuinwater moet altijd op bypass worden aangesloten. De reden is dat een
          waterontharder calcium en magnesium vervangt door natrium (het zout dat voor
          regeneratie wordt gebruikt). Natrium in tuinwater heeft de volgende nadelen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Bodemstructuur:</strong> bij langdurig gebruik verstoort natrium de
            structuur van kleibodem. Natriumionen verdringen calciumionen tussen kleiplaatjes,
            waardoor de klei zwelt en de doorlatendheid afneemt
          </li>
          <li>
            <strong>Plantenvoeding:</strong> calcium en magnesium zijn essentiele
            plantenvoedingsstoffen. Hard water levert deze gratis; zacht water niet
          </li>
          <li>
            <strong>Vijver en waterpartijen:</strong> hoge natriumgehaltes zijn schadelijk
            voor vissen en waterplanten
          </li>
          <li>
            <strong>Zoutverbruik:</strong> iedere liter tuinwater die door de ontharder gaat
            kost regeneratiezout. Een buitenkraan op bypass bespaart aanzienlijk
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          2. Drinkwater: calcium minimum
        </h3>
        <p className="text-gray-700 mb-4">
          Volledig onthard water bevat vrijwel geen calcium meer (minder dan 5 mg/L) en een
          verhoogd natriumgehalte. De <strong>EU-drinkwaterrichtlijn</strong> en de WHO
          adviseren een minimum calciumgehalte van <strong>60 mg/L</strong> in drinkwater.
          De redenen hiervoor zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Corrosiebescherming:</strong> zacht water is agressiever voor
            leidingen van koper en staal. Calcium en magnesium vormen een beschermende
            laag op het binnenpijpoppervlak
          </li>
          <li>
            <strong>Mineraleninname:</strong> drinkwater levert gemiddeld 10 tot 20% van
            de dagelijkse calcium- en magnesiuminname; volledig zacht water mist deze bijdrage
          </li>
          <li>
            <strong>Natriumgehalte:</strong> bij hoog inkomend hardheidswater (bijv. 25 dH in
            Limburg) bevat volledig onthard water meer dan 150 mg/L natrium, relevant voor
            mensen met hart- en vaatziekten of een natriumbeperkt dieet
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          3. Energiebesparing in de zomer
        </h3>
        <p className="text-gray-700 mb-6">
          In de zomer is de CV-ketel minder of niet actief. Het risico op kalkafzetting in
          verwarmingselementen is dan lager. Door de bypass in de zomermaanden gedeeltelijk
          te openen, wordt minder water door de ontharder gestuurd, wat het zout- en
          waterverbruik bij regeneratie vermindert. In de winter, wanneer de ketel intensief
          draait, is volledige ontharding voor het verwarmingscircuit weer aanbevolen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Types mengkleppen
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn drie hoofdcategorieen van bypass- en mengklepoplossingen:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Instelling</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Toepassing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Simpele aftakking</td>
                <td className="border border-gray-300 px-3 py-2">100% bypass, niet instelbaar</td>
                <td className="border border-gray-300 px-3 py-2">Buitenkraan, tuin</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Procentuele mengklep</td>
                <td className="border border-gray-300 px-3 py-2">0&ndash;100%, handmatig</td>
                <td className="border border-gray-300 px-3 py-2">Drinkwater, algemeen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Elektronische controller</td>
                <td className="border border-gray-300 px-3 py-2">Automatisch op doelhardheid</td>
                <td className="border border-gray-300 px-3 py-2">Professioneel, premium</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Elektronische controllers zoals de <strong>BWT AQA life</strong> meten continu
          de hardheid van het gemengde water en passen de mengverhouding automatisch aan.
          Dit is de meest comfortabele optie maar ook de duurste. Voor de meeste
          huishoudelijke toepassingen is een handmatige procentuele mengklep voldoende.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mengklep instellen: stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          Om de mengklep correct in te stellen voor de gewenste eindwaterhardheid van 7 tot
          12 dH (aanbevolen voor drinkwater), volgt u deze stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Meet de inkomende waterhardheid</strong> met een hardheidsstrip of TDS-meter.
            Noteer de waarde in dH of mg/L calcium. Vraag eventueel het jaarverslag van uw
            drinkwaterbedrijf op voor de exacte waarden in uw postcodegebied
          </li>
          <li>
            <strong>Bepaal de gewenste eindwaterhardheid:</strong> voor drinkwater is 7 tot 12 dH
            aanbevolen, voor het verwarmingscircuit zo laag mogelijk (ideaal 3 tot 6 dH)
          </li>
          <li>
            <strong>Bereken het bypasspercentage:</strong> als leidingwater 20 dH is en volledig
            onthard water 0 dH is, bereikt u 8 dH met een mengklep op 40% bypass
            (0,40 &times; 20 + 0,60 &times; 0 = 8 dH)
          </li>
          <li>
            <strong>Stel de mengklep in</strong> op het berekende percentage en meet na enkele
            minuten de werkelijke eindwaterhardheid
          </li>
          <li>
            <strong>Pas zo nodig bij</strong> en noteer de definitieve instelling voor toekomstig onderhoud
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Bij gebruik van een TDS-meter: een TDS-waarde van circa 200 tot 350 mg/L in het
          gemengde water komt overeen met een hardheid van 7 tot 12 dH, afhankelijk van de
          ionensamenstelling van uw leidingwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Combinatie met osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          Een combinatie van{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
          is de meest complete waterbehandelingsoplossing. De waterontharder verwijdert
          hardheid voor de gehele woning (beschermt apparatuur), het osmosefilter zorgt voor
          zuiver drinkwater aan de keukenkraan.
        </p>
        <p className="text-gray-700 mb-6">
          Bij deze combinatie kunt u het osmosefilter aansluiten op het verzachte water van
          de ontharder. Dit verlengt de levensduur van het RO-membraan aanzienlijk door
          scaling te voorkomen. Het osmosefilter verwijdert vervolgens ook het natrium dat
          door de ontharder is toegevoegd, zodat u puur en evenwichtig drinkwater krijgt.
          Via de remineralisatiefilter van het osmosesysteem worden dan optimale mineraalconcentraties
          teruggevoegd. Lees meer over{' '}
          <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] underline">
            remineralisatie na omgekeerde osmose
          </Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterontharder bypass
          </h2>
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder kopen</Link>,{' '}
          <Link href="/waterontharder/installeren" className="text-[#005F8A] underline">waterontharder installeren</Link>,{' '}
          <Link href="/waterontharder/zout" className="text-[#005F8A] underline">zout voor waterontharder</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: hart van de ontharder</h3>
              <p className="text-sm text-gray-600">Hoe de ionenwisseling werkt en waarom een bypass-leiding apart hard water levert voor planten en koken.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen voor drinkwater behouden</h3>
              <p className="text-sm text-gray-600">Waarom u kalk en mineralen voor drinkwater wilt behouden via een bypass.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
