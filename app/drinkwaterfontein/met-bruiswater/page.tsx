import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Drinkwaterfontein met bruiswater: hoe werkt het?',
    description:
      'Hoe werkt een drinkwaterfontein met bruiswater? Uitleg over CO2-cilinder, koeling en toepassing in horeca en kantoor, met kosten-aandachtspunten en een vergelijking met losse oplossingen.',
    alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/met-bruiswater' },
    openGraph: {
      title: 'Drinkwaterfontein met bruiswater: hoe werkt het?',
      description:
        'CO2 uit een cilinder in gekoeld leidingwater: zo werkt een bruiswaterfontein. Varianten, toepassing en aandachtspunten voor horeca en kantoor op een rij.',
      url: 'https://waterfilterplatform.nl/drinkwaterfontein/met-bruiswater',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Hoeveel kost een drinkwaterfontein met bruiswater?',
    answer:
      'De kosten lopen sterk uiteen per uitvoering en gebruiksintensiteit. Naast de aanschaf of huur tellen ook de terugkerende kosten mee: CO2-cilinders bijvullen of wisselen, energie voor koeling, filters en hygienisch onderhoud. Vraag altijd een offerte op maat aan en reken met de prijs per liter bij jouw verwachte verbruik in plaats van met losse aanschafprijzen.',
  },
  {
    question: 'Hoe vaak moet de CO2-cilinder worden bijgevuld?',
    answer:
      'Dat hangt af van het bruisverbruik en de cilindergrootte. Bij intensief gebruik in de horeca is dat vaker dan op een rustig kantoor. Veel leveranciers werken met wisselcilinders of een bijvulservice, zodat je niet zonder bruis komt te zitten. Houd het CO2-niveau in de gaten en plan vervanging voordat de cilinder leeg is.',
  },
  {
    question: 'Is bruiswater uit een fontein hygienisch?',
    answer:
      'Bij goed onderhoud wel. Net als bij gekoelde en gewone leidinggebonden fonteinen zijn periodieke reiniging, filtervervanging en aandacht voor het tappunt belangrijk. De combinatie van koeling en het carbonatiesysteem vraagt iets meer onderhoud dan een eenvoudig tappunt. Volg het onderhoudsschema van de leverancier.',
  },
  {
    question: 'Bruiswaterfontein of losse bruiswater-oplossing?',
    answer:
      'Een leidinggebonden bruiswaterfontein levert direct gekoeld bruisend water zonder flessenlogistiek en is bij hoog gebruik per liter gunstig. Een losse oplossing zoals een toesteltje voor thuis of flessen mineraalwater is goedkoper in aanschaf en flexibel, maar minder geschikt voor hoog volume. Kies op basis van verbruik, ruimte en doelgroep.',
  },
];

const variantList = [
  { naam: 'Plat (still) water', voor: 'Standaard tappunt', kosten: 'Laag per liter', let: 'Geen extra techniek nodig' },
  { naam: 'Gekoeld water', voor: 'Warme ruimtes, hoog gebruik', kosten: 'Midden + energie', let: 'Hygienisch onderhoud koeling' },
  { naam: 'Bruisend water (CO2)', voor: 'Horeca, kantoor, alternatief frisdrank', kosten: 'Hoger + CO2', let: 'CO2-cilinder bijhouden' },
  { naam: 'Bruis + koud gecombineerd', voor: 'Horeca, vergaderruimte', kosten: 'Hoger + energie + CO2', let: 'Koeling en CO2 onderhouden' },
  { naam: 'Met kokend water erbij', voor: 'Kantoor met thee en koffie', kosten: 'Hoogst (meerdere functies)', let: 'Veiligheid en meer onderhoud' },
];

export default function DrinkwaterfonteinMetBruiswaterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Drinkwaterfontein', url: 'https://waterfilterplatform.nl/drinkwaterfontein' },
          { name: 'Met bruiswater', url: 'https://waterfilterplatform.nl/drinkwaterfontein/met-bruiswater' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Varianten drinkwaterfontein met bruiswater',
            description: 'Overzicht van wateruitvoeringen bij een bruiswaterfontein met geschiktheid, kosten en aandachtspunten.',
            numberOfItems: variantList.length,
            url: 'https://waterfilterplatform.nl/drinkwaterfontein/met-bruiswater',
            itemListElement: variantList.map((t, i) => ({
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
            <span>Met bruiswater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwaterfontein met bruiswater: hoe werkt het?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een drinkwaterfontein met bruiswater voegt CO2 uit een cilinder toe aan gekoeld
            leidingwater, zodat je direct bruisend water tapt. Deze gids legt uit{' '}
            <strong>hoe het werkt</strong>, welke varianten er zijn en waar je op let bij
            horeca- en kantoorgebruik.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/drinkwaterfontein/soorten"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Alle soorten fonteinen
            </Link>
            <Link
              href="/kennisbank/bruisend-water-thuis"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Bruisend water thuis
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer
          question="Hoe werkt een drinkwaterfontein met bruiswater?"
          answer="Een drinkwaterfontein met bruiswater voegt CO2 uit een cilinder toe aan gekoeld leidingwater, zodat je bruisend water tapt. Het is geschikt voor horeca en kantoor als alternatief voor flessen frisdrank of mineraalwater. Let op het bijvullen van de CO2-cilinder, de koeling en de hygiene van het systeem."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zo werkt CO2-bruiswater in een fontein</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een bruiswaterfontein is meestal leidinggebonden: hij is aangesloten op de waterleiding
            en filtert het water. Voordat je tapt, wordt het water gekoeld en wordt er CO2 uit een
            cilinder doorheen geleid (carbonatie). Daardoor ontstaat bruisend water op het moment
            van tappen. De meeste toestellen laten je kiezen tussen plat, gekoeld en bruisend, en
            soms ook kokend water voor thee en koffie.
          </p>
          <p className="text-gray-700 leading-relaxed">
            De CO2 komt uit een verwisselbare of navulbare cilinder die in of bij de fontein staat.
            Hoe meer bruis er wordt getapt, hoe sneller de cilinder leegraakt. De koeling werkt
            doorlopend om het water op temperatuur te houden, wat energie kost.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Varianten: van plat tot bruisend en kokend</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Variant</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Geschikt voor</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kosten</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aandachtspunt</th>
                </tr>
              </thead>
              <tbody>
                {variantList.map(t => (
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">CO2-cilinder, koeling en onderhoud</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['CO2-cilinder', 'De cilinder levert het koolzuur. Plan bijvullen of wisselen voordat hij leeg is; bij hoog bruisverbruik vaker.'],
              ['Koeling', 'Gekoeld water verhoogt het gebruik, maar verbruikt doorlopend energie en vraagt hygienisch onderhoud.'],
              ['Hygiene', 'Periodieke reiniging, filtervervanging en aandacht voor het tappunt houden het water veilig en lekker.'],
              ['Toepassing', 'Geschikt voor horeca en kantoor als alternatief voor flessen frisdrank en mineraalwater.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Wil je liever thuis bruisend water maken, lees dan{' '}
            <Link href="/kennisbank/bruisend-water-thuis" className="text-[#005F8A] underline">bruisend water thuis</Link>.
            Zoek je vooral kokend water in de keuken, kijk dan naar de{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan</Link> als alternatief.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Bruiswaterfontein vs losse oplossingen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een leidinggebonden bruiswaterfontein levert direct gekoeld bruisend water zonder
            flessenlogistiek en is bij hoog gebruik per liter gunstig, maar vraagt een aansluiting,
            CO2-beheer en onderhoud. Een losse oplossing - zoals een toesteltje voor{' '}
            <Link href="/kennisbank/bruisend-water-thuis" className="text-[#005F8A] underline">bruisend water thuis</Link>{' '}
            of flessen mineraalwater - is goedkoper in aanschaf en flexibel, maar minder geschikt
            voor hoog volume. Wil je het hele aanbod naast elkaar zien, bekijk dan de{' '}
            <Link href="/drinkwaterfontein/soorten" className="text-[#005F8A] underline">soorten drinkwaterfonteinen</Link>.
          </p>
        </section>

        <CTABanner context="algemeen" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over drinkwaterfontein met bruiswater</h2>
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
              ['/drinkwaterfontein/soorten', 'Soorten fonteinen', 'Alle types op een rij'],
              ['/kennisbank/bruisend-water-thuis', 'Bruisend water thuis', 'De consumentenoplossing'],
              ['/kokend-water-kraan', 'Kokend water kraan', 'Alternatief voor de keuken'],
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
