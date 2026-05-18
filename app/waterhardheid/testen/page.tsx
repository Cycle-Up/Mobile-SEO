import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterhardheid testen: methoden en nauwkeurigheid | 2026',
  description:
    'Hoe test je waterhardheid thuis? Vergelijking van teststrips, TDS-meter, waterbedrijf-data, RIVM-database en laboratoriumanalyse op kosten en nauwkeurigheid.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterhardheid/testen' },
  openGraph: {
    title: 'Waterhardheid testen: methoden en nauwkeurigheid',
    description:
      'Teststrips, TDS-meter of officiële waterbedrijf-data? Vergelijking van alle methoden om waterhardheid te meten.',
    url: 'https://waterfilterplatform.nl/waterhardheid/testen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe nauwkeurig zijn teststrips voor waterhardheid?',
    answer:
      'Teststrips geven een indicatieve meting met een nauwkeurigheid van ±10–20%. Ze werken goed om te bepalen of water zacht, middelhard of hard is, maar zijn te grof voor precieze metingen. Voor een globaal beeld zijn ze prima; voor technische toepassingen kies je beter voor een TDS-meter of officiële data.',
  },
  {
    question: 'Wat meet een TDS-meter precies?',
    answer:
      'Een TDS-meter meet de elektrische geleidbaarheid van water en rekent dat om naar een TDS-waarde (Total Dissolved Solids) in mg/L of ppm. TDS correleert met waterhardheid maar is niet hetzelfde: ook andere opgeloste stoffen (natrium, kalium, sulfaten) dragen bij aan TDS. Voor een nauwkeurige hardheidswaarde in °dH is officiële data of een laboanalyse nodig.',
  },
  {
    question: 'Kan ik de waterhardheid opzoeken bij mijn waterbedrijf?',
    answer:
      'Ja, alle Nederlandse waterbedrijven publiceren de waterkwaliteitsgegevens per postcode of gebied op hun website. Dit zijn de meest betrouwbare en gratis beschikbare gegevens voor de meeste huishoudens. Je vindt onder andere de hardheid in mmol/L en °dH.',
  },
  {
    question: 'Wat is de RIVM-database voor waterhardheid?',
    answer:
      'Het RIVM (Rijksinstituut voor Volksgezondheid en Milieu) beheert een openbare database met drinkwaterkwaliteitsgegevens per leveringsgebied, inclusief hardheidswaarden. De data wordt jaarlijks bijgewerkt op basis van metingen door de waterbedrijven. Dit is een betrouwbare bron voor beleidsmatig gebruik.',
  },
  {
    question: 'Wanneer heb je een professionele laboratoriumanalyse nodig?',
    answer:
      'Een laboanalyse is zinvol als je een eigen waterput of bron hebt, als je specifieke verontreiniging vermoedt (nitraten, zware metalen, PFAS), of als je een osmose systeem wil dimensioneren voor industrieel gebruik. Voor normaal leidingwater zijn de waterbedrijf-gegevens voldoende.',
  },
  {
    question: 'Wat is een goede waterhardheid om te drinken?',
    answer:
      'Voor drinkwater geldt er geen wettelijke bovengrens voor hardheid in Nederland. De WHO adviseert een range van 10–500 mg/L calcium. Veel mensen ervaren water boven 15 °dH als te hard (kalkachtig) en water onder 4 °dH als te zacht (vlak van smaak). Een osmose systeem filtert alle kalk eruit ongeacht de beginwaarde.',
  },
];

const methoden = [
  {
    methode: 'Teststrips (sneltest)',
    kosten: '€ 5–15',
    nauwkeurigheid: '±10–20%',
    tijdsduur: '1 minuut',
    voordeel: 'Goedkoop, direct resultaat, eenvoudig',
    nadeel: 'Beperkte nauwkeurigheid, groot bereik',
    aanbevolen: false,
  },
  {
    methode: 'TDS-meter',
    kosten: '€ 10–25',
    nauwkeurigheid: '±5–10% (TDS, niet °dH)',
    tijdsduur: '30 seconden',
    voordeel: 'Snel, herbruikbaar, ook goed voor RO-check',
    nadeel: 'Meet TDS, niet directe hardheid in °dH',
    aanbevolen: true,
  },
  {
    methode: 'Waterbedrijf website',
    kosten: 'Gratis',
    nauwkeurigheid: 'Hoog (officieel gemeten)',
    tijdsduur: '5 minuten',
    voordeel: 'Gratis, betrouwbaar, specifiek per postcode',
    nadeel: 'Niet real-time; leidingkwaliteit kan lokaal afwijken',
    aanbevolen: true,
  },
  {
    methode: 'RIVM-database',
    kosten: 'Gratis',
    nauwkeurigheid: 'Hoog (jaarlijkse officiële data)',
    tijdsduur: '10 minuten',
    voordeel: 'Officiële bron, historische data beschikbaar',
    nadeel: 'Minder gebruiksvriendelijk dan waterbedrijf-site',
    aanbevolen: false,
  },
  {
    methode: 'Professionele laboanalyse',
    kosten: '€ 50–200',
    nauwkeurigheid: 'Zeer hoog (&lt;2% afwijking)',
    tijdsduur: '2–5 werkdagen',
    voordeel: 'Volledig beeld van alle parameters inclusief verontreinigingen',
    nadeel: 'Duur voor normaal gebruik, niet nodig bij leidingwater',
    aanbevolen: false,
  },
];

const conversieTabel = [
  { dh: '0–4', mmol: '0–0,7', ppm: '0–70', categorie: 'Zeer zacht', effect: 'Vlak van smaak, weinig kalkaanslag' },
  { dh: '4–8', mmol: '0,7–1,4', ppm: '70–140', categorie: 'Zacht', effect: 'Weinig kalk, prettige smaak' },
  { dh: '8–15', mmol: '1,4–2,7', ppm: '140–270', categorie: 'Middelhard', effect: 'Lichte kalkaanslag op apparaten' },
  { dh: '15–21', mmol: '2,7–3,8', ppm: '270–380', categorie: 'Hard', effect: 'Duidelijke kalk, wisselen aangeraden' },
  { dh: '21+', mmol: '3,8+', ppm: '380+', categorie: 'Zeer hard', effect: 'Snelle kalkaanslag, filteradvies sterk' },
];

export default function WaterhardheidTestenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterhardheid testen: methoden en nauwkeurigheid',
          description:
            'Overzicht van alle methoden om waterhardheid te meten: teststrips, TDS-meter, waterbedrijf-data, RIVM-database en laboratoriumanalyse.',
          datePublished: '2026-01-20',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterhardheid/testen',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterhardheid', url: 'https://waterfilterplatform.nl/waterhardheid' },
          { name: 'Testen', url: 'https://waterfilterplatform.nl/waterhardheid/testen' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterhardheid" className="hover:text-[#005F8A]">Waterhardheid</Link>
            <span className="mx-2">/</span>
            <span>Testen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid testen: methoden en nauwkeurigheid
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Wil je weten hoe hard jouw leidingwater is? Er zijn vijf manieren om dat te meten —
            van een goedkope teststrip tot een professionele laboratoriumanalyse. Op deze pagina
            leggen we elke methode uit en vergelijken we ze op kosten, nauwkeurigheid en
            gebruiksgemak.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#vergelijking"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk vergelijking →
            </a>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Hardheid per gemeente
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#methoden" className="hover:underline">Vijf testmethoden uitgelegd</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijkingstabel</a></li>
            <li><a href="#eenheden" className="hover:underline">Eenheden en conversie</a></li>
            <li><a href="#advies" className="hover:underline">Welke methode kies je?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Methoden */}
        <section id="methoden">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Vijf methoden om waterhardheid te meten</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#003F5C] mb-2">1. Teststrips (sneltest)</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Dompel een teststrip 1 seconde in het water en vergelijk de kleur na 30–60
                seconden met de kleurschaal op de verpakking. Geeft direct een indicatieve waarde
                in graden Duits (°dH) of ppm.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best voor:</strong> snel globaal beeld, geen investeringskosten.
                <strong className="text-red-700"> Niet voor:</strong> precieze metingen of
                monitoring van een osmose systeem.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#003F5C] mb-2">2. TDS-meter</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Een TDS-meter steek je in het water en leest de elektrische geleidbaarheid uit
                in ppm of mg/L. Handig om te controleren of je osmose systeem goed filtert
                (vergelijk TDS in versus TDS uit). Conversiefactor TDS naar °dH: TDS ÷ 17,8.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best voor:</strong> dagelijkse monitoring van RO-systeem, relatieve
                vergelijking. <strong className="text-amber-700">Let op:</strong> TDS meet alle
                opgeloste stoffen, niet alleen hardheid-veroorzakende ionen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#003F5C] mb-2">3. Waterbedrijf website / klantenservice</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Alle tien Nederlandse waterbedrijven (Vitens, Evides, PWN, Dunea, Brabant Water
                etc.) publiceren actuele waterkwaliteitsgegevens per leveringsgebied. Zoek op
                je postcode en vind de hardheid direct in mmol/L en °dH.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best voor:</strong> iedereen met normaal leidingwater — gratis, actueel
                en betrouwbaar.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#003F5C] mb-2">4. RIVM drinkwaterdatabase</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Het RIVM publiceert jaarlijks de &ldquo;Kwaliteit van het drinkwater in
                Nederland&rdquo; rapport met gedetailleerde meetgegevens per waterwingebied.
                Toegankelijk via de RIVM-website of het Nationaal Dataportaal.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best voor:</strong> wetenschappelijk of beleidsmatig gebruik, historische
                vergelijking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#003F5C] mb-2">5. Professionele laboratoriumanalyse</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Stuur een watermonster op naar een erkend laboratorium (bijv. KWR, SGS, Eurofins).
                Je krijgt een volledig analyserapport met hardheid, pH, microbiologie,
                zware metalen en eventuele verontreinigingen.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best voor:</strong> eigen waterput, putten of bronwater, vermoeden van
                specifieke verontreiniging.
              </p>
            </div>
          </div>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijkingstabel testmethoden</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Methode</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Nauwkeurigheid</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Tijd</th>
                </tr>
              </thead>
              <tbody>
                {methoden.map(m => (
                  <tr
                    key={m.methode}
                    className={m.aanbevolen ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">
                      {m.methode}
                      {m.aanbevolen && <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded">Aanbevolen</span>}
                    </td>
                    <td className="py-2.5 px-3 text-right">{m.kosten}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{m.nauwkeurigheid}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{m.tijdsduur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Eenheden */}
        <section id="eenheden">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Eenheden voor waterhardheid: °dH, mmol/L en ppm</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterhardheid wordt in Nederland uitgedrukt in <strong>graden Duits (°dH)</strong> of
            in <strong>mmol/L</strong>. Internationaal wordt ook ppm (mg/L CaCO₃) gebruikt.
            Onderstaande conversietabel helpt je de waarden te interpreteren.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">°dH</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">mmol/L</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">ppm</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Categorie</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Effect</th>
                </tr>
              </thead>
              <tbody>
                {conversieTabel.map((r, i) => (
                  <tr key={r.dh} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium">{r.dh}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.mmol}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.ppm}</td>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.categorie}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs">{r.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Conversieformules: 1 °dH = 0,178 mmol/L = 17,8 ppm (mg/L CaCO₃)
          </p>
        </section>

        {/* Advies */}
        <section id="advies">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke methode kies je?</h2>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
              <p className="font-semibold text-green-800 mb-1">Voor de meeste huishoudens: waterbedrijf website</p>
              <p className="text-sm text-gray-700">Gratis, betrouwbaar en specifiek voor jouw postcode. Begin hier altijd. Zoek de naam van jouw waterbedrijf op via de gemeente-website.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <p className="font-semibold text-blue-800 mb-1">Heb je een osmose systeem: TDS-meter</p>
              <p className="text-sm text-gray-700">Meet wekelijks de TDS voor en na het systeem. Stijgt de TDS van het gefilterde water boven 10% van de inkomende waarde? Dan is filtervervanging nodig.</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
              <p className="font-semibold text-amber-800 mb-1">Snel globaal beeld: teststrips</p>
              <p className="text-sm text-gray-700">Wil je direct weten of je water ruwweg zacht, middelhard of hard is? Teststrips zijn de goedkoopste optie voor een eerste indicatie.</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
              <p className="font-semibold text-red-800 mb-1">Eigen waterput of specifieke zorgen: laboratorium</p>
              <p className="text-sm text-gray-700">Heb je een put, bron of vermoeden van verontreiniging? Stuur een monster op naar een gecertificeerd laboratorium voor een volledig beeld.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="waterhardheid" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer over waterhardheid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/waterhardheid', title: 'Waterhardheid per gemeente', desc: 'Zoek de hardheid op voor jouw woonplaats in Nederland.' },
              { href: '/omgekeerde-osmose/kopen', title: 'Osmose filter kopen', desc: 'Hardwateroplossing: onafhankelijk overzicht van de beste systemen.' },
              { href: '/waterontharder/onderhoud', title: 'Waterontharder onderhoud', desc: 'Complete handleiding voor zout, hars en regeneratiecyclus.' },
              { href: '/waterfilter/onderhoud-schema', title: 'Waterfilter onderhoud schema', desc: 'Wanneer moet je welk filter vervangen?' },
              { href: '/stoffen-in-drinkwater/kalk-mineralen', title: 'Kalk en mineralen in drinkwater', desc: 'Calcium, magnesium en carbonaathardheid: effecten op gezondheid en apparatuur.' },
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterhardheid testen</h2>
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
