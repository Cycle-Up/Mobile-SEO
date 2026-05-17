import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat is een keramisch waterfilter? Werking, types en wanneer kiezen?',
  description:
    'Alles over keramische waterfilters: hoe de microporiën werken, welke verontreinigingen worden tegengehouden, wanneer keramisch de juiste keuze is en hoe je.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keramisch-filter' },
  openGraph: {
    title: 'Keramisch waterfilter — complete gids over werking, types en onderhoud',
    description:
      'De volledige gids over keramische waterfilters: microporiënwerking, zilverimpregnatie, voor- en nadelen en vergelijking met UV en osmose.',
    url: 'https://waterfilterplatform.nl/keramisch-filter',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt een keramisch waterfilter?',
    answer:
      'Een keramisch waterfilter werkt via mechanische filtratie: water wordt door miljoenen microscopisch kleine poriën in het keramische materiaal geperst. Deeltjes die groter zijn dan de poriediameter worden fysiek tegengehouden. Er is geen elektriciteit nodig, geen chemische reactie en geen druk vereist — de zwaartekracht drijft het water door het filter. De filterkaars of schijf bestaat doorgaans uit diatomeeënaarde (fossielen van microscopische algen) of uit samengeperst calciumcarbonaat.',
  },
  {
    question: 'Welke poriegroottes zijn er en wat houden ze tegen?',
    answer:
      'Keramische filters zijn beschikbaar met poriegroottes van 0,1 tot 0,9 micron. Filters met poriën van 0,2–0,5 micron houden bacteriën (typisch 0,2–2 micron groot) effectief tegen. Protozoa en cysten (Giardia 8–15 micron, Cryptosporidium 4–6 micron) worden al bij grotere poriën geblokkeerd. Virussen (0,02–0,3 micron) zijn kleiner dan de meeste keramische poriën en worden doorgaans NIET effectief tegengehouden zonder extra behandeling.',
  },
  {
    question: 'Wat is zilverimpregnatie en waarom wordt het gebruikt?',
    answer:
      'Veel keramische filterkaarsjes bevatten colloïdaal zilver (Ag) in de keramische matrix. Zilver heeft van nature antibacteriële eigenschappen: het remt de celademhaling van bacteriën en verhindert hun reproductie. Zilverimpregnatie heeft twee voordelen: het doodt bacteriën die mogelijk in de poriën van het filter overleven, en het voorkomt bacteriële aangroei en biofilm op het filteroppervlak. Dit verlengt de levensduur en betrouwbaarheid van het filter aanzienlijk.',
  },
  {
    question: 'Hoe reinig ik een keramisch filter?',
    answer:
      'Keramische filters zijn reinigbaar en herbruikbaar, wat ze kostenefficiënt maakt. Reinig het filter onder koud stromend water met een schone zachte borstel — gebruik nooit zeep of chemische schoonmaakmiddelen, want die tasten de keramische matrix aan. Wanneer de doorstroomsnelheid merkbaar afneemt, is het tijd om te schrobben. Steriliseer het filter periodiek door het 10 minuten te laten koken in schoon water. Controleer het filter na elke reiniging op haarscheurtjes — een beschadigd filter is niet meer betrouwbaar en moet worden vervangen.',
  },
  {
    question: 'Hoe lang gaat een keramisch filter mee?',
    answer:
      'Een goed onderhouden keramisch filter gaat 1 tot 3 jaar mee, afhankelijk van de waterkwaliteit en het gebruiksvolume. Bij zeer troebel bronwater of putwater slijt het filter sneller door de hogere concentratie zwevende deeltjes. De levensduur wordt bepaald door de resterende dikte van de keramische wand: fabrikanten geven doorgaans een minimale wanddikte op (vaak 6–8 mm) waaronder het filter vervangen moet worden.',
  },
  {
    question: 'Verwijdert een keramisch filter ook virussen?',
    answer:
      'In de meeste gevallen niet afdoende. Virussen zijn doorgaans 0,02–0,3 micron groot — kleiner dan de poriediameter van gangbare keramische filters (0,2–0,9 micron). Zelfs filters met 0,2 micron poriën bieden geen gegarandeerde virusreductie. Voor virusverwijdering moet je keramisch combineren met een UV-filter of een RO-membraan. In gebieden met een hoog virusrisico (reizen naar ontwikkelingslanden, onbehandeld oppervlaktewater) is keramisch alleen onvoldoende.',
  },
  {
    question: 'Wat zijn de voor- en nadelen van een keramisch filter ten opzichte van andere filtertypes?',
    answer:
      'Voordelen: geen elektriciteit nodig, reinigbaar en herbruikbaar, lange levensduur (1–3 jaar), laag in aanschaf, effectief tegen bacteriën en sediment. Nadelen: langzame doorstroomsnelheid (0,5–3 liter per uur voor zwaartekrachtsystemen), verwijdert geen virussen, lost chemische stoffen, zware metalen of nitraten niet op, breekbaar materiaal. Ten opzichte van UV heeft keramisch het voordeel dat het ook sediment mechanisch wegfiltert. Ten opzichte van omgekeerde osmose mist het de chemische zuivering die RO biedt.',
  },
  {
    question: 'Hoe combineer ik een keramisch filter met UV of omgekeerde osmose?',
    answer:
      'Combineer keramisch als eerste mechanische filterstap vóór een UV-filter: de keramische fase verwijdert bacteriën en sediment, waarna de UV-lamp virussen neutraliseert in het nu heldere water. Een andere optie is keramisch als pre-filter voor een RO-systeem: het keramische filter vangt grove verontreinigingen op en verlengt zo de levensduur van het kostbare RO-membraan. In beide gevallen geldt: keramisch vóór de verfijnere behandelstap plaatsen.',
  },
];

const poriesTabel = [
  { contaminant: 'Zand, slib, roest', grootte: '> 50 micron', geblokkeerd: 'Ja (altijd)', porie: '0,9 μm' },
  { contaminant: 'Protozoa (Giardia)', grootte: '8–15 micron', geblokkeerd: 'Ja', porie: '0,9 μm' },
  { contaminant: 'Cryptosporidium', grootte: '4–6 micron', geblokkeerd: 'Ja', porie: '0,5 μm' },
  { contaminant: 'Bacteriën (E. coli)', grootte: '0,2–2 micron', geblokkeerd: 'Ja', porie: '0,2 μm' },
  { contaminant: 'Virussen', grootte: '0,02–0,3 micron', geblokkeerd: 'Nee', porie: 'Kleiner dan 0,1 μm (RO)' },
  { contaminant: 'Nitraten, pesticiden', grootte: 'Opgelost (moleculair)', geblokkeerd: 'Nee', porie: 'RO-membraan vereist' },
  { contaminant: 'Zware metalen', grootte: 'Opgelost (ionisch)', geblokkeerd: 'Nee', porie: 'RO-membraan vereist' },
];

const typesKeramisch = [
  {
    type: 'Filterkaars (candle filter)',
    prijs: '€ 10–40 per kaars',
    doorstroom: '0,5–2 L/uur',
    levensduur: '1–3 jaar',
    highlight: false,
  },
  {
    type: 'Potfilter (gravity filter)',
    prijs: '€ 30–100',
    doorstroom: '1–4 L/uur',
    levensduur: '1–3 jaar per kaars',
    highlight: false,
  },
  {
    type: 'Under-sink keramisch',
    prijs: '€ 80–200',
    doorstroom: '5–15 L/uur (druk)',
    levensduur: '6–12 maanden',
    highlight: true,
  },
];

export default function KeramischFilterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Wat is een keramisch waterfilter? Werking, types en wanneer kiezen?',
          description:
            'Complete gids over keramische waterfilters: hoe microporiën werken, zilverimpregnatie, reinigen, beperkingen en wanneer keramisch de beste keuze is.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/keramisch-filter',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Keramisch filter', url: 'https://waterfilterplatform.nl/keramisch-filter' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Keramisch filter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Keramisch waterfilter: werking, types en wanneer kiezen?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een keramisch waterfilter is een van de oudste en meest betrouwbare methoden om water
            te filteren. Het werkt puur mechanisch — geen stroom, geen chemicaliën — en is
            geschikt voor off-grid gebruik, camping en als onderdeel van een multi-stage
            filtersysteem. Op deze pagina lees je hoe keramische filters werken, welke typen
            beschikbaar zijn, wat ze wel en niet verwijderen en wanneer je voor keramisch kiest.
          </p>
          <QuickAnswer answer="Een keramisch waterfilter gebruikt microscopisch kleine poriën (0,1–0,9 micron) om bacteriën, cysten en sediment fysiek te blokkeren. Het verwijdert GEEN virussen, opgeloste chemicaliën of zware metalen zonder extra behandeling. Geen elektriciteit nodig. Reinigbaar en herbruikbaar. Ideaal voor off-grid gebruik en camping. Aanschaf: €30–150, filter gaat 1–3 jaar mee." />
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              href="/waterfilter/soorten"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Alle filtersoorten vergelijken →
            </Link>
            <Link
              href="/uv-filter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              UV-filter versus keramisch
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#hoe-werkt" className="hover:underline">Hoe werkt het?</a></li>
            <li><a href="#porieen" className="hover:underline">Poriegroottes en contaminanten</a></li>
            <li><a href="#zilver" className="hover:underline">Zilverimpregnatie</a></li>
            <li><a href="#types" className="hover:underline">Types keramische filters</a></li>
            <li><a href="#voordelen-nadelen" className="hover:underline">Voordelen en nadelen</a></li>
            <li><a href="#wanneer" className="hover:underline">Wanneer kiezen voor keramisch?</a></li>
            <li><a href="#onderhoud" className="hover:underline">Onderhoud en reiniging</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="hoe-werkt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe werkt een keramisch waterfilter?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Keramische filterkaarsjes en -schijven werken via het principe van{' '}
            <strong>mechanische microfiltratie</strong>. Het materiaal is doorspekt met miljoenen
            minuscule poriën die een onregelmatig doolhofpatroon vormen. Water sijpelt door
            dit labyrint van kanalen terwijl deeltjes die te groot zijn om door de poriën te
            passen fysiek worden achtergehouden op het oppervlak en in de poriën zelf.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste keramische filters zijn vervaardigd uit een van de volgende materialen:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4 list-disc list-inside">
            <li>
              <strong>Diatomeeënaarde</strong> (kiezelgoer): fossiele resten van microscopische
              algen (diatomeeën) die zijn samengeperst tot een poreus keramisch materiaal. Van
              nature onregelmatige poriënstructuur.
            </li>
            <li>
              <strong>Calciumcarbonaat keramiek</strong>: samengeperste calciumcarbonaat-
              kristallen gebakken op hoge temperatuur. Meer uniforme poriënstructuur dan
              diatomeeënaarde.
            </li>
            <li>
              <strong>Aluminiumoxide (Al₂O₃)</strong>: synthetisch keramisch materiaal met
              zeer uniforme en nauwkeurig controleerbare poriediameter. Gebruikt in
              hoogwaardige under-sink systemen.
            </li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In een <em>potfilter</em> of <em>gravity filter</em> drijft uitsluitend de
            zwaartekracht het water door de filterkaars — geen elektriciteit, geen waterdruk
            benodigd. In <em>under-sink keramische systemen</em> wordt de waterdruk van het
            leidingnet gebruikt voor een hogere doorstroomsnelheid.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Historische context:</strong> Keramische
            waterfilters werden voor het eerst grootschalig ingezet in de 19e eeuw, nadat John
            Doulton in 1827 de eerste filterkaars ontwikkelde voor Queen Victoria. De technologie
            is sindsdien verfijnd maar het basisprincipe is onveranderd — een bewijs van de
            betrouwbaarheid ervan.
          </div>
        </section>

        <section id="porieen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Poriegroottes: wat wordt er wel en niet tegengehouden?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De effectiviteit van een keramisch filter wordt bepaald door de poriediameter.
            Hoe kleiner de poriën, hoe meer wordt tegengehouden — maar ook hoe langzamer de
            doorstroomsnelheid. Onderstaande tabel laat zien welke contaminanten bij welke
            poriediameter worden geblokkeerd.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Contaminant</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Grootte</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Geblokkeerd?</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Benodigde porie</th>
                </tr>
              </thead>
              <tbody>
                {poriesTabel.map((r, i) => (
                  <tr key={r.contaminant} className={i % 2 === 0 ? 'border-b border-gray-100' : 'border-b border-gray-100 bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.contaminant}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600 text-xs">{r.grootte}</td>
                    <td className={`py-2.5 px-3 text-center font-semibold ${r.geblokkeerd === 'Nee' ? 'text-red-600' : 'text-green-700'}`}>
                      {r.geblokkeerd}
                    </td>
                    <td className="py-2.5 px-3 text-right text-xs text-gray-500">{r.porie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Gebaseerd op typische contaminantgroottes. Werkelijke retentie varieert per
            fabrikant en filtercondities.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Het belangrijkste inzicht uit deze tabel: keramiek is uitstekend voor bacteriën en
            sediment, maar onvoldoende voor virussen en opgeloste stoffen. Voor volledige
            microbiologische bescherming combineer je keramisch met een{' '}
            <Link href="/uv-filter" className="text-[#005F8A] underline hover:no-underline">
              UV-filter
            </Link>.
            Voor chemische zuivering is{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            de aangewezen techniek.
          </p>
        </section>

        <section id="zilver">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Zilverimpregnatie: wat doet het en heb je het nodig?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste hoogwaardige keramische filterkaarsjes bevatten <strong>colloïdaal zilver</strong>{' '}
            dat tijdens het productieproces in de keramische matrix is geïntegreerd. Zilver
            heeft van oudsher bekende antibacteriële eigenschappen — het verstoort enzymatische
            processen in bacteriële cellen en remt hun vermogen tot reproductie.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In de context van keramische filters vervult zilver twee functies:
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-[#003F5C]">1. Bacteriostatische werking:</strong> zilver
              doodt bacteriën die in de poriën van het filter zijn vastgehouden en voorkomt
              dat ze zich in het filtermateriaal vermenigvuldigen. Zonder zilverimpregnatie
              kunnen bacteriën zich in de vochtige poriën nestelen en na verloop van tijd de
              filterkant (schone zijde) bereiken.
            </div>
            <div className="border-l-4 border-[#005F8A] bg-[#E0F2FE] rounded-r-xl px-5 py-4 text-sm text-gray-700">
              <strong className="text-[#003F5C]">2. Biofilmpreventie:</strong> zilver remt
              de vorming van bacteriële biofilm op het filteroppervlak. Biofilm kan de
              doorstroomsnelheid verminderen en in extreme gevallen een reservoir van
              pathogenen vormen.
            </div>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De hoeveelheid zilver die in het gefilterde water achterblijft is doorgaans ver
            onder de WHO-grenswaarde van 0,1 mg/L. Voor langdurig gebruik kies je bij voorkeur
            een gecertificeerd filter (NSF 42 of 53) waarbij de zilvermigratie is getest en
            gedocumenteerd.
          </p>
        </section>

        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke types keramische filters zijn er?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Keramische waterfilters zijn beschikbaar in drie hoofdvormen, elk gericht op een
            andere gebruikssituatie en met een andere doorstroomcapaciteit.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Doorstroom</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Levensduur</th>
                </tr>
              </thead>
              <tbody>
                {typesKeramisch.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-right">{r.doorstroom}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.levensduur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Filterkaars (candle filter)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                De meest traditionele vorm: een cilindrische keramische kaars die verticaal in
                een pot of waterreservoir hangt. Water sijpelt van buiten naar binnen door de
                poriën. Kaarsjes zijn universeel en passen in veel filterpotten van verschillende
                merken. Ideaal voor camping, noodsituaties en off-grid gebruik. Schoonmaken
                gaat eenvoudig met een zachte borstel.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Potfilter (gravity filter)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een compleet systeem bestaande uit een bovenreservoir (ongefiltreerd water),
                één of meerdere filterkaarsjes en een onderreservoir (gefilterd water). Het
                bovenste reservoir wordt gevuld met bronwater, putwater of regenwater. Zwaartekracht
                drijft het water door de filterkaarsjes. Capaciteit van 5 tot 20 liter.
                Populair voor gezinsgebruik zonder wateraansluiting.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Under-sink keramisch (druksysteem)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wordt aangesloten op de koudwaterleiding onder het aanrecht. De leidingdruk
                drijft water door een keramische schijf met hoge doorstroomsnelheid. Vaak
                gecombineerd met een koolstoffilter voor geur- en smaakverbetering. Vereist
                een boring in het aanrecht voor de aparte filterkraan. Meest comfortabele optie
                voor dagelijks gebruik thuis.
              </p>
            </div>
          </div>
        </section>

        <section id="voordelen-nadelen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Voordelen en nadelen van een keramisch waterfilter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <p className="font-semibold text-green-700 mb-3 text-sm uppercase tracking-wide">Voordelen</p>
              <div className="space-y-3">
                {[
                  {
                    titel: 'Geen elektriciteit nodig',
                    tekst:
                      'Zwaartekrachtsfilters werken volledig zonder stroom — ideaal voor off-grid locaties, campings en noodsituaties.',
                  },
                  {
                    titel: 'Reinigbaar en herbruikbaar',
                    tekst:
                      'In tegenstelling tot de meeste andere filtertypen kun je een keramisch filter schoonborstelen en jarenlang blijven gebruiken.',
                  },
                  {
                    titel: 'Lange levensduur',
                    tekst:
                      'Goed onderhouden keramische kaarsjes gaan 1 tot 3 jaar mee — veel langer dan koolstofpatronen (3–6 maanden).',
                  },
                  {
                    titel: 'Laag in aanschaf',
                    tekst:
                      'Een kwalitatieve filterkaars kost €10–40. Een compleet potfiltersysteem €30–100. Lage instapdrempel.',
                  },
                  {
                    titel: 'Effectief tegen bacteriën en cysten',
                    tekst:
                      'Bij 0,2–0,5 micron poriën worden bacteriën en protozoa betrouwbaar geblokkeerd — zonder chemicaliën.',
                  },
                ].map(v => (
                  <div key={v.titel} className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold text-lg mt-0.5 shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{v.titel}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{v.tekst}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-red-600 mb-3 text-sm uppercase tracking-wide">Nadelen</p>
              <div className="space-y-3">
                {[
                  {
                    titel: 'Langzame doorstroomsnelheid',
                    tekst:
                      'Zwaartekrachtsfilters produceren 0,5 tot 3 liter per uur. Voor een gezin is dat bij intensief gebruik weinig.',
                  },
                  {
                    titel: 'Verwijdert geen virussen',
                    tekst:
                      'Virussen zijn kleiner dan de poriën en passeren het filter. Zonder UV of RO is keramisch onvoldoende in gebieden met virusrisico.',
                  },
                  {
                    titel: 'Geen chemische zuivering',
                    tekst:
                      'Nitraten, pesticiden, PFAS, chloor en zware metalen blijven in het gefilterde water. Alleen RO verwijdert deze stoffen.',
                  },
                  {
                    titel: 'Breekbaar',
                    tekst:
                      'Keramisch is breekbaar. Een gevallen filterkaars met een haarscheur moet onmiddellijk vervangen worden — een gebarsten filter filtert niet meer betrouwbaar.',
                  },
                  {
                    titel: 'Regelmatig reinigen vereist',
                    tekst:
                      'Bij vuil water neemt de doorstroomsnelheid snel af en moet het filter frequent worden schoongemaakt.',
                  },
                ].map(n => (
                  <div key={n.titel} className="flex gap-3 items-start">
                    <span className="text-red-500 font-bold text-lg mt-0.5 shrink-0">✗</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{n.titel}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{n.tekst}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="wanneer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer kies je voor keramisch — en wanneer niet?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Keramisch is niet de beste keuze voor elke situatie. Onderstaand overzicht helpt je
            bepalen wanneer keramisch de juiste techniek is en wanneer je beter voor UV of osmose
            kunt kiezen.
          </p>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <p className="font-semibold text-green-900 mb-2">Keramisch is de juiste keuze als:</p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Je geen elektriciteitsaansluiting hebt (camping, off-grid, noodsituaties)</li>
                <li>Je water filtert voor gebruik in een vakantiewoning of buitenverblijf</li>
                <li>Je een eerste mechanische filterstap wil in een multi-stage systeem</li>
                <li>Je duurzaamheid en herbruikbaarheid prioriteit geeft</li>
                <li>Je bacteriën en sediment wil verwijderen uit relatief helder water</li>
                <li>Je budget beperkt is en je toch basisbescherming wil</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-2">
                Kies voor{' '}
                <Link href="/uv-filter" className="text-[#005F8A] underline hover:no-underline">
                  UV
                </Link>{' '}
                in plaats van (of naast) keramisch als:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Je water afkomstig is van een onbekende of onbehandelde bron met virusrisico</li>
                <li>Je in een gebied reist met hoog gastro-intestinaal infectierisico</li>
                <li>Je volledige microbiologische zekerheid wil inclusief virussen</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-2">
                Kies voor{' '}
                <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                  omgekeerde osmose
                </Link>{' '}
                als:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Je ook chemische verontreinigingen wil verwijderen (nitraten, PFAS, pesticiden)</li>
                <li>Je last hebt van hard water en kalk wil elimineren</li>
                <li>Je maximale filterkwaliteit voor dagelijks drinkwater thuis wil</li>
                <li>Je een gezin hebt en een hogere waterproductie nodig hebt</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Onderhoud en reiniging: zo houd je je keramisch filter betrouwbaar
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Goed onderhoud is essentieel bij keramische filters. Een verstopt of beschadigd
            filter beschermt niet meer betrouwbaar. Volg onderstaande richtlijnen voor maximale
            levensduur en veiligheid.
          </p>
          <div className="space-y-3">
            {[
              {
                stap: 'Doorstroomsnelheid monitoren',
                interval: 'Wekelijks',
                actie:
                  'Meet hoe lang het duurt voordat het onderreservoir vol is. Merkbare vertraging is het signaal om te reinigen. Een goed filter produceert consistent 0,5–3 liter per uur.',
              },
              {
                stap: 'Schoonborstelen onder stromend water',
                interval: 'Bij afname doorstroom',
                actie:
                  'Verwijder de filterkaars. Schrobben onder koud stromend water met een schone zachte borstel. Geen zeep, geen chemicaliën. Schrobben verwijdert de bovenste laag keramisch materiaal inclusief vastgezette deeltjes.',
              },
              {
                stap: 'Steriliseren door koken',
                interval: 'Maandelijks of na lange stilstand',
                actie:
                  'Leg de filterkaars 10–20 minuten in kokend water. Dit doodt eventuele bacteriën die zich in het filter hebben genesteld. Laat volledig afkoelen voor herplaatsing.',
              },
              {
                stap: 'Inspectie op haarscheurtjes',
                interval: 'Na elke reiniging',
                actie:
                  'Houd de kaars tegen het licht en controleer op haarfijne scheurtjes. Een gebarsten filterkaars biedt geen betrouwbare bescherming meer en moet direct vervangen worden.',
              },
              {
                stap: 'Wanddikte meten',
                interval: 'Jaarlijks',
                actie:
                  'Door herhaaldelijk schrobben slijt de buitenste laag keramisch af. Fabrikanten specificeren een minimale wanddikte (doorgaans 6–8 mm) waaronder het filter moet worden vervangen.',
              },
              {
                stap: 'Reservoirs reinigen',
                interval: 'Maandelijks',
                actie:
                  'Het boven- en onderreservoir van een potfilter schoonmaken met warm water en azijn. Biofilmaangroei op de wanden van het reservoir kan ook een besmettingsbron zijn.',
              },
            ].map(r => (
              <div key={r.stap} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <div className="text-[#005F8A] text-lg shrink-0">⚙</div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline gap-2">
                    <p className="font-semibold text-gray-900 text-sm">{r.stap}</p>
                    <p className="text-xs text-[#005F8A] font-medium shrink-0">{r.interval}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{r.actie}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-red-50 border border-red-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-red-900">Veiligheidsregel:</strong> vervang een keramisch
            filter direct bij zichtbare haarscheurtjes, bij aanhoudende bacteriële besmetting
            van het gefilterde water of wanneer de wanddikte onder de minimale fabrieksgrens komt.
            Gebruik een beschadigd filter nooit in situaties waarbij microbiologische veiligheid
            kritisch is.
          </div>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen op WaterfilterPlatform</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/waterfilter/soorten',
                title: 'Soorten waterfilters',
                desc: 'Overzicht van alle filtertechnieken: keramisch, UV, RO, koolstof en meer.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'De meest grondige filtermethode: verwijdert ook chemische stoffen en virussen.',
              },
              {
                href: '/uv-filter',
                title: 'UV-filter',
                desc: 'UV-C desinfectie voor 99,9% reductie van bacteriën, virussen en protozoa.',
              },
              {
                href: '/sedimentfilter',
                title: 'Sedimentfilter',
                desc: 'Mechanische voorfilterstap die deeltjes en slib opvangt voor andere filters.',
              },
            ].map(l => (
              <Link
                key={l.href}
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

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over keramische waterfilters</h2>
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
