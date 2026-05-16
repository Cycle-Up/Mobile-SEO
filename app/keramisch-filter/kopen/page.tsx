import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Keramisch waterfilter kopen: koopgids en beste modellen 2026',
  description:
    'Koopgids voor keramische waterfilters: vergelijk 5 modellen (Doulton, Berkefeld, British Berkefeld, Gravity, Katadyn) op poriemaat, doorstroom, prijs en filterduur. Onafhankelijk advies.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keramisch-filter/kopen' },
  openGraph: {
    title: 'Keramisch waterfilter kopen — koopgids en modellenvergelijking 2026',
    description:
      'Welk keramisch waterfilter past bij uw situatie? 5-model vergelijking, koopadvies per situatie en wanneer u beter kiest voor UV of omgekeerde osmose.',
    url: 'https://waterfilterplatform.nl/keramisch-filter/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welke poriemaat heb ik nodig in een keramisch waterfilter?',
    answer:
      'Voor bescherming tegen bacteriën heeft u een poriemaat van maximaal 0,2–0,5 µm nodig. Protozoa (Giardia, Cryptosporidium) worden al tegengehouden bij 0,9 µm. Als uw voornaamste zorg sediment en slib is, volstaat 0,9 µm. Filters met 0,2 µm poriën zijn het meest effectief maar hebben een lagere doorstroomsnelheid. Kies altijd een filter met een absolute poriemaat (niet nominaal) als bacteriebescherming het doel is.',
  },
  {
    question: 'Wat is het verschil tussen een gravity filter en een druksysteem?',
    answer:
      'Een gravity filter (potfilter) werkt op zwaartekracht — geen stroom, geen wateraansluiting nodig. U vult het bovenreservoir handmatig en water sijpelt langzaam door de filterkaars naar het onderreservoir. Doorstroom: 1–4 liter per uur. Een druksysteem wordt aangesloten op de koudwaterleiding en gebruikt leidingdruk (2–5 bar) voor een hogere doorstroom (5–15 liter per uur). Druksystemen zijn comfortabeler voor dagelijks gebruik; gravity filters zijn ideaal voor off-grid en noodsituaties.',
  },
  {
    question: 'Wat is zilverimpregnatie en is het noodzakelijk?',
    answer:
      'Zilverimpregnatie houdt in dat colloïdaal zilver in de keramische matrix is opgenomen. Zilver heeft een bacteriostatisch effect: het doodt bacteriën die in de poriën worden vastgehouden en voorkomt biofilmvorming op het filteroppervlak. Voor langdurig gebruik in vochtige omgevingen is zilverimpregnatie sterk aanbevolen — zonder zilver kunnen bacteriën in de poriën overleven en de schone zijde bereiken. De zilveruitloging in gefilterd water blijft ver onder de WHO-grenswaarde.',
  },
  {
    question: 'Welke NSF-certificering moet ik controleren bij een keramisch filter?',
    answer:
      'NSF/ANSI 42 dekt esthetische verbetering (smaak, geur). NSF/ANSI 53 is de relevante norm voor keramische filters: deze certificeert de verwijdering van gezondheidsschadelijke stoffen waaronder cryptosporidium, giardia en turbiditeit. Controleer specifiek op NSF 53 als u het filter voor drinkwater gebruikt. Sommige keramische filters zijn ook NSF/ANSI 42 gecertificeerd als ze ook een koolstoflaag bevatten.',
  },
  {
    question: 'Hoe lang gaat een keramische filterkaars mee?',
    answer:
      'Een keramische filterkaars gaat 1 tot 3 jaar mee bij normaal gebruik, afhankelijk van de waterkwaliteit en het gebruiksvolume. Bij sterk troebel water (hoge turbiditeit) slijt het filter sneller door intensiever schrobben. Fabrikanten geven een minimale wanddikte op (doorgaans 6–8 mm) waaronder het filter moet worden vervangen. Controleer de wanddikte jaarlijks met een schuifmaat.',
  },
  {
    question: 'Kan ik een keramisch filter combineren met een koolstoffilter?',
    answer:
      'Ja, en dit is zelfs aanbevolen voor de beste resultaten. Keramisch verwijdert bacteriën, protozoa en sediment; een koolstoffilter verbetert smaak en geur en verwijdert chloor, THM en deels pesticiden. Samengestelde filters (keramisch + koolstof in één) zijn verkrijgbaar bij Doulton (Ultracarb) en Berkefeld. Dit type biedt de voordelen van beide technologieën in één filterkaars.',
  },
  {
    question: 'Voor wie is een keramisch waterfilter de beste keuze?',
    answer:
      'Een keramisch filter is de beste keuze voor: mensen zonder vaste elektriciteitsaansluiting (camping, off-grid, noodsituatie), eigenaren van een vakantiewoning of buitenverblijf met putwater of bronwater, huishoudens die duurzaam en herbruikbaar willen filteren, en als eerste filterstap (pre-filter) in een multi-stage systeem. Het is minder geschikt als enige filterstap voor dagelijks stedelijk drinkwater als ook chemische stoffen of virussen een zorg zijn.',
  },
  {
    question: 'Wanneer kies ik voor UV of omgekeerde osmose in plaats van keramisch?',
    answer:
      'Kies UV als u ook virussen wilt elimineren — UV-desinfectie biedt bescherming tegen bacteriën, virussen en protozoa maar filtert geen deeltjes of chemicaliën. Combineer UV altijd met een sedimentfilter als pre-filter. Kies omgekeerde osmose als u ook chemische stoffen wilt verwijderen: nitraten, PFAS, zware metalen, pesticiden, kalk en medicijnresten. RO verwijdert ook virussen en bacteriën maar vereist een elektrische boosterpomp en wateraansluiting.',
  },
];

const modellenTabel = [
  {
    model: 'Doulton Ultracarb',
    type: 'Kaars (keramisch + koolstof)',
    porie: '0,9 µm nominaal / 0,2 µm abs.',
    prijs: '€ 35–55',
    doorstroom: '1–2 L/uur',
    levensduur: '1–2 jaar',
    highlight: true,
  },
  {
    model: 'Berkefeld W9',
    type: 'Kaars (diatomiet)',
    porie: '0,2 µm abs.',
    prijs: '€ 25–45',
    doorstroom: '0,5–1,5 L/uur',
    levensduur: '1–2 jaar',
    highlight: false,
  },
  {
    model: 'British Berkefeld SS-2F',
    type: 'Potfilter (RVS)',
    porie: '0,2 µm abs.',
    prijs: '€ 150–250',
    doorstroom: '2–4 L/uur',
    levensduur: '1–3 jaar/kaars',
    highlight: false,
  },
  {
    model: 'Gravity Water GWP',
    type: 'Potfilter (kunststof)',
    porie: '0,5 µm abs.',
    prijs: '€ 80–130',
    doorstroom: '1–3 L/uur',
    levensduur: '1–2 jaar',
    highlight: false,
  },
  {
    model: 'Katadyn Ceradyn',
    type: 'Potfilter (kunststof, 10L)',
    porie: '0,2 µm abs.',
    prijs: '€ 120–180',
    doorstroom: '1–3 L/uur',
    levensduur: '1–3 jaar',
    highlight: false,
  },
];

const kostentabel = [
  { item: 'Filterkaars (los)', aanschaf: '€ 10–55', jaarlijks: '€ 10–55 (1×/jaar)' },
  { item: 'Potfilter systeem', aanschaf: '€ 30–100', jaarlijks: '€ 15–45 (filterkaarsen)' },
  { item: 'RVS potfilter systeem', aanschaf: '€ 150–350', jaarlijks: '€ 20–60 (filterkaarsen)' },
  { item: 'Under-sink keramisch', aanschaf: '€ 80–200', jaarlijks: '€ 30–80 (cartridges)' },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Keramisch filter', url: 'https://waterfilterplatform.nl/keramisch-filter' },
  { name: 'Kopen', url: 'https://waterfilterplatform.nl/keramisch-filter/kopen' },
];

export default function KeramischFilterKopenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Keramisch waterfilter kopen: koopgids en beste modellen 2026',
          description:
            'Koopgids voor keramische waterfilters: 5-model vergelijking, koopadvies per situatie, onderhoud en wanneer u beter kiest voor UV of osmose.',
          datePublished: '2026-03-15',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/keramisch-filter/kopen',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/keramisch-filter" className="hover:text-[#005F8A]">Keramisch filter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Keramisch waterfilter kopen: koopgids en beste modellen 2026
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            U wilt een keramisch waterfilter kopen, maar welk model past bij uw situatie? Op
            deze pagina vergelijken we vijf populaire modellen op poriemaat, doorstroomsnelheid,
            prijs en levensduur. We leggen ook uit op welke criteria u moet letten bij de aanschaf
            en wanneer u beter kiest voor een UV-filter of omgekeerde osmose.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/keramisch-filter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              ← Terug naar keramisch filter uitleg
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose filter kopen →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Een keramisch waterfilter kopen? Kies minimaal poriemaat 0,2–0,5 µm voor bacteriebescherming, controleer op zilverimpregnatie en NSF/ANSI 53 certificering. Gravity-filter (€30–180) voor off-grid gebruik; under-sink keramisch (€80–200) voor dagelijks comfort. Jaarlijkse filterkosten: €15–60. Verwijdert geen virussen of chemische stoffen — overweeg dan osmose." />

        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#criteria', 'Koopgids: waar op letten?'],
              ['#modellen', 'Modellenvergelijking (5 modellen)'],
              ['#systemen', 'Gravity vs druksysteem'],
              ['#types', 'Kaars vs disc vs pot'],
              ['#kosten', 'Kostenoverzicht'],
              ['#onderhoud', 'Onderhoud: 3 stappen'],
              ['#voor-wie', 'Voor wie is keramisch geschikt?'],
              ['#wanneer-anders', 'Wanneer UV of osmose kiezen?'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Criteria */}
        <section id="criteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Koopgids: waar let u op bij de aanschaf?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Een keramisch waterfilter kopen is meer dan alleen het kiezen van het goedkoopste
            model. Onderstaande vijf criteria bepalen of een filter daadwerkelijk aan uw
            waterkwaliteitsbehoefte voldoet.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Poriemaat: 0,2–0,5 µm voor bacteriebescherming',
                tekst:
                  'Dit is het belangrijkste technische kenmerk. Een poriemaat van 0,2–0,5 µm biedt betrouwbare bescherming tegen bacteriën (1–10 µm). Filters met 0,9 µm zijn voldoende voor protozoa maar onbetrouwbaar voor kleine bacteriën. Let op het onderscheid tussen nominale poriemaat (gemiddelde) en absolute poriemaat (maximale doorlaatporie) — kies altijd op absolute poriemaat.',
              },
              {
                nr: '2',
                titel: 'Doorstroomsnelheid (liter per uur)',
                tekst:
                  'Een hogere doorstroom (liter per uur) maakt het filter praktischer voor dagelijks gebruik. Gravity-filters produceren doorgaans 0,5–4 liter per uur afhankelijk van het aantal filterkaarsjes. Druksystemen halen 5–15 liter per uur. Voor een gezin van vier personen heeft u minimaal 2–3 liter per uur nodig bij regelmatig gebruik.',
              },
              {
                nr: '3',
                titel: 'Zilverimpregnatie: ja of nee',
                tekst:
                  'Kies bij voorkeur een filter met zilverimpregnatie (ook aangeduid als "anti-bacterieel keramiek" of "colloïdaal zilver"). Zilver voorkomt dat bacteriën die vastzitten in de poriën zich vermenigvuldigen en de schone zijde bereiken. Zonder zilver vergroot u het risico op bacteriebesmetting van het gefilterde water, met name in warme omgevingen.',
              },
              {
                nr: '4',
                titel: 'Potvorm en -inhoud',
                tekst:
                  'Gravity-filters variëren van compacte 5-liter modellen voor individueel gebruik tot 15–20 liter systemen voor gezinsgebruik. Grotere potten met meerdere filterkaarsjes hebben een hogere doorstroomcapaciteit. Let ook op het materiaal: RVS is duurzamer en hygienischer dan kunststof, maar aanzienlijk zwaarder.',
              },
              {
                nr: '5',
                titel: 'NSF/ANSI 42 en 53 certificering',
                tekst:
                  'NSF/ANSI 42 dekt smaak- en geurverbetering. NSF/ANSI 53 certificeert de verwijdering van gezondheidsschadelijke stoffen waaronder cryptosporidium en giardia. Controleer de certificering voordat u koopt — fabrikanten kunnen "NSF-standaard" claimen zonder daadwerkelijk gecertificeerd te zijn. Controleer het certificaatnummer op nsf.org.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start border border-gray-100 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modellen */}
        <section id="modellen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Modellenvergelijking: 5 populaire keramische waterfilters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onderstaande tabel vergelijkt vijf veelgebruikte keramische waterfiltermodellen op
            de belangrijkste technische en praktische criteria.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Model</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Poriemaat</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="py-2.5 px-3 font-semibold text-right hidden sm:table-cell">Doorstroom</th>
                  <th className="py-2.5 px-3 font-semibold text-right hidden md:table-cell">Levensduur</th>
                </tr>
              </thead>
              <tbody>
                {modellenTabel.map((r) => (
                  <tr
                    key={r.model}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium border-b border-[#005F8A]/10' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">
                      {r.model}
                      {r.highlight && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.type}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-[#005F8A] font-medium">{r.porie}</td>
                    <td className="py-2.5 px-3 text-right font-semibold">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-right text-xs hidden sm:table-cell">{r.doorstroom}</td>
                    <td className="py-2.5 px-3 text-right text-xs text-gray-500 hidden md:table-cell">{r.levensduur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prijzen zijn richtprijzen voor de Nederlandse markt in 2026. Werkelijke doorstroom hangt af
            van waterkwaliteit en -druk.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De <strong>Doulton Ultracarb</strong> is aanbevolen vanwege de combinatie van keramische
            filtration en geïntegreerde koolstoflaag — dit geeft zowel bacteriebescherming als
            smaak- en geurverbetering in één kaars. Voor off-grid gebruik met een hoger
            familiebudget is de <strong>British Berkefeld SS-2F</strong> de meest duurzame keuze
            door zijn RVS-constructie en lange levensduur.
          </p>
        </section>

        {/* Gravity vs druk */}
        <section id="systemen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gravity filter vs druksysteem: wat kiest u?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-3">Gravity filter (zwaartekracht)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Geen elektriciteit of wateraansluiting',
                  'Doorstroom: 0,5–4 L/uur',
                  'Aanschaf: €30–350',
                  'Ideaal voor off-grid en noodsituaties',
                  'Handmatig vullen van bovenreservoir',
                  'Draagbaar en ook voor reizen geschikt',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#005F8A]/20 rounded-2xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-bold text-[#003F5C] mb-3">Druksysteem (under-sink)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Aangesloten op koudwaterleiding',
                  'Doorstroom: 5–15 L/uur',
                  'Aanschaf: €80–200',
                  'Geschikt voor dagelijks gezinsgebruik',
                  'Aparte filterkraan op aanrecht vereist',
                  'Geen handmatig vullen nodig',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-[#005F8A] font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Kaars vs disc vs pot */}
        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kaars, disc of potfilter: welke vorm kiest u?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Keramische filters zijn leverbaar in drie basisvormen, elk met een andere
            constructie en toepassing. Meer detail over alle types vindt u op de pagina{' '}
            <Link href="/keramisch-filter/soorten" className="text-[#005F8A] underline hover:no-underline">
              soorten keramische filters
            </Link>.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Filterkaars (candle filter)',
                tekst: 'Cilindrische keramische kaars die in een bestaand filtersysteem of potfilter wordt geplaatst. Meest verkochte vorm. Universeel en bij veel merken vervangbaar. Doorstroom: 0,5–2 L/uur per kaars. Prijs: €10–55 per kaars.',
              },
              {
                titel: 'Keramische schijf (disc filter)',
                tekst: 'Platte schijf gebruikt in multi-stage onderbouwsystemen en druksystemen. Hogere doorstroom dan een kaars bij gelijke poriemaat omdat het oppervlak groter is. Minder geschikt voor gravity-gebruik.',
              },
              {
                titel: 'Potfilter (complete set)',
                tekst: 'Compleet systeem met bovenreservoir (ongefiltreerd), filterkaar(s) en onderreservoir (gefilterd). Inhoud 5–20 liter. Kant-en-klaar te gebruiken zonder installatie. Prijs: €30–350 afhankelijk van materiaal en capaciteit.',
              },
            ].map(item => (
              <div key={item.titel} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">{item.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenoverzicht: aanschaf en jaarlijkse filterkosten</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[420px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Systeem</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaarlijks</th>
                </tr>
              </thead>
              <tbody>
                {kostentabel.map((r, i) => (
                  <tr key={r.item} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 text-gray-800">{r.item}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600 text-xs">{r.jaarlijks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            In vergelijking met flessenwater (€150–400/jaar voor een gezin van vier) zijn
            keramische waterfilters een significant goedkopere en duurzamere keuze. De totale
            kosten over 5 jaar voor een RVS potfilter (€250 aanschaf + €150 filterkaarsen) zijn
            vergelijkbaar met minder dan een jaar flessenwater voor een gezin.
          </p>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoud: 3 stappen voor een betrouwbaar filter</h2>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Schrobben bij afnemende doorstroom',
                desc: 'Wanneer de doorstroomsnelheid merkbaar daalt, schrobt u de filterkaars onder koud stromend water met een zachte borstel. Dit verwijdert de buitenste laag keramisch materiaal inclusief opgehoopt slib en biofilm. Nooit zeep gebruiken — dit beschadigt de keramische matrix.',
              },
              {
                nr: '2',
                titel: 'Maandelijks steriliseren',
                desc: '10–20 minuten in kokend water leggen om eventuele bacteriën in het filter te doden. Vooral belangrijk na lange stilstand (vakantie) of bij gebruik met biologisch verdacht water.',
              },
              {
                nr: '3',
                titel: 'Jaarlijks wanddikte controleren',
                desc: 'Door herhaaldelijk schrobben slijt de buitenste keramische laag af. Meet de wanddikte met een schuifmaat. De minimale veilige dikte is doorgaans 6–8 mm (zie fabrikantspecificaties). Vervang de kaars als de minimale dikte is bereikt.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 border border-gray-100 rounded-xl p-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-lg">
                  {s.nr}
                </div>
                <div>
                  <p className="font-bold text-[#003F5C] mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Voor wie */}
        <section id="voor-wie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een keramisch waterfilter de beste keuze?</h2>
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <p className="font-semibold text-green-900 mb-2">Keramisch is de juiste keuze als:</p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>U geen elektriciteitsaansluiting heeft (off-grid, camping, noodsituatie)</li>
                <li>U water filtert in een vakantiewoning, buitenverblijf of chalet</li>
                <li>U putwater of bronwater wilt filteren op bacteriën</li>
                <li>U duurzaamheid en herbruikbaarheid prioriteit geeft boven gemak</li>
                <li>U een eerste mechanische filterstap wilt in een multi-stage systeem</li>
                <li>Uw budget beperkt is en u toch basisbescherming wilt</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-semibold text-amber-900 mb-2">Overweeg een ander type als:</p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>U ook virussen wilt verwijderen (kies UV of RO)</li>
                <li>U last heeft van nitraten, PFAS of zware metalen in uw water (kies RO)</li>
                <li>U dagelijks grote hoeveelheden gefilterd water nodig heeft voor een gezin</li>
                <li>U ook kalk en hardheid wilt aanpakken</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wanneer anders */}
        <section id="wanneer-anders">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kiest u voor UV of omgekeerde osmose?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een keramisch filter is een uitstekende keuze voor specifieke toepassingen, maar kent
            duidelijke grenzen. Er zijn situaties waarbij het verstandiger is om direct te investeren
            in een krachtigere filtertechnologie.
          </p>
          <div className="space-y-3">
            {[
              {
                type: 'UV-filter',
                situatie: 'Virusrisico aanwezig',
                uitleg: 'Als uw water afkomstig is van een onbehandelde bron (bronwater, regenwater, oppervlaktewater) of als u reist naar gebieden met hoog gastro-intestinaal infectierisico, biedt keramisch alleen onvoldoende bescherming. Een UV-filter in combinatie met een sedimentfilter als pre-filter biedt volledige microbiologische bescherming inclusief virussen.',
                link: '/uv-filter',
                linkText: 'UV-filter uitleg',
              },
              {
                type: 'Omgekeerde osmose',
                situatie: 'Chemische verontreinigingen',
                uitleg: 'Als uw water hoge nitraatwaarden heeft, PFAS bevat, last heeft van zware metalen of als u dagelijks de beste drinkwaterkwaliteit thuis wilt inclusief virusvrij water, is omgekeerde osmose de meest complete oplossing. Een 4-in-1 RO-systeem met kokendwatertap vervangt ook flessenwater volledig.',
                link: '/omgekeerde-osmose',
                linkText: 'Omgekeerde osmose uitleg',
              },
            ].map(r => (
              <div key={r.type} className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-[#003F5C]">{r.type}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] px-2 py-1 rounded-full">{r.situatie}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{r.uitleg}</p>
                <Link href={r.link} className="text-sm text-[#005F8A] underline hover:no-underline">{r.linkText} →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/keramisch-filter',
                title: 'Keramisch filter uitleg',
                desc: 'Hoe werken keramische filters, welke types zijn er en wanneer is keramisch genoeg?',
              },
              {
                href: '/keramisch-filter/werking',
                title: 'Werking keramisch filter',
                desc: 'Dieptefiltratie, poriënstructuur, zilverimpregnatie en filterbeperkingen uitgelegd.',
              },
              {
                href: '/keramisch-filter/soorten',
                title: 'Soorten keramische filters',
                desc: 'Kaars, pot, disc en samengesteld: alle keramische filtertypes vergeleken.',
              },
              {
                href: '/sedimentfilter',
                title: 'Sedimentfilter als pre-filter',
                desc: 'Bescherm uw keramisch filter met een sedimentfilter voor troebel water.',
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

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over een keramisch waterfilter kopen
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
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
