import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Kiwa 113 vs NSF/ANSI 58: welke certificering heeft uw osmosefilter nodig?",
  description:
    "Kiwa 113 test materiaalveiligheid, NSF/ANSI 58 test RO-prestaties. Lees het verschil, wat de tests inhouden en waarom beide keurmerken ideaal zijn.",
  alternates: { canonical: "https://waterfilterplatform.nl/drinkwaternormen/kiwa-nsf-ansi" },
  openGraph: {
    title: "Kiwa 113 vs NSF/ANSI 58: welke certificering heeft uw osmosefilter nodig?",
    description:
      "Kiwa 113 test materiaalveiligheid, NSF/ANSI 58 test RO-prestaties. Lees het verschil, wat de tests inhouden en waarom beide keurmerken ideaal zijn.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het fundamentele verschil tussen Kiwa 113 en NSF/ANSI 58?",
    answer:
      "Kiwa 113 is een materiaalveiligheidsnorm: het test of de materialen van het filter geen schadelijke stoffen uitlogen in het drinkwater. NSF/ANSI 58 is een prestatienorm: het test of het osmosefilter daadwerkelijk de geclaimde hoeveelheid contaminanten verwijdert. Beide zijn noodzakelijk voor een betrouwbaar osmosefilter, maar ze testen fundamenteel verschillende aspecten.",
  },
  {
    question: "Welke materialen test Kiwa 113 precies?",
    answer:
      "Kiwa 113 test alle materialen die in contact komen met drinkwater: membraanbehuizing, slangen, O-ringen, fittingen, koppelingen, filters en afdichtingen. Per materiaalsoort worden uitloogparameters gemeten, waaronder zware metalen (lood, cadmium, nikkel, chroom, koper), organische verbindingen, plasticizers en microbiologische verontreiniging. De test simuleert langdurig contact bij representatieve condities.",
  },
  {
    question: "Wat zijn de minimumvereisten van NSF/ANSI 58 voor een osmosefilter?",
    answer:
      "NSF/ANSI 58 vereist minimaal 75% TDS-reductie (Total Dissolved Solids) gemeten bij standaardcondities met 600 ppm TDS inlaatwater. Daarnaast moeten de gecertificeerde contaminanten tot onder de geclaimde reductiegrens worden verwijderd. Elke specifieke claim (lood, arseen, nitraat, etc.) moet afzonderlijk worden getest en aangetoond.",
  },
  {
    question: "Wat zijn de testcondities voor NSF/ANSI 58?",
    answer:
      "Het standaard NSF 58-testprotocol gebruikt inlaatwater van 600 mg/L TDS (parts per million), een watertemperatuur van 25 graden Celsius, een inlaatdruk van 552 kPa (80 psi) en een pH van 7,5. Dit zijn ideaaltypische condities. In de praktijk kan prestatie afwijken bij lagere druk, koudere temperatuur of sterk afwijkende waterkwaliteit.",
  },
  {
    question: "Welke contaminanten worden getest in NSF/ANSI 58?",
    answer:
      "NSF/ANSI 58 test onder andere lood, arseen (pentavalent), barium, cadmium, selenium, fluoride, nitraat, nitrite, radium 226/228, hexavalent chroom en TDS. Niet alle claims zijn verplicht: een fabrikant kiest welke contaminanten worden gecertificeerd. Controleer altijd de specifieke claims in de NSF-databank voor het exacte model.",
  },
  {
    question: "Waarom hebben Chinese osmosefilters vaak geen Kiwa of NSF-certificering?",
    answer:
      "Certificering is kostbaar en tijdrovend. Een volledig NSF 58-traject kost een fabrikant EUR 20.000 tot EUR 80.000 en neemt 6 tot 18 maanden in beslag. Voor fabrikanten die concurreren op prijs, vormen deze kosten een te grote drempel. Het risico voor de consument: er is geen onafhankelijke verificatie of het membraan werkelijk de geclaimde prestaties levert of dat de materialen veilig zijn.",
  },
  {
    question: "Wat kost NSF-certificering voor een fabrikant?",
    answer:
      "NSF International rekent voor een initieel NSF 58-certificeringstraject EUR 20.000 tot EUR 80.000, afhankelijk van het aantal te testen claims en de complexiteit van het systeem. Daarna zijn er jaarlijkse onderhoudskosten van EUR 5.000 tot EUR 15.000 voor herbeoordelingen en fabrieksaudits. Deze kosten zijn de reden waarom alleen gevestigde fabrikanten doorgaans gecertificeerde producten aanbieden.",
  },
  {
    question: "Hoe herken ik een gecertificeerd product aan de fysieke verpakking?",
    answer:
      "Gecertificeerde producten mogen het NSF-logo of Kiwa-keurmerk op de verpakking voeren, inclusief het certificaatnummer en de gecertificeerde claims. Let op: het gebruik van het NSF-logo is wettelijk beschermd, maar in de praktijk wordt het soms misbruikt. Verificatie via de officiele NSF-productdatabank op nsf.org/certified-products is de enige betrouwbare methode.",
  },
  {
    question: "Overlappen NSF/ANSI 42 en 53 met NSF/ANSI 58 voor osmosefilters?",
    answer:
      "Gedeeltelijk. Een osmosesysteem bestaat uit meerdere filterstappen: een koolstofvoorfilter (die NSF 42 of 53-claims kan hebben), het RO-membraan (NSF 58) en een koolstofnafilter (NSF 42). Sommige fabrikanten certificeren het complete systeem onder NSF 58, inclusief de samengestelde prestaties. Andere certificeren elk onderdeel afzonderlijk. Controleer altijd het systeemcertificaat, niet alleen het certificaat van het membraan.",
  },
  {
    question: "Is er een NSF-equivalent voor de Europese markt?",
    answer:
      "Voor materiaalveiligheid is Kiwa 113 (Nederland/Belgie) of ACS (Frankrijk) het Europese equivalent. Voor prestatiecertificering bestaat geen Europese norm die vergelijkbaar is met NSF 58. De Europese waterbehandelingssector gebruikt NSF-certificering als de de facto internationale standaard voor osmosefilter-prestaties, ook buiten Noord-Amerika.",
  },
  {
    question: "Welke certificeringen heeft een goed osmosefilter minimaal nodig?",
    answer:
      "Een betrouwbaar osmosefilter heeft ideaal gezien: Kiwa 113 of ACS (materiaalveiligheid) plus NSF/ANSI 58 (osmoseprestaties, minimaal voor TDS-reductie en loodverwijdering). Deze combinatie dekt zowel de veiligheid van de materialen als de werkelijke filtercapaciteit. Elk keurmerk afzonderlijk is onvolledig.",
  },
];

export default function KiwaNsfAnsiPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "Kiwa vs NSF/ANSI", url: "https://waterfilterplatform.nl/drinkwaternormen/kiwa-nsf-ansi" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Kiwa 113 vs NSF/ANSI 58: welke certificering heeft uw osmosefilter nodig?",
          description:
            "Kiwa 113 test materiaalveiligheid, NSF/ANSI 58 test RO-prestaties. Lees het verschil, wat de tests inhouden en waarom beide keurmerken ideaal zijn.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/kiwa-nsf-ansi",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Kiwa 113 vs NSF/ANSI 58</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kiwa 113 vs NSF/ANSI 58: welke certificering heeft uw osmosefilter nodig?
          </h1>
          <QuickAnswer answer="Kiwa 113 en NSF/ANSI 58 testen fundamenteel verschillende dingen. Kiwa 113 garandeert dat het filtermateriaalgeen schadelijke stoffen uitloogt (materiaalveiligheid). NSF/ANSI 58 garandeert dat het osmosesysteem daadwerkelijk de geclaimde contaminanten verwijdert, met minimaal 75% TDS-reductie. Beide keurmerken zijn ideaal voor een betrouwbaar osmosefilter. Alleen Kiwa zegt niets over filterprestaties; alleen NSF 58 zegt niets over materiaaleigenschappen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Kiwa 113 in detail: wat wordt getest en hoe?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kiwa BRL-K113 is de Nederlandse beoordelingsrichtlijn voor materialen en producten
            die in contact komen met drinkwater. De norm is gebaseerd op Europese richtlijnen
            voor drinkwaterveiligheid en wordt uitgevoerd door het Kiwa-laboratorium in
            Apeldoorn en Rijswijk.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij een Kiwa 113-keuring worden alle onderdelen van het waterbehandelingssysteem
            gedemonteerd en afzonderlijk getest op uitloging. De testprocedure bestaat uit
            meerdere fasen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Uitloogtest:</strong> Het onderdeel wordt gedurende meerdere cycli in
              contact gebracht met testwater bij 23 graden Celsius en bij 60 graden Celsius
              (om worst-case scenario te simuleren).
            </li>
            <li>
              <strong>Chemische analyse:</strong> Het contactwater wordt geanalyseerd op meer
              dan 30 parameters, waaronder lood, cadmium, nikkel, chroom, koper, antimoon,
              arseeen, formaldehyde en andere organische verbindingen.
            </li>
            <li>
              <strong>Microbiologische beoordeling:</strong> Het materiaal mag geen
              microbiologische groei bevorderen die de drinkwaterkwaliteit verslechtert.
            </li>
            <li>
              <strong>Geursensorieel onderzoek:</strong> Het water mag geen afwijkende geur
              of smaak krijgen door contact met het materiaal.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            De uitloogwaarden moeten onder de drempelwaarden van het Drinkwaterbesluit blijven.
            Pas als alle parameters voldoen, ontvangt het product een certificaat met een
            uniek registratienummer. Het certificaat is jaarlijks geldig en wordt herbeoordeeld
            bij productwijzigingen. Zie ook onze{" "}
            <Link href="/drinkwaternormen/waterfilter-certificering" className="text-[#005F8A] hover:underline font-medium">
              algemene pagina over waterfilter certificering
            </Link>{" "}
            voor een volledig keurmerkoverzicht.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            NSF/ANSI 58 in detail: wat wordt gemeten en onder welke condities?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 58 is de internationale standaard voor omgekeerde osmose drinkwatersystemen,
            ontwikkeld door NSF International in samenwerking met ANSI (American National Standards
            Institute). De standaard specificeert zowel prestatievereisten als materiaaleisen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het testprotocol werkt met gestandaardiseerde inlaatcondities:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>TDS-inlaatwater:</strong> 600 mg/L (ppm) &mdash; representatief voor licht gemineraliseerd leidingwater</li>
            <li><strong>Watertemperatuur:</strong> 25 graden Celsius</li>
            <li><strong>Inlaatdruk:</strong> 552 kPa (80 psi)</li>
            <li><strong>pH inlaatwater:</strong> 7,5</li>
            <li><strong>Testduur:</strong> Meerdere weken om langetermijnprestaties te bepalen</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onder deze condities moet het systeem minimaal <strong>75% TDS-reductie</strong> aantonen.
            In de praktijk halen de meeste osmosemembranen 90 tot 98% TDS-reductie, maar de
            NSF 58-norm stelt de minimumdrempel op 75%.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor contaminantverwijdering worden specifieke testoplossingen gebruikt die de
            inlaatconcentratie bepalen. De meest relevante claims zijn:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Lood:</strong> Testvereiste reductie minimaal 95%</li>
            <li><strong>Arseen (pentavalent):</strong> Minimaal 95% reductie</li>
            <li><strong>Barium:</strong> Minimaal 95% reductie</li>
            <li><strong>Selenium:</strong> Minimaal 95% reductie</li>
            <li><strong>Fluoride:</strong> Minimaal 90% reductie</li>
            <li><strong>Nitraat:</strong> Minimaal 82% reductie</li>
            <li><strong>Radium 226/228:</strong> Minimaal 85% reductie</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            NSF/ANSI 42 en 53 vergeleken met 58: overlappende claims
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosesysteem bestaat doorgaans uit drie of meer filterstappen: een sedimentfilter,
            een koolstofvoorfilter, het RO-membraan en een koolstofnafilter. De voorfilter en
            nafilter kunnen afzonderlijk gecertificeerd zijn onder NSF 42 (esthetisch) of NSF 53
            (gezondheid), terwijl het volledige systeem valt onder NSF 58.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In de praktijk certificeren veel fabrikanten het complete osmosesysteem onder NSF 58,
            inclusief de gecombineerde prestaties van alle filterstappen. Dit is de meest
            volledige certificering voor een osmosesysteem. Sommige fabrikanten certificeren
            alleen het membraan-onderdeel, niet het complete systeem; controleer altijd welke
            scope het certificaat dekt.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Waarom Chinese osmosefilters zonder certificering een risico vormen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Op platforms zoals Aliexpress en Amazon worden veel osmosefilters aangeboden voor
            EUR 50 tot EUR 150 zonder enige certificering. De aantrekkelijke prijs heeft een
            verklaring: het overslaan van certificeringskosten bespaart de fabrikant EUR 20.000
            tot EUR 80.000 plus doorlopende auditkosten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De risicos voor de consument zijn tweeledig. Ten eerste prestatiesrisico: zonder NSF 58
            is er geen onafhankelijke verificatie dat het membraan de geclaimde contaminanten
            werkelijk verwijdert. Goedkopere membranen kunnen significant lagere TDS-reductie
            leveren dan de specificaties suggereren. Ten tweede materiaalrisico: zonder Kiwa 113
            of ACS is er geen garantie dat de behuizing, slangen en koppelingen geen schadelijke
            stoffen zoals ftalaten, bisfenol A of zware metalen uitlogen in het gefilterde water.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit betekent niet dat alle ongecertificeerde filters slecht zijn. Het betekent
            wel dat de consument geen onafhankelijk bewijs heeft van de kwaliteit. Voor
            consumenten die filteren om gezondheidsredenen &mdash; zoals bij{" "}
            <Link href="/waterfilter/lood" className="text-[#005F8A] hover:underline font-medium">
              loodproblematiek
            </Link>{" "}
            of PFAS-zorgen &mdash; is het gebrek aan certificering een te groot risico.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Vergelijkingstabel: Kiwa 113 versus NSF/ANSI 58
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Aspect</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Kiwa 113</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">NSF/ANSI 58</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Wat wordt getest</td>
                  <td className="border border-gray-300 px-3 py-2">Uitloging van materialen</td>
                  <td className="border border-gray-300 px-3 py-2">Filterprestaties van het systeem</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Type garantie</td>
                  <td className="border border-gray-300 px-3 py-2">Materiaalveiligheid</td>
                  <td className="border border-gray-300 px-3 py-2">Prestatiegarantie</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Geografisch bereik</td>
                  <td className="border border-gray-300 px-3 py-2">Nederland, Belgie</td>
                  <td className="border border-gray-300 px-3 py-2">Internationaal (Noord-Amerika, Europa)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Certificeringskosten</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 5.000 - EUR 20.000</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 20.000 - EUR 80.000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Geldigheid</td>
                  <td className="border border-gray-300 px-3 py-2">Jaarlijkse herbeoordeling</td>
                  <td className="border border-gray-300 px-3 py-2">Jaarlijkse audit + fabriekscontrole</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Consumentenwaarde</td>
                  <td className="border border-gray-300 px-3 py-2">Geen schadelijke uitloging</td>
                  <td className="border border-gray-300 px-3 py-2">Werkzame contaminantverwijdering</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Controle mogelijk via</td>
                  <td className="border border-gray-300 px-3 py-2">kiwa.com register</td>
                  <td className="border border-gray-300 px-3 py-2">nsf.org/certified-products</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Aanbeveling: gecertificeerd osmosefilter kopen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij het kiezen van een osmosefilter is het advies om te kiezen voor een product
            met beide keurmerken. De combinatie van Kiwa 113 (of ACS) plus NSF/ANSI 58 dekt
            alle relevante aspecten. Een product met alleen NSF 58 heeft geen garantie over
            de materiaalveiligheid van de behuizing; een product met alleen Kiwa 113 heeft
            geen garantie over de daadwerkelijke filterprestaties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u een gecertificeerd osmosefilter kopen? Bekijk onze{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              gids voor osmosefilters kopen
            </Link>{" "}
            of raadpleeg ons overzicht van{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              drinkwaternormen in Nederland
            </Link>{" "}
            voor meer achtergrond over wat filtreren in de Nederlandse context betekent.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heeft u specifiek zorgen over{" "}
            <Link href="/waterfilter/fluor" className="text-[#005F8A] hover:underline font-medium">
              fluoride in uw drinkwater
            </Link>
            ? NSF/ANSI 58 certificeert ook fluorideverwijdering, die voor sommige consumenten
            een relevante claim is. De minimumeis voor fluoride onder NSF 58 is 90% reductie.
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
            <Link href="/keurmerken/kiwa-113" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kiwa Keur 113: NL certificering</h3>
              <p className="text-sm text-gray-600">Wat Kiwa Keur 113 inhoudt voor drinkwatercontact en hoe het zich verhoudt tot NSF/ANSI normen.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58: keurmerk osmose</h3>
              <p className="text-sm text-gray-600">Wat NSF 58 certificering valideert voor osmosefilters en welke verontreinigingen getest zijn.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
