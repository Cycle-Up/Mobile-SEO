import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arsenicum in drinkwater: risico\'s, hotspots en filtratie',
  description: 'Arsenicum in drinkwater: WHO-norm 10 µg/L, risicoprovinices in Nederland, IARC-groep 1 carcinogeen. Welk waterfilter verwijdert arsenicum het best?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/arsenicum' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bevat Nederlands leidingwater arsenicum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verreweg de meeste Nederlandse huishoudens krijgen leidingwater met arsenicum ruim onder de EU/WHO-norm van 10 µg/L (microgram per liter). Drinkwaterbedrijven zijn wettelijk verplicht deze norm te handhaven en doen dit ook. Het risico op te hoge arsenicumconcentraties speelt primarily bij privéputten in geologisch gevoelige gebieden: veen- en kleigebieden in Groningen, Friesland en de kustprovincies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe gevaarlijk is arsenicum in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arsenicum is door de IARC (Internationaal Agentschap voor Kankeronderzoek) ingedeeld als Groep 1 carcinogeen — onomstotelijk kankerverwekkend bij mensen. Chronische blootstelling via drinkwater is geassocieerd met huid-, blaas- en longkanker, cardiovasculaire aandoeningen en diabetes. De effecten treden op bij langdurige inname boven 10–50 µg/L. Acute vergiftiging bij drinkwaterconcentraties is in Nederland niet aan de orde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik arsenicum in water proeven, ruiken of zien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Arsenicum in drinkwater is kleurloos, reukloos en smaakloos. Dit maakt het extra gevaarlijk: blootstelling is zonder analyse niet te detecteren. De enige manier om arsenicum in putwater vast te stellen is laboratoriumanalyse. Privéputbezitters in risicogebieden (Groningen, Friesland, veengebieden) worden dringend aangeraden hun water te testen.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke Nederlandse gebieden is arsenicum in grondwater een risico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verhoogde arsenicumconcentraties in grondwater komen voor in gebieden met veen- en kleilagen: met name Groningen, Friesland en de kustprovincies (Noord-Holland, Zuid-Holland, Zeeland). In deze gebieden kan arsenicum van nature uit de bodem in het grondwater logen — de zogenaamde geogene herkomst. Industriële verontreiniging (oud gebruik van arsenicumpesticiden in de glastuinbouw) speelt een rol in het Westland en de Bollenstreek.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen As(III) en As(V) en waarom maakt dat uit voor filtratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arsenicum bestaat in water in twee hoofdvormen: arsenietzuur As(III) en arsenaat As(V). As(V) is de oxidatievorm en wordt effectief verwijderd door geactiveerd alumina, ijzeroxide-media en omgekeerde osmose. As(III) is gereduceerd, elektrisch neutraal en veel moeilijker te verwijderen. De meeste filters zijn geoptimaliseerd voor As(V). Bij As(III) is voorafgaande oxidatie (bijv. met chloor of ijzersulfaat) nodig om de filtratie-efficiëntie te verhogen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter arsenicum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een osmosefilter (omgekeerde osmose) verwijdert 95–99% van arsenicum As(V) en 70–85% van As(III). Het is een van de meest complete oplossingen omdat het naast arsenicum ook andere verontreinigingen (nitraat, lood, PFAS, fluoride) aanpakt. Voor optimale arsenicumverwijdering bij As(III) is een oxidatiestap vóór de osmose aanbevolen. Meer over osmose op onze pagina over omgekeerde osmose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk filter is het meest effectief voor arsenicum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor arsenicum As(V): geactiveerd alumina is de meest specifieke keuze (95–98% verwijdering), gevolgd door ijzeroxide-media en omgekeerde osmose. Voor As(III): osmose met oxidatieprebehandeling is de meest betrouwbare aanpak. Actief-koolfilters, sedimentfilters en waterontharders verwijderen arsenicum NIET of nauwelijks. Keramische filters zonder speciaal medium zijn ook niet effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik actie ondernemen bij arsenicum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onderneem actie bij: (1) laboratoriumresultaat boven 10 µg/L (EU/WHO-norm voor drinkwater); (2) u gebruikt putwater in Groningen, Friesland of kustprovincies zonder recente analyse; (3) u woont in een gebied met historisch gebruik van arsenicumpesticiden (glastuinbouw, bollenteelt). Bij geconstateerde overschrijding: tijdelijk bronwater gebruiken en direct filtratie installeren of aansluiting op leidingnet overwegen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Arsenicum in drinkwater: risico\'s, hotspots en filtratie',
  description: 'Arsenicum in drinkwater: IARC-groep 1 carcinogeen, risicoprovinces in Nederland. Welk waterfilter verwijdert arsenicum het best?',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  url: 'https://waterfilterplatform.nl/waterfilter/arsenicum',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterArenicumPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Arsenicum', item: 'https://waterfilterplatform.nl/waterfilter/arsenicum' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Arsenicum</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Arsenicum in drinkwater: risico&apos;s, hotspots en filtratie
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Arsenicum is kleurloos, reukloos en smakeloos — en een IARC Groep 1 carcinogeen. Leidingwater in Nederland is veilig (&lt;10 µg/L). Privéputten in Groningen, Friesland en de kustprovincies vormen het grootste risico. Geactiveerd alumina of een osmosefilter verwijdert arsenicum effectief. Test eerst, filter daarna.
          </p>
        </div>

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is arsenicum in water en waar komt het vandaan?
        </h2>
        <p className="text-gray-700 mb-4">
          Arsenicum (As) is een metalloïde dat van nature in de aardkorst voorkomt. In watercontext zijn er twee hoofdbronnen:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Geogene (bodemkundige) herkomst</h3>
            <p className="text-gray-700 text-sm">
              In gebieden met veen- en kleilagen lost arsenicum van nature uit de bodem in het grondwater. Dit is de voornaamste bron in Nederland. In veengebieden kan reductie van ijzeroxiden arsenicum vrijmaken dat anders gebonden blijft. De concentraties kunnen 10–200 µg/L bereiken in gevoelige gebieden — ver boven de WHO-norm van 10 µg/L.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Industriële verontreiniging</h3>
            <p className="text-gray-700 text-sm">
              Historisch gebruik van arsenicumpesticiden in de glastuinbouw (Westland) en bollenteelt (Bollenstreek) heeft lokaal het grondwater verontreinigd. Oud industrieel gebruik van arsenicum in glas- en verf-industrie kan eveneens een bron zijn. Dit speelt in specifieke locaties, niet over brede gebieden.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De Nederlandse situatie: RIVM-richtlijnen
        </h2>
        <p className="text-gray-700 mb-4">
          Het RIVM (Rijksinstituut voor Volksgezondheid en Milieu) monitort arsenicum in het Nederlandse grondwater en drinkwater. De kernpunten voor Nederlandse consumenten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Leidingwater:</strong> Vrijwel alle drinkwaterbedrijven leveren water ruim onder de EU/WHO-norm van 10 µg/L. Drinkwaterbedrijven behandelen grondwater actief op arsenicum waar nodig.</li>
          <li><strong>Risicogebieden voor privéputten:</strong> Groningen, Friesland en de kustprovincies (Noord-Holland, Zuid-Holland, Zeeland) hebben hoger arsenicumrisico in ondiep grondwater door de aanwezigheid van veenlagen.</li>
          <li><strong>Glastuinbouw en bollenteelt:</strong> Westland en de Bollenstreek hebben historische bodemverontreiniging met arsenicum die lokaal het grondwater kan beïnvloeden.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          <strong>Belangrijk:</strong> Arsenicum is kleurloos, reukloos en smaakloos. Zonder laboratoriumtest is het niet te detecteren. Alle putgebruikers in de genoemde risicogebieden worden dringend aangeraden hun water te laten analyseren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten: IARC Groep 1 carcinogeen
        </h2>
        <p className="text-gray-700 mb-4">
          Arsenicum staat geclassificeerd als IARC Groep 1 carcinogeen — er is onomstotelijk bewijs dat het kanker veroorzaakt bij mensen. De gezondheidsgevolgen van chronische blootstelling via drinkwater zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Huidkanker</strong> — het eerste teken van chronische arsenicumvergiftiging, ook wel arsenicose</li>
          <li><strong>Blaaskanker</strong> — sterke associatie bij langdurige blootstelling boven 50 µg/L</li>
          <li><strong>Longkanker</strong> — verhoogd risico bij inhalatie én ingestie</li>
          <li><strong>Cardiovasculaire aandoeningen</strong> — aderverkalking en hypertensie bij chronische blootstelling</li>
          <li><strong>Diabetes type 2</strong> — geassocieerd in epidemiologische studies bij hoge chronische blootstelling</li>
          <li><strong>Neurotoxiciteit bij kinderen</strong> — lager IQ en ontwikkelingsachterstand bij vroege blootstelling</li>
        </ul>
        <p className="text-gray-700 mb-6">
          De EU/WHO-norm van 10 µg/L is een compromis tussen gezondheidsideaal en technische haalbaarheid. De WHO erkent dat zelfs bij 10 µg/L een klein residueel kankerrisico bestaat. Concentraties zo laag mogelijk houden is aan te bevelen, met name voor kinderen en zwangere vrouwen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          As(III) versus As(V): cruciaal verschil voor filtering
        </h2>
        <p className="text-gray-700 mb-4">
          Arsenicum in water bestaat in twee hoofdvormen die sterk verschillen in filtreerbaarheid:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left">As(III) — Arsenietzuur</th>
                <th className="border border-gray-300 px-3 py-2 text-left">As(V) — Arsenaat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Milieu</td>
                <td className="border border-gray-300 px-3 py-2">Zuurstofarm grondwater</td>
                <td className="border border-gray-300 px-3 py-2">Zuurstofrijk water</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Elektrische lading</td>
                <td className="border border-gray-300 px-3 py-2">Neutraal (moeilijk)</td>
                <td className="border border-gray-300 px-3 py-2">Negatief geladen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Verwijdering geact. alumina</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">30–50%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–98%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Verwijdering osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">70–85%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–99%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Oplossing</td>
                <td className="border border-gray-300 px-3 py-2">Oxidatie nodig vóór filter</td>
                <td className="border border-gray-300 px-3 py-2">Direct filterbaar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Putwater bevat vaak As(III) door de zuurstofarme omgeving. Laat bij een wateranalyse specificeren welke arsenicumvorm aanwezig is, zodat de juiste filterstrategie gekozen kan worden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor arsenicum
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Geactiveerd alumina</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest specifiek voor As(V)</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Geactiveerd alumina (Al₂O₃) adsorbeert arsenaat As(V) zeer effectief via ionenwisseling. Verwijderingsrendement 95–98% voor As(V). Vereist pH 5,5–6,5 voor optimale werking — soms pH-aanpassing nodig. Geschikt als whole-house filter maar ook als POU-filter (point-of-use). Regeneratie met natriumhydroxide is mogelijk maar complex.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>As(V): ✓ 95–98%</span>
              <span>As(III): ± 30–50%</span>
              <span>Kosten: €400–1.000</span>
              <span>Onderhoud: medium vervangen na verzadiging</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">IJzeroxide-media (GFH, ArsenXnp)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Gehydrateerd ijzeroxide (GFH) en vergelijkbare media adsorberenn arsenicum As(V) en As(III) effectief, ook bij hogere concentraties. Selectief voor arsenicum. Geschikt voor grotere volumes (whole-house of professioneel). Meer dan geactiveerd alumina geschikt voor As(III) zonder oxidatiestap, al neemt de efficiëntie toe bij oxidatie.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>As(V): ✓ 95–99%</span>
              <span>As(III): ✓ 80–95%</span>
              <span>Kosten: €500–1.500</span>
              <span>Onderhoud: medium vervangen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste complete oplossing</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Osmosefilters verwijderen 95–99% As(V) en 70–85% As(III) via het semipermeabele membraan. Ideale keuze als naast arsenicum ook andere verontreinigingen (nitraat, PFAS, lood, fluoride) aanwezig zijn. Bij As(III) de efficiëntie verhogen door oxidatie vóór het membraan. Zie ook{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>As(V): ✓ 95–99%</span>
              <span>As(III): ✓ 70–85%</span>
              <span>Kosten: €300–800</span>
              <span>Onderhoud: jaarlijks patronen + membraan</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Coagulatie-flocculatie (whole-house)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Dosering van ijzersulfaat of aluminiumsulfaat bindt arsenicum en andere opgeloste stoffen die vervolgens bezinken. Effectief voor hele-huis-behandeling bij hoge concentraties. Professionele installatie en periodieke slibverwijdering noodzakelijk. Minder gebruikelijk voor particulieren dan osmose of adsorptiemedia.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>As totaal: ✓ 90–99%</span>
              <span>Kosten: op maat</span>
              <span>Onderhoud: professioneel</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">5</span>
              <h3 className="font-semibold text-[#003F5C]">Destillatie</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Destillatie verwijdert vrijwel alle opgeloste stoffen inclusief arsenicum (&gt;99%). Langzame productie, hoog energieverbruik, niet praktisch voor hele-huis-gebruik. Geschikt als noodoplossing of voor kleine volumes (laboratoriumkwaliteit drinkwater).
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>As: ✓ &gt;99%</span>
              <span>Kosten: €200–500 apparaat</span>
              <span>Snelheid: langzaam</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: filters voor arsenicum
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">As(V) verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">As(III) verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Geactiveerd alumina</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–98%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">30–50%</td>
                <td className="border border-gray-300 px-3 py-2">€400–1.000</td>
                <td className="border border-gray-300 px-3 py-2">Specifiek voor As(V), pH-gevoelig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">IJzeroxide-media</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">80–95%</td>
                <td className="border border-gray-300 px-3 py-2">€500–1.500</td>
                <td className="border border-gray-300 px-3 py-2">Goed voor beide vormen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–99%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">70–85%</td>
                <td className="border border-gray-300 px-3 py-2">€300–800</td>
                <td className="border border-gray-300 px-3 py-2">Beste alles-in-één oplossing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Destillatie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;99%</td>
                <td className="border border-gray-300 px-3 py-2">€200–500</td>
                <td className="border border-gray-300 px-3 py-2">Langzaam, hoog energieverbruik</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0–5%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0–5%</td>
                <td className="border border-gray-300 px-3 py-2">€50–200</td>
                <td className="border border-gray-300 px-3 py-2">NIET effectief voor arsenicum</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer moet u testen en handelen?
        </h2>
        <p className="text-gray-700 mb-4">
          Arsenicum is niet waarneembaar zonder analyse. Onderneem actie als u:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Putwater gebruikt in Groningen, Friesland, Noord-Holland, Zuid-Holland of Zeeland</li>
          <li>Een put heeft in een gebied met voormalig gebruik van arsenicumpesticiden (Westland, Bollenstreek)</li>
          <li>Nog nooit uw putwater op arsenicum heeft laten testen</li>
          <li>Uw laatste test ouder is dan 5 jaar</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Laboratoriumanalyse voor arsenicum kost €30–60 voor alleen As, of €100–200 voor een uitgebreid drinkwaterpakket inclusief ijzer, mangaan, nitraat en overige verontreinigingen. Bij overschrijding van 10 µg/L: gebruik tijdelijk bronwater en installeer een gecertificeerd filter. Zie ook onze pagina over{' '}
          <Link href="/putwater" className="text-[#005F8A] underline">putwater testen en zuiveren</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
            <p className="text-sm text-gray-600">Welke zware metalen kunnen in drinkwater zitten en hoe filter je ze eruit?</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken: omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en wat verwijdert het uit drinkwater?</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wat zijn de wettelijke normen voor drinkwaterkwaliteit in Nederland en de EU?</p>
          </Link>
          <Link href="/waterfilter/arseen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Arseen in drinkwater filteren</h3>
            <p className="text-sm text-gray-600">Wat zijn de risico's van arseen en welk waterfilter verwijdert het het best?</p>
          </Link>
        </div>
      </section>

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
          <Link href="/putwater" className="text-[#005F8A] underline">putwater testen en zuiveren</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</Link> en{' '}
          <Link href="/waterfilter/mangaan" className="text-[#005F8A] underline">mangaan in water filteren</Link>.
        </p>
      </main>
    </>
  );
}
