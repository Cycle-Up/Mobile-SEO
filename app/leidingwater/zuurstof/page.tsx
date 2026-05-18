import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Opgelost zuurstof in leidingwater: beluchting, smaak en corrosie",
  description:
    "Opgelost zuurstof in leidingwater: 8-12 mg/L bij koud water. Rol bij smaak, corrosie en ontijzering. Zuurstof daalt bij verwarmen. Osmose-effect op O2.",
  alternates: { canonical: "https://waterfilterplatform.nl/leidingwater/zuurstof" },
  openGraph: {
    title: "Opgelost zuurstof in leidingwater: beluchting, smaak en corrosie",
    description:
      "Opgelost zuurstof in leidingwater: 8-12 mg/L bij koud water. Rol bij smaak, corrosie en ontijzering. Zuurstof daalt bij verwarmen.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Hoeveel zuurstof zit er in koud leidingwater?",
    answer:
      "Koud leidingwater (10-15 graden Celsius) bevat typisch 8-12 mg/L opgelost zuurstof (O2). De exacte hoeveelheid hangt af van de watertemperatuur, luchtdruk en behandeling bij het waterbedrijf. Koud water lost meer O2 op dan warm water: bij 0 graden Celsius is het maximaal 14,6 mg/L, bij 20 graden Celsius nog 9,1 mg/L en bij 40 graden Celsius slechts 6,4 mg/L.",
  },
  {
    question: "Waarom zit er soms een wit waas in een glas koud water dat vanzelf verdwijnt?",
    answer:
      "Het witte waas bij een glas koud leidingwater zijn microscopische luchtbelletjes, geen bacterien of vuildeeltjes. Koud leidingwater staat onder druk in het leidingnet (4-8 bar). Wanneer het druk wegvalt bij het inschenken en het water opwarmt tot kamertemperatuur, vermindert de oplosbaarheid van zuurstof en stikstof. De gassen komen vrij als kleine belletjes die het water troebel maken. Na 1-2 minuten verdwijnen de belletjes en is het water helder. Volkomen normaal en onschadelijk.",
  },
  {
    question: "Veroorzaakt zuurstof in leidingwater corrosie?",
    answer:
      "Ja, opgelost zuurstof is een van de belangrijkste oorzaken van corrosie in leidingen van ijzer, koper en zink. O2 oxideert ijzer tot ijzeroxide (roest): 4Fe + 3O2 + 6H2O geeft 4Fe(OH)3. In koperen leidingen leidt oxidatie tot een beschermende patina maar bij hoge O2-concentraties en lage pH ook tot corrosieputten. Drinkwaterbedrijven voegen soms anti-corrosie-additieven toe (fosfaat) om de leidingwanden te beschermen. In gebouwen met oude ijzeren leidingen kan verhoogd ijzergehalte in het water wijzen op corrosie.",
  },
  {
    question: "Speelt zuurstof een rol bij de smaak van water?",
    answer:
      "Ja, zuurstof draagt bij aan de frisse smaak van water. Water met voldoende O2 (8-10 mg/L) smaakt frisser en levendiger dan gedeaereerd water. Gedestilleerd of ontgast water wordt als vlak of dof ervaren. Dit effect is subtiel maar meetbaar in smaaktests. Het is een van de redenen waarom koud, vers leidingwater aangenamer smaakt dan opgewarmd water dat opnieuw is afgekoeld: bij het verwarmen is een deel van het O2 ontsnapt.",
  },
  {
    question: "Bevat osmosewater minder zuurstof dan leidingwater?",
    answer:
      "Een RO-membraan laat zuurstof gedeeltelijk door: O2 is een klein, niet-geladen molecuul dat door het membraan diffundeert. Het O2-gehalte van osmosewater is licht lager dan van inkomend leidingwater, maar het verschil is praktisch verwaarloosbaar. In de opslagtank kan O2 iets dalen door uitwisseling met de lucht in de druktank. Het praktische effect op smaak is minimaal; osmosewater wordt als fris ervaren door de lage mineralen-TDS, niet door een meetbaar O2-verschil.",
  },
  {
    question: "Wat is beluchting bij waterzuivering en waarom is het nodig?",
    answer:
      "Beluchting (aeratie) is het doelbewust toevoegen van zuurstof aan grondwater of oppervlaktewater bij waterzuivering. Het doel: ijzer en mangaan oxideren zodat ze als vaste stof neerslaan en kunnen worden weggefilterd. Grondwater bevat vaak weinig O2 (0-2 mg/L) maar veel opgelost ijzer (Fe2+) en soms mangaan (Mn2+). Door beluchting wordt Fe2+ omgezet in Fe3+ (hydroxide), dat neerslaat en via zandfiltration wordt verwijderd. Dit is de meest gebruikte ontijzeringsmethode in Nederlandse drinkwaterproductie.",
  },
  {
    question: "Daalt het zuurstofgehalte als ik water verwarm in een waterkoker?",
    answer:
      "Ja, sterk. Bij 100 graden Celsius is de oplosbaarheid van O2 nagenoeg nul (theoretisch 0 mg/L). Een waterkoker stoot alle opgeloste gassen uit het water. Als u gekookt water laat afkoelen neemt het langzaam opnieuw O2 op uit de lucht, maar dit duurt uren. Water dat net gekookt en afgekoeld is bevat tijdelijk minder O2 dan vers leidingwater, wat bijdraagt aan de iets vlakkere smaak die sommige mensen waarnemen.",
  },
  {
    question: "Zijn zuurstofrijke dranken (water met extra O2) wetenschappelijk bewezen zinvol?",
    answer:
      "Nee. Geoxigeneerd water of zuurstofverrijkt water dat via de darm wordt opgenomen heeft geen bewezen gezondheidsvoordelen. Zuurstofopname door het lichaam verloopt vrijwel uitsluitend via de longen. De maag en darmen kunnen slechts verwaarloosbare hoeveelheden O2 uit water opnemen. Onafhankelijke wetenschappelijke studies tonen geen verbeterde sportprestaties, hersenfunctie of herstel na consumptie van geoxigeneerd water. De marketing van deze producten is niet onderbouwd door peer-reviewed bewijs.",
  },
];

export default function LeidingwaterZuurstofPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Leidingwater", url: "https://waterfilterplatform.nl/leidingwater" },
          { name: "Zuurstof", url: "https://waterfilterplatform.nl/leidingwater/zuurstof" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Opgelost zuurstof in leidingwater: beluchting, smaak en corrosie",
          description:
            "Opgelost zuurstof in leidingwater: 8-12 mg/L bij koud water. Rol bij smaak, corrosie en ontijzering.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/leidingwater/zuurstof",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:underline">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Zuurstof</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Opgelost zuurstof in leidingwater: rol bij smaak, corrosie en zuivering
          </h1>
          <QuickAnswer answer="Koud leidingwater bevat 8-12 mg/L opgelost zuurstof (O2), afhankelijk van de temperatuur. Zuurstof speelt een rol bij smaak (fris gevoel), corrosie van leidingen (oxidatie ijzer en koper), en waterzuivering (beluchting voor ontijzering). Osmosewater bevat minder O2 na filtratie." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Wat is opgelost zuurstof?
          </h2>
          <p className="text-gray-700 mb-4">
            Opgelost zuurstof (DO, dissolved oxygen) is de hoeveelheid O2-gasmoleculen die zijn
            opgelost in water. Water is in staat om zuurstof op te lossen vanuit de omgevingslucht;
            de hoeveelheid die oplost hangt af van de watertemperatuur, luchtdruk en het
            zoutgehalte. Hoe kouder het water, hoe meer O2 het kan bevatten.
          </p>
          <p className="text-gray-700 mb-4">
            Opgelost zuurstof wordt gemeten in mg/L (milligram per liter) of ppm (parts per
            million), waarbij 1 mg/L gelijk is aan 1 ppm. Verzadiging verwijst naar de
            maximale hoeveelheid O2 die het water bij die temperatuur en druk kan bevatten.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Zuurstofgehalte in leidingwater: Henry-tabel
          </h2>
          <p className="text-gray-700 mb-4">
            De relatie tussen temperatuur en maximale O2-oplosbaarheid (Henry-wet) laat zien
            dat koud water aanzienlijk meer zuurstof kan bevatten dan warm water:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Temperatuur</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Max. O2-oplosbaarheid (mg/L)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Typisch in leidingwater</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">0 &deg;C</td>
                  <td className="border border-gray-300 px-3 py-2">14,6 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">&mdash;</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">10 &deg;C</td>
                  <td className="border border-gray-300 px-3 py-2">11,3 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">8&ndash;11 mg/L</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">15 &deg;C</td>
                  <td className="border border-gray-300 px-3 py-2">10,1 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">8&ndash;10 mg/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">20 &deg;C</td>
                  <td className="border border-gray-300 px-3 py-2">9,1 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">7&ndash;9 mg/L</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">40 &deg;C</td>
                  <td className="border border-gray-300 px-3 py-2">6,4 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">4&ndash;6 mg/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">60 &deg;C</td>
                  <td className="border border-gray-300 px-3 py-2">4,0 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">1&ndash;3 mg/L</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">100 &deg;C</td>
                  <td className="border border-gray-300 px-3 py-2">0 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">0 mg/L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Leidingwater in Nederland wordt bij de productie niet speciaal ontgast of
            zuurstofverrijkt. Het bevat typisch 80-100% van de verzadigingswaarde bij de
            distributietemperatuur.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Rol van zuurstof in drinkwaterkwaliteit
          </h2>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Smaak en frisheid
          </h3>
          <p className="text-gray-700 mb-4">
            Opgelost zuurstof draagt bij aan de frisse, levendige smaak van koud water.
            Smaakpanels tonen consistent dat water met 8-10 mg/L O2 als frisser en aangenamer
            wordt beoordeeld dan gedeaereerd water met minder dan 3 mg/L O2. Dit is een van de
            redenen waarom koud, vers bronwater of leidingwater lekkerder smaakt dan lauw
            opgewarmd water: het hogere O2-gehalte bij lagere temperatuur speelt een
            waarneembare rol.
          </p>
          <p className="text-gray-700 mb-4">
            Aeroob gekweekte bacterien in het leidingnet consumeren ook O2. Een leidingnet met
            een goede microbiologische kwaliteit en voldoende doorspoeling behoudt een hoger
            O2-gehalte aan de tap.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Corrosie van leidingen
          </h3>
          <p className="text-gray-700 mb-4">
            Zuurstof is een cruciale factor bij corrosie van metalen leidingen. De twee
            meest voorkomende corrosiereacties in drinkwaterleidingen zijn:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>IJzeroxidatie (roest):</strong> opgelost O2 oxideert ijzerionen (Fe2+)
              tot ijzer(III)hydroxide (roest). Dit leidt tot bruinrood water, verstoppingen
              en smaakafwijkingen.
            </li>
            <li>
              <strong>Koperoxidatie:</strong> bij nieuwe koperen leidingen oxideert het oppervlak
              tot een beschermende patina (CuO). Bij lage pH en hoog O2 kan verdere corrosie
              optreden, wat kopersmaak en blauwe vlekken in sanitair veroorzaakt.
            </li>
          </ul>
          <p className="text-gray-700 mb-6">
            Drinkwaterbedrijven voegen soms kleine hoeveelheden fosfaat toe aan het
            distributienet om een beschermende fosfaatlaag op leidingwanden te bevorderen en
            corrosie door zuurstof te beperken.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Beluchting bij waterzuivering
          </h2>
          <p className="text-gray-700 mb-4">
            Beluchting (aeratie) is een essentieel proces bij de zuivering van grondwater.
            Grondwater bevat doorgaans weinig opgelost zuurstof (0-3 mg/L) en juist veel
            opgelost ijzer en mangaan. Door beluchting wordt O2 aan het water toegevoegd
            zodat de volgende oxidatiereacties kunnen plaatsvinden:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Ontijzering:</strong> 4 Fe2+ + O2 + 8 H+ + 8 e- geeft 4 Fe3+, dat als
              Fe(OH)3 neerslaat en via zandfiltration wordt verwijderd. Dit is de meest
              gebruikte methode voor ijzerverwijdering in Nederland.
            </li>
            <li>
              <strong>Ontmanganisering:</strong> Mn2+ wordt via oxidatie met O2 omgezet in
              MnO2 (mangaandioxide), dat neerslaat. Het proces verloopt trager dan
              ijzeroxidatie en vereist hogere pH.
            </li>
            <li>
              <strong>CO2-verwijdering:</strong> beluchting blaast ook overtollig kooldioxide
              uit het grondwater, wat de pH verhoogt en carbonaathardheid beinvloedt.
            </li>
          </ul>
          <p className="text-gray-700 mb-6">
            Na beluchting en filtratie bevat het drinkwater voldoende O2 voor distributie.
            Chloor of chloordioxide wordt in sommige gevallen toegevoegd als aanvullend oxidant
            en desinfectant.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Zuurstof na osmosefiltratie
          </h2>
          <p className="text-gray-700 mb-4">
            Een omgekeerde osmose-membraan is ontworpen om ionen en grotere moleculen te
            blokkeren. Zuurstof (O2) is echter een klein, ongeladen gasmolecuul dat door
            diffusie deels door het membraan passeert. Studies tonen dat RO-membranen 40-70%
            van het inkomende O2 doorlaten, afhankelijk van membraantype en waterdruk.
          </p>
          <p className="text-gray-700 mb-4">
            Het praktische gevolg: osmosewater heeft een licht verlaagd O2-gehalte ten opzichte
            van leidingwater. Bij een inkomend gehalte van 9 mg/L bevat het permeaat typisch
            5-7 mg/L O2. Het verschil is klein en het praktische effect op smaak is minimaal.
            Osmosewater wordt als fris ervaren door de lage totale mineralen-TDS (5-30 mg/L),
            niet door een significante O2-verhoging.
          </p>
          <p className="text-gray-700 mb-4">
            In de druktank (pressurized storage tank) kan O2 iets verder dalen doordat het
            water in contact staat met lucht in de membraan van de tank. Bij een goed
            functionerende druktank is dit effect verwaarloosbaar.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Luchtbellen bij koud water: normaal verschijnsel
          </h2>
          <p className="text-gray-700 mb-4">
            Wanneer u een glas koud leidingwater inschenkt, ziet u soms een wit, troebel
            waas dat na 1-2 minuten verdwijnt. Dit zijn microscopische luchtbelletjes
            bestaande uit zuurstof en stikstof.
          </p>
          <p className="text-gray-700 mb-6">
            Het mechanisme: leidingwater staat onder overdruk (4-8 bar) in het leidingnet.
            Bij deze druk is de oplosbaarheid van gassen hoger dan bij atmosferische druk.
            Zodra het water het kraantje verlaat en de druk wegvalt, vermindert de
            oplosbaarheid. Bovendien warmt het water op van de leidingtemperatuur (8-12 graden
            Celsius) naar kamertemperatuur (20 graden Celsius). Beide effecten samen zorgen
            dat opgeloste lucht als kleine belletjes vrijkomt. Volkomen normaal en onschadelijk;
            troebel water door luchtbellen mag niet verward worden met bacteriologische
            verontreiniging.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Veelgestelde vragen
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-8">
          Zie ook:{" "}
          <Link href="/leidingwater" className="text-[#005F8A] underline">leidingwater kwaliteit</Link>
          {", "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>
          {" en "}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilter soorten</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen in Nederland</h3>
              <p className="text-sm text-gray-600">Welke wettelijke normen gelden voor drinkwaterkwaliteit, inclusief zuurstof en temperatuur?</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: uitleg en werking</h3>
              <p className="text-sm text-gray-600">Hoe een osmosefilter uw leidingwater zuivert en wat het effect is op het zuurstofgehalte.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
