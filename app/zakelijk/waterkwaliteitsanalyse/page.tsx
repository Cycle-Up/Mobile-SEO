import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterkwaliteitsanalyse voor bedrijven: lab-analyse aanvragen",
  description:
    "Wanneer heeft uw bedrijf een waterkwaliteitsanalyse nodig? Welke parameters, kosten (€80–400) en hoe u resultaten vertaalt naar de juiste waterfilter.",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk/waterkwaliteitsanalyse" },
  openGraph: {
    title: "Waterkwaliteitsanalyse voor bedrijven: lab-analyse aanvragen",
    description:
      "Wanneer heeft uw bedrijf een waterkwaliteitsanalyse nodig? Welke parameters, kosten (€80–400) en hoe u resultaten vertaalt naar de juiste waterfilter.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wanneer is een professionele waterkwaliteitsanalyse verplicht voor mijn bedrijf?",
    answer:
      "Een wettelijke verplichting geldt voor bedrijven die eigen bronwater of putwater gebruiken als drinkwater of proceswater (Drinkwaterbesluit artikel 14). Daarnaast is een analyse verplicht als uw bedrijf valt onder de Wet milieubeheer (grote grondwatergebruikers), bij legionellameldingen (GGD/NVWA-eis) en voor de voedingsmiddelenindustrie (HACCP-verplichting). Voor leidingwaterbedrijven is geen jaarlijkse analyse verplicht, maar bij klachten over smaak, geur of kleur of na het vernieuwen van de installatie is een analyse sterk aanbevolen.",
  },
  {
    question: "Welke parameters worden gemeten bij een standaard waterkwaliteitsanalyse?",
    answer:
      "Een standaard drinkwateranalyse omvat: microbiologisch (E. coli, enterokokken, Legionella pneumophila, Pseudomonas aeruginosa), chemisch (nitraat, nitriet, ammonium, zware metalen zoals lood en koper, hardheid/calcium/magnesium, pH, PFAS-screening) en fysisch (TDS/geleidbaarheid, troebelheid/turbiditeit, kleur, temperatuur). Een uitgebreid pakket voegt pesticidenscreening, PAK, arseen en chloride toe. Bespreek met het laboratorium welk pakket bij uw situatie past: putwater vereist een ander pakket dan een analyse na loodleidingvervanging.",
  },
  {
    question: "Hoe vraag ik een waterkwaliteitsanalyse aan en wat kost het?",
    answer:
      "U kunt een analyse aanvragen bij: uw drinkwaterbedrijf (beperkte basispakketten, soms gratis bij klachten), een onafhankelijk gecertificeerd laboratorium (Eurofins, SGS, Kiwa Analytical, ALcontrol) of via de KIWA-erkende analysedienst van uw gemeente. Kosten variëren: basispakket microbiologie + chemie €80-150; uitgebreid drinkwaterpakket €150-300; volledig met PFAS en zware metalen €250-400. Vraag altijd naar ISO 17025-accreditatie van het lab — alleen dan zijn de resultaten wettelijk erkend. Bij putwater: plan de monstername na een droge periode (zomer) voor worst-case resultaten.",
  },
  {
    question: "Wat doe ik als de analyse een normoverschrijding aantoont?",
    answer:
      "Bij een overschrijding van een drinkwaternorm (WHO of Nederlandse norm) zijn de stappen: (1) stop het gebruik van het water voor consumptie als het gaat om microbiologische besmetting; (2) informeer de GGD bij Legionella of E. coli; (3) laat een herhalingsanalyse uitvoeren om de overschrijding te bevestigen; (4) neem technische maatregelen (filtratie, desinfectie, bronopsporing); (5) documenteer alles voor uw wettelijk dossier. Bij lood boven 10 µg/L (EU-drinkwaternorm 2023): vervang loodleidingen of installeer een gecertificeerd loodverwijderingsfilter (NSF/ANSI 53).",
  },
  {
    question: "Hoe vertaal ik analyseresultaten naar de keuze voor een waterfilter?",
    answer:
      "De analyseresultaten bepalen welke filtertechniek effectief is: hoge hardheid (>15 dH) → waterontharder of RO; nitraat >50 mg/L → RO of ionenwisselaar; lood/zware metalen → RO of NSF 53-gecertificeerd koolstoffilter; PFAS → geactiveerd koolstoffilter (GAC, NSF 58-gecertificeerd); microbiologische besmetting (E. coli) → UV-sterilisatie + 0,2 µm ultrafiltratie; hoge TDS (>500 mg/L) → RO; ijzer/mangaan → oxidatiefilter + sedimentfilter. Voor complexe combinaties van parameters: laat een waterbehandelingsadvies opstellen op basis van het volledige analyserapport.",
  },
];

export default function WaterkwaliteitsanalysePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Zakelijk", url: "https://waterfilterplatform.nl/zakelijk" },
          { name: "Waterkwaliteitsanalyse", url: "https://waterfilterplatform.nl/zakelijk/waterkwaliteitsanalyse" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterkwaliteitsanalyse voor bedrijven: lab-analyse aanvragen",
          description:
            "Wanneer heeft uw bedrijf een waterkwaliteitsanalyse nodig? Welke parameters, kosten (€80–400) en hoe u resultaten vertaalt naar de juiste waterfilter.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/zakelijk/waterkwaliteitsanalyse",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/">Home</Link><span className="mx-2">/</span>
            <Link href="/zakelijk">Zakelijk</Link><span className="mx-2">/</span>
            <span>Waterkwaliteitsanalyse</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterkwaliteitsanalyse voor bedrijven: lab-analyse aanvragen
          </h1>
          <QuickAnswer answer="Een professionele waterkwaliteitsanalyse is verplicht bij gebruik van putwater of eigen bronwater, en aanbevolen bij klachten, wettelijke verplichtingen (HACCP, Legionella) of na installatievernieuwing. Een KIWA-erkend laboratorium analyseert microbiologische, chemische en fysische parameters voor €80–400. De resultaten bepalen direct welke filtertechniek het meest effectief is." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="zakelijk" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is een waterkwaliteitsanalyse nodig?</h2>
          <p className="text-gray-700 mb-4">
            De meeste Nederlandse bedrijven zijn aangesloten op het leidingwaternet en hoeven
            in principe geen jaarlijkse analyse uit te voeren: de waterbedrijven publiceren
            zelf kwaliteitsrapporten. Er zijn echter situaties waarbij een <strong>bedrijfsspecifieke
            analyse</strong> onmisbaar of wettelijk verplicht is:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li><strong>Eigen bronwater of putwater:</strong> wettelijk verplicht onder het Drinkwaterbesluit bij gebruik als drinkwater voor personeel of klanten.</li>
            <li><strong>Klachten over smaak, geur of kleur:</strong> kan wijzen op loodlekkage (oude installaties), ijzer/mangaan (corrosie) of microbiologische besmetting.</li>
            <li><strong>Na verbouwing of nieuwe installatie:</strong> nieuwe leidingen kunnen flux- en soldeerresiduen afgeven; nieuwe boiler kan biofilm introduceren.</li>
            <li><strong>Voedingsmiddelenindustrie (HACCP):</strong> analyse van proceswater is verplicht als onderdeel van het HACCP-plan.</li>
            <li><strong>Na positieve Legionella-meting:</strong> GGD of NVWA kan aanvullende analyses eisen, waaronder waterchemie, biofilm en temperatuurprofiel.</li>
            <li><strong>Vermoeden van PFAS-besmetting:</strong> relevant voor bedrijven in gebieden met bekende PFAS-verontreiniging (Westerschelde, Dordrecht, militaire vliegvelden).</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Vanuit het <Link href="/zakelijk" className="text-[#005F8A] underline hover:text-[#003F5C]">zakelijk overzicht</Link> vindt
            u per sector een overzicht van de relevante waterbehandelingseisen.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke parameters worden gemeten?</h2>
          <p className="text-gray-700 mb-4">
            Een laboratoriumanalyse wordt opgebouwd uit drie categorieën parameters. Welk pakket
            u nodig heeft, hangt af van de toepassing en de specifieke risico&apos;s van uw situatie.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Microbiologische parameters</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 pl-2">
            <li><strong>E. coli en enterokokken:</strong> indicatoren voor fecale besmetting; norm: 0 KVE/100 mL.</li>
            <li><strong>Legionella pneumophila:</strong> verplicht bij risicoanalyse; actiewaarde 100 KVE/L, alarmwaarde 1.000 KVE/L.</li>
            <li><strong>Pseudomonas aeruginosa:</strong> relevant voor zorgomgevingen; norm: 0 KVE/250 mL.</li>
            <li><strong>Koloniegetal 22°C en 37°C:</strong> algemene indicator voor bacteriegroei; norm: &lt;100 KVE/mL.</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Chemische parameters</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Nederlandse norm</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filteroplossing bij overschrijding</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 50 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose of ionenwisselaar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Lood</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 10 µg/L (EU 2023)</td>
                  <td className="border border-gray-300 px-3 py-2">RO of NSF/ANSI 53 koolstoffilter</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">PFAS (som)</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 0,1 µg/L (EU 2026)</td>
                  <td className="border border-gray-300 px-3 py-2">Geactiveerd koolstoffilter (GAC) of RO</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Hardheid (Ca + Mg)</td>
                  <td className="border border-gray-300 px-3 py-2">Indicatief 1–2,5 mmol/L</td>
                  <td className="border border-gray-300 px-3 py-2">Waterontharder of RO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Arseen</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 10 µg/L</td>
                  <td className="border border-gray-300 px-3 py-2">RO of ijzerhydroxide-adsorptiefilter</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">IJzer/mangaan</td>
                  <td className="border border-gray-300 px-3 py-2">&lt; 200 µg/L / &lt; 50 µg/L</td>
                  <td className="border border-gray-300 px-3 py-2">Oxidatiefilter + sedimentfilter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Fysische parameters</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 pl-2">
            <li><strong>TDS (Total Dissolved Solids) / geleidbaarheid:</strong> geeft een globaal beeld van de totale mineralenconcentratie; norm drinkwater &lt;2.500 µS/cm.</li>
            <li><strong>pH:</strong> norm 6,5–9,5; buiten dit bereik verhoogde corrosie van leidingen of kalkneerslag.</li>
            <li><strong>Troebelheid (turbiditeit):</strong> norm &lt;1 NTU; hoge troebelheid wijst op sediment of microbiologische activiteit.</li>
            <li><strong>Kleur:</strong> norm &lt;20 mg Pt/L; geel/bruin water wijst vaak op ijzer, mangaan of humuszuren (putwater).</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe een analyse aanvragen: stap voor stap</h2>
          <p className="text-gray-700 mb-4">
            Een geldige waterkwaliteitsanalyse voor wettelijke doeleinden moet worden uitgevoerd
            door een <strong>ISO 17025-geaccrediteerd laboratorium</strong>. Hieronder de praktische stappen:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>
              <strong>Kies het analysepakket:</strong> baseer de parameterkeuze op uw situatie
              (putwater, klachten, HACCP, Legionella). Vraag het lab om advies bij twijfel.
            </li>
            <li>
              <strong>Kies een gecertificeerd laboratorium:</strong> Eurofins, SGS Wageningen, Kiwa Analytical,
              ALcontrol/RPS of een regionaal KIWA-erkend lab. Vergelijk kosten en doorlooptijd (standaard 5-10 werkdagen).
            </li>
            <li>
              <strong>Monsternameprotocol:</strong> het lab stuurt steriele flessen en instructies.
              Volg het protocol nauwkeurig: juiste aftappunt, doorspoelen of niet (afhankelijk van het doel),
              bewaarcondities (gekoeld, donker) en maximale transporttijd (24 uur voor microbiologie).
            </li>
            <li>
              <strong>Kosten:</strong> basispakket microbiologie + chemie €80-150; uitgebreid drinkwaterpakket
              €150-300; volledig met PFAS, zware metalen en pesticiden €250-400.
            </li>
            <li>
              <strong>Resultatenrapport:</strong> het lab levert een rapport met gemeten waarden,
              normen en eventuele overschrijdingen. Bewaar dit minimaal 5 jaar voor uw wettelijk dossier.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Resultaten interpreteren en filteradvies</h2>
          <p className="text-gray-700 mb-4">
            Het analyserapport is de basis voor een gerichte filterinstallatie. Generieke filters
            zonder analyseonderbouwing lossen mogelijk niet het werkelijke probleem op, of zijn
            over- of onderdimensioneerd. De relatie tussen analyseresultaat en filteradvies:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>
              <strong>Hoge hardheid (&gt;15 dH):</strong> een{" "}
              <Link href="/waterontharder" className="text-[#005F8A] underline hover:text-[#003F5C]">waterontharder</Link>{" "}
              of RO-systeem is de meest kosteneffectieve keuze; osmose produceert vrijwel kalkvrij water.
            </li>
            <li>
              <strong>Nitraat &gt;50 mg/L:</strong> omgekeerde osmose of een specifieke
              nitraationenwisselaar; koolstoffilters verwijderen nitraat niet.
            </li>
            <li>
              <strong>PFAS-detectie:</strong> een granulaire geactiveerde koolstoffilter (GAC)
              verwijdert PFAS effectief; RO als alternatief bij hogere concentraties.
            </li>
            <li>
              <strong>Microbiologische besmetting (E. coli):</strong> UV-sterilisatie (254 nm)
              gecombineerd met 0,2 µm ultrafiltratie; los UV zonder voorfilter is onvoldoende
              bij hoge troebelheid. Meer over deze techniek op de pagina{" "}
              <Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] underline hover:text-[#003F5C]">ultrafiltratie</Link>.
            </li>
            <li>
              <strong>Legionella positief:</strong> primaire maatregel is thermisch beheer; lees het
              volledige stappenplan op de pagina{" "}
              <Link href="/zakelijk/legionella-beheersplan" className="text-[#005F8A] underline hover:text-[#003F5C]">Legionella-beheersplan voor bedrijven</Link>.
            </li>
            <li>
              <strong>Hoge TDS (&gt;500 mg/L) of slechte smaak:</strong> RO of een multi-stage
              koolstoffilter; zie de vergelijking op{" "}
              <Link href="/drinkwaternormen" className="text-[#005F8A] underline hover:text-[#003F5C]">drinkwaternormen</Link>.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Bij complexe waterkwaliteitsproblemen (meerdere parameters buiten norm, putwater met
            variabele kwaliteit) is een combinatiesysteem vaak nodig. Bespreek het analyserapport
            met een gecertificeerde waterbehandelingsinstallateur voor een installatieadvies op maat.
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
          <h2 className="text-lg font-semibold text-[#003F5C] mb-3">Verwante pagina&apos;s</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Zakelijk overzicht", href: "/zakelijk" },
              { label: "Legionella-beheersplan", href: "/zakelijk/legionella-beheersplan" },
              { label: "Waterontharder", href: "/waterontharder" },
              { label: "Ultrafiltratie", href: "/filtertechnieken/ultrafiltratie" },
              { label: "Drinkwaternormen", href: "/drinkwaternormen" },
              { label: "Industrie en proceswater", href: "/zakelijk/industrie-proceswater" },
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
