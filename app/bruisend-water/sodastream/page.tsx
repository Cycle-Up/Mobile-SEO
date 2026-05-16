import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'SodaStream vs bruisend waterkraan: welke is beter voor thuis?',
  description:
    'SodaStream kost €100–130 en geeft bruisend water voor €0,05–0,08/L. Een bruisend waterkraan kost meer maar levert ook gefilterd en kokend water. Volledige vergelijking.',
  alternates: { canonical: 'https://waterfilterplatform.nl/bruisend-water/sodastream' },
};

const faqItems = [
  {
    q: 'Is een SodaStream goedkoper dan een bruisend waterkraan?',
    a: 'In aanschaf absoluut: SodaStream Terra €70 versus bruisend waterkraan €800–3.200. Over 5 jaar zijn de totale kosten: SodaStream circa €470 (aanschaf + cilinders), bruisend waterkraan circa €1.600 (aanschaf + installatie + CO2 + filter). De waterkraan levert echter ook gefilterd water en kokend water, wat de meerwaardekosten rechtvaardigt voor gezinnen die die functies ook gebruiken.',
  },
  {
    q: 'Hoe lang gaat een SodaStream CO2-cilinder mee?',
    a: 'Een standaard SodaStream CO2-cilinder produceert 60 liter bruisend water. Bij dagelijks gebruik van 1,5 liter gaat de cilinder circa 40 dagen mee. Bij incidenteel gebruik (500 ml/dag) circa 4 maanden. De cilinder ruilt u om bij Albert Heijn, Jumbo, Dirk of Bol.com voor €8–12. Tip: omruilen per 2 is goedkoper dan per stuk bij de meeste supermarkten.',
  },
  {
    q: 'Kan ik gefilterd water gebruiken in een SodaStream?',
    a: 'Ja, u kunt water uit een filterkan of osmosefilter gebruiken als basis voor uw SodaStream. Dit is zelfs aanbevolen als u in een PFAS-zone woont of als uw kraanwater een hoog chloorgehalte heeft (geeft smaak aan het bruisende water). Gebruik altijd koud of kamertemperatuur water: warm water absorbeert CO2 minder effectief en er is spatrisico bij de SodaStream-fles. Osmosewater als basis geeft het schoonste en smakelijkste bruisende water.',
  },
  {
    q: 'Welke SodaStream is het beste?',
    a: 'SodaStream Terra (€70): basismodel, enkelvoudige knop, werkt alleen met SodaStream-eigen flessen. SodaStream Duo (€100): compatibel met glazen flessen en PET-flessen, twee fles-maten mogelijk. SodaStream Art (€130): draaiknop voor fijnere dosering, retro-design. SodaStream Source (digitaal €130): digitale indicator voor carbonatieniveau. Voor de meeste gezinnen is de Duo de beste keuze vanwege de glasfles-optie en flexibiliteit.',
  },
  {
    q: 'Waar kan ik een SodaStream CO2-cilinder omruilen?',
    a: 'SodaStream CO2-cilinders ruilt u om bij: Albert Heijn (meeste vestigingen), Jumbo, Dirk, Blokker, MediaMarkt, Bol.com (thuisbezorging). Prijs bij omruil: €8–12 per 60L cilinder. Online via SodaStream.nl of Bol.com bestelt u een nieuwe cilinder met voorfrankeerd retourlabel voor de lege cilinder. Tip: bestel 2 tegelijk voor korting en altijd een reserve-cilinder. Let op: lege cilinders mogen niet als gewoon pakket worden verzonden zonder speciale verpakking.',
  },
  {
    q: 'Is SodaStream water even gezond als flessenwater?',
    a: 'SodaStream maakt uw kraanwater bruisend maar filtert het niet. De kwaliteit van het SodaStream-water is dus gelijk aan uw kraanwater (plus CO2). Nederlands kraanwater is over het algemeen veilig en van hoge kwaliteit. Als uw kraanwater goed smaakt en schoon is, is SodaStream-water een goed alternatief voor flessenwater. In PFAS-gebieden of bij loodleidingen: gebruik eerst een filter voor uw SodaStream.',
  },
  {
    q: 'Wat is het verschil tussen SodaStream en Sodamaker?',
    a: 'SodaStream is het bekende merk met eigen CO2-cilinders die bij supermarkten worden omgeruild. Sodamaker is een generieke term voor bruisapparaten van andere merken (zoals Aarke, Philips, DrinkMate). DrinkMate heeft als uniek kenmerk dat het ook andere dranken (vruchtensap, wijn) kan carboniseren. Aarke staat bekend om premium roestvrijstalen design. Qua CO2-cilinders zijn de meeste SodaStream-compatibele apparaten uitwisselbaar met SodaStream-cilinders.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'SodaStream vs bruisend waterkraan: welke is beter voor thuis?',
  description:
    'SodaStream kost €100–130 en geeft bruisend water voor €0,05–0,08/L. Een bruisend waterkraan kost meer maar levert ook gefilterd en kokend water.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/bruisend-water/sodastream',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function SodaStreamVsKraanPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Bruisend water', item: 'https://waterfilterplatform.nl/bruisend-water' },
              { '@type': 'ListItem', position: 3, name: 'SodaStream vs waterkraan', item: 'https://waterfilterplatform.nl/bruisend-water/sodastream' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/bruisend-water" className="hover:underline">Bruisend water</Link> &rsaquo;{' '}
          <span>SodaStream vs waterkraan</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            SodaStream vs bruisend waterkraan: welke is beter voor thuis?
          </h1>
          <p className="text-gray-700 text-lg">
            SodaStream: &euro;70&ndash;130 aanschaf, geen installatie. Bruisend waterkraan: &euro;800&ndash;3.200, ook gefilterd en kokend water. Welke past bij uw situatie?
          </p>
        </div>

        <QuickAnswer answer="Een SodaStream kost &euro;70&ndash;130 en maakt kraanwater bruisend voor &euro;0,05&ndash;0,08 per liter zonder installatie. Een 4-in-1 bruisend waterkraan kost &euro;800&ndash;3.200 met installatie maar levert ook gefilterd en kokend water. SodaStream wint op budget en eenvoud; de waterkraan wint op functies en dagelijks gemak voor gezinnen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een SodaStream?
        </h2>
        <p className="text-gray-700 mb-4">
          Een SodaStream carboniseert water via een verwisselbare CO2-cilinder. U vult de herbruikbare fles met kraanwater (koud of kamertemperatuur), plaatst de fles in het apparaat, en drukt op de knop. CO2 lost op in het water en vormt koolzuur (H&sup2;CO&sub3;). Het carbonisatieniveau bepaalt u zelf door de knop korter of langer ingedrukt te houden of meerdere keren te drukken.
        </p>
        <p className="text-gray-700 mb-6">
          Een SodaStream filtert het water NIET. Het voegt alleen CO2 toe aan het water dat u erin doet. De waterkwaliteit is dus gelijk aan uw kraanwater. Bij uitstekend kraanwater is dit prima; in PFAS-zones of bij loodleidingen filtert u het water eerst via een filterkan of osmosefilter.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          SodaStream modellen vergeleken
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Model</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bijzonderheden</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Terra</td>
                <td className="border border-gray-300 px-3 py-2">&euro;70</td>
                <td className="border border-gray-300 px-3 py-2">Basismodel, enkelvoudige knop, alleen SodaStream-flessen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Duo</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100</td>
                <td className="border border-gray-300 px-3 py-2">Compatibel met glazen en PET-flessen, flexibele fles-maten</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Art</td>
                <td className="border border-gray-300 px-3 py-2">&euro;130</td>
                <td className="border border-gray-300 px-3 py-2">Draaiknop voor fijnere carbonatiedosering, retro-design</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Source</td>
                <td className="border border-gray-300 px-3 py-2">&euro;130</td>
                <td className="border border-gray-300 px-3 py-2">Digitale LED-indicator voor carbonatieniveau</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten over 5 jaar: SodaStream vs waterkraan vs flessenwater
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Product</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaarlijks</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">5 jaar totaal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">SodaStream Terra</td>
                <td className="border border-gray-300 px-3 py-2">&euro;70</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80 (cilinders)</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-green-700">&euro;470</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Bruisend waterkraan (4-in-1)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.200</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80 (CO2+filter)</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold">&euro;1.600</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Flessenwater (2L/dag)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0</td>
                <td className="border border-gray-300 px-3 py-2">&euro;292</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-red-700">&euro;1.460</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Opmerking: de bruisend waterkraan levert ook gefilterd en kokend water, wat de meerwaardekosten rechtvaardigt. Als u ook een waterfilter en een waterkoker zou aanschaffen, valt het kostenverschil kleiner uit. De kokend waterfunctie alleen al vervangt een waterkoker (&euro;50&ndash;150) en een apart waterfilter (&euro;150&ndash;400).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kiest u voor een SodaStream?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Huurwoning: geen mogelijkheid tot vaste installatie</li>
          <li>Budget onder &euro;200: lage instapdrempel</li>
          <li>Incidenteel gebruik: niet elke dag bruisend water</li>
          <li>Geen behoefte aan gefilterd of kokend water uit dezelfde kraan</li>
          <li>Kleinere huishoudens (1&ndash;2 personen)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kiest u voor een bruisend waterkraan?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Eigen woning: installatie is permanent en waardeverhogend</li>
          <li>Dagelijks zwaar gebruik: gezin van 4+ personen</li>
          <li>Wilt ook gefilterd en/of kokend water: complete oplossing</li>
          <li>PFAS-zone of loodleidingen: osmosefiltratie noodzakelijk</li>
          <li>Keukenrenovatie: perfecte gelegenheid voor integratie</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          SodaStream waterkwaliteit en PFAS
        </h2>
        <p className="text-gray-700 mb-6">
          Een SodaStream filtert het water niet &mdash; het maakt gewoon kraanwater bruisend. In gebieden met verhoogde PFAS-concentraties in kraanwater (zoals de omgeving van Dordrecht of de Schiphol-zone) is het verstandig om eerst het water te filteren via een osmosefilter of een kwalitatieve filterkan. Gebruik het gefilterde water vervolgens als basis in uw SodaStream voor het schoonste en lekkerste bruisende water.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over SodaStream vs waterkraan
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/bruisend-water" className="text-[#005F8A] underline">bruisend water methoden vergelijken</Link>,{' '}
          <Link href="/bruisend-water/kraan" className="text-[#005F8A] underline">4-in-1 bruisend waterkraan kopen</Link> en{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend waterkraan vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
