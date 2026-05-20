import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder zout: tablet, blok en grof zout vergelijken',
  description:
    'Voor een waterontharder gebruik je regeneratiezout: tabletzout (meest gebruikt), blokzout of grof zout. Kwaliteit 99,5%+ NaCl is essentieel.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/zout-types' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk zout gebruik ik voor een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een waterontharder gebruik je uitsluitend regeneratiezout: natriumchloride (NaCl) met een zuiverheid van minimaal 99,5%. De meest gebruikte vorm in Nederland is tabletzout (samengeperste NaCl-tabletten van 5-10 gram). Blokzout en grof granulaat zijn alternatieven. Nooit keukenzout, zeezout of strooizout gebruiken vanwege te veel onzuiverheden die de hars beschadigen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het minimale NaCl-percentage voor waterontharder zout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het minimale NaCl-gehalte voor kwalitatief regeneratiezout is 99,5%. Onzuiverheden boven 0,5% - met name ijzer, mangaan, calcium en onoplosbare residuen - kunnen de ionenwisselaarhars beschadigen, de harscapaciteit verlagen en extra onderhoud veroorzaken. Kwaliteitsmerk tabletzout zoals Esco EN 973 Type A voldoet aan de Europese norm voor regeneratiezout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel zout verbruikt een waterontharder per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het jaarlijkse zoutverbruik hangt af van de waterhardheid, het waterverbruik en de instelling van de ontharder. Als richtlijn: een gemiddeld gezin van 4 personen in een gebied met hardheid 20 dH verbruikt circa 150 tot 250 kg regeneratiezout per jaar. Bij efficiencyinstellingen (demand-initiated regeneration) kan dit dalen naar 100 tot 150 kg. Raadpleeg de handleiding van uw ontharder voor exacte berekeningen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is tabletzout of blokzout beter voor een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tabletzout is de meest aanbevolen keuze voor de meeste waterontharders. Tabletten lossen gelijkmatig op, verminderen zoutbrugvorming en zijn breed beschikbaar. Blokzout is geschikt voor waterontharders met grote zoutkamers en biedt het voordeel van minder bijvullen. Voor kleine of compacte ontharders is blokzout minder geschikt vanwege de omvang. Controleer altijd het fabrikantadvies voor uw specifieke model.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom mag ik geen gewoon keukenzout gebruiken in een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keukenzout, zeezout en strooizout bevatten te veel onzuiverheden (anti-klontermiddelen, jodium, calcium, ijzer) en zijn niet voldoende gezuiverd voor waterontharder-toepassingen. Deze onzuiverheden kunnen de ionenwisselaarhars verstoppen, de harscapaciteit permanent verlagen en kalkafzettingen in de zoutkamer veroorzaken. Gebruik uitsluitend regeneratiezout met EN 973 certificering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de beste merken regeneratiezout voor waterontharders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esco tabletzout is het meest verkochte merk in Nederland en wordt door vrijwel alle ontharder-fabrikanten aanbevolen. BWT Regeneriersalz en Kinetico zout zijn merkspecifieke opties van hoge kwaliteit maar duurder. Huismerken van bouwmarkten (Gamma, Praxis, Hornbach) voldoen in de meeste gevallen aan de EN 973 norm en zijn een kosteneffectief alternatief. Prijs varieert van 0,25 tot 0,40 euro per kg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is zoutbrugvorming en hoe voorkom ik het?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zoutbrugvorming (salt bridging) treedt op wanneer zoutkorrels samenklonteren en een harde laag vormen boven de zoutoplossing (pekel), waardoor de ontharder niet meer goed regenereert. Oorzaken zijn vochtige omstandigheden, grof zout of goedkoop zout met anti-klonter-onvriendelijke additieven. Preventie: gebruik tabletzout van kwaliteitsmerken, bewaar zout droog en gebruik de zoutkamer niet te vol (max 2/3).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer heb ik ijzerblokkerende zouttabletten nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IJzerblokkerende zouttabletten (met citroenzuurderivaten of speciale additieven) zijn nuttig in regio\'s met ijzerrijk water (meer dan 0,2 mg/L ijzer). IJzer kan de ionenwisselaarhars vervuilen en de regeneratie-efficientie verlagen. In gebieden met hoge ijzerconcentraties, typisch in diep grondwater in Oost- en Zuid-Nederland, zijn deze speciale tabletten of afzonderlijke Res-Up harscleaner-tabletten aan te bevelen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder zout: tablet, blok en grof zout vergelijken',
  description:
    'Voor een waterontharder gebruik je regeneratiezout: tabletzout, blokzout of grof zout. Kwaliteit 99,5%+ NaCl is essentieel. Vergelijking van merken, prijzen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/zout-types',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderZoutTypesPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Zout types vergelijken', item: 'https://waterfilterplatform.nl/waterontharder/zout-types' },
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
          <span>Zout types vergelijken</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder zout: tablet, blok en grof zout vergelijken
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een waterontharder heeft regeneratiezout nodig om de ionenwisselaarhars te herstellen.
            Tabletzout is de standaard in Nederland, maar blokzout en grof granulaat zijn alternatieven.
            Kwaliteit en NaCl-percentage maken het verschil voor de levensduur van uw ontharder.
          </p>
        </section>

        <QuickAnswer answer="Gebruik voor een waterontharder altijd regeneratiezout met minimaal 99,5% NaCl. Tabletzout is de meest gebruikte en aanbevolen keuze in Nederland vanwege gelijkmatige oplossing en lage kans op zoutbrugvorming. Prijs: 0,25-0,40 euro per kg bij bouwmarkten. Nooit keukenzout of strooizout gebruiken." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom heeft een waterontharder regeneratiezout nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link> werkt
          via ionenwisseling: de ionenwisselaarhars vervangt calcium- en magnesiumionen (verantwoordelijk
          voor waterhardheid) door natriumionen. Na verloop van tijd raakt de hars verzadigd met
          calcium en magnesium en verliest het zijn werking. Regeneratie met een geconcentreerde
          natriumchlorideoplossing (pekel) herstelt de hars:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Natriumionen uit het zout verdringen de opgeslagen calcium- en magnesiumionen van de hars</li>
          <li>Calcium en magnesium worden met het spoelwater afgevoerd naar het riool</li>
          <li>De hars is weer volledig geladen met natriumionen en klaar voor de volgende cyclus</li>
        </ul>
        <p className="text-gray-700 mb-6">
          De kwaliteitseis voor regeneratiezout is strikt: minimaal <strong>99,5% NaCl</strong> en
          maximaal 0,5% onzuiverheden. IJzer, mangaan en calcium zijn schadelijke onzuiverheden die
          de harsporieen kunnen blokkeren en de ionenwisselcapaciteit permanent verlagen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tabletzout: de standaard keuze
        </h2>
        <p className="text-gray-700 mb-4">
          Tabletzout is veruit het meest gebruikte regeneratiezout in Nederland. Het bestaat uit
          samengeperste NaCl-korrels in tabletvorm, doorgaans 5&ndash;10 gram per tablet.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Voordelen:</strong> gelijkmatige en gecontroleerde oplosnelheid, vermindert
            zoutbrugvorming ten opzichte van los granulaat, eenvoudig te hanteren en op te slaan,
            breed beschikbaar in bouwmarkten en supermarkten
          </li>
          <li>
            <strong>Normen:</strong> kwaliteitsproducten voldoen aan <strong>EN 973 Type A</strong>,
            de Europese norm voor regeneratiezout voor waterontharders
          </li>
          <li>
            <strong>Prijs:</strong> 6&ndash;10 euro per 25 kg zak (&euro;0,24&ndash;0,40 per kg)
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Populaire merken in Nederland zijn Esco (marktleider), BWT, Kinetico en huismerken van
          bouwmarkten. Esco-tabletten worden door de meeste ontharder-fabrikanten als referentieproduct
          aanbevolen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Blokzout: minder bijvullen, meer moeite
        </h2>
        <p className="text-gray-700 mb-4">
          Blokzout bestaat uit grote, compacte blokken NaCl van 2&ndash;8 kg per blok. De trage
          oplosnelheid maakt blokzout geschikt voor waterontharders met grotere zoutkamers.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Voordelen:</strong> minder frequent bijvullen nodig, stabiele pekelopbouw
            vanwege langzame oplossing
          </li>
          <li>
            <strong>Nadelen:</strong> zwaar om te sjouwen en te hanteren, minder geschikt voor
            kleine of compacte waterontharders, beperktere beschikbaarheid dan tabletzout
          </li>
          <li>
            <strong>Prijs:</strong> vergelijkbaar met tabletzout per kilogram
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Controleer altijd de fabrikanthandleiding van uw waterontharder. Niet alle modellen zijn
          geschikt voor blokzout. Sommige ontharders met automatisch zoutniveausensor werken beter
          met tabletzout vanwege de voorspelbaardere oploskarakteristiek.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Grof granulaat: goedkoper maar meer risico
        </h2>
        <p className="text-gray-700 mb-4">
          Grof zout (granulaat) bestaat uit losse kristallen en lost sneller op dan tabletten.
          Het is doorgaans iets goedkoper per kilogram.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Voordelen:</strong> snellere pekelopbouw, lagere prijs per kg bij grootverpakking
          </li>
          <li>
            <strong>Nadelen:</strong> <strong>hogere kans op zoutbrugvorming</strong> vanwege losse
            kristalstructuur. Zoutbruggen blokkeren de pekelaanmaak en verstoren de regeneratiecyclus.
            Niet aanbevolen door alle ontharder-fabrikanten
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Check het fabrikantadvies voordat u granulaat gebruikt. Sommige ontharders specificeren
          expliciet tabletzout of blokzout als enige toegestane zouttype.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Speciaal zout: ijzerblokkering en harscleaner
        </h2>
        <p className="text-gray-700 mb-4">
          In regio&apos;s met ijzerrijk bronwater (meer dan 0,2 mg/L ijzer) kan ijzeraccumulatie
          in de ionenwisselaarhars de regeneratie-efficientie verlagen. Oplossingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>IJzerblokkerende zouttabletten:</strong> bevatten citroenzuurderivaten of speciale
            additieven die ijzeraccumulatie tegengaan. Merken: Esco Iron Block, BWT Iron Protect.
            Prijs: 10&ndash;15% duurder dan standaard tabletzout
          </li>
          <li>
            <strong>Res-Up / harscleaner tabletten:</strong> los toe te voegen aan de zoutkamer voor
            periodieke reiniging van de hars. Aanbevolen 1&ndash;2 keer per jaar in ijzerrijke gebieden
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Merken en prijzen vergelijking
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Merk</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">NaCl %</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs per 25 kg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Esco</td>
                <td className="border border-gray-300 px-3 py-2">Tablet (EN 973 Type A)</td>
                <td className="border border-gray-300 px-3 py-2">99,9%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;7&ndash;9</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">BWT</td>
                <td className="border border-gray-300 px-3 py-2">Tablet / blok</td>
                <td className="border border-gray-300 px-3 py-2">99,8%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;8&ndash;11</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kinetico</td>
                <td className="border border-gray-300 px-3 py-2">Tablet (merkspecifiek)</td>
                <td className="border border-gray-300 px-3 py-2">99,8%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;9&ndash;13</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Bouwmarkt huismerk</td>
                <td className="border border-gray-300 px-3 py-2">Tablet / granulaat</td>
                <td className="border border-gray-300 px-3 py-2">99,5&ndash;99,8%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5&ndash;7</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Prijsontwikkeling regeneratiezout 2021&ndash;2026
        </h2>
        <p className="text-gray-700 mb-6">
          Zoutprijzen stegen in 2021&ndash;2023 sterk als gevolg van hogere energieprijzen
          (zoutproductie is energie-intensief) en verstoringen in toeleveringsketens. In 2024&ndash;2026
          zijn de prijzen gestabiliseerd op circa <strong>0,25&ndash;0,40 euro per kg</strong> in
          bouwmarkten bij 25 kg zakken. Bij grotere hoeveelheden (200&ndash;500 kg pallets) dalen
          prijzen naar 0,15&ndash;0,20 euro per kg. Voor een gemiddeld huishouden met
          150&ndash;200 kg jaarverbruik zijn de jaarlijkse zoutkosten circa 40&ndash;70 euro.
          Meer over <Link href="/waterontharder/zout-gebruik" className="text-[#005F8A] underline">zoutverbruik en kosten</Link> per
          wateronthardertype.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterontharder zout
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
          <Link href="/waterontharder/zout-gebruik" className="text-[#005F8A] underline">zoutverbruik berekenen</Link>,{' '}
          <Link href="/waterontharder/onderhoud" className="text-[#005F8A] underline">waterontharder onderhoud</Link>,{' '}
          <Link href="/leidingwater/hard-water" className="text-[#005F8A] underline">hard water problemen</Link> en{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder kopen</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/onderhoud/waterontharder-zout" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zout voor waterontharder onderhoud</h3>
              <p className="text-sm text-gray-600">Pellets, blokken of korrels: welk zout-type past bij uw waterontharder en watergebruik.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: zout-zuiverheid eisen</h3>
              <p className="text-sm text-gray-600">Waarom zoutzuiverheid (&gt;99.5%) belangrijk is voor de levensduur van de ionenwisselhars.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
