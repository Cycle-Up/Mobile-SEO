import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Drinkwater voor Baby: Wat is Veilig voor Zuigelingen?',
  description: 'Welk water is veilig voor babyvoeding? Nitraat, fluor, lood en bacteriën: risico\'s per watertype voor baby\'s onder 6 maanden. Osmosefilter als veiligste keuze.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/baby' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Mag je kraanwater gebruiken voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederland is leidingwater over het algemeen veilig voor babyvoeding. Toch adviseert de Voedsel en Waren Autoriteit (NVWA) om altijd te controleren op lood (oud leidingwerk voor 1970), nitraat (privéputten) en bacteriën (water dat lang stilstond). Kook kraanwater voor gebruik bij baby\'s jonger dan 6 maanden en laat het afkoelen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is nitraat in kraanwater gevaarlijk voor baby\'s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nitraat boven 10 mg/L kan bij zuigelingen jonger dan 3 maanden methemoglobinemie veroorzaken ("blauwe baby-syndroom") — een aandoening waarbij rode bloedcellen niet genoeg zuurstof kunnen transporteren. De EU-norm voor drinkwater is 50 mg/L; voor babyvoeding adviseert de WHO maximaal 10 mg/L. Bij privéputten is een nitraattest essentieel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is gefilterd water via osmosefilter geschikt voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosewater is veilig voor babyvoeding als aanvulling. Het verwijdert nitraat (85-95%), lood (95-99%), bacteriën (>99%) en PFAS. Voeg een remineralisatiefilter toe als je osmosewater als enige vloeistof gebruikt in zuigelingenvoeding — dit herstelt essentiële mineralen. Osmosewater zonder remineralisatie is niet schadelijk maar heeft geen buffercapaciteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk flessenwater is geschikt voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kies flessenwater met het label "geschikt voor babyvoeding" of met laag nitraat (onder 10 mg/L), laag natrium (onder 20 mg/L) en laag sulfaat (onder 240 mg/L). Spa Reine en Evian zijn doorgaans geschikt; controleer altijd het etiket. Eenmaal geopend maximaal 24 uur bewaren in de koelkast.',
      },
    },
  ],
};

export default function DrinkwaterBabyPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwater', item: 'https://waterfilterplatform.nl/drinkwater' },
              { '@type': 'ListItem', position: 3, name: 'Baby', item: 'https://waterfilterplatform.nl/drinkwater/baby' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwater" className="hover:underline">Drinkwater</Link> &rsaquo;{' '}
          <span>Baby</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwater voor Baby&rsquo;s: Wat is Veilig?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Baby&rsquo;s jonger dan 6 maanden zijn extra kwetsbaar voor verontreinigingen in water. Welk water is veilig voor het aanmaken van kunstvoeding? We zetten de feiten op een rij.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom baby&rsquo;s extra kwetsbaar zijn
        </h2>
        <p className="text-gray-700 mb-4">
          Baby&rsquo;s drinken per kilogram lichaamsgewicht véél meer water dan volwassenen. Een zuigeling van 5 kg drinkt dagelijks 750–1000 ml kunstvoeding — dat is 150–200 ml/kg/dag, terwijl een volwassene 25–35 ml/kg/dag drinkt. Verontreinigingen worden daardoor geconcentreerder opgenomen.
        </p>
        <p className="text-gray-700 mb-4">
          Bovendien zijn de nieren van baby&rsquo;s nog niet volledig ontwikkeld en kunnen ze mineralen, nitraten en zware metalen minder efficiënt uitscheiden. De lever en immuunsysteem zijn ook kwetsbaarder voor hormoonverstorende stoffen (PFAS, pesticiden).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risico&rsquo;s per stof
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Stof</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Risico baby</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Grenswaarde baby</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Nl. leidingwater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Methemoglobinemie</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10 mg/L (WHO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Gemiddeld &lt;5 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Neurologische schade</td>
                <td className="border border-gray-300 px-3 py-2">Geen veilige grens</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Oud leidingwerk risico</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Immuun/hormoonverstoring</td>
                <td className="border border-gray-300 px-3 py-2">Geen veilige grens</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Regionaal variabel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Fluoride</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Tandfluorose (cosmetisch)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,3 mg/L advies</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Doorgaans &lt;0,1 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bacteriën</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Diarree, infectie</td>
                <td className="border border-gray-300 px-3 py-2">0 KVE/100ml</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Voldoet aan norm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Advies: koken is de minimale maatregel
        </h2>
        <p className="text-gray-700 mb-4">
          De NVWA en KiesBeter.nl adviseren voor baby&rsquo;s jonger dan 6 maanden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Gebruik koud water dat minimaal 2 minuten doorgeloopt heeft (laat lood uit stilstaand water wegstromen)</li>
          <li>Breng aan de kook en laat 1–2 minuten koken om bacteriën te doden</li>
          <li>Koel af tot 37–40°C voor gebruik</li>
          <li>Gebruik gekookt water direct of bewaar maximaal 24 uur in de koelkast</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Koken vernietigt bacteriën maar verwijdert <em>geen</em> nitraat, lood of PFAS. Voor huishoudens met oud leidingwerk of een privéput is een waterfilter verstandiger.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter voor babyvoeding
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter</Link> verwijdert nagenoeg alles uit water: nitraat (85–95%), lood (95–99%), PFAS (90%+), bacteriën en virussen. Het is de meest complete oplossing voor ouders die maximale zekerheid willen.
        </p>
        <p className="text-gray-700 mb-4">
          Let op: voeg een remineralisatiepatroon toe aan het osmosesysteem als je het water voor babyvoeding gebruikt. Puur osmosewater heeft vrijwel geen mineralen; remineralisatie herstelt essentiële spoorelementen en zorgt voor een stabielere pH.
        </p>
        <p className="text-gray-700 mb-6">
          Lees ook: <Link href="/kennisbank/drinkwater-baby" className="text-[#005F8A] underline">Drinkwater voor baby: uitgebreide gids</Link> en <Link href="/drinkwater/zwangerschap" className="text-[#005F8A] underline">drinkwater tijdens zwangerschap</Link>.
        </p>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/babywater/osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater voor baby</h3>
            <p className="text-sm text-gray-600">Is osmosewater geschikt voor de bereiding van babyvoeding?</p>
          </Link>
          <Link href="/babywater/welk-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Welk water voor baby</h3>
            <p className="text-sm text-gray-600">Overzicht van de beste wateropties voor baby en zuigeling.</p>
          </Link>
          <Link href="/osmose-water/baby" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater en baby</h3>
            <p className="text-sm text-gray-600">Praktische gids voor het gebruik van osmosewater bij babyvoeding.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat en nitriet in drinkwater</h3>
            <p className="text-sm text-gray-600">Risicos van nitraat voor baby en hoe u deze kunt verminderen.</p>
          </Link>
        </div>
      </section>

        <CTABanner />
      </main>
    </>
  );
}
