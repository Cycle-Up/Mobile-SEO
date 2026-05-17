import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder huren: voordelen, kosten en wanneer huren vs kopen',
  description:
    'Waterontharder huren kost 15-35 euro per maand inclusief zout en onderhoud. Vergelijking van huren versus kopen: wanneer is huren voordeliger en wat zijn de.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/huren' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een waterontharder huren per maand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waterontharder huren kost doorgaans 15 tot 35 euro per maand, afhankelijk van het merk en de inbegrepen services. Bij de meeste aanbieders zijn installatie, periodiek onderhoud, storingsdienst en vervanging van onderdelen inclusief. Sommige aanbieders bieden zoutlevering aan als optionele dienst voor een extra maandelijks bedrag. Op jaarbasis betaalt u 180 tot 420 euro exclusief zoutkosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de minimale contractduur voor het huren van een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste huurcontracten hebben een minimale looptijd van 1 tot 3 jaar. Harvey Water en BWT hanteren doorgaans een minimumperiode van 2 jaar. EcoWater biedt ook jaarcontracten aan. Na de minimumperiode kunt u het contract maandelijks of per kwartaal opzeggen. Lees de kleine letters: sommige aanbieders verlengen automatisch met een jaar als u niet tijdig opzegt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn zoutkosten inbegrepen bij huur van een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste standaard huurcontracten zijn zoutkosten niet inbegrepen in de maandelijkse huurprijs. U koopt zout zelf in (circa 60 tot 120 euro per jaar voor een gemiddeld huishouden) of sluit een aparte zoutleveringsservice af. Sommige aanbieders bieden combinatiepakketten aan waarbij zout is inbegrepen voor een hogere maandprijs. Vergelijk altijd de totaalkosten inclusief zout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik als huurder een waterontharder installeren in een huurwoning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U heeft toestemming nodig van de verhuurder voor het aansluiten van een waterontharder, omdat dit een permanente wijziging van de waterinstallatie inhoudt. De meeste verhuurders geven toestemming als de installatie professioneel wordt uitgevoerd en bij vertrek wordt hersteld in de oorspronkelijke staat. Sommige huurcontracten bij waterontharderaars regelen de installatie inclusief herstel bij verhuizing. Vraag dit expliciet na voor u het contract tekent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat gebeurt er met mijn huurcontract als ik verhuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste huurcontracten voorzien in verplaatsing bij verhuizing binnen Nederland. Demontage, transport en herinstallatie worden doorgaans aangeboden voor 100 tot 300 euro extra. Sommige aanbieders voorzien dit gratis bij een langlopend contract. Bij verhuizing naar het buitenland wordt het contract doorgaans beeindigd; u betaalt dan de openstaande contractperiode of een uitkoopsom. Controleer de verhuisclausule expliciet voor ondertekening.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke Nederlandse aanbieders verhuren waterontharders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bekende aanbieders van waterontharder huur in Nederland zijn: Harvey Water Softeners (Engelse technologie, 24 uur service), EcoWater Systems (Amerikaans merk, uitgebreid servicecontract), BWT (Oostenrijks merk, nadruk op hygienefiltratie), Waterontharder.nl (onafhankelijke aanbieder, meerdere merken). Vergelijk niet alleen de maandprijs maar ook de opzegtermijn, servicekwaliteit en de hardheidsgrens waarvoor het systeem is gedimensioneerd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is huren beter dan kopen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huren is financieel gunstiger in de volgende situaties: u woont korter dan 3 tot 4 jaar op het huidige adres; u woont in een huurwoning en wilt geen grote investering in andermans eigendom; u wilt geen zorgen over onderhoud en storingen; u heeft onvoldoende eigen vermogen voor de aanschafkosten van 500 tot 1500 euro. Voor vaste bewoners van een koopwoning die langer dan 5 jaar blijven is kopen vrijwel altijd goedkoper.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een waterontharder huren en combineren met een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dit is een populaire combinatie. De gehuurde waterontharder behandelt alle leidingwater in huis en verlengt de levensduur van apparaten. Een gekocht osmosefilter onder het aanrecht levert dan zacht, gefilterd drinkwater dat ook vrij is van PFAS, lood, nitraat en andere verontreinigingen. De waterontharder maakt het osmosefilter efficienter doordat het RO-membraan minder kalkaanslag accumuleert en daardoor langer meegaat.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder huren: voordelen, kosten en wanneer huren vs kopen',
  description:
    'Waterontharder huren kost 15-35 euro per maand inclusief zout en onderhoud. Vergelijking van huren versus kopen: wanneer is huren voordeliger en wat zijn de.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/huren',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderHurenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Waterontharder huren', item: 'https://waterfilterplatform.nl/waterontharder/huren' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Waterontharder huren</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder huren: voordelen, kosten en wanneer huren vs kopen
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een waterontharder huren kost 15 tot 35 euro per maand inclusief installatie en
            onderhoud. Geen hoge aanschafkosten, geen zorgen bij storingen. Maar op de lange
            termijn betaalt u meer dan bij kopen. Wij vergelijken beide opties eerlijk zodat
            u de beste keuze kunt maken voor uw situatie.
          </p>
        </section>

        <QuickAnswer answer="Waterontharder huren kost 15-35 euro per maand inclusief onderhoud. Kopen kost 500-1500 euro eenmalig. Break-even ligt bij 4-6 jaar. Huren is slim bij huurwoningen, tijdelijk verblijf of geen spaargeld voor aanschaf. Bij koopwoning en verblijf langer dan 5 jaar is kopen vrijwel altijd voordeliger." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Huren vs kopen: kostenvergelijking op 5 en 10 jaar
        </h2>
        <p className="text-gray-700 mb-4">
          De financiele keuze tussen huren en kopen hangt sterk af van hoe lang u op hetzelfde
          adres woont. Hier is de eerlijke vergelijking op basis van actuele marktprijzen in Nederland:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kostenpost</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Huren</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kopen (mid-range)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Aanschaf / startkosten</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0&ndash;100 (aansluiting)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;1.500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Maandhuur</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;35</td>
                <td className="border border-gray-300 px-3 py-2">&mdash;</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Jaarlijks onderhoud</td>
                <td className="border border-gray-300 px-3 py-2">Inbegrepen</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80&ndash;150</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Zoutkosten per jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;60&ndash;120</td>
                <td className="border border-gray-300 px-3 py-2">&euro;60&ndash;120</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Storingen / reparaties</td>
                <td className="border border-gray-300 px-3 py-2">Inbegrepen</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0&ndash;300 (eigen risico)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">
                  <strong>Totaal 5 jaar</strong>
                </td>
                <td className="border border-gray-300 px-3 py-2 font-medium">&euro;1.200&ndash;2.600</td>
                <td className="border border-gray-300 px-3 py-2 font-medium">&euro;1.200&ndash;2.650</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">
                  <strong>Totaal 10 jaar</strong>
                </td>
                <td className="border border-gray-300 px-3 py-2 font-medium text-red-600">&euro;2.300&ndash;5.200</td>
                <td className="border border-gray-300 px-3 py-2 font-medium text-green-600">&euro;1.900&ndash;3.300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Inclusief installatie, onderhoud, reparaties en zoutkosten. Break-even punt ligt bij
          circa 4 tot 6 jaar afhankelijk van huurprijs en aanschafkosten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voordelen van huren: wat krijgt u erbij?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Geen hoge aanschafkosten:</strong> de drempel is laag. U betaalt doorgaans
            alleen een eenmalige aansluitkosten van 0 tot 100 euro in plaats van 500 tot 1.500
            euro voor een koopaanschaf.
          </li>
          <li>
            <strong>Onderhoud en service inbegrepen:</strong> periodieke controles, vervanging
            van onderdelen (harspatroon, kleppen, zoutmeter) en storingsdienst zijn bij de
            meeste huurcontracten standaard inbegrepen. U hoeft niets te weten van de techniek.
          </li>
          <li>
            <strong>Zoutlevering optioneel:</strong> sommige aanbieders bieden automatische
            zoutlevering aan als aanvullende service. Handig als u vergeetachtig bent of
            moeilijk zware zakken kunt tillen.
          </li>
          <li>
            <strong>Geen risico bij storingen:</strong> als het apparaat defect gaat, is dat
            het probleem van de aanbieder, niet van u. Reparatiekosten worden gedekt door het
            huurcontract.
          </li>
          <li>
            <strong>Flexibel bij verhuizing:</strong> de meeste aanbieders helpen bij
            verplaatsing naar een nieuw adres. U hoeft het apparaat niet te verkopen of
            achter te laten.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nadelen van huren: de valkuilen
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Duurder op de lange termijn:</strong> na 5 tot 7 jaar heeft u met huren
            aanzienlijk meer betaald dan bij kopen. Op een periode van 10 jaar kan het verschil
            oplopen tot 1.000 tot 2.000 euro.
          </li>
          <li>
            <strong>Contractbinding:</strong> de meeste contracten hebben een minimale looptijd
            van 1 tot 3 jaar. Bij voortijdige opzegging kunt u een boete of resterende
            termijnen verschuldigd zijn.
          </li>
          <li>
            <strong>Geen eigendom:</strong> het apparaat blijft eigendom van de aanbieder.
            U bouwt geen bezit op en kunt het apparaat niet doorverkopen bij verhuizing.
          </li>
          <li>
            <strong>Afhankelijkheid van aanbieder:</strong> voor upgrades naar betere technologie
            bent u afhankelijk van de bereidheid van de aanbieder. Bij een gekocht apparaat
            kunt u zelf upgraden.
          </li>
          <li>
            <strong>Automatische verlenging:</strong> sommige contracten verlengen automatisch
            met een jaar als u niet tijdig opzegt. Noteer de opzegtermijn in uw agenda bij
            ondertekening.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Populaire aanbieders in Nederland: vergelijking
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanbieder</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Maandprijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Min. looptijd</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bijzonderheden</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Harvey Water</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25&ndash;35</td>
                <td className="border border-gray-300 px-3 py-2">2 jaar</td>
                <td className="border border-gray-300 px-3 py-2">24 uur service, Britse technologie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">EcoWater</td>
                <td className="border border-gray-300 px-3 py-2">&euro;20&ndash;30</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;2 jaar</td>
                <td className="border border-gray-300 px-3 py-2">Slim verbruik via app, Amerikaans merk</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">BWT</td>
                <td className="border border-gray-300 px-3 py-2">&euro;18&ndash;28</td>
                <td className="border border-gray-300 px-3 py-2">2 jaar</td>
                <td className="border border-gray-300 px-3 py-2">Magnesiumtechnologie, Oostenrijks merk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterontharder.nl</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;25</td>
                <td className="border border-gray-300 px-3 py-2">1 jaar</td>
                <td className="border border-gray-300 px-3 py-2">Onafhankelijk, meerdere merken</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Prijzen zijn indicatief en kunnen per regio en woningtype afwijken. Vraag altijd een
          offerte op maat aan inclusief installatiekosten. Meer informatie over de verschillende
          modellen vindt u op{' '}
          <Link href="/waterontharder/vergelijken" className="text-[#005F8A] underline">waterontharder vergelijken</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is huren slim: beslisboom
        </h2>
        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-3">Huren is de betere keuze als:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
            <li>U woont in een huurwoning en de verhuurder staat geen permanente installatie toe</li>
            <li>U verwacht binnen 3 jaar te verhuizen (tijdelijk adres, expat, student)</li>
            <li>U geen spaargeld beschikbaar heeft voor de aanschafkosten van 500 tot 1.500 euro</li>
            <li>U geen technische kennis heeft en geen zorgen wil over onderhoud</li>
            <li>U eerst wil testen of een waterontharder bij uw levensstijl past</li>
          </ul>
          <h3 className="font-semibold text-[#003F5C] mt-4 mb-3">Kopen is de betere keuze als:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
            <li>U woont in een eigen woning en verblijft er langer dan 5 jaar</li>
            <li>U technisch handig bent of een installateur kent</li>
            <li>U het budget heeft voor de aanschaf en wil eigenaar zijn van het apparaat</li>
            <li>U op de lange termijn de goedkoopste oplossing wil</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          Uitgebreide informatie over de aanschafoptie vindt u op{' '}
          <Link href="/waterontharder/kopen" className="text-[#005F8A] underline">waterontharder kopen: gids en kosten</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Combinatie: waterontharder huren en osmosefilter kopen
        </h2>
        <p className="text-gray-700 mb-4">
          Een populaire en praktische combinatie in Nederland is het huren van een waterontharder
          voor de gehele huishouding gecombineerd met het kopen van een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
          voor drinkwater. De voordelen van deze combinatie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            De waterontharder beschermt alle apparaten (wasmachine, vaatwasser, boiler,
            douchecabine) tegen kalkaanslag en verlengt hun levensduur.
          </li>
          <li>
            Het osmosefilter produceert drinkwater dat vrij is van PFAS, lood, nitraat,
            hormonen en microplastics &mdash; verontreinigingen die een waterontharder
            niet verwijdert.
          </li>
          <li>
            Zacht invoerwater verlengt de levensduur van het RO-membraan aanzienlijk, omdat
            kalkaanslag de grootste oorzaak is van membraandegradatie.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een osmosefilter voor drinkwater kost eenmalig 300 tot 700 euro en produceert water
          voor circa 1 tot 2 cent per liter. Meer informatie op{' '}
          <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">waterontharder versus osmosefilter</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe hard is uw water? De hardheidskaart voor Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Of een waterontharder zinvol is, hangt af van de waterhardheid in uw regio. Nederlandse
          leidingwatergebieden variëren sterk in hardheid:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Zeer hard water (boven 20 dH):</strong> Noord-Holland, Utrecht, Zuid-Holland
            (kustgebieden) &mdash; waterontharder sterk aanbevolen
          </li>
          <li>
            <strong>Hard water (15&ndash;20 dH):</strong> Gelderland, Overijssel &mdash;
            waterontharder nuttig voor apparaatbescherming
          </li>
          <li>
            <strong>Matig hard (10&ndash;15 dH):</strong> Brabant, Limburg &mdash; waterontharder
            optioneel, afhankelijk van persoonlijke voorkeur
          </li>
          <li>
            <strong>Zacht water (onder 10 dH):</strong> Drenthe, Friesland, Zeeland &mdash;
            waterontharder nauwelijks noodzakelijk
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Controleer uw exacte waterhardheid op de website van uw drinkwaterbedrijf of via{' '}
          <Link href="/waterontharder/vergelijken" className="text-[#005F8A] underline">onze vergelijkingspagina voor waterontharders</Link>.
          Meer weten over het{' '}
          <Link href="/waterontharder/installeren" className="text-[#005F8A] underline">installeren van een waterontharder</Link>?
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zakelijk waterontharder huren
        </h2>
        <p className="text-gray-700 mb-6">
          Voor bedrijven, horeca, kantoren en zorginstellingen gelden andere overwegingen dan voor
          particulieren. Zakelijke huurcontracten bieden doorgaans hogere capaciteiten, snellere
          servicereactietijden en zijn fiscaal aftrekbaar als bedrijfskosten. Meer informatie over
          zakelijke waterbehandeling leest u op{' '}
          <Link href="/waterontharder/zakelijk" className="text-[#005F8A] underline">waterontharder zakelijk</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterontharder huren
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
          <Link href="/waterontharder/kopen" className="text-[#005F8A] underline">waterontharder kopen</Link>,{' '}
          <Link href="/waterontharder/vergelijken" className="text-[#005F8A] underline">waterontharder vergelijken</Link>,{' '}
          <Link href="/waterontharder/installeren" className="text-[#005F8A] underline">waterontharder installeren</Link> en{' '}
          <Link href="/waterontharder/zakelijk" className="text-[#005F8A] underline">waterontharder zakelijk</Link>.
        </p>
      </main>
    </>
  );
}
