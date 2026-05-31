import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://waterfilterplatform.nl'),
  title: {
    default: 'WaterfilterPlatform — onafhankelijke waterfilter informatie',
    template: '%s | WaterfilterPlatform',
  },
  description:
    'Alles over waterfilters voor thuis: keuzehulp, filtertechnieken, drinkwaternormen en waterhardheid per gemeente. Onafhankelijke informatie.',
  openGraph: {
    siteName: 'WaterfilterPlatform',
    locale: 'nl_NL',
    type: 'website',
    // og:image wordt site-breed geleverd door app/opengraph-image.tsx (PNG via next/og).
  },
  twitter: {
    card: 'summary_large_image',
    // twitter:image volgt automatisch uit app/opengraph-image.tsx (PNG).
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#005F8A',
};

const dropdownNav = [
  {
    label: 'Keuzehulp',
    href: '/keuzehulp',
    items: [
      { label: 'Waterfilter keuzehulp', href: '/keuzehulp' },
      { label: 'Hard water & kalk', href: '/keuzehulp/hard-water' },
      { label: 'PFAS of lood', href: '/keuzehulp/pfas-lood' },
      { label: 'Baby of gezin', href: '/keuzehulp/baby-gezin' },
      { label: 'Huurwoning', href: '/keuzehulp/huurwoning' },
      { label: 'Geur of smaak', href: '/keuzehulp/geur-smaak' },
      { label: 'Beste waterfilter per situatie', href: '/beste-waterfilter' },
    ],
  },
  {
    label: 'Filtertechnieken',
    href: '/filtertechnieken',
    items: [
      { label: 'Alle filtertechnieken', href: '/filtertechnieken' },
      { label: 'Omgekeerde osmose', href: '/omgekeerde-osmose' },
      { label: 'Actief kool', href: '/filtertechnieken/actief-kool' },
      { label: 'Ultrafiltratie', href: '/filtertechnieken/ultrafiltratie' },
      { label: 'Ionenwisseling', href: '/filtertechnieken/ionenwisseling' },
      { label: 'UV-sterilisatie', href: '/waterfilter/uv-sterilisatie' },
      { label: 'Keurmerken & certificering', href: '/keurmerken' },
    ],
  },
  {
    label: 'Vergelijken',
    href: '/vergelijken',
    items: [
      { label: 'Alle vergelijkingen', href: '/vergelijken' },
      { label: 'Osmose vs filterkan', href: '/vergelijken/osmose-vs-filterkan' },
      { label: 'Waterfilter vs waterontharder', href: '/vergelijken/waterfilter-vs-waterontharder' },
      { label: 'Kokend water kraan merken', href: '/vergelijken/kokend-water-kraan-merken' },
      { label: 'Kraanwater vs flessenwater', href: '/vergelijken/kraanwater-vs-flessenwater' },
      { label: 'Omgekeerde osmose vergelijken', href: '/vergelijken/omgekeerde-osmose-vergelijken' },
      { label: 'Onderhoud & gebruik', href: '/onderhoud' },
    ],
  },
  {
    label: 'Drinkwaterkwaliteit',
    href: '/stoffen-in-drinkwater',
    items: [
      { label: 'Stoffen in drinkwater', href: '/stoffen-in-drinkwater' },
      { label: 'Drinkwaternormen', href: '/drinkwaternormen' },
      { label: 'Waterhardheid per gemeente', href: '/waterhardheid' },
      { label: 'PFAS in leidingwater', href: '/leidingwater/pfas' },
      { label: 'Zware metalen', href: '/stoffen-in-drinkwater/zware-metalen' },
      { label: 'PFAS-overzicht', href: '/stoffen-in-drinkwater/pfas-overzicht' },
      { label: 'Zakelijke waterfilters', href: '/zakelijk' },
    ],
  },
];

const mobileLinks = [
  { href: '/keuzehulp', label: 'Keuzehulp' },
  { href: '/filtertechnieken', label: 'Filtertechnieken' },
  { href: '/vergelijken', label: 'Vergelijken' },
  { href: '/stoffen-in-drinkwater', label: 'Drinkwater' },
  { href: '/waterhardheid', label: 'Waterhardheid' },
  { href: '/kennisbank', label: 'Kennisbank' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${geist.variable}`}>
      <body className="antialiased min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-white focus:text-[#005F8A] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow"
        >
          Direct naar inhoud
        </a>
        <SchemaOrg type="Organization" />
        <SchemaOrg type="WebSite" />
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
            <Link href="/" className="font-bold text-[#005F8A] text-lg shrink-0">
              WaterfilterPlatform
            </Link>

            {/* Desktop dropdown nav */}
            <nav className="hidden md:flex items-center gap-0 text-sm">
              {dropdownNav.map((nav) => (
                <div key={nav.href} className="relative group/nav">
                  <Link
                    href={nav.href}
                    className="flex items-center gap-1 px-3 py-4 text-gray-600 hover:text-[#005F8A] transition-colors whitespace-nowrap"
                  >
                    {nav.label}
                    <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5 shrink-0 text-gray-400 mt-px" aria-hidden="true">
                      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="invisible group-hover/nav:visible opacity-0 group-hover/nav:opacity-100 transition-all duration-100 absolute top-full left-0 pt-0 z-50 min-w-56">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 mt-0">
                      {nav.items.map((item, i) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 text-sm text-gray-600 hover:text-[#005F8A] hover:bg-[#F0F9FF] transition-colors${i === 0 ? ' font-semibold' : ''}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <Link href="/kennisbank" className="px-3 py-4 text-gray-600 hover:text-[#005F8A] transition-colors text-sm">
                Kennisbank
              </Link>
            </nav>

            <Link
              href="/keuzehulp"
              className="shrink-0 text-sm bg-[#005F8A] text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-[#003F5C] transition-colors shadow-sm"
            >
              Keuzehulp
            </Link>
          </div>

          {/* Mobile scrollable chip nav */}
          <nav className="md:hidden flex overflow-x-auto gap-1 px-4 pb-2 scrollbar-hide">
            {mobileLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="shrink-0 text-xs text-gray-600 hover:text-[#005F8A] bg-[#F0F9FF] hover:bg-[#E0F2FE] px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </header>

        <main id="main" className="flex-1">{children}</main>

        <footer className="bg-[#003F5C] text-white py-10 mt-16">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-bold mb-3">WaterfilterPlatform</p>
              <p className="text-blue-200 text-xs leading-relaxed">
                Onafhankelijke informatie over waterfilters en waterkwaliteit in Nederland.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">Waterfilter kiezen</p>
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
          <div className="max-w-5xl mx-auto px-4 mt-6 pt-6 border-t border-blue-800 text-xs text-blue-300 space-y-3">
            <p className="leading-relaxed">
              Dit kennisplatform is gelieerd aan PureAqua. We ontvangen vergoeding via onze keuzehulp, maar dat
              beinvloedt onze redactionele beoordelingen niet. Lees onze{' '}
              <Link href="/methodologie" className="underline hover:text-white">methodologie</Link> en{' '}
              <Link href="/over-ons" className="underline hover:text-white">over-ons</Link> pagina voor de volledige toelichting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/over-ons" className="hover:text-white">Over ons</Link>
              <Link href="/methodologie" className="hover:text-white">Methodologie</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
            <p>
              &copy; {new Date().getFullYear()} WaterfilterPlatform.nl &mdash; Onafhankelijk vergelijkingsplatform.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
