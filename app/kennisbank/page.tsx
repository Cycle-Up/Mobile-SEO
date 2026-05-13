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
