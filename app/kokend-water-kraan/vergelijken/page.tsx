import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend water kraan vergelijken — PureAqua vs Quooker vs Grohe (2026)',
  description:
    'Vergelijk alle kokend water kranen: PureAqua, Quooker, Grohe Blue Home en meer. Prijzen, functies, filters. Welke is het beste voor jou?',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/vergelijken' },
};

const faqItems = [
  {
    question: 'Wat is de beste kokend water kraan?',
    answer:
      'De beste kokend water kraan hangt af van je prioriteiten. Wil je ook puur, gefilterd water en kost geld geen rol? Kies een 4-in-1 kraan met osmosefilter. Wil je puur kokend water voor een lagere prijs? Dan is een Quooker Combi+ een goede keuze.',
  },
  {
    question: 'Is PureAqua een alternatief voor Quooker?',
    answer:
      'Ja. De PureAqua 4-in-1 kraan biedt alle functies van een Quooker Fusion + CUBE (kokend, koud, bruisend), maar voegt een ingebouwde omgekeerde osmose filter toe voor een vergelijkbare of lagere prijs.',
  },
  {
    question: 'Wat kost een kokend water kraan inclusief installatie?',
    answer:
      'Reken voor een Quooker op €1.500–2.800 inclusief professionele installatie. Een PureAqua 4-in-1 kraan kost €699–899 en is zelf te installeren. Grohe Blue Home zit lager in prijs maar biedt geen kokend water.',
  },
];

export default function VergelijkenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/kokend-water-kraan/vergelijken' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan vergelijken
          </h1>
          <p className="text-gray-600 text-lg">
            Welke kokend water kraan past het beste bij jou? We vergelijken de populairste merken op prijs, functies en totale kosten.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Vergelijking: alle merken naast elkaar</h2>
          <ComparisonTable />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke kraan past bij jou?</h2>
          <div className="space-y-4">
            {[
              {
                situatie: 'Je wilt alleen kokend water, zo goedkoop mogelijk',
                advies: 'Quooker Combi+ of een goedkoper alternatief. Let op: geen filter ingebouwd, kalk blijft aanwezig.',
                icon: '💧',
              },
              {
                situatie: 'Je wilt kokend én gefilterd/bruisend water',
                advies: 'PureAqua 4-in-1 kraan — combineert alle functies inclusief osmosefilter voor een lagere prijs dan Quooker Fusion + CUBE.',
                icon: '⭐',
              },
              {
                situatie: 'Je hebt hard water en wilt kalk verwijderen',
                advies: 'Kies een systeem met ingebouwde osmosefilter. Een Quooker zonder filter lost het kalkprobleem niet op.',
                icon: '🔬',
              },
              {
                situatie: 'Je hebt een beperkt budget',
                advies: 'Grohe Blue Home (€400-700) filtert water en geeft bruisend water, maar geen kokend water. Of overweeg een PureAqua voor de complete oplossing.',
                icon: '💰',
              },
            ].map(s => (
              <div key={s.situatie} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-2xl shrink-0">{s.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{s.situatie}</p>
                  <p className="text-sm text-gray-600">{s.advies}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
