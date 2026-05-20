import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Regenwater voor de tuin: opvang, voordelen en tot 50% besparing',
  description:
    'Regenwater voor tuinbesproeiing: kalkarm, plantvriendelijk, geen filtering nodig. Regenton 200-1000 liter, tot 50% van tuinverbruik vervangen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/regenwater/tuin' },
};

const faqItems = [
  {
    q: 'Is regenwater beter voor mijn planten dan kraanwater?',
    a: 'Ja, regenwater is in de meeste delen van Nederland beter voor planten dan kraanwater. Regenwater is van nature zacht (calcium- en magnesiumarm), pH-neutraal tot licht zuur (5,5-6,5) en bevat geen chloor. Hard kraanwater (boven 10 dH) zorgt op langere termijn voor verkalking van potgrond en pH-verschuiving, wat opname van ijzer, mangaan en fosfor belemmert. Vooral kalkmijdende planten (rhododendron, azalea, hortensia, varens, citrus) gedijen aantoonbaar beter op regenwater.',
  },
  {
    q: 'Heb ik filters nodig voor regenwater in de tuin?',
    a: 'Nee, voor tuinbesproeiing volstaat een eenvoudige opstelling zonder fijnfiltering. Een dakfilter (bladvanger) en eventueel een grove voorfilter (1-2 mm zeef) op de regenton zijn voldoende. Sediment, actief kool en UV-desinfectie zijn niet nodig: planten en bodem verdragen kleine hoeveelheden organisch materiaal prima. Voor druppelirrigatie kunt u een fijnere voorfilter (100-200 micron) toevoegen om verstopping van de druppelaars te voorkomen.',
  },
  {
    q: 'Hoe groot moet mijn regenton zijn?',
    a: 'Vuistregel: 50 liter opslag per vierkante meter tuinoppervlak voor regelmatig gebruik in droge periodes. Een gemiddelde tuin van 50 m2 vraagt dus 2500 liter, maar veel huishoudens beginnen met een regenton van 200-500 liter voor handmatig gieten. Standaardmaten: 200 L (klein, balkon), 500 L (gemiddelde tuin), 1000 L (grote tuin), 3000-10000 L (ondergrondse tank voor totale tuininfrastructuur). Een 200 L ton is in 1-2 flinke buien gevuld.',
  },
  {
    q: 'Wat kost een regenton inclusief installatie?',
    a: 'Een eenvoudige 200 liter regenton kost 50-120 euro, een 500 liter ton 100-250 euro, een 1000 liter IBC-container 75-200 euro tweedehands of 200-450 euro nieuw. Inclusief regenpijpaansluiting (vulautomaat), kraan en overloop reken op 25-75 euro extra. Een complete ondergrondse tank van 3000-10000 liter inclusief installatie en pomp kost 1500-5000 euro. Veel gemeenten geven subsidie van 25-100 euro voor de aanschaf van een regenton.',
  },
  {
    q: 'Hoeveel procent van mijn tuinverbruik kan ik vervangen met regenwater?',
    a: 'Bij een goede opvanginstallatie kunt u 30-50% van het tuinverbruik dekken met regenwater. Een Nederlands huishouden gebruikt gemiddeld 30-50 liter water per dag voor de tuin in het groeiseizoen (april-oktober). Met een tank van 1000-3000 liter en een dakoppervlak van 50-100 m2 vangt u jaarlijks 30000-80000 liter regen op. In droge zomers kan tijdelijk extra leidingwater nodig zijn, maar in een gemiddeld jaar dekt regenwater het grootste deel van uw tuinwens.',
  },
  {
    q: 'Hoe voorkom ik muggen en algen in de regenton?',
    a: 'Plaats een goed sluitend deksel of fijnmazig insectengaas (1-2 mm) op de regenton om muggen en bladeren tegen te houden. Algengroei voorkomt u door de ton donker te plaatsen of donker materiaal te kiezen (zwart of donkergroen plastic): zonlicht stimuleert algen. Spoel de ton elke 2-3 jaar uit met schoon water; gebruik geen chloor. Tijdens de winter de ton legen of bovenaan een ruime overloop laten om bevriezingsschade te voorkomen.',
  },
  {
    q: 'Mag ik regenwater gebruiken voor mijn moestuin?',
    a: 'Ja, regenwater is uitstekend geschikt voor moestuingewassen. Het kalkarme karakter is gunstig voor de meeste groenten en kruiden. Wel een aandachtspunt: vermijd watergift direct op het eetbare deel (bladgroenten, kruiden) als u zorgen heeft over luchtkwaliteit in uw regio (industrie, drukke wegen). Voor wortelgroenten en vruchtgewassen (tomaat, paprika, courgette) is regenwater geen probleem. Was eetbare delen altijd af voor consumptie, ongeacht waterbron.',
  },
  {
    q: 'Moet ik mijn regenwater met de hand gieten of kan ik een pomp gebruiken?',
    a: 'Beide kan. Een eenvoudige regenton met kraan is geschikt voor handgieten met gieter (zwaartekracht). Voor druppelirrigatie, tuinslang of sproeiers heeft u een dompelpomp (50-200 euro) of een drukpomp (150-500 euro) nodig. Een drukpomp met drukvat geeft constant 2-4 bar waterdruk en is comfortabel voor tuinslangen. Combineer met een tijdklok voor automatische besproeiing in de vroege ochtend, wat verdamping minimaliseert.',
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
  headline: 'Regenwater voor de tuin: opvang, voordelen en tot 50% besparing',
  description:
    'Regenwater voor tuinbesproeiing: kalkarm, plantvriendelijk, geen filtering nodig. Regenton 200-1000 liter, tot 50% van tuinverbruik vervangen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/regenwater/tuin',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function RegenwaterTuinPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Regenwater', item: 'https://waterfilterplatform.nl/regenwater' },
              { '@type': 'ListItem', position: 3, name: 'Regenwater voor de tuin', item: 'https://waterfilterplatform.nl/regenwater/tuin' },
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
          <span>Tuin</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Regenwater voor de tuin: opvang, voordelen en tot 50% besparing
          </h1>
          <p className="text-gray-700 text-lg">
            Regenwater is van nature zacht en kalkarm: ideaal voor planten. Met een regenton van 200-1000 liter dekt u tot de helft van uw tuinverbruik, zonder dure filterinstallatie.
          </p>
        </div>

        <QuickAnswer answer="Regenwater is ideaal voor tuinbesproeiing: zacht, kalkarm, pH-neutraal en gratis. Voor tuingebruik is geen fijnfiltering nodig &mdash; dakfilter en eventueel grove voorfilter volstaan. Met een regenton van 200-1000 liter vangt u tot 50% van uw tuinverbruik op. Kosten 50-450 euro voor een complete opzet. Veel gemeenten geven subsidie van 25-100 euro." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom regenwater zo geschikt is voor planten
        </h2>
        <p className="text-gray-700 mb-4">
          Regenwater heeft drie eigenschappen die het uitermate geschikt maken voor tuinplanten. Ten eerste is het van nature zacht: het bevat nauwelijks calcium en magnesium (totale hardheid doorgaans 0-1 dH). Hard kraanwater (Nederland kent regio&apos;s met 6-15 dH) zorgt op termijn voor kalkaanslag op potgrond en bladeren, en verschuift de pH van de wortelzone richting alkalisch.
        </p>
        <p className="text-gray-700 mb-4">
          Ten tweede is regenwater pH-neutraal tot licht zuur (5,5-6,5). Dit valt precies in het optimale bereik voor de opname van ijzer, mangaan en fosfor door planten. Bij hard kalkrijk water schiet de pH boven 7,5, waardoor planten last krijgen van chlorose (bleke bladeren door ijzergebrek). Vooral rhododendron, azalea, hortensia, varens en citrus profiteren zichtbaar van regenwater.
        </p>
        <p className="text-gray-700 mb-6">
          Ten derde bevat regenwater geen chloor of chlooramine, die in kraanwater worden toegevoegd voor desinfectie. Chloor kan in hogere doses de microbiologie van potgrond verstoren. Voor specifiek advies per gemeente raadpleegt u onze pagina over <Link href="/waterhardheid/behandelingsadvies" className="text-[#005F8A] underline">behandelingsadvies waterhardheid</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke opvang past bij welke tuin?
        </h2>
        <p className="text-gray-700 mb-4">
          De juiste tankgrootte hangt af van uw tuingrootte, dakoppervlak en gebruikspatroon. Vuistregel: 50 liter opslag per vierkante meter tuin voor regelmatig gebruik in droge periodes. Een tuin van 50 m2 vraagt dan ongeveer 2500 liter, maar veel huishoudens beginnen kleiner.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Tankgrootte</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt voor</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Indicatieve kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">200 liter</td>
                <td className="border border-gray-300 px-3 py-2">Balkon, kleine tuin, potten</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;120</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">500 liter</td>
                <td className="border border-gray-300 px-3 py-2">Standaardtuin tot 30 m2</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100&ndash;250</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">1000 liter</td>
                <td className="border border-gray-300 px-3 py-2">Grote tuin, moestuin</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200&ndash;450</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">3000&ndash;10000 L (ondergronds)</td>
                <td className="border border-gray-300 px-3 py-2">Volledige tuininfrastructuur</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1500&ndash;5000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Voor de keuze van de juiste opslagtank bekijk onze diepgaande gids op <Link href="/regenwater/opslagtank" className="text-[#005F8A] underline">regenwater opslagtank</Link>. Voor compacte tuinkraan-opties zie <Link href="/waterfilter/tuin" className="text-[#005F8A] underline">waterfilter voor de tuin</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoeveel kunt u besparen met tuin-regenwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Een Nederlands huishouden gebruikt in het groeiseizoen gemiddeld 30-50 liter per dag voor tuinbesproeiing, oftewel 5000-10000 liter over april tot en met oktober. Bij een dakoppervlak van 50-100 m2 valt jaarlijks 30000-80000 liter regen op uw dak (uitgaande van 600-800 mm regenval). U vangt dus ruim genoeg op om uw tuin volledig te bedienen.
        </p>
        <p className="text-gray-700 mb-6">
          De praktische besparing ligt op 30-50% van het tuinverbruik, afhankelijk van tankgrootte en regenpatroon. Bij langere droge periodes (zoals zomer 2018 en 2022) zal extra leidingwater nodig zijn. Financieel levert dit 5-25 euro per jaar op afhankelijk van uw verbruik en watertarief; de echte winst zit in betere plantgezondheid en milieuvoordeel.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische tips voor tuinregenwater
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Donker geplaatste ton:</strong> minder algengroei, koeler water in zomer.</li>
          <li><strong>Goede afdekking:</strong> insectengaas 1-2 mm voorkomt muggen.</li>
          <li><strong>Overloop:</strong> leid de overloop naar de tuin of infiltratiekrat, niet naar het riool.</li>
          <li><strong>Verhoogde plaatsing:</strong> 50-80 cm boven grondniveau zorgt voor voldoende druk voor een gieter of slang met zwaartekracht.</li>
          <li><strong>Wintermodus:</strong> leeg de ton in november om bevriezingsschade te voorkomen.</li>
          <li><strong>Pomp voor gemak:</strong> dompelpomp 50-200 euro voor automatische tuinslang of druppelirrigatie.</li>
          <li><strong>Druppelirrigatie:</strong> voeg een 100-200 micron voorfilter toe om verstopping van druppelaars te voorkomen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Subsidie voor regenton in Nederlandse gemeenten
        </h2>
        <p className="text-gray-700 mb-6">
          Veel gemeenten en waterschappen geven subsidie van 25-100 euro voor de aanschaf van een regenton of regenwatersysteem als onderdeel van klimaatadaptatie en verminderde rioolbelasting. Bekende voorbeelden: Amsterdam (Regenton Subsidie), Rotterdam (Tegelwip), Den Haag (Operatie Steenbreek), Utrecht, Eindhoven, Tilburg en Groningen. Check de website van uw gemeente of waterschap voor actuele voorwaarden. Voor compleet overzicht van regenwatertoepassingen kunt u terecht op onze <Link href="/regenwater" className="text-[#005F8A] underline">regenwater hub</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over regenwater in de tuin
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
            <Link href="/waterhardheid/behandelingsadvies" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Behandelingsadvies waterhardheid</h3>
              <p className="text-sm text-gray-600">Per gemeente: welke aanpak past bij uw hardheid voor planten en huishouden.</p>
            </Link>
            <Link href="/waterfilter/tuin" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor de tuin</h3>
              <p className="text-sm text-gray-600">Compacte filters voor tuinkranen, druppelirrigatie en sierwaterpartijen.</p>
            </Link>
            <Link href="/regenwater/opslagtank" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater opslagtank</h3>
              <p className="text-sm text-gray-600">Tankgroottes, materialen en plaatsing van regenwateropvang.</p>
            </Link>
            <Link href="/regenwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater hub</h3>
              <p className="text-sm text-gray-600">Compleet overzicht van regenwateropvang, filtering en toepassingen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </main>
    </>
  );
}
