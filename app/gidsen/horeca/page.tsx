import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Watergids voor de horeca (2026)",
  description: "Watergids voor horeca: kalk tegen apparatuur, smaak voor koffie en thee, capaciteit en de regels rond gratis kraanwater.",
  alternates: { canonical: 'https://waterfilterplatform.nl/gidsen/horeca' },
  openGraph: { title: "Watergids voor de horeca (2026)", description: "Watergids voor horeca: kalk tegen apparatuur, smaak voor koffie en thee, capaciteit en de regels rond gratis kraanwater.", url: 'https://waterfilterplatform.nl/gidsen/horeca', type: 'article', locale: 'nl_NL' },
};

export default function GidsenHorecaPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Watergids voor een horecazaak", description: "Watergids voor horeca: kalk tegen apparatuur, smaak voor koffie en thee, capaciteit en de regels rond gratis kraanwater.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/gidsen/horeca' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Gidsen', url: 'https://waterfilterplatform.nl/gidsen' },
        { name: "Horeca", url: 'https://waterfilterplatform.nl/gidsen/horeca' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gidsen" className="hover:text-[#005F8A]">Gidsen</Link>
            <span className="mx-2">/</span>
            <span>Horeca</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergids voor een horecazaak</h1>
          <p className="text-gray-600 text-lg">In de horeca telt water dubbel: voor smaak, voor apparatuur en voor je gasten. Deze gids zet de keuzes op een rij.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Kalk en apparatuur</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Espressomachines, vaatwassers en combisteamers zijn gevoelig voor kalk. Een waterontharder of gericht filter beschermt de apparatuur en verlaagt onderhoudskosten.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor koffie loont een filter dat de hardheid binnen de aanbevolen bandbreedte brengt.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Smaak en gasten</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Gefilterd of bruisend water aan tafel is een service die gasten waarderen. Let op de capaciteit bij piekmomenten.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Een goede waterkwaliteit verbetert merkbaar de smaak van koffie, thee en gerechten.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Gratis kraanwater</h2>
          <p className="text-gray-700 leading-relaxed mb-3">In Nederland is er aandacht voor toegang tot kraanwater in de horeca; informeer naar de actuele regels en wat klanten mogen verwachten.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Een aantrekkelijk tappunt of karaf maakt kraanwater serveren makkelijk.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/zakelijk', "Zakelijke waterfilters"],
              ['/kennisbank/gratis-kraanwater-horeca', "Gratis kraanwater horeca"],
              ['/kennisbank/koffie-water-tds-recept', "Water voor koffie"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
