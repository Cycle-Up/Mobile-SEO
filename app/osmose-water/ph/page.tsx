import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'pH van osmosewater: zuur, neutraal of basisch? | 2026',
  description:
    'Waarom heeft osmosewater een pH van 5,5–6,5? Uitleg over CO₂-absorptie, licht zure smaak, gezondheidsimpact van licht zuur water en hoe je de pH verhoogt via remineralisatie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/ph' },
  openGraph: {
    title: 'pH van osmosewater: zuur, neutraal of basisch?',
    description:
      'Technische uitleg over de pH van RO-water (5,5–6,5), CO₂-absorptie en gezondheidsimpact. Plus: hoe verhoog je de pH via remineralisatie?',
    url: 'https://waterfilterplatform.nl/osmose-water/ph',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Waarom is osmosewater zuurder dan gewoon water?',
    answer:
      'Na het filtreren via het RO-membraan bevat osmosewater nauwelijks opgeloste mineralen die als buffer dienen. Wanneer het water in contact komt met lucht, lost CO₂ op en vormt het koolzuur (H₂CO₃). Dit verlaagt de pH naar 5,5–6,5. Gewoon leidingwater bevat carbonaatbuffers (bicarbonaat) die dit effect neutraliseren en de pH rond 7,5 houden.',
  },
  {
    question: 'Is het licht zure osmosewater slecht voor je tanden?',
    answer:
      'Bij een pH van 5,5–6,5 is het zuurgetal te laag om significante tandglazuurerosie te veroorzaken bij normaal drinkgedrag. Ter vergelijking: frisdrank heeft een pH van 2,5–3,5 en fruitsap 3–4 — een veelvoud zuurder. Als je erg bezorgd bent, kun je remineraliseren om de pH naar 7–7,5 te brengen.',
  },
  {
    question: 'Helpt basisch water voor je gezondheid?',
    answer:
      'Er is geen wetenschappelijk bewijs dat basisch water (pH 8–9) gezondheidsvoordelen biedt boven neutraal water. Het lichaam reguleert de bloedzuur-base-balans (pH 7,35–7,45) zeer nauwkeurig via longen en nieren, ongeacht wat je drinkt. Dure alkaline-filters bieden geen aantoonbaar voordeel ten opzichte van normaal gefilterd water met een neutrale pH.',
  },
  {
    question: 'Hoe meet ik de pH van mijn osmosewater?',
    answer:
      'De meest nauwkeurige methode is een digitale pH-meter (€10–€50). pH-teststrips zijn goedkoper maar minder nauwkeurig bij lage mineraalgehaltes — ze zijn primair gecalibreerd voor mineraalrijker water. Meet direct na het aftappen, voor CO₂-absorptie de waarde verder beïnvloedt.',
  },
  {
    question: 'Wat is de ideale pH voor drinkwater?',
    answer:
      'De WHO en Nederlandse normen (Drinkwaterbesluit) stellen een bereik van 6,5–9,5 voor kraanwater. Voor osmosewater thuis wordt een pH van 6,5–7,5 als ideaal beschouwd: neutraal tot licht basisch. Dit bereik is gemakkelijk te halen met een remineralisatiepatroon.',
  },
  {
    question: 'Verandert de pH van osmosewater als het staat?',
    answer:
      'Ja, osmosewater absorbeert CO₂ uit de lucht en wordt geleidelijk zuurder naarmate het langer staat — met name in een open kom of glas. In een gesloten fles of drukvat verandert de pH nauwelijks. Dit is een van de redenen waarom osmosewater in een gesloten systeem wordt opgeslagen.',
  },
];

export default function OsmoseWaterPhPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'pH van osmosewater: zuur, neutraal of basisch?',
          description:
            'Technische uitleg over de pH van RO-water: CO₂-absorptie, waarom osmosewater licht zuur is, gezondheidsimpact en hoe remineralisatie de pH corrigeert.',
          datePublished: '2026-02-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/osmose-water/ph',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmosewater', url: 'https://waterfilterplatform.nl/osmose-water' },
          { name: 'pH osmosewater', url: 'https://waterfilterplatform.nl/osmose-water/ph' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:text-[#005F8A]">Osmosewater</Link>
            <span className="mx-2">/</span>
            <span>pH</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            pH van osmosewater: zuur, neutraal of basisch?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Osmosewater heeft een lagere pH dan gewoon kraanwater — typisch <strong>5,5 tot 6,5</strong>.
            Dat klinkt alarmerend, maar de oorzaak is eenvoudig en de gezondheidsimpact beperkt.
            We leggen uit waarom RO-water licht zuur is, wat dat betekent voor je gezondheid, en hoe
            je de pH eenvoudig kunt verhogen via remineralisatie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/osmose-water/remineralisatie"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Remineralisatie uitleg →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmose filter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-is-ph" className="hover:underline">Wat is pH?</a></li>
            <li><a href="#co2" className="hover:underline">Waarom absorbeert RO-water CO₂?</a></li>
            <li><a href="#ph-waarden" className="hover:underline">pH-vergelijking: water soorten</a></li>
            <li><a href="#gezondheid" className="hover:underline">Gezondheidsimpact licht zuur water</a></li>
            <li><a href="#ph-verhogen" className="hover:underline">pH verhogen via remineralisatie</a></li>
            <li><a href="#meten" className="hover:underline">pH meten thuis</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat is pH */}
        <section id="wat-is-ph">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is pH?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De pH-schaal loopt van 0 (uiterst zuur) tot 14 (uiterst basisch). Neutraal water heeft
            een pH van precies 7,0 bij 25 °C. De schaal is logaritmisch: pH 6 is <em>tien keer</em>{' '}
            zuurder dan pH 7, en pH 5 is honderd keer zuurder.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Vloeistof</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">pH</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Karakter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { vloeistof: 'Maagzuur', ph: '1,5–3,5', karakter: 'Sterk zuur' },
                  { vloeistof: 'Frisdrank / cola', ph: '2,5–3,5', karakter: 'Zuur' },
                  { vloeistof: 'Sinaasappelsap', ph: '3,5–4,0', karakter: 'Zuur' },
                  { vloeistof: 'Koffie', ph: '4,5–5,5', karakter: 'Licht zuur' },
                  { vloeistof: 'Osmosewater', ph: '5,5–6,5', karakter: 'Licht zuur', highlight: true },
                  { vloeistof: 'Regenwater', ph: '5,6–6,5', karakter: 'Licht zuur' },
                  { vloeistof: 'Neutraal water', ph: '7,0', karakter: 'Neutraal' },
                  { vloeistof: 'Nederlands kraanwater', ph: '7,0–8,0', karakter: 'Licht basisch' },
                  { vloeistof: 'Alkaline water', ph: '8,0–9,5', karakter: 'Basisch' },
                ].map(r => (
                  <tr
                    key={r.vloeistof}
                    className={(r as { highlight?: boolean }).highlight ? 'bg-[#E0F2FE] font-semibold' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-gray-800">{r.vloeistof}</td>
                    <td className="py-2.5 px-3 text-right font-mono text-gray-700">{r.ph}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.karakter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CO2 */}
        <section id="co2">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom absorbeert osmosewater CO₂?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Gewoon leidingwater bevat <strong>bicarbonaat (HCO₃⁻)</strong> — een ionenbuffer die
            schommelingen in pH opvangt. Dit bicarbonaat is afkomstig van de kalk in de bodem en
            houdt de pH stabiel rond 7,0–8,0.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een RO-membraan verwijdert nagenoeg alle opgeloste ionen, inclusief bicarbonaat. Het
            water is nu een bijna pure H₂O-oplossing zonder enige buffercapaciteit. Wanneer dit
            water in contact komt met lucht, lost <strong>CO₂</strong> op en reageert met water:
          </p>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm text-gray-700 text-center">
            CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De vrijgekomen H⁺-ionen verlagen de pH. Zonder bicarbonaat om die ionen te neutraliseren
            daalt de pH snel naar 5,5–6,5. Dit proces heet <em>CO₂-absorptie</em> en is identiek aan
            waarom regenwater (ook bijna puur water) een vergelijkbare pH heeft.
          </p>
        </section>

        {/* Gezondheid */}
        <section id="gezondheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gezondheidsimpact van licht zuur water</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De vraag die veel mensen stellen: is het slecht om dagelijks licht zuur water (pH 5,5–6,5)
            te drinken? Het wetenschappelijke antwoord is geruststellend.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Bloedzuurgraad wordt niet beïnvloed</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Het menselijk lichaam reguleert de bloedpH nauwkeurig op 7,35–7,45 via longen
                (CO₂-uitademing), nieren (zuur-/baseregulatie) en buffersystemen. Drinkwater met een
                licht afwijkende pH heeft daar geen meetbare invloed op.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Minimaal risico voor tandglazuur</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Tandglazuurerosie begint bij langdurige blootstelling aan pH onder 5,5. Met osmosewater
                op pH 5,5–6,5 is dit risico bij normaal drinkgedrag verwaarloosbaar. Frisdrank (pH 2,5)
                is een veelvoud schadelijker.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">WHO en wettelijke normen</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                De WHO stelt voor drinkwater een pH-bereik van 6,5–9,5 voor — primair om corrosie van
                leidingen te voorkomen, niet uit gezondheidsoverwegingen. Osmosewater op pH 5,5 zit net
                buiten dit bereik; voor een under-sink systeem met kleine leidingstukjes is dit geen
                praktisch probleem.
              </p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
              <p className="font-semibold text-green-900 mb-1">Conclusie</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Osmosewater met pH 5,5–6,5 is veilig om te drinken voor gezonde volwassenen en kinderen.
                Wie zekerheid wil of een mildere smaak prefereert, kan eenvoudig remineraliseren naar
                pH 7,0–7,5.
              </p>
            </div>
          </div>
        </section>

        {/* pH verhogen */}
        <section id="ph-verhogen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">pH verhogen via remineralisatie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meest elegante manier om de pH van osmosewater te verhogen is het toevoegen van
            mineralen via een <strong>remineralisatiepatroon</strong>. Dit patroon bevat calciet
            (calciumcarbonaat) of een mengsel van calciet en magnesiumoxide (dolomiet).
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Wanneer zuur osmosewater door het patroon stroomt, lost een kleine hoeveelheid calciet op:
          </p>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm text-gray-700 text-center mb-4">
            CaCO₃ + H₂CO₃ → Ca²⁺ + 2 HCO₃⁻
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De vrijgekomen bicarbonaat buffert de pH naar 7,0–7,5. Tegelijk stijgt het TDS (totaal
            opgeloste stoffen) van bijna 0 naar 30–100 mg/L — een gezonder niveau voor de smaakontwikkeling.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Meer weten?</strong> Lees onze complete gids over{' '}
            <Link href="/osmose-water/remineralisatie" className="text-[#005F8A] underline hover:no-underline">
              osmosewater remineraliseren
            </Link>
            {' '}— inclusief vergelijking van calciet, dolomiet en maifaniet patronen.
          </div>
        </section>

        {/* pH meten */}
        <section id="meten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">pH van osmosewater meten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Wil je de pH van je eigen osmosewater controleren? Er zijn twee opties:
          </p>
          <div className="space-y-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Digitale pH-meter (aanbevolen)</p>
              <p className="text-sm text-gray-700">
                Nauwkeurig tot 0,01 pH. Kost €10–€50. Kalibreer altijd met bufferoplossing voor
                gebruik. Directe meting na aftappen geeft het meest representatieve resultaat.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">pH-teststrips</p>
              <p className="text-sm text-gray-700">
                Goedkoop (€5–€15 per rol), maar minder nauwkeurig bij laag mineralengehalte.
                Geeft indicatieve waarden. Geschikt voor een eerste check, niet voor precieze meting.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4 text-sm">
            Meet bij voorkeur vlak na het aftappen. Bij langer bewaren in open glas daalt de pH
            geleidelijk door CO₂-absorptie.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over pH osmosewater</h2>
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

        {/* Gerelateerde pagina&apos;s */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verwante onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/osmose-water/remineralisatie', title: 'Remineralisatie osmosewater', desc: 'Hoe en waarom je mineralen teruggeeft aan RO-water.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose uitleg', desc: 'De complete gids over RO: werking, voordelen en kosten.' },
              { href: '/omgekeerde-osmose/kopen', title: 'Osmose filter kopen', desc: 'Vergelijking van de beste systemen voor thuis.' },
              { href: '/waterfilter/gezondheid', title: 'Waterfilter en gezondheid', desc: 'Welke stoffen filtert welk systeem? Overzichtstabel.' },
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
      </div>
    </>
  );
}
