import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { HealthDisclaimer } from "@/components/HealthDisclaimer";

export const metadata: Metadata = {
  title: "Mangaanfilter voor water: bruin water en mangaan verwijderen",
  description:
    "Mangaan in water veroorzaakt bruin water en zwarte afzettingen. EU-norm 50 ug/L. Oxidatiefilter of osmosefilter verwijdert mangaan effectief.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterfilter/mangaanfilter" },
  openGraph: {
    title: "Mangaanfilter voor water: bruin water en mangaan verwijderen",
    description:
      "Mangaan in water veroorzaakt bruin water en zwarte afzettingen. EU-norm 50 ug/L. Oxidatiefilter of osmosefilter verwijdert mangaan effectief.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat is mangaan en hoe komt het in mijn water terecht?",
    answer:
      "Mangaan (Mn) is een metaal dat van nature voorkomt in de aardkorst. In zuurstofarm grondwater lost het op als Mn2+-ion. Privéputten en diepe grondwaterbronnen in zandige gebieden zoals Brabant en Limburg hebben verhoogde mangaanconcentraties. Gemeentelijk leidingwater wordt altijd voorbehandeld en voldoet aan de norm.",
  },
  {
    question: "Waarom heeft mijn water zwarte vlekken en bruine aanslag?",
    answer:
      "Zwarte vlekken in toilet, bad en op sanitair wijzen vrijwel zeker op mangaan. Wanneer opgelost Mn2+ oxideert door contact met lucht of chloor, vormt het zwart-bruin neerslag van mangaandioxide (MnO2). Dit zet neer op oppervlakken, leidingwanden en in apparaten zoals koffiemachines en vaatwassers.",
  },
  {
    question: "Wat is de EU-norm voor mangaan in drinkwater?",
    answer:
      "De EU Drinkwaterrichtlijn (2020/2184) stelt de indicatornorm voor mangaan op 50 microgram per liter (0,05 mg/L). Dit is een kwaliteitsindicator, geen strikte gezondheidsnorm. De WHO adviseert een drempelwaarde van 400 microgram per liter op basis van smaakperceptie. Voor Nederlandse leidingwaterbedrijven is de 50 ug/L norm bindend.",
  },
  {
    question: "Is mangaan in drinkwater gevaarlijk voor de gezondheid?",
    answer:
      "Op lage niveaus (onder de EU-norm van 50 ug/L) is mangaan niet acuut gevaarlijk. Bij chronisch hoge inname (boven 0,4 mg/L, de WHO-aanbeveling) zijn neurologische effecten gemeld, met name bij zuigelingen en kinderen. De Gezondheidsraad beveelt aan om concentraties boven 0,1 mg/L in drinkwater te vermijden voor kwetsbare groepen.",
  },
  {
    question: "Wat is het verschil tussen mangaan en ijzer in water?",
    answer:
      "Beide metalen komen vaak samen voor in grondwater. IJzer geeft rood-bruin verkleurd water en oranje vlekken op sanitair; mangaan geeft zwart-bruin neerslag en zwarte vlekken. Ijzer heeft een lagere norm (200 ug/L EU) en oxideert sneller. Bij putwater is het verstandig beide te meten, want combinatiefilters pakken beide stoffen gelijktijdig aan.",
  },
  {
    question: "Welk filter verwijdert mangaan het best?",
    answer:
      "Een oxidatiefilter met mangaandioxide (MnO2) of een KMnO4-regeneratiefilter is de meest effectieve methode voor hoge concentraties. Het Mn2+-ion wordt geoxideerd naar MnO2 en neergeslagen op het filterbed. Een osmosefilter verwijdert 95-99% van opgelost mangaan als ion. Een actief koolfilter is NIET effectief voor mangaan.",
  },
  {
    question: "Kan ik mangaan meten met een thuistestkit?",
    answer:
      "Ja, colorimetrische testkits voor mangaan zijn beschikbaar voor circa 15-30 euro. Ze geven een indicatieve waarde. Voor nauwkeurige meting, met name bij privéputten, is laboratoriumonderzoek bij een gecertificeerd lab (KIWA of gelijkwaardig) aan te bevelen. Kosten circa 50-100 euro voor een volledig grondwaterpakket inclusief ijzer en mangaan.",
  },
  {
    question: "Moet ik een filter installeren voor of na de watermeter?",
    answer:
      "Voor gehele-huis-behandeling (ingangspunt) installeert u een mangaanfilter direct na de watermeter of bij de ingang van het woonhuis. Dit beschermt alle leidingen en apparaten. Voor enkel drinkwater (keukenkraan) volstaat een osmosefilter onder het aanrecht. Bij privéputten is behandeling aan het ingangspunt altijd aan te bevelen.",
  },
];

export default function MangaanfilterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterfilter", url: "https://waterfilterplatform.nl/waterfilter" },
          { name: "Mangaanfilter", url: "https://waterfilterplatform.nl/waterfilter/mangaanfilter" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Mangaanfilter water: bruin water oplossen en mangaan verwijderen",
          description:
            "Mangaan in water veroorzaakt bruin water en zwarte afzettingen. EU-norm 50 ug/L. Oxidatiefilter of osmosefilter verwijdert mangaan effectief.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterfilter/mangaanfilter",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:underline">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Mangaanfilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Mangaanfilter water: bruin water oplossen en mangaan verwijderen
          </h1>
          <QuickAnswer answer="Mangaan (Mn) in water veroorzaakt bruin of zwart verkleurd water en zwarte afzettingen in leidingen en apparaten. De EU-norm is 50 microgram per liter. Een oxidatiefilter (mangaandioxide of KMnO4-regeneratie) of osmosefilter verwijdert mangaan effectief." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Wat is mangaan en waar komt het vandaan?
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan (symbool Mn, atoomnummer 25) is een overgangsmetaal dat van nature overvloedig aanwezig is in de aardkorst. In grondwater komt mangaan voor als het divalente ion Mn2+. Dit ion is opgelost en kleurloos in zuurstofarm water. Het probleem ontstaat wanneer dit water in contact komt met zuurstof of oxidatiemiddelen: het mangaan oxideert naar mangaandioxide (MnO2), een zwart-bruin neerslag.
        </p>
        <p className="text-gray-700 mb-4">
          Geologisch gezien lost mangaan op in de bodem via verwering van mineralen zoals pyrolusite en rhodochrosite. In Nederland zijn de hogere concentraties te verwachten in de zandige pleistocene grondlagen van Noord-Brabant, Limburg, Gelderland en Drenthe. Privéputten in deze regio's worden geadviseerd mangaan te laten meten.
        </p>
        <p className="text-gray-700 mb-6">
          Gemeentelijk leidingwater wordt altijd voorbehandeld door de waterleidingbedrijven. Beluchting, bezinking en filtratie verwijderen mangaan tot ruim onder de norm. Als u op leidingwater bent aangesloten en toch zwarte vlekken heeft, kan dit wijzen op mangaanafzettingen in oude leidingen die losraken, of op een lokaal probleem in het distributienet.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Symptomen van mangaan in water
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Zwarte of donkerbruine vlekken</h3>
            <p className="text-gray-700 text-sm">
              Karakteristiek zwart-bruin neerslag in de toiletpot, op de bodem van het bad, rondom kranen en op waterkokers en koffiemachines. MnO2-neerslag hecht sterk aan oppervlakken en is moeilijk te verwijderen met gewone schoonmaakmiddelen.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Bruin of zwart gekleurd water</h3>
            <p className="text-gray-700 text-sm">
              Bij hoge mangaanconcentraties of na perioden van stilstand in leidingen kan het water zichtbaar bruin of zwart uit de kraan komen. Dit treedt ook op wanneer losgeraakt MnO2-neerslag uit de leidingen meespoelt.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Metaalsmaak en onaangename geur</h3>
            <p className="text-gray-700 text-sm">
              Mangaan geeft bij concentraties boven 100-200 ug/L een duidelijk herkenbare bittere of metaalachtige smaak. De WHO-smaakgrens ligt op circa 400 ug/L.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Beschadiging van huishoudapparaten</h3>
            <p className="text-gray-700 text-sm">
              MnO2-afzettingen in vaatwassers, koffiemachines, boilers en wasmachines verkorten de levensduur en verminderen de efficiëntie. Verwarmingselementen raken sneller verstopt.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm, WHO-advies en Nederlandse situatie
        </h2>
        <p className="text-gray-700 mb-4">
          De Europese Drinkwaterrichtlijn 2020/2184 stelt de indicatornorm voor mangaan op <strong>50 microgram per liter (0,05 mg/L)</strong>. Dit is een indicatornorm: overschrijding is niet direct een veiligheidsrisico maar wijst op een mogelijk probleem in de waterbehandeling of distributie.
        </p>
        <p className="text-gray-700 mb-4">
          De WHO hanteert een aanbevolen waarde van <strong>400 ug/L</strong> op basis van smaakperceptie, niet op basis van gezondheidseffecten. Voor zuigelingen en kleine kinderen adviseert de WHO echter voorzichtigheid bij concentraties boven 100 ug/L vanwege mogelijke neurologische effecten bij langdurige blootstelling.
        </p>
        <p className="text-gray-700 mb-6">
          In de Nederlandse drinkwaterregelgeving (Drinkwaterbesluit) is de 50 ug/L norm bindend voor waterleidingbedrijven. Eigenaren van privéputten zijn zelf verantwoordelijk voor de kwaliteit van hun water en worden geadviseerd jaarlijks te laten testen, zeker in risicogebieden als Noord-Brabant en Limburg waar mangaan geologisch algemeen voorkomt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsgevolgen van mangaan in water
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan is een essentieel spoorelement voor de mens, nodig voor enzymactiviteit en botvorming. De dagelijkse inname via voeding is normaal gesproken 2-5 mg. Via drinkwater is de inname bij normale concentraties verwaarloosbaar.
        </p>
        <p className="text-gray-700 mb-4">
          Bij chronisch hoge inname via drinkwater (boven 0,4 mg/L gedurende lange perioden) zijn in wetenschappelijk onderzoek neurologische effecten beschreven: tremors, geheugenklachten en verminderde motorische functie. Dit manganism lijkt op de vroege stadia van de ziekte van Parkinson. Kinderen zijn gevoeliger door hun hogere waterinname per kilogram lichaamsgewicht.
        </p>
        <p className="text-gray-700 mb-6">
          In de praktijk overstijgen Nederlandse privéputten zelden de 0,4 mg/L drempel. Wees extra alert bij waterputten in oude mijngebieden (Limburg) en gebieden met intensieve landbouw waar de bodemchemie veranderd is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mangaan versus ijzer: de verschillen
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mangaan (Mn)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">IJzer (Fe)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kleur neerslag</td>
                <td className="border border-gray-300 px-3 py-2">Zwart-donkerbruin</td>
                <td className="border border-gray-300 px-3 py-2">Rood-oranje-bruin</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">EU-norm</td>
                <td className="border border-gray-300 px-3 py-2">50 ug/L</td>
                <td className="border border-gray-300 px-3 py-2">200 ug/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Oxidatiesnelheid</td>
                <td className="border border-gray-300 px-3 py-2">Langzamer</td>
                <td className="border border-gray-300 px-3 py-2">Sneller</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Risicogebieden NL</td>
                <td className="border border-gray-300 px-3 py-2">Brabant, Limburg</td>
                <td className="border border-gray-300 px-3 py-2">Brabant, Gelderland, Drenthe</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filteroptie</td>
                <td className="border border-gray-300 px-3 py-2">Oxidatiefilter, osmose</td>
                <td className="border border-gray-300 px-3 py-2">Oxidatiefilter (birm), sediment, osmose</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2">Niet effectief</td>
                <td className="border border-gray-300 px-3 py-2">Niet effectief</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtermethoden voor mangaan: vergelijking
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Oxidatiefilter met mangaandioxide (MnO2)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest effectief</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Het filtermedium (MnO2 of mangaan-greenzand) fungeert als katalysator: opgelost Mn2+ wordt geoxideerd naar MnO2 en neergeslagen op het filterbed. Regelmatig terugspoelen met water regenereert het filter. Effectief voor concentraties tot circa 5 mg/L. Vereist voldoende waterdruk (minimaal 2 bar).
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Verwijdering: 95-99%</span>
              <span>Kosten: 400-1.200 euro</span>
              <span>Onderhoud: terugspoelen wekelijks</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">KMnO4-regeneratiefilter (kaliumpermanganaat)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Bij hogere mangaanconcentraties (boven 1-2 mg/L) wordt kaliumpermanganaat (KMnO4) als regeneratiemiddel gebruikt. Het sterke oxidatiemiddel regenereert het filterbed en oxideert zowel ijzer als mangaan. Hogere capaciteit dan eenvoudige MnO2-filters. Vereist veilig omgaan met KMnO4 (oxidatiemiddel).
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Verwijdering: 95-99%</span>
              <span>Kosten: 600-1.800 euro</span>
              <span>Onderhoud: KMnO4 bijvullen maandelijks</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Beluchting + bezinking + zandfilter</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Voor zeer hoge concentraties (boven 5 mg/L) of bij gecombineerd hoog ijzer en mangaan in putwater. Beluchting oxideert opgelost mangaan; bezinking laat vlokken neerzakken; zandfilter vangt resterende deeltjes. Bewerkelijk en ruimtebeslaand, maar zeer effectief voor complexe grondwaterkwaliteit.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Verwijdering: 90-98%</span>
              <span>Kosten: 1.500-5.000 euro</span>
              <span>Onderhoud: terugspoelen, beluchting controleren</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Osmosefilter (omgekeerde osmose)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een RO-membraan (0,0001 micrometer) houdt opgelost Mn2+ voor 95-99% tegen. Ideaal als u naast mangaan ook andere verontreinigingen wilt verwijderen (nitraat, PFAS, hardheid). Let op: installeer altijd een sedimentprefilter voor het membraan om neergeslagen MnO2-deeltjes op te vangen en het membraan te beschermen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Verwijdering Mn: 95-99%</span>
              <span>Kosten: 300-800 euro</span>
              <span>Onderhoud: membraan 2-3 jaar vervangen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 border-red-200 bg-red-50">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">!</span>
              <h3 className="font-semibold text-red-700">Koolstoffilter: NIET effectief voor mangaan</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Actief koolfilters (blok of granulaat) adsorperen organische stoffen en chloor, maar zijn niet in staat opgelost mangaan als ion te verwijderen. Een koolstoffilter of filterkan helpt niet bij mangaanproblemen. Gebruik een oxidatiefilter of osmosefilter.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel filtermethoden voor mangaan
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Verwijdering Mn</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ook IJzer</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Doorstroming</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">MnO2-oxidatiefilter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2">400-1.200 euro</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">KMnO4-regeneratiefilter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2">600-1.800 euro</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Beluchting + zandfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90-98%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2">1.500-5.000 euro</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Osmosefilter (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Deels</td>
                <td className="border border-gray-300 px-3 py-2">300-800 euro</td>
                <td className="border border-gray-300 px-3 py-2">Laag (tank)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Niet effectief</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">20-80 euro/jaar</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie en praktische adviezen
        </h2>
        <p className="text-gray-700 mb-4">
          Voordat u een mangaanfilter aanschaft, is meten verplicht. De concentratie bepaalt welk filtertype nodig is. Een testkit geeft een eerste indicatie; voor nauwkeurige gegevens stuurt u een watermonster naar een gecertificeerd laboratorium. Meet ook gelijktijdig het ijzergehalte, want in grondwater komen beide metalen vaak voor.
        </p>
        <p className="text-gray-700 mb-4">
          Bereken de benodigde flowrate: voor een gemiddeld gezin van 4 personen is een doorstroomcapaciteit van 1,5 tot 2 kubieke meter per uur noodzakelijk voor een gehele-huis-filter. Controleer ook de waterdruk (minimaal 2-3 bar voor oxidatiefilters).
        </p>
        <p className="text-gray-700 mb-6">
          Voor gecombineerd ijzer- en mangaanprobleem kiest u bij voorkeur een combinatiefilter (birm of mangaangreenzand) dat beide metalen aanpakt. Meer informatie over waterfilters voor specifieke verontreinigingen vindt u op onze pagina over{" "}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters vergelijken</Link>. Voor een complete aanpak van uw drinkwater kunt u ook een{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link> overwegen als aanvullende keukenoplossing.
        </p>

        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">Veelgestelde vragen over mangaanfilters</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{" "}
          <Link href="/waterfilter/ijzer" className="text-[#005F8A] underline">
            ijzer in water filteren
          </Link>{" "}
          en{" "}
          <Link href="/leidingwater" className="text-[#005F8A] underline">
            leidingwaterkwaliteit in Nederland
          </Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterfilter/mangaan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Mangaan in water</h3>
            <p className="text-sm text-gray-600">Gevaren van mangaan, herkenning en de beste waterfilters vergeleken.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van alle zware metalen die in drinkwater kunnen voorkomen.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en wanneer is het de beste keuze?</p>
          </Link>
          <Link href="/waterfilter/ijzer" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">IJzer in water filteren</h3>
            <p className="text-sm text-gray-600">Alles over ijzer in grondwater en de beste filters voor ijzerverwijdering.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
