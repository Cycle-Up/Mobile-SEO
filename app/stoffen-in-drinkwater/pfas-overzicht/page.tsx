import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'PFAS in drinkwater -- PFOA, PFOS en de nieuwe EU-norm',
  description:
    'PFAS in drinkwater: eeuwige chemicalien, 4.700+ stoffen en nieuwe EU-norm 2026 (som 4 PFAS max 0,1 ug/L). Nederlandse hotspots en hoe osmose 90%+ verwijdert.',
  alternates: { canonical: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/pfas-overzicht' },
};

export default function PfasOverzichtPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Stoffen in drinkwater', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater' },
        { name: 'PFAS in drinkwater — PFOA, PFOS en de nieuwe EU-norm', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/pfas-overzicht' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Wat zijn PFAS in drinkwater?", answer: "PFAS zijn meer dan 4.700 synthetische chemicalien met een fluorkoolstofketen die vrijwel niet afbreken in het milieu of het menselijk lichaam. Bekende voorbeelden zijn PFOA en PFOS, vroeger gebruikt in Teflon en blusschuim." },
        { question: "Wat is de EU-norm voor PFAS in drinkwater?", answer: "Vanaf 2026 geldt een EU-norm van maximaal 0,1 microgram per liter voor de som van de vier meest zorgelijke PFAS (PFOA, PFOS, PFNA en PFHxS). Voor de som van alle meetbare PFAS is de norm 0,5 ug/L." },
        { question: "Hoe verwijder je PFAS uit drinkwater?", answer: "Omgekeerde osmose (RO) is de enige consumentenoplossing die PFAS effectief verwijdert: 90-99% van PFAS-verbindingen wordt tegengehouden door het semi-permeabele membraan. Actief koolfilters zijn minder betrouwbaar, vooral voor kortketenige PFAS." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'PFAS in drinkwater -- PFOA, PFOS en de nieuwe EU-norm',
        description: 'PFAS in drinkwater: eeuwige chemicalien, 4.700+ stoffen en nieuwe EU-norm 2026 (som 4 PFAS max 0,1 ug/L). Nederlandse hotspots en hoe osmose 90%+ verwijdert.',
        datePublished: '2026-01-01',
        url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/pfas-overzicht',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; PFAS
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            PFAS in drinkwater -- PFOA, PFOS en de nieuwe EU-norm
          </h1>
          <QuickAnswer answer="PFAS zijn meer dan 4.700 synthetische chemicalien die nauwelijks afbreken in het milieu of het menselijk lichaam -- vandaar de naam 'eeuwige chemicalien'. De EU-norm voor de som van de vier meest zorgelijke PFAS wordt in 2026 vastgesteld op maximaal 0,1 ug/L. Omgekeerde osmose verwijdert 90% of meer van PFAS-verbindingen." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat zijn PFAS?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PFAS staat voor poly- en perfluoralkylstoffen: een grote groep van meer dan 4.700 synthetische chemicalien met een fluorkoolstofketen als basis. De koolstof-fluorbinding is een van de sterkste in de organische chemie, wat maakt dat PFAS vrijwel niet afbreken in de natuur, de bodem, het water of het menselijk lichaam.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bekende PFAS zijn PFOA (perfluoroctaanzuur), gebruikt in de productie van Teflon, en PFOS (perfluoroctaansulfonzuur), vroeger gebruikt in blusschuim en textielbehandeling. Beide zijn inmiddels verboden in de EU, maar ze persisteren in het milieu.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
            <p className="font-semibold text-blue-800 mb-1">Bioaccumulatie</p>
            <p className="text-blue-700 text-sm">PFAS hopen op in het menselijk lichaam, met name in bloed en lever. De halfwaardetijd van PFOS in menselijk bloed is gemiddeld 5 jaar. Langdurige blootstelling is in verband gebracht met schildklierproblemen, verhoogd cholesterol en een verminderde immuunrespons.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">De nieuwe EU-norm voor 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            De herziene Europese Drinkwaterrichtlijn stelt vanaf 2026 een nieuwe parameterwaarde in voor PFAS in drinkwater. Voor de som van de vier meest relevante PFAS (PFOA, PFOS, PFNA en PFHxS) geldt een maximumconcentratie van 0,1 microgram per liter. Voor de som van alle meetbare PFAS geldt 0,5 ug/L.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Nederlandse drinkwaterbedrijven moeten hun zuiveringsprocessen aanpassen om aan deze normen te voldoen. Actief kool op grote schaal en hoogdrukfiltratie zijn de meest toegepaste technieken bij waterzuiveringsinstallaties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Nederlandse hotspots</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            In Nederland zijn verhoogde PFAS-concentraties aangetroffen in de buurt van:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-3">
            <li>Militaire vliegbases (Eindhoven, Volkel, Soesterberg) waar blusschuim met PFOS is gebruikt</li>
            <li>Landbouwgebieden waar PFAS-houdende meststoffen of pesticiden zijn gebruikt</li>
            <li>Industrieterreinen met historisch gebruik van PFAS in productieprocessen</li>
            <li>Brandweerkazernes en oefenterreinen</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Bewoners in deze gebieden kunnen hun drinkwaterbedrijf raadplegen voor actuele PFAS-metingen. Meer informatie op onze pagina: <Link href="/leidingwater/pfas" className="text-[#005F8A] hover:underline">PFAS in leidingwater</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Osmose verwijdert 90%+ van PFAS</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose</Link> (RO) is momenteel de enige consumentenoplossing die PFAS effectief verwijdert. Het semi-permeabele membraan houdt moleculen op basis van grootte en lading tegen. PFAS-moleculen, ondanks hun relatief kleine formaat, worden door goed gecertificeerde RO-systemen voor 90-99% tegengehouden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Actief koolfilters hebben een beperkte effectiviteit tegen PFAS: kortketenige PFAS (zoals PFBA en PFHxA) worden slecht geadsorbeerd. RO-systemen gecertificeerd voor NSF/ANSI 58 en getest op PFAS bieden de meeste zekerheid.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welk filter filtert dit?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Osmose: enige betrouwbare PFAS-oplossing</Link></li>
            <li><Link href="/keurmerken/nsf-ansi-401" className="text-[#005F8A] hover:underline">NSF/ANSI 401 certificering voor PFAS</Link></li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter gids</h3>
              <p className="text-sm text-gray-600">Complete gids voor PFAS-filtratie: welke technologie, kosten en certificering.</p>
            </Link>
            <Link href="/pfas-waterfilter/gebieden-nederland" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS-hotspots Nederland</h3>
              <p className="text-sm text-gray-600">Kaart van risicogebieden in Nederland en wat dit betekent voor uw drinkwater.</p>
            </Link>
            <Link href="/drinkwaternormen/pfas" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS drinkwaternormen</h3>
              <p className="text-sm text-gray-600">EU-norm 0,1 ug/L voor de som van 20 PFAS-stoffen: achtergrond en handhaving.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Hoe RO-membranen werken en waarom ze de meest effectieve PFAS-barriere zijn.</p>
            </Link>
          </div>
        </section>

        <HealthDisclaimer />
        <CTABanner context="osmose" />
      </div>
    </>
  );
}
