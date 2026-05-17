import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'PFAS normen 2026: EU-limiet, Nederlandse situatie en wat het betekent',
  description:
    'De nieuwe EU PFAS-norm (0,10 µg/L sum-20) uitgelegd: welke 20 stoffen tellen mee, hoe Nederland implementeert, wat er veranderde en wat het betekent voor uw.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter/normen-2026' },
};

const faqItems = [
  {
    question: 'Wat is de PFAS-norm voor drinkwater in Nederland in 2026?',
    answer:
      'Sinds 2026 geldt de EU-drinkwaterrichtlijn (2020/2184) in Nederland. De norm is 0,10 µg/L voor de som van 20 prioritaire PFAS-verbindingen (sum-20). Voor de vier meest toxische verbindingen samen (PFOS, PFOA, PFNA en PFHxS) geldt een strengere aparte norm van 0,05 µg/L. Nederlandse drinkwaterbedrijven zijn wettelijk verplicht hieraan te voldoen via het Drinkwaterbesluit.',
  },
  {
    question: 'Welke 20 PFAS tellen mee in de EU-norm?',
    answer:
      'De PFAS-20 omvat: PFOS, PFOA, PFNA, PFHxS, PFHxA, PFBA, PFPeA, PFHpA, PFDA, PFUnDA, PFDoDA, PFTA, PFBS, PFPeS, PFHxS (aparte parameter), PFHpS, PFOS (aparte parameter), PFDS, PFUnDS en PFNS. De vier stoffen met de strengste grenswaarde (0,05 µg/L samen) zijn PFOS, PFOA, PFNA en PFHxS.',
  },
  {
    question: 'Waarom is de PFAS-norm in 2026 veranderd?',
    answer:
      'De EU erkent nu mengselwerking: meerdere PFAS-verbindingen samen zijn schadelijker dan de som van de afzonderlijke effecten. De oude norm keek alleen naar individuele stoffen. De nieuwe sum-20 aanpak is realistischer voor de blootstelling die mensen in de praktijk ondervinden. Bovendien zijn de gezondheidskundige inzichten over PFAS sterk verbeterd na EFSA-rapporten uit 2018 en 2020.',
  },
  {
    question: 'Is 0,10 µg/L een veilig niveau voor PFAS in drinkwater?',
    answer:
      'Nee, 0,10 µg/L is een wettelijke grenswaarde — niet hetzelfde als een "veilig niveau". Het EFSA (European Food Safety Authority) concludeerde in 2020 dat er bij de huidige blootstelling aan PFOS en PFOA eigenlijk geen volkomen veilige drempelwaarde bestaat. De EU heeft 0,10 µg/L vastgesteld als pragmatisch haalbare norm voor drinkwaterbedrijven, rekening houdend met technische en economische haalbaarheid.',
  },
  {
    question: 'Hoe verhoudt de nieuwe EU-norm zich tot de EFSA-richtlijnen?',
    answer:
      'De EFSA stelde in 2020 een Tolerable Weekly Intake (TWI) van 4,4 ng per kg lichaamsgewicht per week in voor de som van PFOS, PFOA, PFNA en PFHxS. Vertaald naar drinkwater zou dit neerkomen op een grenswaarde van ongeveer 0,02-0,05 µg/L voor die vier stoffen. De EU-norm van 0,05 µg/L voor die vier stoffen is hiermee redelijk in lijn, maar de totale blootstelling via voedsel en andere bronnen wordt hierbij niet meegerekend.',
  },
  {
    question: 'Wat zijn de gevolgen als drinkwater de PFAS-norm overschrijdt?',
    answer:
      'Als een drinkwaterbedrijf de norm overschrijdt, is het wettelijk verplicht om de consument te informeren, maatregelen te treffen (extra zuivering, menging met schoner water) en een actieplan te publiceren. Het water mag niet langer als drinkwater worden aangeboden totdat de waarden weer onder de norm liggen. Particuliere putwater-eigenaren hebben geen wettelijke bescherming via het drinkwaterbedrijf.',
  },
  {
    question: 'Voldoet Nederlands leidingwater aan de nieuwe PFAS-norm?',
    answer:
      'De overgrote meerderheid van het Nederlandse leidingwater voldoet aan de EU-norm van 2026. Bekende knelpuntgebieden zijn historisch verbonden met industriele bronnen: de omgeving van Chemours in Dordrecht en de regio Schiphol. Oasen (drinkwaterbedrijf Dordrecht) past al jaren actieve koolstoffiltratie toe en voldoet nu aan de norm.',
  },
  {
    question: 'Wat veranderde er voor particuliere putwater-eigenaren door de nieuwe norm?',
    answer:
      'De EU-norm geldt formeel alleen voor drinkwaterbedrijven. Eigenaren van particuliere putten of bronwater vallen buiten de wettelijke monitoring. Gemeenten in bekende risicogebieden adviseren putwater-eigenaren echter om hun water te laten testen en eventueel te filteren. Sommige gemeenten bieden gratis of gesubsidieerde tests aan voor putten in PFAS-hotspot-zones.',
  },
];

const pfas20Lijst = [
  { naam: 'PFOS', voluit: 'Perfluoroctaansulfonzuur', keten: 'C8', groep: 'PFAS-4 (strengste norm)' },
  { naam: 'PFOA', voluit: 'Perfluoroctaanzuur', keten: 'C8', groep: 'PFAS-4 (strengste norm)' },
  { naam: 'PFNA', voluit: 'Perfluornonanzuur', keten: 'C9', groep: 'PFAS-4 (strengste norm)' },
  { naam: 'PFHxS', voluit: 'Perfluorhexaansulfonzuur', keten: 'C6', groep: 'PFAS-4 (strengste norm)' },
  { naam: 'PFHxA', voluit: 'Perfluorhexaanzuur', keten: 'C6', groep: 'Sum-20' },
  { naam: 'PFBA', voluit: 'Perfluorbutaanzuur', keten: 'C4', groep: 'Sum-20' },
  { naam: 'PFPeA', voluit: 'Perfluorpentaanzuur', keten: 'C5', groep: 'Sum-20' },
  { naam: 'PFHpA', voluit: 'Perfluorheptaanzuur', keten: 'C7', groep: 'Sum-20' },
  { naam: 'PFDA', voluit: 'Perfluordecaanzuur', keten: 'C10', groep: 'Sum-20' },
  { naam: 'PFUnDA', voluit: 'Perfluorundecaanzuur', keten: 'C11', groep: 'Sum-20' },
  { naam: 'PFDoDA', voluit: 'Perfluordodecaanzuur', keten: 'C12', groep: 'Sum-20' },
  { naam: 'PFTA', voluit: 'Perfluortetradecaanzuur', keten: 'C14', groep: 'Sum-20' },
  { naam: 'PFBS', voluit: 'Perfluorbutaansulfonzuur', keten: 'C4', groep: 'Sum-20' },
  { naam: 'PFPeS', voluit: 'Perfluorpentaansulfonzuur', keten: 'C5', groep: 'Sum-20' },
  { naam: 'PFHpS', voluit: 'Perfluorheptaansulfonzuur', keten: 'C7', groep: 'Sum-20' },
  { naam: 'PFDS', voluit: 'Perfluordecaansulfonzuur', keten: 'C10', groep: 'Sum-20' },
  { naam: 'PFUnDS', voluit: 'Perfluorundecaansulfonzuur', keten: 'C11', groep: 'Sum-20' },
  { naam: 'PFNS', voluit: 'Perfluornonaansulfonzuur', keten: 'C9', groep: 'Sum-20' },
  { naam: '6:2 FTS', voluit: '6:2 Fluortelomeersulfonzuur', keten: 'C8', groep: 'Sum-20' },
  { naam: '8:2 FTS', voluit: '8:2 Fluortelomeersulfonzuur', keten: 'C10', groep: 'Sum-20' },
];

const tijdlijn = [
  { jaar: '2000-2015', beschrijving: 'Individuele normen voor PFOS en PFOA vastgesteld. Brede PFAS-groep nog niet gemonitord.' },
  { jaar: '2018', beschrijving: 'EFSA publiceert TWI voor PFOS en PFOA — laat zien dat huidige blootstelling al de gezondheidsgrens overschrijdt.' },
  { jaar: '2020', beschrijving: 'EU geeft nieuwe Drinkwaterrichtlijn 2020/2184 uit. Sum-20 PFAS parameter geintroduceerd. EFSA verlaagt TWI verder.' },
  { jaar: '2021', beschrijving: 'Implementatietermijn voor EU-lidstaten begint. Nederland past Drinkwaterbesluit aan.' },
  { jaar: '2026', beschrijving: 'Definitieve inwerkingtreding EU-norm: 0,10 µg/L sum-20 PFAS. Nederlandse drinkwaterbedrijven zijn wettelijk getoetst.' },
];

export default function PfasNormen2026Page() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
        { name: 'Normen 2026', url: 'https://waterfilterplatform.nl/pfas-waterfilter/normen-2026' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'PFAS normen 2026: EU-limiet, Nederlandse situatie en wat het betekent',
          description: 'De nieuwe EU PFAS-norm (0,10 µg/L sum-20) uitgelegd: welke 20 stoffen tellen mee, hoe Nederland implementeert en wat het betekent voor uw drinkwater.',
          datePublished: '2026-04-25',
          dateModified: '2026-04-25',
          url: 'https://waterfilterplatform.nl/pfas-waterfilter/normen-2026',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:text-[#005F8A]">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-[#003F5C]">Normen 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS normen 2026: EU-limiet, Nederlandse situatie en wat het betekent
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            De EU-drinkwaterrichtlijn 2020/2184 is vanaf 2026 volledig van kracht in Nederland. De nieuwe PFAS-norm van 0,10 µg/L voor de som van 20 verbindingen is strenger, breder en wetenschappelijk beter onderbouwd dan de oude individuele normen. Wat veranderde er, welke stoffen tellen mee en wat betekent het voor uw drinkwater?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#pfas20"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              De 20 PFAS-verbindingen
            </Link>
            <Link
              href="/pfas-waterfilter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Terug naar PFAS hub
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="De EU-norm voor PFAS in drinkwater is 0,10 µg/L voor de som van 20 verbindingen (sum-20), van kracht in 2026. Voor PFOS, PFOA, PFNA en PFHxS samen geldt een strengere norm van 0,05 µg/L. Dit is een pragmatische grenswaarde, niet een volkomen veilig niveau. De meeste Nederlandse drinkwaterbedrijven voldoen aan de norm." />

        {/* Wat veranderde */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat veranderde er in 2026?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor 2026 bestonden er alleen normen voor afzonderlijke PFAS-verbindingen, met name voor PFOS en PFOA. Het probleem: in de praktijk zijn mensen blootgesteld aan tientallen verschillende PFAS tegelijk. Elke stof kon onder de individuele grenswaarde vallen terwijl de totale belasting toch schadelijk was. De nieuwe sum-20 aanpak lost dit op door de optelsom te reguleren.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De veranderingen zijn vastgelegd in EU-drinkwaterrichtlijn 2020/2184 en in Nederland vertaald naar het Drinkwaterbesluit. De richtlijn verplichtte lidstaten een implementatieperiode van vijf jaar, met 2026 als definitieve deadline voor volledige naleving.
          </p>
          <div className="space-y-3 mb-4">
            {tijdlijn.map(t => (
              <div key={t.jaar} className="flex gap-4 items-start">
                <div className="w-20 shrink-0 text-right">
                  <span className="text-xs font-bold text-[#005F8A] bg-[#E0F2FE] px-2 py-0.5 rounded">{t.jaar}</span>
                </div>
                <div className="flex-1 border-l-2 border-[#E0F2FE] pl-4 pb-3">
                  <p className="text-gray-700 text-sm leading-relaxed">{t.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Twee grenswaarden */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De twee grenswaarden van de EU-norm</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De nieuwe EU-norm kent twee lagen voor PFAS in drinkwater:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
            <div className="bg-[#E0F2FE] rounded-2xl p-5">
              <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-2">Sum-20 PFAS parameter</p>
              <p className="text-4xl font-bold text-[#003F5C] mb-2">0,10 µg/L</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                De som van alle 20 aangewezen PFAS-verbindingen in drinkwater mag dit niveau niet overschrijden. Dit is de brede norm die alle prioritaire PFAS omvat.
              </p>
            </div>
            <div className="bg-[#E0F2FE] rounded-2xl p-5">
              <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-2">PFAS-4: PFOS + PFOA + PFNA + PFHxS</p>
              <p className="text-4xl font-bold text-[#003F5C] mb-2">0,05 µg/L</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Voor de vier meest toxische en bioaccumulerende stoffen samen geldt een strengere norm van 0,05 µg/L — de helft van de algemene sum-20 grenswaarde.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-yellow-800 mb-1">Belangrijk: norm is geen garantie voor veiligheid</p>
            <p>
              Het EFSA concludeerde in 2020 dat de huidige gemiddelde PFAS-blootstelling van Europeanen (via voedsel, drinkwater en lucht samen) de gezondheidskundige grenswaarde al overschrijdt. De EU-drinkwaternorm is gebaseerd op technische haalbaarheid, niet op een risicovrij niveau. Bioaccumulatie en chronische lage-dosis blootstelling blijven een punt van zorg, ook bij waarden onder de norm.
            </p>
          </div>
        </section>

        {/* De 20 PFAS */}
        <section id="pfas20">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke 20 PFAS zijn opgenomen in de sum-20?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De EU heeft op basis van wetenschappelijk bewijs voor gezondheidseffecten, verspreiding en meetbaarheid 20 prioritaire PFAS-verbindingen aangewezen voor de sum-parameter. De vier met de strengste gecombineerde norm zijn gemarkeerd.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold text-xs">Afkorting</th>
                  <th className="text-left py-2 px-2 font-semibold text-xs">Volledige naam</th>
                  <th className="text-center py-2 px-2 font-semibold text-xs">Keten</th>
                  <th className="text-center py-2 px-2 font-semibold text-xs">Groep</th>
                </tr>
              </thead>
              <tbody>
                {pfas20Lijst.map((p, i) => (
                  <tr key={p.naam} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${p.groep.includes('PFAS-4') ? 'font-semibold' : ''}`}>
                    <td className="py-2 px-3 text-xs font-mono text-[#003F5C]">{p.naam}</td>
                    <td className="py-2 px-2 text-xs text-gray-700">{p.voluit}</td>
                    <td className="py-2 px-2 text-xs text-center text-gray-600">{p.keten}</td>
                    <td className="py-2 px-2 text-xs text-center">
                      {p.groep.includes('PFAS-4')
                        ? <span className="text-red-700 font-semibold">PFAS-4</span>
                        : <span className="text-gray-500">Sum-20</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">Bron: EU-drinkwaterrichtlijn 2020/2184, Bijlage I, Deel B. Bijgewerkt mei 2026.</p>
        </section>

        {/* Nederlandse implementatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Nederlandse implementatie: het Drinkwaterbesluit</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nederland heeft de EU-richtlijn vertaald naar het Drinkwaterbesluit, de wettelijke basis voor drinkwaterkwaliteit. De implementatie verplichtte drinkwaterbedrijven tot:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm leading-relaxed">
            <li>Uitbreiden van de PFAS-monitoring naar alle 20 verbindingen (was voorheen alleen PFOS en PFOA verplicht)</li>
            <li>Jaarlijkse publicatie van de gemeten sum-20 en PFAS-4 waarden in het drinkwaterkwaliteitsverslag</li>
            <li>Investeren in aanvullende zuivering (actief kool granulaat, ionenwisselaars, membraanfiltratie) waar nodig</li>
            <li>Informatieplicht aan consumenten bij (dreigende) normoverschrijding</li>
            <li>Actieplan indienen bij RIVM en Inspectie Leefomgeving en Transport (ILT) bij overschrijding</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Drinkwaterbedrijven die de norm (tijdelijk) niet halen, zijn verplicht om consumenten te informeren, alternatief drinkwater te regelen en een herstelplan te publiceren. De overheid monitort de naleving via de ILT.
          </p>
        </section>

        {/* NL status */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Huidige status in Nederland: wie voldoet, wie niet?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De overgrote meerderheid van de Nederlandse drinkwaterbedrijven voldoet aan de EU-norm. De meest bekende knelpuntgebieden zijn:
          </p>
          <div className="space-y-3 mb-4">
            <div className="border border-gray-100 rounded-xl p-4 text-sm">
              <p className="font-semibold text-[#003F5C] mb-1">Dordrecht/Papendrecht (Oasen)</p>
              <p className="text-gray-700 leading-relaxed">Historisch het meest belast door uitstoot van Chemours (voorheen DuPont). Oasen past al jaren actieve koolstoffiltratie toe op de waterwinningstations. Voldoet nu aan de EU-norm, maar de situatie wordt intensief gemonitord.</p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4 text-sm">
              <p className="font-semibold text-[#003F5C] mb-1">Regio Schiphol (Waternet)</p>
              <p className="text-gray-700 leading-relaxed">PFAS uit jarenlang gebruik van AFFF-blusschuim heeft het grondwater beinvloed. Waternet monitort het drinkwater rondom Schiphol intensief. Drinkwater voor Amsterdam voldoet aan de norm.</p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4 text-sm">
              <p className="font-semibold text-[#003F5C] mb-1">Overige regio&apos;s</p>
              <p className="text-gray-700 leading-relaxed">Buiten de bekende hotspots voldoet het leidingwater in de overige provincies ruim aan de sum-20 norm. Provincies als Friesland, Drenthe, Groningen en Zeeland worden ook gemonitord op industriele PFAS-bronnen.</p>
            </div>
          </div>
        </section>

        {/* Vergelijking met EFSA */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">EU-norm vs. EFSA-aanbevelingen: een kritische blik</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het EFSA (Europese voedselveiligheidsautoriteit) stelde in 2020 een Tolerable Weekly Intake (TWI) in voor de vier schadelijkste PFAS: 4,4 nanogram per kilogram lichaamsgewicht per week, voor PFOS, PFOA, PFNA en PFHxS samen. Voor een persoon van 70 kg betekent dit een maximale wekelijkse inname van 308 nanogram.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Vertaald naar drinkwater (2 liter per dag) zou dit neerkomen op een grenswaarde van circa 0,022 µg/L voor die vier stoffen. De EU-norm van 0,05 µg/L is daarmee ongeveer 2x hoger dan wat de EFSA gezondheidskundig zou adviseren voor drinkwater alleen — maar de EU neemt aan dat drinkwater niet de enige blootstellingsroute is. Voedsel, verpakkingen en lucht leveren ook bij.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kortom: ook bij drinkwater dat voldoet aan de EU-norm, is het niet uitgesloten dat de totale PFAS-blootstelling de EFSA-grens overschrijdt. Dit is de reden waarom consumentenorganisaties en milieudeskundigen kritisch zijn op de EU-norm en extra filtratie aanbevelen voor kwetsbare groepen (kinderen, zwangere vrouwen).
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/pfas-waterfilter', label: 'PFAS waterfilter: complete gids' },
              { href: '/pfas-waterfilter/kopen', label: 'PFAS waterfilter kopen: beste modellen' },
              { href: '/pfas-waterfilter/testen', label: 'PFAS in uw water laten testen' },
              { href: '/pfas-waterfilter/gebieden-nederland', label: 'PFAS risicogebieden in Nederland' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: complete gids' },
              { href: '/pfas-water', label: 'PFAS in drinkwater: risicos en normen' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2.5 border border-[#E0F2FE]"
              >
                <span>&#8594;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over PFAS normen 2026</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-[#003F5C] cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

      </div>
    </>
  );
}
