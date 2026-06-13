import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';

export const metadata: Metadata = {
  title: 'Vraag-clusters: alles over een waterthema in tien vragen',
  description:
    'Vraag-clusters per waterthema: PFAS, omgekeerde osmose, waterontharders, kalk, kokendwaterkranen, lood en kraanwater drinken, elk in tien vragen en antwoorden.',
  alternates: { canonical: `${BASE}/vragen` },
  openGraph: {
    title: 'Vraag-clusters over water',
    description: 'Alles over een waterthema in tien vragen en antwoorden.',
    url: `${BASE}/vragen`,
    type: 'website',
    locale: 'nl_NL',
  },
};

const items: [string, string, string][] = [
  ['/vragen/pfas', 'PFAS', 'Norm, bron en filtering'],
  ['/vragen/omgekeerde-osmose', 'Omgekeerde osmose', 'Werking, mineralen en onderhoud'],
  ['/vragen/waterontharders', 'Waterontharders', 'Zout, gezondheid en kosten'],
  ['/vragen/kalk', 'Kalk', 'Oorzaak, apparaten en aanpak'],
  ['/vragen/kokend-water-kranen', 'Kokendwaterkranen', 'Werking, veiligheid en kosten'],
  ['/vragen/lood', 'Lood in drinkwater', 'Norm, leidingen en aanpak'],
  ['/vragen/kraanwater-drinken', 'Kraanwater drinken', 'Veiligheid, smaak en kosten'],
];

export default function VragenHub() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: BASE },
        { name: 'Vragen', url: `${BASE}/vragen` },
      ]} />
      <SchemaOrg schema={[{
        '@type': 'CollectionPage',
        name: 'Vraag-clusters over water',
        url: `${BASE}/vragen`,
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
            <span>Vragen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Vraag-clusters</h1>
          <p className="text-gray-600 text-lg">
            Per waterthema de belangrijkste vragen op een rij, kort en feitelijk beantwoord met
            bronverwijzing. Ideaal om snel een onderwerp te overzien.
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
          Losse antwoorden vind je bij de <Link href="/antwoorden" className="text-[#005F8A] underline">antwoordkaarten</Link>,
          en compacte begrippen bij de <Link href="/factsheets" className="text-[#005F8A] underline">factsheets</Link>.
        </p>
      </div>
    </>
  );
}
