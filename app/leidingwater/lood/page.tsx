import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Lood in leidingwater: loden leidingen, meten en waterfilter thuis",
  description:
    "Lood in leidingwater door loden huisleidingen (voor 1960). EU-norm 2026: 5 ug/L. Meten, doorspoelen en osmosefilter als meest effectieve thuisbescherming.",
  alternates: { canonical: "https://waterfilterplatform.nl/leidingwater/lood" },
};

const faqItems = [
  {
    question: "Welke woningen lopen risico op lood in leidingwater?",
    answer:
      "Woningen gebouwd voor 1960 lopen het meeste risico op loden binnenleidingen. In die periode was lood het standaard materiaal voor binnenhuisinstallaties. Ook woningen gebouwd tussen 1960 en 1990 kunnen loodhoudend soldeer hebben dat gebruikt werd om koperen leidingen aan elkaar te verbinden. Woningen gebouwd na 1990 zijn vrijwel zeker vrij van loden leidingen. Huurwoningen uit de vooroorlogse periode en woningen in oude stadswijken (Jordaan, Kralingen, Schilderswijk) verdienen extra aandacht.",
  },
  {
    question: "Hoe meet ik of er lood in mijn leidingwater zit?",
    answer:
      "Er zijn twee methoden. Het first-flush monster is het meest representatief: neem direct na een nacht stilstaan het eerste glas water dat uit de kraan komt. Hoge loodwaarden in dit monster duiden op lood in de binneninstallatie. Een doorgestroomd monster (na 2 minuten doorloopwater) meet het water na spoeling en geeft lagere loodwaarden. Stuur het monster op naar een gecertificeerd laboratorium (KIWA, Eurofins of vergelijkbaar). De kosten bedragen 30-80 euro. Sommige waterbedrijven bieden gratis teststrips aan; deze zijn indicatief maar minder nauwkeurig dan laboratoriumanalyse.",
  },
  {
    question: "Wat is de EU-norm voor lood in drinkwater?",
    answer:
      "Nederland hanteert momenteel nog de norm van 10 microgram per liter (ug/L) uit het Drinkwaterbesluit. De EU-drinkwaterrichtlijn 2020/2184 verplicht lidstaten om de norm terug te brengen naar 5 ug/L, met een implementatiedeadline van 12 januari 2036. Nederland streeft ernaar eerder aan deze norm te voldoen. Ter vergelijking: de WHO stelt dat er geen veilige ondergrens bestaat voor loodblootstelling, wat sommige experts ertoe brengt te pleiten voor een norm van 1 ug/L of lager.",
  },
  {
    question: "Helpt doorspoelen om lood te verwijderen?",
    answer:
      "Doorspoelen van de kraan gedurende 30-60 seconden verlaagt de loodconcentratie aanzienlijk, doorgaans met 60-90%, omdat het stilstaande water wordt weggespuld en vervangen door vers water uit het distributienet. Dit is een effectieve dagelijkse maatregel als tijdelijke voorzorg. Het nadeel is het waterverbruik en het ontbreken van garantie: bij langere stilstand of beschadigd lood kan de concentratie ook na spoelen nog verhoogd zijn. Doorspoelen is geen structurele oplossing maar een tijdelijke maatregel.",
  },
  {
    question: "Is lood in drinkwater gevaarlijk voor baby's en kinderen?",
    answer:
      "Ja, kinderen zijn bijzonder kwetsbaar voor lood. Bij zuigelingen en jonge kinderen tot 6 jaar is de bloed-hersenbarriere nog niet volledig gevormd, waardoor lood het centrale zenuwstelsel kan binnendringen. Gevolgen zijn: vertraagde cognitieve ontwikkeling, verlaagd IQ, gedragsproblemen en verminderd leervermogen. De WHO stelt expliciet dat er geen veilige loodconcentratie bestaat voor kinderen. Voor babyvoeding die met kraanwater wordt bereid in een woning met loden leidingen wordt dringend aangeraden gefilterd water of osmosewater te gebruiken.",
  },
  {
    question: "Hoeveel lood verwijdert een osmosefilter?",
    answer:
      "Een kwalitatief osmosefilter verwijdert 95-99% van het lood uit leidingwater. De semipermeabele membraan heeft porieen van 0,0001 micrometer, die voor loodionen (Pb2+) ondoordringbaar zijn. Dit brengt de loodconcentratie in het gefilterde water tot vrijwel nul, ruim onder de WHO-advieswaarde. Jaarlijkse vervanging van het membraan en de voorfilterelementen is essentieel voor het behoud van de verwijderingsefficiency.",
  },
  {
    question: "Hoe herken ik loden leidingen in mijn woning?",
    answer:
      "Loden leidingen zijn donkergrijs van kleur en kunnen licht kromgebogen zijn (lood is zacht en vormt makkelijk mee). Met een pennetje of sleutels kunt u een kleine groef in het materiaal maken: lood is zachter dan koper of ijzer en laat een metaalglanzende groef achter. Loden leidingen zitten vaak in de kruipruimte, bij de watermeter of als aansluitstuk tussen de hoofdleiding (van het waterbedrijf, tot de meter) en de binneninstallatie. Twijfelt u? Een erkende loodgieter kan de leidingen inspecteren en bemonsteren.",
  },
  {
    question: "Wat doet de gemeente of het waterbedrijf aan loden leidingen?",
    answer:
      "Het waterbedrijf is verantwoordelijk voor de leidingen tot aan de watermeter. De meeste waterbedrijven hebben hun loden aansluitloten (de leiding van het net tot uw meterkast) al vervangen; naar schatting zijn er t/m 2025 ca. 180.000 loden aansluitingen gesaneerd. De binnenhuisinstallatie vanaf de meter valt onder de verantwoordelijkheid van de eigenaar van het pand. Gemeenten ondersteunen soms saneringsprojecten in oudere wijken via subsidies of leningen. Huurders kunnen bij de verhuurder een loodmeting en sanering eisen als er aanwijzingen zijn voor loden leidingen.",
  },
  {
    question: "Wat als mijn laboratoriumtest lood aantoont?",
    answer:
      "Bij een aangetoonde loodconcentratie boven 5 ug/L (de komende EU-norm) zijn er drie acties: (1) Spoelen: zet 30-60 seconden door voor elk gebruik, met name na stilstand s nachts. (2) Tijdelijke maatregel: installeer een osmosefilter op de keukenkraan voor drinkwater en koken. (3) Structurele oplossing: laat de loden leidingen vervangen door een gecertificeerde loodgieter. De vervangingskosten liggen doorgaans tussen EUR 1.000 en EUR 5.000 afhankelijk van de omvang. Informeer ook uw verhuurder of VvE als u in een appartement woont.",
  },
  {
    question: "Wat kost een loodmeting van kraanwater?",
    answer:
      "Een professionele loodmeting via een gecertificeerd laboratorium kost 30-80 euro voor een enkelvoudig watermonster. Bij meerdere monsterafnamepunten (keukenkraan, badkamer) kunnen de kosten oplopen tot 100-200 euro. Sommige drinkwaterbedrijven bieden op aanvraag een gratis indicatieve meting aan voor bewoners van woningen die zijn gebouwd voor 1960. Teststrips zijn goedkoper (5-20 euro) maar minder nauwkeurig en hebben hogere detectiegrenzen, waardoor lage concentraties gemist worden.",
  },
  {
    question: "Welke woningen zijn al gesaneerd van loden leidingen?",
    answer:
      "In Nederland hebben de drinkwaterbedrijven de afgelopen decennia massaal loden aansluitloten vervangen; de meeste bedrijven hebben dit vrijwel volledig afgerond voor 2025. De binnenhuisinstallaties (leidingen na de watermeter) vallen echter buiten hun verantwoordelijkheid. Schattingen van het RIVM suggereren dat er nog tienduizenden woningen zijn met loden binnenleidingen, met name in naoorlogse sociale huurwoningen (1945-1960) en historische stadswoningen die nooit gerenoveerd zijn. Corporaties met grote portefeuilles oudere woningen voeren eigen saneringsprogrammas uit.",
  },
  {
    question: "Wanneer moet ik mij zorgen maken over lood in leidingwater?",
    answer:
      "Maak u zorgen als uw woning is gebouwd voor 1960 en nooit gerenoveerde binnenleidingen heeft, als u een baby of jong kind hebt dat flesvoeding krijgt bereid met kraanwater, als een laboratoriumtest loodwaarden boven 5 ug/L aantoont, of als uw woning al langer leegstaat (stilstaand water lost meer lood op). Bij twijfel: meten is weten. Een laboratoriumtest van EUR 30-80 euro geeft binnen een week uitsluitsel.",
  },
];

const maatregelen = [
  {
    maatregel: "Doorspoelen (30 sec)",
    effectiviteit: "60-90% reductie",
    kosten: "EUR 0 (waterverbruik)",
    duurzaamheid: "Tijdelijk - dagelijks herhalen",
    score: "Oranje",
  },
  {
    maatregel: "Osmosefilter (Point-of-Use)",
    effectiviteit: "95-99% reductie",
    kosten: "EUR 200-600 + EUR 50-150/jr",
    duurzaamheid: "Langdurig - filter vervangen",
    score: "Groen",
  },
  {
    maatregel: "Leidingvervanging",
    effectiviteit: "100% - definitief",
    kosten: "EUR 1.000-5.000",
    duurzaamheid: "Permanent",
    score: "Groen",
  },
  {
    maatregel: "Filterkan (koolstof)",
    effectiviteit: "0-20% (onbetrouwbaar)",
    kosten: "EUR 15-60",
    duurzaamheid: "Niet geschikt voor lood",
    score: "Rood",
  },
];

export default function LoodLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Leidingwater", url: "https://waterfilterplatform.nl/leidingwater" },
          { name: "Lood", url: "https://waterfilterplatform.nl/leidingwater/lood" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Lood in leidingwater: loden leidingen, meten en waterfilter thuis",
          description:
            "Lood in leidingwater door loden huisleidingen (voor 1960). EU-norm 2026: 5 ug/L. Meten, doorspoelen en osmosefilter als meest effectieve thuisbescherming.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/leidingwater/lood",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:text-[#005F8A]">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Lood</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Lood in leidingwater: loden leidingen, meten en waterfilter thuis
          </h1>
          <QuickAnswer answer="Lood in leidingwater komt bijna uitsluitend van loden binnenleidingen in woningen gebouwd voor 1960, niet van het waterbedrijf. De huidige Nederlandse norm is 10 ug/L; de nieuwe EU-norm wordt 5 ug/L (voor 2036). De WHO stelt: er is geen veilige ondergrens. First-flush meten kost 30-80 euro. Doorspoelen 30 sec reduceert 60-90%. Een osmosefilter verwijdert 95-99% definitief." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Bronnen van lood in leidingwater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het leidingwater dat het drinkwaterbedrijf levert bevat in vrijwel alle gevallen geen meetbaar lood. Het probleem ontstaat in de <strong>binnenhuisinstallatie</strong>: de leidingen die in uw woning lopen nadat het water de watermeter is gepasseerd. Lood lost geleidelijk op in water dat in contact staat met loden buizen of loden soldeer, met name bij langere stilstand (s nachts of bij vakantie) en bij zacht, licht zuur water.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er zijn vier mogelijke loodbronnen in een binnenhuisinstallatie:
          </p>
          <div className="space-y-3 mb-6">
            <div className="border border-red-200 bg-red-50 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Loden binnenleidingen (hoogste risico)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Woningen gebouwd voor 1960 zijn aangelegd met lood als standaard materiaal voor waterleiding. Loden buizen herkenbaar: donkergrijs, dof, zacht (met een sleutel kunt u erin drukken), vaak iets gebogen door de zachtheid van het materiaal. Deze leidingen geven de hoogste loodconcentraties af, vooral bij stilstaand water.
              </p>
            </div>
            <div className="border border-orange-200 bg-orange-50 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Loden aansluitloten (lager risico, vaak al gesaneerd)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                De verbinding tussen het openbare waterleidingnet en uw watermeter heet de aansluitlot. Voor 1960 werden deze aansluitloten standaard in lood uitgevoerd. Drinkwaterbedrijven hebben de afgelopen decennia naar schatting 180.000 loden aansluitloten vervangen. De meeste bedrijven zijn hiermee vrijwel klaar. U kunt bij uw waterbedrijf navragen of uw aansluiting al vervangen is.
              </p>
            </div>
            <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Loodhoudend soldeer (1970-1990)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                In de periode 1970-1990 werd koperen leidingwerk veelal verbonden met soldeer dat tot 50% lood bevatte. Hoewel de hoeveelheid lood kleiner is dan bij volledig loden buizen, kan dit soldeer bij nieuwere verbindingen en hoge watertemperatuur lood afgeven. Loodvrij soldeer (tin-zilver of tin-koper) werd pas breed ingevoerd na wijzigingen in de loodgietersnormen rond 1990.
              </p>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Messing fittingen (laag risico)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Messing (een legering van koper en zink) kan kleine hoeveelheden lood bevatten (1-3% in oudere legeringen). Bij normaal gebruik is de bijdrage van messing fittingen aan de totale loodconcentratie in drinkwater gering, maar in combinatie met andere loodbronnen kan het bijdragen aan een verhoogd totaalgehalte.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoeveel woningen in Nederland lopen risico?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een precieze telling van het aantal woningen met loden binnenleidingen is niet beschikbaar, maar schattingen op basis van RIVM-onderzoek en CBS-woningstatistieken geven het volgende beeld:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-[#005F8A]">~8,4 mln</p>
              <p className="text-sm text-gray-700 mt-1">woningen in Nederland</p>
            </div>
            <div className="bg-orange-100 rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-orange-700">~800.000</p>
              <p className="text-sm text-gray-700 mt-1">woningen gebouwd voor 1945</p>
            </div>
            <div className="bg-red-100 rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-red-700">onbekend</p>
              <p className="text-sm text-gray-700 mt-1">met niet-gerenoveerde loden leidingen</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Risicowoningen zijn met name te vinden in historische stadswijken in Amsterdam (Jordaan, Oud-West), Rotterdam (Kralingen, Hillegersberg-Schiebroek), Den Haag (Archipelwijk, Duinoord), Utrecht (Wittevrouwenveld, Abstede) en in oudere sociale huurwoningen die in de jaren vijftig werden gebouwd maar nooit volledig gerenoveerd.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Woningcorporaties met grote portefeuilles vooroorlogse woningen (zoals Ymere, Woonstad Rotterdam, Vestia) voeren eigen saneringsprogrammas uit, maar de voortgang verschilt sterk per corporatie. Koopwoningeigenaren zijn zelf verantwoordelijk voor sanering.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gezondheidsrisico van lood: neurotoxisch zonder drempelwaarde</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lood is een <strong>neurotoxisch zwaar metaal</strong> waarvoor de WHO en EFSA (European Food Safety Authority) expliciet stellen dat er <em>geen veilige ondergrens</em> bestaat. Elke extra loodblootstelling draagt bij aan de totale lichaamsbelasting. Lood stapelt op in botten en organen en wordt slechts langzaam uitgescheiden.
          </p>
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Kinderen (0-6 jaar): hoogste risico</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                De bloed-hersenbarriere van jonge kinderen is nog in ontwikkeling, waardoor lood het centrale zenuwstelsel gemakkelijker binnendringt. Zelfs lage loodbloodspiegels (boven 5 ug/dL bloed) zijn geassocieerd met meetbare dalingen in IQ, concentratieproblemen en gedragsafwijkingen. De effecten zijn onomkeerbaar en worden pas zichtbaar na jaren.
              </p>
            </div>
            <div className="border-l-4 border-orange-400 bg-orange-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Zwangere vrouwen: foetale blootstelling</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lood passeer de placentabarriere en kan de foetale hersenontwikkeling beinvloeden. Lood dat opgeslagen zit in botten (ook van langgeleden opgelopen blootstelling) kan tijdens de zwangerschap vrijkomen en via de bloedbaan de foetus bereiken. Extra voorzorg via osmosewater is sterk aanbevolen voor zwangere vrouwen in woningen met loden leidingen.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 bg-yellow-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Volwassenen: cardiovasculair en nierschade</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bij volwassenen is chronische loodblootstelling geassocieerd met verhoogde bloeddruk, nierinsufficiëntie en een verhoogd risico op hart- en vaatziekten. Het risico via leidingwater is bij de huidige concentraties in Nederland beperkt voor gezonde volwassenen, maar telt wel mee in de totale loodbelasting.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Normen voor lood in drinkwater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De normstelling voor lood in drinkwater is de afgelopen decennia stapsgewijs aangescherpt naarmate de wetenschappelijke inzichten over schadelijkheid bij lage concentraties zijn verbeterd.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Norm / richtlijn</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Waarde</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Van kracht</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Opmerking</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="py-2.5 px-3 font-medium">Nederland (huidig)</td>
                  <td className="py-2.5 px-3">10 ug/L</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">Drinkwaterbesluit 2011</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">Wordt vervangen door EU-norm</td>
                </tr>
                <tr className="bg-[#E0F2FE]/30 border-b border-gray-100">
                  <td className="py-2.5 px-3 font-medium">EU (aankomend)</td>
                  <td className="py-2.5 px-3 font-semibold text-green-700">5 ug/L</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">Uiterlijk 2036</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">Richtlijn 2020/2184; NL streeft eerder</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="py-2.5 px-3 font-medium">WHO-advies</td>
                  <td className="py-2.5 px-3 font-semibold text-orange-700">Geen veilige grens</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">2022</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">Eerder: 10 ug/L (ingetrokken)</td>
                </tr>
                <tr className="bg-[#E0F2FE]/30 border-b border-gray-100">
                  <td className="py-2.5 px-3 font-medium">VS EPA (actiedrempel)</td>
                  <td className="py-2.5 px-3">15 ug/L</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">Lead and Copper Rule</td>
                  <td className="py-2.5 px-3 text-gray-600 text-xs">Herziening naar 10 ug/L gepland</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De aanscherping van de EU-norm naar 5 ug/L is gebaseerd op de EFSA-beoordeling van 2010, die concludeerde dat de vorige WHO-richtwaarde van 10 ug/L onvoldoende bescherming bood, met name voor kinderen. Lees meer op de pagina{" "}
            <Link href="/drinkwaternormen/lood" className="text-[#005F8A] underline hover:no-underline">drinkwaternormen lood</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe meet u lood in uw kraanwater?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De manier van monstername is cruciaal voor een betrouwbare uitslag. Drinkwaterbedrijven meten doorgaans met een doorgespoeld monster, wat systematisch lagere loodwaarden geeft dan u s ochtends bij eerste gebruik ervaart. Voor een realistische risicobeoordeling is het <strong>first-flush monster</strong> relevanter.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#E0F2FE]/60 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">First-flush monster (aanbevolen)</h3>
              <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                <li>Laat water minimaal 8 uur stilstaan (nacht)</li>
                <li>Neem het eerste 250 ml dat uit de kraan loopt</li>
                <li>Bewaar in een schone fles (geen reinigingsmiddel)</li>
                <li>Stuur binnen 24 uur naar het laboratorium</li>
                <li>Kosten: EUR 30-80 euro</li>
              </ol>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Doorgestroomd monster (minder representatief)</h3>
              <p className="text-sm text-gray-700">
                Neem monster na 2 minuten doorloopwater. Geeft lagere loodwaarden dan first-flush, omdat stilstaand water al weggespoeld is. Gebruikt door waterbedrijven voor normnaleving, maar onderschat de werkelijke blootstelling bij dagelijks gebruik.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Gecertificeerde laboratoria voor drinkwateranalyse zijn onder andere: Eurofins Food Testing, KWR Watercycle Research Institute, Aqualab Zuid en Analytisch Laboratorium. Stuur de monstercontainer in een koeltas en zorg voor minimale bewaartemperatuur.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Na uw meting kunt u de resultaten vergelijken met de normen op de pagina{" "}
            <Link href="/leidingwater/waterkwaliteitsrapport" className="text-[#005F8A] underline hover:no-underline">waterkwaliteitsrapport interpreteren</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat kunt u doen bij lood in uw leidingwater?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er zijn drie niveau's van maatregelen, oplopend in effectiviteit en kosten:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Maatregel</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Effectiviteit</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Kosten</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Duurzaamheid</th>
                </tr>
              </thead>
              <tbody>
                {maatregelen.map((r, i) => (
                  <tr
                    key={r.maatregel}
                    className={i % 2 === 0 ? "bg-white border-b border-gray-100" : "bg-[#E0F2FE]/30 border-b border-gray-100"}
                  >
                    <td className="py-2.5 px-3 font-medium">{r.maatregel}</td>
                    <td className={`py-2.5 px-3 font-semibold text-xs ${r.score === "Groen" ? "text-green-700" : r.score === "Oranje" ? "text-orange-600" : "text-red-600"}`}>
                      {r.effectiviteit}
                    </td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.duurzaamheid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor huishoudens met jonge kinderen of zwangere vrouwen is een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">osmosefilter</Link>{" "}
            de meest praktische en betrouwbare maatregel terwijl leidingvervanging wordt georganiseerd. Een osmosefilter op de keukenkraan biedt 95-99% loodverwijdering voor al het water dat gebruikt wordt voor drinken en koken.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer over de specifieke filterkeuze voor lood vindt u op de pagina{" "}
            <Link href="/waterfilter/lood" className="text-[#005F8A] underline hover:no-underline">waterfilter voor lood</Link>{" "}
            en de pagina{" "}
            <Link href="/drinkwater/lood" className="text-[#005F8A] underline hover:no-underline">drinkwater en lood</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
