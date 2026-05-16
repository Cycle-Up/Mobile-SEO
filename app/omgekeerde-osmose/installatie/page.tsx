import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Omgekeerde osmose installeren: stap-voor-stap gids',
  description:
    'Een omgekeerde osmosefilter zelf installeren duurt 1-2 uur en vereist geen loodgieter. Lees de volledige installatiegids: benodigde gereedschappen, wateraansluiting, kraantje boren en eerste gebruik.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/installatie' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel waterdruk heb ik nodig voor een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een omgekeerde osmosefilter heeft minimaal 2,5 bar waterdruk nodig. De optimale werkdruk ligt tussen 3 en 5 bar. Bij een lagere druk produceert het membraan minder zuiver water en stijgt de verhouding afvalwater. Meet de druk met een drukmeter op het insteekventiel. Bij te lage druk is een pompbooster te overwegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik als er lekkage optreedt na installatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Controleer alle John Guest snelkoppelingen: de slang moet volledig ingeklikt zijn (voelbare klik). Draai de filterhuizingen stevig aan met de bijgeleverde sleutel. Controleer de Teflon tape op de draadverbindingen. Laat de installatie 30 minuten onder druk staan met een droge doek eronder om kleine lekkages te detecteren. Sluit bij ernstige lekkage direct de hoofdkraan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom moet ik de eerste vulling weggooien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een nieuwe installatie bevatten de filters conserveringsmiddelen en koolstofstof. Door de eerste tank (2-3 uur vullen) volledig af te tappen worden alle filters grondig gespoeld. Het water in de eerste vulling is niet schadelijk, maar smaakt naar actieve kool. Na de tweede vulling is het osmosewater klaar voor consumptie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke druk moet de druktank hebben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een lege druktank moet een luchtdruk hebben van 0,3 tot 0,5 bar. Meet dit met een bandenspanningsmeter op het luchtventiel aan de onderkant van de tank. Is de druk te hoog, laat dan lucht af. Is de druk te laag (of nul), pomp dan bij met een fietspomp. Een correct ingestelde druk zorgt voor een goede waterleveringsdruk aan de kraan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel ruimte heb ik nodig onder de gootsteen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard osmose-unit (3 of 4 filterhuizingen) heeft een hoogte van 35-45 cm en een breedte van 25-35 cm nodig. De druktank (6-12 liter) is cilindrisch en heeft een diameter van 20-28 cm en hoogte van 35-50 cm. Bij beperkte ruimte zijn er smalle modellen en liggende druktanks beschikbaar. Meet de beschikbare ruimte voor aankoop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik een osmosefilter installeren in een huurwoning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste huurwoningen is een osmosefilter toegestaan mits u geen permanente wijzigingen aanbrengt aan de leidingen. Het gebruik van een insteekventiel (saddle valve) op de koude waterleiding is in principe verwijderbaar. Sommige verhuurders vereisen echter toestemming, met name voor het boren van het kraangat in de spoelbak. Controleer uw huurcontract en vraag bij twijfel schriftelijke toestemming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het ASO-ventiel en waarvoor dient het?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het ASO-ventiel (automatisch afsluitventiel) detecteert wanneer de druktank vol is en stopt dan de watertoevoer naar het membraan. Zonder ASO-ventiel blijft het systeem continu water produceren (en afvoeren), wat leidt tot onnodig waterverbruik en slijtage van het membraan. Controleer na installatie of het ASO-ventiel werkt: het systeem moet stoppen met geluid zodra de tank vol is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik een loodgieter inschakelen voor osmose installatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schakel een loodgieter in als: de koudwaterleiding achter muurwerk loopt en niet bereikbaar is, er onvoldoende ruimte is voor een correct insteekventiel, u het koppelen van de afvoerslang aan de sifon niet vertrouwt, of als uw huurwoning strikte voorwaarden stelt. De installatiekosten bedragen doorgaans 60-120 euro per uur; gemiddeld 1-2 uur werk.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Omgekeerde osmose installeren: stap-voor-stap gids',
  description:
    'Een omgekeerde osmosefilter zelf installeren duurt 1-2 uur en vereist geen loodgieter. Volledige gids: benodigde gereedschappen, wateraansluiting, kraantje boren en eerste gebruik.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/installatie',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseInstallatiePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Installatie', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/installatie' },
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
          <span>Installatie</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose installeren: stap-voor-stap gids
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een omgekeerde osmosefilter zelf installeren is goed te doen voor een doe-het-zelver.
            Met de juiste gereedschappen en deze stap-voor-stap gids bent u klaar in 1 tot 2 uur,
            zonder dat u een loodgieter nodig heeft.
          </p>
        </section>

        <QuickAnswer answer="Een osmosefilter installeren duurt 1-2 uur en vereist geen loodgieter. U heeft een insteekventiel op de koude waterleiding nodig, een afvoerklem op de sifon en een boorgat van 12 mm in de spoelbak voor het aparte kraantje. Gooi de eerste tankinhoud weg om de filters te spoelen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat heeft u nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Zorg dat u alle onderdelen en gereedschappen bij de hand heeft voor u begint.
          De meeste osmosesystemen worden geleverd met een basispakket aan slangen en koppelingen,
          maar controleer uw doos op volledigheid.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Onderdelen (inbegrepen bij de meeste systemen)</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Osmose-unit</strong> met sedimentfilter, koolstofprefilter en membraanhuizing</li>
          <li><strong>Aparte osmose-kraan</strong> voor aan de spoelbak of het aanrecht</li>
          <li><strong>Druktank</strong> (6-12 liter) met interne membraan en luchtventiel</li>
          <li><strong>John Guest snelkoppelingen</strong> (1/4" standaard), kleurgecodeerde slangen</li>
          <li><strong>Insteekventiel</strong> (saddle valve) voor de koude waterleiding</li>
          <li><strong>Afvoerklem</strong> voor op de sifonpijp</li>
          <li><strong>ASO-ventiel</strong> (automatisch afsluitventiel) om de tank bij volledigheid af te sluiten</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-4 mb-3">Gereedschappen die u zelf nodig heeft</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Inbussleutelset (voor het kraantje en filterhuizingen)</li>
          <li>Boorhamer met klemboor 12 mm (voor het kraangat in de spoelbak)</li>
          <li>Teflon tape (voor draadverbindingen)</li>
          <li>Emmer of handdoeken (restwater opvangen bij aansluiting)</li>
          <li>Bandenspanningsmeter (druktank controleren)</li>
          <li>Optioneel: TDS-meter om de waterkwaliteit na installatie te meten</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Benodigde aansluitingen
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosefilter heeft drie aansluitingen nodig. Bekijk voor aanvang of alle drie locaties
          bereikbaar en geschikt zijn:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Koude waterleiding</strong> &mdash; via een insteekventiel dat op de koude aanvoerleiding
            onder de gootsteen wordt gemonteerd. Het insteekventiel perforeert de leiding zonder dat u
            deze hoeft door te snijden.
          </li>
          <li>
            <strong>Afvoer</strong> &mdash; via een afvoerklem op de sifonpijp. De afvoerslang van het
            osmosesysteem klem t hier aan vast. Steek de slang nooit rechtstreeks in de sifon (kans op
            terugzuigen van rioollucht via backflow).
          </li>
          <li>
            <strong>Osmosekraan</strong> &mdash; een apart kraantje dat een boorgat van 12 mm vereist in de
            spoelbak of het aanrecht. Bij een granieten of composiet aanrecht heeft u mogelijk een
            diamantboor nodig.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap installatie
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-[#E0F2FE] rounded-lg p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Stap 1: Waterleiding afsluiten</h3>
            <p className="text-gray-700 text-sm">
              Sluit de watertoevoer af via de hoofdkraan of het afsluitventiel onder de gootsteen.
              Open daarna de keukenkraan om de resterende waterdruk in de leiding te ontlasten.
              Leg handdoeken neer voor restwater.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Stap 2: Insteekventiel monteren</h3>
            <p className="text-gray-700 text-sm">
              Bevestig het insteekventiel op de koude waterleiding (niet op de warmwaterleiding).
              Gebruik een perforerende tang of T-stuk afhankelijk van het meegeleverde type.
              Wikkel Teflon tape op de draadverbindingen (3-5 lagen). Draai het ventiel stevig aan
              maar overdraaien kan de leiding beschadigen.
            </p>
          </div>

          <div className="bg-[#E0F2FE] rounded-lg p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Stap 3: Filterhuizingen aansluiten</h3>
            <p className="text-gray-700 text-sm">
              Verbind de kleurgecodeerde slangen in de juiste volgorde: sedimentfilter (geel)
              &rarr; koolstofprefilter (blauw) &rarr; membraanhuizing (rood/wit). De slangen
              klikken vast in de John Guest koppelingen met een hoorbare klik. Trek licht aan de
              slang om te controleren of deze vastzit.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Stap 4: Druktank aansluiten en druk controleren</h3>
            <p className="text-gray-700 text-sm">
              Controleer de luchtdruk in de lege druktank met een bandenspanningsmeter: de druk moet
              0,3 tot 0,5 bar zijn. Pompbij of laat af indien nodig. Sluit de tank aan op het
              aangewezen tankventiel van de osmose-unit.
            </p>
          </div>

          <div className="bg-[#E0F2FE] rounded-lg p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Stap 5: Afvoerslang bevestigen</h3>
            <p className="text-gray-700 text-sm">
              Bevestig de afvoerklem op de sifonpijp. Boor indien nodig een klein gaatje in de
              sifon voor de klem. Steek de afvoerslang in de klem maar zorg dat het uiteinde nooit
              onder het wateroppervlak van de sifon hangt &mdash; dit voorkomt backflow van rioollucht
              en -bacterien.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Stap 6: Osmosekraan monteren</h3>
            <p className="text-gray-700 text-sm">
              Boor een gat van 12 mm in de spoelbak of het aanrecht. Bij roestvrijstalen spoelbakken
              gebruikt u een normale metaalboor; bij granieten of keramische bakken een diamantboor.
              Bevestig het kraantje met de inbusschroef: draai aan totdat het kraantje stevig staat,
              maar te strak aandraaien kan het aanrecht beschadigen.
            </p>
          </div>

          <div className="bg-[#E0F2FE] rounded-lg p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Stap 7: Eerste vulling en spoelen</h3>
            <p className="text-gray-700 text-sm">
              Zet de watertoevoer open en laat het systeem 2 tot 3 uur vullen. Tap de volledige
              inhoud van de druktank daarna leeg via het osmosekraantje. Deze eerste vulling bevat
              conserveringsmiddelen en koolstofstof uit de nieuwe filters en moet worden weggegooid.
              Na de tweede vulling is het water klaar voor consumptie.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Stap 8: TDS meten en controle</h3>
            <p className="text-gray-700 text-sm">
              Meet het TDS-gehalte van het geproduceerde water met een TDS-meter. Bij een nieuwe
              installatie op Nederlands leidingwater (TDS 100-400 mg/L) is een waarde van 1-30 mg/L
              normaal. Controleer ook of het ASO-ventiel werkt: zodra de tank vol is moet het systeem
              stoppen met water produceren (stilvallen van het afvoergeluid).
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterdruk controleren en oplossen
        </h2>
        <p className="text-gray-700 mb-4">
          Voldoende waterdruk is de belangrijkste voorwaarde voor een goed werkend osmosesysteem.
          De minimale druk is <strong>2,5 bar</strong>; optimaal is <strong>3-5 bar</strong>.
          Bij een lagere druk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Produceert het membraan minder zuiver water per dag (lagere doorvoersnelheid)</li>
          <li>Stijgt de verhouding afvalwater ten opzichte van zuiver water</li>
          <li>Kan de druktank onvolledig gevuld worden</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meet de waterdruk met een drukmeter die u tijdelijk op het insteekventiel aansluit.
          Is de druk lager dan 2,5 bar, dan is een <strong>pompbooster</strong> aan te raden.
          Een boosterpomp kost 40-80 euro en verhoogt de werkdruk naar 4-5 bar.
          Zie ook onze pagina over{' '}
          <Link href="/omgekeerde-osmose/waterdruk" className="text-[#005F8A] underline">
            waterdruk voor osmosefilters
          </Link>{' '}
          voor meer details.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe lang duurt de installatie?
        </h2>
        <p className="text-gray-700 mb-4">
          De daadwerkelijke installatietijd (excl. eerste vulling) hangt af van uw ervaring:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Ervaringsniveau</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Installatietijd</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Inclusief eerste vulling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Ervaren doe-het-zelver</td>
                <td className="border border-gray-300 px-3 py-2">1&ndash;1,5 uur</td>
                <td className="border border-gray-300 px-3 py-2">4&ndash;5 uur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Beginner</td>
                <td className="border border-gray-300 px-3 py-2">2&ndash;3 uur</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;6 uur</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Loodgieter</td>
                <td className="border border-gray-300 px-3 py-2">45&ndash;60 min</td>
                <td className="border border-gray-300 px-3 py-2">4 uur</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer een loodgieter inschakelen?
        </h2>
        <p className="text-gray-700 mb-4">
          In de meeste situaties is een loodgieter niet nodig. Overweeg er toch een in te schakelen bij:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Muurleidingen die aangepast moeten worden</li>
          <li>Onvoldoende ruimte onder de gootsteen voor een correct insteekventiel</li>
          <li>Twijfel over de afvoerkoppeling of kans op lekkage</li>
          <li>Huurwoning met strikte regels over waterinstallaties</li>
          <li>Granieten of dikke composiet spoelbakken waarbij het boren risicovol is</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Loodgieterkosten bedragen doorgaans &euro;60-120 per uur; de installatie is gemiddeld 1-2 uur werk.
          Vraag een gecertificeerd installateur aan als u niet zeker bent. Bekijk ook onze pagina over{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            omgekeerde osmose kopen
          </Link>{' '}
          voor aanbevelingen van systemen die makkelijk te installeren zijn.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Na installatie: onderhoud en filtervervanging
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosefilter vereist periodiek onderhoud om optimaal te blijven werken:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Sedimentfilter en koolstofprefilter:</strong> vervangen elke 6-12 maanden afhankelijk van waterkwaliteit en gebruik</li>
          <li><strong>RO-membraan:</strong> vervangen elke 2-3 jaar; eerder bij slechte TDS-waarden</li>
          <li><strong>Koolstofpostfilter:</strong> vervangen elke 12 maanden</li>
          <li><strong>Druktank:</strong> luchtdruk jaarlijks controleren en indien nodig bijpompen</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Raadpleeg onze uitgebreide{' '}
          <Link href="/omgekeerde-osmose/onderhoud" className="text-[#005F8A] underline">
            onderhoudsgids voor osmosefilters
          </Link>{' '}
          voor een volledig onderhoudsschema en tips voor filtervervanging.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosefilter installatie
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
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link> en{' '}
          <Link href="/omgekeerde-osmose/waterdruk" className="text-[#005F8A] underline">waterdruk voor osmose</Link>.
        </p>
      </main>
    </>
  );
}
