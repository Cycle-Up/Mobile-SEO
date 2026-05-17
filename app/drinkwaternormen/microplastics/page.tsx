import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Microplastics in drinkwater: WHO-bevindingen, normen en filteropties",
  description:
    "Microplastics in drinkwater: WHO 2019 ziet geen direct risico bij huidige niveaus. EU verplicht monitoring. Osmose verwijdert deeltjes boven 1 micron.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/drinkwaternormen/microplastics",
  },
  openGraph: {
    title: "Microplastics in drinkwater: WHO-bevindingen, normen en filteropties",
    description:
      "Microplastics in drinkwater: WHO 2019 ziet geen direct risico bij huidige niveaus. EU verplicht monitoring. Osmose verwijdert deeltjes boven 1 micron.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat zijn microplastics precies?",
    answer:
      "Microplastics zijn kleine kunststofdeeltjes met een diameter van 1 nanometer tot 5 millimeter. Ze worden onderverdeeld in primaire microplastics (producten die al klein worden gemaakt, zoals cosmetische microbeads) en secundaire microplastics (afkomstig van de fragmentatie van groter plastic door UV-licht, mechanische slijtage en chemische afbraak). Deeltjes kleiner dan 1 micrometer worden nanoplastics genoemd. Nanoplastics zijn moeilijker te detecteren en de gezondheidseffecten zijn minder onderzocht dan die van grotere microplastics.",
  },
  {
    question: "Wat zegt de WHO over microplastics in drinkwater?",
    answer:
      "In haar rapport uit 2019 ('Microplastics in Drinking Water') concludeerde de WHO: 'on the basis of the limited information we have, microplastics in drinking water don't appear to pose a health risk at current levels.' De WHO riep tegelijk op tot meer onderzoek en betere meetmethoden, en benadrukte dat waterkwaliteitsverbetering en vermindering van plastic in het milieu prioriteit moeten hebben.",
  },
  {
    question: "Zijn er wettelijke normen voor microplastics in drinkwater?",
    answer:
      "Nee. De EU-richtlijn 2020/2184 verplicht lidstaten om microplastics in drinkwater te monitoren, maar stelt geen wettelijke grenswaarden. Er bestaat nog geen internationaal gestandaardiseerde meetmethode voor microplastics in drinkwater, wat het opstellen van normen bemoeilijkt. De EU werkt aan een standaardisatie van meetprotocollen als eerste stap naar eventuele normstelling.",
  },
  {
    question: "Hoe groot zijn microplastics vergeleken met filterporieen?",
    answer:
      "Microplastics varieren van 1 nanometer tot 5 millimeter. Een osmosefilter heeft porieen van circa 0,0001 micron (0,1 nanometer), waarmee het deeltjes van meer dan die grootte tegenhoudt. Holle vezelfilters (ultrafiltration) hebben porieen van 0,01-0,1 micron en houden grotere microplastics (en bacterien) goed tegen. Grotere deeltjes (boven 1 micron) worden ook tegengehouden door sedimentprefilters. De moeilijkste categorie zijn nanoplastics onder 0,1 micron, die alleen door osmose worden tegengehouden.",
  },
  {
    question: "Waar komen microplastics in drinkwater vandaan?",
    answer:
      "Microplastics in drinkwater zijn afkomstig van verschillende bronnen. Oppervlaktewater bevat microplastics uit textielwas (synthetische vezels), autobandenslijtage (microbeads van styrene-butadieen), verpakkingsplastic en cosmetica. Ook het drinkwaterdistributienet zelf kan bijdragen: plastic leidingen, PVC-afdichtingen en kunststof watermeters lekken kleine hoeveelheden deeltjes. Ten slotte draagt plastic flessenwater vaak meer microplastics bij dan kraanwater, door het bottelen en de interactie met plastic flessen.",
  },
  {
    question: "Verwijdert een osmosefilter microplastics?",
    answer:
      "Ja, vrijwel volledig. Het osmosemembraan heeft porieen van circa 0,0001 micron, wat kleiner is dan de kleinste microplasticdeeltjes die boven 1 nanometer vallen. In de praktijk verwijdert osmose meer dan 99% van alle microplastics, inclusief de meeste nanoplastics. Dit maakt osmose de meest effectieve thuisoplossing voor microplasticverwijdering.",
  },
  {
    question: "Verwijdert een holle vezelfilter microplastics?",
    answer:
      "Een ultrafiltratiemembraan (holle vezelfilter) met porieen van 0,01-0,1 micron houdt microplastics boven die grootte effectief tegen, inclusief bacterien. Kleinere microplastics en nanoplastics (onder 0,01 micron) passeren echter. Voor drinkwatertoepassingen geeft ultrafiltration goede bescherming tegen de meeste microplastics, maar is minder volledig dan osmose.",
  },
  {
    question: "Hoe wordt de blootstelling aan microplastics via drinkwater vergeleken met andere bronnen?",
    answer:
      "Onderzoek van de Universiteit van Newcastle (2019, in opdracht van WWF) schat dat mensen gemiddeld circa 5 gram plastic per week binnenkrijgen via alle bronnen samen. De bijdrage van drinkwater is relatief klein vergeleken met voedsel (vis, zeevruchten, zout), ademhaling (binnenshuis en buitenshuis) en het gebruik van plastic verpakkingen. Plastic flessenwater draagt ironisch genoeg meer microplastics bij dan kraanwater: gemiddeld 2-4 keer zoveel microplasticdeeltjes per liter.",
  },
  {
    question: "Wat doet het RIVM aan monitoring van microplastics in drinkwater?",
    answer:
      "Het RIVM heeft in samenwerking met KWR (Kennis- en Innovatiecentrum voor Water) meetcampagnes uitgevoerd om de aanwezigheid van microplastics in Nederlands drinkwater in kaart te brengen. De bevindingen tonen aan dat microplastics aanwezig zijn in oppervlaktewater, maar dat de zuivering door Nederlandse drinkwaterbedrijven het grootste deel verwijdert. Exacte aantallen zijn moeilijk te vergelijken omdat er nog geen gestandaardiseerde meetmethode bestaat.",
  },
  {
    question: "Zijn nanoplastics gevaarlijker dan microplastics?",
    answer:
      "Nanoplastics (kleiner dan 1 micrometer, soms gedefinieerd als kleiner dan 100 nanometer) kunnen potentieel celbarrieren passeren en door het lichaam worden opgenomen op een manier die grotere microplastics niet kunnen. In dierstudies zijn effecten op cellen en organen aangetoond bij hoge doseringen. Voor de concentraties die in drinkwater voorkomen zijn de gezondheidseffecten bij mensen echter niet aangetoond. De WHO beschouwt nanoplastics als een prioritair onderzoeksgebied.",
  },
  {
    question: "Bevat flessenwater meer of minder microplastics dan kraanwater?",
    answer:
      "Flessenwater bevat doorgaans 2-4 keer meer microplasticdeeltjes per liter dan kraanwater. Dit is aangetoond in meerdere internationale studies, waaronder een studie gepubliceerd in Frontiers in Chemistry (2018). De microplastics in flessenwater zijn deels afkomstig van de kunststof fles zelf, deels van het industriele bottelen (lucht, machines). Dit is een van de argumenten voor osmosewater boven flessenwater, naast milieu-impact en kosten.",
  },
];

export default function MicroplasticsPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "Microplastics", url: "https://waterfilterplatform.nl/drinkwaternormen/microplastics" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Microplastics in drinkwater: WHO-bevindingen, normen en filteropties",
          description:
            "Microplastics in drinkwater: WHO 2019 ziet geen direct risico bij huidige niveaus. EU verplicht monitoring. Osmose verwijdert deeltjes boven 1 micron.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/microplastics",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Microplastics</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Microplastics in drinkwater: WHO-bevindingen, normen en filteropties
          </h1>
          <QuickAnswer answer="Microplastics (1 nm - 5 mm) komen voor in oppervlaktewater en in lage concentraties in drinkwater. De WHO concludeerde in 2019 dat er geen bewijs is voor een direct gezondheidsrisico bij huidige niveaus. De EU-richtlijn 2020/2184 verplicht monitoring maar stelt geen normen. Omgekeerde osmose verwijdert vrijwel alle microplastics en nanoplastics; holle vezelfilters verwijderen grotere deeltjes. Flessenwater bevat doorgaans meer microplastics dan kraanwater." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wat zijn microplastics en nanoplastics?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Microplastics zijn kleine kunststofdeeltjes met een diameter van 1 nanometer tot 5 millimeter.
            De indeling naar grootte:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Nanoplastics:</strong> Kleiner dan 1 micrometer (0,001 mm). Moeilijkst te
              detecteren en potentieel het meest biologisch actief omdat ze celbarrieren kunnen passeren.
            </li>
            <li>
              <strong>Kleine microplastics:</strong> 1-100 micrometer. Niet zichtbaar met het blote oog,
              detecteerbaar met microscopie en spectroscopie.
            </li>
            <li>
              <strong>Grote microplastics:</strong> 0,1-5 millimeter. Soms zichtbaar als fijne
              korrels of vezels.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Microplastics worden verder onderverdeeld in primair en secundair. Primaire microplastics
            worden bewust klein gemaakt: cosmetische scrubbeads (nu verboden in de EU),
            industriele pellets en medicijncoatings. Secundaire microplastics zijn het resultaat van
            de fragmentatie van groter plastic door UV-straling, golven, wind en mechanische slijtage.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Bronnen van microplastics in water
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Microplastics bereiken oppervlaktewater en uiteindelijk drinkwater via diverse routes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Synthetisch textiel:</strong> Elke wasbeurt spoelt gemiddeld 700.000 synthetische
              vezels (polyester, nylon, acryl) weg via het riool. Rioolwaterzuivering vangt een groot
              deel op, maar niet alles.
            </li>
            <li>
              <strong>Autobandenslijtage:</strong> Rubberdeeltjes van autobandslijtage vormen
              in Europa een van de grootste bronnen van microplastics in het milieu. Via regenwater
              en wegafvoer belanden ze in oppervlaktewater.
            </li>
            <li>
              <strong>Plasticafbraak in de natuur:</strong> Zwerfafval en macroplastics die in het
              milieu achterblijven fragmenteren geleidelijk tot microscopisch kleine deeltjes.
            </li>
            <li>
              <strong>Verpakkingsmateriaal:</strong> Interactie van water met plastic flessen,
              leidingen en opslagtanks levert een directe bijdrage aan microplastics in drinkwater.
            </li>
            <li>
              <strong>Atmosferische depositie:</strong> Microplastics worden via lucht verspreid
              en neergeslagen in oppervlaktewater en waterreservoirs.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Situatie in Nederland en Europa
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het RIVM heeft in samenwerking met KWR (Kennis- en Innovatiecentrum voor Water) metingen
            verricht in Nederlands oppervlaktewater en drinkwater. In de grote rivieren (Rijn, Maas)
            worden microplastics consequent aangetroffen. Na de zuivering door drinkwaterbedrijven
            is de concentratie in kraanwater significant lager dan in het bronwater, maar niet nul.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Europa lopen de concentraties in drinkwater uiteen van vrijwel onmeetbaar (in landen
            met uitsluitend grondwaterwinning) tot enkele tientallen deeltjes per liter bij
            oppervlaktewaterbronnen. De vergelijkbaarheid van studies is beperkt doordat er geen
            gestandaardiseerde meetmethode bestaat: studies gebruiken verschillende groottedrempels,
            filtertypen en detectiemethoden.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Het WHO-rapport van 2019: wat staat er precies in?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In 2019 publiceerde de WHO het rapport "Microplastics in Drinking Water". De kernbevinding:
            bij de huidige niveaus van microplastics in drinkwater is er geen bewijs voor een direct
            gezondheidsrisico. De WHO stelde tegelijk dat er grote hiaten zijn in de kennis:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Er ontbreekt een gestandaardiseerde meetmethode, waardoor studies niet vergelijkbaar zijn.</li>
            <li>Nanoplastics zijn bijzonder slecht onderzocht door detectieproblemen.</li>
            <li>De langetermijneffecten van chronische blootstelling zijn onbekend.</li>
            <li>Additieven in plastic (weekmakers, brandvertragers) kunnen biologisch actief zijn, ook na fragmentatie.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            De WHO riep op tot vervolgonderzoek en tot het reduceren van plastic in het milieu als
            voorzorgsmaatregel, ongeacht de huidige risicoschattingen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            EU-richtlijn 2020/2184 en de ontbrekende normen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn 2020/2184
            </Link>{" "}
            verplicht lidstaten voor het eerst tot het monitoren van microplastics in drinkwater.
            Maar de richtlijn stelt geen wettelijke grenswaarden. De Europese Commissie heeft aangegeven
            dat normstelling afhangt van de totstandkoming van een gevalideerde meetmethode.
            Totdat die er is, kan er geen handhaafbare norm worden gesteld.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het EU-actieplan voor de Circulaire Economie (2020) en de Plastics Strategy beogen de
            instroom van plastic in het milieu te verminderen als indirecte strategie voor betere
            drinkwaterkwaliteit. Verdere maatregelen omvatten het verbod op single-use plastic
            en op microbeads in cosmetica.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Filteropties: welke filter verwijdert microplastics?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De effectiviteit van waterfilters voor microplastics hangt direct samen met de poriegrootte
            van het filterelement:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Omgekeerde osmose (meer dan 99%):</strong> Met porieen van 0,0001 micron (0,1 nm)
              houdt osmose vrijwel alle microplastics en de meeste nanoplastics tegen. Dit is de
              meest volledige bescherming voor drinkwater. Zie{" "}
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
                omgekeerde osmose kopen
              </Link>{" "}
              voor een overzicht van systemen.
            </li>
            <li>
              <strong>Holle vezelfilter / ultrafiltration (0,01-0,1 micron):</strong> Verwijdert
              microplastics groter dan 0,1 micron effectief, inclusief alle bacterien. Nanoplastics
              passeren gedeeltelijk. Goed alternatief voor wie geen volledig osmosesysteem wil.
            </li>
            <li>
              <strong>Sedimentprefilter (1-5 micron):</strong> Verwijdert grotere microplasticdeeltjes
              en vrijwel al het zichtbare materiaal. Geen bescherming tegen kleinere microplastics.
            </li>
            <li>
              <strong>Actief koolfilter:</strong> Adsorbeert chemische additieven die uit plastic
              lekken (zoals ftalaten en bisfenol A), maar biedt geen fysieke blokkade voor
              microplasticdeeltjes. Zinvol als aanvulling, niet als primaire microplasticverwijdering.
            </li>
            <li>
              <strong>Waterfilterkan:</strong> Vrijwel geen effectieve verwijdering van microplastics.
              De contacttijd en filtercapaciteit zijn onvoldoende voor deeltjesverwijdering.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een vergelijking met{" "}
            <Link href="/drinkwaternormen/medicijnresten" className="text-[#005F8A] hover:underline font-medium">
              medicijnresten
            </Link>{" "}
            leert dat osmose voor beide categorieeen de meest effectieve thuisoplossing is.
            De{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              drinkwaternormen-hub
            </Link>{" "}
            biedt een overzicht van alle parameters en bijbehorende filteradviezen.
            Wilt u specifiek leren over waterfilters voor microplastics, kijk dan op onze{" "}
            <Link href="/waterfilter/microplastics" className="text-[#005F8A] hover:underline font-medium">
              waterfilter microplastics-pagina
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Blootstelling via drinkwater vs. andere bronnen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Om de blootstelling via drinkwater in perspectief te plaatsen: de grootste bronnen van
            microplastics voor mensen zijn niet drinkwater maar voedsel (vis, zeevruchten, zeezout,
            bier), ademhaling van binnenlucht (synthetische stoffen, tapijten, huisstof) en contact
            met plastic verpakkingen. Flessenwater bevat bovendien gemiddeld 2-4 keer meer
            microplastics per liter dan kraanwater. Wie flessenwater drinkt om microplastics te
            vermijden, bereikt dus het tegenovergestelde.
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
