import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Outdoor Waterfilter: Wandelen, Camping & Reizen',
  description: 'Beste outdoor waterfilters voor wandelen, camping en reizen: LifeStraw, Sawyer, Berkey Travel, UV-pen. Filtermethoden vergeleken op gewicht, snelheid en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/outdoor' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk outdoor waterfilter is het beste voor wandelen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor dagtochten en lichte wandelingen: Sawyer Squeeze (113 gram, 99,99999% bacteriën) of LifeStraw Personal (56 gram). Voor meerdaagse tochten: Katadyn BeFree (63 gram) of Sawyer Mini. Voor grote groepen: Sawyer Squeeze met grote pouch. UV-pen (SteriPen) is snel maar werkt niet in troebel water. Keuze hangt af van water-turbiditeit, gewicht en gebruiksgemak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke ziektes worden voorkomen met een outdoor waterfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Goede hollow fibre filters (Sawyer, Katadyn) verwijderen: Giardia (>99,9%), Cryptosporidium (>99,9%), E. coli, Salmonella en andere bacteriën (>99,9999%). Ze verwijderen GEEN virussen (Hepatitis A, Norovirus). In Europa zijn virussen in bergwater zeldzaam; buiten Europa (Azië, Afrika, Latijns-Amerika) combineer een filter met waterontsmettingstabletten of UV voor volledige bescherming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een LifeStraw of Sawyer gebruiken in het buitenland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar met beperkingen. Hollow fibre filters verwijderen bacteriën en protozoa maar GEEN virussen. In risicolanden (Azië, Afrika, delen van Latijns-Amerika) zijn virussen een reëel risico. Gebruik dan een combinatie: filter + UV-pen of filter + waterontsmettingstabletten (jodium of chloortabletten). UV-pen (SteriPen Ultra) is sneller en effectief tegen virussen maar werkt alleen in helder water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaan outdoor waterfilters mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sawyer Squeeze: fabrikant claimt levenslang (1 miljoen liter) mits goed onderhouden. LifeStraw Personal: 1.000 liter. Katadyn BeFree: 1.000 liter. UV-pen (SteriPen): tot 8.000 behandelingen met vervangbare batterij/lamp. Hollow fibre filters moeten periodiek worden doorgespoeld om te voorkomen dat ze verstoppen. Nooit laten bevriezen.',
      },
    },
  ],
};

export default function WaterfilterOutdoorPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Outdoor', item: 'https://waterfilterplatform.nl/waterfilter/outdoor' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Outdoor</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Outdoor Waterfilter: Wandelen, Camping & Reizen
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Of je nu wandelt in de Alpen of reist door Azië — de juiste waterfilter kan letterlijk je leven redden. We vergelijken de populairste opties.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Outdoor filtertypen vergeleken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Gewicht</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bacteriën</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Virussen</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Hollow fibre (Sawyer)</td>
                <td className="border border-gray-300 px-3 py-2">113 g</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">99,9999%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2">€35–50</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">UV-pen (SteriPen)</td>
                <td className="border border-gray-300 px-3 py-2">90 g</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">99,9999%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2">€80–130</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">LifeStraw</td>
                <td className="border border-gray-300 px-3 py-2">56 g</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">99,9999%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2">€25–40</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Zwaartekrachtsfilter (Berkey)</td>
                <td className="border border-gray-300 px-3 py-2">3–6 kg</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">99,9999%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (Black carbon)</td>
                <td className="border border-gray-300 px-3 py-2">€200–400</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Waterontsmettingstabletten</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10 g</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">90–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2">€5–15</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Europa vs. buiten Europa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Europa & Noord-Amerika</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Hollow fibre filter volstaat</li>
              <li>✓ Virussen zeldzaam in bergwater</li>
              <li>✓ Sawyer Squeeze of Katadyn BeFree</li>
              <li>→ Kosten: €35–70</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Azië, Afrika, Latijns-Amerika</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>⚠ Filter + UV combinatie nodig</li>
              <li>⚠ Virussen zijn reëel risico</li>
              <li>✓ Sawyer + SteriPen UV</li>
              <li>→ Kosten: €115–180</li>
            </ul>
          </div>
        </div>

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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/waterfilter/reisfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Reisfilter water</h3>
            <p className="text-sm text-gray-600">Beste reisfilters voor kamperen, trekken en reizen: LifeStraw, Sawyer en Katadyn vergeleken.</p>
          </a>
          <a href="/waterfilter/camper" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor camper</h3>
            <p className="text-sm text-gray-600">Compacte waterfilteroplossingen speciaal voor gebruik in campers en caravans.</p>
          </a>
          <a href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie</h3>
            <p className="text-sm text-gray-600">Hoe UV-sterilisatie werkt en wanneer het de juiste keuze is voor veilig drinkwater.</p>
          </a>
          <a href="/waterfilter/sediment" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Sedimentfilter</h3>
            <p className="text-sm text-gray-600">Wanneer een sedimentfilter nodig is, micronklassen en toepassing als voorfilter.</p>
          </a>
        </div>
      </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Meer: <a href="/waterfilter/camper" className="text-[#005F8A] underline">waterfilter voor camper</a> en <a href="/waterfilter" className="text-[#005F8A] underline">alle waterfiltersoorten</a>.
        </p>
      </main>
    </>
  );
}
