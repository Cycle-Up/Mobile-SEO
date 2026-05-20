import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter hormonen en medicijnresten: wat werkt echt?',
  description: 'Zitten hormonen en medicijnresten in kraanwater? Ja, in sporen. Welke waterfilters verwijderen hormonen, antibiotica en pil-resten uit drinkwater?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/hormonen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zitten er hormonen van de pil in Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in zeer kleine hoeveelheden. Ethinylestradiol (EE2), het synthetische hormoon uit de anticonceptiepil, wordt aangetroffen in Nederlandse oppervlaktewateren en incidenteel in kraanwater in concentraties van enkele nanogram per liter (ng/L). Drinkwaterbedrijven verwijderen een groot deel hiervan via hun zuiveringsprocessen, maar volledige verwijdering is niet altijd gegarandeerd. Het RIVM monitort deze stoffen structureel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke medicijnresten worden gevonden in Nederlands drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederland worden in oppervlaktewater en soms in drinkwater sporen gevonden van: ethinylestradiol (anticonceptiepil), ibuprofen en diclofenac (pijnstillers), metformine (diabetesmedicijn), carbamazepine (anti-epilepticum), antibiotica zoals sulfamethoxazol en ciprofloxacine. Concentraties in drinkwater zijn doorgaans in de orde van nanogrammen per liter (ng/L) tot laag microgram per liter (mcg/L). Er is geen specifieke EU-drinkwaternorm voor de meeste medicijnresten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er een EU-norm voor medicijnresten in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, er is geen specifieke EU-drinkwaternorm voor de meeste medicijnen en hormonen. Wel heeft de EU in 2020 een waatchlist ingesteld via de Drinkwaterrichtlijn (2020/2184) voor stoffen die extra monitoring vereisen, waaronder bepaalde hormonen en antibiotica. De EU Waterkaderrichtlijn bevat milieukwaliteitsnormen voor oppervlaktewater voor stoffen zoals ethinylestradiol (0,035 ng/L) en estradiol (0,4 ng/L). Er wordt op Europees niveau gewerkt aan actieplannen voor medicijnresten in water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vormen hormonen en medicijnen in drinkwater een gezondheidsrisico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de huidige concentraties in Nederlands drinkwater is er geen bewezen direct gezondheidsrisico voor mensen vastgesteld. De aangetroffen concentraties liggen honderden tot duizenden keren lager dan therapeutische doses. De zorg richt zich op: (1) cumulatieve effecten van langdurige blootstelling aan cocktails van laaggedoseerde stoffen; (2) effecten op kwetsbare groepen zoals ongeboren kinderen, zuigelingen en mensen met hormoonproblemen; (3) bijdrage aan antibioticaresistentie. Het voorzorgsbeginsel geeft reden om deze stoffen te reduceren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een koolstoffilter hormonen en medicijnen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deels. Geavanceerde actief-koolstoffilters (GAC - granular activated carbon) kunnen bepaalde hormonen en medicijnen gedeeltelijk adsorberen, met name grotere organische moleculen. De effectiviteit varieert sterk per stof: sommige hormonen worden voor 60-80% geadsorbeerd, andere (kleine polaire moleculen zoals metformine) nauwelijks. Actieve kool is geen betrouwbare barriere voor de volledige breedte van medicijnresten. Osmose is effectiever en consistenter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een UV-filter hormonen en medicijnen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. UV-desinfectie doodt bacterien, virussen en protozoa effectief, maar verwijdert geen chemische stoffen zoals hormonen of medicijnresten. UV breekt sommige molecules fotolitisch af, maar dit is niet consistent genoeg voor betrouwbare verwijdering van medicijnen. UV is nuttig als aanvulling op een osmosefilter voor microbiologische veiligheid, maar vervangt het niet voor chemische verontreinigingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe effectief is omgekeerde osmose voor hormonen en medicijnen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose is de meest effectieve methode voor huishoudelijke verwijdering van hormonen en medicijnen. Verwijderingspercentages: ethinylestradiol 97-99%, ibuprofen 95-99%, antibiotica 90-99%, metformine 90-95%. Het RO-membraan heeft een cutoff van circa 100-200 Dalton molecuulgewicht, waardoor de meeste farmaceutische verbindingen worden tegengehouden. Combinatie met actieve kool prefilter verbetert de prestaties verder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kan ik zelf doen om medicijnresten in water te verminderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Naast filteren zijn er preventieve maatregelen: (1) Lever resterende medicijnen altijd in bij de apotheek — gooi ze nooit door het toilet of het riool; (2) gebruik een osmosefilter voor drinkwater en kookwater; (3) voor zuigelingenvoeding is osmosewater extra zinvol als aanvullende voorzorgsmaatregel. Het grootste probleem zit bij uitscheiding via urine en feces — dat is niet individueel te voorkomen maar vraagt om betere rioolwaterzuivering op nationaal niveau.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter hormonen en medicijnresten: wat werkt echt?',
  description: 'Zitten hormonen en medicijnresten in kraanwater? Ja, in sporen. Welke waterfilters verwijderen hormonen, antibiotica en pil-resten effectief?',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/hormonen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterHormonenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Hormonen', item: 'https://waterfilterplatform.nl/waterfilter/hormonen' },
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
          <span>Hormonen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter hormonen en medicijnresten: wat werkt echt?
        </h1>

        <QuickAnswer answer="In Nederlands kraanwater zitten sporen van hormonen (ethinylestradiol uit de pil) en medicijnresten (ibuprofen, antibiotica, metformine) in nanogram-concentraties. Bij huidige niveaus geen bewezen gezondheidsrisico, maar het voorzorgsbeginsel rechtvaardigt actie. Osmosefilter verwijdert 90-99% van medicijnresten. Koolstoffilter is deels effectief. UV-filter werkt niet tegen chemische stoffen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke hormonen en medicijnen zitten in Nederlands drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Het RIVM monitort de waterkwaliteit in Nederland structureel. In oppervlaktewateren die als drinkwaterbron dienen, worden regelmatig sporen gevonden van farmaceutische verbindingen. Na zuivering door drinkwaterbedrijven blijven bij sommige stoffen minimale resten over.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Stof</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Categorie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Typische concentratie (drinkwater)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Ethinylestradiol (EE2)</td>
                <td className="border border-gray-300 px-3 py-2">Anticonceptiepil</td>
                <td className="border border-gray-300 px-3 py-2">0,1-2 ng/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Ibuprofen</td>
                <td className="border border-gray-300 px-3 py-2">Pijnstiller (NSAID)</td>
                <td className="border border-gray-300 px-3 py-2">1-50 ng/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Metformine</td>
                <td className="border border-gray-300 px-3 py-2">Diabetesmedicijn</td>
                <td className="border border-gray-300 px-3 py-2">10-100 ng/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Carbamazepine</td>
                <td className="border border-gray-300 px-3 py-2">Anti-epilepticum</td>
                <td className="border border-gray-300 px-3 py-2">1-30 ng/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Sulfamethoxazol</td>
                <td className="border border-gray-300 px-3 py-2">Antibioticum</td>
                <td className="border border-gray-300 px-3 py-2">1-20 ng/L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Ter vergelijking: een standaard ibuprofentablet bevat 200 mg tot 400 mg. De concentraties in drinkwater zijn honderdduizenden keren lager. Toch groeit de zorg over cumulatieve effecten op lange termijn en over ecologische schade in oppervlaktewateren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regelgeving: er is geen specifieke norm
        </h2>
        <p className="text-gray-700 mb-4">
          Een opvallend gat in de Europese waterregelgeving: er is <strong>geen specifieke EU-drinkwaternorm</strong> voor de meeste medicijnen en hormonen. De herziene EU-drinkwaterrichtlijn (2020/2184) verplicht wel monitoring en heeft een waatchlist ingesteld voor stoffen die extra aandacht vragen.
        </p>
        <p className="text-gray-700 mb-6">
          De EU Waterkaderrichtlijn stelt milieukwaliteitsnormen voor oppervlaktewater — voor ethinylestradiol 0,035 ng/L. Dit is echter geen drinkwaternorm maar een ecologische norm. Farmaceutische bedrijven en beleidsmakers staan onder toenemende druk om de keten van productie tot afvalwater te verduurzamen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke filters werken effectief?
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste keuze</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Het RO-membraan heeft een moleculair cutoff van circa 100-200 Dalton. De meeste farmaceutische verbindingen hebben een molecuulgewicht van 150-600 Dalton en worden daardoor tegengehouden. Verwijderingspercentages: ethinylestradiol 97-99%, ibuprofen 95-99%, carbamazepine 90-97%, antibiotica 90-99%. De meest betrouwbare en brede barriere voor medicijnresten op huishoudelijk niveau.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Hormonen: ✓ 97-99%</span>
              <span>Antibiotica: ✓ 90-99%</span>
              <span>Kosten: &euro;300-800</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Actieve kool (GAC/koolstofblok)</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Deels effectief</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Geavanceerde actieve kool (GAC of geperst koolstofblok) adsorbeert grotere organische moleculen zoals bepaalde hormonen en sommige antibiotica. Effectiviteit varieert sterk: hydrofobe stoffen worden beter geadsorbeerd dan hydrofiele (polaire) stoffen. Metformine en andere kleine polaire moleculen worden nauwelijks verwijderd. Niet betrouwbaar als enige filter voor medicijnresten.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Grotere hormonen: ✓ 60-80%</span>
              <span>Metformine: ✗</span>
              <span>Chloor + geur: ✓</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">UV-desinfectie</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Niet effectief voor chemicalieen</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              UV doodt bacterien en virussen maar verwijdert geen opgeloste chemische stoffen zoals hormonen of medicijnen. Sommige verbindingen worden bij hoge UV-doses fotolitisch afgebroken, maar dit is niet betrouwbaar en consistent genoeg voor huishoudelijk gebruik. UV is een nuttige aanvulling <em>naast</em> osmose voor microbiologische veiligheid, maar geen alternatief.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Bacterien/virussen: ✓</span>
              <span>Hormonen: ✗</span>
              <span>Medicijnen: ✗</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Combinatie: Osmose + Actieve kool</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Optimaal</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              De meeste onder-aanrecht osmosesystemen bevatten al een actief koolstof postfilter. Deze combinatie geeft de beste resultaten: osmose verwijdert de bulk van medicijnresten en ionen, de actieve kool polijst smaak, geur en eventuele resterende organische verbindingen. Dit is de standaard configuratie van kwaliteitsvolle RO-systemen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Medicijnen: ✓ 95-99%</span>
              <span>Hormonen: ✓ 97-99%</span>
              <span>PFAS: ✓</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Preventie: wat kunt u zelf doen?
        </h2>
        <p className="text-gray-700 mb-4">
          Naast filteren zijn er maatregelen die bijdragen aan minder medicijnresten in het watersysteem:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Restmedicijnen inleveren</strong> bij apotheek of milieustraat — nooit door het toilet spoelen</li>
          <li><strong>Osmosewater voor zuigelingen</strong> als extra voorzorgsmaatregel bij de bereiding van flesvoeding</li>
          <li><strong>Bewust medicijngebruik</strong>: gebruik medicijnen alleen als noodzakelijk en volg doseringen op</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het structurele probleem ligt bij rioolwaterzuiveringsinstallaties (rwzi) die niet zijn ontworpen voor medicijnverwijdering. Aanpassing van rwzi met ozonisatie en actieve koolfilters is een beleidsprioriteit in Nederland en de EU.
        </p>

        <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/stoffen-in-drinkwater/hormonen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hormonen in drinkwater</h3>
            <p className="text-sm text-gray-600">Uitgebreide informatie over welke hormonen in drinkwater voorkomen en wat de gezondheidseffecten zijn.</p>
          </a>
          <a href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtertechniek</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose hormonen en medicijnresten effectief uit drinkwater verwijdert.</p>
          </a>
          <a href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Overzicht van de Europese en Nederlandse normen voor drinkwaterkwaliteit en wat ontbreekt.</p>
          </a>
          <a href="/waterfilter/gezondheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter en gezondheid</h3>
            <p className="text-sm text-gray-600">Wat de gezondheidsvoordelen zijn van gefilterd drinkwater en voor wie het extra relevant is.</p>
          </a>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over hormonen in water</h2>
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
          <a href="/waterfilter/pesticiden" className="text-[#005F8A] underline">pesticiden in water</a>.
        </p>
      </main>
    </>
  );
}
