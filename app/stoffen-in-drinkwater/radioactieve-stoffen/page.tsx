import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Radioactieve stoffen in drinkwater -- radon, uranium en radium | WaterfilterPlatform',
  description:
    'Uranium (EU-norm 30 ug/L), radon en radium in drinkwater. Nederlandse situatie: grotendeels veilig, maar priveputen in graniet- en leemgebieden zijn.',
  alternates: { canonical: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/radioactieve-stoffen' },
};

export default function RadioactieveStoffenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Stoffen in drinkwater', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater' },
        { name: 'Radioactieve stoffen in drinkwater — radon, uranium en radium', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/radioactieve-stoffen' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Zit er uranium in drinkwater?", answer: "In Nederlands leidingwater zijn de uraniumconcentraties doorgaans laag, ruim onder de EU-norm van 30 microgram per liter. Priveputen in gebieden met klei- of fosfaatrijke bodems (delen van Brabant en Limburg) kunnen hogere concentraties bevatten." },
        { question: "Is radon in drinkwater gevaarlijk?", answer: "De blootstelling aan radon via drinkwater is klein vergeleken met radon via binnenlucht. Bij koken en douchen verdampt radon vrijwel volledig. In goed geventileerde ruimtes is dit geen probleem; in slecht geventileerde kelders of badkamers kan radon zich wel ophopen." },
        { question: "Hoe verwijder je uranium en radioactieve stoffen uit drinkwater?", answer: "Omgekeerde osmose verwijdert uranium en radium effectief met 90-99%. Radon als opgelost gas wordt door osmose niet volledig verwijderd; ventilatie van de opslagtank en een actief koolfilter na het membraan reduceren radon verder." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'Radioactieve stoffen in drinkwater -- radon, uranium en radium',
        description: 'Uranium (EU-norm 30 ug/L), radon en radium in drinkwater. Nederlandse situatie: grotendeels veilig, maar priveputen in graniet- en leemgebieden zijn.',
        datePublished: '2026-01-01',
        url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/radioactieve-stoffen',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; Radioactieve stoffen
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Radioactieve stoffen in drinkwater -- radon, uranium en radium
          </h1>
          <QuickAnswer answer="Uranium, radon en radium zijn van nature aanwezige radioactieve stoffen die via de bodem in drinkwater kunnen terechtkomen. De EU-norm voor uranium is 30 microgram per liter. Nederlands leidingwater is grotendeels veilig, maar priveputen in gebieden met graniet of leem kunnen hogere concentraties bevatten. Omgekeerde osmose verwijdert uranium effectief." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Uranium: geologische bron, EU-norm 30 ug/L</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Uranium is een van nature voorkomend radioactief zwaar metaal dat in de aardkorst aanwezig is, met name in graniet, leem en fosfaatgesteente. Via geologische processen lost uranium op in grondwater. De herziene Europese Drinkwaterrichtlijn stelt een parameternorm van 30 microgram per liter (ug/L).
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            In Nederland zijn de uraniumconcentraties in leidingwater doorgaans laag, ruim onder de norm. Gebieden met kleirijke of fosfaatrijke bodems, zoals delen van Noord-Brabant en Limburg, kunnen hogere achtergrondniveaus hebben.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Uranium is zowel radioactief als chemisch toxisch. Bij chronische inname van hogere doses is nierschade het primaire gezondheidseffect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Radon: gas dat verdampt bij koken en douchen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Radon-222 is een radioactief edelgas dat ontstaat door het verval van uranium-238 in de bodem. Het kan oplossen in grondwater en vrijkomen wanneer water wordt verwarmd, geroerd of uit een kraan stroomt. De blootstelling via drinkwater is klein vergeleken met blootstelling via binnenlucht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bij koken, douchen en warm water gebruik verdampt radon vrijwel volledig. In goed geventileerde ruimtes is dit geen probleem. In slecht geventileerde kelders of badkamers kan radon zich ophopen.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
            <p className="font-semibold text-blue-800 mb-1">Radon en longkanker</p>
            <p className="text-blue-700 text-sm">Radon is na roken de belangrijkste oorzaak van longkanker in Europa, maar de bijdrage via drinkwater is klein. Het grootste risico komt van radon dat opstijgt uit de bodem in woningen -- met name in gebieden met graniet of uranium-rijke gesteentes.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Radium: vervalproduct in watermonsters</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Radium (Ra-226 en Ra-228) ontstaat als vervalproduct van uranium en thorium. Het kan in kleine hoeveelheden in grondwater terechtkomen, met name in diep grondwater met een hoog mineraalgehalte. Radium accumuleert in botten en kan beenmerg en beenweefsel beschadigen bij hoge blootstelling.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In Nederlands leidingwater zijn radiumconcentraties doorgaans verwaarloosbaar. Diep artesisch putwater in bepaalde regioos kan hogere niveaus bevatten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Nederlandse situatie: grotendeels veilig</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Nederland heeft geen uitgestrekte granieten ondergrond zoals Scandinavie, waar radon en uranium in grondwater een groter probleem zijn. De meeste Nederlandse bodem bestaat uit sedimentaire lagen (zand, klei, veen) met relatief lage achtergrondniveaus van radioactieve stoffen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Priveputen in het zuiden van het land (Brabant, Limburg), met name in fosfaatrijke landbouwgebieden of gebieden met diep grondwater, verdienen meer aandacht. Een laboratoriumanalyse van het putwater -- inclusief radon, uranium en radium -- is voor eigenaren van priveputen aanbevolen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Osmose verwijdert uranium effectief</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Omgekeerde osmose is effectief voor de verwijdering van uranium en radium uit drinkwater. Het semi-permeabele membraan houdt zware metaalionen en radioactieve deeltjes tegen. Verwijderingspercentages van 90-99% voor uranium zijn gedocumenteerd bij gecertificeerde RO-systemen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Radon als gas wordt door osmose niet volledig verwijderd, omdat het als opgelost gas deels door het membraan kan passeren. Ventilatie van de opslagtank en het gebruik van een actief koolfilter na het membraan reduceren radon verder.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Zie ook: <Link href="/leidingwater/uranium" className="text-[#005F8A] hover:underline">uranium in leidingwater</Link>.
          </p>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
