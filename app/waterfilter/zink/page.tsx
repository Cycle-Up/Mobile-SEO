import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Waterfilter voor zink: te veel zink in kraanwater?',
  description: 'Zink in drinkwater: waar komt het vandaan, wat zijn de risico\'s bij te hoge concentraties en welk waterfilter verwijdert zink effectief?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/zink' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waar komt zink in kraanwater vandaan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zink in drinkwater is bijna altijd afkomstig van de huisinstallatie, niet van het drinkwaterbedrijf. De belangrijkste bronnen zijn: (1) galvanisch verzinkte stalen leidingen die tot circa 1960 werden toegepast — bij corrosie lost zink op in het water; (2) messingkranen en fittingen met zinklegering; (3) zinkoxiderende aantasting bij leidingen die in contact komen met grondwater of zuur water (pH lager dan 7). Drinkwaterbedrijven leveren vrijwel geen zink in het water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de norm voor zink in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO heeft geen formele gezondheidskundige norm voor zink in drinkwater, maar hanteert een esthetische richtwaarde van 3 mg/L (smaak en troebeling). Boven 3-5 mg/L is de smaak van water merkbaar bitter-samentrekkend. De EU-drinkwaternorm (Richtlijn 2020/2184) bevat geen specifieke grenswaarde voor zink, maar stelt wel normen voor het vrijkomen van metalen uit contactmaterialen (leidingen, fittingen). Het Nederlandse Drinkwaterbesluit volgt de EU-richtlijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is te veel zink in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zink is een essentieel sporenelement dat het lichaam nodig heeft. Toxiciteit via drinkwater is zeldzaam. De WHO schat dat zelfs bij 3 mg/L in drinkwater de totale zinkinname nog binnen veilige grenzen blijft. Gezondheidseffecten bij overmatige inname (boven 40 mg per dag over langere perioden) zijn: maagklachten, misselijkheid, koperdeficientie (zink en koper concurreren bij opname). Kortdurende hoge blootstelling (bijv. via oud corrosief leidingwater) geeft doorgaans maagpijn en misselijkheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe herken ik zink in mijn drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zink is kleurloos in water maar geeft bij hogere concentraties boven 3-5 mg/L een karakteristieke bittere, samentrekkende smaak en kan water licht troebel maken (melkachtig bij hoge concentraties door colloidal zinc). Wit of grijs bezinksel in de waterkoker kan op zink wijzen. Blauwe of groene verkleuringsringen in het bad of op sanitair wijzen juist op koper (niet zink). Bij twijfel is een wateranalyse bij een gecertificeerd laboratorium de enige zekerheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een koolstoffilter zink uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Standaard actieve koolstoffilters zijn niet effectief voor zink en andere opgeloste metaalionen. Actieve kool adsorbeert organische verbindingen, chloor en sommige pesticiden, maar metaalionen binden niet aan koolstof. Voor zink zijn ionenwisseling of omgekeerde osmose de aangewezen methoden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe effectief is omgekeerde osmose voor zink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose verwijdert 95 tot 99% van zink uit drinkwater. Het semipermeabele RO-membraan laat water door maar houdt opgeloste ionen zoals Zn2+ (molecuulgewicht 65 Da) tegen. Osmose is de meest effectieve en brede oplossing: het verwijdert naast zink ook lood, koper, cadmium, nitraat, PFAS en andere verontreinigingen tegelijk. Bij leidingen met verhoogd zinkrisico is osmose de aanbevolen keuze voor drinkwater en kookwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verband tussen zink en loodleidingen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Galvanisch verzinkte leidingen werden tot circa 1960 toegepast, dezelfde periode als loodleidingen. In oudere woningen komen beide soms voor in dezelfde installatie. Bij loodleidingen is loodcontaminatie een grotere zorg dan zink, maar beide kunnen tegelijk voorkomen. Een osmosefilter verwijdert zowel zink (95-99%) als lood (97-99%). Als u twijfelt over oude leidingen, laat dan een wateranalyse uitvoeren op zowel zink als lood, cadmium en koper.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor zink: te veel zink in kraanwater?',
  description: 'Zink in drinkwater vanuit galvanische leidingen: risico\'s, normen en welke waterfilters zink effectief verwijderen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/zink',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterZinkPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Zink', item: 'https://waterfilterplatform.nl/waterfilter/zink' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Zink</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor zink: te veel zink in kraanwater?
        </h1>

        <QuickAnswer answer="Zink in kraanwater komt bijna altijd uit de eigen leidingen: galvanisch verzinkte stalen buizen (pre-1960) of messingfittingen. WHO-esthetische grens: 3 mg/L (bittere smaak boven die waarde). Osmosefilter verwijdert 95-99% van zink. Koolstoffilter werkt niet voor metaalionen. Testen zinvol bij woningen van voor 1960 met originele leidingen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronnen van zink in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Zink in drinkwater is een leidingprobleem, geen bronwaterprobleem. Het drinkwaterbedrijf levert water met vrijwel geen zink. De contaminatie vindt plaats in de huisinstallatie:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Galvanisch verzinkte stalen leidingen (pre-1960)</h3>
            <p className="text-gray-700 text-sm">
              Tot circa 1960 werden in Nederland veelvuldig galvanisch verzinkte stalen leidingen toegepast voor koud water. Het zinken beschermingslaag corrodeerde na verloop van tijd, waardoor zink en soms ook lood (dat als verontreiniging in de zinklaag aanwezig was) vrijkwam. Concentraties kunnen oplopen tot 2-5 mg/L, met name bij de eerste waterafname na een nacht stilstand.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Messingkranen en fittingen</h3>
            <p className="text-gray-700 text-sm">
              Messing (koper-zinklegering) wordt gebruikt voor kranen, fittingen en aansluitingen. Bij zuur water (pH lager dan 7) of zachte watersoorten kan ontmengingscorrosie optreden waarbij zink preferentieel oplost. Dit is een fenomeen dat zich kan voordoen bij leidingwater in bepaalde zachte-waterregioos in Nederland.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Eerste-watereffect</h3>
            <p className="text-gray-700 text-sm">
              Zinkconcentraties zijn het hoogst in het eerste water dat uit de kraan komt na een periode van stilstand (nacht, afwezigheid). Dit is het water dat direct in contact stond met de leidingen. Laat de kraan 30 seconden tot 2 minuten dorlopen voordat u drinkwater afneemt als u twijfelt over uw leidingen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Normen voor zink: WHO en EU
        </h2>
        <p className="text-gray-700 mb-4">
          Zink heeft geen formele EU-gezondheidsgrenswaarde in drinkwater. De WHO hanteert een esthetische grens:
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="text-gray-700 text-sm space-y-2">
            <li><strong>WHO esthetische richtwaarde:</strong> 3 mg/L (smaak wordt bitter boven 3-5 mg/L)</li>
            <li><strong>EU-drinkwaternorm:</strong> geen specifieke grenswaarde voor zink</li>
            <li><strong>EU-norm leidingmaterialen:</strong> zink mag maximaal 0,1 mg/L vrijkomen uit nieuwe contactmaterialen na 24 uur</li>
            <li><strong>Veilige dagelijkse inname volwassene:</strong> tot 40 mg/dag (alle bronnen samen)</li>
            <li><strong>Normaal NL kraanwater:</strong> &lt;0,1 mg/L (niet via bron maar soms via leidingen hoger)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten van zink
        </h2>
        <p className="text-gray-700 mb-4">
          Zink is een <strong>essentieel sporenelement</strong> en in normale hoeveelheden noodzakelijk voor het immuunsysteem, wondgenezing en enzymfuncties. De gezondheidsrisicoos van zink in drinkwater zijn beperkt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Acute effecten</strong> bij inname van veel zink (&gt;2 mg/kg lichaamsgewicht): misselijkheid, braken, maagkrampen</li>
          <li><strong>Chronische hoge inname</strong> (&gt;40 mg/dag totaal): koperdeficientie (zink blokkeert koperopname)</li>
          <li><strong>Bijdrage van water</strong>: zelfs bij 3 mg/L zink en 2 liter water per dag is de zinkinname 6 mg/dag, ver onder de toxische drempel</li>
          <li><strong>Smaak</strong>: bittere, samentrekkende smaak boven 3-5 mg/L is het meest praktische probleem</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor zink
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest effectief</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Osmose verwijdert 95 tot 99% van opgelost zink (Zn&#178;&#8314;) via het semipermeabele membraan. Tevens effectief voor lood, koper, cadmium, nitraat en PFAS. Bij woningen met gemengde leidingen (zink + lood) is osmose de enige methode die beide tegelijk aanpakt. Toepassing voor drinkwater en kookwater.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Zink: ✓ 95-99%</span>
              <span>Lood: ✓ 97-99%</span>
              <span>Kosten: &euro;300-800</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Ionenwisselaar (kationenwisseling)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een kationenwisselaar vervangt zink- en andere metaalionen door natrium of waterstof. Effectief voor zink en andere zware metalen. Vereist periodieke regeneratie met zout (bij natriumvorm). Minder gangbaar als huishoudelijk drikwaterfilter, maar wel effectief. Verhoogt natriumgehalte van het water (relevant bij natriumarm dieet).
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Zink: ✓ 90-98%</span>
              <span>Kosten: &euro;400-1.000</span>
              <span>Onderhoud: zout + regeneratie</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Actieve kool / koolstoffilter</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Niet effectief voor metalen</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Actieve koolfilters (Brita, inline filters) zijn <strong>niet</strong> geschikt voor het verwijderen van zink of andere metaalionen. Kool adsorbeert organische verbindingen en chloor, maar laat metaalionen vrijwel ongehinderd door. Niet aanschaffen voor dit specifieke probleem.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Zink: ✗ ~0%</span>
              <span>Chloor/geur: ✓</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer testen zinvol is: checklist
        </h2>
        <p className="text-gray-700 mb-4">
          Een wateranalyse op zink is zinvol als u een of meer van de volgende situaties herkent:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Woning gebouwd <strong>voor 1960</strong> met mogelijk originele leidingen</li>
          <li><strong>Bittere of samentrekkende smaak</strong> van kraanwater, met name van het eerste water</li>
          <li><strong>Grijs of wit bezinksel</strong> in de waterkoker of kan</li>
          <li>Bekende aanwezigheid van <strong>verzinkte stalen leidingen</strong> in de woning</li>
          <li>Aanwezigheid van jonge kinderen of zuigelingen waarbij u de waterinname zeker wilt stellen</li>
          <li>Gelijktijdige zorg over <strong>lood</strong> (lood- en zinken leidingen zijn van dezelfde bouwperiode)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een gecertificeerd laboratoriumonderzoek voor zink kost circa &euro;20-40. Een uitgebreidere meting inclusief lood, koper en cadmium kost &euro;60-120 en geeft een compleet beeld van metaalcontaminatie vanuit leidingen.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
              <p className="text-sm text-gray-600">Overzicht van alle zware metalen die in drinkwater kunnen voorkomen en de bijbehorende risicos.</p>
            </Link>
            <Link href="/waterfilter/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor lood</h3>
              <p className="text-sm text-gray-600">Lood in drinkwater: bronnen, risicos en welke waterfilters lood effectief verwijderen.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitgelegd</h3>
              <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en waarom is het de meest effectieve methode voor zware metalen?</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
              <p className="text-sm text-gray-600">Overzicht van de wettelijke normen voor drinkwater in Nederland en de EU.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over zink in drinkwater</h2>
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter/koper" className="text-[#005F8A] underline">koper in drinkwater</Link> en{' '}
          <Link href="/waterfilter/zwaar-metalen" className="text-[#005F8A] underline">zware metalen in water</Link>.
        </p>
      </main>
    </>
  );
}
