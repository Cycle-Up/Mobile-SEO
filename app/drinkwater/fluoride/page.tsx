import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Fluoride in drinkwater filteren: osmose vs andere methoden',
  description: 'Fluoride in drinkwater filteren: Nederland voegt geen fluoride toe (gestopt 1973). Actuele niveaus 0,1–0,3 mg/L. Osmose verwijdert 95–99%; actief kool werkt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/fluoride' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wordt fluoride toegevoegd aan Nederlands drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Nederland heeft fluoridering van drinkwater in 1973 gestopt, als een van de eerste landen ter wereld. Na een uitspraak van de Hoge Raad werd vastgesteld dat toevoeging van een stof aan drinkwater zonder individuele toestemming van burgers niet wettelijk toegestaan is. Sindsdien bevat Nederlands leidingwater uitsluitend van nature aanwezig fluoride: gemiddeld 0,1–0,3 mg/L, ruim onder de EU-norm van 1,5 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een actief-koolfilter fluoride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Dit is een veelvoorkomende misvatting. Actief kool adsorbeert organische stoffen, chloor en geur uitstekend, maar het fluoride-ion (F⁻) wordt nauwelijks vastgehouden door actief kool. Als u specifiek fluoride wilt verwijderen, heeft u een osmosefilter, geactiveerd alumina of bone char-filter nodig. Standaard waterfilterkannen met actief kool werken niet voor fluoride.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel fluoride zit er in Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands leidingwater bevat typisch 0,1–0,3 mg/L fluoride — dit is van nature aanwezig fluoride uit grondwater, niet toegevoegd. In Zuid-Limburg en sommige kalkrijke gebieden kan het iets hoger zijn (tot 0,4 mg/L) maar nog steeds ruim onder de EU-norm van 1,5 mg/L. Ter vergelijking: landen die drinkwater fluorideerden (VS, Australië) doen dit op 0,7–1,0 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is fluoride in Nederlands drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, bij de concentraties in Nederland (0,1–0,3 mg/L) is fluoride niet gevaarlijk. Schadelijke effecten (tandvlekken, dentale fluorose) treden op bij chronische blootstelling boven 1,5 mg/L; skeletfluorose pas boven 4 mg/L. Nederlandse concentraties zijn 5–15 keer lager dan deze drempelwaarden. De WHO stelt dat fluoride bij 0,7 mg/L zelfs gunstig is voor tandbehoud.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom willen sommige mensen fluoride uit water filteren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Redenen om fluoride te willen filteren zijn: (1) persoonlijke voorkeur voor zo puur mogelijk water; (2) ouders die flesvoeding bereiden voor zuigelingen willen het fluoridegehalte minimaliseren (WHO adviseert voor babyvoeding <0,7 mg/L); (3) bewoners van gebieden met hoger natuurlijk fluoride in putwater; (4) mensen die al fluoride via tandpasta of supplementen binnenkrijgen en geen extra inname willen. In Nederland is dit zelden medisch noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert fluoride het best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest effectieve opties voor fluorideverwijdering zijn: (1) Omgekeerde osmose — verwijdert 95–99% van fluoride, ook klaar voor andere verontreinigingen; (2) Geactiveerd alumina — specifiek adsorptiemateriaal voor fluoride, 90–95% effectiviteit; (3) Bone char (beenderkool) — traditioneel fluoridespecifiek medium, 90%+ effectiviteit. Actief koolfilters, sedimentfilters en waterontharders verwijderen fluoride NIET.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater zonder fluoride schadelijk voor tanden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. De fluoride-inname via Nederlands leidingwater is al zeer minimaal (0,1–0,3 mg/L). De tandbeschermende werking van fluoride komt voornamelijk van tandpasta (1.000–1.500 ppm) en direct contact met het tandglazuur, niet van ingeslikt water. Tandartsen en de WHO stellen dat verwijdering van de kleine hoeveelheid fluoride uit Nederlands leidingwater geen klinisch relevant effect heeft op tandgezondheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft putwater in Nederland een hoger fluoridegehalte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van de regio en bodemsamenstelling. In kalkrijke gebieden en sommige kustgebieden kan het grondwater van nature meer fluoride bevatten. In Nederlandse contexten overschrijdt dit zelden de EU-norm van 1,5 mg/L. Wel adviseren we putgebruikers een wateranalyse te laten uitvoeren om het fluoridegehalte te kennen, naast andere parameters zoals nitraat, ijzer, mangaan en bacteriën.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Fluoride in drinkwater filteren: osmose vs andere methoden',
  description: 'Fluoride in drinkwater filteren in Nederland: NL voegt geen fluoride toe (gestopt 1973). Osmose verwijdert 95–99%; actief kool werkt niet.',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  url: 'https://waterfilterplatform.nl/drinkwater/fluoride',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterFluoridePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          articleSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwater', item: 'https://waterfilterplatform.nl/drinkwater' },
              { '@type': 'ListItem', position: 3, name: 'Fluoride', item: 'https://waterfilterplatform.nl/drinkwater/fluoride' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/drinkwater" className="hover:underline">Drinkwater</a> &rsaquo;{' '}
          <span>Fluoride</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Fluoride in drinkwater filteren: osmose vs andere methoden
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Nederland voegt geen fluoride toe aan drinkwater (gestopt in 1973). Natuurlijk fluoride in leidingwater: 0,1–0,3 mg/L — ver onder de EU-norm. Wil je toch filteren? Osmose verwijdert 95–99%; actief kool werkt niet voor fluoride. In de meeste gevallen is filtering medisch niet nodig.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fluoride in Nederlands drinkwater: de feiten
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland is een van de weinige landen die bewust gestopt zijn met het fluorideer van drinkwater. In 1973 deed de Hoge Raad uitspraak dat massatoevoeging van een stof aan drinkwater — ook al zou het gunstig zijn voor de volksgezondheid — zonder individuele toestemming van burgers niet wettelijk toegestaan is. Sindsdien is fluoride niet meer toegevoegd aan Nederlands drinkwater.
        </p>
        <p className="text-gray-700 mb-4">
          Het fluoride dat nu in Nederlands leidingwater aanwezig is, komt uitsluitend van nature voor: het zit van oudsher in de grondwaterbronnen die drinkwaterbedrijven gebruiken. De concentraties zijn laag:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Typisch Nederlands leidingwater:</strong> 0,1–0,3 mg/L fluoride</li>
          <li><strong>Zuid-Limburg en kalkrijke gronden:</strong> soms iets hoger, tot circa 0,4 mg/L</li>
          <li><strong>EU-norm (Drinkwaterbesluit):</strong> maximaal 1,5 mg/L</li>
          <li><strong>WHO-richtlijn:</strong> maximaal 1,5 mg/L</li>
          <li><strong>Ter vergelijking — VS, Australië (gefluorideerd water):</strong> 0,7–1,0 mg/L</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het verschil is duidelijk: water in landen die wél fluorideerden bevat 3–7 keer zoveel fluoride als Nederland. Het debat over fluoridering speelt in Nederland dan ook nauwelijks: de concentraties zijn te laag om een medisch effect te hebben, positief of negatief.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten van fluoride: wat de wetenschap zegt
        </h2>
        <p className="text-gray-700 mb-4">
          Fluoride heeft een genuanceerd gezondheidsprofi el: bij lage concentraties mogelijk beschermend voor tanden, bij hoge concentraties schadelijk.
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Tandbescherming bij 0,7 mg/L</h3>
            <p className="text-gray-700 text-sm">
              De WHO stelt dat fluoride bij circa 0,7 mg/L beschermend is voor het tandglazuur. Cochrane-reviews van fluorideringsprogramma&apos;s bevestigen een reductie van cariës, al is de evidence grotendeels afkomstig uit studies van voor 1975. De tandbeschermende werking komt primarily van direct contact met het tandglazuur (tandpasta, mondwater) — niet van ingeslikt water.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Dentale fluorose boven 1,5 mg/L</h3>
            <p className="text-gray-700 text-sm">
              Chronische blootstelling boven 1,5 mg/L kan bij kinderen in de tandvorming leiden tot dentale fluorose: witte of bruine vlekken op het tandglazuur. In Nederland is dit risico niet aanwezig door de lage concentraties (0,1–0,3 mg/L).
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Skeletfluorose boven 4 mg/L</h3>
            <p className="text-gray-700 text-sm">
              Bij concentraties boven 4 mg/L (chronisch) kan skeletfluorose optreden: verdikking en beschadiging van botten en gewrichten. Dit probleem speelt in sommige delen van India, Afrika en China met hoge natuurlijke fluorideconcentraties — niet in Nederland.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Controversieel: neurologische effecten?</h3>
            <p className="text-gray-700 text-sm">
              Een meta-analyse uit 2012 (Choi et al., Harvard) en recentere NIEHS-onderzoeken suggereren dat hoge fluorideblootstelling (bij kinderen in gebieden met &gt;1 mg/L) geassocieerd is met licht verlaagd IQ. Het is een controversieel onderwerp: de studies kwamen uit gebieden met 2–10 mg/L fluoride. Of de resultaten relevant zijn bij concentraties in Nederland (0,1–0,3 mg/L) is niet aangetoond.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wie overweegt fluoride te filteren?
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland is fluoride filteren zelden medisch noodzakelijk. De volgende groepen overwegen het soms toch:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Ouders die flesvoeding bereiden voor zuigelingen:</strong> De WHO adviseert water met &lt;0,7 mg/L voor babyvoeding. Nederlands leidingwater zit hier meestal ruim onder, maar ouders die zekerheid willen kiezen voor osmosewater.</li>
          <li><strong>Persoonlijke voorkeur:</strong> Sommige consumenten willen zo puur mogelijk water, vrij van alle toegevoegde of verhoogde mineraalgehalten.</li>
          <li><strong>Putwater met hoger fluoride:</strong> In bepaalde kalkrijke gebieden kan putwater meer fluoride bevatten; wateranalyse is dan aan te raden.</li>
          <li><strong>Mensen die al fluoride via supplementen of tandheelkundige behandelingen binnenkrijgen</strong> en geen extra inname via water willen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor fluoride: vergelijking
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest effectief</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Osmosefilters verwijderen 95–99% van alle opgeloste ionen inclusief fluoride via een semipermeabele membraan met poriën van 0,0001 µm. Naast fluoride worden tegelijkertijd nitraat, lood, arsenicum, PFAS en andere verontreinigingen verwijderd. Voor Nederlandse leidingwater de meest complete filtratie-optie. Zie voor meer details onze pagina over{' '}
              <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</a>.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Fluoride: ✓ 95–99%</span>
              <span>Kosten: €300–800</span>
              <span>Onderhoud: jaarlijks patronen + membraan</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Geactiveerd alumina</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Aluminiumoxide (Al₂O₃) is een specifiek adsorptiemateriaal voor fluoride. Werkt via ionenwisseling: fluoride-ionen worden vastgehouden aan het aluminiumoxide-oppervlak. Effectiviteit 90–95% voor fluoride. pH-gevoelig: optimale werking bij pH 5,5–6,5. Wordt in Afrikaanse landen veel gebruikt voor defluoridering van drinkwater. In Nederland zelden nodig.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Fluoride: ✓ 90–95%</span>
              <span>Kosten: €300–700</span>
              <span>Onderhoud: medium regenereren of vervangen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Bone char (beenderkool)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Beenderkool is carboniseerd dierlijk bot dat van nature calcium-fosfaat bevat. Fluoride-ionen wisselen uit met hydroxyl-ionen in het calciumfosfaat. Effectiviteit 85–95%. Traditioneel gebruikt voor fluorideverwijdering; in de westerse markt relatief zeldzaam. Niet geschikt voor vegetariërs/veganisten.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Fluoride: ✓ 85–95%</span>
              <span>Kosten: €200–500</span>
              <span>Onderhoud: medium vervangen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 border-red-200 bg-red-50">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">!</span>
              <h3 className="font-semibold text-red-700">Actief koolfilter — werkt NIET voor fluoride</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Dit is de meest voorkomende misvatting over waterfilters. Actief kool is excellent voor chloor, geur, organische stoffen en sommige pesticiden. Het fluoride-ion (F⁻) is echter een klein anorganisch ion dat nauwelijks door actief kool wordt geadsorbeerd. Filterkruiken (Brita, PUR), koelkastfilters en standaard koolstoffilters verwijderen fluoride niet of nauwelijks.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-red-600">
              <span>Fluoride: ✗ 0–5%</span>
              <span>Kosten: €30–150</span>
              <span>Gebruik niet voor fluorideverwijdering</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: fluoride verwijdering per filtermethode
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Fluoride verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–99%</td>
                <td className="border border-gray-300 px-3 py-2">€300–800</td>
                <td className="border border-gray-300 px-3 py-2">Meest complete oplossing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Geactiveerd alumina</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90–95%</td>
                <td className="border border-gray-300 px-3 py-2">€300–700</td>
                <td className="border border-gray-300 px-3 py-2">Specifiek voor fluoride, pH-gevoelig</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bone char</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–95%</td>
                <td className="border border-gray-300 px-3 py-2">€200–500</td>
                <td className="border border-gray-300 px-3 py-2">Traditioneel, niet veganistisch</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Destillatie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;99%</td>
                <td className="border border-gray-300 px-3 py-2">€200–400</td>
                <td className="border border-gray-300 px-3 py-2">Langzaam, hoog energieverbruik</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0–5%</td>
                <td className="border border-gray-300 px-3 py-2">€30–150</td>
                <td className="border border-gray-300 px-3 py-2">Niet effectief voor fluoride</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Waterverzachter (ionenwisseling)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0–10%</td>
                <td className="border border-gray-300 px-3 py-2">€800–1.500</td>
                <td className="border border-gray-300 px-3 py-2">Niet voor fluoride ontworpen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch advies voor Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de overgrote meerderheid van Nederlandse huishoudens geldt: <strong>fluoride filteren is niet nodig</strong>. De concentraties in leidingwater zijn laag en vormen geen gezondheidsrisico. Een osmosefilter installeren vanwege fluoride alleen is overdreven.
        </p>
        <p className="text-gray-700 mb-4">
          Heeft u andere redenen om te filteren — hard water, nitraat in putwater, PFAS of een algemene voorkeur voor zuiver drinkwater — dan is een osmosefilter een uitstekende keus die fluoride als bijproduct ook verwijdert. Lees meer over de{' '}
          <a href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid in uw gemeente</a> of over{' '}
          <a href="/putwater" className="text-[#005F8A] underline">putwater testen en zuiveren</a> als u een privéput heeft.
        </p>
        <p className="text-gray-700 mb-6">
          Wilt u toch specifiek fluoride verwijderen: kies een osmosefilter als alles-in-één oplossing, of geactiveerd alumina als u uitsluitend fluoride wilt aanpakken. Gebruik nooit een gewoon actief-koolfilter in de veronderstelling dat het fluoride verwijdert — dat doet het niet.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wettelijke normen voor fluoride en andere stoffen in drinkwater.</p>
          </a>
          <a href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van alle stoffen die in drinkwater kunnen voorkomen.</p>
          </a>
          <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose fluoride en andere stoffen verwijdert.</p>
          </a>
          <a href="/waterfilter/fluor" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor fluoride</h3>
            <p className="text-sm text-gray-600">Welke waterfilters fluoride effectief uit drinkwater verwijderen.</p>
          </a>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
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

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</a>,{' '}
          <a href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid per gemeente</a> en{' '}
          <a href="/putwater" className="text-[#005F8A] underline">putwater testen en zuiveren</a>.
        </p>
      </main>
    </>
  );
}
