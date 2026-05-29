import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Waterontharder en gezondheid: is onthard water gezond?',
    description:
      'Is onthard water gezond om te drinken? Wat onthard water doet met natrium, mineralen, huid en voor wie oplet (dieet, bloeddruk, baby). Genuanceerd en met bronnen.',
    alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/gezondheid' },
    openGraph: {
      title: 'Waterontharder en gezondheid: is onthard water gezond?',
      description:
        'Wat onthard water betekent voor natrium, mineralen en huid, en voor wie extra oplet. Genuanceerd, met bronnen en zonder medische claims.',
      url: 'https://waterfilterplatform.nl/waterontharder/gezondheid',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Is onthard water gezond om te drinken?',
    answer:
      'Voor de meeste gezonde mensen is onthard water veilig om te drinken. Een zout-ionenwisselaar vervangt calcium en magnesium door natrium; de natriumtoename is meestal beperkt maar hangt af van je waterhardheid. Bij een streng natriumbeperkt dieet, hoge bloeddruk of voor zuigelingen is voorzichtigheid gepast. Dit is algemene informatie en geen medisch advies.',
  },
  {
    question: 'Mis je mineralen door onthard water te drinken?',
    answer:
      'Onthard water bevat minder calcium en magnesium. Drinkwater levert echter maar een deel van je dagelijkse mineralen; de meeste haal je uit voeding. Bij een gevarieerd voedingspatroon is dat doorgaans geen probleem. Wil je toch mineralen behouden voor het drinkwater, houd dan een onbehandeld tappunt aan of gebruik osmose met remineralisatie.',
  },
  {
    question: 'Voor wie is onthard water minder geschikt?',
    answer:
      'Let extra op bij mensen met een natriumbeperkt dieet, hoge bloeddruk of hartfalen, en bij zuigelingen (babyvoeding). In die gevallen is een onbehandeld koudwatertappunt voor drinken en flesvoeding of een osmosefilter verstandig. Raadpleeg bij twijfel een arts of dietist.',
  },
  {
    question: 'Is zacht water beter voor je huid en haar?',
    answer:
      'Veel mensen ervaren dat de huid minder droog aanvoelt en zeep beter uitspoelt met zacht water, mede doordat er minder kalkzeepresten achterblijven. Het bewijs hiervoor is wisselend en het effect is persoonlijk; zie het als een comfortvoordeel, niet als een medische behandeling.',
  },
  {
    question: 'Kan ik onthard water gebruiken voor babyvoeding?',
    answer:
      'Voor flesvoeding wordt vaak geadviseerd water met een laag natriumgehalte te gebruiken. Omdat een zoutontharder natrium toevoegt, kun je beter een onbehandeld koudwatertappunt of osmosewater gebruiken voor babyvoeding. Volg het advies op de verpakking van de flesvoeding en raadpleeg bij twijfel het consultatiebureau of een arts.',
  },
];

export default function WaterontharderGezondheidPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontharder en gezondheid: is onthard water gezond?',
          description:
            'Genuanceerde uitleg over onthard water en gezondheid: natrium, mineralen, huid en voor wie extra oplet. Met bronnen en zonder medische claims.',
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: 'https://waterfilterplatform.nl/waterontharder/gezondheid',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Gezondheid', url: 'https://waterfilterplatform.nl/waterontharder/gezondheid' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Gezondheid</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder en gezondheid: is onthard water gezond?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een veelgestelde vraag: is onthard water gezond om te drinken? We bespreken genuanceerd wat
            ontharden doet met natrium, mineralen en huid, en voor wie extra oplettendheid gepast is -
            met bronnen en zonder medische claims.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'Gezondheidsraad', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Is onthard water gezond om te drinken?"
          answer="Voor de meeste gezonde mensen is onthard water veilig om te drinken. Een zoutontharder vervangt calcium en magnesium door natrium; de toename is meestal beperkt maar hangt af van de waterhardheid. Bij een natriumbeperkt dieet, hoge bloeddruk of voor zuigelingen is voorzichtigheid gepast - houd dan een onbehandeld tappunt aan of gebruik osmose. Dit is algemene informatie, geen medisch advies."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Natrium: hoeveel komt erbij?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij ionenwisseling worden calcium- en magnesiumionen vervangen door natrium. Hoeveel natrium
            erbij komt, hangt af van je oorspronkelijke waterhardheid: hoe harder het water, hoe meer
            natrium. Voor gezonde volwassenen blijft de bijdrage doorgaans bescheiden ten opzichte van de
            totale dagelijkse natriuminname uit voeding, maar het is geen nul. De volledige rekenuitleg
            staat in{' '}
            <Link href="/kennisbank/waterontharder-natrium-zoutarm" className="text-[#005F8A] underline">waterontharder en natrium bij een zoutarm dieet</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is extra oplettendheid gepast?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Natriumbeperkt dieet', 'Wie op natrium let, kan beter een onbehandeld koudwatertappunt voor drinken gebruiken of osmose.'],
              ['Hoge bloeddruk / hartfalen', 'Overleg met je arts; gebruik bij voorkeur onbehandeld of osmosewater voor consumptie.'],
              ['Zuigelingen', 'Gebruik voor flesvoeding bij voorkeur onbehandeld of osmosewater met laag natrium; volg verpakkings- en consultatiebureau-advies.'],
              ['Gezonde volwassenen', 'Doorgaans geen probleem bij een gevarieerd voedingspatroon; mineralen komen vooral uit voeding.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Huid, haar en comfort</h2>
          <p className="text-gray-700 leading-relaxed">
            Veel mensen ervaren met zacht water een minder droge huid en beter uitspoelende zeep, doordat
            er minder kalkzeepresten achterblijven. Het wetenschappelijk bewijs is wisselend en het effect
            is persoonlijk; beschouw het als een comfortvoordeel, geen medische behandeling. Bij
            aanhoudende huidklachten is een (huis)arts of dermatoloog het juiste adres.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Praktische conclusie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de meeste huishoudens is onthard water veilig te drinken; wil je het natrium voor
            consumptie helemaal vermijden, combineer de ontharder dan met een onbehandeld tappunt of een{' '}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
            voor het drinkwater. Twijfel je of ontharden in jouw situatie zinvol is? Check je{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid</Link> en lees de{' '}
            <Link href="/waterontharder/nadelen" className="text-[#005F8A] underline">nadelen</Link> en{' '}
            <Link href="/keuzehulp/hard-water" className="text-[#005F8A] underline">keuzehulp bij hard water</Link>.
          </p>
          <p className="text-xs text-gray-400">
            Disclaimer: deze pagina is informatief en geen medisch advies. Voor persoonlijke
            gezondheidsvragen, een natriumbeperkt dieet of babyvoeding raadpleeg je een arts, dietist of
            het consultatiebureau. Bronnen: RIVM, Vewin, Gezondheidsraad en de EU-drinkwaterrichtlijn
            2020/2184.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

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
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/waterontharder', 'Waterontharder', 'Werking, kosten en wanneer zinvol'],
              ['/kennisbank/waterontharder-natrium-zoutarm', 'Waterontharder en natrium', 'Rekenuitleg bij een zoutarm dieet'],
              ['/waterontharder/vs-osmose', 'Waterontharder vs osmose', 'Voor zuiver drinkwater'],
              ['/waterontharder/nadelen', 'Nadelen', 'De eerlijke keerzijde'],
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
