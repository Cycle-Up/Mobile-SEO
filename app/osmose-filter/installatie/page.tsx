import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosefilter Installeren: Stap-voor-Stap Handleiding',
  description: 'Osmosefilter zelf installeren onder het aanrecht: benodigdheden, aansluiting op koudwaterleiding, afvoer en tapkraan. Complete installatiegids in 8 stappen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-filter/installatie' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan ik een osmosefilter zelf installeren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, de meeste osmosefilters zijn zelf te installeren zonder loodgieter. Je hebt nodig: een steeksleutel, boortje voor de tapkraan, en 1–2 uur tijd. De installatie bestaat uit: aansluiting op koudwaterleiding (3/8" aansluiting), afvoerslang op de afvoerleiding, en een aparte tapkraan boren in het aanrecht of spoelbak. Bij twijfel over het boren: laat dit doen door een loodgieter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke aansluiting heeft een osmosefilter nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard osmosefilters hebben een 3/8" aansluitslang (John Guest quick-connect). De meeste Nederlandse keukenmixers hebben een 3/8" of 1/2" koudwateraansluiting. Gebruik een T-stuk om het systeem parallel aan de koudwaterkraan aan te sluiten — zo blijft de normale kraan gewoon werken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de minimale waterdruk voor een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard osmosefilter heeft minimaal 2,5 bar waterdruk nodig, optimaal is 4–6 bar. Nederlandse leidingdruk ligt doorgaans op 3–5 bar — voldoende voor de meeste systemen. Bij lage druk (boortap, ouder leidingwerk) of een systeem met hoge capaciteit: overweeg een boosterpomp (€40–80).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het initialiseren van een nieuw osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na installatie laat je het systeem 2–3 keer volledig de drukvat vullen en legen — dit spoelt de filters schoon en verwijdert koolstofstof van het actief koolfilter. Gooi de eerste 2–3 tankinhouden water weg. Daarna is het systeem gebruiksklaar. Het membraan bereikt optimale prestatie na 24–48 uur.',
      },
    },
  ],
};

export default function OsmoseFilterInstallatiePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosefilter', item: 'https://waterfilterplatform.nl/osmose-filter' },
              { '@type': 'ListItem', position: 3, name: 'Installatie', item: 'https://waterfilterplatform.nl/osmose-filter/installatie' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/osmose-filter" className="hover:underline">Osmosefilter</a> &rsaquo;{' '}
          <span>Installatie</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Osmosefilter Installeren: Complete Stap-voor-Stap Gids
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          De meeste osmosefilters zijn zonder loodgieter te installeren. Met de juiste voorbereiding heb je het systeem in 1–2 uur operationeel. Hier is alles wat je nodig hebt.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Benodigdheden
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Osmosefilter systeem (inclusief drukvat, tapkraan, slangen)</li>
          <li>Steeksleutel of moersleutel</li>
          <li>Boormachine + steppenboor (voor tapkraan-gat in spoelbak)</li>
          <li>PTFE-tape (teflonband)</li>
          <li>Emmer voor het afvoerwater</li>
          <li>Optioneel: T-stuk 3/8&quot; als je de bestaande aansluiting wilt splitsen</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie in 8 stappen
        </h2>

        <ol className="space-y-6 text-gray-700 mb-8">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <strong className="text-[#003F5C]">Water afsluiten</strong>
              <p className="mt-1">Sluit de hoofdkraan of de afsluitkraan onder het aanrecht. Open de keukenkraan om de resterende druk te ontlasten.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <strong className="text-[#003F5C]">T-stuk aansluiten op koudwater</strong>
              <p className="mt-1">Schroef het T-stuk op de koudwateraansluiting (3/8&quot; draad). Gebruik PTFE-tape voor een waterdichte aansluiting. Sluit de toevoerslang van het osmosesysteem aan op het T-stuk.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <strong className="text-[#003F5C]">Afvoerslang aansluiten</strong>
              <p className="mt-1">De afvoerslang (voor spuiwater) sluit je aan op de sifon van het aanrecht. Gebruik de meegeleverde saddle clamp: boor een 6 mm gaatje in de sifon en klem de afvoerslang vast. Let op: afvoerslang moet omlaag lopen, niet omhoog — anders klopt de druk niet.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold">4</span>
            <div>
              <strong className="text-[#003F5C]">Tapkraan boren en plaatsen</strong>
              <p className="mt-1">Boor met een steppenboor een gat van 12 mm in de spoelbak of het aanrecht voor de apart tapkraan. Schroef de tapkraan vast en sluit de productwater-slang aan. De meeste rvs spoelbakken zijn eenvoudig te boren.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold">5</span>
            <div>
              <strong className="text-[#003F5C]">Drukvat aansluiten</strong>
              <p className="mt-1">Sluit het drukvat aan op het systeem via de productwater-slang. Controleer dat het drukvat vooraf gevuld is met 0,35–0,55 bar luchtdruk (fabrieksinstelling). Plaats het drukvat rechtop in de kast.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold">6</span>
            <div>
              <strong className="text-[#003F5C]">Filters plaatsen</strong>
              <p className="mt-1">Schuif de filterpatronen in de filterhuis-bekers (sediment, koolstof voor, koolstof na). Schroef de bekers handvast — niet te strak. Sluit het membraanbehuizing en sluit het membraan aan.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold">7</span>
            <div>
              <strong className="text-[#003F5C]">Water openen en op lekkage controleren</strong>
              <p className="mt-1">Open de waterkraan langzaam. Controleer alle aansluitingen op lekkage. Zet de tapkraan open — nu begint het systeem water te produceren en het drukvat te vullen (duurt 1–4 uur).</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold">8</span>
            <div>
              <strong className="text-[#003F5C]">Eerste spoelcycli</strong>
              <p className="mt-1">Laat het drukvat 2–3 keer volledig vullen en legen. Gooi het eerste spoelwater weg — dit verwijdert koolstofstof en productiemiddelen. Daarna is het systeem gebruiksklaar.</p>
            </div>
          </li>
        </ol>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Klaar om te beginnen?</h3>
          <p className="text-gray-700 mb-4">
            Bekijk ons aanbod van osmosefilters — inclusief installatiehandleiding en support.
          </p>
          <a href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          Lees ook: <a href="/kennisbank/osmose-filter-installatie" className="text-[#005F8A] underline">Osmosefilter installatie: tips van de expert</a> en <a href="/osmose-filter/werking" className="text-[#005F8A] underline">hoe werkt een osmosefilter?</a>
        </p>
      </main>
    </>
  );
}
