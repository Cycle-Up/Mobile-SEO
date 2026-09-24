import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { JoepCTA } from '@/components/JoepCTA';
import { JoepRecommendation } from '@/components/JoepRecommendation';
import { PRODUCTS, buildProductSchema } from '@/lib/pureaqua-products.mjs';
import { JOEP, JOEP_MIN_DH } from '@/lib/joep.mjs';

const URL = 'https://waterfilterplatform.nl/joep-waterontharder';
const PUBLISHED = '2026-05-29';
const MODIFIED = '2026-09-24';

export function generateMetadata(): Metadata {
  const title = 'JOEP waterontharder: onze aanbeveling, prijs en specificaties';
  const description =
    'JOEP waterontharder van AquaSens: 1.699 euro, of 1.998 euro compleet geïnstalleerd. Tot 5 m3 per uur, zoutverbruik, garantie en voor wie hij geschikt is.';
  return {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: { title, description, url: URL, type: 'article', locale: 'nl_NL' },
  };
}

const faqItems = [
  {
    question: 'Wat is de JOEP waterontharder?',
    answer:
      'JOEP is een compacte waterontharder van AquaSens uit Joure. Het is een ionenwisselaar met zout: een harstank haalt calcium en magnesium uit al het water dat je huis binnenkomt, en een zoutbak spoelt de hars periodiek schoon. Het apparaat meet 48 x 27 x 48,5 cm en levert tot 5 m3 zacht water per uur.',
  },
  {
    question: 'Wat kost de JOEP waterontharder?',
    answer: `Bij PureAqua kost JOEP ${JOEP.devicePrice} zonder installatie, of ${JOEP.installedPrice} compleet geïnstalleerd. Daarnaast betaal je voor zout (per regeneratie ${JOEP.saltPerRegeneration}, volgens de fabrikant theoretisch circa 15 kg per persoon per jaar bij 8 dH) en een beetje water en stroom voor de regeneratie. De fabrikant biedt vanaf het tweede jaar een optioneel serviceabonnement van 8,49 euro per maand. Controleer de actuele prijzen en voorwaarden bij de verkoper.`,
  },
  {
    question: 'Gebruikt JOEP zout en stroom?',
    answer:
      'Ja. JOEP is een ionenwisselaar en heeft onthardingszout nodig om de hars te regenereren; de zoutbak bevat maximaal 15 kg. Het apparaat heeft ook een stopcontact nodig voor de 12V-transformator van de besturing. Zoutloze apparaten die "kalk omvormen" zijn geen echte ontharders: ze halen de hardheid niet uit het water.',
  },
  {
    question: 'Voor wie is JOEP geschikt?',
    answer: `Voor huishoudens in een hardwatergebied, doorgaans vanaf circa ${JOEP_MIN_DH} dH, die kalk in het hele huis willen aanpakken met een compact apparaat. Heb je een groot huishouden, een hoog piekverbruik of een afwijkende waterdruk (buiten 1,5 tot 5 bar), laat dan vooraf checken of het formaat past. Bij zacht water onder circa 8 dH is een ontharder meestal niet nodig.`,
  },
  {
    question: 'Heb ik tijdens de regeneratie zacht water?',
    answer:
      'Nee. JOEP heeft een enkele harstank. Tijdens de regeneratie van circa een uur, standaard s nachts, loopt het water via de bypass en is het tijdelijk hard. Bij hoog verbruik kan JOEP een extra korte regeneratie uitvoeren. Wil je ook tijdens de regeneratie zacht water, dan is een tweecellige ontharder een alternatief.',
  },
  {
    question: 'Welke garantie krijg ik op JOEP?',
    answer:
      'De fabrikant AquaSens noemt 1 jaar all-in garantie, 2 jaar op onderdelen en 20 jaar op de hars, mits je het apparaat binnen 30 dagen registreert. Koop je via een verkoper zoals PureAqua, dan kunnen hun eigen installatie-, proef- en servicevoorwaarden aanvullend gelden. Lees die voorwaarden voor je bestelt.',
  },
];

const specs: [string, string][] = [
  ['Type', JOEP.type],
  ['Doorstroom', JOEP.flow],
  ['Afmetingen', JOEP.dimensions],
  ['Werkdruk', JOEP.pressure],
  ['Watertemperatuur', JOEP.temperature],
  ['Zout per regeneratie', JOEP.saltPerRegeneration],
  ['Water per regeneratie', JOEP.waterPerRegeneration],
  ['Regeneratie', JOEP.regenerationTime],
  ['Zoutbak', JOEP.saltTank],
  ['Stroom', JOEP.power],
  ['Fabrieksgarantie', JOEP.manufacturerWarranty],
  ['Prijs bij PureAqua', `${JOEP.devicePrice} zonder installatie; ${JOEP.installedPrice} inclusief installatie`],
];

const compare: [string, string, string, string][] = [
  ['Onthardt echt (haalt kalk eruit)', 'Ja', 'Ja', 'Nee'],
  ['Zacht water tijdens regeneratie', 'Nee (bypass)', 'Ja', 'n.v.t.'],
  ['Stopcontact nodig', 'Ja', 'Nee, voor ontharden', 'Meestal ja'],
  ['Zout nodig', 'Ja', 'Ja', 'Nee'],
  ['Formaat', 'Compact', 'Compact', 'Klein'],
];

export default function JoepWaterontharderPage() {
  const product = PRODUCTS.find(p => p.key === 'joep')!;
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'JOEP waterontharder: onze aanbeveling, prijs en specificaties',
          description:
            'Koopgids voor de JOEP waterontharder van AquaSens: prijs, specificaties, kosten, geschiktheid, installatie en garantie, met een eerlijke vergelijking.',
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          lastReviewed: MODIFIED,
          url: URL,
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'JOEP', url: URL },
        ]}
      />
      <SchemaOrg
        schema={[
          { '@type': 'Brand', name: 'JOEP', description: 'Compacte waterontharder (ionenwisselaar met zout) van AquaSens uit Joure.' },
          buildProductSchema(product),
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>JOEP</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            JOEP waterontharder: onze aanbeveling, prijs en specificaties
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            <strong>JOEP</strong> is een compacte waterontharder van AquaSens uit Joure. Hij haalt de kalk uit
            al het water in huis, zodat kranen, douche, cv-ketel en apparaten niet meer verkalken. Hieronder lees
            je wat hij kost, hoe hij werkt, voor wie hij past en waar je op moet letten.
          </p>
          <div className="border border-amber-200 bg-amber-50 rounded-lg p-4 text-sm text-gray-800">
            <strong>Eerlijk vooraf:</strong> JOEP is een merk van AquaSens. PureAqua, waaraan WaterfilterPlatform
            gelieerd is, verkoopt JOEP en kan hem installeren; koop je via onze links, dan verdient PureAqua
            daaraan. De specificaties op deze pagina komen van de fabrikant.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed={MODIFIED} sources={['Fabrikant AquaSens (productpagina en voorwaarden)', 'PureAqua (prijs)', 'RIVM']} />
        <AuthorBox datePublished={PUBLISHED} dateModified={MODIFIED} />

        <QuickAnswer
          question="Is de JOEP waterontharder een goede keuze?"
          answer={`Ja: voor een huishouden met hard water, vanaf ongeveer ${JOEP_MIN_DH} dH, is JOEP onze aanbeveling en een van de sterkste keuzes in zijn prijsklasse. JOEP levert tot 5 m3 zacht water per uur, gebruikt ${JOEP.saltPerRegeneration} zout per regeneratie en heeft 20 jaar fabrieksgarantie op de hars. Bij PureAqua kost hij ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd. Let op: tijdens de nachtelijke regeneratie is het water tijdelijk hard en je hebt een stopcontact nodig.`}
        />

        <JoepRecommendation content="joep-waterontharder-aanbeveling" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kort oordeel</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-800 mb-2">Sterke punten</p>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
                <li>Compact formaat: 48 x 27 x 48,5 cm</li>
                <li>Hoge doorstroom, tot 5 m3 per uur</li>
                <li>Miniregeneratie bij hoog verbruik</li>
                <li>20 jaar fabrieksgarantie op de hars</li>
                <li>Zelf te installeren, of compleet geïnstalleerd voor {JOEP.installedPrice}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800 mb-2">Aandachtspunten</p>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
                <li>Een formaat; bij groot huishouden of hoog piekverbruik eerst laten checken</li>
                <li>Tijdens de regeneratie (circa 1 uur, s nachts) tijdelijk hard water</li>
                <li>Heeft zout en een stopcontact nodig</li>
                <li>Voegt natrium toe; bij een zoutarm dieet een apart drinkwatertappunt overwegen</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Heb je een waterontharder nodig?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Dat hangt vooral af van je waterhardheid. Onder circa 8 dH is water zacht en is een ontharder zelden
            nodig. Tussen 8 en {JOEP_MIN_DH} dH is het vaak een kwestie van comfort. Vanaf ongeveer {JOEP_MIN_DH} dH,
            zoals in grote delen van Brabant, Limburg en Gelderland, zie je snel kalkaanslag op kranen, in de
            waterkoker en in de cv-ketel, en loont een ontharder voor het hele huis eerder.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Zoek de hardheid in jouw gemeente op via{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</Link>{' '}
            of bekijk het{' '}
            <Link href="/rapporten/waterhardheid-nederland-2026" className="text-[#005F8A] underline">waterhardheid-rapport 2026</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt JOEP?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            JOEP wordt na de watermeter op de hoofdleiding aangesloten, zodat al het water in huis erdoor gaat. In
            de harstank worden calcium en magnesium, de stoffen die kalk vormen, uitgewisseld tegen natrium. Als de
            hars vol zit, spoelt het apparaat hem schoon met pekel uit de zoutbak. Die regeneratie duurt circa een
            uur en gebeurt standaard s nachts; in die tijd loopt het water via de bypass. Gebruik je veel water, dan
            kan JOEP een extra korte regeneratie inlassen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer achtergrond:{' '}
            <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] underline">ionenwisseling</Link>,{' '}
            <Link href="/waterontharder/werking" className="text-[#005F8A] underline">werking van een waterontharder</Link>{' '}
            en{' '}
            <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">regeneratie</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Specificaties</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {specs.map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th scope="row" className="py-2.5 pr-4 text-left font-semibold text-gray-800 w-1/3">{k}</th>
                    <td className="py-2.5 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Bron: productinformatie en voorwaarden van AquaSens; prijs van de PureAqua-productpagina (peildatum
            september 2026). Actuele waarden en prijzen staan bij de verkoper.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat kost JOEP in aanschaf en gebruik?</h2>
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li><strong>Aanschaf:</strong> {JOEP.devicePrice} zonder installatie bij PureAqua.</li>
            <li><strong>Compleet geïnstalleerd:</strong> {JOEP.installedPrice} bij PureAqua. Installeer je zelf met de handleiding, dan betaal je alleen het apparaat.</li>
            <li><strong>Zout:</strong> {JOEP.saltPerRegeneration} per regeneratie; de fabrikant rekent theoretisch met circa 15 kg per persoon per jaar bij 8 dH. Bij harder water en meer verbruik is dat meer.</li>
            <li><strong>Water en stroom:</strong> {JOEP.waterPerRegeneration} per regeneratie en het beperkte verbruik van de besturing.</li>
            <li><strong>Service:</strong> {JOEP.serviceSubscription}.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Reken je jaarlasten door met de{' '}
            <Link href="/kennisbank/wat-kost-waterontharder-per-jaar" className="text-[#005F8A] underline">uitleg over de jaarkosten van een waterontharder</Link>{' '}
            en vergelijk met een{' '}
            <Link href="/kennisbank/joep-vs-zoutontharder" className="text-[#005F8A] underline">klassieke zoutontharder</Link>.
          </p>
        </section>

        <JoepCTA context="kosten" content="joep-waterontharder-kosten" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">JOEP vergeleken</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 text-left">
                  <th className="py-2.5 px-3 font-bold text-gray-800"></th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">JOEP</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Tweecellige ontharder</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Zoutloos apparaat</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([k, a, b, c]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th scope="row" className="py-2.5 px-3 text-left font-semibold text-gray-800">{k}</th>
                    <td className="py-2.5 px-3 text-gray-700">{a}</td>
                    <td className="py-2.5 px-3 text-gray-700">{b}</td>
                    <td className="py-2.5 px-3 text-gray-700">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Een tweecellige ontharder, zoals de{' '}
            <Link href="/aquacell-waterontharder" className="text-[#005F8A] underline">AquaCell</Link>, levert ook
            tijdens de regeneratie zacht water. Een{' '}
            <Link href="/waterontharder/zoutloos" className="text-[#005F8A] underline">zoutloos apparaat</Link>{' '}
            onthardt niet echt. En wil je alleen zuiver drinkwater in plaats van kalkvrij water in het hele huis,
            dan past{' '}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> beter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Voor JOEP heb je drie dingen nodig: een aansluiting op de hoofdleiding na de watermeter, een afvoer voor
            het spoelwater en een stopcontact. Handige doe-het-zelvers kunnen hem met de handleiding zelf plaatsen;
            Wil je het uit handen geven, dan installeert PureAqua hem; compleet geïnstalleerd kost JOEP {JOEP.installedPrice}. Stel het apparaat na installatie in op de hardheid van
            jouw kraanwater. Let op: registreer het apparaat binnen 30 dagen om de fabrieksgarantie te behouden.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer weten? Lees{' '}
            <Link href="/waterontharder/installeren" className="text-[#005F8A] underline">een waterontharder installeren</Link>.
          </p>
        </section>

        <JoepCTA context="algemeen" content="joep-waterontharder-cta" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onze beoordelingsmethode</h2>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm">
            {[
              ['Bronnen', 'Officiele productinformatie en voorwaarden van AquaSens, de productpagina van PureAqua en algemene bronnen over waterhardheid.'],
              ['Wat we niet claimen', 'Geen besparingspercentages, gezondheidseffecten of certificeringen die we niet voor JOEP zelf konden herleiden.'],
              ['Laatste controle', 'September 2026. Controleer actuele prijzen en voorwaarden bij de verkoper.'],
              ['Commerciele relatie', 'JOEP is een merk van AquaSens en wordt verkocht via PureAqua, waaraan dit platform gelieerd is.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}:</strong> {d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de JOEP waterontharder</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/beste-waterontharder-2026', 'Beste waterontharder 2026', 'Koopgids met shortlist en merken'],
              ['/kennisbank/joep-vs-zoutontharder', 'JOEP vs klassieke zoutontharder', 'Formaat, gemak en capaciteit'],
              ['/waterontharder/kopen', 'Waterontharder kopen', 'Waar let je op bij aanschaf'],
              ['/vergelijken/waterontharder-vergelijken', 'Waterontharders vergelijken', 'Systemen naast elkaar'],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
