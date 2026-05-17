import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat is een waterfilterkan? Brita, BWT en alternatieven vergelijken 2026',
  description:
    'Alles over waterfilterkannen: hoe ze werken, welke merken (Brita, BWT, PUR) de beste zijn, wat ze wel en niet verwijderen en wanneer je beter kiest voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filterkan' },
  openGraph: {
    title: 'Waterfilterkan — Brita, BWT en alternatieven vergelijken 2026',
    description:
      'Alles over waterfilterkannen: werking, merken, filterprestaties en wanneer je beter kiest voor omgekeerde osmose.',
    url: 'https://waterfilterplatform.nl/filterkan',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt een waterfilterkan?',
    answer:
      'Een waterfilterkan filtert leidingwater via een tweestapsproces. Eerst passeert het water een actief-koolstofkorrel die chloor, organische verbindingen en smaak- en geurmoleculen adsorbeert. Daarna loopt het door een ionenwisselaarhars die calcium- en magnesiumionen gedeeltelijk vervangt door natrium- of waterstofionen. Dit verlaagt de waterhardheid en verbetert de smaak. Het gefilterde water druppelt in het onderste reservoir van de kan.',
  },
  {
    question: 'Verwijdert een Brita-filter nitraat?',
    answer:
      'Nee, een standaard Brita Maxtra+ cartridge verwijdert minder dan 10% van de nitraten in leidingwater. Ionenwisselaars zijn niet selectief genoeg voor nitraat bij de gebruikelijke filtergrootte en doorloopsnelheid. Als nitraat een zorg is — bijvoorbeeld bij een privéput of in een landbouwintensieve regio — biedt omgekeerde osmose de enige betrouwbare oplossing voor thuisgebruik.',
  },
  {
    question: 'Hoe vaak moet je het filter van een filterkan vervangen?',
    answer:
      'De meeste merken adviseren vervanging elke 4 tot 6 weken, of na 100 tot 150 liter, afhankelijk van de waterhardheid in jouw regio. Bij hard water (>14°dH) kan de ionenwisselaar sneller verzadigd raken, waardoor je frequenter moet wisselen. De meeste kannen hebben een indicator die de gebruiksduur bijhoudt. Het negeren van de vervangtermijn vermindert de filterprestaties merkbaar.',
  },
  {
    question: 'Wat is het verschil tussen Brita en BWT?',
    answer:
      'Brita gebruikt een combinatie van actief kool en ionenwisselaar (Maxtra+ Pro voegt ook een pleated membraanlaag toe). BWT onderscheidt zich door hun Magnesium Technology: de ionenwisselaar wisselt calciumionen uit voor magnesiumionen in plaats van natriumionen, wat de smaak voor koffie en thee verbetert. BWT-cartridges zijn gemiddeld €1 tot €2 duurder, maar produceren water dat geschikter is voor specialty coffee. Filterprestaties op chloor en smaak zijn vergelijkbaar.',
  },
  {
    question: 'Is water uit een filterkan gezond?',
    answer:
      'Ja, gefilterd kraanwater is veilig en gezond. Nederlandse drinkwaterkwaliteit is al uitstekend; de filterkan verbetert smaak en verwijdert restchloor. Let op: de kan filtert geen bacteriën of virussen. Als het kraanwater om wat voor reden ook bacteriologisch verdacht is — zoals na een leidingbreuk — is een filterkan geen beschermingsmaatregel. Gebruik dan gekookt of gebotteld water.',
  },
  {
    question: 'Wat betekenen NSF/ANSI 42 en NSF/ANSI 53 certificering?',
    answer:
      'NSF/ANSI 42 certificeert dat een filter aantoonbaar chloor, smaak en geur vermindert (esthetische contaminanten). NSF/ANSI 53 is strenger: het certificeert reductie van gezondheidsrelevante stoffen zoals lood, kwik en cysten tot onder de EPA-drempelwaarden. Een filter met alleen NSF/ANSI 42 verbetert smaak maar biedt geen gezondheidsgarantie. Let bij de aankoop op welk certificaat van toepassing is op de cartridge, niet alleen op de kan.',
  },
  {
    question: 'Hoeveel kost een filterkan per jaar?',
    answer:
      'De aanschafprijs van de kan is €20 tot €60. Cartridges kosten €4 tot €10 per stuk en gaan mee voor 100 tot 150 liter of 4 tot 6 weken. Bij een huishouden van twee personen dat 2 liter per dag filtert, verbruik je circa 8 tot 10 cartridges per jaar: jaarlijkse kosten tussen €40 en €100. Merkloze cartridges zijn goedkoper, maar prestaties variëren sterk.',
  },
  {
    question: 'Wat is het verschil tussen een filterkan en een osmosefilter?',
    answer:
      'Een filterkan verwijdert chloor, deels kalk en organische verbindingen, maar laat nitraten, PFAS, zware metalen en microbiologische contaminanten vrijwel ongemoeid. Een omgekeerde osmose systeem filtert op moleculair niveau en verwijdert 95 tot 99% van vrijwel alle opgeloste stoffen, inclusief PFAS, zware metalen, nitraten en microplastics. Osmose kost meer in aanschaf (€150–500), maar kan per liter goedkoper uitkomen dan flessenwater en biedt een fundamenteel hogere zuiverheidsgraad.',
  },
  {
    question: 'Wanneer is een filterkan niet genoeg?',
    answer:
      'Een filterkan volstaat niet als: (1) je water afkomstig is van een privéput met nitraat- of bacteriologische belasting, (2) je in een PFAS-gevoelig gebied woont, (3) je babyvoeding bereidt met kraanwater (zuigelingen zijn gevoeliger voor nitraat en bacteriën), (4) je zwaar water hebt (>20°dH) en kalkaanslag in apparaten wilt vermijden, of (5) je bewust wilt zijn van microplastics of medicijnresten in je drinkwater.',
  },
  {
    question: 'Kan ik een filterkan gebruiken voor babyvoeding?',
    answer:
      'Dit is omstreden. De Nederlandse drinkwaternorm voor nitraat (50 mg/L) is al afgestemd op volwassenen; zuigelingen hebben een lagere drempelwaarde van circa 10 mg/L. Een waterfilterkan verwijdert nitraat nauwelijks. Bovendien kan een slecht onderhouden filterkan bacteriën accumuleren. Voor babyvoeding adviseren gezondheidsinstanties — waaronder het RIVM — gebruik van gekookt leidingwater of specifiek gecertificeerd bronwater. Overleg met je consultatiebureau.',
  },
];

const welVerwijdertRows = [
  { stof: 'Chloor', reductie: '90–99%', toelichting: 'Actief kool adsorbeert effectief restchloor' },
  { stof: 'Smaak & geur', reductie: '95%', toelichting: 'Merkbare verbetering bij de meeste gebruikers' },
  { stof: 'Kalk (tijdelijk)', reductie: '30–50%', toelichting: 'Ionenwisselaar vermindert hardheid deels' },
  { stof: 'Organische stoffen', reductie: '70–90%', toelichting: 'THM en lichte organische moleculen' },
  { stof: 'Koper', reductie: '60–80%', toelichting: 'Relevant bij koperen leidingen in oude panden' },
];

const nietVerwijdertRows = [
  { stof: 'Nitraten', reductie: '<10%', toelichting: 'Ionenwisselaar is niet selectief voor nitraat' },
  { stof: 'Bacteriën & virussen', reductie: '0%', toelichting: 'Geen microbiologische bescherming' },
  { stof: 'PFAS', reductie: '<20%', toelichting: 'Beperkte adsorptie bij standaard koolstof' },
  { stof: 'Zware metalen (volledig)', reductie: '0–30%', toelichting: 'Lood en arseen worden nauwelijks vastgehouden' },
  { stof: 'Microplastics', reductie: 'Gedeeltelijk', toelichting: 'Grotere deeltjes worden tegengehouden, kleine niet' },
];

const merkenRows = [
  {
    merk: 'Brita',
    model: 'Maxtra+',
    kanPrijs: '€25–45',
    cartridgePrijs: '€5–8',
    capaciteit: '150 L',
    nsf: 'NSF 42',
    opmerking: 'Meest verkochte merk in NL; breed cartridge-assortiment',
    highlight: false,
  },
  {
    merk: 'BWT',
    model: 'Penguin',
    kanPrijs: '€35–60',
    cartridgePrijs: '€7–10',
    capaciteit: '120 L',
    nsf: 'NSF 42',
    opmerking: 'Magnesiumtechnologie voor betere koffiesmaak',
    highlight: true,
  },
  {
    merk: 'PUR',
    model: 'Classic',
    kanPrijs: '€30–50',
    cartridgePrijs: '€6–9',
    capaciteit: '100 L',
    nsf: 'NSF 42 + 53',
    opmerking: 'Enige merk met NSF 53 op kraan- én kanvariant',
    highlight: false,
  },
  {
    merk: 'Laica',
    model: 'Stream',
    kanPrijs: '€20–35',
    cartridgePrijs: '€4–6',
    capaciteit: '150 L',
    nsf: 'Geen',
    opmerking: 'Budgetvriendelijk; cartridges compatibel met Brita',
    highlight: false,
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Filterkan', url: 'https://waterfilterplatform.nl/filterkan' },
];

export default function FilterkanPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Wat is een waterfilterkan? Brita, BWT en alternatieven vergelijken 2026',
          description:
            'Alles over waterfilterkannen: hoe ze werken, welke merken de beste zijn, wat ze wel en niet verwijderen en wanneer je beter kiest voor osmose.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/filterkan',
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-b from-[#E0F2FE] to-white pt-10 pb-6 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Filterkan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Wat is een waterfilterkan? Brita, BWT en alternatieven
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            Waterfilterkannen zijn de meest verkochte waterfilters voor thuisgebruik. Ze beloven
            beter smakend water, minder kalk en minder chloor. Maar wat filteren ze écht, welk
            merk presteert het best en wanneer kun je beter kiezen voor omgekeerde osmose?
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~8 min leestijd</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        {/* Quick Answer */}
        <QuickAnswer answer="Een waterfilterkan filtert leidingwater via een actief koolstof- en ionenwisselaarcartridge. Chloor en deels kalk worden verwijderd — nitraten, PFAS, zware metalen en bacteriën grotendeels niet. Prijs: €25–60 aanschaf, €50–90/jaar filtercartridges. Voor puur drinkwater is omgekeerde osmose effectiever." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#hoe-werkt', 'Hoe werkt een filterkan?'],
              ['#wel-verwijdert', 'Wat een filterkan WEL verwijdert'],
              ['#niet-verwijdert', 'Wat een filterkan NIET verwijdert'],
              ['#merken', 'Merken vergelijking: Brita, BWT, PUR, Laica'],
              ['#nsf', 'NSF/ANSI 42 vs 53 certificering'],
              ['#wanneer', 'Wanneer volstaat een filterkan?'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hoe werkt een filterkan */}
        <section id="hoe-werkt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een waterfilterkan?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een waterfilterkan bestaat uit twee compartimenten: een bovenste reservoir waar je
            leidingwater in giet, en een onderste reservoir voor gefilterd water. Tussen beide
            zit de cartridge — het hart van het systeem.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De cartridge bevat twee actieve lagen. De eerste laag bestaat uit{' '}
            <strong>geactiveerd koolstof</strong> (ook wel actieve kool): een poreus materiaal
            met een enorm intern oppervlak (500–1500 m² per gram) dat chloor, organische
            verbindingen en smaak- en geurmoleculen via adsorptie vasthoudt. De tweede laag is
            een <strong>ionenwisselaarhars</strong> die calcium- en magnesiumionen (kalk)
            gedeeltelijk vervangt door natrium- of waterstofionen, waardoor de waterhardheid
            afneemt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het water loopt door zwaartekracht door de cartridge — geen pomp, geen stroom, geen
            druk. Dit maakt het systeem eenvoudig en energiezuinig, maar ook de reden waarom de
            filtratie beperkter is dan systemen die water onder hoge druk door een membraan
            persen, zoals bij omgekeerde osmose.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700 border border-[#005F8A]/10">
            <strong className="text-[#003F5C]">Filtersnelheid:</strong> Een volle kan (2–3,5 L)
            filtert in 10 tot 20 minuten. Bij verzadigde cartridges loopt dit op tot 30+ minuten
            — een signaal dat vervanging nodig is.
          </div>
        </section>

        {/* Wat een filterkan WEL verwijdert */}
        <section id="wel-verwijdert">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat een filterkan WEL verwijdert</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onderstaande tabel geeft gemiddelde reductiepercentages op basis van fabrieksdata en
            onafhankelijke NSF-testresultaten. Werkelijke prestaties hangen af van de
            waterhardheid, doorloopsnelheid en cartridgeleeftijd.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Stof</th>
                  <th className="text-center px-4 py-3 font-semibold">Reductie</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {welVerwijdertRows.map((row, i) => (
                  <tr key={row.stof} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.stof}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block bg-green-100 text-green-800 font-semibold text-xs px-2.5 py-1 rounded-full">
                        {row.reductie}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wat een filterkan NIET verwijdert */}
        <section id="niet-verwijdert">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat een filterkan NIET verwijdert</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit is de kritische kant van het verhaal. Veel consumenten kopen een filterkan met
            de verwachting dat ze daarmee alle onzuiverheden uit hun water halen. Dat klopt niet.
            Filterkannen zijn ontworpen voor smaak- en geurverbetering, niet voor het verwijderen
            van gezondheidsrelevante contaminanten.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Stof</th>
                  <th className="text-center px-4 py-3 font-semibold">Reductie</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {nietVerwijdertRows.map((row, i) => (
                  <tr key={row.stof} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.stof}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block bg-red-100 text-red-800 font-semibold text-xs px-2.5 py-1 rounded-full">
                        {row.reductie}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Bron: NSF International testdata; fabrikantspecificaties Brita, BWT en PUR (2024–2025).
            Percentages zijn indicatief bij optimale cartridgeleeftijd en standaard leidingwatersamenstelling.
          </p>
        </section>

        {/* Merken vergelijking */}
        <section id="merken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Merken vergelijking: Brita, BWT, PUR en Laica</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De markt wordt gedomineerd door vier merken, elk met eigen sterke punten. Hieronder
            een overzicht van de meest verkochte modellen in Nederland in 2026.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Merk</th>
                  <th className="text-left px-4 py-3 font-semibold">Model</th>
                  <th className="text-center px-4 py-3 font-semibold">Kan</th>
                  <th className="text-center px-4 py-3 font-semibold">Cartridge</th>
                  <th className="text-center px-4 py-3 font-semibold">Cap.</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">NSF</th>
                </tr>
              </thead>
              <tbody>
                {merkenRows.map((row, i) => (
                  <tr
                    key={row.merk}
                    className={
                      row.highlight
                        ? 'bg-[#E0F2FE] border-l-4 border-[#005F8A]'
                        : i % 2 === 0
                        ? 'bg-white'
                        : 'bg-gray-50'
                    }
                  >
                    <td className="px-4 py-3 font-bold text-gray-900">{row.merk}</td>
                    <td className="px-4 py-3 text-gray-700">{row.model}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.kanPrijs}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.cartridgePrijs}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.capaciteit}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.nsf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-3">
            {merkenRows.map(row => (
              <div key={row.merk} className="flex gap-2 text-sm text-gray-700">
                <span className="font-semibold text-[#003F5C] shrink-0">{row.merk}:</span>
                <span>{row.opmerking}</span>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Link
              href="/filterkan/kopen"
              className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Volledige koopgids: welke filterkan kopen? →
            </Link>
          </div>
        </section>

        {/* NSF certificering */}
        <section id="nsf">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">NSF/ANSI 42 vs NSF/ANSI 53: wat betekent het?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF International is de meest gezaghebbende certificeringsinstantie voor
            waterfilterproducten. Twee normen zijn relevant voor filterkannen:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
              <p className="font-bold text-[#003F5C] mb-2">NSF/ANSI 42</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                <strong>Esthetische contaminanten.</strong> Certificeert aantoonbare reductie van
                chloor, smaak en geur. Het merendeel van Brita-, BWT- en Laica-cartridges valt
                onder deze categorie.
              </p>
              <p className="text-xs text-blue-800 font-medium">
                Doel: beter smakend water
              </p>
            </div>
            <div className="border border-green-200 rounded-xl p-5 bg-green-50">
              <p className="font-bold text-[#003F5C] mb-2">NSF/ANSI 53</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                <strong>Gezondheidsrelevante contaminanten.</strong> Strenger: certificeert reductie
                van lood, kwik, cysten en andere gezondheidsrelevante stoffen tot onder
                EPA-drempelwaarden. Zeldzaam bij kannen; PUR is de enige grote speler met
                NSF 53 op kanproducten.
              </p>
              <p className="text-xs text-green-800 font-medium">
                Doel: bescherming tegen specifieke gezondheidsrisico&apos;s
              </p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op:</strong> Controleer altijd of het
            certificaat betrekking heeft op de <em>cartridge</em>, niet alleen op de kan zelf.
            Fabrikanten mogen een kan verkopen als &ldquo;NSF-gecertificeerd&rdquo; ook al betreft
            het alleen de plastic constructie, niet de filterprestaties.
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Meer over koolstoffilters en hun werkingsprincipe vind je op onze pagina{' '}
            <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">
              koolstoffilter
            </Link>.
          </p>
        </section>

        {/* Wanneer volstaat een filterkan */}
        <section id="wanneer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer volstaat een filterkan — en wanneer niet?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <p className="font-bold text-green-800 mb-3">Een filterkan IS geschikt als...</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Je water krijgt van een gemeentelijk waterbedrijf (voldoet aan Drinkwaterbesluit)',
                  'Je primair chloor en smaak wilt verbeteren',
                  'Je een budgetvriendelijke en eenvoudige oplossing zoekt',
                  'Je geen babyvoeding bereidt met leidingwater',
                  'Je woont in een gebied met matig tot licht water (<14°dH)',
                  'Je geen bekende verhoogde PFAS- of nitraatwaarden in jouw regio hebt',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="font-bold text-red-800 mb-3">Een filterkan is NIET geschikt als...</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Je een privéput of bodemwater gebruikt (nitraat, bacteriën)',
                  'Je in een PFAS-belast gebied woont (bijv. nabij Chemours/DuPont)',
                  'Je babyvoeding bereidt — nitraatrisico is reëel',
                  'Je lood in oude binnenleidingen hebt (panden voor 1960)',
                  'Je hard water (>20°dH) wilt aanpakken voor koffieapparaten',
                  'Je zeker wilt zijn van verwijdering van microplastics en medicijnresten',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Als een filterkan niet volstaat, is{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            doorgaans de meest effectieve stap. Voor een overzicht van alle filteropties, zie{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              waterfilter soorten
            </Link>.
          </p>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/filterkan/kopen',
                title: 'Welke filterkan kopen?',
                desc: 'Vergelijking van Brita, BWT, PUR en Laica op prestaties, prijs en gebruiksgemak.',
              },
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter uitleg',
                desc: 'Hoe actief kool werkt en welke stoffen het wel en niet filtert.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmosefilter kopen',
                desc: 'Wanneer is omgekeerde osmose beter dan een filterkan? Vergelijking en koopadvies.',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Waterfilter soorten',
                desc: 'Overzicht van alle filtertypen: van filterkan tot UV-filter en osmose.',
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

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilterkannen
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
