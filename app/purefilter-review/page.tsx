import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'PureFilter Mineral+ review: claims, bewijs en eerlijke afweging',
    description:
      'Onafhankelijke review van PureFilter Mineral+: claims (PFAS, microplastics, fluoride, NSF) naast de bewijsstatus, en wat nog niet bevestigd is.',
    alternates: { canonical: 'https://waterfilterplatform.nl/purefilter-review' },
    openGraph: {
      title: 'PureFilter Mineral+ review: claims, bewijs en eerlijke afweging',
      description:
        'Wat claimt PureFilter Mineral+, wat is daarvan onafhankelijk bevestigd en voor wie is het logisch? Een evidence-first review met bronbeleid en disclosure.',
      url: 'https://waterfilterplatform.nl/purefilter-review',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

// Elke claim wordt expliciet als bevestigd/onbevestigd gemarkeerd. We tonen geen
// certificaatnummers, ratings of removal-percentages die we niet primair konden verifieren.
const claims = [
  ['Verwijdert PFAS', 'Geclaimd', 'Niet onafhankelijk bevestigd', 'Vraag een contaminantspecifiek testrapport of NSF/ANSI 53-listing op; technologie bepaalt of dit aannemelijk is.'],
  ['Verwijdert microplastics', 'Geclaimd', 'Niet onafhankelijk bevestigd', 'Gezondheidsimpact van microplastics kent volgens de WHO nog kennislacunes; vraag testmethode en deeltjesgrootte op.'],
  ['Verwijdert zware metalen', 'Geclaimd', 'Niet onafhankelijk bevestigd', 'Te breed; vraag per metaal (lood, koper, etc.) om bewijs, niet een verzamelclaim.'],
  ['Verwijdert fluoride', 'Geclaimd', 'Niet onafhankelijk bevestigd', 'Fluoride vereist doorgaans apart bewijs; niet af te leiden uit een generieke filterclaim.'],
  ['Verwijdert chloor (smaak/geur)', 'Geclaimd', 'Aannemelijk, nog te checken', 'Past technisch bij koolstoffilters; bevestig met productspec of label.'],
  ['Verwijdert medicijnresten', 'Geclaimd', 'Niet onafhankelijk bevestigd', 'Emerging contaminants; extra streng beoordelen, vraag expliciete test/standaard.'],
  ['NSF/ANSI 42 en 53', 'Geclaimd', 'Listingnummer niet gevonden', 'Een certificeringsclaim is pas hard met een verifieerbaar listingnummer en certifier.'],
  ['NSF/ANSI 61 en 372', 'Geclaimd', 'Listingnummer niet gevonden', 'Gaan over materiaalveiligheid/loodgehalte van onderdelen, niet over contaminantverwijdering.'],
  ['Swedish Mineral Rock remineralisatie (Mg/Ca/K)', 'Geclaimd', 'Niet gekwantificeerd', 'Zonder mg/L na filtratie is dit vooral smaakpositionering, geen aangetoonde voedingswaarde.'],
];

const faqItems = [
  {
    question: 'Wat is PureFilter Mineral+?',
    answer:
      'PureFilter Mineral+ wordt op de markt gebracht als waterfilter dat verontreinigingen uit kraanwater zou verwijderen en het water daarna remineraliseert voor de smaak. De fabrikant claimt onder meer reductie van PFAS, microplastics, zware metalen, fluoride en chloor, plus NSF/ANSI-standaarden. Wij konden deze claims in onze controle niet onafhankelijk bevestigen met certificaatnummers of labrapporten; we presenteren ze daarom als geclaimd, niet als vaststaand feit.',
  },
  {
    question: 'Zijn de claims van PureFilter Mineral+ onafhankelijk bevestigd?',
    answer:
      'Niet in onze controle. We vonden geen verifieerbare certificaatlistings, certificaatnummers of labrapporten die de removal-claims of de genoemde NSF/ANSI-standaarden per contaminant onderbouwen. Dat betekent niet automatisch dat het filter niet werkt; het betekent dat het bewijs op het moment van controle (mei 2026) ontbrak. Vraag bij de verkoper om de contaminantspecifieke testrapporten en officiele listings voordat je op een specifieke claim vertrouwt.',
  },
  {
    question: 'Verwijdert een waterfilter zoals PureFilter echt PFAS en microplastics?',
    answer:
      'Voor de techniek geldt: geactiveerde kool, ionenwisseling en hogedrukmembranen (zoals omgekeerde osmose) zijn volgens de EPA bewezen relevante technologieen voor PFAS, en RO is vaak meer dan 90 procent effectief voor brede PFAS-verwijdering. Of een specifiek product dat haalt, moet per systeem worden aangetoond met een test of certificering. Voor microplastics is reductie technisch mogelijk, maar de gezondheidsimpact kent volgens de WHO nog belangrijke kennislacunes.',
  },
  {
    question: 'Voegt remineralisatie iets toe aan je gezondheid?',
    answer:
      'Remineralisatie voegt na filtratie mineralen zoals magnesium, calcium en kalium toe, vooral voor een vollere smaak. Of dat voedingskundig iets toevoegt hangt af van de hoeveelheid (mg per liter), en die werd voor PureFilter niet gekwantificeerd. Je haalt het grootste deel van je mineralen uit voeding, niet uit water. Zie remineralisatie dus eerder als smaakvoordeel dan als bewezen gezondheidswinst. Dit is algemene informatie en geen medisch advies.',
  },
  {
    question: 'Voor wie is PureFilter Mineral+ logisch en voor wie niet?',
    answer:
      'Het kan logisch zijn als je een neutralere smaak wilt of extra zekerheid zoekt en je de claims eerst zelf bij de verkoper laat onderbouwen met testrapporten. Minder logisch is het als je een harde garantie wilt op een specifieke contaminant (zoals PFAS of fluoride): vraag dan eerst om de bijbehorende certificering, of kies een systeem met een aantoonbare NSF/ANSI-listing. Nederlands kraanwater is op zichzelf al veilig om te drinken; een filter is een keuze voor smaak of extra zekerheid, geen noodzaak.',
  },
];

export default function PureFilterReviewPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'PureFilter Mineral+ review: claims, bewijs en eerlijke afweging',
          description:
            'Een evidence-first review van PureFilter Mineral+: we zetten de fabrikantclaims naast de bewijsstatus en benoemen expliciet wat niet onafhankelijk bevestigd is.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/purefilter-review',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'PureFilter review', url: 'https://waterfilterplatform.nl/purefilter-review' },
        ]}
      />
      <SchemaOrg
        schema={[
          { '@type': 'Brand', name: 'PureFilter', description: 'Merk van waterfilters dat zich positioneert met filtratie plus remineralisatie (Mineral+).' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>PureFilter review</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PureFilter Mineral+ review: claims naast het bewijs
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>PureFilter Mineral+</strong> wordt verkocht als waterfilter dat verontreinigingen
            verwijdert en het water daarna remineraliseert. In deze review zetten we de claims naast de
            bewijsstatus. Eerlijk vooraf: we konden de claims tijdens onze controle (mei 2026) niet
            onafhankelijk bevestigen met certificaatnummers of labrapporten. We presenteren ze daarom als
            geclaimd, met per punt wat er nog bevestigd moet worden - en zonder verzonnen oordelen of
            ratings.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['US EPA', 'WHO', 'NSF/ANSI-standaarden', 'RIVM']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Is PureFilter Mineral+ een goede koop?"
          answer="Dat valt op dit moment niet hard te zeggen. PureFilter Mineral+ claimt reductie van onder meer PFAS, microplastics, zware metalen, fluoride en chloor plus NSF/ANSI-standaarden, maar wij konden deze claims in onze controle niet onafhankelijk bevestigen met certificaatnummers of labrapporten. De filtertechnieken die zulke stoffen kunnen verwijderen (geactiveerde kool, ionenwisseling, membranen) zijn op zichzelf bewezen, maar of dit specifieke product de claims waarmaakt, moet je vooraf bij de verkoper laten onderbouwen met testrapporten. Behandel de claims tot die tijd als geclaimd, niet als bewezen."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Claims naast de bewijsstatus</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hieronder staat wat de fabrikant claimt, of we het onafhankelijk konden bevestigen, en wat er
            nodig is om de claim hard te maken. We tonen bewust geen removal-percentages of
            certificaatnummers die we niet konden verifieren.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 text-left">
                  <th className="py-2.5 px-3 font-bold text-gray-800">Claim</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Bron</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Bewijsstatus</th>
                  <th className="py-2.5 px-3 font-bold text-gray-800">Wat nog nodig is</th>
                </tr>
              </thead>
              <tbody>
                {claims.map(([claim, bron, status, nodig]) => (
                  <tr key={claim} className="border-b border-gray-100 align-top">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{claim}</td>
                    <td className="py-2.5 px-3 text-gray-600">{bron}</td>
                    <td className="py-2.5 px-3 text-gray-700">{status}</td>
                    <td className="py-2.5 px-3 text-gray-600">{nodig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Bron van de claims: productcommunicatie van het merk. Bewijsstatus vastgesteld op basis van
            wat in onze controle (mei 2026) primair te verifieren was. Waar onafhankelijke certificering
            of labdata ontbreken, staat dat expliciet vermeld.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zegt de techniek wel?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Los van dit specifieke product is er wel veel bekend over de technieken. Volgens de Amerikaanse
            EPA zijn geactiveerde kool, ionenwisseling en hogedrukmembranen (zoals omgekeerde osmose)
            relevante technologieen voor PFAS, waarbij RO en nanofiltratie vaak meer dan 90 procent
            effectief zijn voor brede PFAS-verwijdering. RO produceert daarbij wel een geconcentreerde
            afvalstroom en verwijdert ook mineralen. De EPA benadrukt dat consumenten productprestaties,
            onderhoud, vervangingsschemas en onafhankelijke certificering moeten meewegen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je begrijpen welke techniek bij welk probleem past? Lees onze uitleg over{' '}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">waterfilters en PFAS</Link>,{' '}
            <Link href="/waterfilter/microplastics" className="text-[#005F8A] underline">microplastics filteren</Link>{' '}
            en{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De remineralisatie-claim (Mineral+)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PureFilter positioneert zich met remineralisatie: na het filteren worden mineralen zoals
            magnesium, calcium en kalium toegevoegd. Dat kan de smaak voller maken. Of het voedingskundig
            iets toevoegt, hangt af van de hoeveelheid (mg per liter) - en die werd voor PureFilter niet
            gekwantificeerd. Omdat je het grootste deel van je mineralen uit voeding haalt, beschouwen we
            remineralisatie eerder als smaakvoordeel dan als aangetoonde gezondheidswinst. Dit is algemene
            informatie en geen medisch advies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer achtergrond vind je in onze uitleg over{' '}
            <Link href="/omgekeerde-osmose/remineralisatie" className="text-[#005F8A] underline">mineralen toevoegen na osmose</Link>{' '}
            en{' '}
            <Link href="/kennisbank/water-mineralen-gezondheid" className="text-[#005F8A] underline">mineralen in water en gezondheid</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onze beoordelingsmethode</h2>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm">
            {[
              ['Gebruikte bronnen', 'Productcommunicatie van het merk, plus onafhankelijke bronnen (EPA, WHO, NSF/ANSI-standaarden, RIVM) voor de techniek.'],
              ['Certificaten gevonden?', 'Nee - geen verifieerbare NSF/ANSI-listing of certificaatnummer voor de geclaimde contaminanten in onze controle.'],
              ['Labrapporten gevonden?', 'Nee - geen primair labrapport met testmethode en resultaat per contaminant.'],
              ['Laatste controledatum', 'Mei 2026. Claims en specificaties kunnen sindsdien zijn aangevuld; controleer bij de verkoper.'],
              ['Commerciele disclosure', 'WaterfilterPlatform kan via partnerlinks een vergoeding ontvangen. Dat beinvloedt deze beoordeling niet; we publiceren geen onbevestigde claim als feit.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}:</strong> {d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voorlopige conclusie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PureFilter Mineral+ belooft op papier veel: brede contaminantverwijdering plus remineralisatie.
            Die belofte sluit aan op technieken die op zichzelf bewezen zijn. Het probleem is niet de
            techniek, maar het bewijs: wij vonden geen onafhankelijke certificering of labdata die de
            specifieke claims onderbouwen. Daarom geven we bewust geen cijferoordeel of sterren. Ons advies
            is nuchter: wil je dit filter overwegen, vraag de verkoper dan eerst om de contaminantspecifieke
            testrapporten en officiele NSF/ANSI-listings, en beoordeel die voordat je op een specifieke
            claim (zoals PFAS of fluoride) vertrouwt.
          </p>
          <p className="text-xs text-gray-400">
            Disclaimer: deze pagina is informatief en vervangt geen wateranalyse of professioneel advies.
            Voor gezondheidsvragen raadpleeg je een arts. Claims zijn gecontroleerd op datum van publicatie;
            waar bewijs ontbreekt, is dat vermeld. Lees onze{' '}
            <Link href="/methodologie" className="underline">methodologie</Link>.
          </p>
        </section>

<AffiliateCTA
          destination="theSource"
          campaign="omgekeerde-osmose"
          content="purefilter-review-cta"
          label="Bekijk The Source: een RO-systeem met verifieerbare specificaties"
          title="Liever een osmosesysteem met verifieerbare specificaties?"
          sub="Waar wij de PureFilter-claims niet onafhankelijk konden bevestigen, is The Source van onze partner PureAqua een omgekeerde-osmosesysteem met NSF/ANSI 58 en transparante specs."
        />

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over PureFilter Mineral+</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/waterfilter', 'Waterfilter', 'Alle filtertypes en hoe je kiest'],
              ['/pfas-waterfilter', 'Waterfilter en PFAS', 'Welke techniek verwijdert PFAS echt'],
              ['/waterfilter/onder-aanrecht', 'Onder-aanrecht waterfilter', 'Use-cases, installatie en onderhoud'],
              ['/keurmerken/nsf-ansi-42-53', 'NSF/ANSI 42 en 53', 'Wat deze certificeringen betekenen'],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
