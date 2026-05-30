import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'SodaStream: bruisend water maken, modellen en kosten (2026)',
    description:
      'Hoe werkt een SodaStream, welke modellen zijn er en wat kost het? Neutraal overzicht van het bruiswatertoestel, CO2-cilinders en de afweging met een bruiskraan.',
    alternates: { canonical: 'https://waterfilterplatform.nl/sodastream' },
    openGraph: {
      title: 'SodaStream: bruisend water maken, modellen en kosten (2026)',
      description:
        'Neutraal overzicht van SodaStream: werking, modellen, CO2-cilinders, kosten en de afweging met een bruiswaterkraan.',
      url: 'https://waterfilterplatform.nl/sodastream',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Hoe werkt een SodaStream?',
    answer:
      'Een SodaStream voegt koolzuur (CO2) toe aan gewoon kraanwater. Je vult de bijgeleverde fles met koud kraanwater, schroeft die op het toestel en drukt enkele keren om CO2 uit een cilinder in het water te persen. Het toestel heeft geen stroom of wateraansluiting nodig en filtert het water niet; het maakt water alleen bruisend.',
  },
  {
    question: 'Welke SodaStream-modellen zijn er?',
    answer:
      'SodaStream voert verschillende modellen, van handmatige toestellen tot varianten met een snelkoppeling voor de cilinder en een elektrische uitvoering. Ze verschillen vooral in bediening, design en het type CO2-cilinder (schroef of quick-connect). De exacte line-up wisselt per jaar; controleer de actuele modellen bij de verkoper.',
  },
  {
    question: 'Wat kost een SodaStream in gebruik?',
    answer:
      'Naast de aanschaf van het toestel zijn de CO2-cilinders de belangrijkste lopende kostenpost. Een cilinder maakt grofweg enkele tientallen liters bruiswater en wordt via een ruilsysteem vervangen. Per liter bruiswater is dat doorgaans goedkoper dan flessen bruiswater uit de winkel. De volledige opbouw staat op onze pagina over de SodaStream prijs.',
  },
  {
    question: 'Filtert een SodaStream het water?',
    answer:
      'Nee. Een SodaStream voegt alleen koolzuur toe; het verwijdert geen kalk, chloor of verontreinigingen. Wil je naast bruisend water ook gefilterd water, dan heb je een filter of een gefilterde bruiswaterkraan nodig. Een 4-in-1 kraan combineert bijvoorbeeld gefilterd, kokend en bruisend water uit een kraan.',
  },
  {
    question: 'SodaStream of een bruiswaterkraan?',
    answer:
      'Een SodaStream is goedkoop in aanschaf, vraagt geen installatie en is ideaal om laagdrempelig bruiswater te maken. Een vaste bruiswaterkraan (zoals Grohe Blue of een 4-in-1 kraan) levert gekoeld en gefilterd bruiswater direct uit de kraan zonder flessen te vullen, maar kost meer en vraagt installatie. De keuze hangt af van gebruik, budget en of je ook gefilterd of kokend water wilt.',
  },
];

const subpaginas = [
  ['/sodastream-co2', 'SodaStream CO2-cilinders', 'Ruilen, kosten, compatibiliteit en hoe lang een cilinder meegaat.'],
  ['/sodastream-prijs', 'SodaStream prijs', 'Toestel, cilinders en de kosten per liter bruiswater.'],
  ['/sodastream-alternatief', 'SodaStream alternatief', 'Bruiswaterkraan of 4-in-1 als alternatief vergeleken.'],
];

export default function SodaStreamPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'SodaStream: bruisend water maken, modellen en kosten',
          description:
            'Een neutraal overzicht van SodaStream: werking, modellen, CO2-cilinders, kosten en de afweging met een bruiswaterkraan.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/sodastream',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Bruisend water', url: 'https://waterfilterplatform.nl/bruisend-water' },
          { name: 'SodaStream', url: 'https://waterfilterplatform.nl/sodastream' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'SodaStream', description: 'Merk van bruiswatertoestellen die kraanwater met CO2 verrijken.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/bruisend-water" className="hover:text-[#005F8A]">Bruisend water</Link>
            <span className="mx-2">/</span>
            <span>SodaStream</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            SodaStream: bruisend water maken uit kraanwater
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>SodaStream</strong> maakt van gewoon kraanwater bruisend water door er koolzuur aan toe
            te voegen. Op deze pagina vind je een neutraal overzicht: hoe het werkt, welke modellen er zijn,
            wat het kost, de rol van de CO2-cilinders en hoe het zich verhoudt tot een vaste bruiswaterkraan.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sodastream-prijs"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              SodaStream prijs
            </Link>
            <Link
              href="/bruisend-water"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Bruisend water thuis
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Wat moet je weten over SodaStream?"
          answer="Een SodaStream voegt koolzuur toe aan kraanwater en maakt zo bruisend water, zonder stroom of wateraansluiting. Het filtert niet: kalk en chloor blijven in het water. De belangrijkste lopende kosten zijn de CO2-cilinders, die je via een ruilsysteem vervangt; per liter is dat doorgaans goedkoper dan flessen bruiswater. Wil je ook gefilterd of gekoeld bruiswater uit de kraan, dan is een bruiswaterkraan of 4-in-1 kraan het overwegen waard."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een SodaStream?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Je vult de fles met koud kraanwater, bevestigt die op het toestel en perst met een paar drukken
            CO2 uit een cilinder in het water. Hoe meer je drukt, hoe bruisender het water. Het toestel
            werkt mechanisch (sommige modellen elektrisch) en heeft geen leiding- of stroomaansluiting nodig.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Koolzuur toevoegen', 'CO2 uit een cilinder maakt het kraanwater bruisend; jij bepaalt de hoeveelheid.'],
              ['Geen installatie', 'Het toestel staat op het aanrecht; geen stroom of wateraansluiting nodig.'],
              ['Geen filtering', 'Kalk en chloor blijven in het water; een SodaStream zuivert niet.'],
              ['Herbruikbare flessen', 'Je vult eigen flessen, wat flessen sjouwen en plastic scheelt.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer over de opties voor bruisend water lees je op{' '}
            <Link href="/bruisend-water" className="text-[#005F8A] underline">bruisend water thuis</Link>{' '}
            en{' '}
            <Link href="/bruisend-water/sodastream" className="text-[#005F8A] underline">bruisend water met SodaStream</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Modellen, CO2 en kosten</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SodaStream voert meerdere modellen die verschillen in bediening (handmatig, quick-connect of
            elektrisch) en design. De grootste lopende kostenpost zijn de CO2-cilinders. Omdat line-up en
            prijzen wisselen, houden we cijfers indicatief en verwijzen we voor details naar de verdiepende
            pagina's.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subpaginas.map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">SodaStream versus een bruiswaterkraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een SodaStream is laagdrempelig en goedkoop in aanschaf. Wil je gekoeld en gefilterd bruiswater
            direct uit de kraan, zonder flessen te vullen, dan biedt een vaste bruiswaterkraan of een 4-in-1
            kraan meer gemak. Een{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 kraan</Link>{' '}
            combineert gefilterd, kokend en bruisend water. De volledige afweging lees je op{' '}
            <Link href="/sodastream-alternatief" className="text-[#005F8A] underline">SodaStream alternatief</Link>.
          </p>
        </section>

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over SodaStream</h2>
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
              ['/bruisend-water', 'Bruisend water', 'Alle opties voor bruisend water thuis'],
              ['/sodastream-co2', 'SodaStream CO2', 'Cilinders ruilen, kosten en compatibiliteit'],
              ['/sodastream-alternatief', 'SodaStream alternatief', 'Bruiswaterkraan of 4-in-1 vergeleken'],
              ['/4-in-1-kraan', '4-in-1 kraan', 'Gefilterd, kokend en bruisend uit een kraan'],
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
