import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor caravan en camper: schoon drinkwater onderweg',
  description:
    'Een waterfilter voor caravan of camper verwijdert chloor, bacterien en smaakafwijkingen uit kampeerwater. Vergelijking van inline filters, UV-purifiers en draagbare osmosefilters.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/caravan' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter gebruik ik in mijn caravan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor West-Europees kamperen is een inline koolstoffilter (EUR 15-40) voldoende: hij verwijdert chloor, smaakafwijkingen en lichte verontreinigingen. Voor reizen naar Oost-Europa of buiten de EU is een UV-purifier (EUR 60-150) aanbevolen voor bacterien en virussen. Voor langdurige reizen naar gebieden met onbekende waterkwaliteit is een compacte 12V osmosefilter (EUR 200-500) de meest complete oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is kampeerplaatswater veilig om te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In West-Europa (Nederland, Belgie, Duitsland, Frankrijk) is kampeerplaatswater over het algemeen veilig drinkwater, maar het kan zwaarder gechlooreerd zijn dan thuiswater en een ongewone smaak hebben. Op kampeerplaatsen in Zuid-Europa (Spanje, Italie, Griekenland) en buiten de EU is de kwaliteit minder betrouwbaar. Een inline koolstoffilter verbetert de smaak; voor microbiologische zekerheid in twijfelachtige gebieden gebruikt u een UV-filter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe sluit ik een inline filter aan op mijn caravan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste inline kampeerfilters hebben een standaard 3/4 inch aansluiting die past op de kampeeraansluiting van elke Europese camping. U sluit de tuinaansluiting van de camping aan op de inlaat van het filter, en de uitlaat op uw caravanslang. Geen gereedschap nodig. Let op de stroomrichting (IN/OUT op de behuizing). Spoel het filter voor eerste gebruik gedurende 2 minuten door.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe reinig ik de watertank van mijn caravan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desinfecteer de watertank na winteropslag met een natriumhypochloriete oplossing: 1 mL bleekwater (4% actief chloor) per 10 liter tankinhoud. Vul de tank, schud, laat 30 minuten staan, en spoel grondig door totdat de chloorlucht verdwenen is. Doe dit ook na langere stilstand. Vervang vervolgens uw inline filter voor gebruik, want chloor wordt door het koolstoffilter geadsorbeerd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter werkt zonder stroom in een camper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keramische zwaartekrachtfilters (zoals Berkey) werken zonder stroom of waterdruk: u giet water in de bovenste kamer en het filtert op eigen gewicht door naar de onderste kamer. Ze verwijderen bacterien, protozoa en chloor effectief. Ideaal voor stacaravans of kamperen zonder stroom. Capaciteit is circa 10-20 liter per dag afhankelijk van het model. Nadeel: ze werken langzaam en zijn groter dan inline filters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is buitenlands kampeerwater veilig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit verschilt sterk per land. In Noord- en West-Europa is kampeerplaatswater doorgaans drinkwaterkwaliteit. In Spanje, Italie en Portugal is het wettelijk drinkwater maar de smaak en hardheid varieren sterk. In Oost-Europa, Turkije en buiten de EU is voorzichtigheid geboden: gebruik een UV-filter of drink gebotteld water. Controleer voor vertrek de CDC TravHealth-database voor waterkwaliteitsadvies per bestemming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een Berkey-filter en is het goed voor caravans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Berkey is een merk zwaartekrachtfilters dat keramische filterelementen gebruikt. De filters verwijderen bacterien, chloor, zware metalen en protozoa zonder stroom of waterdruk. Voor caravans en stacaravans is het Big Berkey (8,5 liter) of Travel Berkey (6 liter) geschikt. Aanschafprijs EUR 200-400, filterpatronen gaan 20.000-22.000 liter mee (circa 2-5 jaar). Berkey verwijdert geen virussen zonder aanvullende UV-ontsmetting.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor caravan en camper: schoon drinkwater onderweg',
  description:
    'Vergelijking van inline koolstoffilters, UV-purifiers, keramische zwaartekrachtfilters en draagbare osmosefilters voor caravan en camper.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/caravan',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterCaravanPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter caravan en camper', item: 'https://waterfilterplatform.nl/waterfilter/caravan' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Waterfilter caravan en camper</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor caravan en camper: schoon drinkwater onderweg
          </h1>
          <p className="text-gray-600 text-sm">
            Inline filters, UV-purifiers, keramische filters en draagbare osmosefilters vergeleken
          </p>
        </section>

        <QuickAnswer answer="Een inline koolstoffilter (EUR 15-40) is voldoende voor West-Europees kamperen: verwijdert chloor en smaakafwijkingen. Voor buitenland of onzeker water voegt u een UV-purifier toe (bacterien, virussen). Voor langdurige reizen is een compacte 12V osmosefilter de meest complete oplossing. Reinig uw watertank jaarlijks met natriumhypochloriet." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen in caravan en camper
        </h2>
        <p className="text-gray-700 mb-4">
          Caravanners en camperaars hebben te maken met drie typen waterbronnen, elk met eigen kwaliteitskenmerken:
        </p>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">1. Kampeerterrein-aansluiting</h3>
            <p className="text-gray-700 text-sm">
              De meest gebruikte bron. In West-Europa is dit drinkwaterkwaliteit, maar kampeerplaatsen chloreren vaak zwaarder dan stedelijk leidingwater om biofilmvorming in lange leidingen te voorkomen. Resultaat: sterke chloorsmaak, soms troebel water na langdurige stilstand. Waterdruk varieert (1-4 bar).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">2. Eigen watertank</h3>
            <p className="text-gray-700 text-sm">
              Stilstaand water in plastic tanks is een voedingsbodem voor bacteriegroei en biofilm, zeker bij warmte. Na winteropslag of langere stilstand bevat de tank mogelijk legionella of andere bacterien. Regelmatige desinfectie is essentieel.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">3. Kraanwater buitenland</h3>
            <p className="text-gray-700 text-sm">
              Kwaliteit varieert sterk per regio. Spanje en Italie: wettelijk drinkwater, maar hardheid kan oplopen tot 500 mg/L (kalkafzetting in koffiezetapparaat). Oost-Europa en buiten EU: microbiologische kwaliteit minder betrouwbaar; gebruik UV-filter of gebotteld water.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterkwaliteitsproblemen onderweg
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Chloor-smaak:</strong> kampeerplaatsen gebruiken soms hoge chloorconcentraties om de installatie te desinfecteren. Koolstoffilter lost dit volledig op.</li>
          <li><strong>Bacterien:</strong> slecht onderhouden kampeerinstallaties of eigen tank bij stilstand kunnen bacterien bevatten. UV-purifier is de oplossing.</li>
          <li><strong>Variabele hardheid:</strong> Spanje en Italie hebben zeer hard water (200-500 mg/L). Kalkafzetting in koffiezetapparaat en ketel. Ontharder of compacte osmose helpt.</li>
          <li><strong>Onbekende kwaliteit:</strong> buitenlands water buiten West-Europa. UV-filter of osmose aanbevolen.</li>
          <li><strong>Biofilm in slangen:</strong> bij warm weer groeit biofilm snel in caravanslangen. Vervang slangen na elk seizoen of gebruik antibacteriele slangen (zilverionen).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking filteroplossingen voor caravan en camper
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Oplossing</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Filtert</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschikt voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Inline koolstoffilter (kampeer)</td>
                <td className="border border-gray-300 px-3 py-2">EUR 15-40</td>
                <td className="border border-gray-300 px-3 py-2">Chloor, smaak</td>
                <td className="border border-gray-300 px-3 py-2">West-Europa kamperen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">UV-purifier (travelsize)</td>
                <td className="border border-gray-300 px-3 py-2">EUR 60-150</td>
                <td className="border border-gray-300 px-3 py-2">Bacterien, virussen</td>
                <td className="border border-gray-300 px-3 py-2">Buitenland, onzeker water</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Keramisch reisfilter</td>
                <td className="border border-gray-300 px-3 py-2">EUR 50-120</td>
                <td className="border border-gray-300 px-3 py-2">Bacterien, protozoa</td>
                <td className="border border-gray-300 px-3 py-2">Backpacking, geen stroom</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Compacte osmose (12V)</td>
                <td className="border border-gray-300 px-3 py-2">EUR 200-500</td>
                <td className="border border-gray-300 px-3 py-2">Alles incl. zware metalen</td>
                <td className="border border-gray-300 px-3 py-2">Langdurige reizen, Oost-Europa</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Berkey-systeem (zwaartekracht)</td>
                <td className="border border-gray-300 px-3 py-2">EUR 200-400</td>
                <td className="border border-gray-300 px-3 py-2">Bacterien, chloor, lood</td>
                <td className="border border-gray-300 px-3 py-2">Stacaravan, geen druk nodig</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Inline filter aansluiten: stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste kampeer-inline filters hebben een standaard 3/4 inch buitendraad die past op de gangbare kampeeraansluiting. Zo sluit u het filter aan:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Controleer de stroomrichting op het filter (IN en OUT zijn aangegeven)</li>
          <li>Schroef de inlaat van het filter op de kampeeraansluiting</li>
          <li>Sluit uw caravanslang aan op de uitlaat van het filter</li>
          <li>Open de watertoevoer en laat het filter 2 minuten doorstromen om carbon-fijn te spoelen</li>
          <li>Vervang het filterpatroon elk seizoen of na 10.000 liter (zie productspecificaties)</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Watertank hygiëne: desinfectie en onderhoud
        </h2>
        <p className="text-gray-700 mb-4">
          De watertank van uw caravan of camper verdient elk seizoen aandacht. Stilstaand water en warmte zijn ideale omstandigheden voor biofilmvorming en bacteriegroei.
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-[#003F5C] mb-2">Desinfectieprotocol watertank</h3>
          <ol className="list-decimal pl-4 text-gray-700 text-sm space-y-1">
            <li>Vul de lege tank met schoon water</li>
            <li>Voeg natriumhypochloriet toe: 1 mL per 10 liter tankinhoud (standaard huishoudbleekwater 4%)</li>
            <li>Schud de tank zodat alle wanden in contact komen met het mengsel</li>
            <li>Laat 30 minuten intrekken</li>
            <li>Laat het chloorwater door alle kranen lopen</li>
            <li>Spoel de tank minstens twee keer volledig door met schoon water</li>
            <li>Ruik aan het spoelwater: geen chloorlucht meer = klaar voor gebruik</li>
          </ol>
        </div>
        <p className="text-gray-700 mb-6">
          Vervang na de desinfectie uw inline koolstoffilter: chloor wordt door het filter geadsorbeerd maar het filter is dan snel verzadigd.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Buitenlands kampeerwater: per land
        </h2>
        <p className="text-gray-700 mb-4">
          Waterkwaliteit op buitenlandse campings varieert sterk. Gebruik de CDC TravHealth-database voor actueel advies per bestemming.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Spanje, Italie, Portugal:</strong> wettelijk drinkwater, maar hardheid zeer hoog (200-500 mg/L). Sterk afkalkend in apparaten. Gebruik een inline filter voor smaak; voor longdurig verblijf overweeg compacte osmose.</li>
          <li><strong>Griekenland, Turkije:</strong> kwaliteit varieert per regio. Op eilanden (Griekenland) is kraanwater soms brak of onbetrouwbaar. Gebruik UV-filter en drink op twijfelachtige locaties gebotteld water.</li>
          <li><strong>Oost-Europa (Polen, Hongarije, Roemenie):</strong> leidingwater is wettelijk drinkwater maar oudere infrastructuur kan microbiologische risicos hebben. UV-filter aanbevolen.</li>
          <li><strong>Buiten EU:</strong> gebruik altijd UV-filter of osmose, of drink uitsluitend gebotteld water.</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Meer over draagbare waterfilters leest u op de pagina{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilter vergelijken</Link>.
          Voor jacht en boot geldt een vergelijkbare situatie:{' '}
          <Link href="/waterfilter/boot-jacht" className="text-[#005F8A] underline">waterfilter voor boot en jacht</Link>.
          Alle mogelijkheden van omgekeerde osmose ziet u op{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterfilters voor caravan</h2>
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>,{' '}
          <Link href="/waterfilter/boot-jacht" className="text-[#005F8A] underline">waterfilter boot en jacht</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <a href="/waterfilter/outdoor" className="text-[#005F8A] underline">outdoor waterfilters</a>.
        </p>
      </main>
    </>
  );
}
