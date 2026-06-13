import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Watergids voor studenten en kamerbewoners (2026)",
  description: "Praktische watergids voor studenten: betaalbaar, zonder installatie en zonder boren, met de beste opties voor een kamer of studentenhuis.",
  alternates: { canonical: 'https://waterfilterplatform.nl/gidsen/studenten-kamerbewoners' },
  openGraph: { title: "Watergids voor studenten en kamerbewoners (2026)", description: "Praktische watergids voor studenten: betaalbaar, zonder installatie en zonder boren, met de beste opties voor een kamer of studentenhuis.", url: 'https://waterfilterplatform.nl/gidsen/studenten-kamerbewoners', type: 'article', locale: 'nl_NL' },
};

export default function GidsenStudentenKamerbewonersPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Watergids voor studenten en kamerbewoners", description: "Praktische watergids voor studenten: betaalbaar, zonder installatie en zonder boren, met de beste opties voor een kamer of studentenhuis.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/gidsen/studenten-kamerbewoners' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Gidsen', url: 'https://waterfilterplatform.nl/gidsen' },
        { name: "Studenten", url: 'https://waterfilterplatform.nl/gidsen/studenten-kamerbewoners' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gidsen" className="hover:text-[#005F8A]">Gidsen</Link>
            <span className="mx-2">/</span>
            <span>Studenten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergids voor studenten en kamerbewoners</h1>
          <p className="text-gray-600 text-lg">Op kamers wil je goedkoop, simpel en zonder boren. Deze gids helpt je de juiste, betaalbare wateroplossing te kiezen.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Kraanwater is je beste vriend</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Nederlands kraanwater is veilig en vrijwel gratis; flessenwater is duur en onnodig. Voor de smaak kan een goedkope filterkan een chloortoon wegnemen.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Maak ijsblokjes van schoon water en bewaar een kan in de koelkast voor koel water.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Geen installatie, geen boren</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Als huurder kies je voor oplossingen zonder installatie: een filterkan of een opzetfilter dat op de kraan past. Een opzet-osmose kan zonder boren.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Een waterontharder is meestal niet aan de orde in een kamer; dat regelt de verhuurder voor het hele pand of niet.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Slim besparen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Bereken met de flessenwater-besparingstool hoeveel je bespaart met kraanwater.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Deel de kosten van een filterkan met huisgenoten en vervang het patroon op tijd.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/filterkan', "Filterkannen"],
              ['/hulpmiddelen/flessenwater-besparing', "Flessenwater-besparing"],
              ['/keuzehulp/huurwoning', "Keuzehulp huurwoning"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
