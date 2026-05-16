import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Geur uit leidingwater verwijderen: chloor, aards en H2S waterfilter',
  description:
    'Leidingwater met chloor-, aardse of rotte-eierengeur heeft een specifieke oorzaak en oplossing. Actief koolfilter verwijdert chloorgeur. Osmosefilter verwijdert H2S en geosmien. Overzicht van geursoorten en de juiste waterfilter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/geur' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert chloorgeur uit leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een actief koolfilter (GAC of koolstofblok) verwijdert effectief de chloorgeur uit leidingwater. Actieve kool adsorbeert vrij chloor in seconden en trihalomethanen (THM) in minuten. Een filterkraan of een eenvoudige filterkan is al voldoende voor chloorgeur. Bij een stevige chloorgeur in combinatie met andere verontreinigingen is een osmosefilter de meest complete oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat veroorzaakt een aardse of schimmelgeur in leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een aardse of schimmelgeur in leidingwater wordt veroorzaakt door geosmien (geosmin, C12H22O) en 2-methylisoborneol (MIB). Dit zijn geurige metabolieten die worden geproduceerd door actinobacterien en blauwalgen in oppervlaktewater. Drinkwaterbedrijven monitoren deze stoffen en behandelen water met poederkool (PAC) als de concentraties stijgen. Thuis verwijdert een actief koolfilter of osmosefilter de aardse geur effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom ruikt warm leidingwater naar rotte eieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een rotte-eierengeur (waterstofsulfide, H2S) bij warm water wordt vrijwel altijd veroorzaakt door bacteriologische activiteit in de warmwaterboiler. Sulfaatreducerende bacteriën zetten sulfaat om naar H2S bij lage temperaturen (40-50 graden). De eerste stap is de boiler desinfecteren door het water op 70 graden te verhitten gedurende minimaal 30 minuten. Stinkt ook het koude water naar rotte eieren, dan is de oorzaak reductief grondwater of putwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het beste waterfilter voor geur in leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het beste filter hangt af van de geursoort. Voor chloorgeur volstaat een actief koolfilter. Voor aardse geur (geosmien, MIB) is een GAC-filter of osmosefilter effectief. Voor H2S (rotte eieren) uit koud water is een actief koolfilter met zilver of een osmosefilter de beste keuze. Voor een combinatie van geuren is een meerstaps osmosesysteem met actief koolfilter de meest complete oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan een filterkan helpen tegen geur in leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een filterkan met actief koolpatroon (zoals Brita of PearlCo) verwijdert chloorgeur effectief. Voor aardse geur door geosmien of MIB is een filterkan ook afdoende in de meeste gevallen. Voor H2S of sterke verontreinigingen is een filterkan onvoldoende; daar is een onderkraan- of osmosefilter nodig. Vervang het filterpatroon op tijd, want een verlopen filter kan zelf een muffe geur produceren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter geur uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een osmosesysteem combineert een actief koolfilter (prefilter) met een osmosemembraan en een koolstof postfilter. Dit systeem verwijdert zowel chloorgeur, aardse geur (geosmien), H2S, als geuren afkomstig van organische verbindingen en vluchtige stoffen. Een osmosefilter is de meest complete oplossing voor alle soorten watergeur, maar duurder en complexer dan een eenvoudig koolfilter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik een geur in leidingwater melden aan het drinkwaterbedrijf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meld een geur onmiddellijk als: het water naar gas ruikt (nooit normaal, kan op lekkage duiden), er een petrochemische of benzinegeur is (kan wijzen op PFAS of andere industriele verontreiniging), of als de geur plotseling optreedt na jarenlang geurloos water (kan een leidingbreuk of terugstroming zijn). Bel in die gevallen direct het storingsnummer van uw drinkwaterbedrijf. Chloorgeur en aardse geur zijn doorgaans onschadelijk maar u kunt dit ook melden voor registratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom ruikt mijn leidingwater na installatie van een nieuw filter muf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een muf of schimmelachtige geur na installatie van een nieuw filter wijst op onvoldoende doorspoelen. Nieuwe actief koolfilters bevatten koolstofgruis en geurmoleculen die vrijkomen bij de eerste liter water. Spoel een nieuw filter altijd minimaal 3-5 minuten door voordat u het water drinkt. Bij een oudere filterkan met een verlopen patroon groeit biofilm op het koolstofoppervlak, wat ook een muffe geur geeft. Vervang het filterpatroon tijdig.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Geur uit leidingwater verwijderen: chloor, aards en H2S waterfilter',
  description:
    'Leidingwater met chloor-, aardse of rotte-eierengeur heeft een specifieke oorzaak en oplossing. Actief koolfilter verwijdert chloorgeur; osmosefilter verwijdert H2S en geosmien.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/geur',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterGeurPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Geur uit leidingwater', item: 'https://waterfilterplatform.nl/waterfilter/geur' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Geur uit leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Geur uit leidingwater verwijderen: chloor, aards en H2S waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Leidingwater dat naar chloor, aarde of rotte eieren ruikt is vervelend maar heeft
            in de meeste gevallen een bekende oorzaak en een gerichte oplossing. De juiste
            filterkeuze hangt af van de geursoort. Op deze pagina vindt u per geurtype de
            oorzaak, de risicobeoordeling en het meest effectieve waterfilter.
          </p>
        </section>

        <QuickAnswer answer="Chloorgeur in leidingwater verdwijnt met een actief koolfilter. Aardse geur door geosmien of MIB verdwijnt ook met actieve kool of osmose. H2S (rotte eieren) bij warm water: boiler desinfecteren. Bij koud water: osmosefilter of beluchting. Plotselinge chemische of gasgeuren direct melden aan drinkwaterbedrijf." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Overzichtstabel: geursoort, oorzaak en juiste filter
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geursoort</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Oorzaak</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Juiste filter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijderingstijd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloorgeur</td>
                <td className="border border-gray-300 px-3 py-2">Desinfectiemiddel, THM</td>
                <td className="border border-gray-300 px-3 py-2">Actief koolfilter / filterkan</td>
                <td className="border border-gray-300 px-3 py-2">Seconden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Aardse / schimmelgeur</td>
                <td className="border border-gray-300 px-3 py-2">Geosmien, MIB (blauwalgen)</td>
                <td className="border border-gray-300 px-3 py-2">GAC-filter of osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2">Minuten</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Rotte eieren (warm)</td>
                <td className="border border-gray-300 px-3 py-2">H2S in boiler (bacteriën)</td>
                <td className="border border-gray-300 px-3 py-2">Boiler desinfecteren (70 graden)</td>
                <td className="border border-gray-300 px-3 py-2">Eenmalige behandeling</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Rotte eieren (koud)</td>
                <td className="border border-gray-300 px-3 py-2">Reductief grondwater, H2S</td>
                <td className="border border-gray-300 px-3 py-2">Actief koolfilter met zilver of osmose</td>
                <td className="border border-gray-300 px-3 py-2">Continu</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Muf / schimmelgeur</td>
                <td className="border border-gray-300 px-3 py-2">Verlopen filterpatroon</td>
                <td className="border border-gray-300 px-3 py-2">Filter vervangen en reinigen</td>
                <td className="border border-gray-300 px-3 py-2">Direct na vervanging</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Metaalachtige geur</td>
                <td className="border border-gray-300 px-3 py-2">Nieuwe leidingen (koper, zink)</td>
                <td className="border border-gray-300 px-3 py-2">Extra doorspoelen; osmose structureel</td>
                <td className="border border-gray-300 px-3 py-2">Tijdelijk of continu</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloorgeur: meest voorkomende geur in Nederlands leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland wordt leidingwater gedesinfecteerd met chloor of chlooramine om bacteriologische
          veiligheid te garanderen. Dit chloor is wettelijk toegestaan en onschadelijk in de
          gebruikte concentraties, maar de geur kan hinderlijk zijn. Twee groepen verbindingen
          zijn verantwoordelijk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Vrij chloor (Cl2):</strong> het actieve desinfectiemiddel. Geeft een
            zwembadachtige geur. Actieve kool adsorbeert vrij chloor in seconden via een
            chemische reactie: Cl2 + C + H2O &rarr; CO2 + HCl.
          </li>
          <li>
            <strong>Trihalomethanen (THM):</strong> reactieproducten van chloor met organische
            stoffen in het water. Worden geassocieerd met een muffe chloorgeur. Een actief
            koolfilter (GAC, granulated activated carbon) verwijdert THM in minuten door adsorptie.
            Een eenvoudige filterkan (Brita) is al effectief voor chloorgeur.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Als de chloorgeur tijdelijk versterkt is (na werkzaamheden aan het leidingnet of
          bij extreme warmte in de zomer), is even laten lopen van de kraan de eenvoudigste
          oplossing: het water ventileert snel. Lees meer over waterfiltertypen op onze
          pagina over{' '}
          <Link href="/waterfilter/soorten" className="text-[#005F8A] underline">
            soorten waterfilters
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aardse geur en schimmelgeur: geosmien en MIB
        </h2>
        <p className="text-gray-700 mb-4">
          Een aardse, moerasachtige of schimmelachtige geur in leidingwater wordt veroorzaakt door
          twee organische verbindingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Geosmien (geosmin, C12H22O):</strong> een terpeenachtig metaboliet dat wordt
            geproduceerd door actinobacterien (Streptomyces) en blauwalgen (cyanobacterien) in
            oppervlaktewater. De menselijke neus is extreem gevoelig voor geosmien: we ruiken het
            al bij concentraties van 5-10 nanogram per liter (ng/L). Dit verklaart waarom kleine
            pieken in de productie al opvallend zijn.
          </li>
          <li>
            <strong>2-Methylisoborneol (MIB):</strong> een vergelijkbaar metaboliet met een
            sterke schimmelachtige geur. Wordt geproduceerd door dezelfde bacteriestammen als
            geosmien. Drempelwaarde voor de menselijke neus: circa 10 ng/L.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Drinkwaterbedrijven monitoren geosmien en MIB in oppervlaktewater en behandelen
          pieken met poederkool (PAC, powdered activated carbon). Thuis verwijdert een
          <strong> GAC-filter</strong> (granular activated carbon) of een{' '}
          <strong>osmosefilter</strong> geosmien en MIB effectief door adsorptie.
          Een eenvoudige filterkan helpt ook, maar bij hoge concentraties is een onderkraan
          GAC-filter betrouwbaarder.
        </p>
        <p className="text-gray-700 mb-6">
          De aardse geur is seizoensgebonden: pieken treden op in de late zomer en vroeg najaar,
          wanneer blauwalgen in oppervlaktewaterreservoirs het meest actief zijn.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Rotte-eierengeur (H2S): oorzaak en aanpak
        </h2>
        <p className="text-gray-700 mb-4">
          Waterstofsulfide (H2S) geeft de karakteristieke rotte-eierengeur. De aanpak verschilt
          sterk afhankelijk van of de geur uit warm of koud water komt:
        </p>

        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-[#003F5C] mb-2">Rotte-eierengeur alleen bij warm water</h3>
          <p className="text-gray-700 text-sm mb-2">
            Dit is vrijwel altijd een boilerprobleem. Bij temperaturen van 40-60 graden groeien
            sulfaatreducerende bacteriën die sulfaat (SO4) omzetten naar waterstofsulfide (H2S).
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Oplossing:</strong> verwarm de boiler minimaal eenmalig op 70 graden Celsius
            gedurende 30 minuten (thermische desinfectie). Stel daarna de boilertemperatuur in op
            minimaal 60 graden om hergroei te voorkomen. Spoel alle warmwatertaps na de desinfectie
            grondig door. Bij frequente terugkeer: boiler reinigen of vervangen.
          </p>
        </div>

        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-2">Rotte-eierengeur ook bij koud water</h3>
          <p className="text-gray-700 text-sm mb-2">
            Als ook koud water naar rotte eieren ruikt, is de oorzaak reductief grondwater of
            putwater met van nature aanwezige H2S.
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Oplossingen:</strong> (1) beluchting via een bel- of trommelbeluchter
            (H2S verdampt snel bij contact met lucht); (2) een actief koolfilter met zilver
            dat ook bacteriologische activiteit remt; (3) een osmosefilter dat H2S via
            de actief koolstof prefilter verwijdert. Voor putwater is een wateranalyse door
            een gecertificeerd laboratorium de eerste stap.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Muffe of schimmelgeur: het filter zelf is de oorzaak
        </h2>
        <p className="text-gray-700 mb-4">
          Paradoxaal genoeg kan een waterfilter zelf de bron zijn van een muffe geur. Dit
          gebeurt in twee situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Verlopen filterpatroon:</strong> een filterkan of onderkraan koolfilter
            dat te lang niet is vervangen, wordt een broedplaats voor biofilm. De kool is
            verzadigd, bacteriën koloniseren het filtermedium en produceren geurige metabolieten.
            Vervang het filterpatroon altijd op tijd (doorgaans elke 1-3 maanden voor filterkans,
            elke 6-12 maanden voor onderkraan GAC-filters).
          </li>
          <li>
            <strong>Nieuw filter niet doorgespoeld:</strong> nieuwe actief koolfilters bevatten
            koolstofgruis en soms productiegerelateerde geuren. Spoel een nieuw filterpatroon
            altijd minimaal 3-5 minuten door voordat u het water gebruikt.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een filterkan die regelmatig wordt gereinigd en waarvan het patroon tijdig wordt
          vervangen, produceert geen geur. Lees meer over het onderhoud van waterfilters op
          onze pagina over{' '}
          <Link href="/waterfilter/onderhoud-schema" className="text-[#005F8A] underline">
            waterfilter onderhoud
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Metaalachtige geur of smaak: nieuwe leidingen
        </h2>
        <p className="text-gray-700 mb-4">
          Een metaalachtige of bittere geur treedt op bij nieuwe koperen of verzinkte stalen
          leidingen. Koper en zink lossen licht op in water, met name in de eerste maanden
          na installatie. Dit is tijdelijk en verdwijnt doorgaans na enkele weken tot maanden
          naarmate de leidingen een beschermende kalklaag opbouwen.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Tijdelijke aanpak:</strong> spoel elke ochtend 30-60 seconden koud water
            voordat u het drinkt. Dit verwijdert water dat de nacht heeft stilgestaan en de
            hoogste metaalconcentraties bevat.
          </li>
          <li>
            <strong>Structurele aanpak:</strong> een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
            verwijdert zware metalen inclusief koper, zink en lood voor 95-99%. Aanbevolen
            bij oudere woningen met twijfelachtig leidingwerk of bij aanhoudende metaalgeur.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een geur een alarmsignaal?
        </h2>
        <p className="text-gray-700 mb-4">
          Sommige geuren in leidingwater zijn alarmsignalen die directe actie vereisen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Gasgeur (aardgasachtig):</strong> nooit normaal in water. Kan wijzen op
            een gaslekkage in de nabijheid van de waterleiding. Verlaat het pand en bel
            direct de gasstoring (0800-9009 voor Gasunie).
          </li>
          <li>
            <strong>Petrochemische geur (benzine, oplosmiddelen):</strong> kan wijzen op
            PFAS-verontreiniging, industriele lozing of bodemverontreiniging. Drink het
            water niet en meld dit direct aan uw drinkwaterbedrijf en de gemeente.
          </li>
          <li>
            <strong>Plotselinge geurverandering:</strong> als water dat normaal geurloos is
            opeens sterk naar chloor, rotte eieren of iets onbekends ruikt, kan dit wijzen
            op een leidingbreuk, terugstroming of calamiteit in het leidingnet. Meld dit
            bij uw drinkwaterbedrijf.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Chloorgeur en aardse geur zijn doorgaans onschadelijk maar hinderlijk. Alle andere
          geuren zonder bekende oorzaak dienen te worden gemeld. Zie ook ons overzicht van
          mogelijke{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">
            verontreinigingen in leidingwater
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Actief koolfilter versus osmosefilter voor geur: wanneer kiest u wat?
        </h2>
        <p className="text-gray-700 mb-4">
          De keuze tussen een eenvoudig actief koolfilter en een volwaardig osmosesysteem hangt
          af van uw situatie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Actief koolfilter (filterkan of onderkraan GAC):</strong> voldoende voor
            chloorgeur, aardse geur en milde organische geuren. Goedkoop (&euro;20-150),
            eenvoudig te installeren en te onderhouden. Verwijdert echter geen nitraat,
            zware metalen, nitriet of PFAS.
          </li>
          <li>
            <strong>Osmosefilter (onderkraan RO-systeem):</strong> de meest complete oplossing
            voor alle geursoorten plus verontreinigingen. Verwijdert chloor, geosmien, H2S,
            metalen, nitraat en PFAS. Hogere aanschafkosten (&euro;200-600) en waterverbruik
            (afvalwater per liter gefilterd water), maar het meest veelzijdig. Lees ons
            overzicht van de{' '}
            <Link href="/waterfilter/vergelijken" className="text-[#005F8A] underline">
              beste waterfilters voor thuis
            </Link>.
          </li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over geur in leidingwater
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
          <Link href="/waterfilter/soorten" className="text-[#005F8A] underline">soorten waterfilters</Link>,{' '}
          <Link href="/waterfilter/vergelijken" className="text-[#005F8A] underline">waterfilters vergelijken</Link>,{' '}
          <Link href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">chloor uit water verwijderen</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
