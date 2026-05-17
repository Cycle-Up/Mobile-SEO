import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Beste waterfilter voor een studentenkamer — zonder installatie | WaterfilterPlatform',
  description: 'Waterfilter voor huurkamer zonder toestemming of installatie. Beste opties: filterkan Brita of ZeroWater, aanrechtmodel en reisfilterfles.',
  alternates: { canonical: 'https://waterfilterplatform.nl/beste-waterfilter/studentenkamer' },
  openGraph: {
    title: 'Beste waterfilter voor een studentenkamer — zonder installatie',
    description: 'Waterfilter voor huurkamer zonder toestemming of installatie. Beste opties: filterkan, aanrechtmodel en reisfilterfles.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter kan ik gebruiken zonder toestemming van de verhuurder?',
    answer: 'Filterkannen (Brita, ZeroWater, Aquaphor) vereisen geen installatie en zijn altijd toegestaan. Aanrechtmodellen die via een adapter op de kraan worden geschroefd zijn ook zonder toestemming te gebruiken en zijn niet permanent. Zodra u de adapter verwijdert, is er geen spoor van installatie. Waterfilters die een boorgat of aansluiting op de waterleiding vereisen (onderkastfilters, osmosefilters) vragen altijd toestemming van de verhuurder.',
  },
  {
    question: 'Wat is het verschil tussen Brita en ZeroWater voor dagelijks gebruik?',
    answer: 'Brita filtert voornamelijk chloor, kalk en zware metalen via actief kool en ionenwisselingshars. De smaak verbetert merkbaar. ZeroWater gebruikt een vijflaags systeem inclusief fijne ionenwisseling dat de TDS naar 000 mg/L brengt (vrijwel gedestilleerd water). ZeroWater filtert meer maar filters verslijten sneller in hard-watergebieden (elke 4-8 weken in Limburg/Zeeland vs 4-8 weken bij Brita). ZeroWater is duurder in gebruik. Voor dagelijkse smaakverbetering op een studentenkamer is Brita doorgaans voldoende en voordeliger.',
  },
  {
    question: 'Hoe voorkom ik bacteriegroei in een filterkan?',
    answer: 'Bacteriegroei in een filterkan is een reeel risico bij verkeerd gebruik. Regels: (1) Bewaar gefilterd water maximaal 24-48 uur in de koelkast, niet op kamertemperatuur. (2) Vervang het filter op tijd, ook als u de kan weinig gebruikt; een oud filter kan zelf een bron van verontreiniging worden. (3) Was de kan wekelijks met warm water en afwasmiddel. (4) Spoel een nieuw filter altijd eerst grondig door (gooi de eerste 2-3 kannen weg). Bacteriegroei bij fleswater of filterkannen bij warmere temperaturen is aangetoond in onderzoek.',
  },
  {
    question: 'Is een reisfilterfles geschikt als dagelijks waterfilter thuis?',
    answer: 'Ja, een reisfilterfles zoals de LifeStraw Go of GRAYL Geopress is ook thuis bruikbaar. U vult de fles met kraanwater en filtert direct bij het drinken. Praktisch voordeel: u neemt hem mee naar college, de sportschool of werk. Nadeel: de capaciteit is beperkt (0,5-1 liter per vulbeurt) en filters moeten regelmatig worden vervangen (EUR 15-30 per filter, elke 300-1000 liter). Voor uitsluitend thuis gebruik is een filterkan goedkoper; voor gecombineerd thuis en onderweg gebruik is een filterfles handig.',
  },
  {
    question: 'Kan ik een aanrechtfilter op een studentenkamerkraan plaatsen?',
    answer: 'De meeste aanrechtfilters worden via een universele adapter op de kraanuitloop geschroefd. Draaikranen (zwenkkranen) en recente pull-out sproeikranen zijn niet altijd compatibel. Controleer voor aankoop of de fabrikant een adapter levert voor uw kraantype. Leveranciers als PUR en Philips leveren diverse adaptersets. Als de kraan niet compatibel is, is een filterkan de veiligste keuze.',
  },
];

export default function StudentenkamerPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Beste waterfilter', item: 'https://waterfilterplatform.nl/beste-waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Studentenkamer', item: 'https://waterfilterplatform.nl/beste-waterfilter/studentenkamer' },
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
            headline: 'Beste waterfilter voor een studentenkamer — zonder installatie',
            description: 'Waterfilter voor huurkamer zonder toestemming of installatie. Beste opties: filterkan, aanrechtmodel en reisfilterfles.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/beste-waterfilter/studentenkamer',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/beste-waterfilter">Beste waterfilter</Link> &rsaquo; Studentenkamer
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Beste waterfilter voor een studentenkamer — zonder installatie
          </h1>
          <QuickAnswer answer="Voor een studentenkamer is een filterkan (Brita Flow of ZeroWater) de meest praktische keuze: geen installatie, geen toestemming nodig, jaarlijkse kosten EUR 40-70. Een aanrechtmodel op een kraanconnector biedt hogere capaciteit zonder boring. Een reisfilterfles is ideaal als u ook onderweg gefilterd water wilt." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Situatie: huurkamer, beperkt budget, geen toestemming nodig</h2>
          <p className="text-gray-700 mb-4">
            Als student heeft u te maken met specifieke beperkingen: de kamer is gehuurd (geen vaste installaties toegestaan zonder toestemming), het budget is beperkt, en u wilt iets dat makkelijk meeneembaar is bij een verhuizing. De goede nieuws: voor de meeste behoeften is een eenvoudig systeem volledig voldoende.
          </p>
          <p className="text-gray-700 mb-4">
            Nederlands leidingwater is schoon en veilig. De voornaamste reden om te filteren is smaakverbetering (chloorlucht, lichte kalkachtige smaak) en het wegnemen van twijfel over oudere leidingen in studentenhuizen. Voor een diepgaande PFAS-analyse of onthardering van het volledige huis zijn grotere systemen nodig — die zijn voor een studentenkamer onnodig.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Optie 1: filterkan — beste keuze voor dagelijks gebruik</h2>
          <p className="text-gray-700 mb-4">
            Een filterkan is de meest voor de hand liggende keuze voor een studentenkamer. U vult de bovenkamer met kraanwater; het water filtert langzaam naar beneden door een actief koolfilter en/of ionenwisselingsfilter.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Brita Marella (aanbevolen)</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4 text-sm">
            <li>Prijs: EUR 25-35 (inclusief 1 filter)</li>
            <li>Capaciteit: 2,4 liter (1,4 liter filter, 1 liter reservoir)</li>
            <li>Filter: Brita MAXTRA+ (EUR 5-7 per stuk, elke 4-8 weken)</li>
            <li>Jaarlijkse filterkosten: EUR 35-60</li>
            <li>Filtert: chloor, kalk, sommige zware metalen</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">ZeroWater 10-Cup (hogere kwaliteit)</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4 text-sm">
            <li>Prijs: EUR 40-55 (inclusief 1 filter + TDS-meter)</li>
            <li>Capaciteit: 2,35 liter</li>
            <li>Filter: vijflaags inclusief fijne ionenwisseling (EUR 12-16 per stuk)</li>
            <li>Jaarlijkse filterkosten: EUR 50-120 (sterk afhankelijk van waterhardheid)</li>
            <li>Filtert: chloor, kalk, zware metalen, brengt TDS naar 000 ppm</li>
            <li>Nadeel: in harde watergebieden (Limburg, Zeeland) slijten filters snel</li>
          </ul>

          <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-r-xl px-5 py-3 text-sm text-gray-700">
            <strong>Tip:</strong> Bewaar gefilterd water altijd in de koelkast en gebruik het binnen 24 uur. Op kamertemperatuur kunnen bacterien groeien bij een vol filter.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Optie 2: aanrechtmodel zonder boringen</h2>
          <p className="text-gray-700 mb-4">
            Een aanrechtfilter wordt via een verloopstuk (adapter) op de kraanuitloop geschroefd. Geen installateur, geen boorgaten, geen permanente aanpassing. Een schakelaar wisselt tussen gefilterd en ongefilterd water. Nadeel: neemt ruimte op het aanrecht in en werkt niet op alle krantypen.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
            <li><strong>Prijs:</strong> EUR 50-100 (Philips, PUR, Instapure)</li>
            <li><strong>Capaciteit:</strong> 1-3 liter per minuut (veel hoger dan filterkan)</li>
            <li><strong>Filtervervanging:</strong> elke 3-6 maanden (EUR 15-25 per filter)</li>
            <li><strong>Jaarlijkse kosten:</strong> EUR 30-50</li>
            <li><strong>Filtert:</strong> chloor, geur, sommige zware metalen (vergelijkbaar met filterkan)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Optie 3: reisfilterfles — voor thuis en onderweg</h2>
          <p className="text-gray-700 mb-4">
            Een filterfles combineert drinkfles en filter. U vult hem met kraanwater en drinkt direct gefilterd water, thuis of onderweg. Handig voor studenten die veel buiten zijn of reizen.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
            <li><strong>LifeStraw Go 2-stage (EUR 40-55):</strong> UF-membraan + actief kool, verwijdert bacterien en protozoa. Niet voor virussen in de basisversie. Geschikt voor dagelijks gebruik bij veilig leidingwater.</li>
            <li><strong>Brita Active fles (EUR 15-25):</strong> actief koolfilter in een drinkfles, verbetert smaak. Geen microbiologische bescherming. Ideaal voor smaakverbetering onderweg.</li>
            <li><strong>GRAYL Geopress (EUR 75-95):</strong> persfilter, verwijdert bacterien, virussen en protozoa. Overkill voor Nederlands leidingwater maar uitstekend voor reizen.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Kostenvergelijking op 1 jaar</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Optie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Aanschaf</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Jaarlijks</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Totaal jaar 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Brita Marella</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 30</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 40</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 70</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">ZeroWater</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 50</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 70</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 120</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Aanrechtmodel</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 70</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 35</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 105</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Brita-fles</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 20</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 30</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 50</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            <li><Link href="/filterkan" className="text-[#005F8A] hover:underline">Filterkan vergelijking: Brita, ZeroWater en meer</Link></li>
            <li><Link href="/beste-waterfilter/budget-onder-100" className="text-[#005F8A] hover:underline">Beste waterfilter onder EUR 100</Link></li>
            <li><Link href="/keuzehulp/huurwoning" className="text-[#005F8A] hover:underline">Waterfilter voor huurwoning</Link></li>
            <li><Link href="/beste-waterfilter" className="text-[#005F8A] hover:underline">Terug naar beste waterfilter overzicht</Link></li>
          </ul>
        </div>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
