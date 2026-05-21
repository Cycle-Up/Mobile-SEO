import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater voor espresso: de perfecte watersamenstelling voor baristas',
  description: 'Voor espresso is de watersamenstelling cruciaal: TDS 75-150 mg/L, hardheid 50-100 mg/L CaCO3, pH 6,5-7,5. Ontdek hoe osmosewater + remineralisatie de.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/espresso' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk water is het beste voor espresso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het beste espressowater heeft een TDS van 75-150 mg/L (ideaal 125 mg/L), een totale hardheid van 50-100 mg/L als CaCO3 (bij voorkeur als bicarbonaten), een pH van 6,5-7,5, maximaal 25 mg/L chloride en maximaal 10 mg/L natrium. Osmosewater aangevuld met een magnesium-bicarbonaat remineralisatie of een kant-en-klare espressomineraalmix (zoals Third Wave Water) komt het dichtst bij dit ideaal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is TDS en waarom is het belangrijk voor espresso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDS staat voor Total Dissolved Solids: de totale hoeveelheid opgeloste vaste stoffen in water, gemeten in mg/L of ppm. Bij espresso bepaalt de TDS voor een groot deel de extractie-efficiëntie. Te laag TDS (onder 75 mg/L) leidt tot vlakke, zure espresso met weinig body. Te hoog TDS (boven 250 mg/L) geeft bittere, overgeextraheerde espresso. De SCA richtlijn van 75-150 mg/L is het werkgebied waar de meeste espressorecepten geoptimaliseerd zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom mag ik geen ongemineraliseerd osmosewater gebruiken in mijn espressomachine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puur osmosewater (TDS &lt; 10 mg/L) mist de mineralen die nodig zijn als smaakbuffer en extractiemiddel. Het resultaat is een espresso die vlak, zuur en bitter smaakt door te snelle zuurextractie zonder carbonaatbuffering. Bovendien is sterk gedemineraliseerd water corrosief voor metalen boilercomponenten. Het water zoekt actief mineralen en lost ze op uit de machine, wat op termijn corrosie en lekkage veroorzaakt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen hardheid en TDS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hardheid verwijst specifiek naar de concentratie van calcium- en magnesiumionen, uitgedrukt in mg/L CaCO3, graden dH of mmol/L. TDS meet alle opgeloste stoffen samen: mineralen, zouten, metalen en organische verbindingen. Water kan een hoge TDS hebben maar relatief zachte hardheid (natriumrijk water) of omgekeerd. Voor espresso is de verhouding bicarbonaat-hardheid (KH) het kritiekst omdat bicarbonaten de zuurgraad bufferen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe remineraliseer ik osmosewater voor espresso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest gebruikte methode is een magnesium-bicarbonaat concentrate (Mg(HCO3)2), die u toevoegt aan osmosewater. Thuis kunt u dit maken door magnesiumhydroxide-poeder (bijv. 0,25 g per liter) in water op te lossen en CO2 te injecteren. Eenvoudiger zijn kant-en-klare sachets zoals Third Wave Water (speciaal voor espresso). Alternatively: gebruik een remineralisatiecartridge in uw osmosesysteem of meng osmosewater 1:1 tot 1:3 met gefilterd kraanwater afhankelijk van de waterhartheid in uw regio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Beschadigt hard leidingwater mijn espressomachine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, hard leidingwater (boven 15 dH, wat overeenkomt met circa 267 mg/L CaCO3) veroorzaakt kalkafzetting in de boiler van uw espressomachine. Dit leidt tot smaakverandering omdat oud kalk afbladdert in het water, beschadiging van de pomp door verhoogde weerstand, verkorting van de levensduur van verwarmingselementen en reparatiekosten bij merken als Breville, De&apos;Longhi en La Marzocco. Regelmatig ontkalkken is noodzakelijk, maar osmosewater met correcte remineralisatie voorkomt kalkvorming volledig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik gefilterd kraanwater gebruiken voor espresso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van uw regio. In Nederland is het kraanwater in Amsterdam, Utrecht en Rotterdam relatief zacht (6-12 dH) en geschikt voor espresso na filteren van chloor via een koolstoffilter. In Limburg en delen van Noord-Brabant is het water hard (20-30 dH) en zorgt gefilterd kraanwater nog steeds voor kalkproblemen. Controleer de TDS en hardheid van uw kraanwater en gebruik osmosewater + remineralisatie als de hardheid hoger dan 15 dH is.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater voor espresso: de perfecte watersamenstelling voor baristas',
  description: 'Voor espresso is de watersamenstelling cruciaal: TDS 75-150 mg/L, hardheid 50-100 mg/L CaCO3, pH 6,5-7,5. Ontdek hoe osmosewater + remineralisatie de.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/espresso',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterEspressoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater voor espresso', item: 'https://waterfilterplatform.nl/osmose-water/espresso' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/osmose-water" className="hover:underline">Osmosewater</a> &rsaquo;{' '}
          <span>Osmosewater voor espresso</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater voor espresso: de perfecte watersamenstelling voor baristas
          </h1>
          <p className="text-gray-700 text-lg">
            Water is 98% van een espresso. De watersamenstelling bepaalt de extractiesnelheid, de smaakbalans en de levensduur van uw machine. Puur osmosewater is niet ideaal, maar osmosewater met de juiste remineralisatie geeft de meest consistente en smakelijke espresso.
          </p>
        </section>

        <QuickAnswer answer="Voor perfecte espresso gebruikt u osmosewater met remineralisatie: TDS 75-150 mg/L, bicarbonaat-hardheid 50-100 mg/L CaCO3, pH 6,5-7,5. Puur osmosewater zonder mineralen geeft vlakke, zure espresso en beschadigt de boiler. Voeg magnesium-bicarbonaat toe of gebruik kant-en-klare espressomineralen zoals Third Wave Water." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          SCA-richtlijnen voor espressowater
        </h2>
        <p className="text-gray-700 mb-4">
          De Specialty Coffee Association (SCA) heeft evidence-based richtlijnen opgesteld voor de optimale watersamenstelling voor koffiezetten. Voor espresso gelden specifieke waarden die iets afwijken van die voor filterkoffie, omdat de hoge extractiedruk van 9 bar de impact van de waterchemie vergroot.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">SCA minimum</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">SCA ideaal</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">SCA maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">TDS (totaal opgeloste stoffen)</td>
                <td className="border border-gray-300 px-3 py-2">75 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-[#003F5C]">125 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">150 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Totale hardheid (als CaCO3)</td>
                <td className="border border-gray-300 px-3 py-2">50 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-[#003F5C]">75 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">100 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">pH</td>
                <td className="border border-gray-300 px-3 py-2">6,5</td>
                <td className="border border-gray-300 px-3 py-2 font-semibold text-[#003F5C]">7,0</td>
                <td className="border border-gray-300 px-3 py-2">7,5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloride (Cl-)</td>
                <td className="border border-gray-300 px-3 py-2">&mdash;</td>
                <td className="border border-gray-300 px-3 py-2">&lt; 25 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">25 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Natrium (Na+)</td>
                <td className="border border-gray-300 px-3 py-2">&mdash;</td>
                <td className="border border-gray-300 px-3 py-2">&lt; 10 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">10 mg/L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom is espresso water-gevoeliger dan gewone koffie?
        </h2>
        <p className="text-gray-700 mb-4">
          Bij een standaard filterkoffie passeert het water de koffie bij atmosferische druk en een contacttijd van 4 tot 6 minuten. Bij espresso werkt een pomp met 9 bar druk en is de contacttijd slechts 25 tot 30 seconden. De hoge druk vergroot de extractie-efficiëntie enorm: smaakstoffen, zuren en bitters worden in een fractie van de tijd geextraheerd.
        </p>
        <p className="text-gray-700 mb-4">
          Dit maakt espresso bijzonder gevoelig voor afwijkingen in de waterchemie. Een TDS van 200 mg/L is bij filterkoffie acceptabel, maar leidt bij espresso tot overextractie en bitterheid. Een te lage bicarbonaat-hardheid die bij filterkoffie een subtiele zurige smaak geeft, resulteert bij espresso in een scherp onaangename zuurheid.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Problemen met hard leidingwater bij espresso
        </h2>
        <p className="text-gray-700 mb-4">
          Hard leidingwater (meer dan 15 dH) veroorzaakt kalkafzetting in de boiler van uw espressomachine. Dit heeft meerdere gevolgen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Smaakverandering</strong>: afgebladderd kalk lost op in het water en geeft een krijtige, metaalachtige bijsmaak</li>
          <li><strong>Pompslijtage</strong>: kalk verhoogt de hydraulische weerstand, de pomp werkt harder en slijt sneller</li>
          <li><strong>Boilerschade</strong>: bij hoog-end machines als La Marzocco, Rocket Espresso en Profitec kan kalk de thermoblock of boiler permanent beschadigen</li>
          <li><strong>Bij Breville en De&apos;Longhi</strong>: de ingebouwde waterontharderpatroon (BRITA Intenza of vergelijkbaar) verlengt de levensduur maar vervangt geen osmosekwaliteit</li>
        </ul>
        <p className="text-gray-700 mb-6">
          In Nederland zijn de hardste watergebieden Limburg (tot 30 dH), Zeeland en delen van Noord-Brabant. Amsterdamse baristas hebben het geluk dat het water daar slechts 7-8 dH hardheid heeft.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Problemen met puur osmosewater (zonder remineralisatie)
        </h2>
        <p className="text-gray-700 mb-4">
          Puur osmosewater heeft een TDS onder de 10 mg/L. Dit klinkt ideaal voor een schone koffiesmaak, maar leidt in de praktijk tot ernstige smaakvervlakking:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Vlakke, waterige smaak</strong>: mineralen zijn de dragers van aroma en smaakcomplexiteit in espresso</li>
          <li><strong>Overmatige zuurheid</strong>: zonder bicarbonaten als buffer worden zuren in het koffiezetsel te snel en te volledig geextraheerd</li>
          <li><strong>Bitterheid</strong>: lage bufferwerking leidt tot ongebalanceerde extractie</li>
          <li><strong>Corrosie van metaal</strong>: sterk gedemineraliseerd water is agressief voor koperen en roestvrijstalen componenten in de boiler</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineralisatieoplossingen specifiek voor espresso
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Magnesium-bicarbonaat mengsel (meest gebruikt door baristas)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Magnesiumbicarbonaatoplossing (Mg(HCO3)2) is de favoriete remineralisatiemethode in de specialty coffee wereld. Het levert zowel de gewenste bicarbonaat-alkaliniteit (voor pH-buffering) als magnesium (voor smaakextractie). U maakt het zelf door magnesiumhydroxide-poeder in osmosewater op te lossen en koolzuurgas (CO2) te injecteren, of via kant-en-klare concentraten. De verhouding past u aan op basis van TDS-meting totdat u 75-125 mg/L bereikt.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Mineraalblokjes / remineralisatiepatroon</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Sommige osmosesystemen zijn uitgerust met een remineralisatiepatroon als laatste filterstap. Dit voegt calcium, magnesium en bicarbonaten toe aan het osmosewater. Het resulterende water is geschikt voor espresso, al is de exacte mineraalsamenstelling minder instelbaar dan bij de do-it-yourself methode. BRITA Purity C-patronen worden door de professionele horeca ingezet als compromis tussen filterkwaliteit en espressoprestatie.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Blending: osmose mengen met kraanwater</h3>
            </div>
            <p className="text-gray-700 text-sm">
              In harde watergebieden is een praktische aanpak het mengen van osmosewater met gefilterd kraanwater in een verhouding van 1:1 of 1:3 (osmose:kraanwater). Dit verlaagt de totale hardheid en TDS tot het gewenste bereik terwijl u nog steeds profiteert van de verwijdering van PFAS, lood en bacterien door het osmosefilter. Meet de TDS van het mengsel met een goedkope TDS-meter totdat u 100-150 mg/L bereikt.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Kant-en-klare espressomineralen (Third Wave Water)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Third Wave Water sachets zijn voorgemengde mineralenpakketten die u toevoegt aan 1 liter osmosewater. Ze zijn geformuleerd om exact de SCA-richtlijnen te benaderen en zijn beschikbaar in varianten voor espresso en filterkoffie. Handig voor thuis, maar relatief duur per liter vergeleken met een remineralisatiepatroon. Ideaal als startpunt om de smaakimpact van watermineralen te begrijpen voordat u investeert in een vast systeem.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Espresso vs pourover vs filterkoffie: andere TDS-targets
        </h2>
        <p className="text-gray-700 mb-4">
          Niet alle koffiebereidingswijzen gebruiken dezelfde waterparameters. Espresso wil lagere carbonaat-hardheid dan filterkoffie omdat bicarbonaten bij hoge druk anders reageren:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Espresso</strong>: TDS 75-150 mg/L, KH (bicarbonaat-hardheid) 50-75 mg/L als CaCO3. Lagere KH voorkomt bitterheid door overgebufferde zuurremmende extractie</li>
          <li><strong>Pourover / V60</strong>: TDS 100-150 mg/L, iets hogere KH acceptabel (75-100 mg/L) omdat de extractie langzamer verloopt</li>
          <li><strong>Filterkoffie (druppelfilter)</strong>: TDS 125-175 mg/L, KH tot 100 mg/L CaCO3. Hogere TDS en hardheid geven meer body bij lange extractions</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Hetzelfde remineraliseerde osmosewater werkt voor meerdere bereidingsmethoden, maar de optimale instelling verschilt. Baristas die zowel espresso als filterkoffie zetten, kiezen vaak voor het middenbereik (TDS circa 125 mg/L, KH 65 mg/L).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: watersoorten voor espresso
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Watersoort</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">TDS</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Kalk</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Smaak</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Machine</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kraanwater hard (&gt;20 dH)</td>
                <td className="border border-gray-300 px-3 py-2 text-center">Hoog</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">Veel</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">Bitter</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">Schade</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Kraanwater zacht (7-12 dH)</td>
                <td className="border border-gray-300 px-3 py-2 text-center">Middel</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-yellow-600">Weinig</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-yellow-600">Acceptabel</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-yellow-600">OK</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Gefilterd kraanwater (koolstof)</td>
                <td className="border border-gray-300 px-3 py-2 text-center">Middel</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-yellow-600">Weinig</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-yellow-600">Goed</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-yellow-600">OK</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmose zonder remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2 text-center">Laag</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-600">Geen</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">Vlak/zuur</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">Corrosief</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmose met remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2 text-center">Ideaal</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-600">Geen</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-600">Excellent</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-600">Optimaal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Lees meer over osmosewater in onze gidsen over{' '}
          <Link href="/osmose-water/koffie" className="text-[#005F8A] underline">osmosewater voor koffie</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en het{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater overzicht</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterfilter/koffiezetter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor koffiezetter</h3>
            <p className="text-sm text-gray-600">Welk waterfilter verbetert de kwaliteit van uw koffiezetter?</p>
          </Link>
          <Link href="/osmose-water/koffie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater voor koffie</h3>
            <p className="text-sm text-gray-600">Hoe osmosewater de smaak van uw koffie beinvloedt en verbetert.</p>
          </Link>
          <Link href="/osmose-water/mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in osmosewater</h3>
            <p className="text-sm text-gray-600">Welke mineralen zitten in osmosewater en wat is hun invloed op smaak?</p>
          </Link>
          <Link href="/waterhardheid/effect-op-koffie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid en koffie</h3>
            <p className="text-sm text-gray-600">Hoe waterhardheid de smaak en kwaliteit van uw koffie beinvloedt.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over osmosewater voor espresso</h2>
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
          <Link href="/osmose-water/koffie" className="text-[#005F8A] underline">osmosewater voor koffie</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater overzicht</Link>.
        </p>
      </main>
    </>
  );
}
