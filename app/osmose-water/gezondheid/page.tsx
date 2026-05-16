import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater en gezondheid: is osmosewater veilig om te drinken?',
  description:
    'Osmosewater is veilig om te drinken. Het lage mineralengehalte (TDS &lt;50 mg/L) is geen gezondheidsrisico. WHO-studie, niermythe en dagelijks gebruik uitgelegd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/gezondheid' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater veilig om dagelijks te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosewater is veilig om dagelijks te drinken bij een normale, gevarieerde voeding. De WHO erkent in haar richtlijnen dat water met laag mineralengehalte geen gezondheidsrisico vormt wanneer de voeding voldoende calcium en magnesium levert. Osmosewater verwijdert bovendien gevaarlijke stoffen als PFAS, lood, nitraat en farmaceutische resten, wat het juist een gezondere keuze maakt dan ongefilterd kraanwater in risicogebieden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat osmosewater te weinig mineralen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puur osmosewater bevat weinig mineralen (TDS 5-50 mg/L), maar dit is zelden een probleem. Calcium en magnesium komen primair uit voeding: zuivel, noten, groenten leveren 80-90% van de dagelijkse behoefte. Water draagt slechts 10-20% bij. Een remineralisatiecartridge (EUR 15-35/jaar) voegt calcium en magnesium terug toe voor wie dit wenst, waardoor het water vergelijkbaar wordt met licht bronwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verzuurt osmosewater je lichaam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, dit is een mythe. Osmosewater heeft een licht zure pH (6,0-7,0) door de absorptie van CO2 uit de lucht. Maar de pH van bloed (7,35-7,45) wordt streng gereguleerd door het bicarbonaat-buffersysteem van het lichaam en de nieren. Maagzuur heeft al een pH van 1,5-3,5. Het drinken van licht zuur water heeft geen meetbaar effect op de bloedpH. Acidose door drinkwater is fysiologisch onmogelijk bij een gezond persoon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater slecht voor je nieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, er is geen wetenschappelijk bewijs dat osmosewater de nieren schaadt. De nieren filteren bloed, niet drinkwater direct. De mineralenconcentratie in bloed wordt door nieren en hormonen (aldosteron, ADH) gereguleerd ongeacht het soort drinkwater. Er zijn geen studies die nierschade bij normale osmosewaterconsumptie aantonen bij mensen met een gevarieerde voeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lekt osmosewater mineralen uit je lichaam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, dit is een onjuist begrip van osmose. Osmose is een proces waarbij water beweegt door een membraan van lage naar hoge concentratie opgeloste stoffen. In het spijsverteringskanaal en bloed zijn de mineraalconcentraties al hoog. Er is geen fysiologisch mechanisme waarbij het drinken van mineraalarm water mineralen uit het lichaam trekt. De nieren reguleren de mineralenbalans in het bloed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik osmosewater remineraliseren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet verplicht, maar aanbevolen voor dagelijks gebruik als primaire drinkwaterbron. Remineralisatie verbetert de smaak (pH van 6,5 naar 7,5), voegt calcium en magnesium toe, en reduceert het risico op looduitloging als u koperen of loden leidingen heeft. Kosten zijn circa EUR 15-35 per jaar voor een cartridge. Zonder remineralisatie is osmosewater ook veilig bij gevarieerde voeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zegt de WHO over osmosewater drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO publiceerde in 2004 een rapport over water met laag TDS-gehalte. Het rapport concludeerde dat bij TDS lager dan 30 mg/L en een voeding die onvoldoende mineralen levert, er mogelijke gezondheidsrisicos bestaan op de lange termijn. Maar: het rapport benadrukt ook dat bij een normale, gevarieerde voeding er geen risico is. Mineralen uit water zijn secundair aan mineralen uit voeding. De WHO beveelt een minimaal TDS van 100 mg/L aan voor drinkwater als primaire bron, dat met remineralisatie bereikt wordt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater beter voor je dan kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor mensen in PFAS-belaste gebieden, woningen met loden leidingen, of regioes met hoog nitraat of lood in het leidingwater: ja, osmosewater is dan aantoonbaar gezonder. Nederlands leidingwater is over het algemeen veilig, maar bevat in sommige regioes hogere concentraties PFAS (0,01-0,04 µg/L) en nitraat (tot 25 mg/L). Osmosefilters verwijderen meer dan 95% van deze stoffen. Voor mensen zonder specifieke risicofactoren is het verschil kleiner maar nog steeds aanwezig.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater en gezondheid: is osmosewater veilig om te drinken?',
  description:
    'Osmosewater is veilig om te drinken. Het lage mineralengehalte (TDS kleiner dan 50 mg/L) is geen gezondheidsrisico bij gevarieerde voeding. WHO-studie en mythen besproken.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/gezondheid',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseGezondheidsPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater en gezondheid', item: 'https://waterfilterplatform.nl/osmose-water/gezondheid' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/osmose-water" className="hover:underline">Osmosewater</a> &rsaquo;{' '}
          <span>Osmosewater en gezondheid</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater en gezondheid: is osmosewater veilig om te drinken?
          </h1>
          <p className="text-gray-600 text-sm">
            WHO-rapport, mythen over mineralen, nieren en pH — wetenschappelijk uitgelegd
          </p>
        </section>

        <QuickAnswer answer="Osmosewater is veilig om dagelijks te drinken bij een gevarieerde voeding. Het lage mineralengehalte (TDS 5-50 mg/L) is geen gezondheidsrisico: mineralen komen primair uit voeding. Mythen over verzuring, nierschade en mineraalverlies zijn wetenschappelijk weerlegd. Met remineralisatiecartridge is osmosewater ideaal als dagelijkse drinkwaterbron." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zegt de WHO over osmosewater?
        </h2>
        <p className="text-gray-700 mb-4">
          De Wereldgezondheidsorganisatie (WHO) publiceerde in 2004 een rapport over de gezondheidsaspecten van water met een laag TDS-gehalte (totaal opgeloste stoffen). Het rapport onderzocht of het drinken van water met TDS lager dan 30 mg/L gezondheidsrisicos met zich meebrengt.
        </p>
        <p className="text-gray-700 mb-4">
          De conclusies waren genuanceerd. Het rapport erkende dat bij langdurig gebruik van water met zeer laag TDS als de <em>enige</em> mineraalbron en bij een voeding die weinig calcium en magnesium levert, marginale mineralentekorten kunnen optreden. Tegelijkertijd benadrukte het rapport expliciet dat bij een normale, gevarieerde westerse voeding er geen gezondheidsrisico bestaat. Water levert slechts 10-20% van de dagelijkse calcium- en magnesiumbehoefte; voeding is de primaire bron.
        </p>
        <p className="text-gray-700 mb-6">
          De WHO beveelt een minimaal TDS van 100 mg/L aan voor drinkwater dat als primaire drinkwaterbron dient. Dit niveau wordt eenvoudig bereikt met een remineralisatiecartridge op een osmosesysteem.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Drie veelgehoorde mythen ontkracht
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-red-400 bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-1">
              Mythe 1: "Osmosewater trekt mineralen uit je lichaam"
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Onwaar.</strong> Deze claim berust op een verkeerd begrip van osmose. Osmose beschrijft de beweging van <em>water</em> door een semipermeabel membraan van lage naar hoge concentratie. In het menselijk lichaam zijn bloedmineraalconcentraties strak gereguleerd door de nieren en het hormonale systeem (aldosteron, ADH). Het drinken van mineraalarm water heeft geen meetbare invloed op bloedmineraalgehaltes bij gezonde personen.
            </p>
            <p className="text-gray-700 text-sm">
              Bovendien absorbeert de darmwand actief mineralen uit voedsel en water. Er is geen passief "uitspoelingsmechanisme" van lichaamsmineral via drinkwater.
            </p>
          </div>

          <div className="border-l-4 border-red-400 bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-1">
              Mythe 2: "Osmosewater verzuurt je lichaam"
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Onwaar.</strong> Osmosewater heeft een licht zure pH van 6,0-7,0 door absorptie van CO2 uit de lucht. Maar de pH van bloed (7,35-7,45) wordt nauwkeurig gereguleerd door drie buffersystemen: bicarbonaat/koolzuur, eiwitten en fosfaatbuffers. Maagzuur heeft zelf al een pH van 1,5-3,5. Het spijsverteringssysteem neutraliseert al het water ver voordat het het bloed bereikt.
            </p>
            <p className="text-gray-700 text-sm">
              Klinische acidose (verzuring van het bloed) treedt op door ernstige nierproblemen, longziekten of diabetes, niet door het drinken van licht zuur water. Er is geen gepubliceerde studie die aantoont dat drinken van osmosewater leidt tot meetbare pH-veranderingen in het bloed.
            </p>
          </div>

          <div className="border-l-4 border-red-400 bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-1">
              Mythe 3: "Osmosewater is schadelijk voor de nieren"
            </h3>
            <p className="text-gray-700 text-sm">
              <strong>Geen bewijs voor.</strong> De nieren filteren bloed, niet drinkwater rechtstreeks. Drinkwater wordt via de darm geabsorbeerd, gemengd met bloed, en vervolgens gefilterd door de nieren. De mineralenconcentratie van drinkwater heeft geen directe invloed op de werklast van de nieren. Voldoende vochtinname (waaronder osmosewater) ondersteunt de nierfunctie juist. Er zijn geen studies die nierschade bij osmosewaterconsumptie aantonen bij mensen met een normale voeding en gezonde nieren.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat er wel klopt: de nuance
        </h2>
        <p className="text-gray-700 mb-4">
          Niet alle zorgen over osmosewater zijn ongegrond. Er is een specifieke situatie waarbij lage mineraleninname via water relevant is: personen met een sterk eenzijdige voeding (weinig zuivel, weinig groenten, weinig noten) en osmosewater als enige drank kunnen op de lange termijn een marginaal lagere inname van calcium en magnesium hebben dan bij mineraalrijker water. Dit betreft een kleine minderheid.
        </p>
        <p className="text-gray-700 mb-6">
          De praktische oplossing is een alkalische remineralisatiecartridge. Kosten: EUR 15-35 per jaar. De cartridge voegt calcium- en magnesiumcarbonaten toe, verhoogt de pH naar 7,0-7,5 en brengt het TDS naar 80-200 mg/L. Dit water is vergelijkbaar met licht bronwater en voldoet ruim aan de WHO-aanbeveling.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsvoordelen van osmosewater: wat is bewezen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">PFAS verwijdering (&gt;95%)</h3>
            <p className="text-gray-700 text-sm">
              PFAS zijn persistente "forever chemicals" die in verband worden gebracht met verhoogd risico op bepaalde kankers, schildklierproblemen en immuniteitsonderdrukning. In PFAS-belaste gebieden (grote delen van Nederland nabij vliegbases, industrieterreinen) is osmose een bewezen effectieve barriere.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Loodverwijdering (&gt;97%)</h3>
            <p className="text-gray-700 text-sm">
              In woningen gebouwd voor 1970 kunnen nog loden leidingen aanwezig zijn. Lood is neurotoxisch zonder veilige drempelwaarde. Osmosefilters verwijderen meer dan 97% van lood uit drinkwater, wat een aantoonbaar gezondheidsvoordeel oplevert voor bewoners van oudere woningen.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Nitraatverwijdering (&gt;90%)</h3>
            <p className="text-gray-700 text-sm">
              In agrarische gebieden (Brabant, Gelderland) overschrijdt nitraat in grondwater soms de EU-norm van 50 mg/L. Osmosefilters verwijderen meer dan 90% van nitraat. Dit is relevant voor zwangere vrouwen en zuigelingen, bij wie nitraat methemoglobinemie kan veroorzaken.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Farmaceutische resten (&gt;95%)</h3>
            <p className="text-gray-700 text-sm">
              Hormonen (ethinylestradiol), antibiotica en pijnstillers worden in sporen aangetroffen in Nederlands oppervlaktewater en soms leidingwater. Osmosemembranen houden meer dan 95% van farmaceutische verbindingen tegen door de moleculaire grootte.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Meer informatie over de specifieke verontreinigingen die osmosefilters verwijderen leest u op de pagina{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater voordelen</Link>.
          Voor gebruik bij zuigelingen raadpleegt u{' '}
          <Link href="/alkalisch-water" className="text-[#005F8A] underline">alkalisch water en gezondheid</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over osmosewater en gezondheid</h2>
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
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filter</Link>,{' '}
          <Link href="/alkalisch-water" className="text-[#005F8A] underline">alkalisch water</Link> en{' '}
          <a href="/osmose-water/vs-mineraalwater" className="text-[#005F8A] underline">osmose vs mineraalwater</a>.
        </p>
      </main>
    </>
  );
}
