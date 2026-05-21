import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater voor aquarium: hardheid instellen, buffer en zoetwater',
  description:
    'Osmosewater is de basis voor precies ingesteld aquariumwater. TDS nul, geen chloor, geen nitraat. Mix met leidingwater of remineraliseer voor de gewenste GH.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/aquarium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom is osmosewater geschikt voor aquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft TDS 0-5 mg/L, geen chloor, geen nitraat en geen hardheid. Hierdoor is het de ideale startbasis: u heeft volledige controle over GH, KH en pH. Nederlands leidingwater is te hard (10-20 dH) en bevat chloor dat kieuwen beschadigt en het biologisch filter verstoort. Osmosewater gemengd met leidingwater of geremineraliseerd geeft de exacte parameters voor elke vissoort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe stel ik GH en KH in voor mijn aquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mix osmosewater met leidingwater in de verhouding die past bij uw gewenste GH. Formule: gewenste GH = percentage osmose x 0 + percentage leidingwater x lokale GH. Bij leidingwater van 20 dH en doelwaarde 10 dH: 50% osmose + 50% leidingwater. Voor lagere waarden (Caridina-garnalen: GH 4-6) gebruikt u specifieke remineralisatieproducten zoals Salty Shrimp GH+.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke remineralisatieproducten zijn geschikt voor aquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor garnalen: Salty Shrimp Bee Shrimp Mineral GH+ (Caridina), Salty Shrimp GH/KH+ (Neocaridina). Voor zoetwater: Seachem Equilibrium (verhoogt GH), Brightwell Aquatics MicrōBacter. Drinkwater-remineralisatiefilters zijn niet geschikt voor aquarium omdat zij een vast mineraalpatroon toevoegen dat niet aanpasbaar is per vissoort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan osmosewater direct in het aquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, puur osmosewater heeft GH 0, KH 0 en pH ca 6,0-6,5. Zonder KH (carbonaathardheid als buffer) kan de pH sterk schommelen, wat fataal is voor vis en garnalen. Remineraliseer altijd voor gebruik of meng met leidingwater. Verwissel nooit meer dan 25-30% van het aquariumvolume per waterwissel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke parameters hebben Caridina-garnalen nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Caridina-garnalen (Crystal Red, Bee Shrimp) hebben zeer zacht, licht zuur water nodig: GH 4-6 dH, KH 0-2 dH, TDS 100-200 mg/L en pH 5,8-6,8. Deze parameters zijn in harde-water-regioa in Nederland alleen bereikbaar met osmosewater als basis. Leidingwater mengen is hier onvoldoende; gebruik Salty Shrimp Bee Shrimp Mineral GH+ op puur osmosewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel osmosewater heb ik nodig voor mijn aquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reken met 20% wekelijkse waterwissel. Voor een 100-liter aquarium is dat 20 liter per week. Een osmosefilter van 50 GPD (190 liter per dag) produceert ruimschoots genoeg. Houd ook rekening met afvalwater: bij een systeem zonder boosterpomp produceert u 1 liter osmosewater per 3-4 liter afvalwater. Sla geproduceerd osmosewater op in een schone jerrycan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen zoetwater en zoutwater aquarium voor osmose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een zoetwateraquarium kunt u osmosewater mengen met leidingwater of remineraliseren. Voor een zeeaquarium (marineaquarium) is osmosewater verplicht als basis. Leidingwater met nitraat en fosfaat introduceert direct algengroei en verstoort het mariene ecosysteem. Aan osmosewater voegt u aquariumzout toe (Reef Crystals, Instant Ocean) tot soortelijk gewicht 1,025-1,026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Noodgeval: kan ik leidingwater gebruiken als er geen osmosewater is?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In noodgevallen kunt u gekookt en afgekoeld leidingwater gebruiken, maar behandel het eerst: laat het 24 uur staan (chloor verdampt) of gebruik een natriumthiosulfaat-ontchlorer. Houd de waterwisselpercentages laag (maximaal 10%) om schokken in hardheid en pH te minimaliseren. Voor langdurig gebruik is osmosewater sterk aan te raden voor gevoelige soorten.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater voor aquarium: hardheid instellen, buffer en zoetwater',
  description:
    'Osmosewater is de basis voor precies ingesteld aquariumwater. TDS nul, geen chloor, geen nitraat. Mix met leidingwater of remineraliseer voor GH, KH en pH.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/aquarium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterAquariumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmose water', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater voor aquarium', item: 'https://waterfilterplatform.nl/osmose-water/aquarium' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/osmose-water" className="hover:underline">Osmose water</Link> &rsaquo;{' '}
          <span>Osmosewater voor aquarium</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor aquarium: hardheid instellen, buffer en zoetwater
          </h1>
          <p className="text-[#005F8A] text-lg">
            Osmosewater is de schone startbasis voor elk aquarium. TDS bijna nul, geen chloor, geen
            nitraat en geen hardheid. U bepaalt zelf welke mineralen en in welke hoeveelheid u toevoegt
            voor de gewenste GH, KH en pH voor uw vissen, garnalen of koraalrif.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater (TDS 0-5) geeft volledige controle over GH, KH en pH in uw aquarium. Geen chloor, geen nitraat. Mix met leidingwater voor gemiddelde parameters of remineraliseer met Salty Shrimp of Seachem Equilibrium voor specifieke vissoorten. Caridina-garnalen en zeeaquaria vereisen osmosewater als basis." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom osmosewater voor aquarium?
        </h2>
        <p className="text-gray-700 mb-4">
          Nederlands leidingwater bevat van nature hoge concentraties calcium en magnesium (10-20 dH),
          chloor als desinfectans en soms nitraat uit de landbouw. Voor veeleisende aquariumvissen en
          garnalen is dit problematisch:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Chloor</strong> beschadigt de kieuwen van vis en verstoort het biologisch filter
            (nuttige bacterien sterven af)
          </li>
          <li>
            <strong>Hoge hardheid</strong> maakt het onmogelijk om de lage GH en KH te bereiken die
            Amazone-vissen, discus en Caridina-garnalen nodig hebben
          </li>
          <li>
            <strong>Nitraat</strong> bevordert algengroei en is toxisch bij hogere concentraties,
            met name voor zeeaquaria en jonge vis
          </li>
          <li>
            <strong>Fosfaat</strong> (toegevoegd als corrosiebeschermer) versterkt algengroei in
            zeeaquaria en gesloten systemen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Osmosewater biedt een perfecte startbasis met TDS 0-5 mg/L. Geen van bovenstaande stoffen
          is aanwezig. U bouwt zelf de exacte watersamenstelling op die uw dieren nodig hebben.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Parameters per aquariumtype
        </h2>
        <p className="text-gray-700 mb-4">
          Verschillende vissoorten en aquariumtypen hebben sterk uiteenlopende watereisen. Osmosewater
          als basis maakt alle onderstaande parameters bereikbaar, ook in regio&apos;s met hard leidingwater:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aquariumtype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">GH (dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">KH (dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">pH</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">TDS (mg/L)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Afrikaanse cichliden</td>
                <td className="border border-gray-300 px-3 py-2">15-20</td>
                <td className="border border-gray-300 px-3 py-2">10-15</td>
                <td className="border border-gray-300 px-3 py-2">7,8-8,5</td>
                <td className="border border-gray-300 px-3 py-2">300-500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Discus / Amazone-vissen</td>
                <td className="border border-gray-300 px-3 py-2">3-8</td>
                <td className="border border-gray-300 px-3 py-2">1-3</td>
                <td className="border border-gray-300 px-3 py-2">6,0-7,0</td>
                <td className="border border-gray-300 px-3 py-2">80-150</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Neon tetra</td>
                <td className="border border-gray-300 px-3 py-2">5-12</td>
                <td className="border border-gray-300 px-3 py-2">2-6</td>
                <td className="border border-gray-300 px-3 py-2">6,0-7,5</td>
                <td className="border border-gray-300 px-3 py-2">100-200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Neocaridina garnalen</td>
                <td className="border border-gray-300 px-3 py-2">6-8</td>
                <td className="border border-gray-300 px-3 py-2">2-4</td>
                <td className="border border-gray-300 px-3 py-2">7,0-7,8</td>
                <td className="border border-gray-300 px-3 py-2">150-250</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Caridina garnalen</td>
                <td className="border border-gray-300 px-3 py-2">4-6</td>
                <td className="border border-gray-300 px-3 py-2">0-2</td>
                <td className="border border-gray-300 px-3 py-2">5,8-6,8</td>
                <td className="border border-gray-300 px-3 py-2">100-200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeeaquarium (basis)</td>
                <td className="border border-gray-300 px-3 py-2">-</td>
                <td className="border border-gray-300 px-3 py-2">-</td>
                <td className="border border-gray-300 px-3 py-2">-</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmose mengen met leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          Voor aquariumtypen die niet de laagste parameters vereisen, is mengen van osmosewater met
          leidingwater de eenvoudigste methode. De mengverhouding berekent u als volgt:
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Formule:</strong> gewenste GH = (percentage leidingwater / 100) x lokale leidingwater-GH
        </p>
        <p className="text-gray-700 mb-6">
          Voorbeeld: leidingwater Amsterdam heeft GH ca 9 dH. Voor neon tetra&apos;s (doel GH 7 dH):
          7 / 9 = 78% leidingwater + 22% osmosewater. Bij harder leidingwater (Utrecht, GH ca 14 dH)
          voor hetzelfde doel: 7 / 14 = 50% leidingwater + 50% osmosewater. Meet altijd na met een
          GH-testkit of TDS-meter.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatie voor aquarium
        </h2>
        <p className="text-gray-700 mb-4">
          Voor Caridina-garnalen en andere soorten met zeer lage parametereisen is mengen met leidingwater
          onvoldoende. U gebruikt specifieke aquarium-remineralisatieproducten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Salty Shrimp Bee Shrimp Mineral GH+:</strong> verhoogt GH zonder KH te verhogen.
            Ideaal voor Caridina-garnalen die KH bijna nul nodig hebben. Doseer op puur osmosewater
          </li>
          <li>
            <strong>Salty Shrimp GH/KH+:</strong> verhoogt beide parameters gelijkmatig. Geschikt
            voor Neocaridina-garnalen en zachtwatervissen
          </li>
          <li>
            <strong>Seachem Equilibrium:</strong> verhoogt GH (calcium, magnesium, kalium) zonder
            natrium. Geschikt voor zoetwater-plantenbakken en tropische vissen
          </li>
          <li>
            <strong>Brightwell Aquatics MicrOBacter:</strong> bevordert biologische filtratie in
            combinatie met osmosewater
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Let op: drinkwater-remineralisatiefilters (zoals die bij
          <Link href="/osmose-water/remineralisatie" className="text-[#005F8A] underline"> osmosefilters voor drinkwater</Link>)
          zijn niet geschikt voor aquarium. Zij voegen een vast mineraalpatroon toe dat niet aanpasbaar
          is aan de specifieke behoeften van uw vissen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zoetwater vs zoutwater aquarium
        </h2>
        <p className="text-gray-700 mb-4">
          Voor een <strong>zoetwateraquarium</strong> is osmosewater aanbevolen maar niet altijd
          verplicht. Zacht leidingwater (Friesland, Groningen) kan direct gebruikt worden voor veel
          soorten. Voor gevoelige soorten zoals discus en Caridina-garnalen is osmosewater wel
          noodzakelijk, zeker in hardwaterregio&apos;s.
        </p>
        <p className="text-gray-700 mb-6">
          Voor een <strong>zeeaquarium (marineaquarium)</strong> is osmosewater absoluut verplicht.
          U mengt osmosewater met kwalitatief aquariumzout (Reef Crystals, Instant Ocean, Red Sea
          Salt Pro) tot soortelijk gewicht 1,025-1,026 (35 promille). Leidingwater met nitraat,
          fosfaat en chloor introduceert direct algenproblemen en beschadigt koralen en ongewervelden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Garnalen en gevoelige vissen: osmose als enige optie
        </h2>
        <p className="text-gray-700 mb-4">
          Caridina-garnalen (Crystal Red, Crystal Black, Tiger-garnalen) zijn de meest veeleisende
          aquariumdieren als het gaat om waterkwaliteit. Zij leven in de natuur in zacht, licht
          zuur bergwater in Aziatisch regenwoud:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Neocaridina-garnalen</strong> (Cherry Shrimp, Blue Dream): GH 6-8 dH, KH 2-4 dH,
            TDS 150-250 mg/L. Mengen van osmose met leidingwater is hier afdoende in de meeste regio&apos;s
          </li>
          <li>
            <strong>Caridina-garnalen</strong> (Crystal Red, Bee Shrimp): GH 4-6 dH, KH 0-2 dH,
            TDS 100-200 mg/L. Osmosewater als basis is de enige manier om deze parameters te bereiken
            in hardwatergebieden. Gebruik Salty Shrimp Bee Shrimp Mineral GH+
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoeveel osmosewater heeft u nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          De benodigde hoeveelheid osmosewater hangt af van het aquariumvolume en de frequentie van
          waterwissels. Praktische richtlijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Wekelijkse waterwissel 20%: 100 liter aquarium = 20 liter osmosewater per week</li>
          <li>Een 50 GPD osmosefilter produceert ca 190 liter per dag; ruimschoots voor hobbygebruik</li>
          <li>Houd rekening met afvalwater: 1 liter osmosewater per 3-4 liter afvalwater (zonder boosterpomp)</li>
          <li>Sla osmosewater op in een schone, lichtdichte jerrycan of opslagtank; nooit in metalen containers</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bekijk ons overzicht van{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosefilters voor thuisgebruik</Link>.
          Compacte 50-75 GPD systemen zijn ideaal voor aquariumgebruik en kunnen ook drinkwater leveren.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterfilter/aquarium" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor aquarium</h3>
            <p className="text-sm text-gray-600">Welk waterfilter is het meest geschikt voor uw aquarium?</p>
          </Link>
          <Link href="/waterfilter/voor-aquarium" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter kopen voor aquarium</h3>
            <p className="text-sm text-gray-600">Vergelijk waterfilters speciaal ontworpen voor aquariumgebruik.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechniek omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">De techniek achter RO-filtratie uitgelegd voor consumenten.</p>
          </Link>
          <Link href="/osmose-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater overzicht</h3>
            <p className="text-sm text-gray-600">Alles over osmosewater: toepassingen, gezondheid en kwaliteit.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosewater voor aquarium
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
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosefilter uitleg</Link>,{' '}
          <Link href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">remineralisatie osmosewater</Link>,{' '}
          <Link href="/leidingwater/hardheid-kaart" className="text-[#005F8A] underline">waterhardheid per gemeente</Link> en{' '}
          <Link href="/osmose-water/gezond" className="text-[#005F8A] underline">is osmosewater gezond</Link>.
        </p>
      </main>
    </>
  );
}
