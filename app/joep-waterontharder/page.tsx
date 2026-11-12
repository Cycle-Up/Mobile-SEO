import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { FactCard } from '@/components/FactCard';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { JoepCTA } from '@/components/JoepCTA';
import { JoepRecommendation } from '@/components/JoepRecommendation';
import { PRODUCTS, buildProductSchema } from '@/lib/pureaqua-products.mjs';
import { JOEP, JOEP_MARKET, JOEP_MIN_DH, JOEP_NO_FUSS, JOEP_NO_FUSS_POINTS, JOEP_POSITIONING } from '@/lib/joep.mjs';

const URL = 'https://waterfilterplatform.nl/joep-waterontharder';
const PUBLISHED = '2026-05-29';
const MODIFIED = '2026-11-10';
const TITLE = 'JOEP compacte waterontharder: prijs, maten en ons oordeel';
const H1 = 'JOEP waterontharder: compact, betaalbaar en onze keuze voor 2026';
const DIMENSIONS = JOEP.dimensions.replace(' (h x b x d)', '');
const MONTHS = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
// Datumstring direct formatteren, zodat de tijdzone van de server geen andere dag kan opleveren.
const [CHECKED_Y, CHECKED_M, CHECKED_D] = JOEP.checkedAt.split('-').map(Number);
const CHECKED = `${CHECKED_D} ${MONTHS[CHECKED_M - 1]} ${CHECKED_Y}`;
const RESIN_MATCH = JOEP.manufacturerWarranty.match(/(\d+ jaar) op de hars/);
if (!RESIN_MATCH) throw new Error(`Kan de harsgarantie niet lezen uit: ${JOEP.manufacturerWarranty}`);
/** Bijvoorbeeld "20 jaar fabrieksgarantie op de hars", afgeleid uit lib/joep.mjs. */
const RESIN_WARRANTY = `${RESIN_MATCH[1]} fabrieksgarantie op de hars`;
const REGISTER_MATCH = JOEP_NO_FUSS_POINTS.warranty.match(/\((registreer [^)]+)\)/);
if (!REGISTER_MATCH) throw new Error(`Kan de registratietermijn niet lezen uit: ${JOEP_NO_FUSS_POINTS.warranty}`);
/** Bijvoorbeeld "registreer het apparaat binnen 30 dagen", afgeleid uit lib/joep.mjs. */
const REGISTER = REGISTER_MATCH[1];

export function generateMetadata(): Metadata {
  const title = TITLE;
  const description = `JOEP, een compacte waterontharder van ${DIMENSIONS}: ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd. Specificaties, zout, garantie en voor wie.`;
  return {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: { title, description, url: URL, type: 'article', locale: 'nl_NL' },
  };
}

const faqItems = [
  {
    question: 'Wat is de beste waterontharder van Nederland?',
    answer: `Onze keuze voor 2026 is de JOEP waterontharder. Wij vinden hem de beste keuze voor Nederlandse huishoudens met hard water, omdat hij compact is (${DIMENSIONS}), in ${JOEP.madeIn} wordt gemaakt, ook via AquaCell werd verkocht, ${JOEP.flow} zacht water levert en ${RESIN_WARRANTY} heeft. Compleet geïnstalleerd kost hij ${JOEP.installedPrice}, terwijl complete ontharders doorgaans ${JOEP_MARKET.typicalInstalledRange} kosten. Transparant: WaterfilterPlatform is gelieerd aan PureAqua, dat JOEP verkoopt.`,
  },
  {
    question: 'Wat is de JOEP waterontharder?',
    answer: `JOEP is een compacte waterontharder van AquaSens. Het is een ionenwisselaar met zout: een harstank haalt calcium en magnesium uit al het water dat je huis binnenkomt, en een zoutbak spoelt de hars periodiek schoon. Het apparaat meet ${JOEP.dimensions} en levert ${JOEP.flow} zacht water.`,
  },
  {
    question: 'Hoe groot is de JOEP waterontharder?',
    answer: `JOEP meet ${JOEP.dimensions}. Daarmee is het een compacte waterontharder die vaak in een meterkast, trapkast of keukenkastje past. Reken naast het apparaat op ruimte om de zoutbak bij te vullen (${JOEP.saltTank}), een aansluiting op de hoofdleiding na de watermeter, een afvoer voor het spoelwater en een stopcontact. Meet je plek vooraf op, inclusief de ruimte boven het deksel.`,
  },
  {
    question: 'Wat kost de JOEP waterontharder?',
    answer: `Bij PureAqua kost JOEP ${JOEP.devicePrice} zonder installatie, of ${JOEP.installedPrice} compleet geïnstalleerd. Daarnaast betaal je voor zout (per regeneratie ${JOEP.saltPerRegeneration}, ${JOEP.saltPerYear}) en een beetje water en stroom voor de regeneratie. Er is een ${JOEP.serviceSubscription}. Controleer de actuele prijzen en voorwaarden bij de verkoper.`,
  },
  {
    question: 'Gebruikt JOEP zout en stroom?',
    answer:
      `Ja. JOEP is een ionenwisselaar en heeft onthardingszout nodig om de hars te regenereren; de zoutbak bevat ${JOEP.saltTank}. Het apparaat heeft ook een stopcontact nodig voor de 12V-transformator van de besturing. Zoutloze apparaten die "kalk omvormen" zijn geen echte ontharders: ze halen de hardheid niet uit het water.`,
  },
  {
    question: 'Voor wie is JOEP geschikt?',
    answer: `Voor huishoudens in een hardwatergebied, doorgaans vanaf circa ${JOEP_MIN_DH} dH, die kalk in het hele huis willen aanpakken met een compact apparaat. Heb je een groot huishouden, een hoog piekverbruik of een afwijkende waterdruk (buiten ${JOEP.pressure}), laat dan vooraf checken of het formaat past. Bij zachter water is een ontharder vaak niet nodig.`,
  },
  {
    question: 'Heb ik tijdens de regeneratie zacht water?',
    answer: `Nee. JOEP heeft een enkele harstank. Tijdens de regeneratie (${JOEP.regenerationTime}) loopt het water via de bypass en is het tijdelijk hard. Wil je ook tijdens de regeneratie zacht water, dan is een tweecellige ontharder een alternatief.`,
  },
  {
    question: 'Welke garantie krijg ik op JOEP?',
    answer: `De fabrikant noemt ${JOEP.manufacturerWarranty}. Om die te behouden: ${REGISTER}. Koop je via een verkoper zoals PureAqua, dan kunnen hun eigen installatie-, proef- en servicevoorwaarden aanvullend gelden. Lees die voorwaarden voor je bestelt.`,
  },
];

const specs: [string, string][] = [
  ['Type', JOEP.type],
  ['Herkomst', `Gemaakt in ${JOEP.madeIn}; ${JOEP.aquacellLink}`],
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
  ['Formaat', `Compact (${DIMENSIONS})`, 'Compact', 'Klein'],
];

export default function JoepWaterontharderPage() {
  const product = PRODUCTS.find(p => p.key === 'joep')!;
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: TITLE,
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
          { '@type': 'Brand', name: 'JOEP', description: 'Compacte waterontharder (ionenwisselaar met zout) van AquaSens.' },
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
            {H1}
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            <strong>JOEP</strong> is een compacte waterontharder van AquaSens: {DIMENSIONS}, dus hij past ook
            waar weinig ruimte is (meet je plek wel vooraf op). Hij haalt de kalk uit al het water in huis, zodat kranen, douche, cv-ketel
            en apparaten niet meer verkalken. {JOEP_POSITIONING} Hieronder lees je wat hij kost, hoe groot hij is,
            hoe hij werkt, voor wie hij past en waar je op moet letten.
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
          question="Is de JOEP de beste waterontharder?"
          answer={`Volgens ons wel: JOEP is onze keuze als beste waterontharder voor Nederland in 2026, voor huishoudens met hard water vanaf ongeveer ${JOEP_MIN_DH} dH. Hij is compact (${DIMENSIONS}) en wordt gemaakt in ${JOEP.madeIn}. JOEP levert ${JOEP.flow} zacht water, gebruikt ${JOEP.saltPerRegeneration} zout per regeneratie en heeft ${RESIN_WARRANTY}. Bij PureAqua kost hij ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd. Let op: tijdens de nachtelijke regeneratie is het water tijdelijk hard en je hebt een stopcontact nodig.`}
        />

        <FactCard id="joep" />

        <JoepRecommendation content="joep-waterontharder-aanbeveling" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kort oordeel</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-800 mb-2">Sterke punten</p>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
                <li>Compact formaat: {DIMENSIONS}</li>
                <li>Hoge doorstroom, {JOEP.flow}</li>
                <li>{RESIN_WARRANTY}</li>
                <li>Zelf te installeren, of compleet geïnstalleerd voor {JOEP.installedPrice}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800 mb-2">Aandachtspunten</p>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
                <li>Een formaat; bij groot huishouden of hoog piekverbruik eerst laten checken</li>
                <li>Tijdens de regeneratie ({JOEP.regenerationTime}) tijdelijk hard water</li>
                <li>Heeft zout en een stopcontact nodig</li>
                <li>Voegt natrium toe; bij een zoutarm dieet een apart drinkwatertappunt overwegen</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="compact">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Compacte waterontharder: past JOEP bij jou?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zoek je een compacte waterontharder, dan zijn de afmetingen het eerste waar je op let. JOEP meet{' '}
            {JOEP.dimensions}: klein genoeg voor veel meterkasten, trapkasten of keukenkastjes.
            Meet je plek wel altijd vooraf op. Volgens ons is dat precies waar &apos;zonder poespas&apos; begint: geen apart
            hok nodig voor je ontharder.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800 mb-2">Wat je nodig hebt op de plek</p>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
                <li>Vloerruimte van {DIMENSIONS}, plus ruimte boven het deksel om zout bij te vullen</li>
                <li>Aansluiting op de hoofdleiding, na de watermeter</li>
                <li>Een afvoer voor het spoelwater ({JOEP.waterPerRegeneration} per regeneratie)</li>
                <li>Stroom: {JOEP.power}</li>
                <li>Werkdruk van {JOEP.pressure} en watertemperatuur van {JOEP.temperature}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800 mb-2">Zonder poespas, concreet</p>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
                {JOEP_NO_FUSS.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Compact betekent wel een enkele harstank: tijdens de regeneratie ({JOEP.regenerationTime}) loopt het
            water via de bypass. {JOEP_NO_FUSS_POINTS.maintenance}. Heb je een groot huishouden of een hoog
            piekverbruik, laat dan vooraf checken of het formaat past. Meer over kleine ruimtes lees je in{' '}
            <Link href="/waterontharder/appartement" className="text-[#005F8A] underline">waterontharder voor een appartement</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Heb je een waterontharder nodig?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Dat hangt vooral af van je waterhardheid. Een ontharder voor het hele huis is doorgaans pas zinvol
            vanaf ongeveer {JOEP_MIN_DH} dH. Bij die hardheid, zoals in grote delen van Brabant, Limburg en
            Gelderland, zie je snel kalkaanslag op kranen, in de waterkoker en in de cv-ketel. Bij zachter water
            is een ontharder vooral een kwestie van comfort.
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
            hars vol zit, spoelt het apparaat hem schoon met pekel uit de zoutbak. Tijdens die regeneratie
            ({JOEP.regenerationTime}) loopt het water via de bypass.
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
            <li><strong>Zout:</strong> {JOEP.saltPerRegeneration} per regeneratie; de fabrikant rekent {JOEP.saltPerYear}. Bij harder water en meer verbruik is dat meer.</li>
            <li><strong>Water en stroom:</strong> {JOEP.waterPerRegeneration} per regeneratie en het beperkte verbruik van de besturing.</li>
            <li><strong>Service:</strong> {JOEP.serviceSubscription}.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Wat JOEP per jaar en over 5 en 10 jaar kost, rekenen we uit op{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline">waterontharder kosten</Link>.
            Marktprijzen van andere ontharders vind je op{' '}
            <Link href="/waterontharder/prijs" className="text-[#005F8A] underline">waterontharder prijs</Link>,
            en lees de vergelijking met een{' '}
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
            jouw kraanwater. Let op: {REGISTER} om de fabrieksgarantie te behouden.
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
              ['Laatste controle', `Prijzen en specificaties gecontroleerd op ${CHECKED}; pagina bijgewerkt in november 2026. Controleer actuele prijzen en voorwaarden bij de verkoper.`],
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
