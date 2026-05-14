import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter voor aquarium: osmose voor zoet- en zoutwater | 2026',
  description:
    'Omgekeerde osmose voor aquarium: hoe je GH/KH instelt voor zoetwatervissen, zoutwater aanmaakt, kosten vergelijkt met kraanwater en welke RO-systemen geschikt zijn.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/voor-aquarium' },
  openGraph: {
    title: 'Waterfilter voor aquarium: osmose voor zoet- en zoutwater',
    description:
      'Complete gids over RO-water voor het aquarium: GH en KH instellen, zoutwater aanmaken, kosten en de beste systemen.',
    url: 'https://waterfilterplatform.nl/waterfilter/voor-aquarium',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Waarom is osmose water beter voor een aquarium dan kraanwater?',
    answer:
      'Kraanwater bevat chloor, chloramine, nitraten, fosfaten en wisselende hoeveelheden calcium en magnesium. Die stoffen verstoren de waterkwaliteit en maken het lastig om stabiele GH- en KH-waarden te handhaven. Met osmose water begin je op een nulpunt en voeg je zelf precies de juiste mineralen toe voor het type vissen of koralen dat je wilt houden.',
  },
  {
    question: 'Wat is TDS en waarom is het belangrijk voor aquariummers?',
    answer:
      'TDS staat voor Total Dissolved Solids (totaal opgeloste stoffen) en wordt gemeten in mg/l of ppm. Voor zachtwatervissen als discus en angelfish streef je naar TDS onder 100 ppm. Voor de meeste tropische vissen is 100–200 ppm ideaal. Zeewater heeft doorgaans een TDS rond 35.000 ppm. Een RO-systeem reduceert TDS van leidingwater (gemiddeld 300–600 ppm in Nederland) naar 5–20 ppm.',
  },
  {
    question: 'Hoe stel ik de GH en KH in na osmose behandeling?',
    answer:
      'Je voegt remineralisator toe aan het osmose water. Voor zoetwateraquarium gebruik je producten als Seachem Equilibrium (GH ophogen) en natriumbicarbonaat of Seachem Alkalinity (KH ophogen). Meet na toevoeging altijd met een betrouwbare testkit. Voor de meeste tropische vissen streef je naar GH 6–10 en KH 4–8.',
  },
  {
    question: 'Kan ik een normaal huishoud-RO systeem gebruiken voor een aquarium?',
    answer:
      'Ja, een standaard 4- of 5-staps huishoud-RO systeem werkt uitstekend voor aquariumgebruik. Let op de capaciteit: voor een aquarium van 200 liter met wekelijkse 20%-wisselingen heb je circa 40 liter per week nodig, wat elk RO-systeem gemakkelijk aankan. Voor grotere aquaria of zoutwaterbakken met osmose-aanvulling is een DI-pattroon (deionisatie) als vijfde stap aanbevelingswaardig.',
  },
  {
    question: 'Hoe maak ik zoutwater aan met osmose water?',
    answer:
      'Laat het osmose water op kamertemperatuur komen, voeg aquariumzout toe (SPS-koralen: soortelijk gewicht 1,025–1,026, vissen: 1,023–1,025) en zorg dat het zout volledig is opgelost voor je meet. Gebruik een refractometer voor nauwkeurige meting. Laat het gemixte water 24 uur beluchten voor gebruik om zuurstof te verzadigen.',
  },
  {
    question: 'Hoe duur is osmose water voor een aquarium per liter?',
    answer:
      'Een RO-systeem van circa €150–250 produceert water voor minder dan €0,01 per liter (alleen filtervervanging meegerekend). Dat is veel goedkoper dan kant-en-klaar osmose water uit de petshop (€0,30–0,80/liter) of het kopen van gedestilleerd water. Bij een aquarium van 200 liter met wekelijkse wisselingen verdien je een systeem terug in minder dan een jaar.',
  },
  {
    question: 'Hoe vaak moet ik de filters van mijn aquarium-RO systeem vervangen?',
    answer:
      'Sediment- en koolstoffilters elke 6–12 maanden, het RO-membraan elke 2–3 jaar, en een eventueel DI-pattroon zodra het TDS van het eindproduct boven 5 ppm stijgt. Gebruik altijd een TDS-meter om de membraankwaliteit te monitoren — stijgt het TDS ondanks een goed werkend systeem, dan is het membraan aan vervanging toe.',
  },
  {
    question: 'Heb ik een DI-module nodig naast RO?',
    answer:
      'Voor zoetwateraquaria is een DI-module doorgaans niet nodig. Voor zoutwater rifaquaria met veeleisende koralen (SPS, lps) raden veel liefhebbers een RO/DI combinatie aan om TDS tot nul te reduceren. DI-harsen vervangen ionen die door het RO-membraan zijn geglipt en geven water van laboratoriumkwaliteit.',
  },
];

const waterwaarden = [
  { vis: 'Discus', gh: '1–5', kh: '1–3', ph: '6,0–7,0', tds: '< 100' },
  { vis: 'Angelfish', gh: '3–8', kh: '2–5', ph: '6,5–7,5', tds: '100–200' },
  { vis: 'Neon tetra', gh: '2–6', kh: '1–4', ph: '6,0–7,0', tds: '80–150' },
  { vis: 'Guppy / cichliden', gh: '8–20', kh: '6–15', ph: '7,5–8,5', tds: '200–400' },
  { vis: 'Zeewater (rif)', gh: '—', kh: '7–11', ph: '8,1–8,4', tds: '~35.000' },
];

const kostenvergelijking = [
  { methode: 'Kraanwater (onbehandeld)', perLiter: '< € 0,001', opmerking: 'Onstabiele GH/KH, bevat chloor' },
  { methode: 'RO-systeem thuis', perLiter: '€ 0,005–0,01', opmerking: 'Eenmalige investering, minste kosten/liter' },
  { methode: 'Osmose water petshop', perLiter: '€ 0,30–0,80', opmerking: 'Gemakkelijk, maar duur bij groot aquarium' },
  { methode: 'Gedestilleerd water', perLiter: '€ 0,40–1,00', opmerking: 'Vergelijkbaar met RO, maar prijziger' },
];

export default function WaterfilterVoorAquariumPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter voor aquarium: osmose voor zoet- en zoutwater',
          description:
            'Hoe RO-water GH/KH-beheer vereenvoudigt, zoutwater aanmaken, kostenvergelijking en systeemkeuze voor aquariumhouders.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterfilter/voor-aquarium',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Voor aquarium', url: 'https://waterfilterplatform.nl/waterfilter/voor-aquarium' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Voor aquarium</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor aquarium: osmose voor zoet- en zoutwater
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Omgekeerde osmose is de gouden standaard voor aquariumhouders die stabiele, zuivere
            waterkwaliteit willen. Of je nu zachtwatervissen zoals discus of neontetras houdt,
            of een zoutwaterrif opbouwt — met RO-water begin je op een schoon canvas en heb je
            volledige controle over GH, KH en TDS.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              RO-systeem voor aquarium kopen →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Wat is omgekeerde osmose?
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#waarom-ro" className="hover:underline">Waarom RO-water voor aquarium?</a></li>
            <li><a href="#zoetwater" className="hover:underline">Zoetwateraquarium: GH en KH instellen</a></li>
            <li><a href="#zoutwater" className="hover:underline">Zoutwateraquarium aanmaken</a></li>
            <li><a href="#tds" className="hover:underline">TDS meten en monitoren</a></li>
            <li><a href="#kosten" className="hover:underline">Kostenvergelijking</a></li>
            <li><a href="#systemen" className="hover:underline">Welk systeem is geschikt?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Waarom RO */}
        <section id="waarom-ro">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom RO-water voor een aquarium?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Leidingwater in Nederland heeft een gemiddelde TDS van 300–600 mg/l, bevat chloor of
            chloramine ter desinfectie, en heeft een GH en KH die per waterleiding verschilt.
            Voor vissen en koralen die specifieke watercondities vereisen, is dat een probleem.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een omgekeerd osmose systeem reduceert TDS tot 5–20 mg/l, verwijdert 99% van alle
            chloor, nitraten, fosfaten en zware metalen, en geeft je een neutrale basis waaraan je
            zelf de gewenste mineralen en zouten toevoegt. Resultaat: stabiele, reproduceerbare
            waterkwaliteit die je volledig in handen hebt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Voordelen op een rij:</strong>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Nulpunt voor GH en KH — volledig maatwerk per vissoort</li>
              <li>Geen chloor of chloramine die bacterieculturen in het filter verstoren</li>
              <li>Stabielere pH — minder onverwachte schommelingen</li>
              <li>Betere waterhelderheid en minder algengroei door lage fosfaat/nitraat</li>
              <li>Goedkoper dan petshop-osmose water bij regelmatig gebruik</li>
            </ul>
          </div>
        </section>

        {/* Waterwaarden per vis */}
        <section id="zoetwater">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zoetwateraquarium: GH en KH instellen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Na RO-behandeling voeg je mineralen toe om de gewenste waterwaarden te bereiken.
            Onderstaande tabel geeft richtwaarden voor populaire vissen en zeewater.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Vissoort</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">GH (°dH)</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">KH (°dH)</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">pH</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">TDS (ppm)</th>
                </tr>
              </thead>
              <tbody>
                {waterwaarden.map(r => (
                  <tr key={r.vis} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.vis}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.gh}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.kh}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.ph}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.tds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor het verhogen van de GH gebruik je <strong>Seachem Equilibrium</strong> of een
            vergelijkbaar calcium-magnesium product. Voor de KH (carbonaathardheid) voeg je
            natriumbicarbonaat toe of gebruik je een gespecialiseerd KH-ophogingsproduct.
            Meet na elke toevoeging opnieuw met een betrouwbare druppeltest.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op:</strong> Voeg mineralen altijd toe
            <em> voor</em> je het water in het aquarium doet. Grote schommelingen in GH en KH
            zijn stressvol voor vissen. Wissel maximaal 20–30% van het volume per keer.
          </div>
        </section>

        {/* Zoutwater */}
        <section id="zoutwater">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zoutwateraquarium: osmose als basis</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor een zoutwateraquarium is RO-water niet alleen nuttig — het is <strong>onmisbaar</strong>.
            Zeezouten los je op in osmose water (of RO/DI-water) zodat je begint met een schone
            basis zonder stikstof- of fosfaatresten.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                stap: '1',
                titel: 'Osmose water produceren',
                tekst: 'Vul een jerrycan of reservoir met vers RO-water. Controleer TDS: moet lager zijn dan 10 ppm (bij voorkeur < 5 ppm voor rifaquaria). Breng op kamertemperatuur (± 25 °C).',
              },
              {
                stap: '2',
                titel: 'Zout toevoegen',
                tekst: 'Voeg premium aquariumzout toe (bijv. Red Sea Blue Bucket, Aquaforest, Tropic Marin). Gebruik de doseeraanwijzing van de fabrikant als startpunt. Zorg voor goede circulatie tijdens het oplossen.',
              },
              {
                stap: '3',
                titel: 'Soortelijk gewicht meten',
                tekst: 'Gebruik een goede refractometer (geijkt op zoet water) of een digitale meter. Streef naar 1,025–1,026 voor rifsystemen, 1,023–1,025 voor FOWLR (fish only). Corrigeer indien nodig.',
              },
              {
                stap: '4',
                titel: '24 uur belucht laten staan',
                tekst: 'Laat het water een dag beluchten om zuurstof en CO₂ te equilibreren. Controleer pH (moet 8,1–8,3 zijn) en temperatuur voor gebruik.',
              },
            ].map(s => (
              <div key={s.stap} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.stap}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor veeleisende SPS-koralen raden veel liefhebbers een <strong>RO/DI-systeem</strong> aan.
            Het extra deionisatiepattroon verwijdert de laatste ionen die door het RO-membraan
            glippen en geeft water met TDS = 0. Dit voorkomt sporenverontreinigingen die
            gevoelige koralen kunnen schaden.
          </p>
        </section>

        {/* TDS */}
        <section id="tds">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">TDS meten: hoe je je systeem monitort</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een goede TDS-meter is onmisbaar voor elke aquariumhouder die met RO-water werkt. Meet
            je TDS op twee punten: het ingaande leidingwater en het uitgaande RO-water. De
            verhouding noemen aquariumhouders de <em>rejection rate</em>.
          </p>
          <div className="bg-gray-50 rounded-2xl p-5 text-sm">
            <p className="font-semibold text-[#003F5C] mb-2">Richtlijn rejection rate:</p>
            <ul className="space-y-2 text-gray-700">
              <li><span className="text-green-700 font-semibold">Goed: &gt; 90%</span> — membraan werkt uitstekend</li>
              <li><span className="text-amber-600 font-semibold">Acceptabel: 80–90%</span> — membraan begint te verouderen</li>
              <li><span className="text-red-600 font-semibold">Vervangen: &lt; 80%</span> — membraan is uitgeput, vervangen</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Stijgt het TDS van je RO-water geleidelijk over maanden? Dat is normaal als het membraan
            veroudert. Een plotselinge TDS-stijging duidt eerder op beschadiging van het membraan —
            vaak door chloor als het pre-koolstoffilter niet tijdig werd vervangen.
          </p>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenvergelijking: zelf produceren vs kopen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De terugverdientijd van een eigen RO-systeem is verrassend kort voor actieve
            aquariumhouders. Hieronder de vergelijking per liter bij gemiddeld gebruik.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Methode</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten/liter</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Opmerking</th>
                </tr>
              </thead>
              <tbody>
                {kostenvergelijking.map(r => (
                  <tr key={r.methode} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800">{r.methode}</td>
                    <td className="py-2.5 px-3 text-right font-medium text-[#005F8A]">{r.perLiter}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs">{r.opmerking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Bij een 200-liter aquarium met wekelijkse 25%-wisselingen (50 liter/week) produceer
            je jaarlijks circa 2.600 liter. Bij petshopprijzen kost dat €780–€2.080. Een eigen
            systeem produceert hetzelfde volume voor €13–€26 aan filterkosten.
          </p>
        </section>

        {/* Systemen */}
        <section id="systemen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welk RO-systeem is geschikt voor aquarium?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet elk RO-systeem is hetzelfde. Voor aquariumgebruik zijn er een aantal punten om
            op te letten bij de aanschaf.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titel: 'Capaciteit (GPD)',
                tekst: 'RO-systemen worden aangegeven in gallons per day (GPD). 50 GPD ≈ 190 liter/dag — meer dan genoeg voor de meeste aquaria. Reken op 10–20% minder bij lagere waterdruk.',
              },
              {
                titel: 'Aantal filterstappen',
                tekst: '4-staps (sediment + 2× koolstof + membraan) volstaat voor zoetwateraquaria. Voor zoutwater rifaquaria is een 5-staps RO/DI-systeem met deionisatieharsen de gouden standaard.',
              },
              {
                titel: 'DI-module',
                tekst: 'Een deionisatiepattroon als vijfde stap reduceert TDS naar 0 ppm — ideaal voor gevoelige SPS-koralen. De DI-harsen zijn verbruiksmateriaal en moeten worden vervangen als het TDS boven 1–2 ppm stijgt.',
              },
              {
                titel: 'Aparte kraan vs reservoir',
                tekst: 'Veel aquariumhouders combineren hun RO-systeem met een apart opslagvat (20–100 liter) zodat ze bij waterwisseling altijd genoeg osmose water beschikbaar hebben zonder te wachten.',
              },
            ].map(p => (
              <div key={p.titel} className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{p.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Een standaard huishoud-RO systeem — zoals gebruikt voor drinkwater onder het aanrecht —
            werkt prima voor aquariumgebruik. Het enige verschil is dat je het water niet direkt
            drinkt maar in een apart reservoir opvangt. Bekijk ons overzicht van de beste systemen
            op de kooppagina.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'RO-systeem kopen',
                desc: 'Onafhankelijke vergelijking van de beste osmose systemen voor thuis en aquarium.',
              },
              {
                href: '/omgekeerde-osmose/membraan',
                title: 'RO membraan levensduur en vervanging',
                desc: 'Wanneer vervang je het membraan? Signalen, kosten en merkvergelijking.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose: complete gids',
                desc: 'Hoe werkt RO, wat verwijdert het en welk systeem past bij jou?',
              },
              {
                href: '/waterfilter',
                title: 'Waterfilter overzicht',
                desc: 'Alle filtertypes vergeleken: van filterkan tot under-sink RO.',
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterfilter voor aquarium</h2>
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
