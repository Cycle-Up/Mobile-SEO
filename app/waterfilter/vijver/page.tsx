import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Vijverfilter: de beste waterfilters voor tuin- en vijverwater',
  description: 'Een vijverfilter houdt het water helder, verwijdert ammoniak en nitriet, en beschermt vissen. Vergelijking van vijverfilters op pompcapaciteit, filtermedium.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/vijver' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk vijverfilter is het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het beste vijverfilter hangt af van uw vijver. Voor een vijver tot 10.000 liter is een extern filterbox of drukfilter ideaal. Voor vijvers met Koi (meer afval) is een beadfilter of een filterbox met verhoogde capaciteit aan te raden. Combineer altijd met een UVC-lamp als u problemen heeft met groen water door algen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe groot moet mijn vijverfilter zijn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vuistregel: pomp de volledige vijverinhoud minstens twee keer per uur rond. Bij een vijver van 5.000 liter heeft u een pomp nodig van minimaal 10.000 liter per uur. Bij Koi vergroot u de filtercapaciteit met een factor 2 tot 3, omdat Koi aanzienlijk meer ammoniak produceren dan goudvissen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt de stikstofcyclus in een vijver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vissen scheiden ammoniak (NH3) uit, giftig boven 0,1 mg/L. Bacterien van het geslacht Nitrosomonas zetten ammoniak om naar nitriet (NO2-), dat ook giftig is. Vervolgens zetten Nitrobacter-bacterien nitriet om naar nitraat (NO3-), dat aanzienlijk minder giftig is en door waterplanten wordt opgenomen. Een goed werkend biologisch filter herbergt deze bacteriekolonies en houdt de cyclus in evenwicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik tegen groen vijverwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Groen water wordt veroorzaakt door microscopische algen (zwevalgen). De meest effectieve aanpak is een UVC-lamp (ultraviolet clarifyer) ingebouwd op uw filter. UV-straling beschadigt de algencel zodat ze samenklonteren en door het filter worden afgevangen. Aanvullend helpen waterplanten (oksygenators), verminder overbemesting via visvoer en verwijder bladval tijdig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik mijn vijverfilter reinigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spoel het mechanisch filtergedeelte (sponzen, borstelmatten) maandelijks door met vijverwater, nooit met leidingwater. Chloor in leidingwater doodt de nuttige bacterien. Een beadfilter reinigt u via het zelfonderhoudende terugspoel-mechanisme. Biologische filtermedia vervangen is doorgaans niet nodig; de bacteriekolonie hervestigt zich snel als u slechts een deel per keer reinigt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een UVC-lamp nodig bij een vijverfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet verplicht, maar sterk aanbevolen bij zonnige vijvers en bij vijvers met vissen. Een UVC-lamp voorkomt groene algengroei effectief zonder chemicalieen. Vervang de UVC-lamp elk seizoen (na 8.000 tot 10.000 branduren), ook als hij nog brandt: het glas veroudert en de UV-doorlaat daalt sterk, waarna de lamp geen effect meer heeft op algen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik vijverwater filteren voor drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Vijverwater is biologisch actief water met E. coli, algen, zware metalen, parasitaire organismen en visafval. Het is niet geschikt als drinkwaterbron, ook niet na behandeling met een standaard huishoudelijk osmosefilter. Vijver- en drinkwaterfiltersystemen zijn volledig gescheiden systemen met totaal verschillende doelstellingen en normen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Vijverfilter: de beste waterfilters voor tuin- en vijverwater',
  description: 'Een vijverfilter houdt het water helder, verwijdert ammoniak en nitriet, en beschermt vissen. Vergelijking van vijverfilters op pompcapaciteit, filtermedium.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/vijver',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function VijverfilterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Vijverfilter', item: 'https://waterfilterplatform.nl/waterfilter/vijver' },
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
          <span>Vijverfilter</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Vijverfilter: de beste waterfilters voor tuin- en vijverwater
          </h1>
          <p className="text-gray-700 text-lg">
            Een vijverfilter is geen drinkwaterfilter. Het is een biologisch systeem dat nuttige bacterien herbergt
            en de stikstofcyclus in evenwicht houdt. Welk vijverfilter past bij uw vijver en vissen?
          </p>
        </div>

        <QuickAnswer answer="Een vijverfilter werkt biologisch via nuttige bacterien die ammoniak omzetten naar nitraat. Kies filtercapaciteit op basis van twee keer de vijverinhoud per uur. Voor vijvers met Koi heeft u twee tot drie keer meer capaciteit nodig. UVC-lamp voorkomt groen water. Vijverwater is nooit geschikt als drinkwater." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vijverfilter vs. drinkwaterfilter: fundamenteel verschil
        </h2>
        <p className="text-gray-700 mb-4">
          Een drinkwaterfilter (zoals een osmosefilter) verwijdert zoveel mogelijk deeltjes en opgeloste stoffen uit water om het zo zuiver mogelijk te maken. Een vijverfilter werkt op precies het tegengestelde principe: het kweekt en beschermt nuttige bacteriekolonies die giftige stikstofverbindingen biologisch afbreken.
        </p>
        <p className="text-gray-700 mb-6">
          Wie een osmosefilter in een vijver plaatst, zou alle nuttige bacterien doden en de stikstofcyclus verstoren. Vijver- en drinkwaterfiltratietechnologie zijn niet uitwisselbaar.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De stikstofcyclus: waarom uw filter biologisch moet werken
        </h2>
        <p className="text-gray-700 mb-4">
          Vissen produceren voortdurend ammoniak (NH&#8323;) als afvalproduct. Boven een concentratie van 0,1 mg/L is ammoniak al giftig voor vissen. Een goed vijverfilter maakt gebruik van de stikstofcyclus:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Stap 1 &mdash; Ammoniakvorming:</strong> Vissen scheiden ammoniak (NH&#8323;) uit via kieuwen en ontlasting. Ammoniak is giftig boven 0,1 mg/L en veroorzaakt kieuwen- en weefselschade.
          </li>
          <li>
            <strong>Stap 2 &mdash; Nitrificatie door Nitrosomonas:</strong> Nitrificerende bacterien van het geslacht Nitrosomonas zetten NH&#8323; om naar nitriet (NO&#8322;&#8315;). Nitriet is ook giftig, zelfs bij lage concentraties.
          </li>
          <li>
            <strong>Stap 3 &mdash; Omzetting door Nitrobacter:</strong> Nitrobacter-bacterien zetten NO&#8322;&#8315; om naar nitraat (NO&#8323;&#8315;), dat aanzienlijk minder giftig is. Waterplanten nemen nitraat op als voedingsstof, waarmee de cyclus sluit.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Een nieuw filter heeft vier tot zes weken nodig om voldoende bacteriekolonies op te bouwen. Gedurende deze "inloopperiode" moet u de visbezetting laag houden en de waterkwaliteit frequent meten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking van vijverfiltertypen
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Werking</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt voor</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Extern filterbox</td>
                <td className="border border-gray-300 px-3 py-2">Mechanisch + biologisch</td>
                <td className="border border-gray-300 px-3 py-2">Vijver tot 10.000 L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Drukfilter</td>
                <td className="border border-gray-300 px-3 py-2">Gesloten, inline, makkelijk reinigen</td>
                <td className="border border-gray-300 px-3 py-2">Vijver tot 20.000 L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100&ndash;400</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Beadfilter</td>
                <td className="border border-gray-300 px-3 py-2">Kunststofkorrels, zelfonderhoudend</td>
                <td className="border border-gray-300 px-3 py-2">Grote vijver tot 50.000 L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">UVC-filter</td>
                <td className="border border-gray-300 px-3 py-2">Algenbehandeling, groen water</td>
                <td className="border border-gray-300 px-3 py-2">Alle vijvers</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30&ndash;150</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Skimmer</td>
                <td className="border border-gray-300 px-3 py-2">Drijvend vuil verwijderen</td>
                <td className="border border-gray-300 px-3 py-2">Aanvulling op filter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Pompcapaciteit berekenen
        </h2>
        <p className="text-gray-700 mb-4">
          De basisregel: de volledige vijverinhoud moet minimaal twee keer per uur door het filter worden gepompt. Voor een vijver van 5.000 liter heeft u dus een pomp nodig met een capaciteit van minimaal 10.000 liter per uur.
        </p>
        <p className="text-gray-700 mb-4">
          Let op: de opgegeven pompcapaciteit op de verpakking geldt op nul meter hoogte. Bij een opvoerhoogte van 1 meter daalt de capaciteit met 20 tot 30 procent. Koop altijd een pomp met marge.
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <p className="text-[#003F5C] font-semibold mb-2">Berekeningsvoorbeeld</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>Vijverinhoud: 8.000 liter</li>
            <li>Benodigd debiet: 8.000 x 2 = 16.000 L/uur</li>
            <li>Opvoerhoogte 1 m: 16.000 / 0,75 = ca. 21.000 L/uur pompspecificatie nodig</li>
            <li>Bij Koi: verdubbel dit naar ca. 42.000 L/uur filtercapaciteit</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          UVC-lamp: effectief tegen groen water
        </h2>
        <p className="text-gray-700 mb-4">
          Groen vijverwater wordt veroorzaakt door zwevalgen (microscopische eencellige algen) die bij veel zon snel vermenigvuldigen. Een UVC-lamp (ultraviolet clarifyer) maakt gebruik van UV-C-straling om de algencel te beschadigen, waarna de algen samenklonteren en door het mechanisch filtergedeelte worden afgevangen.
        </p>
        <p className="text-gray-700 mb-6">
          Belangrijk: vervang de UVC-lamp elk jaar aan het begin van het seizoen, ook als hij nog brandt. Het kwartsglas van de lamp veroudert en de UV-doorlaat daalt na circa 8.000 branduren sterk, waarna de lamp geen enkel effect meer heeft op algengroei. Een nieuwe lamp kost doorgaans &euro;15 tot &euro;40.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Goudvissen vs. Koi: filtercapaciteit aanpassen
        </h2>
        <p className="text-gray-700 mb-4">
          Koi zijn grotere vissen met een hogere stofwisseling dan goudvissen. Ze produceren twee tot drie keer meer ammoniak per kilogram lichaamsgewicht. Bij een Koi-vijver moet u de filtercapaciteit met een factor twee tot drie verhogen ten opzichte van wat strikt noodzakelijk zou zijn op basis van de vijverinhoud alleen.
        </p>
        <p className="text-gray-700 mb-6">
          Koi-vijvers zijn doorgaans ook dieper (minimaal 1,5 meter) en groter, wat grotere filterinstallaties vereist. Beadfilters zijn populair bij Koi-vijvers vanwege hun hoge capaciteit en zelfonderhoudend spoelsysteem.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vijverwater en drinkwater: altijd gescheiden houden
        </h2>
        <p className="text-gray-700 mb-6">
          Vijverwater bevat E. coli, algen, visparasieten, ammoniak, zware metalen en talloze andere organismen. Het is absoluut niet geschikt als drinkwaterbron, ook niet na behandeling met een huishoudelijk filter. Drinkwater voor de vijver bijvullen kan gewoon met leidingwater; laat het water desgewenst een dag staan zodat chloor kan verdampen.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over vijverfilters</h2>
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
          <Link href="/waterfilter/voor-aquarium" className="text-[#005F8A] underline">aquariumfilter vergelijken</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose voor drinkwater</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilter types</Link>.
        </p>
      </main>
    </>
  );
}
