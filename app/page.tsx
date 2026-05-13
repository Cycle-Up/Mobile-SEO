import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'WaterfilterPlatform — omgekeerde osmose & kokend water kraan',
  description:
    'Alles over omgekeerde osmose filters, kokend water kranen en waterhardheid per gemeente. Vergelijk merken en vind de beste waterfilter voor thuis.',
  alternates: { canonical: 'https://waterfilterplatform.nl' },
};

const faqItems = [
  {
    question: 'Wat is omgekeerde osmose?',
    answer:
      'Omgekeerde osmose (RO) is een waterfiltertechniek waarbij water door een semi-permeabel membraan wordt geperst. Hierbij worden 95-99% van de opgeloste stoffen verwijderd, zoals kalk, chloor, nitraten en microplastics.',
  },
  {
    question: 'Wat is een kokend water kraan?',
    answer:
      'Een kokend water kraan (ook wel boiling water tap of 100°C kraan) levert direct kokend water uit de kraan. Het water wordt in een geïsoleerd reservoir onder het aanrecht constant op temperatuur gehouden.',
  },
  {
    question: 'Wat is het verschil tussen een kokend water kraan en een Quooker?',
    answer:
      'Quooker is een merk kokend water kranen. Andere merken zoals PureAqua bieden vergelijkbare functionaliteit — soms met extra functies zoals een ingebouwd omgekeerde osmose filter, wat Quooker standaard niet heeft.',
  },
];

const categories = [
  {
    href: '/omgekeerde-osmose',
    icon: '🔬',
    title: 'Omgekeerde osmose filter',
    desc: 'Verwijdert 99% van kalk, chloor en verontreinigingen. Alles wat je moet weten.',
    badge: '8.500+ zoekopdrachten/mnd',
  },
  {
    href: '/kokend-water-kraan',
    icon: '♨️',
    title: 'Kokend water kraan',
    desc: 'Direct 100°C water uit de kraan. Vergelijk alle merken en modellen.',
    badge: '8.500+ zoekopdrachten/mnd',
  },
  {
    href: '/waterhardheid',
    icon: '🗺️',
    title: 'Waterhardheid per gemeente',
    desc: 'Hoe hard is het water bij jou thuis? Zoek jouw gemeente op.',
    badge: '400+ gemeenten',
  },
  {
    href: '/kennisbank',
    icon: '📚',
    title: 'Kennisbank',
    desc: 'Diepgaande artikelen over waterkwaliteit, filters en gezond drinkwater.',
    badge: 'Guides & tips',
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[{ name: 'Home', url: 'https://waterfilterplatform.nl' }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#005F8A] text-sm font-semibold uppercase tracking-wide mb-3">
            Onafhankelijk waterfilter platform
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#003F5C] leading-tight mb-4">
            Omgekeerde osmose &<br className="hidden md:block" /> kokend water kraan
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Vergelijk waterfilters, lees over waterhardheid en vind de beste kokend water kraan voor jouw keuken.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors"
            >
              Osmose filter kopen
            </Link>
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-6 py-3 rounded-xl hover:bg-[#E0F2FE] transition-colors"
            >
              Kranen vergelijken
            </Link>
          </div>
        </div>
      </section>

      {/* Categorie kaarten */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#003F5C] mb-6 text-center">Wat zoek je?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#005F8A] hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-gray-900 group-hover:text-[#005F8A] transition-colors">
                  {cat.title}
                </h3>
                <span className="shrink-0 text-xs bg-[#E0F2FE] text-[#005F8A] px-2 py-0.5 rounded-full font-medium">
                  {cat.badge}
                </span>
              </div>
              <p className="text-sm text-gray-500">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* USP strip */}
      <section className="bg-[#E0F2FE] py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { icon: '🔬', text: 'Osmose verwijdert 99% van verontreinigingen' },
            { icon: '♨️', text: 'Kokend water direct uit de kraan' },
            { icon: '💧', text: 'Ontkalk en bescherm je apparaten' },
            { icon: '🏡', text: 'Eenvoudig thuis te installeren' },
          ].map(u => (
            <div key={u.text} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{u.icon}</span>
              <p className="text-gray-700">{u.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <CTABanner context="algemeen" />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
        <div className="space-y-4">
          {faqItems.map(item => (
            <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                {item.question}
                <span className="text-[#005F8A] group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
