import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Grondwaterzuivering: hoe wordt grondwater drinkwater?',
  description: '60% van het Nederlandse drinkwater komt uit grondwater. Grondwaterzuivering verwijdert ijzer, mangaan en bacterien via beluchting, zandfiltratie en UV.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterzuivering/grondwater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe wordt grondwater gezuiverd tot drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grondwaterzuivering verloopt in 7-8 stappen. Na winning via pompputten wordt het water belucht om ijzer en mangaan te oxideren. Daarna volgt snelfiltratie (zandfilter), langzame zandfiltratie met biologische werking (Schmutzdecke), UV- of ozon-desinfectie, actieve koolfiltratie voor organische stoffen, residuele desinfectie met chloor of chloramine en distributie. Het hele proces duurt 1-3 dagen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke stoffen zitten van nature in grondwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grondwater bevat van nature opgeloste mineralen afhankelijk van de bodemsamenstelling: ijzer (Fe2+), mangaan, calcium, magnesium (verantwoordelijk voor hardheid), natrium, kalium, bicarbonaten en soms silica. In diepe lagen kan koolzuurgas (CO2) en waterstofsulfide (H2S) aanwezig zijn. Arseen en fluor worden gevonden in specifieke geologische formaties. Diep grondwater is ouder en heeft meer mineralen opgelost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is grondwater schoner dan oppervlaktewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grondwater is doorgaans microbiologisch schoner dan oppervlaktewater omdat de bodem als natuurlijk filter fungeert. Bacterien, virussen en protozoa worden grotendeels tegengehouden. Grondwater bevat echter meer opgeloste mineralen (ijzer, mangaan) en kan in bepaalde gebieden pesticiden, nitraat of PFAS bevatten door uitspoeling vanuit de bodem. De kwaliteitsstabiliteit over het jaar is bij grondwater beter dan bij oppervlaktewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat grondwater PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in bepaalde gebieden. PFAS sijpelt vanuit verontreinigde bodems door naar het grondwater. Hotspots zijn gebieden nabij militaire bases waar blusschuim is gebruikt, industrieterreinen en gebieden met historische PFAS-lozingen. Noord-Brabant en Limburg kennen verhoogde grondwater-PFAS-concentraties. Waterbedrijven als Brabant Water monitoren dit intensief en investeren in extra GAC-filtratie om PFAS te verwijderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe diep worden grondwaterputten geboord?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drinkwaterwinningsputten zijn doorgaans 20-80 meter diep, afhankelijk van de diepte van de watervoerende laag (aquifer). Diepere putten (50-80 m) leveren ouder, mineralenrijker water dat intensievere ontharding kan vereisen. Ondiepere putten zijn gevoeliger voor verontreiniging vanuit het oppervlak. De exacte diepte wordt bepaald door geologisch onderzoek van de ondergrond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke Nederlandse waterbedrijven gebruiken grondwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De belangrijkste grondwaterbedrijven in Nederland zijn: Vitens (Oost- en Noord-Nederland, grootste drinkwaterbedrijf), Brabant Water (Noord-Brabant), WML - Waterleiding Maatschappij Limburg (Limburg), en WMD - Waterbedrijf Groningen en Drenthe (Drenthe). Vitens bedient meer dan 5,5 miljoen klanten en put vrijwel uitsluitend uit grondwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is beluchting bij waterzuivering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beluchting is een zuiveringsstap waarbij grondwater in contact gebracht wordt met lucht. Dit heeft drie effecten: (1) opgelost ijzer (Fe2+) oxideert tot Fe3+ dat neerslaat als roest en kan worden uitgefilterd; (2) koolzuurgas (CO2) verdampt, waardoor de pH stijgt van circa 6,5 naar 7,5; (3) waterstofsulfide (H2S) verdampt, wat de karakteristieke rotte-eierengeur elimineert. Beluchting kan via sproeiinstallaties, traptorens of persluchtinjectie plaatsvinden.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Grondwaterzuivering: hoe wordt grondwater drinkwater?',
  description: '60% van het Nederlandse drinkwater komt uit grondwater. Grondwaterzuivering verwijdert ijzer, mangaan en bacterien via beluchting, zandfiltratie en UV.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterzuivering/grondwater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function GrondwaterzuiveringPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterzuivering', item: 'https://waterfilterplatform.nl/waterzuivering' },
              { '@type': 'ListItem', position: 3, name: 'Grondwaterzuivering', item: 'https://waterfilterplatform.nl/waterzuivering/grondwater' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <Link href="/waterzuivering" className="hover:underline">Waterzuivering</Link> &rsaquo;{' '}
          <span>Grondwaterzuivering</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Grondwaterzuivering: hoe wordt grondwater drinkwater?
          </h1>
          <p className="text-gray-700 text-lg">
            Zestig procent van het Nederlandse drinkwater komt uit de grond. Regenwater dat jarenlang door
            bodemlagen is gesijpeld, wordt via pompputten omhoog gehaald en in 7-8 stappen omgezet naar
            veilig drinkwater.
          </p>
        </div>

        <QuickAnswer answer="Grondwaterzuivering verwijdert ijzer, mangaan, bacterien en organische stoffen via beluchting, snelfiltratie, langzame zandfiltratie, UV-desinfectie en actieve koolfiltratie. Grondwater is van nature microbiologisch schoon maar bevat meer mineralen dan oppervlaktewater. Vitens, Brabant Water, WML en WMD zijn de grootste grondwaterbedrijven." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is grondwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Grondwater is regenwater dat door de bodem is gezakt en terechtgekomen is in watervoerende lagen,
          zogenoemde <strong>aquifers</strong>. Deze lagen bestaan doorgaans uit zand of grind en bevinden zich
          op 20-80 meter diepte. Het water verblijft er soms tientallen jaren voordat het gewonnen wordt.
        </p>
        <p className="text-gray-700 mb-4">
          Gedurende dat verblijf filtreren de bodemdeeltjes bacterien en virussen eruit. Tegelijkertijd lost
          het water mineralen op uit de omringende gesteentes: ijzer, mangaan, calcium en magnesium. Dieper
          grondwater is ouder en bevat doorgaans meer opgeloste mineralen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Voordelen grondwater</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Minder microbiologische verontreiniging</li>
              <li>&bull; Stabielere kwaliteit door het jaar</li>
              <li>&bull; Minder gevoelig voor seizoensvariaties</li>
              <li>&bull; Bodem als natuurlijk filter</li>
              <li>&bull; Minder pesticiden dan oppervlaktewater</li>
            </ul>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <h3 className="font-bold text-[#003F5C] mb-2">Nadelen grondwater</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Hoog in ijzer en mangaan</li>
              <li>&bull; Soms arseen of fluor aanwezig</li>
              <li>&bull; PFAS in verontreinigde gebieden</li>
              <li>&bull; Beperkte hoeveelheid (aquifer-afhankelijk)</li>
              <li>&bull; Langzame aanvulling (jaren tot decennia)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Grondwaterzuivering stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          Het zuiveringsproces voor grondwater is eenvoudiger dan voor oppervlaktewater, maar omvat toch
          meerdere essentiole stappen:
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">1</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">Winning via pompputten</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Pompputten worden geboord tot 20-80 meter diepte in beschermde waterwingebieden.
                  In deze zones zijn landbouw, industrie en bepaalde bebouwing niet toegestaan om
                  verontreiniging te voorkomen. Het water wordt omhooggepompt en naar de zuiveringsinstallatie
                  getransporteerd.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">2</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">Beluchting</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Water wordt gesproeid over een torenstructuur of door trappen geleid om contact met
                  lucht te bevorderen. Drie effecten tegelijk: opgelost ijzer (Fe&#178;&#8314;) oxideert tot
                  Fe&#179;&#8314; dat neerslaat en uitfilterbaar wordt; koolzuurgas (CO&#8322;) verdampt en de
                  pH stijgt van circa 6,5 naar 7,5-8; waterstofsulfide (H&#8322;S) verdampt en
                  elimineert de rotte-eierengeur.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">3</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">Snelfiltratie</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Een zandfilter van 60-90 cm dikte vangt de neergeslagen ijzer- en mangaandeeltjes op.
                  Het water stroomt met een snelheid van 5-10 meter per uur door het filter. Periodiek
                  wordt het filter teruggespoeld om de opgehoopte deeltjes te verwijderen.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">4</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">Langzame zandfiltratie</h3>
                <p className="text-gray-700 text-sm mt-1">
                  De langzame zandfilter werkt anders dan de snelfilter: het is een biologisch actieve
                  laag. De bovenste centimeters van het zandbed vormen de zogenoemde <em>Schmutzdecke</em>
                  (vuile laag) — een bioffilm van bacterien en microorganismen die organische stof en
                  resterende ziektekiemen afbreken. Het water stroomt hier slechts 0,1-0,3 meter per uur
                  doorheen.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">5</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">UV/ozon-desinfectie</h3>
                <p className="text-gray-700 text-sm mt-1">
                  UV-straling van 254 nm beschadigt het DNA van bacterien, virussen en protozoa zodat
                  ze zich niet meer kunnen vermenigvuldigen. Ozon (O&#8323;) is een krachtig oxidatiemiddel
                  dat micro-organismen doodt en organische verbindingen afbreekt. Welke methode wordt
                  toegepast, hangt af van de waterkwaliteit en het waterbedrijf.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">6</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">Actieve koolfiltratie</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Granulaire actieve kool (GAC) adsorbeert resterende organische verbindingen,
                  pesticiden, geur- en smaakstoffen. Het enorme inwendige oppervlak (1 gram kool heeft
                  een oppervlak van 500-1500 m&#178;) vangt moleculen op door adsorptie. Actieve kool
                  verwijdert ook gedeeltelijk PFAS, al is de effectiviteit per PFAS-verbinding
                  verschillend.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">7</span>
              <div>
                <h3 className="font-semibold text-[#003F5C]">Residuele desinfectie</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Een kleine hoeveelheid chloor of chloramine wordt toegevoegd als residuele
                  desinfectant. Dit voorkomt bacteriegroei in het distributienet tijdens transport
                  naar uw kraan. De concentratie is laag (doorgaans minder dan 0,2 mg/L), maar
                  merkbaar voor mensen die gevoelig zijn voor chloor in smaak en geur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Grondwaterbedrijven in Nederland
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Waterbedrijf</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Regio</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bron</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Klanten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Vitens</td>
                <td className="border border-gray-300 px-3 py-2">Oost- en Noord-Nederland</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater</td>
                <td className="border border-gray-300 px-3 py-2">5,5 miljoen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Brabant Water</td>
                <td className="border border-gray-300 px-3 py-2">Noord-Brabant</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater</td>
                <td className="border border-gray-300 px-3 py-2">2,5 miljoen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">WML</td>
                <td className="border border-gray-300 px-3 py-2">Limburg</td>
                <td className="border border-gray-300 px-3 py-2">Grond + Maaswater</td>
                <td className="border border-gray-300 px-3 py-2">600.000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">WMD</td>
                <td className="border border-gray-300 px-3 py-2">Drenthe</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater</td>
                <td className="border border-gray-300 px-3 py-2">250.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          PFAS in grondwater: een groeiend aandachtspunt
        </h2>
        <p className="text-gray-700 mb-4">
          In 2026 is PFAS-verontreiniging van grondwater een van de grootste uitdagingen voor de
          drinkwatersector. PFAS (poly- en perfluoralkylstoffen) zijn extreem persistent en lossen niet
          op of breken niet af in de bodem.
        </p>
        <p className="text-gray-700 mb-4">
          Hotspots in Nederland zijn gebieden nabij:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Militaire vliegbases (blusschuim met PFAS)</li>
          <li>Brandweerkazernes (oefenterreinen)</li>
          <li>Historische industrieterreinen met fluorchemie</li>
          <li>Landbouwgebieden waar met PFAS-houdend slib is bemest</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Brabant Water en WML monitoren grondwater-PFAS-concentraties intensief. Standaard grondwaterzuivering
          verwijdert PFAS onvoldoende; extra GAC-filtratie is nodig. Voor aanvullende thuisbescherming, bekijk
          onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/putwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Putwater</h3>
            <p className="text-sm text-gray-600">Alles over putwater: kwaliteit, risico's en hoe u het veilig kunt gebruiken.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/nitraat-nitriet" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat en nitriet in drinkwater</h3>
            <p className="text-sm text-gray-600">Risico's van nitraat en nitriet in drinkwater en hoe u ze kunt verwijderen.</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Overzicht van alle wettelijke normen voor drinkwater in Nederland en Europa.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose filtertechniek</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose werkt en wanneer het de beste keuze is voor waterfiltratie.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over grondwaterzuivering</h2>
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
          <Link href="/waterzuivering/oppervlaktewater" className="text-[#005F8A] underline">oppervlaktewaterzuivering</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
