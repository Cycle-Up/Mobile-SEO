import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Watergids voor sportschool en sportclub (2026)",
  description: "Watergids voor sportlocaties: navulpunten, hydratatie voor leden, hygiene en capaciteit op piekmomenten.",
  alternates: { canonical: 'https://waterfilterplatform.nl/gidsen/sportschool' },
  openGraph: { title: "Watergids voor sportschool en sportclub (2026)", description: "Watergids voor sportlocaties: navulpunten, hydratatie voor leden, hygiene en capaciteit op piekmomenten.", url: 'https://waterfilterplatform.nl/gidsen/sportschool', type: 'article', locale: 'nl_NL' },
};

export default function GidsenSportschoolPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Watergids voor een sportschool of sportclub", description: "Watergids voor sportlocaties: navulpunten, hydratatie voor leden, hygiene en capaciteit op piekmomenten.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/gidsen/sportschool' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Gidsen', url: 'https://waterfilterplatform.nl/gidsen' },
        { name: "Sportschool", url: 'https://waterfilterplatform.nl/gidsen/sportschool' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gidsen" className="hover:text-[#005F8A]">Gidsen</Link>
            <span className="mx-2">/</span>
            <span>Sportschool</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergids voor een sportschool of sportclub</h1>
          <p className="text-gray-600 text-lg">Sporters drinken veel; een goed navulpunt is een uitkomst. Deze gids helpt je het goed in te richten.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Navulpunten</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Een navulpunt voor bidons stimuleert hydratatie en vermindert flessen. Let op voldoende capaciteit op drukke momenten.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Contactloze of hygienische tappunten zijn prettig in een sportomgeving.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Hygiene</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Reinig tappunten regelmatig en vervang filters op tijd. Stilstaand water in weinig gebruikte punten even doorspoelen.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Goede hygiene voorkomt smaak- en geurproblemen.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Smaak en gebruik</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Koel, fris water wordt vaker gedronken; een filter tegen chloorsmaak helpt.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Communiceer dat het kraanwater veilig en gratis is.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/drinkwaterfontein/soorten', "Drinkwaterfonteinen"],
              ['/kennisbank/drinkwater-sporters-atleten', "Sporters en hydratatie"],
              ['/zakelijk', "Zakelijk"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
