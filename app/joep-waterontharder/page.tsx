import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'JOEP waterontharder: specificaties, kosten en voor wie',
    description:
      'JOEP waterontharder (AquaSens): WRAS-gecertificeerd, 5 m3/u, miniregeneratie en 20 jaar harsgarantie. Specificaties, kosten en voor wie het geschikt is.',
    alternates: { canonical: 'https://waterfilterplatform.nl/joep-waterontharder' },
    openGraph: {
      title: 'JOEP waterontharder: specificaties, kosten en voor wie',
      description:
        'Wat biedt de JOEP waterontharder van AquaSens, wat kost hij en voor wie is hij geschikt? Specificaties, USPs en eerlijke aandachtspunten.',
      url: 'https://waterfilterplatform.nl/joep-waterontharder',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is de JOEP waterontharder?',
    answer:
      'JOEP is een Nederlandse ionenwisselaar-waterontharder van AquaSens uit Joure. Het is een compact model dat met een fijne hars werkt en zich profileert als no-nonsense: een toestel dat zacht water levert zonder ingewikkelde keuze. Volgens de fabrikant heeft het een doorstroom tot 5 m3 per uur, is het WRAS-gecertificeerd en zit er 20 jaar garantie op de hars.',
  },
  {
    question: 'Wat kost een JOEP waterontharder?',
    answer:
      'De aanschafprijs vraag je op bij de verkoper (JOEP wordt onder andere via PureAqua en watervanjoep.nl verkocht). Daarnaast is er een optioneel serviceabonnement van 8,49 euro per maand dat onderdelen, arbeid en voorrijden dekt, met periodiek een servicebeurt. Reken voor de lopende kosten ook zout (volgens de fabrikant gemiddeld circa 15 kg per persoon per jaar) en wat water en stroom voor de regeneratie.',
  },
  {
    question: 'Is JOEP een goede waterontharder?',
    answer:
      'JOEP scoort op papier sterk op de punten die ertoe doen: WRAS-certificering, een hoge doorstroom zonder drukverlies, zuinig zoutverbruik, slimme functies (miniregeneratie, lekdetectie) en een lange harsgarantie. Of het voor jou de beste keuze is, hangt af van je waterhardheid, huishoudgrootte en budget. Vergelijk capaciteit, zoutverbruik, certificering en totale kosten altijd met andere merken.',
  },
  {
    question: 'Voor wie is een JOEP waterontharder geschikt - en voor wie niet?',
    answer:
      'JOEP is geschikt voor huishoudens in een hard-watergebied die een onderhoudsarme, gecertificeerde ionenwisselaar willen met een eenvoudig model en Nederlandse service. Minder zinvol is een waterontharder als je al zacht water hebt (onder circa 8 dH) of als je binnen een jaar verhuist. Wil je geen natrium toevoegen, overweeg dan een onbehandeld tappunt voor drinkwater of osmose.',
  },
  {
    question: 'Hoeveel zout en water gebruikt JOEP per regeneratie?',
    answer:
      'Volgens de fabrieksbrochure gebruikt JOEP per regeneratie ongeveer 0,9 tot 1,5 kg zout en circa 49 liter water, en duurt een regeneratie ongeveer een uur (standaard s nachts om 02:00 uur). Bij hoog verbruik kan het toestel een extra miniregeneratie uitvoeren zodat je zacht water houdt.',
  },
];

const specs = [
  ['Type', 'Ionenwisselaar met zout (compact)'],
  ['Doorstroomcapaciteit', 'Tot 5.000 liter (5 m3) per uur'],
  ['Zoutverbruik', 'Gemiddeld circa 15 kg per persoon per jaar'],
  ['Per regeneratie', 'Circa 0,9-1,5 kg zout, circa 49 liter water, circa 1 uur'],
  ['Afmetingen', '48 (H) x 27 (B) x 48,5 (D) cm'],
  ['Waterdruk', '1,5 - 5 bar'],
  ['Garantie hars', '20 jaar (volgens fabrikant)'],
  ['Garantie onderdelen', '2 jaar; eerste jaar all-in'],
  ['Serviceabonnement', '8,49 euro per maand (optioneel, all-in)'],
  ['Certificering', 'WRAS (Brits onafhankelijk keurmerk)'],
  ['Fabrikant', 'AquaSens, Joure (Nederland)'],
];

export default function JoepWaterontharderPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'JOEP', url: 'https://waterfilterplatform.nl/joep-waterontharder' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'JOEP', description: 'Nederlandse ionenwisselaar-waterontharder van AquaSens (Joure), WRAS-gecertificeerd.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>JOEP</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            JOEP waterontharder: specificaties, kosten en voor wie
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>JOEP</strong> is een Nederlandse ionenwisselaar-waterontharder van AquaSens (Joure)
            die zich profileert als no-nonsense: een toestel dat gewoon zacht water levert. Hieronder de
            specificaties, de sterke punten, de kosten en een eerlijke afweging - met bronvermelding en
            zonder verzonnen testoordelen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/beste-waterontharder-2026"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Beste waterontharder 2026
            </Link>
            <Link
              href="/waterontharder/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterontharder kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant AquaSens (brochure)', 'WRAS', 'Battelle Institute', 'RIVM']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Is de JOEP waterontharder een goede keuze?"
          answer="JOEP is een Nederlandse ionenwisselaar van AquaSens die op papier sterk scoort: WRAS-gecertificeerd, doorstroom tot 5 m3 per uur zonder drukverlies, zuinig zoutverbruik (volgens de fabrikant circa 15 kg per persoon per jaar), slimme miniregeneratie en 20 jaar harsgarantie. Of het de beste keuze is hangt af van je waterhardheid, huishoudgrootte en budget - vergelijk altijd met andere merken."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Specificaties (volgens de fabrikant)</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <tbody>
                {specs.map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800 w-1/2">{k}</td>
                    <td className="py-2.5 px-3 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Specificaties afkomstig van de fabrieksbrochure van AquaSens. Controleer actuele waarden en
            prijzen bij de verkoper. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Sterke punten van JOEP</h2>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['WRAS-gecertificeerd', 'Een onafhankelijk Brits keurmerk voor watercontactmateriaal; vergelijkbaar van strekking met Kiwa in Nederland.'],
              ['Fijne hars, hoge doorstroom', 'Het grote contactoppervlak van de fijne hars maakt een doorstroom tot 5 m3 per uur mogelijk zonder noemenswaardig drukverlies.'],
              ['Miniregeneratie', 'Bij hoger verbruik voert het toestel automatisch een extra korte regeneratie uit, zodat je zacht water houdt.'],
              ['Zuinig zoutverbruik', 'Volgens de fabrikant gemiddeld circa 15 kg zout per persoon per jaar - gunstig voor de lopende kosten.'],
              ['20 jaar garantie op de hars', 'De hars is het hart van een ontharder; een lange garantie geeft zekerheid over de levensduur.'],
              ['Slimme functies', 'Lekdetectie, automatische zomer-/wintertijd en gegevensbehoud bij stroomuitval.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je eerst begrijpen hoe ontharden werkt? Lees onze uitleg over{' '}
            <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] underline">ionenwisseling</Link>{' '}
            en de{' '}
            <Link href="/waterontharder/werking" className="text-[#005F8A] underline">werking van een waterontharder</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Levert een waterontharder energiebesparing op?</h2>
          <p className="text-gray-700 leading-relaxed">
            Hard water veroorzaakt kalkaanslag op verwarmingselementen, wat het rendement van een boiler
            kan verlagen. Een vaak aangehaald onderzoek van het Battelle Institute meldt dat onthard water
            de efficientie van warmwatertoestellen in testomstandigheden sterk op peil houdt (genoemd wordt
            tot tientallen procenten verschil ten opzichte van zwaar verkalkte toestellen). De werkelijke
            besparing in huis hangt sterk af van je waterhardheid, apparaat en gebruik; behandel zulke
            percentages dus als indicatie, niet als garantie. Lees ook onze pagina over{' '}
            <Link href="/waterontharder/cv-ketel" className="text-[#005F8A] underline">waterontharder en de cv-ketel</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Aandachtspunten en voor wie minder geschikt</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Een model', 'JOEP is one-size-fits-all. Prettig eenvoudig, maar er is geen keuze in capaciteit voor afwijkende situaties.'],
              ['Serviceabonnement apart', 'Het all-in serviceabonnement (8,49 euro per maand) is optioneel en komt bovenop de aanschaf.'],
              ['Registratie voor garantie', 'Registreer het toestel tijdig (binnen de in de voorwaarden genoemde termijn) om de garantie te behouden.'],
              ['Natrium', 'Zoals elke zout-ionenwisselaar voegt JOEP natrium toe; bij een zoutarm dieet is een onbehandeld of osmose-tappunt voor drinkwater verstandig.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Een waterontharder is doorgaans pas zinvol vanaf circa 8 dH. Check eerst je lokale{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid</Link> en lees de afweging{' '}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">waterontharder versus osmose</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Waar koop je JOEP?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            JOEP wordt geleverd door AquaSens en is verkrijgbaar via onze partner PureAqua en via
            watervanjoep.nl, plus dealers en installateurs. Zelfinstallatie is mogelijk met de
            meegeleverde handleiding.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://shop.pureaqua.nl/collections/waterontharders"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              rel="sponsored"
            >
              Bekijk JOEP bij PureAqua
            </a>
            <a
              href="https://watervanjoep.nl"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
              rel="nofollow"
            >
              watervanjoep.nl
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Transparantie: WaterfilterPlatform is gelieerd aan PureAqua en kan een vergoeding ontvangen
            wanneer je via onze links iets aanschaft. Dit beinvloedt onze redactionele beoordeling niet;
            de specificaties komen van de fabrikant. Lees onze{' '}
            <Link href="/methodologie" className="underline">methodologie</Link>.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de JOEP waterontharder</h2>
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
              ['/beste-waterontharder-2026', 'Beste waterontharder 2026', 'Koopgids met shortlist en merken'],
              ['/kennisbank/waterontharder-merken', 'Waterontharder-merken', 'Overzicht van alle merken'],
              ['/waterontharder/kopen', 'Waterontharder kopen', 'Waar let je op bij aanschaf'],
              ['/vergelijken/waterontharder-vergelijken', 'Waterontharders vergelijken', 'Systemen naast elkaar'],
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
