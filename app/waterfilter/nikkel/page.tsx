import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Nikkel in leidingwater: EU-norm, bronnen en waterfilter',
  description:
    'Nikkel in leidingwater komt van kranen en fittingen van laaggelegeerd staal. EU-norm is 20 microgram per liter. Bij nieuw kraanwerk altijd doorspoelen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/nikkel' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waar komt nikkel in leidingwater vandaan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nikkel in leidingwater is bijna altijd afkomstig van installaties binnenshuis: kranen, mengkranen, fittingen en leidingen van nikkellegering. Het water dat van het waterbedrijf komt bevat doorgaans minder dan 2 microgram per liter. Nieuwe kraaninstallaties logen in de eerste weken de meeste nikkel uit. Na stagnatie (bijv. een nacht of weekendabsentie) kan de concentratie in het stilstaande water tijdelijk oplopen tot 20-100 microgram per liter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor nikkel in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn (2020/2184) stelt de maximale nikkelconcentratie op 20 microgram per liter (microgram/L). In Nederland wordt deze norm voor regulier leidingwater ruimschoots gehaald: de gemiddelde concentratie in het distributienet ligt onder 2 microgram/L. Het risico betreft stilstaand water in nikkelrijke huisinstallaties, waarbij de concentratie tijdelijk boven de norm kan komen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is nikkel in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nikkel is een essentieel spoorelement in kleine hoeveelheden (dagbehoefte 25-35 microgram), maar toxisch bij chronisch hoge blootstelling. Het meest voorkomende effect is contactallergie: 10-15% van de bevolking heeft een nikkelallergie. Chronisch hoge inname kan nierproblemen veroorzaken. De IARC classificeert nikkelverbindingen als groep 2B (mogelijk kankerverwekkend voor mensen). De WHO-richtlijn voor gezondheidsrisico ligt op 70 microgram/L, de EU-norm van 20 microgram/L is dus strenger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie loopt het meeste risico van nikkel in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Risicogroepen zijn: mensen met een vastgestelde nikkelallergie (huidreacties, eczeem), zwangere vrouwen (nikkel wordt overgedragen naar de foetus), jonge kinderen en zuigelingen (hogere opname per kilogram lichaamsgewicht), en mensen die nieuw kraanwerk hebben laten plaatsen. Vooral de eerste weken na installatie van nieuwe kranen is doorspoelen extra belangrijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verwijder ik nikkel uit kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest effectieve thuisoplossing is een omgekeerde osmosefilter (RO), die 95-98% van nikkel verwijdert. Een actief koolblokfilter met NSF 53-certificering verwijdert 70-85% bij lage concentraties. Een ionenwisselaar (kationenwisseling) bereikt 90-99% verwijdering maar vereist een specifiek systeem. Filterkanen zijn beperkt effectief voor zware metalen en worden niet aanbevolen als primaire maatregel tegen nikkel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt doorspoelen van de kraan tegen nikkel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ja, doorspoelen is een effectieve gratis maatregel. Laat de kraan minstens 30 seconden lopen (of totdat het water koud aanvoelt) voordat u het gebruikt voor drinken of koken. Dit geldt zeker 's morgens en na elke periode van stilstand, zoals een langere vakantie. Het gestagneerde water in de leidingen spoelt weg en wordt vervangen door vers water vanuit het distributienet met een lagere nikkelconcentratie.",
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe test ik mijn kraanwater op nikkel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laat uw water testen door een geaccrediteerd laboratorium zoals Kiwa, SGS Intron of Eurofins. Neem voor een betrouwbare meting de eerste liter water na stagnatie (ochtendmonster). Een nikkelmeting kost doorgaans 40-80 euro. Voor een volledig beeld van zware metalen in uw kraanwater is een breder meetpakket (lood, koper, nikkel, zink) te overwegen voor 80-150 euro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een waterfilterkan nikkel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waterfilterkannen (zoals Brita) zijn beperkt effectief voor nikkelverwdering. De actieve kool en ionenwisselaarfilters in filterkannen zijn primair ontworpen voor smaakverbetering en hardheidsreductie. Bij lage nikkelconcentraties bereiken ze 30-50% verwijdering, maar dat is onvoldoende als u specifiek nikkel wilt verwijderen. Voor doelgerichte nikkelverwijdering is een ondertafelfilter met NSF 53-certificering of een osmosefilter de betere keuze.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Nikkel in leidingwater: EU-norm, bronnen en waterfilter',
  description:
    'Nikkel in leidingwater komt van kranen en fittingen van laaggelegeerd staal. EU-norm is 20 microgram per liter. Osmosefilter verwijdert 95-98% van nikkel.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/nikkel',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterNikkelPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Nikkel in leidingwater', item: 'https://waterfilterplatform.nl/waterfilter/nikkel' },
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
          <span>Nikkel in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Nikkel in leidingwater: EU-norm, bronnen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Nikkel in kraanwater is vrijwel altijd afkomstig van de eigen huisinstallatie: kranen,
            fittingen en leidingen van nikkellegering. Het distributienet is zelden de bron.
            Een osmosefilter verwijdert 95-98% van nikkel en is de beste thuisoplossing voor
            gevoelige personen of nieuwe kraaninstallaties.
          </p>
        </section>

        <QuickAnswer answer="Nikkel in leidingwater komt bijna altijd van nikkellegering-armaturen in huis, niet van het waterbedrijf. De EU-norm is 20 microgram per liter. Spoel altijd 30 seconden door voor gebruik. Een osmosefilter verwijdert 95-98% van nikkel en is de beste filteroplossing voor huishoudens." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is nikkel?
        </h2>
        <p className="text-gray-700 mb-4">
          Nikkel (symbool Ni, atoomnummer 28) is een zilverkleurig transitiemetaal dat van nature
          voorkomt in de aardkorst en in talrijke legeringen wordt toegepast. Het is een
          <strong> essentieel spoorelement</strong>: de menselijke dagbehoefte ligt op 25-35
          microgram. In die kleine hoeveelheden speelt nikkel een rol in bepaalde enzymatische
          processen. Bij chronisch hoge blootstelling wordt het echter toxisch.
        </p>
        <p className="text-gray-700 mb-6">
          In de industrie wordt nikkel verwerkt in roestvrij staal (RVS), messing, verzilverde
          metalen en talrijke andere legeringen. Juist deze toepassingen zorgen ervoor dat nikkel
          in huishoudelijk drinkwater terecht kan komen via kranen en sanitaire installaties.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronnen van nikkel in leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          Het water dat drinkwaterbedrijven in Nederland leveren bevat gemiddeld <strong>minder
          dan 2 microgram per liter (microgram/L)</strong> nikkel &mdash; ver onder de EU-norm. De
          verontreiniging met nikkel is dan ook vrijwel nooit afkomstig van de waterwinning of het
          distributienet, maar van de <strong>huisinstallatie</strong>:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Kranen en mengkranen:</strong> goedkopere kranen van laaggelegeerd staal of
            nikkellegering logen nikkel uit, met name in de eerste weken na installatie
          </li>
          <li>
            <strong>Fittingen en koppelingen:</strong> T-stukken, bochten en afsluiters van messing
            bevatten vaak 1-3% nikkel als legeringselement
          </li>
          <li>
            <strong>Flexibele aansluitslangen:</strong> sommige flexibele toevoerslangen hebben
            nikkellegering binnenfittingen
          </li>
          <li>
            <strong>Waterfilterhuizen:</strong> goedkope filterhouders van chroom-nikkelstaal
            kunnen bijdragen aan nikkelgehalte in gefilterd water
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Nieuwe kranen logen in de eerste 4-8 weken de meeste nikkel uit. Na stagnatie van
          water in de leidingen &mdash; een nacht, een weekend of een vakantie &mdash; kan de
          nikkelconcentratie in het stilstaande water tijdelijk oplopen tot
          <strong> 20-100 microgram/L</strong>, soms boven de EU-norm van 20 microgram/L.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en gezondheidsrichtlijnen
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-drinkwaterrichtlijn (2020/2184)</strong> stelt de maximale
          nikkelconcentratie in drinkwater op <strong>20 microgram per liter (microgram/L)</strong>.
          Deze norm geldt op het punt van levering (uw kraan), niet alleen in het distributienet.
          De WHO hanteert een gezondheidsrichtlijn van <strong>70 microgram/L</strong>, maar de EU
          is daarmee aanzienlijk strenger.
        </p>
        <p className="text-gray-700 mb-6">
          In de praktijk wordt de EU-norm in het Nederlandse distributienet zelden overschreden.
          Knelpunten bevinden zich in individuele woningen, met name bij:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Nieuw geplaatste kranen en fittingen (eerste 4-8 weken)</li>
          <li>Woningen gebouwd in de jaren 1960-1990 met oudere nikkelrijke armaturen</li>
          <li>Stagnatie van water na langere perioden van niet-gebruik</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico van nikkel in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          De gezondheidseffecten van nikkelblootstelling via drinkwater zijn meervoudig:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Contactallergie (meest voorkomend):</strong> naar schatting 10-15% van de
            Europese bevolking heeft een nikkelallergie. Bij nikkelallergici kan ook inname via
            water bijdragen aan systemische reacties zoals eczeem
          </li>
          <li>
            <strong>Nierproblemen:</strong> chronisch verhoogde nikkelinname kan de nierfunctie
            aantasten bij langdurige blootstelling boven de veilige drempel
          </li>
          <li>
            <strong>Mogelijke carcinogeniteit:</strong> de IARC classificeert nikkelverbindingen
            als <strong>groep 2B</strong> (mogelijk kankerverwekkend bij mensen), gebaseerd op
            dierexperimenten en epidemiologische studies bij beroepsmatige blootstelling
          </li>
          <li>
            <strong>Reproductieve effecten:</strong> bij zwangere vrouwen wordt nikkel overgedragen
            naar de foetus; hoge blootstelling is geassocieerd met lagere geboortegewichten
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Risicogroepen zijn: mensen met een vastgestelde nikkelallergie, zwangere vrouwen,
          jonge kinderen en zuigelingen, en personen die recent nieuwe kranen hebben laten
          installeren. Voor deze groepen zijn aanvullende maatregelen &mdash; doorspoelen of
          filteren &mdash; extra relevant.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Doorspoelmaatregel: effectief en gratis
        </h2>
        <p className="text-gray-700 mb-4">
          De eenvoudigste en goedkoopste maatregel is het <strong>doorspoelen van de kraan</strong>
          voordat u water gebruikt voor drinken of koken:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            Laat de kraan <strong>minimaal 30 seconden</strong> lopen, of totdat het water
            koud aanvoelt (aanduiding dat vers water vanuit het distributienet aankomt)
          </li>
          <li>
            Doe dit <strong>elke ochtend</strong> en na elke periode van langere stilstand
            (weekend, vakantie)
          </li>
          <li>
            Bij nieuw geplaatste kranen: spoel <strong>dagelijks gedurende 4-8 weken</strong>
            totdat de uitloging is afgenomen
          </li>
          <li>
            Het doorgespoel water kunt u gebruiken voor de tuin, het toilet of de wasmachine
            &mdash; zo gaat er geen water versporen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Doorspoelen verlaagt de nikkelconcentratie met 80-95% in de meeste gevallen. Het is
          geen permanente oplossing, maar een directe en kostenloze risicoreductie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteroplossingen voor nikkel: vergelijking
        </h2>
        <p className="text-gray-700 mb-4">
          Wilt u een duurzamere oplossing dan alleen doorspoelen, dan zijn er verschillende
          filteropties beschikbaar. De effectiviteit verschilt sterk per methode:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering Ni</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmosefilter (RO)</td>
                <td className="border border-gray-300 px-3 py-2">95&ndash;98%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
                <td className="border border-gray-300 px-3 py-2">Beste huisoplossing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ionenwisselaar (kationenwisseling)</td>
                <td className="border border-gray-300 px-3 py-2">90&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400&ndash;1.000</td>
                <td className="border border-gray-300 px-3 py-2">Specifiek systeem vereist</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolblok (NSF 53)</td>
                <td className="border border-gray-300 px-3 py-2">70&ndash;85%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100&ndash;300</td>
                <td className="border border-gray-300 px-3 py-2">Lage concentraties</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan (Brita e.d.)</td>
                <td className="border border-gray-300 px-3 py-2">30&ndash;50%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;20&ndash;60</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt effectief</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter: waarom de beste keuze voor nikkel
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde
          osmosefilter</Link> perst water onder druk door een membraan met porieen van 0,0001
          micron. Nikkelionen (Ni2+) zijn te groot om door dit membraan te passeren en worden
          samen met het concentraat afgevoerd. Het resultaat is water met een nikkelgehalte dat
          2-20 keer onder de detectiegrens van standaard wateranalyses ligt.
        </p>
        <p className="text-gray-700 mb-6">
          Voor huishoudens met nikkelallergici of met een nieuwe kraaninstallatie is een
          ondertafel RO-systeem de meest betrouwbare langetermijnoplossing. Combineer het
          systeem met een <Link href="/waterfilter/koper" className="text-[#005F8A] underline">kopertest</Link>{' '}
          als uw leidingen van koper zijn, want oude koperleidingen kunnen tegelijkertijd
          voor verhoogde koperwaarden zorgen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nikkel testen in uw kraanwater
        </h2>
        <p className="text-gray-700 mb-4">
          Wilt u zekerheid over de nikkelconcentratie in uw kraanwater, laat dan een watertest
          uitvoeren. Geaccrediteerde laboratoria in Nederland:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Kiwa Water Research:</strong> marktleider in drinkwateranalyse; nikkelmeting circa &euro;40&ndash;60</li>
          <li><strong>SGS Intron:</strong> breed metaalanalysepakket inclusief nikkel, lood en koper</li>
          <li><strong>Eurofins Environment Testing:</strong> snel en betrouwbaar, ook voor particulieren</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Neem voor een representatief monster <strong>de eerste liter water na stagnatie</strong>
          (ochtendmonster) &mdash; dit geeft de hoogst mogelijke blootstelling weer. Een
          volledige <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">analyse
          van verontreinigingen in leidingwater</Link> omvat ook lood, koper, zink en andere
          zware metalen voor circa &euro;80&ndash;150.
        </p>
        <p className="text-gray-700 mb-6">
          Voor een beoordeling van uw totale waterkwaliteit kunt u ook een uitgebreide
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline"> waterkwaliteitstest</Link>{' '}
          laten uitvoeren, inclusief bacteriologische parameters en anorganische componenten.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van zware metalen: lood, nikkel, koper en arseen.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtratie</h3>
            <p className="text-sm text-gray-600">Hoe een RO-membraan 95-98% van nikkel verwijdert.</p>
          </Link>
          <Link href="/waterfilter/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Lood in drinkwater filteren</h3>
            <p className="text-sm text-gray-600">Vergelijkbare aanpak voor lood als zware metaal.</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
            <p className="text-sm text-gray-600">EU-norm voor nikkel en andere stoffen in drinkwater.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over nikkel in leidingwater
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter/koper" className="text-[#005F8A] underline">koper in leidingwater</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link>.
        </p>
      </main>
    </>
  );
}
