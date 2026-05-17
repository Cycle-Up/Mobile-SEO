import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Filterkan filter vervangen: wanneer, hoe vaak en welke kosten 2026',
  description:
    'Hoe vaak moet je het filter van je filterkan vervangen? Brita Maxtra Pro elke 4 weken of 150L. BWT elke 120L. Stap-voor-stap vervangingsgids en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/filterkan/filter-vervangen' },
  openGraph: {
    title: 'Filterkan filter vervangen — wanneer en hoe? Gids 2026',
    description:
      'Hoe vaak moet je het filter van je filterkan vervangen? Brita Maxtra Pro elke 4 weken of 150L. BWT elke 120L. Stap-voor-stap vervangingsgids en.',
    url: 'https://waterfilterplatform.nl/filterkan/filter-vervangen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe weet ik wanneer mijn filterkan filter vol is?',
    answer:
      'De meeste moderne filterkannen hebben een ingebouwde filter-indicator. Brita-modellen gebruiken een mechanische flipindicator of een elektronisch LCD-display dat groen (ok), geel (bijna vol) of rood (vervangen) toont. BWT Penguin heeft een LED-indicator. Ontbreekt een indicator op jouw kan? Houd dan bij wanneer je de patroon hebt geplaatst en vervang na 4 weken of 150 liter (Brita) respectievelijk 120 liter (BWT), afhankelijk van je verbruik.',
  },
  {
    question: 'Wat gebeurt er als ik het filter te lang gebruik?',
    answer:
      'Een te lang gebruikt filterpatroon verliest filtercapaciteit doordat de actieve kool verzadigd raakt en de ionenwisselhars uitgeput is. Erger: het natte filtermedium wordt een broedplaats voor bacteriën. Opgenomen stoffen zoals kalk, lood en mogelijk pesticiden kunnen teruggespoeld worden in het doorstromende water — het zogeheten terugwaseffect. Smaak verslechtert merkbaar en het water kan gezondheidsrisico\'s opleveren.',
  },
  {
    question: 'Hoe vervang ik een Brita Maxtra Pro filter? Stap voor stap.',
    answer:
      '1. Trek het oude filterpatroon recht omhoog uit de filterhouder. 2. Dompel het nieuwe Maxtra Pro-patroon 15 seconden in een bak koud water om het actief kool voor te weken. 3. Druk het nieuwe patroon stevig in de filterhouder tot het klikt. 4. Vul de kan twee keer volledig en gooi dit "inloopwater" weg — dit spoelt loszittend koolstof uit. 5. Reset de filterwisselindicator door de knop 5 seconden ingedrukt te houden (bij modellen met elektronische indicator).',
  },
  {
    question: 'Hoe vervang ik een BWT filter? Stap voor stap.',
    answer:
      '1. Open de filterkap aan de bovenzijde van de BWT-kan. 2. Verwijder de oude patroon door hem recht omhoog te trekken. 3. Klap het vergrendelingsorgaan open op het nieuwe BWT mg²⁺-patroon. 4. Druk de nieuwe patroon in de filterhouder en klik hem vast. 5. Vul de kan eenmaal volledig en gooi de eerste vulling weg. 6. Sluit de filterkap en stel de filterwisselindicator opnieuw in via de knop op het handvat.',
  },
  {
    question: 'Kan ik merkloze filterpatronen gebruiken?',
    answer:
      'Voor Brita-kannen: ja, maar controleer op NSF/ANSI-certificering voor hetzelfde gebruiksdoel (NSF 42 voor smaak/chloor, NSF 53 voor lood en gezondheidsrisico\'s). Merkloze Maxtra-compatibele patronen zijn breed beschikbaar en kunnen de kosten halveren. Voor BWT-kannen: niet aanbevolen. Het BWT mg²⁺-patroonformaat is uniek en merkloze alternatieven sluiten vaak niet correct aan, hebben geen certificering voor magnesiumtoevoeging en kunnen de kan beschadigen.',
  },
  {
    question: 'Hoe gooi ik een verbruikt filterpatroon weg?',
    answer:
      'Brita heeft een officieel recyclingprogramma: je kunt verbruikte Maxtra-patronen inleveren bij geselecteerde retailers (Albert Heijn, Etos, Blokker) of gratis opsturen naar Brita via een recyclingenvelop. Zonder dit programma gaat het als klein chemisch afval bij sommige gemeenten of als restafval. BWT heeft geen vergelijkbaar recyclingprogramma in Nederland — gooi BWT-patronen in de restafvalcontainer.',
  },
  {
    question: 'Wat kost het per jaar aan filterpatronen?',
    answer:
      'Brita Maxtra Pro (origineel): €45–75 per jaar bij 2 liter gefilterd water per dag (ca. 5 patronen per jaar à €4–5). Brita merkloze patronen: €15–30 per jaar. BWT mg²⁺ (origineel): €50–75 per jaar (ca. 6 patronen per jaar à €4–6, want 120L-capaciteit). BWT heeft geen merkloze alternatieven, dus dit tarief is niet te verlagen. Overweeg bij hogere verbruiken (gezinnen) of harder water hogere frequenties in te calculeren.',
  },
  {
    question: 'Kan ik een filterpatroon schoonmaken in plaats van vervangen?',
    answer:
      'Nee. De actieve kool in een filterpatroon raakt chemisch verzadigd: adsorptieplekken zijn bezet door gefilterde stoffen en kunnen niet worden vrijgemaakt door spoelen. De ionenwisselhars is na 120–150 liter uitgeput en kan thuis niet worden geregenereerd (in commerciële ontharders gebeurt regeneratie met zout, maar dit werkt niet voor filterpatronen). Spoelen verwijdert alleen oppervlaktevuil, niet de opgeslagen contaminanten.',
  },
];

const vervangingsIntervallen = [
  {
    merk: 'Brita Maxtra Pro',
    capaciteit: '150L',
    interval: '4 weken',
    kostenPatroon: '€4–5',
    kostenJaar: '€45–65',
    opmerking: 'NSF 42+53 gecertificeerd',
  },
  {
    merk: 'Brita Maxtra Pro Limescale',
    capaciteit: '150L',
    interval: '4 weken',
    kostenPatroon: '€4–5',
    kostenJaar: '€45–65',
    opmerking: 'Extra kalkvermindering',
  },
  {
    merk: 'BWT mg²⁺',
    capaciteit: '120L',
    interval: '4 weken',
    kostenPatroon: '€4–6',
    kostenJaar: '€50–75',
    opmerking: 'Magnesium-toevoeging',
  },
  {
    merk: 'Laica bi-flux',
    capaciteit: '150L',
    interval: '4 weken',
    kostenPatroon: '€3–4',
    kostenJaar: '€35–50',
    opmerking: 'Budget optie',
  },
  {
    merk: 'Merkloze Brita-compat.',
    capaciteit: '150L',
    interval: '4 weken',
    kostenPatroon: '€1–2',
    kostenJaar: '€15–25',
    opmerking: 'Controleer NSF-cert.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Filterkan', url: 'https://waterfilterplatform.nl/filterkan' },
  { name: 'Filter vervangen', url: 'https://waterfilterplatform.nl/filterkan/filter-vervangen' },
];

const britaStappen = [
  {
    stap: 1,
    titel: 'Oud filter verwijderen',
    uitleg:
      'Open de bovenkap van de kan en trek het oude filterpatroon recht omhoog uit de houder. Gooi het patroon weg (zie recyclingtips hieronder).',
  },
  {
    stap: 2,
    titel: 'Nieuw filter voorweken',
    uitleg:
      'Dompel het nieuwe Maxtra Pro-patroon 15 seconden in een bak koud kraanwater. Dit activeert het actief kool en voorkomt dat er later zwarte koolstofdeeltjes in je water komen.',
  },
  {
    stap: 3,
    titel: 'Filter in de houder plaatsen',
    uitleg:
      'Druk het voorgeweekte patroon stevig recht omlaag in de filterhouder totdat het voelbaar klikt. Zorg dat het patroon recht staat — scheef plaatsen zorgt voor lekken.',
  },
  {
    stap: 4,
    titel: 'Inloopwater weggooien (2x)',
    uitleg:
      'Vul de kan twee keer volledig met kraanwater en gooi dit water weg. Dit spoelt loszittende koolstofdeeltjes en productieresten uit het nieuwe filter. Gebruik dit water niet als drinkwater.',
  },
  {
    stap: 5,
    titel: 'Indicator resetten',
    uitleg:
      'Houd de filterindicatorknop 5 seconden ingedrukt totdat de indicator groen knippert (elektronische modellen) of de flipindicator terugspringt naar de beginpositie (mechanische modellen). De kan is gereed voor gebruik.',
  },
];

const bwtStappen = [
  {
    stap: 1,
    titel: 'Filterkap openen',
    uitleg:
      'Open de filterkap aan de bovenzijde van de BWT-kan door hem omhoog te klappen of te draaien (afhankelijk van het model: Penguin, Luna of Slim).',
  },
  {
    stap: 2,
    titel: 'Oud filter verwijderen',
    uitleg:
      'Trek de verbruikte BWT mg²⁺-patroon recht omhoog uit de filterhouder. Gooi het patroon weg als restafval (geen recyclingprogramma beschikbaar in Nederland).',
  },
  {
    stap: 3,
    titel: 'Nieuw filter klaarmaken',
    uitleg:
      'Klap het vergrendelingsorgaan op het nieuwe BWT-patroon open. Controleer of het afdichtingsrubber intact is aan de onderzijde van het patroon.',
  },
  {
    stap: 4,
    titel: 'Filter plaatsen en vergrendelen',
    uitleg:
      'Druk de patroon stevig in de filterhouder en klik het vergrendelingsorgaan vast. Sluit de filterkap van de kan.',
  },
  {
    stap: 5,
    titel: 'Eerste vulling weggooien en indicator resetten',
    uitleg:
      'Vul de kan eenmaal volledig en gooi dit water weg. Stel daarna de filterwisselindicator opnieuw in via de knop op het handvat of de kan (druk 3–5 seconden in, afhankelijk van het model). De LED-indicator toont groen bij een correcte reset.',
  },
];

export default function FilterVervangenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Filterkan filter vervangen: wanneer, hoe vaak en welke kosten 2026',
          description:
            'Hoe vaak moet je het filter van je filterkan vervangen? Brita Maxtra Pro elke 4 weken of 150L. BWT elke 120L. Stap-voor-stap vervangingsgids en.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/filterkan/filter-vervangen',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/filterkan" className="hover:text-[#005F8A]">Filterkan</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Filter vervangen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Filterkan filter vervangen: wanneer, hoe vaak en wat kost het?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            Het filterpatroon van je filterkan heeft een beperkte levensduur. Te lang wachten is
            niet alleen ineffectief — het kan ook bacteriegroei veroorzaken en gefilterde stoffen
            terugsturen naar je water. Deze gids legt uit wanneer je moet vervangen, hoe je het
            doet en wat het per jaar kost.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        {/* Quick Answer */}
        <QuickAnswer answer="Een filterkan filter vervang je elke 4 weken of na 150 liter (Brita Maxtra Pro) respectievelijk 120 liter (BWT). Bij een gezin van 2 personen dat 2 liter per dag filtert: circa 12 patronen per jaar. Te lang wachten? Dan groeit er bacteriën in het filter en worden al opgenomen stoffen terug uitgespoeld." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#intervallen', 'Vervangingsintervallen per merk'],
              ['#brita-gids', 'Brita filter vervangen: 5 stappen'],
              ['#bwt-gids', 'BWT filter vervangen: 5 stappen'],
              ['#indicator', 'Indicator kleuren uitleggen'],
              ['#risicos', "Filter te lang gebruikt? Dit zijn de risico's"],
              ['#merkloze', 'Besparingstip: merkloze filters'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe weet je wanneer je het filterpatroon moet vervangen?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Filterpatronen voor filterkannen werken op basis van actief kool en ionenwisselhars.
            Beide materialen hebben een beperkte capaciteit: actief kool heeft een eindige
            hoeveelheid adsorptieoppervlak en ionenwisselhars raakt uitgeput na contact met een
            bepaald volume water. Fabrikanten specificeren dit in liters (capaciteit) en in tijd
            (maximale gebruiksduur).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn twee manieren om bij te houden wanneer je moet vervangen: (1) via de
            filterwisselindicator op de kan, of (2) via handmatig bijhouden van het verbruik en
            de datum van plaatsing. De indicator is het meest betrouwbaar, zeker bij
            onregelmatig gebruik.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je meer weten over hoe een filterpatroon technisch werkt? Lees onze{' '}
            <Link href="/filterkan" className="text-[#005F8A] underline hover:no-underline">
              filterkan uitlegpagina
            </Link>{' '}
            voor de volledige werking van actief kool en ionenwisseling.
          </p>
        </section>

        {/* Vervangingsintervallen tabel */}
        <section id="intervallen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vervangingsintervallen per merk en model: overzichtstabel
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onderstaande tabel toont de aanbevolen vervangingsintervallen en de bijbehorende kosten
            per jaar. De kostenberekening gaat uit van 2 liter gefilterd water per dag (730 liter
            per jaar) voor een tweepersoons huishouden.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold border border-[#003F5C]/20">Merk/filter</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20">Capaciteit</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20">Aanbevolen interval</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20">Kosten/patroon</th>
                  <th className="text-center px-4 py-3 font-semibold border border-[#003F5C]/20 hidden sm:table-cell">Kosten/jaar (2L/dag)</th>
                </tr>
              </thead>
              <tbody>
                {vervangingsIntervallen.map((rij, i) => (
                  <tr
                    key={rij.merk}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 text-gray-900 font-medium border border-gray-100">
                      <span className="block">{rij.merk}</span>
                      <span className="text-xs text-gray-500 font-normal">{rij.opmerking}</span>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700 border border-gray-100">{rij.capaciteit}</td>
                    <td className="px-4 py-3 text-center text-gray-700 border border-gray-100">{rij.interval}</td>
                    <td className="px-4 py-3 text-center text-gray-700 border border-gray-100">{rij.kostenPatroon}</td>
                    <td className="px-4 py-3 text-center text-gray-700 border border-gray-100 hidden sm:table-cell">{rij.kostenJaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Berekening: 730L/jaar ÷ capaciteit per patroon = aantal patronen per jaar. Kosten
            op basis van retailprijzen bij Nederlandse webshops (2026). Bij harder water (&gt;10°dH)
            adviseren fabrikanten kortere intervallen.
          </p>
        </section>

        {/* Brita vervangen gids */}
        <section id="brita-gids">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe vervang je een Brita Maxtra Pro filter? Stap-voor-stap gids
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Het vervangen van een Brita-filterpatroon duurt minder dan 5 minuten en vereist geen
            gereedschap. Volg deze vijf stappen voor een correcte vervanging die bacteriegroei en
            koolstofdeeltjes in het water voorkomt.
          </p>
          <ol className="space-y-4">
            {britaStappen.map(stap => (
              <li key={stap.stap} className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#003F5C] text-white flex items-center justify-center font-bold text-sm">
                  {stap.stap}
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-gray-900 mb-1">{stap.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{stap.uitleg}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-5 bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 text-sm">
            <p className="font-semibold text-[#003F5C] mb-1">Let op: verschil per Brita-model</p>
            <p className="text-gray-700 leading-relaxed">
              Elektronische modellen (Brita Style, Brita Marella XL met SmartLight) resetten via
              een knop. Mechanische modellen (oudere Brita) hebben een draaiknop die je terugzet
              naar de beginpositie. Raadpleeg de handleiding van jouw specifieke model als de
              indicator niet correct reset.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/filterkan/brita"
              className="inline-block text-[#005F8A] font-semibold text-sm hover:underline"
            >
              Meer over Brita-modellen en patronen →
            </Link>
          </div>
        </section>

        {/* BWT vervangen gids */}
        <section id="bwt-gids">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe vervang je een BWT filter? Stap-voor-stap gids
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            BWT-filterpatronen werken iets anders dan Brita: het vergrendelingsorgaan op de
            patroon zorgt voor een waterdichte aansluiting. Zorg dat je dit correct vergrendelt,
            anders lekt water langs de patroon in plaats van doorheen.
          </p>
          <ol className="space-y-4">
            {bwtStappen.map(stap => (
              <li key={stap.stap} className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-sm">
                  {stap.stap}
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-gray-900 mb-1">{stap.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{stap.uitleg}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-5 bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 text-sm">
            <p className="font-semibold text-[#003F5C] mb-1">BWT Penguin vs Luna vs Slim</p>
            <p className="text-gray-700 leading-relaxed">
              Alle drie de BWT-kanmodellen gebruiken hetzelfde mg²⁺-patroon. Het vervangingsproces
              is identiek. Het verschil zit alleen in de manier van filterkap openen: de Penguin
              heeft een draaikap, de Luna een klipdeksel en de Slim een schuifbaar paneel.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/filterkan/bwt"
              className="inline-block text-[#005F8A] font-semibold text-sm hover:underline"
            >
              Meer over BWT-modellen en patronen →
            </Link>
          </div>
        </section>

        {/* Indicator kleuren */}
        <section id="indicator">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat betekenen de indicator-kleuren op jouw filterkan?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meeste moderne filterkannen van Brita en BWT hebben een kleurgebaseerde
            filterwisselindicator. De kleurbetekenis is vrijwel universeel, maar er zijn kleine
            verschillen tussen elektronische en mechanische systemen.
          </p>
          <div className="space-y-3">
            {[
              {
                kleur: 'Groen',
                brita: 'Filter is goed — meer dan 50% capaciteit over',
                bwt: 'Filter is goed — meer dan 50% capaciteit over',
                klasse: 'bg-green-50 border-green-200',
                dot: 'bg-green-500',
              },
              {
                kleur: 'Geel / Oranje',
                brita: 'Filter nadert het einde — vervang binnen 1–2 weken',
                bwt: 'Filter nadert het einde — vervang binnenkort',
                klasse: 'bg-amber-50 border-amber-200',
                dot: 'bg-amber-400',
              },
              {
                kleur: 'Rood',
                brita: 'Filter is verbruikt — vervang onmiddellijk',
                bwt: 'Filter is verbruikt — vervang onmiddellijk',
                klasse: 'bg-red-50 border-red-200',
                dot: 'bg-red-500',
              },
            ].map(indicator => (
              <div key={indicator.kleur} className={`border rounded-xl p-4 ${indicator.klasse}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-3 h-3 rounded-full shrink-0 ${indicator.dot}`} />
                  <p className="font-bold text-gray-900">{indicator.kleur}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>
                    <span className="font-medium">Brita: </span>{indicator.brita}
                  </div>
                  <div>
                    <span className="font-medium">BWT: </span>{indicator.bwt}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 border border-gray-100 rounded-xl text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-1">Indicator defect of ontbrekend?</p>
            <p>
              Gebruik de vuistregel: vervang na 4 weken of na het verstrijken van de
              capaciteitslimiet (150L of 120L). Houd hiervoor een simpele aantekening bij van de
              plaatsingsdatum op de patroon zelf of in een telefoonkalender.
            </p>
          </div>
        </section>

        {/* Risico's te lang gebruik */}
        <section id="risicos">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filter te lang gebruikt? Dit zijn de risico&apos;s
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een verbruikt filterpatroon is niet neutraal — het is actief schadelijk. Er zijn drie
            concrete risico&apos;s bij te lang gebruik:
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <h3 className="font-bold text-red-900 mb-2">Bacteriegroei in het filtermedium</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                De natte omgeving in een filterpatroon is ideaal voor bacteriegroei als het
                filtermedium zijn antimicrobiële capaciteit heeft verloren. Sommige actief-kool
                filterpatronen bevatten zilverbehandeling om bacteriegroei te remmen, maar dit
                werkt alleen tot de gespecificeerde capaciteit. Na die limiet is bacteriële
                kolonisatie een reëel risico, zeker bij warme zomers of als de kan lange tijd
                gevuld stilstaat.
              </p>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-5">
              <h3 className="font-bold text-amber-900 mb-2">Terugwas van opgeslagen contaminanten</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een verzadigd filterpatroon kan opgeslagen stoffen — kalk, lood, eventuele
                pesticiden — terugspoelen naar het doorstromende water. Dit fenomeen heet desorptie
                of terugwas. Het water dat uit een overgebruikte filterkan komt kan daardoor meer
                verontreinigingen bevatten dan ongefilterd leidingwater. Dit is de belangrijkste
                reden om het vervangingsinterval strikt aan te houden.
              </p>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Verminderde smaak en filterprestaties</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Minder ingrijpend maar zichtbaar: chloor wordt niet langer effectief gefilterd,
                waardoor water weer naar zwembad gaat ruiken. Kalkaanslag in de kan neemt toe.
                Koffie- en theesmaak verslechtert merkbaar. Dit zijn de eerste tekenen dat het
                filter zijn capaciteit heeft bereikt.
              </p>
            </div>
          </div>
        </section>

        {/* Besparingstip merkloze filters */}
        <section id="merkloze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Besparingstip: wanneer zijn merkloze filterpatronen een goede keuze?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Merkloze filterpatronen voor het Brita Maxtra-formaat zijn beschikbaar voor €1–2 per
            stuk — een besparing van 60–80% ten opzichte van originele Brita-patronen. Maar niet
            alle merkloze patronen zijn gelijkwaardig. Dit zijn de criteria voor een veilige keuze:
          </p>
          <div className="space-y-3">
            {[
              {
                criterium: 'NSF/ANSI-certificering aanwezig',
                uitleg:
                  'Controleer of de merkloze patroon NSF/ANSI 42 gecertificeerd is voor chloor- en smaakverwijdering. Fabrikanten zijn verplicht dit te vermelden. Zonder certificering zijn de filterprestaties niet onafhankelijk geverifieerd.',
                ok: true,
              },
              {
                criterium: 'Zelfde capaciteit als origineel (150L)',
                uitleg:
                  'Sommige goedkope patronen hebben een lagere capaciteit (80–100L) maar worden verkocht als 150L-equivalent. Check de productomschrijving nauwkeurig.',
                ok: true,
              },
              {
                criterium: 'Fysiek patroon past in Brita Maxtra-formaat',
                uitleg:
                  'Maxtra-compatibele patronen van betrouwbare fabrikanten passen perfect. Test de eerste patroon door te controleren of hij goed klikt en geen water lekt langs de zijkanten.',
                ok: true,
              },
              {
                criterium: 'Gebruik voor BWT: niet aanbevolen',
                uitleg:
                  'BWT mg²⁺-patronen hebben een uniek formaat en een speciaal ionenwisselproces voor magnesiumtoevoeging. Merkloze alternatieven zijn niet beschikbaar die dit repliceren. Bij gebruik van merkloze patronen in BWT-kannen vervalt ook de garantie.',
                ok: false,
              },
            ].map(item => (
              <div
                key={item.criterium}
                className={`border rounded-xl p-4 flex gap-3 ${
                  item.ok
                    ? 'border-green-200 bg-green-50'
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <span className="text-lg shrink-0 mt-0.5">{item.ok ? '✓' : '✗'}</span>
                <div>
                  <p className={`font-semibold mb-1 ${item.ok ? 'text-green-900' : 'text-red-900'}`}>
                    {item.criterium}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/filterkan',
                title: 'Waterfilterkan uitleg',
                desc: 'Hoe een filterkan werkt, wat hij filtert en wanneer hij tekortschiet.',
              },
              {
                href: '/filterkan/brita',
                title: 'Brita filterkannen',
                desc: 'Alle Brita-modellen, patronen en prijzen op een rij.',
              },
              {
                href: '/filterkan/bwt',
                title: 'BWT filterkannen',
                desc: 'BWT Penguin, Luna en Slim: modellen, mg²⁺-technologie en kosten.',
              },
              {
                href: '/filterkan/kopen',
                title: 'Filterkan kopen — koopgids',
                desc: 'Vergelijk alle merken op prijs, certificering en modellen.',
              },
              {
                href: '/filterkan/onderhoud',
                title: 'Filterkan onderhoud',
                desc: 'Reiniging, opbergen en levensduur verlengen van je filterkan.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">
                  {l.title}
                </p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over filterpatronen vervangen
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
