import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterionisator kopen: werking, merken en is het de investering waard?',
  description:
    'Een waterionisator maakt alkalisch water via elektrolyse. Merken als Kangen, Tyent en Life Ionizer vergeleken op prijs (€500-3.000), werking en wetenschappelijk bewijs.',
  alternates: { canonical: 'https://waterfilterplatform.nl/alkalisch-water/ionisator' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe werkt een waterionisator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterionisator gebruikt elektrolyse: een elektrische stroom wordt door water geleid via platen van titanium en platina. Water wordt gesplitst in een alkalische stroom (bij de negatieve kathode, rijk aan OH--ionen) en een zure stroom (bij de positieve anode, rijk aan H+-ionen). Het alkalische water wordt voor drinken gebruikt (pH 8-11), het zure water voor reiniging en desinfectie (pH 3-6). Meer platen geven een bredere pH-range en stabieler water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterionisator is het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op basis van technische specificaties scoort de Tyent UCE-13 (13 platen, pH 1,7-12,5) hoog. De Life Ionizer MXL-15 heeft het hoogste platenaantal (15 platen). Kangen K8 is populair maar fors duurder door het MLM-distributiemodel. Voor een gemiddelde gebruiker biedt de Bawell Platinum een goede prijs-kwaliteitverhouding. Bedenk dat wetenschappelijk bewijs voor gezondheidsvoordelen beperkt is, ongeacht het merk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kangen water de moeite waard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kangen-apparaten van Enagic zijn kwalitatief goed (8 platen, duurzame bouw, Japan) maar extreem geprijsd (3.000-4.000 euro) door het multi-level marketing (MLM) distributiesysteem. Concurrerende ionisatoren met vergelijkbare of betere specs zijn beschikbaar voor 1.500-2.500 euro minder. Kangen-verkopers maken vaak gezondheidsaanspraken die niet wetenschappelijk onderbouwd zijn. De technologie werkt, maar u betaalt voor het MLM-model.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een ionisator en een alkalische filterpitcher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een ionisator gebruikt elektrolyse (stroom nodig, 150-400W) en bereikt pH 8-11 of hoger. Prijs: 500-4.000 euro. Een alkalische filterpitcher verhoogt de pH passief via minerale media (calcium, magnesium, bicarbonaat) zonder elektriciteit. pH bereik: 8-9,5. Prijs: 30-80 euro. Voor milde alkaliniteit (pH 8-9) is een pitcher veel kosteneffectiever. Ionisatoren zijn nodig als u pH boven 10 wilt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe hoog moet de pH van alkalisch water zijn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor dagelijks drinken wordt pH 8-9,5 aanbevolen door voorstanders. Voor het inactiveren van pepsine bij zuurreflux suggereert laboratoriumonderzoek pH 8,8 als drempelwaarde. Hogere pH (10-11) heeft geen aangetoonde extra gezondheidsvoordelen en is onnodig voor normaal gebruik. De Nederlandse drinkwaternorm staat pH tot 9,5 toe. Extremen boven pH 10 kunnen bij langdurig gebruik theoretisch de maagbarriere beinvloeden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe onderhoud ik een waterionisator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maandelijks: reinig de elektrolyse-cel door zure waterinstellingen te gebruiken of een citroenzuuroplossing door het systeem te laten lopen. Dit verwijdert kalkafzetting op de platen. Jaarlijks: vervang het voorfilter (actief kool of sedimentfilter) elke 6-12 maanden afhankelijk van waterverbruik en lokale waterkwaliteit. Controleer platen op kalkaanslag. In harde-watergebieden (Nederland heeft gemiddeld hard water) is frequenter reinigen noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een ionisator combineren met een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar er is een vereiste: osmosewater heeft een zeer lage TDS (opgeloste stoffen, 5-50 mg/L) en weinig mineralen. Ionisatoren werken via elektrolyse van opgeloste ionen en zijn niet effectief bij zeer laag TDS. Als u osmosewater wilt ioniseren, moet u eerst mineralen toevoegen via een remineralisatiecartridge (TDS naar 100-200 mg/L), daarna pas ioniseren. Eenvoudiger: voeg alleen een alkalische remineralisatiecartridge toe aan uw osmosesysteem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het zure water van een ionisator goed voor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het zure water (pH 3-6) dat als bijproduct van elektrolyse ontstaat, heeft praktische toepassingen: desinfectie van oppervlakken (pH 2,5-3,5 heeft antimicrobieel effect), reiniging van groenten en fruit, als toner voor de huid (pH 4-5,5 is vergelijkbaar met de natuurlijke huid-pH), en spoelen van snijwonden. Het mag niet gedronken worden. Hypochloorwater (electrolyted water, EW) wordt in professionele settings gebruikt als desinfectant.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterionisator kopen: werking, merken en is het de investering waard?',
  description:
    'Vergelijking van waterionisatoren: Kangen, Tyent, Life Ionizer en alkalische pitcherfilters. Werking, prijs en wetenschappelijk bewijs beoordeeld.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/alkalisch-water/ionisator',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterionisatorPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://waterfilterplatform.nl',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Alkalisch water',
                item: 'https://waterfilterplatform.nl/alkalisch-water',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Waterionisator',
                item: 'https://waterfilterplatform.nl/alkalisch-water/ionisator',
              },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/alkalisch-water" className="hover:underline">Alkalisch water</Link> &rsaquo;{' '}
          <span>Waterionisator</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterionisator kopen: werking, merken en is het de investering waard?
          </h1>
          <p className="text-gray-700 text-lg">
            Een waterionisator maakt alkalisch water via elektrolyse en kost tussen &euro;500 en &euro;4.000. Merken als Kangen, Tyent en Life Ionizer worden gepromoot met vergaande gezondheidsclaims. Wat werkt echt, en wat betaalt u te veel?
          </p>
        </div>

        <QuickAnswer answer="Waterionisatoren gebruiken elektrolyse om water te splitsen in alkalisch drinkwater (pH 8-11) en zuur reinigingswater. Prijs varieert van 500 euro (budget) tot 4.000 euro (Kangen via MLM). Alkalische pitcherfilters bereiken pH 8-9,5 voor 30-80 euro. Wetenschappelijk bewijs voor gezondheidsvoordelen is beperkt. Voor puur water kiest u osmose." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een waterionisator?
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterionisator is een elektrisch apparaat dat kraanwater via elektrolyse splitst in twee stromen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Alkalisch water</strong> (kathode, negatieve pool): rijk aan hydroxide-ionen (OH&minus;), pH 8&ndash;11. Dit is het drinkwater.</li>
          <li><strong>Zuur water</strong> (anode, positieve pool): rijk aan waterstofionen (H&plus;), pH 3&ndash;6. Bruikbaar voor reiniging en als huidtoner.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Het apparaat bevat meerdere titanium-platen bedekt met platina. Hoe meer platen, hoe groter het oppervlak voor elektrolyse en hoe extremer de pH-waarden die bereikt kunnen worden. Ionisatoren worden doorgaans aangesloten op de kraan en bevatten een voorfilter (actieve kool of sediment) dat chloor en deeltjes verwijdert voordat het water de elektrolysekamer binnenkomt.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Belangrijk:</strong> ionisatoren filteren geen verontreinigingen. PFAS, lood, nitraat en andere chemische stoffen blijven aanwezig in het water. Alleen de pH verandert. Wilt u puur water, kies dan voor een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Technische specificaties
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Kenmerk</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Budget ionisator</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Premium ionisator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Platen</td>
                <td className="border border-gray-300 px-3 py-2">5&ndash;7 platen</td>
                <td className="border border-gray-300 px-3 py-2">9&ndash;15 platen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">pH bereik</td>
                <td className="border border-gray-300 px-3 py-2">4,5&ndash;10,0</td>
                <td className="border border-gray-300 px-3 py-2">1,7&ndash;13,0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Vermogen</td>
                <td className="border border-gray-300 px-3 py-2">150&ndash;200W</td>
                <td className="border border-gray-300 px-3 py-2">200&ndash;400W</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Doorvoer</td>
                <td className="border border-gray-300 px-3 py-2">1,5&ndash;2,5 L/min</td>
                <td className="border border-gray-300 px-3 py-2">2,5&ndash;4,0 L/min</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filterlevensduur</td>
                <td className="border border-gray-300 px-3 py-2">3.000&ndash;5.000 L</td>
                <td className="border border-gray-300 px-3 py-2">6.000&ndash;12.000 L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Merken vergelijking
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Merk</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Herkomst</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Platen</th>
                <th className="border border-gray-300 px-3 py-2 text-left">pH-bereik</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Enagic Kangen K8</td>
                <td className="border border-gray-300 px-3 py-2">Japan</td>
                <td className="border border-gray-300 px-3 py-2">8</td>
                <td className="border border-gray-300 px-3 py-2">4,5&ndash;11,5</td>
                <td className="border border-gray-300 px-3 py-2">&euro;3.000&ndash;4.000</td>
                <td className="border border-gray-300 px-3 py-2">MLM-model, hoge marge</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Tyent UCE-13</td>
                <td className="border border-gray-300 px-3 py-2">Korea/VS</td>
                <td className="border border-gray-300 px-3 py-2">13</td>
                <td className="border border-gray-300 px-3 py-2">1,7&ndash;12,5</td>
                <td className="border border-gray-300 px-3 py-2">&euro;2.000&ndash;3.000</td>
                <td className="border border-gray-300 px-3 py-2">Top prestaties</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Life Ionizer MXL-15</td>
                <td className="border border-gray-300 px-3 py-2">VS</td>
                <td className="border border-gray-300 px-3 py-2">15</td>
                <td className="border border-gray-300 px-3 py-2">2,0&ndash;13,0</td>
                <td className="border border-gray-300 px-3 py-2">&euro;2.000&ndash;3.000</td>
                <td className="border border-gray-300 px-3 py-2">Hoogste platenaantal</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Bawell Platinum</td>
                <td className="border border-gray-300 px-3 py-2">China/VS</td>
                <td className="border border-gray-300 px-3 py-2">9</td>
                <td className="border border-gray-300 px-3 py-2">3,5&ndash;10,5</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;800</td>
                <td className="border border-gray-300 px-3 py-2">Budget optie</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Alkalische pitcher</td>
                <td className="border border-gray-300 px-3 py-2">Diversen</td>
                <td className="border border-gray-300 px-3 py-2">Geen elektrolyse</td>
                <td className="border border-gray-300 px-3 py-2">8,0&ndash;9,5</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30&ndash;80</td>
                <td className="border border-gray-300 px-3 py-2">Geen stroom, mineralen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kangen water: waarom zo duur?
        </h2>
        <p className="text-gray-700 mb-4">
          Enagic, de fabrikant van Kangen-apparaten, gebruikt een multi-level marketing (MLM) distributiemodel. Dat betekent dat een groot deel van de verkoopprijs (&euro;3.000&ndash;4.000) naar commissies voor verkopers en hun upline gaat, niet naar productkwaliteit. Technisch vergelijkbare ionisatoren van andere merken zijn beschikbaar voor &euro;1.500&ndash;2.500 minder.
        </p>
        <p className="text-gray-700 mb-6">
          Kangen-verkopers maken regelmatig gezondheidsclaims die niet wetenschappelijk onderbouwd zijn. De apparaten zijn kwalitatief solide (Japaans maakwerk, 8 platen, duurzame bouw), maar de prijs-kwaliteitverhouding is sterk verslechterd door het MLM-verdienmodel.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Alternatief: alkalische remineralisatiecartridge
        </h2>
        <p className="text-gray-700 mb-4">
          Als u alkalisch water wilt met een pH van 7,5&ndash;8,5, is er een veel goedkoper alternatief: een alkalische remineralisatiecartridge als 5e trap bij een osmosesysteem. Kosten: &euro;15&ndash;35 per jaar voor de cartridge. U krijgt puur osmosewater (PFAS, lood, nitraat verwijderd) met een aangename alkalische pH en toegevoegde mineralen (calcium, magnesium).
        </p>
        <p className="text-gray-700 mb-6">
          Dit is de verstandigste combinatie voor de meeste huishoudens: veilig gefilterd water plus instelbare pH. Lees onze{' '}
          <Link href="/alkalisch-water/vs-osmose" className="text-[#005F8A] underline">vergelijking van alkalisch water en osmosewater</Link>{' '}
          voor een volledig kostenoverzicht.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud van een ionisator
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland heeft relatief hard water (hoge calcium- en magnesiumconcentratie). Dit versnelt de vorming van kalkafzetting op de elektrolyseplaten, wat de efficiëntie verlaagt.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Maandelijks:</strong> reinig de elektrolysekamer met citroenzuuroplossing (1&ndash;2 eetlepels citroenzuur in 1 liter water) door het systeem te laten circuleren.</li>
          <li><strong>Halfjaarlijks:</strong> vervang het voorfilter (actief kool / sediment). Controleer de filtervervangingsindicator van uw apparaat.</li>
          <li><strong>Jaarlijks:</strong> inspecteer aansluitingen en slangen op lekkages. Controleer platen op zware kalkaanslag.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bekijk ook de gezondheidsclaims nader op onze pagina{' '}
          <Link href="/alkalisch-water/gezondheid" className="text-[#005F8A] underline">alkalisch water en gezondheid</Link>{' '}
          voordat u een aankoopbeslissing maakt.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterionisatoren
          </h2>
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
          <Link href="/alkalisch-water" className="text-[#005F8A] underline">wat is alkalisch water</Link>,{' '}
          <Link href="/alkalisch-water/gezondheid" className="text-[#005F8A] underline">alkalisch water en gezondheid</Link>,{' '}
          <Link href="/alkalisch-water/vs-osmose" className="text-[#005F8A] underline">alkalisch water vs osmosewater</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
