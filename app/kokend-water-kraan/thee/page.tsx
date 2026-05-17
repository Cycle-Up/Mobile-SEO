import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Optimaal water voor thee: temperatuur, TDS, hardheid en waterfilter',
  description:
    'Voor thee is water met TDS 50-150 mg/L, pH 6-7 en lage hardheid ideaal. Hard water maakt thee troebel en bitter. Osmosewater plus lichte remineralisatie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/thee' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk water is het beste voor thee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het beste water voor thee heeft een TDS van 75-150 mg/L, een hardheid onder 8 dH en een pH tussen 6 en 7. Osmosewater met remineralisatiefilter of zacht bronwater zoals Spa Reine (TDS 33 mg/L) is ideaal. Hard leidingwater geeft een vettig vlies en bittere smaak door reactie van kalk met theopolyfenolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom wordt thee troebel door hard water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hard water bevat veel calcium en magnesium. Deze mineralen reageren met de tanninen (theopolyfenolen) in thee en vormen een onoplosbaar calciumtannincomplex. Dit complex is zichtbaar als een vettig, kalkachtig vlies op het oppervlak van de thee. De smaak wordt daardoor bitter en astringent. Zacht water met hardheid onder 8 dH voorkomt dit volledig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de optimale TDS voor thee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De optimale TDS voor thee ligt tussen 75 en 150 mg/L, vergelijkbaar met de SCA-koffienorm. Bij TDS onder 50 mg/L smaakt thee vlak en wrang omdat te weinig mineralen de extractie van aromastoffen ondersteunen. Boven 250 mg/L maskeren kalk en mineralen de delicate aroma\'s. Osmosewater met TDS 5-30 is te leeg; voeg remineralisatie toe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik osmosewater gebruiken voor thee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puur osmosewater (TDS 5-30 mg/L) is te leeg voor optimale theeextractie. De thee smaakt vlak en wrang. Met een remineralisatiefilter of door mineralendruppels toe te voegen totdat TDS ca 75-100 mg/L bereikt is, geeft osmosewater uitstekende resultaten. De lage hardheid van osmosewater (na remineralisatie meestal 3-7 dH) is ideaal voor thee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Op welke temperatuur zet je groene thee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Groene thee wordt gezet op 70-80 graden Celsius. Te heet water (boven 85 graden) oxideert de catechinen en geeft een bittere, wrange smaak. Een kokend-water-kraan levert 100 graden; voor groene thee het water kort laten afkoelen of een model kiezen met instelbare temperatuur. Witte thee vraagt 65-75 graden; zwarte thee 90-95 graden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke pH heeft ideaal water voor thee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De ideale pH voor theezetten ligt tussen 6 en 7. Leidingwater heeft doorgaans pH 7,5-8,5, wat iets te basisch is. Bij een hogere pH verloopt de extractie anders en kunnen bepaalde aromastoffen minder goed oplossen. Osmosewater heeft na CO2-absorptie pH 5,5-6,5, wat uitstekend is. Groene en witte thee zijn gevoeliger voor pH dan zwarte thee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het voordeel van een kokend-water-kraan voor thee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een kokend-water-kraan levert direct kokend water (100 graden) zonder wachttijd. In combinatie met een osmosefilter krijg je water met lage hardheid en juiste TDS. Sommige 4-in-1 en 5-in-1 modellen hebben instelbare temperaturen, wat voor groene en witte thee ideaal is. Geen kalkvorming in het apparaat bij gebruik van osmosewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is remineralisatie nodig voor thee met osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, remineralisatie is aan te raden bij gebruik van osmosewater voor thee. Puur osmosewater heeft TDS 5-30 mg/L, wat te laag is voor goede extractie van aromastoffen. Een remineralisatiefilter of mineralendruppels brengen TDS naar 75-100 mg/L en hardheid naar 3-7 dH. Dit geeft de beste balans: voldoende mineralen voor extractie, maar niet zoveel dat kalk de smaak verstoort.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Optimaal water voor thee: temperatuur, TDS, hardheid en waterfilter',
  description:
    'Voor thee is water met TDS 50-150 mg/L, pH 6-7 en lage hardheid ideaal. Osmosewater plus remineralisatie geeft de beste theeextractie.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/thee',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KokendWaterTheePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Optimaal water voor thee', item: 'https://waterfilterplatform.nl/kokend-water-kraan/thee' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link> &rsaquo;{' '}
          <span>Optimaal water voor thee</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Optimaal water voor thee: temperatuur, TDS, hardheid en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Water is het oplosmiddel voor thee. De kwaliteit van uw water bepaalt welke aromastoffen,
            polyfenolen en cafeine worden geextraheerd. Hard water, een hoge TDS of de verkeerde pH
            kunnen zelfs de beste theebladeren bederven. Leer welk water ideaal is en hoe een
            osmosefilter of kokend-water-kraan het verschil maakt.
          </p>
        </section>

        <QuickAnswer answer="Voor thee is water met TDS 75-150 mg/L, hardheid onder 8 dH en pH 6-7 ideaal. Hard water vormt een vettig vlies door reactie met tanninen. Osmosewater met remineralisatie of zacht bronwater zoals Spa Reine geeft de beste theeextractie. Zwarte thee: 90-95 graden; groene thee: 70-80 graden." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom waterkwaliteit thee beinvloedt
        </h2>
        <p className="text-gray-700 mb-4">
          Theeextractie is een complex chemisch proces waarbij heet water polyfenolen (tanninen en
          catechinen), cafeine, theanine en honderden aromastoffen uit de theebladeren lost. Water is
          het oplosmiddel, en de eigenschappen van dat oplosmiddel bepalen welke stoffen worden opgelost
          en in welke verhouding.
        </p>
        <p className="text-gray-700 mb-6">
          De drie meest bepalende factoren zijn <strong>hardheid</strong> (calcium- en magnesiumgehalte),
          <strong> TDS</strong> (totaal opgeloste stoffen) en <strong>pH</strong>. Een vierde factor is
          temperatuur, die apart bepaalt hoe snel en volledig de extractie verloopt. Elk theesoort heeft
          bovendien zijn eigen optimale extractieprofiel.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS voor thee: het optimale bereik
        </h2>
        <p className="text-gray-700 mb-4">
          TDS staat voor Total Dissolved Solids: het totaal aan opgeloste mineralen en zouten in het
          water, gemeten in milligram per liter (mg/L). Voor thee geldt een optimum van
          <strong> 75-150 mg/L</strong>, vergelijkbaar met de SCA-norm voor koffiezetten.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>TDS onder 50 mg/L:</strong> thee smaakt vlak, wrang en eendimensionaal. Te weinig
            mineralen bieden onvoldoende ionische kracht voor de extractie van complexe aromastoffen.
            Gedestilleerd water en puur osmosewater (TDS 5-30 mg/L) vallen in deze categorie
          </li>
          <li>
            <strong>TDS 75-150 mg/L:</strong> optimaal bereik. Voldoende mineralen voor extractie,
            weinig genoeg om delicate aroma&apos;s niet te maskeren. Spa Reine (33 mg/L) zit aan de
            ondergrens maar werkt goed door lage hardheid
          </li>
          <li>
            <strong>TDS 150-250 mg/L:</strong> acceptabel voor zwarte thee, minder ideaal voor groene
            en witte thee. Nederlands gemiddeld leidingwater zit in dit bereik
          </li>
          <li>
            <strong>TDS boven 250 mg/L:</strong> kalk en mineralen maskeren delicate aroma&apos;s.
            Evian (TDS 357 mg/L) is te hoog voor fijne theesoorten
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Osmosewater met TDS 5-30 mg/L is te leeg voor directe theeextractie. Een
          <Link href="/osmose-water/remineralisatie" className="text-[#005F8A] underline"> remineralisatiefilter</Link> of
          mineralendruppels brengen de TDS naar het optimale bereik van 75-100 mg/L.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hardheid en kalkvorming bij thee
        </h2>
        <p className="text-gray-700 mb-4">
          Waterhardheid wordt uitgedrukt in graden Duitse hardheid (dH) of als calciumcarbonaatequivalent
          (mg/L CaCO3). Hard water (boven 15 dH) heeft een directe negatieve invloed op de theesmaak:
        </p>
        <p className="text-gray-700 mb-4">
          Calcium en magnesium in hard water reageren chemisch met <strong>theopolyfenolen</strong>
          (met name tanninen) en vormen een onoplosbaar calciumtannincomplex. Dit complex is zichtbaar
          als een vettig, kalkachtig vlies op het oppervlak van de thee. In de mond geeft dit een
          ruw, astringent gevoel en een bittere nasmaak.
        </p>
        <p className="text-gray-700 mb-6">
          De aanbevolen hardheid voor thee ligt <strong>onder 8 dH</strong> (zacht water). Ter
          vergelijking: leidingwater in Amsterdam heeft ca 8-10 dH (grensgebied), Utrecht ca 14 dH
          (te hard) en Friesland ca 5 dH (ideaal). Zacht leidingwater in Friesland en Groningen is van
          nature geschikt voor thee. Bij hard leidingwater is ontharding of osmosefiltratie noodzakelijk.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          pH van water voor thee
        </h2>
        <p className="text-gray-700 mb-4">
          De ideale pH voor theezetten ligt tussen <strong>6 en 7</strong>. Leidingwater in Nederland
          heeft doorgaans een pH van 7,5-8,5, wat iets te basisch is voor optimale extractie.
        </p>
        <p className="text-gray-700 mb-6">
          Bij hogere pH (alkalisch water) extracteert thee sneller maar anders: meer tanninen komen
          vrij, wat een bitterder resultaat geeft. Osmosewater heeft na absorptie van koolstofdioxide
          uit de lucht een pH van 5,5-6,5, wat uitstekend is voor thee. Zwarte thee is minder
          gevoelig voor pH-variaties dan <strong>groene thee</strong> en <strong>witte thee</strong>,
          die beide het sterkst profiteren van licht zuur water.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Temperatuur per theesoort
        </h2>
        <p className="text-gray-700 mb-4">
          Temperatuur is de meest directe variabele in theeextractie. Te heet water oxideert gevoelige
          catechinen in groene en witte thee en geeft een bittere smaak. De aanbevolen temperaturen:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Theesoort</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Temperatuur</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zettijd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zwarte thee</td>
                <td className="border border-gray-300 px-3 py-2">90-95 graden</td>
                <td className="border border-gray-300 px-3 py-2">3-5 minuten</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Groene thee</td>
                <td className="border border-gray-300 px-3 py-2">70-80 graden</td>
                <td className="border border-gray-300 px-3 py-2">2-3 minuten</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Witte thee</td>
                <td className="border border-gray-300 px-3 py-2">65-75 graden</td>
                <td className="border border-gray-300 px-3 py-2">3-5 minuten</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Oolong</td>
                <td className="border border-gray-300 px-3 py-2">80-90 graden</td>
                <td className="border border-gray-300 px-3 py-2">3-4 minuten</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kruidenthee</td>
                <td className="border border-gray-300 px-3 py-2">95-100 graden</td>
                <td className="border border-gray-300 px-3 py-2">5-7 minuten</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Een <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend-water-kraan</Link> levert
          standaard 100 graden Celsius. Voor zwarte thee en kruidenthee is dat prima. Voor groene en
          witte thee dient het water kort te worden afgekoeld of is een model met instelbare
          temperatuur nodig. Diverse 4-in-1 en 5-in-1 modellen bieden temperatuurinstelling.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Beste water voor thee: bronwater vergelijking
        </h2>
        <p className="text-gray-700 mb-4">
          Populaire bronwatermerken hebben sterk uiteenlopende profielen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Spa Reine</strong> (TDS 33 mg/L, hardheid 1,5 dH): ideaal profiel voor alle theesoorten.
            Lage hardheid, lage TDS, pH ca 5,8
          </li>
          <li>
            <strong>Evian</strong> (TDS 357 mg/L, hardheid 17 dH): te hoog in TDS en hardheid. Geeft
            kalkfilm bij thee; niet aanbevolen voor groene en witte thee
          </li>
          <li>
            <strong>Volvic</strong> (TDS 130 mg/L, hardheid 6 dH): goede middenweg. Lage hardheid,
            TDS aan de bovengrens maar acceptabel
          </li>
          <li>
            <strong>Osmosewater + remineralisatie</strong> (TDS ca 75-100 mg/L, hardheid 5-7 dH, pH 6,5):
            beste optie voor consistente kwaliteit. Thuis controleerbaar met TDS-meter
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kokend-water-kraan en osmosefilter voor thee
        </h2>
        <p className="text-gray-700 mb-4">
          De combinatie van een <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend-water-kraan</Link> met
          een ingebouwd <Link href="/osmose-water" className="text-[#005F8A] underline">osmosefilter</Link> biedt
          voor theefanaten het beste van twee werelden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Direct heet water</strong> op de juiste temperatuur, zonder wachten op een waterkoker
          </li>
          <li>
            <strong>Geconditioneerd water</strong>: osmosefilter verwijdert kalk, chloor en andere
            stoffen die thee bederven
          </li>
          <li>
            <strong>Remineralisatiefilter</strong> (optioneel als extra trap) brengt TDS naar het
            optimale bereik van 75-100 mg/L
          </li>
          <li>
            <strong>Geen kalkvorming</strong> in het apparaat zelf, wat de levensduur van de
            kokend-water-kraan verlengt
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor koffieliefhebbers die ook thee drinken: de watereisen voor thee en filterkoffie zijn
          vergelijkbaar (TDS 75-150 mg/L, lage hardheid), wat een gecombineerd systeem praktisch maakt.
          Zie ook onze vergelijking op de{' '}
          <Link href="/kokend-water-kraan/koffie" className="text-[#005F8A] underline">pagina over water voor koffie</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over water voor thee
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
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend-water-kraan overzicht</Link>,{' '}
          <Link href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">remineralisatie osmosewater</Link>,{' '}
          <Link href="/leidingwater/hardheid-kaart" className="text-[#005F8A] underline">waterhardheid per gemeente</Link> en{' '}
          <Link href="/kokend-water-kraan/koffie" className="text-[#005F8A] underline">water voor koffie</Link>.
        </p>
      </main>
    </>
  );
}
