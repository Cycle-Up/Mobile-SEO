import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Microplastics in leidingwater Nederland: metingen, risico en filteradvies",
  description:
    "Microplastics in NL leidingwater: RIVM-metingen, vergelijking met flessenwater. Kraanwater bevat significant minder plastic dan flessen. Osmose filtert 99%+.",
  alternates: { canonical: "https://waterfilterplatform.nl/leidingwater/microplastics" },
};

const faqItems = [
  {
    question: "Zitten er microplastics in Nederlands leidingwater?",
    answer:
      "Ja, maar in zeer lage concentraties. RIVM- en KWR-onderzoeken meten gemiddeld 0 tot 5 microplasticdeeltjes per liter in Nederlands kraanwater. Ter vergelijking: flessenwater bevat 10 tot 600+ deeltjes per liter, afhankelijk van het merk en de verpakking. De Nederlandse drinkwaterzuivering verwijdert het overgrote deel van de microplastics al voor het water de kraan bereikt.",
  },
  {
    question: "Zijn microplastics in leidingwater gevaarlijk voor de gezondheid?",
    answer:
      "De WHO heeft in 2019 geconcludeerd dat er bij de huidige blootstellingsniveaus via drinkwater geen bewijs is voor directe gezondheidsschade bij mensen. Langetermijneffecten op cellulaire niveau zijn nog niet volledig onderzocht. Voorzorgsprincipe is van toepassing: blootstelling beperken is zinvol, maar paniek is niet gerechtvaardigd. Het risico van microplastics via flessenwater en voeding is waarschijnlijk groter dan via leidingwater.",
  },
  {
    question: "Wat is het verschil tussen microplastics en nanoplastics?",
    answer:
      "Microplastics zijn plasticdeeltjes van 1 micrometer tot 5 millimeter. Nanoplastics zijn kleiner dan 1 micrometer (0,001 mm). Nanoplastics zijn moeilijker te detecteren en te verwijderen, en kunnen celwanden passeren. De meeste filterstudies richten zich op microplastics; de verwijdering van nanoplastics is minder goed onderzocht maar osmosemembranen (0,0001 micrometer) blokkeren ook de meeste nanoplastics.",
  },
  {
    question: "Hoe komen microplastics in het oppervlaktewater terecht?",
    answer:
      "De belangrijkste bronnen zijn: afbraak van plastic afval in rivieren en de zee, textielwas (elke wasbeurt laat tienduizenden synthetische vezels los die door rioolwaterzuiveringen passeren), slijtage van autobanden op het wegdek (via regenwater naar het oppervlaktewater), en microplastics in cosmetica en schoonmaakmiddelen. De Rijn en de Maas brengen grote hoeveelheden microplastics aan vanuit heel Europa.",
  },
  {
    question: "Verwijdert de waterzuivering van drinkwaterbedrijven microplastics?",
    answer:
      "Ja, voor het grootste deel. Moderne drinkwaterzuivering verwijdert 70-99% van de microplastics afhankelijk van de gebruikte technologieen. Zandfiltratie verwijdert grotere deeltjes, actief kool adsorbeert kleinere deeltjes en membraanfiltratie (ultrafiltratie of nanofiltration) verwijdert vrijwel alle resterende microplastics. Het water dat de kraan verlaat bevat gemiddeld 0-5 deeltjes/liter.",
  },
  {
    question: "Kan het leidingnet na zuivering nieuwe microplastics toevoegen?",
    answer:
      "Ja, maar in beperkte mate. Kunststofleidingen (PVC, PE, PP) kunnen bij beschadiging of slijtage kleine plasticdeeltjes afgeven. Bij renovatiewerkzaamheden of bij drukwisselingen kunnen kleine deeltjes loskomen. Dit effect is echter klein vergeleken met de hoeveelheid microplastics die al voor zuivering in het water zaten. Leidingen die conform normen zijn aangelegd, geven verwaarloosbare hoeveelheden plastic af.",
  },
  {
    question: "Welk filter verwijdert microplastics het best?",
    answer:
      "Omgekeerde osmose (RO) is het meest effectief met meer dan 99% verwijdering van microplastics en ook de meeste nanoplastics. Holle vezelfiltratie (ultrafiltratie, UF) verwijdert meer dan 98% van microplastics groter dan 0,02 micrometer. Sedimentfilters verwijderen deeltjes groter dan hun poriemaat (typisch 1-5 micrometer). Een gewone waterfilterkan of standaard koolstoffilter is nauwelijks effectief voor microplasticverwijdering.",
  },
  {
    question: "Bevat flessenwater meer microplastics dan kraanwater?",
    answer:
      "Ja, significant meer. Onderzoeken meten gemiddeld 10 tot 600+ microplasticdeeltjes per liter in flessenwater, waarbij plastic flessen meer afgeven dan glazen flessen. De plastic fles zelf is een bron: onder druk en bij hogere temperaturen (bijv. in een hete auto) geeft de fles meer microplastics af. Kraanwater bevat gemiddeld 0 tot 5 deeltjes per liter. Wie microplasticblootstelling wil minimaliseren, doet er beter aan kraanwater te drinken dan flessenwater.",
  },
  {
    question: "Is er een wettelijke norm voor microplastics in drinkwater?",
    answer:
      "Nog niet. De EU-drinkwaterrichtlijn 2020/2184 verplicht lidstaten wel om microplastics te monitoren als onderdeel van een 'watchlist', maar stelt nog geen maximale norm. Dit komt doordat er geen wetenschappelijke consensus is over de gezondheidskundige grenswaarden. De Europese Commissie werkt aan een methode voor standaardisatie van meting en rapportage.",
  },
  {
    question: "Helpt een koolstoffilter (Brita-kan) tegen microplastics?",
    answer:
      "Nauwelijks. Standaard koolstofgranulaat (GAC) in filterkannen heeft grote porieen die microplastics niet effectief tegenhouden. Koolstoffilters zijn ontworpen voor het verwijderen van chloor, geur en sommige organische stoffen. Voor microplasticverwijdering hebt u een filter nodig met een membraan van 1 micrometer of kleiner: ultrafiltratie, nanofiltration of osmose.",
  },
  {
    question: "Hoe meet ik zelf of mijn water microplastics bevat?",
    answer:
      "Zelf meten is praktisch niet mogelijk met consumentenapparatuur. Microplasticanalyse vereist gespecialiseerde apparatuur zoals micro-FTIR-spectroscopie of Raman-spectroscopie in een laboratorium. Sommige commerciele laboratoria bieden wateranalyse op microplastics aan, maar de kosten zijn hoog (EUR 200-500) en de methodologie is nog niet gestandaardiseerd. Voor de meeste consumenten is het efficienter een goed filter te installeren dan te meten.",
  },
];

export default function MicroplasticsLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Leidingwater", url: "https://waterfilterplatform.nl/leidingwater" },
          { name: "Microplastics", url: "https://waterfilterplatform.nl/leidingwater/microplastics" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Microplastics in leidingwater Nederland: metingen, risico en filteradvies",
          description:
            "Microplastics in NL leidingwater: RIVM-metingen, vergelijking met flessenwater. Kraanwater bevat significant minder plastic dan flessen. Osmose filtert 99%+.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/leidingwater/microplastics",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:underline">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Microplastics</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Microplastics in leidingwater Nederland: metingen, risico en filteradvies
          </h1>
          <QuickAnswer answer="Nederlands kraanwater bevat gemiddeld 0-5 microplasticdeeltjes per liter na meertrapszuivering. Flessenwater bevat 10-600+ deeltjes per liter. De WHO concludeert dat er bij huidige niveaus geen bewijs is voor directe gezondheidsschade. Voor wie microplastics wil filteren: osmose verwijdert 99%+ inclusief nanoplastics; ultrafiltratie verwijdert 98%+; een waterfilterkan is nauwelijks effectief." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Bronnen van microplastics in leidingwater
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Microplastics bereiken het drinkwaternet via meerdere routes. De twee hoofdbronnen
            zijn oppervlaktewater (Rijn en Maas) en het leidingnet zelf.
          </p>
          <h3 className="text-xl font-semibold text-[#003F5C] mb-3">Oppervlaktewater: Rijn en Maas</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Rijn en de Maas zijn de belangrijkste bronnen voor drinkwaterproductie in
            Nederland. Beide rivieren transporteren grote hoeveelheden microplastics vanuit
            heel Europa: afbraakproducten van plastic afval, synthetische vezels van textielwas
            en microplastics uit industriele en huishoudelijke lozing. Rioolwaterzuiveringen
            verwijderen 70-95% van de microplastics uit afvalwater, maar de resterende
            fractie belandt uiteindelijk in oppervlaktewater. Slijtage van autobanden is
            goed voor een substantieel deel van de microplasticbelasting van het wegoppervlak,
            dat via regenwater naar riolen en uiteindelijk naar oppervlaktewater afstroomt.
          </p>
          <h3 className="text-xl font-semibold text-[#003F5C] mb-3">Plastic leidingen en PVC-verbindingen</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het drinkwaterdistributienet gebruikt kunststofleidingen van PVC, PE of PP.
            Bij slijtage, beschadiging of drukwisselingen kunnen kleine plasticdeeltjes
            van de binnenwand loskomen. Dit effect is beperkt bij goed onderhouden leidingen,
            maar in oudere netten of na renovatiewerkzaamheden kan de bijdrage hoger zijn.
            PVC-verbindingen en fittingen vormen een potentiele bron van PVC-deeltjes,
            plasticizers (weekmakers) en additieven.
          </p>
          <h3 className="text-xl font-semibold text-[#003F5C] mb-3">Textielwas als indirecte bron</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elke wasbeurt van synthetische kleding (polyester, nylon, acryl) laat tienduizenden
            tot honderdduizenden microscopische vezels los. Rioolwaterzuiveringen vangen
            een groot deel hiervan op, maar een fractie passeert en belandt in oppervlaktewater.
            Dit is een van de grootste diffuse bronnen van microplasticverontreiniging
            wereldwijd.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Nederlandse metingen: kraanwater vs flessenwater
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            RIVM en KWR Wateronderzoek hebben de microplasticconcentraties in Nederlands
            drinkwater in kaart gebracht. De bevindingen zijn opmerkelijk:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Watertype</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Deeltjes per liter</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Grootte</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Primaire bron</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Nederlands kraanwater</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">0-5</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">&gt;1 micrometer</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Oppervlaktewater na zuivering</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Flessenwater (plastic)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-red-700 font-semibold">10-600+</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Variabel</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Plastic fles zelf</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Flessenwater (glas)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-yellow-700 font-semibold">2-15</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">&gt;1 micrometer</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Productieproces</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Kraanwater na osmosefilter</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">&lt;0,1</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Nano mogelijk</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">n.v.t.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-6 italic">
            Bron: KWR Wateronderzoek, RIVM-monitoringsdata. Concentraties voor microdeeltjes groter dan 1 micrometer.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De conclusie is opvallend: wie flessenwater drinkt om microplastics te vermijden,
            neemt meer microplastics tot zich dan bij kraanwater. De plastic fles zelf is
            een aanzienlijke bron, met name bij opwarming (bijv. een fles in een hete auto)
            of bij hergebruik van wegwerpflessen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Waterzuivering: welke stappen verwijderen microplastics
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Nederlandse drinkwaterproductie verwijdert microplastics via meerdere
            opeenvolgende stappen:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
            <li>
              <strong>Zandfiltratie:</strong> Langzame en snelle zandfilters verwijderen
              grotere zwevende deeltjes, inclusief microplastics groter dan 10-50 micrometer.
              Dit is een fysisch filtratieproces.
            </li>
            <li>
              <strong>Actief koolfiltratie:</strong> Granulaire actieve kool (GAC) adsorbeert
              organische stoffen en houdt ook kleinere plastic deeltjes en verontreinigingen
              vast. Minder specifiek voor microplastics, maar draagt bij.
            </li>
            <li>
              <strong>Membraanfiltratie (ultrafiltratie of nanofiltration):</strong> Moderne
              waterzuiveringsinstallaties gebruiken membraanfilters met poriegroottes van
              0,02 tot 0,001 micrometer. Deze verwijderen vrijwel alle resterende microplastics
              en een groot deel van de nanoplastics.
            </li>
            <li>
              <strong>Coagulatie en flocculatie:</strong> Chemische toevoeging laat kleine
              deeltjes samenklonteren tot grotere vlokken die makkelijker sedimenteren of
              filteren.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het gecombineerde effect van deze stappen is een reductie van 70-99% van de
            microplastics ten opzichte van het ruwe oppervlaktewater. Het water dat de
            zuiveringsinstallatie verlaat, bevat gemiddeld 0-5 deeltjes per liter.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Na zuivering maar voor de kraan: het leidingnet als extra bron
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het leidingnet kan na zuivering kleine hoeveelheden microplastics toevoegen.
            Kunststofleidingen van PVC of PE slijten langzaam en kunnen bij mechanische
            stress plasticdeeltjes afgeven. Drukwisselingen bij het in- en uitschakelen
            van pompen kunnen losse deeltjes meevoeren. In de praktijk is dit effect klein:
            studies meten slechts een beperkte toename van microplasticconcentraties
            tussen de uitgang van de zuiveringsinstallatie en de kraan. Goed onderhouden
            netten die aan de Nederlandse drinkwaternormen voldoen, voegen verwaarloosbaar
            weinig plastic toe.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            WHO-conclusie: bij huidige niveaus geen bewijs voor gezondheidsschade
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De WHO publiceerde in 2019 het rapport <em>Microplastics in drinking-water</em>.
            De kernconclusie: bij de huidige blootstellingsniveaus via drinkwater is er
            geen bewijs voor directe gezondheidsschade bij mensen. De WHO erkent wel dat
            langetermijneffecten van nanoplastics op cellulaire mechanismen onvoldoende
            onderzocht zijn en roept op tot verdere monitoring. Het rapport benadrukt
            dat de blootstelling via voeding en lucht waarschijnlijk groter is dan via
            drinkwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor wie toch extra zekerheid wil bieden, is een goed osmosefilter de meest
            doeltreffende maatregel. Zie ook onze pagina over{" "}
            <Link href="/drinkwaternormen/microplastics" className="text-[#005F8A] hover:underline font-medium">
              drinkwaternormen voor microplastics
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Filteropties thuis: van osmose tot waterfilterkan
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wie thuis microplastics wil filteren, heeft de volgende opties:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Poriegrote</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Microplastics</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Ook nanoplastics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">0,0001 micrometer</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">&gt;99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">Ja, grotendeels</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Holle vezel (ultrafiltratie)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">0,02 micrometer</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">&gt;98%</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-yellow-700 font-semibold">Gedeeltelijk</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Sedimentfilter (1 micrometer)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">1-5 micrometer</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-yellow-700 font-semibold">Gedeeltelijk</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-red-700 font-semibold">Nee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Koolstoffilter (GAC/blok)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">10-100 micrometer</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-red-700 font-semibold">Nauwelijks</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-red-700 font-semibold">Nee</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Waterfilterkan (bijv. Brita)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">&gt;100 micrometer</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-red-700 font-semibold">Niet effectief</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-red-700 font-semibold">Nee</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de beste bescherming tegen zowel microplastics als{" "}
            <Link href="/waterfilter/nanoplastics" className="text-[#005F8A] hover:underline font-medium">
              nanoplastics
            </Link>{" "}
            is omgekeerde osmose de aangewezen keuze. Een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilter onder het aanrecht
            </Link>{" "}
            verwijdert naast microplastics ook lood, nitraat, PFAS en pesticiden. Meer
            informatie over de specifieke werking voor microplastics vindt u op onze pagina{" "}
            <Link href="/waterfilter/microplastics" className="text-[#005F8A] hover:underline font-medium">
              waterfilter voor microplastics
            </Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zie ook:{" "}
            <Link href="/leidingwater" className="text-[#005F8A] hover:underline font-medium">
              kwaliteit leidingwater
            </Link>{" "}
            en{" "}
            <Link href="/drinkwaternormen/microplastics" className="text-[#005F8A] hover:underline font-medium">
              drinkwaternormen microplastics
            </Link>.
          </p>
          <p className="text-gray-700 mt-4">
            Verdiep uw kennis: <Link href="/stoffen-in-drinkwater/microbiologisch" className="text-[#005F8A] hover:underline font-medium">Microbiologische en chemische risico&apos;s in drinkwater</Link>.
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
            <Link href="/stoffen-in-drinkwater/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Microplastics in drinkwater</h3>
              <p className="text-sm text-gray-600">Wetenschappelijk overzicht van microplastics als drinkwaterverontreiniging.</p>
            </Link>
            <Link href="/drinkwaternormen/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen voor microplastics</h3>
              <p className="text-sm text-gray-600">Huidige regelgeving en normen rondom microplastics in drinkwater.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Hoe omgekeerde osmose microplastics effectief uit drinkwater filtert.</p>
            </Link>
            <Link href="/waterfilter/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor microplastics</h3>
              <p className="text-sm text-gray-600">Vergelijking van filters die microplastics uit drinkwater verwijderen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
