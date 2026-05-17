import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://waterfilterplatform.nl'),
  title: {
    default: 'WaterfilterPlatform — omgekeerde osmose & kokend water kraan',
    template: '%s | WaterfilterPlatform',
  },
  description:
    'Alles over waterfilters voor thuis: omgekeerde osmose, kokend water kraan en waterhardheid per gemeente. Onafhankelijke informatie.',
  openGraph: {
    siteName: 'WaterfilterPlatform',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const navLinks = [
  { href: '/keuzehulp', label: 'Keuzehulp' },
  { href: '/omgekeerde-osmose', label: 'Osmose filter' },
  { href: '/vergelijken', label: 'Vergelijken' },
  { href: '/waterhardheid', label: 'Waterhardheid' },
  { href: '/kennisbank', label: 'Kennisbank' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${geist.variable}`}>
      <body className="antialiased min-h-full flex flex-col">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-[#005F8A] text-lg">
              💧 WaterfilterPlatform
            </Link>
            <nav className="hidden md:flex gap-6 text-sm">
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} className="text-gray-600 hover:text-[#005F8A] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
            <a
              href="/waterfilter/vergelijken"
              className="text-xs bg-[#005F8A] text-white px-3 py-1.5 rounded-lg font-medium hover:bg-[#003F5C] transition-colors"
            >
              Vergelijken →
            </a>
          </div>
          <nav className="md:hidden flex overflow-x-auto gap-1 px-4 pb-2">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="shrink-0 text-xs text-gray-600 hover:text-[#005F8A] bg-gray-50 px-3 py-1.5 rounded-full"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-[#003F5C] text-white py-10 mt-16">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-bold mb-3">WaterfilterPlatform</p>
              <p className="text-blue-200 text-xs">
                Onafhankelijke informatie over waterfilters en waterkwaliteit in Nederland.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">Waterfilters kiezen</p>
              <ul className="space-y-1 text-blue-200">
                <li><Link href="/keuzehulp" className="hover:text-white">Keuzehulp</Link></li>
                <li><Link href="/beste-waterfilter" className="hover:text-white">Beste waterfilter per situatie</Link></li>
                <li><Link href="/vergelijken" className="hover:text-white">Vergelijkingen</Link></li>
                <li><Link href="/filtertechnieken" className="hover:text-white">Filtertechnieken</Link></li>
                <li><Link href="/keurmerken" className="hover:text-white">Keurmerken</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Waterfilters & kranen</p>
              <ul className="space-y-1 text-blue-200">
                <li><Link href="/omgekeerde-osmose" className="hover:text-white">Omgekeerde osmose</Link></li>
                <li><Link href="/omgekeerde-osmose/kopen" className="hover:text-white">Osmose filter kopen</Link></li>
                <li><Link href="/kokend-water-kraan" className="hover:text-white">Kokend water kraan</Link></li>
                <li><Link href="/waterontharder" className="hover:text-white">Waterontharder</Link></li>
                <li><Link href="/onderhoud" className="hover:text-white">Onderhoud & gebruik</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Drinkwaterkwaliteit</p>
              <ul className="space-y-1 text-blue-200">
                <li><Link href="/drinkwaternormen" className="hover:text-white">Drinkwaternormen</Link></li>
                <li><Link href="/stoffen-in-drinkwater" className="hover:text-white">Stoffen in drinkwater</Link></li>
                <li><Link href="/waterhardheid" className="hover:text-white">Waterhardheid</Link></li>
                <li><Link href="/zakelijk" className="hover:text-white">Zakelijke waterfilters</Link></li>
                <li><Link href="/kennisbank" className="hover:text-white">Kennisbank</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 mt-6 pt-6 border-t border-blue-800 text-xs text-blue-300">
            © {new Date().getFullYear()} WaterfilterPlatform.nl — Informatiesite, geen webshop.
          </div>
        </footer>
      </body>
    </html>
  );
}
