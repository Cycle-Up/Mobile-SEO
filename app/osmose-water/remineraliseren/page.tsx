import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater remineraliseren: mineralen toevoegen na omgekeerde osmose',
  description:
    'Osmosewater heeft TDS &lt;50 mg/L. Remineraliseren voegt calcium en magnesium terug toe voor betere smaak, hogere pH en gezondheidsvoordelen. Methoden en kosten vergeleken.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/remineraliseren' },
};

const faqItems = [
  {
    question: 'Moet ik osmosewater remineraliseren?',
    answer:
      'Remineraliseren is niet strikt noodzakelijk voor de gezondheid, maar wordt aanbevolen voor een betere smaak en hogere pH. De WHO adviseert drinkwater met minimaal 30 mg/L calcium en 10 mg/L magnesium. Puur osmosewater bevat nauwelijks mineralen (TDS 5-50 mg/L). Een remineralisatiecartridge verbetert de smaak en verhoogt de pH naar 7,5-8,5.',
  },
  {
    question: 'Hoe remineraliseer ik osmosewater thuis?',
    answer:
      'De eenvoudigste methode is een inline remineralisatiecartridge na het RO-membraan. Deze vult u zelf niet bij; de cartridge lost langzaam calciumcarbonaat en magnesiumoxide op in het water. Alternatieven zijn losse calcietkorrels in een reservoirtank, coral calcium sachets voor een waterkan of vloeibare mineraaldruppels die u per glas toevoegt.',
  },
  {
    question: 'Welke mineralen moet ik toevoegen aan osmosewater?',
    answer:
      'De twee belangrijkste mineralen voor drinkwater zijn calcium en magnesium. Calcium (Ca2+) geeft het water stevigheid en een vol mondgevoel en draagt bij aan de botgezondheid. Magnesium (Mg2+) verbetert de aromaextractie van koffie en thee en heeft een licht bittere smaakbijdrage bij hoge niveaus. Een goede remineralisatiecartridge voegt beide toe via calciumcarbonaat (CaCO3) en magnesiumoxide (MgO).',
  },
  {
    question: 'Wat is de optimale TDS voor geremineraliseerd osmosewater?',
    answer:
      'Voor dagelijks drinken is een TDS van 100-150 mg/L ideaal. Voor espresso wordt 75-125 mg/L aanbevolen door de Specialty Coffee Association, terwijl pour-over koffie het beste smaakt bij 125-175 mg/L. Puur osmosewater heeft een TDS van 5-50 mg/L, wat als te leeg wordt ervaren.',
  },
  {
    question: 'Verhoogt een remineralisatiecartridge de pH van osmosewater?',
    answer:
      'Ja. Puur osmosewater heeft een pH van 6-7. Een alkalische remineralisatiecartridge met calciumcarbonaat en magnesiumoxide verhoogt de pH naar 7,5-8,5. Dit wordt door veel mensen als aangenamer ervaren en geeft het water een zachter karakter. Calcietkorrels kunnen de pH zelfs tot 9,0 verhogen.',
  },
  {
    question: 'Is geremineraliseerd osmosewater beter dan kraanwater?',
    answer:
      'Voor drinkwaterkwaliteit is geremineraliseerd osmosewater in de meeste gevallen beter dan kraanwater. Het RO-membraan verwijdert PFAS, lood, nitraten, medicijnresten en bacterien. Na remineralisatie krijgt het water een vergelijkbaar of beter mineraalprofiel dan kraanwater, maar zonder de ongewenste verontreinigingen en chloor.',
  },
  {
    question: 'Hoe lang gaat een remineralisatiecartridge mee?',
    answer:
      'Een standaard inline remineralisatiecartridge gaat 6-12 maanden mee, afhankelijk van het waterverbruik en de initieel-TDS van het osmosewater. Hoe lager de TDS van het inkomende water, hoe sneller de cartridge uitgeput raakt. Vervang de cartridge als de TDS van het uitstroomende water niet meer stijgt boven het inkomende osmosewater.',
  },
  {
    question: 'Wat is het verschil tussen een remineralisatiecartridge en alkalisch water?',
    answer:
      'Een remineralisatiecartridge voegt calcium en magnesium toe via calciumcarbonaat en verhoogt de pH naar 7,5-8,5. Alkalisch water (pH 8-9,5) wordt ook gemaakt door elektrolyse (waterionisatoren) of door speciale alkalische filtercartridges met sterkere alkaliserende mineralen. Een remineralisatiecartridge geeft een gematigde pH-stijging met gezonde mineralen; waterionisatoren geven een hogere pH maar voegen geen extra mineralen toe.',
  },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
    { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
    { '@type': 'ListItem', position: 3, name: 'Osmosewater remineraliseren', item: 'https://waterfilterplatform.nl/osmose-water/remineraliseren' },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater remineraliseren: mineralen toevoegen na omgekeerde osmose',
  description:
    'Osmosewater heeft TDS kleiner dan 50 mg/L. Remineraliseren voegt calcium en magnesium terug toe voor betere smaak, hogere pH en gezondheidsvoordelen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/remineraliseren',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterRemineraliserenPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:text-[#005F8A]">Osmosewater</Link>
            <span className="mx-2">/</span>
            <span>Osmosewater remineraliseren</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater remineraliseren: mineralen toevoegen na omgekeerde osmose
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Osmosewater is bijna mineraalvrij: TDS 5&ndash;50 mg/L en een licht zure pH van 6&ndash;7.
            Remineraliseren voegt calcium en magnesium terug toe voor betere smaak, een hogere pH
            en een gezondheidsvoordeel. Alle methoden en kosten vergeleken.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Osmosewater bevat nauwelijks mineralen (TDS 5-50 mg/L, pH 6-7). Een remineralisatiecartridge voegt calciumcarbonaat en magnesiumoxide toe, verhoogt de pH naar 7,5-8,5 en brengt TDS op 100-150 mg/L. De goedkoopste en eenvoudigste methode kost 15-35 euro per jaar als inline cartridge na het RO-systeem." />

        <CTABanner context="osmose" />

        {/* Waarom remineraliseren */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom osmosewater remineraliseren?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een omgekeerde osmose membraan verwijdert 95&ndash;99% van alle opgeloste stoffen, inclusief
            de mineralen die water zijn smaak en gezondheidswaarde geven. Puur osmosewater heeft:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>TDS 5&ndash;50 mg/L</strong> &mdash; bijna mineraalvrij, water smaakt vlak</li>
            <li><strong>pH 6&ndash;7</strong> &mdash; licht zuur door opgelost CO2, geen bicarbonaatbuffering</li>
            <li><strong>Calcium en magnesium nagenoeg afwezig</strong> &mdash; geen bijdrage aan dagelijkse behoefte</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De WHO beveelt aan dat drinkwater minimaal 30 mg/L calcium en 10 mg/L magnesium bevat
            voor een positief gezondheidseffect. Puur osmosewater voldoet hier niet aan. Remineralisatie
            lost dit op en geeft het water tegelijkertijd een aangenamer, ronder smaakprofiel.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Voor koffie en thee is remineralisatie extra waardevol: magnesium werkt als
            smaakversterker bij de extractie van koffiearoma&apos;s, terwijl calcium zorgt voor de
            gewenste waterstructuur bij espresso.
          </p>
        </section>

        {/* Methoden vergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Remineralisatiemethoden vergeleken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er zijn vijf gangbare methoden om osmosewater te remineraliseren. Ze verschillen in
            pH-resultaat, TDS-resultaat, kosten en gebruiksgemak.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">pH resultaat</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">TDS resultaat</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Kosten</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Installatie</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Alkalische remineralisatiecartridge</td>
                  <td className="border border-gray-200 px-3 py-2">7,5&ndash;8,5</td>
                  <td className="border border-gray-200 px-3 py-2">80&ndash;150 mg/L</td>
                  <td className="border border-gray-200 px-3 py-2">&euro;15&ndash;35/jaar</td>
                  <td className="border border-gray-200 px-3 py-2">Inline na RO</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Calciet/mineraalkorrels (tank)</td>
                  <td className="border border-gray-200 px-3 py-2">7,5&ndash;9,0</td>
                  <td className="border border-gray-200 px-3 py-2">100&ndash;200 mg/L</td>
                  <td className="border border-gray-200 px-3 py-2">&euro;10&ndash;20/6 mnd</td>
                  <td className="border border-gray-200 px-3 py-2">Los reservoir</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">Coral calcium sachet</td>
                  <td className="border border-gray-200 px-3 py-2">7,5&ndash;8,5</td>
                  <td className="border border-gray-200 px-3 py-2">50&ndash;100 mg/L</td>
                  <td className="border border-gray-200 px-3 py-2">&euro;20&ndash;40/3 mnd</td>
                  <td className="border border-gray-200 px-3 py-2">In drinkkan</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">Mineraaldruppels (vloeibaar)</td>
                  <td className="border border-gray-200 px-3 py-2">+0,5 per druppel</td>
                  <td className="border border-gray-200 px-3 py-2">+50&ndash;100 mg/L</td>
                  <td className="border border-gray-200 px-3 py-2">&euro;15&ndash;30/3 mnd</td>
                  <td className="border border-gray-200 px-3 py-2">Per glas</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">Blending (mengen met leidingwater)</td>
                  <td className="border border-gray-200 px-3 py-2">7,2&ndash;8,0</td>
                  <td className="border border-gray-200 px-3 py-2">Variabel</td>
                  <td className="border border-gray-200 px-3 py-2">&euro;0</td>
                  <td className="border border-gray-200 px-3 py-2">Manueel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De inline alkalische remineralisatiecartridge is de beste keuze voor de meeste
            gebruikers: eenvoudig te installeren na het RO-membraan, nauwkeurig gedoseerd en
            betaalbaar. De PureAqua 4-in-1 osmosekraan heeft een ingebouwde remineralisatiecartridge
            als standaardoptie voor de beste integratie.
          </p>
        </section>

        {/* Wat voegt een cartridge toe */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat voegt een remineralisatiecartridge toe?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een alkalische remineralisatiecartridge bevat calciumcarbonaat (CaCO3) en
            magnesiumoxide (MgO) in korrelvorm. Deze verbindingen lossen langzaam op in het
            zacht, CO2-rijke osmosewater:
          </p>
          <div className="space-y-3 mb-6">
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">Calciumcarbonaat (CaCO3)</p>
              <p className="text-sm text-gray-700">
                Lost op in zacht water en geeft calcium vrij. Calcium draagt bij aan een
                steviger mondgevoel, botgezondheid en neutraliseert de licht zure pH.
                Typisch resultaat: 30&ndash;80 mg/L calcium na cartridge.
              </p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">Magnesiumoxide (MgO)</p>
              <p className="text-sm text-gray-700">
                Reageert met water en geeft magnesium en hydroxide-ionen vrij, waardoor
                de pH stijgt. Magnesium is essentieel voor de aromaextractie bij koffie en
                thee. Typisch resultaat: 10&ndash;30 mg/L magnesium na cartridge.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De combinatie van beide verhoogt de TDS van 10&ndash;30 mg/L naar 80&ndash;150 mg/L en
            de pH van 6&ndash;6,5 naar 7,5&ndash;8,5. Veel mensen ervaren dit als zachter en aangenamer
            dan puur osmosewater.
          </p>
        </section>

        {/* Optimale TDS */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Optimale TDS na remineralisatie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De ideale TDS na remineralisatie hangt af van het gebruiksdoel:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#003F5C] mb-1">100&ndash;150 mg/L</p>
              <p className="text-sm text-gray-600 font-medium">Dagelijks drinken</p>
              <p className="text-xs text-gray-500 mt-1">Vol en aangenaam, WHO-conform</p>
            </div>
            <div className="border border-[#005F8A] bg-[#E0F2FE] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#003F5C] mb-1">75&ndash;125 mg/L</p>
              <p className="text-sm text-[#005F8A] font-medium">Espresso</p>
              <p className="text-xs text-gray-500 mt-1">SCA-aanbeveling voor optimale extractie</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#003F5C] mb-1">125&ndash;175 mg/L</p>
              <p className="text-sm text-gray-600 font-medium">Pour-over koffie</p>
              <p className="text-xs text-gray-500 mt-1">Volledige extractie van aroma&apos;s</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Gebruik een TDS-meter om de output van uw remineralisatiecartridge te controleren.
            Als de TDS niet significant stijgt ten opzichte van het inkomende osmosewater, is
            de cartridge uitgeput en aan vervanging toe.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/osmose-water', title: 'Osmosewater uitleg', desc: 'Alles over puur osmosewater: kwaliteit, veiligheid en gebruik.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose systemen', desc: 'Hoe een RO-systeem werkt en wat het verwijdert.' },
              { href: '/alkalisch-water', title: 'Alkalisch water', desc: 'Wat is alkalisch water en zijn er gezondheidsvoordelen?' },
              { href: '/osmose-water/espresso', title: 'Osmosewater voor espresso', desc: 'Optimale waterkwaliteit voor de beste espresso.' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">{l.title}</p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over osmosewater remineraliseren</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
