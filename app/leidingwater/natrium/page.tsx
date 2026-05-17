import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Natrium in leidingwater: EU-norm, waterontharder en zoutarm dieet',
  description:
    'Natrium in leidingwater: EU-indicatornorm 200 mg/L. Waterontharder voegt natrium toe. Osmosefilter verwijdert 85-95% natrium. Zoutarm dieet tips.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/natrium' },
  openGraph: {
    title: 'Natrium in leidingwater: EU-norm, waterontharder en zoutarm dieet',
    description:
      'Natrium in leidingwater: EU-indicatornorm 200 mg/L. Waterontharder voegt natrium toe. Osmosefilter verwijdert 85-95% natrium. Zoutarm dieet tips.',
    type: 'website',
  },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel natrium zit er in normaal Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onbehandeld Nederlands leidingwater bevat gemiddeld 20-50 mg natrium per liter, afhankelijk van de regio. Kustgebieden en poldergebieden hebben van nature hogere natriumgehaltes door zoutintrusie uit de bodem. De EU-indicatornorm is 200 mg/L; het meeste Nederlandse leidingwater zit ruim onder die grens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel extra natrium voegt een waterontharder toe aan het drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een ionenwisselende waterontharder voegt per mmol hardheid die wordt verwijderd 2 mmol natrium toe, wat neerkomt op circa 0,46 mg natrium per mg verwijderd calcium (als CaCO3). Als vuistregel: bij 10 dH waterhardheid voegt de ontharder circa 23 mg/L natrium toe; bij 20 dH circa 46 mg/L; bij 30 dH circa 69 mg/L. Bij normaal leidingwater van 30 mg/L natrium en een hardheid van 20 dH bevat onthard water dus circa 76 mg/L natrium.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is onthard leidingwater gevaarlijk voor mensen met hoge bloeddruk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste mensen is het extra natrium van een waterontharder verwaarloosbaar: bij 2 liter drinkwater per dag en 46 mg/L extra natrium gaat het om 92 mg extra natrium, terwijl de gemiddelde dagelijkse natriumopname via voeding 2.500-3.500 mg bedraagt. Voor mensen met ernstige hartfalen, nierproblemen of een strikt natriumarm dieet (onder 1.000 mg/dag) kan de bijdrage van onthard water relevant zijn. Bespreek dit met uw arts. Als alternatief kunt u kaliumchloride (KCl) als regeneratiezout gebruiken of een osmosefilter installeren voor drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor natrium in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn stelt voor natrium een indicatornorm van 200 mg/L. Dit is geen gezondheidsgrenswaarde maar een smaakparameter: boven 200 mg/L smaakt water merkbaar zout. Er is geen wetenschappelijk onderbouwde gezondheidsgrenswaarde specifiek voor natrium in drinkwater; de WHO heeft die ook niet vastgesteld. De Nederlandse norm volgt de EU-indicatornorm van 200 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter natrium uit het water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een omgekeerde osmose (RO) filter verwijdert 85-95% van alle opgeloste stoffen inclusief natrium. Bij ingangswater van 100 mg/L natrium bevat het geproduceerde osmosewater 5-15 mg/L. Dit maakt een osmosefilter de meest effectieve methode om natrium uit drinkwater te verwijderen, ook voor mensen op een strikt natriumarm dieet. Een RO-systeem wordt typisch geinstalleerd onder het aanrecht als drinkwaterfilter, terwijl de waterontharder het overige huishoudwater behandelt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen NaCl en KCl als regeneratiezout voor de waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Natriumchloride (NaCl, keukenzout) is het standaard regeneratiezout en kost 10-15 euro per 25 kg. Het voegt natrium toe aan het ontharde water. Kaliumchloride (KCl) kost 25-40 euro per 25 kg en voegt kalium toe in plaats van natrium, wat voor mensen op een natriumarm dieet een voordeel is. De ontharderscapaciteit bij KCl is vergelijkbaar met NaCl. Sommige artsen bevelen KCl aan voor patienten met hartfalen of ernstige hypertensie. Het nadeel is de hogere kostprijs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterbronnen bevatten van nature veel natrium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hoge natriumgehaltes komen voor in: grondwater uit zoute kustgebieden en polders (zoutintrusie), diep grondwater met lange verblijftijd in natriumhoudende gesteenten, water na ontijzeringsprocessen waarbij natriumverbindingen worden gebruikt, en oppervlaktewater dat in contact is geweest met industrie-lozingen. In Nederland zijn de hoogste natriumgehaltes te vinden in drinkwater dat gewonnen wordt uit de Rijn of Maas in droge zomers, of in kustgemeenten met weinig grondwaterreserves.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel natrium mag ik per dag binnenkrijgen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO adviseert maximaal 2 gram natrium per dag (gelijk aan 5 gram keukenzout). Het RIVM en de Nederlandse Gezondheidsraad hanteren een aanbeveling van maximaal 6 gram zout per dag (2,4 g natrium). Gemiddeld eten Nederlanders 8-9 gram zout per dag, waarbij voeding veruit de grootste bijdrage levert. Het aandeel van drinkwater in de totale natriumopname is bij onbehandeld water minder dan 3%; ook na wateronthardering bij normale hardheid blijft dit onder de 5-8% van de totale inname.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Natrium in leidingwater: EU-norm, bronnen en gezondheid',
  description:
    'Natrium in leidingwater: EU-indicatornorm 200 mg/L. Waterontharder voegt natrium toe. Osmosefilter verwijdert 85-95% natrium. Zoutarm dieet tips.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/natrium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function NatriumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Natrium', item: 'https://waterfilterplatform.nl/leidingwater/natrium' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/leidingwater" className="hover:underline">Leidingwater</Link> &rsaquo;{' '}
          <span>Natrium</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Natrium in leidingwater: EU-norm, bronnen en gezondheid
          </h1>
          <p className="text-[#005F8A] text-lg">
            Natrium in leidingwater is voor de meeste Nederlanders geen probleem, maar voor
            mensen met een natriumarm dieet of een waterontharder is het relevant om te weten
            hoeveel natrium uw drinkwater bevat en hoe u dat kunt verlagen.
          </p>
        </section>

        <QuickAnswer answer="Natrium in leidingwater heeft een EU-indicatornorm van 200 mg/L. Normaal leidingwater bevat 20-50 mg/L natrium. Een ionenwisselende waterontharder verhoogt dit naar 50-150 mg/L afhankelijk van de hardheid. Voor mensen op een natriumarm dieet (hartproblemen, hoge bloeddruk) is dit relevant. Een osmosefilter verwijdert 85-95% natrium." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronnen van natrium in leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          Natrium (Na&#8314;) komt van nature voor in grondwater en oppervlaktewater via
          oplossing van natriumhoudende mineralen zoals natriet en halit. In Nederland zijn de
          voornaamste bronnen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Zoutintrusie:</strong> in kustgebieden en polders sijpelt zout zeewater door in het grondwater, wat structureel hogere natriumgehaltes geeft (tot 100-150 mg/L in sommige kustgemeenten)</li>
          <li><strong>Oppervlaktewater (Rijn, Maas):</strong> industrie-lozingen en landbouwafvoer verhogen het natriumgehalte in droge zomers</li>
          <li><strong>Ontijzeringsprocessen:</strong> sommige waterbehandelingsprocessen gebruiken natriumverbindingen</li>
          <li><strong>Waterontharder:</strong> ionenwisseling ruilt calcium en magnesium uit voor natrium (zie hieronder)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-indicatornorm: 200 mg/L
        </h2>
        <p className="text-gray-700 mb-4">
          De Europese drinkwaterrichtlijn stelt voor natrium een <strong>indicatornorm van
          200 mg/L</strong>. Dit is geen gezondheidsgrenswaarde maar een smaakparameter: boven
          200 mg/L krijgt water een merkbaar zoute smaak die voor de meeste consumenten
          onaangenaam is. Er zijn geen gedocumenteerde directe gezondheidseffecten van natrium
          in drinkwater bij normale consumptieniveaus voor gezonde volwassenen.
        </p>
        <p className="text-gray-700 mb-6">
          Het RIVM monitort de natriumgehaltes in Nederlands leidingwater jaarlijks. Vrijwel
          alle Nederlandse waterbedrijven produceren water met minder dan 100 mg/L natrium;
          het nationale gemiddelde liegt rond de 35 mg/L voor onbehandeld leidingwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterontharder en natrium: de berekening
        </h2>
        <p className="text-gray-700 mb-4">
          Een ionenwisselende{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link>{' '}
          werkt door calcium- en magnesiumionen uit het water te vervangen door natriumionen.
          Per twee positieve ladingen hardheid die worden weggenomen, worden twee natriumionen
          teruggegeven. De formule voor het extra natrium per liter:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 font-mono text-sm text-gray-800">
          Extra Na&#8314; (mg/L) = waterhardheid (mmol/L) &#215; 2 &#215; 23 mg/mmol
          <br />
          <span className="text-gray-500">Vuistregel: hardheid in dH &#215; 0,46 = extra mg/L natrium (bij Ca als dominant ion)</span>
        </div>
        <p className="text-gray-700 mb-4">
          In de praktijk is de verhouding Ca/Mg bepalend voor de precieze omrekening.
          Uitgewerkte voorbeelden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>10 dH hardheid &rarr; extra 23 mg/L natrium &rarr; totaal 43-73 mg/L</li>
          <li>20 dH hardheid &rarr; extra 46 mg/L natrium &rarr; totaal 66-96 mg/L</li>
          <li>30 dH hardheid &rarr; extra 69 mg/L natrium &rarr; totaal 89-119 mg/L</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Ook bij 30 dH hard water blijft het natriumgehalte na onthardering ruim onder de
          EU-indicatornorm van 200 mg/L. Toch kan het relevant zijn voor specifieke
          patientgroepen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Natriumgehalten vergeleken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Waterbron</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Natrium (mg/L)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Leidingwater NL onbehandeld</td>
                <td className="border border-gray-300 px-3 py-2">20-50</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Na waterontharder (20 dH)</td>
                <td className="border border-gray-300 px-3 py-2">66-96</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Mineraalwater (laag natrium)</td>
                <td className="border border-gray-300 px-3 py-2">5-20</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Mineraalwater (hoog natrium)</td>
                <td className="border border-gray-300 px-3 py-2">200-1.000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosewater (na RO-filter)</td>
                <td className="border border-gray-300 px-3 py-2">2-8</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">EU-indicatornorm (max)</td>
                <td className="border border-gray-300 px-3 py-2">200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Natriumarm dieet en drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          De WHO adviseert maximaal <strong>2 gram natrium per dag</strong> (5 g zout) voor
          gezonde volwassenen. De Gezondheidsraad hanteert een maximum van 6 gram zout per dag.
          Nederlanders consumeren gemiddeld 8-9 gram zout, waarbij meer dan 75% afkomstig is
          uit bewerkte voedingsmiddelen.
        </p>
        <p className="text-gray-700 mb-4">
          Bij 2 liter drinkwater per dag en een natriumgehalte van 76 mg/L (20 dH onthard
          water) bedraagt de natriumopname via water <strong>152 mg per dag</strong>. Op een
          totale dagopname van 2.500-3.500 mg is dat 4-6%. Voor gezonde mensen is dit
          verwaarloosbaar.
        </p>
        <p className="text-gray-700 mb-6">
          Voor patientgroepen die een strikt natriumarm dieet volgen (onder 1.000 mg/dag
          bij ernstig hartfalen of dialyse) kan elk extra natriumbron relevant zijn. In dat
          geval adviseren cardiologen en nefrologen soms:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Gebruik van <strong>kaliumchloride (KCl)</strong> als regeneratiezout voor de ontharder</li>
          <li>Installatie van een <strong>osmosefilter</strong> voor drinkwater (verwijdert 85-95% natrium)</li>
          <li>Gebruik van gebotteld mineraalwater met laag natriumgehalte (onder 20 mg/L)</li>
          <li>Ontharder alleen op koud water aansluiten en warm water via een aparte leiding</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kaliumontharder als alternatief
        </h2>
        <p className="text-gray-700 mb-4">
          In plaats van natriumchloride (NaCl) kan een waterontharder ook worden geregenereerd
          met <strong>kaliumchloride (KCl)</strong>. Het mechanisme is identiek maar de
          ontharder laadt het hars dan op met kaliumionen in plaats van natriumionen.
          Het zachte water bevat dan extra kalium in plaats van natrium.
        </p>
        <p className="text-gray-700 mb-6">
          KCl-regeneratiezout is verkrijgbaar als speciale &quot;kaliumtabletten&quot; of
          &quot;zoutloos regeneratiezout&quot; en kost 25-40 euro per 25 kg versus 10-15 euro
          voor NaCl. De ontharderscapaciteit is vergelijkbaar. Voordeel: kalium is een
          gunstig mineral en het ontbrak water bevat minder natrium. Nadeel: hogere kosten
          en minder verkrijgbaar dan natriumtabletten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter als oplossing voor natriumarm drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          De meest effectieve methode om natrium (en alle andere opgeloste zouten) uit
          drinkwater te verwijderen is een{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            omgekeerd osmosefilter
          </Link>.
          Een kwalitatief RO-membraan heeft een natriumrejectie van <strong>85-95%</strong>,
          wat bij ingangswater van 80 mg/L resulteert in osmosewater van 4-12 mg/L natrium.
        </p>
        <p className="text-gray-700 mb-6">
          De combinatie van een waterontharder voor al het huishoudwater en een osmosefilter
          specifiek voor drinkwater is populair: de ontharder beschermt cv-installatie en
          apparaten tegen kalk, terwijl het osmosefilter zorgt voor drinkwater met een
          minimaal natriumgehalte. Dit is ook gunstig voor de osmosemembrane levensduur
          omdat onthard water geen kalkafzetting op het membraan veroorzaakt.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over natrium in leidingwater
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
          <Link href="/leidingwater" className="text-[#005F8A] underline">leidingwater kwaliteit</Link>,{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder uitleg</Link>,{' '}
          <Link href="/waterontharder/zout-gebruik" className="text-[#005F8A] underline">zoutverbruik ontharder</Link> en{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>.
        </p>
      </main>
    </>
  );
}
