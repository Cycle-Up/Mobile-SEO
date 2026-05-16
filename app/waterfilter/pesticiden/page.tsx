import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Pesticiden in drinkwater filteren: welk filter werkt echt?',
  description: 'Pesticiden in drinkwater verwijderen: glyfosaat, atrazine, chloridazon in NL. EU-norm 0,1 µg/L. Welk waterfilter (osmose, actief kool) werkt echt voor bestrijdingsmiddelen?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/pesticiden' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke pesticiden worden in Nederlands drinkwater gevonden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uit de jaarlijkse RIVM-monitoringsrapporten en rapporten van Kiwa, Vitens en Brabant Water komen regelmatig terug: glyfosaat en zijn afbraakproduct AMPA, chloridazon (en metaboliet desphenyl-chloridazon), metolachloor en metabolieten, en historisch atrazine (verboden sinds 2004, maar nog altijd aantoonbaar in grondwater door persistentie). Risicogebieden zijn landbouwintensieve provincies: Noord-Brabant, Zeeland, Flevoland en Groningen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor pesticiden in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU Drinkwaterrichtlijn stelt een maximum van 0,1 µg/L (microgram per liter) per individueel pesticide in drinkwater. Voor de som van alle pesticiden geldt een maximum van 0,5 µg/L. Deze norm is gebaseerd op het voorzorgsbeginsel, niet op een toxicologisch vastgesteld veilig niveau. Metabolieten (afbraakproducten) van pesticiden vallen ook onder deze norm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert omgekeerde osmose pesticiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Omgekeerde osmose is de meest betrouwbare methode: het RO-membraan (0,0001 µm) houdt organische moleculen zoals pesticiden voor 95–99% tegen. Omgekeerde osmose werkt voor vrijwel alle pesticiden, inclusief kleinere moleculen zoals glyfosaat die actief kool minder goed adsorbeert. Voor drinkwater met structureel verhoogde pesticideniveaus is osmose de aanbevolen oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt actief kool tegen pesticiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actief kool adsorbeert veel pesticiden effectief, maar niet alle. Grotere, minder polaire pesticiden (zoals atrazine, metolachloor) worden goed geadsorbeerd. Kleine, polaire moleculen zoals glyfosaat en AMPA worden minder goed tegengehouden door actief kool. Een actief koolblokfilter (CTO) is een praktische middenoplossing voor brede pesticidenreductie, maar biedt geen garantie voor alle verbindingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn pesticiden in drinkwater gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de huidige niveaus in Nederlands leidingwater (doorgaans ruim onder de norm van 0,1 µg/L) is het directe gezondheidsrisico beperkt. Langdurige blootstelling aan lage concentraties van sommige pesticiden is echter in verband gebracht met endocriene verstoring en verhoogd risico op bepaalde kankertypen. Glyfosaat is door de WHO-onderzoeksgroep IARC geclassificeerd als "waarschijnlijk kankerverwekkend voor mensen" (groep 2A).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik of er pesticiden in mijn drinkwater zitten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste pesticiden zijn smaak- en geurloos in drinkwater — je kunt ze niet proeven of ruiken. Controleer het jaarlijkse kwaliteitsrapport van jouw waterleidingbedrijf: die zijn verplicht te publiceren. RIVM publiceert jaarlijks het "Bestrijdingsmiddelen in drinkwater en drinkwaterbronnen"-rapport. Ben je in een landbouwintensief gebied, vraag dan specifiek naar pesticidenanalyse of laat het laboratorium testen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke regio\'s in Nederland hebben meer risico op pesticiden in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Risicogebieden zijn provincies met intensieve akkerbouw en tuinbouw: Noord-Brabant (uiensector, aardappelen), Zeeland (aardappelen, uien), Flevoland (intensieve akkerbouw) en Groningen. Ook fruitteeltgebieden in Gelderland en de Betuwe kennen periodiek verhoogde niveaus. In stedelijke gebieden en veenweidegebieden is het risico doorgaans lager.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een filterkan (Brita) tegen pesticiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Filterkannen met geactiveerde kool verwijderen een deel van de pesticiden, maar zijn niet gecertificeerd voor betrouwbare pesticidenreductie. De hoeveelheid kool in een filterkanelement is beperkt, de contacttijd kort en de prestaties variëren sterk per pesticide. Voor structureel verhoogde pesticideniveaus bieden filterkannen onvoldoende zekerheid. Ze zijn meer geschikt voor smaak- en geurverbetering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is desphenyl-chloridazon en waarom is het in het nieuws?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desphenyl-chloridazon is een afbraakproduct (metaboliet) van het herbicide chloridazon, dat veel gebruikt werd in de bietenteelt. Het metaboliet is wateroplosbaar en persistenter dan de moederstof en werd in hoge concentraties aangetroffen in grondwater in Noord-Brabant, Zeeland en Groningen. Drinkwaterbedrijven zoals Brabant Water moesten extra zuiveringsstappen nemen. Osmose en actief kool zijn effectief voor desphenyl-chloridazon.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Pesticiden in drinkwater filteren: welk filter werkt echt?',
  description: 'Pesticiden in drinkwater verwijderen: glyfosaat, atrazine, chloridazon in NL. EU-norm 0,1 µg/L. Welk waterfilter (osmose, actief kool) werkt echt voor bestrijdingsmiddelen?',
  datePublished: '2026-04-12',
  dateModified: '2026-04-12',
  url: 'https://waterfilterplatform.nl/waterfilter/pesticiden',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterPesticidenPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Pesticiden', item: 'https://waterfilterplatform.nl/waterfilter/pesticiden' },
            ],
          },
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Pesticiden</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Pesticiden in drinkwater filteren: welk filter werkt echt?
        </h1>

        {/* QuickAnswer */}
        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Snel antwoord</p>
          <p className="text-gray-700 text-sm">
            Pesticiden zoals glyfosaat en chloridazon-metabolieten zijn gevonden in NL drinkwaterbronnen, met name in landbouwgebieden. EU-norm: 0,1 µg/L per stof. Omgekeerde osmose verwijdert 95–99% van alle pesticiden. Actief kool werkt voor de meeste, maar minder voor kleine moleculen zoals glyfosaat. Filterkannen zijn onvoldoende.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke pesticiden zitten in Nederlands drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland heeft intensieve landbouw. Dat betekent dat bestrijdingsmiddelen via uitspoeling en runoff in oppervlakte- en grondwater terechtkomen. De RIVM-monitoringsrapporten en analyses van drinkwaterbedrijven als Vitens, Brabant Water en Evides laten ieder jaar residuen zien van:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Glyfosaat en AMPA:</strong> Het meest gebruikte herbicide ter wereld (Roundup). AMPA is het persistente afbraakproduct. Glyfosaat is controversieel: IARC classificeert het als waarschijnlijk kankerverwekkend (groep 2A).</li>
          <li><strong>Chloridazon en desphenyl-chloridazon:</strong> Herbicide voor bietenteelt. Het metaboliet desphenyl-chloridazon is extreem persistent en water­oplosbaar, en werd in hoge concentraties in grondwater van Noord-Brabant en Zeeland aangetroffen.</li>
          <li><strong>Atrazine:</strong> In 2004 verboden, maar nog steeds aantoonbaar in diep grondwater. Atrazine is persistent en bindt slecht aan bodemdeeltjes.</li>
          <li><strong>Metolachloor en metabolieten:</strong> Veelgebruikt herbicide in maïsteelt. Metabolieten zijn wateroplosbaar en uitspoelgevoelig.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Risicogebieden zijn de intensief bebouwde landbouwprovincies: Noord-Brabant, Zeeland, Flevoland en Groningen. Maar ook in andere regio&apos;s worden periodiek overschrijdingen gemeten — zeker na natte periodes met hoge uitspoeling.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en Nederlandse monitoring
        </h2>
        <p className="text-gray-700 mb-4">
          De EU Drinkwaterrichtlijn stelt een grenswaarde van <strong>0,1 µg/L per individueel pesticide</strong> en <strong>0,5 µg/L voor de som</strong> van alle pesticiden. Dit is een voorzorgsnorm, geen toxicologisch afgeleid niveau. Met name voor chronische blootstelling en hormoonverstorende stoffen wordt de norm door toxicologen als onvoldoende streng beschouwd.
        </p>
        <p className="text-gray-700 mb-6">
          RIVM publiceert jaarlijks het rapport &ldquo;Bestrijdingsmiddelen in drinkwater en drinkwaterbronnen&rdquo;. Drinkwaterbedrijven meten actief en passen hun zuivering aan. Brabant Water investeert structureel in extra actief kool-behandeling om desphenyl-chloridazon te verwijderen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterefficiëntie per methode en pesticide
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Pesticide</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Osmose (RO)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Actief kool</th>
                <th className="border border-gray-300 px-3 py-2 text-left">UV</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Glyfosaat</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Gedeeltelijk</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Klein, polair molecuul — kool minder effectief</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Atrazine</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">97–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–95%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Goed geadsorbeerd door actief kool</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloridazon-metaboliet</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">80–95%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Brabant Water gebruikt extra koolfiltratie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Metolachloor</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">96–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–95%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Maïsherbicide, groter molecuul</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">AMPA (glyfosaat-metaboliet)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95–98%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Persistent, vergelijkbaar met glyfosaat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmose vs. actief kool: voor- en nadelen
        </h2>
        <div className="space-y-3 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Omgekeerde osmose: meest betrouwbaar</h3>
            <p className="text-gray-700 text-sm">
              Een <a href="/waterfilter/pfas" className="text-[#005F8A] underline">osmosefilter</a> verwijdert 95–99% van vrijwel alle pesticiden door membraanfiltratie. Het werkt ook voor kleine, polaire moleculen zoals glyfosaat en AMPA die actief kool slecht adsorbeert. Nadeel: hogere aanschafkosten en waterafval (circa 3–4 liter afgevoerd per liter gefilterd water bij oudere systemen).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Actief kool: praktische brede aanpak</h3>
            <p className="text-gray-700 text-sm">
              Een actief koolblokfilter (CTO) adsorbeert de meeste pesticiden effectief. Goedkoper en eenvoudiger dan osmose. Nadeel: niet voor alle pesticiden betrouwbaar (met name kleine polaire moleculen) en prestaties nemen af naarmate het filter verzadigd raakt. Vervang het filter op schema (doorgaans elke 6–12 maanden).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Filterkan: onvoldoende voor pesticiden</h3>
            <p className="text-gray-700 text-sm">
              Filterkannen zijn niet gecertificeerd voor pesticidenreductie. De beperkte hoeveelheid koolstof en korte contacttijd bieden onvoldoende zekerheid bij structureel verhoogde niveaus.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch advies per situatie
        </h2>
        <p className="text-gray-700 mb-4">
          Woon je in een landbouwintensieve regio of gebruik je putwater? Dan is omgekeerde osmose de meest betrouwbare keuze voor pesticidenreductie. Lees ook ons artikel over{' '}
          <a href="/drinkwater/nitraat" className="text-[#005F8A] underline">nitraat in drinkwater</a> — nitraatuitspoeling treedt vaak samen op met pesticidenuitspoeling in dezelfde gebieden.
        </p>
        <p className="text-gray-700 mb-8">
          Voor stadsbewoners met leidingwater dat voldoet aan de norm is actief kool een kostenefficiënte oplossing voor brede pesticidenreductie, zeker in combinatie met smaak- en geurverbetering.
        </p>

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

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <a href="/waterfilter/pfas" className="text-[#005F8A] underline">PFAS filteren uit drinkwater</a>{' '}
          en{' '}
          <a href="/drinkwater/nitraat" className="text-[#005F8A] underline">nitraat in drinkwater</a>.
        </p>
      </main>
    </>
  );
}
