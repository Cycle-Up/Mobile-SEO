import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Filterkan vs osmose filter: wat zijn de echte verschillen? Vergelijking 2026',
  description:
    'Filterkan of osmose filter? Vergelijking op filterwerkzaamheid, kosten, installatie en gebruik. Voor wie volstaat een filterkan en wanneer heb je osmose.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filterkan/vs-osmose' },
  openGraph: {
    title: 'Filterkan vs osmose filter: wat zijn de echte verschillen? Vergelijking 2026',
    description:
      'Filterkan of osmose filter? Vergelijking op filterwerkzaamheid, kosten en gebruik — en voor wie welke optie de beste is.',
    url: 'https://waterfilterplatform.nl/filterkan/vs-osmose',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat filtert een filterkan dat osmose niet kan?',
    answer:
      'Niets. Een omgekeerde osmose systeem filtert alles wat een filterkan filtert, en bovendien een groot scala aan stoffen die een filterkan niet aankan: nitraten, PFAS, bacteriën, zware metalen, microplastics en arseen. Er is geen scenario waarbij een filterkan beter filtert dan osmose — het enige voordeel van de filterkan zit in het gebruiksgemak en de aanschafprijs, niet in filterwerkzaamheid.',
  },
  {
    question: 'Wat filtert osmose dat een filterkan niet kan?',
    answer:
      'Omgekeerde osmose filtert via een semipermeabel membraan dat werkt op moleculair niveau. Daarmee verwijdert het: nitraten (85–95%), PFAS-verbindingen inclusief GenX (95–99%), volledige waterhardheid (95–99%), bacteriën en virussen via membraanfiltratie, microplastics, arseen, fluoride en de meeste zware metalen inclusief lood en kwik volledig. Dit zijn allemaal stoffen die een filterkan niet of nauwelijks aanpakt.',
  },
  {
    question: 'Wat kost een filterkan vs osmose per jaar?',
    answer:
      'Een filterkan kost €45 tot €100 per jaar aan filtercartridges, plus €18 tot €45 eenmalig voor de kan. Een osmose onderbouwsysteem kost €60 tot €110 per jaar aan filterwissels, plus een eenmalige aanschaf van €150 tot €400 en eventueel installatiekosten van €0 tot €80. Op jaarbasis liggen de lopende kosten dus vergelijkbaar, maar osmose heeft een hogere opstartinvestering.',
  },
  {
    question: 'Is osmose moeilijker te gebruiken dan een filterkan?',
    answer:
      'Een filterkan vereist geen installatie: vullen, wachten en klaar. De cartridge moeten maandelijks handmatig worden vervangen. Een osmosefilter vereist eenmalige installatie onder het aanrecht (2 tot 4 uur), maar daarna is het volledig automatisch: water uit de kraan is direct gefilterd. Filterwissel is slechts eenmaal per jaar nodig. In dagelijks gebruik is osmose gemakkelijker; de drempel zit in de initiële installatie.',
  },
  {
    question: 'Wanneer is een filterkan goed genoeg?',
    answer:
      'Een filterkan volstaat wanneer: je primair chloor en smaak wilt verbeteren, je woont in een regio met zacht tot matig hard water (minder dan 14°dH), er geen bekende nitraat- of PFAS-belasting in jouw waterregio is, je geen baby\'s of zwangere vrouwen in huis hebt voor wie nitraat een risico vormt, en je een budgetvriendelijke en eenvoudige oplossing zoekt zonder installatiewerk.',
  },
  {
    question: 'Wanneer heb ik zeker osmose nodig?',
    answer:
      'Osmose is de betere keuze wanneer: nitraat in jouw leidingwater hoger is dan 25 mg/L (agrarisch gebied of privéput), je in een PFAS-gevoelige regio woont, je babyvoeding bereidt met leidingwater of er zwangere vrouwen in huis zijn, je last hebt van ernstige kalkaanslag door hard water boven 12°dH en dit volledig wilt elimineren, of wanneer je bewust wilt zijn van microplastics, medicijnresten en zware metalen in je drinkwater.',
  },
  {
    question: 'Kan ik overstappen van filterkan naar osmose?',
    answer:
      'Ja, en dit is een van de meest zinvolle upgrades voor drinkwaterkwaliteit in huis. Aanschaf van een onderbouw osmosefilter kost €150 tot €400. Zelf installeren is mogelijk in 2 tot 4 uur (kraanwater afsluiten, slangen aansluiten, kraantje boren); professionele installatie kost €0 tot €80 extra. Daarna liggen de jaarlijkse kosten op hetzelfde niveau als een filterkan — maar de filterwerkzaamheid is fundamenteel beter.',
  },
  {
    question: 'Is osmosewater minder mineraalrijk dan filterkanwater?',
    answer:
      'Ja. Omgekeerde osmose verwijdert naast ongewenste stoffen ook nuttige mineralen zoals calcium en magnesium. Filterkanwater bevat deze mineralen nog grotendeels. Of dit een nadeel is, is wetenschappelijk omstreden: je dagelijkse mineraalbehoefte haal je grotendeels uit voeding, niet uit water. Wie toch meer mineralen in osmosewater wil, kan een remineralisatiefilter toevoegen (€30 tot €60 extra) die calcium en magnesium terugvoegt.',
  },
];

type VergelijkingRij = {
  criterium: string;
  filterkan: string;
  osmose: string;
  voordeel: 'filterkan' | 'osmose' | 'gelijk';
};

const hoofdVergelijking: VergelijkingRij[] = [
  { criterium: 'Installatie', filterkan: 'Geen', osmose: '2–4 uur (zelf of installateur)', voordeel: 'filterkan' },
  { criterium: 'Chloor verwijderen', filterkan: '✓ 95%+', osmose: '✓ 95–99%', voordeel: 'gelijk' },
  { criterium: 'Kalk (hardheid)', filterkan: '½ deels (30–60%)', osmose: '✓ 95–99%', voordeel: 'osmose' },
  { criterium: 'Nitraat', filterkan: '✗ <10%', osmose: '✓ 85–95%', voordeel: 'osmose' },
  { criterium: 'PFAS', filterkan: '✗ <20%', osmose: '✓ 95–99%', voordeel: 'osmose' },
  { criterium: 'Lood', filterkan: '½ deels (40–60%)', osmose: '✓ 95–99%', voordeel: 'osmose' },
  { criterium: 'Bacteriën', filterkan: '✗ Geen', osmose: '✓ via membraan', voordeel: 'osmose' },
  { criterium: 'Microplastics', filterkan: '✗ Nee', osmose: '✓ Ja', voordeel: 'osmose' },
  { criterium: 'Filterwissel frequentie', filterkan: 'Maandelijks', osmose: '1× per jaar', voordeel: 'osmose' },
  { criterium: 'Aanschafprijs', filterkan: '€18–45', osmose: '€150–500', voordeel: 'filterkan' },
  { criterium: 'Jaarlijkse filterkosten', filterkan: '€45–100', osmose: '€60–110', voordeel: 'gelijk' },
  { criterium: 'Afvalwater', filterkan: 'Geen', osmose: '1:1 (modern systeem)', voordeel: 'filterkan' },
];

type KostenRij = {
  systeem: string;
  aanschaf: string;
  jaar1: string;
  jaar2: string;
  jaar3: string;
  jaar5: string;
};

const kostenVergelijking: KostenRij[] = [
  { systeem: 'Filterkan origineel (Brita/BWT)', aanschaf: '€35', jaar1: '€120', jaar2: '€195', jaar3: '€270', jaar5: '€420' },
  { systeem: 'Filterkan merkloze cartridges', aanschaf: '€25', jaar1: '€75', jaar2: '€125', jaar3: '€175', jaar5: '€275' },
  { systeem: 'Osmose basis (€200 aanschaf)', aanschaf: '€200', jaar1: '€275', jaar2: '€345', jaar3: '€415', jaar5: '€555' },
  { systeem: 'Osmose premium (€350 aanschaf)', aanschaf: '€350', jaar1: '€455', jaar2: '€540', jaar3: '€625', jaar5: '€795' },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Filterkan', url: 'https://waterfilterplatform.nl/filterkan' },
  { name: 'Filterkan vs osmose', url: 'https://waterfilterplatform.nl/filterkan/vs-osmose' },
];

export default function FilterkanVsOsmosePage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Filterkan vs osmose filter: wat zijn de echte verschillen? Vergelijking 2026',
          description:
            'Filterkan of osmose filter? Vergelijking op filterwerkzaamheid, kosten, installatie en gebruik. Voor wie volstaat een filterkan en wanneer heb je osmose.',
          datePublished: '2026-02-20',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/filterkan/vs-osmose',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/filterkan" className="hover:text-[#005F8A]">Filterkan</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Filterkan vs osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Filterkan vs osmose filter: wat zijn de echte verschillen?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een filterkan (Brita, BWT) kost €45–75 per jaar en vereist geen installatie. Een
            osmosefilter verwijdert 95–99% van nitraten, PFAS en zware metalen voor een
            vergelijkbare jaarprijs. De echte vraag is: wat filtert uw leidingwater echt nodig?
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~9 min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        {/* Quick Answer */}
        <QuickAnswer answer="Een filterkan (Brita, BWT) filtert via actief kool en verwijdert chloor en geur voor €45–75/jaar — geen installatie nodig. Een osmosefilter verwijdert 95–99% van nitraten, PFAS, kalk en zware metalen voor €60–110/jaar — wel installatie onder aanrecht. Voor puur drinkwater of bij nitraat/PFAS is osmose de enige echte oplossing." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#vergelijking', 'Grote vergelijkingstabel: 12 criteria'],
              ['#filterkan-keuze', 'Voor wie is een filterkan de beste keuze?'],
              ['#osmose-keuze', 'Voor wie is osmose de betere investering?'],
              ['#tussenstap', 'De tussenstap: onderbouw koolstoffilter'],
              ['#kosten', '5-jaar kostenvergelijking'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Inleiding */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe verhouden filterkan en osmose zich tot elkaar?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Op het eerste gezicht lijken een{' '}
            <Link href="/filterkan" className="text-[#005F8A] underline hover:no-underline">filterkan</Link>{' '}
            en een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">osmosefilter</Link>{' '}
            op hetzelfde doel af: schoner drinkwater. Maar de technologie, de filterwerkzaamheid
            en het gebruiksgemak zijn fundamenteel anders. Een filterkan filtert via actief kool
            en ionenwisseling — een passief gravitatiesysteem. Een osmosefilter werkt onder hoge
            druk via een semipermeabel membraan dat water op moleculair niveau scheidt van
            opgeloste stoffen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het resultaat: een filterkan verbetert de smaak en verwijdert chloor; osmose doet dat
            ook, maar verwijdert bovendien nitraten, PFAS, zware metalen, bacteriën en microplastics.
            De jaarlijkse filterkosten liggen na de initiële investering op een vergelijkbaar niveau.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Deze vergelijking helpt je bepalen welke optie past bij jouw waterkwaliteit, budget
            en gebruikssituatie. Wil je eerst de werking van een filterkan begrijpen? Lees dan{' '}
            <Link href="/filterkan/werking" className="text-[#005F8A] underline hover:no-underline">
              hoe een filterkan werkt
            </Link>.
          </p>
        </section>

        {/* Hoofdvergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Grote vergelijkingstabel: 12 criteria
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De tabel hieronder vergelijkt een standaard filterkan (Brita Maxtra+ of BWT Penguin)
            met een onderbouw omgekeerde osmose systeem op twaalf praktische criteria. Een ½
            betekent gedeeltelijke prestatie; ✓ en ✗ geven aan of een eigenschap aanwezig is.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Criterium</th>
                  <th className="text-center px-4 py-3 font-semibold">Filterkan (Brita/BWT)</th>
                  <th className="text-center px-4 py-3 font-semibold">Osmose (onderbouw RO)</th>
                </tr>
              </thead>
              <tbody>
                {hoofdVergelijking.map((row, i) => (
                  <tr
                    key={row.criterium}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{row.criterium}</td>
                    <td className={`px-4 py-3 text-center text-sm ${row.voordeel === 'filterkan' ? 'text-green-700 font-semibold' : row.voordeel === 'osmose' ? 'text-red-600' : 'text-gray-700'}`}>
                      {row.filterkan}
                    </td>
                    <td className={`px-4 py-3 text-center text-sm ${row.voordeel === 'osmose' ? 'text-green-700 font-semibold' : row.voordeel === 'filterkan' ? 'text-gray-500' : 'text-gray-700'}`}>
                      {row.osmose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Bronnen: fabrikantspecificaties Brita, BWT, APEC Water, iSpring (2025). Groen = voordeel
            voor die kolom. Filterwerkzaamheidspercentages zijn indicatief bij optimale condities.
          </p>
        </section>

        {/* Voor wie filterkan */}
        <section id="filterkan-keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Voor wie is een filterkan de beste keuze?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Een filterkan is een uitstekende en budgetvriendelijke oplossing in de volgende
            situaties:
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                {
                  titel: 'Smaak en chloor zijn de enige klacht',
                  tekst: 'Als je tevreden bent met de waterkwaliteit maar restchloor en een lichte chloorlucht vervelend vindt, is een filterkan de meest proportionele oplossing.',
                },
                {
                  titel: 'Je woont in een regio met zacht tot matig water',
                  tekst: 'Bij waterhardheid onder 10°dH is kalkaanslag beperkt en voegt een filterkan zinvolle smaakverlaging toe zonder dat je de volledige ontharding van osmose nodig hebt.',
                },
                {
                  titel: 'Geen verhoogde nitraat- of PFAS-waarden in jouw regio',
                  tekst: 'Controleer je gemeente via het drinkwaterbedrijf. Als nitraat onder 25 mg/L blijft en er geen PFAS-meldingen zijn, biedt een filterkan voldoende bescherming.',
                },
                {
                  titel: 'Huurwoning of tijdelijke situatie',
                  tekst: 'Een filterkan vereist geen installatie en is makkelijk mee te nemen. Voor huurders die niet mogen boren of aanpassen is dit de logische keuze.',
                },
                {
                  titel: 'Budget bewust starten',
                  tekst: 'Aanschaf vanaf €18; lopende kosten €45–100 per jaar. Dit is de laagste instapdrempel van alle waterfilteroplossingen.',
                },
              ].map(item => (
                <li key={item.titel} className="flex gap-3 items-start">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">{item.titel}:</span>{' '}
                    <span>{item.tekst}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/filterkan/brita"
              className="inline-block border border-[#005F8A] text-[#005F8A] font-semibold px-4 py-2 rounded-xl hover:bg-[#005F8A] hover:text-white transition-colors text-sm"
            >
              Brita filterkan →
            </Link>
            <Link
              href="/filterkan/bwt"
              className="inline-block border border-[#005F8A] text-[#005F8A] font-semibold px-4 py-2 rounded-xl hover:bg-[#005F8A] hover:text-white transition-colors text-sm"
            >
              BWT filterkan →
            </Link>
          </div>
        </section>

        {/* Voor wie osmose */}
        <section id="osmose-keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Voor wie is osmose de betere investering?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Omgekeerde osmose is de aangewezen keuze wanneer filterwerkzaamheid echt telt — niet
            alleen voor smaak maar voor gezondheidsrelevante stoffen:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                {
                  titel: 'Nitraat boven 25 mg/L',
                  tekst: 'In agrarische gebieden en bij privéputten zijn nitraatconcentraties vaker verhoogd. Osmose verwijdert 85–95% van nitraat; een filterkan minder dan 10%.',
                },
                {
                  titel: 'PFAS-gevoelige regio',
                  tekst: 'Bewoners nabij chemische industrie of in gebieden met PFAS-verontreiniging in grondwater doen er goed aan te kiezen voor osmose — de enige thuisoplossing die GenX en andere kortketenige PFAS betrouwbaar reduceert.',
                },
                {
                  titel: 'Baby of zwangere vrouw in huis',
                  tekst: 'Zuigelingen zijn gevoeliger voor nitraat (methemoglobinemie). Het RIVM stelt de veiligheidsgrens voor baby\'s op circa 10 mg/L — ver onder de drinkwaternorm voor volwassenen. Osmose biedt hier zekerheid; een filterkan niet.',
                },
                {
                  titel: 'Hard water boven 12°dH',
                  tekst: 'Bij ernstige kalkaanslag in espressomachines, vaatwassers en boilers is de 30–60% hardheidsreductie van een filterkan onvoldoende. Osmose verwijdert 95–99% van de kalk, wat apparaten aanzienlijk langer mee laat gaan.',
                },
                {
                  titel: 'Volledig puur drinkwater gewenst',
                  tekst: 'Wie bewust wil zijn van microplastics, medicijnresten, hormonen en zware metalen in drinkwater heeft de enige echte oplossing in osmose — een filterkan biedt hier geen significante bescherming.',
                },
              ].map(item => (
                <li key={item.titel} className="flex gap-3 items-start">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">{item.titel}:</span>{' '}
                    <span>{item.tekst}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose"
              className="inline-block bg-[#005F8A] text-white font-semibold px-4 py-2 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose uitgelegd →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="inline-block border border-[#005F8A] text-[#005F8A] font-semibold px-4 py-2 rounded-xl hover:bg-[#005F8A] hover:text-white transition-colors text-sm"
            >
              Osmosefilter kopen →
            </Link>
          </div>
        </section>

        {/* Tussenstap */}
        <section id="tussenstap">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            De tussenstap: onderbouw koolstoffilter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wie meer wil dan een filterkan maar nog niet klaar is voor de investering en installatie
            van osmose, kan kiezen voor een{' '}
            <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">
              onderbouw koolstoffilter
            </Link>.
            Dit systeem werkt op basis van hetzelfde principe als de filterkan — actief kool en
            ionenwisseling — maar heeft een aantal voordelen:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                titel: 'Hogere doorstroomsnelheid',
                tekst: 'Verbonden aan de waterleiding onder druk; geen wachttijd zoals bij een filterkan. Direct gefilterd water uit een aparte kraan.',
              },
              {
                titel: 'Grotere filtercapaciteit',
                tekst: 'Een onderbouw koolstoffilter filtert 2.000–10.000 liter per cartridge — veel meer dan de 100–150 liter van een filterkan.',
              },
              {
                titel: 'Lagere jaarkosten per liter',
                tekst: 'Door hogere capaciteit daalt de kostprijs per liter gefilterd water fors, ook al zijn de aanschafkosten iets hoger (€60–150).',
              },
            ].map(item => (
              <div key={item.titel} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-bold text-[#003F5C] text-sm mb-2">{item.titel}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Belangrijk:</strong> Een onderbouw koolstoffilter
            verwijdert nog steeds geen nitraten, PFAS of bacteriën. Het is een tussenstap op
            gebruiksgemak en capaciteit, niet op filterwerkzaamheid. Voor volledige zuivering
            blijft osmose de enige betrouwbare thuisoplossing.
          </div>
        </section>

        {/* Kostenvergelijking */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5-jaar kostenvergelijking: filterkan vs osmose
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hoe vallen de totale kosten over 5 jaar uit, inclusief aanschaf? Onderstaande tabel
            vergelijkt vier scenario&apos;s: originele cartridges, merkloze cartridges, een basis
            osmosesysteem en een premium osmosesysteem. Installatiekosten osmose: €0 (zelf) tot
            €80 (installateur) — niet inbegrepen.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Systeem</th>
                  <th className="text-center px-3 py-3 font-semibold">Aanschaf</th>
                  <th className="text-center px-3 py-3 font-semibold">Jaar 1</th>
                  <th className="text-center px-3 py-3 font-semibold">Jaar 2</th>
                  <th className="text-center px-3 py-3 font-semibold">Jaar 3</th>
                  <th className="text-center px-3 py-3 font-semibold">Jaar 5</th>
                </tr>
              </thead>
              <tbody>
                {kostenVergelijking.map((row, i) => (
                  <tr
                    key={row.systeem}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{row.systeem}</td>
                    <td className="px-3 py-3 text-center text-gray-700">{row.aanschaf}</td>
                    <td className="px-3 py-3 text-center text-gray-700">{row.jaar1}</td>
                    <td className="px-3 py-3 text-center text-gray-700">{row.jaar2}</td>
                    <td className="px-3 py-3 text-center text-gray-700">{row.jaar3}</td>
                    <td className="px-3 py-3 text-center font-semibold text-gray-900">{row.jaar5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Aannames: filterkan 10 cartridges/jaar (€8 origineel, €4 merkloos), osmose basis
            €75/jaar filterwissels, osmose premium €90/jaar. Bedragen zijn cumulatief (aanschaf
            inbegrepen in jaar 1).
          </p>
          <div className="mt-5 bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Conclusie:</strong> Over 5 jaar zijn de totale
            kosten van een filterkan met originele cartridges (€420) en een basis osmosesysteem
            (€555) dichter bij elkaar dan men vaak denkt — het verschil is circa €135 over vijf jaar.
            Maar osmose biedt in die periode fundamenteel betere filtratie op elk relevant criterium.
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/filterkan',
                title: 'Filterkan overzicht',
                desc: 'Alles over waterfilterkannen: werking, merken en wanneer ze de juiste keuze zijn.',
              },
              {
                href: '/filterkan/brita',
                title: 'Brita filterkan',
                desc: 'Gedetailleerde beoordeling van de Brita Maxtra+ — de meest verkochte filterkan in Nederland.',
              },
              {
                href: '/filterkan/bwt',
                title: 'BWT filterkan',
                desc: 'BWT met Magnesiumtechnologie — voor wie is dit de betere keuze boven Brita?',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose uitgelegd',
                desc: 'Hoe werkt een osmosefilter? Technologie, voordelen en beperkingen uitgebreid uitgelegd.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmosefilter kopen',
                desc: 'Koopgids voor omgekeerde osmose systemen — welk model past bij jouw situatie en budget?',
              },
              {
                href: '/koolstoffilter',
                title: 'Onderbouw koolstoffilter',
                desc: 'De tussenstap tussen filterkan en osmose — hogere capaciteit, geen extra zuivering.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">
                  {l.title}
                </p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: filterkan vs osmose
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
