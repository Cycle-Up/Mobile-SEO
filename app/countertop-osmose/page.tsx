import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { FactCard } from '@/components/FactCard';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { CountertopRecommendation } from '@/components/CountertopRecommendation';
import { CountertopCTA } from '@/components/CountertopCTA';
import { PRODUCTS, buildProductSchema } from '@/lib/pureaqua-products.mjs';
import { COUNTERTOP, COUNTERTOP_MARKET } from '@/lib/countertop.mjs';

const URL = 'https://waterfilterplatform.nl/countertop-osmose';
const PUBLISHED = '2026-09-24';

const TITLE = 'Beste countertop osmose 2026: onze keuze en waar je op let';
const DESCRIPTION =
  'Countertop osmose zonder installatie: onze keuze is het PureAqua Water zuiver apparaat (495 euro, heet water tot 95 graden). Plus vergelijking met AquaTru.';

export function generateMetadata(): Metadata {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', locale: 'nl_NL' },
  };
}

const faqItems = [
  {
    question: 'Wat is de beste countertop osmose?',
    answer: `Onze keuze voor 2026 is het ${COUNTERTOP.name}. Wij vinden het de beste countertop-osmose voor Nederland omdat het omgekeerde osmose zonder installatie combineert met remineralisatie en zes temperatuurstanden tot ${COUNTERTOP.maxTemp}, voor ${COUNTERTOP.price}. Een AquaTru Classic kost ${COUNTERTOP_MARKET.comparable.price} maar verwarmt niet. Transparant: WaterfilterPlatform is gelieerd aan PureAqua, dat dit apparaat verkoopt.`,
  },
  {
    question: 'Moet ik voor een countertop osmose iets installeren?',
    answer:
      'Nee. Je zet het apparaat op het aanrecht, steekt de stekker in het stopcontact en vult de ruwwatertank met kraanwater. Er is geen boorwerk, geen aansluiting op de waterleiding en geen afvoer nodig. Daardoor is het geschikt voor huurwoningen, appartementen en studentenkamers.',
  },
  {
    question: 'Levert het Water zuiver apparaat kokend water?',
    answer: `Het apparaat verwarmt in zes standen tot maximaal ${COUNTERTOP.maxTemp}. Dat is heet genoeg voor thee, koffie en instantgerechten, maar het is geen kokend water van 100 graden.`,
  },
  {
    question: 'Hoe vaak moet het filter vervangen worden?',
    answer: `Volgens de specificaties gaat het filter ${COUNTERTOP.filterLife}. Wie veel water drinkt, vervangt dus eerder dan na een jaar. Vraag PureAqua naar de actuele prijs en bestelroute van het vervangfilter.`,
  },
  {
    question: 'Wat is het verschil tussen countertop en onderbouw osmose?',
    answer:
      'Een countertop staat op het aanrecht en vul je met de hand; er is niets te installeren. Een onderbouwsysteem zit onder het aanrecht, is aangesloten op de waterleiding en geeft gefilterd water via een aparte of 3-weg-kraan. Onderbouw is handiger voor grote huishoudens; countertop is ideaal als je niet mag of wilt verbouwen.',
  },
  {
    question: 'Haalt omgekeerde osmose PFAS uit water?',
    answer:
      'Volgens de Amerikaanse EPA behoort omgekeerde osmose tot de meest effectieve technieken om een breed scala aan PFAS te verminderen, vaak met meer dan 90 procent. Hoeveel een specifiek apparaat haalt, hangt af van het membraan, de filterstaat en de waterkwaliteit. Nederlands kraanwater voldoet aan de wettelijke normen; een filter is een keuze voor minder blootstelling, geen noodzaak.',
  },
];

const specs: [string, string][] = [
  ['Techniek', COUNTERTOP.technique],
  ['Installatie', COUNTERTOP.installation],
  ['Temperatuur', COUNTERTOP.temperatures],
  ['Filtercapaciteit', COUNTERTOP.capacity],
  ['Tanks', COUNTERTOP.tanks],
  ['Uitgifte', COUNTERTOP.portions],
  ['Afmetingen', COUNTERTOP.dimensions],
  ['Vermogen', COUNTERTOP.power],
  ['Filter', COUNTERTOP.filterLife],
  ['Prijs', `${COUNTERTOP.price} bij PureAqua`],
];

const compare: [string, string, string, string][] = [
  ['Installatie', 'Geen', 'Geen', 'Onder aanrecht, aansluiting op leiding'],
  ['Heet water', 'Ja, tot 95 graden', 'Nee', 'Alleen met aparte kokendwaterkraan'],
  ['Remineralisatie', 'Ja', 'Optioneel (apart model)', 'Afhankelijk van systeem'],
  ['Water uit de kraan', 'Nee, uit het apparaat', 'Nee, uit het apparaat', 'Ja'],
  ['Prijs', COUNTERTOP.price, COUNTERTOP_MARKET.comparable.price, 'vaak 300 tot 800 euro plus installatie'],
];

export default function CountertopOsmosePage() {
  const product = PRODUCTS.find(p => p.key === 'countertopRo')!;
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{ title: TITLE, description: DESCRIPTION, datePublished: PUBLISHED, dateModified: PUBLISHED, lastReviewed: PUBLISHED, url: URL }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Countertop osmose', url: URL },
        ]}
      />
      <SchemaOrg schema={[buildProductSchema(product)]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Countertop osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste countertop osmose 2026: onze keuze en waar je op let
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Een countertop-osmose is een osmose-apparaat voor op het aanrecht: geen installatie, geen boorwerk en
            toch het filterniveau van omgekeerde osmose. Hieronder lees je welk apparaat wij aanraden, hoe het werkt,
            wat het kost en wanneer een onderbouwsysteem beter past.
          </p>
          <div className="border border-amber-200 bg-amber-50 rounded-lg p-4 text-sm text-gray-800">
            <strong>Eerlijk vooraf:</strong> het Water zuiver apparaat wordt verkocht door PureAqua, waaraan
            WaterfilterPlatform gelieerd is. Koop je via onze links, dan verdient PureAqua daaraan. Specificaties komen
            van de fabrikant; wat niet onafhankelijk is aangetoond, claimen we niet.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed={PUBLISHED} sources={['Fabrikantspecificaties', 'PureAqua (prijs)', 'bol.com (AquaTru-prijs)', 'US EPA']} />
        <AuthorBox datePublished={PUBLISHED} />

        <QuickAnswer
          question="Wat is de beste countertop osmose?"
          answer={`Onze keuze voor 2026 is het ${COUNTERTOP.name}: volgens ons de beste countertop-osmose voor Nederland. Het filtert met omgekeerde osmose zonder installatie, voegt daarna mineralen toe en verwarmt in zes standen tot ${COUNTERTOP.maxTemp}. Het kost ${COUNTERTOP.price}, 20 euro meer dan een AquaTru Classic die niet verwarmt.`}
        />

        <FactCard id="countertop" />

        <CountertopRecommendation content="countertop-osmose-aanbeveling" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een countertop osmose?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Je vult de ruwwatertank met kraanwater. Een pomp perst het water door een filtercartridge met een
            osmosemembraan: een uiterst fijn membraan dat opgeloste stoffen tegenhoudt en zuiver water doorlaat. Het
            gefilterde water loopt naar een schoonwatertank, waarna het Water zuiver apparaat er mineralen aan
            toevoegt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Omdat je niets aansluit, kun je het apparaat meenemen bij een verhuizing. Meer over de techniek lees je in{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
            <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] underline">mineralen toevoegen na osmose</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Specificaties van het Water zuiver apparaat</h2>
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
            Bron: specificaties van de fabrikant en de PureAqua-productpagina (peildatum september 2026). De fabrikant
            publiceert ook een samenvatting van laboratoriumtests op meer dan 80 stoffen; dat is fabrikantinformatie en
            geen officiële certificering.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Countertop vergeleken</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 text-left">
                  <th className="py-2.5 px-3 font-bold text-gray-800"></th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Water zuiver apparaat</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">AquaTru Classic</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Onderbouw-osmose</th>
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
            Meer vergelijkingen:{' '}
            <Link href="/kennisbank/countertop-ro-vs-onderbouw" className="text-[#005F8A] underline">countertop versus onderbouw</Link>,{' '}
            <Link href="/aquatru-alternatief" className="text-[#005F8A] underline">alternatieven voor AquaTru</Link> en{' '}
            <Link href="/vergelijken/waterdrop-vs-aquatru" className="text-[#005F8A] underline">Waterdrop versus AquaTru</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een countertop osmose logisch?</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-gray-100 p-4">
              <p className="font-semibold text-gray-800 mb-2">Logische keuze als je</p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>huurt en niet mag boren of aan leidingen mag komen</li>
                <li>osmosewater wilt zonder installatiekosten</li>
                <li>heet gefilterd water wilt voor thee en koffie</li>
                <li>het apparaat wilt kunnen meenemen bij een verhuizing</li>
                <li>met 1 tot 3 personen bent</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <p className="font-semibold text-gray-800 mb-2">Kies iets anders als je</p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>gefilterd water direct uit de kraan wilt (kies onderbouw)</li>
                <li>met een groot gezin veel water verbruikt</li>
                <li>echt kokend water nodig hebt (kies een kokendwaterkraan)</li>
                <li>weinig aanrechtruimte hebt</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Twijfel je? Bekijk de{' '}
            <Link href="/keuzehulp/huurwoning" className="text-[#005F8A] underline">keuzehulp voor huurwoningen</Link>{' '}
            of lees wat osmose doet tegen{' '}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS</Link>.
          </p>
        </section>

        <CountertopCTA context="algemeen" content="countertop-osmose-cta" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over countertop osmose</h2>
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
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Hoe het werkt, voor- en nadelen'],
              ['/keuzehulp/huurwoning', 'Waterfilter in een huurwoning', 'Opties zonder boren'],
              ['/beste-waterfilter/huurwoning', 'Beste waterfilter voor huurwoning', 'Onze selectie voor huurders'],
              ['/osmose-filter/kopen', 'Osmosefilter kopen', 'Waar let je op'],
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
