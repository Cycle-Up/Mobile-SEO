import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { QuickAnswer } from '@/components/QuickAnswer';
import { JoepCTA } from '@/components/JoepCTA';
import { JoepRecommendation } from '@/components/JoepRecommendation';
import { JOEP, JOEP_MARKET, JOEP_MIN_DH, JOEP_POSITIONING } from '@/lib/joep.mjs';
import { FOUR_IN_ONE, THREE_WAY } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';
import { FACTS } from '@/lib/facts.mjs';

const PUBLISHED = '2026-05-29';
const MODIFIED = '2026-11-10';
const PAGE_URL = 'https://waterfilterplatform.nl/waterontharder/kopen';

const TITLE = 'Waterontharder kopen: koopgids 2026';
const DESCRIPTION =
  'Waterontharder kopen? Check eerst hardheid, capaciteit, installatie en kosten over tien jaar. Met eerlijke alternatieven en JOEP als onze keuze, met prijs.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Waterontharder kopen: waar let je op en welke kiezen wij?',
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
  },
};

const eur = (n: number) => Math.round(n).toLocaleString('nl-NL');
const DEVICE = Number(JOEP.devicePriceSchema);
const INSTALLED = Number(JOEP.installedPriceSchema);
// Installatiemeerprijs bij PureAqua: verschil tussen compleet geïnstalleerd en alleen het apparaat.
const joepInstallatie = eur(INSTALLED - DEVICE);
// Optioneel serviceabonnement uit lib/joep.mjs ("... 8,49 euro per maand"), loopt vanaf het tweede jaar.
const serviceMatch = JOEP.serviceSubscription.match(/(\d+,\d+) euro per maand/);
if (!serviceMatch) throw new Error(`Kan geen abonnementsprijs lezen uit: ${JOEP.serviceSubscription}`);
const SERVICE_PER_MONTH_LABEL = serviceMatch[1];
const SERVICE_PER_MONTH = Number(SERVICE_PER_MONTH_LABEL.replace(',', '.'));
const SERVICE_MONTHS_10Y = 9 * 12;
const service10 = SERVICE_PER_MONTH * SERVICE_MONTHS_10Y;
// Duur van een regeneratie uit lib/joep.mjs ("circa 1 uur, standaard ..."): alleen het deel voor de komma.
const REGENERATIE_DUUR = JOEP.regenerationTime.split(',')[0];
const PFAS_ADVIES = FACTS.pfasRivmAdvieswaarde.value;
const EU_RICHTLIJN = FACTS.euRichtlijn.value;
const NOS_GREENPEACE = 'https://nos.nl/artikel/2632030';

const quickAnswer = `Een waterontharder kopen is doorgaans zinvol vanaf ongeveer ${JOEP_MIN_DH} dH. Let op vier dingen: capaciteit en doorstroom, installatie op de hoofdleiding (met afvoer en meestal een stopcontact), zout- en waterverbruik per regeneratie en de totale kosten over tien jaar. Complete ontharders kosten doorgaans ${JOEP_MARKET.typicalInstalledRange} geïnstalleerd. Onze keuze: ${JOEP_POSITIONING} Bij PureAqua kost JOEP ${JOEP.installedPrice} compleet geïnstalleerd, of ${JOEP.devicePrice} als je zelf installeert. Wil je alleen zuiver drinkwater, kies dan osmose voor de keukenkraan.`;

const faqItems = [
  {
    question: 'Welke waterontharder moet ik kopen?',
    answer: `Dat hangt af van je situatie. Voor een huishouden met hard water dat kalk in het hele huis wil aanpakken, is onze keuze de JOEP waterontharder, een compacte ionenwisselaar met zout die ${JOEP.flow} levert. Woon je in een huurwoning zonder toestemming voor de hoofdleiding, of wil je vooral zuiver drinkwater, dan is een osmosesysteem voor de keukenkraan praktischer.`,
  },
  {
    question: 'Hoeveel kost een waterontharder inclusief installatie?',
    answer: `Een complete waterontharder kost doorgaans ${JOEP_MARKET.typicalInstalledRange} inclusief installatie; kwaliteitsmodellen zitten meestal tussen ${JOEP_MARKET.typicalQualityRange}. De JOEP kost bij PureAqua ${JOEP.devicePrice} als los apparaat of ${JOEP.installedPrice} compleet geïnstalleerd. Daarna betaal je vooral zout, en eventueel een serviceabonnement.`,
  },
  {
    question: 'Welke capaciteit heeft een waterontharder nodig voor een gezin van 4 personen?',
    answer: `Dat hangt af van de hardheid en je piekverbruik: hoeveel water er tegelijk loopt als bijvoorbeeld twee douches en de wasmachine aanstaan. Kijk daarom naar de maximale doorstroom per uur en laat bij twijfel meten of rekenen. Ter vergelijking: JOEP levert ${JOEP.flow}. Hoe je de capaciteit inschat, lees je in onze uitleg over capaciteit berekenen.`,
  },
  {
    question: 'Kan ik een waterontharder zelf installeren?',
    answer: `Als je handig bent met leidingwerk wel. Een ontharder komt op de hoofdwaterleiding, met bypass-kranen en een afvoer voor het spoelwater. Twijfel je, laat het dan een installateur doen. Bij JOEP scheelt zelf installeren bij PureAqua ${joepInstallatie} euro ten opzichte van de geïnstalleerde prijs.`,
  },
  {
    question: 'Wanneer is omgekeerde osmose beter dan een waterontharder?',
    answer: `Als het je vooral om het drinkwater gaat, als je huurt en de hoofdleiding niet mag aanpassen, of als je naast kalk ook andere stoffen uit je drinkwater wilt halen. Osmose zuivert alleen het water aan de keukenkraan en voegt geen natrium toe. Zonder installatie kan het ook, bijvoorbeeld met het ${COUNTERTOP.shortName} op het aanrecht (${COUNTERTOP.price}). Een waterontharder onthardt juist al het water in huis, inclusief douche- en waswater.`,
  },
];

const soorten = [
  {
    naam: 'Ionenwisselaar met zout',
    subtitel: 'Klassieke ontharding',
    prijs: `${JOEP_MARKET.typicalInstalledRange} geïnstalleerd`,
    effectiviteit: 'Maakt het water echt zacht',
    jaarlijkseKosten: 'Vooral zout',
    regeneratie: 'Zout en spoelwater',
    voordelen: [
      'Ontkalkt al het water in huis (douche, waswater, leidingen)',
      'Bewezen techniek, resthardheid instelbaar',
      'Beschermt cv-ketel, wasmachine en vaatwasser tegen kalk',
      'Vraaggestuurde modellen regenereren alleen als het nodig is',
    ],
    nadelen: [
      'Iets meer natrium in het water',
      'Zout bijvullen en spoelwater bij elke regeneratie',
      'Installatie op de hoofdleiding nodig',
      'In een huurwoning alleen met toestemming',
    ],
    beste_voor: `Huishoudens met hard water (vanaf circa ${JOEP_MIN_DH} dH) in een koopwoning`,
    highlight: true,
  },
  {
    naam: 'Zoutloze waterverbeteraar (TAC)',
    subtitel: 'Template Assisted Crystallization',
    prijs: 'Meestal goedkoper dan een ontharder met zout',
    effectiviteit: 'Beperkt aanslag, verwijdert geen kalk',
    jaarlijkseKosten: 'Laag; patroon af en toe vervangen',
    regeneratie: 'Geen regeneratie',
    voordelen: [
      'Geen zout en geen spoelwater',
      'Geen extra natrium in het water',
      'Weinig onderhoud',
    ],
    nadelen: [
      'Water blijft hard; de kalk zit er nog in',
      'Minder effect bij zeer hard water',
      'Lost bestaande kalkaanslag niet op',
    ],
    beste_voor: 'Lichte kalklast en wie geen zout wil gebruiken',
    highlight: false,
  },
  {
    naam: 'Ontharder met kaliumchloride',
    subtitel: 'Variant op de ionenwisselaar',
    prijs: 'Als een ionenwisselaar, plus duurder zout',
    effectiviteit: 'Maakt het water echt zacht',
    jaarlijkseKosten: 'Hoger dan met gewoon onthardingszout',
    regeneratie: 'Kaliumchloride in plaats van keukenzout',
    voordelen: [
      'Voegt kalium toe in plaats van natrium',
      'Zelfde onthardend effect als een gewone ionenwisselaar',
    ],
    nadelen: [
      'Kaliumzout is duurder en minder goed verkrijgbaar',
      'Bij nierproblemen of een medisch dieet eerst overleggen met je arts',
    ],
    beste_voor: 'Wie natrium in het water wil vermijden',
    highlight: false,
  },
];

const merken = [
  {
    naam: 'Kinetico',
    href: '/kinetico-waterontharder',
    kenmerk: 'Twin-tank, werkt zonder stroom op waterkracht',
    sterk: 'Continu zacht water, ook tijdens regeneratie',
    aandacht: 'Prijs en service lopen via de dealer; vraag een offerte',
  },
  {
    naam: 'BWT',
    href: '/bwt-waterontharder',
    kenmerk: 'Breed assortiment, waaronder de compacte Perla Silk',
    sterk: 'Veel keuze in formaten, ook compacte modellen',
    aandacht: `Een vergelijkbaar compact model (${JOEP_MARKET.comparable.name}) kost circa ${JOEP_MARKET.comparable.installedPrice} geïnstalleerd`,
  },
  {
    naam: 'Harvey',
    href: '/harvey-waterontharder',
    kenmerk: 'Britse twin-tank, compact',
    sterk: 'Compact formaat en continu zacht water',
    aandacht: 'Britse fabrikant; vraag naar service en onderdelen in jouw regio',
  },
  {
    naam: 'AquaCell',
    href: '/aquacell-waterontharder',
    kenmerk: 'Bekende naam in waterontharding in Nederland',
    sterk: 'Breed verkrijgbaar; JOEP werd ook via AquaCell verkocht',
    aandacht: 'Verkocht door PureAqua, waaraan wij gelieerd zijn',
  },
];

const kostentabel = [
  { post: 'Complete ontharder inclusief installatie', eenmalig: JOEP_MARKET.typicalInstalledRange, perjaar: 'n.v.t.' },
  { post: 'Kwaliteitsmodellen inclusief installatie', eenmalig: JOEP_MARKET.typicalQualityRange, perjaar: 'n.v.t.' },
  { post: 'Topprijsklasse in de markt', eenmalig: JOEP_MARKET.topRange, perjaar: 'n.v.t.' },
  { post: 'Zout', eenmalig: 'n.v.t.', perjaar: 'Afhankelijk van hardheid en verbruik' },
  { post: 'Service of onderhoud', eenmalig: 'n.v.t.', perjaar: 'Vaak optioneel, verschilt per merk' },
];

export default function WaterontharderKopenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontharder kopen: waar let je op en welke kiezen wij?',
          description: DESCRIPTION,
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          lastReviewed: MODIFIED,
          url: PAGE_URL,
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Kopen', url: PAGE_URL },
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
            <span>Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder kopen: waar let je op en welke kiezen wij?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Overweeg je een <strong>waterontharder te kopen</strong>? Check eerst of je water hard genoeg is.
            Daarna draait het om vier vragen: past de capaciteit bij je huishouden, kun je hem goed aansluiten,
            hoeveel zout en water gebruikt hij, en wat kost hij over tien jaar? In deze koopgids lopen we die
            vragen langs, met de alternatieven en onze eigen keuze.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterhardheid"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waterhardheid in mijn gemeente
            </Link>
            <Link
              href="#koopcriteria"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Naar de koopcriteria
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <div>
          <AuthorBox datePublished={PUBLISHED} dateModified={MODIFIED} />
          <QuickAnswer question="Waar let je op als je een waterontharder koopt?" answer={quickAnswer} />
        </div>

        <JoepRecommendation content="waterontharder-kopen-aanbeveling" />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#eerst-checken" className="hover:underline">Eerst checken: heb je hem nodig?</a></li>
            <li><a href="#koopcriteria" className="hover:underline">Koopcriteria</a></li>
            <li><a href="#joep-criteria" className="hover:underline">JOEP langs de criteria</a></li>
            <li><a href="#soorten" className="hover:underline">Soorten waterontharders</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten over tien jaar</a></li>
            <li><a href="#merken" className="hover:underline">Merkenoverzicht</a></li>
            <li><a href="#wanneer-osmose" className="hover:underline">Wanneer osmose beter is</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Eerst checken */}
        <section id="eerst-checken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Eerst checken: heb je een waterontharder nodig?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een ontharder is volgens ons pas de moeite waard vanaf ongeveer {JOEP_MIN_DH} dH. Zoek de hardheid van
            jouw kraanwater op bij{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>
            . Is je water zachter, dan levert een ontharder weinig op. Nederlands kraanwater voldoet aan de
            wettelijke normen; een ontharder koop je voor minder kalk en minder onderhoud, niet voor je gezondheid.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="border border-gray-100 rounded-xl p-3">
              <strong>Kalk in het hele huis, koopwoning:</strong> een ionenwisselaar met zout. Lees verder op deze
              pagina.
            </li>
            <li className="border border-gray-100 rounded-xl p-3">
              <strong>Liever geen zout:</strong> een{' '}
              <Link href="/waterontharder/zoutloos" className="text-[#005F8A] underline hover:no-underline">
                zoutloze waterontharder
              </Link>{' '}
              beperkt aanslag, maar het water blijft hard.
            </li>
            <li className="border border-gray-100 rounded-xl p-3">
              <strong>Alleen zuiver drinkwater:</strong>{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                omgekeerde osmose
              </Link>{' '}
              voor de keukenkraan. Zie{' '}
              <a href="#wanneer-osmose" className="text-[#005F8A] underline hover:no-underline">
                wanneer osmose beter is
              </a>
              .
            </li>
            <li className="border border-gray-100 rounded-xl p-3">
              <strong>Huurwoning:</strong> vraag eerst{' '}
              <Link href="/waterontharder/verhuurder" className="text-[#005F8A] underline hover:no-underline">
                toestemming aan de verhuurder
              </Link>
              , of kijk naar{' '}
              <Link href="/waterontharder/huren" className="text-[#005F8A] underline hover:no-underline">
                huren in plaats van kopen
              </Link>
              .
            </li>
          </ul>
        </section>

        {/* Koopcriteria */}
        <section id="koopcriteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Koopcriteria: waar let je op bij een waterontharder?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Een waterontharder koop je voor jaren. Let bij de aanschaf op deze vier punten.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Capaciteit en doorstroom',
                inhoud:
                  'Een ontharder moet de hoeveelheid water aankunnen die tegelijk door je huis loopt, bijvoorbeeld twee douches en een wasmachine. Kijk naar de maximale doorstroom per uur en naar hoe vaak hij bij jouw hardheid moet regenereren. Een te kleine ontharder regenereert vaak, gebruikt meer zout en laat bij piekverbruik hard water door.',
              },
              {
                nr: '2',
                titel: 'Zout- en waterverbruik per regeneratie',
                inhoud:
                  'Bij elke regeneratie gaan zout en spoelwater naar de afvoer. Vraag naar het verbruik per regeneratie en naar de regeling: een vraaggestuurd model regenereert alleen als het hars echt vol is, een tijdgestuurd model op vaste momenten. Vraag ook hoe groot de zoutbak is: dat bepaalt hoe vaak je moet bijvullen.',
              },
              {
                nr: '3',
                titel: 'Installatie en ruimte',
                inhoud:
                  'Een ionenwisselaar komt op de hoofdwaterleiding, met bypass-kranen voor onderhoud. Hij heeft een afvoer nodig voor het spoelwater en meestal een stopcontact. Meet vooraf de ruimte in de meterkast, bijkeuken of kelder, en check of je waterdruk binnen het bereik van het apparaat valt.',
              },
              {
                nr: '4',
                titel: 'Kosten over tien jaar, garantie en service',
                inhoud:
                  'Kijk niet alleen naar de aanschafprijs. Tel aanschaf, installatie, zout en eventueel een serviceabonnement bij elkaar op over tien jaar. Let ook op de garantie, vooral op het hars, en op of een abonnement verplicht is of optioneel.',
              },
            ].map(k => (
              <div key={k.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {k.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{k.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{k.inhoud}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Meer verdieping:{' '}
            <Link href="/waterontharder/capaciteit" className="text-[#005F8A] underline hover:no-underline">
              capaciteit berekenen
            </Link>{' '}
            en{' '}
            <Link href="/waterontharder/installeren" className="text-[#005F8A] underline hover:no-underline">
              waterontharder installeren
            </Link>
            .
          </p>
        </section>

        {/* JOEP langs de criteria */}
        <section id="joep-criteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">JOEP langs de koopcriteria</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Zo scoort onze keuze op dezelfde vier punten. Alle gegevens komen van de fabrikant (AquaSens) en de
            prijzen van PureAqua, gecontroleerd in september 2026.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Criterium</th>
                  <th className="text-left py-2.5 px-3 font-semibold">JOEP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterium: 'Capaciteit en doorstroom', joep: `${JOEP.flow}` },
                  {
                    criterium: 'Zout- en waterverbruik',
                    joep: `${JOEP.saltPerRegeneration} zout en ${JOEP.waterPerRegeneration} water per regeneratie; een regeneratie duurt ${REGENERATIE_DUUR}. Zoutverbruik: ${JOEP.saltPerYear}.`,
                  },
                  {
                    criterium: 'Installatie en ruimte',
                    joep: `Waterdruk ${JOEP.pressure}, watertemperatuur ${JOEP.temperature}; ${JOEP.power}.`,
                  },
                  {
                    criterium: 'Kosten, garantie en service',
                    joep: `Garantie: ${JOEP.manufacturerWarranty}. De kosten over tien jaar staan hieronder.`,
                  },
                ].map(r => (
                  <tr key={r.criterium} className="border-b border-gray-100 align-top">
                    <td className="py-2.5 px-3 font-medium">{r.criterium}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.joep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Formaat, zoutbak en de kanttekeningen bij JOEP staan in het blok &quot;Onze keuze 2026&quot; bovenaan
            deze pagina. Alle details lees je in onze{' '}
            <Link href={JOEP.reviewPath} className="text-[#005F8A] underline hover:no-underline">
              JOEP-koopgids
            </Link>
            .
          </p>
        </section>

        {/* Soorten */}
        <section id="soorten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Soorten waterontharders: met zout, zoutloos of kaliumchloride
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Niet elke waterontharder werkt hetzelfde. Dit zijn de drie typen die je in Nederland het vaakst
            tegenkomt.
          </p>
          <div className="space-y-5">
            {soorten.map(s => (
              <div
                key={s.naam}
                className={`rounded-2xl border p-5 ${s.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{s.naam}</h3>
                    <p className="text-sm text-gray-500">{s.subtitel}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A] text-sm">{s.prijs}</p>
                    {s.highlight && (
                      <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Haalt kalk echt weg</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-4">
                  <div className="bg-white/60 rounded-lg p-2">
                    <p className="text-gray-400 text-xs mb-0.5">Effect</p>
                    <p className="font-medium text-gray-800">{s.effectiviteit}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2">
                    <p className="text-gray-400 text-xs mb-0.5">Doorlopende kosten</p>
                    <p className="font-medium text-gray-800">{s.jaarlijkseKosten}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2 col-span-2 sm:col-span-1">
                    <p className="text-gray-400 text-xs mb-0.5">Regeneratie</p>
                    <p className="font-medium text-gray-800">{s.regeneratie}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-3">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Voordelen</p>
                    <ul className="space-y-0.5">
                      {s.voordelen.map(v => (
                        <li key={v} className="text-green-700 text-xs">✓ {v}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Nadelen</p>
                    <ul className="space-y-0.5">
                      {s.nadelen.map(n => (
                        <li key={n} className="text-gray-500 text-xs">- {n}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-600 border-t border-gray-200 pt-2 mt-2">
                  <span className="font-semibold">Past bij:</span> {s.beste_voor}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat kost een waterontharder over tien jaar?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Over tien jaar tellen drie posten op: de aanschaf met installatie, het zout en eventueel een
            serviceabonnement. Een lagere aanschafprijs betekent dus niet automatisch lagere kosten. Dit zijn de
            prijsklassen die we in de markt zien voor complete ontharders:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[460px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Eenmalig</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Doorlopend</th>
                </tr>
              </thead>
              <tbody>
                {kostentabel.map(r => (
                  <tr key={r.post} className="border-b border-gray-100">
                    <td className="py-2.5 px-3">{r.post}</td>
                    <td className="py-2.5 px-3 text-right">{r.eenmalig}</td>
                    <td className="py-2.5 px-3 text-right">{r.perjaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Prijsklassen: {JOEP_MARKET.rangeSources.join(' en ')}, peildatum september 2026.
          </p>
          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Rekenvoorbeeld: JOEP over tien jaar</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hieronder staat wat voor JOEP vaststaat: de prijs bij PureAqua en het optionele serviceabonnement van
            de fabrikant ({SERVICE_PER_MONTH_LABEL} euro per maand, vanaf het tweede jaar, dus negen jaar binnen
            de eerste tien). Zout laten we buiten het totaal, omdat dat afhangt van je hardheid en verbruik.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[460px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Post over tien jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Compleet geïnstalleerd</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Zelf installeren</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Aanschaf bij PureAqua</td>
                  <td className="py-2.5 px-3 text-right">{JOEP.installedPrice}</td>
                  <td className="py-2.5 px-3 text-right">{JOEP.devicePrice}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Serviceabonnement (optioneel, jaar 2 tot en met 10)</td>
                  <td className="py-2.5 px-3 text-right">circa {eur(service10)} euro</td>
                  <td className="py-2.5 px-3 text-right">circa {eur(service10)} euro</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-3">Zout</td>
                  <td className="py-2.5 px-3 text-right" colSpan={2}>variabel: afhankelijk van hardheid en verbruik</td>
                </tr>
                <tr className="bg-[#E0F2FE] font-semibold text-[#003F5C]">
                  <td className="py-2.5 px-3">Totaal zonder zout en zonder abonnement</td>
                  <td className="py-2.5 px-3 text-right">{eur(INSTALLED)} euro</td>
                  <td className="py-2.5 px-3 text-right">{eur(DEVICE)} euro</td>
                </tr>
                <tr className="bg-[#E0F2FE] font-semibold text-[#003F5C]">
                  <td className="py-2.5 px-3">Totaal zonder zout, met abonnement</td>
                  <td className="py-2.5 px-3 text-right">circa {eur(INSTALLED + service10)} euro</td>
                  <td className="py-2.5 px-3 text-right">circa {eur(DEVICE + service10)} euro</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Prijzen bij PureAqua, bevestigd op 24 september 2026.
            Fabrieksgarantie: {JOEP.manufacturerWarranty}.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Zoutverbruik bij JOEP: {JOEP.saltPerYear}; bij harder water ligt het hoger.
            Reken je eigen zoutkosten uit met de{' '}
            <Link href="/hulpmiddelen/waterontharder-zout-kosten" className="text-[#005F8A] underline hover:no-underline">
              rekenhulp voor zoutkosten
            </Link>
            . Een volledige rekensom met zout, voor 5 en 10 jaar, staat in{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline hover:no-underline">
              kosten van een waterontharder
            </Link>
            ; marktprijzen per type vind je bij{' '}
            <Link href="/waterontharder/prijs" className="text-[#005F8A] underline hover:no-underline">
              waterontharder prijs
            </Link>
            .
          </p>
        </section>

        {/* Merken */}
        <section id="merken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Andere merken: Kinetico, BWT, Harvey en AquaCell
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Naast onze keuze JOEP kom je in Nederland vaak deze merken tegen. Vergelijk bij twijfel meerdere
            offertes van installateurs; prijzen en servicevoorwaarden verschillen sterk, ook bij hetzelfde merk.
          </p>
          <div className="space-y-4">
            {merken.map(m => (
              <div key={m.naam} className="border border-gray-100 rounded-xl p-4 bg-white">
                <h3 className="font-bold text-gray-900 mb-1">
                  <Link href={m.href} className="hover:text-[#005F8A]">
                    {m.naam}
                  </Link>
                </h3>
                <p className="text-xs text-gray-500 mb-2 italic">{m.kenmerk}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs">Sterk punt: </span>
                    <span className="text-gray-700 text-xs">{m.sterk}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs">Let op: </span>
                    <span className="text-gray-700 text-xs">{m.aandacht}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Meer modellen naast elkaar zie je in{' '}
            <Link href="/waterontharder/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              waterontharders vergelijken
            </Link>{' '}
            en de{' '}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] underline hover:no-underline">
              koopgids beste waterontharder 2026
            </Link>
            .
          </p>
        </section>

        {/* Wanneer osmose beter is */}
        <section id="wanneer-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is omgekeerde osmose een betere keuze dan een waterontharder?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterontharder is niet voor iedereen de juiste oplossing. In deze situaties is een{' '}
            <strong>osmosesysteem</strong> voor de keukenkraan praktischer.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                situatie: 'Appartement of huurwoning',
                uitleg:
                  'Een ontharder op de hoofdleiding vraagt toestemming van de verhuurder en loodgieterswerk. Een osmosesysteem komt onder of op het aanrecht en neem je mee als je verhuist.',
              },
              {
                situatie: 'Klein huishouden dat vooral om drinkwater geeft',
                uitleg:
                  'Heb je vooral last van kalk in de waterkoker en de smaak van je drinkwater, dan is een volledige ontharder voor het hele huis vaak meer dan nodig.',
              },
              {
                situatie: 'Je wilt ook andere stoffen uit je drinkwater halen',
                uitleg:
                  `Een waterontharder verwijdert alleen kalk. Chloor, PFAS, medicijnresten en andere opgeloste stoffen blijven in het water. Omgekeerde osmose haalt het grootste deel daarvan uit je drinkwater. Nederlands kraanwater voldoet aan de wettelijke normen, ook aan de EU-norm van 100 nanogram per liter voor de som van 20 PFAS. Volgens een Greenpeace-analyse uit september 2026 zit wel ongeveer een derde van het drinkwater boven de strengere RIVM-advieswaarde van ${PFAS_ADVIES} nanogram PFOA-equivalenten per liter. Extra zuivering blijft een persoonlijke keuze.`,
                meer: true,
              },
              {
                situatie: 'Je volgt een natriumarm dieet',
                uitleg:
                  'Een ionenwisselaar voegt natrium toe aan het water, meer naarmate het water harder is. Osmosewater bevat juist heel weinig natrium. Volg je een medisch dieet, overleg dan met je arts.',
              },
            ].map(s => (
              <div key={s.situatie} className="flex gap-3 items-start border border-gray-100 rounded-xl p-4">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{s.situatie}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{s.uitleg}</p>
                  {s.meer && (
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">
                      Bron:{' '}
                      <a href={NOS_GREENPEACE} className="text-[#005F8A] underline hover:no-underline" rel="noopener">
                        NOS
                      </a>
                      . Wat dit betekent en welke filters PFAS verminderen, lees je in{' '}
                      <Link href="/pfas-water" className="text-[#005F8A] underline hover:no-underline">
                        PFAS in water
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#E0F2FE] to-white border border-[#005F8A]/20 rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Osmose bij PureAqua: drie routes</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-4 leading-relaxed">
              <li>
                <Link href={COUNTERTOP.reviewPath} className="text-[#005F8A] underline hover:no-underline">
                  {COUNTERTOP.shortName}
                </Link>{' '}
                ({COUNTERTOP.price}): {COUNTERTOP.installation}. Handig in een huurwoning.
              </li>
              <li>
                <Link href={THREE_WAY.reviewPath} className="text-[#005F8A] underline hover:no-underline">
                  {THREE_WAY.name}
                </Link>
                : osmose uit je eigen kraan, met The Source voor {THREE_WAY.sourcePrice} en een kraan van{' '}
                {THREE_WAY.tapPrice}.
              </li>
              <li>
                <Link href={FOUR_IN_ONE.reviewPath} className="text-[#005F8A] underline hover:no-underline">
                  {FOUR_IN_ONE.name}
                </Link>{' '}
                ({FOUR_IN_ONE.price}): {FOUR_IN_ONE.functions}.
              </li>
            </ul>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose filter kopen: welk systeem past? →
            </Link>
          </div>
        </section>

        <JoepCTA context="hard-water" content="waterontharder-kopen-joep" />

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="waterontharder-kopen-shopcta"
          title="Klaar om een waterontharder te kiezen?"
          sub="Bekijk het actuele aanbod waterontharders bij onze partner PureAqua en vergelijk capaciteit, type en prijs."
        />

        <CTABanner context="waterhardheid" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontharder', label: 'Waterontharder: wat het doet, wat het kost en onze keuze' },
              { href: JOEP.reviewPath, label: 'JOEP waterontharder: specificaties, prijs en voor wie' },
              { href: '/beste-waterontharder-2026', label: 'Beste waterontharder 2026: koopgids en shortlist' },
              { href: '/waterontharder/zoutloos', label: 'Zoutloze waterontharder: werkt het echt?' },
              { href: '/waterontharder/vs-osmose', label: 'Waterontharder of osmose: wanneer kies je wat?' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen: welk systeem past bij jou?' },
              { href: '/kennisbank/waterontharder', label: 'Kennisbank: waterontharder' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente in Nederland' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <MethodologyBadge
          lastReviewed={MODIFIED}
          sources={[
            'Fabrikant AquaSens (JOEP-specificaties)',
            'PureAqua (prijzen)',
            ...JOEP_MARKET.rangeSources,
            'RIVM (advieswaarde PFAS)',
            `EU-richtlijn ${EU_RICHTLIJN} (PFAS-norm)`,
            'NOS (Greenpeace-analyse, september 2026)',
          ]}
        />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterontharder kopen
          </h2>
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering bij aankoop</h3>
              <p className="text-sm text-gray-600">Waarom CE-markering verplicht is en hoe u de conformiteitsverklaring opvraagt bij aankoop.</p>
            </Link>
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Budget keuzehulp</h3>
              <p className="text-sm text-gray-600">Hoe u de totale eigendomskosten van een waterontharder berekent over 10 jaar.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
