import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterontharder Kosten 2026: Aanschaf, Installatie & Zout',
  description: 'Complete kostenberekening waterontharder: aanschaf €500-1500, installatie €150-300, zout €60-150/jaar. TCO over 10 jaar en vergelijking met osmosefilter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/kosten' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een waterontharder aanschaffen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een kwalitatieve waterontharder kost €500–1.500 bij aanschaf. Budget-modellen (Kinetico eenheidssystemen, no-name) starten rond €400–700. Mid-range merken (BWT, Harvey, EcoWater) kosten €700–1.200. Premium (Kinetico, Culligan) liggen op €1.200–1.800. Inclusief installatie kom je op €650–2.100 totaal voor aanschaf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost zout voor een waterontharder per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gemiddeld huishouden (4 personen, 15 °dH waterhard water) verbruikt 50–100 kg regeneratiezout per jaar. Tablettzout kost €10–20 per 25 kg zak bij bouwmarkten. Jaarkosten zout: €20–80 bij volumegestuurde regeneratie, €60–150 bij tijdgestuurde regeneratie (minder efficiënt).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een waterontharder de moeite waard financieel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Over 10 jaar bespaar je met een waterontharder gemiddeld €1.500–3.000 op kalkschade (apparaten, CV, leidingen), wasmiddelverbruik (-20%), energieverbruik CV-ketel (-8%) en verlengde levensduur wasmachine/vaatwasser. Een waterontharder van €900 inclusief installatie heeft een terugverdientijd van 3–5 jaar bij hard water (>15 °dH).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost onderhoud van een waterontharder per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jaarlijks onderhoud door een specialist kost €80–150 afhankelijk van het merk. Dit omvat controle van de regeneratiecyclus, harsbed, inlaatklep en zoutverbruiksinstelling. Bij de meeste merken is dit elke 1–2 jaar voldoende. Service-abonnementen (bij Harvey, BWT) combineren dit met 24-uurs storingsdienst voor €10–20/maand.',
      },
    },
  ],
};

export default function WaterOntharderKostenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Kosten', item: 'https://waterfilterplatform.nl/waterontharder/kosten' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterontharder" className="hover:underline">Waterontharder</a> &rsaquo;{' '}
          <span>Kosten</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterontharder Kosten 2026: Complete Berekening
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Een waterontharder is een investering. We zetten alle kosten op een rij — van aanschaf en installatie tot zout en onderhoud — zodat je precies weet wat je te wachten staat.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kostenopbouw overzicht
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Kostenpost</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Budget</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mid-range</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Aanschaf apparaat</td>
                <td className="border border-gray-300 px-3 py-2">€400–700</td>
                <td className="border border-gray-300 px-3 py-2">€700–1.100</td>
                <td className="border border-gray-300 px-3 py-2">€1.200–1.800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Installatie</td>
                <td className="border border-gray-300 px-3 py-2">€150–200</td>
                <td className="border border-gray-300 px-3 py-2">€200–250</td>
                <td className="border border-gray-300 px-3 py-2">€250–350</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Zout per jaar</td>
                <td className="border border-gray-300 px-3 py-2">€40–100</td>
                <td className="border border-gray-300 px-3 py-2">€40–80</td>
                <td className="border border-gray-300 px-3 py-2">€30–60</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Onderhoud per jaar</td>
                <td className="border border-gray-300 px-3 py-2">€80–120</td>
                <td className="border border-gray-300 px-3 py-2">€100–150</td>
                <td className="border border-gray-300 px-3 py-2">€120–180</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Stroom per jaar</td>
                <td className="border border-gray-300 px-3 py-2">€20–40</td>
                <td className="border border-gray-300 px-3 py-2">€15–30</td>
                <td className="border border-gray-300 px-3 py-2">€10–20</td>
              </tr>
              <tr className="bg-[#E0F2FE] font-semibold">
                <td className="border border-gray-300 px-3 py-2">Totaal 10 jaar</td>
                <td className="border border-gray-300 px-3 py-2">€2.000–3.600</td>
                <td className="border border-gray-300 px-3 py-2">€2.300–3.800</td>
                <td className="border border-gray-300 px-3 py-2">€3.100–5.100</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Besparingen die de kosten terugverdienen
        </h2>
        <p className="text-gray-700 mb-4">
          Hard water kost geld — ook zonder waterontharder. De jaarlijkse verborgen kosten van hard water voor een gemiddeld huishouden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Extra wasmiddel:</strong> €50–80/jaar (20–30% meer wasmiddel bij hard water)</li>
          <li><strong>Kalkverwijdering CV:</strong> €100–200 elke 3–5 jaar</li>
          <li><strong>Energie CV-ketel:</strong> €80–150/jaar extra bij 15 °dH (8–10% hoger verbruik door kalklaag)</li>
          <li><strong>Vervroegde vervanging apparaten:</strong> wasmachine, vaatwasser, boiler — 20–30% kortere levensduur</li>
          <li><strong>Antikalk-producten:</strong> €30–60/jaar (citroenzuur, antikalk tabs)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Totale kalkkosten: €300–600 per jaar bij hard water (&gt;15 °dH). Een waterontharder verdient zichzelf terug in 3–5 jaar.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter als goedkoper alternatief
        </h2>
        <p className="text-gray-700 mb-4">
          Voor huishoudens die primair schoon drinkwater willen (niet het hele huishouden ontharden), is een <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter</a> een kosteneffectiever alternatief:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Aanschaf: €300–600 eenmalig</li>
          <li>Filters per jaar: €50–80</li>
          <li>Geen zout, geen maandelijkse kosten</li>
          <li>Verwijdert ook chloor, lood en PFAS (waterontharder doet dit niet)</li>
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

        <CTABanner />

        <p className="text-gray-600 text-sm mt-6">
          Lees ook: <a href="/waterontharder/prijs" className="text-[#005F8A] underline">prijsvergelijking waterontharders</a> en <a href="/waterontharder/huren" className="text-[#005F8A] underline">huren vs. kopen</a>.
        </p>
      </main>
    </>
  );
}
