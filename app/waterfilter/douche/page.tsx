import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Douchefilter: Chloor & Kalk Filteren onder de Douche',
  description: 'Een douchefilter verwijdert chloor, kalk en zware metalen uit douchewater. Beter voor huid, haar en eczeem. Vergelijk inline-filters, vitamine C en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/douche' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat doet een douchefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een douchefilter verwijdert chloor, chlooramines, zware metalen (lood, koper) en sediment uit douchewater. Chloor droogt huid en haar uit; verwijdering ervan verbetert de huidbarrière en vermindert jeuk en droogheid. KDF-filters reduceren ook bacteriegroei. Vitamine C-filters neutraliseren chloor chemisch direct voor de douchekop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt een douchefilter tegen eczeem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, voor mensen met eczeem (atopische dermatitis) kan een douchefilter merkbaar helpen. Chloor verstoort de huidbarrière en harde mineralen (calcium, magnesium) kunnen bij gevoelige huid de symptomen verergeren. Een combinatiefilter van KDF + actief kool vermindert beide factoren. Meerdere dermatologische studies tonen verbetering bij gefilterd douchewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een douchefilter mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gemiddeld douchefilter gaat 3–6 maanden mee bij dagelijks gebruik. Dit varieert sterk met waterverbruik en waterhardheid. Bij hard water (boven 20 °dH) is vervangingstermijn eerder 3 maanden; bij zacht water (onder 10 °dH) tot 6 maanden. Vervang het filter als je een afname in waterdruk of meer chloroform-geur opmerkt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een KDF-filter en vitamine C douchefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KDF (Kinetic Degradation Fluxion) is een koper-zink legering die chloor en zware metalen verwijdert via redoxreacties. Het werkt ook bij warm water (tot 75°C) en remt bacteriegroei. Vitamine C-filters neutraliseren chloor en chlooramines chemisch (ascorbinezuur). Ze zijn effectiever voor chlooramines maar werken niet op zware metalen. Een combinatiefilter combineert beide voordelen.',
      },
    },
  ],
};

export default function WaterfilterDouchePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Douche', item: 'https://waterfilterplatform.nl/waterfilter/douche' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Douche</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Douchefilter: Beter Water voor Huid en Haar
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Douchewater bevat chloor, chlooramines, kalk en soms zware metalen. Een douchefilter verwijdert deze stoffen voor de douchekop — minder droge huid, minder haaruitval en betere resultaten bij eczeem en psoriasis.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom chloor in douchewater een probleem is
        </h2>
        <p className="text-gray-700 mb-4">
          Waterleidingbedrijven gebruiken chloor om bacteriën te doden. In het drinkglas is dat nauwelijks te proeven, maar onder een warme douche verdampt chloor snel: je ademt het in en het penetreert de huid.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Huid:</strong> Chloor vernietigt de lipidebarrière van de huid, wat leidt tot droogheid, roodheid en jeuk. Bij eczeem verergeren de symptomen aanzienlijk.</li>
          <li><strong>Haar:</strong> Chloor beschadigt de cuticula (buitenste laag van het haar), wat resulteert in dof, droog haar met meer breuk en split ends.</li>
          <li><strong>Inademing:</strong> Warm water vormt trihalomethanen (THM&rsquo;s) uit chloor — stoffen waarvan langdurige blootstelling geassocieerd is met gezondheidsrisico&rsquo;s. Een korte douche geeft meer THM-blootstelling dan een glas kraanwater drinken.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Soorten douchefilters
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">KDF-filter (Kinetic Degradation Fluxion)</h3>
        <p className="text-gray-700 mb-4">
          KDF is een koper-zinklegering die chloor, zware metalen en waterstofsulfide (rotte-eieren-geur) verwijdert via redoxreacties. KDF-filters werken ook bij hoge watertemperatuur (tot 75°C) — een groot voordeel ten opzichte van actief kool, dat boven 35°C minder effectief wordt. KDF remt ook bacteriegroei in het filter zelf.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Vitamine C-filter (ascorbinezuur)</h3>
        <p className="text-gray-700 mb-4">
          Ascorbinezuur (vitamine C) neutraliseert zowel chloor als chlooramines in milliseconden. Chlooramines zijn een probleem in steeds meer waterleidinggebieden (Nederlandse drinkwaterbedrijven gebruiken ze als stabieler alternatief voor chloor). Actief kool en KDF zijn minder effectief op chlooramines. Vitamine C-filters zijn dan de betere keuze.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Combinatiefilter (KDF + actief kool + vitamine C)</h3>
        <p className="text-gray-700 mb-4">
          De beste douchefilters combineren KDF (zware metalen, bacteriën), actief kool (chloor, geur) en soms vitamine C-granulaat (chlooramines). Prijs €25–60, filtervervanging €15–25 per 3–6 maanden.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Chloor</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Chlooramines</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Zware metalen</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Warm water</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Actief kool</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Deels</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Minder effectief</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">KDF</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (tot 75°C)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Vitamine C</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Combinatie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Douchefilter of waterontharder?
        </h2>
        <p className="text-gray-700 mb-4">
          Een douchefilter filtert chloor en metalen maar verwijdert geen kalk. Hard water blijft hard — kalkaanslag op de douchekop en huid. Een <a href="/waterontharder" className="text-[#005F8A] underline">waterontharder</a> verzacht al het water in huis, inclusief douchewater, maar verwijdert geen chloor.
        </p>
        <p className="text-gray-700 mb-6">
          De meest complete oplossing voor douchewater: een waterontharder (voor kalk) gecombineerd met een KDF/vitamine C-douchefilter (voor chloor en metalen). Of een <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter voor drinkwater</a> en een douchefilter specifiek voor de douche.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie en kosten
        </h2>
        <p className="text-gray-700 mb-4">
          Douchefilters worden eenvoudig geïnstalleerd tussen de douchearm en de douchekop — geen gereedschap nodig, alleen de bestaande verbinding losdraaien. Vervanging van het filterpatroon duurt 5 minuten.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Aanschaf douchefilter: €20–60</li>
          <li>Vervangingspatroon: €15–25</li>
          <li>Vervangingsfrequentie: elke 3–6 maanden</li>
          <li>Jaarkosten: €30–100</li>
        </ul>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Actief koolfilter uitleg</h3>
            <p className="text-sm text-gray-600">Hoe actief kool chloor, geur en organische stoffen uit water verwijdert.</p>
          </a>
          <a href="/waterfilter/chloor-verwijderen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Chloor verwijderen uit water</h3>
            <p className="text-sm text-gray-600">Welk filter verwijdert chloor en chlooraminen het meest effectief?</p>
          </a>
          <a href="/waterfilter/keuken-installatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter keuken installatie</h3>
            <p className="text-sm text-gray-600">Stap-voor-stap handleiding voor het plaatsen van een onderkraan waterfilter.</p>
          </a>
          <a href="/waterhardheid/behandelingsadvies" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid behandelingsadvies</h3>
            <p className="text-sm text-gray-600">Welke aanpak past het beste bij uw waterhardheidsniveau?</p>
          </a>
        </div>
      </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Lees ook: <a href="/kennisbank/waterfilter-douche-chloor" className="text-[#005F8A] underline">Douchefilter voor chloor: welk type werkt het best?</a> en <a href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid in jouw regio</a>.
        </p>
      </main>
    </>
  );
}
