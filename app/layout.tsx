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
  { href: '/omgekeerde-osmose', label: 'Osmose filter' },
  { href: '/kokend-water-kraan', label: 'Kokend water kraan' },
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
              href="https://www.pureaqua.nl"
              target="_blank"
              rel="noopener"
              className="text-xs bg-[#005F8A] text-white px-3 py-1.5 rounded-lg font-medium hover:bg-[#003F5C] transition-colors"
            >
              Kopen →
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
              <p className="font-semibold mb-2">Waterfilters</p>
              <ul className="space-y-1 text-blue-200">
                <li><Link href="/omgekeerde-osmose" className="hover:text-white">Omgekeerde osmose</Link></li>
                <li><Link href="/omgekeerde-osmose/kopen" className="hover:text-white">Osmose filter kopen</Link></li>
                <li><Link href="/omgekeerde-osmose/wat-is-osmose-water" className="hover:text-white">Wat is osmose water?</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Kokend water</p>
              <ul className="space-y-1 text-blue-200">
                <li><Link href="/kokend-water-kraan" className="hover:text-white">Kokend water kraan</Link></li>
                <li><Link href="/kokend-water-kraan/vergelijken" className="hover:text-white">Merken vergelijken</Link></li>
                <li><Link href="/kokend-water-kraan/met-filter" className="hover:text-white">Kraan met filter</Link></li>
                <li><Link href="/heet-water-kraan" className="hover:text-white">Heet water kraan</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Meer</p>
              <ul className="space-y-1 text-blue-200">
                <li><Link href="/waterhardheid" className="hover:text-white">Waterhardheid Nederland</Link></li>
                <li><Link href="/kennisbank" className="hover:text-white">Kennisbank</Link></li>
                <li><Link href="/over-ons" className="hover:text-white">Over ons</Link></li>
                <li>
                  <a href="https://www.pureaqua.nl" target="_blank" rel="noopener" className="hover:text-white">
                    PureAqua.nl →
                  </a>
                </li>
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
