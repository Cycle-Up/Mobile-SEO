import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Quooker alternatief: kokend water kranen vergeleken met Quooker',
  description: 'Quooker is de bekendste kokend water kraan maar kost 1.500-3.200 euro. Vergelijking van Quooker alternatieven: PureAqua, Grohe Red, Zip HydroTap en InSinkErator op prijs en functies.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/quooker' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Quooker de beste kokend water kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quooker is de marktleider in Nederland met uitstekende kwaliteit, fraai design en een sterk servicenetwerk. Voor wie prioriteit legt bij merkprestige, design en een bewezen product is Quooker de beste keuze. Voor wie filterkwaliteit (PFAS-verwijdering via osmose) of lagere kosten prioriteit geeft, zijn alternatieven als PureAqua of Grohe Red het overwegen waard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het goedkoopste alternatief voor een Quooker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De InSinkErator HC3300 is het meest betaalbare alternatief: aanschaf 500 tot 900 euro inclusief installatie. De Grohe Red Duo is het tweede goedkoopste alternatief: 700 tot 1.200 euro. Beide bieden kokend water via een aparte kraan, maar missen bruisend water en geavanceerde filtratie. Beschikbaarheid in Nederland is voor InSinkErator beperkt; Grohe is breed verkrijgbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen Quooker en PureAqua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quooker is de premiumkeuze met sterker merk, hoger prijskaartje en koolstoffiltratie. PureAqua heeft ingebouwde omgekeerde osmose (RO) waardoor ook PFAS, lood en nitraat worden verwijderd. PureAqua is 300 tot 700 euro goedkoper dan vergelijkbare Quooker CUBE-configuraties. Voor veiligheidsbewuste kopers in PFAS-gebieden of huizen met oudere leidingen biedt PureAqua betere filterbescherming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Filtert een Quooker ook PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. De Quooker CUBE gebruikt een koolstoffilter die chloor en sommige organische stoffen verwijdert, maar geen PFAS, nitraat of lood. Voor PFAS-verwijdering heeft u een osmosefilter nodig. Als u in een PFAS-zone woont en ook kokend water wilt, is PureAqua (met ingebouwde RO) of een aparte osmosefilter onder het aanrecht naast de Quooker de juiste aanpak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke kokend water kraan heeft de beste filterkwaliteit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PureAqua 4-in-1 heeft de beste filterkwaliteit door de ingebouwde RO-osmosefilter: verwijdert PFAS, lood, nitraat, medicijnresten en vrijwel alle opgeloste stoffen. Zip HydroTap combineert koolstoffilter met UV-desinfectie voor microbiologische veiligheid. Quooker CUBE en Grohe Red gebruiken koolstoffilters die voornamelijk smaak en chloor verbeteren maar geen PFAS of zware metalen verwijderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Grohe Red een goed alternatief voor Quooker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, de Grohe Red Duo is een solide Quooker-alternatief voor 700 tot 1.200 euro. Het biedt kokend water via een aparte kraan, werkt samen met een bestaande mengkraan, en heeft een koolstoffilter voor smaakveredeling. Grohe Red mist bruisend water (geen koolzuur) en osmosefiltratie. Het merk is breed verkrijgbaar in Nederland bij keukenzaken en installateurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een Quooker mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een Quooker gaat gemiddeld 10 tot 15 jaar mee bij normaal gebruik. Quooker geeft 2 jaar garantie standaard, uitbreidbaar naar langer via servicecontract. Het CUBE-filterpatroon moet elk jaar worden vervangen (circa 50 tot 80 euro per jaar). De boiler kan op kosten van 200 tot 400 euro worden gereviseerd in plaats van vervangen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een Quooker zelf installeren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technisch is het mogelijk als u enige ervaring heeft met loodgieterswerk, maar Quooker raadt installatie aan door een gecertificeerde Quooker-dealer. Zelfinstallatie kan de garantie beinvloeden. De installatie vereist aansluiting op koud water en elektra (220V). Installatiekosten via dealer bedragen doorgaans 200 tot 400 euro. Alternatieven zoals Grohe Red zijn technisch eenvoudiger zelf te installeren.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Quooker alternatief: kokend water kranen vergeleken met Quooker',
  description: 'Quooker is de bekendste kokend water kraan maar kost 1.500-3.200 euro. Vergelijking van Quooker alternatieven: PureAqua, Grohe Red, Zip HydroTap en InSinkErator op prijs en functies.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/quooker',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function QuookerVergelijkingPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Quooker vergelijking', item: 'https://waterfilterplatform.nl/kokend-water-kraan/quooker' },
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
          <span>Quooker vergelijking</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Quooker alternatief: kokend water kranen vergeleken met Quooker
          </h1>
          <p className="text-gray-700 text-lg">
            Quooker is het bekendste merk op de Nederlandse markt, maar kost &euro;1.500 tot &euro;3.200.
            Welke alternatieven bieden vergelijkbare of betere prestaties voor een lagere prijs?
          </p>
        </div>

        <QuickAnswer answer="Quooker is marktleider in Nederland met premium design maar hoge prijs. PureAqua biedt ingebouwde osmosefiltratie (incl. PFAS) voor 300-700 euro minder. Grohe Red Duo is het goedkoopste volwaardige alternatief vanaf 700 euro. Quooker CUBE-koolstoffilter verwijdert geen PFAS of nitraat." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Quooker als merk: uitvinder en marktleider
        </h2>
        <p className="text-gray-700 mb-4">
          Quooker is een Nederlands bedrijf, opgericht in Rotterdam in 1970 door Henri Peteri. Quooker vond het concept van de kokend-waterkraan voor huishoudelijk gebruik uit en is tot op heden marktleider in Nederland. Het merk staat bekend om premium design, hoge kwaliteit en een uitgebreid dealernetwerk voor installatie en service.
        </p>
        <p className="text-gray-700 mb-6">
          De hoge prijs reflecteert merkwaarde, design en kwaliteit. Voor wie deze factoren prioriteit geeft, is Quooker een verdedigbare keuze. Voor wie filterkwaliteit, lagere kosten of specifieke functies prioriteit geeft, zijn er serieuze alternatieven.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Quooker modellenoverzicht
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Model</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Functies</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bijzonder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Quooker Flex</td>
                <td className="border border-gray-300 px-3 py-2">Kokend + koud + warm</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.100&ndash;1.600</td>
                <td className="border border-gray-300 px-3 py-2">Basismodel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Quooker Fusion</td>
                <td className="border border-gray-300 px-3 py-2">Kokend + mengkraan in 1</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.500&ndash;2.000</td>
                <td className="border border-gray-300 px-3 py-2">Alles-in-1 design</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Quooker CUBE</td>
                <td className="border border-gray-300 px-3 py-2">Kokend + koud gefilterd + bruisend</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.800&ndash;3.200</td>
                <td className="border border-gray-300 px-3 py-2">Meest compleet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Alternatieven vergeleken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Merk/Model</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Functies</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">In NL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Quooker CUBE</td>
                <td className="border border-gray-300 px-3 py-2">Kokend + koud + bruisend + gefilterd</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.800&ndash;3.200</td>
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">PureAqua 4-in-1</td>
                <td className="border border-gray-300 px-3 py-2">Kokend + koud + osmose + bruisend</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800&ndash;1.500</td>
                <td className="border border-gray-300 px-3 py-2">RO-osmose</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Grohe Red Duo</td>
                <td className="border border-gray-300 px-3 py-2">Kokend + warm/koud</td>
                <td className="border border-gray-300 px-3 py-2">&euro;700&ndash;1.200</td>
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Zip HydroTap Arc</td>
                <td className="border border-gray-300 px-3 py-2">Kokend + koud + bruisend</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1.800&ndash;2.800</td>
                <td className="border border-gray-300 px-3 py-2">Koolstof + UV</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">InSinkErator HC3300</td>
                <td className="border border-gray-300 px-3 py-2">Kokend + koud (apart van mengkraan)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;900</td>
                <td className="border border-gray-300 px-3 py-2">Koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Quooker vs. PureAqua: filterkwaliteit als onderscheider
        </h2>
        <p className="text-gray-700 mb-4">
          Quooker scoort op design, merkwaarde en premium kwaliteitsgevoel. De CUBE-versie biedt gefilterd koud en bruisend water via een koolstoffilter die chloor, smaak en sommige organische stoffen aanpakt.
        </p>
        <p className="text-gray-700 mb-4">
          PureAqua heeft ingebouwde omgekeerde osmose. Dit betekent dat ook PFAS (voor- en eeuwigdurende chemicalien), lood, nitraat en medicijnresten worden verwijderd. Voor bewoners in PFAS-belaste gebieden of huizen gebouwd voor 1960 (mogelijke loodleidingen) is dit een wezenlijk verschil.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-amber-800 font-semibold text-sm">Belangrijk: Quooker CUBE filtert geen PFAS</p>
          <p className="text-amber-700 text-sm mt-1">
            De koolstoffilter in de Quooker CUBE verwijdert geen PFAS, nitraat of zware metalen. In PFAS-risicogebieden (Dordrecht, Papendrecht, Westerschelde-omgeving) is de Quooker CUBE als enige waterfilteroplossing onvoldoende.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie en garantie
        </h2>
        <p className="text-gray-700 mb-4">
          Quooker raadt installatie aan via een gecertificeerde Quooker-dealer. Dit levert kwaliteitsborging maar ook een meerprijs van 200 tot 400 euro. De garantie bedraagt standaard 2 jaar, uitbreidbaar via servicecontract.
        </p>
        <p className="text-gray-700 mb-6">
          Grohe Red en PureAqua zijn vaker via reguliere keukenzaken of online verkrijgbaar en kennen een iets toegankelijkere installatieweg. Ook PureAqua biedt 2 jaar garantie. Zip HydroTap wordt voornamelijk via gespecialiseerde dealers verkocht en is prijstechnisch vergelijkbaar met Quooker CUBE.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over Quooker en alternatieven</h2>
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
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan overzicht</Link>,{' '}
          <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">alle merken vergelijken</Link>,{' '}
          <Link href="/kokend-water-kraan/installeren" className="text-[#005F8A] underline">installatie handleiding</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
