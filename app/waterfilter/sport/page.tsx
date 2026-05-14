import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter voor Sport: Osmosewater & Sportdranken',
  description: 'Waterfilter voor sporters: osmosewater als basis voor isotone sportdranken, draagbare filters voor outdoor sport en prestatievermogen door betere hydratatie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/sport' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater beter voor sportprestaties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is een schone basis — vrij van chloor, lood en PFAS. Voor optimale sportprestaties voeg je elektrolyten toe (natrium, kalium, magnesium). Pure osmosewater zonder elektrolyten is bij intensieve inspanning niet ideaal: het verdunt de bloedelectrolytwaarden sneller. Een isotoon recept met osmosewater + elektrolyten overtreft commerciële sportdranken qua zuiverheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk draagbaar waterfilter is het beste voor hardlopen of fietsen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor korte afstanden (stadsloop, fietspaden) is een gefilterde bidon (actief kool) voldoende. Voor lange afstanden of buitenlande tochten: een UV-pen (SteriPen) doodt bacteriën en virussen in 60 seconden, of een Sawyer Squeeze-filter voor 99,99% bacteriënverwijdering. Voor bergritten met onzeker water is een GRAYL-fles (combinatiefilter) ideaal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe maak ik zelf een isotone sportdrank met osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basis recept voor 1 liter: 1 liter osmosewater + 40-60 g koolhydraten (bv. druivensuiker of maltodextrine) + 0,5-0,7 g natriumchloride (zout) + optioneel 200 mg magnesiumcitraat en 200 mg kaliumchloride. Osmotische waarde vergelijkbaar met bloed (285-295 mOsm/kg). Goedkoper en purer dan commercieel product.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan chloor in kraanwater sportprestaties negatief beïnvloeden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kleine hoeveelheden chloor in leidingwater (0,1-0,3 mg/L) hebben geen bewezen direct effect op prestaties. Maar bij zwemmers en intensieve sporters die grote volumes water drinken, kan chloor de darmflora beïnvloeden. Osmosewater geeft een schone hydratatie zonder bijsmaak of smaakmasking van elektrolyten.',
      },
    },
  ],
};

export default function WaterfilterSportPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Sport', item: 'https://waterfilterplatform.nl/waterfilter/sport' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Sport</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor Sport: Betere Hydratatie & Prestaties
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Water is de meest kritische voedingsstof voor sporters. Osmosewater biedt een schone basis voor optimale hydratatie en zelfgemaakte sportdranken — zonder additieven, conserveringsmiddelen of ongewenste stoffen.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom waterkwaliteit relevant is voor sporters
        </h2>
        <p className="text-gray-700 mb-4">
          Een sporter van 70 kg verliest bij intensieve training 1–2 liter zweet per uur. Bij een loopwedstrijd van 2 uur drink je 1,5–3 liter water. Dat water bevat ook wat je erin gestopt hebt: chloor, mineralen, en eventueel verontreinigingen. Osmosewater als basis geeft je controle over precies wat je hydratatie bevat.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Thuis: osmosewater als sportdrank-basis
        </h2>
        <p className="text-gray-700 mb-4">
          Commerciële isotone sportdranken bevatten kleur- en conserveringsmiddelen, kunstmatige smaken en zijn duur (€1–3 per fles). Met osmosewater maak je zelf een kwalitatief superieure sportdrank voor een fractie van de prijs.
        </p>

        <div className="bg-[#E0F2FE] rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-2">Zelf isotone sportdrank recept (1 liter)</h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• 1 liter osmosewater</li>
            <li>• 40–60 g koolhydraten (druivensuiker, maltodextrine of agave)</li>
            <li>• 0,5–0,7 g keukenzout (natriumchloride)</li>
            <li>• 200 mg magnesiumcitraat (bij lang durende inspanning)</li>
            <li>• Citroensap naar smaak</li>
          </ul>
          <p className="text-gray-600 text-xs mt-2">Osmotische waarde: ~285 mOsm/kg (isotoon). Kostprijs: ~€0,15 per liter.</p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderweg: draagbare filters voor outdoor sport
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Gewicht</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Verwijdert</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Geschikt voor</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Gefilterde bidon</td>
                <td className="border border-gray-300 px-3 py-2">250–400 g</td>
                <td className="border border-gray-300 px-3 py-2">Chloor, smaak</td>
                <td className="border border-gray-300 px-3 py-2">Stadsloop, fietsen</td>
                <td className="border border-gray-300 px-3 py-2">€20–40</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Sawyer Squeeze</td>
                <td className="border border-gray-300 px-3 py-2">85 g</td>
                <td className="border border-gray-300 px-3 py-2">Bacteriën (99,99%)</td>
                <td className="border border-gray-300 px-3 py-2">Trail, bikepacking</td>
                <td className="border border-gray-300 px-3 py-2">€35–50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">UV-pen (SteriPen)</td>
                <td className="border border-gray-300 px-3 py-2">120–200 g</td>
                <td className="border border-gray-300 px-3 py-2">Bacteriën + virussen</td>
                <td className="border border-gray-300 px-3 py-2">Reizen, expedities</td>
                <td className="border border-gray-300 px-3 py-2">€50–100</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">GRAYL UltraPress</td>
                <td className="border border-gray-300 px-3 py-2">410 g</td>
                <td className="border border-gray-300 px-3 py-2">Bacteriën, virussen, chemicaliën</td>
                <td className="border border-gray-300 px-3 py-2">Bergtrektochten, ultralopen</td>
                <td className="border border-gray-300 px-3 py-2">€80–120</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Thuis een osmosefilter voor dagelijkse sporthydratatie
        </h2>
        <p className="text-gray-700 mb-4">
          Een <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter</a> thuis geeft dagelijks schoon water voor je bidon, sportdranken en herstelshakes. Kosten: €0,01–0,03 per liter — versus €1–3 voor commerciële sportdranken.
        </p>
        <p className="text-gray-700 mb-6">
          Lees ook: <a href="/kennisbank/waterfilter-sport-fitness" className="text-[#005F8A] underline">waterfilter voor sport en fitness: uitgebreide gids</a>.
        </p>

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

        <CTABanner />
      </main>
    </>
  );
}
