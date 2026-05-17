import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosefilter voor brak water en bronwater: capaciteit en installatie',
  description:
    'Een osmosefilter geschikt voor brak water (TDS 1000-10.000 mg/L) heeft hogere werkdruk (10-20 bar) dan een thuissysteem. Geschikt voor boot, vakantiewoning.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/zout-water' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan een thuisosmosefilter brak water zuiveren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Een standaard thuisosmosefilter is ontworpen voor leidingwater met TDS tot circa 500 mg/L en werkt bij drukken van 4-8 bar. Brak water (TDS 1.000-10.000 mg/L) vereist werkdrukken van 10-20 bar en speciale brakwatermembranen. Het gebruik van een thuissysteem op brak water beschadigt het membraan en levert onvoldoende waterkwaliteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het TDS-gehalte van Waddenzeewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het TDS-gehalte van Waddenzeewater varieert van circa 5.000 tot 15.000 mg/L afhankelijk van de locatie en het getij. Het Waddenzeegebied is brak tot licht zout, maar minder zout dan de Noordzee (circa 35.000 mg/L TDS). Voor boten in de Waddenzee zijn brakwaterwatermakers geschikt (10-20 bar werkdruk), niet de zwaardere zeewater-desalinisatie-systemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is regenwater geschikt voor een standaard osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regenwater heeft een laag TDS (1-15 mg/L), wat gunstig is voor osmose. Echter, regenwater van dakopvang bevat bacterien, algen, zware metalen (van dakbedekking) en pollen. Een standaard thuisosmosefilter is technisch geschikt voor de druk, maar UV-desinfectie is essentieel. Voeg altijd een sedimentfilter (5 micron) toe als voorfilter en gebruik UV na de osmosestap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost een watermaker voor een boot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een betrouwbare watermaker voor een boot kost tussen 2.000 en 8.000 euro afhankelijk van capaciteit (30-100 liter per uur) en vermogensbron (12V DC of 230V AC). Goedkopere modellen (onder 1.000 euro) zijn doorgaans minder betrouwbaar voor langdurig gebruik op zee. Bekende merken zijn Spectra (energie-efficient, 12V), Katadyn en Schenker. Onderhoud en membraanvervanging (circa 300-600 euro per 3-5 jaar) komen bovenop de aanschafprijs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een zeewater- en brakwatermembraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een zeewater-RO-membraan (SWRO) is ontworpen voor TDS tot 35.000 mg/L en vereist drukken van 55-70 bar. Een brakwatermembraan (BWRO) werkt bij 10-20 bar voor TDS tot 10.000 mg/L. SWRO-membranen hebben een hogere afwijzingsgraad maar lager debiet bij lagere drukken. Het gebruik van het verkeerde membraantype resulteert in onvoldoende wateropbrengst of premature membraandegradatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe onderhoud ik een watermaker na gebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na gebruik in zout of brak water spoelt u de watermaker minimaal 5-10 minuten door met zoet water om zoutophoping in het membraan te voorkomen. Bij opslag langer dan een week conserveert u het membraan met een biocide-oplossing (natriummetabisulfiet 1%). Bij langdurige opslag (seizoen) verwijdert u het membraan en bewaart u het in conserveringsvloeistof in een afgesloten zak in de koelkast.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is brak grondwater een probleem in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, brak grondwater komt voor in kustregio\'s van Nederland, met name in Zeeland, Zuid-Holland (poldergebieden onder NAP) en Noord-Holland. Historisch zijn kustgebieden gevoelig voor zoutwaterindringing in grondwaterlagen, versterkt door bodemdaling en klimaatverandering. Particulieren met een eigen bron in deze gebieden kunnen brak grondwater aantreffen met TDS van 1.000-5.000 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke druk is nodig voor een osmosefilter op brak water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De minimale werkdruk voor een brakwaterosmosefilter bedraagt 10-15 bar voor TDS rond 5.000 mg/L, en 15-20 bar voor TDS tot 10.000 mg/L. Dit is significant hoger dan de osmotische druk van leidingwater (0,5-1 bar bij TDS 200-500 mg/L). Een boosterpump is altijd nodig; standaard leidingwaterdruk (3-6 bar) volstaat niet voor brakwaterzuivering.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosefilter voor brak water en bronwater: capaciteit en installatie',
  description:
    'Een osmosefilter geschikt voor brak water (TDS 1.000-10.000 mg/L) heeft hogere werkdruk (10-20 bar) dan een thuissysteem. Geschikt voor boot, vakantiewoning.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/zout-water',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseZoutWaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Osmose voor brak water', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/zout-water' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link> &rsaquo;{' '}
          <span>Osmose voor brak water</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosefilter voor brak water en bronwater: capaciteit en installatie
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een standaard thuisosmosefilter is ontworpen voor leidingwater en niet geschikt voor
            brak water, zoutwater of regenwater van dakopvang zonder aanpassingen. Voor boot,
            vakantiewoning op eigen bron of kustnabij grondwater zijn speciale brakwaterwatermakers
            of hogere druksystemen nodig.
          </p>
        </section>

        <QuickAnswer answer="Brak water (TDS 1.000-10.000 mg/L) vereist osmosesystemen met werkdruk 10-20 bar en speciale brakwatermembranen. Een thuissysteem volstaat niet. Watermakers voor boten kosten 2.000-8.000 euro. Regenwater heeft lage TDS maar vereist UV-desinfectie. Zeewater (TDS 35.000 mg/L) vereist 55-70 bar en is alleen voor professionele systemen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Leidingwater vs brak water vs zeewater: TDS en osmotische druk
        </h2>
        <p className="text-gray-700 mb-4">
          De kern van omgekeerde osmose is het overwinnen van de osmotische druk van het te zuiveren
          water. Die osmotische druk is direct gerelateerd aan het TDS-gehalte (Total Dissolved
          Solids). Het verschil tussen watersoorten is enorm:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Watertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">TDS (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmotische druk</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Benodigde werkdruk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Leidingwater (NL)</td>
                <td className="border border-gray-300 px-3 py-2">200&ndash;500 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">0,5&ndash;1 bar</td>
                <td className="border border-gray-300 px-3 py-2">4&ndash;8 bar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Brak water</td>
                <td className="border border-gray-300 px-3 py-2">1.000&ndash;10.000 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;8 bar</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;20 bar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeewater (Noordzee)</td>
                <td className="border border-gray-300 px-3 py-2">30.000&ndash;35.000 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">ca. 27 bar</td>
                <td className="border border-gray-300 px-3 py-2">55&ndash;70 bar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Waddenzeewater</td>
                <td className="border border-gray-300 px-3 py-2">5.000&ndash;15.000 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">4&ndash;10 bar</td>
                <td className="border border-gray-300 px-3 py-2">10&ndash;25 bar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Een standaard thuissysteem (4-8 bar werkdruk) is ontworpen voor leidingwater en zal bij
          brak water onvoldoende druk leveren voor adequate zuivering. Het membraan wordt sneller
          vervuild en de waterkwaliteit blijft onvoldoende.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Toepassingen van brakwaterontzouting in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Hoewel brak water voor de meeste Nederlanders geen dagelijkse realiteit is, zijn er
          specifieke situaties waarbij brakwaterontzouting relevant is:
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-3">Boot en jacht</h3>
        <p className="text-gray-700 mb-4">
          Zeilers en motorbootbezitters die in de Waddenzee, de Zeeuwse wateren of op zee varen
          hebben behoefte aan eigen drinkwaterproductie. Het Waddenzeewater heeft een TDS van
          5.000-15.000 mg/L en vereist een brakwaterwatermaker. Op de Noordzee of in de oceaan
          is een volwaardige zeewaterwatermaker nodig.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-3">
          Vakantiewoning op eigen bron in kustregio
        </h3>
        <p className="text-gray-700 mb-4">
          In kustprovincies zoals Zeeland, Zuid-Holland en Noord-Holland kan grondwater brak zijn
          door zoutwaterindringing. Dit is een groeiend probleem door bodemdaling en stijging van
          de zeespiegel. Particulieren met een eigen waterput in deze gebieden kunnen TDS-waarden
          meten van 1.000-5.000 mg/L, waarbij een brakwaterosmosesysteem noodzakelijk is voor
          veilig drinkwater.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-3">Regenwater opvang</h3>
        <p className="text-gray-700 mb-6">
          Regenwater heeft een laag TDS (1-15 mg/L) maar bevat na opvang van een dakoppervlak
          verschillende verontreinigingen: bacterien en schimmels, algen, zware metalen van
          dakbedekking (lood, zink van dakgoten), pollen en fijn stof. Voor drinkwatergebruik
          is een standaard thuisosmosefilter technisch voldoende qua druk, maar aanvullende
          UV-desinfectie is essentieel vanwege de microbiologische belasting.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Watermakers voor boot: specificaties en merken
        </h2>
        <p className="text-gray-700 mb-4">
          Een <strong>watermaker</strong> is een compacte omgekeerde-osmose-installatie die speciaal
          is ontworpen voor gebruik op boten en jachten. De specificaties die relevant zijn bij
          aanschaf:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Capaciteit:</strong> 30-100 liter per uur voor recreatieve jachten; grotere
            systemen voor professioneel gebruik of zeereizen
          </li>
          <li>
            <strong>Vermogensbron:</strong> 12V DC (geschikt voor accu-installatie op zeilboot,
            energiezuinig) of 230V AC (hoger debiet, vereist generator of netstroom)
          </li>
          <li>
            <strong>Membraantype:</strong> brakwatermembraan (BWRO) voor Waddenzee en Zeeuwse
            wateren; zeewatermembraan (SWRO) voor oceaanvaren
          </li>
          <li>
            <strong>Automatische spoelfunctie:</strong> spuit het membraan na gebruik automatisch
            door met zoet water, wat de levensduur van het membraan verlengt
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Bekende merken voor bootwatermakers:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Spectra:</strong> marktleider in 12V energiezuinige watermakers; energieterugwinning
            maakt ze ideaal voor zeilboten zonder generator. Prijs 3.000-7.000 euro
          </li>
          <li>
            <strong>Katadyn:</strong> brede lijn van drinkwatersystemen voor boot en outdoor.
            PowerSurvivor-serie voor 12V gebruik. Prijs 1.500-4.000 euro
          </li>
          <li>
            <strong>Schenker:</strong> Italiaans merk met energieterugwinning vergelijkbaar met
            Spectra. Bekend om betrouwbaarheid op lange oceaantochten. Prijs 2.500-6.000 euro
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regenwater zuiveren met osmose: correcte aanpak
        </h2>
        <p className="text-gray-700 mb-4">
          Regenwater als drinkwaterbron vereist een meertraps aanpak vanwege de microbiologische
          belasting en mogelijke zware metalen van het dakoppervlak:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Firstflush-aftapper:</strong> de eerste 10-20 liter na een regenbui bevat de
            hoogste concentraties stof en bacterien van het dakooppervlak. Een firstflush-systeem
            verwijdert deze automatisch
          </li>
          <li>
            <strong>Sedimentfilter 5 micron:</strong> verwijdert deeltjes, bladresten en pollen
            voor de osmosestap
          </li>
          <li>
            <strong>Osmosefilter (standaard thuissysteem):</strong> verwijdert zware metalen,
            opgeloste stoffen en eventuele chemische verontreinigingen. Het lage TDS van regenwater
            maakt hogere druk niet noodzakelijk
          </li>
          <li>
            <strong>UV-desinfectie na osmose:</strong> essentieel voor verwijdering van bacterien
            en virussen die door het membraan zijn gegaan. Bij regenwater is de microbiologische
            belasting hoger dan bij leidingwater
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Lees meer over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">hoe een osmosefilter werkt</Link>{' '}
          en de bijbehorende{' '}
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">onderhoudsvereisten voor osmosesystemen</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Thuissysteem aanpassen voor brak water: wat u NIET moet doen
        </h2>
        <p className="text-gray-700 mb-4">
          Het is verleidelijk om een bestaand thuisosmosefilter te gebruiken op brak bronwater, maar
          dit leidt tot meerdere problemen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Onvoldoende drukverschil:</strong> de ingebouwde boosterpump van thuissystemen
            (4-8 bar) is niet sterk genoeg om de osmotische druk van brak water (1-8 bar) te
            overwinnen met voldoende marge. Het resultaat is een laag waterrendement en slechte
            zuivering
          </li>
          <li>
            <strong>Membraanschade door hoge TDS:</strong> standaard Thin Film Composite (TFC)
            membranen voor leidingwater zijn niet berekend op hoge zoutconcentraties. Hoge TDS
            veroorzaakt osmotische stress en versnelde degradatie van het membraanmateriaal
          </li>
          <li>
            <strong>Fouling:</strong> brak water bevat hogere concentraties kalk, ijzer en
            biologisch materiaal die het membraan veel sneller verstoppen dan leidingwater
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Kies altijd een systeem dat gecertificeerd is voor het TDS-niveau van uw waterbron. Laat
          uw bronwater eerst analyseren met een{' '}
          <Link href="/leidingwater/hardheid-meten" className="text-[#005F8A] underline">TDS-meting en wateranalyse</Link>{' '}
          voordat u een systeem aanschaft.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud van een watermaker
        </h2>
        <p className="text-gray-700 mb-4">
          Regelmatig en correct onderhoud is cruciaal voor de levensduur van een watermaker,
          met name bij gebruik in zout of brak water:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Na elk gebruik:</strong> spoel het systeem 5-10 minuten door met zoet water
            om zoutresiduen uit het membraan te verwijderen
          </li>
          <li>
            <strong>Bij opslag langer dan een week:</strong> conserveer het membraan met
            natriummetabisulfiet (1-2% oplossing) om bacteriegroei te voorkomen
          </li>
          <li>
            <strong>Seizoensopslag:</strong> verwijder het membraan en bewaar in conserveringsvloeistof
            in een afgesloten zak. Opslag in de koelkast (niet vriezen) verlengt de houdbaarheid
          </li>
          <li>
            <strong>Membraanvervanging:</strong> elke 3-5 jaar bij normaal gebruik in brak water;
            sneller bij hoge TDS of onvoldoende nazorg
          </li>
          <li>
            <strong>Filters vervangen:</strong> sedimentfilters en koolstofprefilters elke
            6-12 maanden, afhankelijk van gebruik en waterkwaliteit
          </li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosefilters voor brak en zout water
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">onderhoud osmosefilter</Link>,{' '}
          <Link href="/leidingwater/hardheid-meten" className="text-[#005F8A] underline">waterhardheid meten</Link> en{' '}
          <Link href="/omgekeerde-osmose/membraan-vervangen" className="text-[#005F8A] underline">membraan vervangen</Link>.
        </p>
      </main>
    </>
  );
}
