import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: "Hormonen en medicijnen in drinkwater: risico's en oplossingen",
  description:
    'Hormonen, antibiotica en pijnstillers worden aangetroffen in Nederlands drinkwater. Ontdek de risico\'s van medicijnenresten en welk waterfilter ze effectief',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/hormonen-medicijnen' },
};

const faqItems = [
  {
    question: 'Zitten er medicijnen in Nederlands drinkwater?',
    answer:
      'Ja, in zeer kleine concentraties. Het RIVM en KWR signaleren regelmatig sporen van geneesmiddelen in Nederlands drinkwater, waaronder anti-epileptica (carbamazepine), pijnstillers (diclofenac, ibuprofen), diabetesmedicatie (metformine) en antibiotica (sulfamethoxazol). Concentraties liggen typisch in de orde van 0,001 tot 0,1 microgram per liter. Drinkwaterbedrijven zuiveren een groot deel weg, maar volledige verwijdering is niet altijd gegarandeerd.',
  },
  {
    question: 'Is drinkwater met medicijnenresten gevaarlijk?',
    answer:
      'Bij de huidige concentraties in Nederlands drinkwater is geen aantoonbaar acuut gezondheidsrisico voor gezonde volwassenen vastgesteld. De aangetroffen hoeveelheden liggen honderdduizenden keren onder een therapeutische dosis. De aandachtspunten zijn: mogelijke hormoonverstorende effecten bij lange blootstelling, onbekende cocktaileffecten van meerdere stoffen samen en risico op bevordering van antibioticaresistentie. Risicogroepen (baby\'s, zwangeren, mensen met hormoonproblemen) verdienen extra aandacht.',
  },
  {
    question: "Verwijdert een Brita-filterkan hormonen uit water?",
    answer:
      'Een standaard Brita-filterkan bevat actief kool en een ionenwisselaarshars. Actief kool adsorbeert grotere organische moleculen gedeeltelijk (40-70%), maar is niet betrouwbaar voor de volledige breedte van medicijnen en hormonen. Kleine polaire moleculen zoals metformine worden nauwelijks verwijderd. Voor betrouwbare verwijdering van hormonen en medicijnen is omgekeerde osmose de aanbevolen methode met verwijderingspercentages van 90-99%.',
  },
  {
    question: 'Welk waterfilter verwijdert medicijnen het beste?',
    answer:
      'Een omgekeerde osmose (RO) systeem is de goudstandaard voor de verwijdering van medicijnen en hormonen uit drinkwater. RO-membraanporieen zijn circa 0,0001 micrometer groot, kleiner dan vrijwel alle geneesmiddelmoleculen. Verwijderingspercentages: synthetische oestrogenen 95-99%, antibiotica 90-99%, pijnstillers 90-97%, metformine 90-95%. Nanofiltratie (NF) presteert vergelijkbaar met RO maar laat iets meer mineralen door.',
  },
  {
    question: 'Hoe komen de anticonceptiepil-hormonen in drinkwater terecht?',
    answer:
      'Vrouwen die de anticonceptiepil gebruiken, scheiden het synthetische oestrogeen 17-alfa-ethinylestradiol (EE2) grotendeels via urine uit. Dit belandt in het riool, waar rioolwaterzuiveringsinstallaties (rwzi) slechts een deel verwijderen. Het resterende hormoon komt in oppervlaktewater terecht dat als drinkwaterbron dient. Drinkwaterproductie vermindert de concentratie verder, maar brengt die zelden tot nul. EE2 staat op de EU-waatchlist voor drinkwatermonitoring.',
  },
  {
    question: 'Bevat drinkwater antibiotica?',
    answer:
      'In sommige gevallen worden sporen van antibiotica aangetroffen in Nederlands drinkwater, met name sulfamethoxazol en incidenteel ciprofloxacine. Concentraties zijn doorgaans 0,001-0,01 microgram per liter, ver onder therapeutische doses. De zorg richt zich niet op directe toxiciteit maar op de bijdrage aan antibioticaresistentie in het milieu en indirect bij mensen. Omgekeerde osmose verwijdert antibiotica voor 90-99%.',
  },
  {
    question: 'Zijn er EU-normen voor medicijnen in drinkwater?',
    answer:
      'Er zijn momenteel geen specifieke EU-grenswaarden voor de meeste medicijnen en hormonen in drinkwater. De herziene Drinkwaterrichtlijn 2020 (2020/2184) heeft een waatchlist ingesteld van tien prioriteitsstoffen, waaronder 17-alfa-ethinylestradiol. Concrete grenswaarden worden gepland voor 2027. De EU Waterkaderrichtlijn bevat wel milieukwaliteitsnormen voor oppervlaktewater (o.a. EE2 maximaal 0,035 ng/L) maar dat zijn ecologische normen, geen drinkwaternormen.',
  },
  {
    question: 'Hoe kan ik voorkomen dat medicijnen in het drinkwater belanden?',
    answer:
      'Het belangrijkste wat u zelf kunt doen: lever resterende medicijnen altijd in bij de apotheek of milieustraat en spoel ze nooit door het toilet of de gootsteen. Medicijnen via het riool zijn de grootste bron van farmaceutische verontreiniging in het watersysteem. Verdere reductie vereist aanpassing van rioolwaterzuiveringsinstallaties met geavanceerde technieken zoals ozonisatie en actief koolfiltratie op nationaal niveau.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: "Hormonen en medicijnen in drinkwater: risico's en oplossingen",
  description:
    'Hormonen, antibiotica en pijnstillers worden aangetroffen in Nederlands drinkwater. Ontdek de risicos van medicijnenresten en welk waterfilter ze effectief.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/hormonen-medicijnen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function HormonenMedicijnenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Hormonen en medicijnen in drinkwater',
                item: 'https://waterfilterplatform.nl/waterfilter/hormonen-medicijnen',
              },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Hormonen en medicijnen in drinkwater</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Hormonen en medicijnen in drinkwater: risico&apos;s en oplossingen
          </h1>
          <p className="text-[#005F8A] text-lg">
            Geneesmiddelenresten en synthetische hormonen worden aangetroffen in Nederlands drinkwater.
            Ontdek hoe ze daar belanden, wat de risico&apos;s zijn en welk waterfilter ze effectief verwijdert.
          </p>
        </section>

        <QuickAnswer answer="In Nederlands drinkwater worden sporen van medicijnen aangetroffen: anti-epileptica, pijnstillers, diabetesmedicatie en antibiotica. Concentraties zijn ver onder therapeutische doses. Geen bewezen acuut risico, maar het voorzorgsbeginsel is van toepassing. Een omgekeerde osmose filter verwijdert 90-99% van alle medicijnenresten en hormonen." />

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komen medicijnen in drinkwater terecht?
        </h2>
        <p className="text-gray-700 mb-4">
          De route van medicijnen naar uw drinkglas is langer dan u zou denken, maar begint bij een heel
          alledaags proces: het innemen van medicatie. Gemiddeld verlaat 70% van een ingenomen medicijn het
          menselijk lichaam onveranderd of als actieve metaboliet via urine en ontlasting. Dit belandt in
          het riool.
        </p>
        <p className="text-gray-700 mb-4">
          Rioolwaterzuiveringsinstallaties (rwzi) zijn ontworpen om biologisch afbreekbare stoffen en
          nutrienten te verwijderen, niet om farmaceutische verbindingen te elimineren. Afhankelijk van
          de stof verwijdert een rwzi 40-95% van medicijnenresten. De rest bereikt oppervlaktewater
          zoals rivieren en meren, die als drinkwaterbron dienen. Drinkwaterproductie vermindert de
          concentratie verder, maar brengt die zelden tot nul.
        </p>
        <p className="text-gray-700 mb-6">
          Naast uitscheiding via mensen draagt ook vee bij: antibiotica en hormoonpreparaten die aan
          landbouwdieren worden toegediend, komen via mest in bodem en grondwater terecht.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Meest aangetroffen medicijnenresten in Nederlands drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Het RIVM en kennisinstituut KWR monitoren de aanwezigheid van farmaceutische stoffen in
          oppervlaktewater en drinkwater structureel. De tabel toont de meest gevonden stoffen met
          typische gehalten in Nederlands drinkwater:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Stof</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Categorie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Typisch gehalte NL</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">EU-norm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Carbamazepine (anti-epilepticum)</td>
                <td className="border border-gray-300 px-3 py-2">Neurologisch</td>
                <td className="border border-gray-300 px-3 py-2">0,01-0,05 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Geen norm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Diclofenac (pijnstiller)</td>
                <td className="border border-gray-300 px-3 py-2">NSAID</td>
                <td className="border border-gray-300 px-3 py-2">0,001-0,02 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Geen norm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">17-alfa-ethinylestradiol (pil)</td>
                <td className="border border-gray-300 px-3 py-2">Synthetisch oestrogeen</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,001 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Geen norm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Metformine (diabetes)</td>
                <td className="border border-gray-300 px-3 py-2">Antidiabeticum</td>
                <td className="border border-gray-300 px-3 py-2">0,01-0,1 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Geen norm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Sulfamethoxazol (antibioticum)</td>
                <td className="border border-gray-300 px-3 py-2">Antibioticum</td>
                <td className="border border-gray-300 px-3 py-2">0,001-0,01 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Geen norm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Ibuprofen</td>
                <td className="border border-gray-300 px-3 py-2">NSAID</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,005 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">Geen norm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom zijn er geen EU-normen?
        </h2>
        <p className="text-gray-700 mb-4">
          De herziene Drinkwaterrichtlijn 2020 (EU 2020/2184) heeft een waatchlist ingesteld van tien
          prioriteitsstoffen die extra gemonitord moeten worden, waaronder 17-alfa-ethinylestradiol.
          Concrete grenswaarden voor medicijnen in drinkwater zijn echter nog niet vastgesteld en worden
          pas gepland voor 2027.
        </p>
        <p className="text-gray-700 mb-6">
          De reden is dat het vaststellen van veilige grenswaarden voor honderden farmaceutische stoffen
          en hun cocktaileffecten een enorme wetenschappelijke uitdaging is. Er bestaat onzekerheid over
          langetermijneffecten bij lage chronische blootstelling, met name voor kwetsbare groepen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s: wie loopt gevaar?
        </h2>
        <p className="text-gray-700 mb-4">
          Bij de huidige concentraties in Nederlands drinkwater is geen aantoonbaar acuut risico voor
          gezonde volwassenen vastgesteld. De aangetroffen hoeveelheden liggen typisch honderdduizenden
          keren onder een therapeutische dosis. Toch zijn er drie aandachtspunten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Hormoonverstoring bij lange blootstelling:</strong> synthetische oestrogenen zoals
            EE2 kunnen zelfs in lage concentraties hormoonverstorend werken, met name tijdens kritische
            ontwikkelingsperioden (foetus, zuigelingen).
          </li>
          <li>
            <strong>Antibioticaresistentie-bevordering:</strong> zelfs zeer lage concentraties
            antibiotica kunnen de ontwikkeling van resistente bacterien in de omgeving stimuleren.
          </li>
          <li>
            <strong>Cocktaileffecten:</strong> de gecombineerde werking van tientallen stoffen
            tegelijkertijd is wetenschappelijk onvoldoende onderzocht.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Risicogroepen die extra aandacht verdienen: baby&apos;s en foetussen, mensen met
          hormoonproblemen of hormoonafhankelijke aandoeningen, en personen met chronisch
          medicijngebruik die mogelijk al een hogere baseline-blootstelling hebben.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke waterfilters verwijderen medicijnen en hormonen?
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elk filter werkt even goed tegen farmaceutische verbindingen. De vergelijking:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering medicijnen</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering hormonen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter (GAC)</td>
                <td className="border border-gray-300 px-3 py-2">40-80% (afhankelijk van stof)</td>
                <td className="border border-gray-300 px-3 py-2">50-70%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">90-99%</td>
                <td className="border border-gray-300 px-3 py-2">95-99%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Ultrafiltratie (UF)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20% (te grote porieen)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">UV-desinfectie</td>
                <td className="border border-gray-300 px-3 py-2">0% (geen filtratie)</td>
                <td className="border border-gray-300 px-3 py-2">0%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltratie (NF)</td>
                <td className="border border-gray-300 px-3 py-2">80-95%</td>
                <td className="border border-gray-300 px-3 py-2">85-95%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter: de goudstandaard
        </h2>
        <p className="text-gray-700 mb-4">
          Een omgekeerde osmose systeem werkt via een semipermeabel membraan met porieen van circa
          0,0001 micrometer. Dit is kleiner dan vrijwel alle medicijnmoleculen, die typisch een
          molecuulgewicht van 150-600 Dalton hebben. Water wordt onder druk door het membraan geperst;
          medicijnen, hormonen, zware metalen en andere verontreinigingen blijven achter in het
          afvalwater dat wordt afgevoerd.
        </p>
        <p className="text-gray-700 mb-4">
          De combinatie van een pre-koolstoffilter (voor chloor en grotere organische stoffen),
          het RO-membraan en een post-koolstoffilter (voor smaak en geur) levert het meest
          betrouwbare resultaat voor medicijnenverwijdering. Bekijk onze uitgebreide pagina over{' '}
          <Link href="/waterfilter/hormonen" className="text-[#005F8A] underline">
            hormonen in kraanwater
          </Link>{' '}
          voor meer details over filterprestaties per stof.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktisch advies: medicijnen niet door het toilet
        </h2>
        <p className="text-gray-700 mb-4">
          Een eenvoudige maar effectieve maatregel: lever resterende of verlopen medicijnen altijd
          in bij de apotheek of milieustraat. In Nederland accepteren apotheken gratis en zonder
          vragen restmedicijnen. Dit voorkomt dat farmaceutische stoffen direct in het rioolsysteem
          belanden en de zuivering omzeilen.
        </p>
        <p className="text-gray-700 mb-6">
          Meer informatie over verontreinigingen in leidingwater vindt u op onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">
            verontreinigingen in leidingwater
          </Link>
          . Voor een compleet overzicht van osmosefilters, zie{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde osmose
          </Link>
          .
        </p>

        <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/hormonen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hormonen in drinkwater</h3>
            <p className="text-sm text-gray-600">Uitgebreide informatie over welke hormonen in drinkwater voorkomen en wat de gezondheidseffecten zijn.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtertechniek</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose medicijnresten en hormonen effectief uit drinkwater verwijdert.</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Overzicht van de Europese en Nederlandse normen voor drinkwaterkwaliteit en wat ontbreekt voor medicijnen.</p>
          </Link>
          <Link href="/waterfilter/hormonen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter hormonen</h3>
            <p className="text-sm text-gray-600">Welke waterfilters hormonen zoals ethinylestradiol effectief verwijderen en hoe ze werken.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over medicijnen en hormonen in drinkwater
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003F5C] cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/waterfilter/hormonen" className="text-[#005F8A] underline">
            hormonen in kraanwater
          </Link>
          ,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde osmose uitleg
          </Link>{' '}
          en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">
            verontreinigingen in leidingwater
          </Link>
          .
        </p>
      </main>
    </>
  );
}
