import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Watergids voor camper en boot (2026)",
  description: "Watergids voor onderweg: tankhygiene, veilig drinkwater en draagbare filters voor camper, caravan en boot.",
  alternates: { canonical: 'https://waterfilterplatform.nl/gidsen/camper-boot' },
  openGraph: { title: "Watergids voor camper en boot (2026)", description: "Watergids voor onderweg: tankhygiene, veilig drinkwater en draagbare filters voor camper, caravan en boot.", url: 'https://waterfilterplatform.nl/gidsen/camper-boot', type: 'article', locale: 'nl_NL' },
};

export default function GidsenCamperBootPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Watergids voor camper en boot", description: "Watergids voor onderweg: tankhygiene, veilig drinkwater en draagbare filters voor camper, caravan en boot.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/gidsen/camper-boot' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Gidsen', url: 'https://waterfilterplatform.nl/gidsen' },
        { name: "Camper en boot", url: 'https://waterfilterplatform.nl/gidsen/camper-boot' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gidsen" className="hover:text-[#005F8A]">Gidsen</Link>
            <span className="mx-2">/</span>
            <span>Camper en boot</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergids voor camper en boot</h1>
          <p className="text-gray-600 text-lg">Onderweg met camper of boot heb je een eigen watertank. Deze gids helpt je het water veilig en lekker te houden.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Tankhygiene</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Spoel en desinfecteer de drinkwatertank regelmatig en laat hem niet lang met stilstaand water staan; bij warmte groeien bacterien sneller.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Vul met drinkwaterkwaliteit en gebruik een schone slang.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Veilig drinkwater onderweg</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Binnen de EU is kraanwater vaak veilig; buiten de EU of bij onzekere bronnen is een draagbaar filter of UV-behandeling verstandig.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Een reisfilter tegen micro-organismen geeft extra zekerheid.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Kalk en smaak</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Hard vulwater laat kalk achter in de boiler; een klein filter kan helpen.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Een actief-koolfilter verbetert de smaak van tankwater.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/reisfilter', "Reisfilters"],
              ['/kennisbank/waterontharder-weg-op-vakantie', "Onderweg op vakantie"],
              ['/beslishulp/reisfilter', "Beslishulp reisfilter"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
