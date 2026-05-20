import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Glyfosaat in drinkwater: normen, NL-situatie en waterfilter",
  description:
    "Glyfosaat in drinkwater: EU-norm 0,1 ug/L, NL situatie in Maas-regio. Actief kool en osmosefilter verwijderen glyfosaat effectief. Herbicide Round-up.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterfilter/glyfosaat" },
};

const faqItems = [
  {
    question: "Wat is glyfosaat?",
    answer:
      "Glyfosaat is een breedspectrum herbicide (onkruidverdelger) dat werkt door het enzym EPSP-synthase te remmen, een enzym dat planten nodig hebben voor de aanmaak van essentieel aminozuren. Zonder dit enzym kunnen planten niet groeien en sterven ze af. Glyfosaat is het meest gebruikte herbicide ter wereld en de werkzame stof in producten als Roundup. Het wordt toegepast in de landbouw (met name bij Roundup Ready gengewassen), langs spoorlijnen en wegen, en bij gemeentelijke onkruidbestrijding.",
  },
  {
    question: "Wat is het verband tussen glyfosaat en Roundup?",
    answer:
      "Roundup is de handelsnaam van het meest bekende glyfosaat-bevattende bestrijdingsmiddel, oorspronkelijk ontwikkeld door Monsanto (nu Bayer). Roundup bevat naast glyfosaat ook hulpstoffen (surfactants) die de opname door planten verbeteren. In drinkwateronderzoek wordt vaak glyfosaat zelf gemeten, maar ook AMPA (aminomethylfosfonzuur), het belangrijkste afbraakproduct van glyfosaat. Beide stoffen zijn in drinkwater detecteerbaar.",
  },
  {
    question: "Is glyfosaat kankerverwekkend?",
    answer:
      "Er is wetenschappelijke onenigheid. Het IARC (WHO-kankeronderzoeksagentschap) classificeerde glyfosaat in 2015 als groep 2A: waarschijnlijk kankerverwekkend bij mensen, gebaseerd op beperkt bewijs bij mensen en voldoende bewijs in dierexperimenten. De EFSA en de Europese Commissie kwamen tot een andere conclusie: glyfosaat is bij de huidige blootstellingsniveaus veilig voor mensen. Dit verschil is gebaseerd op de selectie van studies en de methoden van risicoanalyse, niet op fundamenteel verschillende wetenschap.",
  },
  {
    question: "Wat is de EU-norm voor glyfosaat in drinkwater?",
    answer:
      "De EU-drinkwaterrichtlijn 2020/2184 stelt een norm van 0,1 microgram per liter (ug/L) per individueel pesticide. Dit geldt ook voor glyfosaat. Daarnaast geldt een sumnorm van 0,5 ug/L voor alle pesticiden samen. Belangrijk: dit is een voorzorgsnorm gebaseerd op het voorzorgsbeginsel, niet op een specifiek toxicologisch vastgesteld veilig niveau. De norm is bewust laag gesteld als signaalgrens: als pesticiden meetbaar zijn in drinkwater, is dat een teken dat er iets mis gaat in de drinkwaterproductie.",
  },
  {
    question: "Is kraanwater in Nederland veilig wat betreft glyfosaat?",
    answer:
      "Ja, in het water dat de kraan verlaat. Nederlandse drinkwaterbedrijven handhaven strikte normen en hun zuiveringsprocessen zijn effectief voor het verwijderen van glyfosaat. In het oppervlaktewater voor zuivering (met name de Maas) worden glyfosaat en AMPA regelmatig gedetecteerd, soms boven de drinkwaternorm. Na zuivering voldoet het water vrijwel altijd aan de norm van 0,1 ug/L. De RIVM monitort de situatie continu.",
  },
  {
    question: "Waar in Nederland is glyfosaat in water het meest een aandachtspunt?",
    answer:
      "De Maas-regio heeft de hoogste glyfosaatconcentraties in oppervlaktewater, vanwege intensieve landbouw in het stroomgebied (Belgie, Noord-Frankrijk). De Maas is drinkwaterbron voor grote delen van Noord-Brabant en Limburg. Waterbedrijven in deze regio, zoals Brabant Water en WML, passen uitgebreide zuivering toe inclusief actief kool om glyfosaat te verwijderen. De Rijn heeft lagere concentraties dan de Maas, maar ook hier zijn glyfosaat en AMPA detecteerbaar.",
  },
  {
    question: "Hoe verwijdert een waterzuiveringsinstallatie glyfosaat?",
    answer:
      "Drinkwaterbedrijven gebruiken voornamelijk actief koolfiltratie (GAC) om glyfosaat te verwijderen. Glyfosaat adsorbeert aan het kooloppervlak en wordt zo uit het water gehouden. Aanvullend wordt ozonisatie toegepast die glyfosaat chemisch afbreekt. Membraanfiltratie (nanofiltration, omgekeerde osmose) verwijdert ook glyfosaat. De combinatie van ozonisatie en GAC-filtratie is de meest gebruikelijke aanpak bij waterbedrijven in het Maas-stroomgebied.",
  },
  {
    question: "Wat is AMPA en is het net zo gevaarlijk als glyfosaat?",
    answer:
      "AMPA (aminomethylfosfonzuur) is het primaire afbraakproduct van glyfosaat in de bodem en het water. AMPA wordt ook gevormd als bijproduct van EDTA-derivaten in wasmiddelen. In drinkwatermonitoring wordt AMPA apart gemeten en telt het mee in de sumnorm voor pesticiden (0,5 ug/L totaal). Het toxicologische profiel van AMPA is vergelijkbaar met of lager dan dat van glyfosaat. AMPA is ook wat moeilijker te verwijderen met actief kool dan glyfosaat zelf.",
  },
  {
    question: "Hoe effectief is een osmosefilter voor glyfosaat?",
    answer:
      "Een osmosefilter verwijdert 90-99% van glyfosaat. Het osmosemembraan houdt geladen moleculen zoals glyfosaat (zwitterion bij neutrale pH) effectief tegen. NSF/ANSI 58-gecertificeerde systemen zijn getest op pesticideverwijdering. Osmose is de meest complete filtermethode: het verwijdert naast glyfosaat ook nitraat, lood, PFAS, zware metalen en andere pesticiden tegelijk.",
  },
  {
    question: "Hoe effectief is een actief koolfilter voor glyfosaat?",
    answer:
      "Een actief koolblokfilter (koolstofblok, CTO) thuis verwijdert 60-80% van glyfosaat via adsorptie. Dit is minder dan osmose, maar beter dan niets. Granulaire actieve kool (GAC, zoals in filterkannen) is minder effectief doordat het contacttijd minder gecontroleerd is. Een koolstofblokfilter is ook effectief voor chloor, geur en sommige andere pesticiden. Voor de meest uitgebreide bescherming wordt een combinatie van koolstofvoorfilter en osmose aanbevolen.",
  },
];

export default function GlyfoosaatFilterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterfilter", url: "https://waterfilterplatform.nl/waterfilter" },
          { name: "Glyfosaat", url: "https://waterfilterplatform.nl/waterfilter/glyfosaat" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Glyfosaat in drinkwater: normen, NL-situatie en waterfilter",
          description:
            "Glyfosaat in drinkwater: EU-norm 0,1 ug/L, NL situatie in Maas-regio. Actief kool en osmosefilter verwijderen glyfosaat effectief. Herbicide Round-up.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterfilter/glyfosaat",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:underline">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Glyfosaat</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Glyfosaat in drinkwater: normen, NL-situatie en waterfilter
          </h1>
          <QuickAnswer answer="Glyfosaat (Roundup-herbicide) wordt gemeten in oppervlaktewater, met name de Maas. In kraanwater na zuivering voldoet de concentratie vrijwel altijd aan de EU-norm van 0,1 ug/L. Actief koolfiltratie verwijdert 60-80% van glyfosaat; osmose verwijdert 90-99%. Ook het afbraakproduct AMPA wordt gemeten. IARC bestempelde glyfosaat als waarschijnlijk kankerverwekkend (groep 2A); EFSA concludeert anders." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wat is glyfosaat: het meest gebruikte herbicide ter wereld
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Glyfosaat is een niet-selectief systemisch herbicide dat alle groene planten
            kan doden. Het remt het enzym 5-enolpyruvylshikimaat-3-fosfaatsynthase
            (EPSP-synthase), dat planten nodig hebben voor de biosynthese van aromatische
            aminozuren (fenylalanine, tyrosine, tryptofaan). Zonder deze aminozuren
            kunnen planten geen eiwitten aanmaken en sterven ze af. Menselijke cellen
            bezitten dit enzym niet, wat de basis vormt voor de aanname dat glyfosaat
            laag toxisch is voor mensen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Glyfosaat werd ontwikkeld door Monsanto en op de markt gebracht als Roundup
            in 1974. Wereldwijd is het de best verkochte herbicide. In Nederland wordt
            het toegepast in de akkerbouw (met name voor oogstrijping en onkruidbeheer),
            langs spoorwegen, op luchthavens en tot 2015 ook bij gemeentelijke
            onkruidbestrijding op verhardingen (sindsdien verboden).
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Route naar drinkwater: van landbouwperceel tot waterput
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Glyfosaat bereikt het oppervlaktewater via meerdere routes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>
              <strong>Landbouwuitspoeling:</strong> Na toepassing op akkers spoelt een
              deel van het glyfosaat via drainagewater naar het oppervlaktewater. Hevige
              regenval kort na bespuiting vergroot dit effect. De Maas ontvangt bijzonder
              veel glyfosaat vanuit de intensieve landbouw in Belgie en Noord-Frankrijk.
            </li>
            <li>
              <strong>Luchthavenonkruidbestrijding:</strong> Op en rond luchthavens wordt
              glyfosaat grootschalig gebruikt op verhardingen. Via afwateringskanalen
              belandt dit in het oppervlaktewater.
            </li>
            <li>
              <strong>Spoorwegbeheer:</strong> ProRail en buitenlandse spoorwegbedrijven
              gebruiken glyfosaat op spoorbermen. Via grondwater en drainagesystemen
              kan dit het oppervlaktewater bereiken.
            </li>
            <li>
              <strong>Gemeentelijke toepassing (historisch):</strong> Tot 2015 werd
              glyfosaat gebruikt op bestrating in Nederlandse gemeenten. Restanten
              zijn nog meetbaar in grondwater.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Situatie in Nederland: RIVM-monitoring in het Maas-stroomgebied
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het RIVM en drinkwaterbedrijven monitoren regelmatig de concentraties
            glyfosaat en het afbraakproduct AMPA in oppervlaktewater en kraanwater.
            De bevindingen:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>
              In het <strong>oppervlaktewater van de Maas</strong> worden glyfosaat
              en AMPA regelmatig gedetecteerd. Voor zuivering zijn de concentraties
              soms boven de drinkwaternorm van 0,1 ug/L.
            </li>
            <li>
              In het <strong>kraanwater na zuivering</strong> voldoet de concentratie
              vrijwel altijd aan de norm van 0,1 ug/L. Overschrijdingen in het
              eindproduct zijn zeldzaam.
            </li>
            <li>
              In de <strong>Rijn</strong> zijn de concentraties lager dan in de Maas,
              maar ook hier zijn glyfosaat en AMPA detecteerbaar.
            </li>
            <li>
              In <strong>grondwater</strong> is glyfosaat minder mobiel dan in
              oppervlaktewater (het bindt sterk aan bodemdeeltjes), maar AMPA is
              persistenter en wordt ook in ondiep grondwater gemeten.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Normen: de EU-pesticidenregel en haar bijzondere logica
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De EU-norm van 0,1 ug/L per pesticide is geen toxicologisch afgeleide
            gezondheidsgrenswaarde. Het is een voorzorgsnorm die stelt: als pesticiden
            in drinkwater meetbaar zijn, dan is er iets misgegaan in de bescherming
            van de drinkwaterbron. De norm geldt voor elk individueel pesticide en
            het totaal van alle pesticiden mag 0,5 ug/L niet overschrijden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit betekent dat ook pesticiden waarvoor geen gezondheidsrisico is
            aangetoond bij lage concentraties, toch onder deze norm moeten vallen.
            Voor glyfosaat heeft de EFSA een Acceptable Daily Intake (ADI) vastgesteld
            van 0,5 mg/kg lichaamsgewicht per dag. Bij de drinkwaternorm van 0,1 ug/L
            en een verbruik van 2 liter per dag is de blootstelling via water slechts
            een fractie van de ADI. De norm is dus bewust strenger dan strikt
            toxicologisch noodzakelijk.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Thuis filteren: vergelijking van methoden
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Filtermethode</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Glyfosaat-reductie</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Ook andere pesticiden</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Kosten (globaal)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">90-99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">Ja, breed spectrum</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">EUR 200-600 aanschaf</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolblokfilter (CTO)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-yellow-700 font-semibold">60-80%</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-yellow-700 font-semibold">Ja, organische pesticiden</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">EUR 50-200 aanschaf</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Osmose + koolstofvoorfilter</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">&gt;99%</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">Ja, optimale bescherming</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">EUR 300-700 aanschaf</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Granulaire actieve kool (GAC)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-yellow-700 font-semibold">20-60%</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-yellow-700 font-semibold">Variabel</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">EUR 30-100 aanschaf</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Waterfilterkan</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-red-700 font-semibold">Onbekend / laag</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-red-700 font-semibold">Niet betrouwbaar</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">EUR 30-60 aanschaf</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de meest uitgebreide bescherming tegen glyfosaat, AMPA en andere
            pesticiden is osmose de aangewezen keuze. Zie ook onze pagina{" "}
            <Link href="/waterfilter/pesticiden" className="text-[#005F8A] hover:underline font-medium">
              waterfilter voor pesticiden
            </Link>{" "}
            voor een breder overzicht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Glyfosaat is niet de enige persistente verontreiniging in oppervlaktewater.
            PFAS (poly- en perfluoroalkylstoffen) zijn een groeiend aandachtspunt.
            Lees meer op onze pagina{" "}
            <Link href="/leidingwater/pfas" className="text-[#005F8A] hover:underline font-medium">
              PFAS in leidingwater
            </Link>. Meer over drinkwaternormen voor pesticiden en andere stoffen
            vindt u op de pagina{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              drinkwaternormen overzicht
            </Link>. Bekijk ook ons overzicht van{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilters kopen
            </Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/pesticiden" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Pesticiden in drinkwater</h3>
              <p className="text-sm text-gray-600">Overzicht van alle pesticiden die in Nederlands drinkwater worden gemeten.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
              <p className="text-sm text-gray-600">Hoe een osmosefilter glyfosaat en andere pesticiden effectief verwijdert.</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
              <p className="text-sm text-gray-600">Alle wettelijke grenswaarden voor drinkwater inclusief pesticiden.</p>
            </Link>
            <Link href="/waterfilter/nitraat" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Nitraat in drinkwater</h3>
              <p className="text-sm text-gray-600">Nitraat uit landbouw in grondwater: normen, risicos en oplossingen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
