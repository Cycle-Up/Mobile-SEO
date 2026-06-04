import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Hardheidsklassen uitgelegd: dH-grenzen en gevolgen (2026)",
  description: "Wat betekenen de hardheidsklassen zacht, gemiddeld en hard, welke dH-grenzen horen erbij en wat zijn de gevolgen?",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/hardheidsklassen' },
  openGraph: { title: "Hardheidsklassen uitgelegd: dH-grenzen en gevolgen (2026)", description: "Wat betekenen de hardheidsklassen zacht, gemiddeld en hard, welke dH-grenzen horen erbij en wat zijn de gevolgen?", url: 'https://waterfilterplatform.nl/uitleg/hardheidsklassen', type: 'article', locale: 'nl_NL' },
};

export default function HardheidsklassenExplainer() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Hardheidsklassen: zacht, gemiddeld en hard water", description: "Wat betekenen de hardheidsklassen zacht, gemiddeld en hard, welke dH-grenzen horen erbij en wat zijn de gevolgen?", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/hardheidsklassen' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "Hardheidsklassen", url: 'https://waterfilterplatform.nl/uitleg/hardheidsklassen' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>Hardheidsklassen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Hardheidsklassen: zacht, gemiddeld en hard water</h1>
          <p className="text-gray-600 text-lg">Waterhardheid wordt ingedeeld in klassen. Deze legenda legt de dH-grenzen uit en wat ze betekenen voor kalk en advies.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Hoe lees je de klasse</h2>
          <p className="text-gray-700 leading-relaxed mb-3">De hardheid wordt uitgedrukt in Duitse hardheidsgraden (dH). De klasse bepaalt hoe snel kalkaanslag ontstaat.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Zoek de exacte waarde voor jouw gemeente op of meet hem zelf.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De klassen</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Klasse</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">dH-bereik</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Gevolg</th>
                  <th scope="col" className="text-left py-3 px-3 font-semibold text-[#003F5C]">Advies</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Zacht</th>
                  <td className="py-2.5 px-3 text-gray-700">tot 8 dH</td>
                  <td className="py-2.5 px-3 text-gray-700">Weinig kalk</td>
                  <td className="py-2.5 px-3 text-gray-700">Meestal geen ontharder nodig</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Gemiddeld</th>
                  <td className="py-2.5 px-3 text-gray-700">8-14 dH</td>
                  <td className="py-2.5 px-3 text-gray-700">Matige kalkaanslag</td>
                  <td className="py-2.5 px-3 text-gray-700">Regelmatig ontkalken</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th scope="row" className="py-2.5 px-3 font-semibold text-gray-800 text-left">Hard</th>
                  <td className="py-2.5 px-3 text-gray-700">boven 14 dH</td>
                  <td className="py-2.5 px-3 text-gray-700">Veel kalkaanslag</td>
                  <td className="py-2.5 px-3 text-gray-700">Ontharder of osmose overwegen</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Indicatieve grenzen; de exacte waarde geeft je drinkwaterbedrijf.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/waterhardheid', "Waterhardheid per gemeente"],
              ['/hulpmiddelen/kalkrisico', "Kalkrisico-indicator"],
              ['/kennisbank/tijdelijke-blijvende-hardheid', "Soorten hardheid"],
              ['/hulpmiddelen/waterhardheid-omrekenen', "Hardheid omrekenen"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
