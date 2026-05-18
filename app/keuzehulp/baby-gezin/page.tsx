import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter voor baby en gezin: osmose voor flesvoeding en jong gezin",
  description: "Waterfilter voor baby of jong gezin: osmose verwijdert nitraat, lood en PFAS. Remineralisatie voor optimale flesvoedingskwaliteit. Advies en kosten.",
  alternates: { canonical: "https://waterfilterplatform.nl/keuzehulp/baby-gezin" },
  openGraph: {
    title: "Waterfilter voor baby en gezin: osmose voor flesvoeding en jong gezin",
    description: "Waterfilter voor baby of jong gezin: osmose verwijdert nitraat, lood en PFAS. Remineralisatie voor optimale flesvoedingskwaliteit. Advies en kosten.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Waarom zijn baby's gevoeliger voor verontreinigingen in water dan volwassenen?",
    answer:
      "Baby's hebben onrijpe nieren die onvoldoende in staat zijn om bepaalde stoffen uit te scheiden. Ze drinken verhoudingsgewijs veel meer water per kg lichaamsgewicht dan volwassenen (via flesvoeding is water de primaire inname). Hun bloed-hersenbarrieres zijn nog niet volledig ontwikkeld, waardoor neurotoxinen zoals lood makkelijker de hersenen bereiken. De darmen van zuigelingen zijn ook doorlaatbaarder, wat de opname van nitraat en andere stoffen verhoogt.",
  },
  {
    question: "Is kraanwater veilig voor het bereiden van flesvoeding?",
    answer:
      "In de meeste Nederlandse gemeenten is kraanwater veilig voor flesvoeding. WHO en het voedingscentrum stellen dat leidingwater dat aan de geldende normen voldoet gebruikt kan worden. Echter, in gebieden met verhoogd nitraat (landbouwgebieden), loden leidingen (woningen voor 1960) of PFAS-hotspots is extra voorzorg zinvol. Osmosewater met remineralisatie biedt de ruimste marge en is internationaal de aanbevolen standaard voor ouders die zekerheid willen.",
  },
  {
    question: "Wat is het nitraat-risico voor baby's?",
    answer:
      "Nitraat wordt in het lichaam omgezet naar nitriet, dat hemoglobine in rode bloedcellen kan oxideren naar methemoglobine. Dit vermindert het zuurstoftransport in het bloed: de aandoening heet methemoglobinemie of 'blue baby syndrome'. Baby's jonger dan 6 maanden zijn het meest kwetsbaar. De Nederlandse norm voor nitraat in drinkwater is 50 mg/L (EU-norm). In sommige landbouwgebieden (Brabant, Gelderland) zitten waarden dichter bij deze grens.",
  },
  {
    question: "Welke gebieden in Nederland hebben verhoogd nitraat in drinkwater?",
    answer:
      "Nitraat in drinkwater is een risico in gebieden met intensieve melkveehouderij en akkerbouw, met name in Noord-Brabant, de Achterhoek, de Gelderse Vallei en delen van Limburg. Drinkwaterbedrijven mengen bronwater met oppervlaktewater om nitraatwaarden te verlagen, maar in sommige gebieden liggen de waarden structureel hoger. Controleer het kwaliteitsrapport van uw drinkwaterbedrijf voor de nitraatwaarden in uw regio.",
  },
  {
    question: "Wat adviseert de WHO over water voor flesvoeding?",
    answer:
      "WHO adviseert voor het bereiden van flesvoeding bij voorkeur water met een TDS van 100-300 mg/L en een natriumgehalte onder 20 mg/L. Osmosewater met een TDS van 1-20 mg/L is te laag aan mineralen voor directe gebruik bij flesvoeding; remineralisatie is dan noodzakelijk om de ideale mineraalbalans te bereiken. Gekookt kraanwater dat aan de normen voldoet is over het algemeen acceptabel, maar osmose biedt een extra veiligheidsmarge.",
  },
  {
    question: "Wat is een remineralisatiefilter en is het nodig bij osmose?",
    answer:
      "Een remineralisatiefilter is een aanvullende filterstap die na het osmosemembraan wordt geplaatst. Het voegt calcium, magnesium en bicarbonaat terug toe aan het osmosewater. Dit verhoogt de TDS van 1-20 mg/L naar 80-150 mg/L, verhoogt de pH van circa 5,5 naar 7-8, en verbetert de smaak. Voor flesvoeding is remineralisatie sterk aanbevolen. Remineralisatiefilters kosten 20-40 euro per jaar aan vervanging.",
  },
  {
    question: "Wat zijn de kosten van osmose per jaar vergeleken met flessenwater?",
    answer:
      "Een osmosesysteem kost bij aanschaf 200-600 euro. De jaarlijkse filterkosten bedragen 60-100 euro (pre-filter, membraan en post-filter samen). Voor een gezin van 4 dat dagelijks 8 liter filtert, kost osmose circa 0,02-0,03 euro per liter. Flessenwater kost 0,30-1,00 euro per liter. Over 5 jaar is het verschil vele honderden euro's per persoon. Bovendien bespaart u op plasticafval.",
  },
  {
    question: "Zijn er extra risicos voor zwangere vrouwen rondom waterkwaliteit?",
    answer:
      "Zwangere vrouwen worden beschouwd als risicogroep voor blootstelling aan lood (dit passeert de placenta en kan de neurologische ontwikkeling van de foetus beinvloeden), PFAS (reproductieve effecten, lager geboortegewicht bij hogere blootstelling), en nitraat (methemoglobinemie bij hoge doses). In risicogebieden of woningen van voor 1960 is osmosefiltratie als voorzorgsmaatregel te overwegen. Dit is geen absolute noodzaak voor de gemiddelde zwangere in Nederland, maar een begrijpelijke keuze.",
  },
  {
    question: "Welke stoffen verwijdert een osmosefilter die relevant zijn voor baby's?",
    answer:
      "Een osmosefilter verwijdert effectief: nitraat (85-95%), lood (95-99%), PFAS (85-99%), medicijnresten (90-99%), en kalk (vrijwel volledig). Dit zijn precies de stoffen waarover ouders van baby's de meeste zorg hebben. Na osmosefiltratie en remineralisatie heeft het water een vergelijkbare mineralenbalans als goed bronwater, maar zonder de genoemde verontreinigingen.",
  },
  {
    question: "Moet ik als ouder in een hardwatergebied ook een waterontharder nemen naast osmose?",
    answer:
      "Voor drinkwater en flesvoeding volstaat een osmosefilter in een hardwatergebied: het membraan verwijdert kalk volledig. Een waterontharder is zinvol als u ook de douche, wasmachine en andere apparaten wilt beschermen tegen kalkaanslag. Voor de bescherming van uw kind via drinkwater is de osmosefilter de prioriteit; een waterontharder is een aanvulling voor apparatenlevensduur.",
  },
];

export default function BabyGezinPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Keuzehulp", url: "https://waterfilterplatform.nl/keuzehulp" },
          { name: "Baby en gezin", url: "https://waterfilterplatform.nl/keuzehulp/baby-gezin" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterfilter voor baby en gezin: osmose voor flesvoeding en jong gezin",
          description:
            "Waterfilter voor baby of jong gezin: osmose verwijdert nitraat, lood en PFAS. Remineralisatie voor optimale flesvoedingskwaliteit. Advies en kosten.",
          datePublished: "2026-05-17",
          url: "https://waterfilterplatform.nl/keuzehulp/baby-gezin",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/keuzehulp" className="hover:underline">Keuzehulp</Link>
            <span className="mx-2">/</span>
            <span>Baby en gezin</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor baby en gezin: osmose voor flesvoeding en jong gezin
          </h1>
          <QuickAnswer answer="Voor baby-flesvoeding is een osmosefilter met remineralisatie de aanbevolen keuze: het verwijdert nitraat (85-95%), lood (95-99%) en PFAS (85-99%), en een remineralisatiefilter herstelt de optimale mineraalbalans. Baby's zijn extra gevoelig door onrijpe nieren, een doorlaatbare darmwand en hogere waterinname per kg lichaamsgewicht. De kosten bedragen circa 60-100 euro per jaar, ver onder de 400-800 euro per jaar voor flessenwater." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Waarom zijn baby's extra gevoelig voor waterkwaliteit?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Baby's zijn geen kleine volwassenen: hun fysiologie maakt hen kwetsbaarder voor
            bepaalde stoffen in drinkwater. De drie belangrijkste redenen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Onrijpe nieren:</strong> De nieren van zuigelingen jonger dan 6 maanden
              kunnen bepaalde stoffen onvoldoende uitfilteren. Dit geldt voor nitraat, maar
              ook voor overmatig natrium (relevant bij gebruik van ontharderd water voor flesvoeding).
            </li>
            <li>
              <strong>Hoge waterinname per kg lichaamsgewicht:</strong> Via flesvoeding bestaat
              80-90% van de voeding uit water. Een pasgeboren baby die 700 ml flesvoeding per
              dag drinkt, heeft een waterinname die per kilogram lichaamsgewicht vele malen
              groter is dan die van een volwassene. Dit versterkt de blootstelling aan
              eventuele verontreinigingen.
            </li>
            <li>
              <strong>Doorlaatbare darmen:</strong> De darmmucosa van zuigelingen is doorlaatbaarder
              dan die van volwassenen. Dit verhoogt de opname van ongewenste stoffen zoals
              lood, nitraat en PFAS vanuit de voeding.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lood is extra relevant: het passeert zowel de darmwand als de bloed-hersenbarrieres,
            die bij zuigelingen en jonge kinderen nog niet volledig zijn gevormd. Zelfs lage
            loodconcentraties zijn geassocieerd met cognitieve ontwikkelingsschade.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Flesvoeding bereiden: WHO-advies en ideale waterkwaliteit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De WHO geeft richtlijnen voor water bij flesvoeding. Optimale parameters:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>TDS:</strong> 100-300 mg/L (niet te laag, niet te hoog)</li>
            <li><strong>Natrium:</strong> Onder 20 mg/L (de nieren van zuigelingen kunnen geen hoog natriumgehalte aan)</li>
            <li><strong>Nitraat:</strong> Onder 10 mg/L (veel lager dan de wettelijke drinkwaternorm van 50 mg/L)</li>
            <li><strong>Lood:</strong> Zo laag mogelijk, bij voorkeur onder 1 ug/L</li>
            <li><strong>pH:</strong> 6,5-8,5</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmosewater met een TDS van 1-20 mg/L is te mineraalarm voor directe toepassing
            bij flesvoeding. Remineralisatie is dan noodzakelijk. Een remineralisatiefilter
            voegt calcium (optimaal 40-80 mg/L) en magnesium (10-30 mg/L) toe en verhoogt
            de pH naar 7-8. Meer details vindt u op onze pagina over{" "}
            <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] hover:underline font-medium">
              osmose remineralisatie
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Nitraat in kraanwater: landbouwgebieden en baby-risico
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nitraat komt in het grondwater terecht via uitspoeling van kunstmest en dierlijke mest
            in landbouwgebieden. De wettelijke norm voor nitraat in drinkwater is 50 mg/L (EU-norm).
            In sommige regio's met intensieve veehouderij of akkerbouw liggen waarden structureel
            hoger dan het gemiddelde.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Risicogebieden voor verhoogd nitraat:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Noord-Brabant: intensieve veehouderij, grondwaterinname voor drinkwater</li>
            <li>Gelderse Vallei en Achterhoek: vergelijkbare landbouwintensiteit</li>
            <li>Limburg: zandgronden met hoge uitspoeling</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Drinkwaterbedrijven mengen bronnen om waarden te verlagen, maar controleer het
            jaarrapport van uw waterbedrijf als u in een landbouwgebied woont. Een osmosefilter
            verwijdert 85-95% van nitraat en is de meest effectieve thuisoplossing. Meer
            informatie over nitraat leest u op onze pagina over{" "}
            <Link href="/drinkwater/baby" className="text-[#005F8A] hover:underline font-medium">
              veilig drinkwater voor baby
            </Link>.
          </p>
          <p className="text-gray-700 mt-4">
            Meer achtergrondinformatie over nitraat: <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="text-[#005F8A] hover:underline font-medium">Nitraat en nitriet in drinkwater: risico's voor babies</Link>.
          </p>
          <p className="text-gray-700 mt-4">
            Meer achtergrondinformatie over PFAS: <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] hover:underline font-medium">PFAS in drinkwater: overzicht</Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Osmose als aanbevolen filter voor gezinnen met baby
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter is de meest complete bescherming voor gezinnen met baby of jonge
            kinderen. Het systeem verwijdert in een stap de relevante verontreinigingen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Nitraat: 85-95% verwijdering</li>
            <li>Lood: 95-99% verwijdering</li>
            <li>PFAS (langketen): 95-99% verwijdering</li>
            <li>PFAS (kortketen, GenX): 85-95% verwijdering</li>
            <li>Medicijnresten: 90-99% verwijdering</li>
            <li>Kalk en calciumcarbonaat: vrijwel volledig verwijderd</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Combineer altijd met een remineralisatiefilter bij gebruik voor flesvoeding.
            Een degelijk osmosesysteem met remineralisatie staat op onze pagina{" "}
            <Link href="/osmose-water/baby-flesvoeding" className="text-[#005F8A] hover:underline font-medium">
              osmosewater voor baby en flesvoeding
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Zwangere vrouwen: voorzorgsprincipe en extra aandacht
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zwangere vrouwen worden beschouwd als risicogroep voor blootstelling aan lood,
            PFAS en nitraat, omdat deze stoffen de placenta kunnen passeren en invloed hebben
            op de foetale ontwikkeling:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Lood:</strong> Passeert de placenta en accumuleert in foetale hersenen.
              In woningen van voor 1960 is osmosefiltratie op het kraanpunt sterk aanbevolen.
            </li>
            <li>
              <strong>PFAS:</strong> Worden gevonden in navelstrengbloed. Hogere blootstelling
              is geassocieerd met lager geboortegewicht en immuunproblemen bij de pasgeborene.
            </li>
            <li>
              <strong>Nitraat:</strong> Methemoglobinemie kan ook optreden bij de foetus via
              de placenta bij hoge nitraatblootstelling.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de meeste zwangere vrouwen in Nederland is kraanwater veilig. Maar in
            risicogebieden of oudere woningen is het voorzorgsprincipe begrijpelijk.
            Een osmosefilter kost minder dan een gynaecologisch consult en biedt een
            concrete, meetbare reductie van blootstelling.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Kosten: osmose vs flessenwater per jaar
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Optie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Aanschaf</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Jaar 1</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Jaar 2-5</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">5-jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Osmose + remineralisatie</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 250-600</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 310-700</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 60-100/jaar</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium text-green-700">EUR 550-1100</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Flessenwater (2 liter/dag)</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 0</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 400-700</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 400-700/jaar</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium text-red-600">EUR 2000-3500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 20-50</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 80-130</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 50-80/jaar</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium">EUR 280-450</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            Kosten zijn indicatief voor een gemiddeld gezin. Flessenwater op basis van 0,30-0,50 EUR per liter.
            Filterkan beschermt niet tegen nitraat, lood of PFAS.
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

        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/osmose-water/baby-flesvoeding" className="text-[#005F8A] hover:underline">
                Osmosewater voor baby en flesvoeding: praktisch advies
              </Link>
            </li>
            <li>
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
                Osmosefilter kopen: vergelijking en advies
              </Link>
            </li>
            <li>
              <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] hover:underline">
                Remineralisatiefilter voor osmosewater: hoe werkt het?
              </Link>
            </li>
            <li>
              <Link href="/drinkwater/baby" className="text-[#005F8A] hover:underline">
                Veilig drinkwater voor baby: richtlijnen en aanbevelingen
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp" className="text-[#005F8A] hover:underline">
                Terug naar de keuzehulp overzicht
              </Link>
            </li>
          </ul>
        </div>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
