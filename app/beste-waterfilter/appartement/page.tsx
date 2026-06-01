import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Beste waterfilter voor een appartement: compacte opties vergeleken",
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
      "Een onderbouw osmosefilter vereist een extra kraangat en een slangaansluiting op het leidingwerk. Dat zijn aanpassingen aan de woning en vereist toestemming van de verhuurder of VvE. Een aanrechtfilter (countertop RO) is het alternatief: dit sluit aan op de bestaande kraan via een adapter, vereist geen boorwerk en is volledig verplaatsbaar. De filterprestaties zijn vergelijkbaar met een onderbouw osmosefilter.",
  },
  {
    question: "Wat is het verschil tussen een aanrechtfilter en onderbouw osmose?",
    answer:
      "Een aanrechtfilter (countertop) staat zichtbaar op het aanrecht en sluit aan op de bestaande mengkraan via een adapter. Geen installatie nodig. Een onderbouw osmosefilter zit onder het aanrecht en vereist een aparte kraantap (extra gat boren). Filterprestaties zijn vergelijkbaar: beide gebruiken RO-technologie met sediment- en koolstofvoorfase. Het verschil zit in installatie, ruimtegebruik en prijs.",
  },
  {
    question: "Hoe groot is een compacte osmose-unit?",
    answer:
      "Compacte onderbouw osmosesystemen zijn beschikbaar in afmetingen vanaf 25 x 15 x 35 cm (b x d x h). Modellen zonder opslagvat (tankless) zijn nog compacter. Aanrechtfilters variëren van 15 x 20 x 35 cm tot grotere modellen. Controleer de maten van uw onderkast voor aanschaf.",
  },
  {
    question: "Filtert een aanrechtfilter ook PFAS?",
    answer:
      "Ja, als het systeem een RO-membraan bevat. Een countertop osmosefilter met RO-membraan verwijdert PFAS voor 90-99%, vergelijkbaar met een onderbouw osmosefilter. Let op: een eenvoudig aanrechtfilter met alleen koolstoffilter (zonder RO-membraan) filtert PFAS niet betrouwbaar. Controleer altijd of het systeem een RO-membraan bevat en of het NSF/ANSI 58 gecertificeerd is.",
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
          <QuickAnswer answer="Voor een appartement is een aanrechtfilter (countertop RO) of compacte onderbouw osmose het beste: geen verbouwing, geen extra kraan boren, en toch volwaardige filtratie. Een filterkan is goedkoper maar filtert geen PFAS of lood." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
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
            installatiemogelijkheden. Het systeem staat op het aanrecht en sluit aan op de
            bestaande mengkraan via een standaard kraanadapter, die bij de meeste Europese kranen
            past. Geen boorwerk, geen loodgieterswerk, geen toestemming nodig.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanschafprijs bedraagt 200-350 euro. Jaarlijkse filterkosten (sedimentfilter,
            koolblok en RO-membraan) liggen op 60-120 euro. De filterprestaties zijn volledig
            vergelijkbaar met een onderbouw osmosefilter: PFAS-verwijdering 90-99%,
            loodverwijdering 95-99%, nitraat 85-95%. Het systeem is volledig verplaatsbaar bij
            verhuizing. Meer informatie over het kopen van een osmosefilter vindt u op de pagina{" "}
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
            osmose-unit de voordelen van onzichtbare installatie en een aparte gefilterde
            kraantap. Modellen met een breedte van 25-30 cm passen in de meeste
            appartementkasten. Tankless-modellen (zonder opslagvat) zijn extra compact.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Installatie vereist het boren van een extra kraangat in het aanrechtblad of
            de achterwand, plus een slangaansluiting op de koude wateraansluiting onder
            het aanrecht. Aanschafprijs: 300-500 euro. Een afvoerslang voor het concentraatwater
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
            De beperkingen zijn aanzienlijk: een filterkan verwijdert geen PFAS betrouwbaar,
            geen lood, geen nitraat en biedt geen microbiologische bescherming. Voor wie alleen
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
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2">Aanrecht</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Aanrechtfilter (countertop RO)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Kraanadapter</td>
                  <td className="border border-gray-300 px-3 py-2">100-200 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">90-99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                  <td className="border border-gray-300 px-3 py-2">Aanrecht</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Onderbouw osmose</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Boren + toestemming</td>
                  <td className="border border-gray-300 px-3 py-2">80-150 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">90-99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                  <td className="border border-gray-300 px-3 py-2">Onderkast (25+ cm)</td>
                </tr>
              </tbody>
            </table>
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

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
