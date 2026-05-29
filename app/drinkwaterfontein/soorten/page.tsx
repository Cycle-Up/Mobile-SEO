import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Drinkwaterfontein soorten: types, koeling en bruiswater vergeleken',
    description:
      'Welke soorten drinkwaterfonteinen zijn er? Leidinggebonden vs flessenfontein, met koeling, bruiswater of contactloos - vergeleken op gebruik, kosten en onderhoud.',
    alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/soorten' },
    openGraph: {
      title: 'Drinkwaterfontein soorten: types vergeleken',
      description:
        'Alle types drinkwaterfonteinen op een rij: leidinggebonden, flessenfontein, gekoeld, bruiswater en contactloos - met een keuzematrix per situatie.',
      url: 'https://waterfilterplatform.nl/drinkwaterfontein/soorten',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Welke soorten drinkwaterfonteinen zijn er?',
    answer:
      'De hoofdtypen zijn: leidinggebonden (mains-fed) fonteinen die direct op de waterleiding zijn aangesloten, en flessenfonteinen met verwisselbare gallons (meestal 19 liter). Daarbinnen kies je opties zoals koeling, bruiswater, kokend water, en uitvoering (vrijstaand, muurmodel of inbouw). Voor publieke en zakelijke plekken zijn er ook contactloze (sensor) tappunten en vandalismebestendige RVS-modellen.',
  },
  {
    question: 'Leidinggebonden of flessenfontein: wat is beter?',
    answer:
      'Een leidinggebonden fontein levert onbeperkt vers water zonder logistiek en is per liter goedkoper en duurzamer, maar vereist een wateraansluiting. Een flessenfontein is flexibel te plaatsen zonder aansluiting, maar brengt terugkerende fles- en logistiekkosten en hygienerisico bij de gallons met zich mee. Bij dagelijks gebruik en een beschikbare aansluiting is leidinggebonden meestal de betere keuze.',
  },
  {
    question: 'Wil je koeling of bruiswater bij een drinkwaterfontein?',
    answer:
      'Koeling verhoogt het gebruik (mensen drinken meer koud water) maar verbruikt energie en vraagt hygienisch onderhoud. Bruiswater (met CO2) maakt een fontein aantrekkelijker als alternatief voor flessen frisdrank of mineraalwater. Beide opties verhogen aanschaf- en onderhoudskosten; kies ze op basis van het verwachte gebruik en de doelgroep.',
  },
  {
    question: 'Welke drinkwaterfontein is geschikt voor openbare ruimte?',
    answer:
      'Voor openbare plekken en intensief gebruik zijn robuuste, vandalismebestendige RVS-tappunten met contactloze (sensor) bediening en een vorstvrije uitvoering het meest geschikt. Ze zijn leidinggebonden, eenvoudig te reinigen en vaak voorzien van een bidon-vulpunt. Let op hygiene, afwatering en winterklaar maken.',
  },
];

const typeList = [
  { naam: 'Leidinggebonden tappunt', voor: 'Kantoor, school, openbaar', kosten: 'Laag per liter', let: 'Wateraansluiting nodig' },
  { naam: 'Flessenfontein (gallon)', voor: 'Flexibele plek, geen aansluiting', kosten: 'Hoog per liter (flessen)', let: 'Logistiek en hygiene gallons' },
  { naam: 'Gekoelde fontein', voor: 'Warme ruimtes, hoog gebruik', kosten: 'Midden + energie', let: 'Hygienisch onderhoud koeling' },
  { naam: 'Bruiswaterfontein', voor: 'Horeca, kantoor, alternatief frisdrank', kosten: 'Hoger + CO2', let: 'CO2-cilinder bijhouden' },
  { naam: 'Contactloze (sensor) fontein', voor: 'Openbaar, hygiene-gevoelig', kosten: 'Midden-hoog', let: 'Sensoronderhoud' },
];

export default function DrinkwaterfonteinSoortenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Drinkwaterfontein', url: 'https://waterfilterplatform.nl/drinkwaterfontein' },
          { name: 'Soorten', url: 'https://waterfilterplatform.nl/drinkwaterfontein/soorten' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Soorten drinkwaterfonteinen',
            description: 'Overzicht van types drinkwaterfonteinen met geschiktheid, kosten en aandachtspunten.',
            numberOfItems: typeList.length,
            url: 'https://waterfilterplatform.nl/drinkwaterfontein/soorten',
            itemListElement: typeList.map((t, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: t.naam,
              description: `Geschikt voor ${t.voor}. ${t.kosten}. Let op: ${t.let}.`,
            })),
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
            <span>Soorten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwaterfontein soorten: welke types zijn er?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Er zijn meer soorten drinkwaterfonteinen dan je denkt: van leidinggebonden tappunten tot
            flessenfonteinen, met of zonder koeling, bruiswater of contactloze bediening. Deze gids
            zet de types naast elkaar met een <strong>keuzematrix per situatie</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/drinkwaterfontein/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Drinkwaterfontein kopen
            </Link>
            <Link
              href="/drinkwaterfontein/leidinggebonden-vs-fles"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Leidinggebonden vs fles
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer
          question="Welke soorten drinkwaterfonteinen zijn er?"
          answer="Er zijn twee hoofdtypen: leidinggebonden (mains-fed) fonteinen die op de waterleiding zijn aangesloten, en flessenfonteinen met 19-liter gallons. Daarbinnen kies je opties zoals koeling, bruiswater, kokend water en uitvoering (vrijstaand, muur of inbouw). Voor openbaar gebruik zijn er robuuste contactloze RVS-tappunten. Bij dagelijks gebruik en een aansluiting is leidinggebonden meestal goedkoper en duurzamer."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Keuzematrix: type per situatie</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Type</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Geschikt voor</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kosten</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aandachtspunt</th>
                </tr>
              </thead>
              <tbody>
                {typeList.map(t => (
                  <tr key={t.naam} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{t.naam}</td>
                    <td className="py-2.5 px-3 text-gray-700">{t.voor}</td>
                    <td className="py-2.5 px-3 text-gray-700">{t.kosten}</td>
                    <td className="py-2.5 px-3 text-gray-700">{t.let}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve vergelijking op basis van publieke richtinfo. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Leidinggebonden vs flessenfontein</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De belangrijkste keuze is leidinggebonden (direct op de waterleiding) versus een
            flessenfontein met verwisselbare gallons. Leidinggebonden levert onbeperkt vers water,
            is per liter goedkoper en duurzamer, maar vraagt een aansluiting. Een flessenfontein is
            flexibel te plaatsen, maar kent terugkerende fles- en logistiekkosten en hygienerisico
            bij de gallons. Lees de volledige afweging in{' '}
            <Link href="/drinkwaterfontein/leidinggebonden-vs-fles" className="text-[#005F8A] underline">leidinggebonden vs flessenfontein</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Opties: koeling, bruiswater en contactloos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Koeling', 'Gekoeld water verhoogt het gebruik, maar kost energie en vraagt hygienisch onderhoud.'],
              ['Bruiswater', 'CO2-bruiswater maakt de fontein een alternatief voor flessen frisdrank en mineraalwater.'],
              ['Kokend water', 'Sommige tappunten leveren ook kokend water; vergelijk met een kokend water kraan voor de keuken.'],
              ['Contactloos', 'Sensorbediening en bidon-vulpunten zijn hygienisch en ideaal voor openbaar gebruik.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Meer over deze opties: lees{' '}
            <Link href="/drinkwaterfontein/met-bruiswater" className="text-[#005F8A] underline">drinkwaterfontein met bruiswater</Link>,{' '}
            <Link href="/drinkwaterfontein/koeling" className="text-[#005F8A] underline">gekoelde drinkwaterfontein</Link> en{' '}
            <Link href="/drinkwaterfontein/contactloos" className="text-[#005F8A] underline">contactloze drinkwaterfontein</Link>.
          </p>
        </section>

        <CTABanner context="zakelijk" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over soorten drinkwaterfonteinen</h2>
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
              ['/drinkwaterfontein', 'Drinkwaterfontein', 'Alles over drinkwaterfonteinen'],
              ['/drinkwaterfontein/kopen', 'Drinkwaterfontein kopen', 'Waar let je op bij aanschaf'],
              ['/drinkwaterfontein/kantoor', 'Voor kantoor', 'Fontein op de werkplek'],
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
