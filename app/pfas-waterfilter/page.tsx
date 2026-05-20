import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'PFAS waterfilter: de complete gids voor 2026',
  description:
    'Welke waterfilters verwijderen PFAS? Vergelijking van osmose, koolstof en nanofiltration. EU-norm 2026 uitgelegd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter' },
};

const faqItems = [
  {
    question: 'Welk waterfilter verwijdert PFAS het best?',
    answer:
      'Omgekeerde osmose (RO) is de meest effectieve methode voor PFAS-verwijdering: 95-99% reductie voor zowel langketenige als kortketenige PFAS. Nanofiltration scoort 90%+. Actief koolblokfilters halen 80-97% voor langketens maar zijn minder betrouwbaar voor kortketens. Filterkannen zijn niet geschikt voor PFAS-verwijdering.',
  },
  {
    question: 'Wat zijn PFAS en waarom heten ze "forever chemicals"?',
    answer:
      'PFAS (per- en polyfluoralkylstoffen) zijn een groep van meer dan 4.700 synthetische verbindingen met een uiterst stabiele koolstof-fluorbinding (C-F). Deze binding is de sterkste in de organische chemie en breekt niet af door zonlicht, hitte of biologische processen. Daardoor hopen PFAS zich permanent op in het milieu en in het menselijk lichaam — vandaar de naam "forever chemicals".',
  },
  {
    question: 'Wat is de EU-norm voor PFAS in drinkwater in 2026?',
    answer:
      'Sinds 2026 geldt de EU-drinkwaterrichtlijn (2020/2184) met een norm van 0,10 µg/L voor de som van 20 PFAS-verbindingen (PFAS-20 parameter). Voor de vier meest gevaarlijke stoffen (PFOS, PFOA, PFNA en PFHxS samen) geldt een aparte norm van 0,05 µg/L. Nederlandse drinkwaterbedrijven zijn wettelijk verplicht hieraan te voldoen.',
  },
  {
    question: 'Is kraanwater in Nederland veilig wat PFAS betreft?',
    answer:
      'Volgens RIVM voldoet de overgrote meerderheid van het Nederlandse leidingwater aan de EU-PFAS-norm. Er zijn echter bekende hotspots: de omgeving van Dordrecht/Papendrecht (Chemours), regio Schiphol en gebieden nabij militaire vliegbases. Particuliere putten en bronwater zijn niet beschermd door drinkwaterzuivering en vormen een groter risico.',
  },
  {
    question: 'Verwijdert een Brita-filterkraan PFAS?',
    answer:
      'Nee, filterkannen zoals Brita zijn niet ontworpen voor PFAS-verwijdering en worden door experts niet aanbevolen als PFAS-filter. De korte contacttijd en het type actief kool in filterkannen zijn onvoldoende voor betrouwbare PFAS-reductie. Voor PFAS verwijdering is omgekeerde osmose of een gecertificeerd koolstofblokfilter nodig.',
  },
  {
    question: 'Verwijdert een UV-filter of waterontharder PFAS?',
    answer:
      'Nee. UV-lampen hebben geen enkel effect op PFAS — ze bestrijden alleen bacterieen en virussen. Waterontharders (ionenwisselaars voor kalk) verwijderen evenmin PFAS. Alleen mechanische filtratie via een osmosemembraan of adsorptie via actief kool kan PFAS reduceren.',
  },
  {
    question: 'Hoe lang gaat een osmosefilter mee voor PFAS-verwijdering?',
    answer:
      'Een osmosemembraan blijft doorgaans 2-3 jaar effectief voor PFAS-verwijdering. De voorfilters (sediment en koolstof) vervang je jaarlijks. Overschrijd nooit de aanbevolen vervangingsdatum: een beschadigd membraan laat PFAS door zonder dat dit zichtbaar is aan de smaak of kleur van het water.',
  },
  {
    question: 'Wat is het verschil tussen PFOS, PFOA en de PFAS-20?',
    answer:
      'PFOS (perfluoroctaansulfonzuur) en PFOA (perfluoroctaanzuur) zijn de twee bekendste en meest onderzochte PFAS-verbindingen. De PFAS-20 is de set van 20 specifieke PFAS-verbindingen die de EU heeft aangewezen voor monitoring in drinkwater, waaronder PFOS, PFOA, PFNA, PFHxS en 16 andere verbindingen. De EU-norm van 0,10 µg/L geldt voor de som van deze 20 stoffen.',
  },
];

const filterData = [
  { methode: 'Omgekeerde osmose (RO)', langketen: '95-99%', kortketen: '85-95%', kosten: 'EUR 150-1.200', aanbevolen: true },
  { methode: 'Nanofiltration (NF)', langketen: '90-99%', kortketen: '80-90%', kosten: 'EUR 300-800', aanbevolen: true },
  { methode: 'Actief kool (blokfilter)', langketen: '80-97%', kortketen: '40-70%', kosten: 'EUR 50-200', aanbevolen: false },
  { methode: 'Actief kool (GAC granulaat)', langketen: '70-90%', kortketen: '30-60%', kosten: 'EUR 30-100', aanbevolen: false },
  { methode: 'Filterkraan (Brita-type)', langketen: 'Onbekend', kortketen: 'Onbekend', kosten: 'EUR 50-100', aanbevolen: false },
  { methode: 'UV-lamp', langketen: '0%', kortketen: '0%', kosten: 'EUR 30-150', aanbevolen: false },
];

export default function PfasWaterfilterPage() {
  return (
    <>
      <SchemaOrg
        type="FAQPage"
        faqItems={faqItems}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'PFAS waterfilter: de complete gids voor 2026',
          description: 'Welke waterfilters verwijderen PFAS? Vergelijking van osmose, koolstof en nanofiltration. EU-norm 2026 uitgelegd.',
          datePublished: '2026-04-25',
          dateModified: '2026-04-25',
          url: 'https://waterfilterplatform.nl/pfas-waterfilter',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#003F5C]">PFAS waterfilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS waterfilter: de complete gids voor 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            PFAS zijn &ldquo;forever chemicals&rdquo; die zich ophopen in het milieu en het menselijk lichaam. Sinds 2026 geldt in de EU een strikte norm van 0,10 µg/L voor de som van 20 PFAS in drinkwater. Welke filters werken echt, welke niet, en wat is de goudstandaard?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#filtertabel"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Vergelijkingstabel filters
            </Link>
            <Link
              href="/pfas-waterfilter/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              PFAS waterfilter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Omgekeerde osmose is de goudstandaard voor PFAS-verwijdering: 95-99% reductie, ook voor kortketenige PFAS. De EU-norm van 0,10 µg/L (som-20) geldt in Nederland vanaf 2026. Filterkannen en UV-lampen werken niet voor PFAS. Controleer uw situatie: de meeste Nederlanders krijgen veilig leidingwater, maar hotspots bij Chemours/Dordrecht en Schiphol bestaan." />

        {/* Wat zijn PFAS */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn PFAS?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PFAS staat voor per- en polyfluoralkylstoffen: een verzamelnaam voor meer dan 4.700 synthetische chemische verbindingen. De bekendste zijn PFOS (perfluoroctaansulfonzuur) en PFOA (perfluoroctaanzuur), maar ook GenX-stoffen, PFNA en PFHxS behoren tot de familie. Wat ze gemeen hebben is de extreem stabiele koolstof-fluorbinding (C-F-binding) — de sterkste binding in de organische chemie.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Door deze binding breken PFAS niet af in het milieu, door zonlicht of door biologische processen. Ze stapelen zich op in de bodem, grondwater, oppervlaktewater en het menselijk lichaam. Dat is waarom ze &ldquo;forever chemicals&rdquo; worden genoemd: eenmaal uitgestoten, blijven ze praktisch permanent aanwezig.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PFAS zijn decennialang verwerkt in antiaanbaklagen (Teflon), impregneersprays voor kleding en meubels, AFFF-blusschuim, voedselprikkagen, cosmetica en industriele processen. De gezondheidseffecten bij langdurige blootstelling aan hoge concentraties zijn ernstig: schildklierproblemen, verminderde werking van het immuunsysteem, verhoogd cholesterol, en bij PFOS en PFOA een verhoogd risico op nierkanker en testiskanker.
          </p>
        </section>

        {/* EU-norm */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De EU-norm 2026: wat veranderde er?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Vanaf 2026 is de EU-drinkwaterrichtlijn (2020/2184) volledig van kracht in Nederland. De nieuwe norm introduceert de zogenoemde PFAS-20 parameter: de som van 20 specifieke PFAS-verbindingen in drinkwater mag niet meer dan <strong>0,10 µg/L</strong> bedragen. Voor de vier meest toxische verbindingen samen (PFOS, PFOA, PFNA en PFHxS) geldt bovendien een strengere grenswaarde van <strong>0,05 µg/L</strong>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dit is een fundamentele verandering ten opzichte van de vorige situatie, waarbij alleen voor individuele stoffen normen golden. De nieuwe aanpak erkent dat een mengsel van meerdere PFAS-verbindingen — elk onder de individuele grenswaarde — samen toch schadelijk kan zijn (mengselwerking).
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-4">
            <p className="font-semibold text-[#003F5C] mb-2">Wat betekent 0,10 µg/L in de praktijk?</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              0,10 microgram per liter is een uiterst lage concentratie. Ter vergelijking: een suikerkorrel weegt circa 1.000 microgram. De EU-norm is vastgesteld op basis van pragmatische haalbaarheid voor drinkwaterbedrijven — niet op basis van een vastgesteld &ldquo;veilig&rdquo; niveau voor de volksgezondheid. Het EFSA (de Europese voedselautoriteit) stelde in 2020 dat er eigenlijk geen veilig niveau bestaat voor PFOS en PFOA.
            </p>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Meer over normen en wetgeving leest u op onze pagina <Link href="/pfas-waterfilter/normen-2026" className="text-[#005F8A] underline">PFAS normen 2026</Link>.
          </p>
        </section>

        {/* NL situatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PFAS in Nederlands drinkwater: de huidige situatie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Volgens het RIVM (Rijksinstituut voor Volksgezondheid en Milieu) voldoet de overgrote meerderheid van het Nederlandse leidingwater aan de EU-norm. Drinkwaterbedrijven zijn wettelijk verplicht het water te zuiveren en te monitoren voordat het uw kraan bereikt.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er zijn echter bekende risicogebieden waar historisch verhoogde PFAS-concentraties zijn gemeten:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm leading-relaxed">
            <li><strong>Dordrecht/Papendrecht:</strong> Historische uitstoot door de Chemours-fabriek (voorheen DuPont). Oasen, het lokale drinkwaterbedrijf, past actieve behandeling toe en voldoet nu aan de norm.</li>
            <li><strong>Omgeving Schiphol:</strong> PFAS-houdend AFFF-blusschuim uit jarenlange brandoefeningen heeft het grondwater beinvloed. Waternet monitort regelmatig.</li>
            <li><strong>Militaire vliegbases:</strong> Gilze-Rijen, Eindhoven Airport, De Peel — vergelijkbare blusschuimproblematiek in de omgeving.</li>
            <li><strong>Particuliere putten en bronwater:</strong> Niet beschermd door drinkwaterzuivering; het grootste risico voor individuele huishoudens.</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bekijk per regio de situatie op onze pagina <Link href="/pfas-waterfilter/gebieden-nederland" className="text-[#005F8A] underline">PFAS risicogebieden in Nederland</Link>, of leer hoe u uw water kunt laten <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] underline">testen op PFAS</Link>.
          </p>
        </section>

        {/* Filtertabel */}
        <section id="filtertabel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijking: welke filters verwijderen PFAS?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Niet alle waterfilters zijn geschikt voor PFAS-verwijdering. De onderstaande tabel vergelijkt zes filtermethoden op effectiviteit voor zowel langketenige PFAS (C8 en langer, zoals PFOS en PFOA) als kortketenige PFAS (C4-C7, zoals GenX en PFBS).
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold text-xs">Filtermethode</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Langketenige PFAS</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Kortketenige PFAS</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Systeemkosten</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Aanbevolen</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((row, i) => (
                  <tr key={row.methode} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800 text-xs">{row.methode}</td>
                    <td className={`py-2.5 px-2 text-center text-xs font-medium ${row.aanbevolen ? 'text-green-700' : 'text-gray-600'}`}>{row.langketen}</td>
                    <td className={`py-2.5 px-2 text-center text-xs font-medium ${row.aanbevolen ? 'text-green-700' : 'text-red-600'}`}>{row.kortketen}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{row.kosten}</td>
                    <td className="py-2.5 px-2 text-center text-xs">
                      {row.aanbevolen
                        ? <span className="text-green-700 font-semibold">Ja</span>
                        : <span className="text-red-600">Nee</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-6">Indicatieve verwijderingspercentages op basis van gepubliceerde laboratoriumdata en NSF/ANSI testresultaten. Bijgewerkt mei 2026.</p>
        </section>

        {/* Waarom osmose de goudstandaard is */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom omgekeerde osmose de goudstandaard is</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een omgekeerd osmosefilter gebruikt een semipermeable membraan met porieen van slechts <strong>0,0001 micrometer</strong> — kleiner dan de meeste PFAS-moleculen. Water wordt onder druk door het membraan geperst; de PFAS-verbindingen blijven aan de vuile kant achter en worden afgevoerd via het concentraatstroom.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De effectiviteit: 95-99% reductie voor langketenige PFAS zoals PFOS en PFOA, en 85-95% voor kortketenige PFAS zoals GenX en PFBS. Dit zijn de hoogste reductiepercentages van alle consumentenapparaten. NSF/ANSI 58-gecertificeerde osmosesystemen zijn onafhankelijk getest op PFAS-verwijdering.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een bijkomend voordeel: osmose verwijdert tegelijk ook nitraten, lood, arseen, kalk, microplastics en andere verontreinigingen. Het is een alomvattende oplossing, niet alleen voor PFAS.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Wilt u weten welk model u het beste kunt kopen? Lees onze gids <Link href="/pfas-waterfilter/kopen" className="text-[#005F8A] underline">PFAS waterfilter kopen</Link> of bekijk de uitgebreide pagina over <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
          </p>
        </section>

        {/* Wat NIET werkt */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat werkt NIET voor PFAS?</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-300 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Filterkannen (Brita, BWT, etc.)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Niet aanbevolen voor PFAS. De korte contacttijd en het type actief kool in filterkannen zijn onvoldoende voor betrouwbare PFAS-reductie. Filterkannen zijn ontworpen voor chloor en smaakverbetering, niet voor chemische verontreinigingen.</p>
            </div>
            <div className="border-l-4 border-red-300 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">UV-lampen</h3>
              <p className="text-gray-700 text-sm leading-relaxed">UV-licht heeft geen enkel effect op PFAS. UV-filters zijn ontworpen voor microbiologische ontsmetting (bacterieen, virussen) en werken niet tegen chemische verontreinigingen.</p>
            </div>
            <div className="border-l-4 border-red-300 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Koken</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Koken heeft geen effect op PFAS. Integendeel: bij langdurig koken verdampt het water en stijgt de PFAS-concentratie in het resterende water.</p>
            </div>
            <div className="border-l-4 border-yellow-300 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Actief koolfilters (GAC-granulaat)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Minder effectief dan koolstofblokfilters en zeker minder dan osmose. Werkt redelijk voor langketenige PFAS maar geeft onbetrouwbare resultaten voor kortketenige varianten. Risico op verzadiging: een uitgeput koolfilter kan PFAS teruggeven aan het water.</p>
            </div>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Subpagina links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over PFAS en waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/pfas-waterfilter/osmose', label: 'RO verwijdert 95-99% PFAS: alles uitgelegd' },
              { href: '/pfas-waterfilter/vergelijken', label: 'PFAS-filters vergelijken: RO vs koolstof vs NF' },
              { href: '/pfas-waterfilter/kosten', label: 'Kosten PFAS-filter: TCO-berekening 5 jaar' },
              { href: '/pfas-waterfilter/huis', label: 'PFAS filteren thuis: per woningtype' },
              { href: '/pfas-waterfilter/pfas-soorten', label: 'PFAS-soorten: PFOS, PFOA, GenX uitgelegd' },
              { href: '/pfas-waterfilter/kopen', label: 'PFAS waterfilter kopen: beste modellen 2026' },
              { href: '/pfas-waterfilter/testen', label: 'PFAS in uw water testen: hoe en waar?' },
              { href: '/pfas-waterfilter/normen-2026', label: 'PFAS normen 2026: EU-limiet uitgelegd' },
              { href: '/pfas-waterfilter/gebieden-nederland', label: 'PFAS hotspots per regio in Nederland' },
              { href: '/pfas-water', label: 'PFAS in drinkwater: risicos en normen' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2.5 border border-[#E0F2FE]"
              >
                <span>&#8594;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over PFAS waterfilters</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-[#003F5C] cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        <p className="text-gray-500 text-xs mt-4">
          Meer lezen: <Link href="/pfas-water" className="text-[#005F8A] underline">PFAS in drinkwater</Link>, <Link href="/waterfilter/soorten" className="text-[#005F8A] underline">alle soorten waterfilters</Link> en <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose gids</Link>.
        </p>

      </div>
    </>
  );
}
