import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater voor sporters: elektrolyten, remineralisatie en prestaties',
  description:
    'Osmosewater mist elektrolyten die sporters nodig hebben. Na intensieve training compenseer je via voeding of remineralisatietabletten. Leer wanneer osmosewater goed is voor sporters en wanneer aanvulling nodig is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/sport' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater slecht voor sporters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is niet slecht voor sporters bij normaal gebruik (1-2 uur, matige intensiteit). De meeste elektrolyten halen sporters uit voeding, niet uit water. Het probleem ontstaat pas bij duursporten langer dan 90 minuten, extreme hitte met veel zweten, of wanneer sporters uitsluitend osmosewater drinken zonder gebalanceerde maaltijden. In die gevallen is aanvulling met elektrolyttabletten of een remineralisatiefilter verstandig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke elektrolyten missen sporters in osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een TDS van 1-20 mg/L en bevat vrijwel geen elektrolyten. Sporters hebben voornamelijk natrium (Na+) nodig voor vochtretentie en zenuwimpulsen, kalium (K+) voor spierfunctie, magnesium (Mg2+) voor energiemetabolisme en spierherstel, calcium (Ca2+) voor spiersamentrekking en botgezondheid, en bicarbonaat (HCO3-) als zuur-basebuffer. Al deze stoffen zijn aanwezig in normale voeding, maar gaan verloren via zweet bij intensieve inspanning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is hyponatriemie en vergroot osmosewater dit risico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hyponatriemie is een gevaarlijk lage natriumspiegel in het bloed, veroorzaakt door overmatig water drinken zonder voldoende natriumaanvulling. Bij consumptie van meer dan 1 liter water per uur in combinatie met lage natriumvoeding kan dit optreden. Osmosewater vergroot dit risico iets ten opzichte van mineraalwater, omdat het geen natrium bevat. Bij intensieve duursporten langer dan 90 minuten is een snufje zeezout per liter of elektrolyttabletten een effectieve preventie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe remineraliseer ik osmosewater voor sport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn vier praktische methoden: (1) een remineralisatiefilter installeert u na het osmosemembraan en voegt automatisch calcium en magnesium toe (40-80 mg/L Ca, 10-20 mg/L Mg); (2) elektrolyttabletten (NUUN, SaltStick, High5) geven een volledige elektrolytaanvulling na training; (3) een snufje zeezout per liter (kleine halve theelepel) geeft 150-300 mg natrium; (4) isotone sportdrankpoeder mengen met osmosewater voor een complete elektrolytdrank.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater beter dan mineraalwater voor sporters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor recreatieve sporters maakt het weinig verschil, want beide hydrateren goed. Mineraalwater (zoals Sourcy of Spa) bevat van nature magnesium, calcium en soms natrium, wat een licht voordeel geeft bij langdurige inspanning. Voor intensieve sporters of duursporters is het echter effectiever om osmosewater te remineraliseren of elektrolyttabletten te gebruiken, omdat de elektrolytsamenstelling dan precies op de behoefte kan worden afgestemd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel water moet een sporter per dag drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De basisaanbeveling is 2-2,5 liter per dag voor volwassenen. Sporters verliezen via zweet 0,5-3 liter per uur, afhankelijk van intensiteit en temperatuur. Compenseer vochtverlies door voor, tijdens en na de training te drinken. Een praktische vuistregel: drink 500 ml water per uur lichte training en 750-1000 ml per uur intensieve training. Weeg uzelf voor en na training; elk kilogram gewichtsverlies staat voor circa 1 liter vochtverlies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik osmosewater gebruiken voor isotone sportdrank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosewater is ideaal als basis voor zelfgemaakte isotone sportdrankmengsels. Doordat osmosewater vrijwel geen mineralen bevat, is de samenstelling van de uiteindelijke drank volledig voorspelbaar en controleerbaar. Meng osmosewater met sportdrank in poedervorm of voeg elektrolyttabletten toe voor een isotone drank met de juiste verhouding natrium (400-700 mg/L), kalium (100-200 mg/L) en koolhydraten (60-80 g/L).',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft osmosewater invloed op sportprestaties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zuiver osmosewater heeft op zichzelf geen negatief effect op kortdurende sportprestaties (tot 60-90 minuten). Bij langdurige inspanning van meer dan 90 minuten zonder elektrolytaanvulling kan uitdroging en elektrolytenverlies de prestaties verminderen, maar dat geldt voor elk type water zonder elektrolyten. Remineraliseer het osmosewater of gebruik elektrolyttabletten voor optimale hydratatie bij intensieve of langdurige sport.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater voor sporters: elektrolyten, remineralisatie en prestaties',
  description:
    'Osmosewater mist elektrolyten die sporters nodig hebben. Na intensieve training compenseer je via voeding of remineralisatietabletten. Leer wanneer osmosewater goed is voor sporters en wanneer aanvulling nodig is.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/sport',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterSportPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater voor sporters', item: 'https://waterfilterplatform.nl/osmose-water/sport' },
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
          <span>Osmosewater voor sporters</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor sporters: elektrolyten, remineralisatie en prestaties
          </h1>
          <p className="text-[#005F8A] text-lg">
            Osmosewater bevat vrijwel geen elektrolyten. Voor recreatieve sporters is dat geen
            probleem: de meeste mineralen komen via voeding binnen. Duursporters en intensieve
            sporters kunnen eenvoudig remineraliseren via filtermodule, elektrolyttabletten of
            een snufje zeezout.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater (TDS 1-20 mg/L) mist elektrolyten maar is prima voor sporters tot 90 minuten. De meeste mineralen halen sporters via voeding. Bij duursporten langer dan 90 minuten of intensieve hitte-inspanning: voeg elektrolyttabletten toe of gebruik een remineralisatiefilter om natrium, kalium en magnesium aan te vullen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat sporters nodig hebben in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Water is voor sporters het belangrijkste suppletum: al 2% uitdroging verlaagt de
          sportprestaties meetbaar. Naast water zijn elektrolyten essentieel voor spier- en
          zenuwfunctie. De volgende mineralen spelen een hoofdrol:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Natrium (Na+):</strong> regelt vochtretentie, bloeddruk en zenuwimpulsen.
            Bij zweet verliest u 500-1.500 mg natrium per liter. Tekort veroorzaakt
            hyponatriemie en spierkrampen
          </li>
          <li>
            <strong>Kalium (K+):</strong> essentieel voor spiersamentrekking en hartritme.
            Verlies via zweet is bescheiden (100-200 mg/L zweet) maar significant bij
            langdurige inspanning
          </li>
          <li>
            <strong>Magnesium (Mg2+):</strong> betrokken bij meer dan 300 enzymatische reacties,
            waaronder ATP-productie (energiemetabolisme) en spierherstel na training
          </li>
          <li>
            <strong>Calcium (Ca2+):</strong> noodzakelijk voor spiersamentrekking, zenuwgeleiding
            en botgezondheid op de lange termijn
          </li>
          <li>
            <strong>Bicarbonaat (HCO3-):</strong> fungeert als zuur-basebuffer en neutraliseert
            melkzuur dat tijdens intensieve anaerobe inspanning wordt geproduceerd
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat osmosewater levert
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde
          osmosefilter</Link> verwijdert 95-99% van alle opgeloste stoffen, inclusief mineralen
          en elektrolyten. Osmosewater heeft daardoor een <strong>TDS van 1-20 mg/L</strong>
          &mdash; vergelijkbaar met gedestilleerd water in elektrolytsamenstelling. Ter vergelijking:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Watertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Na (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Mg (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Ca (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">TDS (mg/L)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmosewater</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;20</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sourcy (mineraalwater)</td>
                <td className="border border-gray-300 px-3 py-2">6</td>
                <td className="border border-gray-300 px-3 py-2">5</td>
                <td className="border border-gray-300 px-3 py-2">65</td>
                <td className="border border-gray-300 px-3 py-2">~250</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Spa Blauw</td>
                <td className="border border-gray-300 px-3 py-2">3</td>
                <td className="border border-gray-300 px-3 py-2">1</td>
                <td className="border border-gray-300 px-3 py-2">5</td>
                <td className="border border-gray-300 px-3 py-2">~34</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Isotone sportdrank</td>
                <td className="border border-gray-300 px-3 py-2">400&ndash;700</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;30</td>
                <td className="border border-gray-300 px-3 py-2">20&ndash;60</td>
                <td className="border border-gray-300 px-3 py-2">~6.000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmosewater + remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;20</td>
                <td className="border border-gray-300 px-3 py-2">40&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">~150</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Is osmosewater schadelijk voor sporters?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste sporters is het antwoord <strong>nee</strong>. De redenering dat osmosewater
          "mineralen uit het lichaam trekt" is een fabeltje: water met een laag mineraalgehalte
          heeft geen meetbaar effect op de mineralenhuishouding bij gezonde volwassenen die
          gevarieerd eten. Problemen kunnen echter ontstaan in specifieke situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Duursporten langer dan 90 minuten</strong> zonder eten: bij uitgeputte
            glycogeenvoorraden en hoog zweetverlies kan elektrolytdeficientie ontstaan
          </li>
          <li>
            <strong>Extreme hitte en intensief zweten</strong> (zweetverlies &gt;1-3 liter per uur):
            natriumverlies kan niet worden gecompenseerd door osmosewater alleen
          </li>
          <li>
            <strong>Alleen osmosewater drinken</strong> bij een onevenwichtige voeding:
            sporters met een laag natriumdieet en hoog waterverbruik lopen risico op
            hyponatriemie
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hyponatriemie: wanneer osmosewater een rol speelt
        </h2>
        <p className="text-gray-700 mb-4">
          Hyponatriemie (te laag natriumgehalte in het bloed) is een serieus risico bij
          ultralopers, triathleten en wielrenners. Symptomen zijn misselijkheid, hoofdpijn,
          verwardheid en in ernstige gevallen bewustzijnsverlies. Het treedt op wanneer:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Waterinname &gt;1 liter per uur gedurende meer dan 2 uur</li>
          <li>Natriumverlies via zweet niet wordt gecompenseerd</li>
          <li>Het gedronken water geen of weinig natrium bevat</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Osmosewater vergroot dit risico marginaal ten opzichte van gewoon mineraalwater,
          omdat het geen natrium bevat. Voor recreatieve sporters is het risico verwaarloosbaar.
          Voor duursporters die meer dan 2 uur op hoge intensiteit trainen of wedstrijden
          rijden, is elektrolytaanvulling een must &mdash; ongeacht het watertype.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vier oplossingen voor sporters die osmosewater gebruiken
        </h2>
        <p className="text-gray-700 mb-4">
          Wilt u osmosewater blijven gebruiken maar toch optimaal gehydrateerd sporten, dan
          zijn er vier effectieve strategieen:
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">1. Remineralisatiefilter (Ca + Mg)</h3>
            <p className="text-gray-700 text-sm">
              Een remineralisatiefilter plaatst u na het osmosemembraan. Het voegt calcium en
              magnesium toe: typisch 40-80 mg/L Ca en 10-20 mg/L Mg. Ideaal voor de dagelijkse
              basis-hydratatie. Natrium wordt niet toegevoegd, dus voor intensieve training is
              aanvullende elektrolytaanvulling nodig. Leer meer over{' '}
              <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">remineraliseren van osmosewater</Link>.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">2. Elektrolyttabletten (NUUN, SaltStick, High5)</h3>
            <p className="text-gray-700 text-sm">
              Oplosbare tabletten geven een complete elektrolytaanvulling: natrium, kalium,
              magnesium, calcium en chloride in de juiste verhoudingen. NUUN Sport bevat
              bijvoorbeeld 300 mg Na, 150 mg K en 25 mg Mg per tablet per halve liter. Ideaal
              voor tijdens en na intensieve trainingen.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">3. Osmosewater + een snufje zeezout</h3>
            <p className="text-gray-700 text-sm">
              Een kleine halve theelepel zeezout (circa 1 gram) per liter osmosewater levert
              150-300 mg natrium &mdash; voldoende voor matige inspanning. Eenvoudig, goedkoop
              en effectief. Voeg desgewenst een schijfje citroen en een theelepel honing toe
              voor een naturale sportdrank.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">4. Sportdrank mengen met osmosewater</h3>
            <p className="text-gray-700 text-sm">
              Isotone sportdrankpoeder of concentraat mengen met osmosewater geeft een
              volledige isotone drank. Doordat osmosewater nauwelijks TDS heeft, is de
              uiteindelijke samenstelling volledig afhankelijk van het sportdrankproduct
              &mdash; een voordeel voor nauwkeurige dosering.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Conclusie: voor wie is osmosewater geschikt bij sport?
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosewater is uitstekend geschikt voor:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Recreatieve sporters met trainingen tot 60-90 minuten</li>
          <li>Sporters die gevarieerd eten en voldoende elektrolyten via voeding binnenkrijgen</li>
          <li>Sporters die de basis van sportdrankmengsels willen controleren</li>
          <li>Dagelijkse hydratatie buiten het sporten om</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Aanvulling is aanbevolen voor:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Duursporters (marathon, triathlon, wielrennen) bij inspanning &gt;90 minuten</li>
          <li>Sporters in extreme hitte of bij hoog zweetverlies</li>
          <li>Sporters op een zoutarm dieet</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Lees ook onze pagina over <Link href="/osmose-water/mineralen" className="text-[#005F8A] underline">mineralen
          in osmosewater</Link> en <Link href="/osmose-water/gezondheid" className="text-[#005F8A] underline">de
          gezondheidseffecten van osmosewater</Link> voor een compleet beeld.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosewater en sport
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
          <Link href="/osmose-water/mineralen" className="text-[#005F8A] underline">mineralen in osmosewater</Link>,{' '}
          <Link href="/osmose-water/gezondheid" className="text-[#005F8A] underline">gezondheid en osmosewater</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
