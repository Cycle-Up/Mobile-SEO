import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { HealthDisclaimer } from "@/components/HealthDisclaimer";

export const metadata: Metadata = {
  title: "PFAS in drinkwater: normen, hotspots in Nederland en osmose als oplossing",
  description:
    "PFAS in drinkwater: EU-norm 0,1 ug/L per 2023. Hotspots Maas-regio, Dordrecht. Osmosefilter verwijdert 90-99% PFAS. Gezondheidsrisicos en filteradvies.",
  alternates: { canonical: "https://waterfilterplatform.nl/drinkwaternormen/pfas" },
  openGraph: {
    title: "PFAS in drinkwater: normen, hotspots in Nederland en osmose als oplossing",
    description:
      "PFAS in drinkwater: EU-norm 0,1 ug/L per 2023. Hotspots Maas-regio, Dordrecht. Osmosefilter verwijdert 90-99% PFAS. Gezondheidsrisicos en filteradvies.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat zijn PFAS precies en waarom heten ze forever chemicals?",
    answer:
      "PFAS (per- en polyfluoralkylstoffen) zijn een groep van meer dan 10.000 synthetische chemische verbindingen met een koolstof-fluorbinding (C-F). Deze binding is de sterkste in de organische chemie en breekt niet af door zonlicht, hitte of biologische processen. Daardoor hopen PFAS zich permanent op in het milieu, bodem, grondwater en het menselijk lichaam. Vandaar de benaming 'forever chemicals'.",
  },
  {
    question: "Wat is de geldende PFAS-norm in Nederlands drinkwater?",
    answer:
      "Sinds de implementatie van de EU-drinkwaterrichtlijn 2020/2184 in het Drinkwaterbesluit geldt een norm van 0,1 microgram per liter (ug/L) voor de som van 20 prioritaire PFAS-stoffen. Voor totaal PFAS (alle verbindingen samen) geldt een norm van 0,5 ug/L. Drinkwaterbedrijven zijn wettelijk verplicht aan deze normen te voldoen.",
  },
  {
    question: "Is de Nederlandse PFAS-norm strenger of soepeler dan die in de VS?",
    answer:
      "De Amerikaanse EPA heeft in 2024 de drempelwaarden voor PFOS en PFOA vastgesteld op 4 parts per trillion (ppt), wat overeenkomt met 0,004 ug/L. De Nederlandse norm van 0,1 ug/L is daarmee 25 keer ruimer dan de VS-norm. Dit betekent niet dat Nederlands water gevaarlijker is, maar wel dat de VS een strengere risicodrempel hanteert.",
  },
  {
    question: "Welke gebieden in Nederland hebben de hoogste PFAS-concentraties in drinkwater?",
    answer:
      "De bekendste risicogebieden zijn de omgeving van Dordrecht en Papendrecht (historische uitstoot door Chemours, voorheen DuPont), de Maas-regio (oppervlaktewater-inname voor drinkwaterproductie), gebieden rondom Schiphol en militaire vliegbases (blusschuim-AFFF), en landbouwgebieden met historische PFAS-houdende bestrijdingsmiddelen. Drinkwaterbedrijven in deze gebieden passen aanvullende zuivering toe.",
  },
  {
    question: "Verwijdert een osmosefilter PFAS effectief?",
    answer:
      "Ja. Omgekeerde osmose is de meest effectieve thuisfilteroptie voor PFAS. Het osmosemembraan (poriegrote 0,0001 micron) is kleiner dan de meeste PFAS-moleculen. Onafhankelijke laboratoriumtests tonen verwijderingspercentages van 90 tot 99% voor langketenige PFAS (zoals PFOS en PFOA) en 85 tot 95% voor kortketenige PFAS (zoals GenX en PFBS). Actief kool is minder effectief, met name voor kortketenige PFAS.",
  },
  {
    question: "Werkt actief kool voor PFAS-verwijdering?",
    answer:
      "Actief kool heeft een zekere adsorptiecapaciteit voor PFAS, maar is beduidend minder betrouwbaar dan osmose. Koolstofblokfilters halen 70 tot 90% voor langketenige PFAS maar slechts 40 tot 70% voor kortketenige varianten. Bovendien is er een risico op verzadiging: een uitgeput koolfilter kan PFAS teruggeven aan het gefilterde water. Contacttijd is cruciaal; filterkannen zijn onvoldoende.",
  },
  {
    question: "Welke gezondheidseffecten heeft PFAS-blootstelling via drinkwater?",
    answer:
      "Langdurige blootstelling aan verhoogde PFAS-concentraties is geassocieerd met: immunosuppressief effect (verminderde werking van het immuunsysteem, waaronder verminderde vaccinrespons bij kinderen), schildklierproblemen (ontregeling van schildklierhormonen), verhoogd cholesterol, verhoogd risico op bepaalde kankers (nierkanker en testiskanker bij PFOS en PFOA), en reproductieve effecten. EFSA concludeerde in 2020 dat er eigenlijk geen volledig veilig niveau bestaat voor PFOS en PFOA.",
  },
  {
    question: "Wat is de Chemours-situatie in Dordrecht en wat betekent dat voor drinkwater?",
    answer:
      "Chemours (voorheen DuPont) heeft decennialang PFAS-verbindingen uitgestoten vanuit de fabriek in Dordrecht, waaronder GenX-stoffen. Dit heeft de bodem en het grondwater in de omgeving beinvloed. Drinkwaterbedrijf Oasen heeft aanvullende zuiveringsstappen ingevoerd en voldoet aan de geldende normen. De historische verontreiniging in de regio is echter substantieel, en particuliere putten in de omgeving lopen een significant hoger risico.",
  },
  {
    question: "Moet ik mij zorgen maken over PFAS als ik in Amsterdam of Utrecht woon?",
    answer:
      "Voor de meeste Nederlanders is het leidingwater veilig conform de geldende normen. RIVM-monitoring toont aan dat de overgrote meerderheid van het drinkwater onder de Europese PFAS-norm blijft. Consumenten die extra zekerheid willen, met name in gebieden nabij historische PFAS-bronnen, kunnen kiezen voor een osmosefilter als aanvullende maatregel. Dit is een persoonlijke keuze, geen absolute noodzaak.",
  },
  {
    question: "Wat is het verschil tussen PFOS, PFOA en GenX?",
    answer:
      "PFOS (perfluoroctaansulfonzuur) en PFOA (perfluoroctaanzuur) zijn langketenige PFAS-verbindingen (C8) die decennialang de meest bestudeerde zijn. Ze zijn inmiddels grotendeels verboden in productie. GenX is een kortketenige PFAS-vervangingstof (C6) die door Chemours werd ontwikkeld als 'veiliger alternatief' voor PFOA, maar ook GenX blijkt persistent en bioaccumulerend. Kortketenige PFAS zijn moeilijker te verwijderen met actief kool dan langketenige.",
  },
  {
    question: "Hoe kan ik mijn water laten testen op PFAS?",
    answer:
      "Gecertificeerde laboratoria zoals SGS, ALcontrol en Kiwa Water Research kunnen uw water testen op PFAS. Een volledige PFAS-analyse kost EUR 150 tot EUR 400. Bij leidingwater is dit voor de meeste Nederlanders niet noodzakelijk vanwege de wettelijke monitoringsplicht van drinkwaterbedrijven. Bij eigen bronwater, putwater of als u dichtbij een bekende PFAS-bron woont, is testen zinvol.",
  },
];

export default function PfasPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "PFAS in drinkwater", url: "https://waterfilterplatform.nl/drinkwaternormen/pfas" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "PFAS in drinkwater: normen, hotspots in Nederland en osmose als oplossing",
          description:
            "PFAS in drinkwater: EU-norm 0,1 ug/L per 2023. Hotspots Maas-regio, Dordrecht. Osmosefilter verwijdert 90-99% PFAS. Gezondheidsrisicos en filteradvies.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/pfas",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>PFAS in drinkwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS in drinkwater: normen, hotspots in Nederland en osmose als oplossing
          </h1>
          <QuickAnswer answer="PFAS zijn persistente synthetische stoffen die niet afbreken in het milieu. In het Drinkwaterbesluit geldt een norm van 0,1 ug/L voor 20 prioritaire PFAS en 0,5 ug/L voor totaal PFAS. De grootste risicogebieden in Nederland zijn de regio Dordrecht (Chemours), de Maas-regio en gebieden rondom vliegvelden. Osmosefilters verwijderen 90-99% van PFAS en zijn de meest effectieve thuisfilteroptie. De Nederlandse norm is ruimer dan de Amerikaanse EPA-norm van 0,004 ug/L voor PFOS en PFOA." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wat zijn PFAS: chemische definitie en persistentie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PFAS is een verzamelnaam voor per- en polyfluoralkylstoffen: een groep van meer
            dan 10.000 synthetische chemische verbindingen die allemaal gekenmerkt worden door
            meerdere koolstof-fluorbindingen (C-F-bindingen). De C-F-binding is de sterkste
            binding in de organische chemie, met een bindingsenergie van circa 544 kJ/mol.
            Deze extreme sterkte verklaart waarom PFAS niet worden afgebroken door zonlicht,
            hitte, zuren, basen of biologische processen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De bekendste PFAS-verbindingen zijn:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>PFOS</strong> (perfluoroctaansulfonzuur) &mdash; vroeger gebruikt in
              Scotchgard en blusschuim, inmiddels wereldwijd verboden
            </li>
            <li>
              <strong>PFOA</strong> (perfluoroctaanzuur) &mdash; vroeger gebruikt in de productie
              van Teflon (DuPont/Chemours), inmiddels verboden
            </li>
            <li>
              <strong>GenX</strong> &mdash; kortketenige vervangingsstof voor PFOA, uitgestoten
              door Chemours in Dordrecht
            </li>
            <li>
              <strong>PFNA, PFHxS, PFBS</strong> &mdash; andere kortketenige verbindingen die
              steeds vaker worden gevonden in milieu en drinkwater
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Door hun persistentie hopen PFAS zich op in de bodem, het grondwater, oppervlaktewater,
            sedimenten en het menselijk lichaam. De biologische halfwaardetijd van PFOS in
            menselijk bloed is 5 tot 8 jaar; PFOA 3 tot 4 jaar. Eenmaal in het lichaam opgenomen,
            verdwijnen ze dus extreem langzaam.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            PFAS in het milieu: bronnen en verspreiding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De verspreiding van PFAS in het Nederlandse milieu is het resultaat van decennia
            industrieel gebruik. De voornaamste bronnen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Chemours Dordrecht</strong> (voorheen DuPont): Uitstoot van GenX en andere
              PFAS-verbindingen via lucht en water gedurende tientallen jaren. De fabriek produceert
              fluorpolymeren voor industrieel gebruik. De historische verontreiniging in de
              directe omgeving is substantieel. RIVM heeft in de periode 2018-2022 uitgebreid
              onderzoek gedaan naar de omvang van de schade.
            </li>
            <li>
              <strong>Luchtvaart en brandweer (AFFF-blusschuim):</strong> Aqueous Film-Forming
              Foam (AFFF) bevat hoge concentraties PFOS en PFOA. Jarenlang gebruik bij
              brandoefeningen op vliegvelden (Schiphol, Eindhoven, militaire bases) heeft de
              bodem en het grondwater rond deze locaties ernstig verontreinigd.
            </li>
            <li>
              <strong>Landbouw:</strong> Historisch gebruik van PFAS-houdende bestrijdingsmiddelen
              en bemesting met PFAS-houdend slib. Grondwater in landbouwgebieden vertoont in
              sommige regio's verhoogde PFAS-waarden.
            </li>
            <li>
              <strong>Consumentenproducten:</strong> Impregneersprays, antiaanbaklagen,
              voedselverpakkingen en cosmetica hebben bijgedragen aan een verspreide, diffuse
              PFAS-belasting in stedelijk milieu.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            PFAS-normen in het Drinkwaterbesluit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De implementatie van EU-richtlijn 2020/2184 in het Nederlandse Drinkwaterbesluit
            heeft voor het eerst wettelijke grenswaarden voor PFAS in drinkwater vastgesteld.
            De normen zijn:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>0,1 microgram per liter (ug/L)</strong> voor de som van 20 individuele
              PFAS-stoffen (de zogenoemde PFAS-20 parameter). Dit is de som-20-parameterwaarde.
            </li>
            <li>
              <strong>0,5 microgram per liter</strong> voor totaal PFAS (alle PFAS-verbindingen
              samen die meetbaar zijn).
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            De sum-20-benadering erkent een belangrijk principe: zelfs als elke afzonderlijke
            PFAS-verbinding onder zijn eigen grenswaarde blijft, kan de combinatie van meerdere
            verbindingen toch een gezamenlijk effect hebben (mengselwerking). Dit is een
            significante stap vooruit ten opzichte van de situatie voor 2023, waarbij voor de
            meeste individuele PFAS geen wettelijke norm bestond. Meer context over de
            Europese richtlijn vindt u op onze pagina over de{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn 2020/2184
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Vergelijking met de VS: de Nederlandse norm is ruimer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In april 2024 heeft de Amerikaanse Environmental Protection Agency (EPA) nieuwe
            maximale contaminantwaarden vastgesteld voor PFAS in drinkwater. Voor PFOS en PFOA
            afzonderlijk geldt een grenswaarde van <strong>4 parts per trillion (ppt)</strong>,
            ofwel <strong>0,004 microgram per liter</strong>. Dit is 25 keer strenger dan de
            Nederlandse norm van 0,1 ug/L voor de som van 20 PFAS.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit verschil is deels methodologisch: de VS hanteert een individuele grenswaarde
            per stof, terwijl de EU kiest voor een som-benadering. Maar ook als de methoden
            vergelijkbaar zouden zijn, is de VS-norm aanzienlijk strenger. Europese
            wetenschappers wijzen erop dat de Europese norm mede is bepaald door de
            haalbaarheid voor drinkwaterbedrijven, niet louter door gezondheidsoverwegingen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            PFAS-situatie in Nederland: RIVM-monitoring en bekende overschrijdingen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            RIVM monitort de PFAS-concentraties in het Nederlandse drinkwater via een uitgebreid
            meetnetwerk. De algemene conclusie: de overgrote meerderheid van het Nederlandse
            leidingwater voldoet aan de Europese normen. Drinkwaterbedrijven in risicogebieden
            passen aanvullende zuiveringsstappen toe, zoals granulaire actieve kool (GAC)
            of omgekeerde osmose op grote schaal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Historisch zijn er perioden geweest waarbij bepaalde drinkwaterbedrijven boven
            de (destijds geldende) actiewaarden uitkwamen. Waterbedrijf Oasen in de regio
            Dordrecht heeft structureel geïnvesteerd in aanvullende zuivering vanwege de
            Chemours-uitstoot. In de Maas-regio vormt de Maas een primaire bron voor
            drinkwaterproductie, en de Maas heeft historisch hogere PFAS-belasting vanuit
            Belgische industriegebieden.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Gezondheidsrisicos van PFAS-blootstelling
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De gezondheidseffecten van PFAS-blootstelling zijn uitgebreid onderzocht.
            De meest gedocumenteerde effecten bij langdurige blootstelling aan verhoogde
            concentraties zijn:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Immunosuppressief effect:</strong> PFAS verminderen de werking van het
              immuunsysteem. Kinderen die zijn blootgesteld aan hogere PFAS-niveaus laten een
              verminderde vaccinrespons zien. EFSA (Europese Autoriteit voor Voedselveiligheid)
              stelde in 2020 een Tolerable Weekly Intake (TWI) van 4,4 nanogram per kg
              lichaamsgewicht per week voor de som van PFOS, PFOA, PFNA en PFHxS.
            </li>
            <li>
              <strong>Schildklierproblemen:</strong> PFAS-verbindingen kunnen de schildklierhormoonhuishouding
              verstoren, met effecten op groei en stofwisseling.
            </li>
            <li>
              <strong>Verhoogd cholesterol:</strong> Epidemiologische studies tonen een consistent
              verband tussen PFAS-blootstelling en verhoogde LDL-cholesterolwaarden.
            </li>
            <li>
              <strong>Kankerrisico:</strong> PFOS en PFOA zijn door de International Agency for
              Research on Cancer (IARC) geclassificeerd als mogelijk tot waarschijnlijk
              carcinogeen voor de mens, met name voor nierkanker en testiskanker.
            </li>
            <li>
              <strong>Reproductieve effecten:</strong> Verminderde vruchtbaarheid, lager
              geboortegewicht en verstoring van hormonale systemen bij prenatale blootstelling.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Osmose als beste filteroptie voor PFAS
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor thuisfiltratie van PFAS is omgekeerde osmose de meest effectieve methode.
            Het osmosemembraan heeft porieen van slechts 0,0001 micrometer, kleiner dan de
            meeste PFAS-moleculen. Water wordt onder druk door het membraan geperst; de
            PFAS-verbindingen blijven aan de concentraatzijde achter.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Verwijderingspercentages uit laboratoriumstudies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Langketenige PFAS (PFOS, PFOA, C8+): 95 tot 99% verwijdering</li>
            <li>Kortketenige PFAS (GenX, PFBS, C4-C7): 85 tot 95% verwijdering</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wil u een osmosefilter aanschaffen als bescherming tegen PFAS? Bekijk onze{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              gids voor osmosefilters kopen
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Actief kool: deels effectief, maar beperkingen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Actief koolfilters werken via adsorptie: PFAS-moleculen hechten aan het koolstofoppervlak.
            De effectiviteit is afhankelijk van de koolsoort (koolstofblok is beter dan granulaat),
            de contacttijd en de ketenlengte van de PFAS.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor langketenige PFAS (C8 en langer) halen goede koolstofblokfilters 70 tot 90%
            verwijdering. Voor kortketenige PFAS is de effectiviteit lager, 40 tot 70%, omdat
            kortere moleculen minder sterk adsorberen. Bovendien is er een kritiek nadeel:
            bij verzadiging kan een uitgeput koolfilter eerder geadsorbeerde PFAS teruggeven
            aan het gefilterde water. Regelmatige filtervervanging is cruciaal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Filterkannen (Brita-type) zijn niet geschikt voor PFAS-verwijdering vanwege de
            te korte contacttijd en het type kool.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Overzichtstabel PFAS: normen en osmose-verwijdering
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">PFAS-stof</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Norm NL (ug/L)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Norm VS (ug/L)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Osmose-verwijdering</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">PFOS</td>
                  <td className="border border-gray-300 px-3 py-2">0,1 (som-20)</td>
                  <td className="border border-gray-300 px-3 py-2">0,004</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95-99%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">PFOA</td>
                  <td className="border border-gray-300 px-3 py-2">0,1 (som-20)</td>
                  <td className="border border-gray-300 px-3 py-2">0,004</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95-99%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">GenX (HFPO-DA)</td>
                  <td className="border border-gray-300 px-3 py-2">0,1 (som-20)</td>
                  <td className="border border-gray-300 px-3 py-2">0,010</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">85-95%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">PFHxS</td>
                  <td className="border border-gray-300 px-3 py-2">0,1 (som-20)</td>
                  <td className="border border-gray-300 px-3 py-2">0,010</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">90-97%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">PFNA</td>
                  <td className="border border-gray-300 px-3 py-2">0,1 (som-20)</td>
                  <td className="border border-gray-300 px-3 py-2">0,010</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95-99%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">PFBS</td>
                  <td className="border border-gray-300 px-3 py-2">0,5 (totaal)</td>
                  <td className="border border-gray-300 px-3 py-2">2,0</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">80-90%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            NL-norm: parameterwaarden uit het Drinkwaterbesluit 2023. VS-norm: EPA NPDWR 2024.
            Osmose-verwijdering: indicatieve waarden op basis van gepubliceerde laboratoriumdata.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over drinkwaternormen in Nederland leest u op onze{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              overzichtspagina drinkwaternormen
            </Link>
            . Meer over de EU-richtlijn die de PFAS-norm heeft ingevoerd vindt u op de pagina over de{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn 2020/2184
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
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater: overzicht</h3>
              <p className="text-sm text-gray-600">Uitgebreide informatie over PFAS-verbindingen, bronnen en gezondheidseffecten.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose verwijdert PFAS</h3>
              <p className="text-sm text-gray-600">Hoe omgekeerde osmose werkt en waarom het de meest effectieve methode is voor PFAS-verwijdering.</p>
            </Link>
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter gids</h3>
              <p className="text-sm text-gray-600">Welke filters verwijderen PFAS? Vergelijking van osmose, koolstof en nanofiltration.</p>
            </Link>
            <Link href="/pfas-waterfilter/gebieden-nederland" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS-hotspots in Nederland</h3>
              <p className="text-sm text-gray-600">Kaart van risicogebieden: Dordrecht, Schiphol-regio, Westerschelde en meer.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
