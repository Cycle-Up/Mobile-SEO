import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Wat is een sedimentfilter? Werking, micrometraties en toepassing 2026',
  description:
    'Alles over sedimentfilters: wat ze verwijderen, welke micronwaarde je nodig hebt, wanneer vervangen en hoe ze als voorfilter in osmose- en UV-systemen werken.',
  alternates: { canonical: 'https://waterfilterplatform.nl/sedimentfilter' },
  openGraph: {
    title: 'Wat is een sedimentfilter? Werking, micrometraties en toepassing 2026',
    description:
      'Sedimentfilters verwijderen zand, roest, slib en zwevende deeltjes uit water. Leer welke micronwaarde je nodig hebt, wanneer je vervangt en waarom een.',
    url: 'https://waterfilterplatform.nl/sedimentfilter',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Wat verwijdert een sedimentfilter precies uit water?',
    answer:
      'Een sedimentfilter verwijdert fysieke deeltjes uit water: zand, roest, slib, klei en andere zwevende vaste stoffen. Het filtert uitsluitend op deeltjesgrootte — hoe fijner de micronwaarde, hoe kleinere deeltjes worden tegengehouden. Chemische stoffen zoals chloor, nitraat of kalk (opgelost) worden niet verwijderd. Ook bacteriën passeren een standaard sedimentfilter, tenzij je een keramisch element van 0,1–0,2 micron gebruikt.',
  },
  {
    question: 'Wat betekent de micronwaarde van een sedimentfilter?',
    answer:
      'De micronwaarde (µm) geeft aan welke deeltjesgrootte het filter tegenhoudt. Een 100 µm filter houdt alleen grote deeltjes zoals zand en wormen tegen. Een 5 µm filter houdt fijn slib en roestdeeltjes tegen. Een 1 µm filter houdt zelfs fijn klei en gedeeltelijk bacteriën tegen. Hoe lager de micronwaarde, hoe fijner de filtratie — maar ook hoe sneller het filter verstopt raakt. In de meeste thuissystemen wordt een 5 of 10 µm filter als voorfilter gebruikt.',
  },
  {
    question: 'Wanneer moet je een sedimentfilterpatroon vervangen?',
    answer:
      'Vervang een sedimentfilterpatroon elke 3 tot 6 maanden, afhankelijk van de waterkwaliteit en het gebruik. Twee signalen dat vervanging nodig is: (1) merkbare drukdaling in het watersysteem — het filter raakt verstopt waardoor de doorstroomsnelheid afneemt; (2) zichtbare verkleuring van het patroon van wit naar bruin of oranje, wat wijst op roest- of slibbopbouw. Bij privéwaterbronnen of zwaar verontreinigd water kan vervanging al na 4–8 weken nodig zijn.',
  },
  {
    question: 'Wat is het verschil tussen een sedimentfilter en een koolstoffilter?',
    answer:
      'Een sedimentfilter verwijdert uitsluitend fysieke deeltjes op basis van grootte: zand, roest en slib. Het verandert niet de smaak, geur of chemische samenstelling van water. Een koolstoffilter (actief kool) absorbeert chemische stoffen: chloor, chloorbijproducten, pesticiden en organische verbindingen — dit verbetert de smaak en geur. In een goed ontworpen systeem komen beide voor: eerst het sedimentfilter als bescherming, daarna het koolstoffilter voor smaakverbetering.',
  },
  {
    question: 'Waarom moet een sedimentfilter altijd als eerste worden geplaatst?',
    answer:
      'Een sedimentfilter beschermt de filterstadia die erachter komen. Koolstoffilters, UV-lampen en omgekeerde osmose membranen zijn gevoelig voor grote deeltjes en roest. Als die er doorheen komen, verstoppen ze de poriën van dure membranen of verminderen ze de UV-effectiviteit. Door het sedimentfilter als eerste voorfilter te plaatsen verleng je de levensduur van alle volgende filterstadia aanzienlijk — en verlaag je daarmee de jaarlijkse onderhoudskosten.',
  },
  {
    question: 'Welke micronwaarde heb ik nodig voor mijn situatie?',
    answer:
      'Dat hangt af van uw waterkwaliteit. Bij normaal leidingwater met incidentele roest: kies een 5 of 10 µm filter. Bij een privéwel of bronwater met veel slib en aarddeeltjes: begin met een 50–100 µm filter als groffilter en voeg een 5 µm fijnfilter toe. In een omgekeerde osmose systeem is een 5 µm sedimentfilter standaard als eerste stap vóór het membraan. Bij sterk troebel water kan een getrapte aanpak (25 µm → 5 µm → 1 µm) de levensduur van alle patronen maximaliseren.',
  },
  {
    question: 'Hoeveel kost een sedimentfilter per jaar?',
    answer:
      'Een sedimentfilterpatroon (standaard 10 inch, 5 of 10 µm) kost tussen de €5 en €15. Bij vervanging elke 3 tot 6 maanden bedragen de jaarlijkse kosten €10 tot €30. De filterbehuizing zelf is een eenmalige aanschaf van €15 tot €40. Sedimentfilters zijn daarmee het goedkoopste onderdeel van een waterfiltersysteem. Ze beschermen veel duurdere onderdelen zoals het RO-membraan (€30–80) en verlengen zo de totale levensduur van het systeem.',
  },
  {
    question: 'Wat is het verschil tussen gesponnen en opgerold sedimentfilter?',
    answer:
      'Gesponnen polypropyleenfilters (spun PP) zijn de meest gangbare patronen: goedkoop, wegwerpbaar, effectief voor standaard sedimentfiltratie van 1–100 µm. Ze hebben een gradiëntstructuur waarbij de buitenkant groffilters en de binnenkant fijnfiltert. Opgerolde (gewikkelde) patronen van katoen of polypropyleen worden gebruikt in industriële toepassingen met hogere druk. String wound filters (draadgewonden) zijn vergelijkbaar maar bieden soms een betere filterdepth voor grovere toepassingen. Voor thuisgebruik is gesponnen polypropyleen de standaardkeuze.',
  },
];

export default function SedimentfilterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Sedimentfilter', url: 'https://waterfilterplatform.nl/sedimentfilter' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Sedimentfilter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Wat is een sedimentfilter? Werking, micrometraties en toepassing 2026
          </h1>
          <QuickAnswer answer="Een sedimentfilter verwijdert fysieke deeltjes uit water: zand, roest, slib en zwevende vaste stoffen. De micronwaarde bepaalt wat het tegenhoudt: 100 µm = grote deeltjes, 5 µm = slib en roest, 1 µm = fijn klei. Altijd als eerste voorfilter in meertraps systemen (osmose, UV) ingezet. Kosten: €10–25 per jaar per filterpatroon." />
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            Een sedimentfilter is het eenvoudigste waterfiltertype, maar ook een van de belangrijkste: het beschermt alle andere filterstadia in uw systeem. Op deze pagina leggen we uit hoe sedimentfilters werken, welke micronwaarde u nodig heeft, wanneer u het patroon vervangt en wat de rol als voorfilter is in osmose- en UV-systemen.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Wat is een sedimentfilter */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een sedimentfilter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een sedimentfilter werkt via mechanische filtratie: water stroomt door een poreus filtermedium (meestal gesponnen polypropyleen) dat deeltjes groter dan de opgegeven micronwaarde fysiek tegenhoudt. Er vindt geen chemische reactie plaats — het filter zeeft simpelweg op grootte.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meeste sedimentfilters hebben een <strong>gradiëntstructuur</strong>: de buitenste lagen zijn grover (houden grote deeltjes tegen) en de binnenste lagen zijn fijner (houden kleinere deeltjes tegen). Dit voorkomt dat het filter te snel verstopt raakt aan de buitenkant.
          </p>
          <div className="bg-[#E0F2FE]/50 border-l-4 border-[#005F8A] rounded-r-xl p-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#003F5C]">Belangrijk:</strong> Een sedimentfilter verwijdert geen opgeloste stoffen. Kalk, nitraat, chloor en zware metalen zijn opgelost in water en passeren het filter ongehinderd. Hiervoor heeft u een{' '}
              <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">koolstoffilter</Link>{' '}
              of{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">omgekeerde osmose</Link>{' '}
              nodig.
            </p>
          </div>
        </section>

        {/* Micron tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Micronwaarden uitgelegd: welke µm heeft u nodig?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De micronwaarde (µm) bepaalt welke deeltjes worden tegengehouden. Hoe lager het getal, hoe fijner de filtratie — maar ook hoe sneller het filter verzadigt. Kies de micronwaarde op basis van uw waterkwaliteit en toepassing.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Micronwaarde</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Wat wordt tegengehouden</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Typische toepassing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { micron: '100 µm', deeltjes: 'Zand, wormen, grote organische resten', toepassing: 'Groffilter bij privéwel of regenwater' },
                  { micron: '50 µm', deeltjes: 'Fijn zand, schors, grote slibresten', toepassing: 'Voorfilter bij bronwater of oppervlaktewater' },
                  { micron: '20 µm', deeltjes: 'Slib, roest, aarddeeltjes', toepassing: 'Eerste stap in meerstapssysteem' },
                  { micron: '5 µm', deeltjes: 'Fijn slib, klei, roestdeeltjes', toepassing: 'Standaard voorfilter vóór koolstof of RO-membraan' },
                  { micron: '1 µm', deeltjes: 'Bacteriën gedeeltelijk, fijn klei, colloïden', toepassing: 'Fijnste sedimentfiltratie, vlak voor UV of membraan' },
                ].map((row, i) => (
                  <tr key={row.micron} className={`border-b border-gray-100 ${i === 3 ? 'bg-[#E0F2FE]/20' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">
                      {row.micron}
                      {i === 3 && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">
                          Meest gebruikt
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{row.deeltjes}</td>
                    <td className="py-2.5 px-3 text-gray-600">{row.toepassing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve waarden. De exacte filtratieprestatie hangt af van het filtermedium en de waterstroom.
          </p>
        </section>

        {/* Typen sedimentfilters */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Typen sedimentfilters voor thuisgebruik</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Er zijn verschillende uitvoeringen van sedimentfilterpatronen, elk met eigen voor- en nadelen. Voor thuisgebruik zijn er vier gangbare types:
          </p>
          <div className="space-y-4">
            {[
              {
                naam: 'Gesponnen polypropyleen (Spun PP)',
                beste: 'Standaard thuisgebruik en als voorfilter in RO',
                beschrijving:
                  'Het meest gebruikte sedimentfiltertype. Gemaakt van gesponnen polypropyleenvezels die een gradiëntstructuur vormen: grof aan de buitenkant, fijn van binnen. Beschikbaar van 1 tot 100 µm. Wegwerpbaar, goedkoop (€5–10 per patroon) en effectief voor de meeste toepassingen. Standaard eerste stap in elk omgekeerde osmose systeem.',
              },
              {
                naam: 'Opgerold (gewikkeld) filter',
                beste: 'Hogere drukken en industriële toepassingen',
                beschrijving:
                  'Filterpatronen waarbij filterdoek of glasvezel strak om een kern is gewikkeld. Geschikt voor hogere werkdrukken dan gesponnen filters. Minder gangbaar in thuissystemen, maar gebruikt in professionele watersystemen en commerciële toepassingen.',
              },
              {
                naam: 'Koolstof-blok sedimentfilter (dual function)',
                beste: 'Ruimtebesparing in compacte systemen',
                beschrijving:
                  'Een gecombineerd filterpatroon dat sedimentfiltratie en koolstofabsorptie in één behuizing combineert. Praktisch voor kleine installaties, maar minder effectief dan twee afzonderlijke filterstadia — het koolstofgedeelte slijt sneller door sedimentbelasting.',
              },
              {
                naam: 'String wound (draadgewonden)',
                beste: 'Grovere filtratie bij hoge debieten',
                beschrijving:
                  'Polypropyleen of katoen draad gewonden om een kern. Vergelijkbaar met gesponnen filters maar met een langere filterdepth — geschikt voor water met veel grove deeltjes zoals zand en grind. Minder populair voor fijnfiltratie door ongelijkmatige poriëndistributie.',
              },
            ].map(t => (
              <div key={t.naam} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-[#005F8A] font-bold mt-0.5">→</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t.naam}</h3>
                    <p className="text-xs text-[#005F8A] mt-0.5">Beste voor: {t.beste}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-5">{t.beschrijving}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rol als voorfilter */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom komt het sedimentfilter altijd als eerste?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In elk meertraps waterfiltersysteem staat het sedimentfilter als eerste, vóór alle andere filterstadia. Dit is geen toeval — het is essentieel voor de levensduur van het totale systeem.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-5">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center text-sm">
              {[
                { nr: '1', stap: 'Sedimentfilter', sub: '5–25 µm\nZand, roest, slib', highlight: true },
                { nr: '2', stap: 'Koolstoffilter', sub: 'Chloor\nOrganica, geur', highlight: false },
                { nr: '3', stap: 'RO-membraan of UV', sub: '0,0001 µm of UV-C\nKalk, nitraat, bacteriën', highlight: false },
                { nr: '4', stap: 'Nafilter', sub: 'Smaakpolishing\nResidu', highlight: false },
              ].map((s, i) => (
                <div key={s.nr} className="flex sm:flex-col items-center gap-2">
                  <div className="flex items-center gap-2 sm:flex-col">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${s.highlight ? 'bg-[#003F5C] text-white ring-2 ring-[#005F8A] ring-offset-1' : 'bg-[#005F8A] text-white'}`}>
                      {s.nr}
                    </div>
                    <div>
                      <p className={`font-semibold ${s.highlight ? 'text-[#003F5C]' : 'text-gray-800'}`}>{s.stap}</p>
                      <p className="text-xs text-gray-500 whitespace-pre-line">{s.sub}</p>
                    </div>
                  </div>
                  {i < 3 && <span className="text-[#005F8A] font-bold text-lg">→</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="text-green-600 font-bold shrink-0">✓</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Beschermt het koolstoffilter</p>
                <p className="text-sm text-gray-600 leading-relaxed">Zanddeeltjes en roest kunnen de poriën van een koolstofblokfilter verstoppen. Door eerst het sediment te verwijderen gaat het koolstoffilter langer mee.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="text-green-600 font-bold shrink-0">✓</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Beschermt het RO-membraan</p>
                <p className="text-sm text-gray-600 leading-relaxed">Een omgekeerde osmose membraan heeft extreem kleine poriën (0,0001 µm) en is gevoelig voor roest en grote deeltjes. Zonder sedimentfilter wordt het membraan versneld beschadigd — vervanging kost €30–80.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="text-green-600 font-bold shrink-0">✓</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Beschermt de UV-lamp</p>
                <p className="text-sm text-gray-600 leading-relaxed">Troebel water met sediment verspreidt UV-licht en vermindert de effectiviteit van een UV-filter drastisch. Een sedimentfilter vóór de UV-unit zorgt voor helder water en maximale UV-doordringing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wanneer vervangen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer vervangt u het sedimentfilterpatroon?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een sedimentfilterpatroon is niet herbruikbaar — eenmaal verzadigd met sediment moet het worden vervangen. Twee betrouwbare signalen dat het tijd is voor vervanging:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <h3 className="font-semibold text-amber-800 mb-2 text-sm flex items-center gap-2">
                <span>⚠</span> Drukdaling in het systeem
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Als de waterdruk uit de kraan merkbaar lager is dan normaal, of als een osmosesysteem trager filtert, is het sedimentfilter waarschijnlijk verstopt. Een verstopt filter blokkeert de doorstroomsnelheid.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <h3 className="font-semibold text-amber-800 mb-2 text-sm flex items-center gap-2">
                <span>⚠</span> Zichtbare verkleuring
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Een nieuw sedimentfilterpatroon is wit. Na gebruik verkleurt het naar bruin (roest), oranje (ijzer), grijs (slib) of groen (algen). Inspecteer het patroon bij vervanging — de kleur vertelt u welk type sediment dominant is.
              </p>
            </div>
          </div>
          <div className="bg-[#E0F2FE]/50 border border-[#005F8A]/20 rounded-xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#003F5C]">Vuistregel vervangingsinterval:</strong> bij normaal leidingwater elke <strong>3–6 maanden</strong>. Bij privéwel, bronwater of water met hoge roest- of ijzerconcentraties kan dit teruggebracht worden naar 4–8 weken. Noteer de installatiedatum op het filter voor eenvoudige opvolging.
            </p>
          </div>
        </section>

        {/* Kosten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat kost een sedimentfilter per jaar?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Sedimentfilters zijn de goedkoopste filterstap in elk watersysteem. Jaarlijkse kosten zijn minimaal, waardoor het rendement (bescherming van duurdere filterstadia) uitstekend is.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-3 px-3 text-right font-semibold text-[#003F5C]">Bedrag</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { post: 'Filterbehuizing (eenmalig)', bedrag: '€ 15 – 40' },
                  { post: 'Filterpatroon (standaard 10 inch, 5–10 µm)', bedrag: '€ 5 – 15 per stuk' },
                  { post: 'Vervanging bij normaal leidingwater (2× per jaar)', bedrag: '€ 10 – 30 per jaar' },
                  { post: 'Vervanging bij zwaar vervuild water (4× per jaar)', bedrag: '€ 20 – 60 per jaar' },
                ].map((r, i) => (
                  <tr key={r.post} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 text-gray-700">{r.post}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.bedrag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve prijzen mei 2026. Merkpatronen zijn duurder; huismerken bieden vergelijkbare prestaties.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-4">
            Ter vergelijking: een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">RO-membraan</Link>{' '}
            kost €30–80 per vervanging (elke 1–3 jaar). Een goed onderhouden sedimentfilter kan de levensduur van het membraan verdubbelen — waardoor de kostenbesparing van het sedimentfilter veel hoger is dan de eigen prijs.
          </p>
        </section>

        {/* Gerelateerde filtertypen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verwante waterfilters en vervolgstappen</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Een sedimentfilter is zelden de enige filterstap. Combineer het met andere filtertypen voor een complete waterzuivering:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter/soorten', label: 'Alle waterfilter soorten vergelijken', sub: 'Compleet overzicht van alle filtertypen' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose systemen', sub: 'Sedimentfilter is altijd eerste stap in RO' },
              { href: '/uv-filter', label: 'UV-filter: bacteriën en virussen', sub: 'Sedimentfilter nodig als voorfilter voor UV' },
              { href: '/koolstoffilter', label: 'Koolstoffilter: smaak en chloor', sub: 'Tweede stap na sedimentfilter in meertraps systeem' },
              { href: '/keramisch-filter', label: 'Keramisch filter', sub: 'Alternatief voor biologische filtratie' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-start gap-3 bg-[#E0F2FE]/40 hover:bg-[#E0F2FE]/70 rounded-xl p-3 transition-colors"
              >
                <span className="text-[#005F8A] font-bold mt-0.5 shrink-0">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{l.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{l.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over sedimentfilters</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
