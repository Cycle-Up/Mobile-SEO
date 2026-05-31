import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicijnresten in drinkwater: risico\'s en filtratie (2026)',
  description: 'Komen medicijnresten voor in Nederlands drinkwater? Wat zegt het RIVM? Welke filters verwijderen farmaceutische residuen? Osmose verwijdert 90–99% van.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/medicijnresten' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zitten er medicijnresten in Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in sporen. Onderzoek van het RIVM en drinkwaterbedrijven toont aan dat in sommige Nederlandse drinkwaterbronnen (met name oppervlaktewater van Rijn en Maas) meetbare concentraties medicijnresten aanwezig zijn, waaronder ibuprofen, metformine, diclofenac en hormoonachtige stoffen. De concentraties zijn doorgaans in de nanogram-per-liter range (ng/L) — ver onder farmacologische actieve doses. Grondwatergebieden (Drenthe, Brabant) hebben significant lagere concentraties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn medicijnresten in kraanwater gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op de huidige meetbare concentraties (ng/L tot laag µg/L) zijn er geen bewezen directe gezondheidsrisico\'s voor de mens. Een therapeutische dosis ibuprofen is 400 mg; om die dosis via drinkwater binnen te krijgen zou je duizenden liters per dag moeten drinken. Echter: het voorzorgsbeginsel, mogelijke cocktaileffecten van meerdere stoffen tegelijk, en bijzondere kwetsbaarheid van zwangere vrouwen en kinderen maken filtratie een verstandige keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter medicijnresten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Omgekeerde osmose (RO) is de meest effectieve thuisfiltratiemethode voor farmaceutische residuen. Het RO-membraan heeft poriën van 0,0001 micron en werkt via grootte-uitsluiting én ladingsafstoting. Verwijderingspercentages: ibuprofen 90–99%, metformine 85–99%, anticoagulantia 95–99%, estrogenen (EE2) 90–99%. Nanofiltratiesystemen zijn vergelijkbaar effectief. Actief kool verwijdert sommige stoffen maar is minder consistent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke medicijnresten worden het meest gevonden in Nederlands drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het RIVM monitoringsprogramma en Europese NORMAN-netwerk detecteren regelmatig: ibuprofen (pijnstiller), metformine (diabetesmedicijn), carbamazepine (anti-epilepticum), sulfamethoxazol (antibioticum), 17α-ethinylestradiol (EE2, anticonceptiehormoon), en diclofenac (ontstekingsremmer). Carbamazepine en metformine zijn het meest persistent in waterbehandeling door hun chemische stabiliteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zegt de EU-drinkwaterrichtlijn over medicijnresten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn 2020/2184 (geïmplementeerd in NL als Drinkwaterbesluit) bevat een "watch list" van te monitoren stoffen, waaronder farmaceutische verbindingen. De richtlijn stelt nog geen harde normen voor individuele medicijnresten in drinkwater — monitoring loopt nog. Wel is 17α-ethinylestradiol (EE2) opgenomen in de prioriteitenlijst. Het voorzorgsbeginsel (artikel 4) verplicht waterbedrijven bij nieuwe stoffen voorzorgsmaatregelen te nemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe komen medicijnresten in het drinkwater terecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De route verloopt via: (1) Uitscheiding door patiënten — medicijnen worden door het lichaam gemetaboliseerd en uitgescheiden via urine en feces. (2) Rioolwaterzuivering (RWZI) — conventionele zuivering verwijdert veel maar niet alle farmaceutische verbindingen. Actief kool en ozonbehandeling helpen maar zijn niet overal aanwezig. (3) Oppervlaktewater — behandeld rioolwater wordt geloosd in rivieren (Rijn, Maas). (4) Drinkwaterproductie — waterwinning uit oppervlaktewater brengt resterende sporen mee in het drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zegt de WHO over medicijnresten in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO publiceerde in 2012 en 2021 assessments van farmaceutische residuen in drinkwater. Conclusie: bij huidige gemeten concentraties is er geen aantoonbaar risico voor de volksgezondheid. Tegelijkertijd adviseert de WHO verdere monitoring, bronmaatregelen (verantwoord medicijngebruik, inzameling ongebruikte medicijnen) en verbetering van zuiveringstechnologie. De WHO erkent ook dat er onzekerheid bestaat over langetermijneffecten van chronische blootstelling aan lage concentraties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een actief koolfilter ook medicijnresten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actief kool adsorbeert sommige medicijnresten effectief — met name lipofiele verbindingen zoals estrogenen en diclofenac (70–90% bij vers filter). Echter: de effectiviteit varieert sterk per stof, neemt snel af na verzadiging van het koolfilter, en hydrofile stoffen zoals metformine en paracetamol worden nauwelijks geadsorbeerd. Voor consistente verwijdering van een breed spectrum farmaceutische residuen is een osmosefilter (RO) betrouwbaarder dan actief kool alleen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Medicijnresten in drinkwater: risico\'s en filtratie (2026)',
  description: 'Komen medicijnresten voor in Nederlands drinkwater? Wat zegt het RIVM? Welke filters verwijderen farmaceutische residuen?',
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  url: 'https://waterfilterplatform.nl/drinkwater/medicijnresten',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function MedicijnrestenDrinkwaterPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Medicijnresten', item: 'https://waterfilterplatform.nl/drinkwater/medicijnresten' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwater" className="hover:underline">Drinkwater</Link> &rsaquo;{' '}
          <span>Medicijnresten</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Medicijnresten in drinkwater: risico&rsquo;s en filtratie (2026)
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Ibuprofen, antidepressiva, anticonceptiehormonen en antibiotica: meetbare sporen van medicijnen zijn aangetoond in oppervlaktewater en sommige drinkwaterbronnen in Nederland. Wat zijn de risico&rsquo;s, wat zegt het RIVM, en welke waterfilters verwijderen farmaceutische residuen effectief?
        </p>

        <QuickAnswer answer="In Nederlands kraanwater zijn sporenconcentraties medicijnresten aangetoond (ng/L-niveau). Direct gezondheidsrisico is niet aangetoond, maar het voorzorgsbeginsel geldt. Osmose (RO) verwijdert 90–99% van farmaceutische residuen — de meest effectieve thuisoplossing. Actief kool helpt voor sommige stoffen maar is niet consistent voor alle medicijntypes." />

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/hormonen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hormonen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van hormoonverstorende stoffen in drinkwater.</p>
          </Link>
          <Link href="/drinkwaternormen/medicijnresten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Normen voor medicijnresten</h3>
            <p className="text-sm text-gray-600">Wat zegt de wet over medicijnresten in drinkwater?</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose farmaceutische residuen verwijdert.</p>
          </Link>
          <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool filtratie</h3>
            <p className="text-sm text-gray-600">Werking en toepassingen van actief kool als filtertechniek.</p>
          </Link>
        </div>
      </section>

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komen medicijnen in het drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          De route van medicijn naar kraanwater verloopt via een reeks stappen:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-3">
            <div className="shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <p className="font-semibold text-[#003F5C] text-sm">Uitscheiding door patiënten</p>
              <p className="text-gray-700 text-sm">Mensen scheiden via urine en feces werkzame en gemetaboliseerde medicijnresten uit. Dit geldt voor vrijwel alle medicijntypes: pijnstillers, hormonen, antibiotica, bloeddrukverlagende middelen en diabetesmedicijnen.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <p className="font-semibold text-[#003F5C] text-sm">Rioolwaterzuivering (RWZI)</p>
              <p className="text-gray-700 text-sm">Conventionele rioolwaterzuivering verwijdert biologisch afbreekbare stoffen effectief, maar farmaceutische verbindingen zijn chemisch stabiel en worden slechts gedeeltelijk afgebroken (20–80% per stof, afhankelijk van het type). Verbeterde technieken zoals ozonbehandeling en actief kool verwijderen meer, maar zijn niet op alle RWZI&rsquo;s aanwezig.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <p className="font-semibold text-[#003F5C] text-sm">Oppervlaktewater</p>
              <p className="text-gray-700 text-sm">Behandeld rioolwater wordt geloosd in rivieren zoals de Rijn en Maas. Meetbare concentraties medicijnen zijn aangetoond in zowel de Maas (hogere concentraties) als de Rijn. Grondwater is significant schoner dan oppervlaktewater, maar ook daar zijn sporen gevonden nabij grote steden en landbouwgebieden.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <p className="font-semibold text-[#003F5C] text-sm">Drinkwaterproductie</p>
              <p className="text-gray-700 text-sm">Drinkwaterbedrijven zuiveren oppervlaktewater met meerdere technieken (coagulatie, zandfiltratie, UV-behandeling, actief kool). De meeste stoffen worden hiermee verwijderd, maar sommige persistente verbindingen bereiken in sporen het eindproduct.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is aangetroffen in Nederlands drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Het RIVM (Rijksinstituut voor Volksgezondheid en Milieu) monitort medicijnresten in het kader van het KRW-programma (Kaderrichtlijn Water) en de EU Drinkwaterrichtlijn. Regelmatig gemeten stoffen en typische concentraties in drinkwater:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Stof</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Concentratie (typisch)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bron</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Metformine</td>
                <td className="border border-gray-300 px-3 py-2">Diabetesmedicijn</td>
                <td className="border border-gray-300 px-3 py-2">10–500 ng/L</td>
                <td className="border border-gray-300 px-3 py-2">Rijn, Maas</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ibuprofen</td>
                <td className="border border-gray-300 px-3 py-2">Pijnstiller</td>
                <td className="border border-gray-300 px-3 py-2">1–50 ng/L</td>
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Carbamazepine</td>
                <td className="border border-gray-300 px-3 py-2">Anti-epilepticum</td>
                <td className="border border-gray-300 px-3 py-2">5–100 ng/L</td>
                <td className="border border-gray-300 px-3 py-2">Rijn, Maas</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">17α-Ethinylestradiol (EE2)</td>
                <td className="border border-gray-300 px-3 py-2">Anticonceptiehormoon</td>
                <td className="border border-gray-300 px-3 py-2">0,1–5 ng/L</td>
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Diclofenac</td>
                <td className="border border-gray-300 px-3 py-2">Ontstekingsremmer</td>
                <td className="border border-gray-300 px-3 py-2">1–30 ng/L</td>
                <td className="border border-gray-300 px-3 py-2">Rijn, Maas</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sulfamethoxazol</td>
                <td className="border border-gray-300 px-3 py-2">Antibioticum</td>
                <td className="border border-gray-300 px-3 py-2">0,5–20 ng/L</td>
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-xs mb-6">Bronnen: RIVM, KWR Water Research, NORMAN Network. Concentraties variëren sterk per seizoen, regio en drinkwaterbedrijf.</p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&rsquo;s: wat is het werkelijke gevaar?
        </h2>
        <p className="text-gray-700 mb-4">
          De wetenschappelijke consensus is genuanceerd:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1 text-sm">Direct risico: zeer laag</h3>
            <p className="text-gray-700 text-sm">De concentraties in drinkwater zijn duizenden tot miljoenen maal lager dan therapeutische doses. Een volwassene zou letterlijk duizenden liters per dag moeten drinken om een farmacologisch actieve dosis via drinkwater binnen te krijgen. Op dit niveau zijn geen directe gezondheidseffecten gedocumenteerd.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1 text-sm">Kwetsbare groepen: meer aandacht gewenst</h3>
            <p className="text-gray-700 text-sm">Zwangere vrouwen, foetussen, zuigelingen en mensen met hormoongevoelige aandoeningen zijn gevoeliger voor hormoonachtige stoffen (endocrine disruptors) zoals EE2. Het voorzorgsbeginsel rechtvaardigt extra aandacht voor deze groepen, ook bij lage concentraties.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1 text-sm">Cocktaileffect: onzekerheid blijft</h3>
            <p className="text-gray-700 text-sm">De gecombineerde werking van tientallen medicijnresten tegelijk (het &ldquo;cocktaileffect&rdquo;) is wetenschappelijk nog niet volledig onderzocht. Individuele stoffen zijn soms op laag niveau onderzocht, maar de interacties tussen meerdere stoffen zijn complex.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1 text-sm">Ecosysteemrisico: reëel en gemeten</h3>
            <p className="text-gray-700 text-sm">Medicijnresten hebben aantoonbare effecten op aquatische ecosystemen. EE2 heeft hermafroditisering van vissoorten veroorzaakt in Europese rivieren. Antibiotica dragen bij aan antibioticaresistentie in het waterecosysteem. Dit zijn omgevingsrisico&rsquo;s, niet direct volksgezondheidsrisico&rsquo;s.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-drinkwaterrichtlijn 2020/2184 en medicijnresten
        </h2>
        <p className="text-gray-700 mb-4">
          De herziene EU-drinkwaterrichtlijn (2020/2184) bracht belangrijke vernieuwingen voor farmaceutische residuen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Watch list:</strong> Een lijst van te monitoren stoffen (bijlage I, deel E) waaronder geneesmiddelen en hun metabolieten. Lidstaten moeten deze stoffen monitoren en de resultaten rapporteren aan de Europese Commissie.</li>
          <li><strong>Prioritaire stoffen:</strong> 17α-Ethinylestradiol (EE2) en andere hormoonachtige stoffen zijn opgenomen als prioriteit. Normen voor individuele geneesmiddelen zijn nog in ontwikkeling.</li>
          <li><strong>Voorzorgsbeginsel (artikel 4):</strong> Waterbedrijven moeten bij nieuwe of opkomende stoffen voorzorgsmaatregelen nemen, ook als er nog geen wettelijke norm is.</li>
          <li><strong>Bronbescherming:</strong> De richtlijn legt meer nadruk op het voorkomen van vervuiling bij de bron (RWZI-verbeteringen, medicijninzameling) in plaats van enkel zuivering aan het einde.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Lees meer op onze pagina over <Link href="/drinkwater/kwaliteit" className="text-[#005F8A] underline">drinkwaterkwaliteit in Nederland</Link> voor een overzicht van alle relevante normen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke filters verwijderen medicijnresten?
        </h2>
        <p className="text-gray-700 mb-4">
          Niet alle filters zijn even effectief tegen farmaceutische residuen. Hier een overzicht van beschikbare technieken:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertechnologie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Verwijdering medicijnresten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mechanisme</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90–99%</td>
                <td className="border border-gray-300 px-3 py-2">Grootte-uitsluiting + ladingsafstoting</td>
                <td className="border border-gray-300 px-3 py-2">€300–600 aanschaf</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltration (NF)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–98%</td>
                <td className="border border-gray-300 px-3 py-2">Grootte-uitsluiting (0,001 micron)</td>
                <td className="border border-gray-300 px-3 py-2">€500–1.200</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (GAC)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">30–90% (stofafhankelijk)</td>
                <td className="border border-gray-300 px-3 py-2">Adsorptie (lipofiele stoffen)</td>
                <td className="border border-gray-300 px-3 py-2">€50–200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ultrafiltratie (UF)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">5–30%</td>
                <td className="border border-gray-300 px-3 py-2">Grootte-uitsluiting (0,01–0,1 micron)</td>
                <td className="border border-gray-300 px-3 py-2">€100–200</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">UV-ontsmetting</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">&lt;5% (chemisch)</td>
                <td className="border border-gray-300 px-3 py-2">Doodt bacteriën, geen chemische verwijdering</td>
                <td className="border border-gray-300 px-3 py-2">€80–200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ionenwisselaar</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Variabel</td>
                <td className="border border-gray-300 px-3 py-2">Ionenwisseling (geladen moleculen)</td>
                <td className="border border-gray-300 px-3 py-2">€100–400</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmose: waarom het de beste keuze is
        </h2>
        <p className="text-gray-700 mb-4">
          Omgekeerde osmose is de enige thuisfiltratietechnologie die consistent een breed spectrum farmaceutische residuen verwijdert. De reden is het werkingsprincipe:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Membraanporiën van 0,0001 micron:</strong> Moleculen groter dan dit worden mechanisch tegengehouden. De meeste medicijnmoleculen zijn 200–1.000 Dalton groot — te groot voor de membraanporiën.</li>
          <li><strong>Ladingsafstoting:</strong> Het RO-membraan heeft een negatieve lading die geladen moleculen (zoals veel farmaceutische verbindingen) extra afstoot.</li>
          <li><strong>Meerdere filterstappen:</strong> Moderne osmosesystemen combineren RO-membraan met actief koolfilters voor een dubbele barrière.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bekijk ons uitgebreide overzicht op de pagina <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose werking en selectie</Link> voor technische details.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zegt de WHO?
        </h2>
        <p className="text-gray-700 mb-4">
          De Wereldgezondheidsorganisatie (WHO) publiceerde in 2021 een uitgebreide update van haar Drinkwaterrichtlijnen. Ten aanzien van farmaceutische residuen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Bij huidige meetbare concentraties zijn geen directe gezondheidsrisico&rsquo;s voor de algemene bevolking aantoonbaar.</li>
          <li>De WHO erkent onzekerheid over langetermijneffecten van chronische blootstelling aan lage concentraties van meerdere stoffen tegelijk.</li>
          <li>Zwangere vrouwen, jonge kinderen en mensen die al medicijnen gebruiken worden benoemd als extra aandachtsgroepen.</li>
          <li>De WHO adviseert bronmaatregelen (verantwoord medicijngebruik, inzameling ongebruikte medicijnen bij apotheek) als prioriteit boven eindbehandeling.</li>
          <li>Verbeterde RWZI-technieken (ozon, actief kool) worden aanbevolen waar medicijnresten een aantoonbaar milieurisico vormen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische aanbeveling
        </h2>
        <p className="text-gray-700 mb-4">
          Op basis van de huidige wetenschappelijke inzichten:
        </p>
        <div className="space-y-3 mb-8">
          <div className="border border-green-200 bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1 text-sm">Aanbevolen: osmosefilter (RO)</h3>
            <p className="text-gray-700 text-sm">Voor maximale zekerheid, met name voor zwangere vrouwen, baby&rsquo;s en kinderen. Verwijdert 90–99% van farmaceutische residuen, naast kalk, nitraat, PFAS en zware metalen. Eenmalige investering, lage vervolgkosten.</p>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1 text-sm">Alternatief: actief koolfilter (voor specifieke stoffen)</h3>
            <p className="text-gray-700 text-sm">Effectief voor lipofiele stoffen zoals estrogenen en diclofenac. Goedkopere optie als het primaire doel smaakverbetering en hormoonfiltering is. Niet consistent voor polaire stoffen zoals metformine en carbamazepine.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1 text-sm">Niet aanbevolen voor medicijnresten: UV-filter alleen</h3>
            <p className="text-gray-700 text-sm">UV-ontsmetting is uitstekend voor bacteriën en virussen, maar verwijdert chemische verbindingen niet. UV&rsquo;s werking is fotobiologisch — medicijnen zijn kleine moleculen die UV-straling doorlaten.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veelgestelde vragen
        </h2>
        <div className="space-y-3 mb-8">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Maximale drinkwaterfiltratie — inclusief medicijnresten</h3>
          <p className="text-gray-700 mb-4">
            De PureAqua 4-in-1 osmose + kokend water kraan filtert 90–99% van farmaceutische residuen, naast kalk, PFAS, nitraat en zware metalen. De meest complete drinkwaterbescherming voor thuis.
          </p>
          <Link href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </Link>
        </div>

        <p className="text-gray-600 text-sm">
          Lees ook: <Link href="/drinkwater" className="text-[#005F8A] underline">drinkwaterkwaliteit in Nederland</Link>, <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en <Link href="/leidingwater/pfas" className="text-[#005F8A] underline">PFAS in drinkwater</Link>.
        </p>
      </main>
    </>
  );
}
