import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Beste filterkan 2026: koopgids en shortlist per situatie',
    description:
      'Beste waterfilterkan 2026: Brita, BWT en alternatieven vergeleken op filterprestatie, kosten per liter en smaak. Shortlist per huishouden en wanneer osmose beter is.',
    alternates: { canonical: 'https://waterfilterplatform.nl/beste-filterkan-2026' },
    openGraph: {
      title: 'Beste filterkan 2026 - koopgids per situatie',
      description:
        'Welke waterfilterkan past in 2026 bij jou? Shortlist per profiel, selectiecriteria, kosten per liter en wanneer een osmosefilter beter is.',
      url: 'https://waterfilterplatform.nl/beste-filterkan-2026',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is de beste filterkan in 2026?',
    answer:
      'Er is geen enkele beste filterkan voor iedereen. Brita heeft het grootste aanbod en de breedste verkrijgbaarheid van filters; BWT voegt magnesium toe voor de smaak. Voor een klein huishouden dat vooral chloor en smaak wil verbeteren is een filterkan prima. Wie lood, nitraat of PFAS wil verwijderen heeft een osmosefilter nodig, want geen enkele filterkan doet dat effectief.',
  },
  {
    question: 'Verwijdert een filterkan PFAS, lood of nitraat?',
    answer:
      'Nee, niet effectief. Een standaard filterkan gebruikt actief kool en een ionenwisselaar die chloor, smaak, geur en een deel van de kalk aanpakken. Opgeloste stoffen als lood, nitraat en PFAS blijven grotendeels in het water. Daarvoor is een omgekeerde-osmosefilter de betrouwbare oplossing.',
  },
  {
    question: 'Wat kost een filterkan per liter?',
    answer:
      'Reken op 0,05 tot 0,15 euro per liter, afhankelijk van merk en filterprijs. De aanschaf van de kan is laag (15-40 euro), maar de vervangfilters bepalen de kosten: elke patroon gaat ongeveer 100-150 liter of vier weken mee. Dat is nog altijd veel goedkoper dan flessenwater.',
  },
  {
    question: 'Wanneer is een filterkan niet genoeg?',
    answer:
      'Een filterkan schiet tekort als je aangetoonde PFAS, lood of nitraat boven de norm wilt verwijderen, als je veel water per dag nodig hebt (de doorlooptijd is traag), of als je water voor babyvoeding maximaal zuiver wil. In die gevallen is een osmosefilter de minimale keuze.',
  },
];

const picks = [
  {
    profiel: 'Smaak en chloor verbeteren',
    type: 'Standaard koolstof-filterkan (Brita)',
    prijs: 'EUR 20-40',
    notitie: 'Breedste aanbod en filterverkrijgbaarheid. Prima voor chloor, geur en smaak.',
    highlight: true,
  },
  {
    profiel: 'Lekkerste smaak / magnesium',
    type: 'Mineraliserende filterkan (BWT)',
    prijs: 'EUR 25-45',
    notitie: 'Voegt magnesium toe voor een rondere smaak; verder vergelijkbaar met andere kannen.',
    highlight: false,
  },
  {
    profiel: 'Groot huishouden / hoog verbruik',
    type: 'Grote kan of dispenser (8L+)',
    prijs: 'EUR 30-60',
    notitie: 'Meer volume per vulling, maar nog steeds trage doorloop en alleen smaakverbetering.',
    highlight: false,
  },
  {
    profiel: 'Lood, nitraat of PFAS verwijderen',
    type: 'Osmosefilter (geen filterkan)',
    prijs: 'EUR 150-899',
    notitie: 'Een filterkan kan dit niet. Voor diepe filtratie is omgekeerde osmose nodig.',
    highlight: false,
  },
];

export default function BesteFilterkan2026Page() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Beste filterkan 2026', url: 'https://waterfilterplatform.nl/beste-filterkan-2026' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Beste filterkan 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste filterkan 2026: koopgids per situatie
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Welke <strong>waterfilterkan</strong> past in 2026 het beste bij jou? Dat hangt af van wat je
            wilt bereiken: alleen smaak verbeteren, of ook verontreinigingen verwijderen. We geven een{' '}
            <strong>shortlist per profiel</strong>, de selectiecriteria, de kosten per liter en wanneer
            een filterkan tekortschiet.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/filterkan"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Alles over filterkannen
            </Link>
            <Link
              href="/vergelijken/osmose-vs-filterkan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmose vs filterkan
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer
          question="Wat is de beste filterkan in 2026?"
          answer="De beste filterkan hangt af van je doel. Brita heeft het breedste aanbod en de makkelijkst verkrijgbare filters; BWT voegt magnesium toe voor de smaak. Een filterkan is ideaal om chloor en smaak te verbeteren, maar verwijdert geen lood, nitraat of PFAS. Wil je dat wel, dan is een osmosefilter de minimale keuze."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Shortlist per profiel</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            In plaats van een enkele winnaar kiezen we het beste type filterkan per situatie - en geven
            we eerlijk aan wanneer een kan niet volstaat.
          </p>
          <div className="space-y-3">
            {picks.map(p => (
              <div key={p.profiel} className={`rounded-xl border p-4 ${p.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-gray-900">
                    {p.profiel}
                    {p.highlight && (
                      <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Populairste keuze</span>
                    )}
                  </p>
                  <span className="font-semibold text-[#005F8A] shrink-0 text-sm">{p.prijs}</span>
                </div>
                <p className="text-sm text-gray-700"><strong>{p.type}</strong></p>
                <p className="text-sm text-gray-600 mt-1">{p.notitie}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026. WaterfilterPlatform
            is onafhankelijk; lees onze{' '}
            <Link href="/methodologie" className="underline">methodologie</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar let je op bij de keuze?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Wat wil je verwijderen?', 'Voor chloor en smaak volstaat elke kan; voor lood, nitraat of PFAS is een filterkan niet geschikt.'],
              ['Filterkosten per jaar', 'De vervangpatronen bepalen de kosten. Reken kosten per liter, niet alleen de aanschaf.'],
              ['Verkrijgbaarheid filters', 'Brita-patronen zijn overal te koop; let bij kleinere merken op de filterprijs en levering.'],
              ['Volume en doorloop', 'Grote huishoudens hebben baat bij een dispenser; de doorlooptijd blijft traag.'],
              ['Smaakvoorkeur', 'BWT voegt magnesium toe; sommigen vinden dat water daardoor lekkerder smaakt.'],
              ['Wanneer osmose', 'Bij diepe filtratie of babyvoeding is een osmosefilter de betere keuze.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Twijfel je tussen een kan en een osmosefilter? Lees de volledige vergelijking{' '}
            <Link href="/vergelijken/osmose-vs-filterkan" className="text-[#005F8A] underline">osmose vs filterkan</Link>{' '}
            of bekijk de{' '}
            <Link href="/beste-waterfilter/budget-onder-100" className="text-[#005F8A] underline">beste waterfilter onder 100 euro</Link>.
          </p>
        </section>

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie</h2>
          <p className="text-gray-700 leading-relaxed">
            Een filterkan is in 2026 de goedkoopste manier om de smaak van kraanwater te verbeteren. Brita
            blijft de veiligste allrounder door het brede filteraanbod; BWT is interessant voor wie
            magnesium-smaak waardeert. Wil je echter lood, nitraat of PFAS verwijderen, dan is een{' '}
            <strong>osmosefilter</strong> de enige betrouwbare keuze - lees verder over{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">een osmosefilter kopen</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
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
              ['/filterkan', 'Filterkan', 'Alles over waterfilterkannen'],
              ['/vergelijken/osmose-vs-filterkan', 'Osmose vs filterkan', 'Prestaties en kosten vergeleken'],
              ['/kennisbank/brita-vs-bwt', 'Brita vs BWT', 'De twee grootste merken vergeleken'],
              ['/beste-waterfilter/budget-onder-100', 'Beste budget waterfilter', 'Onder 100 euro per jaar'],
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
