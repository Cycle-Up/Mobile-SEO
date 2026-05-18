import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "EU-drinkwaterrichtlijn 2020/2184: nieuwe PFAS-, lood- en microplasticsnormen",
  description:
    "EU-richtlijn 2020/2184 herziet normen voor PFAS, lood en microplastics. Leer hoe NL implementeert en wat het betekent voor uw kraanwater en waterfilter.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/drinkwaternormen/eu-drinkwaterrichtlijn",
  },
  openGraph: {
    title: "EU-drinkwaterrichtlijn 2020/2184: nieuwe PFAS-, lood- en microplasticsnormen",
    description:
      "EU-richtlijn 2020/2184 herziet normen voor PFAS, lood en microplastics. Leer hoe NL implementeert en wat het betekent voor uw kraanwater en waterfilter.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is de EU-drinkwaterrichtlijn 2020/2184?",
    answer:
      "EU-richtlijn 2020/2184 is de herziene Europese richtlijn inzake de kwaliteit van voor menselijke consumptie bestemd water. Ze vervangt de richtlijn uit 1998 en introduceert strengere normen voor PFAS en lood, verplichte monitoring van microplastics, risicogebaseerd toezicht voor het volledige stroomgebied en een recht op toegang tot veilig drinkwater. Lidstaten hadden tot 12 januari 2023 om de richtlijn in nationale wetgeving om te zetten.",
  },
  {
    question: "Waarom was de oude richtlijn uit 1998 niet meer voldoende?",
    answer:
      "De richtlijn uit 1998 was gebaseerd op de wetenschappelijke kennis van die tijd. Sindsdien heeft wetenschappelijk onderzoek aangetoond dat stoffen als PFAS wijdverspreid zijn en schadelijk zijn bij zeer lage concentraties. Lood is meer problematisch gebleken dan gedacht. Microplastics zijn pas recent ontdekt als potentieel risico. Risicogebaseerd toezicht is effectiever dan zuiver parametergebaseerde handhaving. Al deze inzichten vroegen om een grondige herziening.",
  },
  {
    question: "Welke PFAS-normen introduceert de EU-richtlijn?",
    answer:
      "De richtlijn introduceert twee PFAS-normen: 0,1 microgram per liter voor de som van 20 prioritaire PFAS-stoffen (waaronder PFOS, PFOA, PFNA en PFHxS), en 0,5 microgram per liter voor de totale som van alle aantoonbare PFAS-verbindingen. Dit zijn de eerste wettelijke PFAS-normen voor drinkwater in de EU en ze zijn aanzienlijk strenger dan de vorige situatie zonder specifieke PFAS-limiet.",
  },
  {
    question: "Wat verandert er voor lood in drinkwater?",
    answer:
      "De richtlijn verlaagt de maximale loodconcentratie in drinkwater van 10 naar 5 microgram per liter. De implementatietermijn loopt tot 12 januari 2036. Tot die datum mogen lidstaten de huidige norm van 10 ug/L aanhouden, mits zij actief werken aan vervanging van loden leidingen. In Nederland zijn al circa 180.000 loden huisaansluitingen vervangen, maar er zijn nog tienduizenden panden met loden binnenhuisleidingen.",
  },
  {
    question: "Zijn er al grenswaarden voor microplastics in drinkwater?",
    answer:
      "Nee, de richtlijn verplicht lidstaten tot monitoring van microplastics maar stelt nog geen wettelijke grenswaarden vast. De reden is dat er nog geen wetenschappelijke consensus is over welke grootten en concentraties microplastics schadelijk zijn voor de gezondheid. De WHO concludeerde in 2019 dat er bij huidige blootstelling via drinkwater geen direct gezondheidsrisico bewezen is, maar dat meer onderzoek nodig is.",
  },
  {
    question: "Wat is risicogebaseerd toezicht?",
    answer:
      "Risicogebaseerd toezicht (risk-based approach) houdt in dat drinkwaterbedrijven niet alleen het eindproduct meten, maar de risicos beheersen voor het volledige stroomgebied: van de waterbron tot aan de kraan. Dit omvat risicoanalyses van de bronnen (grondwater of oppervlaktewater), het zuiveringsproces, het distributienet en de binnenhuisinstallaties bij risicolocaties zoals ziekenhuizen en scholen.",
  },
  {
    question: "Hoe heeft Nederland de EU-richtlijn geimplementeerd?",
    answer:
      "Nederland heeft de EU-richtlijn 2020/2184 op 12 januari 2023 geimplementeerd door het Drinkwaterbesluit te wijzigen. De PFAS-normen en de microplastics-monitoringplicht zijn direct ingevoerd. De verlaging van de loodnorm naar 5 ug/L geldt per 2036. De risicogebaseerde aanpak is verankerd in de meetverplichtingen en risicoanalyses die drinkwaterbedrijven moeten uitvoeren.",
  },
  {
    question: "Wat zegt de richtlijn over toegang tot drinkwater?",
    answer:
      "De richtlijn verplicht lidstaten om kwetsbare en gemarginaliseerde bevolkingsgroepen toegang te geven tot veilig drinkwater. Dit omvat maatregelen zoals drinkwaterpunten in de openbare ruimte, actieve informatieverstrekking aan risicogroepen en het wegnemen van drempels voor aansluiting op het waterleidingnet. Het recht op water is daarmee verankerd in de Europese drinkwaterregelgeving.",
  },
  {
    question: "Zijn de EU-normen strenger dan die in de Verenigde Staten?",
    answer:
      "Op sommige punten wel, op andere niet. Voor PFAS heeft de EU nu strengere normen (0,1 ug/L voor 20 prioritaire stoffen) dan de EPA-advieswaarden die lang op 0,004-0,02 ug/L lagen voor individuele stoffen maar vrijblijvend waren. Voor lood hanteert de VS een actiewaarde van 15 ug/L, terwijl de EU naar 5 ug/L gaat. Voor nitraat hanteren EU en VS beide 50 mg/L (VS: 10 mg/L uitgedrukt als stikstof). De context verschilt: EPA-normen zijn voor een land met grotere infrastructurele uitdagingen.",
  },
  {
    question: "Wat betekent de richtlijn voor consumenten met een waterfilter?",
    answer:
      "De richtlijn verandert niets aan de werking van waterfilters, maar maakt de noodzdaak van bepaalde filtratietypes duidelijker. PFAS-normen bevestigen dat osmosefilters een relevante rol spelen bij gevoelige huishoudens: ze verwijderen 90-99% van PFAS. De lage loodnorm onderstreept het belang van filtratie bij woningen met loden huisleidingen. Consumenten die nu al osmose gebruiken hebben de strengste EU-normen al lang 'ingebakken' in hun systeem.",
  },
  {
    question: "Worden mineralen toegevoegd na osmosefiltratie om aan EU-normen te voldoen?",
    answer:
      "De EU-richtlijn stelt geen minimumwaarden voor mineralen in drinkwater. Osmosewater heeft een zeer lage TDS (totaal opgeloste stoffen) van 1-20 mg/L versus 150-400 mg/L voor leidingwater, maar dit is geen wettelijk probleem. Remineralisatiefilters worden aan osmosesystemen toegevoegd vanuit smaak- en gezondheidsoverwegingen (met name magnesium en calciumtoevoeging), niet vanwege EU-wetgeving.",
  },
  {
    question: "Wanneer worden de microplastics-grenswaarden verwacht?",
    answer:
      "De Europese Commissie heeft aangekondigd dat zij na een overgangsperiode van monitoring een voorstel voor grenswaarden voor microplastics zal doen, maar een concrete tijdlijn ontbreekt. De monitoring-verplichting is per 2023 van kracht. Verwacht wordt dat er pas na 2027 voldoende gestandaardiseerde meetdata zijn om wetenschappelijk onderbouwde grenswaarden vast te stellen.",
  },
];

export default function EuDrinkwaterrichtlijnPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          {
            name: "EU-drinkwaterrichtlijn",
            url: "https://waterfilterplatform.nl/drinkwaternormen/eu-drinkwaterrichtlijn",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "EU-drinkwaterrichtlijn 2020/2184: nieuwe PFAS-, lood- en microplasticsnormen",
          description:
            "EU-richtlijn 2020/2184 herziet normen voor PFAS, lood en microplastics. Leer hoe NL implementeert en wat het betekent voor uw kraanwater en waterfilter.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/eu-drinkwaterrichtlijn",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>EU-drinkwaterrichtlijn</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            EU-drinkwaterrichtlijn 2020/2184: nieuwe PFAS-, lood- en microplasticsnormen
          </h1>
          <QuickAnswer answer="EU-richtlijn 2020/2184, van kracht per januari 2023, is de grootste herziening van Europese drinkwaternormen in 25 jaar. De vijf sleutelwijzigingen zijn: PFAS-normen (0,1 ug/L voor 20 stoffen), lagere loodnorm (5 ug/L per 2036), verplichte microplastics-monitoring (nog geen grenswaarde), risicogebaseerd stroomgebieds-toezicht en een recht op toegang tot drinkwater. Nederland implementeerde dit via het gewijzigde Drinkwaterbesluit." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Achtergrond: waarom een nieuwe richtlijn na 22 jaar?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De vorige Europese drinkwaterrichtlijn dateerde uit 1998. In de 22 jaar die volgden
            veranderde de wetenschappelijke kennis over drinkwaterkwaliteit drastisch. PFAS
            (per- en polyfluoralkylstoffen) waren in 1998 nauwelijks bekend als
            drinkwaterprobleem; nu weten we dat ze in lage concentraties schadelijk zijn en
            vrijwel overal in het milieu voorkomen. Lood bleek problematischer dan gedacht,
            met name in oudere woningen. Microplastics zijn een geheel nieuwe categorie
            verontreiniging. En de opkomst van risicogebaseerd waterbeheer maakte duidelijk dat
            puur parametergebaseerd toezicht tekortschoot.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Europese Commissie startte in 2014 een evaluatietraject. Na uitgebreide
            consultaties, waaronder een Europees burgerinitiatief voor het recht op water, werd
            de nieuwe richtlijn op 23 december 2020 vastgesteld. Lidstaten hadden tot 12 januari
            2023 voor implementatie in nationale wetgeving. In Nederland leidde dit tot een
            wijziging van het{" "}
            <Link href="/drinkwaternormen/drinkwaterbesluit" className="text-[#005F8A] hover:underline font-medium">
              Drinkwaterbesluit
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De vijf sleutelwijzigingen
          </h2>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            1. Nieuwe PFAS-normen
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor het eerst in de EU-geschiedenis zijn er wettelijke grenswaarden voor{" "}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline font-medium">
              PFAS in drinkwater
            </Link>
            . De richtlijn stelt twee normen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>0,1 microgram per liter</strong> voor de som van 20 prioritaire
              PFAS-stoffen, waaronder PFOS (perfluoroctaansulfonzuur), PFOA
              (perfluoroctaanzuur), PFNA en PFHxS.
            </li>
            <li>
              <strong>0,5 microgram per liter</strong> voor de totale som van alle aantoonbare
              PFAS-verbindingen.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Deze normen zijn gebaseerd op advies van de Europese Voedselautoriteit (EFSA), die
            in 2020 concludeerde dat PFAS schadelijk zijn voor het immuunsysteem bij
            concentraties die veel lager zijn dan eerder gedacht. PFAS accumuleren in het
            lichaam (ze zijn niet afbreekbaar) waardoor langdurige blootstelling aan lage
            concentraties toch problematisch is.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In de praktijk halen de meeste Nederlandse drinkwaterbedrijven al aan deze normen.
            Maar in gebieden waar PFAS-houdend blusschuim is gebruikt (vliegbases, oefenterreinen)
            kunnen grondwaterbronnen hogere concentraties bevatten.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            2. Verlaging van de loodnorm
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De maximale loodconcentratie in drinkwater wordt verlaagd van 10 naar 5 microgram
            per liter. Er is geen veilig niveau voor loodblootstelling: het Europees
            Voedselveiligheidsagentschap concludeerde dat er geen onderdrempel bestaat waarbij
            lood geen neurologische schade veroorzaakt, met name bij kinderen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De implementatietermijn loopt tot <strong>12 januari 2036</strong>. Dit is bewust
            lang gehouden: de vervanging van loden leidingen is een enorme infrastructurele
            opgave, met name in landen met veel vooroorlogse woningbouw. In Nederland zijn al
            circa 180.000 loden huisaansluitingen vervangen door drinkwaterbedrijven, maar
            de verantwoordelijkheid voor de binnenhuisinstallatie ligt bij de eigenaar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer informatie over lood in drinkwater, risicogebieden en oplossingen vindt u op
            onze pagina over{" "}
            <Link href="/drinkwaternormen/lood" className="text-[#005F8A] hover:underline font-medium">
              lood in drinkwater
            </Link>
            .
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            3. Microplastics: monitoring, nog geen norm
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De richtlijn verplicht lidstaten tot het opzetten van monitoring van{" "}
            <Link href="/drinkwaternormen/microplastics" className="text-[#005F8A] hover:underline font-medium">
              microplastics
            </Link>{" "}
            in drinkwater. Er worden nog geen wettelijke grenswaarden gesteld. De reden is dat
            de wetenschappelijke kennis over de gezondheidseffecten van microplastics nog
            onvoldoende is om onderbouwde grenswaarden vast te stellen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De WHO concludeerde in 2019 dat er bij de huidige blootstelling via drinkwater geen
            bewijs is voor een direct gezondheidsrisico, maar dat meer onderzoek noodzakelijk is.
            De verwachting is dat na voldoende gestandaardiseerde meetdata (naar verwachting na
            2027) grenswaarden zullen worden voorgesteld.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            4. Risicogebaseerd toezicht
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een fundamentele verschuiving in de richtlijn is de invoering van een risicogebaseerde
            aanpak (risk-based approach). Drinkwaterbedrijven mogen niet meer alleen het
            eindproduct meten; ze moeten risicos identificeren en beheersen voor het volledige
            stroomgebied, van de waterwinlocatie tot aan de kraan bij de consument.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit omvat risicoanalyses van:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>De waterwingebieden: landbouw, industrie, historische verontreinigingen in de omgeving.</li>
            <li>Het zuiveringsproces en de infrastructuur van het distributienet.</li>
            <li>Binnenhuisinstallaties bij risicolocaties: ziekenhuizen, scholen, kinderdagverblijven.</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            5. Recht op toegang tot drinkwater
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De richtlijn verankert voor het eerst het recht op toegang tot veilig drinkwater in
            EU-recht. Lidstaten moeten zorgen voor toegang voor kwetsbare en gemarginaliseerde
            bevolkingsgroepen, drinkwaterpunten in de openbare ruimte bevorderen en actief
            informatie verstrekken aan burgers over de kwaliteit van hun drinkwater.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Implementatietijdlijn in Nederland
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederland implementeerde de richtlijn tijdig op 12 januari 2023 door het
            Drinkwaterbesluit te wijzigen. Alle nieuwe PFAS-normen en de
            microplastics-monitoringplicht zijn per die datum van kracht. De loodnorm van 5
            ug/L geldt pas per 2036. Enkele onderdelen kenden een uitgestelde implementatie
            vanwege de noodzaak van nadere regelgeving, met name voor de risicogebaseerde
            beoordeling van distributiesystemen en de transparantievereisten.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            EU-normen versus VS (EPA)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een veelgestelde vraag is of de EU-normen strenger zijn dan die van de Amerikaanse
            EPA. Het antwoord is genuanceerd en verschilt per parameter.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Normen oud versus nieuw: vijf parameters
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Parameter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Oude EU-norm (1998)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Nieuwe EU-norm (2023)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">EPA-norm (VS)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Lood</td>
                  <td className="border border-gray-300 px-3 py-2">10 ug/L</td>
                  <td className="border border-gray-300 px-3 py-2">5 ug/L (per 2036)</td>
                  <td className="border border-gray-300 px-3 py-2">15 ug/L (actiewaarde)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">PFAS (20 prioritair)</td>
                  <td className="border border-gray-300 px-3 py-2">Geen norm</td>
                  <td className="border border-gray-300 px-3 py-2">0,1 ug/L (som)</td>
                  <td className="border border-gray-300 px-3 py-2">0,004-0,02 ug/L (individueel)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Microplastics</td>
                  <td className="border border-gray-300 px-3 py-2">Geen monitoring</td>
                  <td className="border border-gray-300 px-3 py-2">Monitoring verplicht</td>
                  <td className="border border-gray-300 px-3 py-2">Geen norm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                  <td className="border border-gray-300 px-3 py-2">50 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">50 mg/L (ongewijzigd)</td>
                  <td className="border border-gray-300 px-3 py-2">44 mg/L</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Arseen</td>
                  <td className="border border-gray-300 px-3 py-2">10 ug/L</td>
                  <td className="border border-gray-300 px-3 py-2">10 ug/L (ongewijzigd)</td>
                  <td className="border border-gray-300 px-3 py-2">10 ug/L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u begrijpen hoe de EU-richtlijn is vertaald naar Nederlandse wetgeving? Lees
            onze uitgebreide pagina over het{" "}
            <Link href="/drinkwaternormen/drinkwaterbesluit" className="text-[#005F8A] hover:underline font-medium">
              Drinkwaterbesluit
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over PFAS in drinkwater en welke filters het meest effectief zijn, leest u op
            onze pagina over{" "}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline font-medium">
              PFAS in drinkwater
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Terug naar het overzicht van alle drinkwaternormen en onderwerpen? Zie de{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              drinkwaternormen hub
            </Link>
            .
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
            <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</h3>
              <p className="text-sm text-gray-600">Overzicht van alle stoffen die voorkomen in drinkwater en de relatie met Europese normen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
