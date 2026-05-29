import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Legionella-beheersplan voor bedrijven: wettelijke eisen & aanpak",
  description:
    "Wie moet een Legionella-beheersplan hebben, wat staat erin en hoe helpen waterfilters? Eisen uit het Drinkwaterbesluit uitgelegd voor hotels, scholen en",
  alternates: { canonical: "https://waterfilterplatform.nl/zakelijk/legionella-beheersplan" },
  openGraph: {
    title: "Legionella-beheersplan voor bedrijven: wettelijke eisen & aanpak",
    description:
      "Wie moet een Legionella-beheersplan hebben, wat staat erin en hoe helpen waterfilters? Eisen uit het Drinkwaterbesluit uitgelegd voor hotels, scholen en",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is een Legionella-beheersplan wettelijk verplicht voor mijn bedrijf?",
    answer:
      "Dat hangt af van de classificatie van uw instelling. Het Drinkwaterbesluit (bijlage 4) verplicht een schriftelijk beheersplan voor zogenaamde 'prioritaire instellingen': ziekenhuizen, verpleeghuizen, hotels, sportscholen met douches, zwembaden en andere instellingen met collectieve douchesystemen. Voor overige bedrijven met warmwatersystemen geldt de zorgplicht, maar is een formeel beheersplan niet altijd wettelijk afdwingbaar. Twijfel? Raadpleeg uw GGD of een gecertificeerde Legionella-adviseur.",
  },
  {
    question: "Wat moet er minimaal in een Legionella-beheersplan staan?",
    answer:
      "Een beheersplan omvat ten minste: (1) een actueel leidingschema van het warmwater- en koudwatersysteem; (2) een risicoanalyse met identificatie van risicopunten (dode leidingen, weinig gebruikte aftappunten, warmwaterboilers); (3) beheermaatregelen, zoals temperatuurgrenswaarden en spoelfrequentie; (4) een monsternameschema met meetfrequentie per locatie; (5) procedures bij normoverschrijding; en (6) logboek van uitgevoerde controles en metingen. Het plan moet worden opgesteld door of in samenwerking met een BRL 6010-gecertificeerde adviseur.",
  },
  {
    question: "Welke watertemperaturen moet ik aanhouden om Legionella te voorkomen?",
    answer:
      "De Nederlandse richtlijn schrijft voor: warm tapwater op ten minste 60°C opslaan in de boiler en minimaal 55°C aan elk aftappunt leveren. Koud tapwater moet onder de 25°C blijven — Legionella pneumophila groeit optimaal tussen 25°C en 45°C. In de praktijk betekent dit dat lange, niet-geïsoleerde leidingen door warme ruimten (meterkast, kruipruimte) een risico vormen voor het koude circuit. Circulatieleidingen voor warm water moeten ook boven 60°C worden gehouden om bacteriegroei in het circulatienet te voorkomen.",
  },
  {
    question: "Beschermen UV-sterilisatie of osmosefilters tegen Legionella?",
    answer:
      "UV-sterilisatie (254 nm) inactiveert Legionella effectief in het gefiltreerde water, maar biedt geen residuele bescherming: bacteriën die na de UV-eenheid in het leidingwater groeien worden niet bestreken. Omgekeerde osmose verwijdert bacteriën mechanisch (membraan 0,0001 µm), maar ook hier geldt: het verwijderde water kan na het membraan herbesmet worden als de temperatuur en stilstand dit toelaten. Koolstoffilters bieden géén Legionella-bescherming. De enige betrouwbare Legionella-beheerstrategie is thermisch beheer (60°C warm, ≤25°C koud), aangevuld met regelmatig doorspoelen.",
  },
  {
    question: "Hoe vaak moet ik Legionella-metingen laten uitvoeren?",
    answer:
      "Voor prioritaire instellingen geldt als minimum: jaarlijks één meting per risicopunt. Na een positieve meting (> 100 KVE/L voor Legionella pneumophila) is direct actie vereist en moeten hervattingsmetingen worden verricht. Bij hoog-risico systemen (whirlpools, koeltorens) wordt kwartaalmetingen aanbevolen. De GGD of NVWA kan bij inspectie aanvullende eisen stellen op basis van het risiconiveau van uw installatie. Kies altijd een KWR- of Kiwa-geaccrediteerd laboratorium voor de analyses.",
  },
];

export default function LegionellaBeheersplanPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Zakelijk", url: "https://waterfilterplatform.nl/zakelijk" },
          { name: "Legionella-beheersplan", url: "https://waterfilterplatform.nl/zakelijk/legionella-beheersplan" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Legionella-beheersplan voor bedrijven: wettelijke eisen & aanpak",
          description:
            "Wie moet een Legionella-beheersplan hebben, wat staat erin en hoe helpen waterfilters? Eisen uit het Drinkwaterbesluit uitgelegd voor hotels, scholen en",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/zakelijk/legionella-beheersplan",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/">Home</Link><span className="mx-2">/</span>
            <Link href="/zakelijk">Zakelijk</Link><span className="mx-2">/</span>
            <span>Legionella-beheersplan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Legionella-beheersplan voor bedrijven: wettelijke eisen &amp; aanpak
          </h1>
          <QuickAnswer answer="Prioritaire instellingen zoals hotels, sportscholen, ziekenhuizen en scholen zijn wettelijk verplicht een Legionella-beheersplan op te stellen op grond van het Drinkwaterbesluit (bijlage 4). Het plan omvat een risicoanalyse, temperatuurbeheer (60°C warm, ≤25°C koud), spoelschema en monsternameschema. Waterfilters zoals UV of osmose vervangen thermisch beheer niet." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="zakelijk" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wettelijke verplichting: Drinkwaterbesluit bijlage 4</h2>
          <p className="text-gray-700 mb-4">
            Het Drinkwaterbesluit verplicht eigenaren en beheerders van collectieve drinkwaterinstallaties
            in zogenaamde <strong>prioritaire instellingen</strong> tot het opstellen en bijhouden van een
            schriftelijk Legionella-beheersplan. Bijlage 4 van het besluit noemt onder andere:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 pl-2">
            <li>Ziekenhuizen, verpleeghuizen en zorginstellingen met kwetsbare gebruikers.</li>
            <li>Hotels, pensions en vakantieaccommodaties met collectieve warmwatervoorziening.</li>
            <li>Sportscholen, zwembaden en wellnesscentra met douches, spa of stoombad.</li>
            <li>Scholen en kinderdagverblijven met meer dan één verdieping of lange leidingen.</li>
            <li>Kantoren en bedrijfspanden met minder dan dagelijks gebruik van alle aftappunten.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Naast de prioritaire instellingen geldt voor alle eigenaren van collectieve drinkwaterinstallaties
            een <strong>zorgplicht</strong>: u moet maatregelen treffen om Legionella-groei te voorkomen,
            ook als een formeel beheersplan niet verplicht is. De GGD en NVWA handhaven beide
            regelingen en kunnen bij inspectie het beheersplan en de bijbehorende logboeken opvragen.
          </p>
          <p className="text-gray-700 mb-4">
            Bekijk het <Link href="/zakelijk" className="text-[#005F8A] underline hover:text-[#003F5C]">zakelijk overzicht</Link> voor
            een volledig beeld van waterbehandelingseisen per sector.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Risicoanalyse: de basis van het beheersplan</h2>
          <p className="text-gray-700 mb-4">
            Een risicoanalyse identificeert alle locaties en omstandigheden in uw installatie
            waar Legionella-groei mogelijk is. De bacterie gedijt in stilstaand water tussen
            25°C en 45°C, en in biofilm op de binnenwand van leidingen.
          </p>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Kritische risicopunten in de installatie</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li><strong>Dode leidingen (blind ends):</strong> leidingdelen die zijn afgesloten maar niet zijn verwijderd — het water stagneert en koelt af tot de groeizone.</li>
            <li><strong>Weinig gebruikte aftappunten:</strong> kranen of douchekoppen die minder dan wekelijks worden gebruikt, bouwen biofilm op.</li>
            <li><strong>Warmwaterboilers zonder circulatie:</strong> boilers die beneden 60°C instaan laten groei toe, vooral in de onderste lagen.</li>
            <li><strong>Lange, niet-geïsoleerde koudwaterleidingen:</strong> in verwarmde kruipruimten of naast warmwaterleidingen kan koud water opwarmen tot boven 25°C.</li>
            <li><strong>Koeltorens en luchtbevochtigers:</strong> hoog-risico vanwege aerosolvorming en warm waterreservoir.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            De risicoanalyse wordt vastgelegd in een actueel <strong>leidingschema</strong> (installatietekening)
            waarop elk risicopunt is gemarkeerd. Bij verbouwing of aanpassing van de installatie moet het
            schema worden bijgewerkt en de risicoanalyse worden herhaald.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Temperatuurbeheer: de kern van het beheersplan</h2>
          <p className="text-gray-700 mb-4">
            Thermisch beheer is de meest effectieve en wettelijk vereiste maatregel tegen Legionella-groei.
            De Nederlandse norm schrijft voor:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Circuit</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Vereiste temperatuur</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Meetpunt</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Frequentie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Warmwaterboiler (opslag)</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium">≥ 60°C</td>
                  <td className="border border-gray-300 px-3 py-2">Bodemthermometer boiler</td>
                  <td className="border border-gray-300 px-3 py-2">Maandelijks loggen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Warm tapwater (aftappunt)</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium">≥ 55°C na 60 sec.</td>
                  <td className="border border-gray-300 px-3 py-2">Verst gelegen tapkraan</td>
                  <td className="border border-gray-300 px-3 py-2">Jaarlijks per zone</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Koud tapwater (aftappunt)</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium">≤ 25°C</td>
                  <td className="border border-gray-300 px-3 py-2">Verst gelegen tapkraan</td>
                  <td className="border border-gray-300 px-3 py-2">Zomer: maandelijks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Circulatieleiding (retour)</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium">≥ 60°C</td>
                  <td className="border border-gray-300 px-3 py-2">Retourtemperatuur</td>
                  <td className="border border-gray-300 px-3 py-2">Continu (regelsysteem)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold text-[#005F8A] mb-2">Spoelschema voor weinig gebruikte aftappunten</h3>
          <p className="text-gray-700 mb-4">
            Aftappunten die minder dan wekelijks worden gebruikt (gastenkamers, seizoensruimten,
            nooduitgangen met wastafel) moeten minimaal wekelijks worden doorgespoeld.
            Het spoelschema bevat per aftappunt: locatie, spoelfrequentie, spoelduur
            (minimaal 2 minuten warm water) en de naam van de verantwoordelijke medewerker.
            Elke spoelactie wordt gelogd in het beheersplanlogboek.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterfilters en Legionella: wat werkt wel en niet</h2>
          <p className="text-gray-700 mb-4">
            Waterfiltratie wordt door installateurs soms gepresenteerd als een oplossing voor
            Legionella-risico. De werkelijkheid is genuanceerder: sommige filtertechnieken dragen
            bij aan hygiënisch waterbeheer, maar geen enkele filter vervangt thermisch beheer.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtertechniek</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Werkt tegen Legionella?</th>
                  <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kanttekening</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Koolstoffilter</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Nee</td>
                  <td className="border border-gray-300 px-3 py-2">Verwijdert alleen chemische stoffen en chloor; kan bij slechte hygiëne zelf biofilm herbergen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">UV-sterilisatie (254 nm)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Gedeeltelijk</td>
                  <td className="border border-gray-300 px-3 py-2">Inactiveert Legionella op het moment van passeren; geen residuele werking in het leidingnet daarna</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose (RO)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Gedeeltelijk</td>
                  <td className="border border-gray-300 px-3 py-2">RO-membraan (0,0001 µm) houdt bacteriën tegen; herbesmet na membraan mogelijk bij stagnant water</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Ultrafiltratie (UF, 0,01 µm)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Gedeeltelijk</td>
                  <td className="border border-gray-300 px-3 py-2">Houdt bacteriën inclusief Legionella tegen; zelfde voorbehoud als RO over het leidingnet na het filter</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Thermisch beheer (60°C)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja — aanbevolen</td>
                  <td className="border border-gray-300 px-3 py-2">Enige maatregel met residuele werking in het gehele warmwatersysteem; wettelijk vereist</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            UV-sterilisatie en ultrafiltratie kunnen als <strong>aanvullende maatregel</strong> worden
            ingezet bij specifieke hoog-risico aftappunten (bijvoorbeeld in een ziekenhuisomgeving
            of op een tijdelijke bouwplaats). Lees meer over filtertechnieken op de pagina{" "}
            <Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] underline hover:text-[#003F5C]">ultrafiltratie</Link> en{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] underline hover:text-[#003F5C]">drinkwaternormen</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wie moet een beheersplan hebben: sectoren in detail</h2>
          <p className="text-gray-700 mb-4">
            De verplichting verschilt per sector. Hieronder de meest voorkomende situaties:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-2">
            <li>
              <strong>Hotels en vakantieaccommodaties:</strong> altijd verplicht, ook bij kleine pensions met
              gedeelde badkamers. Metingen minimaal jaarlijks. Bij meer dan 50 kamers: kwartaalmeting aanbevolen.
            </li>
            <li>
              <strong>Sportscholen en wellnesscentra:</strong> verplicht bij aanwezigheid van douches,
              whirlpool, stoombad of sauna met waterverstuiving. Zie ook de pagina{" "}
              <Link href="/zakelijk/sportschool-wellness" className="text-[#005F8A] underline hover:text-[#003F5C]">waterfilter sportschool en wellness</Link>.
            </li>
            <li>
              <strong>Ziekenhuizen en zorginstellingen:</strong> strengste eisen; frequente metingen,
              aanvullende maatregelen zoals point-of-use filters op afdelingen met immunogecompromitteerde patiënten.
            </li>
            <li>
              <strong>Scholen en kinderopvang:</strong> verplicht bij gebouwen met meerdere verdiepingen
              of lange leidingen. Zie de pagina{" "}
              <Link href="/zakelijk/scholen-kinderopvang" className="text-[#005F8A] underline hover:text-[#003F5C]">waterfilter scholen en kinderopvang</Link>.
            </li>
            <li>
              <strong>Kantoren:</strong> zorgplicht van toepassing; formeel beheersplan verplicht bij
              gebouwen met meer dan 25 medewerkers of bij aanwezigheid van een douche. Bekijk het{" "}
              <Link href="/zakelijk/kantoor" className="text-[#005F8A] underline hover:text-[#003F5C]">kantoor waterfilter overzicht</Link>.
            </li>
          </ul>
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

        <section className="mt-8 border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-3">Verwante pagina&apos;s</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Zakelijk overzicht", href: "/zakelijk" },
              { label: "Sportschool en wellness", href: "/zakelijk/sportschool-wellness" },
              { label: "Scholen en kinderopvang", href: "/zakelijk/scholen-kinderopvang" },
              { label: "Ultrafiltratie", href: "/filtertechnieken/ultrafiltratie" },
              { label: "Drinkwaternormen", href: "/drinkwaternormen" },
              { label: "Waterkwaliteitsanalyse", href: "/zakelijk/waterkwaliteitsanalyse" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm bg-[#E0F2FE] text-[#005F8A] px-3 py-1.5 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/microbiologisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Microbiologische waterkwaliteit</h3>
              <p className="text-sm text-gray-600">Wat legionella is, hoe het zich verspreidt en welke wettelijke beheerseisen gelden voor risicolocaties.</p>
            </Link>
            <Link href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie tegen legionella</h3>
              <p className="text-sm text-gray-600">Hoe UV-licht legionella-bacteriën inactiveert en wanneer dit als beheermaatregel passend is.</p>
            </Link>
          </div>
        </section>

        <div className="mt-8">
          <CTABanner context="zakelijk" />
        </div>
      </div>
    </>
  );
}
