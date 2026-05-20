import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Koolstoffilter voor chloor: adsorptie, GAC vs blok (2026)',
  description:
    'Hoe verwijdert een koolstoffilter chloor uit leidingwater? GAC vs blokfilter, contacttijd, NSF/ANSI 42, THM en chlooramine. Wanneer is koolstof niet voldoende?',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter/chloor' },
};

const faqItems = [
  {
    q: 'Hoe verwijdert een koolstoffilter chloor?',
    a: 'Actief kool verwijdert chloor via adsorptie en via een chemische reductiereactie. Vrij chloor (HOCl en OCl-) wordt aan het koolstofoppervlak gebonden en gereduceerd tot chloride (Cl-), een onschadelijk ion. Dit proces verloopt zeer snel: zelfs bij een contacttijd van enkele seconden verwijdert een koolstofblokfilter 95-99% van het vrije chloor. GAC bereikt 80-95% bij iets kortere contacttijden.',
  },
  {
    q: 'Wat is het verschil tussen een GAC-filter en een blokfilter voor chloorverwijdering?',
    a: 'GAC (Granular Activated Carbon) bestaat uit losse koolkorrels waartussen water relatief snel doorstroomt. Door kanalvorming is de contacttijd korter: chloorverwijdering ligt op 80-95%. Een koolstofblokfilter heeft een vaste, compacte structuur waarbij water door het volledige koolstofmedium moet stromen. Dit geeft langere contacttijd en een hoger verwijderingspercentage van 95-99%. Voor de verwijdering van chloorderivaten zoals THM is een blokfilter aanzienlijk effectiever.',
  },
  {
    q: 'Verwijdert een koolstoffilter ook trihalomethanen (THM)?',
    a: 'Ja. Trihalomethanen (THM) zijn chloorderivaten die ontstaan wanneer chloor reageert met organische stof in water: chloroform, bromodichloormethaan, dibromochloormethaan en bromoform. Een koolstofblokfilter verwijdert THM voor 90-99% via adsorptie. GAC verwijdert THM voor 75-90%. NSF/ANSI 53 certificering dekt de reductie van THM specifiek. Bij hoge THM-concentraties (stadsgebieden met oud distributienet) is een gecertificeerd blokfilter de beste keuze.',
  },
  {
    q: 'Wat is chlooramine en verwijdert een gewone koolstoffilter het?',
    a: 'Chlooramine (monochloramine, NH2Cl) is een alternatief desinfectiemiddel dat sommige waterleidingbedrijven gebruiken in plaats van vrij chloor. Chlooramine is stabieler dan chloor en blijft langer actief in het distributienet. Een standaard koolstoffilter verwijdert chlooramine echter minder effectief (slechts 50-70%) dan vrij chloor (95-99%). Voor effectieve chlooramineontgassing is catalytisch geactiveerde kool (zoals Centaur-kool of KDF-medium) noodzakelijk.',
  },
  {
    q: 'Wat is NSF/ANSI 42 certificering voor chloor?',
    a: 'NSF/ANSI 42 is een Amerikaanse norm voor esthetische waterbehandeling, waaronder chloorverwijdering en smaakverbetering. Een filter met NSF/ANSI 42-certificering is onafhankelijk getest en heeft aangetoond minimaal 50% van het vrije chloor te verwijderen gedurende de gehele aangegeven filterlevensduur. De beste filters halen 95-99% over hun volledige capaciteit. Kijk bij aankoop altijd naar het NSF-certificaatnummer, niet alleen het NSF-logo op de verpakking.',
  },
  {
    q: 'Hoe lang heeft een koolstoffilter contacttijd nodig om chloor te verwijderen?',
    a: 'De minimale contacttijd voor effectieve chloorverwijdering bij een koolstofblokfilter is 1-5 seconden. Dit lijkt kort, maar is bij leidingwaterdruk (2-5 bar) al voldoende vanwege de chemische reductiereactie. GAC heeft 10-30 seconden nodig voor vergelijkbare prestaties. Bij filterkannen met zwaartekracht is de contacttijd langer (minuten) maar de doorstroomsnelheid lager, wat resulteert in een vergelijkbare totale effluentkwaliteit.',
  },
  {
    q: 'Wanneer is een koolstoffilter niet voldoende voor chloorverwijdering?',
    a: 'Een koolstoffilter is niet voldoende wanneer: (1) chlooramine aanwezig is in plaats van vrij chloor - dan is catalytisch kool of KDF nodig; (2) er naast chloor ook nitraat, PFAS of zware metalen verwijderd moeten worden - dan is omgekeerde osmose beter; (3) het filter verzadigd is - een uitgeput filter geeft chloor niet meer voldoende terug. Controleer altijd of uw waterleidingbedrijf vrij chloor of chlooramine gebruikt.',
  },
  {
    q: 'Zijn de chloorniveaus in Nederlands leidingwater hoog?',
    a: 'In Nederland is de wettelijk toegestane maximumconcentratie vrij chloor in leidingwater 0,5 mg/L. In de praktijk varieeert het chloorgehalte van 0,05-0,3 mg/L afhankelijk van de regio en de afstand tot het pompstation. Gebieden met een lang distributienet (meer dan 10 km van het pompstation) hebben doorgaans lagere chloorwaarden. Waterregio\'s als Amsterdam, Rotterdam en Utrecht hanteren doorgaans lagere chloordoseringen dan ruraler gebieden.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Koolstoffilter voor chloor: adsorptie, GAC vs blok (2026)',
  description:
    'Hoe verwijdert een koolstoffilter chloor? GAC vs blokfilter, contacttijd, NSF/ANSI 42, THM en chlooramine uitgelegd.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-20',
  url: 'https://waterfilterplatform.nl/koolstoffilter/chloor',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KoolstoffilterChloorPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Koolstoffilter', item: 'https://waterfilterplatform.nl/koolstoffilter' },
              { '@type': 'ListItem', position: 3, name: 'Chloor', item: 'https://waterfilterplatform.nl/koolstoffilter/chloor' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/koolstoffilter" className="hover:text-[#005F8A]">Koolstoffilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Chloor</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Koolstoffilter voor chloor: adsorptie, GAC vs blokfilter en chlooramine
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Actief kool is de meest effectieve en betaalbare methode om chloor en chloorderivaten uit
            leidingwater te verwijderen. Maar niet elk koolstoffilter presteert even goed, en voor
            chlooramine gelden andere eisen. Op deze pagina leest u alles over de wetenschap achter
            chloorverwijdering, het verschil tussen GAC en blokfilter, NSF/ANSI 42 certificering en
            wanneer een koolstoffilter niet voldoende is.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        <QuickAnswer answer="Een koolstofblokfilter verwijdert vrij chloor voor 95-99% via adsorptie en chemische reductie. GAC haalt 80-95% bij kortere contacttijd. NSF/ANSI 42 is de relevante certificering. Voor chlooramine (niet vrij chloor) is catalytisch kool of KDF vereist. Trihalomethanen (THM) worden voor 90-99% verwijderd door een gecertificeerd blokfilter." />

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe verwijdert actief kool chloor?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chloorverwijdering door actieve kool verloopt via twee mechanismen tegelijk. Het eerste is
            <strong> adsorptie</strong>: chloormoleculen binden zich aan het enorme interne oppervlak van
            de koolmatrix via van der Waals-krachten. Het tweede is een <strong>chemische reductiereactie</strong>:
            actief kool reduceert vrij chloor (HOCl en OCl&minus;) tot chloride (Cl&minus;), een onschadelijk
            ion dat vervolgens niet wordt geadsorbeerd maar gewoon met het water meestroomt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De chemische reductiereactie verloopt snel en maakt koolstoffilters bijzonder effectief voor
            chloorverwijdering, ook bij korte contacttijden. Dit is het fundamentele verschil met de
            verwijdering van organische stoffen zoals pesticiden, waarbij alleen adsorptie een rol speelt
            en langere contacttijd cruciaal is.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over de algemene werking van koolstoffilters leest u op de pagina{' '}
            <Link href="/koolstoffilter/werking" className="text-[#005F8A] underline hover:no-underline">
              hoe werkt een koolstoffilter
            </Link>.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700 mb-4">
            <strong className="text-[#003F5C]">Contacttijd:</strong> Bij een koolstofblokfilter op
            leidingwaterdruk (2&ndash;5 bar) is de contacttijd 1&ndash;5 seconden. Dit is voldoende
            voor de chemische reductiereactie. GAC-filters hebben door kanalvorming een effectieve
            contacttijd van 10&ndash;30 seconden nodig. Filterkannen met zwaartekracht bereiken
            vergelijkbare resultaten via langere verblijftijd (minuten).
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">GAC vs koolstofblokfilter voor chloorverwijdering</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De filtervorm heeft grote invloed op de chloorverwijderingsprestaties. GAC (Granular Activated
            Carbon) en koolstofblokfilters gebruiken dezelfde grondstof maar presteren fundamenteel
            verschillend door hun structuur.
          </p>

          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Eigenschap</th>
                  <th className="py-2.5 px-3 font-semibold text-center">GAC</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Koolstofblok (CTO)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { eigenschap: 'Chloorverwijdering', gac: '80-95%', blok: '95-99%' },
                  { eigenschap: 'THM-verwijdering', gac: '75-90%', blok: '90-99%' },
                  { eigenschap: 'Contacttijd nodig', gac: '10-30 sec', blok: '1-5 sec' },
                  { eigenschap: 'Mechanische filtratie', gac: 'Nauwelijks', blok: 'Tot 0,5 micron' },
                  { eigenschap: 'Kanalvorming', gac: 'Ja (risico)', blok: 'Nee (uniforme stroom)' },
                  { eigenschap: 'NSF/ANSI 42 haalbaar', gac: 'Ja', blok: 'Ja (hogere scores)' },
                  { eigenschap: 'Jaarkosten', gac: 'EUR 25-80', blok: 'EUR 40-120' },
                ].map((r, i) => (
                  <tr key={r.eigenschap} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.eigenschap}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.gac}</td>
                    <td className="py-2.5 px-3 text-center text-[#005F8A] font-semibold">{r.blok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Voor dagelijkse chloorverwijdering uit Nederlands leidingwater is een GAC filterkan (Brita,
            PearlCo) doorgaans voldoende. Voor een onderbouwfilter of een systeem waarbij ook THM en
            organische microverontreinigingen verwijderd moeten worden, is een gecertificeerd
            koolstofblokfilter de betere keuze. Bekijk het volledige overzicht op de{' '}
            <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">
              koolstoffilter startpagina
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Trihalomethanen (THM) en andere chloorderivaten</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vrij chloor in leidingwater reageert met natuurlijke organische stoffen (NOM) in het
            distributienet en vormt daarbij <strong>trihalomethanen (THM)</strong>: chloroform (CHCl&sub3;),
            bromodichloormethaan (CHBrCl&sub2;), dibromochloormethaan (CHBr&sub2;Cl) en bromoform (CHBr&sub3;).
            THM zijn geclassificeerd als mogelijk kankerverwekkend (IARC groep 2B) bij chronische
            blootstelling via drinkwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Nederlandse norm voor de som van THM in drinkwater is 25 microgram per liter (EU
            Drinkwaterrichtlijn 2020/2184). In de praktijk liggen Nederlandse THM-waarden ver onder
            deze grenswaarde, maar in oudere stadsdistributienetwerken kunnen lokaal hogere
            concentraties voorkomen, met name bij warm weer wanneer de verblijftijd van water in
            het net toeneemt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over chloorderivaten in drinkwater en de gezondheidsrisico&apos;s leest u op de pagina{' '}
            <Link href="/stoffen-in-drinkwater/chloor-bijproducten" className="text-[#005F8A] underline hover:no-underline">
              chloor bijproducten in drinkwater
            </Link>.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Chlooraminen:</strong> Naast THM kan chloor ook
            chlooraminen vormen (monochloramine, dichloramine). In Nederland gebruiken de meeste
            waterleidingbedrijven vrij chloor, maar een klein aantal regio&apos;s past monochloramine toe
            als extra bescherming bij lange distributienetwerken. Raadpleeg het jaarverslag van uw
            waterleidingbedrijf om te controleren welk desinfectiemiddel wordt gebruikt.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">NSF/ANSI 42: de certificering voor chloorverwijdering</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 42 is de internationale standaard voor esthetische waterbehandeling, specifiek
            voor de verwijdering van chloor, smaak en geur. Een filter met NSF/ANSI 42-certificering
            heeft een onafhankelijk testtraject doorlopen waarbij het filtermedium is getest op:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Chloorverwijderingspercentage gedurende de gehele filterlevensduur (niet alleen aan het begin)</li>
            <li>Materiaaleigenschappen: geen uitlooggedrag van het filtermateriaal zelf</li>
            <li>Structurele integriteit: geen breuk of bypassvorming bij normale waterdruk</li>
            <li>Nauwkeurigheid van de opgegeven filterlevensduur in liters of maanden</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 53 is de aanvullende norm voor gezondheidskundige reductie (lead, VOC, THM,
            cystes). Voor complete bescherming kunt u zoeken naar filters met zowel NSF/ANSI 42
            als NSF/ANSI 53 certificering. Controleer altijd het specifieke certificaatnummer via
            de NSF-productzoekmachine, niet alleen het logo op de verpakking.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Chlooramine: wanneer koolstof niet voldoende is</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chlooramine (monochloramine, NH&sub2;Cl) is structureel anders dan vrij chloor en reageert
            anders met actieve kool. Terwijl vrij chloor snel wordt gereduceerd via de chemische
            reactie met de koolstofmatrix, verloopt de reactie met chlooramine veel trager.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standaard koolstoffilters verwijderen chlooramine voor slechts 50&ndash;70%, terwijl
            vergelijkbare filters vrij chloor voor 95&ndash;99% verwijderen. Wilt u chlooramine
            effectief verwijderen, dan zijn de volgende opties beschikbaar:
          </p>
          <div className="space-y-3 mb-4">
            <div className="border border-gray-100 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-1">Catalytisch geactiveerde kool</h3>
              <p className="text-sm text-gray-600">
                Speciaal behandelde kool (bijv. Centaur-kool van Cabot) met verhoogde katalytische
                activiteit voor chlooramineafbraak. Verwijdering &gt;95% ook voor monochloramine.
                Herkenbaar aan de aanduiding &quot;catalytic carbon&quot; of &quot;enhanced GAC&quot; op het filterlabel.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-1">KDF-medium (Kinetic Degradation Fluxion)</h3>
              <p className="text-sm text-gray-600">
                KDF is een koper-zinklegering die via redoxreacties chlooramine afbreekt. KDF 55
                is het meest gebruikte type voor chloor en chlooramine. Wordt vaak gecombineerd
                met actieve kool in hybride filterpatronen.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-1">Omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">
                RO-membranen verwijderen chlooramine via mechanische rejectie en adsorptie voor
                &gt;90%. Let op: chlooramine beschadigt polyamide RO-membranen minder dan vrij
                chloor, maar voor optimale membraanlevensduur wordt een catalytisch koolstof
                voorfilter aanbevolen.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wilt u chloor ook verwijderen met een waterfilter dan bekijkt u onze vergelijkingspagina{' '}
            <Link href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline hover:no-underline">
              chloor verwijderen met waterfilter
            </Link>{' '}
            voor een compleet overzicht van alle opties.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/chloor-bijproducten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Chloor bijproducten in drinkwater</h3>
              <p className="text-sm text-gray-600">THM, HAA, chlooramine: wat zijn de gezondheidsrisicos van chloorderivaten in leidingwater?</p>
            </Link>
            <Link href="/koolstoffilter/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een koolstoffilter?</h3>
              <p className="text-sm text-gray-600">Adsorptie, van der Waals-krachten, GAC vs blokfilter en de wetenschap achter actief kool.</p>
            </Link>
            <Link href="/koolstoffilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Koolstoffilter overzicht</h3>
              <p className="text-sm text-gray-600">Complete gids: typen koolstoffilters, kosten, aanbevolen modellen en koopadvies.</p>
            </Link>
            <Link href="/waterfilter/chloor-verwijderen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Chloor verwijderen met waterfilter</h3>
              <p className="text-sm text-gray-600">Alle filteropties voor chloorverwijdering vergeleken: koolstof, KDF, RO en meer.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over koolstoffilter en chloor
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
