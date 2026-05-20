import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Omgekeerde osmose voor putwater: 5-traps zuivering compleet',
  description:
    'Omgekeerde osmose verwijdert PFAS, zware metalen, nitraat en bacterien uit putwater. 5-traps systeem, minimaal 3 bar druk, 200-600 liter per dag.',
  alternates: { canonical: 'https://waterfilterplatform.nl/putwater/omgekeerde-osmose' },
};

const faqItems = [
  {
    q: 'Wat verwijdert omgekeerde osmose uit putwater?',
    a: 'Omgekeerde osmose (RO) verwijdert vrijwel alle opgeloste stoffen uit putwater: zware metalen (arseen 97%, lood 99%, koper 98%), nitraat (95%), PFAS (95-99%), pesticiden (95-99%), medicijnresten (95%), kalk en mineralen (95-99%), en bij UV-gekoppeld systeem ook bacterien en virussen. Het halfdoorlatende membraan met poriegrootte 0,0001 micrometer laat alleen water-molecuul passeren en houdt vrijwel alles anders tegen. Voor putwater is het de meest complete enkele oplossing voor drinkwaterveiligheid.',
  },
  {
    q: 'Welke druk heeft omgekeerde osmose nodig voor putwater?',
    a: 'Een standaard omgekeerde osmose-systeem heeft minimaal 3 bar (300 kPa) ingangsdruk nodig. Bij putwater met hydrofoor is dat doorgaans aanwezig (3 tot 5 bar). Bij lage druk daalt de capaciteit drastisch: bij 2 bar produceert het systeem nog maar 30 procent van het nominale debiet. Voor onvoldoende druk is een boosterpomp nodig (extra 150 tot 300 euro). Een goede putpomp en correcte drukinstelling van de hydrofoor (3,5 tot 4 bar) is essentieel voor optimale RO-werking.',
  },
  {
    q: 'Hoe ziet een 5-traps RO-systeem eruit?',
    a: 'Een 5-traps omgekeerde osmose-systeem voor putwater bestaat uit: 1) Sediment 5 micrometer (verwijdert zand, roest, deeltjes), 2) Voorkool GAC (verwijdert chloor, geur, organische stoffen), 3) Voorkool block (verwijdert resterende organische stoffen, fijne deeltjes), 4) RO-membraan (75-100 GPD typisch, verwijdert alle opgeloste stoffen), 5) Nakool (post-carbon, verbetert smaak en verwijdert restgeur). Optioneel een 6e stap remineralisatie of UV-desinfectie. Voor putwater met ijzer en mangaan ook extra ijzerfilter VOOR de RO.',
  },
  {
    q: 'Welke capaciteit heb ik nodig voor mijn huishouden?',
    a: 'Voor een gemiddeld gezin van 4 personen die alleen drink- en kookwater filtert is 3 tot 5 liter per dag voldoende. Een 75 GPD systeem (284 liter per dag bij ideale condities) produceert bij Nederlandse putwatertemperatuur (10-15 graden Celsius) circa 150-200 liter per dag. Voor het hele huishouden (300-500 liter per dag) is een 100-150 GPD systeem nodig met opslagvat van 40-100 liter. Voor agrarisch of horeca-gebruik (boven 1000 liter per dag) een commercieel RO-systeem met grote membranen.',
  },
  {
    q: 'Wat is het verschil tussen RO voor putwater en stadswater?',
    a: 'RO voor putwater heeft extra pre-filtratie en is robuuster gebouwd dan een standaard onder-aanrecht systeem voor stadswater. Putwater bevat vaak ijzer, mangaan, sediment en bacterien die een gewoon RO-systeem snel beschadigen. Aanpassingen zijn: extra sedimentfilter 20 micrometer (grof), eventueel ijzer/mangaanfilter, anti-scaling pre-treatment, en hogere kwaliteit membraan (Dow Filmtec TW30 of gelijkwaardig). Een goedkoop standaard RO-systeem zonder aanpassingen voor putwater raakt binnen 6 tot 12 maanden defect.',
  },
  {
    q: 'Verwijdert RO ook bacterien uit putwater?',
    a: 'Het RO-membraan houdt bacterien fysiek tegen (porie 0,0001 micrometer versus bacterie 0,2-10 micrometer). In theorie 99,9 procent reductie. Maar bacterien kunnen zich vermenigvuldigen in het opslagvat na de RO of in de leidingen erna. Voor betrouwbare microbiologische veiligheid bij putwater wordt RO altijd gecombineerd met een UV-lamp na het opslagvat. Deze combinatie geeft compleet veilig drinkwater (chemisch plus microbiologisch). Zie ook details over UV op de UV-desinfectie pagina van dit platform.',
  },
  {
    q: 'Hoeveel afvalwater produceert RO bij putwater?',
    a: 'Standaard RO-systemen produceren 3 tot 4 liter afvalwater per liter zuiver water (efficientie 20-25 procent). Bij putwater met hogere TDS-belasting kan dat oplopen tot 5 tot 6 liter afval. Moderne systemen met permeaatpomp of zero-waste technologie bereiken 1:1 of zelfs lagere afvalverhoudingen. Het afvalwater (concentraat) kan voor toilet, tuin of wasmachine worden hergebruikt om water te besparen. Bij putwater met eigen waterbron is het waterverlies financieel minder zwaar, maar nog steeds aandacht waard voor pompverbruik en lange-termijn capaciteit.',
  },
  {
    q: 'Wat kost een RO-systeem voor putwater?',
    a: 'Een kwaliteit-RO-systeem voor putwater kost 600 tot 1500 euro inclusief alle filters. Een instapmodel (75 GPD, 5-traps) 450 tot 700 euro. Premium systemen met permeaatpomp en remineralisatie 900 tot 1500 euro. Installatiekosten door loodgieter 200 tot 400 euro. Jaarlijkse vervangingskosten: voorfilters elke 6 tot 12 maanden (40 tot 80 euro), membraan elke 2 tot 4 jaar (80 tot 150 euro). Totaal eerste jaar 850 tot 1900 euro inclusief installatie; daarna 80 tot 180 euro onderhoud per jaar.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Omgekeerde osmose voor putwater: 5-traps zuivering compleet',
  description:
    'Omgekeerde osmose verwijdert PFAS, zware metalen, nitraat en bacterien uit putwater. 5-traps systeem met minimaal 3 bar druk, capaciteit 200-600 liter per dag.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/putwater/omgekeerde-osmose',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OmgekeerdeOsmosePutwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Putwater', item: 'https://waterfilterplatform.nl/putwater' },
              { '@type': 'ListItem', position: 3, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/putwater/omgekeerde-osmose' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/putwater" className="hover:underline">Putwater</Link> &rsaquo;{' '}
          <span>Omgekeerde osmose</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose voor putwater: 5-traps zuivering compleet
          </h1>
          <p className="text-gray-700 text-lg">
            RO is de meest complete oplossing voor putwater: verwijdert zware metalen, PFAS, nitraat, pesticiden en (gecombineerd met UV) ook bacterien.
          </p>
        </div>

        <QuickAnswer answer="Omgekeerde osmose is de meest complete zuivering voor putwater: 5-traps systeem (sediment, voorkool, voorkool block, RO-membraan, nakool) verwijdert 95-99 procent van zware metalen, PFAS, nitraat, pesticiden en kalk. Minimaal 3 bar ingangsdruk nodig (hydrofoor regelen). Capaciteit 200-600 liter per dag bij Nederlandse putwatertemperatuur. Totaalkosten 600-1500 euro inclusief installatie." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom RO ideaal is voor putwater
        </h2>
        <p className="text-gray-700 mb-4">
          Putwater bevat een onvoorspelbare mix van verontreinigingen: zware metalen uit de bodem, nitraat van landbouw, PFAS uit lange-afstandstransport via grondwater, pesticiden, kalk en mineralen, en mogelijk bacterien. Geen enkele andere filtertechniek pakt deze brede combinatie aan in een systeem. Omgekeerde osmose doet dat wel.
        </p>
        <p className="text-gray-700 mb-4">
          Het RO-membraan met poriegrootte van 0,0001 micrometer (0,1 nanometer) houdt vrijwel alle opgeloste stoffen tegen. Watermoleculen (0,000275 micrometer) passeren wel; alle zouten, metalen, organische verbindingen en bacterien worden afgevoerd via het concentraat. Voor putwater zonder gekoppelde stadswaterleiding is RO daarom vaak de enige praktische optie voor compleet veilig drinkwater.
        </p>
        <p className="text-gray-700 mb-6">
          Voor de algemene techniek achter RO zie{' '}
          <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filtertechniek</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het 5-traps RO-proces uitgelegd
        </h2>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Traps 1: Sedimentfilter 5 micrometer</h3>
        <p className="text-gray-700 mb-4">
          Verwijdert zand, roest, kleideeltjes en sediment die de volgende stappen zouden beschadigen. Voor putwater met veel grove deeltjes adviseren wij een extra voor-sediment van 20 micrometer.
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Traps 2: GAC actief kool</h3>
        <p className="text-gray-700 mb-4">
          Granulaire actief kool (GAC) verwijdert chloor, geur, smaak en grote organische moleculen. Beschermt het RO-membraan dat gevoelig is voor chloor.
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Traps 3: Carbon block</h3>
        <p className="text-gray-700 mb-4">
          Fijne koolblock filtert resterende organische stoffen, VOC&apos;s, pesticiden en kleinste deeltjes weg. Tweede laag bescherming voor het membraan.
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Traps 4: RO-membraan</h3>
        <p className="text-gray-700 mb-4">
          Het hart van het systeem. Typisch een Dow Filmtec TW30-1812-75 (75 GPD = 284 L/dag) of TW30-1812-100 (100 GPD). Verwijdert 95-99,5 procent van alle opgeloste stoffen.
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Traps 5: Nakool (post-carbon)</h3>
        <p className="text-gray-700 mb-6">
          Een laatste actiefkoolfilter na het opslagvat verbetert de smaak en verwijdert eventuele geur uit het vat. Verlengt ook de standtijd van de leidingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Druk en capaciteit voor putwater
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Minimum</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Optimaal</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Ingangsdruk</td>
                <td className="border border-gray-300 px-3 py-2">3 bar</td>
                <td className="border border-gray-300 px-3 py-2">4 bar</td>
                <td className="border border-gray-300 px-3 py-2">6 bar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Watertemperatuur</td>
                <td className="border border-gray-300 px-3 py-2">5&deg;C</td>
                <td className="border border-gray-300 px-3 py-2">20&deg;C</td>
                <td className="border border-gray-300 px-3 py-2">35&deg;C</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">TDS-belasting</td>
                <td className="border border-gray-300 px-3 py-2">0 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">300 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">2000 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">IJzer</td>
                <td className="border border-gray-300 px-3 py-2">0 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,1 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">0,3 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Vrije chloor</td>
                <td className="border border-gray-300 px-3 py-2">0 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">0 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">0,1 mg/L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud en filtervervanging
        </h2>
        <p className="text-gray-700 mb-4">
          Onderhoud is essentieel voor betrouwbare werking. Voorfilters (sediment, GAC, carbon block) elke 6 tot 12 maanden vervangen, afhankelijk van putwaterkwaliteit. Het RO-membraan zelf gaat 2 tot 4 jaar mee bij goede voorbehandeling. Bij putwater met hoog ijzer kan de membraanlevensduur dalen naar 12-18 maanden.
        </p>
        <p className="text-gray-700 mb-6">
          Voor stap-voor-stap instructies zie{' '}
          <Link href="/onderhoud/osmose-filter-vervangen" className="text-[#005F8A] underline">osmose filter vervangen</Link>. Voor aanschafadvies zie{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">omgekeerde osmose kopen</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Combineren met UV en remineralisatie
        </h2>
        <p className="text-gray-700 mb-6">
          Voor compleet veilig putwater combineert u RO met UV-desinfectie (microbiologische veiligheid na het opslagvat) en eventueel remineralisatie (voor smaak en pH-correctie). Een complete put-installatie ziet er zo uit: sediment 20 micrometer, ijzer/mangaanfilter (indien nodig), 5-traps RO, UV-lamp, remineralisatie. Investering 1500 tot 3500 euro voor totale putwaterzuivering. Voor putwater-overzicht en strategie zie{' '}
          <Link href="/putwater" className="text-[#005F8A] underline">putwater hoofdpagina</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over RO voor putwater
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose techniek</h3>
              <p className="text-sm text-gray-600">Hoe het RO-membraan werkt en welke verontreinigingen worden tegengehouden.</p>
            </Link>
            <Link href="/omgekeerde-osmose/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose kopen</h3>
              <p className="text-sm text-gray-600">Aanschafgids met merken, prijzen en wat te letten op voor putwater.</p>
            </Link>
            <Link href="/onderhoud/osmose-filter-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmose filter vervangen</h3>
              <p className="text-sm text-gray-600">Stap-voor-stap instructies voor filter- en membraanvervanging.</p>
            </Link>
            <Link href="/putwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Putwater overzicht</h3>
              <p className="text-sm text-gray-600">Complete gids voor putwaterzuivering en behandelingsstrategieen.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
