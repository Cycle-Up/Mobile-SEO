import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter voor appartementen en VvE: collectieve oplossingen",
  description:
    "Collectieve waterfiltratie voor VvE en appartementencomplexen: centrale ontharder, per-unit osmose of drinkwaterfontein. Kosten en besluitvorming.",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk/appartementen-vve" },
  openGraph: {
    title: "Waterfilter voor appartementen en VvE: collectieve oplossingen",
    description:
      "Collectieve waterfiltratie voor VvE en appartementencomplexen: centrale ontharder, per-unit osmose of drinkwaterfontein. Kosten en besluitvorming.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wie is verantwoordelijk voor een waterfilter in een appartement?",
    answer:
      "In een appartement is de eigenaar of huurder verantwoordelijk voor waterfilters die uitsluitend het eigen appartement bedienen (geplaatst na de individuele watermeter of afsluiter). Een filter op de gemeenschappelijke watertoevoer van het gehele complex valt onder de VvE-verantwoordelijkheid. Bij huur beslist de verhuurder over de gemeenschappelijke installaties; de huurder mag onder de gootsteen een eigen osmosefilter plaatsen als geen structurele ingrepen nodig zijn.",
  },
  {
    question: "Kan de VvE een waterontharder verplichten voor alle bewoners?",
    answer:
      "Een VvE kan een centrale waterontharder installeren als collectieve voorziening als de vergadering daartoe besluit met de vereiste meerderheid (minimaal 50% bij gewone meerderheid, tenzij de splitsingsakte anders bepaalt). Individuele bewoners kunnen dit niet weigeren zodra het besluit is genomen, maar dragen bij aan de kosten via de servicekosten. Een VvE kan individuele bewoners niet dwingen een eigen waterfilter aan te schaffen.",
  },
  {
    question: "Hoe financieren we een collectieve waterinstallatie als VvE?",
    answer:
      "Drie opties: (1) Reserve-fonds: als de VvE voldoende reserves heeft, kan de installatie direct worden bekostigd. (2) Eenmalige bijdrage: bewoners betalen een eenmalige bijdrage via de servicekosten. (3) Leaseconstructie: de VvE sluit een all-in onderhoudscontract waarbij de leverancier eigenaar blijft van de installatie en de VvE maandelijks betaalt (doorgaans 50-150 euro/maand voor een complex van 20-50 appartementen). Bij grote investeringen kan de VvE ook een bankgarantie of lening afsluiten.",
  },
  {
    question: "Wat is het effect van een centrale waterontharder op de WOZ-waarde?",
    answer:
      "Een centrale waterontharder heeft doorgaans geen directe invloed op de WOZ-waarde van individuele appartementen, omdat het een gemeenschappelijke installatie is die niet in de individuele woningwaarde wordt opgenomen. Wel kan het indirect de verkoopwaarde en verhuurbaarheid positief beïnvloeden als extra comfortfeature, vergelijkbaar met een gemeenschappelijke laadpaal of verbeterde isolatie.",
  },
  {
    question: "Kan ik als individuele bewoner een osmosefilter plaatsen in mijn appartement?",
    answer:
      "Ja, in de meeste gevallen mag u als eigenaar-bewoner een onderbouw osmosefilter onder de gootsteen plaatsen op de eigen watertoevoer. Dit vereist geen VvE-toestemming als u geen structurele wijzigingen aanbrengt aan gemeenschappelijke leidingen. Bij huur dient u de verhuurder te informeren. Let op: de afvoer van osmose-afvalwater (±50-65% van het ingaande water) moet worden aangesloten op de sifon of gootsteen-afvoer — dit is een eenvoudige klus die geen toestemming vereist.",
  },
];

export default function AppartementenVvePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Zakelijk", url: "https://waterfilterplatform.nl/zakelijk" },
          { name: "Appartementen en VvE", url: "https://waterfilterplatform.nl/zakelijk/appartementen-vve" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterfilter voor appartementen en VvE: collectieve oplossingen",
          description:
            "Collectieve waterfiltratie voor VvE en appartementencomplexen: centrale ontharder, per-unit osmose of drinkwaterfontein. Kosten en besluitvorming.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/zakelijk/appartementen-vve",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/">Home</Link><span className="mx-2">/</span>
            <Link href="/zakelijk">Zakelijk</Link><span className="mx-2">/</span>
            <span>Appartementen en VvE</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor appartementen en VvE: collectieve oplossingen
          </h1>
          <QuickAnswer answer="Een VvE kan kiezen voor: centrale waterontharder voor het gehele complex (500-3.000 euro, 80-150 euro/jaar onderhoud), individuele osmosefilters per appartement (bewoner-verantwoordelijkheid), of een centrale drinkwaterfontein op gemeenschappelijke ruimtes. Centrale ontharder vereist VvE-besluit (≥50% stemmen)." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="zakelijk" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Centrale versus decentrale aanpak</h2>
          <p className="text-gray-700 mb-4">
            Bij waterfiltratie in een appartementencomplex staat de VvE voor een strategische keuze:
            één centrale installatie die het gehele complex bedient, of bewoners die elk hun eigen
            oplossing nemen. Beide benaderingen hebben voor- en nadelen die sterk afhangen van de
            complexgrootte, de waterhardheid in de gemeente, en het draagvlak binnen de VvE.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kenmerk</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Centrale installatie (VvE)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Decentraal per appartement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Aanschafkosten</td>
                  <td className="border border-gray-300 px-3 py-2">1.000-5.000 euro (gedeeld)</td>
                  <td className="border border-gray-300 px-3 py-2">200-900 euro per appartement</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Onderhoud</td>
                  <td className="border border-gray-300 px-3 py-2">Één servicecontract, laag per eenheid</td>
                  <td className="border border-gray-300 px-3 py-2">Elke bewoner zelfstandig</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Filterkwaliteit</td>
                  <td className="border border-gray-300 px-3 py-2">Ontharder: hardheid ↓; geen smaakverbetering</td>
                  <td className="border border-gray-300 px-3 py-2">RO: uitstekend (smaak, hardheid, ionen)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Besluitvorming</td>
                  <td className="border border-gray-300 px-3 py-2">VvE-vergadering vereist</td>
                  <td className="border border-gray-300 px-3 py-2">Bewoner beslist zelf</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Ruimtegebruik</td>
                  <td className="border border-gray-300 px-3 py-2">Technische ruimte complex</td>
                  <td className="border border-gray-300 px-3 py-2">Onder gootsteen per appartement</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Uniformiteit</td>
                  <td className="border border-gray-300 px-3 py-2">Alle bewoners profiteren gelijkwaardig</td>
                  <td className="border border-gray-300 px-3 py-2">Ongelijke bescherming per appartement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Centrale waterontharder voor het appartementencomplex</h2>
          <p className="text-gray-700 mb-4">
            Een centrale waterontharder wordt geïnstalleerd op de hoofdwatertoevoer van het complex,
            vóór de splitsingspunten naar individuele appartementen. Alle bewoners ontvangen dan
            zacht water (onder de 7 dH / 1,25 mmol/L), wat leidt tot minder kalkaanslag op
            kranen, douchekoppen, wasmachines en CV-ketels.
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Technische vereisten</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 pl-2">
            <li>Ruimte in de technische ruimte of meterkast: minimaal 60 × 60 × 120 cm (H × B × D).</li>
            <li>Stroomaansluiting 230V voor besturing en regeneratiepomp.</li>
            <li>Afvoer voor regeneratiewater (pekelwater na zouttank-regeneratie).</li>
            <li>Capaciteitsberekening: ca. 150-250 liter water per persoon per dag; bij 40 appartementen met gemiddeld 2 personen = 12.000-20.000 liter/dag.</li>
            <li>Zoutverbruik: 80-150 kg per maand afhankelijk van hardheid en verbruik; zoutopslag in silo in technische ruimte.</li>
          </ul>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Voordelen en nadelen</h3>
          <p className="text-gray-700 mb-2"><strong>Voordelen:</strong> uniformiteit voor alle bewoners, verlengde levensduur CV-ketels en wasmachines (+20-30%), lager wasmiddel- en zeepverbruik, zachter haar en huid, kostenefficiënt bij grote complexen.</p>
          <p className="text-gray-700 mb-4"><strong>Nadelen:</strong> natrium in het water stijgt (ca. 8 mg Na per mmol verwijderd CaCO3; relevant voor personen met natriumbeperkt dieet), drinkwater smaakt vlakker, initiële VvE-besluitvorming kan tijdrovend zijn, periodiek zoutbeheer vereist.</p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Wie betaalt het onderhoud?</h3>
          <p className="text-gray-700 mb-4">
            Onderhoudskosten van een centrale installatie worden verrekend via de maandelijkse
            servicekosten of VvE-bijdrage, naar rato van het aandeel in de gemeenschap (doorgaans
            gelijk verdeeld of naar oppervlakte). Een all-in onderhoudscontract omvat zoutlevering,
            membraanreiniging, jaarlijkse keuring en 24/7 storingsdienst.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">VvE-besluitvorming: stap voor stap</h2>
          <p className="text-gray-700 mb-4">
            Het plaatsen van een centrale waterinstallatie is een beslissing die de gehele
            gemeenschap raakt. Het juiste VvE-besluitvormingsproces voorkomt juridische problemen
            achteraf.
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-4 pl-2">
            <li><strong>Voorbereiding:</strong> laat twee of drie offertes maken door gecertificeerde installateurs. Stel een voorstel op met kosten, baten, technische beschrijving en onderhoudsplan.</li>
            <li><strong>Agendapunt VvE-vergadering:</strong> meld het voorstel minimaal 15 dagen voor de vergadering aan bij de VvE-beheerder of bestuur. Voeg offertes en technische documentatie bij als bijlage.</li>
            <li><strong>Stemming:</strong> een gewoon besluit vereist meer dan 50% van de uitgebrachte stemmen (tenzij de splitsingsakte een verzwaarde meerderheid vereist, zoals 2/3 of ¾ voor grote investeringen).</li>
            <li><strong>Vastlegging:</strong> notuleer het besluit in de vergadernotulen. Bij investeringen boven 25.000 euro is soms een notariële akte of aanpassing van het splitsingsreglement vereist.</li>
            <li><strong>Verdeling kosten:</strong> leg vast hoe de kosten worden verdeeld: via servicekosten, eenmalige bijdrage of reserve-fonds. Zorg voor transparantie voor toekomstige koper/huurders.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wet- en regelgeving voor collectieve waterinstallaties</h2>
          <p className="text-gray-700 mb-4">
            Collectieve waterinstallaties in appartementen vallen onder het Drinkwaterbesluit (2011)
            en de NEN 1006 (installatienorm voor drinkwater). De VvE is als gebouwbeheerder
            verantwoordelijk voor de kwaliteit van het drinkwater op het punt waar het water
            gemeenschappelijke leidingen verlaat en de private woning inkomt.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li><strong>Eigendomsrecht:</strong> een collectieve installatie in de gemeenschappelijke technische ruimte is eigendom van de gezamenlijke eigenaren (VvE). Zij zijn aansprakelijk voor correcte werking en onderhoud.</li>
            <li><strong>Aansprakelijkheid waterkwaliteit:</strong> als een bewoner gezondheidsschade ondervindt door slechte waterkwaliteit als gevolg van de collectieve installatie, kan de VvE aansprakelijk worden gesteld. Een adequate onderhoudsovereenkomst en periodieke waterkwaliteitscontrole zijn essentieel.</li>
            <li><strong>Vergunningen:</strong> voor de meeste centrale ontharders is geen bouwvergunning nodig als het om een binneninstallatie gaat. Raadpleeg de gemeente voor complexen groter dan 100 woningen of bij grote aanpassingen aan de hoofdwaterleiding.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Drinkwaterfontein voor gemeenschappelijke ruimtes</h2>
          <p className="text-gray-700 mb-4">
            Een alternatief dat niet afhankelijk is van VvE-besluitvorming voor de hele watertoevoer,
            is het plaatsen van een gefilterde drinkwaterfontein in de gemeenschappelijke hal,
            fitnessruimte of vergaderruimte. Deze fontein is een veel kleinere investering
            (400-1.200 euro aanschaf, 100-200 euro/jaar onderhoud) en kan worden goedgekeurd
            als gewone exploitatieinvestering binnen het onderhoudsbudget van de VvE.
          </p>
          <p className="text-gray-700 mb-4">
            Moderne waterfonteinen zijn direct aangesloten op de waterleiding (geen flessen), koelen
            het water tot 6-8°C en zijn voorzien van een koolstof- of osmosefilter. Ze zijn ideaal
            voor complexen met een fitnessruimte, vergaderruimte of parkeergarage met werkplaats.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Legionella-risico bij collectieve installaties</h2>
          <p className="text-gray-700 mb-4">
            Collectieve drinkwaterinstallaties in gebouwen met meer dan 25 wooneenheden of met
            gemeenschappelijke douches (zwembad, sportfaciliteit, wellness) vallen onder de
            Legionella-beheersplicht (Drinkwaterbesluit art. 36-38). Voor reguliere woningcomplexen
            zonder gemeenschappelijke douches of fonteinen geldt een lichtere zorgplicht.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>Voorkom stilstaand water in gemeenschappelijke leidingen: doorspoelen bij leegstand.</li>
            <li>Warm tapwater moet minimaal 60°C bereiken aan de tap; koud water maximaal 25°C.</li>
            <li>Laat een risicoanalyse uitvoeren bij installatie van collectieve watertoestellen (fonteinen, koelers).</li>
            <li>Reinig drinkwaterfonteinen maandelijks en vervang filters op schema.</li>
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
              { label: "Waterontharder", href: "/waterontharder" },
              { label: "Waterhardheid per gemeente", href: "/waterhardheid" },
              { label: "Waterontharders vergelijken", href: "/vergelijken/waterontharder-vergelijken" },
              { label: "Keuzehulp huurwoning", href: "/keuzehulp/huurwoning" },
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

        <div className="mt-8">
          <CTABanner context="zakelijk" />
        </div>
      </div>
    </>
  );
}
