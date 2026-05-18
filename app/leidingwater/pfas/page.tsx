import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "PFAS in leidingwater Nederland: hotspots, normen en filteradvies",
  description:
    "PFAS in NL leidingwater: Chemours Dordrecht, blusschuim op vliegvelden. EU-norm 0,1 ug/L per 2023. Osmosefilter verwijdert 90-99% PFAS thuis.",
  alternates: { canonical: "https://waterfilterplatform.nl/leidingwater/pfas" },
};

const faqItems = [
  {
    question: "Wat zijn PFAS precies?",
    answer:
      "PFAS (per- en polyfluoralkylstoffen) zijn een groep van meer dan 10.000 synthetische chemicalien die gekenmerkt worden door zeer sterke koolstof-fluor bindingen. Hierdoor breken ze niet of nauwelijks af in het milieu en worden ze 'eeuwigdurende chemicalien' (forever chemicals) genoemd. Ze worden gebruikt in antiaanbaklagen, waterafstotende kleding, blusschuim, voedselverpakkingen en vele industriele processen.",
  },
  {
    question: "Hoe komen PFAS in Nederlands leidingwater terecht?",
    answer:
      "PFAS bereiken leidingwater via twee hoofdroutes: industriele lozingen (zoals Chemours in Dordrecht die GenX loosde in de Westerschelde en de Nieuwe Waterweg) en het gebruik van AFFF-blusschuim op vliegvelden en brandweeroefenterreinen. Dit PFAS-houdende blusschuim sijpelt in de bodem en verontreinigt grondwater. Drinkwaterbedrijven die grondwater of oppervlaktewater uit besmette gebieden winnen, kunnen PFAS in hun bronwater aantreffen.",
  },
  {
    question: "Wat is de GenX-affaire in Dordrecht?",
    answer:
      "GenX is een specifieke PFAS-verbinding (ammoniumzout van hexafluoropropyleenoxide-dimerzuur) die Chemours (voorheen DuPont) jarenlang loosde in de Nieuwe Waterweg bij Dordrecht. Onderzoek uit 2016-2018 toonde aan dat bewoners rondom de fabriek verhoogde bloedwaarden hadden. Drinkwaterbedrijf Evides, dat oppervlaktewater uit dit gebied gebruikt, moet extra zuivering toepassen. De GenX-affaire leidde tot aanscherping van de PFAS-normen in de EU-drinkwaterrichtlijn van 2020.",
  },
  {
    question: "Welke PFAS-normen gelden in Nederland?",
    answer:
      "Sinds de implementatie van de EU-drinkwaterrichtlijn 2020/2184 in 2023 gelden in Nederland twee PFAS-normen: maximaal 0,1 microgram per liter (ug/L) voor de som van 20 geprioriteerde PFAS (inclusief PFOS, PFOA, GenX), en maximaal 0,5 ug/L voor de totaalsom van alle gedetecteerde PFAS. Ter vergelijking: de VS EPA stelde in 2024 een norm van 0,004 ug/L voor PFOA en PFOS afzonderlijk, factor 25 strenger dan de EU-norm.",
  },
  {
    question: "Is leidingwater in Nederland veilig ondanks PFAS?",
    answer:
      "Ja, conform de huidige normen is leidingwater in Nederland veilig. De drinkwaterbedrijven zijn verplicht te voldoen aan de grenswaarden van het Drinkwaterbesluit. In de meeste regio's liggen de PFAS-waarden ruim onder de norm. Nabij hotspots (Dordrecht, Eindhoven, Volkel) zijn concentraties hoger maar drinkwaterbedrijven passen extra zuivering toe. Bezorgde consumenten kunnen kiezen voor extra zekerheid via een osmosefilter.",
  },
  {
    question: "Welk waterfilter verwijdert PFAS effectief?",
    answer:
      "Omgekeerde osmose (RO) is de meest effectieve huishoudelijke methode en verwijdert 90-99% van alle PFAS-verbindingen. Actief koolstoffiltratie (GAC of blokfilter) verwijdert langketenige PFAS (zoals PFOS en PFOA) deels effectief (60-90%), maar kortketenige PFAS en GenX worden minder goed verwijderd. Standaard filterkansen en sedimentfilters hebben geen effect op PFAS. Voor maximale bescherming is omgekeerde osmose de aanbevolen keuze.",
  },
  {
    question: "Wat zijn de gezondheidsrisicos van PFAS in drinkwater?",
    answer:
      "PFAS stapelen zich op in het lichaam (bio-accumulatie). Langdurige blootstelling aan hoge concentraties is geassocieerd met: verhoogd cholesterol, verminderde immuunrespons (inclusief verminderd effect van vaccinaties), schildklieraandoeningen, verhoogd risico op bepaalde kankers (nierkanker, zaadbalkanker) en vertraagde ontwikkeling bij kinderen. PFOS en PFOA zijn geclassificeerd als mogelijk kankerverwekkend (IARC groep 2B). De effecten op de lange termijn bij lagere blootstelling worden nog onderzocht.",
  },
  {
    question: "Hoe lees ik het waterkwaliteitsrapport van mijn waterbedrijf?",
    answer:
      "Elk drinkwaterbedrijf publiceert jaarlijks een waterkwaliteitsrapport op hun website. Zoek in dit rapport naar de tabel met gemeten parameters. PFAS staat vermeld onder individuele verbindingen (PFOS, PFOA, GenX, PFNA etc.) of als 'som 20 PFAS'. Vergelijk de gevonden waarden met de normen: 0,1 ug/L voor de som van 20 prioritaire PFAS. Als de waarden niet vermeld staan, kan dat betekenen dat ze onder de detectiegrens lagen of dat het bedrijf niet op die locatie meet.",
  },
  {
    question: "Hoeveel PFAS verwijdert een osmosefilter precies?",
    answer:
      "Een goed osmosefilter met een semipermeabele membraan van 0,0001 micrometer verwijdert doorgaans 90-99% van alle PFAS-verbindingen. De exacte verwijderingsefficiency hangt af van de molecuulgrootte van de PFAS-verbinding, de kwaliteit van het membraan, de watertemperatuur en -druk, en de ouderdom van het membraan. Kortketenige PFAS worden iets minder efficiënt verwijderd dan langketenige. Jaarlijkse vervanging van het membraan is essentieel voor behoud van effectiviteit.",
  },
  {
    question: "Voor wie is een PFAS-filter extra belangrijk?",
    answer:
      "Extra voorzorg via een osmosefilter is met name zinvol voor: zwangere vrouwen (PFAS passeren de placenta), zuigelingen en jonge kinderen (hogere lichaamsbelasting per kg), mensen met immuunaandoeningen of schildklierproblemen, en bewoners in de nabijheid van Chemours Dordrecht, vliegvelden (Eindhoven Airport, vliegbasis Volkel, Schiphol) en industrieterreinen. Ook personen met een al verhoogde PFAS-bloedwaarde profiteren van verlaging van de inname via water.",
  },
  {
    question: "Welke waterbedrijven gebruiken besmette bronnen?",
    answer:
      "Evides (Zeeland, Zuid-Holland) staat het meest bloot via oppervlaktewater uit de Westerschelde en Nieuwe Waterweg, beinvloed door Chemours. Brabant Water heeft te maken met grondwaterverontreiniging nabij vliegbasis Volkel (PFOS-blusschuim). Vitens meet verhoogde waarden in grondwater rondom Eindhoven Airport. Alle betrokken bedrijven passen extra zuivering (actieve kool, nanofiltration of omgekeerde osmose op schaal) toe om aan de normen te voldoen.",
  },
  {
    question: "Wat regelt de nieuwe EU-drinkwaterrichtlijn over PFAS?",
    answer:
      "De EU-drinkwaterrichtlijn 2020/2184 (van kracht in Nederland vanaf 2023) is de eerste Europese wetgeving die specifieke PFAS-grenswaarden voor drinkwater vastlegt: 0,1 ug/L voor de som van 20 prioritaire PFAS en 0,5 ug/L voor alle PFAS gecombineerd. Eerder waren er geen specifieke PFAS-normen in de Europese drinkwaterrichtlijn. De richtlijn verplicht ook een risicogebaseerde beoordeling van waterwingebieden en extra monitoring in gebieden met bekende PFAS-bronnen.",
  },
];

const waterbedrijvenData = [
  {
    bedrijf: "Evides",
    bron: "Oppervlaktewater Westerschelde / Nieuwe Waterweg",
    detectie: "Ja - GenX, PFOS",
    situatie: "Extra actieve koolstofbehandeling; waarden onder norm",
  },
  {
    bedrijf: "Brabant Water",
    bron: "Grondwater Noord-Brabant (o.a. nabij Volkel)",
    detectie: "Ja - PFOS (blusschuim)",
    situatie: "Extra zuiveringsstap; monitoring uitgebreid",
  },
  {
    bedrijf: "Vitens (Brabant/Gelderland)",
    bron: "Grondwater; bronnen nabij Eindhoven Airport",
    detectie: "Sporadisch - PFOS",
    situatie: "Bronbeheer; alternatieve winlocaties",
  },
  {
    bedrijf: "Dunea",
    bron: "Geïnfiltreerd Rijnwater via duinen",
    detectie: "Lage concentraties",
    situatie: "Duinpassage biedt extra zuivering; waarden laag",
  },
  {
    bedrijf: "PWN",
    bron: "Duinwater, IJsselmeer",
    detectie: "Zeer laag of onder detectiegrens",
    situatie: "Geen bijzondere maatregelen nodig",
  },
  {
    bedrijf: "Waternet (Amsterdam)",
    bron: "Oppervlaktewater Bethunepolder",
    detectie: "Laag",
    situatie: "Normale monitoring; waarden ruim onder norm",
  },
];

export default function PFASLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Leidingwater", url: "https://waterfilterplatform.nl/leidingwater" },
          { name: "PFAS", url: "https://waterfilterplatform.nl/leidingwater/pfas" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "PFAS in leidingwater Nederland: hotspots, normen en filteradvies",
          description:
            "PFAS in NL leidingwater: Chemours Dordrecht, blusschuim op vliegvelden. EU-norm 0,1 ug/L per 2023. Osmosefilter verwijdert 90-99% PFAS thuis.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/leidingwater/pfas",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:text-[#005F8A]">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>PFAS</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS in leidingwater Nederland: hotspots, normen en filteradvies
          </h1>
          <QuickAnswer answer="PFAS zitten in laag concentraties in een deel van het Nederlandse leidingwater, met name nabij Chemours in Dordrecht en vliegvelden zoals Volkel en Eindhoven. De EU-norm is 0,1 ug/L voor de som van 20 PFAS (van kracht since 2023). Leidingwater is conform norm veilig. Een osmosefilter verwijdert 90-99% van alle PFAS voor extra zekerheid." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn PFAS in leidingwater?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PFAS (per- en polyfluoralkylstoffen) vormen een verzameling van meer dan 10.000 synthetische verbindingen die gekenmerkt worden door uitzonderlijk sterke koolstof-fluor bindingen. Door die chemische stabiliteit breken ze in het milieu niet of vrijwel niet af, wat hen de bijnaam <strong>forever chemicals</strong> heeft opgeleverd. Ze worden al decennia lang gebruikt in antiaanbaklagen, waterafstotende kleding (GORE-TEX), blusschuim, voedselverpakkingen en talloze industriele processen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De route van PFAS van industriele bron naar uw kraanwater verloopt in meerdere stappen. Industriele lozingen en het gebruik van blusschuim zorgen voor PFAS in bodem en oppervlaktewater. Via regen en grondwaterstroming verspreiden de stoffen zich verder. Waterwingebieden in de buurt van bronnen raken besmet. Drinkwaterbedrijven verwijderen PFAS via actieve koolstoffiltratie, nanofiltration of omgekeerde osmose op schaal, maar kunnen niet altijd tot nul reduceren. Het eindresultaat is dat sporen van PFAS in sommige regio's aantoonbaar zijn in het kraanwater, zij het in concentraties die de geldende normen niet overschrijden.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er bestaat een belangrijk onderscheid tussen <strong>industriele PFAS</strong> (chemische productie, blusschuim op vliegvelden) en <strong>landbouw-PFAS</strong> (PFAS-houdend slib als meststof). Beide routes dragen bij aan grondwaterverontreiniging, maar de industriele hotspots zijn in Nederland de dominante bron voor verhoogde concentraties in drinkwater.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lees meer over de technische achtergrond van waterverontreinigingen op de pagina{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] underline hover:no-underline">drinkwaternormen in Nederland</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hotspots voor PFAS in Nederland</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nederland kent een beperkt aantal bekende hotspots waar PFAS-concentraties in grondwater of oppervlaktewater significant hoger zijn dan elders. De drie belangrijkste zijn:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Chemours / DuPont in Dordrecht (GenX-affaire)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                De chemische fabriek van Chemours (voorheen DuPont) in Dordrecht loost al decennialang PFAS in de Nieuwe Waterweg, waaronder de PFAS-variant GenX. Onderzoek van RIVM en IRAS (Universiteit Utrecht) toonde verhoogde bloedwaarden aan bij omwonenden. Drinkwaterbedrijf Evides, dat oppervlaktewater uit dit gebied gebruikt voor de drinkwaterproductie voor Zeeland en delen van Zuid-Holland, moest extra zuiveringsstappen implementeren. De lozing van GenX vormde een directe aanleiding voor de aanscherping van PFAS-normen in de EU-drinkwaterrichtlijn.
              </p>
            </div>

            <div className="border-l-4 border-orange-400 bg-orange-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Vliegbasis Volkel en Eindhoven Airport (AFFF-blusschuim)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Militaire en civiele vliegvelden gebruikten jarenlang AFFF-blusschuim (Aqueous Film Forming Foam) dat hoge concentraties PFOS en PFOA bevat. Bij brandoefeningen en incidenten sijpelt dit blusschuim in de bodem. Rondom vliegbasis Volkel en Eindhoven Airport zijn verhoogde PFOS-concentraties aangetoond in grondwater, wat drinkwaterbedrijven Brabant Water en Vitens dwingt tot aanvullende monitoring en in sommige gevallen alternatieve bronkeuze. Dezelfde problematiek speelt rondom Schiphol Airport.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 bg-yellow-50 rounded-r-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Westerschelde-zone</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                De Westerschelde, die door Zeeland stroomt richting de Noordzee, ontvangt PFAS via de Belgische industrie (3M in Zwijndrecht) en via de Nieuwe Waterweg. Evides wint oppervlaktewater langs dit traject en moet dit uitgebreid behandelen. Historisch onderzoek toonde aan dat vissen, schelpdieren en oevers langs de Westerschelde verhoogde PFAS-waarden bevatten, maar de drinkwaterkwaliteit voldoet na zuivering aan de normen.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Waterbedrijf</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Bron</th>
                  <th className="text-left py-2.5 px-3 font-semibold">PFAS-detectie gemeld</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Situatie</th>
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
                    <td className="py-2.5 px-3 text-xs">{r.detectie}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.situatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Bron: RIVM-rapportages en jaarverslagen drinkwaterbedrijven 2023-2025. Situatie kan wijzigen; controleer altijd het actuele kwaliteitsrapport van uw eigen waterbedrijf.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PFAS-normen: Nederland, EU en VS vergeleken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sinds de implementatie van de herziene EU-drinkwaterrichtlijn in 2023 gelden in Nederland voor het eerst specifieke wettelijke normen voor PFAS in drinkwater. Het{" "}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] underline hover:no-underline">Drinkwaterbesluit</Link> stelt twee grenswaarden:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-[#005F8A]">0,1 ug/L</p>
              <p className="text-sm text-gray-700 mt-1">Som van 20 prioritaire PFAS</p>
              <p className="text-xs text-gray-500 mt-1">EU-norm, van kracht 2023</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-[#005F8A]">0,5 ug/L</p>
              <p className="text-sm text-gray-700 mt-1">Totaalsom alle gedetecteerde PFAS</p>
              <p className="text-xs text-gray-500 mt-1">EU-norm, van kracht 2023</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ter vergelijking: de Amerikaanse EPA stelde in april 2024 nieuwe normen vast van slechts <strong>0,004 ug/L voor PFOA en PFOS afzonderlijk</strong> — een factor 25 strenger dan de EU-norm voor de som van alle prioritaire PFAS. Het verschil in aanpak (EU werkt met sommen, VS met individuele stoffen) maakt directe vergelijking complex, maar de VS-norm geeft aan dat sommige wetenschappers de EU-norm nog niet stringent genoeg vinden.
          </p>
          <p className="text-gray-700 leading-relaxed">
            De WHO heeft in haar drinkwaterrichtlijnen van 2022 advieswaarden opgesteld van 0,1 ug/L voor PFOS en 0,004 ug/L voor PFOA, wat dichter bij de VS-aanpak ligt dan de EU-norm. De EU-norm is een compromis tussen het voorzorgsprincipe en de technische haalbaarheid voor drinkwaterbedrijven.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uw waterkwaliteitsrapport lezen op PFAS</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elk drinkwaterbedrijf in Nederland is wettelijk verplicht de meetresultaten van het geleverde water publiek beschikbaar te stellen. Via de pagina{" "}
            <Link href="/leidingwater/waterkwaliteitsrapport" className="text-[#005F8A] underline hover:no-underline">waterkwaliteitsrapport</Link> leest u hoe u deze rapporten kunt vinden en interpreteren. Voor PFAS specifiek geldt:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm">
            <li>Zoek in het rapport naar de sectie over organische microverontreinigingen of PFAS/PFOS/PFOA specifiek.</li>
            <li>Controleer of de som van de 20 geprioriteerde PFAS wordt gerapporteerd, of alleen individuele stoffen.</li>
            <li>Als een stof vermeld staat als &quot;nd&quot; (not detected) of &quot;&lt;detectiegrens&quot;, betekent dit niet dat er geen PFAS aanwezig is, maar dat de concentratie te laag is om te meten met de gebruikte methode.</li>
            <li>Vergelijk de gerapporteerde waarden met de normen: 0,1 ug/L voor som 20 PFAS en 0,5 ug/L totaalsom.</li>
            <li>Bij twijfel kunt u contact opnemen met uw drinkwaterbedrijf en vragen om een specificatie per leveringsgebied of zelfs per meetpunt.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Drinkwaterinfo.nl biedt een centraal overzicht van kwaliteitsdata per postcode voor een deel van de waterbedrijven.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat helpt tegen PFAS in leidingwater?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor de meeste Nederlanders geldt: leidingwater drinken is veilig conform de geldende normen. Extra filtering is een persoonlijke keuze op basis van voorzorg, met name in risicogebieden of voor kwetsbare groepen.
          </p>
          <div className="space-y-4 mb-6">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Omgekeerde osmose: 90-99% PFAS-verwijdering</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een{" "}
                <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">omgekeerde osmose systeem</Link>{" "}
                dwingt water door een membraan met porieen van 0,0001 micrometer, kleiner dan elk PFAS-molecuul. Dit verwijdert 90-99% van alle PFAS-verbindingen, inclusief kortketenige GenX-varianten. Het is de meest effectieve huishoudelijke technologie voor{" "}
                <Link href="/waterfilter/pfas" className="text-[#005F8A] underline hover:no-underline">PFAS-filtratie</Link>.
              </p>
            </div>
            <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Actief koolfilter: deels effectief</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Actieve koolstoffilters (blok- of granulaatfilter) adsorbeert langketenige PFAS zoals PFOS en PFOA redelijk goed (60-90%), maar kortketenige verbindingen en GenX worden minder effectief verwijderd. De capaciteit neemt af naarmate het filter ouder wordt; regelmatige vervanging is cruciaal. Actief kool is minder betrouwbaar dan osmose voor PFAS-specifieke bescherming.
              </p>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Kraanwater drinken: veilig conform norm</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                In Nederland is kraanwater conform de drinkwaterwetgeving veilig te drinken. Extra filtering is geen medische noodzaak voor de algemene bevolking, maar kan een redelijke voorzorgsmaatregel zijn voor kwetsbare groepen of bewoners nabij bekende PFAS-hotspots. De keuze voor extra filtratie is dan ook een persoonlijke afweging.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Risicogroepen: wie heeft extra reden voor een osmosefilter?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hoewel leidingwater voor de algemene bevolking veilig is, zijn er groepen voor wie de extra zekerheid van een osmosefilter bijzonder gerechtvaardigd is:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#E0F2FE]/60 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Zwangere vrouwen</h3>
              <p className="text-sm text-gray-700">PFAS passeren de placentabarriere en kunnen invloed hebben op de foetale ontwikkeling. RIVM adviseert voorzorg bij verhoogde blootstelling.</p>
            </div>
            <div className="bg-[#E0F2FE]/60 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Zuigelingen en jonge kinderen</h3>
              <p className="text-sm text-gray-700">Door hun geringe lichaamsgewicht is de relatieve PFAS-belasting per kg hoger. PFAS kunnen de immuunontwikkeling beinvloeden en het effect van vaccinaties verminderen.</p>
            </div>
            <div className="bg-[#E0F2FE]/60 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Immuungecompromitteerden</h3>
              <p className="text-sm text-gray-700">Mensen met auto-immuunziekten, na orgaantransplantatie of in chemotherapie hebben een verhoogde gevoeligheid voor stoffen die het immuunsysteem beinvloeden.</p>
            </div>
            <div className="bg-[#E0F2FE]/60 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Bewoners nabij hotspots</h3>
              <p className="text-sm text-gray-700">Omwonenden van Chemours Dordrecht, vliegbasis Volkel, Eindhoven Airport of andere bekende PFAS-bronnen hebben al een hogere achtergrondblootstelling via lucht en voedsel.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer informatie over de juiste filterkeuze voor uw situatie vindt u op{" "}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] underline hover:no-underline">drinkwaternormen PFAS</Link>{" "}en de vergelijkingspagina{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">osmosefilter kopen</Link>.
          </p>
          <p className="text-gray-700 mt-4">
            Verdiep uw kennis: <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] hover:underline font-medium">PFAS als stofgroep in drinkwater: overzicht en filteradvies</Link>.
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
