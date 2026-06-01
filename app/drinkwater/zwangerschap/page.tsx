import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Drinkwater tijdens Zwangerschap: Wat is Veilig?',
  description: 'Welk drinkwater is veilig tijdens de zwangerschap? Nitraat, lood, PFAS, chloor — welke stoffen gevaarlijk zijn en hoe osmosewater beschermt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/zwangerschap' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is kraanwater veilig om te drinken tijdens de zwangerschap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands leidingwater voldoet aan strenge EU-normen en is voor de meeste zwangere vrouwen veilig. Aandachtspunten zijn lood (oude leidingen), nitraat (hoog bij privéputten) en PFAS. Twijfel je aan je leidingen? Laat het water testen of gebruik een osmosefilter voor extra zekerheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke stoffen in drinkwater zijn gevaarlijk tijdens zwangerschap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lood schaadt de neurologische ontwikkeling van het ongeboren kind (geen veilige ondergrens). Nitraat interfereert met zuurstoftransport (relevant boven 25 mg/L). PFAS zijn hormoonverstorende stoffen zonder veilige grens. Chloor in normale concentraties is niet gevaarlijk maar kan smaak beïnvloeden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter gevaarlijke stoffen voor zwangere vrouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een RO-membraan verwijdert 95–99% van lood, 85–95% van nitraat, 90%+ van PFAS en vrijwel al het chloor. Een osmosefilter is de meest complete waterzuiveringsmethode voor thuis en geeft maximale zekerheid tijdens de zwangerschap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag je kraanwater drinken als je zwanger bent in een oud huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woningen gebouwd voor 1970 kunnen loden leidingen of loodgesoldeerde verbindingen hebben. Lood lost op in stilstaand water (eerste ochtendglas). Laat het water 1–2 minuten doorlopen voor gebruik, of installeer een waterfilter met loodverwijdering. Laat bij twijfel het water analyseren.',
      },
    },
  ],
};

export default function DrinkwaterZwangerschapPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwater', item: 'https://waterfilterplatform.nl/drinkwater' },
              { '@type': 'ListItem', position: 3, name: 'Zwangerschap', item: 'https://waterfilterplatform.nl/drinkwater/zwangerschap' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwater" className="hover:underline">Drinkwater</Link> &rsaquo;{' '}
          <span>Zwangerschap</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwater tijdens Zwangerschap: Wat is Veilig?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Tijdens de zwangerschap wil je zeker weten dat wat je drinkt veilig is voor jou en je ongeboren kind. Nederlands leidingwater is over het algemeen veilig, maar er zijn situaties waarin extra voorzorg verstandig is.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/babywater/osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater voor baby</h3>
            <p className="text-sm text-gray-600">Is osmosewater geschikt voor babyvoeding tijdens en na de zwangerschap?</p>
          </Link>
          <Link href="/osmose-water/gezondheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater en gezondheid</h3>
            <p className="text-sm text-gray-600">De gezondheidseffecten van gefilterd osmosewater.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater</h3>
            <p className="text-sm text-gray-600">Risicos van PFAS voor zwangere vrouwen en hoe u ze kunt verminderen.</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wettelijke normen voor drinkwaterkwaliteit in Nederland.</p>
          </Link>
        </div>
      </section>

        <HealthDisclaimer />
        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Lood: het grootste risico in oud leidingwerk
        </h2>
        <p className="text-gray-700 mb-4">
          Lood is de meest zorgwekkende stof in drinkwater voor zwangere vrouwen. Er bestaat geen veilige blootstellingsdrempel: zelfs lage concentraties kunnen de neurologische ontwikkeling van het ongeboren kind beïnvloeden.
        </p>
        <p className="text-gray-700 mb-4">
          In woningen gebouwd voor 1970 kunnen loden leidingen aanwezig zijn. Ook nieuwere woningen kunnen loodgesoldeerde verbindingen hebben. Lood lost sneller op in water dat lang stilstaat (eerste ochtendglas).
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800 font-semibold">Aanbeveling bij oud huis:</p>
          <ul className="list-disc pl-4 text-amber-700 text-sm mt-2 space-y-1">
            <li>Laat elke ochtend het water 1–2 minuten doorlopen voordat je het drinkt</li>
            <li>Laat het kraanwater analyseren op lood (gecertificeerd laboratorium)</li>
            <li>Overweeg een osmosefilter dat 95–99% van lood verwijdert</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nitraat: extra aandacht bij privéputten
        </h2>
        <p className="text-gray-700 mb-4">
          Nitraat in hoge concentraties interfereert met het zuurstoftransport in het bloed (methemoglobinemie). De EU-norm is 50 mg/L; de WHO adviseert bij voorkeur onder 25 mg/L voor zwangere vrouwen en zuigelingen.
        </p>
        <p className="text-gray-700 mb-4">
          Nederlands leidingwater voldoet ruimschoots aan de norm. Het risico zit bij <strong>privéputten</strong> in landbouwgebieden waar stikstofhoudende meststoffen het grondwater verontreinigen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          PFAS: opkomende zorg
        </h2>
        <p className="text-gray-700 mb-4">
          PFAS (per- en polyfluoralkylstoffen) zijn hormoonverstorende stoffen die zijn gelinkt aan verstoorde schildklierfunctie, verlaagd geboortegewicht en immuniteitseffecten bij het kind. Er bestaat geen veilige grens; de EU heeft in 2026 strengere normen ingevoerd (4 ng/L voor de vier voornaamste PFAS samen).
        </p>
        <p className="text-gray-700 mb-4">
          Nederlandse drinkwaterbedrijven monitoren actief en voldoen aan de normen. In gebieden nabij industrieterreinen of vliegvelden kunnen concentraties lokaal verhoogd zijn.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter als extra zekerheid
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmosefilter</Link> is de meest uitgebreide waterzuivering voor thuisgebruik. Het RO-membraan verwijdert:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Lood: 95–99%</li>
          <li>Nitraat: 85–95%</li>
          <li>PFAS: 90%+</li>
          <li>Chloor en desinfectiebijproducten: &gt;99%</li>
          <li>Bacteriën en virussen: &gt;99,9%</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor zwangere vrouwen die extra zekerheid willen — met name in huizen met oud leidingwerk of in regio&rsquo;s met hogere PFAS-concentraties — is een osmosefilter een investering die gerust van €1–3 per dag neerkomt.
        </p>

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Veilig water tijdens de zwangerschap</h3>
          <p className="text-gray-700 mb-4">
            Een osmosefilter geeft maximale bescherming voor jou en je ongeboren kind — verwijdert lood, PFAS, nitraat en chloor in één systeem.
          </p>
          <Link href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veelgestelde vragen
        </h2>
        <div className="space-y-4 mb-8">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm">
          Lees ook: <Link href="/kennisbank/drinkwater-zwangerschap" className="text-[#005F8A] underline">Drinkwater tijdens zwangerschap: volledige gids</Link> en <Link href="/kennisbank/pfas-drinkwater" className="text-[#005F8A] underline">PFAS in drinkwater: risico&rsquo;s en filtering</Link>.
        </p>
      </main>
    </>
  );
}
