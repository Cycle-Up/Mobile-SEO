import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Verwijdert omgekeerde osmose PFAS? (2026)",
  description: "Kort antwoord: ja, omgekeerde osmose verwijdert het grootste deel van PFAS uit drinkwater.",
  alternates: { canonical: 'https://waterfilterplatform.nl/antwoorden/verwijdert-osmose-pfas' },
  openGraph: { title: "Verwijdert omgekeerde osmose PFAS? (2026)", description: "Kort antwoord: ja, omgekeerde osmose verwijdert het grootste deel van PFAS uit drinkwater.", url: 'https://waterfilterplatform.nl/antwoorden/verwijdert-osmose-pfas', type: 'article', locale: 'nl_NL' },
};

export default function VerwijdertOsmosePfasCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: "Osmose en PFAS", url: 'https://waterfilterplatform.nl/antwoorden/verwijdert-osmose-pfas' },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: "Verwijdert omgekeerde osmose PFAS?", answer: "Ja. Omgekeerde osmose verwijdert doorgaans 90 tot 99 procent van PFAS, doordat het membraan vrijwel alle opgeloste stoffen tegenhoudt. Het is daarmee een van de effectiefste thuismethoden tegen PFAS. Controleer voor zekerheid de gecertificeerde productspecificatie (NSF/ANSI) van een specifiek systeem.", url: 'https://waterfilterplatform.nl/antwoorden/verwijdert-osmose-pfas' }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Osmose en PFAS</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Verwijdert omgekeerde osmose PFAS?</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Ja. Omgekeerde osmose verwijdert doorgaans 90 tot 99 procent van PFAS, doordat het membraan vrijwel alle opgeloste stoffen tegenhoudt. Het is daarmee een van de effectiefste thuismethoden tegen PFAS. Controleer voor zekerheid de gecertificeerde productspecificatie (NSF/ANSI) van een specifiek systeem.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">PFAS zijn zeer kleine, opgeloste verbindingen. Een osmosemembraan houdt vrijwel alle opgeloste stoffen tegen, waardoor PFAS grotendeels in de reststroom belandt.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Een goed actief-koolfilter kan ook een deel van PFAS binden, maar de prestatie varieert en neemt af bij verzadiging. De EU-somnorm is 0,1 microgram per liter.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Voor gezondheidsvragen is je huisarts leidend.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/omgekeerde-osmose', "Omgekeerde osmose"],
              ['/drinkwaternormen/pfas', "PFAS-norm"],
              ['/kennisbank/pfas-drinkwater', "PFAS in drinkwater"],
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
