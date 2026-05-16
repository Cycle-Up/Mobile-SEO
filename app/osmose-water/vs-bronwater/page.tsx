import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmose water vs bronwater: wat is beter voor thuis?',
  description: 'Osmosewater of bronwater (Spa, Evian, Volvic): vergelijking op mineralen, kosten, milieu, veiligheid en smaak. Wat is de beste keuze voor dagelijks gebruik thuis?',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/vs-bronwater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater beter dan bronwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op de meeste criteria wint osmosewater met remineralisatie: het is 20–50 keer goedkoper per liter, heeft een enorm lagere milieu-impact (geen plastic flessen), is net zo schoon of schoner, en heeft geen risico op BPA-lekkage of microplastics uit plastic flessen. Bronwater heeft één voordeel: het is handig mee te nemen en beschikbaar zonder installatie. Voor dagelijks thuisgebruik is osmosewater de betere keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de mineralen in bronwater versus osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bronwater zoals Spa Reine bevat circa 20–30 mg/L calcium, Evian circa 80 mg/L, en Volvic slechts 12 mg/L. TDS (totaal opgeloste stoffen) varieert van 30 mg/L (Volvic) tot 309 mg/L (Evian). Osmosewater bevat 5–20 mg/L TDS. Osmosewater met remineralisatiefilter heeft 80–200 mg/L TDS — vergelijkbaar met licht bronwater. Mineralen uit drinkwater dekken maar 10–20% van de dagbehoefte; voeding is de primaire bron.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost bronwater versus osmosewater per liter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bronwater in de supermarkt kost €0,30–1,50 per liter afhankelijk van merk en verpakking. Osmosewater (inclusief afschrijving filter en vervanging patronen) kost €0,02–0,05 per liter. Bij een gezin dat 4 liter per dag drinkt, scheelt dat €400–2.000 per jaar. Op 5 jaar tijd betaalt een osmosefilter zichzelf meerdere keren terug.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bronwater uit fles veiliger dan osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet per definitie. Bronwater heeft in de afgelopen jaren recalls gehad door bacteriologische besmetting. Plastic PET-flessen kunnen BPA en andere plasticizers afgeven, vooral bij warmte. Onderzoek heeft microplastics in flessenwater aangetoond. Osmosewater uit een goed onderhouden systeem met UV-nabehandeling is in de praktijk minstens even veilig als bronwater — en bevat geen microplastics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de milieu-impact van bronwater versus osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De milieu-impact van bronwater in plastic flessen is aanzienlijk: productie van een liter flessenwater vereist 100–200 keer meer energie dan leidingwater of osmosewater. Plastic flessen zijn zelfs bij recycling milieu-intensief. De CO₂-uitstoot per liter flessenwater is circa 100–300g CO₂-equivalent versus 0,5–2g voor osmosewater vanuit leidingwater. Voor ecobewuste huishoudens is osmosewater verreweg de betere keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Smaakt osmosewater anders dan bronwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puur osmosewater smaakt vlak of licht zuur door de lage pH (6,0–6,5) en afwezigheid van mineralen. Bronwater heeft een karakteristieke, iets minerale smaak afhankelijk van het merk. Osmosewater met remineralisatiefilter benadert de smaak van licht bronwater (Spa, Volvic). Wie gewend is aan Evian of Spa Blue met koolzuur zal een smaakverschil merken, maar de meeste mensen waarderen gefilterd osmosewater met remineralisatie positief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat bronwater fluoride en verwijdert osmose fluoride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bronwater bevat variabele hoeveelheden fluoride (0,1–0,5 mg/L voor de meeste merken; Evian circa 0,1 mg/L). Osmosefilters verwijderen 85–95% van fluoride. Wie fluoride als voordeel ziet voor tandgezondheid, kiest voor bronwater of voegt een remineralisatiefilter toe dat enig fluoride kan toevoegen. Wie fluoride wil vermijden (kinderen, hoog-fluoride gebieden), heeft een voordeel met osmose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bronwater beter voor baby\'s dan osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater met remineralisatie is voor de meeste baby\'s uitstekend geschikt en geeft meer controle over de samenstelling. Speciaal babywater (merkwater voor zuigelingen) heeft een lage mineraalinhoud vergelijkbaar met remineralisatieosmose. Bronwater met hoog natriumgehalte is ongeschikt voor babyvoeding. Controleer altijd het natriumgehalte op het label; voor babyvoeding geldt max 20 mg/L natrium. Osmosewater na goede remineralisatie zit doorgaans ruim onder deze grens.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmose water vs bronwater: wat is beter voor thuis?',
  description: 'Uitgebreide vergelijking van osmosewater en bronwater op mineralen, kosten, milieu, smaak en veiligheid.',
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
  url: 'https://waterfilterplatform.nl/osmose-water/vs-bronwater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseVsBronwaterPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Osmose water', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmose vs bronwater', item: 'https://waterfilterplatform.nl/osmose-water/vs-bronwater' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/osmose-water" className="hover:underline">Osmose water</a> &rsaquo;{' '}
          <span>Osmose vs bronwater</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmose water vs bronwater: wat is beter voor thuis?
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Osmosewater met remineralisatie is voor dagelijks thuisgebruik de winnaar: 20–50 keer goedkoper, 100 keer minder CO₂-uitstoot, geen microplastics, en vergelijkbare of betere zuiverheid dan bronwater. Bronwater wint op gemak en reizen. Koop geen flessenwater voor thuis.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is bronwater precies?
        </h2>
        <p className="text-gray-700 mb-4">
          Bronwater (in het Engels: &ldquo;spring water&rdquo;) is grondwater van een bekende bron dat zonder chemische behandeling wordt gebotteld. De naam van populaire merken zegt iets over de herkomst: Spa (Ardennen, België), Evian (Alpen, Frankrijk), Volvic (vulkanisch gebied Auvergne, Frankrijk). Elk merk heeft een consistente mineraalsamenstelling die wettelijk gecontroleerd en op het etiket vermeld wordt.
        </p>
        <p className="text-gray-700 mb-6">
          Tafelwater (zoals Sourcy) is daarentegen behandeld water dat aan normen voldoet maar geen beschermde bronnaam hoeft te hebben. Merkwater met koolzuur is bronwater met toegevoegd CO₂. Al deze categorieën worden in plastic of glas gebotteld — met de daarbijhorende milieukosten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mineralenvergelijking: bronwater vs osmose vs osmose+remineralisatie
        </h2>
        <p className="text-gray-700 mb-4">
          Mineralen in water zijn voor velen een reden om bronwater te kiezen. Laten we de feiten bekijken:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Waterbron</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ca (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mg (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Na (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">TDS (mg/L)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Spa Reine</td>
                <td className="border border-gray-300 px-3 py-2">3</td>
                <td className="border border-gray-300 px-3 py-2">1</td>
                <td className="border border-gray-300 px-3 py-2">3</td>
                <td className="border border-gray-300 px-3 py-2">~30</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Volvic</td>
                <td className="border border-gray-300 px-3 py-2">12</td>
                <td className="border border-gray-300 px-3 py-2">8</td>
                <td className="border border-gray-300 px-3 py-2">12</td>
                <td className="border border-gray-300 px-3 py-2">~130</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Evian</td>
                <td className="border border-gray-300 px-3 py-2">80</td>
                <td className="border border-gray-300 px-3 py-2">26</td>
                <td className="border border-gray-300 px-3 py-2">6</td>
                <td className="border border-gray-300 px-3 py-2">~309</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Osmosewater (puur)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2</td>
                <td className="border border-gray-300 px-3 py-2">&lt;1</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2</td>
                <td className="border border-gray-300 px-3 py-2">5–20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmose + remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">30–60</td>
                <td className="border border-gray-300 px-3 py-2">10–20</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5</td>
                <td className="border border-gray-300 px-3 py-2">150–300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">NL leidingwater</td>
                <td className="border border-gray-300 px-3 py-2">50–120</td>
                <td className="border border-gray-300 px-3 py-2">5–15</td>
                <td className="border border-gray-300 px-3 py-2">20–80</td>
                <td className="border border-gray-300 px-3 py-2">150–450</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Conclusie: Spa Reine bevat zelfs minder mineralen dan puur osmosewater. Evian bevat relatief veel calcium, maar de dagelijkse behoefte voor calcium (1.000 mg) dek je bij 2 liter Evian slechts voor 16% — de rest komt uit voeding. Osmose met remineralisatie levert vergelijkbare waarden als Volvic of gemiddeld bronwater, maar dan thuis aan de kraan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kostenvergelijking: de rekening over 5 jaar
        </h2>
        <p className="text-gray-700 mb-4">
          Kosten zijn een van de sterkste argumenten voor osmosewater. Een realistisch gezinsscenario (4 liter drinkwater per dag, 2 volwassenen + 2 kinderen):
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Watertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten/liter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten/jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten/5 jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bronwater (supermarkt)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€0,50–1,50</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€730–2.190</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">€3.650–10.950</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Leidingwater</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€0,001</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€1,50</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€7,50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosewater (incl. filter)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€0,02–0,05</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€29–73</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">€145–365 + €500 aanschaf</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Een osmosefilter van €500–700 betaalt zichzelf doorgaans in 3–12 maanden terug ten opzichte van bronwater. Over 5 jaar bespaart een gezin €3.000–10.000 op drinkwater door over te stappen van flessenwater naar osmose.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Milieu-impact: plastic fles vs osmose
        </h2>
        <p className="text-gray-700 mb-4">
          De milieu-impact van flessenwater is een van de sterkste argumenten om over te stappen. De feiten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>CO₂-uitstoot:</strong> 1 liter bronwater in PET-fles veroorzaakt circa 100–300g CO₂-equivalent (inclusief productie, transport, afval). Osmosewater vanuit leidingwater: 0,5–2g CO₂ per liter.</li>
          <li><strong>Plastic afval:</strong> Een gezin dat 4 liter per dag drinkt, gebruikt circa 1.460 liter per jaar — dat zijn 2.920 halve-liter flessen. Zelfs bij 100% recycling (in de praktijk lager) is dit enorm.</li>
          <li><strong>Microplastics:</strong> Onderzoek heeft aangetoond dat PET-flessenwater gemiddeld 100–300 microplastic deeltjes per liter bevat. Osmosewater bevat geen microplastics.</li>
          <li><strong>Transport:</strong> Bronwater wordt over honderden kilometers getransporteerd (Evian vanuit Alpen, Volvic vanuit Auvergne). Osmosewater gebruikt het bestaande leidingnetwerk.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor ecobewuste consumenten is de keuze voor osmosewater boven flessenwater een van de meest impactvolle thuisbeslissingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veiligheid en besmettingsrisico&apos;s
        </h2>
        <p className="text-gray-700 mb-4">
          Zowel bronwater als osmosewater is in de praktijk veilig, maar er zijn nuances:
        </p>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Risico&apos;s van flessenwater</h3>
            <p className="text-gray-700 text-sm">
              Er zijn meerdere recalls geweest van bronwater door bacteriologische besmetting (onder meer Evian en andere merken). BPA en plasticizers kunnen uit plastic flessen logen, met name bij warmte (auto, zon). Microplastics zijn aangetoond in vrijwel alle onderzochte merken flessenwater. Hitteschommelingen bij opslag en transport versnellen plastic-afgifte.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Veiligheid van osmosewater</h3>
            <p className="text-gray-700 text-sm">
              Een goed onderhouden osmosesysteem met UV-nabehandeling produceert water zonder bacteriën, virussen, zware metalen, PFAS, microplastics en pesticiden. Risico: bij verwaarloosd onderhoud (geen patroonwisseling, geen membraanvervanging) kan bacteriegroei in het systeem optreden. Regelmatig onderhoud (jaarlijks patronen, 2–3 jaar membraan) voorkomt dit. Zie ons artikel over{' '}
              <a href="/osmose-water/gezond" className="text-[#005F8A] underline">is osmosewater gezond</a> voor meer details.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Smaakcomparatief: osmose, bronwater en leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          Smaak is subjectief, maar er zijn objectieve verschillen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Bronwater:</strong> Heeft een karakteristieke, licht minerale smaak. Evian is voller door hoog calciumgehalte. Volvic is lichter. Spa Reine is bijna smakeloos door het lage TDS.</li>
          <li><strong>Puur osmosewater:</strong> Smaakt vlak en licht zuur (pH 6,0–6,5). Sommigen vinden het &ldquo;leeg&rdquo; aanvoelen. Geschikt voor koffie en thee omdat het de smaak van het brouwsel niet overstemt.</li>
          <li><strong>Osmose + remineralisatie:</strong> Benadert de smaak van licht bronwater. pH gecorrigeerd naar 7,0–7,5. De meest gewaardeerde optie voor drinkwater qua smaak.</li>
          <li><strong>Nederlands leidingwater:</strong> Smaak varieert per regio. Amsterdam-water is zacht en licht gechloreerd. Zuidoost-Nederland heeft harder, mineraler water. Smaak kan een reden zijn om te filteren.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Scoretabel: 7 criteria vergeleken
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Criterium</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Osmose + remin.</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bronwater (fles)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Leidingwater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kosten</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend (€0,02–0,05/L)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Slecht (€0,50–1,50/L)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend (€0,001/L)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Milieu</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Slecht (plastic, CO₂)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Zuiverheid</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Goed (risico BPA/plastic)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Goed (regiaal)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Mineralen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Goed (aanpasbaar)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Variabel</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Variabel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Smaak</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Goed (met remin.)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Goed</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Variabel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Gemak</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Goed (thuis)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend (overal)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Microplastics</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Aanwezig (PET-fles)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Laag</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kies je toch voor bronwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Bronwater heeft zijn plek. Situaties waarin flessenwater een betere keuze kan zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Onderweg en reizen:</strong> Osmosewater meenemen in een herbruikbare fles vanuit huis is uitstekend, maar onderweg kopen is handig.</li>
          <li><strong>Huurwoning of tijdelijke verblijfplaats:</strong> Als installatie van een osmosefilter niet mogelijk of niet zinvol is.</li>
          <li><strong>Noodsituaties:</strong> Bij calamiteiten met de waterleiding is flessenwater een directe oplossing.</li>
          <li><strong>Sparkling water:</strong> Bruisend bronwater is qua koolzuur lastig te evenaren thuis (SodaStream met osmosewater is een goed alternatief).</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor dagelijks thuisgebruik geldt: investeer eenmalig in een goed osmosefilter met remineralisatie en bespaar op kosten, milieu en plastic. Meer over de keuze van een osmosefilter leest u in ons overzicht van{' '}
          <a href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">osmosewater remineralisatie</a>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
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

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <a href="/osmose-water/gezond" className="text-[#005F8A] underline">is osmosewater gezond?</a>,{' '}
          <a href="/osmose-water/remineralisatie" className="text-[#005F8A] underline">osmosewater remineraliseren</a> en{' '}
          <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</a>.
        </p>
      </main>
    </>
  );
}
