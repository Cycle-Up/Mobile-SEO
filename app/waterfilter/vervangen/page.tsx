import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Wanneer waterfilter vervangen? Levensduur per type | 2026',
  description:
    'Levensduur van waterfilters: sedimentfilter (6–12 mnd), koolstoffilter (6–12 mnd), RO-membraan (2–5 jaar), UV-lamp (1 jaar), waterontharder hars (10–15 jaar). Symptomen van een versleten filter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/vervangen' },
  openGraph: {
    title: 'Wanneer waterfilter vervangen? Levensduur per type',
    description:
      'Overzicht van levensduur per filtertype en symptomen van een versleten filter. Met vervangingsschema voor RO-systemen.',
    url: 'https://waterfilterplatform.nl/waterfilter/vervangen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe weet ik of mijn waterfilter aan vervanging toe is?',
    answer:
      'Zichtbare signalen zijn: verminderde waterdoorstroming, terugkerende chloor- of metaalsmaken, troebel of verkleurd water, en verhoogde TDS-waarden na het systeem. Bij een RO-systeem is een TDS-pen de meest betrouwbare methode: als de TDS na het membraan meer dan 10–15% van de inlaatwaarde bedraagt, is het membraan aan vervanging toe.',
  },
  {
    question: 'Wat gebeurt er als ik mijn waterfilter te lang gebruik?',
    answer:
      'Een te lang gebruikte koolstoffilter kan stoffen die het eerder absorbeerde weer loslaten ("dumping"). Een versleten sedimentfilter perst deeltjes door die normaal worden tegengehouden. Een verstopt RO-membraan vergroot de kans op bacteriegroei in het systeem. Regelmatige vervanging is dus geen luxe maar een veiligheidsnoodzaak.',
  },
  {
    question: 'Moet ik alle filters tegelijk vervangen?',
    answer:
      'Niet noodzakelijk — elk filtertype heeft een eigen levensduur. Maar voor gemak vervangen de meeste fabrikanten bij een jaarlijks onderhoudsmoment alle pre-filters (sediment + koolstof) tegelijk. Het RO-membraan en de UV-lamp hebben een langere levensduur en worden op hun eigen schema vervangen.',
  },
  {
    question: 'Hoe duur is filtervervanging per jaar?',
    answer:
      'Voor een standaard 4-staps RO-systeem: sedimentfilter (€5–€15) + pre-koolstof (€8–€20) + post-koolstof (€8–€20) = €20–€55 per jaar. Het RO-membraan (€30–€80) eens per 2–5 jaar. Totaal gemiddeld €30–€75 per jaar. Systemen zoals de PureAqua 4-in-1 bieden een compleet jaarset voor €60–€100.',
  },
  {
    question: 'Hoe lang gaat een omgekeerde osmose membraan mee?',
    answer:
      'Bij normaal gebruik (gezin van 4, moderaat hard water) gaat een RO-membraan 2–5 jaar mee. Hard water, hoog sedimentgehalte of slechte pre-filtratie verkorten de levensduur. Controleer elk jaar de TDS voor en na het membraan: als de verwijderingsefficiëntie daalt onder 90%, is vervanging aangewezen.',
  },
];

const levensduurTabel = [
  {
    type: 'Sedimentfilter (PP)',
    levensduur: '6–12 maanden',
    ofWel: '~2.000–4.000 liter',
    symptomen: 'Bruine verkleuring, verminderde doorstroming',
    kosten: '€ 5–15',
    prioriteit: 'Hoog',
  },
  {
    type: 'Actieve koolstoffilter (GAC/CTO)',
    levensduur: '6–12 maanden',
    ofWel: '~2.000–4.000 liter',
    symptomen: 'Chloor- of vuile smaak keert terug',
    kosten: '€ 8–20',
    prioriteit: 'Hoog',
  },
  {
    type: 'RO-membraan (TFC)',
    levensduur: '2–5 jaar',
    ofWel: '~10.000–20.000 liter',
    symptomen: 'TDS-stijging na membraan, lagere productie',
    kosten: '€ 30–80',
    prioriteit: 'Hoog',
  },
  {
    type: 'Post-koolstoffilter (inline)',
    levensduur: '12 maanden',
    ofWel: '~3.000–5.000 liter',
    symptomen: 'Vlakke smaak, lichte kunststof geur',
    kosten: '€ 8–20',
    prioriteit: 'Gemiddeld',
  },
  {
    type: 'UV-lamp',
    levensduur: '12 maanden',
    ofWel: 'Ongeacht gebruik',
    symptomen: 'Geen zichtbaar teken (UV-licht vervaagt)',
    kosten: '€ 20–60',
    prioriteit: 'Hoog',
  },
  {
    type: 'Remineralisatiepatroon',
    levensduur: '6–12 maanden',
    ofWel: '~3.000–5.000 liter',
    symptomen: 'pH daalt, TDS daalt na patroon',
    kosten: '€ 15–40',
    prioriteit: 'Gemiddeld',
  },
  {
    type: 'Waterontharder hars',
    levensduur: '10–15 jaar',
    ofWel: 'Afhankelijk van gebruik',
    symptomen: 'Water wordt harder, zoutverbruik stijgt',
    kosten: '€ 100–300',
    prioriteit: 'Laag (maar let op)',
  },
  {
    type: 'Filterkan (bijv. Brita)',
    levensduur: '4–8 weken',
    ofWel: '~150–200 liter',
    symptomen: 'Chloor smaak, kalkaanslag in kan',
    kosten: '€ 5–10 per patroon',
    prioriteit: 'Hoog',
  },
];

export default function WaterfilterVervangenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Wanneer waterfilter vervangen? Levensduur per type',
          description:
            'Levensduur per filtertype, symptomen van een versleten filter en vervangingskosten. Complete gids voor RO-systemen, UV-lampen en waterontharder hars.',
          datePublished: '2026-02-15',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterfilter/vervangen',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Waterfilter vervangen', url: 'https://waterfilterplatform.nl/waterfilter/vervangen' },
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
            <span>Vervangen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Wanneer waterfilter vervangen? Levensduur per type
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een waterfilter dat te lang wordt gebruikt, verliest niet alleen effectiviteit — het kan
            ook stoffen terugleveren die het eerder heeft vastgehouden. Op deze pagina vind je per
            filtertype de exacte levensduur, de symptomen van een versletend filter, en de
            vervangingskosten.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              RO-filter met eenvoudig onderhoud →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Omgekeerde osmose gids
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#levensduur" className="hover:underline">Levensduur per filtertype</a></li>
            <li><a href="#symptomen" className="hover:underline">Symptomen van een versleten filter</a></li>
            <li><a href="#ro-schema" className="hover:underline">Vervangingsschema RO-systeem</a></li>
            <li><a href="#tds-meten" className="hover:underline">TDS meten: wanneer is vervanging nodig?</a></li>
            <li><a href="#kosten" className="hover:underline">Wat kost filtervervanging?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Levensduur tabel */}
        <section id="levensduur">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Levensduur per filtertype</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Levensduur hangt af van waterverbruik, waterkwaliteit (hardheid, sediment) en de
            kwaliteit van het filter zelf. Onderstaande waarden zijn richtlijnen voor een gemiddeld
            gezin van 3–4 personen met matig hard water.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Filtertype</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Levensduur</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Prioriteit</th>
                </tr>
              </thead>
              <tbody>
                {levensduurTabel.map((r, i) => (
                  <tr
                    key={r.type}
                    className={i % 2 === 0 ? 'bg-gray-50' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-900">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.levensduur}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-center">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        r.prioriteit === 'Hoog' ? 'bg-red-100 text-red-800' :
                        r.prioriteit === 'Gemiddeld' ? 'bg-amber-100 text-amber-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {r.prioriteit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * UV-lamp vervangen na precies 12 maanden ongeacht het aantal bedrijfsuren — UV-intensiteit
            neemt geleidelijk af en is niet zichtbaar te controleren.
          </p>
        </section>

        {/* Symptomen */}
        <section id="symptomen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Symptomen van een versleten waterfilter</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet elk filtersysteem heeft een waarschuwingsindicator. Herken de volgende signalen:
          </p>
          <div className="space-y-3">
            {[
              {
                symptoom: 'Verminderde waterdoorstroming',
                oorzaak: 'Verstopt sedimentfilter of verstopt RO-membraan',
                actie: 'Sedimentfilter vervangen. TDS meten om membraanconditie te beoordelen.',
              },
              {
                symptoom: 'Chloor- of chemische geur/smaak',
                oorzaak: 'Uitgeputte actieve koolstoffilter',
                actie: 'Pre- en post-koolstoffilter vervangen.',
              },
              {
                symptoom: 'Metaalachtige of roestige smaak',
                oorzaak: 'Versleten koolstoffilter of corrosie in leidingwerk',
                actie: 'Koolstoffilter vervangen; indien aanhoudend, loodtest overwegen.',
              },
              {
                symptoom: 'Troebel of licht grijs water',
                oorzaak: 'Nieuw geïnstalleerd koolstoffilter (normaal) óf echt verstoord sedimentfilter',
                actie: 'Bij nieuw filter: 5–10 liter doorspoelen. Bij oud systeem: sedimentfilter vervangen.',
              },
              {
                symptoom: 'TDS na RO-membraan stijgt',
                oorzaak: 'RO-membraan verliest filterefficiëntie',
                actie: 'Meet TDS voor en na. Bij >10% van inlaatwaarde: membraan vervangen.',
              },
              {
                symptoom: 'Kalksporen in waterkoker/koffiezetter',
                oorzaak: 'RO-membraan verzwakt, of remineralisatiepatroon is uitgeput',
                actie: 'TDS meten. Membraan of remineralisatiepatroon controleren.',
              },
              {
                symptoom: 'Water smelt harder aan (zeep schuimt minder)',
                oorzaak: 'Waterontharder werkt niet meer effectief (harsverzadiging of zouttekort)',
                actie: 'Zoutniveau controleren. Bij ouder dan 10 jaar: hars controleren.',
              },
            ].map(r => (
              <div key={r.symptoom} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{r.symptoom}</p>
                <p className="text-xs text-amber-700 mb-1"><strong>Oorzaak:</strong> {r.oorzaak}</p>
                <p className="text-xs text-green-700"><strong>Actie:</strong> {r.actie}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RO-schema */}
        <section id="ro-schema">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vervangingsschema voor een RO-systeem</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor een standaard 4-staps omgekeerde osmose systeem adviseren we het volgende schema:
          </p>
          <div className="relative">
            <div className="space-y-4">
              {[
                { moment: 'Elke 6 maanden', actie: 'Sedimentfilter vervangen', prioriteit: 'Verplicht' },
                { moment: 'Elke 6–12 maanden', actie: 'Pre-koolstoffilter vervangen', prioriteit: 'Verplicht' },
                { moment: 'Jaarlijks', actie: 'Post-koolstoffilter vervangen', prioriteit: 'Aanbevolen' },
                { moment: 'Jaarlijks', actie: 'UV-lamp vervangen (indien aanwezig)', prioriteit: 'Verplicht' },
                { moment: 'Jaarlijks', actie: 'Remineralisatiepatroon vervangen (indien aanwezig)', prioriteit: 'Aanbevolen' },
                { moment: 'Elke 2–5 jaar', actie: 'RO-membraan vervangen (op basis van TDS-meting)', prioriteit: 'Bij behoefte' },
                { moment: 'Elke 10–15 jaar', actie: 'Waterontharder hars controleren / vervangen', prioriteit: 'Preventief' },
              ].map(r => (
                <div key={r.moment} className="flex items-center gap-4 border border-gray-100 rounded-xl p-3">
                  <div className="text-center shrink-0 w-28">
                    <p className="text-xs font-semibold text-[#005F8A]">{r.moment}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{r.actie}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    r.prioriteit === 'Verplicht' ? 'bg-red-100 text-red-800' :
                    r.prioriteit === 'Aanbevolen' ? 'bg-amber-100 text-amber-800' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {r.prioriteit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Tip:</strong> stel een terugkerende agenda-herinnering
            in op zes maanden na installatie. Zo vergeet je nooit de pre-filters.
          </div>
        </section>

        {/* TDS meten */}
        <section id="tds-meten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">TDS meten: wanneer is vervanging nodig?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een <strong>TDS-pen</strong> (Total Dissolved Solids meter, €5–€20) is het handigste
            hulpmiddel om de conditie van je RO-membraan te beoordelen.
          </p>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside mb-4">
            <li>Meet de TDS van het inkomende leidingwater (bijv. 350 mg/L).</li>
            <li>Meet de TDS van het gefilterde RO-water na het membraan (bijv. 12 mg/L).</li>
            <li>Bereken de verwijderingsefficiëntie: (350 − 12) / 350 × 100% = 96,6%.</li>
            <li>Bij efficiëntie onder 90% (TDS na membraan &gt;10% van inlaatwaarde): membraan vervangen.</li>
          </ol>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-2">Richtwaarden verwijderingsefficiëntie:</p>
            <div className="space-y-1">
              {[
                { efficiëntie: '>95%', status: 'Uitstekend — geen actie nodig', kleur: 'text-green-700' },
                { efficiëntie: '90–95%', status: 'Goed — jaarlijkse check voldoende', kleur: 'text-green-600' },
                { efficiëntie: '85–90%', status: 'Controleer — overweeg vervanging bij de volgende filterwissel', kleur: 'text-amber-700' },
                { efficiëntie: '<85%', status: 'Vervangen — membraan werkt niet meer adequaat', kleur: 'text-red-700' },
              ].map(r => (
                <div key={r.efficiëntie} className="flex gap-2">
                  <span className="font-mono w-16 text-gray-700 shrink-0">{r.efficiëntie}</span>
                  <span className={r.kleur}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat kost filtervervanging per jaar?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Jaarlijkse onderhoudskosten voor een standaard 4-staps RO-systeem:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Filter</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Frequentie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaarkosten</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { filter: 'Sedimentfilter', freq: '2x per jaar', kosten: '€ 5–15', jaar: '€ 10–30' },
                  { filter: 'Pre-koolstoffilter', freq: '2x per jaar', kosten: '€ 8–20', jaar: '€ 16–40' },
                  { filter: 'Post-koolstoffilter', freq: '1x per jaar', kosten: '€ 8–20', jaar: '€ 8–20' },
                  { filter: 'RO-membraan', freq: '1x per 2–5 jaar', kosten: '€ 30–80', jaar: '€ 8–40' },
                  { filter: 'UV-lamp (optioneel)', freq: '1x per jaar', kosten: '€ 20–60', jaar: '€ 20–60' },
                ].map(r => (
                  <tr key={r.filter} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800 font-medium">{r.filter}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{r.freq}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700 font-semibold">{r.jaar}</td>
                  </tr>
                ))}
                <tr className="bg-[#E0F2FE] font-semibold">
                  <td className="py-2.5 px-3 text-[#003F5C]">Totaal (zonder UV)</td>
                  <td className="py-2.5 px-3 text-right"></td>
                  <td className="py-2.5 px-3 text-right"></td>
                  <td className="py-2.5 px-3 text-right text-[#003F5C]">€ 40–130/jaar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Veel fabrikanten bieden filtersets aan die het hele jaar dekken. Let bij vergelijken op:
            zijn de filters compatibel met jouw systeem? Niet alle 10&quot;-patronen zijn inwisselbaar.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Gerelateerde pagina&apos;s */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verwante onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose gids', desc: 'Werking, voordelen, nadelen en kosten van RO-systemen.' },
              { href: '/omgekeerde-osmose/kopen', title: 'Osmose filter kopen', desc: 'Vergelijking van de beste systemen voor thuis.' },
              { href: '/waterfilter/gezondheid', title: 'Waterfilter en gezondheid', desc: 'Welke stoffen filtert welk systeem?' },
              { href: '/waterontharder/zout', title: 'Waterontharder zout kopen', desc: 'Types, verbruik en de goedkoopste zout opties.' },
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over filtervervanging</h2>
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
