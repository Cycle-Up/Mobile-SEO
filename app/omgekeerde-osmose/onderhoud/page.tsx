import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Onderhoud omgekeerde osmose: filtervervanging, reiniging en schema',
  description:
    'Een omgekeerde osmosefilter heeft jaarlijks onderhoud nodig: sediment- en koolstoffilters elk jaar vervangen, RO-membraan elke 2-3 jaar. Onderhoudsschema, kosten en tips voor maximale levensduur.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/onderhoud' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik de filters van mijn osmosefilter vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het sedimentfilter en het koolstofblokfilter (prefilter) dient u elke 6-12 maanden te vervangen. Het RO-membraan gaat bij goed onderhoud van de prefilters 2-3 jaar mee. De nafilter (postfilter, actief kool) vervangt u elk jaar. Totale jaarlijkse filterkosten: 50-120 euro per jaar, exclusief het membraan (dat per 2-3 jaar wordt vervangen voor 30-80 euro).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe gebruik ik een TDS-meter voor osmoseonderhoud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meet het TDS (opgeloste stoffen in ppm) van het ingaande kraanwater en van het osmosewater (permeaat). Deel het osmosewater-TDS door het kraanwater-TDS en vermenigvuldig met 100: dit geeft het doordringpercentage. Een gezond membraan laat minder dan 10-15% van de TDS door. Stijgt dit boven 20%, dan is het membraan aan vervanging toe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe desinfecteer ik mijn osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Biofilm of smaakafwijkingen kunnen duiden op bacteriegroei in het systeem. Desinfecteer met een 0,5% waterstofperoxideoplossing (H2O2): vul de filterhuizen, laat 30 minuten inwerken, spoel daarna grondig. Gebruik nooit natriumhypochloriet (bleekwater) in contact met het RO-membraan; chloor beschadigt het membraan onherstelbaar. Er zijn ook speciale membraanreinigingsmiddelen beschikbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke luchtdruk moet er in de druktank zitten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De druktank heeft een luchtdruk van 0,3-0,5 bar nodig aan de luchtzijde van het interne membraan, gemeten wanneer de tank volledig leeg is (geen water). Controleer de luchtdruk jaarlijks met een bandenspanningsmeter (Schrader ventiel aan de onderkant van de tank). Een te lage luchtdruk vermindert de wateropbrengst per vulcyclus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik wanneer de filters op zijn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indicatoren dat filters toe zijn aan vervanging: het debiet (vulsnelheid van de tank) is merkbaar gedaald (meer dan 20%), de TDS-ratio van het membraan is gestegen boven 20%, u merkt smaak- of geurafwijkingen in het water, of het verstrijken van de aanbevolen vervangingsinterval. Een TDS-meter is het meest betrouwbare meetinstrument voor membraancontrole.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost het onderhoud van een osmosefilter per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De jaarlijkse filterkosten bedragen 50-120 euro: sedimentfilter 5-15 euro, koolstofprefilter 10-20 euro, nafilter 10-20 euro, eventueel remineralisatiefilter 15-25 euro. Het RO-membraan vervangt u elke 2-3 jaar voor 30-80 euro. Gemiddeld op jaarbasis: 65-145 euro. Zelf vervangen (handleiding meeleverenaard) is eenvoudig en bespaart servicekoten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik osmosefilteronderhoud zelf doen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, filtervervanging is eenvoudig zelf te doen: druk ontlasten, filterhuizen met de meegeleverde sleutel losdraaien, oude filter verwijderen, nieuwe filter plaatsen, filterhuizen aandraaien, water laten doorstromen en controleren op lekkage. Een professional is alleen nodig voor leidingaansluitingen of storingen. De meeste fabrikanten leveren duidelijke stap-voor-stap handleidingen mee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan een beschadigd RO-membraan worden hersteld?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een RO-membraan dat is beschadigd door chloor of ouderdom kan niet worden hersteld en moet worden vervangen. Biologische aangroei (biofilm) kan soms worden verminderd door reiniging met H2O2, maar een volledig gefouled membraan (sterk gestegen TDS-doorlaat, sterk gedaald debiet) is economisch niet te reinigen. Vervang het membraan als de TDS-verwijdering onder 80% zakt.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Onderhoud omgekeerde osmose: filtervervanging, reiniging en schema',
  description:
    'Onderhoudsschema voor omgekeerde osmosefilters: sediment- en koolstoffilters elk jaar, RO-membraan elke 2-3 jaar. Kosten, TDS-meter gebruik en reinigingstips.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/onderhoud',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OmgekeerdeOsmoseOnderhoudPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Onderhoud', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/onderhoud' },
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
          <span>Onderhoud</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Onderhoud omgekeerde osmose: filtervervanging, reiniging en schema
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een osmosefilter levert jarenlang zuiver water &mdash; mits u het regelmatig onderhoudt.
            Verwaarloosde prefilters verkorten de levensduur van het kostbare RO-membraan drastisch.
            Leer wanneer u welk onderdeel vervangt en hoe u uw systeem reinigt.
          </p>
        </section>

        <QuickAnswer answer="Sedimentfilter en koolstofprefilter elk 6-12 maanden vervangen; RO-membraan elke 2-3 jaar; nafilter elk jaar. Controleer het membraan met een TDS-meter: boven 20% doorlaat is vervanging nodig. Totale jaarkosten: 50-120 euro. Chloor beschadigt het membraan: vervang prefilters op tijd." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom is onderhoud zo belangrijk?
        </h2>
        <p className="text-gray-700 mb-4">
          Een omgekeerde osmosefilter bestaat uit meerdere filterstappen die in serie werken. De
          prefilters &mdash; het sedimentfilter en het koolstofblokfilter &mdash; beschermen het
          dure RO-membraan. Als deze prefilters verstopt raken of uitgeput zijn, treden twee
          problemen op:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Verstopt sedimentfilter:</strong> de waterdruk op het membraan stijgt, wat leidt
            tot versnelde slijtage en vermindering van de membraancapaciteit. Een debietdaling van
            meer dan 20% is een waarschuwingsteken.
          </li>
          <li>
            <strong>Uitgeput koolstoffilter:</strong> chloor en chloorkoolwaterstoffen bereiken het
            RO-membraan. Een polyamide membraan is uiterst gevoelig voor chloor: bij continue
            blootstelling treedt chemische degradatie op in enkele weken. Het membraan raakt
            onherstelbaar beschadigd en laat steeds meer stoffen door.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Tijdig onderhoud van de prefilters is de <strong>goedkoopste verzekering</strong> voor een
          lang leven van uw membraan. Een membraanvervanging kost 30-80 euro; een koolstofprefilter
          slechts 10-20 euro per jaar.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoudsschema per component
        </h2>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              1. Sedimentfilter (5 micron) &mdash; elke 6-12 maanden
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Het sedimentfilter houdt zand, slib, roest en andere zwevende deeltjes tegen. Naarmate
              het filter volloopt, neemt de doorstroming af. Bij hard of troebel water kan de
              levensduur korter zijn dan 6 maanden.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Indicator:</strong> debiet daalt zichtbaar (tank vult traag op) of verstrijken
              van 6-12 maanden. <strong>Kosten:</strong> 5-15 euro per filter.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              2. Koolstofblokfilter (prefilter) &mdash; elke 6-12 maanden
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              De koolstofprefilter verwijdert chloor, chloorkoolwaterstoffen en organische verbindingen
              voor het membraan. Dit is de <strong>belangrijkste bescherming voor het membraan</strong>.
              Bij hoge chloorconcentraties in leidingwater (sommige regio&apos;s) kan de capaciteit
              al na 6 maanden uitgeput zijn.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Indicator:</strong> chloorlucht in het osmosewater of na 6-12 maanden.
              <strong> Kosten:</strong> 10-20 euro per filter.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              3. RO-membraan &mdash; elke 2-3 jaar
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Bij consistent goed onderhoud van de prefilters gaat een polyamide TFC-membraan 2-3 jaar
              mee. Bij verwaarloosde prefilters kan de levensduur dalen naar 1-1,5 jaar. Het membraan
              is het duurste verbruiksonderdeel van het systeem.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Indicator:</strong> TDS-doorlaat stijgt boven 20% (meten met TDS-meter voor en
              na het membraan), of debiet sterk gedaald. <strong>Kosten:</strong> 30-80 euro per membraan.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              4. Nafilter / postfilter (actief kool) &mdash; elk jaar
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              De nafilter verbetert de smaak en geur van het osmosewater na de druktank. Het water
              kan na langere opslag in de tank licht vlak smaken; de nafilter zorgt voor frisse smaak.
              Bij een remineralisatiefilter als nafilter geldt hetzelfde interval.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Indicator:</strong> smaak- of geurafwijking, of verstrijken van 12 maanden.
              <strong> Kosten:</strong> 10-25 euro per filter.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              5. Druktank &mdash; jaarlijkse luchtdrukcontrole, 5-10 jaar levensduur
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              De druktank bevat een intern rubber membraan dat water en perslucht scheidt. Controleer
              de luchtdruk aan de onderkant van de tank (Schrader ventiel) jaarlijks. De druk moet
              0,3-0,5 bar zijn wanneer de tank leeg is.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Indicator van slijtage:</strong> tank raakt snel vol maar levert weinig water,
              of tank lekt. Een beschadigd intern membraan vraagt vervanging van de gehele tank.
              <strong> Levensduur:</strong> 5-10 jaar bij normaal gebruik.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kostenoverzicht: filteronderhoud per jaar
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Component</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Interval</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaarkosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2">6&ndash;12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5&ndash;15</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10&ndash;15</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Koolstofprefilter</td>
                <td className="border border-gray-300 px-3 py-2">6&ndash;12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10&ndash;20</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">RO-membraan</td>
                <td className="border border-gray-300 px-3 py-2">2&ndash;3 jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;30</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nafilter (actief kool)</td>
                <td className="border border-gray-300 px-3 py-2">12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10&ndash;20</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10&ndash;20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Remineralisatiefilter</td>
                <td className="border border-gray-300 px-3 py-2">12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;25</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;25</td>
              </tr>
              <tr className="bg-[#E0F2FE] font-semibold">
                <td className="border border-gray-300 px-3 py-2 text-[#003F5C]">Totaal per jaar</td>
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2 text-[#003F5C]">&euro;65&ndash;110</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Membraanreiniging: wanneer en hoe
        </h2>
        <p className="text-gray-700 mb-4">
          Soms is het membraan niet volledig uitgeput maar aangetast door <strong>biologische aangroei
          (biofilm)</strong> of organische neerslag. Symptomen: smaakafwijking in het water ondanks
          nieuwe nafilter, of licht gestegen TDS-waarden. In dat geval kunt u het systeem desinfecteren:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Sluit de watertoevoer af en ontlasten de systeemdruk.</li>
          <li>
            Verwijder de prefilters en vul de filterhuizen met een 0,5% waterstofperoxide (H&sup2;O&sup2;)
            oplossing.
          </li>
          <li>Laat 30-60 minuten inwerken met gesloten systeem.</li>
          <li>Open de watertoevoer en spoel het systeem met 3-4 liter water grondig door.</li>
          <li>Gooi de eerste tankinhoud na desinfectie weg.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Gebruik <strong>nooit</strong> natriumhypochloriet (bleekwater, Domestos) in contact met
          het RO-membraan. Chloor breekt de polyamide membraanlaag af en veroorzaakt onherstelbare
          schade. Speciale membraanreinigingsproducten zijn beschikbaar bij osmosefilterleveranciers.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Eerste installatie: wat u moet weten
        </h2>
        <p className="text-gray-700 mb-4">
          Bij een nieuw osmosesysteem zijn een paar extra stappen nodig voordat het water veilig
          gedronken kan worden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Eerste vullingen weggooien:</strong> gooi de eerste 2-3 tankinhoud weg. Nieuwe
            filters en het membraan kunnen een lichte smaak of verhoogde TDS afgeven in de eerste
            24-48 uur.
          </li>
          <li>
            <strong>TDS meten na 24 uur:</strong> na een dag werken meet u het TDS van het
            osmosewater. Normaal: 10-50 ppm bij kraanwater van 200-400 ppm (indicatief). Stijgt het
            TDS niet significant boven 10% van het inkomende water, dan werkt het membraan goed.
          </li>
          <li>
            <strong>Controleer op lekkage:</strong> inspecteer alle aansluitingen na de eerste
            vulling op druppels. Kleine lekken zijn eenvoudig te verhelpen door de koppeling iets
            vaster te draaien.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Zie onze gedetailleerde gids over{' '}
          <Link href="/omgekeerde-osmose/installatie" className="text-[#005F8A] underline">osmosefilter installatie</Link>{' '}
          voor stap-voor-stap instructies. Controleer ook of uw waterdruk voldoende is via de pagina
          over{' '}
          <Link href="/omgekeerde-osmose/waterdruk" className="text-[#005F8A] underline">waterdruk voor osmosefilters</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer vervangen in plaats van onderhouden?
        </h2>
        <p className="text-gray-700 mb-6">
          Als de TDS-verwijdering van het membraan onder de <strong>80% grens</strong> zakt &mdash;
          dat wil zeggen dat het membraan meer dan 20% van de opgeloste stoffen doorlaat &mdash; is
          vervanging de meest verstandige keuze. Reiniging kan een matig vervuild membraan tijdelijk
          helpen, maar een chemisch beschadigd of sterk biologisch aangetast membraan is economisch
          niet te redden. Zie ook onze pagina over het{' '}
          <Link href="/omgekeerde-osmose/rendement" className="text-[#005F8A] underline">rendement van osmosefilters</Link>{' '}
          voor meer meetmethoden.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosefilter onderhoud
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
          <Link href="/omgekeerde-osmose/installatie" className="text-[#005F8A] underline">osmosefilter installeren</Link>,{' '}
          <Link href="/omgekeerde-osmose/waterdruk" className="text-[#005F8A] underline">waterdruk voor osmose</Link>,{' '}
          <Link href="/omgekeerde-osmose/rendement" className="text-[#005F8A] underline">rendement osmosefilter</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
