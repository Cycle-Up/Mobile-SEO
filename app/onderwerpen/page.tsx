import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Alle onderwerpen: complete index van WaterfilterPlatform',
  description:
    'Complete index van alle onderwerpen op WaterfilterPlatform: filtertechnieken, drinkwaterkwaliteit, waterhardheid, kokend water kranen, merken en meer.',
  alternates: { canonical: 'https://waterfilterplatform.nl/onderwerpen' },
  openGraph: {
    title: 'Alle onderwerpen - WaterfilterPlatform',
    description: 'Complete index van alle clusteronderwerpen en hubs op WaterfilterPlatform.',
    url: 'https://waterfilterplatform.nl/onderwerpen',
    type: 'website',
    locale: 'nl_NL',
  },
};

const BASE = 'https://waterfilterplatform.nl';

// Gemeente-programmatische templates: 1 voorbeeldlink volstaat (de volledige
// lijst staat in de sitemap); we tonen ze niet allemaal om de index leesbaar te houden.
const GEMEENTE_DIRS = new Set([
  'waterhardheid', 'waterontharder', 'osmose-filter', 'drinkwater', 'kraanwater',
  'leidingwater', 'kokend-water-kraan', 'kalk-in', 'waterfilter', 'waterontkalker',
]);

function readableLabel(seg: string): string {
  return seg.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
}

// Lees op build-time alle top-level cluster-hubs (mappen met een page.tsx).
function clusterHubs(): string[] {
  const appDir = path.join(process.cwd(), 'app');
  let entries: string[] = [];
  try {
    entries = fs.readdirSync(appDir, { withFileTypes: true })
      .filter(e => e.isDirectory() && !e.name.startsWith('[') && !e.name.startsWith('(') && !e.name.startsWith('_'))
      .filter(e => fs.existsSync(path.join(appDir, e.name, 'page.tsx')))
      .map(e => e.name);
  } catch {
    entries = [];
  }
  return entries.filter(name => name !== 'onderwerpen').sort();
}

export default function OnderwerpenPage() {
  const hubs = clusterHubs();

  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: BASE },
          { name: 'Alle onderwerpen', url: `${BASE}/onderwerpen` },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'CollectionPage',
            name: 'Alle onderwerpen - WaterfilterPlatform',
            url: `${BASE}/onderwerpen`,
            inLanguage: 'nl-NL',
            isPartOf: { '@id': `${BASE}/#website` },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: hubs.length,
              itemListElement: hubs.map((h, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: readableLabel(h),
                url: `${BASE}/${h}`,
              })),
            },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Alle onderwerpen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Alle onderwerpen</h1>
          <p className="text-gray-600 text-lg">
            Een complete index van alle clusteronderwerpen op WaterfilterPlatform. Elk onderwerp
            leidt naar een hub met diepgaande artikelen en, waar van toepassing, advies per gemeente.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Onderwerpen A-Z</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {hubs.map(h => (
              <li key={h}>
                <Link href={`/${h}`} className="text-[#005F8A] hover:underline">
                  {readableLabel(h)}
                  {GEMEENTE_DIRS.has(h) ? ' (per gemeente)' : ''}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Meer vinden</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Zoek je een specifiek artikel? Bekijk de{' '}
            <Link href="/kennisbank" className="text-[#005F8A] underline">kennisbank</Link> met
            400+ artikelen, de{' '}
            <Link href="/begrippenlijst" className="text-[#005F8A] underline">begrippenlijst</Link>{' '}
            of de volledige{' '}
            <a href="/sitemap.xml" className="text-[#005F8A] underline">sitemap</a>.
          </p>
        </section>
      </div>
    </>
  );
}
