import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Brita filterkan: modellen, filterpatronen en kosten 2026',
  description:
    'Overzicht van alle Brita filterkan modellen: Marella, Maxtra Pro, Flow, Style. Vergelijking filterpatronen, capaciteit, NSF-certificering en jaarkosten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filterkan/brita' },
  openGraph: {
    title: 'Brita filterkan: modellen, filterpatronen en kosten 2026',
    description:
      'Overzicht van alle Brita filterkan modellen: Marella, Maxtra Pro, Flow, Style. Vergelijking filterpatronen, capaciteit, NSF-certificering en jaarkosten.',
    url: 'https://waterfilterplatform.nl/filterkan/brita',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk Brita model is het beste?',
    answer:
      'Het beste Brita model hangt af van de grootte van je huishouden. De Marella (2,4L) is ideaal voor 1–2 personen en de meest verkochte kan van Nederland. De Flow (5L) is geschikter voor gezinnen van 3 personen of meer, doordat je minder vaak hoeft bij te vullen. De Style (2,4L, glas en plastic) is een designkeuze voor mensen die esthetiek belangrijk vinden. Functioneel zijn de modellen gelijkwaardig: ze gebruiken allemaal hetzelfde Maxtra Pro filterpatroon.',
  },
  {
    question: 'Hoe vaak moet ik het Brita filter vervangen?',
    answer:
      'Brita adviseert het Maxtra Pro filterpatroon te vervangen elke 4 weken of na 150 liter gefilterd water — wat het eerst bereikt wordt. Voor een gezin van 2–3 personen dat gemiddeld 1,5 liter per dag filtert, kom je op circa 10–12 patronen per jaar. De meeste Brita-kannen hebben een ingebouwde BRITA Memo indicator of digitale timer die de vervangingsdatum bijhoudt. Na de vervaldatum vermindert de filterprestatie merkbaar: chloor wordt minder effectief tegengehouden en de filtersnelheid neemt toe (het patroon is verzadigd).',
  },
  {
    question: 'Wat verwijdert een Brita filter wel en niet?',
    answer:
      'Een Brita Maxtra Pro verwijdert WEL: chloor (95%+), deels kalk (ca. 30–50% via ionenwisseling), koper (60–80%), lood (50–70%), pesticiden (>85%), herbiciden en smaak- en geurmoleculen. Een Brita verwijdert NIET: nitraten (<10%), PFAS/PFOA (<20% bij standaard koolstof), bacteriën en virussen (0%), microplastics (alleen grotere deeltjes), en volledige waterhardheid (calcium wordt niet volledig onttrokken). Brita is primair een smaak- en geurfilter, geen zuiveringsinstallatie.',
  },
  {
    question: 'Zijn merkloze filters compatibel met de Brita?',
    answer:
      'Veel merkloze filterpatronen claimen compatibel te zijn met Brita Maxtra-kannen en hebben een vergelijkbare patroonvorm. Brita adviseert het gebruik van originele Maxtra Pro patronen en stelt dat merkloze varianten de kan kunnen beschadigen — dit is echter ook commercieel belang. Merkloze patronen kosten €1–2 per stuk (versus €4–5 voor origineel) en zijn geschikt voor smaakreductie. Ze zijn echter vrijwel nooit NSF/ANSI 53 gecertificeerd, waardoor de prestaties op zware metalen en pesticiden onzeker zijn.',
  },
  {
    question: 'Wat kost een Brita filterpatroon per liter?',
    answer:
      'Een origineel Brita Maxtra Pro patroon kost €4–5 en filtert 150 liter. Dat komt neer op €0,03 per liter gefilterd water. Merkloze patronen kosten €1–2 per stuk voor dezelfde capaciteit, wat neerkomt op €0,007–0,013 per liter. Ter vergelijking: bronwater in flesjes kost €0,30–0,80 per liter. Een filterkan is dus aanzienlijk goedkoper dan flessenwater, ook met originele patronen. Aanschafkosten van de kan (€18–45) schrijf je af over 3–5 jaar.',
  },
  {
    question: 'Is een Brita geschikt voor hard water?',
    answer:
      'Deels. Brita verwijdert calcium gedeeltelijk via ionenwisseling: de ionenwisselaarhars wisselt calcium- en magnesiumionen om voor natrium- of waterstofionen. Bij hard water (>14°dH) is het effect merkbaar in de smaak en minder kalkvorming op het filterreservoir. Brita verwijdert echter niet 95–99% van de kalk zoals omgekeerde osmose dat doet. Bij zeer hard water (>18°dH) zal het patroon sneller verzadigen en moet je frequenter vervangen. Voor volledige ontharding of bij hardheid boven 20°dH is een waterontharder of osmosefilter effectiever.',
  },
  {
    question: 'Hoe lang gaat een Brita filterkan zelf mee?',
    answer:
      'Het kunststof reservoir van een Brita filterkan gaat bij normaal gebruik 3–5 jaar mee. Brita gebruikt BPA-vrij plastic (AS-kunststof of tritan) voor alle reservoirs. Na verloop van tijd kan het plastic verkleuren of lichte scheurtjes vertonen, vooral als de kan regelmatig in de vaatwasser wordt gewassen (wat Brita afraadt voor de meeste modellen). Het filter (het patroon zelf) vervang je uiteraard maandelijks. De Style-variant met glazen onderkant heeft een langere levensduur voor het glasgedeelte.',
  },
  {
    question: 'Wat is het verschil tussen Maxtra en Maxtra Pro?',
    answer:
      'Maxtra Pro is de nieuwere generatie (sinds 2021) die de originele Maxtra+ vervangt. De Maxtra Pro heeft een verbeterde activekoolfilter met hogere porositeit en een geoptimaliseerde ionenwisselaarhars. Brita claimt officieel 20% meer kalkverwijdering ten opzichte van de vorige generatie. De Maxtra Pro All-in-1 is NSF/ANSI 53 gecertificeerd — dit was de vorige Maxtra+ niet. Er is ook een Maxtra Pro Limescale-variant die extra geoptimaliseerd is voor kalkverwijdering in regio\'s met hard water (>14°dH). De patroonvorm is identiek: Maxtra Pro past in alle kannen die ook Maxtra+ ondersteunden.',
  },
];

const britaModellen = [
  {
    model: 'Marella',
    capaciteitTotaal: '2,4L (1,4L filter)',
    filterinhoud: '1,4L',
    materiaal: 'BPA-vrij plastic',
    prijs: '€18–25',
    geschiktVoor: '1–2 personen',
  },
  {
    model: 'Marella XL',
    capaciteitTotaal: '3,5L',
    filterinhoud: '2,5L',
    materiaal: 'BPA-vrij plastic',
    prijs: '€25–33',
    geschiktVoor: '2–3 personen',
  },
  {
    model: 'Flow',
    capaciteitTotaal: '5,0L',
    filterinhoud: '3,5L',
    materiaal: 'BPA-vrij plastic',
    prijs: '€35–45',
    geschiktVoor: 'Gezinnen',
  },
  {
    model: 'Style',
    capaciteitTotaal: '2,4L',
    filterinhoud: '1,4L',
    materiaal: 'Glas/plastic',
    prijs: '€25–35',
    geschiktVoor: 'Design',
  },
  {
    model: 'Aluna',
    capaciteitTotaal: '2,4L',
    filterinhoud: '1,4L',
    materiaal: 'BPA-vrij plastic',
    prijs: '€20–28',
    geschiktVoor: '1–2 personen',
  },
  {
    model: 'Maxtra Pro All-in-1',
    capaciteitTotaal: '—',
    filterinhoud: '—',
    materiaal: 'Filter',
    prijs: '€4–5/st',
    geschiktVoor: 'Alle bovenstaande',
  },
  {
    model: 'Maxtra Pro Limescale',
    capaciteitTotaal: '—',
    filterinhoud: '—',
    materiaal: 'Kalk-focus filter',
    prijs: '€4–5/st',
    geschiktVoor: 'Hard water regio\'s',
  },
];

const jaarkosten = [
  {
    gebruik: '1 pers (1L/dag)',
    patronen: '5–6',
    jaarOriginal: '€25–30',
    jaarMerkloos: '€8–15',
  },
  {
    gebruik: '2 pers (2L/dag)',
    patronen: '10–12',
    jaarOriginal: '€45–60',
    jaarMerkloos: '€15–25',
  },
  {
    gebruik: 'Gezin 4 pers',
    patronen: '18–20',
    jaarOriginal: '€75–100',
    jaarMerkloos: '€25–40',
  },
];

const filterStoffen = [
  { stof: 'Chloor', reductie: '95%+', kleur: 'green', opmerkingen: 'Actief kool adsorbeert effectief restchloor' },
  { stof: 'Kalk (calcium)', reductie: '30–50%', kleur: 'yellow', opmerkingen: 'Deels via ionenwisseling, niet volledig' },
  { stof: 'Lood', reductie: '50–70%', kleur: 'yellow', opmerkingen: 'NSF/ANSI 53 gecertificeerd (Maxtra Pro)' },
  { stof: 'Pesticiden', reductie: '>85%', kleur: 'green', opmerkingen: 'Actief kool adsorbeert organische pesticiden' },
  { stof: 'Koper', reductie: '60–80%', kleur: 'yellow', opmerkingen: 'Relevant bij koperen leidingen (panden voor 1970)' },
  { stof: 'Nitraat', reductie: '<10%', kleur: 'red', opmerkingen: 'Ionenwisselaar niet selectief voor nitraat' },
  { stof: 'PFAS/PFOA', reductie: '<20%', kleur: 'red', opmerkingen: 'Standaard koolstof onvoldoende voor PFAS' },
  { stof: 'Bacteriën', reductie: '0%', kleur: 'red', opmerkingen: 'Geen microbiologische bescherming' },
  { stof: 'Microplastics', reductie: 'Deels', kleur: 'red', opmerkingen: 'Alleen grotere deeltjes; kleine passeren filter' },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Filterkan', url: 'https://waterfilterplatform.nl/filterkan' },
  { name: 'Brita', url: 'https://waterfilterplatform.nl/filterkan/brita' },
];

export default function BritaFilterkanPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Brita filterkan: modellen, filterpatronen en kosten 2026',
          description:
            'Overzicht van alle Brita filterkan modellen: Marella, Maxtra Pro, Flow, Style. Vergelijking filterpatronen, capaciteit, NSF-certificering en jaarkosten.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/filterkan/brita',
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
            <span className="text-gray-700 font-medium">Brita</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Brita filterkan: modellen, filterpatronen en kosten 2026
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            Brita is veruit het bekendste filterkannenmerk van Nederland. Met modellen variërend van
            de compacte Marella tot de gezinsvriendelijke Flow (5L) en de glazen Style, biedt Brita
            voor elk huishouden een optie. Maar wat filteren deze kannen werkelijk, wat kosten de
            Maxtra Pro patronen per jaar, en wanneer is een Brita niet voldoende?
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">
              Bijgewerkt mei 2026
            </span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">
              ~7 min leestijd
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        {/* Quick Answer */}
        <QuickAnswer answer="Brita filterkannen gebruiken Maxtra Pro filterpatronen die chloor, kalk (deels), zware metalen en pesticiden verwijderen. Populaire modellen: Marella (2,4L, €18–25), Flow (5L, €35–45), Style (2,4L, €25–35). Filterpatroon vervangen elke 4 weken of 150L. Jaarkosten: €45–75. Brita verwijdert geen nitraten of PFAS." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#modellen', 'Brita modellen vergelijking'],
              ['#filterpatronen', 'Maxtra vs Maxtra Pro'],
              ['#jaarkosten', 'Jaarkosten filterpatronen'],
              ['#wat-verwijdert', 'Wat verwijdert een Brita Maxtra Pro?'],
              ['#wanneer', 'Wanneer is een Brita voldoende?'],
              ['#brita-vs-osmose', 'Brita vs omgekeerde osmose'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Modellen vergelijking */}
        <section id="modellen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke Brita filterkan modellen zijn er in 2026?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Brita biedt meerdere filterkanmodellen aan in uiteenlopende formaten en materialen. Alle
            modellen gebruiken dezelfde Maxtra Pro filterpatronen, waardoor de filterprestaties
            gelijkwaardig zijn. Het grootste verschil zit in capaciteit, ontwerp en materiaalgebruik.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Model</th>
                  <th className="text-center px-4 py-3 font-semibold">Capaciteit</th>
                  <th className="text-center px-4 py-3 font-semibold hidden sm:table-cell">Filter</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Materiaal</th>
                  <th className="text-center px-4 py-3 font-semibold">Prijs</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Geschikt voor</th>
                </tr>
              </thead>
              <tbody>
                {britaModellen.map((row, i) => (
                  <tr key={row.model} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-[#003F5C]">{row.model}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.capaciteitTotaal}</td>
                    <td className="px-4 py-3 text-center text-gray-700 hidden sm:table-cell">{row.filterinhoud}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.materiaal}</td>
                    <td className="px-4 py-3 text-center font-medium text-gray-900">{row.prijs}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.geschiktVoor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Bron: Brita Nederland productkatalogus 2026. Prijzen indicatief op basis van gangbare verkoopprijzen.
          </p>
        </section>

        {/* Filterpatronen: Maxtra vs Maxtra Pro */}
        <section id="filterpatronen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Maxtra vs Maxtra Pro: wat is het verschil?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Brita heeft de filterpatroongeneraties in de loop der jaren doorontwikkeld. De huidige
            standaard is het <strong>Maxtra Pro</strong>, dat in 2021 de Maxtra+ verving. Het
            belangrijkste onderscheid voor consumenten:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
              <p className="font-bold text-gray-700 mb-2">Maxtra+ (oud)</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>Actief kool + ionenwisselaar</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>NSF/ANSI 42 gecertificeerd</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>150 liter capaciteit</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>Niet meer in productie</li>
              </ul>
            </div>
            <div className="border border-[#005F8A]/30 rounded-xl p-5 bg-[#E0F2FE]">
              <p className="font-bold text-[#003F5C] mb-2">Maxtra Pro (huidig)</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">✓</span>Verbeterde activekoolfilter</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">✓</span>NSF/ANSI 53 gecertificeerd</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">✓</span>20% meer kalkverwijdering</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">✓</span>Variant: Maxtra Pro Limescale</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De <strong>Maxtra Pro Limescale</strong> is een speciale variant voor regio&apos;s met hard water
            (boven 14°dH). Deze is geoptimaliseerd voor maximale kalkverwijdering via een grotere
            ionenwisselaarhars. De <strong>Maxtra Pro All-in-1</strong> is de standaardvariant die
            geschikt is voor alle watertypen en alle verontreinigingen aanpakt.
          </p>
        </section>

        {/* Jaarkosten */}
        <section id="jaarkosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat kosten Brita filterpatronen per jaar?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanschafprijs van de kan is eenmalig. De werkelijke terugkerende kosten zitten in de
            filterpatronen. Hoeveel patronen je per jaar nodig hebt, hangt af van het dagelijks
            verbruik. Bij 150 liter per patroon (het Brita-advies) geldt:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Gebruik</th>
                  <th className="text-center px-4 py-3 font-semibold">Patronen/jaar</th>
                  <th className="text-center px-4 py-3 font-semibold">Jaarkosten (origineel)</th>
                  <th className="text-center px-4 py-3 font-semibold hidden sm:table-cell">Jaarkosten (merkloze)</th>
                </tr>
              </thead>
              <tbody>
                {jaarkosten.map((row, i) => (
                  <tr key={row.gebruik} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.gebruik}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.patronen}</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#003F5C]">{row.jaarOriginal}</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden sm:table-cell">{row.jaarMerkloos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op bij merkloze patronen:</strong> Merkloze
            alternatieven zijn goedkoper maar lang niet altijd NSF-gecertificeerd. Controleer of de
            cartridge gecertificeerd is voor de stoffen die voor jou relevant zijn — alleen
            &apos;compatibel met Brita&apos; is geen kwaliteitsgarantie.
          </div>
        </section>

        {/* Wat verwijdert een Brita Maxtra Pro */}
        <section id="wat-verwijdert">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat verwijdert een Brita Maxtra Pro? — Overzicht per stof
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onderstaande tabel geeft de gemiddelde verwijderingspercentages van het Brita Maxtra Pro
            All-in-1 patroon, op basis van NSF/ANSI 53 testdata en fabrikantspecificaties. Werkelijke
            prestaties variëren per waterkwaliteit en cartridgeleeftijd.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Stof</th>
                  <th className="text-center px-4 py-3 font-semibold">Verwijdering</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {filterStoffen.map((row, i) => (
                  <tr key={row.stof} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.stof}</td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-block font-semibold text-xs px-2.5 py-1 rounded-full ${
                          row.kleur === 'green'
                            ? 'bg-green-100 text-green-800'
                            : row.kleur === 'yellow'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {row.reductie}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.opmerkingen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Bron: NSF International; Brita Maxtra Pro productdocumentatie (2024–2026). Groen = effectieve reductie,
            oranje = gedeeltelijk, rood = niet of nauwelijks.
          </p>
        </section>

        {/* Wanneer is een Brita voldoende */}
        <section id="wanneer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een Brita voldoende — en wanneer niet?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een Brita filterkan is een prima keuze voor alledaags gebruik met gemeentelijk kraanwater.
            Er zijn echter situaties waarbij een filterkan tekortschiet.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <p className="font-bold text-green-800 mb-3">Brita IS voldoende als...</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Je gemeente-leidingwater gebruikt (voldoet aan Drinkwaterbesluit)',
                  'Je primair de smaak en chloor wilt verbeteren',
                  'Je in een regio woont met zacht tot matig hard water (<14°dH)',
                  'Je geen babyvoeding bereidt met leidingwater',
                  'Je geen bekende PFAS-belasting in jouw regio hebt',
                  'Je een eenvoudige, budgetvriendelijke oplossing wilt',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <p className="font-bold text-red-800 mb-3">Brita is NIET voldoende als...</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Je water hoge nitraatniveaus bevat (privéput of landbouwgebied)',
                  'Je in een PFAS-gevoelig gebied woont',
                  'Je babyvoeding bereidt — nitraat- en bacterierisico',
                  'Je oud leidingwerk hebt (loden leidingen vóór 1960)',
                  'Je hard water volledig wilt ontharden (>18°dH)',
                  'Je zeker wilt zijn van microplastic- en medicijnrestenreductie',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Brita vs osmose */}
        <section id="brita-vs-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Brita vs omgekeerde osmose voor thuisgebruik
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Brita en omgekeerde osmose richten zich op fundamenteel andere waterproblemen. Een Brita
            verbetert de smaak en verwijdert deels kalk en chloor. Een osmosefilter filtert op
            moleculair niveau en verwijdert 95–99% van vrijwel alle opgeloste stoffen, inclusief
            nitraten, PFAS, zware metalen en microplastics.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Kenmerk</th>
                  <th className="text-center px-4 py-3 font-semibold">Brita Maxtra Pro</th>
                  <th className="text-center px-4 py-3 font-semibold">Omgekeerde osmose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aanschafprijs', '€18–45', '€150–400'],
                  ['Jaarkosten filter', '€25–100', '€30–70'],
                  ['Chloorverwijdering', '95%+', '98%+'],
                  ['Kalkverwijdering', '30–50%', '95–99%'],
                  ['Nitraatverwijdering', '<10%', '90–96%'],
                  ['PFAS-verwijdering', '<20%', '90–98%'],
                  ['Bacteriënverwijdering', '0%', '99%+'],
                  ['Installatie', 'Geen', 'Onder aanrecht'],
                  ['Watersnelheid', 'Traag (zwaartekracht)', 'Snel (uit kraan)'],
                ].map(([kenmerk, brita, osmose], i) => (
                  <tr key={kenmerk} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{kenmerk}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{brita}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Voor een uitgebreide vergelijking, lees onze pagina{' '}
            <Link href="/filterkan/vs-osmose" className="text-[#005F8A] underline hover:no-underline">
              filterkan vs omgekeerde osmose
            </Link>
            .
          </p>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/filterkan',
                title: 'Filterkannen vergelijken',
                desc: 'Overzicht van alle filterkanmerken: Brita, BWT, PUR en Laica.',
              },
              {
                href: '/filterkan/kopen',
                title: 'Welke filterkan kopen?',
                desc: 'Koopgids met aanbevelingen per situatie en budget.',
              },
              {
                href: '/filterkan/bwt',
                title: 'BWT filterkan',
                desc: 'BWT Penguin en Minerva met mg²⁺ magnesiumtechnologie — hoe verschilt het van Brita?',
              },
              {
                href: '/filterkan/brita-vs-bwt',
                title: 'Brita vs BWT vergelijking',
                desc: 'Directe vergelijking op prijs, filterprestaties en magnesiumtechnologie.',
              },
              {
                href: '/filterkan/vs-osmose',
                title: 'Filterkan vs osmose',
                desc: 'Wanneer is een filterkan niet genoeg en heb je osmose nodig?',
              },
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter uitleg',
                desc: 'Hoe actief kool werkt en wat het precies filtert.',
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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filterkan/brita-vs-bwt" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Brita vs BWT vergelijking</h3>
            <p className="text-sm text-gray-600">Welk filterkannenmerk biedt meer waar voor uw geld? Een eerlijke vergelijking.</p>
          </Link>
          <Link href="/filterkan/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een filterkan?</h3>
            <p className="text-sm text-gray-600">Begrijp hoe de filterpatronen in Brita-kannen uw water zuiveren.</p>
          </Link>
          <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool filtratie</h3>
            <p className="text-sm text-gray-600">De techniek achter Brita-filters: hoe actief kool chloor en geuren verwijdert.</p>
          </Link>
          <Link href="/filterkan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filterkannengids</h3>
            <p className="text-sm text-gray-600">Alles over filterkannnen: werking, merken, kosten en alternatieve filtermethoden.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de Brita filterkan
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
