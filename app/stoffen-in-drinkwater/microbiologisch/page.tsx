import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Microbiologische risicos in drinkwater -- bacterien, virussen en protozoen | WaterfilterPlatform',
  description:
    'E.coli, Legionella, Cryptosporidium en norovirus in drinkwater: normen, risicos en wanneer extra filtering nodig is. UV-sterilisatie en ultrafiltratie als.',
  alternates: { canonical: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/microbiologisch' },
};

export default function MicrobiologischPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Stoffen in drinkwater', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater' },
        { name: 'Microbiologische risicos in drinkwater — bacterien, virussen en protozoen', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/microbiologisch' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Is Nederlands leidingwater microbiologisch veilig?", answer: "Ja, Nederlands leidingwater is microbiologisch veilig dankzij chloordesinfectie en meerfasige zuivering. E. coli-overschrijdingen worden zelden gerapporteerd. Risicos bestaan wel bij eigen waterputten, na overstroming of bij problemen in het warmwatercircuit." },
        { question: "Hoe voorkom je Legionella in drinkwater?", answer: "Legionella groeit bij watertemperaturen tussen 20 en 45 graden Celsius. Preventie: houd warm water boven 60 graden (70 graden aanbevolen voor leidingen), vermijd temperatuurlagen in de boiler en spoel zelden gebruikte leidingen periodiek door." },
        { question: "Welk filter beschermt tegen bacterien en virussen in water?", answer: "UV-sterilisatie inactiveert bacterien, virussen en protozoen inclusief chloorresistente Cryptosporidium. Ultrafiltratie (UF) met membranen van 0,01-0,1 micron verwijdert bacterien en grote virusdeeltjes fysiek. Combinatie van UV en UF biedt de meest robuuste bescherming." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'Microbiologische risicos in drinkwater -- bacterien, virussen en protozoen',
        description: 'E.coli, Legionella, Cryptosporidium en norovirus in drinkwater: normen, risicos en wanneer extra filtering nodig is. UV-sterilisatie en ultrafiltratie als.',
        datePublished: '2026-01-01',
        url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/microbiologisch',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; Microbiologisch
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Microbiologische risicos in drinkwater -- bacterien, virussen en protozoen
          </h1>
          <QuickAnswer answer="Nederlands leidingwater is microbiologisch veilig dankzij chloordesinfectie en meerfasige zuivering. Risicos bestaan wel bij eigen waterputten, na overstroming of bij tekortkomingen in het warmwatercircuit (Legionella). UV-sterilisatie en ultrafiltratie (UF) zijn effectieve aanvullende oplossingen voor deze situaties." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">E. coli: indicator voor fecale besmetting</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Escherichia coli (E. coli) is de belangrijkste indicatororganisme voor fecale besmetting van drinkwater. De norm in het Drinkwaterbesluit is 0 kolonievormende eenheden per 100 milliliter (0/100 ml) -- iedere aantoonbare aanwezigheid is een overschrijding.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            In het Nederlandse leidingnet worden E. coli-overschrijdingen zelden gerapporteerd. Het risico is reeler bij particuliere waterputten, regenwatersystemen of bij aansluitingen die rechtstreeks contact maken met bodem of oppervlaktewater.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Legionella in warmwatersystemen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Legionella pneumophila groeit optimaal bij watertemperaturen tussen 20 en 45 graden Celsius en is de verwekker van de veteranenziekte (legionellose), een ernstige longontsteking. Besmetting verloopt via inhalatie van kleine waterdruppels (aerosolen), niet via drinken.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Het warmwatersysteem in woningen en gebouwen is het grootste risico. Preventie: houd warm water boven 60 graden Celsius (70 graden wordt aanbevolen voor leidingen), vermijd temperatuurlagen in de boiler en spoel zelden gebruikte leidingen periodiek door.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
            <p className="font-semibold text-red-800 mb-1">Risicogroepen</p>
            <p className="text-red-700 text-sm">Ouderen, rokers, mensen met een verminderd immuunsysteem en COPD-patienten hebben een verhoogd risico op ernstige legionellose. Ziekenhuizen en woonzorgcentra zijn wettelijk verplicht tot legionellabeheersplannen.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Cryptosporidium en Giardia: chloorresistente protozoen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Cryptosporidium en Giardia zijn parasitaire protozoen die via fecale besmetting (dieren, mensen) in oppervlaktewater terechtkomen. Hun oocysten zijn bijzonder resistent tegen chloor -- standaard chloordesinfectie is onvoldoende om deze organismen te inactiveren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            UV-straling is de aangewezen methode voor inactivering. Nederlandse drinkwaterbedrijven die oppervlaktewater verwerken, passen vrijwel altijd UV-behandeling toe. Voor huishoudens met een eigen bron of na een overstromingsgebeurtenis is een UV-systeem sterk aanbevolen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Norovirus en andere virussen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Norovirus is een van de meest veelvoorkomende oorzaken van voedsel- en watergerelateerde gastro-enteritis. Net als andere enterale virussen kan het via fecaal verontreinigd water worden overgedragen. Chloor vermindert norovirus, maar bij hoge belasting of bij putten zonder desinfectie is extra behandeling nodig.
          </p>
          <p className="text-gray-700 leading-relaxed">
            UV-sterilisatie op het juiste vermogen (minimaal 40 mJ/cm2) inactiveert virussen effectief. UF-membranen (ultrafiltratie, porieen 0,01-0,1 micron) kunnen virussen fysiek tegenhouden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wanneer is extra filtering nodig?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Voor regulier leidingwater is extra microbiologische filtering niet noodzakelijk. Extra filtering is wel zinvol bij:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-3">
            <li>Gebruik van een eigen grondwaterput of regenwatertank</li>
            <li>Na overstroming waarbij het leidingnet mogelijk is besmet</li>
            <li>Tijdelijke waarschuwing van het drinkwaterbedrijf (kookadvies)</li>
            <li>Personen met een ernstig verzwakt immuunsysteem (chemotherapie, transplantatie)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">UV-sterilisatie en ultrafiltratie als oplossingen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <Link href="/filtertechnieken/uv-sterilisatie" className="text-[#005F8A] hover:underline">UV-sterilisatoren</Link> verstoren het DNA van micro-organismen en voorkomen reproductie. Ze zijn effectief tegen bacterien, virussen en protozoen -- inclusief chloorresistente Cryptosporidium. UV werkt niet voor chemische verontreinigingen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] hover:underline">Ultrafiltratiesystemen (UF)</Link> gebruiken holle vezelmembranen met een poriegrootte van 0,01 tot 0,1 micron. Ze verwijderen bacterien, protozoen en grote virusdeeltjes fysiek. Combinatie van UV en UF biedt de meest robuuste microbiologische bescherming voor huishoudelijk gebruik.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welk filter filtert dit?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><Link href="/filtertechnieken/uv-sterilisatie" className="text-[#005F8A] hover:underline">UV vernietigt bacterien en virussen</Link></li>
            <li><Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] hover:underline">UF: fysieke barriere voor bacterien</Link></li>
          </ul>
        </section>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
