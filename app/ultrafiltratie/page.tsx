import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat is ultrafiltratie (UF)? Membraanfiltratie voor thuis uitgelegd',
  description:
    'Ultrafiltratie (UF) filtert water via een 0,01–0,1 micron membraan: verwijdert bacteriën, virussen en colloïden zonder stroom of afvalwater. Vergelijking met osmose en keramisch.',
  alternates: { canonical: 'https://waterfilterplatform.nl/ultrafiltratie' },
  openGraph: {
    title: 'Ultrafiltratie (UF) — membraanfiltratie voor thuis uitgelegd',
    description:
      'Ultrafiltratie filtert bacteriën, virussen en colloïden zonder stroom of afvalwater. Vergelijking met omgekeerde osmose en keramisch filter.',
    url: 'https://waterfilterplatform.nl/ultrafiltratie',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat filtert ultrafiltratie precies?',
    answer:
      'Een UF-membraan met poriën van 0,01–0,1 micron houdt bacteriën (99,99%), virussen (99,9%), protozoa, colloïden en grote organische moleculen tegen. Kleine opgeloste stoffen zoals nitraten, fluoride, PFAS, pesticiden, zware metalen en calcium passeren het membraan — die worden dus niet verwijderd. Mineralen en het kalkgehalte van het water blijven onveranderd.',
  },
  {
    question: 'Wat is het verschil tussen UF en omgekeerde osmose?',
    answer:
      'Ultrafiltratie heeft grotere poriën (0,01–0,1 µm) dan omgekeerde osmose (0,0001 µm). UF verwijdert bacteriën en virussen maar laat mineralen, nitraten en PFAS door. RO verwijdert vrijwel alles, inclusief mineralen. UF produceert geen afvalwater en heeft geen hoge waterdruk of pomp nodig. RO heeft een afvalwaterverhouding van 1:1 tot 1:3 en vereist hogere waterdruk. UF-water bevat nog steeds gezonde mineralen; RO-water is bijna mineraalvrij.',
  },
  {
    question: 'Wat is het verschil tussen UF en een keramisch filter?',
    answer:
      'Keramische filters filteren op 0,1–0,9 micron — iets groter dan UF (0,01–0,1 µm). Beide verwijderen bacteriën effectief, maar UF is beter in het tegenhouden van virussen door de kleinere poriën. Keramische filters zijn robuuster en goedkoper, maar UF-membranen produceren een hogere doorstroomsnelheid. Keramische filters zijn vaker duurzaam en her te gebruiken; UF-membranen worden na 2–5 jaar vervangen.',
  },
  {
    question: 'Verwijdert UF nitraten of PFAS?',
    answer:
      'Nee. Ultrafiltratie verwijdert geen opgeloste chemische stoffen zoals nitraten, PFAS, pesticiden, medicijnresten, zware metalen of calciumionen. De poriën zijn daarvoor te groot. Voor het verwijderen van deze stoffen is omgekeerde osmose (RO) of nanofiltratie (NF) nodig. Een UF-filter is uitstekend voor microbiologische bescherming maar ongeschikt als enige oplossing voor chemische verontreinigingen.',
  },
  {
    question: 'Hoe lang gaat een UF-membraan mee?',
    answer:
      'Een UF-membraan gaat gemiddeld 2–5 jaar mee, afhankelijk van de waterkwaliteit, doorstroomvolume en onderhoudsfrequentie. Regelmatig terugspuelen (backflushing) verlengt de levensduur aanzienlijk. Vervanging van het membraan kost doorgaans €30–80. Wanneer de doorstroomsnelheid sterk afneemt of de microbiologische uitkomst verslechtert, is het tijd voor vervanging.',
  },
  {
    question: 'Is UF-water gezond? Blijven mineralen bewaard?',
    answer:
      'Ja, UF-water behoudt alle opgeloste mineralen: calcium, magnesium, kalium en natrium blijven volledig in het water. In tegenstelling tot omgekeerde osmose vindt geen remineralisatie stap nodig. Dit maakt UF-water van nature smaakvol en mineraalrijk. De WHO adviseert een minimale calciuminname via drinkwater; UF voldoet hieraan. UF-water is veilig voor dagelijks gebruik voor alle leeftijden.',
  },
  {
    question: 'Hoeveel afvalwater produceert een UF-systeem?',
    answer:
      'UF-systemen produceren vrijwel geen afvalwater onder normale gebruiksomstandigheden. Dit is een groot voordeel ten opzichte van omgekeerde osmose, dat 1–3 liter afvalwater produceert per liter drinkwater. Alleen bij het terugspuelen (backflushing) voor reiniging gaat tijdelijk water verloren — maar dit is minimaal en kan worden hergebruikt voor planten of reiniging.',
  },
  {
    question: 'Wanneer kies je voor UF en wanneer voor omgekeerde osmose (RO)?',
    answer:
      'Kies voor UF als je primaire zorg microbiologische veiligheid is (bacteriën, virussen), je mineralen wil behouden, je geen afvalwater wil produceren en je een eenvoudig systeem wil zonder pomp. Kies voor RO als je ook chemische verontreinigingen (nitraten, PFAS, pesticiden, zware metalen) wil verwijderen of als je in een gebied woont met slechte drinkwaterkwaliteit. RO biedt de meest volledige zuivering maar produceert afvalwater en verwijdert ook gezonde mineralen.',
  },
];

const filtratieSpectrum = [
  {
    type: 'Sedimentfilter',
    poriegrootte: '>1 µm',
    verwijdert: 'Zand, slib, roest, grote deeltjes',
    highlight: false,
  },
  {
    type: 'Keramisch filter',
    poriegrootte: '0,1–0,9 µm',
    verwijdert: 'Bacteriën, protozoa, grote deeltjes',
    highlight: false,
  },
  {
    type: 'Ultrafiltratie (UF)',
    poriegrootte: '0,01–0,1 µm',
    verwijdert: 'Bacteriën, virussen, colloïden, grote organische moleculen',
    highlight: true,
  },
  {
    type: 'Nanofiltratie (NF)',
    poriegrootte: '0,001–0,01 µm',
    verwijdert: 'Alles hierboven + hardheidszouten, sommige pesticiden',
    highlight: false,
  },
  {
    type: 'Omgekeerde osmose (RO)',
    poriegrootte: '~0,0001 µm',
    verwijdert: 'Alles hierboven + nitraten, PFAS, zware metalen, mineralen',
    highlight: false,
  },
];

const ufVsRo = [
  {
    kenmerk: 'Poriegrote membraan',
    uf: '0,01–0,1 µm',
    ro: '~0,0001 µm',
  },
  {
    kenmerk: 'Afvalwater',
    uf: 'Geen (0 liter)',
    ro: '1–3 liter per liter drinkwater',
  },
  {
    kenmerk: 'Mineralen bewaard',
    uf: 'Ja — volledig',
    ro: 'Nee — bijna volledig verwijderd',
  },
  {
    kenmerk: 'Bacteriën verwijderd',
    uf: 'Ja (99,99%)',
    ro: 'Ja (99,99%)',
  },
  {
    kenmerk: 'Virussen verwijderd',
    uf: 'Ja (99,9%)',
    ro: 'Ja (99,99%)',
  },
  {
    kenmerk: 'Nitraten verwijderd',
    uf: 'Nee',
    ro: 'Ja (90–95%)',
  },
  {
    kenmerk: 'PFAS verwijderd',
    uf: 'Nee',
    ro: 'Ja (>95%)',
  },
  {
    kenmerk: 'Druk nodig',
    uf: 'Laag (leidingdruk volstaat)',
    ro: 'Hoog (vaak pomp vereist)',
  },
  {
    kenmerk: 'Kosten aanschaf',
    uf: '€100–400',
    ro: '€150–600',
  },
  {
    kenmerk: 'Membraanlevensduur',
    uf: '2–5 jaar',
    ro: '2–5 jaar (membraan), filters jaarlijks',
  },
  {
    kenmerk: 'Remineralisatie nodig',
    uf: 'Nee',
    ro: 'Aanbevolen (extra filter)',
  },
];

export default function UltrafiltrationPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Wat is ultrafiltratie (UF)? Membraanfiltratie voor thuis uitgelegd',
          description:
            'Ultrafiltratie (UF) filtert water via een 0,01–0,1 micron membraan: verwijdert bacteriën, virussen en colloïden zonder stroom of afvalwater. Vergelijking met osmose en keramisch.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/ultrafiltratie',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Ultrafiltratie', url: 'https://waterfilterplatform.nl/ultrafiltratie' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Ultrafiltratie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Wat is ultrafiltratie (UF)? Membraanfiltratie voor thuis uitgelegd
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            <strong>Ultrafiltratie</strong> is een membraanfiltertechniek die bacteriën, virussen en
            colloïden tegenhoudt met poriën van 0,01–0,1 micron — zonder stroom, zonder afvalwater
            en met behoud van alle mineralen. Op deze pagina leggen we uit hoe UF werkt, wat het
            filtert, en wanneer je het verkiest boven omgekeerde osmose of een keramisch filter.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              UF vs omgekeerde osmose →
            </Link>
            <Link
              href="/waterfilter/soorten"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle filtersoorten bekijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Ultrafiltratie (UF) gebruikt een membraan met poriën van 0,01–0,1 micron om bacteriën (99,99%), virussen (99,9%) en colloïden te verwijderen. In tegenstelling tot omgekeerde osmose laat UF mineralen door en produceert het geen afvalwater. Geen stroom nodig. Kosten: €100–400, membraan meegaat 2–5 jaar." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-is" className="hover:underline">Wat is ultrafiltratie?</a></li>
            <li><a href="#spectrum" className="hover:underline">Filtratiespectrumtabel</a></li>
            <li><a href="#uf-vs-ro" className="hover:underline">UF vs omgekeerde osmose</a></li>
            <li><a href="#toepassingen" className="hover:underline">Toepassingen van UF</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud en membraanvervanging</a></li>
            <li><a href="#wanneer" className="hover:underline">Wanneer UF kiezen?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat is ultrafiltratie */}
        <section id="wat-is">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is ultrafiltratie?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Ultrafiltratie</strong> (UF) is een vorm van membraanfiltratie waarbij water onder
            lage druk door een semipermeabel membraan wordt geperst. De poriën van het membraan zijn
            0,01–0,1 micrometer (µm) groot — dat is 100 tot 10.000 keer kleiner dan een menselijk haar.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Door deze kleine poriegrote houdt het membraan fysiek alle bacteriën, virussen, protozoa en
            colloïden tegen. Kleine opgeloste moleculen — zoals mineralen (calcium, magnesium, kalium),
            nitraten, PFAS en pesticiden — zijn echter kleiner dan de poriën en passeren het membraan
            ongehinderd. Dit is fundamenteel anders dan{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>
            , waarbij vrijwel alles wordt tegengehouden.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De werking van UF is puur mechanisch — geen chemicaliën, geen actief koolstof, geen
            ionenwisseling. Water stroomt door het membraan en alles dat groter is dan de poriegrote
            wordt achtergehouden.
          </p>

          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <p className="font-semibold text-[#003F5C] mb-2">Wat UF wel en niet verwijdert</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-green-700 mb-1">Wel verwijderd door UF</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Bacteriën (E.coli, Legionella) — 99,99%</li>
                  <li>Virussen — 99,9%</li>
                  <li>Protozoa (Giardia, Cryptosporidium)</li>
                  <li>Colloïden en zwevende deeltjes</li>
                  <li>Grote organische moleculen</li>
                  <li>Sommige micro-plastics (grotere fractie)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-red-700 mb-1">Niet verwijderd door UF</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Nitraten en nitriet</li>
                  <li>PFAS en andere PFAS-stoffen</li>
                  <li>Pesticiden en herbiciden</li>
                  <li>Zware metalen (lood, cadmium)</li>
                  <li>Chloor en chloormijn</li>
                  <li>Calcium en magnesium (kalk)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Filtratiespectrumtabel */}
        <section id="spectrum">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filtratiespectrumtabel: van sediment tot osmose
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De filtratietechnieken voor drinkwater kunnen worden geordend op basis van de poriegrote van
            het filter. Hoe kleiner de poriën, hoe meer er tegengehouden wordt — maar ook hoe hoger de
            druk die nodig is en hoe meer afvalwater er ontstaat.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Techniek</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Poriegrote</th>
                  <th className="py-2.5 px-3 font-semibold">Wat wordt tegengehouden</th>
                </tr>
              </thead>
              <tbody>
                {filtratieSpectrum.map((r, i) => (
                  <tr
                    key={r.type}
                    className={
                      r.highlight
                        ? 'bg-[#E0F2FE] font-medium border-y-2 border-[#005F8A]'
                        : i % 2 === 0
                        ? 'bg-gray-50'
                        : 'bg-white border-b border-gray-100'
                    }
                  >
                    <td className="py-2.5 px-3">
                      {r.highlight ? (
                        <span className="flex items-center gap-2">
                          {r.type}
                          <span className="text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full">
                            Deze pagina
                          </span>
                        </span>
                      ) : (
                        r.type
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-xs">{r.poriegrootte}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{r.verwijdert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Noot: Poriegrotes zijn bij benadering. Prestaties variëren per fabrikant en watersamenstelling.
          </p>
        </section>

        {/* UF vs RO */}
        <section id="uf-vs-ro">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Ultrafiltratie vs omgekeerde osmose — volledige vergelijking
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            UF en RO zijn beide membraantechnieken maar werken op fundamenteel verschillende schalen.
            De keuze hangt af van wat je wil verwijderen en welke compromissen je bereid bent te maken.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kenmerk</th>
                  <th className="py-2.5 px-3 font-semibold text-center">UF</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Omgekeerde osmose</th>
                </tr>
              </thead>
              <tbody>
                {ufVsRo.map((r, i) => (
                  <tr
                    key={r.kenmerk}
                    className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.kenmerk}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.uf}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.ro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Wanneer kies je voor UF?</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Als de microbiologische waterkwaliteit je voornaamste zorg is — bacteriën, virussen,
                protozoa — en je de mineralen in je water wil behouden, is UF de logische keuze. UF is
                ook ideaal als pre-filter voor UV-desinfectie: UF verwijdert troebelheid die UV-licht
                zou blokkeren.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Wanneer kies je voor omgekeerde osmose?</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Als je ook chemische verontreinigingen wil verwijderen — nitraten, PFAS, pesticiden,
                zware metalen — is{' '}
                <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                  omgekeerde osmose
                </Link>{' '}
                de juiste keuze. RO is grondiger maar produceert afvalwater en verwijdert ook
                gezonde mineralen, wat een remineralisatiefase aanbevelenswaardig maakt.
              </p>
            </div>
          </div>
        </section>

        {/* Toepassingen */}
        <section id="toepassingen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Toepassingen van ultrafiltratie</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            UF wordt in uiteenlopende situaties ingezet, zowel thuis als in de buitenlucht. Hieronder
            de meest voorkomende toepassingen voor particulieren.
          </p>

          <div className="space-y-4">
            {[
              {
                titel: 'Onderbouw drinkwaterfilter voor de keuken',
                tekst:
                  'Een UF-systeem onder het aanrecht levert direct helder, microbiologisch veilig drinkwater via een aparte kraan. Het systeem werkt op leidingwaterdruk — geen elektrisch pomp nodig. Ideaal voor mensen die bacteriologische bescherming willen met behoud van de minerale smaak van het water. Kosten: €100–300 aanschaf, membraan €30–80 elke 2–5 jaar.',
              },
              {
                titel: 'Regenwaterfiltratie',
                tekst:
                  'Regenwater bevat bacteriën en organische deeltjes maar is vrijwel vrij van opgeloste chemicaliën. UF is bij uitstek geschikt voor regenwaterfiltratie: het houdt bacteriën en vuil tegen terwijl het zachte regenwater zijn lage mineralengehalte behoudt. Gebruik het gefilterde regenwater voor spoelbak, wasmachine of toiletspoeling.',
              },
              {
                titel: 'Buitengebruik: camping, expedities en noodfiltratie',
                tekst:
                  'Draagbare UF-filters worden veel gebruikt op camping, tijdens wandelexpedities en als noodfilter bij watercrises. Ze zijn licht, vereisen geen stroomtoevoer en filteren oppervlaktewater (beek, meer) microbiologisch veilig. Bekende vormen zijn pen-type filters en lifestraw-achtige systemen. Let op: ze filteren geen chemische verontreinigingen uit industriewater.',
              },
              {
                titel: 'Pre-filter voor UV-desinfectie',
                tekst:
                  'UV-desinfectie werkt alleen effectief als het water helder is — troebelheid blokkeert UV-licht en verlaagt de desinfectie-effectiviteit drastisch. Een UF-filter is de ideale pre-filter voor UV: het verwijdert alle troebelheid (inclusief bacteriën en deeltjes die bacteriën zouden afschermen van het UV-licht), waarna UV het water aanvullend desinfecteert. Samen vormen UF + UV een krachtig, chemievrij systeem.',
              },
            ].map(t => (
              <div key={t.titel} className="border border-gray-100 rounded-xl p-5">
                <p className="font-bold text-gray-900 mb-2">{t.titel}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{t.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Onderhoud: backflushing en membraanvervanging
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een UF-filter heeft weinig onderhoud nodig, maar correcte verzorging is essentieel voor
            een lange levensduur en optimale prestaties. De twee sleutelelementen zijn{' '}
            <strong>backflushing</strong> (terugspuelen) en periodieke{' '}
            <strong>membraanvervanging</strong>.
          </p>

          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  1
                </div>
                <div>
                  <p className="font-bold text-gray-900">Backflushing (terugspuelen)</p>
                  <p className="text-xs text-[#005F8A] font-medium">Interval: wekelijks tot maandelijks</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed ml-12">
                Bij backflushing stroomt water tijdelijk in de tegenovergestelde richting door het
                membraan. Zo worden vastgehechte deeltjes en biofouling losgespoeld en afgevoerd.
                Sommige systemen doen dit automatisch (geautomatiseerde backflush); andere vereisen
                handmatige activatie via een ventiel. Een wekelijks terugspuelen is aanbevolen bij
                hogere belasting (regenwater, oppervlaktewater); maandelijks volstaat voor
                normaal leidingwater.
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  2
                </div>
                <div>
                  <p className="font-bold text-gray-900">Chemische reiniging</p>
                  <p className="text-xs text-[#005F8A] font-medium">Interval: halfjaarlijks tot jaarlijks</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed ml-12">
                Wanneer backflushing niet meer voldoende is, kan het membraan chemisch worden gereinigd
                met een milde natriumhypochlorietoplossing (bleek, laag percentage) of citroenzuuroplossing.
                Natriumhypochloriet verwijdert biologische vervuiling; citroenzuur pakt kalkaanslag aan.
                Volg altijd de instructies van de fabrikant — sommige membraanmaterialen zijn gevoelig voor
                hoge chloorconcentraties.
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  3
                </div>
                <div>
                  <p className="font-bold text-gray-900">Membraanvervanging</p>
                  <p className="text-xs text-[#005F8A] font-medium">Interval: elke 2–5 jaar</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed ml-12">
                Na verloop van tijd verliest het membraan doorlaatbaarheid door irreversibele vervuiling
                (fouling). Signalen dat vervanging nodig is: sterk verminderde doorstroomsnelheid die
                niet verbetert na backflushing, zichtbare beschadiging van het membraan of verslechtering
                van de wateranalyse. Vervangende membranen kosten €30–80 afhankelijk van het systeem.
                Bewaar het membraan vochtig bij bewaring en transport.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-5">
            <p className="font-semibold text-amber-900 mb-1">Vorstschade voorkomen</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              UF-membranen zijn kwetsbaar voor bevriezing. Bij buiteninstallaties of in onverwarmde
              ruimtes: verwijder altijd het water uit het systeem voor de winter of bescherm het systeem
              tegen temperaturen onder 0 °C. Bevroren en ontdooide membranen kunnen microscopische
              scheuren vertonen die de filtratie-effectiviteit ernstig verminderen.
            </p>
          </div>
        </section>

        {/* Wanneer UF kiezen */}
        <section id="wanneer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer kies je voor UF en wanneer voor een alternatief?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            UF is een uitstekende keuze in specifieke situaties. Hieronder een overzicht van
            wanneer UF de juiste keuze is en wanneer een andere techniek beter past.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
              <p className="font-bold text-green-900 mb-2 text-sm">Kies voor UF als...</p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Microbiologische veiligheid je prioriteit is</li>
                <li>Je mineralen in het water wil behouden</li>
                <li>Je geen afvalwater wil produceren</li>
                <li>Je regenwater wil filteren</li>
                <li>Je een pre-filter voor UV wil</li>
                <li>Je een eenvoudig systeem zonder stroom wil</li>
                <li>Je op camping of expeditie water wil filteren</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="font-bold text-blue-900 mb-2 text-sm">Kies een alternatief als...</p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Je nitraten of PFAS wil verwijderen (kies RO)</li>
                <li>Je pesticiden of zware metalen wil filteren (kies RO)</li>
                <li>Je kalk uit het water wil halen (kies ontharder)</li>
                <li>Je grote volumes snel wil filteren (kies sediment + UV)</li>
                <li>Je alleen smaak wil verbeteren (kies koolstoffilter)</li>
                <li>Je een eenvoudige, goedkope oplossing wil (kies keramisch)</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Twijfel je welk systeem het beste bij jou past? Bekijk onze{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              vergelijking van alle waterfiltersoorten
            </Link>{' '}
            of lees meer over{' '}
            <Link href="/keramisch-filter" className="text-[#005F8A] underline hover:no-underline">
              keramische filters
            </Link>
            ,{' '}
            <Link href="/uv-filter" className="text-[#005F8A] underline hover:no-underline">
              UV-filters
            </Link>{' '}
            en{' '}
            <Link href="/sedimentfilter" className="text-[#005F8A] underline hover:no-underline">
              sedimentfilters
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'De grondigste filtratie: 95–99% verwijdering van alle opgeloste stoffen inclusief PFAS.',
              },
              {
                href: '/keramisch-filter',
                title: 'Keramisch filter',
                desc: 'Robuuste filtratie op 0,1–0,9 µm: bacteriën en protozoa zonder membraanvervanging.',
              },
              {
                href: '/uv-filter',
                title: 'UV-filter',
                desc: 'UV-desinfectie doodt bacteriën en virussen chemievrij. Combineert goed met UF.',
              },
              {
                href: '/sedimentfilter',
                title: 'Sedimentfilter',
                desc: 'Eerste filterstap voor zand, roest en slib. Goede pre-filter voor UF en RO.',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Alle waterfiltersoorten',
                desc: 'Van filterkan tot osmose: overzicht van alle beschikbare filtermethodes.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Osmose vs UF: complete vergelijking',
                desc: 'Wanneer kies je voor RO en wanneer volstaat ultrafiltratie? Gedetailleerde analyse.',
              },
            ].map(l => (
              <Link
                key={l.href + l.title}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">
                  {l.title}
                </p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over ultrafiltratie
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
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
