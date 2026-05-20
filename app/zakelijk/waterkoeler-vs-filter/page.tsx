import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterkoeler vs waterfilter voor zakelijk gebruik: kosten en prestaties",
  description:
    "Waterkoeler (fles of leidingwater) of waterfilter? Vergelijking voor kantoor, horeca en industrie op kosten, onderhoud en duurzaamheid.",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk/waterkoeler-vs-filter" },
  openGraph: {
    title: "Waterkoeler vs waterfilter voor zakelijk gebruik: kosten en prestaties",
    description:
      "Waterkoeler (fles of leidingwater) of waterfilter? Vergelijking voor kantoor, horeca en industrie op kosten, onderhoud en duurzaamheid.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is hygiënischer: flessenwater of gefilterd kraanwater?",
    answer:
      "Goed onderhouden gefilterd kraanwater is minstens zo hygiënisch als flessenwater, en in de praktijk vaak hygiënischer. Flessenkoelers zijn een bekend Legionella-risico als het kruispunt (kraan-dispensercontact) niet regelmatig wordt gereinigd en als flessen te lang worden bewaard. Bij osmosefilterdispensers is er geen extern watercontact en wordt het water direct verbruikt. Bovendien wordt osmosewater pas geproduceerd op het moment van tap — geen stilstand in een reservoir. Laat een flessenkoeler minimaal maandelijks reinigen voor aanvaardbaar bacterieniveau.",
  },
  {
    question: "Wat kost een waterkoeler per maand voor een kantoor van 25 personen?",
    answer:
      "Flessenkoeler: huur koeler ca. 10-20 euro/maand + flessen 19 liter ca. 5-7 euro per fles. Bij 25 personen (0,5 L/dag, 21 werkdagen) ca. 13 flessen/maand = 65-90 euro/maand voor water + 10-20 euro huur = 75-110 euro/maand totaal. Leidingwaterkoeler: lease all-in ca. 40-80 euro/maand (of na terugverdienperiode: 15-25 euro/maand filterkosten). Osmosefilter met dispensertap: na aanschaf (ca. 700 euro, afschrijving 140 euro/jaar) ca. 8-15 euro/maand filteronderhoud = totaal ca. 20-27 euro/maand.",
  },
  {
    question: "Hoe vaak moet ik een waterkoeler reinigen?",
    answer:
      "Een flessenkoeler moet minimaal eens per maand worden gereinigd: inwendige waterpaden, dispenserkranen en het koelreservoir schoonspoelen met een desinfectant (watercoolerreiniger op basis van chloor of waterstofperoxide). Bij gebruik door veel mensen (kantoor 50+) vaker reinigen. Professionele hygiëneservice: veel waterleveranciers bieden kwartaal-reinigingsbeurt aan als onderdeel van het servicecontract (10-25 euro per bezoek). Een leidingwaterkoeler met ingebouwd koolstof- of osmosefilter is eenvoudiger hygiënisch te houden: maandelijks buitenkant reinigen + filtervervanging elk half jaar.",
  },
  {
    question: "Is een leidingwaterkoeler beter dan een flessenkoeler?",
    answer:
      "In vrijwel alle zakelijke scenario's is een leidingwaterkoeler voordeliger en duurzamer dan een flessenkoeler. De eenmalig hogere aanschaf- of leasekost wordt terugverdiend in 6-18 maanden. Voordelen leidingwaterkoeler: geen flessen sjouwen, altijd beschikbaar (geen flessenbestelling), lagere kosten per liter, minder plastic afval, beter te reinigen (geen open fles-luchtcontact). Nadeel: vereist wateraansluiting nabij de unit. Voor locaties zonder waterleiding (buitenlocaties, bouwplaats) blijft een flessenkoeler de enige optie.",
  },
  {
    question: "Wat is het verschil tussen een waterkoeler en een drinkwaterfontein?",
    answer:
      "Een waterkoeler serveert gekoeld water uit een fles of leidingwateraansluiting, typisch op een dispenserstaander. Een drinkwaterfontein is een vaste installatie (aan de muur of vrijstaand) die direct is aangesloten op de waterleiding, en waarbij de gebruiker het glas of de bidon zelf vult door een knop in te drukken of te kantelen. Fonteinen zijn hygiënischer (geen kruisbesmetting via kraan), duurzamer (geen bewegende delen), geschikter voor hoge-frequentie-gebruik (scholen, sportscholen, horeca), en bieden soms ook gekoeld, bruisend of warm water. Waterkoelers zijn flexibeler te plaatsen en verplaatsen.",
  },
];

export default function WaterkoelerVsFilterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Zakelijk", url: "https://waterfilterplatform.nl/zakelijk" },
          { name: "Waterkoeler vs waterfilter", url: "https://waterfilterplatform.nl/zakelijk/waterkoeler-vs-filter" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterkoeler vs waterfilter voor zakelijk gebruik: kosten en prestaties",
          description:
            "Waterkoeler (fles of leidingwater) of waterfilter? Vergelijking voor kantoor, horeca en industrie op kosten, onderhoud en duurzaamheid.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/zakelijk/waterkoeler-vs-filter",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/">Home</Link><span className="mx-2">/</span>
            <Link href="/zakelijk">Zakelijk</Link><span className="mx-2">/</span>
            <span>Waterkoeler vs waterfilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterkoeler vs waterfilter voor zakelijk gebruik: kosten en prestaties
          </h1>
          <QuickAnswer answer="Een waterkoeler op leidingwateraansluiting kost 300-800 euro aanschaf + 100-200 euro/jaar onderhoud. Een zakelijk osmosefilter met dispensertap kost 400-900 euro + 80-150 euro/jaar. Een flessenkoeler kost minder aanschaf (50-150 euro huur), maar flessenwater kost 0,40-1,50 euro/liter vs 0,01-0,05 euro/liter gefilterd kraanwater." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="zakelijk" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Drie opties voor zakelijk drinkwater vergeleken</h2>
          <p className="text-gray-700 mb-4">
            Bedrijven die hun medewerkers, klanten of gasten van drinkwater willen voorzien,
            hebben in de kern drie keuzes: een flessenkoeler, een leidingwaterkoeler met
            geïntegreerd filter, of een osmosefilter met dispensertap. Elk systeem heeft een
            ander aanschafprofiel, andere jaarlijkse kosten en andere filterprestaties.
          </p>
          <p className="text-gray-700 mb-6">
            De juiste keuze hangt af van: het aantal gebruikers, de aanwezigheid van een
            waterleiding op de gewenste locatie, de waterhardheid in uw gemeente, de
            filterbehoefte (alleen smaak/geur, of ook ionenreductie), en uw duurzaamheidsdoelen.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kenmerk</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Flessenkoeler</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Leidingwaterkoeler</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmosefilter + dispensertap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Aanschaf / huur</td>
                  <td className="border border-gray-300 px-3 py-2">50-150 euro/maand huur</td>
                  <td className="border border-gray-300 px-3 py-2">300-800 euro koop</td>
                  <td className="border border-gray-300 px-3 py-2">400-900 euro koop</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Jaarlijkse kosten (50 pers.)</td>
                  <td className="border border-gray-300 px-3 py-2">3.500-8.000 euro</td>
                  <td className="border border-gray-300 px-3 py-2">800-1.800 euro</td>
                  <td className="border border-gray-300 px-3 py-2">600-1.500 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Kosten per liter</td>
                  <td className="border border-gray-300 px-3 py-2">0,40-1,50 euro</td>
                  <td className="border border-gray-300 px-3 py-2">0,03-0,10 euro</td>
                  <td className="border border-gray-300 px-3 py-2">0,01-0,05 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Filtertype</td>
                  <td className="border border-gray-300 px-3 py-2">Geen (bronwater)</td>
                  <td className="border border-gray-300 px-3 py-2">Koolstof (smaak/geur)</td>
                  <td className="border border-gray-300 px-3 py-2">RO-membraan (95-99% ionen)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Onderhoud frequentie</td>
                  <td className="border border-gray-300 px-3 py-2">Maandelijkse reiniging + flessen</td>
                  <td className="border border-gray-300 px-3 py-2">Filter 1-2x/jaar + reiniging</td>
                  <td className="border border-gray-300 px-3 py-2">Filter 1x/jaar + membraan 2-3 jaar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Hygiëne-risico</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700">Matig (Legionella bij slecht onderhoud)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Laag</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Laag</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">CO2-voetafdruk</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-700">Hoog (transport + plastic)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Laag</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Laag (reject-water is nadeel)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Hardheid verwijdering</td>
                  <td className="border border-gray-300 px-3 py-2">Nvt (afhankelijk van bron)</td>
                  <td className="border border-gray-300 px-3 py-2">Nee (alleen koolstoffilter)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (&gt;95%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Wateraansluiting vereist</td>
                  <td className="border border-gray-300 px-3 py-2">Nee</td>
                  <td className="border border-gray-300 px-3 py-2">Ja</td>
                  <td className="border border-gray-300 px-3 py-2">Ja</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostencalculator: totaalkosten per jaar per medewerkers-aantallen</h2>
          <p className="text-gray-700 mb-4">
            Onderstaande berekening gaat uit van 0,5 liter drinkwater per medewerker per werkdag
            (230 dagen), aanschafkosten afgeschreven over 5 jaar, en realistisch filter- en
            flesverbruik. Alle bedragen zijn indicatieve jaarkosten in euro&apos;s.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Medewerkers</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Flessenkoeler (euro/jaar)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Leidingwaterkoeler (euro/jaar)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmosefilter (euro/jaar)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Besparing (fles vs osmose)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">20 medewerkers</td>
                  <td className="border border-gray-300 px-3 py-2">1.800-3.200 euro</td>
                  <td className="border border-gray-300 px-3 py-2">500-900 euro</td>
                  <td className="border border-gray-300 px-3 py-2">350-700 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">ca. 1.400-2.500 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">50 medewerkers</td>
                  <td className="border border-gray-300 px-3 py-2">3.800-7.500 euro</td>
                  <td className="border border-gray-300 px-3 py-2">900-1.800 euro</td>
                  <td className="border border-gray-300 px-3 py-2">700-1.400 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">ca. 3.000-6.000 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">100 medewerkers</td>
                  <td className="border border-gray-300 px-3 py-2">7.000-14.000 euro</td>
                  <td className="border border-gray-300 px-3 py-2">1.500-3.000 euro</td>
                  <td className="border border-gray-300 px-3 py-2">1.200-2.500 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">ca. 6.000-11.500 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Aannames: flessenwater 0,80 euro/liter (19L-fles bezorgd); leidingwaterkoeler 550 euro aanschaf/5 jaar + 200 euro/jaar onderhoud; osmosefilter 650 euro aanschaf/5 jaar + 150 euro/jaar onderhoud. Werkelijke kosten kunnen variëren.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hygiëne en bacterieel risico</h2>
          <p className="text-gray-700 mb-4">
            Hygiëne is een onderschat aspect bij de keuze voor een watersysteem. Flessenkoelers
            zijn bij onvoldoende onderhoud een risicobron voor bacteriële groei, inclusief
            Legionella pneumophila.
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Risico bij flessenkoelers</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>Bij het omwisselen van de fles komt lucht in contact met het waterreservoir en de dispenserkraan — potentieel besmettingspad.</li>
            <li>Stilstaand water in het interne koelreservoir bij weinig gebruik biedt ideale omstandigheden voor bacteriële groei (kamertemperatuur, stilstand).</li>
            <li>Onderzoek (o.a. door RIVM) toont aan dat ongereinigde flessenkoelers regelmatig bacteriële besmetting vertonen.</li>
            <li>Preventie: maandelijkse reiniging met gecertificeerde koelerdesinfectant, alleen flessen van gecertificeerde leveranciers gebruiken, wekelijks koelreservoir visueel controleren.</li>
          </ul>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Membraanfilter als hygiënische barrière</h3>
          <p className="text-gray-700 mb-4">
            Een osmosefilter (membraanporiën 0,0001 µm) vormt een fysieke barrière voor alle
            bacteriën, virussen en cysten. Water dat door het membraan is gegaan, bevat geen
            levende micro-organismen. Het filter beschermt bovendien tegen eventuele besmetting
            achter de watermeter (bij werken aan leidingen of onverwachte drukval). In combinatie
            met een UV-lamp (254 nm) na het membraan is de microbiologische beveiliging maximaal.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Duurzaamheid en CO2-voetafdruk</h2>
          <p className="text-gray-700 mb-4">
            Plastic flessenwater heeft een aanzienlijke milieu-impact die bij de meeste bedrijven
            zelden volledig in beeld is:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>Productie van een 0,5 liter PET-fles: ca. 100-150 gram CO2-equivalent.</li>
            <li>Transport vanuit brongebied (gemiddeld 500 km in Europa): ca. 30-80 gram CO2 per fles.</li>
            <li>Totaal per fles: ca. 130-230 gram CO2-equivalent inclusief transport.</li>
            <li>Een kantoor van 50 medewerkers met flessenwater (230 werkdagen, 0,5 L/dag): ca. 11.500 flessen/jaar = 1.500-2.650 kg CO2 per jaar.</li>
            <li>Osmosefilter (inclusief energieverbruik pomp, afvalwaterproductie): ca. 50-100 kg CO2 per jaar voor hetzelfde volume.</li>
            <li>CO2-besparing door overstap: 1.400-2.550 kg CO2 per jaar, rapporteerbaar als Scope 3-reductie in uw ESG-verslag.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Let op het nadeel van osmose: ca. 50-65% van het ingaande water wordt als concentraat
            (reject) afgevoerd naar het riool. Dit is een waterverbruiksnadeel dat gedeeltelijk
            gecompenseerd kan worden door reject-water te hergebruiken voor toiletspoelingen of
            plantenbewatering.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Praktische overwegingen bij de keuze</h2>
          <p className="text-gray-700 mb-4">
            Naast kosten en duurzaamheid zijn er praktische factoren die de keuze bepalen:
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Ruimte en installatie</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>Flessenkoeler: geen installatie nodig, enkel stroomaansluiting. Direct te plaatsen, eenvoudig te verplaatsen.</li>
            <li>Leidingwaterkoeler: vereist wateraansluiting ¼ inch op maximaal 1,5 meter afstand + 230V stopcontact. Installatie door loodgieter: 1-2 uur (150-300 euro installatiekost).</li>
            <li>Osmosefilter: als leidingwaterkoeler + afvoer voor reject-water (sifon of afvoer). Kan onderbouw (compact, 30 × 30 cm) of vrijstaand worden geplaatst.</li>
          </ul>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Contract vs eigen eigendom</h3>
          <p className="text-gray-700 mb-4">
            Veel leveranciers bieden zowel koop- als lease/all-in contracten aan. Bij lease
            (typisch 40-80 euro/maand inclusief onderhoud) blijft de leverancier eigenaar van
            het systeem en verantwoordelijk voor filterwissel en reparaties. Bij eigen aanschaf
            bent u verantwoordelijk voor onderhoud maar zijn de langetermijnkosten lager. Een
            all-in lease is aantrekkelijk voor bedrijven die geen operationele lasten willen
            voor wateronderhoud; koop is goedkoper op de lange termijn (3-5 jaar).
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Welke optie past bij welk bedrijf?</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Situatie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanbevolen optie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Klein kantoor (2-10 pers.), geen waterleiding nabij</td>
                  <td className="border border-gray-300 px-3 py-2">Flessenkoeler of filterkan-station</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Middelgroot kantoor (10-50 pers.), waterleiding beschikbaar</td>
                  <td className="border border-gray-300 px-3 py-2">Leidingwaterkoeler of osmosefilter met dispensertap</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Groot kantoor / horeca (50+ pers.), hoge kwaliteitseisen</td>
                  <td className="border border-gray-300 px-3 py-2">Osmosefilter (centraal of meerdere dispenserpunten)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Hard water (boven 20 dH), kalk op apparatuur</td>
                  <td className="border border-gray-300 px-3 py-2">Osmosefilter (verwijdert hardheid 95-99%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Locatie zonder wateraansluiting (bouw, events)</td>
                  <td className="border border-gray-300 px-3 py-2">Flessenkoeler (enige reële optie)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Duurzaamheidsdoel: plastic reductie, ESG-rapportage</td>
                  <td className="border border-gray-300 px-3 py-2">Leidingwaterkoeler of osmosefilter (minimaal plastic)</td>
                </tr>
              </tbody>
            </table>
          </div>
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
              { label: "Waterfilters vergelijken", href: "/vergelijken" },
              { label: "Zakelijk kantoor", href: "/zakelijk/kantoor" },
              { label: "Drinkwaterfontein", href: "/drinkwaternormen" },
              { label: "Omgekeerde osmose", href: "/omgekeerde-osmose" },
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
            <Link href="/vergelijken/kraanwater-vs-flessenwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kraanwater vs. flessenwater</h3>
              <p className="text-sm text-gray-600">Kostenvergelijking tussen flessenwater (waterkoeler), gefilterd kraanwater en bidons op de werkplek.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose kantoorinstallatie</h3>
              <p className="text-sm text-gray-600">Hoe een vaste osmose-installatie op kantoor flessenwater overbodig maakt en de TCO verlaagt.</p>
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
