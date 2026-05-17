import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Twin-tank waterontharder: continu zacht water met duplex systeem",
  description:
    "Twin-tank waterontharder heeft 2 harskolommen voor continu zacht water zonder regeneratiepauze. Ideaal voor gezinnen &gt;4 personen of bedrijven.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterontharder/twin-tank" },
  openGraph: {
    title: "Twin-tank waterontharder: continu zacht water met duplex systeem",
    description:
      "Twin-tank waterontharder heeft 2 harskolommen voor continu zacht water zonder regeneratiepauze. Ideaal voor gezinnen groter dan 4 personen of bedrijven.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Hoe werkt een twin-tank waterontharder?",
    answer:
      "Een twin-tank waterontharder heeft twee harskolommen die afwisselend actief zijn. Kolom A onthardert het water terwijl kolom B regenereert met zout. Zodra kolom A zijn capaciteit bereikt, schakelt het systeem naadloos over naar kolom B. Kolom A start dan zijn regeneratiecyclus. Dit afwisselende gebruik garandeert 24/7 zacht water zonder onderbreking.",
  },
  {
    question: "Wat is het verschil tussen single-tank en twin-tank waterontharder?",
    answer:
      "Een single-tank waterontharder heeft slechts een harskolom. Tijdens de regeneratiecyclus (1-2 uur, meestal 's nachts gepland) levert het systeem geen of hard water. Een twin-tank systeem heeft twee kolommen en schakelt naadloos over, zodat u altijd zacht water heeft. Voor de meeste huishoudens met tijdgepland gebruik is single-tank afdoende; bij constant hoog verbruik of kritische toepassingen is twin-tank de betere keuze.",
  },
  {
    question: "Hoeveel kost een twin-tank waterontharder?",
    answer:
      "Een twin-tank waterontharder kost doorgaans 800-2.500 euro voor aanschaf, plus 300-600 euro voor installatie. Populaire merken: Kinetico (niet-elektrisch, 1.500-3.000 euro), Culligan (1.200-2.500 euro), BWT (900-1.800 euro), Clack (800-1.500 euro). Jaarlijkse zoutkosten zijn vergelijkbaar met twee afzonderlijke single-tank systemen.",
  },
  {
    question: "Is een twin-tank waterontharder efficienter in zoutverbruik?",
    answer:
      "Per liter zacht water verbruikt een twin-tank systeem vergelijkbaar of zelfs minder zout dan twee aparte single-tank systemen. Moderne twin-tank systemen gebruiken metered regeneratie (op verbruik gebaseerd) in plaats van timer-gebaseerde regeneratie. Dit voorkomt onnodige regeneratiecycli en reduceert het zoutverbruik met 20-30% vergeleken met timer-gestuurde single-tank systemen.",
  },
  {
    question: "Heeft een twin-tank waterontharder meer ruimte nodig?",
    answer:
      "Ja, een twin-tank systeem heeft twee harskolommen plus de zoutvaten. De footprint is 30-50% groter dan een single-tank systeem. Typische afmetingen: twee kolommen van elk 20-25 cm diameter, hoogte 100-130 cm, naast elkaar geplaatst. Sommige modellen hebben een compacte naast-elkaar-opstelling; Kinetico-modellen zijn vaak compact door het geintegreerde ontwerp.",
  },
  {
    question: "Voor welke toepassingen is een twin-tank het meest geschikt?",
    answer:
      "Twin-tank waterontharders zijn ideaal bij: huishoudens groter dan 4-5 personen met hoog piekverbruik, meerdere badkamers die gelijktijdig gebruikt worden, professionele toepassingen (horeca, wasserij, kantoor), situaties waar 24/7 zacht water kritisch is (aquarium, medische apparatuur, stoom-sterilisatie) en bij waterontharders die niet tijdgestuurd maar verbruiksgestuurd werken.",
  },
  {
    question: "Wat is een Kinetico waterontharder en waarom niet-elektrisch?",
    answer:
      "Kinetico is een Amerikaans merk dat twin-tank waterontharders maakt die op waterdruk werken, zonder elektriciteit. De regeneratiecyclus wordt aangedreven door waterstroomenergie. Voordelen: geen stroomkosten, werkt ook bij stroomuitval, verbruiksgestuurd (zeer efficient zoutgebruik). Nadeel: hogere aanschafprijs (1.500-3.000 euro) en specifieke service vereist.",
  },
  {
    question: "Hoe verhoudt de twin-tank ontharder zich tot een osmosefilter?",
    answer:
      "Een waterontharder behandelt al het huishoudwater op kalk (calcium en magnesium). Een osmosefilter behandelt alleen het drinkwater op het aanrecht. Ze zijn complementair: een waterontharder beschermt leidingen, apparaten en huid; een osmosefilter levert optimaal drinkwater. Sommige bewoners kiezen voor enkel een osmosefilter voor drinkwater als kalkproblemen mild zijn.",
  },
];

export default function TwinTankPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterontharder", url: "https://waterfilterplatform.nl/waterontharder" },
          { name: "Twin-tank", url: "https://waterfilterplatform.nl/waterontharder/twin-tank" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Twin-tank waterontharder: continu zacht water met duplex systeem",
          description:
            "Twin-tank waterontharder heeft 2 harskolommen voor continu zacht water zonder regeneratiepauze. Ideaal voor gezinnen groter dan 4 personen of bedrijven.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterontharder/twin-tank",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:underline">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Twin-tank</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Twin-tank waterontharder: continu zacht water met duplex systeem
          </h1>
          <QuickAnswer answer="Een twin-tank waterontharder heeft twee harskolommen die afwisselend zacht water leveren. Terwijl de ene kolom regenereert, levert de andere zacht water. Dit garandeert 24/7 zacht water zonder onderbreking. Ideaal voor gezinnen met meer dan 4 personen, hoog waterverbruik of professionele toepassingen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="waterhardheid" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Hoe werkt een twin-tank systeem?
        </h2>
        <p className="text-gray-700 mb-4">
          Een traditionele waterontharder bevat een harsbed van ionenwisselaarkorrels. Deze korrels vangen calcium (Ca2+) en magnesium (Mg2+) ionen op en vervangen ze door natriumionen (Na+). Het water wordt hierdoor zacht. Na verloop van tijd raken de korrels vol calcium en magnesium en moeten ze geregenereerd worden met zout (natriumchloride-pekel).
        </p>
        <p className="text-gray-700 mb-4">
          De regeneratiecyclus duurt 1-2 uur. Bij een single-tank systeem is er gedurende deze periode geen zacht water beschikbaar. Bij een twin-tank systeem (ook wel duplex systeem of alternating dual-tank systeem genoemd) zijn er twee harskolommen. Kolom A onthardert actief het binnenkomende water. Zodra de harskapaciteit van kolom A is bereikt of een verbruiksdrempel, schakelt de stuurkop naadloos over naar kolom B. Kolom A begint dan zijn regeneratiecyclus terwijl kolom B zacht water blijft leveren.
        </p>
        <p className="text-gray-700 mb-6">
          Het resultaat: u heeft altijd zacht water, op elk moment van de dag, zonder pauze of hard watermoment.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Twin-tank versus single-tank: de vergelijking
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Single-tank</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Twin-tank (duplex)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Zacht water beschikbaarheid</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Pauze bij regeneratie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">24/7 continu</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Aanschafprijs</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">500-1.200 euro</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">800-2.500 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Ruimtebehoefte</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Klein</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">30-50% meer</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Zoutverbruik per liter</td>
                <td className="border border-gray-300 px-3 py-2">Variabel</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Efficienter (metered)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Harslevensduur per kolom</td>
                <td className="border border-gray-300 px-3 py-2">10-15 jaar</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">15-20 jaar (minder cycli)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Capaciteit</td>
                <td className="border border-gray-300 px-3 py-2">Enkel harsvolume</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Dubbel harsvolume</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Elektrisch (meestal)</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Variabel (Kinetico niet-elektrisch)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voordelen van een twin-tank waterontharder
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">100% zacht water, geen harde waterperiode</h3>
            <p className="text-gray-700 text-sm">
              Het grootste voordeel: geen enkel moment hard water. Bij single-tank systemen weet u nooit precies wanneer de regeneratiecyclus start. Bij geplande 2-uurs regeneratie om 2 uur 's nachts kan het voorkomen dat er 's avonds vroeg al op hard water overgeschakeld wordt. Twin-tank elimineert dit risico volledig.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Hogere effectieve capaciteit</h3>
            <p className="text-gray-700 text-sm">
              Twee harskolommen betekent dubbel harsvolume en dus dubbele ontharderingscapaciteit. Dit is essentieel bij grote huishoudens of zakelijk gebruik waar het waterverbruik hoog is.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Langere harslevensduur per kolom</h3>
            <p className="text-gray-700 text-sm">
              Elke kolom doorloopt minder regeneratiecycli per jaar omdat de capaciteit over twee kolommen verdeeld is. Minder regeneratiecycli = minder slijtage van het harsbed = langere levensduur (15-20 jaar vs 10-15 jaar voor single-tank).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Efficienter zoutverbruik (metered regeneratie)</h3>
            <p className="text-gray-700 text-sm">
              Twin-tank systemen gebruiken doorgaans verbruiksgestuurde regeneratie: de stuurkop meet de waterflow en start regeneratie alleen wanneer de harskapaciteit werkelijk opgebruikt is. Dit voorkomt onnodige regeneratiecycli en verlaagt het zoutverbruik.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nadelen en aandachtspunten
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Hogere aanschafprijs</h3>
            <p className="text-gray-700 text-sm">
              Twin-tank systemen kosten 800-2.500 euro voor aanschaf, versus 500-1.200 euro voor een goede single-tank waterontharder. De meerprijs is gerechtvaardigd bij hoog verbruik of kritische toepassingen, maar voor een gemiddeld gezin van 2-3 personen is single-tank financieel de betere keuze.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Meer ruimte nodig</h3>
            <p className="text-gray-700 text-sm">
              Twee harskolommen, twee zoutvaten (of een gedeeld groot zoutvat) en de stuurkop vereisen meer installatieruimte. Typisch 60-80 cm breedte voor de kolommen samen. In kleinere meterkastjes of technische ruimtes kan dit een knelpunt zijn.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Complexere installatie</h3>
            <p className="text-gray-700 text-sm">
              Professionele installatie is vereist; zelf installeren is technisch uitdagender dan een single-tank systeem. Installatieprijzen liggen 100-200 euro hoger dan voor single-tank.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een twin-tank de juiste keuze?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Huishoudens groter dan 4-5 personen</strong> met hoog dagelijks waterverbruik.</li>
          <li><strong>Piekverbruiksituaties</strong>: meerdere badkamers die 's ochtends gelijktijdig gebruikt worden.</li>
          <li><strong>Professionele toepassingen</strong>: horeca, wasserijen, kantoren, sportfaciliteiten.</li>
          <li><strong>Kritische toepassingen</strong> waarbij zacht water te allen tijde vereist is: aquarium, medische apparatuur, stoomgeneratoren, professionele wasmachines.</li>
          <li><strong>Harde watergebieden</strong> (boven 25 dH / 446 ppm): snellere harsuitputting, frequentere regeneratie. Twin-tank compenseert dit.</li>
          <li><strong>24/7 actieve bedrijven</strong> waarbij regeneratie tijdens kantooruren onaanvaardbaar is.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Populaire merken en modellen
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Kinetico (niet-elektrisch twin-tank)</h3>
            <p className="text-gray-700 text-sm">
              Kinetico is marktleider in niet-elektrische twin-tank ontharders. Het systeem wordt aangedreven door waterdruk en heeft geen elektriciteitsaansluiting nodig. Regeneratie is volledig verbruiksgestuurd. Aanschafprijs 1.500-3.000 euro. Vereist Kinetico-gecertificeerde installateur voor service en garantie.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Culligan (professioneel segment)</h3>
            <p className="text-gray-700 text-sm">
              Culligan biedt twin-tank systemen voor zowel residentieel als commercieel gebruik. Bekende aanbieder in Nederland met servicenetwerk. Aanschafprijs 1.200-2.500 euro; ook huurmodellen beschikbaar.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">BWT en Clack (prijs-kwaliteit)</h3>
            <p className="text-gray-700 text-sm">
              BWT (Better Water Technology) en Clack bieden twin-tank varianten in het middensegment (800-1.800 euro). Elektrisch aangedreven, digitale stuurkop, configureerbare regeneratiecycli. Goede keuze voor residentieel gebruik met hoog verbruik.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten overzicht twin-tank waterontharder
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Kostenpost</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Single-tank</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Twin-tank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Aanschaf apparaat</td>
                <td className="border border-gray-300 px-3 py-2">500-1.200 euro</td>
                <td className="border border-gray-300 px-3 py-2">800-2.500 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Installatie</td>
                <td className="border border-gray-300 px-3 py-2">200-400 euro</td>
                <td className="border border-gray-300 px-3 py-2">300-600 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Zout per jaar (25 dH, 4 pers.)</td>
                <td className="border border-gray-300 px-3 py-2">80-150 euro</td>
                <td className="border border-gray-300 px-3 py-2">80-150 euro (efficienter)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Onderhoud per jaar</td>
                <td className="border border-gray-300 px-3 py-2">50-100 euro</td>
                <td className="border border-gray-300 px-3 py-2">100-150 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Stroomverbruik per jaar</td>
                <td className="border border-gray-300 px-3 py-2">15-25 euro</td>
                <td className="border border-gray-300 px-3 py-2">15-25 euro (of 0 bij Kinetico)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Voor meer informatie over waterontharders in het algemeen, zie onze{" "}
          <Link href="/waterontharder" className="text-[#005F8A] underline">
            volledige gids over waterontharders
          </Link>. Wilt u weten welke ontharder qua capaciteit past bij uw waterverbruik? Lees dan over{" "}
          <Link href="/waterontharder/capaciteit" className="text-[#005F8A] underline">
            waterontharder capaciteit berekenen
          </Link>. Als alternatief voor een waterontharder kunt u ook een{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen
          </Link>{" "}
          als gerichte drinkwateroplossing.
        </p>

        <CTABanner context="waterhardheid" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">Veelgestelde vragen over twin-tank waterontharders</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="waterhardheid" />
      </div>
    </>
  );
}
