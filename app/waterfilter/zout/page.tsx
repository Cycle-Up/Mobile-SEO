import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zout in drinkwater: waar komt het vandaan en hoe verwijderen?',
  description: 'Zout (natrium en chloride) in kraanwater: oorzaken, Nederlandse normen, gezondheidsrisico\'s en welk waterfilter natrium effectief verwijdert. Osmose vs',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/zout' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waar komt zout (natrium) in kraanwater vandaan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Natrium in kraanwater heeft meerdere bronnen: zeewater-intrusie in kustregio\'s zoals Zeeland en de kuststrook van Zuid-Holland, ionenwisselaar-waterontharders die voor elk verwijderd calcium-ion twee natriumionen toevoegen, industriële lozingen, en strooizout dat na regenval in het grondwater sijpelt. In kustgebieden is geogene intrusie de hoofdoorzaak; in het binnenland is een waterontharder de meest voorkomende oorzaak van verhoogd natriumgehalte aan de kraan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe hoog is het natriumgehalte in Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemiddeld Nederlands leidingwater bevat 20–80 mg/L natrium. In kustprovincies zoals Zeeland kunnen concentraties oplopen tot 100–150 mg/L door zeewater-intrusie. Water dat door een ionenwisselaar-ontharder is behandeld, kan 100–300 mg/L natrium bevatten, afhankelijk van de hardheid van het bronwater. De WHO-richtlijn voor smaak ligt op 200 mg/L; de gezondheidsdrempel voor hartpatiënten en mensen op natriumbeperkt dieet ligt doorgaans lager.',
      },
    },
    {
      '@type': 'Question',
      name: 'Voegt een waterontharder zout toe aan mijn drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een klassieke ionenwisselaar-waterontharder voegt natrium toe. Voor elk calcium-ion (Ca²⁺) dat wordt verwijderd, komen er twee natriumionen (Na⁺) terug in het water. Typisch voorbeeld: water met 300 mg/L calciumcarbonaat-hardheid kan na ontharting 100–150 mg/L extra natrium bevatten. Dit is relevant voor mensen op een natriumarm dieet, hartpatiënten en baby\'s. Alternatief: kaliumchloride-regenerant vervangt natrium door kalium, wat voor de meeste mensen gezonder is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter natrium uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, omgekeerde osmose is de meest effectieve methode: 95–99% natriumverwijdering. Typisch voorbeeld: water met 300 mg/L NaCl geeft na osmosefiltratie minder dan 15 mg/L natrium in het gefiltreerde water. Standaard koolstoffilters en waterfilterkannen verwijderen natrium NIET. Een waterontharder verhoogt natrium zelfs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen natrium en chloride in water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keukenzout (NaCl) splitst in water in natriumionen (Na⁺) en chloride-ionen (Cl⁻). Ze worden afzonderlijk gemeten. Natrium bepaalt mede het gezondheidsrisico (bloeddruk, hart), chloride bepaalt mede de smaak (ziltig). In analyserapportages staan beide apart vermeld. De EU-norm voor chloride in drinkwater is 250 mg/L (smaak), voor natrium 200 mg/L (WHO-richtlijn).',
      },
    },
    {
      '@type': 'Question',
      name: 'Voor wie is zout in drinkwater een gezondheidsrisico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Risicogroepen zijn: hartpatiënten en mensen met hoge bloeddruk op een natriumbeperkt dieet (vaak maximum 500–1500 mg Na per dag totaal); baby\'s onder 6 maanden wier nieren nog niet volledig zijn ontwikkeld; mensen met chronische nierproblemen. Voor gezonde volwassenen is water met &lt;200 mg/L natrium geen enkel probleem. De Britse NHS stelt de veiligheidsgrens op 460 mg/L voor volwassenen — boven dit niveau smaakt water duidelijk ziltig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt kaliumchloride in een waterontharder als alternatief voor natriumzout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, kaliumchloride (KCl) als regenerant in een waterontharder is een goed alternatief. In plaats van natrium wordt kalium toegevoegd aan het ontharde water. Kalium is voor de meeste mensen geen probleem en heeft geen effect op bloeddruk in normale concentraties. Mensen met nierproblemen of kaliumsuppletie raadplegen hun arts. KCl is iets duurder dan NaCl-zout maar voorkomt natriumopbouw voor risicogroepen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik de zoutsmaak uit kraanwater halen met een filterkan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Standaard waterfilterkannen met actief-koolfilter verwijderen geen natrium of chloride. Ze verwijderen chloor, bepaalde organische stoffen en kalk deels, maar ionen zoals Na⁺ en Cl⁻ passeren het koolstoffilter ongehinderd. Alleen omgekeerde osmose of een ionenwisselende filterpatroon specifiek voor anionen/kationen verwijdert zout effectief. Osmose is veruit de meest praktische optie voor thuis.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Zout in drinkwater: waar komt het vandaan en hoe verwijderen?',
  description: 'Natrium en chloride in kraanwater: oorzaken, Nederlandse situatie en welk filter zout effectief verwijdert.',
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
  url: 'https://waterfilterplatform.nl/waterfilter/zout',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterZoutPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          articleSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Zout in drinkwater', item: 'https://waterfilterplatform.nl/waterfilter/zout' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Zout in drinkwater</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Zout in drinkwater: waar komt het vandaan en hoe verwijderen?
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Natrium in kraanwater komt van zeewater-intrusie in kustgebieden, ionenwisselaar-waterontharders en strooizout. Een osmosefilter verwijdert 95–99% van natrium. Standaard koolstoffilters helpen niet. Risicogroepen: hartpatiënten, hypertensie, baby&apos;s en mensen op natriumbeperkt dieet.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waar komt zout in drinkwater vandaan?
        </h2>
        <p className="text-gray-700 mb-4">
          Natrium (Na) en chloride (Cl) vormen samen keukenzout (NaCl), maar in water worden ze afzonderlijk gemeten en hebben ze afzonderlijke bronnen en effecten. De vier voornaamste bronnen van verhoogd zoutgehalte in Nederlands drinkwater:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">1. Zeewater-intrusie in kustgebieden</h3>
            <p className="text-gray-700 text-sm">
              In Nederland, met name in Zeeland, de kuststrook van Zuid-Holland en Noord-Holland, sijpelt zeewater het zoetwater-grondwatersysteem in. Dit verhoogt het natrium- en chloridegehalte in grondwater van nature. Drinkwaterbedrijven mengen bronnen om onder de normen te blijven, maar in droge jaren kan het aandeel zoutwater stijgen. Particuliere putten in kustgebieden kunnen concentraties van 100–150 mg/L natrium bereiken.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">2. Ionenwisselaar-waterontharders voegen natrium toe</h3>
            <p className="text-gray-700 text-sm">
              Dit is de meest onderschatte bron van zout in huishoudelijk drinkwater. Een klassieke ionenwisselaar-ontharder verwijdert calcium (Ca²⁺) en magnesium (Mg²⁺) door ze te vervangen door natriumionen (Na⁺). De chemische ruilverhouding is vast: voor elke Ca²⁺ komen er 2 Na⁺ in de plaats. Bij hard water (Nederlandse gemiddelde hardheid 15–25 °dH) kan dit de natriumconcentratie met 80–200 mg/L verhogen. Veel huishoudens zijn zich hier niet van bewust.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">3. Strooizout en industriële lozingen</h3>
            <p className="text-gray-700 text-sm">
              Wegenzout (natriumchloride) dat in de winter wordt gestrooid, spoelt in het grondwater en oppervlaktewater. Dit effect is seizoensgebonden en diffuus. Industriële lozingen van voedsel- en chemiebedrijven kunnen lokaal het chloridegehalte in oppervlaktewater verhogen. Drinkwaterbedrijven monitoren dit actief en passen watermenging aan.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">4. Natuurlijke geologie</h3>
            <p className="text-gray-700 text-sm">
              In sommige geologische formaties lossen van nature zouten uit de bodem in het grondwater. Dit speelt minder in Nederland dan in landen met zoutgesteente, maar is in veengebieden langs de kust wel degelijk relevant door de mariene oorsprong van de bodemlagen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Natriumgehaltes in Nederland: normen en praktijk
        </h2>
        <p className="text-gray-700 mb-4">
          De WHO-richtlijn voor natrium in drinkwater bedraagt 200 mg/L op basis van smaak — boven dit niveau proeven de meeste mensen water als &ldquo;ziltig&rdquo;. Er is geen strenge gezondheidsgrens voor de algemene bevolking, maar voor specifieke groepen gelden lagere aanbevelingen. De situatie in Nederland:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Gemiddeld leidingwater:</strong> 20–80 mg/L natrium — ruim onder de smaakdrempel</li>
          <li><strong>Kustprovincies (Zeeland, Z-Holland kust):</strong> Kan naturel 80–150 mg/L bereiken door zeewater-intrusie</li>
          <li><strong>Na waterontharder:</strong> Afhankelijk van hardheid; bij 20 °dH hardheid kan onthard water 150–250 mg/L natrium bevatten</li>
          <li><strong>WHO smaakgrens:</strong> 200 mg/L — boven dit niveau duidelijk ziltige smaak</li>
          <li><strong>NHS (VK) veiligheidsgrens volwassenen:</strong> 460 mg/L</li>
        </ul>
        <p className="text-gray-700 mb-6">
          De EU-norm voor chloride in drinkwater is 250 mg/L (smaaknorm). Er is geen EU-wettelijke bovengrens voor natrium specifiek, maar drinkwaterbedrijven hanteren de WHO-richtlijn van 200 mg/L.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterontharder en natrium: de rekensom
        </h2>
        <p className="text-gray-700 mb-4">
          Het mechanisme van ionenwisseling in een waterontharder is eenvoudig maar heeft een duidelijke consequentie voor natriumgevoelige personen:
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-4">
          <p className="text-sm font-semibold text-[#003F5C] mb-2">Rekenvoorbeeld</p>
          <p className="text-gray-700 text-sm mb-1">Ingaand water: 300 mg/L calcium (als CaCO₃) = circa 120 mg/L Ca²⁺</p>
          <p className="text-gray-700 text-sm mb-1">Uitwisseling: 1 Ca²⁺ → 2 Na⁺ (moleculaire verhouding)</p>
          <p className="text-gray-700 text-sm mb-1">Natriumtoevoeging: ca. 110 mg/L extra natrium</p>
          <p className="text-gray-700 text-sm mb-1">Ingaand natrium leidingwater: gemiddeld 40 mg/L</p>
          <p className="text-gray-700 text-sm font-semibold">Uitkomend onthard water: ca. 150 mg/L natrium — onder WHO-smaakgrens maar relevant voor risicogroepen</p>
        </div>
        <p className="text-gray-700 mb-4">
          Het advies luidt dan ook: installeer een osmosefilter na de waterontharder als u tot een risicogroep behoort. Het osmosefilter verwijdert het toegevoegde natrium weer. Een osmosefilter na een ontharder heeft ook een voordeel: het ontijzerde, onthardte water beschadigt het osmosemembraan minder snel.
        </p>
        <p className="text-gray-700 mb-6">
          Alternatief: gebruik kaliumchloride (KCl) als regenerant in de ontharder in plaats van natriumchloride. Dan wordt Ca²⁺ vervangen door K⁺ (kalium) in plaats van Na⁺. Kalium heeft geen effect op bloeddruk in normale concentraties, al raadplegen mensen met nierproblemen best hun arts.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s: wie moet opletten?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor gezonde volwassenen is een natriumgehalte tot 200 mg/L in drinkwater geen gezondheidsprobleem — de gemiddelde Nederlander consumeert al ruim 3.000 mg natrium per dag via voeding (norm: max 2.000 mg), waardoor drinkwater een klein aandeel uitmaakt. Maar voor drie groepen verdient dit meer aandacht:
        </p>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Baby&apos;s onder 6 maanden</h3>
            <p className="text-gray-700 text-sm">
              Baby&apos;s hebben onrijpe nieren die natrium nog niet goed kunnen uitscheiden. De Gezondheidsraad adviseert water voor babyvoeding met minder dan 20 mg/L natrium. Hoge natriumconcentraties kunnen hypernatriëmie veroorzaken, een gevaarlijke aandoening. Gebruik voor babyvoeding uitsluitend gefilterd osmosewater of speciaal babywater.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Hartpatiënten en mensen met hoge bloeddruk</h3>
            <p className="text-gray-700 text-sm">
              Mensen op een natriumbeperkt dieet (vaak &lt;1.500 mg/dag aanbevolen door cardiologen) moeten ook de bijdrage van drinkwater meewegen. Bij 2 liter drinkwater met 150 mg/L natrium per dag bedraagt de bijdrage via water al 300 mg — 20% van het dagbudget. Een osmosefilter reduceert dit naar minder dan 15 mg per dag via water.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Mensen met nierproblemen</h3>
            <p className="text-gray-700 text-sm">
              Verminderde nierfunctie bemoeilijkt de natriumuitscheiding. Chronische nieraandoeningen gaan vaak gepaard met een natriumbeperkt dieet. Dialysepatiënten zijn extra gevoelig. Raadpleeg altijd de behandelend arts over watergebruik.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor zout (natrium en chloride)
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Aanbevolen</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Osmosefilters verwijderen 95–99% van opgeloste ionen, inclusief Na⁺ en Cl⁻. Het semipermeabele membraan laat alleen watermoleculen door; ionen worden tegengehouden en afgevoerd naar het afvalwater. De meest complete oplossing voor zout in water, en tegelijkertijd effectief tegen nitraat, lood, PFAS, bacteriën en andere verontreinigingen. Zie ons artikel over{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</Link> voor meer uitleg.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Natrium: 95–99% verwijdering</span>
              <span>Chloride: 95–99% verwijdering</span>
              <span>Kosten: €300–800</span>
              <span>Onderhoud: jaarlijks patronen + membraan</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Kaliumchloride-waterontharder</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Reduceert natriumtoevoeging</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Vervangt natriumchloride-zout in de ontharder door kaliumchloride. Het water wordt nog steeds ontzout (Ca²⁺/Mg²⁺ verwijderd), maar in plaats van natrium wordt kalium toegevoegd. Voorkomt de natriumtoevoeging door de ontharder, hoewel het het natrium dat al in het leidingwater zit niet verwijdert.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Natriumtoevoeging: 0%</span>
              <span>Chloride: geen verwijdering</span>
              <span>Kosten regenerant: iets hoger dan NaCl</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Actief-koolfilter / waterfilterkan</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Niet effectief voor zout</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Actief-koolfilters verwijderen chloor, geuren en organische stoffen, maar zijn niet effectief voor opgeloste ionen zoals natrium en chloride. Waterfilterkannen (Brita, etc.) zijn goed voor smaak en chloor, maar veranderen de zoutconcentratie niet. Niet geschikt als oplossing voor zout water.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Natrium: &lt;5% verwijdering</span>
              <span>Chloride: &lt;5% verwijdering</span>
              <span>Kosten: €30–80</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Destillatie</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Destillatie verwijdert vrijwel alle opgeloste stoffen inclusief natrium en chloride (&gt;99%). Hoog energieverbruik, trage productie. Niet praktisch voor dagelijks gebruik. Nuttig als noodoplossing of voor kleine volumes.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Natrium: &gt;99% verwijdering</span>
              <span>Energieverbruik: hoog</span>
              <span>Kosten: €200–500 apparaat</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: filtertype en natriumverwijdering
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Na verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Cl verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–99%</td>
                <td className="border border-gray-300 px-3 py-2">€300–800</td>
                <td className="border border-gray-300 px-3 py-2">Beste alles-in-één oplossing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Destillatie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;99%</td>
                <td className="border border-gray-300 px-3 py-2">€200–500</td>
                <td className="border border-gray-300 px-3 py-2">Langzaam, hoog energieverbruik</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Waterontharder (NaCl)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Voegt natrium TOE</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Voegt chloride TOE</td>
                <td className="border border-gray-300 px-3 py-2">€600–2.000</td>
                <td className="border border-gray-300 px-3 py-2">Verhoogt natriumgehalte</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Waterontharder (KCl)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Geen toevoeging</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Voegt Cl⁻ toe</td>
                <td className="border border-gray-300 px-3 py-2">Iets hoger regenerant</td>
                <td className="border border-gray-300 px-3 py-2">Voegt kalium toe i.p.v. natrium</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Actief-koolfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2">€30–200</td>
                <td className="border border-gray-300 px-3 py-2">NIET geschikt voor zout</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Waterfilterkan (Brita)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2">€30–60</td>
                <td className="border border-gray-300 px-3 py-2">NIET geschikt voor zout</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch rekenvoorbeeld: osmose na waterontharder
        </h2>
        <p className="text-gray-700 mb-4">
          Stel: u heeft leidingwater met 40 mg/L natrium en een waterontharder (NaCl-regenerant) die het natriumgehalte verhoogt naar 200 mg/L. Na een osmosefilter:
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6">
          <p className="text-gray-700 text-sm mb-1">Inkomend water ontharder: 200 mg/L Na</p>
          <p className="text-gray-700 text-sm mb-1">Osmosefilter verwijdering: 97%</p>
          <p className="text-gray-700 text-sm font-semibold">Uitkomend osmosewater: ca. 6 mg/L Na — ver onder alle normen en ideaal voor babyvoeding</p>
        </div>
        <p className="text-gray-700 mb-6">
          Dit is een van de meest aanbevolen combinaties voor huishoudens met een waterontharder en baby&apos;s of hartpatiënten. Zie ook ons artikel over{' '}
          <Link href="/waterfilter/nitraat" className="text-[#005F8A] underline">nitraat verwijderen met een waterfilter</Link> voor meer filteropties.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterontharder/zout" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zout voor waterontharder</h3>
              <p className="text-sm text-gray-600">Tabletzout, blokzout of granulaat voor de waterontharder: wat is het beste en voordeligst?</p>
            </Link>
            <Link href="/waterontharder/zout-gebruik" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zoutgebruik waterontharder</h3>
              <p className="text-sm text-gray-600">Hoeveel zout verbruikt een waterontharder en hoe optimaliseer je het zoutverbruik?</p>
            </Link>
            <Link href="/waterfilter/waterverzachter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter of waterverzachter?</h3>
              <p className="text-sm text-gray-600">Vergelijking van waterfilter en waterverzachter: wat zijn de verschillen en wanneer kies je wat?</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
              <p className="text-sm text-gray-600">Vind de juiste aanpak voor jouw hardwaterprobleem met onze stap-voor-stap keuzehulp.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/waterfilter/arsenicum" className="text-[#005F8A] underline">arsenicum in drinkwater filteren</Link>,{' '}
          <Link href="/waterfilter/nitraat" className="text-[#005F8A] underline">nitraat verwijderen uit water</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
