import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Drinkwaterbesluit Nederland: normen, parameters en verplichtingen",
  description:
    "Het Drinkwaterbesluit 2011 (gewijzigd 2023) bevat normen voor 60+ parameters. Lees welke stoffen worden gecontroleerd en wat waterbedrijven verplicht zijn.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/drinkwaternormen/drinkwaterbesluit",
  },
  openGraph: {
    title: "Drinkwaterbesluit Nederland: normen, parameters en verplichtingen",
    description:
      "Het Drinkwaterbesluit 2011 (gewijzigd 2023) bevat normen voor 60+ parameters. Lees welke stoffen worden gecontroleerd en wat waterbedrijven verplicht zijn.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het Drinkwaterbesluit?",
    answer:
      "Het Drinkwaterbesluit is een Algemene Maatregel van Bestuur (AMvB) op basis van de Drinkwaterwet 2009. Het bevat de uitvoeringsregels voor drinkwaterproductie en -levering in Nederland: maximale parameterwaarden voor meer dan 60 stoffen, verplichte meetfrequenties, rapportage-eisen en de verantwoordelijkheden van drinkwaterbedrijven. Het besluit is in 2023 gewijzigd om EU-richtlijn 2020/2184 te implementeren.",
  },
  {
    question: "Hoeveel parameters bevat het Drinkwaterbesluit?",
    answer:
      "Het Drinkwaterbesluit bevat normen voor meer dan 60 parameters, onderverdeeld in microbiologische parameters (zoals E. coli, enterococcen en Legionella), chemische parameters (zoals nitraat, arseen, lood en PFAS), radioactieve parameters en indicatorparameters (zoals pH, hardheid, kleur en reuk). De chemische en radioactieve parameters zijn wettelijk vastgelegde maxima; indicatorparameters zijn streefwaarden.",
  },
  {
    question: "Wat is het verschil tussen een parameterwaarde en een actiewaarde?",
    answer:
      "Een parameterwaarde is de wettelijke maximumwaarde: overschrijding verplicht tot directe actie en melding aan de ILT. Een actiewaarde is een lagere interne signaalwaarde die drinkwaterbedrijven zichzelf opleggen: bij overschrijding moet onderzocht worden of aanvullende maatregelen nodig zijn, maar er is nog geen wettelijke overtreding. Actiewaarden zijn een proactief instrument voor kwaliteitsmanagement.",
  },
  {
    question: "Welke microbiologische normen gelden voor drinkwater?",
    answer:
      "De belangrijkste microbiologische parameterwaarden zijn: E. coli 0 per 100 ml (absolute norm), enterococcen 0 per 100 ml, Clostridium perfringens 0 per 100 ml (als indicator voor parasieten) en coliformen 0 per 100 ml. Legionella heeft een aparte norm van 100 kve/liter voor grote systemen en is geregeld in een apart Legionellabesluit.",
  },
  {
    question: "Wat zijn de PFAS-normen in het Drinkwaterbesluit?",
    answer:
      "Sinds de wijziging van 2023 geldt een parameterwaarde van 0,1 microgram per liter voor de som van 20 individuele PFAS-stoffen (waaronder PFOS en PFOA), en 0,5 microgram per liter voor de totaalsom van alle PFAS. Deze normen komen rechtstreeks uit de EU-richtlijn 2020/2184 en zijn aanmerkelijk strenger dan de vorige norm van 0,5 ug/L voor alleen PFOS en PFOA samen.",
  },
  {
    question: "Wat is de loodnorm in het Drinkwaterbesluit?",
    answer:
      "De huidige parameterwaarde voor lood in drinkwater is 10 microgram per liter aan de kraan. Per 12 januari 2036 wordt dit verlaagd naar 5 microgram per liter, conform de EU-richtlijn 2020/2184. Voor nieuwe installaties en renovaties geldt al een strengere norm. Lood in drinkwater is vrijwel uitsluitend een probleem bij woningen met loden huisleidingen gebouwd voor 1960.",
  },
  {
    question: "Wat is de nitraatnorm in drinkwater?",
    answer:
      "De parameterwaarde voor nitraat in drinkwater is 50 milligram per liter (mg/L). Dit is een EU-brede norm die ook geldt voor babywater. Nitraat kan bij hoge concentraties gevaarlijk zijn voor zuigelingen jonger dan zes maanden (blauwe-babyziekte). In landbouwgebieden kan nitraat in grondwater problematisch zijn; zuivering door omgekeerde osmose verwijdert 85-95% van het nitraat.",
  },
  {
    question: "Welke rapportageverplichtingen hebben drinkwaterbedrijven?",
    answer:
      "Drinkwaterbedrijven zijn verplicht jaarlijks te rapporteren aan de ILT over alle metingen, normoverschrijdingen en genomen maatregelen. Zij moeten hun kwaliteitsresultaten ook openbaar maken voor consumenten, onder meer via hun eigen website. Alle normoverschrijdingen moeten direct gemeld worden. Vewin (brancheorganisatie) publiceert een gecombineerd jaaroverzicht.",
  },
  {
    question: "Geldt het Drinkwaterbesluit ook voor putwater of bronwater?",
    answer:
      "Het Drinkwaterbesluit geldt voor collectieve drinkwatervoorzieningen die meer dan 10 kubieke meter per dag of meer dan 50 personen van water voorzien. Kleine particuliere putten vallen buiten de wettelijke meetplicht. Eigenaren van een put zijn zelf verantwoordelijk voor de kwaliteit en worden aangeraden regelmatig te laten testen door een ISO/IEC 17025-geaccrediteerd laboratorium.",
  },
  {
    question: "Hoe is de EU-richtlijn 2020/2184 verwerkt in het Drinkwaterbesluit?",
    answer:
      "Nederland heeft de EU-richtlijn 2020/2184 in januari 2023 geimplementeerd door het Drinkwaterbesluit te wijzigen. De belangrijkste aanpassingen zijn: nieuwe PFAS-normen, verlaging van de loodnorm per 2036, verplichte monitoring van microplastics, invoering van risicogebaseerd toezicht voor het hele stroomgebied en aanscherping van transparantieverplichtingen richting consumenten.",
  },
  {
    question: "Wat zijn indicatorparameters in het Drinkwaterbesluit?",
    answer:
      "Indicatorparameters zijn grootheden die de acceptability van water voor consumenten beschrijven, maar geen direct gezondheidsrisico vormen: kleur, troebelheid, reuk, smaak, pH, hardheid (calciumcarbonaat), ijzer, mangaan en aluminium. Ze hebben streefwaarden, geen harde maxima. Overschrijding verplicht tot onderzoek maar leidt niet automatisch tot handhaving.",
  },
  {
    question: "Worden radioactieve stoffen gemeten in drinkwater?",
    answer:
      "Ja. Het Drinkwaterbesluit bevat normen voor radon (100 Bq/L voor niet-flessenwater), tritium (100 Bq/L) en een indicatieve totale dosisindicator van 0,1 mSv/jaar. Radioactiviteit in Nederlands drinkwater is in de praktijk verwaarloosbaar laag. Meting is verplicht maar de frequentie is lager dan voor chemische parameters.",
  },
];

export default function DrinkwaterbesluitPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          {
            name: "Drinkwaterbesluit",
            url: "https://waterfilterplatform.nl/drinkwaternormen/drinkwaterbesluit",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Drinkwaterbesluit Nederland: normen, parameters en verplichtingen",
          description:
            "Het Drinkwaterbesluit 2011 (gewijzigd 2023) bevat normen voor 60+ parameters. Lees welke stoffen worden gecontroleerd en wat waterbedrijven verplicht zijn.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/drinkwaterbesluit",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Drinkwaterbesluit</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwaterbesluit Nederland: normen, parameters en verplichtingen
          </h1>
          <QuickAnswer answer="Het Drinkwaterbesluit 2011, gewijzigd in 2023 om EU-richtlijn 2020/2184 te implementeren, is de kern van de Nederlandse drinkwaterregelgeving. Het bevat maximale waarden voor meer dan 60 parameters, verdeeld over microbiologische, chemische, radioactieve en indicatorparameters. Drinkwaterbedrijven zijn verplicht regelmatig te meten en jaarlijks te rapporteren aan de ILT." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wettelijke basis: Drinkwaterwet en Drinkwaterbesluit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Nederlandse drinkwaterregelgeving is opgebouwd uit twee lagen. De <strong>Drinkwaterwet
            2009</strong> is de overkoepelende kaderwet die de doelstellingen, verantwoordelijkheden
            en bevoegdheden vastlegt: wie levert water, wie houdt toezicht en wat zijn de algemene
            verplichtingen. Op basis van de Drinkwaterwet is het <strong>Drinkwaterbesluit 2011</strong>
            vastgesteld als Algemene Maatregel van Bestuur (AMvB).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het Drinkwaterbesluit bevat de concrete uitvoeringsregels: de maximale waarden voor
            specifieke parameters, de verplichte meetfrequenties per categorie en volume, de
            rapportage-eisen en de procedures bij normoverschrijding. Het is het document waaraan
            drinkwaterbedrijven dagelijks worden afgerekend door de toezichthouder, de{" "}
            <Link href="/drinkwaternormen/wie-controleert-drinkwater" className="text-[#005F8A] hover:underline font-medium">
              Inspectie Leefomgeving en Transport (ILT)
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Implementatie van EU-richtlijn 2020/2184
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn 2020/2184
            </Link>{" "}
            is de grootste herziening van Europese drinkwaternormen in meer dan twee decennia.
            Lidstaten hadden tot 12 januari 2023 de tijd om de richtlijn in nationale wetgeving
            om te zetten. Nederland deed dit door het Drinkwaterbesluit te wijzigen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De voornaamste wijzigingen die in het Drinkwaterbesluit zijn doorgevoerd:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              Invoering van PFAS-normen: 0,1 microgram/L voor 20 prioritaire PFAS-stoffen en
              0,5 microgram/L voor de totaalsom.
            </li>
            <li>
              Verlaging van de loodnorm van 10 naar 5 microgram/L, met een implementatietermijn
              tot 12 januari 2036.
            </li>
            <li>
              Verplichte monitoring van microplastics, zonder nog een wettelijke grenswaarde.
            </li>
            <li>
              Invoering van risicogebaseerd toezicht: drinkwaterbedrijven moeten risicoanalyses
              uitvoeren voor het volledige stroomgebied van hun bronnen, niet alleen voor het
              eindproduct.
            </li>
            <li>
              Uitgebreide transparantievereisten: consumenten moeten eenvoudig toegang hebben
              tot kwaliteitsinformatie over hun drinkwater.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Categorieen van parameters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het Drinkwaterbesluit onderscheidt vier categorieen van parameters, elk met eigen
            normtypen en meetverplichtingen.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Microbiologische parameters
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Microbiologische parameters zijn de meest kritieke: ze beschermen tegen acute
            gezondheidsrisicos. De absolute normen zijn streng: E. coli, enterococcen en
            Clostridium perfringens mogen allemaal 0 kve (kolonievormende eenheden) per 100 ml
            bedragen. Coliformen dienen eveneens afwezig te zijn. Legionella wordt afzonderlijk
            geregeld en de norm is 100 kve per liter voor risicovolle installaties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Microbiologische parameters worden het meest frequent gemeten omdat bacteriologische
            verontreinigingen snel kunnen optreden en snel kunnen wijzigen.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Chemische parameters
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chemische parameters omvatten een brede groep stoffen: zware metalen (lood, arseen,
            cadmium, kwik, nikkel), anorganische verbindingen (nitraat, nitriet, fluoride,
            cyanide), organische verbindingen (benzeen, pesticiden, trihalomethanen) en nieuwere
            groepen als{" "}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline font-medium">
              PFAS
            </Link>
            . Voor chemische parameters gelden maximumwaarden die zijn afgeleid van toxicologische
            studies en veiligheidsmarges van factor 10 tot 1000.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De norm voor{" "}
            <Link href="/drinkwaternormen/lood" className="text-[#005F8A] hover:underline font-medium">
              lood
            </Link>{" "}
            is bijzonder relevant voor consumenten in oudere woningen: 10 microgram/L nu,
            5 microgram/L per 2036. Lood in drinkwater is vrijwel uitsluitend afkomstig uit
            loden huisleidingen.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Radioactieve parameters
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Radioactiviteit in drinkwater wordt gemeten via radon (norm: 100 Bq/L), tritium
            (100 Bq/L) en een indicatieve totale dosisindicator van 0,1 millisievert per jaar.
            In Nederland is radioactiviteit in drinkwater vrijwel nooit een praktisch probleem.
            De meting is verplicht maar de frequentie is aanzienlijk lager dan voor chemische
            parameters.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Indicatorparameters
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Indicatorparameters beschrijven de organoleptische en esthetische kwaliteit van
            drinkwater: kleur, troebelheid, reuk, smaak, pH (6,5-9,5), hardheid
            (calciumcarbonaat), ijzer (0,2 mg/L), mangaan (0,05 mg/L) en aluminium (0,1 mg/L).
            Deze parameters vormen geen direct gezondheidsrisico maar bepalen wel of water
            aanvaardbaar is voor consumenten. Overschrijding verplicht tot onderzoek maar leidt
            niet automatisch tot handhaving.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Parameterwaarden versus actiewaarden
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een belangrijk onderscheid in het Drinkwaterbesluit is dat tussen parameterwaarden
            en actiewaarden. De <strong>parameterwaarde</strong> is de wettelijke grenswaarde:
            overschrijding is een overtreding en verplicht tot onmiddellijke melding aan de ILT
            en herstelmaatregelen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een <strong>actiewaarde</strong> is een lagere signaalwaarde die drinkwaterbedrijven
            intern hanteren als vroegwaarschuwingssysteem. Bij een overschrijding van de actiewaarde
            moet het bedrijf onderzoeken of aanvullende maatregelen nodig zijn, maar er is nog geen
            wettelijke overtreding. Actiewaarden zijn een proactief kwaliteitsinstrument.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voorbeeld: de parameterwaarde voor lood is 10 microgram/L, maar sommige bedrijven
            hanteren een interne actiewaarde van 1 microgram/L. Een overschrijding van de
            actiewaarde leidt dan tot onderzoek en eventuele communicatie met consumenten, lang
            voordat de wettelijke grens bereikt is.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Rapportageverplichtingen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het Drinkwaterbesluit legt drinkwaterbedrijven uitgebreide rapportageverplichtingen
            op. Elk bedrijf is verplicht jaarlijks te rapporteren aan de ILT met alle
            meetresultaten, normoverschrijdingen en de genomen herstelmaatregelen. Bij
            normoverschrijdingen geldt een directe meldplicht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Naast de rapportage aan de ILT moeten bedrijven hun kwaliteitsresultaten openbaar
            maken voor consumenten, in een begrijpelijk formaat. Consumenten moeten via de
            website van hun waterbedrijf kunnen zien wat de kwaliteit is van het water in hun
            postcodegebied. Vewin, de brancheorganisatie van drinkwaterbedrijven, publiceert
            een jaarlijks samenvattend rapport voor heel Nederland.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Meetfrequentie per categorie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De verplichte meetfrequentie is afhankelijk van twee factoren: de categorie van
            de parameter en het volume water dat een locatie produceert. Microbiologische
            parameters worden frequenter gemeten dan chemische parameters, omdat bacteriologische
            risicos snel kunnen wijzigen. Bij grote productielocaties (meer dan 1.000 m3 per dag)
            gelden hogere minimumfrequenties dan bij kleine systemen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Voorbeeldparameters met normwaarden
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Parameter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Parameterwaarde</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Eenheid</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Categorie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">E. coli</td>
                  <td className="border border-gray-300 px-3 py-2">0</td>
                  <td className="border border-gray-300 px-3 py-2">kve/100 ml</td>
                  <td className="border border-gray-300 px-3 py-2">Microbiologisch</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                  <td className="border border-gray-300 px-3 py-2">50</td>
                  <td className="border border-gray-300 px-3 py-2">mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">Chemisch</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Lood</td>
                  <td className="border border-gray-300 px-3 py-2">10 (5 per 2036)</td>
                  <td className="border border-gray-300 px-3 py-2">ug/L</td>
                  <td className="border border-gray-300 px-3 py-2">Chemisch</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Arseen</td>
                  <td className="border border-gray-300 px-3 py-2">10</td>
                  <td className="border border-gray-300 px-3 py-2">ug/L</td>
                  <td className="border border-gray-300 px-3 py-2">Chemisch</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">PFAS (20 stoffen)</td>
                  <td className="border border-gray-300 px-3 py-2">0,1</td>
                  <td className="border border-gray-300 px-3 py-2">ug/L (som)</td>
                  <td className="border border-gray-300 px-3 py-2">Chemisch</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">PFAS (totaal)</td>
                  <td className="border border-gray-300 px-3 py-2">0,5</td>
                  <td className="border border-gray-300 px-3 py-2">ug/L (som)</td>
                  <td className="border border-gray-300 px-3 py-2">Chemisch</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Fluoride</td>
                  <td className="border border-gray-300 px-3 py-2">1,5</td>
                  <td className="border border-gray-300 px-3 py-2">mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">Chemisch</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Radon</td>
                  <td className="border border-gray-300 px-3 py-2">100</td>
                  <td className="border border-gray-300 px-3 py-2">Bq/L</td>
                  <td className="border border-gray-300 px-3 py-2">Radioactief</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">pH</td>
                  <td className="border border-gray-300 px-3 py-2">6,5 - 9,5</td>
                  <td className="border border-gray-300 px-3 py-2">-</td>
                  <td className="border border-gray-300 px-3 py-2">Indicator</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">IJzer</td>
                  <td className="border border-gray-300 px-3 py-2">0,2</td>
                  <td className="border border-gray-300 px-3 py-2">mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">Indicator</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u meer weten over het toezicht op naleving van het Drinkwaterbesluit? Lees onze
            pagina over{" "}
            <Link href="/drinkwaternormen/wie-controleert-drinkwater" className="text-[#005F8A] hover:underline font-medium">
              wie drinkwater controleert in Nederland
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor een diepgaande analyse van de Europese normen die aan de basis liggen van het
            Drinkwaterbesluit, zie onze pagina over de{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn 2020/2184
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Specifieke informatie over PFAS in drinkwater vindt u op onze uitgebreide pagina over{" "}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline font-medium">
              PFAS in drinkwater
            </Link>
            , en over lood leest u meer op{" "}
            <Link href="/drinkwaternormen/lood" className="text-[#005F8A] hover:underline font-medium">
              lood in drinkwater
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
              <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater: overzicht</h3>
              <p className="text-sm text-gray-600">Overzicht van alle stoffen die voorkomen in drinkwater en de bijbehorende normen en risico&apos;s.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
