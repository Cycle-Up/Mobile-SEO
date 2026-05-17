import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Elektrolyse en CDI waterontzouting — hoe werkt capacitieve deionisatie? | WaterfilterPlatform',
  description: 'CDI (Capacitive Deionization) trekt ionen aan via elektroden zonder membraan. Laag energieverbruik, geen druk. Vergelijking CDI vs omgekeerde osmose voor thuisgebruik.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filtertechnieken/elektrolyse-cdi' },
  openGraph: {
    title: 'Elektrolyse en CDI waterontzouting — hoe werkt capacitieve deionisatie?',
    description: 'CDI trekt ionen aan via elektroden zonder membraan. Laag energieverbruik vergeleken met RO. Beperkingen en toepassingen uitgelegd.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen CDI en omgekeerde osmose?',
    answer: 'Omgekeerde osmose (RO) werkt mechanisch: water wordt onder hoge druk (5-15 bar) door een dicht membraan geperst dat ionen tegenhoudt. CDI (Capacitive Deionization) werkt elektrochemisch: een elektrisch veld trekt ionen aan naar geladen koolstofelektroden, zonder membraan en zonder hoge druk. CDI verbruikt minder energie voor laag-zout water (TDS onder 1500 mg/L), maar is minder effectief voor hoog-zout water. RO verwijdert ook organische stoffen en bacterien; CDI verwijdert alleen ionen.',
  },
  {
    question: 'Verwijdert CDI ook PFAS of bacterien?',
    answer: 'Nee. CDI verwijdert uitsluitend geladen ionen (natrium, calcium, magnesium, chloor, nitraat, sulfaat) op basis van elektrische aantrekkingskracht. PFAS-moleculen zijn weliswaar geladen maar hebben een te grote molecule-structuur en hydrofobe eigenschappen waardoor ze niet effectief worden verwijderd door CDI. Bacterien en virussen zijn niet geladen en worden niet door CDI verwijderd. Voor bredere waterbehandeling moet CDI worden gecombineerd met een UF-filter en actief koolfilter.',
  },
  {
    question: 'Hoeveel energie verbruikt CDI vergeleken met RO?',
    answer: 'CDI verbruikt 0,1-0,6 kWh per kubieke meter water bij lage saliniteit (TDS onder 1500 mg/L). RO verbruikt 0,5-1,5 kWh per kubieke meter voor brak water en 3-8 kWh per kubieke meter voor zeewater. Voor huishoudelijk leidingwater met matige TDS (200-600 mg/L) is CDI energiezuiniger. Het energievoordeel verdwijnt bij hogere zoutconcentraties: bij zeewater (35.000 mg/L TDS) is RO efficienter.',
  },
  {
    question: 'Is CDI al beschikbaar voor thuisgebruik?',
    answer: 'CDI is primair een industriele en onderzoekstechnologie. Begin 2026 zijn er enkele commerciele thuissystemen op de markt, maar deze zijn duurder en minder bewezen dan RO-systemen. Merken zoals Atlantech en enkele Chinese fabrikanten bieden compact CDI aan. De markt voor thuisgebruik is klein en producten zijn beperkt beschikbaar in Europa. Voor thuisgebruik is RO of UF nog altijd de bewezen en kosteneffectieve keuze.',
  },
  {
    question: 'Hoe werkt de regeneratiefase van CDI?',
    answer: 'CDI werkt in cycli. Tijdens de adsorptiefase worden ionen aangetrokken en vastgehouden op de elektroden terwijl gezuiverd water doorstroomt. Wanneer de elektroden verzadigd zijn, begint de regeneratiefase: de polariteit wordt omgekeerd of de spanning wordt verlaagd, waardoor ionen worden losgelaten in een kleine hoeveelheid concentraatstroom die wordt afgevoerd. Na regeneratie zijn de elektroden klaar voor de volgende adsorptiefase. De cyclustijd bedraagt doorgaans 5-30 minuten afhankelijk van het systeem en de ionenconcentratie.',
  },
];

export default function ElektrolyseCDIPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Filtertechnieken', item: 'https://waterfilterplatform.nl/filtertechnieken' },
              { '@type': 'ListItem', position: 3, name: 'Elektrolyse en CDI', item: 'https://waterfilterplatform.nl/filtertechnieken/elektrolyse-cdi' },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
          {
            '@type': 'Article',
            headline: 'Elektrolyse en CDI waterontzouting — hoe werkt capacitieve deionisatie?',
            description: 'CDI trekt ionen aan via elektroden zonder membraan. Laag energieverbruik vergeleken met RO. Beperkingen en toepassingen uitgelegd.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/filtertechnieken/elektrolyse-cdi',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/filtertechnieken">Filtertechnieken</Link> &rsaquo; Elektrolyse en CDI
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Elektrolyse en CDI waterontzouting — hoe werkt capacitieve deionisatie?
          </h1>
          <QuickAnswer answer="CDI (Capacitive Deionization) verwijdert ionen uit water door ze elektrochemisch aan te trekken naar geladen koolstofelektroden — geen membraan, geen hoge druk. Energiezuiniger dan RO bij lage saliniteit. Beperkingen: werkt niet op organische stoffen, bacterien of PFAS. Primair industriele technologie; thuistoepassingen zijn opkomend maar nog beperkt beschikbaar in Europa." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat is capacitieve deionisatie (CDI)?</h2>
          <p className="text-gray-700 mb-4">
            Capacitieve deionisatie (CDI) is een elektrochemische waterbehandelingstechnologie waarbij geladen ionen worden verwijderd door ze aan te trekken naar elektroden met tegengestelde lading. Het principe is vergelijkbaar met het opladen van een condensator: positieve ionen (Na+, Ca2+, Mg2+) worden aangetrokken naar de negatief geladen elektrode; negatieve ionen (Cl-, NO3-, SO42-) naar de positief geladen elektrode.
          </p>
          <p className="text-gray-700 mb-4">
            In tegenstelling tot omgekeerde osmose vereist CDI geen hoge druk en geen dicht membraan. Water stroomt vrij door de ruimte tussen twee elektroden terwijl ionen worden geadsorbeerd. De elektroden bestaan doorgaans uit geactiveerd koolstof (actief kool) of koolstofaerogel vanwege hun enorme specifieke oppervlakte (500-2000 m2/g), wat maximale ionenopname mogelijk maakt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Werkingsprincipe stap voor stap</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#005F8A] text-white flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-[#003F5C]">Adsorptiefase</p>
                <p className="text-gray-700 text-sm">Een gelijkspanning (1,0-1,5 V) wordt aangelegd op de elektroden. Water met opgeloste ionen stroomt door de elektrodecel. Positieve ionen migreren naar de negatieve elektrode (kathode); negatieve ionen naar de positieve elektrode (anode). Het doorgelaten water heeft een lagere ionenconcentratie (gedeioniseerd).</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#005F8A] text-white flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-[#003F5C]">Verzadiging</p>
                <p className="text-gray-700 text-sm">Na verloop van tijd raken de elektroden verzadigd met ionen. De doorslagcapaciteit is bereikt wanneer de uitstroom-TDS begint te stijgen. Dit signaleert dat regeneratie nodig is.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#005F8A] text-white flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-[#003F5C]">Regeneratiefase</p>
                <p className="text-gray-700 text-sm">De spanning wordt verlaagd of omgekeerd. Ionen worden losgelaten van de elektroden en meegevoerd met een kleine hoeveelheid concentraatwater dat naar het riool wordt afgevoerd. Na regeneratie zijn de elektroden klaar voor de volgende cyclus.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Beperkingen van CDI</h2>
          <div className="border border-orange-200 bg-orange-50 rounded-xl p-4 mb-4">
            <h3 className="font-semibold text-orange-800 mb-2">CDI verwijdert NIET</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Organische stoffen:</strong> pesticiden, geneesmiddelen, hormonen — ongeladen moleculen worden niet aangetrokken</li>
              <li><strong>PFAS:</strong> hydrofobe moleculen met beperkte ladingsinteractie worden niet effectief vastgehouden</li>
              <li><strong>Bacterien en virussen:</strong> micro-organismen zijn te groot en reageren niet op het elektrisch veld</li>
              <li><strong>Colloiden en zwevende deeltjes:</strong> vereisen mechanische filtratie</li>
              <li><strong>Silica (ongeladen):</strong> colloidaal siliciumdioxide passeert CDI volledig</li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            CDI moet voor drinkwater altijd worden gecombineerd met een pre-sedimentfilter, een UF-membraan voor micro-organismen en een actief koolfilter voor organische stoffen. Alleen dan levert het een vergelijkbaar veiligheidsniveau als RO.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">CDI vs omgekeerde osmose: vergelijking</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">CDI</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Omgekeerde osmose (RO)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Werkingsprincipe</td>
                  <td className="border border-gray-300 px-3 py-2">Elektroadsorptie op koolstof</td>
                  <td className="border border-gray-300 px-3 py-2">Membraanfiltratie onder druk</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Benodigde druk</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Geen (lage druk voldoende)</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">5-15 bar (pomp)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Ionenverwijdering</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">60-95% (laag-TDS water)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">90-99%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">PFAS verwijdering</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">95-99%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Bacterien/virussen</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">99,99%+</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Energieverbruik (laag-TDS)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">0,1-0,6 kWh/m3</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">0,5-1,5 kWh/m3</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Afvalwater</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">10-30% (concentraat)</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">40-75% (zonder pomp)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Thuisbeschikbaarheid</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Opkomend, beperkt</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Breed beschikbaar</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Kosten thuissysteem</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 500-1500 (beperkt aanbod)</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 300-900</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Status: opkomende technologie</h2>
          <p className="text-gray-700 mb-4">
            CDI is een actief onderzoeksgebied in waterbehandeling. Industriele toepassingen bestaan al in de voedingsindustrie, farmaceutische productie en waterhergebruik. Het potentieel voor grootschalige ontzilting van brak water (TDS 1000-5000 mg/L) is significant vanwege het lagere energieverbruik dan RO.
          </p>
          <p className="text-gray-700 mb-4">
            Voor de thuismarkt in Europa zijn CDI-systemen begin 2026 nog beperkt verkrijgbaar en duurder dan vergelijkbare RO-systemen. De technologie vereist bovendien aanvullende filtering voor organische stoffen en micro-organismen, wat de totale systeemkosten verhoogt. Verwachting is dat CDI de komende jaren breder beschikbaar en betaalbaarder wordt naarmate de productie schaalt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003F5C] cursor-pointer">{item.question}</summary>
                <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose: complete gids</Link></li>
            <li><Link href="/filtertechnieken/vergelijking" className="text-[#005F8A] hover:underline">Alle filtertechnieken vergelijken</Link></li>
            <li><Link href="/waterontharder" className="text-[#005F8A] hover:underline">Waterontharder: ionenwisseling voor kalk</Link></li>
            <li><Link href="/filtertechnieken" className="text-[#005F8A] hover:underline">Terug naar filtertechnieken overzicht</Link></li>
          </ul>
        </div>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
