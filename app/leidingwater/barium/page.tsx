import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Barium in leidingwater: EU-norm, bronnen en waterfilter',
  description:
    'Barium in leidingwater heeft een EU-norm van 1 mg/L. In Nederland is barium in leidingwater zelden een probleem maar in grondwaterputten kan het voorkomen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/barium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zit er barium in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederlands leidingwater ligt de bariumconcentratie vrijwel altijd ver onder de EU-norm van 1 mg/L. Gemiddelde concentraties in leidingwater zijn minder dan 0,1 mg/L. Drinkwaterbedrijven controleren bariumgehaltes als onderdeel van routinematige waterkwaliteitsanalyses. Het risico op verhoogde bariumconcentraties betreft particuliere boorputten in geologische gebieden met barietrijke gesteenten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor barium in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn 2020/2184 stelt de maximale bariumconcentratie op 1,0 mg/L (1000 microgram per liter). De WHO-richtwaarde bedraagt 1,3 mg/L. In Nederland wordt deze norm in leidingwater ruimschoots gehaald. Bij particuliere putten in specifieke geologische gebieden kan de concentratie hoger uitvallen en is testing aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de gezondheidsrisicos van barium in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oplosbaar barium (bariumchloride, bariumnitraat) is toxisch bij hogere concentraties en kan hypertensie (hoge bloeddruk), spierproblemen en hypokaliemie (laag kaliumgehalte in bloed) veroorzaken. Bariumsulfaat is een uitzondering: dit is onoplosbaar en biologisch inert, en wordt juist gebruikt als contrastmiddel bij medisch onderzoek van het maagdarmkanaal. Het risico bij concentraties onder de EU-norm van 1 mg/L is verwaarloosbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter barium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Omgekeerde osmose verwijdert 90 tot 95% van opgelost barium uit drinkwater. Het RO-membraan houdt de tweewaardige bariumionen (Ba2+) effectief tegen vanwege hun relatief grote ionengrootte en lading. Ionenwisseling (cationenwisseling) behaalt een verwijdering van 95% en hoger. Coagulatie-flocculatie haalt 85 tot 90% verwijdering maar is voornamelijk een professionele behandelingstechniek.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen barium en strontium in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barium en strontium zijn beide aardalkalimetalen met vergelijkbare chemische eigenschappen en gedragen zich vergelijkbaar in water. Barium heeft een EU-norm van 1 mg/L; strontium heeft geen EU-norm in drinkwater maar wordt door de WHO gevolgd. Een osmosefilter verwijdert beide stoffen effectief (90-95%). In gebieden met bariet- of strontiaanrijke gesteenten kunnen beide stoffen tegelijk verhoogd voorkomen in grondwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waar komt barium in grondwater vandaan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barium in grondwater heeft twee hoofdbronnen: (1) natuurlijke uitloging uit barietrijke gesteenten (bariumsulfaat, ook bariet genaamd) waarbij zuurstofarm water de mineralen oplost, en (2) historische industriele lozingen vanuit de olie- en gaswinning waarbij bariumsulfaat wordt gebruikt als boormodder (weighting agent). In Nederland kunnen diepere grondwaterbronnen in specifieke geologische formaties verhoogde bariumconcentraties bevatten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe laat ik mijn bronwater testen op barium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barium wordt geanalyseerd via ICP-MS (inductief gekoppeld plasma massa spectrometrie), de standaardmethode voor zware metalen in water. Bij geaccrediteerde laboratoria zoals Kiwa, Eurofins of SGS is barium opgenomen in een breed zwaarmetalenpakket. De kosten voor een zware metalen analysepakket inclusief barium bedragen circa 150 tot 200 euro. Neem contact op met uw provinciale omgevingsdienst voor advies over bemonsteringsprotocol voor diepe putten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bariumsulfaat in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Bariumsulfaat (BaSO4) is vrijwel onoplosbaar in water en biologisch inert. Het wordt juist gebruikt als contrastmiddel (baritum) bij rontgen- en CT-onderzoek van het maagdarmkanaal vanwege zijn veiligheid. Het risico van barium in drinkwater betreft uitsluitend de oplosbare bariumzouten zoals bariumchloride en bariumnitraat. In de praktijk is bariumsulfaat de meest voorkomende bariumvorm in gesteenten maar lost het nauwelijks op in grondwater.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Barium in leidingwater: EU-norm, bronnen en waterfilter',
  description:
    'Barium in leidingwater heeft een EU-norm van 1 mg/L. In Nederland is barium in leidingwater zelden een probleem maar bij eigen grondwaterputten kan het.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/barium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LeidingwaterBariumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Barium in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/barium' },
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
          <span>Barium in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Barium in leidingwater: EU-norm, bronnen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Barium is een aardalkalimetaal dat via barietrijke gesteenten in grondwater terecht kan komen.
            De EU-norm is 1 mg/L. In Nederland is barium in leidingwater geen probleem, maar bij
            particuliere boorputten is testen verstandig. Een osmosefilter verwijdert 90&ndash;95%.
          </p>
        </section>

        <QuickAnswer answer="Barium in Nederlands leidingwater ligt vrijwel altijd onder 0,1 mg/L, ver onder de EU-norm van 1 mg/L. Risico bestaat bij particuliere boorputten in barietrijke gebieden. Oplosbaar barium is toxisch bij hogere concentraties. Een osmosefilter verwijdert 90-95% van opgelost barium." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is barium?
        </h2>
        <p className="text-gray-700 mb-4">
          Barium (Ba) is een zacht, zilverkleurig aardalkalimetaal dat chemisch verwant is aan
          calcium en strontium. Het behoort tot groep 2 van het periodiek systeem en heeft
          vergelijkbare chemische eigenschappen als calcium: het vormt tweewaardige ionen (Ba2+) en
          kan zich gedragen als biologisch calciumanaloog.
        </p>
        <p className="text-gray-700 mb-6">
          In de natuur komt barium voornamelijk voor als <strong>bariet (bariumsulfaat, BaSO4)</strong>
          {' '}en <strong>withetriet (bariumcarbonaat, BaCO3)</strong>. Bariumsulfaat is praktisch
          onoplosbaar in water en daardoor biologisch inert. De oplosbare bariumzouten
          &mdash; bariumchloride, bariumnitraat, bariumhydroxide &mdash; zijn toxisch bij hogere
          concentraties en zijn de relevante verbindingen bij drinkwatervervuiling.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronnen van barium in leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          Barium bereikt grondwater via twee hoofdroutes:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Natuurlijke uitloging uit barietrijke gesteenten:</strong> zuurstofarm (anaeroob)
            grondwater lost bariumverbindingen op uit geologische formaties. Dit proces vindt
            voornamelijk plaats op grotere diepte in gebieden met specifieke mineralogie
          </li>
          <li>
            <strong>Historische industriele lozingen:</strong> in de olie- en gaswinning wordt
            bariumsulfaat als zwaar boormodder (drilling mud) gebruikt voor drukbeheersing in
            boorgaten. Historische lozingen of lekkages van boorlocaties kunnen lokale grondwaterverontreiniging
            met bariumverbindingen veroorzaken
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          In Nederland zijn er geen grootschalige bariumverontreinigingen in leidingwater bekend.
          Drinkwaterbedrijven testen routinematig op barium als onderdeel van het uitgebreide
          waterkwaliteitsonderzoek. De gemiddelde bariumconcentratie in Nederlands leidingwater
          bedraagt minder dan <strong>0,1 mg/L</strong>, tienmaal lager dan de EU-norm.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en WHO-richtwaarde
        </h2>
        <p className="text-gray-700 mb-4">
          De regulering van barium in drinkwater is vastgelegd in Europese en internationale richtlijnen:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kader</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Norm / richtwaarde</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">EU-drinkwaterrichtlijn 2020/2184</td>
                <td className="border border-gray-300 px-3 py-2">1,0 mg/L (1000 &micro;g/L)</td>
                <td className="border border-gray-300 px-3 py-2">Bindend</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">WHO richtwaarde</td>
                <td className="border border-gray-300 px-3 py-2">1,3 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Adviserend</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Nederland leidingwater (gemiddeld)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,1 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Feitelijk</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          De EU-norm van 1,0 mg/L is gebaseerd op levenslange blootstelling via drinkwater. Bij
          concentraties onder dit niveau worden geen negatieve gezondheidseffecten verwacht bij
          de gemiddelde volwassen bevolking. De WHO-richtwaarde van 1,3 mg/L is iets ruimer en
          is afgeleid van toxicologisch onderzoek bij proefdieren met veiligheidsfactoren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten van barium
        </h2>
        <p className="text-gray-700 mb-4">
          De toxiciteit van barium hangt sterk af van de oplosbaarheid van de specifieke bariumverbinding:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Oplosbaar barium (bariumchloride, bariumnitraat):</strong> toxisch bij hogere
            concentraties. Effecten bij acute vergiftiging zijn hypertensie (hoge bloeddruk),
            spierproblemen (spiertrekkingen, verlamming), hypokaliemie (verlaagd kaliumgehalte in bloed)
            en hartritmestoornissen. Chronische blootstelling via drinkwater boven de normen is
            geassocieerd met verhoogde bloeddruk
          </li>
          <li>
            <strong>Bariumsulfaat (BaSO4):</strong> vrijwel onoplosbaar en biologisch inert.
            Bariumsulfaat wordt juist <strong>medisch toegepast</strong> als contrastmiddel (barium
            slikonderzoek, barium-enema) bij rontgen- en CT-diagnostiek van het maagdarmkanaal.
            In water is het risico van bariumsulfaat verwaarloosbaar
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bij de concentraties in Nederlands leidingwater (onder 0,1 mg/L) is er geen gezondheidsrisico.
          Bij particuliere boorputten in specifieke gebieden die boven de norm uitkomen is
          behandeling via een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
          de aangewezen oplossing.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verwijderingsmethoden voor barium
        </h2>
        <p className="text-gray-700 mb-4">
          Barium (Ba2+) is een tweewaardige kation die effectief verwijderd wordt door membraanfiltratie
          en ionenwisseling:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Thuistoepassing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">90&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ionenwisseling (cation)</td>
                <td className="border border-gray-300 px-3 py-2">95%+</td>
                <td className="border border-gray-300 px-3 py-2">Ja (professioneel)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Coagulatie-flocculatie</td>
                <td className="border border-gray-300 px-3 py-2">85&ndash;90%</td>
                <td className="border border-gray-300 px-3 py-2">Nee (industrieel)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2">Ongeschikt</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Een osmosefilter is voor particuliere huishoudens de meest praktische en effectieve oplossing.
          Bij hoge bariumconcentraties boven 0,5 mg/L combineert men soms een cationenwisselaar als
          voorbehandeling met het osmosesysteem voor maximale verwijdering. Raadpleeg een gespecialiseerde
          waterbehandelaar voor maatwerk bij eigen putten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Barium versus vergelijkbare stoffen in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Barium deelt chemische eigenschappen met andere aardalkalimetalen die in drinkwater kunnen voorkomen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Strontium (Sr):</strong> chemisch vergelijkbaar met barium. Geen EU-norm in
            drinkwater, maar WHO volgt strontium als aandachtsstof. Een osmosefilter verwijdert
            strontium even effectief als barium. In bariet- en strontiaanrijke gebieden kunnen
            beide stoffen tegelijk voorkomen
          </li>
          <li>
            <strong>Calcium en magnesium (waterhardheid):</strong> dezelfde groep als barium, worden
            ook door osmose en ionenwisseling verwijderd. Een{' '}
            <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link>{' '}
            verwijdert calcium en magnesium maar niet specifiek barium
          </li>
          <li>
            <strong>Lood, cadmium, nikkel:</strong> andere zware metalen die gelijktijdig kunnen
            voorkomen in grondwater en worden gedekt door het uitgebreide{' '}
            <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingenpakket</Link>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronwater testen op barium
        </h2>
        <p className="text-gray-700 mb-4">
          Barium wordt gemeten via ICP-MS (inductief gekoppeld plasma massa spectrometrie), de
          gouden standaard voor spoormetaalanalyse in water. Geaccrediteerde laboratoria in Nederland:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Kiwa Water Research:</strong> geaccrediteerd wateranalyselaboratorium, barium
            als onderdeel van zware metalen pakket
          </li>
          <li>
            <strong>Eurofins Environment Testing:</strong> breed metaalanalysepakket, toegankelijk
            voor particulieren
          </li>
          <li>
            <strong>SGS Intron:</strong> geaccrediteerde analyses voor water, bodem en omgeving
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          De kosten voor een volledig zware metalen analysepakket inclusief barium, strontium, lood,
          cadmium, arseen, nikkel en overige metalen bedragen circa <strong>150&ndash;200 euro</strong>.
          Voor een compleet beeld van bronwaterkwaliteit is een uitgebreider{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitsonderzoek</Link>{' '}
          met bacteriologische parameters aanbevolen.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over barium in leidingwater
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
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link> en{' '}
          <Link href="/waterfilter/arseen" className="text-[#005F8A] underline">arseen in drinkwater</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
              <p className="text-sm text-gray-600">Overzicht van zware metalen zoals barium, lood en arseen in drinkwater: normen en gezondheidsrisicos.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: uitleg en werking</h3>
              <p className="text-sm text-gray-600">Hoe een osmosefilter barium en andere zware metalen effectief verwijdert uit kraanwater.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
