import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Kokend water kraan merken vergelijken: Quooker, Grohe, PureAqua en meer",
  description:
    "Vergelijk de populairste kokend water kranen: Quooker, Grohe Red, PureAqua 4-in-1, InSinkErator. Prijs, filter, capaciteit en installatie.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/kokend-water-kraan-merken" },
  openGraph: {
    title: "Kokend water kraan merken vergelijken: Quooker, Grohe, PureAqua en meer",
    description:
      "Vergelijk de populairste kokend water kranen: Quooker, Grohe Red, PureAqua 4-in-1, InSinkErator. Prijs, filter, capaciteit en installatie.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen Quooker en PureAqua?",
    answer:
      "Het grootste verschil is het filtersysteem. Een Quooker levert heet of kokend water maar heeft geen ingebouwde waterfilter — een externe Quooker CUBE-eenheid voegt bruiswater toe maar filtert niet op PFAS of lood. PureAqua 4-in-1 heeft een ingebouwd osmosefilter: het water wordt gefilterd op moleculair niveau voordat het verhit wordt. Quooker werkt met een vacuüm boilertank (ca. 3 liter); PureAqua maakt gebruik van direct heating of een kleinere boiler gecombineerd met RO-membraan.",
  },
  {
    question: "Hoe lang gaat een kokend water kraan mee?",
    answer:
      "De meeste kwaliteitskranen (Quooker, Grohe Red, PureAqua) hebben een levensverwachting van 10-15 jaar bij normaal onderhoud. De boiler en het kraan-mechanisme zelf zijn robuust; de vervangende onderdelen zijn de filters en eventueel de verwarmingselementen. Quooker biedt een fabrieksgarantie van 2 jaar, PureAqua 2-5 jaar afhankelijk van het model. Regelmatig onderhoud (filterwissel, ontkalking) verlengt de levensduur aanzienlijk.",
  },
  {
    question: "Wat kost installatie van een kokend water kraan?",
    answer:
      "Een loodgieter rekent doorgaans 100-250 euro voor de installatie van een kokend-waterkraan, afhankelijk van de complexiteit en de regio. Vereisten zijn: een vrij stopcontact (230V) onder het aanrecht, voldoende ruimte voor de boilertank (Quooker ca. 13 cm doorsnede), een koudwateraansluiting (1/4-inch) en bij sommige modellen een extra gat in het aanrecht voor de aparte kraan. Bij een 4-in-1 kraan of PureAqua-systeem met osmose is tevens een afvoerverbinding voor het RO-afvalwater nodig.",
  },
  {
    question: "Welk systeem verbruikt het minst energie?",
    answer:
      "Direct-heating systemen (zoals sommige InSinkErator-modellen) verbruiken alleen energie op het moment van gebruik. Boilersystemen (Quooker, Grohe Red) houden water continu op temperatuur en verbruiken daardoor standby-energie, ook al gebruikt u het kraan niet. Quooker claimt een standby-verbruik van ca. 3-10 Wh per liter tankinhoud per dag (ca. 10-25 Wh/dag totaal voor de COMBI-tank). Op jaarbasis is het verschil met direct heating ca. 30-80 kWh, ofwel 10-25 euro per jaar bij een stroomtarief van 0,30 euro/kWh.",
  },
  {
    question: "Hoe vervang ik het filter van mijn kokend water kraan?",
    answer:
      "Bij Quooker CUBE (bruiswater-eenheid) wordt het koolstoffilter jaarlijks vervangen; dit is een eenvoudige handeling die zelf te doen is. Bij systemen met osmosefilter (PureAqua, Grohe Blue met osmose) wisselt u het pre-filter elke 6-12 maanden, het osmosemembraan elke 2-3 jaar en het post-filter jaarlijks. De meeste fabrikanten leveren een vervangingspakket per post. Gebruik een TDS-meter om de membraanprestaties te monitoren.",
  },
];

export default function KokendWaterKraanMerkenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Kokend water kraan merken", url: "https://waterfilterplatform.nl/vergelijken/kokend-water-kraan-merken" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Kokend water kraan merken vergelijken: Quooker, Grohe, PureAqua en meer",
          description: "Vergelijk de populairste kokend water kranen: Quooker, Grohe Red, PureAqua 4-in-1, InSinkErator. Prijs, filter, capaciteit en installatie.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/vergelijken/kokend-water-kraan-merken",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:underline">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Kokend water kraan merken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan merken vergelijken: Quooker, Grohe, PureAqua en meer
          </h1>
          <QuickAnswer answer="De bekendste merken zijn Quooker (boilersysteem, 150-215°C standby), Grohe Red (boiler, rond design), PureAqua 4-in-1 (osmosefilter ingebouwd), InSinkErator (direct heating). Prijzen lopen van 500 tot 2.500 euro. Het grootste onderscheid: wel of geen ingebouwde waterfilter." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="algemeen" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Vergelijkingstabel merken</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De onderstaande tabel vergelijkt de vier meest verkochte kokend-waterkraanmerken in Nederland
            op de belangrijkste objectieve kenmerken. Prijzen zijn indicatief en gebaseerd op de
            gangbare adviesprijzen; actie-aanbiedingen en dealers kunnen hiervan afwijken.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Quooker COMBI+</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Grohe Red Duo</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">PureAqua 4-in-1</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">InSinkErator 3N1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aanschafprijs", "900-1.400 euro", "700-1.100 euro", "800-1.600 euro", "500-900 euro"],
                  ["Jaarlijkse kosten", "100-180 euro (filter + energie)", "80-150 euro", "150-250 euro (RO-filters)", "60-120 euro"],
                  ["Capaciteit", "7 liter/uur", "5-6 liter/uur", "4-6 liter/uur (RO beperkt snelheid)", "~6 liter/uur"],
                  ["Technologie", "Vacuüm boiler (110°C)", "Boiler (150-210°C standby)", "Direct heating + RO", "Direct heating"],
                  ["Ingebouwde waterfilter", "Nee (CUBE optioneel)", "Nee", "Ja, osmose (RO)", "Nee (optioneel)"],
                  ["Installatievereisten", "230V, gat aanrecht, 1/4\"", "230V, gat aanrecht, 1/4\"", "230V, 2 gaten, 1/4\" + afvoer", "230V, gat aanrecht, 1/4\""],
                  ["Garantie", "2 jaar (fabrikant)", "2 jaar (fabrikant)", "2-3 jaar", "2 jaar"],
                  ["Standby energie (dag)", "10-25 Wh/dag", "15-30 Wh/dag", "5-15 Wh/dag (kleine tank)", "0 Wh (geen standby)"],
                ].map(([eigenschap, quooker, grohe, pureaqua, insinkerator], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eigenschap}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{quooker}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{grohe}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{pureaqua}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{insinkerator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Boilersysteem vs direct heating: hoe werken ze?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De twee dominante verwarmingstechnologieën voor kokend-waterkranen zijn fundamenteel anders
            in hun werking, wat directe gevolgen heeft voor het energieverbruik, de wachttijd en de
            installatieruimte.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Boilersystemen</strong> (Quooker, Grohe Red) bewaren een kleine hoeveelheid water
            continu op hoge temperatuur in een geïsoleerde tank. Quooker maakt gebruik van een
            vacuümboiler die water op 110°C houdt onder verhoogde druk — dit kan pas bij 110°C koken
            dankzij de hogere druk in de tank. Bij gebruik stroomt het water naar de kraan en koelt
            het af tot 100°C bij atmosferische druk. Grohe Red houdt water op 150-210°C in standby.
            Het voordeel: vrijwel directe levering van kokend water zonder wachttijd. Het nadeel:
            continu energieverbruik, ook &apos;s nachts of tijdens vakanties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Direct heating systemen</strong> (InSinkErator, sommige PureAqua-modellen) verwarmen
            water alleen op het moment dat de gebruiker de kraan opent, via een elektrisch
            verwarmingselement direct in de waterweg. Er is geen opslagtank vereist, wat ruimte
            bespaart. Het standby-energieverbruik is nul. Het nadeel: er is een korte aanlooptijd
            (2-5 seconden) en de maximale capaciteit per minuut is lager dan bij boilersystemen
            met grote tank.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Filterintegratie: wel of geen ingebouwde filter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het aanwezig zijn of ontbreken van een ingebouwde waterfilter is het meest bepalende
            onderscheid in de markt voor kokend-waterkranen. De meeste merken leveren een systeem
            zonder geavanceerde waterzuivering; waterfiltratie is dan optioneel via een externe
            ondersink-eenheid.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Quooker biedt standaard een actief-koolfilter in de CUBE-eenheid (voor bruiswater), maar
            dit filtert niet op PFAS, lood of nitraat. Voor gebruikers die zuiverheid als prioriteit
            stellen, is een apart osmosefilter nodig. Grohe Red heeft geen standaard filter.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            PureAqua 4-in-1 systemen integreren een volledig osmosefiltratiesysteem in de
            ondersink-eenheid. Het water wordt eerst door een sedimentfilter, dan een koolstoffilter,
            dan het RO-membraan en een post-koolfilter geleid — en pas dan verhit. Dit betekent
            dat het kokende water dat uit de kraan komt ook vrij is van PFAS, lood, nitraat en
            microplastics. Het nadeel: RO-filters beperken de doorstroomsnelheid, waardoor de
            capaciteit in liters per uur lager is dan bij systemen zonder filter.
          </p>
          <p className="text-gray-700 mt-4">Zie ook: <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline font-medium">Omgekeerde osmose filtertechniek</Link>.</p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Energieverbruik per merk: standby kWh</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Energieverbruik is een belangrijk kostenargument over de levensduur van de kraan. De
            standby-consumptie verschilt significant tussen merken en modellen:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Merk / Model</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Standby kWh/dag</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Standby kWh/jaar</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Kosten/jaar (€ 0,30/kWh)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Quooker COMBI+", "0,010-0,025 kWh", "3,7-9 kWh", "1,10-2,70 euro"],
                  ["Quooker PRO3 COMBI+", "0,015-0,030 kWh", "5-11 kWh", "1,50-3,30 euro"],
                  ["Grohe Red Duo", "0,015-0,030 kWh", "5-11 kWh", "1,50-3,30 euro"],
                  ["PureAqua 4-in-1 (boiler)", "0,005-0,015 kWh", "1,8-5,5 kWh", "0,55-1,65 euro"],
                  ["InSinkErator 3N1", "0 kWh (geen standby)", "0 kWh", "0 euro standby"],
                ].map(([merk, dag, jaar, kosten], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{merk}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{dag}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{jaar}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4 mb-4">
            Opmerking: bovenstaande waarden zijn gebaseerd op fabrieksspecificaties en onafhankelijke
            metingen. Het werkelijke verbruik hangt af van de omgevingstemperatuur, de tankinhoud en
            de isolatiewaarde van de installatie. Een tijdklok die het systeem &apos;s nachts en tijdens
            vakantie uitschakelt, kan het energieverbruik met 30-50% reduceren.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Installatie: wat heeft een loodgieter nodig?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle kokend-waterkranen vereisen professionele installatie door een erkend installateur
            vanwege de combinatie van water en elektriciteit (230V). De meeste fabrikanten eisen dit
            ook voor het behoud van de garantie. Een typische installatie omvat de volgende stappen
            en vereisten:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Ruimte onder aanrecht:</strong> minimaal 30-40 cm hoogte voor de boilertank
              (Quooker: ca. 33 cm hoog, 13 cm doorsnede). PureAqua 4-in-1 met osmose heeft
              aanvullend een RO-unit nodig van ca. 35-45 cm hoog.
            </li>
            <li>
              <strong>Geaard stopcontact (230V):</strong> verplicht aanwezig of te plaatsen door
              een elektricien. Stroomverbruik bij gebruik: 1.800-3.000 W afhankelijk van het model.
            </li>
            <li>
              <strong>Koudwateraansluiting:</strong> standaard 1/4-inch snelkoppeling, afsluiter
              vereist voor onderhoud.
            </li>
            <li>
              <strong>Kraangat aanrecht:</strong> de meeste kokend-waterkranen komen als aparte
              kraan (naast de mengkraan) en vereisen een extra gat van 35 mm doorsnede. Bij
              4-in-1 kranen (ook warm + koud mengkraan) is slechts één gat nodig.
            </li>
            <li>
              <strong>Afvoerverbinding (alleen bij osmose):</strong> PureAqua en vergelijkbare
              RO-systemen produceren afvalwater dat op het afvoerbuisje wordt aangesloten.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een ervaren loodgieter die het systeem kent, installeert een standaard kokend-waterkraan
            in 1,5-3 uur. Bij een combinatiesysteem met osmose en extra kraangat kan dit oplopen
            tot 3-5 uur. Vraag altijd om een installatieverklaring voor de garantie.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-10 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Vergelijken", href: "/vergelijken" },
              { label: "Kokend water kraan", href: "/kokend-water-kraan" },
              { label: "4-in-1 kokend water kraan", href: "/kokend-water-kraan/4-in-1" },
              { label: "Omgekeerde osmose", href: "/omgekeerde-osmose" },
              { label: "Beste waterfilter", href: "/beste-waterfilter" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#005F8A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering kokend water kranen</h3>
              <p className="text-sm text-gray-600">Welke veiligheidsnormen (EN 61770, NEN 1006) gelden per merk en hoe u dit verifieert bij aankoop.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmose-functie bij 4-in-1 kranen</h3>
              <p className="text-sm text-gray-600">Welke kokend water kranen een ingebouwd osmosefilter bieden en hoe dit verschilt per merk.</p>
            </Link>
          </div>
        </section>

        <div className="mt-10">
          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
