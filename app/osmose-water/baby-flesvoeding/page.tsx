import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Osmosewater voor flesvoeding: veilig voor baby en aanbevolen TDS",
  description:
    "Osmosewater voor babymelk: WHO adviseert water met laag TDS voor flesvoeding. Osmose geeft TDS 1-20 mg/L. Remineralisatie aanbevolen.",
  alternates: { canonical: "https://waterfilterplatform.nl/osmose-water/baby-flesvoeding" },
};

const faqItems = [
  {
    question: "Is osmosewater veilig voor het bereiden van babymelk?",
    answer:
      "Ja. Osmosewater is veilig voor het bereiden van babymelkpoeder. Het lage TDS (1-20 mg/L) van osmosewater is voor baby's geen probleem: het water draagt dan geen extra mineralen bij, en de benodigde mineralen zitten in het melkpoeder zelf. Een WHO-studie bevestigt dat water met een laag mineralengehalte veilig is voor flesvoeding. Remineralisatie naar TDS 30-80 mg/L is een nuttige extra stap, maar geen strikte noodzaak.",
  },
  {
    question: "Wat is het ideale TDS voor flesvoeding?",
    answer:
      "De WHO adviseert voor flesvoeding water met een laag tot matig mineralengehalte. Een TDS onder 200 mg/L is acceptabel; onder 100 mg/L is optimaal. Osmosewater met TDS 1-20 mg/L is veilig, maar een remineralisatiefilter die het TDS op 30-80 mg/L brengt, geeft een prettigere smaakaanvang en een iets betere buffercapaciteit. Het is belangrijk dat het water laag in natrium (onder 20 mg/L), nitraat (onder 10 mg/L) en fluoride is.",
  },
  {
    question: "Waarom is nitraat gevaarlijk voor baby's?",
    answer:
      "Baby's jonger dan 6 maanden kunnen nitraat niet goed omzetten. Nitraat wordt in het maag-darmkanaal omgezet naar nitriet, dat hemoglobine omzet in methemoglobine. Dit verslechtert het zuurstoftransport in het bloed, een aandoening die methemoglobinemie heet (ook wel 'blue baby syndrome'). De EU-drinkwaternorm voor nitraat is 50 mg/L, maar voor babyvoeding adviseert de WHO een maximum van 10 mg/L. Osmose verwijdert 85-95% van nitraat.",
  },
  {
    question: "Verwijdert osmose nitraat voldoende voor babyvoeding?",
    answer:
      "Ja. Een goed osmosefilter verwijdert 85-95% van nitraat. Als het kraanwater 30-50 mg/L nitraat bevat, brengt osmose dit terug naar 1,5-7,5 mg/L, ruim onder het WHO-advies van 10 mg/L voor babyvoeding. In gebieden met verhoogde nitraatconcentraties (landbouwgebieden) is een osmosefilter dan ook bijzonder waardevol voor jonge gezinnen.",
  },
  {
    question: "Beschermt osmose ook tegen lood voor babyvoeding?",
    answer:
      "Ja. Osmose verwijdert 95-99% van lood. In oudere woningen met loden of loodtinhoudend gesoldeerde leidingen is dit een cruciale bescherming. Baby's zijn bijzonder gevoelig voor lood: er bestaat geen veilige ondergrens voor loodblootstelling bij kinderen. Als u niet weet of uw leidingen loodvrij zijn en u heeft een baby, is een osmosefilter een verstandige voorzorgsmaatregel.",
  },
  {
    question: "Hoe bereid je babymelk met osmosewater?",
    answer:
      "Kook het osmosewater eerst (ook al is het al gefilterd) en laat het afkoelen tot 70 graden Celsius voordat u het melkpoeder toevoegt. De reden: melkpoeder is niet steriel en kan bacterien als Cronobacter sakazakii bevatten. Water van 70 graden doodt deze bacterie. Een 4-in-1 kokend-water-kraan met osmose geeft direct water van 70-100 graden, ideaal voor babymelkbereiding. Laat de fles daarna snel afkoelen onder koud water.",
  },
  {
    question: "Is remineralisatie van osmosewater nodig voor babyvoeding?",
    answer:
      "Niet strikt noodzakelijk, maar aanbevolen. Zuiver osmosewater (TDS 1-20 mg/L) is veilig voor baby's: de lage mineralenconcentratie is niet toxisch. Baby's die flesvoeding krijgen, halen hun mineralen primair uit het melkpoeder. Een remineralisatiefilter (calciet/MgO) brengt het TDS op 30-80 mg/L, wat een meer neutrale pH geeft (osmosewater is licht zuur door CO2-opname) en de smaak verbetert. Aanbevolen, maar niet medisch noodzakelijk.",
  },
  {
    question: "Is een 4-in-1 kokend-water-kraan geschikt voor babymelkbereiding?",
    answer:
      "Ja, een combinatie van osmosefilter en 4-in-1 kokend-water-kraan is ideaal voor babymelkbereiding. De kraan levert direct water op de gewenste temperatuur (70-100 graden), het osmosefilter zorgt voor zuiver water zonder nitraat, lood en andere verontreinigingen, en het systeem elimineert de noodzaak van afzonderlijk koken en afkoelen. Zorg dat de kraan is ingesteld op ten minste 70 graden voor gebruik bij flesvoeding.",
  },
  {
    question: "Kunnen we ook bronwater of mineraalwater gebruiken voor flesvoeding?",
    answer:
      "Bronwater en mineraalwater kunnen gebruikt worden als ze voldoen aan specifieke criteria: natrium onder 20 mg/L, nitraat onder 10 mg/L, fluoride onder 1,5 mg/L, en totale hardheid bij voorkeur onder 100 mg/L CaCO3. Controleer altijd het etiket. Sommige mineraalwaters zijn te rijk aan natrium of mineralen voor dagelijks gebruik bij flesvoeding. Osmosewater is in de praktijk betrouwbaarder omdat u controle heeft over de kwaliteit.",
  },
  {
    question: "Is osmosewater ook veilig voor zwangere vrouwen?",
    answer:
      "Ja. Osmosewater met een remineralisatiefilter is ook veilig voor zwangere vrouwen. De extra mineralen die zwangere vrouwen nodig hebben, komen primair uit de voeding, niet uit drinkwater. Het lage nitraat- en loodgehalte van osmosewater is juist gunstig: lood passeert de placenta en nitraat kan de zuurstoflevering aan de foetus beinvloeden.",
  },
  {
    question: "Hoe duur is osmosewater per liter voor babyvoeding?",
    answer:
      "Een onder-aanrecht osmosefilter kost EUR 200-600 voor aanschaf en produceert water voor minder dan EUR 0,10 per liter. Een baby verbruikt voor flesvoeding circa 0,5-1 liter water per dag; de maandelijkse waterkosten zijn dus enkele cents. Dit is aanzienlijk goedkoper dan speciaal flesvoedingswater (EUR 0,50-2,00 per liter) en elimineert ook het plastic verpakkingsafval.",
  },
  {
    question: "Is zuiver osmosewater zonder mineralen schadelijk voor baby's?",
    answer:
      "Nee, zuiver osmosewater is niet toxisch voor baby's. Het lage mineralengehalte (TDS 1-20 mg/L) betekent dat het water geen extra mineralen toevoegt aan de voeding, maar dit is bij flesvoeding geen probleem: alle benodigde mineralen zitten in het melkpoeder. Osmosewater is licht zuur (pH circa 6,5 door CO2-opname), maar dit verandert direct bij menging met melkpoeder. Remineralisatie is zinvol voor pH-stabilisatie maar niet medisch noodzakelijk.",
  },
];

export default function BabyFlesvoedingOsmosePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Osmose water", url: "https://waterfilterplatform.nl/osmose-water" },
          { name: "Baby flesvoeding", url: "https://waterfilterplatform.nl/osmose-water/baby-flesvoeding" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Osmosewater voor flesvoeding: veilig voor baby en aanbevolen TDS",
          description:
            "Osmosewater voor babymelk: WHO adviseert water met laag TDS voor flesvoeding. Osmose geeft TDS 1-20 mg/L. Remineralisatie aanbevolen.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/osmose-water/baby-flesvoeding",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:underline">Osmose water</Link>
            <span className="mx-2">/</span>
            <span>Baby flesvoeding</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor flesvoeding: veilig voor baby en aanbevolen TDS
          </h1>
          <QuickAnswer answer="Osmosewater is veilig voor babymelkpoeder. Het lage TDS (1-20 mg/L) is niet schadelijk; mineralen zitten in het poeder. Remineralisatie naar TDS 30-80 mg/L is aanbevolen. Osmose verwijdert 85-95% nitraat (blue baby syndrome voorkomen) en 95-99% lood. Kook osmosewater altijd tot 70 graden voor het toevoegen van melkpoeder, ook als het al gefilterd is." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="kokend" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Waarom water zo belangrijk is voor flesvoeding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij borstvoeding hoeft u zich over waterkwaliteit minder zorgen te maken.
            Bij flesvoeding is water de basis van elk flesje: babymelkpoeder wordt
            opgelost in water dat direct in contact komt met de onrijpe spijsvertering
            van de baby. De nieren van pasgeborenen zijn nog niet volledig ontwikkeld
            en kunnen hoge concentraties mineralen, nitraten of verontreinigingen
            minder goed verwerken dan die van volwassenen. De keuze voor het juiste
            water is dan ook geen detail maar een concrete gezondheidsbeslissing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een baby die dagelijks 700-800 mL flesvoeding drinkt, neemt via dat water
            ook alles op wat erin zit: mineralen, nitraat, lood, pesticiden en
            microplastics. Een osmosefilter biedt de meest uitgebreide bescherming
            en is de enige filtermethode die tegelijkertijd nitraat, lood, pesticiden
            en microplastics in een keer verwijdert.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            WHO-aanbevelingen voor water bij flesvoeding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De WHO geeft de volgende richtlijnen voor water bij de bereiding van
            flesvoeding:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>
              Gebruik water dat <strong>gekookt en afgekoeld is tot 70 graden Celsius</strong>,
              ook als het leidingwater of gefilterd water betreft. Melkpoeder is niet
              steriel; 70 graden doodt Cronobacter sakazakii en andere bacterien.
            </li>
            <li>
              Gebruik <strong>geen bronwater met hoge mineraalconcentraties</strong>: check
              het etiket op natrium (max 20 mg/L), nitraat (max 10 mg/L) en fluoride
              (max 1,5 mg/L).
            </li>
            <li>
              Gebruik <strong>geen ongefilterd kraanwater in risicogebieden</strong>: gebieden
              met verhoogde nitraat- of loodconcentraties, of in landen met onbetrouwbare
              waterinfrastructuur.
            </li>
            <li>
              Water met een <strong>laag mineralengehalte (TDS onder 200 mg/L)</strong>
              heeft de voorkeur. Osmosewater (TDS 1-20 mg/L) valt hier ruim binnen.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Nitraatrisico bij baby&apos;s: methemoglobinemie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nitraat (NO3(-)) is een van de meest zorgwekkende verontreinigingen
            voor flesvoedingwater. Bij baby&apos;s jonger dan 6 maanden wordt nitraat
            in het maag-darmkanaal (dat minder zuur is dan bij volwassenen) omgezet
            naar nitriet. Nitriet bindt aan hemoglobine en vormt methemoglobine,
            dat geen zuurstof kan transporteren. Ernstige methemoglobinemie veroorzaakt
            de zogenaamde &quot;blue baby&quot;-symptomen: blauw-grijze verkleuring van de huid,
            kortademigheid en in ernstige gevallen hersenschade of overlijden.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-800 font-medium">
              EU-drinkwaternorm nitraat: 50 mg/L
              <br />
              WHO-advies voor babyvoeding: maximaal 10 mg/L nitraat
              <br />
              Osmose verwijdert: 85-95% van nitraat
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            In landbouwgebieden kan leidingwater regelmatig concentraties van 30-50 mg/L
            nitraat bevatten, net onder of op de wettelijke norm. Osmose brengt dit
            terug naar 1,5-7,5 mg/L, ruim onder het WHO-advies voor babyvoeding.
            Zie ook onze pagina{" "}
            <Link href="/drinkwater/baby" className="text-[#005F8A] hover:underline font-medium">
              drinkwater voor baby
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Loodrisico in oudere woningen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In woningen gebouwd voor 1960 zijn er mogelijk nog loden binnenleidingen
            aanwezig. Er bestaat geen veilige ondergrens voor loodblootstelling bij
            kinderen. Lood passeert de bloed-hersenbarriere van baby&apos;s gemakkelijker
            dan bij volwassenen en schaadt de hersenontwikkeling ook bij zeer lage
            concentraties. Een osmosefilter verwijdert 95-99% van het lood en is
            de meest praktische bescherming als leidingvervanging niet onmiddellijk
            mogelijk is.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Wat is het ideale TDS voor flesvoedingwater?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TDS (Total Dissolved Solids) is een maat voor het totale gehalte opgeloste
            stoffen in water. De WHO en EFSA adviseren voor flesvoedingwater:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Totale hardheid: bij voorkeur onder 200 mg/L CaCO3</li>
            <li>Natrium: onder 20 mg/L (baby&apos;s nieren zijn gevoelig voor natriumoverbelasting)</li>
            <li>Nitraat: onder 10 mg/L (methemoglobinemie-risico)</li>
            <li>Fluoride: onder 1,5 mg/L (fluorose-preventie)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmosewater heeft een TDS van 1-20 mg/L. Dit is laag maar veilig:
            de baby haalt alle benodigde mineralen (calcium, magnesium, kalium) uit
            het melkpoeder, niet uit het water. Het lage mineralengehalte van het water
            zorgt er niet voor dat mineralen uit het lichaam worden getrokken; die
            mythe is onjuist bij normale drinkwaterhoeveelheden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmosewater is licht zuur (pH circa 6,5) doordat het geen bufferende
            carbonaten bevat en CO2 uit de lucht opneemt. Dit is cosmetsich, niet
            schadelijk, en verandert direct bij menging met melkpoeder.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Remineralisatie: aanbevolen maar niet verplicht
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een remineralisatiefilter na de osmosecartridge voegt calcium en magnesium
            terug via calciet (calciumcarbonaat) en MgO (magnesiumoxide). Het resultaat
            is water met een TDS van 30-80 mg/L en een stabielere pH van 7-7,5. Dit
            is de ideale range voor flesvoedingwater:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Voldoende laag in mineralen om baby&apos;s nieren niet te belasten</li>
            <li>pH neutraal (prettig voor melkpoederoplossing)</li>
            <li>Kleine bijdrage aan calcium- en magnesiumopname</li>
            <li>Betere smaak voor ouders die ook het water drinken</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over remineralisatie leest u op onze pagina{" "}
            <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] hover:underline font-medium">
              osmose remineralisatie
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Alternatieven voor flesvoedingwater
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welke alternatieven zijn er naast osmosewater?
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Watertype</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Veilig</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Aandachtspunten</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Osmosewater (geremineraliseerd)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Kook altijd eerst</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">&lt;EUR 0,10/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Speciaal flesvoedingswater</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Duur, plastic verpakking</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">EUR 0,50-2,00/L</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Bronwater (laag mineraal)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-yellow-700 font-semibold">Deels</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Check nitraat en natrium op etiket</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">EUR 0,30-1,00/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Gekookt kraanwater</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-yellow-700 font-semibold">Deels</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Kalk en nitraat blijven aanwezig</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Vrijwel gratis</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Mineraalwater (hoog mineraal)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-red-700 font-semibold">Niet aanbevolen</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Te hoog natrium/mineralen</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">EUR 0,50-2,00/L</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            4-in-1 kokend-water-kraan: ideaal voor flesvoedingbereiding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kokend-water-kraan met ingebouwd osmosefilter is de meest
            praktische oplossing voor ouders die dagelijks flesvoeding bereiden.
            Het systeem biedt:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>
              <strong>Osmosefiltratie:</strong> verwijdert nitraat, lood, PFAS, pesticiden
              en microplastics
            </li>
            <li>
              <strong>Instant warm water op 70-100 graden:</strong> voldoet direct aan
              de WHO-eis voor sterilisatie van het melkpoeder
            </li>
            <li>
              <strong>Koude osmosewaterkraan:</strong> voor doorspoelen en afkoelen
            </li>
            <li>
              <strong>Tijdsbesparing:</strong> geen ketels of pannen nodig voor dagelijkse
              flesvoedingbereiding
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer informatie over{" "}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] hover:underline font-medium">
              kokend-water-kranen
            </Link>{" "}
            en over{" "}
            <Link href="/osmose-water/baby" className="text-[#005F8A] hover:underline font-medium">
              osmosewater voor baby&apos;s
            </Link>.
            Bekijk ook ons overzicht van{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilters kopen
            </Link>.
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

        <CTABanner context="kokend" />
      </div>
    </>
  );
}
