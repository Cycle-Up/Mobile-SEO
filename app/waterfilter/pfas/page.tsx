import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PFAS Filteren uit Drinkwater: Osmose & Actief Kool',
  description: 'PFAS in drinkwater verwijderen: welke filters werken (osmose, actief kool, nanofiltration), EU-norm 0,1 µg/L, risicogebieden Nederland en kosten per methode.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/pfas' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Twee methoden zijn bewezen effectief: (1) Omgekeerde osmose (RO): verwijdert 90–99% van PFAS door membraanfiltratie. Meest complete thuisoplossing. (2) Actief kool (granulaat of blok): adsorbeert PFAS, maar efficiëntie varieert per PFAS-type en filterleeftijd. Kortketenige PFAS (C4-C6) worden minder goed door actief kool verwijderd. UV-filters en sedimentfilters verwijderen PFAS NIET.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke PFAS-norm geldt voor Nederlands drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sinds 2023 geldt de EU-drinkwaterrichtlijn met een norm van 0,1 µg/L voor de som van 20 PFAS-verbindingen (PFAS-20). Voor PFOA, PFOS, PFNA en PFHxS geldt afzonderlijk een norm van 0,05 µg/L totaal. Nederlands leidingwater voldoet in de meeste regio\'s aan deze norm, maar in gebieden nabij Schiphol, defensieterreinen en chemische industrie zijn verhoogde waarden gemeten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke gebieden in Nederland hebben verhoogde PFAS in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Risicogebieden met historisch verhoogde PFAS-niveaus: omgeving Schiphol (blusschuim brandoefeningen), omgeving Dordrecht/Papendrecht (vroeger DuPont-fabriek), vliegbases en brandweerkazernes (blusschuim), gebieden nabij Chemours (voormalig DuPont) in Zuid-Holland. Drinkwaterbedrijven meten actief en nemen maatregelen. Gebruik het RIVM-wateratlas voor actuele data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoelang gaat een actief koolfilter mee voor PFAS-verwijdering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actief kool raakt verzadigd met PFAS. Vervangingsfrequentie hangt af van PFAS-concentratie in jouw water en waterverbruik. Bij Nederlandse leidingwater met lage PFAS-concentraties gaat een standaard koolfilter 6–12 maanden mee. Bij verhoogde PFAS-gebieden: vaker vervangen (3–6 maanden). RO-membranen (vervanging elke 2–3 jaar) zijn stabieler qua PFAS-verwijdering.',
      },
    },
  ],
};

export default function WaterfilterPFASPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'PFAS', item: 'https://waterfilterplatform.nl/waterfilter/pfas' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>PFAS</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          PFAS Filteren uit Drinkwater: Osmose & Actief Kool
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          PFAS — &ldquo;forever chemicals&rdquo; — zijn aangetroffen in drinkwater in Nederland. Welke filters werken echt, en hoe bescherm je jouw huishouden?
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterefficiëntie per methode
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">PFAS-reductie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">90–99%</td>
                <td className="border border-gray-300 px-3 py-2">Meest effectief, incl. kortketens</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (GAC granulaat)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">70–95%</td>
                <td className="border border-gray-300 px-3 py-2">Langketens beter dan kortketens</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (blokfilter)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">80–97%</td>
                <td className="border border-gray-300 px-3 py-2">Langere contacttijd = beter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltration (NF)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">85–99%</td>
                <td className="border border-gray-300 px-3 py-2">Professioneel / semi-professioneel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">UV-lamp</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Niet effectief tegen PFAS</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kookfilter/Brita-type</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2">Niet ontworpen voor PFAS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risicogebieden in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          PFAS in drinkwater is niet overal een even groot probleem. De risicogebieden zijn vooral:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Regio Schiphol:</strong> Historisch gebruik van PFAS-houdend blusschuim bij brandoefeningen</li>
          <li><strong>Dordrecht/Papendrecht:</strong> Voormalige DuPont/Chemours fabriek, PFOA-vervuiling in grond- en oppervlaktewater</li>
          <li><strong>Militaire vliegbases:</strong> Vliegbasis Leeuwarden, Volkel, Eindhoven — blusschuimgebruik</li>
          <li><strong>Industrieterreinen:</strong> Gebieden nabij fluorchemische productie</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Buiten deze risicogebieden voldoet Nederlands leidingwater aan de EU-norm van 0,1 µg/L voor PFAS-20. Je kunt de actuele PFAS-waarden opvragen bij jouw waterleidingbedrijf of raadplegen via het RIVM-wateratlas.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter: de meest complete PFAS-oplossing
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">omgekeerd osmosefilter</Link> is de meest betrouwbare thuisoplossing voor PFAS-verwijdering:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Verwijdert zowel lange- als kortketenige PFAS (inclusief PFOS, PFOA, PFNA, PFHxS)</li>
          <li>Stabiele prestaties onafhankelijk van PFAS-concentratie</li>
          <li>Verwijdert tegelijkertijd lood, nitraat, chloor en andere verontreinigingen</li>
          <li>Membraan vervanging elke 2–3 jaar garandeert consistente prestaties</li>
        </ul>

        <div className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater: overzicht</h3>
            <p className="text-sm text-gray-600">Uitgebreid overzicht van PFAS-verbindingen in drinkwater, bronnen en risicogebieden in Nederland.</p>
          </Link>
          <Link href="/keuzehulp/pfas-lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp: PFAS en lood</h3>
            <p className="text-sm text-gray-600">Welk waterfilter kiest u als u zowel PFAS als lood uit uw drinkwater wilt verwijderen?</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose werkt en waarom het de meest effectieve methode is voor PFAS-verwijdering.</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Complete gids over EU- en Nederlandse drinkwaternormen voor alle relevante stoffen.</p>
          </Link>
          <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter complete gids</h3>
            <p className="text-sm text-gray-600">Vergelijking van alle filtertypen voor PFAS: verwijderingspercentages, kosten en certificering.</p>
          </Link>
        </div>
      </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Meer over drinkwaterkwaliteit: <Link href="/drinkwater/kwaliteit-test" className="text-[#005F8A] underline">drinkwater testen</Link> en <Link href="/waterfilter/gezondheid" className="text-[#005F8A] underline">waterfilter en gezondheid</Link>.
        </p>
      </main>
    </>
  );
}
