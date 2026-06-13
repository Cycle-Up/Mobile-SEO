import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Feit of fabel: haalt koken alle verontreinigingen weg? (2026)",
  description: "Haalt koken alle verontreinigingen uit water? Oordeel: fabel. Koken doodt micro-organismen, maar verwijdert geen kalk, nitraat, lood of PFAS.",
  alternates: { canonical: 'https://waterfilterplatform.nl/feit-of-fabel/koken-zuivert-water' },
  openGraph: { title: "Feit of fabel: haalt koken alle verontreinigingen weg? (2026)", description: "Haalt koken alle verontreinigingen uit water? Oordeel: fabel. Koken doodt micro-organismen, maar verwijdert geen kalk, nitraat, lood of PFAS.", url: 'https://waterfilterplatform.nl/feit-of-fabel/koken-zuivert-water', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Waarvoor is koken dan wel goed?", answer: "Om micro-organismen te doden bij microbiologisch onveilig water. Voor opgeloste stoffen helpt het niet." },
  { question: "Verwijdert koken kalk?", answer: "Deels: de tijdelijke hardheid slaat neer als kalk, maar de blijvende hardheid blijft in het water." },
];

export default function KokenZuivertWaterMyth() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Koken haalt alle verontreinigingen uit water", description: "Haalt koken alle verontreinigingen uit water? Oordeel: fabel. Koken doodt micro-organismen, maar verwijdert geen kalk, nitraat, lood of PFAS.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/feit-of-fabel/koken-zuivert-water' }} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Feit of fabel', url: 'https://waterfilterplatform.nl/feit-of-fabel' },
        { name: "Koken zuivert alles?", url: 'https://waterfilterplatform.nl/feit-of-fabel/koken-zuivert-water' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/feit-of-fabel" className="hover:text-[#005F8A]">Feit of fabel</Link>
            <span className="mx-2">/</span>
            <span>Koken zuivert alles?</span>
          </nav>
          <p className="text-sm text-gray-500 mb-2">Claim:</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">"Koken haalt alle verontreinigingen uit water"</h1>
          <div className="quick-answer bg-white border rounded-2xl p-5" data-speakable="true" style={{ borderColor: '#B91C1C' }}>
            <p className="font-bold mb-1" style={{ color: '#B91C1C' }}>Oordeel: Fabel</p>
            <p className="text-gray-800">Koken doodt micro-organismen (bacterien, virussen), maar verwijdert geen opgeloste stoffen zoals kalk, nitraat, lood of PFAS. Sterker nog: bij indampen concentreren die juist. Voor opgeloste stoffen is filtratie of osmose nodig.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uitleg</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Koken is effectief tegen ziektekiemen, bijvoorbeeld bij onveilig bronwater, maar niet tegen chemische verontreiniging.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Koken verlaagt alleen de tijdelijke (carbonaat)hardheid, die als kalk neerslaat; de rest blijft.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Voor lood, nitraat of PFAS is omgekeerde osmose de aangewezen route.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{item.question}<span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span></summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/tijdelijke-blijvende-hardheid', "Soorten hardheid"],
              ['/vergelijken/uv-vs-osmose', "UV vs osmose"],
              ['/omgekeerde-osmose', "Omgekeerde osmose"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
