import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Regenwater drinken in Nederland: mag het en wat kost het?',
  description:
    'Regenwater drinken in NL: wettelijk niet aanbevolen. Behandelingsketen volgens Drinkwaterbesluit, risico onbehandeld water, totaalkosten 1500-3500 euro.',
  alternates: { canonical: 'https://waterfilterplatform.nl/regenwater/drinken' },
};

const faqItems = [
  {
    q: 'Mag ik regenwater drinken in Nederland?',
    a: 'Wettelijk gezien is regenwater drinken niet verboden op uw eigen perceel, maar het wordt sterk afgeraden. Het Drinkwaterbesluit en de Drinkwaterregeling stellen strenge eisen aan water dat voor menselijke consumptie wordt gebruikt: 50+ parameters voor microbiologie, chemische verontreiniging, zware metalen en organische stoffen. Onbehandeld regenwater voldoet hier niet aan. Wilt u toch regenwater drinken, dan moet de behandelingsketen aantoonbaar voldoen aan deze normen, met periodieke laboratoriumcontrole.',
  },
  {
    q: 'Welke filters zijn nodig om regenwater drinkbaar te maken?',
    a: 'Een complete behandelingsketen omvat: (1) dakfilter en voorfilter voor grof vuil, (2) sedimentfilter voor fijne deeltjes, (3) actief kool voor organische stoffen, smaak en geur, (4) omgekeerde osmose voor zware metalen, PFAS en microbiologie, (5) UV-desinfectie als laatste barriere, en (6) remineralisatie om mineralen toe te voegen die de osmose heeft verwijderd. Totale investering: 1500-3500 euro voor de hardware, plus laboratoriumcontrole van 100-300 euro per jaar.',
  },
  {
    q: 'Wat zijn de risico\'s van onbehandeld regenwater drinken?',
    a: 'Onbehandeld regenwater kan bacterien (E. coli, Legionella, Pseudomonas), virussen, parasieten (Cryptosporidium, Giardia), zware metalen (lood, zink uit dakgoten), PAK\'s uit bitumen-dakbedekking, ftalaten uit plastic onderdelen en stof- en luchtvervuiling bevatten. Acuut risico: maag-darminfecties, diarree, koorts. Lange-termijn risico: ophoping van zware metalen, hormoonverstorende stoffen en kankerverwekkende verbindingen. Voor kinderen, ouderen en immuungecompromitteerden is het risico extra groot.',
  },
  {
    q: 'Wat is het Drinkwaterbesluit precies?',
    a: 'Het Drinkwaterbesluit (2011) is de Nederlandse uitwerking van de Europese Drinkwaterrichtlijn. Het stelt eisen aan de kwaliteit van drinkwater dat door drinkwaterbedrijven wordt geleverd: parameters zoals nitraat (max 50 mg/L), lood (max 10 microgram/L), pesticiden (max 0,1 microgram/L per stof), microbiologie (geen E. coli per 100 mL) en sinds 2025 ook PFAS. Particuliere drinkwatervoorziening valt onder dezelfde regels. Bekijk onze pagina over de complete normen.',
  },
  {
    q: 'Wat kost een drinkwatergeschikte regenwaterinstallatie?',
    a: 'Hardware: 1500-3500 euro voor de complete behandelingsketen (filters, RO, UV, remineralisatie). Installatie door een loodgieter: 500-1500 euro extra. Jaarlijks: 200-400 euro aan filtervervangingen plus 100-300 euro voor laboratoriumonderzoek. Eenmalige aanleg van opvang (tank 3000-10000 liter): 1500-5000 euro. Totaal eerste jaar: 4000-10000 euro. Daarna 300-700 euro per jaar. Vergelijk dit met kraanwater: circa 1 euro per kubieke meter, voor een gezin van 4 personen 150-200 euro per jaar.',
  },
  {
    q: 'Is regenwater drinken duurzamer dan kraanwater?',
    a: 'Niet noodzakelijk. Nederlands kraanwater wordt zeer efficient gezuiverd en heeft een kleine CO2-voetafdruk per liter (circa 0,3 gram CO2/L). Een huishoudelijke regenwaterinstallatie heeft aanzienlijke ingebedde CO2 in tank, pompen, filters, UV-systeem en remineralisatie, en gebruikt continu elektriciteit (pomp, UV). Per liter is het verschil verwaarloosbaar of negatief. Voor toepassingen zoals WC-spoeling en tuinbesproeiing is regenwater wel duurzamer, omdat dan minder zuivering nodig is.',
  },
  {
    q: 'Hoe vaak moet ik mijn regenwater laten testen?',
    a: 'Voor drinkwatertoepassing: minimaal jaarlijks een uitgebreid waterrapport bij een geaccrediteerd laboratorium. Test op: microbiologie (E. coli, coliformen, totaal kiemgetal), zware metalen (lood, koper, zink), nitraat, PFAS, pH en hardheid. Bij wijziging van de installatie of na een storing direct testen. Voor niet-drinkwatertoepassingen (WC, tuin) is testen niet wettelijk verplicht, maar wel aanbevolen bij twijfel over geur, smaak of kleur.',
  },
  {
    q: 'Is osmose-gezuiverd kraanwater niet veiliger dan regenwater drinken?',
    a: 'Ja, in vrijwel alle gevallen is osmose-gezuiverd kraanwater veiliger, goedkoper en eenvoudiger dan regenwater drinken. U start dan met water dat al voldoet aan het Drinkwaterbesluit, en de osmose verwijdert nog eens PFAS, medicijnresten, lood en restjes verontreiniging. Hardware kost 300-1500 euro, jaarlijks onderhoud 80-200 euro, zonder noodzaak van laboratoriumcontrole. Voor de meeste huishoudens is dit de slimmere keuze.',
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
  headline: 'Regenwater drinken in Nederland: mag het en wat kost het?',
  description:
    'Regenwater drinken in NL: wettelijk niet aanbevolen. Behandelingsketen volgens Drinkwaterbesluit, risico onbehandeld water, totaalkosten 1500-3500 euro.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/regenwater/drinken',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function RegenwaterDrinkenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Regenwater', item: 'https://waterfilterplatform.nl/regenwater' },
              { '@type': 'ListItem', position: 3, name: 'Regenwater drinken', item: 'https://waterfilterplatform.nl/regenwater/drinken' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/regenwater" className="hover:underline">Regenwater</Link> &rsaquo;{' '}
          <span>Drinken</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Regenwater drinken in Nederland: mag het en wat kost het?
          </h1>
          <p className="text-gray-700 text-lg">
            Regenwater drinken is wettelijk niet verboden, maar wel sterk afgeraden. Wat schrijft het Drinkwaterbesluit voor, welke risico&apos;s loopt u en wat zijn de totale kosten?
          </p>
        </div>

        <QuickAnswer answer="Regenwater drinken is in NL niet wettelijk verboden, maar wel sterk afgeraden. Onbehandeld regenwater bevat bacterien, zware metalen en organische verontreinigingen. Wilt u toch regenwater als drinkwater, dan is een complete behandelingsketen (dak, sediment, kool, omgekeerde osmose, UV, remineralisatie) nodig die voldoet aan het Drinkwaterbesluit. Totale kosten 1500-3500 euro hardware plus 200-400 euro onderhoud per jaar." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wettelijke status: mag regenwater drinken in Nederland?
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland is er geen wet die het drinken van regenwater op uw eigen perceel direct verbiedt. Het Drinkwaterbesluit en de bijbehorende Drinkwaterregeling regelen primair de levering van drinkwater door drinkwaterbedrijven aan consumenten. Een particulier die op eigen perceel regenwater opvangt en drinkt valt formeel niet onder deze leveringsplicht. Echter: zodra u regenwater aanbiedt aan derden (bijvoorbeeld huurders of gasten in een vakantiewoning), valt u wel onder de eisen van het Drinkwaterbesluit.
        </p>
        <p className="text-gray-700 mb-6">
          De volledige normen zijn te vinden in onze diepgaande pagina over <Link href="/drinkwaternormen" className="text-[#005F8A] underline">drinkwaternormen</Link>. Het Drinkwaterbesluit stelt eisen aan meer dan 50 parameters, waaronder zware metalen, pesticiden, microbiologie, nitraat en sinds 2025 ook PFAS. Onbehandeld regenwater voldoet aan vrijwel geen van deze parameters, omdat het ongezuiverd via dak en pijpen wordt opgevangen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risico&apos;s van onbehandeld regenwater drinken
        </h2>
        <p className="text-gray-700 mb-4">
          Onbehandeld regenwater bevat een onvoorspelbare mix van verontreinigingen, afhankelijk van uw dakbedekking, locatie en weersomstandigheden. De belangrijkste risico&apos;s:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Microbiologisch:</strong> E. coli, Legionella, Pseudomonas, Cryptosporidium en Giardia uit vogelpoep en organisch materiaal op het dak.</li>
          <li><strong>Zware metalen:</strong> Lood uit oudere dakgoten of soldeerverbindingen, zink uit zinken dakgoten, koper uit waterleidingen.</li>
          <li><strong>Organisch:</strong> PAK&apos;s en ftalaten uit bitumen-dakbedekking, rubberen aansluitingen en kunststof regenpijpen.</li>
          <li><strong>Luchtvervuiling:</strong> Stikstofdioxide, fijnstof en in industriegebieden mogelijk PFAS uit luchtdepositie.</li>
          <li><strong>Pesticiden:</strong> Bij regenwater dat door luchtdepositie pesticiden uit landbouwgebieden meeneemt.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De complete behandelingsketen voor drinkwaterkwaliteit
        </h2>
        <p className="text-gray-700 mb-4">
          Wilt u toch regenwater geschikt maken voor consumptie, dan is een meertraps-installatie verplicht. Een typische opstelling:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Stap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Functie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Dakfilter</td>
                <td className="border border-gray-300 px-3 py-2">Bladeren, grof vuil</td>
                <td className="border border-gray-300 px-3 py-2">&euro;25&ndash;75</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Voorfilter</td>
                <td className="border border-gray-300 px-3 py-2">Zand, fijne deeltjes (100-200 micron)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;75&ndash;200</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2">Fijn sediment (5-20 micron)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100&ndash;250</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool</td>
                <td className="border border-gray-300 px-3 py-2">Smaak, geur, organisch</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150&ndash;350</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2">Zware metalen, PFAS, microbiologie</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;1500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">UV-desinfectie</td>
                <td className="border border-gray-300 px-3 py-2">Bacterien, virussen</td>
                <td className="border border-gray-300 px-3 py-2">&euro;250&ndash;700</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">Mineralen terugvoegen na RO</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150&ndash;400</td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td className="border border-gray-300 px-3 py-2">Totaal hardware</td>
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2">&euro;1500&ndash;3500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Meer informatie over de RO-stap leest u op onze pagina <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>. De voorbehandelende stappen worden uitgebreid besproken op <Link href="/regenwater/filteren" className="text-[#005F8A] underline">regenwater filteren</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud en laboratoriumcontrole
        </h2>
        <p className="text-gray-700 mb-4">
          Een drinkwatergeschikte regenwaterinstallatie vraagt structurele bewaking. Jaarlijks lab-onderzoek bij een geaccrediteerd waterlaboratorium kost 100-300 euro afhankelijk van het aantal parameters. Test minimaal: E. coli, totaal kiemgetal, lood, koper, nitraat, pH en geleidbaarheid. In gebieden met bekende PFAS-problematiek aanvullend testen op PFOS, PFOA en PFHxS.
        </p>
        <p className="text-gray-700 mb-6">
          Filtervervanging: sedimentfilter elke 3-6 maanden, actief kool elke 6-12 maanden, RO-membraan elke 2-3 jaar, UV-lamp jaarlijks. Totale onderhoudskosten 200-400 euro per jaar. Bij storing of na schade direct testen voor hervatting van gebruik.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Alternatief: kraanwater met osmosefilter
        </h2>
        <p className="text-gray-700 mb-6">
          Voor de meeste Nederlandse huishoudens is regenwater drinken kostbaar en risicovol. Een veiligere route: gebruik kraanwater (dat al voldoet aan het Drinkwaterbesluit) en plaats een onder-aanrecht omgekeerde osmose filter. Deze verwijdert nog eens PFAS, lood, medicijnresten en organische verontreinigingen, voor 300-1500 euro hardware en 80-200 euro per jaar onderhoud, zonder lab-controles. Gebruik regenwater dan voor tuin en WC-spoeling. Bekijk de regenwater opties op onze <Link href="/regenwater" className="text-[#005F8A] underline">regenwater hub</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over regenwater drinken
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
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen NL</h3>
              <p className="text-sm text-gray-600">Volledige parameters van het Drinkwaterbesluit en wat ze betekenen.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Hoe RO-filters PFAS, zware metalen en microbiologie verwijderen.</p>
            </Link>
            <Link href="/regenwater/filteren" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater filteren</h3>
              <p className="text-sm text-gray-600">De 5 stappen van regenwaterfiltratie van dakfilter tot UV.</p>
            </Link>
            <Link href="/regenwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater hub</h3>
              <p className="text-sm text-gray-600">Compleet overzicht van regenwateropvang, opslag en toepassingen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </main>
    </>
  );
}
