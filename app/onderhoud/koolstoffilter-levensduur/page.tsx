import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Koolstoffilter levensduur: wanneer vervangen en hoe controleren",
  description:
    "Hoe lang gaat een koolstoffilter? Blok vs granulaat, levensduur in liters, geurtest en wanneer vervangen voor optimale filterprestaties.",
  alternates: { canonical: "https://waterfilterplatform.nl/onderhoud/koolstoffilter-levensduur" },
  openGraph: {
    title: "Koolstoffilter levensduur: wanneer vervangen en hoe controleren",
    description:
      "Hoe lang gaat een koolstoffilter? Blok vs granulaat, levensduur in liters, geurtest en wanneer vervangen voor optimale filterprestaties.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoe test ik of mijn koolstoffilter nog werkt?",
    answer:
      "De eenvoudigste test is de geurtest: vul een glas met gefilterd water en ruik eraan. Ruikt het naar chloor of heeft het een chemische geur? Dan is het filter uitgeput. Een nauwkeurigere methode is een TDS-meting in combinatie met een chloorindicatortest. Koolstoffilters verwijderen geen TDS, maar ze verwijderen chloor. Een aquariumwinkeltje of brouwwinkel verkoopt eenvoudige chloortesters (0,5-3 euro) waarmee u de chloorfilterprestaties kunt meten.",
  },
  {
    question: "Kan ik een koolstoffilter regenereren of hergebruiken?",
    answer:
      "In theorie kan geactiveerd kool worden geregenereerd door het te verhitten tot 800-1.000 °C in een zuurstofarme omgeving, maar dit is praktisch niet uitvoerbaar voor consumentenfilters. Sommige claims over 'wassen' of 'koken' van koolstoffilters zijn onjuist: chloor en organische verbindingen worden bij lage temperaturen niet vrijgemaakt en het filter hergebruiken leidt tot terugstroming van geadsorbeerde stoffen. Vervang altijd op het aanbevolen tijdstip.",
  },
  {
    question: "Welk merk koolstoffilter is het beste?",
    answer:
      "Het meest betrouwbare keurmerk voor koolstoffilters is NSF/ANSI 42 (smaak en geur) en NSF/ANSI 53 (gezondheidseffecten). Merken als Pentek, Watts, Omnipure en Aquafilter bieden gecertificeerde cartridges aan in standaardformaten. Vermijd onbekende importfilters zonder certificering. Voor osmosesystemen zijn OEM-filters van de systeemfabrikant vaak het meest afgestemd op het systeem, maar gecertificeerde generische alternatieven in het juiste formaat presteren doorgaans vergelijkbaar.",
  },
  {
    question: "Wat is het verschil tussen een koolstoffilter en een HEPA-filter?",
    answer:
      "Dit zijn volledig verschillende filtertechnologieën voor verschillende media. Een HEPA-filter is een mechanisch luchtfilter dat fijne deeltjes uit de lucht vangt. Een koolstoffilter (actief kool) is een adsorptiefilter voor water (of lucht) dat chemische verbindingen, chloor, geur en smaakstoffen bindt. In waterfiltersystemen wordt uitsluitend koolstoftechnologie gebruikt — HEPA heeft geen toepassing in waterfiltratie.",
  },
  {
    question: "Wat doet een koolstoffilter niet?",
    answer:
      "Een koolstoffilter verwijdert geen nitraten, geen zware metalen (lood, arseen) in significante hoeveelheden, geen virussen, geen bacteriën, geen fluoride en verlaagt het TDS-gehalte niet. Voor deze verontreinigingen zijn andere technologieën nodig, zoals omgekeerde osmose (nitraten, lood, PFAS, TDS) of UV-desinfectie (bacteriën en virussen). Koolstoffilters zijn uitstekend voor smaak- en geurverbetering, maar zijn geen vervanging voor een volwaardig filtersysteem bij verontreinigd bronwater.",
  },
];

export default function KoolstoffilterLevensduurPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Onderhoud", item: "https://waterfilterplatform.nl/onderhoud" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Koolstoffilter levensduur",
                item: "https://waterfilterplatform.nl/onderhoud/koolstoffilter-levensduur",
              },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
          {
            "@type": "Article",
            headline: "Koolstoffilter levensduur: wanneer vervangen en hoe controleren",
            description:
              "Hoe lang gaat een koolstoffilter? Blok vs granulaat, levensduur in liters, geurtest en wanneer vervangen voor optimale filterprestaties.",
            datePublished: "2026-05-18",
            dateModified: "2026-05-18",
            url: "https://waterfilterplatform.nl/onderhoud/koolstoffilter-levensduur",
            publisher: {
              "@type": "Organization",
              name: "WaterfilterPlatform",
              url: "https://waterfilterplatform.nl",
            },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/onderhoud" className="hover:underline">Onderhoud</Link>
            <span className="mx-2">/</span>
            <span>Koolstoffilter levensduur</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Koolstoffilter levensduur: wanneer vervangen en hoe controleren
          </h1>
          <QuickAnswer answer="Een koolstofblokfilter voor een onderbouw osmosefilter gaat 6-12 maanden mee (ca. 2.000-5.000 liter). Een GAC-granulaatfilter 3-6 maanden (ca. 1.000-3.000 liter). Verlopen filters laten chloor, geur en smaakstoffen door. Vervang altijd op schema, niet alleen op basis van smaak." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Twee typen koolstoffilter: CTO-blok versus GAC-granulaat
        </h2>
        <p className="text-gray-700 mb-4">
          Geactiveerd kool (actief kool) werkt door adsorptie: verontreinigingen binden aan de
          enorm grote inwendige oppervlakte van het poreuze koolstofmateriaal. Die oppervlakte
          is indrukwekkend — 1 gram geactiveerd kool heeft een intern oppervlak van 500 tot
          1.500 m². Wanneer alle beschikbare adsorptieplaatsen bezet zijn, is het filter verzadigd
          en moet het worden vervangen.
        </p>
        <p className="text-gray-700 mb-4">
          Er zijn twee hoofdvormen van koolstoffilters die in waterfiltratie worden gebruikt:
          het koolstofblokfilter (CTO of CBC) en het granulaire actief koolfilter (GAC). Ze
          verschillen fundamenteel in structuur, adsorptiesnelheid en levensduur.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>CTO-koolstofblokfilter</strong> (Carbon Block): gecomprimeerde actieve
          koolstofkorrels die worden samengeperst tot een aaneengesloten blok. Water stroomt
          door de gehele structuur, waardoor elk waterdeeltje in nauw contact komt met het
          koolstofmateriaal. Dit resulteert in een hogere filterprestatie en langere levensduur.
          CTO-filters verwijderen ook sediment en hebben een hogere mechanische filtercapaciteit.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>GAC-granulaatfilter</strong> (Granular Activated Carbon): losse koolstofkorrels
          in een behuizing. Water stroomt door de tussenruimten tussen de korrels. Het contact
          met het koolstofmateriaal is korter en minder intensief. GAC-filters hebben een lager
          drukverval (hogere doorstroomsnelheid) maar een kortere levensduur en lagere
          filterprestatie per liter verwerkt water.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">CTO-blokfilter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">GAC-granulaatfilter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Levensduur (maanden)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">6–12 maanden</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">3–6 maanden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Levensduur (liters)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">2.000–5.000 L</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">1.000–3.000 L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Chlooradsorptie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend (tot 99%)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Goed (tot 85%)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Sedimentfiltering</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (tot 0,5–5 micron)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Doorstroomweerstand</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Gemiddeld</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Laag (snel debiet)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kostenprijs (cartridge)</td>
                <td className="border border-gray-300 px-3 py-2">€ 8–25</td>
                <td className="border border-gray-300 px-3 py-2">€ 5–15</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Typische toepassing</td>
                <td className="border border-gray-300 px-3 py-2">Pre-filter osmose, onderbouwfilter</td>
                <td className="border border-gray-300 px-3 py-2">Post-filter osmose, filterkan, inline</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Chloramine-verwijdering</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Goed bij katalytisch kool</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Beperkt</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Factoren die de levensduur beïnvloeden
        </h2>
        <p className="text-gray-700 mb-4">
          De opgegeven levensduur van een koolstoffilter is altijd een schatting onder
          standaardomstandigheden. In de praktijk wijkt de werkelijke levensduur af afhankelijk
          van vier belangrijke factoren.
        </p>

        <p className="text-gray-700 mb-2"><strong>1. Chloorgehalte van het kraanwater</strong></p>
        <p className="text-gray-700 mb-4">
          Nederlands leidingwater bevat gemiddeld 0,1 tot 0,3 mg/L vrij chloor (residueel
          chloor). Na de drinkwaterzuiveringsinstallatie stijgt dit tijdelijk bij bactriologische
          incidenten of werkzaamheden aan het leidingnet. Hoe hoger het chloorgehalte, hoe
          sneller de adsorptiecapaciteit van het filter wordt opgebruikt. In gebieden met
          consistenter hoger chloorgehalte gaat een filter 20-40% korter mee.
        </p>

        <p className="text-gray-700 mb-2"><strong>2. Chloramine versus chloor</strong></p>
        <p className="text-gray-700 mb-4">
          Sommige waterbedrijven gebruiken chloramine (NH₂Cl) in plaats van vrij chloor als
          desinfectiemiddel. Chloramine is stabieler en moeilijker te verwijderen dan vrij chloor.
          Een standaard koolstoffilter verwijdert chloramine minder efficiënt. Voor chloramine
          verwijdering is <strong>katalytisch actief kool</strong> (ook wel Catalytic Carbon
          of CC) nodig — een gespecialiseerde koolstofvariant met een gemodificeerde
          oppervlaktestructuur. Raadpleeg uw drinkwaterbedrijf of controleer de jaarrapportage
          om te weten of u chloramine in uw leidingwater heeft.
        </p>

        <p className="text-gray-700 mb-2"><strong>3. Dagelijks waterverbruik</strong></p>
        <p className="text-gray-700 mb-4">
          Een huishouden dat 10 liter gefilterd water per dag verbruikt, zal een filter van
          2.000 liter na 200 dagen (ca. 6-7 maanden) vervangen. Een huishouden dat 5 liter
          per dag verbruikt, haalt mogelijk het volledige jaar. Houd bij voorkeur bij hoeveel
          gefilterd water u dagelijks gebruikt, of registreer de datum van installatie en
          de ingestelde hoeveelheid op het systeem.
        </p>

        <p className="text-gray-700 mb-2"><strong>4. Watertemperatuur</strong></p>
        <p className="text-gray-700 mb-4">
          Actief kool adsorbeert beter bij lagere watertemperaturen. Koud leidingwater
          (8-15 °C) geeft betere filterprestaties dan warm water. Gebruik koolstoffilters
          nooit met warm kraanwater (boven 30 °C) — warmte vermindert de adsorptie en kan
          bacteriën in het filtermateriaal stimuleren.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Signalen dat uw koolstoffilter vervangen moet worden
        </h2>
        <p className="text-gray-700 mb-4">
          Een verzadigd koolstoffilter geeft niet altijd een zichtbaar of onmiskenbaar signaal.
          Toch zijn er meerdere indicatoren die wijzen op een uitgeput filter.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li>
            <strong>Terugkerende chloorgeur:</strong> het meest betrouwbare teken. Als het
            gefilterde water ruikt naar zwembad of desinfectiemiddel, filtert het kool
            het chloor niet meer voldoende.
          </li>
          <li>
            <strong>Smaakverslechtering:</strong> een subtiele chemische, bittere of
            aardse smaak die voorheen niet aanwezig was.
          </li>
          <li>
            <strong>Verhoogd TDS bij post-filter koolstof:</strong> als het TDS van het
            water na een post-filterkoolstof stijgt ten opzichte van het gemeten niveau
            direct na het RO-membraan, is het post-filter actief kool uitgeput en
            laat het opgeloste stoffen door die er eerder niet doorheen kwamen.
          </li>
          <li>
            <strong>Tijdschema bereikt:</strong> ook zonder smaaksignalen moet u het
            filter vervangen op het aanbevolen tijdstip. Bepaalde contaminanten
            (chloramine, VOC&apos;s) geven geen merkbare smaak maar zijn wel schadelijk bij
            langdurige blootstelling.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Pre-filter vs post-filter koolstof in een osmosesysteem
        </h2>
        <p className="text-gray-700 mb-4">
          In een omgekeerde osmose systeem heeft koolstof twee verschillende rollen, afhankelijk
          van de positie in de filterketen.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Pre-filter koolstof (voor het RO-membraan):</strong> beschermt het membraan
          tegen chloor. Chloor beschadigt TFC-membranen (Thin Film Composite) die in de meeste
          moderne osmosesystemen worden gebruikt. Een uitgeput pre-filter koolstof laat chloor
          door naar het membraan en verkort de levensduur van dit dure onderdeel aanzienlijk.
          Vervang de pre-filter koolstof strikt op schema — bij twijfel eerder dan later.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Post-filter koolstof (na het RO-membraan):</strong> verbetert smaak en geur
          van het al gefilterde osmosewater. Het osmosewater heeft een zeer laag TDS, maar
          kan een lichte plasticachtige of vlakke smaak hebben. De post-filter koolstof voegt
          dit smaakkenmerk toe en is de laatste barrière voor de kraan. Bij een uitgeput
          post-filter daalt de smaakkwaliteit maar is het water technisch gezien nog steeds
          goed gefilterd door het membraan.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Koolstoffilter vervangen: stap-voor-stap
        </h2>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li>
            <strong>Watertoevoer afsluiten:</strong> sluit de afsluitkraan op de
            koudwaterleiding die naar het filtersysteem leidt.
          </li>
          <li>
            <strong>Druk aflaten:</strong> open de filterkraan en laat het systeem
            drukvrij lopen. Bij osmosesystemen: open ook de osmosekraan om de
            druktank te ontlasten.
          </li>
          <li>
            <strong>Filterbehuizing losdraaien:</strong> gebruik de meegeleverde
            filtersleutel om de behuizing linksom te draaien. Houd een opvangbak
            gereed voor het resterende water.
          </li>
          <li>
            <strong>O-ring controleren:</strong> verwijder de O-ring en inspecteer deze
            op scheuren of vervorming. Een beschadigde O-ring kan lekkage veroorzaken
            na herplaatsing. Vervang de O-ring indien nodig (inbegrepen bij de meeste
            filtersets of apart verkrijgbaar voor ca. 0,50-2 euro).
          </li>
          <li>
            <strong>Nieuwe filter plaatsen:</strong> verwijder de verpakking van het
            nieuwe filter, controleer de richting (let op pijlen of markeringen) en
            plaats de filter in de behuizing.
          </li>
          <li>
            <strong>Behuizing vastdraaien:</strong> schroef de behuizing met de hand
            vast en gebruik de filtersleutel voor een kwart slag extra. Niet
            overmatig aandraaien.
          </li>
          <li>
            <strong>Watertoevoer openen:</strong> open de afsluitkraan langzaam.
            Controleer direct op lekkage bij de behuizingsverbinding.
          </li>
          <li>
            <strong>Doorspoelen:</strong> laat het systeem 3-5 minuten doorstromen.
            Het eerste water kan zwartachtig of grijs zijn door losse koolstofdeeltjes —
            dit is normaal en onschadelijk. Gooi dit water weg totdat het helder loopt.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Kostenberekening: CTO vs GAC over 3 jaar
        </h2>
        <p className="text-gray-700 mb-4">
          Laten we de totale kosten van beide filtertypen over een periode van drie jaar
          vergelijken voor een gezin dat gemiddeld 6 liter gefilterd water per dag verbruikt
          (ca. 2.190 liter per jaar).
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border border-gray-300 bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Capaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Wissel per jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs per filter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten per jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left">3 jaar totaal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">CTO-blokfilter</td>
                <td className="border border-gray-300 px-3 py-2">3.500 L gemiddeld</td>
                <td className="border border-gray-300 px-3 py-2">0,6× (elke 18 mnd.)</td>
                <td className="border border-gray-300 px-3 py-2">€ 12–20</td>
                <td className="border border-gray-300 px-3 py-2">ca. € 8–13</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">ca. € 24–39</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">GAC-granulaatfilter</td>
                <td className="border border-gray-300 px-3 py-2">2.000 L gemiddeld</td>
                <td className="border border-gray-300 px-3 py-2">1,1× (elke 11 mnd.)</td>
                <td className="border border-gray-300 px-3 py-2">€ 8–15</td>
                <td className="border border-gray-300 px-3 py-2">ca. € 9–17</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-semibold">ca. € 27–51</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Het kostenverschil tussen CTO- en GAC-filters is over drie jaar beperkt als u alleen
          naar de filterprijs kijkt. Het voordeel van CTO zit hem in de betere bescherming van
          het RO-membraan (lagere totale systeemkosten) en de hogere filterefficiëntie, niet
          puur in de filterprijzen.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Praktische tips voor een langere filterlevensduur
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-2">
          <li>
            Gebruik altijd koud water voor uw filtersysteem. Warm water verkort de
            filtercapaciteit en kan bacteriegroei stimuleren in het filter.
          </li>
          <li>
            Sla geen extra filters op in vochtige ruimten of bij warmtebronnen. Bewaar
            ongeopende filters in een koele, droge omgeving.
          </li>
          <li>
            Noteer de installatiedatum op het filter met een permanente stift. Dit maakt het
            bijhouden van het schema eenvoudig.
          </li>
          <li>
            In gebieden met hoog chloorgehalte kunt u overwegen een grotere cartridge (10 inch
            in plaats van 5 inch) te gebruiken voor een langere contacttijd en hogere capaciteit.
          </li>
          <li>
            Laat het systeem niet langdurig stilstaan. Bij vakantie van meer dan twee weken:
            spoel het systeem na terugkomst minimaal 10 minuten door voordat u het water drinkt.
          </li>
          <li>
            Combineer een sedimentfilter als eerste trap met uw koolstoffilter. Sediment
            verstopt de poriën van koolstofblokken en verkort hun levensduur. Een voorgaand
            sedimentfilter verlengt de koolstoffilterlevensduur merkbaar.
          </li>
        </ul>

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
          <h2 className="text-lg font-semibold text-[#003F5C] mb-3">Verwante pagina&apos;s</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Onderhoud overzicht", href: "/onderhoud" },
              { label: "Actief kool filtertechniek", href: "/filtertechnieken/actief-kool" },
              { label: "Omgekeerde osmose onderhoud", href: "/omgekeerde-osmose/onderhoud" },
              { label: "Osmosefilter vervangen", href: "/onderhoud/osmose-filter-vervangen" },
              { label: "Koolstoffilter uitleg", href: "/koolstoffilter" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm bg-[#E0F2FE] text-[#005F8A] px-3 py-1.5 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {l.label} &rarr;
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
