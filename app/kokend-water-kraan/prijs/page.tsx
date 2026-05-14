import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend Water Kraan Prijs 2026: Kosten & Vergelijking',
  description: 'Wat kost een kokend water kraan? Vergelijk aanschafprijs, installatie, boiler en onderhoudskosten van Quooker, Grohe, Zip HydroTap en 4-in-1 osmosekranen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/prijs' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een kokend water kraan gemiddeld?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een kokend water kraan kost inclusief boiler en installatie €800–3.000. Budget-modellen (InSinkErator, Aqua Optima) starten rond €500–800. Mid-range (Grohe Red, Zip HydroTap compact) kost €1.000–1.800. Premium (Quooker Fusion, 4-in-1 met osmose) ligt op €1.500–2.500. Jaarlijkse onderhouds- en filterkosten: €50–150.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de jaarlijkse kosten van een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De boiler van een kokend water kraan verbruikt 5–20 Watt stand-by. Bij een elektriciteitsprijs van €0,35/kWh kost een 10W boiler €30/jaar in stand-by verbruik. Filtervervanging kost €30–80/jaar. Totaal jaarkosten: €60–150/jaar na aanschaf — vergelijkbaar met gemiddeld 200–400 liter flessenwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een Quooker duurder dan alternatieven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een Quooker is het meest premium merk: aanschafprijs €1.800–2.500 plus installatie. Alternatieven als Grohe Red (€1.200–1.800) of een 4-in-1 kraan met osmosefilter (€1.500–2.000) bieden vergelijkbare functionaliteit voor minder. De 4-in-1 kraan voegt ook een osmosefilter toe voor gefilterd drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost installatie van een kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Installatiekosten bedragen doorgaans €150–300 voor een standaard installateur. Dit omvat aansluiting op koud water, afvoer voor condenswater, en elektrische aansluiting (geaard stopcontact onder aanrecht). Bij een 4-in-1 kraan met osmosefilter rekenen installateurs €200–400 vanwege het extra filterpakket.',
      },
    },
  ],
};

export default function KokendWaterKraanPrijsPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Prijs', item: 'https://waterfilterplatform.nl/kokend-water-kraan/prijs' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</a> &rsaquo;{' '}
          <span>Prijs</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Kokend Water Kraan Prijs 2026: Complete Kostenvergelijking
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Een kokend water kraan is een investering. We zetten alle kosten op een rij — aanschaf, installatie, energie en onderhoud — zodat je een weloverwogen keuze kunt maken.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanschafprijzen per categorie
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Categorie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Voorbeeldmodellen</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs (kraan + boiler)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kenmerken</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Budget</td>
                <td className="border border-gray-300 px-3 py-2">InSinkErator, Aqua Optima</td>
                <td className="border border-gray-300 px-3 py-2">€400–700</td>
                <td className="border border-gray-300 px-3 py-2">Basis kokend water, simpele filter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Mid-range</td>
                <td className="border border-gray-300 px-3 py-2">Grohe Red Mono, Zip HydroTap</td>
                <td className="border border-gray-300 px-3 py-2">€1.000–1.800</td>
                <td className="border border-gray-300 px-3 py-2">Design, betere filter, koud</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Premium</td>
                <td className="border border-gray-300 px-3 py-2">Quooker Fusion, Grohe Red Duo</td>
                <td className="border border-gray-300 px-3 py-2">€1.500–2.500</td>
                <td className="border border-gray-300 px-3 py-2">Pro design, CUBE bruisend water</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">4-in-1 osmose</td>
                <td className="border border-gray-300 px-3 py-2">4-in-1 kraan met osmose</td>
                <td className="border border-gray-300 px-3 py-2">€1.500–2.200</td>
                <td className="border border-gray-300 px-3 py-2">Kokend + osmosefilter + koud</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Totale eigendomskosten (TCO) over 10 jaar
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Kostenpost</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Budget</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Mid-range</th>
                <th className="border border-gray-300 px-3 py-2 text-left">4-in-1 osmose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Aanschaf</td>
                <td className="border border-gray-300 px-3 py-2">€550</td>
                <td className="border border-gray-300 px-3 py-2">€1.400</td>
                <td className="border border-gray-300 px-3 py-2">€1.800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Installatie</td>
                <td className="border border-gray-300 px-3 py-2">€150</td>
                <td className="border border-gray-300 px-3 py-2">€200</td>
                <td className="border border-gray-300 px-3 py-2">€300</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Energie (10 jaar)</td>
                <td className="border border-gray-300 px-3 py-2">€350</td>
                <td className="border border-gray-300 px-3 py-2">€300</td>
                <td className="border border-gray-300 px-3 py-2">€250</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Filters (10 jaar)</td>
                <td className="border border-gray-300 px-3 py-2">€400</td>
                <td className="border border-gray-300 px-3 py-2">€700</td>
                <td className="border border-gray-300 px-3 py-2">€600</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Besparing flessenwater</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">−€3.000</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">−€3.000</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">−€4.500</td>
              </tr>
              <tr className="bg-[#E0F2FE] font-semibold">
                <td className="border border-gray-300 px-3 py-2">TCO netto</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">−€1.550</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">−€400</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">−€1.550</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-6">*Besparing flessenwater berekend bij 2L/dag à €0,60 voor reguliere kraan, €1,00 voor gefilterd water bij 4-in-1.</p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom een 4-in-1 kraan extra waarde biedt
        </h2>
        <p className="text-gray-700 mb-4">
          Een 4-in-1 kokend water kraan combineert kokend water met een geïntegreerd <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</a>. Naast kokend water heb je direct gefilterd drinkwater — vrij van kalk, chloor, lood en PFAS. Dit vervangt ook de behoefte aan een apart osmosefilter onder het aanrecht.
        </p>
        <p className="text-gray-700 mb-6">
          Bekijk ons artikel over <a href="/kokend-water-kraan/4-in-1" className="text-[#005F8A] underline">4-in-1 kokend water kranen</a> voor een uitgebreide vergelijking.
        </p>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over prijs</h2>
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
