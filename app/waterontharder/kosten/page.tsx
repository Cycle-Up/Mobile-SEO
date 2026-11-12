import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { JoepCTA } from '@/components/JoepCTA';
import { JOEP, JOEP_MARKET, JOEP_MIN_DH, JOEP_POSITIONING } from '@/lib/joep.mjs';

const URL = 'https://waterfilterplatform.nl/waterontharder/kosten';
const PUBLISHED = '2026-05-01';
const MODIFIED = '2026-11-10';
const TITLE = 'Waterontharder kosten per jaar en in totaal (2026)';
const DESCRIPTION =
  'Wat kost een waterontharder per jaar? Zout, water, stroom en onderhoud op een rij, plus de totaalkosten van JOEP over 5 en 10 jaar. Bijgewerkt november 2026.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', locale: 'nl_NL' },
};

/** Leest een getal uit een feitentekst in lib/joep.mjs, zodat de bron de enige plek blijft. */
function numberFrom(text: string, re: RegExp): number {
  const m = text.match(re);
  if (!m) throw new Error(`Kan geen getal lezen uit: ${text}`);
  return Number(m[1].replace(/\./g, '').replace(',', '.'));
}

const euro = (n: number) => `${Math.round(n).toLocaleString('nl-NL')} euro`;
const fmtYears = (n: number) => n.toLocaleString('nl-NL', { maximumFractionDigits: 1 });

// JOEP-feiten (bron: lib/joep.mjs).
const DEVICE = Number(JOEP.devicePriceSchema);
const INSTALLED = Number(JOEP.installedPriceSchema);
const SALT_KG_PER_PERSON = numberFrom(JOEP.saltPerYear, /circa (\d+) kg/);
const SALT_REF_DH = numberFrom(JOEP.saltPerYear, /bij (\d+) dH/);
const SERVICE_PER_MONTH = numberFrom(JOEP.serviceSubscription, /(\d+,\d+) euro per maand/);

// Aanname van de redactie voor onthardingszout in zakken van 25 kg; controleer de prijs van je eigen zak.
const SALT_PRICE_LOW = 0.3;
const SALT_PRICE_HIGH = 0.5;
const SALT_PRICE_LABEL = '0,30 tot 0,50 euro per kg';

const PERSONS = 4;
const saltKg = (persons: number, years = 1) => SALT_KG_PER_PERSON * persons * years;
/** Bandbreedte van een vast bedrag plus de theoretische zoutkosten, bij de lage en hoge zoutprijs. */
const saltRange = (persons: number, years = 1, base = 0) =>
  `${euro(base + saltKg(persons, years) * SALT_PRICE_LOW)} tot ${euro(base + saltKg(persons, years) * SALT_PRICE_HIGH)}`;
const saltCost = (persons: number, years = 1) => saltRange(persons, years);
// Het serviceabonnement is optioneel en loopt pas vanaf het tweede jaar.
const SERVICE_PER_YEAR = SERVICE_PER_MONTH * 12;
const service = (years: number) => SERVICE_PER_YEAR * Math.max(0, years - 1);
const total = (years: number, withService: boolean) =>
  saltRange(PERSONS, years, INSTALLED + (withService ? service(years) : 0));

// Gangbare huurprijs, gelijk aan /waterontharder/huren en /waterontharder/prijs.
const HUUR_LOW = 15;
const HUUR_HIGH = 35;
const HUUR_RANGE = `${HUUR_LOW} tot ${HUUR_HIGH} euro`;
// Rekenvoorbeeld binnen die bandbreedte, in euro per maand.
const HUUR_EXAMPLE = 25;
const HUUR_PER_YEAR = HUUR_EXAMPLE * 12;

const QUICK_ANSWER = `Een waterontharder kost eenmalig doorgaans ${JOEP_MARKET.typicalInstalledRange} inclusief installatie. Daarna betaal je vooral zout, plus wat water en stroom voor de regeneratie en eventueel een servicebeurt. Voor JOEP rekent de fabrikant theoretisch met circa ${SALT_KG_PER_PERSON} kg zout per persoon per jaar bij ${SALT_REF_DH} dH: voor ${PERSONS} personen ${saltKg(PERSONS)} kg, ofwel ${saltCost(PERSONS)} per jaar bij een zoutprijs van ${SALT_PRICE_LABEL}. Over 5 jaar kost JOEP compleet geïnstalleerd dan theoretisch ${total(5, false)}, zonder het optionele serviceabonnement. Bij harder water verbruik je meer zout.`;

const faqItems = [
  {
    question: 'Wat kost een waterontharder per jaar?',
    answer: `De jaarlijkse kosten bestaan vooral uit zout, plus wat water en stroom voor de regeneratie en eventueel een servicebeurt of abonnement. Hoeveel zout je nodig hebt, hangt af van je waterhardheid, je verbruik en het apparaat. Voor JOEP noemt de fabrikant theoretisch circa ${SALT_KG_PER_PERSON} kg per persoon per jaar bij ${SALT_REF_DH} dH; voor ${PERSONS} personen is dat ${saltKg(PERSONS)} kg, ofwel ${saltCost(PERSONS)} bij een zoutprijs van ${SALT_PRICE_LABEL}. Bij harder water is het meer.`,
  },
  {
    question: 'Wat kost een waterontharder in totaal over 5 jaar?',
    answer: `Reken de aanschaf inclusief installatie plus vijf jaar zout en eventueel onderhoud. Voor JOEP (${JOEP.installedPrice} compleet geïnstalleerd) komt dat voor ${PERSONS} personen theoretisch op ${total(5, false)} zonder serviceabonnement, of ${total(5, true)} met het optionele abonnement vanaf het tweede jaar. Dat is gerekend bij ${SALT_REF_DH} dH; bij harder water ligt het hoger.`,
  },
  {
    question: 'Is huren of kopen van een waterontharder voordeliger?',
    answer: `Huren kost doorgaans ${HUUR_RANGE} per maand, vaak inclusief onderhoud maar exclusief zout. Na 5 jaar heb je dan ${(HUUR_LOW * 60).toLocaleString('nl-NL')} tot ${euro(HUUR_HIGH * 60)} aan huur betaald zonder dat het apparaat van jou is. Het omslagpunt reken je uit door de koopprijs inclusief installatie te delen door de huur per jaar: voor JOEP (${JOEP.installedPrice} compleet geïnstalleerd) bij ${HUUR_EXAMPLE} euro per maand is dat ongeveer ${fmtYears(INSTALLED / HUUR_PER_YEAR)} jaar. Woon je langer op hetzelfde adres, dan is kopen goedkoper. Huren past als je geen grote uitgave vooraf wilt of niet weet hoe lang je blijft.`,
  },
  {
    question: 'Verdient een waterontharder zichzelf terug?',
    answer: 'Dat hangt af van je waterhardheid, je verbruik en je apparaten. Een ontharder voorkomt nieuwe kalkaanslag, waardoor je minder ontkalkt en apparaten minder last van kalk hebben. Hoeveel dat in euro oplevert, verschilt sterk per huishouden; wij noemen daarom geen vaste besparing. Reken het zelf door: deel de aanschafprijs door wat je per jaar netto verwacht te besparen, na aftrek van zout en onderhoud.',
  },
  {
    question: 'Zijn er subsidies voor een waterontharder in Nederland?',
    answer: 'Voor zover wij weten zijn er geen landelijke subsidies specifiek voor waterontharders. Controleer de website van je gemeente voor eventuele lokale regelingen.',
  },
];

const jaarPosten: [string, string][] = [
  ['Zout', 'De grootste terugkerende post. Hoeveel hangt af van je waterhardheid, je verbruik en hoe zuinig het apparaat regenereert. Koop onthardingszout in zakken van 25 kg; tabletten zijn het meest gangbaar.'],
  ['Water voor regeneratie', `Elke regeneratie spoelt water door het apparaat. Bij JOEP is dat ${JOEP.waterPerRegeneration} per keer. Bij de huidige waterprijzen is dat een kleine post.`],
  ['Stroom', 'Een elektronische ontharder gebruikt alleen stroom voor de besturing en het ventiel. Op jaarbasis gaat het om enkele euro\'s.'],
  ['Onderhoud of service', `Bij veel merken optioneel, soms verplicht voor de garantie. Kijk dat na voor je koopt. Bij JOEP: ${JOEP.serviceSubscription}.`],
];

export default function WaterontharderKostenPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: TITLE,
          description: DESCRIPTION,
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          url: URL,
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Kosten waterontharder', url: URL },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Kosten waterontharder</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder kosten: wat betaal je per jaar en in totaal?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een waterontharder koop je voor jaren. Naast de aanschafprijs betaal je elk jaar voor zout en
            soms voor onderhoud. Hieronder rekenen we de jaarlijkse kosten uit, laten we zien wat JOEP over
            5 en 10 jaar kost en leggen we uit hoe je zelf de terugverdientijd bepaalt.
          </p>
        </section>

        <div className="space-y-4 mb-6">
          <MethodologyBadge
            lastReviewed={MODIFIED}
            sources={['Fabrikant AquaSens (zoutverbruik JOEP)', 'PureAqua (JOEP-prijs)', ...JOEP_MARKET.rangeSources]}
          />
          <AuthorBox datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>

        <QuickAnswer question="Wat kost een waterontharder per jaar?" answer={QUICK_ANSWER} />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat kost een waterontharder per jaar?
        </h2>
        <p className="text-gray-700 mb-4">
          Na de aanschaf heb je vier soorten terugkerende kosten. Zout is verreweg de belangrijkste; de
          rest is klein of optioneel.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {jaarPosten.map(([titel, tekst]) => (
            <div key={titel} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">{titel}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{tekst}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zoutkosten van JOEP per jaar, volgens de fabrikant
        </h2>
        <p className="text-gray-700 mb-4">
          De fabrikant van JOEP rekent {JOEP.saltPerYear}. Per regeneratie gebruikt JOEP{' '}
          {JOEP.saltPerRegeneration} zout; de zoutbak houdt {JOEP.saltTank}. Dat geeft deze theoretische
          jaarkosten:
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Huishouden</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zout per jaar (theoretisch)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zoutkosten per jaar</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((n, i) => (
                <tr key={n} className={i % 2 === 1 ? 'bg-gray-50' : undefined}>
                  <td className="border border-gray-300 px-3 py-2 font-medium">{n} {n === 1 ? 'persoon' : 'personen'}</td>
                  <td className="border border-gray-300 px-3 py-2">circa {saltKg(n)} kg</td>
                  <td className="border border-gray-300 px-3 py-2">{saltCost(n)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-6">
          Rekenvoorbeeld bij {SALT_REF_DH} dH volgens de opgave van de fabrikant, met een zoutprijs van{' '}
          {SALT_PRICE_LABEL} (onze aanname; controleer de prijs van je eigen zak). Een ontharder voor het
          hele huis is doorgaans pas zinvol vanaf ongeveer {JOEP_MIN_DH} dH, en bij harder water verbruik je
          meer zout. Zie deze bedragen daarom als een theoretische ondergrens, niet als belofte.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Totaalkosten van JOEP over 5 en 10 jaar
        </h2>
        <p className="text-gray-700 mb-4">
          Wat kost JOEP alles bij elkaar? Hieronder voor een huishouden van {PERSONS} personen, met de
          theoretische zoutkosten van hierboven. Water en stroom voor de regeneratie zijn klein en niet
          meegerekend.
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Post</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Over 5 jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Over 10 jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">JOEP compleet geïnstalleerd</td>
                <td className="border border-gray-300 px-3 py-2">{JOEP.installedPrice}</td>
                <td className="border border-gray-300 px-3 py-2">{JOEP.installedPrice}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Zout ({PERSONS} personen, theoretisch)</td>
                <td className="border border-gray-300 px-3 py-2">{saltCost(PERSONS, 5)}</td>
                <td className="border border-gray-300 px-3 py-2">{saltCost(PERSONS, 10)}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Serviceabonnement (optioneel, vanaf jaar 2)</td>
                <td className="border border-gray-300 px-3 py-2">{euro(service(5))}</td>
                <td className="border border-gray-300 px-3 py-2">{euro(service(10))}</td>
              </tr>
              <tr className="bg-[#E0F2FE] font-semibold text-[#003F5C]">
                <td className="border border-gray-300 px-3 py-2">Totaal zonder abonnement</td>
                <td className="border border-gray-300 px-3 py-2">{total(5, false)}</td>
                <td className="border border-gray-300 px-3 py-2">{total(10, false)}</td>
              </tr>
              <tr className="bg-[#E0F2FE] font-semibold text-[#003F5C]">
                <td className="border border-gray-300 px-3 py-2">Totaal met abonnement</td>
                <td className="border border-gray-300 px-3 py-2">{total(5, true)}</td>
                <td className="border border-gray-300 px-3 py-2">{total(10, true)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Prijzen bij PureAqua, bevestigd op 24 september 2026. Installeer je zelf, dan betaal je{' '}
          {JOEP.devicePrice} in plaats van {JOEP.installedPrice}: {euro(INSTALLED - DEVICE)} minder.
          Fabrieksgarantie: {JOEP.manufacturerWarranty}.
        </p>
        <p className="text-gray-700 mb-6">
          Ter vergelijking: complete ontharders kosten doorgaans {JOEP_MARKET.typicalInstalledRange}{' '}
          inclusief installatie, en een vergelijkbaar compact merkmodel als de{' '}
          {JOEP_MARKET.comparable.name} circa {JOEP_MARKET.comparable.installedPrice}. {JOEP_POSITIONING} Meer
          over JOEP lees je in onze{' '}
          <Link href="/joep-waterontharder" className="text-[#005F8A] underline">JOEP-koopgids</Link>.
        </p>

        <JoepCTA context="kosten" content="waterontharder-kosten-joep" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanschafkosten: wat betaal je eenmalig?
        </h2>
        <p className="text-gray-700 mb-6">
          De eenmalige kosten zijn het apparaat plus de installatie op de hoofdleiding, met bypass en een
          afvoer voor het spoelwater. Bij JOEP is dat {JOEP.devicePrice} voor het apparaat en{' '}
          {euro(INSTALLED - DEVICE)} voor de installatie, samen {JOEP.installedPrice}. Marktprijzen per
          segment, wat de prijs bepaalt en waar je op let bij een goedkope ontharder lees je op{' '}
          <Link href="/waterontharder/prijs" className="text-[#005F8A] underline">waterontharder prijs</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kopen of huren: wat kost het over 5 jaar?
        </h2>
        <p className="text-gray-700 mb-4">
          Huren kost doorgaans {HUUR_RANGE} per maand, vaak inclusief onderhoud maar exclusief zout. Hieronder
          vergelijken we JOEP kopen met huren voor {HUUR_EXAMPLE} euro per maand, voor {PERSONS} personen. Het zout
          betaal je in alle drie de gevallen zelf, dus we tellen het overal vanaf jaar 1 mee.
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Scenario</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaar 1</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Jaar 2 tot 5, per jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Totaal 5 jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">JOEP kopen, compleet geïnstalleerd, zonder abonnement</td>
                <td className="border border-gray-300 px-3 py-2">{saltRange(PERSONS, 1, INSTALLED)}</td>
                <td className="border border-gray-300 px-3 py-2">{saltRange(PERSONS, 1)} (zout)</td>
                <td className="border border-gray-300 px-3 py-2">{total(5, false)}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">JOEP kopen, met optioneel serviceabonnement</td>
                <td className="border border-gray-300 px-3 py-2">{saltRange(PERSONS, 1, INSTALLED)}</td>
                <td className="border border-gray-300 px-3 py-2">{saltRange(PERSONS, 1, SERVICE_PER_YEAR)} (zout en abonnement)</td>
                <td className="border border-gray-300 px-3 py-2">{total(5, true)}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Huren ({HUUR_EXAMPLE} euro per maand, zout apart)</td>
                <td className="border border-gray-300 px-3 py-2">{saltRange(PERSONS, 1, HUUR_PER_YEAR)}</td>
                <td className="border border-gray-300 px-3 py-2">{saltRange(PERSONS, 1, HUUR_PER_YEAR)} (huur en zout)</td>
                <td className="border border-gray-300 px-3 py-2">{saltRange(PERSONS, 5, HUUR_PER_YEAR * 5)} (geen eigendom)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Rekenvoorbeeld bij {SALT_REF_DH} dH met de theoretische zoutkosten van hierboven ({SALT_PRICE_LABEL}).
          De huur van {HUUR_EXAMPLE} euro per maand is een voorbeeld binnen de gangbare {HUUR_RANGE}; het
          serviceabonnement van JOEP loopt vanaf het tweede jaar.
        </p>
        <p className="text-gray-700 mb-6">
          Over 5 jaar is huren in dit voorbeeld goedkoper, maar het apparaat is dan niet van jou. Zonder
          abonnement is kopen na ongeveer {fmtYears(INSTALLED / HUUR_PER_YEAR)} jaar voordeliger. Vergelijk je met
          het abonnement erbij, omdat huur vaak onderhoud bevat, dan ligt het omslagpunt rond{' '}
          {fmtYears((INSTALLED - SERVICE_PER_YEAR) / (HUUR_PER_YEAR - SERVICE_PER_YEAR))} jaar. Hoe langer je blijft
          wonen, hoe voordeliger kopen wordt. Huren past als je niet weet of je lang op hetzelfde adres blijft,
          of als je installatie en onderhoud wilt uitbesteden. Lees meer op{' '}
          <Link href="/waterontharder/huren" className="text-[#005F8A] underline">waterontharder huren</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat levert een waterontharder op?
        </h2>
        <p className="text-gray-700 mb-4">
          Tegenover de kosten staat dat zacht water geen nieuwe kalkaanslag geeft. Wat dat oplevert, merk je
          op drie plekken:
        </p>
        <div className="space-y-4 mb-4">
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Minder ontkalken en schoonmaken</h3>
            <p className="text-gray-700 text-sm">
              Geen kalkranden op kranen, douchewand en tegels, en geen ontkalker meer voor waterkoker en
              koffiezetapparaat. Zacht water schuimt ook makkelijker, waardoor je met minder zeep en
              wasmiddel toe kunt.
            </p>
          </div>
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Cv-ketel en boiler</h3>
            <p className="text-gray-700 text-sm">
              Kalk in de warmtewisselaar maakt een ketel minder efficiënt. Een ontharder voorkomt nieuwe
              afzetting; bestaande kalk verdwijnt daarmee niet vanzelf.
            </p>
          </div>
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Apparaten</h3>
            <p className="text-gray-700 text-sm">
              Wasmachine, vaatwasser en waterkoker hebben minder last van kalk, wat storingen door
              verkalking kan voorkomen.
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Wij noemen hier bewust geen vaste besparing in euro of procenten. Die hangt sterk af van je
          waterhardheid, je verbruik en je apparaten, en we hebben haar niet zelf gemeten. In een gebied met
          zacht water levert een ontharder weinig op.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Terugverdientijd zelf berekenen
        </h2>
        <p className="text-gray-700 mb-4">
          Wil je weten of een ontharder zich voor jou terugverdient? Zo reken je het uit:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>Zoek de waterhardheid van je adres op. Een ontharder voor het hele huis is doorgaans pas zinvol vanaf ongeveer {JOEP_MIN_DH} dH.</li>
          <li>Schat wat je per jaar uitgeeft aan ontkalker, extra schoonmaakmiddel en kalkgerelateerde reparaties.</li>
          <li>Trek daar de jaarlijkse kosten van de ontharder vanaf (zout, en eventueel service).</li>
          <li>Deel de aanschafprijs inclusief installatie door dat netto bedrag per jaar: dat is je terugverdientijd in jaren.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Controleer de hardheid via{' '}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</Link>,
          vergelijk aanbieders op{' '}
          <Link href="/waterontharder/vergelijken" className="text-[#005F8A] underline">waterontharders vergelijken</Link>{' '}
          en lees wat erbij komt kijken op{' '}
          <Link href="/waterontharder/installeren" className="text-[#005F8A] underline">waterontharder installeren</Link>.
        </p>

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="waterontharder-kosten-cta"
          label="Bekijk het aanbod waterontharders"
          title="Een waterontharder uitkiezen?"
          sub="Bekijk het aanbod waterontharders bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterontharder kosten
          </h2>
          {faqItems.map(faq => (
            <details key={faq.question} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder uitleg</Link>,{' '}
          <Link href="/waterontharder/prijs" className="text-[#005F8A] underline">waterontharder prijs</Link>,{' '}
          <Link href="/beste-waterontharder-2026" className="text-[#005F8A] underline">beste waterontharder 2026</Link>,{' '}
          <Link href="/waterontharder/huren" className="text-[#005F8A] underline">waterontharder huren</Link> en{' '}
          <Link href="/kennisbank/wat-kost-waterontharder-per-jaar" className="text-[#005F8A] underline">wat kost een waterontharder per jaar</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Budget keuzehulp waterontharder</h3>
              <p className="text-sm text-gray-600">Totale kosten: aanschaf, zout, water, energie en onderhoud over 10 jaar vergeleken.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: bedrijfskosten</h3>
              <p className="text-sm text-gray-600">Hoe de hars-regeneratie het zoutverbruik bepaalt en daarmee de operationele kosten.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
