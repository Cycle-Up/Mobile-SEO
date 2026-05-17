import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe lang duurt regeneratie waterontharder? Tijdgestuurde vs volumetrisch',
  description:
    'Regeneratie van een waterontharder duurt 1-2 uur. Tijdgestuurde ontharders regenereren op vaste tijden; volumetrische systemen regenereren op basis van.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/regeneratie-tijd' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe lang duurt een regeneratiecyclus van een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een complete regeneratiecyclus duurt gemiddeld 60-120 minuten. De cyclus bestaat uit vier fasen: backwash (5-10 minuten), pekel inlaten (20-30 minuten), langzame spoeling (30-45 minuten) en snelle spoeling (5-10 minuten). De exacte duur hangt af van het merk, het harssvolume en de ingestelde regeneratieparameters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen tijdgestuurde en volumetrische regeneratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tijdgestuurde ontharders regenereren op vaste tijdstippen, ongeacht hoeveel water er verbruikt is. Dit is eenvoudig maar kan leiden tot onnodige regeneraties bij laag verbruik. Volumetrische (vraaggestuurde) systemen tellen het waterverbruik via een watermeter en regenereren alleen als de harscapaciteit daadwerkelijk uitgeput raakt. Dit bespaart 20-30% zout en water ten opzichte van tijdgestuurd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer kan ik geen zacht water gebruiken tijdens regeneratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een standaard simplex waterontharder (een enkelvoudig harssysteem) is er geen zacht water beschikbaar tijdens de regeneratiecyclus van 60-120 minuten. Stel regeneratie in op tijden dat u geen water gebruikt, zoals midden in de nacht (02:00-04:00). Een duplex-systeem heeft twee harskolommen en kan continu zacht water leveren doordat een tank regenereert terwijl de andere in gebruik is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel water verbruikt een regeneratiecyclus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een regeneratiecyclus verbruikt 50-200 liter water, afhankelijk van de systeemgrootte en de ingestelde spoelvolumes. Per jaar betekent dit 2.500-10.000 liter extra waterverbruik voor regeneratie. Kleinere huishoudelijke ontharders gebruiken aan de onderkant (50-80 liter per regeneratie), grotere systemen of ontharders met veel hars meer. Volumetrische systemen regenereren minder frequent en verbruiken daardoor minder totaalwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak moet een waterontharder regenereren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De regeneratiefrequentie hangt af van waterverbruik en lokale waterhardheid. In gebieden met hard water (Frans-Vlaanderen, Brabant, Limburg) en een gezin van 4 personen kan dat 2-3 keer per week zijn. Bij zacht water en laag verbruik kan een keer per week voldoende zijn. Te frequent regenereren verspilt zout; te zelden regenereren leidt tot hard water bij piekverbruik, zoals bij logees of een vaatwasser en wasmachine tegelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is het veilig om water te gebruiken uit een waterontharder die net geregenereerd heeft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, direct na regeneratie is het water van een waterontharder veilig en effectief zacht. Het pekelwater dat tijdens de regeneratie door de hars stroomt, wordt volledig weggespoeld in de laatste spoelfase. Na de regeneratiecyclus is de hars volledig hersteld (geladen met natriumionen) en klaar voor gebruik. Het geregenereerde water bevat iets meer natrium dan niet-onthard water, wat voor gezonde volwassenen geen probleem is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de kosten van regeneratie per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De jaarlijkse kosten van regeneratie bestaan uit zout (zoutblokken of zoutkorrels, circa 8-15 cent per kilogram) en extra waterverbruik. Een gemiddeld huishouden verbruikt 100-200 kilogram regeneratiezout per jaar bij 2-3 regeneraties per week, wat neerkomt op 15-30 euro aan zoutkosten. Het extra waterverbruik (2.500-10.000 liter per jaar) kost circa 5-20 euro per jaar bij een gemiddeld watertarief. Totale regeneratiekosten: 20-50 euro per jaar voor een gemiddeld huishouden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik de regeneratietijd zelf instellen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, bij de meeste waterontharders kunt u de regeneratietijd en -frequentie zelf instellen via het bedieningspaneel. Stel bij tijdgestuurde systemen de regeneratie in op 02:00-04:00 uur om overlast overdag te vermijden. Stel de frequentie in op basis van uw werkelijk waterverbruik en de lokale hardheid. Raadpleeg de handleiding van uw ontharder of de installateur voor de optimale instellingen voor uw specifieke situatie.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Hoe lang duurt regeneratie waterontharder? Tijdgestuurde vs volumetrisch',
  description:
    'Regeneratie van een waterontharder duurt 60-120 minuten en bestaat uit backwash, pekel inlaten, langzame en snelle spoeling. Volumetrische systemen besparen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/regeneratie-tijd',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterOntharderRegeneratietijdPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Regeneratietijd', item: 'https://waterfilterplatform.nl/waterontharder/regeneratie-tijd' },
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
          <span>Regeneratietijd</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Hoe lang duurt regeneratie waterontharder? Tijdgestuurde vs volumetrisch
          </h1>
          <p className="text-[#005F8A] text-lg">
            Regeneratie van een waterontharder duurt 60-120 minuten en herstelt de ionenwisselende
            harscapaciteit. Tijdgestuurde systemen regenereren op vaste tijden; volumetrische
            systemen regenereren alleen als nodig en besparen 20-30% zout en water.
          </p>
        </section>

        <QuickAnswer answer="Een regeneratiecyclus duurt 60-120 minuten in vier fasen: backwash, pekel inlaten, langzame en snelle spoeling. Tijdgestuurde ontharders regenereren op vaste tijden ongeacht het verbruik. Volumetrische systemen regenereren op basis van werkelijk waterverbruik en besparen 20-30% op zoutverbruik en afvalwater." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is regeneratie en waarom is het nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link>{' '}
          onthardt water via ionenwisseling: harskorreltjes beladen met natriumionen (Na+) ruilen
          die uit met calcium- (Ca2+) en magnesiumionen (Mg2+) uit het harde water. Na verloop
          van tijd zijn alle Na+-posities op de hars bezet door Ca2+ en Mg2+ &mdash; de hars
          is verzadigd en werkt niet meer. <strong>Regeneratie</strong> herstelt de harscapaciteit
          door de Ca2+ en Mg2+ te vervangen door Na+ via een pekeloplossing.
        </p>
        <p className="text-gray-700 mb-6">
          Zonder tijdige regeneratie levert de ontharder <strong>onvoldoende zacht water</strong>,
          wat leidt tot kalkvorming in leidingen, verwarmingselementen, ketel en huishoudelijke
          apparaten. Regelmatige en correct ingestelde regeneratie is dus essentieel voor de
          effectiviteit en levensduur van uw ontharder.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De vier fasen van een regeneratiecyclus
        </h2>
        <p className="text-gray-700 mb-4">
          Een complete regeneratiecyclus bestaat uit vier opeenvolgende fasen:
        </p>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C]">Fase 1: Backwash (5-10 minuten)</h3>
            <p className="text-gray-700 text-sm mt-1">
              Water stroomt van onder naar boven door de harscilinder. Dit spoelt opgehoopt
              vuil, ijzerdeeltjes en samengeperste harskorreltjes weg. De hars wordt los
              geschud en klaargemaakt voor de pekelbehandeling. Afvalwater gaat rechtstreeks
              naar het riool.
            </p>
          </div>

          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C]">Fase 2: Pekel inlaten (20-30 minuten)</h3>
            <p className="text-gray-700 text-sm mt-1">
              Een geconcentreerde zoutoplossing (pekel, circa 200-300 gram zout per liter water)
              stroomt langzaam door de hars. De hoge natriumconcentratie verdringt de
              calcium- en magnesiumionen via ionenwisseling: Ca2+ en Mg2+ laten de harsposities
              los en worden vervangen door Na+. Dit is de kernfase van de regeneratie.
            </p>
          </div>

          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C]">Fase 3: Langzame spoeling (30-45 minuten)</h3>
            <p className="text-gray-700 text-sm mt-1">
              Schoon water spoelt langzaam het overtollige zout, calciumchloride (CaCl2) en
              magnesiumchloride (MgCl2) uit de hars. Deze fase duurt het langst en bepaalt
              grotendeels het totale waterverbruik van de regeneratie. Onvoldoende spoeling
              leidt tot een licht zoute nasmaak in het zachte water.
            </p>
          </div>

          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C]">Fase 4: Snelle spoeling (5-10 minuten)</h3>
            <p className="text-gray-700 text-sm mt-1">
              Een snelle doorspueling compacteert de harskorrels terug en verwijdert de laatste
              resten pekelwater. Na deze fase is de hars volledig hersteld, geladen met Na+ en
              klaar voor gebruik. De ontharder schakelt terug naar de dienstmodus.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          De volledige cyclus duurt <strong>60-120 minuten</strong> afhankelijk van het harssvolume
          en de ingestelde spoelvolumes. Grotere systemen met meer hars regenereren langer maar
          produceren ook meer zacht water per cyclus.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tijdgestuurde regeneratie: voor- en nadelen
        </h2>
        <p className="text-gray-700 mb-4">
          Bij tijdgestuurde ontharders stelt u van tevoren in op welke dagen en tijden de
          ontharder regenereert &mdash; bijvoorbeeld elke dinsdag en vrijdag om 02:00 uur.
          Het systeem regenereert op die momenten automatisch, ongeacht hoeveel water er
          werkelijk is verbruikt.
        </p>
        <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Voordelen</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>Eenvoudig in te stellen</li>
              <li>Goedkoper systeem</li>
              <li>Minder onderhoud</li>
              <li>Voorspelbaar gedrag</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">Nadelen</h3>
            <ul className="text-sm text-red-700 space-y-1">
              <li>Regenereert ook als hars niet verzadigd is</li>
              <li>Meer zoutverbruik (20-30% meer dan nodig)</li>
              <li>Meer afvalwater</li>
              <li>Kan hard water leveren bij onverwacht hoog verbruik (logees, vakantie)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Volumetrische (vraaggestuurde) regeneratie: slimmer en zuiniger
        </h2>
        <p className="text-gray-700 mb-4">
          Volumetrische ontharders meten continu het waterverbruik via een debietmeter. Op basis
          van het lokale hardheidsgehalte en het harssvolume berekent het systeem precies wanneer
          de hars verzadigd raakt &mdash; en regenereert dan pas.
        </p>
        <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Voordelen</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>20-30% minder zoutverbruik</li>
              <li>Minder afvalwater</li>
              <li>Past zich aan aan werkelijk verbruik</li>
              <li>Altijd optimale harscapaciteit</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">Nadelen</h3>
            <ul className="text-sm text-red-700 space-y-1">
              <li>Hogere aanschafprijs (&euro;100&ndash;200 meer)</li>
              <li>Iets complexere installatie</li>
              <li>Debietmeter vereist periodiek onderhoud</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Voor gezinnen met wisselend waterverbruik of in gebieden met zeer hard water (meer dan
          20 dH) verdient een volumetrisch systeem de hogere aanschafprijs terug via besparing
          op zout en water. Lees meer over{' '}
          <Link href="/waterontharder/zout-gebruik" className="text-[#005F8A] underline">zoutverbruik
          van waterontharders</Link> voor een uitgebreide kostenanalyse.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Simplex versus duplex: water tijdens regeneratie
        </h2>
        <p className="text-gray-700 mb-4">
          Een standaard <strong>simplex-ontharder</strong> heeft een enkele harscilinder. Tijdens
          de regeneratiecyclus levert deze geen zacht water: het water dat tijdens regeneratie
          wordt afgenomen is onbehandeld hard water. Dit is doorgaans geen probleem als de
          regeneratie midden in de nacht plaatsvindt.
        </p>
        <p className="text-gray-700 mb-6">
          Een <strong>duplex-systeem</strong> heeft twee harscilinders die afwisselend in dienst
          zijn. Terwijl de ene cilinder regenereert, levert de andere cilinder zacht water.
          Zo is er altijd zacht water beschikbaar &mdash; ideaal voor horeca, hotels of
          huishoudens met hoog en onregelmatig waterverbruik. Duplex-systemen zijn aanzienlijk
          duurder (&euro;1.000&ndash;3.000) maar bieden continue waterontharding.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regeneratietijd instellen: nachtmodus aanbevolen
        </h2>
        <p className="text-gray-700 mb-4">
          Stel de regeneratietijd in op <strong>02:00-04:00 uur</strong> &apos;s nachts. Dit heeft
          twee voordelen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            Tijdens de regeneratieduur van 60-120 minuten wordt geen zacht water afgenomen,
            want het huishouden slaapt. Er zijn geen klachten over hard water
          </li>
          <li>
            Sommige waterbedrijven hanteren een lager nachttarief of hebben minder belast
            distributienet &apos;s nachts, wat de spoelefficiency ten goede komt
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Stel voor tijdgestuurde systemen de frequentie in op basis van uw werkelijk verbruik
          en de lokale hardheid. Gebruik de handleiding of vraag uw{' '}
          <Link href="/waterontharder/installeren" className="text-[#005F8A] underline">installateur</Link>{' '}
          om de optimale instellingen te bepalen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterverbruik en kosten van regeneratie
        </h2>
        <p className="text-gray-700 mb-4">
          Regeneratie verbruikt aanzienlijk water voor het spoelen. Per regeneratiecyclus:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Klein huishoudelijk systeem (hars 8-15 liter): 50-80 liter per regeneratie</li>
          <li>Gemiddeld systeem (hars 15-25 liter): 80-120 liter per regeneratie</li>
          <li>Groot systeem (hars 25-40 liter): 120-200 liter per regeneratie</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Per jaar (aanname 2 regeneraties per week) geeft dit:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Klein systeem: 2 x 52 x 65 liter = circa 6.760 liter extra water per jaar</li>
          <li>Gemiddeld systeem: 2 x 52 x 100 liter = circa 10.400 liter extra water per jaar</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bij een gemiddeld waterprijs van &euro;1,50 per m3 kost dit &euro;10-16 per jaar.
          De zoutkosten (100-200 kg per jaar bij circa &euro;0,12/kg) komen uit op &euro;12-24.
          Totale regeneratiekosten voor een gemiddeld huishouden: <strong>&euro;20-40 per jaar</strong>.
          Meer details vindt u op onze pagina over{' '}
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">waterontharder
          regeneratie</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over regeneratietijd waterontharder
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
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">waterontharder regeneratie uitleg</Link>,{' '}
          <Link href="/waterontharder/zout-gebruik" className="text-[#005F8A] underline">zoutverbruik waterontharder</Link>,{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharders vergelijken</Link> en{' '}
          <Link href="/waterontharder/installeren" className="text-[#005F8A] underline">waterontharder installeren</Link>.
        </p>
      </main>
    </>
  );
}
