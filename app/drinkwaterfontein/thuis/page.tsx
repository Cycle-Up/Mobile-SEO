import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Drinkwaterfontein voor thuis: gekoeld gefilterd water altijd klaar',
  description: 'Een drinkwaterfontein voor thuis geeft altijd gekoeld, gefilterd water. Vergelijking van tafelmodellen, POU fonteinen en osmose-fonteinen voor thuisgebruik.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/thuis' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke drinkwaterfontein is het beste voor thuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste gezinnen is een compact tafelmodel of POU onderbouwmodel de beste keuze. Het tafelmodel is eenvoudig te installeren en filtert en koelt het leidingwater direct. Voor hogere kwaliteitseisen (PFAS, nitraten, kalk) is een POU onderbouwmodel met RO-filter de beste optie. Als u ook warm of bruisend water wilt, dan is een 4-in-1 osmosekraan de meest complete oplossing, al is de aanschafprijs hoger (€500-1.200).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt een drinkwaterfontein zonder waterleiding thuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Als er geen directe wateraansluiting beschikbaar is, kunt u een flessenfontein gebruiken. Deze werkt met navulbare 5- of 10-liter flessen. U vult de fles bij een supermarkt, waterslijter of met uw eigen filterkan, en plaatst deze in of op het apparaat. De fontein koelt het water vervolgens. Nadeel: u moet regelmatig flessen vullen of kopen. Flessenfonteinen voor thuis zijn kleiner dan kantoormodellen en werken met 5-10L flessen in plaats van 19L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een drinkwaterfontein thuis goedkoper dan flessenwater kopen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, op de middellange termijn is een thuisfontein aanzienlijk goedkoper. Nederlands leidingwater kost circa €0,001 per liter. Na filteren (filterkosten meegerekend) betaalt u bij een tafelmodel circa €0,05-0,10 per liter. Flessenwater uit de supermarkt kost €0,30-0,80 per liter. Bij een gezin van 4 dat dagelijks 8 liter drinkt, bespaart u €1.000-2.500 per jaar ten opzichte van flessenwater. De break-even met de aanschaf van een fontein ligt doorgaans binnen 6-12 maanden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik ook bruisend water uit een thuisfontein halen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Sommige tafelmodellen en onderbouwmodellen zijn voorzien van een CO2-carbonatatiefunctie. U sluit een CO2-cartridge aan en het apparaat voegt CO2 toe aan het water voordat het wordt getapt. Een CO2-cartridge van 60 gram (huishoudformaat) levert circa 60 liter bruisend water voor €5-10. Alternatief is de 4-in-1 osmosekraan die ook bruisend water levert via een aparte CO2-aansluiting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe koud wordt water in een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste thuisfonteinen koelen het water tot 4-12 graden Celsius. Peltier-gekoelde modellen (stilste variant) bereiken doorgaans 8-12 graden. Compressorgekoelde modellen halen 4-8 graden. De optimale drinktemperatuur voor water is 8-10 graden: koud genoeg voor verfrissing, maar niet zo koud dat de smaak wordt gemaskeerd. Bij een warme keuken (boven 25 graden) presteren Peltier-modellen minder goed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een drinkwaterfontein en een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een drinkwaterfontein levert gefilterd, gekoeld water (en soms warm water). Een kokend water kraan levert water van 100 graden voor thee, koffie en koken, en combineert dit vaak met koud en warm kraanwater. De 4-in-1 osmosekraan combineert beide functies: koud, warm, kokend en bruisend water uit een kraan. Als u uitsluitend gekoeld drinkwater wilt, is een fontein de eenvoudigste oplossing. Als u ook kokend water nodig heeft, is een 4-in-1 kraan de meest complete keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe schoon is het water uit een drinkwaterfontein thuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een goed onderhouden fontein met koolstoffilter is het water vrij van chloor, chloroform, smaak- en geurresten. Bij een RO-filter worden ook zware metalen, nitraten, PFAS en medicijnresten voor meer dan 90% verwijderd. Een fontein zonder filter (alleen koeling) maakt het water niet schoner, alleen koeler. Belangrijk: vervang het filter op tijd (koolstoffilter jaarlijks, RO-membraan elke 2-3 jaar) om bacteriegroei in het filter te voorkomen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Drinkwaterfontein voor thuis: gekoeld gefilterd water altijd klaar',
  description: 'Een drinkwaterfontein voor thuis geeft altijd gekoeld, gefilterd water. Vergelijking van tafelmodellen, POU fonteinen en osmose-fonteinen voor thuisgebruik.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/drinkwaterfontein/thuis',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterfonteinThuisPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwaterfontein', item: 'https://waterfilterplatform.nl/drinkwaterfontein' },
              { '@type': 'ListItem', position: 3, name: 'Drinkwaterfontein thuis', item: 'https://waterfilterplatform.nl/drinkwaterfontein/thuis' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwaterfontein" className="hover:underline">Drinkwaterfontein</Link> &rsaquo;{' '}
          <span>Drinkwaterfontein thuis</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwaterfontein voor thuis: gekoeld gefilterd water altijd klaar
        </h1>

        <QuickAnswer answer="Een drinkwaterfontein voor thuis filtert en koelt uw leidingwater tot 4-12 graden. Compact tafelmodel vanaf €150, POU onderbouwmodel met RO-filter €300-700, 4-in-1 osmosekraan €500-1.200. Goedkoper dan flessenwater: break-even doorgaans binnen 6-12 maanden bij een gezin van vier personen." />

        <CTABanner context="osmose" />

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Waarom een drinkwaterfontein thuis?
          </h2>
          <p className="text-gray-700 mb-4">
            Onderzoek toont aan dat mensen meer drinken als koud water direct beschikbaar is. Een drinkwaterfontein thuis verlaagt de drempel: geen ijsblokjes in de koelkast vullen, geen flessen kopen bij de supermarkt, altijd verfrissend gefilterd water op de ideale drinktemperatuur. Bijkomend voordeel: minder plastic flessenafval en lagere kosten op de lange termijn.
          </p>
          <p className="text-gray-700">
            Nederlands leidingwater is van goede kwaliteit, maar bevat chloor, kalk en soms sporen van nitraten of PFAS. Een drinkwaterfontein met koolstoffilter verwijdert de smaak van chloor; een model met RO-filter filtert ook kalk, PFAS en andere verontreinigingen. Het resultaat: water dat puurder smaakt dan de meeste gebottelde merken, voor een fractie van de prijs.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Typen drinkwaterfonteinen voor thuis
        </h2>

        <div className="space-y-5 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Compact tafelmodel (countertop)</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">&euro;150-400</span>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Staat op het aanrecht, sluit aan op het kraanwater via een kleine adapter (geen permanente installatie nodig). Filtert het water via een koolstoffilter en koelt het daarna. Eenvoudigste type, geen boren of aanpassen van leidingen vereist. Geschikt voor 1-4 personen, capaciteit doorgaans 0,5-1 liter per minuut.
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Geen installatie vereist</li>
              <li>Verplaatsbaar</li>
              <li>Koolstoffilter: verwijdert chloor en geur</li>
              <li>Koelt tot 8-12&deg;C</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Onderbouw POU fontein</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">&euro;300-700</span>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Staat onder het aanrecht, verbonden met een apart tapkraantje op het werkblad. Geintegreerd filtersysteem (koolstof of koolstof + UV). Ruimtebesparend, want het apparaat is niet zichtbaar. Vereist een boorgat in het aanrecht voor het tapkraantje en een aansluiting op het leidingwater.
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Onzichtbaar onder aanrecht</li>
              <li>Permanent geinstalleerd tapkraantje</li>
              <li>Filterwissel 1x per jaar</li>
              <li>Geschikt voor gezin van 2-6 personen</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">4-in-1 osmosekraan</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest compleet</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">&euro;500-1.200</span>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Combineert koud gefilterd, warm, kokend (100&deg;C) en bruisend water via een enkele kraan met RO-filtratie. Geintegreerd RO-systeem verwijdert kalk, PFAS, nitraten, zware metalen. Aparte boiler voor kokend water (vergelijkbaar met Quooker). Duurste optie, maar meest veelzijdig voor gezinnen die ook thee, koffie en bruisend water willen.
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Koud + warm + kokend + bruisend uit 1 kraan</li>
              <li>RO-filter: 90-99% verwijdering verontreinigingen</li>
              <li>Inclusief CO2-aansluiting voor bruisend water</li>
              <li>Vervangt bestaande keukenkraan</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Flessenfontein thuis</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">&euro;100-300</span>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Klein model voor thuisgebruik, werkt met 5-10 liter navulflessen. Eenvoudigste installatie (gewoon neerzetten en aansluiten). Fles bijvullen bij supermarkt of waterslijter. Hogere lopende kosten door flessenprijs, maar lage aanschafprijs. Geschikt voor eenpersoonshuishoudens of als tijdelijke oplossing.
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Geen installatie vereist</li>
              <li>Lage aanschafprijs</li>
              <li>Flessenkosten &euro;5-15 per fles</li>
              <li>Beperkte capaciteit (5-10L per fles)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking voor gezin van 4 personen
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Jaarlijks</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Water per dag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Compact tafelmodel</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200</td>
                <td className="border border-gray-300 px-3 py-2">&euro;60 (filter)</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">POU onderbouw</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50 (filter)</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4-in-1 osmosekraan</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80 (filter)</td>
                <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Flessenfontein</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200 (flessen)</td>
                <td className="border border-gray-300 px-3 py-2">5-10L/dag</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bruisend water thuis: CO2-carbonatatie
        </h2>
        <p className="text-gray-700 mb-4">
          Bruisend water is populair in Nederland, maar supermarktflessen kosten snel op. Een drinkwaterfontein met CO2-carbonatatiefunctie maakt bruisend water van uw leidingwater voor aanzienlijk minder geld. Een CO2-cartridge van 60 gram kost €5-10 en levert circa 60 liter bruisend water, ofwel circa €0,08-0,17 per liter. Dat is een stuk minder dan €0,80 per fles bruisend bronwater in de supermarkt.
        </p>
        <p className="text-gray-700 mb-6">
          SodaStream-integratie is ook mogelijk: sommige tafelfonteinen zijn compatibel met standaard SodaStream CO2-cilinders. Een SodaStream cilinder (60L) kost circa €15 en maakt 60 liter bruisend water voor €0,25 per liter.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Drinkwaterfontein of kokend water kraan?
        </h2>
        <p className="text-gray-700 mb-4">
          De keuze tussen een drinkwaterfontein en een <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan</Link> hangt af van uw behoeften. Een drinkwaterfontein levert uitsluitend koud (en soms warm) water; een kokend water kraan levert kokend water voor thee en koffie, maar kan niet koelen. De 4-in-1 osmosekraan combineert beide functies en is daarmee de meest complete oplossing voor de keuken.
        </p>
        <p className="text-gray-700 mb-6">
          Als u zowel gekoeld drinkwater als kokend water wilt, heeft u de keuze: een aparte drinkwaterfontein naast uw bestaande kokend water kraan, of een enkele 4-in-1 kraan die alles combineert. De 4-in-1 kraan spaart ruimte en heeft een enkele wateraansluiting, maar is duurder in aanschaf. Lees meer over <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose systemen</Link> voor een uitgebreid filtervergelijk.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/drinkwaterfontein/kopen" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Drinkwaterfontein kopen</p>
              <p className="text-xs text-gray-500">Koopgids met modellenvergelijking voor thuis</p>
            </Link>
            <Link href="/drinkwaterfontein/huren" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Huren vs kopen vergelijking</p>
              <p className="text-xs text-gray-500">Wanneer is huren voordeliger dan kopen?</p>
            </Link>
            <Link href="/waterfilter/soorten" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Alle waterfiltersoorten vergeleken</p>
              <p className="text-xs text-gray-500">Overzicht van alle filtertypes en hun toepassingen</p>
            </Link>
            <Link href="/drinkwaterfontein" className="group border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">Drinkwaterfontein overzicht</p>
              <p className="text-xs text-gray-500">Alle informatie over drinkwaterfonteinen</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over drinkwaterfontein thuis</h2>
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
          <Link href="/drinkwaterfontein" className="text-[#005F8A] underline">drinkwaterfontein overzicht</Link>,{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>
      </main>
    </>
  );
}
