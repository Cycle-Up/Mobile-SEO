import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Nitraat in leidingwater: normen, risicos en filteren',
  description: 'De EU-norm voor nitraat in leidingwater is 50 mg/L. In landbouwgebieden wordt deze soms overschreden. Nitraat is gevaarlijk voor baby\'s. Osmosefilter',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/nitraat' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Hoeveel nitraat zit er in Nederlands leidingwater?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In Nederland ligt het nitraatgehalte in leidingwater gemiddeld tussen 5 en 25 mg/L, ruim onder de EU-norm van 50 mg/L. In intensieve landbouwgebieden zoals Brabant, de Gelderse Vallei en Limburg kan het gehalte oplopen tot 30-45 mg/L. Controleer het waterkwaliteitsrapport van uw drinkwaterbedrijf voor de exacte waarden op uw adres.",
      },
    },
    {
      '@type': 'Question',
      name: "Is nitraat in leidingwater gevaarlijk?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bij de geldende EU-norm van maximaal 50 mg/L is leidingwater veilig voor gezonde volwassenen. Voor baby's jonger dan 6 maanden geldt een strengere norm: de WHO adviseert maximaal 10 mg/L voor water dat wordt gebruikt voor flesvoeding. Bij chronisch hoge blootstelling boven 50 mg/L bestaat een verhoogd risico op bepaalde vormen van kanker (IARC groep 2A).",
      },
    },
    {
      '@type': 'Question',
      name: "Welk waterfilter verwijdert nitraat?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nitraat verwijderen vraagt om specifieke filtertechnologie. Effectief zijn: omgekeerde osmose (RO) met 85-95% verwijdering, ionenwisselaars (anion) met 85-95% verwijdering, en destillatie met 98-99% verwijdering. Actief koolfilters en filterkansen verwijderen geen nitraat. Een osmosefilter is de meest praktische huishoudelijke oplossing.",
      },
    },
    {
      '@type': 'Question',
      name: "Maakt koken leidingwater veilig bij hoog nitraat?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nee, koken maakt het nitraatprobleem juist erger. Bij koken verdampt water maar blijft nitraat achter in het overblijvende water. Hierdoor concentreert het nitraat: als u het water halveert, verdubbelt de nitraatconcentratie. Gebruik voor het aanmaken van babyvoeding bij hoog nitraat altijd osmosewater of speciaal babywater, nooit gekookt leidingwater.",
      },
    },
    {
      '@type': 'Question',
      name: "In welke regio's is het nitraatgehalte van leidingwater hoog?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "De hoogste nitraatgehalten in Nederlands leidingwater komen voor in gebieden met intensieve veehouderij en akkerbouw: Noord-Brabant (Peel, Kempen), de Gelderse Vallei, de Achterhoek en delen van Limburg. Het drinkwaterbedrijf publiceert jaarlijks de gemeten waarden per leveringsgebied. U kunt uw postcodegebied opzoeken via de website van uw waterbedrijf.",
      },
    },
    {
      '@type': 'Question',
      name: "Is leidingwater met veel nitraat veilig voor baby's?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nee, niet boven 10 mg/L. De WHO stelt voor water dat wordt gebruikt voor babyvoeding een advieswaarde van maximaal 10 mg/L nitraat. Bij hogere concentraties bestaat het risico op methemoglobinemie (blauwzucht): nitraat wordt in de maag van zuigelingen omgezet naar nitriet, dat hemoglobine blokkeert en de zuurstoftransport verstoort. Gebruik voor flesvoeding altijd water met minder dan 10 mg/L nitraat: osmosewater of gecertificeerd babywater.",
      },
    },
    {
      '@type': 'Question',
      name: "Wat is het verschil tussen nitraat en nitriet in water?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nitraat (NO3-) is minder giftig en heeft een EU-norm van 50 mg/L in drinkwater. Nitriet (NO2-) is veel giftiger en heeft een EU-norm van slechts 0,5 mg/L. In het lichaam van baby's kan nitraat worden omgezet naar nitriet, vandaar de strengere advieswaarde voor zuigelingen. In normaal leidingwater is nitriet doorgaans erg laag; nitraat is de relevante indicator voor landbouwgebieden.",
      },
    },
    {
      '@type': 'Question',
      name: "Hoe meet ik het nitraatgehalte van mijn kraanwater?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "De eenvoudigste manier is het jaarlijkse waterkwaliteitsrapport van uw drinkwaterbedrijf raadplegen: gratis beschikbaar op hun website met waarden per leveringsgebied. Wilt u meten op uw eigen adres: nitraatteststrips zijn verkrijgbaar bij tuincentra en online voor circa 10-20 euro. Voor een nauwkeurige meting laat u een watermonster analyseren door een gecertificeerd laboratorium (circa 30-60 euro).",
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Nitraat in leidingwater: normen, risicos en filteren',
  description: "De EU-norm voor nitraat in leidingwater is 50 mg/L. In landbouwgebieden wordt deze soms overschreden. Nitraat is gevaarlijk voor baby's. Osmosefilter",
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/nitraat',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function NiraatLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Nitraat in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/nitraat' },
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
          <span>Nitraat in leidingwater</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Nitraat in leidingwater: normen, risico&apos;s en filteren
          </h1>
          <p className="text-gray-700 text-lg">
            De EU-norm voor nitraat in drinkwater is 50 mg/L. In landbouwintensieve regio&apos;s zoals
            Noord-Brabant en de Gelderse Vallei liggen concentraties soms dicht bij deze grens.
            Voor baby&apos;s geldt een veel strengere advieswaarde van 10 mg/L.
          </p>
        </div>

        <QuickAnswer answer="Nitraat in leidingwater: EU-norm is 50 mg/L, gemiddeld NL 5-25 mg/L. In landbouwgebieden (Brabant, Gelderse Vallei) tot 45 mg/L. Gevaarlijk voor baby's onder 6 maanden boven 10 mg/L (blauwe baby syndroom). Osmosefilter en ionenwisselaar verwijderen 85-95%. Koken concentreert nitraat juist." />

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is nitraat en hoe komt het in leidingwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Nitraat (NO&#8323;&#8315;) is een stikstofverbinding die van nature voorkomt in de bodem. De voornaamste bron in Nederlands grondwater is de landbouw: kunstmest en dierlijke mest bevatten stikstofverbindingen die door regenwater uitspoelen naar het grondwater dat als drinkwaterbron dient.
        </p>
        <p className="text-gray-700 mb-6">
          Drinkwaterbedrijven zuiveren het water om het nitraatgehalte onder de wettelijke norm te houden. In gebieden met intensieve veehouderij is dit een grote uitdaging, en in sommige gebieden moeten meerdere bronnen worden gemengd om aan de norm te voldoen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en Nederlandse situatie
        </h2>
        <p className="text-gray-700 mb-4">
          De Europese Drinkwaterrichtlijn stelt een maximum van 50 mg/L nitraat in leidingwater. In Nederland ligt het gemiddelde tussen 5 en 25 mg/L, ruim onder de norm. In specifieke landbouwgebieden zijn hogere waarden gemeten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Noord-Brabant (Peel, Kempen):</strong> 30&ndash;45 mg/L in grondwaterbronnen</li>
          <li><strong>Gelderse Vallei:</strong> 25&ndash;40 mg/L in bepaalde leveringsgebieden</li>
          <li><strong>Limburg:</strong> Lokale piekwaarden in grondwaterbronnen &gt;30 mg/L</li>
          <li><strong>Randstad en Noord-Holland:</strong> Doorgaans &lt;15 mg/L</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Controleer het jaarlijkse waterkwaliteitsrapport van uw drinkwaterbedrijf voor de gemeten waarden op uw adres. Dit rapport is gratis beschikbaar via de website van uw waterbedrijf (Brabant Water, Vitens, Evides, PWN etc.).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s van nitraat
        </h2>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C] mb-1">Baby&apos;s jonger dan 6 maanden: hoog risico</h3>
            <p className="text-gray-700 text-sm">
              In de maag van zuigelingen wordt nitraat omgezet naar nitriet. Nitriet bindt aan hemoglobine en blokkeert de zuurstoftransport in het bloed, wat leidt tot methemoglobinemie (&apos;blauwe baby syndroom&apos;). De WHO adviseert maximaal 10 mg/L voor water gebruikt bij flesvoeding. In Nederland is dit geen acuut probleem bij normaal leidingwater, maar in landbouwgebieden is voorzichtigheid geboden.
            </p>
          </div>
          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C] mb-1">Volwassenen: risico bij chronische hoge blootstelling</h3>
            <p className="text-gray-700 text-sm">
              Het IARC (Internationaal Agentschap voor Kankeronderzoek) heeft nitraat geclassificeerd als &apos;mogelijk kankerverwekkend voor mensen&apos; (groep 2A) bij hoge inname. Dit geldt specifiek voor het endogene nitraat dat in het lichaam wordt omgezet. Bij de huidige Nederlandse leidingwaterniveaus is het risico voor gezonde volwassenen verwaarloosbaar.
            </p>
          </div>
          <div className="border-l-4 border-amber-300 pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C] mb-1">Zwangere vrouwen: voorzichtigheid aanbevolen</h3>
            <p className="text-gray-700 text-sm">
              Bij nitraatgehalten boven 25 mg/L raden sommige gynaecologen extra voorzichtigheid aan. Een osmosefilter als preventieve maatregel is een redelijke keuze in landbouwgebieden, zeker in combinatie met andere risicofactoren.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nitraat vs. nitriet: het verschil
        </h2>
        <p className="text-gray-700 mb-6">
          Nitraat (NO&#8323;&#8315;) en nitriet (NO&#8322;&#8315;) zijn nauw verwante verbindingen maar met sterk verschillende toxiciteit. Nitraat heeft een EU-norm van 50 mg/L; nitriet een norm van slechts 0,5 mg/L, omdat het honderd keer giftiger is. In normaal leidingwater is nitriet doorgaans vrijwel afwezig. Het gevaar van nitraat zit in de omzetting naar nitriet in het lichaam, met name bij zuigelingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke filters verwijderen nitraat?
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Nitraatverwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">0%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">0%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;60</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Ionenwisselaar (anion)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">85&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">85&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Destillatie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">98&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100&ndash;300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-amber-800 font-semibold text-sm">Koken werkt averechts bij nitraat</p>
          <p className="text-amber-700 text-sm mt-1">
            Bij koken verdampt water maar blijft nitraat opgelost in het resterende water. De concentratie neemt toe naarmate meer water verdampt. Koken is dus geen oplossing voor nitraat &mdash; gebruik altijd gefilterd water.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch advies: heeft u een osmosefilter nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste Nederlandse huishoudens is een osmosefilter geen noodzaak voor nitraat alleen. Leidingwater voldoet in vrijwel alle gebieden aan de EU-norm. Een osmosefilter wordt echter sterk aanbevolen wanneer:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>U babyvoeding bereidt en woont in een landbouwgebied (&gt;10 mg/L nitraat)</li>
          <li>Uw leidingwater ook PFAS of lood bevat (osmose pakt meerdere problemen tegelijk aan)</li>
          <li>U zwanger bent en in een gebied woont met verhoogd nitraatgehalte</li>
        </ul>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat en nitriet in drinkwater</h3>
              <p className="text-sm text-gray-600">Herkomst, gezondheidsrisicos en normen voor nitraat en nitriet in water.</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
              <p className="text-sm text-gray-600">Wettelijke normen en grenswaarden voor de kwaliteit van Nederlands drinkwater.</p>
            </Link>
            <Link href="/putwater/nitraat" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat in putwater</h3>
              <p className="text-sm text-gray-600">Waarom putwater vaker verhoogde nitraatwaarden heeft en wat u kunt doen.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Hoe omgekeerde osmose nitraat en andere verontreinigingen effectief verwijdert.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over nitraat in leidingwater</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/waterfilter/baby" className="text-[#005F8A] underline">waterfilter voor babywater</Link>.
        </p>
        <p className="text-gray-700 mt-4">
          Verdiep uw kennis: <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="text-[#005F8A] hover:underline font-medium">Nitraat en nitriet in drinkwater: normen en gezondheidsrisico&apos;s</Link>.
        </p>
      </main>
    </>
  );
}
