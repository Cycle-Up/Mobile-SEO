import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosewater remineraliseren: hoe en waarom? | 2026',
  description:
    'Waarom bevat puur osmosewater geen mineralen en hoe remineraliseer je het? Vergelijking van calciet, dolomiet en maifaniet patronen. Doelwaarde TDS 50–150 mg/L. DIY vs inline patroon.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/remineralisatie' },
  openGraph: {
    title: 'Osmosewater remineraliseren: hoe en waarom?',
    description:
      'Puur RO-water mist mineralen. Leer hoe remineralisatiepatronen calcium en magnesium terugvoegen voor betere smaak en gezondheid.',
    url: 'https://waterfilterplatform.nl/osmose-water/remineralisatie',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is remineralisatie van osmosewater noodzakelijk?',
    answer:
      'Nee, puur osmosewater is veilig om te drinken. Remineralisatie is optioneel en verbetert voornamelijk smaak, pH-stabiliteit en TDS-waarde. Voor mensen die sterk afhankelijk zijn van drinkwater als mineraalenbron (bijv. bij eenzijdig dieet) kan het nuttig zijn, maar voor de meeste mensen compenseert gevarieerde voeding ruimschoots.',
  },
  {
    question: 'Wat is een goede TDS-waarde voor remineraliseerd osmosewater?',
    answer:
      'Een doelwaarde van 50–150 mg/L TDS wordt algemeen aanbevolen. Onder 50 mg/L smaakt water flat en waterig. Boven 300 mg/L begint je de minerale smaak te proeven. Leidingwater in Nederland heeft typisch 200–600 mg/L TDS, afhankelijk van regio.',
  },
  {
    question: 'Hoe lang gaat een remineralisatiepatroon mee?',
    answer:
      'Afhankelijk van het waterverbruik en het type medium. Een calcietpatroon voor een 4-persoonshuishouden gaat gemiddeld 6–12 maanden mee. Maifaniet-patronen zijn compacter en hebben een kortere levensduur van 6–9 maanden. Vervang altijd gelijktijdig met de reguliere filterwissel.',
  },
  {
    question: 'Wat is het verschil tussen calciet en dolomiet in een remineralisatiepatroon?',
    answer:
      'Calciet (CaCO₃) voegt alleen calcium toe. Dolomiet (CaMg(CO₃)₂) voegt zowel calcium als magnesium toe in een verhouding van circa 2:1 calcium tot magnesium — vergelijkbaar met de verhouding in mineraalwater. Dolomiet patronen worden beschouwd als de meest gebalanceerde optie voor remineralisatie.',
  },
  {
    question: 'Kan ik osmosewater remineraliseren met baking soda (natriumbicarbonaat)?',
    answer:
      'Technisch kan het: een kleine hoeveelheid baking soda verhoogt de pH en voegt bicarbonaat toe. Maar het voegt natrium toe in plaats van calcium en magnesium, wat niet ideaal is als mineraalenbron. Het is een tijdelijke noodoplossing, geen vervanging voor een dedicated remineralisatiepatroon.',
  },
];

const patronenTabel = [
  {
    type: 'Calciet (CaCO₃)',
    mineralen: 'Calcium',
    tdsToevoeging: '+30–80 mg/L',
    phEffect: 'pH naar 7,0–7,5',
    levensduur: '6–12 maanden',
    prijs: '€ 15–35',
    geschiktVoor: 'Drinkwater, koffie',
  },
  {
    type: 'Dolomiet (CaMg(CO₃)₂)',
    mineralen: 'Calcium + Magnesium',
    tdsToevoeging: '+40–100 mg/L',
    phEffect: 'pH naar 7,0–7,5',
    levensduur: '6–12 maanden',
    prijs: '€ 20–40',
    geschiktVoor: 'Drinkwater (aanbevolen)',
  },
  {
    type: 'Maifaniet (mineraalsteen)',
    mineralen: 'Ca, Mg, K, Si en spoorelementen',
    tdsToevoeging: '+20–60 mg/L',
    phEffect: 'pH naar 7,0–8,0',
    levensduur: '6–9 maanden',
    prijs: '€ 15–30',
    geschiktVoor: 'Drinkwater, thee',
  },
  {
    type: 'Elektrolyse-cell (actief)',
    mineralen: 'Variabel (instelbaar)',
    tdsToevoeging: 'Instelbaar',
    phEffect: 'Instelbaar 6,5–9,5',
    levensduur: '2–5 jaar',
    prijs: '€ 200–1.500',
    geschiktVoor: 'Premium systemen',
  },
];

export default function OsmoseWaterRemineralisatiePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmosewater remineraliseren: hoe en waarom?',
          description:
            'Uitleg over remineralisatie van RO-water: waarom puur osmosewater mineralen mist, vergelijking van calciet/dolomiet/maifaniet en doelwaarde TDS 50–150 mg/L.',
          datePublished: '2026-02-10',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/osmose-water/remineralisatie',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmosewater', url: 'https://waterfilterplatform.nl/osmose-water' },
          { name: 'Remineralisatie', url: 'https://waterfilterplatform.nl/osmose-water/remineralisatie' },
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
            <span>Remineralisatie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater remineraliseren: hoe en waarom?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Omgekeerde osmose filtert nagenoeg alles uit het water — inclusief de mineralen calcium en
            magnesium. Puur RO-water heeft een lage pH en lage TDS-waarde. Via <strong>remineralisatie</strong>
            {' '}voeg je gerichte mineralen terug toe voor een betere smaak, hogere pH en een gezonder
            mineraalprofiel. We leggen uit hoe, welke opties er zijn en wat de doelwaarden zijn.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              RO-filter met remineralisatie →
            </Link>
            <Link
              href="/osmose-water/ph"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              pH van osmosewater
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#waarom" className="hover:underline">Waarom mist RO-water mineralen?</a></li>
            <li><a href="#tds" className="hover:underline">Doelwaarde TDS 50–150 mg/L</a></li>
            <li><a href="#patronen" className="hover:underline">Remineralisatiepatronen vergelijken</a></li>
            <li><a href="#diy" className="hover:underline">DIY vs. inline patroon</a></li>
            <li><a href="#installatie" className="hover:underline">Installatie in bestaand RO-systeem</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Waarom mist RO-water mineralen */}
        <section id="waarom">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom mist puur RO-water mineralen?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het RO-membraan heeft poriën van circa 0,0001 micron — kleiner dan de meeste ionen.
            Dit betekent dat calcium (Ca²⁺), magnesium (Mg²⁺), kalium (K⁺) en andere minerale ionen
            worden tegengehouden samen met de ongewenste stoffen. Na het membraan is het water
            praktisch puur H₂O met een TDS van 1–10 mg/L.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Gevolgen van puur osmosewater zonder remineralisatie:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside mb-4">
            <li>Lage pH (5,5–6,5) door CO₂-absorptie zonder buffering</li>
            <li>Vlak, &ldquo;leeg&rdquo; smaakprofiel — water smaakt zoals gedestilleerd water</li>
            <li>Geen bijdrage aan dagelijkse calcium- en magnesiumbehoeften via water</li>
            <li>Licht agressief voor metalen componenten bij lange contacttijd</li>
          </ul>
          <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Perspectief:</strong> de dagelijkse mineralenbehoefte
            wordt voor 95%+ via voeding gedekt. Remineralisatie is voornamelijk een kwestie van smaak
            en pH-correctie, niet een medische noodzaak bij een gevarieerd dieet.
          </div>
        </section>

        {/* TDS doelwaarden */}
        <section id="tds">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Doelwaarde TDS: 50–150 mg/L</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            TDS staat voor <em>Total Dissolved Solids</em> — de totale hoeveelheid opgeloste stoffen
            in mg per liter. Na een RO-membraan is TDS typisch 1–10 mg/L. Na remineralisatie streef
            je naar 50–150 mg/L:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">TDS-bereik</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Beschrijving</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Smaak</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tds: '0–10 mg/L', desc: 'Puur osmosewater', smaak: 'Vlak, leeg' },
                  { tds: '50–150 mg/L', desc: 'Ideaal na remineralisatie', smaak: 'Fris, neutraal', highlight: true },
                  { tds: '150–300 mg/L', desc: 'Licht mineraalwater', smaak: 'Mild mineraal' },
                  { tds: '300–600 mg/L', desc: 'Normaal NL kraanwater', smaak: 'Merkbaar mineraal' },
                  { tds: '>600 mg/L', desc: 'Hard water / bronwater', smaak: 'Zwaar mineraal' },
                ].map(r => (
                  <tr
                    key={r.tds}
                    className={(r as { highlight?: boolean }).highlight ? 'bg-[#E0F2FE] font-semibold' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-mono text-gray-800">{r.tds}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.desc}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.smaak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            TDS meten kan met een goedkope TDS-pen (€5–€20). Meet zowel voor als na het
            remineralisatiepatroon om de effectiviteit te controleren.
          </p>
        </section>

        {/* Patronen vergelijken */}
        <section id="patronen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Remineralisatiepatronen vergelijken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er zijn vier hoofdtypen remineralisatieoplossingen voor thuisgebruik. We vergelijken ze
            op mineraalprofiel, TDS-bijdrage, pH-effect, levensduur en prijs.
          </p>
          <div className="space-y-4">
            {patronenTabel.map((p, i) => (
              <div
                key={p.type}
                className={`border rounded-2xl p-5 ${i === 1 ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{p.type}</p>
                  {i === 1 && (
                    <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">
                      Aanbevolen
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-600">
                  <div><span className="font-medium text-gray-800">Mineralen:</span> {p.mineralen}</div>
                  <div><span className="font-medium text-gray-800">TDS:</span> {p.tdsToevoeging}</div>
                  <div><span className="font-medium text-gray-800">pH:</span> {p.phEffect}</div>
                  <div><span className="font-medium text-gray-800">Levensduur:</span> {p.levensduur}</div>
                  <div><span className="font-medium text-gray-800">Prijs:</span> {p.prijs}</div>
                  <div><span className="font-medium text-gray-800">Geschikt voor:</span> {p.geschiktVoor}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIY vs inline */}
        <section id="diy">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">DIY vs. inline remineralisatiepatroon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-100 rounded-2xl p-5">
              <p className="font-semibold text-[#003F5C] mb-3">Inline patroon (aanbevolen)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Vaste installatie na het RO-membraan</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Automatische, gelijkmatige dosering</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Compatibel met de meeste RO-systemen</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Eenvoudig te vervangen</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> Hogere aanschafprijs dan DIY</li>
              </ul>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <p className="font-semibold text-[#003F5C] mb-3">DIY (mineralen toevoegen)</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Laagste aanschafkosten</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Volledig controleerbare dosering</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> Handmatige toevoeging per kan/glas</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> Risico op onjuiste dosering</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> Minder praktisch in dagelijks gebruik</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-4 text-sm leading-relaxed">
            Voor dagelijks drinkwater is een <strong>inline patroon</strong> de meest praktische keuze.
            DIY-remineralisatie met elektrolyt-druppels of calciet-tabletten kan zinvol zijn voor
            incidenteel gebruik of als tijdelijke oplossing.
          </p>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie in bestaand RO-systeem</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een remineralisatiepatroon wordt geplaatst als <strong>laatste filterstap</strong>,
            na het RO-membraan en na de post-koolstoffilter. De installatie vergt geen gereedschap:
          </p>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>Sluit de watertoevoer af.</li>
            <li>Koppel de uitvoerslang van de post-koolstoffilter los.</li>
            <li>Verbind de ingang van het remineralisatiepatroon aan de post-koolstoffilter.</li>
            <li>Verbind de uitgang van het patroon aan de kraan of het drukvat.</li>
            <li>Open de toevoer, controleer op lekkages en laat 2–3 liter doorstromen voor eerste gebruik.</li>
          </ol>
          <p className="text-gray-700 mt-4 text-sm text-gray-500">
            Let op de stroomrichting (ingang/uitgang) op het patroon. Omgekeerde installatie vermindert
            de effectiviteit sterk.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over remineralisatie</h2>
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
