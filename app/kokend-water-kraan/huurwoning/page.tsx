import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kokend water kraan in huurwoning: mag dat en hoe vraag je toestemming?',
  description:
    'Een kokend water kraan installeren in een huurwoning mag in de meeste gevallen, maar u hebt toestemming van de verhuurder nodig. Alles over rechten, regels.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/huurwoning' },
};

const faqItems = [
  {
    question: 'Mag ik een kokend water kraan installeren in een huurwoning?',
    answer:
      'In de meeste gevallen mag u een kokend water kraan installeren in een huurwoning, maar u hebt hiervoor toestemming van de verhuurder nodig. Op grond van artikel 7:215 van het Burgerlijk Wetboek heeft een huurder het recht om kleine aanpassingen aan de woning te doen die bij vertrek ongedaan gemaakt kunnen worden. Het boren van een gat in het aanrecht voor de kraan valt hier in principe onder, mits u het gat bij vertrek kunt afdichten. Een countertop model vereist helemaal geen toestemming.',
  },
  {
    question: 'Heb ik toestemming van de verhuurder nodig voor een kokend water kraan?',
    answer:
      'Ja, als u een gat in het aanrecht wilt boren of aanpassingen aan de waterleiding wilt maken, heeft u schriftelijke toestemming van de verhuurder nodig. Vraag dit aan via e-mail of brief met een duidelijke omschrijving van de aanpassing. De verhuurder heeft 8 weken om te reageren. Reageert de verhuurder niet binnen deze termijn? Dan wordt toestemming geacht te zijn gegeven. Een countertop kokend water kraan staat los van de keuken en vereist geen toestemming.',
  },
  {
    question: 'Wat als de verhuurder geen toestemming geeft?',
    answer:
      'Als de verhuurder weigert, kunt u bezwaar maken bij de Huurcommissie als het een sociale huurwoning betreft. Bij vrije sector huur heeft u minder verhaal, maar u kunt de verhuurder wijzen op artikel 7:215 BW en de eis dat een weigering op zwaarwegende gronden moet berusten. Als alternatief kunt u kiezen voor een countertop kokend water kraan die geen enkele installatie in de woning vereist en altijd is toegestaan.',
  },
  {
    question: 'Moet ik de kokend water kraan verwijderen als ik verhuist?',
    answer:
      'Ja, bij vertrek uit de huurwoning dient u de installatie ongedaan te maken. Dit betekent dat u de kokend water kraan verwijdert, de boiler onder het aanrecht verwijdert en het eventueel geboorde kraangat in het aanrecht afdicht of afsluiting met een blindplug plaatst. Bewaar de originele kraan zodat u die bij vertrek kunt terugplaatsen. Documenteer de situatie voor en na de installatie met foto\'s.',
  },
  {
    question: 'Kan ik een kokend water kraan installeren zonder gat in het aanrecht?',
    answer:
      'Ja, op twee manieren. Ten eerste via een countertop kokend water kraan: dit is een zelfstandig apparaat dat op het aanrecht staat, aansluit op de bestaande kraan via een adapter en op een stopcontact. Geen boringen, geen permanente aanpassingen. Ten tweede: sommige aanrechten hebben al een vooraf gebored dop-gat (blinde afsluiting) voor een extra kraan; hier hoeft u zelf niet in te boren.',
  },
  {
    question: 'Is een countertop kokend water kraan toegestaan in een huurwoning?',
    answer:
      'Ja, een countertop kokend water kraan is altijd toegestaan in een huurwoning. Het is een zelfstandig apparaat dat geen permanente wijzigingen aan de woning vereist, vergelijkbaar met een waterkoker of koffiezetapparaat. U sluit het aan op de bestaande mengkraan via een adapter en op een stopcontact. Geen toestemming nodig, geen boringen, geen loodgieterswerk.',
  },
  {
    question: 'Wie betaalt de installatie van een kokend water kraan in een huurwoning?',
    answer:
      'De kosten voor aanschaf en installatie van een kokend water kraan zijn voor de huurder. De verhuurder is niet verplicht bij te dragen, tenzij dit expliciet is afgesproken in het huurcontract of als aanvulling op een renovatieaanbod. Sommige verhuurders staan positief tegenover de installatie als waarde-toevoeging voor de woning en zijn bereid de kosten te delen; dit is echter uitzondering, niet de regel.',
  },
  {
    question: 'Welke rechten heb ik als huurder bij het aanpassen van de keuken?',
    answer:
      'Als huurder heeft u op grond van artikel 7:215 BW het recht kleine aanpassingen te doen die bij vertrek ongedaan gemaakt kunnen worden en die het wooncomfort verbeteren. Denk aan het plaatsen van een extra kraan, het installeren van een boiler of het aanbrengen van extra opbergruimte. Grote aanpassingen (structurele wijzigingen, verwijderen van muren, vervanging van sanitair) vereisen altijd toestemming. Een kokend water kraan valt in de categorie kleine aanpassing.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Kokend water kraan in huurwoning: mag dat en hoe vraag je toestemming?',
  description:
    'Een kokend water kraan installeren in een huurwoning mag in de meeste gevallen, maar u hebt toestemming van de verhuurder nodig. Alles over rechten, regels.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/huurwoning',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function HuurwoningPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Kokend water kraan',
                item: 'https://waterfilterplatform.nl/kokend-water-kraan',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Kokend water kraan huurwoning',
                item: 'https://waterfilterplatform.nl/kokend-water-kraan/huurwoning',
              },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link> &rsaquo;{' '}
          <span>Kokend water kraan huurwoning</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan in huurwoning: mag dat en hoe vraag je toestemming?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een kokend water kraan mag in de meeste huurwoningen, maar u heeft de toestemming van de
            verhuurder nodig voor een gat in het aanrecht. Alles over uw rechten als huurder,
            de aanvraagprocedure en alternatieven zonder installatie.
          </p>
        </section>

        <QuickAnswer answer="Een kokend water kraan installeren in een huurwoning mag op grond van artikel 7:215 BW als kleine aanpassing. U heeft schriftelijke toestemming nodig als u een kraangat boort. Een countertop model vereist helemaal geen toestemming. Verhuurder reageert niet binnen 8 weken? Toestemming is dan geacht gegeven." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wettelijk kader: uw rechten als huurder
        </h2>
        <p className="text-gray-700 mb-4">
          Als huurder heeft u wettelijk het recht om kleine aanpassingen aan uw woning te doen.
          Artikel 7:215 van het Burgerlijk Wetboek bepaalt dat een huurder veranderingen en toevoegingen
          aan het gehuurde mag aanbrengen, mits:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>de aanpassing bij vertrek ongedaan gemaakt kan worden, of</li>
          <li>de verhuurder toestemming heeft gegeven voor een permanente aanpassing.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          De verhuurder mag een verzoek voor een kleine aanpassing alleen weigeren als er zwaarwegende
          redenen zijn. Denk aan aanpassingen die de technische staat van de woning schaden of die
          moeilijk ongedaan te maken zijn.
        </p>
        <p className="text-gray-700 mb-6">
          Een kokend water kraan met een boiler onder het aanrecht valt in vrijwel alle gevallen
          onder de categorie &apos;kleine aanpassing&apos; omdat het systeem verwijderbaar is en
          het eventuele kraangat in het aanrecht afgedicht kan worden bij vertrek.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat telt als kleine aanpassing?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor een kokend water kraan zijn de volgende aanpassingen relevant:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Extra kraan of boiler:</strong> het plaatsen van een extra kraan of een
            warmwaterboiler onder het aanrecht telt als kleine aanpassing. Ongedaan te maken
            door verwijdering.
          </li>
          <li>
            <strong>Gat in het aanrecht:</strong> het boren van een kraangat is niet volledig
            reversibel (het gat blijft), maar kan worden afgedicht met een blindplug. Verhuurders
            kunnen dit weigeren als het aanrecht nieuw of van hoogwaardige kwaliteit is.
          </li>
          <li>
            <strong>Aftakking aan waterleiding:</strong> het monteren van een T-koppeling op de
            koudwatertoevoer is verwijderbaar en telt als kleine aanpassing.
          </li>
          <li>
            <strong>Elektrische aansluiting:</strong> een geaard stopcontact is nodig voor het
            verwarmingselement. Als dit ontbreekt, is een elektricien nodig; verhuurders kunnen
            over dit punt moeilijker doen.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Toestemming aanvragen: zo werkt het
        </h2>
        <p className="text-gray-700 mb-4">
          Volg deze stappen voor een goede toestemmingsaanvraag:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Schriftelijk verzoek (e-mail volstaat):</strong> stuur uw verzoek per e-mail
            of per brief zodat u een bewijs heeft. Mondeling vragen is rechtsgeldig noch praktisch.
          </li>
          <li>
            <strong>Beschrijf de aanpassing concreet:</strong> noem wat u wilt installeren
            (merk en type helpt), of er een gat in het aanrecht nodig is, of er een boiler
            onder het aanrecht wordt geplaatst en of er een elektra-aanpassing nodig is.
          </li>
          <li>
            <strong>Bevestig reversibiliteit:</strong> vermeld expliciet dat u de kokend water
            kraan bij vertrek verwijdert, het eventuele kraangat afdicht met een blindplug en de
            originele kraan terugplaatst.
          </li>
          <li>
            <strong>Wacht op reactie:</strong> de verhuurder heeft 8 weken om te reageren.
            Reageert de verhuurder niet? Op grond van artikel 7:215 lid 3 BW wordt toestemming
            dan geacht te zijn gegeven. Bewaar uw oorspronkelijk verzoek met datum als bewijs.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Countertop kokend water kraan: altijd toegestaan
        </h2>
        <p className="text-gray-700 mb-4">
          De eenvoudigste oplossing voor huurders is een countertop (tafelmodel) kokend water kraan.
          Dit is een zelfstandig apparaat dat vergelijkbaar is met een waterkoker: het staat op het
          aanrecht, sluit aan op de bestaande mengkraan via een eenvoudige adapter en heeft alleen
          een stopcontact nodig.
        </p>
        <p className="text-gray-700 mb-4">
          Een countertop model vereist:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Geen gat in het aanrecht</li>
          <li>Geen aanpassingen aan de waterleiding</li>
          <li>Geen toestemming van de verhuurder</li>
          <li>Geen installateur</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het nadeel is dat een countertop model zichtbaar op het aanrecht staat en iets minder
          elegant oogt dan een ingebouwde oplossing. De prestaties zijn echter vergelijkbaar.
          Bekijk ons overzicht van{' '}
          <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">
            kokend water kranen vergelijken
          </Link>{' '}
          voor een overzicht van countertop en onderbouw modellen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Argumenten voor de verhuurder
        </h2>
        <p className="text-gray-700 mb-4">
          Als uw verhuurder twijfelt, kunt u de volgende argumenten meegeven:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Veilig en CE-gekeurd:</strong> kwalitatieve kokend water kranen van merken
            als Quooker, GROHE en PureAqua zijn CE-gekeurd en voldoen aan Europese
            veiligheidsnormen.
          </li>
          <li>
            <strong>Geen structuurwijziging:</strong> de aanpassing raakt niet aan dragende
            muren, leidingwerk of elektra-groepen.
          </li>
          <li>
            <strong>Waarde-toevoeging:</strong> een kokend water kraan verhoogt de wooncomfort
            en aantrekkelijkheid van de keuken voor toekomstige huurders.
          </li>
          <li>
            <strong>Volledig reversibel:</strong> bij vertrek plaatst u de originele kraan
            terug en stopt u het kraangat af.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bij weigering door de verhuurder
        </h2>
        <p className="text-gray-700 mb-4">
          Als de verhuurder weigert en u het hier niet mee eens bent:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Sociale huur:</strong> u kunt een klacht indienen bij de Huurcommissie.
            De Huurcommissie kan de verhuurder verplichten toestemming te geven als de weigering
            onredelijk is.
          </li>
          <li>
            <strong>Vrije sector:</strong> bij vrije sector huur heeft u minder juridisch verhaal.
            Wijs de verhuurder schriftelijk op artikel 7:215 BW en vraag om een schriftelijke
            motivering van de weigering.
          </li>
          <li>
            <strong>Praktische oplossing:</strong> kies voor een countertop model dat geen
            toestemming vereist.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie tips voor huurwoning
        </h2>
        <p className="text-gray-700 mb-4">
          Als u toestemming heeft ontvangen, volg dan deze aanbevelingen om problemen bij vertrek
          te voorkomen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Documenteer voor en na:</strong> maak foto&apos;s van de keuken voor aanvang
            van de werkzaamheden en na afronding.
          </li>
          <li>
            <strong>Bewaar de originele kraan</strong> op een veilige plek zodat u die bij vertrek
            kunt terugplaatsen.
          </li>
          <li>
            <strong>Laat een installateur een factuur maken</strong> met een duidelijke omschrijving
            van de werkzaamheden. Dit is bewijs dat de installatie professioneel is uitgevoerd.
          </li>
          <li>
            <strong>Koop een blindplug</strong> voor het kraangat zodat u dit bij vertrek netjes
            kunt afsluiten.
          </li>
        </ul>

        <p className="text-gray-700 mb-6">
          Voor meer informatie over kokend water kranen, zie onze pagina{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">
            kokend water kraan overzicht
          </Link>{' '}
          en{' '}
          <Link href="/kokend-water-kraan/onderhoud" className="text-[#005F8A] underline">
            onderhoud kokend water kraan
          </Link>
          .
        </p>

        <CTABanner context="osmose" />

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over kokend water kraan in huurwoning
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003F5C] cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keuzehulp/huurwoning" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter in huurwoning</h3>
              <p className="text-sm text-gray-600">Welke waterfilters u als huurder mag plaatsen zonder toestemming en welke installaties toestemming van de verhuurder vereisen.</p>
            </Link>
            <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Installatietypes waterfilter vergelijken</h3>
              <p className="text-sm text-gray-600">Onderbouw, aanrecht of inline: welk installattype past bij een huurwoning zonder ingrijpende verbouwing.</p>
            </Link>
          </div>
        </section>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">
            kokend water kraan overzicht
          </Link>
          ,{' '}
          <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">
            kranen vergelijken
          </Link>{' '}
          en{' '}
          <Link href="/kokend-water-kraan/onderhoud" className="text-[#005F8A] underline">
            onderhoud en kosten
          </Link>
          .
        </p>
      </main>
    </>
  );
}
