import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'AquaTru alternatief: osmose zonder werkblad-unit? (2026)',
    description:
      'Zoek je een alternatief voor de AquaTru countertop osmose? Vergelijk filtering, capaciteit, kosten en ruimte met een onder-aanrecht osmosesysteem in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/aquatru-alternatief' },
    openGraph: {
      title: 'AquaTru alternatief vergelijken - beste opties 2026',
      description:
        'AquaTru is een osmose-unit op het werkblad zonder installatie. Een onder-aanrecht osmosesysteem filtert net zo grondig, maar bespaart ruimte en kost minder per liter.',
      url: 'https://waterfilterplatform.nl/aquatru-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor de AquaTru?',
    answer:
      'Het sterkste alternatief is een onder-aanrecht omgekeerde-osmosesysteem. AquaTru is een osmose-unit die op het werkblad staat en geen installatie vereist; hij filtert grondig via omgekeerde osmose. Een onder-aanrecht systeem filtert net zo breed, maar verdwijnt uit het zicht, levert water uit een aparte kraan en heeft doorgaans lagere kosten per liter.',
  },
  {
    question: 'Is er een goedkoper alternatief dan AquaTru?',
    answer:
      'Op de lange termijn vaak wel. AquaTru werkt met proprietaire filters die je periodiek moet vervangen; die kosten tikken aan. Een onder-aanrecht osmosesysteem heeft een vergelijkbare of lagere aanschaf en gebruikt standaard filters, waardoor de kosten per liter meestal lager liggen voor wie dagelijks gefilterd water gebruikt.',
  },
  {
    question: 'Filtert een onder-aanrecht osmose net zo goed als AquaTru?',
    answer:
      'Ja. Beide gebruiken omgekeerde osmose en bereiken een vergelijkbaar resultaat: een RO-membraan houdt circa 95 tot 99 procent van opgeloste stoffen en veel verontreinigingen tegen. Het verschil zit niet in de filtertechniek maar in de vorm: AquaTru staat op het werkblad zonder installatie, een onder-aanrecht systeem zit verborgen met een eigen kraan en een groter doorlopend volume.',
  },
  {
    question: 'Wat zijn de nadelen van een countertop osmose zoals AquaTru?',
    answer:
      'Een werkblad-unit neemt permanent aanrechtruimte in, heeft een beperkt tankvolume en vraagt handmatig bijvullen van het reservoir. Daar staat tegenover dat je niets hoeft te installeren, wat handig is in een huurwoning. Een onder-aanrecht systeem lost de ruimte- en volumekwestie op, maar vraagt een eenmalige installatie onder de gootsteen.',
  },
  {
    question: 'Voor wie blijft AquaTru een goede keuze?',
    answer:
      'AquaTru is logisch als je osmosewater wilt zonder te boren of installeren, bijvoorbeeld in een huurwoning of als tijdelijke oplossing. Heb je wel ruimte onder het aanrecht en gebruik je dagelijks veel water, dan is een vast osmosesysteem doorgaans voordeliger, ruimtebesparend en onderhoudsarmer.',
  },
];

const topAlternatieven = [
  {
    naam: 'Onder-aanrecht osmose',
    prijs: 'EUR 200-500',
    filtering: 'Breed (osmose 95-99%)',
    capaciteit: 'Hoog, continu',
    ruimte: 'Verborgen onder aanrecht',
    highlight: true,
    notitie: 'Zelfde filtering als AquaTru, maar uit het zicht en lager per liter.',
  },
  {
    naam: 'AquaTru countertop (referentie)',
    prijs: 'EUR 400-600 + filters',
    filtering: 'Breed (osmose)',
    capaciteit: 'Beperkt tankvolume',
    ruimte: 'Op het werkblad',
    highlight: false,
    notitie: 'Geen installatie, maar neemt aanrechtruimte in; proprietaire filters.',
  },
  {
    naam: '4-in-1 osmosekraan',
    prijs: 'EUR 699-899',
    filtering: 'Breed (osmose) + kokend/bruisend',
    capaciteit: 'Hoog, continu',
    ruimte: 'Verborgen, een kraan',
    highlight: false,
    notitie: 'Osmose plus kokend en bruisend water uit een kraan; completer pakket.',
  },
  {
    naam: 'Onder-aanrecht koolstoffilter',
    prijs: 'EUR 80-200',
    filtering: 'Chloor, smaak (geen TDS-doel)',
    capaciteit: 'Hoog, continu',
    ruimte: 'Verborgen onder aanrecht',
    highlight: false,
    notitie: 'Goedkoper voor smaak; filtert minder breed dan osmose.',
  },
];

export default function AquaTruAlternatiefPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'AquaTru alternatief: osmose zonder werkblad-unit? (2026)',
          description: 'Zoek je een alternatief voor de AquaTru countertop osmose? Vergelijk filtering, capaciteit, kosten en ruimte met een onder-aanrecht osmosesysteem in 2026.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/aquatru-alternatief',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'AquaTru alternatief', url: 'https://waterfilterplatform.nl/aquatru-alternatief' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>AquaTru alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            AquaTru alternatief: osmose zonder unit op het aanrecht
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>AquaTru</strong> is een osmose-unit die op het werkblad staat en geen installatie
            vraagt. Toch zoeken veel mensen een <strong>alternatief voor AquaTru</strong> - omdat de unit
            aanrechtruimte inneemt, het tankvolume beperkt is, of omdat ze een <strong>goedkoper
            alternatief voor AquaTru</strong> willen met dezelfde filtering. We zetten de serieuze opties
            eerlijk naast elkaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Wat is omgekeerde osmose?
            </Link>
            <Link
              href="/beste-osmosefilter-2026"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Beste osmosefilter 2026
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['US EPA', 'RIVM', 'Vewin', 'NSF/ANSI-standaarden']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat is het beste AquaTru alternatief?"
          answer="Het sterkste alternatief is een onder-aanrecht omgekeerde-osmosesysteem. Dat filtert net zo breed als de AquaTru - beide gebruiken osmose - maar verdwijnt uit het zicht, levert water continu uit een aparte kraan en kost doorgaans minder per liter dankzij standaard filters. AquaTru blijft handig als je osmosewater wilt zonder iets te installeren, bijvoorbeeld in een huurwoning."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat doet de AquaTru precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AquaTru is een osmosesysteem in de vorm van een werkblad-unit. Voordat je alternatieven
            beoordeelt, is het goed te weten wat je er wel en niet mee bereikt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Grondige osmose-filtering', 'Een RO-membraan houdt een breed pakket verontreinigingen en opgeloste stoffen tegen.'],
              ['Geen installatie', 'Plug-and-play op het werkblad; handig voor een huurwoning of tijdelijk gebruik.'],
              ['Neemt aanrechtruimte in', 'De unit staat permanent op je werkblad en heeft een beperkt tankvolume.'],
              ['Proprietaire filters', 'Je bent afhankelijk van merkfilters, wat de kosten per liter verhoogt.'],
              ['Handmatig bijvullen', 'Je vult het reservoir zelf en wacht tot het systeem het water heeft gefilterd.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            AquaTru is sterk voor wie osmose wil zonder klussen. Wie ruimte wil besparen of lagere kosten
            per liter zoekt, kijkt naar een vaste opstelling. Lees meer over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
            en de{' '}
            <Link href="/waterfilter/onder-aanrecht" className="text-[#005F8A] underline">onder-aanrecht waterfilters</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De beste alternatieven voor AquaTru vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vergelijken we de serieuze alternatieven, met de AquaTru als referentie. Let op de
            verhouding tussen filtering, capaciteit en ruimtebeslag.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filtering</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Capaciteit</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Ruimte</th>
                </tr>
              </thead>
              <tbody>
                {topAlternatieven.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.filtering}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.capaciteit}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.ruimte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom onder-aanrecht osmose het sterkste alternatief is</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wil je de grondige filtering van AquaTru behouden zonder unit op het aanrecht, dan is een{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">onder-aanrecht osmosesysteem</Link>{' '}
            de logische keuze. Zelfde techniek, maar verborgen en met meer volume.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Zelfde filtering', 'Ook osmose: een membraan houdt circa 95 tot 99 procent van opgeloste stoffen tegen.'],
              ['Ruimte bespaard', 'Het systeem zit onder de gootsteen; op het aanrecht staat alleen een slanke kraan.'],
              ['Lagere kosten per liter', 'Standaard filters in plaats van proprietaire patronen; filters gaan lang mee.'],
              ['Continu volume', 'Geen beperkt tankje; gefilterd water is er direct, zoveel als je nodig hebt.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je naast osmose ook kokend of bruisend water uit dezelfde kraan? Bekijk dan een{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 kraan</Link>{' '}
            of vergelijk de{' '}
            <Link href="/beste-osmosefilter-2026" className="text-[#005F8A] underline">beste osmosefilters van 2026</Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer blijf je bij AquaTru?</h2>
          <div className="space-y-3">
            {[
              ['Je wilt niet installeren', 'Geen boren of aansluiten onder de gootsteen - handig in een huurwoning of tijdelijk.'],
              ['Je verhuist vaak', 'Een werkblad-unit verhuist zo mee, zonder demontage van een vaste opstelling.'],
              ['Aanrechtruimte is geen probleem', 'Heb je ruimte over op het werkblad, dan is de unit een prima plug-and-play osmose.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">-</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{t}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie: welk alternatief past bij jou?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            AquaTru is een sterke plug-and-play osmose voor wie niets wil installeren. Maar voor wie ruimte
            wil besparen, meer volume nodig heeft of lagere kosten per liter zoekt, biedt een{' '}
            <strong>onder-aanrecht osmosesysteem</strong> dezelfde filtering in een praktischer vorm.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Verder vergelijken? Lees over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>, het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmosesysteem</Link>{' '}
            of lees of{' '}
            <Link href="/kennisbank/osmose-water-drinken" className="text-[#005F8A] underline">osmose water gezond is om te drinken</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over AquaTru alternatieven</h2>
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
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Werking, kosten, voordelen en nadelen'],
              ['/waterfilter/onder-aanrecht', 'Onder-aanrecht waterfilter', 'Use-cases, installatie en onderhoud'],
              ['/waterdrop-alternatief', 'Waterdrop alternatief', 'Vergelijk osmose-merken'],
              ['/beste-osmosefilter-2026', 'Beste osmosefilter 2026', 'Koopgids met shortlist en criteria'],
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
