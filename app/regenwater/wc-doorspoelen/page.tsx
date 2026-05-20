import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Regenwater voor WC-doorspoelen: 30-40% drinkwaterbesparing thuis',
  description:
    'Regenwater voor WC-spoeling bespaart 30-40% drinkwater per huishouden. Separate leiding, simpele filtratie, installatie 1500-4000 euro.',
  alternates: { canonical: 'https://waterfilterplatform.nl/regenwater/wc-doorspoelen' },
};

const faqItems = [
  {
    q: 'Hoeveel drinkwater kan ik besparen met regenwater voor het toilet?',
    a: 'Een gemiddeld Nederlands huishouden gebruikt 30-40% van het totale drinkwaterverbruik voor WC-doorspoeling. Bij een gemiddeld gebruik van 120 liter per persoon per dag is dat 36-48 liter per persoon. Voor een gezin van 4 personen komt dat neer op 50-70 kubieke meter per jaar, oftewel 60-100 euro besparing op de waterrekening. De grotere winst zit in duurzaamheid en minder belasting van het drinkwaternet.',
  },
  {
    q: 'Welke installatie heb ik nodig voor regenwater naar de WC?',
    a: 'U heeft (1) een opslagtank van minimaal 1000-3000 liter, (2) een dakfilter, (3) een voorfilter 100-200 micron, (4) een drukpomp met drukvat, (5) een separate leiding van de tank naar elke WC en (6) een automatische bijvulvoorziening met leidingwater voor periodes zonder regen. Belangrijk: regenwaterleidingen moeten duidelijk gemarkeerd zijn en mogen nooit verbonden zijn met het drinkwaternet (terugslagklep verplicht).',
  },
  {
    q: 'Mag ik in een bestaande woning regenwater op de WC aansluiten?',
    a: 'Ja, in een bestaande woning kan dit, maar het vraagt aanpassingen aan de installatie. Er moet een separate leiding worden aangelegd van de tank naar de WC-stortbak. De drinkwaterleiding blijft beschikbaar voor de automatische bijvulvoorziening, met een terugslagklep en een fysieke onderbreking (lucht-gap) tussen beide systemen om vermenging te voorkomen. Een loodgieter is wettelijk verplicht voor deze aansluiting volgens NEN 1006 en het Bouwbesluit.',
  },
  {
    q: 'Hoeveel kost een complete WC-regenwaterinstallatie?',
    a: 'Voor een rijtjeshuis: tank 1500-3000 liter (800-2000 euro), pomp en drukvat (250-500 euro), filters en bijvulvoorziening (200-500 euro), loodgieterswerk (500-1500 euro). Totaal 1750-4500 euro voor een complete installatie. Bij nieuwbouw is dit aanzienlijk goedkoper omdat de leiding tijdens de bouw mee kan worden aangelegd: dan rest alleen de tank en pomp van circa 1500-2500 euro extra. Voor appartementen en VvE&apos;s is een centrale installatie vaak voordeliger.',
  },
  {
    q: 'Is er gemeentelijke subsidie voor regenwater op de WC?',
    a: 'Veel Nederlandse gemeenten en waterschappen geven subsidie voor regenwateropvang en hergebruik op de WC, vaak onder noemers als "afkoppelregeling", "klimaatbestendige tuin" of "groenblauwe daken". Bedragen lopen uiteen van 200 tot 2500 euro afhankelijk van gemeente en omvang van de installatie. Bekende programma&apos;s: Amsterdam Rainproof, Rotterdam Klimaatadaptatie, Hoogheemraadschap Rijnland Afkoppelen. Check uw eigen gemeente; de regelingen veranderen jaarlijks.',
  },
  {
    q: 'Welke filtering heb ik nodig voor WC-regenwater?',
    a: 'Voor WC-spoeling is alleen een eenvoudige filtratie nodig: dakfilter en voorfilter (100-200 micron) volstaan. Sedimentfilter, actief kool en UV-desinfectie zijn niet nodig: het water komt niet in contact met huid of inhalatie. Wel essentieel: een goed sluitende tank om muggen te weren en jaarlijkse controle op slibvorming onderin de tank. Bij meer geavanceerde filtratie gaat ook de aansluitwaarde van de pomp en het verbruik omhoog.',
  },
  {
    q: 'Kan regenwater op de WC stinken of vies water geven in de pot?',
    a: 'Bij een goed onderhouden installatie niet. Belangrijke aandachtspunten: (1) dakfilter regelmatig legen om rottend organisch materiaal te voorkomen, (2) tank donker plaatsen tegen algengroei, (3) tank jaarlijks visueel inspecteren en eens per 3-5 jaar volledig leegmaken en spoelen, (4) bij langere afwezigheid (vakantie) de WC enkele keren doorspoelen om water uit de leiding te vernieuwen. Slechte geur of bruine kleur duiden op slibvorming of biofilm; reinig dan de tank.',
  },
  {
    q: 'Is regenwater op de WC interessant voor appartementen en VvE\'s?',
    a: 'Ja, voor appartementen en VvE\'s is een gezamenlijke regenwaterinstallatie vaak rendabeler dan individuele oplossingen. Een centrale opslagtank van 5000-15000 liter, gedeelde pomp en leidingen naar alle WC\'s in het complex levert grote schaalvoordelen. Voor nieuwbouwprojecten is regenwater op de WC steeds vaker standaard. Lees meer op onze pagina voor zakelijke en VvE-toepassingen. Subsidies voor collectieve installaties zijn vaak hoger dan voor particulieren.',
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
  headline: 'Regenwater voor WC-doorspoelen: 30-40% drinkwaterbesparing thuis',
  description:
    'Regenwater voor WC-spoeling bespaart 30-40% drinkwater per huishouden. Separate leiding, simpele filtratie, installatie 1500-4000 euro.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/regenwater/wc-doorspoelen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function RegenwaterWCDoorspoelenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Regenwater', item: 'https://waterfilterplatform.nl/regenwater' },
              { '@type': 'ListItem', position: 3, name: 'WC-doorspoelen', item: 'https://waterfilterplatform.nl/regenwater/wc-doorspoelen' },
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
          <span>WC-doorspoelen</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Regenwater voor WC-doorspoelen: 30-40% drinkwaterbesparing thuis
          </h1>
          <p className="text-gray-700 text-lg">
            WC-spoeling is de grootste drinkwaterpost in huis. Met een separate leiding, eenvoudige filtratie en een opslagtank vervangt u 30-40% van uw drinkwaterverbruik door gratis regenwater.
          </p>
        </div>

        <QuickAnswer answer="Regenwater voor WC-spoeling bespaart 30-40% van uw drinkwaterverbruik. U heeft een opslagtank (1000-3000 L), dakfilter, voorfilter (100-200 micron), drukpomp en separate leiding nodig. Geen verfijnde filtratie vereist. Kosten 1750-4500 euro voor bestaande woning, minder bij nieuwbouw. Veel gemeenten subsidieren 200-2500 euro per huishouden." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom WC-spoeling de slimste regenwatertoepassing is
        </h2>
        <p className="text-gray-700 mb-4">
          Een Nederlands huishouden verbruikt gemiddeld 120 liter drinkwater per persoon per dag. Daarvan gaat 30-40% naar de WC: per persoon dus 36-48 liter, of bijna 18 kubieke meter per jaar. Voor een gezin van 4 personen is dat 70 kubieke meter, oftewel 25-35% van de totale waterrekening &mdash; een groot besparingspotentieel.
        </p>
        <p className="text-gray-700 mb-6">
          WC-spoeling vraagt geen gefilterd drinkwater. Het water komt niet in contact met huid of voedsel, en het hoeft geen smaak of kleur te hebben. Onbehandeld regenwater met alleen grove filtering volstaat. Dit maakt WC-spoeling veruit de meest rendabele regenwatertoepassing voor huishoudens: de baten zijn maximaal en de filterkosten zijn minimaal vergeleken met douche- of waswater. Voor diepgaande filterkennis bekijk onze pagina <Link href="/regenwater/filteren" className="text-[#005F8A] underline">regenwater filteren</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De installatie: separate leiding en automatische bijvul
        </h2>
        <p className="text-gray-700 mb-4">
          Een regenwater-WC-installatie bestaat uit een aantal onmisbare componenten. De opslagtank (1000-3000 liter voor een gezinswoning) wordt bovengronds of ondergronds geplaatst. Voor de tank zit een dakfilter en een voorfilter van 100-200 micron. Vanaf de tank stuwt een drukpomp met drukvat het water op naar 2-4 bar. Vandaaruit loopt een separate, duidelijk gemarkeerde leiding naar elke WC-stortbak.
        </p>
        <p className="text-gray-700 mb-4">
          Cruciaal is een automatische bijvulvoorziening: als de tank leeg raakt (langere droogteperiode), schakelt het systeem over op leidingwater. Deze koppeling moet voldoen aan NEN 1006 en het Bouwbesluit: een fysieke onderbreking met lucht-gap voorkomt dat regenwater terug kan stromen in het drinkwaternet. Een loodgieter is wettelijk verplicht voor deze aansluiting.
        </p>
        <p className="text-gray-700 mb-6">
          Voor de tankkeuze raadpleeg onze pagina over <Link href="/regenwater/opslagtank" className="text-[#005F8A] underline">regenwater opslagtanks</Link>. Hier vindt u materialen, groottes en plaatsingsadvies.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten voor een complete WC-regenwaterinstallatie
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Onderdeel</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bestaande woning</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Nieuwbouw</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Opslagtank 1500-3000 L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800&ndash;2000</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800&ndash;2000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Pomp + drukvat</td>
                <td className="border border-gray-300 px-3 py-2">&euro;250&ndash;500</td>
                <td className="border border-gray-300 px-3 py-2">&euro;250&ndash;500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filters + bijvul</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200&ndash;500</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200&ndash;500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Loodgieter + leidingwerk</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;1500</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150&ndash;400</td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td className="border border-gray-300 px-3 py-2">Totaal</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1750&ndash;4500</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1400&ndash;3400</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Terugverdientijd: bij een besparing van 60-100 euro per jaar op de waterrekening, exclusief subsidie, ligt de pure terugverdientijd op 18-50 jaar. Inclusief gemeentelijke subsidie (200-2500 euro) verkort dit naar 12-30 jaar. De financiele businesscase is dus matig &mdash; de echte motivatie zit in duurzaamheid, klimaatadaptatie en onafhankelijkheid van het drinkwaternet.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Subsidie en regelingen per gemeente
        </h2>
        <p className="text-gray-700 mb-4">
          Vrijwel elke Nederlandse gemeente en elk waterschap heeft regelingen voor het afkoppelen van regenwater en het hergebruik op de WC. Bekende voorbeelden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Amsterdam Rainproof:</strong> tot 50 euro per m2 voor afgekoppeld dakoppervlak.</li>
          <li><strong>Rotterdam Klimaatadaptatie:</strong> subsidie tot 2500 euro voor grotere installaties.</li>
          <li><strong>Den Haag Operatie Steenbreek:</strong> verschillende regelingen voor regenton en hergebruik.</li>
          <li><strong>Hoogheemraadschap Rijnland:</strong> Afkoppelregeling 5-10 euro per m2 dakoppervlak.</li>
          <li><strong>Utrecht en Eindhoven:</strong> Subsidie tot 1000 euro voor regenwaterinstallaties met hergebruik.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor zakelijke pandeigenaren en VvE&apos;s is regenwater-naar-WC vaak voordeliger door schaalvoordelen. Lees meer op onze pagina over <Link href="/zakelijk/appartementen-vve" className="text-[#005F8A] underline">appartementen en VvE</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud en veiligheid
        </h2>
        <p className="text-gray-700 mb-6">
          Een goed onderhouden regenwater-WC-installatie geeft jarenlang probleemloos plezier. Belangrijkste onderhoudstaken: maandelijks dakfilter legen, voorfilter halfjaarlijks spoelen, tank eens per 3-5 jaar volledig legen en uitspoelen, pomp jaarlijks inspecteren. Veiligheid: controleer jaarlijks de werking van de terugslagklep en lucht-gap tussen regenwater en leidingwater &mdash; deze koppeling is wettelijk verplicht om kruisbesmetting van het drinkwaternet te voorkomen. Voor de complete regenwatercontext zie onze <Link href="/regenwater" className="text-[#005F8A] underline">regenwater hub</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over regenwater voor de WC
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
            <Link href="/regenwater/filteren" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater filteren</h3>
              <p className="text-sm text-gray-600">De vijf stappen van regenwaterfiltratie en welke combinatie u nodig heeft.</p>
            </Link>
            <Link href="/regenwater/opslagtank" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater opslagtank</h3>
              <p className="text-sm text-gray-600">Tankgroottes, materialen en plaatsing voor WC-hergebruik en tuintoepassingen.</p>
            </Link>
            <Link href="/zakelijk/appartementen-vve" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Appartementen en VvE</h3>
              <p className="text-sm text-gray-600">Collectieve regenwaterinstallaties voor appartementencomplexen en VvE&apos;s.</p>
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
