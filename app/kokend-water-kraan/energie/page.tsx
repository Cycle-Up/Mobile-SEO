import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Energieverbruik kokend water kraan: vergelijking met waterkoker en pan',
  description:
    'Een kokend water kraan (boiler) verbruikt 24/7 standby-energie maar is per kopje thee goedkoper dan een waterkoker. Vergelijking van energiekosten: kokend waterboiler vs waterkoker vs pan op inductie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/energie' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel standby-energie verbruikt een kokend water kraan per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gemiddeld model van 15 Watt standby verbruikt 15 x 8.760 uur / 1.000 = 131 kWh per jaar. Bij een stroomtarief van 35 cent per kWh is dat circa 46 euro per jaar puur aan stand-by. Modellen met betere isolatie (zoals de Quooker Cube 2.2) zitten op 10 Watt = 88 kWh/jaar = ca. 31 euro. Goedkopere merken kunnen 18-25 Watt verbruiken, wat neerkomt op 55-75 euro per jaar aan standby-kosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een kokend water kraan duurder in gebruik dan een waterkoker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van het gebruikspatroon. Een waterkoker op 2.200 Watt die 45 seconden kookt voor 250 ml verbruikt 0,0275 kWh per kopje, ofwel 0,96 cent bij 35 cent/kWh. Een kokend water kraan kost bij 5 kopjes per dag (standby meegerekend) circa 0,8 cent per kopje. Bij meer dan 4-5 kopjes per dag is de kokend water kraan gelijkwaardig of goedkoper; bij minder gebruik is de waterkoker voordeliger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel bespaart een nachtmodus op een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een weekprogramma of nachtmodus die de boiler uitschakelt van 22:00 tot 07:00 (9 uur per dag) reduceert het energieverbruik met circa 37,5% in die uren. In de praktijk wordt 20-40% totale besparing gemeld, afhankelijk van het model. Bij een basistverbruik van 131 kWh/jaar bespaart dit 26-52 kWh/jaar, ofwel 9-18 euro per jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk merk kokend water kraan verbruikt het minste energie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op basis van fabrikantspecificaties verbruiken de Quooker Cube 2.2 en Grohe Red II de minste standby-energie: circa 10 Watt. De ZIP HydroTap zit op 15 Watt. PureAqua 4-in-1 modellen vermelden 12 Watt. Budget- en private-label merken (Action, MaxiFilter) vermelden vaak 18-25 Watt. Let bij aankoop op het opgegeven standby-vermogen in de specificaties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vergelijkt een kokend water kraan met een pan op inductie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een inductieplaat op 2.000 Watt heeft gemiddeld 4 minuten nodig om 1 liter water te koken: 2.000 W x 4/60 uur = 0,133 kWh = 4,6 cent per liter. Een kokend water kraan levert direct kokend water zonder wachttijd. Voor kleine hoeveelheden (1-2 kopjes) is de kokend water kraan altijd goedkoper en sneller dan een pan op inductie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de eco-modus van een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De eco-modus houdt het water op een lagere temperatuur (doorgaans 75 graden Celsius) en verwamt het bij gebruik snel naar 98 graden Celsius in 30-45 seconden. Dit verlaagt het standby-verbruik significant omdat de temperatuurval van de omgeving kleiner is. Niet alle merken bieden deze functie aan; controleer de specificaties voor aankoop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een kokend water kraan duurzamer voor het milieu dan een waterkoker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij gebruik van groene stroom is het verschil in CO2-uitstoot minimaal. Bij grijze stroom (gemiddelde Nederlandse energiemix) bespaart een gezin van 4 met een kokend water kraan met eco-stand en nachtmodus circa 30 kWh per jaar ten opzichte van dagelijks waterkokergebruik, wat neerkomt op circa 12 kg CO2. De productie van de extra hardware heeft ook een milieu-impact; de terugverdientijd varieert.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Energieverbruik kokend water kraan: vergelijking met waterkoker en pan',
  description:
    'Een kokend water kraan verbruikt 24/7 standby-energie maar is per kopje goedkoper dan een waterkoker bij hoog gebruik. Vergelijking van energiekosten inclusief standby, nachtmodus en eco-stand.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/energie',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KokendWaterKraanEnergiePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Energieverbruik', item: 'https://waterfilterplatform.nl/kokend-water-kraan/energie' },
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
          <span>Energieverbruik</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Energieverbruik kokend water kraan: vergelijking met waterkoker en pan
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een kokend water kraan houdt water continu op bijna 100 graden Celsius via een kleine
            geinsuleerde boiler. Dat kost 24/7 standby-energie. Is dat duurder dan een waterkoker?
            We rekenen het per kopje en per jaar uit.
          </p>
        </section>

        <QuickAnswer answer="Een kokend water kraan verbruikt 8-20 Watt standby, wat neerkomt op 31-61 euro per jaar aan standby-kosten. Per kopje (250 ml) is de kraan bij 5+ kopjes per dag goedkoper dan een waterkoker. Voor singles met laag gebruik blijft een waterkoker voordeliger." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een kokend water kraan qua energie?
        </h2>
        <p className="text-gray-700 mb-4">
          Een kokend water kraan is voorzien van een kleine geinsuleerde boiler van 2 tot 5 liter
          die het water continu op 98 graden Celsius houdt. Een verwarmingselement schakelt
          periodiek in om het warmteverlies via de wanden van de boiler te compenseren.
          Dit zogenaamde <strong>standby-verbruik</strong> loopt door zolang het apparaat
          aangesloten is, ook als u er geen water uit tapt.
        </p>
        <p className="text-gray-700 mb-4">
          De hoogte van het standby-verbruik wordt bepaald door:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Isolatiekwaliteit van de boiler:</strong> dikkere en betere isolatie = minder warmteverlies = lager verbruik</li>
          <li><strong>Tankgrootte:</strong> een grotere tank heeft meer oppervlak en verliest meer warmte</li>
          <li><strong>Ingestelde temperatuur:</strong> 100 graden vergt meer energie dan 95 graden</li>
          <li><strong>Omgevingstemperatuur:</strong> een koude keukenkast verhoogt het warmteverlies</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Standby-energiekosten per jaar
        </h2>
        <p className="text-gray-700 mb-4">
          Berekening voor een gemiddeld model met 15 Watt standby-verbruik:
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-5 mb-6">
          <p className="text-[#003F5C] font-semibold mb-2">Rekenvoorbeeld: 15W standby model</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>15 Watt &times; 8.760 uur per jaar &divide; 1.000 = <strong>131 kWh per jaar</strong></li>
            <li>131 kWh &times; &euro;0,35 per kWh = <strong>ca. &euro;46 per jaar</strong> aan standby</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          Bij een model met slechte isolatie (25 Watt) lopen de standby-kosten op naar ruim
          &euro;76 per jaar. Een topmodel als de Quooker Cube 2.2 met slechts 10 Watt kost
          circa &euro;31 per jaar aan standby.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten per gebruik: kopje voor kopje vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          Bij energievergelijking is het zinvoller te kijken naar de kosten per kopje
          (250 ml) dan naar het totaalverbruik:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Apparaat</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Vermogen / tijd</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">kWh per kopje</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten per kopje</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterkoker (2.200W)</td>
                <td className="border border-gray-300 px-3 py-2">45 seconden</td>
                <td className="border border-gray-300 px-3 py-2">0,0275 kWh</td>
                <td className="border border-gray-300 px-3 py-2">0,96 cent</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Kokend water kraan (15W, 5 kopjes/dag)</td>
                <td className="border border-gray-300 px-3 py-2">Direct</td>
                <td className="border border-gray-300 px-3 py-2">standby meegerekend</td>
                <td className="border border-gray-300 px-3 py-2">~0,8 cent</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Pan op inductie (2.000W, 1L)</td>
                <td className="border border-gray-300 px-3 py-2">4 minuten</td>
                <td className="border border-gray-300 px-3 py-2">0,133 kWh per liter</td>
                <td className="border border-gray-300 px-3 py-2">4,6 cent per liter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Bij 5 kopjes per dag en 35 cent/kWh is het break-even punt bereikt: de kokend water
          kraan is bij dit gebruik al goedkoper per kopje dan de waterkoker, inclusief de
          standby-kosten. Bij meer gebruik is de kraan duidelijk voordeliger. Voor een
          alleenstaande met 1-2 kopjes per dag blijft de waterkoker de goedkoopste optie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Energiebesparende functies
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Weekprogramma en nachtmodus</h3>
        <p className="text-gray-700 mb-4">
          De meeste premium kokend water kranen (Quooker, Grohe Red, Franke) bieden een
          weekprogramma waarmee u de boiler automatisch uitschakelt in de nacht (bijv.
          22:00-07:00) en in het weekend wanneer u weg bent. Dit bespaart tot 40% van het
          jaarverbruik:
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6">
          <p className="text-sm text-[#003F5C]">
            Model 15W standby: 131 kWh/jaar normaal &rarr; ca. 79 kWh/jaar met nachtmodus (9 uur/dag uit) = besparing 52 kWh = ca. &euro;18 per jaar.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-3">Eco-modus (75 graden stand-by)</h3>
        <p className="text-gray-700 mb-6">
          De eco-modus houdt het water op 75 graden Celsius en verhit het bij gebruik snel naar
          98 graden in 30-45 seconden. Omdat de temperatuurval van de omgeving kleiner is,
          verliest de boiler minder warmte. Besparing: tot 20% op het standby-verbruik ten
          opzichte van continue 98 graden handhaving.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Merkenvergelijking: standby-vermogen
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Merk / model</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Standby-vermogen</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaarkosten standby</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Quooker Cube 2.2</td>
                <td className="border border-gray-300 px-3 py-2">10W</td>
                <td className="border border-gray-300 px-3 py-2">ca. &euro;31</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Grohe Red II Mono</td>
                <td className="border border-gray-300 px-3 py-2">10W</td>
                <td className="border border-gray-300 px-3 py-2">ca. &euro;31</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">ZIP HydroTap G5</td>
                <td className="border border-gray-300 px-3 py-2">15W</td>
                <td className="border border-gray-300 px-3 py-2">ca. &euro;46</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">PureAqua 4-in-1</td>
                <td className="border border-gray-300 px-3 py-2">12W</td>
                <td className="border border-gray-300 px-3 py-2">ca. &euro;37</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Budget-merken (gemiddeld)</td>
                <td className="border border-gray-300 px-3 py-2">18&ndash;25W</td>
                <td className="border border-gray-300 px-3 py-2">&euro;55&ndash;77</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Berekend bij &euro;0,35/kWh, 24/7 gebruik zonder nachtmodus. Zie ook onze{' '}
          <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">
            merkvergelijking kokend water kranen
          </Link>{' '}
          voor een volledig overzicht.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Milieu-impact: groene versus grijze stroom
        </h2>
        <p className="text-gray-700 mb-4">
          Bij groene stroom (wind- of zonne-energie) is het CO2-verschil tussen een kokend water
          kraan en een waterkoker vrijwel nihil. Bij de gemiddelde Nederlandse energiemix
          (2026: circa 300-400 gram CO2 per kWh) levert een gezin van 4 personen met een
          kokend water kraan in eco-stand een besparing van circa 30 kWh per jaar ten opzichte
          van dagelijks waterkokergebruik. Dat is ongeveer 9-12 kg CO2 per jaar.
        </p>
        <p className="text-gray-700 mb-6">
          De productie van de kokend water kraan zelf (metaal, elektronica, transport) heeft
          ook een milieuvoetdruk. Reken op een terugverdientijd van 5-10 jaar voor de
          milieu-impact van productie, afhankelijk van uw gebruik en stroomtype.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Conclusie: wanneer is een kokend water kraan energetisch zinvol?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Gezin met hoog gebruik (5+ kopjes/dag):</strong> kokend water kraan is energetisch
            vergelijkbaar of goedkoper dan meerdere waterkokers die elke keer vol worden gezet
          </li>
          <li>
            <strong>Thuis werken + veel thee/koffie:</strong> directe beschikbaarheid bespaart ook
            tijd; energetisch gunstig bij 6+ kopjes per dag
          </li>
          <li>
            <strong>Singles of licht gebruik:</strong> traditionele waterkoker blijft voordeliger;
            standby-kosten wegen niet op tegen het voordeel per kopje
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bent u geinteresseerd in een kokend water kraan met geintegreerd waterfilter? Bekijk dan
          onze pagina over de{' '}
          <Link href="/kokend-water-kraan/quooker" className="text-[#005F8A] underline">
            Quooker met filteropties
          </Link>{' '}
          of lees meer over het{' '}
          <Link href="/kokend-water-kraan/installeren" className="text-[#005F8A] underline">
            installeren van een kokend water kraan
          </Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over energieverbruik kokend water kraan
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
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan overzicht</Link>,{' '}
          <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">merken vergelijken</Link>,{' '}
          <Link href="/kokend-water-kraan/quooker" className="text-[#005F8A] underline">Quooker review</Link> en{' '}
          <Link href="/kokend-water-kraan/installeren" className="text-[#005F8A] underline">installatie kokend water kraan</Link>.
        </p>
      </main>
    </>
  );
}
