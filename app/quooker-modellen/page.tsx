import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Quooker modellen vergelijken: PRO3, PRO7, Fusion en CUBE — welke past bij jou?',
    description:
      'Vergelijking van alle Quooker modellen 2026: PRO3 vs PRO7, FILTER vs standaard, CUBE vs CHILLED. Welk model heb jij nodig voor jouw waterdruk en gebruik?',
    alternates: { canonical: 'https://waterfilterplatform.nl/quooker-modellen' },
    openGraph: {
      title: 'Quooker modellen vergelijken: PRO3, PRO7, Fusion en CUBE — welke past bij jou?',
      description:
        'Vergelijking van alle Quooker modellen 2026: PRO3 vs PRO7, FILTER vs standaard, CUBE vs CHILLED. Welk model heb jij nodig voor jouw waterdruk en gebruik?',
      url: 'https://waterfilterplatform.nl/quooker-modellen',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is het verschil tussen PRO3 en PRO7?',
    answer:
      'Het belangrijkste verschil is de boilerinhoud: PRO3 heeft een reservoir van 3 liter, PRO7 van 7 liter. De PRO7 is geschikt voor gezinnen met een hoog gebruik van kokend water of voor kantooromgevingen. Technisch werken beide boilers op dezelfde manier — het water wordt constant op bijna 100°C gehouden. De PRO7 is ook beschikbaar in een VAQ-versie voor afwijkende waterdruk.',
  },
  {
    question: 'Wanneer heb ik een VAQ-model nodig?',
    answer:
      'De VAQ-versie is nodig als de waterdruk in jouw woning lager is dan 1,5 bar of hoger dan 4 bar. De standaard PRO3 en PRO7 werken optimaal bij een druk van 1,5 tot 4 bar. Weet je niet zeker welke druk jij hebt? Vraag dit na bij je installateur of loodgieter, of meet het zelf met een manometer op een buitenkraan.',
  },
  {
    question: 'Wat doet de FILTER-versie extra?',
    answer:
      'Bij een Quooker FILTER-model is er een actief koolstoffilter ingebouwd die koud gefilterd water levert via dezelfde kraan. Het filter verwijdert chloor en verbetert de smaak van het kraanwater. Let op: dit is geen omgekeerde osmose filter. Nitraat, PFAS, zware metalen en kalk worden door dit filter niet of nauwelijks verwijderd. Voor volledige filtratie heb je aanvullend een osmosesysteem nodig.',
  },
  {
    question: 'Wat is de FUSION-serie?',
    answer:
      'De Quooker FUSION is een geïntegreerde kraan die zowel de gewone mengkraan (koud/warm water) als de kokendwaterfunctie combineert in één kraangat. Je hoeft dus geen aparte extra kraan te plaatsen naast je bestaande mengkraan. De FUSION is strakker in design maar ook duurder dan een losse PRO3 gecombineerd met je bestaande mengkraan.',
  },
  {
    question: 'Wat is het verschil tussen CUBE en CHILLED?',
    answer:
      'De CUBE levert zowel gekoeld water (8–10°C) als bruisend water uit dezelfde kraan. De CHILLED levert alleen gekoeld water, zonder koolzuurgas. Beide zijn add-on modules die onder het aanrecht worden geplaatst en uitsluitend compatibel zijn met Quooker FILTER-modellen — niet met standaard PRO3 of PRO7 zonder filterfunctie.',
  },
  {
    question: 'Welk model is geschikt voor een klein aanrecht?',
    answer:
      'Voor een klein aanrecht is de Quooker FUSION de handigste keuze, omdat deze slechts één kraangat nodig heeft voor zowel kokend als koud/warm water. Wil je toch een losse boiler, dan is de PRO3 de compacte optie: het reservoir is kleiner dan de PRO7. Bij twijfel: meet de ruimte onder het aanrecht — een PRO3 heeft minder diepte nodig dan een PRO7.',
  },
  {
    question: 'Kan ik mijn bestaande Quooker upgraden met CUBE?',
    answer:
      'De CUBE is alleen compatibel met Quooker FILTER-modellen. Heb je een standaard PRO3 of PRO7 zonder FILTER-versie, dan kun je de CUBE niet toevoegen zonder ook het boilersysteem te vervangen of bij te werken. Controleer altijd het modelnummer op je boiler of vraag het na bij je dealer voordat je een CUBE aanschaft.',
  },
  {
    question: 'Welk Quooker model heeft de beste waterfiltratie?',
    answer:
      'Alle FILTER-modellen van Quooker gebruiken hetzelfde actief koolstoffilter, dat chloor en reukstoffen vermindert. Er is geen functioneel verschil in filterkwaliteit tussen de PRO3 FILTER, PRO7 FILTER en FUSION FILTER. Wil je echte dieptefiltratie — kalk, nitraat, PFAS of microplastics verwijderen — dan heb je aanvullend een omgekeerde osmose systeem nodig. Lees meer op de pagina over het Quooker-filter.',
  },
];

const modellenTabel = [
  {
    model: 'PRO3',
    boiler: '3L',
    druk: '1,5–4 bar',
    functies: 'Kokend + koud + warm (aparte kraan)',
    filter: 'Nee',
    cube: 'Nee',
    prijs: '€849–1.099',
  },
  {
    model: 'PRO3 FILTER',
    boiler: '3L',
    druk: '1,5–4 bar',
    functies: 'Kokend + koud gefilterd + warm (aparte kraan)',
    filter: 'Actief kool',
    cube: 'Ja',
    prijs: '€1.049–1.299',
  },
  {
    model: 'PRO3 VAQ',
    boiler: '3L',
    druk: '<1,5 of >4 bar',
    functies: 'Kokend + koud + warm (aparte kraan)',
    filter: 'Nee',
    cube: 'Nee',
    prijs: '€949–1.199',
  },
  {
    model: 'PRO3 VAQ FILTER',
    boiler: '3L',
    druk: '<1,5 of >4 bar',
    functies: 'Kokend + koud gefilterd + warm (aparte kraan)',
    filter: 'Actief kool',
    cube: 'Ja',
    prijs: '€1.149–1.399',
  },
  {
    model: 'PRO7',
    boiler: '7L',
    druk: '1,5–4 bar',
    functies: 'Kokend + koud + warm (aparte kraan)',
    filter: 'Nee',
    cube: 'Nee',
    prijs: '€1.099–1.299',
  },
  {
    model: 'PRO7 FILTER',
    boiler: '7L',
    druk: '1,5–4 bar',
    functies: 'Kokend + koud gefilterd + warm (aparte kraan)',
    filter: 'Actief kool',
    cube: 'Ja',
    prijs: '€1.299–1.499',
  },
  {
    model: 'PRO7 VAQ',
    boiler: '7L',
    druk: 'Alle drukken',
    functies: 'Kokend + koud + warm (aparte kraan)',
    filter: 'Nee',
    cube: 'Nee',
    prijs: '€1.199–1.399',
  },
  {
    model: 'FUSION',
    boiler: '3L',
    druk: 'Ingebouwd',
    functies: 'Kokend + koud + warm in één kraan',
    filter: 'Altijd met FILTER',
    cube: 'Ja',
    prijs: '€1.499–1.899',
  },
  {
    model: 'FUSION FILTER',
    boiler: '3L',
    druk: 'Ingebouwd',
    functies: 'Kokend + koud gefilterd + warm in één kraan',
    filter: 'Actief kool',
    cube: 'Ja',
    prijs: '€1.499–1.899',
  },
  {
    model: 'FUSION SQUARE',
    boiler: '3L',
    druk: 'Ingebouwd',
    functies: 'Kokend + koud + warm, hoekig design',
    filter: 'Altijd met FILTER',
    cube: 'Ja',
    prijs: '€1.599–1.999',
  },
  {
    model: 'FUSION SQUARE FILTER',
    boiler: '3L',
    druk: 'Ingebouwd',
    functies: 'Kokend + koud gefilterd + warm, hoekig design',
    filter: 'Actief kool',
    cube: 'Ja',
    prijs: '€1.599–1.999',
  },
];

const cubeVsChilledData = [
  {
    eigenschap: 'Gekoeld water',
    cube: 'Ja (8–10°C)',
    chilled: 'Ja (8–10°C)',
  },
  {
    eigenschap: 'Bruisend water',
    cube: 'Ja',
    chilled: 'Nee',
  },
  {
    eigenschap: 'CO₂-patroon nodig',
    cube: 'Ja, jaarlijks vervangen',
    chilled: 'Nee',
  },
  {
    eigenschap: 'Prijs add-on',
    cube: '€249–299',
    chilled: '€199–249',
  },
  {
    eigenschap: 'Compatibel met',
    cube: 'Alleen FILTER-modellen',
    chilled: 'Alleen FILTER-modellen',
  },
  {
    eigenschap: 'Ruimte onder aanrecht',
    cube: 'Extra kast nodig',
    chilled: 'Extra kast nodig',
  },
];

export default function QuookerModellenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker modellen', url: 'https://waterfilterplatform.nl/quooker-modellen' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Quooker modellen vergelijken: PRO3, PRO7, Fusion en CUBE — welke past bij jou?',
          description:
            'Vergelijking van alle Quooker modellen 2026: PRO3 vs PRO7, FILTER vs standaard, CUBE vs CHILLED. Welk model heb jij nodig voor jouw waterdruk en gebruik?',
          datePublished: '2026-03-15',
          url: 'https://waterfilterplatform.nl/quooker-modellen',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker modellen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker modellen vergelijken: PRO3, PRO7, Fusion en CUBE — welke past bij jou?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Quooker heeft een uitgebreid modelaanbod dat in eerste instantie verwarrend kan zijn.
            PRO3 of PRO7? Standaard of VAQ? Met of zonder FILTER? En wat doet de CUBE eigenlijk?
            Op deze pagina zetten we alle modellen naast elkaar zodat je weet welk systeem past bij jouw
            waterdruk, gebruik en keuken.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quooker-prijs"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Prijzen bekijken →
            </Link>
            <Link
              href="/quooker-versus-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Quooker vs osmose
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Quooker heeft twee boilerseries (PRO3 en PRO7) in twee drukversies (standaard 1,5–4 bar en VAQ voor afwijkende druk). FILTER-modellen voegen koud gefilterd water toe via actief kool. FUSION integreert mixer- en kokendwaterkraan in één. CUBE en CHILLED zijn add-ons voor bruisend en gekoeld water." />

        {/* Hoe is het Quooker-assortiment opgebouwd? */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe is het Quooker-assortiment opgebouwd?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het Quooker-assortiment bestaat uit drie lagen die je los van elkaar kunt kiezen:
            de <strong>boilerserie</strong> (PRO3 of PRO7), de <strong>drukversie</strong> (standaard of VAQ) en
            optioneel de <strong>FILTER-uitbreiding</strong>. Bovenop dat systeem kun je als add-on de
            <strong> CUBE</strong> (bruisend + gekoeld) of de <strong>CHILLED</strong> (alleen gekoeld) plaatsen.
            Dat levert in theorie meer dan tien verschillende configuraties op.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">1.</span>
              <p className="text-gray-700">
                <strong>Kies je boiler:</strong> PRO3 (3 liter, compact) of PRO7 (7 liter, voor hoog gebruik)
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">2.</span>
              <p className="text-gray-700">
                <strong>Kies je drukversie:</strong> Standaard (1,5–4 bar) of VAQ (voor afwijkende druk)
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">3.</span>
              <p className="text-gray-700">
                <strong>Kies FILTER (optioneel):</strong> Voegt koud gefilterd water toe via actief koolstoffilter;
                vereist voor CUBE-compatibiliteit
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">4.</span>
              <p className="text-gray-700">
                <strong>Kies FUSION (alternatief):</strong> Vervangt ook je gewone mengkraan; altijd met FILTER,
                slechts één kraangat nodig
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">5.</span>
              <p className="text-gray-700">
                <strong>Kies add-on (optioneel):</strong> CUBE (bruisend + gekoeld) of CHILLED (alleen gekoeld);
                vereist altijd een FILTER-model
              </p>
            </div>
          </div>
        </section>

        {/* Grote modellenVergelijking tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welk Quooker model past bij mijn situatie? Vergelijkingstabel
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vind je alle Quooker-modellen op een rij, inclusief boilerinhoud, geschikte waterdruk,
            functies, filter, CUBE-compatibiliteit en adviesprijs. Gebruik de tabel om snel te zien welk model
            aansluit bij jouw woning en gebruikssituatie.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C] whitespace-nowrap">Model</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left whitespace-nowrap">Boiler</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left whitespace-nowrap">Druk</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Functies</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left whitespace-nowrap">Filter</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left whitespace-nowrap">CUBE?</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left whitespace-nowrap">Prijs</th>
                </tr>
              </thead>
              <tbody>
                {modellenTabel.map((row, i) => (
                  <tr key={row.model} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800 whitespace-nowrap">{row.model}</td>
                    <td className="py-2.5 px-3 text-gray-700 whitespace-nowrap">{row.boiler}</td>
                    <td className="py-2.5 px-3 text-gray-600 whitespace-nowrap">{row.druk}</td>
                    <td className="py-2.5 px-3 text-gray-700">{row.functies}</td>
                    <td className="py-2.5 px-3 text-gray-600 whitespace-nowrap">{row.filter}</td>
                    <td className="py-2.5 px-3 text-center">
                      <span className={`text-xs font-semibold ${row.cube === 'Ja' ? 'text-[#005F8A]' : 'text-gray-400'}`}>
                        {row.cube}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A] whitespace-nowrap">{row.prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Adviesprijs­en zijn indicatief en afhankelijk van gekozen kraanontwerp (Nordic Round, Nordic Square,
            Twintaps, etc.). Prijzen inclusief BTW, exclusief installatie.
          </p>
        </section>

        {/* Welk model past bij jouw waterdruk? */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welk model past bij jouw waterdruk?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De waterdruk in jouw woning bepaalt welke boilerversie je nodig hebt. Dit is een technische vereiste
            die je niet kunt omzeilen: een standaard PRO3 bij te hoge of te lage druk zal niet goed functioneren
            of kan schade oplopen. Hier lees je hoe je het verschil herkent.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#005F8A]/20 bg-[#E0F2FE]/30 p-5">
              <p className="font-bold text-[#003F5C] mb-2">Standaard versie (1,5–4 bar)</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Geschikt voor de meeste Nederlandse woningen. De waterdruk van een gemiddeld rijtjeshuis of
                appartement valt vrijwel altijd in dit bereik. Als je twijfelt, meet dan de druk met een
                goedkope manometer op een buitenkraan.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>→ PRO3 voor normaal gebruik (1–2 personen)</li>
                <li>→ PRO7 voor gezinnen of intensief gebruik</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="font-bold text-gray-800 mb-2">VAQ versie (buiten 1,5–4 bar)</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Nodig bij een druk lager dan 1,5 bar (voorkomt in oudere woningen of bepaalde gebieden) of hoger
                dan 4 bar (sommige nieuwbouwwoningen of woningen direct aan het distributienetwerk). Twijfel je?
                Vraag je installateur.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>→ PRO3-VAQ of PRO7-VAQ</li>
                <li>→ Ook beschikbaar als FILTER-variant</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Weet je echt niet zeker welke druk jij hebt? Laat het meten door een loodgieter voor je een
            Quooker aanschaft. De VAQ-versie kost gemiddeld €100 meer dan de standaard versie.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Welke Quooker heeft een filter ingebouwd? */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke Quooker heeft een filter ingebouwd en wat filtert het?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De FILTER-modellen van Quooker leveren koud gefilterd water via een actief koolstoffilter. Dit is een
            nuttige extra, maar het is belangrijk te begrijpen wat dit filter <em>wel</em> en <em>niet</em> doet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-[#E0F2FE]/50 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">Wat filtert het actief koolfilter?</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex gap-2"><span className="text-[#005F8A]">✓</span> Chloor en chloorverbindingen</li>
                <li className="flex gap-2"><span className="text-[#005F8A]">✓</span> Reukstoffen en smaakverbetering</li>
                <li className="flex gap-2"><span className="text-[#005F8A]">✓</span> Sommige organische verbindingen</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-2">Wat filtert het NIET?</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex gap-2"><span className="text-red-400">✗</span> Kalk (calcium/magnesium)</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> Nitraat en nitriet</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> PFAS en pfos</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> Zware metalen (lood, koper)</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> Microplastics</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Woon je in een gebied met hard water, verhoogde nitraatwaarden of wil je bescherming tegen PFAS?
            Dan is het Quooker-filter onvoldoende. In dat geval is een aanvullend omgekeerde osmose systeem
            de betere keuze. Lees meer op onze pagina over het{' '}
            <Link href="/quooker-filter" className="text-[#005F8A] underline">Quooker filter</Link> en bekijk
            de vergelijking op <Link href="/quooker-versus-osmose" className="text-[#005F8A] underline">Quooker versus osmose</Link>.
          </p>
        </section>

        {/* FUSION vs losse PRO */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Quooker FUSION versus losse PRO — wanneer kies je welke?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De keuze tussen FUSION en een losse PRO-boiler is in wezen een afweging tussen
            <strong> keukenruimte en budget</strong>. Beide leveren identiek kokend water. Het verschil zit in
            het kraangat en de integratie met je bestaande mengkraan.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-2">Kies FUSION als...</p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">→</span>
                  Je slechts één kraangat in je aanrechtblad wilt of hebt
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">→</span>
                  Je een strakke, minimalistische look wilt met één kraan voor alle functies
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">→</span>
                  Je de bestaande mengkraan wil vervangen (renovatie of nieuwbouw)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">→</span>
                  Budget geen bezwaar is (FUSION kost €400–900 meer dan een losse PRO3)
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-2">Kies een losse PRO-boiler als...</p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">→</span>
                  Je je bestaande mengkraan wilt behouden
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">→</span>
                  Er al een extra kraangat beschikbaar is of eenvoudig geboord kan worden
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">→</span>
                  Je de PRO7 wilt (7L boiler — beschikbaar als losse versie, niet als FUSION)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">→</span>
                  Je wilt besparen ten opzichte van de FUSION-serie
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Let op: de Quooker PRO7 is <em>niet</em> beschikbaar als FUSION-model. Wil je een grote boiler
            (7 liter) én een geïntegreerde kraan? Dan zijn de opties buiten Quooker interessanter.
            Bekijk ons overzicht van <Link href="/quooker-alternatief" className="text-[#005F8A] underline">Quooker alternatieven</Link> voor meer context.
          </p>
        </section>

        {/* CUBE vs CHILLED */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            CUBE versus CHILLED — welke add-on past bij jou?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Beide add-ons vereisen een Quooker FILTER-model en worden apart onder het aanrecht geplaatst.
            Het verschil: de CUBE levert ook bruisend water, de CHILLED uitsluitend gekoeld water.
            Hieronder een directe vergelijking.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Eigenschap</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">CUBE</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">CHILLED</th>
                </tr>
              </thead>
              <tbody>
                {cubeVsChilledData.map((row, i) => (
                  <tr key={row.eigenschap} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{row.eigenschap}</td>
                    <td className="py-2.5 px-3 text-gray-700">{row.cube}</td>
                    <td className="py-2.5 px-3 text-gray-700">{row.chilled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-3">
            <div className="bg-gray-50 rounded-xl p-4 flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Kies CUBE als je bruisend water belangrijk vindt</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  De CUBE is de populairste add-on omdat het thuis bruisend water mogelijk maakt. Geen losse
                  flessen meer of een apart sodastream-apparaat. Het CO₂-patroon moet jaarlijks worden gewisseld
                  of bijgevuld — vraag bij je dealer naar de kosten en beschikbaarheid in jouw regio.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Kies CHILLED als je alleen koud water wilt</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  De CHILLED is eenvoudiger en goedkoper dan de CUBE, en heeft geen CO₂-patroon nodig.
                  Geschikt als je alleen gekoeld leidingwater wilt — maar dan rijst de vraag of een separate
                  waterkoeler in de koelkast niet eenvoudiger en goedkoper is.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Wil je meer weten over de CUBE specifiek? Lees onze uitgebreide pagina over de{' '}
            <Link href="/quooker-cube" className="text-[#005F8A] underline">Quooker CUBE</Link>.
          </p>
        </section>

        {/* Wanneer is een osmose aanvulling zinvol? */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een osmosefilter een zinvolle aanvulling op een Quooker?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Geen enkel Quooker-model biedt standaard osmosefiltratie. Het actief koolfilter in de
            FILTER-modellen verbetert de smaak, maar verwijdert geen kalk, nitraat of PFAS.
            In de volgende situaties is het zinvol aanvullend over een osmosefilter na te denken:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Harde watergebieden (>20°DH)',
                tekst:
                  'In grote delen van Nederland is het leidingwater matig tot zeer hard. Kalk tast op termijn de boiler en het filterpatroon van je Quooker aan. Een osmosefilter op de koudwatertoevoer verlengt de levensduur en geeft kalkvrij drinkwater.',
              },
              {
                titel: 'Nitraat in het grondwater',
                tekst:
                  'Woningen boven landbouwgebieden (met name Brabant, Gelderland en Limburg) hebben soms verhoogde nitraatgehaltes in het leidingwater. Het Quooker-filter verwijdert dit niet. Een osmosemembraan wél.',
              },
              {
                titel: 'Bezorgdheid over PFAS',
                tekst:
                  'PFAS (eeuwigdurende chemicaliën) zijn aangetoond in bronnen van sommige Nederlandse waterbedrijven. Omgekeerde osmose verwijdert PFAS effectief tot onder detectieniveaus.',
              },
              {
                titel: 'Je wilt het schoonste water voor koffie en thee',
                tekst:
                  'Osmosewater verbetert significant de smaak van koffie en thee doordat mineralen die interfereren met de smaakextractie verwijderd worden. Baristas gebruiken dit niet voor niets.',
              },
            ].map(r => (
              <div key={r.titel} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{r.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Wil je een complete vergelijking? Bekijk onze pagina{' '}
            <Link href="/quooker-versus-osmose" className="text-[#005F8A] underline">Quooker versus osmose</Link> of
            lees over <Link href="/quooker-alternatief" className="text-[#005F8A] underline">alternatieven voor Quooker</Link> die
            osmose standaard ingebouwd hebben.
          </p>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/quooker-prijs', label: 'Quooker prijs: alle modellen en TCO-vergelijking' },
              { href: '/quooker-filter', label: 'Quooker filter: wat filtert het wel en niet?' },
              { href: '/quooker-cube', label: 'Quooker CUBE: hoe werkt bruisend water thuis?' },
              { href: '/quooker-versus-osmose', label: 'Quooker versus osmose: eerlijke vergelijking' },
              { href: '/quooker-alternatief', label: 'Quooker alternatieven: alle opties naast elkaar' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over Quooker-modellen
          </h2>
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

      </div>
    </>
  );
}
