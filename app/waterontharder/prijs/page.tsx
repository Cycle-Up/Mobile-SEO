import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { QuickAnswer } from '@/components/QuickAnswer';
import { JoepCTA } from '@/components/JoepCTA';
import { JOEP, JOEP_MARKET, JOEP_MIN_DH, JOEP_NO_FUSS, JOEP_POSITIONING } from '@/lib/joep.mjs';

const URL = 'https://waterfilterplatform.nl/waterontharder/prijs';
const PUBLISHED = '2026-05-29';
const MODIFIED = '2026-11-10';
const TITLE = 'Waterontharder prijs 2026: marktprijzen en goedkope opties';
const DESCRIPTION = `Wat kost een waterontharder in 2026? Compleet geïnstalleerd doorgaans ${JOEP_MARKET.typicalInstalledRange}. Plus: waar je op let bij een goedkope ontharder.`;

const euro = (n: number) => `${Math.round(n).toLocaleString('nl-NL')} euro`;
const fmtYears = (n: number) => n.toLocaleString('nl-NL', { maximumFractionDigits: 1 });
const INSTALLED = Number(JOEP.installedPriceSchema);
const INSTALLATION = euro(INSTALLED - Number(JOEP.devicePriceSchema));
const [MARKET_LOW, MARKET_HIGH] = (JOEP_MARKET.typicalInstalledRange.match(/\d[\d.]*/g) ?? []).map(s =>
  Number(s.replace(/\./g, '')),
);
// Gangbare huurprijs, gelijk aan /waterontharder/huren en /waterontharder/kosten.
const HUUR_RANGE = '15 tot 35 euro';
// Rekenvoorbeeld binnen die bandbreedte, in euro per maand.
const HUUR_EXAMPLE = 25;
const HUUR_PER_YEAR = HUUR_EXAMPLE * 12;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    locale: 'nl_NL',
  },
};

const QUICK_ANSWER = `Een complete waterontharder met zout kost in 2026 doorgaans ${JOEP_MARKET.typicalInstalledRange} inclusief installatie. Voor een kwaliteitssysteem voor een gemiddeld huishouden betaal je vaak ${JOEP_MARKET.typicalQualityRange}, het topsegment zit rond ${JOEP_MARKET.topRange}. Daarna betaal je vooral zout. Onze keuze, de JOEP waterontharder, kost ${JOEP.installedPrice} compleet geïnstalleerd of ${JOEP.devicePrice} als je zelf installeert. Een goedkope ontharder is pas echt goedkoop als ook het zout, het onderhoud en de installatie meevallen.`;

const faqItems = [
  {
    question: 'Wat kost een waterontharder gemiddeld?',
    answer: `Een complete ionenwisselaar met zout kost doorgaans ${JOEP_MARKET.typicalInstalledRange} inclusief installatie (bronnen: ${JOEP_MARKET.rangeSources.join(' en ')}). Een kwaliteitssysteem voor een gemiddeld huishouden kost vaak ${JOEP_MARKET.typicalQualityRange}; het topsegment ${JOEP_MARKET.topRange}. Daar komen jaarlijkse kosten bij voor zout, wat water en stroom voor de regeneratie en eventueel onderhoud.`,
  },
  {
    question: 'Wat is een goede goedkope waterontharder?',
    answer: 'Een goedkope waterontharder is goed als hij echt onthardt (een ionenwisselaar met zout), regenereert op verbruik in plaats van op een vaste klok, past bij je waterhardheid en huishouden, en een duidelijke garantie op de hars heeft. Tel installatie, bypass, zout en onderhoud mee: een lage aanschafprijs met hoog zoutverbruik of dure service is over vijf jaar vaak duurder dan een iets duurder, zuiniger apparaat. Zoutloze apparaten zijn goedkoop, maar verlagen de hardheid niet.',
  },
  {
    question: 'Wat kost de JOEP waterontharder?',
    answer: `Bij PureAqua kost JOEP ${JOEP.devicePrice} zonder installatie, of ${JOEP.installedPrice} compleet geïnstalleerd. Daarnaast betaal je zout: per regeneratie ${JOEP.saltPerRegeneration}, volgens de fabrikant ${JOEP.saltPerYear}. Het serviceabonnement is optioneel: ${JOEP.serviceSubscription}. Transparant: WaterfilterPlatform is gelieerd aan PureAqua.`,
  },
  {
    question: 'Wat zijn de verborgen kosten van een waterontharder?',
    answer: `Naast de aanschafprijs zijn er installatiekosten (bij JOEP ${INSTALLATION}, het verschil tussen de prijs met en zonder installatie; bij andere aanbieders hangt het af van je woning), de eerste zoutvulling, soms een losse bypass-klep en eventueel een servicebeurt. In oudere woningen kan extra leidingwerk of een afvoer voor het spoelwater nodig zijn. Vraag altijd om een totaalprijs inclusief installatie.`,
  },
  {
    question: 'Is een waterontharder duurder dan een osmosefilter?',
    answer: `Ja, in aanschaf meestal wel. Een complete waterontharder kost doorgaans ${JOEP_MARKET.typicalInstalledRange} inclusief installatie, een osmosefilter voor drinkwater vaak een paar honderd euro. Maar ze doen iets anders: een ontharder haalt kalk uit al het water in huis, een osmosefilter zuivert alleen je drinkwater aan één kraan. Voor kleine huishoudens of huurders die vooral beter drinkwater willen, is osmose vaak de goedkopere route.`,
  },
];

const prijsFactoren: [string, string][] = [
  ['Een of twee harstanks', 'Een ontharder met een harstank is eenvoudiger; tijdens de regeneratie loopt het water dan tijdelijk via de bypass. Een tweecellige (twin-tank) ontharder levert ook tijdens de regeneratie zacht water, maar is groter en zit meestal in een hogere prijsklasse. Vraag voor zo\'n systeem een offerte.'],
  ['Regeneratie op verbruik of op tijd', 'Goedkope modellen regenereren soms op een vaste klok, ook als dat niet nodig is. Een model dat op werkelijk verbruik regenereert, gebruikt doorgaans minder zout en spoelwater.'],
  ['Capaciteit', 'Meer harsinhoud en doorstroom kost meer. Te klein kiezen is wel duur in gebruik: het apparaat regenereert dan vaker en verbruikt meer zout en water.'],
  ['Merk, dealer en service', 'Bij dealermerken betaal je vaak ook voor advies, installatie en een servicenetwerk. Bij een webshop is de apparaatprijs vaak lager, maar regel je installatie en onderhoud zelf of los.'],
  ['Installatie', `De aansluiting op de hoofdleiding komt meestal bovenop de apparaatprijs. Bij JOEP is dat ${INSTALLATION}: ${JOEP.devicePrice} zonder en ${JOEP.installedPrice} met installatie. In oudere woningen kan extra leidingwerk of een afvoer voor het spoelwater nodig zijn.`],
];

const marktPrijzen: [string, string, string][] = [
  ['Complete ontharder met zout, inclusief installatie', JOEP_MARKET.typicalInstalledRange, 'Gangbare marktprijs'],
  ['Kwaliteitssysteem voor een gemiddeld huishouden', JOEP_MARKET.typicalQualityRange, 'Gangbare marktprijs'],
  ['Topsegment', JOEP_MARKET.topRange, 'Gangbare marktprijs'],
  [`${JOEP_MARKET.comparable.name} (vergelijkbaar compact merkmodel)`, `circa ${JOEP_MARKET.comparable.installedPrice}`, 'Inclusief installatie'],
  ['JOEP waterontharder (onze keuze)', JOEP.installedPrice, `Inclusief installatie; ${JOEP.devicePrice} als je zelf installeert`],
];

const goedkoopChecks: [string, string][] = [
  ['Onthardt hij echt?', 'Alleen een ionenwisselaar met zout haalt de hardheid uit het water. Zoutloze of magnetische apparaten zijn goedkoper, maar verlagen de hardheid niet.'],
  ['Regenereert hij op verbruik?', 'Een goedkoop model met een vaste klok regenereert ook als het niet nodig is. Dat kost meer zout en water, jaar na jaar.'],
  ['Past de capaciteit?', 'Te klein gekozen betekent vaker regenereren: meer zout, meer spoelwater en sneller slijtage. Check je waterhardheid en huishoudgrootte.'],
  ['Zit installatie in de prijs?', 'Een lage webshopprijs is vaak zonder installatie, bypass en afvoer. Vraag een totaalprijs, of reken uit wat zelf installeren je kost.'],
  ['Wat is de garantie op de hars?', 'De hars is het hart van de ontharder. Een korte of vage garantie maakt een goedkoop apparaat duurder als het misgaat.'],
  ['Ben je vast aan een abonnement?', 'Sommige aanbieders maken de aanschaf goedkoop en verdienen aan een verplicht onderhoudscontract. Kijk wat je per jaar verplicht betaalt.'],
];

export default function WaterOntharderPrijsPage() {
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
          { name: 'Prijs', url: URL },
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
            <span>Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder prijs 2026: marktprijzen en goedkope opties
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een complete <strong>waterontharder</strong> kost doorgaans {JOEP_MARKET.typicalInstalledRange}{' '}
            inclusief installatie. Hieronder zie je de marktprijzen, wat de prijs bepaalt, waar je op let bij
            een goedkope waterontharder en wanneer huren een optie is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#marktprijzen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar de marktprijzen
            </Link>
            <Link
              href="/waterontharder/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterontharder kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <MethodologyBadge
          lastReviewed={MODIFIED}
          sources={[...JOEP_MARKET.rangeSources, 'robvanwijck.nl (dealerprijs BWT)', 'PureAqua (JOEP-prijs)']}
        />
        <AuthorBox datePublished={PUBLISHED} dateModified={MODIFIED} />

        <QuickAnswer question="Wat kost een waterontharder?" answer={QUICK_ANSWER} />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#marktprijzen" className="hover:underline">Marktprijzen 2026</a></li>
            <li><a href="#joep" className="hover:underline">JOEP: onze keuze en prijs</a></li>
            <li><a href="#goedkoop" className="hover:underline">Goedkope waterontharder: waar let je op</a></li>
            <li><a href="#prijsoverzicht" className="hover:underline">Wat bepaalt de prijs</a></li>
            <li><a href="#lopende-kosten" className="hover:underline">Lopende kosten in het kort</a></li>
            <li><a href="#huur-vs-koop" className="hover:underline">Huren of kopen</a></li>
            <li><a href="#verborgen-kosten" className="hover:underline">Verborgen kosten</a></li>
            <li><a href="#vergelijking" className="hover:underline">Ontharder, osmose of niets doen</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Marktprijzen */}
        <section id="marktprijzen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Marktprijzen 2026: wat kost een complete waterontharder?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De prijs die telt is de prijs inclusief installatie: zonder aansluiting op de hoofdleiding,
            bypass en afvoer werkt een ontharder niet. Dit zijn de gangbare bedragen voor een
            ionenwisselaar met zout, de enige soort die de hardheid echt uit het water haalt.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Wat</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Prijs</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {marktPrijzen.map(([wat, prijs, toelichting], i) => (
                  <tr key={wat} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <th scope="row" className="py-2.5 px-3 text-left font-medium">{wat}</th>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">{prijs}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Bronnen: {JOEP_MARKET.rangeSources.join(' en ')} (prijsklassen), {JOEP_MARKET.comparable.source}{' '}
            en PureAqua (JOEP, prijzen bevestigd op 24 september 2026). Prijzen inclusief btw. Bijgewerkt
            november 2026.
          </p>
        </section>

        {/* JOEP */}
        <section id="joep">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            JOEP: betaalbaar zonder poespas (onze keuze)
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {JOEP_POSITIONING} Voor de prijs betekent dat: compleet geïnstalleerd kost JOEP{' '}
            {JOEP.installedPrice}, binnen de gangbare marktprijs van {JOEP_MARKET.typicalInstalledRange}{' '}
            en onder de circa {JOEP_MARKET.comparable.installedPrice} voor de{' '}
            {JOEP_MARKET.comparable.name}. Installeer je zelf, dan betaal je {JOEP.devicePrice}.
          </p>
          <p className="font-semibold text-gray-800 text-sm mb-2">Wat wij bedoelen met &apos;zonder poespas&apos;:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            {JOEP_NO_FUSS.map(p => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Eerlijk erbij:</strong> JOEP is een ontharder met zout, dus je koopt jaarlijks zout bij.
            Tijdens de regeneratie ({JOEP.regenerationTime}) is het water tijdelijk hard en je hebt een
            stopcontact nodig. Een ontharder voor het hele huis is doorgaans pas zinvol vanaf ongeveer{' '}
            {JOEP_MIN_DH} dH. Alle specificaties staan in onze{' '}
            <Link href="/joep-waterontharder" className="text-[#005F8A] underline hover:no-underline">JOEP-koopgids</Link>.
          </p>
        </section>

        <JoepCTA context="kosten" content="waterontharder-prijs-joep" />

        {/* Goedkoop */}
        <section id="goedkoop">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Goedkope waterontharder: waar let je op?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een goedkope waterontharder kan prima zijn, maar goedkoop in aanschaf is niet hetzelfde als
            goedkoop in gebruik. Een ontharder gaat vaak tien jaar of langer mee, dus zout, spoelwater,
            onderhoud en reparaties wegen over de jaren zwaar mee. Volgens ons zijn dit de zes vragen die
            bepalen of een lage prijs ook echt een goede koop is:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {goedkoopChecks.map(([vraag, uitleg]) => (
              <div key={vraag} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{vraag}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{uitleg}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Onze vuistregel:</strong> vergelijk nooit alleen de
            aanschafprijs, maar de totale kosten over vijf jaar: aanschaf, installatie, zout en eventueel
            service. Die rekenen we voor je uit op{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline hover:no-underline">waterontharder kosten</Link>.
            Wil je zonder zout ontkalken, lees dan eerst wat een{' '}
            <Link href="/waterontharder/zoutloos" className="text-[#005F8A] underline hover:no-underline">zoutloze waterontharder</Link>{' '}
            wel en niet doet.
          </div>
        </section>

        {/* Wat bepaalt de prijs */}
        <section id="prijsoverzicht">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat bepaalt de prijs van een waterontharder?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Waar een ontharder binnen de marktprijzen van hierboven uitkomt, hangt vooral af van deze vijf
            dingen. Wij noemen bewust geen vaste prijs per type: die verschilt sterk per merk en aanbieder,
            en daar hebben we geen betrouwbare bron voor. Vraag bij twijfel altijd een totaalofferte
            inclusief installatie.
          </p>
          <div className="space-y-3">
            {prijsFactoren.map(([titel, uitleg]) => (
              <div key={titel} className="rounded-xl border border-gray-100 bg-white p-4">
                <h3 className="font-bold text-gray-900 mb-1">{titel}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lopende kosten */}
        <section id="lopende-kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Lopende kosten in het kort
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Na de aanschaf betaal je vooral zout, plus wat water en stroom voor de regeneratie en eventueel
            een servicebeurt. Hoeveel zout je nodig hebt, hangt af van je waterhardheid, je huishouden en
            hoe zuinig het apparaat regenereert: een model dat op verbruik regenereert, gebruikt doorgaans
            minder zout dan een model met een vaste klok. Voor JOEP rekent de fabrikant {JOEP.saltPerYear};
            bij harder water is het meer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wat dat per jaar en over 5 en 10 jaar kost, rekenen we stap voor stap uit op{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline hover:no-underline">waterontharder kosten</Link>.
          </p>
        </section>

        {/* Huren vs kopen */}
        <section id="huur-vs-koop">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterontharder huren of kopen?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Veel installateurs bieden naast koop ook huur of lease aan. Huren kost doorgaans {HUUR_RANGE} per
            maand, vaak inclusief installatie en onderhoud maar meestal exclusief zout. Het omslagpunt reken je
            zelf uit: deel de koopprijs inclusief installatie door wat je per jaar aan huur betaalt. Bij{' '}
            {HUUR_EXAMPLE} euro per maand ({euro(HUUR_PER_YEAR)} per jaar) is JOEP compleet geïnstalleerd
            ({JOEP.installedPrice}) na ongeveer <strong>{fmtYears(INSTALLED / HUUR_PER_YEAR)} jaar</strong>{' '}
            goedkoper dan huren. Met koopprijzen van {JOEP_MARKET.typicalInstalledRange} ligt dat omslagpunt
            tussen {fmtYears(MARKET_LOW / HUUR_PER_YEAR)} en {fmtYears(MARKET_HIGH / HUUR_PER_YEAR)} jaar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">Huren past als je:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>niet weet hoe lang je in de woning blijft</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>geen grote eenmalige uitgave wilt doen</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>installatie, onderhoud en reparaties uit handen wilt geven</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">Kopen past als je:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>eigenaar bent van de woning en lang wilt ontharden</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>het kleine onderhoud zelf doet (zout bijvullen, zoutbak schoonmaken)</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>de totale kosten over 5 tot 10 jaar zo laag mogelijk wilt houden</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op bij huurcontracten:</strong> controleer altijd de
            minimale looptijd, de opzegtermijn, wat er bij verhuizing gebeurt en of je het apparaat kunt
            overnemen. Sommige contracten hebben een jaarlijkse prijsindexatie. De volledige vergelijking
            over 5 jaar, met zout en het optionele serviceabonnement, staat op{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline hover:no-underline">waterontharder kosten</Link>;
            contractvoorwaarden lees je op{' '}
            <Link href="/waterontharder/huren" className="text-[#005F8A] underline hover:no-underline">waterontharder huren</Link>.
          </div>
        </section>

        {/* Verborgen kosten */}
        <section id="verborgen-kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Verborgen kosten: wat staat er niet in de advertentieprijs?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De geadverteerde prijs van een waterontharder is zelden de totaalprijs. Dit zijn de posten die
            niet altijd vooraf worden genoemd, maar je uiteindelijke uitgave wel verhogen.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: 1,
                titel: `Installatie: bij JOEP ${INSTALLATION}`,
                tekst: `Een waterontharder wordt aangesloten op de hoofdwaterleiding, na de watermeter en voor de aftakkingen naar de rest van de woning. Bij JOEP is de installatie het verschil tussen ${JOEP.devicePrice} zonder en ${JOEP.installedPrice} met installatie. Bij andere aanbieders hangt het bedrag af van je woning: in nieuwbouw is aansluiten meestal eenvoudig, in oudere woningen of krappe meterkasten kost het meer tijd. Ben je handig, dan kun je sommige apparaten zelf installeren.`,
              },
              {
                nr: 2,
                titel: 'Bypass-klep',
                tekst: 'Met een bypass kun je de ontharder omzeilen zonder het water af te sluiten, handig bij onderhoud of een storing. Bij sommige goedkope modellen zit hij niet standaard in de set. Vraag altijd of de bypass is inbegrepen.',
              },
              {
                nr: 3,
                titel: 'Eerste zoutvulling',
                tekst: 'Bij levering is de zoutbak leeg. Onthardingszout in tabletten of blokken koop je zelf; voor de eerste vulling heb je een of meer zakken nodig, afhankelijk van de grootte van de zoutbak.',
              },
              {
                nr: 4,
                titel: 'Extra leidingwerk in oudere woningen',
                tekst: 'In oudere woningen kan het leidingwerk bij de meterkast aanpassing nodig hebben voordat de ontharder erop kan. Laat de situatie vooraf bekijken voordat je een offerte accepteert.',
              },
              {
                nr: 5,
                titel: 'Afvoer voor spoelwater',
                tekst: 'Het spoelwater van de regeneratie moet naar het riool. Is er geen afvoer in de buurt van de installatieplek, dan moet die worden aangelegd.',
              },
            ].map(f => (
              <div key={f.nr} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {f.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{f.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterontharder, osmosefilter of niets doen: wat kost het?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een veelgehoorde vraag: wat kost het om niets te doen en met hard water te blijven leven?
            Kalkaanslag op apparaten, ontkalkmiddelen en eerder vervangen verwarmingselementen tellen ook
            op. Hieronder de drie opties naast elkaar, voor een huishouden in een hardwatergebied.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                optie: 'Waterontharder (gezinsmodel)',
                startkosten: JOEP_MARKET.typicalInstalledRange,
                jaarlijks: 'vooral zout, plus eventueel service',
                beschermt: 'Cv-ketel, leidingen, wasmachine, vaatwasser, tegels',
                nadelen: 'Voegt natrium toe; zout en spoelwater; zout bijvullen',
                kleur: 'border-[#005F8A] bg-[#E0F2FE]',
              },
              {
                optie: 'Osmosefilter (drinkwater)',
                startkosten: 'enkele honderden euro',
                jaarlijks: 'vervangfilters',
                beschermt: 'Alleen je drinkwater aan één kraan: minder kalk en veel andere stoffen',
                nadelen: 'Beschermt leidingen en apparaten niet',
                kleur: 'border-gray-200 bg-white',
              },
              {
                optie: 'Niets doen (hard water accepteren)',
                startkosten: '0 euro',
                jaarlijks: 'ontkalkmiddelen en kalkschade',
                beschermt: 'Geen bescherming',
                nadelen: 'Vaker ontkalken, apparaten eerder vervangen, kalk in de cv-ketel',
                kleur: 'border-amber-100 bg-amber-50',
              },
            ].map(o => (
              <div key={o.optie} className={`rounded-2xl border p-5 ${o.kleur}`}>
                <h3 className="font-bold text-gray-900 text-base mb-3">{o.optie}</h3>
                <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">Startkosten</p>
                    <p className="font-semibold text-gray-800">{o.startkosten}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">Jaarlijks</p>
                    <p className="font-semibold text-gray-800">{o.jaarlijks}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-1"><strong>Beschermt:</strong> {o.beschermt}</p>
                <p className="text-xs text-gray-500"><strong>Nadelen:</strong> {o.nadelen}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#005F8A]">Onze conclusie:</strong> voor kleine huishoudens of huurders
            die vooral beter drinkwater willen, is een{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">osmosefilter</Link>{' '}
            de goedkoopste oplossing. Wie de hele woning wil beschermen (leidingen, cv-ketel, wasmachine) en
            in een koopwoning met hard water woont, maakt met een waterontharder volgens ons op termijn de
            betere keuze.
          </div>

          <p className="text-gray-700 mt-5 leading-relaxed">
            Wil je de kosten per jaar precies doorrekenen? Op{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline hover:no-underline">waterontharder kosten</Link>{' '}
            rekenen we het zoutverbruik en de totaalkosten voor JOEP voor je uit. Een bredere analyse staat
            in ons kennisbankartikel{' '}
            <Link href="/kennisbank/waterontharder-kosten" className="text-[#005F8A] underline hover:no-underline">
              waterontharder kosten uitgelegd
            </Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="waterontharder-prijs-shopcta"
          title="Benieuwd naar actuele prijzen?"
          sub="Bekijk het actuele aanbod en de prijzen van waterontharders bij onze partner PureAqua."
        />

        <CTABanner context="waterhardheid" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontharder', label: 'Waterontharder: werking en soorten' },
              { href: '/waterontharder/kopen', label: 'Waterontharder kopen: welk model?' },
              { href: '/waterontharder/kosten', label: 'Waterontharder kosten per jaar en in totaal' },
              { href: '/beste-waterontharder-2026', label: 'Beste waterontharder 2026: onze keuze' },
              { href: '/joep-waterontharder', label: 'JOEP waterontharder: specificaties en prijs' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter als alternatief voor kleine huishoudens' },
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de prijs van een waterontharder
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
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Budget keuzehulp waterontharder</h3>
              <p className="text-sm text-gray-600">Welke prijsklasse past bij je situatie en welke functies de meerprijs waard zijn.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: prijs versus kwaliteit</h3>
              <p className="text-sm text-gray-600">Wat hars en regelklep betekenen voor de prijs en het zoutverbruik.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
