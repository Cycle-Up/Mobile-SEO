import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'UV-desinfectie voor putwater: dosering, kosten en onderhoud',
  description:
    'UV-C lampen (254 nm) desinfecteren putwater met 30 mJ/cm2 dosering. Pre-filtratie onder 5 micrometer nodig, lampvervanging elk jaar, totaalkosten 350-900 euro installatie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/putwater/uv-desinfectie' },
};

const faqItems = [
  {
    q: 'Hoe werkt UV-desinfectie voor putwater?',
    a: 'UV-desinfectie gebruikt ultraviolet licht met golflengte 254 nanometer (UV-C). Deze straling beschadigt het DNA en RNA van bacterien, virussen, schimmels en protozoen, waardoor ze niet meer kunnen vermeerderen. Het water stroomt langs een kwarts-omhulde UV-lamp in een roestvrijstalen reactor. De effectiviteit hangt af van de blootstellingsdosering (mJ/cm2): voor putwater is minimaal 30 mJ/cm2 nodig om E. coli, Legionella en virussen voor 99,99 procent te inactiveren.',
  },
  {
    q: 'Welke UV-dosering is nodig voor veilig putwater?',
    a: 'De aanbevolen dosering voor putwater is minimaal 30 mJ/cm2, conform NSF/ANSI 55 Class A. Bij deze dosering worden E. coli, coliforme bacterien, Legionella, Cryptosporidium en Giardia voor 99,99 procent (4-log reductie) geinactiveerd. Een lagere klasse B (16 mJ/cm2) is alleen geschikt voor reeds gedesinfecteerd water. Voor putwater met bacteriologisch risico altijd Class A kiezen. De effectieve dosering daalt bij hogere stroomsnelheid of bij vertroebeling van het water.',
  },
  {
    q: 'Heb ik pre-filtratie nodig voor UV-desinfectie?',
    a: 'Ja, pre-filtratie is essentieel bij UV-desinfectie van putwater. Sediment-, ijzer- en organische deeltjes blokkeren de UV-straling, waardoor bacterien achter deze deeltjes overleven (schaduwbescherming). De minimum eis is een sedimentfilter van 5 micrometer voor de UV-reactor. Bij hoog ijzer- of mangaangehalte (boven 0,3 mg/L) is een extra ijzerfilter nodig om aanslag op het kwartshulze te voorkomen. Idealiter ook actief kool om chloor en organisch materiaal weg te nemen die de UV-effectiviteit beperken.',
  },
  {
    q: 'Hoe vaak moet ik de UV-lamp vervangen?',
    a: 'Een standaard UV-lamp gaat 9000 uur mee, wat bij continue aansluiting neerkomt op ongeveer 12 maanden. Hoewel de lamp na 12 maanden nog steeds licht geeft, daalt de UV-C output naar onder 70 procent van de originele waarde, onvoldoende voor betrouwbare desinfectie. Vervang daarom strikt jaarlijks de lamp, ook als het systeem normaal lijkt te werken. Moderne UV-systemen hebben een ingebouwde timer of UV-sensor die melding geeft. De kwartshulze hoeft alleen vervangen bij barst of zware kalkaanslag (elke 5 tot 10 jaar).',
  },
  {
    q: 'Wat kost een UV-systeem voor putwater?',
    a: 'Een complete UV-installatie voor huishoudelijk putwater kost 350 tot 900 euro. Een 8-watt systeem (geschikt voor 1500 liter per uur, een gezin van 4) kost 350 tot 500 euro. Een 25-watt systeem (4000 liter per uur, groter huishouden of horeca) kost 600 tot 900 euro. Installatiekosten door een loodgieter 150 tot 300 euro. Jaarlijkse vaste kosten: nieuwe UV-lamp 45 tot 95 euro, sedimentfilter 20 tot 40 euro, elektriciteit ongeveer 25 euro. Totale jaarlijkse onderhoudskosten dus 90 tot 160 euro.',
  },
  {
    q: 'Verwijdert UV ook chemische verontreinigingen?',
    a: 'Nee, UV-desinfectie is alleen effectief tegen levende micro-organismen (bacterien, virussen, schimmels, protozoen). UV verwijdert GEEN zware metalen, pesticiden, PFAS, medicijnresten, chloor, nitraat of opgeloste mineralen. UV werkt fysisch (DNA-beschadiging) en niet chemisch. Voor chemische verontreinigingen heeft u een aanvullend filtersysteem nodig, zoals actief kool (organische stoffen) of omgekeerde osmose (alle opgeloste stoffen). Voor compleet veilig putwater combineren mensen vaak UV plus RO of UV plus koolfilter.',
  },
  {
    q: 'Werkt UV bij troebel of ijzerhoudend putwater?',
    a: 'Nee, UV-desinfectie vereist helder water. Bij UV-transmissie onder 75 procent (gemeten bij 254 nm) is de straling niet diep genoeg om alle bacterien te bereiken. Putwater met sediment, ijzer (boven 0,3 mg/L), mangaan (boven 0,05 mg/L) of organische bruine kleur moet eerst worden voorbehandeld. Een standaard voorbehandeling: ijzer/mangaanverwijdering plus sediment 5 micrometer plus actief kool. Pas daarna stroomt water door de UV-reactor. Sla deze stap niet over: anders is uw UV-systeem schijnveiligheid.',
  },
  {
    q: 'Is UV-gedesinfecteerd putwater drinkwater?',
    a: 'UV-gedesinfecteerd putwater is microbiologisch veilig (geen bacterien, virussen, parasieten), maar voldoet niet automatisch aan alle drinkwatereisen. Chemische parameters zoals nitraat, pesticiden, zware metalen en PFAS worden niet beinvloed door UV en moeten apart worden getest en zo nodig behandeld. Voor volledige drinkwaterkwaliteit uit een put: laat jaarlijks zowel microbiologisch (E. coli, coliformen) als chemisch (nitraat, metalen, bestrijdingsmiddelen) testen. Combineer UV met aanvullende filtering voor zorgwekkende chemische stoffen.',
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
  headline: 'UV-desinfectie voor putwater: dosering, kosten en onderhoud',
  description:
    'UV-C lampen (254 nm) desinfecteren putwater met 30 mJ/cm2 dosering. Pre-filtratie onder 5 micrometer nodig, lampvervanging jaarlijks, kosten 350-900 euro installatie.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/putwater/uv-desinfectie',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function UVDesinfectiePutwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Putwater', item: 'https://waterfilterplatform.nl/putwater' },
              { '@type': 'ListItem', position: 3, name: 'UV-desinfectie', item: 'https://waterfilterplatform.nl/putwater/uv-desinfectie' },
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
          <span>UV-desinfectie</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            UV-desinfectie voor putwater: dosering, kosten en onderhoud
          </h1>
          <p className="text-gray-700 text-lg">
            UV-C licht op 254 nm inactiveert bacterien, virussen en parasieten in putwater. Met juiste dosering en pre-filtratie 99,99 procent veilig.
          </p>
        </div>

        <QuickAnswer answer="UV-desinfectie inactiveert bacterien en virussen in putwater met UV-C licht (254 nm) bij dosering van minimaal 30 mJ/cm2 (NSF Class A). Pre-filtratie tot 5 micrometer is verplicht om schaduwbescherming te voorkomen. Lampvervanging elke 12 maanden (45-95 euro). Installatie kost 350-900 euro afhankelijk van capaciteit. UV verwijdert geen chemische stoffen zoals zware metalen, PFAS of nitraat." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe UV-desinfectie putwater veilig maakt
        </h2>
        <p className="text-gray-700 mb-4">
          UV-desinfectie werkt door ultraviolet licht met een specifieke golflengte van 254 nanometer (UV-C) door het water te sturen. Deze straling wordt geabsorbeerd door het DNA en RNA van micro-organismen en vormt thymine-dimeren die de genetische code verstoren. Bacterien en virussen kunnen daardoor niet meer vermenigvuldigen en sterven af.
        </p>
        <p className="text-gray-700 mb-4">
          De effectieve dosering wordt uitgedrukt in mJ/cm2 (milliJoule per vierkante centimeter), het product van UV-intensiteit en blootstellingstijd. Voor putwater geldt 30 mJ/cm2 als minimum (NSF/ANSI 55 Class A) om E. coli, Legionella, virussen en parasieten als Cryptosporidium en Giardia voor 99,99 procent (4-log reductie) onschadelijk te maken.
        </p>
        <p className="text-gray-700 mb-6">
          Voor uitgebreide technische uitleg zie ook{' '}
          <Link href="/filtertechnieken/uv-sterilisatie" className="text-[#005F8A] underline">UV-sterilisatie techniek</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Pre-filtratie: onmisbaar voor UV-effectiviteit
        </h2>
        <p className="text-gray-700 mb-4">
          UV-licht moet ongehinderd door het water reizen om bacterien te bereiken. Sediment, ijzer, mangaan en organische deeltjes blokkeren UV-straling letterlijk: micro-organismen kunnen achter zo&apos;n deeltje schuilen (schaduweffect) en de behandeling overleven. Daarom is pre-filtratie verplicht.
        </p>
        <p className="text-gray-700 mb-4">
          Een standaard voorbehandeling voor putwater bestaat uit drie stappen: sediment 20 micrometer (grof), sediment 5 micrometer (fijn) en actief kool (chloor en organische stoffen). Bij verhoogd ijzer (boven 0,3 mg/L) of mangaan (boven 0,05 mg/L) is een extra ijzer-/mangaanfilter nodig &mdash; anders ontstaat snel een bruine aanslag op de kwartshulze die de UV blokkeert.
        </p>
        <p className="text-gray-700 mb-6">
          UV-transmissie (UVT) onder 75 procent gemeten op 254 nm is een waarschuwingssignaal: de pre-filtratie is onvoldoende. Voor putwater met microbiologisch risico zie ook{' '}
          <Link href="/stoffen-in-drinkwater/microbiologisch" className="text-[#005F8A] underline">microbiologische verontreiniging</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          UV-dosering en capaciteit: vermogen kiezen
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Vermogen</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Capaciteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Toepassing</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">8 W</td>
                <td className="border border-gray-300 px-3 py-2">1500 L/h</td>
                <td className="border border-gray-300 px-3 py-2">Klein gezin (2-4 personen)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;350&ndash;500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">14 W</td>
                <td className="border border-gray-300 px-3 py-2">2500 L/h</td>
                <td className="border border-gray-300 px-3 py-2">Gezin met tuin/buitenkraan</td>
                <td className="border border-gray-300 px-3 py-2">&euro;450&ndash;650</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">25 W</td>
                <td className="border border-gray-300 px-3 py-2">4000 L/h</td>
                <td className="border border-gray-300 px-3 py-2">Groot huishouden/horeca</td>
                <td className="border border-gray-300 px-3 py-2">&euro;600&ndash;900</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">40 W</td>
                <td className="border border-gray-300 px-3 py-2">6000 L/h</td>
                <td className="border border-gray-300 px-3 py-2">Camping/agrarisch</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800&ndash;1300</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie en onderhoud
        </h2>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Installatie</h3>
        <p className="text-gray-700 mb-4">
          De UV-reactor wordt na de hydrofoor en pre-filters geinstalleerd, voor de aftakking naar de woning. Horizontaal of verticaal monteren is mogelijk; volg fabrikantvoorschriften. De UV-controller heeft een vaste 230V-aansluiting nodig. Reken op 2 tot 4 uur werk voor een loodgieter (150 tot 300 euro arbeidskosten).
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Jaarlijks onderhoud</h3>
        <p className="text-gray-700 mb-4">
          De UV-lamp vervangt u elke 9000 branduren ofwel 12 maanden, ook als het systeem nog licht geeft. De UV-output daalt na 12 maanden tot onder 70 procent en is dan onbetrouwbaar. Vervangkosten 45 tot 95 euro afhankelijk van merk. Reinig de kwartshulze tegelijk met een zachte doek en azijn als er kalkaanslag is.
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Bacteriologische controle</h3>
        <p className="text-gray-700 mb-6">
          Laat jaarlijks een microbiologische test uitvoeren (E. coli, intestinale enterococcen, coliformen). Zie hiervoor{' '}
          <Link href="/putwater/bacterien-testen" className="text-[#005F8A] underline">bacterien testen in putwater</Link> voor protocollen en laboratoria.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat UV niet doet: chemische verontreinigingen
        </h2>
        <p className="text-gray-700 mb-6">
          UV-desinfectie werkt uitsluitend tegen levende micro-organismen. Het verwijdert geen zware metalen, geen pesticiden, geen PFAS, geen medicijnresten, geen nitraat en geen kalk. Voor compleet veilig putwater met zowel microbiologische als chemische zuivering combineert u UV met aanvullende filtratie. Voor zorgwekkende chemische verontreinigingen is meestal omgekeerde osmose de keuze. Zie ook het overzicht op{' '}
          <Link href="/putwater" className="text-[#005F8A] underline">putwater hoofdpagina</Link> voor combinatie-oplossingen.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over UV-desinfectie
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
            <Link href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie techniek</h3>
              <p className="text-sm text-gray-600">Hoe UV-C licht microbiologische verontreiniging onschadelijk maakt.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/microbiologisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Microbiologische verontreiniging</h3>
              <p className="text-sm text-gray-600">Bacterien, virussen en parasieten in drinkwater en risico&apos;s.</p>
            </Link>
            <Link href="/putwater/bacterien-testen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Bacterien testen in putwater</h3>
              <p className="text-sm text-gray-600">Hoe u E. coli en coliformen laat testen door een erkend laboratorium.</p>
            </Link>
            <Link href="/putwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Putwater overzicht</h3>
              <p className="text-sm text-gray-600">Complete gids voor zuivering en behandeling van putwater in Nederland.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
