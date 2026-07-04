import type { Metadata } from 'next';
import Link from 'next/link';
import { gemeenten } from '@/data/gemeenten';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { WaterhardheidMapNL } from '@/components/WaterhardheidMapNL';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Hoe hard is het water bij u? Waterhardheid per gemeente 2026',
  description:
    'Hoe hard is het water in jouw gemeente? Bekijk de waterhardheid (°dH) voor alle Nederlandse gemeenten en wat dat betekent voor jouw waterfilter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterhardheid' },
  openGraph: {
    title: 'Waterhardheid per gemeente — 349 gemeenten in Nederland',
    description: 'Hoe hard is het water bij jou thuis? Zoek je gemeente op en lees wat waterhardheid betekent voor kalk, apparaten en drinkwater.',
  },
};

const faqItems = [
  {
    question: 'Wat is waterhardheid?',
    answer:
      'Waterhardheid is de hoeveelheid opgeloste calcium (Ca²⁺) en magnesium (Mg²⁺) in leidingwater. Hoe hoger de waarde in °dH (graden Duitse hardheid), hoe meer kalk het water bevat. In Nederland varieert dit van 4°dH (zacht, Zeeland) tot 22°dH (zeer hard, Limburg).',
  },
  {
    question: 'Hoe hard is het water in mijn gemeente?',
    answer:
      'Zoek je gemeente op via onze gemeente-overzichtspagina. We hebben de waterhardheid voor alle 349 Nederlandse gemeenten in kaart gebracht, inclusief advies over kalkvorming en de beste filteroplossing per hardheidsklasse.',
  },
  {
    question: 'Is hard water ongezond?',
    answer:
      'Hard water is niet ongezond voor de mens — calcium en magnesium zijn zelfs gezonde mineralen. Maar voor apparaten is het wél problematisch: kalkafzetting verkort de levensduur van waterkokers, koffiemachines en cv-ketels en verhoogt het energieverbruik.',
  },
  {
    question: 'Hoe verwijder ik kalk uit leidingwater?',
    answer:
      'Een omgekeerde osmose filter verwijdert 95–99% van het calcium en magnesium. Dat beschermt je apparaten volledig en geeft puur drinkwater. Een waterontharder is een alternatief voor de hele huisinstallatie, maar filtert geen andere stoffen.',
  },
];

const provincies = [...new Set(gemeenten.map(g => g.provincie))].sort();

export default function WaterhardheidPage() {
  const hardeGemeenten = gemeenten.filter(g => g.hardheid >= 16).sort((a, b) => b.hardheid - a.hardheid).slice(0, 10);
  const zachteGemeenten = gemeenten.filter(g => g.hardheid < 8).sort((a, b) => a.hardheid - b.hardheid).slice(0, 10);

  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterhardheid', url: 'https://waterfilterplatform.nl/waterhardheid' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'CollectionPage',
            name: 'Waterhardheid per gemeente Nederland',
            url: 'https://waterfilterplatform.nl/waterhardheid',
            description: 'Waterhardheid (dH) per gemeente, gevolgen voor kalk en apparaten, en filter-advies per hardheidsklasse.',
            inLanguage: 'nl-NL',
            isPartOf: {
              '@type': 'WebSite',
              name: 'WaterfilterPlatform',
              url: 'https://waterfilterplatform.nl',
            },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: gemeenten.length,
              itemListElement: gemeenten.slice(0, 50).map((g, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                name: `Waterhardheid ${g.naam}`,
                url: `https://waterfilterplatform.nl/waterhardheid/${g.slug}`,
              })),
            },
          },
          {
            '@type': 'Dataset',
            name: 'Waterhardheid per gemeente in Nederland (dH)',
            description:
              'Indicatieve waterhardheid in Duitse hardheidsgraden (dH) per Nederlandse gemeente, gebaseerd op openbare gegevens van de drinkwaterbedrijven, met hardheidsklasse (zacht, gemiddeld, hard).',
            url: 'https://waterfilterplatform.nl/waterhardheid',
            inLanguage: 'nl-NL',
            license: 'https://waterfilterplatform.nl/methodologie',
            isAccessibleForFree: true,
            creator: { '@id': 'https://waterfilterplatform.nl/#organization' },
            spatialCoverage: { '@type': 'Place', name: 'Nederland' },
            variableMeasured: {
              '@type': 'PropertyValue',
              name: 'Waterhardheid',
              unitText: 'dH (Duitse hardheidsgraad)',
            },
            measurementTechnique: 'Openbare gegevens drinkwaterbedrijven, omgerekend naar dH',
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Waterhardheid</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid per gemeente
          </h1>
          <p className="text-gray-600 text-lg">
            De waterhardheid verschilt sterk per regio in Nederland. Zoek jouw gemeente op en lees wat de hardheid betekent voor kalk, je apparaten en de keuze voor een waterfilter.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <QuickAnswer answer="Waterhardheid in Nederland varieert van 4°dH (zacht, Noord-Holland) tot 19°dH (zeer hard, Limburg). Hard water veroorzaakt kalkafzetting in apparaten en leidingen. Boven 12°dH is een waterfilter of ontharder aan te raden. Zoek de waterhardheid van jouw gemeente direct op via de kaart hieronder." />

        <figure>
          <WaterhardheidMapNL className="w-full h-auto rounded-2xl shadow-sm bg-white" />
          <figcaption className="text-xs text-gray-500 text-center mt-2">
            Indicatieve waterhardheid per provincie in graden Duitse hardheid (°dH). Zeeland en het noorden hebben zacht water; Noord-Holland en Limburg het hardst.
          </figcaption>
        </figure>

        <MethodologyBadge lastReviewed="2026-05-22" />

        {/* Hardheid uitleg */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat betekent waterhardheid?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-sm mb-4">
            {[
              { label: 'Zacht', range: '< 4°dH', kleur: 'bg-green-100 text-green-800' },
              { label: 'Matig', range: '4-8°dH', kleur: 'bg-lime-100 text-lime-800' },
              { label: 'Matig hard', range: '8-12°dH', kleur: 'bg-amber-100 text-amber-800' },
              { label: 'Hard', range: '12-18°dH', kleur: 'bg-orange-100 text-orange-800' },
              { label: 'Zeer hard', range: '> 18°dH', kleur: 'bg-red-100 text-red-800' },
            ].map(h => (
              <div key={h.label} className={`${h.kleur} rounded-xl p-2`}>
                <p className="font-semibold">{h.label}</p>
                <p className="text-xs">{h.range}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Hard water bevat veel kalk (calcium en magnesium). Dit veroorzaakt aanslag op ketels, koffiezetapparaten en kranen. Een omgekeerde osmose filter verwijdert nagenoeg alle kalk.
          </p>
        </section>

        {/* Hardste en zachtste gemeenten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Welke gemeenten hebben het hardste water?</h2>
            <div className="space-y-2">
              {hardeGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/waterhardheid/${g.slug}`}
                  className="flex items-center justify-between p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
                >
                  <div>
                    <span className="font-medium text-gray-800">{g.naam}</span>
                    <span className="text-xs text-gray-500 ml-2">{g.provincie}</span>
                  </div>
                  <span className="font-bold text-red-700">{g.hardheid}°dH</span>
                </Link>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Welke gemeenten hebben het zachtste water?</h2>
            <div className="space-y-2">
              {zachteGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/waterhardheid/${g.slug}`}
                  className="flex items-center justify-between p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <div>
                    <span className="font-medium text-gray-800">{g.naam}</span>
                    <span className="text-xs text-gray-500 ml-2">{g.provincie}</span>
                  </div>
                  <span className="font-bold text-green-700">{g.hardheid}°dH</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Alle gemeenten per provincie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Wat is de waterhardheid per gemeente per provincie?</h2>
          <div className="space-y-6">
            {provincies.map(provincie => {
              const pgemeenten = gemeenten.filter(g => g.provincie === provincie).sort((a, b) => a.naam.localeCompare(b.naam));
              return (
                <div key={provincie}>
                  <h3 className="font-bold text-gray-700 mb-2 text-sm uppercase tracking-wide">{provincie}</h3>
                  <div className="flex flex-wrap gap-2">
                    {pgemeenten.map(g => {
                      const kleur =
                        g.categorie === 'zacht' ? 'bg-green-50 text-green-800 border-green-200' :
                        g.categorie === 'matig' ? 'bg-lime-50 text-lime-800 border-lime-200' :
                        g.categorie === 'matig hard' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                        g.categorie === 'hard' ? 'bg-orange-50 text-orange-800 border-orange-200' :
                        'bg-red-50 text-red-800 border-red-200';
                      return (
                        <Link
                          key={g.slug}
                          href={`/waterhardheid/${g.slug}`}
                          className={`text-xs border rounded-full px-3 py-1 hover:shadow-sm transition-shadow ${kleur}`}
                        >
                          {g.naam} ({g.hardheid}°)
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Dieper inzicht in kalk en waterhardheid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Calcium, magnesium en bicarbonaat: gezondheidseffecten, normen en verwijdering.</p>
            </Link>
            <Link href="/waterhardheid/behandelingsadvies" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Behandelingsadvies per hardheidszone</h3>
              <p className="text-sm text-gray-600">Welke aanpak past bij uw waterhardheid? Overzicht per °dH-categorie.</p>
            </Link>
            <Link href="/vergelijken/waterontharder-vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterontharders vergelijken</h3>
              <p className="text-sm text-gray-600">Ionenwisselaar, zoutloos, magnetisch: welk type past bij uw situatie?</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling als filtertechniek</h3>
              <p className="text-sm text-gray-600">Werking van het harsbed, regeneratie en effectiviteit uitgelegd.</p>
            </Link>
          </div>
        </section>

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="waterhardheid-cta"
          label="Bekijk de waterontharders bij PureAqua"
          title="Last van hard water?"
          sub="Bekijk het aanbod waterontharders bij onze partner PureAqua."
        />

        <CTABanner context="waterhardheid" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterhardheid</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</p>
              <p className="text-sm text-gray-600">Calcium en magnesium: de oorzaak van hardheid en hun effect op gezondheid.</p>
            </Link>
            <Link href="/waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterontharder</p>
              <p className="text-sm text-gray-600">Centrale ontharders voor de hele huisinstallatie: werking, kosten en merken.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</p>
              <p className="text-sm text-gray-600">Welke oplossing past het beste bij uw hardwaterprobleem en budget?</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</p>
              <p className="text-sm text-gray-600">Wettelijke grenzen voor hardheid en mineralen in Nederlands drinkwater.</p>
            </Link>
          </div>
        </section>

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen over waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kennisbank/kalk-in-huis', label: 'Kalk in huis: oorzaken en oplossingen' },
              { href: '/kennisbank/waterhardheid-verlagen', label: 'Waterhardheid verlagen: alle opties' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose filter uitleg' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen' },
              { href: '/kennisbank/waterfilter-vergelijken', label: 'Waterfilters vergelijken' },
              { href: '/kokend-water-kraan/met-filter', label: 'Kokend water kraan met filter' },
            ].map((l: { href: string; label: string }) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
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
              <Link key="/waterhardheid/regio" href="/waterhardheid/regio" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Waterhardheid per regio Nederland</p>
              </Link>
          </div>
        </section>
      </div>
    </>
  );
}
