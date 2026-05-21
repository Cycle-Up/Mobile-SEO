import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosefilter membraandruk: osmotische druk, scaling en temperatuur',
  description:
    'Osmotische druk van leidingwater is 0,5-1 bar. Het RO-membraan heeft 4-7 bar nodig om dit te overwinnen. Temperatuurdaling van 10 graden halveert de.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraandruk' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is de osmotische druk van Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De osmotische druk van Nederlands leidingwater is circa 0,5 tot 0,8 bar, afhankelijk van de hardheid en het totale opgeloste stoffen (TDS). Dit komt overeen met een TDS van circa 200 tot 400 mg/L. Het RO-membraan moet een transmembraandruk handhaven die groter is dan deze osmotische druk om netto waterproductie te bewerkstelligen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel waterdruk heeft een osmosefilter nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een thuisosmosefilter heeft minimaal 2,8 bar voedingsdruk nodig om te functioneren. De optimale werkdruk ligt tussen 4 en 6 bar. Bij hogere druk stijgt de waterproductie (flux) en verbetert de verhouding drinkwater versus afvalwater. De typische huishoudens-waterdruk in Nederland van 3 tot 6 bar is in de meeste gevallen voldoende, maar een drukpomp kan nodig zijn bij lage druk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe berekent u de osmotische druk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De osmotische druk wordt benaderd met de Van \'t Hoff vergelijking: pi = iMRT. Hierin is i de Van \'t Hoff factor, M de molariteit van de oplossing, R de gasconstante (0,0831 L bar/mol K) en T de absolute temperatuur in Kelvin. Voor Nederlands leidingwater met een ionensterkte van circa 6 mmol/L geeft dit een osmotische druk van 0,5 tot 0,8 bar bij kamertemperatuur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom produceert een osmosefilter minder water in de winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koud water heeft een hogere viscositeit, waardoor watermoleculen trager door het RO-membraan bewegen. De membraanflux neemt toe met circa 3% per graad Celsius stijging. Bij 10 graden Celsius produceert een osmosefilter ruwweg de helft van de hoeveelheid water vergeleken met 25 graden Celsius. Dit verklaart waarom een osmosefilter in een koude kelder significant minder presteert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is scaling op een RO-membraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scaling is de neerslag van mineraalzouten op het RO-membraan, veroorzaakt door de concentratie van opgeloste stoffen in het concentraat. Calciumcarbonaat (kalk), calciumsulfaat en bariumsulfaat zijn de meest voorkomende scaleverbindingen. Scaling verhoogt de transmembraanweerstand en vermindert zowel de waterproductie als de TDS-verwijdering. Ernstige scaling verkorte de levensduur van het membraan aanzienlijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe voorkomt u scaling op een osmosemembraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scaling kunt u voorkomen door: (1) waterontharder als voorbehandeling te installeren die calcium en magnesium verwijdert; (2) regelmatig het membraan te spoelen om concentraten te verwijderen; (3) de concentratiefactor (recovery rate) niet te hoog in te stellen, maximaal 50-75%; (4) bij professionele systemen antiscalant te doseren. Jaarlijkse sanitisatie met citroenzuur helpt bestaande aanslag te verwijderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een RO-membraan mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een RO-membraan gaat bij normaal gebruik 2 tot 5 jaar mee. De levensduur hangt af van de waterkwaliteit (hardheid, TDS, chloorgehalte), de werkdruk en het onderhoud. Signalen voor vervanging zijn: TDS-ratio boven 15% (permeaat TDS gedeeld door voedings-TDS), flux die meer dan 30% gedaald is ten opzichte van de beginwaarde, of zichtbare biologische groei. Chloor beschadigt veel RO-membranen en moet worden verwijderd door een actief koolprefilter.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosefilter membraandruk: osmotische druk, scaling en temperatuur',
  description:
    'Osmotische druk van leidingwater is 0,5-1 bar. Het RO-membraan heeft 4-7 bar nodig. Temperatuurdaling halveert de doorlaatbaarheid.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraandruk',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function MembraandrukPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Membraandruk en scaling', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/membraandruk' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link> &rsaquo;{' '}
          <span>Membraandruk en scaling</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosefilter membraandruk: osmotische druk, scaling en temperatuur
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een osmosefilter werkt op basis van druk: de voedingsdruk moet de osmotische druk
            van het water overwinnen. Temperatuur, scaling en de juiste werkdruk bepalen samen
            hoe goed en hoe lang uw RO-membraan presteert.
          </p>
        </section>

        <QuickAnswer answer="Osmotische druk van Nederlands leidingwater is 0,5-0,8 bar. Een RO-membraan heeft minimaal 2,8 bar voedingsdruk nodig, optimaal 4-6 bar. Temperatuurdaling van 10 graden halveert de waterproductie. Scaling door kalkafzetting vermindert het rendement met 20-40% als het niet wordt voorkomen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het principe van osmotische druk
        </h2>
        <p className="text-gray-700 mb-4">
          Bij gewone osmose beweegt water door een semi-permeabel membraan van een lage
          naar een hoge concentratie aan opgeloste stoffen. Dit is een spontaan proces dat
          energieverbruikt totdat de osmotische druk aan beide zijden in evenwicht is.
        </p>
        <p className="text-gray-700 mb-4">
          Bij <strong>omgekeerde osmose</strong> wordt dit proces omgekeerd door een mechanische
          druk aan te brengen die groter is dan de osmotische druk. Water wordt dan gedwongen
          van de zijde met hoge concentratie (voedingswater) naar de zijde met lage concentratie
          (permeaat of drinkwater), terwijl verontreinigingen worden achtergelaten in het
          concentraat dat wordt afgevoerd.
        </p>
        <p className="text-gray-700 mb-6">
          Voor <strong>Nederlands leidingwater</strong> met een TDS (totaal opgeloste stoffen)
          van circa 200 tot 400 mg/L bedraagt de osmotische druk ongeveer 0,5 tot 0,8 bar.
          Ter vergelijking: zeewater heeft een TDS van circa 35.000 mg/L en een osmotische druk
          van circa 27 bar. Dat is de reden waarom ontzilting van zeewater aanzienlijk meer
          energie en hogere drukken vereist dan de behandeling van zoet leidingwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmotische druk berekenen: Van &apos;t Hoff vergelijking
        </h2>
        <p className="text-gray-700 mb-4">
          De osmotische druk kan worden berekend met de vereenvoudigde Van &apos;t Hoff vergelijking:
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-4 font-mono text-[#003F5C] text-sm">
          &pi; = iMRT
        </div>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>&pi;</strong> = osmotische druk in bar (of atm)</li>
          <li><strong>i</strong> = Van &apos;t Hoff factor (aantal ionen per molekuuleenheid; voor NaCl is dat 2)</li>
          <li><strong>M</strong> = molariteit van de oplossing (mol/L)</li>
          <li><strong>R</strong> = universele gasconstante (0,0831 L&middot;bar/mol&middot;K)</li>
          <li><strong>T</strong> = temperatuur in Kelvin (20&deg;C = 293 K)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor Nederlands leidingwater met een ionensterkte van circa 6 mmol/L resulteert
          dit in een osmotische druk van 0,5 tot 0,8 bar bij kamertemperatuur. De benodigde
          <strong> transmembraandruk (TMP)</strong> is gelijk aan de voedingsdruk minus de som
          van permeaatdruk en osmotische druk. Om netto waterproductie te hebben, moet de TMP
          positief zijn.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Benodigde werkdruk voor thuissystemen
        </h2>
        <p className="text-gray-700 mb-4">
          Een thuisosmosefilter vereist een minimale voedingsdruk van <strong>2,8 bar</strong>.
          De optimale werkdruk ligt tussen <strong>4 en 6 bar</strong>. De meeste Nederlandse
          huishoudens hebben een leidingwaterdruk van 3 tot 6 bar, wat in de meeste gevallen
          voldoende is.
        </p>
        <p className="text-gray-700 mb-4">
          Bij een hogere voedingsdruk geldt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Hogere flux:</strong> meer liter drinkwater per uur wordt geproduceerd</li>
          <li><strong>Betere afvalwaterverhouding:</strong> de verhouding drinkwater versus
            afvalwater (recovery rate) verbetert bij hogere druk</li>
          <li><strong>Betere TDS-verwijdering:</strong> hogere druk drijft water effectiever
            door het membraan, zodat verontreinigingen beter worden afgescheiden</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Als de waterdruk in uw woning of appartement structureel lager is dan 3 bar, is een
          extra drukpomp aanbevolen. Zie ook onze pagina over{' '}
          <Link href="/omgekeerde-osmose/waterdruk" className="text-[#005F8A] underline">
            waterdruk voor osmosefilters
          </Link>{' '}
          voor meer informatie over pompoplossingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Temperatuureffect op membraanflux
        </h2>
        <p className="text-gray-700 mb-4">
          Watertemperatuur heeft een sterk effect op de prestaties van een RO-membraan.
          De <strong>membraanflux neemt toe met circa 3% per graad Celsius stijging</strong> in
          watertemperatuur. Dit betekent dat bij een temperatuurdaling van 10 graden de
          waterproductie met circa 30% afneemt, en bij een daling van 15 graden zelfs
          tot bijna de helft.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Watertemperatuur</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Relatieve flux</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Praktische situatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">25&deg;C</td>
                <td className="border border-gray-300 px-3 py-2">100% (referentie)</td>
                <td className="border border-gray-300 px-3 py-2">Warme zomerdag</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">20&deg;C</td>
                <td className="border border-gray-300 px-3 py-2">~85%</td>
                <td className="border border-gray-300 px-3 py-2">Kamertemperatuur</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">15&deg;C</td>
                <td className="border border-gray-300 px-3 py-2">~70%</td>
                <td className="border border-gray-300 px-3 py-2">Koele lente/herfst</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">10&deg;C</td>
                <td className="border border-gray-300 px-3 py-2">~50%</td>
                <td className="border border-gray-300 px-3 py-2">Koude kelder, winter</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          De oorzaak is de viscositeit van water: bij lagere temperaturen is water dikker
          (hogere viscositeit) en bewegen watermoleculen trager. Hierdoor duurt het langer
          voordat voldoende water door het membraan is geperst. Een osmosefilter in een
          onverwarmde kelder of berging kan in de winter significant minder water produceren
          dan het fabrieksspecificatie aangeeft. Fabrieksspecificaties worden standaard gemeten
          bij 25&deg;C en 60 psi (circa 4,1 bar).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Scaling: kalkafzetting op het membraan
        </h2>
        <p className="text-gray-700 mb-4">
          Scaling is de neerslag van slecht oplosbare zouten op het RO-membraanoppervlak.
          Het treedt op omdat het concentraat (het water dat wordt afgevoerd) een steeds hogere
          concentratie aan opgeloste stoffen bereikt. Wanneer de concentratie van bepaalde zouten
          de oplosbaarheidsgrens overschrijdt, precipiteren ze op het membraan.
        </p>
        <p className="text-gray-700 mb-4">
          De meest voorkomende scaleverbindingen in Nederlands leidingwater zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Calciumcarbonaat (CaCO&sub3;):</strong> gewone kalkafzetting, de meest
            frequente oorzaak van scaling in hard watergebieden
          </li>
          <li>
            <strong>Calciumsulfaat (CaSO&sub4;):</strong> gypsafzetting, minder oplosbaar dan
            calciumcarbonaat bij hoge temperaturen
          </li>
          <li>
            <strong>Bariumsulfaat (BaSO&sub4;):</strong> extreem slecht oplosbaar, zelfs bij
            lage concentraties problematisch
          </li>
          <li>
            <strong>Silicascaling:</strong> bij hoge pH en hoge silicaconcentraties in het
            concentraat kan amorf silica neerslaan
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Scaling heeft meerdere negatieve effecten: de membraanweerstand stijgt, de
          waterproductie (flux) daalt met <strong>20 tot 40%</strong>, de TDS-verwijdering
          neemt af en de levensduur van het membraan wordt bekort. Een membraan met ernstige
          scaling kan niet altijd volledig worden hersteld.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Scaling voorkomen en verhelpen
        </h2>
        <p className="text-gray-700 mb-4">
          De belangrijkste preventieve maatregelen tegen scaling zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Waterontharder als voorbehandeling:</strong> een
            <Link href="/waterontharder" className="text-[#005F8A] underline"> waterontharder</Link>{' '}
            verwijdert calcium en magnesium voor het osmosembraan, wat de belangrijkste bron
            van scaling elimineert
          </li>
          <li>
            <strong>Lage recovery rate:</strong> de verhouding drinkwater versus totaal ingaand
            water niet hoger dan 50 tot 75% instellen beperkt de concentratiefactor
          </li>
          <li>
            <strong>Regelmatig spoelen:</strong> een automatisch spoel- of flushprogramma
            verwijdert concentraat van het membraanoppervlak
          </li>
          <li>
            <strong>Antiscalant dosering:</strong> bij professionele systemen worden chemische
            antiscalants gedoseerd die mineraalneerslagen voorkomen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bestaande, milde scaling kan worden verwijderd door het membraan te reinigen met
          verdunde citroenzuuroplossing (pH-verlaging lost calciumcarbonaat op). Ernstige
          scaling vereist membraanvervanging.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Membraanvervanging: wanneer is het nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Een RO-membraan heeft een levensduur van <strong>2 tot 5 jaar</strong>, afhankelijk
          van de waterkwaliteit, werkdruk en het onderhoud. De volgende signalen wijzen op de
          noodzaak van vervanging:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>TDS-ratio stijgt boven 15%:</strong> de TDS van het permeaat gedeeld door
            de TDS van het voedingswater. Bij een goed membraan is dit 5% of minder
          </li>
          <li>
            <strong>Flux daalt meer dan 30%:</strong> vergelijk de huidige waterproductie
            met de beginwaarde bij dezelfde druk en temperatuur
          </li>
          <li>
            <strong>Biologische verontreiniging:</strong> algen, bacteriegroei of
            slijmvorming op het membraan dat niet reageert op sanitisatie
          </li>
          <li>
            <strong>Chloorschade:</strong> veel RO-membranen zijn gevoelig voor chloor.
            Een defecte actief koolprefilter kan leiden tot vroegtijdige membraandegradatie
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor het volledige onderhoud van uw osmosefilter, inclusief pre- en postfilters,
          raadpleeg onze pagina over{' '}
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">
            onderhoud van osmosefilters
          </Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/omgekeerde-osmose/druk" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterdruk voor osmose</h3>
              <p className="text-sm text-gray-600">Welke waterdruk heb je minimaal nodig voor een goed werkend RO-systeem?</p>
            </Link>
            <Link href="/omgekeerde-osmose/boosterpomp" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Boosterpomp voor osmose</h3>
              <p className="text-sm text-gray-600">Wanneer is een boosterpomp nodig en welk effect heeft het op de filterprestaties?</p>
            </Link>
            <Link href="/omgekeerde-osmose/waterdruk" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterdruk meten en optimaliseren</h3>
              <p className="text-sm text-gray-600">Hoe meet je de waterdruk thuis en wat doe je als die te laag is?</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: complete gids</h3>
              <p className="text-sm text-gray-600">Alles over hoe RO werkt, wat het filtert en welk systeem bij jou past.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over membraandruk en scaling
          </h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose/rendement" className="text-[#005F8A] underline">rendement van osmosefilters</Link>,{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder als voorbehandeling</Link> en{' '}
          <Link href="/omgekeerde-osmose/membraan-vervangen" className="text-[#005F8A] underline">membraan vervangen</Link>.
        </p>
      </main>
    </>
  );
}
