import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Chloor in leidingwater: veilig of ongezond?',
  description: 'Chloor in leidingwater ruikt en smaakt onaangenaam maar is veilig. Leer waarom drinkbedrijven chloor toevoegen, hoeveel er in zit en hoe je de smaak verbetert.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/chloor' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is chloor in leidingwater schadelijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chloor in de hoeveelheden die in Nederlands leidingwater voorkomen (0,1-0,3 mg/L residueel) is niet schadelijk voor gezonde volwassenen. De WHO-richtlijn stelt een veiligheidsgrens van maximaal 5 mg/L vrij chloor, ruim boven wat in de praktijk wordt gebruikt. De grotere zorg betreft desinfectiebijproducten (DBPs) zoals trihalomethanen, die bij langdurige blootstelling in hoge concentraties een klein verhoogd risico kunnen geven. EU-norm voor THMs is maximaal 0,1 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel chloor zit er in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet alle Nederlandse waterbedrijven gebruiken chloor. Bedrijven die grondwater zuiveren, zoals in grote delen van Brabant en Gelderland, voegen vaak geen chloor toe. Waterwerken die oppervlaktewater verwerken, zoals in de Randstad, gebruiken doorgaans een klein residu van 0,1-0,3 mg/L vrij chloor of chloraminen om hergroei van bacterien in het distributienetwerk te voorkomen. De WHO-richtlijn voor residueel chloor is 0,2-0,5 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom ruikt mijn kraanwater naar chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chloorlucht in kraanwater heeft doorgaans twee oorzaken: vrij chloor (hypochloriet) dat direct ruikt naar zwembad, en chloaraminen die zich vormen wanneer chloor reageert met ammoniak of organische stikstofverbindingen. Chloaraminen ruiken sterker en scherper dan vrij chloor, zelfs bij lagere concentraties. De geur is het sterkst bij warm water, na een periode van weinig watergebruik, of als u dicht bij een pompstation woont.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn trihalomethanen (THMs)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trihalomethanen (THMs) zijn desinfectiebijproducten die ontstaan wanneer chloor reageert met organisch materiaal in water. De bekendste zijn chloroform (trichloormethaan), bromodichloormethaan en dibromochloormethaan. Bij langdurige blootstelling aan hoge concentraties THMs is er epidemiologisch een kleine verhoogde kans op blaaskanker aangetoond. De EU Drinkwaterrichtlijn 2020 stelt een maximumnorm van 0,1 mg/L (100 microgram/L) voor de som van THMs. In Nederland worden deze normen zelden overschreden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verwijder ik chloor uit leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn drie praktische methoden: (1) Water laten staan in een open kan of karaf gedurende 30-60 minuten: vrij chloor verdampt spontaan, chloaraminen echter niet of nauwelijks. (2) Actief koolstoffilter (filterkraan of filterpitcher): verwijdert vrij chloor en chloaraminen voor 95-99%, ook smaak en geur verbeteren sterk. (3) Omgekeerde osmosefilter: verwijdert meer dan 99% van chloor, chloaraminen en desinfectiebijproducten zoals THMs. Voor wie THMs wil verwijderen is een osmosefilter of een gecombineerd koolstof-plus-osmosefilter de beste optie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen vrij chloor en chloaraminen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vrij chloor (hypochloorzuur en hypochloriet) is het actieve desinfectiemiddel dat direct bacterien en virussen doodt. Chloaraminen vormen zich wanneer chloor reageert met ammonia of organische stikstofverbindingen en zijn chemisch stabieler: ze houden langer een desinfecterend residu in het leidingnet, maar zijn minder effectief als directe desinfectant. Chloaraminen ruiken sterker en onplezieriger dan vrij chloor en zijn moeilijker te verwijderen door simpelweg water te laten staan. De meeste grote Nederlandse waterbedrijven stappen over op chloraminering voor een stabieler desinfectieresidu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik leidingwater met chloor gebruiken voor aquariumvissen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, niet direct. Zowel vrij chloor als chloaraminen zijn giftig voor vissen, zelfs in de concentraties die in leidingwater voorkomen. Vrij chloor kunt u neutraliseren door water 24 uur te laten staan en te beluchten. Chloaraminen verdampen echter niet en vereisen een waterconditioner (natriumthiosulfaat of specifieke aquariumconditioner) of een actief koolstoffilter om veilig aquariumwater te maken. Controleer altijd welk desinfectiemiddel uw waterbedrijf gebruikt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar met een nuance. Het RO-membraan zelf wordt beschadigd door vrij chloor, daarom hebben osmosesystemen altijd een actief koolstof voorfilter die het chloor verwijdert voordat het water het membraan bereikt. De combinatie van koolstof voorfilter plus RO-membraan verwijdert meer dan 99% van chloor, chloaraminen en desinfectiebijproducten (THMs). Een osmosefilter is daarmee de meest complete oplossing voor chloor en alle gerelateerde bijproducten.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Chloor in leidingwater: veilig of ongezond?',
  description: 'Chloor in leidingwater ruikt en smaakt onaangenaam maar is veilig. Leer waarom drinkbedrijven chloor toevoegen, hoeveel er in zit en hoe je de smaak verbetert.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/chloor',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ChloorLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Chloor in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/chloor' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/leidingwater" className="hover:underline">Leidingwater</Link> &rsaquo;{' '}
          <span>Chloor in leidingwater</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Chloor in leidingwater: veilig of ongezond?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Chloor beschermt uw drinkwater tegen bacterien en virussen. Maar de chloorlucht stoort, en desinfectiebijproducten als THMs roepen vragen op. Wat moet u weten?
          </p>
        </div>

        <QuickAnswer answer="Chloor in Nederlands leidingwater (0,1-0,3 mg/L) is veilig maar smaakt en ruikt onaangenaam. Desinfectiebijproducten zoals trihalomethanen (THMs, max 0,1 mg/L per EU-norm) zijn de grotere zorg bij langdurige blootstelling. Een actief koolstoffilter of osmosefilter verwijdert chloor, chloaraminen en THMs effectief." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom voegen waterbedrijven chloor toe?
        </h2>
        <p className="text-gray-700 mb-4">
          Chloordesinfectie is een van de grootste volksgezondheidssuccessen van de twintigste eeuw. Voor de invoering van gestandaardiseerde waterdesinfectie waren uitbraken van cholera, tyfus en dysenterie via drinkwater verantwoordelijk voor duizenden doden per jaar in Europa. Chloor doodt bacterien, virussen en protozoa effectief en behoudt een meetbaar residu in het distributienet.
        </p>
        <p className="text-gray-700 mb-4">
          De WHO-richtlijn voor residueel chloor in het distributienet is <strong>0,2 tot 0,5 mg/L</strong>. Dit residu garandeert dat eventuele hergroei van micro-organismen na zuivering en tijdens transport door het leidingnet wordt onderdrukt. De wettelijke veiligheidsgrens ligt op 5 mg/L vrij chloor &mdash; ruim boven het gebruikte niveau in de praktijk.
        </p>
        <p className="text-gray-700 mb-6">
          Niet alle Nederlandse waterbedrijven gebruiken chloor. Bedrijven die vrijwel uitsluitend diep grondwater verwerken &mdash; zoals in Brabant, Gelderland en Drenthe &mdash; kunnen volstaan zonder chloortoevoeging omdat grondwater bacteriologisch al van hoge kwaliteit is. Bedrijven in de Randstad die Rijn- of Maaswater verwerken, hebben chloor of chloraminen nodig voor een veilig residu in het uitgebreide distributienet.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloor versus chloaraminen: wat is het verschil?
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn twee vormen van chloor die waterbedrijven gebruiken:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Vrij chloor</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Chloaraminen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Samenstelling</td>
                <td className="border border-gray-300 px-3 py-2">Hypochloriet / hypochloorzuur</td>
                <td className="border border-gray-300 px-3 py-2">Chloor + ammonia</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Stabiliteit in net</td>
                <td className="border border-gray-300 px-3 py-2">Laag (verdampt snel)</td>
                <td className="border border-gray-300 px-3 py-2">Hoog (stabiel residu)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Desinfectiekracht</td>
                <td className="border border-gray-300 px-3 py-2">Sterk</td>
                <td className="border border-gray-300 px-3 py-2">Minder sterk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Geur</td>
                <td className="border border-gray-300 px-3 py-2">Zwembadlucht</td>
                <td className="border border-gray-300 px-3 py-2">Sterker, scherper</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Verwijdering door laten staan</td>
                <td className="border border-gray-300 px-3 py-2">Ja, na 30-60 min</td>
                <td className="border border-gray-300 px-3 py-2">Nauwelijks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Chloaraminen worden gevormd wanneer chloor reageert met ammonia of organische stikstofverbindingen. Ze zijn chemisch stabieler dan vrij chloor en handhaven een desinfecterend residu over lange afstanden in het distributienet. Nadeel: chloaraminen ruiken sterker en scherper dan vrij chloor, zelfs bij lagere concentraties. De meeste grote Nederlandse waterbedrijven die oppervlaktewater verwerken, zijn overgestapt op chloraminering.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten: desinfectiebijproducten (DBPs)
        </h2>
        <p className="text-gray-700 mb-4">
          Het directe gezondheidsrisico van chloor in drinkwater bij normale concentraties is verwaarloosbaar klein. De grotere wetenschappelijke aandacht gaat uit naar <strong>desinfectiebijproducten</strong> (DBPs, Disinfection By-Products), met name trihalomethanen (THMs).
        </p>
        <p className="text-gray-700 mb-4">
          THMs ontstaan wanneer chloor reageert met organisch materiaal dat van nature in water aanwezig is (humuszuren, plantenresten). De bekendste zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Chloroform (trichloormethaan)</strong> &mdash; meest voorkomend THM</li>
          <li><strong>Bromodichloormethaan</strong></li>
          <li><strong>Dibromochloormethaan</strong></li>
          <li><strong>Bromoform (tribroom-methaan)</strong></li>
        </ul>
        <p className="text-gray-700 mb-4">
          Epidemiologisch onderzoek heeft bij langdurige blootstelling aan hoge THM-concentraties een klein verhoogd risico op blaaskanker aangetoond. De <strong>EU Drinkwaterrichtlijn 2020 (2020/2184)</strong> stelt een maximumnorm van <strong>0,1 mg/L (100 microgram/L)</strong> voor de som van de vier THMs. In Nederland worden deze normen in de praktijk zelden bereikt, laat staan overschreden.
        </p>
        <p className="text-gray-700 mb-6">
          Naast THMs bestaan er ook haloazijnzuren (HAAs) en andere DBPs. De EU-norm is primair gericht op THMs als indicatorgroep, maar de bredere categorie DBPs is relevant voor wie maximale bescherming wil.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is chloorlucht normaal en wanneer zorgen?
        </h2>
        <p className="text-gray-700 mb-4">
          Een lichte chloorlucht bij de eerste liter kraanwater &mdash; zeker na een periode van weinig gebruik (vakantie) of als u dichtbij een pompstation woont &mdash; is volstrekt normaal en onschadelijk. Laat het water even doorlopen en de geur verdwijnt.
        </p>
        <p className="text-gray-700 mb-6">
          Neem contact op met uw waterbedrijf als:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>De chloorlucht plotseling sterk toeneemt of weken aanhoudt</li>
          <li>Het water troebel of verkleurd is naast de chloorlucht</li>
          <li>Meerdere buren dezelfde klacht hebben</li>
          <li>Er werkzaamheden aan het leidingnet zijn geweest in de buurt</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloor verwijderen: vergelijking van filtermethoden
        </h2>
        <p className="text-gray-700 mb-4">
          Er zijn drie praktische methoden om chloor en chloaraminen uit leidingwater te verwijderen:
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Water laten staan</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Deels effectief</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Vrij chloor verdampt spontaan uit open water na circa 30-60 minuten bij kamertemperatuur. Chloaraminen verdampen echter niet of nauwelijks en blijven aanwezig. THMs worden ook niet verwijderd door laten staan. Deze methode helpt alleen bij vrij-chloor-geur, niet bij chloaraminen.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Vrij chloor: ✓ na 30 min</span>
              <span>Chloaraminen: ✗</span>
              <span>THMs: ✗</span>
              <span>Kosten: gratis</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Actief koolstoffilter (filterkraan of filterpitcher)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Goed voor chloor</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Actief kool adsorbeert vrij chloor en chloaraminen effectief: verwijderingspercentages van 95-99%. Smaak en geur verbeteren sterk. Koolstoffilters verwijderen echter maar een deel van de THMs en andere DBPs. Een filterpitcher (bijv. Brita) is goedkoop maar vereist regelmatige filtervervanging. Een onder-aanrecht koolstoffilter is duurzamer.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Vrij chloor: ✓ 95-99%</span>
              <span>Chloaraminen: ✓ 90-95%</span>
              <span>THMs: deels</span>
              <span>Kosten: &euro;20-200</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmosefilter (RO)</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest compleet</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Een osmosefilter combineert een actief koolstof voorfilter met een RO-membraan. Het koolstoffilter verwijdert het chloor voordat het membraan bereikt wordt (chloor beschadigt RO-membranen), het membraan houdt vervolgens meer dan 99% van alle opgeloste stoffen tegen, inclusief THMs, PFAS, nitraat en medicijnresten. De meest complete oplossing voor wie niet alleen chloor, maar alle verontreinigingen wil aanpakken.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Chloor/chloaraminen: ✓ &gt;99%</span>
              <span>THMs: ✓ &gt;99%</span>
              <span>PFAS: ✓</span>
              <span>Kosten: &euro;300-800</span>
            </div>
          </div>
        </div>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over chloor in leidingwater</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters vergelijken</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
