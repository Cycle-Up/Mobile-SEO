import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Omgekeerde osmose vergelijken: typen, prestaties en kosten",
  description:
    "Vergelijk alle typen osmosefilters: onderbouw, aanrecht, inline en 4-in-1 kraan. Filterprestaties, kosten en installatie-eisen naast elkaar.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/omgekeerde-osmose-vergelijken" },
  openGraph: {
    title: "Omgekeerde osmose vergelijken: typen, prestaties en kosten",
    description:
      "Vergelijk alle typen osmosefilters: onderbouw, aanrecht, inline en 4-in-1 kraan. Filterprestaties, kosten en installatie-eisen naast elkaar.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen 5-stage en 3-stage osmose?",
    answer:
      "Een 3-stage osmosefilter bestaat uit sedimentfilter, koolstoffilter en membraan. Een 5-stage systeem voegt een tweede koolstoffilter (post-carbon) en vaak een remineralisatiestage toe. De extra stages verbeteren de smaak en voegen calcium en magnesium terug toe die het membraan heeft verwijderd. Filterprestaties op PFAS, lood en nitraat zijn bij beide typen vergelijkbaar; het verschil zit in watersmak en mineralengehalte.",
  },
  {
    question: "Hoe snel is een osmosefilter?",
    answer:
      "Een standaard onderbouw osmosefilter met tank produceert 6-15 liter per uur en levert via de opslagtank (8-12 liter) direct water. Systemen zonder tank (tankless/booster) leveren continu water aan 1,5-3 liter per minuut. Een 75 GPD membraan produceert circa 280 liter per dag onder ideale omstandigheden (25 graden, 6 bar druk), maar in de Nederlandse praktijk (lagere waterdruk, koudere temperatuur) is de praktische capaciteit 30-60% lager.",
  },
  {
    question: "Wat is een boosterpomp en wanneer heb ik die nodig?",
    answer:
      "Een boosterpomp verhoogt de waterdruk aan de inlaat van het osmosemembraan. Osmosemembranen werken optimaal bij 4-8 bar. Nederlandse leidingdruk ligt gemiddeld op 3-5 bar, maar in flats of bij gebruik van meerdere apparaten tegelijk kan de druk dalen tot 2-3 bar. Onder 3 bar daalt de membraanefficiëntie en stijgt de afvalwaterverhouding. Een boosterpomp is aanbevolen bij leidingdruk onder 4 bar en bij systemen zonder opslagtank.",
  },
  {
    question: "Hoe lang gaat een osmosemembraan mee?",
    answer:
      "Een kwalitatief TFC (thin film composite) membraan gaat 2-3 jaar mee bij normaal gebruik. Factoren die de levensduur verkorten: hoge waterhardheid (boven 20 dH zonder voorbehandeling), chloor in het inkomende water (pre-koolfilter is essentieel), watertemperatuur boven 30 graden en waterdruk boven 10 bar. Een TDS-meter meet de rejectiegraad: als de TDS van het osmosewater stijgt naar meer dan 10-15% van de inkomende TDS, is membraanvervanging gewenst.",
  },
  {
    question: "Welk type osmosefilter past in een huurwoning?",
    answer:
      "Voor huurwoningen zijn aanrechtfilters (countertop) de meest geschikte keuze: ze hoeven niet vast te worden gemonteerd, vereisen geen aanpassingen aan de leidingen en zijn eenvoudig mee te nemen bij verhuizing. Sommige onderbouw systemen met snelkoppelingen zijn ook zonder permanente wijzigingen aan te sluiten op de koudwaterkraan. Bij twijfel is het verstandig om de verhuurder te raadplegen over de installatie.",
  },
];

export default function OmgekeerdeOsmoseVergelijkenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Omgekeerde osmose vergelijken", url: "https://waterfilterplatform.nl/vergelijken/omgekeerde-osmose-vergelijken" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Omgekeerde osmose vergelijken: typen, prestaties en kosten",
          description:
            "Vergelijk alle typen osmosefilters: onderbouw, aanrecht, inline en 4-in-1 kraan. Filterprestaties, kosten en installatie-eisen naast elkaar.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/vergelijken/omgekeerde-osmose-vergelijken",
        }}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:underline">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Omgekeerde osmose vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose vergelijken: typen, prestaties en kosten
          </h1>
          <QuickAnswer answer="Er zijn 4 typen osmosefilters: onderbouw (meest populair, 300-700 euro), aanrechtfilter/countertop (verplaatsbaar, 200-400 euro), inline/koelkast (100-200 euro, minder capaciteit) en 4-in-1 kraan (incl. kokend water, 1.200-2.500 euro). Alle typen bereiken 95-99% reductie van PFAS, lood en nitraat." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">De 4 typen osmosefilters vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De markt voor omgekeerde-osmosefilters heeft zich de afgelopen jaren sterk gediversificeerd.
            Naast het klassieke onderbouw systeem zijn er inmiddels compacte aanrechtmodellen, inlinefiltres
            voor koelkasten met waterafgifte en gecombineerde systemen met kokend water. Elk type heeft
            zijn eigen toepassingsprofiel, installatievereisten en kostenstructuur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wat alle vier de typen gemeen hebben: ze gebruiken een semipermeabel TFC-membraan (thin film
            composite) dat water filtert op poriegroottes van 0,0001 micron. Op dit schaalniveau worden
            vrijwel alle opgeloste ionen en moleculen tegengehouden, inclusief PFAS-verbindingen, loodionen,
            nitraat, arsenicum en microplastics. De filterprestaties op de kernstoffen zijn daardoor
            vergelijkbaar tussen de typen; de verschillen zitten in capaciteit, installatie en gebruiksgemak.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Vergelijkingstabel: 4 typen osmosefilters</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-3 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-3 py-3 font-semibold text-[#003F5C] border border-gray-200">Onderbouw</th>
                  <th className="text-left px-3 py-3 font-semibold text-[#003F5C] border border-gray-200">Aanrecht (countertop)</th>
                  <th className="text-left px-3 py-3 font-semibold text-[#003F5C] border border-gray-200">Inline / koelkast</th>
                  <th className="text-left px-3 py-3 font-semibold text-[#003F5C] border border-gray-200">4-in-1 kraan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aanschafprijs", "300-700 euro", "200-400 euro", "100-200 euro", "1.200-2.500 euro"],
                  ["Capaciteit (liter/dag)", "100-400 liter", "50-150 liter", "30-80 liter", "100-300 liter"],
                  ["Filter-stages", "3-7 stages", "3-5 stages", "2-3 stages", "4-6 stages"],
                  ["NSF-certificering", "NSF 58 / NSF 42", "NSF 58 / NSF 42", "NSF 58 (beperkt)", "NSF 58 / NSF 42"],
                  ["Installatie", "Vast (loodgieter aanbevolen)", "Verplaatsbaar, geen tools", "Vast (inline)", "Vast, professioneel"],
                  ["Membraanwissel gemak", "Eenvoudig (DIY)", "Eenvoudig (DIY)", "Moeilijk (achter koelkast)", "Matig (technicus)"],
                  ["Footprint", "Onder aanrecht", "Op aanrecht (30x20 cm)", "Achter koelkast", "Onder aanrecht + kraan"],
                  ["Kokend water", "Nee", "Nee", "Nee", "Ja (95-100 graden)"],
                  ["PFAS reductie", "95-99%", "95-99%", "90-98%", "95-99%"],
                  ["Jaarlijkse filterkosten", "80-150 euro", "60-120 euro", "50-100 euro", "100-200 euro"],
                ].map(([eigenschap, onderbouw, aanrecht, inline, vierInEen], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-3 py-2.5 font-medium text-gray-700 border border-gray-200">{eigenschap}</td>
                    <td className="px-3 py-2.5 text-gray-700 border border-gray-200">{onderbouw}</td>
                    <td className="px-3 py-2.5 text-gray-700 border border-gray-200">{aanrecht}</td>
                    <td className="px-3 py-2.5 text-gray-700 border border-gray-200">{inline}</td>
                    <td className="px-3 py-2.5 text-gray-700 border border-gray-200">{vierInEen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Wanneer welk type kiezen?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De keuze voor een osmosetype hangt sterk af van de woonsituatie, het waterverbruik en de gewenste
            functionaliteit. Hieronder staan de belangrijkste beslisscenarios uitgewerkt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Appartement of huurwoning</h3>
              <p className="text-sm text-gray-700">
                Kies een aanrechtfilter (countertop). Geen permanente installatie nodig, eenvoudig verplaatsbaar
                en mee te nemen bij verhuizing. Sluit aan op de bestaande kraan via een adapter.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Gezin met hoog waterverbruik</h3>
              <p className="text-sm text-gray-700">
                Kies een onderbouw systeem met 75-200 GPD membraan en opslagtank van 10-15 liter.
                Voldoende capaciteit voor koken, drinken en babyvoeding tegelijk.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Koffieliefhebber of barista thuis</h3>
              <p className="text-sm text-gray-700">
                Kies een onderbouw systeem met remineralisatiestage. Osmosewater is te puur voor espresso
                (TDS onder 10 mg/L geeft vlakke smaak); remineralisatie brengt TDS naar 50-150 mg/L
                voor optimale extractie.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Baby of zuigeling in huis</h3>
              <p className="text-sm text-gray-700">
                Kies een onderbouw systeem met remineralisatie. Osmosewater zonder mineralen is niet
                geschikt voor dagelijkse bereiding van flesvoeding vanwege te laag mineralengehalte;
                remineralisatie lost dit op.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Koelkast met waterafgifte</h3>
              <p className="text-sm text-gray-700">
                Kies een inline osmosefilter die tussen de waterleiding en de koelkast wordt geplaatst.
                Lagere capaciteit maar voldoende voor koelkastgebruik; membraanwissel is minder eenvoudig.
              </p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Kokend water wens erbij</h3>
              <p className="text-sm text-gray-700">
                Kies een 4-in-1 kransysteem (zoals Quooker Cube met osmose of Grohe Blue Home Pure).
                Duur in aanschaf maar combineert gefilterd, gekoeld, bruisend en kokend water in
                &eacute;&eacute;n kraan.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Technische specificaties: TDS, werkdruk en recovery rate</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij het vergelijken van osmosefilters zijn drie technische parameters cruciaal voor een eerlijke
            beoordeling van de werkelijke filterprestaties en effici&euml;ntie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>TDS-rejectie</strong> geeft aan welk percentage van de totale opgeloste stoffen het membraan
            tegenhoudt. Een goed TFC-membraan haalt 95-99% TDS-rejectie. In de praktijk betekent dit: bij
            een inkomend TDS van 400 mg/L (harde Nederlandse gebieden) is de TDS van het osmosewater 4-20 mg/L.
            Een TDS-meter is onmisbaar om de membraanconditie periodiek te controleren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Werkdruk</strong> is de leidingdruk aan de inlaat van het membraan. Osmosemembranen
            werken optimaal bij 4,5-8 bar. Onder 3 bar daalt de rejectiegraad en neemt het afvalwater
            disproportioneel toe. In Nederlandse woningen varieert de leidingdruk van 2,5 tot 6 bar; bij
            lage druk is een inlinepomp (boosterpomp) aan te raden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Recovery rate</strong> (afvalwaterverhouding) geeft aan welk deel van het inkomende water
            als zuiver osmosewater beschikbaar komt. Standaard membranen hebben een recovery rate van
            15-25%: voor elke liter osmosewater gaat 3-6 liter als afvalwater het riool in. Moderne
            high-efficiency membranen met permeaatpomp bereiken recovery rates van 50-75%, wat de
            watereffici&euml;ntie aanzienlijk verbetert.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Membraantypes: 75 GPD vs 100 GPD vs 200 GPD</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De membraancapaciteit wordt uitgedrukt in gallons per dag (GPD) onder standaardcondities
            (25 graden Celsius, 60 psi / 4,1 bar, TDS 250 mg/L). In Nederlandse praktijkomstandigheden
            ligt de werkelijke capaciteit lager.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Membraantype</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Capaciteit (standaard)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Praktijk NL (est.)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Geschikt voor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["75 GPD", "284 liter/dag", "100-170 liter/dag", "1-2 personen, appartement"],
                  ["100 GPD", "378 liter/dag", "150-230 liter/dag", "2-4 personen, gezin"],
                  ["200 GPD", "757 liter/dag", "300-450 liter/dag", "Groot gezin, semi-professioneel"],
                ].map(([type, standaard, praktijk, geschikt], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{type}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{standaard}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{praktijk}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{geschikt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor een gemiddeld Nederlands gezin van 4 personen dat 2 liter drinkwater per persoon per dag
            gebruikt plus kookwater is een 100 GPD membraan ruim voldoende. Een 200 GPD membraan is zinvol
            als het systeem zonder opslagtank werkt (tankless/on-demand) of als de leidingdruk laag is en
            de effectieve capaciteit daardoor daalt.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Remineralisatie als optionele extra stage</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter verwijdert niet alleen schadelijke stoffen, maar ook vrijwel alle mineralen.
            Het geproduceerde water heeft een TDS van 1-20 mg/L en is daarmee zachter dan bronwater.
            Voor dagelijks drinken is dit veilig, maar voor specifieke toepassingen kan remineralisatie
            wenselijk zijn.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een remineralisatiestage voegt calciumcarbonaat en magnesiumoxide terug toe via een
            mineraalpatroon van calcietkorrels of via een Maifanite-steen. De TDS stijgt hierdoor naar
            50-150 mg/L, afhankelijk van de contacttijd en de samenstelling van de patroon. Het water
            krijgt een rondere, minder &ldquo;lege&rdquo; smaak en de pH stijgt van 6-6,5 (osmosewater zonder
            remineralisatie) naar 7-7,5.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Koffie en thee:</strong> TDS van 50-150 mg/L geeft betere extractie dan ultralaag TDS-water.</li>
            <li><strong>Babyvoeding:</strong> WHO-richtlijnen adviseren water met voldoende mineralen; remineralisatie maakt osmosewater geschikt.</li>
            <li><strong>Dagelijks drinken:</strong> Voor mensen die de smaak van mineraalwater prefereren boven ultrazuiver water.</li>
            <li><strong>Niet noodzakelijk:</strong> Voor de filterfunctie (PFAS, lood, nitraat) is remineralisatie niet vereist; osmosewater zonder remineralisatie voldoet volledig aan de Nederlandse drinkwaternorm.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">Kosten over 5 jaar vergeleken (TCO)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Kostenpost</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Onderbouw</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Aanrecht</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Inline</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">4-in-1 kraan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aanschaf + installatie", "500-900 euro", "200-400 euro", "150-250 euro", "1.500-3.000 euro"],
                  ["Filters per jaar", "80-150 euro", "60-120 euro", "50-100 euro", "100-200 euro"],
                  ["Membraanvervanging (2-3 jr)", "50-80 euro", "40-70 euro", "40-70 euro", "70-120 euro"],
                  ["Totaal 5 jaar (TCO)", "950-1.850 euro", "600-1.200 euro", "550-1.000 euro", "2.500-5.500 euro"],
                ].map(([post, onderbouw, aanrecht, inline, vierInEen], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{post}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{onderbouw}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{aanrecht}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{inline}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{vierInEen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het aanrechtmodel heeft de laagste aanschafkosten en is het meest geschikt voor gebruikers die
            flexibiliteit waarderen. Het onderbouw systeem biedt de beste balans tussen capaciteit,
            gebruiksgemak en kosten op lange termijn voor een gezin. Het 4-in-1 kransysteem is aanzienlijk
            duurder maar combineert functionaliteit waarvoor anders twee aparte apparaten nodig zouden zijn.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-10 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Vergelijken", href: "/vergelijken" },
              { label: "Omgekeerde osmose", href: "/omgekeerde-osmose" },
              { label: "Osmosefilter kopen", href: "/omgekeerde-osmose/kopen" },
              { label: "Waterfilter keuzehulp", href: "/keuzehulp" },
              { label: "Filtertechnieken", href: "/filtertechnieken" },
              { label: "Hoe werkt omgekeerde osmose? Technisch uitgelegd", href: "/filtertechnieken/omgekeerde-osmose" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#005F8A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: werking en types</h3>
              <p className="text-sm text-gray-600">Hoe membranen werken, welke verontreinigingen worden verwijderd en welk type RO past bij uw situatie.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58: het osmose keurmerk</h3>
              <p className="text-sm text-gray-600">Wat NSF 58 certificering inhoudt en welke verontreinigingen onafhankelijk getest worden.</p>
            </Link>
          </div>
        </section>

        <div className="mt-10">
          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
