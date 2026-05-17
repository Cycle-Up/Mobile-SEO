import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina niet gevonden | WaterfilterPlatform',
  description: 'Deze pagina bestaat niet of is verplaatst. Bekijk onze keuzehulp, vergelijkingen of zoek op uw gemeente.',
  robots: { index: false, follow: true },
};

const popular = [
  { href: '/keuzehulp', label: 'Waterfilter keuzehulp' },
  { href: '/filtertechnieken', label: 'Alle filtertechnieken' },
  { href: '/vergelijken', label: 'Waterfilters vergelijken' },
  { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
  { href: '/stoffen-in-drinkwater', label: 'Stoffen in drinkwater' },
  { href: '/kennisbank', label: 'Kennisbank' },
];

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-16 px-4 min-h-[60vh]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-widest mb-2">Fout 404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-3">
          Deze pagina hebben we niet kunnen vinden
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          De link is mogelijk verouderd of verkeerd ingetypt. Hieronder vindt u een aantal van de meest bezochte
          onderwerpen op WaterfilterPlatform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {popular.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-[#005F8A] hover:bg-[#F0F9FF] transition-colors"
            >
              {p.label} &rarr;
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-gray-600">
          Of ga terug naar de <Link href="/" className="text-[#005F8A] font-semibold hover:underline">homepage</Link>.
        </p>
      </div>
    </section>
  );
}
