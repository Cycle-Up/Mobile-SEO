import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Filterkan vs kraanfilter: welke is beter voor uw situatie?',
  description:
    'Filterkan of kraanfilter? Een filterkan kost 15-50 euro, een kraanfilter 25-80 euro. Vergelijking van filterprestaties, kosten, gebruiksgemak en wanneer elk.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/kan-vs-kraan' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat filtert beter: een filterkan of een kraanfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een kraanfilter presteert doorgaans beter dan een filterkan. Kraanfilters zoals de TAPP 2 verwijderen naast chloor ook microplastics (80%+) en bieden een hogere filtercapaciteit van 600-1200 liter per cartridge. Filterkans verwijderen voornamelijk chloor, kalk en sommige zware metalen via actief kool en ionenwisseling. Voor microplastics en farmaceutische stoffen biedt een kraanfilter meer bescherming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost een filterkan per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een filterkan kost bij aanschaf 15-50 euro. De jaarlijkse kosten worden bepaald door het waterverbruik. Een gemiddeld persoon drinkt 1-2 liter water per dag. Bij een capaciteit van 150-300 liter per cartridge en een cartridgeprijs van 5-15 euro bedragen de jaarlijkse filterkosten voor een eenpersoonshuidhouden circa 15-40 euro. Voor een gezin van vier personen kan dit oplopen tot 60-100 euro per jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost een kraanfilter per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een kraanfilter kost bij aanschaf 25-80 euro. De cartridges gaan langer mee dan bij filterkans: 600-1200 liter per cartridge, wat voor een gemiddeld huishouden 3-9 maanden betekent. Cartridges kosten 15-30 euro per stuk. De jaarlijkse filterkosten liggen daarmee op 20-60 euro. De totale eigendomskosten over twee jaar zijn doorgaans vergelijkbaar met een filterkan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een filterkan geschikt voor een huurwoning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een filterkan is uitstekend geschikt voor een huurwoning. Er is geen installatie nodig: u vult de kan gewoon met kraanwater. Ook een kraanfilter is geschikt voor huurwoningen; het schroeft op de kraan zonder gereedschap en laat geen permanente sporen achter. Beide opties zijn tijdelijk en eenvoudig mee te nemen bij verhuizing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een filterkan microplastics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard filterkans zoals de Brita Maxtra+ zijn niet gecertificeerd voor microplastics en verwijderen slechts een klein deel van de microplasticsdeeltjes. Kraanfilters met speciale membraantechnologie zoals de TAPP 2 Twist bereiken een verwijdering van 80%+ voor microplastics groter dan 1 micron. Als microplastics een prioriteit zijn, heeft een kraanfilter of osmosefilter de voorkeur boven een filterkan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het voordat water door een filterkan gefilterd is?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De filtreertijd van een filterkan varieert van 2 tot 8 minuten, afhankelijk van het model en de leeftijd van de cartridge. De Brita Marella (600 mL reservoir) vult zich in circa 3-4 minuten. De Aquaphor en BWT Penguin zijn doorgaans iets sneller. Een kraanfilter levert direct gefilterd water: geen wachttijd. Voor druk huishouden of groot waterverbruik is een kraanfilter comfortabeler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is een osmosefilter nodig in plaats van een filterkan of kraanfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter is nodig wanneer uw water zware metalen bevat zoals lood, arseen of chroom, of wanneer PFAS of nitraat een probleem zijn. Filterkans en kraanfilters zijn niet effectief voor deze stoffen. Een osmosefilter verwijdert 95-99% van zware metalen, PFAS en nitraat. Als u in een huis met loden leidingen woont of een eigen waterput gebruikt, is een osmosefilter de enige afdoende huisoplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke filterkan is het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Brita Maxtra+ is de meest verkochte filterkan in Nederland met brede cartridgebeschikbaarheid. De BWT Penguin voegt magnesium toe aan het gefilterde water en heeft fans onder koffiedrinkers. De Aquaphor heeft een hogere filtercapaciteit per cartridge (300 liter) en een gunstigere prijs per liter. Voor de hoogste filterprestaties scoort de Aquaphor B200 goed in onafhankelijke tests.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Filterkan vs kraanfilter: welke is beter voor uw situatie?',
  description:
    'Filterkan of kraanfilter? Vergelijking van filterprestaties, kosten, gebruiksgemak en wanneer elk type de beste keuze is.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/kan-vs-kraan',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function FilterkanVsKraanfilterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Filterkan vs kraanfilter', item: 'https://waterfilterplatform.nl/waterfilter/kan-vs-kraan' },
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
          <span>Filterkan vs kraanfilter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Filterkan vs kraanfilter: welke is beter voor uw situatie?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een filterkan kost 15&ndash;50 euro en werkt zonder installatie. Een kraanfilter kost
            25&ndash;80 euro, levert direct gefilterd water en verwijdert meer stoffen. Welke past
            het best bij uw watergebruik, huishouden en budget?
          </p>
        </section>

        <QuickAnswer answer="Een filterkan kost 15-50 euro en filtert chloor en kalk via actief kool en ionenwisseling. Een kraanfilter kost 25-80 euro, levert direct gefilterd water en verwijdert ook microplastics. Voor groot verbruik of een druk leven wint het kraanfilter op gebruiksgemak. Bij lood, PFAS of nitraat is een osmosefilter nodig." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een filterkan?
        </h2>
        <p className="text-gray-700 mb-4">
          Een filterkan bestaat uit een bovenreservoir, een filtercartridge en een onderreservoir.
          U vult het bovenreservoir met kraanwater; het water zakt vervolgens onder zwaartekracht
          door de cartridge naar het onderreservoir. Dit duurt 2&ndash;8 minuten, afhankelijk van
          het model en de leeftijd van de cartridge.
        </p>
        <p className="text-gray-700 mb-4">
          De filtercartridge bevat twee lagen actieve stoffen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Actief kool (geactiveerd koolstof):</strong> adsorbeert chloor, chloramines,
            pesticiden en organische verbindingen die smaak en geur bepalen. Effectiviteit voor
            chloor: 90%+.
          </li>
          <li>
            <strong>Ionenwisselaarhars:</strong> ruilt calciumionen (hardheid) en zware metalen
            zoals koper en zink uit voor natrium- of kaliumionen. Verlaagt de waterhardheid en
            vermindert kalkvorming in waterkokers en koffiemachines.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Populaire filterkans zijn de <strong>Brita Maxtra+</strong> (meest verkocht, breed
          leverbaar), de <strong>Aquaphor B200</strong> (300 liter capaciteit per cartridge, lage
          kosten per liter) en de <strong>BWT Penguin</strong> (voegt magnesium toe, geliefd bij
          koffie- en theedrinkers). Modellen variëren van 600 mL tot 3.500 mL reservoirinhoud.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een kraanfilter?
        </h2>
        <p className="text-gray-700 mb-4">
          Een kraanfilter (tap filter) schroeft direct op de kraan. De meeste modellen passen op
          standaard kraankranen van M22, M24 of M28; er worden adapters meegeleverd voor afwijkende
          maten. Installatie kost circa 2 minuten en vereist geen gereedschap.
        </p>
        <p className="text-gray-700 mb-4">
          Water stroomt onder waterleidingdruk door een compacte actief koolfiltermodule. De hogere
          druk en de dichtere filterstructuur zorgen voor een betere verwijdering van kleinere
          deeltjes vergeleken met filterkans die alleen op zwaartekracht werken.
        </p>
        <p className="text-gray-700 mb-6">
          Bekende kraanfilters zijn de <strong>TAPP 2 Twist</strong> (EU-gemaakt, gecertificeerd
          voor microplastics en farmaceutische stoffen, 600&ndash;1.200 liter per cartridge),
          de <strong>Brita On-Tap</strong> en de <strong>PUR Faucet Filter</strong>. Een
          schakelaar op de behuizing laat u wisselen tussen gefilterd en ongefilterd water voor
          taken zoals aardappels schillen of afwassen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: filterkan vs kraanfilter
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filterkan</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kraanfilter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Reservoirgrootte</td>
                <td className="border border-gray-300 px-3 py-2">600&ndash;3.500 mL</td>
                <td className="border border-gray-300 px-3 py-2">Direct (onbeperkt)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Doorstroomtijd</td>
                <td className="border border-gray-300 px-3 py-2">2&ndash;8 minuten</td>
                <td className="border border-gray-300 px-3 py-2">Direct</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filtercapaciteit</td>
                <td className="border border-gray-300 px-3 py-2">150&ndash;300 L per cartridge</td>
                <td className="border border-gray-300 px-3 py-2">600&ndash;1.200 L per cartridge</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Aanschafprijs</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;50</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25&ndash;80</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Prijs per cartridge</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5&ndash;15</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;30</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloorverwijdering</td>
                <td className="border border-gray-300 px-3 py-2">90%+</td>
                <td className="border border-gray-300 px-3 py-2">90%+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Microplastics</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt (&lt;20%)</td>
                <td className="border border-gray-300 px-3 py-2">Tot 80%+ (TAPP 2)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Farmaceutische stoffen</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Partieel (TAPP 2)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Installatie</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
                <td className="border border-gray-300 px-3 py-2">2 min, geen gereedschap</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Geschikt huurwoning</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterprestaties in detail
        </h2>
        <p className="text-gray-700 mb-4">
          Beide filtertypen verwijderen <strong>chloor voor 90%+</strong>, wat resulteert in beter
          smakend en minder naar chloor riekend drinkwater. Voor het verwijderen van hardheid
          (calciumcarbonaat) scoort een filterkan beter dankzij de ionenwisselaarhars &mdash; dit
          beschermt uw waterkoker en koffiemachine tegen kalk.
        </p>
        <p className="text-gray-700 mb-4">
          Het verschil wordt duidelijk bij <strong>microplastics</strong>: de TAPP 2 Twist kraanfilter
          is onafhankelijk gecertificeerd voor verwijdering van microplastics groter dan 1 micron met
          een efficiency van 80%+. Standaard filterkans zijn niet gecertificeerd voor microplastics en
          bereiken in tests minder dan 20% verwijdering. Wetenschappelijk onderzoek naar de
          gezondheidseffecten van microplastics in drinkwater is nog gaande, maar de EU en WHO
          monitoren dit actief.
        </p>
        <p className="text-gray-700 mb-6">
          Voor <strong>farmaceutische stoffen</strong> (residuen van hormonen, pijnstillers,
          antibiotica) biedt de TAPP 2 partieel verwijdering via zijn speciale filtermedium.
          Filterkans bieden hier geen significante verwijdering. Noch filterkans noch kraanfilters
          zijn echter effectief voor <strong>zware metalen</strong> zoals lood in hogere
          concentraties, PFAS of nitraat. Daarvoor is een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> nodig.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gebruiksgemak vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          De filterkan vraagt gedisciplineerd gebruik: u moet de kan regelmatig bijvullen, wachten
          tot het water doorgefiltreerd is (2&ndash;8 minuten) en de kan in de koelkast bewaren voor
          koud water. Bij een druk huishouden of hoog waterverbruik voor koken kan dit omslachtig
          worden.
        </p>
        <p className="text-gray-700 mb-4">
          Een kraanfilter levert altijd direct gefilterd water, ook voor grote hoeveelheden die
          nodig zijn bij het koken van pasta of soep. U hoeft niets bij te vullen of te wachten.
          Het nadeel is dat de filter fysiek op de kraan zit en niet overal even elegant oogt.
        </p>
        <p className="text-gray-700 mb-6">
          Qua <strong>waterverbruik</strong> zijn beide opties zuinig: een filterkan gebruikt
          geen extra water, en een kraanfilter verbruikt evenmin extra water (in tegenstelling tot
          een osmosefilter, dat 3&ndash;4 liter afvalwater produceert per liter gefilterd water bij
          oudere systemen).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kiest u een filterkan?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Klein verbruik (1&ndash;2 personen):</strong> bij laag dagelijks waterverbruik
            is een filterkan de voordeligste keuze.
          </li>
          <li>
            <strong>Koelkastwater:</strong> een filterkan in de koelkast geeft altijd fris, gekoeld
            water zonder dat u een koel- of dispensersysteem nodig heeft.
          </li>
          <li>
            <strong>Reizen en tijdelijk gebruik:</strong> een filterkan is compact en meeneembaar,
            handig voor vakantiehuisjes, campings of studentenwoningen.
          </li>
          <li>
            <strong>Budget:</strong> de aanschafprijs van een filterkan (15&ndash;30 euro) is de
            laagste drempel voor gefilterd drinkwater.
          </li>
          <li>
            <strong>Hardheidsreductie:</strong> bij zeer hard leidingwater (boven 20 &deg;dH)
            biedt de ionenwisselaarhars in een filterkan een effectieve manier om kalk te reduceren
            voor uw waterkoker of espressomachine.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kiest u een kraanfilter?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Groot verbruik (gezin 3+ personen):</strong> bij dagelijks koken en drinken
            wint een kraanfilter sterk op gemak; altijd direct beschikbaar water zonder wachttijd.
          </li>
          <li>
            <strong>Koken met gefilterd water:</strong> voor pasta, rijst, soepen en babyvoeding
            heeft u snel grote hoeveelheden gefilterd water nodig &mdash; een filterkan schiet dan
            tekort.
          </li>
          <li>
            <strong>Microplastics en farmaceutische stoffen:</strong> als u deze stoffen wilt
            reduceren, heeft een gecertificeerd kraanfilter zoals de TAPP 2 Twist duidelijk de
            voorkeur.
          </li>
          <li>
            <strong>Druk leven:</strong> geen gedoe met bijvullen of wachten; draaien aan de kraan
            en direct gefilterd water.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Zie ook onze uitgebreide gids over{' '}
          <Link href="/waterfilter/kan-vs-kraan" className="text-[#005F8A] underline">de vergelijking van filterkan en waterkraan-filter</Link>{' '}
          en het artikel over{' '}
          <Link href="/kraanwater/kwaliteit-verbeteren" className="text-[#005F8A] underline">kraanwaterkwaliteit verbeteren</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer zijn beide onvoldoende?
        </h2>
        <p className="text-gray-700 mb-4">
          Filterkans en kraanfilters bieden een goede basisfiltering voor smaak, geur en
          microplastics, maar schieten tekort bij ernstige verontreinigingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Lood in leidingwerk:</strong> woningen van voor 1960 kunnen loden leidingen
            hebben. Actief kool filtert lood slechts partieel. Een osmosefilter verwijdert 95&ndash;99%.
          </li>
          <li>
            <strong>PFAS (eeuwige chemicalien):</strong> PFAS worden niet effectief verwijderd door
            standaard filterkans of kraanfilters. Een osmosefilter of gespecialiseerd PFAS-filter is
            noodzakelijk.
          </li>
          <li>
            <strong>Nitraat:</strong> bij eigen waterputten of in landbouwgebieden kan nitraat de
            EU-norm van 50 mg/L overschrijden. Alleen omgekeerde osmose of ionenwisseling verwijdert
            nitraat effectief.
          </li>
          <li>
            <strong>Arseen, chroom VI:</strong> zware metalen uit geologische bronnen of
            industriele verontreiniging vereisen een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmose installatie</Link>.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Als u twijfelt over uw waterkwaliteit, laat dan een{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link>{' '}
          uitvoeren voordat u een filteroplossing kiest.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over filterkan en kraanfilter
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
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link> en{' '}
          <Link href="/kraanwater/kwaliteit-verbeteren" className="text-[#005F8A] underline">kraanwaterkwaliteit verbeteren</Link>.
        </p>
      </main>
    </>
  );
}
