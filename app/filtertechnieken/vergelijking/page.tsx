import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Filtertechnieken vergelijken — welke technologie verwijdert wat? | WaterfilterPlatform',
  description: 'Grote vergelijkingstabel: actief kool, sediment, UF, NF, osmose, UV, ionenwisseling en keramisch vs chloor, bacterien, PFAS, nitraat, kalk en meer.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filtertechnieken/vergelijking' },
  openGraph: {
    title: 'Filtertechnieken vergelijken — welke technologie verwijdert wat?',
    description: 'Grote vergelijkingstabel: actief kool, sediment, UF, NF, osmose, UV, ionenwisseling en keramisch vs chloor, bacterien, PFAS, nitraat, kalk en meer.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter verwijdert PFAS het beste?',
    answer: 'Omgekeerde osmose (RO) is de meest effectieve methode voor PFAS-verwijdering: 95-99% voor zowel lang- als kortketenige PFAS. Actief kool met een hoog-kwaliteit CTO-blokfilter verwijdert 60-90% van langketenige PFAS (PFOS, PFOA) maar minder van kortketenige varianten (PFBS, PFHxS). Nanofiltratie verwijdert 50-80%. Ultrafiltratie, sedimentfilter, UV en ionenwisseling verwijderen vrijwel geen PFAS. Voor betrouwbare PFAS-bescherming is osmose de enige gecertificeerde keuze.',
  },
  {
    question: 'Welk filter verwijdert bacterien en virussen tegelijk?',
    answer: 'Voor gelijktijdige verwijdering van bacterien, virussen en protozoa zijn er drie opties: (1) Omgekeerde osmose (RO) - verwijdert alle drie voor 99,99%+. (2) UV-filter - desinfecteert water door DNA-beschadiging, effectief voor alle drie mits het water helder is. (3) Nanofiltration (NF) - verwijdert bacterien en virussen voor 99,99%+. Ultrafiltratie verwijdert bacterien en protozoa goed maar grote virussen slechts gedeeltelijk. Sedimentfilter, actief kool en ionenwisseling verwijderen geen micro-organismen.',
  },
  {
    question: 'Verwijdert actief kool ook nitraat?',
    answer: 'Nee. Actief kool werkt via adsorptie van organische moleculen en gassen, maar nitraat (NO3-) is een klein anorganisch ion dat niet wordt geadsorbeerd. Ionenwisseling (specifiek anionenwisseling) is de meest effectieve methode voor nitraatverwijdering: 85-95%. Osmose verwijdert ook nitraat voor 85-95%. Nanofiltratie verwijdert 30-60%. Voor drinkwater boven de nitraatnorm (50 mg/L, of 10 mg/L voor zuigelingen) is osmose of ionenwisseling vereist.',
  },
  {
    question: 'Wat is de gouden combinatie voor maximale waterkwaliteit?',
    answer: 'De meest complete bescherming biedt een combinatie van: sedimentfilter (pre-filter voor zwevende deeltjes) + actief koolfilter (chloor, organische stoffen, smaak) + RO-membraan (PFAS, nitraat, lood, bacterien) + post-koolfilter (smaakverbetering) + optioneel UV (desinfectie als extra laag). Dit is precies de opbouw van een kwalitatief 4-in-1 osmosesysteem. Sommige systemen voegen ook een remineralisatiefilter toe.',
  },
  {
    question: 'Werkt UV ook tegen cryptosporidium?',
    answer: 'Ja. UV-desinfectie is een van de weinige methoden die Cryptosporidium effectief uitschakelt. Cryptosporidium is chloorresistent (standaard desinfectie werkt niet) maar heeft een lage UV-dosis nodig (5,8 mJ/cm2 voor 2-log reductie). Een gecertificeerd UV-systeem met voldoende fluentie (40 mJ/cm2 aanbevolen voor NSF-55 Class A) verwijdert ook Giardia en bacterien. UV werkt alleen in helder water (UVT boven 75%); troebel water vermindert de effectiviteit drastisch.',
  },
];

const technieken = [
  { naam: 'Actief kool', chloor: true, geur: true, bacterien: false, virussen: false, protozoa: false, pfas: 'deels', zware_metalen: 'deels', nitraat: false, kalk: false, pesticiden: 'deels', medicijnen: 'deels' },
  { naam: 'Sedimentfilter', chloor: false, geur: false, bacterien: false, virussen: false, protozoa: false, pfas: false, zware_metalen: false, nitraat: false, kalk: false, pesticiden: false, medicijnen: false },
  { naam: 'Ultrafiltratie (UF)', chloor: false, geur: false, bacterien: true, virussen: 'deels', protozoa: true, pfas: false, zware_metalen: false, nitraat: false, kalk: false, pesticiden: false, medicijnen: false },
  { naam: 'Nanofiltratie (NF)', chloor: true, geur: true, bacterien: true, virussen: true, protozoa: true, pfas: 'deels', zware_metalen: true, nitraat: 'deels', kalk: true, pesticiden: true, medicijnen: 'deels' },
  { naam: 'Osmose (RO)', chloor: true, geur: true, bacterien: true, virussen: true, protozoa: true, pfas: true, zware_metalen: true, nitraat: true, kalk: true, pesticiden: true, medicijnen: true },
  { naam: 'UV', chloor: false, geur: false, bacterien: true, virussen: true, protozoa: true, pfas: false, zware_metalen: false, nitraat: false, kalk: false, pesticiden: false, medicijnen: false },
  { naam: 'Ionenwisseling', chloor: false, geur: false, bacterien: false, virussen: false, protozoa: false, pfas: false, zware_metalen: true, nitraat: true, kalk: true, pesticiden: false, medicijnen: false },
  { naam: 'Keramisch', chloor: false, geur: false, bacterien: true, virussen: false, protozoa: true, pfas: false, zware_metalen: false, nitraat: false, kalk: false, pesticiden: false, medicijnen: false },
];

function cel(val: boolean | 'deels') {
  if (val === true) return <td className="border border-gray-300 px-2 py-2 text-center text-green-700 font-bold">+</td>;
  if (val === 'deels') return <td className="border border-gray-300 px-2 py-2 text-center text-yellow-600 font-bold">~</td>;
  return <td className="border border-gray-300 px-2 py-2 text-center text-red-500">-</td>;
}

export default function VergelijkingPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Filtertechnieken', item: 'https://waterfilterplatform.nl/filtertechnieken' },
              { '@type': 'ListItem', position: 3, name: 'Vergelijking', item: 'https://waterfilterplatform.nl/filtertechnieken/vergelijking' },
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
            headline: 'Filtertechnieken vergelijken — welke technologie verwijdert wat?',
            description: 'Grote vergelijkingstabel: actief kool, sediment, UF, NF, osmose, UV, ionenwisseling en keramisch vs alle verontreinigingen.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/filtertechnieken/vergelijking',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/filtertechnieken">Filtertechnieken</Link> &rsaquo; Vergelijking
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Filtertechnieken vergelijken — welke technologie verwijdert wat?
          </h1>
          <QuickAnswer answer="Voor maximale bescherming is osmose + actief kool + UV de gouden combinatie: osmose verwijdert PFAS, nitraat, lood en bacterien; actief kool verbetert smaak en verwijdert organische stoffen; UV desinfecteert als extra laag. Geen enkele losse technologie dekt alle verontreinigingen — een meertrapssysteem is altijd superieur." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Vergelijkingstabel: technologie versus contaminant</h2>
          <p className="text-gray-700 mb-4">
            De onderstaande tabel toont welke filtertechnologie welke verontreiniging effectief verwijdert. Legenda: <span className="text-green-700 font-bold">+</span> Effectief &nbsp;|&nbsp; <span className="text-yellow-600 font-bold">~</span> Gedeeltelijk &nbsp;|&nbsp; <span className="text-red-500">-</span> Niet effectief
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-400 px-2 py-2 text-left min-w-[120px]">Technologie</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">Chloor/geur</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">Bacterien</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">Virussen</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">Protozoen</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">PFAS</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">Zware metalen</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">Nitraat</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">Kalk</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">Pesticiden</th>
                  <th className="border border-gray-400 px-2 py-2 text-center">Medicijnen</th>
                </tr>
              </thead>
              <tbody>
                {technieken.map((t, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-300 px-2 py-2 font-medium text-[#003F5C] text-xs">{t.naam}</td>
                    {cel(t.chloor)}
                    {cel(t.bacterien)}
                    {cel(t.virussen)}
                    {cel(t.protozoa)}
                    {cel(t.pfas)}
                    {cel(t.zware_metalen)}
                    {cel(t.nitraat)}
                    {cel(t.kalk)}
                    {cel(t.pesticiden)}
                    {cel(t.medicijnen)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            ~ = gedeeltelijk effectief (afhankelijk van stoftype, concentratie en systeemkwaliteit). Tabel gebaseerd op NSF/ANSI certificeringen en wetenschappelijke literatuur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Toelichting per technologie</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-semibold text-[#003F5C]">Actief kool (GAC/CTO)</h3>
              <p className="text-gray-700 text-sm">Adsorptie van organische moleculen, chloor en geur. Effectief voor smaakverbetering. Verwijdert geen ionen (nitraat, fluoride), geen micro-organismen en slechts gedeeltelijk PFAS. Essentieel in elke meertrapinstallatie als pre- en post-filter.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-[#003F5C]">Sedimentfilter</h3>
              <p className="text-gray-700 text-sm">Mechanische verwijdering van vaste deeltjes (zand, slib, roest) via een filtermedium van 1-50 micron. Geen chemische of biologische werking. Onmisbaar als eerste stap in een meertrapssysteem om downstream filters te beschermen.</p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-semibold text-[#003F5C]">Ultrafiltratie (UF)</h3>
              <p className="text-gray-700 text-sm">Membraanfiltratie op 0,01-0,1 micron. Effectief voor bacterien (99,99%+) en protozoa (100%), grote virussen gedeeltelijk. Geen opgeloste stoffen verwijderd (PFAS, nitraat, kalk). Ideaal voor microbiologische beveiliging zonder chemicalieen.</p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-semibold text-[#003F5C]">Nanofiltratie (NF)</h3>
              <p className="text-gray-700 text-sm">Membraanfiltratie op 0,001-0,01 micron. Verwijdert hardheidsionen, pesticiden en kleurstoffen, maar laat monovalente ionen (Na, K) grotendeels door. Minder PFAS-effectief dan RO. Hogere doorvoer dan RO, minder afvalwater.</p>
            </div>
            <div className="border-l-4 border-[#003F5C] pl-4">
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <p className="text-gray-700 text-sm">Het meest complete huisfiltersysteem. Membraanfiltratie op 0,0001 micron verwijdert vrijwel alles: PFAS (95-99%), nitraat (85-95%), lood (95%+), bacterien (99,99%+), virussen, medicijnen en kalk. Nadeel: afvalwater (40-75%), langzame productie, vereist opslagtank.</p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-semibold text-[#003F5C]">UV-desinfectie</h3>
              <p className="text-gray-700 text-sm">UV-C licht (254 nm) beschadigt DNA van micro-organismen. Effectief voor bacterien, virussen en protozoa inclusief Cryptosporidium. Geen chemicalieen, geen afvalwater. Verwijdert geen opgeloste stoffen. Werkt alleen in helder water (hoge UVT). Ideaal als aanvullende desinfectiestap.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-[#003F5C]">Ionenwisseling</h3>
              <p className="text-gray-700 text-sm">Uitwisseling van ionen via harskorrels. Kationenwisseling verwijdert Ca/Mg (onthardering) en zware metalen; anionenwisseling verwijdert nitraat, sulfaat, fluoride. Regeneratie met zout- of zuuroplossing vereist. Geen effect op organische stoffen of micro-organismen.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-[#003F5C]">Keramisch filter</h3>
              <p className="text-gray-700 text-sm">Mechanische filtratie op 0,2-0,5 micron. Effectief voor bacterien en protozoa, niet voor virussen of opgeloste stoffen. Zilverbehandeling voorkomt biofilm. Werkt op zwaartekracht zonder stroom. Lange levensduur. Off-grid geschikt.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">De gouden combinatie: osmose + actief kool + UV</h2>
          <p className="text-gray-700 mb-4">
            Geen enkele filtrtechnologie dekt alle verontreinigingen in een enkel systeem. De bewezen aanpak voor maximale drinkwaterkwaliteit is een meertrapssysteem:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Sedimentfilter (5-10 micron):</strong> verwijdert zwevende deeltjes, beschermt downstream membraan</li>
            <li><strong>Pre-koolstoffilter (CTO):</strong> verwijdert chloor en organische stoffen die het RO-membraan zouden beschadigen</li>
            <li><strong>RO-membraan:</strong> verwijdert PFAS, nitraat, lood, bacterien, virussen, kalk en medicijnen</li>
            <li><strong>Post-koolstoffilter:</strong> finaliseert smaak en geur</li>
            <li><strong>UV (optioneel):</strong> extra desinfectie als aanvullende veiligheidslaag</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Dit is precies de opbouw van een kwalitatief 4-in-1 osmosesysteem. Systemen die ook een kokendwaterboiler integreren — zoals de PureAqua 4-in-1 — combineren de volledige filterfunctie met direct beschikbaar kokend water in een compacte installatie.
          </p>
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
            <li><Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] hover:underline">Ultrafiltratie (UF) uitgelegd</Link></li>
            <li><Link href="/filtertechnieken/nanofiltration" className="text-[#005F8A] hover:underline">Nanofiltratie: tussen UF en RO</Link></li>
            <li><Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose: complete gids</Link></li>
            <li><Link href="/beste-waterfilter/all-in-one" className="text-[#005F8A] hover:underline">All-in-one osmose + kokend water systeem</Link></li>
            <li><Link href="/filtertechnieken" className="text-[#005F8A] hover:underline">Terug naar filtertechnieken overzicht</Link></li>
          </ul>
        </div>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
