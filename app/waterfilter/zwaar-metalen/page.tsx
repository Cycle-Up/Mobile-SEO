import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Zware metalen in water filteren: lood, koper, cadmium en meer',
  description: 'Zware metalen in drinkwater: bronnen, EU-limieten, gezondheidsrisico\'s en welke waterfilters lood, koper, cadmium, kwik en nikkel effectief verwijderen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/zwaar-metalen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe komen zware metalen in drinkwater terecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zware metalen komen zelden vanuit de waterbron in kraanwater. De meeste metalen — met name lood en koper — komen in water via corrosie van het leidingwerk. Loden aansluitleidingen (gebouwd voor 1970), koperen binnenleidingen (aangelegd tussen 1960 en 1980) en roestvrijstalen fittingen met nikkellegering zijn de voornaamste bronnen. De kwaliteit aan het reservoir is dus anders dan aan de kraan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zit er lood in mijn kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In woningen gebouwd voor 1970 is een loden huisaansluiting niet uitgesloten. Waterleidingbedrijven hebben de meeste loden hoofdleidingen vervangen, maar de binneninstallatie valt onder verantwoordelijkheid van de eigenaar. Laat bij twijfel het water testen via een gecertificeerd laboratorium. Lood heeft geen smaak, kleur of geur — meting is de enige manier om het te detecteren. De EU-norm is 5 µg/L (per 2036, nu nog 10 µg/L).',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een normaal koolstoffilter lood uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard GAC-koolfilters (granulaat) verwijderen lood onvoldoende en soms zelfs helemaal niet. NSF/ANSI 53-gecertificeerde koolstofblokfilters zijn specifiek getest en gecertificeerd voor loodverwijdering — deze kunnen 95%+ verwijderen. Kijk altijd op de NSF-certificering voor lood. Een osmosefilter verwijdert lood het meest betrouwbaar (95–99%).',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk filter verwijdert zware metalen het best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een omgekeerde-osmosefilter (RO) is de meest effectieve methode voor het verwijderen van alle zware metalen: 95–99% voor lood, koper, cadmium, arseen en kwik. NSF/ANSI 58-gecertificeerde osmosefilters zijn specifiek getest voor zware metalenverwijdering. NSF/ANSI 53-gecertificeerde koolstofblokfilters zijn een goed alternatief voor lood en koper specifiek, maar minder breed effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is koper in kraanwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koper is een essentieel sporenelement maar is giftig in hoge concentraties. De EU-norm is 2 mg/L. Problemen zijn het meest uitgesproken in woningen met nieuwe koperen leidingen (de eerste jaren lost koper het meest op), bij zacht en zuur water (lage pH), en bij stilstaand water (\'s ochtends). Laat de kraan 30 seconden doorstromen na stilstand als maatregel. Bij chronisch verhoogde concentraties is filteren zinvol.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik zware metalen in kraanwater proeven of zien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste zware metalen zijn kleur-, geur- en smakeloos bij de concentraties die in drinkwater voorkomen. Uitzonderingen zijn koper bij hoge concentraties (bittere smaak) en ijzer (roodbruine kleur, metaalachtige smaak). Voor lood, cadmium, arseen, kwik en nikkel is laboratoriumonderzoek de enige betrouwbare detectiemethode. Thuistestkits geven indicatieve resultaten maar zijn minder betrouwbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Doet een UV-filter iets aan zware metalen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, UV-lampen doden bacteriën en virussen maar hebben geen enkel effect op zware metalen. UV werkt via fotonen die het DNA van micro-organismen beschadigen — een puur biologisch mechanisme zonder effect op de chemische samenstelling van water. Voor zware metalen zijn mechanische of chemische filtermethoden vereist: osmose, NSF-gecertificeerde koolstofblokfilters of ionenwisseling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik welke zware metalen in mijn water zitten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De enige betrouwbare methode is laboratoriumanalyse. Gecertificeerde waterlaboratoria bieden pakketten aan vanaf circa €50–150 die meerdere metalen meten. Vraag specifiek om lood (Pb), koper (Cu), cadmium (Cd), chroom (Cr), kwik (Hg) en nikkel (Ni). Neem een spoedsmonster (\'s ochtends, water dat de nacht heeft stilgestaan) voor het worst-case scenario. Waterbedrijven publiceren ook jaarlijkse kwaliteitsverslagen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Zware metalen in water filteren: lood, koper, cadmium en meer',
  description: 'Uitleg over zware metalen in drinkwater: bronnen, EU-limieten, gezondheidsrisico\'s en filtereffectiviteit per metaal.',
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  url: 'https://waterfilterplatform.nl/waterfilter/zwaar-metalen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ZwaarMetalenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          articleSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Zware metalen', item: 'https://waterfilterplatform.nl/waterfilter/zwaar-metalen' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Zware metalen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Zware metalen in water filteren: lood, koper, cadmium en meer
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Zware metalen in kraanwater komen vrijwel altijd uit het leidingwerk, niet uit de bron. Ze hebben geen smaak of kleur — alleen laboratoriumtests onthullen ze. Een NSF/ANSI 58-gecertificeerd osmosefilter verwijdert lood, koper, cadmium, chroom, kwik en nikkel met 95–99% effectiviteit.
          </p>
        </div>

        <CTABanner context="osmose" />

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8 mt-6">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Welke zware metalen komen voor in drinkwater?
          </h2>
          <p className="text-gray-700 mb-4">
            Zware metalen zijn een groep elementen met een hoge atoomdichtheid die bij verhoogde concentraties giftig zijn voor mensen en dieren. In drinkwater zijn de meest relevante:
          </p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Lood (Pb)</h3>
              <p className="text-gray-700 text-sm"><strong>Bron:</strong> Loden huisaansluitingen en leidingen, aangelegd voor 1970. <strong>Gezondheidseffect:</strong> Neurotoxisch, met name schadelijk voor hersenontwikkeling bij kinderen; geen veilige blootstellingsgrens. <strong>EU-norm:</strong> 10 µg/L (verlaagd naar 5 µg/L per 2036).</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Koper (Cu)</h3>
              <p className="text-gray-700 text-sm"><strong>Bron:</strong> Koperen binnenleidingen aangelegd tussen 1960–1980, met name bij zacht/zuur water. <strong>Gezondheidseffect:</strong> Essentieel sporenelement maar bij hoge dosering: misselijkheid, braken, leverschade bij langdurige blootstelling. <strong>EU-norm:</strong> 2.000 µg/L (2 mg/L).</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Cadmium (Cd)</h3>
              <p className="text-gray-700 text-sm"><strong>Bron:</strong> Industriële lozingen, galvanisch behandeld staal, soms uit zinklegering fittingen. <strong>Gezondheidseffect:</strong> Nefrotoxisch (nierschade), kankerverwekkend bij chronische blootstelling, accumulatie in nieren. <strong>EU-norm:</strong> 5 µg/L.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Chroom (Cr)</h3>
              <p className="text-gray-700 text-sm"><strong>Bron:</strong> Industriële lozingen, chroomhoudende gesteenten, roestvrijstalen fittingen. <strong>Gezondheidseffect:</strong> Chroom-3 is essentieel; chroom-6 (hexavalent chroom) is carcinogeen. <strong>EU-norm:</strong> 25 µg/L totaal chroom (verlaagd t.o.v. eerder 50 µg/L).</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Kwik (Hg)</h3>
              <p className="text-gray-700 text-sm"><strong>Bron:</strong> Industriële lozingen, thermometerbreuk, mijnbouwactiviteiten. In kraanwater zeldzaam in NL maar aanwezig bij verontreinigd grondwater. <strong>Gezondheidseffect:</strong> Neurotoxisch, nierscahde, fototoxisch. <strong>EU-norm:</strong> 1 µg/L.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-1">Nikkel (Ni)</h3>
              <p className="text-gray-700 text-sm"><strong>Bron:</strong> Roestvrijstalen fittingen en kranen, met name in de eerste minuten na stilstand. <strong>Gezondheidseffect:</strong> Allergisch contact-eczeem, bij hoge oraalblootstelling niereffecten. <strong>EU-norm:</strong> 20 µg/L.</p>
            </div>
          </div>
        </section>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU- en WHO-limieten voor zware metalen in drinkwater
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Metaal</th>
                <th className="border border-gray-300 px-3 py-2 text-left">EU-norm (µg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">WHO-advies (µg/L)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Voornaamste bron</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Lood (Pb)</td>
                <td className="border border-gray-300 px-3 py-2">10 (→5 per 2036)</td>
                <td className="border border-gray-300 px-3 py-2">10</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Loden leidingen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Koper (Cu)</td>
                <td className="border border-gray-300 px-3 py-2">2.000</td>
                <td className="border border-gray-300 px-3 py-2">2.000</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Koperen leidingen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Cadmium (Cd)</td>
                <td className="border border-gray-300 px-3 py-2">5</td>
                <td className="border border-gray-300 px-3 py-2">3</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Industrie, fittingen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Chroom (Cr)</td>
                <td className="border border-gray-300 px-3 py-2">25</td>
                <td className="border border-gray-300 px-3 py-2">50</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Industrie, gesteenten</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Kwik (Hg)</td>
                <td className="border border-gray-300 px-3 py-2">1</td>
                <td className="border border-gray-300 px-3 py-2">6</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">Industrie, mijnbouw</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-semibold">Nikkel (Ni)</td>
                <td className="border border-gray-300 px-3 py-2">20</td>
                <td className="border border-gray-300 px-3 py-2">70</td>
                <td className="border border-gray-300 px-3 py-2 text-gray-600">RVS fittingen, kranen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komen metalen in kraanwater? Het pijpleidingprobleem
        </h2>
        <p className="text-gray-700 mb-4">
          Een cruciaal begrip: <strong>zware metalen in kraanwater komen vrijwel altijd uit het leidingwerk, niet uit de bronwaterlevering</strong>. Waterleidingbedrijven meten en behandelen bronwater continu om te voldoen aan strenge normen. Maar de leidingen in een woning — van de straat tot aan de kraan — vallen buiten de verantwoordelijkheid van het waterbedrijf.
        </p>
        <p className="text-gray-700 mb-4">
          Factoren die metaalafgifte bevorderen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Stilstaand water:</strong> Na een nacht stilstaan is de concentratie het hoogst. Laat altijd 30 seconden doorstromen voordat u water voor consumptie gebruikt.</li>
          <li><strong>Zacht en zuur water:</strong> Water met een lage pH (onder 7) en lage hardheid is corrosiever. Kustregio&rsquo;s met zacht water kunnen hogere metaallosstelling hebben.</li>
          <li><strong>Nieuwe installaties:</strong> Koper lost het meest op uit nieuwe leidingen. Na enkele jaren oxideert het oppervlak en neemt de losstelling af.</li>
          <li><strong>Hoge watertemperatuur:</strong> Warm water lost meer metalen op. Gebruik altijd koud water voor koken en drinken.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Detectie: waarom testen essentieel is
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste zware metalen zijn sensorisch ondetecteerbaar bij drinkwaterconcentraties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Lood:</strong> Geen smaak, geen geur, geen kleur</li>
          <li><strong>Cadmium:</strong> Geen smaak, geen geur, geen kleur</li>
          <li><strong>Chroom:</strong> Geen smaak bij drinkwaterdosissen</li>
          <li><strong>Kwik:</strong> Geen smaak, geen geur</li>
          <li><strong>Nikkel:</strong> Soms licht metalig bij hoge concentraties</li>
          <li><strong>Koper:</strong> Bittere smaak merkbaar boven 1 mg/L (EU-norm 2 mg/L)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Thuistestkits voor lood zijn beschikbaar maar geven slechts een indicatieve uitkomst. Voor betrouwbare resultaten is laboratoriumanalyse nodig. Neem het &ldquo;eerststroomommonster&rdquo;: water dat minimaal 8 uur heeft stilgestaan geeft het worst-case beeld voor metaalgehalten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtereffectiviteit per metaal: vergelijkingstabel
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Pb (lood)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Cu (koper)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Cd (cadmium)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Cr (chroom)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Hg (kwik)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Ni (nikkel)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter (RO, NSF58)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 90–97%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 90–97%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Koolblokfilter (NSF53 lood)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 95%+</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ 80–95%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± 50–70%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± variabel</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± 70–85%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± 50%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Standaard GAC-filter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗ onvoldoende</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± 30–60%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± gedeeltelijk</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Ionenwisselaar</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ goed</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ goed</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ goed</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">±</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">±</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">✓ goed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">UV-lamp</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Filterkan (Brita e.d.)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">± beperkt</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">±</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">✗</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          NSF-certificering: wat betekent het?
        </h2>
        <p className="text-gray-700 mb-4">
          NSF International en ANSI hebben standaarden ontwikkeld voor waterfilters die onafhankelijk worden getest:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>NSF/ANSI 53:</strong> Gezondheidseffecten — certificeert verwijdering van specifieke verontreinigingen inclusief lood, cadmium en arseen. Een NSF 53-gecertificeerd koolblokfilter is bewezen effectief voor lood.</li>
          <li><strong>NSF/ANSI 58:</strong> Omgekeerde osmose — certificeert de volledige RO-prestatie inclusief verwijdering van een breed spectrum aan zware metalen, nitraat, PFAS en meer.</li>
          <li><strong>NSF/ANSI 42:</strong> Esthetische effecten — alleen voor smaak en geur, niet voor gezondheidseffecten. Koop geen filter uitsluitend met NSF 42 als je zware metalen wilt verwijderen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische aanbeveling: test eerst, filter dan gericht
        </h2>
        <p className="text-gray-700 mb-4">
          De beste aanpak voor zware metalen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Test uw water</strong> via een gecertificeerd laboratorium, met name als uw woning voor 1970 is gebouwd of als u in een industriegebied woont. Vraag om lood, koper, cadmium en nikkel als minimum panel.</li>
          <li><strong>Als er lood of cadmium gevonden wordt:</strong> Een NSF/ANSI 58-gecertificeerd osmosefilter is de aanbevolen oplossing — zie ook onze pagina over <a href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">waterfilter typen vergelijken</a>.</li>
          <li><strong>Als er alleen lood of koper is:</strong> Een NSF/ANSI 53-gecertificeerd koolblokfilter kan volstaan en is goedkoper.</li>
          <li><strong>Tijdelijke maatregel:</strong> Laat de kraan 30–60 seconden doorstromen &apos;s ochtends om stilstaand water af te voeren. Dit verlaagt lood- en koperconcentraties significant.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Wil je meer weten over specifiek loodverwijdering? Lees ons gedetailleerde artikel over{' '}
          <a href="/waterfilter/lood-water" className="text-[#005F8A] underline">lood in drinkwater filteren</a>.
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
          <a href="/waterfilter/tds" className="text-[#005F8A] underline">TDS meten in water</a>{' '}
          en{' '}
          <a href="/osmose-water/gezondheidsvoordelen" className="text-[#005F8A] underline">gezondheidsvoordelen van osmosewater</a>.
        </p>
      </main>
    </>
  );
}
