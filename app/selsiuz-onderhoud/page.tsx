import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Selsiuz onderhoud: ontkalken, filter en levensduur (2026)',
    description:
      'Hoe onderhoud je een Selsiuz kokend water kraan? Ontkalken bij hard water, de rol van filters, levensduur van de combi-boiler en wanneer je hulp inschakelt.',
    alternates: { canonical: 'https://waterfilterplatform.nl/selsiuz-onderhoud' },
    openGraph: {
      title: 'Selsiuz onderhoud: ontkalken, filter en levensduur (2026)',
      description:
        'Praktische onderhoudsgids voor de Selsiuz: ontkalken, filters, levensduur van de boiler en storingen voorkomen.',
      url: 'https://waterfilterplatform.nl/selsiuz-onderhoud',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Hoe onderhoud je een Selsiuz kokend water kraan?',
    answer:
      'Het belangrijkste onderhoud is ontkalken, want kalk is de grootste vijand van een kokendwaterboiler. Hoe vaak dat nodig is, hangt af van je waterhardheid: in een hard-watergebied vaker dan in een zacht-watergebied. Volg verder altijd de onderhoudsinstructies van de fabrikant en schakel bij twijfel een erkende installateur in.',
  },
  {
    question: 'Hoe vaak moet ik een Selsiuz ontkalken?',
    answer:
      'Dat hangt sterk af van de lokale waterhardheid. In gebieden met hard water vraagt een kokendwatersysteem vaker aandacht dan in zachte-watergebieden. Controleer je waterhardheid per gemeente en houd de instructies van de fabrikant aan. Tijdig ontkalken voorkomt verminderde doorstroom en verlengt de levensduur van de boiler.',
  },
  {
    question: 'Heeft een Selsiuz een filter dat je moet vervangen?',
    answer:
      'Een Selsiuz richt zich op kokend, koud en warm water en heeft geen standaard osmosefilter. Afhankelijk van het model en eventuele accessoires kan er wel een eenvoudige filter- of ontkalkingsoplossing zijn; dat is iets anders dan de bredere filtratie van een osmosesysteem. Controleer per model wat van toepassing is bij de verkoper.',
  },
  {
    question: 'Hoe lang gaat een Selsiuz mee?',
    answer:
      'Een goed onderhouden kokendwaterkraan met combi-boiler gaat doorgaans vele jaren mee. De levensduur hangt vooral af van de waterhardheid en of je tijdig ontkalkt. Kalkaanslag is de belangrijkste oorzaak van verminderde prestaties en storingen, dus consequent onderhoud is de beste manier om de levensduur te verlengen.',
  },
  {
    question: 'Wat doe je bij een storing aan de Selsiuz?',
    answer:
      'Controleer eerst de basis: staat de boiler aan, is er druk, en is er recent ontkalkt? Bij kokendwatersystemen zijn kalkgerelateerde klachten het meest voorkomend. Komt het probleem daarmee niet terug, schakel dan een erkende installateur of de servicedienst van het merk in. Ga zelf niet sleutelen aan onderdelen die onder druk of spanning staan.',
  },
];

export default function SelsiuzOnderhoudPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Selsiuz onderhoud: ontkalken, filter en levensduur',
          description:
            'Praktische onderhoudsgids voor de Selsiuz kokend water kraan: ontkalken, filters, levensduur en storingen voorkomen.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/selsiuz-onderhoud',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Selsiuz', url: 'https://waterfilterplatform.nl/selsiuz' },
          { name: 'Onderhoud', url: 'https://waterfilterplatform.nl/selsiuz-onderhoud' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/selsiuz" className="hover:text-[#005F8A]">Selsiuz</Link>
            <span className="mx-2">/</span>
            <span>Onderhoud</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Selsiuz onderhoud: ontkalken, filter en levensduur
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een <strong>Selsiuz</strong> gaat lang mee als je hem goed onderhoudt. Het draait vooral om
            ontkalken: kalk is de grootste vijand van elke kokendwaterboiler. Hieronder lees je wat het
            onderhoud inhoudt, hoe waterhardheid meespeelt en hoe je storingen voorkomt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterhardheid"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Check je waterhardheid
            </Link>
            <Link
              href="/selsiuz"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Over Selsiuz
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['Fabrikant / verkoper', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat houdt het onderhoud van een Selsiuz in?"
          answer="Het belangrijkste onderhoud van een Selsiuz is ontkalken: kalk is de grootste oorzaak van verminderde prestaties en storingen bij een kokendwaterboiler. Hoe vaak je ontkalkt hangt af van de lokale waterhardheid - in hard-watergebieden vaker. Een Selsiuz heeft geen standaard osmosefilter, dus filtervervanging zoals bij osmose speelt niet. Volg de instructies van de fabrikant en schakel bij storingen een erkende installateur in. Wil je kalk structureel beperken, dan helpt voorbehandeld of onthard water."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Ontkalken: het belangrijkste onderhoud</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In een kokendwaterboiler slaat kalk neer op het verwarmingselement en in de leidingen. Dat
            verlaagt de doorstroom, kost meer energie en leidt op termijn tot storingen. Tijdig ontkalken
            is daarom verreweg het belangrijkste onderhoud. Hoe vaak dat nodig is, hangt direct samen met
            je waterhardheid: hoe harder het water, hoe sneller kalk zich opbouwt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Kijk naar je waterhardheid', 'In hard-watergebieden bouwt kalk sneller op; controleer de hardheid per gemeente.'],
              ['Volg de fabrikantinstructies', 'Gebruik de voorgeschreven methode en middelen voor jouw model.'],
              ['Let op signalen', 'Mindere doorstroom of langere opwarmtijd kan op kalkaanslag wijzen.'],
              ['Voorkomen is beter', 'Voorbehandeld of onthard water vermindert kalk en verlengt de levensduur.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Twijfel je over je lokale water? Check de actuele cijfers in onze{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid-database</Link>{' '}
            en lees hoe je{' '}
            <Link href="/kennisbank/kalk-verwijderen-water" className="text-[#005F8A] underline">kalk uit water verwijdert</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Filters en levensduur</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een Selsiuz richt zich op temperatuur, niet op brede filtratie: er zit geen standaard
            osmosefilter in. Filtervervanging zoals bij een osmosesysteem speelt dus niet. Wat de
            levensduur het sterkst bepaalt, is hoe consequent je ontkalkt. Een goed onderhouden combi-boiler
            gaat doorgaans vele jaren mee; verwaarloosde kalkaanslag is de belangrijkste reden dat
            prestaties achteruitgaan.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je naast kokend water ook echt gefilterd water met minder kalk en verontreinigingen, dan is
            een aparte{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
            oplossing of een 4-in-1 osmosekraan iets om te overwegen - zie{' '}
            <Link href="/selsiuz-alternatief" className="text-[#005F8A] underline">Selsiuz alternatief</Link>.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Selsiuz onderhoud</h2>
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
              ['/selsiuz', 'Over Selsiuz', 'Werking, modellen en prijs'],
              ['/selsiuz-prijs', 'Selsiuz prijs', 'Aanschaf, installatie en jaarlijkse kosten'],
              ['/waterhardheid', 'Waterhardheid per gemeente', 'Zoek de hardheid op voor jouw woonplaats'],
              ['/kokend-water-kraan/onderhoud', 'Kokend water kraan onderhoud', 'Algemeen onderhoud van kokendwaterkranen'],
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
