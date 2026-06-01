import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Regenwater filteren: dakfilter, sediment, kool en UV in 5 stappen',
  description:
    'Regenwater filteren in 5 stappen: dakfilter, voorfilter 100-200 micron, sedimentfilter, actief kool en UV-desinfectie. Welke combinatie voor welk doel.',
  alternates: { canonical: 'https://waterfilterplatform.nl/regenwater/filteren' },
};

const faqItems = [
  {
    q: 'Welke filters heb ik nodig om regenwater te filteren?',
    a: 'De basisaanpak bestaat uit 5 stappen: (1) dakfilter of bladvanger op de regenpijp, (2) voorfilter 100-200 micron in de leiding naar de tank, (3) sedimentfilter 5-20 micron na de tank, (4) actief kool filter voor smaak, geur en organische stoffen, (5) UV-desinfectie als laatste stap voor bacteriologische veiligheid. Voor tuingebruik volstaan stap 1 en 2. Voor WC-spoeling stap 1 t/m 3. Voor was- en doucheapplicaties stap 1 t/m 5.',
  },
  {
    q: 'Wat doet een dakfilter precies?',
    a: 'Een dakfilter (of bladvanger) houdt grof vuil tegen voor het regenwater de opslagtank bereikt: bladeren, takjes, mos, vogelpoep en grover stof. Dakfilters zijn meestal mechanische zeven met een maaswijdte van 0,3-1 mm. Plaatsing direct na de regenpijp voorkomt dat organisch materiaal in de tank gaat rotten en het water vervuilt. Maandelijks visueel controleren en bij bladval (oktober-november) wekelijks legen.',
  },
  {
    q: 'Wat is het verschil tussen voorfilter en sedimentfilter?',
    a: 'Een voorfilter (100-200 micron) zit voor de tank en houdt grof zand, fijn stof en kleine organische deeltjes tegen. Een sedimentfilter (5-20 micron) zit na de tank en filtert fijner sediment uit het opgepompte water, voordat het naar latere filterstappen of het tappunt gaat. De voorfilter beschermt de tank en pomp, de sedimentfilter beschermt de fijnere filters (actief kool, UV) tegen verstopping.',
  },
  {
    q: 'Waarom is actief kool nodig bij regenwaterfiltratie?',
    a: 'Actief kool verwijdert smaak- en geurstoffen, organische verbindingen, chloor (indien aanwezig uit nabehandeling), pesticiden en deels zware metalen. Regenwater dat door de lucht is gevallen en over het dak liep kan rubberresten van dakbedekking, ftalaten, PAK\'s en stofverontreiniging bevatten. Actief kool maakt het water reukloos en smaakneutraal. Vervang de cartridge elke 6-12 maanden afhankelijk van verbruik.',
  },
  {
    q: 'Is UV-desinfectie verplicht bij regenwater?',
    a: 'UV-desinfectie is verplicht als regenwater wordt gebruikt voor toepassingen waarbij contact met de huid of inhalatie van aerosolen mogelijk is (douchen, wassen, baden, schoonmaken). Voor tuinbesproeiing en WC-spoeling is UV niet verplicht. UV-lampen inactiveren bacterien, virussen en parasieten zonder chemicalien toe te voegen. Vervang de UV-lamp jaarlijks, ook als de lamp nog brandt, omdat de UV-output na 8000-10000 branduren te laag wordt.',
  },
  {
    q: 'Kan ik een regenwaterfilter zelf installeren?',
    a: 'De voorfilter en dakfilter installatie is doe-het-zelf, mits u kunt werken met regenpijpaansluitingen en pakkingen. Sedimentfilter, actief kool en UV-systemen vragen om aansluiting op een drukleiding en elektriciteit; dit valt onder loodgieters- of installateurswerk. Een complete installatie inclusief alle 5 stappen kost circa 1500-3500 euro afhankelijk van capaciteit en kwaliteit van de gekozen onderdelen.',
  },
  {
    q: 'Hoe vaak moet ik de filters vervangen?',
    a: 'Dakfilter: maandelijks visueel controleren, jaarlijks reinigen. Voorfilter (100-200 micron): elke 1-3 maanden spoelen of vervangen. Sedimentfilter (5-20 micron): elke 3-6 maanden. Actief kool: elke 6-12 maanden afhankelijk van verbruik en watervervuiling. UV-lamp: jaarlijks. Houd een onderhoudslogboek bij om vervangmomenten niet te vergeten. Te lang wachten verhoogt het risico op bacteriegroei en verminderde waterkwaliteit.',
  },
  {
    q: 'Welke filtercombinatie kies ik voor welke toepassing?',
    a: 'Tuin: dakfilter + voorfilter (100-200 micron). WC-spoeling: dakfilter + voorfilter + sedimentfilter. Was en douche: dakfilter + voorfilter + sedimentfilter + actief kool + UV-desinfectie. Drinkwater uit regenwater (niet aanbevolen in NL): bovenstaande plus omgekeerde osmose en remineralisatie, met regelmatige laboratoriumcontrole. Maak de keuze altijd op basis van de meest kritische toepassing in uw huis.',
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
  headline: 'Regenwater filteren: dakfilter, sediment, kool en UV in 5 stappen',
  description:
    'Regenwater filteren in 5 stappen: dakfilter, voorfilter 100-200 micron, sedimentfilter, actief kool en UV-desinfectie. Welke combinatie voor welk doel.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/regenwater/filteren',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function RegenwaterFilterenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Regenwater', item: 'https://waterfilterplatform.nl/regenwater' },
              { '@type': 'ListItem', position: 3, name: 'Regenwater filteren', item: 'https://waterfilterplatform.nl/regenwater/filteren' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/regenwater" className="hover:underline">Regenwater</Link> &rsaquo;{' '}
          <span>Filteren</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Regenwater filteren: dakfilter, sediment, kool en UV in 5 stappen
          </h1>
          <p className="text-gray-700 text-lg">
            De basisaanpak regenwaterfiltratie: van bladvanger op de regenpijp tot UV-desinfectie. Welke combinatie past bij tuin, WC-spoeling, of huishoudelijk gebruik.
          </p>
        </div>

        <QuickAnswer answer="Regenwater filteren gebeurt in 5 stappen: dakfilter, voorfilter (100-200 micron), sedimentfilter (5-20 micron), actief kool en UV-desinfectie. Tuingebruik volstaat met stap 1-2. WC-spoeling vraagt stap 1-3. Was- en douchewater vraagt alle 5 stappen. Een complete installatie kost 1500-3500 euro en vergt jaarlijks onderhoud aan filters en UV-lamp." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De 5 stappen van regenwaterfiltratie
        </h2>
        <p className="text-gray-700 mb-4">
          Regenwater is van nature zacht en kalkarm, maar het is geen schoon water. Op weg naar uw opslagtank passeert het water het dak, de goten en de regenpijpen, waar het bladeren, mos, stof, vogelpoep, dakcoatingresten en mogelijk PAK&apos;s en ftalaten oppikt. Een goede filterketen verwijdert deze verontreinigingen stap voor stap.
        </p>
        <p className="text-gray-700 mb-6">
          De volgorde is belangrijk: grove filters eerst, fijne filters daarna. Hierdoor blijven de duurdere fijnfilters langer mee gaan en wordt voorkomen dat ze vroegtijdig verstopt raken. Hieronder bespreken we elke stap.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Stap 1: Dakfilter en bladvanger
        </h3>
        <p className="text-gray-700 mb-4">
          De dakfilter (ook wel bladvanger of pijpfilter genoemd) zit direct op of in de regenpijp. Hij houdt grof vuil tegen: bladeren, takjes, mos, vogelpoep en grof stof. Standaard maaswijdte is 0,3-1 mm. Zonder dakfilter komt organisch materiaal in de tank en gaat het daar rotten, wat slecht ruikend en bacterierijk water oplevert.
        </p>
        <p className="text-gray-700 mb-6">
          Plaats de dakfilter op een bereikbare hoogte (circa 1,5 meter) zodat u hem makkelijk kunt legen. In bladval-seizoenen (oktober-november) wekelijks legen; in andere maanden maandelijks volstaat. Goede dakfilters kosten 25-75 euro per stuk.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Stap 2: Voorfilter (100-200 micron)
        </h3>
        <p className="text-gray-700 mb-4">
          De voorfilter zit in de leiding van regenpijp naar opslagtank en heeft een veel fijnere maaswijdte dan de dakfilter: 100-200 micron. Hij houdt fijn zand, klein organisch materiaal en kleine deeltjes tegen die langs de dakfilter konden komen. Veel systemen werken met een zelfreinigende cycloonfilter die het filtraat afvoert naar het riool.
        </p>
        <p className="text-gray-700 mb-6">
          Een goede voorfilter beschermt de hele rest van de filterketen en uw tankpomp. Voor meer technische diepgang over fijnfiltering zie onze pagina over <Link href="/waterfilter/sediment" className="text-[#005F8A] underline">sedimentfilters</Link>.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Stap 3: Sedimentfilter (5-20 micron)
        </h3>
        <p className="text-gray-700 mb-6">
          Na de opslagtank, vlak voor verdere zuivering, zit de sedimentfilter. Met een veel fijnere maaswijdte van 5-20 micron filtert hij fijne deeltjes uit het opgepompte water. Dit beschermt actief kool en UV-installaties tegen vroegtijdige verstopping. Sedimentfilters zijn doorgaans vervangbare cartridges in een drukvast huis. Vervang elke 3-6 maanden of zodra het waterdrukverlies toeneemt.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Stap 4: Actief kool filtratie
        </h3>
        <p className="text-gray-700 mb-4">
          Actief kool verwijdert smaak, geur, chloor, organische verbindingen, pesticiden, ftalaten, PAK&apos;s en deels zware metalen. Voor regenwater is dit essentieel als het water in contact komt met de huid (douche, wassen) of als smaak en geur problematisch zijn. Voor tuingebruik is actief kool niet nodig.
        </p>
        <p className="text-gray-700 mb-6">
          Lees meer over de werking en typen op onze pagina <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">actief kool filters</Link>. Een goede granulair actief kool (GAC) of carbon block cartridge kost 30-80 euro en gaat 6-12 maanden mee bij normaal verbruik.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Stap 5: UV-desinfectie
        </h3>
        <p className="text-gray-700 mb-6">
          UV-licht inactiveert bacterien, virussen en parasieten zonder toevoeging van chemicalien. Voor regenwater dat in contact komt met huid of dat verneveld wordt (douches, wasmachine), is UV-desinfectie essentieel. Een UV-systeem voor huishoudelijk verbruik kost 250-700 euro inclusief installatie. De UV-lamp moet jaarlijks vervangen worden, ook als hij nog brandt &mdash; de UV-output zakt onder de effectieve drempel na 8000-10000 branduren. Achtergrond op onze pagina <Link href="/filtertechnieken/uv-sterilisatie" className="text-[#005F8A] underline">UV-sterilisatie</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtercombinatie per toepassing
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Toepassing</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Benodigde stappen</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Indicatieve kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Tuin besproeien</td>
                <td className="border border-gray-300 px-3 py-2">Dakfilter + voorfilter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;75&ndash;250</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">WC-spoeling</td>
                <td className="border border-gray-300 px-3 py-2">Dakfilter + voor + sediment</td>
                <td className="border border-gray-300 px-3 py-2">&euro;250&ndash;750</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Wasmachine</td>
                <td className="border border-gray-300 px-3 py-2">Dakfilter + voor + sediment + kool</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;1500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Douche en bad</td>
                <td className="border border-gray-300 px-3 py-2">Alle 5 stappen incl. UV</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1500&ndash;3500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Drinkwater (afgeraden)</td>
                <td className="border border-gray-300 px-3 py-2">Alle 5 + RO + remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">&euro;3500&ndash;6000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud en filtervervanging
        </h2>
        <p className="text-gray-700 mb-6">
          Een regenwaterinstallatie levert pas betrouwbaar water als het onderhoud op orde is. Houd een logboek bij met vervangmomenten en controle-intervallen. Dakfilter en voorfilter zijn een doe-het-zelf taak; sedimentfilter, actief kool en UV-lamp kunt u zelf vervangen mits de cartridge-aansluitingen toegankelijk zijn. Reken op 75-250 euro per jaar aan onderhoudsmaterialen voor een complete vijfstapsinstallatie. Zie ook onze <Link href="/regenwater" className="text-[#005F8A] underline">regenwater hub</Link> voor het complete overzicht van opslag en toepassingen.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over regenwater filteren
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterfilter/sediment" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Sedimentfilter</h3>
              <p className="text-sm text-gray-600">Werking en micrometers van sedimentfilters voor regenwater en kraanwater.</p>
            </Link>
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool filtratie</h3>
              <p className="text-sm text-gray-600">Hoe actief kool smaak, geur en organische stoffen uit regenwater verwijdert.</p>
            </Link>
            <Link href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie</h3>
              <p className="text-sm text-gray-600">UV-desinfectie zonder chemicalien voor regenwater bestemd voor douche of was.</p>
            </Link>
            <Link href="/regenwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater hub</h3>
              <p className="text-sm text-gray-600">Compleet overzicht van regenwateropvang, opslag, filtering en toepassingen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </main>
    </>
  );
}
