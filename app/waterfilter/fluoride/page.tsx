import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor fluoride: verwijdert osmose fluoride uit water?',
  description: 'Bevat kraanwater fluoride? Ja, ~0,1 mg/L. Welke waterfilters verwijderen fluoride? Osmose verwijdert 85-95% van fluoride uit drinkwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/fluoride' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wordt Nederlands drinkwater gefluoreerd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Nederland fluoreert drinkwater niet. Dat is een belangrijk verschil met landen als de Verenigde Staten, Australie en het Verenigd Koninkrijk, waar fluoride bewust aan drinkwater wordt toegevoegd ter preventie van tandcaries. In Nederland komt fluoride in kraanwater uitsluitend van nature voor vanuit de bodem, en in kleine hoeveelheden (gemiddeld ~0,1 mg/L). Dit is ruimschoots onder de WHO-grens van 1,5 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel fluoride zit er in Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In het grootste deel van Nederland bevat leidingwater gemiddeld 0,05 tot 0,2 mg/L fluoride van nature. De EU-drinkwaternorm staat maximaal 1,5 mg/L toe. De WHO hanteert dezelfde grens van 1,5 mg/L als gezondheidskundige richtwaarde. Nederlandse drinkwaterbedrijven blijven hier ruim onder. Bij privebronnen (putten) in bepaalde regioos kan de concentratie iets hoger liggen, maar overschrijding van de EU-norm is zeldzaam.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is fluoride in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de concentraties in Nederlands kraanwater (~0,1 mg/L) is fluoride niet gevaarlijk. Lage fluorideconcentraties (0,5-1,0 mg/L) hebben zelfs een beschermend effect op tanden (minder tandcaries). Risicos ontstaan pas bij langdurige blootstelling aan hogere concentraties: tandvlekken (dentale fluorose) boven 1,5 mg/L, skeletfluorose boven 4 mg/L. Schildklierzorgen worden in de wetenschappelijke literatuur besproken bij concentraties boven 1,5 mg/L, maar zijn niet relevant voor de Nederlandse situatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een koolstoffilter fluoride uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Standaard actief-koolstoffilters (filterkannen zoals Brita, keuken-inline-filters) verwijderen geen fluoride. Fluoride is een klein, negatief geladen ion dat niet adsorbeerd wordt aan actieve kool. Voor fluorideverwijdering zijn andere technieken nodig: omgekeerde osmose (85-95%), bone char-kool (90%+) of geactiveerd aluminiumoxide (activated alumina, 90%+).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe effectief is omgekeerde osmose bij fluoride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goed onderhouden osmosefilter verwijdert 85 tot 95% van fluoride uit drinkwater. Bij een inkomende concentratie van 0,1 mg/L NL-kraanwater daalt fluoride naar 0,005-0,015 mg/L, ver onder elke norm. De effectiviteit hangt af van membraankwaliteit, waterdruk en hoe oud het membraan is. Vervang het membraan elk jaar of per de fabrieksaanbeveling voor optimale werking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is bone char en werkt het voor fluoride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bone char is een speciaal type actieve kool gemaakt van dierlijk bot. Het heeft een hoge affiniteit voor fluoride-ionen via ionenwisseling en adsorptie aan calciumfosfaat in het botmateriaal. Verwijderingspercentage voor fluoride bedraagt 90% of meer. Bone char is minder gebruikelijk in Nederland dan osmose, maar wordt ingezet in regioos met van nature hoog fluoridegehalte. Niet geschikt voor vegetariers of veganisten vanwege de dierlijke oorsprong.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is een fluoridefilter zinvol in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste Nederlandse huishoudens is een specifiek fluoridefilter niet nodig, omdat de fluorideconcentraties in leidingwater laag zijn en geen gezondheidsrisico vormen. Een fluoridefilter kan zinvol zijn bij: (1) gebruik van privebronwater in regioos met hogere achtergrondconcentraties; (2) zuigelingen waarbij ouders uit voorzorg fluoride willen minimaliseren naast fluoride tandpasta; (3) personen met schildklierproblemen die op advies van een arts fluoride-inname willen beperken. In die gevallen is een osmosefilter de meest praktische keuze.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor fluoride: verwijdert osmose fluoride uit water?',
  description: 'Bevat kraanwater fluoride? Ja, ~0,1 mg/L. Welke waterfilters verwijderen fluoride? Osmose verwijdert 85-95% van fluoride uit drinkwater.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/fluoride',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterFluoridePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Fluoride', item: 'https://waterfilterplatform.nl/waterfilter/fluoride' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Fluoride</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor fluoride: verwijdert osmose fluoride uit water?
        </h1>

        <QuickAnswer answer="Nederlands kraanwater bevat van nature ~0,1 mg/L fluoride — ruim onder de WHO-grens van 1,5 mg/L. Nederland fluoreert drinkwater niet, in tegenstelling tot de VS en het VK. Een standaard koolstoffilter verwijdert geen fluoride. Omgekeerde osmose verwijdert 85-95% van fluoride en is de meest praktische keuze als u fluoride wilt reduceren." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fluoride in Nederlands drinkwater: de feiten
        </h2>
        <p className="text-gray-700 mb-4">
          Een veelgestelde vraag is of Nederlands kraanwater gefluoreerd wordt. Het antwoord is duidelijk: <strong>nee</strong>. Nederland stopt al in 1973 met het bewust toevoegen van fluoride aan drinkwater. Landen als de Verenigde Staten, Canada, Australie en het Verenigd Koninkrijk doen dit nog steeds — met concentraties van 0,7 tot 1,0 mg/L. In Nederland is dat beleid afgeschaft.
        </p>
        <p className="text-gray-700 mb-4">
          Fluoride komt in Nederlands kraanwater uitsluitend <strong>van nature voor vanuit de bodem</strong>. De gemiddelde concentratie is circa 0,05 tot 0,2 mg/L, afhankelijk van de grondwaterbron en het drinkwaterbedrijf. Dit is een fractie van de EU-norm van 1,5 mg/L.
        </p>

        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-2">Fluoride-normen op een rij</h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li><strong>WHO-grens (gezondheidskundig):</strong> 1,5 mg/L</li>
            <li><strong>EU-drinkwaternorm:</strong> 1,5 mg/L</li>
            <li><strong>Gemiddeld NL kraanwater:</strong> ~0,1 mg/L (10x onder de norm)</li>
            <li><strong>VS gefluoreerd water:</strong> 0,7 mg/L (bewust toegevoegd)</li>
            <li><strong>Tandcaries-preventie effectief bij:</strong> 0,5-1,0 mg/L</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten van fluoride
        </h2>
        <p className="text-gray-700 mb-4">
          Fluoride heeft een genuanceerd gezondheidsprofliel: bij lage concentraties beschermend, bij hoge concentraties schadelijk.
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Beschermend effect op tanden (lage dosis)</h3>
            <p className="text-gray-700 text-sm">
              Bij 0,5-1,0 mg/L vermindert fluoride tandcaries door in te bouwen in tandglazuur (fluorapatiet). Dit is de basis voor fluoridering in landen die dat bewust toepassen. Het caries-verminderende effect is wetenschappelijk goed gedocumenteerd.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Dentale fluorose (boven 1,5 mg/L)</h3>
            <p className="text-gray-700 text-sm">
              Langdurige blootstelling aan meer dan 1,5 mg/L tijdens tandvorming (kinderen tot 8 jaar) kan leiden tot witte vlekken of bruine verkleuring van het tandglazuur. Dit is niet relevant voor het Nederlandse drinkwater maar wel voor regioos in Azie en Afrika met hoog geogeen fluoride.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Schildklierbezorgdheid (wetenschappelijk debat)</h3>
            <p className="text-gray-700 text-sm">
              Sommige studies suggereren een effect van fluoride op de schildklier bij concentraties boven 1,5 mg/L. Dit is een actief onderzoeksveld, maar bij de concentraties in Nederlands drinkwater (&lt;0,2 mg/L) is er geen aangetoond klinisch risico. Personen met schildklierproblemen kunnen uit voorzorg kiezen voor osmosewater.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke filters verwijderen fluoride?
        </h2>
        <p className="text-gray-700 mb-4">
          Niet alle waterfilters zijn effectief tegen fluoride. Hier is het overzicht:
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Aanbevolen</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een osmosefilter verwijdert 85 tot 95% van fluoride via het semipermeabele membraan. Fluoride-ionen zijn te groot om in significante hoeveelheden door het RO-membraan te passeren. Tevens effectief tegen nitraat, PFAS, zware metalen en medicijnresten. De meest complete oplossing voor keukenwater.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Fluoride: ✓ 85-95%</span>
              <span>Kosten: &euro;300-800</span>
              <span>Onderhoud: jaarlijks patronen + membraan</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Bone char actieve kool</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Speciaal type actieve kool van dierlijk bot. Verwijdert fluoride door ionenwisseling en adsorptie aan calciumfosfaat. Verwijderingspercentage 90% of meer. Minder gangbaar in Nederland. Niet geschikt voor vegetariers of veganisten.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Fluoride: ✓ 90%+</span>
              <span>Kosten: &euro;80-200 (patroon)</span>
              <span>Onderhoud: patroon wisselen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Geactiveerd aluminiumoxide (Activated Alumina)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een poreus aluminiumoxide medium dat fluoride-ionen selectief adsorbeert. Effectiviteit 90%+ bij juiste pH (5,5-6,0 optimaal). Wordt in grotere systemen gebruikt. Vereist periodieke regeneratie met natriumhydroxide. In Nederland weinig verkrijgbaar als consumentenproduct.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Fluoride: ✓ 90%+</span>
              <span>Kosten: variabel</span>
              <span>Onderhoud: regeneratie vereist</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Standaard actieve kool (filterkann/inline)</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Niet effectief</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Koolstoffilters (Brita, inline filters, kokosnootolie-gebaseerde kool) verwijderen <strong>geen</strong> fluoride. Fluoride is een klein, negatief geladen ion dat niet adsorbeerd wordt aan actieve kool. Koolstoffilters zijn effectief voor chloor, geur en smaak, maar niet voor fluoride of andere ionen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Fluoride: ✗ 0%</span>
              <span>Chloor: ✓</span>
              <span>Metalen: ✗</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: fluoridefilters
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Fluoride reductie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85-95%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-800</td>
                <td className="border border-gray-300 px-3 py-2">Aanbevolen; ook PFAS, nitraat, metalen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Bone char</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90%+</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80-200</td>
                <td className="border border-gray-300 px-3 py-2">Niet vegan; minder gangbaar in NL</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Activated Alumina</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90%+</td>
                <td className="border border-gray-300 px-3 py-2">Variabel</td>
                <td className="border border-gray-300 px-3 py-2">pH-afhankelijk; regeneratie nodig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Actieve kool (Brita e.d.)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;20-60/jaar</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor fluoride</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een fluoridefilter zinvol in Nederland?
        </h2>
        <p className="text-gray-700 mb-4">
          Gezien de lage fluorideconcentraties in Nederlands leidingwater is een specifiek fluoridefilter voor de meeste huishoudens <strong>niet noodzakelijk</strong>. De situaties waarin het overwegen waard is:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Privebronwater</strong> in regioos met hogere geogene fluorideconcentraties — laat uw water eerst analyseren</li>
          <li><strong>Zuigelingen en jonge kinderen</strong> waarbij ouders fluoride-inname uit meerdere bronnen (water + tandpasta + supplementen) willen beheersen</li>
          <li><strong>Schildklieraandoeningen</strong> waarbij een arts aanraadt fluoride-inname te minimaliseren</li>
          <li><strong>Volledigheid</strong>: als u toch een osmosefilter aanschaft voor PFAS of andere verontreinigingen, filtert u automatisch ook fluoride mee</li>
        </ul>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van kalk, calcium en magnesium in Nederlands leidingwater.</p>
          </a>
          <a href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
            <p className="text-sm text-gray-600">Alle wettelijke grenswaarden voor drinkwater op een rij.</p>
          </a>
          <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Hoe een osmosefilter fluoride en andere ionen uit water verwijdert.</p>
          </a>
          <a href="/waterfilter/fluor" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Fluor in leidingwater</h3>
            <p className="text-sm text-gray-600">Normen, gezondheidsfeiten en de situatie in Nederland rondom fluor.</p>
          </a>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over fluoride en waterfilters</h2>
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
          <a href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</a>,{' '}
          <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</a>,{' '}
          <a href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS waterfilter</a> en{' '}
          <a href="/waterfilter/nitraat" className="text-[#005F8A] underline">nitraat in drinkwater</a>.
        </p>
      </main>
    </>
  );
}
