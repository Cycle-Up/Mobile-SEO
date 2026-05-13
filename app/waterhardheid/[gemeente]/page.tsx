import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { gemeenten, getGemeente, getHardheidLabel } from '@/data/gemeenten';
import { WaterhardheidCard } from '@/components/WaterhardheidCard';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

interface PageProps {
  params: Promise<{ gemeente: string }>;
}

export async function generateStaticParams() {
  return gemeenten.map(g => ({ gemeente: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) return {};

  return {
    title: `Waterhardheid ${gemeente.naam} — ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie)})`,
    description: `De waterhardheid in ${gemeente.naam} is ${gemeente.hardheid}°dH — ${getHardheidLabel(gemeente.categorie).toLowerCase()}. Lees wat dit betekent voor kalk, je apparaten en de keuze voor een waterfilter.`,
    alternates: { canonical: `https://waterfilterplatform.nl/waterhardheid/${gemeente.slug}` },
  };
}

export default async function GemeentePage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const faqItems = [
    {
      question: `Hoe hard is het water in ${gemeente.naam}?`,
      answer: `Het water in ${gemeente.naam} heeft een hardheid van ${gemeente.hardheid}°dH. Dit wordt geclassificeerd als "${getHardheidLabel(gemeente.categorie).toLowerCase()}".`,
    },
    {
      question: `Wie levert het drinkwater in ${gemeente.naam}?`,
      answer: `Het drinkwater in ${gemeente.naam} wordt geleverd door ${gemeente.waterbedrijf}.`,
    },
    {
      question: `Heb ik in ${gemeente.naam} een waterfilter nodig?`,
      answer:
        gemeente.hardheid >= 16
          ? `Ja, het water in ${gemeente.naam} is hard (${gemeente.hardheid}°dH). Dit veroorzaakt kalkafzetting in je apparaten. Een omgekeerde osmose filter is een effectieve oplossing.`
          : gemeente.hardheid >= 12
          ? `Het water in ${gemeente.naam} is matig hard (${gemeente.hardheid}°dH). Kalkafzetting kan voorkomen bij warmwaterapparaten. Een filter is aan te raden.`
          : `Het water in ${gemeente.naam} is relatief zacht (${gemeente.hardheid}°dH). Kalk is minder een probleem, maar een osmosefilter verbetert de smaak en zuiverheid verder.`,
    },
  ];

  const naburigeGemeenten = gemeenten
    .filter(g => g.provincie === gemeente.provincie && g.slug !== gemeente.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterhardheid', url: 'https://waterfilterplatform.nl/waterhardheid' },
          { name: gemeente.naam, url: `https://waterfilterplatform.nl/waterhardheid/${gemeente.slug}` },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterhardheid" className="hover:text-[#005F8A]">Waterhardheid</Link>
            <span className="mx-2">/</span>
            <span>{gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid {gemeente.naam}
          </h1>
          <p className="text-gray-600 text-lg">
            Het leidingwater in {gemeente.naam} ({gemeente.provincie}) is <strong>{getHardheidLabel(gemeente.categorie).toLowerCase()}</strong> met een hardheid van <strong>{gemeente.hardheid}°dH</strong>. Geleverd door {gemeente.waterbedrijf}.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Kaart */}
        <section>
          <WaterhardheidCard gemeente={gemeente} />
        </section>

        {/* Wat betekent dit? */}
        <section className="prose max-w-none">
          <h2>Wat betekent een hardheid van {gemeente.hardheid}°dH?</h2>
          {gemeente.hardheid >= 18 && (
            <p>
              Het water in {gemeente.naam} is <strong>zeer hard</strong>. Dit is het hoogste niveau van waterhardheid en veroorzaakt snel zichtbare kalkafzetting op kranen, douches en in apparaten zoals waterkokers, koffiemachines en vaatwassers.
            </p>
          )}
          {gemeente.hardheid >= 12 && gemeente.hardheid < 18 && (
            <p>
              Het water in {gemeente.naam} is <strong>hard</strong>. Je merkt dit aan kalkaanslag op kranen en verwarmingselementen. Apparaten zoals waterkokers en koffiemachines hebben regelmatig onderhoud nodig.
            </p>
          )}
          {gemeente.hardheid >= 8 && gemeente.hardheid < 12 && (
            <p>
              Het water in {gemeente.naam} is <strong>matig hard</strong>. Enige kalkvorming is mogelijk, maar het is minder een probleem dan in hardere gebieden. Een filter verbetert met name de smaak en zuiverheid.
            </p>
          )}
          {gemeente.hardheid < 8 && (
            <p>
              Het water in {gemeente.naam} is relatief <strong>zacht</strong>. Kalk is minder een probleem. Het water heeft van nature weinig mineralen. Een osmosefilter verbetert de zuiverheid en smaak verder.
            </p>
          )}

          <h2>Effect op keukenapparaten</h2>
          <ul>
            <li><strong>Waterkoker</strong> — {gemeente.hardheid >= 16 ? 'ontkalken elke 1-2 maanden nodig' : gemeente.hardheid >= 10 ? 'ontkalken elk kwartaal aanbevolen' : 'minimale kalkaanslag, weinig onderhoud nodig'}</li>
            <li><strong>Koffiemachine</strong> — {gemeente.hardheid >= 16 ? 'frequente ontkalkingscyclus nodig voor optimale werking' : gemeente.hardheid >= 10 ? 'regelmatig ontkalken aanbevolen' : 'weinig problemen, minder frequent onderhoud'}</li>
            <li><strong>Vaatwasser</strong> — {gemeente.hardheid >= 12 ? 'zout toevoegen en hoge zoutstand instellen' : 'laag tot gemiddeld zoutverbruik'}</li>
            <li><strong>Koken en thee zetten</strong> — {gemeente.hardheid >= 12 ? 'kalkafzetting in pan, zichtbaar bij koken' : 'nauwelijks zichtbare kalkafzetting'}</li>
          </ul>
        </section>

        {/* CTA afhankelijk van hardheid */}
        {gemeente.hardheid >= 12 ? (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
            <p className="font-bold text-orange-800 mb-2">
              ⚠️ Hard water in {gemeente.naam} — overweeg een osmosefilter
            </p>
            <p className="text-orange-700 text-sm mb-4">
              Bij {gemeente.hardheid}°dH is een omgekeerde osmose filter aan te raden. Het verwijdert vrijwel alle kalk en beschermt je apparaten.
            </p>
            <a
              href="https://www.pureaqua.nl"
              target="_blank"
              rel="noopener"
              className="inline-block bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-800 transition-colors text-sm"
            >
              Bekijk PureAqua osmosefilter kraan →
            </a>
          </div>
        ) : (
          <CTABanner context="waterhardheid" variant="compact" />
        )}

        {/* Naburige gemeenten */}
        {naburigeGemeenten.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Andere gemeenten in {gemeente.provincie}</h2>
            <div className="flex flex-wrap gap-2">
              {naburigeGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/waterhardheid/${g.slug}`}
                  className="text-sm border border-gray-200 rounded-full px-3 py-1.5 hover:border-[#005F8A] hover:text-[#005F8A] transition-colors"
                >
                  {g.naam} ({g.hardheid}°)
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
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
      </div>
    </>
  );
}
