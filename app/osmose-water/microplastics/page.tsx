import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Osmosewater en microplastics: aantoonbaar vrij van plastic deeltjes",
  description:
    "Osmosewater bevat geen microplastics of nanoplastics. Membraanporieen 0,0001 micron houden alle plastic deeltjes tegen. Meten met TDS-meter en onafhankelijke.",
  alternates: { canonical: "https://waterfilterplatform.nl/osmose-water/microplastics" },
  openGraph: {
    title: "Osmosewater en microplastics: aantoonbaar vrij van plastic deeltjes",
    description:
      "Osmosewater bevat geen microplastics of nanoplastics. Membraanporieen 0,0001 micron houden alle plastic deeltjes tegen. Meten met TDS-meter en onafhankelijke.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Bevat osmosewater microplastics?",
    answer:
      "Nee. Een correct werkend osmosemembraan heeft porieen van 0,0001 micron (0,1 nanometer). Microplastics zijn minimaal 1 nanometer groot en kunnen het membraan fysiek niet passeren. Studies die osmosewater analyseren tonen geen detecteerbare microplastics, mits het systeem goed onderhouden is en het membraan niet beschadigd is.",
  },
  {
    question: "Hoe weet ik of mijn osmosefilter microplastics verwijdert?",
    answer:
      "Een integraal werkend osmosemembraan verwijdert per definitie alle deeltjes groter dan 0,0001 micron, inclusief alle microplastics en de meeste nanoplastics. U kunt de algemene werking van het membraan controleren met een TDS-meter: osmosewater hoort een TDS te hebben van minder dan 20 mg/L (vaak 5-15). Een hoge TDS wijst op membraanbeschadiging. Voor microplastics-specifiek testen is een gecertificeerd laboratorium nodig.",
  },
  {
    question: "Waarom bevat flessenwater meer microplastics dan osmosewater?",
    answer:
      "Flessenwater heeft meerdere microplastics-bronnen die osmosewater niet heeft: de plastic fles zelf (PET degradeert, met name bij warmte en UV-blootstelling), het bottelen- en transportproces, en de dop. Studies tonen dat flessenwater gemiddeld 2 tot 4 keer meer microplastics bevat dan kraanwater. Osmosewater dat direct aan de kraan wordt getapt kent geen van deze risicofactoren.",
  },
  {
    question: "Verwijdert een osmosefilter ook nanoplastics?",
    answer:
      "Ja, voor zover we kunnen meten. Nanoplastics zijn deeltjes kleiner dan 1 micrometer. Een osmosemembraan filtert op 0,0001 micron (0,1 nanometer). Zelfs de kleinste gemeten nanoplastics (enkele nanometers) zijn nog altijd tientallen tot honderden keren groter dan de membraanporieen. De verwijdering van nanoplastics door osmose is theoretisch compleet en praktisch bevestigd in de studies die er zijn.",
  },
  {
    question: "Moet ik mijn osmosefilter vervangen om microplastics-verwijdering te garanderen?",
    answer:
      "Ja. Een beschadigd of verouderd membraan kan kleine scheurtjes of degradatie vertonen waardoor de filterprestaties afnemen. Fabrikanten adviseren het RO-membraan elke 2 tot 3 jaar te vervangen, afhankelijk van waterdruk, waterverbruik en waterhardheid. Periodieke TDS-controle signaleert membraanverlies voordat het een probleem wordt.",
  },
  {
    question: "Is osmosewater veilig na filtratie op microplastics?",
    answer:
      "Osmosewater is vrij van microplastics, nanoplastics, PFAS, lood, nitraten en andere opgeloste verontreinigingen. Het heeft echter ook een laag mineralengehalte (TDS 5-20 mg/L). Voor optimale gezondheid en smaak voegen goede osmosesystemen via een remineralisatiefilter calcium en magnesium terug toe, waarna het water lekker en volledig drinkveilig is.",
  },
  {
    question: "Bevat leidingwater microplastics?",
    answer:
      "In lage concentraties ja. Diverse studies vonden microplastics in Nederlands kraanwater, maar in significant lagere concentraties dan in flessenwater. De WHO concludeert dat er bij de huidige niveaus in kraanwater geen bewijs is voor directe gezondheidsschade. Nederlandse waterbedrijven monitoren en filteren actief, maar standaard zuiveringsprocessen verwijderen niet alle microplastics volledig.",
  },
  {
    question: "Wat is het verschil tussen microplastics en nanoplastics?",
    answer:
      "Microplastics zijn kunststofdeeltjes met een grootte van 1 nanometer tot 5 millimeter. Nanoplastics worden doorgaans gedefinieerd als deeltjes kleiner dan 1 micrometer (1000 nanometer). Nanoplastics zijn moeilijker te meten (kleiner dan de golflengte van zichtbaar licht) en potentieel biologisch actiever, omdat ze celwanden kunnen passeren. Beide worden volledig verwijderd door osmosefiltratie.",
  },
  {
    question: "Kan ik microplastics thuis meten in mijn osmosewater?",
    answer:
      "Niet eenvoudig. Directe meting van microplastics vereist gespecialiseerde laboratoriummethoden zoals Raman-spectroscopie of pyrolyse-GC/MS. Een TDS-meting is een indirecte indicator: osmosewater met een TDS lager dan 20 mg/L functioneert correct en filtert ook microplastics. Voor zekerheid kunt u een watermonster opsturen naar een gecertificeerd laboratorium.",
  },
  {
    question: "Welk osmosesysteem is het beste voor microplastics-verwijdering?",
    answer:
      "Elk NSF/ANSI 58-gecertificeerd osmosesysteem verwijdert microplastics effectief. Het certificaat garandeert de membraanintegriteit en minimale prestaties. Systemen met een pre-sedimentfilter (5 micron of fijner) verlengen de levensduur van het osmosemembraan door grotere deeltjes voor te filteren. Een 4-in-1 systeem met kokend water functionaliteit biedt ook gemak voor dagelijks gebruik.",
  },
  {
    question: "Is osmosewater beter dan bronwater qua microplastics?",
    answer:
      "Ja, in de meeste gevallen. Bronwater in plastic flessen bevat meer microplastics dan osmosewater door de interactie met de fles. Bronwater in glazen flessen is vergelijkbaar, maar veel duurder en minder milieuvriendelijk. Osmosewater direct aan de kraan heeft geen contact met plastieke verpakking en heeft de laagste microplastics-concentratie van alle drinkwateralternatieven.",
  },
];

export default function OsmoseWaterMicroplasticsPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Osmose water", url: "https://waterfilterplatform.nl/osmose-water" },
          { name: "Microplastics", url: "https://waterfilterplatform.nl/osmose-water/microplastics" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Osmosewater en microplastics: aantoonbaar vrij van plastic deeltjes",
          description:
            "Osmosewater bevat geen microplastics of nanoplastics. Membraanporieen 0,0001 micron houden alle plastic deeltjes tegen.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/osmose-water/microplastics",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:underline">Osmose water</Link>
            <span className="mx-2">/</span>
            <span>Microplastics</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater en microplastics: aantoonbaar vrij van plastic deeltjes
          </h1>
          <QuickAnswer answer="Osmosewater bevat geen microplastics of nanoplastics. Het osmosemembraan heeft porieen van 0,0001 micron — duizenden malen kleiner dan de kleinste microplastics. Flessenwater bevat gemiddeld 2-4 keer meer microplastics dan kraanwater. Osmosewater direct aan de kraan is de schoonste optie." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Hoe osmose microplastics verwijdert
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Omgekeerde osmose werkt op basis van druk: water wordt door een semi-permeabel membraan
            geperst. De porieen van dat membraan zijn extreem klein: circa 0,0001 micron, ofwel
            0,1 nanometer. Ter vergelijking: een watermolecuul (H2O) is 0,00028 nanometer en past
            door het membraan. Een natriumion is groter en wordt al tegengehouden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Microplastics zijn minimaal 1 nanometer groot en lopen op tot 5 millimeter. Zelfs de
            allerkleinste nanoplastics zijn tientallen tot honderden keren groter dan de
            membraanporieen. Het gevolg: geen enkel plasticdeeltje kan het membraan passeren.
            Dit is geen chemische reactie maar puur fysieke uitsluiting — vergelijkbaar met een
            raam dat water buiten houdt.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Vergelijking: osmosewater vs flessenwater vs kraanwater
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De ironie van de flessenwater-industrie is dat het product dat het meest als
            "puur" wordt vermarkt, gemiddeld de meeste microplastics bevat. Meerdere
            onafhankelijke studies tonen dit consistent aan:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Watertype</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Microplastics (deeltjes/liter)</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Belangrijkste bron</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Milieu-impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Osmosewater (kraan)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Niet detecteerbaar</td>
                  <td className="border border-gray-300 p-3">Geen plastic contact na membraan</td>
                  <td className="border border-gray-300 p-3 text-green-700">Laag</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Kraanwater (NL)</td>
                  <td className="border border-gray-300 p-3 text-yellow-700">0-5 (laag)</td>
                  <td className="border border-gray-300 p-3">Leidingnet, behandelingssysteem</td>
                  <td className="border border-gray-300 p-3 text-green-700">Laag</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Flessenwater (PET)</td>
                  <td className="border border-gray-300 p-3 text-red-600">10-600+ (hoog)</td>
                  <td className="border border-gray-300 p-3">PET-fles, bottelen, dop, transport</td>
                  <td className="border border-gray-300 p-3 text-red-600">Hoog</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Flessenwater (glas)</td>
                  <td className="border border-gray-300 p-3 text-yellow-700">0-10 (laag)</td>
                  <td className="border border-gray-300 p-3">Bronwater zelf, dop</td>
                  <td className="border border-gray-300 p-3 text-yellow-700">Gemiddeld</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            De hoge waarden in PET-flessenwater zijn deels te verklaren door degradatie van de fles
            zelf: schudden, warmte en UV-blootstelling lossen microdeeltjes los. Een studie uit 2018
            in het tijdschrift Frontiers in Chemistry vond gemiddeld 325 microplastic-deeltjes per
            liter in flessenwater van bekende merken, met uitschieters boven de 10.000 deeltjes per liter.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Hoe kunt u de filterkwaliteit zelf controleren?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Direct meten van microplastics in osmosewater vereist een laboratorium. Maar de
            prestaties van uw osmosemembraan kunt u eenvoudig monitoren met een TDS-meter (Total
            Dissolved Solids, opgeloste stoffen in mg/L):
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>TDS lager dan 20 mg/L:</strong> membraan werkt uitstekend, microplastics worden verwijderd</li>
            <li><strong>TDS 20-50 mg/L:</strong> acceptabel maar houd in de gaten, membraan slijt</li>
            <li><strong>TDS hoger dan 50 mg/L:</strong> membraan heeft waarschijnlijk schade, controleer en vervang</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een TDS-meter kost 10 tot 25 euro en is het meest praktische onderhoudshulpmiddel
            voor een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilter
            </Link>.
            Meer over TDS-meting en wat goede waarden zijn vindt u in onze kennisbank over
            TDS-meter gebruik.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Nanoplastics: de volgende uitdaging
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nanoplastics zijn deeltjes kleiner dan 1 micrometer. Ze zijn zo klein dat ze
            zelfs celwanden kunnen passeren en zijn terug te vinden in menselijk bloed,
            longsweefsel en placentaweefsel (op basis van recente studies uit 2022-2024).
            Detectie is lastig omdat ze kleiner zijn dan de golflengte van zichtbaar licht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ook voor nanoplastics is osmose de enige thuisfiltertechniek die effectief is.
            De membraanporieen van 0,0001 micron (0,1 nanometer) zijn ook kleiner dan de
            kleinste gemeten nanoplastics. Andere filtertechnieken — actief kool, sedimentfilters,
            waterfilterkannen — houden nanoplastics niet tegen. Meer informatie over de specifieke
            gezondheidsrisicos en wetenschappelijke stand van zaken vindt u op onze pagina over{" "}
            <Link href="/waterfilter/nanoplastics" className="text-[#005F8A] hover:underline font-medium">
              nanoplastics in drinkwater
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Onderhoud van uw osmosefilter voor blijvende microplastics-bescherming
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosesysteem verwijdert alleen microplastics zolang het membraan intact is.
            Goed onderhoud is dus essentieel:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Pre-sedimentfilter:</strong> vervangen elke 6-12 maanden. Houdt grotere deeltjes tegen en beschermt het dure osmosemembraan.</li>
            <li><strong>Actief koolfilter (pre en post):</strong> vervangen elke 12 maanden. Verbetert smaak en verwijdert chloor.</li>
            <li><strong>Osmosemembraan:</strong> vervangen elke 2-3 jaar. Het hart van het systeem.</li>
            <li><strong>Remineralisatiefilter:</strong> vervangen elke 12 maanden. Voegt calcium en magnesium terug toe.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over de exacte frequentie en kosten van filterwisseling vindt u op onze pagina
            over{" "}
            <Link href="/waterfilter/microplastics" className="text-[#005F8A] hover:underline font-medium">
              waterfilters en microplastics
            </Link>{" "}
            en in de kennisbank.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De 4-in-1 osmosekraan: microplastics-vrij water op elk moment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een 4-in-1 kokend waterkraan met ingebouwd osmosefilter combineert het gemak van
            direct kokend water met de kwaliteit van osmosefiltratie. U heeft altijd gefilterd,
            microplastics-vrij water beschikbaar: koud, warm of kokend. Geen plastic flessen,
            geen waterkoker, geen separate filter-kan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het systeem filtert al het water door het osmosemembraan voordat het in de boiler
            terechtkomt. Ook het kokende water is dus vrij van microplastics, PFAS, kalk en
            andere verontreinigingen. Dit is met name relevant als u thee of babyvoeding bereidt.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Normen en certificering voor microplastics
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er bestaan momenteel geen wettelijke normen voor microplastics in drinkwater (ook
            niet in de EU-richtlijn 2020/2184, die wel monitoring verplicht stelt). Voor waterfilters
            is er evenmin een specifiek certificaat voor microplastics-verwijdering.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wel zijn er indirecte garanties: een{" "}
            <Link href="/drinkwaternormen/kiwa-nsf-ansi" className="text-[#005F8A] hover:underline font-medium">
              NSF/ANSI 58-gecertificeerd osmosemembaan
            </Link>{" "}
            garandeert de membraanintegriteit en minimale prestaties voor een breed scala
            aan contaminanten. Omdat microplastics groter zijn dan alle stoffen die bij NSF 58
            worden gemeten, biedt een gecertificeerd membraan ook volledige microplastics-bescherming.
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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/drinkwater/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Microplastics in drinkwater</h3>
            <p className="text-sm text-gray-600">Hoeveel microplastics zitten er in drinkwater en wat zijn de risicos.</p>
          </Link>
          <Link href="/drinkwaternormen/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen voor microplastics</h3>
            <p className="text-sm text-gray-600">Wat zeggen de normen over microplastics in drinkwater.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose als filtertechniek</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose werkt en welke stoffen het verwijdert.</p>
          </Link>
          <Link href="/osmose-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater</h3>
            <p className="text-sm text-gray-600">Alles over osmosewater: werking, voordelen en toepassingen.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
