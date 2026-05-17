import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterontharder zoutverbruik: berekening en bespaartips",
  description:
    "Waterontharder zoutverbruik: 3-8 kg zout per m3 onthard water. Bereken jaarverbruik per gezin. Efficientieklassen A/B/C. Bespaartips voor minder zout.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/waterontharder/zout-verbruik",
  },
  openGraph: {
    title: "Waterontharder zoutverbruik: berekening en bespaartips",
    description:
      "Bereken het zoutverbruik van uw waterontharder. Efficientieklassen A/B/C en tips om zout te besparen.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Hoeveel zout verbruikt een waterontharder per jaar?",
    answer:
      "Een gemiddeld gezin van 4 personen in een gebied met 20 dH (hard water) verbruikt 80 tot 150 kg zout per jaar. Bij zachter water (15 dH) en 2 personen kan dit dalen naar 40-70 kg per jaar. Bij zeer hard water (25 dH) en een groot gezin kan het oplopen tot 150-200 kg per jaar.",
  },
  {
    question: "Wat is het verschil tussen efficientieklassen A, B en C bij waterontharders?",
    answer:
      "Klasse A verbruikt minder dan 100 gram zout per liter harsreductiecapaciteit en is het zuinigst. Klasse B verbruikt 100-150 gram per liter, klasse C meer dan 150 gram per liter. Een klasse A-ontharder bespaart 30-50% zout ten opzichte van klasse C. Bij een nieuw toestel is klasse A de aanbevolen keuze.",
  },
  {
    question: "Hoe bereken ik het zoutverbruik van mijn waterontharder?",
    answer:
      "Gebruik de formule: dagwaterverbruik (liter) vermenigvuldigd met de waterhardheid in mmol/L, vermenigvuldigd met de zoutfactor (circa 5 gram per mmol) en gedeeld door 1000. Voor een gezin van 4 personen dat 480 liter per dag verbruikt bij 3,6 mmol hardheid: 480 x 3,6 x 5 / 1000 = 8,6 kg zout per maand, ofwel circa 103 kg per jaar.",
  },
  {
    question: "Wat is beter: tabletzout, pellets of blokzout voor mijn waterontharder?",
    answer:
      "Tabletzout en pellets zijn beide geschikte keuzes voor de meeste ontharders. Pellets lossen iets gelijkmatiger op. Blokzout is minder gangbaar en past niet altijd in het zoutreservoir. Kies altijd voor puur NaCl zonder additieven, tenzij de fabrikant specifiek aanbeveelt een variant met harsreiniger te gebruiken.",
  },
  {
    question: "Kan ik het zoutverbruik van mijn waterontharder verlagen?",
    answer:
      "Ja. De meest effectieve maatregel is overschakelen van tijdgestuurde naar volumegestuurde regeneratie: dit bespaart tot 40% zout omdat de ontharder alleen regenereert wanneer dat daadwerkelijk nodig is. Verder helpt het instellen van de juiste hardheidscorrectie, het controleren van de regeneratiefrequentie en het verminderen van het waterverbruik in huis.",
  },
  {
    question: "Wat kost zout voor een waterontharder per jaar?",
    answer:
      "Tabletzout kost 15 tot 25 euro per zak van 25 kg. Bij een jaarverbruik van 80-150 kg betaalt een gemiddeld gezin 48-150 euro per jaar aan zout. Duurdere pellets of speciale harsreinigingszout kosten 20-30 euro per 25 kg. De totale zoutkosten zijn daarmee 60-250 euro per jaar, afhankelijk van gezinsgrootte en waterhardheid.",
  },
  {
    question: "Is het schadelijk voor het milieu om zout te lozen via een waterontharder?",
    answer:
      "Zout (natriumchloride) dat bij regeneratie vrijkomt belandt via het riool bij de rioolwaterzuivering. Zuiveringsinstallaties zijn niet ontworpen om chloride te verwijderen; het belandt uiteindelijk in oppervlaktewater. In gebieden met zachter water (onder de 15 dH) is het milieueffect beperkt. In harde watergebieden wordt soms afgeraden om te ontharder te gebruiken voor al het huishoudwater.",
  },
  {
    question: "Moet ik mijn waterontharder instellen op mijn lokale waterhardheid?",
    answer:
      "Ja. Een verkeerde instelling leidt tot te frequent of te zelden regenereren. Bij te frequente regeneratie verspilt u zout; bij te zeldzame regeneratie raakt het harsbed uitgeput en loopt hard water door. Controleer de waterhardheid in uw gemeente via waterfilterplatform.nl en stel de ontharder in op de juiste waarde.",
  },
];

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
  headline: "Waterontharder zoutverbruik berekenen en verminderen",
  description:
    "Waterontharder zoutverbruik: 3-8 kg zout per m3 onthard water. Bereken jaarverbruik per gezin. Efficientieklassen A/B/C. Bespaartips voor minder zout.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  url: "https://waterfilterplatform.nl/waterontharder/zout-verbruik",
  publisher: {
    "@type": "Organization",
    name: "WaterfilterPlatform",
    url: "https://waterfilterplatform.nl",
  },
};

export default function ZoutVerbruikPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://waterfilterplatform.nl",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Waterontharder",
                item: "https://waterfilterplatform.nl/waterontharder",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Zoutverbruik waterontharder",
                item: "https://waterfilterplatform.nl/waterontharder/zout-verbruik",
              },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:underline">
              Waterontharder
            </Link>
            <span className="mx-2">/</span>
            <span>Zoutverbruik</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder zoutverbruik berekenen en verminderen
          </h1>
          <QuickAnswer answer="Een gemiddeld gezin (4 personen, 20 dH) verbruikt 80-150 kg zout per jaar in een waterontharder. Het verbruik hangt af van de waterhardheid, het waterverbruik en de efficientieklasse van de ontharder. Efficienter regenereren (klasse A) kan het zoutverbruik met 30-50% verminderen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Hoe gebruikt een waterontharder zout?
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder werkt via het principe van ionenwisseling. In het harsbed zitten
          ionenwisselaarskorrels die geladen zijn met natriumionen (Na+). Wanneer hard water door het
          harsbed stroomt, worden de kalk- en magnesiumionen (Ca2+ en Mg2+) uitgewisseld tegen
          natriumionen. Het water dat de ontharder verlaat is daardoor ontdaan van de ionen die
          verantwoordelijk zijn voor kalkaanslag.
        </p>
        <p className="text-gray-700 mb-4">
          Na verloop van tijd raken de harskorrels verzadigd met calcium- en magnesiumionen en moet het
          harsbed worden geregenereerd. Tijdens regeneratie wordt een zoutoplossing (pekel) door het
          harsbed gespoeld: de natriumionen verdringen de kalk- en magnesiumionen, die via het afvoerwater
          worden afgevoerd. Het harsbed is daarna weer klaar voor gebruik.
        </p>
        <p className="text-gray-700 mb-6">
          Het zoutverbruik van een waterontharder hangt dus direct samen met de regeneratiefrequentie
          en de hoeveelheid zout die per regeneratiecyclus wordt gebruikt. Hoe vaker de ontharder
          regenereert en hoe minder efficient de regeneratie, hoe meer zout er per liter onthard water
          wordt verbruikt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Efficientieklassen: A, B en C
        </h2>
        <p className="text-gray-700 mb-4">
          Waterontharders worden ingedeeld in efficientieklassen op basis van hun zoutverbruik per liter
          harsreductiecapaciteit:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Klasse</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Zoutverbruik per liter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Typisch jaarverbruik (4 pers, 20 dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Beoordeling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">A</td>
                <td className="border border-gray-300 px-3 py-2">&lt;100 g/L</td>
                <td className="border border-gray-300 px-3 py-2">60-90 kg</td>
                <td className="border border-gray-300 px-3 py-2 text-green-600">Zuinig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">B</td>
                <td className="border border-gray-300 px-3 py-2">100-150 g/L</td>
                <td className="border border-gray-300 px-3 py-2">90-130 kg</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-600">Gemiddeld</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">C</td>
                <td className="border border-gray-300 px-3 py-2">&gt;150 g/L</td>
                <td className="border border-gray-300 px-3 py-2">130-200 kg</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Minder efficient</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Klasse A-ontharders regenereren doorgaans volumegestuurd en gebruiken de optimale hoeveelheid
          zout per regeneratiecyclus. Klasse C-ontharders zijn vaak ouder, tijdgestuurd en regenereren
          ook wanneer het niet nodig is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Berekeningsformule voor zoutverbruik
        </h2>
        <p className="text-gray-700 mb-4">
          Met de volgende formule berekent u het geschatte zoutverbruik van uw waterontharder:
        </p>
        <div className="bg-[#F0F9FF] border border-[#005F8A]/30 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm text-gray-800">
            Zoutverbruik (kg/jaar) = dagwaterverbruik (L) &times; hardheid (mmol/L) &times; zoutfactor (g/mmol) &divide; 1000 &times; 365
          </p>
        </div>
        <p className="text-gray-700 mb-4">
          <strong>Voorbeeld:</strong> Gezin van 4 personen, dagverbruik 480 liter (4 &times; 120 L),
          waterhardheid 20 dH (= 3,6 mmol/L), efficientieklasse B (zoutfactor 5 g/mmol):
        </p>
        <div className="bg-[#F0F9FF] border border-[#005F8A]/30 rounded-lg p-4 mb-6">
          <p className="font-mono text-sm text-gray-800">
            480 &times; 3,6 &times; 5 / 1000 &times; 365 = 3.153 / 1000 &times; 365 = 3,15 kg/dag &rarr; 1.150 kg/jaar
          </p>
          <p className="text-sm text-gray-600 mt-2">
            (Let op: dit is een vereenvoudigde berekening; in de praktijk produceert de ontharder niet
            100% van het waterverbruik en is het werkelijke verbruik 80-150 kg/jaar)
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verbruik per gezinsgrootte en waterhardheid
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Personen</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Hardheid (dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Verbruik per jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Zoutkosten per jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">2 personen</td>
                <td className="border border-gray-300 px-3 py-2">15 dH</td>
                <td className="border border-gray-300 px-3 py-2">50-70 kg</td>
                <td className="border border-gray-300 px-3 py-2">30-50 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">2 personen</td>
                <td className="border border-gray-300 px-3 py-2">25 dH</td>
                <td className="border border-gray-300 px-3 py-2">80-110 kg</td>
                <td className="border border-gray-300 px-3 py-2">50-80 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4 personen</td>
                <td className="border border-gray-300 px-3 py-2">15 dH</td>
                <td className="border border-gray-300 px-3 py-2">90-130 kg</td>
                <td className="border border-gray-300 px-3 py-2">55-95 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">4 personen</td>
                <td className="border border-gray-300 px-3 py-2">25 dH</td>
                <td className="border border-gray-300 px-3 py-2">150-200 kg</td>
                <td className="border border-gray-300 px-3 py-2">90-160 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">6 personen</td>
                <td className="border border-gray-300 px-3 py-2">20 dH</td>
                <td className="border border-gray-300 px-3 py-2">180-260 kg</td>
                <td className="border border-gray-300 px-3 py-2">110-195 euro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zoutsoorten: tabletzout, pellets en blokzout
        </h2>
        <p className="text-gray-700 mb-4">
          Voor waterontharders zijn drie typen zout verkrijgbaar:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Tabletzout:</strong> de meest gebruikte vorm. Geperste tabletten lossen gelijkmatig
            op en zijn beschikbaar in zakken van 25 kg (15-22 euro). Geschikt voor de meeste ontharders.
          </li>
          <li>
            <strong>Pellets:</strong> cilindrische korrels die iets langzamer oplossen dan tabletten.
            Minder kans op zoutbrugvorming in het reservoir. Vergelijkbare prijs als tabletzout.
          </li>
          <li>
            <strong>Blokzout:</strong> grote blokken, minder gangbaar. Passen niet in alle reservoirs.
            Vergelijkbaar zoutgehalte maar omslachtiger in gebruik.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Kies altijd voor puur NaCl (natriumchloride) van minimaal 99,5% zuiverheid. Sommige fabrikanten
          bieden zout met harsreiniger aan (bijv. Aquasol of Sanitabs). Dit kan zinvol zijn als uw harsbed
          verontreinigd is door ijzer of organische stoffen, maar voor normaal gebruik is gewoon tabletzout
          voldoende.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tijdgestuurde versus volumegestuurde regeneratie
        </h2>
        <p className="text-gray-700 mb-4">
          Het regeneratietype heeft een grote invloed op het zoutverbruik:
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Tijdgestuurde regeneratie</strong> regenereert het harsbed op een vast tijdstip
          (bijv. elke 3 of 7 dagen), ongeacht of het harsbed al uitgeput is. Dit leidt tot onnodige
          regeneraties bij laag watergebruik en daarmee onnodig zoutverbruik.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Volumegestuurde regeneratie</strong> telt het gebruikte watervolume via een debietmeter
          en start de regeneratie pas wanneer de vastgestelde capaciteit bereikt is. Dit is tot 40%
          zuiniger in zoutverbruik en bovendien milieuvriendelijker. Alle moderne ontharders (klasse A)
          werken volumegestuurd. Heeft u een oudere tijdgestuurde ontharder? Overweeg de upgrade naar
          een volumegestuurd model of vraag een installateur om de regeneratiefrequentie opnieuw in te
          stellen op basis van uw daadwerkelijk watergebruik.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bespaartips: minder zout verbruiken
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Stel de juiste waterhardheid in:</strong> een te hoge hardheidsinstellig leidt tot
            te frequente regeneratie. Controleer de actuele hardheid in uw gemeente.
          </li>
          <li>
            <strong>Stap over op volumegestuurde regeneratie:</strong> de meest effectieve maatregel
            voor oudere ontharders met tijdgestuurde regeneratie.
          </li>
          <li>
            <strong>Kalibreer de regeneratiefrequentie:</strong> stel het debiet of de capaciteit
            correct in op basis van uw werkelijke waterverbruik.
          </li>
          <li>
            <strong>Onthard alleen het noodzakelijke water:</strong> installeer de ontharder na de
            koudwaterleiding voor de douche en wasmachine, maar laat drinkwaterleidingen en buiten-
            kranen ongemoeid.
          </li>
          <li>
            <strong>Overweeg een hardheidssensor:</strong> sommige ontharders kunnen worden uitgerust
            met een sensor die de actuele hardheid meet en de regeneratie optimaal plant.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Milieuaspecten van zout in het riool
        </h2>
        <p className="text-gray-700 mb-4">
          Bij elke regeneratiecyclus spoelt een hoeveelheid natriumchloride via het afvoerwater naar
          het riool. Rioolwaterzuiveringsinstallaties zijn niet ontworpen om chloride te verwijderen:
          het belandt via het oppervlaktewater uiteindelijk in de natuur.
        </p>
        <p className="text-gray-700 mb-6">
          In gebieden met een waterhardheid onder de 15 dH is de impact beperkt en wordt ontharderen
          minder aanbevolen. Boven de 20 dH wegen de voordelen (minder kalkschade, lager zeepverbruik)
          doorgaans op tegen de milieukosten, zeker bij een klasse A-ontharder met minimaal zoutverbruik.
          Bekijk de waterhardheid in uw gemeente voor een gefundeerde keuze.
        </p>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{" "}
          <Link href="/waterontharder" className="text-[#005F8A] underline">
            waterontharder uitleg en vergelijking
          </Link>
          ,{" "}
          <Link href="/waterontharder/harsbed" className="text-[#005F8A] underline">
            harsbed onderhoud en vervanging
          </Link>{" "}
          en{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter als alternatief
          </Link>
          .
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over zoutverbruik
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
