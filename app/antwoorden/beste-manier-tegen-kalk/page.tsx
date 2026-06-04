import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Wat is de beste manier om kalk tegen te gaan? (2026)",
  description: "Kort antwoord: een waterontharder voor het hele huis, of omgekeerde osmose voor kalkvrij drinkwater aan een tappunt.",
  alternates: { canonical: 'https://waterfilterplatform.nl/antwoorden/beste-manier-tegen-kalk' },
  openGraph: { title: "Wat is de beste manier om kalk tegen te gaan? (2026)", description: "Kort antwoord: een waterontharder voor het hele huis, of omgekeerde osmose voor kalkvrij drinkwater aan een tappunt.", url: 'https://waterfilterplatform.nl/antwoorden/beste-manier-tegen-kalk', type: 'article', locale: 'nl_NL' },
};

export default function BesteManierTegenKalkCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: "Beste tegen kalk?", url: 'https://waterfilterplatform.nl/antwoorden/beste-manier-tegen-kalk' },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: "Wat is de beste manier om kalk tegen te gaan?", answer: "Voor kalkbescherming in het hele huis is een waterontharder met ionenwisseling de bewezen keuze; die verlaagt de hardheid meetbaar. Voor kalkvrij drink- en kookwater aan een tappunt verwijdert omgekeerde osmose vrijwel alle mineralen. Veel mensen combineren beide, afhankelijk van hun doel.", url: 'https://waterfilterplatform.nl/antwoorden/beste-manier-tegen-kalk' }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Beste tegen kalk?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Wat is de beste manier om kalk tegen te gaan?</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Voor kalkbescherming in het hele huis is een waterontharder met ionenwisseling de bewezen keuze; die verlaagt de hardheid meetbaar. Voor kalkvrij drink- en kookwater aan een tappunt verwijdert omgekeerde osmose vrijwel alle mineralen. Veel mensen combineren beide, afhankelijk van hun doel.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Magnetische of elektronische ontkalkers veranderen de hardheid niet en hebben een omstreden, wisselend effect.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Regelmatig ontkalken van apparaten en kranen droogwrijven helpt de aanslag te beperken.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Kies de aanpak op basis van je waterhardheid en wat je wilt beschermen.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/waterontharder', "Waterontharder"],
              ['/vergelijken/ionenwisselaar-vs-osmose', "Ionenwisselaar vs osmose"],
              ['/kennisbank/waterhardheid-verlagen', "Hardheid verlagen"],
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
