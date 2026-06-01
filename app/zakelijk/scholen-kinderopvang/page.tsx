import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { HealthDisclaimer } from "@/components/HealthDisclaimer";

export const metadata: Metadata = {
  title: "Waterfilter voor scholen en kinderopvang: veilig drinkwater voor kinderen",
  description:
    "Drinkwateroplossingen voor scholen en kinderopvang: fonteinen, osmose en UV-sterilisatie. Legionella, lood in oude leidingen en HACCP-richtlijnen.",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk/scholen-kinderopvang" },
  openGraph: {
    title: "Waterfilter voor scholen en kinderopvang: veilig drinkwater voor kinderen",
    description:
      "Drinkwateroplossingen voor scholen en kinderopvang: fonteinen, osmose en UV-sterilisatie. Legionella, lood in oude leidingen en HACCP-richtlijnen.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is leidingwater op school veilig voor kinderen?",
    answer:
      "In de meeste gevallen wel. Het Nederlandse drinkwater is van hoge kwaliteit. Het risico zit in de leidingen bínnen het schoolgebouw: oudere scholen (gebouwd voor 1960) kunnen loden leidingen hebben die lood afgeven aan het drinkwater. Lood is schadelijk voor de hersenontwikkeling van kinderen. Laat bij twijfel een watertest uitvoeren; vanaf 5 µg/L lood per liter dient u direct actie te ondernemen (filter plaatsen of leidingen vervangen). Moderne scholen (na 1990) hebben geen loden leidingen.",
  },
  {
    question: "Hoe test ik op lood in het schoolwater?",
    answer:
      "Lood in drinkwater meet u via een gecertificeerd wateranalyselaboratorium. Procedure: (1) laat de kraan minimaal 30 seconden doorlopen om stagnant water te verwijderen (first-flush test toont loodgehalte bij stagnant water), (2) neem daarna een 1-liter monster (running water test). Kosten: 40-120 euro per test bij laboratoria zoals Eurofins, KWR of WLN. De drempelwaarde in Nederland is 5 µg/L (WHO-richtlijn: 10 µg/L); de EU-drinkwaterrichtlijn verlaagt de norm naar 5 µg/L per 2036. Herhaal de meting na filterinstallatie.",
  },
  {
    question: "Is een Legionella-beheersplan verplicht voor scholen?",
    answer:
      "Ja, voor scholen en kinderopvanglocaties met tapwaterpunten die niet uitsluitend voor drinkwater worden gebruikt (douches in gymzalen, buitenfonteinen, verwarmde watertanks) is een Legionella-risicoanalyse verplicht (Drinkwaterbesluit art. 36-38). Een volledig beheersplan met monsternameschema is verplicht bij categorisering als 'prioritaire locatie' (bij aanwezigheid van kwetsbare groepen zoals jonge kinderen). Laat het plan opstellen door een gecertificeerd Legionella-adviseur (KIWA/SKB-certificering).",
  },
  {
    question: "Welk filter is geschikt voor het bereiden van babymelk in kinderopvang?",
    answer:
      "Voor de bereiding van flesvoeding voor baby's tot 6 maanden is osmosewater of bronwater aanbevolen, omdat leidingwater soms een te hoog nitraat- of natriumgehalte heeft voor pasgeborenen. Een omgekeerde osmosefilter (NSF 58-gecertificeerd) onder het aanrecht in de keuken van de kinderopvang is de meest praktische oplossing. Koud gefilterd osmosewater wordt vervolgens opgewarmd tot de juiste bereidingstemperatuur. Alternatief: gebruik flessenwater met laag mineralengehalte (natrium &lt; 20 mg/L, nitraat &lt; 10 mg/L, fluoride &lt; 1,5 mg/L).",
  },
  {
    question: "Wie is verantwoordelijk voor de waterkwaliteit op school?",
    answer:
      "Het schoolbestuur (bevoegd gezag) is primair verantwoordelijk voor veilig drinkwater in het schoolgebouw. Bij een huurgebouw deelt de eigenaar/verhuurder (doorgaans de gemeente of een stichting) in de verantwoordelijkheid voor de installaties. De GGD kan bij inspecties de waterkwaliteit beoordelen; bij kinderopvang is de GGD ook de toezichthouder op de HACCP-naleving. Het waterdrinkbedrijf is verantwoordelijk voor de kwaliteit tot de watermeter.",
  },
];

export default function ScholenKinderopvangPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Zakelijk", url: "https://waterfilterplatform.nl/zakelijk" },
          { name: "Scholen en kinderopvang", url: "https://waterfilterplatform.nl/zakelijk/scholen-kinderopvang" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterfilter voor scholen en kinderopvang: veilig drinkwater voor kinderen",
          description:
            "Drinkwateroplossingen voor scholen en kinderopvang: fonteinen, osmose en UV-sterilisatie. Legionella, lood in oude leidingen en HACCP-richtlijnen.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/zakelijk/scholen-kinderopvang",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/">Home</Link><span className="mx-2">/</span>
            <Link href="/zakelijk">Zakelijk</Link><span className="mx-2">/</span>
            <span>Scholen en kinderopvang</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor scholen en kinderopvang: veilig drinkwater voor kinderen
          </h1>
          <QuickAnswer answer="Scholen en kinderopvang hebben een wettelijke zorgplicht voor veilig drinkwater. Aandachtspunten: loden leidingen in gebouwen voor 1960, Legionella-risico bij stilstaand water, adequate filterprestaties voor osmosewater voor baby-flesvoeding (kinderopvang). Drinkwaterfonteinen met NSF/ANSI 42-filter zijn de meest praktische oplossing." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <CTABanner context="zakelijk" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wettelijke verplichtingen voor scholen en kinderopvang</h2>
          <p className="text-gray-700 mb-4">
            Scholen en kinderopvanglocaties hebben als publieksgebouwen met kwetsbare gebruikers
            een verhoogde zorgplicht voor drinkwaterkwaliteit. De relevante wetgeving en richtlijnen:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 pl-2">
            <li><strong>Drinkwaterbesluit (2011):</strong> verplicht alle gebouweigenaren en -beheerders tot het leveren van water dat voldoet aan de drinkwaternormen. Het schoolbestuur is verantwoordelijk voor de interne installaties (na de watermeter).</li>
            <li><strong>Wet kinderopvang (Wko):</strong> kinderopvanglocaties moeten beschikken over veilig drinkwater. De GGD controleert dit jaarlijks tijdens het inspectierapport.</li>
            <li><strong>HACCP-richtlijnen (BKK/GGD):</strong> kinderopvang moet een HACCP-gebaseerd voedselveiligheidsplan hebben dat ook watergebruik omvat: watertemperatuur voor flesvoeding, hygiëne van waterfonteinen, reinigingsschema van waterkoelers.</li>
            <li><strong>Bouwbesluit 2012:</strong> nieuwbouw en renovatie van scholen moeten voldoen aan NEN 1006 voor drinkwaterinstallaties, inclusief anti-Legionella-maatregelen bij de leidingdimensionering.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Lood in schoolgebouwen: risicobeoordeling</h2>
          <p className="text-gray-700 mb-4">
            Lood in drinkwater is een serieus risico in oudere schoolgebouwen. Tot in de jaren
            zestig werden loden leidingen standaard toegepast in woningen en gebouwen. Lood lost
            op in water, met name bij laag pH, zacht water en langdurige stagnatie (bijvoorbeeld
            &apos;s nachts of in weekenden).
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Risicocategorieën schoolgebouwen</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bouwjaar</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Loodrisico</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanbevolen actie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Vóór 1960</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Hoog</td>
                  <td className="border border-gray-300 px-3 py-2">Direct testen; filter of leidingvervanging</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">1960 – 1990</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Matig (soldeerverbindingen)</td>
                  <td className="border border-gray-300 px-3 py-2">Testen bij renovatie of klachten</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">1990 – heden</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Laag</td>
                  <td className="border border-gray-300 px-3 py-2">Geen specifieke actie vereist</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            De drempelwaarde voor lood in drinkwater is 5 µg/L (microgram per liter). Overschrijding
            vereist onmiddellijke actie: ofwel spoelen en een gecertificeerd loodfilter plaatsen
            (NSF/ANSI 53 gecertificeerd voor loodreductie), ofwel de loden leidingen vervangen.
            Een filter is de snelste en goedkoopste tijdelijke oplossing; vervanging van leidingen
            is de permanente oplossing.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Legionella-beheersplan voor scholen</h2>
          <p className="text-gray-700 mb-4">
            Legionella bacteria groeien optimaal bij watertemperaturen van 25-50°C en bij
            stilstaand water in leidingen, tanks en fonteinen. Scholen zijn kwetsbaar vanwege
            lange weekenden, vakanties (tot 6 weken stilstand) en gymzaalinfrastructuur met
            doucheruimtes.
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Wanneer is een beheersplan verplicht?</h3>
          <p className="text-gray-700 mb-3">
            Een formeel Legionella-beheersplan met monsternameschema is verplicht als de school
            als &apos;prioritaire locatie&apos; wordt geclassificeerd (Drinkwaterbesluit bijlage 4):
            dit is het geval bij douches in gymzalen, koeltorens, buitenfonteinen met verstuiving,
            of als kinderopvang deel uitmaakt van het gebouwcomplex. De meeste basisscholen
            zonder douches vallen onder een lichtere zorgplicht: risicoanalyse en beheermaatregelen,
            maar geen verplicht beheersplan.
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Praktische maatregelen</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>Doorspoelschema: na elke vakantie alle kranen en douchekoppen minimaal 5 minuten doorspoelen voor gebruik door leerlingen.</li>
            <li>Watertemperatuur: warm tapwater minimaal 60°C controleren aan het warmwatertoestel; koud water maximaal 25°C aan de tap.</li>
            <li>Dode leidingen (dead legs) verwijderen: leidingdelen die niet meer worden gebruikt, moeten worden afgesnoerd of verwijderd om stagnatie te voorkomen.</li>
            <li>Fonteinen en waterkoelers maandelijks reinigen en filters op schema vervangen.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filteropties voor scholen en kinderopvang</h2>
          <p className="text-gray-700 mb-4">
            De juiste filteroplossing hangt af van het doel: algemeen drinkwater voor leerlingen
            of specifiek gefilterd water voor babyvoeding en keukentoepassingen.
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaterfontein met koolstoffilter (NSF/ANSI 42)</h3>
              <p className="text-sm text-gray-700 mb-1">Meest praktisch voor gangen, sportzalen en kantines. Verbetert smaak en geur, verwijdert chloor. Aansluiting direct op waterleiding. Kosten: 600-1.500 euro aanschaf + 100-200 euro/jaar onderhoud. Filtervervanging elk half jaar.</p>
              <p className="text-sm text-gray-700"><strong>Geschikt voor:</strong> algemeen drinkwater leerlingen, minimale installatie-eisen.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter voor keuken en peuterspeelzaal</h3>
              <p className="text-sm text-gray-700 mb-1">Verwijdert 95-99% van alle ionen, lood, nitraten en microbiologische verontreinigingen. Ideaal voor bereiding van babyvoeding en kooktoepassingen. Kosten: 300-800 euro aanschaf + 80-150 euro/jaar onderhoud. Vereist aansluiting op waterleiding en afvoer.</p>
              <p className="text-sm text-gray-700"><strong>Geschikt voor:</strong> kinderopvang, babyvoeding, keuken basisschool.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie</h3>
              <p className="text-sm text-gray-700 mb-1">UV-lamp (254 nm) inactiveert bacteriën en virussen zonder chemicaliën toe te voegen of te verwijderen. Geen invloed op mineralen of smaak. Kosten: 200-600 euro aanschaf + 50-100 euro/jaar (lamp vervanging jaarlijks). Wordt gecombineerd met koolstoffilter voor volledigere bescherming.</p>
              <p className="text-sm text-gray-700"><strong>Geschikt voor:</strong> extra microbiologische zekerheid na koolstoffilter, of bij oudere leidingen als aanvullende maatregel.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterkwaliteitsmonitoring</h2>
          <p className="text-gray-700 mb-4">
            Periodieke monitoring is essentieel om te bevestigen dat het filter correct functioneert
            en dat het water veilig blijft voor kinderen.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li><strong>TDS-meting (maandelijks):</strong> gebruik een TDS-pen (5-15 euro) om de filterprestaties van de osmosefilter te controleren. TDS-uitvoer &lt; 50 mg/L = filter werkt correct; bij TDS &gt; 100 mg/L: filter controleren of vervangen.</li>
            <li><strong>Legionella-bemonstering:</strong> na elke vakantie van meer dan 2 weken en jaarlijks bij aanwezigheid van douches of warmwatersystemen. Via gecertificeerd lab (kosten: 80-150 euro per monsterpunt).</li>
            <li><strong>Lood-analyse:</strong> na filterinstallatie op lood en jaarlijks zolang verdachte leidingen aanwezig zijn.</li>
            <li><strong>Microbiologisch onderzoek:</strong> halfjaarlijks voor kinderopvang als HACCP-verplichting (Escherichia coli, Enterococcen, Pseudomonas aeruginosa).</li>
            <li><strong>Wie meet:</strong> de facility manager of conciërge kan TDS-metingen uitvoeren; microbiologisch en Legionella-onderzoek moet door een gecertificeerd laboratorium worden uitgevoerd.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Subsidie en financiering voor scholen</h2>
          <p className="text-gray-700 mb-4">
            Scholen en kinderopvanglocaties kunnen in aanmerking komen voor diverse financierings-
            en subsidiemogelijkheden voor waterkwaliteitsverbeteringen:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li><strong>Gezonde School-programma:</strong> rijkssubsidie via het Gezonde School-portaal (Rijksinstituut voor Volksgezondheid en Milieu / Voedingscentrum) voor activiteiten rondom gezonde leefstijl, inclusief drinkwaterfonteinen. Schoolkosters kunnen een aanvraag indienen via gezondeschool.nl.</li>
            <li><strong>Duurzaamheidsregelingen gemeente:</strong> veel gemeenten hebben subsidieregelingen voor verduurzaming van schoolgebouwen. Drinkwaterfonteinen ter vervanging van flessenwater kunnen hieronder vallen. Vraag de gemeente om het actuele subsidieoverzicht.</li>
            <li><strong>Nationaal Programma Onderwijs (NPO):</strong> scholen met NPO-budgetten kunnen deze inzetten voor gezonde schoolomgeving, inclusief drinkwaterinfrastructuur, als onderdeel van een breed welzijnsplan.</li>
            <li><strong>BTW-vrijstelling:</strong> scholen die als BTW-vrijgestelde instelling opereren, kunnen BTW niet terugvragen, maar kunnen leveranciers vragen om offertes excl. BTW te vergelijken met de BTW-refund bij zakelijke partijen.</li>
          </ul>
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

        <section className="mt-8 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-3">Verwante pagina's</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Zakelijk overzicht", href: "/zakelijk" },
              { label: "Lood in drinkwater", href: "/leidingwater/lood" },
              { label: "Microbiologische kwaliteit", href: "/stoffen-in-drinkwater/microbiologisch" },
              { label: "Drinkwaternormen", href: "/drinkwaternormen" },
              { label: "Keuzehulp baby en gezin", href: "/keuzehulp/baby-gezin" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm bg-[#E0F2FE] text-[#005F8A] px-3 py-1.5 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater scholen</h3>
              <p className="text-sm text-gray-600">Hoe PFAS in drinkwater op scholen wordt gemonitord en welke filtertechniek effectief is bij kwetsbare doelgroepen.</p>
            </Link>
            <Link href="/keuzehulp/baby-gezin" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor kinderen</h3>
              <p className="text-sm text-gray-600">Welke verontreinigingen extra risicovol zijn voor kinderen en welke filtertechniek voldoende bescherming biedt.</p>
            </Link>
          </div>
        </section>

        <div className="mt-8">
          <CTABanner context="zakelijk" />
        </div>
      </div>
    </>
  );
}
