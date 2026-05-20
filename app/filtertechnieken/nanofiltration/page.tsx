import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Nanofiltration (NF) — tussen ultrafiltratie en omgekeerde osmose | WaterfilterPlatform',
  description: 'Nanofiltration filtert 0,001-0,01 micron: verwijdert waterhardheid, pesticiden en kleurstoffen maar houdt natrium door. Hogere doorvoer en minder afvalwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filtertechnieken/nanofiltration' },
  openGraph: {
    title: 'Nanofiltration (NF) — tussen ultrafiltratie en omgekeerde osmose',
    description: 'Nanofiltration filtert 0,001-0,01 micron: verwijdert waterhardheid, pesticiden en kleurstoffen maar houdt natrium door.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen nanofiltratie en omgekeerde osmose?',
    answer: 'Nanofiltratie (NF) heeft een iets grotere poriemaat (0,001-0,01 micron) dan omgekeerde osmose (RO, 0,0001 micron). NF houdt multivalente ionen (Ca2+, Mg2+, sulfaat) grotendeels tegen maar laat monovalente ionen (Na+, Cl-, K+) voor een aanzienlijk deel door. Resultaat: NF verzacht water en verwijdert pesticiden, maar het productwater bevat nog natrium en kalium. RO verwijdert vrijwel alle opgeloste stoffen (95-99%), inclusief natrium. NF heeft hogere doorvoersnelheid en produceert minder afvalwater dan RO.',
  },
  {
    question: 'Verwijdert nanofiltration ook PFAS?',
    answer: 'Nanofiltratie verwijdert PFAS gedeeltelijk: 50-80% voor langketenige PFAS (PFOS, PFOA) en minder effectief voor kortketenige varianten (PFBS, PFHxS). Dit is meer dan ultrafiltratie (minder dan 10%) maar minder betrouwbaar dan omgekeerde osmose (95-99%). Voor drinkwater waarbij PFAS een zorg is, is RO de veiligste keuze.',
  },
  {
    question: 'Kan een nanofilter worden gebruikt als waterontharder?',
    answer: 'Ja, nanofiltratie verwijdert 60-90% van de hardheidsionen (Ca2+, Mg2+), wat neerkomt op significante verzachting. In de waterbereiding wordt NF gebruikt voor ontharding zonder zout, als alternatief voor ionenwisseling. Thuis zijn NF-systemen voor onthardering minder gangbaar dan RO omdat de aanschafkosten vergelijkbaar zijn terwijl RO breder filtert. NF heeft als voordeel dat het mineraalbalans in het water beter behoudt dan RO.',
  },
  {
    question: 'Hoe wordt nanofiltratie gebruikt bij drinkwaterbedrijven?',
    answer: 'Drinkwaterbedrijven gebruiken NF als behandelingsstap voor de verwijdering van kleurstoffen (humuszuren), pesticiden en hardheidsionen uit grond- en oppervlaktewater. NF is hiervoor energiezuiniger dan RO door de lagere benodigde druk (3-10 bar vs 5-15 bar bij RO). In combinatie met UV-desinfectie levert NF drinkwaterkwaliteit zonder de volledige demineralisatie die RO geeft.',
  },
  {
    question: 'Wat is de benodigde druk voor een nanofilter thuis?',
    answer: 'NF-systemen vereisen een werkdruk van 3-10 bar. Normaal leidingwater in Nederland heeft een druk van 3-6 bar, wat voor veel NF-systemen voldoende is zonder boosterpomp. Bij lagere druk of bij gebruik van bepaalde NF-membranen kan een boosterpomp nodig zijn (kosten: EUR 50-150 extra). Dit verschilt van RO dat vaker een boosterpomp nodig heeft vanwege de hogere weerstand van het dichtere membraan.',
  },
];

export default function NanofiltrationPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Filtertechnieken', item: 'https://waterfilterplatform.nl/filtertechnieken' },
              { '@type': 'ListItem', position: 3, name: 'Nanofiltration', item: 'https://waterfilterplatform.nl/filtertechnieken/nanofiltration' },
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
            headline: 'Nanofiltration (NF) — tussen ultrafiltratie en omgekeerde osmose',
            description: 'Nanofiltration filtert 0,001-0,01 micron: verwijdert waterhardheid, pesticiden en kleurstoffen maar houdt natrium door.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/filtertechnieken/nanofiltration',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/filtertechnieken">Filtertechnieken</Link> &rsaquo; Nanofiltration
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Nanofiltration (NF) — tussen ultrafiltratie en omgekeerde osmose
          </h1>
          <QuickAnswer answer="Nanofiltratie (NF) heeft een poriemaat van 0,001-0,01 micron en verwijdert hardheidsionen (Ca/Mg), pesticiden en kleurstoffen, maar laat monovalente ionen zoals natrium en kalium grotendeels door. NF heeft een hogere doorvoer en produceert minder afvalwater dan omgekeerde osmose, en wordt gebruikt voor onthardering zonder zout en bij drinkwaterbedrijven." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat is nanofiltratie?</h2>
          <p className="text-gray-700 mb-4">
            Nanofiltratie (NF) is een membraanfiltratieprocede dat valt tussen ultrafiltratie (UF) en omgekeerde osmose (RO) in de hierarchie van membraantechnieken. De poriemaat van NF-membranen ligt op 0,001 tot 0,01 micrometer (1 tot 10 nanometer), wat correspondeert met een molecuulgewichtgrens (MWCO) van 200 tot 2000 dalton.
          </p>
          <p className="text-gray-700 mb-4">
            De selectiviteit van NF-membranen is gebaseerd op twee mechanismen: grootte-uitsluiting (deeltjes groter dan de poriemaat worden tegengehouden) en ladingsinteractie (het membraanoppervlak heeft een negatieve lading die multivalente negatieve ionen zoals sulfaat en fosfaat afstoot, terwijl monovalente ionen als chloor en natrium makkelijker doorlaten).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat NF verwijdert en wat het doorlaat</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 mb-2">NF verwijdert WEL</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Hardheidsionen Ca2+ en Mg2+ (60-90%)</li>
                <li>Sulfaat SO42- (95%+)</li>
                <li>Pesticiden en herbiciden (85-99%)</li>
                <li>Kleurstoffen en humuszuren (humics)</li>
                <li>Bacterien en protozoa (100%)</li>
                <li>Virussen (99%+)</li>
                <li>Grotere organische moleculen boven MWCO</li>
                <li>Microplastics</li>
              </ul>
            </div>
            <div className="border border-orange-200 bg-orange-50 rounded-xl p-4">
              <h3 className="font-semibold text-orange-800 mb-2">NF laat DOOR (gedeeltelijk)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Natrium Na+ (50-70% doorlaat)</li>
                <li>Kalium K+ (50-70% doorlaat)</li>
                <li>Chloor Cl- (50-70% doorlaat)</li>
                <li>Nitraat NO3- (30-60% doorlaat)</li>
                <li>Kortketenige PFAS (20-50% doorlaat)</li>
                <li>Boor (onvolledig tegengehouden)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Nanofiltratie voor onthardering zonder zout</h2>
          <p className="text-gray-700 mb-4">
            Een van de meest interessante toepassingen van NF is wateronthardering zonder het gebruik van regeneratiezout. Traditionele ionenwisselaars (waterontharders) vervangen calcium en magnesium door natrium en moeten periodiek worden geregenereerd met zoutoplossing. NF verwijdert hardheidsionen fysiek via het membraan, zonder dat natrium wordt toegevoegd aan het product.
          </p>
          <p className="text-gray-700 mb-4">
            Resultaat: NF-permeaat is zachter water (hardheidsreductie 60-90%) maar behoudt een gezond gehalte aan mineralen en een neutrale smaak. Dit in tegenstelling tot RO-water dat vrijwel mineraalvrij is. Voor mensen die zachter drinkwater willen zonder volledig gedestilleerde smaak is NF aantrekkelijker dan RO.
          </p>
          <p className="text-gray-700 mb-4">
            Thuis zijn NF-systemen voor onthardering minder gebruikelijk dan in de industrie, deels omdat de aanschafkosten vergelijkbaar zijn met RO-systemen terwijl RO een breder filterspectrum biedt. Op de markt zijn compacte NF-systemen beschikbaar voor EUR 400-1000.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Nanofiltratie bij drinkwaterbedrijven</h2>
          <p className="text-gray-700 mb-4">
            Meerdere Nederlandse drinkwaterbedrijven passen nanofiltratie toe als behandelingsstap, met name voor grondwater dat hoge concentraties humuszuren (bruinkleuring), pesticiden of hardheidsionen bevat. NF verwijdert deze stoffen effectief met minder energieverbruik dan RO dankzij de lagere benodigde druk.
          </p>
          <p className="text-gray-700 mb-4">
            In de waterbereiding wordt NF doorgaans gecombineerd met ozonisatie, zandfiltratie en UV-desinfectie om tot drinkwaterkwaliteit te komen. De grotere doorlaat van monovalente ionen (natrium, kalium) is in dit context een voordeel: het water behoudt een goede mineralenbalans en een aangenamer smaakprofiel dan volledig gedemineraliseerd RO-water.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Vergelijking NF vs UF vs RO</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Ultrafiltratie (UF)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Nanofiltratie (NF)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Omgekeerde osmose (RO)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Poriemaat</td>
                  <td className="border border-gray-300 px-3 py-2">0,01-0,1 micron</td>
                  <td className="border border-gray-300 px-3 py-2">0,001-0,01 micron</td>
                  <td className="border border-gray-300 px-3 py-2">0,0001 micron</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Hardheid (Ca/Mg)</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">0%</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">60-90%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">90-97%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Natrium/kalium</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Volledig doorlaat</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">50-70% doorlaat</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">5-10% doorlaat</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Pesticiden</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">&lt;10%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">85-99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">PFAS</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">&lt;10%</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">50-80%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">0%</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">30-60%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">85-95%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Benodigde druk</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">&lt;1 bar</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">3-10 bar</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">5-15 bar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Afvalwater</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">&lt;5%</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">15-30%</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">40-75%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Kosten systeem</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 100-400</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 400-1000</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 300-900</td>
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
            <li><Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] hover:underline">Ultrafiltratie (UF): hollow fiber membraan</Link></li>
            <li><Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose: complete gids</Link></li>
            <li><Link href="/filtertechnieken/vergelijking" className="text-[#005F8A] hover:underline">Filtertechnieken vergelijken: overzichtstabel</Link></li>
            <li><Link href="/filtertechnieken" className="text-[#005F8A] hover:underline">Terug naar filtertechnieken overzicht</Link></li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS verwijdering met nanofiltratie</h3>
              <p className="text-sm text-gray-600">Hoe nanofiltratie PFAS, pesticiden en moleculen onder 1 nm tegenhoudt zonder volledige demineralisatie.</p>
            </Link>
            <Link href="/pfas-waterfilter/vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS-filters vergelijken</h3>
              <p className="text-sm text-gray-600">RO, nanofiltration, actief kool en pitcher: verwijderingspercentages per PFAS-soort vergeleken.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF 58: keurmerk membraanfilters</h3>
              <p className="text-sm text-gray-600">Wat NSF 58 betekent voor membraanfiltratie inclusief nanofiltratie en RO.</p>
            </Link>
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter gids</h3>
              <p className="text-sm text-gray-600">Complete gids: welk filtertype kiest u voor PFAS-verwijdering thuis?</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
