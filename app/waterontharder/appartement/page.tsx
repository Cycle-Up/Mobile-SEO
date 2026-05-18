import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterontharder in Appartement: Mag Dit & Welke Opties?',
  description: 'Waterontharder installeren in appartement of huurwoning: toestemming verhuurder, demontabele opties, TAC-systemen, osmosefilter als alternatief en juridisch.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/appartement' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Mag ik een waterontharder installeren in een huurappartement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van je huurcontract en het type installatie. Een permanente installatie (waterontharder ingebouwd in de leidingen) vereist toestemming van de verhuurder op grond van artikel 7:215 BW. Een demontabele of draagbare oplossing (TAC-systeem, osmosefilter op flexibele slang) is doorgaans zonder toestemming toegestaan als er geen permanente wijzigingen worden aangebracht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterontharder is geschikt zonder installatie in een appartement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TAC-systemen (Template Assisted Crystallization) zijn compact, vereisen geen elektriciteit, geen zout en geen afvoer. Ze worden inline geplaatst op de koudwaterleiding en zijn eenvoudig demonteerbaar. Een osmosefilter onder het aanrecht is ook een optie: kleine voetafdruk, flexibele slangaansluiting, geen leidingwijziging nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een waterontharder en een TAC-systeem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder (ionenwisselaar) verwijdert kalk chemisch via ionenuitwisseling met zout — water wordt echt zacht (GH daalt). Een TAC-systeem converteert kalk naar stabiele kristallen die niet aanslaan op oppervlakken, maar verwijdert het niet. Het water blijft hard qua GH maar vormt minder kalkschaal. TAC werkt zonder zout, stroom of afvoer — ideaal voor appartement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een osmosefilter een goed alternatief voor een waterontharder in een appartement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, voor drinkwater en koken is een osmosefilter een uitstekend alternatief. Het verwijdert 95%+ van kalk, chloor en verontreinigingen. Het filtert alleen het water bij de keukenkraan — dus niet de leidingen, douche of wasmachine. Voor die toepassingen is een TAC-systeem of douchefilter een aanvulling.',
      },
    },
  ],
};

export default function WaterOntharderAppartementPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Appartement', item: 'https://waterfilterplatform.nl/waterontharder/appartement' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterontharder" className="hover:underline">Waterontharder</a> &rsaquo;{' '}
          <span>Appartement</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterontharder in Appartement of Huurwoning
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Hard water is een probleem in heel Nederland, ook in appartementen. Maar een klassieke waterontharder installeren is in een huurwoning vaak niet toegestaan zonder toestemming. Gelukkig zijn er slimme alternatieven.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Juridisch kader: wat mag je aanpassen?
        </h2>
        <p className="text-gray-700 mb-4">
          Artikel 7:215 BW (Burgerlijk Wetboek) bepaalt dat huurders die <em>na</em> het huren wijzigingen willen aanbrengen aan het gehuurde, toestemming nodig hebben van de verhuurder als de wijziging niet eenvoudig ongedaan gemaakt kan worden.
        </p>
        <p className="text-gray-700 mb-4">
          Een klassieke waterontharder die vast in de leiding wordt gemonteerd valt hieronder. Een demontabele installatie — waarbij je de waterontharder na vertrek eenvoudig meeneemt en de leiding in originele staat achterlaat — valt buiten deze beperkingen.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm"><strong>Tip:</strong> Vraag schriftelijk toestemming aan je verhuurder voor een vaste installatie. Leg vast dat je het apparaat bij vertrek meeneemt. Veel verhuurders stemmen toe — het verhoogt de woonkwaliteit en voorkomt kalkschade aan hun sanitair.</p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Opties zonder vaste installatie
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">1. TAC-systeem (Template Assisted Crystallization)</h3>
        <p className="text-gray-700 mb-4">
          Een TAC-systeem is compact (15×8 cm), werkt zonder elektriciteit, zonder zout en zonder afvoer. Het wordt inline geplaatst op de koudwaterleiding en verhindert dat kalk aanslaat op oppervlakken, leidingen en apparaten. Bij vertrek simpelweg demonteerbaar.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Geen stroom, geen zout, geen afvoer</li>
          <li>Compact en demonteerbaar</li>
          <li>Prijs: €150–350</li>
          <li>Medialevensduur: 3–5 jaar</li>
          <li>Werkt alleen op kalkvorming, niet op waterzachtheid (GH daalt niet)</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">2. Osmosefilter onder aanrecht</h3>
        <p className="text-gray-700 mb-4">
          Een <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter</a> past onder elk aanrecht en wordt aangesloten via flexibele slangetjes op de koudwaterkraan en de afvoer. Geen permanente leidingwijziging. Bij verhuizing meenemen in 30 minuten.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Verwijdert 95%+ van kalk, chloor, lood, PFAS</li>
          <li>Aparte tapkraan voor drinkwater en koken</li>
          <li>Prijs: €300–600 eenmalig</li>
          <li>Jaarkosten: €50–80 (filters)</li>
          <li>Werkt alleen voor drinkwater, niet voor hele woning</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">3. Magnetisch antikalkfilter</h3>
        <p className="text-gray-700 mb-4">
          Magnetische antikalkfilters worden buiten op de leiding geklemd — geen ingreep nodig. Ze zijn goedkoop (€20–60) maar de wetenschappelijke onderbouwing is beperkt. In sommige situaties effectief, maar niet aanbevolen als primaire oplossing.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Oplossing</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kalkschaal</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Drinkwater</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Toestemming</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">TAC-systeem</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Niet nodig</td>
                <td className="border border-gray-300 px-3 py-2">€150–350</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Alleen kraanwater</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Niet nodig</td>
                <td className="border border-gray-300 px-3 py-2">€300–600</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Waterontharder (vast)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (hele woning)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Toestemming nodig</td>
                <td className="border border-gray-300 px-3 py-2">€700–1.500</td>
              </tr>
            </tbody>
          </table>
        </div>

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
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Wat kalk en mineralen in drinkwater zijn en waarom ze problemen veroorzaken in appartementen.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: waterontharder werking</h3>
              <p className="text-sm text-gray-600">Hoe een ionenwisselende waterontharder kalk uit water verwijdert en wanneer dit relevant is voor appartementsbewoners.</p>
            </Link>
          </div>
        </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Lees ook: <a href="/kennisbank/waterontharder-appartement-huurwoning" className="text-[#005F8A] underline">Waterontharder in huurwoning: juridisch en praktisch</a> en <a href="/waterontharder/huren" className="text-[#005F8A] underline">waterontharder huren vs. kopen</a>.
        </p>
      </main>
    </>
  );
}
