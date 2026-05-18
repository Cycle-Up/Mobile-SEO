import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Zware metalen in drinkwater -- lood, koper, chroom en arseen',
  description:
    'Welke zware metalen zitten er in drinkwater? Leer over lood in leidingwater, koper, arseen en chroom-6: normen, gezondheidsrisicos en hoe osmose 90-95%.',
  alternates: { canonical: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/zware-metalen' },
};

export default function ZwareMetalenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Stoffen in drinkwater', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater' },
        { name: 'Zware metalen in drinkwater — lood, koper, chroom en arseen', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/zware-metalen' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Zit er lood in mijn drinkwater?", answer: "Lood komt niet voor in het water bij het drinkwaterbedrijf, maar kan oplossen uit loden leidingen in oudere woningen. Woningen gebouwd voor 1960 hebben een verhoogde kans op loodleidingen; de EU-norm is aangescherpt naar 5 microgram per liter." },
        { question: "Welke zware metalen kunnen in drinkwater zitten?", answer: "De meest voorkomende zware metalen in drinkwater zijn lood (via loodleidingen), koper (uit koperen leidingen), arseen (geologische oorsprong) en chroom-6. Ze kunnen gezondheidsschade veroorzaken bij langdurige blootstelling." },
        { question: "Hoe verwijder je zware metalen uit drinkwater?", answer: "Omgekeerde osmose is de meest effectieve huishoudelijke methode: het membraan filtert deeltjes tot 0,0001 micron en verwijdert lood, arseen, koper en chroom met 90-95% efficientie." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'Zware metalen in drinkwater -- lood, koper, chroom en arseen',
        description: 'Welke zware metalen zitten er in drinkwater? Leer over lood in leidingwater, koper, arseen en chroom-6: normen, gezondheidsrisicos en hoe osmose 90-95%.',
        datePublished: '2026-01-01',
        url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/zware-metalen',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; Zware metalen
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Zware metalen in drinkwater -- lood, koper, chroom en arseen
          </h1>
          <QuickAnswer answer="Zware metalen zoals lood, koper, arseen en chroom-6 kunnen via leidingen of de bodem in drinkwater terechtkomen. In Nederland voldoet leidingwater doorgaans aan de normen, maar oudere loodleidingen (gebouwd voor 1960) vormen een reeel risico. Omgekeerde osmose verwijdert 90-95% van zware metalen en is de meest effectieve consumentenoplossing." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Lood in drinkwater</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Lood is de meest bekende en zorgwekkende zware metaal in drinkwater. Het komt niet voor in het water bij het drinkwaterbedrijf, maar lost op uit loden leidingen en fittingen in oudere woningen. Woningen gebouwd voor 1960 hebben een verhoogde kans op loodleidingen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            De Europese drinkwaternorm voor lood is aangescherpt naar 5 microgram per liter (ug/L). Er is geen veilige ondergrens: lood is neurotoxisch, met name schadelijk voor jonge kinderen en zwangere vrouwen. Het tast de hersenontwikkeling aan en verhoogt de bloeddruk bij volwassenen.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
            <p className="font-semibold text-amber-800 mb-1">Controleer uw leidingen</p>
            <p className="text-amber-700 text-sm">Huurders en eigenaren van woningen gebouwd voor 1960 kunnen loodleidingen laten controleren via de gemeente of drinkwaterbedrijf. Veel gemeenten bieden gratis inspectie aan.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Koper: groene aanslag als signaal</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Koper lost op uit koperen leidingen, met name bij zacht en zuur water. Groene aanslag op kranen of in het toilet is een zichtbaar teken van verhoogde koperconcentraties. De EU-norm ligt op 2 milligram per liter (mg/L).
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bij normale concentraties is koper niet schadelijk voor gezonde volwassenen -- het is zelfs een essentiele sporenstof. Hoge concentraties kunnen echter maag- en darmklachten veroorzaken. Personen met de ziekte van Wilson moeten extra voorzichtig zijn met koperblootstelling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Arseen: geologische oorsprong</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Arseen komt van nature voor in de bodem, met name in gebieden met bepaalde gesteenteformaties. In Nederland is het geen groot probleem bij leidingwater, maar priveputtwater in specifieke regioos kan verhoogde concentraties bevatten. De EU-norm is 10 ug/L.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Langdurige blootstelling aan arseen is geassocieerd met een verhoogd risico op huid-, blaas- en longkanker (IARC Groep 1: bewezen carcinogeen voor de mens). Bij putwater is testen sterk aanbevolen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Chroom-6: de Oss-casus</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Chroom-6 (hexavalent chroom) werd bekend door de Oss-casus, waarbij werknemers bij een chemische fabriek zijn blootgesteld aan chroom-6. In drinkwater wordt het water gecontroleerd op totaalchroom, waarvan chroom-6 een onderdeel is. De EU-norm voor totaalchroom in drinkwater is 25 ug/L.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Chroom-6 is via inademing bewezen kankerverwekkend. Bij inname via drinkwater zijn de risicos bij de huidige normniveaus minder eenduidig, maar voorzorg is gerechtvaardigd bij blootstelling boven de drempelwaarden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Osmose verwijdert 90-95% van zware metalen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Omgekeerde osmose (RO) is de meest effectieve huishoudelijke methode om zware metalen te verwijderen. Het membraan filtert deeltjes tot 0,0001 micron, waardoor lood, arseen, koper, chroom en andere zware metalen met een verwijderingspercentage van 90-95% worden tegengehouden.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">Stof</th>
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">EU-norm</th>
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">Verwijdering door osmose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700">Lood</td>
                  <td className="p-3 text-gray-700">5 ug/L</td>
                  <td className="p-3 text-gray-700">95-99%</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 text-gray-700">Koper</td>
                  <td className="p-3 text-gray-700">2 mg/L</td>
                  <td className="p-3 text-gray-700">90-95%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700">Arseen</td>
                  <td className="p-3 text-gray-700">10 ug/L</td>
                  <td className="p-3 text-gray-700">90-95%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-700">Chroom (totaal)</td>
                  <td className="p-3 text-gray-700">25 ug/L</td>
                  <td className="p-3 text-gray-700">90-99%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
