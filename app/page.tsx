import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'WaterfilterPlatform — onafhankelijke waterfilter informatie',
  description:
    'Waterfilter keuzehulp, filtertechnieken, drinkwaternormen en waterhardheid per gemeente. Vergelijk filters en vind de beste oplossing voor jouw situatie.',
  alternates: { canonical: 'https://waterfilterplatform.nl' },
  openGraph: {
    images: [{ url: 'https://waterfilterplatform.nl/og/home.svg', width: 1200, height: 630, alt: 'WaterfilterPlatform' }],
    title: 'WaterfilterPlatform — onafhankelijke waterfilter informatie',
    description: 'Keuzehulp voor waterfilters: van osmosefilter tot waterontharder. Onafhankelijke informatie over drinkwaterkwaliteit in Nederland.',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter heb ik nodig?',
    answer:
      'Dat hangt af van uw situatie. Hard water vraagt om een waterontharder of osmosefilter. PFAS of lood vereist omgekeerde osmose. Voor geur en smaak volstaat een actief-koolfilter. Gebruik onze keuzehulp om per probleem de juiste richting te vinden.',
  },
  {
    question: 'Wat is omgekeerde osmose?',
    answer:
      'Omgekeerde osmose (RO) is een waterfiltertechniek waarbij water door een membraan met porieen van 0,0001 micron wordt geperst. Hierbij worden 95-99% van opgeloste stoffen verwijderd: kalk, PFAS, lood, nitraat en microplastics.',
  },
  {
    question: 'Hoe weet ik of het water bij mij hard of zacht is?',
    answer:
      'Dat hangt af van uw gemeente. In Nederland varieert waterhardheid van 2 dH (Groningen) tot 30 dH (Limburg). Boven 15 dH is kalkaanslag merkbaar op apparaten. Zoek uw gemeente op via de waterhardheid-pagina voor de exacte waarde.',
  },
  {
    question: 'Is Nederlands kraanwater veilig?',
    answer:
      'Ja. Nederlands drinkwater voldoet aan strenge EU-normen (richtlijn 2020/2184) en het Drinkwaterbesluit. RIVM en ILT houden toezicht. Extra filtratie is niet medisch noodzakelijk, maar kan zinvol zijn bij harde waterstof, PFAS-gevoeligheid, oudere leidingen of persoonlijke voorkeur.',
  },
  {
    question: 'Wat kost een osmosefilter per jaar?',
    answer:
      'Een onderbouw osmosefilter kost 200-600 euro aanschaf. Jaarlijkse filterkosten (prefilter, postfilter) bedragen 50-120 euro. Per liter gefilterd water is dit 5-20 cent, vergelijkbaar met een filterkan en een factor 10-20 goedkoper dan flessenwater.',
  },
];

const clusters = [
  {
    href: '/keuzehulp',
    icon: '🎯',
    title: 'Waterfilter keuzehulp',
    desc: 'Hard water, PFAS, baby, huurwoning of budget? Per situatie een gerichte aanbeveling zonder verkoopadvies.',
    badge: 'Start hier',
  },
  {
    href: '/filtertechnieken',
    icon: '🔬',
    title: 'Filtertechnieken',
    desc: 'Van actief kool tot omgekeerde osmose: hoe werkt elke techniek en wat verwijdert het?',
    badge: '10 technieken',
  },
  {
    href: '/beste-waterfilter',
    icon: '🏆',
    title: 'Beste waterfilter per situatie',
    desc: 'Appartement, oud huis, huurwoning, koffieliefhebber — concrete aanbevelingen per leefstijl.',
    badge: '12 situaties',
  },
  {
    href: '/vergelijken',
    icon: '⚖️',
    title: 'Vergelijkingen',
    desc: 'Osmose vs filterkan, waterfilter vs waterontharder: eerlijke kosten en prestaties naast elkaar.',
    badge: 'Objectief',
  },
  {
    href: '/stoffen-in-drinkwater',
    icon: '🧪',
    title: 'Stoffen in drinkwater',
    desc: 'PFAS, lood, nitraat, kalk, hormonen: wat zit er in Nederlands leidingwater en wanneer is filtratie zinvol?',
    badge: '12 stoffen',
  },
  {
    href: '/waterhardheid',
    icon: '🗺️',
    title: 'Waterhardheid per gemeente',
    desc: 'Hoe hard is het water bij u thuis? Zoek uw gemeente op voor de exacte hardheidswaarde en advies.',
    badge: '349 gemeenten',
  },
  {
    href: '/drinkwaternormen',
    icon: '📋',
    title: 'Drinkwaternormen',
    desc: 'Wie controleert drinkwater? EU-richtlijn, Drinkwaterbesluit, RIVM en 10 waterbedrijven uitgelegd.',
    badge: '13 onderwerpen',
  },
  {
    href: '/kennisbank',
    icon: '📚',
    title: 'Kennisbank',
    desc: 'Diepgaande artikelen over waterkwaliteit, microplastics, osmose en drinkwateronderzoek.',
    badge: '330+ artikelen',
  },
];

const stappenPlan = [
  {
    nr: '1',
    titel: 'Check uw waterkwaliteit',
    tekst: 'Zoek uw gemeente op voor de waterhardheid. Bekijk ook welke stoffen mogelijk relevant zijn voor uw situatie: lood in oudere leidingen, PFAS in bepaalde regio\'s.',
    href: '/waterhardheid',
    linkLabel: 'Zoek uw gemeente',
  },
  {
    nr: '2',
    titel: 'Vergelijk filteropties',
    tekst: 'We zetten alle filtertypen eerlijk naast elkaar op prijs, werking en filterkosten. Van filterkan tot osmosefilter tot 4-in-1 kraan.',
    href: '/vergelijken',
    linkLabel: 'Bekijk vergelijkingen',
  },
  {
    nr: '3',
    titel: 'Kies op basis van uw situatie',
    tekst: 'Gebruik de keuzehulp om op basis van uw specifieke vraag — hard water, PFAS, baby, huurwoning of budget — de beste filteroptie te vinden.',
    href: '/keuzehulp',
    linkLabel: 'Naar keuzehulp',
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
            Welk waterfilter past bij jou?
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Keuzehulp, filtertechnieken, drinkwaternormen en waterhardheid per gemeente. Onafhankelijke informatie zonder verkoopadvies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/keuzehulp"
              className="bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors"
            >
              Keuzehulp starten
            </Link>
            <Link
              href="/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-6 py-3 rounded-xl hover:bg-[#E0F2FE] transition-colors"
            >
              Filters vergelijken
            </Link>
          </div>
        </div>
      </section>

      {/* Statistieken */}
      <section className="border-y border-gray-100 py-5 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { waarde: '10', label: 'inhoudsclusters met keuzehulp' },
            { waarde: '349', label: 'gemeenten met waterhardheid' },
            { waarde: '330+', label: 'kennisbank artikelen' },
            { waarde: '99%', label: 'kalk verwijderd door osmose' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl font-bold text-[#005F8A]">{s.waarde}</span>
              <span className="text-xs text-gray-500 mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Cluster kaarten */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#003F5C] mb-2 text-center">Wat zoek je?</h2>
        <p className="text-gray-500 text-sm text-center mb-8">Kies een onderwerp om direct naar de juiste sectie te gaan</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clusters.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#005F8A] hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-gray-900 group-hover:text-[#005F8A] transition-colors text-sm leading-snug">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{cat.desc}</p>
              <span className="inline-block text-xs bg-[#E0F2FE] text-[#005F8A] px-2 py-0.5 rounded-full font-medium">
                {cat.badge}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2 text-center">In drie stappen naar de juiste keuze</h2>
          <p className="text-gray-500 text-sm text-center mb-8">Van waterkwaliteit tot filteradvies op maat</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stappenPlan.map((stap) => (
              <div key={stap.nr} className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold text-sm flex items-center justify-center mb-4 shrink-0">
                  {stap.nr}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{stap.titel}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{stap.tekst}</p>
                <Link href={stap.href} className="text-sm text-[#005F8A] font-semibold hover:underline">
                  {stap.linkLabel} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snelle links naar clusters */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-lg font-semibold text-[#003F5C] mb-4">Populaire onderwerpen</h2>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Omgekeerde osmose', href: '/omgekeerde-osmose' },
            { label: 'Kokend water kraan', href: '/kokend-water-kraan' },
            { label: 'Waterontharder', href: '/waterontharder' },
            { label: 'PFAS in leidingwater', href: '/leidingwater/pfas' },
            { label: 'Lood in drinkwater', href: '/leidingwater/lood' },
            { label: 'Actief koolfilter', href: '/filtertechnieken/actief-kool' },
            { label: 'NSF/ANSI keurmerken', href: '/keurmerken' },
            { label: 'Osmose voor baby', href: '/keuzehulp/baby-gezin' },
            { label: 'Filter voor huurwoning', href: '/keuzehulp/huurwoning' },
            { label: 'Osmose onderhoud', href: '/onderhoud/osmose-filter-vervangen' },
          ].map((tag) => (
            <Link
              key={tag.href}
              href={tag.href}
              className="text-sm bg-[#F0F9FF] text-[#005F8A] px-3 py-1.5 rounded-lg hover:bg-[#E0F2FE] transition-colors"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <CTABanner context="algemeen" />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                {item.question}
                <span className="text-[#005F8A] group-open:rotate-180 transition-transform">&#9660;</span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
