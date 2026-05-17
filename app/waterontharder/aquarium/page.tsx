import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterontharder en aquarium: natrium gevaarlijk voor vissen",
  description:
    "Waterontharder water is NIET geschikt voor aquarium: natrium (Na+) is toxisch voor zoetwatervissen. Gebruik osmosewater of onbehandeld leidingwater voor.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterontharder/aquarium" },
  openGraph: {
    title: "Waterontharder en aquarium: natrium gevaarlijk voor vissen",
    description:
      "Waterontharder water is NIET geschikt voor aquarium: natrium (Na+) is toxisch voor zoetwatervissen. Gebruik osmosewater of onbehandeld leidingwater.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Waarom is waterontharder water gevaarlijk voor aquariumvissen?",
    answer:
      "Een ionenwisselende waterontharder vervangt calcium- en magnesiumionen door natriumionen (Na+). Natrium is toxisch voor zoetwatervissen: het verstoort de osmoregulatie, waarmee vissen hun interne zoutbalans reguleren. Zoetwatervissen leven in water met lage ionenconcentraties en kunnen niet omgaan met plotseling verhoogde natriumconcentraties. Bovendien daalt de GH (algemene hardheid) naar nul, terwijl vissen calcium en magnesium nodig hebben voor botvorming en enzymen.",
  },
  {
    question: "Welk water is het beste voor een tropisch zoetwater-aquarium?",
    answer:
      "Voor de meeste tropische zoetwatervissen is onbehandeld leidingwater prima geschikt, mits de hardheid in het bereik van 6-15 dH (GH) en 3-8 dH (KH) valt. Bij hard leidingwater (boven 18 dH) kunt u het mengen met osmosewater tot de gewenste hardheid bereikt is. Osmosewater + remineralisering (met Seachem Equilibrium voor GH en natriumbicarbonaat voor KH) geeft de meest nauwkeurige controle.",
  },
  {
    question: "Kan ik osmosewater gebruiken voor mijn aquarium?",
    answer:
      "Ja, osmosewater is een uitstekende basis voor aquariumwater, maar het is te puur voor directe gebruik: GH en KH zijn nagenoeg nul. U moet remineraliseren met aquariumsalts voor de gewenste GH en KH. Voor tropische vissen: GH 6-12 dH, KH 3-8 dH. Voor Afrikaanse rift-lakvissen: GH 15-25 dH, KH 10-20 dH. Gebruik nooit gewone keukenzout of zwembadzout; gebruik gespecialiseerde remineralisatiesalts.",
  },
  {
    question: "Hoe stel ik GH en KH in met osmosewater?",
    answer:
      "Voeg aan osmosewater toe: voor GH gebruik Seachem Equilibrium, Salty Shrimp GH+ of vergelijkbaar product (bevat calcium, magnesium, kalium maar geen natrium). Voor KH gebruik natriumbicarbonaat (NaHCO3, zuiveringszout) of Salty Shrimp KH+ in kleine hoeveelheden. Meng het in een emmer, wacht 15 minuten en meet daarna met een titratieset. Voeg het water geleidelijk toe aan het aquarium om thermische en chemische schok te voorkomen.",
  },
  {
    question: "Kan ik een bypass installeren zodat de aquariumkraan geen onthard water krijgt?",
    answer:
      "Ja, een bypass op uw waterontharder is een goede oplossing. Een erkende installateur plaatst een mengventiel waarmee u een deel van het water via de ontharder leidt en een deel onbehandeld laat. Voor het aquarium kunt u direct onbehandeld leidingwater gebruiken. Let op: dit vereist een aparte kraan of leiding naar de aquariumlocatie, of u vult emmers bij een ongeontharde kraan (bijv. een buitenkraan die doorgaans voor de ontharder aftakt).",
  },
  {
    question: "Zijn er aquaria waarbij waterontharder water wel geschikt is?",
    answer:
      "Zoutwateraquaria (mariene aquaria) gebruiken kunstmatig zeewater dat al rijk is aan natrium en chloride. Voor zoutwater-aquaria is onthard leidingwater als basiswater voor osmosemenging geen probleem, maar voor mariene tanks wordt altijd osmosewater als basis gebruikt. Voor cichlidentanks of brak-wateraquaria zijn specifiek aangepaste mineralenprofielen nodig; ook hier is onthard leidingwater geen goede keuze.",
  },
  {
    question: "Wat zijn de symptomen bij aquariumvissen die onthard water krijgen?",
    answer:
      "Symptomen van osmotische stress door te laag-mineralig of natriumrijk water zijn: verminderde activiteit, zwemmen aan het oppervlak (zuurstoftekort), verlies van kleur, verminderde eetlust, huidproblemen zoals slijmlaagverlies en schimmelinfecties. Bij acute blootstelling aan sterk onthard water kunnen vissen binnen uren sterven. Bij geleidelijke aanpassing zijn de symptomen subtieler maar leidt het tot verminderde weerstand en levensduurverkorting.",
  },
  {
    question: "Kan regenwater als alternatief voor aquariumwater worden gebruikt?",
    answer:
      "Regenwater is vergelijkbaar met osmosewater: lage GH en KH, bijna geen ionen. Het vereist dezelfde remineralisatiestap als osmosewater. Het nadeel van regenwater is inconsistente kwaliteit: het bevat luchtvervuiling, stof, bacterien en mogelijk zware metalen van dakbedekking. Gebruik regenwater alleen na filtratie (actief koolstoffilter en UV-sterilisatie) en remineralisering.",
  },
];

export default function WaterOntharderAquariumPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterontharder", url: "https://waterfilterplatform.nl/waterontharder" },
          { name: "Aquarium", url: "https://waterfilterplatform.nl/waterontharder/aquarium" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterontharder en aquarium: natrium gevaarlijk voor vissen",
          description:
            "Waterontharder water is niet geschikt voor aquarium. Natrium (Na+) is toxisch voor zoetwatervissen. Gebruik osmosewater of onbehandeld leidingwater.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterontharder/aquarium",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:underline">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Aquarium</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder water voor aquarium: waarom het niet mag
          </h1>
          <QuickAnswer answer="Water van een ionenwisselende waterontharder is NIET geschikt voor aquaria. De waterontharder vervangt calcium en magnesium door natrium (Na+), dat toxisch is voor zoetwatervissen en aquariumplanten. Gebruik voor aquaria altijd osmosewater of onbehandeld leidingwater, eventueel gemengd." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Hoe werkt een waterontharder en waarom is dat een probleem?
          </h2>
          <p className="text-gray-700 mb-4">
            Een ionenwisselende waterontharder bevat een harsbed gevuld met ionenwisselaarhars.
            Wanneer hard water door het hars stroomt, worden calcium-ionen (Ca2+) en
            magnesium-ionen (Mg2+) vastgehouden door het hars en worden natriumionen (Na+)
            vrijgegeven als vervanging. Het resultaat: water met een GH van nul maar met een
            sterk verhoogde natriumconcentratie.
          </p>
          <p className="text-gray-700 mb-4">
            De natriumconcentratie in onthard water is afhankelijk van de oorspronkelijke
            waterhardheid: bij 20 dH leidingwater voegt de ontharder circa 160 mg/L natrium toe
            (elke dH graad = circa 8 mg/L extra natrium). Dit is voor de meeste volwassenen met
            een normaal dieet geen gezondheidsprobleem, maar voor aquariumvissen is het fataal.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Natrium (Na+) en zoetwatervissen: toxiciteit
          </h2>
          <p className="text-gray-700 mb-4">
            Zoetwatervissen leven in een omgeving met een laag gehalte aan opgeloste zouten.
            Ze handhaven hun interne zoutbalans (osmoregulatie) door actief ionen op te nemen
            via kieuwen en voeding. Wanneer de natriumconcentratie in het omgevingswater sterk
            stijgt, verstoort dit de osmotische gradienten die de vis nodig heeft om water en
            ionen te reguleren.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-orange-800">
              <strong>Gevolgen bij onthard water in het aquarium:</strong> de hoge
              natriumconcentratie creert osmotische stress. Vissen verliezen de controle over
              hun waterbalans, raken uitgedroogd op cellulair niveau en kunnen binnen uren tot
              dagen sterven bij acute blootstelling.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            Bovendien daalt de GH (algemene hardheid) naar nul in onthard water. Vissen hebben
            calcium en magnesium nodig voor botvorming, schubontwikkeling, enzymfuncties en
            spierwerking. Een GH van nul is een ander probleem naast het natriumoverschot.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            GH en KH: waarom ze belangrijk zijn
          </h2>
          <p className="text-gray-700 mb-4">
            In de aquaristiek worden twee hardheidsmaten gebruikt:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>GH (algemene hardheid):</strong> bevat calcium en magnesium. Te lage GH
              (onder 3 dH) veroorzaakt kinkziekte bij vissen en slechte plantengroei. Te hoge GH
              (boven 25 dH) is problematisch voor zachtwatervissen.
            </li>
            <li>
              <strong>KH (carbonaathardheid):</strong> de buffercapaciteit van het water. KH
              stabiliseert de pH. Bij KH onder 3 dH kan de pH plotseling sterk dalen
              (pH-crash), wat vissen direct schaadt.
            </li>
          </ul>
          <p className="text-gray-700 mb-6">
            Een ionenwisselende waterontharder verlaagt zowel GH als KH naar vrijwel nul en
            vervangt de ionen door natrium. Het resultaat is water dat aan alle drie de
            criteria faalt: te weinig Ca/Mg, te weinig buffercapaciteit en te veel natrium.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Correct water voor een aquarium
          </h2>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Onbehandeld leidingwater
          </h3>
          <p className="text-gray-700 mb-4">
            Voor de meeste tropische zoetwatervissen (neontetra, guppies, barbs, cichliden) is
            gewoon onbehandeld leidingwater prima. Als de hardheid in uw regio tussen 8-18 dH
            valt, kunt u het direct gebruiken na ontkhloring (chloor-neutralisator of
            24 uur laten staan). Informeer de exacte hardheid bij uw drinkwaterbedrijf.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Osmosewater + remineralisering
          </h3>
          <p className="text-gray-700 mb-4">
            Osmosewater is de meest flexibele optie voor aquariumbeheer. U mengt het met
            leidingwater of voegt remineralisatiesalts toe om precies de gewenste GH en KH in
            te stellen.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Vistype</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">GH (dH)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">KH (dH)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">pH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Tropische zoetwatervissen (algemeen)</td>
                  <td className="border border-gray-300 px-3 py-2">6&ndash;12</td>
                  <td className="border border-gray-300 px-3 py-2">3&ndash;8</td>
                  <td className="border border-gray-300 px-3 py-2">6,8&ndash;7,6</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Zachtwatervissen (discus, neon)</td>
                  <td className="border border-gray-300 px-3 py-2">3&ndash;8</td>
                  <td className="border border-gray-300 px-3 py-2">1&ndash;4</td>
                  <td className="border border-gray-300 px-3 py-2">6,0&ndash;7,0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Afrikaanse rift-lakvissen (cichliden)</td>
                  <td className="border border-gray-300 px-3 py-2">15&ndash;25</td>
                  <td className="border border-gray-300 px-3 py-2">10&ndash;20</td>
                  <td className="border border-gray-300 px-3 py-2">7,8&ndash;8,5</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Garnalen (Neocaridina)</td>
                  <td className="border border-gray-300 px-3 py-2">6&ndash;10</td>
                  <td className="border border-gray-300 px-3 py-2">3&ndash;6</td>
                  <td className="border border-gray-300 px-3 py-2">7,0&ndash;7,6</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            Remineralisatieproducten voor osmosewater
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>
              <strong>Seachem Equilibrium:</strong> verhoogt GH met calcium, magnesium en kalium.
              Bevat geen natrium. Ideaal voor zoetwater-aquaria.
            </li>
            <li>
              <strong>Salty Shrimp GH+ en KH+:</strong> gespecialiseerd voor garnalen-aquaria,
              nauwkeurig gedoseerd per liter.
            </li>
            <li>
              <strong>Natriumbicarbonaat (NaHCO3, zuiveringszout):</strong> verhoogt KH zonder
              GH te beinvloeden. Goedkoop en eenvoudig doseerbaar. Let op: voegt minimale
              hoeveelheid natrium toe (aanvaardbaar in kleine doses).
            </li>
            <li>
              <strong>Calciumchloride (CaCl2):</strong> verhoogt GH via calcium, geschikt als
              aanvulling op KH-buffers.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Waterontharder bypass voor de aquariumkraan
          </h2>
          <p className="text-gray-700 mb-4">
            Als u een waterontharder in uw huis heeft maar ook een aquarium wilt bijhouden,
            zijn er twee praktische oplossingen:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
            <li>
              <strong>Bypass-kraan:</strong> laat een erkende installateur een bypass-kraan
              plaatsen zodat er een onbehandelde wateraftap beschikbaar is. In veel woningen is
              de buitenkraan of de keukenkraan vaak al voorzien van ongeonthaard water
              (aftakking voor de ontharder).
            </li>
            <li>
              <strong>Osmosefilter als extra zuiveringsstap:</strong> als uw leidingwater erg
              hard is, kunt u een osmosefilter plaatsen speciaal voor het aquarium. Het
              osmosewater vervangt dan het zachte water in uw mengratio, zonder de
              natriumproblematiek van de ontharder.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Aquariumplanten en waterhardheid
          </h2>
          <p className="text-gray-700 mb-4">
            Aquariumplanten reageren vergelijkbaar op watersamenstelling als vissen.
            Zachtwaterplanten (Cryptocoryne, Java moss, Anubias) gedijen het best bij GH 3-10 dH.
            Hardwaterplanten (Vallisneria, Egeria) tolereren tot 20 dH. Alle planten hebben
            calcium en magnesium nodig voor celwandopbouw (calcium) en chlorofyl (magnesium).
            In onthard water met GH nul groeien aquariumplanten slecht of sterven af.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Veelgestelde vragen
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-8">
          Zie ook:{" "}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder kiezen</Link>
          {", "}
          <Link href="/osmose-water/aquarium" className="text-[#005F8A] underline">osmosewater voor aquarium</Link>
          {" en "}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>.
        </p>
      </div>
    </>
  );
}
