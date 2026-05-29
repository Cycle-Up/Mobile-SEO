import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Leidinggebonden vs flessenfontein: wat is beter?',
    description:
      'Leidinggebonden vs flessenfontein vergeleken op kosten per liter, plaatsing, hygiene, duurzaamheid, capaciteit en onderhoud. Welke drinkwaterfontein past bij jouw situatie?',
    alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/leidinggebonden-vs-fles' },
    openGraph: {
      title: 'Leidinggebonden vs flessenfontein: wat is beter?',
      description:
        'Head-to-head: leidinggebonden (mains-fed) vs flessenfontein op kosten per liter, plaatsing, hygiene, duurzaamheid, capaciteit en onderhoud - met een duidelijke vergelijkingstabel.',
      url: 'https://waterfilterplatform.nl/drinkwaterfontein/leidinggebonden-vs-fles',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Is een leidinggebonden fontein goedkoper dan een flessenfontein?',
    answer:
      'Per liter is leidinggebonden water vrijwel altijd goedkoper, omdat je kraanwater filtert in plaats van flessen (gallons) in te kopen en te laten bezorgen. Een flessenfontein heeft lagere of geen installatiekosten, maar de terugkerende fles- en logistiekkosten lopen bij dagelijks gebruik snel op. Bedragen zijn indicatief en afhankelijk van leverancier en verbruik; vergelijk altijd de totale kosten per jaar, niet alleen de aanschaf.',
  },
  {
    question: 'Welke fontein is hygienischer?',
    answer:
      'Beide kunnen hygienisch zijn met goed onderhoud. Bij een leidinggebonden fontein stroomt vers water direct uit de leiding, met filters en periodieke reiniging als aandachtspunt. Bij een flessenfontein zit het risico vooral in het wisselen en bewaren van open gallons en in stilstaand water in het reservoir. Kies bij twijfel voor contactloze bediening en volg het onderhoudsschema van de leverancier.',
  },
  {
    question: 'Wanneer is een flessenfontein toch de betere keuze?',
    answer:
      'Een flessenfontein is handig als er geen wateraansluiting in de buurt is, bij tijdelijke locaties (evenementen, bouwplaats, pop-up) of bij laag en onregelmatig gebruik. Je plaatst hem flexibel zonder loodgieterswerk. Bij vast, dagelijks gebruik en een beschikbare aansluiting weegt dat voordeel meestal niet op tegen de hogere kosten per liter en het plasticverbruik.',
  },
  {
    question: 'Heb ik voor leidinggebonden altijd een loodgieter nodig?',
    answer:
      'Voor een vaste leidinggebonden fontein is een wateraansluiting (en vaak een afvoer) nodig, wat doorgaans installatie door een installateur of leverancier vraagt. Dat is een eenmalige stap; daarna heb je onbeperkt vers water zonder logistiek. Sommige modellen werken met een eenvoudige aansluiting op een bestaande kraan, maar controleer altijd de eisen van de leverancier en lokale regelgeving.',
  },
];

const vergelijking = [
  { criterium: 'Kosten per liter', leiding: 'Laag (gefilterd kraanwater)', fles: 'Hoog (inkoop + bezorging gallons)' },
  { criterium: 'Plaatsing / aansluiting', leiding: 'Wateraansluiting nodig', fles: 'Flexibel, geen aansluiting nodig' },
  { criterium: 'Hygiene', leiding: 'Vers water; filters en reiniging', fles: 'Risico bij wisselen/bewaren gallons' },
  { criterium: 'Duurzaamheid / plastic', leiding: 'Geen wegwerpflessen', fles: 'Herbruikbare gallons + transport' },
  { criterium: 'Capaciteit', leiding: 'Onbeperkt (continue toevoer)', fles: 'Beperkt tot flesinhoud (vaak 19 L)' },
  { criterium: 'Onderhoud', leiding: 'Filters en periodieke reiniging', fles: 'Flessen wisselen + reservoir reinigen' },
];

export default function LeidinggebondenVsFlesPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Drinkwaterfontein', url: 'https://waterfilterplatform.nl/drinkwaterfontein' },
          { name: 'Leidinggebonden vs fles', url: 'https://waterfilterplatform.nl/drinkwaterfontein/leidinggebonden-vs-fles' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Leidinggebonden vs flessenfontein',
            description: 'Vergelijking van een leidinggebonden drinkwaterfontein en een flessenfontein op kosten, plaatsing, hygiene, duurzaamheid, capaciteit en onderhoud.',
            numberOfItems: 2,
            url: 'https://waterfilterplatform.nl/drinkwaterfontein/leidinggebonden-vs-fles',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Leidinggebonden drinkwaterfontein (mains-fed)',
                description: 'Direct op de waterleiding aangesloten. Onbeperkt vers water, laag per liter en duurzamer, maar een wateraansluiting is nodig.',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Flessenfontein (gallon/bottle cooler)',
                description: 'Werkt met verwisselbare gallons (vaak 19 liter). Flexibel te plaatsen zonder aansluiting, maar duurder per liter met logistiek en hygiene rond de gallons.',
              },
            ],
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaterfontein" className="hover:text-[#005F8A]">Drinkwaterfontein</Link>
            <span className="mx-2">/</span>
            <span>Leidinggebonden vs fles</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Leidinggebonden vs flessenfontein: wat is beter?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De grootste keuze bij een drinkwaterfontein is leidinggebonden (mains-fed) versus een
            flessenfontein met gallons. Deze gids zet beide naast elkaar in een{' '}
            <strong>vergelijkingstabel</strong> op kosten per liter, plaatsing, hygiene,
            duurzaamheid, capaciteit en onderhoud.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/drinkwaterfontein/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Drinkwaterfontein kopen
            </Link>
            <Link
              href="/drinkwaterfontein/soorten"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle soorten fonteinen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Leidinggebonden of flessenfontein?"
          answer="Leidinggebonden levert onbeperkt vers water, is goedkoper per liter en duurzamer, maar vraagt een wateraansluiting. Een flessenfontein is flexibel te plaatsen zonder aansluiting, maar is duurder per liter en brengt logistiek en hygiene rond de gallons met zich mee. Bij dagelijks gebruik en een beschikbare aansluiting is leidinggebonden meestal de betere keuze."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijkingstabel: leidinggebonden vs fles</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Criterium</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Leidinggebonden</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Flessenfontein</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(r => (
                  <tr key={r.criterium} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{r.criterium}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.leiding}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.fles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve vergelijking op basis van publieke richtinfo; geen vaste prijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je leidinggebonden?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een leidinggebonden (mains-fed) fontein is aangesloten op de waterleiding en levert
            onbeperkt vers, gefilterd water. Per liter is dat doorgaans de goedkoopste optie en je
            voorkomt het inkopen, bezorgen en opslaan van flessen, wat de duurzaamste keuze is. De
            voorwaarde is een wateraansluiting (en vaak een afvoer), wat een eenmalige installatie
            vraagt. Bij vast, dagelijks gebruik op kantoor, school of in de openbare ruimte is dit
            meestal de beste keuze. Lees ook{' '}
            <Link href="/drinkwaterfontein/kopen" className="text-[#005F8A] underline">drinkwaterfontein kopen</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je een flessenfontein?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een flessenfontein (bottle cooler) werkt met verwisselbare gallons, meestal 19 liter. Je
            plaatst hem flexibel zonder loodgieterswerk, wat ideaal is bij tijdelijke locaties of als
            er geen aansluiting beschikbaar is. Daar staat tegenover dat de kosten per liter hoger
            liggen, dat je telkens flessen moet bestellen en wisselen, en dat hygiene rond open
            gallons en stilstaand water extra aandacht vraagt. Bekijk de bredere context bij{' '}
            <Link href="/drinkwaterfontein/soorten" className="text-[#005F8A] underline">soorten drinkwaterfonteinen</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar let je op bij de afweging?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Kosten per liter', 'Reken met de totale jaarkosten: aansluiting en filters versus terugkerende fles- en bezorgkosten.'],
              ['Aansluiting', 'Is er een waterleiding (en afvoer) in de buurt? Zonder aansluiting valt de keuze sneller op een flessenfontein.'],
              ['Hygiene', 'Vers water uit de leiding versus risico bij het wisselen en bewaren van gallons; plan reiniging in.'],
              ['Duurzaamheid', 'Leidinggebonden voorkomt transport en wegwerpverpakking; weeg dit mee bij hoog verbruik.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Voor een zakelijke afweging per situatie en sector, zie{' '}
            <Link href="/zakelijk" className="text-[#005F8A] underline">zakelijke wateroplossingen</Link>.
          </p>
        </section>

        <CTABanner context="zakelijk" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over leidinggebonden vs flessenfontein</h2>
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
              ['/drinkwaterfontein/soorten', 'Soorten drinkwaterfonteinen', 'Alle types vergeleken'],
              ['/drinkwaterfontein/kopen', 'Drinkwaterfontein kopen', 'Waar let je op bij aanschaf'],
              ['/drinkwaterfontein', 'Drinkwaterfontein', 'Alles over drinkwaterfonteinen'],
              ['/zakelijk', 'Zakelijke wateroplossingen', 'Per sector en situatie'],
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
