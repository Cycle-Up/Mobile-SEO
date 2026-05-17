import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Welk water voor flesvoeding? Kraanwater, osmose of flessenwater',
  description:
    'Voor flesvoeding kies je water met natrium <20 mg/L en nitraat <10 mg/L. In Nederland is osmosewater de veiligste en goedkoopste keuze.',
  alternates: { canonical: 'https://waterfilterplatform.nl/babywater/welk-water' },
};

const faqItems = [
  {
    q: 'Welk water is het beste voor flesvoeding?',
    a: 'Osmosewater is de beste keuze voor flesvoeding: natrium onder 5 mg/L, nitraat onder 1 mg/L, geen lood, geen PFAS. Kosten slechts 0,02-0,05 euro per liter. Flessenbabywater (Evian Baby, Vittel Baby) is ook veilig maar veel duurder (0,40-0,80 euro per liter). Nederlands kraanwater is in de meeste gemeenten geschikt als het nitraat- en natriumgehalte laag zijn. Altijd koken tot minimaal 70 graden Celsius voor aanmaak van flesvoeding.',
  },
  {
    q: 'Hoe warm moet het water zijn voor flesvoeding?',
    a: 'Water voor flesvoeding moet minimaal 70 graden Celsius zijn bij het aanmaken van het melkpoeder. Dit is nodig om Cronobacter sakazakii te doden, een bacterie die voor kan komen in gedroogd babymelkpoeder (ook in gesloten verpakkingen). Zo werkt het: kook water tot 100 graden Celsius, laat iets afkoelen tot circa 70 graden Celsius (duurt 15-20 minuten), meng met poeder, en koel de fles daarna snel af tot drinktemperatuur van circa 37 graden Celsius. Controleer altijd de temperatuur met een flessenwarmer-thermometer.',
  },
  {
    q: 'Hoe controleer ik of mijn kraanwater geschikt is voor mijn baby?',
    a: 'Stap 1: ga naar de website van uw drinkwaterbedrijf (Vitens, Evides, PWN, Dunea, WML, etc.) en zoek het waterkwaliteitsrapport op voor uw postcode. Controleer: natrium (moet onder 20 mg/L zijn), nitraat (moet onder 10 mg/L zijn). Stap 2: controleer of uw huis gebouwd is voor 1960 (mogelijk loodleidingen) en laat water testen bij een gecertificeerd laboratorium. Stap 3: als natrium en nitraat laag zijn en geen loodleidingen: kraanwater koken is een optie. Zoniet: gebruik osmosewater of flessenbabywater.',
  },
  {
    q: 'Is gefilterd kraanwater veilig voor flesvoeding?',
    a: 'Een filterkan (Brita, PUR) vermindert chloor, kalk en deels lood, maar filtert GEEN nitraat. Als uw kraanwater voldoende laag nitraat heeft (onder 10 mg/L) is gefilterd kraanwater een redelijke optie. In landbouwgebieden of bij verhoogd nitraat in kraanwater: niet afdoende. Osmosewater filtert nitraat voor meer dan 95% en is de betrouwbaardere keuze voor flesvoeding.',
  },
  {
    q: 'Waarom is nitraat gevaarlijk voor baby\'s?',
    a: 'Nitraat (NO3) wordt in het maag-darmkanaal omgezet naar nitriet (NO2). Nitriet bindt zich aan hemoglobine en vormt methemoglobine, dat geen zuurstof kan transporteren. Bij baby\'s jonger dan 6 maanden is dit risico het grootst omdat zij meer nitraat opnemen, meer nitriet produceren in hun maag (hogere pH) en minder beschermend enzym (methemoglobine-reductase) hebben. Methemoglobinemie (ook wel "blue baby syndrome") kan levensgevaarlijk zijn. De veiligheidsgrens voor nitraat in babywater is 10 mg/L.',
  },
  {
    q: 'Moet ik osmosewater koken voor flesvoeding?',
    a: 'Ja. Hoewel osmosewater bacteriologisch clean is (TDS onder 50 mg/L, geen bacterien), moet u het toch koken voor flesvoeding. De reden is Cronobacter sakazakii, een bacterie die voor kan komen in het gedroogde melkpoeder zelf, niet in het water. Door water van minimaal 70 graden Celsius te gebruiken bij het aanmaken van de fles, doodt u eventuele Cronobacter in het poeder. Osmosewater koken is veilig en verandert de filterkwaliteit niet.',
  },
  {
    q: 'Is mineraalwater geschikt voor flesvoeding?',
    a: 'Regulier mineraalwater is NIET geschikt voor flesvoeding, tenzij op de verpakking staat "geschikt voor babyvoeding". Gewoon mineraalwater heeft vaak een te hoog mineralengehalte (natrium boven 20 mg/L, soms hoog sulfaat of calcium). Speciaal babywater (Evian Baby, Vittel Baby) is een apart product met laag mineralenprofiel, gespecificeerd voor babyvoeding. Controleer altijd het etiket: natrium onder 20 mg/L en nitraat onder 10 mg/L.',
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
  headline: 'Welk water voor flesvoeding? Kraanwater, osmose of flessenwater',
  description:
    'Voor flesvoeding kies je water met natrium onder 20 mg/L en nitraat onder 10 mg/L. In Nederland is osmosewater de veiligste en goedkoopste keuze.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/babywater/welk-water',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WelkWaterFlesvoedingPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Babywater', item: 'https://waterfilterplatform.nl/babywater' },
              { '@type': 'ListItem', position: 3, name: 'Welk water voor flesvoeding', item: 'https://waterfilterplatform.nl/babywater/welk-water' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/babywater" className="hover:underline">Babywater</Link> &rsaquo;{' '}
          <span>Welk water voor flesvoeding</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Welk water voor flesvoeding? Kraanwater, osmose of flessenwater
          </h1>
          <p className="text-gray-700 text-lg">
            Natrium &lt;20 mg/L en nitraat &lt;10 mg/L zijn de sleutelcriteria. Vergelijking van alle watersoorten voor veilige flesvoeding.
          </p>
        </div>

        <QuickAnswer answer="Voor flesvoeding kiest u water met natrium &lt;20 mg/L en nitraat &lt;10 mg/L. Osmosewater is de beste keuze: natrium &lt;5 mg/L, nitraat &lt;1 mg/L, geen lood, &euro;0,02&ndash;0,05 per liter. Controleer kraanwater via uw waterrapport. Filterkan filtert geen nitraat. Kook altijd water tot minimaal 70&deg;C voor aanmaak van flesvoeding om Cronobacter te doden." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel alle watersoorten voor flesvoeding
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Watersoort</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Natrium</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Nitraat</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Lood</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs/L</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Advies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">NL kraanwater (gemiddeld)</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;50 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;15 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,001</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Controleer rapport</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Kraanwater hoog nitraat (landbouwgebied)</td>
                <td className="border border-gray-300 px-3 py-2">Variabel</td>
                <td className="border border-gray-300 px-3 py-2">25&ndash;45 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,001</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Niet aanbevolen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kraanwater met lood (oud huis)</td>
                <td className="border border-gray-300 px-3 py-2">Variabel</td>
                <td className="border border-gray-300 px-3 py-2">Normaal</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;50 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,001</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-bold">NIET geschikt</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmosewater (RO)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,1 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,02&ndash;0,05</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-bold">Beste keuze</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Flessenbabywater</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;5 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,1 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,40&ndash;0,80</td>
                <td className="border border-gray-300 px-3 py-2 text-blue-700 font-medium">Veilig, duur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Gefilterd kraanwater (filterkan)</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;50 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;15 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,04&ndash;0,07</td>
                <td className="border border-gray-300 px-3 py-2 text-orange-700 font-medium">Niet afdoende bij hoog nitraat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap: hoe controleert u uw kraanwater?
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">Stap 1</span>
              <h3 className="font-semibold text-[#003F5C]">Controleer uw kraanwaterrapport</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Ga naar de website van uw drinkwaterbedrijf (Vitens, Evides, PWN, Dunea, Oasen, WML, Brabant Water) en zoek het waterkwaliteitsrapport op voor uw postcode of gemeente. Let op de waarden voor natrium en nitraat.
            </p>
          </div>

          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">Stap 2</span>
              <h3 className="font-semibold text-[#003F5C]">Beoordeel de waarden</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Als natrium &lt;20 mg/L EN nitraat &lt;10 mg/L EN het huis is gebouwd na 1960 (geen loodleidingen): kraanwater koken tot 70&deg;C is een veilige optie voor flesvoeding. Voldoet uw kraanwater niet aan een van deze criteria: gebruik osmosewater of flessenbabywater.
            </p>
          </div>

          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">Stap 3</span>
              <h3 className="font-semibold text-[#003F5C]">Kies uw wateroplossing</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Kraanwater OK: koken tot 70&deg;C volstaat. Kraanwater niet OK of twijfel: overweeg een osmosefilter onder het aanrecht (&euro;300&ndash;800, daarna &euro;0,02&ndash;0,05/L) of flessenbabywater (&euro;0,40&ndash;0,80/L) als tijdelijke oplossing.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Temperatuur: hoe bereid je flesvoeding veilig?
        </h2>
        <p className="text-gray-700 mb-4">
          De WHO en RIVM adviseren om flesvoeding te bereiden met water van minimaal 70&deg;C. Dit is specifiek om Cronobacter sakazakii te doden, een hittegevoelige bacterie die voor kan zitten in gedroogd melkpoeder.
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Kook water tot 100&deg;C (ook osmosewater of flessenbabywater).</li>
          <li>Laat water afkoelen tot circa 70&deg;C (niet langer dan 30 minuten wachten).</li>
          <li>Giet de juiste hoeveelheid water in de gesteriliseerde fles.</li>
          <li>Voeg het afgemeten melkpoeder toe en schud goed.</li>
          <li>Koel de fles snel af tot drinktemperatuur (37&deg;C): onder koud stromend water of in een flessenkoeler.</li>
          <li>Geef de voeding direct. Gooi niet-gebruikte flesvoeding na 2 uur weg.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater als beste keuze voor flesvoeding
        </h2>
        <p className="text-gray-700 mb-6">
          Een omgekeerd osmosefilter geeft u jarenlang zekerheid over de waterkwaliteit voor uw baby, zonder afhankelijkheid van waterrapporten of dure flessenbabywater. De investering in een osmosefilter (&euro;300&ndash;800) verdient zichzelf terug in 1&ndash;3 jaar ten opzichte van flessenbabywater, en geeft u schoner water dan de meeste commerciele babymerken &mdash; vrij van PFAS, lood, nitraten en medicijnresten.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over welk water voor flesvoeding
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
          <Link href="/babywater" className="text-[#005F8A] underline">babywater overzicht</Link>,{' '}
          <Link href="/babywater/osmose" className="text-[#005F8A] underline">osmosewater voor baby</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/waterkwaliteit" className="text-[#005F8A] underline">waterkwaliteit Nederland</Link>.
        </p>
      </main>
    </>
  );
}
