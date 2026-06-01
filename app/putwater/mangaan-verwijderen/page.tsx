import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Mangaan verwijderen uit putwater: mangaanfilter, KMnO4, kosten',
  description:
    'Mangaan (Mn2+) uit putwater: zwarte aanslag, EU-norm 50 microgram/L, mangaanfilter met KMnO4-regeneratie en combinatiefilter Fe/Mn vergeleken.',
  alternates: { canonical: 'https://waterfilterplatform.nl/putwater/mangaan-verwijderen' },
};

const faqItems = [
  {
    q: 'Hoe herken ik mangaan in mijn putwater?',
    a: 'Mangaan veroorzaakt zwarte of donkerbruine aanslag in toiletpotten, op kranen, in waterkokers en op wasgoed. In tegenstelling tot ijzer (dat roestbruin is) heeft mangaanaanslag een typische zwart-grijze kleur. Het water kan een bittere, metaalachtige smaak hebben en in extreme gevallen zwart verkleuren na blootstelling aan lucht of chloor. Boven de EU-norm van 50 microgram per liter (0,05 mg/L) treden deze problemen zichtbaar op.',
  },
  {
    q: 'Wat is de EU-norm voor mangaan in drinkwater?',
    a: 'De EU-drinkwaterrichtlijn 2020/2184 en het Drinkwaterbesluit hanteren 50 microgram per liter (0,05 mg/L) als indicatieve grenswaarde voor mangaan. Dit is vier keer strenger dan de ijzernorm. De WHO heeft eveneens een gezondheidskundige richtwaarde van 80 microgram per liter vastgesteld vanwege mogelijke neurologische effecten bij langdurige hoge blootstelling, vooral bij baby\'s en jonge kinderen.',
  },
  {
    q: 'Hoe werkt een mangaanfilter?',
    a: 'Een mangaanfilter werkt in twee stappen: oxidatie van opgelost mangaan (Mn2+) tot onoplosbaar mangaandioxide (MnO2), en filtratie van het neerslag in een mediafilter. De oxidatie gebeurt via beluchting (langzaam) of via een chemische oxidator (kaliumpermanganaat, KMnO4). De filtermedia (Greensand, pyrolusiet, Birm of MTM) vangen het neerslag op en spoelen periodiek terug. Mangaan oxideert lastiger dan ijzer en vereist hogere pH (boven 8) of een katalytisch medium.',
  },
  {
    q: 'Wat is KMnO4-regeneratie?',
    a: 'Greensand-filters worden geregenereerd met een verdunde oplossing kaliumpermanganaat (KMnO4, paarse kleur). Tijdens regeneratie herstelt KMnO4 de oxidatiecapaciteit van het filtermedium door MnO2-laag te vormen op de korrels. Dit gebeurt automatisch via een doseerpomp of handmatig elke 1-4 weken, afhankelijk van het mangaangehalte en het waterverbruik. Een 25 kg-verpakking KMnO4 kost circa 60-80 euro en gaat 1-2 jaar mee bij gemiddeld huishoudelijk gebruik.',
  },
  {
    q: 'Kan ik ijzer en mangaan met een combinatiefilter verwijderen?',
    a: 'Ja. Een combinatiefilter Fe/Mn met Greensand, pyrolusiet of MTM-media verwijdert beide elementen in een enkele stap, omdat de oxidatieprocessen overeenkomen. Dit is praktisch en kostenefficient, want ijzer en mangaan komen vrijwel altijd samen voor in Nederlands putwater. Een combinatiesysteem inclusief beluchter, mediafilter en automatische backwash kost 800 tot 1800 euro inclusief installatie.',
  },
  {
    q: 'Is mangaan in putwater schadelijk voor de gezondheid?',
    a: 'Bij langdurige inname van hoge concentraties (boven 0,3 mg/L) kan mangaan neurologische effecten veroorzaken, vooral bij baby\'s en jonge kinderen wiens hersenontwikkeling nog plaatsvindt. Volwassenen verdragen mangaan beter omdat de darmwand de opname reguleert. De WHO en EFSA bevelen voor baby-flesvoeding water aan met minder dan 50 microgram per liter mangaan. In risicoregio\'s (Oost-Nederland, veengebieden) is filtratie sterk aanbevolen.',
  },
  {
    q: 'Welke regio\'s in Nederland hebben veel mangaan in putwater?',
    a: 'Mangaan komt vooral voor in putwater in Oost-Nederland (Drenthe, Overijssel, Gelderland), de Achterhoek, delen van Brabant en in veen- en kwelgebieden. Diep grondwater bevat doorgaans meer mangaan dan ondiep water. Mangaan komt natuurlijk vrij uit mineralen als pyrolusiet, manganiet en rhodochrosiet in de bodem. Een laboratoriumanalyse is de enige manier om het werkelijke gehalte vast te stellen.',
  },
  {
    q: 'Kan een waterontharder mangaan verwijderen?',
    a: 'Een standaard waterontharder (natriumionenwisseling) kan zeer lage mangaangehaltes (tot circa 0,1 mg/L) verwijderen, maar raakt snel verzadigd en moet vaker regenereren. Voor hogere gehaltes is een waterontharder ongeschikt en bestaat het risico dat het hars onherstelbaar verstopt of zwart verkleurt. Plaats altijd een mangaanfilter vóór de waterontharder als beide systemen worden ingezet.',
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
  headline: 'Mangaan verwijderen uit putwater: mangaanfilter, KMnO4, kosten',
  description:
    'Mangaan (Mn2+) uit putwater: zwarte aanslag, EU-norm 50 microgram/L, mangaanfilter met KMnO4-regeneratie en combinatiefilter Fe/Mn vergeleken.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/putwater/mangaan-verwijderen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function PutwaterMangaanVerwijderenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Putwater', item: 'https://waterfilterplatform.nl/putwater' },
              { '@type': 'ListItem', position: 3, name: 'Mangaan verwijderen', item: 'https://waterfilterplatform.nl/putwater/mangaan-verwijderen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/putwater" className="hover:underline">Putwater</Link> &rsaquo;{' '}
          <span>Mangaan verwijderen</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Mangaan verwijderen uit putwater: filter, KMnO4 en combinatiesystemen
          </h1>
          <p className="text-gray-700 text-lg">
            Mangaan (Mn2+) veroorzaakt zwarte aanslag op sanitair, in waterkokers en op wasgoed. De EU-norm is 50 microgram per liter. Een mangaanfilter met Greensand of pyrolusiet is de standaardaanpak.
          </p>
        </div>

        <QuickAnswer answer="Mangaan in putwater (Mn2+) wordt verwijderd door oxidatie (beluchting of kaliumpermanganaat) gevolgd door filtratie via Greensand, pyrolusiet of MTM. De EU-norm is 50 microgram per liter (0,05 mg/L). Een mangaanfilter kost 700 tot 1500 euro; een combinatiefilter voor ijzer en mangaan tegelijk kost 800 tot 1800 euro. KMnO4-regeneratie elke 1-4 weken houdt Greensand-filters actief." />

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Mangaan in putwater: symptomen en oorzaken
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan komt natuurlijk voor in de Nederlandse bodem, vooral in mineralen als pyrolusiet, manganiet en rhodochrosiet. In zuurstofarm grondwater is mangaan opgelost als Mn2+ en daarom in eerste instantie onzichtbaar. Pas bij contact met zuurstof (lucht of chloor) oxideert het tot zwarte mangaandioxide (MnO2) en wordt het zichtbaar als donkere aanslag.
        </p>
        <p className="text-gray-700 mb-6">
          Typische symptomen zijn zwarte of donkergrijze vlekken op wasgoed, sanitair en in waterkokers, een bittere metaalsmaak en zwarte deeltjes na een tijdje stilstaan van water in leidingen. Mangaan komt vooral voor in Oost-Nederland (Drenthe, Overijssel, Gelderland), veengebieden en kwelzones. Voor de bredere context over <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] underline">zware metalen in drinkwater</Link>: zie onze achtergrondpagina.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en gezondheidsperspectief
        </h2>
        <p className="text-gray-700 mb-4">
          De EU-drinkwaterrichtlijn 2020/2184 stelt 50 microgram per liter (0,05 mg/L) als indicatieve grenswaarde voor mangaan &mdash; vier keer strenger dan de ijzernorm. De WHO hanteert een gezondheidskundige richtwaarde van 80 microgram per liter, gebaseerd op mogelijke neurologische effecten bij langdurige blootstelling aan hoge concentraties.
        </p>
        <p className="text-gray-700 mb-6">
          Baby&apos;s en jonge kinderen zijn extra kwetsbaar omdat hun hersenontwikkeling nog plaatsvindt en hun darmwand minder selectief is in mangaanopname. Voor flesvoeding wordt water met minder dan 50 microgram per liter mangaan sterk aanbevolen. In putwater met verhoogd mangaan is filtratie daarom essentieel voor huishoudens met jonge kinderen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtertechnieken voor mangaanverwijdering
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Greensand-filter met KMnO4-regeneratie</h3>
            <p className="text-gray-700 text-sm">Greensand (glauconiet) is een natuurlijk mineraal dat met een MnO2-laag is gecoat. Het oxideert mangaan (en ijzer) tijdens passage en wordt periodiek geregenereerd met kaliumpermanganaat. KMnO4-regeneratie elke 1-4 weken, automatisch of handmatig. Geschikt voor mangaan tot 2-3 mg/L. Kosten: 800-1500 euro.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Pyrolusiet-filter</h3>
            <p className="text-gray-700 text-sm">Pyrolusiet is een natuurlijk mangaandioxide-mineraal dat als katalysator én filtermedium fungeert. Vereist géén KMnO4-regeneratie, alleen periodieke backwash. Robuust, onderhoudsarm en geschikt voor hogere mangaanconcentraties. Kosten: 1000-1800 euro.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">MTM-filter (Manganese Treatment Media)</h3>
            <p className="text-gray-700 text-sm">MTM is een synthetisch medium dat lijkt op pyrolusiet maar lichter is en lagere backwash-flow vereist. Geschikt voor ijzer en mangaan in combinatie. Kosten: 800-1400 euro.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Beluchting plus mediafilter (pH-verhoging)</h3>
            <p className="text-gray-700 text-sm">Mangaan oxideert pas effectief bij pH boven 8. Een beluchter met pH-correctie (kalkdosering) gevolgd door een zandfilter is geschikt voor zachter putwater waarbij chemische regeneratie ongewenst is. Kosten: 1200-2000 euro.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Combinatiefilter voor ijzer en mangaan
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederlands putwater komt mangaan vrijwel altijd samen voor met ijzer. Een combinatiefilter Fe/Mn verwijdert beide elementen in één installatie, wat ruimte bespaart en de totale kosten verlaagt. Greensand, pyrolusiet en MTM zijn alle drie geschikt voor deze combinatie omdat de oxidatieprocessen overeenkomen.
        </p>
        <p className="text-gray-700 mb-6">
          Een typisch combinatiesysteem bestaat uit: sediment-prefilter (5 micron), beluchter of doseerinstallatie, mediafilter met automatische backwash en eventueel een nafilter (actieve kool of UV). Totaalkosten: 800 tot 1800 euro inclusief installatie. Zie ook onze pagina over <Link href="/putwater/ijzer-verwijderen" className="text-[#005F8A] underline">ijzer verwijderen uit putwater</Link> voor de spiegelpagina.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Onderhoud en regeneratie
        </h2>
        <p className="text-gray-700 mb-4">
          Een Greensand-filter vereist periodieke regeneratie met kaliumpermanganaat (KMnO4). Een automatisch doseersysteem voegt elke 1 tot 4 weken een afgemeten hoeveelheid KMnO4 toe (afhankelijk van mangaangehalte en debiet). KMnO4 is een fel paarse vaste stof en moet zorgvuldig worden bewaard buiten bereik van kinderen.
        </p>
        <p className="text-gray-700 mb-6">
          Pyrolusiet- en MTM-filters vereisen geen chemische regeneratie, alleen periodieke backwash met schoon water (wekelijks of na een ingesteld waterverbruik). De filtermedia gaan 5 tot 10 jaar mee. Jaarlijkse controle door een installateur kost 100 tot 200 euro en omvat drukmeting, KMnO4-niveau (indien van toepassing) en visuele inspectie. Voor productinformatie zie <Link href="/waterfilter/mangaan" className="text-[#005F8A] underline">waterfilter voor mangaan</Link> en <Link href="/waterfilter/mangaanfilter" className="text-[#005F8A] underline">mangaanfilter</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Volgorde van filters bij putwater met mangaan
        </h2>
        <p className="text-gray-700 mb-6">
          Een effectieve filtervolgorde is: sedimentfilter (5 micron) &rarr; beluchter of doseerinjector &rarr; mangaanfilter (Greensand/pyrolusiet/MTM) &rarr; eventueel waterontharder &rarr; UV-sterilisator voor microbiologische veiligheid &rarr; optioneel omgekeerde osmose voor drinkwaterkraan. Deze opstelling beschermt elk filter tegen voortijdige verstopping en garandeert volledige behandeling van het putwater.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterfilter/mangaan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor mangaan</h3>
              <p className="text-sm text-gray-600">Productadvies en filtervergelijking voor mangaanverwijdering.</p>
            </Link>
            <Link href="/waterfilter/mangaanfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Mangaanfilter installatie</h3>
              <p className="text-sm text-gray-600">Technische details over Greensand, pyrolusiet en MTM-systemen.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
              <p className="text-sm text-gray-600">Achtergrond over mangaan, ijzer, lood en andere metalen.</p>
            </Link>
            <Link href="/putwater/ijzer-verwijderen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">IJzer verwijderen uit putwater</h3>
              <p className="text-sm text-gray-600">IJzer en mangaan komen vaak samen voor: vergelijk filtertypen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over mangaan verwijderen uit putwater
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/putwater" className="text-[#005F8A] underline">putwater overzicht</Link>,{' '}
          <Link href="/waterfilter/mangaan" className="text-[#005F8A] underline">mangaanfilter</Link>,{' '}
          <Link href="/putwater/ijzer-verwijderen" className="text-[#005F8A] underline">ijzer verwijderen</Link> en{' '}
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] underline">zware metalen</Link>.
        </p>
      </main>
    </>
  );
}
