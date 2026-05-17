import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Meest ecologisch waterfilter — milieuvoetafdruk vergeleken',
  description: 'Vergelijking milieubelasting: flessenwater (300-600g CO2/liter) vs filterkan vs osmose vs kokendwaterkraan. Osmosefilter wint op 10-jaar horizon vergeleken.',
  alternates: { canonical: 'https://waterfilterplatform.nl/beste-waterfilter/ecologisch' },
  openGraph: {
    title: 'Meest ecologisch waterfilter — milieuvoetafdruk vergeleken',
    description: 'Vergelijking milieubelasting: flessenwater vs filterkan vs osmose vs kokendwaterkraan. Welk systeem heeft de laagste CO2-voetafdruk?',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoeveel CO2 kost een fles water vergeleken met gefilterd kraanwater?',
    answer: 'Een liter flessenwater (PET, 0,5-liter flessen) produceert 300-600 gram CO2-equivalent, inclusief productie van de fles, vulproces en transport. Kraanwater zonder filter kost 0,3-1 gram CO2 per liter (waterpompenergie, behandeling). Gefilterd kraanwater via osmose voegt maximaal 5-15 gram CO2 per liter toe (filterproductie afschrijving, pompenergie). Flessenwater is dus 20-100 keer CO2-intensiever dan gefilterd kraanwater.',
  },
  {
    question: 'Is osmosefilter slecht voor het milieu door afvalwater?',
    answer: 'Een standaard osmosesysteem zonder pressure recovery produceert 2-4 liter afvalwater per liter productwater (1:3 of 1:4 ratio). Dit concentraat wordt afgevoerd naar het riool. De totale watervoetafdruk is dus 3-5 liter leidingwater per liter drinkwater. Modern is dit te verbeteren met een permeaatpomp of pressure recovery device tot een 1:1 ratio (50% waterrecovery). Vergeleken met de miljoenen liters die flessenwater-productie kost (inclusief spoelwater in de fabriek), is osmose-concentraat een beperkt milieuprobleem.',
  },
  {
    question: 'Hoeveel plastic afval produceert een filterkan per jaar?',
    answer: 'Een filterkan vervangt gemiddeld 6-12 filters per jaar. Elke Brita MAXTRA+-patroon bevat circa 20 gram plastic (polypropyleenhuls) plus actief kool en ionenwisselingshars. Per jaar bedraagt het filterafval 120-240 gram plastic. Ter vergelijking: een gezin van 4 dat flessenwater drinkt (2 liter/dag) verbruikt 730 halve-literflesjes per jaar = circa 22 kg PET-plastic. Brita heeft een terugneemprogramma voor gebruikte filters; ZeroWater biedt recycling via post.',
  },
  {
    question: 'Wat is de energiebelasting van een kokendwaterkraan vergeleken met een waterkoker?',
    answer: 'Een traditionele waterkoker kookt bij elke gebruik 1-2 liter water en verbruikt 0,1-0,2 kWh per kookbeurt. Bij 3 kookbeurten per dag: circa 0,3-0,6 kWh per dag = EUR 44-88 per jaar. Een kokendwaterkraan (Quooker-type) verbruikt 3-8 Wh per uur standby = 0,07-0,19 kWh per dag = EUR 10-28 per jaar. De kokendwaterkraan is 3-5 keer zuiniger dan een waterkoker bij normaal gebruik omdat u alleen het water verwarmt dat u daadwerkelijk gebruikt, zonder voorverwarming van de hele kan.',
  },
  {
    question: 'Welk waterfilter heeft op 10 jaar de laagste milieuvoetafdruk?',
    answer: 'Op een tijdshorizon van 10 jaar heeft een osmosefilter of 4-in-1 systeem de laagste milieuvoetafdruk per liter schoon drinkwater. De aanvangsenergie voor productie van het systeem wordt na 2-3 jaar terugverdiend ten opzichte van flessenwater. Filterkan is beter dan flessenwater maar produceert jaarlijks plastic filterafval. De kokendwaterkraan heeft hoger standby-energieverbruik maar vervangt de waterkoker. Netto-vergelijking: osmose + kokendwater combineert de laagste per-liter CO2 voor drinkwater.',
  },
];

export default function EcologischPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Beste waterfilter', item: 'https://waterfilterplatform.nl/beste-waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Ecologisch', item: 'https://waterfilterplatform.nl/beste-waterfilter/ecologisch' },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
          {
            '@type': 'Article',
            headline: 'Meest ecologisch waterfilter — milieuvoetafdruk vergeleken',
            description: 'Vergelijking milieubelasting: flessenwater vs filterkan vs osmose vs kokendwaterkraan. Welk systeem heeft de laagste CO2-voetafdruk?',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/beste-waterfilter/ecologisch',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/beste-waterfilter">Beste waterfilter</Link> &rsaquo; Ecologisch
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Meest ecologisch waterfilter — milieuvoetafdruk vergeleken
          </h1>
          <QuickAnswer answer="Flessenwater is veruit de meest milieuschadelijke optie: 300-600 gram CO2 per liter door PET-plastic en transport. Een osmosefilter produceert afvalwater maar heeft op 10 jaar de laagste CO2-voetafdruk per liter drinkwater. Filterkan is beter dan flessenwater maar genereert jaarlijks plastic filterafval. De kokendwaterkraan is 3-5 keer zuiniger dan een traditionele waterkoker." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Flessenwater: de meest milieubelastende keuze</h2>
          <p className="text-gray-700 mb-4">
            De productie van een PET-fles van 0,5 liter verbruikt circa 100 ml aardolie als grondstof. Het totale CO2-equivalent (productie fles, vulproces, koeling, distributie) bedraagt 300-600 gram per liter flessenwater. Bij een gezin dat 2 liter per dag drinkt, accumuleerd dit tot 219-438 kg CO2 per jaar — vergelijkbaar met 1100-2200 km rijden in een gemiddelde personenauto.
          </p>
          <p className="text-gray-700 mb-4">
            Bovendien is slechts 50-60% van PET-flessen in Europa daadwerkelijk gerecycled (Eurostat 2023); de rest eindigt in verbrandingsovens of het milieu. Flessenwater uit Alpen-bronnen (Volvic, Evian) heeft een bijkomende transportvoetafdruk van 100-300 km vrachtvervoer voor Nederlandse consumenten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Filterkan: beter dan flessenwater, maar niet probleemloos</h2>
          <p className="text-gray-700 mb-4">
            Een filterkan vervangt flessenwater voor een fractie van de CO2-impact: kraanwater zelf is vrijwel CO2-neutraal. De filterpatronen genereren echter plastic afval. Een gemiddeld huishouden verbruikt 8-12 filterpatronen per jaar, elk met circa 20 gram plastic en ionenwisselingshars of actief kool dat niet altijd recyclebaar is.
          </p>
          <p className="text-gray-700 mb-4">
            Brita heeft een terugneemprogramma waarbij gebruikte MAXTRA-filters worden ingezameld en gerecycled. Het actief kool wordt geregenereerd of als brandstof ingezet; het plastic wordt mechanisch gerecycled. ZeroWater biedt een postbusrecyclingprogramma in de VS, maar in Nederland is terugname minder systematisch georganiseerd.
          </p>
          <p className="text-gray-700 mb-4">
            Conclusie: een filterkan heeft een CO2-voetafdruk die 10-30 keer lager is dan flessenwater, maar is niet nul-afval.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Osmosefilter: afvalwater in perspectief</h2>
          <p className="text-gray-700 mb-4">
            Het voornaamste ecologische bezwaar tegen osmosefilters is het afvalwater: een standaard systeem zonder pressure recovery produceert 2-4 liter concentraat per liter productwater. Voor een gezin dat 1500 liter drinkwater per jaar filtert, betekent dit 3000-6000 liter afvalwater dat naar het riool gaat.
          </p>
          <p className="text-gray-700 mb-4">
            Dit klinkt als veel, maar de context is belangrijk. Het concentraat is licht verzoet leidingwater, niet toxisch, en wordt behandeld via de rioolzuivering. Nederlandse huishoudens verbruiken gemiddeld 120 liter leidingwater per persoon per dag; 2-5 liter extra per dag voor osmose-concentraat is een toevoeging van minder dan 2%.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Zero-waste osmose:</strong> Moderne osmosesystemen met een pressure recovery device (Aquatec, Watts) of permeaatpomp bereiken een waterrecovery van 50-75%, waardoor de afvalwaterverhouding daalt tot 1:1 of beter. Deze systemen zijn duurder (EUR 100-200 extra) maar milieuvriendelijker op de lange termijn.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Kokendwaterkraan: energieverbruik als milieuparameter</h2>
          <p className="text-gray-700 mb-4">
            Een kokendwaterkraan verbruikt energie voor het permanent op temperatuur houden van water. De milieuprestatie hangt sterk af van hoe u de kokendwaterkraan vergelijkt:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
            <li><strong>Vs waterkoker:</strong> Een kokendwaterkraan verbruikt 3-8 Wh/uur standby (EUR 10-28/jaar); een waterkoker 3 keer per dag verhitten kost circa EUR 44-88/jaar. De kokendwaterkraan wint.</li>
            <li><strong>Energiezuinige modellen:</strong> Kokendwaterkranen met extra isolatie en nachtmodus (Quooker Combi+, GROHE Red) verbruiken 50-60% minder dan standaard boilers.</li>
            <li><strong>Combinatie met osmose:</strong> De osmosefilter vereist een pomp (35-80 W) die slechts 20-40 minuten per dag actief is; totale energiekosten circa EUR 8-15 per jaar extra.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Milieuvoetafdruk vergelijking: 10-jaar horizon</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Systeem</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">CO2/liter drinkwater</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Plastic afval/jaar</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Waterverbruik</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Energie/jaar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Flessenwater (PET)</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">300-600 g</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">15-25 kg</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Hoog (transport)</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Hoog</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Filterkan</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">10-30 g</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">150-250 g filters</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Laag</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Zeer laag</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">5-15 g</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Minimaal</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">3-5x drinkwater</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Laag (EUR 8-15/jaar)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Osmose + zero-waste pomp</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">5-12 g</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Minimaal</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">1-2x drinkwater</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Laag</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Kokendwaterkraan (standby)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">N.v.t. per liter</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Minimaal</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Laag</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">EUR 10-28/jaar standby</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">CO2-waarden zijn schattingen op basis van levenscyclusanalyses. Exact verbruik verschilt per merk, regio en gebruik.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Conclusie: osmose wint op 10-jaar horizon</h2>
          <p className="text-gray-700 mb-4">
            Over een periode van 10 jaar is een osmosefilter — zeker gecombineerd met een zero-waste pomp — de meest milieuvriendelijke keuze voor huishoudens die gefilterd drinkwater willen:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
            <li>De initieel hogere milieuinvestering (productie membraan en behuizing) wordt terugverdiend na 2-3 jaar gebruik ten opzichte van flessenwater.</li>
            <li>Minimaal plastic afval versus jaarlijkse filterpatronen (filterkan) of PET-flessen.</li>
            <li>Met moderne zero-waste technologie is de waterverhouding aanvaardbaar in de context van totaal waterverbruik.</li>
            <li>Elektrisch energieverbruik is laag vergeleken met kokende waterkokers of verwarmingssystemen.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Voor wie flessenwater wil vermijden maar geen osmose wil installeren, is een filterkan met terugneemprogramma voor filterpatronen een goede tussenstap: 10-30 keer minder CO2-intensief dan flessenwater.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003F5C] cursor-pointer">{item.question}</summary>
                <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose: complete gids</Link></li>
            <li><Link href="/filterkan" className="text-[#005F8A] hover:underline">Filterkan: duurzamer alternatief voor flessenwater</Link></li>
            <li><Link href="/kraanwater" className="text-[#005F8A] hover:underline">Kraanwater vs flessenwater: feiten en cijfers</Link></li>
            <li><Link href="/beste-waterfilter" className="text-[#005F8A] hover:underline">Terug naar beste waterfilter overzicht</Link></li>
          </ul>
        </div>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
