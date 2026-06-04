import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Verzilting en droogte: context voor drinkwater (2026)",
  description: "Feitelijk overzicht van hoe verzilting en droogte de Nederlandse zoetwatervoorziening beinvloeden, met bronnen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/rapporten/verzilting-droogte-context' },
  openGraph: { title: "Verzilting en droogte: context voor drinkwater (2026)", description: "Feitelijk overzicht van hoe verzilting en droogte de Nederlandse zoetwatervoorziening beinvloeden, met bronnen.", url: 'https://waterfilterplatform.nl/rapporten/verzilting-droogte-context', type: 'article', locale: 'nl_NL' },
};

export default function RapportenVerziltingDroogteContextPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Verzilting en droogte: context voor drinkwater", description: "Feitelijk overzicht van hoe verzilting en droogte de Nederlandse zoetwatervoorziening beinvloeden, met bronnen.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/rapporten/verzilting-droogte-context' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Rapporten', url: 'https://waterfilterplatform.nl/rapporten' },
        { name: "Verzilting en droogte", url: 'https://waterfilterplatform.nl/rapporten/verzilting-droogte-context' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/rapporten" className="hover:text-[#005F8A]">Rapporten</Link>
            <span className="mx-2">/</span>
            <span>Verzilting en droogte</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Verzilting en droogte: context voor drinkwater</h1>
          <p className="text-gray-600 text-lg">Droogte en verzilting zetten de zoetwatervoorziening onder druk. Dit overzicht geeft de context, zonder alarmisme.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat speelt er</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Door zeespiegelstijging, droge zomers en lage rivierafvoeren kan zout water verder landinwaarts dringen en dalen grondwaterstanden.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Dit raakt vooral de waterwinning en landbouw op de lange termijn, niet de directe veiligheid van je kraanwater.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat het betekent</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Drinkwaterbedrijven beheren bronnen zorgvuldiger en roepen in droge periodes soms op tot zuinig watergebruik.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Voor de consument blijft kraanwater veilig en aan de normen; bewust omgaan met water helpt de zoetwatervoorraad sparen.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/drinkwater-hitte-droogte', "Drinkwater bij hitte en droogte"],
              ['/kennisbank/brak-water', "Brak water"],
              ['/kennisbank/water-besparen', "Water besparen"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
