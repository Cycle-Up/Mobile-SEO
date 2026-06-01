import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { HealthDisclaimer } from "@/components/HealthDisclaimer";

export const metadata: Metadata = {
  title: "Chroom-6 in leidingwater Nederland: risico, normen en osmosefilter",
  description:
    "Chroom-6 in NL leidingwater: industriele hotspots, EU-norm 25 ug/L, WHO-richtlijn 0,05 ug/L. Osmosefilter verwijdert 95-99%. Tilburg, defensielocaties.",
  alternates: { canonical: "https://waterfilterplatform.nl/leidingwater/chroom-6" },
};

const faqItems = [
  {
    question: "Wat is chroom-6 en waarom is het gevaarlijk?",
    answer:
      "Chroom-6 (hexavalent chroom, Cr(VI)) is een oxidatievorm van het metaal chroom. Het IARC heeft chroom-6 geclassificeerd als groep 1 carcinogeen: bewezen kankerverwekkend bij mensen, met name longkanker bij inademing en maagkanker bij inname. Chroom-6 is gevaarlijker dan chroom-3 (trivalent chroom), dat een essentieel spoorelement is bij kleine concentraties. De hoge oplosbaarheid van chroom-6 in water maakt het een mobiele grondwaterverontreiniging.",
  },
  {
    question: "Hoe komt chroom-6 in leidingwater terecht?",
    answer:
      "Chroom-6 bereikt grondwater en oppervlaktewater via industriele lozingen (galvanische bedrijven, chroomhoudende verf en coatings, looierijen), de verbranding of verwijdering van chroomhoudend afval, historische bodemverontreiniging op industrieterreinen, en in sommige gevallen het gebruik van chroomhoudende roestvaste staalsoorten in waterleidinginfrastructuur. Eenmaal in de bodem oplost chroom-6 gemakkelijk in grondwater en kan het zich horizontaal verspreiden over tientallen meters.",
  },
  {
    question: "Wat is het Tilburg-schandaal rondom chroom-6?",
    answer:
      "Het Tilburg-schandaal betreft niet zozeer drinkwater maar beroepsmatige blootstelling. Werknemers bij het NS-werkplaats in Tilburg (en later ook bij DAF en defensie) werden blootgesteld aan chroom-6-houdende verf die gebruikt werd voor behandeling van materieel. Onderzoek toonde aan dat deze werknemers een verhoogd risico liepen op kanker. De bodemverontreiniging rondom dergelijke locaties kan in theorie nabijgelegen grondwaterwinningen beinvloeden, maar in de praktijk zijn de drinkwatereffecten beperkt vergeleken met de directe beroepsmatige blootstelling.",
  },
  {
    question: "Wat is de EU-norm voor chroom in drinkwater?",
    answer:
      "De EU-drinkwaterrichtlijn 2020/2184 stelt een norm van 25 microgram per liter (ug/L) voor totaal chroom in drinkwater. Dit is een significante aanscherping ten opzichte van de vorige norm van 50 ug/L. Het is belangrijk te vermelden dat de EU-norm voor totaal chroom geldt, niet specifiek voor chroom-6. De WHO heeft een aparte richtwaarde van 0,05 ug/L voor chroom-6 specifiek uitgebracht, wat factor 500 strenger is dan de EU-norm voor totaal chroom.",
  },
  {
    question: "Hoe groot is het verschil tussen de EU-norm en de WHO-richtwaarde voor chroom-6?",
    answer:
      "Het verschil is enorm: de EU-norm voor totaal chroom is 25 ug/L, terwijl de WHO-richtwaarde voor chroom-6 specifiek 0,05 ug/L bedraagt. Dat is een factor 500 strenger. De discrepantie is te verklaren doordat de EU-norm totaal chroom betreft (zowel chroom-3 als chroom-6 samen) en gebaseerd is op technische haalbaarheid, terwijl de WHO-richtwaarde puur gebaseerd is op het carcinogene risico van chroom-6 zelf. Voor consumenten die willen voldoen aan de WHO-richtwaarde is aanvullende filtratie relevant.",
  },
  {
    question: "Welk waterfilter verwijdert chroom-6?",
    answer:
      "Omgekeerde osmose verwijdert 95-99% van chroom-6 uit drinkwater en is de meest betrouwbare huishoudelijke methode. Ionenwisseling (kationenwisselaar met sterke anionhars) is ook effectief voor chroom-6-verwijdering (85-95%). Actief koolstoffilters zijn onvoldoende voor chroom-6 omdat dit metaalion niet wordt geadsorbeerd door koolstof. Sedimentfilters en standaard filterkansen hebben geen effect op chroom-6.",
  },
  {
    question: "Hoe lees ik mijn waterkwaliteitsrapport voor chroom?",
    answer:
      "Zoek in het jaarlijkse waterkwaliteitsrapport van uw drinkwaterbedrijf naar de sectie over zware metalen of anorganische parameters. Chroom wordt doorgaans gerapporteerd als 'totaal chroom' in microgram per liter (ug/L). Vergelijk de gevonden waarde met de norm van 25 ug/L. In de meeste Nederlandse rapporten zal chroom vermeld staan als 'nd' (niet detecteerbaar) of een zeer lage waarde ver onder de norm. Specifieke rapportage over chroom-6 versus chroom-3 is minder gangbaar maar kunt u opvragen bij uw waterbedrijf.",
  },
  {
    question: "Waar kan ik een osmosefilter kopen voor chroom-6?",
    answer:
      "Osmosefilters voor gebruik onder het aanrecht (Point-of-Use RO-systemen) zijn verkrijgbaar bij speciaalzaken voor waterzuivering, webshops en bouwmarkten. Prijzen liggen doorgaans tussen 200 en 600 euro voor het apparaat inclusief installatie, met jaarlijkse filterkosten van 50-150 euro. Let bij aanschaf op de certificering (NSF/ANSI 58 of vergelijkbaar) en controleer of de productspecificaties chroom-6-verwijdering vermelden. Zie ook onze vergelijkingspagina voor osmosefilters.",
  },
  {
    question: "Is chroom-6 in drinkwater een probleem voor baby's?",
    answer:
      "Gezien het ontbreken van een veilige ondergrens voor carcinogene stoffen, is extra voorzorg bij zuigelingen en jonge kinderen gerechtvaardigd. Hoewel overschrijdingen van de EU-drinkwaternorm voor chroom zeldzaam zijn in Nederland, kan een osmosefilter de blootstelling verminderen tot ver onder de WHO-richtwaarde van 0,05 ug/L. Voor flesvoeding wordt gebruik van gefilterd of osmosewater aanbevolen als extra voorzorgsmaatregel.",
  },
  {
    question: "Hoe wordt chroom-6 gemeten in drinkwater?",
    answer:
      "Chroom-6 wordt gemeten via spectrometrische methoden, waarbij het specifiek gemeten kan worden als hexavalent chroom (Cr(VI)) of als onderdeel van totaal chroom. De meest gangbare methode is ICP-MS (inductief gekoppeld plasma-massaspectrometrie), met detectiegrenzen in het bereik van 0,001-0,01 ug/L. Drinkwaterbedrijven meten totaal chroom als standaard; meting specifiek voor chroom-6 vereist aparte analyse. Gecertificeerde laboratoria kunnen op verzoek chroom-6-specifieke analyses uitvoeren.",
  },
  {
    question: "Welke industriegebieden in Nederland zijn aandachtspunten voor chroom?",
    answer:
      "In Nederland zijn de voornaamste aandachtsgebieden: Zeeland (Vlissingen-Oost met chemische industrie), de Rotterdamse haven en Rijnmond-zone (galvanische industrie, scheepsbouw), Chemelot in Geleen (chemisch industriecomplex in Limburg), en defensielocaties met historisch gebruik van chroomhoudende verf (Tilburg, Den Helder, Soesterberg). Op al deze locaties voeren de waterbedrijven verhoogde monitoring uit van grondwater en oppervlaktewater.",
  },
  {
    question: "Wat zijn de gezondheidsrisicos van chroom-6 in drinkwater op lange termijn?",
    answer:
      "Langdurige inname van chroom-6 via drinkwater is geassocieerd met een verhoogd risico op maagkanker en colorectale kanker, gebaseerd op epidemiologisch onderzoek. Dierproeven tonen bovendien levertoxiciteit en nierschade bij hoge doses. Het NTP (National Toxicology Program, VS) classificeerde chroom-6 in drinkwater als 'redelijkerwijs te verwachten carcinogeen bij mensen'. Bij de concentraties die normaal in Nederlands drinkwater voorkomen (ver onder 25 ug/L) is het risico statistisch gezien uiterst klein.",
  },
];

const filtermethoden = [
  {
    methode: "Omgekeerde osmose (RO)",
    verwijdering: "95-99%",
    andereMetalen: "Ja - lood, arseen, barium",
    kosten: "EUR 200-600 apparaat + EUR 50-150/jr filters",
    aanbevolen: true,
  },
  {
    methode: "Ionenwisseling (anion)",
    verwijdering: "85-95%",
    andereMetalen: "Beperkt",
    kosten: "EUR 300-800",
    aanbevolen: true,
  },
  {
    methode: "Actief koolstoffilter",
    verwijdering: "0-10%",
    andereMetalen: "Nee",
    kosten: "EUR 50-300",
    aanbevolen: false,
  },
  {
    methode: "Sedimentfilter",
    verwijdering: "0%",
    andereMetalen: "Nee",
    kosten: "EUR 30-100",
    aanbevolen: false,
  },
  {
    methode: "Filterkan (koolstof)",
    verwijdering: "0%",
    andereMetalen: "Nee",
    kosten: "EUR 15-60",
    aanbevolen: false,
  },
];

export default function Chroom6LeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Leidingwater", url: "https://waterfilterplatform.nl/leidingwater" },
          { name: "Chroom-6", url: "https://waterfilterplatform.nl/leidingwater/chroom-6" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Chroom-6 in leidingwater Nederland: risico, normen en osmosefilter",
          description:
            "Chroom-6 in NL leidingwater: industriele hotspots, EU-norm 25 ug/L, WHO-richtlijn 0,05 ug/L. Osmosefilter verwijdert 95-99%. Tilburg, defensielocaties.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/leidingwater/chroom-6",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:text-[#005F8A]">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Chroom-6</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Chroom-6 in leidingwater Nederland: risico, normen en osmosefilter
          </h1>
          <QuickAnswer answer="Chroom-6 is een bewezen carcinogeen (IARC groep 1). In Nederlands leidingwater zijn overschrijdingen van de EU-norm van 25 ug/L zeldzaam. Echter de WHO-richtwaarde voor chroom-6 specifiek is slechts 0,05 ug/L - factor 500 strenger. Aandachtsgebieden: Zeeland, Rotterdam-haven, Chemelot, defensielocaties. Osmosefilter verwijdert 95-99%; actief koolstoffilter is onvoldoende." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Chroom-6 versus chroom-3: een essentieel onderscheid</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Chroom is een metaal dat in de natuur voorkomt in meerdere oxidatievormen. Voor drinkwaterveiligheid zijn twee vormen relevant: chroom-3 (trivalent chroom, Cr(III)) en chroom-6 (hexavalent chroom, Cr(VI)).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 mb-2">Chroom-3 (Cr(III))</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Chroom-3 is een <strong>essentieel spoorelement</strong> dat betrokken is bij de insuline-signalering en het glucosemetabolisme. Bij kleine concentraties is het onschadelijk en zelfs nodig voor de gezondheid. Het is slecht oplosbaar in water en mobiel in de bodem, waardoor het zelden verhoogde concentraties bereikt in grondwater.
              </p>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 mb-2">Chroom-6 (Cr(VI))</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Chroom-6 is door het IARC geclassificeerd als <strong>groep 1 carcinogeen</strong>: bewezen kankerverwekkend bij mensen. Het is goed oplosbaar in water, mobiel in de bodem en chemisch stabiel over lange afstanden. Chroom-6 ontstaat bij industriele processen zoals galvaniseren, chroomhoudende verf en de productie van roestvrij staal.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Chroom-6 komt in drinkwater terecht via industriele lozingen, de verwijdering van chroomhoudend afval, historische bodemverontreinigingen op industrieterreinen, en in zeldzame gevallen via erosie van chroomhoudende rotsen (geologische achtergrondconcentraties). Eenmaal in de bodem lost chroom-6 gemakkelijk op in grondwater, waarna het zich kan verplaatsen naar waterwinputten.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Zie de pagina{" "}
            <Link href="/drinkwaternormen/chroom-6" className="text-[#005F8A] underline hover:no-underline">drinkwaternormen chroom-6</Link>{" "}
            voor de technische achtergrond van meetmethoden en wettelijke kaders.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De Tilburg-casus: beroepsmatige blootstelling vs. drinkwater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De bekendste Nederlandse chroom-6-zaak betreft de NS-werkplaats in Tilburg, waar werknemers tot ver in de jaren negentig werden blootgesteld aan chroomhoudende verf bij het schuren en repareren van treinstellen. Vergelijkbare situaties deden zich voor bij DAF in Eindhoven en op diverse defensilocaties. Onderzoek toonde aan dat deze werknemers een significant verhoogd risico liepen op longkanker en andere aandoeningen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Belangrijk onderscheid:</strong> de gezondheidsschade in Tilburg ontstond primair door <em>inademing en huidcontact</em> tijdens werkzaamheden, niet via drinkwater. De concentraties chroom-6 in werklucht kunnen vele malen hoger zijn dan ooit in drinkwater. De bodemverontreiniging rondom dergelijke werkplaatsen kan echter wel gevolgen hebben voor nabijgelegen grondwaterwinputten, wat het belang van monitoring onderstreept.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Drinkwaterbedrijven in regio's met defensielocaties of historische industrieterreinen voeren uit voorzorg intensiever monitoring uit op chroom. Tot op heden zijn er in Nederland geen gedocumenteerde overschrijdingen van de drinkwaternorm voor chroom direct gerelateerd aan de Tilburg-casus gemeld.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Drinkwatersituatie chroom in Nederland</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Drinkwaterbedrijven in Nederland meten chroom als standaard onderdeel van hun kwaliteitsmonitoring. De gemeten concentraties zijn in de meeste regio's erg laag, doorgaans onder 1 ug/L, ruim onder de EU-norm van 25 ug/L. Overschrijdingen van de drinkwaternorm voor chroom zijn in Nederland historisch zeer zeldzaam.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De voornaamste aandachtsgebieden zijn industriele clusters met historische of actuele chroom-emissies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2 text-sm">
            <li><strong>Zeeland (Vlissingen-Oost):</strong> Chemisch-industrieel complex met galvanische processen en historische lozingen.</li>
            <li><strong>Rotterdam-Rijnmondgebied:</strong> Galvanische industrie, scheepsbouw en oppervlaktebehandeling in de Botlek en het havengebied.</li>
            <li><strong>Chemelot, Geleen (Limburg):</strong> Een van de grootste chemische complexen van Nederland, met diverse processen waarbij chroom betrokken kan zijn.</li>
            <li><strong>Defensielocaties:</strong> Historische vliegbases en werkplaatsen (Soesterberg, Den Helder, Gilze-Rijen) waar chroomhoudende lak en verf gebruikt werd.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Vitens, Evides en WML voeren in de betrokken gebieden extra metingen uit. Consumenten kunnen de actuele waarden terugvinden in de{" "}
            <Link href="/leidingwater/pfas" className="text-[#005F8A] underline hover:no-underline">waterkwaliteitsrapporten</Link>{" "}
            van hun drinkwaterbedrijf.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Normen: EU versus WHO — een opvallend verschil</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De normstelling voor chroom in drinkwater kent een opvallende discrepantie tussen de EU en de WHO, die het begrijpen waard is voor iedereen die zijn waterrisico wil beoordelen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-[#005F8A]">25 ug/L</p>
              <p className="text-sm text-gray-700 mt-1">EU-norm totaal chroom</p>
              <p className="text-xs text-gray-500 mt-1">Drinkwaterrichtlijn 2020/2184</p>
            </div>
            <div className="bg-orange-100 rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-orange-700">0,05 ug/L</p>
              <p className="text-sm text-gray-700 mt-1">WHO-richtwaarde chroom-6</p>
              <p className="text-xs text-gray-500 mt-1">Op basis van carcinogeen risico</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-gray-700">x500</p>
              <p className="text-sm text-gray-700 mt-1">Factor verschil</p>
              <p className="text-xs text-gray-500 mt-1">WHO strenger dan EU</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De EU-norm van 25 ug/L geldt voor <em>totaal chroom</em>, dat wil zeggen de som van chroom-3 en chroom-6 gecombineerd. De WHO-richtwaarde van 0,05 ug/L is specifiek gebaseerd op het carcinogene risico van chroom-6 en is gebaseerd op een levenslang extra kankerrisico van 1 op 100.000. De discrepantie weerspiegelt ook de technische haalbaarheid: voor drinkwaterbedrijven is het kosteneffectief om onder 25 ug/L te blijven, maar het bereiken van 0,05 ug/L vereist geavanceerde behandeling.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In de praktijk liggen de chroom-6-concentraties in Nederlands leidingwater doorgaans ver onder zowel de EU-norm als de WHO-richtwaarde. Voor consumenten die naar de WHO-richtwaarde willen filteren is een osmosefilter de aangewezen keuze.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filteropties voor chroom-6</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet alle waterfiltertechnologieen zijn effectief voor chroom-6. De keuze hangt af van het gewenste reductiepercentage, budget en de andere verontreinigingen in uw water.
          </p>

          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Methode</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Verwijdering chroom-6</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Ook voor andere metalen</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Kosten</th>
                </tr>
              </thead>
              <tbody>
                {filtermethoden.map((r, i) => (
                  <tr
                    key={r.methode}
                    className={i % 2 === 0 ? "bg-white border-b border-gray-100" : "bg-[#E0F2FE]/30 border-b border-gray-100"}
                  >
                    <td className="py-2.5 px-3 font-medium">
                      {r.methode}
                      {r.aanbevolen && (
                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Aanbevolen</span>
                      )}
                    </td>
                    <td className={`py-2.5 px-3 font-semibold ${r.aanbevolen ? "text-green-700" : "text-red-600"}`}>
                      {r.verwijdering}
                    </td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.andereMetalen}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="font-semibold text-amber-800 mb-1 text-sm">Waarom actief koolstof onvoldoende is voor chroom-6</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              Actief koolstoffilters werken via adsorptie: organische stoffen, chloor en geurstoffen worden aangetrokken en vastgehouden door de koolstofmatrix. Chroom-6 is echter een anion (negatief geladen ion) in waterige oplossing en wordt niet geadsorbeerd door het koolstofoppervlak. Een koolstoffilter biedt dan ook vrijwel geen bescherming tegen chroom-6. Dit is een veelgemaakte vergissing bij consumenten die een filter kopen specifiek voor metallische verontreinigingen.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Voor de beste bescherming tegen chroom-6 in combinatie met andere verontreinigingen (lood, PFAS, nitraten) is een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">omgekeerde osmose systeem</Link>{" "}
            de meest complete oplossing. Meer informatie over de keuze van het juiste filter vindt u op de pagina{" "}
            <Link href="/waterfilter/chroom" className="text-[#005F8A] underline hover:no-underline">waterfilter voor chroom</Link>.
          </p>
        </section>

        <section className="mt-10">
          <p className="text-gray-700 leading-relaxed">
            Gerelateerde onderwerpen: bekijk ook de pagina over{" "}
            <Link href="/leidingwater/pfas" className="text-[#005F8A] underline hover:no-underline">PFAS in leidingwater</Link>{" "}
            en de uitgebreide{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] underline hover:no-underline">drinkwaternormen overzichtspagina</Link>.
          </p>
          <p className="text-gray-700 mt-4">
            Verdiep uw kennis: <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] hover:underline font-medium">Zware metalen in drinkwater: chroom-6, lood en arseen</Link>.
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
