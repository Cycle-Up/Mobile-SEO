import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'SodaStream CO2-cilinders: ruilen, kosten en compatibiliteit',
    description:
      'Hoe werken SodaStream CO2-cilinders? Ruilsysteem, kosten, hoe lang een cilinder meegaat en compatibiliteit (schroef vs quick-connect). Neutraal uitgelegd.',
    alternates: { canonical: 'https://waterfilterplatform.nl/sodastream-co2' },
    openGraph: {
      title: 'SodaStream CO2-cilinders: ruilen, kosten en compatibiliteit',
      description:
        'Alles over SodaStream CO2-cilinders: ruilen, kosten per liter, levensduur en compatibiliteit met andere merken.',
      url: 'https://waterfilterplatform.nl/sodastream-co2',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Hoe werkt het ruilen van een SodaStream CO2-cilinder?',
    answer:
      'Een lege CO2-cilinder lever je in en je betaalt alleen voor de vulling van een volle ruilcilinder; de cilinder zelf blijft in omloop. Ruilen kan bij veel supermarkten, bouwmarkten en online. De eerste keer koop je een cilinder inclusief statiegeld of borg; daarna ruil je steeds tegen een lager vulbedrag.',
  },
  {
    question: 'Hoe lang gaat een SodaStream CO2-cilinder mee?',
    answer:
      'Een standaardcilinder maakt grofweg enkele tientallen liters bruiswater, afhankelijk van hoe bruisend je het water maakt: hoe meer koolzuur per fles, hoe sneller de cilinder leeg is. Bij gemiddeld gebruik gaat een cilinder bij veel huishoudens enkele weken tot maanden mee. De exacte opbrengst staat op de verpakking.',
  },
  {
    question: 'Wat kost een SodaStream CO2-cilinder?',
    answer:
      'Een ruilvulling kost doorgaans minder dan een nieuwe cilinder, omdat je alleen voor de CO2 betaalt en niet voor de cilinder. De precieze prijs verschilt per verkoper en actie. Reken het om naar kosten per liter bruiswater om het te vergelijken met flessen bruiswater; meestal is zelf maken voordeliger. Zie ook onze pagina over de SodaStream prijs.',
  },
  {
    question: 'Zijn SodaStream-cilinders compatibel met andere merken?',
    answer:
      'Er bestaan twee gangbare systemen: cilinders met schroefdraad en cilinders met een quick-connect-koppeling. Compatibiliteit hangt af van het type aansluiting van jouw toestel. Sommige andere merken en hervulsystemen passen op schroefcilinders, maar controleer altijd de specificaties van je toestel en de voorwaarden van de fabrikant voordat je een cilinder van een ander merk gebruikt.',
  },
  {
    question: 'Mag je een SodaStream-cilinder zelf navullen?',
    answer:
      'CO2-cilinders staan onder druk; zelf navullen wordt door fabrikanten doorgaans afgeraden en kan onveilig zijn of de garantie laten vervallen. Het ruilsysteem is bedoeld als veilige en gecontroleerde manier om cilinders te vervangen. Bij twijfel volg je de instructies van de fabrikant.',
  },
];

export default function SodaStreamCo2Page() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'SodaStream CO2-cilinders: ruilen, kosten en compatibiliteit',
          description:
            'Neutrale uitleg over SodaStream CO2-cilinders: ruilsysteem, kosten per liter, levensduur en compatibiliteit.',
          datePublished: '2026-05-30',
          dateModified: '2026-05-30',
          url: 'https://waterfilterplatform.nl/sodastream-co2',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'SodaStream', url: 'https://waterfilterplatform.nl/sodastream' },
          { name: 'CO2-cilinders', url: 'https://waterfilterplatform.nl/sodastream-co2' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/sodastream" className="hover:text-[#005F8A]">SodaStream</Link>
            <span className="mx-2">/</span>
            <span>CO2-cilinders</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            SodaStream CO2-cilinders: ruilen, kosten en compatibiliteit
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>CO2-cilinder</strong> is het hart van elke SodaStream en meteen de belangrijkste
            terugkerende kostenpost. Hieronder lees je hoe het ruilsysteem werkt, hoe lang een cilinder
            meegaat, wat het kost en waar je op let bij compatibiliteit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sodastream"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over SodaStream
            </Link>
            <Link
              href="/sodastream-prijs"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              SodaStream prijs
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-30" sources={['Fabrikant / verkoper', 'RIVM']} />
        <AuthorBox datePublished="2026-05-30" />

        <QuickAnswer
          question="Hoe werken SodaStream CO2-cilinders en wat kosten ze?"
          answer="SodaStream werkt met CO2-cilinders die je via een ruilsysteem vervangt: je levert de lege in en betaalt alleen de vulling van een volle ruilcilinder. Een cilinder maakt grofweg enkele tientallen liters bruiswater, afhankelijk van hoe bruisend je het water maakt. Er zijn twee aansluitingen (schroef en quick-connect); compatibiliteit met andere merken hangt daarvan af. Zelf navullen wordt door fabrikanten afgeraden vanwege de druk."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Het ruilsysteem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CO2-cilinders blijven in omloop: je ruilt een lege tegen een volle en betaalt alleen voor de
            vulling. Dat is goedkoper en duurzamer dan steeds een nieuwe cilinder kopen. Ruilen kan op veel
            plekken, van supermarkt tot bouwmarkt en online. Houd lege cilinders dus apart om in te leveren.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            {[
              ['Eerste aanschaf', 'Je koopt eenmalig een cilinder (met borg/statiegeld), vaak meegeleverd bij het toestel.'],
              ['Daarna ruilen', 'Lege inleveren, volle meenemen tegen een lager vulbedrag.'],
              ['Levensduur per cilinder', 'Grofweg enkele tientallen liters; hoe bruisender, hoe sneller leeg.'],
              ['Twee aansluitingen', 'Schroefdraad of quick-connect; bepaalt compatibiliteit.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="text-[#005F8A] font-bold">-</span>
                <p className="text-gray-700"><strong>{t}</strong> - {d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wil je de kosten per liter narekenen en vergelijken met flessen bruiswater? Dat staat op{' '}
            <Link href="/sodastream-prijs" className="text-[#005F8A] underline">SodaStream prijs</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Compatibiliteit en veiligheid</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Controleer of jouw toestel een schroef- of quick-connect-cilinder gebruikt; dat bepaalt welke
            cilinders passen. Cilinders staan onder druk, dus zelf navullen wordt door fabrikanten
            afgeraden en kan de garantie laten vervallen. Gebruik het ruilsysteem en volg de instructies
            van de fabrikant.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Overweeg je in plaats van losse cilinders een vaste oplossing met gefilterd bruiswater? Lees{' '}
            <Link href="/sodastream-alternatief" className="text-[#005F8A] underline">SodaStream alternatief</Link>{' '}
            of bekijk de{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline">4-in-1 kraan</Link>.
          </p>
        </section>

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over SodaStream CO2</h2>
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
              ['/sodastream-prijs', 'SodaStream prijs', 'Toestel, cilinders en kosten per liter'],
              ['/bruisend-water/co2', 'CO2 voor bruisend water', 'Hoe koolzuur werkt en wat je nodig hebt'],
              ['/sodastream-alternatief', 'SodaStream alternatief', 'Bruiswaterkraan of 4-in-1 vergeleken'],
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
