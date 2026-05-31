import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater vs gedistilleerd water: wat is het verschil?',
  description: 'Osmosewater en gedistilleerd water zijn beide bijna puur, maar verschillen in productiewijze, mineraalgehalte en toepassingen. Vergelijking voor drinken.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/vs-gedistilleerd' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen osmosewater en gedistilleerd water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater wordt geproduceerd via drukgedreven filtratie door een semipermeabel membraan; het bevat een TDS van 5-50 mg/L en een pH van 6,0-7,0. Gedistilleerd water wordt geproduceerd door water te verhitten tot stoom en dat stoom vervolgens te condenseren; het bevat een TDS van minder dan 1 mg/L en een pH van 5,5-6,5 (door CO2-absorptie). Gedistilleerd water is chemisch iets puurder, maar osmosewater is goedkoper en eenvoudiger thuis te produceren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk water is beter voor een stoomijzer: osmose of gedistilleerd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beide soorten voorkomen kalkafzetting in stoomijzers en stoomgeneratoren effectief. Gedistilleerd water is theoretisch ideaal vanwege de extreem lage TDS (onder 1 mg/L). Osmosewater (TDS 5-50 mg/L) is voor de meeste stoomijzers echter ook uitstekend geschikt en aanzienlijk goedkoper per liter. Controleer de handleiding van uw stoomijzer, maar in de praktijk werkt osmosewater net zo goed als gedistilleerd water voor dit doel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater even puur als gedistilleerd water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, gedistilleerd water is chemisch iets puurder. Een goede omgekeerde-osmosesysteem haalt 95-99% van opgeloste stoffen weg en produceert water met een TDS van 5-50 mg/L. Destillatie haalt vrijwel alle opgeloste stoffen weg tot een TDS onder 1 mg/L. Voor praktische toepassingen zoals drinken, koken en stoomapparaten is het verschil echter verwaarloosbaar. Alleen voor toepassingen die extreem puur water vereisen (zoals bepaalde laboratoriumtoepassingen) maakt dit verschil uit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik osmosewater gebruiken voor mijn auto-accu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosewater is acceptabel voor auto-accu bijvullen mits de TDS onder 10 mg/L ligt. Gedistilleerd water (TDS onder 1 mg/L) is de ideale keuze voor accu-onderhoud. Bij hoge TDS-waarden van osmosewater kunnen mineralen reageren met het zuurelektrolyt in de accu. Meet de TDS van uw osmosewater met een TDS-meter; ligt het boven 10 mg/L, gebruik dan gedistilleerd water voor de accu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk water is goedkoper te maken thuis: osmose of gedistilleerd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is aanzienlijk goedkoper: 3-5 eurocent per liter, waarbij de kosten bestaan uit filtervervanging en een kleine hoeveelheid afvalwater. Gedistilleerd water kost 10-20 eurocent per liter thuis, omdat het verhitten van water veel elektriciteit verbruikt (typisch 0,5-1 kWh per liter). Een osmosefilter produceert bovendien 50-200 liter per dag terwijl een destilleerder slechts 2-4 liter per uur maakt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is gedistilleerd water veilig om te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, gedistilleerd water is veilig om te drinken. Een WHO-onderzoek uit 2004 vond geen bewijs van gezondheidsschade bij normaal drinken van zeer puur water. Het lage mineraalgehalte betekent wel dat u mineralen uit voeding moet halen. Voor dagelijks drinkwater wordt vaak remineralisatie aanbevolen, zowel voor gedistilleerd als voor osmosewater, om de smaak te verbeteren en een minimale mineraalinname te garanderen. De meeste osmosesystemen hebben een optionele remineralisatiefilter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Voor aquarium: osmose of gedistilleerd water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is de betere keuze voor de meeste aquariumtoepassingen, zowel zoet- als zoutwateraquaria. Het biedt een controlleerbaar laag TDS-niveau (5-50 mg/L) waaraan u zelf mineralen, zout of voedingstoffen kunt toevoegen voor de gewenste watersamenstelling. Gedistilleerd water werkt ook, maar is per liter duurder en trager te produceren. Voor grote aquaria maakt het kostenverschil een osmosefilter de duidelijk praktischere keuze.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater vs gedistilleerd water: wat is het verschil?',
  description: 'Osmosewater en gedistilleerd water zijn beide bijna puur, maar verschillen in productiewijze, mineraalgehalte en toepassingen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/vs-gedistilleerd',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterVsGedistilleerdPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater vs gedistilleerd water', item: 'https://waterfilterplatform.nl/osmose-water/vs-gedistilleerd' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/osmose-water" className="hover:underline">Osmosewater</Link> &rsaquo;{' '}
          <span>Osmosewater vs gedistilleerd water</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater vs gedistilleerd water: wat is het verschil?
          </h1>
          <p className="text-gray-700 text-lg">
            Beide watersoorten zijn bijna vrij van mineralen en verontreinigingen, maar ze worden op een heel andere manier geproduceerd.
            Het verschil in TDS, pH, kosten en toepassingen bepaalt welk type water het beste bij uw situatie past.
          </p>
        </div>

        <QuickAnswer answer="Osmosewater (TDS 5-50 mg/L, pH 6,0-7,0) wordt geproduceerd via membraanfiltratie; gedistilleerd water (TDS minder dan 1 mg/L, pH 5,5-6,5) via verhitting en condensatie. Osmosewater is goedkoper en sneller thuis te maken. Gedistilleerd is iets puurder. Voor drinken, stoomijzers en aquaria zijn beide geschikt; voor auto-accu verdient gedistilleerd water de voorkeur." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe wordt osmosewater geproduceerd?
        </h2>
        <p className="text-gray-700 mb-4">
          Bij omgekeerde osmose wordt leidingwater onder druk (3-8 bar) door een semipermeabel membraan geperst.
          De porieen in dit membraan zijn slechts 0,0001 micrometer groot &mdash; kleiner dan de meeste ionen en moleculen.
          Alleen watermoleculen en een kleine fractie van de kleinste ionen passeren.
        </p>
        <p className="text-gray-700 mb-4">
          Het resultaat is water met een TDS (Total Dissolved Solids) van 5-50 mg/L, afhankelijk van de kwaliteit van het membraan en het bronwater.
          De pH ligt tussen 6,0 en 7,0. Een kleine hoeveelheid mineralen blijft aanwezig, wat de osmose een licht neutralere smaak geeft dan gedistilleerd water.
        </p>
        <p className="text-gray-700 mb-6">
          Een osmosefilter thuis produceert 50-200 liter per dag en kost 3-5 eurocent per liter.
          Meer over de werking leest u op onze pagina over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe wordt gedistilleerd water geproduceerd?
        </h2>
        <p className="text-gray-700 mb-4">
          Destillatie werkt op basis van de faseverandering van water: het bronwater wordt verhit tot kookpunt (100&deg;C), de waterdamp stijgt op,
          wordt via een koeler gecondenseerd en opgevangen als vloeibaar water. Alle opgeloste stoffen &mdash; mineralen, zouten, zware metalen &mdash;
          blijven achter in de destillatievat en worden niet meegenomen.
        </p>
        <p className="text-gray-700 mb-4">
          Gedistilleerd water heeft een TDS van minder dan 1 mg/L en is daarmee chemisch iets puurder dan osmosewater.
          De pH is lager (5,5-6,5) doordat het water kooldioxide uit de lucht absorbeert.
          Dit lagere pH-niveau is onschadelijk maar geeft gedistilleerd water soms een licht zuur karakter.
        </p>
        <p className="text-gray-700 mb-6">
          Thuis destilleren verbruikt aanzienlijk meer energie (0,5-1 kWh per liter) en is langzamer (2-4 liter per uur).
          De kostprijs per liter thuis is 10-20 eurocent, drie tot vier keer duurder dan osmosewater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: osmose vs gedistilleerd
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Osmosewater</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Gedistilleerd water</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">TDS</td>
                <td className="border border-gray-300 px-3 py-2">5-50 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">pH</td>
                <td className="border border-gray-300 px-3 py-2">6,0-7,0</td>
                <td className="border border-gray-300 px-3 py-2">5,5-6,5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Productie thuis</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (osmosefilter)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Moeilijk (destilleerder)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Energieverbruik</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Laag (waterdruk)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Hoog (verhitten)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Productiesnelheid</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">50-200 L/dag</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">2-4 L/uur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kosten thuis</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&euro;0,03-0,05/L</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">&euro;0,10-0,20/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Geschikt voor drinken</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (met remineralisatie)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (met remineralisatie)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Stoomijzer</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (ideaal)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Accu bijvullen</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Acceptabel (&lt;10 mg/L)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ideaal</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Aquarium</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Brouwen (bier/koffie)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (ideaal)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Minder ideaal (te puur)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voor drinken: welk water is gezonder?
        </h2>
        <p className="text-gray-700 mb-4">
          Zowel osmosewater als gedistilleerd water zijn veilig om te drinken.
          Een WHO-studie uit 2004 concludeerde dat er geen bewijs is van gezondheidsschade bij normaal drinken van zeer puur water.
          Het lage mineraalgehalte is geen probleem als u de mineralen via voeding binnenkrijgt.
        </p>
        <p className="text-gray-700 mb-4">
          Voor de smaak en als aanvulling op uw mineraalinname adviseren wij wel een remineralisatiefilter.
          Moderne osmosesystemen bieden dit als optionele vierde filterstap aan.
          Hiermee worden calcium en magnesium in kleine hoeveelheden teruggevoegd, wat de smaak verbetert en de pH stabiliseert richting 7,0.
        </p>
        <p className="text-gray-700 mb-6">
          Lees meer over de eigenschappen van{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater voor drinken</Link> en de impact op koffiezetten op onze{' '}
          <Link href="/osmose-water/koffie" className="text-[#005F8A] underline">osmose voor koffie pagina</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stoomijzers en stoomgeneratoren
        </h2>
        <p className="text-gray-700 mb-4">
          Kalkaanslag is de grootste bedreiging voor stoomijzers. Gedistilleerd water is van nature kalkvrij (TDS &lt;1 mg/L) en daarmee de ideale keuze.
          Osmosewater (TDS 5-50 mg/L) is echter ook uitstekend geschikt voor de meeste huishoudelijke stoomijzers.
          Controleer de handleiding van uw apparaat; veel fabrikanten raden gedistilleerd of gedemineraliseerd water aan, maar accepteren ook water met lage TDS.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Auto-accu bijvullen
        </h2>
        <p className="text-gray-700 mb-4">
          Voor auto-accu onderhoud is gedistilleerd water (TDS &lt;1 mg/L) de ideale keuze.
          De zuuroplossing in een loodaccu reageert gevoelig op mineralen.
          Osmosewater is acceptabel als de TDS onder 10 mg/L ligt.
          Gebruik een TDS-meter om uw osmosewater te controleren voordat u het voor accuonderhoud gebruikt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aquarium en brouwen
        </h2>
        <p className="text-gray-700 mb-4">
          Voor aquaria (zoet- en zoutwater) is osmosewater de populairste keuze.
          Het lage maar controleerbare TDS maakt het eenvoudig om de gewenste watersamenstelling te bereiken door mineralen, zout of voedingsstoffen toe te voegen.
          Gedistilleerd water werkt ook, maar is per liter duurder.
        </p>
        <p className="text-gray-700 mb-6">
          Voor het brouwen van bier en specialiteitskoffie is osmosewater ideaal: het biedt een schone basis waaraan brouwers gerichte mineralen (calcium, magnesium, bicarbonaat) kunnen toevoegen.
          Gedistilleerd water is zo puur dat het moeilijker te sturen is qua waterchemie.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/osmose-water/mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in osmosewater</h3>
              <p className="text-sm text-gray-600">Welke mineralen ontbreken na omgekeerde osmose en waarom dat ertoe doet.</p>
            </Link>
            <Link href="/osmose-water/vs-bronwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater vs. bronwater</h3>
              <p className="text-sm text-gray-600">Vergelijking van osmosewater en bronwater op kwaliteit, mineralen en kosten.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechniek omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Hoe het RO-membraan werkt en welke stoffen het verwijdert uit leidingwater.</p>
            </Link>
            <Link href="/osmose-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater uitleg</h3>
              <p className="text-sm text-gray-600">Alles over osmosewater: werking, kwaliteit en toepassingen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
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
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater informatie</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/osmose-water/koffie" className="text-[#005F8A] underline">osmosewater voor koffie</Link>.
        </p>
      </main>
    </>
  );
}
