import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter of waterkoker: wat is beter voor schoon drinkwater?',
  description: 'Waterkoker verhit water maar filtert niet. Een waterfilter verwijdert chloor, PFAS en lood. Vergelijking: wanneer kies je voor een waterfilter en wanneer voor een waterkoker?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/vs-waterkoker' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Verwijdert een waterkoker PFAS uit leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Een waterkoker verhit water tot 100 graden Celsius maar verwijdert geen chemische stoffen zoals PFAS (poly- en perfluoralkylstoffen). PFAS zijn thermisch zeer stabiel en blijven onveranderd aanwezig in gekookt water. Alleen een osmosefilter met RO-membraan verwijdert 95% of meer van PFAS uit drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is gekookt kraanwater hetzelfde als gefilterd water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, ze zijn fundamenteel anders. Koken doodt bacterien en virussen door hitte, maar verwijdert geen opgeloste chemicalieen zoals PFAS, lood, nitraat, hormonen of microplastics. Een osmosefilter verwijdert juist die chemische verontreinigingen via membraanfiltratie, maar produceert geen warmte. Voor bacteriologisch veilig water in noodsituaties is koken effectief; voor chemisch veilig dagelijks drinkwater is filtratie noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: "Wat is beter voor baby's: gekookt of gefilterd water?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Voor babyvoeding is osmosewater de beste keuze. Koken doodt bacterien effectief, maar concentreert chemische verontreinigingen zoals nitraat, lood en PFAS doordat water verdampt en de stoffen achterblijven. Baby's zijn extra gevoelig voor nitraat (risico op methemoglobinemie) en lood (neurologische schade). Osmosewater bevat 95-99% minder van deze stoffen. Laat osmosewater wel op kooktempratuur brengen voor het aanmaken van flesvoeding, om bacteriologische veiligheid te garanderen.",
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert koken lood uit kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, koken verwijdert geen lood. Lood lost op in water vanuit loodleidingen of loden aansluitingen en blijft als opgelost ion aanwezig, ongeacht temperatuur. Koken concentreert lood zelfs licht doordat water verdampt. Alleen een osmosefilter of specifiek gecertificeerd loodfilter verwijdert lood effectief (95% of meer). Bij vermoedens van loodleidingen is een osmosefilter de meest betrouwbare oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang moet ik water koken om bacterien te doden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water hoeft slechts 1 minuut te koken om alle gangbare pathogene bacterien, virussen en protozoa te doden. Op hogere hoogten (boven 2000 meter) waar water eerder kookt, wordt 3 minuten aanbevolen. Legionella-bacterien sterven bij temperaturen boven 60 graden Celsius. Voor normale kookadviezen bij een besmettingsincident volstaat 1 minuut actief koken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een waterfilter goedkoper dan elke dag water koken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op lange termijn is een osmosefilter goedkoper dan structureel water koken. Een waterkoker verbruikt 2-3 kWh per dag bij intensief gebruik, wat op jaarbasis neerkomt op 30-60 euro aan stroomkosten (bij 0,30 euro/kWh). Een osmosefilter heeft geen stroomkosten voor het filtreren zelf, alleen filterwisselkosten van 30-60 euro per jaar. Bovendien levert de osmosefilter schoner water: zonder PFAS, nitraat en lood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan een waterfilter een waterkoker vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard osmosefilter vervangt de waterkoker niet voor het maken van thee of koffie, omdat het gefilterde water koud is. Een 4-in-1 kokend water kraan (zoals een Quooker-alternatief met osmosefilter) combineert beide: het levert koud gefilterd osmosewater en kookend water uit dezelfde kraan. Dit is de ideale combinatie voor wie zowel schoon drinkwater als kokend water wil zonder aparte apparaten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet koken met kalk in water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koken maakt het kalkprobleem juist erger. Bij verhitten slaat calciumcarbonaat neer als kalkaanslag in de waterkoker (de witte laag die u kent). Dit betekent dat de kalk uit het water verdwijnt als aanslag, maar ook dat de concentratie van andere opgeloste stoffen in het resterende water stijgt. Een osmosefilter verwijdert kalk effectief via het membraan, zonder kalkaanslag in apparaten.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter of waterkoker: wat is beter voor schoon drinkwater?',
  description: 'Waterkoker verhit water maar filtert niet. Een waterfilter verwijdert chloor, PFAS en lood. Vergelijking voor dagelijks drinkwater.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/vs-waterkoker',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterVsWaterkokerPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter vs waterkoker', item: 'https://waterfilterplatform.nl/waterfilter/vs-waterkoker' },
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
          <span>Waterfilter vs waterkoker</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter of waterkoker: wat is beter voor schoon drinkwater?
          </h1>
          <p className="text-gray-700 text-lg">
            Een waterkoker verhit water tot 100 graden en doodt bacterien, maar verwijdert geen PFAS, lood, nitraat of hormonen.
            Een osmosefilter haalt 95-99% van chemische verontreinigingen weg. Lees wanneer u welk apparaat nodig hebt.
          </p>
        </div>

        <QuickAnswer answer="Een waterkoker doodt bacterien en virussen maar verwijdert geen PFAS, lood, nitraat of hormonen. Een osmosefilter verwijdert 95-99% van alle chemische verontreinigingen. Voor dagelijks schoon drinkwater is een osmosefilter de betere keuze; een waterkoker is nuttig bij tijdelijke bacteriologische besmetting of als aanvulling voor thee en koffie." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat doet een waterkoker met uw drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterkoker brengt water tot het kookpunt van 100 graden Celsius. Dit hoge temperatuur is effectief tegen biologische bedreigingen: bacterien, virussen en protozoa (zoals Giardia en Cryptosporidium) worden gedood. Dit maakt koken de standaard aanbeveling bij een kookadvies van drinkwaterbedrijven.
        </p>
        <p className="text-gray-700 mb-4">
          Maar een waterkoker heeft een fundamentele beperking: het is geen filter. De volgende verontreinigingen worden <strong>niet verwijderd</strong> door koken:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>PFAS</strong> (poly- en perfluoralkylstoffen): thermisch uiterst stabiel, blijft onveranderd aanwezig</li>
          <li><strong>Lood</strong>: opgelost metaalion, blijft volledig in het water</li>
          <li><strong>Nitraat</strong>: lost op in water en wordt niet afgebroken bij koken</li>
          <li><strong>Hormonen en medicijnresten</strong>: organische moleculen die hitte grotendeels overleven</li>
          <li><strong>Microplastics</strong>: kleine plasticdeeltjes blijven aanwezig</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Chloor verdampt gedeeltelijk bij koken, maar dit is wisselvallig en afhankelijk van de hoeveelheid water en kooktijd.
          Een actief koolfilter haalt chloor betrouwbaarder weg (95%+).
          Bovendien: als water gedeeltelijk verdampt tijdens het koken, concentreert het de overgebleven stoffen licht &mdash; het omgekeerde van wat u wilt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat doet een osmosefilter?
        </h2>
        <p className="text-gray-700 mb-4">
          Een omgekeerde-osmosefilter (RO-filter) werkt via waterdruk: leidingwater wordt door een semipermeabel membraan met porieen van 0,0001 micrometer geperst.
          Alleen watermoleculen en een kleine hoeveelheid mineralen passeren; de rest wordt afgevoerd als afvalwater.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>PFAS: 95-99% verwijdering</li>
          <li>Lood en zware metalen: 95-99% verwijdering</li>
          <li>Nitraat: 85-95% verwijdering</li>
          <li>Hormonen en medicijnen: 90-99% verwijdering</li>
          <li>Microplastics: 99%+ verwijdering</li>
          <li>Bacterien en virussen: verwijderd via membraanfiltratie</li>
          <li>Chloor: 99%+ verwijdering (via actief koolprefilter)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Moderne osmosesystemen bevatten doorgaans een sedimentprefilter, een actief koolprefilter, het RO-membraan zelf en een actief kool postfilter.
          Zie onze uitleg over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> voor de volledige werking.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Grote vergelijking: waterkoker vs. actief koolfilter vs. osmosefilter
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Criterium</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Waterkoker</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Actief koolfilter</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Osmosefilter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bacterien</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (doodt bij 100&deg;C)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (membraan)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Virussen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Chloor</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Deels (bij koken)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (95%+)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (99%+)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (95%+)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (95%+)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (85-95%)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Hormonen/medicijnen</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (90%+)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Microplastics</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (99%+)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kalkafzetting</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Verergert (concentreert)</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-500">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (verwijdert)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Aanschafprijs</td>
                <td className="border border-gray-300 px-3 py-2">&euro;20-100</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150-400</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Lopende kosten</td>
                <td className="border border-gray-300 px-3 py-2">Stroom (&euro;30-60/jaar)</td>
                <td className="border border-gray-300 px-3 py-2">Filters &euro;50-100/jaar</td>
                <td className="border border-gray-300 px-3 py-2">Filters &euro;30-60/jaar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een waterkoker de juiste keuze?
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn situaties waar een waterkoker een legitieme en effectieve oplossing is:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Kookadvies van drinkwaterbedrijf</strong>: bij een tijdelijke bacteriologische besmetting van het leidingwaternet is koken de aanbevolen noodmaatregel</li>
          <li><strong>Reiswater</strong>: in landen waar leidingwater biologisch onveilig is, is koken de meest toegankelijke oplossing</li>
          <li><strong>Tijdelijke noodsituatie</strong>: na een breuk in de waterleiding of bij overstromingsschade</li>
          <li><strong>Thee en koffie</strong>: voor het bereiden van warme dranken is een waterkoker uiteraard onmisbaar</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een waterfilter noodzakelijk?
        </h2>
        <p className="text-gray-700 mb-4">
          In de volgende situaties schiet een waterkoker tekort en heeft u een osmosefilter nodig:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>PFAS-zone</strong>: woonachtig nabij een industrie- of defensiegebied met PFAS-vervuiling</li>
          <li><strong>Oud huis met loodleidingen</strong>: gebouwen van voor 1960 kunnen loden aansluitingen bevatten; koken lost dit niet op</li>
          <li><strong>Verhoogd nitraat</strong>: in agrarische gebieden met hoge nitraatconcentraties in grondwater</li>
          <li><strong>Baby of zwangere vrouw</strong>: extra gevoelige groepen die baat hebben bij osmosewater</li>
          <li><strong>Chronische blootstelling aan chemicalieen</strong>: dagelijks drinkwater en kookwater dat wordt gebruikt voor pasta, soep en rijst</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bekijk onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> om te bepalen
          welke stoffen in uw regio een risico vormen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De ideale combinatie: osmosefilter + waterkoker
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste huishoudens is de beste oplossing een combinatie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Osmosefilter</strong> voor dagelijks drinkwater, kookwater (pasta, soep, rijst) en het invullen van waterflessen</li>
          <li><strong>Waterkoker</strong> voor thee, koffie en andere warme dranken &mdash; gevuld met osmosewater voor de beste smaak en kalkvrij resultaat</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Overweegt u een stap verder? Een{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">4-in-1 kokend water kraan</Link>{' '}
          met ingebouwd osmosefilter levert tegelijk koud gefilterd water en kookend water uit dezelfde kraan,
          waardoor u de aparte waterkoker overbodig maakt.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters vergelijken</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
