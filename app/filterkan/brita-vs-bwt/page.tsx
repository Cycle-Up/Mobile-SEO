import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Brita vs BWT filterkan: wat is het verschil en welke is beter? 2026',
  description:
    'Brita of BWT filterkan? Vergelijking op filterwerkzaamheid, magnesium-toevoeging, modellen, kosten en voor wie welk merk de beste keuze is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filterkan/brita-vs-bwt' },
  openGraph: {
    title: 'Brita vs BWT filterkan — vergelijking 2026',
    description:
      'Brita of BWT filterkan? Vergelijking op filterwerkzaamheid, magnesium-toevoeging, modellen, kosten en voor wie welk merk de beste keuze is.',
    url: 'https://waterfilterplatform.nl/filterkan/brita-vs-bwt',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat filtert Brita en BWT allebei?',
    answer:
      'Brita en BWT verwijderen beide chloor en chloorbijproducten (95%+), verminderen kalk deels via ionenwisseling, verwijderen deels lood en koper, en verbeteren smaak en geur. Beide gebruiken een combinatie van actief kool (voor organische stoffen en chloor) en ionenwisselhars (voor kalk, lood en zware metalen). Het resultaat is schoner smakend water dat minder naar chloor ruikt.',
  },
  {
    question: 'Wat doet BWT dat Brita niet doet?',
    answer:
      'BWT voegt actief magnesium (Mg²⁺) toe aan het gefilterde water via een speciaal ionenwisselproces. Calcium-ionen worden deels vervangen door magnesium-ionen. Dit verbetert de smaak van koffie en thee doordat magnesium beter aroma-extractie faciliteert en de buffercapaciteit van het water aanpast. Geen enkel Brita-filter biedt deze magnesium-toevoeging.',
  },
  {
    question: 'Wat doet Brita dat BWT niet doet?',
    answer:
      'Brita heeft een bredere modellenkeuze met meer dan 6 actuele kan-modellen, waaronder de Flow (5 liter) voor grote huishoudens. Daarnaast zijn er compatibele merkloze filterpatronen beschikbaar voor Brita-kannen (Maxtra-formaat), die €1–2 per patroon kosten versus €4–5 voor het origineel. BWT heeft geen merkloze alternatieven die correct passen en voldoende gecertificeerd zijn.',
  },
  {
    question: 'Welke filterkan is beter voor koffie?',
    answer:
      'BWT wint op smaakprofiel voor koffiedrinkers dankzij de magnesium-verrijking. Magnesium verbetert aroma-extractie en verlaagt de carbonate hardness (buffering), waardoor espresso en filterkoffie een vollediger smaakprofiel krijgen. Dit is de reden dat BWT veel gebruikt wordt in professionele koffie-omgevingen. Brita filtert ook effectief maar voegt geen mineralen toe.',
  },
  {
    question: 'Welke filterkan is beter voor hard water?',
    answer:
      'Beide merken zijn vergelijkbaar effectief bij hard water: ze verlagen de hardheid deels (30–50%), maar bieden geen volledige ontharding. Bij een waterhardheid boven 14°dH merk je bij beide merken dat filterpatronen sneller slijten en de echt harde kalkaanslag niet verdwijnt. Boven 14°dH overweeg je een waterontharder of omgekeerde osmose voor een blijvende oplossing.',
  },
  {
    question: 'Wat kosten beide systemen per jaar?',
    answer:
      'Brita: €45–75 per jaar met originele Maxtra Pro-patronen (€4–5 per stuk, ca. 12 per jaar bij 2 liter/dag). Met compatibele merkloze patronen daalt dit naar €15–30 per jaar. BWT: €50–75 per jaar met originele mg²⁺-patronen (€4–6 per stuk). Merkloze alternatieven voor BWT zijn niet aanbevolen door incompatibel patroonformaat en ontbrekende certificering.',
  },
  {
    question: 'Zijn Brita en BWT filters uitwisselbaar?',
    answer:
      'Nee, Brita en BWT filterpatronen zijn niet uitwisselbaar. De patroonvormen zijn fundamenteel verschillend: Brita gebruikt het Maxtra-formaat (breed cilindrisch), BWT het mg²⁺-formaat (smaller, ander klikmechanisme). Een BWT-patroon past fysiek niet in een Brita-kan en andersom. Koop altijd patronen die specifiek voor jouw kan-merk zijn ontworpen.',
  },
  {
    question: 'Wanneer voldoen beide filterkannen niet?',
    answer:
      'Noch Brita noch BWT filtert nitraat (relevant in agrarische gebieden met hoge mestbelasting), PFAS (polyfluoralkylverbindingen, relevant nabij industriegebieden zoals Dordrecht en Rotterdam-Botlek), bacteriën of virussen. Voor babyvoeding, zwangere vrouwen, putwater of gebruikers in PFAS-risicogebieden is omgekeerde osmose de enige afdoende thuisoplossing.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Filterkan', url: 'https://waterfilterplatform.nl/filterkan' },
  { name: 'Brita vs BWT', url: 'https://waterfilterplatform.nl/filterkan/brita-vs-bwt' },
];

const vergelijkingsRijen = [
  { criterium: 'Chloor verwijderen', brita: '✓ 95%+', bwt: '✓ 95%+', highlight: false },
  { criterium: 'Kalk (deels)', brita: '✓ deels', bwt: '✓ deels', highlight: false },
  { criterium: 'Magnesium toevoegen', brita: '✗', bwt: '✓ uniek', highlight: true },
  { criterium: 'Lood', brita: '✓ deels', bwt: '✓ deels', highlight: false },
  { criterium: 'Nitraat', brita: '✗', bwt: '✗', highlight: false },
  { criterium: 'PFAS', brita: '✗', bwt: '✗', highlight: false },
  { criterium: 'Bacteriën', brita: '✗', bwt: '✗', highlight: false },
  { criterium: 'NSF-certificering', brita: 'NSF/ANSI 42+53', bwt: 'NSF/ANSI 42', highlight: false },
  { criterium: 'Patroon capaciteit', brita: '150L / 4 weken', bwt: '120L / 4 weken', highlight: false },
  { criterium: 'Prijs patroon (origineel)', brita: '€4–5', bwt: '€4–6', highlight: false },
  { criterium: 'Merkloze patronen', brita: 'Ja (€1–2)', bwt: 'Nee', highlight: false },
  { criterium: 'Modellenkeuze', brita: 'Groot (6+ modellen)', bwt: 'Kleiner (4 modellen)', highlight: false },
];

const vijfJaarKosten = [
  { systeem: 'Brita origineel', aanschaf: '€25–45', jaarkosten: '€45–75', vijfJaar: '€250–420', perLiter: '€0,08–0,14', highlight: false },
  { systeem: 'Brita merkloze patronen', aanschaf: '€25–45', jaarkosten: '€15–30', vijfJaar: '€100–195', perLiter: '€0,03–0,05', highlight: false },
  { systeem: 'BWT mg²⁺', aanschaf: '€30–55', jaarkosten: '€50–75', vijfJaar: '€280–430', perLiter: '€0,09–0,14', highlight: false },
  { systeem: 'Osmose onderbouw', aanschaf: '€150–350', jaarkosten: '€60–150', vijfJaar: '€450–1.100', perLiter: '€0,04–0,10', highlight: true },
];

export default function BritaVsBwtPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Brita vs BWT filterkan: wat is het verschil en welke is beter? 2026',
          description:
            'Brita of BWT filterkan? Vergelijking op filterwerkzaamheid, magnesium-toevoeging, modellen, kosten en voor wie welk merk de beste keuze is.',
          datePublished: '2026-02-15',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/filterkan/brita-vs-bwt',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/filterkan" className="hover:text-[#005F8A]">Filterkan</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Brita vs BWT</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Brita vs BWT filterkan: wat is het verschil en welke is beter?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            Brita en BWT zijn de twee meest verkochte filterkannmerken in Nederland. Ze lijken op
            elkaar, maar er zit één fundamenteel verschil tussen: BWT voegt magnesium toe, Brita
            niet. Welk merk past bij jouw situatie? Deze vergelijking legt het uit.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~8 min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        {/* Quick Answer */}
        <QuickAnswer answer="Brita en BWT filteren beide chloor, kalk en zware metalen via actief kool en ionenwisseling. Het sleutelsverschil: BWT voegt magnesium (Mg²⁺) toe, wat de koffiesmaak verbetert. Brita heeft een groter modelaanbod en goedkopere merkloze filters. Bij PFAS, nitraat of bacteriën voldoen beide merken niet — dan is osmose nodig." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#vergelijking', 'Volledige vergelijkingstabel'],
              ['#wanneer-brita', 'Wanneer kies je Brita?'],
              ['#wanneer-bwt', 'Wanneer kies je BWT?'],
              ['#wanneer-geen-van-beide', 'Wanneer voldoet geen van beide?'],
              ['#kosten', 'Kosten over 5 jaar'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Zijn Brita en BWT filterkannen vergelijkbaar?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Op het eerste gezicht doen Brita en BWT hetzelfde: je vult de kan met kraanwater, het
            water stroomt door een filterpatroon en je drinkt schoner, beter smakend water. Beide
            merken gebruiken actief kool en ionenwisselhars als filtertechnologie. Beide zijn
            verkrijgbaar bij Nederlandse supermarkten en webshops.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Toch zijn er drie concrete verschillen die bepalen welk merk beter bij jou past:
            (1) BWT voegt magnesium toe via een uniek ionenwisselproces, (2) Brita heeft een
            bredere modellenkeuze inclusief grotere kannen, en (3) voor Brita zijn betaalbare
            merkloze filterpatronen beschikbaar die voor BWT ontbreken.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je eerst begrijpen hoe filterkannen in het algemeen werken? Lees dan de{' '}
            <Link href="/filterkan" className="text-[#005F8A] underline hover:no-underline">
              uitlegpagina over waterfilterkannen
            </Link>.
          </p>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat filtert Brita en wat filtert BWT? Volledige vergelijking
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De onderstaande tabel vergelijkt de Brita Maxtra Pro (het huidige topmodel) met de
            BWT mg²⁺-patroon (het standaardpatroon voor BWT Penguin en Luna). Dit zijn de meest
            verkochte combinaties in Nederland in 2026.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold border border-[#003F5C]/20">Criterium</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20">Brita (Maxtra Pro)</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20">BWT (mg²⁺)</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingsRijen.map((rij, i) => (
                  <tr
                    key={rij.criterium}
                    className={
                      rij.highlight
                        ? 'bg-[#E0F2FE] font-medium'
                        : i % 2 === 0
                        ? 'bg-white'
                        : 'bg-gray-50'
                    }
                  >
                    <td className="px-4 py-3 text-gray-800 border border-gray-100 font-medium">
                      {rij.criterium}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700 border border-gray-100">
                      {rij.brita}
                    </td>
                    <td
                      className={`px-4 py-3 text-center border border-gray-100 ${
                        rij.highlight ? 'text-[#005F8A] font-bold' : 'text-gray-700'
                      }`}
                    >
                      {rij.bwt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Bronnen: NSF International certificeringsdatabase, fabrikantspecificaties Brita en BWT
            (2026). Filterrendementen zijn gemiddelden onder standaardomstandigheden; resultaten
            variëren per waterhardheid en gebruiksfrequentie.
          </p>

          <div className="mt-6 bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">
              Wat betekent NSF/ANSI 42 vs 53?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              NSF/ANSI 42 certificeert dat een filter smaak, geur en chloor verbetert. NSF/ANSI 53
              gaat verder: dit certificeert ook verwijdering van gezondheidsrelevante stoffen zoals
              lood, kwik en cysten. Brita Maxtra Pro heeft beide certificeringen; BWT mg²⁺ alleen
              NSF/ANSI 42. Voor de meeste gebruikers van Nederlands leidingwater maakt dit weinig
              verschil. Bij oude binnenleidingen (lood) is NSF/ANSI 53 een voordeel voor Brita.
            </p>
          </div>
        </section>

        {/* Wanneer Brita */}
        <section id="wanneer-brita">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer kies je voor Brita?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Brita is de betere keuze in drie specifieke situaties:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Je wilt zo laag mogelijke jaarkosten</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Merkloze filterpatronen voor het Maxtra-formaat zijn breed beschikbaar bij webshops
                zoals bol.com en Amazon voor €1–2 per stuk. Dat is 60–80% goedkoper dan originele
                Brita-patronen. Controleer wel altijd of de merkloze patroon NSF-gecertificeerd is
                — goedkope patronen zonder certificering kunnen minder effectief filteren. Met
                merkloze patronen kom je op €15–30 per jaar, versus €45–75 met originelen.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Je hebt een groot huishouden (Flow-model)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                De Brita Flow heeft een capaciteit van 5 liter — het grootste filterkanmodel op de
                Nederlandse markt. Voor gezinnen van 4+ personen die dagelijks veel water filteren
                is dit praktisch: minder vaak bijvullen, grotere voorraad in de koelkast. BWT biedt
                geen vergelijkbaar groot model.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">NSF 53 is voor jou belangrijk (oude leidingen)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Woon je in een pand van voor 1970 met mogelijk loden binnenleidingen? De Brita
                Maxtra Pro heeft NSF/ANSI 53-certificering voor loodreductie. BWT mg²⁺ heeft alleen
                NSF/ANSI 42. In de praktijk is lood in leidingwater in Nederland zeldzaam door
                renovaties, maar bij twijfel geeft de extra certificering van Brita meer zekerheid.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Link
              href="/filterkan/brita"
              className="inline-block text-[#005F8A] font-semibold text-sm hover:underline"
            >
              Lees meer over Brita filterkannen →
            </Link>
          </div>
        </section>

        {/* Wanneer BWT */}
        <section id="wanneer-bwt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer kies je voor BWT?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BWT is de betere keuze als smaak je topprioriteit is, met name voor warme dranken:
          </p>
          <div className="space-y-4">
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]">
              <h3 className="font-bold text-[#003F5C] mb-2">
                Je bent koffieliefhebber of thee-drinker
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Het magnesium (Mg²⁺) dat BWT toevoegt aan het water verbetert aantoonbaar de
                aroma-extractie van koffie en thee. Magnesium bindt zich aan smaakcomponenten en
                faciliteert hun oplossing in het water. Dit is de reden dat professionele
                barista-wedstrijden en koffiespeciaalzaken BWT-gefilterd water gebruiken. Als
                espresso, filterkoffie of groene thee hoog op je prioriteitenlijst staat, merk je
                het verschil dagelijks.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Je wilt mineralen terugkrijgen in zacht water
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                In gebieden met relatief zacht leidingwater (waterhardheid onder 7°dH, zoals
                Amsterdam en Rotterdam) filtert een filterkan calcium eruit zonder iets terug te
                geven. BWT vervangt dit calcium deels door magnesium, waardoor het water
                mineralenrijker blijft dan bij Brita-filtering. Dit kan positief zijn voor mensen
                die extra mineralen via drinkwater willen binnenkrijgen.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Link
              href="/filterkan/bwt"
              className="inline-block text-[#005F8A] font-semibold text-sm hover:underline"
            >
              Lees meer over BWT filterkannen →
            </Link>
          </div>
        </section>

        {/* Wanneer geen van beide */}
        <section id="wanneer-geen-van-beide">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer voldoen zowel Brita als BWT niet?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn situaties waarin een filterkan — ongeacht het merk — onvoldoende bescherming
            biedt. Beide merken filteren uitsluitend via actief kool en ionenwisseling. Stoffen die
            kleiner zijn dan de poriën van de filtermedia passeren ongehinderd.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Nitraat in agrarische gebieden',
                tekst:
                  'Woon je in een landbouwintensief gebied (Brabant, Gelderland, Groningen)? Laat je drinkwater analyseren. Bij nitraat boven 25 mg/L is een filterkan niet effectief — nitraat passeert de ionenwisselhars ongehinderd. Kinderen en zwangere vrouwen zijn het meest kwetsbaar. Osmose verwijdert 90%+ van nitraat.',
                kleur: 'border-red-200 bg-red-50 text-red-900',
              },
              {
                titel: 'PFAS-risicogebieden',
                tekst:
                  'Woon je nabij industriegebieden zoals Dordrecht (Chemours/DuPont), Rotterdam-Botlek of Westerschelde? PFAS-verbindingen (PFOA, PFOS, GenX) zijn niet aantoonbaar effectief te verwijderen door filterkannen van Brita of BWT. Omgekeerde osmose verwijdert >95% van PFAS.',
                kleur: 'border-red-200 bg-red-50 text-red-900',
              },
              {
                titel: 'Babyvoeding en zuigelingen',
                tekst:
                  'Het RIVM adviseert gefilterd of gekookt water voor zuigelingen onder 6 maanden niet standaard via een filterkan te bereiden. Bacteriologische risico\'s (een vervuild filter kan bacteriën afgeven) maken osmose veiliger voor babyvoeding.',
                kleur: 'border-amber-200 bg-amber-50 text-amber-900',
              },
              {
                titel: 'Bacteriologische besmetting of putwater',
                tekst:
                  'Filterkannen verwijderen geen bacteriën of virussen. Gebruik je eigen bronwater, regenwater of water uit een put? Dan is een UV-filter of omgekeerde osmose noodzakelijk, niet een filterkan.',
                kleur: 'border-amber-200 bg-amber-50 text-amber-900',
              },
            ].map(item => (
              <div key={item.titel} className={`border rounded-xl p-4 ${item.kleur}`}>
                <p className="font-bold mb-1">{item.titel}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 border border-[#005F8A]/20 rounded-xl bg-[#E0F2FE] text-sm">
            <p className="text-[#003F5C] font-semibold mb-1">
              Is osmose beter voor jouw situatie?
            </p>
            <p className="text-gray-700">
              Lees de vergelijking{' '}
              <Link href="/filterkan/vs-osmose" className="text-[#005F8A] underline hover:no-underline">
                filterkan vs omgekeerde osmose
              </Link>{' '}
              of bekijk onze{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                volledige osmosegids
              </Link>.
            </p>
          </div>
        </section>

        {/* Kosten over 5 jaar */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat kosten Brita en BWT over 5 jaar? Kostenvergelijking
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanschafprijs van een filterkan (€25–55) is laag, maar de jaarlijkse kosten voor
            filterpatronen bepalen de totale eigendomskosten. Onderstaande tabel berekent dit over
            5 jaar voor een huishouden van 2 personen met 2 liter gefilterd water per dag (ca. 730
            liter per jaar, 5 patronen per jaar bij 150L-patronen).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold border border-[#003F5C]/20">Systeem</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20">Aanschaf</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20">Per jaar</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20">5 jaar totaal</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20 hidden sm:table-cell">Per liter</th>
                </tr>
              </thead>
              <tbody>
                {vijfJaarKosten.map((rij, i) => (
                  <tr
                    key={rij.systeem}
                    className={
                      rij.highlight
                        ? 'bg-[#E0F2FE] border-l-4 border-[#005F8A]'
                        : i % 2 === 0
                        ? 'bg-white'
                        : 'bg-gray-50'
                    }
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 border border-gray-100">{rij.systeem}</td>
                    <td className="px-4 py-3 text-center text-gray-700 border border-gray-100">{rij.aanschaf}</td>
                    <td className="px-4 py-3 text-center text-gray-700 border border-gray-100">{rij.jaarkosten}</td>
                    <td className="px-4 py-3 text-center font-semibold text-gray-900 border border-gray-100">{rij.vijfJaar}</td>
                    <td className="px-4 py-3 text-center text-gray-600 border border-gray-100 hidden sm:table-cell">{rij.perLiter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Berekening: 2L/dag × 365 = 730L/jaar. Brita Maxtra Pro: 150L/patroon = ca. 5 patronen/jaar.
            BWT mg²⁺: 120L/patroon = ca. 6 patronen/jaar. Osmose: incl. jaarlijkse filterwissel, excl.
            installatie.
          </p>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <strong className="text-amber-900">Conclusie:</strong> Brita met merkloze patronen is
            verreweg de goedkoopste filterkanoptie. BWT kost vergelijkbaar met originele
            Brita-patronen, maar zonder goedkoop alternatief. Osmose is duurder in aanschaf maar
            goedkoper per liter en biedt significante betere zuivering.
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/filterkan',
                title: 'Waterfilterkan uitleg',
                desc: 'Hoe een filterkan werkt, wat hij filtert en wanneer hij tekortschiet.',
              },
              {
                href: '/filterkan/brita',
                title: 'Brita filterkannen overzicht',
                desc: 'Alle Brita-modellen, patronen en prijzen op een rij.',
              },
              {
                href: '/filterkan/bwt',
                title: 'BWT filterkannen overzicht',
                desc: 'Alle BWT-modellen, de mg²⁺-technologie en patronenkosten.',
              },
              {
                href: '/filterkan/kopen',
                title: 'Filterkan kopen — koopgids',
                desc: 'Vergelijk alle merken op prijs, certificering en modellen.',
              },
              {
                href: '/filterkan/vs-osmose',
                title: 'Filterkan vs osmose',
                desc: 'Wanneer is een filterkan genoeg en wanneer is osmose nodig?',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose gids',
                desc: 'Alles over osmose: werking, kosten, installatie en modellen.',
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
            Veelgestelde vragen: Brita vs BWT
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
