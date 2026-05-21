import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Quooker onderhoud: compleet onderhoudsschema voor langere levensduur',
  description:
    'Quooker onderhoud: wanneer filter vervangen, ontkalken, boiler controleren en service laten uitvoeren. Compleet jaarschema met kosten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/quooker-onderhoud' },
  openGraph: {
    title: 'Quooker onderhoud — compleet onderhoudsschema voor langere levensduur',
    description:
      'Wanneer filter vervangen, ontkalken, boiler controleren en service laten uitvoeren. Compleet jaarschema met kosten.',
    url: 'https://waterfilterplatform.nl/quooker-onderhoud',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Hoe vaak moet ik de Quooker ontkalken?',
    answer:
      'Bij hard water (meer dan 12°dH) is ontkalken elke 3 maanden aan te raden. Bij zacht water (minder dan 8°dH) volstaat eens per 6 maanden. Signalen dat ontkalken nodig is: de boiler warmt langzamer op dan gebruikelijk, u ziet kalkranden rondom de uitloopdop, of het water heeft een licht kalkachtige smaak. Weet u niet hoe hard het water in uw gemeente is? Bekijk onze waterhardheidscheck per gemeente.',
  },
  {
    question: 'Hoe ontkalk ik mijn Quooker boiler?',
    answer:
      'De meestgebruikte methode is een citroenzuuroplossing: los 30 gram citroenzuur op per liter water. Laat de oplossing via de filteraansluiting instromen in de boiler en laat dit circa 30 minuten inwerken. Spoel daarna grondig met schoon water. De exacte procedure hangt af van het model (PRO3 vs PRO7) — raadpleeg altijd de meegeleverde handleiding. Bij twijfel kunt u een erkend installateur inschakelen.',
  },
  {
    question: 'Hoe vaak moet het Quooker filterpatroon vervangen worden?',
    answer:
      'Het Quooker filterpatroon moet vervangen worden na 1.500 liter gefilterd water of na 12 maanden — wat eerder bereikt wordt. De Quooker geeft dit aan via een indicator op het display: groen (goed), oranje (bijna vol) en rood (vervangen). Bij een gezin van 4 personen dat dagelijks 3 liter gebruikt, is het patroon doorgaans al na 8–10 maanden vol. Meer informatie leest u op onze pagina over het Quooker filterpatroon vervangen.',
  },
  {
    question: 'Wat zijn tekenen dat mijn Quooker onderhoud nodig heeft?',
    answer:
      'Er zijn vier duidelijke signalen: (1) de boiler warmt langzamer op dan normaal — dit wijst op kalkaanslag op het verwarmingselement; (2) de filterindicator op het display staat op oranje of rood; (3) het water heeft een kalkachtige of metaalachtige smaak; (4) de waterdruk uit de kraan is merkbaar verminderd. Bij combinatie van meerdere signalen is meteen actie aan te raden.',
  },
  {
    question: 'Kan ik Quooker onderhoud zelf doen of moet ik een monteur bellen?',
    answer:
      'Twee taken zijn eenvoudig zelf te doen: het filterpatroon vervangen (5 minuten, geen gereedschap nodig) en de boiler ontkalken met citroenzuur. Voor andere problemen is een erkend installateur nodig: aanhoudende lekkages, elektrische storingen of foutmeldingen op het display, het vervangen van de boiler zelf, of garantie-gerelateerde problemen. Probeer nooit zelf de boiler te openen — het apparaat staat permanent onder druk.',
  },
  {
    question: 'Wat kost professioneel Quooker onderhoud?',
    answer:
      'Een servicebezoek door een erkend Quooker-installateur kost gemiddeld €80–150 exclusief BTW, afhankelijk van de regio en de werkzaamheden. Sommige installateurs bieden een serviceabonnement aan voor €8–12 per maand (€96–144/jaar), inclusief een jaarlijks bezoek en voorrang bij storingen. Voor incidenteel onderhoud is een losse afspraak doorgaans voordeliger; bij meerdere apparaten of zakelijk gebruik loont een abonnement meer.',
  },
  {
    question: 'Hoe verlengt osmosewater de levensduur van mijn Quooker?',
    answer:
      'Omgekeerde osmose verwijdert 95–99% van calcium en magnesium uit het water voordat het de Quooker bereikt. Zonder kalk in het water ontstaat er vrijwel geen kalkaanslag op het verwarmingselement en de boilerwand. Dat betekent: minder of geen ontkalken, lager energieverbruik (kalkaanslag verhoogt het verbruik met 10–25%), en een langere levensduur van het verwarmingselement en de afdichtingen. Een osmosefilter werkt als structurele pre-filter vóór de Quooker en elimineert het kalkprobleem aan de bron.',
  },
  {
    question: 'Hoe lang gaat een Quooker mee?',
    answer:
      'Bij goed onderhoud gaat een Quooker gemiddeld 10–15 jaar mee. De boiler is het meest kwetsbare onderdeel, met name bij hard water: kalkaanslag tast het verwarmingselement aan en versnelt slijtage van de afdichtingen. Met regelmatig ontkalken (of een osmose pre-filter) blijft het verwarmingselement langer intact. De kraan zelf (mechanisch deel) gaat doorgaans langer mee dan de boiler. Reserveonderdelen zijn beschikbaar via erkende Quooker-dealers.',
  },
];

const onderhoudsSchema = [
  {
    taak: 'Filterpatroon vervangen',
    frequentie: '12 maanden of 1.500L',
    tijd: '5 min',
    kosten: '€15–25',
  },
  {
    taak: 'Uitloopdop reinigen',
    frequentie: 'Maandelijks',
    tijd: '2 min',
    kosten: '€0',
  },
  {
    taak: 'Boiler ontkalken',
    frequentie: '3–6 maanden (waterafhankelijk)',
    tijd: '45 min',
    kosten: '€2–5 (citroenzuur)',
  },
  {
    taak: 'Kraanuitloop checken',
    frequentie: 'Kwartaal',
    tijd: '5 min',
    kosten: '€0',
  },
  {
    taak: 'Afdichtingen inspecteren',
    frequentie: 'Jaarlijks',
    tijd: '10 min',
    kosten: '€0',
  },
  {
    taak: 'Professionele service',
    frequentie: 'Optioneel/jaarlijks',
    tijd: '60–90 min',
    kosten: '€80–150',
  },
];

const uitloopdopStappen = [
  {
    stap: 1,
    titel: 'Draaien en verwijderen',
    tekst:
      'Draai de uitloopdop linksom los van de kraan. De meeste Quooker-uitloopdoppen kunnen met de hand worden losgedraaid; bij sterk verkalk exemplaren kunt u een vaatdoek als grip gebruiken.',
  },
  {
    stap: 2,
    titel: 'Weken in azijn- of citroenzuuroplossing',
    tekst:
      'Leg de uitloopdop minimaal 30 minuten in een glas met een mengsel van gelijke delen water en witte azijn, of een oplossing van 20 gram citroenzuur per liter water. Kalkafzetting lost hierdoor op.',
  },
  {
    stap: 3,
    titel: 'Spoelen en gaatjes vrijmaken',
    tekst:
      'Spoel de dop grondig af onder de kraan. Controleer of alle kleine gaatjes vrij zijn; gebruik indien nodig een tandenstoker om verstopte openingen te openen.',
  },
  {
    stap: 4,
    titel: 'Terugplaatsen en testen',
    tekst:
      'Draai de uitloopdop rechtsom terug op de kraan en zet hem goed vast. Test daarna de waterstraal: bij een gelijkmatige, brede straal zijn alle gaatjes vrij.',
  },
];

export default function QuookerOnderhoudPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker onderhoud', url: 'https://waterfilterplatform.nl/quooker-onderhoud' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Quooker onderhoud: compleet onderhoudsschema voor langere levensduur',
          description:
            'Quooker onderhoud: wanneer filter vervangen, ontkalken, boiler controleren en service laten uitvoeren. Compleet jaarschema met kosten.',
          datePublished: '2026-03-20',
          url: 'https://waterfilterplatform.nl/quooker-onderhoud',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker onderhoud</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker onderhoud: compleet onderhoudsschema voor langere levensduur
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een Quooker gaat 10–15 jaar mee — maar alleen als u het onderhoud niet vergeet. Op deze
            pagina vindt u een compleet onderhoudsschema: wanneer u het filterpatroon vervangt,
            hoe vaak u ontkalt, hoe u de uitloopdop reinigt, en wanneer een monteur nodig is.
            Inclusief kostenoverzicht en tips voor wie in een harde waterregio woont.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quooker-filter"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Quooker filter uitleg →
            </Link>
            <Link
              href="/quooker-kalk"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kalk in Quooker aanpakken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Quooker onderhoud bestaat uit drie taken: filterpatroon vervangen (elke 1.500L of 12 maanden, €15–25), boiler ontkalken (elke 3–6 maanden bij hard water), en jaarlijkse controle van afdichtingen en aansluitingen. Totale jaarlijkse onderhoudskosten: €40–100. Bij hard water (>12°dH) is vaker ontkalken nodig of een osmosefilter als structurele oplossing." />

        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#jaarschema" className="hover:underline">Compleet onderhoudsschema</a></li>
            <li><a href="#filterpatroon" className="hover:underline">Filterpatroon vervangen</a></li>
            <li><a href="#ontkalken" className="hover:underline">Boiler ontkalken</a></li>
            <li><a href="#waterhardheid" className="hover:underline">Waterhardheid in jouw regio</a></li>
            <li><a href="#uitloopdop" className="hover:underline">Uitloopdop reinigen</a></li>
            <li><a href="#osmose" className="hover:underline">Kalkaanslag structureel voorkomen</a></li>
            <li><a href="#repareren-of-vervangen" className="hover:underline">Repareren vs vervangen</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="jaarschema">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat houdt compleet Quooker onderhoud in?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Quooker onderhoud bestaat uit een combinatie van maandelijkse, kwartaalmatige en jaarlijkse
            taken. Welke taken het meest urgent zijn, hangt sterk af van de hardheid van het leidingwater
            in uw gemeente. Onderstaand schema geeft een volledig overzicht van alle onderhoudstaken,
            de aanbevolen frequentie, tijdsinvestering en kosten.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Taak</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Frequentie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Tijdsinvestering</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten</th>
                </tr>
              </thead>
              <tbody>
                {onderhoudsSchema.map((r, i) => (
                  <tr key={r.taak} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.taak}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.frequentie}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.tijd}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Kosten zijn indicatief voor 2026. Ontkalkingsfrequentie afhankelijk van waterhardheid in uw regio.
            Professionele service is optioneel maar aanbevolen bij garantie-issues of complexe storingen.
          </p>
        </section>

        <section id="filterpatroon">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer moet het Quooker filterpatroon vervangen worden?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het filterpatroon is de meest geplande onderhoudstaak: vervangen na <strong>1.500 liter
            gefilterd water of na 12 maanden</strong> — wat eerder van toepassing is. Dit geldt uitsluitend
            voor Quooker FILTER-modellen (PRO3 FILTER, PRO3 FUSION FILTER en modellen met CUBE). Standaard
            PRO3- en PRO7-modellen zonder FILTER-functie hebben geen filterpatroon.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De Quooker geeft het vervangingsmoment aan via een kleurindicator op het display:
          </p>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { kleur: 'Groen', betekenis: 'Filter functioneert goed', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
              { kleur: 'Oranje', betekenis: 'Filter bijna vol — bestellen', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
              { kleur: 'Rood', betekenis: 'Filter vervangen — direct actie', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
            ].map(s => (
              <div key={s.kleur} className={`${s.bg} border ${s.border} rounded-xl p-3 text-center`}>
                <p className={`font-bold text-sm ${s.text} mb-1`}>{s.kleur}</p>
                <p className="text-xs text-gray-600">{s.betekenis}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het filterpatroon is in 5 minuten zelf te vervangen, zonder gereedschap. Na vervanging
            reset u de indicator via het display (5 seconden indrukken). Een patroon kost €15–25,
            afhankelijk van het model. Lees de volledige stap-voor-stap handleiding op onze pagina{' '}
            <Link href="/quooker/filter-vervangen" className="text-[#005F8A] underline hover:no-underline">
              Quooker filter vervangen
            </Link>.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Praktische tip:</strong> stel een agenda-herinnering in
            voor 11 maanden na uw laatste filtervervanging. Zo bestelt u op tijd een nieuw patroon
            en loopt u nooit achter op het vervangingsmoment. Bij intensief gebruik (4+ personen)
            is een herinnering na 8 maanden verstandiger.
          </div>
        </section>

        <section id="ontkalken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe en hoe vaak moet u de Quooker boiler ontkalken?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ontkalken is de meest tijdgevoelige onderhoudstaak bij Quookers in hardwaterregio&#39;s.
            Calcium en magnesium in leidingwater kristalliseren bij de hoge temperatuur in de boiler
            (gemiddeld 110°C) en slaan neer als kalkaanslag op het verwarmingselement. Dit verlaagt
            de verwarmingsefficiëntie en versnelt de slijtage van afdichtingen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2 text-sm">Zacht water (&lt;8°dH)</p>
              <p className="text-sm text-gray-600">Ontkalken 1–2 keer per jaar volstaat. Minimale kalkaanslag, laag risico voor het verwarmingselement.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="font-semibold text-amber-900 mb-2 text-sm">Matig water (8–12°dH)</p>
              <p className="text-sm text-gray-600">Ontkalken elke 4–6 maanden aanbevolen. Controleer de uitloopdop maandelijks op kalkranden.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-semibold text-orange-900 mb-2 text-sm">Hard water (12–18°dH)</p>
              <p className="text-sm text-gray-600">Ontkalken elke 3 maanden. Zichtbare kalkranden op uitloopdop na 4–6 weken zijn normaal.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="font-semibold text-red-900 mb-2 text-sm">Zeer hard water (&gt;18°dH)</p>
              <p className="text-sm text-gray-600">Ontkalken elke 6–8 weken. Overweeg structureel een osmosefilter als pre-filter.</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            De meestgebruikte ontkalkingsmethode is een <strong>citroenzuuroplossing (30g/L)</strong>.
            Laat de oplossing via de filteraansluiting instromen, 30 minuten laten staan, en daarna
            spoelen met schoon water. De exacte procedure verschilt per model — raadpleeg altijd de
            handleiding. Meer details over de complete ontkalkmethode vindt u op onze pagina{' '}
            <Link href="/quooker-kalk" className="text-[#005F8A] underline hover:no-underline">
              Kalk in de Quooker
            </Link>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Weet u niet hoe hard het water in uw gemeente is?{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              Controleer de waterhardheid per gemeente
            </Link>{' '}
            en bepaal de juiste ontkalkingsfrequentie voor uw situatie.
          </p>
        </section>

        <section id="waterhardheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe hard is het water in jouw regio?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De waterhardheid verschilt sterk per gemeente in Nederland. In het westen en noorden van
            het land is het water over het algemeen zachter; in het zuiden en midden van het land —
            denk aan Eindhoven, Tilburg, Arnhem en Den Haag — is het water beduidend harder. Dat
            verschil bepaalt direct hoe vaak u uw Quooker moet ontkalken.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Hardheid</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Voorbeeldregio&#39;s</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Ontkalken</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { hardheid: 'Zacht (<8°dH)', regio: "Groningen, Friesland, Amsterdam", frequentie: '1-2x per jaar' },
                  { hardheid: 'Matig (8–12°dH)', regio: 'Utrecht, Almere', frequentie: '2–3x per jaar' },
                  { hardheid: 'Hard (12–18°dH)', regio: 'Arnhem, Den Haag, Breda', frequentie: '3–4x per jaar' },
                  { hardheid: 'Zeer hard (>18°dH)', regio: 'Eindhoven, Tilburg, Maastricht', frequentie: '5–6x per jaar' },
                ].map(r => (
                  <tr key={r.hardheid} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.hardheid}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.regio}</td>
                    <td className="py-2.5 px-3 text-center text-[#005F8A] font-semibold">{r.frequentie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Controleer de exacte waterhardheid voor uw gemeente via onze{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheidscheck per gemeente
            </Link>.
            Zo weet u precies hoe vaak uw Quooker onderhoud nodig heeft en of een osmosefilter
            als pre-filter zinvol is.
          </p>
        </section>

        <section id="uitloopdop">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Uitloopdop reinigen: stap voor stap
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De uitloopdop van de Quooker is een van de meest verwaarloosde onderdelen bij onderhoud.
            Kalk verstopt de kleine gaatjes, wat de waterstraal beïnvloedt en het spetteren vergroot.
            Maandelijks reinigen is eenvoudig en gratis — en voorkomt dat u dit meer ingrijpend
            moet aanpakken.
          </p>
          <div className="space-y-4">
            {uitloopdopStappen.map(s => (
              <div key={s.stap} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.stap}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Let op:</strong> gebruik nooit schurende reinigingsmiddelen
            of staalwol op de uitloopdop — dit beschadigt de coating en kan de waterstraal blijvend
            beïnvloeden. Witte azijn of citroenzuuroplossing zijn de veiligste opties.
          </div>
        </section>

        <section id="osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe voorkomt u kalkaanslag in uw Quooker structureel?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ontkalken is curatief: u lost een probleem op dat al is ontstaan. Een structurele oplossing
            voor bewoners van hardwaterregio&#39;s is een <strong>osmosefilter als pre-filter</strong> vóór
            de Quooker. Omgekeerde osmose verwijdert 95–99% van calcium en magnesium uit het leidingwater
            voordat het de boiler bereikt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-[#003F5C] mb-3 text-sm">Zonder osmose pre-filter</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Kalkaanslag elke 3–6 maanden',
                  '10–25% hoger energieverbruik',
                  'Kortere levensduur verwarmingselement',
                  'Regelmatig ontkalken nodig (45 min/keer)',
                  'Slijtage van afdichtingen versneld',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-red-500 font-bold shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <h3 className="font-bold text-[#003F5C] mb-3 text-sm">Met osmose pre-filter</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Vrijwel geen kalkaanslag',
                  'Optimaal energieverbruik',
                  'Langere levensduur boiler',
                  'Minder of geen ontkalken nodig',
                  'Kalkvrij water voor koffie en thee',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Een onderbouw osmosefilter wordt aangesloten op de koudwatertoevoer van de Quooker.
            Het gefilterde water loopt vervolgens door de Quooker. De installatie vereist een
            T-stuk op de toevoerleiding en is een klus voor een loodgieter of installateur (eenmalige
            installatiekosten €100–200). Meer informatie over osmosefilters vindt u op onze pagina{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>.
          </p>
        </section>

        <section id="repareren-of-vervangen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer Quooker laten repareren en wanneer vervangen?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een Quooker is een duurzaam apparaat, maar er komt een moment dat repareren duurder is
            dan vervangen. Onderstaand overzicht helpt u de keuze te maken.
          </p>
          <div className="space-y-3">
            {[
              {
                situatie: 'Lekke afdichting of O-ring',
                advies: 'Repareren — erkend installateur, kosten €50–100',
                type: 'repareren',
              },
              {
                situatie: 'Foutmelding op display (E-code)',
                advies: 'Repareren — diagnose door Quooker-dealer vereist',
                type: 'repareren',
              },
              {
                situatie: 'Boiler verwarmt niet meer',
                advies: 'Afhankelijk van leeftijd: bij apparaat <8 jaar repareren; bij >10 jaar vervanging overwegen',
                type: 'overwegen',
              },
              {
                situatie: 'Boiler ouder dan 12 jaar + frequente storingen',
                advies: 'Vervangen — reparatiekosten wegen doorgaans niet meer op tegen investeringswaarde',
                type: 'vervangen',
              },
              {
                situatie: 'Kraan lekt water bij basis',
                advies: 'Repareren — kraanaansluiting of cartridge defect; erkend installateur',
                type: 'repareren',
              },
              {
                situatie: 'Gewenste upgrade naar FILTER/CUBE functie',
                advies: 'Vervangen — FILTER-functie is niet als upgrade toe te voegen aan PRO3-modellen',
                type: 'vervangen',
              },
            ].map(r => (
              <div
                key={r.situatie}
                className={`border rounded-xl p-4 flex gap-3 items-start ${
                  r.type === 'repareren'
                    ? 'border-green-100 bg-green-50'
                    : r.type === 'vervangen'
                    ? 'border-red-100 bg-red-50'
                    : 'border-amber-100 bg-amber-50'
                }`}
              >
                <span
                  className={`text-sm font-bold shrink-0 mt-0.5 ${
                    r.type === 'repareren'
                      ? 'text-green-700'
                      : r.type === 'vervangen'
                      ? 'text-red-700'
                      : 'text-amber-700'
                  }`}
                >
                  {r.type === 'repareren' ? '✓' : r.type === 'vervangen' ? '✗' : '?'}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.situatie}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{r.advies}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-5 leading-relaxed">
            Bij twijfel kunt u altijd een diagnoseafspraak maken bij een erkend Quooker-servicepunt.
            De kosten hiervan worden bij een eventuele reparatie of vervanging doorgaans verrekend.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: '/quooker-filter',
                title: 'Quooker filter: werking en kosten',
                desc: 'Hoe werkt het koolstoffilter in de Quooker FILTER-modellen? Wat verwijdert het wel en niet?',
              },
              {
                href: '/quooker/filter-vervangen',
                title: 'Filterpatroon vervangen: stap-voor-stap',
                desc: 'Complete handleiding voor het vervangen van het Quooker filterpatroon, inclusief reset-instructies.',
              },
              {
                href: '/quooker-kalk',
                title: 'Kalk in de Quooker aanpakken',
                desc: 'Oorzaken, gevolgen en preventie van kalkaanslag in de Quooker boiler. Met complete ontkalkinstructies.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Controleer de waterhardheid in uw gemeente en bepaal de juiste onderhoudsfrequentie.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose uitleg',
                desc: 'Hoe werkt een osmosefilter, wat kost het en wanneer is het de moeite waard als pre-filter voor de Quooker?',
              },
              {
                href: '/waterontharder',
                title: 'Waterontharder als alternatief',
                desc: 'Een waterontharder (ionenwisselaar) is een andere manier om kalk structureel aan te pakken.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1 text-sm">
                  {l.title}
                </p>
                <p className="text-xs text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Quooker onderhoud</h2>
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/kokend-water-kraan" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kokend water kraan</p>
              <p className="text-sm text-gray-500">Complete gids over kokend water kranen</p>
            </Link>
            <Link href="/onderhoud" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Onderhoud waterfilter</p>
              <p className="text-sm text-gray-500">Onderhoudsschema en tips voor waterfilters</p>
            </Link>
            <Link href="/onderhoud/kokend-water-kraan-onderhoud" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Kokend water kraan onderhoud</p>
              <p className="text-sm text-gray-500">Stap-voor-stap onderhoudsgids</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Omgekeerde osmose</p>
              <p className="text-sm text-gray-500">Hoe werkt omgekeerde osmose filtratie?</p>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
