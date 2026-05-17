import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Capaciteit omgekeerde osmose: liter per uur, debiet en tankgrootte',
  description:
    'Een huishoudelijk osmosefilter produceert 190-400 liter per dag (8-17 liter per uur). Tankless systemen leveren direct 1-2 liter per minuut.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/capaciteit' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel liter per dag produceert een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een 75 GPD osmosemembraan produceert onder ideale omstandigheden (25 graden Celsius, 4,1 bar, TDS 500 mg/L) 284 liter per dag. In de praktijk bij Nederlands kraanwater (15 graden Celsius, 3 bar, TDS 200-400 mg/L) levert hetzelfde membraan circa 114-170 liter per dag. Voor 1-2 personen is een 50-75 GPD systeem ruim voldoende; voor 3-4 personen volstaat 75-100 GPD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat betekent GPD bij osmosefilters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GPD staat voor Gallons Per Day (gallons per dag). 1 Amerikaans gallon = 3,785 liter. Een 75 GPD membraan produceert dus maximaal 75 x 3,785 = 284 liter per dag onder fabrieksomstandigheden (25 graden Celsius, 4,1 bar, 500 mg/L TDS). In de praktijk is de werkelijke productie 40-60% lager door lagere watertemperatuur, lagere druk en ander TDS in Nederlands kraanwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom produceert mijn osmosefilter minder water dan beloofd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De opgegeven GPD-waarde geldt onder ideale laboratoriumomstandigheden (25 graden Celsius, 4,1 bar, 500 mg/L TDS). In Nederland is het kraanwater gemiddeld 12-15 graden Celsius en de waterdruk 3-4 bar met TDS 200-400 mg/L. Elke graad Celsius minder geeft 3% minder productie. Bij 12 graden in plaats van 25 graden is dat al 39% minder. Een permeaatpomp of boosterpomp kan de druk verhogen en het debiet significant verbeteren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een druktank en een tankless osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een druktanksysteem slaat geproduceerd water op in een drukvat van 3-12 liter. Het directe debiet aan de kraan is laag (0,1-0,3 liter per minuut), maar water is direct beschikbaar vanuit de tank. Een tankless (direct flow) systeem produceert continu 1-2 liter per minuut dankzij een ingebouwde pomp, maar er is geen reservoir. Tankless systemen zijn sneller maar duurder. Druktanksystemen zijn geschikt voor normaal huishoudelijk gebruik; tankless voor hogere debieteisen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verhoog ik het debiet van mijn osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn vier effectieve methoden om het debiet te verhogen: (1) een permeaatpomp installeert u na het membraan en verhoogt de druk met 50-70%, wat het debiet met circa 50% verhoogt; (2) een boosterpomp verhoogt de inkomende waterdruk en verbetert de productie aanzienlijk bij lage aanvoerdruk; (3) de waterdruk van uw huis verhogen naar 4-6 bar indien mogelijk; (4) een hoger GPD membraan plaatsen. In de zomer produceert het filter vanzelf meer door hogere watertemperatuur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk GPD osmosemembaan heb ik nodig voor mijn huishouden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor 1-2 personen is een 50-75 GPD (190-284 liter per dag opgegeven, 80-150 liter per dag werkelijk in NL) ruim voldoende, want een Nederlander drinkt gemiddeld 1-1,5 liter water per dag. Voor 3-4 personen volstaat 75-100 GPD. Voor 5 of meer personen of horeca is 100+ GPD of een tankless systeem met boosterpomp aanbevolen. Houd rekening met 40-60% minder werkelijke productie dan de opgegeven GPD-waarde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe groot moet de druktank van een osmosefilter zijn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een druktank van 8-12 liter (brutocapaciteit) levert circa 5-8 liter bruikbaar water (netto, afhankelijk van de voordruk in de tank). Voor een huishouden van 1-4 personen is dit voldoende voor normaal gebruik. Bij hogere vraag of als u wachttijden wilt vermijden, kies een grotere tank van 15-20 liter of overweeg een tankless systeem. Een te kleine tank leidt tot frequente wachttijden als de tank leeggeraakt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft waterdruk invloed op de osmoseproductie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, waterdruk is een van de belangrijkste factoren. Het optimum ligt bij 4-6 bar aanvoerdruk. Bij 2,5 bar produceert het systeem circa 40% minder dan bij 4,1 bar (de teststandaard). Onder 2 bar werkt een osmosesysteem inefficient of stopt het volledig. Gebruik een manometer om uw waterdruk te meten. Bij lage druk (onder 3 bar) is een boosterpomp sterk aanbevolen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Capaciteit omgekeerde osmose: liter per uur, debiet en tankgrootte',
  description:
    'Een huishoudelijk osmosefilter produceert 190-400 liter per dag onder ideale omstandigheden. In Nederland rekent u op 40-60% van de opgegeven GPD-waarde.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/capaciteit',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseCapaciteitPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Capaciteit', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/capaciteit' },
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
          <span>Capaciteit</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Capaciteit omgekeerde osmose: liter per uur, debiet en tankgrootte
          </h1>
          <p className="text-[#005F8A] text-lg">
            De opgegeven GPD-waarde van een osmosefilter geldt onder ideale laboratoriumomstandigheden.
            In de Nederlandse praktijk produceert een 75 GPD systeem slechts 114-170 liter per dag.
            Leer hoe watertemperatuur, druk en TDS de werkelijke capaciteit bepalen, en welk
            systeem bij uw huishouden past.
          </p>
        </section>

        <QuickAnswer answer="Een 75 GPD osmosefilter levert in Nederland 114-170 liter per dag (in plaats van 284 liter op papier) door lagere watertemperatuur en druk. Voor 1-4 personen is 75-100 GPD ruim voldoende. Tankless systemen leveren direct 1-2 liter per minuut; druktanksystemen 0,1-0,3 liter per minuut maar met reservoir." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          GPD: hoe osmosecapaciteit wordt opgegeven
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosefilters worden verkocht met een capaciteitsaanduiding in <strong>GPD (Gallons Per
          Day)</strong>. Een Amerikaans gallon is 3,785 liter, dus:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>50 GPD</strong> = 189 liter per dag</li>
          <li><strong>75 GPD</strong> = 284 liter per dag</li>
          <li><strong>100 GPD</strong> = 378 liter per dag</li>
          <li><strong>200 GPD</strong> = 757 liter per dag</li>
        </ul>
        <p className="text-gray-700 mb-6">
          <strong>Belangrijk:</strong> deze waarden gelden uitsluitend onder
          <strong> ideale testomstandigheden</strong>: watertemperatuur van 25&deg;C, aanvoerdruk
          van 4,1 bar (60 psi) en een TDS van 500 mg/L. In de praktijk zijn de Nederlandse
          omstandigheden beduidend minder gunstig.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Werkelijke capaciteit in Nederland: 40-60% minder
        </h2>
        <p className="text-gray-700 mb-4">
          Het Nederlandse kraanwater heeft gemiddeld een temperatuur van <strong>12-15&deg;C</strong>,
          een aanvoerdruk van <strong>3-4 bar</strong> en een TDS van <strong>200-400 mg/L</strong>.
          Dit resulteert in een werkelijke productie van 40-60% van de opgegeven waarde:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Membraan</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opgegeven (L/dag)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">NL werkelijk (L/dag)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Tankadvies</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Voor wie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">50 GPD</td>
                <td className="border border-gray-300 px-3 py-2">189</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;110</td>
                <td className="border border-gray-300 px-3 py-2">8 L tank</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;2 personen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">75 GPD</td>
                <td className="border border-gray-300 px-3 py-2">284</td>
                <td className="border border-gray-300 px-3 py-2">114&ndash;170</td>
                <td className="border border-gray-300 px-3 py-2">8&ndash;12 L tank</td>
                <td className="border border-gray-300 px-3 py-2">2&ndash;3 personen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">100 GPD</td>
                <td className="border border-gray-300 px-3 py-2">378</td>
                <td className="border border-gray-300 px-3 py-2">150&ndash;227</td>
                <td className="border border-gray-300 px-3 py-2">12 L tank</td>
                <td className="border border-gray-300 px-3 py-2">3&ndash;4 personen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">200 GPD</td>
                <td className="border border-gray-300 px-3 py-2">757</td>
                <td className="border border-gray-300 px-3 py-2">300&ndash;450</td>
                <td className="border border-gray-300 px-3 py-2">Tankless aanbevolen</td>
                <td className="border border-gray-300 px-3 py-2">5+ personen / horeca</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Debiet correctiefactoren: wat de productie beinvloedt
        </h2>

        <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-3">
          1. Watertemperatuur
        </h3>
        <p className="text-gray-700 mb-4">
          Temperatuur is de meest onderschatte factor. De viscositeit van water neemt toe bij
          lage temperaturen, waardoor het membraan minder goed doorlatend is:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Elke 1&deg;C minder dan 25&deg;C = circa 3% minder productie</li>
          <li>Bij 15&deg;C (gemiddeld NL zomer): 30% minder productie</li>
          <li>Bij 12&deg;C (gemiddeld NL winter): 39% minder productie</li>
          <li>Bij 8&deg;C (koud grondwater in winter): 51% minder productie</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Dit verklaart waarom uw osmosefilter in de winter merkbaar langzamer produceert dan
          in de zomer.
        </p>

        <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-3">
          2. Waterdruk
        </h3>
        <p className="text-gray-700 mb-4">
          Osmose werkt door osmotische druk te overwinnen met aanvoerdruk. Hogere druk =
          meer productie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Optimum: 4-6 bar aanvoerdruk</li>
          <li>Bij 2,5 bar: circa 40% minder productie dan bij 4,1 bar</li>
          <li>Onder 2 bar: systeem werkt niet meer efficient</li>
          <li>Boven 7 bar: membraanschade mogelijk zonder drukbegrenzer</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Controleer uw aanvoerdruk met een manometer. De gemiddelde Nederlandse huisaanvoerdruk
          is 3-4 bar; in hoger gelegen woningen of bij verouderd leidingnet kan dit minder zijn.
          Raadpleeg ook onze pagina over{' '}
          <Link href="/omgekeerde-osmose/waterdruk" className="text-[#005F8A] underline">waterdruk
          bij omgekeerde osmose</Link> voor meer details.
        </p>

        <h3 className="text-lg font-semibold text-[#003F5C] mt-6 mb-3">
          3. TDS en hardheid
        </h3>
        <p className="text-gray-700 mb-6">
          Een hoger TDS-gehalte (meer opgeloste stoffen) betekent hogere osmotische druk die
          het systeem moet overwinnen. Harder water (hogere TDS) leidt tot minder productie
          en mogelijk snellere membraanvervuiling. In Nederland varieert het TDS van
          200 mg/L (zacht water, west-NL) tot 500 mg/L (hard water, Brabant/Limburg).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Druktank versus tankless: welk systeem past bij u?
        </h2>
        <p className="text-gray-700 mb-4">
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">Omgekeerde
          osmosesystemen</Link> zijn verkrijgbaar in twee varianten:
        </p>

        <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Druktanksysteem (standaard)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Debiet aan kraan: 0,1&ndash;0,3 L/min</li>
              <li>Reservoirinhoud: 3&ndash;12 liter</li>
              <li>Prijs: &euro;200&ndash;500</li>
              <li>Geschikt voor: normaal huishoudelijk gebruik, 1&ndash;4 personen</li>
              <li>Nadeel: langzamer bij piekverbruik als tank leeg is</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Tankless (direct flow)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Debiet aan kraan: 1&ndash;2 L/min continu</li>
              <li>Geen reservoir nodig</li>
              <li>Prijs: &euro;400&ndash;900</li>
              <li>Geschikt voor: gezinnen, horeca, hoog verbruik</li>
              <li>Voordeel: geen wachttijd, compacter</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Debiet verbeteren: vier opties
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Permeaatpomp:</strong> plaatst u tussen membraan en tank; verhoogt de druk
            aan de permeaaткant en verbetert het debiet met circa 50%. Geen elektriciteit nodig
            (hydraulisch aangedreven). Lees meer over{' '}
            <Link href="/omgekeerde-osmose/rendement" className="text-[#005F8A] underline">rendement
            verbeteren bij omgekeerde osmose</Link>
          </li>
          <li>
            <strong>Boosterpomp:</strong> verhoogt de inkomende waterdruk tot 4-6 bar.
            Vereist elektriciteit (3-10 Watt). Aanbevolen bij aanvoerdruk onder 3 bar
          </li>
          <li>
            <strong>Hoger GPD membraan:</strong> vervang een 50 GPD door een 75 of 100 GPD
            membraan. Eenvoudig en relatief goedkoop (&euro;20&ndash;60 voor het membraan)
          </li>
          <li>
            <strong>Upgrade naar tankless:</strong> voor de beste langetermijnoplossing bij
            hogere debietwensen. Zie ook onze vergelijking van{' '}
            <Link href="/osmose-filter/zonder-tank" className="text-[#005F8A] underline">osmosefilters
            zonder tank</Link>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoeveel drinkwater verbruikt een Nederlands huishouden?
        </h2>
        <p className="text-gray-700 mb-4">
          Een Nederlander drinkt gemiddeld <strong>1-1,5 liter water per dag</strong> direct als
          drinkwater. Inclusief koken, thee en koffie is het totale verbruik van osmosewater
          circa 2-3 liter per persoon per dag. Dat betekent:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>1 persoon: circa 15-20 liter per week</li>
          <li>2 personen: circa 30-40 liter per week</li>
          <li>4 personen: circa 60-80 liter per week</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een 50 GPD systeem met NL-werkelijke capaciteit van 80-110 liter per dag kan zelfs
          een gezin van 4 problemloos voorzien van drinkwater, ook als de werkelijke productie
          lager uitvalt dan het papier belooft.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosecapaciteit
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
          <Link href="/osmose-filter/zonder-tank" className="text-[#005F8A] underline">osmosefilter zonder tank</Link>,{' '}
          <Link href="/omgekeerde-osmose/rendement" className="text-[#005F8A] underline">rendement omgekeerde osmose</Link>,{' '}
          <Link href="/omgekeerde-osmose/waterdruk" className="text-[#005F8A] underline">waterdruk en osmose</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
