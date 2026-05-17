import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Aluminium in drinkwater: risico\'s en hoe te filteren',
  description: 'Aluminium in drinkwater: EU-norm 200 µg/L, Alzheimer-debat, Nederlandse situatie en welk waterfilter aluminium effectief verwijdert. Osmose vs.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/aluminium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zit er aluminium in Nederlands kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar in heel lage concentraties. Drinkwaterbedrijven gebruiken aluminiumsulfaat (aluin) als vlokingsmiddel in de waterzuivering om troebel water te klaren. Na uitgebreide behandeling bevat het geleverde leidingwater doorgaans 10–50 µg/L aluminium — ruim onder de EU-norm van 200 µg/L. Regelmatige monitoring door drinkwaterbedrijven zorgt dat de norm wordt gehaald.',
      },
    },
    {
      '@type': 'Question',
      name: 'Veroorzaakt aluminium in drinkwater de ziekte van Alzheimer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit is wetenschappelijk omstreden. De EFSA (Europese Autoriteit voor Voedselveiligheid) concludeerde in 2008 dat er bij normale concentraties in drinkwater geen bewijs bestaat voor een causaal verband met Alzheimer. Aluminium accumuleert wel in de hersenen bij Alzheimerpatiënten, maar of dit oorzaak of gevolg is, is niet uitgemaakt. De voornaamste aluminiumbron is voeding (pannen, bakpoeder, additieven), niet drinkwater. Drinkwater draagt gemiddeld minder dan 5% bij aan de totale aluminiumopname.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe wordt aluminium in drinkwater gemeten en herkend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aluminium heeft geen smaak, kleur of geur bij concentraties onder de norm. Bij extreem hoge concentraties kan water licht troebel worden. De enige betrouwbare methode is laboratoriumanalyse. Particulieren in twijfelgevallen (oud leidingwerk, privéput) kunnen een drinkwateranalyse laten uitvoeren bij een gecertificeerd laboratorium.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter aluminium uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Omgekeerde osmose verwijdert 95–98% van aluminium. Het RO-membraan houdt opgeloste metaalionen tegen. Dit is de meest complete filtermethode voor aluminium in combinatie met andere verontreinigingen. Activated alumina filtermedia (geactiveerd aluminiumoxide) werkt ook effectief maar is zelf gemaakt van aluminium — dit levert in de praktijk geen aluminium-afgifte op als het correct verzadigd is, maar geeft sommige gebruikers toch een ongemakkelijk gevoel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn er gezondheidsrisico\'s voor dialysepatiënten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dialysepatiënten zijn een specifieke risicogroep. Bij dialyse worden grote hoeveelheden water direct met het bloed in contact gebracht. Hoge aluminiumconcentraties in dialysewater kunnen ernstige aluminium-toxiciteit veroorzaken, waaronder dialyse-encephalopathie en anemie. Voor dialyse wordt speciaal sterk gepurificeerd water gebruikt; dit is echter een ziekenhuisomgeving en geen thuiszorg-situatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verhoogt zuur water de aluminiumafgifte uit leidingen of pannen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Aluminium lost sneller op bij lage pH (zuur water). Zachte, zure grondwaterbronnen kunnen meer aluminium bevatten. Aluminiumkookpannen geven bij zure gerechten (tomatensaus, citroensap) meer aluminium af dan bij neutraal water. Dit draagt meer bij aan de totale aluminiuminname dan drinkwater. Osmosewater heeft een lage pH (6,0–6,5) en kan bij gebruik in aluminiumkookpannen theoretisch meer aluminium uitlogen — reden waarom remineralisatie zinvol is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert actief kool aluminium uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, standaard actief-koolfilters verwijderen aluminium niet of nauwelijks. Actieve kool adsorbeert organische stoffen, chloor en bepaalde pesticiden, maar is niet effectief voor opgeloste metaalionen zoals aluminium. Voor aluminiumverwijdering zijn osmose, geactiveerd aluminiumoxide (activated alumina) of ionenwisseling noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik mijn water op aluminium laten testen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test uw water op aluminium als: (1) u putwater gebruikt en in een zuur grondwatergebied woont; (2) u in een oud gebouw woont met onbekend leidingmateriaal; (3) u persoonlijk bezorgd bent over aluminiumblootstelling (Alzheimer in de familie); (4) u een dialysepatiënt bent of zorgt voor iemand die thuis dialyse ondergaat. Voor normaal leidingwater in Nederland is routinetesten niet noodzakelijk — drinkwaterbedrijven publiceren jaarlijkse kwaliteitsrapporten.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Aluminium in drinkwater: risico\'s en hoe te filteren',
  description: 'Aluminium in drinkwater: EU-norm, Alzheimer-debat, Nederlandse situatie en beste filteropties.',
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
  url: 'https://waterfilterplatform.nl/waterfilter/aluminium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterAluminiumPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Aluminium in drinkwater', item: 'https://waterfilterplatform.nl/waterfilter/aluminium' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterfilter" className="hover:underline">Waterfilter</a> &rsaquo;{' '}
          <span>Aluminium in drinkwater</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Aluminium in drinkwater: risico&apos;s en hoe te filteren
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#003F5C] mb-1">Kort antwoord</p>
          <p className="text-gray-700 text-sm">
            Nederlands leidingwater bevat 10–50 µg/L aluminium — ruim onder de EU-norm van 200 µg/L. Aluminium heeft geen smaak of kleur en het Alzheimer-verband is wetenschappelijk niet bewezen. Osmose verwijdert 95–98%. Risicogroepen: dialysepatiënten en mensen met putwater in zure gebieden.
          </p>
        </div>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komt aluminium in drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Aluminium is het meest voorkomende metaal in de aardkorst. In drinkwater zijn er drie relevante bronnen:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Aluminiumsulfaat (aluin) als vlokingsmiddel</h3>
            <p className="text-gray-700 text-sm">
              Dit is de voornaamste reden voor aluminium in behandeld leidingwater. Aluminiumsulfaat (Al₂(SO₄)₃) wordt toegevoegd aan troebel oppervlaktewater om zweefdeeltjes samen te klonteren en neer te laten slaan — een proces dat vlokking of coagulatie heet. Na bezinking en filtratie blijft een kleine hoeveelheid opgelost aluminium in het water. Drinkwaterbedrijven behandelen het water vervolgens om residueel aluminium te verwijderen. Typisch resultaat na behandeling: 10–50 µg/L — ver onder de EU/WHO-norm van 200 µg/L.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Natuurlijk aluminium in grondwater</h3>
            <p className="text-gray-700 text-sm">
              In gebieden met zure bodems (heidegronden, veengebieden) en lage pH-grondwater lost aluminium van nature uit de bodem. Dit is zeldzamer in het Nederlandse drinkwatersysteem maar relevant voor privéputten in zure gebieden. Zacht, zuur grondwater kan concentraties boven de EU-norm bereiken.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Aluminiumleidingen (zeldzaam in Nederland)</h3>
            <p className="text-gray-700 text-sm">
              Zuiver aluminium als leidingmateriaal is in Nederland niet gebruikelijk. In sommige oudere gebouwen en in bepaalde landen zijn aluminiumleidingen gebruikt, maar in Nederland domineert koper en kunststof. Toch kunnen aluminiumhoudende legeringen in kranen en fittingen bij agressief (zacht, zuur) water iets aluminium afgeven.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De Nederlandse situatie: normen en kwaliteit
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland heeft strenge drinkwaternormen. Voor aluminium gelden de volgende kaders:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>EU-norm (Drinkwaterrichtlijn):</strong> 200 µg/L als indicatorparameter</li>
          <li><strong>WHO-richtlijn:</strong> 200 µg/L (gebaseerd op gezondheidsoverwegingen én esthetische aspecten)</li>
          <li><strong>Typisch NL leidingwater:</strong> 10–50 µg/L — 4 tot 20 keer onder de norm</li>
          <li><strong>Drinkwaterbedrijven:</strong> Publiceren jaarlijkse kwaliteitsrapporten; aluminium is een standaardparameter die continu bewaakt wordt</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Aluminium is kleurloos, reukloos en smaakloos bij concentraties die in Nederlands drinkwater voorkomen. Er is geen zintuiglijke detectie mogelijk. Overschrijdingen van de EU-norm bij leidingwater zijn in Nederland uitzonderlijk zeldzaam.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het Alzheimer-debat: wat zegt de wetenschap?
        </h2>
        <p className="text-gray-700 mb-4">
          De relatie tussen aluminium en de ziekte van Alzheimer is een van de langlopende wetenschappelijke debatten in de toxicologie. De feiten:
        </p>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Het argument voor een verband</h3>
            <p className="text-gray-700 text-sm">
              Studies uit de jaren 1970–1990 vonden verhoogde aluminiumconcentraties in de hersenen van Alzheimerpatiënten. Sommige epidemiologische studies rapporteerden hogere Alzheimer-incidentie in gebieden met hoger aluminiumgehalte in drinkwater. Aluminium accumuleert in hersenweefsel en kan neurotoxisch zijn bij hoge doses.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">De wetenschappelijke consensus anno 2026</h3>
            <p className="text-gray-700 text-sm">
              De EFSA (2008) en WHO concluderen dat er geen bewijs bestaat voor een causaal verband bij concentraties die in drinkwater voorkomen. Het verhoogde aluminium in Alzheimerhersenen is vermoedelijk gevolg van de ziekte (verstoord metabolisme), niet oorzaak. De overgrote meerderheid van de aluminiumblootstelling bij mensen komt uit voeding (aluinbevattende bakpoeders, additieven, aluminiumfolie), niet uit drinkwater. Genetische factoren (ApoE4-gen) zijn verreweg de sterkste risicofactoren voor Alzheimer.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Praktische conclusie</h3>
            <p className="text-gray-700 text-sm">
              Wie bezorgd is over aluminium, kan een osmosefilter installeren. Dat reduceert de bijdrage via drinkwater naar verwaarloosbare niveaus. Of dit een meetbaar effect heeft op Alzheimer-risico is wetenschappelijk niet aangetoond, maar het is een veilige en verantwoorde keuze voor wie zekerheid wil. Lees meer in ons overzicht over{' '}
              <a href="/drinkwater/kwaliteit" className="text-[#005F8A] underline">drinkwaterkwaliteit in Nederland</a>.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wie loopt werkelijk risico?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor gezonde volwassenen met normaal leidingwater is aluminium in drinkwater geen zorg. Specifieke aandacht verdienen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Dialysepatiënten:</strong> Bij hemodialyse worden grote volumes water direct met het bloed in contact gebracht via het dialysemembraan. Zelfs lage aluminiumconcentraties kunnen bij dialyse cumulatief leiden tot aluminium-toxiciteit (dialyse-encefalopathie, botaandoeningen, anemie). Dialysewater wordt in ziekenhuizen ultrazuiver gemaakt.</li>
          <li><strong>Putgebruikers in zure gebieden:</strong> Heidegronden en veengebieden met zuur grondwater kunnen verhoogde aluminiumconcentraties in putwater geven. Testen is aanbevolen.</li>
          <li><strong>Mensen met chronische nierziekte:</strong> Verminderde nierfunctie vermindert aluminiumuitscheiding en kan tot ophoping leiden bij hogere blootstelling.</li>
          <li><strong>Persoonlijke voorzorg bij Alzheimer-familiegeschiedenis:</strong> Hoewel het verband niet bewezen is, is een osmosefilter een verstandige voorzorgsmaatregel voor wie zekerheid wenst.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropties voor aluminium
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Aanbevolen</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Het RO-membraan houdt opgeloste aluminiumionen (Al³⁺) en aluminiumverbindingen tegen. Verwijderingsrendement 95–98%. Ideale keuze omdat het tegelijkertijd ook andere verontreinigingen aanpakt. Zie ook ons artikel over{' '}
              <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilters</a>.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Aluminium: 95–98% verwijdering</span>
              <span>Kosten: €300–800</span>
              <span>Onderhoud: jaarlijks</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Geactiveerd aluminiumoxide (Activated Alumina)</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Effectief maar specifiek</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Geactiveerd aluminiumoxide (Al₂O₃) adsorbeert aluminium en andere metalen. Het is zelf gemaakt van aluminium, wat sommige gebruikers vreemd vindt, maar bij correcte saturatie geeft het geen aluminium af aan het water. Effectief voor fluoride en arsenicum. Vereist pH-controle voor optimale werking.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Aluminium: 85–95% verwijdering</span>
              <span>Kosten: €200–600</span>
              <span>Onderhoud: medium vervangen</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Ionenwisseling (kationhars)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Kationenwisselaars kunnen Al³⁺ verwijderen maar zijn niet geoptimaliseerd voor aluminium en minder efficiënt dan osmose. Meer geschikt voor hardheid en specifieke zware metalen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Aluminium: 60–80% verwijdering</span>
              <span>Minder selectief voor aluminium</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Actief-koolfilter</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Niet effectief</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Actief-koolfilters zijn uitstekend voor chloor, geuren en organische verbindingen, maar verwijderen aluminium niet of nauwelijks. Niet geschikt als enige filtermethode bij aluminiumzorg.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Aluminium: &lt;5% verwijdering</span>
              <span>Kosten: €30–200</span>
              <span>NIET geschikt voor aluminium</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: filters voor aluminium
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Al verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95–98%</td>
                <td className="border border-gray-300 px-3 py-2">€300–800</td>
                <td className="border border-gray-300 px-3 py-2">Beste alles-in-één oplossing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Geactiveerd aluminiumoxide</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85–95%</td>
                <td className="border border-gray-300 px-3 py-2">€200–600</td>
                <td className="border border-gray-300 px-3 py-2">Ook effectief voor As en F</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Ionenwisseling (kation)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">60–80%</td>
                <td className="border border-gray-300 px-3 py-2">€400–1.000</td>
                <td className="border border-gray-300 px-3 py-2">Minder selectief voor Al</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Destillatie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;99%</td>
                <td className="border border-gray-300 px-3 py-2">€200–500</td>
                <td className="border border-gray-300 px-3 py-2">Langzaam, hoog energieverbruik</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Actief-koolfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2">€30–200</td>
                <td className="border border-gray-300 px-3 py-2">NIET geschikt voor aluminium</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Waterfilterkan (Brita)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2">€30–60</td>
                <td className="border border-gray-300 px-3 py-2">NIET geschikt voor aluminium</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer testen en welke actie ondernemen?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de meeste Nederlanders met leidingwater is testen op aluminium niet noodzakelijk — drinkwaterbedrijven voeren continue monitoring uit en publiceren transparante kwaliteitsrapporten. Actie is zinvol als u:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Putwater gebruikt in een zure bodemregio (heidegronden, veenbodems)</li>
          <li>In een oud gebouw woont met onbekend leidingmateriaal</li>
          <li>Dialysepatiënt bent of thuisdialyse overweegt</li>
          <li>Chronische nierziekte heeft en bezorgd bent over aluminiumophoping</li>
          <li>Persoonlijk zekerheid wil over aluminiumblootstelling via water</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een uitgebreide drinkwateranalyse inclusief aluminium kost €80–150 bij een gecertificeerd laboratorium. Zie ook onze pagina over{' '}
          <a href="/waterfilter/arsenicum" className="text-[#005F8A] underline">arsenicum filteren</a> voor vergelijkbare filterstrategieën bij zware metalen in water.
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
          <a href="/waterfilter/arsenicum" className="text-[#005F8A] underline">arsenicum in drinkwater</a>,{' '}
          <a href="/drinkwater/kwaliteit" className="text-[#005F8A] underline">drinkwaterkwaliteit Nederland</a> en{' '}
          <a href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose waterfilter</a>.
        </p>
      </main>
    </>
  );
}
