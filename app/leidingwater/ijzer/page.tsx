import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'IJzer in kraanwater: bruine vlekken, roestsmaak en oplossingen',
  description:
    'IJzer in kraanwater veroorzaakt bruine vlekken in toilet en wasbak, roestige smaak en oranje verkleuringen. Oorzaken, veiligheidsgrens (200 µg/L) en filteroplossingen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/ijzer' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom is mijn kraanwater bruin of oranje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bruin of oranje kraanwater is bijna altijd het gevolg van ijzer in het water. Ijzer (Fe2+ of Fe3+) komt in drie vormen voor: opgelost ijzer (kleurloos, maar slaat neer als de lucht bij komt), gesuspendeerd ijzer (al deeltjes, geeft direct oranje kleur) en bacterieel ijzer (gevormd door ijzerbacterien). De meest voorkomende oorzaak in de woning is inwendige roest van gietijzeren of stalen leidingen. Let op: de eerste liter na een nacht stilstaan is het meest verkleurd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ijzer in kraanwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij normale concentraties (tot de EU-norm van 200 µg/L) is ijzer in drinkwater niet schadelijk voor gezonde mensen. De EU-norm is een esthetische norm voor smaak en kleur, geen gezondheidskundige grenswaarde. IJzer is een essentieel sporenelement en ijzer uit drinkwater draagt bij aan de dagelijkse inname. Uitzondering: mensen met hemochromatose (erfelijke ijzerstapelingsziekte) moeten hoog-ijzerwater vermijden. Bij sterke verkleuring (visueel oranje water) is de concentratie mogelijk boven de norm en is actie aan te raden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk filter verwijdert ijzer uit kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor huishoudelijk gebruik zijn drie filteropties effectief. Een omgekeerde osmose (RO) filter verwijdert meer dan 95% van opgelost en gesuspendeerd ijzer en is de meest complete oplossing (EUR 300-800). Een mangaanzeolietfilter verwijdert 95 procent van opgelost ijzer via oxidatie en adsorptie (EUR 400-1.500, professionele installatie). Beluchting plus een sedimentfilter verwijdert 90 procent plus, maar vereist professionele installatie (EUR 500-2.000). Een sedimentfilter alleen is onvoldoende voor opgelost ijzer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor ijzer in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-norm voor ijzer in drinkwater is 200 µg/L (0,2 mg/L), vastgelegd in de EU Drinkwaterrichtlijn (2020/2184) en het Nederlandse Drinkwaterbesluit. Dit is een indicatieve waarde (esthetische norm) voor smaak, geur en kleur. Er is geen gezondheidskundige maximumgrenswaarde voor ijzer, omdat ijzer bij normale concentraties niet toxisch is. Waterbedrijven streven naar concentraties ruim onder de norm (doorgaans lager dan 50 µg/L).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe kan ik ijzer in kraanwater meten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn drie opties om ijzer thuis te meten. Ijzer-teststrips (EUR 10-20): snelle indicatieve meting. Colorimetrische test (EUR 15-30): druppel reagent in watermonster, kleur vergelijken met kaart. Nauwkeuriger dan strips. Professionele watertest (EUR 50-150 bij laboratoria): meest nauwkeurig, geeft ook andere parameters zoals mangaan, lood en hardheid. Bij structureel bruinwater stuurt u een monster op naar een erkend laboratorium voor een volledig beeld.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom smaakt mijn water roestig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een roestige of metaalachtige smaak in kraanwater is een duidelijk teken van ijzerconcentraties boven circa 50 µg/L. Water met ijzer boven 200 µg/L heeft een duidelijk waarneembare roestige smaak en oranje kleur. De smaakdrempel voor ijzer ligt bij circa 50-100 µg/L. De oorzaak is bijna altijd inwendige leidingroest (gietijzeren of stalen leidingen ouder dan 1960) of opstuwing van roeststalen sediment na leidingwerkzaamheden. Spoel bij incidentele roestsmaak 2 minuten door; bij structureel probleem: onderzoek de leidingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe krijg ik de bruine vlekken in mijn toilet weg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bruine ijzervlekken in toilet, wasbak en douche worden veroorzaakt door neergeslagen ijzer(III)oxide (roest). Gebruik citroenzuur (EUR 3-5, 100g in 1L water) of een ontkalker met zoutzuur voor verwijdering. Laat 30 minuten inwerken en schrobben. Alternatief: wijnsteenzuur of oxaalzuur (verkrijgbaar als houtbleekmiddel). Preventie: een waterfilter die ijzer verwijdert voorkomt verdere aanslag. Een osmosefilter op het drinktapkraan vermindert de ijzerinname; voor het hele huis is een in-line ijzerfilter bij de hoofdaansluiting nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter ijzer uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een goed onderhouden osmosefilter verwijdert meer dan 95% van opgelost ijzer en nagenoeg 100% van gesuspendeerd ijzer uit drinkwater. Het RO-membraan heeft porieen van 0,0001 micron, veel kleiner dan ijzerionen. Let op: hoge ijzerconcentraties (boven 0,3 mg/L) kunnen het RO-membraan sneller verstoppen. Installeer in dat geval eerst een sedimentfilter of oxidatiefilter als pre-filter voor de osmose-unit.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'IJzer in kraanwater: bruine vlekken, roestsmaak en oplossingen',
  description:
    'IJzer in kraanwater veroorzaakt bruine vlekken, roestige smaak en oranje verkleuringen. Oorzaken, EU-norm (200 µg/L) en filteroplossingen voor thuis.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/ijzer',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LeidingwaterIjzerPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'IJzer in kraanwater', item: 'https://waterfilterplatform.nl/leidingwater/ijzer' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/leidingwater" className="hover:underline">Leidingwater</a> &rsaquo;{' '}
          <span>IJzer in kraanwater</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            IJzer in kraanwater: bruine vlekken, roestsmaak en oplossingen
          </h1>
          <p className="text-gray-600 text-sm">
            Oorzaken, EU-norm (200 µg/L), gezondheid en de beste filteropties voor thuis
          </p>
        </section>

        <QuickAnswer answer="IJzer in kraanwater herkent u aan bruin of oranje water (eerste liter ochtend), roestige smaak en oranje vlekken in toilet en wasbak. De EU-norm is 200 µg/L. Oorzaak is vaak inwendige leidingroest of regionale grondwatersamenstelling. Osmosefilter verwijdert meer dan 95% van ijzer; mangaanzeoliet en beluchting zijn alternatieven voor het hele huis." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe herkent u ijzer in uw kraanwater?
        </h2>
        <p className="text-gray-700 mb-4">
          IJzer in kraanwater is zelden verborgen. De signalen zijn duidelijk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Bruin of oranje water</strong> bij de eerste liter na een nacht stilstaan. Het water wordt helderder na doorlopen.</li>
          <li><strong>Roestige of metaalachtige smaak</strong>, merkbaar bij concentraties boven 50-100 µg/L</li>
          <li><strong>Oranje vlekken</strong> in toiletpot, wasbak en douche die moeilijk weg te schrobben zijn</li>
          <li><strong>Oranje wasvlekken</strong> op lichte was, met name bij hogere temperaturen</li>
          <li><strong>Slijmerige oranje aanslag</strong> in waterreservoirs en slangen (teken van ijzerbacterien)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Oorzaken van ijzer in leidingwater
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">1. Inwendige leidingroest</h3>
            <p className="text-gray-700 text-sm">
              De meest voorkomende oorzaak in woningen. Gietijzeren of stalen leidingen, geinstalleerd voor 1970, roesten van binnenuit als de beschermende oxidelaag beschadigd is. Hoe ouder de leidingen, hoe meer roest. Vervanging is de enige structurele oplossing.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">2. Leidingwerkzaamheden in de buurt</h3>
            <p className="text-gray-700 text-sm">
              Na herstelwerkzaamheden aan het leidingnet wordt sediment opgestuwd. Dit geeft tijdelijk bruin water. Normaal spoelt dit binnen een uur weg. Meld aanhoudend bruin water aan het waterbedrijf.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">3. Regionale grondwatersamenstelling</h3>
            <p className="text-gray-700 text-sm">
              Diep grondwater in Drenthe, Gelderland en delen van Friesland bevat van nature hoge ijzerconcentraties (soms boven 10 mg/L in ruw grondwater). Waterbedrijven verwijderen ijzer via beluchting en filtratie, maar residuconcentraties in het netto leidingwater kunnen hoger zijn dan in andere regioes.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">4. Stilstaand water in leidingen</h3>
            <p className="text-gray-700 text-sm">
              Langere tijd stilstaand water in leidingen (vakantie, zomerhuis) lost meer ijzer op uit de leidingwand. De eerste liter na stilstand bevat de hoogste concentraties. Spoel altijd 2-3 minuten door na terugkomst.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en gezondheidsaspecten
        </h2>
        <p className="text-gray-700 mb-4">
          De EU-drinkwaternorm voor ijzer (Richtlijn 2020/2184, omgezet in het Nederlandse Drinkwaterbesluit) is 200 µg/L (0,2 mg/L). Dit is een zogenoemde indicatieve waarde: een esthetische norm voor smaak, geur en kleur, geen directe gezondheidsgrenswaarde.
        </p>
        <p className="text-gray-700 mb-4">
          Voor gezonde mensen is ijzer in drinkwater bij concentraties onder de norm niet schadelijk. IJzer is een essentieel sporenelement dat nodig is voor de aanmaak van hemoglobine. De aanbevolen dagelijkse inname (ADI) is 8-18 mg/dag. Via drinkwater neemt u bij 200 µg/L en 2 liter per dag maximaal 0,4 mg/dag op: minder dan 5% van de ADI.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 mb-6">
          <p className="text-gray-700 text-sm">
            <strong>Uitzondering: hemochromatose.</strong> Mensen met hereditaire hemochromatose (erfelijke ijzerstapelingsziekte, circa 1 op 200 Nederlanders) kunnen te veel ijzer opslaan. Voor hen is het verstandig extra ijzerinname via drinkwater te beperken met een osmosefilter.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteroplossingen voor ijzer in kraanwater
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">IJzerverwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Prijs</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Bijzonder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Sedimentfilter (5 µm)</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Gesuspendeerd ijzer deels</td>
                <td className="border border-gray-300 px-3 py-2">EUR 20-50</td>
                <td className="border border-gray-300 px-3 py-2">Alleen bij bruinwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Beluchting + sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90%+</td>
                <td className="border border-gray-300 px-3 py-2">EUR 500-2.000</td>
                <td className="border border-gray-300 px-3 py-2">Professioneel, heel huis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Mangaanzeoliet filter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">95%+</td>
                <td className="border border-gray-300 px-3 py-2">EUR 400-1.500</td>
                <td className="border border-gray-300 px-3 py-2">Effectief voor opgelost ijzer</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">&gt;95%</td>
                <td className="border border-gray-300 px-3 py-2">EUR 300-800</td>
                <td className="border border-gray-300 px-3 py-2">Beste algehele oplossing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">20-40%</td>
                <td className="border border-gray-300 px-3 py-2">EUR 50-200</td>
                <td className="border border-gray-300 px-3 py-2">Onvoldoende voor hoog ijzer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tijdelijke maatregelen en praktisch advies
        </h2>
        <p className="text-gray-700 mb-4">
          Terwijl u zoekt naar een structurele oplossing, kunt u direct de volgende maatregelen nemen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Laat water 2-3 minuten doorlopen</strong> voor gebruik, zeker de ochtend. Roest spoelt weg en de concentratie daalt sterk.</li>
          <li><strong>Gebruik de eerste liter</strong> voor toilet doortrekken of planten water geven, niet voor drinken of koken.</li>
          <li><strong>Verwijder bestaande vlekken</strong> met citroenzuur of een ontkalker op basis van zoutzuur. Laat 30 minuten inwerken.</li>
        </ul>

        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-2">Wanneer een loodgieter inschakelen?</h3>
          <p className="text-gray-700 text-sm">
            Als het water ook na 5 minuten doorlopen nog bruin blijft, is er een intern leidingprobleem. Laat een loodgieter de leidingen inspecteren. Gietijzeren leidingen ouder dan 1960 zijn toe aan vervanging. Loodgieters kunnen ook een watertest uitvoeren om de ijzerconcentratie te meten.
          </p>
        </div>

        <p className="text-gray-700 mb-6">
          Een osmosefilter op de keukenkraan is de snelste en meest effectieve manier om schoon drinkwater te garanderen terwijl u aan een structurele oplossing werkt. Meer informatie:{' '}
          <Link href="/leidingwater" className="text-[#005F8A] underline">leidingwater kwaliteit</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over ijzer in kraanwater</h2>
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
          <Link href="/leidingwater" className="text-[#005F8A] underline">leidingwater overzicht</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filter</Link> en{' '}
          <Link href="/kraanwater" className="text-[#005F8A] underline">kraanwater kwaliteit</Link>.
        </p>
      </main>
    </>
  );
}
