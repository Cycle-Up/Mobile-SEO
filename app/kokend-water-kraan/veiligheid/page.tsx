import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kokend water kraan veiligheid: beveiliging, kinderen en normen',
  description:
    'Een kokend water kraan is veilig als hij voldoet aan EN 61770 en NEN 1006. Kinderbeveiliging (dubbelklik of knijpen+draaien), thermisch isolerende uitloop en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/veiligheid' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is een kokend water kraan veilig met jonge kinderen in huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, mits het model is uitgerust met een deugdelijke kinderbeveiliging. Kwalitatieve kokend water kranen vereisen een dubbelhandige activering: knijpen en draaien tegelijk, of een aparte activatieknop op de boilerunit. Dit maakt het voor jonge kinderen vrijwel onmogelijk om per ongeluk kokend water te activeren. Leg kinderen altijd uit dat de kraan gevaarlijk is en houd toezicht in de keuken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt de kinderbeveiliging van een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn drie systemen in gebruik. Het meest voorkomend is de druk-en-draai vergrendeling op de kraan zelf: u moet de hendel indrukken en tegelijk draaien. Een tweede systeem gebruikt een aparte activatieknop op de boiler onder het aanrecht. Een derde systeem voegt een timer met vertraging toe waardoor u twee handelingen in snelle volgorde moet uitvoeren. Quooker gebruikt het knijpen-en-draaien principe; PureAqua en de meeste andere merken hanteren een vergelijkbaar dubbel-actie systeem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke veiligheidsnorm geldt voor kokend water kranen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De belangrijkste norm is EN 61770, de Europese elektrische veiligheidsnorm voor aan de waterleiding aangesloten elektrische huishoudtoestellen. Daarnaast moet de installatie voldoen aan NEN 1006, de Nederlandse norm voor drinkwaterinstallaties. CE-markering is verplicht voor verkoop in de EU. Voor de Belgische markt geldt aanvullend het BDA-attest (Belgisch keuringsinstituut). Controleer altijd of het gekozen model CE-gecertificeerd is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik een kokend water kraan zelf installeren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wettelijk is zelf installeren voor particulieren niet verboden, maar het wordt sterk afgeraden. De installatie vereist een randaarde stopcontact (geaard), correcte bevestiging van de waterslang met stopper en het juiste toepassen van de elektrische aarding. Fouten kunnen leiden tot lekkage, elektrocutierisico of schade aan de boiler. Een erkend installateur biedt garantie op het werk en zorgt dat de installatie voldoet aan NEN 1006.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is de stoom die uit een kokend water kraan komt gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stoomvorming bij het uitschenken van kokend water is normaal en onvermijdelijk. De stoom zelf is niet gevaarlijk zolang u uw gezicht niet direct boven de uitloop houdt tijdens het schenken. Houd altijd minimaal 20 centimeter afstand. Een sproeikop geeft meer spatten dan een straalkop; voor de veiligste toepassing kiest u een model met een compacte straalkop die minder turbulentie veroorzaakt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Schakelt een kokend water kraan automatisch uit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, alle kwalitatieve modellen zijn uitgerust met automatische afschakeling. De boilerunit schakelt uit wanneer de tank leeg is, wanneer de maximale temperatuurdrempel wordt overschreden of wanneer de thermostaat een storing detecteert. Dit voorkomt overkoken, droogkoken van de boiler en overhitting van de elektrische componenten. Controleer bij aanschaf of het model beschikt over een NTC-thermistor of vergelijkbaar thermisch beveiligingssysteem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil in veiligheid tussen een kokend water kraan en een waterkoker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterkoker is een verplaatsbaar apparaat met een snoer, wat extra valrisico meebrengt: het snoer kan worden aangetrokken waardoor de koker omvalt. Een vaste kokend water kraan heeft geen snoer op het aanrecht en staat altijd op een vaste positie boven de gootsteen. Het nadeel is dat de kraan permanent elektrisch is aangesloten en altijd heet water onder druk bevat, wat hogere eisen stelt aan de installatie en de kinderbeveiliging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn er veiligheidsverschillen tussen kokend water kraan merken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, de kwaliteit van kinderbeveiliging, thermische isolatie van de uitloop en de automatische afschakeling verschilt per merk. Quooker staat bekend om een robuust knijpen-en-draai systeem en dubbelwandige uitloop. Budget-merken voldoen vaak aan de minimale EN 61770-eisen maar bieden minder verfijnde beveiligingssystemen. Let bij aanschaf op: CE-markering, type kinderbeveiliging, isolatiemateriaal van de uitloop en garantietermijn.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Kokend water kraan veiligheid: beveiliging, kinderen en normen',
  description:
    'Een kokend water kraan is veilig als hij voldoet aan EN 61770 en NEN 1006. Kinderbeveiliging, thermisch isolerende uitloop en automatische afschakeling zijn.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/veiligheid',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KokendWaterKraanVeiligheidPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Veiligheid', item: 'https://waterfilterplatform.nl/kokend-water-kraan/veiligheid' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link> &rsaquo;{' '}
          <span>Veiligheid</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan veiligheid: beveiliging, kinderen en normen
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een kokend water kraan levert water van 100 graden Celsius op aanvraag. Dat vraagt om
            serieuze veiligheidsmaatregelen. Kwalitatieve modellen voldoen aan EN&nbsp;61770 en
            NEN&nbsp;1006, beschikken over een dubbele kinderbeveiliging en schakelen automatisch
            uit bij storingen. Op deze pagina leest u wat de normen inhouden en hoe u de veiligste
            keuze maakt.
          </p>
        </section>

        <QuickAnswer answer="Een kokend water kraan is veilig bij CE-markering (EN 61770) en NEN 1006-installatie. Verplichte kinderbeveiliging (knijpen-en-draaien of dubbelklik), thermisch isolerende uitloop en automatische afschakeling voorkomen de meeste ongelukken. Installatie door erkend installateur wordt sterk aanbevolen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veiligheidsnormen voor kokend water kranen
        </h2>
        <p className="text-gray-700 mb-4">
          Voor kokend water kranen gelden specifieke Europese en Nederlandse normen. Het kennen van
          deze normen helpt u bij het vergelijken van modellen en het beoordelen van de
          installatievoorschriften.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>EN 61770:</strong> de Europese elektrische veiligheidsnorm voor huishoudtoestellen
            die op de waterleiding zijn aangesloten. Stelt eisen aan elektrische isolatie,
            overkokingsbeveiliging, thermische afschakeling en duurzaamheid van de verbindingen.
            Alle in de EU verkochte modellen moeten hieraan voldoen.
          </li>
          <li>
            <strong>CE-markering:</strong> verplicht voor verkoop in de Europese Unie. CE-markering
            bevestigt dat de fabrikant verklaart te voldoen aan de relevante EU-richtlijnen,
            waaronder EN 61770. Controleer altijd of het model een CE-markering heeft en vraag
            indien nodig om de conformiteitsverklaring.
          </li>
          <li>
            <strong>NEN 1006:</strong> de Nederlandse norm voor drinkwaterinstallaties. Stelt eisen
            aan de materialen die in contact komen met drinkwater, de verbindingen met de waterleiding
            en de installatiemethode. Een installatie die niet voldoet aan NEN 1006 kan worden
            afgekeurd door de drinkwatermaatschappij.
          </li>
          <li>
            <strong>BDA-attest:</strong> aanvullende Belgische keuring van het keuringsinstituut BCCA.
            Verplicht voor het op de Belgische markt brengen van waterinstallaties. Relevant voor wie
            in Belgie woont of een product voor de Belgische markt aanschaft.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Merken als Quooker, Grohe en Franke publiceren hun certificeringen op hun website. Vraag
          bij twijfel altijd om de technische documentatie. Zie ook onze vergelijkingspagina
          voor{' '}
          <Link href="/kokend-water-kraan/kopen" className="text-[#005F8A] underline">
            kokend water kraan kopen
          </Link>{' '}
          voor een overzicht van gecertificeerde modellen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kinderbeveiliging: drie typen systemen
        </h2>
        <p className="text-gray-700 mb-4">
          De kinderbeveiliging is het meest kritische veiligheidsaspect van een kokend water kraan.
          Op de markt zijn drie hoofdtypen beveiligingssystemen in gebruik:
        </p>

        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-2">Type 1: Druk-en-draai vergrendeling op de kraan</h3>
          <p className="text-gray-700 text-sm">
            De meest wijdverbreide methode. Om kokend water te activeren moet u de hendel
            indrukken en tegelijkertijd draaien. Dit vereist een gecoordineerde handeling die
            voor jonge kinderen niet uitvoerbaar is. Quooker hanteert een variant waarbij u de
            knop moet knijpen en draaien. PureAqua en de meeste andere merken gebruiken een
            vergelijkbaar dubbel-actie systeem.
          </p>
        </div>

        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-2">Type 2: Aparte activatieknop op de boilerunit</h3>
          <p className="text-gray-700 text-sm">
            Een tweede knop of schakelaar bevindt zich op de boiler onder het aanrecht.
            Alleen wanneer deze knop is ingedrukt, kan kokend water worden getapt via de kraan.
            Dit systeem voegt een fysieke barriere toe die niet zichtbaar is op het aanrecht.
            Nadeel: minder gebruiksvriendelijk voor dagelijks gebruik.
          </p>
        </div>

        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-2">Type 3: Timer met vertraging</h3>
          <p className="text-gray-700 text-sm">
            Een timer vereist dat u twee handelingen uitvoert binnen een bepaald tijdvenster,
            of juist met een minimale vertraging ertussen. Dit maakt het onmogelijk om per
            ongeluk kokend water te activeren met een enkele beweging. Dit systeem wordt
            minder vaak toegepast maar biedt een extra laag beveiliging.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verbrandingsrisico en thermische isolatie
        </h2>
        <p className="text-gray-700 mb-4">
          Kokend water van 100 graden Celsius veroorzaakt ernstige brandwonden in seconden.
          Thermisch isolerende uitlopen zijn een essentieel veiligheidsonderdeel. Er zijn twee
          materiaalkeuzes op de markt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Dubbelwandig roestvrij staal:</strong> de buitenwand wordt niet warm doordat de
            luchtlaag tussen de twee wanden als isolator werkt. Voelt veilig aan bij aanraking,
            maar intern stroomt kokend water. Professionele standaard bij topmerken.
          </li>
          <li>
            <strong>Silicone isolatiehuls:</strong> een alternatief dat goed isoleert maar minder
            duurzaam is dan dubbelwandig staal. Geschikt voor instapmodellen.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Naast de uitloop is de <strong>sproeikop versus straalkop</strong> een relevant veiligheidsaspect.
          Een sproeikop verspreidt water over een groter oppervlak en kan meer spatten veroorzaken bij
          kokend water, wat het risico op huidcontact vergroot. Een straalkop geeft een geconcentreerde
          stroom met minder spatgevaar en is daardoor de veiligere keuze voor dagelijks gebruik.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Stoomvorming</strong> bij het uitschenken van kokend water is een normaal verschijnsel
          en geen teken van een defect. Houd uw gezicht en handen niet direct boven de uitloop tijdens
          het schenken. Een afstand van minimaal 20 centimeter is aan te raden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Automatische afschakeling en beveiligingssystemen
        </h2>
        <p className="text-gray-700 mb-4">
          Alle kwalitatieve kokend water kranen zijn uitgerust met meerdere automatische
          beveiligingssystemen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Lege-tank beveiliging:</strong> de boiler schakelt uit wanneer het waterniveau
            te laag is om overkoken of droogkoken te voorkomen.
          </li>
          <li>
            <strong>Thermische afschakeling:</strong> een thermostaat of NTC-thermistor bewaakt de
            temperatuur continu. Bij overschrijding van de maximale temperatuur wordt de
            verwarmingselement uitgeschakeld.
          </li>
          <li>
            <strong>Drukbeveiliging:</strong> een overdrukventiel beschermt de boiler bij abnormale
            drukopbouw, bijvoorbeeld door blokkage in de leidingen.
          </li>
          <li>
            <strong>Lekdetectie:</strong> sommige premium modellen (zoals Quooker COMBI) zijn
            uitgerust met een lekdetector die de boiler uitschakelt bij waterlekkage.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Controleer bij aanschaf of het model beschikt over een NTC-thermistor of vergelijkbaar
          thermisch beveiligingssysteem en of dit gedocumenteerd is in de EN 61770-certificering.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veilige installatie: elektriciteit en wateraansluiting
        </h2>
        <p className="text-gray-700 mb-4">
          De installatie van een kokend water kraan stelt specifieke eisen aan zowel de elektrische
          als de waterinstallatie. Fouten bij de installatie zijn de meest voorkomende oorzaak van
          ongelukken en schade:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Aarding verplicht:</strong> de boilerunit moet worden aangesloten op een
            randaarde stopcontact (type F of type E+F). Een ongeerd stopcontact is niet toegestaan
            en kan bij een defect leiden tot elektrocutierisico.
          </li>
          <li>
            <strong>Dedicated groep:</strong> een aparte stroomgroep voor de boiler voorkomt
            overbelasting van de groepenkast. Boilerboilers hebben een vermogen van 1.800 tot
            3.000 watt en vragen om een eigen zekering van minimaal 16 ampere.
          </li>
          <li>
            <strong>Waterslang met stopper:</strong> de aanvoerslang van de boiler moet worden
            afgedicht met een gecertificeerde koppeling en stopper conform NEN 1006. Dit voorkomt
            terugstroming van warm water naar het drinkwaternetwerk.
          </li>
          <li>
            <strong>Erkend installateur:</strong> wettelijk is zelf installeren voor particulieren
            niet verboden, maar installatie door een erkend loodgieter of installateur biedt
            garantie op vakmanschap en conformiteit met NEN 1006 en de verzekeringsvoorwaarden.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kokend water kraan versus waterkoker: veiligheidsvergelijking
        </h2>
        <p className="text-gray-700 mb-4">
          Veel mensen vragen zich af of een kokend water kraan veiliger is dan een traditionele
          waterkoker. Beide hebben specifieke voor- en nadelen:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aspect</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kokend water kraan</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Waterkoker</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Valrisico</td>
                <td className="border border-gray-300 px-3 py-2">Geen (vaste positie boven gootsteen)</td>
                <td className="border border-gray-300 px-3 py-2">Snoer kan worden aangetrokken</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Kinderbeveiliging</td>
                <td className="border border-gray-300 px-3 py-2">Ingebouwd dubbel-actie systeem</td>
                <td className="border border-gray-300 px-3 py-2">Geen standaard beveiliging</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Elektrisch risico</td>
                <td className="border border-gray-300 px-3 py-2">Permanent aangesloten; hogere installatieeis</td>
                <td className="border border-gray-300 px-3 py-2">Verplaatsbaar; standaard stopcontact</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Stoomrisico</td>
                <td className="border border-gray-300 px-3 py-2">Stoom bij schenken boven gootsteen</td>
                <td className="border border-gray-300 px-3 py-2">Stoom bij koken op aanrecht</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Automatische beveiliging</td>
                <td className="border border-gray-300 px-3 py-2">Thermostaat, drukventiel, lege-tank sensor</td>
                <td className="border border-gray-300 px-3 py-2">Droogkookbeveiliging (standaard)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Per saldo biedt een kokend water kraan bij gezinnen met jonge kinderen een aanzienlijk
          veiligheidsvoordeel door de vaste positie en de ingebouwde kinderbeveiliging. Lees meer
          over de verschillende modellen op onze pagina over{' '}
          <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">
            kokend water kraan vergelijken
          </Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over kokend water kraan veiligheid
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
          <Link href="/kokend-water-kraan/installeren" className="text-[#005F8A] underline">kokend water kraan installeren</Link>,{' '}
          <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">modellen vergelijken</Link>,{' '}
          <Link href="/kokend-water-kraan/onderhoud" className="text-[#005F8A] underline">onderhoud en ontkalken</Link> en{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan overzicht</Link>.
        </p>
      </main>
    </>
  );
}
