import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Keramisch waterfilter — diatomeeenaarde en zilverbehandeling | WaterfilterPlatform',
  description: 'Hoe werkt een keramisch waterfilter? Poriemaat 0,2-0,5 micron filtert bacterien en protozoa. Zilverbehandeling, types (Berkey, kaars) en vergelijking met UF en RO.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filtertechnieken/keramisch' },
  openGraph: {
    title: 'Keramisch waterfilter — diatomeeenaarde en zilverbehandeling',
    description: 'Hoe werkt een keramisch waterfilter? Poriemaat 0,2-0,5 micron, zilverbehandeling, types en vergelijking met UF en RO.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Filtert een keramisch waterfilter ook virussen?',
    answer: 'Nee. Standaard keramische filters hebben een poriemaat van 0,2-0,5 micron. Virussen zijn 20-300 nanometer (0,02-0,3 micron) groot, wat kleiner is dan of gelijk aan de kleinste keramische porieen. Een keramisch filter biedt GEEN betrouwbare virusverwijdering. Voor virusverwijdering heeft u ultrafiltratie (0,02 micron, beperkt), nanofiltratie of omgekeerde osmose nodig. In Europa is het risico op virussen in leidingwater verwaarloosbaar; bij putwater of reizen is dit aandachtspunt relevanter.',
  },
  {
    question: 'Hoe werkt de zilverbehandeling in een keramisch filter?',
    answer: 'Keramische filters worden vaak geimpregneerd met zilver (als zilvernitraat of colloidal zilver). Zilver heeft antibacteriele eigenschappen: zilverionen verstoren de celwand van bacterien en remmen hun reproductie. De zilverbehandeling dient niet als primair filtermechanisme maar voorkomt bacteriegroei (biofilm) in en op het keramische filtermedium zelf. Zonder zilverbehandeling kan een bacterievrij filterkeramiek na verloop van tijd zelf een bron van bacteriebesmetting worden.',
  },
  {
    question: 'Hoe lang gaat een keramisch filter mee?',
    answer: 'Keramische filterkaars (zoals de Doulton of Berkey Sterasyl) gaan 1000-10.000 liter mee afhankelijk van de waterkwaliteit. Bij vervuild water verstoppen ze sneller. Het keramiek kan worden schoongemaakt door het voorzichtig te borstelen onder koud stromend water; hierdoor wordt de buitenlaag met aangehechte deeltjes verwijderd en de doorstroomsnelheid hersteld. Gemiddeld gaat een kaars 6-24 maanden bij normaal gebruik. Gooi een keramische kaars weg als er scheurtjes of beschadigingen zichtbaar zijn, omdat deze het filtervlies doorbreken.',
  },
  {
    question: 'Wat is het verschil tussen een Berkey-filter en een gewone keramische kaars?',
    answer: 'De Berkey-filters (Big Berkey, Royal Berkey) zijn zwaartekrachtfilters met een bovenste en onderste kamer. Ze gebruiken zwarte koolstof-keramische filterelementen (Black Berkey) die naast bacterien en protozoa ook chloor, zware metalen en sommige chemicalien verwijderen via actief kool in de kern. Dit maakt Berkey een combinatiefilter. Standaard keramische kaarsen (Doulton, Katadyn Ceradyn) filteren alleen op poriemaat. Berkey-filters zijn populair in de off-grid en noodvoorbereiding gemeenschap omdat ze op zwaartekracht werken zonder druk of stroom.',
  },
  {
    question: 'Is een keramisch filter geschikt voor putwater?',
    answer: 'Een keramisch filter is geschikt voor putwater met bacteriele of protozoaire verontreiniging. Het filtert E. coli, enterococcen, Giardia en Cryptosporidium effectief. Beperkingen: virussen worden niet verwijderd, en chemische verontreinigingen (nitraat, pesticiden, zware metalen) passeren het keramiek. Laat putwater altijd chemisch analyseren. Als er nitraat boven 50 mg/L, lood of PFAS wordt aangetroffen, is aanvullende filtratie (osmose, ionenwisseling) noodzakelijk naast het keramische filter.',
  },
];

export default function KeramischPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Filtertechnieken', item: 'https://waterfilterplatform.nl/filtertechnieken' },
              { '@type': 'ListItem', position: 3, name: 'Keramisch filter', item: 'https://waterfilterplatform.nl/filtertechnieken/keramisch' },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
          {
            '@type': 'Article',
            headline: 'Keramisch waterfilter — diatomeeenaarde en zilverbehandeling',
            description: 'Hoe werkt een keramisch waterfilter? Poriemaat 0,2-0,5 micron, zilverbehandeling, types en vergelijking met UF en RO.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/filtertechnieken/keramisch',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/filtertechnieken">Filtertechnieken</Link> &rsaquo; Keramisch filter
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Keramisch waterfilter — diatomeeenaarde en zilverbehandeling
          </h1>
          <QuickAnswer answer="Een keramisch filter heeft een poriemaat van 0,2-0,5 micron en filtert bacterien (99,99%) en protozoa (100%) effectief. Virussen worden NIET verwijderd — ze zijn kleiner dan de porieen. Zilverbehandeling voorkomt bacteriegroei in het filtermedium. Keramische filters werken zonder druk (zwaartekracht), gaan lang mee maar hebben een lage doorstroomsnelheid." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Hoe werkt een keramisch filter?</h2>
          <p className="text-gray-700 mb-4">
            Keramische waterfilters bestaan uit gebakken aardemateriaal — traditioneel diatomeeenaarde (gefossiliseerde algenresten) of keramische aluminium-silicaatmengsels. Het materiaal wordt op hoge temperatuur gesinterd om een rigide structuur te vormen met miljoenen kleine porieen van uniforme grootte: doorgaans 0,2 tot 0,5 micrometer.
          </p>
          <p className="text-gray-700 mb-4">
            Water filtert door het keramiek heen via zwaartekracht of druk. Deeltjes, bacterien en protozoa die groter zijn dan de poriemaat worden mechanisch tegengehouden. De nauwkeurigheid van de filtering is afhankelijk van de poriemaat en de integriteit van het keramiek: een scheurtje of barst doorbreekt de filterfunctie volledig.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Zilverbehandeling: antibacterieel mechanisme</h2>
          <p className="text-gray-700 mb-4">
            Keramische filters worden vrijwel altijd voorzien van een zilverbehandeling. De meest gebruikte methode is het impregneren van het keramiek met zilvernitraat (AgNO3) of colloidal zilver voor het bakken, zodat zilverdeeltjes homogeen verdeeld zijn door het keramische materiaal.
          </p>
          <p className="text-gray-700 mb-4">
            Zilverionen (Ag+) die langzaam van het oppervlak loskomen, verstoren de celwand en het respiratiesysteem van bacterien. Dit voorkomt dat bacterien die op het filteroppervlak worden vastgehouden, zich gaan vermenigvuldigen en door het filter heengroeien (biofilm-vorming). De zilverconcentratie in het doorgelaten water is te laag om gezondheidsrisicos te vormen en voldoet aan drinkwaternormen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Types keramische filters</h2>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Zwaartekrachtfilter (Berkey-stijl)</h3>
          <p className="text-gray-700 mb-4">
            Zwaartekrachtfilters zoals de Berkey-serie bestaan uit een bovenste kamer (vul-kamer) en een onderste kamer (bewaar-kamer). Water zakt langzaam door de filterelementen. Voordelen: geen stroom nodig, geen druk, hoge capaciteit (8-22 liter per dag afhankelijk van model en aantal filters), compact en portable. Nadelen: langzame doorstroomsnelheid (1-3 liter per uur per filter), de bovenste kamer moet handmatig worden gevuld.
          </p>
          <p className="text-gray-700 mb-4">
            De Berkey-filters gebruiken Black Berkey-elementen die naast keramische filtratie ook actief kool bevatten voor chloor-, geur- en smaakverwijdering. Dit maakt het een combinatiefilter met breder toepassingsgebied dan zuiver keramisch.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2 mt-4">Keramische kaarsvorm (Doulton, Katadyn)</h3>
          <p className="text-gray-700 mb-4">
            Keramische kaarsen zijn cilindrische of kaarsgewijze filterlichamen die in een housingsysteem worden geplaatst. Ze worden op de waterleiding aangesloten (met leidingwaterdruk) of gebruikt in zwaartekrachtsystemen. Merken als Doulton (Brits, al meer dan 180 jaar), Katadyn en Rainfresh produceren kaarsen met NSF-certificering. Kaarsen zijn vervangbaar zonder dat het housingssysteem wordt gewisseld.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Voordelen en nadelen van keramische filtering</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 mb-2">Voordelen</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Geen druk of stroom nodig (zwaartekracht)</li>
                <li>Lange levensduur (1000-10.000 liter per element)</li>
                <li>Reinigbaar met borstel (levensduur verlenging)</li>
                <li>Effectief tegen bacterien (99,99%) en protozoa (100%)</li>
                <li>Laag onderhoud, robuust</li>
                <li>Off-grid en noodgebruik geschikt</li>
              </ul>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 mb-2">Nadelen</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>GEEN virusverwijdering</li>
                <li>Langzame doorstroomsnelheid</li>
                <li>Geen verwijdering van opgeloste stoffen (PFAS, nitraat, lood)</li>
                <li>Kwetsbaar voor barsten/scheuren</li>
                <li>Grotere systemen nemen ruimte in</li>
                <li>Zilver kan uitlogen bij ouder filter</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Vergelijking: keramisch vs UF vs RO</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Keramisch</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Ultrafiltratie (UF)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Omgekeerde osmose (RO)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Poriemaat</td>
                  <td className="border border-gray-300 px-3 py-2">0,2-0,5 micron</td>
                  <td className="border border-gray-300 px-3 py-2">0,01-0,1 micron</td>
                  <td className="border border-gray-300 px-3 py-2">0,0001 micron</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Bacterien</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%+</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%+</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Virussen</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Grote virussen</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%+</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Protozoa</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">100%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">100%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">100%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">PFAS</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Druk nodig</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Nee (zwaartekracht)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Leidingdruk</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">5-15 bar (pomp)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Kosten</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 50-300</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 100-400</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 300-900</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Off-grid geschikt</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Gedeeltelijk</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003F5C] cursor-pointer">{item.question}</summary>
                <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/keramisch-filter" className="text-[#005F8A] hover:underline">Keramisch filter: kopen en vergelijken</Link></li>
            <li><Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] hover:underline">Ultrafiltratie (UF): hoe werkt het?</Link></li>
            <li><Link href="/filtertechnieken/vergelijking" className="text-[#005F8A] hover:underline">Alle filtertechnieken vergelijken</Link></li>
            <li><Link href="/filtertechnieken" className="text-[#005F8A] hover:underline">Terug naar filtertechnieken overzicht</Link></li>
          </ul>
        </div>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
