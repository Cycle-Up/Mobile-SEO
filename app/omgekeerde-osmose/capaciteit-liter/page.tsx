import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Osmosefilter capaciteit: GPD berekening en keuze per gezin",
  description:
    "Osmosefilter capaciteit in GPD (gallons per dag): 50/75/100/200 GPD. Bereken hoeveel liter per dag uw gezin nodig heeft. Drukvat en tankgrootte kiezen.",
  alternates: { canonical: "https://waterfilterplatform.nl/omgekeerde-osmose/capaciteit-liter" },
  openGraph: {
    title: "Osmosefilter capaciteit: GPD berekening en keuze per gezin",
    description:
      "Osmosefilter capaciteit in GPD (gallons per dag): 50/75/100/200 GPD. Bereken hoeveel liter per dag uw gezin nodig heeft. Drukvat en tankgrootte kiezen.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat betekent GPD bij een osmosefilter?",
    answer:
      "GPD staat voor Gallons Per Day (gallons per dag). Het is de standaard maateenheid voor de productiecapaciteit van een omgekeerde osmose filter. 1 gallon = 3,785 liter. Een 50 GPD filter produceert dus maximaal 189 liter per dag. De waarde is gecertificeerd bij 25 graden Celsius en 4,1 bar waterdruk.",
  },
  {
    question: "Hoeveel GPD heb ik nodig voor een gezin van 4 personen?",
    answer:
      "Voor een gezin van 4 personen is 50-75 GPD (189-284 liter/dag productiecapaciteit) ruim voldoende. Het werkelijke dagelijkse verbruik voor drinkwater, koken en koffie/thee is 15-20 liter per dag. Dankzij het drukvat dat water buffert, hoeft de filter niet continu te produceren. 50 GPD biedt een comfortabele buffer.",
  },
  {
    question: "Waarom produceert mijn osmosefilter minder water dan de opgegeven GPD?",
    answer:
      "De GPD-waarde is gemeten bij 25 graden Celsius en 4,1 bar. In Nederlandse woningen is het leidingwater gemiddeld 10-15 graden Celsius en de waterdruk 2,5-4 bar. Lagere temperatuur en lagere druk reduceren de productie met 40-60%. Een 50 GPD filter produceert in de praktijk vaak slechts 20-30 liter per dag effectief.",
  },
  {
    question: "Wat is een drukvat bij een osmosefilter en waarom heb ik dat nodig?",
    answer:
      "Het drukvat (pressure vessel of opslagtank) is een membraantank die gefilterd water buffert. Terwijl u geen water gebruikt, vult de filter langzaam de tank. Wanneer u water vraagt, levert de tank direct water zonder wachttijd. Standaard drukvaten zijn 3,2 gallon (12 liter) bruikbaar volume. Zonder drukvat zou u minuten moeten wachten per glas water.",
  },
  {
    question: "Heeft een hogere GPD ook een hogere waterdruk nodig?",
    answer:
      "Hogere GPD-filters produceren sneller water bij dezelfde druk. Voor 75+ GPD is een werkdruk van minimaal 3,5 bar aan te bevelen. Bij lagere druk (onder 2,5 bar) of grote gezinnen is een boosterpomp te overwegen. Een boosterpomp verhoogt de druk naar 5-6 bar en vergroot zo de effectieve productie met 50-100%.",
  },
  {
    question: "Wanneer heb ik 100 GPD of meer nodig?",
    answer:
      "100 GPD of meer is zinvol bij: gezinnen groter dan 6 personen, een kokend water kraan met hoog dagverbruik (2-5 liter per dag extra), kantoorgebruik, gebruik voor aquarium naast drinkwater, of bij zeer laag leidingwaterdruk waarbij de effectieve productie per GPD lager uitvalt.",
  },
  {
    question: "Is een groter drukvat altijd beter?",
    answer:
      "Niet per se. Een te groot drukvat betekent dat gefilterd water lang stil staat, wat de waterkwaliteit kan verslechteren (bacteriegroei, smaak). De vuistregel is: een drukvat van 1-2 keer het dagelijkse verbruik. Voor een gezin dat 15 liter per dag verbruikt is een 12-liter tank (3,2 gallon standaard) goed gedimensioneerd.",
  },
  {
    question: "Kan ik een osmosefilter zonder drukvat gebruiken?",
    answer:
      "Ja, tankloos (tankless) osmosefilters produceren water on-demand zonder drukvat. Ze hebben een hogere GPD-capaciteit (200-400 GPD) om direct aan de vraag te voldoen. Ze zijn populair bij gebrek aan ruimte onder het aanrecht. Nadeel: ze zijn duurder en vereisen minimaal 4 bar waterdruk voor goede werking.",
  },
];

export default function CapaciteitLiterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Omgekeerde osmose", url: "https://waterfilterplatform.nl/omgekeerde-osmose" },
          { name: "Capaciteit liter", url: "https://waterfilterplatform.nl/omgekeerde-osmose/capaciteit-liter" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Osmosefilter capaciteit kiezen: GPD berekening en vergelijking",
          description:
            "Osmosefilter capaciteit in GPD (gallons per dag): 50/75/100/200 GPD. Bereken hoeveel liter per dag uw gezin nodig heeft.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/omgekeerde-osmose/capaciteit-liter",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Capaciteit liter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosefilter capaciteit kiezen: GPD berekening en vergelijking
          </h1>
          <QuickAnswer answer="De capaciteit van een osmosefilter wordt uitgedrukt in GPD (gallons per dag). 1 GPD = 3,785 liter. Een gezin van 4 personen heeft voldoende aan 50-75 GPD (190-285 liter/dag productiecapaciteit) voor drinkwater. Het drukvat buffert de productie zodat u direct water heeft." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          GPD uitgelegd: gallons per dag omrekenen naar liters
        </h2>
        <p className="text-gray-700 mb-4">
          GPD staat voor <strong>Gallons Per Day</strong>, gallons per dag. Het is de internationale standaard voor osmosefilter capaciteit, afkomstig uit de Amerikaanse markt waar gallons de gangbare volume-eenheid zijn. Voor de Europese markt is omrekening naar liters noodzakelijk.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>1 US gallon = 3,785 liter.</strong> Met deze omrekeningsfactor kunt u eenvoudig vergelijken:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Capaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Liter per dag (max)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Praktisch (NL, 60%)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Toepassing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">50 GPD</td>
                <td className="border border-gray-300 px-3 py-2">189 liter</td>
                <td className="border border-gray-300 px-3 py-2">75-110 liter</td>
                <td className="border border-gray-300 px-3 py-2">1-4 personen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">75 GPD</td>
                <td className="border border-gray-300 px-3 py-2">284 liter</td>
                <td className="border border-gray-300 px-3 py-2">110-170 liter</td>
                <td className="border border-gray-300 px-3 py-2">3-5 personen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">100 GPD</td>
                <td className="border border-gray-300 px-3 py-2">378 liter</td>
                <td className="border border-gray-300 px-3 py-2">150-230 liter</td>
                <td className="border border-gray-300 px-3 py-2">5-6 personen / kokend water kraan</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">200 GPD</td>
                <td className="border border-gray-300 px-3 py-2">757 liter</td>
                <td className="border border-gray-300 px-3 py-2">300-450 liter</td>
                <td className="border border-gray-300 px-3 py-2">Groot gezin / zakelijk</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Werkelijke productie in Nederland: waarom lager dan de specificatie?
        </h2>
        <p className="text-gray-700 mb-4">
          De GPD-waarde op de verpakking is altijd gemeten onder ideale laboratoriumomstandigheden: <strong>25 graden Celsius watertemperatuur en 4,1 bar (60 psi) inlaatdruk</strong>. In Nederlandse huishoudens wijken beide parameters significant af.
        </p>
        <p className="text-gray-700 mb-4">
          Nederlands leidingwater heeft een gemiddelde temperatuur van 10-15 graden Celsius. Per graad Celsius lager dan 25 graden daalt de membraandoorlatendheid met circa 3%. Bij 15 graden Celsius is de productie daardoor al 30% lager. De waterdruk in het Nederlandse distributienet is gemiddeld 3-5 bar, maar in oudere woonwijken en bovenste verdiepingen kan dit 2,5-3 bar zijn, wat de productie verder reduceert.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Rekent u met een reductiefactor van 40-60% voor Nederlandse omstandigheden.</strong> Een 50 GPD filter produceert in de Nederlandse praktijk gemiddeld 70-110 liter per dag effectief — ruimschoots voldoende voor een gezin van 4 personen dat 15-20 liter per dag verbruikt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoeveel water heeft uw gezin nodig? Berekening
        </h2>
        <p className="text-gray-700 mb-4">
          Het dagelijkse waterverbruik voor osmosewater is doorgaans veel lager dan mensen verwachten. Osmosefilters worden primair gebruikt voor drinkwater, koken en warme dranken, niet voor douchen, spoelen of wassen.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Toepassing</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Verbruik per persoon/dag</th>
                <th className="border border-gray-300 px-3 py-2 text-left">4 personen/dag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Drinkwater</td>
                <td className="border border-gray-300 px-3 py-2">1,5-2 liter</td>
                <td className="border border-gray-300 px-3 py-2">6-8 liter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Koken</td>
                <td className="border border-gray-300 px-3 py-2">0,5-1 liter</td>
                <td className="border border-gray-300 px-3 py-2">2-4 liter</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Koffie en thee</td>
                <td className="border border-gray-300 px-3 py-2">0,3-0,5 liter</td>
                <td className="border border-gray-300 px-3 py-2">1-2 liter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Totaal</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold">2,5-3,5 liter</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold">10-14 liter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Met een buffer van 1,5-2 keer het dagverbruik (voor piekbelasting en weekendgebruik) heeft een gezin van 4 personen <strong>15-20 liter per dag</strong> effectieve productiecapaciteit nodig. Een 50 GPD filter dat in NL-praktijk 70+ liter per dag produceert, biedt hiervoor ruim voldoende marge.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanbevolen GPD per gezinsgrootte
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Gezinsgrootte</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Dagverbruik osmosewater</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanbevolen GPD</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">1-2 personen</td>
                <td className="border border-gray-300 px-3 py-2">5-10 liter</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-green-700">50 GPD</td>
                <td className="border border-gray-300 px-3 py-2">Ruim voldoende</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">3-4 personen</td>
                <td className="border border-gray-300 px-3 py-2">10-20 liter</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-green-700">50-75 GPD</td>
                <td className="border border-gray-300 px-3 py-2">50 GPD doorgaans voldoende</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">5-6 personen</td>
                <td className="border border-gray-300 px-3 py-2">20-30 liter</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-blue-700">75-100 GPD</td>
                <td className="border border-gray-300 px-3 py-2">Of 50 GPD met boosterpomp</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Meer dan 6 personen of zakelijk</td>
                <td className="border border-gray-300 px-3 py-2">30+ liter</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-blue-700">100-200 GPD</td>
                <td className="border border-gray-300 px-3 py-2">Grote tank aanbevolen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het drukvat: rol als buffer en hoe groot kiezen
        </h2>
        <p className="text-gray-700 mb-4">
          Het drukvat (pressure vessel) is een essentieel onderdeel van elk osmosesysteem met tank. De tank bestaat uit twee kamers, gescheiden door een butylrubber membraan. De binnenste kamer bevat gefilterd water; de buitenste kamer heeft een luchtlading (standaard 0,3-0,5 bar). Wanneer water in de tank stroomt, comprimeer de lucht en stijgt de druk, waardoor water direct en met goede druk uit de filterkraan komt.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Standaardformaat: 3,2 gallon tank (12 liter bruto, 8-9 liter bruikbaar).</strong> Dit is voor de meeste gezinnen tot 4 personen ruim voldoende. Grotere tanks (5 gallon = 19 liter) zijn beschikbaar voor hogere verbruikersgroepen.
        </p>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Drukvat te klein: wat gebeurt er?</h3>
            <p className="text-gray-700 text-sm">
              U merkt dat de filterkraan na een glas water al aanmerkelijk minder druk geeft. U moet wachten (5-15 minuten) tot de filter de tank opnieuw heeft aangevuld. Vervelend bij piekgebruik (maaltijdvoorbereiding, meerdere glazen achter elkaar).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Drukvat te groot: wat zijn de risicos?</h3>
            <p className="text-gray-700 text-sm">
              Water staat lang stil in de tank. Bij laag dagverbruik kan water meerdere dagen staan, wat bacteriegroei bevordert en de smaak benadeel. Vernieuw het water in de tank regelmatig door de kraan door te spoelen als u langdurig afwezig bent geweest.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Invloed van waterdruk en temperatuur op de praktische productie
        </h2>
        <p className="text-gray-700 mb-4">
          Waterdruk heeft een direct effect op de membraandoorlatendheid. Hogere druk duwt meer water door het semipermeabele membraan. De relatie is niet lineair maar globaal geldt: bij 3 bar produceert een 50 GPD filter circa 60% van de gecertificeerde capaciteit; bij 5 bar bereikt u 90-100%.
        </p>
        <p className="text-gray-700 mb-6">
          Als uw waterdruk onder 3 bar ligt of als u een 75+ GPD filter optimaal wilt benutten, is een{" "}
          <Link href="/omgekeerde-osmose/boosterpomp" className="text-[#005F8A] underline">boosterpomp voor osmosefilter</Link>{" "}
          de oplossing. Een boosterpomp verhoogt de druk naar 5-6 bar en kan de effectieve productie verdubbelen. De energiekosten zijn minimaal (10-15 watt vermogen, enkele euro per jaar).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer hogere GPD nodig? Speciale toepassingen
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste huishoudens is 50 GPD ruimschoots voldoende. Er zijn situaties waarbij hogere capaciteit zinvol is:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Kokend water kraan</strong> (Quooker, Grohe Red): hoge dagelijkse onttrekking, 2-5 liter extra per dag. 75-100 GPD aanbevolen.</li>
          <li><strong>Aquarium vullen</strong>: osmosewater is ideaal voor aquaria. Grote aquaria (200+ liter) vereisen flinke hoeveelheden bij verversing.</li>
          <li><strong>Kantoor of kleine horeca</strong>: meerdere gebruikers, constant hoge vraag. 200 GPD of meerdere systemen.</li>
          <li><strong>Lage waterdruk woning</strong>: lagere druk = lagere feitelijke productie. Compenseer met hogere GPD of boosterpomp.</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Wilt u meer weten over omgekeerde osmose in het algemeen? Bekijk onze{" "}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            complete gids over omgekeerde osmose
          </Link>{" "}
          of lees direct over{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen: welk systeem past bij u
          </Link>.
        </p>

        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">Veelgestelde vragen over osmosefilter capaciteit</h2>
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
