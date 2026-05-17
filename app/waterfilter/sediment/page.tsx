import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Sedimentfilter: wanneer nodig, micron klasse en als voorfilter',
  description:
    'Een sedimentfilter verwijdert zand, slib, roest en zwevende deeltjes uit water. Micronklassen: 1, 5, 10, 25 en 50 micron. Verplicht als voorfilter voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/sediment' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke micronklasse sedimentfilter heb ik nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De juiste micronklasse hangt af van de verontreiniging. Voor zichtbaar zand of grind: 25-50 micron. Voor slib en roest: 5-10 micron. Als voorfilter voor een osmosemembraan: 5 micron. Voor een UV-systeem: 1-5 micron om de UV-transmissie voldoende te verhogen. Bij eigen bron: begin met een wateranalyse om de deeltjesgrootte te bepalen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een oppervlaktefilter en een dieptefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een oppervlaktefilter (vlakke plaat of membraan) houdt deeltjes tegen op het buitenoppervlak en heeft een scherpe afsnijgrens. Een dieptefilter (wikkeldraad, gesinterd polypropeen) vangt deeltjes op in het gehele filtermateriaal. Dieptefilters hebben een grotere vuilvangcapaciteit maar een minder scherpe afsnijgrens. Voor sedimentfilters zijn dieptefilters (PP-cartridges) de meest gebruikte variant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een sedimentfilter verplicht als voorfilter voor een osmosefilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een osmosemembraan heeft porieen van 0,0001 micron. Groot sediment (zand, roest, slib) beschadigt het delicate membraan direct en verstopt de voorliggende actief koolfilter. Een 5 micron sedimentfilter is de eerste trap in elk kwalitatief osmosesysteem: sedimentfilter (5 micron) -- actief koolfilter -- RO-membraan -- postfilter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een sedimentfilter bacterien en virussen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Standaard sedimentfilters van 1-50 micron verwijderen geen bacterien (0,2-2 micron) of virussen (kleiner dan 0,1 micron). Giardia-cystes (8-12 micron) worden tegengehouden door een 5 micron filter, Cryptosporidium-oocysten (4-6 micron) door een 1-5 micron filter. Voor microbiologische desinfectie is UV-behandeling, osmose of chloorbehandeling noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak moet ik een sedimentfiltercartridge vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Richtlijn: elke 3-6 maanden bij gemiddeld leidingwater. Bij eigen bron met hoge sedimentbelasting kan vervanging elke 4-8 weken nodig zijn. Indicatoren voor vervanging: zichtbaar verminderde doorstroomsnelheid, drukval over de filter, verkleuring van de cartridge, of meer dan 6 maanden gebruik. Goedkope PP-cartridges (2-8 euro) zijn eenvoudig te vervangen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik een sedimentfilter nodig bij eigen bronwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de meeste eigen bronnen en boorputten is een sedimentfilter noodzakelijk. Bronwater bevat vaak zand, slib, roestdeeltjes of ijzer/mangaanneerslag die fijnere filters snel verstoppen en schade aanrichten aan pompen en watertaps. Laat eerst een wateranalyse uitvoeren om de sedimentbelasting en deeltjesgrootte te bepalen, zodat u de juiste micronklasse kiest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is een sedimentfilter nodig voor een UV-systeem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UV-desinfectie werkt alleen in helder water. Troebel water (hoge turbiditeit) vermindert de UV-transmissie: zwevende deeltjes absorberen en verstrooien het UV-licht, waardoor bacterien en virussen achter deeltjes "schuilen" en niet worden blootgesteld aan voldoende UV-dosis. De UV-transmissie moet hoger zijn dan 85% bij 254 nm voor effectieve desinfectie. Een sedimentfilter (1-5 micron) verhoogt de UV-transmissie naar het vereiste niveau.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een sedimentfilter en een actief koolfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een sedimentfilter werkt mechanisch en verwijdert uitsluitend vaste deeltjes op basis van grootte. Het verwijdert geen opgeloste stoffen, chloor of chemische verbindingen. Een actief koolfilter werkt via adsorptie en verwijdert chloor, chlooramine, organische verbindingen en geur- en smaakstoffen, maar stopt geen sediment. In een goed filtersysteem staan ze altijd in combinatie: sediment eerst, daarna actief kool.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Sedimentfilter: wanneer nodig, micron klasse en als voorfilter',
  description:
    'Een sedimentfilter verwijdert zand, slib, roest en zwevende deeltjes uit water. Micronklassen: 1, 5, 10, 25 en 50 micron. Verplicht als voorfilter voor.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/sediment',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterSedimentPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Sedimentfilter', item: 'https://waterfilterplatform.nl/waterfilter/sediment' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Sedimentfilter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Sedimentfilter: wanneer nodig, micron klasse en als voorfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een sedimentfilter is de eerste verdedigingslinie in elk waterfiltersysteem. Het
            verwijdert zand, slib, roest en zwevende deeltjes op basis van grootte. Als verplichte
            voorfilter beschermt het uw osmosemembraan en UV-lamp tegen schade en verstopping.
            De juiste micronklasse kiezen is bepalend voor de effectiviteit.
          </p>
        </section>

        <QuickAnswer answer="Een sedimentfilter verwijdert mechanisch vaste deeltjes: zand (50 micron), slib en roest (5-10 micron), en protozoa zoals Giardia (1-5 micron). Bacterien en virussen worden niet tegengehouden. Verplicht als eerste voorfilter voor osmose en UV-systemen. Vervang elke 3-6 maanden." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is een sedimentfilter en hoe werkt het?
        </h2>
        <p className="text-gray-700 mb-4">
          Een sedimentfilter is een mechanisch filter dat vaste deeltjes uit water tegenhoudt op
          basis van hun fysieke grootte. Er is geen chemische reactie, geen adsorptie en geen
          ionenuitwisseling. Het principe is eenvoudig: water stroomt door een filtermateriaal
          met porieen van een bepaalde grootte (de micronklasse), en alle deeltjes die groter zijn
          dan die porieen worden tegengehouden.
        </p>
        <p className="text-gray-700 mb-4">
          Er zijn twee fundamenteel verschillende filtermechanismen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Oppervlaktefiltratiefilter:</strong> deeltjes worden tegengehouden aan het
            buitenoppervlak van het filter. Scherpe, goed gedefinieerde afsnijgrens. Minder
            vuilvangcapaciteit. Typische voorbeelden: plaatvormige membraanfilters en schijffilters
          </li>
          <li>
            <strong>Dieptefiltratiefilter:</strong> deeltjes worden door het gehele filtermedium
            gevangen, niet alleen aan het oppervlak. Grotere vuilvangcapaciteit, maar minder
            scherpe afsnijgrens. De veruit meest gebruikte variant bij sedimentfilters:
            gewikkeld polypropeen (wikkeldraad), gesinterd polypropeen (PP) en gevouwen
            polyestervezel (plissee)
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Belangrijk om te begrijpen: een sedimentfilter verwijdert <strong>uitsluitend vaste
          deeltjes</strong>. Opgeloste stoffen (kalk, chloor, nitraten, zware metalen) passeren
          de filter zonder enige belemmering. Voor die stoffen zijn andere filtertechnologieen
          nodig, zoals actief kool, ionenwisseling of omgekeerde osmose.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Micronklassen: wat wordt tegengehouden?
        </h2>
        <p className="text-gray-700 mb-4">
          De micronwaarde (micrometer, 1/1000 mm) geeft de nominale poriegrote van de filter aan.
          Hoe lager de micronwaarde, hoe fijner de filtercartridge en hoe meer deeltjes worden
          tegengehouden. Dit is het overzicht van wat elke klasse verwijdert:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Micron</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Wat wordt tegengehouden</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Typische toepassing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">50 micron</td>
                <td className="border border-gray-300 px-3 py-2">Grof zand, grind, grote deeltjes</td>
                <td className="border border-gray-300 px-3 py-2">Eerste groffilter bij eigen bron</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">25 micron</td>
                <td className="border border-gray-300 px-3 py-2">Fijn zand, grove slibdeeltjes</td>
                <td className="border border-gray-300 px-3 py-2">Voorfilter bij zandige bronnen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">10 micron</td>
                <td className="border border-gray-300 px-3 py-2">Slib, roest, ijzer/mangaanneerslag</td>
                <td className="border border-gray-300 px-3 py-2">Algemeen gebruik, voor actief kool</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">5 micron</td>
                <td className="border border-gray-300 px-3 py-2">Fijn slib, sommige algen, Cryptosporidium</td>
                <td className="border border-gray-300 px-3 py-2">Verplicht voorfilter osmose en UV</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">1 micron</td>
                <td className="border border-gray-300 px-3 py-2">Zeer fijn slib, Giardia-cystes, Cryptosporidium-oocysten</td>
                <td className="border border-gray-300 px-3 py-2">Eigen bron met biologisch risico, voor UV</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Let op: bacterien (0,2&ndash;2 micron) worden <em>niet</em> betrouwbaar tegengehouden
          door standaard sedimentfilters. Virussen (&lt;0,1 micron) worden nooit tegengehouden.
          Voor microbiologische zuivering is UV-desinfectie, omgekeerde osmose of chemische
          desinfectie noodzakelijk.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een sedimentfilter nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Bij gewone stadswoningen met leidingwater van een drinkwaterbedrijf is een sedimentfilter
          optioneel. Maar in de volgende situaties is het sterk aanbevolen of zelfs noodzakelijk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Eigen bron of boorput:</strong> vrijwel altijd nodig. Bronwater bevat
            doorgaans zand, slib, roestdeeltjes of ijzer/mangaanneerslag afhankelijk van
            de bodemsamenstelling
          </li>
          <li>
            <strong>Bruinachtig of troebel water bij eerste straal:</strong> wijst op roest
            of slib in de leidingen (vaak bij oude huizen of na leidingwerkzaamheden). Een
            10 micron filter lost dit snel op
          </li>
          <li>
            <strong>Verstopping van fijnere filters:</strong> als uw actief koolfilter of
            osmosemembraan snel verstopt, is een sedimentvoorfilter de oplossing
          </li>
          <li>
            <strong>Hoge ijzer- of mangaanconcentraties:</strong> na oxidatie (beluchting)
            slaan ijzer en mangaan neer als bruine/zwarte vlokken die op sediment lijken.
            Een sedimentfilter vangt dit neerslag op
          </li>
          <li>
            <strong>Voor elk osmosesysteem of UV-desinfectiesysteem:</strong> absoluut
            verplicht als eerste filterstrap
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sedimentfilter als voorfilter voor osmose
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/waterfilter/arseen" className="text-[#005F8A] underline">osmosemembraan</Link>{' '}
          heeft extreem kleine porieen van 0,0001 micron (0,1 nanometer). Het is het meest
          gevoelige onderdeel in een waterfiltersysteem en tegelijkertijd het duurste (doorgaans
          50&ndash;150 euro per membraan, levensduur 2&ndash;5 jaar bij goed onderhoud). Sediment
          en grotere deeltjes kunnen het membraan direct fysiek beschadigen of de
          distributieplaat verstoppen.
        </p>
        <p className="text-gray-700 mb-4">
          De standaard filtervolgorde in een kwalitatief osmosesysteem is:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Sedimentfilter 5 micron</strong> &ndash; verwijdert zand, slib, roest</li>
          <li><strong>Actief koolblokfilter</strong> &ndash; verwijdert chloor, chlooramine, organische verbindingen</li>
          <li><strong>RO-membraan</strong> &ndash; verwijdert opgeloste zouten, zware metalen, nitraten</li>
          <li><strong>Actief kool postfilter</strong> &ndash; verbetert smaak en geur van het permeaat</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Sommige systemen voegen een extra sedimentfilter van 10 of 25 micron toe als eerste
          trap wanneer het invoerwater veel grof sediment bevat. Dit verlengt de levensduur
          van de 5 micron cartridge aanzienlijk.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sedimentfilter als voorfilter voor UV-desinfectie
        </h2>
        <p className="text-gray-700 mb-4">
          UV-desinfectie werkt via het principe van fotochemische inactivering: UV-licht bij
          254 nanometer beschadigt het DNA van micro-organismen waardoor ze zich niet meer
          kunnen vermenigvuldigen. Dit proces werkt alleen als het UV-licht de micro-organismen
          daadwerkelijk kan bereiken -- met andere woorden: het water moet helder zijn.
        </p>
        <p className="text-gray-700 mb-4">
          Zwevende deeltjes in het water verstrooien en absorberen het UV-licht. Micro-organismen
          die zich achter een deeltje bevinden, worden niet blootgesteld aan voldoende UV-dosis
          en overleven de behandeling. De UV-transmissie (UVT) van het water moet hoger zijn
          dan 85% bij 254 nm voor effectieve desinfectie. Troebel water kan een UVT hebben
          van 50% of lager, wat de UV-lamp volledig ineffectief maakt.
        </p>
        <p className="text-gray-700 mb-6">
          Een sedimentfilter van 1&ndash;5 micron voor de UV-lamp zorgt dat de UVT het vereiste
          niveau bereikt. Dit is essentieel bij eigen bronnen en boorputten met potentieel
          biologisch besmette watervoorzieningen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filterbehuizingen, types en onderhoud
        </h2>
        <p className="text-gray-700 mb-4">
          Sedimentfilters worden verkocht als compleet systeem (behuizing plus cartridge) of
          als vervangende cartridges voor bestaande behuizingen. De meest voorkomende maten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Standaard 10 inch (25 cm):</strong> meest gebruikte maat voor huishoudelijk
            gebruik. Past in de meeste standaard filterbehuizingen. Cartridges zijn overal
            verkrijgbaar voor 2&ndash;8 euro per stuk
          </li>
          <li>
            <strong>20 inch (50 cm):</strong> grotere capaciteit, langere levensduur.
            Geschikt voor hogere debieten of grotere huishoudens
          </li>
          <li>
            <strong>Big Blue (4,5 inch diameter):</strong> voor hoge debieten bij horecalocaties,
            eigen bronnen met hoge sedimentbelasting of grotere woningen. Doorstroomsnelheid
            tot 60 liter per minuut
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Vervangingsinterval is afhankelijk van de waterkwaliteit. Bij gemiddeld Nederlands
          leidingwater: elke 3&ndash;6 maanden. Bij eigen bron met hoge sedimentbelasting:
          elke 4&ndash;8 weken. De drukval over de filter is de meest betrouwbare indicator:
          een significante drukvermindering in uw systeem wijst op een volle cartridge.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Zelfreinigende sedimentfilters</strong> (met spuiventiel) zijn geschikt voor
          situaties met hoge sedimentbelasting. Via een handspuiventiel wordt het filter
          doorgespoeld zonder cartridgevervanging. <strong>Backwash-filters</strong> spoelen
          automatisch terug en zijn de meest onderhoudsarme optie voor eigen bronnen. Zie onze
          uitgebreide{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilter vergelijkingspagina</Link>{' '}
          voor een overzicht van alle filtersystemen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sedimentfilter versus actief koolfilter: wat doet wat?
        </h2>
        <p className="text-gray-700 mb-4">
          Een veelgestelde vraag: wat is het verschil en heb ik beide nodig? Het antwoord is
          ja, en ze zijn aanvullend -- niet uitwisselbaar:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Sedimentfilter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Actief koolfilter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Werkingsmechanisme</td>
                <td className="border border-gray-300 px-3 py-2">Mechanisch (zeving)</td>
                <td className="border border-gray-300 px-3 py-2">Adsorptie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Verwijdert deeltjes</td>
                <td className="border border-gray-300 px-3 py-2">Ja (zand, slib, roest)</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Verwijdert chloor</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Verwijdert geur/smaak</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Volgorde in systeem</td>
                <td className="border border-gray-300 px-3 py-2">Altijd als eerste</td>
                <td className="border border-gray-300 px-3 py-2">Na sedimentfilter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Voor meer informatie over de combinatie van filtertechnologieen, bekijk onze pagina over{' '}
          <Link href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">chloor verwijderen uit drinkwater</Link>{' '}
          en de uitleg over{' '}
          <Link href="/waterfilter/arseen" className="text-[#005F8A] underline">osmosefilters voor verontreinigingen</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over sedimentfilters
          </h2>
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters vergelijken</Link>,{' '}
          <Link href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">chloor verwijderen</Link>,{' '}
          <Link href="/waterfilter/arseen" className="text-[#005F8A] underline">waterfilter voor arseen</Link> en{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmose water uitleg</Link>.
        </p>
      </main>
    </>
  );
}
