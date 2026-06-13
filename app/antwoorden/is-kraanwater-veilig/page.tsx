import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Is Nederlands kraanwater veilig om te drinken? (2026)",
  description: "Kort antwoord: ja. Nederlands kraanwater behoort tot de best gecontroleerde ter wereld en voldoet aan strenge wettelijke normen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/antwoorden/is-kraanwater-veilig' },
  openGraph: { title: "Is Nederlands kraanwater veilig om te drinken? (2026)", description: "Kort antwoord: ja. Nederlands kraanwater behoort tot de best gecontroleerde ter wereld en voldoet aan strenge wettelijke normen.", url: 'https://waterfilterplatform.nl/antwoorden/is-kraanwater-veilig', type: 'article', locale: 'nl_NL' },
};

export default function IsKraanwaterVeiligCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: "Kraanwater veilig?", url: 'https://waterfilterplatform.nl/antwoorden/is-kraanwater-veilig' },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: "Is Nederlands kraanwater veilig om te drinken?", answer: "Ja. Nederlands kraanwater behoort tot de best gecontroleerde ter wereld en voldoet aan het Drinkwaterbesluit en de EU-richtlijn 2020/2184. Drinkwaterbedrijven controleren continu op honderden parameters. Filteren is meestal niet nodig voor veiligheid, hooguit voor smaak of specifieke wensen.", url: 'https://waterfilterplatform.nl/antwoorden/is-kraanwater-veilig' }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Kraanwater veilig?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Is Nederlands kraanwater veilig om te drinken?</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Ja. Nederlands kraanwater behoort tot de best gecontroleerde ter wereld en voldoet aan het Drinkwaterbesluit en de EU-richtlijn 2020/2184. Drinkwaterbedrijven controleren continu op honderden parameters. Filteren is meestal niet nodig voor veiligheid, hooguit voor smaak of specifieke wensen.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Drinkwaterbedrijven winnen, zuiveren en controleren het water continu; de Inspectie Leefomgeving en Transport houdt toezicht en het RIVM doet onderzoek.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Aandachtspunten liggen meestal na de watermeter: oude loden leidingen in woningen van voor 1960 of stilstaand water in weinig gebruikte kranen. Laat in dat geval de kraan even doorstromen.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Voor gezondheidsvragen is je huisarts leidend.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/drinkwaternormen', "Drinkwaternormen"],
              ['/kennisbank/loodvrij-leidingwater', "Lood in oude leidingen"],
              ['/vergelijken/kraanwater-vs-flessenwater', "Kraanwater vs flessenwater"],
              ['/antwoorden', "Alle antwoorden"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
