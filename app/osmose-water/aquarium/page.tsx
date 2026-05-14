import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosewater voor Aquarium: GH, KH en TDS Instellen',
  description: 'Osmosewater voor aquarium: hoe stel je GH, KH en TDS in voor zoetwatervis, garnalen en koraaltank? Remineraliseren met Salty Shrimp, Seachem en zeewater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/aquarium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom osmosewater gebruiken voor een aquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands leidingwater is te hard (10–20 °dH) en te hoog in TDS voor gevoelige zoetwatervis, garnalen en zeker voor een zeeaquarium. Osmosewater begint bij TDS ~5 mg/L, zodat je zelf de exacte watersamenstelling per diersoort kunt opbouwen — GH, KH, pH en specifieke mineralen nauwkeurig doseren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe stel ik GH en KH in met osmosewater voor garnalen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor Caridina-garnalen (Crystal Red, Bee-garnalen): GH 4–6, KH 0–2, pH 5,8–6,8. Gebruik een specifiek garnalenremineralisator (Salty Shrimp Bee Shrimp Mineral GH+). Voor Neocaridina-garnalen: GH 6–10, KH 3–8, pH 7,0–7,8. Gebruik een GH/KH+ remineralisator. Meet met een TDS-meter na toevoegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik osmosewater direct in mijn aquarium doen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, niet zonder remineralisatie. Puur osmosewater (TDS ~5, pH ~6,5, GH 0, KH 0) heeft geen buffercapaciteit — de pH kan sterk schommelen, wat fataal is voor vis en garnalen. Remineraliseer altijd voor gebruik en verwissel nooit meer dan 25% van het aquariumwater per keer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke hoeveelheid osmosewater heb ik nodig voor een aquarium van 200 liter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een wekelijkse waterwissel van 20% heb je 40 liter per week nodig. Een osmosesysteem van 75 GPD (280 liter/dag) kan dit gemakkelijk bijhouden. Houd rekening met afvalwater: bij een standaard systeem zonder boosterpomp produceer je 1 liter osmosewater per 3–4 liter afvalwater.',
      },
    },
  ],
};

export default function OsmoseWaterAquariumPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Aquarium', item: 'https://waterfilterplatform.nl/osmose-water/aquarium' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</a> &rsaquo;{' '}
          <span>Aquarium</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmosewater voor Aquarium: GH, KH en TDS Instellen
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Voor gevoelige zoetwatervis, garnalen en zeeaquaria is osmosewater de beste waterbasis. Je start met een schone lei — TDS ~5 mg/L — en bouwt zelf de exacte watersamenstelling die jouw dieren nodig hebben.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom leidingwater niet volstaat
        </h2>
        <p className="text-gray-700 mb-4">
          Nederlands leidingwater heeft een TDS van 150–450 mg/L, een pH van 7,5–8,5 en een waterhardheid van 10–25 °dH. Dat is prima voor goudvissen en cichliden, maar voor:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Caridina-garnalen</strong> — willen TDS 80–150, KH 0–2, pH 5,8–6,8</li>
          <li><strong>Discus, Altum-scalar</strong> — willen TDS &lt;150, GH 2–6, pH 6,0–7,0</li>
          <li><strong>Zeeaquarium (FOWLR/rif)</strong> — willen TDS &lt;10 als basiswater voor kunstmatig zeewater (zout toevoegen)</li>
          <li><strong>Zoetwaterplantenbak (high tech)</strong> — hoge KH buffert CO2-toevoeging weg, waardoor pH-daling niet werkt</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Parameters per aquariumtype
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Aquariumtype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">TDS (mg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">GH (°dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">KH (°dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">pH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Caridina garnalen</td>
                <td className="border border-gray-300 px-3 py-2">80–150</td>
                <td className="border border-gray-300 px-3 py-2">4–6</td>
                <td className="border border-gray-300 px-3 py-2">0–2</td>
                <td className="border border-gray-300 px-3 py-2">5,8–6,8</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Neocaridina garnalen</td>
                <td className="border border-gray-300 px-3 py-2">150–250</td>
                <td className="border border-gray-300 px-3 py-2">6–10</td>
                <td className="border border-gray-300 px-3 py-2">3–8</td>
                <td className="border border-gray-300 px-3 py-2">7,0–7,8</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Discus / scalar</td>
                <td className="border border-gray-300 px-3 py-2">80–150</td>
                <td className="border border-gray-300 px-3 py-2">2–6</td>
                <td className="border border-gray-300 px-3 py-2">1–4</td>
                <td className="border border-gray-300 px-3 py-2">6,0–7,0</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Zeeaquarium (basis)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10</td>
                <td className="border border-gray-300 px-3 py-2">—</td>
                <td className="border border-gray-300 px-3 py-2">—</td>
                <td className="border border-gray-300 px-3 py-2">—</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Plantenbak (CO2)</td>
                <td className="border border-gray-300 px-3 py-2">100–200</td>
                <td className="border border-gray-300 px-3 py-2">4–8</td>
                <td className="border border-gray-300 px-3 py-2">2–5</td>
                <td className="border border-gray-300 px-3 py-2">6,5–7,2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Remineraliseren: hoe en met wat?
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Voor garnalen</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Caridina:</strong> Salty Shrimp Bee Shrimp Mineral GH+ — verhoogt GH zonder KH</li>
          <li><strong>Neocaridina:</strong> Salty Shrimp GH/KH+ — verhoogt beide parameters</li>
          <li>Doseer per liter osmosewater tot gewenste TDS-waarde bereikt is</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Voor zoetwater vis en planten</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Seachem Equilibrium:</strong> verhoogt GH (calcium, magnesium, kalium) zonder natrium</li>
          <li><strong>Seachem Alkalinity:</strong> verhoogt KH specifiek voor CO2-aquaria</li>
          <li>Alternatief: mix osmosewater 50/50 met leidingwater voor gemiddelde parameters</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Voor zeeaquarium</h3>
        <p className="text-gray-700 mb-4">
          Voeg aquariumzout (Reef Crystals, Instant Ocean, Red Sea Salt) toe aan osmosewater tot soortelijk gewicht van 1,025–1,026 (35 ppt). Osmosewater als basis is essentieel voor een zeeaquarium — leidingwater met nitraat en fosfaat introduceert direct algenproblemen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welk osmosesysteem voor aquarium?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor een aquarium heb je geen groot systeem nodig. Een 75 GPD (280 liter/dag) of 100 GPD (380 liter/dag) systeem volstaat voor de meeste hobbykwekers. Let op:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Kies een systeem zonder remineralisatiefilter — jij voegt zelf de juiste mineralen toe</li>
          <li>Een DI-hars (deionisatie) als 6e fase geeft TDS van 0 voor de meest gevoelige toepassingen</li>
          <li>Sla osmosewater op in een schone jerrycan of reservoir — nooit in metalen containers</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bekijk ons aanbod van <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilters</a> — compacte systemen die ook uitstekend geschikt zijn voor aquariumgebruik.
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

        <p className="text-gray-600 text-sm">
          Lees ook: <a href="/kennisbank/osmose-water-aquarium" className="text-[#005F8A] underline">Osmosewater voor aquarium: uitgebreide gids</a> en <a href="/kennisbank/osmose-water-aquarium-zoetwater" className="text-[#005F8A] underline">zoetwater aquarium met osmosewater</a>.
        </p>
      </main>
    </>
  );
}
