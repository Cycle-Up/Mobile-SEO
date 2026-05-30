import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Waterdrop: osmose- en waterfilters, types en afweging (2026)',
    description:
      'Wat maakt Waterdrop? Neutraal overzicht van de osmosesystemen, onder-aanrecht- en kraanfilters van het merk, hoe ze werken en waar je op let bij de keuze.',
    alternates: { canonical: 'https://waterfilterplatform.nl/waterdrop' },
    openGraph: {
      title: 'Waterdrop: osmose- en waterfilters, types en afweging (2026)',
      description:
        'Neutraal overzicht van Waterdrop: osmosesystemen en filters, werking, certificering en waar je op let bij de keuze.',
      url: 'https://waterfilterplatform.nl/waterdrop',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is Waterdrop?',
    answer:
      'Waterdrop is een internationaal merk van waterfilters, met onder meer tankloze omgekeerde-osmosesystemen (RO) voor onder het aanrecht, kraanfilters en filterkannen. Het merk richt zich op huishoudelijke drinkwaterfiltratie en biedt systemen in verschillende capaciteiten en prijsklassen.',
  },
  {
    question: 'Welke types filters maakt Waterdrop?',
    answer:
      'Het assortiment loopt uiteen van filterkannen en kraanfilters tot tankloze onder-aanrecht osmosesystemen. De osmosesystemen verwijderen via een membraan een breed pakket verontreinigingen; de eenvoudiger filters richten zich vooral op smaak en chloor. Welk type past, hangt af van je doel en budget.',
  },
  {
    question: 'Waar moet ik op letten bij een Waterdrop osmosesysteem?',
    answer:
      'Let op dezelfde punten als bij elk RO-systeem: de afvalwaterverhouding, of er certificering (zoals NSF/ANSI) is voor de geclaimde contaminanten, de filter- en membraankosten en -intervallen, de capaciteit en de garantie. Vergelijk die punten met andere merken voordat je kiest; controleer specificaties en prijzen bij de verkoper.',
  },
  {
    question: 'Is Waterdrop een goede keuze?',
    answer:
      'Waterdrop heeft een breed assortiment en populaire tankloze RO-systemen. Of het de beste keuze is, hangt af van je waterdoel, budget en welke certificering je belangrijk vindt. Beoordeel claims op basis van verifieerbare certificering en vergelijk de totale kosten over meerdere jaren met andere osmose-merken.',
  },
  {
    question: 'Wat is het verschil tussen Waterdrop en een lokaal geleverd osmosesysteem?',
    answer:
      'Het filterprincipe (omgekeerde osmose) is hetzelfde. Verschillen zitten in service, garantie-afhandeling, beschikbaarheid van vervangingsfilters en lokale ondersteuning. Voor wie waarde hecht aan Nederlandse service en installatie kan een lokaal geleverd systeem praktischer zijn; voor wie vooral op functies en prijs let, is Waterdrop een serieuze optie.',
  },
];

export default function WaterdropPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterdrop: osmose- en waterfilters, types en afweging',
          description:
            'Een neutraal overzicht van Waterdrop: osmosesystemen en filters, werking, certificering en waar je op let bij de keuze.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/waterdrop',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Waterdrop', url: 'https://waterfilterplatform.nl/waterdrop' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'Waterdrop', description: 'Internationaal merk van waterfilters en tankloze omgekeerde-osmosesystemen.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Waterdrop</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterdrop: osmosesystemen en waterfilters
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Waterdrop</strong> is een internationaal merk van waterfilters, bekend van tankloze
            onder-aanrecht osmosesystemen, kraanfilters en filterkannen. Op deze pagina vind je een neutraal
            overzicht: welke types er zijn, hoe ze werken en waar je op let bij de keuze.
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
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper', 'NSF/ANSI-standaarden', 'US EPA', 'RIVM']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Wat moet je weten over Waterdrop?"
          answer="Waterdrop is een internationaal filtermerk met onder meer tankloze omgekeerde-osmosesystemen, kraanfilters en filterkannen. De osmosesystemen verwijderen via een membraan een breed pakket verontreinigingen; let bij de keuze op afvalwaterverhouding, verifieerbare certificering (NSF/ANSI), filter- en membraankosten, capaciteit en garantie. Vergelijk de totale kosten over meerdere jaren en controleer specificaties bij de verkoper; lokaal geleverde systemen kunnen voordeel bieden op service en installatie."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Assortiment en werking</h2>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Tankloze RO-systemen', 'Onder-aanrecht osmose zonder voorraadtank; compact, breed filterend.'],
              ['Kraan- en inline-filters', 'Eenvoudiger filters gericht op smaak en chloor.'],
              ['Filterkannen', 'Laagdrempelige instap voor smaakverbetering.'],
              ['Let op certificering', 'Beoordeel claims op verifieerbare NSF/ANSI-listings per contaminant.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je begrijpen hoe de techniek werkt en waar je op let? Lees onze gids over{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
            en het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmosesysteem</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterdrop vergelijken en alternatieven</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zet Waterdrop naast andere osmose-merken op functies, certificering en totale kosten. Een
            directe vergelijking met een ander RO-merk vind je op{' '}
            <Link href="/vergelijken/waterdrop-vs-aquatru" className="text-[#005F8A] underline">Waterdrop vs AquaTru</Link>,
            en de afweging met een 4-in-1 osmosekraan op{' '}
            <Link href="/waterdrop-alternatief" className="text-[#005F8A] underline">Waterdrop alternatief</Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Waterdrop</h2>
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
              ['/beste-osmosefilter-2026', 'Beste osmosefilter 2026', 'Koopgids met shortlist en criteria'],
              ['/waterdrop-alternatief', 'Waterdrop alternatief', 'Afweging met een 4-in-1 osmosekraan'],
              ['/vergelijken/waterdrop-vs-aquatru', 'Waterdrop vs AquaTru', 'Twee RO-merken vergeleken'],
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
