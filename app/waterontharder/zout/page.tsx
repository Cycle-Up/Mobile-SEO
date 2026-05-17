import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterontharder zout kopen: types en verbruik | 2026',
  description:
    'Tabletzout, blokzout of granulaat voor je waterontharder? Vergelijking van merkzout vs. budget, verbruik per persoon (5–8 kg/jaar), wanneer bijvullen en de.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/zout' },
  openGraph: {
    title: 'Waterontharder zout kopen: types en verbruik',
    description:
      'Alles over waterontharderzout: tabletzout, blokzout, granulaat, merkzout vs. budget en het goedkoopste zout voor je waterontharder.',
    url: 'https://waterfilterplatform.nl/waterontharder/zout',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk zout is het beste voor een waterontharder?',
    answer:
      'Tabletzout (ook wel tablettenpekelzout) is voor de meeste huishoudelijke waterontharders de beste keuze: hoge zuiverheidsgraad (>99,5% NaCl), uniforme afmeting en laag brugrisico (geen klontering). Blokzout is iets goedkoper en geschikt voor grotere installaties. Granulaat lost snel op maar heeft een iets hogere kans op brugvorming bij lage temperaturen.',
  },
  {
    question: 'Hoeveel zout verbruikt een waterontharder per jaar?',
    answer:
      'Gemiddeld verbruikt een waterontharder 5–8 kg zout per persoon per jaar. Een gezin van 4 personen verbruikt dus 20–32 kg per jaar. Het exacte verbruik hangt af van de waterhardheid, het waterverbruik en de instelling van de regeneratiefrequentie.',
  },
  {
    question: 'Hoe weet ik wanneer ik zout moet bijvullen?',
    answer:
      'De meeste ontharders hebben een zoutniveausensor of indicator. Als vuistregel: controleer het zoutniveau maandelijks en vul bij als het minder dan 1/3 van de capaciteit is. Bij te weinig zout regenereert de ontharder niet effectief en wordt het water hard. Sommige modellen sturen een melding naar je smartphone.',
  },
  {
    question: 'Is duur merkzout beter dan budget supermarktzout?',
    answer:
      'Voor moderne waterontharders is het verschil minimaal. Zolang het zout een zuiverheid heeft van >99% NaCl en de juiste fysieke vorm (tablet of blok), presteert budget supermarktzout vergelijkbaar met merkzout. De extra kosten van merkzout (Aquatabs, Henkel) zijn niet gerechtvaardigd door meetbare prestatieverschillen.',
  },
  {
    question: 'Kan ik keukenzout gebruiken in mijn waterontharder?',
    answer:
      'Nee. Keukenzout bevat jodium, antiklontermiddelen en andere toevoegingen die schadelijk zijn voor de harskolom van de ontharder. Gebruik uitsluitend speciaal waterontharderzout (regeneratiezout) met een zuiverheid van >99,5% NaCl.',
  },
  {
    question: 'Is er een alternatief voor een waterontharder?',
    answer:
      'Voor drinkwater is omgekeerde osmose een uitstekend alternatief: het verwijdert 95–99% van calcium en magnesium zonder zout of chemicaliën. Voor het hele huis (douche, wasmachine) biedt een ontharder bredere dekking. Veel huishoudens combineren beide: een ontharder voor het huishoudwater én een RO-filter voor drinkwater.',
  },
];

const zoutTypesTabel = [
  {
    type: 'Tabletzout',
    zuiverheid: '>99,5% NaCl',
    formaat: 'Uniforme tabletten (25 mm)',
    brugrisico: 'Laag',
    oplosnelheid: 'Gemiddeld',
    prijs: '€ 3–8 per 25 kg',
    aanbevolen: true,
  },
  {
    type: 'Blokzout',
    zuiverheid: '>99,5% NaCl',
    formaat: 'Grote blokken (2–8 kg)',
    brugrisico: 'Laag',
    oplosnelheid: 'Langzaam',
    prijs: '€ 2,50–6 per 25 kg equiv.',
    aanbevolen: false,
  },
  {
    type: 'Granulaat',
    zuiverheid: '>99,5% NaCl',
    formaat: 'Kleine korrels',
    brugrisico: 'Gemiddeld',
    oplosnelheid: 'Snel',
    prijs: '€ 2,50–5 per 25 kg',
    aanbevolen: false,
  },
];

const merkVsBudget = [
  { aspect: 'NaCl-zuiverheid', merk: '>99,9%', budget: '>99,5%', verschil: 'Verwaarloosbaar' },
  { aspect: 'Brugrisico', merk: 'Laag', budget: 'Laag', verschil: 'Geen' },
  { aspect: 'Oplostijd', merk: 'Geoptimaliseerd', budget: 'Standaard', verschil: 'Minimaal' },
  { aspect: 'Prijs (25 kg)', merk: '€ 10–18', budget: '€ 3–7', verschil: '2–4x duurder voor merk' },
  { aspect: 'Aanbeveling fabrikant', merk: 'Vaak eigen merk', budget: 'Niet aanbevolen (marketing)', verschil: 'Geen technische grond' },
];

export default function WaterontharderZoutPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontharder zout kopen: types en verbruik',
          description:
            'Vergelijking van tabletzout, blokzout en granulaat voor waterontharders. Verbruik per persoon, merkzout vs. budget en goedkoopste opties.',
          datePublished: '2026-01-20',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterontharder/zout',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Zout', url: 'https://waterfilterplatform.nl/waterontharder/zout' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Zout</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder zout kopen: types en verbruik
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Tabletzout, blokzout of granulaat — het aanbod aan waterontharderzout is groot. En mag je
            gewoon supermarktzout kopen of moet het merkzout zijn? Op deze pagina vind je een eerlijk
            antwoord: types vergeleken, verbruiksberekening per persoon per jaar, wanneer bijvullen en
            de goedkoopste opties.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Alternatief: osmosefilter zonder zout →
            </Link>
            <Link
              href="/waterontharder"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterontharder gids
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#types" className="hover:underline">Types waterontharderzout</a></li>
            <li><a href="#merk-vs-budget" className="hover:underline">Merkzout vs. budget</a></li>
            <li><a href="#verbruik" className="hover:underline">Verbruik per persoon per jaar</a></li>
            <li><a href="#bijvullen" className="hover:underline">Wanneer bijvullen?</a></li>
            <li><a href="#goedkoopst" className="hover:underline">Goedkoopste opties</a></li>
            <li><a href="#alternatief" className="hover:underline">Alternatief: osmose zonder zout</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Types */}
        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Types waterontharderzout</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterontharderzout (ook: regeneratiezout of pekelzout) is vrijwel puur natriumchloride
            (NaCl). Er zijn drie fysieke vormen beschikbaar voor thuisgebruik:
          </p>
          <div className="space-y-4">
            {zoutTypesTabel.map(z => (
              <div
                key={z.type}
                className={`border rounded-2xl p-5 ${z.aanbevolen ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{z.type}</p>
                  {z.aanbevolen && (
                    <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">
                      Meest geschikt
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-600">
                  <div><span className="font-medium text-gray-800">Zuiverheid:</span> {z.zuiverheid}</div>
                  <div><span className="font-medium text-gray-800">Formaat:</span> {z.formaat}</div>
                  <div><span className="font-medium text-gray-800">Brugrisico:</span> {z.brugrisico}</div>
                  <div><span className="font-medium text-gray-800">Oplosnelheid:</span> {z.oplosnelheid}</div>
                  <div className="col-span-2"><span className="font-medium text-gray-800">Prijs:</span> {z.prijs}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Nooit gebruiken:</strong> keukenzout, zeezout,
            industrieel zout of strooizout. Deze bevatten toevoegingen die de harskolom beschadigen.
            Gebruik uitsluitend gediplomeerd waterontharderzout.
          </div>
        </section>

        {/* Merkzout vs budget */}
        <section id="merk-vs-budget">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Merkzout vs. budget: betaal je voor kwaliteit?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Fabrikanten van waterontharders adviseren vaak hun eigen merkzout. Maar rechtvaardigt de
            hogere prijs een betere prestatie? We zetten de feiten op een rij.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Aspect</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Merkzout</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Budget</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Conclusie</th>
                </tr>
              </thead>
              <tbody>
                {merkVsBudget.map(r => (
                  <tr key={r.aspect} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800 font-medium">{r.aspect}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.merk}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.budget}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.verschil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-green-50 border border-green-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-green-900">Advies:</strong> koop budget tabletzout van de
            supermarkt (Albert Heijn, Jumbo, Lidl, Action) of een bouwmarkt (Gamma, Praxis).
            Controleer alleen dat het ≥99% NaCl bevat en geen toevoegingen heeft. De besparing
            ten opzichte van merkzout is €50–€100 per jaar voor een gezin.
          </div>
        </section>

        {/* Verbruik */}
        <section id="verbruik">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verbruik: hoeveel zout per persoon per jaar?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het zoutverbruik hangt af van drie factoren: waterhardheid, waterverbruik en de
            regeneratieinstelling. Als vuistregel: <strong>5–8 kg zout per persoon per jaar</strong>.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[460px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Huishouden</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Zout/jaar (zacht water)</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Zout/jaar (hard water)</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Kosten/jaar*</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: '1–2 personen', zachtMin: '5–10 kg', hardMax: '10–16 kg', kosten: '€ 5–15' },
                  { size: '3–4 personen', zachtMin: '15–24 kg', hardMax: '24–32 kg', kosten: '€ 15–30' },
                  { size: '5+ personen', zachtMin: '25–40 kg', hardMax: '40–60 kg', kosten: '€ 30–50' },
                ].map(r => (
                  <tr key={r.size} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-800 font-medium">{r.size}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.zachtMin}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.hardMax}</td>
                    <td className="py-2.5 px-3 text-right text-green-700 font-semibold">{r.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">*Bij budgetzout ca. €1,00/kg. Hard water = &gt;15 °dH.</p>
        </section>

        {/* Bijvullen */}
        <section id="bijvullen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer moet je zout bijvullen?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste ontharders hebben een zoutniveaumindicator. Vul bij als het niveau onder
            ⅓ van de capaciteit daalt — wacht niet tot het helemaal leeg is. Bij te weinig zout:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Regeneratie is minder effectief → water wordt harder</li>
            <li>Kalkaanslag keert terug in waterkoker en apparaten</li>
            <li>Hars kan beschadigen als het droogvalt (bij sommige modellen)</li>
          </ul>
          <div className="mt-4 bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Praktische tip:</strong> koop zout in bulk (25 kg zakken).
            Supermarkten, bouwmarkten en Action verkopen 25 kg tabletzout voor €3–€7. Bewaar op een
            droge plek om brugvorming te voorkomen.
          </div>
        </section>

        {/* Goedkoopste opties */}
        <section id="goedkoopst">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Goedkoopste zout opties</h2>
          <div className="space-y-3">
            {[
              { winkel: 'Action / Aldi / Lidl', prijs: '€ 3–5 per 25 kg', opmerking: 'Tabletzout, uitstekende prijs-kwaliteit' },
              { winkel: 'Albert Heijn / Jumbo', prijs: '€ 4–7 per 25 kg', opmerking: 'Huismerk tabletzout, breed beschikbaar' },
              { winkel: 'Gamma / Praxis / Hornbach', prijs: '€ 4–8 per 25 kg', opmerking: 'Ook verkrijgbaar in grote pallets' },
              { winkel: 'Online (bol.com, Amazon)', prijs: '€ 4–10 per 25 kg + verzending', opmerking: 'Handige thuisbezorging; let op verzendkosten bij lage volumes' },
              { winkel: 'Merkzout (Aquatabs, Henkel)', prijs: '€ 12–20 per 25 kg', opmerking: 'Geen aantoonbare prestatiemeerwaarde' },
            ].map(r => (
              <div key={r.winkel} className="flex items-center gap-4 border border-gray-100 rounded-xl p-3">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{r.winkel}</p>
                  <p className="text-xs text-gray-500">{r.opmerking}</p>
                </div>
                <p className="text-sm font-semibold text-[#005F8A] shrink-0">{r.prijs}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alternatief */}
        <section id="alternatief">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Alternatief: omgekeerde osmose zonder zout</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Heb je geen behoefte aan een waterontharder voor heel het huis, maar wil je wel kalkvrij
            en schoon drinkwater? Een <strong>omgekeerde osmose filter</strong> is een uitstekend
            alternatief — zonder zout, zonder regeneratiecyclus en zonder chemicaliën.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm">
              <p className="font-semibold text-[#003F5C] mb-2">Waterontharder</p>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Heel huis zacht water</li>
                <li>✓ Goed voor douche + wasmachine</li>
                <li>✗ Zout bijvullen</li>
                <li>✗ Hogere aanschafkosten</li>
                <li>✗ Ruimte nodig (meterkast)</li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm">
              <p className="font-semibold text-[#003F5C] mb-2">Omgekeerde osmose (drinkwater)</p>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Geen zout of chemicaliën</li>
                <li>✓ Breed filterspectrum (PFAS, nitraat)</li>
                <li>✓ Compact onder aanrecht</li>
                <li>✗ Alleen keukenkraan</li>
                <li>✗ Geen effect op douchewater</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-4 text-sm">
            Meer over dit alternatief:{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              complete gids omgekeerde osmose
            </Link>{' '}
            en{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              osmose filter kopen
            </Link>.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterontharderzout</h2>
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
