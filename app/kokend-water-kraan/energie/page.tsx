import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend water kraan energieverbruik: jaarkosten berekenen | 2026',
  description:
    'Hoeveel stroom verbruikt een kokend water kraan? Standby 10–80W, boilervolume, dagelijks gebruik. Jaarkosten bij €0,28–0,32/kWh vergeleken met waterkoker.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/energie' },
  openGraph: {
    title: 'Kokend water kraan energieverbruik: jaarkosten berekenen',
    description:
      'Bereken de jaarlijkse energiekosten van een kokend water kraan en vergelijk ze met een traditionele waterkoker.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan/energie',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoeveel stroom verbruikt een kokend water kraan in standby?',
    answer:
      'Het standby-verbruik varieert sterk per merk en model: van circa 10W (energie-efficiënte modellen met kleine boiler) tot 80W (grote boilers bij hogere temperaturen). Een gemiddeld systeem met een boiler van 2,4L zit rond de 25–40W. Jaarlijks standby-verbruik: 220–700 kWh.',
  },
  {
    question: 'Verbruikt een kokend water kraan meer stroom dan een waterkoker?',
    answer:
      'Bij intensief gebruik (4+ kopjes per dag) is een kokend water kraan doorgaans energiezuiniger dan een waterkoker. Een waterkoker verbruikt 1.500–3.000W per kookbeurt en kookt vaak te veel water. Een kokend water kraan houdt een kleine boiler continu warm (laag maar constant verbruik) en levert alleen precies de hoeveelheid die nodig is.',
  },
  {
    question: 'Hoeveel kost een kokend water kraan per jaar aan stroom?',
    answer:
      'De jaarlijkse energiekosten liggen bij de meeste modellen tussen €55 en €150, afhankelijk van boilervolume, ingestelde temperatuur, gebruiksfrequentie en de stroomprijs (€0,28–€0,32/kWh in 2026). Met energiebesparende functies (nachtmodus, weekprogramma) kun je dit terugbrengen tot €40–80 per jaar.',
  },
  {
    question: 'Wat is het effect van de boilertemperatuur op het verbruik?',
    answer:
      'Hoe hoger de ingestelde temperatuur, hoe meer energie er nodig is om het water op temperatuur te houden. Een boiler op 100°C verbruikt 20–30% meer energie dan dezelfde boiler op 90°C. Voor thee en koffie is 95–98°C voldoende; echt kokend water is alleen nodig voor pasta en het afkoken van flessen.',
  },
  {
    question: 'Helpt een nachtmodus bij besparen?',
    answer:
      'Ja, aanzienlijk. Een nachtmodus of weekprogramma zet de boiler terug naar standby of een lagere temperatuur gedurende 8–10 uur per dag. Dat kan het jaarverbruik met 20–35% reduceren. Veel moderne modellen (bijv. Quooker COMBI, Franke) hebben deze functie standaard ingebouwd.',
  },
  {
    question: 'Hoe vergelijk ik het energieverbruik van verschillende merken?',
    answer:
      'Kijk in de productspecificaties naar het standby-vermogen (Watt) en het boilervolume (liter). Hoe kleiner het boilervolume bij gelijk gebruik, hoe energie-efficiënter. Bereken het jaarverbruik met de formule: (standby vermogen in W × 8.760 uur) / 1.000 = kWh per jaar, maal je stroomtarief.',
  },
];

const modellen = [
  {
    type: 'Compacte boiler (1–2L)',
    standby: '10–20W',
    jaarKwh: '88–175 kWh',
    jaarKosten: '€ 25–56',
    geschiktVoor: '1–2 personen, licht gebruik',
    highlight: false,
  },
  {
    type: 'Standaard boiler (2,4–3L)',
    standby: '25–40W',
    jaarKwh: '219–350 kWh',
    jaarKosten: '€ 62–112',
    geschiktVoor: '2–4 personen, dagelijks gebruik',
    highlight: true,
  },
  {
    type: 'Grote boiler (4–7L)',
    standby: '50–80W',
    jaarKwh: '438–701 kWh',
    jaarKosten: '€ 125–224',
    geschiktVoor: 'Intensief gebruik, gezin of kantoor',
    highlight: false,
  },
  {
    type: 'Met nachtmodus (2,4L)',
    standby: '25–40W effectief',
    jaarKwh: '145–230 kWh',
    jaarKosten: '€ 41–74',
    geschiktVoor: 'Slim gebruik — besparing 30–35%',
    highlight: false,
  },
];

const vergelijking = [
  {
    apparaat: 'Waterkoker (1 kook/dag)',
    vermogen: '2.400W / kookbeurt',
    jaarKwh: '~45 kWh',
    jaarKosten: '~€ 13',
    opmerkingen: 'Lage kosten bij klein gebruik',
  },
  {
    apparaat: 'Waterkoker (4 kook/dag)',
    vermogen: '2.400W / kookbeurt',
    jaarKwh: '~175 kWh',
    jaarKosten: '~€ 50',
    opmerkingen: 'Vergelijkbaar met kokend water kraan',
  },
  {
    apparaat: 'Kokend water kraan (standaard)',
    vermogen: '25–40W continu',
    jaarKwh: '220–350 kWh',
    jaarKosten: '€ 62–112',
    opmerkingen: 'Constant beschikbaar, geen wachten',
  },
  {
    apparaat: 'Kokend water kraan (met nachtmodus)',
    vermogen: 'Effectief 17–28W',
    jaarKwh: '150–245 kWh',
    jaarKosten: '€ 42–78',
    opmerkingen: 'Beste balans kosten/gemak',
  },
];

export default function KokendWaterKraanEnergiePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kokend water kraan energieverbruik: jaarkosten berekenen',
          description:
            'Uitleg over standby-verbruik, boilervolume en dagelijks gebruik van kokend water kranen, inclusief vergelijking met de traditionele waterkoker.',
          datePublished: '2026-02-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/kokend-water-kraan/energie',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Energieverbruik', url: 'https://waterfilterplatform.nl/kokend-water-kraan/energie' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Energieverbruik</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan energieverbruik: jaarkosten berekenen
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een kokend water kraan houdt continu heet water beschikbaar via een geïsoleerde
            boiler. Dat kost stroom — ook als je er niet actief gebruik van maakt. Hoe hoog zijn
            de jaarlijkse energiekosten echt, en hoe vergelijkt dat met een gewone waterkoker?
            We rekenen het voor je uit.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#berekening"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk berekening →
            </a>
            <a
              href="#vergelijking"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              vs waterkoker
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#standby" className="hover:underline">Standby-verbruik uitgelegd</a></li>
            <li><a href="#berekening" className="hover:underline">Jaarkosten berekenen</a></li>
            <li><a href="#modellen" className="hover:underline">Verbruik per boilertype</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijking met waterkoker</a></li>
            <li><a href="#besparen" className="hover:underline">Tips om energie te besparen</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Standby */}
        <section id="standby">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Standby-verbruik: hoe werkt het?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een kokend water kraan werkt met een geïsoleerde boiler die het water continu op
            temperatuur houdt. De verwarmingselement schakelt periodiek in om warmteverlies te
            compenseren. Dit heet het <strong>standby-verbruik</strong> — het vermogen dat nodig
            is om de boiler warm te houden, ook als je er geen water uit tapt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700 mb-4">
            <p className="font-semibold text-[#003F5C] mb-2">Factoren die het standby-verbruik bepalen:</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li><strong>Boilervolume:</strong> groter reservoir = meer energie om warm te houden</li>
              <li><strong>Isolatielaag:</strong> dikker geïsoleerde boilers verliezen minder warmte</li>
              <li><strong>Ingestelde temperatuur:</strong> 100°C vergt 20–30% meer dan 90°C</li>
              <li><strong>Omgevingstemperatuur:</strong> koudere keuken = meer warmteverlies</li>
              <li><strong>Gebruiksfrequentie:</strong> meer aftappen = meer opwarmcycli</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Typisch bereik: <strong>10W</strong> voor de meest energie-efficiënte kleine modellen
            tot <strong>80W</strong> voor grote boilers bij hoge temperaturen. Het gemiddelde
            huishoudmodel zit rond de 25–40W.
          </p>
        </section>

        {/* Berekening */}
        <section id="berekening">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Jaarkosten berekenen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Met de volgende formule bereken je eenvoudig de jaarlijkse energiekosten van jouw
            kokend water kraan:
          </p>
          <div className="bg-gray-900 text-green-300 rounded-2xl p-5 font-mono text-sm mb-4">
            <p className="text-gray-400 mb-1">// Jaarkosten berekening</p>
            <p>Standby vermogen (W) × 8.760 uur / 1.000 = jaarverbruik in kWh</p>
            <p className="mt-2">Jaarverbruik (kWh) × stroomtarief (€/kWh) = jaarkosten</p>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Rekenvoorbeeld: standaard model (30W, 24/7)</p>
              <p className="text-sm text-gray-600">30W × 8.760 uur / 1.000 = <strong>263 kWh per jaar</strong></p>
              <p className="text-sm text-gray-600">263 kWh × €0,30/kWh = <strong>€ 79 per jaar</strong></p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Met nachtmodus (30W dag, 5W nacht — 16/8 verhouding)</p>
              <p className="text-sm text-gray-600">(30W × 5.840 uur + 5W × 2.920 uur) / 1.000 = <strong>190 kWh per jaar</strong></p>
              <p className="text-sm text-gray-600">190 kWh × €0,30/kWh = <strong>€ 57 per jaar</strong></p>
            </div>
          </div>
          <div className="mt-4 bg-[#E0F2FE] rounded-2xl p-4 text-sm">
            <p className="font-semibold text-[#003F5C] mb-1">Stroomtarieven 2026 (Nederland):</p>
            <p className="text-gray-700">Variabele contracten: €0,28–€0,32 per kWh incl. BTW. Vast contract: afhankelijk van inschrijfdatum. Check je energierekening voor je actuele tarief.</p>
          </div>
        </section>

        {/* Modellen */}
        <section id="modellen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verbruik per boilertype</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Boilertype</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Standby</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Jaar kWh</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Jaarkosten</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Geschikt voor</th>
                </tr>
              </thead>
              <tbody>
                {modellen.map(m => (
                  <tr
                    key={m.type}
                    className={m.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{m.type}</td>
                    <td className="py-2.5 px-3 text-right">{m.standby}</td>
                    <td className="py-2.5 px-3 text-right">{m.jaarKwh}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{m.jaarKosten}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{m.geschiktVoor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Berekend bij €0,32/kWh. Kosten zijn inclusief standby, exclusief incidenteel warm opkoken.
          </p>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijking met de traditionele waterkoker</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Is een kokend water kraan écht duurder dan een waterkoker? Dat hangt volledig af van
            hoe vaak je per dag water kookt. Bij intensief gebruik kantelt de balans al snel.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Apparaat</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Vermogen</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaar kWh</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaarkosten</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Noot</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map((r, i) => (
                  <tr key={r.apparaat} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium">{r.apparaat}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{r.vermogen}</td>
                    <td className="py-2.5 px-3 text-right">{r.jaarKwh}</td>
                    <td className="py-2.5 px-3 text-right font-semibold">{r.jaarKosten}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-500">{r.opmerkingen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 text-sm leading-relaxed">
            <strong>Conclusie:</strong> een waterkoker is goedkoper bij minder dan 2 kookbeurten
            per dag. Boven de 4–5 kookbeurten per dag is een kokend water kraan met nachtmodus
            vergelijkbaar of zelfs goedkoper — met als bonus: direct kokend water zonder wachten.
          </p>
        </section>

        {/* Besparen */}
        <section id="besparen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Tips om energie te besparen</h2>
          <div className="space-y-4">
            {[
              {
                titel: 'Activeer de nachtmodus of weekprogramma',
                tekst: 'De meeste moderne kokend water kranen hebben een nachtmodus die de boiler 8–10 uur per dag terugzet. Besparing: 20–35% op jaarbasis.',
              },
              {
                titel: 'Verlaag de boilertemperatuur naar 95°C',
                tekst: 'Voor thee, koffie en de meeste toepassingen is 95–98°C meer dan voldoende. Verlagen van 100°C naar 95°C bespaart circa 5–10% energie.',
              },
              {
                titel: 'Kies een model met een kleine boiler',
                tekst: 'Als je niet constant kokend water nodig hebt, is een boiler van 1–2L energie-efficiënter dan een grote tank. Ruil niet over naar een grotere boiler dan nodig.',
              },
              {
                titel: 'Isoleer de aansluitingen goed',
                tekst: 'Warmteverlies via de verbindingsslangen wordt gereduceerd door goede thermische isolatie. Controleer of de slangen goed geïsoleerd zijn bij installatie.',
              },
              {
                titel: 'Schakel uit bij langdurige afwezigheid',
                tekst: 'Ga je meer dan 3 dagen weg? Schakel het systeem uit. Het opwarmen bij terugkomst kost slechts 10–20 minuten en is voordeliger dan dagenlang op stand-by.',
              },
            ].map(tip => (
              <div key={tip.titel} className="flex gap-3 items-start">
                <span className="text-green-600 font-bold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">{tip.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{tip.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="kokend" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/kokend-water-kraan', title: 'Kokend water kraan overzicht', desc: 'Alles over typen, merken en installatie van kokend water kranen.' },
              { href: '/kokend-water-kraan/met-filter', title: 'Kokend water kraan met filter', desc: 'Geïntegreerde RO-filtratie en kokend water uit één kraan.' },
              { href: '/omgekeerde-osmose/kopen', title: 'Osmose filter kopen', desc: 'Onafhankelijk overzicht van de beste RO-systemen voor thuis.' },
              { href: '/osmose-filter/prijs', title: 'Osmosefilter prijs 2026', desc: 'Aanschaf- en jaarkosten van alle prijsklassen.' },
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over energieverbruik</h2>
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
