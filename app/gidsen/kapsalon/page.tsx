import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Watergids voor een kapsalon (2026)",
  description: "Watergids voor kapsalons: hard water en haar, kalk op apparatuur en wasbakken, en mogelijke oplossingen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/gidsen/kapsalon' },
  openGraph: { title: "Watergids voor een kapsalon (2026)", description: "Watergids voor kapsalons: hard water en haar, kalk op apparatuur en wasbakken, en mogelijke oplossingen.", url: 'https://waterfilterplatform.nl/gidsen/kapsalon', type: 'article', locale: 'nl_NL' },
};

export default function GidsenKapsalonPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Watergids voor een kapsalon", description: "Watergids voor kapsalons: hard water en haar, kalk op apparatuur en wasbakken, en mogelijke oplossingen.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/gidsen/kapsalon' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Gidsen', url: 'https://waterfilterplatform.nl/gidsen' },
        { name: "Kapsalon", url: 'https://waterfilterplatform.nl/gidsen/kapsalon' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gidsen" className="hover:text-[#005F8A]">Gidsen</Link>
            <span className="mx-2">/</span>
            <span>Kapsalon</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergids voor een kapsalon</h1>
          <p className="text-gray-600 text-lg">In een kapsalon stroomt veel water; hardheid raakt zowel het haar als de apparatuur. Deze gids zet de keuzes op een rij.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Hard water en haar</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Hard water kan het wassen en spoelen beinvloeden en laat kalkresten achter. Sommige salons ervaren met zachter water een prettiger resultaat.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Dit is een comfort- en kwaliteitskwestie, geen gezondheidsclaim.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Kalk op apparatuur en wasbakken</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Wasbakken, kranen en boilers verkalken bij hard water sneller. Regelmatig ontkalken of een waterontharder beperkt onderhoud.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Droogwrijven van kranen en wasbakken voorkomt kalkvlekken.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Oplossingen afwegen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Een waterontharder voor de hele salon of een gericht filter; weeg kosten en onderhoud af.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Bepaal eerst de waterhardheid in je gemeente.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/waterontharder', "Waterontharder"],
              ['/kennisbank/kranen-douchekop-ontkalken', "Ontkalken"],
              ['/waterhardheid', "Waterhardheid"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
