import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Grohe Blue alternatief: osmose en kokend water (2026)',
    description:
      'Zoek je een alternatief voor de Grohe Blue? Vergelijk hem met een 4-in-1 osmosekraan die ook zeer heet water levert, maar geen bruisend water.',
    alternates: { canonical: 'https://waterfilterplatform.nl/grohe-blue-alternatief' },
    openGraph: {
      title: 'Grohe Blue alternatief vergelijken - beste opties 2026',
      description:
        'Grohe Blue geeft gekoeld, gefilterd en bruisend water via een koolfilter. Een 4-in-1 osmosekraan geeft gekoeld en zeer heet osmosewater, maar geen bruisend water.',
      url: 'https://waterfilterplatform.nl/grohe-blue-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor de Grohe Blue?',
    answer:
      'Dat hangt af van wat je wilt houden. De Grohe Blue levert gekoeld, gefilterd en bruisend water via een koolfilter, maar geen kokend water en geen osmosefiltratie. Wil je bruisend en kokend water, kijk dan naar een Quooker met CUBE. Vind je zeer heet (circa 96 graden), gekoeld en osmose-gezuiverd water belangrijker dan bubbels, dan is de PureAqua 4-in-1 kraan volgens ons het sterkste alternatief. Bubbels voeg je dan eventueel toe met een losse SodaStream.',
  },
  {
    question: 'Wat is het verschil tussen Grohe Blue en Grohe Red?',
    answer:
      'De Grohe Blue levert gekoeld, gefilterd en bruisend water (geen kokend water). De Grohe Red levert juist kokend water (geen koeling of bruis). Wil je kokend en bruisend water in een kraan, dan past een Quooker met CUBE. Wil je gekoeld en zeer heet water met osmosefiltratie, dan combineert de PureAqua 4-in-1 kraan die functies; bubbels zitten daar niet bij.',
  },
  {
    question: 'Filtert de Grohe Blue net zo goed als omgekeerde osmose?',
    answer:
      'Nee. De Grohe Blue gebruikt een actief-koolfilter dat vooral chloor, smaak en geur verbetert en kalk deels remt. Omgekeerde osmose filtert op moleculair niveau en verwijdert daarnaast lood, nitraat, PFAS en microplastics. Voor de zuiverste basis voor drink-, kook- en bruiswater is osmose effectiever dan een koolfilter.',
  },
  {
    question: 'Is er een goedkoper alternatief dan Grohe Blue?',
    answer:
      'Een Grohe Blue set kost doorgaans 1.000 tot 2.000 euro, plus jaarlijkse koolfilters en CO2. Goedkoper met bruisend water is een SodaStream met filterkan. De PureAqua 4-in-1 kraan kost 1.948 euro en geeft zeer heet, gekoeld en osmose-gezuiverd water, maar geen bubbels; dat is dus geen goedkopere vervanger. Reken altijd de filter- en CO2-kosten over meerdere jaren mee.',
  },
  {
    question: 'Kan ik bruisend water houden met een Grohe Blue alternatief?',
    answer:
      'Met een Quooker met CUBE wel: die geeft kokend, gekoeld en bruisend water. De PureAqua 4-in-1 kraan heeft geen CO2-module en geeft dus geen bubbels. Wil je die toch, dan maak je osmosewater uit de 4-in-1 bruisend met een losse SodaStream.',
  },
];

const topAlternatieven = [
  {
    naam: '4-in-1 kraan met osmose',
    prijs: 'EUR 1.948',
    kokend: 'Zeer heet (circa 96 graden)',
    gefilterd: 'Osmose (3 stappen)',
    bruisend: 'Nee',
    highlight: true,
    notitie: 'PureAqua 4-in-1: zeer heet, gekoeld en osmose-gezuiverd water; geen bubbels, wel diepere filtratie.',
  },
  {
    naam: 'Grohe Blue (referentie)',
    prijs: 'EUR 1.000-2.000',
    kokend: 'Nee',
    gefilterd: 'Koolfilter',
    bruisend: 'Ja',
    highlight: false,
    notitie: 'Gekoeld, gefilterd en bruisend water; geen kokend water, koolfilter i.p.v. osmose.',
  },
  {
    naam: 'Quooker Flex PRO3 + CUBE',
    prijs: 'EUR 2.240',
    kokend: 'Ja (100 graden)',
    gefilterd: 'Actieve kool',
    bruisend: 'Met CUBE module',
    highlight: false,
    notitie: 'Kokend plus bruisend via losse module; geen volledig osmosefilter.',
  },
  {
    naam: 'SodaStream + filterkan',
    prijs: 'EUR 100-250',
    kokend: 'Nee',
    gefilterd: 'Filterkan (licht)',
    bruisend: 'Ja (handmatig)',
    highlight: false,
    notitie: 'Goedkoopste route voor bruis, maar losse apparaten en handwerk.',
  },
];

export default function GroheBlueAlternatiefPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Grohe Blue alternatief: osmose en kokend water (2026)',
          description: 'Zoek je een alternatief voor de Grohe Blue? Vergelijk hem met een 4-in-1 osmosekraan die ook zeer heet water levert, maar geen bruisend water.',
          datePublished: '2026-05-29',
          dateModified: '2026-09-24',
          url: 'https://waterfilterplatform.nl/grohe-blue-alternatief',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Grohe Blue alternatief', url: 'https://waterfilterplatform.nl/grohe-blue-alternatief' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Grohe Blue alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Blue alternatief: ook heet water en diepere filtratie
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>Grohe Blue</strong> levert gekoeld, gefilterd en bruisend water uit de kraan.
            Wie een <strong>alternatief voor Grohe Blue</strong> zoekt, wil vaak ook kokend water of
            een diepere filtratie dan het koolpatroon biedt - of simpelweg een{' '}
            <strong>goedkoper alternatief voor Grohe Blue</strong>. We zetten de opties op een rij.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmosekraan bekijken
            </Link>
            <Link
              href="/bruisend-water"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Bruisend water uitleg
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat is het beste Grohe Blue alternatief?"
          answer="Dat hangt af van bubbels. De Grohe Blue geeft gekoeld, gefilterd en bruisend water via een koolfilter, maar geen kokend water. Wil je bruisend en kokend water, kies dan een Quooker met CUBE. Vind je zeer heet, gekoeld en osmose-gezuiverd water belangrijker dan bubbels, dan is de PureAqua 4-in-1 kraan (1.948 euro) volgens ons het sterkste alternatief; bruisend water zit daar niet op."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt de Grohe Blue precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Grohe Blue is gericht op gekoeld en bruisend gefilterd water, niet op kokend water.
            Het systeem gebruikt een koolfilter onder het aanrecht en een CO2-cilinder voor bruis.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Gekoeld water', 'Een koelmodule onder het aanrecht levert direct gekoeld water.'],
              ['Bruisend water', 'Via een CO2-cilinder maak je bruisend water uit de kraan.'],
              ['Koolfilter', 'Een actief-koolfilter verbetert smaak en geur en remt kalk deels.'],
              ['Geen kokend water', 'Anders dan de Grohe Red levert de Blue geen kokend water.'],
              ['Geen osmose', 'De Blue filtert niet op moleculair niveau; lood, nitraat en PFAS blijven grotendeels.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je naast gefilterd water ook zeer heet water en een diepere filtratie, dan
            biedt een 4-in-1 osmosekraan meer, al lever je dan de bubbels in. Lees hoe{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
            zich verhoudt tot een koolfilter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De beste alternatieven voor Grohe Blue vergeleken</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kokend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filtratie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bruisend</th>
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
                    <td className="py-2.5 px-3 text-gray-700">{a.kokend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.gefilterd}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.bruisend}</td>
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Koolfilter versus omgekeerde osmose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het belangrijkste verschil tussen de Grohe Blue en een osmose-alternatief zit in de
            filtratiediepte. Een koolfilter pakt smaak, geur en chloor aan; omgekeerde osmose
            verwijdert daarnaast opgeloste stoffen tot op moleculair niveau.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Koolfilter (Grohe Blue)', 'Chloor, smaak, geur en deels kalk. Laat lood, nitraat, PFAS en microplastics grotendeels door.'],
              ['Omgekeerde osmose', 'Verwijdert 90-99% van opgeloste stoffen, inclusief lood, nitraat, PFAS en microplastics.'],
              ['Bruiswaterkwaliteit', 'Bruis op osmosebasis (bijvoorbeeld osmosewater in een SodaStream) heeft een neutrale, zuivere smaak als vertrekpunt.'],
              ['Heet water erbij', 'De 4-in-1 osmosekraan combineert osmose met zeer heet water (circa 96 graden), maar heeft geen bruisfunctie.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen over bruisend water uit de kraan?{' '}
            <Link href="/kennisbank/bruisend-water-thuis" className="text-[#005F8A] underline">Lees onze gids over bruisend water thuis</Link>.
          </p>
        </section>

        <AffiliateCTA
          destination="vierInEen"
          campaign="kokend-water"
          content="grohe-blue-alternatief-cta"
          label="PureAqua 4-in-1 kraan met heet en gefilterd water"
          title="Op zoek naar gefilterd water uit de kraan?"
          sub="De PureAqua 4-in-1 kraan combineert zeer heet (circa 96 graden), gekoeld en osmose-gezuiverd water. Bekijken kan bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie</h2>
          <p className="text-gray-700 leading-relaxed">
            De Grohe Blue is een fraaie keuze voor gekoeld en bruisend gefilterd water. Wie ook
            zeer heet water wil, of een diepere filtratie dan een koolpatroon, en bubbels kan missen, vindt in een{' '}
            <strong>4-in-1 kraan met osmosefilter</strong> volgens ons een sterk alternatief (1.948 euro).
            Wil je bubbels én kokend water, kijk dan naar een Quooker met CUBE.
            Vergelijk verder met{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline">het Grohe Red alternatief</Link>{' '}
            of bekijk de{' '}
            <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">merkvergelijking</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Grohe Blue alternatieven</h2>
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
              ['/bruisend-water', 'Bruisend water', 'Bruisend water uit de kraan uitgelegd'],
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Hoe werkt osmosefiltratie?'],
              ['/grohe-red-alternatief', 'Grohe Red alternatief', 'Het kokendwater-alternatief'],
              ['/kokend-water-kraan/vergelijken', 'Merken vergelijken', 'Alle kraanmerken naast elkaar'],
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
