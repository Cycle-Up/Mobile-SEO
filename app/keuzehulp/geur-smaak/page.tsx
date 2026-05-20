import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor geur en smaak — chloor, chloramine en metaalindruk | WaterfilterPlatform',
  description: 'Leidingwater met chloorlucht, rotte-eierengeur of metaalsmaak? Ontdek de oorzaak en de juiste filteroplossing: actief kool, KDF of sedimentfilter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keuzehulp/geur-smaak' },
  openGraph: {
    title: 'Waterfilter voor geur en smaak — chloor, chloramine en metaalindruk',
    description: 'Leidingwater met chloorlucht, rotte-eierengeur of metaalsmaak? Ontdek de oorzaak en de juiste filteroplossing.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Waarom ruikt mijn kraanwater naar chloor?',
    answer: 'Drinkwaterbedrijven voegen een kleine hoeveelheid chloor (maximaal 0,3 mg/L bij het tapkraan) toe als desinfectiemiddel om bacteriegroei in het leidingnet te voorkomen. De geur is dus een teken dat het water veilig is behandeld, maar voor sommige mensen is de geur onplezierig. Een actief koolfilter verwijdert residuchloor vrijwel volledig.',
  },
  {
    question: 'Wat is chloramine en verschilt het van chloor?',
    answer: 'Chloramine (monochloramine) is een desinfectant dat sommige waterbedrijven gebruiken als alternatief voor vrij chloor. Het reageert minder snel met organische stoffen en produceert minder trihalomethanen (THM), maar de geur en smaak kunnen ook onplezierig zijn. Standaard actief kool verwijdert chloramine minder effectief dan vrij chloor; katalytisch actief kool (CAC) is hiervoor de betere keuze.',
  },
  {
    question: 'Hoe los ik een metaalsmaak in kraanwater op?',
    answer: 'Een metaalsmaak wordt vaak veroorzaakt door koper of lood uit leidingen, of door roest in oude stalen leidingen. Een combinatiefilter van actief kool en KDF (Kinetic Degradation Fluxion) verwijdert koperionen en zware metalen effectief. Bij oude loden leidingen (voor 1960) is een osmosefilter de veiligste optie, omdat dit lood voor meer dan 95% verwijdert.',
  },
  {
    question: 'Waardoor ontstaat een rotte-eierengeur in water?',
    answer: 'De rotte-eierengeur wordt veroorzaakt door waterstofsulfide (H2S), een gas dat ontstaat door sulfaatreducerende bacterien in de bodem of in het leidingnet. H2S komt vaker voor in putwater dan in leidingwater. Voor H2S is een KDF-filter (met koperzink-legering) of een beluchting + sedimentfilter de juiste aanpak. Actief kool alleen is onvoldoende voor H2S.',
  },
  {
    question: 'Is een filterkan voldoende voor chloor en smaak?',
    answer: 'Voor het verbeteren van chloorlucht en smaak is een filterkan met een actief koolfilter (zoals Brita of ZeroWater) een goede en goedkope oplossing. De beperkingen zijn: beperkte capaciteit (1-3 liter), regelmatige filtervervanging (elke 4-8 weken), en de kan filtert geen zware metalen of H2S. Voor hogere capaciteit of bredere bescherming is een aanrechtfilter of onderkastfilter met actief kool beter.',
  },
];

export default function GeurSmaakPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Keuzehulp', item: 'https://waterfilterplatform.nl/keuzehulp' },
              { '@type': 'ListItem', position: 3, name: 'Geur en smaak', item: 'https://waterfilterplatform.nl/keuzehulp/geur-smaak' },
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
            headline: 'Waterfilter voor geur en smaak — chloor, chloramine en metaalindruk',
            description: 'Leidingwater met chloorlucht, rotte-eierengeur of metaalsmaak? Ontdek de oorzaak en de juiste filteroplossing.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/keuzehulp/geur-smaak',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keuzehulp">Keuzehulp</Link> &rsaquo; Geur en smaak
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Waterfilter voor geur en smaak — chloor, chloramine en metaalindruk
          </h1>
          <QuickAnswer answer="Voor chloor en smaak is een actief koolfilter de beste keuze; voor rotte-eierengeur van H2S heeft u een KDF-filter nodig. Bij een metaalsmaak door koper of lood voegt u een KDF-trap toe of kiest u voor osmose. Chloramine vereist katalytisch actief kool (CAC)." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Meest voorkomende oorzaken van geur en smaak</h2>
          <p className="text-gray-700 mb-4">
            Leidingwater dat onaangenaam ruikt of smaakt, heeft altijd een specifieke oorzaak. De filteroplossing hangt volledig af van de bron van het probleem. Hieronder de vier meest voorkomende oorzaken in Nederlandse huishoudens.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">1. Residuchloor — chloorlucht</h3>
          <p className="text-gray-700 mb-4">
            Drinkwaterbedrijven desinfecteren water met chloor. Bij het tapkraan mag maximaal 0,3 mg/L vrij chloor aanwezig zijn. In de praktijk ruikt water uit kranen dicht bij een pompstation sterker naar chloor dan water dat een langere weg heeft afgelegd. De geur verdwijnt snel als u het water even laat staan of in een karaf schenkt, maar voor fijngevoelige mensen is filtering prettiger.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Beste oplossing:</strong> een actief koolfilter (GAC of CTO-koolblokje) verwijdert residuchloor via adsorptie. Capaciteit: een koolblokje van 10 inch verwerkt 10.000-20.000 liter voor vervanging nodig is (circa 1 jaar bij normaal huishoudelijk gebruik).
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2 mt-6">2. Chloramine — stabielere desinfectant</h3>
          <p className="text-gray-700 mb-4">
            Een aantal waterbedrijven in Nederland gebruikt chloramine in plaats van vrij chloor, omdat het langer actief blijft in het leidingnet en minder bijproducten (trihalomethanen) vormt. De smaak van chloramine wordt door veel mensen als een zwembadgeur of muffe nasmaak ervaren. Standaard actief kool verwijdert chloramine langzamer dan vrij chloor.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Beste oplossing:</strong> katalytisch actief kool (CAC) — dit is een speciaal geactiveerd kool met een hogere reactieoppervlak dat chloramine sneller afbreekt. Vraag uw waterbedrijf of chloramine wordt gebruikt; dit staat ook in het jaarlijkse waterkwaliteitsrapport.
          </p>
          <p className="text-gray-700 mt-4">
            Meer achtergrondinformatie over chloor en bijproducten: <Link href="/stoffen-in-drinkwater/chloor-bijproducten" className="text-[#005F8A] hover:underline font-medium">Chloor bijproducten (THM en HAA) in drinkwater</Link>.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2 mt-6">3. Koperleidingen en metaalsmaak</h3>
          <p className="text-gray-700 mb-4">
            Zacht, zuur water (pH onder 7) lost koper op uit koperen leidingen, met name in nieuwbouw en gerenoveerde woningen. Het resultaat is een metaalachtrige, wrange smaak. Bij oudere woningen (voor 1960) kunnen nog loden leidingen aanwezig zijn, wat een groter gezondheidsrisico vormt — lood heeft geen wettelijke smaakdrempel maar is schadelijk bij langdurige blootstelling.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Beste oplossing voor koper:</strong> een KDF-filter (Kinetic Degradation Fluxion) met koperzinklegering reduceert koperionen door een galvanische reactie. Combineer met actief kool voor chloor en organische stoffen. <strong>Bij loden leidingen:</strong> kies een osmosefilter — dit verwijdert lood voor meer dan 95%.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2 mt-6">4. Waterstofsulfide (H2S) — rotte-eierengeur</h3>
          <p className="text-gray-700 mb-4">
            Waterstofsulfide is een gas met een karakteristieke rotte-eierengeur. Het ontstaat wanneer sulfaatreducerende bacterien in de bodem of in het leidingnet sulfaten omzetten. H2S komt vaker voor in eigen putwater, maar kan ook sporadisch in leidingwater optreden, met name in warmwaterleidingen bij lage temperatuur (tussen 20 en 45 graden Celsius bevordert bacteriegroei).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Beste oplossing:</strong> een KDF-filter oxideert H2S tot elementair zwavel dat op het filtermedium neerslaat. Voor ernstige H2S-problemen in putwater is beluchting gevolgd door sedimentfiltratie de meest effectieve aanpak. Actief kool absorbeert H2S tijdelijk maar raakt snel verzadigd.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Vergelijkingstabel: oorzaak versus oplossing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Probleem</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Oorzaak</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Beste filter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Chloorlucht</td>
                  <td className="border border-gray-300 px-3 py-2">Residuchloor desinfectie</td>
                  <td className="border border-gray-300 px-3 py-2">Actief kool (GAC/CTO)</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 25-90</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Zwembadgeur</td>
                  <td className="border border-gray-300 px-3 py-2">Chloramine</td>
                  <td className="border border-gray-300 px-3 py-2">Katalytisch actief kool (CAC)</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 60-150</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Metaalsmaak</td>
                  <td className="border border-gray-300 px-3 py-2">Koperleidingen</td>
                  <td className="border border-gray-300 px-3 py-2">KDF + actief kool</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 80-200</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Loodrisico</td>
                  <td className="border border-gray-300 px-3 py-2">Loden leidingen</td>
                  <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 300-600</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Rotte-eierengeur</td>
                  <td className="border border-gray-300 px-3 py-2">H2S / waterstofsulfide</td>
                  <td className="border border-gray-300 px-3 py-2">KDF-filter of beluchting</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 80-250</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Vertroebeling + smaak</td>
                  <td className="border border-gray-300 px-3 py-2">Sediment, roest, klei</td>
                  <td className="border border-gray-300 px-3 py-2">Sedimentfilter (5-20 micron)</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 20-60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Actief kool: de basisoplossing voor geur en smaak</h2>
          <p className="text-gray-700 mb-4">
            Actief kool werkt via adsorptie: organische moleculen en gassen hechten aan het enorme interne oppervlak van het koolmateriaal (500-1500 m2 per gram). Er zijn twee hoofdvormen:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Granulaire actief kool (GAC):</strong> losse korrels, hoge doorstroomsnelheid, gebruikt in filterkannen en aanrechtmodellen. Nadeel: kans op kanalenvorming waardoor water het filter omzeilt.</li>
            <li><strong>Koolstofblokfilter (CTO):</strong> geperst blok, uniform contact met het water, betere chloor- en organische verwijdering. Standaard in kwalitatieve onderkastsystemen en osmosefilters.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Een actief koolfilter heeft een beperkte capaciteit. Na adsorptie van de maximale hoeveelheid stoffen "breekt het door" en loopt er onbehandeld water door. Vervang filters op tijd — doorgaans na 3-6 maanden of 3000-5000 liter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Sedimentfilter: voor vertroebeling en zwevende deeltjes</h2>
          <p className="text-gray-700 mb-4">
            Een sedimentfilter verwijdert vaste deeltjes (zand, slib, roest, klei) op basis van poriemaat (1-50 micron). Het filter verwijdert op zichzelf geen geur of smaak, maar wanneer zwevende deeltjes de oorzaak zijn van een troebele of aardachtige smaak, is een sedimentfilter de eerste stap. In een meertraps systeem staat het sedimentfilter altijd voor het koolfilter, zodat het kool niet verstopt raakt.
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
            <li><Link href="/koolstoffilter" className="text-[#005F8A] hover:underline">Actief koolfilter: werking en toepassing</Link></li>
            <li><Link href="/lood-water" className="text-[#005F8A] hover:underline">Lood in kraanwater: risico en filtering</Link></li>
            <li><Link href="/keuzehulp" className="text-[#005F8A] hover:underline">Terug naar keuzehulp overzicht</Link></li>
            <li><Link href="/waterfilter" className="text-[#005F8A] hover:underline">Alle waterfilter soorten</Link></li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool voor geur en smaak</h3>
              <p className="text-sm text-gray-600">Hoe actief kool chloor, organische stoffen en geuroorzaken verwijdert en welke filterkwaliteit u nodig hebt.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/chloor-bijproducten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Chloor en bijproducten in water</h3>
              <p className="text-sm text-gray-600">Hoe chloor en trihalomethanen (THM) ontstaan, hun effect op smaak en geur, en filteroplossingen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
