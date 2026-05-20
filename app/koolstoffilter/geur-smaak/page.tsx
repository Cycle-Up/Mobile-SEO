import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Koolstoffilter voor geur en smaak van water (2026)',
  description:
    'Koolstoffilter verwijdert geur en smaak uit leidingwater: chloor, H2S, geosmine, organische stoffen. NSF/ANSI 42, GAC vs blokfilter en vervangingstermijnen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter/geur-smaak' },
};

const faqItems = [
  {
    q: 'Waarom smaakt of ruikt mijn leidingwater vies?',
    a: 'De meest voorkomende oorzaken van geur en smaak in leidingwater zijn: chloor of chlooramine (toegevoegd als desinfectiemiddel), H2S (waterstofsulfide - rotte eieren geur, met name bij grondwater), geosmine en 2-methylisoborneol (MIB) door blauwalgen in oppervlaktewater, organische stoffen uit de bodem, en oude leidingen (metaalachtige smaak door koper of lood). Een koolstoffilter lost de meeste van deze oorzaken effectief op.',
  },
  {
    q: 'Verwijdert een koolstoffilter de chloorlucht uit leidingwater?',
    a: 'Ja. Een koolstofblokfilter verwijdert vrij chloor voor 95-99%, wat de typische chloorlucht en -smaak volledig elimineert. GAC haalt 80-95%. NSF/ANSI 42 is de norm die specifiek de reductie van "chlorine taste and odor" test. Na filtratie proeft en ruikt leidingwater niet meer naar chloor. De werking is merkbaar vanaf de eerste liter gefilterd water.',
  },
  {
    q: 'Wat is geosmine en verwijdert een koolstoffilter het?',
    a: 'Geosmine (trans-1,10-dimethyl-trans-9-decalol) is een organische verbinding die wordt uitgescheiden door blauwalgen (cyanobacterien) en bepaalde bacteriesoorten in oppervlaktewater. Geosmine geeft water een aardachtige, moerasachtige geur en smaak. De detectiedrempel voor de menselijke neus is extreem laag: al bij 5 nanogram per liter is geosmine waarneembaar. Een koolstofblokfilter adsorbeert geosmine effectief voor 90-99% vanwege de niet-polaire structuur van het molecuul.',
  },
  {
    q: 'Wat is het verschil tussen NSF/ANSI 42 en NSF/ANSI 53 voor geur en smaak?',
    a: 'NSF/ANSI 42 dekt esthetische verbetering: chloorverwijdering, smaak- en geurverbetering, sedimentreductie. Het test specifiek "chlorine taste and odor reduction" met een minimale reductie van 50% als eis. NSF/ANSI 53 dekt gezondheidskundige reducties: lood, VOC, THM, cystes. Voor puur smaak- en geurverbetering is NSF/ANSI 42 de relevante certificering. Veel kwalitatieve filters hebben beide certificeringen.',
  },
  {
    q: 'Hoe weet ik dat mijn koolstoffilter uitgeput is?',
    a: 'Het duidelijkste signaal dat een koolstoffilter uitgeput is, is de terugkeer van geur of smaak in het gefilterde water. Zodra u chloorlucht, een moerasachtige geur of vreemde smaak terugkrijgt na filtratie, is het filter verzadigd. Andere indicatoren: verminderde doorstroomsnelheid (verstopte mechanische filterkern), het bereiken van de opgegeven levensduur in liters of maanden, en verkleuring van het filterpatroon bij doorzichtige behuizingen.',
  },
  {
    q: 'GAC of koolstofblokfilter: welke is beter voor smaakverbetering?',
    a: 'Voor puur smaak- en geurverbetering (chloor, geosmine) presteren beide filter typen acceptabel. Een GAC filterkan (Brita) verwijdert chloor voor 80-95% en geeft merkbare smaakverbetering bij een kostprijs van EUR 1-3 per maand. Een koolstofblokfilter voor onderbouw verwijdert chloor voor 95-99%, verwijdert ook THM en organische microverontreinigingen, en heeft een langere levensduur. De keuze hangt af van het gewenste comfortniveau en de investeringsbereidheid.',
  },
  {
    q: 'Hoe vergelijkt een koolstoffilter met een RO-systeem voor smaakverbetering?',
    a: 'Voor puur smaak- en geurverbetering is een koolstofblokfilter voldoende en kostenefficienter dan omgekeerde osmose. Een RO-systeem verwijdert naast chloor ook mineralen, wat water een vlakkere, neutrale smaak geeft (laag TDS). Sommige mensen prefereren dit, anderen vinden het mineraalarmere water flauw. Een koolstofblokfilter behoudt de mineralen (calcium, magnesium), wat veel mensen als prettiger ervaren. RO is alleen nodig als ook nitraat, PFAS of zware metalen verwijderd moeten worden.',
  },
  {
    q: 'Hoe lang duurt het voor een nieuw koolstoffilter de smaak verbetert?',
    a: 'Een nieuw koolstoffilter werkt meteen bij de eerste liter. Echter: bij een splinternieuw koolstoffilter wordt aanbevolen om de eerste 2-5 liter weg te laten lopen (afhankelijk van de instructies van de fabrikant) om eventueel loskorrelig koolstofstof te verwijderen. Daarna is het gefilterde water direct merkbaar beter van smaak. Het filter bereikt zijn optimale prestaties na het eerste spoelvolume en behoudt die kwaliteit tot het filter verzadigd raakt.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Koolstoffilter voor geur en smaak van water (2026)',
  description:
    'Koolstoffilter verwijdert geur en smaak: chloor, H2S, geosmine, organische stoffen. NSF/ANSI 42, GAC vs blokfilter en vervangingstermijnen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-20',
  url: 'https://waterfilterplatform.nl/koolstoffilter/geur-smaak',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KoolstoffilterGeurSmaakPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Koolstoffilter', item: 'https://waterfilterplatform.nl/koolstoffilter' },
              { '@type': 'ListItem', position: 3, name: 'Geur en smaak', item: 'https://waterfilterplatform.nl/koolstoffilter/geur-smaak' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/koolstoffilter" className="hover:text-[#005F8A]">Koolstoffilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Geur en smaak</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Koolstoffilter voor geur en smaak: chloor, geosmine en organische stoffen
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een koolstoffilter is de meest effectieve methode om vervelende geuren en smaken uit
            leidingwater te verwijderen. Van chloorlucht tot aardachtige geosminegeur: actief kool
            adsorbeert een brede range aan geur- en smaakstoffen. Op deze pagina leest u welke stoffen
            een koolstoffilter aanpakt, welk type het best presteert, hoe NSF/ANSI 42 werkt en wanneer
            uw filter aan vervanging toe is.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        <QuickAnswer answer="Een koolstofblokfilter verwijdert chloor (95-99%), geosmine (90-99%), H2S en organische smaakstoffen via adsorptie. NSF/ANSI 42 is de relevante certificering voor smaak- en geurverbetering. De eerste terugkeer van chloorlucht of vreemde smaak in gefilterd water signaleert dat het filter uitgeput is. GAC filterkan voldoet voor dagelijks gebruik; een onderbouw blokfilter biedt completere verwijdering." />

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Oorzaken van geur en smaak in leidingwater</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Leidingwater dat vreemd ruikt of smaakt heeft altijd een specifieke oorzaak. Het begrijpen
            van die oorzaak helpt bij het kiezen van de juiste filtermethode. De meest voorkomende
            oorzaken zijn:
          </p>
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Chloor en chlooramine</h3>
              <p className="text-sm text-gray-600">
                De meest voorkomende geur-/smaakklacht. Waterleidingbedrijven doseren chloor als
                desinfectiemiddel. Concentraties van 0,05&ndash;0,3 mg/L zijn al geurbaar voor
                gevoelige mensen. Chlooramine (in sommige regio&apos;s) geeft een zwembadachtige geur.
              </p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Geosmine en MIB</h3>
              <p className="text-sm text-gray-600">
                Geosmine (aardachtige geur) en 2-methylisoborneol (MIB, musty geur) worden geproduceerd
                door blauwalgen en bepaalde bacteriesoorten. Ze zijn detecteerbaar bij concentraties
                van 5&ndash;10 nanogram per liter. Seizoensgebonden piek in zomer en herfst bij gebruik
                van oppervlaktewater als drinkwaterbron.
              </p>
            </div>
            <div className="border-l-4 border-amber-400 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Waterstofsulfide (H2S)</h3>
              <p className="text-sm text-gray-600">
                Typische rotte-eierengeur. Meer voorkomend bij grondwater in bepaalde geologische
                formaties (aanwezigheid van sulfaatreducerende bacterien). In Nederland relatief
                zeldzaam in leidingwater maar incidenteel aanwezig bij particuliere putten.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Organische stoffen (THM, VOC)</h3>
              <p className="text-sm text-gray-600">
                Trihalomethanen en vluchtige organische verbindingen geven een zoet-chemische smaak.
                Ontstaan als bijproduct van chloordesinfectie in aanwezigheid van organische stof.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Metaalachtige smaak</h3>
              <p className="text-sm text-gray-600">
                Koper- of ijzersmaak afkomstig van oude leidingen. Koolstoffilters helpen deels;
                voor zware metalen is een gespecialiseerd filter nodig. Raadpleeg ook de pagina{' '}
                <Link href="/waterfilter/geur" className="text-[#005F8A] underline hover:no-underline">
                  waterfilter voor geur
                </Link>.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">NSF/ANSI 42: de norm voor &quot;chlorine taste and odor reduction&quot;</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 42 is de internationale teststandaard voor esthetische waterbehandeling en is
            specifiek ontworpen voor de evaluatie van smaak- en geurverbetering. De standaard omvat
            de testcategorie <em>chlorine taste and odor reduction</em>, waarbij een filter:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Minimaal 50% van het chloor moet verwijderen gedurende de gehele aangegeven filterlevensduur</li>
            <li>Geen schadelijke stoffen mag uitlogen vanuit het filtermateriaal</li>
            <li>De opgegeven capaciteit in liters of maanden aantoonbaar moet halen</li>
            <li>Een gestandaardiseerd testwater (2 mg/L chloor, pH 7,5) gebruikt bij de test</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            De beste koolstofblokfilters halen 95&ndash;99% chloorverwijdering over de volledige
            filterlevensduur, ruim boven het minimum van 50%. Bij aankoop kunt u het certificaatnummer
            verifiëren via de officiële NSF-productzoekmachine op nsf.org.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer over de werking van koolstoffilters en welke stoffen ze verwijderen leest u op de
            overzichtspagina{' '}
            <Link href="/koolstoffilter/werking" className="text-[#005F8A] underline hover:no-underline">
              hoe werkt een koolstoffilter
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">GAC vs koolstofblokfilter voor smaakverbetering</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beide filtertypen verbeteren de smaak van leidingwater, maar er zijn significante
            prestatieverschillen die de keuze bepalen.
          </p>

          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Criterium</th>
                  <th className="py-2.5 px-3 font-semibold text-center">GAC (filterkan)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Blokfilter (onderbouw)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterium: 'Chloorverwijdering', gac: '80-95%', blok: '95-99%' },
                  { criterium: 'Geosmineverwijdering', gac: '75-90%', blok: '90-99%' },
                  { criterium: 'THM-verwijdering', gac: '70-85%', blok: '90-99%' },
                  { criterium: 'Smaakverbetering (subjectief)', gac: 'Goed', blok: 'Uitstekend' },
                  { criterium: 'Aanschafkosten', gac: 'EUR 25-60', blok: 'EUR 80-200' },
                  { criterium: 'Maandkosten', gac: 'EUR 1-3', blok: 'EUR 5-15' },
                  { criterium: 'NSF/ANSI 42 gecertificeerd', gac: 'Ja', blok: 'Ja' },
                ].map((r, i) => (
                  <tr key={r.criterium} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.criterium}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.gac}</td>
                    <td className="py-2.5 px-3 text-center text-[#005F8A] font-semibold">{r.blok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de meeste gebruikers die alleen chloorlucht en smaak willen verbeteren is een
            GAC filterkan van EUR 1&ndash;3 per maand volledig voldoende. Een onderbouw blokfilter
            is de betere keuze als u ook THM, geosmine en organische microverontreinigingen wilt
            verwijderen, of als u een hogere dagelijkse waterconsumptie hebt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vervangingstermijn: wanneer is uw filter uitgeput?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een koolstoffilter raakt geleidelijk verzadigd naarmate meer geur- en smaakstoffen worden
            geadsorbeerd. De indicatoren dat uw filter aan vervanging toe is:
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 border border-gray-100 rounded-xl p-4">
              <span className="text-red-500 font-bold text-lg shrink-0">!</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Terugkeer van geur of smaak</p>
                <p className="text-sm text-gray-600">Het duidelijkste signaal: zodra gefilterd water weer naar chloor of anders ruikt of smaakt, is het filter verzadigd. Dit is het moment om direct te vervangen.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border border-gray-100 rounded-xl p-4">
              <span className="text-amber-500 font-bold text-lg shrink-0">~</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Bereiken van de aangegeven filterlevensduur</p>
                <p className="text-sm text-gray-600">Vervang het filter altijd op of voor de opgegeven datum of het opgegeven volume, ook als de smaak nog goed lijkt. Bacteriegroei kan plaatsvinden in een bijna verzadigd filter.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border border-gray-100 rounded-xl p-4">
              <span className="text-blue-500 font-bold text-lg shrink-0">&#9660;</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Verminderde doorstroomsnelheid</p>
                <p className="text-sm text-gray-600">Bij een blokfilter duidt sterk verminderde doorstroomsnelheid op verstopte mechanische filterkern. Bij een filterkan op langzamer vullen dan gebruikelijk.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uitgebreide informatie over het vervangen van uw filter vindt u op de pagina{' '}
            <Link href="/koolstoffilter/vervangen" className="text-[#005F8A] underline hover:no-underline">
              koolstoffilter vervangen
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Koolstoffilter vs RO voor smaakverbetering</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een omgekeerde osmose (RO) systeem verwijdert naast geur- en smaakstoffen ook mineralen,
            nitraat, PFAS en zware metalen. Het resulterende water heeft een TDS van 5&ndash;50 mg/L,
            wat een vlakkere, neutralere smaak geeft.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een koolstoffilter behoudt calcium en magnesium (hardheid) volledig, wat velen als aangenamer
            ervaren. De smaak van kraanwater met een koolstoffilter is vergelijkbaar met middelmatige
            mineraalwatermerken. Kiest u voor de zuiverste verwijdering van alle verontreinigingen
            inclusief geur en smaak, maar ook nitraat en PFAS, dan is RO de completere oplossing.
            Kiest u alleen voor smaakverbetering, dan is een koolstoffilter voldoende en goedkoper.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Bekijk de vergelijking op de startpagina{' '}
            <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">
              koolstoffilter overzicht
            </Link>{' '}
            voor een side-by-side vergelijking van alle filteropties.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/koolstoffilter/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een koolstoffilter?</h3>
              <p className="text-sm text-gray-600">Adsorptiewetenschap, GAC vs blokfilter en welke stoffen een koolstoffilter verwijdert.</p>
            </Link>
            <Link href="/koolstoffilter/vervangen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Koolstoffilter vervangen</h3>
              <p className="text-sm text-gray-600">Wanneer en hoe vervangt u uw filter? Vervangingsintervallen per filtertype uitgelegd.</p>
            </Link>
            <Link href="/waterfilter/geur" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor geur</h3>
              <p className="text-sm text-gray-600">Alle filteropties voor geurproblemen in leidingwater vergeleken per oorzaak.</p>
            </Link>
            <Link href="/koolstoffilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Koolstoffilter overzicht</h3>
              <p className="text-sm text-gray-600">Complete gids voor koolstoffilters: typen, kosten, merken en welke het best past bij uw situatie.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over koolstoffilter en geur/smaak
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
