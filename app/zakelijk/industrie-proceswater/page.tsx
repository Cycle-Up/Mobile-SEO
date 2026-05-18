import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Proceswater voor industrie: filtratie, ontzouting en kwaliteitsnormen",
  description:
    "Industrieel proceswater: osmose, EDI en ultrafiltratie voor productie, koeling en stoom. Normen, capaciteitsberekening en onderhoud.",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk/industrie-proceswater" },
  openGraph: {
    title: "Proceswater voor industrie: filtratie, ontzouting en kwaliteitsnormen",
    description:
      "Industrieel proceswater: osmose, EDI en ultrafiltratie voor productie, koeling en stoom. Normen, capaciteitsberekening en onderhoud.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen drinkwater en industrieel proceswater?",
    answer:
      "Drinkwater voldoet aan de Nederlandse drinkwaternorm (max. 2,5 mmol/L hardheid, max. 0,10 µg/L pesticiden). Proceswater heeft veel strengere eisen afhankelijk van de toepassing: koelwater vereist lage hardheid om ketelsteen te voorkomen, stoomwater maximaal 0,2 mg/L totaal opgeloste stoffen (TDS), en farmaceutisch water (WFI) maximaal 0,5 mg/L TDS met strikte microbiologische normen. Drinkwater is slechts de startmaterie voor verdere zuivering.",
  },
  {
    question: "Wat is EDI en wanneer is het noodzakelijk?",
    answer:
      "Electrodeionisatie (EDI) is een membraanproces dat ionen uit water verwijdert met behulp van elektrische stroom en ionenwisselaars. EDI produceert ultrapuur water met een weerstand van 10-18 MΩ·cm (TDS < 0,05 mg/L). Het is noodzakelijk in de halfgeleiderindustrie (chipproductie), farmaceutische productie (injectiewater/WFI), en laboratoria. EDI vervangt chemische demineralisatie (DI) en vereist RO-water als invoer (TDS < 20 mg/L).",
  },
  {
    question: "Hoe bereken ik de benodigde processwater-capaciteit?",
    answer:
      "Capaciteitsberekening: (1) bepaal het dagverbruik per applicatie (koeltoren: 1-5% van circulatiecapaciteit per dag door verdamping en spuien; stoomketel: gelijk aan stoomproductie + verlies; productie: processpecifiek). (2) Tel alle verbruikers op. (3) Voeg 20-30% buffer toe voor piekverbruik en onderhoudsstop. (4) Reken de RO-recovery mee (typisch 70-80%): bij 1.000 L/uur nettoverbruik heeft u ca. 1.300-1.400 L/uur RO-capaciteit nodig. MKB start bij 500 L/uur, grootschalige productie bij 10.000-50.000+ L/uur.",
  },
  {
    question: "Wat kost een industrieel RO-systeem?",
    answer:
      "De investering hangt sterk af van de capaciteit: een kleine industriële RO (500-2.000 L/uur) kost 8.000-25.000 euro inclusief installatie. Een middelgrote installatie (5.000-20.000 L/uur) kost 30.000-120.000 euro. Grote installaties (50.000+ L/uur) starten bij 250.000 euro. Jaarlijkse exploitatiekosten (energie, membraanvervanging, chemicaliën, onderhoud) bedragen 8-15% van de investering. EDI voegt 20-40% toe aan de systeemkosten.",
  },
  {
    question: "Welke norm geldt voor farmaceutisch proceswater?",
    answer:
      "De Europese farmacopee (Ph. Eur.) onderscheidt: Gezuiverd Water (Purified Water, PW) voor productie van niet-parenterale geneesmiddelen (TDS < 0,5 mg/L, conductiviteit < 4,3 µS/cm bij 25°C, geen pirogenen vereist) en Water voor Injectiedoeleinden (WFI) voor parenterale geneesmiddelen (identieke chemische normen, maar endotoxinen < 0,25 IU/mL, microbiologisch < 10 KVE/100 mL). Productieproces voor WFI: RO + EDI of meervoudige destillatie, opslag bij 70-80°C of 4°C.",
  },
];

export default function IndustrieProceswaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Zakelijk", url: "https://waterfilterplatform.nl/zakelijk" },
          { name: "Industrieel proceswater", url: "https://waterfilterplatform.nl/zakelijk/industrie-proceswater" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Proceswater voor industrie: filtratie, ontzouting en kwaliteitsnormen",
          description:
            "Industrieel proceswater: osmose, EDI en ultrafiltratie voor productie, koeling en stoom. Normen, capaciteitsberekening en onderhoud.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/zakelijk/industrie-proceswater",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/">Home</Link><span className="mx-2">/</span>
            <Link href="/zakelijk">Zakelijk</Link><span className="mx-2">/</span>
            <span>Industrieel proceswater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Proceswater voor industrie: filtratie, ontzouting en kwaliteitsnormen
          </h1>
          <QuickAnswer answer="Industrieel proceswater vereist sterk hogere zuivering dan drinkwater. Omgekeerde osmose (RO) is de basis; voor ultrapuur water (halfgeleiders, farmaceutisch) volgt electrodeionisatie (EDI). Capaciteit start bij 500 L/uur voor MKB en loopt op tot 50.000+ L/uur voor grootschalige productie." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="zakelijk" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Toepassingen van industrieel proceswater</h2>
          <p className="text-gray-700 mb-4">
            Proceswater is de ruggengraat van de moderne industrie. Anders dan drinkwater moet
            industrieel water worden afgestemd op de specifieke eisen van elk productieproces. Een
            verkeerde waterkwaliteit kan leiden tot ketelsteen in leidingen, corrosie, microbiologische
            besmetting van producten of uitval van kostbare productieapparatuur.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Koelwatertorens en klimaatinstallaties</h3>
          <p className="text-gray-700 mb-4">
            Koelwatersystemen zijn grootverbruikers van behandeld water. Door verdamping
            concentreren de mineralen in het koelwater; zonder ontharding of osmose-aanvulling
            slaat kalk neer op warmtewisselaars, waardoor het rendement daalt en energieverbruik
            stijgt. Een concentratiefactor van 3-5 vereist een ontharder of RO-unit voor
            aanvulwater. Biocidetoevoeging en regelmatige meting van pH en geleidbaarheid zijn
            verplicht om Legionella-groei te beheersen.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Stoomketels en warmteopwekking</h3>
          <p className="text-gray-700 mb-4">
            Stoomketels stellen de strengste eisen aan voedingswater. Kalk, silica en zuurstof
            veroorzaken corrosie en afzetting op de buiswanden. De norm voor ketelvoedingswater
            varieert met de bedrijfsdruk: bij 10-30 bar geldt doorgaans max. 0,2 mg/L TDS en pH
            8,5-9,5. Een combinatie van ontharder, ontgasser en RO is hier standaard. Regelmatige
            blowdown (spuien) verwijdert geconcentreerde mineralen.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Voedingsmiddelenindustrie</h3>
          <p className="text-gray-700 mb-4">
            Water dat in direct contact komt met voedingsmiddelen moet voldoen aan de
            drinkwaternorm (Drinkwaterbesluit, Verordening (EG) 852/2004) en aanvullende
            bedrijfsspecifieke normen. Hardheidsnormering beschermt apparatuur; smaakneutraliteit
            is essentieel voor dranken en zuivelproducten. UV-desinfectie en ultrafiltratiebarrières
            beschermen tegen microbiologische besmetting.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Farmaceutische industrie</h3>
          <p className="text-gray-700 mb-4">
            De farmaceutische industrie onderscheidt Gezuiverd Water (PW) voor productiereiniging
            en WFI (Water for Injection) voor steriele producten. Beide zijn geregeld in de Europese
            Farmacopee (Ph. Eur. 0008 en 0169). Productiesystemen worden gesanctioneerd via
            validatieprotocollen (IQ/OQ/PQ) en vereisen continue monitoring van conductiviteit,
            TOC en microbiologie.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Halfgeleiderindustrie en electronica</h3>
          <p className="text-gray-700 mb-4">
            Chipproductie vereist ultrapuur water (UPW) met een weerstand van 18,2 MΩ·cm en
            deeltjesaantallen onder 1 deeltje per ml (groter dan 50 nm). Zelfs sporen van ionen
            (ppb-niveau) bederven siliciumwafers. Het productieschema: voorzuivering → RO →
            EDI → UV-oxidatie → ultrafiltratie → distributiering bij hoge snelheid om bacteriegroei
            te voorkomen.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kwaliteitsnormen per toepassing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mb-4">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Toepassing</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">TDS (mg/L)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Hardheid</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Norm/referentie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Drinkwater (uitgang)</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 150</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 2,5 mmol/L</td>
                  <td className="border border-gray-300 px-3 py-2">Drinkwaterbesluit NL</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Koelwater (aanvulwater)</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 50</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 0,5 mmol/L</td>
                  <td className="border border-gray-300 px-3 py-2">VDI 2035 / ASHRAE 188</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Stoomketel (&lt; 30 bar)</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 0,2</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 0,02 mmol/L</td>
                  <td className="border border-gray-300 px-3 py-2">EN 12952 / TRD 611</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Farmaceutisch (PW)</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 0,5</td>
                  <td className="border border-gray-300 px-3 py-2">Nvt (gedemineraliseerd)</td>
                  <td className="border border-gray-300 px-3 py-2">Ph. Eur. 0008</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">WFI (injectiewater)</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 0,5 + endotoxinen &lt; 0,25 IU/mL</td>
                  <td className="border border-gray-300 px-3 py-2">Nvt</td>
                  <td className="border border-gray-300 px-3 py-2">Ph. Eur. 0169</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Ultrapuur (UPW, halfgeleiders)</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 0,05 (18,2 MΩ·cm)</td>
                  <td className="border border-gray-300 px-3 py-2">Nvt</td>
                  <td className="border border-gray-300 px-3 py-2">SEMI F63 / ASTM D5127</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filtratiestappen: van voorzuivering tot EDI</h2>
          <p className="text-gray-700 mb-4">
            Een industrieel waterzuiveringssysteem bestaat uit meerdere trappen. Elke trap verwijdert
            specifieke verontreinigingen en beschermt de volgende trap. Hieronder de standaard
            volgorde voor hoge-reinheidswater:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-6 pl-2">
            <li>
              <strong>Voorzuivering: sedimentfilter (5-50 µm).</strong> Verwijdert deeltjes,
              zwevend materiaal en turbiditeit. Beschermt de ontharder en RO-membranen.
              Drukfilters of zakfilters; vervangingsinterval afhankelijk van turbiditeit ingaand water.
            </li>
            <li>
              <strong>Multimediafilter.</strong> Gelaagd bed van antraciet, zand en grind.
              Verwijdert fijn zwevend materiaal, ijzer en mangaan. Achterwaartse spoeling
              regenereert het bed dagelijks of wekelijks.
            </li>
            <li>
              <strong>Actief koolstoffilter (GAC).</strong> Verwijdert chloor, chloraminen,
              organische microverontreinigingen en reuk/smaakstoffen. Essentieel voor
              membraanlevensduur: chloor beschadigt RO-membranen (polyamide) onomkeerbaar.
            </li>
            <li>
              <strong>Waterontharder (ionenwisselaar Na-cyclus).</strong> Vervangt calcium- en
              magnesiumionen door natriumionen. Voorkomt kalkaanslag op RO-membranen en in
              stoomketels. Regeneratie met keukenzout (NaCl); verbruik 5-10 kg zout per m³
              onthard water.
            </li>
            <li>
              <strong>Omgekeerde osmose (RO).</strong> Kernstap. Verwijdert 95-99% van alle
              opgeloste ionen, organische moleculen, bacteriën en virussen via semipermeabel
              membraan onder druk (6-15 bar). Recovery 70-80%. Concentrate (reject) wordt
              afgevoerd naar riolering of hergebruikt. Uitvoerwater: TDS 5-30 mg/L afhankelijk
              van ingaand water.
            </li>
            <li>
              <strong>Electrodeionisatie (EDI).</strong> Combineert ionenwisselaarharsen en
              elektrische stroom om resterende ionen te verwijderen. Produceert water met
              weerstand 10-18 MΩ·cm zonder chemische regeneratie. Vereist RO-permeaat
              als invoer (TDS &lt; 20 mg/L). Noodzakelijk voor UPW en WFI-productie.
            </li>
            <li>
              <strong>UV-sterilisatie en ultrafiltratie (polishing).</strong> UV (185/254 nm)
              oxideert organische verbindingen en inactiveert micro-organismen. UF-membraan
              (0,01-0,1 µm) verwijdert deeltjes en pyrogenen. Eindstap voor UPW en farmaceutisch
              water voor distributie in een gesloten ring.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Capaciteitsberekening voor industrieel proceswater</h2>
          <p className="text-gray-700 mb-4">
            Een correcte capaciteitsberekening voorkomt onderdimensionering (productiestilstand)
            en overdimensionering (onnodige investeringskosten). Volg deze methode:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li><strong>Stap 1 – Inventarisatie verbruikers:</strong> lijst alle toepassingen op met hun nettoverbruik in L/uur (productie, koeling, stoom, reiniging). Scheid continue van discontinue verbruikers.</li>
            <li><strong>Stap 2 – Piekverbruik:</strong> voeg 25-35% toe voor gelijktijdigheidsfactor en piekperiodes (shift-start, CIP-cycli).</li>
            <li><strong>Stap 3 – Systeemverliezen:</strong> RO-recovery is 70-80%; voor 1.000 L/uur netto permeaat heeft u 1.250-1.430 L/uur ingaand water nodig.</li>
            <li><strong>Stap 4 – Buffertank:</strong> dimensioneer een buffertank voor 2-4 uur verbruik om pieken op te vangen en onderhoud zonder productiestilstand toe te staan.</li>
            <li><strong>Stap 5 – Groeiruimte:</strong> voeg 20-30% extra capaciteit toe voor toekomstige productie-uitbreiding of aanvullende verbruikers.</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mb-4">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bedrijfsgrootte</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Typisch verbruik</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanbevolen RO-capaciteit</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Indicatieve investering</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Klein MKB</td>
                  <td className="border border-gray-300 px-3 py-2">100-400 L/uur</td>
                  <td className="border border-gray-300 px-3 py-2">500 L/uur</td>
                  <td className="border border-gray-300 px-3 py-2">8.000-20.000 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Middelgroot MKB</td>
                  <td className="border border-gray-300 px-3 py-2">1.000-4.000 L/uur</td>
                  <td className="border border-gray-300 px-3 py-2">2.000-5.000 L/uur</td>
                  <td className="border border-gray-300 px-3 py-2">25.000-80.000 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Groot bedrijf / industrie</td>
                  <td className="border border-gray-300 px-3 py-2">10.000-40.000 L/uur</td>
                  <td className="border border-gray-300 px-3 py-2">15.000-50.000 L/uur</td>
                  <td className="border border-gray-300 px-3 py-2">150.000-500.000+ euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud van industriële watersystemen</h2>
          <p className="text-gray-700 mb-4">
            Een industrieel RO-systeem heeft een levensduur van 10-20 jaar bij goed onderhoud.
            Slecht onderhoud leidt tot membraanvervuiling (biofouling, scaling), hogere
            energiekosten en vroegtijdige membraanvervanging (levensduur membranen: 3-7 jaar
            normaal, 1-2 jaar bij slecht onderhoud).
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">CIP (Clean-In-Place)</h3>
          <p className="text-gray-700 mb-3">
            CIP is het reinigen van membranen zonder demontage. Frequentie: elke 3-12 maanden
            afhankelijk van waterkwaliteit. Twee fasen: (1) alkalisch spoelen (pH 11-12, NaOH +
            surfactant) voor biofouling en organische vervuiling; (2) zuur spoelen (pH 2-3, citroenzuur
            of HCl) voor mineralenafzetting (scaling). Na CIP: normalisatietest (genormaliseerde flux
            en zoutretentie) om reinigingssucces te beoordelen.
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Biocide en desinfectie</h3>
          <p className="text-gray-700 mb-3">
            Periodieke biocidebehandeling (SMBS – natriummetabisulfiet of chloor/DBNPA) voorkomt
            biofilmvorming op membranen. Frequentie: wekelijks tot maandelijks. Opmerking: polyamide
            RO-membranen zijn chloorinstolerant; gebruik alleen niet-oxiderende biociden of SMBS.
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Membraanreiniging en vervanging</h3>
          <p className="text-gray-700 mb-3">
            Monitoren via dagelijkse logboekregistratie van druk, flow, TDS en temperatuur.
            Normaliseer waarden naar 25°C voor vergelijkbaarheid. Vervanging is nodig wanneer
            de genormaliseerde flux met 15% daalt of de zoutpassage met 15% stijgt ten opzichte
            van begincondities. Membraanvervanging kost 200-800 euro per element (4&quot;/8&quot; diameter).
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

        <section className="mt-8 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-3">Verwante pagina's</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Zakelijk overzicht", href: "/zakelijk" },
              { label: "Filtertechnieken", href: "/filtertechnieken" },
              { label: "Omgekeerde osmose", href: "/omgekeerde-osmose" },
              { label: "Waterfilters vergelijken", href: "/vergelijken" },
              { label: "Keurmerken en normen", href: "/keurmerken" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm bg-[#E0F2FE] text-[#005F8A] px-3 py-1.5 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <CTABanner context="zakelijk" />
        </div>
      </div>
    </>
  );
}
