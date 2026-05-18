import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pesticiden in leidingwater: EU-norm 0,1 ug/L en osmosefilter",
  description:
    "Pesticiden in leidingwater: EU-norm 0,1 ug/L per stof. Glyfosaat, atrazine, bentazon monitoring RIVM. Osmosefilter verwijdert 95-99% pesticiden.",
  alternates: { canonical: "https://waterfilterplatform.nl/leidingwater/pesticiden" },
  openGraph: {
    title: "Pesticiden in leidingwater: EU-norm 0,1 ug/L en osmosefilter",
    description:
      "Pesticiden in leidingwater: EU-norm 0,1 ug/L per stof. Glyfosaat, atrazine, bentazon monitoring RIVM. Osmosefilter verwijdert 95-99% pesticiden.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat is de EU-norm voor pesticiden in drinkwater?",
    answer:
      "De Europese Drinkwaterrichtlijn stelt de norm voor individuele pesticiden op 0,1 microgram per liter (0,0001 mg/L). Voor de som van alle pesticiden geldt een totaalsom-norm van 0,5 microgram per liter. Dit zijn voorzorgsnormen, niet altijd toxicologisch onderbouwd voor elke individuele stof.",
  },
  {
    question: "Worden pesticiden aangetroffen in Nederlands leidingwater?",
    answer:
      "In geleverd leidingwater van waterleidingbedrijven worden pesticiden zelden boven de norm aangetroffen. RIVM-monitoring toont dat incidentele normoverschrijdingen voorkomen in oppervlaktewater en grondwater als bron, maar de drinkwaterbehandeling (actief koolfiltratie, coagulatie, zandfilter) verwijdert pesticiden effectief voor levering aan de tap. In privéputwater nabij landbouwgebieden is het risico hoger.",
  },
  {
    question: "Welke pesticiden worden het meest gevonden in Nederlands water?",
    answer:
      "De meest gemelde pesticiden in RIVM-monitoringdata zijn: bentazon (herbicide voor bonen/erwten, stabiel in grondwater), metolachloor-ESA (metaboliet van onkruidbestrijder, persistent), glyfosaat en zijn afbraakproduct AMPA, en chloridazon-metabolieten (suikerbietenherbicide). Glyfosaat zelf wordt sporadisch in oppervlaktewater gevonden maar zelden in geleverd drinkwater.",
  },
  {
    question: "Is glyfosaat (Roundup) in mijn drinkwater gevaarlijk?",
    answer:
      "Glyfosaat wordt in Nederlands leidingwater zelden boven de EU-norm van 0,1 ug/L aangetroffen. De gezondheidseffecten van lage concentraties zijn wetenschappelijk omstreden: IARC (WHO) classificeerde het als mogelijk kankerverwekkend (groep 2A); EFSA en BfR concludeerden dat het niet kankerverwekkend is bij normale blootstelling. De EU-drinkwaternorm van 0,1 ug/L biedt een grote veiligheidsmarge.",
  },
  {
    question: "Verwijdert een osmosefilter pesticiden?",
    answer:
      "Een omgekeerde osmose filter (RO-membraan) verwijdert de meeste pesticiden voor 95-99%. Het membraan heeft een poriegrootte van circa 0,0001 micrometer, waardoor de meeste pesticidemoleculen (molecuulgewicht 200-500 g/mol) worden tegengehouden. Effectiviteit varieert per stof: grote moleculen worden bijna volledig verwijderd; kleine, polaire moleculen (zoals sommige metabolieten) iets minder.",
  },
  {
    question: "Is een actief koolfilter effectief tegen pesticiden?",
    answer:
      "Een actief koolblokfilter kan pesticiden adsorperen met 70-90% effectiviteit, afhankelijk van de stof, de contacttijd en de kwaliteit van het koolmedium. Granulaat koolfilters (GAC) zijn minder effectief dan geperst koolblokfilters (CTO of carbon block). Waterleidingbedrijven gebruiken granulaat actief kool op grote schaal als voorzuiveringsstap. Voor huishoudgebruik is osmose effectiever en consistenter.",
  },
  {
    question: "Heb ik een filter nodig als ik op leidingwater ben aangesloten?",
    answer:
      "Voor standaard gemeentelijk leidingwater is een filter niet noodzakelijk specifiek voor pesticiden; het water voldoet aan de normen. Echter, als u in een landbouwintensief gebied woont en aanvullende zekerheid wilt, of als u op een privéput bent aangesloten nabij landbouwpercelen, is een osmosefilter of actief koolfilter zinvol als aanvullende bescherming.",
  },
  {
    question: "Wat is het verschil tussen herbiciden, insecticiden en fungiciden?",
    answer:
      "Herbiciden bestrijden onkruid (glyfosaat, bentazon, atrazine); insecticiden bestrijden insecten (imidacloprid, deltamethrin); fungiciden bestrijden schimmels (propiconazool, tebuconazool). In watermonitoringdata domineren herbiciden en hun afbraakproducten, omdat ze in grote hoeveelheden worden toegepast op landbouwgronden en stabiel kunnen zijn in grondwater.",
  },
];

export default function PesticideWaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Leidingwater", url: "https://waterfilterplatform.nl/leidingwater" },
          { name: "Pesticiden", url: "https://waterfilterplatform.nl/leidingwater/pesticiden" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Pesticiden in leidingwater: normen, monitoring en verwijdering",
          description:
            "Pesticiden in leidingwater: EU-norm 0,1 ug/L per stof. Glyfosaat, atrazine, bentazon monitoring RIVM. Osmosefilter verwijdert 95-99% pesticiden.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/leidingwater/pesticiden",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:underline">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Pesticiden</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Pesticiden in leidingwater: normen, monitoring en verwijdering
          </h1>
          <QuickAnswer answer="De EU-norm voor pesticiden in drinkwater is 0,1 microgram per liter per individuele stof en 0,5 microgram per liter voor de som van alle pesticiden. Het RIVM monitort continu. In Nederland worden pesticiden zelden boven de norm aangetroffen in geleverd drinkwater, maar in grondwater nabij landbouwgebieden wel." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Wat zijn pesticiden en hoe komen ze in water terecht?
        </h2>
        <p className="text-gray-700 mb-4">
          Pesticiden is de verzamelnaam voor chemische stoffen die worden gebruikt in de landbouw, tuinbouw en particuliere tuinen om ongewenste organismen te bestrijden. De hoofdcategorieen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Herbiciden</strong>: bestrijden onkruid (glyfosaat, bentazon, atrazine, metolachloor)</li>
          <li><strong>Insecticiden</strong>: bestrijden insecten (imidacloprid, deltamethrin, chlorpyrifos)</li>
          <li><strong>Fungiciden</strong>: bestrijden schimmels (propiconazool, tebuconazool, captan)</li>
          <li><strong>Nematiciden</strong>: bestrijden aaltjes in de bodem</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Samen zijn er meer dan 1.000 werkzame stoffen goedgekeurd of historisch gebruikt in Europa. Pesticiden bereiken het water via uitspoeling naar grondwater (bij neerslag), afvoer naar oppervlaktewater (run-off van landbouwpercelen), atmosferische depositie en spuitdrift.
        </p>
        <p className="text-gray-700 mb-6">
          In Nederland is de landbouwintensiteit hoog, met name in Zeeland (bloembollen), Noord-Brabant, Limburg en Groningen (akkerbouw). Dit zorgt voor hogere pesticidenbelasting van het oppervlakte- en grondwater in die regio's.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm: 0,1 microgram per liter en het voorzorgsprincipe
        </h2>
        <p className="text-gray-700 mb-4">
          De Europese Drinkwaterrichtlijn (2020/2184, van kracht per 2023) stelt de norm voor individuele pesticiden in drinkwater op <strong>0,1 microgram per liter (ug/L)</strong>. Voor de som van alle pesticiden geldt een totaalsom-norm van <strong>0,5 ug/L</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          Deze norm is opvallend laag en is gebaseerd op het <strong>voorzorgsprincipe</strong>, niet primair op toxicologische berekeningen. Voor de meeste pesticiden is 0,1 ug/L vele malen lager dan de toxicologisch afgeleide drempelwaarden (NOAEL-based ADI). De EU heeft bewust gekozen voor een uniforme, lage grenswaarde als veiligheidsmarge voor de totale blootstelling via water.
        </p>
        <p className="text-gray-700 mb-6">
          Dit is relevant voor begrip: een overschrijding van de norm betekent niet per definitie een acuut gezondheidsrisico, maar wel dat verdere behandeling of bronmaatregelen nodig zijn. Drinkwaterbedrijven zijn verplicht actie te ondernemen bij normoverschrijdingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          RIVM-monitoring: welke pesticiden worden gevonden in Nederlands water?
        </h2>
        <p className="text-gray-700 mb-4">
          Het RIVM (Rijksinstituut voor Volksgezondheid en Milieu) publiceert jaarlijks rapportages over de kwaliteit van drinkwater en de bronnen (oppervlaktewater en grondwater). De meest frequent aangetroffen pesticiden en metabolieten in Nederlandse watermonsters zijn:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Bentazon</h3>
            <p className="text-gray-700 text-sm">
              Herbicide voor de teelt van bonen, erwten en andere vlinderbloemigen. Bentazon is chemisch stabiel en uitspoelingsgevoelig. Het wordt regelmatig aangetroffen in grondwatermonitors in landbouwintensieve gebieden. In geleverd leidingwater vrijwel altijd onder de norm dankzij actief-koolfiltratie bij waterbehandelingsinstallaties.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Metolachloor-ESA en metolachloor-OXA</h3>
            <p className="text-gray-700 text-sm">
              Afbraakproducten (metabolieten) van metolachloor, een herbicide voor mais en andere gewassen. De metabolieten zijn persistenter dan de moederstof en worden in toenemende mate in grondwatermonitors gevonden. De EU heeft de norm voor relevante metabolieten aangescherpt in de nieuwe Drinkwaterrichtlijn.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Glyfosaat en AMPA</h3>
            <p className="text-gray-700 text-sm">
              Glyfosaat (werkzame stof in Roundup) is het meest gebruikte herbicide ter wereld. Het bindt sterk aan bodemdeeltjes en uitspoeling naar grondwater is beperkt. AMPA (aminomethylfosfonzuur) is het voornaamste afbraakproduct en is stabieler dan glyfosaat. Beide worden sporadisch in oppervlaktewater aangetroffen in landbouwgebieden, zelden in geleverd leidingwater boven de norm.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Chloridazon-metabolieten</h3>
            <p className="text-gray-700 text-sm">
              Chloridazon wordt gebruikt in suikerbietenteelt. De afbraakproducten (desphenyl-chloridazon en methyl-desphenyl-chloridazon) zijn persistent en mobiel in grondwater. Ze worden inmiddels in vrijwel heel Europa in grondwater gemeten en hebben geleid tot aanscherping van de Europese regelgeving voor metabolieten.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Imidacloprid</h3>
            <p className="text-gray-700 text-sm">
              Neonicotinoide insecticide, breed gebruikt in de land- en tuinbouw. Imidacloprid staat bekend om zijn schadelijke effecten op bijen en andere bestuivers. Het wordt gevonden in oppervlaktewater, met name in glastuinbouwgebieden (Westland, Aalsmeer). In leidingwater zelden boven de norm.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Landbouwgebieden en verhoogd risico voor privéputten
        </h2>
        <p className="text-gray-700 mb-4">
          Voor mensen die op gemeentelijk leidingwater zijn aangesloten, is het risico van pesticiden in het kraanwater gering. Drinkwaterbedrijven behandelen het bronwater uitgebreid voordat het als drinkwater wordt geleverd.
        </p>
        <p className="text-gray-700 mb-4">
          Het risico is significant hoger voor eigenaren van <strong>privéputten</strong> in landbouwintensieve gebieden. Grondwater in de directe omgeving van landbouwpercelen in Noord-Brabant, Limburg, Zeeland (bollenvelden) en Groningen kan pesticiden bevatten die niet door behandeling zijn verwijderd. Eigenaren van privéputten worden geadviseerd hun water periodiek te laten analyseren op pesticiden.
        </p>
        <p className="text-gray-700 mb-6">
          Drinkwaterbedrijven overleggen actief met de landbouwsector via zogenaamde drinkwaterbeschermingsgebieden om het pesticidengebruik te beperken nabij innamepunten. Dit beleid heeft in de afgelopen decennia geleid tot merkbare verbetering van de grondwaterkwaliteit bij waterwinningstations.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Pesticiden verwijderen met een thuisfilter
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Osmosefilter (omgekeerde osmose)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest effectief</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een RO-membraan met poriegrootte van 0,0001 micrometer verwijdert de overgrote meerderheid van pesticidemoleculen. Grotere moleculen (molecuulgewicht boven 200 g/mol) worden voor 95-99% tegengehouden. Kleinere, polaire metabolieten (zoals AMPA) worden iets minder effectief verwijderd maar nog steeds voor 80-95%. Een RO-systeem combineert membraanscheiding met een actief koolprefilter wat de effectiviteit verder vergroot.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Verwijdering: 95-99%</span>
              <span>Kosten: 300-800 euro</span>
              <span>Onderhoud: filters jaarlijks, membraan 2-3 jaar</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Actief koolblokfilter (under-sink carbon block)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Geperst actief koolblokfilters (CTO) adsorperen organische pesticidemoleculen effectief. Verwijdering is 70-90% afhankelijk van de stof, contacttijd en filterleeftijd. Minder effectief dan osmose maar aanzienlijk beter dan filterkannen. Let op: vervanging elke 6-12 maanden noodzakelijk; een verzadigd koolfilter kan stoffen teruggeven.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Verwijdering: 70-90%</span>
              <span>Kosten: 50-200 euro systeem + 30-60 euro/jaar filters</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Filterkan (Brita, PearlCo)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Standaard filterkansen met granulaat actief koolmedium hebben een beperkte effectiviteit voor pesticiden. De contacttijd is kort en het actief koolvolume is klein. Verwijdering varieert van 30-70% afhankelijk van de stof. Niet aanbevolen als primaire bescherming bij significante pesticidenbelasting in het water.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Verwijdering: 30-70% (stofafhankelijk)</span>
              <span>Kosten: 20-60 euro + filters</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een filter aan te raden voor pesticiden?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Privéput nabij landbouwpercelen</strong>: altijd een filter aan te bevelen. Laat het water eerst analyseren om te bepalen welke stoffen aanwezig zijn.</li>
          <li><strong>Aanvullende zekerheid</strong>: als u extra zekerheid wilt bovenop de waterleidingbedrijfsbehandeling, biedt een osmosefilter maximale bescherming.</li>
          <li><strong>Gecombineerde aanpak</strong>: als u al een osmosefilter heeft voor hardheid of nitraat, beschermt dit gelijktijdig ook tegen pesticiden.</li>
          <li><strong>Bron onbekend</strong>: bij onduidelijke waterkwaliteit (vakantiewoning, recent gekochte woning met put) is tijdelijke filteringsoplossing zinvol totdat wateranalyse beschikbaar is.</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Meer informatie over de algehele kwaliteit van Nederlands leidingwater vindt u op onze pagina{" "}
          <Link href="/leidingwater" className="text-[#005F8A] underline">
            leidingwater in Nederland
          </Link>. Voor het verwijderen van pesticiden en andere microverontreinigingen is een osmosefilter de meest complete oplossing; lees meer over{" "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen
          </Link>. Voor informatie over actief koolfilters als alternatieve aanpak, zie{" "}
          <Link href="/waterfilter/actief-kool" className="text-[#005F8A] underline">
            actief koolfilter voor water
          </Link>.
        </p>
        <p className="text-gray-700 mt-4">
          Verdiep uw kennis: <Link href="/stoffen-in-drinkwater/pesticiden" className="text-[#005F8A] hover:underline font-medium">Pesticiden in drinkwater: overzicht per stofgroep</Link>.
        </p>

        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">Veelgestelde vragen over pesticiden in leidingwater</h2>
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
