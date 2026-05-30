import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'SodaStream prijs: toestel, cilinders en kosten per liter (2026)',
    description:
      'Wat kost een SodaStream? Indicatieve prijs van toestel en CO2-cilinders, de kosten per liter bruiswater en de vergelijking met flessen bruiswater.',
    alternates: { canonical: 'https://waterfilterplatform.nl/sodastream-prijs' },
    openGraph: {
      title: 'SodaStream prijs: toestel, cilinders en kosten per liter (2026)',
      description:
        'Indicatief prijsoverzicht van SodaStream: toestel, CO2-cilinders en kosten per liter bruiswater, vergeleken met flessen.',
      url: 'https://waterfilterplatform.nl/sodastream-prijs',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat kost een SodaStream-toestel?',
    answer:
      'Een SodaStream-toestel kost indicatief enkele tientallen tot ruim honderd euro, afhankelijk van het model (handmatig, quick-connect of elektrisch) en of er een cilinder en flessen worden meegeleverd. Het is een eenmalige aanschaf; de terugkerende kosten zitten vooral in de CO2-cilinders. Controleer actuele prijzen bij de verkoper.',
  },
  {
    question: 'Wat kosten de CO2-cilinders per jaar?',
    answer:
      'Dat hangt af van hoeveel bruiswater je maakt en hoe bruisend. Een ruilvulling kost minder dan een nieuwe cilinder omdat je alleen voor de CO2 betaalt. Reken je verbruik om naar kosten per liter; bij gemiddeld gebruik is dat doorgaans duidelijk lager dan flessen bruiswater uit de winkel.',
  },
  {
    question: 'Is een SodaStream goedkoper dan flessen bruiswater?',
    answer:
      'Voor de meeste huishoudens wel. Na de eenmalige aanschaf van het toestel betaal je alleen nog CO2 (en kraanwater, dat vrijwel gratis is). Per liter ligt dat meestal onder de prijs van flessen bruiswater, en je bespaart flessen sjouwen en plastic. De exacte besparing hangt af van je verbruik en de lokale prijzen.',
  },
  {
    question: 'Welke kosten vergeet je snel bij een SodaStream?',
    answer:
      'Naast het toestel en de CO2-cilinders zijn er soms kosten voor extra of vervangende flessen (die hebben een houdbaarheidsdatum) en eventueel borg/statiegeld op de eerste cilinder. Houd daar rekening mee in je totale plaatje. Filtering zit er niet bij; voor gefilterd water heb je een aparte oplossing nodig.',
  },
  {
    question: 'Is een bruiswaterkraan op termijn voordeliger dan een SodaStream?',
    answer:
      'Een bruiswaterkraan of 4-in-1 kraan heeft een hogere aanschaf en installatie, maar levert gekoeld en vaak gefilterd bruiswater zonder flessen vullen. Of dat op termijn voordeliger is, hangt af van je verbruik en of je ook gefilterd of kokend water wilt. Voor wie veel bruiswater drinkt en gemak zoekt, kan de kraan aantrekkelijk zijn; voor incidenteel gebruik is de SodaStream goedkoper.',
  },
];

const kostenRows = [
  ['Toestel (eenmalig)', 'Enkele tientallen - ruim 100 euro', 'Varieert per model; soms incl. cilinder en flessen.'],
  ['CO2-cilinder (ruilvulling)', 'Terugkerend', 'Alleen de CO2-vulling; cilinder blijft in omloop.'],
  ['Flessen (vervanging)', 'Incidenteel', 'Herbruikbaar, met houdbaarheidsdatum.'],
  ['Kraanwater', 'Verwaarloosbaar', 'Vrijwel gratis per liter.'],
];

export default function SodaStreamPrijsPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'SodaStream prijs: toestel, cilinders en kosten per liter',
          description:
            'Indicatief prijsoverzicht van SodaStream: toestel, CO2-cilinders en kosten per liter bruiswater, met vergelijking.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/sodastream-prijs',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'SodaStream', url: 'https://waterfilterplatform.nl/sodastream' },
          { name: 'Prijs', url: 'https://waterfilterplatform.nl/sodastream-prijs' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/sodastream" className="hover:text-[#005F8A]">SodaStream</Link>
            <span className="mx-2">/</span>
            <span>Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            SodaStream prijs: wat kost bruiswater zelf maken?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Wat kost een <strong>SodaStream</strong> echt? Hieronder zetten we de indicatieve prijs van het
            toestel, de CO2-cilinders en de kosten per liter bruiswater op een rij - inclusief de
            vergelijking met flessen bruiswater. Prijzen zijn indicatief; controleer actuele bedragen bij de
            verkoper.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sodastream"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over SodaStream
            </Link>
            <Link
              href="/sodastream-co2"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              SodaStream CO2
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper (richtprijzen)', 'RIVM']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Wat kost een SodaStream?"
          answer="Een SodaStream-toestel kost indicatief enkele tientallen tot ruim honderd euro (eenmalig). Daarna betaal je vooral voor CO2-cilinders, die je via een ruilsysteem vervangt tegen een vulbedrag. Per liter bruiswater is dat doorgaans duidelijk goedkoper dan flessen bruiswater uit de winkel, plus je bespaart sjouwen en plastic. Een SodaStream filtert niet; voor gefilterd water is een aparte oplossing nodig. Bedragen zijn indicatief; controleer bij de verkoper."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenoverzicht SodaStream</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-3">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Indicatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {kostenRows.map(([k, v, t]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{k}</td>
                    <td className="py-2.5 px-3 text-gray-700">{v}</td>
                    <td className="py-2.5 px-3 text-gray-600">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026. Controleer actuele
            bedragen bij de verkoper.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten per liter vs flessen bruiswater</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De kern van de rekensom: na de eenmalige aanschaf betaal je alleen nog CO2 (en kraanwater).
            Deel de prijs van een ruilvulling door het aantal liters dat je ermee maakt, en je hebt de
            kosten per liter. Voor de meeste huishoudens ligt dat onder de literprijs van flessen
            bruiswater, terwijl je ook flessen sjouwen en plastic bespaart.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je gefilterd en gekoeld bruiswater zonder flessen vullen, vergelijk dan met een vaste kraan
            op{' '}
            <Link href="/sodastream-alternatief" className="text-[#005F8A] underline">SodaStream alternatief</Link>{' '}
            of bekijk de{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 kraan</Link>.
          </p>
        </section>

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over de SodaStream prijs</h2>
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
              ['/sodastream', 'Over SodaStream', 'Werking, modellen en kosten'],
              ['/sodastream-co2', 'SodaStream CO2', 'Cilinders ruilen, kosten en compatibiliteit'],
              ['/sodastream-alternatief', 'SodaStream alternatief', 'Bruiswaterkraan of 4-in-1 vergeleken'],
              ['/bruisend-water', 'Bruisend water', 'Alle opties voor bruisend water thuis'],
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
