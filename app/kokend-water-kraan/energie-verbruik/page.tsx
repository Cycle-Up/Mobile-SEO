import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kokend water kraan energieverbruik: kWh kosten en besparing',
  description:
    'Kokend water kraan energieverbruik: 0,01-0,03 kWh per liter. Standby 3-10W. Vergelijking met waterkoker en gasboiler. Jaarlijkse energiekosten berekening.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/energie-verbruik' },
  openGraph: {
    title: 'Kokend water kraan energieverbruik: kWh kosten en besparing',
    description:
      'Kokend water kraan energieverbruik: 0,01-0,03 kWh per liter. Standby 3-10W. Vergelijking met waterkoker en gasboiler. Jaarlijkse energiekosten berekening.',
    type: 'website',
  },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel elektriciteit verbruikt een kokend water kraan per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een kokendwaterkraan verbruikt gemiddeld 80-150 kWh per jaar bij normaal huishoudelijk gebruik van 4-6 liter kokend water per dag. Het standbyverbruik (3-10 W continu) is daarin de grootste post: bij 10 W staat dat voor 88 kWh per jaar. Het verbruik per getapt liter is slechts 0,013-0,025 kWh door de goed geisoleerde tank.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een kokendwaterkraan zuiniger dan een waterkoker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij frequent gebruik (4-6 liter per dag) zijn ze vergelijkbaar in energieverbruik: een kokendwaterkraan gebruikt 80-120 kWh per jaar, een waterkoker van 1,5 liter die 3-4 keer per dag wordt gevuld gebruikt 55-110 kWh per jaar. De waterkoker wint bij laag gebruik (1-2 keer per dag) omdat er geen standbyverbruik is. De kokendwaterkraan is zuiniger per liter bij hoog gebruik doordat de geinsuleerde tank geen herhaald verhitten nodig heeft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een kokendwaterkraan per jaar aan elektriciteit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een elektriciteitsprijs van 0,30 euro per kWh en een verbruik van 100 kWh per jaar bedragen de jaarlijkse energiekosten circa 30 euro. Bij een hogere prijs van 0,40 euro/kWh komen de kosten uit op 40 euro. Het standbyverbruik van 10 W kost alleen al circa 26 euro per jaar. Een timer of nachtverlaging kan het standbyverbruik met 25-40% reduceren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel watt verbruikt een Quooker in standby?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een Quooker COMBI (met warmwater boiler) verbruikt in standby circa 10 watt, wat overeenkomt met 88 kWh per jaar of 26-35 euro aan elektriciteitskosten. De nieuwere Quooker FLEX modellen met verbeterde isolatie verbruiken iets minder, circa 7-8 watt in standby. De Quooker zelf claimt een verbruik van 3 eurocent per dag voor het kokend water gedeelte, wat neerkomt op circa 11 kWh per jaar puur voor de opwarmenergie.',
      },
    },
    {
      '@type': 'Question',
      name: "Bespaar ik energie door de kokendwaterkraan 's nachts uit te zetten?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, het uitschakelen gedurende de nacht (8 uur) of het gebruiken van een timer bespaart circa 25-35% van het standbyverbruik. Bij 10 W standby en 8 uur nacht uitgeschakeld bespaart u 2,9 kWh per maand, circa 1 euro per maand. Sommige modellen hebben een ingebouwde eco-timer of zijn te koppelen aan een smart plug. Let op: het opnieuw opwarmen na een koude start kost extra energie, dus een korte nachtpauze is efficienter dan lang uitschakelen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft de Quooker CUBE voor bruisend water extra energieverbruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Quooker CUBE, die naast kokend ook gefilterd koud en bruisend water levert, verbruikt extra energie voor de koeling van het bruisend watergedeelte. Quooker geeft een extra verbruik op van circa 15-20 kWh per jaar voor de CUBE-module. Bij normaal gebruik is dit een extra kostenpost van 4-6 euro per jaar aan elektriciteit bovenop het verbruik van de basisunit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk energielabel heeft een kokendwaterkraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de EU vallen kokendwaterkranen onder de ErP-richtlijn (Energy-related Products) en moeten ze voldoen aan standby-vermogensnormen. De meeste modellen van Quooker, GROHE Red en vergelijkbare merken voldoen aan de norm van maximaal 0,5 W standby voor niet-functionele stand, maar kunnen hogere vermogens claimen voor de verwarmings-standby. Een specifiek energielabel zoals bij wasmachines of koelkasten is niet verplicht voor kokendwaterkranen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vergelijking kokendwaterkraan versus gasboiler voor heet water',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een directe gasboiler (zoals bij Quooker COMBI) verwarmt water met gas, wat bij een laag gastarief goedkoper kan zijn dan elektrisch. Bij een gasprijs van 0,12 euro/m3 en een energiewaarde van 10 kWh/m3 kost 1 kWh warmte via gas circa 1,2 eurocent versus 30 eurocent elektrisch. Een hybride aanpak (gas voor ruimteverwarming, elektrisch voor de kokendwaterkraan) is in 2026 bij de meeste Nederlandse tarieven vergelijkbaar of iets duurder via elektriciteit, maar de kosten zijn in de orde van 30-60 euro per jaar en dus beperkt.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Kokend water kraan energieverbruik: kosten en vergelijking met waterkoker',
  description:
    'Kokend water kraan energieverbruik: 0,01-0,03 kWh per liter. Standby 3-10W. Vergelijking met waterkoker en gasboiler. Jaarlijkse energiekosten berekening.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/energie-verbruik',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function EnergieVerbruikPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Energieverbruik', item: 'https://waterfilterplatform.nl/kokend-water-kraan/energie-verbruik' },
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

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan energieverbruik: kosten en vergelijking met waterkoker
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een kokendwaterkraan staat continu op temperatuur via een goed geisoleerde boiler.
            Dat klinkt als veel energie, maar de werkelijkheid is genuanceerd. We rekenen
            precies uit wat een kokendwaterkraan kost aan stroom en hoe dat zich verhoudt
            tot een klassieke waterkoker.
          </p>
        </section>

        <QuickAnswer answer="Een kokend water kraan verbruikt 0,01-0,03 kWh per liter kokend water door de geinsuleerde boiler. In standby verbruikt het systeem 3-10 watt continu. Bij gemiddeld gebruik (4-6 liter/dag) kost een kokendwaterkraan 50-120 kWh per jaar, vergelijkbaar met een kleine waterkoker die meerdere keren per dag wordt gebruikt." />

        <CTABanner context="kokend" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een kokendwaterkraan qua energie?
        </h2>
        <p className="text-gray-700 mb-4">
          Een kokendwaterkraan &mdash; zoals Quooker, GROHE Red of PureAqua &mdash; heeft een
          kleine <strong>geisoleerde boiler</strong> van 2-10 liter die water continu op
          temperatuur houdt. Bij standaard modellen is dat 100 &#176;C (onder druk zelfs tot
          110 &#176;C om snel te kunnen tappen); bij heetwaterkranen is het 55-65 &#176;C.
        </p>
        <p className="text-gray-700 mb-4">
          De boiler gebruikt een verwarmingselement (doorgaans 1.000-2.500 W) dat alleen
          inschakelt wanneer de watertemperatuur dreigt te zakken onder het setpoint.
          Door de dikke isolatiemantel (vacuumisolatie bij Quooker, polyurethanschuim bij
          goedkopere modellen) is de warmteverliesnelheid laag: slechts 3-10 W gemiddeld.
        </p>
        <p className="text-gray-700 mb-6">
          Dit staat in schril contrast met een <strong>waterkoker</strong>, die geen
          standbyverbruik heeft maar bij elk gebruik 2.000-3.000 W trekt om water van
          kamertemperatuur naar kookpunt te brengen. De efficientieverhouding hangt
          volledig af van de gebruiksfrequentie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Energieverbruik per liter kokend water
        </h2>
        <p className="text-gray-700 mb-4">
          Het verbruik per getapt liter is afhankelijk van de isolatiekwaliteit en het
          gebruikspatroon. Bij een goed geisoleerde tank van 3 liter en een standbyverbruik
          van 7 W, die 5 liter per dag tapt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Tapenergie (5L/dag):</strong> circa 0,35 kWh/dag (opwarmen koud aanvulwater)</li>
          <li><strong>Standby-energie (24h):</strong> 7 W x 24h = 0,17 kWh/dag</li>
          <li><strong>Totaal per dag:</strong> circa 0,52 kWh/dag &asymp; 0,10 kWh per liter</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Bij hogere tapfrequentie daalt het verbruik per liter omdat de standbykosten over
          meer liters worden verdeeld. De opgave van fabrikanten van <strong>0,013-0,025 kWh
          per liter</strong> heeft betrekking op alleen de tapenergie, exclusief standby.
          Voor een eerlijke vergelijking met de waterkoker moet standby worden meegerekend.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Standbyverbruik: de grootste energiepost
        </h2>
        <p className="text-gray-700 mb-4">
          Het <strong>standbyverbruik</strong> van 3-10 W continu is voor de meeste
          huishoudens de dominante energiekost. Jaarlijkse impact:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>3 W standby = 26 kWh/jaar = circa 8 euro (bij 0,30 euro/kWh)</li>
          <li>7 W standby = 61 kWh/jaar = circa 18 euro</li>
          <li>10 W standby = 88 kWh/jaar = circa 26 euro</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Quooker claimt voor hun COMBI-boiler een verbruik van circa &quot;3 eurocent per
          dag&quot; puur voor het kokend water, maar dit is exclusief het warmwatergedeelte
          van de COMBI die ook huishoudelijk warmwater levert.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Energievergelijking: kokendwaterkraan vs. waterkoker
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Apparaat</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verbruik per L</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Standby</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaarlijks (4 L/dag)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kokendwaterkraan (Quooker)</td>
                <td className="border border-gray-300 px-3 py-2">0,013 kWh/L</td>
                <td className="border border-gray-300 px-3 py-2">10 W</td>
                <td className="border border-gray-300 px-3 py-2">100-120 kWh</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kokendwaterkraan (PureAqua)</td>
                <td className="border border-gray-300 px-3 py-2">0,015 kWh/L</td>
                <td className="border border-gray-300 px-3 py-2">7 W</td>
                <td className="border border-gray-300 px-3 py-2">80-100 kWh</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Waterkoker (1,5 L)</td>
                <td className="border border-gray-300 px-3 py-2">0,10 kWh per kook</td>
                <td className="border border-gray-300 px-3 py-2">0 W</td>
                <td className="border border-gray-300 px-3 py-2">70-140 kWh</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Gasboiler instant</td>
                <td className="border border-gray-300 px-3 py-2">0,025 kWh equiv.</td>
                <td className="border border-gray-300 px-3 py-2">0 W</td>
                <td className="border border-gray-300 px-3 py-2">80-100 kWh equiv.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          De waterkoker heeft geen standbyverbruik maar verhit telkens een volle kan (0,8-1,5 L)
          ook als er maar een kopje nodig is. Bij 3-4 kookkeer per dag van een volle kan
          van 1,5 L kost dat 0,3-0,4 kWh/dag, gelijk aan 110-140 kWh/jaar. De
          kokendwaterkraan is dan zuiniger of vergelijkbaar. Bekijk ook de uitgebreide
          vergelijking op onze pagina{' '}
          <Link href="/kokend-water-kraan/merken-vergelijking" className="text-[#005F8A] underline">
            kokend water kraan merken vergelijking
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Quooker CUBE: extra verbruik voor bruisend water
        </h2>
        <p className="text-gray-700 mb-4">
          De Quooker CUBE voegt gefilterd koud en bruisend water toe aan de functies van de
          basisunit. De koelmodule voor het gekoelde gefilterde en bruisende water vraagt
          extra energie: Quooker specificeert dit op <strong>15-20 kWh per jaar extra</strong>,
          overeenkomend met circa 4-6 euro per jaar bij het huidige stroomtarief.
        </p>
        <p className="text-gray-700 mb-6">
          Het CO&#8322;-patroon dat het bruisende water mogelijk maakt heeft geen
          elektrisch verbruik maar kost 15-25 euro per vervangingspatroon (goed voor
          circa 60 liter bruisend water).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Energiebesparing via timer en nachtverlaging
        </h2>
        <p className="text-gray-700 mb-4">
          Veel kokendwaterkranen hebben een ingebouwde eco-functie of zijn geschikt voor
          een externe timer (smart plug). Door de kraan &apos;s nachts (8 uur) uit te schakelen
          bespaart u:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Bij 10 W standby en 8 uur/nacht uitgeschakeld: 2,9 kWh/maand = circa 1 euro/maand</li>
          <li>Jaarlijkse besparing: 34 kWh = circa 10 euro</li>
          <li>Procentuele besparing op standby: 33%</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Let op: bij het opnieuw opstarten duurt het 5-15 minuten voor de tank weer op
          temperatuur is. Een timer die uitschakelt om 23:00 en inschakelt om 06:30 is
          comfortabel. Sommige modellen hebben een weekprogramma met instelbare aan/uit-tijden
          per dag.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Jaarkosten berekening
        </h2>
        <p className="text-gray-700 mb-4">
          Uitgaande van een elektriciteitsprijs van <strong>0,30 euro per kWh</strong>:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Scenario</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">kWh/jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten/jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Laag gebruik (2 L/dag, 7W standby)</td>
                <td className="border border-gray-300 px-3 py-2">65-75</td>
                <td className="border border-gray-300 px-3 py-2">19-23 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Gemiddeld gebruik (4 L/dag, 10W standby)</td>
                <td className="border border-gray-300 px-3 py-2">100-120</td>
                <td className="border border-gray-300 px-3 py-2">30-36 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Hoog gebruik (8 L/dag, 10W standby)</td>
                <td className="border border-gray-300 px-3 py-2">120-150</td>
                <td className="border border-gray-300 px-3 py-2">36-45 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Met timer nachtverlaging (-33% standby)</td>
                <td className="border border-gray-300 px-3 py-2">85-105</td>
                <td className="border border-gray-300 px-3 py-2">25-32 euro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Is een kokendwaterkraan de moeite waard qua energie?
        </h2>
        <p className="text-gray-700 mb-4">
          Puur op energiekosten is het voordeel ten opzichte van een waterkoker beperkt:
          het verschil is doorgaans minder dan 20-30 euro per jaar. De waarde van een
          kokendwaterkraan zit bij de meeste gebruikers in het gemak, de integratie in
          het aanrecht en de kwaliteitsbeleving, niet in de energiebesparing.
        </p>
        <p className="text-gray-700 mb-6">
          Voor een volledig overzicht van alle aspecten &mdash; aanschafprijs, onderhoud,
          energiekosten en kwaliteit &mdash; verwijzen we naar onze vergelijkingspagina{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">
            kokend water kraan
          </Link>{' '}
          en de sectie over{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter combinaties
          </Link>.
        </p>

        <CTABanner context="kokend" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over energieverbruik kokendwaterkraan
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
          <Link href="/kokend-water-kraan/merken-vergelijking" className="text-[#005F8A] underline">merken vergelijking</Link>,{' '}
          <Link href="/quooker-energieverbruik" className="text-[#005F8A] underline">Quooker energieverbruik</Link> en{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>.
        </p>
      </main>
    </>
  );
}
