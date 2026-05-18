import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'WaterfilterPlatform — kennisplatform over waterkwaliteit en waterfiltratie',
  description:
    'Alles over drinkwaterkwaliteit, waterfiltratie en waterhardheid in Nederland. Onafhankelijke informatie over stoffen in leidingwater, filtertechnieken en drinkwaternormen.',
  alternates: { canonical: 'https://waterfilterplatform.nl' },
  openGraph: {
    images: [{ url: 'https://waterfilterplatform.nl/og/home.svg', width: 1200, height: 630, alt: 'WaterfilterPlatform' }],
    title: 'WaterfilterPlatform — kennisplatform over waterkwaliteit en waterfiltratie',
    description: 'Onafhankelijke informatie over drinkwaterkwaliteit, filtertechnieken, waterhardheid per gemeente en stoffen in Nederlands leidingwater.',
  },
};

const faqItems = [
  {
    question: 'Is Nederlands kraanwater veilig om te drinken?',
    answer:
      'Ja. Nederlands drinkwater behoort tot de schoonste ter wereld en voldoet aan strenge EU-normen (richtlijn 2020/2184) en het Drinkwaterbesluit. RIVM en ILT houden voortdurend toezicht. Extra filtratie is niet medisch noodzakelijk, maar kan zinvol zijn bij harde waterstof, PFAS-gevoeligheid, oudere leidingen of persoonlijke voorkeur.',
  },
  {
    question: 'Wat is het verschil tussen hard en zacht water?',
    answer:
      'Waterhardheid is de concentratie opgeloste calcium- en magnesiumzouten in leidingwater, uitgedrukt in graden Duitse hardheid (°dH). Zacht water (< 8°dH) laat nauwelijks kalksporen achter; hard water (> 14°dH) veroorzaakt aanslag op ketels en apparaten. In Nederland varieert de hardheid van 4°dH (Zeeland) tot ruim 20°dH (delen van Limburg).',
  },
  {
    question: 'Welke stoffen kunnen in drinkwater zitten?',
    answer:
      'Leidingwater bevat van nature mineralen zoals calcium, magnesium en natrium. Afhankelijk van de regio kunnen ook PFAS (industrie), nitraat (landbouw), lood (oude leidingen), pesticiden of medicijnresten in kleine concentraties voorkomen. RIVM en waterbedrijven monitoren tientallen parameters. Op waterfilterplatform.nl vindt u per stof uitleg over herkomst, norm en filteropties.',
  },
  {
    question: 'Hoe werkt een omgekeerde osmosefilter?',
    answer:
      'Bij omgekeerde osmose (RO) wordt water onder druk door een semi-permeabel membraan met poriën van circa 0,0001 micron geperst. Dit membraan houdt 95–99% van opgeloste stoffen tegen: kalk, PFAS, lood, nitraat, microplastics en bacteriën. Het gefilterde water wordt opgevangen in een drukvaatje; het concentraat (met de afgevangen stoffen) wordt afgevoerd naar het riool.',
  },
  {
    question: 'Wat zijn de Europese drinkwaternormen?',
    answer:
      'De Europese drinkwaterrichtlijn (2020/2184/EU) schrijft maximumconcentraties voor honderden parameters voor, waaronder microbiologische parameters (bacteriën, virussen), chemische stoffen (nitraat, PFAS, lood, arseen) en indicatoren (hardheid, pH, turbiditeit). In Nederland zijn deze normen omgezet in het Drinkwaterbesluit. De richtlijn van 2020 introduceerde ook strengere PFAS-normen (0,1 µg/L totaal-PFAS) die in 2026 volledig van kracht worden.',
  },
];

const clusters = [
  {
    href: '/drinkwaternormen',
    icon: '📋',
    title: 'Drinkwaternormen',
    desc: 'Wie controleert drinkwater in Nederland? EU-richtlijn, Drinkwaterbesluit, RIVM en de 10 waterbedrijven toegelicht.',
    badge: '13 onderwerpen',
  },
  {
    href: '/stoffen-in-drinkwater',
    icon: '🧪',
    title: 'Stoffen in drinkwater',
    desc: 'PFAS, lood, nitraat, kalk, hormonen en meer: ontdek welke stoffen in Nederlands leidingwater kunnen voorkomen.',
    badge: '12 stoffen',
  },
  {
    href: '/waterhardheid',
    icon: '🗺️',
    title: 'Waterhardheid per gemeente',
    desc: 'Hoe hard is het water in uw gemeente? Zoek de exacte hardheidswaarde op voor alle 349 Nederlandse gemeenten.',
    badge: '349 gemeenten',
  },
  {
    href: '/filtertechnieken',
    icon: '🔬',
    title: 'Filtertechnieken',
    desc: 'Leer hoe elke filtertechniek werkt: van actief kool en ultrafiltratie tot omgekeerde osmose en ionenwisseling.',
    badge: '10 technieken',
  },
  {
    href: '/kennisbank',
    icon: '📚',
    title: 'Kennisbank',
    desc: 'Meer dan 330 diepgaande artikelen over waterkwaliteit, wateronderzoek, filteronderhoud en drinkwaterwetenschap.',
    badge: '330+ artikelen',
  },
  {
    href: '/keurmerken',
    icon: '✅',
    title: 'Keurmerken & certificering',
    desc: 'Ontdek wat NSF/ANSI, Kiwa, ACS en WRAS betekenen en hoe u de certificering van een waterfilter verifieert.',
    badge: '8 keurmerken',
  },
  {
    href: '/keuzehulp',
    icon: '🎯',
    title: 'Waterfilter keuzehulp',
    desc: 'Hard water, PFAS, baby, huurwoning of budget? Per situatie een gerichte aanbeveling op basis van uw waterprobleem.',
    badge: 'Keuzehulp',
  },
  {
    href: '/vergelijken',
    icon: '⚖️',
    title: 'Vergelijkingen',
    desc: 'Osmose vs filterkan, waterfilter vs waterontharder: prestaties en kosten eerlijk naast elkaar.',
    badge: 'Objectief',
  },
];

const uitgelicht = [
  {
    slug: 'pfas-in-drinkwater',
    title: 'PFAS in drinkwater: wat weten we?',
    tag: 'Stoffen',
  },
  {
    slug: 'waterhardheid-verlagen',
    title: 'Waterhardheid verlagen: alle opties',
    tag: 'Waterhardheid',
  },
  {
    slug: 'osmose-water-drinken',
    title: 'Osmosewater drinken: voor- en nadelen',
    tag: 'Filtertechnieken',
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
            Onafhankelijk kennisplatform
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#003F5C] leading-tight mb-4">
            Alles over waterkwaliteit en waterfiltratie
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            WaterfilterPlatform is het onafhankelijke kennisplatform voor iedereen die wil begrijpen wat er in drinkwater zit, hoe waterfilters werken en wat waterhardheid betekent voor hun situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kennisbank"
              className="bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors"
            >
              Verken de kennisbank
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-6 py-3 rounded-xl hover:bg-[#E0F2FE] transition-colors"
            >
              Waterhardheid in uw gemeente
            </Link>
          </div>
        </div>
      </section>

      {/* Statistieken */}
      <section className="border-y border-gray-100 py-5 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { waarde: '330+', label: 'kennisbankartikelen' },
            { waarde: '349', label: 'gemeenten in kaart' },
            { waarde: '12', label: 'stoffen in drinkwater uitgelegd' },
            { waarde: '10', label: 'filtertechnieken vergeleken' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl font-bold text-[#005F8A]">{s.waarde}</span>
              <span className="text-xs text-gray-500 mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Uitgelicht uit de kennisbank */}
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-4">
        <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Uitgelicht uit de kennisbank</h2>
        <p className="text-gray-500 text-sm mb-6">Diepgaande artikelen over actuele onderwerpen in drinkwaterkwaliteit</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {uitgelicht.map((artikel) => (
            <Link
              key={artikel.slug}
              href={`/kennisbank/${artikel.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#005F8A] hover:shadow-md transition-all flex flex-col"
            >
              <span className="inline-block text-xs bg-[#E0F2FE] text-[#005F8A] px-2 py-0.5 rounded-full font-medium mb-3 w-fit">
                {artikel.tag}
              </span>
              <h3 className="font-bold text-gray-900 group-hover:text-[#005F8A] transition-colors text-sm leading-snug flex-1 mb-3">
                {artikel.title}
              </h3>
              <span className="text-xs text-[#005F8A] font-semibold">Lees artikel →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Alle onderwerpen */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-[#003F5C] mb-2 text-center">Ontdek alle onderwerpen</h2>
        <p className="text-gray-500 text-sm text-center mb-8">Van drinkwaternormen en filtertechnieken tot waterhardheid per gemeente</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clusters.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#005F8A] hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-bold text-gray-900 group-hover:text-[#005F8A] transition-colors text-sm leading-snug mb-1">
                {cat.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{cat.desc}</p>
              <span className="inline-block text-xs bg-[#E0F2FE] text-[#005F8A] px-2 py-0.5 rounded-full font-medium">
                {cat.badge}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Populaire onderwerpen */}
      <section className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-lg font-semibold text-[#003F5C] mb-4">Populaire onderwerpen</h2>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Omgekeerde osmose', href: '/omgekeerde-osmose' },
            { label: 'PFAS in leidingwater', href: '/leidingwater/pfas' },
            { label: 'Lood in drinkwater', href: '/leidingwater/lood' },
            { label: 'Actief koolfilter', href: '/filtertechnieken/actief-kool' },
            { label: 'Kokend water kraan', href: '/kokend-water-kraan' },
            { label: 'Waterontharder', href: '/waterontharder' },
            { label: 'NSF/ANSI keurmerken', href: '/keurmerken' },
            { label: 'Microplastics', href: '/waterfilter/microplastics' },
            { label: 'Nitraat in water', href: '/stoffen-in-drinkwater/nitraat-nitriet' },
            { label: 'Waterhardheid Limburg', href: '/waterhardheid/maastricht' },
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
        <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over drinkwater</h2>
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
