import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Checklist: zelf je waterkwaliteit thuis beoordelen (2026)",
  description: "Stappen om zelf een indruk te krijgen van je waterkwaliteit: zintuiglijk, teststrip, TDS-meter en de opgave van je drinkwaterbedrijf.",
  alternates: { canonical: 'https://waterfilterplatform.nl/checklists/waterkwaliteit-beoordelen' },
  openGraph: { title: "Checklist: zelf je waterkwaliteit thuis beoordelen (2026)", description: "Stappen om zelf een indruk te krijgen van je waterkwaliteit: zintuiglijk, teststrip, TDS-meter en de opgave van je drinkwaterbedrijf.", url: 'https://waterfilterplatform.nl/checklists/waterkwaliteit-beoordelen', type: 'article', locale: 'nl_NL' },
};

export default function WaterkwaliteitBeoordelenChecklist() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Checklists', url: 'https://waterfilterplatform.nl/checklists' },
        { name: "Waterkwaliteit beoordelen", url: 'https://waterfilterplatform.nl/checklists/waterkwaliteit-beoordelen' },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'ItemList',
        name: "Checklist: zelf je waterkwaliteit beoordelen",
        url: 'https://waterfilterplatform.nl/checklists/waterkwaliteit-beoordelen',
        numberOfItems: 6,
        itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Beoordeel zintuiglijk" },
              { '@type': 'ListItem', position: 2, name: "Vraag de opgave van je drinkwaterbedrijf op" },
              { '@type': 'ListItem', position: 3, name: "Meet de hardheid" },
              { '@type': 'ListItem', position: 4, name: "Gebruik een TDS-meter met mate" },
              { '@type': 'ListItem', position: 5, name: "Bij een eigen put: laat laboratoriumonderzoek doen" },
              { '@type': 'ListItem', position: 6, name: "Bij twijfel of klachten: raadpleeg een professional" },
        ],
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/checklists" className="hover:text-[#005F8A]">Checklists</Link>
            <span className="mx-2">/</span>
            <span>Waterkwaliteit beoordelen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Checklist: zelf je waterkwaliteit beoordelen</h1>
          <p className="text-gray-600 text-lg">Met deze stappen krijg je een eerste indruk van je waterkwaliteit. Voor een betrouwbaar oordeel zijn je drinkwaterbedrijf en, bij een eigen bron, een laboratorium leidend.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <ol className="space-y-3 list-none">
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Beoordeel zintuiglijk</p>
              <p className="text-sm text-gray-600 mt-1">Let op kleur, geur (chloor) en smaak; troebelheid of een vreemde geur is een signaal.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Vraag de opgave van je drinkwaterbedrijf op</p>
              <p className="text-sm text-gray-600 mt-1">Dit is de meest gezaghebbende bron voor hardheid en kwaliteit op jouw adres.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Meet de hardheid</p>
              <p className="text-sm text-gray-600 mt-1">Met een teststrip of TDS-meter krijg je een indicatie.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Gebruik een TDS-meter met mate</p>
              <p className="text-sm text-gray-600 mt-1">TDS zegt iets over opgeloste stoffen, niet over veiligheid of welke stoffen.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Bij een eigen put: laat laboratoriumonderzoek doen</p>
              <p className="text-sm text-gray-600 mt-1">Voor nitraat, bacterien en metalen is een labanalyse nodig.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Bij twijfel of klachten: raadpleeg een professional</p>
              <p className="text-sm text-gray-600 mt-1">Een arts of je drinkwaterbedrijf bij gezondheidszorgen.</p>
            </li>
        </ol>
        <p className="text-xs text-gray-400 mt-6">Dit is algemene informatie, geen medisch advies. Voor een betrouwbaar oordeel gelden officiele bronnen.</p>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/waterhardheid-meten', "Hardheid meten"],
              ['/kennisbank/tds-water', "TDS uitgelegd"],
              ['/drinkwaternormen', "Drinkwaternormen"],
              ['/kennisbank/putwater-behandelen', "Putwater"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
