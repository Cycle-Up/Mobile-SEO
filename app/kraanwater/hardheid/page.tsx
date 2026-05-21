import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hardheid kraanwater per regio: kaart en tabel voor alle provincies',
  description: 'Hardheid kraanwater verschilt sterk per regio: van 3 dH in Zeeland tot 28 dH in Limburg. Bekijk de waterhardheidskaart per provincie en wat het betekent voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/hardheid' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe hard is mijn kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De hardheid van uw kraanwater hangt af van uw gemeente en het waterbedrijf dat uw wijk bedient. In Zeeland en Groningen is het water zeer zacht (3-10 dH), in Noord- en Zuid-Holland zacht tot matig (7-12 dH), in Utrecht en Flevoland matig (10-15 dH), en in Brabant en Limburg hard (16-28 dH). De exacte waarde kunt u opvragen bij uw drinkwaterbedrijf of via de gemeentezoeker op waterfilterplatform.nl.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen harde en zachte hardheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zacht water (onder 7 dH) bevat weinig calcium en magnesium, geeft nauwelijks kalkafzetting en is prettig voor huid en haar. Hard water (boven 21 dH) bevat veel calcium- en magnesiumzouten die als kalksteen neerslaan bij verhitting. Dit resulteert in witte aanslag op apparaten, verhoogd energieverbruik, en meer zeepverbruik. Zacht water is echter agressiever voor metalen leidingen en kan meer lood oplossen uit loodleidingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn dH en hoe reken ik ze om?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De graad Duits (dH of dGH) is de meest gebruikte eenheid voor waterhardheid in Nederland. 1 dH staat voor 10 mg calciumoxide per liter water. Omrekenen: 1 mmol/L = 5,6 dH; 1 dH = 0,179 mmol/L. Andere eenheden zijn Franse graden (fH of dF), waarbij 1 dH = 1,786 fH. Veel drinkwaterbedrijven vermelden de hardheid ook in mmol/L in hun kwaliteitsrapporten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn waterkoker kalkt snel aan - is mijn water dan hard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, snelle kalkvorming in een waterkoker is een duidelijk teken van hard water. Calcium- en magnesiumcarbonaten lossen neer als het water wordt verhit boven 60 graden C. Bij hardheid boven 14 dH ziet u zichtbare kalkafzetting na enkele weken. Boven 21 dH kan een waterkoker al na een paar dagen wit worden van binnen. Regelmatig ontkalken met citroenzuuroplossing (1 eetlepel per 500 mL water) is dan noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hard kraanwater schadelijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, hard water is niet schadelijk voor de gezondheid. Calcium en magnesium zijn essentiële mineralen die ook via voeding worden ingenomen. De WHO stelt dat er geen maximum norm voor hardheid vanuit gezondheidsoogpunt nodig is. Hard water draagt licht bij aan de dagelijkse inname van calcium en magnesium. Wel kan heel zacht water (onder 5 dH) iets agressiever zijn voor metalen leidingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke provincie heeft het hardste water in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Limburg heeft het hardste kraanwater in Nederland, met waarden van 20 tot 28 dH afhankelijk van de gemeente. Noord-Brabant staat op de tweede plaats met 16 tot 25 dH. Het zachte water bevindt zich in Zeeland (3-6 dH) en Groningen (5-10 dH). Het verschil heeft te maken met de ondergrond: kalksteen en mergel in Limburg lossen calcium en magnesium op in het grondwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt een waterontkalker of waterontharder tegen harde hardheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder (ionenwisselaar met zout) verwijdert calcium en magnesium volledig door ze te vervangen door natriumionen. Het resultaat is zeer zacht water (0-1 dH). Een waterontkalker (zoals een magneetfilter of TAC-systeem) verandert de kristalstructuur van kalk zodat het minder neerslaat, maar verwijdert de ionen niet. Voor apparaatbescherming zijn beide effectief; voor drinkwaterkwaliteit is de keuze persoonlijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet een osmosefilter met de waterhardheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een omgekeerde osmosefilter verwijdert 95-99% van alle opgeloste ionen, inclusief calcium en magnesium. Het resultaat is vrijwel volledig zacht water (0-2 dH). Dit is ideaal voor drinkwater en koffie- en theebereiding. Het nadeel is dat het water ook de gezonde mineralen verliest; sommige systemen voegen daarna via een remineralisatiefilter calcium en magnesium gecontroleerd terug. RO-water is echter niet geschikt als enige waterontharder voor de gehele huisinstallatie vanwege de lage doorstroom.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Hardheid kraanwater per regio: kaart en tabel voor alle provincies',
  description: 'Hardheid kraanwater verschilt sterk per regio: van 3 dH in Zeeland tot 28 dH in Limburg. Bekijk de waterhardheidskaart per provincie en wat het betekent voor.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kraanwater/hardheid',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KraanwaterHardheidPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kraanwater', item: 'https://waterfilterplatform.nl/kraanwater' },
              { '@type': 'ListItem', position: 3, name: 'Hardheid kraanwater per regio', item: 'https://waterfilterplatform.nl/kraanwater/hardheid' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/kraanwater" className="hover:underline">Kraanwater</a> &rsaquo;{' '}
          <span>Hardheid kraanwater per regio</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Hardheid kraanwater per regio: kaart en tabel voor alle provincies
          </h1>
          <p className="text-gray-600 text-lg">
            Van 3 &deg;dH in Zeeland tot 28 &deg;dH in Limburg: de hardheid van kraanwater
            verschilt enorm per provincie. Ontdek wat dat betekent voor uw apparaten,
            leidingen en uw dagelijks leven.
          </p>
        </div>

        <QuickAnswer answer="Waterhardheid in Nederland loopt uiteen van zeer zacht in Zeeland (3-6 dH) tot hard-zeer hard in Limburg (20-28 dH). Harde provincies zijn Brabant en Limburg; zachte provincies zijn Zeeland, Groningen en Zuid-Holland. Boven 14 dH ziet u kalkafzetting op apparaten; boven 21 dH is een waterontharder of osmosefilter aan te raden." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is waterhardheid?
        </h2>
        <p className="text-gray-700 mb-4">
          Waterhardheid wordt bepaald door de concentratie van <strong>calcium (Ca&sup2;&plus;)</strong> en
          <strong> magnesium (Mg&sup2;&plus;)</strong> ionen in het water. Deze ionen lossen op
          uit de bodem terwijl regenwater door kalkrijke aardlagen sijpelt. De hardheid wordt
          uitgedrukt in <strong>graden Duits (&deg;dH of dGH)</strong> of in <strong>mmol/L</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          Omrekening: <strong>1 mmol/L = 5,6 &deg;dH</strong>. Drinkwaterbedrijven gebruiken
          soms ook mmol/L in hun kwaliteitsrapportages. De WHO heeft geen gezondheidsgrens
          voor hardheid, maar voor apparaten en comfort zijn de verschillen significant.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Classificatietabel waterhardheid
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Klasse</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">&deg;dH</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">mmol/L</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Beoordeling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeer zacht</td>
                <td className="border border-gray-300 px-3 py-2">0-7</td>
                <td className="border border-gray-300 px-3 py-2">0-1,3</td>
                <td className="border border-gray-300 px-3 py-2">Ideaal voor koffie, goed voor leidingen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Zacht</td>
                <td className="border border-gray-300 px-3 py-2">7-14</td>
                <td className="border border-gray-300 px-3 py-2">1,3-2,5</td>
                <td className="border border-gray-300 px-3 py-2">Acceptabel, weinig kalkafzetting</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Matig hard</td>
                <td className="border border-gray-300 px-3 py-2">14-21</td>
                <td className="border border-gray-300 px-3 py-2">2,5-3,8</td>
                <td className="border border-gray-300 px-3 py-2">Kalkafzetting zichtbaar op apparaten</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Hard</td>
                <td className="border border-gray-300 px-3 py-2">21-28</td>
                <td className="border border-gray-300 px-3 py-2">3,8-5,0</td>
                <td className="border border-gray-300 px-3 py-2">Forse kalkaanslag, problemen bij apparaten</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeer hard</td>
                <td className="border border-gray-300 px-3 py-2">&gt;28</td>
                <td className="border border-gray-300 px-3 py-2">&gt;5,0</td>
                <td className="border border-gray-300 px-3 py-2">Snel kalkaanslag, regelmatig onderhoud nodig</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid per provincie in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Onderstaande waarden zijn representatieve gemiddelden per provincie. De exacte
          hardheid per gemeente kunt u opvragen bij uw drinkwaterbedrijf of bekijken op
          onze interactieve{' '}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">
            waterhardheidskaart per gemeente
          </Link>.
          Binnen een provincie kunnen de waarden aanzienlijk verschillen afhankelijk van
          de waterbron (grond- vs. oppervlaktewater).
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Provincie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Gemiddelde hardheid</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Klasse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeeland</td>
                <td className="border border-gray-300 px-3 py-2">3-6 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">Zeer zacht</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Groningen</td>
                <td className="border border-gray-300 px-3 py-2">5-10 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Zacht</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Friesland</td>
                <td className="border border-gray-300 px-3 py-2">5-12 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Zacht</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Noord-Holland (Amsterdam)</td>
                <td className="border border-gray-300 px-3 py-2">8-12 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Zacht-matig</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zuid-Holland (Rotterdam)</td>
                <td className="border border-gray-300 px-3 py-2">7-11 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Zacht</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Drenthe</td>
                <td className="border border-gray-300 px-3 py-2">8-15 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Zacht-matig</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Flevoland</td>
                <td className="border border-gray-300 px-3 py-2">10-14 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">Matig</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Utrecht</td>
                <td className="border border-gray-300 px-3 py-2">10-15 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">Matig</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Gelderland</td>
                <td className="border border-gray-300 px-3 py-2">12-20 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">Matig-hard</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Overijssel</td>
                <td className="border border-gray-300 px-3 py-2">14-22 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">Matig-hard</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Brabant</td>
                <td className="border border-gray-300 px-3 py-2">16-25 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-semibold">Hard</span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Limburg</td>
                <td className="border border-gray-300 px-3 py-2">20-28 &deg;dH</td>
                <td className="border border-gray-300 px-3 py-2">
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">Hard-zeer hard</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gevolgen van hard water voor uw huis en apparaten
        </h2>
        <p className="text-gray-700 mb-4">
          Hard water heeft aanzienlijke praktische gevolgen voor huishoudapparaten,
          leidingen en het dagelijks gebruik. De meest ingrijpende effecten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Verhoogd energieverbruik:</strong> Elke millimeter kalkaanslag op een
            verwarmingselement verhoogt het energieverbruik met circa 15%. In een boiler
            of vaatwasser kan dit aanzienlijk oplopen over de jaren.
          </li>
          <li>
            <strong>Kortere levensduur van apparaten:</strong> Vaatwassers, wasmachines,
            waterkokers en koffiezetapparaten slijten sneller bij hard water. Kalkafzetting
            op verwarmingselementen leidt tot oververhitting en uitval.
          </li>
          <li>
            <strong>Vlekken op sanitair en glazen:</strong> Wit, korrelig kalkbeslag op
            kranen, wastafels, douches en glazen. Verwijdering vereist regelmatig ontkalken.
          </li>
          <li>
            <strong>Meer zeep en shampoo nodig:</strong> Calcium- en magnesiumionen reageren
            met zeep en vormen kalkzeep. Bij hard water heb je 20-30% meer zeep, wasmiddel
            en shampoo nodig voor hetzelfde resultaat.
          </li>
          <li>
            <strong>Kalkafzetting in leidingen:</strong> Op termijn vernauwt kalk de
            binnendiameter van waterleidingen, wat de doorstroom vermindert en de waterdruk
            verlaagt.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer actie ondernemen?
        </h2>
        <div className="space-y-3 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] text-sm">Onder 14 &deg;dH: geen actie nodig</p>
            <p className="text-gray-700 text-sm mt-1">
              Bij zacht tot matig water is actieve bescherming doorgaans niet noodzakelijk.
              Regelmatig ontkalken van de waterkoker met citroenzuuroplossing volstaat.
            </p>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] text-sm">14-21 &deg;dH: preventief ontkalken</p>
            <p className="text-gray-700 text-sm mt-1">
              Gebruik kalkbeschermingstabletten in de vaatwasser, ontkalkers in de wasmachine
              en regelmatige citroenzuurbehandeling voor de waterkoker en koffiezetapparaat.
              Overweeg een{' '}
              <Link href="/waterontkalker" className="text-[#005F8A] underline">
                waterontkalker
              </Link>.
            </p>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] text-sm">Boven 21 &deg;dH: ontharder of osmosefilter aanbevolen</p>
            <p className="text-gray-700 text-sm mt-1">
              Bij hard water is een structurele oplossing aan te raden. Keuze uit:{' '}
              <Link href="/waterontharder" className="text-[#005F8A] underline">
                waterontharder
              </Link>{' '}
              (voor de gehele installatie) of een{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
                osmosefilter
              </Link>{' '}
              (voor drinkwater en kookwater).
            </p>
          </div>
        </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterhardheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid per gemeente</h3>
            <p className="text-sm text-gray-600">Zoek de exacte waterhardheid op voor uw postcode of gemeente.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
            <p className="text-sm text-gray-600">Wat calcium en magnesium in water betekenen voor gezondheid en huishouden.</p>
          </Link>
          <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
            <p className="text-sm text-gray-600">Uitleg van ionenwisseling en andere methoden voor waterontharding.</p>
          </Link>
          <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
            <p className="text-sm text-gray-600">Welke oplossing past het beste bij uw hardheidsklasse en situatie?</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterhardheid
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
          <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</Link>,{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder vergelijken</Link>,{' '}
          <Link href="/waterontkalker" className="text-[#005F8A] underline">waterontkalker info</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>
      </main>
    </>
  );
}
