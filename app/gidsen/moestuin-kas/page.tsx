import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Watergids voor moestuin en kas (2026)",
  description: "Watergids voor tuinieren: regenwater, hardheid, PFAS-nuance en wanneer gefilterd water loont voor gevoelige planten.",
  alternates: { canonical: 'https://waterfilterplatform.nl/gidsen/moestuin-kas' },
  openGraph: { title: "Watergids voor moestuin en kas (2026)", description: "Watergids voor tuinieren: regenwater, hardheid, PFAS-nuance en wanneer gefilterd water loont voor gevoelige planten.", url: 'https://waterfilterplatform.nl/gidsen/moestuin-kas', type: 'article', locale: 'nl_NL' },
};

export default function GidsenMoestuinKasPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Watergids voor de moestuin en kas", description: "Watergids voor tuinieren: regenwater, hardheid, PFAS-nuance en wanneer gefilterd water loont voor gevoelige planten.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/gidsen/moestuin-kas' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Gidsen', url: 'https://waterfilterplatform.nl/gidsen' },
        { name: "Moestuin en kas", url: 'https://waterfilterplatform.nl/gidsen/moestuin-kas' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gidsen" className="hover:text-[#005F8A]">Gidsen</Link>
            <span className="mx-2">/</span>
            <span>Moestuin en kas</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergids voor de moestuin en kas</h1>
          <p className="text-gray-600 text-lg">Planten zijn kieskeurig over water. Deze gids helpt je de juiste keuze maken voor moestuin en kas.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Regenwater eerst</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Voor de meeste planten is opgevangen regenwater prima en duurzaam; het is zacht en gratis. Let in industrie- of risicogebieden op PFAS-nuance.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Gebruik kostbaar drinkwater niet onnodig voor de tuin.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Hardheid en gevoelige planten</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Sommige (kalkgevoelige) planten doen het beter op zacht water. Hard water kan op den duur de bodem-pH beinvloeden.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor gevoelige kweek kan osmosewater of regenwater de voorkeur hebben.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wanneer filteren loont</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Voor de gemiddelde moestuin is filteren overbodig; voor gevoelige teelt of hydrocultuur kan zacht of osmosewater nuttig zijn.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Meng osmosewater eventueel met wat kraanwater voor wat mineralen.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/waterhardheid-planten', "Water en planten"],
              ['/regenwater/tuin', "Regenwater in de tuin"],
              ['/kennisbank/waterfilter-moestuin', "Waterfilter moestuin"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
