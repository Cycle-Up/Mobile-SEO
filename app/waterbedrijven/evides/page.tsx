import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Evides: waterkwaliteit Zeeland en ZW Nederland | WaterfilterPlatform',
  description:
    'Evides levert drinkwater in Zeeland en Zuidwest-Nederland. Lees over de waterhardheid, bronnen en zuiveringstechnieken van Evides.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterbedrijven/evides' },
};

export default function EvidesPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterbedrijven', url: 'https://waterfilterplatform.nl/waterbedrijven' },
          { name: 'Evides', url: 'https://waterfilterplatform.nl/waterbedrijven/evides' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Evides: waterkwaliteit Zeeland en ZW Nederland',
          description:
            'Evides levert drinkwater in Zeeland en Zuidwest-Nederland. Lees over de waterhardheid, bronnen en zuiveringstechnieken van Evides.',
          datePublished: '2026-05-21',
          dateModified: '2026-05-21',
          url: 'https://waterfilterplatform.nl/waterbedrijven/evides',
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' '}&rsaquo;{' '}
          <Link href="/waterbedrijven" className="hover:underline">Waterbedrijven</Link>
          {' '}&rsaquo;{' '}
          <span>Evides</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Evides: drinkwater in Zeeland en Zuidwest-Nederland
          </h1>
          <p className="text-gray-700 text-lg">
            Evides Waterbedrijf levert drinkwater aan miljoenen mensen in Zeeland,
            de Zuid-Hollandse eilanden en een deel van Noord-Brabant. Het bedrijf
            gebruikt zowel grondwater als oppervlaktewater als bron.
          </p>
        </div>

        <QuickAnswer answer="Evides levert drinkwater aan ca. 2,5 miljoen mensen in Zeeland, Zuid-Holland (eilanden) en een deel van Noord-Brabant. Het water is matig hard (8-12 dH) en is afkomstig uit zowel grondwater als oppervlaktewater." />

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verzorgingsgebied van Evides
        </h2>
        <p className="text-gray-700 mb-4">
          Evides bedient klanten in de volgende gebieden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Zeeland (alle gemeenten)</li>
          <li>Zuid-Hollandse eilanden (Goeree-Overflakkee, Hoeksche Waard, Voorne-Putten)</li>
          <li>Rijnmond en omgeving (Rotterdam e.o.)</li>
          <li>Een deel van Noord-Brabant (westelijk deel)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het verzorgingsgebied omvat een divers landschap van deltagebieden, eilanden en
          stedelijke regio's. Dit stelt Evides voor unieke uitdagingen op het gebied van
          waterwinning en zuivering: zoetwater is in Zeeland een schaars goed en de
          dreiging van verzilting vraagt om zorgvuldig bronbeheer.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbronnen: Biesbosch-spaarbekkens en grondwater
        </h2>
        <p className="text-gray-700 mb-4">
          Evides gebruikt twee hoofdbronnen voor drinkwaterproductie:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Biesbosch-spaarbekkens</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Grote zoetwaterreservoirs in de Biesbosch</li>
              <li>&bull; Ingenomen Maaswater, opgeslagen en gezuiverd</li>
              <li>&bull; Buffervoorraad voor droge periodes</li>
              <li>&bull; Gecombineerd met oevergrondwater</li>
              <li>&bull; Intensief zuiveringsproces vereist</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <h3 className="font-bold text-[#003F5C] mb-2">Grondwater</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Gewonnen in beschermde waterwingebieden</li>
              <li>&bull; Met name in Zeeland en Noord-Brabant</li>
              <li>&bull; Kwetsbaar voor verzilting in deltagebied</li>
              <li>&bull; Eenvoudiger zuiveringsproces</li>
              <li>&bull; Stabielere kwaliteit per seizoen</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zuiveringsproces bij Evides
        </h2>
        <p className="text-gray-700 mb-4">
          Het oppervlaktewater uit de Biesbosch-spaarbekkens doorloopt een uitgebreid
          zuiveringsproces voordat het als drinkwater geleverd wordt:
        </p>
        <ol className="space-y-3 mb-6">
          {[
            { n: 1, title: 'Inname en opslag', desc: 'Maaswater wordt ingenomen bij gunstige kwaliteit en opgeslagen in de Biesbosch. De verblijftijd van weken tot maanden zorgt voor natuurlijke biologische zuivering en sedimentatie.' },
            { n: 2, title: 'Coagulatie en flocculatie', desc: 'Coagulatiemiddelen laten fijne zweefdeeltjes samenklonteren. De gevormde vlokken bezinken in bezinkingstanks of worden verwijderd via flotatie.' },
            { n: 3, title: 'Snelzandfiltratie', desc: 'Zandfilters verwijderen resterende deeltjes, ijzer en mangaan via mechanische en biologische processen.' },
            { n: 4, title: 'Actieve-koolfiltratie', desc: 'Granulaire actieve kool adsorbeert organische microverontreinigingen zoals pesticiden, medicijnresten en PFAS.' },
            { n: 5, title: 'UV-desinfectie', desc: 'UV-straling inactiveert pathogenen zonder chemische toevoegingen.' },
            { n: 6, title: 'Residuele desinfectie', desc: 'Een lage concentratie chloor borgt de microbiologische veiligheid in het distributienet.' },
          ].map(({ n, title, desc }) => (
            <li key={n} className="flex gap-3 items-start">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">{n}</span>
              <div>
                <span className="font-semibold text-[#003F5C]">{title}: </span>
                <span className="text-gray-700 text-sm">{desc}</span>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid in het Evides-gebied
        </h2>
        <p className="text-gray-700 mb-4">
          Het water van Evides is over het algemeen <strong>matig hard (8-12 graden Duits, dH)</strong>.
          Dit betekent relatief weinig kalkvorming in vergelijking met hardere regio's als Limburg
          of Amsterdam. Exacte waarden per gemeente vindt u via{' '}
          <Link href="/waterhardheid" className="text-[#005F8A] underline">
            waterhardheid per gemeente
          </Link>
          .
        </p>
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Indicatieve hardheid per deelgebied</p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Zeeland (kust)</span>
              <span className="font-medium text-green-700">Zacht-matig (5-9 dH)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Zuid-Hollandse eilanden</span>
              <span className="font-medium text-yellow-700">Matig (8-11 dH)</span>
            </div>
            <div className="flex justify-between">
              <span>Rijnmond / Rotterdam e.o.</span>
              <span className="font-medium text-yellow-700">Matig (9-12 dH)</span>
            </div>
          </div>
        </div>

        <CTABanner context="algemeen" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/waterbedrijven"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Alle waterbedrijven</p>
              <p className="text-sm text-gray-600">Overzicht van alle 10 Nederlandse drinkwaterbedrijven met regio en hardheid.</p>
            </Link>
            <Link
              href="/waterhardheid"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per gemeente</p>
              <p className="text-sm text-gray-600">Zoek de exacte waterhardheid voor uw gemeente in het Evides-gebied.</p>
            </Link>
            <Link
              href="/waterhardheid/per-provincie"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid per provincie</p>
              <p className="text-sm text-gray-600">Hardheidsverschillen per provincie, inclusief Zeeland en Zuid-Holland.</p>
            </Link>
            <Link
              href="/stoffen-in-drinkwater"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</p>
              <p className="text-sm text-gray-600">PFAS, nitraat en andere stoffen in het drinkwater van Evides.</p>
            </Link>
            <Link
              href="/drinkwaternormen"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke kwaliteitseisen waaraan Evides en andere waterbedrijven moeten voldoen.</p>
            </Link>
            <Link
              href="/waterbedrijven/vitens"
              className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-[#005F8A] mb-1">Vitens</p>
              <p className="text-sm text-gray-600">Waterkwaliteit en bronnen van het grootste waterbedrijf van Nederland.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
