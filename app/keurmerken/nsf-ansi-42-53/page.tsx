import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'NSF/ANSI 42 en 53 — keurmerken voor actief koolfilters | WaterfilterPlatform',
  description: 'NSF 42 certificeert esthetische kwaliteit (chloor, geur, smaak), NSF 53 gezondheidsrelevante stoffen (lood, VOC). Verschil uitgelegd en welk filter welk label nodig heeft.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keurmerken/nsf-ansi-42-53' },
};

export default function NsfAnsi4253Page() {
  return (
    <>
      <SchemaOrg type="Article" article={{
        title: 'NSF/ANSI 42 en 53 — keurmerken voor actief koolfilters',
        description: 'NSF 42 certificeert esthetische kwaliteit (chloor, geur, smaak), NSF 53 gezondheidsrelevante stoffen (lood, VOC). Verschil uitgelegd en welk filter welk label nodig heeft.',
        datePublished: '2026-05-17',
        url: 'https://waterfilterplatform.nl/keurmerken/nsf-ansi-42-53',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keurmerken">Keurmerken</Link> &rsaquo; NSF/ANSI 42 en 53
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            NSF/ANSI 42 en 53 &mdash; keurmerken voor actief koolfilters
          </h1>
          <QuickAnswer answer="NSF/ANSI 42 certificeert dat een filter de smaak en geur van water verbetert (chloor, sediment). NSF/ANSI 53 gaat verder en bewijst dat het filter gezondheidsrelevante stoffen verwijdert zoals lood, bepaalde pesticiden en vluchtige organische verbindingen." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Twee niveaus van koolfilter-certificering</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Actief koolfilters zijn de meest verkochte thuisfilters ter wereld: van filterkannen tot under-sink koolstofblokken. NSF International heeft twee afzonderlijke normen ontwikkeld voor deze categorie, elk met een andere scope en een ander beschermingsniveau.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het onderscheid is bewust: een filter die alleen de smaak verbetert heeft minder strenge eisen nodig dan een filter die gezondheidsrisicos moet reduceren. Beide normen vereisen echter materiaaltesting: ook een smaakfilter mag geen schadelijke stoffen afgeven aan het drinkwater.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">NSF/ANSI 42: esthetische kwaliteit</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 42 richt zich op esthetische parameters: eigenschappen van water die de smaak, geur of helderheid beinvloeden maar geen directe gezondheidsbedreiging vormen. De norm test:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Chloor:</strong> Vrij chloor dat door waterbedrijven wordt toegevoegd als desinfectiemiddel. Effectieve reductie verbetert de smaak aanzienlijk.</li>
            <li><strong>Chlooramine:</strong> Het alternatief voor chloor dat sommige waterbedrijven gebruiken en een specifieke geur veroorzaakt.</li>
            <li><strong>Sediment en troebelheid:</strong> Kleine deeltjes die het water troebel maken.</li>
            <li><strong>Zink:</strong> Hoge concentraties zink kunnen een metaalsmak geven.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Filterkannen zoals Brita en Soma zijn doorgaans gecertificeerd onder NSF/ANSI 42. Ze verbeteren de drinkervaring maar zijn niet bedoeld om gezondheidsrisicos te elimineren. Een NSF 42-certificering zegt niets over de verwijdering van lood, pesticiden of andere schadelijke stoffen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">NSF/ANSI 53: gezondheidsrelevante reductie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 53 gaat een stap verder en vereist dat het filter stoffen verwijdert die een direct gezondheidsrisico kunnen vormen. De norm omvat een substantieel grotere lijst van contaminanten:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Lood:</strong> Een van de meest gezochte certificeringen voor consumenten in oudere woningen met loden huisinstallaties.</li>
            <li><strong>Vluchtige organische verbindingen (VOC):</strong> Verbindingen als benzeen, tolueen en xylenen die in industriele gebieden in grondwater kunnen terechtkomen.</li>
            <li><strong>Chloorverbindingen:</strong> Trihalomethanen (THM) en haloacetonitrilen die ontstaan als bijproduct van chloordesinfectie.</li>
            <li><strong>Bepaalde pesticiden:</strong> Zoals atrazine en lindaan.</li>
            <li><strong>MTBE:</strong> Een brandstofadditief dat in kleine hoeveelheden in grondwater kan voorkomen.</li>
            <li><strong>Asbestveezels:</strong> Kunnen vrijkomen in gebouwen met oud leidingwerk.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een filter met NSF/ANSI 53 biedt daadwerkelijk gezondheidskundige bescherming, maar is geen vervanging voor een osmosefilter als het gaat om de breedte van verwijderde contaminanten. NSF/ANSI 53 dekt geen nitraten, fluoride of zware metalen anders dan lood.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welk filter heeft welk label nodig?</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-gray-700 mb-4">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">Filtertype</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">Minimale certificering</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">Aanbevolen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Filterkraan, smaakverbetering</td>
                  <td className="border border-gray-200 px-4 py-2">NSF 42</td>
                  <td className="border border-gray-200 px-4 py-2">NSF 42</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Oudere woning, lood risico</td>
                  <td className="border border-gray-200 px-4 py-2">NSF 53 (lood)</td>
                  <td className="border border-gray-200 px-4 py-2">NSF 53 + 42</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Sediment voorfilter</td>
                  <td className="border border-gray-200 px-4 py-2">NSF 42</td>
                  <td className="border border-gray-200 px-4 py-2">NSF 42</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Volledig osmosesysteem (RO)</td>
                  <td className="border border-gray-200 px-4 py-2">NSF 58</td>
                  <td className="border border-gray-200 px-4 py-2">NSF 58 + 42 + 401</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Veel fabrikanten certificeren hun koolfilters voor zowel NSF 42 als NSF 53 omdat de tests elkaar deels overlappen en een dubbele certificering de marketingwaarde verhoogt. Controleer altijd welke specifieke contaminanten zijn opgenomen in de certificering, niet alleen welke nummers op de verpakking staan.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Beperkingen van koolfilters tegenover osmose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Actief koolfilters zijn effectief voor de stoffen die onder NSF 42 en 53 vallen, maar hebben inherente beperkingen. Ze verwijderen geen nitraten, fluoride, zware metalen anders dan lood, of de meeste anorganische zouten. De TDS (totaal opgeloste stoffen) van het water verandert nauwelijks.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Als u een brede bescherming zoekt, inclusief PFAS, medicijnresten en kalk, is een osmosefilter met <Link href="/keurmerken/nsf-ansi-58" className="text-[#005F8A] hover:underline font-medium">NSF/ANSI 58</Link> en eventueel <Link href="/keurmerken/nsf-ansi-401" className="text-[#005F8A] hover:underline font-medium">NSF/ANSI 401</Link> een betere keuze.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Gerelateerde keurmerken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58</h3>
              <p className="text-sm text-gray-600">De norm voor omgekeerde osmosefilters: membraan, behuizing en prestaties.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-401" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 401</h3>
              <p className="text-sm text-gray-600">Certificering voor opkomende stoffen: medicijnresten, hormonen, DEET.</p>
            </Link>
            <Link href="/keurmerken/verificatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Certificering controleren</h3>
              <p className="text-sm text-gray-600">Hoe verifieert u of een keurmerk echt geldig is?</p>
            </Link>
            <Link href="/keurmerken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Alle keurmerken</h3>
              <p className="text-sm text-gray-600">Overzicht van NSF, Kiwa, ACS, CE en WRAS voor waterfilters.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
