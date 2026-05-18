import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat zit er in leidingwater? Verontreinigingen in Nederlands drinkwater',
  description: 'Nederlands leidingwater is veilig maar bevat sporen van medicijnen, PFAS, nitraat, lood en microplastics. Ontdek wat er echt in zit en wanneer filteren.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/verontreinigingen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Nederlands leidingwater veilig om te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Nederlands leidingwater behoort tot de veiligste ter wereld. Het RIVM en de waterbedrijven monitoren meer dan 50 parameters continu. Wettelijke normen worden voor de overgrote meerderheid van de parameters gehaald. Toch bevat leidingwater sporen van stoffen waarvoor nog geen drinkwaternorm bestaat (medicijnresten, sommige PFAS-verbindingen, microplastics) of stoffen die regionaal boven normen kunnen uitkomen (lood in oude leidingen, PFAS in hotspot-gebieden). Voor gezonde volwassenen is leidingwater veilig. Kwetsbare groepen zoals zuigelingen, zwangere vrouwen en mensen met een verzwakt immuunsysteem kunnen baat hebben bij extra filtratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zitten er medicijnen in ons leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In sporen, ja. Medicijnresten zoals ibuprofen, metformine, antibiotica en hormonen (ethinylestradiol uit de anticonceptiepil) worden aangetroffen in oppervlaktewater dat als drinkwaterbron dient. Na zuivering door waterbedrijven blijven zeer kleine hoeveelheden over, doorgaans in nanogram per liter (ng/L). Er bestaan geen EU-drinkwaternormen voor de meeste medicijnresten. Bij de huidige concentraties is geen direct gezondheidsrisico aangetoond, maar cumulatieve en langetermijneffecten zijn nog onvoldoende onderzocht. Een osmosefilter verwijdert 90-99% van medicijnresten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn PFAS en wanneer zijn ze gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PFAS (per- en polyfluoralkylstoffen) zijn een groep van meer dan 10.000 synthetische chemicalien die zeer persistent zijn in het milieu en het menselijk lichaam. Ze worden gebruikt in anti-aanbaklagen, blusschuim, textielimpregnering en vele industriele toepassingen. PFAS hopen zich op in het lichaam (bio-accumulatie) en zijn gelinkt aan verhoogd risico op schildklieraandoeningen, bepaalde kankers, verminderde vruchtbaarheid en verzwakt immuunsysteem. De EU-norm voor drinkwater is sum-20 PFAS maximaal 0,10 microgram/L, en sum-4 PFAS (PFOA, PFOS, PFNA, PFHxS) maximaal 0,05 microgram/L, van kracht vanaf 2026. In hotspot-gebieden rond Chemours (Dordrecht) en Schiphol worden hogere concentraties aangetroffen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat leidingwater microplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in zeer kleine hoeveelheden. RIVM-onderzoek uit 2022 vond 0 tot 7 microplasticdeeltjes per liter in Nederlands leidingwater, afhankelijk van de regio en het zuiveringsproces. Er bestaat momenteel geen wettelijke norm voor microplastics in drinkwater. De gezondheidseffecten van microplastics in drinkwater zijn nog onvoldoende bekend; lopend onderzoek richt zich op mogelijke hormoonverstorende effecten van additieven in plastic. Een omgekeerde osmosefilter met een membraanporiegrootte van 0,0001 micrometer verwijdert meer dan 99% van microplastics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verwijder ik nitraat uit leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nitraat wordt het effectiefst verwijderd door omgekeerde osmose: een RO-filter haalt 85-95% van het nitraat uit het water. Koolstoffilters en UV-filters zijn niet effectief tegen nitraat. Ionenwisseling is een alternatief maar minder gangbaar voor huishoudelijk gebruik. De EU-norm voor nitraat in drinkwater is maximaal 50 mg/L. In landbouwintensieve gebieden (Brabant, Gelderland, Overijssel) kan nitraat in grondwater de norm benaderen, al voldoet leidingwater in de praktijk vrijwel altijd aan de norm dankzij menging en zuivering door waterbedrijven. Voor zuigelingenvoeding geldt extra voorzorg: hoog nitraat kan methemoglobinemie (blauwe baby syndroom) veroorzaken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is loodvervuiling in leidingwater een risico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lood in leidingwater is een risico als uw woning een loodbinnenleiding heeft, die voor 1960 is aangelegd. Het distributienet van waterbedrijven is al grotendeels loodvrij gemaakt, maar binnenleidingen in oudere woningen zijn soms nog van lood. Lood lost op in stilstaand water in de leiding, vooral bij zacht en zuur water. Symptomen van loodvergiftiging zijn niet direct merkbaar maar hebben ernstige langetermijneffecten, met name op de hersenontwikkeling van jonge kinderen. RIVM-norm is maximaal 10 microgram/L. Laat altijd water doorlopen voor gebruik als u in een oud pand woont. Een osmosefilter verwijdert meer dan 95% van opgelost lood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter haalt de meeste verontreinigingen weg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose (RO) is het meest brede en effectieve huishoudelijke filter. Het verwijdert: PFAS (meer dan 95%), nitraat (85-95%), lood (meer dan 95%), microplastics (meer dan 99%), medicijnresten (90-99%), chloor en chloaraminen (meer dan 99%), zware metalen. Een koolstoffilter verwijdert chloor, geur en deels organische stoffen, maar geen PFAS, nitraat of lood. UV-filter doodt bacterien en virussen maar verwijdert geen chemische stoffen. Voor optimale bescherming combineert een kwalitatief osmosesysteem altijd een koolstof voorfilter, RO-membraan en nafilter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik wat er in mijn leidingwater zit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uw waterbedrijf is wettelijk verplicht jaarlijks een transparantierapport te publiceren met de gemeten waarden voor alle wettelijk gecontroleerde parameters. U vindt dit op de website van uw waterbedrijf, of u kunt het opvragen. RIVM publiceert ook nationale drinkwaterkwaliteitsrapportages. Voor een meting van specifieke stoffen in uw woning (bijv. lood in oude binnenleidingen of PFAS in een hotspot-gebied) kunt u een gecertificeerd laboratorium inschakelen voor een watermonsteranalyse, die doorgaans tussen de 50 en 200 euro kost afhankelijk van het aantal parameters.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Wat zit er in leidingwater? Verontreinigingen in Nederlands drinkwater',
  description: 'Nederlands leidingwater is veilig maar bevat sporen van medicijnen, PFAS, nitraat, lood en microplastics. Ontdek wat er echt in zit en wanneer filteren.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/verontreinigingen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function VerontreinigingenLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Verontreinigingen leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/verontreinigingen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/leidingwater" className="hover:underline">Leidingwater</Link> &rsaquo;{' '}
          <span>Verontreinigingen leidingwater</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Wat zit er in leidingwater? Verontreinigingen in Nederlands drinkwater
          </h1>
          <p className="text-[#005F8A] text-lg">
            Nederlands leidingwater behoort tot de veiligste ter wereld, maar bevat sporen van PFAS, medicijnen, nitraat, lood en microplastics. Wat moet u weten en wanneer is filteren zinvol?
          </p>
        </div>

        <QuickAnswer answer="Nederlands leidingwater voldoet aan alle wettelijke normen en is veilig. Toch bevat het sporen van PFAS (EU-norm 0,10 microgram/L sum-20 vanaf 2026), medicijnresten (geen norm), nitraat (max 50 mg/L), lood (max 10 microgram/L in oude leidingen) en microplastics. Een osmosefilter verwijdert al deze stoffen het meest effectief." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe wordt de kwaliteit van Nederlands leidingwater gecontroleerd?
        </h2>
        <p className="text-gray-700 mb-4">
          Het RIVM (Rijksinstituut voor Volksgezondheid en Milieu) en de waterbedrijven monitoren de kwaliteit van Nederlands drinkwater continu. De wettelijke basis is de <strong>Drinkwaterwet</strong> en de EU <strong>Drinkwaterrichtlijn 2020/2184</strong>. Er worden meer dan 50 parameters gecontroleerd, van bacterien en zware metalen tot pesticiden en medicijnresten.
        </p>
        <p className="text-gray-700 mb-6">
          Jaarlijks publiceert het RIVM een nationaal drinkwaterkwaliteitsrapport. In 2023 voldeed meer dan 99,9% van alle metingen aan de wettelijke normen. Dat is indrukwekkend, maar het betekent niet dat er geen zorgstoffen zijn: voor sommige stoffen bestaat nog geen wettelijke norm, terwijl wetenschappelijk bewijs voor schadelijke effecten groeit.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De 6 belangrijkste verontreinigingen uitgelicht
        </h2>

        {/* PFAS */}
        <div className="border-l-4 border-[#003F5C] pl-4 mb-6">
          <h3 className="text-xl font-semibold text-[#003F5C] mb-2">1. PFAS &mdash; de eeuwige chemicalien</h3>
          <p className="text-gray-700 mb-3">
            PFAS (per- en polyfluoralkylstoffen) zijn een groep van meer dan 10.000 synthetische stoffen die worden gebruikt in anti-aanbaklagen, blusschuim (AFFF), waterafstotende kleding en talloze industriele toepassingen. Ze worden ook wel &quot;eeuwige chemicalien&quot; genoemd omdat ze vrijwel niet afbreken in het milieu of het menselijk lichaam.
          </p>
          <p className="text-gray-700 mb-3">
            In Nederland zijn twee hotspot-gebieden van bijzondere zorg: het gebied rond <strong>Chemours in Dordrecht</strong> (voormalig DuPont) waar GenX-verbindingen worden uitgestoten, en de <strong>Schiphol-zone</strong> waar historisch gebruik van PFAS-houdend blusschuim het grondwater heeft verontreinigd. Waterbedrijven in deze gebieden treffen extra maatregelen en monitoren intensief.
          </p>
          <p className="text-gray-700 mb-2">
            De nieuwe EU-norm (van kracht vanaf 2026):
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-3 space-y-1">
            <li><strong>Sum-20 PFAS</strong>: maximaal 0,10 microgram/L</li>
            <li><strong>Sum-4 PFAS</strong> (PFOA, PFOS, PFNA, PFHxS): maximaal 0,05 microgram/L</li>
          </ul>
          <p className="text-gray-700">
            PFAS zijn gelinkt aan schildklieraandoeningen, bepaalde kankers, verminderde vruchtbaarheid en verzwakt immuunsysteem. Een osmosefilter verwijdert meer dan 95% van PFAS uit drinkwater.
          </p>
        </div>

        {/* Medicijnen */}
        <div className="border-l-4 border-[#005F8A] pl-4 mb-6">
          <h3 className="text-xl font-semibold text-[#003F5C] mb-2">2. Medicijnresten &mdash; geen norm, wel aanwezig</h3>
          <p className="text-gray-700 mb-3">
            Medicijnen worden door het menselijk lichaam uitgescheiden via urine en feces, komen zo in het riool terecht en worden niet volledig verwijderd door rioolwaterzuiveringsinstallaties (rwzi). In oppervlaktewater dat als drinkwaterbron dient, worden sporen gevonden van hormonen (ethinylestradiol uit de pil), pijnstillers (ibuprofen, diclofenac), diabetesmedicijnen (metformine), anti-epileptica (carbamazepine) en antibiotica.
          </p>
          <p className="text-gray-700 mb-3">
            Na zuivering door drinkwaterbedrijven zijn de concentraties extreem laag (nanogram per liter), maar er bestaan nog geen EU-drinkwaternormen voor de meeste medicijnresten. De EU Drinkwaterrichtlijn 2020 heeft een monitoringswatchlist ingesteld voor enkele stoffen. Ultrafiltratie verwijdert bacterien effectief maar slechts een deel van opgeloste medicijnresten. Osmose verwijdert 90-99% van farmaceutische verbindingen.
          </p>
        </div>

        {/* Nitraat */}
        <div className="border-l-4 border-[#003F5C] pl-4 mb-6">
          <h3 className="text-xl font-semibold text-[#003F5C] mb-2">3. Nitraat &mdash; landbouwdruk op grondwater</h3>
          <p className="text-gray-700 mb-3">
            Nitraat komt in grondwater via intensieve landbouw: stikstofhoudende meststoffen (kunstmest en mest) spoelen door de bodem en verontreinigen grondwaterlagen. In landbouwintensieve gebieden in Brabant, Gelderland en Overijssel kan het nitraatniveau in onbehandeld grondwater de EU-drinkwaternorm van <strong>50 mg/L</strong> benaderen of overschrijden.
          </p>
          <p className="text-gray-700 mb-3">
            Waterbedrijven mengen grondwater uit verschillende winputten en passen zuivering toe zodat het distributienet ruimschoots aan de norm voldoet. Voor particuliere waterputten geldt dit niet &mdash; eigenaren zijn zelf verantwoordelijk. Voor zuigelingen is nitraat extra gevaarlijk: het kan methemoglobinemie (het &quot;blauwebabysyndroom&quot;) veroorzaken. Een osmosefilter verwijdert 85-95% van nitraat.
          </p>
        </div>

        {/* Lood */}
        <div className="border-l-4 border-[#005F8A] pl-4 mb-6">
          <h3 className="text-xl font-semibold text-[#003F5C] mb-2">4. Lood &mdash; risico in woningen van voor 1960</h3>
          <p className="text-gray-700 mb-3">
            Het distributienet van Nederlandse waterbedrijven is grotendeels vrij van loden leidingen. Het risico zit in <strong>binnenleidingen van woningen gebouwd voor circa 1960</strong>, die soms nog loden aansluitstukken of leidingen bevatten. Lood lost op in stilstaand water, met name in zacht en licht zuur water.
          </p>
          <p className="text-gray-700 mb-3">
            De RIVM-norm en EU-drinkwaternorm voor lood is maximaal <strong>10 microgram/L</strong>. Er is geen veilige ondergrens voor loodblootstelling vastgesteld, met name voor kinderen: lood heeft neurotoxische effecten op de hersenontwikkeling. Bij twijfel over loden leidingen: laat altijd 2-3 liter water doorlopen voor gebruik, of laat een meting uitvoeren. Een osmosefilter verwijdert meer dan 95% van opgelost lood.
          </p>
        </div>

        {/* Microplastics */}
        <div className="border-l-4 border-[#003F5C] pl-4 mb-6">
          <h3 className="text-xl font-semibold text-[#003F5C] mb-2">5. Microplastics &mdash; overal aanwezig, norm ontbreekt</h3>
          <p className="text-gray-700 mb-3">
            Microplastics (deeltjes kleiner dan 5 mm, doorgaans &lt;1 mm) zijn in vrijwel alle onderzochte wateren aangetroffen. RIVM-onderzoek uit 2022 vond <strong>0 tot 7 microplasticdeeltjes per liter</strong> in Nederlands leidingwater, afhankelijk van de regio en het zuiveringsproces. Er bestaat momenteel geen wettelijke drinkwaternorm voor microplastics, hoewel de EU Drinkwaterrichtlijn 2020 het als monitoringsparameter heeft opgenomen.
          </p>
          <p className="text-gray-700 mb-3">
            De gezondheidseffecten zijn nog onzeker, maar onderzoek richt zich op mogelijke hormoonverstorende effecten van additieven in microplastics en op ontstekingsreacties in het maag-darmkanaal. Een RO-filter met een membraanporiegrootte van 0,0001 micrometer verwijdert meer dan 99% van alle microplasticdeeltjes.
          </p>
        </div>

        {/* Chloor */}
        <div className="border-l-4 border-[#005F8A] pl-4 mb-6">
          <h3 className="text-xl font-semibold text-[#003F5C] mb-2">6. Chloor en desinfectiebijproducten (THMs)</h3>
          <p className="text-gray-700 mb-3">
            Chloor wordt door sommige waterbedrijven toegevoegd als desinfectiemiddel. Het bijproduct hiervan, <strong>trihalomethanen (THMs)</strong>, ontstaat wanneer chloor reageert met organisch materiaal. De EU-norm voor de som van vier THMs is maximaal 0,1 mg/L. Bij langdurige blootstelling aan hoge THM-concentraties is epidemiologisch een klein verhoogd risico op blaaskanker aangetoond.
          </p>
          <p className="text-gray-700">
            Meer details vindt u op onze pagina over <Link href="/leidingwater/chloor" className="text-[#005F8A] underline">chloor in leidingwater</Link>.
          </p>
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtermethoden per verontreiniging: vergelijkingstabel
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filter</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">PFAS</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Medicijnen</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Nitraat</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Lood</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Microplastics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Koolstoffilter (GAC)</td>
                <td className="border border-gray-300 px-3 py-2 text-center">deels</td>
                <td className="border border-gray-300 px-3 py-2 text-center">deels</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center">deels</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">RO-osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">&gt;95%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">90-99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">85-95%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">&gt;95%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">&gt;99%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">UV-filter</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Keramisch filter</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center">deels</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-6 italic">
          UV- en keramische filters zijn effectief tegen bacterien en parasieten, maar verwijderen geen opgeloste chemische stoffen. RO-osmose is de enige huishoudelijke methode die breed effectief is tegen chemische verontreinigingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is filteren zinvol?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste Nederlanders is leidingwater veilig genoeg om te drinken zonder extra filter. Er zijn echter situaties waarbij een filter extra zekerheid biedt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Huurwoning of koopwoning van voor 1960</strong>: verhoogd risico op loden binnenleidingen. Laat water doorlopen of installeer een filter</li>
          <li><strong>Wonen in PFAS-hotspot</strong> (Dordrecht/Chemours-zone, Schiphol-omgeving): extra PFAS-monitoring door waterbedrijf, maar extra zekerheid via osmosefilter is zinvol</li>
          <li><strong>Zuigelingen en zwangere vrouwen</strong>: extra voorzorg voor nitraat, lood en medicijnresten bij de bereiding van flesvoeding</li>
          <li><strong>Smaakklachten</strong>: chloorlucht of metaalsmaak wijst op mogelijke kwaliteitsproblemen of oude leidingen</li>
          <li><strong>Immunogecompromitteerde personen</strong>: extra bescherming tegen microbiologische risicos via UV of ultrafiltratie</li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over verontreinigingen in leidingwater</h2>
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
          <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS waterfilter</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/leidingwater/chloor" className="text-[#005F8A] underline">chloor in leidingwater</Link> en{' '}
          <Link href="/leidingwater/bacterien" className="text-[#005F8A] underline">bacterien in leidingwater</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater: compleet overzicht</h3>
              <p className="text-sm text-gray-600">Alle stoffen die voorkomen in Nederlands drinkwater: van mineralen tot verontreinigingen en hun normen.</p>
            </Link>
            <Link href="/filtertechnieken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken vergelijken</h3>
              <p className="text-sm text-gray-600">Overzicht van alle waterfiltertechnieken: welke methode verwijdert welke verontreiniging het beste?</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
