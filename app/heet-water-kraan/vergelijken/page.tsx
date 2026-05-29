import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Heet water kraan vergelijken: modellen en merken 2026',
  description:
    'Vergelijk heet water kranen op temperatuur, capaciteit, prijs en certificering. Welke heet-waterkraan past bij uw keuken?',
  alternates: { canonical: 'https://waterfilterplatform.nl/heet-water-kraan/vergelijken' },
  openGraph: {
    title: 'Heet water kraan vergelijken: modellen en merken 2026',
    description:
      'Vergelijk heet water kranen op temperatuur, capaciteit, prijs en certificering. Welke heet-waterkraan past bij uw keuken?',
    url: 'https://waterfilterplatform.nl/heet-water-kraan/vergelijken',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welke heet water kraan is het beste in 2026?',
    answer:
      'De beste heet water kraan hangt af van uw situatie. Voor pure heetwaterfunctie scoort de Grohe Red II hoog op bouwkwaliteit. Voor de beste prijs-kwaliteitverhouding inclusief filtratie wint de PureAqua 4-in-1 op vrijwel alle criteria: lagere prijs per liter, osmosefiltratie ingebouwd en 100 graden Celsius beschikbaar naast heet en koud.',
  },
  {
    question: 'Is de Quooker beter dan een gewone heet water kraan?',
    answer:
      'De Quooker levert 100 graden Celsius en heeft een sterke reputatie in Nederland. Als pure heet water kraan is de Quooker echter overwaardig en duur: een Quooker PRO3 kost 900-1.200 euro voor alleen heet en kokend water zonder osmosefiltratie. Een PureAqua 4-in-1 levert hetzelfde plus osmosefilter voor 699-900 euro.',
  },
  {
    question: 'Wat is het verschil tussen de Grohe Red en een goedkope heet water kraan?',
    answer:
      'De Grohe Red II biedt uitstekende bouwkwaliteit, een gepatenteerd isolatiereservoir en een herkenbaar Europees design. Het nadeel is de hoge prijs (600-900 euro) en de afwezigheid van een ingebouwd waterfilter. Goedkopere modellen van 150-250 euro leveren vergelijkbare temperaturen maar minder bouwkwaliteit en kortere garantie.',
  },
  {
    question: 'Kan ik een heet water kraan vervangen door een 4-in-1 kraan?',
    answer:
      'Ja, een 4-in-1 kraan vervangt de bestaande mengkraan en het extra kraangat voor de heet water kraan is niet nodig. U installeert de 4-in-1 in hetzelfde gat als de bestaande mengkraan. Daarmee verliest u geen aanrechtruimte en wint u functies: kokend, heet, koud gefilterd en bruisend.',
  },
  {
    question: 'Hoe vergelijk ik het energieverbruik van heet water kranen?',
    answer:
      'Vergelijk het standby wattage (W). Doorstroom systemen verbruiken 0W standby maar 1.500-3.000W bij gebruik. Mini-boilers verbruiken 10-50W standby maar nauwelijks extra bij tappen. Op jaarbasis (8 uur standby dagelijks) kost een 30W boiler circa 26 euro per jaar. Een 10W boiler kost circa 9 euro per jaar.',
  },
  {
    question: 'Welke certificering is het meest waardevol bij een heet water kraan?',
    answer:
      'NSF/ANSI 61 certificering is de meest waardevolle: het bewijst dat materialen die in contact komen met drinkwater geen schadelijke stoffen afstaan, ook bij verhitting. WRAS is de Britse equivalent. CE-markering bewijst elektrische veiligheid maar zegt niets over waterkwaliteit. KIWA is de Nederlandse keuring voor drinkwaterinstallaties.',
  },
  {
    question: 'Is de InSinkErator een goede heet water kraan?',
    answer:
      'De InSinkErator (Steaming Hot Water Tap) is een betrouwbare middenklasse optie van 300-500 euro. Het levert water van 98 graden Celsius en heeft een tank van 2,5 liter. Het nadeel is de afwezigheid van een ingebouwd waterfilter en de beperkte filteropties vergeleken met een 4-in-1 systeem met osmose.',
  },
  {
    question: 'Wat betekent liter per uur bij heet water kranen?',
    answer:
      'Liter per uur (l/u) geeft aan hoeveel heet water een systeem continu kan leveren. Een 2,4 liter boiler levert circa 14-18 liter per uur wanneer koud water bijvult en opwarmt. Een doorstroom systeem levert onbeperkt maar begrensd door het vermogen: een 3.000W doorstromer levert bij 80 graden Celsius circa 5-6 liter per minuut.',
  },
];

const modellen = [
  {
    naam: 'Grohe Red II Mono',
    temp: '100&deg;C (instelbaar)',
    capaciteit: '7-8 l/u continu',
    standby: '10-15W',
    prijs: '600 - 900 euro',
    filter: 'Koolstof optioneel',
    vierInEen: false,
    osmose: false,
    highlight: false,
    pro: 'Topbouwkwaliteit, Europees merk, stil reservoir',
    con: 'Geen osmosefilter, prijs hoog voor alleen heet/kokend',
  },
  {
    naam: 'Quooker Combi+',
    temp: '100&deg;C (hoge druk)',
    capaciteit: '6-7 l/u continu',
    standby: '10W (geissoleerd)',
    prijs: '900 - 1.200 euro',
    filter: 'CUBE filteroptie apart',
    vierInEen: false,
    osmose: false,
    highlight: false,
    pro: 'Marktleider NL, groot servicecentrum, lange garantie',
    con: 'Osmose niet ingebouwd, duurste optie per functie',
  },
  {
    naam: 'Zip HydroTap G5',
    temp: '98&deg;C instelbaar',
    capaciteit: '10-14 l/u',
    standby: '15-20W',
    prijs: '800 - 1.400 euro',
    filter: 'Koolstof ingebouwd',
    vierInEen: false,
    osmose: false,
    highlight: false,
    pro: 'Hoge capaciteit, mooi design, actieve koeling voor koud water',
    con: 'Beperkte NL service, geen osmosefilter',
  },
  {
    naam: 'InSinkErator 3N1',
    temp: '98&deg;C',
    capaciteit: '5-6 l/u',
    standby: '20-25W',
    prijs: '300 - 500 euro',
    filter: 'Geen standaard',
    vierInEen: false,
    osmose: false,
    highlight: false,
    pro: 'Betaalbaar, breed leverbaar bij bouwmarkten',
    con: 'Geen filter, beperkte garantie, lagere bouwkwaliteit',
  },
  {
    naam: 'Generiek instant boiler',
    temp: '40-85&deg;C instelbaar',
    capaciteit: '3-4 l/u',
    standby: '0W (doorstroom)',
    prijs: '150 - 300 euro',
    filter: 'Geen',
    vierInEen: false,
    osmose: false,
    highlight: false,
    pro: 'Laagste aanschafprijs, geen standby verbruik',
    con: 'Geen certificering, lagere flow, geen filteroptie',
  },
  {
    naam: 'PureAqua 4-in-1 met osmose',
    temp: '100&deg;C + 60-98&deg;C',
    capaciteit: '8-10 l/u',
    standby: '10-15W',
    prijs: '699 - 900 euro',
    filter: 'Omgekeerde osmose ingebouwd',
    vierInEen: true,
    osmose: true,
    highlight: true,
    pro: 'Alles-in-een: kokend, heet, koud gefilterd, bruisend + osmose',
    con: 'Hogere aanschafprijs dan budget modellen',
  },
];

export default function HeetWaterKraanVergelijkenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Heet water kraan', url: 'https://waterfilterplatform.nl/heet-water-kraan' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/heet-water-kraan/vergelijken' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Heet water kraan vergelijken: modellen en merken 2026',
          description:
            'Vergelijk heet water kranen op temperatuur, capaciteit, prijs en certificering. Welke heet-waterkraan past bij uw keuken?',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/heet-water-kraan/vergelijken',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/heet-water-kraan" className="hover:text-[#005F8A]">Heet water kraan</Link>
            <span className="mx-2">/</span>
            <span>Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Heet water kraan vergelijken: modellen en merken 2026
          </h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Welk model past het beste bij uw keuken? We vergelijken zes <strong>heet water kranen</strong>
            &mdash; van budget doorstromers tot de PureAqua 4-in-1 met osmose &mdash; op temperatuur,
            capaciteit, energieverbruik, prijs en filteropties. Met een eerlijke conclusie over welk
            systeem de beste waarde biedt.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Spoiler: de{' '}
            <strong>beste heet water kraan</strong> is niet altijd de goedkoopste of de bekendste
            merknaam. De PureAqua 4-in-1 wint op prijs per liter en biedt als enige echt
            osmosefiltratie gecombineerd met 100&deg;C.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/heet-water-kraan/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Koopgids heet water kraan &rarr;
            </Link>
            <Link
              href="/heet-water-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Terug naar overzicht
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#vergelijkingstabel" className="hover:underline">Vergelijkingstabel 6 modellen</a></li>
            <li><a href="#modellen" className="hover:underline">Model voor model analyse</a></li>
            <li><a href="#conclusie" className="hover:underline">Conclusie en winnaar</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Quick Answer */}
        <section>
          <QuickAnswer answer="De PureAqua 4-in-1 wint de vergelijking: lagere prijs per liter dan Quooker en Grohe Red, als enige model met ingebouwde osmosefiltratie, en biedt zowel heet (60-98 graden) als kokend (100 graden) water. Budget-keuze is de generieke instant boiler, maar zonder filter en certificering." />
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijkingstabel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijkingstabel: 6 heet water kraan modellen
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Onderstaande tabel vergelijkt de zes meest relevante modellen op de Nederlandse markt.
            Alle prijzen zijn richtprijzen inclusief boiler maar exclusief installatie.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Model</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Temp.</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Capaciteit</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Standby</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Osmose</th>
                </tr>
              </thead>
              <tbody>
                {modellen.map(m => (
                  <tr
                    key={m.naam}
                    className={`border-b border-gray-100 ${m.highlight ? 'bg-[#E0F2FE]' : ''}`}
                  >
                    <td className="py-2.5 px-3 font-semibold text-gray-900">
                      {m.naam}
                      {m.highlight && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">
                          Aanbevolen
                        </span>
                      )}
                    </td>
                    <td
                      className="py-2.5 px-3 text-center text-xs text-gray-700"
                      dangerouslySetInnerHTML={{ __html: m.temp }}
                    />
                    <td className="py-2.5 px-3 text-center text-xs text-gray-700">{m.capaciteit}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-700">{m.standby}</td>
                    <td className="py-2.5 px-3 text-right text-xs font-medium text-[#005F8A]">{m.prijs}</td>
                    <td className="py-2.5 px-3 text-center text-sm">
                      {m.osmose ? (
                        <span className="text-green-700 font-bold">&#10003;</span>
                      ) : (
                        <span className="text-red-400">&#10007;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Richtprijzen 2026. Prijs exclusief installatie. Capaciteit bij continue afname op maximale temperatuur.
          </p>
        </section>

        {/* Model voor model */}
        <section id="modellen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-5">
            Model voor model: sterke en zwakke punten
          </h2>
          <div className="space-y-5">
            {modellen.map(m => (
              <div
                key={m.naam}
                className={`rounded-2xl border p-5 ${m.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div>
                    <p className="font-bold text-gray-900">{m.naam}</p>
                    <p className="text-xs text-gray-500 mt-0.5" dangerouslySetInnerHTML={{ __html: m.temp + ' &middot; ' + m.capaciteit }} />
                  </div>
                  <p className="font-semibold text-[#005F8A] text-sm shrink-0">{m.prijs}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-green-700 mb-1">Voordelen</p>
                    <p className="text-gray-700 text-xs leading-relaxed">{m.pro}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-red-600 mb-1">Nadelen</p>
                    <p className="text-gray-700 text-xs leading-relaxed">{m.con}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    Filter: {m.filter}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    Standby: {m.standby}
                  </span>
                  {m.vierInEen && (
                    <span className="bg-[#005F8A] text-white px-2 py-0.5 rounded-full">
                      4-in-1 systeem
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA 1 */}
        <CTABanner context="osmose" />

        {/* Conclusie */}
        <section id="conclusie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Conclusie: welke heet water kraan wint?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Na het vergelijken van zes modellen op vijf criteria is de conclusie duidelijk:
          </p>
          <div className="space-y-3 mb-6">
            <div className="bg-[#E0F2FE] rounded-xl p-4 border-l-4 border-[#005F8A]">
              <p className="font-semibold text-[#003F5C] mb-1">Beste algehele keuze: PureAqua 4-in-1</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Wint op prijs per liter, enig model met ingebouwde osmosefiltratie, levert zowel
                heet (98&deg;C) als kokend (100&deg;C) water, en vervangt mengkraan, waterkoker en
                filterkan in e&eacute;n installatie.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Beste bouwkwaliteit: Grohe Red II</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Voor wie uitsluitend een kwalitatieve heet/kokend water kraan wil zonder
                filterambities, biedt de Grohe Red II topkwaliteit. Nadeel: hoge prijs en geen
                filterintegratie.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">Beste budget: generieke instant boiler</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Voor de kleinste investering levert een doorstroom instant water heater warm water van
                85&deg;C voor 150-300 euro. Geen certificering, geen filter &mdash; maar functioneel
                voor basisgebruik.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil u weten wat de totale kosten over 5 jaar zijn? Bekijk de uitgebreide kostenananalyse
            op de{' '}
            <Link href="/heet-water-kraan/prijs" className="text-[#005F8A] underline hover:no-underline">
              heet water kraan prijs pagina
            </Link>{' '}
            of lees de installatiegids op{' '}
            <Link href="/heet-water-kraan/installeren" className="text-[#005F8A] underline hover:no-underline">
              heet water kraan installeren
            </Link>.
          </p>
        </section>

        {/* Gerelateerde onderwerpen */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/kokend-water-kraan/vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kokend water kraan vergelijken</h3>
              <p className="text-sm text-gray-600">Vergelijking van kokend water kranen op prestaties, prijs en energieverbruik.</p>
            </Link>
            <Link href="/vergelijken/kokend-water-kraan-merken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kokend water kraan merken</h3>
              <p className="text-sm text-gray-600">Overzicht van de beste merken kokend water kranen inclusief beoordelingen.</p>
            </Link>
            <Link href="/heet-water-kraan/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Heet water kraan kopen</h3>
              <p className="text-sm text-gray-600">Koopgids voor heet water kranen: criteria, prijzen en merken.</p>
            </Link>
            <Link href="/heet-water-kraan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Heet water kraan</h3>
              <p className="text-sm text-gray-600">Alles over heet water kranen: types, installatie en gebruik.</p>
            </Link>
          </div>
        </section>

        {/* CTA 2 */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: heet water kraan merken vergelijken
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    &#9662;
                  </span>
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
