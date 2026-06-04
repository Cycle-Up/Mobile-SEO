import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Energie- en waterverbruik per wateroplossing (2026)",
  description: "Indicatief overzicht van het energie- en waterverbruik van wateroplossingen: van osmose-afvalwater tot kokend kraan-standby.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/energie-en-waterverbruik' },
  openGraph: { title: "Energie- en waterverbruik per wateroplossing (2026)", description: "Indicatief overzicht van het energie- en waterverbruik van wateroplossingen: van osmose-afvalwater tot kokend kraan-standby.", url: 'https://waterfilterplatform.nl/uitleg/energie-en-waterverbruik', type: 'article', locale: 'nl_NL' },
};

export default function EnergieEnWaterverbruikExplainer() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Energie- en waterverbruik per wateroplossing", description: "Indicatief overzicht van het energie- en waterverbruik van wateroplossingen: van osmose-afvalwater tot kokend kraan-standby.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/energie-en-waterverbruik' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Energie en verbruik", url: 'https://waterfilterplatform.nl/uitleg/energie-en-waterverbruik' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Energie en verbruik</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Energie- en waterverbruik per wateroplossing</h1>
          <p className="text-gray-600 text-lg">Hoeveel energie en water kost een oplossing in gebruik? Deze matrix geeft een indicatief beeld per type.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Verbruik in perspectief</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Osmose voert afvalwater af; een kokend water kraan gebruikt standby-energie; een ontharder spoelt periodiek en gebruikt zout.</p>
          <p className="text-gray-700 leading-relaxed mb-3">De cijfers zijn indicatief; gebruik de calculators voor jouw situatie.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Indicatief verbruik</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Oplossing</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Energie</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Water/overig</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Filterkan</th>
                  <td className="py-2.5 px-3 text-gray-700">geen</td>
                  <td className="py-2.5 px-3 text-gray-700">geen extra water</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Omgekeerde osmose</th>
                  <td className="py-2.5 px-3 text-gray-700">laag (eventueel pomp)</td>
                  <td className="py-2.5 px-3 text-gray-700">afvalwater (verhouding ~1:1 tot 1:3)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Waterontharder</th>
                  <td className="py-2.5 px-3 text-gray-700">laag</td>
                  <td className="py-2.5 px-3 text-gray-700">spoelwater + zout</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Kokend water kraan</th>
                  <td className="py-2.5 px-3 text-gray-700">standby-boiler (tientallen-100+ kWh/jaar)</td>
                  <td className="py-2.5 px-3 text-gray-700">geen extra water</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">UV-sterilisatie</th>
                  <td className="py-2.5 px-3 text-gray-700">continu lampje (laag)</td>
                  <td className="py-2.5 px-3 text-gray-700">geen extra water</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Indicatief; werkelijk verbruik verschilt per model en gebruik.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/hulpmiddelen/osmose-afvalwater', "Afvalwater-calculator"],
              ['/hulpmiddelen/kokend-water-kraan-kosten', "Kokend kraan kosten"],
              ['/kennisbank/water-besparen', "Water besparen"],
              ['/hulpmiddelen/waterverbruik', "Waterverbruik-schatter"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
