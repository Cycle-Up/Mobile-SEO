import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { HealthDisclaimer } from "@/components/HealthDisclaimer";
import { AuthorBox } from "@/components/AuthorBox";
import { SourcesSection } from "@/components/SourcesSection";

// Regionale invalshoek: "pfas in leidingwater per regio / hotspots". Geen filterintentie in
// title/H1/meta; filterkeuze staat op /pfas-waterfilter, algemene uitleg op /pfas-water.
const PAGE_URL = "https://waterfilterplatform.nl/leidingwater/pfas";
const PAGE_TITLE = "PFAS in leidingwater per regio: hotspots in Nederland";
const PAGE_DESCRIPTION =
  "PFAS in leidingwater verschilt sterk per regio. Waar de waarden het hoogst zijn, welke bronnen en waterbedrijven het betreft en hoe je jouw adres opzoekt.";
const DATE_PUBLISHED = "2026-05-01";
const DATE_MODIFIED = "2026-11-10";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
};

const QUICK_ANSWER =
  "Hoeveel PFAS er in je leidingwater zit, hangt vooral af van de bron van je waterbedrijf. Water uit rivieren en meren, zoals in het westen, bevat doorgaans meer PFAS dan diep grondwater in het oosten en noorden. Volgens een analyse van Greenpeace (september 2026) ligt bij ongeveer een derde van de Nederlanders de PFAS-waarde boven de RIVM-advieswaarde van 4,4 nanogram per liter. In Noord-Holland geldt dat voor circa 95 procent van de inwoners, met ruim drie keer de advieswaarde in Zaandam en IJmuiden. Overal voldoet het leidingwater aan de wettelijke norm van 100 nanogram per liter voor de som van 20 PFAS.";

const regioData = [
  { regio: "Nederland totaal", uitkomst: "Bij ongeveer een derde van de bevolking boven de advieswaarde" },
  { regio: "Noord-Holland", uitkomst: "Circa 95 procent van de inwoners boven de advieswaarde" },
  { regio: "Zaandam en IJmuiden", uitkomst: "Ruim drie keer de advieswaarde" },
  { regio: "Alkmaar en Den Helder", uitkomst: "Circa tweeënhalf keer de advieswaarde" },
  { regio: "Amsterdam", uitkomst: "Ruim twee keer de advieswaarde" },
  { regio: "Limburg", uitkomst: "Circa een op de vijf inwoners boven de advieswaarde" },
];

const waterbedrijvenData = [
  {
    bedrijf: "PWN (Noord-Holland)",
    bron: "IJsselmeerwater en rivierwater uit de Lek",
    situatie:
      "Hoogste waarden in de Greenpeace-analyse. PWN bevestigt de cijfers en meldt dat het water aan alle wettelijke eisen voldoet.",
  },
  {
    bedrijf: "Waternet (Amsterdam)",
    bron: "Lekkanaalwater via de duinen en water uit de Bethunepolder",
    situatie: "Ruim twee keer de advieswaarde. De cijfers komen uit eigen metingen van Waternet.",
  },
  {
    bedrijf: "Dunea (Den Haag, Leiden)",
    bron: "Rivierwater, gezuiverd via de duinen",
    situatie: "Volgens Dunea ruim binnen de EU-norm en dicht bij, maar niet altijd onder de advieswaarde.",
  },
  {
    bedrijf: "Evides (Zeeland, regio Rotterdam)",
    bron: "Vooral rivierwater uit de Maas (Biesbosch)",
    situatie: "De bestaande zuivering haalt volgens Evides ongeveer 30 tot 50 procent van de PFAS weg.",
  },
  {
    bedrijf: "WML (Limburg)",
    bron: "Grondwater en Maaswater",
    situatie: "Circa een op de vijf inwoners boven de advieswaarde.",
  },
  {
    bedrijf: "Grondwaterbedrijven in oost en noord",
    bron: "Vooral grondwater, deels uit diepe lagen",
    situatie:
      "Diep grondwater is doorgaans beter beschermd en bevat minder PFAS. De ILT ziet TFA wel als groeiend risico voor diep grondwater.",
  },
];

const faqItems = [
  {
    question: "In welke regio's zit de meeste PFAS in het leidingwater?",
    answer:
      "Volgens de Greenpeace-analyse van september 2026 zijn de waarden het hoogst in Noord-Holland: bij circa 95 procent van de inwoners ligt de PFAS-waarde boven de RIVM-advieswaarde, met ruim drie keer de advieswaarde in Zaandam en IJmuiden, circa tweeënhalf keer in Alkmaar en Den Helder en ruim twee keer in Amsterdam. Ook delen van Zuid-Holland scoren hoog. In Limburg ligt circa een op de vijf inwoners boven de advieswaarde. Overal voldoet het water aan de wettelijke norm.",
  },
  {
    question: "Waarom zit er in het westen meer PFAS in het leidingwater dan in het oosten?",
    answer:
      "Waterbedrijven in het westen maken een groot deel van hun drinkwater uit oppervlaktewater, zoals het IJsselmeer en de Rijn en Maas. Rivieren voeren PFAS aan uit industrie in binnen- en buitenland, en de gangbare zuivering haalt daar maar een deel van weg. In grote delen van het oosten en noorden komt drinkwater uit grondwater, vaak uit diepe lagen die beter beschermd zijn.",
  },
  {
    question: "Hoe vind ik de PFAS-waarde van het leidingwater op mijn adres?",
    answer:
      "Kijk op de website van je eigen drinkwaterbedrijf: alle Nederlandse drinkwaterbedrijven publiceren hun meetgegevens, meestal per leveringsgebied. Zoek naar PFAS, de som van 20 PFAS of naar losse stoffen zoals PFOS en PFOA. Greenpeace bracht in september 2026 ook een postcodechecker uit op basis van diezelfde openbare meetgegevens van 183 winlocaties.",
  },
  {
    question: "Is leidingwater boven de RIVM-advieswaarde nog veilig?",
    answer:
      "Het leidingwater voldoet aan de wettelijke norm en de waterbedrijven noemen het veilig. Er is geen acuut gevaar en geen advies om te stoppen met kraanwater drinken. De advieswaarde van 4,4 nanogram per liter is een streefwaarde voor de lange termijn, omdat PFAS zich in het lichaam ophopen. Drinkwater is maar een deel van je totale inname; voedsel speelt voor de meeste mensen een grotere rol.",
  },
  {
    question: "Wat betekent PFAS langs de kust voor het drinkwater?",
    answer:
      "Dat wordt nu onderzocht. Op 30 oktober 2026 werd bekend dat Noord-Holland, Zuid-Holland en Zeeland samen met het ministerie van Infrastructuur en Waterstaat en de drinkwaterbedrijven uitzoeken wat PFAS langs de kust betekent voor de winning van drinkwater. Juist in deze provincies komt een groot deel van het drinkwater uit oppervlaktewater en duingebieden.",
  },
  {
    question: "Wat is er aan de hand bij Chemours in Dordrecht?",
    answer:
      "De fabriek van Chemours (voorheen DuPont) aan de Merwede bij Dordrecht heeft decennialang PFAS uitgestoten en geloosd, eerst PFOA en later de vervanger GenX. RIVM-onderzoek liet verhoogde PFAS-waarden in het bloed van omwonenden zien. Voor omwonenden gaat de zorg vooral over PFAS in lucht, bodem en voedsel; daarnaast draagt de lozing bij aan PFAS in het rivierwater benedenstrooms.",
  },
  {
    question: "Waarom maakt de ILT zich zorgen over TFA in drinkwater?",
    answer:
      "TFA is een zeer kleine, zeer mobiele PFAS-stof die onder meer vrijkomt uit bestrijdingsmiddelen met PFAS. In september 2026 waarschuwde de Inspectie Leefomgeving en Transport dat TFA sneller doordringt naar diep grondwater dan andere PFAS. Daardoor kan ook grondwater, nu nog de best beschermde bron voor drinkwater, op termijn meer PFAS bevatten.",
  },
  {
    question: "Mijn regio zit boven de advieswaarde. Wat kan ik zelf doen?",
    answer:
      "Kijk eerst wat er uit jouw kraan komt via de meetgegevens van je waterbedrijf. Wil je daarna de inname via water verlagen, kies dan een filter dat aantoonbaar werkt tegen PFAS: omgekeerde osmose vermindert PFAS het sterkst, een goed koolstoffilter vooral de langere ketens. In onze koopgids over het PFAS-waterfilter vergelijken we de opties.",
  },
];

const linkClass = "text-[#005F8A] underline hover:no-underline";

export default function PFASLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Leidingwater", url: "https://waterfilterplatform.nl/leidingwater" },
          { name: "PFAS per regio", url: PAGE_URL },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          url: PAGE_URL,
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:text-[#005F8A]">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>PFAS per regio</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS in leidingwater per regio: waar ligt het hoger?
          </h1>
          <AuthorBox datePublished={DATE_PUBLISHED} dateModified={DATE_MODIFIED} />
          <QuickAnswer question="In welke regio's zit meer PFAS in het leidingwater?" answer={QUICK_ANSWER} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PFAS per regio: wat de metingen laten zien</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Op 22 september 2026 publiceerde Greenpeace een analyse van de openbare PFAS-metingen van alle Nederlandse
            drinkwaterbedrijven, gemeten bij 183 winlocaties en beoordeeld met de rekenmethode van het RIVM. De
            uitkomsten per regio, vergeleken met de RIVM-advieswaarde van 4,4 nanogram per liter:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Regio</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Uitkomst ten opzichte van de RIVM-advieswaarde</th>
                </tr>
              </thead>
              <tbody>
                {regioData.map((r, i) => (
                  <tr
                    key={r.regio}
                    className={i % 2 === 0 ? "bg-white border-b border-gray-100" : "bg-[#E0F2FE]/30 border-b border-gray-100"}
                  >
                    <td className="py-2.5 px-3 font-medium">{r.regio}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.uitkomst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Bron: Greenpeace-analyse van 22 september 2026, zoals gemeld door de{" "}
            <a href="https://nos.nl/artikel/2632030" rel="noopener" className="underline">NOS</a>. Overal voldoet het
            water aan de wettelijke norm van 100 nanogram per liter voor de som van 20 PFAS.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wat het verschil tussen norm en advieswaarde precies inhoudt, leggen we uit op{" "}
            <Link href="/pfas-water" className={linkClass}>PFAS in drinkwater</Link>. Een visueel overzicht vind je op
            de <Link href="/kennisbank/pfas-nederland-kaart" className={linkClass}>PFAS-kaart van Nederland</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom het westen hoger scoort dan het oosten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het verschil per regio heeft vooral met de bron te maken. Waterbedrijven in het westen maken een groot deel
            van hun drinkwater uit oppervlaktewater: het IJsselmeer en water uit Rijn en Maas. Die rivieren voeren PFAS
            aan uit industrie in binnen- en buitenland. In grote delen van het oosten en noorden komt het drinkwater uit
            grondwater, vaak uit diepe lagen die beter beschermd zijn.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            De gangbare zuivering haalt maar een deel van de PFAS weg. Waterbedrijven onderzoeken extra
            zuiveringsstappen, maar benadrukken dat aanpak bij de bron goedkoper en effectiever is dan achteraf zuiveren.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Waterbedrijf</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Belangrijkste bron</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Wat bekend is over PFAS</th>
                </tr>
              </thead>
              <tbody>
                {waterbedrijvenData.map((r, i) => (
                  <tr
                    key={r.bedrijf}
                    className={i % 2 === 0 ? "bg-white border-b border-gray-100" : "bg-[#E0F2FE]/30 border-b border-gray-100"}
                  >
                    <td className="py-2.5 px-3 font-medium">{r.bedrijf}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.bron}</td>
                    <td className="py-2.5 px-3 text-gray-700 text-xs">{r.situatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Bron: Greenpeace-analyse (september 2026) en reacties van PWN, Waternet, Dunea en Evides (september 2026).
            De situatie kan veranderen; controleer altijd de actuele cijfers van je eigen waterbedrijf.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Bekende PFAS-hotspots in Nederland</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Noord-Holland, delen van Zuid-Holland en de kust</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                In Noord-Holland en delen van Zuid-Holland liggen de hoogste waarden uit de Greenpeace-analyse, met
                Zaandam en IJmuiden als uitschieters. Daarnaast werd op 30 oktober 2026 bekend dat Noord-Holland,
                Zuid-Holland en Zeeland samen met het ministerie van Infrastructuur en Waterstaat en de
                drinkwaterbedrijven onderzoeken wat PFAS langs de kust betekent voor de drinkwaterwinning (bron:{" "}
                <a
                  href="https://www.rd.nl/a/onderzoek-gevolgen-pfas-in-kustgebied-voor-winning-drinkwater"
                  rel="noopener"
                  className="underline"
                >
                  Reformatorisch Dagblad
                </a>
                ). Uitkomsten van dat onderzoek zijn er nog niet.
              </p>
            </div>

            <div className="border-l-4 border-orange-400 bg-orange-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Dordrecht en omgeving (Chemours)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                De fabriek van Chemours (voorheen DuPont) aan de Merwede heeft decennialang PFAS uitgestoten en geloosd,
                eerst PFOA en later de vervanger GenX. RIVM-onderzoek liet verhoogde PFAS-waarden in het bloed van
                omwonenden zien. Voor hen gaat de zorg vooral over lucht, bodem en voedsel; de lozingen dragen daarnaast
                bij aan PFAS in het rivierwater benedenstrooms.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 bg-yellow-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Vliegvelden en oefenterreinen (blusschuim)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Op vliegvelden, defensieterreinen en brandweeroefenterreinen werd jarenlang PFAS-houdend blusschuim
                (AFFF) gebruikt. Daardoor kan PFOS in de bodem en het grondwater rond zulke terreinen terechtkomen.
                Drinkwaterbedrijven houden winningen in de buurt van zulke locaties extra in de gaten. Meer over deze
                bronnen lees je bij{" "}
                <Link href="/kennisbank/pfas-lozingen-nederland" className={linkClass}>PFAS-lozingen in Nederland</Link>.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 bg-gray-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Landelijk: TFA in diep grondwater</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                De Inspectie Leefomgeving en Transport waarschuwde in september 2026 dat TFA, een zeer kleine PFAS-stof
                uit onder meer bestrijdingsmiddelen, een groeiend risico vormt voor drinkwater (bron:{" "}
                <a href="https://nos.nl/artikel/2630617" rel="noopener" className="underline">NOS</a>). TFA dringt
                snel door naar diep grondwater, waardoor ook regio&apos;s die nu laag scoren op termijn geraakt kunnen
                worden.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke PFAS-norm geldt voor leidingwater?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-[#005F8A]">100 ng/L</p>
              <p className="text-sm text-gray-700 mt-1">Som van 20 PFAS</p>
              <p className="text-xs text-gray-500 mt-1">Wettelijke EU-norm sinds 12 januari 2026</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-[#005F8A]">4,4 ng/L</p>
              <p className="text-sm text-gray-700 mt-1">PFOA-equivalenten</p>
              <p className="text-xs text-gray-500 mt-1">RIVM-advieswaarde, geen wet</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Alle Nederlandse drinkwaterbedrijven voldoen aan de wettelijke norm. De regionale verschillen gaan over de
            veel strengere advieswaarde. Een rechtstreekse vergelijking van de twee getallen gaat niet op: de
            advieswaarde weegt stoffen naar hun schadelijkheid, de norm telt 20 stoffen ongewogen op. Meer over de
            wetgeving lees je bij{" "}
            <Link href="/drinkwaternormen/pfas" className={linkClass}>PFAS-normen voor drinkwater</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De PFAS-waarde voor jouw adres opzoeken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elk drinkwaterbedrijf maakt zijn meetresultaten openbaar. Op de pagina{" "}
            <Link href="/leidingwater/waterkwaliteitsrapport" className={linkClass}>waterkwaliteitsrapport</Link> lees
            je hoe je zo&apos;n rapport vindt en leest. Voor PFAS specifiek:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm">
            <li>Zoek naar PFAS, de som van 20 PFAS of naar losse stoffen zoals PFOS, PFOA en GenX.</li>
            <li>
              Let op de eenheid: 100 nanogram per liter is hetzelfde als 0,1 microgram per liter. De RIVM-advieswaarde
              wordt uitgedrukt in PFOA-equivalenten, een rekenmethode die stoffen weegt naar hun schadelijkheid. Hoe je
              een meetwaarde interpreteert, staat bij{" "}
              <Link href="/uitleg/pfas-meetwaarde-betekenis" className={linkClass}>wat een PFAS-meetwaarde betekent</Link>.
            </li>
            <li>
              &quot;Niet aangetoond&quot; of &quot;kleiner dan de detectiegrens&quot; betekent dat de concentratie te
              laag was om te meten, niet dat er zeker niets in zit.
            </li>
            <li>Twijfel je, vraag dan je drinkwaterbedrijf om de waarden voor jouw leveringsgebied.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Woon je in een regio boven de advieswaarde?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dan is er geen reden voor paniek en geen advies om te stoppen met kraanwater drinken. De advieswaarde is een
            doel voor de lange termijn. Drinkwater is bovendien maar een deel van je PFAS-inname; voor de meeste mensen
            komt een groter deel uit voedsel. Wil je je inname verlagen, dan kun je letten op je voeding en eventueel
            water filteren. Ben je zwanger of geef je flesvoeding en twijfel je, vraag dan advies aan je huisarts,
            verloskundige of het consultatiebureau.
          </p>
          <HealthDisclaimer />
        </section>

        <section className="mt-6 border-2 border-[#005F8A] bg-[#F0F9FF] rounded-2xl p-5 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#003F5C] mb-2">Wil je zelf iets doen?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Deze pagina gaat over de verschillen per regio. Wil je weten welk filter PFAS uit je kraanwater haalt, wat
            het kost en wat labtests laten zien, lees dan onze koopgids. Hoe de techniek per filtertype werkt, leggen we
            apart uit.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              href="/pfas-waterfilter"
              className="inline-flex justify-center items-center bg-[#005F8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors"
            >
              Naar de PFAS-waterfilter koopgids
            </Link>
            <Link href="/waterfilter/pfas" className={`text-sm ${linkClass}`}>
              Zo werkt een PFAS-filter per filtertype
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over PFAS in leidingwater</h2>
          {faqItems.map(item => (
            <details key={item.question} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater</h3>
              <p className="text-sm text-gray-600">De feiten over PFAS in kraanwater, normen en het laatste nieuws.</p>
            </Link>
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter</h3>
              <p className="text-sm text-gray-600">Koopgids: welke filters PFAS aantoonbaar verminderen.</p>
            </Link>
            <Link href="/kennisbank/pfas-kraanwater-boven-rivm-advieswaarde" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Boven de RIVM-advieswaarde</h3>
              <p className="text-sm text-gray-600">Wat de Greenpeace-cijfers van september 2026 betekenen.</p>
            </Link>
            <Link href="/kennisbank/pfas-lozingen-nederland" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS-lozingen in Nederland</h3>
              <p className="text-sm text-gray-600">Waar PFAS vandaan komen: industrie, blusschuim en landbouw.</p>
            </Link>
          </div>
        </section>

        <SourcesSection
          sources={[
            "NOS, Greenpeace-analyse PFAS in drinkwater (22 september 2026): nos.nl/artikel/2632030",
            "NOS, ILT-rapport over TFA uit bestrijdingsmiddelen (september 2026): nos.nl/artikel/2630617",
            "Reformatorisch Dagblad, onderzoek gevolgen PFAS in kustgebied voor drinkwaterwinning (30 oktober 2026)",
            "Reacties van PWN, Waternet, Dunea en Evides op de Greenpeace-analyse (september 2026)",
            "RIVM, PFAS in drinkwater en de advieswaarde van 4,4 ng/L PFOA-equivalenten",
            "Europese Drinkwaterrichtlijn 2020/2184/EU, PFAS-parameters van kracht per 12 januari 2026",
          ]}
        />
      </div>
    </>
  );
}
