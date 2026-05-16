import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Bacterien in kraanwater: wanneer is het gevaarlijk?',
  description: 'Kraanwater in Nederland is vrijwel bacterievrij, maar er zijn uitzonderingen. Ontdek wanneer bacterien in kraanwater gevaarlijk zijn en hoe je jezelf beschermt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/bacterien' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wanneer is kraanwater bacteriologisch onveilig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kraanwater direct uit het leidingwaternet is in Nederland vrijwel altijd bacteriologisch veilig. Onveiligheid ontstaat bijna altijd in de huisinstallatie: na lang stilstaan (vakantie, leegstand), bij een warmwaterboiler die onder 60 graden C wordt ingesteld, in verouderde leidingen of na leidingwerkzaamheden. Bij calamiteiten zoals overstromingen kan het leidingwaternet zelf besmет raken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik of er legionella in mijn kraanwater zit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legionella is niet te zien, te ruiken of te proeven. De enige betrouwbare manier is een watermonsteranalyse door een gecertificeerd laboratorium. Risicovolle situaties zijn: warmwaterboiler die op minder dan 60 graden C staat ingesteld, dode leidingen (aftakkingen zonder gebruik), leidingen die lang niet gebruikt zijn. Symptomen van legionellose verschijnen 2 tot 10 dagen na blootstelling via verstuivend water (douche, jacuzzi).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik als ik lang weg ben geweest en kraanwater wil gebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spoel bij terugkomst alle kranen door: laat koud water minimaal 5 minuten doorlopen totdat de temperatuur stabiel is, en daarna 1 minuut warm water. Douche bij voorkeur niet direct na een lange vakantieperiode zonder eerst door te spoelen. Controleer of de warmwaterboiler minimaal 60 graden C aangeeft. Vermijd het inademen van aerosolen (nevel) tijdens het doorspoelen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een waterfilter gebruiken om bacterien te verwijderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van het filtertype. UV-filters en ultrafiltratiemembranen (UF) verwijderen bacterien effectief. Een osmosefilter verwijdert ook bacterien. Een gewone koolstoffilter (bv. Brita-type) verwijdert geen bacterien en kan juist een broedplaats worden als hij niet regelmatig vervangen wordt. Een waterfilter is geen vervanging voor legionellapreventie via temperatuurbeheer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is kraanwater veilig voor baby\'s en pasgeborenen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands kraanwater voldoet aan de normen voor bereiding van zuigelingenvoeding. Het RIVM adviseert wel om water voor flesvoeding altijd te koken (ook als het vers uit de kraan komt) omdat de norm voor nitrieten bij pasgeborenen strenger is. In oudere woningen met loodhoudende leidingen is gefilterd of gekookt water extra aan te raden. Osmosewater is een veilig alternatief voor de bereiding van flesvoeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de symptomen van legionellose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legionellose (veteranenziekte) begint na een incubatietijd van 2 tot 10 dagen met koorts (boven 39 graden C), hoofdpijn, spierpijn en algehele malaise. Daarna volgt een droge hoest die kan overgaan in longontsteking. Bijkomende symptomen zijn diarree, verwardheid en kortademigheid. De ziekte vereist ziekenhuisopname en antibiotische behandeling. Een milde variant heet Pontiac-koorts en geneest vanzelf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe voorkom ik legionella in mijn warmwaterboiler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stel de warmwaterboiler in op minimaal 60 graden C; bij deze temperatuur sterft legionella binnen 2 minuten af. Laat dode leidingen (aftakkingen die niet meer gebruikt worden) verwijderen door een installateur. Spoel zelden gebruikte kranen en douchekoppen wekelijks door. Vervang verouderde rubberen slangen en pakringen die als voedingsbron kunnen dienen. Laat bij verdenking een legionellacheck uitvoeren.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Bacterien in kraanwater: wanneer is het gevaarlijk?',
  description: 'Kraanwater in Nederland is vrijwel bacterievrij, maar er zijn uitzonderingen. Ontdek wanneer bacterien in kraanwater gevaarlijk zijn en hoe je jezelf beschermt.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kraanwater/bacterien',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KraanwaterBacterienPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kraanwater', item: 'https://waterfilterplatform.nl/kraanwater' },
              { '@type': 'ListItem', position: 3, name: 'Bacterien in kraanwater', item: 'https://waterfilterplatform.nl/kraanwater/bacterien' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/kraanwater" className="hover:underline">Kraanwater</a> &rsaquo;{' '}
          <span>Bacterien in kraanwater</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Bacterien in kraanwater: wanneer is het gevaarlijk?
          </h1>
          <p className="text-gray-600 text-lg">
            Nederlands kraanwater is een van de veiligste ter wereld. Toch kunnen bacterien
            als legionella in uw huisinstallatie voor gevaarlijke situaties zorgen. Wanneer
            is er echt risico, en wat kunt u doen?
          </p>
        </div>

        <QuickAnswer answer="Nederlands kraanwater is vrijwel altijd bacterievrij: waterbedrijven testen wekelijks op E. coli en enterokokken. Gevaar ontstaat bijna altijd in de huisinstallatie, met name door legionella in warmwaterboilers onder 60 graden C of bij stilstaand water na vakantie. Risicogroepen: 65-plussers, rokers en mensen met verzwakte immuniteit." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nederlandse drinkwaterkwaliteit: strikte controle
        </h2>
        <p className="text-gray-700 mb-4">
          De tien Nederlandse drinkwaterbedrijven leveren water dat voldoet aan de strenge
          eisen van het Drinkwaterbesluit. Bacteriologische veiligheid staat centraal: wekelijks
          worden honderden monsters genomen en getest op de aanwezigheid van:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>E. coli</strong> — indicator voor fecale besmetting (norm: 0 kve/100 mL)</li>
          <li><strong>Enterokokken</strong> — aanvullende fecale indicator (norm: 0 kve/100 mL)</li>
          <li><strong>Kolonietelling bij 22 graden C</strong> — algemene kiemgetal als indicator voor microbiologische stabiliteit</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het leidingwaternet zelf bevat vrijwel nooit ziekteverwekkers. Het water wordt
          bij productie gechloorineerd of via UV-behandeling gedesinfecteerd, en de leidingdruk
          voorkomt indringing van buitenaf. De drinkwaterbedrijven publiceren jaararchieven van
          de waterkwaliteitsgegevens per distributiegebied.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waar gaat het mis: het verschil tussen leidingwaternet en huisinstallatie
        </h2>
        <p className="text-gray-700 mb-4">
          Het cruciale onderscheid is de grens bij de watermeter. <strong>Voorbij de watermeter
          is de huiseigenaar of verhuurder verantwoordelijk</strong>, niet het drinkwaterbedrijf.
          Besmetting met bacterien als legionella en E. coli vindt bijna altijd plaats in
          de huisinstallatie, niet in het openbare leidingwaternet.
        </p>
        <p className="text-gray-700 mb-6">
          Redenen waarom besmetting in de huisinstallatie kan plaatsvinden: stilstaand water
          creëert ideale groeiomstandigheden, warmwaterboilers op te lage temperatuur vormen
          een legionellareservoir, verouderde materialen leveren nutrienten voor bacteriegroei,
          en dode leidingen (niet meer gebruikte aftakkingen) zijn perfecte broedplaatsen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vijf situaties met verhoogd risico
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              1. Stilstaand water na vakantie of leegstand
            </h3>
            <p className="text-gray-700 text-sm">
              Bij leidingen die meer dan een week niet gebruikt zijn, zakt de resterende
              chloorconcentratie weg. Bacterien die in biofilms op de binnenwand van leidingen
              leven, kunnen zich dan ongehinderd vermenigvuldigen. Spoel na terugkomst alle
              kranen minimaal 5 minuten door met koud water en 1 minuut met warm water.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              2. Legionella in warmwaterboiler onder 60 graden C
            </h3>
            <p className="text-gray-700 text-sm">
              <em>Legionella pneumophila</em> groeit optimaal tussen 25 en 50 graden C en overleeft
              temperaturen tot 55 graden C. Een warmwaterboiler die is ingesteld op 55 graden C
              of minder vormt een ernstig risico. Bij 60 graden C sterft legionella binnen
              2 minuten af. Bij 70 graden C is de afsterving nagenoeg onmiddellijk. Controleer
              de instellingen van uw boiler en stel hem in op minimaal 60 graden C.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              3. Oude loodkranen en degraderende rubberpakkingen
            </h3>
            <p className="text-gray-700 text-sm">
              Verouderde rubberafdichtingen en slangen lossen organische stoffen op in het water.
              Deze stoffen dienen als voedingsbron voor bacterien. Bovendien kunnen loodkranen
              en loodleidingen (aangetroffen in woningen van voor 1960) lood afgeven. Dit is
              geen direct bacteriologisch risico maar verhoogt de algehele waterkwaliteitsrisicos.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              4. Na leidingwerkzaamheden
            </h3>
            <p className="text-gray-700 text-sm">
              Bij reparaties of vernieuwing van leidingen kunnen bacterien worden geintroduceerd.
              Na werkzaamheden aan het leidingwaternet (in de straat of in huis) adviseert
              het drinkwaterbedrijf altijd een spoeladvies op te volgen. In sommige gevallen
              wordt een kokend-water-advies afgegeven voor het betreffende gebied.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              5. Overstroming of calamiteit
            </h3>
            <p className="text-gray-700 text-sm">
              Bij extreme neerslag, overstromingen of infrastructuurschade kan het leidingwaternet
              zelf besmет raken door terugstroming van oppervlaktewater of rioolwater.
              Drinkwaterbedrijven geven in dergelijke gevallen direct een kokend-water-advies
              uit via media en hun websites.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Legionellose: symptomen en risicogroepen
        </h2>
        <p className="text-gray-700 mb-4">
          Besmetting met <em>Legionella pneumophila</em> verloopt via inademen van aerosolen
          (fijn waterwaas), niet via het drinken van water. Douchen, jacuzzis en verneveling
          zijn de voornaamste besmettingswegen. De incubatietijd bedraagt <strong>2 tot 10 dagen</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          Symptomen van legionellose (veteranenziekte):
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Koorts boven 39 graden C, rillingen</li>
          <li>Droge hoest, later longontsteking</li>
          <li>Spierpijn, hoofdpijn, algehele malaise</li>
          <li>Soms diarree, verwardheid of kortademigheid</li>
        </ul>
        <p className="text-gray-700 mb-6">
          <strong>Risicogroepen</strong> voor ernstig verloop: mensen van 65 jaar en ouder,
          rokers en ex-rokers, personen met verminderde weerstand door ziekte of medicatie
          (immuungecompromitteerden), en mensen met chronische longaandoeningen zoals COPD.
          Voor gezonde volwassenen onder de 50 verloopt een eventuele legionellabesmetting
          vaak als milde Pontiac-koorts (griepachtig, zelflimiterend).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische maatregelen voor bacterieveilig kraanwater
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Maatregel</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Doorspoelen na vakantie</td>
                <td className="border border-gray-300 px-3 py-2">5 min koud, daarna 1 min warm — buiten douchen of buiten de badkamer staan</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Boilertemperatuur</td>
                <td className="border border-gray-300 px-3 py-2">Stel in op minimaal 60 graden C; controleer periodiek</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Dode leidingen</td>
                <td className="border border-gray-300 px-3 py-2">Laat ongebruikte aftakkingen verwijderen door een installateur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Douchekoppen</td>
                <td className="border border-gray-300 px-3 py-2">Maandelijks ontkalken en reinigen; vervang bij slijtage</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zelden gebruikte kranen</td>
                <td className="border border-gray-300 px-3 py-2">Wekelijks minimaal 1 minuut doorspoelen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke waterfilters helpen tegen bacterien?
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elk filtertype is geschikt voor bacterieverwijdering. Het is belangrijk het
          juiste type te kiezen, want een verkeerd filter kan averechts werken.
        </p>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C] text-sm">UV-filter: effectief tegen bacterien en virussen</h3>
            <p className="text-gray-700 text-sm mt-1">
              UV-licht bij 254 nm beschadigt het DNA van micro-organismen en maakt ze
              onvermogend tot reproductie. Verwijderingseffectiviteit: bacterien &gt;99,99%,
              virussen &gt;99,9%, protozoa &gt;99,9%. Geen chemische toevoegingen nodig.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C] text-sm">Ultrafiltratiefilter (UF): fysieke barriere</h3>
            <p className="text-gray-700 text-sm mt-1">
              UF-membranen met een poriediameter van 0,01 tot 0,1 micrometer houden bacterien
              (0,2 tot 2 micrometer) en grotere micro-organismen fysiek tegen. Protozoa als
              Cryptosporidium worden &gt;99,99% verwijderd.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C] text-sm">
              Osmosefilter: verwijdert bacterien maar is geen legionellamaatregel
            </h3>
            <p className="text-gray-700 text-sm mt-1">
              Een{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
                omgekeerde osmosefilter
              </Link>{' '}
              heeft een membraanporiediameter van 0,0001 micrometer en houdt vrijwel alle
              bacterien en virussen tegen. Het lost het legionellaprobleem echter niet op:
              legionella groeit in de warme leidingen voor de filter, niet in het drinkwater zelf.
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="font-semibold text-[#003F5C] text-sm">Koolstoffilter: NIET geschikt, kan bacteriegroei bevorderen</h3>
            <p className="text-gray-700 text-sm mt-1">
              Een koolstoffilter (zoals een Brita-type filterkan of een inline koolstofblokfilter)
              verwijdert geen bacterien. Het koolstofmateriaal kan juist een broedplaats worden
              als de filter niet regelmatig vervangen wordt. Gebruik een koolstoffilter nooit
              als maatregel tegen bacteriologische risicos.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Lees ook meer over{' '}
          <Link href="/leidingwater/bacterien" className="text-[#005F8A] underline">
            bacterien in leidingwater
          </Link>{' '}
          en de achtergronden van microbiologische waterkwaliteit in Nederland. Voor informatie
          over kalkgehalte in uw regio, zie onze pagina over{' '}
          <Link href="/kraanwater/hardheid" className="text-[#005F8A] underline">
            hardheid van kraanwater
          </Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over bacterien in kraanwater
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
          <Link href="/leidingwater/bacterien" className="text-[#005F8A] underline">bacterien in leidingwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/kraanwater/hardheid" className="text-[#005F8A] underline">hardheid kraanwater per regio</Link>.
        </p>
      </main>
    </>
  );
}
