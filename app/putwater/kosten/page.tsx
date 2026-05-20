import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Putwater filter kosten: 600-3500 euro budget per setup',
  description:
    'Putwaterzuivering kost 600 euro (UV plus sediment) tot 3500 euro (compleet RO plus UV plus ijzer). Jaarlijks onderhoud 100-300 euro per setup.',
  alternates: { canonical: 'https://waterfilterplatform.nl/putwater/kosten' },
};

const faqItems = [
  {
    q: 'Wat kost een complete putwaterzuivering?',
    a: 'Een basis-setup met UV-desinfectie en sedimentfilter kost 600 tot 1000 euro inclusief installatie. Een middelmatige setup met RO en UV bedraagt 1500 tot 2500 euro. Een complete oplossing voor probleem-putwater (ijzer/mangaan plus RO plus UV plus remineralisatie) loopt op tot 2500 tot 3500 euro. De exacte prijs hangt af van putwaterkwaliteit (vereiste laboratoriumtest 95 tot 250 euro), gewenste capaciteit en installateur. Vraag minimaal twee offertes aan en investeer eerst in een gedegen wateranalyse voor de juiste keuze.',
  },
  {
    q: 'Wat zijn jaarlijkse onderhoudskosten?',
    a: 'Jaarlijkse onderhoudskosten liggen tussen 100 en 300 euro afhankelijk van uw setup. Een UV-only systeem: 90 tot 160 euro per jaar (lamp, sedimentfilter, elektriciteit). Een RO-systeem: 80 tot 180 euro per jaar (voorfilters elke 6-12 maanden, membraan elke 2-4 jaar verspreid over jaarbudget). Een complete UV plus RO setup: 180 tot 300 euro per jaar. Daarnaast jaarlijkse laboratoriumtest 95 tot 250 euro voor controle van microbiologische en chemische parameters. Reken in totaal op 250 tot 500 euro all-in per jaar.',
  },
  {
    q: 'Is putwaterzuivering duurder dan aansluiting op het waternet?',
    a: 'Aansluiting op het waternet kost vaak 2500 tot 8000 euro eenmalig (afhankelijk van afstand tot hoofdleiding), plus jaarlijks 250 tot 450 euro waterkosten voor gemiddeld gezin. Putwaterzuivering kost 600 tot 3500 euro eenmalig plus 250 tot 500 euro onderhoud per jaar. Op de lange termijn (10 jaar) zijn de kosten vergelijkbaar of putwater zelfs voordeliger. Voordelen van eigen put: onafhankelijkheid, geen netwerkstoringen. Nadelen: zelf verantwoordelijk voor kwaliteit en testen. Voor afgelegen locaties is een eigen put met zuivering vaak de enige optie.',
  },
  {
    q: 'Welke setup heb ik nodig voor mijn putwater?',
    a: 'De juiste setup hangt af van uw wateranalyse. Bij alleen microbiologisch risico (E. coli, coliformen): UV plus sediment = 600-1000 euro. Bij nitraat of pesticiden boven norm: RO plus UV = 1500-2500 euro. Bij ijzer/mangaan plus algemene zuivering: ijzer/mangaanfilter plus RO plus UV = 2500-3500 euro. Bij PFAS verdenking: zeker RO met goede voorbehandeling = 1800-2800 euro. Laat eerst een complete laboratoriumanalyse maken voordat u investeert; een test van 150-250 euro voorkomt aanschaf van duizenden euro aan onnodige apparatuur.',
  },
  {
    q: 'Kan ik subsidie krijgen voor putwaterzuivering?',
    a: 'In Nederland is er geen specifieke landelijke subsidie voor putwaterzuivering, in tegenstelling tot waterontharding of warmtepompen. Voor woningen in een Beschermingsgebied Drinkwater of bij bewezen verontreiniging (bijvoorbeeld PFAS door industrie) zijn er soms aansprakelijkheidsregelingen via gemeente of provincie. Bij oude putten met loden delen kan een aanpak gemeente-rente lening interessant zijn. Sommige zorgverzekeringen vergoeden onderdelen bij medische noodzaak. Informeer altijd bij uw gemeente, omgevingsdienst en provincie voor lokale regelingen.',
  },
  {
    q: 'Hoeveel bespaar ik op flessenwater?',
    a: 'Een gezin van 4 dat gemiddeld 4 liter water per dag gebruikt voor drinken en koken besteedt bij flessenwater 700 tot 1200 euro per jaar (afhankelijk van merk en aanbiedingen). Bij eigen putwater met RO-zuivering kost dat 30 tot 60 euro per jaar aan filterverbruik plus oneindig veel liters voor extra gebruik (koffie, thee, soep). Besparing 650 tot 1150 euro per jaar. Terugverdientijd van een RO-systeem (1500 euro) versus flessenwater: 1,3 tot 2,3 jaar. Daarna structurele besparing plus geen plastic afval.',
  },
  {
    q: 'Welke verborgen kosten heeft putwaterzuivering?',
    a: 'Verborgen kosten omvatten: 1) Elektriciteitskosten van UV-lamp en RO-boosterpomp (25-50 euro per jaar), 2) Waterverbruik door RO-afvalwater (3-5 liter per liter zuiver, maar bij eigen put alleen pompverbruik), 3) Opslagvat-onderhoud en eventuele vervanging (40 tot 80 euro elke 5-10 jaar), 4) Eventuele aanvullende laboratoriumtests bij smaak/geur-veranderingen (50 tot 150 euro per test), 5) Vervanging hydrofoor of pomp na 10-15 jaar (400 tot 1200 euro). Reken bij budget altijd 10 tot 15 procent boven nominale onderhoudskosten voor onverwachte uitgaven.',
  },
  {
    q: 'Loont DIY-installatie tegenover loodgieter inhuren?',
    a: 'Bij technisch onderlegde particulieren is DIY-installatie van een RO-systeem haalbaar en bespaart 200 tot 400 euro arbeidskosten. UV-systemen vragen wat meer kennis (elektriciteit, drukcontrole) en zijn lastiger voor doe-het-zelvers. Volledige integratie met putpomp en hydrofoor laat u beter aan een vakman over: foutieve installatie kan tot pompschade leiden van 500 tot 1500 euro. Voor onderhoud (filtervervanging) is DIY juist sterk aan te raden: het is eenvoudig, bespaart 80 tot 120 euro per beurt en kost slechts 10 minuten met heldere instructies.',
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
  headline: 'Putwater filter kosten: 600-3500 euro budget per setup',
  description:
    'Putwaterzuivering kost 600 euro (UV plus sediment) tot 3500 euro (compleet RO plus UV plus ijzer). Jaarlijks onderhoud 100-300 euro per setup.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/putwater/kosten',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function PutwaterKostenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Putwater', item: 'https://waterfilterplatform.nl/putwater' },
              { '@type': 'ListItem', position: 3, name: 'Kosten', item: 'https://waterfilterplatform.nl/putwater/kosten' },
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
          <span>Kosten</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Putwater filter kosten: 600 tot 3500 euro budget per setup
          </h1>
          <p className="text-gray-700 text-lg">
            Van een basis UV-systeem tot een compleet RO-plus-UV met ijzerverwijdering: lees hier wat elke configuratie kost inclusief onderhoud.
          </p>
        </div>

        <QuickAnswer answer="Putwaterzuivering kost 600-1000 euro voor basis UV-setup, 1500-2500 euro voor RO-plus-UV, en 2500-3500 euro voor complete oplossing met ijzer/mangaanverwijdering. Jaarlijks onderhoud 100-300 euro afhankelijk van setup. Een laboratoriumanalyse (95-250 euro) vooraf is essentieel om de juiste configuratie te kiezen. Terugverdientijd versus flessenwater 1,3-2,3 jaar voor RO-systeem." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kostenoverzicht per setup-type
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Setup</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanschaf</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Installatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Onderhoud/jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Basis: UV + sediment</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400&ndash;700</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150&ndash;300</td>
                <td className="border border-gray-300 px-3 py-2">&euro;90&ndash;160</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">RO onder-aanrecht</td>
                <td className="border border-gray-300 px-3 py-2">&euro;600&ndash;1200</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200&ndash;400</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80&ndash;180</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">RO + UV gecombineerd</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1100&ndash;2000</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;500</td>
                <td className="border border-gray-300 px-3 py-2">&euro;180&ndash;300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Compleet: Fe/Mn + RO + UV</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1800&ndash;2900</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400&ndash;700</td>
                <td className="border border-gray-300 px-3 py-2">&euro;250&ndash;450</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Premium: alles + remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">&euro;2500&ndash;3500</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;800</td>
                <td className="border border-gray-300 px-3 py-2">&euro;280&ndash;500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Eenmalige kosten in detail
        </h2>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Laboratoriumanalyse</h3>
        <p className="text-gray-700 mb-4">
          De eerste investering: een complete wateranalyse kost 95 tot 250 euro afhankelijk van het pakket. Standaardpakket bevat bacterien (E. coli, coliformen), nitraat, ijzer, mangaan, pH, hardheid en geleidbaarheid. Uitgebreid pakket voegt zware metalen (8-15), pesticiden, PFAS en andere micro-verontreinigingen toe. Deze investering is essentieel; zonder analyse koopt u willekeurig of overdreven apparatuur.
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Apparatuur</h3>
        <p className="text-gray-700 mb-4">
          De grootste uitgavenpost. UV-systeem 8-25 watt: 350 tot 900 euro. RO-systeem 5-traps: 450 tot 1500 euro. IJzer/mangaanfilter (BIRM of greensand): 400 tot 900 euro. Sedimentfilter (housing plus cartridges): 80 tot 200 euro. Optioneel remineralisatie-cartridge 60 tot 150 euro. Opslagvat 18-40 liter: standaard inclusief bij RO. Voor budgetkeuzes zie ook{' '}
          <Link href="/keuzehulp/budget" className="text-[#005F8A] underline">budget keuzehulp</Link>.
        </p>
        <h3 className="text-xl font-semibold text-[#005F8A] mt-4 mb-2">Installatie</h3>
        <p className="text-gray-700 mb-6">
          Een loodgieter rekent 60 tot 90 euro per uur. Voor UV-installatie 2-3 uur (150-270 euro). Voor RO onder-aanrecht 3-4 uur (200-360 euro). Voor complete put-installatie met meerdere fasen 6-10 uur (400-900 euro). Aanvullende materiaalkosten (koppelingen, slangen, kraan, T-stuk) 50-150 euro. Bij gecombineerde installaties kunt u soms onderhandelen over een totaalprijs.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Jaarlijkse exploitatiekosten
        </h2>
        <p className="text-gray-700 mb-4">
          Jaarlijkse kosten vallen uiteen in vervangonderdelen, energiekosten en monitoring. Vervangonderdelen vormen het grootste deel. Een UV-lamp kost 45-95 euro en moet jaarlijks worden vervangen. Sediment- en koolvoorfilters kosten 30-80 euro per set, te vervangen elke 6-12 maanden. Het RO-membraan zelf kost 80-150 euro en gaat 2-4 jaar mee (jaarbudget 20-50 euro).
        </p>
        <p className="text-gray-700 mb-4">
          Energiekosten zijn beperkt: UV-lamp 8-25W continu = 70-220 kWh per jaar = 25-80 euro. RO-boosterpomp (indien aanwezig) 100-150W intermitterend = 30-90 kWh = 10-30 euro. Geen energieverbruik bij passieve RO zonder boosterpomp. Voor abonnementsmodellen zie{' '}
          <Link href="/waterfilter/abonnement" className="text-[#005F8A] underline">waterfilter abonnement</Link>.
        </p>
        <p className="text-gray-700 mb-6">
          Jaarlijkse laboratoriumcontrole voor microbiologische veiligheid is sterk aanbevolen (95-150 euro) en voor uitgebreide chemische controle elke 2-3 jaar (200-250 euro). Voor onderhouds-instructies zie{' '}
          <Link href="/onderhoud/osmose-filter-vervangen" className="text-[#005F8A] underline">osmose filter vervangen</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Terugverdientijd en lange-termijn besparing
        </h2>
        <p className="text-gray-700 mb-4">
          Voor wie tot nu toe flessenwater of bronwater kocht is de terugverdientijd kort. Een gezin van 4 dat 4 liter water per dag drinkt besteedt bij flessenwater 700-1200 euro per jaar. Een RO-systeem van 1500 euro (inclusief installatie) verdient zichzelf terug in 1,3 tot 2,3 jaar.
        </p>
        <p className="text-gray-700 mb-6">
          Op 10 jaar bekeken: totale kosten RO-systeem inclusief onderhoud circa 3500-5000 euro. Equivalente flessenwater-uitgave 7000-12000 euro. Besparing 3500-7000 euro plus geen plastic afval, geen sjouwwerk en altijd vers water beschikbaar. Voor algemeen putwater-overzicht zie{' '}
          <Link href="/putwater" className="text-[#005F8A] underline">putwater hoofdpagina</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over putwater kosten
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
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Budget keuzehulp</h3>
              <p className="text-sm text-gray-600">Welk waterfilter past binnen uw budget? Overzicht van alle prijsklassen.</p>
            </Link>
            <Link href="/onderhoud/osmose-filter-vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmose filter vervangen</h3>
              <p className="text-sm text-gray-600">Stap-voor-stap onderhoud en vervangingen voor langer plezier.</p>
            </Link>
            <Link href="/waterfilter/abonnement" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter abonnement</h3>
              <p className="text-sm text-gray-600">Abonnementsmodellen voor automatische filtervervanging en onderhoud.</p>
            </Link>
            <Link href="/putwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Putwater overzicht</h3>
              <p className="text-sm text-gray-600">Complete gids voor putwaterzuivering en behandeling in Nederland.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
