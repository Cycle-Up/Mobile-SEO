import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kennisbank — waterfilters, osmose en waterkwaliteit',
  description:
    'Diepgaande artikelen over omgekeerde osmose, waterhardheid, kokend water kranen en waterkwaliteit in Nederland.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kennisbank' },
  openGraph: {
    title: 'Kennisbank — waterfilters, osmose en waterkwaliteit',
    description: 'Diepgaande artikelen over omgekeerde osmose, waterhardheid, kokend water kranen en waterkwaliteit in Nederland.',
  },
};

const artikelen = [
  {
    slug: 'waterfilter-vergelijken-2026',
    titel: 'Waterfilter vergelijken 2026: welk systeem wint?',
    samenvatting: 'Nieuwe PFAS-normen en microplastics veranderden het speelveld in 2026. Ontdek welk filtersysteem past bij jouw woning en gezin.',
    categorie: 'Vergelijken',
    datum: '13 mei 2026',
  },
  {
    slug: 'beste-kokend-water-kraan-2026',
    titel: 'Beste kokend water kraan 2026: top 5 vergeleken',
    samenvatting: 'Welke kokend water kraan is de beste keuze in 2026? Top 5 vergeleken op prijs, filteropties, installatie en kosten over 5 jaar.',
    categorie: 'Vergelijken',
    datum: '13 mei 2026',
  },
  {
    slug: '4-in-1-kraan',
    titel: '4-in-1 kraan: kokend, koud, warm en bruisend water',
    samenvatting: 'Alles over de 4-in-1 kraan: hoe het werkt, welke merken het aanbieden, kosten en of het de investering waard is voor jouw keuken.',
    categorie: 'Toepassingen',
    datum: '13 mei 2026',
  },
  {
    slug: 'arseen-drinkwater',
    titel: 'Arseen in drinkwater: gevaarlijk en wat kun je doen?',
    samenvatting: 'Arseen in drinkwater: wat is het, hoe gevaarlijk is het en hoe verwijder je het? Alles over de EU-norm, risico\'s en osmosefilters.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'drinkwater-baby',
    titel: 'Drinkwater voor baby\'s: kraanwater, fles of gefilterd?',
    samenvatting: 'Wanneer mag een baby water drinken? Kraanwater, flessenwater of osmosewater — lees wat veilig is voor zuigelingen.',
    categorie: 'Gezondheid',
    datum: '13 mei 2026',
  },
  {
    slug: 'drinkwater-zwangerschap',
    titel: 'Drinkwater tijdens zwangerschap: wat is veilig?',
    samenvatting: 'Is kraanwater veilig tijdens de zwangerschap? We bespreken nitraat, lood, PFAS en chloor eerlijk en zonder overdrijving.',
    categorie: 'Gezondheid',
    datum: '13 mei 2026',
  },
  {
    slug: 'fluor-drinkwater',
    titel: 'Fluor in drinkwater: toegevoegd of niet in Nederland?',
    samenvatting: 'Nederland voegt al decennia geen fluor toe aan drinkwater. Lees wat dat betekent en hoeveel fluoride er van nature in zit.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'kalk-koffiemachine',
    titel: 'Kalk in koffiemachine: ontkalken en voorkomen',
    samenvatting: 'Kalk in je koffiemachine verkort de levensduur en verslechtert de koffie. Leer hoe je ontkalkt, hoe vaak en hoe je aanslag voorkomt.',
    categorie: 'Toepassingen',
    datum: '13 mei 2026',
  },
  {
    slug: 'kalk-wasmachine',
    titel: 'Kalk in wasmachine: schade, kosten en oplossing',
    samenvatting: 'Kalk in de wasmachine sloopt het verwarmingselement, verhoogt je energierekening en wast minder schoon. Ontdek de oplossingen.',
    categorie: 'Toepassingen',
    datum: '13 mei 2026',
  },
  {
    slug: 'kalkvrij-koken',
    titel: 'Kalkvrij koken: tips en het beste water voor je pan',
    samenvatting: 'Kalkvrij koken en geen witte aanslag meer in je pan? Ontdek welk water het beste werkt en hoe je kalkranden eenvoudig verwijdert.',
    categorie: 'Praktisch',
    datum: '13 mei 2026',
  },
  {
    slug: 'kokend-water-kraan-baby',
    titel: 'Kokend water kraan met baby: veilig gebruik en tips',
    samenvatting: 'Kokend water kraan veilig met baby? Lees hoe het kinderslot werkt en of het water puur genoeg is voor flesvoeding.',
    categorie: 'Gezondheid',
    datum: '13 mei 2026',
  },
  {
    slug: 'lood-drinkwater',
    titel: 'Lood in drinkwater: risico\'s, oorzaken en oplossing',
    samenvatting: 'Lood in kraanwater komt bijna altijd uit oude loodleidingen. Lees wat de risico\'s zijn en hoe een osmosefilter beschermt.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'osmose-membraan-types',
    titel: 'Osmose membraan types: TFC, CTA en welke het beste is',
    samenvatting: 'TFC of CTA membraan? Vergelijk zuiverheid, chloorbestendigheid, levensduur en kosten — en ontdek welk type het beste bij jouw situatie past.',
    categorie: 'Osmose',
    datum: '13 mei 2026',
  },
  {
    slug: 'osmose-membraan-vervangen',
    titel: 'Osmose membraan vervangen: wanneer en hoe doe je dat?',
    samenvatting: 'Wanneer moet je het osmose membraan vervangen? Signalen herkennen, stap-voor-stap handleiding en de kosten van vervanging.',
    categorie: 'Osmose',
    datum: '13 mei 2026',
  },
  {
    slug: 'osmose-water-aquarium',
    titel: 'Osmose water aquarium: wanneer en hoe gebruik je het?',
    samenvatting: 'Osmose water in je aquarium geeft volledige controle over GH, KH en TDS. Leer wanneer het zinvol is en hoe je remineraliseert.',
    categorie: 'Toepassingen',
    datum: '13 mei 2026',
  },
  {
    slug: 'osmose-water-sport',
    titel: 'Osmose water en sport: is het goed voor sporters?',
    samenvatting: 'Is osmosewater goed voor sporters? We kijken naar elektrolyten, hydratie en wanneer aanvulling nodig is. Eerlijk advies.',
    categorie: 'Gezondheid',
    datum: '13 mei 2026',
  },
  {
    slug: 'ph-waarde-drinkwater',
    titel: 'pH-waarde drinkwater: wat is ideaal voor je gezondheid?',
    samenvatting: 'Wat is de ideale pH-waarde voor drinkwater? Van WHO-normen tot alkalisch water claims — een eerlijk wetenschappelijk overzicht.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'regenwater-drinken',
    titel: 'Regenwater drinken: kan het en wat is er nodig?',
    samenvatting: 'Is regenwater drinken veilig? Wat zit erin, waarvoor is het geschikt en welke filterstappen zijn nodig om het drinkbaar te maken?',
    categorie: 'Praktisch',
    datum: '13 mei 2026',
  },
  {
    slug: 'tds-meter-kopen',
    titel: 'TDS-meter kopen: hoe gebruik je het en wat meet je?',
    samenvatting: 'TDS-meter kopen voor drinkwater? Leer wat een TDS-meter meet, hoe je het gebruikt en wat normale waarden zijn voor osmosewater.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'tds-water',
    titel: 'TDS-waarde water: wat is het en wat is normaal?',
    samenvatting: 'Wat is TDS in drinkwater? De mg/L schaal, WHO-normen, het verschil met osmosewater en wanneer een lage TDS beter of slechter is.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'water-koffie',
    titel: 'Water voor koffie: ideale hardheid en TDS voor espresso',
    samenvatting: 'Welk water geeft de beste koffiesmaak? Leer over TDS, waterhardheid, mineralen en osmose water voor espresso en filterkoffie.',
    categorie: 'Praktisch',
    datum: '13 mei 2026',
  },
  {
    slug: 'water-thee',
    titel: 'Water voor thee: welke temperatuur en hardheid?',
    samenvatting: 'Welk water is het beste voor thee? Leer over watertemperatuur per theesoort, waterhardheid en hoe kalk uw theesmaak bederft.',
    categorie: 'Praktisch',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterfilter-camper',
    titel: 'Waterfilter voor camper of caravan: welk type?',
    samenvatting: 'Welk waterfilter is geschikt voor camper of caravan? Vergelijking van inline koolstof, UF, RO en filterkruiken op prijs en filterkwaliteit.',
    categorie: 'Praktisch',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterfilter-huren',
    titel: 'Waterfilter huren of kopen: wat is voordeliger?',
    samenvatting: 'Waterfilter huren of kopen? Vergelijk kosten op 3 en 5 jaar en ontdek wanneer huur slim is en wanneer kopen veel voordeliger uitpakt.',
    categorie: 'Praktisch',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterfilter-installatie-kosten',
    titel: 'Waterfilter installeren: kosten en wat je nodig hebt',
    samenvatting: 'Waterfilter installeren: wat kost het per type filter, wanneer doe je het zelf en wanneer heb je een installateur nodig?',
    categorie: 'Installatie',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterfilter-onderhoud',
    titel: 'Waterfilter onderhoud: hoe en hoe vaak?',
    samenvatting: 'Waterfilter onderhoud per filtertype: filterkan, koolstoffilter, osmose systeem en meer. Inclusief kosten per jaar en onderhoudschema\'s.',
    categorie: 'Installatie',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterfilter-test',
    titel: 'Waterfilter test: hoe test je of je filter werkt?',
    samenvatting: 'Waterfilter testen? Ontdek 4 methodes: TDS-meter, smaaktest, teststrips en professioneel wateronderzoek. Weet wanneer je filter versleten is.',
    categorie: 'Praktisch',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterhardheid-meten',
    titel: 'Waterhardheid meten: methoden, strips en TDS-meter',
    samenvatting: 'Waterhardheid meten? Vergelijk teststrips, TDS-meter, druppeltest en labonderzoek. Met uitleg over °dH, °fH en ppm.',
    categorie: 'Waterhardheid',
    datum: '13 mei 2026',
  },
  {
    slug: 'zacht-water-voordelen',
    titel: 'Zachte water voordelen: minder kalk, zuiniger en meer',
    samenvatting: 'Zacht water voordelen én nadelen eerlijk uitgelegd. Minder kalk, minder wasmiddel, langere apparaatlevensduur — en wanneer het te zacht wordt.',
    categorie: 'Waterhardheid',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterkwaliteit-nederland',
    titel: 'Waterkwaliteit Nederland: hoe schoon is ons kraanwater echt?',
    samenvatting: 'Hoe schoon is Nederlands kraanwater? Lees over normen, controle, regionale verschillen en wanneer filteren zinvol is.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'pfas-drinkwater',
    titel: 'PFAS in drinkwater: hoe erg is het & wat helpt?',
    samenvatting: 'PFAS in drinkwater — wat zijn forever chemicals, hoe erg is het in Nederland en welke filters helpen écht? Eerlijk overzicht.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'microplastics-drinkwater',
    titel: 'Microplastics in drinkwater: hoe erg & wat helpt?',
    samenvatting: 'Microplastics in kraanwater — wat weten we, wat is het risico en welke filters verwijderen ze? Nuchter overzicht met de feiten.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'chloor-in-drinkwater',
    titel: 'Chloor in drinkwater: nuttig of schadelijk?',
    samenvatting: 'Zit er chloor in Nederlands kraanwater? Hoeveel, hoe schadelijk, en hoe verwijder je het? Met praktische tips en filtervergelijking.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'filterkan-vs-osmose',
    titel: 'Filterkan vs osmose filter: welke kies je?',
    samenvatting: 'Filterkan of osmose? Vergelijk beide systemen op zuiverheid, kosten per liter en gemak — en ontdek welk filter het beste bij jou past.',
    categorie: 'Vergelijken',
    datum: '13 mei 2026',
  },
  {
    slug: 'brita-vs-osmose',
    titel: 'Brita vs osmose filter: eerlijke vergelijking',
    samenvatting: 'Brita of osmose filter — wat filtert beter en wat is goedkoper? Eerlijke vergelijking op filterwerking, kosten en toepassingen.',
    categorie: 'Vergelijken',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterfilter-keuken',
    titel: 'Waterfilter keuken: welk systeem past bij jou?',
    samenvatting: 'Welk waterfilter past in jouw keuken? Vergelijk filterkan, inline filter, osmose en 4-in-1 kraan op prijs, werking en installatiegemak.',
    categorie: 'Vergelijken',
    datum: '13 mei 2026',
  },
  {
    slug: 'kalk-verwijderen-water',
    titel: 'Kalk verwijderen uit water: alle methoden vergeleken',
    samenvatting: 'Kalk verwijderen uit leidingwater? Vergelijk waterontharder, osmose filter en magnetische ontharder op werking, kosten en effectiviteit.',
    categorie: 'Waterkwaliteit',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterfilter-onder-aanrecht',
    titel: 'Waterfilter onder aanrecht: types, kosten & installatie',
    samenvatting: 'Een waterfilter onder het aanrecht installeren? Vergelijk koolstoffilter, osmose en 4-in-1 systemen op prijs, ruimtegebruik en filterkwaliteit.',
    categorie: 'Installatie',
    datum: '13 mei 2026',
  },
  {
    slug: 'reverse-osmosis-nadelen',
    titel: 'Omgekeerde osmose nadelen: eerlijk overzicht',
    samenvatting: 'Wat zijn de nadelen van omgekeerde osmose? Afvalwater, mineralen, kosten en snelheid eerlijk besproken — en hoe moderne systemen deze oplossen.',
    categorie: 'Osmose',
    datum: '13 mei 2026',
  },
  {
    slug: 'osmose-water-kopen',
    titel: 'Osmose water kopen: systeem of flessenwater?',
    samenvatting: 'Osmose water kopen in flessen of zelf thuis maken? Vergelijk kosten, kwaliteit en gemak — en ontdek waarom een eigen systeem al snel goedkoper is.',
    categorie: 'Osmose',
    datum: '13 mei 2026',
  },
  {
    slug: 'bruisend-water-thuis',
    titel: 'Bruisend water thuis: de beste opties vergeleken',
    samenvatting: 'SodaStream, onderaanrecht-systeem of 4-in-1 kraan? We vergelijken alle opties voor bruisend water thuis op prijs, kwaliteit en kosten over 3 jaar.',
    categorie: 'Vergelijken',
    datum: '13 mei 2026',
  },
  {
    slug: 'osmose-water',
    titel: 'Osmose water: wat is het en hoe maak je het thuis?',
    samenvatting: 'Wat is osmose water, hoe zuiver is het en hoe maak je het thuis? Vergelijking met flessenwater, kosten per liter en de beste systemen.',
    categorie: 'Osmose',
    datum: '13 mei 2026',
  },
  {
    slug: 'kalk-in-huis',
    titel: 'Kalk in huis: oorzaken, gevolgen en de beste oplossing',
    samenvatting: 'Witte aanslag, verstopte apparaten, hogere energierekening — kalk kost je meer dan je denkt. Ontdek de oorzaken en de beste structurele oplossing.',
    categorie: 'Waterkwaliteit',
    datum: '1 april 2026',
  },
  {
    slug: 'waterfilter-vergelijken',
    titel: 'Waterfilter vergelijken: welk systeem past bij jou?',
    samenvatting: 'Filterkan, osmosefilter, waterontharder of 4-in-1 kraan? We vergelijken alle types eerlijk op prijs, werking en toepassingen.',
    categorie: 'Vergelijken',
    datum: '1 maart 2026',
  },
  {
    slug: 'kokend-water-kraan-installeren',
    titel: 'Kokend water kraan installeren: stap-voor-stap handleiding',
    samenvatting: 'Zelf een kokend water kraan installeren? Volg deze complete handleiding voor een veilige en correcte installatie, inclusief tips en veelgemaakte fouten.',
    categorie: 'Installatie',
    datum: '15 maart 2026',
  },
  {
    slug: 'waterhardheid-verlagen',
    titel: 'Waterhardheid verlagen: oorzaken, gevolgen en oplossingen',
    samenvatting: 'Hard water veroorzaakt kalk in huis. Leer hoe je waterhardheid verlaagt met de juiste waterfilter, waterontharder of osmosesysteem.',
    categorie: 'Waterhardheid',
    datum: '15 februari 2026',
  },
  {
    slug: 'osmose-water-apparaat',
    titel: 'Osmose water apparaat kopen: kosten, types en tips',
    samenvatting: 'Welk osmose water apparaat past bij jou? Vergelijk de types op prijs, capaciteit en functies — van €150 losse filter tot complete 4-in-1 kraan.',
    categorie: 'Osmose',
    datum: '1 februari 2026',
  },
  {
    slug: 'osmose-water-drinken',
    titel: 'Osmose water drinken — is het gezond?',
    samenvatting: 'Is osmose water drinken gezond? We bespreken de effecten, de mineralen die ontbreken, en wanneer een remineralisatiefilter zinvol is.',
    categorie: 'Osmose',
    datum: '15 januari 2026',
  },
  {
    slug: 'nitraat-drinkwater',
    titel: 'Nitraat in drinkwater: risico\'s, normen en de beste oplossing',
    samenvatting: 'Is nitraat in drinkwater gevaarlijk? Lees over normen, wie risico loopt (zuigelingen!) en hoe een osmosefilter 95% van het nitraat verwijdert.',
    categorie: 'Waterkwaliteit',
    datum: '20 april 2026',
  },
  {
    slug: 'waterontharder-kosten',
    titel: 'Waterontharder kosten: aanschaf, installatie en zout',
    samenvatting: 'Wat kost een waterontharder echt? Compleet overzicht van aanschaf (€500–2000), installatie, zoutverbruik, onderhoud en terugverdientijd.',
    categorie: 'Waterhardheid',
    datum: '13 mei 2026',
  },
  {
    slug: 'waterontharder',
    titel: 'Waterontharder: hoe werkt het en wanneer is het slim?',
    samenvatting: 'Waterontharder kopen of toch een osmosefilter? We vergelijken beide systemen eerlijk op prijs, werking en toepassingen voor thuis.',
    categorie: 'Waterhardheid',
    datum: '15 april 2026',
  },
];

export default function KennisbankPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kennisbank', url: 'https://waterfilterplatform.nl/kennisbank' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Kennisbank</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Kennisbank</h1>
          <p className="text-gray-600 text-lg">
            Diepgaande artikelen over waterfilters, waterkwaliteit en alles wat je wilt weten over osmose water en kokend water kranen.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-4">
          {artikelen.map(a => (
            <Link
              key={a.slug}
              href={`/kennisbank/${a.slug}`}
              className="group block border border-gray-100 rounded-2xl p-5 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-[#E0F2FE] text-[#005F8A] px-2 py-0.5 rounded-full font-medium">{a.categorie}</span>
                <span className="text-xs text-gray-400">{a.datum}</span>
              </div>
              <h2 className="font-bold text-gray-900 group-hover:text-[#005F8A] transition-colors mb-1">{a.titel}</h2>
              <p className="text-sm text-gray-500">{a.samenvatting}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
