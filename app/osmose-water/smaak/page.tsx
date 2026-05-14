import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosewater smaak: waarom smaakt het anders? | 2026',
  description:
    'Waarom smaakt osmosewater anders dan kraanwater of bronwater? Uitleg over mineralen, CO2-zuurgraad, TDS en hoe remineralisatie de smaak verbetert.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/smaak' },
  openGraph: {
    title: 'Osmosewater smaak: waarom smaakt het anders?',
    description:
      'Osmosewater heeft geen mineralen en bevat CO2 opgelost — dat geeft een andere smaak dan kraanwater. Lees hoe remineralisatie helpt.',
    url: 'https://waterfilterplatform.nl/osmose-water/smaak',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Waarom smaakt osmosewater anders dan kraanwater?',
    answer:
      'Osmosewater bevat vrijwel geen opgeloste mineralen (calcium, magnesium, natrium) en heeft daardoor een "leeg" of zacht karakter. Bovendien lost er licht CO2 in op, waardoor de pH iets daalt en het water een milde frisheid of zuurheid kan geven. Kraanwater bevat wel mineralen die bijdragen aan een voller mondgevoel.',
  },
  {
    question: 'Is de smaak van osmosewater slechter dan bronwater?',
    answer:
      'Dat is subjectief. Veel mensen omschrijven osmosewater als neutraal en fris, vergelijkbaar met licht mineraalwater. Bronwater heeft een eigen mineraalprofiel — calcium en magnesium geven een ronder mondgevoel. Met een remineralisatiepatroon kun je osmosewater een smaakprofiel geven dat lijkt op licht bronwater.',
  },
  {
    question: 'Wat is TDS en hoe beïnvloedt het de smaak?',
    answer:
      'TDS staat voor Total Dissolved Solids — het totaal aan opgeloste stoffen in mg per liter. Osmosewater heeft typisch een TDS van 10–50 ppm. Kraanwater in Nederland: 200–500 ppm. Bronwater: 100–400 ppm. Smaakonderzoeken tonen dat de meeste mensen een TDS van 50–150 ppm als het prettigst ervaren — niet te leeg, niet te mineraalrijk.',
  },
  {
    question: 'Hoe verbetert remineralisatie de smaak van osmosewater?',
    answer:
      'Een remineralisatiepatroon voegt kleine hoeveelheden calcium en magnesium toe aan het gefilterde water — typisch tot 50–100 mg/L. Dat geeft het water een voller mondgevoel, een licht zoetere afdronk en een pH van circa 7,5–8,0. Veel gebruikers beschrijven het als "zoals goed flessenwater, maar uit de kraan".',
  },
  {
    question: 'Waarom heeft osmosewater soms een zure of vreemde nasmaak?',
    answer:
      'Opgelost CO2 maakt osmosewater licht zuur (pH 5,5–6,5). Dit geeft sommige mensen het gevoel van een subtiele zuurheid of frisheid. Als het water in een drukvat heeft gestaan kan er ook een licht rubberen of plastic nasmaak ontstaan — een post-koolstoffilter verhelpt dit. Controleer altijd of de post-filter niet aan vervanging toe is.',
  },
  {
    question: 'Is osmosewater geschikt voor koffie en thee?',
    answer:
      'Ja, en voor de meeste gebruikers werkt het uitstekend. Osmosewater met een lichte remineralisatie (TDS 50–100 ppm) geldt onder specialty-koffiezetten als ideaal: smaakcomponenten extraheren beter en er is geen chloor of kalk die de aroma\'s maskeren. Voor espresso wordt een TDS van 75–125 ppm aanbevolen.',
  },
];

const vergelijking = [
  {
    type: 'Osmosewater (puur)',
    tds: '10–50 ppm',
    ph: '5,5–6,5',
    smaak: 'Neutraal, licht fris, "leeg"',
    mineralen: 'Minimaal',
    highlight: false,
  },
  {
    type: 'Osmosewater + remineralisatie',
    tds: '50–150 ppm',
    ph: '7,0–8,0',
    smaak: 'Vol, mild, vergelijkbaar met bronwater',
    mineralen: 'Ca/Mg toegevoegd',
    highlight: true,
  },
  {
    type: 'Nederlands kraanwater',
    tds: '200–500 ppm',
    ph: '7,5–8,5',
    smaak: 'Vol, soms licht chloor- of kalkachtig',
    mineralen: 'Hoog',
    highlight: false,
  },
  {
    type: 'Bronwater (gemiddeld)',
    tds: '100–350 ppm',
    ph: '7,0–7,8',
    smaak: 'Rond, frisch, mineraalachtig',
    mineralen: 'Middel',
    highlight: false,
  },
];

export default function OsmoseWaterSmaakPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmosewater smaak: waarom smaakt het anders?',
          description:
            'Uitleg waarom osmosewater anders smaakt dan kraanwater en bronwater, inclusief rol van TDS, CO2 en remineralisatie.',
          datePublished: '2026-01-15',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/osmose-water/smaak',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmose water', url: 'https://waterfilterplatform.nl/osmose-water' },
          { name: 'Smaak', url: 'https://waterfilterplatform.nl/osmose-water/smaak' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:text-[#005F8A]">Osmose water</Link>
            <span className="mx-2">/</span>
            <span>Smaak</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater smaak: waarom smaakt het anders?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Osmosewater heeft een opvallend andere smaak dan kraanwater of bronwater. Het voelt
            lichter, neutraler, soms frisser aan. Dat heeft alles te maken met de afwezigheid van
            mineralen, lichte opname van CO2 en de TDS-waarde. Op deze pagina leggen we het uit —
            en laten we zien hoe remineralisatie de smaak verbetert.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#waarom"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waarom anders? →
            </a>
            <a
              href="#remineralisatie"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Remineralisatie uitleg
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#waarom" className="hover:underline">Waarom smaakt osmosewater anders?</a></li>
            <li><a href="#co2" className="hover:underline">CO2 en zuurgraad</a></li>
            <li><a href="#tds" className="hover:underline">TDS en smaakperceptie</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijking met kraanwater en bronwater</a></li>
            <li><a href="#remineralisatie" className="hover:underline">Remineralisatie verbetert smaak</a></li>
            <li><a href="#koffie" className="hover:underline">Osmosewater voor koffie en thee</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Waarom anders */}
        <section id="waarom">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom smaakt osmosewater anders?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De smaak van water wordt bepaald door <strong>opgeloste mineralen</strong>, de
            <strong> pH-waarde</strong> en eventuele andere stoffen zoals chloor of organische
            verbindingen. Een omgekeerde osmose membraan verwijdert 95–99% van vrijwel alles —
            inclusief de mineralen die normaal bijdragen aan smaak en mondgevoel.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Calcium en magnesium geven water een vol, licht zoet karakter. Zonder die mineralen
            voelt water <em>leeg</em> of <em>vlak</em> aan. Sommige mensen vinden dit prettig
            omdat er ook geen chloor, kalk of metallieke bijsmaak meer in zit. Anderen missen
            de volheid van kraanwater of bronwater.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Bovendien heeft osmosewater een lagere buffercapaciteit: het neemt snel kleine
            hoeveelheden CO2 op uit de lucht, waardoor de pH licht daalt. Dat geeft een subtiele
            frisheid die sommigen als licht zuurachtig ervaren.
          </p>
        </section>

        {/* CO2 sectie */}
        <section id="co2">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">CO2 en zuurgraad van osmosewater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Puur osmosewater heeft doorgaans een pH tussen <strong>5,5 en 6,5</strong> — iets
            zuurder dan het neutrale 7,0. Dit komt doordat osmosewater weinig carbonaatbuffers
            bevat. CO2 uit de lucht lost gemakkelijk op en vormt koolzuur (H₂CO₃), wat de pH
            verlaagt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700 mb-4">
            <p className="font-semibold text-[#003F5C] mb-2">Vergelijking pH-waarden:</p>
            <ul className="space-y-1.5">
              <li className="flex justify-between"><span>Osmosewater (puur)</span><span className="font-semibold">pH 5,5–6,5</span></li>
              <li className="flex justify-between"><span>Osmosewater + remineralisatie</span><span className="font-semibold">pH 7,0–8,0</span></li>
              <li className="flex justify-between"><span>Nederlands kraanwater</span><span className="font-semibold">pH 7,5–8,5</span></li>
              <li className="flex justify-between"><span>Bronwater (gemiddeld)</span><span className="font-semibold">pH 7,0–7,8</span></li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De iets lagere pH van puur osmosewater is voor de meeste mensen volledig veilig om
            te drinken. De WHO hanteert geen ondergrens voor drinkwater-pH bij normale voeding.
            Wie het toch liever neutraler heeft, kiest voor een remineralisatiepatroon.
          </p>
        </section>

        {/* TDS */}
        <section id="tds">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">TDS en smaakperceptie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            TDS (<em>Total Dissolved Solids</em>) is de maatstaf voor het totaal aan opgeloste
            stoffen in water, uitgedrukt in <strong>mg/L of ppm</strong>. Een TDS-meter geeft je
            in seconden een indicatie van de waterkwaliteit en smaakprofiel.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Smaakstudies laten zien dat de meeste mensen water met een TDS van <strong>50–150 ppm</strong>{' '}
            als het prettigst ervaren. Onder de 30 ppm klinkt water als "leeg". Boven de 400 ppm
            wordt het als te zwaar of mineraalrijk ervaren.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">TDS-waarde</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Smaakbeleving</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">&lt;30 ppm</td>
                  <td className="py-2.5 px-3 text-gray-600">Leeg, vlak, weinig karakter</td>
                  <td className="py-2.5 px-3 text-gray-500">Osmosewater (puur)</td>
                </tr>
                <tr className="border-b border-gray-100 bg-green-50">
                  <td className="py-2.5 px-3 font-semibold">50–150 ppm</td>
                  <td className="py-2.5 px-3 text-gray-600 font-medium">Vol, fris, prettig — ideaal bereik</td>
                  <td className="py-2.5 px-3 text-gray-500">RO + remineralisatie</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">150–300 ppm</td>
                  <td className="py-2.5 px-3 text-gray-600">Duidelijk mineraalachtig, rond mondgevoel</td>
                  <td className="py-2.5 px-3 text-gray-500">Veel bronwaters</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">300–600 ppm</td>
                  <td className="py-2.5 px-3 text-gray-600">Zwaar, soms kalkachtig</td>
                  <td className="py-2.5 px-3 text-gray-500">Hard kraanwater NL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Osmosewater vs kraanwater vs bronwater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel vergelijkt de vier watertypen op de parameters die het meest
            bijdragen aan smaak en mondgevoel.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Watertype</th>
                  <th className="py-2.5 px-3 font-semibold text-right">TDS</th>
                  <th className="py-2.5 px-3 font-semibold text-right">pH</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Smaakprofiel</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right">{r.tds}</td>
                    <td className="py-2.5 px-3 text-right">{r.ph}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.smaak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Remineralisatie */}
        <section id="remineralisatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe remineralisatie de smaak verbetert</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een <strong>remineralisatiepatroon</strong> — ook wel mineralizer of calcitpatroon
            genoemd — plaatst je na het RO-membraan. Het voegt kleine, gecontroleerde
            hoeveelheden calcium en magnesium toe aan het gefilterde water.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                stap: '1',
                titel: 'Calcitpatroon',
                desc: 'Calciumcarbonaat-korrels lossen langzaam op in het osmosewater. Ze verhogen de pH naar 7,0–8,0 en voegen 30–80 mg/L calcium toe. Geeft een rond, mild smaakarakter.',
              },
              {
                stap: '2',
                titel: 'Magnesium-remineralisatie',
                desc: 'Sommige patronen voegen ook magnesium toe. Dat verbetert niet alleen de smaak maar maakt osmosewater geschikt voor specialty coffee — magnesium werkt als smaakversterker bij koffie-extractie.',
              },
              {
                stap: '3',
                titel: 'Resultaat',
                desc: 'Het geremineraliseerde water heeft een TDS van 50–150 ppm, een pH van 7,0–8,0 en een smaakprofiel dat door de meeste mensen wordt omschreven als "fris bronwater — maar dan uit de kraan".',
              },
            ].map(s => (
              <div key={s.stap} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.stap}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op:</strong> wissel het remineralisatiepatroon
            tijdig (doorgaans elke 12 maanden) — een uitgeput patroon voegt geen mineralen meer
            toe en laat puur osmosewater door.
          </div>
        </section>

        {/* Koffie en thee */}
        <section id="koffie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Osmosewater voor koffie en thee</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Specialty coffee baristas werken bij voorkeur met gefilterd water omdat chloor en
            hoge mineralenconcentraties de extractie verstoren en aroma&apos;s maskeren. Omgekeerde
            osmose met remineralisatie biedt een ideaal startpunt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Espresso</p>
              <p className="text-sm text-gray-600">TDS 75–125 ppm, pH 7,0–7,5. Magnesium helpt bij extractie van zoete aroma&apos;s. Vermijd TDS onder 50 ppm — dan extractie te licht.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Filter coffee / pour-over</p>
              <p className="text-sm text-gray-600">TDS 50–100 ppm werkt het best. Schoon water laat fruitige en bloemige noten beter naar voren komen.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Thee</p>
              <p className="text-sm text-gray-600">Delicate groene en witte thees profiteren van laag-TDS water. Zwarte thee en herbal zijn minder gevoelig voor de waterkwaliteit.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Babymelk &amp; bereide voeding</p>
              <p className="text-sm text-gray-600">Puur osmosewater (laag TDS, geen chloor) is ideaal voor babymelk — geen chloor, geen nitraten, geen microplastics.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose uitleg', desc: 'Hoe werkt het systeem en wat verwijdert het precies?' },
              { href: '/osmose-water/remineralisatie', title: 'Remineralisatie van osmosewater', desc: 'Welk patroon, welke mineralen en wanneer wisselen?' },
              { href: '/omgekeerde-osmose/kopen', title: 'Osmose filter kopen', desc: 'Onafhankelijk overzicht van de beste RO-systemen.' },
              { href: '/waterhardheid/testen', title: 'Waterhardheid testen', desc: 'Meet je eigen TDS en waterhardheid thuis.' },
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de smaak van osmosewater</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
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
