import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Wat kosten waterfilters? Aanschaf en jaarlijks (2026)",
  description: "Indicatief kostenoverzicht van waterfilter-oplossingen: aanschaf en jaarlijkse kosten van filterkan tot osmose en ontharder.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/kostenoverzicht-waterfilters' },
  openGraph: { title: "Wat kosten waterfilters? Aanschaf en jaarlijks (2026)", description: "Indicatief kostenoverzicht van waterfilter-oplossingen: aanschaf en jaarlijkse kosten van filterkan tot osmose en ontharder.", url: 'https://waterfilterplatform.nl/uitleg/kostenoverzicht-waterfilters', type: 'article', locale: 'nl_NL' },
};

export default function KostenoverzichtWaterfiltersExplainer() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Kostenoverzicht: aanschaf en jaarlijkse kosten per oplossing", description: "Indicatief kostenoverzicht van waterfilter-oplossingen: aanschaf en jaarlijkse kosten van filterkan tot osmose en ontharder.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/kostenoverzicht-waterfilters' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Kostenoverzicht", url: 'https://waterfilterplatform.nl/uitleg/kostenoverzicht-waterfilters' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Kostenoverzicht</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Kostenoverzicht: aanschaf en jaarlijkse kosten per oplossing</h1>
          <p className="text-gray-600 text-lg">Wat kost welke wateroplossing? Deze matrix geeft indicatieve aanschaf- en jaarkosten, zodat je ze eerlijk kunt vergelijken.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Reken met je eigen cijfers</h2>
          <p className="text-gray-700 leading-relaxed mb-3">De bedragen zijn indicatieve richtprijzen; werkelijke kosten verschillen per merk, verbruik en situatie.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Gebruik de calculators voor een schatting op maat (zout, afvalwater, kokend kraan).</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Indicatieve kosten</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Oplossing</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Aanschaf (indicatief)</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Jaarlijks (indicatief)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Filterkan</th>
                  <td className="py-2.5 px-3 text-gray-700">EUR 20-40</td>
                  <td className="py-2.5 px-3 text-gray-700">EUR 40-120 (patronen)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Kraanfilter</th>
                  <td className="py-2.5 px-3 text-gray-700">EUR 30-150</td>
                  <td className="py-2.5 px-3 text-gray-700">EUR 30-90 (patronen)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Omgekeerde osmose</th>
                  <td className="py-2.5 px-3 text-gray-700">EUR 200-600</td>
                  <td className="py-2.5 px-3 text-gray-700">EUR 40-120 (filters + water)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Waterontharder</th>
                  <td className="py-2.5 px-3 text-gray-700">EUR 700-2.000</td>
                  <td className="py-2.5 px-3 text-gray-700">EUR 50-150 (zout + water)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Kokend water kraan</th>
                  <td className="py-2.5 px-3 text-gray-700">EUR 850-2.800</td>
                  <td className="py-2.5 px-3 text-gray-700">EUR 30-120 (energie + filter)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Indicatieve richtprijzen op basis van publieke informatie; controleer bij de verkoper.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/hulpmiddelen/flessenwater-besparing', "Flessenwater-besparing"],
              ['/hulpmiddelen/kokend-water-kraan-kosten', "Kokend kraan kosten"],
              ['/hulpmiddelen/waterontharder-zout-kosten', "Zout-kosten"],
              ['/keuzehulp', "Keuzehulp"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
