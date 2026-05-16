import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kraanwater kwaliteit verbeteren: 7 bewezen methoden',
  description: 'Kraanwater kwaliteit verbeteren: van simpel (koolstoffilter, filterkan) tot uitgebreid (osmose, waterontharder). Welke methode past bij uw probleem en budget?',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/kwaliteit-verbeteren' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe kan ik de kwaliteit van mijn kraanwater verbeteren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Begin met uw waterkwaliteitsrapport: controleer via uw drinkwaterbedrijf de gemeten waarden voor uw adres. Identificeer het probleem (chloor-smaak, hard water, lood, PFAS) en kies de bijpassende oplossing. Voor smaak en chloor is een filterkan of kraanfilter voldoende. Voor PFAS, lood of nitraat is een osmosefilter noodzakelijk. Voor kalkaanslag is een waterontharder de beste oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterfilter verbetert de smaak van kraanwater het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor smaakveredeling is een actief koolfilter het meest effectief. Dit kan een filterkan zijn (Brita, Aquaphor), een kraanmontage filter (TAPP Water, Brita On-Tap) of een actief koolfilter onder het aanrecht. Actief kool adsorbeert chloor, chloorkoolwaterstoffen en andere verbindingen die verantwoordelijk zijn voor smaak en geur. Osmose verwijdert nog meer stoffen maar is duurder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik een osmosefilter om kraanwater te verbeteren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet per se. Osmose is alleen noodzakelijk bij specifieke ernstige verontreinigingen: PFAS-hotspot in uw gemeente, loodleidingen in uw huis (gebouwd voor 1960), hoge nitraatgehalten (landbouwgebied), medicijnresten. Voor smaak, chloor of zachter water volstaan eenvoudigere oplossingen. Controleer uw waterkwaliteitsrapport voordat u investeert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik welk probleem mijn kraanwater heeft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stap 1: Raadpleeg het gratis jaarlijkse waterkwaliteitsrapport van uw drinkwaterbedrijf via hun website. Stap 2: Observeer de symptomen: chloor-geur, kalkwitte aanslag, oranje of zwarte vlekken, afwijkende smaak. Stap 3: Controleer het bouwjaar van uw woning voor mogelijke loodleidingen (voor 1960). Stap 4: Check of uw gemeente in een PFAS-risicogebied ligt via de RIVM PFAS-kaart.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is kraanwater verbeteren duurder dan flessenwater kopen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, op jaarbasis altijd goedkoper. Bij 2 liter per dag kost flessenwater 300-600 euro per jaar. Een filterkan kost 50-100 euro per jaar inclusief cartridges. Een kraanfilter kost 60-120 euro per jaar. Een osmosefilter kost na terugverdientijd slechts 40-60 euro per jaar aan filters. Zelfs het duurste filtersysteem van 800 euro verdient zich in 2-3 jaar terug tegenover flessenwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt een filterkan echt voor beter kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, voor smaak en chloor is een filterkan effectief. Een kwaliteitsfilterkan (Brita Maxtra+, Aquaphor) verwijdert 90%+ van chloor, vermindert kalk deels en verbetert de smaak merkbaar. Een filterkan verwijdert geen PFAS, nitraat of zware metalen bij hoge concentraties. Voor de meeste Nederlandse huishoudens met normaal leidingwater is een filterkan een prima oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke gratis methode verbetert de smaak van kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chloor in kraanwater verdampt vanzelf: vul een karaf met water en laat hem 30 minuten tot een uur onafgedekt staan bij kamertemperatuur. De chloor-geur en een deel van de chloor-smaak verdwijnt. Dit werkt voor chloor maar niet voor lood, PFAS, nitraat of andere verontreinigingen. Gekoeld bewaren in de koelkast helpt ook: kou dempt smaakperceptie van chloor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de goedkoopste manier om leidingwater te filteren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De goedkoopste filteroplossing is een filterkan van 15-30 euro aanschaf met cartridges van 5-8 euro per stuk (1 per 4-6 weken bij 1 persoon). Totale jaarkosten: circa 50-80 euro. Goedkoper is alleen "water laten staan" (gratis, werkt alleen voor chloor). Als u ook PFAS of lood wilt aanpakken, zijn de totale kosten van een osmosefilter na terugverdientijd vergelijkbaar met een filterkan.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Kraanwater kwaliteit verbeteren: 7 bewezen methoden',
  description: 'Kraanwater kwaliteit verbeteren: van simpel (koolstoffilter, filterkan) tot uitgebreid (osmose, waterontharder). Welke methode past bij uw probleem en budget?',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kraanwater/kwaliteit-verbeteren',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KraanwaterKwaliteitVerbeteren() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kraanwater', item: 'https://waterfilterplatform.nl/kraanwater' },
              { '@type': 'ListItem', position: 3, name: 'Kraanwater kwaliteit verbeteren', item: 'https://waterfilterplatform.nl/kraanwater/kwaliteit-verbeteren' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kraanwater" className="hover:underline">Kraanwater</Link> &rsaquo;{' '}
          <span>Kraanwater kwaliteit verbeteren</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Kraanwater kwaliteit verbeteren: 7 bewezen methoden
          </h1>
          <p className="text-gray-700 text-lg">
            Niet elke verbetering van kraanwater vereist een duur osmosefilter. De juiste aanpak
            hangt af van uw specifieke probleem. Lees eerst uw waterkwaliteitsrapport, dan kiest u
            de meest kosteneffectieve oplossing.
          </p>
        </div>

        <QuickAnswer answer="Kraanwater kwaliteit verbeteren start met diagnose: raadpleeg uw waterkwaliteitsrapport. Voor chloor-smaak volstaat een filterkan of kraanfilter (50-120 euro per jaar). Voor PFAS of lood is een osmosefilter noodzakelijk. Voor kalk is een waterontharder de oplossing. Gratis: water 30 minuten laten staan verwijdert chloor." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 1: diagnose voor behandeling
        </h2>
        <p className="text-gray-700 mb-4">
          De meest gemaakte fout bij waterfiltratie is het kopen van een filter zonder te weten wat u precies wilt verwijderen. Elk filtertype is gespecialiseerd: een actief koolfilter is uitstekend voor chloor maar waardeloos voor nitraat. Een waterontharder pakt kalk aan maar doet niets voor PFAS.
        </p>
        <p className="text-gray-700 mb-6">
          Begin altijd met twee stappen: (1) raadpleeg het gratis jaarlijkse waterkwaliteitsrapport van uw drinkwaterbedrijf, en (2) observeer de symptomen in uw eigen huis. Samen geven deze twee bronnen al 80 procent van de informatie die u nodig heeft.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Probleem-oplossing matrix
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Probleem</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Diagnose</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Oplossing</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloor-smaak/-geur</td>
                <td className="border border-gray-300 px-3 py-2">Waterbedrijf desinfectie</td>
                <td className="border border-gray-300 px-3 py-2">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Kalkaanslag (hard water)</td>
                <td className="border border-gray-300 px-3 py-2">Hard water (&gt;14 &deg;dH)</td>
                <td className="border border-gray-300 px-3 py-2">Waterontharder of osmose</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;2.500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Lood (oud huis)</td>
                <td className="border border-gray-300 px-3 py-2">Loodleiding, huis voor 1960</td>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter verplicht</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">PFAS-verontreiniging</td>
                <td className="border border-gray-300 px-3 py-2">PFAS-hotspot gemeente</td>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Bruine kleur</td>
                <td className="border border-gray-300 px-3 py-2">IJzer/mangaan in water</td>
                <td className="border border-gray-300 px-3 py-2">Oxidatiefilter + sediment</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200&ndash;600</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nitraat (landbouwgebied)</td>
                <td className="border border-gray-300 px-3 py-2">Grondwater, landbouwregio</td>
                <td className="border border-gray-300 px-3 py-2">Osmose of ionenwisselaar</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Medicijnresten</td>
                <td className="border border-gray-300 px-3 py-2">Oppervlaktewater als bron</td>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Smaak algemeen</td>
                <td className="border border-gray-300 px-3 py-2">Chloor of mineraalbalans</td>
                <td className="border border-gray-300 px-3 py-2">Filterkan of koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15&ndash;200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De 7 methoden op een rij
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Water laten staan (gratis)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Gratis</span>
            </div>
            <p className="text-gray-700 text-sm">
              Chloor is een vluchtige verbinding die bij kamertemperatuur verdampt. Vul een karaf met kraanwater en laat hem 30 tot 60 minuten onafgedekt staan. De chloor-geur en het overgrote deel van de chloor-smaak verdwijnt. Werkt uitsluitend voor chloor, niet voor andere verontreinigingen. Koel water bewaren in de koelkast maskeert ook chloor-smaak.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Filterkan</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">&euro;15&ndash;60</span>
            </div>
            <p className="text-gray-700 text-sm">
              Een filterkan met actief koolstofcartridge verwijdert chloor, verbetert smaak en geur, en vermindert lood deels. Jaarkosten circa 50 tot 80 euro. Ideaal voor studenten, huurwoningen en iedereen die geen installatie wil. Filterkan verwijdert geen PFAS of nitraat.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Kraanmontage filter</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">&euro;40&ndash;80</span>
            </div>
            <p className="text-gray-700 text-sm">
              Schroeft op de bestaande kraan, geen installatie nodig, filtert chloor, lood en microplastics voor meer dan 95 procent. Populaire merken: TAPP Water EcoPro, Brita On-Tap. Ideaal voor huurwoningen. Cartridge vervangen elke 2 tot 3 maanden.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Actief koolfilter onder aanrecht</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">&euro;100&ndash;300</span>
            </div>
            <p className="text-gray-700 text-sm">
              Vaste installatie onder het aanrecht met aparte kraan of aansluiting op bestaande kraan. Filtert chloor, microplastics en sommige organische stoffen. Cartridges gaan 6 tot 12 maanden mee. Betere doorstroom dan een filterkan. Vereist lichte wateraansluiting.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">5</span>
              <h3 className="font-semibold text-[#003F5C]">Waterontharder</h3>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">&euro;800&ndash;2.500</span>
            </div>
            <p className="text-gray-700 text-sm">
              Specifiek voor hard water en kalkaanslag. Ionenwisselaar vervangt calcium en magnesium door natrium. Beschermt uw boiler, wasmachine en leidingen. Vereist professionele installatie en regelmatige zoutnabestelling. Aanbevolen bij hardheid boven 14 &deg;dH.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">6</span>
              <h3 className="font-semibold text-[#003F5C]">Osmosefilter</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste brede bescherming</span>
            </div>
            <p className="text-gray-700 text-sm">
              Verwijdert vrijwel alle opgeloste stoffen: PFAS, lood, nitraat, medicijnresten, zware metalen en bacterien. Aanschaf 300 tot 800 euro, jaarkosten 40 tot 60 euro. Verplichte keuze bij PFAS-hotspot, loodleidingen of hoog nitraat. Vereist kleine installatie onder aanrecht.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">7</span>
              <h3 className="font-semibold text-[#003F5C]">UV-purifier</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">&euro;200&ndash;400</span>
            </div>
            <p className="text-gray-700 text-sm">
              Doodt bacterien, virussen en protozoa effectief via UV-C-straling. Relevant bij bronwater, regenwater of putwater. Bij normaal Nederlands leidingwater niet noodzakelijk (al gedesinfecteerd door waterbedrijf). Verwijdert geen chemische stoffen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap 2: uw waterkwaliteitsrapport lezen
        </h2>
        <p className="text-gray-700 mb-4">
          Elk drinkwaterbedrijf publiceert jaarlijks een gedetailleerd waterkwaliteitsrapport. Dit rapport bevat gemeten concentraties voor tientallen parameters, inclusief chloor, hardheid, nitraat, lood, PFAS en microbiologische parameters. Het rapport is gratis beschikbaar via de website van uw waterbedrijf op uw postcode of adres.
        </p>
        <p className="text-gray-700 mb-6">
          Kijk specifiek naar: totale hardheid (calciumcarbonaat of &deg;dH), nitraat, lood (bij oudere huizen), en of uw gemeente een PFAS-melding heeft ontvangen. Met deze informatie kunt u gericht de juiste filterkeuze maken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer heeft u geen filter nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Nederlands leidingwater is een van de veiligste ter wereld en voldoet aan strenge EU-normen. Als uw gemeente niet in een PFAS-hotspot ligt, uw huis na 1960 is gebouwd en u geen afwijkende smaak of kleur opmerkt, is een filter geen noodzaak voor uw gezondheid.
        </p>
        <p className="text-gray-700 mb-6">
          Smaakverbetering is een andere motivatie: veel Nederlanders vinden gefilterd water prettiger van smaak. Een eenvoudige filterkan of kraanfilter volstaat dan volledig. Prioriteit voor osmose heeft u uitsluitend als uw waterkwaliteitsrapport of woonsituatie daartoe aanleiding geeft.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten vergelijking: filter vs. flessenwater
        </h2>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="text-gray-700 space-y-2 text-sm">
            <li className="flex justify-between border-b border-blue-200 pb-1"><span>Flessenwater (2 L/dag)</span><span className="font-semibold text-red-600">&euro;300&ndash;600/jaar</span></li>
            <li className="flex justify-between border-b border-blue-200 pb-1"><span>Filterkan (incl. cartridges)</span><span className="font-semibold text-green-700">&euro;50&ndash;100/jaar</span></li>
            <li className="flex justify-between border-b border-blue-200 pb-1"><span>Kraanmontage filter</span><span className="font-semibold text-green-700">&euro;60&ndash;120/jaar</span></li>
            <li className="flex justify-between border-b border-blue-200 pb-1"><span>Actief koolfilter onder aanrecht</span><span className="font-semibold text-green-700">&euro;50&ndash;80/jaar</span></li>
            <li className="flex justify-between"><span>Osmosefilter (na aanschaf)</span><span className="font-semibold text-green-700">&euro;40&ndash;60/jaar</span></li>
          </ul>
        </div>
        <p className="text-gray-700 mb-6">
          Elk filtersysteem is op jaarbasis goedkoper dan flessenwater. Een osmosefilter van 600 euro verdient zichzelf in 1 tot 2 jaar terug ten opzichte van flessenwater. Over 10 jaar bespaart u 2.500 tot 5.000 euro door over te stappen op gefilterd kraanwater.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over kraanwater verbeteren</h2>
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilter types</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterkwaliteit" className="text-[#005F8A] underline">waterkwaliteit informatie</Link> en{' '}
          <Link href="/kraanwater" className="text-[#005F8A] underline">kraanwater overzicht</Link>.
        </p>
      </main>
    </>
  );
}
