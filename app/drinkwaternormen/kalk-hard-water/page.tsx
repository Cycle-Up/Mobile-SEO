import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Kalk in drinkwater: waterhardheid normen, schade en oplossingen",
  description:
    "Kalk in drinkwater: normen voor waterhardheid in Nederland, schade aan apparaten, gezondheidseffect en de keuze tussen waterontharder en osmosefilter.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/drinkwaternormen/kalk-hard-water",
  },
  openGraph: {
    title: "Kalk in drinkwater: waterhardheid normen, schade en oplossingen",
    description:
      "Kalk in drinkwater: normen voor waterhardheid in Nederland, schade aan apparaten, gezondheidseffect en de keuze tussen waterontharder en osmosefilter.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat is de norm voor waterhardheid in Nederland?",
    answer:
      "Het Drinkwaterbesluit stelt geen harde maximumgrens voor waterhardheid. Het advies is een hardheid tussen 1 en 2,5 mmol/L (ongeveer 7 tot 14 graden Duits, dH). Nederlandse waterbedrijven streven ernaar water in dit bereik te leveren, maar in gebieden met hard grondwater (Limburg, Zeeland) kan de hardheid oplopen tot 20-30 dH.",
  },
  {
    question: "Hoe wordt waterhardheid gemeten?",
    answer:
      "Waterhardheid wordt uitgedrukt in meerdere eenheden. Graden Duits (dH of DH) is de meest gebruikte schaal in Nederland: 1 dH staat voor 10 mg calciumoxide per liter. Millimol per liter (mmol/L) is de wetenschappelijke standaard: 1 mmol/L = circa 5,6 dH. PPM (parts per million, mg/L) en French degrees (fH) worden ook gebruikt. Om te vergelijken: 10 dH = 1,79 mmol/L = 179 ppm = 17,8 fH.",
  },
  {
    question: "Is hard water schadelijk voor de gezondheid?",
    answer:
      "Nee. Calcium en magnesium zijn essentiele mineralen die het lichaam nodig heeft. De WHO beveelt juist een minimum aan van 25 mg/L calcium in drinkwater. Hard water levert aan die behoefte bij. Er is geen bewijs dat hard water bij normale concentraties gezondheidsschade veroorzaakt. Het enige risico zit aan de andere kant: extreem zacht of gede-mineraliseerd water kan bij langdurig gebruik bijdragen aan een mineralentekort.",
  },
  {
    question: "Wat is de hardheid van het leidingwater in mijn regio?",
    answer:
      "Waterhardheid varieert sterk per regio. Zachte gebieden (Groningen, Friesland, Drenthe): 2-8 dH. Gemiddelde zones (Utrecht, Noord-Holland, Overijssel): 8-15 dH. Harde zones (Limburg, Zeeland, delen van Noord-Brabant): 20-30 dH. De Randstad (Amsterdam, Den Haag, Rotterdam) zit doorgaans op 10-15 dH. Meer detail per gemeente vindt u op onze waterhardheid-pagina.",
  },
  {
    question: "Wat is het verschil tussen een waterontharder en een osmosefilter?",
    answer:
      "Een waterontharder werkt via ionenwisseling: calcium- en magnesiumionen worden vervangen door natriumionen. Het water is daarna zacht maar bevat meer natrium. Een osmosefilter verwijdert via een semipermeabel membraan vrijwel alle opgeloste stoffen, inclusief calcium, magnesium, natrium en andere mineralen. Osmosewater heeft een TDS van 1-20 mg/L. Na osmose is remineralisatie aanbevolen om mineralen terug te brengen.",
  },
  {
    question: "Hoeveel kalk zit er gemiddeld in Nederlands leidingwater?",
    answer:
      "Het calciumgehalte van Nederlands leidingwater varieert van circa 12 mg/L in zachte regioos (zoals Friesland) tot meer dan 120 mg/L in harde regioos (zoals Limburg). Het gemiddelde in Nederland ligt rond 60-80 mg/L calcium. Magnesium is doorgaans aanwezig in concentraties van 5-25 mg/L.",
  },
  {
    question: "Veroorzaakt hard water kalkaanslag in mijn waterkoker?",
    answer:
      "Ja. Bij verhitting slaat calciumcarbonaat neer als wit poeder of korst, met name in waterkokers, koffiezetapparaten, stoomstrijkijzers en de verwarmingselementen van wasmachines en vaatwassers. Boven 15 dH is kalkaanslag merkbaar en kan de levensduur van verwarmingselementen aanzienlijk inkorten. Regelmatig ontkalken met citroenzuur of azijn verlengt de levensduur.",
  },
  {
    question: "Heeft hard water invloed op de werking van zeep en shampoo?",
    answer:
      "Ja. Calcium- en magnesiumionen reageren met zeep en vormen neerslag (kalkzeep) in plaats van schuim. Hard water vereist daardoor meer zeep, shampoo en wasmiddel om hetzelfde reinigingseffect te bereiken. Sommige mensen merken dat hun huid en haar droger aanvoelen bij douchen met hard water, doordat kalkzeep moeilijker af te spoelen is.",
  },
  {
    question: "Wanneer is een waterontharder zinvol en wanneer een osmosefilter?",
    answer:
      "Een waterontharder is zinvol als het primaire probleem kalkaanslag op apparaten, leidingen en in de douche is en u in een hard watergebied woont (boven 15 dH). Een osmosefilter is zinvol als u ook andere stoffen wilt verwijderen (PFAS, medicijnresten, nitraten, lood) of als u zacht, gede-mineraliseerd water voor drinken en koken wilt. Combinaties zijn mogelijk: ontharder voor het hele huis plus osmose voor drinkwater.",
  },
  {
    question: "Hoeveel extra zout bevat water na ionenwisselaar-ontharding?",
    answer:
      "Dat hangt af van de hardheid en de instelling van de ontharder. Globaal voegt een ontharder per dH-waarde ongeveer 8 mg natrium per liter toe. Water van 20 dH bevat na ontharding circa 160 mg Na/L extra. De WHO-aanbeveling voor natrium in drinkwater is 200 mg/L, wat bij sterk hard water dus benaderd kan worden. Mensen met een zoutbeperkt dieet dienen dit te controleren.",
  },
  {
    question: "Wat betekent TDS en hoe hangt het samen met waterhardheid?",
    answer:
      "TDS staat voor Total Dissolved Solids: de totale hoeveelheid opgeloste stoffen in mg/L, gemeten via elektrische geleidbaarheid. Waterhardheid (calcium en magnesium) draagt significant bij aan de TDS, maar TDS omvat ook natrium, kalium, sulfaten, chloriden en andere ionen. Hard water heeft doorgaans een hoge TDS (200-600 mg/L), osmosewater een lage TDS (1-20 mg/L). Leidingwater zit gemiddeld op 150-400 mg/L.",
  },
];

export default function KalkHardWaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "Kalk en hard water", url: "https://waterfilterplatform.nl/drinkwaternormen/kalk-hard-water" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Kalk in drinkwater: waterhardheid normen, schade en oplossingen",
          description:
            "Kalk in drinkwater: normen voor waterhardheid in Nederland, schade aan apparaten, gezondheidseffect en de keuze tussen waterontharder en osmosefilter.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/kalk-hard-water",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Kalk en hard water</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kalk in drinkwater: waterhardheid normen, schade en oplossingen
          </h1>
          <QuickAnswer answer="Waterhardheid wordt veroorzaakt door calcium- en magnesiumcarbonaat in het water. Het Drinkwaterbesluit adviseert 1-2,5 mmol/L (7-14 dH) maar stelt geen harde bovengrens. In Limburg en Zeeland loopt de hardheid op tot 20-30 dH. Hard water is niet schadelijk voor de gezondheid, maar veroorzaakt kalkaanslag op apparaten en leidingen. Een waterontharder vervangt kalk door natrium; een osmosefilter verwijdert vrijwel alles en vereist remineralisatie." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wat is waterhardheid?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waterhardheid is een maat voor de hoeveelheid opgeloste calcium- en magnesiumionen in water.
            Deze ionen zijn afkomstig van gesteenten die het water passeert op weg naar grondwater- of
            oppervlaktewaterwinning. Calciumcarbonaat (CaCO3) en calciumsulfaat (CaSO4) zijn de
            voornaamste verbindingen; magnesiumcarbonaat (MgCO3) draagt minder bij maar telt volledig mee
            in de hardheidsmeting.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waterhardheid wordt uitgedrukt in meerdere eenheden, wat regelmatig tot verwarring leidt.
            In Nederland is de graad Duits (dH of DH) de gebruikelijkste maat. Internationaal worden ook
            millimol per liter (mmol/L), ppm (parts per million, gelijk aan mg/L) en French degrees (fH)
            gebruikt. De omrekeningsfactoren:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">dH</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">mmol/L</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">ppm (mg/L)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">French degrees (fH)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Omschrijving</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">0-7</td>
                  <td className="border border-gray-300 px-3 py-2">0-1,25</td>
                  <td className="border border-gray-300 px-3 py-2">0-125</td>
                  <td className="border border-gray-300 px-3 py-2">0-12,5</td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-700">Zacht</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">8-15</td>
                  <td className="border border-gray-300 px-3 py-2">1,43-2,68</td>
                  <td className="border border-gray-300 px-3 py-2">143-268</td>
                  <td className="border border-gray-300 px-3 py-2">14,3-26,8</td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-700">Matig hard</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">16-20</td>
                  <td className="border border-gray-300 px-3 py-2">2,86-3,57</td>
                  <td className="border border-gray-300 px-3 py-2">286-357</td>
                  <td className="border border-gray-300 px-3 py-2">28,6-35,7</td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-700">Hard</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">boven 21</td>
                  <td className="border border-gray-300 px-3 py-2">boven 3,75</td>
                  <td className="border border-gray-300 px-3 py-2">boven 375</td>
                  <td className="border border-gray-300 px-3 py-2">boven 37,5</td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-700">Zeer hard</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Normen voor waterhardheid in Nederland
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het{" "}
            <Link href="/drinkwaternormen/drinkwaterbesluit" className="text-[#005F8A] hover:underline font-medium">
              Drinkwaterbesluit
            </Link>{" "}
            stelt geen harde maximumgrens voor waterhardheid. Dit in tegenstelling tot parameters als
            nitraat, lood en PFAS, die absolute grenswaarden kennen. De reden is dat waterhardheid geen
            toxicologisch risico vormt: calcium en magnesium zijn voedingsstoffen, geen gifstoffen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wel hanteert de Nederlandse drinkwatersector een adviesrange van 1 tot 2,5 mmol/L (7 tot 14 dH).
            Waterbedrijven die water leveren buiten dit bereik zijn niet in overtreding van de wet, maar
            proberen in de praktijk wel binnen deze range te leveren. In regioos met van nature hard
            grondwater is dat echter niet altijd haalbaar zonder grootschalige ontharding, wat kostbaar is.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Waterhardheid per regio in Nederland
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De waterhardheid in Nederland varieert sterk, afhankelijk van de lokale geologie en het
            waterwintype (grondwater of oppervlaktewater):
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Zachte regioos (2-8 dH):</strong> Groningen, Friesland, Drenthe en delen van
              Gelderland. Hier wint men voornamelijk oppervlaktewater of grondwater uit zandbodems
              met weinig kalkgesteente.
            </li>
            <li>
              <strong>Gemiddelde regioos (8-15 dH):</strong> Randstad (Amsterdam, Den Haag, Rotterdam,
              Utrecht), Noord-Holland en grote delen van Overijssel. Gemengde winning van oppervlaktewater
              en grondwater.
            </li>
            <li>
              <strong>Harde regioos (16-30 dH):</strong> Limburg, Zeeland en delen van Noord-Brabant.
              Hier is het grondwater in contact geweest met kalkrijke bodem (mergel, krijtlagen),
              wat leidt tot hoge calcium- en magnesiumconcentraties.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            De exacte hardheid per gemeente en zelfs per postcode vindt u op onze{" "}
            <Link href="/waterhardheid" className="text-[#005F8A] hover:underline font-medium">
              waterhardheid-pagina
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Gevolgen van hard water: van apparaten tot zeepverbruik
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hard water veroorzaakt geen gezondheidsschade, maar heeft wel praktische gevolgen voor uw
            huishouden. De belangrijkste problemen zijn:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Kalkaanslag in waterkokers en ketels:</strong> Bij verhitting slaat calciumcarbonaat
              neer als witgrijze korst. Dit verhoogt het energieverbruik en verkort de levensduur van
              het verwarmingselement.
            </li>
            <li>
              <strong>Verstopt douchekop en kraanuitloopjes:</strong> Kalkafzetting verstopt de kleine
              gaatjes in douchekoppen en mengkranen, wat de waterdruk vermindert.
            </li>
            <li>
              <strong>Schade aan wasmachine en vaatwasser:</strong> Kalk in verwarmingselementen vergroot
              de kans op storingen. Fabrikanten adviseren bij meer dan 15 dH ontkalktabletten of een
              zoutlader te gebruiken.
            </li>
            <li>
              <strong>Minder zeepschuim:</strong> Calcium- en magnesiumionen reageren met vetzuren in
              zeep en shampoo en vormen onoplosbare kalkzeep. Dit vermindert het schuimeffect en
              vereist meer product voor hetzelfde resultaat.
            </li>
            <li>
              <strong>Witte vlekken op glas en keramiek:</strong> Na verdamping blijft kalk als
              witte aanslag achter op glazen, tegels en sanitair.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Gezondheidseffect van hard water: is het schadelijk?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hard water is <strong>niet schadelijk</strong> voor de gezondheid. Calcium en magnesium zijn
            essentiele mineralen die het lichaam dagelijks nodig heeft voor botten, spieren en het
            zenuwstelsel. De WHO stelt in haar drinkwaterrichtlijnen zelfs een minimum van 25 mg/L
            calcium aan, juist om ervoor te zorgen dat drinkwater bijdraagt aan de mineraalbalans.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het enige potentiele risico bevindt zich aan het andere einde van het spectrum: extreem
            zacht of gede-mineraliseerd water, zoals water na osmosefiltratie zonder remineralisatie,
            mist de mineralen die bijdragen aan de dagelijkse aanbevolen inname. Bij langdurig
            exclusief gebruik van dergelijk water kan de mineralenbalans in het gedrang komen.
            Goede osmosesystemen voegen daarom via een remineralisatiepatroon calcium en magnesium
            terug aan het water toe.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Waterontharder versus osmosefilter: wat past bij uw situatie?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn twee hoofdoplossingen voor kalk in water, met fundamenteel verschillende werking:
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Waterontharder (ionenwisselaar):</strong> Calcium- en magnesiumionen worden uitgewisseld
            tegen natriumionen via een harsbed. Het water is daarna zacht (laag dH) maar bevat meer
            natrium. Natriumtoevoeging is doorgaans verwaarloosbaar voor gezonde mensen, maar bij
            sterk hard water of een zoutbeperkt dieet dient dit meegerekend te worden. Een ontharder
            werkt voor alle water in huis: douche, keuken, wasmachine en leidingen. Zout (regenereerzout)
            moet regelmatig bijgevuld worden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Omgekeerde osmose:</strong> Een osmosefilter perst water door een semipermeabel
            membraan met porieen van 0,0001 micron. Vrijwel alle opgeloste stoffen worden tegengehouden,
            inclusief calcium, magnesium, maar ook PFAS, medicijnresten, nitraten en lood. Het
            resulterende water heeft een TDS van slechts 1-20 mg/L. Osmosesystemen worden doorgaans
            onder de gootsteen gemonteerd en leveren gefilterd water via een aparte kraan voor drinken
            en koken. Voor het hele huis (douche, wasmachine) is een osmosesysteem praktisch en
            kostenmatig minder geschikt dan een ontharder.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor een uitgebreide vergelijking, zie onze pagina over{" "}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] hover:underline font-medium">
              waterontharder versus osmosefilter
            </Link>.
            Wilt u direct een osmosesysteem vergelijken, dan vindt u onze aanbevelingen op{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              omgekeerde osmose kopen
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wanneer is een oplossing noodzakelijk?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Niet elk hard watergebied vereist een actieve oplossing. Een vuistregel:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Onder 10 dH:</strong> Geen ingrijpen nodig. Minimale kalkaanslag, goed schuimend
              zeepgebruik.
            </li>
            <li>
              <strong>10-15 dH:</strong> Regelmatig ontkalken van waterkoker en koffiezetapparaat
              volstaat. Vaatwasser-zout aanbevolen.
            </li>
            <li>
              <strong>15-20 dH:</strong> Een waterontharder of osmosefilter loont zich financieel
              terug door langere levensduur van apparaten en lager zeepverbruik.
            </li>
            <li>
              <strong>Boven 20 dH:</strong> Actieve ontharding of osmosefiltratie sterk aanbevolen
              ter bescherming van leidingen, apparaten en boiler.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer informatie over waterontharders vindt u op onze{" "}
            <Link href="/waterontharder" className="text-[#005F8A] hover:underline font-medium">
              waterontharder-pagina
            </Link>.
            Een overzicht van alle drinkwaternormen vindt u op{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              onze drinkwaternormen-hub
            </Link>.
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

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
