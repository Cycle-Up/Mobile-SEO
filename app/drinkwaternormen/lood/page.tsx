import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Lood in drinkwater: EU-norm 2026, loden leidingen en osmose als bescherming",
  description:
    "Lood in drinkwater: EU-norm 2026 is 5 microgram/liter. Loden leidingen voor 1960 zijn het risico. Testen, vervangen en osmose als thuisbescherming.",
  alternates: { canonical: "https://waterfilterplatform.nl/drinkwaternormen/lood" },
  openGraph: {
    title: "Lood in drinkwater: EU-norm 2026, loden leidingen en osmose als bescherming",
    description:
      "Lood in drinkwater: EU-norm 2026 is 5 microgram/liter. Loden leidingen voor 1960 zijn het risico. Testen, vervangen en osmose als thuisbescherming.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is de EU-norm voor lood in drinkwater die in 2026 van kracht wordt?",
    answer:
      "De EU-drinkwaterrichtlijn 2020/2184 verlaagt de maximale loodconcentratie in drinkwater van 10 naar 5 microgram per liter (ug/L). In Nederland wordt deze norm geimplementeerd via het Drinkwaterbesluit. Voor het openbare distributienet geldt de norm al eerder; voor binnenhuisinstallaties loopt de implementatietermijn tot 12 januari 2036, vanwege de complexiteit van leidingvervangingen in bestaande woningbouw.",
  },
  {
    question: "Is er een veilige ondergrens voor lood in drinkwater?",
    answer:
      "Nee. De WHO, EFSA en RIVM zijn eensluidend: er bestaat geen aantoonbaar veilige ondergrens voor loodblootstelling, met name voor kinderen. Elk niveau van chronische loodblootstelling kan schadelijk zijn voor de hersenontwikkeling bij jonge kinderen. De norm van 5 ug/L is een pragmatisch haalbare grens, geen nulsafeveld.",
  },
  {
    question: "Hoe komt lood in het drinkwater terecht als het waterbedrijf loodvrij levert?",
    answer:
      "Drinkwaterbedrijven leveren loodvrij water aan de perceelsgrens. Lood in het kraanwater is afkomstig van loden leidingen, soldeerverbindingen of messingkoppelingen in de woning zelf. Het zure of zachte water lost lood op uit de binnenwand van oude leidingen, vooral bij lang stilstaand water. Dit is een probleem van de binnenhuisinstallatie, niet van het distributiesysteem.",
  },
  {
    question: "Welke woningen hebben het hoogste risico op loden leidingen?",
    answer:
      "Woningen gebouwd voor 1960 hebben een hoog risico op loden binnenleidingen of loden aansluitleidingen. Woningen van 1960 tot 1985 kunnen loodtinhoudend soldeer bij koperleidingen hebben. Na 1985 zijn loden leidingen en loodtinhoudend soldeer niet meer toegestaan in nieuwe woningbouw. Appartementencomplexen kunnen ook een collectieve loden aansluitpleiding hebben die nog niet vervangen is.",
  },
  {
    question: "Hoe meet ik of mijn water lood bevat?",
    answer:
      "Lood is niet te zien, ruiken of proeven in water. De betrouwbaarste methode is een watertest via een gecertificeerd laboratorium (EUR 30 tot EUR 80). Laat het water tappen na minimaal 30 minuten stilstand voor de worst-case meting (first-flush). Na het doorspoelen van de leidingen is de loodconcentratie significant lager. Sommige gemeenten bieden gratis testkits aan voor woningen gebouwd voor 1960.",
  },
  {
    question: "Verwijdert een osmosefilter lood effectief?",
    answer:
      "Ja. Omgekeerde osmose is de meest effectieve filtermethode voor lood: 95 tot 99% loodverwijdering bij NSF/ANSI 58-gecertificeerde systemen. Het osmosemembraan heeft porieen van 0,0001 micrometer, veel kleiner dan loodionen. NSF/ANSI 58-certificering voor lood garandeert minimaal 95% reductie onder standaard testcondities.",
  },
  {
    question: "Helpt doorspoelen van de kraan als tijdelijke maatregel?",
    answer:
      "Ja, doorspoelen verlaagt de loodconcentratie significant. Laat de koude kraan minimaal 30 seconden tot 2 minuten lopen na stilstand van meer dan een uur. Dit spoelt het stilstaande water (dat lood heeft opgelost) weg. Het effect is het grootst bij de first-flush. Doorspoelen is een tijdelijke maatregel en lost het onderliggende leidingprobleem niet op.",
  },
  {
    question: "Wat kost het vervangen van loden huisleidingen?",
    answer:
      "Het vervangen van loden binnenleidingen kost doorgaans EUR 1.000 tot EUR 5.000, afhankelijk van de grootte van de woning en de toegankelijkheid van de leidingen. De aansluitpleiding op straat (eigendom van het drinkwaterbedrijf) wordt door het waterbedrijf vervangen. Voor de binnenleidingen is de eigenaar zelf verantwoordelijk. Sommige gemeenten bieden subsidies of gunstige leningen aan als onderdeel van renovatieprogrammas.",
  },
  {
    question: "Werkt een koolstofblokfilter ook voor loodverwijdering?",
    answer:
      "Alleen als het filter specifiek gecertificeerd is onder NSF/ANSI 53 voor loodreductie. Standaard GAC-granulaat koolfilters en filterkannen zijn niet betrouwbaar voor loodverwijdering. Een NSF/ANSI 53-gecertificeerd koolstofblokfilter kan 95%+ lood verwijderen, maar controleer altijd de specifieke claims in de NSF-productdatabank. Osmose (NSF 58) biedt de meest robuuste garantie.",
  },
  {
    question: "Wie loopt het meeste gevaar van lood in drinkwater?",
    answer:
      "Kinderen onder de 6 jaar zijn het meest kwetsbaar: hun hersenontwikkeling is gevoelig voor zelfs lage loodconcentraties. Zwangere vrouwen lopen verhoogd risico vanwege overdracht aan de foetus. Mensen in woningen van voor 1960 met ongekeurde of nooit vervangen leidingen. Zachte watergebieden (onder 10 graden Duits) zijn risicovoller omdat zacht water meer lood oploste uit leidingen.",
  },
  {
    question: "Heeft Nederland nog veel loden leidingen?",
    answer:
      "Nederland heeft de afgelopen decennia miljoenen loden leidingen vervangen. Drinkwaterbedrijven hebben hun deel van de aansluitingen (de openbare kant) voor een groot deel al vervangen. Het resterende risico zit in de binnenhuisinstallaties van oudere woningen. Het exacte aantal resterende loden binnenleidingen is onbekend, maar schattingen wijzen op tienduizenden tot honderdduizenden woningen, met name in de oudere stadswijken.",
  },
];

export default function LoodPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "Lood in drinkwater", url: "https://waterfilterplatform.nl/drinkwaternormen/lood" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Lood in drinkwater: EU-norm 2026, loden leidingen en osmose als bescherming",
          description:
            "Lood in drinkwater: EU-norm 2026 is 5 microgram/liter. Loden leidingen voor 1960 zijn het risico. Testen, vervangen en osmose als thuisbescherming.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/lood",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Lood in drinkwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Lood in drinkwater: EU-norm 2026, loden leidingen en osmose als bescherming
          </h1>
          <QuickAnswer answer="Lood in drinkwater komt niet van het waterbedrijf, maar van loden leidingen in oudere woningen (gebouwd voor 1960). Er bestaat geen veilige ondergrens voor loodblootstelling; kinderen zijn het meest kwetsbaar. De nieuwe EU-norm van 5 microgram per liter wordt volledig van kracht in 2036. Een osmosefilter (NSF/ANSI 58) verwijdert 95-99% van lood en is de meest betrouwbare bescherming aan de kraan. De structurele oplossing is vervanging van de loden leidingen." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Gezondheidsrisicos van lood: neurotoxisch zonder veilige drempel
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lood is een van de best gedocumenteerde neurotoxische stoffen in de medische
            literatuur. De wetenschappelijke consensus is helder: er bestaat geen veilige
            ondergrens voor loodblootstelling. Elke chronische blootstelling, ook aan
            concentraties ruim onder de wettelijke normen, kan meetbare schade veroorzaken
            bij kinderen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De gezondheidseffecten zijn afhankelijk van de blootstellingsroute, de duur
            en de leeftijd van de persoon:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Kinderen onder 6 jaar:</strong> De ernstigste groep. Het centraal
              zenuwstelsel en de hersenen zijn nog in ontwikkeling. Chronische blootstelling
              aan zelfs lage loodniveaus leidt aantoonbaar tot verlaagd IQ, verminderd
              leervermogen, verhoogde impulsiviteit en gedragsproblemen. De EFSA stelt dat
              een blootstelling equivalent aan een IQ-verlies van 1 punt per 0,5 ug/L bloed
              berekend kan worden voor jonge kinderen.
            </li>
            <li>
              <strong>Zwangere vrouwen:</strong> Lood passeert de placentaire barriere en
              bereikt de foetus. Hogere bloedloodwaarden bij moeders zijn geassocieerd met
              vroeggeboorte, laag geboortegewicht en neuromotorische achterstand bij het kind.
            </li>
            <li>
              <strong>Volwassenen:</strong> Chronische blootstelling verhoogt de kans op
              hoge bloeddruk, nierschade en reproductieve problemen. Het effect is minder
              acuut dan bij kinderen, maar bij langdurige blootstelling aan verhoogde
              concentraties klinisch relevant.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            De WHO, RIVM en EFSA zijn eensluidend: er bestaat geen veilig niveau. De wettelijke
            norm is een pragmatisch haalbare grens, geen garantie voor afwezigheid van
            gezondheidsrisico.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Bronnen van loodblootstelling via water
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Drinkwaterbedrijven leveren water dat voldoet aan de loodnorm aan de perceelsgrens.
            Het lood in het kraanwater thuis is vrijwel uitsluitend afkomstig van de
            binnenhuisinstallatie:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Loden binnenleidingen:</strong> Tot in de jaren vijftig van de vorige
              eeuw werden loden waterleidingen standaard toegepast in woningbouw. Bij
              woningen gebouwd voor 1960 is de kans groot dat de binnenleidingen geheel of
              gedeeltelijk van lood zijn. Deze leidingen lossen langzaam lood op in het water,
              met name bij lang stilstaand water of bij zachter water (lager kalkgehalte).
            </li>
            <li>
              <strong>Loden aansluitleidingen:</strong> De leiding van de straat naar de
              woning (eigendom van het drinkwaterbedrijf voor de perceelsgrens, van de eigenaar
              erna) kan ook van lood zijn in oudere woningen. Drinkwaterbedrijven hebben de
              openbare kant grotendeels vervangen, maar het huisaansluitgedeelte valt onder
              de verantwoordelijkheid van de eigenaar.
            </li>
            <li>
              <strong>Loodtinhoudend soldeer bij koperleidingen:</strong> In de periode
              1960-1985 werden koperen binnenleidingen aangelegd met soldeer dat tot 50%
              lood bevatte. Dit soldeer lost op bij contact met water, met name bij nieuwere
              of zachte watersamenstellingen. Het risico is lager dan bij volledig loden
              leidingen, maar niet verwaarloosbaar.
            </li>
            <li>
              <strong>Messingkoppelingen en kranen:</strong> Messing bevat tot 3% lood.
              Oudere kranen, T-stukken en koppelingen in de binnenwand kunnen lood afgeven
              aan stilstaand water, met name bij verhoogde watertemperatuur.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Situatie in Nederland: hoeveel loden leidingen zijn er nog?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederland heeft de afgelopen decennia substantieel geïnvesteerd in de vervanging
            van loden leidingen. Drinkwaterbedrijven hebben hun deel van de aansluitingen voor
            een groot deel vervangen. De precieze aantallen resterende loden binnenleidingen
            zijn niet centraal geregistreerd, omdat de eigenaar verantwoordelijk is voor de
            binnenhuisinstallatie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Schattingen wijzen op tientallen tot honderdduizenden woningen met nog (gedeeltelijk)
            loden binnenleidingen. Het risico concentreert zich in oudere stadswijken, met name
            in de vooroorlogse woningbouw in steden als Amsterdam, Rotterdam, Utrecht en Den Haag.
            Woningcorporaties hebben in de afgelopen jaren actief vervangingsprogrammas uitgevoerd,
            maar de particuliere huurmarkt en kleine VvEs blijven een blinde vlek.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wettelijke normen: van 10 naar 5 microgram per liter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De EU-drinkwaterrichtlijn 2020/2184 heeft de maximale loodconcentratie in drinkwater
            gehalveerd. De geschiedenis van de norm:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Tot 2013:</strong> Europese norm was 25 microgram per liter (ug/L)
            </li>
            <li>
              <strong>2013:</strong> Verlaging naar 10 ug/L via vorige EU-drinkwaterrichtlijn
            </li>
            <li>
              <strong>2020/2184:</strong> Nieuwe richtlijn stelt de definitieve norm op
              5 ug/L
            </li>
            <li>
              <strong>Implementatietermijn:</strong> Volledig van kracht voor het openbare
              net per 12 januari 2026; voor binnenhuisinstallaties loopt de termijn tot
              12 januari 2036 om de praktische uitdagingen van leidingvervanging te accommoderen
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            De verlaging naar 5 ug/L weerspiegelt de wetenschappelijke consensus dat de
            eerdere norm van 10 ug/L al niet veilig genoeg was. Meer context over de
            Europese norm vindt u op de pagina over de{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Hoe loodgehalte meten: first-flush versus doorspoelen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De manier waarop u het water tapt voor de test heeft grote invloed op het resultaat:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>First-flush (worst-case meting):</strong> Tap het water direct na minimaal
              30 minuten stilstand, zonder vooraf te spoelen. Dit geeft de hoogste loodconcentratie
              en is de meest representatieve meting voor de daadwerkelijke blootstelling in
              de ochtend of na vakantie.
            </li>
            <li>
              <strong>Na 2 minuten spoelen:</strong> Veel lager loodgehalte; meet eigenlijk
              het lood in de aanvoerleiding van het waterbedrijf, niet in de binnenleidingen.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Laat de watertest uitvoeren door een geaccrediteerd laboratorium. In Nederland
            zijn onder andere SGS, ALcontrol, Eurofins en Kiwa Water Research gecertificeerd
            voor drinkwateranalyse. Kosten: EUR 30 tot EUR 80 voor een loodspecifieke analyse.
            Uw gemeente of drinkwaterbedrijf kan u informeren of zij gratis testkits aanbieden.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wanneer moet ik me zorgen maken?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            U loopt verhoogd risico als aan een of meer van de volgende criteria wordt voldaan:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Uw woning is gebouwd <strong>voor 1960</strong> (hoog risico loden leidingen)</li>
            <li>Uw woning is gebouwd <strong>tussen 1960 en 1985</strong> (risico loodtinsoldeer)</li>
            <li>U woont in een appartement met een <strong>collectieve aansluitpleiding</strong> die nooit is vervangen</li>
            <li>Er wonen <strong>jonge kinderen (onder 6 jaar)</strong> of <strong>zwangere vrouwen</strong> in de woning</li>
            <li>U heeft <strong>zacht water</strong> (hardheid onder 10 graden Duits) &mdash; zacht water lost meer lood op</li>
            <li>U heeft uw <strong>leidingen nooit laten inspecteren</strong> in een woning van voor 1985</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Oplossingen: van doorspoelen tot leidingvervanging
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn verschillende benaderingen, van tijdelijk tot structureel:
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            1. Doorspoelen: tijdelijke maatregel
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Laat de koude kraan minimaal 30 seconden tot 2 minuten lopen voordat u water
            tapt voor drinken of koken. Dit is het meest effectief na lange perioden van
            stilstand (nacht, vakantie). Laboratoriumstudies tonen aan dat 30 seconden
            doorspoelen de loodconcentratie met 60 tot 90% kan verlagen. Gebruik het
            spoelwater voor planten of toilet. Doorspoelen lost het structurele probleem
            niet op, maar verlaagt de dagelijkse blootstelling significant.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            2. Point-of-Use filter (osmose): directe bescherming aan de kraan
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              omgekeerd osmosefilter
            </Link>{" "}
            direct onder de keukenkraan verwijdert 95 tot 99% van het lood. NSF/ANSI
            58-gecertificeerde systemen zijn getest op loodverwijdering tot minimaal 95%.
            Het filter werkt ongeacht hoe lang het water in de leidingen heeft gestaan.
            Dit is de meest directe en betrouwbare bescherming als leidingvervanging
            niet onmiddellijk mogelijk is.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Controleer altijd of het osmosefilter NSF/ANSI 58 gecertificeerd is voor lood.
            Meer over certificering leest u op onze pagina{" "}
            <Link href="/drinkwaternormen/waterfilter-certificering" className="text-[#005F8A] hover:underline font-medium">
              waterfilter certificering
            </Link>.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">
            3. Leidingvervanging: de structurele oplossing
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het vervangen van loden binnenleidingen is de enige definitieve oplossing.
            Een erkend loodgietersbedrijf vervangt de loden leidingen door koperen of
            kunststof leidingen. Kosten: EUR 1.000 tot EUR 5.000 afhankelijk van de
            omvang en bereikbaarheid. Het waterleidingbedrijf is verantwoordelijk voor
            het openbare deel (tot aan de perceelsgrens); de eigenaar betaalt voor
            het binnendeel.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vraag bij uw gemeente of drinkwaterbedrijf naar subsidies of
            renovatieprogrammas. Sommige gemeenten bieden gunstige leningen of bijdragen
            als onderdeel van duurzaamheids- of volksgezondheidsprogrammas.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Overzichtstabel: bronnen, risicos en oplossingen
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Bron</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Risiconiveau</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Oplossing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Loden binnenleidingen (voor 1960)</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Hoog</td>
                  <td className="border border-gray-300 px-3 py-2">Leidingvervanging + osmosefilter tot vervanging</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Loodtinsoldeer (1960-1985)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Matig</td>
                  <td className="border border-gray-300 px-3 py-2">Watertest + osmosefilter bij verhoogde waarden</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Messingkoppelingen en kranen</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Laag tot matig</td>
                  <td className="border border-gray-300 px-3 py-2">Doorspoelen + keuringsvrije kranen gebruiken</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Nieuwbouw na 1985</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Laag</td>
                  <td className="border border-gray-300 px-3 py-2">Geen specifieke actie noodzakelijk</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Distributienet waterbedrijf</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Laag</td>
                  <td className="border border-gray-300 px-3 py-2">Waterbedrijf verantwoordelijk; voldoet aan norm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over drinkwaternormen in Nederland leest u op de{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              overzichtspagina drinkwaternormen
            </Link>
            . Meer over de wettelijke context vindt u op onze pagina over de{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn 2020/2184
            </Link>
            . Wilt u een gecertificeerd osmosefilter aanschaffen als bescherming? Bekijk dan
            ons overzicht van{" "}
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

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
