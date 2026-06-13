import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Beste waterfilter voor huurwoning: zonder boren of toestemming",
  description:
    "Huurder? Compacte osmose, aanrechtfilter of filterkan: de beste filteropties voor huurwoningen zonder vaste installatie.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/beste-waterfilter/huurwoning",
  },
  openGraph: {
    title: "Beste waterfilter voor huurwoning: zonder boren of toestemming",
    description:
      "Huurder? Compacte osmose, aanrechtfilter of filterkan: de beste filteropties voor huurwoningen zonder vaste installatie.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Mag ik zonder toestemming een filter plaatsen?",
    answer:
      "Een filterkan of aanrechtfilter dat via een adapter op de bestaande kraan wordt aangesloten, mag u zonder toestemming plaatsen. Er wordt niets aan de woning veranderd. Een onderbouw osmosefilter vereist een extra kraangat (boren) en een slangaansluiting op het leidingwerk. Dat zijn aanpassingen aan de woning en vereisen in principe toestemming van de verhuurder. Vraag dit altijd schriftelijk aan.",
  },
  {
    question: "Wat is het verschil met de filteropties voor een appartement?",
    answer:
      "De filteropties voor huurwoning en appartement zijn grotendeels hetzelfde: aanrechtfilter of filterkan zonder installatie, onderbouw osmose alleen met toestemming. Het verschil is dat bij een appartement ook VvE-regels kunnen spelen. In een zelfstandige huurwoning is er uitsluitend de relatie met de verhuurder. De technische opties en kosten zijn identiek.",
  },
  {
    question: "Welk filter koop ik als ik weet dat ik binnenkort verhuist?",
    answer:
      "Kies voor een aanrechtfilter (countertop osmose) of filterkan. Beide zijn volledig verplaatsbaar en gaan eenvoudig mee naar uw volgende woning. Een aanrechtfilter met RO-membraan kost 200-350 euro en gaat 5-8 jaar mee. Vervang de filterpatronen voor de verhuizing zodat u in de nieuwe woning direct kunt beginnen.",
  },
  {
    question: "Filtert een aanrechtfilter PFAS?",
    answer:
      "Ja, als het systeem een RO-membraan bevat. Een countertop osmosefilter met RO-technologie verwijdert PFAS voor 90-99%, lood voor 95-99% en nitraat voor 85-95%. Controleer altijd of het model een RO-membraan heeft en of het NSF/ANSI 58 gecertificeerd is. Een eenvoudig aanrechtfilter met alleen koolstoffilter (zonder RO-membraan) biedt deze bescherming niet.",
  },
  {
    question: "Wat zijn de kosten per jaar vergeleken?",
    answer:
      "Filterkan: aanschaf 20-40 euro, patronen 30-50 euro per jaar, totaal onder 60 euro per jaar. Aanrechtfilter (countertop RO): aanschaf 200-350 euro, patronen 60-120 euro per jaar, totaal inclusief afschrijving over 6 jaar: 90-180 euro per jaar. Onderbouw osmose (met toestemming): aanschaf 300-500 euro, patronen 60-120 euro per jaar, totaal inclusief afschrijving: 110-200 euro per jaar.",
  },
];

export default function HuurwoningPage() {
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
            name: "Huurwoning",
            url: "https://waterfilterplatform.nl/beste-waterfilter/huurwoning",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Beste waterfilter voor huurwoning: zonder boren of toestemming",
          description:
            "Huurder? Compacte osmose, aanrechtfilter of filterkan: de beste filteropties voor huurwoningen zonder vaste installatie.",
          datePublished: "2026-05-17",
          url: "https://waterfilterplatform.nl/beste-waterfilter/huurwoning",
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
            <span>Huurwoning</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterfilter voor huurwoning
          </h1>
          <QuickAnswer answer="Voor huurders zijn een aanrechtfilter (countertop osmose) of filterkan de beste keuzes — geen boren, geen toestemming nodig. Een aanrechtfilter filtert vergelijkbaar met een onderbouw osmosefilter en is volledig verplaatsbaar." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Wat mag en kan in een huurwoning
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als huurder mag u geen permanente aanpassingen doen aan de woning zonder
            toestemming van de verhuurder. Drie concrete beperkingen spelen bij waterfilters
            een rol: u mag niet boren in het aanrechtblad of de achterwand voor een extra
            kraangat, u mag de bestaande kraan niet vervangen door een andere kraan zonder
            toestemming, en u mag geen nieuwe slangaansluitingen aftappen op het leidingwerk
            achter de afsluitkraan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit sluit een klassiek onderbouw osmosefilter in principe uit, tenzij u vooraf
            schriftelijk toestemming vraagt. In de praktijk geven veel verhuurders toestemming
            als u aangeeft dat u de woning bij vertrek in originele staat terugbrengt. Maar
            er zijn uitstekende alternatieven die helemaal geen aanpassingen vereisen.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Aanrechtfilter als beste keuze
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een countertop osmosefilter is de beste keuze voor de meeste huurders die serieuze
            filterprestaties willen zonder toestemming te hoeven vragen. Het systeem sluit aan
            op de bestaande mengkraan via een standaard kraanadapter. Geen boorwerk, geen
            loodgieterswerk, volledig verwijderbaar en mee te nemen bij verhuizing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aanschafprijs: 200-350 euro. Jaarlijkse filterkosten: 60-120 euro. Filterprestaties:
            PFAS 90-99%, lood 95-99%, nitraat 85-95%. Het systeem staat op het aanrecht en
            neemt ca. 15-20 cm breedte in beslag. Meer informatie over aanrechtfilters met
            RO-technologie vindt u op{" "}
            <Link
              href="/omgekeerde-osmose/kopen"
              className="text-[#005F8A] hover:underline font-medium"
            >
              osmosefilter kopen
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Filterkan voor minimaal budget
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een filterkan (Brita, BWT) vereist geen installatie en is de goedkoopste optie.
            Aanschaf: 20-40 euro. Filterpatronen: 30-50 euro per jaar. De kan heeft een
            capaciteit van 2-3 liter en moet elke 4-6 weken worden gewisseld.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De filterkan verwijdert effectief chloor, geur en smaak, en vermindert deels de
            waterhardheid. Beperkingen: geen betrouwbare PFAS-verwijdering, geen lood
            (ionenwisselaar heeft beperkte loodcapaciteit), geen nitraat, geen microbiologische
            bescherming. Voor wie alleen de smaak wil verbeteren, volstaat een filterkan.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Onderbouw osmose met toestemming
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als u van plan bent lang in de huurwoning te blijven en toestemming kunt krijgen
            van de verhuurder, is een onderbouw osmosefilter een overweging waard. Het systeem
            zit uit het zicht onder het aanrecht, heeft een aparte gefilterde kraantap en
            vereist minder aanrechtruimte dan een countertop model.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vraag toestemming altijd schriftelijk. Geef aan dat u het kraangat bij vertrek
            zult afdichten en het systeem volledig zult verwijderen. De meeste verhuurders
            gaan hier mee akkoord. Aanschafprijs: 300-500 euro. Kosten installatie door een
            loodgieter: 60-150 euro.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Meenemen bij verhuizing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle filteropties die geen vaste installatie vereisen, zijn eenvoudig mee te nemen
            bij verhuizing: de filterkan, het aanrechtfilter en een eventuele inline-filter
            voor de koelkast. Vervang de filterpatronen kort voor de verhuizing zodat u in de
            nieuwe woning direct kunt beginnen met gefilterd water op optimale prestaties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als u een onderbouw osmosefilter heeft geinstalleerd met toestemming, verwijdert
            u dit bij vertrek. Sluit het kraangat af met een blindplug (kosten: 5-10 euro) en
            sluit de wateraansluitingen onder het aanrecht terug aan op de originele
            configuratie. Documenteer dit met foto's bij oplevering.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Vergelijking filteropties voor huurwoning
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
                  <th className="border border-gray-300 px-3 py-2 text-left">Verplaatsbaar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
                  <td className="border border-gray-300 px-3 py-2">&lt;60 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Aanrechtfilter (countertop RO)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Kraanadapter, geen boren</td>
                  <td className="border border-gray-300 px-3 py-2">90-180 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">90-99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Onderbouw osmose (met toestemming)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Boren + toestemming</td>
                  <td className="border border-gray-300 px-3 py-2">110-200 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">90-99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Na verwijdering</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">
            Veelgestelde vragen over waterfilter in huurwoning
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
              <Link href="/beste-waterfilter/appartement" className="text-[#005F8A] hover:underline">
                Beste waterfilter voor appartement
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp/huurwoning" className="text-[#005F8A] hover:underline">
                Waterfilter in huurwoning: keuzehulp
              </Link>
            </li>
            <li>
              <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] hover:underline">
                Actief koolfilter zonder installatie
              </Link>
            </li>
            <li>
              <Link href="/stoffen-in-drinkwater/chloor-bijproducten" className="text-[#005F8A] hover:underline">
                Chloor in leidingwater
              </Link>
            </li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keuzehulp/huurwoning" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter in huurwoning keuzehulp</h3>
              <p className="text-sm text-gray-600">Welke filters u zonder verhuurdertoestemming mag installeren in een huurwoning.</p>
            </Link>
            <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Installatietype zonder verbouwing</h3>
              <p className="text-sm text-gray-600">Onderbouw, aanrecht of inline: welk type past bij een huurwoning zonder verbouwing.</p>
            </Link>
          </div>
        </section>

        <AffiliateCTA
          destination="countertopRo"
          campaign="omgekeerde-osmose"
          content="beste-waterfilter-huurwoning-cta"
          label="Osmose zonder installatie (ideaal voor huur)"
          title="Osmose zonder installatie?"
          sub="De Countertop RO is een plug-and-play osmose-apparaat zonder installatie bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
