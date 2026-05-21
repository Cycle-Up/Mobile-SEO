import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Osmosefilter inbouw onder aanrecht: installatie en modellen 2026",
  description:
    "Osmosefilter inbouw onder aanrecht: compact, verborgen, aparte kraan. Installatie 2-3 uur. Vergelijk aanrecht- en inline modellen. Top inbouwmodellen 2026.",
  alternates: { canonical: "https://waterfilterplatform.nl/omgekeerde-osmose/inbouw" },
  openGraph: {
    title: "Osmosefilter inbouw onder aanrecht: installatie en modellen 2026",
    description:
      "Osmosefilter inbouw onder aanrecht: compact, verborgen, aparte kraan. Installatie 2-3 uur. Vergelijk aanrecht- en inline modellen. Top inbouwmodellen 2026.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Hoeveel ruimte heb ik nodig onder het aanrecht voor een inbouw osmosefilter?",
    answer:
      "Een standaard inbouw osmosefilter neemt circa 30 x 30 x 40 cm in beslag (b x d x h). Het drukvat (opslagtank) heeft apart circa 25 x 25 x 35 cm nodig. In totaal rekent u op minimaal een halve onderkast. Sommige modellen bieden een geintegreerd drukvat wat compacter is.",
  },
  {
    question: "Heb ik een aparte kraan nodig bij een inbouw osmosefilter?",
    answer:
      "Ja, bij een inbouw osmosefilter onder het aanrecht is een aparte osmosekraan verplicht. Deze kraan wordt geboord in het aanrechtblad of in een extra gat in de gootsteen. De kraan is alleen bestemd voor gefilterd water en heeft een eigen aansluiting op het drukvat.",
  },
  {
    question: "Hoe lang duurt de installatie van een inbouw osmosefilter?",
    answer:
      "De installatie duurt gemiddeld 2 tot 3 uur voor een doe-het-zelver met basiskennis van loodgieterij. De meest tijdrovende stap is het boren van het gat voor de aparte kraan (37-38 mm) in het aanrechtblad. Alle aansluitingen zijn push-fit en vereisen geen solderen.",
  },
  {
    question: "Wat is het verschil tussen een inbouw en een aanrechtmodel osmosefilter?",
    answer:
      "Een inbouw osmosefilter (onderbouw) is onzichtbaar onder het aanrecht en levert water via een aparte kraan. Een aanrechtmodel staat zichtbaar op het aanrecht en filtert direct via de bestaande keukenkraan. Het aanrechtmodel is eenvoudiger te installeren maar neemt ruimte op het aanrecht in beslag.",
  },
  {
    question: "Welke merken osmosefilters zijn geschikt voor inbouw?",
    answer:
      "Populaire inbouwmodellen zijn van Aquaphor (RO-101, RO-207), Watts Premier, PureAqua en diverse systemen met Filmtec of DuPont membranen. Deze merken bieden betrouwbare membranen met een rejectie van 95-99%. Let bij de keuze op het membraantype, het aantal filtertrappen en de beschikbaarheid van vervangfilters.",
  },
  {
    question: "Hoe kan ik het drukvat horizontaal plaatsen?",
    answer:
      "De meeste drukvaten van osmosefilters kunnen zowel staand als liggend worden geplaatst. Bij horizontale plaatsing draait u de aansluiting zo dat de slang naar boven of opzij loopt. Houd minimaal 5 cm vrije ruimte rondom het drukvat voor ventilatie en toekomstig onderhoud.",
  },
  {
    question: "Hoe wissel ik de filters zonder het systeem te demonteren?",
    answer:
      "Bij een goed inbouw osmosefilter kunt u de pre-filters en het membraan wisselen zonder de behuizing los te koppelen. Draai de filterhuizen los met de bijgeleverde sleutelmoer, verwissel de filterelementen en draai de huizen weer vast. Het membraanvat is iets complexer maar ook zonder demontage te verwisselen. Zet eerst de watertoevoer af.",
  },
  {
    question: "Wat is het verschil tussen een inline osmosefilter en een onderbouwmodel?",
    answer:
      "Een inline osmosefilter wordt ingebouwd in een bestaand apparaat zoals een koelkast of ijsmaker en is niet bedoeld als zelfstandig drinkwatersysteem. Een onderbouwmodel is een compleet systeem met drukvat en aparte kraan voor algemeen drinkwater. Inline filters zijn goedkoper maar minder geschikt als hoofdwaterfilter.",
  },
];

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
    { "@type": "ListItem", position: 2, name: "Omgekeerde osmose", item: "https://waterfilterplatform.nl/omgekeerde-osmose" },
    { "@type": "ListItem", position: 3, name: "Inbouw", item: "https://waterfilterplatform.nl/omgekeerde-osmose/inbouw" },
  ],
};

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
  headline: "Osmosefilter inbouw onder aanrecht: voordelen, installatie en modellen",
  description:
    "Osmosefilter inbouw onder aanrecht: compact, verborgen, aparte kraan. Installatie 2-3 uur. Vergelijk aanrecht- en inline modellen. Top inbouwmodellen 2026.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  url: "https://waterfilterplatform.nl/omgekeerde-osmose/inbouw",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

export default function OsmoseInbouwPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Inbouw</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosefilter inbouw onder aanrecht: voordelen, installatie en modellen
          </h1>
          <QuickAnswer answer="Een ingebouwd osmosefilter onder het aanrecht is de meest populaire installatiemethode. Het systeem is verborgen en levert gefilterd water via een aparte kraan op het aanrecht. Installatie duurt 2-3 uur. De benodigde ruimte onder het aanrecht is circa 30x30x40 cm." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Wat is een inbouw osmosefilter?
        </h2>
        <p className="text-gray-700 mb-4">
          Een inbouw osmosefilter (ook wel onderbouwmodel of under-sink systeem genoemd) wordt volledig verborgen geinstalleerd in de onderkast van uw gootsteen. Het systeem bestaat uit twee tot vier filterhuizen, een RO-membraanhouder, een drukvat en een aparte osmosekraan die u in het aanrechtblad boort. Het water wordt gefilterd, opgeslagen in het drukvat en via de aparte kraan getapt.
        </p>
        <p className="text-gray-700 mb-6">
          Dit onderscheidt het inbouwmodel van een aanrechtmodel (dat zichtbaar op het aanrecht staat) en van inline filters (die ingebouwd zijn in specifieke apparaten zoals koelkasten of ijsmakers). Het inbouwmodel is voor de meeste Nederlandse huishoudens de beste keuze vanwege de onzichtbare installatie en het gemak van een dedicated osmosekraan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: inbouw vs aanrechtmodel vs inline
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Ruimtegebruik</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Zichtbaar</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Aparte kraan</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#003F5C]">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Inbouw (onderbouw)</td>
                <td className="border border-gray-200 px-4 py-2">Onder aanrecht</td>
                <td className="border border-gray-200 px-4 py-2">Nee</td>
                <td className="border border-gray-200 px-4 py-2">Ja (geboord)</td>
                <td className="border border-gray-200 px-4 py-2">200-600 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Aanrechtmodel</td>
                <td className="border border-gray-200 px-4 py-2">Op aanrecht</td>
                <td className="border border-gray-200 px-4 py-2">Ja</td>
                <td className="border border-gray-200 px-4 py-2">Nee (doorloop)</td>
                <td className="border border-gray-200 px-4 py-2">150-400 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Inline (koelkast/ijsmaker)</td>
                <td className="border border-gray-200 px-4 py-2">In apparaat</td>
                <td className="border border-gray-200 px-4 py-2">Nee</td>
                <td className="border border-gray-200 px-4 py-2">Via apparaat</td>
                <td className="border border-gray-200 px-4 py-2">100-300 euro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Benodigde ruimte onder het aanrecht
        </h2>
        <p className="text-gray-700 mb-4">
          Een standaard inbouw osmosesysteem neemt circa 30 cm breed, 30 cm diep en 40 cm hoog in beslag. Daarboven heeft u nog ruimte nodig voor het drukvat. Drukvaten zijn er in twee uitvoeringen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Losstaand drukvat:</strong> het meest gangbaar, formaat 25 x 25 x 35 cm (4 liter) tot 30 x 30 x 50 cm (8-12 liter). Kan staand of liggend worden geplaatst.
          </li>
          <li>
            <strong>Geintegreerd drukvat:</strong> nieuwere compacte systemen (Aquaphor, sommige Watts-modellen) hebben het drukvat ingebouwd in de behuizing. Totale afmetingen circa 25 x 20 x 45 cm. Ideaal bij beperkte ruimte.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meet de beschikbare ruimte in uw onderkast voordat u een systeem koopt. Houd rekening met bestaande leidingen, de sifon en eventuele andere opslag. U hebt ook circa 20 cm vrije ruimte nodig voor de filterhuizen om ze te kunnen losdraaien bij het wisselen van filters.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatiestappen inbouw osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          De installatie van een inbouw osmosefilter is goed te doen zonder loodgieter. Reken op 2 tot 3 uur voor de volledige installatie.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Stap 1: Koudwaterleiding aftakken</h3>
            <p className="text-gray-700">
              Sluit de koudwaterkraan onder het aanrecht af. Monteer een saddle valve (zadel-aankoppeling) op de koudwaterleiding of plaats een T-stuk voor betere doorstroming. Sluit de inkomende slang van het osmosesysteem aan op de aftakking.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Stap 2: Filterhuizen monteren op beugel</h3>
            <p className="text-gray-700">
              Bevestig het filterchassis met de meegeleverde schroeven aan de achterwand van de onderkast. Zorg voor minimaal 20 cm vrije ruimte onder de filterhuizen om ze te kunnen losdraaien. Controleer of alle O-ringen aanwezig zijn.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Stap 3: Drukvat plaatsen</h3>
            <p className="text-gray-700">
              Plaats het drukvat staand of liggend op de bodem van de onderkast of bevestig het aan de wand. Houd minimaal 5 cm ruimte rondom het drukvat. Sluit de permeaatslang van het membraan aan op het drukvat.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Stap 4: Aparte kraan boren (37-38 mm gat)</h3>
            <p className="text-gray-700">
              Dit is de meest kritieke stap. Boor een gat van 37-38 mm in het aanrechtblad op een geschikte positie. Gebruik een gatzaag van de juiste maat en boor langzaam om breuk te voorkomen. Bij een granieten of composiet aanrecht is een diamantboor noodzakelijk. Monteer de osmosekraan van onderaf door het gat en draai de moer van bovenaf vast.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Stap 5: Afvoer aansluiten</h3>
            <p className="text-gray-700">
              Sluit de afvoerslang (concentraatslang) aan op de sifon via de meegeleverde afvoeradapter. De flow restrictor zit in de afvoerslang en mag niet worden verwijderd of vervangen door een gewone slang. De restrictor zorgt voor de juiste drukverhouding in het membraan.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Stap 6: Eerste flush uitvoeren</h3>
            <p className="text-gray-700">
              Open de watertoevoer en laat het systeem de eerste twee tankdullingen volledig vullen en wegtappen. Dit spoelt productieresten uit het membraan. Meet met een TDS-meter: na de eerste flush daalt de TDS aanzienlijk. Na de tweede of derde vulling is het water klaar voor consumptie.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De aparte osmosekraan kiezen
        </h2>
        <p className="text-gray-700 mb-4">
          De aparte kraan is het enige zichtbare deel van uw inbouw osmosefilter. Er zijn drie veelvoorkomende typen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Standaard osmosekraan (1/4" aansluiting):</strong> de eenvoudigste en goedkoopste optie, meegeleverd bij de meeste systemen. Geschikt voor alle gaten van 37-38 mm. Leverbaar in chroom of wit.
          </li>
          <li>
            <strong>Design osmosekraan:</strong> hogere kraannek, mooiere vormgeving, leverbaar in mat zwart, geborsteld staal of brons. Prijs 40-120 euro extra. Populair als u een designkeuken heeft.
          </li>
          <li>
            <strong>RVS osmosekraan:</strong> volledig roestvrij staal, geen nikkel of chroomcoating. Aanbevolen bij nikkelgevoeligheid of als uw leidingwater een lage pH heeft.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Populaire inbouwmodellen 2026
        </h2>
        <p className="text-gray-700 mb-4">
          Bij de keuze van een inbouw osmosefilter zijn de kwaliteit van het membraan en de beschikbaarheid van vervangfilters de twee belangrijkste criteria.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Filmtec/DuPont membranen:</strong> de industriestandaard. Gebruikt door Watts Premier, PureAqua en vele andere merken. Rejectie 96-99%. Vervangmembranen breed verkrijgbaar.
          </li>
          <li>
            <strong>Aquaphor RO-101 en RO-207:</strong> Europees merk (Russische oorsprong) met goede kwaliteit/prijsverhouding. Het RO-207 Morion heeft een geintegreerd drukvat wat compact is. Vervangfilters leverbaar via meerdere leveranciers.
          </li>
          <li>
            <strong>Watts Premier:</strong> Amerikaans merk met bewezen betrouwbaarheid. Modellen met 4 en 5 trappen. Worden vaak door installateurs aanbevolen vanwege de robuuste bouw.
          </li>
          <li>
            <strong>PureAqua:</strong> zakelijk gepositioneerd merk met uitstekende membranenen en een breed assortiment. Modellen met remineralisatiefilter beschikbaar.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud van uw inbouw osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          Het grote voordeel van een modern inbouw osmosefilter is dat u filters kunt wisselen zonder het systeem te demonteren. De filterhuizen draaien los met een sleutelmoer, de filterelementen worden vervangen, en de huizen worden teruggeplaatst. Het membraan zit in een apart vat en wordt op dezelfde manier verwisseld.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Pre-sedimentfilter: elke 6-12 maanden</li>
          <li>Pre-koolfilter: elke 6-12 maanden</li>
          <li>RO-membraan: elke 2-3 jaar (afhankelijk van waterverbruik en kwaliteit)</li>
          <li>Post-koolfilter (polijstfilter): elke 12 maanden</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Gebruik een TDS-meter om de prestaties van uw membraan te monitoren. Als de rejectie (het percentage opgeloste stoffen dat het membraan tegenhoudt) daalt onder 75-80%, is vervanging van het membraan aan te bevelen.
        </p>

        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-8">
          <h3 className="font-semibold text-[#003F5C] mb-2">Interne links</h3>
          <ul className="space-y-1 text-[#005F8A]">
            <li><Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose: complete gids</Link></li>
            <li><Link href="/omgekeerde-osmose/kopen" className="hover:underline">Osmosefilter kopen: vergelijking en advies</Link></li>
            <li><Link href="/omgekeerde-osmose/diy" className="hover:underline">Osmosefilter zelf installeren: stappenplan</Link></li>
          </ul>
        </div>

        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">Veelgestelde vragen</h2>
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
          <Link href="/omgekeerde-osmose/installatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter installatie</h3>
            <p className="text-sm text-gray-600">Stap-voor-stap installatiegids voor uw osmosefilter.</p>
          </Link>
          <Link href="/omgekeerde-osmose/voor-thuis" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter voor thuis</h3>
            <p className="text-sm text-gray-600">Welk osmosefilter past het beste bij uw thuissituatie?</p>
          </Link>
          <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp installatietype</h3>
            <p className="text-sm text-gray-600">Inbouw, aanrecht of inline: welk installatietype past bij u?</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Complete gids over omgekeerde osmose: werking, voordelen en keuze.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
