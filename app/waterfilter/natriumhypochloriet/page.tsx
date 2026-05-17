import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Natriumhypochloriet in leidingwater: chloor, bijproducten en filter",
  description:
    "Natriumhypochloriet in leidingwater: desinfectant 0,1-0,3 mg/L. THM en HAA bijproducten bij organisch materiaal. Koolfilter verwijdert chloor effectief.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterfilter/natriumhypochloriet" },
  openGraph: {
    title: "Natriumhypochloriet in leidingwater: chloor, bijproducten en filter",
    description:
      "Natriumhypochloriet in leidingwater: desinfectant 0,1-0,3 mg/L. THM en HAA bijproducten bij organisch materiaal. Koolfilter verwijdert chloor effectief.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat is natriumhypochloriet en waarom zit het in drinkwater?",
    answer:
      "Natriumhypochloriet (NaOCl) is bleekwater in vloeibare vorm. Het wordt als desinfectiemiddel gebruikt om bacterien en virussen in drinkwater te doden. Het is het meest gebruikte waterdesinfectiemiddel ter wereld, met uitzondering van Nederland dat grotendeels chloorvrij water levert.",
  },
  {
    question: "Hoeveel natriumhypochloriet zit er in Nederlands leidingwater?",
    answer:
      "De meeste Nederlandse waterbedrijven doseren geen chloor in de eindfase. Residueel chloor in Nederlands leidingwater is doorgaans lager dan 0,1 mg/L. Bij tijdelijke chlorering na leidingwerkzaamheden kan dit oplopen tot 0,2-0,5 mg/L. De EU-norm staat maximaal 0,3 mg/L vrij chloor toe.",
  },
  {
    question: "Wat zijn trihalomethanen (THM) en wanneer worden ze gevormd?",
    answer:
      "THM (trihalomethanen, zoals chloroform CHCl3) worden gevormd wanneer chloor reageert met organisch materiaal in water, zoals humuszuren. De vorming neemt toe bij hogere temperatuur, langere contacttijd en hogere concentratie organisch materiaal. De EU-norm voor totaal THM is 100 microgram per liter.",
  },
  {
    question: "Zijn desinfectiebijproducten gevaarlijk?",
    answer:
      "Bij de concentraties in Nederlands leidingwater zijn THM en HAA niet acuut gevaarlijk. Bij chronische blootstelling aan hoge concentraties (boven de EU-norm) zijn lever- en nierschade en mogelijk carcinogene effecten beschreven. In Nederland worden de normen ruim gehaald, maar thuisfiltratie kan extra zekerheid geven.",
  },
  {
    question: "Verwijdert een actief koolfilter chloor en THM?",
    answer:
      "Ja. Een actief koolfilter verwijdert vrij chloor zeer effectief, doorgaans meer dan 95%. THM worden deels verwijderd (60-80%) afhankelijk van contacttijd en filterkwaliteit. HAA worden minder goed verwijderd door koolfilter dan door osmosefiltratie.",
  },
  {
    question: "Verwijdert een osmosefilter natriumhypochloriet en bijproducten?",
    answer:
      "Een osmosefilter heeft doorgaans een actief koolfilter als voorfilter dat chloor verwijdert voordat het water het osmosemembraan bereikt. Dit is noodzakelijk omdat chloor het membraan beschadigt. Het osmosemembraan zelf verwijdert ook THM en HAA effectief door de fijne membraanfiltratie.",
  },
  {
    question: "Wat is het verschil tussen chloor en chlooramine?",
    answer:
      "Chlooramine (NH2Cl) is ammoniak + chloor gecombineerd. Het vormt minder THM dan natriumhypochloriet, maar is moeilijker te verwijderen met een standaard koolfilter. Chlooramine vereist geactiveerde kool met langere contacttijd of een specifiek koolfilter voor chlooramines.",
  },
  {
    question: "Kan ik chloor verwijderen door water te laten staan?",
    answer:
      "Ja. Vrij chloor verdampt uit open water bij kamertemperatuur in 30-60 minuten. Dit werkt voor lage chloorconcentraties, maar verwijdert geen THM of HAA. Bovendien kunnen bacterien zich vermeerderen in stilstaand water zonder desinfectie. Een koolfilter is een snellere en veiligere methode.",
  },
];

export default function NatriumhypochloriePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterfilter", url: "https://waterfilterplatform.nl/waterfilter" },
          { name: "Natriumhypochloriet", url: "https://waterfilterplatform.nl/waterfilter/natriumhypochloriet" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Natriumhypochloriet in drinkwater: desinfectie, bijproducten en filtering",
          description:
            "Natriumhypochloriet in leidingwater: desinfectant 0,1-0,3 mg/L. THM en HAA bijproducten bij organisch materiaal. Koolfilter verwijdert chloor effectief.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterfilter/natriumhypochloriet",
        }}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:underline">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Natriumhypochloriet</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Natriumhypochloriet in drinkwater: desinfectie, bijproducten en filtering
          </h1>
          <QuickAnswer answer="Natriumhypochloriet (NaOCl) is het meest gebruikte desinfectiemiddel voor drinkwater. Bij contact met organisch materiaal in water vormt het trihalomethanen (THM) en haloazijnzuren (HAA), de voornaamste desinfectiebijproducten. Een actief koolfilter verwijdert chloor en vermindert THM/HAA-vorming." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is natriumhypochloriet?</h2>
          <p className="text-gray-700 mb-4">
            Natriumhypochloriet (chemische formule: NaOCl) is het actieve bestanddeel van bleekwater.
            In vloeibare vorm heeft het een karakteristieke chloorlucht. In waterbehandeling wordt het
            gebruikt als bron van actief chloor: in water hydrolyseert NaOCl tot hypochloorzuur (HOCl)
            en hypochloriet-ion (OCl-), de daadwerkelijk desinfecterende deeltjes.
          </p>
          <p className="text-gray-700 mb-4">
            Natriumhypochloriet wordt al meer dan 100 jaar wereldwijd ingezet voor drinkwaterdesinfectie.
            Het is relatief goedkoop, effectief en makkelijk te doseren. De restwerking in het leidingnet
            (residueel chloor) zorgt voor continue bescherming tot aan de kraan.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">
            Gebruik in drinkwaterbehandeling: dosering en normen
          </h2>
          <p className="text-gray-700 mb-4">
            In landen die chloor toepassen aan drinkwater, wordt natriumhypochloriet gedoseerd om een
            residuele chloorconcentratie van 0,1-0,5 mg/L te bereiken. Dit residueel chloor beschermt
            het water tijdens transport door het leidingnet.
          </p>
          <p className="text-gray-700 mb-4">
            De EU-drinkwaterrichtlijn (2020/2184) stelt geen maximum voor residueel chloor als zodanig,
            maar de meeste lidstaten hanteren een maximum van 0,3 mg/L vrij chloor als nationaal
            streefgetal. In Nederland is chlorering in de eindfase grotendeels afgeschaft; de meeste
            drinkwaterbedrijven gebruiken UV-licht, ozonbehandeling en membraanfiltratie.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Effectiviteit als desinfectiemiddel</h2>
          <p className="text-gray-700 mb-4">
            Natriumhypochloriet doodt effectief:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Bacterien:</strong> zeer effectief, ook bij lage concentraties (0,1 mg/L).
              Legionella, E. coli en cholera-bacterie worden snel geinactiveerd.
            </li>
            <li>
              <strong>Virussen:</strong> effectief bij standaard drinkwaterconcentraties.
            </li>
            <li>
              <strong>Giardia cysten:</strong> deels effectief, vereist hogere concentraties.
            </li>
            <li>
              <strong>Cryptosporidium oocysten:</strong> NIET effectief. Cryptosporidium is
              chloorresistent. Hiervoor is UV-bestraling of membraanfiltratie nodig.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Dit is een cruciale beperking van chloordesinfectie. In landen en perioden waarbij
            Cryptosporidium-uitbraken optreden, is chlorering als enige behandeling onvoldoende.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Smaak en geur: wanneer proef je chloor?</h2>
          <p className="text-gray-700 mb-4">
            De perceptiedrempel voor chloor in drinkwater varieert per persoon: de meeste mensen proeven
            of ruiken chloor bij concentraties van 0,2 mg/L of hoger. Gevoelige personen kunnen het
            al bij 0,1 mg/L waarnemen.
          </p>
          <p className="text-gray-700 mb-4">
            In Nederland is de kans op een chloorlucht klein in normaal gebruik, maar kan optreden
            na leidingwerkzaamheden of in regio-specifieke situaties. In landen als de VS, Frankrijk
            en Spanje is chloor standaard aanwezig en merkbaar in drinkwater.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">
            Desinfectiebijproducten (DBPs): THM en HAA
          </h2>
          <p className="text-gray-700 mb-4">
            Wanneer chloor reageert met organisch materiaal dat van nature in water aanwezig is
            (humuszuren, fulvozuren), ontstaan desinfectiebijproducten. De twee belangrijkste
            groepen zijn:
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            Trihalomethanen (THM)
          </h3>
          <p className="text-gray-700 mb-4">
            THM is een groep verbindingen waarbij een waterstofatoom in methaan vervangen is door
            halogeenatomen. De voornaamste zijn:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Chloroform (CHCl3) - meest voorkomend</li>
            <li>Bromodichloormethaan (CHBrCl2)</li>
            <li>Dibromochloormethaan (CHBr2Cl)</li>
            <li>Bromoform (CHBr3)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            De EU-norm voor totaal THM is <strong>100 microgram per liter</strong> (ug/L). Bij
            chronische blootstelling aan concentraties boven de norm zijn lever- en nierschade en
            mogelijk carcinogene effecten beschreven. In Nederland worden deze normen ruim gehaald.
          </p>
          <p className="text-gray-700 mb-4">
            THM-vorming neemt toe bij: hogere watertemperatuur, langere contacttijd van chloor
            met organisch materiaal, en hogere concentraties organisch materiaal (gemeten als DOC:
            opgeloste organische koolstof).
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
            Haloazijnzuren (HAA)
          </h3>
          <p className="text-gray-700 mb-4">
            HAA zijn een tweede groep desinfectiebijproducten, waaronder monochloorazijnzuur en
            dichloorazijnzuur. De EU-drinkwaterrichtlijn 2020/2184 heeft een nieuwe norm voor HAA
            ingevoerd: <strong>60 microgram per liter</strong> (totaalsom), van kracht per 2026.
          </p>
          <p className="text-gray-700 mb-4">
            HAA zijn minder vluchtig dan THM en worden minder goed verwijderd door verdamping of
            standaard koolfilter. Een osmosefilter is effectiever voor HAA-verwijdering.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">
            Chlooramine: een alternatief met eigen uitdagingen
          </h2>
          <p className="text-gray-700 mb-4">
            Sommige waterbedrijven gebruiken chlooramine (monochlooramine, NH2Cl) in plaats van vrij
            chloor. Chlooramine wordt gevormd door toevoeging van ammoniak aan water dat al chloor
            bevat. Het vormt significant minder THM dan vrij chloor.
          </p>
          <p className="text-gray-700 mb-4">
            Nadelen van chlooramine: het is moeilijker te verwijderen met een standaard koolfilter.
            Een speciale actief koolfilter met langere contacttijd (zoals een catalytisch koolfilter)
            is nodig voor effectieve verwijdering. Chlooramine is ook gevaarlijk voor dialysepatienten
            en aquarium-vis.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">
            Thuis verwijderen: filteropties vergeleken
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Methode</th>
                  <th className="p-3 text-center">Vrij chloor</th>
                  <th className="p-3 text-center">THM</th>
                  <th className="p-3 text-center">HAA</th>
                  <th className="p-3 text-center">Chlooramine</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Actief koolfilter (standaard)</td>
                  <td className="p-3 text-center text-green-700">Uitstekend (95%+)</td>
                  <td className="p-3 text-center text-yellow-700">Matig (60-80%)</td>
                  <td className="p-3 text-center text-yellow-700">Beperkt</td>
                  <td className="p-3 text-center text-yellow-700">Matig</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Catalytisch koolfilter</td>
                  <td className="p-3 text-center text-green-700">Uitstekend</td>
                  <td className="p-3 text-center text-green-700">Goed</td>
                  <td className="p-3 text-center text-yellow-700">Matig</td>
                  <td className="p-3 text-center text-green-700">Goed</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Osmosefilter (met koolvoorfilter)</td>
                  <td className="p-3 text-center text-green-700">Uitstekend</td>
                  <td className="p-3 text-center text-green-700">Uitstekend (90%+)</td>
                  <td className="p-3 text-center text-green-700">Uitstekend</td>
                  <td className="p-3 text-center text-green-700">Goed</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Koken</td>
                  <td className="p-3 text-center text-green-700">Goed (verdamping)</td>
                  <td className="p-3 text-center text-yellow-700">Deels (vluchtige THM)</td>
                  <td className="p-3 text-center text-red-700">Niet effectief</td>
                  <td className="p-3 text-center text-yellow-700">Deels</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Laten staan (open)</td>
                  <td className="p-3 text-center text-yellow-700">Goed (30-60 min)</td>
                  <td className="p-3 text-center text-red-700">Niet effectief</td>
                  <td className="p-3 text-center text-red-700">Niet effectief</td>
                  <td className="p-3 text-center text-red-700">Niet effectief</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Actief koolfilter</h3>
          <p className="text-gray-700 mb-4">
            Een actief koolfilter (GAC: granular activated carbon, of CTO: carbon block) verwijdert
            vrij chloor zeer effectief door adsorptie. De koolstofkorrels binden chloormoleculen aan
            hun enorme oppervlakte. Filtervervanging is nodig zodra de adsorptiecapaciteit is bereikt
            (doorgaans 6-12 maanden).
          </p>
          <p className="text-gray-700 mb-4">
            Lees meer over{" "}
            <Link href="/waterfilter/actief-kool" className="text-[#005F8A] hover:underline">
              actief koolfilters en hun werking
            </Link>
            .
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Osmosefilter</h3>
          <p className="text-gray-700 mb-4">
            Een omgekeerde osmosefilter heeft altijd een actief koolfilter als voorfilter, omdat chloor
            het dunnefilm-composiet membraan (TFC) beschadigt. Dit voorfilter verwijdert het chloor,
            waarna het membraan ook THM en HAA effectief tegenhoudt door grootte-exclusie en
            lading-afstoting.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Conclusie</h2>
          <p className="text-gray-700 mb-4">
            Natriumhypochloriet is een effectief en bewezen desinfectiemiddel dat drinkwater wereldwijd
            veilig maakt. In Nederland is chlorering grotendeels vervangen door geavanceerdere methoden.
            De voornaamste zorg bij gechloreerd water zijn de desinfectiebijproducten THM en HAA, die
            ontstaan bij reactie met organisch materiaal.
          </p>
          <p className="text-gray-700 mb-4">
            Een actief koolfilter verwijdert chloor effectief. Voor optimale verwijdering van zowel
            chloor als bijproducten (THM en HAA) is een osmosefilter de meest complete oplossing.
            Bekijk onze{" "}
            <Link href="/waterfilter" className="text-[#005F8A] hover:underline">
              waterfilter vergelijking
            </Link>{" "}
            of ga direct naar{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
              osmosefilter kopen
            </Link>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over natriumhypochloriet</h2>
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
