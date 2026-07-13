import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HeroIllustration } from '@/components/HeroIllustration';
import { HubCrossLinks } from '@/components/HubCrossLinks';

export const metadata: Metadata = {
  title: 'WaterfilterPlatform — kennisplatform over waterkwaliteit en waterfiltratie',
  description:
    'Alles over drinkwaterkwaliteit, waterfiltratie en waterhardheid in Nederland. Onafhankelijke informatie over stoffen in leidingwater, filtertechnieken en',
  alternates: { canonical: 'https://waterfilterplatform.nl' },
  openGraph: {
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="#005F8A" strokeWidth="1.5"/>
        <path d="M8 7h8M8 11h8M8 15h5" stroke="#005F8A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Drinkwaternormen',
    desc: 'Wie controleert drinkwater in Nederland? EU-richtlijn, Drinkwaterbesluit, RIVM en de 10 waterbedrijven toegelicht.',
    badge: '13 onderwerpen',
  },
  {
    href: '/stoffen-in-drinkwater',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true">
        <path d="M9 3h6M10 3v7l-3.5 6A2 2 0 008.25 19h7.5A2 2 0 0017.5 16L14 10V3" stroke="#005F8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10.5" cy="16" r="1" fill="#005F8A"/>
        <circle cx="13.5" cy="17.5" r="0.8" fill="#005F8A"/>
      </svg>
    ),
    title: 'Stoffen in drinkwater',
    desc: 'PFAS, lood, nitraat, kalk, hormonen en meer: ontdek welke stoffen in Nederlands leidingwater kunnen voorkomen.',
    badge: '12 stoffen',
  },
  {
    href: '/waterhardheid',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true">
        <path d="M12 3C12 3 5 11 5 15a7 7 0 0014 0C19 11 12 3 12 3z" stroke="#005F8A" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 15.5C9.5 17 10.6 17.5 12 17.5" stroke="#005F8A" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Waterhardheid per gemeente',
    desc: 'Hoe hard is het water in uw gemeente? Zoek de exacte hardheidswaarde op voor alle 349 Nederlandse gemeenten.',
    badge: '349 gemeenten',
  },
  {
    href: '/filtertechnieken',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true">
        <path d="M3 4.5h18L13.5 12v6.5l-3-1.5V12L3 4.5z" stroke="#005F8A" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Filtertechnieken',
    desc: 'Leer hoe elke filtertechniek werkt: van actief kool en ultrafiltratie tot omgekeerde osmose en ionenwisseling.',
    badge: '10 technieken',
  },
  {
    href: '/kennisbank',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="#005F8A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="#005F8A" strokeWidth="1.5"/>
        <path d="M8 7h8M8 11h6" stroke="#005F8A" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Kennisbank',
    desc: 'Meer dan 330 diepgaande artikelen over waterkwaliteit, wateronderzoek, filteronderhoud en drinkwaterwetenschap.',
    badge: '330+ artikelen',
  },
  {
    href: '/keurmerken',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true">
        <path d="M12 2L3 6v6c0 5 3.86 9.68 9 11 5.14-1.32 9-6 9-11V6L12 2z" stroke="#005F8A" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#005F8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Keurmerken & certificering',
    desc: 'Ontdek wat NSF/ANSI, Kiwa, ACS en WRAS betekenen en hoe u de certificering van een waterfilter verifieert.',
    badge: '8 keurmerken',
  },
  {
    href: '/keuzehulp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#005F8A" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2.5" stroke="#005F8A" strokeWidth="1.2"/>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#005F8A" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Waterfilter keuzehulp',
    desc: 'Hard water, PFAS, baby, huurwoning of budget? Per situatie een gerichte aanbeveling op basis van uw waterprobleem.',
    badge: 'Keuzehulp',
  },
  {
    href: '/vergelijken',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true">
        <path d="M12 3v18" stroke="#005F8A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 8l-2 5h4L5 8z" stroke="#005F8A" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M19 16l-2-5-2 5h4z" stroke="#005F8A" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M5 8h7M12 16h7" stroke="#005F8A" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Vergelijkingen',
    desc: 'Osmose vs filterkan, waterfilter vs waterontharder: prestaties en kosten eerlijk naast elkaar.',
    badge: 'Objectief',
  },
];

const uitgelicht = [
  {
    slug: 'pfas-drinkwater',
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
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white pt-12 pb-8 md:pt-20 md:pb-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#005F8A] text-sm font-semibold uppercase tracking-wide mb-3">
              Onafhankelijk kennisplatform
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#003F5C] leading-tight mb-4">
              Alles over waterkwaliteit en waterfiltratie
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              WaterfilterPlatform is het onafhankelijke kennisplatform voor iedereen die wil begrijpen wat er in drinkwater zit, hoe waterfilters werken en wat waterhardheid betekent voor hun situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/kennisbank"
                className="bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors text-center"
              >
                Verken de kennisbank
              </Link>
              <Link
                href="/waterhardheid"
                className="border border-[#005F8A] text-[#005F8A] font-semibold px-6 py-3 rounded-xl hover:bg-[#E0F2FE] transition-colors text-center"
              >
                Waterhardheid in uw gemeente
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden md:block">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Actueel — topical banner */}
      <section className="bg-gradient-to-b from-white to-[#E0F2FE]/30 px-4 pb-10">
        <div className="max-w-5xl mx-auto -mt-2">
          <Link
            href="/drinkwaternormen/pfas"
            className="group flex items-center gap-4 bg-[#003F5C] hover:bg-[#005F8A] transition-colors rounded-2xl text-white px-6 py-5 shadow-md"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0 text-yellow-300" aria-hidden="true">
              <path d="M11 2L4 11h6l-1 7 7-9h-6l1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3"/>
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] uppercase tracking-wide opacity-80 font-semibold mb-0.5">Actueel</p>
              <p className="font-semibold text-base md:text-lg leading-tight">
                PFAS in drinkwater — strengere EU-normen vanaf 2026
              </p>
            </div>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Statistieken */}
      <section className="border-y border-gray-100 py-5 px-4 bg-white">
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

      {/* Trust section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center mb-6">
          Waarom WaterfilterPlatform vertrouwen
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                  <path d="M12 2L3 6V12C3 16.97 6.84 21.61 12 23C17.16 21.61 21 16.97 21 12V6L12 2Z" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Onafhankelijke redactie',
              desc: 'Geen adverteerdersinvloed op de inhoud. Artikelen zijn gebaseerd op RIVM-rapporten, EU-richtlijnen en wetenschappelijke literatuur.',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5"/>
                  <path d="M11 8V11L13 13" stroke="#15803D" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 20L17 17" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: 'Actuele informatie',
              desc: 'Alle artikelen worden periodiek bijgewerkt zodra regelgeving, normen of wetenschappelijk inzicht verandert.',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="16" rx="3" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="1.5"/>
                  <path d="M7 9H17M7 13H14" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: 'Wetenschappelijke bronnen',
              desc: 'We verwijzen naar primaire bronnen: Drinkwaterbesluit, WHO-richtlijnen, EFSA-rapporten en peer-reviewed onderzoek.',
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white">
              <div className="shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Uitgelicht uit de kennisbank */}
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-2">Uitgelicht uit de kennisbank</h2>
        <p className="text-gray-500 text-sm mb-6">Diepgaande artikelen over actuele onderwerpen in drinkwaterkwaliteit</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {uitgelicht.map((artikel) => (
            <Link
              key={artikel.slug}
              href={`/kennisbank/${artikel.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <span className="inline-block text-[11px] bg-white text-[#005F8A] px-2.5 py-1 rounded-full font-medium mb-3 w-fit">
                {artikel.tag}
              </span>
              <h3 className="font-bold text-[#003F5C] text-base leading-snug flex-1 mb-4">
                {artikel.title}
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-[#005F8A] font-semibold">Lees artikel</span>
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-[#005F8A] group-hover:translate-x-0.5 transition-all" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Alle onderwerpen */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-2 text-center">Ontdek alle onderwerpen</h2>
        <p className="text-gray-500 text-sm text-center mb-8">Van drinkwaternormen en filtertechnieken tot waterhardheid per gemeente</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clusters.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col min-h-[180px]"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="shrink-0">{cat.icon}</div>
                <h3 className="font-bold text-[#005F8A] text-base leading-tight">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-1">{cat.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] text-[#005F8A] font-medium opacity-80">{cat.badge}</span>
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-[#005F8A] group-hover:translate-x-0.5 transition-all" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
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
              className="text-sm bg-[#F0F9FF] border border-[#BAE6FD]/50 text-[#005F8A] px-3 py-1.5 rounded-lg hover:bg-[#E0F2FE] hover:border-[#005F8A]/30 transition-colors"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Direct naar een oplossing (hub-cross-links) */}
      <section className="max-w-5xl mx-auto px-4 py-6">
        <HubCrossLinks heading="Direct naar een oplossing" />
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="home-cta"
          label="Bekijk de zuiver-water-kranen bij PureAqua"
          title="Zuiver water uit je eigen kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

        <CTABanner context="algemeen" />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over drinkwater</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="border border-gray-200 rounded-xl p-4 group hover:border-gray-300 transition-colors">
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
