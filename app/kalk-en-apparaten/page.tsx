import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Kalk en apparaten: oorzaken, schoonmaken en preventie",
  description: "Alles over kalkaanslag in huishoudelijke apparaten: koffiemachine, waterkoker, vaatwasser, wasmachine, en hoe je het voorkomt.",
  alternates: { canonical: 'https://waterfilterplatform.nl/kalk-en-apparaten' },
  openGraph: {
    title: "Kalk en apparaten: oorzaken, schoonmaken en preventie",
    description: "Alles over kalkaanslag in huishoudelijke apparaten: koffiemachine, waterkoker, vaatwasser, wasmachine, en hoe je het voorkomt.",
    url: 'https://waterfilterplatform.nl/kalk-en-apparaten',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function KalkEnApparatenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: "Kalk en apparaten", url: 'https://waterfilterplatform.nl/kalk-en-apparaten' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'CollectionPage',
            name: "Kalk en apparaten: oorzaken, schoonmaken en preventie",
            url: 'https://waterfilterplatform.nl/kalk-en-apparaten',
            inLanguage: 'nl-NL',
            isPartOf: { '@id': 'https://waterfilterplatform.nl/#website' },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: 10,
              itemListElement: [
              { '@type': 'ListItem', position: 1, name: "Koffiemachine", url: 'https://waterfilterplatform.nl/kennisbank/kalk-koffiemachine' },
              { '@type': 'ListItem', position: 2, name: "Vaatwasser", url: 'https://waterfilterplatform.nl/kennisbank/kalk-vaatwasser' },
              { '@type': 'ListItem', position: 3, name: "Wasmachine", url: 'https://waterfilterplatform.nl/kennisbank/kalk-wasmachine' },
              { '@type': 'ListItem', position: 4, name: "Cv-ketel", url: 'https://waterfilterplatform.nl/kennisbank/kalk-cv-ketel' },
              { '@type': 'ListItem', position: 5, name: "Waterkoker", url: 'https://waterfilterplatform.nl/kennisbank/waterkoker-filter-ontkalken' },
              { '@type': 'ListItem', position: 6, name: "Kranen en douchekop", url: 'https://waterfilterplatform.nl/kennisbank/kranen-douchekop-ontkalken' },
              { '@type': 'ListItem', position: 7, name: "Strijkijzer", url: 'https://waterfilterplatform.nl/kennisbank/waterfilter-strijkijzer-stoom' },
              { '@type': 'ListItem', position: 8, name: "Stoomoven", url: 'https://waterfilterplatform.nl/kennisbank/waterfilter-stoomoven' },
              { '@type': 'ListItem', position: 9, name: "Luchtbevochtiger", url: 'https://waterfilterplatform.nl/kennisbank/waterfilter-luchtbevochtiger' },
              { '@type': 'ListItem', position: 10, name: "Eieren koken", url: 'https://waterfilterplatform.nl/kennisbank/eieren-koken-kalk' },
              ],
            },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Kalk en apparaten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Kalk en apparaten</h1>
          <p className="text-gray-600 text-lg">Hard water laat kalk achter in apparaten, wat smaak, prestaties en levensduur aantast. Hieronder vind je per apparaat hoe je kalk verwijdert en voorkomt, plus hoe zacht water structureel helpt.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Apparaten en kalk</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/kennisbank/kalk-koffiemachine', "Koffiemachine", "Ontkalken en filter"],
              ['/kennisbank/kalk-vaatwasser', "Vaatwasser", "Zout en glansspoel"],
              ['/kennisbank/kalk-wasmachine', "Wasmachine", "Element en preventie"],
              ['/kennisbank/kalk-cv-ketel', "Cv-ketel", "Rendement en vulwater"],
              ['/kennisbank/waterkoker-filter-ontkalken', "Waterkoker", "Ontkalken en filter"],
              ['/kennisbank/kranen-douchekop-ontkalken', "Kranen en douchekop", "Aanslag verwijderen"],
              ['/kennisbank/waterfilter-strijkijzer-stoom', "Strijkijzer", "Welk water en kalk"],
              ['/kennisbank/waterfilter-stoomoven', "Stoomoven", "Welk water en onderhoud"],
              ['/kennisbank/waterfilter-luchtbevochtiger', "Luchtbevochtiger", "Witte stofneerslag"],
              ['/kennisbank/eieren-koken-kalk', "Eieren koken", "Kalk op pan en schaal"],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="text-gray-700 text-sm leading-relaxed">Wil je kalk structureel aanpakken? Lees <Link href="/kennisbank/waterhardheid-verlagen" className="text-[#005F8A] underline">waterhardheid verlagen</Link> of bekijk <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharders</Link>.</p>
        </section>
      </div>
    </>
  );
}
