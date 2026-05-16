import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Oppervlaktewaterzuivering: hoe wordt Maas- en Rijnwater drinkwater?',
  description: '40% van Nederlands drinkwater komt uit de Maas en Rijn. Oppervlaktewaterzuivering vereist meer stappen dan grondwater door hogere verontreinigingsgraad. Volledig uitgelegd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterzuivering/oppervlaktewater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Maaswater veilig om te drinken na zuivering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, na zuivering voldoet Maaswater volledig aan de Nederlandse drinkwaternormen. Het zuiveringsproces omvat coagulatie, flocculatie, sedimentatie, ozon-oxidatie, biologisch actief koolfiltratie, UV-desinfectie en residuele desinfectie. Evides en WML zuiveren Maaswater al decennialang tot veilig drinkwater. De uitdaging is PFAS, waarvoor waterbedrijven extra GAC-filterstappen installeren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel stappen heeft oppervlaktewaterzuivering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oppervlaktewaterzuivering omvat 8-10 stappen: inname en zeving, coagulatie, flocculatie, sedimentatie, snelfiltratie, ozon-oxidatie, biologisch actief koolfiltratie (BAC), UV-desinfectie, eventueel membraanfiltratie (ultrafiltratie) en residuele desinfectie met chloor of chloramine. Dit zijn 2-4 stappen meer dan bij grondwaterzuivering vanwege de hogere verontreinigingsgraad van oppervlaktewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bevat Rijnwater PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, de Rijn brengt PFAS mee vanuit Duitsland en Belgie. Historische lozingen door bedrijven als 3M in Antwerpen en Chemours in Dordrecht hebben het Rijnwater belast. PWN en Waternet Amsterdam, die Rijn- en IJmeerwater gebruiken, investeren meer dan 100 miljoen euro in extra GAC-filters om PFAS beter te verwijderen. De PFAS-concentraties in eindproduct drinkwater worden streng gemonitord en liggen bij actuele metingen onder de EU-drinkwaternorm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen ozon en chloor bij waterzuivering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ozon (O3) is een krachtig oxidatiemiddel dat ter plekke wordt opgewekt en direct wordt gebruikt. Het is effectiever dan chloor voor het vernietigen van virussen, cryptosporidium en giardia, en breekt organische verbindingen af. Ozon laat geen residuen achter in het water. Chloor of chloramine worden daarna nog toeggevoegd als residuele desinfectant voor bescherming in het distributienet, iets wat ozon door snelle ontbinding niet kan bieden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt duinwaterzuivering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Duinwaterzuivering is een bijzonder systeem dat wordt gebruikt door Dunea en PWN. Oppervlaktewater wordt via kanalen naar de duinen gepompt en infiltreert daar in de bodem. Na 1-3 maanden reistijd door de duinbodem wordt het water gewonnen via pompputten. De duinbodem filtert het water op een manier vergelijkbaar met langzame zandfiltratie op grote schaal. Daarna volgt nog een nazuiveringsstap met actieve kool en residuele desinfectie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke Nederlandse waterbedrijven gebruiken oppervlaktewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De waterbedrijven die oppervlaktewater gebruiken zijn: Evides (Maas, regio Rotterdam/Zeeland), WML (Maas, Limburg), PWN (Rijn/IJmeer en duinen, Noord-Holland), Waternet (IJmeer en Rijn, Amsterdam), Dunea (duinwater, Zuid-Holland). Zij verwerken samen het Rijn- en Maaswater naar drinkwater voor circa 40% van de Nederlandse bevolking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is oppervlaktewater moeilijker te zuiveren dan grondwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oppervlaktewater heeft een complexere en variabeler samenstelling dan grondwater. Het bevat hogere concentraties zwevende deeltjes, algen, bacterien, virussen, pesticiden van landbouwafvoer, geneesmiddelenresten, industriele lozingen en PFAS. De kwaliteit varieert sterk per seizoen (algenbloei in zomer, hoge afvoer in winter). Al deze factoren vereisen meer zuiveringsstappen, grotere installaties en intensievere monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is biologisch actief koolfiltratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Biologisch actief koolfiltratie (BAC) is een combinatie van adsorptie en biologische afbraak. Na ozon-oxidatie bevat het water afbraakproducten van organische stoffen die op zichzelf biologisch goed afbreekbaar zijn. In de BAC-filter leven bacterien die deze stoffen als voedsel gebruiken. De actieve kool biedt daarbij zowel adsorptieoppervlak als een drager voor de bacteriekolonies. Dit is effectiever dan gewone actieve koolfiltratie alleen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Oppervlaktewaterzuivering: hoe wordt Maas- en Rijnwater drinkwater?',
  description: '40% van Nederlands drinkwater komt uit de Maas en Rijn. Oppervlaktewaterzuivering vereist meer stappen dan grondwater door hogere verontreinigingsgraad. Volledig uitgelegd.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterzuivering/oppervlaktewater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OppervlaktewaterzuiveringPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterzuivering', item: 'https://waterfilterplatform.nl/waterzuivering' },
              { '@type': 'ListItem', position: 3, name: 'Oppervlaktewaterzuivering', item: 'https://waterfilterplatform.nl/waterzuivering/oppervlaktewater' },
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
          <span>Oppervlaktewaterzuivering</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Oppervlaktewaterzuivering: hoe wordt Maas- en Rijnwater drinkwater?
          </h1>
          <p className="text-gray-700 text-lg">
            Veertig procent van Nederlands drinkwater is ooit Maas- of Rijnwater geweest. Na een
            intensief zuiveringsproces van 8-10 stappen — meer dan voor grondwater — verlaat het als
            veilig drinkwater de installatie.
          </p>
        </div>

        <QuickAnswer answer="Oppervlaktewaterzuivering omvat 8-10 stappen: coagulatie, flocculatie, sedimentatie, snelfiltratie, ozon-oxidatie, biologisch actief koolfiltratie (BAC), UV-desinfectie, eventueel membraanfiltratie en residuele desinfectie. De grotere uitdaging ten opzichte van grondwater is de variabele kwaliteit en hogere concentraties pesticiden, geneesmiddelen en PFAS." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Oppervlaktewater als drinkwaterbron
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland heeft twee grote rivieren als drinkwaterbron: de <strong>Maas</strong> en de <strong>Rijn</strong>.
          Beide stromen door dichtbevolkte en industrieel actieve gebieden in Europa voordat ze Nederland
          bereiken. Dat maakt oppervlaktewaterzuivering tot een technisch veeleisende opgave.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Waterbedrijf</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bron</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Regio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Evides</td>
                <td className="border border-gray-300 px-3 py-2">Maas</td>
                <td className="border border-gray-300 px-3 py-2">Rotterdam, Zeeland, West-Brabant</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">WML</td>
                <td className="border border-gray-300 px-3 py-2">Maas</td>
                <td className="border border-gray-300 px-3 py-2">Limburg</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PWN</td>
                <td className="border border-gray-300 px-3 py-2">Rijn/IJmeer + duinen</td>
                <td className="border border-gray-300 px-3 py-2">Noord-Holland</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Waternet</td>
                <td className="border border-gray-300 px-3 py-2">IJmeer/Rijn</td>
                <td className="border border-gray-300 px-3 py-2">Amsterdam en omgeving</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Dunea</td>
                <td className="border border-gray-300 px-3 py-2">Duinwater (Rijn-infiltratie)</td>
                <td className="border border-gray-300 px-3 py-2">Den Haag, Zuid-Holland</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Uitdagingen van oppervlaktewater
        </h2>
        <p className="text-gray-700 mb-4">
          Oppervlaktewater heeft een aanzienlijk complexere samenstelling dan grondwater. De voornaamste
          uitdagingen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Seizoensgebonden kwaliteitsvariaties:</strong> algenbloei in de zomer, hoge afvoer bij neerslag in de winter</li>
          <li><strong>Pesticiden:</strong> landbouwafvoer brengt herbiciden, insecticiden en fungiciden mee</li>
          <li><strong>Geneesmiddelenresten:</strong> rioolwaterzuivering verwijdert medicijnen onvolledig</li>
          <li><strong>PFAS:</strong> Rijn en Maas bevatten PFAS van industriele lozingen stroomopwaarts</li>
          <li><strong>Microplastics:</strong> groeiend aandachtspunt, moeilijk te verwijderen</li>
          <li><strong>Bacterien en virussen:</strong> hogere concentraties dan in grondwater</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Oppervlaktewaterzuivering stap voor stap
        </h2>
        <p className="text-gray-700 mb-4">
          De zuivering van oppervlaktewater vereist 8-10 stappen. Hier volgt een gedetailleerde beschrijving:
        </p>

        <div className="space-y-3 mb-8">
          {[
            { n: 1, title: 'Inname en zeving', desc: 'Rivinneming vangt grof materiaal (takken, vissen, algen) af via roosters en zeven. Alleen inname wanneer de waterkwaliteit voldoet aan minimale normen; bij calamiteiten (olieramp, giflozing) kan de inname tijdelijk worden gestopt.' },
            { n: 2, title: 'Coagulatie', desc: 'IJzersulfaat (FeSO4) of aluminiumsulfaat (Al2(SO4)3) wordt toegevoegd. Deze zouten reageren met de kleine negatief geladen deeltjes in het water en neutraliseren hun lading, waardoor de deeltjes aan elkaar gaan kleven.' },
            { n: 3, title: 'Flocculatie', desc: 'In een langzaam roerende bekken groeien de geklonterde deeltjes verder tot grotere vlokken. Dit duurt 20-30 minuten. De vlokken vangen daarbij ook bacterien en virussen in.' },
            { n: 4, title: 'Sedimentatie', desc: 'In een rustige bezinkbak zakken de vlokken naar de bodem (2-4 uur). Het sediment wordt als slib afgevoerd. Na bezinking is het water al aanzienlijk helderder.' },
            { n: 5, title: 'Snelfiltratie', desc: 'Een zandfilter vangt resterende vlokken, bacterien en zwevende deeltjes op. Filtercyclus duurt 8-24 uur; daarna terugspuiten met schoon water.' },
            { n: 6, title: 'Ozon-oxidatie', desc: 'Ozon (O3) wordt opgelost in het water. Het is een extreem krachtig oxidatiemiddel: het doodt virussen, cryptosporidium en giardia, en breekt organische verbindingen en geurstoffen af. Ozon lost snel op en laat geen schadelijke residuen achter.' },
            { n: 7, title: 'Biologisch actief koolfiltratie (BAC)', desc: 'Na ozon-oxidatie zijn organische verbindingen omgezet tot beter biologisch afbreekbare fragmenten. In de BAC-filter leven bacteriekolonies die deze fragmenten als voedsel gebruiken. Tegelijkertijd adsorbeert de actieve kool pesticiden en PFAS.' },
            { n: 8, title: 'UV-desinfectie', desc: 'Eventueel overgebleven virussen en protozoa worden met UV-straling onschadelijk gemaakt. UV is effectief als aanvulling na ozon.' },
            { n: 9, title: 'Membraanfiltratie (selectief)', desc: 'Sommige waterbedrijven (onder andere Waternet) passen ultrafiltratie toe: membranen met porieen van 0,02 micrometer houden bacterien, virussen en grotere moleculen tegen. Dit geeft een extra veiligheidsbarriere.' },
            { n: 10, title: 'Residuele desinfectie', desc: 'Chloor of chloramine in kleine concentratie voorkomt bacteriegroei tijdens transport in het distributienet. Dit is de laatste stap voor de afvoer naar uw kraan.' },
          ].map(({ n, title, desc }) => (
            <div key={n} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="bg-[#003F5C] text-white text-sm font-bold px-2.5 py-1 rounded-full shrink-0">{n}</span>
                <div>
                  <span className="font-semibold text-[#003F5C]">{title}: </span>
                  <span className="text-gray-700 text-sm">{desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Duinwaterzuivering: een bijzonder systeem
        </h2>
        <p className="text-gray-700 mb-4">
          Dunea (Den Haag) en PWN (Noord-Holland) gebruiken een uniek systeem: <strong>duinwaterinfiltatie</strong>.
          Rijnwater wordt via kanalen naar de duinen gepompt en infiltreert in de bodem. Na een verblijftijd
          van 1-3 maanden in de duinbodem wordt het water gewonnen via pompputten.
        </p>
        <p className="text-gray-700 mb-4">
          De duinbodem functioneert als een enorm langzaamzandfilter: bacterien, virussen, zwevende deeltjes
          en veel organische stoffen worden gefilterd tijdens de lange reistijd door het zand. Na winnen
          volgt een kortere nazuivering met actieve kool en residuele desinfectie.
        </p>
        <p className="text-gray-700 mb-6">
          Dit systeem geeft extra buffercapaciteit: bij een calamiteit in de Rijn kan de inname worden
          gestopt terwijl er nog weken tot maanden water in de duinen beschikbaar is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          PFAS in oppervlaktewater: investeringen van waterbedrijven
        </h2>
        <p className="text-gray-700 mb-4">
          De Rijn en Maas bevatten PFAS die meekomen vanuit industrie stroomopwaarts. Historische grote
          PFAS-lozers zijn onder andere 3M (Antwerpen) en Chemours (Dordrecht). Actuele meetwaarden in
          het Rijn- en Maaswater liggen boven de streefwaarden.
        </p>
        <p className="text-gray-700 mb-4">
          De respons van waterbedrijven:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>PWN investeert meer dan 60 miljoen euro in extra GAC-filtercapaciteit</li>
          <li>Waternet bouwt aanvullende PFAS-filterinstallaties voor Amsterdam</li>
          <li>Evides past de BAC-filter aan voor betere PFAS-adsorptie</li>
          <li>Monitoring wordt verdubbeld (frequentie + aantal gemeten PFAS-verbindingen)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor aanvullende bescherming thuis, bekijk onze pagina over{' '}
          <Link href="/waterkwaliteit/nederland" className="text-[#005F8A] underline">waterkwaliteit per regio</Link>{' '}
          en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose als thuisfilter</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over oppervlaktewaterzuivering</h2>
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
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
