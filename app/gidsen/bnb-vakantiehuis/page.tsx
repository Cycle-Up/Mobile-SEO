import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Watergids voor B&B en vakantiehuis (2026)",
  description: "Watergids voor verhuurders: gastervaring, hardheid en kalk, hygiene na leegstand en onderhoud.",
  alternates: { canonical: 'https://waterfilterplatform.nl/gidsen/bnb-vakantiehuis' },
  openGraph: { title: "Watergids voor B&B en vakantiehuis (2026)", description: "Watergids voor verhuurders: gastervaring, hardheid en kalk, hygiene na leegstand en onderhoud.", url: 'https://waterfilterplatform.nl/gidsen/bnb-vakantiehuis', type: 'article', locale: 'nl_NL' },
};

export default function GidsenBnbVakantiehuisPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Watergids voor een B&B of vakantiehuis", description: "Watergids voor verhuurders: gastervaring, hardheid en kalk, hygiene na leegstand en onderhoud.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/gidsen/bnb-vakantiehuis' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Gidsen', url: 'https://waterfilterplatform.nl/gidsen' },
        { name: "B&B / vakantiehuis", url: 'https://waterfilterplatform.nl/gidsen/bnb-vakantiehuis' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gidsen" className="hover:text-[#005F8A]">Gidsen</Link>
            <span className="mx-2">/</span>
            <span>B&B / vakantiehuis</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergids voor een B&B of vakantiehuis</h1>
          <p className="text-gray-600 text-lg">Als verhuurder wil je dat gasten lekker en veilig water hebben. Deze gids helpt je dat te regelen.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Gastervaring</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Een karaf gefilterd water of een duidelijke melding dat kraanwater veilig is, scheelt flessen en plastic.</p>
          <p className="text-gray-700 leading-relaxed mb-3">In een hard-watergebied kan een ontharder kalkvlekken op glaswerk en douches verminderen.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Hygiene na leegstand</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Staat het huis tussen gasten leeg, laat dan bij aankomst de kranen even doorstromen. Tap een osmose-voorraadvat een paar keer leeg.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Volg de checklist voor filters na stilstand.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Onderhoud op afstand</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Houd een onderhoudsschema bij voor filters en ontharder, zeker als je niet ter plaatse woont.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Noteer vervangdata zodat de waterkwaliteit op peil blijft.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/checklists/filter-na-vakantie', "Filter na stilstand"],
              ['/checklists/onderhoudsschema-osmose', "Onderhoudsschema"],
              ['/waterhardheid', "Waterhardheid per gemeente"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
