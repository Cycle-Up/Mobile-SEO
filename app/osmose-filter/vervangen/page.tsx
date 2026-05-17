import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wanneer osmosefilter vervangen? Filterwissel schema en kosten',
  description:
    'Osmosefilter filters vervangen: sedimentfilter na 6-12 maanden, koolstoffilter na 6-12 maanden, RO-membraan na 2-3 jaar. Compleet filterwissel schema met.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-filter/vervangen' },
};

const faqItems = [
  {
    question: 'Hoe vaak moet ik de filters van mijn osmosefilter vervangen?',
    answer:
      'Het sedimentfilter en het pre-koolstoffilter vervangt u elke 6-12 maanden. Het RO-membraan gaat 2-3 jaar mee. Het post-koolstoffilter (polishing filter) vervangt u elk jaar. Een remineralisatiecartridge, indien aanwezig, vervangt u elke 6-12 maanden. De exacte intervallen hangen af van uw waterverbruik en de kwaliteit van het inkomende leidingwater. Hoe meer verontreinigingen, hoe sneller de filters verzadigden.',
  },
  {
    question: 'Hoe weet ik wanneer het RO-membraan aan vervanging toe is?',
    answer:
      'De betrouwbaarste methode is het meten van de TDS-rejection rate met een TDS-meter. Meet het TDS voor het membraan (inkomend water) en na het membraan (permeaat). Bereken: rejection rate = (1 - TDS na / TDS voor) x 100%. Komt dit onder de 85%? Dan is het membraan aan vervanging toe. Andere signalen: de tank vult trager dan normaal (minder dan 1 liter per minuut bij een 50 GPD systeem) of de watersmaak verandert merkbaar.',
  },
  {
    question: 'Wat kost het jaarlijks vervangen van osmosefilters?',
    answer:
      'De jaarlijkse filterkosten van een standaard osmosefilter bedragen gemiddeld 60-120 euro. Dit bestaat uit: sedimentfilter en pre-koolstoffilter twee keer per jaar wisselen (15-40 euro per set), post-koolstoffilter eenmaal per jaar (10-20 euro) en het RO-membraan eenmaal per 2-3 jaar (30-80 euro, gemiddeld per jaar 10-40 euro). Dit is aanzienlijk goedkoper dan flessenwater (300-600 euro per jaar voor een gezin van vier) en ook goedkoper dan een filterkraan op de lange termijn.',
  },
  {
    question: 'Kan ik osmosefilters van elk merk gebruiken?',
    answer:
      'Standaard 10-inch filterhuizen zijn universeel compatibel, wat betekent dat u filters van merken als Watts, Pentair, iSpring of huismerken kunt gebruiken in elk systeem met standaard filterhuizen. Controleer wel de draadmaat: 1/4-inch en 1/2-inch zijn de meest voorkomende maten voor slangen en koppelingen. Bij de membraanbehuizing is de maat minder universeel: controleer de specificaties van uw systeem (1812, 2012, 2812 of 4040 formaat) voor u een vervanging bestelt.',
  },
  {
    question: 'Wat gebeurt er als ik de filters te lang niet vervang?',
    answer:
      'Als u de pre-filters te lang niet vervangt, raken ze verstopt en neemt de waterdruk en doorstroom af. Het RO-membraan krijgt dan onvoldoende druk en presteert slechter. Erger: een verzadigd sedimentfilter kan breken en vuil doorlaten naar het membraan, wat het membraan beschadigt. Een versleten membraan laat steeds meer verontreinigingen door. Regelmatige vervanging beschermt uw investering en garandeert de waterkwaliteit.',
  },
  {
    question: 'Hoe vervang ik zelf een osmosefilter?',
    answer:
      'Stap 1: Sluit de toevoerkraan af. Stap 2: Ontlaad de druk door de osmosekraan te openen totdat er geen water meer uitkomt. Stap 3: Schroef het filterhuis open met de bijgeleverde filterhuis-sleutel. Stap 4: Verwijder het oude filter en gooi het weg. Stap 5: Plaats het nieuwe filter in het huis en schroef het stevig maar niet te hard dicht. Stap 6: Open de toevoer en laat het water 10 minuten doorlopen voor gebruik. Controleer op lekkages.',
  },
  {
    question: 'Welke TDS-waarde geeft aan dat mijn RO-membraan versleten is?',
    answer:
      'Een gezond RO-membraan heeft een rejection rate van 90-98%, wat betekent dat het 90-98% van de opgeloste stoffen (TDS) tegenhoudt. Meet het TDS voor en na het membraan: als de rejection rate onder de 85% zakt, is het membraan versleten. Voorbeeld: inkomend water heeft een TDS van 300 mg/L. Het permeaat mag dan maximaal 45 mg/L TDS bevatten (85% rejection). Stijgt het TDS van het permeaat boven dit niveau? Vervang het membraan.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Wanneer osmosefilter vervangen? Filterwissel schema en kosten',
  description:
    'Osmosefilter filters vervangen: sedimentfilter na 6-12 maanden, koolstoffilter na 6-12 maanden, RO-membraan na 2-3 jaar. Compleet filterwissel schema met.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-filter/vervangen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseFilterVervangenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Osmose filter',
                item: 'https://waterfilterplatform.nl/osmose-filter',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Osmosefilter filters vervangen',
                item: 'https://waterfilterplatform.nl/osmose-filter/vervangen',
              },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/osmose-filter" className="hover:underline">Osmose filter</Link> &rsaquo;{' '}
          <span>Osmosefilter filters vervangen</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Wanneer osmosefilter vervangen? Filterwissel schema en kosten
          </h1>
          <p className="text-[#005F8A] text-lg">
            De pre-filters van uw osmosefilter vervangen u elke 6-12 maanden, het RO-membraan elke
            2-3 jaar. Compleet schema, signaleringsmethoden en jaarlijkse kosten op een rij.
          </p>
        </section>

        <QuickAnswer answer="Osmosefilter onderhoudsschema: sedimentfilter en pre-koolstoffilter elke 6-12 maanden (5-25 euro), post-koolstoffilter jaarlijks (10-20 euro), RO-membraan elke 2-3 jaar (30-80 euro). Meet de TDS-rejection rate om het membraan te bewaken. Totale jaarkosten: 60-120 euro." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vervangingsschema per filtertype
        </h2>
        <p className="text-gray-700 mb-4">
          Een osmosefilter bestaat uit meerdere filterstappen die elk een eigen vervangingsinterval
          hebben. Gebruik de onderstaande tabel als leidraad. De exacte intervallen kunnen korter
          zijn als uw leidingwater veel vuil of kalk bevat.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Interval</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs vervanging</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Signalen voor vervanging</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sedimentfilter (5 &micro;m)</td>
                <td className="border border-gray-300 px-3 py-2">6-12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">&euro;5-15</td>
                <td className="border border-gray-300 px-3 py-2">Verminderde doorstroom, bruin of troebel filter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter (pre-carbon)</td>
                <td className="border border-gray-300 px-3 py-2">6-12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10-25</td>
                <td className="border border-gray-300 px-3 py-2">Chloor-smaak of -geur keert terug</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">RO-membraan</td>
                <td className="border border-gray-300 px-3 py-2">2-3 jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30-80</td>
                <td className="border border-gray-300 px-3 py-2">TDS-rejection &lt;85%, trage tankwisseling</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Post-carbon (polishing) filter</td>
                <td className="border border-gray-300 px-3 py-2">12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">&euro;10-20</td>
                <td className="border border-gray-300 px-3 py-2">Smaakverandering of lichte geur</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Remineralisatiecartridge</td>
                <td className="border border-gray-300 px-3 py-2">6-12 maanden</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15-35</td>
                <td className="border border-gray-300 px-3 py-2">TDS stijgt niet meer na het filter</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe weet u wanneer vervanging nodig is?
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste consumenten osmosefilters hebben geen ingebouwde indicator voor filtervervanging.
          Gebruik een van de volgende methoden om bij te houden wanneer actie nodig is:
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-3">
          1. TDS-meter: de meest betrouwbare methode
        </h3>
        <p className="text-gray-700 mb-4">
          Een TDS-meter (totaal opgeloste stoffen) is een goedkoop hulpmiddel (5-20 euro) waarmee u
          in seconden de waterkwaliteit controleert. Meet het TDS van het inkomende leidingwater en
          van het water na het RO-membraan. Bereken de rejection rate:
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-4">
          <p className="text-[#003F5C] font-semibold text-sm">
            Rejection rate = (1 &minus; TDS<sub>na</sub> / TDS<sub>voor</sub>) &times; 100%
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Voorbeeld: inkomend water 300 mg/L, water na RO-membraan 20 mg/L
            &rarr; rejection = (1 &minus; 20/300) &times; 100% = 93% (goed)
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Comes dit onder de 85%? Dan is het membraan toe aan vervanging.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-3">
          2. Doorstroom controleren
        </h3>
        <p className="text-gray-700 mb-4">
          Een verstopt sedimentfilter of pre-koolstoffilter zorgt voor verminderde waterdruk op het
          membraan, waardoor de tank trager vult. Bij een 50 GPD systeem (circa 190 liter per dag)
          mag de vulsnelheid niet minder zijn dan 1 liter per minuut. Vult de tank merkbaar trager?
          Begin met het vervangen van de pre-filters.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-3">
          3. Kalenderherinnering instellen
        </h3>
        <p className="text-gray-700 mb-6">
          De meeste thuisfilters hebben geen indicatielampje. De meest praktische oplossing: zet bij
          installatie een herinnering in uw telefoon of agenda. Pre-filters: 6 maanden na installatie.
          Post-filter: 12 maanden. Membraan: 24 maanden. Pas het interval aan als u een uitzonderlijk
          hoog waterverbruik heeft of als uw leidingwater bijzonder hard of vuil is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtermerken en compatibiliteit
        </h2>
        <p className="text-gray-700 mb-4">
          Standaard 10-inch filterhuizen zijn universeel. Filters van merken als Watts, Pentair, iSpring
          en diverse huismerken passen in elk systeem met standaard filterhuizen. Let bij vervanging
          wel op:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Draadmaat slangen:</strong> 1/4-inch is de meest gangbare maat bij compacte
            thuissystemen; 1/2-inch bij grotere systemen.
          </li>
          <li>
            <strong>Membraanformaat:</strong> 1812 (1,8 x 12 inch, 50 GPD) is het meest voorkomende
            formaat voor thuissystemen. Controleer uw handleiding.
          </li>
          <li>
            <strong>Filterhuis-sleutel:</strong> bewaar de plastic sleutel die bij uw systeem zat.
            Standaard filterhuizen zijn te openen met een universele filterhuis-sleutel.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Jaarlijkse kosten osmosefilter vs. alternatieven
        </h2>
        <p className="text-gray-700 mb-4">
          De totale jaarlijkse filterkosten van een standaard osmosefilter bedragen &euro;60-120.
          Dit is op jaarbasis goedkoper dan de meeste alternatieven:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Optie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaarkosten (gezin van 4)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter (filters + membraan)</td>
                <td className="border border-gray-300 px-3 py-2 font-medium">&euro;60-120</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Filterkraan (bijv. Brita on tap)</td>
                <td className="border border-gray-300 px-3 py-2 font-medium">&euro;40-100</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Flessenwater (1,5L per dag per persoon)</td>
                <td className="border border-gray-300 px-3 py-2 font-medium">&euro;300-600</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap: filters zelf vervangen
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Watertoevoer afsluiten</strong> via de ball valve op de koudwaterleiding.
          </li>
          <li>
            <strong>Druk ontlasten:</strong> open de osmosekraan totdat er geen water meer uitkomt.
            Dit voorkomt dat water wegspuit bij het openen van de filterhuizen.
          </li>
          <li>
            <strong>Filterhuis openen</strong> met de filterhuis-sleutel (linksom draaien). Houd
            een emmer onder het huis voor restwater.
          </li>
          <li>
            <strong>Oud filter verwijderen</strong> en weggooien. Spoel het filterhuis schoon met
            lauw water.
          </li>
          <li>
            <strong>Nieuw filter plaatsen</strong> en het huis stevig dichtdraaien (rechtsom).
            Niet te hard aandraaien om de O-ring niet te beschadigen.
          </li>
          <li>
            <strong>Watertoevoer openen</strong> en het systeem 10 minuten laten doorspoelen
            voor consumptie.
          </li>
        </ol>

        <p className="text-gray-700 mb-6">
          Meer informatie over het vervangen van het RO-membraan specifiek vindt u op onze pagina{' '}
          <Link href="/omgekeerde-osmose/membraan-vervangen" className="text-[#005F8A] underline">
            osmosemembraan vervangen
          </Link>
          . Voor een compleet overzicht van het systeem, zie{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde osmose
          </Link>{' '}
          of onze{' '}
          <Link href="/osmose-filter" className="text-[#005F8A] underline">
            osmose filter vergelijking
          </Link>
          .
        </p>

        <CTABanner context="osmose" />

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over osmosefilter onderhoud
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003F5C] cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde osmose uitleg
          </Link>
          ,{' '}
          <Link href="/osmose-filter" className="text-[#005F8A] underline">
            osmose filter overzicht
          </Link>{' '}
          en{' '}
          <Link href="/omgekeerde-osmose/membraan-vervangen" className="text-[#005F8A] underline">
            RO-membraan vervangen
          </Link>
          .
        </p>
      </main>
    </>
  );
}
