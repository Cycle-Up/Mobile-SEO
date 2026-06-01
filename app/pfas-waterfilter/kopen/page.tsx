import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'PFAS waterfilter kopen: beste modellen die PFAS verwijderen (2026)',
  description:
    'Welk waterfilter koopt u voor PFAS-verwijdering? Vergelijking van 6 modellen, NSF/ANSI 58 certificering uitgelegd, kosten over 5 jaar en wat u NIET moet.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter/kopen' },
};

const faqItems = [
  {
    question: 'Welk certificering moet een PFAS waterfilter hebben?',
    answer:
      'NSF/ANSI 58 voor omgekeerde-osmosesystemen is de gouden standaard voor PFAS-verwijdering. NSF/ANSI 53 geldt voor activated-carbon-filters die specifiek voor PFAS getest zijn. Let op: NSF/ANSI 42 (geur/smaak) zegt niets over PFAS-verwijdering.',
  },
  {
    question: 'Wat kost een PFAS waterfilter gemiddeld?',
    answer:
      'Een onderbouw-osmosesysteem (RO) kost &euro;200-600 inclusief installatie. Jaarlijkse filterwissel bedraagt &euro;50-120. Een koolstofblok-doorstroomfilter met NSF 53-certificering voor PFAS kost &euro;100-300. Filterkannen zijn &lt;50 euro maar verwijderen PFAS niet betrouwbaar.',
  },
  {
    question: 'Verwijdert omgekeerde osmose alle PFAS-verbindingen?',
    answer:
      'RO verwijdert 95-99% van de meeste PFAS. Langketenige PFAS (PFOS, PFOA) worden beter verwijderd dan kortketenige (PFBA, PFPeA). Een membraan van 0,0001 µm blokkeert nagenoeg alle PFAS-moleculen fysiek. Kortketenige PFAS zijn kleiner en kunnen in kleine percentages doorlekken.',
  },
  {
    question: 'Hoe weet ik of mijn waterleidinggebied PFAS-problemen heeft?',
    answer:
      'Bekijk de jaarlijkse kwaliteitsrapportage van uw drinkwaterbedrijf (verplicht gepubliceerd). RIVM publiceert ook kaarten met hotspot-gebieden. Hotspots liggen rondom Dordrecht/Chemours, Schiphol en militaire vliegbases. Buiten deze zones voldoet Nederlands leidingwater doorgaans aan de EU-norm.',
  },
  {
    question: 'Kan ik zelf een PFAS waterfilter installeren?',
    answer:
      'Onderbouw-osmosesystemen worden geleverd met installatie-instructies en kunnen door een doe-het-zelver met basiskennis van loodgieterij geinstalleerd worden. Aansluitingen zijn meestal 3/8" of 1/2". Professionele installatie is aan te raden bij oudere leidingen of wanneer u ook een kokend-waterboiler wilt koppelen.',
  },
  {
    question: 'Hoe vaak moet ik het filter vervangen bij PFAS-verontreiniging?',
    answer:
      'In gebieden met bekende PFAS-verontreiniging wordt aangeraden de voorfilters elk halfjaar te vervangen (in plaats van jaarlijks) en het osmosemembraan na 2 jaar (in plaats van 3 jaar). Een versleten membraan laat meer PFAS door zonder zichtbare kwaliteitsverslechtering.',
  },
  {
    question: 'Wat zijn de totale kosten van een PFAS osmosefilter over 5 jaar?',
    answer:
      'Een budget onderbouw osmosefilter (aanschaf EUR 200) kost over 5 jaar ongeveer EUR 500 inclusief vervangende filters. Een premium systeem (aanschaf EUR 800-1.200) kost over 5 jaar EUR 1.400-1.800. Ter vergelijking: flessenwater voor een gezin van 3 kost over 5 jaar meer dan EUR 3.500. Een osmosefilter is per liter de goedkoopste oplossing na het eerste jaar.',
  },
  {
    question: 'Is een countertop osmosefilter even effectief als een onderbouw systeem voor PFAS?',
    answer:
      'Ja, een countertop (tafelmodel) osmosefilter met een echt RO-membraan verwijdert PFAS even effectief als een onderbouw systeem: 95-99% reductie. Het voordeel is dat er geen installatie nodig is. Het nadeel is een lagere productiecapaciteit (2-5 liter per uur) en dat het apparaat ruimte inneemt op het aanrecht. Geschikt voor huurders of kleinere huishoudens.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Kopen', url: 'https://waterfilterplatform.nl/pfas-waterfilter/kopen' },
];

const filterTypes = [
  {
    type: 'Omgekeerde osmose (RO)',
    pfasVerwijdering: '95–99%',
    nsfCertificering: 'NSF/ANSI 58',
    kosten: '€200–600',
    aanbevolen: true,
  },
  {
    type: 'Nanofiltration (NF)',
    pfasVerwijdering: '90–95%',
    nsfCertificering: 'NSF/ANSI 58 (NF)',
    kosten: '€300–800',
    aanbevolen: true,
  },
  {
    type: 'Koolstofblok (NSF 53)',
    pfasVerwijdering: '80–95% (langketens)',
    nsfCertificering: 'NSF/ANSI 53',
    kosten: '€100–300',
    aanbevolen: false,
  },
  {
    type: 'Actief kool (NSF 42)',
    pfasVerwijdering: 'Onbetrouwbaar',
    nsfCertificering: 'NSF/ANSI 42',
    kosten: '€50–200',
    aanbevolen: false,
  },
  {
    type: 'Filterkraan/kan',
    pfasVerwijdering: 'Niet geschikt',
    nsfCertificering: 'Geen PFAS-claim',
    kosten: '€20–80',
    aanbevolen: false,
  },
];

export default function PfasWaterfilterKopenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'PFAS waterfilter kopen: beste modellen die PFAS verwijderen (2026)',
          description:
            'Welk waterfilter koopt u voor PFAS-verwijdering? Vergelijking van 6 modellen, NSF/ANSI 58 certificering uitgelegd, kosten over 5 jaar en wat u NIET moet.',
          datePublished: '2026-04-25',
          dateModified: '2026-04-25',
          url: 'https://waterfilterplatform.nl/pfas-waterfilter/kopen',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS waterfilter kopen: beste modellen die PFAS verwijderen (2026)
          </h1>
          <QuickAnswer answer="Koop uitsluitend een waterfilter met NSF/ANSI 58-certificering (osmose) of NSF/ANSI 53 (koolstofblok) voor betrouwbare PFAS-verwijdering. Omgekeerde osmose is de goudstandaard: 95-99% reductie van alle PFAS-verbindingen. Filterkannen zijn niet geschikt voor PFAS." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="osmose" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welk waterfilter verwijdert PFAS het meest betrouwbaar?
          </h2>
          <p className="text-gray-700 mb-4">
            Niet elk waterfilter is geschikt voor PFAS-verwijdering. De effectiviteit hangt af van het filtermechanisme en de certificering. Onderstaande vergelijking toont de bewezen PFAS-verwijderingspercentages per filtertype:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Filtertype</th>
                  <th className="p-3 text-left">PFAS-verwijdering</th>
                  <th className="p-3 text-left">Certificering</th>
                  <th className="p-3 text-left">Prijs</th>
                  <th className="p-3 text-center">Aanbevolen</th>
                </tr>
              </thead>
              <tbody>
                {filterTypes.map((f, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{f.type}</td>
                    <td className="p-3">{f.pfasVerwijdering}</td>
                    <td className="p-3 text-sm">{f.nsfCertificering}</td>
                    <td className="p-3">{f.kosten}</td>
                    <td className="p-3 text-center">
                      {f.aanbevolen ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-red-500">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Bronnen: NSF International, EPA, RIVM. Percentages gelden voor langketenige PFAS bij gecertificeerde systemen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waar moet u op letten bij het kopen van een PFAS waterfilter?
          </h2>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'NSF/ANSI-certificering — het enige dat telt',
                tekst:
                  'Eis altijd een geldig NSF/ANSI-certificaat voor PFAS-verwijdering. NSF/ANSI 58 (voor RO-systemen) en NSF/ANSI 53 (voor koolstofblokfilters) zijn de enige normen waarbij PFAS-reductie daadwerkelijk wordt getest. Marketingclaims zoals "verwijdert verontreinigingen" of "verbetert drinkwaterkwaliteit" zijn geen garantie voor PFAS-verwijdering.',
              },
              {
                nr: '2',
                titel: 'Korte- vs. langketenige PFAS',
                tekst:
                  'Osmose verwijdert zowel langketenige (PFOS, PFOA) als kortketenige PFAS (PFBA, PFPeA) betrouwbaar. Koolstofblokfilters zijn effectiever voor langketenige PFAS maar laten soms kortketenige verbindingen door. In hotspot-gebieden is omgekeerde osmose daarom de veiligste keuze.',
              },
              {
                nr: '3',
                titel: 'Filtercapaciteit en doorstroomsnelheid',
                tekst:
                  'RO-systemen produceren 150-300 liter per dag, voldoende voor een gemiddeld huishouden. Grotere gezinnen of mensen met intensief gebruik kiezen een systeem met opslagtank. Let op de Rejection Rate (afwijzingspercentage) in de productspecificaties: voor PFAS wilt u minimaal 95%.',
              },
              {
                nr: '4',
                titel: 'Filtervervanging en onderhoudskosten',
                tekst:
                  'Reken op jaarlijkse kosten van €50-120 voor voorfilters en een membraanwissel elke 2-3 jaar. In PFAS-hotspot-gebieden is meer frequent onderhoud aan te raden. Kies een merk met beschikbare reservefilters in Nederland of de EU — importfilters met rare maten zijn frustrerend.',
              },
              {
                nr: '5',
                titel: 'Combineer PFAS-filter met kokend water',
                tekst:
                  'De meest praktische oplossing voor Nederlandse huishoudens is een 4-in-1 kokend-water-kraan met geintegreerde omgekeerde osmose. U krijgt koud, warm, kokend en gefilterd water uit één kraan, terwijl het osmosemembraan alle PFAS verwijdert. Installatie is eenmalig en onderhoud is minimaal.',
              },
            ].map(item => (
              <div key={item.nr} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  {item.nr}
                </div>
                <div>
                  <h3 className="font-semibold text-[#005F8A] mb-1">{item.titel}</h3>
                  <p className="text-gray-700 text-sm">{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Osmose vs. koolstofblok: welke kiest u voor PFAS?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-green-500 rounded-xl p-5">
              <h3 className="font-bold text-green-700 mb-3">Omgekeerde osmose — Aanbevolen</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-500">✓</span>95-99% PFAS-verwijdering</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span>Effectief voor korte- en langketenige PFAS</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span>NSF/ANSI 58-gecertificeerd</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span>Verwijdert ook zware metalen, nitraat, bacterieen</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span>Membraan is fysieke barriere — niet te overbrug</li>
                <li className="flex gap-2"><span className="text-red-400">−</span>Hogere aanschafprijs (€200-600)</li>
                <li className="flex gap-2"><span className="text-red-400">−</span>Produceert afvalwater (3:1 ratio bij moderne systemen)</li>
              </ul>
            </div>
            <div className="border-2 border-yellow-400 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-3">Koolstofblok (NSF 53) — Alternatief</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-500">✓</span>Goedkoper (€100-300)</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span>Geen afvalwater</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span>Goede doorstroomsnelheid</li>
                <li className="flex gap-2"><span className="text-red-400">−</span>Minder effectief voor kortketenige PFAS</li>
                <li className="flex gap-2"><span className="text-red-400">−</span>Koolstof raakt verzadigd, timing is kritiek</li>
                <li className="flex gap-2"><span className="text-red-400">−</span>Niet aanbevolen in PFAS-hotspot-gebieden</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Heeft u echt een PFAS waterfilter nodig?
          </h2>
          <p className="text-gray-700 mb-4">
            De overgrote meerderheid van het Nederlandse drinkwater voldoet aan de EU-PFAS-norm (0,10 µg/L sum-20). Drinkwaterbedrijven zijn wettelijk verplicht dit jaarlijks te meten en te rapporteren. Toch zijn er twee situaties waar een PFAS-filter zinvol is:
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                titel: 'U woont in een PFAS-hotspot',
                tekst:
                  'Omgeving Dordrecht (Chemours/DuPont), straal 20 km rond Schiphol, omgeving van militaire vliegbases (Volkel, Eindhoven, De Peel, Woensdrecht, Leeuwarden). Raadpleeg ook de lokale gemeente voor putwatergebruikers.',
              },
              {
                titel: 'U gebruikt putwater of bronwater',
                tekst:
                  'Particuliere putten worden niet gemonitord door drinkwaterbedrijven. Regenwater en ondiepe putten in landbouwgebieden kunnen verhoogde PFAS-waarden hebben door drainagewater van blussers en gewasbeschermingsmiddelen.',
              },
              {
                titel: 'U wilt gemoedsrust',
                tekst:
                  'Ook buiten hotspot-zones kiezen steeds meer consumenten voor een osmosefilter als preventieve maatregel. Een 4-in-1 kraan met osmose biedt naast PFAS-verwijdering ook bescherming tegen loodleidingen, nitraat, bacterieen en microplastics.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-[#005F8A] mb-1">{item.titel}</h3>
                <p className="text-gray-700 text-sm">{item.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over PFAS waterfilters kopen
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg">
                <summary className="p-4 font-semibold text-[#005F8A] cursor-pointer hover:bg-gray-50">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm"
                   dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer over PFAS en waterfilters</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/pfas-waterfilter" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS waterfilter gids</h3>
              <p className="text-sm text-gray-600">Complete uitleg: wat werkt en wat niet</p>
            </Link>
            <Link href="/pfas-waterfilter/testen" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS testen in water</h3>
              <p className="text-sm text-gray-600">Hoe test u uw kraanwater op PFAS?</p>
            </Link>
            <Link href="/pfas-waterfilter/normen-2026" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">EU-normen 2026</h3>
              <p className="text-sm text-gray-600">Nieuwe PFAS-grenswaarden uitgelegd</p>
            </Link>
            <Link href="/pfas-waterfilter/gebieden-nederland" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS risicogebieden</h3>
              <p className="text-sm text-gray-600">PFAS hotspots per regio in Nederland</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">Omgekeerde osmose gids</h3>
              <p className="text-sm text-gray-600">Alles over osmosefilters in Nederland</p>
            </Link>
            <Link href="/pfas-water" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS in drinkwater</h3>
              <p className="text-sm text-gray-600">Risico&apos;s, normen en gezondheid</p>
            </Link>
          </div>
        </section>

        <section className="mt-8 mb-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">PFAS waterfilter overzicht</p>
              <p className="text-sm text-gray-500">PFAS waterfilter overzicht</p>
            </Link>
            <Link href="/pfas-waterfilter/vergelijken" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">PFAS waterfilters vergelijken</p>
              <p className="text-sm text-gray-500">PFAS waterfilters vergelijken</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">Osmose als effectiefste PFAS-filter</p>
              <p className="text-sm text-gray-500">Osmose als effectiefste PFAS-filter</p>
            </Link>
            <Link href="/keuzehulp/pfas-lood" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">Keuzehulp bij PFAS en lood</p>
              <p className="text-sm text-gray-500">Keuzehulp bij PFAS en lood</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
