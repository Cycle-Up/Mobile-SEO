import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Osmosewater voor espresso: ideale TDS en mineralen voor koffie",
  description:
    "Osmosewater voor espresso: ideaal TDS 75-150 mg/L. Puur osmosewater (5-30 mg/L) is te zacht. Remineraliseer met calciet of Mg voor optimale extractie.",
  alternates: { canonical: "https://waterfilterplatform.nl/osmose-water/koffie-espresso" },
  openGraph: {
    title: "Osmosewater voor espresso: ideale TDS en mineralen voor koffie",
    description:
      "Osmosewater voor espresso: ideaal TDS 75-150 mg/L. Puur osmosewater (5-30 mg/L) is te zacht. Remineraliseer met calciet of Mg voor optimale extractie.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is puur osmosewater geschikt voor espresso?",
    answer:
      "Nee. Puur osmosewater heeft een TDS van 5-30 mg/L, wat te laag is voor goede espresso-extractie. Zonder voldoende mineralen wordt het koffie-extract onvolledig, met een zure, dunne smaak als gevolg. Osmosewater met remineralisatie tot TDS 75-150 mg/L is de ideale basis voor espresso.",
  },
  {
    question: "Wat is de ideale TDS voor espresso?",
    answer:
      "De SCA (Specialty Coffee Association) adviseert een TDS van 75-250 mg/L voor koffiewater, met een ideaalwaarde van 150 mg/L. Voor espresso specifiek is TDS 75-150 mg/L met een KH (koolwaterstofhardheid) van 40-70 mg/L optimaal. Dit geeft goede extractie van aromen en voldoende buffercapaciteit.",
  },
  {
    question: "Waarom is magnesium belangrijk voor espresso?",
    answer:
      "Magnesium (Mg2+) bindt aromatische verbindingen in koffie en bevordert de extractie van suikers, zuren en vluchtige stoffen. Studies van de SCA en onafhankelijke koffielabs bevestigen dat een verhoogde magnesiumconcentratie leidt tot meer smaakcomplexiteit en een langere afdronk bij espresso.",
  },
  {
    question: "Hoe remineraliseer ik osmosewater voor espresso?",
    answer:
      "Het eenvoudigste DIY-recept is: los 1g magnesiumsulfaat (MgSO4, Epsom zout) en 0,5g natriumbicarbonat (NaHCO3) op in 10 liter osmosewater. Dit geeft een TDS van circa 100-120 mg/L met een KH van 40-50 mg/L. Alternatieven zijn kant-en-klare producten zoals Third Wave Water of Perfect Water.",
  },
  {
    question: "Hoef ik mijn espressomachine nog te ontkalken als ik osmosewater gebruik?",
    answer:
      "Bij gebruik van goed geremineraliseerd osmosewater (TDS 75-150 mg/L, lage KH) is kalkaanslag minimaal. In de praktijk kun je de ontkalkcyclus aanzienlijk verlengen of zelfs overslaan. Controleer altijd de handleiding van je machine. Bij TDS onder 50 mg/L kan het water te agressief zijn voor metalen onderdelen.",
  },
  {
    question: "Wat is het verschil tussen TDS, GH en KH voor koffiewater?",
    answer:
      "TDS is de totale hoeveelheid opgeloste stoffen en geeft een algemeen beeld van de mineralenconcentratie. GH (algemene hardheid) meet specifiek calcium (Ca2+) en magnesium (Mg2+) en bepaalt de smaakbijdrage. KH (koolwaterstofhardheid) meet de buffercapaciteit die de pH stabiliseert tijdens extractie en bepaalt kalkaanslag.",
  },
  {
    question: "Zijn kant-en-klare koffie-remineralisatieproducten beter dan DIY?",
    answer:
      "Kant-en-klare producten zoals Third Wave Water zijn eenvoudiger en consistent, maar duurder dan DIY. Voor hobbybaristas is DIY met losse mineraalzouten goedkoper en geeft meer controle. Voor professioneel gebruik of kleine cafetaria's zijn kant-en-klare remineralisatiecartridges praktischer vanwege de consistente dosering.",
  },
  {
    question: "Kan ik een filterkan gebruiken in plaats van een osmosefilter voor koffie?",
    answer:
      "Een filterkan (Brita, TAPP) verwijdert chloor en verbetert de smaak, maar geeft geen controle over TDS. De mineralenconcentratie blijft afhankelijk van het lokale leidingwater. In harde watergebieden biedt een filterkan geen bescherming tegen kalkaanslag in de machine. Voor optimale koffiesmaak en machinebescherming is osmosewater met remineralisatie superieur.",
  },
];

export default function OsmoseWaterKoffieEspressoPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Osmose water", url: "https://waterfilterplatform.nl/osmose-water" },
          { name: "Koffie espresso", url: "https://waterfilterplatform.nl/osmose-water/koffie-espresso" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Osmosewater voor espresso en koffie: TDS, mineralen en smaak",
          description:
            "Osmosewater voor espresso: ideaal TDS 75-150 mg/L met remineralisatie. SCA-normen, magnesium, KH en DIY recepten.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/osmose-water/koffie-espresso",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:underline">Osmose water</Link>
            <span className="mx-2">/</span>
            <span>Koffie espresso</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor espresso en koffie: TDS, mineralen en smaak
          </h1>
          <QuickAnswer answer="Puur osmosewater (TDS 5-30 mg/L) is te zacht voor espresso en geeft een zure, over-geextraheerde smaak. Het ideale TDS voor espresso ligt tussen 75-150 mg/L met een lage KH (koolwaterstofhardheid) van 40-70 mg/L. Osmosewater met remineralisatie is de meest controleerbare basis voor specialty koffie." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">

        <section className="bg-gray-50 rounded-2xl p-5 mb-10">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#sca-normen" className="hover:underline">SCA-waterstandaarden</a></li>
            <li><a href="#mineralen" className="hover:underline">Waarom mineralen belangrijk zijn</a></li>
            <li><a href="#puur-osmose" className="hover:underline">Puur osmosewater: nadelen</a></li>
            <li><a href="#tds-gh-kh" className="hover:underline">TDS vs GH vs KH voor koffie</a></li>
            <li><a href="#remineralisatie" className="hover:underline">Remineralisatie voor espresso</a></li>
            <li><a href="#producten" className="hover:underline">Kant-en-klare koffieproducten</a></li>
            <li><a href="#ontkalken" className="hover:underline">Espressomachine ontkalken</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="sca-normen" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">SCA-waterstandaarden voor koffie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De Specialty Coffee Association (SCA) publiceert officieel waterstandaarden voor het zetten van specialty koffie. Deze zijn de industriestandaard voor barista-kampioenschappen, professionele koffiebars en koffielabs wereldwijd.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Parameter</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Toegestaan bereik</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Ideaal (SCA)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { param: "TDS (totale opgeloste stoffen)", bereik: "75-250 mg/L", ideaal: "150 mg/L" },
                  { param: "KH (koolwaterstofhardheid)", bereik: "40-75 mg/L", ideaal: "40-70 mg/L" },
                  { param: "pH", bereik: "6,0-8,0", ideaal: "7,0" },
                  { param: "Chloor", bereik: "Niet detecteerbaar", ideaal: "0 mg/L" },
                  { param: "Natrium", bereik: "<10 mg/L", ideaal: "10 mg/L" },
                ].map((r, i) => (
                  <tr key={r.param} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-2.5 px-3 text-gray-800 text-xs">{r.param}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 text-xs">{r.bereik}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] text-xs">{r.ideaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            De TDS-norm van 75-250 mg/L met ideaal 150 mg/L geldt voor alle koffiebereiding. Voor espresso is het onderste deel van dit bereik (75-150 mg/L) optimaal. De KH-eis (40-75 mg/L) is cruciaal voor pH-stabiliteit tijdens extractie.
          </p>
        </section>

        <section id="mineralen" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom mineralen belangrijk zijn voor koffiesmaak</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Water is niet slechts een medium voor koffie-extractie: de mineralen in water spelen een actieve rol in het smaakprofiel. Twee mineralen zijn daarin het meest bepalend: magnesium en calcium.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-100 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Magnesium (Mg2+): aroma-extractor</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Magnesium bindt actief aan aromatische verbindingen in koffie. Het bevordert de extractie van suikers, vluchtige aromatische stoffen en de verbindingen die verantwoordelijk zijn voor complexiteit, zoetheid en de lange afdronk van espresso. Hogere Mg-concentratie leidt meetbaar tot meer aroma-extractie.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Calcium (Ca2+): body en structuur</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Calcium draagt bij aan de body en structuur van espresso. Te veel calcium (hoog GH) leidt echter tot kalkaanslag in de machine en geeft een minerale, vlakke smaak. Een lage tot matige calciumconcentratie in combinatie met voldoende magnesium is de optimale balans.
              </p>
            </div>
          </div>
        </section>

        <section id="puur-osmose" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Puur osmosewater: nadelen voor espresso</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Puur osmosewater heeft een TDS van 5-30 mg/L. Dit is bijna mineraalvrij water. Voor espresso is dit problematisch om meerdere redenen:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { titel: "Over-extractie en zure smaak", desc: "Zonder mineralen verloopt de extractie ongecontroleerd en te snel. Het resultaat is een zure, bijtende smaak doordat organische zuren onevenwichtig worden geextraheerd." },
              { titel: "Onstabiele pH tijdens extractie", desc: "Zonder KH (buffercapaciteit) is de pH van het water instabiel tijdens het extractieproces. Dit versterkt zure verbindingen en onderdrukt de afdronk." },
              { titel: "Corrosie van metalen onderdelen", desc: "Extreem zacht water (TDS &lt;10 mg/L) is chemisch agressief en kan metaalionen uit interne componenten van de espressomachine lossen, wat op termijn slijtage en smaakverandering geeft." },
              { titel: "Vlakke, waterige smaak", desc: "Onvoldoende mineralen betekent onvoldoende extractie van aromatische verbindingen. De koffie heeft weinig body en complexiteit." },
            ].map((item) => (
              <div key={item.titel} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <span className="text-red-500 shrink-0 mt-0.5 text-lg">&times;</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.titel}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        <section id="tds-gh-kh" className="mt-10 mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">TDS vs GH vs KH voor koffiewater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Drie parameters bepalen de kwaliteit van koffiewater: TDS, GH en KH. Ze meten elk een ander aspect en zijn alle drie relevant voor espresso.
          </p>
          <div className="space-y-4 mb-4">
            {[
              {
                param: "TDS (totale opgeloste stoffen)",
                uitleg: "TDS is de totale concentratie van alle opgeloste mineralen en stoffen in mg/L. Het geeft een algemeen beeld van de mineralenrijkdom van het water. Te laag TDS geeft weinig extractie, te hoog geeft over-extractie en bitterheid.",
                ideaal: "75-150 mg/L voor espresso",
              },
              {
                param: "GH (algemene hardheid)",
                uitleg: "GH meet specifiek calcium (Ca2+) en magnesium (Mg2+). Deze twee mineralen leveren de smaakbijdrage aan koffie. Hogere GH met de juiste Ca:Mg-verhouding verbetert body en aroma-extractie.",
                ideaal: "40-85 mg/L",
              },
              {
                param: "KH (koolwaterstofhardheid)",
                uitleg: "KH meet de buffercapaciteit van water: het vermogen om zuurgraadschommelingen te weerstaan. Tijdens espresso-extractie stijgt de zuurgraad tijdelijk. Voldoende KH stabiliseert de pH en voorkomt een te zure extractie.",
                ideaal: "40-70 mg/L",
              },
            ].map((item) => (
              <div key={item.param} className="border border-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{item.param}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full shrink-0">{item.ideaal}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="remineralisatie" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Remineralisatie voor espresso: recepten en methodes</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Remineralisatie brengt puur osmosewater naar de SCA-standaard. Er zijn drie basis-ingredienten die baristas en koffielabs gebruiken:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                stof: "Calciet (CaCO3 - calciumcarbonaat)",
                werking: "Verhoogt zowel GH (calcium) als KH (buffercapaciteit). Geeft een neutrale, milde smaakbijdrage. Ideaal als basis voor koffiewater.",
                dosering: "Calcietpatroon of 0,5-1g per 10L osmosewater",
              },
              {
                stof: "Magnesiumsulfaat (MgSO4 - Epsom zout)",
                werking: "Verhoogt de GH via magnesium zonder KH te beinvloeden. Bevordert direct de aroma-extractie. Beste keuze voor specialty koffie.",
                dosering: "1g per 10L osmosewater",
              },
              {
                stof: "Natriumbicarbonat (NaHCO3 - bakpoeder)",
                werking: "Verhoogt specifiek de KH (buffercapaciteit) zonder GH te verhogen. Stabiliseert de pH. Gebruik sparend om natriumgehalte laag te houden.",
                dosering: "0,5g per 10L osmosewater",
              },
            ].map((item) => (
              <div key={item.stof} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{item.stof}</p>
                <p className="text-sm text-gray-600 mb-2">{item.werking}</p>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">{item.dosering}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4 mb-4">
            <h3 className="font-semibold text-[#003F5C] mb-2 text-sm">DIY remineralisatierecept voor espresso</h3>
            <p className="text-sm text-gray-700">
              Los per 10 liter osmosewater op: <strong>1g MgSO4</strong> (Epsom zout) + <strong>0,5g NaHCO3</strong> (natriumbicarbonat). Dit geeft een TDS van circa 100-120 mg/L, GH 40-50 mg/L en KH 35-45 mg/L — binnen de SCA-norm voor espresso.
            </p>
          </div>
        </section>

        <section id="producten" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kant-en-klare koffie-remineralisatieproducten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor wie niet zelf wil doseren zijn er kant-en-klare oplossingen die osmosewater naar de koffiestandaard brengen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              {
                product: "Third Wave Water",
                type: "Capsule met mineraalmengs",
                gebruik: "Los een capsule op in 3,8L osmosewater. Geeft exact de SCA-standaard. Populair bij specialty koffiebars.",
              },
              {
                product: "Perfect Water (Barista Edition)",
                type: "Vloeistofconcentraat",
                gebruik: "Doseer via druppelflacon in osmosewater. Flexibel aanpasbaar. Beschikbaar in calciumrijke en magnesiumrijke variant.",
              },
              {
                product: "Remineralisatiecartridge (osmosefilter)",
                type: "Inline cartridge",
                gebruik: "Wordt in het osmosefiltratiesysteem gemonteerd. Voegt automatisch mineralen toe aan elk liter osmosewater. Meest praktische optie voor dagelijks gebruik.",
              },
            ].map((item) => (
              <div key={item.product} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{item.product}</p>
                <p className="text-xs text-[#005F8A] mb-2">{item.type}</p>
                <p className="text-sm text-gray-600">{item.gebruik}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ontkalken" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Espressomachine en ontkalken: osmosewater als oplossing</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een van de grootste praktische voordelen van osmosewater voor espresso is de drastische vermindering van kalkaanslag. Bij goed geremineraliseerd osmosewater (lage KH, lage GH) vormt zich nauwelijks kalk op de verwarmingselementen en brouwgroep.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Met leidingwater (hard gebied)</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>&#8226; Ontkalken elke 2-4 weken</li>
                <li>&#8226; Schaalvorming op verwarmingselement</li>
                <li>&#8226; Korter leven van de boiler</li>
                <li>&#8226; Minerale bijsmaak in koffie</li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4 border border-[#005F8A]/20">
              <h3 className="font-semibold text-[#003F5C] mb-2 text-sm">Met geremineraliseerd osmosewater</h3>
              <ul className="space-y-1.5 text-sm text-[#003F5C]">
                <li>&#8226; Ontkalken zeldzaam of niet nodig</li>
                <li>&#8226; Geen kalk op interne onderdelen</li>
                <li>&#8226; Langere levensduur van de machine</li>
                <li>&#8226; Zuivere koffiesmaak zonder minerale noten</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            Belangrijk: volledig puur osmosewater (TDS &lt; 10 mg/L) kan paradoxaal genoeg op termijn corrosief zijn voor koperen en bronzen interne onderdelen. Geremineraliseerd osmosewater op SCA-standaard (TDS 75-150 mg/L) is veilig voor alle espressomachines.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filterkan vs osmosewater voor koffie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een koolstoffilterkan (Brita, TAPP) verwijdert chloor en verbetert de smaak van leidingwater. Dit is beter dan ongefilterd leidingwater, maar biedt geen controle over TDS, GH of KH. In harde watergebieden (TDS &gt; 300 mg/L) vermindert een filterkan de kalkaanslag amper.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Kenmerk</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Filterkan</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Osmose + remineralisatie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { kenmerk: "Chloor verwijderen", filterkan: "Ja", osmose: "Ja (volledig)" },
                  { kenmerk: "TDS-controle", filterkan: "Nee", osmose: "Ja (volledig)" },
                  { kenmerk: "Kalkaanslag reductie", filterkan: "Deels", osmose: "Ja (bijna geen)" },
                  { kenmerk: "SCA-standaard bereiken", filterkan: "Nee", osmose: "Ja" },
                  { kenmerk: "Kosten", filterkan: "Laag", osmose: "Midden tot hoog" },
                ].map((r, i) => (
                  <tr key={r.kenmerk} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-2.5 px-3 text-gray-800">{r.kenmerk}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.filterkan}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A]">{r.osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kokend water kraan met osmose: direct ideaal koffiewater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een 4-in-1 kokend water kraan met ingebouwde osmosefilter en remineralisatiecartridge levert direct koffiewater op de ideale TDS. Geen losse filters, geen meten, geen mengen. De kraan levert koud gefilterd water voor koffieapparaten en direct kokend water voor Americano of Lungo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dit is de meest complete oplossing voor thuisbarista&#39;s die maximale koffiekwaliteit willen zonder handmatig remineraliseren. Bekijk het aanbod via de link hieronder.
          </p>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterhardheid/effect-op-koffie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid en koffie</h3>
            <p className="text-sm text-gray-600">Hoe waterhardheid de smaak en kwaliteit van koffie beinvloedt.</p>
          </Link>
          <Link href="/osmose-water/espresso" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater voor espresso</h3>
            <p className="text-sm text-gray-600">Het perfecte water voor espresso: mineraalsamenstelling en instelling.</p>
          </Link>
          <Link href="/osmose-water/mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in osmosewater</h3>
            <p className="text-sm text-gray-600">Welke mineralen nodig zijn en hoe je ze toevoegt aan osmosewater.</p>
          </Link>
          <Link href="/waterfilter/koffiezetter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor koffiezetter</h3>
            <p className="text-sm text-gray-600">Waterfilters speciaal geschikt voor koffiezetapparaten en espressomachines.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <section id="faq" className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over osmosewater en espresso</h2>
          <section className="mt-4">
            {faqItems.map((item, i) => (
              <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
                <p className="mt-2 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </section>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/osmose-water", label: "Osmosewater: alles wat je moet weten" },
              { href: "/omgekeerde-osmose/kopen", label: "Omgekeerde osmose filter kopen" },
              { href: "/omgekeerde-osmose/remineralisatie", label: "Osmosewater remineraliseren" },
              { href: "/osmose-water/koffie", label: "Osmosewater voor koffie: algemeen" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
