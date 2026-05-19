import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kokend water kraan schoonmaken: ontkalken, sproeikop en boiler reinigen',
  description:
    'Een kokend water kraan schoonmaak je maandelijks aan de buitenkant en ontkalkt de sproeikop elk kwartaal. De boiler saneer je jaarlijks met citroenzuur.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/schoonmaken' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik mijn kokend water kraan ontkalken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De sproeikop ontkalkt u elk kwartaal (elke 3 maanden) door deze los te draaien en 30 minuten te weken in een 1:1 water-azijn oplossing of commerciele ontkalkingsoplossing. De boiler ontkalkt u jaarlijks bij hard water (boven 20 dH) en tweejaarlijks bij zacht water. Als de kokend water kraan gekoppeld is aan een osmosefilter produceert de boiler vrijwel kalkvrij water en is inwendig ontkalken nauwelijks nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe maak ik de sproeikop van mijn kokend water kraan schoon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Draai de sproeikop met de hand los (handdraad, geen gereedschap nodig bij de meeste modellen). Leg de sproeikop 30 minuten in een oplossing van gelijke delen water en witte azijn, of gebruik een commercieel ontkalkingsmiddel. Spoel grondig af met koud water en draai de sproeikop terug. Gebruik geen schuurmiddelen of staalwol op chroomoppervlakken, want dit beschadigt de afwerking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe ontkalkt ik de boiler van een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sluit de boiler af en laat het systeem volledig afkoelen. Los 1 theelepel citroenzuurpoeder op in 500 ml lauw water. Voer de oplossing via de bovenkant in de boiler (raadpleeg de handleiding van uw merk, want Quooker en PureAqua kennen verschillende procedures). Laat 1 tot 2 uur inwerken en spoel vervolgens 3 keer door met schoon water. Vul de boiler opnieuw en verwarm tot werktemperatuur. Raadpleeg altijd de fabriekshandleiding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Citroenzuur of azijn voor het ontkalken van een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de sproeikop zijn beide geschikt: azijn (1:1 met water) is goedkoop en makkelijk verkrijgbaar. Voor de boiler heeft citroenzuurpoeder de voorkeur: het laat geen geur achter, is goed afspoelbaar en is vriendelijker voor de inwendige materialen. Gebruik nooit onverdund azijn of harde zuren zoals zoutzuur in de boiler; dit beschadigt de RVS-binnenwand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik geen kalkproblemen als ik een osmosefilter heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Correct. Een omgekeerde osmose filter verwijdert vrijwel alle opgeloste mineralen, waaronder kalk (calciumcarbonaat). Water dat via een osmosefilter door de boiler van de kokend water kraan stroomt is grotendeels mineraalvrij, waardoor kalkafzetting in de boiler minimaal is. Inwendig ontkalken is bij een osmosekoppeling nauwelijks of niet nodig. De sproeikop en buitenkant blijven wel regulier onderhoud vragen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat moet ik doen na een lange vakantie met de kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tap na thuiskomst minimaal 2 liter water af en gooi dit weg voordat u het kokende water gebruikt. Dit verwijdert stilstaand water dat in de leidingen en deels in de boiler heeft gestaan. Volledige sanering is bij een normale vakantie (1-4 weken) niet nodig: de boiler staat continu op 100 graden of hoger, wat bacteriegroei verhindert. Wel aanbevolen: laat het systeem 24 uur voor vertrek op temperatuur staan en schakel dan uit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik het filter van mijn kokend water kraan vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een kokend water kraan met geintegreerd of gekoppeld filtratiesysteem vervangt u het actief koolfilter jaarlijks en het sedimentfilter elke 6 tot 12 maanden. Bij een gekoppeld osmosesysteem vervangt u het RO-membraan elke 2 tot 4 jaar. Raadpleeg het onderhoudschema op de pagina over kokend-water-kraan/onderhoud voor merk-specifieke intervallen. De TDS-waarde van het geproduceerde water is een goede indicatie: boven 30 mg/L bij een osmosesysteem is membraanvervanging aan de orde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe maak ik de buitenkant van mijn kokend water kraan schoon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Veeg de buitenkant wekelijks af met een vochtige microvezel doek. Droog altijd direct na met een droge doek, vooral bij chroom en hoogglans afwerkingen. Bij roestvrij staal (RVS) veegt u altijd in de richting van de haarlijnen (staalrichting) om krassen te voorkomen. Gebruik geen schuurmiddelen, bleekwater of agressieve schoonmaakmiddelen. Kalkvlekken op de buitenkant verwijdert u met een in azijn gedrenkt doekje, daarna goed afspoelen en droogvegen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Kokend water kraan schoonmaken: ontkalken, sproeikop en boiler reinigen',
  description:
    'Een kokend water kraan schoonmaak je maandelijks aan de buitenkant en ontkalkt de sproeikop elk kwartaal. De boiler saneer je jaarlijks met citroenzuur.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/schoonmaken',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KokendWaterKraanSchoonmakenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Schoonmaken en onderhoud', item: 'https://waterfilterplatform.nl/kokend-water-kraan/schoonmaken' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link> &rsaquo;{' '}
          <span>Schoonmaken en onderhoud</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan schoonmaken: ontkalken, sproeikop en boiler reinigen
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een kokend water kraan vraagt om regelmatig onderhoud: de buitenkant maandelijks afvegen,
            de sproeikop elk kwartaal ontkalken en de boiler jaarlijks met citroenzuur reinigen.
            Met dit stap-voor-stap reinigingsschema houdt u uw systeem in optimale conditie.
          </p>
        </section>

        <QuickAnswer answer="Veeg de buitenkant van uw kokend water kraan maandelijks af met een vochtige doek. Ontkalkt de sproeikop elk kwartaal in azijn-wateroplossing. Reinig de boiler jaarlijks inwendig met citroenzuuroplossing. Bij een gekoppeld osmosefilter is inwendig ontkalken nauwelijks nodig omdat osmosewater vrijwel kalkvrij is." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom regelmatig schoonmaken zo belangrijk is
        </h2>
        <p className="text-gray-700 mb-4">
          Kalkafzetting is de grootste vijand van een kokend water kraan. Hard leidingwater bevat
          opgeloste calcium- en magnesiumzouten die neerslaan zodra water verdampt of verhit wordt.
          In de sproeikop bouwt kalk zich op in de kleine gaatjes, waardoor de waterstroom vermindert
          en het sproeipatroon verandert. U merkt dit aan een scheve of zwakkere waterstraal.
        </p>
        <p className="text-gray-700 mb-4">
          Inwendig kalk in de boiler heeft een direct effect op de energieefficiency.
          <strong> 1 millimeter kalklaag verhoogt het energieverbruik met circa 10%</strong>,
          omdat de verwarmingselementen harder moeten werken om het water door de isolerende kalklaag
          heen te verwarmen. Bij een boiler die jarenlang niet ontkalkt wordt, kan de kalklaag
          meerdere millimeters dik worden, wat leidt tot aanzienlijk hogere stroom- of gasrekeningen
          en versnelde slijtage van de verwarmingselementen.
        </p>
        <p className="text-gray-700 mb-6">
          Bacteriegroei is bij een goed functionerende kokend water kraan geen reele zorg: de boiler
          staat continu op 100 graden Celsius of hoger, een temperatuur waarbij alle bekende
          watergebonden pathogenen worden gedood. Na langere stilstand (vakantie) is voorzichtigheid
          echter op zijn plaats, zie de sectie hieronder.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Dagelijks en wekelijks onderhoud
        </h2>
        <p className="text-gray-700 mb-4">
          De dagelijkse en wekelijkse zorg voor uw kokend water kraan is eenvoudig en kost slechts
          een paar minuten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Dagelijks:</strong> veeg waterdruppels en spatten direct af van de kraan.
            Bij chroom-uitvoeringen voorkomt dit hardnekkige watervlekken en kalkranden.
          </li>
          <li>
            <strong>Wekelijks:</strong> veeg de buitenkant af met een vochtige microvezeldoek.
            Bij roestvrij staal (RVS) altijd in de richting van de haarlijnen (staalrichting) vegen
            om krassen te vermijden. Droog daarna direct met een droge doek.
          </li>
          <li>
            <strong>Direct handelen bij veranderde waterstroom:</strong> als u merkt dat de
            waterstraal van de sproeikop schever of zwakker wordt, is dat het signaal om de
            sproeikop te ontkalken, ook buiten het kwartaalschema om.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sproeikop ontkalken: stap voor stap (elk kwartaal)
        </h2>
        <p className="text-gray-700 mb-4">
          Het ontkalken van de sproeikop is een eenvoudige klus die u zelf kunt uitvoeren:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-3">
          <li>
            <strong>Sproeikop losdraaien:</strong> bij de meeste merken (Quooker, PureAqua, Grohe)
            draait de sproeikop met de hand los (handdraad). Gebruik geen tang of gereedschap om
            beschadiging te voorkomen.
          </li>
          <li>
            <strong>Ontkalkingsbad voorbereiden:</strong> maak een oplossing van gelijke delen
            water en witte azijn (1:1) in een kom of glas. Alternatief: gebruik een commercieel
            ontkalkingsproduct voor keukenapparatuur.
          </li>
          <li>
            <strong>30 minuten weken:</strong> leg de sproeikop volledig onder in de oplossing.
            Bij ernstige kalkafzetting kunt u de weektijd verlengen tot 60 minuten.
          </li>
          <li>
            <strong>Spoelen:</strong> spoel de sproeikop grondig af onder koud stromend water.
            Controleer of alle kalkresten zijn losgemaakt; gebruik zo nodig een zachte borstel
            (geen metaalborstel op chroomoppervlakken).
          </li>
          <li>
            <strong>Terugplaatsen:</strong> draai de sproeikop voorzichtig terug en test de
            waterstraal.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Gebruik nooit schuurmiddelen, staalwol of schuursponsjes op chroomoppervlakken.
          Deze beschadigen de afwerking permanent en maken de oppervlakte juist gevoeliger voor
          nieuwe kalkafzetting.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Boiler inwendig ontkalken: stap voor stap (jaarlijks of tweejaarlijks)
        </h2>
        <p className="text-gray-700 mb-4">
          De frequentie van het inwendig ontkalken hangt af van de hardheid van uw leidingwater.
          Bij hard water (boven 20 dH, typisch voor grote delen van Zuid- en Oost-Nederland) doet u
          dit jaarlijks. Bij zacht water (onder 10 dH, typisch voor het westen en noorden) is
          tweejaarlijks voldoende. Raadpleeg de handleiding van uw specifieke merk voor de exacte
          procedure; de stappen hieronder gelden als algemene leidraad:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-3">
          <li>
            <strong>Boiler afsluiten en afkoelen:</strong> schakel het systeem uit en wacht
            minimaal 2 uur totdat de boiler volledig is afgekoeld. Werk nooit met heet water
            in de boiler.
          </li>
          <li>
            <strong>Citroenzuuroplossing bereiden:</strong> los 1 theelepel citroenzuurpoeder
            (5 gram) op in 500 ml lauw water. Roer goed door tot het poeder volledig is opgelost.
          </li>
          <li>
            <strong>Oplossing invoeren:</strong> voer de citroenzuuroplossing via de bovenkant
            in de boiler in. De exacte methode verschilt per merk: Quooker heeft een
            onderhoudsmodus via de app; voor andere merken raadpleegt u de handleiding.
          </li>
          <li>
            <strong>Inwerktijd:</strong> laat de oplossing 1 tot 2 uur inwerken.
          </li>
          <li>
            <strong>Drievoudig spoelen:</strong> spoel de boiler 3 keer volledig door met schoon
            leidingwater om alle citroenzuurresten te verwijderen.
          </li>
          <li>
            <strong>Opnieuw vullen en opwarmen:</strong> vul de boiler opnieuw en verwarm
            het systeem tot werktemperatuur voordat u het weer gebruikt.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          <strong>Belangrijk:</strong> gebruik nooit onverdund azijn of harde zuren zoals
          zoutzuur in de boiler. Dit beschadigt de roestvrijstalen binnenwand en de afdichtingen.
          Citroenzuur is de veiligste en meest effectieve keuze voor inwendig gebruik.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filter vervangen bij een gecombineerd osmosesysteem
        </h2>
        <p className="text-gray-700 mb-4">
          Veel kokend water kranen worden gecombineerd met een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filter</Link>{' '}
          onder het aanrecht. Dit heeft grote voordelen voor het onderhoud: osmosewater is vrijwel
          mineraalvrij, waardoor kalkafzetting in de boiler tot een minimum beperkt wordt.
          Inwendig ontkalken van de boiler is bij een osmosekoppeling zelden of nooit nodig.
        </p>
        <p className="text-gray-700 mb-4">
          Het filterschema voor een gecombineerd systeem:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Sedimentfilter (5 micron):</strong> elke 6 tot 12 maanden vervangen</li>
          <li><strong>Actief koolfilter (pre-filter):</strong> jaarlijks vervangen</li>
          <li><strong>RO-membraan:</strong> elke 2 tot 4 jaar, afhankelijk van waterverbruik en -kwaliteit</li>
          <li><strong>Actief kool postfilter:</strong> jaarlijks vervangen</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Zie ook de pagina over{' '}
          <Link href="/kokend-water-kraan/onderhoud" className="text-[#005F8A] underline">kokend water kraan onderhoud</Link>{' '}
          voor een compleet filterschema met merk-specifieke intervallen voor Quooker, PureAqua
          en andere populaire merken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kalkvrij systeem: voordelen van een osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          De combinatie van een kokend water kraan met een osmosefilter is de meest onderhoudsarme
          oplossing. Het osmosewater dat naar de boiler gaat bevat minder dan 10 mg/L opgeloste
          stoffen (TDS), terwijl normaal leidingwater 200 tot 500 mg/L kan bevatten. Dit betekent
          praktisch:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Geen of minimale kalkafzetting in de boiler</li>
          <li>Geen inwendige ontkalkingsbeurten meer nodig</li>
          <li>Lager energieverbruik (geen isolerende kalklaag)</li>
          <li>Langere levensduur van de verwarmingselementen</li>
          <li>Schoner drinkwater zonder chloor, lood of microplastics</li>
        </ul>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Herstel na langere stilstand (vakantie)
        </h2>
        <p className="text-gray-700 mb-4">
          Na een vakantie van meer dan een week is het verstandig de volgende stappen te volgen
          voordat u het kokende water gebruikt:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            Tap minimaal <strong>2 liter</strong> water af via de koude waterstand van de kraan
            en gooi dit weg. Dit verwijdert stilstaand water uit de aanvoerleiding.
          </li>
          <li>
            Laat het kokende water 1 minuut doorstromen voordat u het gebruikt.
          </li>
          <li>
            Controleer de buitenkant op kalkvlekken en veeg zo nodig af.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Volledige sanitatie of speciale desinfectie is bij een normale vakantieduur
          (1 tot 4 weken) niet nodig. De boiler staat permanent op 100 graden Celsius of hoger,
          waardoor bacteriegroei zoals Legionella uitgesloten is. Wie de woning langer dan
          4 weken verlaat, doet er verstandig aan het systeem volledig af te tappen en uit te
          schakelen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Reinigingsschema: overzicht
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Frequentie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Actie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Middel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Dagelijks</td>
                <td className="border border-gray-300 px-3 py-2">Waterdruppels afvegen</td>
                <td className="border border-gray-300 px-3 py-2">Droge doek</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Wekelijks</td>
                <td className="border border-gray-300 px-3 py-2">Buitenkant reinigen (in staalrichting)</td>
                <td className="border border-gray-300 px-3 py-2">Vochtige microvezeldoek</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Elk kwartaal</td>
                <td className="border border-gray-300 px-3 py-2">Sproeikop ontkalken</td>
                <td className="border border-gray-300 px-3 py-2">Water-azijn 1:1 of ontkalkingsmiddel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Jaarlijks (hard water)</td>
                <td className="border border-gray-300 px-3 py-2">Boiler inwendig ontkalken</td>
                <td className="border border-gray-300 px-3 py-2">Citroenzuuroplossing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Jaarlijks</td>
                <td className="border border-gray-300 px-3 py-2">Actief koolfilter vervangen</td>
                <td className="border border-gray-300 px-3 py-2">Vervangingsfilter (merk-specifiek)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Elke 2 tot 4 jaar</td>
                <td className="border border-gray-300 px-3 py-2">RO-membraan vervangen</td>
                <td className="border border-gray-300 px-3 py-2">Vervangingsmembraan</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over kokend water kraan schoonmaken
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen: oorzaak aanslag</h3>
              <p className="text-sm text-gray-600">Waarom kalkhoudend leidingwater aanslag veroorzaakt in uw kokend water kraan en hoe u de hardheid meet.</p>
            </Link>
            <Link href="/onderhoud/kokend-water-kraan-onderhoud" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Volledig onderhoudschema kokend water kraan</h3>
              <p className="text-sm text-gray-600">Maandelijks, halfjaarlijks en jaarlijks schema voor schoonmaken, ontkalken en filterwisselen.</p>
            </Link>
          </div>
        </section>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/kokend-water-kraan/onderhoud" className="text-[#005F8A] underline">kokend water kraan onderhoud en filterschema</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">alle kokend water kranen vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
