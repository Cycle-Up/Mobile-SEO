import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosefilter rendement: afvalwater verhouding en efficiëntie verbeteren',
  description:
    'Een standaard osmosefilter produceert 1 liter drinkwater op 3-4 liter afvalwater (25% rendement). Permeaatpomp en tankless systemen verbeteren dit tot 1:1.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/rendement' },
};

const faqItems = [
  {
    question: 'Hoeveel afvalwater produceert een osmosefilter?',
    answer:
      'Een standaard osmosefilter heeft een waste ratio van 3:1 tot 4:1. Dat betekent 3 tot 4 liter afvalwater per liter drinkwater, ofwel een rendement van 20-25%. Met een permeaatpomp verbetert dit naar 40-50% (waste ratio 1:1 tot 1,5:1). Zero-waste systemen met recirculatie halen een rendement van 80-95%.',
  },
  {
    question: 'Hoe verbeter ik het rendement van mijn osmosefilter?',
    answer:
      'De meest effectieve verbetering is het installeren van een permeaatpomp (kosten 40-80 euro). Deze pomp gebruikt de druk van het afvalwater als tegenwicht om het inkomende water te helpen door het membraan, zonder extra energie te gebruiken. Daarmee verbetert het rendement van 25% naar 40-50%. Hogere waterdruk (ideaal 5-8 bar) verbetert het rendement ook, net als warmer invoerwater (boven 15 graden Celsius).',
  },
  {
    question: 'Wat is een permeaatpomp en helpt het bij afvalwater?',
    answer:
      'Een permeaatpomp is een klein mechanisch hulpstuk dat de druk van het afvalwater (concentraat) gebruikt om het inkomende water te helpen door het membraan. Het werkt op basis van drukverschil en heeft geen stroom nodig. Een permeaatpomp reduceert het afvalwater met 50-75% ten opzichte van een systeem zonder pomp en verbetert ook de filtratiesnelheid. Installatie is inline in de afvalwaterleiding, kosten 40-80 euro.',
  },
  {
    question: 'Is het afvalwater van een osmosefilter gevaarlijk?',
    answer:
      'Nee. Het afvalwater (concentraat) van een osmosefilter bevat dezelfde stoffen als het originele kraanwater, maar in hogere concentratie. Het is niet giftig. Het bevat meer calcium, magnesium, natrium, nitraten en eventueel andere opgeloste stoffen dan kraanwater. Het mag veilig via het riool worden afgevoerd, of voor bepaalde doeleinden worden hergebruikt.',
  },
  {
    question: 'Kan ik het afvalwater van mijn osmosefilter hergebruiken?',
    answer:
      'Ja, voor veel toepassingen. Het concentraat is geschikt voor het doorspoelen van het toilet, dweilen en soppen (niet voor wassen of koken), begietiging van de tuin voor niet-gevoelige planten (vermijd gevoelige planten die last hebben van hard water). Het is niet geschikt voor aquaria, zuigelingenvoeding of toepassingen waar laag TDS water vereist is.',
  },
  {
    question: 'Wat is zero-waste osmose?',
    answer:
      'Zero-waste osmose of gesloten-kringloop-osmose zijn systemen die het concentraat (afvalwater) niet afvoeren maar terugvoeren naar de invoer van het systeem. Hierdoor kan het rendement oplopen tot 80-95%. Deze systemen zijn technisch geavanceerder en kosten 800-1.500 euro. Ze gebruiken ook meer energie en vereisen regelmatig spoelen om ophoping van concentraat in het membraan te voorkomen.',
  },
  {
    question: 'Waarom produceert een osmosefilter zoveel afvalwater?',
    answer:
      'Het RO-membraan werkt door de afgevangen stoffen (PFAS, lood, nitraten, bacterien) te concentreren in een afvalwaterstroom die continu wordt afgevoerd. Zonder deze constante afvoer zou het concentraat zich ophopen aan het membraanoppervlak en de filtratie belemmeren (concentratiepolarisatie). Het afvalwater is daarmee functioneel: het houdt het membraan schoon en operationeel.',
  },
  {
    question: 'Hoeveel water verspilt mijn osmosefilter per jaar?',
    answer:
      'Een gemiddeld huishouden verbruikt 4-6 liter osmosewater per dag. Met een standaard systeem (waste ratio 3:1) betekent dat 12-18 liter afvalwater per dag, ofwel 4.380-6.570 liter per jaar. Met een permeaatpomp (waste ratio 1:1) is dat slechts 4-6 liter afvalwater per dag, ofwel 1.460-2.190 liter per jaar. Ter vergelijking: een bad vullen kost 150-200 liter.',
  },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
    { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
    { '@type': 'ListItem', position: 3, name: 'Osmosefilter rendement', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/rendement' },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosefilter rendement: afvalwater verhouding en efficiëntie verbeteren',
  description:
    'Een standaard osmosefilter produceert 1 liter drinkwater op 3-4 liter afvalwater. Permeaatpomp en tankless systemen verbeteren dit aanzienlijk.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/rendement',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OmgekeerdeOsmoseRendementPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Osmosefilter rendement</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosefilter rendement: afvalwater verhouding en efficiëntie verbeteren
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een standaard osmosefilter produceert 1 liter drinkwater per 3&ndash;4 liter invoerwater:
            een rendement van slechts 25%. Een permeaatpomp en moderne tankless systemen verbeteren
            dit significant. Uitleg over de oorzaken en alle optimalisatiemogelijkheden.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Een standaard osmosefilter heeft 25% rendement: 3-4 liter afvalwater per liter drinkwater. Een permeaatpomp (40-80 euro) verbetert dit naar 40-50% zonder extra energie. Tankless systemen halen 50-75%. Zero-waste systemen tot 95%. Het afvalwater (concentraat) is niet giftig en kan worden hergebruikt voor toilet, tuin of vloer." />

        <CTABanner context="osmose" />

        {/* Wat is rendement */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is osmoserendement (recovery rate)?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het rendement van een osmosefilter &mdash; ook wel recovery rate of productiviteitsratio
            genoemd &mdash; is het percentage van het invoerwater dat door het membraan gaat als
            drinkwater (permeaat), versus het totale invoerwater.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-4">
            <p className="font-semibold text-[#003F5C] mb-3">Rekenvoorbeeld:</p>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-white rounded-lg p-3">
                <p className="text-2xl font-bold text-[#003F5C]">4 L</p>
                <p className="text-gray-500">Invoerwater</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-2 border-green-400">
                <p className="text-2xl font-bold text-green-700">1 L</p>
                <p className="text-gray-500">Drinkwater</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-2 border-amber-400">
                <p className="text-2xl font-bold text-amber-700">3 L</p>
                <p className="text-gray-500">Afvalwater</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">Standaard systeem: 25% rendement (waste ratio 3:1)</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Het afvalwater (concentraat) wordt continu via de afvalwaterleiding naar het riool
            afgevoerd. Dit is functioneel: de afvoer houdt het membraan schoon en voorkomt
            concentratiepolarisatie, waarbij opgehoopte stoffen de filtratie belemmeren.
          </p>
        </section>

        {/* Waarom afvalwater */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom is er afvalwater bij omgekeerde osmose?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het RO-membraan werkt als een moleculaire zeef. Alle afgevangen stoffen &mdash; PFAS,
            lood, nitraten, medicijnresten, bacterien &mdash; worden geconcentreerd in een
            reststroon (concentraat). Dit concentraat moet continu worden afgevoerd om twee
            problemen te voorkomen:
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-start">
              <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
              <div>
                <p className="font-semibold text-gray-900">Concentratiepolarisatie</p>
                <p className="text-sm text-gray-600">Zonder afvoer stapelen afgevangen stoffen zich op aan het membraanoppervlak. Dit verlaagt de filterdruk, vermindert de wateropbrengst en beschadigt het membraan op termijn.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
              <div>
                <p className="font-semibold text-gray-900">Membraanvervuiling (scaling)</p>
                <p className="text-sm text-gray-600">Calcium en magnesium in het concentraat kunnen neerslaan op het membraan als kalksteen (CaCO3), wat de levensduur verkort. Continue afvoer van concentraat voorkomt dit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Factoren die rendement beinvloeden */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat beïnvloedt het rendement?</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Factor</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Effect op rendement</th>
                  <th className="border border-gray-200 px-3 py-2 text-left text-[#003F5C]">Optimum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Waterdruk</td>
                  <td className="border border-gray-200 px-3 py-2">Hogere druk = betere doorstroom = beter rendement</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">5&ndash;8 bar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Watertemperatuur</td>
                  <td className="border border-gray-200 px-3 py-2">Koud water (&lt;15&deg;C) geeft 20&ndash;30% lager rendement</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">25&deg;C</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Membraankwaliteit</td>
                  <td className="border border-gray-200 px-3 py-2">Versleten membraan produceert minder drinkwater</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">Verwissel elke 2&ndash;3 jaar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">TDS van invoerwater</td>
                  <td className="border border-gray-200 px-3 py-2">Hoger TDS = meer concentraat nodig = lager rendement</td>
                  <td className="border border-gray-200 px-3 py-2">&lt;500 mg/L</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Permeaatpomp</td>
                  <td className="border border-gray-200 px-3 py-2">Verbetert rendement van 25% naar 40&ndash;50%</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700">Aanbevolen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Verbetering methoden */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Rendement verbeteren: drie opties</h2>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
                <h3 className="font-semibold text-[#003F5C]">Permeaatpomp installeren</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste prijs/kwaliteit</span>
              </div>
              <p className="text-gray-700 text-sm mb-2">
                Een permeaatpomp gebruikt de druk van het afvalwater als tegenwicht voor het
                inkomende water, waardoor het membraan efficienter werkt. Geen stroom nodig.
                Rendement verbetert van 25% naar 40&ndash;50%.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                <span>Kosten: &euro;40&ndash;80</span>
                <span>Installatie: inline in afvalwaterleiding</span>
                <span>Rendement: +50&ndash;75% beter</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
                <h3 className="font-semibold text-[#003F5C]">Tankless systeem met hogere capaciteit</h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Nieuw systeem</span>
              </div>
              <p className="text-gray-700 text-sm mb-2">
                Moderne tankless systemen met 400&ndash;800 GPD membranen halen een rendement
                van 50&ndash;75%. Door de hogere productiecapaciteit per tijdseenheid is de
                waste ratio aanzienlijk lager dan oudere systemen.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                <span>Kosten: &euro;500&ndash;1.200</span>
                <span>Rendement: 50&ndash;75%</span>
                <span>Geen tank nodig</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
                <h3 className="font-semibold text-[#003F5C]">Zero-waste osmose (recirculatie)</h3>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold">Maximaal rendement</span>
              </div>
              <p className="text-gray-700 text-sm mb-2">
                Geavanceerde systemen recirculeren het concentraat terug naar de invoer van het
                membraan. Het water maakt meerdere slagen door het systeem. Rendement 80&ndash;95%.
                Vereist regelmatig spoelen om ophoping te voorkomen.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                <span>Kosten: &euro;800&ndash;1.500</span>
                <span>Rendement: 80&ndash;95%</span>
                <span>Complexer onderhoud</span>
              </div>
            </div>
          </div>
        </section>

        {/* Milieuimpact */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Milieuimpact en afvalwater hergebruiken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een standaard 4-persoons huishouden verbruikt circa 4&ndash;6 liter osmosewater per dag.
            Met een standaard systeem (waste ratio 3:1) is dat 12&ndash;18 liter afvalwater per dag,
            ofwel 4.380&ndash;6.570 liter extra waterverbruik per jaar. Met een permeaatpomp
            halveert dit naar 2.190&ndash;3.285 liter per jaar.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het concentraat is niet giftig: het bevat dezelfde stoffen als kraanwater, maar
            meer geconcentreerd. Het is bruikbaar voor:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Toilet doorspoelen</strong> &mdash; meest efficiënt hergebruik, spaart leidingwater</li>
            <li><strong>Vloer dweilen en soppen</strong> &mdash; geschikt voor niet-eetbare toepassingen</li>
            <li><strong>Tuin en plantenwater</strong> &mdash; geschikt voor niet-gevoelige planten; vermijd gevoelige planten bij hoog TDS concentraat</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Hergebruik van concentraat voor de toilet kan het netto waterverbruik van een
            osmosesysteem terugbrengen tot nagenoeg nul extra verbruik ten opzichte van
            direct kraanwater gebruik.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose uitleg', desc: 'Hoe werkt het membraan en wat filtert het eruit?' },
              { href: '/omgekeerde-osmose/waterdruk', title: 'Waterdruk voor osmose', desc: 'Optimale druk voor maximaal rendement van uw RO-systeem.' },
              { href: '/osmose-filter/zonder-tank', title: 'Tankless osmosefilter', desc: 'Direct-flow systemen met hoger rendement en geen opslagtank.' },
              { href: '/waterfilter/milieu', title: 'Waterfilter en milieu', desc: 'Milieu-impact van osmose versus flessenwater en kraanwater.' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">{l.title}</p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over osmosefilter rendement</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
