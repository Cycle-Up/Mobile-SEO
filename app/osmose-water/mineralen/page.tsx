import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Mineralen in osmosewater: wat mist er en wanneer is aanvulling nodig?',
  description:
    'Osmosewater mist calcium, magnesium en bicarbonaat. De WHO adviseert minimum Ca 30 mg/L. Voor gezonde volwassenen met gevarieerde voeding is aanvulling niet.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/mineralen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke mineralen verwijdert een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter verwijdert nagenoeg alle opgeloste mineralen: calcium (95-99%), magnesium (95-99%), natrium (90-96%), kalium (90-95%), bicarbonaat (95-99%), sulfaat (97-99%) en chloride (90-95%). Het resulterende water heeft een TDS van 1-30 mg/L, afhankelijk van membraankwaliteit en de samenstelling van het ingangswater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater ongezond door gebrek aan mineralen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, niet bij een gevarieerde voeding. EFSA concludeert dat bij een normaal voedingspatroon geen risico op mineralentekort bestaat door het gebruik van osmosewater. De WHO 2011-richtlijn (bevestigd 2022) adviseert minimum Ca 30 mg/L en Mg 10 mg/L voor drinkwater, maar vermeldt ook dat voeding de primaire bron van mineralen is. Risicogroepen zijn baby\'s, topsporters en mensen met een sterk eenzijdig dieet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de pH van osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een pH van 5-6. Door het ontbreken van bicarbonaat heeft het water geen buffercapaciteit en absorbeert het gemakkelijk CO2 uit de lucht, waardoor de pH daalt. Dit licht zure water is niet schadelijk voor gezonde volwassenen, maar suboptimaal voor koffie en thee. Remineralisatie met calciet verhoogt de pH naar 7-7,5.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is remineralisatie van osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remineralisatie is het terugvoegen van mineralen aan osmosewater via een nafilter gevuld met calciet (calciumcarbonaat) of een combinatie van calciet en magnesiet. Het water lost geleidelijk mineralen op uit het filtermedium. Een goed afgesteld remineralisatiefilter voegt 40-80 mg/L calcium en 10-20 mg/L magnesium toe, verhoogt de TDS naar 60-100 mg/L en de pH naar 7-7,5.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mogen baby\'s osmosewater drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Baby's zijn volledig afhankelijk van flesvoeding en drinken geen ander voedsel. Osmosewater bevat vrijwel geen mineralen en biedt geen bicarbonaat als buffer. Voor zuigelingen wordt gedemineraliseerd water afgeraden; gebruik bij voorkeur kraanwater of speciaal gecertificeerd babywater. Als osmosewater wordt gebruikt, is remineralisatie of bijmengen met mineraalwater sterk aan te raden.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater goed voor koffie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is uitstekend voor koffie dankzij afwezigheid van chloor en kalk. Puur osmosewater (TDS onder 20 mg/L) geeft echter een scherpe, wrange smaak bij espresso. De SCA (Specialty Coffee Association) adviseert pH 6,5-7,5 en TDS 75-175 mg/L voor optimale extractie. Licht geremineraliseerd osmosewater (TDS 60-120 mg/L) is de ideale keuze voor barista\'s en thuisgebruikers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe kan ik mineralen toevoegen aan osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn vier praktische opties: (1) Remineralisatiefilter met calciet of calciet+magnesiet: ca. 20 euro per jaar, voegt Ca 40-80 mg/L en Mg 10-20 mg/L toe. (2) Mineraaltabletjes (NUUN, Trace Minerals): volledige controle over de samenstelling, handig voor sporters. (3) Mineraalwater bijmengen: 10-20% mineraalwater door osmosewater geeft TDS 20-50 mg/L. (4) Himalayazout of zeezout (klein snufje per liter): voegt natrium en spoorelementen toe, maar geen calcium of magnesium.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft osmosewater een negatief effect op tanden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De lage pH van puur osmosewater (5-6) zou bij langdurig en frequent contact theoritisch kunnen bijdragen aan tanderosie, maar het effect is verwaarloosbaar bij normaal drinken. Remineralisatie verhoogt de pH naar 7-7,5 en elimineert dit theoretische risico. In Nederland wordt fluoride niet meer aan drinkwater toegevoegd, dus osmosewater en kraanwater bieden beide geen tandprotectie via fluoride. Gebruik fluoridehoudende tandpasta.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Mineralen in osmosewater: wat mist er en wanneer is aanvulling nodig?',
  description:
    'Osmosewater mist calcium, magnesium en bicarbonaat. De WHO adviseert minimum Ca 30 mg/L. Voor gezonde volwassenen is aanvulling niet noodzakelijk.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/mineralen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseMineralenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Mineralen in osmosewater', item: 'https://waterfilterplatform.nl/osmose-water/mineralen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/osmose-water" className="hover:underline">Osmosewater</Link> &rsaquo;{' '}
          <span>Mineralen in osmosewater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Mineralen in osmosewater: wat mist er en wanneer is aanvulling nodig?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Osmosewater bevat nagenoeg geen calcium, magnesium of bicarbonaat. De WHO adviseert
            een minimum van Ca 30 mg/L in drinkwater. Voor gezonde volwassenen met een gevarieerde
            voeding is aanvulling niet medisch noodzakelijk &mdash; maar voor baby&apos;s,
            topsporters en koffieliefhebbers maakt remineralisatie een duidelijk verschil.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater mist calcium (95-99% verwijderd), magnesium (95-99%), bicarbonaat en andere mineralen. Voor gezonde volwassenen met gevarieerde voeding is dit geen gezondheidsrisico (EFSA). Remineralisatiefilter (calciet+magnesiet) brengt Ca op 40-80 mg/L en Mg op 10-20 mg/L voor circa 20 euro per jaar." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke mineralen verwijdert omgekeerde osmose?
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosefilter werkt via een semi-permeabel membraan met porieen van 0,0001 micron.
          Alleen watermoleculen passeren; alle opgeloste ionen worden tegengehouden en afgevoerd
          met het concentraat (afvalwater). De verwijderingspercentages per mineraal:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Calcium (Ca&sup2;+):</strong> 95-99% verwijderd &mdash; primair verantwoordelijk voor waterhardheid</li>
          <li><strong>Magnesium (Mg&sup2;+):</strong> 95-99% verwijderd &mdash; medebepalend voor hardheid en smaak</li>
          <li><strong>Natrium (Na+):</strong> 90-96% verwijderd &mdash; relevant voor mensen met natriumbeperking</li>
          <li><strong>Kalium (K+):</strong> 90-95% verwijderd</li>
          <li><strong>Bicarbonaat (HCO3-):</strong> 95-99% verwijderd &mdash; buffer voor pH-stabiliteit</li>
          <li><strong>Sulfaat (SO4&sup2;-):</strong> 97-99% verwijderd</li>
          <li><strong>Chloride (Cl-):</strong> 90-95% verwijderd</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het resulterende osmosewater heeft een TDS (totaal opgeloste stoffen) van 1-30 mg/L,
          afhankelijk van de kwaliteit van het membraan en het ingangswater. Nederlands leidingwater
          bevat doorgaans 150-400 mg/L TDS.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          WHO-richtlijn en wetenschappelijke consensus
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>WHO Drinking Water Guidelines 2011</strong> (bevestigd in de 2022-update)
          adviseren voor drinkwater:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Calcium: minimaal <strong>30 mg/L</strong></li>
          <li>Magnesium: minimaal <strong>10 mg/L</strong></li>
          <li>TDS: minimaal <strong>100 mg/L</strong> voor een aanvaardbare smaak</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Osmosewater zit ver onder deze aanbevolen minima. Toch concludeert de WHO dat dit
          geen acuut gezondheidsrisico vormt bij gevarieerde voeding. De redenering is helder:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>80% van calcium- en magnesiuminname</strong> komt via voeding (zuivel,
            groenten, noten, volle granen), niet via drinkwater
          </li>
          <li>
            <strong>EFSA (2022)</strong> concludeert dat bij een gevarieerde voeding geen
            risico op mineralentekort bestaat door het gebruik van osmosewater
          </li>
          <li>
            De WHO vermeldt als voorzorg dat langdurig gebruik van extreem zacht water
            (TDS &lt; 30 mg/L) in combinatie met een arm voedingspatroon mogelijk nadelig kan zijn
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risico&apos;s per doelgroep
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste gezonde volwassenen is osmosewater zonder remineralisatie prima. Er zijn
          echter specifieke risicogroepen waarbij aanvulling verstandig of noodzakelijk is:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Baby&apos;s (0-12 maanden):</strong> volledig afhankelijk van flesvoeding;
            geen andere voeding om mineralen te compenseren. Gebruik kraanwater of gecertificeerd
            babywater. Als osmosewater wordt gebruikt, is remineralisatie noodzakelijk.
          </li>
          <li>
            <strong>Topsporters:</strong> verliezen grote hoeveelheden elektrolyten via zweet
            (natrium, kalium, magnesium). Osmosewater compenseert dit verlies niet.
            Mineraaltabletjes of elektrolytendrankjes zijn aangewezen.
          </li>
          <li>
            <strong>Ouderen met verminderde voedselinname:</strong> kleinere variatie in
            voeding betekent minder mineralencompensatie via eten.
          </li>
          <li>
            <strong>Mensen met sterk eenzijdig dieet:</strong> veganisten die weinig
            zuivel en weinig variatie in groenten eten, kunnen baat hebben bij remineralisatie.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mineraalgehalten vergeleken (mg/L)
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Watertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Calcium</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Magnesium</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">TDS</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">pH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">NL kraanwater (gemiddeld)</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;100</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;20</td>
                <td className="border border-gray-300 px-3 py-2">150&ndash;400</td>
                <td className="border border-gray-300 px-3 py-2">7,2&ndash;7,8</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Osmosewater (zonder remin.)</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;3</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;30</td>
                <td className="border border-gray-300 px-3 py-2">5,0&ndash;6,5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosewater (met remin.)</td>
                <td className="border border-gray-300 px-3 py-2">40&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;20</td>
                <td className="border border-gray-300 px-3 py-2">60&ndash;100</td>
                <td className="border border-gray-300 px-3 py-2">7,0&ndash;7,5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Spa Rood (bronwater)</td>
                <td className="border border-gray-300 px-3 py-2">2</td>
                <td className="border border-gray-300 px-3 py-2">1</td>
                <td className="border border-gray-300 px-3 py-2">35</td>
                <td className="border border-gray-300 px-3 py-2">5,0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Sourcy (bronwater)</td>
                <td className="border border-gray-300 px-3 py-2">45</td>
                <td className="border border-gray-300 px-3 py-2">8</td>
                <td className="border border-gray-300 px-3 py-2">204</td>
                <td className="border border-gray-300 px-3 py-2">7,4</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Evian (mineraalwater)</td>
                <td className="border border-gray-300 px-3 py-2">80</td>
                <td className="border border-gray-300 px-3 py-2">26</td>
                <td className="border border-gray-300 px-3 py-2">304</td>
                <td className="border border-gray-300 px-3 py-2">7,2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatieopties vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn vier praktische manieren om mineralen terug toe te voegen aan osmosewater:
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Remineralisatiefilter (calciet of calciet+magnesiet)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Aanbevolen</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een inline nafilter gevuld met calciumcarbonaat (calciet) of een combinatie van calciet
              en magnesiet. Het water lost geleidelijk mineralen op uit het medium. Resultaat:
              Ca 40-80 mg/L, Mg 10-20 mg/L. Verhoogt ook de pH van 5-6 naar 7-7,5.
              Kosten: circa 20 euro per jaar voor patroonvervanging.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Mineraaltabletjes (NUUN, Trace Minerals)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Oplosbare tabletten of druppels met een uitgebalanceerd mineralenmengsel. Bieden volledige
              controle over de samenstelling, inclusief natrium, kalium, calcium en magnesium. Bijzonder
              handig voor sporters die elektrolyten willen aanvullen na intensief sporten.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Mineraalwater bijmengen</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              10-20% mineraalwater (bijv. Evian of Sourcy) door osmosewater mengen verhoogt de TDS naar
              20-50 mg/L. Een eenvoudige, goedkope oplossing zonder extra apparatuur. Ideaal als
              tijdelijke maatregel of voor gebruik in een waterkaraf.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Himalayazout of zeezout (klein snufje per liter)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een heel klein snufje (0,1-0,2 gram per liter) Himalayazout of zeezout voegt natrium en
              spoorelementen toe. Let op: dit voegt geen significante hoeveelheden calcium of magnesium
              toe. Geschikt als smaakverbetering, niet als volledige mineralenvervanging.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bicarbonaat en pH: effect op smaak en kookgerei
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosewater mist bicarbonaat (HCO3-), de belangrijkste pH-buffer in drinkwater. Zonder
          deze buffer absorbeert het water gemakkelijk CO2 uit de lucht, wat de pH laat dalen naar
          5-6. Dit heeft praktische gevolgen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Smaak:</strong> licht zuur, &quot;plat&quot; of waterig. Veel mensen ervaren
            puur osmosewater als minder aangenaam dan kraanwater of geremineraliseerd water.
          </li>
          <li>
            <strong>Koffie en thee:</strong> de SCA (Specialty Coffee Association) adviseert
            pH 6,5-7,5 voor optimale extractie. Puur osmosewater op pH 5-6 geeft een scherpe,
            soms wrange smaak. Remineralisatie met calciet verhoogt de pH naar 7-7,5 &mdash;
            ideaal voor espresso en filterkoffie.
          </li>
          <li>
            <strong>Kookgerei:</strong> osmosewater is agressief voor koper en ijzer vanwege de
            lage pH en de lage ionenconcentratie. Langdurig gebruik in koperen leidingen of
            antieke kookgerei kan metaalionen loslaten. Geremineraliseerd osmosewater is neutraal.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Wilt u meer weten over osmosewater voor babyvoeding? Lees onze speciale gids over
          {' '}<Link href="/osmose-water/gezondheid" className="text-[#005F8A] underline">osmosewater en gezondheid</Link>.
          Voor remineralisatie stap voor stap, zie{' '}
          <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">osmosewater remineraliseren</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over mineralen in osmosewater
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
          <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">osmosewater remineraliseren</Link>,{' '}
          <Link href="/osmose-water/gezondheid" className="text-[#005F8A] underline">osmosewater en gezondheid</Link>,{' '}
          <Link href="/osmose-water/smaak" className="text-[#005F8A] underline">smaak van osmosewater verbeteren</Link> en{' '}
          <Link href="/babywater/osmose" className="text-[#005F8A] underline">osmosewater voor baby&apos;s</Link>.
        </p>
      </main>
    </>
  );
}
