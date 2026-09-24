import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Bruisend waterkraan kopen: 4-in-1 kranen vergeleken',
  description:
    'Een bruisend waterkraan geeft kokend, koud, gefilterd en bruisend water uit 1 kraan. Vergelijking van 4-in-1 kraanmodellen: Quooker, Grohe Blue, Zip HydroTap.',
  alternates: { canonical: 'https://waterfilterplatform.nl/bruisend-water/kraan' },
};

const faqItems = [
  {
    q: 'Welke bruisend waterkraan is het beste?',
    a: 'Wil je kokend en bruisend water uit één kraan, dan is volgens ons de Quooker Flex PRO3 met CUBE de meest complete keuze (bij PureAqua €2.240, september 2026). Die filtert met actieve kool, niet met osmose. Zonder kokend water is de Grohe Blue Home Duo een goedkopere optie. De PureAqua 4-in-1 kraan (€1.948) heeft geen bruisfunctie, maar is een alternatief voor wie zeer heet, gekoeld en osmose-gezuiverd water belangrijker vindt dan bubbels, eventueel samen met een losse SodaStream.',
  },
  {
    q: 'Wat kost een 4-in-1 waterkraan?',
    a: 'Een 4-in-1 bruisend waterkraan kost aanschaf €700–3.200 afhankelijk van het merk en model. Quooker Flex PRO3 met CUBE: €2.240 (PureAqua-prijs, september 2026). Zip HydroTap Arc: €2.000–3.000. Grohe Blue Home Duo: €700–1.200 (geen kokend water). De PureAqua 4-in-1 kraan (€1.948) geeft zeer heet, gekoeld en osmose-gezuiverd water, maar geen bubbels. Installatie door een loodgieter kost doorgaans €150–300 extra. Jaarlijkse onderhoudskosten (filter, CO2): €80–150.',
  },
  {
    q: 'Hoe lang gaat een CO2-cilinder mee in een waterkraan?',
    a: 'Een standaard 60L CO2-cilinder (zoals de SodaStream-cilinder) gaat mee voor 60 liter bruisend water. Bij een gezin van 4 personen dat dagelijks circa 500 ml bruisend water per persoon drinkt (2 liter/dag), duurt een cilinder circa 30 dagen. Bij de meeste bruisend waterkranen (zoals Quooker CUBE) wordt een 60L cilinder gebruikt die u kunt omruilen bij de supermarkt of fabrikant.',
  },
  {
    q: 'Is een Quooker CUBE beter dan de PureAqua 4-in-1 kraan?',
    a: 'Dat hangt af van uw prioriteiten. Quooker Flex PRO3 met CUBE: kokend, gekoeld en bruisend water, actieve kool, sterk merk, bij PureAqua €2.240. PureAqua 4-in-1 kraan: omgekeerde osmose in drie stappen, zeer heet (circa 96 graden) en gekoeld water, €1.948, maar geen bubbels. Wilt u bruisend water uit de kraan, kies dan de Quooker. Staat waterkwaliteit (PFAS-zone, loodleidingen) voorop, dan past de PureAqua 4-in-1 beter, eventueel met een losse SodaStream.',
  },
  {
    q: 'Filtert een bruisend waterkraan ook het water?',
    a: 'Dit verschilt per model. Grohe Blue en Quooker CUBE gebruiken een koolstoffilter (verwijdert chloor en geur, deels lood). Zip HydroTap gebruikt koolstof + UV. De PureAqua 4-in-1 kraan heeft geen bruisfunctie, maar gebruikt omgekeerde osmose in drie stappen; een SGS-test op een nieuw systeem mat PFOS meer dan 99,6%, PFOA 99,5% en lood meer dan 99,8% minder. Als u in een PFAS-zone woont of een oud huis heeft met loodleidingen, kiest u voor osmosefiltratie en voegt u bubbels eventueel toe met een losse SodaStream.',
  },
  {
    q: 'Kan ik een bruisend waterkraan in een huurwoning installeren?',
    a: 'Technisch is installatie mogelijk in een huurwoning (bestaand kraangat in aanrecht gebruiken of nieuw gat boren), maar u heeft toestemming nodig van de verhuurder voor permanente aanpassingen. Bij vertrek moet u de kraan mogelijk verwijderen en de originele situatie herstellen. Een SodaStream is voor huurwoningen een beter alternatief: geen installatie vereist. Vraag uw verhuurder altijd om schriftelijke toestemming.',
  },
  {
    q: 'Hoe vervang ik de CO2-cilinder in mijn waterkraan?',
    a: 'De procedure verschilt per merk maar is doorgaans eenvoudig: (1) schakel het systeem uit via de app of knop, (2) open het cilindervak onder het aanrecht of achter het boilervat, (3) draai de lege cilinder los (linksom), (4) schroef de nieuwe cilinder vast (rechtsom, niet te hard aandraaien), (5) schakel het systeem in en test. De meeste modellen hebben een koolstofdioxide-indicator die aangeeft wanneer de cilinder leeg is. Raadpleeg de handleiding van uw specifieke model.',
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
  headline: 'Bruisend waterkraan kopen: 4-in-1 kranen vergeleken',
  description:
    'Een bruisend waterkraan geeft kokend, koud, gefilterd en bruisend water uit 1 kraan. Vergelijking van 4-in-1 kraanmodellen.',
  datePublished: '2026-05-01',
  dateModified: '2026-09-24',
  url: 'https://waterfilterplatform.nl/bruisend-water/kraan',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function BruisendWaterKraanPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Bruisend water', item: 'https://waterfilterplatform.nl/bruisend-water' },
              { '@type': 'ListItem', position: 3, name: 'Bruisend waterkraan', item: 'https://waterfilterplatform.nl/bruisend-water/kraan' },
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
          <span>Bruisend waterkraan</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Bruisend waterkraan kopen: 4-in-1 kranen vergeleken
          </h1>
          <p className="text-gray-700 text-lg">
            Kokend, koud, gefilterd en bruisend water uit &eacute;&eacute;n kraan. Welk model past bij uw keuken en budget?
          </p>
        </div>

        <QuickAnswer answer="Een 4-in-1 bruisend waterkraan geeft kokend (100&deg;C), koud gefilterd en bruisend water uit &eacute;&eacute;n kraan. Topmodellen: Quooker Flex PRO3 met CUBE (&euro;2.240, koolstoffilter), Zip HydroTap Arc (&euro;2.000&ndash;3.000), Grohe Blue Duo (&euro;700&ndash;1.200, geen kokend). Voor PFAS-zones: kies osmosefiltratie. De PureAqua 4-in-1 kraan (&euro;1.948) heeft osmose maar geen bruisfunctie; combineer die eventueel met een SodaStream. Jaarlijkse CO2+filterkosten: &euro;80&ndash;150." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een 4-in-1 bruisend waterkraan?
        </h2>
        <p className="text-gray-700 mb-4">
          Een 4-in-1 waterkraan combineert meerdere systemen in &eacute;&eacute;n geintegreerde installatie onder het aanrecht:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Boiler</strong>: geeft kokend water op 100&deg;C, thermisch gesoleerd om standby-warmteverlies te minimaliseren</li>
          <li><strong>Chiller</strong>: koelt water tot 4&ndash;8&deg;C voor koud gefilterd drinkwater</li>
          <li><strong>CO2-tank</strong>: carboniseert het gekoelde gefilterde water tot bruisend water</li>
          <li><strong>Waterfilter</strong>: meestal actief kool, soms aangevuld met UV, zuivert het water voor de chiller en CO2-lijn</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Met een handgreepbeweging of knop op de kraan selecteert u de gewenste watersoort. Sommige modellen (zoals Zip HydroTap) werken met een drukknop per functie; andere (Quooker) gebruiken een push-en-draai veiligheidssysteem voor het kokende water.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Merkvergelijking: 4-in-1 bruisend waterkranen
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Merk</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Model</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Functies</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">CO2-tank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Quooker</td>
                <td className="border border-gray-300 px-3 py-2">CUBE</td>
                <td className="border border-gray-300 px-3 py-2">&euro;2.240 (Flex PRO3 + CUBE)</td>
                <td className="border border-gray-300 px-3 py-2">Kokend+koud+bruisend</td>
                <td className="border border-gray-300 px-3 py-2">Actief kool</td>
                <td className="border border-gray-300 px-3 py-2">60L cilinder</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Grohe Blue</td>
                <td className="border border-gray-300 px-3 py-2">Home Duo</td>
                <td className="border border-gray-300 px-3 py-2">&euro;700&ndash;1.200</td>
                <td className="border border-gray-300 px-3 py-2">Gefilterd+bruisend (geen kokend)</td>
                <td className="border border-gray-300 px-3 py-2">Koolstof</td>
                <td className="border border-gray-300 px-3 py-2">Verwisselbaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zip HydroTap</td>
                <td className="border border-gray-300 px-3 py-2">Arc</td>
                <td className="border border-gray-300 px-3 py-2">&euro;2.000&ndash;3.000</td>
                <td className="border border-gray-300 px-3 py-2">Kokend+koud+bruisend</td>
                <td className="border border-gray-300 px-3 py-2">Koolstof+UV</td>
                <td className="border border-gray-300 px-3 py-2">60L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">PureAqua</td>
                <td className="border border-gray-300 px-3 py-2">4-in-1 kraan</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.948</td>
                <td className="border border-gray-300 px-3 py-2">Zeer heet (circa 96&deg;C)+gekoeld+gezuiverd, geen bubbels</td>
                <td className="border border-gray-300 px-3 py-2">RO-osmose (3 stappen)</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Quooker CUBE vs PureAqua: welke is beter?
        </h2>
        <p className="text-gray-700 mb-4">
          De Quooker CUBE is het meest verkochte premium model in Nederland. Sterke punten: uitstekend design, bewezen betrouwbaarheid na jaren op de markt, sterk servicenetwerk. Beperkingen: de standaard CUBE-filter is een koolstoffilter, geen osmosefiltratie. Voor PFAS-verwijdering of bij loodleidingen is een externe osmoseunit nodig (extra kosten).
        </p>
        <p className="text-gray-700 mb-6">
          Bruisend water geeft de PureAqua 4-in-1 kraan niet. Hij geeft zeer heet (circa 96 graden), gekoeld en osmose-gezuiverd water, met omgekeerde osmose in drie stappen. Een SGS-labtest op een nieuw systeem mat voor PFOS meer dan 99,6%, voor PFOA 99,5% en voor lood meer dan 99,8% minder. De prijs is &euro;1.948, circa &euro;300 minder dan een Quooker Flex PRO3 met CUBE bij PureAqua (&euro;2.240). Wilt u bubbels uit de kraan, dan is de Quooker CUBE de logische keuze. Vindt u gekoeld, zeer heet en gezuiverd water belangrijker dan bubbels, dan is de PureAqua 4-in-1 een alternatief, eventueel met een losse SodaStream.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatievereisten
        </h2>
        <p className="text-gray-700 mb-4">
          Een 4-in-1 bruisend waterkraan vereist de volgende voorzieningen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Kraangat</strong>: een gat van circa 35 mm in het aanrecht (bestaand kraangat of nieuw te boren)</li>
          <li><strong>Wateraansluiting</strong>: aftakking van de koude waterleiding onder het aanrecht</li>
          <li><strong>CO2-tank opbergplek</strong>: ruimte in onderkast voor de CO2-cilinder (60L-cilinder circa 40 cm hoog)</li>
          <li><strong>Elektra</strong>: 230V stopcontact voor boiler en chiller (doorgaans al aanwezig in keukenblok)</li>
          <li><strong>Afvoer</strong>: voor het spoelwater van het osmosefilter (bij RO-modellen)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          De installatie duurt doorgaans 2&ndash;4 uur voor een loodgieter. Reken op &euro;150&ndash;300 installatiekosten bovenop de aanschafprijs. Sommige fabrikanten (Quooker) bieden installatie aan via erkende installateurs.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud en lopende kosten
        </h2>
        <p className="text-gray-700 mb-4">
          De jaarlijkse onderhoudskosten van een 4-in-1 bruisend waterkraan bestaan uit:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>CO2-cilinder</strong>: omruilen na gemiddeld 60 liter bruisend water. Kosten &euro;8&ndash;12 per cilinder. Bij gezinsgebruik 4&ndash;8 cilinders per jaar = &euro;40&ndash;96/jaar.</li>
          <li><strong>Waterfilter</strong>: koolstoffilter vervangen elke 6&ndash;12 maanden (&euro;20&ndash;60). RO-membraan vervangen elke 2&ndash;3 jaar (&euro;40&ndash;100).</li>
          <li><strong>Boilerontkalking</strong>: jaarlijkse ontkalking bij hard water (boven 15 dH), doorgaans via citroenzuuroplossing.</li>
          <li><strong>Stroomverbruik</strong>: gemiddeld 5&ndash;10 Watt standby = &euro;15&ndash;30/jaar.</li>
        </ul>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/kokend-water-kraan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kokend waterkraan kopen</h3>
              <p className="text-sm text-gray-600">Complete gids over kokend waterkranen: werking, merken en kosten.</p>
            </Link>
            <Link href="/bruisend-water/co2" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CO2-systeem voor bruisend water</h3>
              <p className="text-sm text-gray-600">Los CO2-systeem voor grote gezinnen: kosten, installatie en grote cilinders.</p>
            </Link>
            <Link href="/vergelijken/kokend-water-kraan-merken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kokend waterkraan merken vergelijken</h3>
              <p className="text-sm text-gray-600">Quooker, Zip, Grohe Blue en andere merken naast elkaar vergeleken.</p>
            </Link>
            <Link href="/bruisend-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Bruisend water: alle methoden</h3>
              <p className="text-sm text-gray-600">Overzicht van alle manieren om thuis bruisend water te maken.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over bruisend waterkranen
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
          <Link href="/bruisend-water" className="text-[#005F8A] underline">bruisend water thuis vergelijken</Link>,{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend waterkraan kopen</Link>,{' '}
          <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">kokend waterkraan vergelijken</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
