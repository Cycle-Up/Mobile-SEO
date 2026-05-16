import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Bruisend waterkraan kopen: 4-in-1 kranen vergeleken',
  description:
    'Een bruisend waterkraan geeft kokend, koud, gefilterd en bruisend water uit 1 kraan. Vergelijking van 4-in-1 kraanmodellen: Quooker, Grohe Blue, Zip HydroTap en PureAqua.',
  alternates: { canonical: 'https://waterfilterplatform.nl/bruisend-water/kraan' },
};

const faqItems = [
  {
    q: 'Welke bruisend waterkraan is het beste?',
    a: 'Voor de meeste huishoudens is de PureAqua Pro 4-in-1 de beste prijs-kwaliteitskeuze: ingebouwde RO-osmosefiltratie (verwijdert PFAS, lood, nitraten), alle vier functies (kokend, koud, gefilterd, bruisend) en een prijs van €800–1.500. De Quooker CUBE is premium in design en betrouwbaarheid maar duurder (€2.500–3.200) en heeft geen osmosefiltratie standaard. De Grohe Blue heeft geen kokendwaterfunctie.',
  },
  {
    q: 'Wat kost een 4-in-1 waterkraan?',
    a: 'Een 4-in-1 bruisend waterkraan kost aanschaf €700–3.200 afhankelijk van het merk en model. Quooker CUBE: €2.500–3.200 (excl. installatie). Zip HydroTap Arc: €2.000–3.000. PureAqua Pro: €800–1.500. Grohe Blue Home Duo: €700–1.200 (geen kokend water). Installatie door een loodgieter kost doorgaans €150–300 extra. Jaarlijkse onderhoudskosten (filter, CO2): €80–150.',
  },
  {
    q: 'Hoe lang gaat een CO2-cilinder mee in een waterkraan?',
    a: 'Een standaard 60L CO2-cilinder (zoals de SodaStream-cilinder) gaat mee voor 60 liter bruisend water. Bij een gezin van 4 personen dat dagelijks circa 500 ml bruisend water per persoon drinkt (2 liter/dag), duurt een cilinder circa 30 dagen. Bij de meeste 4-in-1 kranen (Quooker CUBE, PureAqua) wordt een 60L cilinder gebruikt die u kunt omruilen bij de supermarkt of fabrikant.',
  },
  {
    q: 'Is een Quooker beter dan een PureAqua bruisend waterkraan?',
    a: 'Dat hangt af van uw prioriteiten. Quooker CUBE: uitstekend design, bewezen betrouwbaarheid, sterk merk, €2.500–3.200, geen ingebouwde osmosefiltratie. PureAqua Pro: ingebouwde RO-osmosefiltratie (verwijdert PFAS, lood, nitraten), lagere aanschafprijs €800–1.500, minder premium uitstraling. Als waterkwaliteit (PFAS-zone, loodleidingen) een issue is, wint PureAqua. Voor luxe keuken en designprioriteit: Quooker.',
  },
  {
    q: 'Filtert een bruisend waterkraan ook het water?',
    a: 'Dit verschilt per model. Grohe Blue en Quooker CUBE gebruiken een koolstoffilter (verwijdert chloor en geur, deels lood). PureAqua Pro gebruikt een volledig RO-osmose membraan (verwijdert PFAS, lood, nitraten, bacterien, medicijnresten voor 95–99%). Zip HydroTap gebruikt koolstof + UV. Als u in een PFAS-zone woont of een oud huis heeft met loodleidingen, kiest u voor een model met osmosefiltratie.',
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
  dateModified: '2026-05-01',
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

        <QuickAnswer answer="Een 4-in-1 bruisend waterkraan geeft kokend (100&deg;C), koud gefilterd en bruisend water uit &eacute;&eacute;n kraan. Topmodellen: Quooker CUBE (&euro;2.500&ndash;3.200, koolstoffilter), PureAqua Pro (&euro;800&ndash;1.500, RO-osmose), Grohe Blue Duo (&euro;700&ndash;1.200, geen kokend). Voor PFAS-zones: kies model met osmosefiltratie. Jaarlijkse CO2+filterkosten: &euro;80&ndash;150." />

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
          <li><strong>Waterfilter</strong>: actief kool (basis) of RO-osmose (premium) zuivert het water voor de chiller en CO2-lijn</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Met een handgreepbeweging of knop op de kraan selecteert u de gewenste watersoort. Sommige modellen (Zip HydroTap, PureAqua) werken met een drukknop per functie; andere (Quooker) gebruiken een push-en-draai veiligheidssysteem voor het kokende water.
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
                <td className="border border-gray-300 px-3 py-2">&euro;2.500&ndash;3.200</td>
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
                <td className="border border-gray-300 px-3 py-2">4-in-1 Pro</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800&ndash;1.500</td>
                <td className="border border-gray-300 px-3 py-2">Kokend+koud+gefilterd+bruisend</td>
                <td className="border border-gray-300 px-3 py-2">RO-osmose</td>
                <td className="border border-gray-300 px-3 py-2">60L</td>
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
          De PureAqua Pro heeft ingebouwde RO-osmosefiltratie die PFAS, lood, nitraten, medicijnresten en bacterien voor 95&ndash;99% verwijdert. De aanschafprijs is &euro;800&ndash;1.500 lager dan de Quooker. Nadeel: minder bekende merknaam en kleiner servicenetwerk. Als waterkwaliteit prioriteit heeft (u woont in PFAS-zone of heeft een oud huis), is PureAqua de betere keuze.
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
