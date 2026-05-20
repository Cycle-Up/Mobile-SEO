import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "PFAS of lood in drinkwater: wanneer is osmose de beste keuze?",
  description: "Aangetoonde PFAS of lood in leidingwater? Osmose verwijdert 90-99% PFAS en 95-99% lood. Keuzegids voor verontreinigde situaties.",
  alternates: { canonical: "https://waterfilterplatform.nl/keuzehulp/pfas-lood" },
  openGraph: {
    title: "PFAS of lood in drinkwater: wanneer is osmose de beste keuze?",
    description: "Aangetoonde PFAS of lood in leidingwater? Osmose verwijdert 90-99% PFAS en 95-99% lood. Keuzegids voor verontreinigde situaties.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is PFAS in NL kraanwater boven de norm?",
    answer:
      "Voor de meeste Nederlanders niet. Nederlandse drinkwaterbedrijven zijn wettelijk verplicht te voldoen aan het Drinkwaterbesluit: maximaal 0,1 microgram per liter voor de som van 20 prioritaire PFAS-stoffen. In de meeste regio's blijven waarden ruim onder deze grens. Uitzonderingen zijn de regio Dordrecht/Papendrecht (Chemours) en gebieden die afhankelijk zijn van Maas-water. Controleer het jaarlijkse kwaliteitsrapport van uw drinkwaterbedrijf via vewin.nl.",
  },
  {
    question: "Welk filter haalt PFAS echt weg?",
    answer:
      "Omgekeerde osmose is de meest effectieve thuisfilteroptie voor PFAS. Het RO-membraan (porieen 0,0001 micron) verwijdert 90-99% van langketenige PFAS (PFOS, PFOA) en 85-95% van kortketenige PFAS (GenX, PFBS). Actief kool adsorbeert deels PFAS (70-90% voor langketen), maar bij verzadiging kan een koolfilter PFAS teruggeven. Filterkannen bieden geen bescherming tegen PFAS.",
  },
  {
    question: "Mijn huis is van voor 1960 -- hoe weet ik of ik loden leidingen heb?",
    answer:
      "U kunt dit op drie manieren nagaan. Ten eerste: raadpleeg de bouwdossiers van uw gemeente of vraag uw verhuurder. Ten tweede: laat uw leidingwater testen bij een gecertificeerd laboratorium (50-100 euro); een verhoogd loodgehalte bevestigt de aanwezigheid van lood in uw installatie. Ten derde: schakel een loodgieter in om de leidingen visueel te beoordelen. Loden leidingen zijn grijs, zacht en buigzaam; ze laten een zilverachtige streep achter als u er met een mes over krast.",
  },
  {
    question: "Kan ik ook PFAS zelf testen?",
    answer:
      "Ja. Gecertificeerde laboratoria bieden waterkits aan voor PFAS-analyse; kosten liggen tussen 150 en 400 euro afhankelijk van het aantal gemeten stoffen. Voor een basisscreening op PFOS, PFOA en GenX volstaat een pakket van circa 200 euro. U kunt ook de gratis monitoring van uw drinkwaterbedrijf raadplegen: zij meten PFAS periodiek en publiceren de waarden in hun jaarverslagen.",
  },
  {
    question: "Wat kost een osmosefilter per jaar alles inbegrepen?",
    answer:
      "Een osmosefilter kost bij aanschaf 200-600 euro. De jaarlijkse gebruikskosten bestaan uit: voorfilters en nafilters (40-70 euro per jaar), membraanvervanging om de 2-3 jaar (50-100 euro gedeeld door levensduur), en iets extra waterverbruik door het concentraat (2-4 liter per liter gefilterd water). Totale jaarkosten liggen op 60-120 euro na aanschaf, afhankelijk van het model en het waterverbruik.",
  },
  {
    question: "Is de combinatie PFAS + lood reden voor extra bezorgdheid?",
    answer:
      "De combinatie vergroot het belang van filtratie als beide stoffen boven de norm aanwezig zijn, maar osmose pakt beide tegelijkertijd aan. Er is geen bewijs dat de combinatie van lood en PFAS bij drinkwaternormen leidt tot additieve toxiciteit die significant verder gaat dan de afzonderlijke risico's. Bij een woning van voor 1960 in een PFAS-hotspot is een osmosefilter de meest praktische stap: het elimineert beide zorgen met een investering.",
  },
];

export default function PfasLoodPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Keuzehulp", url: "https://waterfilterplatform.nl/keuzehulp" },
          { name: "PFAS of lood in water", url: "https://waterfilterplatform.nl/keuzehulp/pfas-lood" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "PFAS of lood in drinkwater: wanneer is osmose de beste keuze?",
          description:
            "Aangetoonde PFAS of lood in leidingwater? Osmose verwijdert 90-99% PFAS en 95-99% lood. Keuzegids voor verontreinigde situaties.",
          datePublished: "2026-05-17",
          url: "https://waterfilterplatform.nl/keuzehulp/pfas-lood",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/keuzehulp" className="hover:underline">Keuzehulp</Link>
            <span className="mx-2">/</span>
            <span>PFAS of lood in water</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS of lood in drinkwater: wanneer is osmose de beste keuze?
          </h1>
          <QuickAnswer answer="Bij aangetoond lood of PFAS boven de norm is omgekeerde osmose de enige thuisoplossing die beide stoffen betrouwbaar verwijdert. Een actief-koolfilter is onvoldoende voor PFAS en werkt niet voor opgelost lood." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Wanneer is dit relevant voor u?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meeste Nederlanders kunnen kraanwater veilig drinken. Er zijn echter twee situaties
            waarbij extra filtratie zinvol is om te overwegen. De eerste is PFAS-belasting in uw
            regio. Bekende hotspots in Nederland zijn de regio Dordrecht en Papendrecht, waar
            Chemours (voorheen DuPont / 3M-fabriek Zwijndrecht) decennialang GenX en andere
            PFAS-stoffen heeft uitgestoten. Ook gebieden rondom defensieterreinen en militaire
            vliegbases (Eindhoven, Volkel, De Kooy) hebben verhoogde grondwaterwaarden door het
            gebruik van AFFF-blusschuim. De tweede situatie is een woning gebouwd voor 1960 die
            mogelijk nog loden leidingen of loden verbindingsstukken in de huisinstallatie heeft.
            Drinkwaterbedrijven leveren loodles water; het lood komt uitsluitend uit de
            huisinstallatie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Raadpleeg het jaarrapport van uw drinkwaterbedrijf via{" "}
            <Link href="/leidingwater/pfas" className="text-[#005F8A] hover:underline font-medium">
              onze PFAS-pagina
            </Link>{" "}
            of direct via vewin.nl voor de actuele waarden in uw leveringsgebied.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Wat verwijdert omgekeerde osmose?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een RO-membraan heeft porieen van 0,0001 micron -- kleiner dan alle opgeloste ionen en
            de meeste organische verbindingen. Dat leidt tot de volgende verwijderingspercentages:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>PFAS langketen (PFOS, PFOA, C8+):</strong> 95-99%
            </li>
            <li>
              <strong>PFAS kortketen (GenX, PFBS, C4-C7):</strong> 85-95%
            </li>
            <li>
              <strong>Lood:</strong> 95-99%
            </li>
            <li>
              <strong>Nitraat:</strong> 85-95% (ook relevant in landbouwgebieden)
            </li>
            <li>
              <strong>Medicijnresten en hormoonverstorende stoffen:</strong> 90-99%
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een NSF/ANSI 58-gecertificeerd systeem geeft de meeste zekerheid over filterprestaties.
            Zie ook onze pagina over{" "}
            <Link href="/waterfilter/nanoplastics" className="text-[#005F8A] hover:underline font-medium">
              nanoplastics filtratie
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Wat verwijdert osmose niet?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Omgekeerde osmose is breed effectief, maar heeft grenzen. Enkele vluchtige organische
            stoffen (VOS) zoals chloroform zijn kleiner dan de membraanporieen en kunnen gedeeltelijk
            passeren -- een actief-koolnafilter pakt deze aan, en de meeste kwalitatieve osmosesystemen
            bevatten standaard een koolstofnafilter. Sommige bestrijdingsmiddelen met een zeer laag
            molecuulgewicht worden minder goed tegengehouden, hoewel de meeste pesticiden
            (molecuulgewicht 200-1000 Da) wel effectief worden verwijderd.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Zijn er alternatieven voor osmose?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn twee alternatieven die soms worden overwogen, maar beide hebben beperkingen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Actief-koolfilter voor PFAS:</strong> Blokfilters van actieve kool adsorberen
              langketenige PFAS voor 70-90%, maar kortketenige PFAS (GenX) slechts 40-70%. Bij
              verzadiging kan het filter geadsorbeerde PFAS teruggeven. De verzadigingssnelheid is
              niet altijd eenvoudig te bepalen. Voor lood heeft actief kool geen werkend mechanisme.
            </li>
            <li>
              <strong>NSF P473-gecertificeerd loodfilter:</strong> Deze filters zijn specifiek
              gecertificeerd voor loodverwijdering. Ze zijn effectiever voor lood dan een
              standaard koolfilter, maar de kosten per liter gefilterd water zijn hoger dan osmose
              op de lange termijn, en PFAS wordt niet adequaat aangepakt.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conclusie: als uw zorg zowel PFAS als lood omvat, is osmose de efficiëntste keuze.
            Alternatieven pakken slechts een van beide aan. Meer vergelijkingen op onze pagina{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilter kopen
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">
            Praktische stap: eerst testen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voordat u investeert in een filter is het zinvol om te weten wat er daadwerkelijk in uw
            water zit. Voor lood: een labtest via een gecertificeerd laboratorium kost circa 50 euro.
            Neem het watermonster na een stilstaandperiode van minimaal 30 minuten (eerste liter van
            de ochtend) voor de meest representatieve meting. Voor PFAS: raadpleeg de PFAS-monitoring
            van uw drinkwaterbedrijf; die is gratis beschikbaar. Wilt u zelf testen, dan kost een
            uitgebreide PFAS-analyse 150-400 euro bij een gecertificeerd lab.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer achtergrond over de normen vindt u op onze pagina{" "}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline font-medium">
              PFAS in drinkwater
            </Link>{" "}
            en onze pagina over{" "}
            <Link href="/leidingwater/lood" className="text-[#005F8A] hover:underline font-medium">
              lood in leidingwater
            </Link>.
          </p>
          <p className="text-gray-700 mt-4">
            Meer achtergrondinformatie over PFAS: <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] hover:underline font-medium">PFAS in drinkwater: alle feiten over PFAS-verbindingen</Link>.
          </p>
          <p className="text-gray-700 mt-4">
            Meer achtergrondinformatie over zware metalen: <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] hover:underline font-medium">Zware metalen in drinkwater: lood, koper en arseen</Link>.
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

        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/leidingwater/pfas" className="text-[#005F8A] hover:underline">
                PFAS in leidingwater: gebiedskaart en actuele waarden
              </Link>
            </li>
            <li>
              <Link href="/leidingwater/lood" className="text-[#005F8A] hover:underline">
                Lood in leidingwater: loden leidingen herkennen en testen
              </Link>
            </li>
            <li>
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
                Osmosefilter kopen: vergelijking en advies
              </Link>
            </li>
            <li>
              <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline">
                PFAS drinkwaternormen: EU-richtlijn en Nederlandse implementatie
              </Link>
            </li>
            <li>
              <Link href="/waterfilter/nanoplastics" className="text-[#005F8A] hover:underline">
                Nanoplastics in drinkwater: filteropties
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp" className="text-[#005F8A] hover:underline">
                Terug naar de keuzehulp overzicht
              </Link>
            </li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater: bronnen en risico</h3>
              <p className="text-sm text-gray-600">Wat PFAS zijn, hoe ze in drinkwater terechtkomen en welke gezondheidsrisico's wetenschappelijk zijn onderbouwd.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose verwijdert PFAS en lood</h3>
              <p className="text-sm text-gray-600">Waarom RO de meest effectieve filtertechniek is voor PFAS, lood en zware metalen (95-99% verwijdering).</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
