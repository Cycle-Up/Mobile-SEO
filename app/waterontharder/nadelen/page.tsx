import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Waterontharder nadelen: de eerlijke keerzijde op een rij',
    description:
      'Wat zijn de nadelen van een waterontharder? Kosten, zout en natrium, onderhoud, ruimte en wanneer het niet zinvol is - eerlijk en genuanceerd uitgelegd.',
    alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/nadelen' },
    openGraph: {
      title: 'Waterontharder nadelen: de eerlijke keerzijde',
      description:
        'Kosten, zout en natrium, onderhoud, ruimte en wanneer een waterontharder niet zinvol is - een eerlijke, genuanceerde uitleg.',
      url: 'https://waterfilterplatform.nl/waterontharder/nadelen',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat zijn de grootste nadelen van een waterontharder?',
    answer:
      'De belangrijkste nadelen zijn de aanschaf- en installatiekosten, de lopende kosten voor zout, water en stroom bij regeneratie, het toevoegen van natrium aan het water, periodiek onderhoud, en de benodigde ruimte plus een aansluiting op de hoofdleiding. Bij zacht water (onder circa 8 dH) wegen die nadelen vaak niet op tegen de voordelen.',
  },
  {
    question: 'Is onthard water ongezond door het natrium?',
    answer:
      'Een zout-ionenwisselaar vervangt calcium en magnesium door natrium. De toename is voor gezonde volwassenen meestal beperkt, maar kan meetellen bij een streng natriumbeperkt dieet, bij hoge bloeddruk of voor zuigelingen. Houd in die gevallen een onbehandeld tappunt voor drinkwater en babyvoeding aan, of gebruik osmose. Dit is informatief en geen medisch advies; overleg bij twijfel met een arts.',
  },
  {
    question: 'Beschadigt een waterontharder de leidingen?',
    answer:
      'Bij een correct ingestelde resthardheid (vaak 4 tot 8 dH in plaats van 0) en een goed werkend toestel is dat risico klein. Te zacht of agressief ingesteld water kan in theorie corrosiever zijn; daarom adviseren fabrikanten meestal niet op 0 dH in te stellen. Volg de instelinstructies en de voorschriften van je leiding- en cv-fabrikant.',
  },
  {
    question: 'Wanneer is een waterontharder niet de moeite waard?',
    answer:
      'Een waterontharder is meestal niet zinvol als je al zacht water hebt (onder circa 8 dH), als je binnen een jaar verhuist, of als je vooral schoon drinkwater wilt in plaats van zachter leidingwater. In dat laatste geval is een osmosefilter op het aanrecht een gerichtere keuze.',
  },
  {
    question: 'Wat is milieuvriendelijker dan een zoutsysteem?',
    answer:
      'Zoutloze systemen (template-assisted crystallization) gebruiken geen zout en geen regeneratiewater, maar verlagen de hardheid niet en zijn minder effectief bij zeer hard water. Het hangt dus af van je doel: minder kalkaanslag zonder zout (zoutloos) of echt zacht water (ionenwisselaar).',
  },
];

const nadelen = [
  ['Aanschaf en installatie', 'Een degelijke ionenwisselaar kost al snel enkele honderden tot meer dan duizend euro, plus installatie op de hoofdleiding.'],
  ['Lopende kosten', 'Zout, extra water en wat stroom voor de regeneratie, plus eventueel een serviceabonnement.'],
  ['Natrium in het water', 'Een zoutsysteem voegt natrium toe; relevant bij een zoutarm dieet, hoge bloeddruk of zuigelingen (zie gezondheid).'],
  ['Onderhoud', 'Zout bijvullen, periodiek controleren en af en toe reinigen of desinfecteren.'],
  ['Ruimte en aansluiting', 'Een toestel vraagt ruimte bij de hoofdleiding, een afvoer en (meestal) een stopcontact.'],
  ['Niet altijd nodig', 'Bij zacht water (onder circa 8 dH) is de winst beperkt en weegt het zelden op tegen de kosten.'],
];

export default function WaterontharderNadelenPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontharder nadelen: de eerlijke keerzijde op een rij',
          description:
            'Een eerlijke, genuanceerde uitleg van de nadelen van een waterontharder: kosten, zout en natrium, onderhoud, ruimte en wanneer het niet zinvol is.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/waterontharder/nadelen',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Nadelen', url: 'https://waterfilterplatform.nl/waterontharder/nadelen' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Nadelen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder nadelen: de eerlijke keerzijde
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een waterontharder lost kalkproblemen op, maar heeft ook nadelen. We zetten ze eerlijk en
            genuanceerd op een rij - van kosten en natrium tot onderhoud - zodat je een afgewogen keuze
            maakt. Voor de voordelen en de afweging linken we naar de bijbehorende pagina's.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat zijn de nadelen van een waterontharder?"
          answer="De belangrijkste nadelen zijn de aanschaf- en installatiekosten, lopende kosten voor zout/water/stroom, het toevoegen van natrium aan het water, periodiek onderhoud, en de benodigde ruimte plus aansluiting. Bij zacht water (onder circa 8 dH) wegen die nadelen vaak niet op tegen de voordelen; bij hard water meestal wel."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De nadelen op een rij</h2>
          <div className="space-y-3">
            {nadelen.map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">-</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{t}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zout en natrium: nuance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een zout-ionenwisselaar wisselt calcium en magnesium uit voor natrium. Voor gezonde
            volwassenen is de natriumtoename meestal beperkt, maar voor mensen met een natriumbeperkt
            dieet, hoge bloeddruk of voor zuigelingen kan het meetellen. Houd in die gevallen een
            onbehandeld tappunt aan voor drinken en babyvoeding, of kies osmose voor het drinkwater.
            Lees de volledige uitleg in{' '}
            <Link href="/kennisbank/waterontharder-natrium-zoutarm" className="text-[#005F8A] underline">waterontharder en natrium</Link>{' '}
            en op{' '}
            <Link href="/waterontharder/gezondheid" className="text-[#005F8A] underline">waterontharder en gezondheid</Link>.
            Deze informatie is algemeen en geen medisch advies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Staan de nadelen in verhouding tot de voordelen?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Of de nadelen opwegen tegen de voordelen hangt vooral af van je waterhardheid. In een
            hard-watergebied (boven circa 15 dH) leveren minder kalkaanslag, een langere levensduur van
            apparaten en minder zeep- en schoonmaakmiddel een reele besparing op; onder circa 8 dH is de
            winst klein. Reken de kosten en baten door op onze pagina's over{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline">kosten</Link> en{' '}
            <Link href="/waterontharder/prijs" className="text-[#005F8A] underline">prijs</Link>, en check eerst je{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">lokale waterhardheid</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je geen zout, of vooral schoon drinkwater? Vergelijk dan met een{' '}
            <Link href="/waterontharder/zoutloos" className="text-[#005F8A] underline">zoutloze ontharder</Link> of een{' '}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">osmosefilter</Link>.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de nadelen</h2>
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
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/waterontharder', 'Waterontharder', 'Werking, kosten en wanneer zinvol'],
              ['/waterontharder/vs-osmose', 'Waterontharder vs osmose', 'Wanneer kies je wat?'],
              ['/beste-waterontharder-2026', 'Beste waterontharder 2026', 'Koopgids per situatie'],
              ['/keuzehulp/hard-water', 'Keuzehulp hard water', 'Welke oplossing past bij jou?'],
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
