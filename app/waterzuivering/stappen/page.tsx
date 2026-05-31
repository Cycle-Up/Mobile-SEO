import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { WaterzuiveringFlow } from '@/components/WaterzuiveringFlow';

export const metadata: Metadata = {
  title: 'Stappen in drinkwaterzuivering: van bron tot kraan | WaterfilterPlatform',
  description: 'Hoe wordt drinkwater gemaakt? De 6 zuiveringsstappen uitgelegd: van coagulatie en sedimentatie tot actief-koolfiltratie, desinfectie en distributie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterzuivering/stappen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel stappen heeft drinkwaterzuivering in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drinkwaterzuivering omvat in Nederland doorgaans 6 tot 10 stappen, afhankelijk van de waterbron. Voor grondwater zijn het er 6-8 (beluchting, snelfiltratie, langzame zandfiltratie, UV-desinfectie, actieve koolfiltratie, residuele desinfectie). Voor oppervlaktewater zijn het er 8-10 vanwege de hogere verontreinigingsgraad: extra coagulatie, flocculatie, sedimentatie en ozon-oxidatie zijn dan ook nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is coagulatie en flocculatie bij waterzuivering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coagulatie is het toevoegen van een chemisch middel — doorgaans ijzersulfaat (FeSO4) of aluminiumsulfaat (Al2(SO4)3) — aan het ruwe water. De positief geladen ionen neutraliseren de negatief geladen kleine zwevende deeltjes, waarna ze samenklonteren. Flocculatie is de volgende stap: door langzaam te roeren groeien de kluiten uit tot grotere, zichtbare vlokken (flocs) die makkelijk bezinken of uitfilterbaar zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat verwijdert actief-koolfiltratie in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actief-koolfiltratie (GAC, granulaire actieve kool) verwijdert voornamelijk organische stoffen via adsorptie: pesticiden, PFAS, medicijnresten, geurstoffen en smaakstoffen. Een gram actieve kool heeft een intern oppervlak van 500-1500 m2, waarop moleculen worden vastgehouden. Actieve kool verwijdert geen calcium, magnesium, nitraat of bacterien.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe wordt drinkwater in Nederland gedesinfecteerd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederland worden drie desinfectiemethoden gebruikt: UV-straling (beschadigt het DNA van micro-organismen zodat ze zich niet kunnen vermenigvuldigen), ozon (krachtig oxidatiemiddel dat virussen en cryptosporidium doodt) en chloor of chloramine (residuele desinfectie in het distributienet). De meeste Nederlandse waterbedrijven voegen chloramine (chloor + ammonia) toe als residuele desinfectant, dat langzamer afbreekt dan vrij chloor en zo langer bescherming biedt in het leidingnet.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Stappen in drinkwaterzuivering: van bron tot kraan',
  description: 'Hoe wordt drinkwater gemaakt? De 6 zuiveringsstappen uitgelegd: van coagulatie en sedimentatie tot actief-koolfiltratie, desinfectie en distributie.',
  datePublished: '2026-05-21',
  dateModified: '2026-05-21',
  url: 'https://waterfilterplatform.nl/waterzuivering/stappen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ZuiveringsstappenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterzuivering', item: 'https://waterfilterplatform.nl/waterzuivering' },
              { '@type': 'ListItem', position: 3, name: 'Stappen', item: 'https://waterfilterplatform.nl/waterzuivering/stappen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterzuivering" className="hover:underline">Waterzuivering</Link> &rsaquo;{' '}
          <span>Stappen</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Stappen in drinkwaterzuivering
          </h1>
          <p className="text-gray-700 text-lg">
            Voordat water uit uw kraan komt, doorloopt het een reeks zorgvuldig ontworpen
            zuiveringsstappen. Van de winning uit grond of rivier tot de laatste druppel via het
            leidingnet: elke stap verwijdert specifieke verontreinigingen.
          </p>
        </div>

        <QuickAnswer answer="Drinkwaterzuivering doorloopt 6 hoofdstappen: coagulatie/flocculatie, sedimentatie, filtratie (zandfilter), actief-koolfiltratie, desinfectie (chloor, UV of ozon) en distributie via het leidingnet." />

        <figure>
          <WaterzuiveringFlow className="w-full h-auto rounded-2xl shadow-sm bg-white" />
          <figcaption className="text-xs text-gray-500 text-center mt-2">
            Het drinkwaterzuiveringsproces in Nederland in 7 stappen — van inname tot kraan.
          </figcaption>
        </figure>

        <CTABanner context="algemeen" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom moet drinkwater gezuiverd worden?
        </h2>
        <p className="text-gray-700 mb-4">
          Zowel grondwater als oppervlaktewater bevat stoffen die schadelijk kunnen zijn voor de
          gezondheid. Grondwater bevat van nature opgeloste mineralen zoals ijzer en mangaan, maar
          kan ook verontreinigd zijn met nitraat, pesticiden en PFAS door uitspoeling vanuit de
          bodem. Oppervlaktewater — zoals Rijn- en Maaswater — draagt bacterien, virussen, algen,
          industriele lozingen, geneesmiddelenresten en microplastics mee.
        </p>
        <p className="text-gray-700 mb-4">
          Zonder zuivering zou leidingwater een ernstig volksgezondheidrisico vormen. Het
          Nederlandse zuiveringssysteem is een van de meest geavanceerde ter wereld en zorgt
          ervoor dat het water uit de kraan voldoet aan de strenge normen van het{' '}
          <Link href="/drinkwaternormen" className="text-[#005F8A] underline">
            Drinkwaterbesluit
          </Link>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Wat zit er in ruw water?</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Bacterien en virussen</li>
              <li>&bull; Zwevende deeltjes en slib</li>
              <li>&bull; Opgeloste chemicalien (pesticiden, PFAS)</li>
              <li>&bull; Medicijnresten</li>
              <li>&bull; Ijzer, mangaan en andere mineralen</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Wat verwijdert zuivering?</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Microbiologische verontreiniging (&gt;99,99%)</li>
              <li>&bull; Zwevende deeltjes (&gt;90%)</li>
              <li>&bull; Pesticiden en organische stoffen</li>
              <li>&bull; Geur- en smaakstoffen</li>
              <li>&bull; Deels PFAS en medicijnresten</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 1: Inname en voorfiltratie
        </h2>
        <p className="text-gray-700 mb-4">
          Het zuiveringsproces begint bij de <strong>inname</strong> van ruw water. Bij
          oppervlaktewater worden roosters en zeven gebruikt om grof materiaal — bladeren,
          takken, zand, vissen en algen — tegen te houden voordat het water de installatie
          binnenkomt. Dit beschermt de pompen en downstreamprocessen.
        </p>
        <p className="text-gray-700 mb-4">
          Bij grondwater vervangt de pompput deze stap: het water wordt omhooggehaald uit een
          watervoerende laag (aquifer) op 20-80 meter diepte. De bodemlagen hebben al een
          filterende werking uitgeoefend, waardoor microbiologische verontreiniging doorgaans
          laag is.
        </p>
        <p className="text-gray-700 mb-6">
          Bij calamiteiten — een olieramp, giflozing of extreme algengroei — kan de inname van
          oppervlaktewater tijdelijk worden gestopt. Grondwater en duininfiltratiebuffers bieden
          dan een alternatief.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 2: Coagulatie en flocculatie
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste deeltjes in ruw water zijn te klein om te bezinken of uit te filteren: ze
          dragen een negatieve elektrische lading die ervoor zorgt dat ze elkaar afstoten en in
          suspensie blijven. <strong>Coagulatie</strong> neutraliseert die lading.
        </p>
        <p className="text-gray-700 mb-4">
          Aan het water wordt een coagulansmiddel toegevoegd — doorgaans{' '}
          <strong>ijzersulfaat (FeSO&#8324;)</strong> of{' '}
          <strong>aluminiumsulfaat (Al&#8322;(SO&#8324;)&#8323;)</strong>. De positief geladen
          ionen trekken de negatief geladen deeltjes aan, waarna ze beginnen samen te klonteren.
        </p>
        <p className="text-gray-700 mb-6">
          In de <strong>flocculatiefase</strong> wordt het water langzaam geroerd (15-30 minuten),
          zodat de kleine kluiten uitgroeien tot grotere, zichtbare vlokken (flocs). Deze vlokken
          vangen ondertussen ook bacterien en virussen in, waardoor ze meegenomen worden naar de
          volgende stap.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 3: Sedimentatie en bezinking
        </h2>
        <p className="text-gray-700 mb-4">
          Na flocculatie stroomt het water een grote, rustige <strong>bezinkbak</strong> in. De
          vlokken zijn nu zwaar genoeg om naar de bodem te zakken — een proces dat{' '}
          <strong>sedimentatie</strong> heet en 2-4 uur duurt. Het sediment aan de bodem wordt
          als slib afgevoerd en verwerkt.
        </p>
        <p className="text-gray-700 mb-6">
          Na sedimentatie is meer dan <strong>90% van de zwevende deeltjes</strong> verwijderd.
          Het water is aanzienlijk helderder geworden, maar bevat nog steeds opgeloste stoffen,
          fijne deeltjes en micro-organismen die de volgende stappen vereisen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 4: Zandfiltratie
        </h2>
        <p className="text-gray-700 mb-4">
          Een <strong>zandfilter</strong> vangt de resterende zwevende deeltjes, vlokresten en
          grotere micro-organismen op. Bij <em>snelfiltratie</em> stroomt het water met een
          snelheid van 5-10 meter per uur door een zandbed van 60-90 cm dikte. Periodiek wordt
          het filter teruggespoeld om opgehoopte deeltjes te verwijderen.
        </p>
        <p className="text-gray-700 mb-4">
          Voor grondwater en als tweede filterstap wordt ook <em>langzame zandfiltratie</em>{' '}
          toegepast. Het water stroomt hier slechts 0,1-0,3 meter per uur doorheen. De bovenste
          centimeters van het zandbed vormen een biologisch actieve laag — de zogenoemde{' '}
          <strong>Schmutzdecke</strong> — een biofilm van bacterien en micro-organismen die
          organische stoffen en ziektekiemen biologisch afbreken.
        </p>
        <p className="text-gray-700 mb-6">
          Langzame zandfilters zijn minder onderhoudsgevoelig dan snelfilters en leveren een
          hogere waterkwaliteit, maar vergen veel meer ruimte en tijd.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 5: Actief-koolfiltratie
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Granulaire actieve kool (GAC)</strong> is een van de krachtigste stappen voor
          het verwijderen van opgeloste organische verbindingen. Actieve kool heeft een enorm
          intern oppervlak: een gram kool heeft een oppervlak van 500-1500 m&#178;, vol met
          microscopisch kleine porieen die moleculen adsorberen.
        </p>
        <p className="text-gray-700 mb-4">
          Actief-koolfiltratie is effectief tegen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Pesticiden:</strong> herbiciden, insecticiden en fungiciden uit landbouwafvoer</li>
          <li><strong>PFAS:</strong> gedeeltelijk, afhankelijk van de ketenlengte van de verbinding</li>
          <li><strong>Medicijnresten:</strong> antibiotica, hormonen, pijnstillers</li>
          <li><strong>Geur- en smaakstoffen:</strong> aardachtige geuren door algen (geosmine, MIB)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Na verloop van tijd raakt de actieve kool verzadigd en moet worden vervangen of
          thermisch geregenereerd. Sommige waterbedrijven combineren actieve kool met biologische
          werking (<em>biologisch actief koolfiltratie, BAC</em>), waarbij bacteriekolonies op de
          kool de afgebroken organische fragmenten als voedsel gebruiken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 6: Desinfectie
        </h2>
        <p className="text-gray-700 mb-4">
          Desinfectie is de stap die micro-organismen onschadelijk maakt die alle vorige stappen
          hebben overleefd. Nederlandse waterbedrijven gebruiken drie methoden, soms in combinatie:
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#005F8A] text-white text-xs font-bold px-2.5 py-1 rounded-full shrink-0">UV</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">UV-straling</h3>
                <p className="text-gray-700 text-sm mt-1">
                  UV-lampen op 254 nm beschadigen het DNA en RNA van bacterien, virussen en
                  protozoa (zoals cryptosporidium en giardia), waardoor ze zich niet meer kunnen
                  vermenigvuldigen. UV laat geen chemische residuen achter in het water.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#005F8A] text-white text-xs font-bold px-2.5 py-1 rounded-full shrink-0">O&#8323;</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">Ozon</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Ozon (O&#8323;) is een extreem krachtig oxidatiemiddel dat ter plekke wordt
                  opgewekt. Het doodt effectief virussen, bacterien en protozoa, en breekt
                  organische verbindingen en geurstoffen af. Ozon ontbindt snel tot zuurstof
                  en laat geen schadelijke residuen achter.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#005F8A] text-white text-xs font-bold px-2.5 py-1 rounded-full shrink-0">Cl</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">Chloor en chloramines</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Een kleine hoeveelheid chloor of chloramine (chloor + ammonia) wordt
                  toegevoegd als <em>residuele desinfectant</em>. In Nederland is chloramine
                  gangbaar omdat het langzamer afbreekt dan vrij chloor, waardoor bescherming
                  langer aanhoudt in het distributienet. De concentratie is laag — doorgaans
                  minder dan 0,2 mg/L — maar kan door gevoelige consumenten worden geroken
                  of geproefd.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 7: Distributie via het leidingnet
        </h2>
        <p className="text-gray-700 mb-4">
          Na zuivering wordt het drinkwater opgeslagen in <strong>reservoirs en watertorens</strong>{' '}
          en vervolgens via een netwerk van leidingen naar woningen en bedrijven gepompt. In
          Nederland bedraagt de totale lengte van het drinkwaterleidingnet meer dan 120.000 kilometer.
        </p>
        <p className="text-gray-700 mb-4">
          Tijdens transport kan herverontreiniging optreden. Risicofactoren zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Verouderde loden of stalen leidingen (corrosie, loodafgifte)</li>
          <li>Biofilmvorming in leidingwanden bij te lage chloramine-concentratie</li>
          <li>Lekken waardoor grondwater het net kan binnendringen</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Waterbedrijven passen <strong>na-chlorering</strong> toe op strategische punten in het
          net om de residuele desinfectantconcentratie op peil te houden. Druk in het net (doorgaans
          2-8 bar) voorkomt dat verontreinigd water naar binnen kan stromen bij kleine lekkages.
          Bij aankomst in uw woning moet de chloramine-concentratie nog meetbaar aanwezig zijn;
          dit geldt als bewijs dat het water het hele traject beschermd is gebleven.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterzuivering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterzuivering overzicht</h3>
              <p className="text-sm text-gray-600">Alle methoden en bronnen van drinkwaterzuivering in Nederland overzichtelijk uitgelegd.</p>
            </Link>
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool als filtertechniek</h3>
              <p className="text-sm text-gray-600">Hoe werkt actief kool en wanneer is het de beste keuze voor thuisfiltratie?</p>
            </Link>
            <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</h3>
              <p className="text-sm text-gray-600">Welke stoffen zitten er in drinkwater en wat zijn de gezondheidsrisico's?</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen in Nederland</h3>
              <p className="text-sm text-gray-600">Overzicht van alle wettelijke normen voor drinkwater in Nederland en Europa.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="algemeen" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over zuiveringsstappen</h2>
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
          <Link href="/waterzuivering" className="text-[#005F8A] underline">waterzuivering overzicht</Link>,{' '}
          <Link href="/waterzuivering/grondwater" className="text-[#005F8A] underline">grondwaterzuivering</Link> en{' '}
          <Link href="/waterzuivering/oppervlaktewater" className="text-[#005F8A] underline">oppervlaktewaterzuivering</Link>.
        </p>
      </main>
    </>
  );
}
