import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder zoutverbruik: optimaliseren, soorten zout en kosten',
  description:
    'Een waterontharder verbruikt 3-10 kg zout per regeneratie. Het verbruik hangt af van de harscapaciteit, waterhardheid en regeneratiefrequentie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/zout-gebruik' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel zout verbruikt een waterontharder per regeneratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een huishoudelijke waterontharder verbruikt doorgaans 3-10 kg zout per regeneratie, afhankelijk van de harscapaciteit en de instelling. Een kleine installatie (10 liter hars) verbruikt ca. 2-4 kg per regeneratie; een grotere (25-30 liter hars) verbruikt 6-10 kg. De vuistregel is: harsvolume (liter) x waterhardheid (dH) x 0,08-0,12 kg zout per liter hars per regeneratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk zout is het beste voor een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tabletzout (>99,5% NaCl) is voor de meeste huishoudelijke waterontharders de beste keuze vanwege de hoge zuiverheidsgraad, uniforme afmeting en lage kans op brugvorming. Granulaatzout lost sneller op en is geschikt voor modellen met korte regeneratietijd. Zeezout en Himalayazout zijn NIET geschikt voor waterontharders: de onzuiverheden beschadigen de hars en ventielen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereken ik het jaarlijkse zoutverbruik van mijn waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Formule: (harsvolume in liter) x (waterhardheid in dH) x 0,10 kg = zout per regeneratie. Vermenigvuldig dit met het aantal regeneraties per jaar. Voorbeeld: 15 liter hars x 20 dH x 0,10 = 3 kg per regeneratie. Bij wekelijkse regeneratie: 3 x 52 = 156 kg per jaar. Vraaggestuurde ontharders regenereren alleen als nodig en verbruiken 20-30% minder zout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een zoutbrug en hoe voorkom ik hem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een zoutbrug is een harde koek van samengeklonterd zout bovenin de zouttank die ervoor zorgt dat het zout niet in contact komt met het water. Hierdoor wordt er geen pekel gevormd en regenereert de ontharder slecht. Voorkomen: gebruik tabletzout van hoge kwaliteit, houd de zouttank niet te vol (max. 2/3 vol), en controleer maandelijks of het zout los is. Los een bestaande brug op door voorzichtig los te prikken met een stok.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verhoogt een waterontharder het natriumgehalte in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Bij een waterhardheid van 20 dH stijgt het natriumgehalte in zacht water met circa 117 mg/L door het ionenuitwisselingsproces (elk Ca2+-ion wordt vervangen door twee Na+-ionen). Voor de meeste mensen is dit geen probleem, maar hypertensie-patienten die een natriumarm dieet volgen, doen er goed aan kaliumchloride (KCl) te gebruiken als alternatief regeneratiezout. KCl is duurder maar voegt natrium niet toe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe optimaliseer ik het zoutverbruik van mijn waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vier stappen: (1) Stel de ontharder in op de werkelijke waterhardheid van uw gemeente, niet op een standaardwaarde. (2) Kies een vraaggestuurde (volumetrische) regeneratie in plaats van tijdgestuurde regeneratie: dit bespaart 20-30% zout. (3) Houd de zouttank minimaal een kwart vol voor efficiënte pekelvorming. (4) Controleer maandelijks op brugvorming en maak de brug los indien aanwezig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik goedkoper industrieel zout gebruiken in mijn waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet aanbevolen. Industrieel zout heeft een lagere zuiverheidsgraad en kan onzuiverheden bevatten die de hars en ventielen van uw ontharder beschadigen. Gebruik altijd speciaal ontharder-tabletzout met een zuiverheidsgraad van minimaal 99,5% NaCl. De prijs van kwaliteitstabletzout is laag genoeg (5-8 euro per 25 kg) om dit risico niet te nemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik wanneer ik zout moet bijvullen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste waterontharders hebben een zoutniveausindicator of zoutstandlampje dat waarschuwt als de zouttank bijna leeg is. Controleer de zouttank ook visueel elke 2-4 weken. Vul bij als de zouttank minder dan een kwart vol is. Een te lage zoutstand leidt tot onvolledige regeneratie en dus harder water dan ingesteld. Sommige slimme ontharders sturen een melding via een app.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder zoutverbruik: optimaliseren, soorten zout en kosten',
  description:
    'Een waterontharder verbruikt 3-10 kg zout per regeneratie. Het verbruik hangt af van de harscapaciteit, waterhardheid en regeneratiefrequentie.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/zout-gebruik',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderZoutgebruikPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Zoutverbruik waterontharder', item: 'https://waterfilterplatform.nl/waterontharder/zout-gebruik' },
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
          <span>Zoutverbruik waterontharder</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder zoutverbruik: optimaliseren, soorten zout en kosten
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een waterontharder verbruikt 3-10 kg zout per regeneratie. Het exacte verbruik
            hangt af van de harscapaciteit, de lokale waterhardheid en de regeneratiefrequentie.
            Met de juiste instelling en het juiste zouttype bespaart u 20-30% op uw jaarlijkse
            zoutkosten.
          </p>
        </section>

        <QuickAnswer answer="Een waterontharder verbruikt 3-10 kg zout per regeneratie (gemiddeld gezin: 150-200 kg per jaar). Tabletzout (99,5% NaCl, 5-8 euro per 25 kg) is de beste keuze. Vraaggestuurde regeneratie bespaart 20-30% zout. Zeezout en Himalayazout zijn niet geschikt voor ontharders." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt zout in een waterontharder?
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder werkt via het principe van ionenwisseling. In de harskolom zitten
          kleine harskorrels beladen met natriumionen (Na+). Als hard water door de hars stroomt,
          wisselen de calcium- (Ca&sup2;+) en magnesiumionen (Mg&sup2;+) &mdash; verantwoordelijk
          voor waterhardheid &mdash; van plek met de natriumionen. Het water dat eruit komt is
          zacht (kalkarmen), maar bevat meer natrium.
        </p>
        <p className="text-gray-700 mb-4">
          Na verloop van tijd raken de harskorrels verzadigd met calcium en magnesium en kunnen
          ze geen nieuwe ionen meer opnemen. Dan vindt regeneratie plaats: een geconcentreerde
          zoutoplossing (pekel) spoelt de hars door. De hoge natriumconcentratie verdrijft de
          calcium- en magnesiumionen van de hars; het afvalwater (met calcium, magnesium en
          overtollig zout) wordt afgevoerd naar het riool. De hars is opnieuw geladen met
          natriumionen en klaar voor de volgende cyclus.
        </p>
        <p className="text-gray-700 mb-6">
          Zout in de zouttank wordt gebruikt om deze pekeloplossing te maken. De zouttank is
          dus de zoutreservoir; het zout lost op in water om pekel te vormen die vervolgens
          door de harskolom wordt gespoeld.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zoutverbruik berekenen: formule en voorbeelden
        </h2>
        <p className="text-gray-700 mb-4">
          Het zoutverbruik per regeneratie is afhankelijk van drie factoren:
          harsvolume, waterhardheid en de efficientiefactor van het systeem.
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-4">
          <p className="font-semibold text-[#003F5C] mb-2">Rekenformule:</p>
          <p className="text-gray-700 font-mono text-sm">
            Zout per regeneratie = harsvolume (L) &times; waterhardheid (dH) &times; 0,08&ndash;0,12 kg
          </p>
        </div>
        <p className="text-gray-700 mb-4">
          Concrete voorbeelden voor verschillende gezinsgroottes en waterhardheden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Klein gezin (2 personen), zacht gebied (15 dH), 10 liter hars:</strong>{' '}
            10 &times; 15 &times; 0,09 = 13,5 kg per regeneratie. Bij 2-wekelijkse regeneratie:
            ca. 350 kg per jaar.
            <em> (Noot: dit is een extreme uitkomst; vraaggestuurde systemen regenereren minder frequent.)</em>
          </li>
          <li>
            <strong>Gemiddeld gezin (4 personen), gemiddeld hard (20 dH), 15 liter hars:</strong>{' '}
            15 &times; 20 &times; 0,10 = 3 kg per regeneratie. Bij wekelijkse regeneratie:
            3 &times; 52 = <strong>156 kg per jaar</strong>
          </li>
          <li>
            <strong>Grote installatie (6 personen, hard gebied 30 dH, 30 liter hars):</strong>{' '}
            30 &times; 30 &times; 0,10 = 9 kg per regeneratie. Bij 2x per week:
            9 &times; 104 = <strong>936 kg per jaar</strong>
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          De factor 0,08-0,12 kg hangt af van de installatie-efficiëntie. Nieuwere,
          vraaggestuurde systemen zitten aan de lage kant van dit bereik; oudere tijdgestuurde
          systemen zitten aan de hoge kant.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Soorten zout vergeleken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zouttype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zuiverheid</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs (25 kg)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Tabletzout</td>
                <td className="border border-gray-300 px-3 py-2">&gt;99,5% NaCl</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5&ndash;8</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja &mdash; beste keuze</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Granulaatzout</td>
                <td className="border border-gray-300 px-3 py-2">&gt;99,5% NaCl</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5&ndash;8</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja &mdash; snellere oplossing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Blokzout</td>
                <td className="border border-gray-300 px-3 py-2">&gt;99% NaCl</td>
                <td className="border border-gray-300 px-3 py-2">&euro;4&ndash;7</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Ja &mdash; voor grotere installaties</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Natriumarm tabletzout (KCl)</td>
                <td className="border border-gray-300 px-3 py-2">&gt;99% KCl</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;25</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja &mdash; voor hypertensie</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeezout / Himalayazout</td>
                <td className="border border-gray-300 px-3 py-2">Variabel, onzuiverheden</td>
                <td className="border border-gray-300 px-3 py-2">Variabel</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">NEE &mdash; beschadigt hars</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Soorten zout: details en toepassingen
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">1. Tabletzout (block salt) &mdash; meest gebruikt</h3>
            <p className="text-gray-700 text-sm">
              Tabletten van geperst vacuumzout met een zuiverheidsgraad van &gt;99,5% NaCl.
              De uniforme afmeting zorgt voor gelijkmatige oplossing en minimale brugvorming.
              Verkrijgbaar in 25 kg zakken voor circa 5-8 euro. Aanbevolen voor de meeste
              huishoudelijke waterontharders. Merk-tabletzout (Aquatabs, Entsorga, Ecosoft) en
              huismerken presteren vergelijkbaar bij gelijke zuiverheidsgraad.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">2. Granulaatzout &mdash; snelle oplossing</h3>
            <p className="text-gray-700 text-sm">
              Fijner zout dat sneller oplost dan tabletten. Geschikt voor ontharders met een
              korte regeneratietijd of kleine pekelkamers. Vergelijkbare prijs als tabletzout.
              Nadeel: iets hogere kans op brugvorming bij hoge luchtvochtigheid of
              temperatuurschommelingen in de zoutkast.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">3. Blokzout (brick salt) &mdash; voor grote installaties</h3>
            <p className="text-gray-700 text-sm">
              Grote zoutblokken voor buitenopstelling of grote installaties. Minder frequent
              bijvullen nodig. Iets goedkoper per kg dan tabletzout. Minder geschikt voor
              compacte huishoudelijke ontharders met kleine zouttanks.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">4. Kaliumchloride (KCl) &mdash; voor natriumarme toepassingen</h3>
            <p className="text-gray-700 text-sm">
              Kaliumchloride (KCl) werkt identiek aan natriumchloride in het ionenwisselingsproces,
              maar voegt kalium toe aan het water in plaats van natrium. Geschikt voor
              hypertensie-patienten die een natriumarm dieet volgen. Aanzienlijk duurder
              (15-25 euro per 25 kg). Controleer altijd of uw ontharder geschikt is voor KCl.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zoutverbruik optimaliseren: 4 stappen
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-4">
          <li>
            <strong>Vraaggestuurde regeneratie (volumetrisch):</strong> stel de ontharder in op
            regeneratie op basis van het werkelijk waterverbruik, niet op een vaste tijdsinterval.
            Volumetrische systemen meten hoeveel water er door is gegaan en regenereren alleen
            als de harscapaciteit bijna bereikt is. Besparing: 20-30% minder zoutverbruik ten
            opzichte van tijdgestuurde systemen.
          </li>
          <li>
            <strong>Juiste harshoeveelheid en hardheidinstelling:</strong> zorg dat de ontharder
            is ingesteld op de werkelijke waterhardheid van uw gemeente (opvraagbaar bij uw
            drinkwaterbedrijf). Een te hoog ingestelde hardheid leidt tot onnodige regeneraties
            en onnodig zoutverbruik.
          </li>
          <li>
            <strong>Zouttank minimaal kwart vol houden:</strong> een te lage zoutstand leidt
            tot onderverzadigde pekel en onvolledige regeneratie. Houd de zouttank bij voorkeur
            tussen kwart en tweederde vol voor optimale pekelconcentratie.
          </li>
          <li>
            <strong>Maandelijkse controle op zoutbrug:</strong> een zoutbrug is een harde koek
            die boven het wateroppervlak in de zouttank hangt en de pekelvorming blokkeert.
            Controleer maandelijks en maak eventuele bruggen los met een stok of roeispaan.
            Gebruik tabletzout van hoge kwaliteit om brugvorming te minimaliseren.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Natriumgehalte in zacht water: wat u moet weten
        </h2>
        <p className="text-gray-700 mb-4">
          Bij het ionenwisselingsproces wordt elk Ca&sup2;+-ion (tweewaardig) vervangen door twee
          Na+-ionen (eenwaardig). Dit betekent dat het natriumgehalte in het zachte water
          meetbaar stijgt. Bij een ingangshardheid van 20 dH (typisch voor veel Nederlandse
          gemeenten) stijgt het natriumgehalte met circa <strong>117 mg/L</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          Voor gezonde volwassenen is dit doorgaans geen probleem: de Nederlandse Voedsel- en
          Warenautoriteit stelt dat de bijdrage van zacht drinkwater aan de totale natriuminname
          beperkt is ten opzichte van voeding. Echter:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Hypertensie-patienten</strong> die een strikt natriumarm dieet volgen, doen
            er verstandig aan kaliumchloride (KCl) te gebruiken als regeneratiezout. KCl voegt
            geen natrium toe aan het zachte water.
          </li>
          <li>
            <strong>Baby&apos;s en zuigelingen</strong> zijn gevoeliger voor natrium. Gebruik voor
            flesvoeding geen water van een waterontharder zonder medisch advies.
          </li>
          <li>
            Een apart aftapkraantje voor onbehandeld drinkwater (drank en koken) en zacht water
            alleen voor wasmachine, douche en boiler is een praktische oplossing voor huishoudens
            met hypertensie.
          </li>
        </ul>

        <p className="text-gray-700 mb-6">
          Meer weten over hoe een waterontharder werkt? Lees onze uitgebreide gids over{' '}
          <Link href="/waterontharder/werking" className="text-[#005F8A] underline">de werking van een waterontharder</Link>{' '}
          of bekijk alles over{' '}
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">waterontharder regeneratie</Link>.
          Overweegt u een aankoop? Bekijk onze{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder vergelijking</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterontharder zoutverbruik
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder vergelijken</Link>,{' '}
          <Link href="/waterontharder/werking" className="text-[#005F8A] underline">werking van een waterontharder</Link>,{' '}
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">waterontharder regeneratie</Link> en{' '}
          <Link href="/waterontharder/zout" className="text-[#005F8A] underline">waterontharder zout kopen</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/onderhoud/waterontharder-zout" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zout voor waterontharder</h3>
              <p className="text-sm text-gray-600">Welke zoutsoort u bijvult, hoe vaak en wat de gevolgen zijn van verkeerde zout-keuze.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: zoutverbruik</h3>
              <p className="text-sm text-gray-600">Hoe het zoutverbruik samenhangt met regeneratiefrequentie en harscapaciteit.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
