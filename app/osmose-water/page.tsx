import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Osmosewater: eigenschappen, gezondheid en toepassingen',
  description:
    'Alles over osmosewater: gezondheid, mineralen, pH, remineralisatie en gebruik voor koffie, koken en baby. Uitleg van eigenschappen en vergelijkingen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water' },
  openGraph: {
    title: 'Osmosewater: eigenschappen, gezondheid en toepassingen',
    description:
      'Alles over osmosewater: gezondheid, mineralen, pH, remineralisatie en gebruik voor koffie, koken en baby. Uitleg van eigenschappen en vergelijkingen.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Is osmosewater gezond om dagelijks te drinken?',
    answer:
      'Osmosewater is veilig voor dagelijks gebruik. Het bevat nauwelijks mineralen (TDS doorgaans 5–30 mg/L), wat betekent dat u uw mineralen via voeding moet binnenkrijgen — wat de meeste mensen al doen. Remineralisatie via een calciet- of magnesiumcartridge is optioneel maar verbetert de smaak en pH.',
  },
  {
    question: 'Wat is de pH van osmosewater?',
    answer:
      'Osmosewater heeft een licht zure pH van 5,5–6,5, doordat het vrijwel geen bufferende mineralen bevat. Dit is geen gezondheidsrisico; het lichaam reguleert de bloedzuur-base-balans onafhankelijk van wat u drinkt. Een remineralisatiecartridge brengt de pH terug naar 7,0–7,5.',
  },
  {
    question: 'Hoe verschilt osmosewater van bronwater?',
    answer:
      'Bronwater heeft een consistente mineraalsamenstelling die door wetgeving is vastgelegd. Osmosewater is vrijwel mineraalvrij maar consistent puur. Voor dagelijks drinken zijn beide veilig; osmosewater biedt meer consistentie in kwaliteit ongeacht de bronwaterkwaliteit.',
  },
  {
    question: 'Is osmosewater beter voor koffie?',
    answer:
      'Voor koffiezetten geldt een optimaal TDS-bereik van 75–150 mg/L. Puur osmosewater (5–30 mg/L) geeft vlakke, te zachte espresso. Met een remineralisatiecartridge ingesteld op 80–120 mg/L levert osmosewater uitstekend resultaat en beschermt het apparaat tegen kalkaanslag.',
  },
  {
    question: 'Mag ik osmosewater gebruiken voor flesvoeding?',
    answer:
      'Osmosewater is veilig voor babyvoeding. De WHO en fabrikanten bevelen echter geen gedestilleerd of sterk gedemineraliseerd water aan als enige drank voor zuigelingen. Het water moet wel voldoen aan de babywater-normen voor nitraat (&lt;10 mg/L) en bacteriën. Osmosewater voldoet hier ruimschoots aan.',
  },
];

const subPages = [
  {
    category: 'Gezondheid',
    pages: [
      { title: 'Is osmosewater gezond?', href: '/osmose-water/gezond', desc: 'Mineralen, TDS en dagelijks gebruik: wat zegt de wetenschap?' },
      { title: 'Gezondheidsvoordelen', href: '/osmose-water/gezondheidsvoordelen', desc: 'Overzicht van bewezen en veronderstelde voordelen van RO-water.' },
      { title: 'Osmosewater voor baby', href: '/osmose-water/baby', desc: 'Veiligheid, nitraatgrens en gebruik voor flesvoeding.' },
      { title: 'Osmosewater en sport', href: '/osmose-water/sport', desc: 'Hydratatie, elektrolyten en osmosewater voor atleten.' },
    ],
  },
  {
    category: 'Eigenschappen',
    pages: [
      { title: 'pH van osmosewater', href: '/osmose-water/ph', desc: 'Waarom heeft osmosewater een lage pH en maakt dat uit?' },
      { title: 'Mineralen in osmosewater', href: '/osmose-water/mineralen', desc: 'Wat is er verwijderd en wanneer is remineralisatie zinvol?' },
      { title: 'Remineraliseren', href: '/osmose-water/remineraliseren', desc: 'Calciet, magnesium en blended-cartridges voor betere smaak.' },
      { title: 'Smaak van osmosewater', href: '/osmose-water/smaak', desc: 'Waarom smaakt osmosewater anders dan kraanwater?' },
    ],
  },
  {
    category: 'Vergelijkingen',
    pages: [
      { title: 'Osmosewater vs bronwater', href: '/osmose-water/vs-bronwater', desc: 'Kwaliteit, mineralen, prijs en milieu-impact vergeleken.' },
      { title: 'Osmosewater vs mineraalwater', href: '/osmose-water/vs-mineraalwater', desc: 'Verpakt mineraalwater vs zelf gefiltreerd osmosewater.' },
      { title: 'Osmosewater vs gedestilleerd', href: '/osmose-water/vs-gedistilleerd', desc: 'Vrijwel mineraalvrij maar op verschillende manieren gemaakt.' },
      { title: 'Microplastics in osmosewater', href: '/osmose-water/microplastics', desc: 'RO-membranen houden &gt;99% van microplastics tegen.' },
    ],
  },
  {
    category: 'Gebruik',
    pages: [
      { title: 'Osmosewater voor koffie', href: '/osmose-water/koffie', desc: 'Optimaal TDS voor espresso en filterkoffie: 75–150 mg/L.' },
      { title: 'Koken met osmosewater', href: '/osmose-water/koken', desc: 'Effect op pasta, rijst en smaak bij koken.' },
      { title: 'Osmosewater voor thee', href: '/osmose-water/thee', desc: 'Lage mineraalconcentratie voor delicate groene thee.' },
      { title: 'Baby-flesvoeding', href: '/osmose-water/baby-flesvoeding', desc: 'Osmosewater als basis voor babymelk: aanbevelingen.' },
    ],
  },
];

export default function OsmoseWaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmosewater', url: 'https://waterfilterplatform.nl/osmose-water' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Osmosewater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater: eigenschappen, gezondheid en toepassingen
          </h1>
          <QuickAnswer answer="Osmosewater is het product van omgekeerde osmose: vrijwel mineraalvrij water (TDS 5–30 mg/L) dat veilig is voor dagelijks gebruik, koken, koffiezetten en babyvoeding. Optionele remineralisatie verbetert de smaak en brengt de pH naar 7,0–7,5." />
          <p className="mt-4 text-gray-600 leading-relaxed">
            Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">omgekeerde-osmosefilter</Link> verwijdert
            95–99% van alle opgeloste stoffen — van PFAS en lood tot kalk en nitraat. Het resultaat is
            extreem puur water dat andere eigenschappen heeft dan kraanwater of bronwater. Dit cluster
            behandelt alle vragen over de eigenschappen, gezondheid en praktisch gebruik van osmosewater.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {subPages.map((group) => (
          <section key={group.category}>
            <h2 className="text-xl font-semibold text-[#003F5C] mb-4">{group.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="border border-gray-200 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all group"
                >
                  <h3 className="font-semibold text-[#003F5C] group-hover:text-[#005F8A] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-xl font-semibold text-[#003F5C] mb-4">
            Osmosewater in context
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Osmosewater is niet hetzelfde als gedestilleerd water — het productieproces
            verschilt en de resterende TDS ook. Het is ook geen mineraalwater: het bevat
            doelbewust weinig mineralen, terwijl mineraalwater juist om zijn mineraalsamenstelling
            wordt gewaardeerd.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Of remineralisatie nodig is, hangt af van het gebruik:
            voor babyvoeding, koffie met een professionele machine en dagelijks drinken
            is een <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] hover:underline">remineralisatiecartridge</Link> aan
            te raden. Voor koken, thee of aquariumgebruik is puur osmosewater vaak
            juist de voorkeur.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wilt u zelf osmosewater produceren? Bekijk dan de <Link href="/vergelijken/omgekeerde-osmose-vergelijken" className="text-[#005F8A] hover:underline">vergelijking
            van omgekeerde-osmosesystemen</Link> of de pagina over{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">osmosefilter kopen</Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-xl font-semibold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmosewater
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#003F5C] mb-4">Gerelateerde onderwerpen</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Omgekeerde osmose uitleg', href: '/omgekeerde-osmose' },
              { label: 'Osmose filter kopen', href: '/omgekeerde-osmose/kopen' },
              { label: 'Filtertechnieken vergelijken', href: '/filtertechnieken/vergelijking' },
              { label: 'Waterhardheid per gemeente', href: '/waterhardheid' },
              { label: 'Stoffen in drinkwater', href: '/stoffen-in-drinkwater' },
              { label: 'Waterfilter keuzehulp', href: '/keuzehulp' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm bg-[#E0F2FE] text-[#005F8A] px-3 py-1.5 rounded-full hover:bg-[#BAE6FD] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
      {/* orphan-fix: meer in dit cluster */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Meer in dit cluster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link key="/osmose-water/fermenteren" href="/osmose-water/fermenteren" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Osmosewater voor fermenteren</p>
              </Link>
              <Link key="/osmose-water/ijssteen" href="/osmose-water/ijssteen" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Osmosewater voor ijsblokjes</p>
              </Link>
              <Link key="/osmose-water/koolzuur" href="/osmose-water/koolzuur" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Bruisend osmosewater</p>
              </Link>
              <Link key="/osmose-water/wijn" href="/osmose-water/wijn" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Osmosewater voor wijnmakers</p>
              </Link>
              <Link key="/osmose-water/zout-water" href="/osmose-water/zout-water" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Osmosewater en zout koken</p>
              </Link>
              <Link key="/osmose-water/zwembad" href="/osmose-water/zwembad" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Osmosewater voor zwembad en spa</p>
              </Link>
          </div>
        </section>
      </div>
    </>
  );
}
