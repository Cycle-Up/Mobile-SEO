import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'InsinkErator: kokend water kraan en afvalvermaler (2026)',
    description:
      'Wat maakt InsinkErator? Neutraal overzicht van de kokend water kranen en afvalvermalers van het merk, hoe ze werken, kosten en de afweging met alternatieven.',
    alternates: { canonical: 'https://waterfilterplatform.nl/insinkerator' },
    openGraph: {
      title: 'InsinkErator: kokend water kraan en afvalvermaler (2026)',
      description:
        'Neutraal overzicht van InsinkErator: kokend water kranen en afvalvermalers, werking, kosten en alternatieven.',
      url: 'https://waterfilterplatform.nl/insinkerator',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is InsinkErator?',
    answer:
      'InsinkErator is een merk dat vooral bekend is van twee productgroepen: kokend water kranen (instant heet/kokend water uit een tank onder het aanrecht) en keukenafvalvermalers (die etensresten vermalen in de gootsteenafvoer). Het merk richt zich op keukengemak; een volledig osmose- of drinkwaterfilter zit niet in deze producten.',
  },
  {
    question: 'Hoe werkt een InsinkErator kokend water kraan?',
    answer:
      'Net als andere kokendwaterkranen gebruikt InsinkErator een geisoleerde tank onder het aanrecht die water op hoge temperatuur houdt, zodat je direct heet of kokend water uit de kraan hebt. Modellen verschillen in tankgrootte en of ze alleen heet of ook kokend water leveren. Een filter of osmose is geen standaard onderdeel.',
  },
  {
    question: 'Wat kost een InsinkErator?',
    answer:
      'De prijs hangt sterk af van het product en model. Kokend water kranen zitten in het premium segment (vergelijkbaar met andere merken), afvalvermalers kennen een eigen prijsrange. Reken bij kokendwaterkranen ook op installatie en lopende kosten zoals elektriciteit en periodiek ontkalken. Controleer actuele prijzen bij de verkoper.',
  },
  {
    question: 'Heeft een InsinkErator een waterfilter?',
    answer:
      'De kokend water kranen richten zich op temperatuur, niet op filtratie; een volledig osmosefilter zit er niet standaard in. Wil je naast heet water ook gefilterd, koud of bruisend water, dan biedt een 4-in-1 kraan met ingebouwd osmosefilter een completer pakket uit een kraan.',
  },
  {
    question: 'Is InsinkErator een goede keuze?',
    answer:
      'Voor wie een betrouwbare kokendwaterkraan of een afvalvermaler van een gevestigd merk zoekt, is InsinkErator een serieuze optie. Of het de beste keuze is, hangt af van je wensen en budget. Zoek je vooral gefilterd plus kokend en bruisend water, vergelijk dan met een 4-in-1 osmosekraan; dat lees je op InsinkErator alternatief.',
  },
];

export default function InsinkEratorPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'InsinkErator: kokend water kraan en afvalvermaler',
          description:
            'Een neutraal overzicht van InsinkErator: kokend water kranen en afvalvermalers, werking, kosten en alternatieven.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/insinkerator',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'InsinkErator', url: 'https://waterfilterplatform.nl/insinkerator' },
        ]}
      />
      <SchemaOrg schema={[{ '@type': 'Brand', name: 'InsinkErator', description: 'Merk van kokend water kranen en keukenafvalvermalers.' }]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>InsinkErator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            InsinkErator: kokend water kraan en afvalvermaler
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            <strong>InsinkErator</strong> is bekend van kokend water kranen en keukenafvalvermalers. Op
            deze pagina vind je een neutraal overzicht: wat het merk maakt, hoe de producten werken, wat ze
            kosten en hoe ze zich verhouden tot alternatieven met gefilterd water.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Kokend water kranen
            </Link>
            <Link
              href="/insinkerator-alternatief"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              InsinkErator alternatief
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper', 'RIVM', 'Vewin']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Wat moet je weten over InsinkErator?"
          answer="InsinkErator maakt vooral kokend water kranen (instant heet/kokend water uit een tank onder het aanrecht) en keukenafvalvermalers. De kokendwaterkranen richten zich op temperatuur, niet op filtratie: een osmosefilter zit er niet standaard in. Ze zitten in het premium segment, met installatie en lopende kosten (stroom, ontkalken). Wil je naast heet water ook gefilterd, koud en bruisend water, dan is een 4-in-1 osmosekraan een completer alternatief."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat maakt InsinkErator?</h2>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Kokend water kranen', 'Instant heet of kokend water uit een geisoleerde tank onder het aanrecht.'],
              ['Afvalvermalers', 'Vermalen etensresten in de gootsteenafvoer; een apart keukenproduct.'],
              ['Geen standaard filter', 'De kranen richten zich op temperatuur; osmose/filtratie zit er niet standaard in.'],
              ['Premium segment', 'Reken op installatie en lopende kosten zoals stroom en ontkalken.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je de categorie eerst begrijpen? Lees onze gids over{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kranen</Link>{' '}
            en de{' '}
            <Link href="/kokend-water-kraan/onderhoud" className="text-[#005F8A] underline">onderhoud en ontkalking</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">InsinkErator versus een 4-in-1 osmosekraan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een InsinkErator kokendwaterkraan is sterk voor wie vooral heet of kokend water wil. Wie ook
            puur gefilterd, koud en bruisend water wil, vindt een 4-in-1 kraan met ingebouwd osmosefilter
            vaak completer: kokend, koud gefilterd, warm en bruisend water uit een kraan, inclusief een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose installatie</Link>.
            De volledige afweging lees je op{' '}
            <Link href="/insinkerator-alternatief" className="text-[#005F8A] underline">InsinkErator alternatief</Link>.
          </p>
        </section>

        <CTABanner context="kokend" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over InsinkErator</h2>
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
              ['/kokend-water-kraan', 'Kokend water kraan', 'Complete gids over de categorie'],
              ['/insinkerator-alternatief', 'InsinkErator alternatief', 'Meer functies met een 4-in-1 osmosekraan'],
              ['/4-in-1-kraan', '4-in-1 kraan', 'Kokend, gefilterd en bruisend uit een kraan'],
              ['/vergelijken/kokend-water-kraan-merken', 'Merken vergelijken', 'Kokend water kraan merken naast elkaar'],
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
