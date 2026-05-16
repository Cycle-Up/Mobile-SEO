import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Alkalisch water en gezondheid: wat zegt de wetenschap echt?',
  description:
    'Alkalisch water wordt gepromoot voor zuurreflux, sportuithoudingsvermogen en hydratatie. Wat zegt peer-reviewed onderzoek? Eerlijke beoordeling van de claims.',
  alternates: { canonical: 'https://waterfilterplatform.nl/alkalisch-water/gezondheid' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is alkalisch water bewezen gezond?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor gezonde mensen is er geen robuust wetenschappelijk bewijs dat alkalisch water gezonder is dan gewoon kraanwater. De meeste claims zijn niet onderbouwd door grootschalige klinische studies. Er is beperkt bewijs voor specifieke toepassingen zoals zuurreflux en rehydratatie na sport, maar deze studies hebben methodologische beperkingen. De WHO heeft geen officieel standpunt voor of tegen alkalisch drinkwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt alkalisch water bij zuurreflux?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er is enig laboratoriumonderzoek dat wijst op een potentieel voordeel. Koufman en Johnston (2012) toonden aan dat water met pH 8,8 het enzym pepsine kan inactiveren in in-vitro omstandigheden. Pepsine speelt een rol bij zuurreflux en keelzuur. Er zijn echter geen klinische RCT-studies bij mensen met GERD uitgevoerd. Het is een veilig experiment met laag risico, maar geen vervanging voor medisch advies of bewezen behandelingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is alkalisch water goed voor sporters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn twee kleine studies (Weidman 2016 en Heil 2010) die suggereren dat alkalisch water iets snellere rehydratatie biedt na intensieve inspanning. De steekproeven waren klein en een van de studies was deels gefinancierd door industrie. Er is geen bewijs voor verbeterd uithoudingsvermogen of krachtontwikkeling. Voor sporters op hoog niveau is gewoon water of sportdranken met elektrolyten bewezen effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan alkalisch water kanker voorkomen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Er is geen enkel wetenschappelijk bewijs dat alkalisch water kanker kan voorkomen of behandelen. De claim dat kankercellen slecht gedijen in een alkalisch milieu en dat alkalisch water dit milieu creert, is onjuist. Het bloed-pH wordt strikt gereguleerd en wordt niet beinvloed door drinkwater. Geen enkele oncologische organisatie ter wereld beveelt alkalisch water aan als preventie of behandeling van kanker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zegt de WHO over alkalisch water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Wereldgezondheidsorganisatie (WHO) heeft geen officieel standpunt uitgebracht voor of tegen alkalisch drinkwater. De WHO-richtlijnen voor drinkwaterkwaliteit richten zich op veiligheidsparameters zoals microbiologische kwaliteit, chemische verontreinigingen en pH-range (6,5 tot 9,5 als veilig bereik). Er is geen WHO-aanbeveling die alkalisch water specifiek aanbeveelt voor gezondheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft alkalisch water effect op botgezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er is beperkt onderzoek dat suggereert dat een meer alkalische voeding en inname de uitscheiding van calcium via de urine kan verminderen (minder calciumverlies). Dit is een indirect effect op botgezondheid. Echter, een direct effect op botdichtheid of een vermindering van osteoporose is niet aangetoond in klinische studies. Calcium en vitamine D zijn veel beter onderbouwde interventies voor botgezondheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is alkalisch water veilig voor dagelijks gebruik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, alkalisch water met een pH tot 9 of 10 is over het algemeen veilig voor dagelijks gebruik bij gezonde volwassenen. Er zijn geen bekende ernstige bijwerkingen bij normale consumptie. Wel zijn er theoretische bezwaren bij extreem hoge pH (boven 10) voor langdurig gebruik, zoals mogelijke verstoring van de maagslijmvliesbarriere. De Nederlandse drinkwaternorm staat een pH tot 9,5 toe voor kraanwater.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Alkalisch water en gezondheid: wat zegt de wetenschap echt?',
  description:
    'Peer-reviewed beoordeling van gezondheidsaanspraken van alkalisch water: hydratatie, zuurreflux, sportprestaties en kankerpreventie.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/alkalisch-water/gezondheid',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function AlkalischWaterGezondheidsPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://waterfilterplatform.nl',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Alkalisch water',
                item: 'https://waterfilterplatform.nl/alkalisch-water',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Alkalisch water en gezondheid',
                item: 'https://waterfilterplatform.nl/alkalisch-water/gezondheid',
              },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/alkalisch-water" className="hover:underline">Alkalisch water</Link> &rsaquo;{' '}
          <span>Alkalisch water en gezondheid</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Alkalisch water en gezondheid: wat zegt de wetenschap echt?
          </h1>
          <p className="text-gray-700 text-lg">
            Fabrikanten claimen dat alkalisch water goed is voor hydratatie, zuurreflux, sportuithoudingsvermogen en zelfs kankerpreventie. Wat zegt peer-reviewed onderzoek over deze claims? Een eerlijke en nuchtere beoordeling.
          </p>
        </div>

        <QuickAnswer answer="Wetenschappelijk bewijs voor alkalisch water is dun. Enig bewijs bestaat voor zuurreflux (pH 8,8 inactiveert pepsine in vitro) en rehydratatie na sport (kleine studies). Claims over kankerpreventie en pH-neutralisatie zijn onwaar. De WHO geeft geen aanbeveling. Voor gezonde mensen geen bewezen voordeel boven normaal kraanwater of osmosewater." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe reguleert uw lichaam de pH?
        </h2>
        <p className="text-gray-700 mb-4">
          Om de claims over alkalisch water te beoordelen, moet u eerst begrijpen hoe het lichaam zijn zuur-base evenwicht handhaaft. De bloed-pH wordt strikt gereguleerd tussen 7,35 en 7,45 &mdash; een marge van slechts 0,10 pH-eenheden. Dit is een biologische noodzaak: afwijkingen buiten dit bereik (acidose of alkalose) zijn levensgevaarlijk.
        </p>
        <p className="text-gray-700 mb-4">
          Dit evenwicht wordt gehandhaafd via twee hoofdmechanismen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Longen:</strong> door meer of minder CO&sub2; uit te ademen reguleert het lichaam de koolzuurconcentratie in het bloed, wat direct de pH beinvloedt. Dit systeem werkt in seconden tot minuten.</li>
          <li><strong>Nieren:</strong> door bicarbonaat (HCO&sub3;&minus;) te retineren of uit te scheiden reguleert het lichaam de pH op lange termijn. Dit systeem werkt in uren tot dagen.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Maagzuur heeft een pH van 1,5&ndash;3,5. Elke basische stof die u drinkt, inclusief alkalisch water met pH 9 of 10, wordt in de maag onmiddellijk geneutraliseerd. Er bereikt geen meetbare hoeveelheid alkaliniteit het bloed via normaal drinkwater.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Conclusie:</strong> de claim dat alkalisch water uw bloed-pH verhoogt of &quot;lichaamszuur neutraliseert&quot; is fysiologisch onjuist. Uw lichaam doet dit zelf al met grote precisie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Claim 1: Hydratatie
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Bewijs: beperkt, methodologische beperkingen.</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Twee RCT-studies worden het vaakst geciteerd:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Weidman et al. (2016):</strong> 36 gezonde volwassenen, 3 weken crossover studie. Alkalisch water (pH 8) toonde iets lagere bloedviscositeit na inspanning versus gewoon water. Kleine steekproef, korte duur.</li>
          <li><strong>Heil (2010):</strong> vergelijking rehydratatie na sport. Alkalisch water toonde iets snellere herwinning van hydratatiestatus. Deels gefinancierd door industrie.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor alledaags gebruik buiten sportcontext is er geen bewijs voor betere hydratatie. Gewoon water hydrateert uitstekend.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Claim 2: Zuurreflux (GERD)
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Bewijs: enig in-vitro bewijs, geen klinische RCT.</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Koufman &amp; Johnston (2012) publiceerden een in-vitro studie waaruit bleek dat water met een pH van 8,8 het enzym pepsine permanent kan inactiveren. Pepsine is een sterk digestief enzym dat bij zuurreflux schade aanricht in de slokdarm en keel.
        </p>
        <p className="text-gray-700 mb-6">
          De beperking: dit is een laboratoriumstudie, geen studie bij patienten. Er zijn geen gerandomiseerde gecontroleerde studies (RCT&apos;s) bij mensen met GERD gepubliceerd die dit bevestigen. Het is een veelbelovend mechanisme, maar klinisch bewijs ontbreekt. Laag risico om te proberen als aanvulling op medische behandeling.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Claim 3: Botgezondheid
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Bewijs: indirect, onvolledig.</strong>
        </p>
        <p className="text-gray-700 mb-6">
          Sommige studies suggereren dat een meer alkalische inname de uitscheiding van calcium via de urine kan verminderen. Minder calciumverlies via urine is theoretisch gunstig voor botmineraaldichtheid. Echter, een directe verbetering van botdichtheid of vermindering van osteoporoserisico door alkalisch water drinken is niet aangetoond in klinische studies. Calcium, vitamine D en beweging zijn de bewezen interventies voor botgezondheid.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Claim 4: Antikankerende werking
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Bewijs: geen.</strong>
        </p>
        <p className="text-gray-700 mb-6">
          De populaire claim luidt: kankercellen gedijen in een zuur milieu, dus alkalisch water maakt het lichaam minder kankervriendelij. Dit is biologisch incorrect op meerdere niveaus. Ten eerste, kankercellen produceren melkzuur (lactaat) als bijproduct van hun energieproductie &mdash; niet als vereiste omgeving. Ten tweede, het tumormicromilieu-pH is een complex en lokaal fenomeen dat niet beinvloed wordt door het pH van drinkwater. Ten derde, bloed-pH verandert niet door drinkwater. Geen enkele oncologische organisatie wereldwijd beveelt alkalisch water aan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Claim 5: Bloedglucose bij diabetes
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Bewijs: onvoldoende.</strong>
        </p>
        <p className="text-gray-700 mb-6">
          Een kleine pilotstudie (Chycki et al., 2017) bij atletisch actieve diabetespatienten suggereerde mogelijke voordelen van alkalisch water op bloedglucose. De steekproef was te klein en de methode te beperkt voor enige aanbeveling. Patienten met diabetes dienen geen drinkwaterinterventies te vervangen door bewezen medische behandelingen.
        </p>

        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-8">
          <h3 className="font-semibold text-[#003F5C] mb-3">Samenvatting bewijskracht per claim</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Claim</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Bewijskracht</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Oordeel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Neutraliseert lichaamszuur</td>
                  <td className="border border-gray-300 px-3 py-2">Geen</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">Onwaar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Betere hydratatie (dagelijks)</td>
                  <td className="border border-gray-300 px-3 py-2">Geen</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">Niet aangetoond</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Rehydratatie na sport</td>
                  <td className="border border-gray-300 px-3 py-2">Beperkt (2 kleine studies)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-semibold">Mogelijk</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Zuurreflux (GERD)</td>
                  <td className="border border-gray-300 px-3 py-2">In vitro (1 studie)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600 font-semibold">Veelbelovend, onbewezen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Botgezondheid</td>
                  <td className="border border-gray-300 px-3 py-2">Indirect, onvolledig</td>
                  <td className="border border-gray-300 px-3 py-2 text-orange-600 font-semibold">Onvoldoende bewijs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Kankerpreventie</td>
                  <td className="border border-gray-300 px-3 py-2">Geen</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">Onwaar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische conclusie
        </h2>
        <p className="text-gray-700 mb-4">
          Voor gezonde mensen zonder specifieke klachten is er geen wetenschappelijk onderbouwde reden om alkalisch water te verkiezen boven gewoon kraanwater of osmosewater. Nederlands kraanwater is zelf al licht alkalisch (pH 7,2&ndash;8,5) en voldoet aan strenge kwaliteitsnormen.
        </p>
        <p className="text-gray-700 mb-4">
          Mensen met zuurreflux kunnen alkalisch water (pH 8,8) als laagrisico-experiment proberen naast hun reguliere behandeling &mdash; maar niet in plaats daarvan. Sporters die intensief trainen, kunnen alkalisch water uitproberen voor rehydratatie, maar verwacht geen dramatisch effect.
        </p>
        <p className="text-gray-700 mb-6">
          Als uw primaire doel schoon en veilig drinkwater is, biedt een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
          met{' '}
          <Link href="/alkalisch-water/ionisator" className="text-[#005F8A] underline">remineralisatiecartridge</Link>{' '}
          de beste combinatie: puur gefilterd water met een milde alkalische pH van 7,5&ndash;8,5.
          Lees ook de{' '}
          <Link href="/alkalisch-water/vs-osmose" className="text-[#005F8A] underline">vergelijking alkalisch water vs osmosewater</Link>{' '}
          voor een volledig overzicht.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over alkalisch water en gezondheid
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
          <Link href="/alkalisch-water" className="text-[#005F8A] underline">wat is alkalisch water</Link>,{' '}
          <Link href="/alkalisch-water/ionisator" className="text-[#005F8A] underline">waterionisator kopen</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/kraanwater/ph" className="text-[#005F8A] underline">pH van kraanwater</Link>.
        </p>
      </main>
    </>
  );
}
