import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hormonen en medicijnresten in drinkwater -- wat weten we?',
  description:
    'Oestrogeen, ibuprofen en metformine in drinkwater: concentraties in nanogram per liter. Wetenschappelijke discussie over gezondheidseffecten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/hormonen' },
};

export default function HormonenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Stoffen in drinkwater', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater' },
        { name: 'Hormonen en medicijnresten in drinkwater — wat weten we?', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/hormonen' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Zitten er medicijnresten in drinkwater?", answer: "Ja, in drinkwater worden sporen aangetroffen van medicijnen zoals ethinylestradiol (anticonceptiepil), ibuprofen, metformine en diclofenac, in concentraties van nanogram per liter. Conventionele waterzuivering verwijdert deze stoffen niet volledig." },
        { question: "Zijn hormonen en medicijnresten in drinkwater gevaarlijk?", answer: "Volgens RIVM en WHO zijn de concentraties in drinkwater te laag voor aantoonbare schade bij gezonde volwassenen. Er is wel een wetenschappelijke discussie over langdurige gecombineerde blootstelling aan meerdere stoffen tegelijk, met name bij foetussen en zuigelingen." },
        { question: "Welk filter verwijdert medicijnresten uit drinkwater?", answer: "Omgekeerde osmose gecombineerd met actief kool biedt de meest volledige verwijdering van farmaceutische microverontreinigingen. Systemen met NSF/ANSI 401-certificering zijn specifiek getest op 15 opkomende verontreinigingen waaronder hormonen en medicijnen." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'Hormonen en medicijnresten in drinkwater -- wat weten we?',
        description: 'Oestrogeen, ibuprofen en metformine in drinkwater: concentraties in nanogram per liter. Wetenschappelijke discussie over gezondheidseffecten.',
        datePublished: '2026-01-01',
        url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/hormonen',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; Hormonen en medicijnresten
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Hormonen en medicijnresten in drinkwater -- wat weten we?
          </h1>
          <QuickAnswer answer="In drinkwater worden sporen aangetroffen van medicijnen zoals ethinylestradiol, ibuprofen, metformine en diclofenac -- in concentraties van nanogram per liter. Het gezondheidseffect bij deze ultralagere concentraties is wetenschappelijk onzeker. Osmose gecombineerd met actief kool (NSF 401 gecertificeerd) biedt de meest effectieve verwijdering." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welke stoffen worden aangetroffen?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Geavanceerde analysemethoden maken het mogelijk om steeds meer medicijnresten in drinkwater te detecteren, ook bij extreem lage concentraties. De meest gemeten stoffen in Nederlands drinkwater en oppervlaktewater zijn:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">Stof</th>
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">Type</th>
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">Typische concentratie</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700 font-medium">Ethinylestradiol (EE2)</td>
                  <td className="p-3 text-gray-700">Anticonceptiepil (oestrogeen)</td>
                  <td className="p-3 text-gray-700">0,1-5 ng/L</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 text-gray-700 font-medium">Ibuprofen</td>
                  <td className="p-3 text-gray-700">NSAID pijnstiller</td>
                  <td className="p-3 text-gray-700">1-100 ng/L</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700 font-medium">Metformine</td>
                  <td className="p-3 text-gray-700">Diabetesmedicijn</td>
                  <td className="p-3 text-gray-700">10-1000 ng/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-700 font-medium">Diclofenac</td>
                  <td className="p-3 text-gray-700">NSAID pijnstiller</td>
                  <td className="p-3 text-gray-700">1-50 ng/L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">ng/L = nanogram per liter = 1 microgram per 1.000 liter</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Hoe komen medicijnresten in drinkwater?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Medicijnen worden door het lichaam slechts gedeeltelijk afgebroken. De rest wordt uitgescheiden via urine en ontlasting en bereikt rioolwaterzuiveringsinstallaties (RWZI). Conventionele zuivering is niet ontworpen om farmaceutische microverontreinigingen te verwijderen: een deel passert de RWZI en belandt in oppervlaktewater, dat in sommige regioos als bron dient voor drinkwaterproductie.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wetenschappelijke discussie: onduidelijk gezondheidseffect</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            De concentraties waarop medicijnresten in drinkwater voorkomen, liggen doorgaans duizenden tot miljoenen malen lager dan therapeutische doses. De wetenschappelijke consensus is dat de huidige concentraties in Nederlands drinkwater geen acuut gezondheidsrisico vormen voor gezonde volwassenen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Er is echter een voortgaande wetenschappelijke discussie over mogelijke effecten bij: langdurige gecombineerde blootstelling aan meerdere stoffen tegelijk (mengsel-effecten), hormonale verstoorders bij foetussen en zuigelingen, en de optelsom van blootstelling via water, voedsel en lucht.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
            <p className="font-semibold text-blue-800 mb-1">Stand van wetenschap</p>
            <p className="text-blue-700 text-sm">RIVM en WHO concluderen dat de concentraties in drinkwater te laag zijn voor aantoonbare schade. Tegelijk erkennen ze dat het ontbreekt aan langetermijnstudies naar de gecombineerde effecten van tientallen stoffen tegelijk -- een zogenoemde "cocktaileffect".</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">NSF 401: certificering voor opkomende stoffen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            NSF International heeft de NSF/ANSI 401-norm ontwikkeld die filters test op 15 opkomende verontreinigingen, waaronder farmaceutische stoffen, hormonen en pesticiden. Systemen met dit certificaat zijn gevalideerd op verwijdering van onder andere ibuprofen, estron, naproxen en meprobamat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer informatie: <Link href="/leidingwater/medicijnresten" className="text-[#005F8A] hover:underline">medicijnresten in leidingwater</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Osmose en actief kool: meest effectieve combinatie</h2>
          <p className="text-gray-700 leading-relaxed">
            Omgekeerde osmose gecombineerd met actief kool biedt de meest volledige verwijdering van farmaceutische microverontreinigingen. Actief kool adsorbeert organische moleculen; het RO-membraan filtert resterende geladen en neutrale deeltjes op grootte. Systemen gecertificeerd op NSF 401 en NSF 58 bieden de meeste garanties voor een bewezen reductie van medicijnresten.
          </p>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
