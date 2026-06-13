import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Watergidsen per situatie: student, gezin, horeca en meer',
  description:
    'Complete watergidsen per persona en situatie: studenten, jong gezin, horeca, camper, B&B, kantoor, sportschool, kapsalon en moestuin.',
  alternates: { canonical: `${BASE}/gidsen` },
  openGraph: {
    title: 'Watergidsen per situatie',
    description: 'Gerichte watergidsen voor elke situatie.',
    url: `${BASE}/gidsen`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const items: [string, string, string][] = [
  ['/gidsen/studenten-kamerbewoners', 'Studenten en kamerbewoners', 'Betaalbaar, zonder boren'],
  ['/gidsen/jong-gezin', 'Jong gezin', 'Veiligheid en flesvoeding'],
  ['/gidsen/horeca', 'Horecazaak', 'Kalk, smaak en regels'],
  ['/gidsen/camper-boot', 'Camper en boot', 'Tankhygiene en reisfilter'],
  ['/gidsen/bnb-vakantiehuis', 'B&B en vakantiehuis', 'Gasten en onderhoud'],
  ['/gidsen/kantoor', 'Kantoor', 'Tappunten en legionella'],
  ['/gidsen/sportschool', 'Sportschool', 'Navulpunten en hygiene'],
  ['/gidsen/kapsalon', 'Kapsalon', 'Hard water en apparatuur'],
  ['/gidsen/moestuin-kas', 'Moestuin en kas', 'Regenwater en hardheid'],
];

export default function GidsenHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Gidsen', url: `${BASE}/gidsen` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Watergidsen per situatie',
        url: `${BASE}/gidsen`,
        inLanguage: 'nl-NL',
        isPartOf: { '@id': `${BASE}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: items.length,
          itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c[1], url: `${BASE}${c[0]}` })),
        },
      }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Gidsen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Watergidsen per situatie</h1>
          <p className="text-gray-600 text-lg">
            Complete, gerichte watergidsen voor jouw situatie, van studentenkamer tot horeca, kantoor
            en moestuin. Praktisch advies dat past bij hoe jij water gebruikt.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(([href, t, d]) => (
            <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
              <p className="text-sm text-gray-500">{d}</p>
            </Link>
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mt-8">
          Liever een advies op maat? Gebruik de <Link href="/keuzehulp" className="text-[#005F8A] underline">keuzehulp</Link> of de <Link href="/beslishulp" className="text-[#005F8A] underline">beslishulp</Link>.
        </p>
      </div>
    </>
  );
}
