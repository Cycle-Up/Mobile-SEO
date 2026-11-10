import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { CountertopCTA } from '@/components/CountertopCTA';
import { COUNTERTOP } from '@/lib/countertop.mjs';
import { FOUR_IN_ONE } from '@/lib/kranen.mjs';

export const metadata: Metadata = {
  title: "Beste waterfilter voor een appartement: compacte opties",
  description:
    "Appartement met beperkte ruimte? Aanrechtfilter, onderbouw osmose of filterkan: welk filter past het beste zonder verbouwing.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/beste-waterfilter/appartement",
  },
  openGraph: {
    title: "Beste waterfilter voor een appartement: compacte opties vergeleken",
    description:
      "Appartement met beperkte ruimte? Aanrechtfilter, onderbouw osmose of filterkan: welk filter past het beste zonder verbouwing.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Kan ik een osmosefilter plaatsen in een huurappartement?",
    answer:
      "Een onderbouw osmosefilter vraagt een slangaansluiting op het leidingwerk en een aparte kraan (extra kraangat) of een 3-weg-kraan die de keukenkraan vervangt. Een extra kraangat boren vraagt in principe toestemming van de verhuurder of VvE. Overleg ook bij een 3-weg-kraan of een aansluiting op het leidingwerk vooraf. Een aanrechtfilter (countertop RO) is het alternatief: boren is niet nodig en het apparaat verhuist mee. Countertop-osmose werkt met hetzelfde type RO-membraan als onderbouw osmose; de prestaties verschillen per model. Sommige modellen koppelt u met een adapter aan de kraan, andere vult u met de hand, zoals het PureAqua Water zuiver apparaat (stekker erin, tank vullen, klaar). Dat apparaat wordt verkocht door PureAqua, waaraan WaterfilterPlatform gelieerd is.",
  },
  {
    question: "Wat is het verschil tussen een aanrechtfilter en onderbouw osmose?",
    answer:
      "Een aanrechtfilter (countertop) staat zichtbaar op het aanrecht en sluit via een adapter aan op de bestaande mengkraan of wordt met de hand gevuld. Geen installatie nodig. Een onderbouw osmosefilter zit onder het aanrecht en vereist een aparte kraan (extra gat) of een 3-weg-kraan. Het werkingsprincipe is hetzelfde: beide gebruiken RO-technologie met sediment- en koolstofvoorfase; de prestaties verschillen per model. Het verschil zit in installatie, ruimtegebruik en prijs.",
  },
  {
    question: "Hoe groot is een compacte osmose-unit?",
    answer:
      "Compacte onderbouw osmosesystemen zijn beschikbaar in afmetingen vanaf 25 x 15 x 35 cm (b x d x h). Modellen zonder opslagvat (tankless) zijn nog compacter. Aanrechtfilters variëren van 15 x 20 x 35 cm tot grotere modellen. Controleer de maten van uw onderkast voor aanschaf.",
  },
  {
    question: "Filtert een aanrechtfilter ook PFAS?",
    answer:
      "Een aanrechtfilter met een RO-membraan wel: omgekeerde osmose vermindert PFAS in het algemeen sterk, ook in een countertop-uitvoering. Hoeveel precies verschilt per apparaat en per PFAS-stof. Voor het PureAqua Water zuiver apparaat is geen eigen PFAS-labtest gepubliceerd, dus noemen we daarvoor geen percentage. Een eenvoudig aanrechtfilter met alleen koolstof (zonder RO-membraan) filtert PFAS minder betrouwbaar. Vraag bij elk apparaat naar een onafhankelijk labrapport per stof.",
  },
  {
    question: "Hoeveel water produceert een aanrechtfilter per dag?",
    answer:
      "De meeste countertop osmosefilters produceren 100-400 liter gefilterd water per dag, afhankelijk van het model en de waterdruk. Voor een huishouden van 2-4 personen (gemiddeld 4-8 liter drinkwater per dag) is dit ruim voldoende. Modellen met intern opslagvat leveren direct water zonder wachttijd.",
  },
];

export default function AppartementPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          {
            name: "Beste waterfilter per situatie",
            url: "https://waterfilterplatform.nl/beste-waterfilter",
          },
          {
            name: "Appartement",
            url: "https://waterfilterplatform.nl/beste-waterfilter/appartement",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Beste waterfilter voor een appartement: compacte opties vergeleken",
          description:
            "Appartement met beperkte ruimte? Aanrechtfilter, onderbouw osmose of filterkan: welk filter past het beste zonder verbouwing.",
          datePublished: "2026-05-17",
          dateModified: "2026-11-10",
          url: "https://waterfilterplatform.nl/beste-waterfilter/appartement",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/beste-waterfilter" className="hover:underline">
              Beste waterfilter per situatie
            </Link>
            <span className="mx-2">/</span>
            <span>Appartement</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterfilter voor een appartement
          </h1>
          <QuickAnswer answer="Voor een appartement is een aanrechtfilter (countertop RO) meestal de handigste keuze: geen boorwerk, geen aansluiting op het leidingwerk en het apparaat verhuist mee. Past er een compacte onderbouw osmose in de onderkast, dan tapt u gefilterd water uit een aparte kraan (extra kraangat) of een 3-weg-kraan; overleg dat vooraf met verhuurder of VvE. Een filterkan is goedkoper, maar vermindert PFAS en lood hooguit beperkt." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-11-10" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" dateModified="2026-11-10" />
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Beperkingen van een appartement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Appartementen stellen specifieke eisen aan een waterfilter. De onderkast is vaak
            smaller dan in een eengezinswoning: 30-40 cm breedte is gebruikelijk in plaats van
            60 cm. Daarboven komen VvE-regels die permanente aanpassingen aan leidingen of
            aanrechtblad kunnen beperken. In huurappartementen geldt bovendien dat u geen extra
            kraangat mag boren zonder toestemming van de verhuurder.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De gedeelde waterleiding in appartementencomplexen kan ook een factor zijn: hogere
            waterdoorstroom door het leidingnet op piekuren kan de druk wisselend maken, wat
            invloed heeft op de productiesnelheid van een osmosefilter. De meeste moderne
            osmosesystemen werken betrouwbaar bij druk van 2 tot 7 bar, wat gebruikelijk is
            in Nederlandse woningen.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Aanrechtfilter (countertop)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een countertop osmosefilter is de meest geschikte optie voor een appartement zonder
            installatiemogelijkheden. Het systeem staat op het aanrecht. Sommige modellen sluit u
            met een kraanadapter aan op de bestaande mengkraan, andere hebben een eigen
            watertank die u met de hand vult. Geen boorwerk, geen loodgieterswerk, geen
            toestemming nodig.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanschafprijs ligt doorgaans tussen 200 en 500 euro; het{" "}
            <Link href="/countertop-osmose" className="text-[#005F8A] hover:underline font-medium">
              PureAqua Water zuiver apparaat
            </Link>{" "}
            kost {COUNTERTOP.price}. Jaarlijkse filterkosten (sedimentfilter, koolblok en
            RO-membraan) liggen op 60-120 euro. Omgekeerde osmose vermindert PFAS en lood in het
            algemeen sterk, ook in een countertop-uitvoering. Hoeveel precies verschilt per
            apparaat en per stof: voor het Water zuiver apparaat is geen eigen PFAS-labtest
            gepubliceerd. Wil je vooral PFAS aanpakken, lees dan onze{" "}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] hover:underline font-medium">
              PFAS-filtergids
            </Link>
            . Het systeem is volledig verplaatsbaar bij verhuizing. Meer informatie over het
            kopen van een osmosefilter vindt u op de pagina{" "}
            <Link
              href="/omgekeerde-osmose/kopen"
              className="text-[#005F8A] hover:underline font-medium"
            >
              osmosefilter kopen
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Compacte onderbouw osmose
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als u toestemming heeft van de VvE of verhuurder, biedt een compacte onderbouw
            osmose-unit de voordelen van onzichtbare installatie en gefilterd water uit een
            eigen kraan: een aparte osmosekraan of een 3-weg-kraan die uw keukenkraan vervangt
            en warm, koud en gezuiverd water tapt. Modellen met een breedte van 25-30 cm passen in de meeste
            appartementkasten. Tankless-modellen (zonder opslagvat) zijn extra compact.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor een aparte osmosekraan boort u een extra kraangat in het aanrechtblad of
            de achterwand. Met een 3-weg-kraan is dat niet nodig, want die komt op de plek
            van de bestaande keukenkraan. In beide gevallen komt er een slangaansluiting op
            de koude wateraansluiting onder het aanrecht. Aanschafprijs van de unit: 300-500
            euro; een 3-weg-kraan kost los extra. Een afvoerslang voor het concentraatwater
            (waste water) moet worden aangesloten op de sifon. Bespreek dit altijd vooraf
            met uw VvE-beheerder of verhuurder.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Filterkan
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een filterkan (Brita, BWT of vergelijkbaar) vereist geen installatie en is de
            goedkoopste optie: aanschaf 20-40 euro, filterpatronen 30-50 euro per jaar.
            De kan heeft een capaciteit van 2-3 liter gefilterd water en vereist elke
            4-6 weken een nieuwe filterpatroon.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De beperkingen zijn aanzienlijk: een filterkan vermindert PFAS en lood hooguit beperkt
            en niet betrouwbaar, verwijdert geen nitraat en biedt geen microbiologische bescherming. Voor wie alleen
            de chloorstand of de smaak wil verbeteren, volstaat een filterkan. Wie bescherming
            zoekt tegen specifieke verontreinigingen, heeft een betere optie nodig.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Wanneer is welke optie het beste?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left">Filter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Installatie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Kosten/jaar</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">PFAS</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Lood</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Ruimte</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
                  <td className="border border-gray-300 px-3 py-2">&lt;50 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Beperkt</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Beperkt</td>
                  <td className="border border-gray-300 px-3 py-2">Aanrecht</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Aanrechtfilter (countertop RO)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Adapter of tank vullen</td>
                  <td className="border border-gray-300 px-3 py-2">60-120 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Sterk*</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Sterk*</td>
                  <td className="border border-gray-300 px-3 py-2">Aanrecht</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Onderbouw osmose</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Kraangat of 3-weg-kraan, vooraf overleggen</td>
                  <td className="border border-gray-300 px-3 py-2">80-150 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Sterk*</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Sterk*</td>
                  <td className="border border-gray-300 px-3 py-2">Onderkast (25+ cm)</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">
              * Omgekeerde osmose vermindert PFAS en lood in het algemeen sterk; exacte percentages
              verschillen per apparaat en per stof. Gemeten per stof bij de PureAqua 4-in-1 (SGS, nieuw
              systeem): PFOS {FOUR_IN_ONE.lab.PFOS} en PFOA {FOUR_IN_ONE.lab.PFOA} minder. Voor het
              Water zuiver apparaat is geen eigen PFAS-labtest gepubliceerd.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">
            Veelgestelde vragen over waterfilter in een appartement
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
            </details>
          ))}
        </section>

        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/beste-waterfilter" className="text-[#005F8A] hover:underline">
                Beste waterfilter per situatie: alle woningtypen
              </Link>
            </li>
            <li>
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
                Osmosefilter kopen: vergelijking en advies
              </Link>
            </li>
            <li>
              <Link href="/beste-waterfilter/huurwoning" className="text-[#005F8A] hover:underline">
                Beste waterfilter voor huurwoning
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp/installatie-type" className="text-[#005F8A] hover:underline">
                Installatietype kiezen: onderbouw vs aanrecht vs filterkan
              </Link>
            </li>
            <li>
              <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="text-[#005F8A] hover:underline">
                Kalk in leidingwater
              </Link>
            </li>
            <li>
              <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline">
                Osmose voor appartement
              </Link>
            </li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Installatietype voor appartementen</h3>
              <p className="text-sm text-gray-600">Onderbouw of aanrecht: welk filtertype past in een appartementskeuken zonder uitgebreide verbouwing.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hard water in stadsappartementen</h3>
              <p className="text-sm text-gray-600">Hoe stadsleiding vaak harder water levert en welk filtertype effectief kalk behandelt.</p>
            </Link>
          </div>
        </section>

        <CountertopCTA context="huur" content="beste-waterfilter-appartement-cta" />

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
