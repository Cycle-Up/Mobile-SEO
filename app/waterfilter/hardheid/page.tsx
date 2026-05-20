import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor hard water: ontharder, osmose of magneetfilter?',
  description:
    'Hard water (boven 15 dH) veroorzaakt kalkafzetting in apparaten en leidingen. Vergelijking van waterontharder, osmosefilter en magnetische waterbehandeling.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/hardheid' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is hard water en hoeveel dH is normaal in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hard water bevat verhoogde concentraties calcium- en magnesiumionen. In Nederland loopt de waterhardheid sterk uiteen: West-Nederland (Amsterdam, Rotterdam) heeft zacht water van 7-10 dH, terwijl Midden- en Oost-Nederland (Utrecht, Nijmegen) 15-25 dH kent. Limburg heeft het hardste water met meer dan 20 dH. Boven de 15 dH spreekt men van hard water waarbij kalkproblemen zichtbaar worden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter kalk uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een omgekeerde osmosefilter verwijdert 95-99% van de calcium- en magnesiumionen die verantwoordelijk zijn voor waterhardheid. Het osmosewater dat uit het kraantje komt is vrijwel kalkvrij. Het nadeel is dat een osmosefilter alleen het drinkwater filtert, niet het water voor de wasmachine, vaatwasser of douche. Voor totale bescherming van apparatuur is een waterontharder voor het hele huis effectiever.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een magneetfilter tegen kalk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het wetenschappelijk bewijs voor magnetische waterbehandeling als anti-kalkmaatregel is zeer beperkt en controversieel. Magneetfilters voeren geen ionenwisseling uit en verwijderen geen calcium of magnesium uit het water. Hooguit kunnen ze tijdelijk de kristalstructuur van kalk aanpassen waardoor de neerslag minder hard is. Onafhankelijke studies tonen inconsistente resultaten. Magneetfilters worden niet aanbevolen als primaire maatregel tegen hard water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost een waterontharder voor thuisgebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder voor een doorsnee huishouden kost bij aanschaf 500 tot 2.000 euro inclusief installatie. Daarna zijn er jaarlijkse kosten voor regeneratiezout van 30 tot 80 euro per jaar. Een kwalitatieve ontharder van merken als Fleck, Harveys of Kinetico gaat 15-25 jaar mee. Goedkopere modellen beginnen rond 300-500 euro maar hebben hogere onderhoudskosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is zacht water slecht voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chemisch zacht water (van een ionenwisselaar) bevat meer natrium doordat calcium en magnesium zijn vervangen door natriumionen. Dit extra natrium (circa 8 mg per dH-graad per liter) is voor de meeste mensen niet relevant, maar mensen met hypertensie of op een natriumarm dieet doen er verstandig aan een osmosefilter te combineren met de ontharder voor drinkwater. Alternatief: gebruik KCl-zout in de ontharder in plaats van NaCl.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe meet ik de waterhardheid thuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U kunt de waterhardheid meten met eenvoudige teststrips die u dropt in een glas water (nauwkeurigheid circa 1-3 dH, kosten 5-15 euro voor een setje). Een nauwkeurigere methode is een titratie-kit (10-25 euro) waarbij u druppels reagens toevoegt totdat het water van kleur verandert. De meest nauwkeurige optie is opzoeken op de website van uw drinkwaterbedrijf: alle Nederlandse waterbedrijven publiceren de hardheidswaarden per postcode.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de beste aanpak voor hard water bij een espressomachine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een espressomachine is gevoelig voor kalk bij waterhardheid boven 8 dH. De beste aanpak is gefilterd water met een TDS van 80-150 mg/L en een hardheid van 3-6 dH. Dit bereikt u met een osmosefilter gevolgd door een remineralisatiefilter, of met een speciaal koffiemachinefilter (Brita Purity of vergelijkbaar). Regelmatig ontkalken is bij hard water (meer dan 15 dH) nodig elke 2-3 maanden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is nanofiltratie en verschilt het van osmose bij hardheidsverwijdering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nanofiltratie (NF) is een technologie tussen ultrafiltratie en omgekeerde osmose in. NF-membranen hebben iets grotere porieen dan RO-membranen en verwijderen 50-85% van de hardheid (calcium en magnesium) in plaats van 95-99% bij RO. Het voordeel is dat NF minder waterdruk nodig heeft en meer mineralen laat passeren. NF-systemen zijn voor thuisgebruik minder gangbaar dan RO en doorgaans duurder in aanschaf.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor hard water: ontharder, osmose of magneetfilter?',
  description:
    'Hard water boven 15 dH veroorzaakt kalkafzetting. Vergelijking van waterontharder, osmosefilter en magnetische waterbehandeling voor hard water in Nederland.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/hardheid',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterHardheidPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter voor hard water', item: 'https://waterfilterplatform.nl/waterfilter/hardheid' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Waterfilter voor hard water</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor hard water: ontharder, osmose of magneetfilter?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Hard water bevat veel calcium en magnesium en veroorzaakt witte kalkafzetting op kranen,
            in waterkokers en espressomachines, en verkorting van de levensduur van wasmachines en
            boilers. In Midden- en Oost-Nederland overschrijdt de waterhardheid regelmatig 15 dH.
            Welke oplossing past het best bij uw situatie?
          </p>
        </section>

        <QuickAnswer answer="Hard water boven 15 dH veroorzaakt kalkproblemen in apparaten en leidingen. Een waterontharder (ionenwisseling) beschermt het hele huis. Een osmosefilter pakt het drinkwater aan. Magneetfilters hebben onvoldoende wetenschappelijk bewijs. De beste keuze hangt af van uw hardheidsgraad en budget." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid in Nederland per regio
        </h2>
        <p className="text-gray-700 mb-4">
          De waterhardheid varieert in Nederland sterk per regio, afhankelijk van het grondwatertype
          en de bronnen die drinkwaterbedrijven gebruiken:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Regio</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Hardheid (dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Classificatie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Amsterdam, Rotterdam, Den Haag</td>
                <td className="border border-gray-300 px-3 py-2">7&ndash;10 dH</td>
                <td className="border border-gray-300 px-3 py-2">Zacht</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Utrecht, Arnhem</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;18 dH</td>
                <td className="border border-gray-300 px-3 py-2">Matig hard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nijmegen, Tilburg, Eindhoven</td>
                <td className="border border-gray-300 px-3 py-2">15&ndash;25 dH</td>
                <td className="border border-gray-300 px-3 py-2">Hard</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Limburg (Maastricht, Venlo)</td>
                <td className="border border-gray-300 px-3 py-2">&gt;20 dH</td>
                <td className="border border-gray-300 px-3 py-2">Zeer hard</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Controleer de precieze waterhardheid voor uw postcode op de website van uw drinkwaterbedrijf
          (Evides, Vitens, Waternet, etc.) of gebruik de landelijke hardheidskaart.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke problemen veroorzaakt hard water?
        </h2>
        <p className="text-gray-700 mb-4">
          Kalk (calciumcarbonaat) slaat neer wanneer hard water wordt verwarmd of verdampt.
          De gevolgen zijn merkbaar in het hele huishouden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Waterkoker:</strong> witte aanslag en flokkend kalk zichtbaar bij meer dan 10 dH;
            kortere levensduur door isolerende kalklaag op het verwarmingselement
          </li>
          <li>
            <strong>Espressomachine:</strong> al bij meer dan 8 dH risico op verstopte verwarming;
            regelmatig ontkalken nodig om lekkage of storingen te voorkomen
          </li>
          <li>
            <strong>Wasmachine en vaatwasser:</strong> kalk in de verwarmingsspiraal verlaagt
            de energie-efficientie en verkort de levensduur; meer wasmiddel nodig voor goed
            schuim in hard water
          </li>
          <li>
            <strong>Douche en kranen:</strong> witte aanslag op douchekop, kranen en tegels die
            moeilijk te verwijderen is; douchekop kan dichtkalkken bij meer dan 18 dH
          </li>
          <li>
            <strong>CV-ketel en boiler:</strong> kalk vormt een isolerende laag op de warmtewisselaar;
            30% kalklaag verdubbelt het energieverbruik en verkort de levensduur significant
          </li>
          <li>
            <strong>Leidingwerk:</strong> bij meer dan 20 dH geleidelijke capaciteitsvermindering
            door kalkafzetting in leidingen over een periode van jaren
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Drie benaderingen voor hard water vergeleken
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          1. Waterontharder (ionenwisseling)
        </h3>
        <p className="text-gray-700 mb-4">
          Een waterontharder werkt via ionenwisseling: calcium- en magnesiumionen worden uitgewisseld
          tegen natriumionen in een harsbed. Na verloop van tijd wordt het hars geregenereerd met
          keukenzout (NaCl of KCl). De waterontharder verwijdert <strong>100% van de hardheid</strong>
          voor het hele huishouden.
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-4">
          <p className="text-sm text-[#003F5C]">
            <strong>Voordelen:</strong> volledige bescherming van alle apparaten en leidingen,
            minder wasmiddel nodig, zachte huid en haar, langere levensduur CV-ketel en wasmachine.
          </p>
          <p className="text-sm text-[#003F5C] mt-2">
            <strong>Nadelen:</strong> natriumgehalte in water stijgt (niet ideaal voor hypertensie),
            aanschafkosten 500-2.000 euro, jaarlijks zoutkosten, professionele installatie aanbevolen.
          </p>
        </div>
        <p className="text-gray-700 mb-6">
          Bekijk onze vergelijking van{' '}
          <Link href="/waterfilter/vergelijken" className="text-[#005F8A] underline">
            waterfilters en waterontharders
          </Link>{' '}
          voor een volledig overzicht van modellen en prijzen.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          2. Omgekeerde osmose (RO)
        </h3>
        <p className="text-gray-700 mb-4">
          Een osmosefilter verwijdert 95-99% van calcium, magnesium en vrijwel alle andere opgeloste
          stoffen. Het is de meest effectieve methode voor <strong>zuiver drinkwater</strong>, maar
          werkt alleen voor het water uit het osmosekraantje &mdash; niet voor de rest van het huis.
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-4">
          <p className="text-sm text-[#003F5C]">
            <strong>Voordelen:</strong> produceert vrijwel kalkvrij, ultra-puur drinkwater.
            Verwijdert naast kalk ook zware metalen, nitraat, fluoride en andere verontreinigingen.
            Kosten 300-800 euro aanschaf.
          </p>
          <p className="text-sm text-[#003F5C] mt-2">
            <strong>Nadelen:</strong> beschermt alleen het drinkwater, niet apparaten of leidingen.
            Produceert afvalwater (verhouding 1:3 tot 1:5 zuiver:afval). Filteronderhoud nodig.
          </p>
        </div>
        <p className="text-gray-700 mb-6">
          De perfecte combinatie bij zeer hard water is een waterontharder voor het hele huis plus
          een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
          voor het drinkwater. De ontharder beschermt uw apparaten; het osmosefilter levert optimaal
          drinkwater en verwijdert het extra natrium van de ontharder.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          3. Magnetische waterbehandeling (magneetfilter)
        </h3>
        <p className="text-gray-700 mb-4">
          Magneetfilters worden vermarkt als een chemievrije en onderhoudsvrije oplossing voor
          kalkproblemen. Ze worden rondom de waterleiding geplaatst en zouden via een magnetisch
          veld de kristalstructuur van kalk beinvloeden.
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-orange-800">
            <strong>Wetenschappelijk oordeel:</strong> Onafhankelijke studies (o.a. van TU Delft en
            internationale peer-reviewed literatuur) tonen geen consistente en betrouwbare werking van
            magneetfilters aan. Er vindt geen ionenwisseling plaats: calcium en magnesium blijven
            aanwezig in het water. Hooguit kan de kristalstructuur tijdelijk worden gewijzigd waardoor
            kalk minder hard neerslaat, maar dit effect is inconsistent en afhankelijk van lokale
            omstandigheden. <strong>Magneetfilters worden niet aanbevolen als primaire maatregel tegen hard water.</strong>
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          4. Nanofiltratie (NF)
        </h3>
        <p className="text-gray-700 mb-6">
          Nanofiltratie is een membraantechnologie die tussen ultrafiltratie en RO in zit.
          NF-membranen verwijderen 50-85% van de waterhardheid en zijn minder gangbaar voor
          thuisgebruik. Ze vereisen minder druk dan RO maar zijn doorgaans duurder in aanschaf.
          Voor specifieke toepassingen (bijv. deels demineraliseren) kan NF interessant zijn.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
          5. Citroenzuur- of polyfosfonaatdosering (professioneel)
        </h3>
        <p className="text-gray-700 mb-6">
          In professionele en industriele toepassingen wordt soms een doseerpompje gebruikt dat
          kleine hoeveelheden citroenzuur of polyfosfonaat aan het water toevoegt. Dit voorkomt
          neerslag van kalk op leidingwanden (sequestration) maar verwijdert kalk niet uit het water.
          Voor thuisgebruik is dit niet gangbaar en niet aanbevolen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Keuzewijzer: welke oplossing past bij u?
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Situatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanbeveling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Hard water + wil het hele huis beschermen</td>
                <td className="border border-gray-300 px-3 py-2">Waterontharder (ionenwisseling)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Hard water + alleen zuiver drinkwater</td>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter onder aanrecht</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Zeer hard water + optimale bescherming</td>
                <td className="border border-gray-300 px-3 py-2">Ontharder + osmosefilter combinatie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Beperkt budget + wil kalkproblemen verminderen</td>
                <td className="border border-gray-300 px-3 py-2">Waterontharder voor apparaten + filterkan</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Hypertensie, wil geen extra natrium</td>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter of KCl-ontharder</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid meten
        </h2>
        <p className="text-gray-700 mb-4">
          Weet u niet hoe hard uw water is? Er zijn drie methoden om dit snel te achterhalen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Gratis opzoeken:</strong> vrijwel alle Nederlandse drinkwaterbedrijven (Vitens,
            Evides, Waternet, Dunea, etc.) publiceren de waterhardheid per postcode op hun website.
            Dit is de snelste en meest nauwkeurige methode voor leidingwater.
          </li>
          <li>
            <strong>Teststrips (5-15 euro):</strong> dompel een strip in een glas water en vergelijk
            de kleurverandering met de kleurschaal. Nauwkeurigheid circa 1-3 dH; voldoende voor een
            eerste indruk.
          </li>
          <li>
            <strong>Titratie-kit (10-25 euro):</strong> voeg druppels reagens toe aan een watermonster
            totdat de kleur omslaat. Nauwkeuriger dan strips; geschikt voor bronwater of wanneer u
            de exacte waarde wilt kennen.
          </li>
        </ol>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterhardheid/behandelingsadvies" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid behandelingsadvies</h3>
            <p className="text-sm text-gray-600">Welke aanpak past het beste bij uw waterhardheidsniveau?</p>
          </Link>
          <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
            <p className="text-sm text-gray-600">Uitleg van ionenwisseling en regeneratie bij waterontharders.</p>
          </Link>
          <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling als filtertechniek</h3>
            <p className="text-sm text-gray-600">De techniek achter waterontharding: calcium en magnesium verwijderen.</p>
          </Link>
          <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
            <p className="text-sm text-gray-600">Vind de beste waterbehandeling op basis van uw hardheidsgraad en situatie.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterfilters voor hard water
          </h2>
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>,{' '}
          <Link href="/waterfilter/vergelijken" className="text-[#005F8A] underline">waterfilters vergelijken</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/leidingwater/hard-water" className="text-[#005F8A] underline">hard water in Nederland</Link>.
        </p>
      </main>
    </>
  );
}
