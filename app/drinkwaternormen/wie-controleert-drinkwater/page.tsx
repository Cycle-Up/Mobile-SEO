import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Wie controleert drinkwater in Nederland? RIVM, ILT en waterbedrijven",
  description:
    "RIVM, ILT en drinkwaterbedrijven controleren samen drinkwaterkwaliteit. Leer wie verantwoordelijk is, wat ze meten en hoe ze reageren bij normoverschrijding.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/drinkwaternormen/wie-controleert-drinkwater",
  },
  openGraph: {
    title: "Wie controleert drinkwater in Nederland? RIVM, ILT en waterbedrijven",
    description:
      "RIVM, ILT en drinkwaterbedrijven controleren samen drinkwaterkwaliteit. Leer wie verantwoordelijk is, wat ze meten en hoe ze reageren bij normoverschrijding.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wie is verantwoordelijk voor de kwaliteit van drinkwater in Nederland?",
    answer:
      "De primaire verantwoordelijkheid ligt bij de 10 drinkwaterbedrijven: zij zijn wettelijk verplicht drinkwater te leveren dat voldoet aan het Drinkwaterbesluit. De Inspectie Leefomgeving en Transport (ILT) houdt onafhankelijk toezicht. RIVM adviseert wetenschappelijk en beheert het landelijk meetnet. Het ministerie van Infrastructuur en Waterstaat stelt de wetgeving vast.",
  },
  {
    question: "Wat doet het RIVM voor drinkwaterkwaliteit?",
    answer:
      "RIVM voert onafhankelijk wetenschappelijk onderzoek uit naar drinkwaterkwaliteit, adviseert de overheid bij normstelling, beheert het Landelijk Meetnet Watergevaarlijke Stoffen (LMWS) en publiceert jaarlijks het rapport 'Drinkwaterkwaliteit in Nederland'. RIVM heeft geen handhavingsbevoegdheden: dat is voorbehouden aan de ILT.",
  },
  {
    question: "Welke bevoegdheden heeft de ILT?",
    answer:
      "De Inspectie Leefomgeving en Transport kan aanwijzingen geven aan drinkwaterbedrijven, een bestuursdwang opleggen, een last onder dwangsom opleggen en in ernstige gevallen overgaan tot strafrechtelijke aangifte. Bij normoverschrijding verplicht de ILT het betreffende waterbedrijf tot herstelmaatregelen en publiceert zij haar bevindingen in het jaarlijkse ILT-jaarverslag Drinkwater.",
  },
  {
    question: "Moeten drinkwaterbedrijven zelf meten?",
    answer:
      "Ja. Drinkwaterbedrijven hebben een wettelijke meetplicht op basis van het Drinkwaterbesluit. Ze zijn verplicht te meten op productielocaties, in het distributienet en aan de kraan. De meetfrequentie is afhankelijk van de geproduceerde volumes: hoe meer water, hoe vaker gemeten moet worden. Laboratoria moeten accreditatie hebben conform ISO/IEC 17025.",
  },
  {
    question: "Is de gemeente verantwoordelijk als mijn drinkwater slecht is?",
    answer:
      "Nee, niet voor de waterlevering zelf. Het drinkwaterbedrijf is verantwoordelijk tot aan de huisaansluiting (de meter). Binnenhuisinstallaties vallen onder de verantwoordelijkheid van de eigenaar van het pand. Bij huurwoningen is dat de verhuurder. Gemeenten hebben geen wettelijke rol in het toezicht op drinkwaterkwaliteit.",
  },
  {
    question: "Wat gebeurt er als een norm overschreden wordt?",
    answer:
      "Bij een normoverschrijding zijn drinkwaterbedrijven wettelijk verplicht dit te melden aan de ILT en consumenten te informeren. Afhankelijk van de ernst kan het bedrijf een kookadvies uitvaardigen, een gedoogbeschikking aanvragen terwijl herstelmaatregelen worden uitgevoerd, of de levering tijdelijk stopzetten. Alle normoverschrijdingen worden gepubliceerd in het jaarrapport.",
  },
  {
    question: "Hoe vaak wordt drinkwater gemeten?",
    answer:
      "De meetfrequentie verschilt sterk. Grote productielocaties (meer dan 100.000 m3 per dag) moeten sommige parameters dagelijks meten. Kleine distributiesystemen (minder dan 100 m3 per dag) kunnen volstaan met minder frequente steekproeven. Microbiologische parameters worden vaker gemeten dan chemische omdat bacteriologische risicos sneller veranderen.",
  },
  {
    question: "Wat is het Landelijk Meetnet Watergevaarlijke Stoffen?",
    answer:
      "Het Landelijk Meetnet Watergevaarlijke Stoffen (LMWS) is een door RIVM beheerd netwerk dat oppervlaktewater, grondwater en drinkwater monitort op gevaarlijke stoffen zoals PFAS, medicijnresten, pesticiden en zware metalen. De meetresultaten vormen de basis voor beleidsadviezen en normaanpassingen. De data zijn openbaar beschikbaar via het RIVM.",
  },
  {
    question: "Publiceert het waterbedrijf zijn meetresultaten?",
    answer:
      "Ja, alle drinkwaterbedrijven zijn wettelijk verplicht hun kwaliteitsresultaten openbaar te maken. Ze publiceren jaarlijkse kwaliteitsrapporten op hun eigen website en rapporteren aan de ILT. Consumenten kunnen hun postcodegebied opzoeken en de actuele wateranalyse downloaden. Vewin (de branchevereniging) publiceert een gezamenlijk jaaroverzicht.",
  },
  {
    question: "Wat is een gedoogbeschikking bij drinkwater?",
    answer:
      "Een gedoogbeschikking is een tijdelijke ontheffing die de ILT kan verlenen als een drinkwaterbedrijf een norm overschrijdt maar het water nog veilig genoeg is om te leveren, mits het bedrijf actief werkt aan herstel. Tijdens de gedoogperiode gelden striktere monitoring en rapportage-eisen. Gedoogbeschikkingen hebben een maximale looptijd en worden openbaar gepubliceerd.",
  },
  {
    question: "Kan ik zelf mijn drinkwater laten testen?",
    answer:
      "Ja. Consumenten kunnen drinkwater laten testen door erkende laboratoria met ISO/IEC 17025-accreditatie. Dit is nuttig bij vermoeden van problemen met loden huisleidingen, vervuiling via de binnenhuisinstallatie of als u putwater gebruikt. Het waterbedrijf is niet verantwoordelijk voor de kwaliteit na de huismeter. Kits voor zelftesten zijn beschikbaar maar minder betrouwbaar dan laboratoriumanalyse.",
  },
  {
    question: "Verschilt de meetfrequentie tussen grote en kleine systemen?",
    answer:
      "Ja, aanzienlijk. De EU-richtlijn 2020/2184 en het Drinkwaterbesluit koppelen de verplichte meetfrequentie aan het geleverde volume. Een systeem dat meer dan 1.000 m3 per dag levert heeft hogere meetverplichtingen dan een kleine gemeenschappelijke installatie. Dit geldt zowel voor het aantal te meten parameters als voor de frequentie van meting.",
  },
];

export default function WieControleertDrinkwaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          {
            name: "Wie controleert drinkwater",
            url: "https://waterfilterplatform.nl/drinkwaternormen/wie-controleert-drinkwater",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Wie controleert drinkwater in Nederland? RIVM, ILT en waterbedrijven",
          description:
            "RIVM, ILT en drinkwaterbedrijven controleren samen drinkwaterkwaliteit. Leer wie verantwoordelijk is, wat ze meten en hoe ze reageren bij normoverschrijding.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/wie-controleert-drinkwater",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Wie controleert drinkwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Wie controleert drinkwater in Nederland? RIVM, ILT en waterbedrijven
          </h1>
          <QuickAnswer answer="Drinkwaterkwaliteit in Nederland wordt gecontroleerd door drie partijen: de drinkwaterbedrijven (meetplicht en verantwoordelijkheid voor levering), de ILT (onafhankelijk toezicht met handhavingsbevoegdheden) en het RIVM (wetenschappelijk advies en landelijk meetnet). Gemeenten zijn niet verantwoordelijk voor waterkwaliteit; de binnenhuisinstallatie valt onder de eigenaar van het pand." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Een gelaagd controlesysteem
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het toezicht op drinkwaterkwaliteit in Nederland is verdeeld over meerdere instanties
            die elk een eigen rol spelen. Geen enkele partij heeft de volledige controle; juist de
            combinatie van uitvoering, toezicht en wetenschappelijk advies maakt het systeem robuust.
            De drie kernspelers zijn de drinkwaterbedrijven, de Inspectie Leefomgeving en Transport
            (ILT) en het Rijksinstituut voor Volksgezondheid en Milieu (RIVM). Daarnaast spelen
            gemeenten en gebouweigenaren een beperkte maar relevante rol voor de binnenhuisinstallatie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De wettelijke basis voor dit systeem is de Drinkwaterwet 2009, uitgewerkt in het{" "}
            <Link href="/drinkwaternormen/drinkwaterbesluit" className="text-[#005F8A] hover:underline font-medium">
              Drinkwaterbesluit
            </Link>
            . Dit besluit bepaalt niet alleen welke normen gelden, maar ook wie verantwoordelijk is
            voor meting, rapportage en handhaving.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De rol van het RIVM
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het Rijksinstituut voor Volksgezondheid en Milieu (RIVM) is de wetenschappelijke
            ruggengraat van het Nederlandse drinkwatersysteem. Het RIVM heeft geen
            handhavingsbevoegdheden, maar zijn adviezen zijn leidend bij de totstandkoming van normen
            en beleid.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een van de centrale taken is het beheer van het <strong>Landelijk Meetnet
            Watergevaarlijke Stoffen (LMWS)</strong>. Dit netwerk meet continu de kwaliteit van
            oppervlaktewater, grondwater en drinkwater op gevaarlijke stoffen zoals PFAS,
            medicijnresten, pesticiden en zware metalen. De resultaten worden gebruikt voor
            beleidsadviezen en dienen als vroeg-waarschuwingssysteem bij nieuwe verontreinigingen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jaarlijks publiceert het RIVM het rapport <em>Drinkwaterkwaliteit in Nederland</em>.
            Dit rapport bevat een analyse van de meetresultaten van alle drinkwaterbedrijven,
            vergelijkingen met voorgaande jaren en signaleringen van opkomende risicos. Het rapport
            is openbaar en vormt de basis voor het beleid van het ministerie van Infrastructuur en
            Waterstaat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Naast het jaarrapport adviseert het RIVM bij specifieke vraagstukken, zoals de
            normstelling voor nieuwe stoffen (PFAS, microplastics), de gezondheidsrisicos van
            lood in drinkwater en de effectiviteit van zuiveringstechnieken. Dit advieswerk vindt
            grotendeels plaats in Europees verband, in samenwerking met de Europese
            Voedselautoriteit (EFSA) en de Wereldgezondheidsorganisatie (WHO).
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De rol van de ILT
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Inspectie Leefomgeving en Transport (ILT) is de onafhankelijke toezichthouder op
            de naleving van de Drinkwaterwet. Anders dan het RIVM heeft de ILT vergaande
            handhavingsbevoegdheden: zij kan optreden als drinkwaterbedrijven de normen niet
            naleven.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De ILT voert reguliere inspecties uit bij alle drinkwaterbedrijven, beoordeelt de
            jaarlijkse kwaliteitsrapporten en reageert op meldingen van normoverschrijdingen.
            Bij overtredingen beschikt de ILT over de volgende instrumenten:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Aanwijzing:</strong> Een formele opdracht aan het waterbedrijf om binnen
              een bepaalde termijn maatregelen te nemen.
            </li>
            <li>
              <strong>Bestuursdwang:</strong> De overheid grijpt zelf in en verhaalt de kosten
              op het bedrijf.
            </li>
            <li>
              <strong>Last onder dwangsom:</strong> Een boete per dag dat de overtreding voortduurt.
            </li>
            <li>
              <strong>Gedoogbeschikking:</strong> Tijdelijke ontheffing als water nog veilig is
              maar de norm overschreden wordt, mits herstelplan aanwezig is.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elk jaar publiceert de ILT een jaarverslag over drinkwater. Dit verslag beschrijft
            alle normoverschrijdingen, de genomen herstelmaatregelen en een algemeen oordeel
            over de kwaliteit van het drinkwatersysteem. Het ILT-jaarverslag is openbaar
            toegankelijk via de website van de inspectie.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De rol van de drinkwaterbedrijven
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De{" "}
            <Link href="/drinkwaternormen/drinkwaterbedrijven" className="text-[#005F8A] hover:underline font-medium">
              10 Nederlandse drinkwaterbedrijven
            </Link>{" "}
            dragen de primaire verantwoordelijkheid voor de kwaliteit van het drinkwater dat zij
            leveren. Deze verantwoordelijkheid loopt van de waterwinning (grondwater of
            oppervlaktewater) tot aan de huisaansluiting.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elke producent heeft een wettelijke meetplicht. Zij zijn verplicht op meerdere
            punten in het productie- en distributieproces te meten: bij de winning, na
            zuivering, in het distributienet en steekproefsgewijs aan de kraan bij consumenten.
            De meetfrequentie is vastgelegd in het Drinkwaterbesluit en hangt af van het volume:
            hoe meer water een locatie produceert, hoe vaker en hoe meer parameters gemeten
            moeten worden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Laboratoria van drinkwaterbedrijven of hun gecontracteerde externe labs moeten
            beschikken over accreditatie conform <strong>ISO/IEC 17025</strong>, de internationale
            norm voor testlaboratoria. Dit borgt de betrouwbaarheid en vergelijkbaarheid van
            meetresultaten. Drinkwaterbedrijven hanteren daarnaast interne kwaliteitssystemen en
            voeren risicoanalyses uit voor het volledige stroomgebied van hun bronnen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De rol van gemeenten en gebouweigenaren
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een veelgehoord misverstand is dat gemeenten verantwoordelijk zijn voor drinkwaterkwaliteit.
            Dat is niet het geval. Gemeenten hebben geen wettelijke toezichtsrol ten aanzien van
            drinkwater. De verantwoordelijkheid van het waterbedrijf eindigt bij de huismeter of
            de perceelsgrens.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alles in de binnenhuisinstallatie (leidingen, kranen, boilers, leidingwerk) valt
            onder de verantwoordelijkheid van de <strong>eigenaar van het pand</strong>. Bij een
            koopwoning is dat de bewoner; bij een huurwoning is dat de verhuurder. Dit heeft
            praktische gevolgen: als lood in het leidingwater afkomstig is uit loden
            huisleidingen die nog niet vervangen zijn, is het waterbedrijf daarvoor niet
            aansprakelijk.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Consumenten in woningen van voor 1960 doen er verstandig aan hun binnenhuisinstallatie
            te laten inspecteren op loden leidingen. Meer informatie over dit risico en oplossingen
            vindt u in ons artikel over{" "}
            <Link href="/leidingwater/waterkwaliteitsrapport" className="text-[#005F8A] hover:underline font-medium">
              waterkwaliteitsrapporten per postcodegebied
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wat gebeurt er bij normoverschrijding?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als een drinkwaterbedrijf een normoverschrijding meet, is een vaste procedure van
            kracht:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Melding aan de ILT:</strong> De overschrijding moet onverwijld worden gemeld.
            </li>
            <li>
              <strong>Consumenteninformatie:</strong> Afhankelijk van de ernst worden consumenten
              geadviseerd, bijvoorbeeld via een kookadvies of een tijdelijk drinkverbod.
            </li>
            <li>
              <strong>Herstelmaatregelen:</strong> Het bedrijf neemt direct technische maatregelen
              en stelt een herstelplan op.
            </li>
            <li>
              <strong>Gedoogbeschikking (indien van toepassing):</strong> Als het water nog veilig
              genoeg is, kan de ILT tijdelijk gedogen terwijl het probleem wordt opgelost.
            </li>
            <li>
              <strong>Publicatieplicht:</strong> Alle overschrijdingen worden gepubliceerd in het
              jaarrapport van zowel het bedrijf als de ILT.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            In de praktijk zijn ernstige normoverschrijdingen zeldzaam. Het Nederlandse
            drinkwatersysteem behoort tot de betrouwbaarste ter wereld. Kleine overschrijdingen
            van indicatorparameters (zoals hardheid of kleur) komen incidenteel voor maar
            vormen geen gezondheidsrisico.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Meetfrequentie: klein versus groot
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het{" "}
            <Link href="/drinkwaternormen/drinkwaterbesluit" className="text-[#005F8A] hover:underline font-medium">
              Drinkwaterbesluit
            </Link>{" "}
            koppelt de meetfrequentie aan het geproduceerde volume. Hoe meer water een locatie
            levert, hoe hoger de verplichte meetfrequentie. Kleine distributiesystemen met
            minder dan 100 kubieke meter per dag kunnen volstaan met veel minder metingen dan
            grote productielocaties die meer dan 100.000 kubieke meter per dag produceren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Microbiologische parameters worden vaker gemeten dan chemische, omdat
            bacteriologische risicos (zoals Legionella of E. coli) snel kunnen optreden en
            snel kunnen wijzigen. Chemische parameters (zoals lood of PFAS) veranderen
            doorgaans langzamer en vereisen minder frequente, maar wel nauwkeurige analyse.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Overzicht: instanties, rollen en bevoegdheden
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Instantie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Rol</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Bevoegdheid</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Publicatiekanaal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">RIVM</td>
                  <td className="border border-gray-300 px-3 py-2">Wetenschappelijk advies, landelijk meetnet</td>
                  <td className="border border-gray-300 px-3 py-2">Adviserend, geen handhaving</td>
                  <td className="border border-gray-300 px-3 py-2">Jaarrapport drinkwaterkwaliteit, rivm.nl</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">ILT</td>
                  <td className="border border-gray-300 px-3 py-2">Onafhankelijk toezicht op Drinkwaterwet</td>
                  <td className="border border-gray-300 px-3 py-2">Aanwijzing, bestuursdwang, dwangsom</td>
                  <td className="border border-gray-300 px-3 py-2">ILT-jaarverslag, inspectierapporten</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Drinkwaterbedrijven</td>
                  <td className="border border-gray-300 px-3 py-2">Productie, zuivering, levering en meting</td>
                  <td className="border border-gray-300 px-3 py-2">Wettelijke meetplicht, kookadvies</td>
                  <td className="border border-gray-300 px-3 py-2">Eigen kwaliteitsrapport, vewin.nl</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Gemeenten</td>
                  <td className="border border-gray-300 px-3 py-2">Geen rol in drinkwatertoezicht</td>
                  <td className="border border-gray-300 px-3 py-2">Geen</td>
                  <td className="border border-gray-300 px-3 py-2">N.v.t.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Gebouweigenaar</td>
                  <td className="border border-gray-300 px-3 py-2">Binnenhuisinstallatie onderhouden</td>
                  <td className="border border-gray-300 px-3 py-2">Privaatrechtelijke aansprakelijkheid</td>
                  <td className="border border-gray-300 px-3 py-2">N.v.t.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u meer weten over de wettelijke normen die al deze instanties handhaven? Lees dan
            onze uitgebreide pagina over het{" "}
            <Link href="/drinkwaternormen/drinkwaterbesluit" className="text-[#005F8A] hover:underline font-medium">
              Drinkwaterbesluit
            </Link>
            {" "}met een overzicht van alle parameters en grenswaarden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u controleren welk bedrijf uw water levert en wat hun meetresultaten zijn? Bekijk
            ons overzicht van alle{" "}
            <Link href="/drinkwaternormen/drinkwaterbedrijven" className="text-[#005F8A] hover:underline font-medium">
              drinkwaterbedrijven in Nederland
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater: overzicht</h3>
              <p className="text-sm text-gray-600">Welke stoffen worden gecontroleerd en welke risico&apos;s zijn er voor de volksgezondheid?</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
              <p className="text-sm text-gray-600">Alle parameterwaarden uit het Drinkwaterbesluit en de EU-richtlijn op een rij.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
