import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Kokend water kraan installateur: kosten, certificering en zelf doen",
  description:
    "Kokend water kraan laten installeren: installateurkosten 150-350 euro. Wanneer loodgieter verplicht? KIWA-certificering. Of zelf installeren in 3 uur.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/kokend-water-kraan/installateur",
  },
  openGraph: {
    title: "Kokend water kraan installateur: kosten, certificering en zelf doen",
    description:
      "Kokend water kraan laten installeren: 150-350 euro arbeidskosten. Wanneer is een loodgieter verplicht? KIWA-certificering uitgelegd.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is een loodgieter verplicht voor het installeren van een kokend water kraan?",
    answer:
      "Een erkend installateur is wettelijk verplicht voor verbindingen aan de drinkwaterleiding onder druk, conform het Drinkwaterbesluit. Voor de koude wateraansluiting via een saddle valve of T-stuk is een KIWA-gecertificeerde loodgieter vereist. De elektrische aansluiting van de boiler mag u in veel gevallen zelf verzorgen als er een bestaand stopcontact aanwezig is.",
  },
  {
    question: "Wat kost het laten installeren van een kokend water kraan?",
    answer:
      "De totale arbeidskosten voor een professionele installatie liggen tussen de 200 en 450 euro. Dit bestaat uit voorrijkosten (50-75 euro), uurtarief (70-120 euro per uur) voor 2-3 uur werk en eventuele kosten voor het boren van het kraangat (30-60 euro). Materiaalkosten zijn hier niet bij inbegrepen.",
  },
  {
    question: "Wat betekent KIWA-certificering voor een loodgieter?",
    answer:
      "KIWA is een onafhankelijke certificeringsinstantie. Een KIWA-gecertificeerd installateur heeft aangetoond dat hij voldoet aan de eisen van het Drinkwaterbesluit voor het uitvoeren van werkzaamheden aan drinkwaterleidingen. Vraag altijd om het certificaatnummer en controleer dit op de KIWA-website.",
  },
  {
    question: "Kan ik een kokend water kraan zelf installeren?",
    answer:
      "Gedeeltelijk. De aansluiting van de koude watertoevoer via push-fit snelkoppelingen is technisch niet moeilijk, maar de verbinding aan de hoofdleiding vereist wettelijk een erkend installateur. Sommige systemen zoals de PureAqua of goedkopere merken worden geleverd met snelkoppelsets die u zelf kunt aansluiten op een bestaande koudwaterafsluitkraan. Raadpleeg altijd de fabrikantinstructies.",
  },
  {
    question: "Hoelang duurt de installatie van een kokend water kraan?",
    answer:
      "Een professionele installatie duurt doorgaans 2 tot 3 uur. Dit omvat het boren van het kraangat in het aanrechtblad, het plaatsen van de kraan, het aansluiten van de koude watertoevoer, het installeren van de boiler en het testen van het systeem. Bij een inbouwboiler of complexe keukenindeling kan het langer duren.",
  },
  {
    question: "Wat zijn de risicos als ik een kokend water kraan zelf aansluit?",
    answer:
      "De voornaamste risicos zijn waterlekkage door onvakkundige verbindingen, waardoor schade aan keuken en onderkast kan ontstaan. Daarnaast vervalt in sommige gevallen de garantie van de fabrikant bij niet-erkende installatie. Bij een boiler met hogere capaciteit (boven 3 kW) geldt bovendien dat de elektrische aansluiting door een erkend elektricien moet worden uitgevoerd.",
  },
  {
    question: "Verschilt de installatie per merk?",
    answer:
      "Ja. Een Quooker vereist een aparte boiler (2,2 of 7 liter) en heeft specifieke eisen voor de koudwaterafsluiting en de elektrische aansluiting (eigen voeding, geen stekkerdoos). PureAqua-systemen zijn vaak eenvoudiger te installeren dankzij de compactere boiler. Grohe Red vereist een speciale boileraansluiting en aarding. Lees altijd de installatieinstructies voor het specifieke model.",
  },
  {
    question: "Waar vind ik een erkend installateur voor een kokend water kraan?",
    answer:
      "Zoek via de website van KIWA, de Installateur Certificering (IC) of via de website van de fabrikant (Quooker heeft een lijst van erkende installateurs). Vraag altijd om een offerte inclusief specificatie van de werkzaamheden en materialen, en controleer of de installateur een certificaat kan overleggen.",
  },
];

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const articleSchema = {
  "@type": "Article",
  headline: "Kokend water kraan installateur: kosten en wanneer noodzakelijk",
  description:
    "Kokend water kraan laten installeren: 150-350 euro arbeidskosten. Wanneer is een loodgieter verplicht? KIWA-certificering uitgelegd.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  url: "https://waterfilterplatform.nl/kokend-water-kraan/installateur",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

export default function InstallateurPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://waterfilterplatform.nl",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Kokend water kraan",
                item: "https://waterfilterplatform.nl/kokend-water-kraan",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Installateur kokend water kraan",
                item: "https://waterfilterplatform.nl/kokend-water-kraan/installateur",
              },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:underline">
              Kokend water kraan
            </Link>
            <span className="mx-2">/</span>
            <span>Installateur</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan installateur: kosten en wanneer noodzakelijk
          </h1>
          <QuickAnswer answer="Een kokend water kraan laten installeren door een erkend installateur kost 150-350 euro arbeidskosten, exclusief materiaal. Een loodgieter is wettelijk verplicht voor verbindingen aan de drinkwaterleiding onder druk. Sommige systemen mag u zelf aansluiten via snelkoppelingen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="kokend" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Wettelijk kader: wie mag drinkwaterleidingen aanleggen?
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland is het Drinkwaterbesluit van kracht. Dit besluit stelt eisen aan installaties
          die worden aangesloten op het drinkwaternet. De kern: werkzaamheden aan drinkwaterleidingen
          onder druk mogen alleen worden uitgevoerd door een erkend installateur. Dit geldt voor het
          aftakken van de koudwaterleiding, het plaatsen van afsluitkranen en het aansluiten van
          apparaten op de hoofdleiding.
        </p>
        <p className="text-gray-700 mb-4">
          Voor een kokend water kraan betekent dit dat de koudwateraansluiting van de boiler in de
          meeste gevallen door een erkend loodgieter moet worden uitgevoerd. Uitzondering: als u
          gebruikmaakt van een bestaande koudwaterafsluitkraan (bijv. de stopsluiting van een bestaand
          apparaat) en snelkoppelingen gebruikt, is er in sommige situaties meer ruimte voor doe-het-zelf.
        </p>
        <p className="text-gray-700 mb-6">
          De elektrische aansluiting van de boiler valt onder het Bouwbesluit en de NEN 1010-norm.
          Een boiler tot 2,3 kW met een gewone schuko-stekker mag op een bestaand stopcontact worden
          aangesloten. Grotere vermogens (zoals de Quooker COMBI 3.0 met 7 liter boiler) vereisen
          mogelijk een eigen groep en moeten worden aangesloten door een gecertificeerd elektricien.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is KIWA-certificering?
        </h2>
        <p className="text-gray-700 mb-4">
          KIWA is een onafhankelijke kwaliteits- en certificeringsorganisatie die onder meer installateurs
          certificeert voor werkzaamheden aan drinkwaterinstallaties. Een KIWA-gecertificeerd installateur
          heeft aangetoond dat hij de nodige kennis en vaardigheden heeft om te voldoen aan de eisen van
          het Drinkwaterbesluit en de NEN 1006-norm (eisen drinkwaterinstallaties in gebouwen).
        </p>
        <p className="text-gray-700 mb-4">
          Bij het inschakelen van een installateur heeft u het recht om te vragen naar zijn of haar
          certificaatnummer. U kunt dit vervolgens verifiëren op de KIWA-website of via het
          Installateur Certificering (IC) register. Een gecertificeerde installateur geeft bovendien
          een installatieverklaring af, wat van belang kan zijn bij schade of garantieclaims.
        </p>
        <p className="text-gray-700 mb-6">
          Merk op dat niet elke loodgieter automatisch KIWA-gecertificeerd is. Vraag specifiek naar
          het certificaat voor drinkwaterinstallaties.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een installateur verplicht?
        </h2>
        <p className="text-gray-700 mb-4">
          De volgende werkzaamheden vereisen een erkend installateur:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            Aftakken van de koudwaterleiding onder druk (saddle valve plaatsen op de hoofdleiding
            of op een vertakkingsleiding).
          </li>
          <li>
            Plaatsen van een nieuw T-stuk of Y-stuk in de waterleiding.
          </li>
          <li>
            Aansluiten van de boiler op de waterleiding wanneer dit een nieuwe verbinding vereist.
          </li>
          <li>
            Elektrische aansluiting op een nieuw stopcontact of eigen groep.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Kortom: zodra u de bestaande waterleiding aanboort of uitbreidt, is een erkend installateur
          vereist. Dit geldt voor vrijwel alle vaste installaties van kokend water kranen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer mag u zelf installeren?
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn situaties waarin doe-het-zelf installatie mogelijk is:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Snelkoppelingsset op bestaande afsluiting:</strong> als het systeem wordt
            aangesloten via push-fit snelkoppelingen op een bestaande koudwaterafsluitkraan (bijv.
            de afsluiter van de keukenmengkraan of wasmachine-aansluiting) en er geen nieuwe verbinding
            in de waterleiding hoeft te worden gemaakt.
          </li>
          <li>
            <strong>Elektrische aansluiting op bestaand stopcontact:</strong> een boiler met
            schuko-stekker (max 2,3 kW) op een bestaand geaard stopcontact aansluiten mag u zelf doen.
          </li>
          <li>
            <strong>Vervanging van een bestaande kokend water kraan:</strong> bij het omwisselen van
            een identiek model via dezelfde aansluitingen.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Let op: ook bij doe-het-zelf installaties geldt dat u verantwoordelijk bent voor eventuele
          schade als gevolg van lekkage of onjuiste aansluiting. Controleer altijd of de fabrikant
          doe-het-zelf installatie toestaat in de garantievoorwaarden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kostenopbouw: wat betaalt u voor een installateur?
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Onderdeel</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Voorrijkosten</td>
                <td className="border border-gray-300 px-3 py-2">50-75 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Uurloon loodgieter</td>
                <td className="border border-gray-300 px-3 py-2">70-120 euro per uur</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Installatie 2-3 uur</td>
                <td className="border border-gray-300 px-3 py-2">140-360 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kraangat boren in aanrechtblad</td>
                <td className="border border-gray-300 px-3 py-2">30-60 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Totaal arbeid</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold">200-450 euro</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Materiaalkosten (verbindingsstukken, flexibele slangen, eventuele afsluitkraan) komen hier
          bovenop en bedragen doorgaans 20-60 euro. Sommige installateurs bieden een all-in pakket
          inclusief materiaal aan; vraag hier uitdrukkelijk naar bij het aanvragen van de offerte.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verschil per merk: Quooker, PureAqua en Grohe
        </h2>
        <p className="text-gray-700 mb-4">
          De installatievereisten verschillen per merk en model:
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Quooker (COMBI, COMBI+, CUBE):</strong>
        </p>
        <p className="text-gray-700 mb-4">
          De meest bekende kokend water kraan in Nederland vereist een aparte boiler (2,2 liter voor
          de COMBI, 7 liter voor de COMBI+). De installatie wordt aanbevolen door een erkend
          Quooker-dealer. De elektrische aansluiting vereist een geaard stopcontact nabij de onderkast;
          bij de 7 liter boiler is een eigen stroomgroep gewenst. Quooker publiceert een lijst van
          erkende installateurs op zijn website.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>PureAqua (Flex Tap, Hot Tap):</strong>
        </p>
        <p className="text-gray-700 mb-4">
          PureAqua-systemen zijn compact en worden geleverd met een uitgebreide installatiehandleiding.
          De fabrikant staat doe-het-zelf installatie toe bij gebruik van de meegeleverde snelkoppelset
          op een bestaande koudwaterafsluitkraan. Dit maakt PureAqua een populaire keuze voor
          gebruikers die zelf willen installeren.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Grohe Red (Mono, Duo):</strong>
        </p>
        <p className="text-gray-700 mb-6">
          Grohe Red vereist een specifieke boileraansluiting met terugslagklep en aarding. Grohe
          adviseert installatie door een erkend Grohe-installateur en biedt een eigen garantieprogramma
          bij gecertificeerde installatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat doet de installateur precies?
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Koudwateraftakking:</strong> het plaatsen van een T-stuk of saddle valve op de
            koudwaterleiding onder het aanrecht, inclusief afsluitkraan.
          </li>
          <li>
            <strong>Kraangat boren:</strong> het boren van een gat in het aanrechtblad (35-38 mm)
            voor de doorvoer van de kraan. Dit vereist specifiek gereedschap afhankelijk van het
            materiaal (graniet, composiet, hout).
          </li>
          <li>
            <strong>Boilerinstallatie:</strong> het bevestigen van de boiler in de onderkast,
            aansluiting van de waterslangen en de voedingskabel.
          </li>
          <li>
            <strong>Kraanplaatsing:</strong> het installeren van de kraan door het aanrechtgat,
            inclusief bevestiging en verbinding met de boiler.
          </li>
          <li>
            <strong>Testen:</strong> het systeem testen op lekkage, correcte werking van het
            veiligheidsventiel en de juiste temperatuurinstelling.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Garantie en aansprakelijkheid
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste fabrikanten van kokend water kranen stellen als garantievoorwaarde dat de installatie
          is uitgevoerd door een erkend installateur. Bij doe-het-zelf installatie kan de garantie
          (doorgaans 2-5 jaar) komen te vervallen, met name bij schade door lekkage of onjuiste
          elektrische aansluiting.
        </p>
        <p className="text-gray-700 mb-6">
          Een gecertificeerde installateur is aansprakelijk voor de kwaliteit van zijn werk. Als
          er binnen een redelijke termijn na installatie lekkage ontstaat door zijn werk, is hij
          verplicht dit kosteloos te herstellen. Laat altijd een installatierapport of bon opstellen.
        </p>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{" "}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">
            kokend water kraan uitleg en vergelijking
          </Link>
          ,{" "}
          <Link href="/kokend-water-kraan/merken-vergelijking" className="text-[#005F8A] underline">
            merken vergelijking kokend water kranen
          </Link>{" "}
          en{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen
          </Link>
          .
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over de installateur
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering en erkende installateurs</h3>
              <p className="text-sm text-gray-600">Wat erkende installateurs moeten controleren: CE-markering, NEN 1006-conformiteit en aardingsplicht bij kokend water kranen.</p>
            </Link>
            <Link href="/onderhoud/kokend-water-kraan-onderhoud" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Onderhoudsschema kokend water kraan</h3>
              <p className="text-sm text-gray-600">Periodiek onderhoud dat een installateur kan uitvoeren: ontkalken, filterwissel en lekcheck per merk.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="kokend" />
      </div>
    </>
  );
}
