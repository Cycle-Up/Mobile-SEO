import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Omgekeerde osmose en drinkwaternormen: wanneer is extra filtratie zinvol?",
  description:
    "Kraanwater voldoet aan normen, maar osmose gaat verder. Lees wanneer extra RO-filtratie zinvol is: PFAS, lood, kalk, risicogroepen en de 4-in-1 kraan.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/drinkwaternormen/reverse-osmosis",
  },
  openGraph: {
    title: "Omgekeerde osmose en drinkwaternormen: wanneer is extra filtratie zinvol?",
    description:
      "Kraanwater voldoet aan normen, maar osmose gaat verder. Lees wanneer extra RO-filtratie zinvol is: PFAS, lood, kalk, risicogroepen en de 4-in-1 kraan.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Moet ik een osmosefilter aanschaffen als mijn kraanwater veilig is?",
    answer:
      "Dat is een persoonlijke afweging. Nederlands kraanwater voldoet aan alle wettelijke normen en is veilig om te drinken. Osmose voegt een extra verwijderingslaag toe voor stoffen waarvoor geen normen bestaan (medicijnresten, nanoplastics), voor PFAS-sporen onder de norm, en voor smaak en kalkreductie. Voor de gemiddelde gezonde volwassene is osmose een keuze voor extra zekerheid of smaakvoorkeur, geen noodzaak.",
  },
  {
    question: "Wat is het TDS-verschil tussen kraanwater en osmosewater?",
    answer:
      "TDS (Total Dissolved Solids) is een maat voor alle opgeloste stoffen in mg/L. Kraanwater heeft in Nederland een TDS van gemiddeld 150-400 mg/L, afhankelijk van de regio (harder water = hoger TDS). Osmosewater heeft een TDS van 1-20 mg/L na het RO-membraan. Na een remineralisatiepatroon stijgt de TDS naar 20-60 mg/L. Veel mensen beschrijven osmosewater als frisser en minder 'zwaar' van smaak.",
  },
  {
    question: "Verwijdert osmose PFAS uit drinkwater?",
    answer:
      "Ja. Omgekeerde osmose verwijdert 90-99% van de meeste PFAS-verbindingen. Dit geldt voor zowel langketenige PFAS (PFOS, PFOA) als kortketenige varianten, hoewel de verwijderingsefficiency voor kortketenige PFAS iets lager kan zijn. Voor consumenten die in gebieden wonen waar PFAS-detectie in bronwater is gerapporteerd, biedt osmose een significante extra barriere, ook als de concentraties onder de wettelijke norm liggen.",
  },
  {
    question: "Is osmose geschikt voor baby's en zuigelingen?",
    answer:
      "Osmosewater kan geschikt zijn voor de bereiding van babyvoeding, maar alleen als het systeem is uitgerust met een goed werkende remineralisatiestap. Zuiver osmosewater (TDS 1-5 mg/L) heeft een erg lage mineraleninhoud en een licht zure pH die niet ideaal is voor zuigelingen. Na remineralisatie naar 30-60 mg/L is het water mineraalrijker en veilig. Bij nitraatproblemen in putwater of oude leidingen is osmose voor babywater bijzonder zinvol.",
  },
  {
    question: "Helpt osmose bij loden leidingen in huis?",
    answer:
      "Ja. Een osmosesysteem gemonteerd op het kraanpunt verwijdert meer dan 95% van het lood uit het water. Dit is de meest directe bescherming als u woont in een woning gebouwd voor 1960 met mogelijk nog loden huisinstallaties. Osmose is in dit geval een verantwoorde keuze in afwachting van leidingvervanging, of als permanent alternatief voor wie geen leidingvervanging kan realiseren.",
  },
  {
    question: "Wat is een 4-in-1 kokend waterfilter en bevat die ook osmose?",
    answer:
      "Een 4-in-1 kokend waterfilter (zoals systemen van Quooker of alternatieve merken) combineert gefilterd koud water, warm water, kokend water en soms bruisend water in een kraan. Sommige modellen bevatten een osmosefilterstap; andere gebruiken alleen een koolstoffilter. Als u zowel gefilterd drinkwater als kokend water wilt combineren met osmosefiltratie, zijn er specifieke modellen die dit bieden. Controleer altijd of het systeem een NSF/ANSI 58 gecertificeerd RO-membraan bevat.",
  },
  {
    question: "Wat kosten de filters van een osmosesysteem per jaar?",
    answer:
      "De jaarlijkse onderhoudskosten van een osmosesysteem bestaan uit het vervangen van de prefilters (sediment en actief kool, circa 25-50 euro per jaar), het RO-membraan (circa 40-80 euro, levensduur 2-5 jaar) en eventueel een postfilter. Totaal rekent u op 60-120 euro per jaar voor een gemiddeld huishoudelijk systeem. Dat is aanzienlijk goedkoper dan structureel flessenwater kopen (gemiddeld 400-800 euro per jaar voor een gezin van vier personen).",
  },
  {
    question: "Mist osmosewater mineralen? Is dat ongezond?",
    answer:
      "Osmosewater zonder remineralisatie heeft een uiterst lage mineraleninhoud. Bij exclusief gebruik van dit water als enige drank zou de mineralenbijdrage van drinkwater verwaarloosbaar worden. Voeding levert echter het overgrote deel van de dagelijkse calcium- en magnesiuminname. Goede osmosesystemen zijn uitgerust met een remineralisatiepatroon dat calcium en magnesium terugvoegt. De WHO stelt minimale calcium- en magnesiumgehalten aanbevolen voor drinkwater van respectievelijk 25 en 10 mg/L.",
  },
  {
    question: "Is osmose beter voor het milieu dan flessenwater?",
    answer:
      "Ja, op bijna alle milieumaten. De productie van een plastic fles water vereist gemiddeld 3-7 liter water en produceert circa 100-200 gram CO2-equivalent per liter gedronken water. Osmosefiltratie van kraanwater produceert per liter drinkwater slechts een fractie hiervan. Het afvalwater (concentraat) van een osmosesysteem is een nadeel, maar bij moderne systemen met waterbesparend ontwerp is de verhouding gefilterd water versus afvalwater 1:1 of beter, wat de milieu-impact minimaal maakt.",
  },
  {
    question: "Hoe werkt omgekeerde osmose technisch?",
    answer:
      "Bij omgekeerde osmose wordt water onder druk (3-8 bar) door een semipermeabel membraan geperst. Het membraan heeft porieen van circa 0,0001 micron (0,1 nanometer). Moleculen en ionen die groter zijn dan watermoleculen worden tegengehouden en afgevoerd als concentraat. Het gezuiverde permeaat heeft een TDS van 1-20 mg/L. Een typisch thuis-RO-systeem bestaat uit sedimentprefilter, actief koolprefilter, het RO-membraan, en een postfilter (kool of remineralisatie). Water wordt opgeslagen in een drukvat van 5-12 liter.",
  },
];

export default function ReverseOsmosisPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "Omgekeerde osmose en drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen/reverse-osmosis" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Omgekeerde osmose en drinkwaternormen: wanneer is extra filtratie zinvol?",
          description:
            "Kraanwater voldoet aan normen, maar osmose gaat verder. Lees wanneer extra RO-filtratie zinvol is: PFAS, lood, kalk, risicogroepen en de 4-in-1 kraan.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/reverse-osmosis",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Osmose als extra stap</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose en drinkwaternormen: wanneer is extra filtratie zinvol?
          </h1>
          <QuickAnswer answer="Nederlands kraanwater voldoet aan alle wettelijke normen. Omgekeerde osmose voegt een extra verwijderingslaag toe en is zinvol voor: PFAS-sporen, medicijnresten zonder wettelijke norm, lood via huisinstallaties, risicogroepen (baby's, zwangere vrouwen, immunogecompromitteerden) en smaak- of kalkproblemen. Osmosewater heeft een TDS van 1-20 versus 150-400 mg/L voor kraanwater. Een remineralisatiestap is aanbevolen. Osmose is goedkoper en milieuvriendelijker dan flessenwater." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Uitgangspunt: Nederlands kraanwater is veilig
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het is belangrijk dit voorop te stellen: Nederlands kraanwater behoort tot de veiligste
            ter wereld. De 10 drinkwaterbedrijven meten duizenden parameters per jaar en publiceren
            jaarlijkse kwaliteitsrapporten. Het percentage normoverschrijdingen is uiterst laag en
            betreft vrijwel nooit de gezondheidsrelevante parameters. De Inspectie Leefomgeving en
            Transport (ILT) houdt onafhankelijk toezicht. Het{" "}
            <Link href="/drinkwaternormen/drinkwaterbesluit" className="text-[#005F8A] hover:underline font-medium">
              Drinkwaterbesluit
            </Link>{" "}
            regelt meer dan 60 parameters met harde grenswaarden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De vraag is dan: waarom kiezen steeds meer consumenten voor extra thuisfiltratie via
            omgekeerde osmose? Het antwoord is niet dat kraanwater onveilig is, maar dat osmose
            aanvullende voordelen biedt die buiten de wettelijke normen vallen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Vijf redenen waarom osmose aanvullend zinvol kan zijn
          </h2>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            1. Voorzorgsprincipe: stoffen zonder norm
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor{" "}
            <Link href="/drinkwaternormen/medicijnresten" className="text-[#005F8A] hover:underline font-medium">
              medicijnresten
            </Link>{" "}
            en{" "}
            <Link href="/drinkwaternormen/microplastics" className="text-[#005F8A] hover:underline font-medium">
              microplastics
            </Link>{" "}
            bestaan geen wettelijke grenswaarden in het Drinkwaterbesluit. Waterbedrijven monitoren
            deze stoffen en de concentraties zijn doorgaans laag, maar nul zijn ze niet. Osmose
            verwijdert 90-99% van de meeste medicijnresten en vrijwel alle microplastics. Voor wie
            het voorzorgsprincipe zwaar weegt, biedt osmose een afdoende extra barriere.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            2. PFAS-sporen: ook onder de norm zijn ze aanwezig
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het{" "}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline font-medium">
              PFAS
            </Link>-debat illustreert goed waarom normen niet hetzelfde zijn als "volkomen veilig".
            Drinkwaternormen beschermen de gemiddelde bevolking bij levenslange blootstelling. Maar
            PFAS accumuleren in het lichaam, hebben geen veilig vastgestelde drempelwaarde voor
            sommige eindpunten, en zijn in oppervlaktewaterbronnen in Nederland detecteerbaar,
            ook als concentraties onder de parameterwaarde van 0,5 microgram/L liggen. Osmose
            verwijdert 90-99% van de meeste PFAS-verbindingen.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            3. Risicogroepen: baby's, zwangere vrouwen en immuungecompromitteerden
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Drinkwaternormen zijn gebaseerd op bescherming van de gehele bevolking, inclusief
            kwetsbare groepen. Maar voor specifieke toepassingen biedt extra filtratie aanvullende
            zekerheid:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Baby's en zuigelingen:</strong> Het Drinkwaterbesluit kent een aparte nitraatnorm
              voor kinderen onder zes maanden. In gebieden met nitraatproblemen in putwater is osmose
              voor babywater sterk aanbevolen.
            </li>
            <li>
              <strong>Zwangere vrouwen:</strong> Voor hormoonverstorende stoffen (zoals PFAS en
              ethinylestradiol) bestaan zorgen over effecten in de vroege embryonale ontwikkeling
              bij lagere concentraties dan de norm.
            </li>
            <li>
              <strong>Immunogecompromitteerden:</strong> Mensen na chemotherapie, orgaantransplantatie
              of met auto-immuunziekten profiteren van de extra microbiologische barriere die osmose
              biedt, ook al is kraanwater microbiologisch veilig.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            4. Lood via huisinstallatie: de onzekerheid na de voordeur
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waterbedrijven leveren water dat voldoet aan de{" "}
            <Link href="/drinkwaternormen/lood" className="text-[#005F8A] hover:underline font-medium">
              loodnorm
            </Link>{" "}
            van maximaal 10 microgram/liter (binnenkort 5 ug/L). Maar bij woningen gebouwd voor 1960
            kunnen er nog loden leidingen aanwezig zijn in de huisinstallatie na de watermeter.
            Het waterbedrijf is niet verantwoordelijk voor lood dat vrijkomt uit die huisinstallatie.
            Een osmosesysteem op het kraanpunt verwijdert meer dan 95% van het lood en biedt directe
            bescherming, ongeacht de leidingen in huis.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            5. Smaak en kalk: persoonlijke voorkeur, geen medische noodzaak
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meest voorkomende reden om osmose aan te schaffen is simpelweg smaak. Osmosewater met
            TDS van 1-20 mg/L smaakt minder mineraalrijk dan kraanwater met TDS van 200-400 mg/L
            in harde watergebieden. In regioos met meer dan 15{" "}
            <Link href="/drinkwaternormen/kalk-hard-water" className="text-[#005F8A] hover:underline font-medium">
              graden Duits waterhardheid
            </Link>{" "}
            voorkomt osmose bovendien kalkaanslag in koffiezetapparaten, kokend waterketels en ijsblokjesmachines.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Remineralisatie: waarom het erbij hoort
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmosewater is zo schoon dat het nauwelijks mineralen bevat. Dit is voor de meeste
            toepassingen een voordeel, maar voor dagelijkse consumptie zijn een paar kanttekeningen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              Zuiver osmosewater (TDS 1-5 mg/L) heeft een licht zure pH van circa 5,5-6,5 doordat
              CO2 niet goed door het membraan wordt tegengehouden.
            </li>
            <li>
              De WHO beveelt minimum 25 mg/L calcium en 10 mg/L magnesium aan in drinkwater voor de
              bijdrage aan de dagelijkse inname.
            </li>
            <li>
              Langdurige exclusieve consumptie van sterk gede-mineraliseerd water kan bij
              een al laag mineralendieet theoretisch bijdragen aan een mineralentekort.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Goede osmosesystemen zijn uitgerust met een remineralisatiepatroon dat calcium,
            magnesium en bicarbonaat terugvoegt. Het resultaat is een licht gebufferd water
            met TDS van 30-60 mg/L en een pH van 7-7,5. Dit is het ideale profiel voor dagelijks
            drinkwater. Controleer bij de aankoop altijd of het systeem een remineralisatiefilter
            bevat of dat dit als optie beschikbaar is.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De 4-in-1 kokend waterfilter: osmose en kokend water in een kraan
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een groeiend segment is de combinatie van osmosefiltratie met een kokend waterboiler in
            een keukeninstallatie. De{" "}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] hover:underline font-medium">
              kokend water kraan
            </Link>{" "}
            levert gefilterd koud water, warm water, kokend water en soms bruisend water
            uit een enkele kraan. Sommige modellen integreren een volwaardig RO-systeem;
            anderen gebruiken alleen een koolstofprefilter. Voor maximale waterkwaliteit kiest u
            een systeem met een NSF/ANSI 58 gecertificeerd osmosemembraan.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Vergelijking: kraanwater vs. osmosewater vs. bronwater in fles
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kraanwater NL</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmosewater + remineralisatie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bronwater (fles)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">TDS</td>
                  <td className="border border-gray-300 px-3 py-2">150-400 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">30-60 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">50-500 mg/L (merkverschil)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Certificering</td>
                  <td className="border border-gray-300 px-3 py-2">Drinkwaterbesluit (wettelijk)</td>
                  <td className="border border-gray-300 px-3 py-2">NSF/ANSI 58 (vrijwillig)</td>
                  <td className="border border-gray-300 px-3 py-2">EU mineraalwaterrichtlijn</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Kosten per jaar (gezin 4)</td>
                  <td className="border border-gray-300 px-3 py-2">circa 2-5 euro</td>
                  <td className="border border-gray-300 px-3 py-2">circa 60-120 euro (onderhoud)</td>
                  <td className="border border-gray-300 px-3 py-2">400-800 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Microplastics</td>
                  <td className="border border-gray-300 px-3 py-2">Laag (na zuivering)</td>
                  <td className="border border-gray-300 px-3 py-2">Vrijwel nul</td>
                  <td className="border border-gray-300 px-3 py-2">2-4x meer dan kraanwater</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">CO2 per liter</td>
                  <td className="border border-gray-300 px-3 py-2">0,0003 kg</td>
                  <td className="border border-gray-300 px-3 py-2">0,001-0,003 kg</td>
                  <td className="border border-gray-300 px-3 py-2">0,1-0,2 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor een gedetailleerde vergelijking van osmosesystemen en koopadvies, zie{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              omgekeerde osmose kopen
            </Link>.
            Voor een overzicht van alle drinkwaternormen en gerelateerde paginas, ga naar{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              onze drinkwaternormen-hub
            </Link>.
            Meer over osmose in het algemeen staat op{" "}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline font-medium">
              de omgekeerde osmose-overzichtspagina
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: werking en types</h3>
              <p className="text-sm text-gray-600">Hoe RO-membranen werken, welke verontreinigingen worden verwijderd en welke systemen er bestaan.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58: het RO-keurmerk</h3>
              <p className="text-sm text-gray-600">Wat NSF 58 certificering test bij osmosefilters en hoe u dit verifieert bij aankoop.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
