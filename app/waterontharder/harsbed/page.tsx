import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Harsbed waterontharder: ionenwisseling, levensduur en regeneratie',
  description:
    'Harsbed in waterontharder: ionenwisselingshars vervangt Ca2+ en Mg2+ door Na+. Levensduur 10-15 jaar. Regeneratie met zout. IJzervergiftiging vermijden.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/harsbed' },
  openGraph: {
    title: 'Harsbed waterontharder: ionenwisseling, levensduur en regeneratie',
    description:
      'Harsbed in waterontharder: ionenwisselingshars vervangt Ca2+ en Mg2+ door Na+. Levensduur 10-15 jaar. Regeneratie met zout. IJzervergiftiging vermijden.',
    type: 'website',
  },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een harsbed mee in een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij normaal gebruik en goed onderhoud gaat ionenwisselingshars 10 tot 15 jaar mee. De levensduur wordt negatief beinvloed door ijzerfouling, blootstelling aan chloor in het leidingwater en mechanische beschadiging door te hoge doorstroomsnelheid. Regelmatig harsreinigingsproduct gebruiken verlengt de levensduur aanzienlijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de tekenen dat het harsbed aan vervanging toe is?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Signalen dat het harsbed vervangen moet worden zijn: aanzienlijk kortere tijd tussen regeneraties (capaciteitsval van meer dan 30%), bruinverkleuring van het hars zichtbaar via inspectieraam, bruinachtig of vuil water na regeneratie, slechte ontharderresultaten ondanks normaal zoutverbruik, en zichtbare brekage of verpoederding van harskorrels bij inspectie. Een TDS-meter of hardheidstestkit bevestigt of het hars nog effectief werkt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is ijzervergiftiging van het harsbed en hoe voorkom ik het?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IJzervergiftiging (iron fouling) treedt op wanneer opgelost ijzer (Fe2+) in het leidingwater oxideert tot ijzeroxide (Fe3+) op het harsoppervlak. Dit verstopt de sulfonzuurgroepen irreversibel. Preventie: gebruik een ijzerspecifiek harsreinigingsproduct (harsinit) bij elke 3e tot 5e regeneratie, installeer een sedimentfilter voor de ontharder bij ijzerhoudend water boven 0,1 mg/L, en kies voor ijzerbestendig hars als uw leidingwater structureel ijzer bevat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verloopt de regeneratieprocedure van een harsbed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regeneratie verloopt in vier fasen: (1) Terugspoelen: water stroomt omhoog door het hars om vuil en fijne deeltjes te verwijderen, duurt 5-10 minuten. (2) Aanzuigen zoutwater: geconcentreerde pekel (NaCl-oplossing) stroomt langzaam door het hars en vervangt Ca2+ en Mg2+ door Na+, duurt 30-60 minuten. (3) Langzaam naspoelen: verdere zoutoplossing doorstroming. (4) Snel naspoelen: schoon leidingwater spoelt resterende zoutoplossing weg. Totale duur: 60-120 minuten, zoutverbruik 1,5-3 kg per regeneratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost harsvervanging bij een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het hars zelf kost 10-20 euro per liter voor standaard cationhars. Een huishoudelijke ontharder heeft 10-25 liter hars nodig, zodat de materiaalkosten uitkomen op 100-500 euro. Bij zelfwerkzaamheid komt er alleen het gereedschap bij; bij een installateur rekent u 100-200 euro arbeidsloon extra. Totale vervangingskosten liggen tussen 150 en 700 euro afhankelijk van harshoeveelheid en of u het zelf doet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen standaard cationhars en ijzerbestendig hars?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard sterk zuur cationhars werkt uitstekend bij leidingwater met weinig ijzer (onder 0,05 mg/L). IJzerbestendig hars heeft een aangepaste crosslink-dichtheid en oppervlaktebehandeling die aanslag van ijzeroxide vertraagt. Het is 20-40% duurder maar bij ijzerhoudend leidingwater (boven 0,1 mg/L Fe) aanzienlijk langer houdbaar. Fijnkorrelig hars (0,3-0,4 mm) biedt hogere capaciteit per volume maar vraagt iets hogere druk en is minder geschikt voor leidingwaterdruk onder 2 bar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan chloor in leidingwater het harsbed beschadigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, residuchloor boven 0,5 mg/L kan de divinylbenzeen-crosslinks in het polystyreen harsmatrix oxideren, waardoor het hars breekbaar wordt en de capaciteit daalt. Nederlands leidingwater bevat doorgaans 0,05-0,2 mg/L restchloor, wat bij normaal gebruik geen probleem geeft. Bij hogere niveaus (na desinfectie werkzaamheden) of in gebieden met chlooramine kan een actief koolfilter voor de ontharder de harslevensduur verlengen. Vraag uw waterbedrijf om actuele chloorgehalten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe gebruik ik harsreiniger en hoe vaak moet ik dat doen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harsreiniger (harsinit of vergelijkbaar product op citroenzuur- of oxaalzuurbasis) toevoegen aan de zoutbak: 100-200 gram per behandeling. Dit lost mineraalafzettingen op en verwijdert lichte ijzer- en mangaanfouling. Frequentie: bij normaal leidingwater eens per 3-6 maanden; bij ijzerhoudend water boven 0,05 mg/L Fe elke 4-8 weken. Speciale ijzerreiniger (ijzerout, resin cleaner voor ijzer) is sterker en nodig bij zichtbare bruinkleuring van het hars.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Harsbed waterontharder: ionenwisseling, levensduur en onderhoud',
  description:
    'Harsbed in waterontharder: ionenwisselingshars vervangt Ca2+ en Mg2+ door Na+. Levensduur 10-15 jaar. Regeneratie met zout. IJzervergiftiging vermijden.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/harsbed',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function HarsbedPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Harsbed', item: 'https://waterfilterplatform.nl/waterontharder/harsbed' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Harsbed</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Harsbed waterontharder: ionenwisseling, levensduur en onderhoud
          </h1>
          <p className="text-[#005F8A] text-lg">
            Het harsbed is het werkzame hart van elke ionenwisselende waterontharder. Kleine
            harsbollen zijn bedekt met actieve sulfonzuurgroepen die kalkionen uit het water opvangen.
            Begrip van de werking, de regeneratie en het onderhoud helpt u de levensduur te maximaliseren.
          </p>
        </section>

        <QuickAnswer answer="Het harsbed is het hart van elke ionenwisselende waterontharder. Kleine harsbollen (0,3-1,2 mm) zijn bedekt met sulfonzuurgroepen die calcium- en magnesiumionen uit het water opvangen en natrium teruggeven. Regeneratie met zout herstelt de capaciteit. Levensduur: 10-15 jaar bij goed onderhoud." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is ionenwisselingshars?
        </h2>
        <p className="text-gray-700 mb-4">
          Ionenwisselingshars is een synthetisch polymeer op basis van gesulfoneerd polystyreen,
          gecrosslinkt met divinylbenzeen. De harsbollen hebben een diameter van <strong>0,3 tot
          1,2 mm</strong> afhankelijk van het type. Aan het oppervlak zitten vaste negatief geladen{' '}
          <strong>sulfonzuurgroepen (-SO3H)</strong> die als ankerplekken dienen voor positief
          geladen kationen.
        </p>
        <p className="text-gray-700 mb-4">
          In de beginfase worden de sulfonzuurgroepen beladen met natriumionen (Na+) door het
          regeneratieproces. Tijdens de wateronthardfase wisselen deze natriuminonen van plek met
          calcium- en magnesiumionen uit het passerende leidingwater. Het resultaat: zacht water
          verlaat de ontharder, terwijl de kalkionen vastgehouden zijn in het harsbed.
        </p>
        <p className="text-gray-700 mb-6">
          Het type is een <strong>sterk zuur katioonwisselaar</strong> (SAC), die effectief werkt
          over het volledige pH-bereik van drinkwater (6,5-9,5). Dit onderscheidt hem van zwak zuur
          hars dat alleen bij hogere pH goed functioneert.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De ionenwisselingsreactie
        </h2>
        <p className="text-gray-700 mb-4">
          De chemische reactie die onthardering bewerkstelligt ziet er als volgt uit:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 font-mono text-sm text-gray-800">
          Ca&#178;&#8314; + 2 Na-R &rarr; Ca-R&#8322; + 2 Na&#8314;
          <br />
          Mg&#178;&#8314; + 2 Na-R &rarr; Mg-R&#8322; + 2 Na&#8314;
        </div>
        <p className="text-gray-700 mb-4">
          Hierin staat R voor de vaste harsmatrix met sulfonzuurgroep. De calcium- en
          magnesiumionen (hardheid) binden sterker aan het hars dan natrium, zodat de wisseling
          spontaan verloopt. Per mmol calcium (40 mg/L bij 1 mmol) worden twee natriumionen
          afgegeven &mdash; dit is relevant voor mensen op een natriumarm dieet. Zie ook onze
          pagina over <Link href="/leidingwater/natrium" className="text-[#005F8A] underline">natrium in leidingwater</Link>.
        </p>
        <p className="text-gray-700 mb-6">
          Bij regeneratie wordt de reactie omgekeerd door een geconcentreerde NaCl-oplossing
          (pekel). De hoge natriumconcentratie drijft het evenwicht naar links, zodat calcium
          en magnesium worden losgemaakt en afgevoerd met het spoelwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Capaciteit van het harsbed
        </h2>
        <p className="text-gray-700 mb-4">
          De ontharderscapaciteit wordt uitgedrukt in <strong>graden Franse hardheid (&#176;fH)
          per liter hars</strong> of in de gangbare Nederlandse notatie <strong>m&#179; &#215; dH
          per liter hars</strong>. Een typisch cationhars heeft een theoretische capaciteit van
          circa 1 meq/mL of omgerekend 50-80 m&#179;&#183;dH per liter hars bij een efficienti
          oogste zoutdosering.
        </p>
        <p className="text-gray-700 mb-4">
          In de praktijk gebruikt men lagere zoutdoseringen voor een hogere zoutefficientsie.
          Bij 100 g NaCl per liter hars haalt men circa 40-50 m&#179;&#183;dH per liter; bij
          200 g NaCl per liter hars tot 70 m&#179;&#183;dH maar met hogere zoutkosten per
          m&#179; onthard water. Veel moderne ontharders gebruiken een <strong>spaarzame
          regeneratiemodus</strong> die per m&#179; zacht water minder zout verbruikt.
        </p>
        <p className="text-gray-700 mb-6">
          Zie onze uitgebreide pagina over{' '}
          <Link href="/waterontharder/capaciteit" className="text-[#005F8A] underline">
            waterontharder capaciteit berekenen
          </Link>{' '}
          voor de volledige rekenmethode per gezinsgrootte en hardheid.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regeneratieprocedure stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          De regeneratie van een harsbed verloopt automatisch in vier fasen die samen
          60-120 minuten duren:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Terugspoelen (backwash):</strong> Water stroomt omhoog door het harsbed,
            waardoor vuildeeltjes, sediment en eventueel gebroken harsbollen naar de afvoer
            worden meegenomen. Duur: 5-10 minuten. Dit voorkomt ook verdichting van het bed.
          </li>
          <li>
            <strong>Aanzuigen pekel (brine draw):</strong> Geconcentreerde zoutoplossing
            (8-12% NaCl) stroomt langzaam door het hars, doorgaans 30-60 minuten.
            De hoge ionconcentratie verplaatst Ca&#178;&#8314; en Mg&#178;&#8314; van het hars.
            Zoutverbruik: 1,5-3 kg per regeneratie.
          </li>
          <li>
            <strong>Langzaam naspoelen (slow rinse):</strong> Verdunde zoutoplossing
            spoelt verder door het hars. Het hars wordt volledig omgezet naar de Na-vorm.
            Duur: 15-30 minuten.
          </li>
          <li>
            <strong>Snel naspoelen (fast rinse):</strong> Schoon leidingwater spoelt
            resterende zoutoplossing weg zodat het geproduceerde water niet zout smaakt.
            Duur: 10-15 minuten. Waterverbruik: 50-120 liter per regeneratiecyclus.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Harssoorten vergeleken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Harstype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Korrelgrootte</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Capaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">IJzerbestendig</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs/L</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Standaard SAC (8% DVB)</td>
                <td className="border border-gray-300 px-3 py-2">0,5-0,8 mm</td>
                <td className="border border-gray-300 px-3 py-2">Goed</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">8-12 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Fijnkorrelig SAC</td>
                <td className="border border-gray-300 px-3 py-2">0,3-0,5 mm</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">12-18 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">IJzerbestendig hars</td>
                <td className="border border-gray-300 px-3 py-2">0,5-0,8 mm</td>
                <td className="border border-gray-300 px-3 py-2">Goed</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
                <td className="border border-gray-300 px-3 py-2">14-20 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Hoog DVB (10%) hars</td>
                <td className="border border-gray-300 px-3 py-2">0,5-0,8 mm</td>
                <td className="border border-gray-300 px-3 py-2">Goed</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
                <td className="border border-gray-300 px-3 py-2">15-22 euro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Harsdegradatie: oorzaken en preventie
        </h2>
        <p className="text-gray-700 mb-4">
          Ionenwisselingshars is duurzaam maar niet onsterfelijk. De voornaamste oorzaken van
          achteruitgang zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>IJzerfouling:</strong> opgelost Fe&#178;&#8314; oxideert tot Fe&#179;&#8314;-neerslag
            op het harsoppervlak en verstopt de actieve plaatsen. Meest voorkomende oorzaak
            van vroegtijdige slijtage in Nederland.
          </li>
          <li>
            <strong>Oxidatie door chloor:</strong> vrij chloor (Cl&#178;) en chloordioxyde
            breken de DVB-crosslinks af, waardoor het hars brokkelig wordt.
            Chloorgehaltes boven 0,5 mg/L zijn risicovol.
          </li>
          <li>
            <strong>Mechanische slijtage:</strong> te hoge doorstroomsnelheid of herhaaldelijk
            backwashen met hoge druk breekt harsbollen af. Gebruik nooit hogere druk dan
            aanbevolen in de installatieinstructies.
          </li>
          <li>
            <strong>Osmotische shock:</strong> plotselinge wisselingen tussen hoog geconcentreerde
            pekel en zacht water kunnen de harsbolstructuur beschadigen bij goedkoop hars
            met lage crosslink-dichtheid.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          IJzervergiftiging van het harsbed
        </h2>
        <p className="text-gray-700 mb-4">
          IJzervergiftiging is de meest serieuze bedreiging voor harsbedden in gebieden waar
          leidingwater of putwater een verhoogd ijzergehalte heeft. Opgelost ijzer (Fe&#178;&#8314;)
          wordt door het hars gebonden zoals calcium, maar oxideert vervolgens tot ijzeroxide
          (Fe&#179;&#8314;). Dit rode tot bruine neerslag is vrijwel irreversibel en vermindert de
          totale ontharderscapaciteit sterk.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Symptomen:</strong> bruinachtig naspoelwater na regeneratie, rode/bruine
          verkleuring van de hars zichtbaar via het inspectieglas, dalende capaciteit ondanks
          normaal zoutverbruik, en roestige aanslag in het binnenwerk van de ontharder.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Preventie:</strong> installeer een sedimentfilter van 5-20 micrometer
          vr de ontharder bij ijzergehaltes boven 0,05 mg/L; gebruik ijzerbestendig hars;
          voeg bij elke 4e regeneratie harsinit toe aan de zoutbak. Voor structureel
          ijzerproblematisch putwater is een dedicated ijzerverwijderingsfilter vr de
          ontharder aan te bevelen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Harsreiniging: wanneer en hoe
        </h2>
        <p className="text-gray-700 mb-4">
          Harsreinigingsproducten (ook wel harsinit, resin cleaner of ijzerout) worden
          toegevoegd aan de zoutbak en meegespoeld tijdens de regeneratie. Ze werken op
          basis van citroenzuur, oxaalzuur of specifieke ijzelaatoplosmiddelen.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Frequentie bij normaal water:</strong> eens per 3-6 maanden, 100-150 g per behandeling</li>
          <li><strong>Frequentie bij ijzerhoudend water:</strong> elke 4-8 weken, 150-200 g per behandeling</li>
          <li><strong>Sterke harscleaner:</strong> bij zichtbare ijzerverkleuring, kan meerdere keren achter elkaar worden toegepast voor herstel</li>
          <li><strong>Mangaanreiniger:</strong> specifiek bij mangaanproblemen (zwart neerslag), apart product nodig naast de reguliere harscleaner</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Harsvervanging: kosten en aanpak
        </h2>
        <p className="text-gray-700 mb-4">
          Na 10-15 jaar of bij aantoonbare degradatie is harsvervanging de meest
          kosteneffectieve keuze ten opzichte van een geheel nieuw apparaat. De stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>Schakel het apparaat uit en zet de bypass open</li>
          <li>Verwijder het harsvat (doorgaans losmaken van aansluitingsnippels en klepsysteem)</li>
          <li>Gooi het oude hars weg (naar grof vuil of chemicaliensafvalstroom, niet in de tuin)</li>
          <li>Spoel het lege vat schoon en inspecteer op corrosie of scheuren</li>
          <li>Vul het vat met nieuw hars (droog of nat, afhankelijk van het type)</li>
          <li>Monteer het vat terug, stel de regeneratie opnieuw in en voer een handmatige regeneratie uit</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Harskosten bedragen <strong>8-22 euro per liter</strong> afhankelijk van het type.
          Een huishoudelijke ontharder heeft doorgaans 10-25 liter hars nodig: totale
          materiaalkosten 80-550 euro. Een installateur rekent 100-200 euro voor arbeid.
          Totaalkosten zelf doen: 100-550 euro; via monteur: 200-750 euro. Dat is aanzienlijk
          minder dan een nieuw apparaat van 1.000-2.500 euro. Zie ook het overzicht van
          alle{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">
            waterontharder soorten en kosten
          </Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over het harsbed
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder uitleg</Link>,{' '}
          <Link href="/waterontharder/capaciteit" className="text-[#005F8A] underline">capaciteit berekenen</Link>,{' '}
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">regeneratie waterontharder</Link> en{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>.
        </p>
      </main>
    </>
  );
}
