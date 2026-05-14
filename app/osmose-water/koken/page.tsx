import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import SchemaOrg from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosewater voor Koken: Betere Smaak & Gezondheid',
  description: 'Koken met osmosewater geeft betere smaakstoffen, minder kalkaanslag in pannen en purer resultaat. Verschil bij pasta, rijst, soepen, thee en koffie uitgelegd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/koken' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Proef je het verschil als je met osmosewater kookt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, voor smaaggevoelige toepassingen. Thee en koffie smaken aantoonbaar schoner en zuiverder met osmosewater — chloor en mineralen die de smaak beïnvloeden zijn verwijderd. Bij pasta en rijst is het verschil subtieler maar merkbaar voor geoefende smaakpapillen. Soepen en sauzen op basis van zelfgetrokken bouillon profiteren het meest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kook je pasta sneller met osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een lager kookpunt dan hard leidingwater in theorie, maar het verschil is verwaarloosbaar: 99,97°C vs. 100°C bij standaard atmosferische druk. Praktisch verschil in kooktijd: geen. Wel heeft osmosewater minder kalkaanslag effect op je pannen, en pasta absorbeert het water gelijkmatiger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater beter voor brood bakken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, bakers kiezen bewust voor water met specifieke TDS-waarden. Te zacht water (TDS onder 50) geeft een te plakkerig, slap deeg. Optimaal voor brood is TDS 75–150 mg/L met wat calcium en magnesium. Osmosewater met een kleine hoeveelheid remineralisering of 50/50 gemengd met leidingwater is ideaal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik mineralen toevoegen als ik kook met osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste kooktoepassingen is dat niet nodig. Groenten, rijst en pasta onttrekken smaak en mineralen aan het kookwater, maar ook aan de groenten zelf — het kleine verschil in mineraalinhoud van het water speelt geen rol in je dagelijkse voedingsinname. Voor koffie en thee is remineralisatie soms gewenst voor optimale extractie.',
      },
    },
  ],
};

export default function OsmoseWaterKokenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'Koken', item: 'https://waterfilterplatform.nl/osmose-water/koken' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</a> &rsaquo;{' '}
          <span>Koken</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmosewater voor Koken: Betere Smaak & Gezondheid
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Water is een ingrediënt, geen bijzaak. Chefs in toprestaurants kiezen bewust voor gefilterd of osmosewater. Wat is het verschil voor thuiskoks?
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zit er in gewoon kraanwater dat smaak beïnvloedt?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Chloor:</strong> Geeft een licht zwembadgeur, met name merkbaar in thee en koffie. Bij verhitting verdampt chloor deels maar niet volledig.</li>
          <li><strong>Bicarbonaat (KH):</strong> Hoge KH neutraliseert zuren in je kookproces — citroen, wijn, azijn in een saus worden gedempt door de bufferende werking van bicarbonaat.</li>
          <li><strong>Kalk (calcium/magnesium):</strong> Vormt vliesjes op soepen en theekopjes, beïnvloedt textuur van peulvruchten bij lang koken.</li>
          <li><strong>Sediment en metalen:</strong> In oud leidingwerk kunnen roestdeeltjes en koperoxides de kleur van licht gekleurde sauzen beïnvloeden.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Per toepassing: verschil van osmosewater
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Thee en koffie ☕</h3>
        <p className="text-gray-700 mb-4">
          Het grootste verschil is hier. De Specialty Coffee Association (SCA) geeft specifieke normen voor koffiewater: TDS 75–250 mg/L, calcium 17–85 mg/L, geen chloor. Osmosewater met lichte remineralisering valt precies in die range. Thee-tannines lossen beter en gelijkmatiger op zonder de metalen en chloor die de smaak verstoren.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Pasta en rijst 🍝</h3>
        <p className="text-gray-700 mb-4">
          Pasta kookt gelijkmatig gaar in osmosewater omdat er geen kalk is die de buitenkant van pasta&rsquo;s iets verhardt. Rijst absorbeert osmosewater iets gelijkmatiger — het resultaat is gladdere, minder plakkerige korrels. Voor echt smaakverschil: kook ongezouten en voeg pas na het koken zout toe; dan proef je het watereffect het best.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Soepen en bouillons 🍲</h3>
        <p className="text-gray-700 mb-4">
          Bij lang trekken van bouillon (4–8 uur) concentreert al het water in de pan. Mineralen en chloor worden meegeconcentreerd. Met osmosewater als basis krijg je een helder, schoner extraherende bouillon — de smaak van de ingrediënten staat centraler. Professionele koks in Michelin-keukens gebruiken standaard gefilterd water voor fonds en bouillons.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Brood en gebak 🍞</h3>
        <p className="text-gray-700 mb-4">
          Voor gist is watersamenstelling relevant. Te hard water (hoge GH) vertraagt gistwerking; te zacht water geeft een te snel rijzend, plakkerig deeg. Osmosewater gemengd 50/50 met leidingwater, of osmosewater met 1–2 g zout en een klein beetje calciumsulfaat (gyps), geeft professioneel brooddeeg.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsvoordelen van koken met osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          Koken met osmosewater vermindert de blootstelling aan contaminanten die in leidingwater aanwezig kunnen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Trihalomethanen (THM&rsquo;s) — bij verhitting van gechloreerd water ontstaan deze bijproducten; osmosewater bevat geen chloor</li>
          <li>Lood — voor huishoudens met oud leidingwerk is osmosewater een veiliger kookvloeistof</li>
          <li>Nitraat — relevant bij privéputten in landbouwgebieden, met name bij koken voor kinderen</li>
        </ul>

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Osmosewater direct uit de kraan</h3>
          <p className="text-gray-700 mb-4">
            Een 4-in-1 osmosekraan levert direct gefilterd water op kooktemperatuur — ideaal voor thee, koffie, soepen en pasta. Geen flessen sjouwen, geen ketels.
          </p>
          <a href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </a>
        </div>

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

        <p className="text-gray-600 text-sm">
          Lees ook: <a href="/kennisbank/osmose-water-koken-recepten" className="text-[#005F8A] underline">Osmosewater in de keuken: tips per recept</a> en <a href="/kennisbank/water-koffie" className="text-[#005F8A] underline">water en koffie: welke samenstelling is optimaal?</a>
        </p>
      </main>
    </>
  );
}
