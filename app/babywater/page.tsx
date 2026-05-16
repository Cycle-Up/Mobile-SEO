import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Babywater: welk water is veilig voor flesvoeding en babyvoeding?',
  description:
    'Voor flesvoeding is laag-mineraal water (natrium <20 mg/L, nitraat <10 mg/L) het veiligst. Vergelijking van kraanwater, gefilterd water, osmosewater en flessenbabywater voor baby\'s.',
  alternates: { canonical: 'https://waterfilterplatform.nl/babywater' },
};

const faqItems = [
  {
    q: 'Welk water gebruik ik voor flesvoeding?',
    a: 'Voor flesvoeding kiest u water met natrium onder 20 mg/L en nitraat onder 10 mg/L. In Nederland voldoet kraanwater in de meeste gemeenten aan deze criteria, maar controleer altijd het waterkwaliteitsrapport van uw drinkwaterbedrijf voor uw specifieke regio. Osmosewater is de veiligste keuze: natrium onder 5 mg/L, nitraat onder 1 mg/L, geen lood, geen PFAS. Flessenbabywater (Evian Baby, Vittel Baby) is veilig maar duur. Kook altijd het water (tot minimaal 70 graden Celsius) voor bereiding van flesvoeding.',
  },
  {
    q: 'Is kraanwater veilig voor babyvoeding in Nederland?',
    a: 'In de meeste Nederlandse gemeenten voldoet kraanwater aan de WHO-criteria voor babywater (natrium onder 20 mg/L, nitraat onder 10 mg/L). Echter: in sommige landbouwgebieden is het nitraatgehalte hoger dan aanbevolen. Bij huizen gebouwd voor 1960 kunnen loodleidingen aanwezig zijn die lood afgeven aan het kraanwater (niet veilig voor baby\'s). Controleer altijd het rapport van uw waterbedrijf en laat water testen als u twijfelt aan loodleidingen.',
  },
  {
    q: 'Is osmosewater veilig voor baby\'s?',
    a: 'Ja, osmosewater is veilig voor de bereiding van flesvoeding. Het lage mineralengehalte (TDS onder 50 mg/L) is geen probleem, omdat babymelkpoeder (Nutrilon, Aptamil) alle benodigde mineralen al bevat en is berekend op gebruik met laag-mineraal water. Osmosewater verwijdert PFAS, lood, nitraten, bacterien en medicijnresten voor 95-99%. Kook osmosewater voor gebruik nog wel tot minimaal 70 graden Celsius om eventuele bacterien (Cronobacter in melkpoeder zelf) te doden.',
  },
  {
    q: 'Wat zijn de eisen voor babywater?',
    a: 'Volgens de WHO en Nederlandse richtlijnen moet water voor flesvoeding voldoen aan: natrium (Na) onder 20 mg/L, nitraat (NO3) onder 10 mg/L, fluoride (F) onder 0,7 mg/L, sulfaat (SO4) onder 240 mg/L, lood (Pb) onder 5 microgram/L (WHO 2022-richtlijn), en bacteriologisch veilig (0 kolonievormende eenheden). Flessenwater met de aanduiding "geschikt voor babyvoeding" voldoet aan deze criteria.',
  },
  {
    q: 'Moet ik water koken voor flesvoeding?',
    a: 'Ja, altijd. Koken van water voor flesvoeding is niet primair om het water zelf te steriliseren (Nederlands kraanwater is al bacteriologisch veilig), maar om Cronobacter sakazakii te doden. Deze bacterie kan voorkomen in gedroogd melkpoeder zelf, ook in gesloten verpakkingen. Bereid flesvoeding daarom altijd met water van minimaal 70 graden Celsius: giet kokend water af en koel niet volledig af voor het aanmaken van het poeder. Koel de fles daarna snel af tot drinktemperatuur (circa 37 graden Celsius).',
  },
  {
    q: 'Is flessenbabywater beter dan gefilterd kraanwater?',
    a: 'Flessenbabywater (zoals Evian Baby of Vittel Baby) is gestandaardiseerd laag-mineraal en voldoet aan alle babywatercriteria. Het is echter duur (circa 0,40-0,80 euro per liter) en bij plastic flessen die worden blootgesteld aan warmte kunnen microplastics vrijkomen. Osmosewater is goedkoper (0,02-0,05 euro per liter) en heeft een vergelijkbaar laag mineralenprofiel. Voor incidenteel gebruik of op reis is flessenbabywater handig; voor dagelijks gebruik thuis is osmosewater de betere en zuinigere keuze.',
  },
  {
    q: 'Kan ik water met een filterkan gebruiken voor babyvoeding?',
    a: 'Een filterkan (Brita, PUR) vermindert chloor, kalk en deels lood, maar filtert GEEN nitraat. Als uw kraanwater een verhoogd nitraatgehalte heeft (boven 10 mg/L), biedt een filterkan onvoldoende bescherming voor babyvoeding. Controleer altijd het nitraatgehalte in het waterkwaliteitsrapport van uw drinkwaterbedrijf. In landbouwgebieden met hoge nitraatwaarden: gebruik osmosewater of flessenbabywater in plaats van water uit een filterkan.',
  },
  {
    q: 'Bevat kraanwater te veel natrium voor baby\'s?',
    a: 'In de meeste Nederlandse gemeenten is het natriumgehalte van kraanwater lager dan 20 mg/L, wat voldoet aan de babywaterrichtlijn. Sommige kustgebieden of gebieden met brakke grondwatermenging hebben hogere natriumwaarden (tot 150 mg/L). Controleer het waterrapport van uw waterbedrijf (beschikbaar op de website) voor uw specifieke postcode. Bij twijfel: gebruik osmosewater (natrium onder 5 mg/L) of flessenbabywater.',
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
  headline: 'Babywater: welk water is veilig voor flesvoeding en babyvoeding?',
  description:
    'Voor flesvoeding is laag-mineraal water (natrium onder 20 mg/L, nitraat onder 10 mg/L) het veiligst. Vergelijking van kraanwater, gefilterd water, osmosewater en flessenbabywater.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/babywater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function BabywaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Babywater', item: 'https://waterfilterplatform.nl/babywater' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>Babywater</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Babywater: welk water is veilig voor flesvoeding en babyvoeding?
          </h1>
          <p className="text-gray-700 text-lg">
            Voor flesvoeding kiest u water met natrium &lt;20 mg/L en nitraat &lt;10 mg/L. Osmosewater is de veiligste en goedkoopste keuze voor dagelijks gebruik.
          </p>
        </div>

        <QuickAnswer answer="Voor flesvoeding gebruikt u water met natrium &lt;20 mg/L en nitraat &lt;10 mg/L. Osmosewater is de veiligste keuze: het verwijdert PFAS, lood, nitraten en bacterien voor 95&ndash;99%. Kraanwater is in de meeste Nederlandse gemeenten ook geschikt, maar controleer altijd uw waterrapport. Kook water altijd tot minimaal 70&deg;C voor aanmaak van flesvoeding." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom water voor baby&apos;s anders is
        </h2>
        <p className="text-gray-700 mb-4">
          Baby&apos;s hebben aanzienlijk strengere waterbehoeften dan volwassenen, om twee redenen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Onvolgroeide nieren</strong>: de nieren van een baby zijn nog niet volledig ontwikkeld en kunnen hoge concentraties van mineralen als natrium niet effectief verwerken. Hoog natrium in water kan nierstress veroorzaken.</li>
          <li><strong>Kwetsbaar immuunsysteem</strong>: baby&apos;s zijn gevoeliger voor bacteriele besmetting. Chronische blootstelling aan lage niveaus van nitraten (die bij volwassenen onschadelijk zijn) kan bij baby&apos;s methemoglobinemie veroorzaken &mdash; een aandoening waarbij hemoglobine minder zuurstof kan transporteren.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          WHO-criteria voor babywater vergeleken met Nederlands kraanwater
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Max voor baby</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">NL kraanwater</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Reden</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Natrium (Na&#x207A;)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;150 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Nierstress</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nitraat (NO&#x2083;&#x207B;)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;25 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Methemoglobinemie risico</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Fluoride (F&#x207B;)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,7 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">0,1&ndash;0,3 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Fluorose tandjes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sulfaat (SO&#x2084;&#xB2;&#x207B;)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;240 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">20&ndash;80 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Diarree bij overschrijding</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Lood (Pb&#xB2;&#x207A;)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5 &micro;g/L (WHO 2022)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2 &micro;g/L (netwerk)</td>
                <td className="border border-gray-300 px-3 py-2">Neurotoxisch</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          <strong>Let op:</strong> de waarden voor Nederlands kraanwater zijn gemiddelden voor het waterleidingnet. Bij huizen gebouwd voor 1960 kunnen loden binnenleidingen aanwezig zijn die het loodgehalte aanzienlijk verhogen (tot 50 &micro;g/L of meer). In dat geval is kraanwater NIET geschikt voor babyvoeding zonder osmosefiltratie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking watersoorten voor flesvoeding
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">Beste keuze</span>
              <h3 className="font-semibold text-[#003F5C]">Osmosewater (RO)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Natrium &lt;5 mg/L, nitraat &lt;1 mg/L, lood &lt;0,1 &micro;g/L, geen PFAS. Verwijdert 95&ndash;99% van alle verontreinigingen. Kosten: &euro;0,02&ndash;0,05 per liter. Babymelkpoeder bevat alle benodigde mineralen en is ontworpen voor gebruik met laag-mineraal water. Kook altijd voor gebruik.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">Veilig, duur</span>
              <h3 className="font-semibold text-[#003F5C]">Flessenbabywater (Evian Baby, Vittel Baby)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Gestandaardiseerd laag-mineraal, voldoet aan alle babywatercriteria. Kosten: &euro;0,40&ndash;0,80 per liter. Bij plastic flessen in warmte: risico op microplastics. Voor dagelijks gebruik te duur en milieubelastend.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">Controleer eerst</span>
              <h3 className="font-semibold text-[#003F5C]">Kraanwater (NL, gemiddeld)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              In de meeste gemeenten veilig (natrium 10&ndash;50 mg/L, nitraat 5&ndash;15 mg/L). Controleer uw waterkwaliteitsrapport online via uw waterbedrijf. Bij loodleidingen of landbouwgebied: NIET geschikt zonder extra filtering.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">Niet afdoende</span>
              <h3 className="font-semibold text-[#003F5C]">Gefilterd kraanwater (filterkan)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Vermindert chloor en deels lood, maar filtert GEEN nitraat. Bij verhoogd nitraatgehalte in kraanwater onvoldoende bescherming voor babyvoeding. Controleer altijd het nitraatgehalte van uw kraanwater.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kraanwater koken: lost het probleem op?
        </h2>
        <p className="text-gray-700 mb-4">
          Koken van water doodt bacterien effectief, maar lost het nitraatprobleem NIET op. Bij het koken verdampt water, terwijl de mineralen (inclusief nitraten) in oplossing blijven. Dit betekent dat de nitraatconcentratie in het resterende water na koken hoger is dan voor het koken. Bij hoog nitraat kraanwater is koken dus geen oplossing &mdash; het maakt het probleem zelfs iets erger.
        </p>
        <p className="text-gray-700 mb-6">
          Koken is wel essentieel om Cronobacter sakazakii te doden, een bacterie die voor kan komen in gedroogd melkpoeder. Bereid flesvoeding altijd met water van minimaal 70&deg;C, ook als u osmosewater of flessenbabywater gebruikt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanbeveling voor flesvoeding in Nederland
        </h2>
        <p className="text-gray-700 mb-6">
          De veiligste en meest kosteneffectieve keuze voor dagelijkse bereiding van flesvoeding in Nederland is osmosewater uit een 4-in-1 waterkraan of een onder-aanrecht osmosefilter. Osmosewater kost &euro;0,02&ndash;0,05 per liter (versus &euro;0,40&ndash;0,80 voor flessenbabywater) en levert een betere zuiveringsgraad dan filterkannen. Een gezin dat dagelijks 1 liter flesvoeding bereidt, bespaart &euro;130&ndash;270 per jaar ten opzichte van flessenbabywater.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over babywater en flesvoeding
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
          <Link href="/babywater/welk-water" className="text-[#005F8A] underline">welk water voor flesvoeding</Link>,{' '}
          <Link href="/babywater/osmose" className="text-[#005F8A] underline">osmosewater voor baby</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilter vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
