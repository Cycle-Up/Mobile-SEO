import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Checklist: kokend water kraan veilig gebruiken met kinderen (2026)",
  description: "Veiligheidschecklist voor een kokend water kraan in een huishouden met kinderen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/checklists/kokend-kraan-kinderveiligheid' },
  openGraph: { title: "Checklist: kokend water kraan veilig gebruiken met kinderen (2026)", description: "Veiligheidschecklist voor een kokend water kraan in een huishouden met kinderen.", url: 'https://waterfilterplatform.nl/checklists/kokend-kraan-kinderveiligheid', type: 'article', locale: 'nl_NL' },
};

export default function KokendKraanKinderveiligheidChecklist() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Checklists', url: 'https://waterfilterplatform.nl/checklists' },
        { name: "Kinderveiligheid kraan", url: 'https://waterfilterplatform.nl/checklists/kokend-kraan-kinderveiligheid' },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'ItemList',
        name: "Checklist: kokend water kraan veilig met kinderen",
        url: 'https://waterfilterplatform.nl/checklists/kokend-kraan-kinderveiligheid',
        numberOfItems: 6,
        itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Gebruik de kinderslot-functie" },
              { '@type': 'ListItem', position: 2, name: "Plaats de kraan buiten kinderbereik waar mogelijk" },
              { '@type': 'ListItem', position: 3, name: "Leg de werking uit aan oudere kinderen" },
              { '@type': 'ListItem', position: 4, name: "Richt de straal naar de spoelbak" },
              { '@type': 'ListItem', position: 5, name: "Controleer de beveiliging regelmatig" },
              { '@type': 'ListItem', position: 6, name: "Houd toezicht bij gebruik" },
        ],
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/checklists" className="hover:text-[#005F8A]">Checklists</Link>
            <span className="mx-2">/</span>
            <span>Kinderveiligheid kraan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Checklist: kokend water kraan veilig met kinderen</h1>
          <p className="text-gray-600 text-lg">Een kokend water kraan is handig maar levert direct kokend water. Met deze punten gebruik je hem veilig met kinderen in huis.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <ol className="space-y-3 list-none">
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Gebruik de kinderslot-functie</p>
              <p className="text-sm text-gray-600 mt-1">De meeste kokend water kranen hebben een push-and-turn of dubbele beveiliging; gebruik die altijd.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Plaats de kraan buiten kinderbereik waar mogelijk</p>
              <p className="text-sm text-gray-600 mt-1">Of beperk de toegang tot de keuken voor kleine kinderen.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Leg de werking uit aan oudere kinderen</p>
              <p className="text-sm text-gray-600 mt-1">Zorg dat ze weten dat het water direct kookt.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Richt de straal naar de spoelbak</p>
              <p className="text-sm text-gray-600 mt-1">Voorkom spatten buiten de gootsteen.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Controleer de beveiliging regelmatig</p>
              <p className="text-sm text-gray-600 mt-1">Test of het kinderslot nog goed werkt.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Houd toezicht bij gebruik</p>
              <p className="text-sm text-gray-600 mt-1">Laat jonge kinderen de kraan niet zonder toezicht bedienen.</p>
            </li>
        </ol>
        <p className="text-xs text-gray-400 mt-6">Dit is algemene veiligheidsinformatie; volg altijd de instructies van de fabrikant.</p>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/kokend-water-veiligheid', "Kokend water veiligheid"],
              ['/kokend-water-kraan', "Kokend water kranen"],
              ['/kennisbank/kokend-water-kraan-baby', "Kraan en baby"],
              ['/beslishulp/kokend-kraan-nodig', "Kraan nodig?"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
