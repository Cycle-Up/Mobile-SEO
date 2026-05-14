import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'WaterfilterPlatform — omgekeerde osmose & kokend water kraan',
  description:
    'Alles over omgekeerde osmose filters, kokend water kranen en waterhardheid per gemeente. Vergelijk merken en vind de beste waterfilter voor thuis.',
  alternates: { canonical: 'https://waterfilterplatform.nl' },
  openGraph: {
    title: 'WaterfilterPlatform — omgekeerde osmose & kokend water kraan',
    description: 'Vergelijk waterfilters, lees over waterhardheid per gemeente en vind de beste kokend water kraan voor jouw keuken.',
  },
};

const faqItems = [
  {
    question: 'Wat is omgekeerde osmose?',
    answer:
      'Omgekeerde osmose (RO) is een waterfiltertechniek waarbij water door een semi-permeabel membraan wordt geperst. Hierbij worden 95–99% van de opgeloste stoffen verwijderd, zoals kalk, chloor, nitraten en microplastics.',
  },
  {
    question: 'Wat is een kokend water kraan?',
    answer:
      'Een kokend water kraan (ook wel boiling water tap of 100°C kraan) levert direct kokend water uit de kraan. Het water wordt in een geïsoleerd reservoir onder het aanrecht constant op temperatuur gehouden.',
  },
  {
    question: 'Wat is het verschil tussen een kokend water kraan en een Quooker?',
    answer:
      'Quooker is een merk kokend water kranen. Er zijn diverse alternatieven die vergelijkbare functionaliteit bieden — soms met extra functies zoals een ingebouwd omgekeerde osmose filter, wat Quooker standaard niet heeft.',
  },
  {
    question: 'Hoe weet ik of het water bij mij hard of zacht is?',
    answer:
      'Dat hangt af van je gemeente. In Nederland varieert de waterhardheid sterk: van 4°dH in sommige delen van Zeeland tot 22°dH in delen van Limburg. Zoek je gemeente op via onze waterhardheid-pagina voor de exacte waarde en advies.',
  },
  {
    question: 'Verwijdert een osmosefilter ook kalk?',
    answer:
      'Ja. Een omgekeerde osmose filter verwijdert 95–99% van het calcium en magnesium — de mineralen die kalk veroorzaken. Dat beschermt je waterkoker, koffiemachine en vaatwasser, en verbetert de smaak van drinkwater aanzienlijk.',
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
    badge: '349 gemeenten',
  },
  {
    href: '/kennisbank',
    icon: '📚',
    title: 'Kennisbank',
    desc: 'Diepgaande artikelen over waterkwaliteit, filters en gezond drinkwater.',
    badge: 'Guides & tips',
  },
];

const stappenPlan = [
  {
    nr: '1',
    titel: 'Bekijk je waterhardheid',
    tekst: 'Zoek jouw gemeente op en lees wat de waterhardheid in jouw regio betekent voor kalk, apparaten en drinkwater.',
    href: '/waterhardheid',
    linkLabel: 'Zoek je gemeente',
  },
  {
    nr: '2',
    titel: 'Vergelijk waterfilters',
    tekst: 'We zetten alle filtertypen eerlijk naast elkaar — van filterkan tot osmosefilter tot 4-in-1 kraan — op prijs, werking en filterkosten.',
    href: '/kennisbank/waterfilter-vergelijken',
    linkLabel: 'Bekijk vergelijking',
  },
  {
    nr: '3',
    titel: 'Maak de beste keuze',
    tekst: 'Voor de meeste huishoudens met hard water is een 4-in-1 kraan met osmosefilter de meest complete oplossing. Wij leggen je uit waarom.',
    href: '/omgekeerde-osmose/kopen',
    linkLabel: 'Naar osmose filter kopen',
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaOrg type="Organization" />
      <SchemaOrg type="WebSite" />
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

      {/* Vertrouwensbalk */}
      <section className="border-y border-gray-100 py-5 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { waarde: '349', label: 'gemeenten met waterhardheid' },
            { waarde: '6', label: 'diepgaande kennisbank artikelen' },
            { waarde: '99%', label: 'kalk verwijderd door osmose' },
            { waarde: '100°C', label: 'direct uit de 4-in-1 kraan' },
          ].map(s => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl font-bold text-[#005F8A]">{s.waarde}</span>
              <span className="text-xs text-gray-500 mt-0.5">{s.label}</span>
            </div>
          ))}
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

      {/* Hoe het werkt */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2 text-center">Hoe het werkt</h2>
          <p className="text-gray-500 text-sm text-center mb-8">In drie stappen naar de beste wateroplossing voor jouw huis</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stappenPlan.map(stap => (
              <div key={stap.nr} className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold text-sm flex items-center justify-center mb-4 shrink-0">
                  {stap.nr}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{stap.titel}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{stap.tekst}</p>
                <Link
                  href={stap.href}
                  className="text-sm text-[#005F8A] font-semibold hover:underline"
                >
                  {stap.linkLabel} →
                </Link>
              </div>
            ))}
          </div>
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
