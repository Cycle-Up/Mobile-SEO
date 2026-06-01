import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Drinkwaterfontein onderhoud: reinigen, filters vervangen en levensduur 2026',
  description: 'Hoe onderhoud u een drinkwaterfontein? Stappenplan voor reiniging, filtervervanging en desinfectie. Inclusief schema voor koolstoffilter, UV-lamp en',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/onderhoud' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik het filter van mijn drinkwaterfontein vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een koolstoffilter in een drinkwaterfontein moet doorgaans elke 6-12 maanden worden vervangen, afhankelijk van het waterverbruik en de waterkwaliteit in uw gemeente. Fabrikanten geven een maximaal doorspoelvolume op (bijv. 3.000-6.000 liter). Bij hard water (boven 15 dH) of bij hogere slijtage door chloor verslijt het filter sneller. Een UV-lamp vervangt u jaarlijks; een RO-membraan elke 2-3 jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe reinig ik een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wekelijks: veeg het mondstuk en de buitenzijde schoon met een vochtige doek en desinfectiemiddel. Maandelijks: verwijder de druppelplaat en reinig grondig. Elk kwartaal: volledige inwendige reiniging met citroenzuur (3% oplossing) of een levensmiddelenveilig desinfectans. Jaarlijks: vervang alle filters en de UV-lamp (indien aanwezig). Gebruik nooit agressieve reinigingsmiddelen die sporen kunnen achterlaten in het waterreservoir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een drinkwaterfontein mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goed onderhouden drinkwaterfontein gaat 8-15 jaar mee. Koelcompressors gaan 8-12 jaar mee; Peltier-elementen (in compactere modellen) 5-8 jaar. De pomp in mains-fed modellen gaat doorgaans 10+ jaar mee bij regelmatig gebruik. Slecht onderhoud &mdash; met name geen filtervervanging en geen periodieke reiniging &mdash; verkort de levensduur aanzienlijk en verhoogt het risico op bacteriegroei.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de signalen dat mijn drinkwaterfontein dringend onderhoud nodig heeft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Signalen die wijzen op noodzakelijk onderhoud zijn: verandering in smaak of geur van het water (chlorig, muf of aards), verminderde doorstroomsnelheid, zichtbare aanslag of schimmel op het mondstuk of druppelplaat, lekken bij de aansluiting, en ongewoon geluid van de koeling of pomp. Bij smaak- of geurproblemen is onmiddellijke filtervervanging en desinfectie noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik het onderhoud van mijn drinkwaterfontein zelf doen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste onderhoudstaken kunt u zelf uitvoeren: uitwendige reiniging, filtervervanging (schroefverbinding of push-fit, geen gereedschap nodig bij de meeste modellen) en ontkalking. Voor inwendige reiniging van de koelcircuit of reparatie van de koelcompressor is een technicus noodzakelijk. Bij huurmodellen verzorgt de leverancier doorgaans het periodieke onderhoud. Raadpleeg altijd de handleiding van uw specifieke model voor de juiste procedure.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Drinkwaterfontein onderhoud: reinigen, filters vervangen en levensduur 2026',
  description: 'Hoe onderhoud u een drinkwaterfontein? Stappenplan voor reiniging, filtervervanging en desinfectie.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/drinkwaterfontein/onderhoud',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterfonteinOnderhoudPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwaterfontein', item: 'https://waterfilterplatform.nl/drinkwaterfontein' },
              { '@type': 'ListItem', position: 3, name: 'Drinkwaterfontein onderhoud', item: 'https://waterfilterplatform.nl/drinkwaterfontein/onderhoud' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwaterfontein" className="hover:underline">Drinkwaterfontein</Link> &rsaquo;{' '}
          <span>Drinkwaterfontein onderhoud</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwaterfontein onderhoud: reinigen, filters vervangen en levensduur 2026
        </h1>

        <QuickAnswer answer="Een drinkwaterfontein vereist periodiek onderhoud: wekelijks de buitenzijde reinigen, maandelijks de druppelplaat schoonmaken en jaarlijks alle filters vervangen. Een UV-lamp vervangt u jaarlijks; een RO-membraan elke 2-3 jaar. Bij goed onderhoud gaat een fontein 8-15 jaar mee." />

        <CTABanner context="osmose" />

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Onderhoudsschema drinkwaterfontein
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="px-3 py-2 text-left">Frequentie</th>
                  <th className="px-3 py-2 text-left">Taak</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Wekelijks</td>
                  <td className="border border-gray-300 px-3 py-2">Mondstuk en buitenzijde reinigen met desinfectiedoekje</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Maandelijks</td>
                  <td className="border border-gray-300 px-3 py-2">Druppelplaat verwijderen en grondig reinigen; reservoir afspoelen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Per kwartaal</td>
                  <td className="border border-gray-300 px-3 py-2">Inwendige reiniging met citroenzuur of desinfectans</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Jaarlijks</td>
                  <td className="border border-gray-300 px-3 py-2">Koolstoffilter vervangen; UV-lamp vervangen (indien aanwezig)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Elke 2-3 jaar</td>
                  <td className="border border-gray-300 px-3 py-2">RO-membraan vervangen (bij omgekeerde osmose modellen)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtervervanging stap voor stap
        </h2>
        <ol className="space-y-3 text-gray-700 mb-6">
          <li className="flex gap-3">
            <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">1</span>
            <div><strong>Schakel de fontein uit</strong> en sluit (bij mains-fed modellen) de watertoevoer af via de kogelkraan onder het aanrecht of achter de fontein.</div>
          </li>
          <li className="flex gap-3">
            <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">2</span>
            <div><strong>Verwijder het oude filter</strong> door het te draaien of te trekken (afhankelijk van het model). Leg een handdoek neer om restwater op te vangen.</div>
          </li>
          <li className="flex gap-3">
            <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">3</span>
            <div><strong>Reinig de filterhouder</strong> met een schone doek. Controleer op aanslag of slijm; verwijder deze met een citroenzuur oplossing.</div>
          </li>
          <li className="flex gap-3">
            <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">4</span>
            <div><strong>Installeer het nieuwe filter</strong>. Zorg dat de afdichtring (O-ring) correct zit om lekkage te voorkomen.</div>
          </li>
          <li className="flex gap-3">
            <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">5</span>
            <div><strong>Spoel het filter door</strong> door de eerste 2-5 liter water door te laten lopen voordat u het water drinkt. Dit verwijdert losse koolstofdeeltjes.</div>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Ontkalking van de fontein
        </h2>
        <p className="text-gray-700 mb-4">
          In gebieden met hard water (boven 15 dH) vormt zich kalk op de verwarmingselementen en inwendige leidingen. Dit verlaagt de energieefficiency en kan de levensduur van de fontein verkorten. Ontkalking doet u als volgt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Gebruik een 3% citroenzuuroplossing (3 gram per 100 ml water) of een kant-en-klaar ontkalkingsmiddel voor waterfonteinen.</li>
          <li>Laat de oplossing 30 minuten inwerken in het reservoir.</li>
          <li>Spoel minimaal 3 keer door met schoon leidingwater.</li>
          <li>Herhaal dit proces elk kwartaal bij hard water; halfjaarlijks bij zacht water.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meer over de invloed van kalk op drinkwaterapparatuur leest u op de pagina over{' '}
          <Link href="/onderhoud/koolstoffilter-levensduur" className="text-[#005F8A] underline">koolstoffilter levensduur</Link>.
          De techniek achter actief koolfiltratie in drinkwaterfonteinen vindt u op de pagina over{' '}
          <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">actief kool filtertechniek</Link>.
        </p>

        {/* Gerelateerde onderwerpen */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/drinkwaterfontein/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaterfontein kopen</h3>
              <p className="text-sm text-gray-600">Koopgids met prijsklassen, merken en beslispunten voor thuis en kantoor.</p>
            </Link>
            <Link href="/onderhoud/koolstoffilter-levensduur" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Koolstoffilter levensduur</h3>
              <p className="text-sm text-gray-600">Hoe lang gaat een koolstoffilter mee en wanneer moet u het vervangen?</p>
            </Link>
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool filtertechniek</h3>
              <p className="text-sm text-gray-600">Hoe actief kool werkt in drinkwaterfonteinen en wat het filtert.</p>
            </Link>
            <Link href="/drinkwaterfontein" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaterfontein</h3>
              <p className="text-sm text-gray-600">Alles over drinkwaterfonteinen: types, kosten en onderhoud.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over drinkwaterfontein onderhoud</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/drinkwaterfontein" className="text-[#005F8A] underline">drinkwaterfontein overzicht</Link>,{' '}
          <Link href="/drinkwaterfontein/kopen" className="text-[#005F8A] underline">drinkwaterfontein kopen</Link>,{' '}
          <Link href="/drinkwaterfontein/huren" className="text-[#005F8A] underline">drinkwaterfontein huren</Link> en{' '}
          <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">actief kool techniek</Link>.
        </p>
      </main>
    </>
  );
}
