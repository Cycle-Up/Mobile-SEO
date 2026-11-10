import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { JoepCTA } from '@/components/JoepCTA';
import { JoepRecommendation } from '@/components/JoepRecommendation';
import { JOEP, JOEP_MARKET, JOEP_MIN_DH, JOEP_NO_FUSS_POINTS, JOEP_POSITIONING } from '@/lib/joep.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

const URL = 'https://waterfilterplatform.nl/beste-waterontharder-2026';
const PUBLISHED = '2026-05-29';
const MODIFIED = '2026-11-10';
const TITLE = 'Beste waterontharder 2026: onze keuze is JOEP (+ shortlist)';
const DESCRIPTION = `Beste waterontharder 2026: onze keuze is JOEP (${JOEP.installedPrice} geïnstalleerd). Shortlist, kosten en wat een test of de Consumentenbond zegt.`;

const euro = (n: number) => `${Math.round(n).toLocaleString('nl-NL')} euro`;
const JOEP_INSTALLATION = euro(Number(JOEP.installedPriceSchema) - Number(JOEP.devicePriceSchema));
const JOEP_DIMENSIONS = JOEP.dimensions.replace(' (h x b x d)', '');
const RESIN_MATCH = JOEP.manufacturerWarranty.match(/(\d+ jaar) op de hars/);
if (!RESIN_MATCH) throw new Error(`Kan de harsgarantie niet lezen uit: ${JOEP.manufacturerWarranty}`);
/** Bijvoorbeeld "20 jaar fabrieksgarantie op de hars", afgeleid uit lib/joep.mjs. */
const RESIN_WARRANTY = `${RESIN_MATCH[1]} fabrieksgarantie op de hars`;

export function generateMetadata(): Metadata {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
      title: 'Beste waterontharder 2026: onze keuze is JOEP',
      description: `Onze keuze voor 2026 is de JOEP waterontharder: compact (${JOEP_DIMENSIONS}), ${JOEP.flow}, ${RESIN_WARRANTY} en ${JOEP.installedPrice} compleet geïnstalleerd. Plus shortlist per profiel, kosten en hoe wij beoordelen zonder eigen labtest.`,
      url: URL,
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const QUICK_ANSWER = `Onze keuze voor 2026 is de JOEP waterontharder: volgens ons de beste waterontharder voor Nederlandse huishoudens met hard water. Hij is compact (${JOEP_DIMENSIONS}), wordt gemaakt in ${JOEP.madeIn}, werd ook verkocht via AquaCell, levert ${JOEP.flow} zacht water en kost ${JOEP.installedPrice} compleet geïnstalleerd, waar complete ontharders doorgaans ${JOEP_MARKET.typicalInstalledRange} kosten. Heb je zacht water of gaat het je vooral om je drinkwater, dan past een osmosefilter beter.`;

const CONSUMENTENBOND_ANSWER = 'Wij noemen hier geen testuitslagen of scores van de Consumentenbond, omdat we die niet met een openbare bron kunnen laten zien. Wil je hun oordeel meewegen, kijk dan op consumentenbond.nl; testresultaten zijn daar vaak alleen voor leden zichtbaar. Wij testen zelf niet in een lab, maar beoordelen op echte ontharding, capaciteit, zout- en waterverbruik, formaat, totale prijs, garantie en verplichte abonnementen.';

const faqItems = [
  {
    question: 'Wat is de beste waterontharder in 2026?',
    answer: QUICK_ANSWER,
  },
  {
    question: 'Wat zegt de Consumentenbond over waterontharders?',
    answer: CONSUMENTENBOND_ANSWER,
  },
  {
    question: 'Hebben jullie waterontharders zelf getest?',
    answer: 'Nee, niet in een lab. Onze keuze is gebaseerd op de specificaties en voorwaarden van de fabrikant, publiek controleerbare prijzen en vaste criteria: onthardt het apparaat echt, past de capaciteit, hoeveel zout en water kost een regeneratie, hoe groot is het, wat kost het compleet geïnstalleerd, welke garantie geldt op de hars en zit je vast aan een abonnement. Of een ontharder bij jou werkt, test je thuis eenvoudig met hardheidsteststrips voor en na de ontharder.',
  },
  {
    question: 'Waterontharder met zout of zoutloos: wat is beter?',
    answer:
      'Een ionenwisselaar met zout verlaagt de waterhardheid daadwerkelijk en is het effectiefst tegen kalkaanslag. Zoutloze systemen (template-assisted crystallization of elektromagnetisch) verwijderen geen kalk, maar veranderen de kristalvorm zodat kalk minder hecht. Ze zijn onderhoudsarm en zoutvrij, maar minder effectief bij zeer hard water. Bij hardheid boven 15 dH presteert een zoutsysteem doorgaans beter.',
  },
  {
    question: 'Welke capaciteit waterontharder heb ik nodig?',
    answer:
      'De benodigde capaciteit hangt af van je waterhardheid en dagelijks verbruik. Vuistregel: een gezin van vier in een gebied met 12 tot 18 dH zit goed met een systeem van 20 tot 30 liter harsinhoud. Kies je te klein, dan regenereert het toestel te vaak en verbruikt het meer zout en water. Controleer eerst je lokale waterhardheid.',
  },
  {
    question: 'Wat kost een goede waterontharder?',
    answer: `Reken voor een complete ionenwisselaar op ${JOEP_MARKET.typicalInstalledRange} inclusief installatie; een kwaliteitssysteem voor een gemiddeld huishouden kost vaak ${JOEP_MARKET.typicalQualityRange}. Onze aanbeveling, de JOEP waterontharder, kost ${JOEP.installedPrice} compleet geïnstalleerd. Daarna betaal je vooral zout; hoeveel hangt af van je waterhardheid en je huishouden. Op onze pagina over waterontharder kosten rekenen we dat voor JOEP uit. Zoutloze systemen verbruiken geen zout, maar verlagen de hardheid niet. Bekijk altijd de totale kosten over vijf jaar in plaats van alleen de aanschafprijs.`,
  },
  {
    question: 'Maakt een waterontharder het water ook veilig om te drinken?',
    answer:
      'Nederlands kraanwater voldoet aan de wettelijke drinkwaternormen; een waterontharder is daar niet voor nodig. Een ontharder verlaagt de hardheid maar verwijdert geen lood, nitraat, PFAS of microplastics, en voegt bij zoutsystemen juist natrium toe. Wil je je drinkwater extra zuiveren, combineer dan met een osmosefilter op het aanrecht of kies osmose als gerichte drinkwateroplossing.',
  },
  {
    question: 'Welk merk waterontharder is het beste?',
    answer:
      'Onze keuze is JOEP: volgens ons de beste combinatie van formaat, prijs en garantie voor Nederlandse huishoudens met hard water (zie hierboven). Bekende waterontharder-merken in Nederland zijn daarnaast onder andere BWT, Grunbeck, EcoWater, Harvey en Viteau. Vergelijk ze niet op naam maar op de juiste capaciteit voor jouw waterhardheid, de certificering (zoals DVGW of Kiwa), het zout- en waterverbruik bij regeneratie en de service en garantie. Een goed afgestemd toestel uit het middensegment presteert vaak beter dan een te groot of te klein duur merktoestel.',
  },
  {
    question: 'Wat is de beste waterontharder zonder zout?',
    answer:
      'Wil je geen zout gebruiken, dan is een zoutloos systeem op basis van template-assisted crystallization (TAC) volgens ons doorgaans de beste keuze. Het verlaagt de waterhardheid niet, maar zet kalk om in een vorm die minder aanhecht aan leidingen en apparaten. Zoutloze systemen zijn onderhoudsarm en verbruiken geen zout of regeneratiewater, maar zijn bij zeer hard water (boven 15 dH) minder effectief dan een ionenwisselaar met zout.',
  },
  {
    question: 'Is een waterontharder de moeite waard?',
    answer: `Een waterontharder voor het hele huis is doorgaans pas zinvol vanaf ongeveer ${JOEP_MIN_DH} dH. Dan merk je het verschil: minder kalkaanslag, minder last van kalk in boiler, waterkoker en vaatwasser, en minder schoonmaakmiddel en ontkalker. Bij zachter water levert hij weinig op. Reken de besparing op apparaten en middelen af tegen de aanschaf-, zout- en onderhoudskosten over vijf jaar.`,
  },
];

const ranking = [
  {
    naam: 'Ionenwisselaar met zout',
    notitie: `Onze keuze voor de meeste gezinnen in een hardwatergebied (vanaf ongeveer ${JOEP_MIN_DH} dH): verlaagt de hardheid echt en geeft volgens ons de beste prijs-prestatie.`,
  },
  {
    naam: 'Twin-tank ionenwisselaar',
    notitie: 'Volgens ons de betere keuze voor grote huishoudens en continu verbruik: levert ook zacht water tijdens de regeneratie.',
  },
  {
    naam: 'Zoutloos systeem (TAC)',
    notitie: 'Volgens ons de keuze als je geen zout wilt: onderhoudsarm, vermindert kalkaanhechting maar verlaagt de hardheid niet. Geschikt voor huurders en matig hard water.',
  },
  {
    naam: 'Osmosefilter op aanrecht',
    notitie: 'Volgens ons de betere keuze als het je vooral om je drinkwater gaat in plaats van huisbrede ontharding.',
  },
];

const merken = [
  ['JOEP (onze keuze)', `Merk van ${JOEP.brandOwner}, gemaakt in ${JOEP.madeIn} en ook verkocht via AquaCell. Compacte ionenwisselaar met zout (${JOEP_DIMENSIONS}), ${JOEP.flow} en ${RESIN_WARRANTY}. Bij PureAqua ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd.`, '/joep-waterontharder'],
  ['BWT', 'Oostenrijks merk met een breed assortiment ionenwisselaars, bekend van de AQA Perla-lijn met magnesiumtechnologie.', '/bwt-waterontharder'],
  ['Grunbeck', 'Duits premium-merk; de softliQ-serie biedt zuinige regeneratie en app-besturing.', '/grunbeck-waterontharder'],
  ['EcoWater', 'Internationaal merk met ionenwisselaars en uitgebreide monitoring van zout- en waterverbruik.', '/ecowater-waterontharder'],
  ['Harvey', 'Bekend van compacte, non-electric twin-tank systemen op blokzout, geschikt voor kleine ruimtes.', '/harvey-waterontharder'],
  ['Kinetico', 'Non-electric twin-tank dat op waterdruk werkt en regenereert op werkelijk verbruik; premium, via dealer.', '/kinetico-waterontharder'],
  ['Culligan', 'Groot internationaal merk met sterk service- en dealernetwerk en huur- en onderhoudsopties.', '/culligan-waterontharder'],
  ['Erie', 'In de Benelux veelgebruikt merk (onderdeel van Pentair) voor ionenwisselaars en besturingskleppen.', '/erie-waterontharder'],
  ['Viteau', 'Nederlandse aanbieder en installateur van waterontharders met landelijke service.', '/viteau-waterontharder'],
  ['Aquacell', 'Betaalbare ionenwisselaars uit het instap- en middensegment, veel online verkocht in Nederland.', '/aquacell-waterontharder'],
  ['Maxima', 'Op de Nederlandse markt veel verkocht merk van ionenwisselaars in het middensegment.', '/maxima-waterontharder'],
];

const picks = [
  {
    profiel: 'Klein huishouden / appartement',
    type: 'Compacte ionenwisselaar of zoutloos',
    prijs: 'Verschilt per type',
    capaciteit: 'Laag (1 tot 2 personen)',
    notitie: 'Compacte footprint, lage jaarlijkse kosten. Zoutloos bij matig hard water.',
    highlight: false,
  },
  {
    profiel: 'Gezin in hardwatergebied',
    type: 'Ionenwisselaar met zout, onze keuze: JOEP',
    prijs: `JOEP: ${JOEP.installedPrice} geïnstalleerd (markt ${JOEP_MARKET.typicalInstalledRange})`,
    capaciteit: 'Midden tot hoog (3 tot 5 personen)',
    notitie: `Volgens ons het meest effectief tegen kalkaanslag in een hardwatergebied (vanaf ongeveer ${JOEP_MIN_DH} dH). Onze aanbeveling: de JOEP waterontharder, ${JOEP.installedPrice} compleet geïnstalleerd.`,
    highlight: true,
  },
  {
    profiel: 'Groot huishouden / continu verbruik',
    type: 'Twin-tank ionenwisselaar',
    prijs: 'Op offerte',
    capaciteit: 'Hoog (5 of meer personen)',
    notitie: 'Levert ook tijdens regeneratie zacht water. Voor grote gezinnen of constante vraag.',
    highlight: false,
  },
  {
    profiel: 'Vooral schoon drinkwater gewenst',
    type: 'Osmosefilter op aanrecht',
    prijs: `${COUNTERTOP.shortName}: ${COUNTERTOP.price}`,
    capaciteit: 'Drinkwater (keukenkraan)',
    notitie: `Geen huisbrede ontharding, maar vermindert kalk en andere stoffen aan het tappunt. Onze keuze op het aanrecht: het ${COUNTERTOP.shortName} (${COUNTERTOP.price}, met verwarming tot ${COUNTERTOP.maxTemp}).`,
    highlight: false,
  },
];

/** Waar je over 5 jaar op rekent per systeem. Alleen bedragen met bron; de rest kwalitatief. */
const tco5jaar = [
  { set: 'JOEP (onze aanbeveling)', aanschaf: JOEP.devicePrice, installatie: JOEP_INSTALLATION, jaarlijks: 'zout, naar verbruik', letOp: `${JOEP.installedPrice} compleet geïnstalleerd; serviceabonnement optioneel vanaf jaar 2` },
  { set: 'Ionenwisselaar van een ander merk', aanschaf: `markt: ${JOEP_MARKET.typicalInstalledRange} inclusief installatie`, installatie: 'zit in die marktprijs', jaarlijks: 'zout, soms onderhoud', letOp: 'kijk of onderhoud verplicht is voor de garantie' },
  { set: 'Zoutloos systeem', aanschaf: 'verschilt per merk', installatie: 'op de hoofdleiding', jaarlijks: 'geen zout', letOp: 'verlaagt de hardheid niet' },
  { set: 'Twin-tank', aanschaf: 'op offerte', installatie: 'op de hoofdleiding, meer ruimte nodig', jaarlijks: 'zout', letOp: 'ook zacht water tijdens de regeneratie' },
  { set: 'Osmose op aanrecht (drinkwater, geen ontharding)', aanschaf: `${COUNTERTOP.shortName}: ${COUNTERTOP.price}`, installatie: 'geen vaste installatie', jaarlijks: 'vervangfilters', letOp: 'onthardt het water in huis niet' },
];

/** Criteria waarop wij een waterontharder beoordelen, met hoe JOEP daarop uitkomt (feiten uit lib/joep.mjs). */
const criteria: [string, string, string][] = [
  ['Onthardt hij echt?', 'Alleen een ionenwisselaar haalt de hardheid uit het water; zoutloze apparaten doen dat niet.', JOEP.type],
  ['Past de capaciteit?', 'Doorstroom en harsinhoud moeten passen bij je huishouden en piekverbruik.', `${JOEP.flow}; bij een groot huishouden laat je dit vooraf checken`],
  ['Zuinig regenereren', 'Hoeveel zout en water kost een regeneratie, en regenereert hij op verbruik?', `${JOEP.saltPerRegeneration} zout en ${JOEP.waterPerRegeneration} water per regeneratie`],
  ['Formaat en installatie', 'Past hij in je meterkast of kast, en kun je kiezen tussen zelf installeren of laten installeren?', `${JOEP.dimensions}; zelf installeren of laten installeren`],
  ['Totale prijs', 'De prijs inclusief installatie, vergeleken met de markt.', `${JOEP.installedPrice} geïnstalleerd; markt ${JOEP_MARKET.typicalInstalledRange}`],
  ['Garantie', 'Vooral de garantie op de hars telt, en de voorwaarden om die te houden.', JOEP.manufacturerWarranty],
  ['Verplicht abonnement?', 'Een goedkoop apparaat met verplicht onderhoudscontract is niet goedkoop.', JOEP_NO_FUSS_POINTS.subscription],
  ['Keurmerken', 'Alleen certificering die voor dat model aantoonbaar is, telt mee.', 'Wij noemen voor JOEP geen keurmerken die we niet zelf konden herleiden; vraag dit na bij de verkoper'],
];

export default function BesteWaterontharder2026Page() {
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
          { name: 'Beste waterontharder 2026', url: URL },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Onze keuze van waterontharders per situatie (2026)',
            description:
              'Systeemtypen per huishouden en waterhardheid volgens de redactie van WaterfilterPlatform, van onze algemene keuze tot specifieke situaties.',
            itemListOrder: 'https://schema.org/ItemListOrderDescending',
            numberOfItems: ranking.length,
            url: URL,
            itemListElement: ranking.map((r, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: r.naam,
              description: r.notitie,
              url: URL,
            })),
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Beste waterontharder 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterontharder 2026: onze keuze is JOEP
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Welke <strong>waterontharder</strong> past in 2026 het beste bij jouw huishouden? Dat hangt
            af van je waterhardheid, het aantal personen en je ruimte. We geven een{' '}
            <strong>shortlist per profiel</strong>, de belangrijkste selectiecriteria en de kosten over
            vijf jaar. {JOEP_POSITIONING} Hij kost {JOEP.installedPrice} compleet geïnstalleerd en
            wordt verkocht door PureAqua, waaraan wij gelieerd zijn. Wij testen niet zelf in een lab;
            onze criteria en kanttekeningen staan erbij.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterontharder/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waterontharder kopen
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Check je waterhardheid
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge
          lastReviewed={MODIFIED}
          sources={['Fabrikant AquaSens (JOEP-specificaties)', 'PureAqua (JOEP-prijs)', ...JOEP_MARKET.rangeSources]}
        />
        <AuthorBox datePublished={PUBLISHED} dateModified={MODIFIED} />

        <QuickAnswer question="Wat is de beste waterontharder in 2026?" answer={QUICK_ANSWER} />

        <JoepRecommendation content="beste-waterontharder-2026-aanbeveling" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Shortlist per profiel</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder per profiel het systeemtype dat volgens ons het best past; voor gezinnen met hard
            water is dat JOEP (zie hierboven).
          </p>
          <div className="space-y-3">
            {picks.map(p => (
              <div key={p.profiel} className={`rounded-xl border p-4 ${p.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-gray-900">
                    {p.profiel}
                    {p.highlight && (
                      <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Onze keuze: sterke prijs-prestatie</span>
                    )}
                  </p>
                  <span className="font-semibold text-[#005F8A] shrink-0 text-sm">{p.prijs}</span>
                </div>
                <p className="text-sm text-gray-700"><strong>{p.type}</strong>. Capaciteit: {p.capaciteit}</p>
                <p className="text-sm text-gray-600 mt-1">{p.notitie}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Prijzen indicatief op basis van publieke richtprijzen; JOEP-prijzen door PureAqua bevestigd op 24 september 2026. Bijgewerkt november 2026. WaterfilterPlatform
            is gelieerd aan PureAqua; lees onze{' '}
            <Link href="/methodologie" className="underline">methodologie</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar let je op bij de keuze?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Waterhardheid', 'Check je lokale dH-waarde. Boven 15 dH presteert een zoutsysteem doorgaans beter dan zoutloos.'],
              ['Capaciteit', 'Stem de harsinhoud af op personen en verbruik, zodat het toestel niet te vaak regenereert.'],
              ['Zout vs zoutloos', 'Zout ontharder verlaagt hardheid; zoutloos remt aanhechting maar verlaagt de hardheid niet.'],
              ['Ruimte en installatie', 'Twin-tank en grote toestellen vragen meer ruimte; huurders kiezen vaak compact of zoutvrij.'],
              ['Natrium en drinkwater', 'Zoutsystemen voegen natrium toe aan het water. Wil je drinkwater zonder toegevoegd natrium, houd dan een tappunt zonder ontharding of gebruik een osmosefilter.'],
              ['Totale kosten', 'Beoordeel aanschaf plus zout, water en onderhoud over vijf jaar, niet alleen de prijs.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Twijfel je tussen ontharden en filteren? Lees onze vergelijking{' '}
            <Link href="/vergelijken/waterfilter-vs-waterontharder" className="text-[#005F8A] underline">waterfilter vs waterontharder</Link>{' '}
            of{' '}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">waterontharder versus osmose</Link>.
          </p>
        </section>

        <section id="test-consumentenbond">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterontharder test en Consumentenbond: hoe wij beoordelen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Zoek je een waterontharder test, dan kom je al snel bij de Consumentenbond uit. Eerlijk vooraf:
            wij testen waterontharders niet zelf in een lab. Onze keuze is gebaseerd op de specificaties en
            voorwaarden van de fabrikant, publiek controleerbare prijzen en de vaste criteria hieronder.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700 mb-5">
            <strong className="text-amber-900">Over de Consumentenbond:</strong> {CONSUMENTENBOND_ANSWER}
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Criterium</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Waar wij op letten</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">JOEP</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map(([criterium, uitleg, joep]) => (
                  <tr key={criterium} className="border-b border-gray-100 align-top">
                    <th scope="row" className="py-2.5 px-3 text-left font-semibold text-gray-800">{criterium}</th>
                    <td className="py-2.5 px-3 text-gray-700">{uitleg}</td>
                    <td className="py-2.5 px-3 text-gray-700">{joep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            JOEP-gegevens: fabrikant {JOEP.brandOwner} en PureAqua, gecontroleerd op 24 september 2026.
          </p>
          <h3 className="text-lg font-bold text-[#003F5C] mt-6 mb-2">Zelf je waterontharder testen</h3>
          <p className="text-gray-700 leading-relaxed">
            Of een ontharder bij jou werkt, test je thuis eenvoudig: meet de hardheid (dH) van je kraanwater
            met hardheidsteststrips voor en na de ontharder. Bij een goed ingestelde ionenwisselaar zie je
            na de ontharder een duidelijk lagere waarde. Hoe hard je water nu is, zoek je op via{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</Link>.
            Een ontharder voor het hele huis is doorgaans zinvol vanaf ongeveer {JOEP_MIN_DH} dH. Hoe we
            producten beoordelen, ook die van PureAqua, staat in onze{' '}
            <Link href="/methodologie" className="text-[#005F8A] underline">methodologie</Link>.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten over 5 jaar: waar je op rekent</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vergelijk niet alleen de aanschafprijs, maar alles wat je in vijf jaar betaalt: aanschaf,
            installatie, zout en eventueel onderhoud. Wij noemen hieronder alleen bedragen die we kunnen
            onderbouwen. Wat JOEP over 5 en 10 jaar kost, inclusief zout en het optionele
            serviceabonnement, rekenen we uit op{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline">waterontharder kosten</Link>;
            marktprijzen en waar je op let bij een goedkope ontharder staan op{' '}
            <Link href="/waterontharder/prijs" className="text-[#005F8A] underline">waterontharder prijs</Link>.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Systeem</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Per jaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Let op</th>
                </tr>
              </thead>
              <tbody>
                {tco5jaar.map(r => (
                  <tr key={r.set} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{r.set}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.installatie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.jaarlijks}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.letOp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Bronnen: PureAqua (JOEP en {COUNTERTOP.shortName}) en {JOEP_MARKET.rangeSources.join(' en ')}{' '}
            (marktprijs). Werkelijke kosten verschillen per merk, huishouden en waterhardheid.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Bekende waterontharder-merken in Nederland</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Naast onze keuze JOEP helpt het om de bekendste waterontharder-merken op de Nederlandse
            markt te kennen. Overweeg je een ander merk, beoordeel het dan op systeemtype en
            capaciteit, certificering, zout- en waterverbruik en service, niet op naam alleen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {merken.map(([naam, beschrijving, href]) => (
              <div key={naam} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">
                  <Link href={href} className="hover:text-[#005F8A]">{naam} waterontharder</Link>
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{beschrijving}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            JOEP (onze keuze) wordt verkocht door PureAqua, waaraan WaterfilterPlatform gelieerd is;
            ook een AquaCell-ontharder is bij PureAqua verkrijgbaar. Koop je via onze links, dan
            verdient PureAqua daaraan. Controleer actuele specificaties en certificering altijd bij de
            leverancier. Bijgewerkt november 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
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

        <JoepCTA context="vergelijken" content="beste-waterontharder-2026-joep" />

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="beste-waterontharder-2026-shopcta"
          title="Een waterontharder uitkiezen?"
          sub="Bekijk het actuele aanbod waterontharders bij onze partner PureAqua en vergelijk capaciteit en prijs."
        />

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/waterontharder', 'Waterontharder', 'Werking, kosten en wanneer zinvol'],
              ['/waterontharder/kopen', 'Waterontharder kopen', 'Waar let je op bij aanschaf'],
              ['/waterontharder/prijs', 'Waterontharder prijs', 'Marktprijzen en goedkope opties'],
              ['/waterontharder/kosten', 'Waterontharder kosten', 'Zout en totaalkosten per jaar'],
              ['/vergelijken/waterontharder-vergelijken', 'Waterontharders vergelijken', 'Systemen naast elkaar'],
              ['/waterhardheid', 'Waterhardheid', 'Check je hardheid per gemeente'],
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
