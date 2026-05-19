import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Kokend water kraan kinderveiligheid: veiligheidsventiel en vergrendeling",
  description:
    "Kokend water kraan kinderveiligheid: verplicht veiligheidsventiel, dubbele activering, sproeibescherming. Brandwondrisico kinderen. Veiligste modellen 2026.",
  alternates: { canonical: "https://waterfilterplatform.nl/kokend-water-kraan/kinderveiligheid" },
  openGraph: {
    title: "Kokend water kraan kinderveiligheid: veiligheidsventiel en vergrendeling",
    description:
      "Kokend water kraan kinderveiligheid: verplicht veiligheidsventiel, dubbele activering, sproeibescherming. Brandwondrisico kinderen. Veiligste modellen 2026.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is een kokend water kraan veilig als je kleine kinderen hebt?",
    answer:
      "Moderne kokend water kranen zijn ontworpen met meerdere veiligheidssystemen specifiek voor gezinnen met kinderen: een dubbele activering (twee gelijktijdige handelingen vereist), een kindervergrendeling met mechanische of PIN-blokkade, een geinsuleerde uitloop die niet heet aanvoelt, en een laminaire waterstraal die spatten minimaliseert. Bij correct gebruik en bij het altijd activeren van de kindervergrendeling is het risico op brandwonden zeer laag.",
  },
  {
    question: "Wat is het verschil in verbrandingsrisico tussen 100 graden en 60 graden water?",
    answer:
      "Het verschil is enorm. Water van 60 graden (gewone warmwaterkraan) veroorzaakt een volledige huidverbranding pas na 5 seconden contact. Water van 100 graden (kokend water kraan) veroorzaakt een derdegraads brandwond al binnen 0,5 seconden. Snelheid van contact is daarom cruciaal: zelfs een heel kort aanraking met 100 graden water kan ernstig letsel veroorzaken bij een kind.",
  },
  {
    question: "Hoe werkt de dubbele activering van een kokend water kraan?",
    answer:
      "De dubbele activering vereist twee gelijktijdige of opeenvolgende handelingen om kokend water te activeren. Bij Quooker moet u de hendel indrukken en draaien tegelijk. Bij andere merken zijn het twee aparte knoppen die tegelijk ingedrukt moeten worden. Een kind dat aan een hendel trekt of een knop indrukt, krijgt nooit per ongeluk kokend water. Alleen als beide handelingen correct worden uitgevoerd, stroomt er kokend water.",
  },
  {
    question: "Moet de kindervergrendeling altijd aan staan?",
    answer:
      "Ja, de kindervergrendeling moet altijd geactiveerd zijn zolang er kinderen in huis zijn die de keuken kunnen bereiken. De vergrendeling kost u bij gebruik slechts enkele extra seconden. Vergeet niet de vergrendeling opnieuw te activeren na elk gebruik. Leer ook andere volwassenen in het huishouden om dit consequent te doen.",
  },
  {
    question: "Op welke hoogte moet ik de kokend water kraan monteren?",
    answer:
      "Voor gezinnen met kinderen wordt aanbevolen de kraan te monteren met de uitloop op minimaal 60 cm boven het aanrechtblad, of de kraan te plaatsen aan de achterkant van het aanrecht, zo ver mogelijk van de rand. Zorg er ook voor dat er geen kruk, opstapje of stoel in de buurt staat waarmee een kind bij de kraan kan komen. De kraan achteraan het aanrechtblad monteren is de meest veilige keuze.",
  },
  {
    question: "Wat moet ik doen bij een brandwond door kokend water?",
    answer:
      "Koel de brandwond onmiddellijk 10 tot 20 minuten onder koel (niet koud, niet ijskoud) stromend water. Verwijder kleding of sieraden rond de wond, tenzij deze aan de huid plakken. Prik geen blaren door. Dek de wond af met een steriel verband of schone doek. Bel bij een groot verbrand oppervlak of bij een kind jonger dan 5 jaar altijd direct 112 of ga naar de spoedeisende hulp. Breng nooit boter, tandpasta of andere middelen aan op een brandwond.",
  },
  {
    question: "Is een kokend water kraan gevaarlijker dan een waterkoker?",
    answer:
      "In de praktijk is een kokend water kraan veiliger dan een waterkoker. Een waterkoker kan omvallen, waardoor liters kokend water over een kind worden gegoten. De kraan staat vast en geeft water in een gecontroleerde, laminaire straal zonder omvalrisico. Bovendien is de kokend water kraan altijd voorzien van meerdere veiligheidssystemen die op een standaard waterkoker ontbreken. Statistisch gezien zijn de meeste brandwonden bij kinderen thuis door omgevallen waterkokers.",
  },
  {
    question: "Hebben alle merken kokend water kranen een kindervergrendeling?",
    answer:
      "De meeste gerenommeerde merken zoals Quooker, Grohe Red, Franke, Dekker en InSinkErator hebben standaard een kindervergrendeling. Bij goedkopere merken of onbekende webwinkel-modellen is dit niet altijd het geval. Controleer voor aankoop altijd of het model een gecertificeerde kindervergrendeling heeft en of het voldoet aan de Europese veiligheidsnormen. Een kraan zonder kindervergrendeling is voor gezinnen met kinderen niet geschikt.",
  },
];

export default function KinderveiligheidPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Kokend water kraan", url: "https://waterfilterplatform.nl/kokend-water-kraan" },
          { name: "Kinderveiligheid", url: "https://waterfilterplatform.nl/kokend-water-kraan/kinderveiligheid" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Kokend water kraan kinderveiligheid: hoe veilig is het?",
          description:
            "Kokend water kraan kinderveiligheid: verplicht veiligheidsventiel, dubbele activering, sproeibescherming. Brandwondrisico kinderen. Veiligste modellen 2026.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/kokend-water-kraan/kinderveiligheid",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Kinderveiligheid</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan kinderveiligheid: hoe veilig is het?
          </h1>
          <QuickAnswer answer="Moderne kokend water kranen hebben meerdere veiligheidssystemen: een dubbele activering (twee handelingen voor kokend water), een veiligheidsventiel dat overdruk voorkomt, en een sproeibeschermde uitloop. Het risico op brandwonden is bij correct gebruik minimaal, maar de kraan moet altijd buiten bereik van kleine kinderen worden geplaatst." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="kokend" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Risicoprofiel: 100 graden vs gewoon warm water
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Water van 100 graden Celsius is een van de gevaarlijkste vloeistoffen in een doorsnee keuken.
            Het verschil met gewoon warm water (60 graden uit de warmwaterkraan) is niet gradueel maar
            fundamenteel: hoe hoger de temperatuur, hoe sneller weefselschade optreedt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij 60 graden water duurt het vijf seconden om een volledig huidverbranding te veroorzaken.
            Bij 100 graden is dat al na 0,5 seconden het geval. Voor een jong kind, met dunnere en
            kwetsbaardere huid dan een volwassene, is de grens nog korter. Dit betekent dat zelfs een
            heel vluchtig contact met kokend water al tot derdegraads brandwonden kan leiden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elke jaar lopen in Nederland honderden kinderen onder de vijf jaar brandwonden op door hete
            vloeistoffen. Hete dranken en omgevallen waterkokers zijn de meest voorkomende oorzaak.
            Kokend water kranen zijn in de statistieken nog nauwelijks zichtbaar, wat aangeeft dat de
            veiligheidssystemen in de praktijk goed werken.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Standaard veiligheidssystemen op kokend water kranen
          </h2>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Dubbele activering</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het meest fundamentele veiligheidssysteem is de dubbele activering: om kokend water te krijgen
            moet u twee gelijktijdige of opeenvolgende handelingen uitvoeren. Bij Quooker is dat het
            indrukken en draaien van de hendel tegelijkertijd. Bij andere merken zijn het twee knoppen die
            gelijktijdig ingedrukt moeten worden. Een kind dat aan een hendel trekt of op een knop drukt,
            triggert nooit per ongeluk de kookwaterstand.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Veiligheidsventiel</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het veiligheidsventiel in de boiler voorkomt dat overdruk opbouwt en zorgt voor een
            gecontroleerde drukafvoer als de temperatuur te hoog oploopt. Dit is cruciaal: zonder ventiel
            zou een defecte boiler theoretisch kunnen exploderen of kunnen spuiten. Het veiligheidsventiel
            is in alle Europese kokend water kranen verplicht en wordt periodiek getest bij onderhoud.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Kindervergrendeling</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Naast de dubbele activering bieden de meeste merken een aparte kindervergrendeling: een
            mechanische blokkade die de hendel of de kookwaterknop compleet inactief maakt totdat u een
            specifieke ontgrendelingshandeling uitvoert. Bij sommige modellen is dit een PIN-code, bij
            andere een mechanisch vergrendelingspennetje. Activeer de kindervergrendeling na elk gebruik.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Sproeibescherming en laminaire straal</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De uitloop van een kokend water kraan is ontworpen om een laminaire (gladde, niet-spattende)
            waterstraal te produceren. Dit voorkomt dat waterdruppeltjes wegspringen en iemand anders
            raken. Een turbulente straal zou spatten en daarmee het risico op huidcontact vergroten.
            Goede kokend water kranen zijn voorzien van een speciale tuit die deze laminaire stroming
            garandeert.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Geinsuleerde uitloop</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De buitenkant van de kraan en uitloop wordt niet heet, ook al stroomt er 100 graden water
            doorheen. Dit is mogelijk door dubbele wanden en isolatiemateriaal in de tuit. Zelfs als een
            kind de kraan aanraakt (buiten het watergebied), is er geen verbrandingsrisico door contact
            met de kraanbehuizing.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Quooker veiligheidsontwerp
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Quooker, de marktleider in Nederland, gebruikt het zogenaamde SVKW-systeem (Stichting
            Vakgroep Kokend Water). De hendel vereist een gelijktijdige push-en-draai-beweging: u duwt
            de hendel naar beneden en draait hem tegelijk. Dit is voor kleine kinderhanden praktisch
            onuitvoerbaar. Bovendien heeft Quooker een aparte kindervergrendeling die de draaifunctie
            volledig blokkeert. De boiler werkt op hoge druk (10 bar) maar is voorzien van meervoudige
            veiligheidsklepsystemen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Vergelijkingstabel veiligheidsfuncties per merk
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Merk</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Dubbele activering</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Kindervergrendeling</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Geinsuleerde uitloop</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Veiligheidsventiel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Quooker</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja (push + draaien)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja (mechanisch)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Grohe Red</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja (tweedelig)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">InSinkErator</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Onbekende merken</td>
                  <td className="border border-gray-300 p-3 text-orange-600">Soms</td>
                  <td className="border border-gray-300 p-3 text-red-600">Niet altijd</td>
                  <td className="border border-gray-300 p-3 text-orange-600">Soms</td>
                  <td className="border border-gray-300 p-3 text-green-700">Verplicht (EU)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Praktisch advies voor gezinnen met kinderen
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Montage hoogte:</strong> Monteer de kraan zo ver mogelijk naar achter op het aanrechtblad,
              minimaal 60 cm boven het werkoppervlak. Hoe moeilijker bereikbaar, hoe beter.
            </li>
            <li>
              <strong>Kindervergrendeling altijd aan:</strong> Activeer de kindervergrendeling na elk gebruik,
              ook als u even naar de andere kamer loopt. Maak het een vaste gewoonte, vergelijkbaar met het
              afsluiten van een kinderveiligheidsslot.
            </li>
            <li>
              <strong>Geen opstapjes in de buurt:</strong> Zorg dat er geen kruk, stoel, speelgoed of opstapje
              onder of naast het aanrecht staat waarmee een kind bij de kraan kan komen.
            </li>
            <li>
              <strong>Uitleg aan kinderen:</strong> Leg kinderen vanaf 6 jaar uit wat de kraan doet en waarom
              ze er nooit zelf aan mogen zitten. Kinderen begrijpen gevaar beter dan we soms denken.
            </li>
            <li>
              <strong>Nooit alleen in de keuken:</strong> Laat kinderen onder de 6 jaar nooit zonder toezicht
              in de keuken als de kokend water kraan in gebruik is of recent is gebruikt.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Kokend water kraan vs waterkoker: wat is veiliger?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Verrassend genoeg is een kokend water kraan in de praktijk veiliger dan een traditionele
            waterkoker. Een waterkoker staat los op het aanrecht, heeft een snoer dat een kind aan kan
            trekken, en kan omvallen waarbij liters kokend water worden uitgestort. De kokend water kraan
            staat vast gemonteerd, heeft geen snoer op het werkoppervlak, en geeft water in een
            gecontroleerde straal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bovendien zijn kokend water kranen voorzien van meerdere specifieke veiligheidssystemen die
            op een standaard waterkoker volledig ontbreken. Kindervriendelijke gezinnen die veiligheid
            prioriteren, doen er verstandig aan te investeren in een kokend water kraan van een gerenommeerd
            merk in plaats van een waterkoker te blijven gebruiken.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u meer weten over de verschillende modellen?{" "}
            <Link href="/kokend-water-kraan/merken-vergelijking" className="text-[#005F8A] hover:underline font-medium">
              Bekijk onze merken vergelijking
            </Link>{" "}
            voor een gedetailleerd overzicht van alle veiligheidsfuncties per model. Of lees meer over de{" "}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] hover:underline font-medium">
              kokend water kraan in het algemeen
            </Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Overweegt u ook een filter bij uw kokend water kraan?{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              Een osmosefilter gecombineerd met kokend water
            </Link>{" "}
            geeft u zowel zuiver als veilig kokend drinkwater.
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
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering en veiligheidsnormen</h3>
              <p className="text-sm text-gray-600">CE-markering (EN 61770) en NEN 1006 bepalen welke veiligheidseisen gelden voor kokend water kranen in Nederland.</p>
            </Link>
            <Link href="/keuzehulp/baby-gezin" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Veilig water voor baby's en kinderen</h3>
              <p className="text-sm text-gray-600">Waterfilter kiezen voor gezinnen met baby's: welke verontreinigingen extra risico vormen en welk filter beschermt.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="kokend" />
      </div>
    </>
  );
}
