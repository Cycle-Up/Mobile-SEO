import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Filterkan of waterkraan filter: welke waterfilter past bij u?',
  description: 'Filterkan (Brita, PearlCo) of een filterkraan: beide filteren chloor en kalk, maar verschillen in gemak, filterkosten en filtratiewerking.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filterkan/vs-waterkraan-filter' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een filterkan en een filterkraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een filterkan is een vrijstaande kan met een vervangbaar actief koolfilter en ionenwisselaar waarmee u handmatig water filtert en in de koelkast bewaart. Een filterkraan (of onderbouwfilter) is een vaste installatie onder de keukeninbak die ongefilterd leidingwater automatisch filtert zodra u de kraan opendraait. Beide gebruiken dezelfde filtertechnologie (actieve kool + ionenwisseling), maar de filterkraan biedt meer gemak en een grotere filtercapaciteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Filtert een Brita-kan ook PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, of slechts in beperkte mate. Standaard Brita-filters (MAXTRA) zijn gebaseerd op actieve kool en ionenwisseling, wat effectief is voor chloor (80-95%) en lood (80-90%), maar niet gecertificeerd voor PFAS-verwijdering. Sommige nieuwere filtertype hebben extra actieve koollagen die een deel van PFAS kunnen adsorberen, maar betrouwbare en consistente PFAS-verwijdering tot 95%+ is alleen bereikbaar met een osmosefilter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik het filter van een filterkan vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste filterkartridges voor filterkannen (Brita, PearlCo, Laica) moeten worden vervangen na 150 liter gefilterd water, wat voor een eenpersoons huishouden ongeveer 30 dagen duurt (5 L/dag), en voor twee personen circa 15 dagen. Bij hard water of hoog chloorgehalte kan het filter sneller uitgeput raken. Vervang het filter altijd op tijd: een verzadigd filter geeft geen bescherming meer en kan bacterien doorlaten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een filterkraan beter dan een filterkan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste toepassingen biedt een filterkraan (onderbouwfilter) meer voordelen dan een filterkan. Een filterkraan filtert automatisch zonder bijvullen, heeft een onbeperkte capaciteit, heeft grotere filters met langere levensduur (3-6 maanden), en biedt een constante stroom gefilterd water direct uit de kraan. Een filterkan heeft als voordeel dat hij goedkoper is bij aanschaf, geen installatie vereist en geschikt is voor huurwoningen zonder ingrepen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een filterkan bacterien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Filterkannen en filterkranen op basis van actieve kool en ionenwisseling verwijderen geen bacterien. De filterporieen zijn te groot om bacterien te filteren; bovendien kunnen bacterien zich in het actief koolmedium vermenigvuldigen als het filter te oud is of lang stilstaat. Voor microbiologisch veilig water bij twijfel over de kwaliteit is een osmosefilter (met membraan) of UV-desinfectie de juiste keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de goedkoopste filterkartridges voor filterkannen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huismerken en merkcompatibele kartridges van PearlCo, Laica of BWT zijn doorgaans 30-50% goedkoper dan originele Brita MAXTRA-filters. Veel van deze kartridges zijn compatibel met Brita-kannen en bieden vergelijkbare filterprestaties. Controleer altijd of de kartridge de NSF/ANSI 42-certificering heeft voor chloorverwijdering. Let op: de goedkoopste filteropties (minder dan 2 euro per stuk) hebben soms kortere levensduur dan de opgegeven 150 liter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik filterwater gebruiken voor babymelk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een filterkan verbetert de smaak van water maar is niet gecertificeerd voor de bereiding van babymelk als het leidingwater verontreinigd kan zijn met nitraat, lood of PFAS. Filterkannen verwijderen lood voor 80-90% en nitraat nauwelijks. Voor babyvoeding is osmosewater (95-99% verwijdering van alle verontreinigingen) de veiligste keuze. Breng osmosewater altijd aan de kook voor het aanmaken van flesvoeding om microbiologische veiligheid te garanderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is een osmosefilter beter dan een filterkan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een osmosefilter is noodzakelijk wanneer: (1) u in een PFAS-risicozone woont; (2) uw huis loodleidingen heeft (gebouwen van voor 1960); (3) u baby of peuter in huis heeft; (4) uw kraanwater een verhoogd nitraatgehalte heeft (agrarische gebieden); (5) u zich zorgen maakt over hormonen, medicijnresten of microplastics. Een filterkan is voldoende als u alleen de chloorsmaken wilt verwijderen en geen specifieke chemische verontreinigingen in uw leidingwater heeft.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Filterkan of waterkraan filter: welke waterfilter past bij u?',
  description: 'Filterkan (Brita, PearlCo) of een filterkraan: vergelijking voor chloor, lood, PFAS, bacterien, kosten en gemak.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/filterkan/vs-waterkraan-filter',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function FilterkanVsWaterkraanFilterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Filterkan', item: 'https://waterfilterplatform.nl/filterkan' },
              { '@type': 'ListItem', position: 3, name: 'Filterkan vs waterkraan filter', item: 'https://waterfilterplatform.nl/filterkan/vs-waterkraan-filter' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/filterkan" className="hover:underline">Filterkan</a> &rsaquo;{' '}
          <span>Filterkan vs waterkraan filter</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Filterkan of waterkraan filter: welke waterfilter past bij u?
          </h1>
          <p className="text-gray-700 text-lg">
            Zowel filterkannen (Brita, PearlCo, Laica) als filterkranen (Grohe Blue, TAPP Water, BWT) gebruiken actieve kool om chloor en lood te filteren.
            Het verschil zit in gemak, capaciteit, filterkosten en wat ze wel en niet aankunnen.
          </p>
        </div>

        <QuickAnswer answer="Een filterkan (Brita, PearlCo) filtert chloor (80-95%) en lood (80-90%) maar geen PFAS, nitraat of bacterien. Een filterkraan doet hetzelfde maar automatisch en met grotere capaciteit. Een osmosefilter verwijdert alles inclusief PFAS en nitraat. Filterkan voor huurwoning of budget onder 50 euro; filterkraan voor comfort; osmose bij PFAS, loodleidingen of baby." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat filtert een filterkan?
        </h2>
        <p className="text-gray-700 mb-4">
          Filterkannen zoals Brita, PearlCo en Laica combineren twee filtertechnieken:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Actieve kool</strong>: adsorbeert chloor, chloorkoolwaterstoffen en organische stoffen die de smaak en geur beinvloeden</li>
          <li><strong>Ionenwisseling</strong>: verlaagt de waterhardheid met circa 50% door calcium- en magnesiumionen gedeeltelijk te vervangen</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Wat filterkannen effectief doen: chloor verwijderen (80-95%), lood reduceren (80-90%), smaak en geur verbeteren, waterhardheid verlagen.
        </p>
        <p className="text-gray-700 mb-6">
          Wat filterkannen <strong>niet</strong> kunnen: PFAS verwijderen, nitraat filteren, bacterien tegenhouden, microplastics volledig blokkeren.
          Voor deze stoffen is een osmosefilter noodzakelijk.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat filtert een filterkraan of onderbouwfilter?
        </h2>
        <p className="text-gray-700 mb-4">
          Filterkranen zoals Grohe Blue, TAPP Water en BWT Bestmax gebruiken hetzelfde principe als filterkannen,
          maar zijn vast gemonteerd onder de keukeninbak. Het bronwater passeert het filter zodra u de kraan opendraait.
          Voordelen ten opzichte van de filterkan:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Onbeperkte capaciteit: geen handmatig bijvullen</li>
          <li>Grotere filters met een levensduur van 3-6 maanden in plaats van 30 dagen</li>
          <li>Hogere doorstroomsnelheid: direct gefilterd water uit de kraan</li>
          <li>Sommige modellen bieden betere chloorverwijdering (90%+) dankzij grotere filteroppervlakken</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Filterkranen verwijderen ook geen PFAS, nitraat of bacterien.
          Ze bieden hoofdzakelijk smaakverbetering en gedeeltelijke ontharting, net als filterkannen maar met meer gemak.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: filterkan vs filterkraan vs osmose
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Criterium</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Filterkan</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Filterkraan</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-[#003F5C]">Osmose 4-in-1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Chloor</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (80-95%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (90%+)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (99%+)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (80-90%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (90%+)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (95%+)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee/beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (95%+)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (85-95%)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bacterien</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kalk (hardheid)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Deels (-50%)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Deels (-50%)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Volledig</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Aanschafprijs</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&euro;20-60</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">&euro;80-200</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">&euro;300-800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Filterkosten/jaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30-80</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40-100</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&euro;30-60</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Gemak</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Handmatig bijvullen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Automatisch</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Automatisch</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Capaciteit</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">1,5-3 L/beurt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Onbeperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Onbeperkt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kokend water</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Ja (4-in-1)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een filterkan de juiste keuze?
        </h2>
        <p className="text-gray-700 mb-4">
          Een filterkan (Brita, PearlCo, Laica) is de beste keuze in deze situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Huurwoning</strong>: geen toestemming of mogelijkheid voor installatie van een kraan of onderbouwfilter</li>
          <li><strong>Beperkt budget</strong>: aanschafprijs onder &euro;50, inclusief eerste filterkartridge</li>
          <li><strong>Smaakverbetering</strong>: u stoort zich alleen aan de chloorsmaken in leidingwater en heeft geen specifieke chemische verontreinigingen</li>
          <li><strong>Kleine ruimte</strong>: geen onderbouwkast of ruimte voor installatie</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een filterkraan of osmose de betere keuze?
        </h2>
        <p className="text-gray-700 mb-4">
          Kies een filterkraan (onderbouwfilter) wanneer:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>U een eigen woning heeft en bereid bent een eenmalige installatie uit te voeren</li>
          <li>Uw gezin veel gefilterd water gebruikt (meer dan 3 liter per dag) en bijvullen vervelend wordt</li>
          <li>U een comfortvoorkeur heeft voor water direct uit de kraan</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Kies een osmosefilter wanneer u PFAS-risicogebied woont, loodleidingen heeft, of een baby in huis heeft.
          Zie onze uitgebreide pagina over{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters vergelijken</Link> voor alle opties.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtervervanging: wanneer en hoe vaak?
        </h2>
        <p className="text-gray-700 mb-4">
          Het vervangen van de filterkartridge op tijd is cruciaal voor de filterprestaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Filterkan kartridge</strong>: na 150 liter, ongeveer 30 dagen voor 1 persoon of 15 dagen voor 2 personen</li>
          <li><strong>Filterkraan filter</strong>: na 3-6 maanden, afhankelijk van het merk en de waterkwaliteit in uw regio</li>
          <li><strong>Osmose membraan</strong>: elke 2-3 jaar; voorfilters en nafilters elk 6-12 maanden</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een verzadigd actief koolfilter stopt niet alleen met filteren; het kan ook een broedplaats worden voor bacterien
          als het water te lang in het filter stilstaat. Leeg de filterkan voor gebruik altijd bij het wakker worden als het water een nacht of langer stil heeft gestaan.
        </p>

        <p className="text-gray-700 mb-6">
          Overweeg ook uw situatie met betrekking tot mogelijke{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> in uw regio
          voordat u een keuze maakt tussen filterkan, filterkraan of osmose.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters vergelijken</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
