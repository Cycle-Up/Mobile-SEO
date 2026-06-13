import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AffiliateCTA } from '@/components/AffiliateCTA';

export const metadata: Metadata = {
  title: "Jaarchecklist waterontharder (2026)",
  description: "Jaarlijkse checklist voor je waterontharder: zout, hars, instellingen, lekcontrole en hardheidstest.",
  alternates: { canonical: 'https://waterfilterplatform.nl/checklists/jaarchecklist-waterontharder' },
  openGraph: { title: "Jaarchecklist waterontharder (2026)", description: "Jaarlijkse checklist voor je waterontharder: zout, hars, instellingen, lekcontrole en hardheidstest.", url: 'https://waterfilterplatform.nl/checklists/jaarchecklist-waterontharder', type: 'article', locale: 'nl_NL' },
};

export default function JaarchecklistWaterontharderChecklist() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Checklists', url: 'https://waterfilterplatform.nl/checklists' },
        { name: "Jaarchecklist ontharder", url: 'https://waterfilterplatform.nl/checklists/jaarchecklist-waterontharder' },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'ItemList',
        name: "Jaarchecklist waterontharder",
        url: 'https://waterfilterplatform.nl/checklists/jaarchecklist-waterontharder',
        numberOfItems: 6,
        itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Controleer het zoutniveau regelmatig" },
              { '@type': 'ListItem', position: 2, name: "Controleer op zoutbruggen" },
              { '@type': 'ListItem', position: 3, name: "Test de waterhardheid" },
              { '@type': 'ListItem', position: 4, name: "Controleer de instellingen" },
              { '@type': 'ListItem', position: 5, name: "Inspecteer op lekkage en zoutwaterresten" },
              { '@type': 'ListItem', position: 6, name: "Reinig de pekelbak indien nodig" },
        ],
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/checklists" className="hover:text-[#005F8A]">Checklists</Link>
            <span className="mx-2">/</span>
            <span>Jaarchecklist ontharder</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Jaarchecklist waterontharder</h1>
          <p className="text-gray-600 text-lg">Houd je waterontharder in topconditie met deze jaarlijkse controlepunten.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <ol className="space-y-3 list-none">
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Controleer het zoutniveau regelmatig</p>
              <p className="text-sm text-gray-600 mt-1">Vul bijtijds bij; een leeg reservoir betekent geen ontharding.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Controleer op zoutbruggen</p>
              <p className="text-sm text-gray-600 mt-1">Een harde zoutkorst kan de regeneratie blokkeren; breek deze los.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Test de waterhardheid</p>
              <p className="text-sm text-gray-600 mt-1">Controleer of het onthard water nog zacht is; stel zo nodig bij.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Controleer de instellingen</p>
              <p className="text-sm text-gray-600 mt-1">Klopt de ingestelde hardheid nog met je leveringsgebied?</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Inspecteer op lekkage en zoutwaterresten</p>
              <p className="text-sm text-gray-600 mt-1">Kijk rond de unit en de afvoer.</p>
            </li>
            <li className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800">Reinig de pekelbak indien nodig</p>
              <p className="text-sm text-gray-600 mt-1">Verwijder eens per jaar bezinksel uit de zoutbak.</p>
            </li>
        </ol>
        <p className="text-xs text-gray-400 mt-6">Raadpleeg de handleiding van je ontharder voor merk-specifieke stappen.</p>
        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="jaarchecklist-waterontharder-cta"
          label="Toe aan vervanging? Bekijk de waterontharders"
          title="Is je ontharder aan vervanging toe?"
          sub="Bekijk het actuele aanbod waterontharders bij onze partner PureAqua."
        />
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/hulpmiddelen/waterontharder-zout-kosten', "Zout-kosten"],
              ['/kennisbank/waterontharder-instellen', "Instellen"],
              ['/waterontharder', "Waterontharder"],
              ['/hulpmiddelen/zout-bijvul-interval', "Bijvulinterval"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
