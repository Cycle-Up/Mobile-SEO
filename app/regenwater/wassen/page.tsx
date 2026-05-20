import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Regenwater voor wasmachine: 50% minder wasmiddel, geen kalk',
  description:
    'Regenwater is ideaal voor de wasmachine: 0 dH hardheid betekent geen kalkaanslag, 50% minder wasmiddel nodig en zachtere kleding. Sedimentfilter 100 micron volstaat.',
  alternates: { canonical: 'https://waterfilterplatform.nl/regenwater/wassen' },
};

const faqItems = [
  {
    q: 'Kan ik regenwater gebruiken voor mijn wasmachine?',
    a: 'Ja, regenwater is uitstekend geschikt voor de wasmachine. Regenwater heeft een hardheid van 0 dH (zeer zacht) waardoor er geen kalkaanslag ontstaat in de machine, op het verwarmingselement of in textielvezels. U bespaart tot 50% wasmiddel omdat zacht water veel beter schuimt en reinigt. Een eenvoudig sedimentfilter (100 micron) volstaat om bladeren en grof vuil tegen te houden. Vergeet niet een aparte leiding aan te leggen vanaf uw regenwatertank naar de aansluiting van de wasmachine.',
  },
  {
    q: 'Hoeveel wasmiddel bespaar ik met regenwater?',
    a: 'Met regenwater bespaart u ongeveer 50% wasmiddel ten opzichte van hard kraanwater. Hard water (vanaf 10 dH) heeft veel calcium- en magnesium-ionen die reageren met wasmiddel en het bindend vermogen verlagen. Bij regenwater (0 dH) zijn deze ionen vrijwel afwezig, waardoor het wasmiddel veel efficienter werkt. Bij gemiddeld wasmiddelverbruik van 100 ml per wasbeurt en 5 wasbeurten per week bespaart u circa 13 liter wasmiddel per jaar, ofwel 65 tot 130 euro afhankelijk van merk.',
  },
  {
    q: 'Welk filter heb ik nodig voor regenwater in de wasmachine?',
    a: 'Voor de wasmachine volstaat een sedimentfilter van 100 micron (mu). Dit filter houdt bladeren, takjes, mos en grof vuil tegen die via het dak en de regenpijp in de tank zijn beland. Plaats het filter na de pomp, voor de wasmachine-aansluiting. Voor extra zekerheid kunt u een dubbele filterhouder gebruiken met daarna een 50 micron polypropyleen filter. Reinig of vervang sedimentfilters elke 3 tot 6 maanden afhankelijk van de mate van vervuiling van het opgevangen regenwater.',
  },
  {
    q: 'Is regenwater beter voor mijn kleding dan kraanwater?',
    a: 'Ja, regenwater is zachter voor textiel. Hard kraanwater laat kalkresiduen achter in vezels waardoor kleding stug en hard aanvoelt na meerdere wasbeurten. Regenwater (0 dH) lost wasmiddel volledig op zonder kalk-binding waardoor kleur en zachtheid beter behouden blijven. Donker textiel grijst minder snel en handdoeken blijven pluizig. Voor mensen met gevoelige huid of eczeem is regenwater extra prettig omdat er geen wasmiddelresten achterblijven door slechte uitspoeling bij hard water.',
  },
  {
    q: 'Hoe leg ik een leiding aan van regenwatertank naar wasmachine?',
    a: 'De aanleg vereist een drukpomp (1 tot 4 bar) in de regenwatertank, een PE-leiding (32 mm) naar de wasruimte en een aparte koudwater-aansluiting voor de wasmachine. Belangrijk: regenwaterleidingen MOETEN gescheiden zijn van het drinkwaternet (geen kruisverbinding) en gemarkeerd met blauw-witte labels conform NEN 1006. Plaats een terugslagklep en sedimentfilter voor de wasmachine. Een loodgieter rekent doorgaans 400 tot 900 euro voor de complete aanleg inclusief pomp en filter.',
  },
  {
    q: 'Beschadigt regenwater de wasmachine?',
    a: 'Nee, regenwater beschadigt de wasmachine niet. Sterker nog, het verlengt juist de levensduur omdat er geen kalkafzetting plaatsvindt op het verwarmingselement, in de trommel of in de afvoerleiding. Kalkaanslag is de hoofdoorzaak van wasmachine-defecten na 6 tot 8 jaar gebruik bij hard water. Met regenwater (0 dH) blijft de machine inwendig kalkvrij waardoor verwarmingselement en pomp aanzienlijk langer meegaan. Controleer wel of het sedimentfilter regelmatig wordt schoongemaakt.',
  },
  {
    q: 'Mag ik regenwater gebruiken voor 60 of 90 graden wassen?',
    a: 'Ja, regenwater is geschikt voor alle wastemperaturen inclusief 60 en 90 graden Celsius. De wasmachine verwarmt het water tot de ingestelde temperatuur ongeacht of het regenwater of kraanwater betreft. Bij hogere temperaturen worden bacterien en virussen die eventueel in regenwater zitten ruimschoots gedood. Voor kook-was (90 graden Celsius) en handdoeken/beddengoed (60 graden Celsius) is regenwater volledig veilig. Voor 30 of 40 graden wasbeurten ook geen probleem omdat moderne wasmiddelen ook bij lage temperatuur effectief werken.',
  },
  {
    q: 'Wat kost een regenwatersysteem voor de wasmachine?',
    a: 'Een compleet systeem (tank, pomp, filter, leiding) kost 1500 tot 4000 euro afhankelijk van tankgrootte en complexiteit. Ondergrondse betonnen tank 5000 liter kost circa 2500 euro inclusief plaatsing, een bovengrondse HDPE-tank 1000 liter circa 400 euro. Terugverdientijd bij gebruik voor wasmachine plus WC-doorspoelen ligt op 8 tot 15 jaar, afhankelijk van waterprijs in uw gemeente. Subsidies tot 500 euro per huishouden zijn beschikbaar in steeds meer gemeenten zoals Amsterdam, Rotterdam en Eindhoven.',
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
  headline: 'Regenwater voor wasmachine: 50% minder wasmiddel en geen kalk',
  description:
    'Regenwater is ideaal voor de wasmachine: 0 dH betekent geen kalkaanslag, 50% minder wasmiddel en zachtere kleding. Sedimentfilter 100 micron volstaat.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/regenwater/wassen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function RegenwaterWassenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Regenwater', item: 'https://waterfilterplatform.nl/regenwater' },
              { '@type': 'ListItem', position: 3, name: 'Regenwater voor wasmachine', item: 'https://waterfilterplatform.nl/regenwater/wassen' },
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
          <span>Regenwater voor wasmachine</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Regenwater voor wasmachine: 50% minder wasmiddel en geen kalk
          </h1>
          <p className="text-gray-700 text-lg">
            Regenwater (0 dH) is uitstekend voor de wasmachine: geen kalkaanslag, halvering wasmiddelverbruik en zachtere kleding. Een 100 micron sedimentfilter volstaat.
          </p>
        </div>

        <QuickAnswer answer="Regenwater is ideaal voor de wasmachine: 0 dH hardheid voorkomt kalkaanslag op verwarmingselement en in textielvezels, u bespaart 50% wasmiddel en kleding wordt zachter. Aanleg vereist een aparte leiding van tank naar wasmachine met drukpomp, terugslagklep en sedimentfilter (100 micron). Kosten complete aanleg 1500&ndash;4000 euro, terugverdientijd 8&ndash;15 jaar." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom is regenwater zo geschikt voor de wasmachine?
        </h2>
        <p className="text-gray-700 mb-4">
          Regenwater heeft een waterhardheid van 0 dH (Duitse hardheidsgraden), wat betekent dat er praktisch geen calcium- en magnesium-ionen aanwezig zijn. Deze ionen zijn verantwoordelijk voor kalkaanslag in apparaten en de zogenoemde &quot;binding&quot; van wasmiddel waardoor het minder goed schuimt. Bij hard kraanwater (vanaf 10 dH) gaat een aanzienlijk deel van het wasmiddel verloren aan deze kalkbinding voordat het zijn reinigend werk kan doen.
        </p>
        <p className="text-gray-700 mb-4">
          Door regenwater te gebruiken in plaats van hard kraanwater bespaart u tot 50% op wasmiddel. Bij een gemiddeld huishouden met 5 wasbeurten per week en 100 ml wasmiddel per beurt komt dit neer op circa 13 liter wasmiddel per jaar, ofwel 65 tot 130 euro besparing afhankelijk van het gekozen merk. Bovendien blijft uw wasmachine inwendig kalkvrij, wat de levensduur van het verwarmingselement en de pomp aanzienlijk verlengt.
        </p>
        <p className="text-gray-700 mb-6">
          Zie ook onze uitleg over <Link href="/waterontharder/werking" className="text-[#005F8A] underline">hoe een waterontharder werkt</Link> als alternatief voor regenwater, en het <Link href="/waterhardheid/behandelingsadvies" className="text-[#005F8A] underline">behandelingsadvies op basis van waterhardheid</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtratie: welk filter heeft u nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor wasmachinegebruik is een eenvoudig sedimentfilter van 100 micron (mu) voldoende. Dit filter houdt bladeren, takjes, mos en grof vuil tegen dat via het dak en de regenpijp in de tank is beland. Plaats het filter na de drukpomp en voor de wasmachine-aansluiting. Voor extra zekerheid kunt u een dubbele filterhouder gebruiken met daarna een 50 micron polypropyleen filter.
        </p>
        <p className="text-gray-700 mb-6">
          U heeft GEEN actief-koolfilter, UV-sterilisator of omgekeerde-osmose-systeem nodig voor wasmachinegebruik. Deze zijn alleen relevant als u regenwater wilt gebruiken voor douchen, drinken of koken &mdash; wat overigens niet wordt aanbevolen zonder uitgebreide behandeling. Voor enkel wassen volstaat sedimentfiltratie ruimschoots.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: regenwater vs hard kraanwater voor wassen
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Regenwater</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Hard kraanwater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterhardheid</td>
                <td className="border border-gray-300 px-3 py-2">0 dH</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;20 dH</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Wasmiddelverbruik</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">50% minder</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Standaard dosering</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kalkaanslag verwarmingselement</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Ja, na 2&ndash;3 jaar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Levensduur wasmachine</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">12&ndash;15 jaar</td>
                <td className="border border-gray-300 px-3 py-2">6&ndash;8 jaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Textielzachtheid</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Hoog</td>
                <td className="border border-gray-300 px-3 py-2">Gemiddeld</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterkosten per wasbeurt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&euro;0,00</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0,30&ndash;0,50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Leidingaanleg: hoe sluit u regenwater aan op de wasmachine?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de aansluiting heeft u een drukpomp (1 tot 4 bar) in of bij de regenwatertank nodig, een PE-leiding (32 mm) naar de wasruimte en een aparte koudwater-aansluiting voor de wasmachine. Belangrijk volgens NEN 1006: regenwaterleidingen MOETEN volledig gescheiden zijn van het drinkwaternet (geen kruisverbinding mogelijk) en duidelijk gemarkeerd worden met blauw-witte labels of geverfde leidingen.
        </p>
        <p className="text-gray-700 mb-6">
          Plaats een terugslagklep en sedimentfilter direct voor de wasmachine. Een loodgieter rekent doorgaans 400 tot 900 euro voor de complete aanleg inclusief pomp, filter en leidingen. Bij nieuwbouw is dit aanzienlijk goedkoper omdat de leiding tegelijk met andere installaties wordt aangelegd. Combineer de aanleg met <Link href="/regenwater" className="text-[#005F8A] underline">andere regenwatertoepassingen</Link> voor optimale terugverdientijd.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wasmachine-onderhoud bij regenwatergebruik
        </h2>
        <p className="text-gray-700 mb-6">
          Bij regenwatergebruik heeft de wasmachine MINDER onderhoud nodig dan bij hard water. Er is geen ontkalkingsmiddel nodig (besparing 30 tot 60 euro per jaar), het verwarmingselement blijft kalkvrij en de afvoerleiding stoppt niet dicht door kalkresidu. Wel moet u het sedimentfilter elke 3 tot 6 maanden reinigen of vervangen. Controleer bij de eerste paar wasbeurten of er geen verkleuring optreedt door eventueel achtergebleven bladerresidu in de tank.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Combineren met waterfilter of waterontharder?
        </h2>
        <p className="text-gray-700 mb-6">
          Als u geen regenwatertank kunt of wilt plaatsen, biedt een <Link href="/waterfilter/wasmachine" className="text-[#005F8A] underline">waterfilter voor de wasmachine</Link> of waterontharder een alternatieve oplossing voor de problemen van hard water. Een ionenwisselaar (waterontharder) levert vergelijkbare voordelen: geen kalkaanslag, minder wasmiddelverbruik en zachtere kleding. De terugverdientijd is doorgaans korter dan bij een regenwatersysteem omdat de aanlegkosten lager zijn (1000 tot 2500 euro voor een ionenwisselaar tegenover 1500 tot 4000 euro voor een regenwatersysteem).
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
              <p className="text-sm text-gray-600">Uitleg over ionenwisselaars en kalkverwijdering als alternatief voor regenwater.</p>
            </Link>
            <Link href="/waterhardheid/behandelingsadvies" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Behandelingsadvies waterhardheid</h3>
              <p className="text-sm text-gray-600">Welke aanpak past bij uw lokale waterhardheid en huishoudensgrootte.</p>
            </Link>
            <Link href="/waterfilter/wasmachine" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor wasmachine</h3>
              <p className="text-sm text-gray-600">Filteropties direct op de wasmachine-aansluiting voor kalkbescherming.</p>
            </Link>
            <Link href="/regenwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater overzicht</h3>
              <p className="text-sm text-gray-600">Alle toepassingen, kosten en regelgeving rondom regenwatergebruik in huis.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over regenwater voor de wasmachine
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
          <Link href="/regenwater" className="text-[#005F8A] underline">regenwater overzicht</Link>,{' '}
          <Link href="/waterontharder/werking" className="text-[#005F8A] underline">waterontharder werking</Link>,{' '}
          <Link href="/waterhardheid/behandelingsadvies" className="text-[#005F8A] underline">behandelingsadvies</Link> en{' '}
          <Link href="/waterfilter/wasmachine" className="text-[#005F8A] underline">waterfilter wasmachine</Link>.
        </p>
      </main>
    </>
  );
}
