import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Bacterien in leidingwater: legionella, E. coli en andere risicos',
  description: 'Bacterien in leidingwater zijn zeldzaam maar gevaarlijk. Legionella, E. coli en cryptosporidium: wanneer is leidingwater bacteriologisch onveilig en wat doe.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/bacterien' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zit er legionella in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In het distributiewater van waterbedrijven wordt vrijwel nooit legionella aangetroffen. Legionella groeit niet in koud water of in goed onderhouden drinkwaterdistributienetten. Het risico zit in de eigen installatie: boilers, warmwaterleidingen en apparaten als luchtbevochtigers en koeltorens waar water stilstaat bij temperaturen tussen 20 en 45 graden Celsius. Legionella is alleen gevaarlijk via inademing van fijn waternevels, niet via drinken. Een waterfilter lost het legionellaprobleem niet op; een boilertemperatuur van meer dan 60 graden wel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is E. coli in leidingwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'E. coli (Escherichia coli) in leidingwater is een ernstig signaal: het is een indicator voor fecale besmetting van het water. Als E. coli wordt aangetroffen, geeft het waterbedrijf direct een kookadvies uit. De pathogene stammen van E. coli (bijv. O157:H7) kunnen ernstige maag-darminfecties veroorzaken, met name bij kinderen, ouderen en mensen met een verzwakt immuunsysteem. In de normale situatie is E. coli-besmetting van Nederlands leidingwater uiterst zeldzaam en treedt alleen op bij calamiteiten zoals een leidingbreuk of overstromingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat moet ik doen als er een kookadvies is?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een kookadvies: (1) Gebruik leidingwater alleen na koken voor drinken, tandenpoetsen, voedselbereiding en bereiding van babyvoeding. (2) Kook water minimaal 1 minuut door bij temperaturen boven 70 graden Celsius, bacterien en parasieten sterven dan af. (3) Gebruik geen water direct uit de kraan voor oogcontact of wondverzorging. (4) Douchen is doorgaans veilig, maar vermijd inademen van douchenevel en oogcontact. (5) Volg instructies van uw waterbedrijf op en wacht op het sein dat het kookadvies is opgeheven. UV-filters en osmosefilters filteren actief maar zijn geen officieel alternatief voor een kookadvies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een waterfilter legionella?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterfilter (UV, ultrafiltratie of osmose) verwijdert technisch gezien wel legionellabacterien uit het water, maar pakt het werkelijke probleem niet aan. Legionella groeit namelijk na het filter in stilstaande warme leidingen en waterapparaten in uw eigen installatie. Een legionella-risico in een boiler of leidinginstallatie los je op met: boilertemperatuur boven 60 graden, regelmatig doorspoelen van weinig gebruikte leidingen, thermische desinfectie, en het vermijden van dode leidingpunten (blind ends). Een filter aan de kraan beschermt niet tegen legionella die verderop in de installatie groeit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe groeit legionella in een cv-installatie of boiler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legionella pneumophila groeit optimaal bij temperaturen tussen 20 en 45 graden Celsius in stilstaand water. In een boiler die is ingesteld op een te lage temperatuur (onder 60 graden) kan legionella zich vermeerderen. Ook in dode leidingpunten (leidingen die zijn afgesloten maar nog water bevatten), koeltorens en luchtbevochtigers vindt legionella ideale groeiomstandigheden. Biofilm in oude leidingen biedt een extra voedingsbodem. Preventie: stel de boiler in op minimaal 60 graden (of 65 graden voor extra zekerheid), voer jaarlijkse thermische desinfectie uit en verwijder dode leidingpunten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is regenwater of bronwater veilig om te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regenwater en ongezuiverd bronwater zijn niet automatisch veilig als drinkwater. Regenwater dat via daken en goten wordt verzameld, bevat bacterien, vogeluitwerpselen, metaaldeeltjes van dakbedekking en luchtverontreiniging. Bronwater uit eigen bron heeft geen garanties zonder regelmatige bacteriologische analyse: E. coli, enterococcen en andere pathogenen kunnen aanwezig zijn. Als u regenwater of bronwater wilt gebruiken als drinkwater, is een volledige zuivering noodzakelijk: sedimentfilter, UV-filter (of ultrafiltratie), en bij voorkeur ook een koolstoffilter of osmose voor chemische stoffen. Laat het water minimaal jaarlijks testen door een gecertificeerd laboratorium.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk filter beschermt het best tegen bacterien en parasieten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drie filtertypen zijn effectief tegen bacterien en parasieten: (1) UV-filter: desinfecteert effectief door DNA-schade aan micro-organismen, verwijdert geen chemische stoffen. (2) Ultrafiltratie (UF, membraanporiegrootte 0,02 micrometer): verwijdert bacterien, parasieten en zelfs virussen mechanisch, ook effectief tegen cryptosporidium. (3) Omgekeerde osmose (RO, poriegrootte 0,0001 micrometer): verwijdert alles inclusief bacterien, virussen, parasieten en chemische stoffen. Een koolstoffilter alleen beschermt NIET tegen bacterien. De meest complete keuze voor microbiologische en chemische bescherming is RO-osmose met UV-nafilter.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Bacterien in leidingwater: legionella, E. coli en andere risicos',
  description: 'Bacterien in leidingwater zijn zeldzaam maar gevaarlijk. Legionella, E. coli en cryptosporidium: wanneer is leidingwater bacteriologisch onveilig en wat doe.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/bacterien',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function BacterienLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Bacterien in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/bacterien' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/leidingwater" className="hover:underline">Leidingwater</Link> &rsaquo;{' '}
          <span>Bacterien in leidingwater</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Bacterien in leidingwater: legionella, E. coli en andere risicos
          </h1>
          <p className="text-[#005F8A] text-lg">
            Nederlands drinkwater is bacteriologisch bijna altijd veilig. Maar legionella in uw eigen installatie, E. coli bij calamiteiten en chloorresistente parasieten als cryptosporidium verdienen aandacht.
          </p>
        </div>

        <QuickAnswer answer="Nederlands leidingwater is bacteriologisch 99,9% veilig (RIVM). Legionella groeit niet in het net maar in uw eigen boiler bij 20-45 graden Celsius en is gevaarlijk via inademing, niet drinken. E. coli wijst op fecale besmetting bij calamiteiten. Cryptosporidium is chloorresistent; UV of osmose verwijdert het. Een koolstoffilter biedt geen bacteriologische bescherming." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nederlandse drinkwaterkwaliteit: bacteriologisch vrijwel foutloos
        </h2>
        <p className="text-gray-700 mb-4">
          Volgens het RIVM voldoet Nederlands leidingwater bacteriologisch in meer dan <strong>99,9% van alle metingen</strong> aan de wettelijke normen. Waterbedrijven voeren continu bacteriologische controles uit op E. coli, enterococcen en koloniegetal als indicatoren voor fecale besmetting. Overschrijdingen zijn uiterst zeldzaam en leiden direct tot een kookadvies en nader onderzoek.
        </p>
        <p className="text-gray-700 mb-6">
          Het Nederlandse drinkwater is bacteriologisch veilig dankzij een combinatie van: zorgvuldige bronwaterkeuze en -bescherming, meertrapszuivering (coagulatie, filtratie, UV-behandeling, desinfectie), chlorering of chloraminering voor residuele bescherming in het net, en regelmatige monitoring van het distributienet.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De 3 belangrijkste bacteriologische risicos
        </h2>

        {/* Legionella */}
        <div className="border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
            <h3 className="text-xl font-semibold text-[#003F5C]">Legionella pneumophila</h3>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-semibold">Via inademing, niet drinken</span>
          </div>
          <p className="text-gray-700 mb-3">
            Legionella pneumophila is de bacterie die de veteranenziekte (legionellose) veroorzaakt, een ernstige longontsteking. De bacterie leeft in water en groeit optimaal bij temperaturen tussen <strong>20 en 45 graden Celsius</strong> in stilstaand water. Besmetting verloopt uitsluitend via inademing van fijn waternevels (aerosolen), bijvoorbeeld uit een douchekop, luchtbevochtiger of koeltoren &mdash; <strong>niet via het drinken van water</strong>.
          </p>
          <p className="text-gray-700 mb-3">
            Dit heeft een cruciale consequentie: een waterfilter aan de kraan lost het legionellaprobleem niet op. Legionella groeit verderop in de installatie, na het filter. De juiste oplossingen zijn:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-3 space-y-1">
            <li>Boilertemperatuur instellen op minimaal <strong>60 graden Celsius</strong> (bij 60&deg;C sterft legionella af binnen 2 minuten)</li>
            <li>Warmwaterleidingen volledig op temperatuur houden tot aan het aftappunt</li>
            <li>Regelmatig doorspoelen van weinig gebruikte kranen en douchekoppen</li>
            <li>Jaarlijkse thermische desinfectie van het warmwatersysteem</li>
            <li>Verwijderen van dode leidingpunten (blind ends) waar water stilstaat</li>
          </ul>
          <div className="bg-[#E0F2FE] rounded-lg p-3 text-sm text-[#003F5C]">
            <strong>Let op:</strong> Risicogroepen voor legionellose zijn rokers, ouderen boven 50 jaar, mensen met diabetes, nierfalen of een verzwakt immuunsysteem. Bij klachten (hoge koorts, droge hoest, spierpijn) na blootstelling aan waternevels: direct naar de huisarts.
          </div>
        </div>

        {/* E. coli */}
        <div className="border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
            <h3 className="text-xl font-semibold text-[#003F5C]">E. coli en enterococcen</h3>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Indicator fecale besmetting</span>
          </div>
          <p className="text-gray-700 mb-3">
            Escherichia coli (E. coli) en enterococcen zijn <strong>indicatorbacterien voor fecale besmetting</strong>. Als ze in leidingwater worden aangetroffen, betekent dit dat er ergens rioolwater of dierlijke mest in het waternetwerk is terechtgekomen. Pathogene E. coli-stammen zoals O157:H7 (EHEC) kunnen ernstige maag-darmklachten, hemolytisch uremisch syndroom (HUS) en nierfalen veroorzaken, met name bij kinderen en ouderen.
          </p>
          <p className="text-gray-700 mb-3">
            In de normale situatie is de kans op E. coli in Nederlands leidingwater uiterst klein. Verhoogd risico treedt op bij:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-3 space-y-1">
            <li>Leidingbreuk waarbij grondwater instroomt</li>
            <li>Overstromingen die het distributienet besmetten</li>
            <li>Onderhoudswerkzaamheden waarbij het net open is geweest</li>
            <li>Eigen waterputten en bronnen zonder behandeling</li>
          </ul>
          <p className="text-gray-700">
            Bij een geconstateerde E. coli-besmetting geeft het waterbedrijf direct een <strong>kookadvies</strong> uit. Kook water minimaal 1 minuut door; bij temperaturen boven 70&deg;C sterven alle pathogene bacterien af.
          </p>
        </div>

        {/* Cryptosporidium */}
        <div className="border border-gray-200 rounded-xl p-5 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
            <h3 className="text-xl font-semibold text-[#003F5C]">Cryptosporidium en Giardia</h3>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Chloorresistent</span>
          </div>
          <p className="text-gray-700 mb-3">
            Cryptosporidium parvum en Giardia lamblia zijn parasitaire protozoaire pathogenen die kunnen voorkomen in oppervlaktewater. Ze vormen cystes die uiterst resistent zijn tegen chloordesinfectie &mdash; de normale chloorconcentraties in leidingwater zijn onvoldoende om ze te doden. Cryptosporidium-infectie veroorzaakt ernstige waterige diarree die weken kan aanhouden, met name gevaarlijk voor mensen met een verzwakt immuunsysteem (o.a. hiv-patienten, transplantatiepatienten).
          </p>
          <p className="text-gray-700 mb-3">
            Nederlandse waterbedrijven passen meervoudige barrieretechnologieen toe waaronder UV-bestraling die de cystes effectief inactiveert, ook al overleven ze chemische desinfectie. In de praktijk zijn uitbraken van cryptosporidiose via Nederlands leidingwater zeldzaam.
          </p>
          <p className="text-gray-700">
            Voor wie extra bescherming wil: ultrafiltratie (membraanporiegrootte 0,02 micrometer) en omgekeerde osmose (0,0001 micrometer) verwijderen cryptosporidium en Giardia-cystes voor meer dan 99,99%. Koken gedurende 1 minuut is ook effectief.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke filters helpen tegen bacterien en parasieten?
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Bacterien</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Virussen</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Crypto/Giardia</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Chemisch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Koolstoffilter (GAC)</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
                <td className="border border-gray-300 px-3 py-2 text-center">chloor, geur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">UV-filter</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">✓ &gt;99,99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">✓ &gt;99,99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">✓ &gt;99,99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Ultrafiltratie (0,02 µm)</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">✓ &gt;99,99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">✓ &gt;99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">✓ &gt;99,99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-red-600">✗</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">RO-osmose (0,0001 µm)</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">✓ &gt;99,99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">✓ &gt;99,99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">✓ &gt;99,99%</td>
                <td className="border border-gray-300 px-3 py-2 text-center text-green-700 font-semibold">PFAS, lood, nitraat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-6 italic">
          Een koolstoffilter biedt geen bescherming tegen bacterien of parasieten. UV en ultrafiltratie zijn uitstekend microbiologisch, maar verwijderen geen chemische verontreinigingen. RO-osmose biedt de breedste bescherming.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is er verhoogd risico?
        </h2>
        <p className="text-gray-700 mb-4">
          In de dagelijkse praktijk is bacteriologisch risico van Nederlands leidingwater minimaal. Verhoogd risico bestaat in de volgende situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Eigen waterput of regenwaterputje</strong>: geen behandeling door waterbedrijf, jaarlijkse bacteriologische analyse aanbevolen</li>
          <li><strong>Calamiteiten</strong>: leidingbreuk, overstroming, onderhoudswerkzaamheden aan het net &mdash; wacht op melding waterbedrijf</li>
          <li><strong>Verouderde loodgietersinstallatie</strong>: biofilm in oude leidingen kan bacterieen huisvesten; regelmatig doorspoelen helpt</li>
          <li><strong>Vakantiewoning of zomerhuisje</strong> na lange leegstand: laat water uitgebreid doorlopen en voer thermische desinfectie van het warmwatersysteem uit</li>
          <li><strong>Immunogecompromitteerde bewoners</strong>: extra microbiologische voorzorg via UV-filter of ultrafiltratie is zinvol</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kookadvies: hoe en hoe lang?
        </h2>
        <p className="text-gray-700 mb-4">
          Een kookadvies van het waterbedrijf betekent dat er een verhoogd bacteriologisch risico is geconstateerd. Volg deze stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Breng water aan de kook en laat het <strong>minimaal 1 minuut</strong> doorkoken. Op grote hoogte langer vanwege lagere kookpunt, maar in Nederland is 1 minuut voldoende.</li>
          <li>Laat het water afkoelen in een schone, afgesloten container.</li>
          <li>Gebruik gekookt water voor: drinken, tandenpoetsen, bereiding van babyvoeding, wassen van groenten en fruit die rauw worden gegeten.</li>
          <li>Douchen is doorgaans toegestaan; vermijd inademen van stoom en contact met ogen.</li>
          <li>Wacht op de officieel opheffing van het kookadvies door het waterbedrijf.</li>
        </ol>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/microbiologisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Microbiologische verontreinigingen</h3>
              <p className="text-sm text-gray-600">Overzicht van bacterien, virussen en andere micro-organismen in drinkwater.</p>
            </Link>
            <Link href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie</h3>
              <p className="text-sm text-gray-600">Hoe UV-licht bacterien en virussen in water neutraliseert.</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
              <p className="text-sm text-gray-600">Wettelijke grenswaarden voor de kwaliteit van drinkwater in Nederland.</p>
            </Link>
            <Link href="/waterfilter/legionella" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter tegen legionella</h3>
              <p className="text-sm text-gray-600">Filteropties om legionellabacterie in leidingwater te beheersen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over bacterien in leidingwater</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/leidingwater/chloor" className="text-[#005F8A] underline">chloor in leidingwater</Link>.
        </p>
        <p className="text-gray-700 mt-4">
          Verdiep uw kennis: <Link href="/stoffen-in-drinkwater/microbiologisch" className="text-[#005F8A] hover:underline font-medium">Microbiologische risico&apos;s in drinkwater</Link>.
        </p>
      </main>
    </>
  );
}
