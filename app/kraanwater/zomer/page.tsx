import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kraanwater kwaliteit in de zomer: hittegolven, algen en drinkwater',
  description:
    'In de zomer kan kraanwater anders smaken door hogere temperaturen, blauwalgen in waterbronnen en verhoogd chloorgebruik. Leer wanneer kraanwater veilig is en hoe u de kwaliteit bewaart.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/zomer' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is kraanwater in de zomer veilig om te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Nederlands kraanwater is ook in de zomer veilig voor de meeste mensen. Drinkwaterbedrijven passen hun zuiveringsprocessen aan op seizoensinvloeden: extra monitoring bij blauwalgen, hogere chloorconcentraties bij warmte en intensievere controle van waterbronnen. Gebruik altijd koud kraanwater, nooit warm of lauwwarm water voor drinken of koken. Na een vakantie van meer dan een week altijd eerst 2-3 minuten doorspoelen vanwege Legionella-risico.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom smaakt kraanwater in de zomer anders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De sterkere chloorsmaak in de zomer heeft twee oorzaken. Ten eerste verdampt chloor sneller bij hogere watertemperatuur, waardoor drinkwaterbedrijven hogere dosering toepassen om de veiligheidsgrens (0,1 mg/L bij de kraan) te halen. Ten tweede versnellen warmere temperaturen chemische reacties tussen chloor en organische stoffen in het water, wat bijdraagt aan de smaakperceptie. Een actief-koolfilter of waterkan reduceert deze chloorsmaak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn blauwalgen gevaarlijk voor drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blauwalgen (cyanobacterieen) kunnen giftige cyanotoxinen (microcystinen) produceren die ernstig gevaarlijk zijn bij hoge concentraties. Nederlandse drinkwaterbedrijven monitoren waterbronnen als het IJsselmeer intensief tijdens blauwalg-bloei en beperken waar nodig de waterinname. Standaard chloorbehandeling verwijdert cyanotoxinen niet volledig; een combinatie van ozonbehandeling, zandfiltratie en actief-koolfiltratie bij drinkwaterbedrijven is nodig voor afdoende verwijdering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik warm kraanwater drinken in de zomer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, gebruik nooit warm kraanwater voor drinken of koken. Warm water uit de kraan heeft langer in de warmwaterleidingen gestaan, waar hogere temperaturen bacteriegroei bevorderen. Bovendien lost warm water meer metalen op uit leidingen en soldeerverbindingen. RIWA-Rijn adviseert expliciet: gebruik altijd koud kraanwater voor menselijke consumptie, ook in de zomer. Laat het water altijd een paar seconden doorstromen voor u het opvangt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bewaar ik kraanwater in de zomer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bewaar gevuld drinkwater altijd in de koelkast, niet op het aanrecht. Bij kamertemperatuur boven 20 graden Celsius kunnen bacterieen na enkele uren beginnen te groeien in stilstaand water. Gebruik een schone, afgesloten fles of kan. Drink het water bij voorkeur binnen 24 uur op. Bewaar water niet in direct zonlicht, want dit verwarmt het snel en versnelt bacteriegroei.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het Legionella-risico na vakantie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na een vakantie van meer dan een week is het aanbevolen om alle kranen en douches door te spoelen. Spoel elke kraan 2-3 minuten koud door en elke douche 1-2 minuten warm (indien mogelijk op maximale temperatuur). Dit verwijdert water dat lange tijd heeft stilgestaan en Legionella-bacterieen kan bevatten. Legionella verspreidt zich via aerosolen (douchenevels), niet via drinken, maar voorzorgsspoeling is eenvoudig en effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt een waterfilter bij de chloorsmaak in de zomer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een actief-koolfilter is effectief voor het verwijderen van de chloorsmaak die in de zomer sterker kan zijn. Granulaire actieve kool adsorbeert vrij chloor en chloraminen goed. Filterkans en onder-aanrechtfilters met actieve kool verminderen de chloorsmaak significant. Vervang het koolfilter regelmatig (elke 2-3 maanden voor filterkans) want verzadigde kool kan bacterieen gaan herbergen bij hogere watertemperaturen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Kraanwater kwaliteit in de zomer: hittegolven, algen en drinkwater',
  description:
    'In de zomer kan kraanwater anders smaken door hogere temperaturen, blauwalgen in waterbronnen en verhoogd chloorgebruik. Leer wanneer kraanwater veilig is en hoe u de kwaliteit bewaart.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kraanwater/zomer',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KraanwaterZomerPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kraanwater', item: 'https://waterfilterplatform.nl/kraanwater' },
              { '@type': 'ListItem', position: 3, name: 'Kraanwater in de zomer', item: 'https://waterfilterplatform.nl/kraanwater/zomer' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kraanwater" className="hover:underline">Kraanwater</Link> &rsaquo;{' '}
          <span>Kraanwater in de zomer</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Kraanwater kwaliteit in de zomer: hittegolven, algen en drinkwater
          </h1>
          <p className="text-[#005F8A] text-lg">
            Hittegolven, droogte en blauwalgen belasten drinkwaterbronnen in de zomer zwaarder dan
            in andere seizoenen. Kraanwater blijft ook in de zomer veilig, maar de smaak, temperatuur
            en microbiologische risicos in huisleidingen vragen om aandacht. Dit artikel legt uit
            wat er verandert en hoe u thuis de waterkwaliteit bewaart.
          </p>
        </section>

        <QuickAnswer answer="Kraanwater is ook in de zomer veilig in Nederland. Gebruik altijd koud kraanwater, nooit warm. Na vakantie altijd 2-3 minuten doorspoelen. Extra chloorsmaak in de zomer is normaal: een actief-koolfilter helpt. Bewaar drinkwater in de koelkast, niet op het aanrecht in de warmte." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe hogere temperatuur kraanwater beinvloedt
        </h2>
        <p className="text-gray-700 mb-4">
          De zomer brengt drie specifieke uitdagingen voor drinkwaterkwaliteit met zich mee, zowel
          bij waterbedrijven als in uw eigen huisleidingen.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          1. Bacteriegroei in leidingen
        </h3>
        <p className="text-gray-700 mb-4">
          Warmer water biedt bacterieen een gunstigere omgeving om te groeien. De meest relevante
          bacterie voor huishoudelijk drinkwater is <strong>Legionella pneumophila</strong>: bij
          watertemperaturen boven 25&deg;C begint deze bacterie sneller te vermenigvuldigen, met een
          groeioptimum tussen 35 en 45&deg;C. In koude leidingen (&lt;20&deg;C) en bij hoge temperaturen
          (&gt;60&deg;C) stopt de groei of sterft de bacterie af.
        </p>
        <p className="text-gray-700 mb-4">
          In de zomer kunnen koudwaterleidingen, met name in slecht geventileerde ruimten of bij
          lang stilstaand water, hogere temperaturen bereiken dan normaal. Dit verhoogt theoretisch
          het groeirisico, al is de kans op Legionella in een gewone woning beperkt. Het risico is
          groter in grote gebouwen met uitgebreide leidingstelsels, hotels en zorginstellingen.
        </p>
        <p className="text-gray-700 mb-6">
          Lees meer op onze pagina over{' '}
          <Link href="/kraanwater/legionella-thuis" className="text-[#005F8A] underline">
            Legionella in huisleidingen
          </Link>
          .
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          2. Sterke chloorsmaak door warmte
        </h3>
        <p className="text-gray-700 mb-4">
          Drinkwaterbedrijven desinfecteren water met chloor om het veilig te houden tijdens het
          transport door leidingen. De wettelijke eis is dat bij de kraan minimaal 0,1 milligram
          per liter (mg/L) chloor aanwezig is. In de zomer verdampt vrij chloor sneller uit warm
          water, waardoor bedrijven een hogere dosering toepassen om aan de norm te voldoen. Het
          resultaat is dat kraanwater in de zomer sterker naar chloor kan ruiken en smaken.
        </p>
        <p className="text-gray-700 mb-6">
          Bovendien versnellen hogere watertemperaturen de reactie tussen chloor en organische
          stoffen, waardoor zogeheten <strong>trihalomethanen (THM&apos;s)</strong> kunnen worden
          gevormd. THM&apos;s zijn bijproducten van chloordesinfectie; de EU-drinkwaternorm stelt
          een maximum van 100 &micro;g/L. Nederlandse drinkwaterbedrijven zitten vrijwel altijd ruim
          onder deze norm.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          3. Droogte en alternatieve waterbronnen
        </h3>
        <p className="text-gray-700 mb-4">
          Tijdens langdurige hitte en droogte dalen de waterstanden in rivieren en meren. Dit
          concentreert verontreinigingen in de resterende hoeveelheid water en kan ertoe leiden
          dat drinkwaterbedrijven terugvallen op alternatieve bronnen met een potentieel hogere
          verontreinigingsgraad. In droge zomers, zoals 2018 en 2022 in Nederland, schakelden
          sommige waterbedrijven tijdelijk over op Rijn- of Maaswater dat meer verontreinigingen
          bevatte dan de primaire bronnen.
        </p>
        <p className="text-gray-700 mb-6">
          Dit betekent niet dat het water onveilig was &mdash; drinkwaterbedrijven passen de
          zuiveringsstappen dienovereenkomstig aan &mdash; maar het illustreert de extra druk die
          de zomer op de drinkwatersector legt. Zie ook ons overzicht van{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">
            verontreinigingen in leidingwater
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Blauwalgen: wanneer is het een risico voor drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Blauwalgen zijn in werkelijkheid cyanobacterieen: microscopisch kleine bacterieen die
          fotosynthese uitvoeren. Bij hoge watertemperaturen, veel zonlicht en hoge nutrientengehaltes
          (stikstof en fosfor uit landbouw en neerslag) kunnen ze snel in aantal toenemen en een
          zogenaamde <strong>algenbloei</strong> veroorzaken.
        </p>
        <p className="text-gray-700 mb-4">
          Cyanobacterieen kunnen <strong>cyanotoxinen</strong> produceren, waarvan microcystinen de
          meest voorkomende zijn. Deze toxinen zijn schadelijk voor de lever en kunnen bij hoge
          doses dodelijk zijn voor honden en vee die besmet zwemwater drinken. Voor mensen zijn
          huidirritaties en maagklachten mogelijk bij zwemmen in zwaar besmet water.
        </p>
        <p className="text-gray-700 mb-4">
          Voor drinkwater is de situatie genuanceerder: grote drinkwaterbronnen als het IJsselmeer,
          het Wolderwijd en de Biesbosch worden intensief gemonitord op blauwalgen. In de zomer van
          2023 beperkte drinkwaterbedrijf NZK/PWN tijdelijk de waterinname bij Andijk (IJsselmeer)
          vanwege een intensieve cyanobacteriebloei. Het bedrijf schakelde over op een andere innamepunt
          en paste extra zuiveringsstappen toe. De levering van veilig drinkwater was niet in gevaar.
        </p>
        <p className="text-gray-700 mb-6">
          Standaard chloorbehandeling verwijdert cyanotoxinen <strong>niet</strong> volledig.
          Effectieve verwijdering vereist een combinatie van zandfiltratie, ozonbehandeling en actief
          koolfiltratie &mdash; processen die grote drinkwaterbedrijven toepassen, maar die buiten
          het bereik liggen van standaard huishoudfilters.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Warm kraanwater: nooit drinken of koken
        </h2>
        <p className="text-gray-700 mb-4">
          Een van de meest directe risicos in de zomer is het gebruik van <strong>warm kraanwater</strong>
          voor consumptie. RIWA-Rijn en drinkwaterbedrijven adviseren nadrukkelijk: gebruik voor drinken
          en koken altijd koud kraanwater, nooit warm of lauwwarm water direct uit de warmwaterkraan.
        </p>
        <p className="text-gray-700 mb-6">
          De reden is tweeledig: warm kraanwater heeft langer gestaan in warmwaterleidingen, waar
          hogere temperaturen bacteriegroei bevorderen en metaaldeeltjes van leidingen en soldeerverbindingen
          beter oplossen. Bij oudere woningen met koperen of zinken leidingen kan warm kraanwater
          significante hoeveelheden koper, lood of zink bevatten. Vul altijd uw waterkoker of kookpot
          met koud kraanwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch zomeradvies voor drinkwater thuis
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Bewaar drinkwater in de koelkast</strong>, niet op het aanrecht in de warmte.
            Bij temperaturen boven 20&deg;C kunnen bacterieen al na enkele uren beginnen te groeien
            in stilstaand water.
          </li>
          <li>
            <strong>Gebruik altijd koud kraanwater</strong> voor drinken en koken. Nooit warm
            kraanwater rechtstreeks van de kraan.
          </li>
          <li>
            <strong>Na vakantie van een week of langer:</strong> spoel alle kranen 2&ndash;3 minuten
            koud door en alle douches 1&ndash;2 minuten warm, voordat u het water gebruikt. Dit
            vermindert het risico op Legionella-blootstelling via aerosolen. Zie ook onze uitgebreide
            pagina over{' '}
            <Link href="/kraanwater/legionella-thuis" className="text-[#005F8A] underline">
              Legionella thuis
            </Link>
            .
          </li>
          <li>
            <strong>Waterkan of filter voor chloorsmaak:</strong> als u de sterkere chloorgeur in
            de zomer stoort, vermindert een waterkan met actief kool of een onder-aanrechtfilter
            de chloorgeur effectief. Vervang het filter regelmatig: elk 2 maanden voor een filterkan
            in de zomer, want bij hogere temperaturen raken filters sneller verzadigd.
          </li>
          <li>
            <strong>Buiten bewaren:</strong> bewaar drinkwater nooit in direct zonlicht of in
            een hete auto. Een plastic fles in de zon kan al na een uur&nbsp;&gt; 40&deg;C bereiken,
            wat bacteriegroei versnelt en migratie van weekmakers (bisfenol) uit plastic kan
            bevorderen.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kraanwater kwaliteit verbeteren in de zomer
        </h2>
        <p className="text-gray-700 mb-4">
          Voor consumenten die meer controle willen over hun drinkwaterkwaliteit, biedt een
          thuisfilter extra zekerheid. Voor zomerse klachten zijn de meest relevante opties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Actief-koolfilter</strong> (waterkan of onder-aanrecht): vermindert chloorsmaak
            en -geur effectief. Eenvoudig, betaalbaar en geschikt voor dagelijks gebruik.
          </li>
          <li>
            <strong>Osmosefilter:</strong> verwijdert naast chloor ook een breed spectrum van
            verontreinigingen waaronder farmaceutische stoffen, zware metalen en nitraat.
            De meest uitgebreide filtermethode voor thuisgebruik.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Lees meer over welk filter het beste past bij uw situatie op onze pagina{' '}
          <Link href="/kraanwater/kwaliteit-verbeteren" className="text-[#005F8A] underline">
            kraanwaterkwaliteit verbeteren
          </Link>
          .
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over kraanwater in de zomer
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
          <Link href="/leidingwater/bacterien" className="text-[#005F8A] underline">bacterien in leidingwater</Link>,{' '}
          <Link href="/leidingwater/chloor" className="text-[#005F8A] underline">chloor in drinkwater</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters vergelijken</Link> en{' '}
          <Link href="/kraanwater/kwaliteit-verbeteren" className="text-[#005F8A] underline">kraanwaterkwaliteit verbeteren</Link>.
        </p>
      </main>
    </>
  );
}
