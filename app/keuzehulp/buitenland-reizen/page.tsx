import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter op reis — beste reisfilter voor drinkwater in het buitenland | WaterfilterPlatform',
  description: 'Welk reisfilter heeft u nodig voor veilig drinkwater in het buitenland? Vergelijk LifeStraw, Sawyer, SteriPen UV en filterfles per reistype en bestemming.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keuzehulp/buitenland-reizen' },
  openGraph: {
    title: 'Waterfilter op reis — beste reisfilter voor drinkwater in het buitenland',
    description: 'Welk reisfilter heeft u nodig voor veilig drinkwater in het buitenland? Vergelijk LifeStraw, Sawyer, SteriPen UV en filterfles.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Verwijdert een LifeStraw ook virussen?',
    answer: 'De standaard LifeStraw Personal verwijdert bacterien (99,9999%) en protozoa (99,9%) maar GEEN virussen. De LifeStraw Go 2-stage en LifeStraw Peak Series Plus hebben een extra ionenwisselingstap die ook virussen verwijdert (99,999%). Voor bestemmingen in Afrika, Azie en Latijns-Amerika waar enterovirussen en hepatitis-A voorkomen, is de versie met virusverwijdering noodzakelijk.',
  },
  {
    question: 'Wat is het verschil tussen een SteriPen en een mechanisch filter?',
    answer: 'Een SteriPen gebruikt UV-C licht om het DNA van micro-organismen te beschadigen, zodat ze zich niet meer kunnen vermenigvuldigen. Het doodt bacterien, virussen en protozoa in 60-90 seconden. Een mechanisch filter (LifeStraw, Sawyer) verwijdert deeltjes fysiek via een membraan. UV werkt niet in troebel water (deeltjes blokkeren het licht); mechanische filters werken niet betrouwbaar tegen virussen tenzij ze zijn gecombineerd met ionenwisseling. Voor troebel water: eerst filtren, dan UV.',
  },
  {
    question: 'Zijn drinkwatertabletten voldoende als noodoplossing?',
    answer: 'Chloor- of jodiumtabletten zijn een goede noodoplossing en voldoende voor korte perioden. Ze doden bacterien en de meeste virussen effectief. Nadelen: ze werken minder goed in koud of troebel water, sommige protozoa (Cryptosporidium) zijn chloorresistent, en bij langdurig gebruik van jodium zijn er gezondheidsrisicos (schildklier). Voor meerdaagse treks wordt een mechanisch filter in combinatie met tabletten als backup aanbevolen.',
  },
  {
    question: 'Welk filter is het beste voor een backpackreis door Zuidoost-Azie?',
    answer: 'In Zuidoost-Azie is het risico op virussen (hepatitis A, norovirus) reeel, naast bacteriele verontreinigingen. Aanbevolen opties: (1) Sawyer Squeeze met virusfilter of LifeStraw Peak Plus voor mechanische virussverwijdering, (2) SteriPen als aanvulling op een mechanisch filter voor virussen. Alternatief: gefilterd water kopen in grote flessen (19L) en eigen filterfles gebruiken voor dagelijks gebruik. Kraanwater direct drinken wordt afgeraden in de meeste landen in de regio.',
  },
  {
    question: 'Is een filterfles geschikt voor stedelijke reizen in Europa?',
    answer: 'In West- en Noord-Europa is leidingwater overal veilig; een filterfles is er niet nodig voor veiligheid. In Oost-Europa en Turkije is leidingwater doorgaans veilig, maar kan een slechte smaak hebben door chloor; een filterfles met actief kool verbetert de smaak. Buiten Europa, in landen met wisselende waterkwaliteit, biedt een filterfles (LifeStraw Go, GRAYL Geopress) handige bescherming voor dagelijks gebruik.',
  },
];

const risicotabel = [
  { regio: 'West-Europa, Noord-Europa', risico: 'Laag', aanbevolen: 'Geen filter nodig', opmerking: 'Leidingwater altijd veilig' },
  { regio: 'Oost-Europa, Balkan', risico: 'Laag-matig', aanbevolen: 'Filterfles (smaak)', opmerking: 'Kwaliteit varieert per land' },
  { regio: 'Noord-Afrika, Turkije', risico: 'Matig', aanbevolen: 'Filterfles of tabletten', opmerking: 'Bacterien mogelijk' },
  { regio: 'Sub-Sahara Afrika', risico: 'Hoog', aanbevolen: 'LifeStraw/Sawyer + UV', opmerking: 'Virussen en bacterien' },
  { regio: 'Zuidoost-Azie', risico: 'Hoog', aanbevolen: 'LifeStraw Peak Plus of UV', opmerking: 'Virussen aanwezig' },
  { regio: 'Zuid-Azie (India, Nepal)', risico: 'Hoog', aanbevolen: 'Mechanisch + UV of GRAYL', opmerking: 'Hepatitis A risico' },
  { regio: 'Latijns-Amerika', risico: 'Matig-hoog', aanbevolen: 'LifeStraw/Sawyer + UV', opmerking: 'Varieert sterk per land' },
  { regio: 'Wildtrekken (bergen)', risico: 'Matig', aanbevolen: 'Sawyer Squeeze of LifeStraw', opmerking: 'Protozoa in oppervlaktewater' },
];

export default function BuitenlandReizenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Keuzehulp', item: 'https://waterfilterplatform.nl/keuzehulp' },
              { '@type': 'ListItem', position: 3, name: 'Reizen', item: 'https://waterfilterplatform.nl/keuzehulp/buitenland-reizen' },
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
            headline: 'Waterfilter op reis — beste reisfilter voor drinkwater in het buitenland',
            description: 'Welk reisfilter heeft u nodig voor veilig drinkwater in het buitenland? Vergelijk LifeStraw, Sawyer, SteriPen UV en filterfles.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/keuzehulp/buitenland-reizen',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keuzehulp">Keuzehulp</Link> &rsaquo; Reizen
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Waterfilter op reis — beste reisfilter voor drinkwater in het buitenland
          </h1>
          <QuickAnswer answer="Voor backpacken en wildtrekken zijn LifeStraw of Sawyer Squeeze (mechanisch, UF membraan) het meest praktisch: licht, geen stroom nodig, effectief tegen bacterien en protozoa. Op tropische bestemmingen met virusrisico heeft u aanvullend een UV-filter (SteriPen) nodig. Een filterfles (GRAYL Geopress) combineert beide en is geschikt voor stedelijke reizen." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Risicos per reisbestemming</h2>
          <p className="text-gray-700 mb-4">
            De WHO classificeert drinkwaterrisicos per regio. De voornaamste gevaren zijn bacteriele verontreinigingen (E. coli, Salmonella, Campylobacter), protozoa (Giardia, Cryptosporidium) en virussen (hepatitis A, norovirus, rotavirus). In West-Europa en Noord-Amerika is leidingwater vrijwel altijd veilig zonder filtering.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Regio</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Risico</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Aanbevolen filter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Opmerking</th>
                </tr>
              </thead>
              <tbody>
                {risicotabel.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-300 px-3 py-2">{row.regio}</td>
                    <td className={`border border-gray-300 px-3 py-2 font-medium ${row.risico === 'Hoog' ? 'text-red-600' : row.risico.startsWith('Matig') ? 'text-yellow-600' : 'text-green-700'}`}>{row.risico}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.aanbevolen}</td>
                    <td className="border border-gray-300 px-3 py-2 text-gray-500">{row.opmerking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Filtertypen voor op reis</h2>

          <div className="space-y-5">
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="text-lg font-semibold text-[#003F5C] mb-1">LifeStraw / Sawyer Squeeze — wandelen en backpacken</h3>
              <p className="text-gray-700 text-sm mb-2">
                Beide werken via een hollow fiber UF-membraan (0,1 micron) en verwijderen bacterien (99,9999%) en protozoa (99,9%). Gewicht: 20-100 gram. Geen stroom, geen chemicalien, makkelijk backflushen. <strong>Nadeel:</strong> geen virusverwijdering in standaardversie. Sawyer Squeeze heeft een hogere doorstroomcapaciteit dan LifeStraw Personal. Levensduur: 100.000-2.000.000 liter afhankelijk van het model.
              </p>
              <p className="text-gray-500 text-xs">Ideaal voor: EU-bergwandelen, Noord-Amerika, Nieuw-Zeeland, lage virusregio's</p>
            </div>

            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="text-lg font-semibold text-[#003F5C] mb-1">SteriPen (UV-C) — snel en effectief tegen virussen</h3>
              <p className="text-gray-700 text-sm mb-2">
                De SteriPen behandelt een halve liter water in 60 seconden en een liter in 90 seconden met UV-C licht (254 nm). Dit beschadigt het DNA van bacterien, virussen en protozoa zodat ze zich niet kunnen vermenigvuldigen. <strong>Effectief tegen alle drie de categorieen,</strong> inclusief virussen die mechanische filters missen. <strong>Nadeel:</strong> werkt niet in troebel water (deeltjes absorberen UV); vereist batterijen of opladen.
              </p>
              <p className="text-gray-500 text-xs">Ideaal voor: tropische bestemmingen, stedelijk gebruik, aanvulling op mechanisch filter</p>
            </div>

            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="text-lg font-semibold text-[#003F5C] mb-1">Filterfles (GRAYL Geopress, LifeStraw Go) — dagelijks gebruik stedelijke reizen</h3>
              <p className="text-gray-700 text-sm mb-2">
                Filterflessen combineren filtering en drinkfunctie in een compacte fles. GRAYL Geopress gebruikt een persfilter die bacterien, virussen en protozoa verwijdert (NSF-gecertificeerd voor alle drie). Inhoud: 710 ml, persduur 8 seconden. Filtervervanging: EUR 25-35 na circa 300 liter. LifeStraw Go heeft een 2-stage filter (UF + actief kool) maar geen virusverwijdering in de basisversie.
              </p>
              <p className="text-gray-500 text-xs">Ideaal voor: stedelijke reizen, hotels met twijfelachtig water, dagelijkse bescherming onderweg</p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-[#003F5C] mb-1">Tabletten (chloor/jodium) — noodoplossing</h3>
              <p className="text-gray-700 text-sm mb-2">
                Chloor- of jodiumtabletten zijn de lichtste en goedkoopste optie (EUR 5-10 voor 50 tabletten). Ze doden bacterien en de meeste virussen. <strong>Beperkingen:</strong> Cryptosporidium is chloorresistent, werking vermindert in koud/troebel water, wachttijd 30 minuten, smaak onaangenaam. Gebruik als backup-optie naast een mechanisch filter, niet als primaire oplossing voor langere reizen.
              </p>
              <p className="text-gray-500 text-xs">Ideaal voor: noodkit, backup als filter uitvalt, korte incidentele situaties</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Virussen: het cruciale onderscheid</h2>
          <p className="text-gray-700 mb-4">
            Het grootste misverstand bij reisfilters is dat een mechanisch filter alle gevaren wegneemt. Standaard hollow fiber UF-filters (LifeStraw Personal, Sawyer Squeeze, Katadyn Befree) verwijderen bacterien en protozoa, maar <strong>geen virussen.</strong> Virussen zijn 20-300 nm groot, kleiner dan de poriemaat van UF-membranen.
          </p>
          <p className="text-gray-700 mb-4">
            In gebieden met hoog virusrisico (Zuidoost-Azie, Zuid-Azie, Sub-Sahara Afrika, Latijns-Amerika) heeft u een van de volgende opties nodig:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>SteriPen UV-filter in combinatie met een mechanisch filter (gooit UV-gefilterd water door het mechanische filter nadat visuele heldere toestand is bereikt)</li>
            <li>GRAYL Geopress (persfilter met virusverwijdering via ionenwisseling)</li>
            <li>LifeStraw Peak Series Plus of Sawyer Squeeze met virusfilter</li>
            <li>MSR Guardian (pompfilter, verwijdert virussen)</li>
            <li>Tabletten als aanvulling op mechanisch filter</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Vergelijkingstabel reisfilters</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Filter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Bacterien</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Protozoa</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Virussen</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Gewicht</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">LifeStraw Personal</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2">29 g</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 15-25</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Sawyer Squeeze</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2">84 g</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 30-45</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">SteriPen Adventurer</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2">90 g</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 60-100</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">GRAYL Geopress</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2">350 g</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 75-100</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Chloor tabletten</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Gedeeltelijk</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2">&lt;10 g</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 5-10</td>
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
            <li><Link href="/reisfilter" className="text-[#005F8A] hover:underline">Reisfilter overzicht: alle reisfilters vergeleken</Link></li>
            <li><Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] hover:underline">Ultrafiltratie: hoe werkt een UF-membraan?</Link></li>
            <li><Link href="/uv-filter" className="text-[#005F8A] hover:underline">UV-filter: desinfectie zonder chemicalien</Link></li>
            <li><Link href="/keuzehulp" className="text-[#005F8A] hover:underline">Terug naar keuzehulp overzicht</Link></li>
          </ul>
        </div>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
