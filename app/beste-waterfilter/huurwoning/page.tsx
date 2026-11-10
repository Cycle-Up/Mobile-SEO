import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { CountertopCTA } from '@/components/CountertopCTA';
import { CountertopRecommendation } from '@/components/CountertopRecommendation';

export const metadata: Metadata = {
  title: "Beste waterfilter voor huurwoning: zonder boren of toestemming",
  description:
    "Huurder? Onze keuze is het PureAqua Water zuiver apparaat: osmose zonder boren of toestemming, 495 euro, heet water tot 95 graden. Plus filterkan en onderbouw.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/beste-waterfilter/huurwoning",
  },
  openGraph: {
    title: "Beste waterfilter voor huurwoning: zonder boren of toestemming",
    description:
      "Onze keuze voor huurders: het PureAqua Water zuiver apparaat (495 euro). Omgekeerde osmose zonder boren of toestemming: stekker erin, tank vullen, klaar. Met remineralisatie en heet water tot 95 graden.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Mag ik zonder toestemming een filter plaatsen?",
    answer:
      "Een filterkan of een countertop-osmose mag u zonder toestemming gebruiken: er wordt niets aan de woning veranderd. Onze keuze, het PureAqua Water zuiver apparaat (495 euro), heeft zelfs geen aansluiting op de kraan nodig: stekker erin, tank vullen, klaar. Een onderbouw osmosefilter vraagt een slangaansluiting op het leidingwerk en een aparte osmosekraan (extra kraangat boren) of een 3-weg-kraan die uw keukenkraan vervangt. Dat zijn aanpassingen aan de woning en vereisen in principe toestemming van de verhuurder. Vraag dit altijd schriftelijk aan.",
  },
  {
    question: "Wat is het verschil met de filteropties voor een appartement?",
    answer:
      "De filteropties voor huurwoning en appartement zijn grotendeels hetzelfde: aanrechtfilter of filterkan zonder installatie, onderbouw osmose alleen met toestemming. Het verschil is dat bij een appartement ook VvE-regels kunnen spelen. In een zelfstandige huurwoning is er uitsluitend de relatie met de verhuurder. Prijzen en filterprestaties verschillen per model, niet per woningtype.",
  },
  {
    question: "Welk filter koop ik als ik weet dat ik binnenkort verhuis?",
    answer:
      "Kies voor een countertop-osmose of een filterkan; beide verhuizen zo mee naar uw volgende woning. Onze keuze, het PureAqua Water zuiver apparaat, kost 495 euro; een AquaTru Classic kost 475 euro (zonder verwarming). Het filter van het Water zuiver apparaat gaat tot 1.200 liter of maximaal 12 maanden mee, dus vervang het kort voor de verhuizing zodat u in de nieuwe woning direct kunt beginnen.",
  },
  {
    question: "Filtert een aanrechtfilter PFAS?",
    answer:
      "Een aanrechtfilter met RO-membraan kan PFAS verminderen. Volgens de Amerikaanse EPA hoort omgekeerde osmose bij de meest effectieve technieken om PFAS te verminderen; hoeveel een specifiek apparaat haalt, hangt af van membraan, filterstaat en waterkwaliteit. Een NSF-certificaat is bij onze keuze niet aangetoond, en voor het Water zuiver apparaat is geen eigen PFAS-percentage gemeten. De EPA noemt ook actieve kool als techniek die PFAS kan verminderen, maar de prestatie verschilt sterk per filter. Een filterkan of eenvoudig koolfilter zonder onderbouwde test biedt die zekerheid niet.",
  },
  {
    question: "Wat zijn de kosten per jaar vergeleken?",
    answer:
      "Filterkan: aanschaf 20-40 euro, patronen 30-50 euro per jaar, totaal onder 60 euro per jaar. Aanrechtfilter (countertop RO): aanschaf bijvoorbeeld 475 euro (AquaTru Classic) of 495 euro (onze keuze, het Water zuiver apparaat); filterkosten verschillen per model, bij onze keuze gaat een filter tot 1.200 liter of maximaal 12 maanden mee. Onderbouw osmose (met toestemming): aanschaf 300 tot 800 euro plus installatie; ook hier verschillen de filterkosten per systeem. Een jaartotaal voor osmose noemen we bewust niet, omdat filterprijzen en levensduur per model verschillen.",
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
            "Huurder? Onze keuze is het PureAqua Water zuiver apparaat: osmose zonder boren of toestemming, 495 euro, heet water tot 95 graden. Plus filterkan en onderbouw.",
          datePublished: "2026-05-29",
          dateModified: "2026-11-03",
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
          <QuickAnswer answer="Onze keuze voor huurders is het PureAqua Water zuiver apparaat (495 euro): omgekeerde osmose zonder vaste installatie, dus geen boren en geen toestemming nodig. Stekker erin, tank vullen, klaar; het voegt mineralen toe en heeft zes temperatuurstanden tot 95 graden. Wilt u alleen een betere smaak voor weinig geld, dan volstaat een filterkan. Transparant: PureAqua, dat dit apparaat verkoopt, is gelieerd aan WaterfilterPlatform." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-11-03" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184', 'US EPA', 'Fabrikantspecificaties', 'PureAqua (prijs, september 2026)', 'bol.com (AquaTru-prijs, september 2026)']} />
        <AuthorBox datePublished="2026-05-29" dateModified="2026-11-03" />
        <CTABanner context="osmose" />

        <CountertopRecommendation content="beste-waterfilter-huurwoning-countertop-aanbeveling" />

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
            Aanrechtfilter: onze keuze voor huurders
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een countertop osmosefilter is volgens ons de beste keuze voor de meeste huurders die
            serieuze filterprestaties willen zonder toestemming te hoeven vragen. Onze keuze, het
            Water zuiver apparaat, heeft geen enkele aansluiting nodig: stekker erin, tank vullen,
            klaar. Andere modellen sluiten aan op de bestaande mengkraan via een standaard
            kraanadapter. Geen boorwerk, geen loodgieterswerk, volledig verwijderbaar en mee te
            nemen bij verhuizing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aanschafprijs: bijvoorbeeld 475 euro (AquaTru Classic) of 495 euro (onze keuze).
            Filterkosten verschillen per model; bij onze keuze gaat een filter tot 1.200 liter of
            maximaal 12 maanden mee. Volgens de Amerikaanse EPA hoort omgekeerde
            osmose bij de meest effectieve technieken om PFAS te verminderen; hoeveel een
            specifiek apparaat haalt, hangt af van membraan, filterstaat en waterkwaliteit. Voor
            het Water zuiver apparaat is geen eigen PFAS-percentage gemeten. Onze keuze staat op
            het aanrecht en meet circa 30 x 22 x 35 cm. Meer informatie over aanrechtfilters met
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
            zit uit het zicht onder het aanrecht en vereist minder aanrechtruimte dan een
            countertop model. U tapt het water uit een aparte osmosekraan, waarvoor een extra
            kraangat nodig is, of uit een 3-weg-kraan die uw keukenkraan vervangt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vraag toestemming altijd schriftelijk. Geef aan dat u bij vertrek een eventueel
            kraangat zult afdichten, de originele keukenkraan terugplaatst en het systeem
            volledig zult verwijderen. De meeste verhuurders gaan hier mee akkoord.
            Aanschafprijs: 300 tot 800 euro plus installatie.
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
            Als u een onderbouw osmosefilter heeft geïnstalleerd met toestemming, verwijdert
            u dit bij vertrek. Sluit een extra kraangat af met een blindplug (kosten: 5-10 euro)
            of plaats de originele keukenkraan terug, en
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
                  <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">PFAS</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Lood</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Verplaatsbaar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
                  <td className="border border-gray-300 px-3 py-2">&lt;60 euro per jaar</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                </tr>
                <tr className="bg-[#F0F9FF]">
                  <td className="border border-gray-300 px-3 py-2 font-medium">
                    <Link href="/countertop-osmose" className="text-[#005F8A] underline">Water zuiver apparaat</Link> (onze keuze, 495 euro)
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Geen: stekker erin, tank vullen</td>
                  <td className="border border-gray-300 px-3 py-2">Filter tot 1.200 liter of 12 maanden</td>
                  <td className="border border-gray-300 px-3 py-2">Osmose; geen eigen labtest</td>
                  <td className="border border-gray-300 px-3 py-2">Osmose; geen eigen labtest</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja, plus verwarming tot 95 graden</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Aanrechtfilter (countertop RO)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Geen boren (tank vullen of kraanadapter)</td>
                  <td className="border border-gray-300 px-3 py-2">Aanschaf bijv. 475 euro (AquaTru Classic); filterkosten per model</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Vermindert (RO); % per apparaat</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Vermindert (RO); % per apparaat</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Onderbouw osmose (met toestemming)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Kraangat of 3-weg-kraan + toestemming</td>
                  <td className="border border-gray-300 px-3 py-2">Aanschaf 300 tot 800 euro plus installatie; filterkosten per systeem</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Vermindert (RO); % per apparaat</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Vermindert (RO); % per apparaat</td>
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
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante pagina&apos;s</h3>
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

        <CountertopCTA context="huur" content="beste-waterfilter-huurwoning-cta" />

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
