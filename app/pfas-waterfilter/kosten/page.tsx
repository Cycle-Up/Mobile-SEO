import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kosten PFAS waterfilter: aanschaf, TCO en subsidies (2026)',
  description:
    'Budgetvergelijking PFAS-waterfilters: pitcher EUR 30-80, onderbouw koolstof EUR 100-300, RO EUR 300-800, professioneel EUR 800-2000. TCO 5-jaar berekening en subsidies.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter/kosten' },
};

const faqItems = [
  {
    question: 'Wat kost een PFAS waterfilter aanschaffen?',
    answer:
      'De aanschafkosten varieren sterk per type: filterpitcher EUR 30-80, onderbouw koolstofblok met NSF/ANSI 53 EUR 100-300, onderbouw omgekeerde osmose (RO) EUR 300-800, professioneel inbouwsysteem (4-in-1 kokend water + RO) EUR 800-2.000. De aanschafprijs is echter maar een deel van de totale kosten: filtervervanging, waterverbruik en installatie bepalen mede de totale 5-jaarskosten.',
  },
  {
    question: 'Wat zijn de jaarlijkse filterkosten per type PFAS-filter?',
    answer:
      'Filterpitcher: EUR 80 per jaar (filter elke 3 maanden EUR 20). Onderbouw koolstofblok: EUR 100 per jaar (filter elke 6 maanden EUR 50). Omgekeerde osmose (onderbouw): EUR 80 per jaar (voorfilters jaarlijks EUR 40, membraan EUR 40 geamortiseerd over 3 jaar). Professioneel systeem: EUR 100-150 per jaar (filters inclusief onderhoud). Let op: in PFAS-hotspot-gebieden wordt aangeraden filters vaker te vervangen, wat de jaarkosten met 20-40% verhoogt.',
  },
  {
    question: 'Wat zijn de totale kosten van een osmosefilter over 5 jaar?',
    answer:
      'Een budget onderbouw-osmosefilter (aanschaf EUR 300) kost over 5 jaar circa EUR 700 inclusief vervangende filters (EUR 80 per jaar) en eenmalige installatie (EUR 100). Een premium systeem (aanschaf EUR 800) kost over 5 jaar circa EUR 1.300. Ter vergelijking: flessenwater voor een gezin van 3 personen (4 liter per dag) kost over 5 jaar meer dan EUR 4.000. Na het eerste jaar is een osmosefilter altijd goedkoper dan flessenwater.',
  },
  {
    question: 'Is er subsidie beschikbaar voor een PFAS waterfilter?',
    answer:
      'In PFAS-hotspot-gebieden vergoeden sommige gemeenten en provincies de aanschaf van een waterfilter. De ILT (Inspectie Leefomgeving en Transport) coordineert in gebieden met ernstige PFAS-verontreiniging (zoals omgeving Dordrecht/Chemours) vergoedingsregelingen. Ook drinkwaterbedrijven zoals Evides bieden in specifieke postcodesgebieden vergoedingen of gratis installatie aan. Raadpleeg uw gemeente en het RIVM-loket voor actuele regelingen in uw regio.',
  },
  {
    question: 'Wat is goedkoper: filterpitcher of osmosefilter voor PFAS?',
    answer:
      'Op jaarbasis is een filterpitcher (EUR 80 filterkosten per jaar) goedkoper dan een osmosefilter (EUR 80-100 filterkosten plus afgeschreven aanschaf). Maar een filterpitcher verwijdert PFAS niet betrouwbaar (20-40% bij sommige modellen, niet gecertificeerd). De vergelijking is dus misleidend: de filterpitcher levert geen daadwerkelijke PFAS-bescherming. Voor effectieve PFAS-verwijdering is de goedkoopste betrouwbare optie een NSF/ANSI 53 gecertificeerd koolstofblok-filter (aanschaf EUR 100-300).',
  },
  {
    question: 'Hoeveel afvalwater produceert een osmosefilter en wat kost dat?',
    answer:
      'Oudere osmosesystemen produceren 3-4 liter afvalwater per liter gefilterd water. Moderne systemen (2023+) hebben een verhouding van 1:1 of 2:1. Bij een waterprijs van EUR 1,50 per m3 en een gezin van 3 dat 3 liter gefilterd water per dag gebruikt, kost het afvalwater bij een 2:1 verhouding circa EUR 3-4 per jaar. Dit is verwaarloosbaar in de totale kostenberekening.',
  },
  {
    question: 'Wat zijn de installatie kosten van een onderbouw osmosefilter?',
    answer:
      'Doe-het-zelf installatie is kosteloos als u basiskennis van loodgieterij heeft. De installatie duurt 1-2 uur. Benodigde gereedschappen zijn bij de meeste systemen inbegrepen. Professionele installatie door een erkend installateur kost EUR 100-200 per bezoek. Kiest u voor een 4-in-1 kokend-water-kraan met geintegreerde osmose, dan is professionele installatie aan te raden vanwege de elektrische component (EUR 150-250 installatiekosten).',
  },
  {
    question: 'Welk PFAS filter heeft de beste prijs-kwaliteitverhouding?',
    answer:
      'Voor de meeste huishoudens buiten PFAS-hotspot-gebieden biedt een NSF/ANSI 53 gecertificeerd koolstofblok-onderbouwfilter (EUR 100-300 aanschaf, EUR 100 per jaar) de beste prijs-kwaliteitverhouding voor langketenige PFAS. In PFAS-hotspot-gebieden of bij aanwezigheid van GenX is omgekeerde osmose (EUR 300-800 aanschaf, EUR 80 per jaar) de beste investering ondanks de hogere startkosten. Over 5 jaar zijn de totale kosten van een goede RO amper hoger dan van een middelmatig koolstoffilter.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Kosten', url: 'https://waterfilterplatform.nl/pfas-waterfilter/kosten' },
];

const budgetData = [
  {
    type: 'Filterpitcher',
    aanschaf: 'EUR 30-80',
    jaarkosten: 'EUR 80 (filter EUR 20/3 mnd)',
    tco5jaar: 'EUR 430-480',
    pfas: 'Niet gecertificeerd',
    aanbevolen: false,
  },
  {
    type: 'Onderbouw koolstof (NSF 53)',
    aanschaf: 'EUR 100-300',
    jaarkosten: 'EUR 100 (filter EUR 50/6 mnd)',
    tco5jaar: 'EUR 600-800',
    pfas: '60-90% (langketen)',
    aanbevolen: false,
  },
  {
    type: 'Omgekeerde osmose (RO)',
    aanschaf: 'EUR 300-800',
    jaarkosten: 'EUR 80 (filters EUR 80/jaar)',
    tco5jaar: 'EUR 700-1.200',
    pfas: '95-99% (alle PFAS)',
    aanbevolen: true,
  },
  {
    type: 'Professioneel (4-in-1 + RO)',
    aanschaf: 'EUR 800-2.000',
    jaarkosten: 'EUR 100-150',
    tco5jaar: 'EUR 1.300-2.750',
    pfas: '95-99% (alle PFAS)',
    aanbevolen: true,
  },
];

export default function PfasKostenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kosten PFAS waterfilter: aanschaf, TCO en subsidies (2026)',
          description:
            'Budgetvergelijking PFAS-waterfilters: pitcher EUR 30-80, onderbouw koolstof EUR 100-300, RO EUR 300-800, professioneel EUR 800-2000. TCO 5-jaar en subsidies.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          url: 'https://waterfilterplatform.nl/pfas-waterfilter/kosten',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Kosten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kosten PFAS waterfilter: aanschaf, jaarkosten en TCO over 5 jaar
          </h1>
          <QuickAnswer answer="PFAS-waterfilters varieren van EUR 30-80 (pitcher, niet gecertificeerd) tot EUR 800-2.000 (professioneel systeem). Een onderbouw osmosefilter kost EUR 300-800 aanschaf plus EUR 80 per jaar: totaal circa EUR 700-1.200 over 5 jaar. In PFAS-hotspots zijn subsidies beschikbaar via ILT en gemeenten." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Budgetvergelijking: aanschaf en TCO over 5 jaar
          </h2>
          <p className="text-gray-700 mb-4">
            De aanschafprijs is slechts een deel van de totale kosten van een PFAS-waterfilter. Jaarlijkse filtervervanging, installatie en waterverbruik bepalen samen de Total Cost of Ownership (TCO). Onderstaande tabel geeft een realistisch overzicht per filtertype, inclusief de effectiviteit voor PFAS-verwijdering.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Filtertype</th>
                  <th className="p-3 text-left">Aanschaf</th>
                  <th className="p-3 text-left">Jaarkosten</th>
                  <th className="p-3 text-left">TCO 5 jaar</th>
                  <th className="p-3 text-left">PFAS-verwijdering</th>
                  <th className="p-3 text-center">Aanbevolen</th>
                </tr>
              </thead>
              <tbody>
                {budgetData.map((f, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{f.type}</td>
                    <td className="p-3">{f.aanschaf}</td>
                    <td className="p-3">{f.jaarkosten}</td>
                    <td className="p-3 font-semibold">{f.tco5jaar}</td>
                    <td className={`p-3 text-sm ${f.aanbevolen ? 'text-green-700 font-semibold' : 'text-red-600'}`}>{f.pfas}</td>
                    <td className="p-3 text-center">
                      {f.aanbevolen ? (
                        <span className="text-green-600 font-bold">&#10003;</span>
                      ) : (
                        <span className="text-red-500">&#10007;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            TCO inclusief installatie (EUR 100 voor RO, EUR 0 voor pitcher). Filterkosten zijn gemiddelden; exacte kosten afhankelijk van merk en waterverbruik.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            TCO-berekening: osmosefilter vs. flessenwater over 5 jaar
          </h2>
          <p className="text-gray-700 mb-4">
            Een veelgehoord argument voor flessenwater is dat u "toch geen EUR 400-800 wilt investeren in een filter." De TCO-berekening laat zien dat dit redenering de lange-termijn kosten miskent.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-green-500 rounded-xl p-5">
              <h3 className="font-bold text-green-700 mb-3">Osmosefilter (budget RO)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex justify-between"><span>Aanschaf systeem</span><span className="font-semibold">EUR 350</span></li>
                <li className="flex justify-between"><span>Installatie (eenmalig)</span><span className="font-semibold">EUR 100</span></li>
                <li className="flex justify-between"><span>Filters per jaar x 5</span><span className="font-semibold">EUR 400</span></li>
                <li className="flex justify-between border-t pt-1 mt-1"><span className="font-bold">Totaal 5 jaar</span><span className="font-bold text-green-700">EUR 850</span></li>
                <li className="text-gray-500 text-xs mt-2">Bij 3 liter/dag gefilterd water: EUR 0,15 per liter</li>
              </ul>
            </div>
            <div className="border-2 border-red-400 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-3">Flessenwater (1,5L flessen)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex justify-between"><span>Aanschaf (geen)</span><span className="font-semibold">EUR 0</span></li>
                <li className="flex justify-between"><span>3 liter/dag x EUR 0,50/L x 365</span><span className="font-semibold">EUR 548</span></li>
                <li className="flex justify-between"><span>Per jaar x 5</span><span className="font-semibold">EUR 2.740</span></li>
                <li className="flex justify-between border-t pt-1 mt-1"><span className="font-bold">Totaal 5 jaar</span><span className="font-bold text-red-700">EUR 2.740</span></li>
                <li className="text-gray-500 text-xs mt-2">Geen PFAS-garantie. Inclusief plastic afval.</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            Na het eerste jaar beginnen de besparingen. Na 2 jaar heeft de osmosefilter zichzelf al terugverdiend. Over 5 jaar is het verschil EUR 1.890. Wilt u meer weten over het rendement van omgekeerde osmose?{' '}
            <Link href="/pfas-waterfilter/osmose" className="text-[#005F8A] underline">
              Lees onze pagina over osmose voor PFAS
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Subsidies en vergoedingen in PFAS-hotspot-gebieden
          </h2>
          <p className="text-gray-700 mb-4">
            In gebieden met ernstige PFAS-verontreiniging in het kraanwater zijn subsidies en vergoedingen beschikbaar via verschillende instanties. De regelingen veranderen regelmatig, maar dit zijn de bekende opties:
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">ILT (Inspectie Leefomgeving en Transport)</h3>
              <p className="text-gray-700 text-sm">
                In gebieden waar het drinkwater de EU-norm overschrijdt door industriele PFAS-vervuiling (met name omgeving Chemours/DuPont in Dordrecht), coordineert de ILT tijdelijke vergoedingsregelingen voor huishoudens. Aanvragen verlopen via het lokale meldpunt of gemeenteloket.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">Gemeente en provincie</h3>
              <p className="text-gray-700 text-sm">
                Sommige gemeenten in PFAS-hotspot-gebieden bieden subsidie of volledige vergoeding voor aanschaf van een gecertificeerd waterfilter. Raadpleeg uw gemeentewebsite of bel het loket. Provincie Zeeland en Provincie Noord-Brabant hebben in het verleden subsidies geboden aan bewoners nabij PFAS-bronlocaties.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaterbedrijven</h3>
              <p className="text-gray-700 text-sm">
                Drinkwaterbedrijven zoals Evides en Dunea hebben in specifieke postcodesgebieden gratis installatie van waterfilters aangeboden of tegemoetkomingen verstrekt. Neem contact op met uw drinkwaterbedrijf (vermeld op uw waterfactuur) en meld uw postcode.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">Civiele aansprakelijkheid</h3>
              <p className="text-gray-700 text-sm">
                In gebieden waar een veroorzaker juridisch aansprakelijk is gesteld voor PFAS-verontreiniging (zoals Chemours), bestaat de mogelijkheid de kosten van een waterfilter te verhalen via civiele procedures of collectieve schadesregelingen. Raadpleeg een advocaat of meld u aan bij een bewonersorganisatie.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filtervervanging en onderhoudskosten realistisch inschatten
          </h2>
          <p className="text-gray-700 mb-4">
            Een van de meest onderschatte kostenposten bij waterfilters is de filtervervanging. Fabrikanten geven vaak optimistische vervangingstermijnen op; in de praktijk zijn kortere intervallen verstandig, zeker in gebieden met hogere verontreinigingsconcentraties.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                component: 'Sedimentvoorfilter (5 micron)',
                interval: '6-12 maanden',
                kosten: 'EUR 8-15 per filter',
                tip: 'In PFAS-hotspots: vervang elke 6 maanden om het RO-membraan te beschermen.',
              },
              {
                component: 'Actief-kool voorfilter',
                interval: '6-12 maanden',
                kosten: 'EUR 10-20 per filter',
                tip: 'Verwijdert chloor en organische stoffen voor het membraan. Verlengt de membraanlevensduur aanzienlijk.',
              },
              {
                component: 'RO-membraan',
                interval: '2-5 jaar (3 jaar in hotspot)',
                kosten: 'EUR 30-80',
                tip: 'Monitor TDS-waarde maandelijks. Stijging boven 30 mg/L wijst op membraanslijtage.',
              },
              {
                component: 'Nafilter (koolstof)',
                interval: '12 maanden',
                kosten: 'EUR 10-20',
                tip: 'Verbetert smaak en geur van het gefilterde water. Goedkoop maar belangrijk voor waterkwaliteit.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-[#005F8A]">{item.component}</h3>
                  <span className="text-sm text-gray-500 ml-4">{item.interval}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-1">{item.kosten}</p>
                <p className="text-sm text-gray-600">{item.tip}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-6">
            Wilt u weten welke systemen de beste prijs-kwaliteitverhouding bieden?{' '}
            <Link href="/pfas-waterfilter/kopen" className="text-[#005F8A] underline">
              Bekijk onze koopgids voor PFAS-waterfilters
            </Link>{' '}
            of lees de{' '}
            <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">
              technische uitleg over omgekeerde osmose
            </Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section className="mb-10 mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over kosten van PFAS-waterfilters
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg">
                <summary className="p-4 font-semibold text-[#005F8A] cursor-pointer hover:bg-gray-50">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter/osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose voor PFAS</h3>
              <p className="text-sm text-gray-600">Waarom RO de beste keuze is, hoe het werkt en welke certificering u nodig heeft</p>
            </Link>
            <Link href="/pfas-waterfilter/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter kopen</h3>
              <p className="text-sm text-gray-600">Beste modellen, wat u moet letten op NSF-certificering en waar u kunt kopen</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken: omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Technische uitleg over hoe RO-membranen werken, onderhoud en levensduur</p>
            </Link>
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp: welk filter past bij uw budget?</h3>
              <p className="text-sm text-gray-600">Interactieve keuzehulp: vind het beste waterfilter voor uw budget en situatie</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
