import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Antwoorden: directe antwoorden op veelgestelde watervragen',
  description:
    'Korte, directe antwoorden op de meestgestelde vragen over kraanwater, osmose, PFAS, kalk en filteren. Citatie-klaar met bronvermelding.',
  alternates: { canonical: `${BASE}/antwoorden` },
  openGraph: {
    title: 'Antwoorden op watervragen',
    description: 'Directe, citatie-klare antwoorden op veelgestelde watervragen.',
    url: `${BASE}/antwoorden`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const cards: [string, string][] = [
  ['/antwoorden/is-kraanwater-veilig', 'Is Nederlands kraanwater veilig om te drinken?'],
  ['/antwoorden/verwijdert-osmose-pfas', 'Verwijdert omgekeerde osmose PFAS?'],
  ['/antwoorden/moet-ik-kraanwater-filteren', 'Moet ik mijn kraanwater filteren in Nederland?'],
  ['/antwoorden/is-osmosewater-ongezond', 'Is osmosewater ongezond?'],
  ['/antwoorden/hoe-vaak-filter-vervangen', 'Hoe vaak moet ik mijn waterfilter vervangen?'],
  ['/antwoorden/beste-manier-tegen-kalk', 'Wat is de beste manier om kalk tegen te gaan?'],
  ['/antwoorden/chloor-in-kraanwater', 'Zit er chloor in Nederlands kraanwater?'],
  ['/antwoorden/gefilterd-water-beter', 'Is gefilterd water beter dan kraanwater?'],
  ['/antwoorden/kosten-osmosesysteem-per-jaar', 'Hoeveel kost een osmosesysteem per jaar?'],
];

export default function AntwoordenHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Antwoorden', url: `${BASE}/antwoorden` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Antwoorden op watervragen',
        url: `${BASE}/antwoorden`,
        inLanguage: 'nl-NL',
        isPartOf: { '@id': `${BASE}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: cards.length,
          itemListElement: cards.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c[1], url: `${BASE}${c[0]}` })),
        },
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Antwoorden</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Directe antwoorden op watervragen</h1>
          <p className="text-gray-600 text-lg">
            Korte, citatie-klare antwoorden op de meestgestelde vragen over kraanwater, osmose, PFAS,
            kalk en filteren. Elk antwoord verwijst door naar de onderbouwing en bronnen.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-3">
          {cards.map(([href, q]) => (
            <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all font-medium text-gray-800 hover:text-[#005F8A]">
              {q}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
