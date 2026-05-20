import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter voor gezin: veilig drinkwater voor kinderen en ouders',
  description: 'Welk waterfilter past bij een gezin met kinderen? Osmosefilter verwijdert lood, nitraat en PFAS. Veiligheidsadvies voor gezinnen met baby en jong kind.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/gezin' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter is het beste voor een gezin met kinderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een gezin met jonge kinderen biedt een omgekeerde osmosefilter de meest complete bescherming. Het verwijdert nitraat (85-95%), lood (95-99%), PFAS (90%+) en bacterien. Kinderen zijn gevoeliger dan volwassenen voor verontreinigingen in drinkwater. Een koolstoffilter volstaat voor smaak- en geurverbetering maar verwijdert geen nitraat of lood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is leidingwater veilig voor jonge kinderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands leidingwater voldoet aan de Europese drinkwaternormen en is voor de meeste mensen veilig. Jonge kinderen en baby\'s zijn echter gevoeliger voor nitraat, lood en PFAS. In gebieden met intensieve landbouw (hoog nitraat) of oude leidingen (lood) is een osmosefilter een verstandige extra voorzorgsmaatregel voor gezinnen met baby\'s en kinderen onder de 3 jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft een waterfilter voor het gezin ook zin voor de wasmachine en douche?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een onderkraan osmosefilter filtert alleen het drinkwater aan de keuken. Voor de wasmachine, vaatwasser en douche heb je een waterontharder nodig als je last hebt van kalk (hard water). Een gecombineerde aanpak is het meest effectief: een waterontharder voor het hele huis plus een osmosefilter voor drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik of mijn leidingwater nitraat bevat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle Nederlandse drinkwaterbedrijven publiceren jaarlijkse kwaliteitsrapportages op hun website. U kunt uw postcode invullen om de nitraatwaarden in uw regio op te zoeken. In intensieve landbouwgebieden in Noord-Brabant, Gelderland en Limburg zijn de nitraatgehalten gemiddeld hoger. De WHO adviseert voor babyvoeding maximaal 10 mg/L nitraat; de EU-norm voor drinkwater is 50 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een osmosefilter voor een gezin per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter voor een gezin kost bij aanschaf 300 tot 800 euro. De jaarlijkse onderhoudskosten (patronen en membraanvervanging) bedragen 50 tot 120 euro per jaar. Bij gemiddeld gezinsverbruik van 4 liter gefilterd water per dag zijn de totaalkosten over 5 jaar vergelijkbaar met het kopen van gebotteld water. Het systeem gaat bij goed onderhoud 10 tot 15 jaar mee.',
      },
    },
  ],
};

export default function WaterfilterGezinPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Gezin', item: 'https://waterfilterplatform.nl/waterfilter/gezin' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Gezin</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor gezin: veilig drinkwater voor kinderen en ouders
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Gezinnen met jonge kinderen stellen hogere eisen aan drinkwaterkwaliteit. Kinderen zijn gevoeliger voor nitraat, lood en PFAS dan volwassenen. Een goed waterfilter biedt de hele familie zekerheid over schoon drinkwater.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom is drinkwaterkwaliteit belangrijk voor gezinnen?
        </h2>
        <p className="text-gray-700 mb-4">
          Nederlands leidingwater is van hoge kwaliteit en voldoet aan de strenge Europese normen. Toch zijn er stoffen die voor volwassenen geen probleem vormen maar voor jonge kinderen en baby&rsquo;s een grotere belasting kunnen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Lood:</strong> In woningen gebouwd v&oacute;&oacute;r 1960 kunnen loden leidingen aanwezig zijn. Lood heeft geen veilige ondergrens voor hersenontwikkeling bij kinderen.</li>
          <li><strong>Nitraat:</strong> In landbouwgebieden kan nitraat verhoogd zijn. De WHO adviseert maximaal 10 mg/L voor babyvoeding (EU-norm: 50 mg/L).</li>
          <li><strong>PFAS:</strong> Eeuwigdurende chemicali&euml;n die hormoonverstorend kunnen werken, met name bij kinderen in de groei.</li>
          <li><strong>Chloor:</strong> Onschadelijk bij normale concentraties maar kan smaak- en geuroverlast geven. Een koolstoffilter lost dit eenvoudig op.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welk waterfilter past bij een gezin?
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Nitraat</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Lood</th>
                <th className="border border-gray-300 px-3 py-2 text-left">PFAS</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Chloor</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Advies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter / filterkan</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Basis</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Osmosefilter (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Aanbevolen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Ultrafiltratie (UF)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Deels</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Deels</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter voor het gezin: kosten en installatie
        </h2>
        <p className="text-gray-700 mb-4">
          Een onderkraan osmosefilter wordt onder het aanrecht geplaatst en heeft een apart kraantje naast de bestaande mengkraan. De installatie duurt gemiddeld 1 tot 2 uur en vereist een aansluiting op de koude waterleiding en een aftakpunt voor het afvalwater (afvoer). Professionele installatie kost 100 tot 200 euro extra.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Aanschaf osmosefilter: &euro;300&ndash;800</li>
          <li>Jaarlijks onderhoud patronen: &euro;50&ndash;120</li>
          <li>Membraanvervanging (elke 2&ndash;3 jaar): &euro;50&ndash;100</li>
          <li>Watercapaciteit: 150&ndash;400 liter per dag (ruim voldoende voor een gezin)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tips voor gezinnen bij de aankoop van een waterfilter
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Controleer de nitraat- en loodwaarden in uw regio via de website van uw drinkwaterbedrijf</li>
          <li>Kies een osmosefilter met NSF/ANSI 58-certificering voor gegarandeerde prestaties</li>
          <li>Voeg een remineralisatiepatroon toe als u osmosewater ook als enige drinkbron voor baby&rsquo;s gebruikt</li>
          <li>Stel een vervangingsschema in voor filterpatronen &mdash; een verlopen filter kan bacterie&euml;n laten passeren</li>
          <li>Combineer met een waterontharder als uw water harder is dan 15 dH voor bescherming van apparaten</li>
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
          <Link href="/keuzehulp/baby-gezin" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp: waterfilter voor baby en gezin</h3>
            <p className="text-sm text-gray-600">Welk waterfilter is het veiligst voor een gezin met jonge kinderen?</p>
          </Link>
          <Link href="/beste-waterfilter/appartement" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Beste waterfilter voor appartement</h3>
            <p className="text-sm text-gray-600">Welk waterfilter past in een appartement zonder grote verbouwing?</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Hoe een osmosefilter nitraat, lood en PFAS uit drinkwater verwijdert.</p>
          </Link>
          <Link href="/waterfilter/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Lood in drinkwater filteren</h3>
            <p className="text-sm text-gray-600">Hoe verwijder je lood uit drinkwater en welk filter is het meest effectief?</p>
          </Link>
        </div>
      </section>

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Lees ook:{' '}
          <Link href="/waterfilter/baby" className="text-[#005F8A] underline">waterfilter voor baby</Link>,{' '}
          <Link href="/waterfilter/gezondheid" className="text-[#005F8A] underline">waterfilter en gezondheid</Link> en{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>.
        </p>
      </main>
    </>
  );
}
