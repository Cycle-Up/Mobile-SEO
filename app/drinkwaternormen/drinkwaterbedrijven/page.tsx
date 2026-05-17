import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Drinkwaterbedrijven Nederland: 10 bedrijven, gebieden en kwaliteit",
  description:
    "Nederland heeft 10 drinkwaterbedrijven. Ontdek wie uw water levert, hoe zij zuiveren en waar u kwaliteitsrapporten kunt vinden per regio.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/drinkwaternormen/drinkwaterbedrijven",
  },
  openGraph: {
    title: "Drinkwaterbedrijven Nederland: 10 bedrijven, gebieden en kwaliteit",
    description:
      "Nederland heeft 10 drinkwaterbedrijven. Ontdek wie uw water levert, hoe zij zuiveren en waar u kwaliteitsrapporten kunt vinden per regio.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoeveel drinkwaterbedrijven zijn er in Nederland?",
    answer:
      "Nederland heeft 10 drinkwaterbedrijven die gezamenlijk alle Nederlandse huishoudens en bedrijven van drinkwater voorzien. De bedrijven zijn geografisch afgebakend en hebben een exclusief leveringsgebied. De grootste zijn Vitens (Midden- en Oost-Nederland), Evides (Zeeland en Zuid-Holland) en Brabant Water (Noord-Brabant). Alle 10 bedrijven zijn publiek eigendom van provincies en/of gemeenten.",
  },
  {
    question: "Hoe weet ik welk drinkwaterbedrijf mijn water levert?",
    answer:
      "U kunt uw drinkwaterbedrijf vinden via de website van uw gemeente, via vewin.nl (brancheorganisatie) of door uw postcode op te zoeken op de website van het bedrijf in uw regio. Op uw waterrekening staat ook altijd vermeld welk bedrijf uw leverancier is. Elke regio heeft slechts een aanbieder.",
  },
  {
    question: "Leveren alle bedrijven even goed drinkwater?",
    answer:
      "In het algemeen ja: alle 10 bedrijven moeten voldoen aan dezelfde wettelijke normen in het Drinkwaterbesluit. Toch zijn er kleine kwaliteitsverschillen in smaak, hardheid en incidentele parameters, afhankelijk van de bronnen en zuiveringstechnieken. Bedrijven die oppervlaktewater (Maas, Rijn) als bron gebruiken, staan voor andere uitdagingen dan bedrijven die puur op grondwater vertrouwen.",
  },
  {
    question: "Wat is het verschil tussen grondwater en oppervlaktewater als bron?",
    answer:
      "Grondwaterbedrijven (zoals Vitens, Brabant Water, WMD) winnen water uit ondergrondse aquifers. Grondwater is van nature beter beschermd tegen oppervlakteverontreinigingen maar kan hoog zijn in ijzer, mangaan of nitraat afhankelijk van de bodemsamenstelling. Oppervlaktewaterbedrijven (zoals Evides en Dunea, die Maas-water gebruiken) moeten intensiever zuiveren vanwege medicijnresten, pesticiden en wisselende kwaliteit door neerslag.",
  },
  {
    question: "Hoe zuiveren drinkwaterbedrijven het water?",
    answer:
      "De zuivering verschilt per bedrijf en per bron. Veelgebruikte methoden zijn: ozonisatie (desinfectie en afbraak van organische stoffen), actief-koolfiltratie (adsorptie van pesticiden, medicijnresten en organische verbindingen), UV-desinfectie, langzame zandfiltratie (biologische afbraak), membraanfiltratie (ultrafiltratie of nanofiltratie) en duininfiltration (langzame infiltratie via duinzand bij Dunea en PWN).",
  },
  {
    question: "Waar vind ik het kwaliteitsrapport van mijn drinkwaterbedrijf?",
    answer:
      "Elk drinkwaterbedrijf is wettelijk verplicht zijn kwaliteitsresultaten openbaar te maken. U vindt het kwaliteitsrapport via de website van uw bedrijf, doorgaans onder 'kwaliteit' of 'waterkwaliteit'. U kunt uw postcode invoeren om de specifieke analyseresultaten voor uw leveringsgebied te bekijken. Vewin publiceert ook een nationaal overzicht.",
  },
  {
    question: "Wat doet Vitens?",
    answer:
      "Vitens is het grootste drinkwaterbedrijf van Nederland en levert water aan circa 5,8 miljoen mensen in de provincies Friesland, Groningen (deels), Drenthe, Overijssel, Flevoland, Gelderland en Utrecht. Vitens werkt vrijwel uitsluitend met grondwater uit diepe aquifers. Het bedrijf is publiek eigendom van provincies en gemeenten in zijn leveringsgebied.",
  },
  {
    question: "Wat is het verschil tussen Evides en Dunea?",
    answer:
      "Evides levert water in Zeeland en Zuid-Holland (buiten het Dunea-gebied) en gebruikt zowel Maaswater als grondwater. Dunea levert aan de regio Den Haag en de Duin- en Bollenstreek en gebruikt uitsluitend Rijn- en Maaswater dat via duininfiltration wordt gezuiverd. Duininfiltration is een langzame, natuurlijke zuivering die bijzonder effectief is voor de verwijdering van geneesmiddelen en andere microverontreinigingen.",
  },
  {
    question: "Heeft het drinkwaterbedrijf een rol bij loden leidingen in mijn woning?",
    answer:
      "Het drinkwaterbedrijf is verantwoordelijk voor de waterleiding tot aan uw huismeter of perceelsgrens. Loden leidingen in de openbare weg of de hoofdaansluiting zijn al vrijwel allemaal vervangen door drinkwaterbedrijven. Loden leidingen in de binnenhuisinstallatie (achter de meter) zijn de verantwoordelijkheid van de eigenaar van het pand. Het waterbedrijf geeft geen garanties over de kwaliteit na de meter.",
  },
  {
    question: "Kan ik klagen bij mijn drinkwaterbedrijf?",
    answer:
      "Ja. Alle drinkwaterbedrijven hebben een klantenservice voor klachten over waterkwaliteit, levering of facturering. Bij ernstige klachten of klachten die het bedrijf niet naar tevredenheid oplost, kunt u terecht bij de ILT (toezichthouder) of de ACM (Autoriteit Consument en Markt) voor tariefregulering. U heeft ook recht op een onafhankelijke wateranalyse als u vermoedt dat uw water niet aan de normen voldoet.",
  },
  {
    question: "Zijn drinkwaterbedrijven private ondernemingen?",
    answer:
      "Nee. Alle 10 Nederlandse drinkwaterbedrijven zijn volledig publiek eigendom. Privatisering van drinkwaterbedrijven is in Nederland bij wet verboden (Drinkwaterwet 2009, artikel 1). Aandeelhouders zijn uitsluitend provincies en gemeenten. Dit onderscheidt Nederland van landen als het Verenigd Koninkrijk, waar drinkwaterbedrijven grotendeels geprivatiseerd zijn.",
  },
  {
    question: "Wat is Waterschapsbedrijf Limburg (WBL)?",
    answer:
      "Waterschapsbedrijf Limburg (WBL) is een gemeenschappelijke regeling van de Limburgse waterschappen die rioolwaterzuivering uitvoert, maar geen drinkwater levert. Voor drinkwater in Limburg is Waterleiding Maatschappij Limburg (WML) verantwoordelijk. Dit is een veelgehoorde verwarring: WBL en WML zijn twee verschillende organisaties met verschillende taken.",
  },
];

export default function DrinkwaterbedrijvenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          {
            name: "Drinkwaterbedrijven",
            url: "https://waterfilterplatform.nl/drinkwaternormen/drinkwaterbedrijven",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Drinkwaterbedrijven Nederland: 10 bedrijven, gebieden en kwaliteit",
          description:
            "Nederland heeft 10 drinkwaterbedrijven. Ontdek wie uw water levert, hoe zij zuiveren en waar u kwaliteitsrapporten kunt vinden per regio.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/drinkwaterbedrijven",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Drinkwaterbedrijven</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwaterbedrijven Nederland: 10 bedrijven, gebieden en kwaliteit
          </h1>
          <QuickAnswer answer="Nederland heeft 10 publieke drinkwaterbedrijven die geografisch verdeeld zijn. De grootste zijn Vitens (Midden- en Oost-NL, 5,8 miljoen klanten), Evides (Zeeland en Zuid-Holland), Brabant Water (Noord-Brabant) en PWN (Noord-Holland). Elk bedrijf publiceert jaarlijks een kwaliteitsrapport met meetresultaten per postcodegebied. Privatisering is in Nederland bij wet verboden." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De 10 Nederlandse drinkwaterbedrijven
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederland heeft tien drinkwaterbedrijven die gezamenlijk zorgen voor de levering van
            drinkwater aan alle huishoudens en bedrijven. Ze zijn geografisch afgebakend en
            opereren zonder concurrentie in hun regio. Alle bedrijven zijn volledig publiek
            eigendom: privatisering is verboden door de Drinkwaterwet 2009. Aandeelhouders
            zijn uitsluitend provincies en gemeenten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Toezicht op de naleving van wettelijke normen wordt uitgevoerd door de Inspectie
            Leefomgeving en Transport (ILT). Meer over het controlesysteem leest u op onze
            pagina over{" "}
            <Link href="/drinkwaternormen/wie-controleert-drinkwater" className="text-[#005F8A] hover:underline font-medium">
              wie drinkwater controleert in Nederland
            </Link>
            .
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Vitens</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vitens is het grootste drinkwaterbedrijf van Nederland en levert water aan circa
            5,8 miljoen mensen. Het leveringsgebied omvat Friesland, Groningen (deels), Drenthe,
            Overijssel, Flevoland, Gelderland en Utrecht. Vitens werkt uitsluitend met grondwater
            uit diepe aquifers, wat resulteert in water met een stabiele kwaliteit en weinig
            seizoensvariatie. Drenthe en Friesland hebben van nature zacht water; Gelderland en
            Overijssel zijn wisselend.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Evides</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Evides levert water in Zeeland en het grootste deel van Zuid-Holland (exclusief het
            Dunea-gebied). Het bedrijf gebruikt zowel Maaswater (oppervlaktewater) als grondwater.
            Maaswater vereist intensievere zuivering vanwege variabele kwaliteit: medicijnresten,
            pesticiden en andere organische stoffen afkomstig uit bovenstrooms gelegen landen
            (Belgie, Luxemburg, Frankrijk) vereisen geavanceerde behandeling via ozonisatie en
            actief-koolfiltratie. Zeeland heeft relatief hard water door de kalkhoudende bodem.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Brabant Water</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Brabant Water levert drinkwater aan de hele provincie Noord-Brabant en gebruikt
            vrijwel uitsluitend grondwater. Noord-Brabant heeft door zijn zandige bodem van
            nature relatief zacht water in het oosten en harder water in het westen. Noord-Brabant
            is ook een intensief landbouwgebied, wat historisch heeft geleid tot nitraat- en
            pesticide-uitdagingen in het grondwater. Brabant Water investeert sterk in
            oeverinfiltration en extra zuiveringsstappen.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">PWN</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            PWN (Provinciaal Waterleidingbedrijf Noord-Holland) levert water in Noord-Holland,
            exclusief Amsterdam. PWN gebruikt een combinatie van oppervlaktewater (IJsselmeer)
            en duininfiltration. Het IJsselmeerwater wordt eerst behandeld en vervolgens via
            duinen geinfilteerd, waarbij een langzame biologische zuivering plaatsvindt voordat
            het wordt opgepompt en verder behandeld. Amsterdam heeft zijn eigen bedrijf: Waternet.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Dunea</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dunea levert drinkwater aan de regio Den Haag, de Duin- en Bollenstreek en het
            Westland. Dunea is uniek doordat het uitsluitend gebruikmaakt van duininfiltration
            met Rijn- en Maaswater. Het water wordt gedeeltelijk voorgezuiverd, vervolgens via
            de Leidse duinen geinfilteerd (waarbij het maanden langzaam door het duinzand
            stroomt) en daarna opgepompt. Deze methode is bijzonder effectief voor de
            verwijdering van microverontreinigingen.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">WML (Waterleiding Maatschappij Limburg)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            WML levert drinkwater aan de gehele provincie Limburg. Het bedrijf gebruikt een
            mix van grondwater (uit de Roerdalslenk en het Limburgse plateau) en Maaswater.
            Limburg heeft van nature relatief hard water, met name in het heuvelland. WML past
            ozonisatie, actief-koolfiltratie en membraanfiltratie toe. Limburg kent ook
            gebieden met van nature verhoogde concentraties arseen in grondwater, wat extra
            zuivering vereist.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Waternet</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waternet is een bijzonder bedrijf: het combineert drinkwaterlevering voor Amsterdam
            en de Amstelveense gemeenten met rioolwaterbeheer en waterschapstaken voor
            Waterschap Amstel, Gooi en Vecht. Waternet gebruikt IJsselmeerwater en grondwater.
            Amsterdam staat bekend om zijn relatief zachte, smakelijke leidingwater.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Oasen</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oasen levert drinkwater aan een deel van Zuid-Holland (het Groene Hart en Midden-Holland).
            Het bedrijf gebruikt grondwater en oeverinfiltration van de Hollandsche IJssel.
            Het leveringsgebied omvat steden als Gouda, Alphen aan den Rijn en Woerden.
            Oasen is een van de kleinere drinkwaterbedrijven van Nederland.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">WMD (Waterleiding Maatschappij Drenthe)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            WMD levert drinkwater in Drenthe en een deel van Groningen. Het bedrijf werkt
            uitsluitend met grondwater uit de Drentse aquifers. Drenthe heeft van nature
            zacht water (2-6 graden dH) en relatief weinig verontreinigingsproblemen door de
            lage bevolkingsdichtheid en beperkte industrie. WMD is een van de kleinste
            Nederlandse drinkwaterbedrijven gemeten naar klantenbestand.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Waterbedrijf Groningen</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waterbedrijf Groningen levert drinkwater aan de gemeente Groningen en omliggende
            gemeenten in de provincie Groningen (het deel niet door WMD of Vitens bediend).
            Het bedrijf gebruikt grondwater en heeft een relatief kleine leveringspopulatie.
            Groningen heeft van nature zacht water.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Zuiveringsmethoden
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De gebruikte zuiveringstechnologieen verschillen sterk tussen bedrijven, afhankelijk
            van de waterbron en de specifieke uitdagingen per regio. De meest toegepaste
            methoden:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Ozonisatie:</strong> Ozon (O3) oxideert organische verbindingen, doodt
              micro-organismen en breekt geur- en smaakstoffen af. Onmisbaar voor
              oppervlaktewaterbedrijven.
            </li>
            <li>
              <strong>Actief-koolfiltratie:</strong> Adsorbeert pesticiden, medicijnresten,
              PFAS en andere organische microverontreinigingen. Granulaire actieve kool (GAC)
              of poederige actieve kool (PAC).
            </li>
            <li>
              <strong>UV-desinfectie:</strong> Ultraviolet licht desinfecteert zonder
              chemicalien, effectief tegen Cryptosporidium en Giardia die bestand zijn
              tegen chloor.
            </li>
            <li>
              <strong>Langzame zandfiltratie:</strong> Biologische afbraak van organische
              stoffen door micro-organismen in een zandbed. Traditionele maar effectieve methode.
            </li>
            <li>
              <strong>Membraanfiltratie (ultrafiltratie/nanofiltratie):</strong> Verwijdert
              bacterien, virussen en macromoleculen. Ultrafiltratie: 0,01-0,1 micron.
              Nanofiltratie: 0,001-0,01 micron.
            </li>
            <li>
              <strong>Duininfiltration:</strong> Oppervlaktewater wordt via duinzand geinfilteerd.
              Langzame biologische zuivering over meerdere maanden. Zeer effectief voor
              microverontreinigingen.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Grondwater versus oppervlaktewater: uitdagingen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bedrijven die afhankelijk zijn van Maaswater (Evides, Dunea deels, WML deels)
            staan voor andere uitdagingen dan zuivere grondwaterbedrijven. Oppervlaktewater
            is gevoeliger voor:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Seizoensvariaties in kwaliteit door neerslag, smeltwater en industriele lozingen.</li>
            <li>Hogere concentraties medicijnresten en hormonen vanuit rioolwaterzuiveringsinstallaties bovenstroomse landen.</li>
            <li>Pesticiden uit landbouwgebieden langs de rivier.</li>
            <li>PFAS-belasting door historisch gebruik van blusschuim en industriele lozingen.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Grondwaterbedrijven profiteren van de natuurlijke filterende werking van de bodem,
            maar kunnen last hebben van nitraat (intensieve landbouwgebieden), arseen (geologisch)
            of PFAS (infiltratie van vervuild oppervlaktewater).
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Kwaliteitsrapporten per bedrijf en regio
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle drinkwaterbedrijven zijn wettelijk verplicht hun kwaliteitsresultaten openbaar
            te maken. U kunt uw postcodegebied opzoeken op de website van uw waterbedrijf om de
            actuele analyseresultaten te zien. De informatie omvat doorgaans: hardheid (dH of
            mmol/L), pH, nitraat, bacteriologische resultaten en eventuele bijzonderheden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u weten hoe u een waterkwaliteitsrapport leest en wat de meest relevante
            parameters voor uw situatie zijn? Lees onze gids over{" "}
            <Link href="/leidingwater/waterkwaliteitsrapport" className="text-[#005F8A] hover:underline font-medium">
              waterkwaliteitsrapporten
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Overzichtstabel: 10 drinkwaterbedrijven
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Bedrijf</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Provincie(s)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Hoofdbron</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Bijzonderheden</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Vitens</td>
                  <td className="border border-gray-300 px-3 py-2">FR, DR, OV, FL, GE, UT</td>
                  <td className="border border-gray-300 px-3 py-2">Grondwater</td>
                  <td className="border border-gray-300 px-3 py-2">Grootst van NL, 5,8 mln klanten</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Evides</td>
                  <td className="border border-gray-300 px-3 py-2">ZE, ZH (deels)</td>
                  <td className="border border-gray-300 px-3 py-2">Maaswater + grondwater</td>
                  <td className="border border-gray-300 px-3 py-2">Intensieve oppervlaktewaterzuivering</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Brabant Water</td>
                  <td className="border border-gray-300 px-3 py-2">NB</td>
                  <td className="border border-gray-300 px-3 py-2">Grondwater</td>
                  <td className="border border-gray-300 px-3 py-2">Landbouwgebied, nitraat-uitdaging</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">PWN</td>
                  <td className="border border-gray-300 px-3 py-2">NH (excl. Amsterdam)</td>
                  <td className="border border-gray-300 px-3 py-2">IJsselmeer + duininfiltration</td>
                  <td className="border border-gray-300 px-3 py-2">Grote duininfiltration-capaciteit</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Dunea</td>
                  <td className="border border-gray-300 px-3 py-2">ZH (Den Haag e.o.)</td>
                  <td className="border border-gray-300 px-3 py-2">Rijn/Maas + duininfiltration</td>
                  <td className="border border-gray-300 px-3 py-2">Uitsluitend duinzuivering</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">WML</td>
                  <td className="border border-gray-300 px-3 py-2">LI</td>
                  <td className="border border-gray-300 px-3 py-2">Grondwater + Maaswater</td>
                  <td className="border border-gray-300 px-3 py-2">Hard water, arseen-uitdaging deelgebieden</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Waternet</td>
                  <td className="border border-gray-300 px-3 py-2">NH (Amsterdam e.o.)</td>
                  <td className="border border-gray-300 px-3 py-2">IJsselmeer + grondwater</td>
                  <td className="border border-gray-300 px-3 py-2">Combineert drinkwater en waterbeheer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Oasen</td>
                  <td className="border border-gray-300 px-3 py-2">ZH (Groene Hart)</td>
                  <td className="border border-gray-300 px-3 py-2">Grondwater + oeverinfiltration</td>
                  <td className="border border-gray-300 px-3 py-2">Kleinere leveringsregio</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">WMD</td>
                  <td className="border border-gray-300 px-3 py-2">DR (deels), GR (deels)</td>
                  <td className="border border-gray-300 px-3 py-2">Grondwater</td>
                  <td className="border border-gray-300 px-3 py-2">Zacht water, landelijk gebied</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Waterbedrijf Groningen</td>
                  <td className="border border-gray-300 px-3 py-2">GR (deels)</td>
                  <td className="border border-gray-300 px-3 py-2">Grondwater</td>
                  <td className="border border-gray-300 px-3 py-2">Kleinste van NL, zacht water</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Klantenservice en klachten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heeft u vragen over uw waterkwaliteit of wilt u een klacht indienen? U kunt rechtstreeks
            contact opnemen met uw drinkwaterbedrijf via hun klantenservice. Bij geroepen of
            bruin water, ongebruikelijke smaak of reuk wordt aangeraden eerst uw kraan enige
            minuten te laten doorlopen. Als het probleem aanhoudt, meld dit dan altijd bij uw
            waterbedrijf.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u meer weten over hoe drinkwaterbedrijven worden gecontroleerd door de overheid?
            Lees onze pagina over{" "}
            <Link href="/drinkwaternormen/wie-controleert-drinkwater" className="text-[#005F8A] hover:underline font-medium">
              toezicht op drinkwaterkwaliteit
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De waterhardheid verschilt sterk per regio in Nederland. Controleer de hardheid van
            uw leidingwater per gemeente op onze{" "}
            <Link href="/waterhardheid" className="text-[#005F8A] hover:underline font-medium">
              waterhardheid-pagina
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Overweegt u een waterfilter vanwege de kwaliteit van uw kraanwater? Lees welke
            opties er zijn op onze overzichtspagina over{" "}
            <Link href="/waterfilter" className="text-[#005F8A] hover:underline font-medium">
              waterfilters
            </Link>
            .
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
